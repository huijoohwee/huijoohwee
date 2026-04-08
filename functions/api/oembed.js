/**
 * Cloudflare Pages Function: oEmbed JSON proxy (same-origin) to avoid browser CORS failures.
 *
 * Why:
 * - Many oEmbed endpoints (e.g., Reddit/LinkedIn) do not allow client-side fetch() from localhost.
 * - This endpoint fetches server-side and returns the upstream JSON to the browser.
 *
 * Security:
 * - NOT a generic proxy: it only supports a small allowlist of providers.
 * - Rejects non-http(s) URLs and disallows unknown hosts.
 */
import { corsHeaders } from "./_integrationHub.js";

const CACHE_TTL_SECONDS = 10 * 60;

const DEFAULT_JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": `public, max-age=${CACHE_TTL_SECONDS}`,
};

function jsonResponse(request, data, init = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      ...DEFAULT_JSON_HEADERS,
      ...(init.headers || {}),
      ...corsHeaders(request),
    },
  });
}

function isHttpUrl(value) {
  try {
    const u = new URL(String(value));
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

function normalizeHost(value) {
  return String(value || "").trim().toLowerCase();
}

function isHostMatch(hostname, { exact, suffixes }) {
  const host = normalizeHost(hostname);
  if (!host) return false;
  if (Array.isArray(exact) && exact.some((h) => host === normalizeHost(h))) return true;
  if (Array.isArray(suffixes) && suffixes.some((s) => host === normalizeHost(s) || host.endsWith(`.${normalizeHost(s)}`)))
    return true;
  return false;
}

function buildOembedUpstreamUrl(targetUrl) {
  const host = normalizeHost(targetUrl.hostname);
  const target = targetUrl.toString();

  if (isHostMatch(host, { suffixes: ["linkedin.com"] })) {
    return new URL(`https://www.linkedin.com/embeds/oembed.json?url=${encodeURIComponent(target)}`);
  }
  if (isHostMatch(host, { exact: ["twitter.com", "x.com"], suffixes: ["twitter.com", "x.com"] })) {
    return new URL(`https://publish.twitter.com/oembed?omit_script=1&url=${encodeURIComponent(target)}`);
  }
  if (isHostMatch(host, { exact: ["reddit.com"], suffixes: ["reddit.com"] })) {
    return new URL(`https://www.reddit.com/oembed?url=${encodeURIComponent(target)}`);
  }

  return null;
}

async function fetchJsonUpstream({ upstreamUrl }) {
  const res = await fetch(upstreamUrl.toString(), {
    headers: {
      // Keep it boring to reduce blocks.
      "user-agent": "Mozilla/5.0 (compatible; OEmbedProxy/1.0)",
      accept: "application/json,text/json;q=0.9,*/*;q=0.1",
    },
    redirect: "follow",
    // Let Cloudflare cache successful responses.
    cf: { cacheTtl: CACHE_TTL_SECONDS, cacheEverything: true },
  });
  return res;
}

export async function onRequest(context) {
  const { request } = context;
  const method = String(request.method || "GET").toUpperCase();
  const u = new URL(request.url);

  if (method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        ...corsHeaders(request),
        "access-control-allow-methods": "GET, HEAD, OPTIONS",
        "access-control-allow-headers": "*",
        "access-control-max-age": "86400",
      },
    });
  }

  if (!["GET", "HEAD"].includes(method)) {
    return jsonResponse(request, { ok: false, error: "unsupported_method" }, { status: 405 });
  }

  if (u.searchParams.get("ping") === "1") {
    return jsonResponse(request, { ok: true, ping: true });
  }

  const targetRaw = u.searchParams.get("url") || "";
  if (!isHttpUrl(targetRaw)) {
    return jsonResponse(
      request,
      { ok: false, error: "invalid_url" },
      { status: 400, headers: { "cache-control": "no-store" } },
    );
  }

  let targetUrl;
  try {
    targetUrl = new URL(targetRaw);
  } catch {
    return jsonResponse(
      request,
      { ok: false, error: "invalid_url" },
      { status: 400, headers: { "cache-control": "no-store" } },
    );
  }

  const upstreamUrl = buildOembedUpstreamUrl(targetUrl);
  if (!upstreamUrl) {
    return jsonResponse(
      request,
      { ok: false, error: "unsupported_provider" },
      { status: 400, headers: { "cache-control": "no-store" } },
    );
  }

  const upstreamRes = await fetchJsonUpstream({ upstreamUrl });
  const responseHeaders = new Headers(upstreamRes.headers);
  responseHeaders.delete("content-length");
  responseHeaders.set("cache-control", upstreamRes.ok ? DEFAULT_JSON_HEADERS["cache-control"] : "no-store");
  for (const [key, value] of Object.entries(corsHeaders(request))) {
    responseHeaders.set(key, value);
  }

  // Pass-through status code so callers can keep existing "!res.ok => ignore" behavior.
  if (method === "HEAD") {
    return new Response(null, { status: upstreamRes.status, headers: responseHeaders });
  }

  const text = await upstreamRes.text();
  // Ensure the response is JSON-ish. If upstream returns HTML, avoid confusing the client.
  try {
    JSON.parse(text);
  } catch {
    return jsonResponse(
      request,
      { ok: false, error: "invalid_upstream_json", status: upstreamRes.status },
      { status: 502, headers: { "cache-control": "no-store" } },
    );
  }

  responseHeaders.set("content-type", "application/json; charset=utf-8");
  return new Response(text, { status: upstreamRes.status, headers: responseHeaders });
}

