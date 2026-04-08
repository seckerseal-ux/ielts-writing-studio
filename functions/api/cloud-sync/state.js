import {
  WRITING_SYNC_NAMESPACE,
  getSessionToken,
  handleCloudSyncError,
  jsonResponse,
  optionsResponse,
  readCloudProgress,
  writeCloudProgress,
} from "../../_shared/cloud-sync.js";

export async function onRequest(context) {
  if (context.request.method === "OPTIONS") {
    return optionsResponse();
  }

  const token = getSessionToken(context.request);

  try {
    if (context.request.method === "GET") {
      const { session, snapshot } = await readCloudProgress(context.env, token, WRITING_SYNC_NAMESPACE);
      return jsonResponse({
        ok: true,
        accountId: session.accountId,
        updatedAt: snapshot.updatedAt,
        state: snapshot.state,
      });
    }

    if (context.request.method === "POST") {
      const payload = await context.request.json().catch(() => ({}));
      const result = await writeCloudProgress(
        context.env,
        token,
        payload.state,
        payload.updatedAt,
        WRITING_SYNC_NAMESPACE,
      );
      return jsonResponse({
        ok: true,
        accountId: result.accountId,
        updatedAt: result.updatedAt,
        state: result.state,
        conflict: result.conflict,
      });
    }

    return jsonResponse({ ok: false, error: "Method Not Allowed" }, 405, { Allow: "OPTIONS, GET, POST" });
  } catch (error) {
    return handleCloudSyncError(error);
  }
}
