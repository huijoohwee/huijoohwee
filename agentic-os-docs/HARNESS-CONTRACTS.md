---
title: "Knowgrph Agentic Canvas OS Harness Contracts"
graphId: "md:knowgrph-agentic-canvas-os-harness-contracts"
doc_type: "Harness Contract Catalog"
date: "2026-07-07"
lang: "en-US"
schema: "agentic-canvas-os-harness-contracts/v1"
frontmatter_contract: "required"
status: "spec-complete"
publish_policy: "Dev-only until explicit operator approval"
---

# Harness Contracts

Every AI-capable Agentic Canvas OS component must be a harness: typed input, typed output, bounded execution, cost logging, and explicit fallback.

## Universal Harness Shape

```yaml
harness:
  id: "[neutral-id]"
  owner: "[shared-runtime-owner]"
  mode: "local-dry-run-first"
  dispatcher:
    input_schema: "[typed request]"
    output_schema: "[routed request or typed error]"
  executor:
    input_schema: "[typed model/tool request]"
    output_schema: "[typed model/tool result]"
    approval_required_for: ["paid-call", "mutation", "payment", "deploy"]
  observer:
    cost_log_fields: ["model", "prompt_tokens", "completion_tokens", "cache_hits", "estimated_cost_usd"]
    state_fields: ["run_id", "stage", "status", "started_at", "updated_at"]
  consumer:
    output_target: "[source document, manifest, graph, table, media packet, or local packet]"
  fallback:
    schema_error: "reject before token spend"
    approval_missing: "blocked with zero paid calls"
    provider_failure: "typed degraded response"
    budget_breach: "blocked with cost summary"
  bounds:
    max_iterations: 1
    circuit_breaker: "schema error, approval denial, budget breach, or verification failure"
```

## Harness Catalog

| Harness | Purpose | Input | Output | Approval boundary |
|---|---|---|---|---|
| OS Status | Read process, capability, cost, gate, and breaker views | `{ view, filters }` | Typed read view with zero cost | None; read-only |
| Capability Discovery | Deduplicate local, browser, Pages, and control-plane catalogs | `{ includeRemote, trustBoundary }` | `Capability_Entry[]`, `sourceCatalogs[]`, `unreachableCatalogs[]` | None; discovery must be zero-token |
| Video Remix Director | Research, storyboard, render, publish, checkout workflow | `{ referenceUrl, brief, budgetUsd, approvals[] }` | Run manifest, evidence pack, storyboard, asset or blocked state | Paid model, render, payment, deploy |
| Canvas Dashboard | Project source-backed run state into Canvas | Markdown/frontmatter + typed manifest | KGC/frontmatter graph and Storyboard cards | Mutation only when writing source docs |
| Memory Layer | Add, search, and assemble scoped prompt memory | `{ scope, query, topK }` | Ranked memories or empty result | Writes require explicit scope |
| Showrunner | Run bounded creative multi-agent turns | Creative brief + role turn | Creative state, script, choice graph | Stage approval and paid calls |
| SuperAgent | Execute bounded code/research tasks | Task spec + constraints | Trace, artifacts, verification status | File writes, browser auth, paid calls |

## Cost Log Contract

Every model-bearing harness emits:

| Field | Rule |
|---|---|
| `model` | Actual model id or `local-dry-run`. |
| `prompt_tokens` | Non-negative integer; zero for model-free views. |
| `completion_tokens` | Non-negative integer; zero for model-free views. |
| `cache_hits` | Non-negative integer or boolean-derived count. |
| `estimated_cost_usd` | Decimal estimate; exact zero for read-only model-free views. |

Do not clamp unexpected non-zero cost to zero. Treat it as a defect.

## Approval Gates

| Gate | Required for | Fail-closed behavior |
|---|---|---|
| `paid-model-call` | Model/provider spend | Return blocked or approval-required with zero paid calls. |
| `render-action` | Image/video generation or media mutation | Preserve prior state and emit pending gate. |
| `payment-action` | Checkout, settlement, payout, or commerce state | No session or payout is created. |
| `cloud-deploy` | Prod mirror or Cloudflare deploy | Do not run deploy command; surface gated status. |
| `consumer-repo-write` | Writing to sibling repo or generated source doc | Keep dry-run manifest only. |
| `authenticated-browser` | Browser profile, login-gated page, or sensitive session | Require operator-owned browser action; store no credentials. |

## VCC Templates

| Harness class | VCC |
|---|---|
| Read-only discovery | Verify response has typed entries, zero cost, and no state-source diff. |
| Local dry-run | Verify command exits 0, manifest status is complete or blocked, and paid call count is 0. |
| Approval-gated action | Verify missing approval blocks before spend; valid approval advances only the approved stage. |
| Canvas projection | Verify frontmatter parses, graph nodes materialize, and no dashboard-only renderer is introduced. |
| Cost aggregation | Verify cost logs validate and budget meters match ledger events within stated tolerance. |

## Forbidden Harness States

- Running without `max_iterations`.
- Retrying without circuit breaker.
- Calling a model before input schema validation.
- Returning raw provider errors without typed fallback.
- Writing browser secrets or provider keys into docs, tests, client state, or logs.
- Marking a live provider result complete without returned evidence.
