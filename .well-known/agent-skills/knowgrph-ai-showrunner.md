# Knowgrph AI Showrunner Skill

Use this skill when: Run provider-neutral multi-agent creative pipelines for podcasts, narrative games, and writers rooms through existing Source Files, memory, MCP, KGC, and Storyboard Widget owners.

## Contract

- Vdeoxpln id: `knowgrph-ai-showrunner`
- Contract version: `knowgrph-vdeoxpln/v0.1`
- Semantic key: `kgvx_7e480fd7`
- Scope: `local-stdio-and-browser-local`
- Mutation boundary: `local-approval-gated`

## Triggers

- ai showrunner
- creative state
- multi-agent orchestration
- narrative game
- podcast pipeline
- writers room

## Inputs

- choice signal
- creative brief markdown
- critique text
- operator approval
- run id

## Outputs

- artifact manifest
- choice graph
- creative state entries
- pipeline run state
- revision history
- script

## Tools

Published tools:
- none

Browser-local tools:
- none

Local MCP tools:
- knowgrph.showrunner.approve_stage
- knowgrph.showrunner.get_artifact
- knowgrph.showrunner.post_choice
- knowgrph.showrunner.run_status
- knowgrph.showrunner.start_run
- knowgrph.showrunner.submit_critique
- knowgrph.vdeoxpln.list

## Workflow

- Validate the frontmatter-first Creative_Brief before any agent turn.
- Run bounded role turns through dry-run or injected provider-neutral dispatch.
- Persist append-only state, token logs, and manifests through Source Files.

## Source Owners

- canvas/src/features/ai-showrunner
- canvas/src/features/chat/chatKgcCanvasApply.ts
- canvas/src/features/memory/aiAgentsMemoryLayerContract.mjs
- canvas/src/features/source-files
- canvas/src/lib/graph/semanticKey.ts
- mcp/local-tool-contract.js

## Artifact Policy

- Persistence: `source-files`
- Graph materialization: `kgc-validation-to-canvas-apply`
- Semantic-key inputs:
- run_id
- agent_role
- turn_index
- content_hash

## AI Policy

- Mode: `optional-via-local-tools`
- Max attempts: `1`
- Token budget: `pipeline-run-owned`
- Fallback: Halt at approval or structured error while preserving committed Creative_State.

## Validation

- mcpLocalToolContract
- showrunnerDryRun
- vdeoxpln:check

## Guardrails

- Keep behavior source-owned in the listed Knowgrph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
