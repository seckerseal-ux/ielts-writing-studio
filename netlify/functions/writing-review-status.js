"use strict";

const { ApiError, response } = require("./_shared/ai");
const { readReviewJob } = require("./_shared/review-jobs");

exports.handler = async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return response(204, {});
  }

  if (event.httpMethod !== "GET") {
    return response(405, { error: "Method not allowed" });
  }

  try {
    const jobId = String(
      event.queryStringParameters?.id
      || event.queryStringParameters?.job_id
      || "",
    ).trim();

    if (!jobId) {
      throw new ApiError("缺少精批任务编号。", 400);
    }

    const job = await readReviewJob(jobId);
    if (!job) {
      throw new ApiError("找不到这次 AI 精批任务。", 404);
    }

    return response(200, job);
  } catch (error) {
    if (error instanceof ApiError) {
      return response(error.status, { error: error.message });
    }
    return response(500, { error: `服务内部错误：${error.message || error}` });
  }
};
