---
title: "Knowgrph MCP Agentic Canvas OS Demo - Reference Video To Sold Remix"
graphId: "md:knowgrph-mcp-agentic-canvas-os-demo"
doc_type: "MCP Agentic Canvas OS Demo"
date: "2026-06-10"
lang: "en-US"
schema: "kgc-computing-flow/v1"
kgCanvasSurfaceMode: "2d"
kgCanvasRenderMode: "2d"
kgCanvas2dRenderer: "flowEditor"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: true
kgDocumentStructureBaselineLock: false
kgWorkflowManagerModeEnabled: true
demos: "knowgrph-mcp-agentic-canvas-os-prd-tad"
source_prd_tad: "huijoohwee.github.io/docs/documents/knowgrph-mcp-agentic-canvas-os-prd-tad.md"
control_plane_endpoint: "airvio.co/knowgrph/mcp"
mcp_tool: "knowgrph.video_remix.run"
socket_types:
  idea_signal: {color: "#14b8a6", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [idea_signal]}
  evidence_signal: {color: "#22c55e", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [evidence_signal]}
  approval_signal: {color: "#f59e0b", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [approval_signal]}
  artifact_signal: {color: "#8b5cf6", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [artifact_signal]}
mcp_agentic_canvas_os_demo:
  schema_version: "mcp-agentic-canvas-os-demo/v1"
  run_id: {key: run_id, type: string, value: "kg_acos_reference_to_sold_remix_demo"}
  active_graph_mutated: {key: active_graph_mutated, type: boolean, value: false}
  mode: {key: mode, type: string, value: "dry-run-first; live behind approval tokens"}
  source_truth: {key: source_truth, type: string, value: "parsed frontmatter + typed Run_Manifest; never file-path assumptions"}
  mutation_policy: {key: mutation_policy, type: string, value: "no paid/external action in live mode without a verified per-gate Approval_Token; default dry-run"}
  tools: {key: tools, type: array, value: ["knowgrph.video_remix.run","knowgrph.video_remix.research","knowgrph.video_remix.storyboard","knowgrph.video_remix.render","knowgrph.video_remix.publish","knowgrph.video_remix.checkout"]}
  approval_gates: {key: approval_gates, type: array, value: ["paid-model-call","render-action","payment-action","cloud-deploy","consumer-repo-write","authenticated-browser"]}
  input_fields: {key: input_fields, type: array, value: ["referenceUrl","brief","budgetUsd","mode","approvals"]}
  output_fields: {key: output_fields, type: array, value: ["state","stages","approvalGates","budgetMeters","evidencePack","storyboard","render","commerce","demoPack"]}
flow_diagrams:
  key: flow_diagrams
  type: object
  value:
    reference_to_remix_gitgraph:
      key: reference_to_remix_gitgraph
      type: mermaid_gitgraph
      value: |-
        gitGraph
          commit id: "intake" tag: "url+brief+budget"
          branch research
          checkout research
          commit id: "exa_evidence"
          commit id: "source_cards"
          checkout main
          commit id: "storyboard" tag: "kgc-flow"
          commit id: "render_gate" tag: "approve"
          branch render
          checkout render
          commit id: "r2_assets"
          commit id: "ledger_events"
          checkout main
          commit id: "payment_gate" tag: "approve"
          commit id: "stripe_checkout" tag: "sold"
          commit id: "demo_pack" tag: "7/7"
    agentic_canvas_architecture:
      key: agentic_canvas_architecture
      type: mermaid_architecture
      value: |-
        architecture-beta
          group user(cloud)[User surface]
          group vercel(cloud)[Vercel]
          group aws(cloud)[AWS]
          group cloudflare(cloud)[Cloudflare]
          group providers(cloud)[Live action providers]
          service web(internet)[Vercel UI] in vercel
          service api(server)[AWS Agent API] in aws
          service mcp(server)[McpAgent Worker] in cloudflare
          service manifest(database)[Run Manifest DO] in cloudflare
          service exa(internet)[Exa] in providers
          service byteplus(server)[BytePlus] in providers
          service stripe(database)[Stripe] in providers
          web:R --> L:api
          api:R --> L:mcp
          mcp:B --> T:manifest
          mcp:R --> L:exa
          mcp:R --> L:byteplus
          mcp:R --> L:stripe
    agent_run_event_model:
      key: agent_run_event_model
      type: mermaid_eventmodeling
      value: |-
        eventmodeling
        tf 01 ui UserBrief
        tf 02 cmd StartVideoRemixRun
        tf 03 evt RunManifestCreated
        tf 04 pcr DirectorAgent
        tf 05 cmd RequestEvidencePack
        tf 06 evt EvidencePackReady
        tf 07 cmd RequestApprovalToken
        tf 08 evt ApprovalGranted
        tf 09 cmd RenderShots
        tf 10 evt AssetsRendered
        tf 11 cmd CreateCheckout
        tf 12 evt PaymentSessionCreated
        tf 13 ui DemoPackReady
modelSelection:
  selectionModel: "projected-data"            # renderers project these typed option groups as dropdowns; they do not branch on them
  scope: "local-overrides-global"             # a node-local options.model overrides the matching group's global default
  groups:
    text:
      global: "agnes-2.0-flash"               # group-global default; override per node via options.model
      options:
        - "agnes-2.0-flash"
        - "seed-2-0-mini-260215"
        - "seed-2-0-lite-260228"
        - "seed-2-0-pro-260328"
        - "seed-1-8-251228"
    image:
      global: "seedream-4-0-250828"
      options:
        - "seedream-4-0-250828"
        - "seedream-4-5-251128"
        - "seedream-5-0-260128"
    video:
      global: "seedance-1-0-pro-fast-251015"
      options:
        - "seedance-1-0-pro-fast-251015"
        - "seedance-1-5-pro-251215"
        - "dreamina-seedance-2-0-fast-260128"
        - "dreamina-seedance-2-0-260128"
---

# Knowgrph MCP Agentic Canvas OS — Demo

**Demos:** [`knowgrph-mcp-agentic-canvas-os-prd-tad.md`](knowgrph-mcp-agentic-canvas-os-prd-tad.md)

One autonomous agent takes a **reference video URL + a creative brief + a budget
cap** and drives the full loop — **research → storyboard → render → publish →
checkout** — ending in a **sold, R2-stored remix**. Every model call routes
through Cloudflare AI Gateway; every spend boundary is gated by a human
approval token. This page is the operator + judge walkthrough of that flow.

## Current status

- **Truthful state today:** the control plane, local contracts, and thin AWS /
  AgentCore / web tiers are already strong enough to support a high-ROI live
  path, but the immediate product-ready seam is the in-session frontend flow,
  not yet the full `POST /run` + `/approvals` + `/runs/{id}` browser story.
- **Immediate live-product-ready target:** frontend mints its own
  `Auth_Token`, submits `POST /run`, then re-submits the same run with updated
  `approvals[]` after each user decision.
- **Sample-native target next:** the AgentCore wrapper is then aligned to the
  current `agentcore-cli` project conventions (`dev`, `deploy`, `invoke`,
  generated `agentcore/` config layout). That migration is additive and follows
  the first live product proof.

## At a glance

| | |
|---|---|
| **Hero tool** | `knowgrph.video_remix.run` (+ 5 stage tools) over MCP Streamable HTTP |
| **Control plane** | Cloudflare Workers `McpAgent` (Agents SDK) at `airvio.co/knowgrph/mcp` |
| **Product tiers** | AWS Agent-API (API Gateway + Lambda + S3) · Vercel frontend — **hold no model keys** |
| **Model routing** | All calls via Cloudflare AI Gateway (cache, token count, fallback, unified billing) |
| **Providers** | Exa (research) · BytePlus/ModelArk (reasoning + media) · Stripe (checkout/payout) |
| **Safety** | Dry-run by default; 6 approval gates; single-use 15-min Approval_Tokens; budget meters |
| **Default behavior** | Live mode **without** approvals halts at the first spend gate with **zero** paid actions |

## The hero flow

```mermaid
flowchart LR
  url[Reference URL + brief + budget] --> ingest[AWS Agent-API: auth + validate]
  ingest --> research[Research · Exa via AI Gateway]
  research --> evidence[(Evidence_Pack: 3..50 cited sources)]
  evidence --> story[Storyboard · BytePlus via AI Gateway]
  story --> kgc[(Kgc_Document: kgc-computing-flow/v1, 1 node per shot)]
  kgc --> gate{Approval_Gate verified?}
  gate -->|"no token"| blocked[Dry-run plan artifact · state: blocked · zero spend]
  gate -->|"verified token"| render[Render · BytePlus/Strytree queue]
  render --> r2[(R2 asset + Credit_Ledger event)]
  r2 --> sell[Stripe checkout + gated payout]
  sell --> manifest[(Run_Manifest + 7-section Demo_Pack)]
  manifest --> ui[Vercel UI: asset + receipt + manifest]
```

```mermaid
sequenceDiagram
  actor User
  participant Web as Vercel Web
  participant API as AWS Agent-API (auth)
  participant Mcp as McpAgent (Cloudflare)
  participant Dir as Director Workflow
  participant Gate as HITL Gate
  participant H as Stage Harness (Exa/BytePlus/Stripe via AI Gateway)
  User->>Web: referenceUrl + brief + budget
  Web->>API: POST /run (Auth_Token)
  API->>API: verify Auth_Token -> Caller_Identity (401 if invalid)
  API->>Mcp: forward knowgrph.video_remix.run (Streamable HTTP)
  Mcp->>Dir: start run (mode=live)
  loop each stage research->storyboard->render->publish->checkout
    Dir->>Gate: spend boundary? request Approval_Gate
    alt no verified, unexpired, unconsumed token
      Gate-->>Dir: approval_required
      Dir->>Dir: resolve stage to dry-run plan artifact (zero spend)
    else verified token
      Gate-->>Dir: approved (token marked consumed, single-use)
      Dir->>H: execute stage
      H-->>Dir: result or typed degraded error
    end
    Dir->>Mcp: persist Run_Manifest (<=2s)
  end
  Dir-->>Mcp: terminal Run_Manifest + Demo_Pack
  Mcp-->>API: result
  API-->>Web: Run_Manifest
```

## Live demo script (operator)

> Endpoints are environment-driven (no hardcoded URLs). The deploy is
> operator-gated behind the `cloud-deploy` Approval_Token — see the
> [deploy runbook](../../knowgrph/docs/knowgrph-acos-deploy-runbook.md).
> `<AGENT_API>` is the deployed AWS Agent-API base URL.

### 0. Open a session

```
POST <AGENT_API>/auth/session            ->  { token }   # HS256 JWT, server-side secret only
```

### 1. Submit the run — and prove it fails safe (AC-1)

```
POST <AGENT_API>/run
Authorization: Bearer <token>
{ "referenceUrl": "https://example.com/reference-clip",
  "brief": "Turn this product teaser into a 30s vertical promo.",
  "budgetUsd": 25.00,
  "approvals": [] }
```

**Expected (no approvals):** `state: "blocked"`, `approvalGates.length >= 5`,
`budgetMeters.estimatedCostUsd == 0`, and **zero** Stripe/BytePlus/Exa/deploy
calls logged. The agent shows the planned stages + budget upfront and stops at
the first spend boundary. *This is the headline safety demo.*

### 2. Approve gates and run the full loop

Approve each spend gate, then **re-submit the same run with updated
`approvals[]`**. This is the immediate high-ROI product path because the
backend already accepts `approvals[]`; it does **not** require a separate
browser `/approvals` route. The Director now executes:

1. **Research** — Exa via AI Gateway → an Evidence_Pack of 3–50 cited
   Source_Cards (every downstream claim references a `sourceId`; weak signal
   < 3 sources halts before storyboard, never fabricates).
2. **Storyboard** — BytePlus chat via AI Gateway → a `kgc-computing-flow/v1`
   canvas doc with **exactly one node per planned shot** (renderable on the
   knowgrph canvas; reasoning failure falls back to a valid single-node plan).
3. **Render** — dispatch per shot through the BytePlus/Strytree queue → one
   R2 asset reference + one Credit_Ledger event per shot (keyless / over-budget
   routes to a deterministic zero-spend mock provider).
4. **Publish + Checkout** — Stripe checkout session created only when
   `payment-action` is approved; payout settles only after explicit approval.

### 3. Read back the evidence

```
POST /run response          ->  current Run_Manifest rendered in-session (immediate path)
GET <AGENT_API>/health      ->  200 within 5s (open liveness, discloses nothing sensitive)
```

> **Read-back note:** `GET <AGENT_API>/runs/{id}` is now implemented in the AWS
> Agent-API as a durable manifest read-back path when `ARTIFACT_BUCKET` is
> configured and the same browser session owns the run. Treat the remaining gap
> as **deployed proof**, not local implementation: the live environment still
> needs one captured end-to-end run showing persisted read-back from the hosted
> frontend.

### 4. One-command reachability gate (AC-7)

```
AGENT_API_URL=<AGENT_API> MCP_ENDPOINT=https://airvio.co/knowgrph/mcp \
FRONTEND_URL=<vercel-url> npm run runtime:verify
```

Probes all three `/health`/reachability surfaces (5s-bounded) and emits a
sample `demoPack.urls[]`. Also wired as CI: `.github/workflows/runtime-gate.yml`
runs `runtime:test` + `runtime:verify` on a deploy trigger (endpoints from repo
Variables / dispatch inputs — no hardcode).

## Acceptance criteria — live evidence

| AC | What the demo shows | `/goal` condition |
|---|---|---|
| **AC-1** Live run, gated | Step 1: no approvals → halts, zero spend | `state "blocked", approvalGates>=5, estimatedCostUsd==0, no paid call logged` |
| **AC-2** Research sourced | Evidence_Pack with cited sources | `evidencePack.sources>=3 and every claim.sourceCardIds non-empty` |
| **AC-3** Storyboard on canvas | KGC shot-plan doc on the canvas | `parses kgc-computing-flow/v1 and flow.nodes==planned shots` |
| **AC-4** Render reuses pipeline | R2 asset + ledger id per shot | `asset URL under knowgrph media bucket + credit-ledger event id` |
| **AC-5** Sale + payout gated | Stripe session; payout only post-approval | `session id; settle_payout only if payment-action approved` |
| **AC-6** Failure bounded | Injected tool failure → bounded retry / fail closed | `retryCount>=1 then complete or blocked, never exceeding maxIterations` |
| **AC-7** Deployed live | Reachable Vercel + AWS `/health` in the demo pack | `demoPack.urls has a reachable frontend URL + AWS /health 200` |

## Judging-dimension map

| Dimension | Live evidence in this demo |
|---|---|
| Agent Overview | Director + 4 stage harnesses behind one `knowgrph.video_remix.run` tool |
| Autonomy & Decision-Making | Agents SDK `AgentWorkflow` agentic loop; weak-signal halt; budget-cap halt |
| Actions & Tool Use | Exa search, BytePlus reasoning/media, knowgrph canvas, BytePlus render, Stripe checkout — all via Cloudflare AI Gateway |
| Orchestration | Strict stage ordering + fan-out render queue + durable Run_Manifest persistence |
| Human-in-the-Loop | 6 approval gates; single-use 15-min Approval_Tokens; auth never substitutes for approval |
| Failure Handling | Bounded exponential-backoff retry, fail-closed `blocked` with a failure record; degraded provider error |
| Demo & Presentation | 7-section Demo_Pack with reachable URLs, citations, rendered asset, Stripe session |

## Spend isolation & safety (what judges can verify)

- **Stack boundary (R11):** AWS and Vercel hold **no** model provider keys, never
  call paid models directly, and never bypass an approval gate. Enforced by
  static secret-scan smoke tests across all tiers.
- **Auth ≠ approval (R15.9):** a valid Auth_Token gates *access*; it never
  authorizes spend — every paid action still requires a fresh Approval_Token.
- **Token economics:** every model call emits a Cost_Log via AI Gateway; the
  Director aggregates into Budget_Meters; the Credit_Ledger reconciles within
  ±0.01 USD or flags a discrepancy (both records preserved).
- **Fail closed:** un-configured deploys return HTTP 501 rather than making an
  accidental live call; live clients activate only when their credentials are
  present (`KNOWGRPH_LIVE_CLIENTS` / `EXA_API_KEY` / endpoint vars).

## Immediate remediation checklist

- **Docs first:** keep the demo truthful about what is already live, what is
  in-session only, and what is a next seam.
- **Web next:** mint the auth session in-browser, then convert approval clicks
  into re-submitted `approvals[]` on `POST /run`.
- **AWS next:** supply `MCP_ENDPOINT` and CORS-ready response headers from the
  deploy path so the browser can reach the live forwarder directly.
- **AgentCore after live proof:** keep AgentCore as the additive AWS MCP surface,
  then align it with the current sample-native CLI workflow.

## Reproduce locally (network-free, no credentials)

The whole contract is provable offline with deterministic in-memory seams —
zero live/paid calls:

```
npm run runtime:test     # full suite: unit + property-based + smoke, deterministic
```

This exercises the approval-gate invariant, the live-without-approvals halt,
dry-run zero-spend, the Kgc_Document round-trip, ledger/budget reconciliation,
bounded-retry fail-closed, the Demo_Pack assembler, and the Agent-API
auth/authorization logic — all with mocked providers. The same harnesses accept
live drop-in clients (Exa / BytePlus / Strytree / Stripe) when credentials are
wired, with the deterministic mocks as the test default.

## Demo pack (7 sections)

A terminal run assembles one Demo_Pack mapping to the seven judging dimensions,
each section marked `verified` only when its URL/artifact is reachable:

```
Demo_Pack {
  urls: [{ url, kind }]            // >=1 frontend + >=1 Agent_Api endpoint
  sections: [                      // one per dimension, non-empty
    Agent Overview, Autonomy & Decision-Making, Actions & Tool Use,
    Orchestration, Human-in-the-Loop, Failure Handling, Demo & Presentation
  ]
}
```

## Topology note

The connector ships as a **`knowgrph` monorepo** (control plane + AWS/Vercel
product tiers + shared contracts in one repo); `agentic-canvas-os` is a future
split target, not a runtime prerequisite. The stack boundary is enforced by
directory ownership + secret-scan smoke tests, not repo separation. See
[`knowgrph/docs/knowgrph-acos-topology-decision.md`](../../knowgrph/docs/knowgrph-acos-topology-decision.md).
