# Knowgrph Visual Annotation Engine Skill

Use this skill when: Run browser-local image and video-frame annotation into LLM-ready structured JSON plus native visual datasets materialised through existing artifact owners.

## Contract

- Vdeoxpln id: `knowgrph-visual-annotation-engine`
- Contract version: `knowgrph-vdeoxpln/v0.1`
- Semantic key: `kgvx_2076672d`
- Scope: `browser-local`
- Mutation boundary: `local-approval-gated`

## Triggers

- annotate image
- annotate video
- annotation dataset
- florence2
- image caption
- llm-ready annotation
- object detection
- semantic labels
- visual annotation
- zone counting

## Inputs

- annotation tasks
- frame timestamp
- image url
- model hint
- video asset url

## Outputs

- annotation canvas node
- annotation result json
- llm-ready payload
- markdown summary
- visual annotation dataset
- zone counting timeline

## Tools

Published tools:
- none

Browser-local tools:
- none

Local MCP tools:
- knowgrph.annotate.image
- knowgrph.annotate.video_frame
- knowgrph.vdeoxpln.list

## Workflow

- Validate the Annotation_Spec before model resolution or inference.
- Resolve model identifier from modelHint, KNOWGRPH_ANNOTATION_MODEL, or the registered default.
- Dispatch through the Annotation_Worker boundary; Dev emits dependency-free heuristic annotations while model adapters remain runtime-owned.
- Build annotationId with buildScopedGraphSemanticKey using assetUrl, modelId, and sorted tasks.
- Load Annotation_Result or frame-box arrays into the native dataset owner for split, merge, save, and frame-ordered zone counting.
- Route JSON output through writeRichMediaWidgetRunOutputArtifact exactly once.
- Return annotationId, assetUrl, modelId, tasks, outputPath, and outputManifestPath.

## Source Owners

- canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs
- canvas/src/features/chat/richMediaRun.ts
- canvas/src/features/source-files
- canvas/src/features/visual-annotation-engine/annotationDataset.ts
- canvas/src/features/visual-annotation-engine/annotationEngineSsot.ts
- canvas/src/features/visual-annotation-engine/annotationFlowNode.ts
- canvas/src/features/visual-annotation-engine/annotationMcpTools.ts
- canvas/src/features/visual-annotation-engine/annotationOrchestrator.ts
- canvas/src/features/visual-annotation-engine/annotationSerializers.ts
- canvas/src/features/visual-annotation-engine/annotationWidget.ts
- canvas/src/features/visual-annotation-engine/annotationWorker.ts
- canvas/src/lib/config.flow-editor.ts
- canvas/src/lib/graph/semanticKey.ts
- mcp/local-tool-contract.js

## Artifact Policy

- Persistence: `browser-local`
- Graph materialization: `annotation-canvas-node`
- Semantic-key inputs:
- annotationId
- assetUrl
- modelId
- sortedTasks
- visualDataset
- zoneCounting

## AI Policy

- Mode: `none`
- Max attempts: `0`
- Token budget: `0`
- Fallback: Return runtime-local heuristic annotation JSON or a structured validation/runtime error without model call.

## Validation

- mcpLocalToolContract
- vdeoxpln:check
- visualAnnotationDataset
- visualAnnotationEngine

## Guardrails

- Keep behavior source-owned in the listed Knowgrph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
