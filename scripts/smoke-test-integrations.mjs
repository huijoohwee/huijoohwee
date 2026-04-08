import assert from 'node:assert/strict';

import { onRequest as deerflowOnRequest } from '../functions/api/deerflow/[[path]].js';
import { onRequest as mirofishOnRequest } from '../functions/api/mirofish/[[path]].js';
import { onRequest as chatProxyOnRequest } from '../functions/__chat_proxy/[[path]].js';

function makeContext(request, env) {
  return { request, env };
}

async function run() {
  const originalFetch = globalThis.fetch;
  try {
    let lastFetchUrl = '';
    globalThis.fetch = async (url) => {
      lastFetchUrl = String(url);
      return new Response('ok', { status: 200, headers: { 'content-type': 'text/plain' } });
    };

    {
      const req = new Request('https://example.com/api/deerflow/health?x=1', { method: 'GET' });
      const env = {
        KNOWGRPH_DEERFLOW_UPSTREAM: 'https://up.example.com',
        KNOWGRPH_INTEGRATION_ALLOWED_HOSTS: 'up.example.com',
      };
      const res = await deerflowOnRequest(makeContext(req, env));
      assert.equal(res.status, 200);
      assert.equal(lastFetchUrl, 'https://up.example.com/health?x=1');
    }

    {
      const req = new Request('https://example.com/api/mirofish/simulations/sim_123/start?platform=parallel&force=true', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: '{}',
      });
      const env = {
        KNOWGRPH_DEERFLOW_UPSTREAM: 'https://up.example.com',
        KNOWGRPH_INTEGRATION_ALLOWED_HOSTS: 'up.example.com',
      };
      const res = await mirofishOnRequest(makeContext(req, env));
      assert.equal(res.status, 200);
      assert.equal(
        lastFetchUrl,
        'https://up.example.com/api/mirofish/simulations/sim_123/start?platform=parallel&force=true',
      );
    }

    {
      const req = new Request('https://example.com/__chat_proxy/v1/chat/completions', { method: 'PUT' });
      const env = {};
      const res = await chatProxyOnRequest(makeContext(req, env));
      assert.equal(res.status, 405);
      const txt = await res.text();
      assert.match(txt, /Unsupported method/);
    }

    {
      const req = new Request('https://example.com/__chat_proxy/v1/chat/completions', { method: 'GET' });
      const env = {
        KNOWGRPH_CHAT_PROXY_DEERFLOW_UPSTREAM: 'not-a-url',
      };
      const res = await chatProxyOnRequest(makeContext(req, env));
      assert.equal(res.status, 500);
      const payload = JSON.parse(await res.text());
      assert.equal(payload.ok, false);
    }
  } finally {
    globalThis.fetch = originalFetch;
  }
}

run()
  .then(() => {
    process.stdout.write('smoke ok\n');
  })
  .catch((error) => {
    process.stderr.write(`${error?.stack || error}\n`);
    process.exitCode = 1;
  });

