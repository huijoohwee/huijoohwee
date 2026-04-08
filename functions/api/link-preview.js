/**
 * Cloudflare Pages Function: minimal link preview metadata.
 *
 * Why: many sites block <iframe> via X-Frame-Options / CSP frame-ancestors.
 * This endpoint fetches only small metadata (title/description/image) so the UI can show
 * a useful preview without embedding the full page.
 */
import { parseAndValidateExternalUrl, shouldRejectCrossSiteFetch } from "./_urlPolicy.js";

const DEFAULT_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "public, max-age=600",
};


function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: { ...DEFAULT_HEADERS, ...(init.headers || {}) },
  });
}

function pickFirst(...values) {
  for (const v of values) {
    if (!v) continue;
    const s = String(v).trim();
    if (s) return s;
  }
  return null;
}

function extractMeta(html) {
  const head = html.slice(0, 80_000); // cap parsing work
  const titleMatch = head.match(/<title[^>]*>([^<]*)<\/title>/i);
  const ogTitleMatch = head.match(/<meta[^>]+property=["']og:title["'][^>]*content=["']([^"']+)["'][^>]*>/i);
  const ogDescMatch = head.match(
    /<meta[^>]+property=["']og:description["'][^>]*content=["']([^"']+)["'][^>]*>/i
  );
  const descMatch = head.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i);
  const ogImageMatch = head.match(/<meta[^>]+property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i);
  const ogSiteMatch = head.match(/<meta[^>]+property=["']og:site_name["'][^>]*content=["']([^"']+)["'][^>]*>/i);

  return {
    title: pickFirst(ogTitleMatch?.[1], titleMatch?.[1]),
    description: pickFirst(ogDescMatch?.[1], descMatch?.[1]),
    image: pickFirst(ogImageMatch?.[1]),
    siteName: pickFirst(ogSiteMatch?.[1]),
  };
}

export async function onRequestGet(context) {
  const url = context.request.url;
  const u = new URL(url);
  if (u.searchParams.get("ping") === "1") {
    return json({ ok: true, ping: true });
  }
  const target = u.searchParams.get("url") || "";

  if (shouldRejectCrossSiteFetch(context.request)) {
    return json({ ok: false, error: "forbidden" }, { status: 403, headers: { "cache-control": "no-store" } });
  }

  let targetUrl;
  try {
    targetUrl = parseAndValidateExternalUrl(target);
  } catch {
    return json({ ok: false, error: "invalid_url" }, { status: 400, headers: { "cache-control": "no-store" } });
  }

  try {
    const res = await fetch(targetUrl.toString(), {
      headers: {
        // Keep it boring to avoid some blocks.
        "user-agent": "Mozilla/5.0 (compatible; HackaMapLinkPreview/1.0)",
        accept: "text/html,application/xhtml+xml",
      },
      redirect: "follow",
      cf: { cacheTtl: 600, cacheEverything: true },
    });

    const contentType = res.headers.get("content-type") || "";
    if (!res.ok) {
      return json(
        { ok: false, error: "fetch_failed", status: res.status, url: targetUrl.toString() },
        { status: 200, headers: { "cache-control": "no-store" } }
      );
    }

    if (!contentType.includes("text/html")) {
      return json({
        ok: true,
        url: targetUrl.toString(),
        domain: targetUrl.host,
        contentType,
        title: null,
        description: null,
        image: null,
        siteName: null,
      });
    }

    const html = await res.text();
    const meta = extractMeta(html);

    return json({
      ok: true,
      url: targetUrl.toString(),
      domain: targetUrl.host,
      contentType,
      ...meta,
    });
  } catch (e) {
    return json(
      { ok: false, error: "exception", message: e?.message || String(e), url: targetUrl.toString() },
      { status: 200, headers: { "cache-control": "no-store" } }
    );
  }
}
