/**
 * Cloudflare Pages Functions: unified LLM surface (SSOT).
 *
 * Goals (free-tier + max security):
 * - Same-origin `/api/llm/*` for airvio.co (no CORS complexity).
 * - Server-managed API key only (no BYOK by default).
 * - Strict allowlist (models + endpoints), size caps, and fail-closed behavior.
 */
const OPENAI_API_BASE = "https://api.openai.com/v1";

const DEFAULT_MAX_BODY_BYTES = 1_000_000;

const ALLOWED_MODELS = Object.freeze([
  "gpt-5.4-nano",
  "gpt-4o-mini",
]);

function normalizeOrigin(value) {
  return String(value || "").trim();
}

function isAllowedOrigin(origin) {
  const o = normalizeOrigin(origin);
  if (!o) return false;
  if (o === "https://airvio.co") return true;
  // Local dev.
  return (
    o.startsWith("http://localhost:") ||
    o.startsWith("http://127.0.0.1:") ||
    o.startsWith("http://0.0.0.0:")
  );
}

function corsHeaders(origin) {
  const o = normalizeOrigin(origin);
  if (!isAllowedOrigin(o)) return {};
  return {
    "access-control-allow-origin": o,
    vary: "Origin",
    "access-control-allow-methods": "GET, POST, OPTIONS",
    "access-control-allow-headers": "content-type, x-flowinfish-session",
    "access-control-max-age": "86400",
  };
}

function json(data, { status = 200, origin = "" } = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...corsHeaders(origin),
    },
  });
}

function text(body, { status = 200, origin = "", contentType = "text/plain; charset=utf-8" } = {}) {
  return new Response(String(body || ""), {
    status,
    headers: {
      "content-type": contentType,
      "cache-control": "no-store",
      ...corsHeaders(origin),
    },
  });
}

async function readJsonBody(request, { maxBytes = DEFAULT_MAX_BODY_BYTES } = {}) {
  const raw = await request.arrayBuffer();
  if (raw.byteLength > maxBytes) throw new Error("Request too large");
  const txt = new TextDecoder().decode(raw);
  try {
    return txt ? JSON.parse(txt) : {};
  } catch {
    throw new Error("Invalid JSON body");
  }
}

function enforceAllowedModel(payload) {
  const model = String(payload?.model || "").trim();
  if (!model) throw new Error("Missing model");
  if (!ALLOWED_MODELS.includes(model)) throw new Error(`Model not allowed: ${model}`);
  return model;
}

function requireOpenAiKey(env) {
  const key = String(env.OPENAI_API_KEY || "").trim();
  if (!key) throw new Error("Missing server OPENAI_API_KEY");
  return key;
}

async function proxyToOpenAi({ request, env, pathname, payload }) {
  const openAiKey = requireOpenAiKey(env);
  enforceAllowedModel(payload);

  const upstreamUrl = `${OPENAI_API_BASE}${pathname}`;
  const res = await fetch(upstreamUrl, {
    method: "POST",
    headers: {
      authorization: `Bearer ${openAiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const headers = new Headers(res.headers);
  headers.delete("content-length");
  headers.set("cache-control", "no-store");
  return new Response(res.body, { status: res.status, headers });
}

function handleOptions(request) {
  const origin = request.headers.get("origin") || "";
  return new Response(null, { status: 204, headers: { ...corsHeaders(origin) } });
}

export {
  ALLOWED_MODELS,
  corsHeaders,
  enforceAllowedModel,
  handleOptions,
  json,
  proxyToOpenAi,
  readJsonBody,
  text,
};

