import { getReviewJob } from "../../_lib/db.js";
import { json, options } from "../../_lib/response.js";

export const onRequestOptions = () => options();

export async function onRequestGet(context) {
  try {
    const url = new URL(context.request.url);
    const jobId = String(url.searchParams.get("id") || url.searchParams.get("job_id") || "").trim();
    if (!jobId) {
      return json({ error: "缺少精批任务编号。" }, 400);
    }

    const job = await getReviewJob(context.env, jobId);
    if (!job) {
      return json({ error: "找不到这次 AI 精批任务。" }, 404);
    }

    return json(job);
  } catch (error) {
    return json({ error: error.message || "服务内部错误。" }, 500);
  }
}
