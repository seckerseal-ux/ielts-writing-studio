import { nowIso } from "./response.js";

function safeJsonParse(value, fallback = null) {
  if (typeof value !== "string" || !value.trim()) {
    return fallback;
  }
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function requireDb(env) {
  if (!env?.WRITING_DB) {
    throw new Error("缺少 Cloudflare D1 绑定 WRITING_DB。");
  }
  return env.WRITING_DB;
}

export async function getUserSnapshot(env, deviceId) {
  if (!deviceId) {
    return null;
  }
  const db = requireDb(env);
  const row = await db
    .prepare("SELECT device_id, state_json, source, created_at, updated_at FROM user_snapshots WHERE device_id = ?")
    .bind(deviceId)
    .first();

  if (!row) {
    return null;
  }

  return {
    device_id: row.device_id,
    state: safeJsonParse(row.state_json, {}),
    source: row.source,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

export async function upsertUserSnapshot(env, deviceId, state, source = "app") {
  const db = requireDb(env);
  const timestamp = nowIso();
  await db
    .prepare(`
      INSERT INTO user_snapshots (device_id, state_json, source, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?)
      ON CONFLICT(device_id) DO UPDATE SET
        state_json = excluded.state_json,
        source = excluded.source,
        updated_at = excluded.updated_at
    `)
    .bind(deviceId, JSON.stringify(state || {}), source, timestamp, timestamp)
    .run();

  return getUserSnapshot(env, deviceId);
}

export async function createReviewJob(env, job) {
  const db = requireDb(env);
  const timestamp = nowIso();
  const id = crypto.randomUUID();
  await db
    .prepare(`
      INSERT INTO review_jobs (
        id, device_id, status, provider, provider_label, review_model, title,
        prompt_json, essay_text, local_metrics_json, target_band,
        result_json, error, created_at, updated_at, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)
    .bind(
      id,
      job.device_id || "",
      "queued",
      job.provider || "openai",
      job.provider_label || "OpenAI",
      job.review_model || "",
      job.title || "",
      JSON.stringify(job.prompt_payload || {}),
      job.essay_text || "",
      JSON.stringify(job.local_metrics || {}),
      String(job.target_band || ""),
      "",
      "",
      timestamp,
      timestamp,
      "",
    )
    .run();

  return getReviewJob(env, id);
}

export async function getReviewJob(env, jobId) {
  if (!jobId) {
    return null;
  }
  const db = requireDb(env);
  const row = await db
    .prepare(`
      SELECT
        id, device_id, status, provider, provider_label, review_model, title,
        prompt_json, essay_text, local_metrics_json, target_band,
        result_json, error, created_at, updated_at, completed_at
      FROM review_jobs
      WHERE id = ?
    `)
    .bind(jobId)
    .first();

  if (!row) {
    return null;
  }

  return {
    id: row.id,
    device_id: row.device_id || "",
    status: row.status,
    provider: row.provider,
    provider_label: row.provider_label,
    review_model: row.review_model,
    title: row.title || "",
    prompt_payload: safeJsonParse(row.prompt_json, {}),
    essay_text: row.essay_text || "",
    local_metrics: safeJsonParse(row.local_metrics_json, {}),
    target_band: row.target_band || "",
    review: safeJsonParse(row.result_json, null),
    error: row.error || "",
    created_at: row.created_at,
    updated_at: row.updated_at,
    completed_at: row.completed_at || "",
  };
}

export async function markReviewJobRunning(env, jobId, patch = {}) {
  const db = requireDb(env);
  await db
    .prepare(`
      UPDATE review_jobs
      SET status = ?, provider = ?, provider_label = ?, review_model = ?, updated_at = ?
      WHERE id = ?
    `)
    .bind(
      "running",
      patch.provider || "openai",
      patch.provider_label || "OpenAI",
      patch.review_model || "",
      nowIso(),
      jobId,
    )
    .run();

  return getReviewJob(env, jobId);
}

export async function completeReviewJob(env, jobId, patch = {}) {
  const db = requireDb(env);
  const completedAt = nowIso();
  await db
    .prepare(`
      UPDATE review_jobs
      SET status = ?, provider = ?, provider_label = ?, review_model = ?,
          result_json = ?, error = ?, updated_at = ?, completed_at = ?
      WHERE id = ?
    `)
    .bind(
      "completed",
      patch.provider || "openai",
      patch.provider_label || "OpenAI",
      patch.review_model || "",
      JSON.stringify(patch.review || {}),
      "",
      completedAt,
      completedAt,
      jobId,
    )
    .run();

  return getReviewJob(env, jobId);
}

export async function failReviewJob(env, jobId, errorMessage, patch = {}) {
  const db = requireDb(env);
  const completedAt = nowIso();
  await db
    .prepare(`
      UPDATE review_jobs
      SET status = ?, provider = ?, provider_label = ?, review_model = ?,
          error = ?, updated_at = ?, completed_at = ?
      WHERE id = ?
    `)
    .bind(
      "failed",
      patch.provider || "openai",
      patch.provider_label || "OpenAI",
      patch.review_model || "",
      String(errorMessage || "后台精批失败。"),
      completedAt,
      completedAt,
      jobId,
    )
    .run();

  return getReviewJob(env, jobId);
}

export async function recordEssayArtifacts(env, job, review) {
  if (!job?.id || !review) {
    return;
  }

  const db = requireDb(env);
  const attemptId = crypto.randomUUID();
  const createdAt = nowIso();
  const prompt = job.prompt_payload || {};
  const localMetrics = job.local_metrics || {};

  await db
    .prepare(`
      INSERT INTO essay_attempts (
        id, device_id, review_job_id, title, task, prompt_json,
        essay_text, local_review_json, ai_review_json, overall_band, source, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)
    .bind(
      attemptId,
      job.device_id || "",
      job.id,
      job.title || "",
      String(prompt.task || ""),
      JSON.stringify(prompt || {}),
      job.essay_text || "",
      JSON.stringify(localMetrics || {}),
      JSON.stringify(review || {}),
      Number(review.overall_band || 0),
      "cloud",
      createdAt,
    )
    .run();

  const mistakeRows = [];
  const grammarIssues = Array.isArray(localMetrics.grammarIssues) ? localMetrics.grammarIssues : [];
  const lexicalIssues = Array.isArray(localMetrics.lexicalIssues) ? localMetrics.lexicalIssues : [];
  const idiomIssues = Array.isArray(localMetrics.idiomIssues) ? localMetrics.idiomIssues : [];

  grammarIssues.forEach((item) => {
    mistakeRows.push({
      category: "grammar",
      label: String(item.label || "语法问题"),
      sourceText: String(item.source || item.evidence || ""),
      suggestionText: String(item.suggestion || ""),
      reason: String(item.reason || ""),
    });
  });
  lexicalIssues.forEach((item) => {
    mistakeRows.push({
      category: "lexical",
      label: String(item.label || "词汇表达"),
      sourceText: String(item.source || item.evidence || ""),
      suggestionText: String(item.suggestion || ""),
      reason: String(item.reason || ""),
    });
  });
  idiomIssues.forEach((item) => {
    mistakeRows.push({
      category: "idiom",
      label: String(item.label || "表达习惯"),
      sourceText: String(item.source || item.evidence || ""),
      suggestionText: String(item.suggestion || ""),
      reason: String(item.reason || ""),
    });
  });

  const aiSentenceUpgrades = Array.isArray(review.sentence_upgrades) ? review.sentence_upgrades : [];
  aiSentenceUpgrades.forEach((item) => {
    mistakeRows.push({
      category: "rewrite",
      label: "句子升级",
      sourceText: String(item.source || ""),
      suggestionText: String(item.better_version || ""),
      reason: String(item.why || ""),
    });
  });

  if (!mistakeRows.length) {
    return;
  }

  const statement = db.prepare(`
    INSERT INTO mistake_items (
      id, device_id, attempt_id, category, label, source_text,
      suggestion_text, reason, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const batch = mistakeRows.slice(0, 24).map((item) => statement.bind(
    crypto.randomUUID(),
    job.device_id || "",
    attemptId,
    item.category,
    item.label,
    item.sourceText,
    item.suggestionText,
    item.reason,
    createdAt,
  ));

  await db.batch(batch);
}
