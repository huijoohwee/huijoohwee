# Knowgrph Memory Layer Skill

Use this skill when: Persist, retrieve, inject, extract, and materialize explicitly scoped agent memories through a provider-neutral local harness with source-owned Markdown outputs.

## Contract

- Vdeoxpln id: `knowgrph-memory-layer`
- Contract version: `knowgrph-vdeoxpln/v0.1`
- Semantic key: `kgvx_46485834`
- Scope: `local-stdio-and-browser-local`
- Mutation boundary: `local-scoped-memory`

## Triggers

- cross-session context
- harness replay
- long-term memory
- mem0
- memory layer
- personalization
- procedural memory
- profile markdown
- prompt memory
- user model

## Inputs

- harness output dir
- memory query
- runtime scope
- user or agent message

## Outputs

- bounded prompt context
- memory cost log
- memory write result
- procedural KGC markdown
- ranked memory results
- USER_MODEL markdown

## Tools

Published tools:
- none

Browser-local tools:
- none

Local MCP tools:
- knowgrph.memory.add
- knowgrph.memory.assemble_prompt
- knowgrph.memory.extract_procedural
- knowgrph.memory.materialize_user_model
- knowgrph.memory.search
- knowgrph.vdeoxpln.list

## Workflow

- Require explicit runtime scope.
- Add/search through the configured harness.
- Inject only top-ranked memories within token budget.
- Extract completed harness runs into reusable KGC procedural-memory documents.
- Materialize scoped memories into deterministic USER_MODEL markdown when a source-owned profile is needed.

## Source Owners

- canvas/src/features/memory/aiAgentsMemoryLayerContract.mjs
- docs/documents/knowgrph-ai-agents-memory-layer-prd-tad.md
- mcp/local-tool-contract.js
- mcp/memory-layer-runtime.js
- mcp/server.js

## Artifact Policy

- Persistence: `operator-configured-local-memory-store`
- Graph materialization: `none`
- Semantic-key inputs:
- memoryScope
- operation
- topK
- providerMode

## AI Policy

- Mode: `optional-via-local-tools`
- Max attempts: `1`
- Token budget: `memory-harness-owned`
- Fallback: Return empty memory results or skip write while preserving the agent turn.

## Validation

- aiAgentsMemoryLayer
- mcpLocalToolContract
- vdeoxpln:check

## Guardrails

- Keep behavior source-owned in the listed Knowgrph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
