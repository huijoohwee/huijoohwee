# Knowgrph Strybldr Skill

Use this skill when: Turn image or media source units into editable Storyboard cards and bounded media handoff artifacts through Strybldr and shared renderer owners.

## Contract

- Vdeoxpln id: `knowgrph-strybldr`
- Contract version: `knowgrph-vdeoxpln/v0.1`
- Semantic key: `kgvx_557e0e61`
- Scope: `browser-local-source-backed`
- Mutation boundary: `browser-local-user-mediated`

## Triggers

- image to storyboard
- media handoff
- storyboard
- strybldr
- visual brief

## Inputs

- image source unit
- media metadata
- storyboard graph
- workspace document

## Outputs

- canvas snapshot
- media handoff prompt
- Storyboard graph cards
- Strybldr Markdown

## Tools

Published tools:
- none

Browser-local tools:
- inspect_local_canvas_snapshot
- inspect_local_canvas_topology
- inspect_local_source_files_snapshot

Local MCP tools:
- knowgrph.vdeoxpln.list

## Workflow

- Import media through existing workspace/source owners.
- Build Strybldr cards with source-unit provenance.
- Render through the shared Storyboard surface.
- Compile bounded media handoff only after user approval.

## Source Owners

- canvas/src/components/StoryboardCanvas/storyboardModel.ts
- canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts
- canvas/src/features/strybldr
- canvas/src/features/strybldr/strybldrStoryboard.ts
- canvas/src/features/workspace-fs/workspaceFs.ts
- canvas/src/lib/config.render.ts
- canvas/src/lib/graph/semanticKey.ts
- docs/documents/knowgrph-strybldr-prd-tad.md

## Artifact Policy

- Persistence: `workspace-fs-and-source-files`
- Graph materialization: `storyboard-graph`
- Semantic-key inputs:
- sourceUnitId
- strybldrRunId
- graphSemanticKey

## AI Policy

- Mode: `optional-for-refinement`
- Max attempts: `1`
- Token budget: `user-approved-provider-step`
- Fallback: Keep editable storyboard and structured handoff error.

## Validation

- rendererPipelineNeutrality
- strybldr
- vdeoxpln:check

## Guardrails

- Keep behavior source-owned in the listed Knowgrph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
