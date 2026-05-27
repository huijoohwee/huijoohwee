import assert from 'node:assert/strict';

import { onRequest as chatProxyOnRequest } from '../functions/__chat_proxy/[[path]].js';

function makeContext(request, env) {
  return { request, env };
}

async function run() {
  const reqMethod = new Request('https://example.com/__chat_proxy/v1/chat/completions', { method: 'PUT' });
  const resMethod = await chatProxyOnRequest(makeContext(reqMethod, {}));
  assert.equal(resMethod.status, 405);
  const txt = await resMethod.text();
  assert.match(txt, /Unsupported method/);

  const reqInvalid = new Request('https://example.com/__chat_proxy/v1/chat/completions', { method: 'GET' });
  const envInvalid = {
    KNOWGRPH_CHAT_PROXY_UPSTREAM: 'not-a-url',
  };
  const resInvalid = await chatProxyOnRequest(makeContext(reqInvalid, envInvalid));
  assert.equal(resInvalid.status, 500);
  const payload = JSON.parse(await resInvalid.text());
  assert.equal(payload.ok, false);

  const requestBody = JSON.stringify({
    model: 'agnes-2.0-flash',
    messages: [{ role: 'user', content: 'hello' }],
    stream: true,
  });
  const reqAgnesMissingKey = new Request('https://example.com/__chat_proxy/v1/chat/completions', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-kg-chat-provider': 'agnes-ai',
    },
    body: requestBody,
  });
  const resAgnesMissingKey = await chatProxyOnRequest(makeContext(reqAgnesMissingKey, {}));
  assert.equal(resAgnesMissingKey.status, 401);
  const agnesPayload = JSON.parse(await resAgnesMissingKey.text());
  assert.equal(agnesPayload.ok, false);
  assert.match(agnesPayload.error, /Agnes API key/);

  const reqMiroMindMissingKey = new Request('https://example.com/__chat_proxy/v1/chat/completions', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-kg-chat-provider': 'miromind',
    },
    body: JSON.stringify({
      model: 'mirothinker-1-7-deepresearch-mini',
      messages: [{ role: 'user', content: 'hello' }],
      stream: true,
    }),
  });
  const resMiroMindMissingKey = await chatProxyOnRequest(makeContext(reqMiroMindMissingKey, {}));
  assert.equal(resMiroMindMissingKey.status, 401);
  const miromindPayload = JSON.parse(await resMiroMindMissingKey.text());
  assert.equal(miromindPayload.ok, false);
  assert.match(miromindPayload.error, /MiroMind API key/);
}

run()
  .then(() => {
    process.stdout.write('smoke ok\n');
  })
  .catch((error) => {
    process.stderr.write(`${error?.stack || error}\n`);
    process.exitCode = 1;
  });
