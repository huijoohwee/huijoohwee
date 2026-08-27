# AgenticGraph Memory Layer Skill

Use this skill when: Persist, retrieve, safely compact, hard-redact, and revision-freeze host-authorized exact-scope agent memory through a durable local runtime while preserving the legacy provider-neutral prompt harness.

## Contract

- Vdeoxpln id: `agenticgraph-memory-layer`
- Contract version: `agenticgraph-vdeoxpln/v0.1`
- Semantic key: `kgvx_0399f9a9`
- Scope: `local-stdio-and-browser-local`
- Mutation boundary: `local-scoped-memory`

## Triggers

- cross-session context
- harness replay
- long-term memory
- memory layer
- persistent memory
- personalization
- procedural memory
- profile markdown
- prompt memory
- user model

## Inputs

- Agentic Canvas OS invocation tuple
- exact runtime scope
- harness output dir
- host authorization token
- memory query
- source evidence
- user or agent message

## Outputs

- bounded prompt context
- durable authorization-bound memory receipt
- frozen or explicitly redacted revision snapshot
- procedural KGC markdown
- ranked cited memory results
- USER_MODEL markdown
- zero-model cost evidence

## Tools

Published tools:
- none

Browser-local tools:
- none

Local MCP tools:
- agenticgraph.memory.add
- agenticgraph.memory.assemble_prompt
- agenticgraph.memory.compact
- agenticgraph.memory.extract_procedural
- agenticgraph.memory.invoke
- agenticgraph.memory.materialize_user_model
- agenticgraph.memory.search
- agenticgraph.memory.write
- agenticgraph.session.search
- agenticgraph.user.profile
- agenticgraph.vdeoxpln.list

## Workflow

- Resolve one exact revision-fenced Agentic Canvas OS memory tuple when grammar invocation is used.
- Require exact tenant, workspace, agent, and subject scope plus explicit source evidence and a host-minted exact-request authorization.
- Scan and capacity-check before acquiring a fenced atomic mutation.
- Preserve compaction kind, tags, and provenance; hard-redact entry content and history only through an authorized exact-prior mutation.
- Retrieve only exact-scope cited results at the current or a frozen scope-local revision.
- Use the legacy prompt assembler only with bounded ranked results.
- Extract completed harness runs into reusable KGC procedural-memory documents.

## Source Owners

- canvas/src/features/memory/aiAgentsMemoryLayerContract.mjs
- docs/documents/agenticgraph-ai-agents-memory-layer-prd-tad.md
- mcp/local-tool-contract.js
- mcp/memory-layer-runtime.js
- mcp/persistent-memory-authorization.js
- mcp/persistent-memory-contract.mjs
- mcp/persistent-memory-invocation-runtime.js
- mcp/persistent-memory-policy.js
- mcp/persistent-memory-runtime.js
- mcp/persistent-memory-search.js
- mcp/persistent-memory-store.js
- mcp/server.js

## Artifact Policy

- Persistence: `exact-scope-sharded-host-state-outside-git`
- Graph materialization: `none`
- Semantic-key inputs:
- exactScopeDigest
- operation
- storeRevision
- sourceRevision

## AI Policy

- Mode: `optional-via-local-tools`
- Max attempts: `1`
- Token budget: `memory-harness-owned`
- Fallback: Return a typed empty, rejected, or stale result while preserving the agent turn.

## Validation

- aiAgentsMemoryLayer
- mcpLocalToolContract
- persistent-memory:check
- vdeoxpln:check

## Guardrails

- Keep behavior source-owned in the listed AgenticGraph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
