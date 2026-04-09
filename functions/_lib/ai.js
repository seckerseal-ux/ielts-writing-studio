const DEFAULT_PROVIDER_BASE_URLS = {
  openai: "https://api.openai.com/v1",
  openrouter: "https://openrouter.ai/api/v1",
};

const DEFAULT_GEMAI_BASE_URL = "https://api.gemai.cc/v1";
const DEFAULT_GEMAI_WRITING_MODEL = "[满血B]gemini-3.1-pro-preview-thinking";
const DEFAULT_AIHUBMIX_BASE_URL = "https://aihubmix.com/v1";
const DEFAULT_AIHUBMIX_WRITING_MODEL = "MiniMax-M2.1";
const DEFAULT_OPENAI_WRITING_MODEL = "gpt-5-mini";
const DEFAULT_OPENROUTER_WRITING_MODEL = "openai/gpt-oss-20b:free";
const OPENAI_COMPAT_TIMEOUT_MS = 45000;
const OPENROUTER_TIMEOUT_MS = 25000;

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
You are a strict but helpful English writing examiner and coach.
You support both IELTS Academic Writing and Chinese postgraduate entrance exam English writing.
Return feedback in Simplified Chinese, but keep quoted essay snippets and improved English phrases in English.
Estimate sub-scores in 0.5 increments from 0 to 9 for consistency.
When exam=ielts, use IELTS Academic Writing expectations.
When exam=kaoyan, keep the hidden internal score in the 0-9 range for consistency, but do not mention IELTS bands such as "6.5 分" or "Band 6.5" in prose feedback.
When exam=kaoyan, describe performance in terms of task completion, structure, expression quality, and likely paper-score tendency instead of IELTS-style band wording.
For IELTS Task 1, treat the first criterion as Task Achievement and be strict about overview, data selection, and avoiding personal opinion.
For IELTS Task 2, treat the first criterion as Task Response and be strict about fully answering the question and supporting ideas.
For IELTS Task 2 prompts that explicitly ask for a position, judge how clear and consistent that position is.
For IELTS Task 2 double-question or problem-solution prompts, do not require a personal opinion unless the prompt explicitly asks for one.
For IELTS Task 2 body paragraphs, actively judge whether the logic develops from claim to reason to result/example instead of stopping at abstract labels.
When checking IELTS Task 2 examples, prefer concrete scenarios with people, actions, or situations over vague support such as "improve mental health" or "enhance development".
When checking IELTS Task 2 body paragraphs, comment on whether sentence length is controlled well enough for the logic to stay clear.
When exam=kaoyan and task=small, focus on task fulfilment, register, format, clarity, completeness, and whether the piece reads like a real English email/notice/letter.
When exam=kaoyan and task=large, focus on content development, picture/chart interpretation, commentary depth, logic, and natural English expression.
Do not invent mistakes that are not visible in the essay.
If the essay is clearly under length, state that directly.
Keep feedback concise but actionable.
Sentence upgrades must be plausible rewrites of the candidate's own sentences, not completely new content.
Vocabulary upgrades should focus on replacing repetitive or weak expressions with more natural exam-appropriate phrasing.
Paragraph plans should help the candidate rewrite this exact essay more effectively on the next attempt.
`.trim();

function createError(message, status = 400) {
  const error = new Error(message);
  error.status = status;
  return error;
}

function normalizeProviderName(provider) {
  const normalized = String(provider || "openai").trim().toLowerCase();
  return normalized === "openrouter" ? "openrouter" : "openai";
}

function providerLabelFromBaseUrl(baseUrl) {
  const normalized = String(baseUrl || "").trim().toLowerCase();
  if (normalized.includes("api.gemai.cc")) {
    return "GemAI";
  }
  if (normalized.includes("aihubmix.com")) {
    return "AIHubMix";
  }
  return "OpenAI";
}

function normalizeTask2GenreLabel(genre) {
  const normalized = String(genre || "").trim().toLowerCase();
  if (normalized === "agree or disagree") return "agree or disagree";
  if (normalized === "discuss both views") return "discuss both views";
  if (normalized === "advantages disadvantages") return "advantages disadvantages";
  if (normalized === "problem and solution") return "problem and solution";
  if (normalized === "double question") return "double question";
  return "";
}

function inferIeltsTask2GenreFromPromptText(text) {
  const promptText = String(text || "").trim();
  const normalized = promptText.toLowerCase();
  if (!promptText) {
    return "";
  }
  if (/discuss both views/i.test(promptText)) {
    return "discuss both views";
  }
  if (/to what extent do you agree or disagree|do you agree or disagree/i.test(promptText)) {
    return "agree or disagree";
  }
  if (/advantages?.*disadvantages?|outweigh the disadvantages?/i.test(promptText)) {
    return "advantages disadvantages";
  }
  if (/what problems?.*what solutions?|what problems?.*what measures?|causes this problem.*what can be done/i.test(normalized)) {
    return "problem and solution";
  }
  const questionMarks = (promptText.match(/\?/g) || []).length;
  const whQuestions = (promptText.match(/\b(what|why|how|who|where|when|which)\b/gi) || []).length;
  if (questionMarks >= 2 && whQuestions >= 2) {
    return "double question";
  }
  return "";
}

function getIeltsTask2Genre(promptPayload) {
  const exam = String(promptPayload?.exam || "ielts").trim().toLowerCase();
  const task = String(promptPayload?.task || "task2").trim().toLowerCase();
  if (exam !== "ielts" || task !== "task2") {
    return "";
  }
  return normalizeTask2GenreLabel(promptPayload?.genre) || inferIeltsTask2GenreFromPromptText(promptPayload?.prompt);
}

function getOpenAICompatiblePrimary(env) {
  const baseUrl = String(env.OPENAI_BASE_URL || DEFAULT_GEMAI_BASE_URL).trim();
  const label = providerLabelFromBaseUrl(baseUrl);
  const defaultModel = label === "GemAI"
    ? DEFAULT_GEMAI_WRITING_MODEL
    : label === "AIHubMix"
      ? DEFAULT_AIHUBMIX_WRITING_MODEL
      : DEFAULT_OPENAI_WRITING_MODEL;

  return {
    label,
    apiKey: String(env.OPENAI_API_KEY || "").trim(),
    baseUrl,
    model: String(env.OPENAI_WRITING_REVIEW_MODEL || defaultModel).trim(),
    timeoutMs: Number(env.OPENAI_COMPAT_TIMEOUT_MS || OPENAI_COMPAT_TIMEOUT_MS),
  };
}

function getOpenAICompatibleFallback(env) {
  const apiKey = String(env.OPENAI_COMPAT_FALLBACK_API_KEY || "").trim();
  const baseUrl = String(env.OPENAI_COMPAT_FALLBACK_BASE_URL || "").trim();
  if (!apiKey || !baseUrl) {
    return null;
  }

  const label = providerLabelFromBaseUrl(baseUrl);
  const defaultModel = label === "GemAI"
    ? DEFAULT_GEMAI_WRITING_MODEL
    : label === "AIHubMix"
      ? DEFAULT_AIHUBMIX_WRITING_MODEL
      : DEFAULT_OPENAI_WRITING_MODEL;

  return {
    label,
    apiKey,
    baseUrl,
    model: String(env.OPENAI_COMPAT_FALLBACK_WRITING_MODEL || defaultModel).trim(),
    timeoutMs: Number(env.OPENAI_COMPAT_FALLBACK_TIMEOUT_MS || OPENAI_COMPAT_TIMEOUT_MS),
  };
}

function getOpenRouterConfig(env) {
  return {
    label: "OpenRouter",
    apiKey: String(env.OPENROUTER_API_KEY || "").trim(),
    baseUrl: String(env.OPENROUTER_BASE_URL || DEFAULT_PROVIDER_BASE_URLS.openrouter).trim(),
    model: String(env.OPENROUTER_WRITING_REVIEW_MODEL || DEFAULT_OPENROUTER_WRITING_MODEL).trim(),
    timeoutMs: Number(env.OPENROUTER_TIMEOUT_MS || OPENROUTER_TIMEOUT_MS),
  };
}

export function getAiStatus(env) {
  const openaiPrimary = getOpenAICompatiblePrimary(env);
  const openrouter = getOpenRouterConfig(env);
  return {
    available: Boolean(openaiPrimary.apiKey || openrouter.apiKey),
    provider: "openai",
    provider_label: openaiPrimary.label,
    base_url: openaiPrimary.baseUrl,
    review_model: openaiPrimary.model,
    writing_review_model: openaiPrimary.model,
    backends: {
      openai: {
        available: Boolean(openaiPrimary.apiKey),
        provider: "openai",
        provider_label: openaiPrimary.label,
        base_url: openaiPrimary.baseUrl,
        review_model: openaiPrimary.model,
        writing_review_model: openaiPrimary.model,
      },
      openrouter: {
        available: Boolean(openrouter.apiKey),
        provider: "openrouter",
        provider_label: openrouter.label,
        base_url: openrouter.baseUrl,
        review_model: openrouter.model,
        writing_review_model: openrouter.model,
      },
    },
  };
}

function extractChatCompletionText(payload, providerLabel) {
  const choice = Array.isArray(payload?.choices) ? payload.choices[0] : null;
  const content = choice?.message?.content;

  if (typeof content === "string" && content.trim()) {
    return content.trim();
  }

  if (Array.isArray(content)) {
    const text = content
      .map((item) => item?.text?.value || item?.text || "")
      .filter(Boolean)
      .join("\n")
      .trim();
    if (text) {
      return text;
    }
  }

  throw createError(`${providerLabel} 返回了无法识别的响应格式。`, 502);
}

function parseJsonTextResponse(text, providerLabel) {
  const raw = String(text || "").trim();
  if (!raw) {
    throw createError(`${providerLabel} 返回了空的 JSON 文本。`, 502);
  }

  const normalized = raw
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  const candidates = [raw, normalized];
  const sourceList = [raw, normalized];
  sourceList.forEach((source) => {
    const firstCurly = source.indexOf("{");
    const lastCurly = source.lastIndexOf("}");
    if (firstCurly >= 0 && lastCurly > firstCurly) {
      candidates.push(source.slice(firstCurly, lastCurly + 1));
    }
  });

  for (const candidate of candidates) {
    try {
      return JSON.parse(candidate);
    } catch {
      try {
        return JSON.parse(
          candidate
            .replace(/[“”]/g, "\"")
            .replace(/[‘’]/g, "'")
            .replace(/,\s*([}\]])/g, "$1"),
        );
      } catch {
        continue;
      }
    }
  }

  throw createError(`${providerLabel} 返回了无法解析的 JSON 结果。`, 502);
}

function clampBand(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) {
    return 0;
  }
  return Math.max(0, Math.min(9, Math.round(numeric * 2) / 2));
}

function toStringArray(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item || "").trim()).filter(Boolean);
  }
  if (value && typeof value === "object") {
    return Object.entries(value)
      .map(([key, item]) => {
        const normalized = String(item || "").trim();
        return normalized ? `${key}: ${normalized}` : "";
      })
      .filter(Boolean);
  }
  return [];
}

function normalizeSentenceUpgrades(value) {
  return (Array.isArray(value) ? value : [])
    .map((item) => {
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
    })
    .filter((item) => item.better_version);
}

function normalizeVocabularyUpgrades(value) {
  return (Array.isArray(value) ? value : [])
    .map((item) => {
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
    })
    .filter((item) => item.improved);
}

function normalizeGrammarPatterns(value) {
  return (Array.isArray(value) ? value : [])
    .map((item) => {
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
    })
    .filter((item) => item.label || item.advice);
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
    const candidate = aliases
      .map((key) => review.band_breakdown[key])
      .find((value) => value !== undefined && value !== null);
    review.band_breakdown[targetKey] = clampBand(candidate);
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

function getExamReviewProfile(promptPayload) {
  const exam = String(promptPayload?.exam || "ielts").trim().toLowerCase() === "kaoyan" ? "kaoyan" : "ielts";
  const task = String(promptPayload?.task || (exam === "kaoyan" ? "large" : "task2")).trim().toLowerCase();
  const task2Genre = exam === "ielts" && task === "task2" ? getIeltsTask2Genre(promptPayload) : "";

  if (exam === "kaoyan") {
    if (task === "small") {
      return {
        exam,
        task,
        examLabel: "考研英语写作",
        taskLabel: "小作文",
        firstCriterion: "Task Fulfilment",
        focuses: [
          "是否完成题目要求和写作目的",
          "格式、称呼、结尾和语气是否合适",
          "信息是否完整、顺序是否清楚",
          "表达是否自然、礼貌且像真实英文应用文",
        ],
        phraseLine: "给出适合这道题继续套用的考研英语小作文表达。",
      };
    }

    return {
      exam,
      task,
      examLabel: "考研英语写作",
      taskLabel: "大作文",
      firstCriterion: "Content & Logic",
      focuses: [
        "是否抓住图表或图画最核心的信息",
        "是否有清楚评论，而不是只做描述",
        "观点推进是否自然，逻辑是否成线",
        "表达是否自然、书面、符合英文习惯",
      ],
      phraseLine: "给出适合这道题继续套用的考研英语大作文表达。",
    };
  }

  if (task === "task1") {
    return {
      exam,
      task,
      examLabel: "IELTS Academic Writing",
      taskLabel: "Task 1",
      firstCriterion: "Task Achievement",
      focuses: [
        "是否写出 overview",
        "是否抓住主要趋势和关键比较",
        "是否避免个人观点和无关信息",
        "语言是否客观、数据选择是否有效",
      ],
      phraseLine: "给出适合这道题继续套用的 IELTS Task 1 表达。",
    };
  }

  if (task2Genre === "double question") {
    return {
      exam,
      task,
      examLabel: "IELTS Academic Writing",
      taskLabel: "Task 2（双问题）",
      firstCriterion: "Task Response",
      focuses: [
        "是否把两个问题都直接回答到了",
        "两问是否都分到了足够篇幅，而不是只重点写一问",
        "每一问是否有解释、结果或具体例子展开",
        "主体段句子长短是否稳，例子是否具体到场景和人群",
        "表达是否自然、书面且符合英文习惯",
      ],
      phraseLine: "给出适合这道双问题题继续套用的 IELTS Task 2 表达。",
    };
  }

  if (task2Genre === "problem and solution") {
    return {
      exam,
      task,
      examLabel: "IELTS Academic Writing",
      taskLabel: "Task 2（问题解决）",
      firstCriterion: "Task Response",
      focuses: [
        "是否把问题和解决都回应到了",
        "问题是否足够具体，而不是泛泛而谈",
        "解决方案是否可执行、和问题真正对应",
        "主体段句子长短是否稳，例子是否具体到场景和人群",
        "表达是否自然、书面且符合英文习惯",
      ],
      phraseLine: "给出适合这道问题解决题继续套用的 IELTS Task 2 表达。",
    };
  }

  return {
    exam,
    task,
    examLabel: "IELTS Academic Writing",
    taskLabel: "Task 2",
    firstCriterion: "Task Response",
    focuses: [
      "是否真正回答题目",
      "立场是否清楚稳定",
      "论证是否展开，并有必要的具体例子或解释",
      "主体段句子长短是否稳，例子是否具体到场景和人群",
      "表达是否自然、书面且符合英文习惯",
    ],
    phraseLine: "给出适合这道题继续套用的 IELTS Task 2 表达。",
  };
}

function getPromptImageAttachment(promptPayload) {
  const attachment = promptPayload?.image_attachment;
  if (!attachment || typeof attachment !== "object" || Array.isArray(attachment)) {
    return null;
  }

  const dataUrl = String(attachment.data_url || "").trim();
  if (!/^data:image\//i.test(dataUrl)) {
    return null;
  }

  return {
    dataUrl,
    name: String(attachment.name || "prompt-image").trim(),
    mimeType: String(attachment.mime_type || "").trim(),
    width: Number(attachment.width || 0) || 0,
    height: Number(attachment.height || 0) || 0,
  };
}

function summarizePromptPayload(promptPayload) {
  if (!promptPayload || typeof promptPayload !== "object" || Array.isArray(promptPayload)) {
    return {};
  }

  const summary = { ...promptPayload };
  const imageAttachment = getPromptImageAttachment(promptPayload);
  if (imageAttachment) {
    summary.image_attachment = {
      attached: true,
      name: imageAttachment.name,
      mime_type: imageAttachment.mimeType,
      width: imageAttachment.width,
      height: imageAttachment.height,
    };
  } else {
    delete summary.image_attachment;
  }
  return summary;
}

function buildReviewPrompt(promptPayload, essayText, localMetrics, targetBand) {
  const profile = getExamReviewProfile(promptPayload);
  const promptSummary = summarizePromptPayload(promptPayload);
  const hasPromptImage = Boolean(getPromptImageAttachment(promptPayload));
  return `
请按 ${profile.examLabel} 的 ${profile.taskLabel} 标准做评估。

题目定义:
${JSON.stringify(promptSummary, null, 2)}

${hasPromptImage ? "补充说明: 题目附带了一张图片，请先结合图片理解题意，再看文字说明。" : ""}

考生作文:
${essayText}

本地统计指标:
${JSON.stringify(localMetrics || {}, null, 2)}

目标分数:
${targetBand || "未提供"}

请输出结构化结果，重点关注：
1. ${profile.firstCriterion}
2. Coherence and Cohesion
3. Lexical Resource
4. Grammatical Range and Accuracy

请特别检查：
${profile.focuses.map((item, index) => `${index + 1}. ${item}`).join("\n")}

反馈应明确指出这篇作文最主要的问题、最值得保留的优点，以及下一轮改写时最该优先修改的地方。
另外请额外返回：
1. 2-4 个 focus_areas，使用短标签描述下一轮最需要盯住的改进方向。
2. 2-4 个 sentence_upgrades，只改写考生原文里真实存在的句子。
3. 2-4 个 vocabulary_upgrades，聚焦重复、口语化或偏弱的表达。
4. 3-5 条 paragraph_plan，告诉考生如何更好地重写这篇作文的结构。
5. 3-5 个 useful_phrases，${profile.phraseLine}
`.trim();
}

function buildReviewMessageContent(promptPayload, userInput) {
  const instruction = `${userInput}\n\n只返回一个合法 JSON 对象，不要添加 markdown、解释、思考过程或代码块。\nJSON Schema:\n${JSON.stringify(WRITING_REVIEW_SCHEMA)}`;
  const attachment = getPromptImageAttachment(promptPayload);
  if (!attachment) {
    return instruction;
  }
  return [
    { type: "text", text: instruction },
    { type: "image_url", image_url: { url: attachment.dataUrl } },
  ];
}

async function withTimeout(promise, timeoutMs, message) {
  let timeoutId = null;
  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = setTimeout(() => reject(createError(message, 504)), timeoutMs);
  });

  try {
    return await Promise.race([promise, timeoutPromise]);
  } finally {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
}

async function fetchJson(url, init, timeoutMs, label) {
  const response = await withTimeout(fetch(url, init), timeoutMs, `${label} 请求超时，请尝试下一个可用模型。`);
  const rawText = await response.text();
  let payload = {};

  try {
    payload = rawText ? JSON.parse(rawText) : {};
  } catch {
    payload = { raw: rawText };
  }

  if (!response.ok) {
    const message = payload?.error?.message || payload?.message || payload?.error || rawText || "未知错误";
    throw createError(`${label} 接口返回错误：${message}`, response.status || 502);
  }

  return payload;
}

function shouldRetryWithFallback(error) {
  const status = Number(error?.status || 0);
  const message = String(error?.message || "").toLowerCase();
  if ([408, 409, 429, 500, 502, 503, 504].includes(status)) {
    return true;
  }
  return /timeout|timed out|rate limit|quota|exceeded|too many|overloaded|busy|temporar|unavailable|fetch failed|invalid json|无法解析的 json|malformed json/.test(message);
}

async function requestFromOpenAICompatible(endpoint, promptPayload, userInput) {
  if (!endpoint?.apiKey) {
    throw createError(`缺少 ${endpoint?.label || "OpenAI 兼容"} 的 API Key。`, 503);
  }
  if (!endpoint?.baseUrl) {
    throw createError(`缺少 ${endpoint?.label || "OpenAI 兼容"} 的 Base URL。`, 503);
  }

  const response = await fetchJson(
    `${endpoint.baseUrl}/chat/completions`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${endpoint.apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        model: endpoint.model,
        messages: [
          { role: "system", content: WRITING_REVIEW_INSTRUCTIONS },
          {
            role: "user",
            content: buildReviewMessageContent(promptPayload, userInput),
          },
        ],
        temperature: 0.2,
        stream: false,
        response_format: { type: "json_object" },
      }),
    },
    endpoint.timeoutMs,
    endpoint.label,
  );

  return {
    provider_label: endpoint.label,
    model: String(response?.model || endpoint.model || ""),
    review: clampWritingReviewPayload(
      parseJsonTextResponse(extractChatCompletionText(response, endpoint.label), endpoint.label),
    ),
  };
}

async function requestFromOpenRouter(config, promptPayload, userInput) {
  if (!config.apiKey) {
    throw createError("缺少 OPENROUTER_API_KEY。", 503);
  }

  const response = await fetchJson(
    `${config.baseUrl}/chat/completions`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        model: config.model,
        messages: [
          { role: "system", content: WRITING_REVIEW_INSTRUCTIONS },
          {
            role: "user",
            content: buildReviewMessageContent(promptPayload, userInput),
          },
        ],
        temperature: 0.2,
        stream: false,
      }),
    },
    config.timeoutMs,
    config.label,
  );

  return {
    provider_label: config.label,
    model: String(response?.model || config.model || ""),
    review: clampWritingReviewPayload(
      parseJsonTextResponse(extractChatCompletionText(response, config.label), config.label),
    ),
  };
}

export async function requestStructuredReview(env, providerName, promptPayload, essayText, localMetrics, targetBand) {
  const provider = normalizeProviderName(providerName);
  const userInput = buildReviewPrompt(promptPayload, essayText, localMetrics, targetBand);

  if (provider === "openrouter") {
    return requestFromOpenRouter(getOpenRouterConfig(env), promptPayload, userInput);
  }

  const primary = getOpenAICompatiblePrimary(env);
  const fallback = getOpenAICompatibleFallback(env);

  try {
    return await requestFromOpenAICompatible(primary, promptPayload, userInput);
  } catch (error) {
    if (!fallback || !shouldRetryWithFallback(error)) {
      throw error;
    }
    return requestFromOpenAICompatible(fallback, promptPayload, userInput);
  }
}
