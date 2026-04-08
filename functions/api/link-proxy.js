/**
 * Cloudflare Pages Function: safe HTML proxy for link preview.
 *
 * Why: many sites block <iframe> embedding (X-Frame-Options / CSP frame-ancestors).
 * This endpoint fetches the remote HTML server-side, strips active content, and serves
 * a "reader-ish" version from same-origin so the iframe can display something useful.
 */
import { parseAndValidateExternalUrl, shouldRejectCrossSiteFetch } from "./_urlPolicy.js";

const MAX_HTML_CHARS = 350_000; // cap memory/runtime

function stripActiveContent(html) {
  let out = html;
  // Drop scripts & iframes first (biggest risk).
  out = out.replace(/<script\b[\s\S]*?<\/script>/gi, "");
  out = out.replace(/<iframe\b[\s\S]*?<\/iframe>/gi, "");
  out = out.replace(/<object\b[\s\S]*?<\/object>/gi, "");
  out = out.replace(/<embed\b[\s\S]*?>/gi, "");
  out = out.replace(/<noscript\b[\s\S]*?<\/noscript>/gi, "");

  // Remove inline event handlers (best-effort).
  out = out.replace(/\son[a-z]+\s*=\s*"[^"]*"/gi, "");
  out = out.replace(/\son[a-z]+\s*=\s*'[^']*'/gi, "");
  return out;
}

function buildWrapper({ url, title, innerHtml }) {
  const safeTitle = title ? String(title).slice(0, 140) : "Preview";
  const escapedUrl = String(url).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="referrer" content="no-referrer" />
    <title>${safeTitle}</title>
    <style>
      :root { color-scheme: dark; }
      body { margin: 0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; background: #0b1020; color: rgba(255,255,255,0.92); }
      .bar { position: sticky; top: 0; z-index: 2; display: flex; align-items: center; gap: 10px; padding: 10px 12px; background: rgba(0,0,0,0.55); border-bottom: 1px solid rgba(255,255,255,0.14); backdrop-filter: blur(10px); }
      .bar .t { flex: 1; font-size: 12px; font-weight: 650; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .bar a { color: #7dd3fc; font-size: 12px; text-decoration: none; }
      .bar a:hover { text-decoration: underline; }
      .content { padding: 12px; }
      img { max-width: 100%; height: auto; }
      a { color: #7dd3fc; }
    </style>
  </head>
  <body>
    <div class="bar">
      <div class="t">${safeTitle}</div>
      <a href="${escapedUrl}" target="_blank" rel="noopener">Open</a>
    </div>
    <div class="content">${innerHtml}</div>
  </body>
</html>`;
}

export async function onRequestGet(context) {
  const reqUrl = new URL(context.request.url);
  const target = reqUrl.searchParams.get("url") || "";

  if (shouldRejectCrossSiteFetch(context.request)) {
    return new Response("Forbidden", { status: 403, headers: { "cache-control": "no-store" } });
  }

  let targetUrl;
  try {
    targetUrl = parseAndValidateExternalUrl(target);
  } catch (e) {
    const msg = e instanceof Error ? e.message : "invalid_url";
    return new Response(msg, { status: 400, headers: { "cache-control": "no-store" } });
  }

  try {
    const res = await fetch(targetUrl.toString(), {
      headers: {
        "user-agent": "Mozilla/5.0 (compatible; HackaMapLinkProxy/1.0)",
        accept: "text/html,application/xhtml+xml",
      },
      redirect: "follow",
      cf: { cacheTtl: 600, cacheEverything: true },
    });

    const contentType = res.headers.get("content-type") || "";
    if (!res.ok) {
      return new Response(`Fetch failed (${res.status})`, {
        status: 200,
        headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" },
      });
    }

    if (!contentType.includes("text/html")) {
      return new Response(`Unsupported content-type: ${contentType}`, {
        status: 200,
        headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=600" },
      });
    }

    let html = await res.text();
    if (html.length > MAX_HTML_CHARS) html = html.slice(0, MAX_HTML_CHARS);

    const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
    const title = titleMatch?.[1]?.trim() || targetUrl.host;

    html = stripActiveContent(html);

    // Ensure relative links resolve.
    const hasBase = /<base\s/i.test(html);
    if (!hasBase) {
      html = html.replace(/<head([^>]*)>/i, `<head$1><base href="${targetUrl.origin}/">`);
    }

    const wrapped = buildWrapper({ url: targetUrl.toString(), title, innerHtml: html });

    return new Response(wrapped, {
      status: 200,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=600",
        // Lock it down: no scripts, no network beacons. Allow images/styles from https.
        "content-security-policy":
          "default-src 'none'; img-src https: data:; style-src 'unsafe-inline' https:; font-src https: data:; frame-ancestors 'self';",
      },
    });
  } catch (e) {
    return new Response(`Exception: ${e?.message || String(e)}`, {
      status: 200,
      headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" },
    });
  }
}
