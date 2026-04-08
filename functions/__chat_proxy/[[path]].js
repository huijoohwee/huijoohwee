const CHAT_PROXY_PREFIX = '/__chat_proxy';
const OPENAI_HOST = 'api.openai.com';
const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1', '0.0.0.0']);

const normalizeHost = (value) => String(value || '').trim().toLowerCase();

const readHeader = (headers, name) => String(headers.get(name) || '').trim();

const isLocalHost = (hostname) => LOCAL_HOSTS.has(normalizeHost(hostname));

const parseAllowedHosts = (env) => {
  const raw = String(env.KNOWGRPH_CHAT_PROXY_ALLOWED_HOSTS || '').trim();
  if (!raw) return new Set([...LOCAL_HOSTS, OPENAI_HOST]);
  const out = new Set();
  raw
    .split(',')
    .map((part) => normalizeHost(part))
    .filter(Boolean)
    .forEach((host) => out.add(host));
  if (!out.size) return new Set([...LOCAL_HOSTS, OPENAI_HOST]);
  return out;
};

const jsonResponse = (body, status, origin = '') =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      ...(origin ? { 'access-control-allow-origin': origin, vary: 'Origin' } : {}),
    },
  });

const pickUpstreamBase = ({ provider, requestedUpstream, env, deerflowOnly }) => {
  const deerflowBase = String(env.KNOWGRPH_CHAT_PROXY_DEERFLOW_UPSTREAM || '').trim();
  if (deerflowOnly || provider === 'deerflow') {
    return deerflowBase || String(env.KNOWGRPH_CHAT_PROXY_UPSTREAM || '').trim() || 'http://127.0.0.1:1234';
  }
  if (provider === 'openai') return 'https://api.openai.com';
  if (requestedUpstream) return requestedUpstream;
  return String(env.KNOWGRPH_CHAT_PROXY_UPSTREAM || '').trim() || 'http://127.0.0.1:1234';
};

export async function onRequest(context) {
  const { request, env } = context;
  const method = String(request.method || 'GET').toUpperCase();
  const requestUrl = new URL(request.url);
  const origin = readHeader(request.headers, 'origin');

  if (method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'access-control-allow-origin': origin || '*',
        'access-control-allow-methods': 'GET, HEAD, POST, OPTIONS',
        'access-control-allow-headers': '*',
        'access-control-max-age': '86400',
      },
    });
  }
  if (!['GET', 'HEAD', 'POST'].includes(method)) {
    return jsonResponse({ ok: false, error: 'Unsupported method' }, 405, origin);
  }

  const provider = normalizeHost(readHeader(request.headers, 'x-kg-chat-provider'));
  const gatewayMode = String(env.KNOWGRPH_CHAT_GATEWAY_MODE || '').trim().toLowerCase();
  const deerflowOnly = gatewayMode === 'deerflow-only';
  if (deerflowOnly && provider && provider !== 'deerflow') {
    return jsonResponse({ ok: false, error: 'Chat proxy is running in deerflow-only gateway mode' }, 400, origin);
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
    return jsonResponse({ ok: false, error: 'Invalid chat proxy upstream configuration' }, 500, origin);
  }

  const allowedHosts = parseAllowedHosts(env);
  const upstreamHostname = normalizeHost(upstreamBase.hostname);
  if (!allowedHosts.has(upstreamHostname)) {
    return jsonResponse({ ok: false, error: 'Chat proxy upstream host is not allowed' }, 403, origin);
  }
  if (!isLocalHost(upstreamHostname) && upstreamBase.protocol !== 'https:') {
    return jsonResponse({ ok: false, error: 'Chat proxy requires HTTPS for non-local upstream hosts' }, 403, origin);
  }

  const requiresOpenAiKey = !deerflowOnly && (provider === 'openai' || upstreamHostname === OPENAI_HOST);
  const openAiApiKey = (
    readHeader(request.headers, 'x-kg-chat-api-key') || String(env.KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY || '').trim()
  ).slice(0, 512);
  if (requiresOpenAiKey && !openAiApiKey) {
    return jsonResponse({ ok: false, error: 'Missing OpenAI API key for chat proxy upstream' }, 500, origin);
  }

  if (method === 'POST') {
    const contentType = readHeader(request.headers, 'content-type').toLowerCase();
    if (!contentType.includes('application/json')) {
      return jsonResponse({ ok: false, error: 'Chat proxy expects application/json payloads' }, 415, origin);
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
    return jsonResponse({ ok: false, error: message || 'Failed to reach chat upstream' }, aborted ? 504 : 502, origin);
  } finally {
    clearTimeout(timeoutId);
  }
}
