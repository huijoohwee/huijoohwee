# DeerFlow + MiroFish (Cloudflare Pages, free tier)

## SSOT integration surface

- Chat completions proxy: `/__chat_proxy/*`
- DeerFlow generic proxy: `/api/deerflow/*`
- MiroFish proxy (via DeerFlow upstream): `/api/mirofish/*`

All three routes share the same upstream selection + host allowlist logic via [ _integrationHub.js ](file:///Users/huijoohwee/Documents/GitHub/huijoohwee/functions/api/_integrationHub.js).

## Environment variables

- `KNOWGRPH_DEERFLOW_UPSTREAM` (preferred): DeerFlow gateway base URL
- `KNOWGRPH_CHAT_PROXY_DEERFLOW_UPSTREAM` (fallback): DeerFlow gateway base URL
- `KNOWGRPH_CHAT_PROXY_UPSTREAM` (fallback): base URL used if DeerFlow upstream not set
- `KNOWGRPH_CHAT_PROXY_ALLOWED_HOSTS` (or `KNOWGRPH_INTEGRATION_ALLOWED_HOSTS`): comma-separated allowlist of upstream hostnames
- `KNOWGRPH_CHAT_GATEWAY_MODE=deerflow-only` (optional): force all `/__chat_proxy/*` traffic to DeerFlow

Timeouts (all optional):

- `KNOWGRPH_CHAT_PROXY_TIMEOUT_MS`
- `KNOWGRPH_DEERFLOW_TIMEOUT_MS`
- `KNOWGRPH_MIROFISH_TIMEOUT_MS`

## Why this shape (TCO)

- One upstream knob (DeerFlow base) drives both chat + MiroFish.
- Same-origin endpoints avoid browser CORS and keep client code minimal.
- Strict upstream host allowlist + HTTPS enforcement prevents accidental open proxy behavior.

## Quick smoke test

- Open `/knowgrph/integrations.html`
- Click “DeerFlow: /health”
- Enter a `sim_xxx` and start/stream/stop via MiroFish buttons

