import { ALLOWED_MODELS, handleOptions, json } from "./_shared.js";

export async function onRequest(context) {
  const { request } = context;
  const method = String(request.method || "GET").toUpperCase();
  const origin = request.headers.get("origin") || "";

  if (method === "OPTIONS") return handleOptions(request);
  if (method !== "GET" && method !== "HEAD") {
    return json({ ok: false, error: "Method not allowed" }, { status: 405, origin });
  }

  return json(
    {
      ok: true,
      models: ALLOWED_MODELS.map((m) => ({
        model: m,
        // Keep shape simple; frontend can map to labels.
        display_name: m,
      })),
    },
    { status: 200, origin },
  );
}

