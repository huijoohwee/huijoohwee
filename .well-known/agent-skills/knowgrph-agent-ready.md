# Knowgrph Agent Ready Skill

Use this skill when: Inspect Knowgrph health, MCP, WebMCP, A2A, OpenAPI, commerce, and browser-local readiness without claiming deployed mutation.

## Contract

- Vdeoxpln id: `knowgrph-agent-ready`
- Contract version: `knowgrph-vdeoxpln/v0.1`
- Semantic key: `kgvx_91081c1b`
- Scope: `read-only-published-and-browser-local`
- Mutation boundary: `read-only`

## Triggers

- a2a
- agent-ready
- discovery
- mcp health
- openapi
- readiness
- webmcp

## Inputs

- agent-ready base URL
- browser runtime state
- published metadata

## Outputs

- agent surface inspection
- browser-local readiness snapshot
- metadata report

## Tools

Published tools:
- inspect_agent_surface

Browser-local tools:
- inspect_local_2d_zoom_viewport
- inspect_local_3d_camera_pose
- inspect_local_3d_layout_positions
- inspect_local_canvas_snapshot
- inspect_local_canvas_topology
- inspect_local_chat_pipeline_state
- inspect_local_editor_workspace_state
- inspect_local_mainpanel_chat_canvas_pipeline
- inspect_local_mainpanel_state
- inspect_local_settings_chat_readiness
- inspect_local_source_files_snapshot
- inspect_local_workspace_document

Local MCP tools:
- knowgrph.vdeoxpln.list

## Workflow

- Inspect published agent-ready metadata.
- Inspect browser-local state only when running inside the app runtime.
- Report scope boundaries between Pages read-only tools and browser-local inspectors.

## Source Owners

- canvas/src/features/agent-ready/agentSurfaceInspection.mjs
- canvas/src/features/agent-ready/knowgrphAgentReadyToolContract.mjs
- canvas/src/features/agent-ready/webMcpRuntime.ts
- cloudflare/pages/knowgrph-agent-ready.mjs
- scripts/check-agent-ready.mjs

## Artifact Policy

- Persistence: `inspection-only`
- Graph materialization: `none`
- Semantic-key inputs:
- toolContracts
- metadataRoutes
- browserLocalToolNames

## AI Policy

- Mode: `none`
- Max attempts: `0`
- Token budget: `0`
- Fallback: Return metadata inspection errors directly.

## Validation

- agent-ready:check
- vdeoxpln:check

## Guardrails

- Keep behavior source-owned in the listed Knowgrph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
