"use strict";

const {
  ApiError,
  getProviderLabel,
  getProviderModel,
  requestStructuredReview,
  requireProviderName,
  shouldUseAsyncWritingReview,
  response,
} = require("./_shared/ai");
const {
  createReviewJob,
  failReviewJob,
} = require("./_shared/review-jobs");

function validateEssayText(payload) {
  const essayText = String(payload.essay_text || "").trim();
  if (!essayText) {
    throw new ApiError("请求里缺少作文正文。", 400);
  }
  if (essayText.length > 20000) {
    throw new ApiError("作文内容过长，请控制在 20000 个字符以内。", 400);
  }
  return essayText;
}

function resolveSiteOrigin(event) {
  const forwardedProto = event.headers?.["x-forwarded-proto"] || event.headers?.["X-Forwarded-Proto"];
  const forwardedHost = event.headers?.["x-forwarded-host"] || event.headers?.host;
  if (forwardedHost) {
    return `${forwardedProto || "https"}://${forwardedHost}`;
  }
  return process.env.URL || process.env.DEPLOY_PRIME_URL || process.env.DEPLOY_URL || "http://127.0.0.1:8888";
}

async function enqueueBackgroundReview(event, job, payload) {
  const endpoint = new URL("/.netlify/functions/writing-review-background", resolveSiteOrigin(event)).toString();
  const triggerResponse = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      ...payload,
      job_id: job.id,
    }),
  });

  if (!triggerResponse.ok && triggerResponse.status !== 202) {
    throw new ApiError("后台精批任务启动失败，请稍后再试。", 502);
  }
}

exports.handler = async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return response(204, {});
  }

  if (event.httpMethod !== "POST") {
    return response(405, { error: "Method not allowed" });
  }

  try {
    const payload = JSON.parse(event.body || "{}");
    const provider = requireProviderName(payload.backend || payload.provider);
    validateEssayText(payload);

    if (shouldUseAsyncWritingReview(provider)) {
      const job = await createReviewJob({
        provider,
        provider_label: getProviderLabel(provider),
        review_model: getProviderModel(provider, "writing"),
        title: String(payload.prompt_payload?.title || "").trim(),
      });

      try {
        await enqueueBackgroundReview(event, job, payload);
      } catch (error) {
        await failReviewJob(job.id, error.message || error, {
          provider,
          provider_label: getProviderLabel(provider),
          review_model: getProviderModel(provider, "writing"),
        });
        throw error;
      }

      return response(202, {
        async: true,
        job_id: job.id,
        status: job.status,
        provider,
        provider_label: getProviderLabel(provider),
        review_model: getProviderModel(provider, "writing"),
        poll_url: `/api/ai/writing-review-status?id=${encodeURIComponent(job.id)}`,
      });
    }

    const result = await requestStructuredReview(
      provider,
      payload.prompt_payload || {},
      String(payload.essay_text || "").trim(),
      payload.local_metrics || {},
      payload.target_band,
    );

    return response(200, {
      provider,
      provider_label: result.provider_label || getProviderLabel(provider),
      review_model: result.model || getProviderModel(provider, "writing"),
      review: result.review || result,
    });
  } catch (error) {
    if (error instanceof ApiError) {
      return response(error.status, { error: error.message });
    }
    return response(500, { error: `服务内部错误：${error.message || error}` });
  }
};
