"use strict";

const DEFAULT_PROVIDER_BASE_URLS = {
  openai: "https://api.openai.com/v1",
  openrouter: "https://openrouter.ai/api/v1",
};
const DEFAULT_AIHUBMIX_BASE_URL = "https://aihubmix.com/v1";
const DEFAULT_AIHUBMIX_WRITING_MODEL = "coding-glm-4.7-free";
const DEFAULT_GEMAI_BASE_URL = "https://api.gemai.cc/v1";
const DEFAULT_GEMAI_WRITING_MODEL = "[福利]gemini-3-flash-preview";

const DEFAULT_PROVIDER_MODELS = {
  openai: {
    writing: "gpt-5-mini",
  },
  openrouter: {
    writing: "openrouter/free",
  },
};
const OPENROUTER_FREE_MODEL_ROUTER = DEFAULT_PROVIDER_MODELS.openrouter.writing;
const DEFAULT_OPENROUTER_FREE_WRITING_PRIORITY = [
  "openai/gpt-oss-20b:free",
  "google/gemma-3-27b-it:free",
  "openai/gpt-oss-120b:free",
  OPENROUTER_FREE_MODEL_ROUTER,
];
const OPENROUTER_MODEL_TIMEOUT_MS = Number(process.env.OPENROUTER_MODEL_TIMEOUT_MS || 20000);
const OPENAI_COMPAT_MODEL_TIMEOUT_MS = Number(process.env.OPENAI_COMPAT_MODEL_TIMEOUT_MS || 20000);

const SUPPORTED_PROVIDERS = Object.keys(DEFAULT_PROVIDER_BASE_URLS);

const WRITING_REVIEW_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    overall_band: { type: "number" },
    band_breakdown: {
      type: "object",
      additionalProperties: false,
      properties: {
        task_response: { type: "number" },
        coherence_cohesion: { type: "number" },
        lexical_resource: { type: "number" },
        grammatical_range_accuracy: { type: "number" },
      },
      required: [
        "task_response",
        "coherence_cohesion",
        "lexical_resource",
        "grammatical_range_accuracy",
      ],
    },
    summary: { type: "string" },
    strengths: { type: "array", items: { type: "string" } },
    key_issues: { type: "array", items: { type: "string" } },
    improvement_actions: { type: "array", items: { type: "string" } },
    focus_areas: { type: "array", items: { type: "string" } },
    sentence_upgrades: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          source: { type: "string" },
          better_version: { type: "string" },
          why: { type: "string" },
        },
        required: ["source", "better_version", "why"],
      },
    },
    vocabulary_upgrades: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          original: { type: "string" },
          improved: { type: "string" },
          reason: { type: "string" },
        },
        required: ["original", "improved", "reason"],
      },
    },
    grammar_patterns: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          label: { type: "string" },
          symptom: { type: "string" },
          advice: { type: "string" },
          evidence: { type: "string" },
        },
        required: ["label", "symptom", "advice", "evidence"],
      },
    },
    paragraph_plan: { type: "array", items: { type: "string" } },
    useful_phrases: { type: "array", items: { type: "string" } },
  },
  required: [
    "overall_band",
    "band_breakdown",
    "summary",
    "strengths",
    "key_issues",
    "improvement_actions",
    "focus_areas",
    "sentence_upgrades",
    "vocabulary_upgrades",
    "grammar_patterns",
    "paragraph_plan",
    "useful_phrases",
  ],
};

const WRITING_REVIEW_INSTRUCTIONS = `
You are a strict but helpful IELTS Academic Writing examiner and coach.
You will receive:
1. A writing task definition, including whether it is Task 1 or Task 2.
2. The candidate's full essay in English.
3. Local heuristics such as word count, paragraph count, keyword coverage, and simple structure signals.
4. The candidate's target band, if provided.

Return feedback in Simplified Chinese, but keep quoted essay snippets and improved English phrases in English.
Estimate IELTS Writing sub-scores in 0.5 increments from 0 to 9.
For Task 1, treat the first criterion as Task Achievement and be strict about overview, data selection, and avoiding personal opinion.
For Task 2, treat the first criterion as Task Response and be strict about fully answering the question, maintaining a clear position, and supporting ideas.
Do not invent mistakes that are not visible in the essay.
If the essay is clearly under length, state that directly.
Keep feedback concise but actionable.
Sentence upgrades must be plausible rewrites of the candidate's own sentences, not completely new content.
Vocabulary upgrades should focus on replacing repetitive or weak expressions with more natural IELTS-style phrasing.
Paragraph plans should help the candidate rewrite this exact essay more effectively on the next attempt.
`.trim();

class ApiError extends Error {
  constructor(message, status = 400) {
    super(message);
    this.status = status;
  }
}

function inferProviderName() {
  const configured = String(process.env.AI_PROVIDER || "").trim().toLowerCase();
  if (SUPPORTED_PROVIDERS.includes(configured)) {
    return configured;
  }

  const baseHint = String(process.env.AI_BASE_URL || process.env.OPENAI_BASE_URL || "").trim().toLowerCase();
  if (baseHint.includes("openrouter.ai")) {
    return "openrouter";
  }

  if (process.env.OPENROUTER_API_KEY && !process.env.OPENAI_API_KEY) {
    return "openrouter";
  }

  return "openai";
}

function normalizeProviderName(provider) {
  const normalized = String(provider || inferProviderName()).trim().toLowerCase();
  return SUPPORTED_PROVIDERS.includes(normalized) ? normalized : inferProviderName();
}

function requireProviderName(provider) {
  const normalized = String(provider || "").trim().toLowerCase();
  if (!normalized) {
    return inferProviderName();
  }
  if (!SUPPORTED_PROVIDERS.includes(normalized)) {
    throw new ApiError(`不支持的 AI 后端：${provider}。当前只支持 OpenAI / OpenRouter。`, 400);
  }
  return normalized;
}

function getProviderLabel(provider) {
  const resolved = normalizeProviderName(provider);
  if (resolved === "openrouter") {
    return "OpenRouter";
  }
  return getOpenAICompatibleLabel(getProviderBaseUrl(resolved));
}

function getProviderApiKey(provider) {
  const resolved = normalizeProviderName(provider);
  if (resolved === "openrouter") {
    return String(process.env.OPENROUTER_API_KEY || (inferProviderName() === "openrouter" ? process.env.AI_API_KEY || "" : "")).trim();
  }
  return String(process.env.OPENAI_API_KEY || (inferProviderName() === "openai" ? process.env.AI_API_KEY || "" : "")).trim();
}

function getProviderBaseUrl(provider) {
  const resolved = normalizeProviderName(provider);
  if (resolved === "openrouter") {
    return String(process.env.OPENROUTER_BASE_URL || (inferProviderName() === "openrouter" ? process.env.AI_BASE_URL || "" : "") || DEFAULT_PROVIDER_BASE_URLS.openrouter).trim();
  }
  return String(process.env.OPENAI_BASE_URL || (inferProviderName() === "openai" ? process.env.AI_BASE_URL || "" : "") || DEFAULT_PROVIDER_BASE_URLS.openai).trim();
}

function isAiHubMixProvider(provider) {
  return normalizeProviderName(provider) === "openai"
    && getProviderBaseUrl("openai").toLowerCase().includes("aihubmix.com");
}

function isGemAIBaseUrl(baseUrl) {
  return String(baseUrl || "").trim().toLowerCase().includes("api.gemai.cc");
}

function isNativeOpenAIBaseUrl(baseUrl) {
  return String(baseUrl || "").trim().toLowerCase().includes("api.openai.com");
}

function getOpenAICompatibleLabel(baseUrl) {
  const normalizedBaseUrl = String(baseUrl || "").trim().toLowerCase();
  if (normalizedBaseUrl.includes("aihubmix.com")) {
    return "AIHubMix";
  }
  if (normalizedBaseUrl.includes("api.gemai.cc")) {
    return "GemAI";
  }
  return "OpenAI";
}

function shouldForceOpenRouterFreeModel() {
  const raw = String(process.env.OPENROUTER_FORCE_FREE_MODEL || "true").trim().toLowerCase();
  return !["0", "false", "no", "off"].includes(raw);
}

function uniqueValues(values) {
  return Array.from(new Set((values || []).map((value) => String(value || "").trim()).filter(Boolean)));
}

function getOpenRouterWritingModelPriority() {
  const configured = String(process.env.OPENROUTER_WRITING_MODEL_PRIORITY || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  return uniqueValues(configured.length ? configured : DEFAULT_OPENROUTER_FREE_WRITING_PRIORITY);
}

function finalizeProviderModel(provider, capability, model) {
  const resolved = normalizeProviderName(provider);
  const capabilityKey = String(capability || "").trim().toLowerCase();
  const normalizedModel = String(model || "").trim();
  if (!normalizedModel) {
    return normalizedModel;
  }
  if (resolved === "openrouter" && capabilityKey === "writing" && shouldForceOpenRouterFreeModel()) {
    return getOpenRouterWritingModelPriority()[0];
  }
  return normalizedModel;
}

function getProviderModelCandidates(provider, capability) {
  const resolved = normalizeProviderName(provider);
  const capabilityKey = String(capability || "writing").trim().toLowerCase();
  if (resolved === "openrouter" && capabilityKey === "writing" && shouldForceOpenRouterFreeModel()) {
    return getOpenRouterWritingModelPriority();
  }
  return uniqueValues([getProviderModel(resolved, capabilityKey)]);
}

function getProviderModel(provider, capability) {
  const resolved = normalizeProviderName(provider);
  const capabilityKey = String(capability || "writing").trim().toLowerCase();
  const envMap = {
    openai: { writing: "OPENAI_WRITING_REVIEW_MODEL" },
    openrouter: { writing: "OPENROUTER_WRITING_REVIEW_MODEL" },
  };
  const legacyMap = { writing: "AI_WRITING_REVIEW_MODEL" };

  const providerEnv = envMap[resolved]?.[capabilityKey];
  if (providerEnv && process.env[providerEnv]) {
    return finalizeProviderModel(resolved, capabilityKey, process.env[providerEnv]);
  }

  const legacyEnv = legacyMap[capabilityKey];
  if (legacyEnv && inferProviderName() === resolved && process.env[legacyEnv]) {
    return finalizeProviderModel(resolved, capabilityKey, process.env[legacyEnv]);
  }

  if (resolved === "openai" && capabilityKey === "writing" && isAiHubMixProvider(resolved)) {
    return finalizeProviderModel(resolved, capabilityKey, DEFAULT_AIHUBMIX_WRITING_MODEL);
  }

  if (resolved === "openai" && capabilityKey === "writing" && isGemAIBaseUrl(getProviderBaseUrl(resolved))) {
    return finalizeProviderModel(resolved, capabilityKey, DEFAULT_GEMAI_WRITING_MODEL);
  }

  return finalizeProviderModel(resolved, capabilityKey, DEFAULT_PROVIDER_MODELS[resolved][capabilityKey]);
}

function getProviderStatus(provider) {
  const resolved = normalizeProviderName(provider);
  return {
    available: Boolean(getProviderApiKey(resolved)),
    provider: resolved,
    provider_label: getProviderLabel(resolved),
    base_url: getProviderBaseUrl(resolved),
    review_model: getProviderModel(resolved, "writing"),
    writing_review_model: getProviderModel(resolved, "writing"),
  };
}

function shouldUseAsyncWritingReview(provider) {
  const configured = String(process.env.ASYNC_WRITING_REVIEW || "").trim().toLowerCase();
  if (["1", "true", "yes", "on"].includes(configured)) {
    return true;
  }
  if (["0", "false", "no", "off"].includes(configured)) {
    return false;
  }

  const resolved = normalizeProviderName(provider);
  if (resolved !== "openai") {
    return false;
  }

  return /gemini-3(?:\.1)?-pro/i.test(getProviderModel(resolved, "writing"));
}

function getMissingKeyMessage(provider) {
  if (isAiHubMixProvider(provider)) {
    return "缺少 OPENAI_API_KEY，请先在 Netlify 环境变量里设置 AIHubMix Key（当前通过 OpenAI 兼容接口接入）。";
  }
  if (normalizeProviderName(provider) === "openai" && isGemAIBaseUrl(getProviderBaseUrl(provider))) {
    return "缺少 OPENAI_API_KEY，请先在 Netlify 环境变量里设置 GemAI Key（当前通过 OpenAI 兼容接口接入）。";
  }
  return normalizeProviderName(provider) === "openrouter"
    ? "缺少 OPENROUTER_API_KEY，请先在 Netlify 环境变量里设置 OpenRouter Key。"
    : "缺少 OPENAI_API_KEY，请先在 Netlify 环境变量里设置 OpenAI Key。";
}

function normalizeProviderErrorMessage(provider, message) {
  const raw = String(message || "").trim();
  if (!raw) {
    return `${getProviderLabel(provider)} 接口返回错误：未知错误`;
  }
  if (provider === "openrouter" && /free-models-per-day/i.test(raw)) {
    return "OpenRouter 免费模型的今日请求额度已经用完了，所以当前无法继续走免费 AI 精批。要恢复在线精批，需要等额度重置，或给 OpenRouter 账户充值后解锁更多免费请求。";
  }
  return `${getProviderLabel(provider)} 接口返回错误：${raw}`;
}

function createOpenAICompatibleEndpoint(options = {}) {
  const label = String(options.label || getOpenAICompatibleLabel(options.baseUrl)).trim() || "OpenAI";
  return {
    label,
    apiKey: String(options.apiKey || "").trim(),
    baseUrl: String(options.baseUrl || "").trim(),
    model: String(options.model || "").trim(),
    timeoutMs: Number(options.timeoutMs || OPENAI_COMPAT_MODEL_TIMEOUT_MS),
  };
}

function isSameOpenAICompatibleEndpoint(left, right) {
  return Boolean(left && right)
    && left.baseUrl === right.baseUrl
    && left.model === right.model
    && left.label === right.label;
}

function getOpenAICompatiblePrimaryEndpoint(capability) {
  return createOpenAICompatibleEndpoint({
    label: getProviderLabel("openai"),
    apiKey: getProviderApiKey("openai"),
    baseUrl: getProviderBaseUrl("openai"),
    model: getProviderModel("openai", capability),
    timeoutMs: OPENAI_COMPAT_MODEL_TIMEOUT_MS,
  });
}

function getOpenAICompatibleFallbackEndpoint(capability) {
  const capabilityKey = String(capability || "writing").trim().toLowerCase();
  const baseUrl = String(process.env.OPENAI_COMPAT_FALLBACK_BASE_URL || "").trim();
  const apiKey = String(process.env.OPENAI_COMPAT_FALLBACK_API_KEY || "").trim();
  if (!baseUrl || !apiKey) {
    return null;
  }

  const configuredModel = String(process.env.OPENAI_COMPAT_FALLBACK_WRITING_MODEL || "").trim();
  const defaultModel = capabilityKey === "writing" && isGemAIBaseUrl(baseUrl)
    ? DEFAULT_GEMAI_WRITING_MODEL
    : "";

  return createOpenAICompatibleEndpoint({
    apiKey,
    baseUrl,
    model: configuredModel || defaultModel,
    timeoutMs: Number(process.env.OPENAI_COMPAT_FALLBACK_TIMEOUT_MS || OPENAI_COMPAT_MODEL_TIMEOUT_MS),
  });
}

function shouldRetryOpenAICompatibleFallback(error) {
  const message = String(error?.message || "").toLowerCase();
  const retriableStatus = [408, 409, 429, 500, 502, 503, 504];
  if (retriableStatus.includes(Number(error?.status))) {
    return true;
  }
  return /timeout|timed out|rate limit|quota|exceeded|too many|overloaded|temporar|busy|unavailable|fetch failed|convert_request_failed|无法解析的 json|invalid json|malformed json/.test(message);
}

async function apiRequestToOpenAICompatibleEndpoint(endpoint, path, payload) {
  if (!endpoint?.apiKey) {
    throw new ApiError(`缺少 ${endpoint?.label || "OpenAI 兼容"} 的 API Key。`, 503);
  }
  if (!endpoint?.baseUrl) {
    throw new ApiError(`缺少 ${endpoint?.label || "OpenAI 兼容"} 的 Base URL。`, 503);
  }

  let response;
  let rawText = "";
  try {
    response = await fetch(`${endpoint.baseUrl}${path}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${endpoint.apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      signal: endpoint.timeoutMs ? AbortSignal.timeout(endpoint.timeoutMs) : undefined,
    });
    rawText = await response.text();
  } catch (error) {
    if (error?.name === "TimeoutError" || error?.name === "AbortError") {
      throw new ApiError(`${endpoint.label} 请求超时，请尝试下一个可用模型。`, 504);
    }
    throw new ApiError(`${endpoint.label} 请求失败：${error.message || error}`, 502);
  }

  let parsed;
  try {
    parsed = rawText ? JSON.parse(rawText) : {};
  } catch {
    parsed = null;
  }

  if (!response.ok) {
    const message = parsed?.error?.message || rawText || "未知错误";
    throw new ApiError(`${endpoint.label} 接口返回错误：${message}`, response.status);
  }

  return parsed || {};
}

async function apiRequest(provider, path, payload, options = {}) {
  const resolved = normalizeProviderName(provider);
  const apiKey = getProviderApiKey(resolved);
  if (!apiKey) {
    throw new ApiError(getMissingKeyMessage(resolved), 503);
  }

  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  if (resolved === "openrouter") {
    headers["HTTP-Referer"] = process.env.OPENROUTER_HTTP_REFERER || "https://writing-studio.netlify.app";
    headers["X-OpenRouter-Title"] = process.env.OPENROUTER_TITLE || "IELTS Writing Studio";
  }
  let response;
  let rawText = "";
  try {
    response = await fetch(`${getProviderBaseUrl(resolved)}${path}`, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
      signal: options.timeoutMs ? AbortSignal.timeout(options.timeoutMs) : undefined,
    });
    rawText = await response.text();
  } catch (error) {
    if (error?.name === "TimeoutError" || error?.name === "AbortError") {
      throw new ApiError(`${getProviderLabel(resolved)} 请求超时，请尝试下一个可用模型。`, 504);
    }
    throw new ApiError(`${getProviderLabel(resolved)} 请求失败：${error.message || error}`, 502);
  }
  let parsed;
  try {
    parsed = rawText ? JSON.parse(rawText) : {};
  } catch {
    parsed = null;
  }

  if (!response.ok) {
    const message = parsed?.error?.message || rawText || "未知错误";
    throw new ApiError(normalizeProviderErrorMessage(resolved, message), response.status);
  }

  return parsed || {};
}

function extractOpenAIResponseText(payload, provider) {
  if (payload.output_text) {
    return payload.output_text;
  }

  for (const output of payload.output || []) {
    for (const content of output.content || []) {
      if (content.type === "refusal") {
        throw new ApiError(content.refusal || "模型拒绝了这次请求。", 502);
      }
      if (content.text) {
        return content.text;
      }
    }
  }

  throw new ApiError(`${getProviderLabel(provider)} 返回了无法识别的响应格式。`, 502);
}

function extractChatCompletionText(payload, provider) {
  const choice = payload.choices?.[0];
  if (!choice) {
    throw new ApiError(`${getProviderLabel(provider)} 返回了空响应。`, 502);
  }

  const content = choice.message?.content;
  if (typeof content === "string") {
    return content.trim();
  }

  if (Array.isArray(content)) {
    return content
      .map((item) => (item && (item.text?.value || item.text || "")) || "")
      .filter(Boolean)
      .join("\n")
      .trim();
  }

  throw new ApiError(`${getProviderLabel(provider)} 返回了无法识别的响应格式。`, 502);
}

function parseJsonTextResponse(text, provider) {
  const raw = String(text || "").trim();
  if (!raw) {
    throw new ApiError(`${getProviderLabel(provider)} 返回了空的 JSON 文本。`, 502);
  }

  const normalizedRaw = raw
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
  const candidates = [raw, normalizedRaw];
  const firstCurly = raw.indexOf("{");
  const lastCurly = raw.lastIndexOf("}");
  if (firstCurly >= 0 && lastCurly > firstCurly) {
    candidates.push(raw.slice(firstCurly, lastCurly + 1));
  }
  const normalizedFirstCurly = normalizedRaw.indexOf("{");
  const normalizedLastCurly = normalizedRaw.lastIndexOf("}");
  if (normalizedFirstCurly >= 0 && normalizedLastCurly > normalizedFirstCurly) {
    candidates.push(normalizedRaw.slice(normalizedFirstCurly, normalizedLastCurly + 1));
  }

  for (const candidate of candidates) {
    try {
      return JSON.parse(candidate);
    } catch {
      try {
        const repairedCandidate = candidate
          .replace(/[“”]/g, "\"")
          .replace(/[‘’]/g, "'")
          .replace(/,\s*([}\]])/g, "$1");
        return JSON.parse(repairedCandidate);
      } catch {
        continue;
      }
    }
  }

  throw new ApiError(`${getProviderLabel(provider)} 返回了无法解析的 JSON 结果。`, 502);
}

function clampBand(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) {
    return 0;
  }
  return Math.max(0, Math.min(9, Math.round(number * 2) / 2));
}

function toStringArray(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item || "").trim()).filter(Boolean);
  }
  if (value && typeof value === "object") {
    return Object.entries(value)
      .map(([key, item]) => {
        const normalizedItem = String(item || "").trim();
        return normalizedItem ? `${key}: ${normalizedItem}` : "";
      })
      .filter(Boolean);
  }
  return [];
}

function normalizeSentenceUpgrades(value) {
  return (Array.isArray(value) ? value : []).map((item) => {
    if (item && typeof item === "object" && !Array.isArray(item)) {
      return {
        source: String(item.source || item.original || "").trim(),
        better_version: String(item.better_version || item.improved || item.rewrite || item.suggestion || "").trim(),
        why: String(item.why || item.reason || item.comment || "建议优化句子表达。").trim(),
      };
    }
    const text = String(item || "").trim();
    return {
      source: "",
      better_version: text,
      why: "建议优化句子表达。",
    };
  }).filter((item) => item.better_version);
}

function normalizeVocabularyUpgrades(value) {
  return (Array.isArray(value) ? value : []).map((item) => {
    if (item && typeof item === "object" && !Array.isArray(item)) {
      return {
        original: String(item.original || item.source || "").trim(),
        improved: String(item.improved || item.better_version || item.suggestion || "").trim(),
        reason: String(item.reason || item.why || "建议升级词汇表达。").trim(),
      };
    }
    const text = String(item || "").trim();
    return {
      original: "",
      improved: text,
      reason: "建议升级词汇表达。",
    };
  }).filter((item) => item.improved);
}

function normalizeGrammarPatterns(value) {
  return (Array.isArray(value) ? value : []).map((item) => {
    if (item && typeof item === "object" && !Array.isArray(item)) {
      return {
        label: String(item.label || item.title || "语法提醒").trim(),
        symptom: String(item.symptom || item.issue || "").trim(),
        advice: String(item.advice || item.reason || item.comment || "").trim(),
        evidence: String(item.evidence || item.example || "").trim(),
      };
    }
    const text = String(item || "").trim();
    return {
      label: text.slice(0, 18) || "语法提醒",
      symptom: "",
      advice: text,
      evidence: "",
    };
  }).filter((item) => item.label || item.advice);
}

function clampWritingReviewPayload(payload) {
  const review = { ...(payload || {}) };
  review.overall_band = clampBand(review.overall_band);
  review.band_breakdown = review.band_breakdown || {};
  const bandAliases = {
    task_response: ["task_response", "task_achievement"],
    coherence_cohesion: ["coherence_cohesion", "coherence_and_cohesion"],
    lexical_resource: ["lexical_resource"],
    grammatical_range_accuracy: ["grammatical_range_accuracy", "grammatical_range_and_accuracy"],
  };
  for (const [targetKey, aliases] of Object.entries(bandAliases)) {
    const rawValue = aliases.map((key) => review.band_breakdown[key]).find((value) => value !== undefined && value !== null);
    review.band_breakdown[targetKey] = clampBand(rawValue);
  }
  review.summary = String(review.summary || "").trim();
  review.strengths = toStringArray(review.strengths).slice(0, 4);
  review.key_issues = toStringArray(review.key_issues).slice(0, 4);
  review.improvement_actions = toStringArray(review.improvement_actions).slice(0, 4);
  review.focus_areas = toStringArray(review.focus_areas).slice(0, 4);
  review.sentence_upgrades = normalizeSentenceUpgrades(review.sentence_upgrades).slice(0, 4);
  review.vocabulary_upgrades = normalizeVocabularyUpgrades(review.vocabulary_upgrades).slice(0, 4);
  review.grammar_patterns = normalizeGrammarPatterns(review.grammar_patterns).slice(0, 4);
  review.paragraph_plan = toStringArray(review.paragraph_plan).slice(0, 5);
  review.useful_phrases = toStringArray(review.useful_phrases).slice(0, 5);
  return review;
}

async function requestOpenRouterStructuredReview(models, userInput, provider) {
  const candidates = (Array.isArray(models) ? uniqueValues(models) : uniqueValues([models])).slice(0, 3);
  const response = await apiRequest(provider, "/chat/completions", {
    model: candidates[0] || OPENROUTER_FREE_MODEL_ROUTER,
    models: candidates,
    messages: [
      { role: "system", content: WRITING_REVIEW_INSTRUCTIONS },
      {
        role: "user",
        content: `${userInput}\n\n只返回一个合法 JSON 对象，不要添加 markdown、解释或代码块。\nJSON Schema:\n${JSON.stringify(WRITING_REVIEW_SCHEMA)}`,
      },
    ],
    temperature: 0.2,
    stream: false,
  }, { timeoutMs: OPENROUTER_MODEL_TIMEOUT_MS });
  return {
    model: String(response?.model || candidates[0] || OPENROUTER_FREE_MODEL_ROUTER),
    review: clampWritingReviewPayload(parseJsonTextResponse(extractChatCompletionText(response, provider), provider)),
  };
}

async function requestOpenAICompatibleStructuredReview(model, userInput, provider) {
  const endpoint = typeof model === "object" && model
    ? model
    : createOpenAICompatibleEndpoint({
        label: getProviderLabel(provider),
        apiKey: getProviderApiKey(provider),
        baseUrl: getProviderBaseUrl(provider),
        model,
        timeoutMs: OPENAI_COMPAT_MODEL_TIMEOUT_MS,
      });

  const response = await apiRequestToOpenAICompatibleEndpoint(endpoint, "/chat/completions", {
    model: endpoint.model,
    messages: [
      { role: "system", content: WRITING_REVIEW_INSTRUCTIONS },
      {
        role: "user",
        content: `${userInput}\n\n只返回一个合法 JSON 对象，不要添加 markdown、解释、思考过程或代码块。\nJSON Schema:\n${JSON.stringify(WRITING_REVIEW_SCHEMA)}`,
      },
    ],
    temperature: 0.2,
    stream: false,
    response_format: { type: "json_object" },
  });

  return {
    model: String(response?.model || endpoint.model || ""),
    provider_label: endpoint.label,
    review: clampWritingReviewPayload(parseJsonTextResponse(extractChatCompletionText(response, endpoint.label), endpoint.label)),
  };
}

async function requestStructuredReview(provider, promptPayload, essayText, localMetrics, targetBand) {
  const resolved = normalizeProviderName(provider);
  const userInput = `
请按 IELTS Academic Writing 的四项维度做评估。

题目定义:
${JSON.stringify(promptPayload || {}, null, 2)}

考生作文:
${essayText}

本地统计指标:
${JSON.stringify(localMetrics || {}, null, 2)}

目标分数:
${targetBand || "未提供"}

请输出结构化结果，重点关注：
1. Task Achievement / Task Response
2. Coherence and Cohesion
3. Lexical Resource
4. Grammatical Range and Accuracy

反馈应明确指出这篇作文最主要的问题、最值得保留的优点，以及下一轮改写时最该优先修改的地方。
另外请额外返回：
1. 2-4 个 focus_areas，使用短标签描述下一轮最需要盯住的改进方向。
2. 2-4 个 sentence_upgrades，只改写考生原文里真实存在的句子。
3. 2-4 个 vocabulary_upgrades，聚焦重复、口语化或偏弱的表达。
4. 3-5 条 paragraph_plan，告诉考生如何更好地重写这篇作文的结构。
5. 3-5 个 useful_phrases，给出适合这道题继续套用的 IELTS 写作表达。
  `.trim();

  if (resolved === "openrouter") {
    const candidates = getProviderModelCandidates(resolved, "writing");
    return await requestOpenRouterStructuredReview(candidates, userInput, resolved);
  }

  const model = getProviderModel(resolved, "writing");
  const primaryEndpoint = getOpenAICompatiblePrimaryEndpoint("writing");
  const fallbackEndpoint = getOpenAICompatibleFallbackEndpoint("writing");
  const shouldUseCompatChain = resolved === "openai"
    && (!isNativeOpenAIBaseUrl(primaryEndpoint.baseUrl) || Boolean(fallbackEndpoint));

  if (shouldUseCompatChain) {
    try {
      return await requestOpenAICompatibleStructuredReview(primaryEndpoint, userInput, resolved);
    } catch (error) {
      if (!fallbackEndpoint || !shouldRetryOpenAICompatibleFallback(error) || isSameOpenAICompatibleEndpoint(primaryEndpoint, fallbackEndpoint)) {
        throw error;
      }
      return await requestOpenAICompatibleStructuredReview(fallbackEndpoint, userInput, resolved);
    }
  }

  const response = await apiRequest(resolved, "/responses", {
    model,
    instructions: WRITING_REVIEW_INSTRUCTIONS,
    reasoning: { effort: "low" },
    input: userInput,
    text: {
      format: {
        type: "json_schema",
        name: "ielts_writing_review",
        schema: WRITING_REVIEW_SCHEMA,
        strict: true,
      },
    },
  });
  return {
    model,
    review: clampWritingReviewPayload(JSON.parse(extractOpenAIResponseText(response, resolved))),
  };
}

function response(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Accept",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    },
    body: JSON.stringify(body),
  };
}

module.exports = {
  ApiError,
  SUPPORTED_PROVIDERS,
  inferProviderName,
  requireProviderName,
  getProviderApiKey,
  getProviderLabel,
  getProviderModel,
  getProviderStatus,
  getOpenAICompatibleFallbackEndpoint,
  requestStructuredReview,
  shouldUseAsyncWritingReview,
  response,
};
