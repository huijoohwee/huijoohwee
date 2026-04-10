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
}

run()
  .then(() => {
    process.stdout.write('smoke ok\n');
  })
  .catch((error) => {
    process.stderr.write(`${error?.stack || error}\n`);
    process.exitCode = 1;
  });
