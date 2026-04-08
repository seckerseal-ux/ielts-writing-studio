const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

export function json(body, init = {}) {
  const responseInit = typeof init === "number" ? { status: init } : init;
  return Response.json(body, {
    status: responseInit.status || 200,
    headers: {
      ...corsHeaders,
      ...(responseInit.headers || {}),
    },
  });
}

export function options() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function readJson(request) {
  try {
    return await request.json();
  } catch {
    return {};
  }
}

export function nowIso() {
  return new Date().toISOString();
}
