import { getAiStatus, requestStructuredReview } from "../../_lib/ai.js";
import {
  completeReviewJob,
  createReviewJob,
  failReviewJob,
  getReviewJob,
  markReviewJobRunning,
  recordEssayArtifacts,
} from "../../_lib/db.js";
import { json, options, readJson } from "../../_lib/response.js";

function validateEssayText(payload) {
  const essayText = String(payload.essay_text || "").trim();
  if (!essayText) {
    throw Object.assign(new Error("请求里缺少作文正文。"), { status: 400 });
  }
  if (essayText.length > 20000) {
    throw Object.assign(new Error("作文内容过长，请控制在 20000 个字符以内。"), { status: 400 });
  }
  return essayText;
}

function sanitizePromptPayload(rawPayload) {
  const payload = rawPayload && typeof rawPayload === "object" && !Array.isArray(rawPayload)
    ? { ...rawPayload }
    : {};
  const attachment = payload.image_attachment;

  if (!attachment || typeof attachment !== "object" || Array.isArray(attachment)) {
    delete payload.image_attachment;
    return payload;
  }

  const dataUrl = String(attachment.data_url || "").trim();
  if (!/^data:image\//i.test(dataUrl)) {
    throw Object.assign(new Error("题图格式不对，请重新上传图片。"), { status: 400 });
  }
  if (dataUrl.length > 1100000) {
    throw Object.assign(new Error("题图有点大，请裁小一点再上传。"), { status: 400 });
  }

  payload.image_attachment = {
    data_url: dataUrl,
    name: String(attachment.name || "prompt-image").trim().slice(0, 120),
    mime_type: String(attachment.mime_type || "image/jpeg").trim().slice(0, 80),
    width: Math.max(0, Number(attachment.width || 0) || 0),
    height: Math.max(0, Number(attachment.height || 0) || 0),
  };

  return payload;
}

function getReviewMode(payload) {
  return String(payload?.local_metrics?.reviewMode || "").trim().toLowerCase() === "paragraph"
    ? "paragraph"
    : "essay";
}

async function processReviewJob(env, job) {
  await markReviewJobRunning(env, job.id, {
    provider: job.provider,
    provider_label: job.provider_label,
    review_model: job.review_model,
  });

  try {
    const result = await requestStructuredReview(
      env,
      job.provider,
      job.prompt_payload || {},
      job.essay_text || "",
      job.local_metrics || {},
      job.target_band,
    );

    const completed = await completeReviewJob(env, job.id, {
      provider: job.provider,
      provider_label: result.provider_label || job.provider_label,
      review_model: result.model || job.review_model,
      review: result.review || result,
    });

    try {
      await recordEssayArtifacts(env, completed, completed.review);
    } catch {
      // The review itself is the user-facing result. Archiving failures should not hide it.
    }
  } catch (error) {
    await failReviewJob(env, job.id, error.message || error, {
      provider: job.provider,
      provider_label: job.provider_label,
      review_model: job.review_model,
    });
  }
}

async function completeReviewNow(env, job) {
  await processReviewJob(env, job);
  const completed = await getReviewJob(env, job.id);

  if (!completed) {
    throw Object.assign(new Error("AI 精批任务写回失败。"), { status: 500 });
  }
  if (completed.status === "failed") {
    throw Object.assign(new Error(completed.error || "AI 精批失败。"), { status: 502 });
  }

  return completed;
}

export const onRequestOptions = () => options();

export async function onRequestPost(context) {
  try {
    const payload = await readJson(context.request);
    const status = getAiStatus(context.env);
    const provider = String(payload.backend || payload.provider || "openai").trim().toLowerCase() === "openrouter"
      ? "openrouter"
      : "openai";
    const reviewMode = getReviewMode(payload);
    const essayText = validateEssayText(payload);
    const promptPayload = sanitizePromptPayload(payload.prompt_payload);
    const providerStatus = status.backends?.[provider];

    if (!providerStatus?.available) {
      return json({ error: "当前选择的 AI 后端还没有配置完成。" }, 503);
    }

    if (reviewMode === "paragraph") {
      const result = await requestStructuredReview(
        context.env,
        provider,
        promptPayload,
        essayText,
        payload.local_metrics || {},
        payload.target_band || "",
      );

      return json({
        async: false,
        provider,
        provider_label: result.provider_label || providerStatus.provider_label,
        review_model: result.model || providerStatus.writing_review_model,
        review: result.review || result,
      });
    }

    const job = await createReviewJob(context.env, {
      device_id: String(payload.device_id || "").trim(),
      provider,
      provider_label: providerStatus.provider_label,
      review_model: providerStatus.writing_review_model,
      title: String(promptPayload?.title || "").trim(),
      prompt_payload: promptPayload,
      essay_text: essayText,
      local_metrics: payload.local_metrics || {},
      target_band: payload.target_band || "",
    });

    const completed = await completeReviewNow(context.env, job);

    return json({
      async: false,
      id: completed.id,
      provider,
      provider_label: completed.provider_label || providerStatus.provider_label,
      review_model: completed.review_model || providerStatus.writing_review_model,
      review: completed.review,
    });
  } catch (error) {
    return json({ error: error.message || "服务内部错误。" }, error.status || 500);
  }
}
