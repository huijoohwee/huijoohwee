# AgenticGraph Video Agent Skill

Use this skill when: Reason over operator-supplied video sources through native agenticgraph ingestion, parsing, annotation, dataset operations, zone counting, search planning, edit planning, timeline compilation, generation placeholders, and streamable rich-media output.

## Contract

- Vdeoxpln id: `agenticgraph-video-agent`
- Contract version: `agenticgraph-vdeoxpln/v0.1`
- Semantic key: `kgvx_609c36d0`
- Scope: `browser-local-and-local-stdio`
- Mutation boundary: `local-approval-gated`

## Triggers

- stream video result
- video agent
- video compilation
- video editing
- video generation
- video reasoning
- video search
- visual dataset
- zone counting

## Inputs

- annotation tasks
- edit constraints
- operator-supplied video url
- render spec
- search intent
- source manifest

## Outputs

- edit plan
- inline stream preview
- moment search index
- reasoning artifact manifest
- render spec
- source manifest
- timeline manifest
- video/mp4 artifact
- visual annotation dataset
- zone counting timeline

## Tools

Published tools:
- none

Browser-local tools:
- none

Local MCP tools:
- agenticgraph.annotate.image
- agenticgraph.annotate.video_frame
- agenticgraph.html_video.render
- agenticgraph.vdeoxpln.list

## Workflow

- Ingest an operator-supplied video source without embedding a provider runtime dependency.
- Parse source metadata, frame annotations, transcript windows, and searchable moments through existing source and annotation owners.
- Load frame annotations into native visual dataset operators for deterministic split, merge, save, and frame-ordered zone counting.
- Plan search, edit, compilation, and generation stages as typed reasoning artifacts rather than copied external code.
- Compile a source-owned HTML/CSS/data Render_Spec for the selected timeline.
- Stream a video/mp4 artifact or outputSrcDoc preview through the shared Rich Media Panel output owner.

## Source Owners

- canvas/src/features/agent-ready/agenticgraphVdeoxplnContract.mjs
- canvas/src/features/chat/richMediaRun.ts
- canvas/src/features/html-video-renderer/htmlVideoFlowNode.ts
- canvas/src/features/html-video-renderer/htmlVideoRendererSsot.ts
- canvas/src/features/source-files
- canvas/src/features/video-agent
- canvas/src/features/video-agent/videoAgentDatasetRuntime.ts
- canvas/src/features/visual-annotation-engine/annotationDataset.ts
- canvas/src/features/visual-annotation-engine/annotationFlowNode.ts
- canvas/src/features/visual-annotation-engine/annotationSerializers.ts
- canvas/src/lib/graph/semanticKey.ts

## Artifact Policy

- Persistence: `local-workspace`
- Graph materialization: `rich-media-panel`
- Semantic-key inputs:
- sourceUrl
- capabilities
- reasoningArtifacts
- visualDataset
- zoneCounting
- renderSpecHash
- streamOutput

## AI Policy

- Mode: `optional-via-local-tools`
- Max attempts: `1`
- Token budget: `operator-configured`
- Fallback: Return structured source, annotation, dataset, zone counting, or render errors without invoking external video-agent services.

## Validation

- htmlVideoRenderer
- mcpLocalToolContract
- vdeoxpln:check
- videoAgentPipeline
- visualAnnotationDataset
- visualAnnotationEngine

## Guardrails

- Keep behavior source-owned in the listed AgenticGraph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
