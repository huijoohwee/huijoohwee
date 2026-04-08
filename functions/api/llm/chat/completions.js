import { handleOptions, json, proxyToOpenAi, readJsonBody } from "../_shared.js";

export async function onRequest(context) {
  const { request, env } = context;
  const method = String(request.method || "GET").toUpperCase();
  const origin = request.headers.get("origin") || "";

  if (method === "OPTIONS") return handleOptions(request);
  if (method !== "POST") return json({ ok: false, error: "Method not allowed" }, { status: 405, origin });

  try {
    const contentType = String(request.headers.get("content-type") || "").toLowerCase();
    if (!contentType.includes("application/json")) {
      return json({ ok: false, error: "Expected application/json" }, { status: 415, origin });
    }

    const payload = await readJsonBody(request);
    return await proxyToOpenAi({ request, env, pathname: "/chat/completions", payload });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e || "Unknown error");
    return json({ ok: false, error: msg }, { status: 400, origin });
  }
}

