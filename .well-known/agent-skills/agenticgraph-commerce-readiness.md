# AgenticGraph Commerce Readiness Skill

Use this skill when: Inspect Commerce, payment worker, x402, ACP, UCP, MPP, and readiness metadata without bypassing the shared payment SSOT.

## Contract

- Vdeoxpln id: `agenticgraph-commerce-readiness`
- Contract version: `agenticgraph-vdeoxpln/v0.1`
- Semantic key: `kgvx_6995db6e`
- Scope: `read-only-published-and-browser-local`
- Mutation boundary: `read-only`

## Triggers

- acp
- commerce
- mpp
- payment
- readiness
- stripe
- ucp
- x402

## Inputs

- agent-ready metadata
- browser readiness snapshot
- commerce route health

## Outputs

- agent-ready commerce metadata
- commerce readiness report
- payment route summary

## Tools

Published tools:
- inspect_agent_surface

Browser-local tools:
- inspect_local_mainpanel_state
- inspect_local_settings_chat_readiness

Local MCP tools:
- agenticgraph.vdeoxpln.list

## Workflow

- Inspect published commerce discovery metadata.
- Read browser-local readiness snapshots when available.
- Report payment capability boundaries without initiating checkout.

## Source Owners

- canvas/src/features/agent-ready/browserLocalSurfaceSnapshots.ts
- canvas/src/features/panels/views/CommerceHubView.tsx
- cloudflare/pages/agenticgraph-agent-ready-commerce.mjs
- cloudflare/workers/agenticgraph-payment/agenticCommerce.ts
- grph-shared/src/payments/agenticCommerceSsot.ts

## Artifact Policy

- Persistence: `inspection-only`
- Graph materialization: `none`
- Semantic-key inputs:
- commerceSemanticKey
- routeHealth
- toolContract

## AI Policy

- Mode: `none`
- Max attempts: `0`
- Token budget: `0`
- Fallback: Return route or metadata errors directly.

## Validation

- agent-ready:check
- mainPanelCommerce
- vdeoxpln:check

## Guardrails

- Keep behavior source-owned in the listed AgenticGraph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
