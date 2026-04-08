import { upsertUserSnapshot } from "../../_lib/db.js";
import { json, options, readJson } from "../../_lib/response.js";

export const onRequestOptions = () => options();

export async function onRequestPost(context) {
  try {
    const payload = await readJson(context.request);
    const deviceId = String(payload.device_id || "").trim();
    if (!deviceId) {
      return json({ error: "缺少设备编号。" }, 400);
    }

    const snapshot = await upsertUserSnapshot(
      context.env,
      deviceId,
      payload.state || {},
      String(payload.source || "app"),
    );

    return json({ ok: true, snapshot });
  } catch (error) {
    return json({ error: error.message || "服务内部错误。" }, 500);
  }
}
