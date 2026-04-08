import { getUserSnapshot } from "../../_lib/db.js";
import { json, options } from "../../_lib/response.js";

export const onRequestOptions = () => options();

export async function onRequestGet(context) {
  try {
    const url = new URL(context.request.url);
    const deviceId = String(url.searchParams.get("device_id") || "").trim();
    if (!deviceId) {
      return json({ ok: true, snapshot: null });
    }

    const snapshot = await getUserSnapshot(context.env, deviceId);
    return json({ ok: true, snapshot });
  } catch (error) {
    return json({ error: error.message || "服务内部错误。" }, 500);
  }
}
