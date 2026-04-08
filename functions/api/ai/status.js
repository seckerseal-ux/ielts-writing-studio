import { getAiStatus } from "../../_lib/ai.js";
import { json, options } from "../../_lib/response.js";

export const onRequestOptions = () => options();

export async function onRequestGet(context) {
  try {
    return json(getAiStatus(context.env));
  } catch (error) {
    return json({ error: `服务内部错误：${error.message || error}` }, 500);
  }
}
