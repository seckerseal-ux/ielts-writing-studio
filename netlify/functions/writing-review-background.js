"use strict";

const {
  ApiError,
  getProviderLabel,
  getProviderModel,
  requestStructuredReview,
  requireProviderName,
  response,
} = require("./_shared/ai");
const {
  completeReviewJob,
  failReviewJob,
  markReviewJobRunning,
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

exports.handler = async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return response(204, {});
  }

  if (event.httpMethod !== "POST") {
    return response(405, { error: "Method not allowed" });
  }

  let jobId = "";
  let provider = "openai";

  try {
    const payload = JSON.parse(event.body || "{}");
    jobId = String(payload.job_id || "").trim();
    if (!jobId) {
      throw new ApiError("缺少后台精批任务编号。", 400);
    }

    provider = requireProviderName(payload.backend || payload.provider);
    const essayText = validateEssayText(payload);

    await markReviewJobRunning(jobId, {
      provider,
      provider_label: getProviderLabel(provider),
      review_model: getProviderModel(provider, "writing"),
    });

    const result = await requestStructuredReview(
      provider,
      payload.prompt_payload || {},
      essayText,
      payload.local_metrics || {},
      payload.target_band,
    );

    await completeReviewJob(jobId, {
      provider,
      provider_label: result.provider_label || getProviderLabel(provider),
      review_model: result.model || getProviderModel(provider, "writing"),
      review: result.review || result,
    });

    return response(202, { ok: true });
  } catch (error) {
    if (jobId) {
      await failReviewJob(jobId, error.message || error, {
        provider,
        provider_label: getProviderLabel(provider),
        review_model: getProviderModel(provider, "writing"),
      }).catch(() => {});
    }

    if (error instanceof ApiError) {
      return response(error.status, { error: error.message });
    }
    return response(500, { error: `服务内部错误：${error.message || error}` });
  }
};
