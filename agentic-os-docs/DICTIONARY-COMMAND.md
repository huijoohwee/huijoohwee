---
title: "Agentic OS Command Dictionary"
graphId: "md:agentic-os-dictionary-command"
doc_type: "Invocation Dictionary"
date: "2026-07-07"
lang: "en-US"
schema: "agentic-os-dictionary-command/v1"
frontmatter_contract: "required"
status: "spec-complete"
prefix: "/"
prefix_role: "command route"
source_docs:
  - "MEMORY.md"
  - "AGENTS.md"
  - "HARNESS-CONTRACTS.md"
  - "MCP-GATEWAY.md"
  - "VALIDATION-RUNBOOK.md"
publish_policy: "Dev-only until explicit operator approval"
runtime_claim: "dictionary content for shared slash invocation utilities; no separate command runtime"
dictionary_entries:
  - "/memory.seed"
  - "/prd-tad.create"
  - "/runtime-ready.check"
  - "/deploy.guard"
  - "/harness.define"
  - "/mcp.capabilities"
  - "/cost.audit"
  - "/canvas.project"
  - "/validation.run"
  - "/source.normalize"
---

# Command Dictionary

This file defines `/` command-route content for Agentic Canvas OS docs. It is a dictionary for shared invocation utilities, not a new command runner, parser, provider panel, or compatibility registry.

## Contract

| Rule | Requirement |
|---|---|
| Route owner | Existing shared `/` utilities own command detection and replacement. |
| Dictionary role | This file names command intent, required context, and proof expectations. |
| Runtime status | Spec-complete until a shared runtime owner proves execution. |
| Spend policy | Malformed input, missing approval, or missing binding fails before paid calls. |
| Deploy policy | Prod mirror and Cloudflare commands remain gated until explicit operator approval. |

## Commands

| Command | Intent | Required bindings | Semantic filters | Completion signal |
|---|---|---|---|---|
| `/memory.seed` | Create or update a neutral memory block from source docs. | `@source.frontmatter`, `@source.body`, `@operator` | `#frontmatter`, `#no-hardcode`, `#vcc` | Parsed frontmatter and authored body memory block are present locally. |
| `/prd-tad.create` | Produce or refresh a combined PRD/TAD from validated problem and architecture context. | `@operator`, `@source.body` | `#tco`, `#ttv`, `#vcc`, `#foss` | PRD/TAD includes personas, MoSCoW, topology, harness, ADR, and VCC sections. |
| `/runtime-ready.check` | Verify whether a spec-complete artifact is runnable. | `@local-harness`, `@runtime-proof` | `#harness`, `#vcc`, `#runtime-ready` | Focused checks exit 0 and cost/deploy boundaries are surfaced. |
| `/deploy.guard` | Stop accidental Prod mirror or Cloudflare mutation. | `@operator`, `@dev-only` | `#no-deploy`, `#approval-gate` | Output states Dev-only status and no Prod/Cloudflare mutation occurred. |
| `/harness.define` | Define typed input, output, fallback, cost, and bounds for an AI-capable component. | `@local-harness`, `@cost-log` | `#harness`, `#token-economics`, `#vcc` | Harness contract includes schemas, cost fields, fallback paths, and max iteration. |
| `/mcp.capabilities` | Discover tool capabilities through the existing MCP gateway contract. | `@mcp-gateway`, `@local-harness` | `#mcp`, `#runtime-ready`, `#cost` | Capability list is deduplicated and discovery reports zero model spend. |
| `/cost.audit` | Inspect token, cache, and TCO impact before running a model-bearing path. | `@cost-log`, `@operator` | `#token-economics`, `#tco`, `#foss` | Cost log fields are present and budget breach blocks before spend. |
| `/canvas.project` | Project source-backed runtime state into existing Canvas owners. | `@source.frontmatter`, `@source.body`, `@canvas` | `#canvas`, `#frontmatter`, `#runtime-ready` | Source-backed graph, table, or Storyboard surface renders without dashboard-only storage. |
| `/validation.run` | Run focused checks for the touched docs or runtime owner. | `@runtime-proof`, `@dev-only` | `#vcc`, `#no-hardcode`, `#runtime-ready` | Final response includes command, result, skipped checks, and deploy-boundary statement. |
| `/source.normalize` | Neutralize conflicting or stale source content at the upstream document or shared owner. | `@source.frontmatter`, `@source.body` | `#no-hardcode`, `#frontmatter`, `#no-legacy` | Stale, duplicate, or hardcoded content is removed at source without downstream aliasing. |

## Command Shape

```yaml
command:
  token: "/runtime-ready.check"
  role: "command route"
  input:
    source_ref: "@source.frontmatter"
    semantic_filters: ["#harness", "#vcc"]
  output:
    status: "runtime-ready | spec-complete | gated | blocked"
    proof_ref: "@runtime-proof"
  bounds:
    max_iterations: 1
    fail_before_spend: true
```

## Resolution Rules

| Situation | Resolution |
|---|---|
| Command is known and bindings are present | Route through the existing shared utility or runtime owner. |
| Command is known but binding is missing | Return a structured missing-binding response. |
| Command requires paid, mutating, payment, Prod, or Cloudflare action | Require `@operator` approval and fail closed without approval. |
| Command conflicts with source frontmatter | Fix the source or shared owner; do not add a downstream alias. |
| Command is unknown | Reject with a typed unsupported-command result and suggest nearest dictionary entries. |

## VCCs

| VCC | Check |
|---|---|
| Dictionary parses | Frontmatter parses as YAML and `dictionary_entries` lists slash-prefixed tokens. |
| No duplicate runtime | No body section claims a new parser, command server, or provider panel. |
| Fail-closed command path | Every command row names required bindings and a measurable completion signal. |
| Deploy boundary preserved | `/deploy.guard` remains Dev-only unless explicit operator approval is present. |
