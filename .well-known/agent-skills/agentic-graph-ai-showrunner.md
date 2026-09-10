# agentic-graph AI Showrunner Skill

Use this skill when: Run provider-neutral multi-agent creative pipelines for podcasts, narrative games, and writers rooms through existing Source Files, memory, MCP, AGENTIC_OS, and Storyboard Widget owners.

## Contract

- Vdeoxpln id: `agentic-graph-ai-showrunner`
- Contract version: `agentic-graph-vdeoxpln/v0.1`
- Semantic key: `kgvx_5cf1531e`
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
- agentic-graph.showrunner.approve_stage
- agentic-graph.showrunner.get_artifact
- agentic-graph.showrunner.post_choice
- agentic-graph.showrunner.run_status
- agentic-graph.showrunner.start_run
- agentic-graph.showrunner.submit_critique
- agentic-graph.vdeoxpln.list

## Workflow

- Validate the frontmatter-first Creative_Brief before any agent turn.
- Run bounded role turns through dry-run or injected provider-neutral dispatch.
- Persist append-only state, token logs, and manifests through Source Files.

## Source Owners

- canvas/src/features/ai-showrunner
- canvas/src/features/chat/chatAgenticOsCanvasApply.ts
- canvas/src/features/memory/aiAgentsMemoryLayerContract.mjs
- canvas/src/features/source-files
- canvas/src/lib/graph/semanticKey.ts
- mcp/local-tool-contract.js

## Artifact Policy

- Persistence: `source-files`
- Graph materialization: `agentic-os-validation-to-canvas-apply`
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

- Keep behavior source-owned in the listed agentic-graph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
