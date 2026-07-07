---
title: "Agentic OS Binding Dictionary"
graphId: "md:agentic-os-dictionary-binding"
doc_type: "Invocation Dictionary"
date: "2026-07-07"
lang: "en-US"
schema: "agentic-os-dictionary-binding/v1"
frontmatter_contract: "required"
status: "spec-complete"
prefix: "@"
prefix_role: "source, actor, or runtime binding"
source_docs:
  - "MEMORY.md"
  - "AGENTS.md"
  - "PRD-TAD.md"
  - "MCP-GATEWAY.md"
  - "VALIDATION-RUNBOOK.md"
publish_policy: "Dev-only until explicit operator approval"
runtime_claim: "dictionary content for shared binding invocation utilities; no separate binding store"
dictionary_entries:
  - "@operator"
  - "@source.frontmatter"
  - "@source.body"
  - "@local-harness"
  - "@runtime-proof"
  - "@dev-only"
  - "@cost-log"
  - "@mcp-gateway"
  - "@canvas"
  - "@approval-gate"
  - "@prod-mirror"
  - "@cloudflare"
---

# Binding Dictionary

This file defines `@` binding-route content for Agentic Canvas OS docs. Bindings attach commands and semantic filters to an actor, source, runtime surface, proof artifact, or boundary. They are references only; they do not store secrets or authorize deployment.

## Contract

| Rule | Requirement |
|---|---|
| Route owner | Existing shared `@` utilities own binding detection and insertion. |
| Dictionary role | This file names binding meaning, authority, and fail-closed behavior. |
| Runtime status | Spec-complete until a shared runtime owner resolves the binding. |
| Secret policy | Bindings never contain raw credentials, provider keys, browser sessions, or media tokens. |
| Deploy policy | `@prod-mirror` and `@cloudflare` are gated boundaries, not default edit targets. |

## Bindings

| Binding | Meaning | Authority | Boundary |
|---|---|---|---|
| `@operator` | Human approval authority and final release gate. | The user. | Required before paid, mutating, payment, browser-auth, Prod, or Cloudflare actions. |
| `@source.frontmatter` | Parsed YAML frontmatter. | Authored document source. | SSOT for identity, routing, renderer flags, and runtime gates. |
| `@source.body` | Authored Markdown body. | Authored document source. | SSOT for operator workflow, guardrails, and checklist language. |
| `@local-harness` | Dev-local typed harness or dry-run path. | Shared local runtime owner. | Default proof path before paid calls or deploy. |
| `@runtime-proof` | Surfaced validation evidence. | Command output, typed result, parsed field, or focused test. | Must be observable; narrative alone is not proof. |
| `@dev-only` | Local development boundary. | Current Dev worktree. | Confirms work stops before Prod mirror and Cloudflare. |
| `@cost-log` | Token, cache, and estimated cost ledger. | Harness observer or runtime result. | Must report exact zero for model-free views. |
| `@mcp-gateway` | Discovery-first MCP federation surface. | Existing local, Pages, browser, or control-plane MCP owner. | Discovery is zero-token; spend routes through approval gates. |
| `@canvas` | Source-backed Canvas projection. | Existing Source Files, frontmatter, KGC, table, or Storyboard owner. | No dashboard-only graph store or renderer fork. |
| `@approval-gate` | Explicit gate state for spend, mutation, payment, browser auth, or deploy. | Shared gate catalog or harness result. | Missing approval blocks before action. |
| `@prod-mirror` | Prod mirror path for release staging. | Operator-approved release flow only. | Not a default edit target; forbidden without explicit instruction. |
| `@cloudflare` | Cloudflare route or Worker/Pages control plane. | Operator-approved deploy flow only. | Not a completion criterion for docs-only work. |

## Binding Shape

```yaml
binding:
  token: "@local-harness"
  role: "runtime binding"
  authority: "shared local runtime owner"
  allowed_with:
    - "/runtime-ready.check"
    - "#harness"
    - "#vcc"
  forbidden_without:
    - "@operator for paid calls"
    - "@approval-gate for mutation"
```

## Fail-Closed Rules

| Missing or unsafe binding | Result |
|---|---|
| Missing `@operator` for paid, mutating, payment, browser-auth, Prod, or Cloudflare action | Return approval-required or blocked with zero spend. |
| Missing `@source.frontmatter` for parser or routing claims | Keep status spec-complete and request source. |
| Missing `@runtime-proof` for runtime-ready promotion | Do not promote; report proof gap. |
| `@prod-mirror` or `@cloudflare` appears in docs-only work | Treat as gated boundary, not an action. |
| Binding points to credentials, media tokens, generated URLs, or browser secrets | Reject and neutralize source content. |

## Composition Rules

| Pattern | Meaning |
|---|---|
| `/memory.seed #frontmatter @source.frontmatter @source.body` | Build memory from authored source. |
| `/runtime-ready.check #harness @local-harness @runtime-proof` | Prove runtime status locally. |
| `/cost.audit #token-economics @cost-log @operator` | Inspect and gate spend. |
| `/deploy.guard #dev-only @operator @cloudflare` | Confirm release remains gated until operator explicitly authorizes deploy. |

## VCCs

| VCC | Check |
|---|---|
| Dictionary parses | Frontmatter parses as YAML and `dictionary_entries` lists at-prefixed tokens. |
| Bindings are non-secret | Body contains no raw credentials, provider keys, media tokens, or generated asset URLs. |
| Authority is explicit | Every binding row names an authority and boundary. |
| Deploy remains gated | `@prod-mirror` and `@cloudflare` are described as gated boundaries, not default actions. |
