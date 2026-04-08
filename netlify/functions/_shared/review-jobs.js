"use strict";

const { randomUUID } = require("crypto");
const { getStore } = require("@netlify/blobs");

const REVIEW_JOB_STORE_NAME = "writing-review-jobs";

function getReviewJobStoreConfig() {
  const siteID = process.env.NETLIFY_BLOBS_SITE_ID
    || process.env.NETLIFY_SITE_ID
    || process.env.SITE_ID
    || "";
  const token = process.env.NETLIFY_BLOBS_TOKEN
    || process.env.NETLIFY_AUTH_TOKEN
    || "";

  return {
    name: REVIEW_JOB_STORE_NAME,
    siteID: siteID || undefined,
    token: token || undefined,
    consistency: "strong",
  };
}

function getReviewJobStore() {
  return getStore(getReviewJobStoreConfig());
}

function buildReviewJobKey(jobId) {
  return `job:${jobId}`;
}

function nowIso() {
  return new Date().toISOString();
}

async function readReviewJob(jobId) {
  if (!jobId) {
    return null;
  }
  const store = getReviewJobStore();
  return store.get(buildReviewJobKey(jobId), {
    type: "json",
    consistency: "strong",
  });
}

async function writeReviewJob(jobId, patch) {
  const store = getReviewJobStore();
  const previous = await readReviewJob(jobId).catch(() => null);
  const timestamp = nowIso();
  const value = {
    id: jobId,
    created_at: previous?.created_at || timestamp,
    updated_at: timestamp,
    ...(previous || {}),
    ...(patch || {}),
  };
  await store.setJSON(buildReviewJobKey(jobId), value);
  return value;
}

async function createReviewJob(initialValue) {
  const jobId = randomUUID();
  const value = await writeReviewJob(jobId, {
    status: "queued",
    ...(initialValue || {}),
  });
  return value;
}

async function markReviewJobRunning(jobId, patch) {
  return writeReviewJob(jobId, {
    status: "running",
    ...(patch || {}),
  });
}

async function completeReviewJob(jobId, patch) {
  return writeReviewJob(jobId, {
    status: "completed",
    completed_at: nowIso(),
    ...(patch || {}),
  });
}

async function failReviewJob(jobId, errorMessage, patch) {
  return writeReviewJob(jobId, {
    status: "failed",
    completed_at: nowIso(),
    error: String(errorMessage || "后台精批失败。"),
    ...(patch || {}),
  });
}

module.exports = {
  createReviewJob,
  readReviewJob,
  markReviewJobRunning,
  completeReviewJob,
  failReviewJob,
};
