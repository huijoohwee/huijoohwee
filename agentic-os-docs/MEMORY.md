---
title: "Agentic OS Memory"
graphId: "md:agentic-os-memory"
doc_type: "Agentic OS Memory"
date: "2026-07-07"
lang: "en-US"
schema: "agentic-os-memory/v1"
frontmatter_contract: "required"
source_docs:
  - "/Users/huijoohwee/Documents/GitHub/huijoohwee/docs/knowgrph-strybldr-starter-template.md"
  - "/Users/huijoohwee/Documents/GitHub/huijoohwee.github.io/guidelines/prd-tad-guidelines.md"
implementation_contract: "frontmatter and authored Markdown body are SSOT; runtime readers project state only"
publish_policy: "Dev-only until the operator explicitly authorizes Prod or Cloudflare"
runtime_claim: "spec-complete-to-runtime-ready memory seed; no live provider, deploy, or paid-call claim"
kgCanvasSurfaceMode: "2d"
kgCanvasRenderMode: "2d"
kgCanvas2dRenderer: "storyboard"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: true
kgDocumentStructureBaselineLock: false
kgBottomPanelOpen: true
kgBottomPanelTab: "timeline"
kgFloatingPanelOpen: true
kgFloatingPanelView: "strybldr"
agentic_os_memory:
  version: "agentic-os-memory/v1"
  status: "draft-runtime-ready-seed"
  owner: "operator"
  default_scope: "local-dev"
  deployment_boundaries:
    dev: "/Users/huijoohwee/Documents/GitHub/knowgrph"
    prod_mirror: "/Users/huijoohwee/Documents/GitHub/huijoohwee/content/knowgrph"
    cloudflare_routes: ["airvio.co", "airvio.co/knowgrph"]
    deploy_gate: "forbid Prod and Cloudflare deploy until explicit operator instruction"
  invocation_prefixes:
    slash:
      prefix: "/"
      role: "command route"
      examples: ["/memory.seed", "/prd-tad.create", "/runtime-ready.check", "/deploy.guard"]
    hash:
      prefix: "#"
      role: "semantic filter or topic route"
      examples: ["#frontmatter", "#harness", "#token-economics", "#vcc", "#no-hardcode"]
    at:
      prefix: "@"
      role: "source, actor, or runtime binding"
      examples: ["@operator", "@source.frontmatter", "@source.body", "@local-harness", "@runtime-proof"]
  operating_lenses:
    - "min-viable-max-value"
    - "TCO-zero"
    - "token-economics"
    - "harness-first"
    - "FOSS-first"
  forbidden_patterns:
    - "backfill"
    - "churn"
    - "conflict"
    - "duplicate"
    - "freeze"
    - "hardcode"
    - "infinite-loop"
    - "legacy-remapping"
    - "re-computation"
    - "re-rendering"
    - "stale-alias"
  runtime_gates:
    spec_complete:
      requires: ["frontmatter identity", "problem hypothesis", "acceptance criteria", "TCO estimate", "token budget", "VCC map"]
      forbids: ["implicit interface", "generic done state", "uncosted dependency"]
    runtime_ready:
      requires: ["typed harness", "bounded orchestration", "cost log", "fallback path", "focused proof", "clean deployment boundary"]
      forbids: ["raw prompt call", "unbounded loop", "fabricated provider output", "deploy claim without authorization"]
flow_diagrams:
  key: "flow_diagrams"
  type: "object"
  value:
    memory_runtime_flow:
      key: "memory_runtime_flow"
      type: "mermaid_flowchart"
      floatingPanelView: "flowchart"
      floatingPanelOpen: true
      bottomPanelTab: "flowchart"
      bottomPanelOpen: true
      value: |-
        flowchart LR
          source["Source docs"]
          memory["Agentic OS Memory"]
          slash["/ command route"]
          hash["# semantic route"]
          at["@ binding route"]
          harness["Typed harness"]
          proof["Runtime-ready proof"]
          source --> memory
          memory --> slash
          memory --> hash
          memory --> at
          slash --> harness
          hash --> harness
          at --> harness
          harness --> proof
    readiness_sequence:
      key: "readiness_sequence"
      type: "mermaid_flowchart"
      floatingPanelView: "flowchart"
      floatingPanelOpen: true
      bottomPanelTab: "flowchart"
      bottomPanelOpen: true
      value: |-
        flowchart TD
          phase0["Phase 0: problem ROI TTV"]
          os["Must: OS status surface"]
          discovery["Must: AI agent discovery"]
          federation["Must: gateway federation"]
          spend["Follow-on: spend safety"]
          live["Follow-on: live orchestration proof"]
          ui["Follow-on: operator UI projection"]
          phase0 --> os --> discovery --> federation --> spend --> live --> ui
---

# Agentic OS Memory

This document is the local Agentic OS memory seed for solo-dev, AI-native product work. It distills the Strybldr starter contract and the PRD/TAD guideline contract into reusable memory content that existing `/`, `#`, and `@` utilities can route without adding a new parser, provider panel, deploy step, or compatibility layer.

The file is spec-complete when its frontmatter can be parsed as the source of truth. It is runtime-ready only when a caller proves the relevant VCCs with surfaced output, focused checks, and unchanged deploy boundaries.

## Invocation Surface

| Prefix | Use | Contract |
|---|---|---|
| `/` | Command route | Select an action such as `/memory.seed`, `/prd-tad.create`, `/runtime-ready.check`, or `/deploy.guard`. Commands invoke existing shared utilities; this document contributes routing content only. |
| `#` | Semantic route | Filter by concern: `#frontmatter`, `#harness`, `#token-economics`, `#tco`, `#vcc`, `#no-hardcode`, `#foss`, `#ttv`. Tags must not create duplicate registries. |
| `@` | Binding route | Bind the run to an actor, source, or runtime: `@operator`, `@source.frontmatter`, `@source.body`, `@local-harness`, `@runtime-proof`, `@dev-only`. Bindings must not imply deployment. |

## Source Of Truth

| Source | Memory role | Non-negotiable rule |
|---|---|---|
| Strybldr starter frontmatter | Runtime routing, renderer defaults, local-first publish gate | Frontmatter and authored source payloads own data; renderers project view state only. |
| Strybldr starter body | Operator workflow and acceptance checklist | Live provider fields, generated media URLs, transcripts, provider IDs, and deploy claims stay empty until returned by an approved live run. |
| PRD/TAD guidelines | Universal document and architecture contract | Requirements must stay neutral, modular, traceable, VCC-backed, TCO-aware, token-aware, and FOSS-first. |

## Operating Defaults

- Work Dev-first in `/Users/huijoohwee/Documents/GitHub/knowgrph`.
- Treat `/Users/huijoohwee/Documents/GitHub/huijoohwee/content/knowgrph` as a Prod mirror, not a working default.
- Treat `airvio.co` and `airvio.co/knowgrph` as Cloudflare deployment targets, not completion criteria.
- Forbid Prod or Cloudflare deploy unless the operator explicitly opens that gate.
- Prefer FOSS, zero-egress, local, and dry-run paths until ROI, TCO, token budget, and approval gates justify live spend.
- Reuse shared semantic-key, parser, headless, and renderer helpers. Do not add surface-local aliases, stale remaps, or hardcoded fixtures.

## Spec-Complete Gate

Before implementation, a feature memory is spec-complete only if it has:

| Gate | Required evidence |
|---|---|
| Problem | Falsifiable problem hypothesis and target persona or operator job. |
| Value | Min-viable-max-value scope, MoSCoW tier, ROI score, and explicit exclusions. |
| Cost | 12-month TCO estimate, deployment-model variants, FOSS alternative, and token budget. |
| Flow | User journey, workflow, data flow, orchestration or harness flow, and topology when three or more components exist. |
| Harness | Typed input schema, typed output schema, fallback path, and cost log fields for every AI-powered component. |
| Completion | Given-When-Then acceptance criteria translated into VCCs with measurable end state, stated check, and constraint. |

## Runtime-Ready Gate

A feature memory is runtime-ready only when the executing agent surfaces proof that:

| Gate | Required proof |
|---|---|
| Parse | Frontmatter parses without repair-only fallback. |
| Route | `/`, `#`, and `@` handles resolve through shared utilities or are rejected with structured errors. |
| Execute | Harness calls use schema-validated inputs and outputs; malformed inputs fail before token spend. |
| Bound | Agentic loops have max iterations and circuit breakers. |
| Cost | Cost logs include model, prompt tokens, completion tokens, cache hits, and estimated cost. |
| Validate | Focused tests or checks exit 0 for the touched scope. |
| Boundary | Dev, Prod mirror, and Cloudflare state remain separate; no deploy is claimed without authorization. |

## Harness Memory

Use this shape for every AI-capable memory block:

```yaml
harness:
  name: "[neutral capability name]"
  dispatcher:
    input_schema: "[typed payload]"
    output_schema: "[routed payload or typed error]"
  executor:
    model_policy: "local-or-approved-live"
    input_schema: "[typed model request]"
    output_schema: "[typed model response]"
  observer:
    cost_log_fields: ["model", "prompt_tokens", "completion_tokens", "cache_hits", "estimated_cost_usd"]
  consumer:
    output_target: "[artifact, graph, table, or local packet]"
  fallback:
    mode: "typed error or degraded-mode response"
  bounds:
    max_iterations: 1
    circuit_breaker: "stop on schema error, approval denial, or token budget breach"
```

## VCC Memory

Translate acceptance criteria into evaluator-checkable conditions:

```text
Given [context] When [action] Then [observable outcome]
VCC: Verify [outcome] by [stated check] with [constraint]; stop after [N] iterations.
```

Good VCCs name an exit code, parsed field, file count, response shape, latency threshold, queue state, or cost-log value. Weak VCCs say "looks good", "is complete", "works better", or "is ready" without measurable proof.

## Anti-Patterns To Neutralize Upstream

- Hardcoded source URLs, provider IDs, stream URLs, transcripts, credentials, generated media URLs, or deployment claims.
- Browser-owned secrets, localStorage provider keys, duplicated provider catalogs, or standalone provider panels.
- Raw prompt calls in production pipelines without schema validation, cost logging, and fallback paths.
- Unbounded retry loops, polling loops, re-render loops, or agentic loops without a circuit breaker.
- Compatibility aliases that remap legacy renderer names instead of removing the stale source.
- Downstream patches that mask a root parser, registry, semantic-key, or shared helper defect.
- Generic HTML containers in authored UI surfaces where semantic elements are available.

## Slash Command Seeds

| Command | Intent | Required context | Completion signal |
|---|---|---|---|
| `/memory.seed` | Create or update a neutral memory block from source docs. | `@source.frontmatter`, `@source.body`, `#frontmatter` | Parsed frontmatter and body memory block committed locally. |
| `/prd-tad.create` | Produce a combined PRD/TAD from a validated problem. | `#roi`, `#tco`, `#ttv`, `#vcc` | PRD/TAD includes traceability, topology, harness, ADR, and VCC sections. |
| `/runtime-ready.check` | Prove a spec-complete artifact is runnable. | `@local-harness`, `#harness`, `#vcc` | Focused checks exit 0 and cost/deploy boundaries are surfaced. |
| `/deploy.guard` | Prevent accidental Prod or Cloudflare release. | `@dev-only`, `#no-deploy` | Output states Dev-only status and no Prod/Cloudflare mutation. |

## Hash Filters

| Filter | Matches | Use when |
|---|---|---|
| `#frontmatter` | Identity, renderer, parser, routing, deploy gates | A document needs parse-first routing or SSOT cleanup. |
| `#harness` | AI component contracts, schemas, fallbacks, cost logs | A feature spends tokens or invokes a model. |
| `#token-economics` | Prompt/completion budget, cache hit rate, cost logs | A pipeline has token performance or TCO risk. |
| `#vcc` | Acceptance criteria, proof commands, evaluator-visible output | A requirement needs a measurable done condition. |
| `#no-hardcode` | Fixtures, credentials, URLs, provider IDs, generated outputs | A source doc or repo patch risks stale embedded data. |
| `#foss` | Alternatives, vendor risk, deployment-model TCO | A dependency or cloud service is under consideration. |

## At Bindings

| Binding | Meaning | Boundary |
|---|---|---|
| `@operator` | Human approval authority. | Required before paid, mutating, Prod, or Cloudflare actions. |
| `@source.frontmatter` | Parsed YAML frontmatter. | SSOT for identity, routing, renderer flags, and runtime gates. |
| `@source.body` | Authored Markdown body. | SSOT for operator workflow, guardrails, and checklist language. |
| `@local-harness` | Dev-local execution path. | Default for dry-runs and zero-paid-call proofs. |
| `@runtime-proof` | Surfaced validation evidence. | Must include commands or structured output, not narrative claims. |
| `@dev-only` | Deployment boundary. | Confirms work stops before Prod mirror and Cloudflare. |

## Validation Checklist

- [ ] Frontmatter is the first block and parses as YAML.
- [ ] Body content does not copy local media URLs, tokens, credentials, provider IDs, transcripts, or generated assets from source docs.
- [ ] `/`, `#`, and `@` route content is descriptive and reusable; no new duplicate runtime registry is implied.
- [ ] Every AI capability has a harness contract, fallback, token budget, and cost log.
- [ ] Every loop has a max-iteration bound and circuit breaker.
- [ ] Every acceptance criterion can be converted into a VCC.
- [ ] Dev, Prod mirror, and Cloudflare deployment boundaries are stated separately.
- [ ] No Prod or Cloudflare deployment is performed or claimed from this memory update.
