CREATE TABLE IF NOT EXISTS user_snapshots (
  device_id TEXT PRIMARY KEY,
  state_json TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'app',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS review_jobs (
  id TEXT PRIMARY KEY,
  device_id TEXT,
  status TEXT NOT NULL,
  provider TEXT NOT NULL,
  provider_label TEXT NOT NULL,
  review_model TEXT NOT NULL,
  title TEXT,
  prompt_json TEXT,
  essay_text TEXT,
  local_metrics_json TEXT,
  target_band TEXT,
  result_json TEXT,
  error TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  completed_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_review_jobs_device_id
  ON review_jobs(device_id, created_at DESC);

CREATE TABLE IF NOT EXISTS essay_attempts (
  id TEXT PRIMARY KEY,
  device_id TEXT,
  review_job_id TEXT,
  title TEXT,
  task TEXT,
  prompt_json TEXT,
  essay_text TEXT,
  local_review_json TEXT,
  ai_review_json TEXT,
  overall_band REAL,
  source TEXT NOT NULL DEFAULT 'cloud',
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_essay_attempts_device_id
  ON essay_attempts(device_id, created_at DESC);

CREATE TABLE IF NOT EXISTS mistake_items (
  id TEXT PRIMARY KEY,
  device_id TEXT,
  attempt_id TEXT,
  category TEXT,
  label TEXT,
  source_text TEXT,
  suggestion_text TEXT,
  reason TEXT,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_mistake_items_device_id
  ON mistake_items(device_id, created_at DESC);
