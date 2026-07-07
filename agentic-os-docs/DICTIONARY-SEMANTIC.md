---
title: "Agentic OS Semantic Dictionary"
graphId: "md:agentic-os-dictionary-semantic"
doc_type: "Invocation Dictionary"
date: "2026-07-07"
lang: "en-US"
schema: "agentic-os-dictionary-semantic/v1"
frontmatter_contract: "required"
status: "spec-complete"
prefix: "#"
prefix_role: "semantic filter or topic route"
source_docs:
  - "MEMORY.md"
  - "AGENTS.md"
  - "PRD-TAD.md"
  - "RUNTIME-READINESS.md"
  - "HARNESS-CONTRACTS.md"
publish_policy: "Dev-only until explicit operator approval"
runtime_claim: "dictionary content for shared hash invocation utilities; no separate semantic registry"
dictionary_entries:
  - "#frontmatter"
  - "#harness"
  - "#token-economics"
  - "#tco"
  - "#vcc"
  - "#no-hardcode"
  - "#foss"
  - "#ttv"
  - "#runtime-ready"
  - "#dev-only"
  - "#mcp"
  - "#canvas"
  - "#cost"
  - "#approval-gate"
  - "#no-legacy"
---

# Semantic Dictionary

This file defines `#` semantic-route content for Agentic Canvas OS docs. Tags classify intent, risk, and proof requirements. They do not create duplicate stores, stale aliases, or model prompts by themselves.

## Contract

| Rule | Requirement |
|---|---|
| Route owner | Existing shared `#` utilities own tag detection and routing. |
| Dictionary role | This file names semantic meaning, match criteria, and required proof. |
| Runtime status | Spec-complete until a source-backed runtime check proves the claim. |
| Cost policy | Semantic filtering is zero-spend unless an approved harness explicitly runs. |
| Drift policy | Conflicting tag usage is neutralized at the source document or shared owner. |

## Tags

| Tag | Meaning | Match when | Required proof |
|---|---|---|---|
| `#frontmatter` | YAML frontmatter identity, routing, render flags, and gates. | A document or source needs parse-first SSOT behavior. | Frontmatter parse succeeds without repair-only fallback. |
| `#harness` | Typed AI or tool execution contract. | A capability invokes a model, tool, workflow, or bounded agent. | Input schema, output schema, fallback, cost log, and bounds are present. |
| `#token-economics` | Prompt, completion, cache, latency, and spend performance. | A workflow can spend tokens or repeat calls. | Cost fields include model, token counts, cache hits, and estimated cost. |
| `#tco` | Total cost of ownership and deployment-model comparison. | A dependency, provider, cloud service, or new runtime path is proposed. | FOSS or existing-owner alternative and 12-month cost assumption are named. |
| `#vcc` | Verifiable completion conditions. | A claim needs measurable done criteria. | Given-When-Then and VCC text name observable output and a bounded check. |
| `#no-hardcode` | Hardcoded URLs, credentials, provider IDs, generated assets, or fixtures. | A source risks stale or operator-specific data. | Embedded artifact is removed or replaced with neutral source-owned reference. |
| `#foss` | Open-source, local, zero-egress, or vendor-neutral alternative. | A dependency or hosted service is under consideration. | Alternative path is named before paid or proprietary adoption. |
| `#ttv` | Time to value for min-viable-max-value scope. | Scope needs prioritization or a feature could become broad. | Must/Should/Could/Won't or equivalent ROI cut is present. |
| `#runtime-ready` | Claim can be proven from surfaced runtime output. | A spec-complete artifact is being promoted. | Parse, route, schema, cost, bound, approval, and focused validation proof are surfaced. |
| `#dev-only` | Local development boundary. | Work must stop before Prod mirror or Cloudflare. | Status shows no Prod mirror mutation and no Cloudflare deploy command. |
| `#mcp` | MCP discovery, gateway federation, or tool contract. | A capability is exposed to local, Pages, browser, or control-plane agents. | Tool IDs dedupe and discovery reports zero model spend. |
| `#canvas` | Source-backed Canvas projection. | Runtime state must render as graph, table, KGC, or Storyboard surface. | Existing Canvas owners render without dashboard-only storage. |
| `#cost` | Cost log and budget accounting. | A path needs budget observability but not full TCO analysis. | Cost log validates and model-free views report exact zero. |
| `#approval-gate` | Human gate for paid, mutating, payment, browser-auth, or deploy action. | A run can spend, mutate, authenticate, pay, or deploy. | Missing approval blocks before spend or mutation. |
| `#no-legacy` | Remove stale aliases, remaps, duplicate owners, and compatibility paths. | A source contains old names, shims, or downstream patches. | Stale path is removed at source; no new alias is added. |

## Semantic Shape

```yaml
semantic:
  token: "#runtime-ready"
  role: "semantic filter"
  applies_to:
    - "readiness claims"
    - "runtime proof"
  requires:
    - "@runtime-proof"
    - "@dev-only"
  rejects:
    - "prose-only completion"
    - "deploy claim without approval"
```

## Composition Rules

| Pattern | Meaning |
|---|---|
| `/runtime-ready.check #harness #vcc @local-harness` | Prove an AI-capable contract with local checks. |
| `/deploy.guard #dev-only #approval-gate @operator` | Confirm deploy boundary and require explicit approval for release. |
| `/source.normalize #frontmatter #no-hardcode @source.frontmatter` | Fix source-owned identity or hardcoded data upstream. |
| `/mcp.capabilities #mcp #cost @mcp-gateway` | Discover tools with zero-spend cost reporting. |

## VCCs

| VCC | Check |
|---|---|
| Dictionary parses | Frontmatter parses as YAML and `dictionary_entries` lists hash-prefixed tokens. |
| Tags are MECE enough for routing | Each tag row has distinct meaning, match criteria, and proof. |
| No semantic backfill | Tags do not mark runtime-ready without runtime proof. |
| No duplicate registry | Body states shared utilities own routing and no new semantic registry is created. |
