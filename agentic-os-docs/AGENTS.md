# Agent Instructions

## Scope

These instructions apply to files under `agentic-os-docs/`. Treat `MEMORY.md` as the canonical local source for Agentic OS memory, routing, and runtime-readiness rules.

Before editing or generating files here:

1. Read `MEMORY.md` first.
2. Preserve Markdown YAML frontmatter as the source of truth.
3. Keep authored Markdown body content aligned with the frontmatter contract.
4. Do not infer behavior from file paths when frontmatter or body fields provide the contract.

## Source Contract

- `MEMORY.md` owns the local Agentic OS memory seed.
- Source docs named in `MEMORY.md` provide provenance only; do not copy their local media URLs, tokens, provider IDs, transcripts, generated assets, or deploy claims.
- Runtime readers project state from frontmatter and authored body content. Do not add a second registry, parser, provider panel, or compatibility alias in this folder.
- If source and generated content conflict, neutralize the conflict at the source document or shared owner, not by layering downstream patches.

## Invocation Grammar

Use existing shared utilities for invocation content:

| Prefix | Role | Rule |
|---|---|---|
| `/` | Command route | Describe commands such as `/memory.seed`, `/prd-tad.create`, `/runtime-ready.check`, and `/deploy.guard`; do not invent a separate command runtime. |
| `#` | Semantic route | Use tags such as `#frontmatter`, `#harness`, `#token-economics`, `#tco`, `#vcc`, `#no-hardcode`, `#foss`, and `#ttv` for filtering and routing. |
| `@` | Binding route | Use bindings such as `@operator`, `@source.frontmatter`, `@source.body`, `@local-harness`, `@runtime-proof`, and `@dev-only` for actor, source, and runtime context. |

## Operating Defaults

- Work Dev-first. The Dev repo is `/Users/huijoohwee/Documents/GitHub/knowgrph`.
- Treat `/Users/huijoohwee/Documents/GitHub/huijoohwee/content/knowgrph` as a Prod mirror, not a default edit target.
- Treat `airvio.co` and `airvio.co/knowgrph` as Cloudflare deployment targets, not completion criteria.
- Forbid Prod or Cloudflare deploy until the operator explicitly authorizes it.
- Prefer FOSS, zero-egress, local, and dry-run paths until ROI, TCO, token budget, and approval gates justify live spend.
- Reuse shared semantic-key, parser, headless, renderer, and routing helpers. Do not add surface-local aliases, stale remaps, hardcoded fixtures, or copied implementations.

## Documentation Rules

- Keep documents universal, neutral, agnostic, modular, and source-backed.
- Maintain spec-complete to runtime-ready progression:
  - Spec-complete requires frontmatter identity, problem hypothesis, acceptance criteria, TCO estimate, token budget, and VCC map.
  - Runtime-ready requires typed harnesses, bounded orchestration, cost logs, fallback paths, focused proof, and clean deploy boundaries.
- Use semantic Markdown structure with clear headings and tables. Avoid prose-only claims when a table, VCC, or harness contract would make the state verifiable.
- Keep files lean. Prefer one responsibility per section and remove stale or conflicting content instead of appending duplicate guidance.

## AI Harness Rules

Every AI-capable memory, PRD/TAD, or agent document must specify:

- Typed input schema.
- Typed output schema.
- Dispatcher, executor, observer, and consumer roles when orchestration is involved.
- Fallback path for malformed input, model failure, approval denial, and token budget breach.
- Cost log fields: `model`, `prompt_tokens`, `completion_tokens`, `cache_hits`, and `estimated_cost_usd`.
- Max-iteration bound and circuit breaker for any loop.

Malformed inputs must fail before token spend. Raw, unstructured prompt calls are not runtime-ready.

## VCC Rules

Acceptance criteria must translate into Verifiable Completion Conditions:

```text
Given [context] When [action] Then [observable outcome]
VCC: Verify [outcome] by [stated check] with [constraint]; stop after [N] iterations.
```

A valid VCC names an observable end state and proof, such as an exit code, parsed field, file count, response shape, latency threshold, queue state, or cost-log value. Avoid "looks good", "is complete", "works better", or any other subjective completion language.

## Forbidden Patterns

Do not introduce:

- Hardcoded source URLs, provider IDs, stream URLs, transcripts, credentials, generated media URLs, or deployment claims.
- Browser-owned secrets, localStorage provider keys, duplicated provider catalogs, or standalone provider panels.
- Raw prompt calls without schema validation, cost logging, and fallback paths.
- Unbounded retry, polling, re-render, or agentic loops.
- Legacy remapping, compatibility aliases, stale fixtures, copied external implementations, or downstream bug masks.
- Generic HTML container guidance where semantic HTML is available.
- Prod or Cloudflare deployment claims without explicit operator authorization and returned live evidence.

## Library And API Docs

When a task here involves a library, framework, SDK, API, CLI, or cloud service, fetch current docs through Context7 before answering or changing implementation guidance. Skip Context7 for pure documentation refactors, scratch scripts, business-logic debugging, code review, or general concepts.

## Validation

For documentation-only changes in this folder, run focused checks only:

- Parse frontmatter when a file has YAML frontmatter.
- Check line count and keep files under local hygiene budgets.
- Scan for copied local runtime artifacts such as `localhost`, `kg_media_token`, `data:image`, provider keys, upload IDs, or generated media URLs.
- Confirm no Prod mirror or Cloudflare deploy action was performed.

If a runtime implementation is touched outside this folder, use the touched repo's focused tests and type checks. Do not run indefinite full-codebase validation.
