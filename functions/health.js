import { corsHeaders } from './api/_integrationHub.js';

/**
 * Cloudflare Pages Function: /health
 * Same-origin health probe for Singabldr.
 *
 * Security:
 * - No secrets
 * - No upstream calls
 * - Cache disabled
 */
export async function onRequest(context) {
  const { request } = context;
  const method = String(request.method || 'GET').toUpperCase();

  if (method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        ...corsHeaders(request),
        'access-control-allow-methods': 'GET, HEAD, OPTIONS',
        'access-control-allow-headers': '*',
        'access-control-max-age': '86400',
      },
    });
  }

  if (method !== 'GET' && method !== 'HEAD') {
    return new Response(JSON.stringify({ ok: false, error: 'unsupported_method' }), {
      status: 405,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'no-store',
        ...corsHeaders(request),
      },
    });
  }

  const body = {
    ok: true,
    service: 'singabldr-pages',
    ts: new Date().toISOString(),
  };

  const headers = {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
    ...corsHeaders(request),
  };

  if (method === 'HEAD') return new Response(null, { status: 200, headers });
  return new Response(JSON.stringify(body), { status: 200, headers });
}

