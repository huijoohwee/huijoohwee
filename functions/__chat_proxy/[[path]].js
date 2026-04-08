import {
  OPENAI_HOST,
  getDeerflowUpstreamBase,
  isLocalHost,
  jsonResponse,
  normalizeHost,
  parseAllowedHosts,
  readHeader,
} from '../api/_integrationHub.js';

const CHAT_PROXY_PREFIX = '/__chat_proxy';

const pickUpstreamBase = ({ provider, requestedUpstream, env, deerflowOnly }) => {
  const deerflowBase = getDeerflowUpstreamBase(env);
  if (deerflowOnly || provider === 'deerflow') {
    return deerflowBase;
  }
  if (provider === 'openai') return 'https://api.openai.com';
  if (requestedUpstream) return requestedUpstream;
  return String(env.KNOWGRPH_CHAT_PROXY_UPSTREAM || '').trim() || deerflowBase;
};

export async function onRequest(context) {
  const { request, env } = context;
  const method = String(request.method || 'GET').toUpperCase();
  const requestUrl = new URL(request.url);

  if (method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'access-control-allow-origin': readHeader(request.headers, 'origin') || '*',
        'access-control-allow-methods': 'GET, HEAD, POST, OPTIONS',
        'access-control-allow-headers': '*',
        'access-control-max-age': '86400',
      },
    });
  }
  if (!['GET', 'HEAD', 'POST'].includes(method)) {
    return jsonResponse(request, { ok: false, error: 'Unsupported method' }, 405);
  }

  const provider = normalizeHost(readHeader(request.headers, 'x-kg-chat-provider'));
  const gatewayMode = String(env.KNOWGRPH_CHAT_GATEWAY_MODE || '').trim().toLowerCase();
  const deerflowOnly = gatewayMode === 'deerflow-only';
  if (deerflowOnly && provider && provider !== 'deerflow') {
    return jsonResponse(request, { ok: false, error: 'Chat proxy is running in deerflow-only gateway mode' }, 400);
  }

  const upstreamBaseRaw = pickUpstreamBase({
    provider,
    requestedUpstream: readHeader(request.headers, 'x-kg-chat-upstream'),
    env,
    deerflowOnly,
  });
  let upstreamBase;
  try {
    upstreamBase = new URL(upstreamBaseRaw);
  } catch {
    return jsonResponse(request, { ok: false, error: 'Invalid chat proxy upstream configuration' }, 500);
  }

  const allowedHosts = parseAllowedHosts(env, { includeOpenAi: true });
  const upstreamHostname = normalizeHost(upstreamBase.hostname);
  if (!allowedHosts.has(upstreamHostname)) {
    return jsonResponse(request, { ok: false, error: 'Chat proxy upstream host is not allowed' }, 403);
  }
  if (!isLocalHost(upstreamHostname) && upstreamBase.protocol !== 'https:') {
    return jsonResponse(request, { ok: false, error: 'Chat proxy requires HTTPS for non-local upstream hosts' }, 403);
  }

  const requiresOpenAiKey = !deerflowOnly && (provider === 'openai' || upstreamHostname === OPENAI_HOST);
  const openAiApiKey = (
    readHeader(request.headers, 'x-kg-chat-api-key') || String(env.KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY || '').trim()
  ).slice(0, 512);
  if (requiresOpenAiKey && !openAiApiKey) {
    return jsonResponse(request, { ok: false, error: 'Missing OpenAI API key for chat proxy upstream' }, 500);
  }

  if (method === 'POST') {
    const contentType = readHeader(request.headers, 'content-type').toLowerCase();
    if (!contentType.includes('application/json')) {
      return jsonResponse(request, { ok: false, error: 'Chat proxy expects application/json payloads' }, 415);
    }
  }

  const suffix = requestUrl.pathname.startsWith(CHAT_PROXY_PREFIX)
    ? requestUrl.pathname.slice(CHAT_PROXY_PREFIX.length) || '/v1/chat/completions'
    : '/v1/chat/completions';
  const upstreamPath = suffix.startsWith('/') ? suffix : `/${suffix}`;
  const upstreamUrl = new URL(`${upstreamPath}${requestUrl.search || ''}`, upstreamBase);

  const headers = new Headers();
  const contentType = readHeader(request.headers, 'content-type');
  const accept = readHeader(request.headers, 'accept');
  if (contentType) headers.set('content-type', contentType);
  if (accept) headers.set('accept', accept);
  if (requiresOpenAiKey) headers.set('authorization', `Bearer ${openAiApiKey}`);

  const abortController = new AbortController();
  const timeoutMsRaw = Number(env.KNOWGRPH_CHAT_PROXY_TIMEOUT_MS);
  const timeoutMs = Number.isFinite(timeoutMsRaw) ? Math.max(5_000, Math.min(180_000, Math.floor(timeoutMsRaw))) : 90_000;
  const timeoutId = setTimeout(() => abortController.abort(), timeoutMs);
  try {
    const upstreamResponse = await fetch(upstreamUrl.toString(), {
      method,
      headers,
      body: method === 'GET' || method === 'HEAD' ? undefined : request.body,
      signal: abortController.signal,
      redirect: 'follow',
    });
    const responseHeaders = new Headers(upstreamResponse.headers);
    responseHeaders.delete('content-length');
    responseHeaders.delete('www-authenticate');
    responseHeaders.set('cache-control', 'no-store');
    const origin = readHeader(request.headers, 'origin');
    if (origin) {
      responseHeaders.set('access-control-allow-origin', origin);
      responseHeaders.set('vary', 'Origin');
    }
    if (method === 'HEAD') {
      return new Response(null, {
        status: upstreamResponse.status,
        statusText: upstreamResponse.statusText,
        headers: responseHeaders,
      });
    }
    return new Response(upstreamResponse.body, {
      status: upstreamResponse.status,
      statusText: upstreamResponse.statusText,
      headers: responseHeaders,
    });
  } catch (error) {
    const message = error && typeof error === 'object' && 'message' in error ? String(error.message || '') : '';
    const aborted = abortController.signal.aborted || /aborted|timeout/i.test(message);
    return jsonResponse(request, { ok: false, error: message || 'Failed to reach chat upstream' }, aborted ? 504 : 502);
  } finally {
    clearTimeout(timeoutId);
  }
}
