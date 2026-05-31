# Knowgrph Chat To Canvas Skill

Use this skill when: Route AI-assisted graph generation through FloatingPanel Chat, KGC validation, Workspace FS, Source Files, and Canvas apply owners.

## Contract

- Vdeoxpln id: `knowgrph-chat-to-canvas`
- Contract version: `knowgrph-vdeoxpln/v0.1`
- Semantic key: `kgvx_27a79174`
- Scope: `browser-local-ai-assisted`
- Mutation boundary: `browser-local-user-mediated`

## Triggers

- apply to canvas
- chat to canvas
- flow.subgraphs
- generate graph
- kgc markdown

## Inputs

- chat request
- model settings
- selection context
- source evidence
- workspace context

## Outputs

- canvas topology snapshot
- GraphData
- validated KGC Markdown
- workspace artifact

## Tools

Published tools:
- none

Browser-local tools:
- inspect_local_canvas_snapshot
- inspect_local_canvas_topology
- inspect_local_chat_pipeline_state
- inspect_local_mainpanel_chat_canvas_pipeline
- inspect_local_workspace_document

Local MCP tools:
- knowgrph.vdeoxpln.list

## Workflow

- Vdeoxpln context through the shared chat submit request owner.
- Call provider transport only after typed request construction.
- Validate KGC Markdown with bounded retries.
- Persist through Workspace FS and apply through the existing Canvas path.

## Source Owners

- canvas/src/features/chat/chatKgcCanvasApply.ts
- canvas/src/features/chat/chatMarkdownValidation.ts
- canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitCoordinator.ts
- canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitRequest.ts
- canvas/src/features/chat/knowgrphVdeoxplnChatArtifacts.ts
- canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts
- canvas/src/features/workspace-fs/workspaceFs.ts
- canvas/src/lib/graph/semanticKey.ts

## Artifact Policy

- Persistence: `workspace-fs-and-source-files`
- Graph materialization: `kgc-validation-to-canvas-apply`
- Semantic-key inputs:
- chatContextScope
- workspacePath
- graphSemanticKey
- sourceLayerHash

## AI Policy

- Mode: `required-for-generation`
- Max attempts: `2`
- Token budget: `settings-owned`
- Fallback: Persist validation or provider failure as reviewable chat/workspace state.

## Validation

- chatResponseContract
- sourceFiles
- vdeoxpln:check

## Guardrails

- Keep behavior source-owned in the listed Knowgrph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
