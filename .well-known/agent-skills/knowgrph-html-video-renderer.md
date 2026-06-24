# Knowgrph HTML Video Renderer Skill

Use this skill when: Render HTML, CSS, and data documents to MP4 video artifacts through a runtime-selected pluggable engine and the existing rich media output owner.

## Contract

- Vdeoxpln id: `knowgrph-html-video-renderer`
- Contract version: `knowgrph-vdeoxpln/v0.1`
- Semantic key: `kgvx_6c382ebe`
- Scope: `local-stdio-and-browser-local`
- Mutation boundary: `local-approval-gated`

## Triggers

- coding agent video
- html to video
- html video render
- programmatic video
- render html mp4

## Inputs

- css
- data json
- engine hint
- html document
- render spec

## Outputs

- artifact path
- mp4 video blob
- render job id
- render manifest

## Tools

Published tools:
- none

Browser-local tools:
- none

Local MCP tools:
- knowgrph.html_video.render
- knowgrph.vdeoxpln.list

## Workflow

- Validate the Render_Spec before any engine call.
- Resolve active engine from KNOWGRPH_HTML_VIDEO_ENGINE or engineHint at invocation time.
- Execute the render engine and capture the video/mp4 blob.
- Route the blob through writeRichMediaWidgetRunOutputArtifact exactly once.
- Return renderJobId, outputPath, outputManifestPath, and outputStorageUrl.

## Source Owners

- canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs
- canvas/src/features/chat/richMediaRun.ts
- canvas/src/features/html-video-renderer/htmlVideoEngineRegistry.ts
- canvas/src/features/html-video-renderer/htmlVideoFlowNode.ts
- canvas/src/features/html-video-renderer/htmlVideoRendererSpec.ts
- canvas/src/features/html-video-renderer/htmlVideoRendererSsot.ts
- canvas/src/features/html-video-renderer/htmlVideoRenderJob.ts
- canvas/src/features/html-video-renderer/htmlVideoWidget.ts
- canvas/src/features/source-files
- canvas/src/lib/config.flow-editor.ts
- canvas/src/lib/graph/semanticKey.ts
- mcp/local-tool-contract.js
- mcp/server.js

## Artifact Policy

- Persistence: `local-workspace`
- Graph materialization: `rich-media-panel`
- Semantic-key inputs:
- renderJobId
- engineId
- renderSpecHash
- outputPath

## AI Policy

- Mode: `none`
- Max attempts: `0`
- Token budget: `0`
- Fallback: Return structured error without model call.

## Validation

- htmlVideoRenderer
- mcpLocalToolContract
- vdeoxpln:check

## Guardrails

- Keep behavior source-owned in the listed Knowgrph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
