# AgenticGraph Research Visual Skill

Use this skill when: Create file-backed research visual workflows from source material using AgenticGraph parsing, Source Files, Storyboard, renderer, and chat owners.

## Contract

- Vdeoxpln id: `agenticgraph-research-visual`
- Contract version: `agenticgraph-vdeoxpln/v0.1`
- Semantic key: `kgvx_e0d43017`
- Scope: `browser-local-ai-assisted`
- Mutation boundary: `browser-local-user-mediated`

## Triggers

- algorithm
- dynamic scene
- explainer
- formula
- proof
- research visual
- storyboard

## Inputs

- algorithm
- figure
- formula
- paper excerpt
- source evidence
- workspace document

## Outputs

- mechanism brief
- renderer-neutral scene plan
- storyboard
- validated KGC Markdown

## Tools

Published tools:
- none

Browser-local tools:
- inspect_local_canvas_topology
- inspect_local_chat_pipeline_state
- inspect_local_source_files_snapshot

Local MCP tools:
- agenticgraph.vdeoxpln.list

## Workflow

- Extract source-backed semantic units into workspace artifacts.
- Plan exact deterministic graph/storyboard layers before optional AI support.
- Persist artifacts through Workspace FS and Source Files.
- Use Canvas/Storyboard renderers as projections of graph state.

## Source Owners

- canvas/src/components/StoryboardCanvas/storyboardModel.ts
- canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitCoordinator.ts
- canvas/src/features/parsers/default.ts
- canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts
- canvas/src/lib/config.render.ts
- canvas/src/lib/graph/semanticKey.ts
- docs/documents/agenticgraph-vdeoxpln-prd-tad.md

## Artifact Policy

- Persistence: `workspace-fs-and-source-files`
- Graph materialization: `kgc-validation-to-canvas-apply`
- Semantic-key inputs:
- sourceSignature
- graphSemanticKey
- rendererId

## AI Policy

- Mode: `optional-for-drafting`
- Max attempts: `2`
- Token budget: `settings-owned`
- Fallback: Return deterministic source brief with unresolved questions.

## Validation

- chatResponseContract
- sourceFiles
- vdeoxpln:check

## Guardrails

- Keep behavior source-owned in the listed AgenticGraph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
