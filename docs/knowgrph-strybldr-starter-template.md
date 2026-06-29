---
title: "Knowgrph Strybldr Starter Template"
graphId: "md:knowgrph-strybldr-starter-template"
doc_type: "Strybldr Starter Template"
date: "2026-06-16"
lang: "en-US"
schema: "kgc-strybldr-starter/v1"
implementation_contract: "docs/documents/knowgrph-strybldr-prd-tad.md"
template_policy: "Minimum viable runnable Strybldr seed; source payload owns graph data; runtime outputs stay blank until operator-approved live calls return them."
validation_input_forbid_hardcode_in_repo: "true"
deployed_api_claim: "false"
kgCanvasSurfaceMode: "2d"
kgCanvasRenderMode: "2d"
kgCanvas2dRenderer: "storyboard"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: "true"
kgMultiDimTableModeEnabled: "false"
kgDocumentStructureBaselineLock: "false"
kgStrybldrStoryboard: "true"
kgBottomPanelOpen: "true"
kgBottomPanelTab: "flowEditor"
kgFloatingPanelOpen: "true"
kgFloatingPanelView: "strybldr"
kgSharedRendererContract:
  version: "shared-renderer-contract/v1"
  semanticIdentity: "buildScopedGraphSemanticKey"
  cardPreview: "CardMediaPreview + CardMarkdownPreview"
  widgetCard: "canvas:widgetCard"
  edgeModel: "active graph edges derive from this frontmatter-owned starter graph"
  rendererPolicy: "frontmatter and source payloads own data; renderers project view state only"
credential_policy:
  videodb: "Server managed VIDEODB_API_KEY only; never hardcoded, browser-stored, or repo-stored."
  sensenova: "Server managed SENSENOVA_API_KEY only; signing and proxy auth stay server-side."
  live_generation: "Human approval required before paid or mutating provider calls."
runtime_defaults:
  provider: "knowgrph-local-animatic"
  model: "strybldr-local-animatic-v1"
  status: "draft"
  paid_call_count: "0"
  video_id: ""
  generation_job_id: ""
  index_job_id: ""
  stream_url: ""
  videodb_stream_url: ""
  transcript_text: ""
  publish_packet_path: ""
starter_inputs:
  source_url: ""
  source_title: "Untitled source"
  source_author: ""
  source_policy: "Use operator-owned source notes, metadata, and approved paraphrased beats only. Do not copy transcript text."
  target_brief: "Create a concise source-backed Strybldr storyboard and a local animatic packet before any live provider call."
  approval_state: "draft"
  publish_scope: "local-only"
  publish_policy: "No Prod, Cloudflare, external publication, fabricated provider IDs, stream URLs, or transcript text."
local_animatic_inputs:
  provider: "knowgrph-local-animatic"
  model: "strybldr-local-animatic-v1"
  status: "ready"
  paid_call_count: "0"
  source: "approved Strybldr cards from this starter document"
  output: "strybldr-video-*.md with embedded srcdoc animatic and source provenance links"
socket_types:
  strybldr_text_signal: "{color: \"#14b8a6\", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [strybldr_text_signal]}"
  strybldr_media_signal: "{color: \"#38bdf8\", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [strybldr_media_signal]}"
  strybldr_packet_signal: "{color: \"#f59e0b\", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [strybldr_packet_signal]}"
flow:
  nodes:
    - id: {key: id, type: string, value: "n1"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Live route image"}
      position: {key: position, type: object, value: {"x":-811.6666666666666,"y":-794.4356060606061}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      image: {key: image, type: string, value: "https://example.com/storyboard-live-route-image.jpg"}
      imageUrl: {key: imageUrl, type: string, value: "https://example.com/storyboard-live-route-image.jpg"}
      media: {key: media, type: string, value: "https://example.com/storyboard-live-route-image.jpg"}
      media_kind: {key: media_kind, type: string, value: "image"}
      media_url: {key: media_url, type: string, value: "https://example.com/storyboard-live-route-image.jpg"}
      mediaKind: {key: mediaKind, type: string, value: "image"}
      mediaSourceKey: {key: mediaSourceKey, type: string, value: "live-route:image:canvas-drop"}
      mediaUrl: {key: mediaUrl, type: string, value: "https://example.com/storyboard-live-route-image.jpg"}
      output: {key: output, type: string, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: string, value: ""}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "image"}
    - id: {key: id, type: string, value: "starter-storyboard-beats-card"}
      type: {key: type, type: string, value: "StoryboardElement"}
      label: {key: label, type: string, value: "Storyboard beats"}
      action: {key: action, type: string, value: "Approve only paraphrased, source-backed beats."}
      byteSize: {key: byteSize, type: number, value: 0}
      confidence: {key: confidence, type: number, value: 1}
      evidenceKind: {key: evidenceKind, type: string, value: "user-edit"}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "storyboardElement"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      lane: {key: lane, type: string, value: "Elements"}
      mediaKind: {key: mediaKind, type: string, value: "doc"}
      mediaUrl: {key: mediaUrl, type: string, value: "https://example.com/storyboard-live-route-image.jpg"}
      mimeHint: {key: mimeHint, type: string, value: "text/markdown"}
      order: {key: order, type: number, value: 2}
      prompt: {key: prompt, type: string, value: "Create four concise storyboard beats from the operator notes."}
      provider: {key: provider, type: string, value: "knowgrph"}
      references: {key: references, type: array, value: ["docs/knowgrph-strybldr-starter-template.md"]}
      renderUrl: {key: renderUrl, type: string, value: null}
      sourceBox: {key: sourceBox, type: string, value: "null"}
      sourceUrl: {key: sourceUrl, type: string, value: null}
      strybldrElementId: {key: strybldrElementId, type: string, value: "starter-storyboard-beats-card"}
      strybldrRunId: {key: strybldrRunId, type: string, value: "strybldr-starter-template"}
      strybldrSourceUnitId: {key: strybldrSourceUnitId, type: string, value: "strybldr-starter-source"}
      summary: {key: summary, type: string, value: "Draft setup, turn, proof, and close beats as editable cards."}
      thumbnailUrl: {key: thumbnailUrl, type: string, value: null}
      title: {key: title, type: string, value: "Storyboard beats"}
      "visual:fill": {key: "visual:fill", type: string, value: "var(--kg-panel-bg)"}
      "visual:height": {key: "visual:height", type: number, value: 203}
      "visual:hideLabel": {key: "visual:hideLabel", type: boolean, value: true}
      "visual:preserveBody": {key: "visual:preserveBody", type: boolean, value: true}
      "visual:shape": {key: "visual:shape", type: string, value: "rect"}
      "visual:stroke": {key: "visual:stroke", type: string, value: "var(--kg-border)"}
      "visual:width": {key: "visual:width", type: number, value: 360}
    - id: {key: id, type: string, value: "n2"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Live route video"}
      position: {key: position, type: object, value: {"x":345.6666666666665,"y":-794.4355582805596}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      media: {key: media, type: string, value: "https://example.com/storyboard-live-route-video.mp4"}
      media_interactive: {key: media_interactive, type: boolean, value: true}
      media_kind: {key: media_kind, type: string, value: "video"}
      media_url: {key: media_url, type: string, value: "https://example.com/storyboard-live-route-video.mp4"}
      mediaKind: {key: mediaKind, type: string, value: "video"}
      mediaSourceKey: {key: mediaSourceKey, type: string, value: "live-route:video:canvas-drop"}
      mediaUrl: {key: mediaUrl, type: string, value: "https://example.com/storyboard-live-route-video.mp4"}
      output: {key: output, type: string, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: string, value: ""}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "video"}
      video: {key: video, type: string, value: "https://example.com/storyboard-live-route-video.mp4"}
      videoUrl: {key: videoUrl, type: string, value: "https://example.com/storyboard-live-route-video.mp4"}
    - id: {key: id, type: string, value: "starter-elements-card"}
      type: {key: type, type: string, value: "StoryboardElement"}
      label: {key: label, type: string, value: "Reusable elements"}
      action: {key: action, type: string, value: "Keep generated media URLs blank until real outputs exist."}
      byteSize: {key: byteSize, type: number, value: 0}
      confidence: {key: confidence, type: number, value: 1}
      evidenceKind: {key: evidenceKind, type: string, value: "user-edit"}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "storyboardElement"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      lane: {key: lane, type: string, value: "Elements"}
      mediaKind: {key: mediaKind, type: string, value: "image"}
      mediaUrl: {key: mediaUrl, type: string, value: "https://example.com/storyboard-live-route-video.mp4"}
      mimeHint: {key: mimeHint, type: string, value: "text/markdown"}
      order: {key: order, type: number, value: 3}
      prompt: {key: prompt, type: string, value: "Convert approved beats into reusable elements and style constraints."}
      provider: {key: provider, type: string, value: "knowgrph"}
      references: {key: references, type: array, value: ["docs/knowgrph-strybldr-starter-template.md"]}
      renderUrl: {key: renderUrl, type: string, value: null}
      sourceBox: {key: sourceBox, type: string, value: "null"}
      sourceUrl: {key: sourceUrl, type: string, value: null}
      strybldrElementId: {key: strybldrElementId, type: string, value: "starter-elements-card"}
      strybldrRunId: {key: strybldrRunId, type: string, value: "strybldr-starter-template"}
      strybldrSourceUnitId: {key: strybldrSourceUnitId, type: string, value: "strybldr-starter-source"}
      summary: {key: summary, type: string, value: "List reusable characters, locations, props, evidence cards, UI states, or shots."}
      thumbnailUrl: {key: thumbnailUrl, type: string, value: null}
      title: {key: title, type: string, value: "Reusable elements"}
      "visual:fill": {key: "visual:fill", type: string, value: "var(--kg-panel-bg)"}
      "visual:height": {key: "visual:height", type: number, value: 203}
      "visual:hideLabel": {key: "visual:hideLabel", type: boolean, value: true}
      "visual:preserveBody": {key: "visual:preserveBody", type: boolean, value: true}
      "visual:shape": {key: "visual:shape", type: string, value: "rect"}
      "visual:stroke": {key: "visual:stroke", type: string, value: "var(--kg-border)"}
      "visual:width": {key: "visual:width", type: number, value: 360}
  edges:
    - {"id":"e1","source":"n1","sourceHandle":"imageUrl","target":"starter-storyboard-beats-card","targetHandle":"mediaUrl","label":"linksTo"}
    - {"id":"e1","source":"n2","sourceHandle":"videoUrl","target":"starter-elements-card","targetHandle":"mediaUrl","label":"linksTo"}
kgParserRoutingContract:
  version: "knowgrph-parser-routing/v1"
  parserLogic: "Opening frontmatter and authored source payloads are SSOT; parsers materialize graphData without renderer-local aliases."
  routingKeys:
    surface: "kgCanvasSurfaceMode"
    renderMode: "kgCanvasRenderMode"
    renderer: "kgCanvas2dRenderer"
    semanticMode: "kgDocumentSemanticMode"
    frontmatterMode: "kgFrontmatterModeEnabled"
    flowGraph: "flow"
    flowNodes: "flow.nodes"
    flowEdges: "flow.edges"
    strybldrStoryboard: "kgStrybldrStoryboard"
  diagramKinds:
    - "diagramKinds: frontmatter_flow"
    - "diagramKinds: strybldr_storyboard"
  surfaces:
    - "2D Renderer: Storyboard"
    - "FloatingPanel: Strybldr"
    - "FloatingPanel: Camera"
  edgePolicy: "Explicit flow.edges are source-owned SSOT; renderers project visible connectors only."
kgWebpageView: "markdown"
strybldr_storyboard:
  version: '1'
  runId: strybldr-starter-template
  createdAtMs: '1781577600000'
  notes: Neutral starter payload for local-first Strybldr authoring. Replace source fields with operator-owned inputs before live provider calls.
  workflow:
    stages:
      - 'stages: Source'
      - 'stages: Storyboard'
      - 'stages: Elements'
      - 'stages: Runtime'
      - 'stages: Review'
      - 'stages: Publish'
    publish:
      id: starter-local-publish-packet
      label: Local publish packet
      policy: Write local packet fields only; do not claim Prod, Cloudflare, provider IDs, or stream URLs without explicit operator approval and returned live evidence.
  sources:
    - sourceUnitId: strybldr-starter-source
      workspacePath: docs/knowgrph-strybldr-starter-template.md
      relativePath: knowgrph-strybldr-starter-template.md
      originalName: Strybldr starter source
      mediaKind: doc
      mimeHint: text/markdown
      byteSize: '0'
      textHash: strybldr-starter-template
      mediaUrl: ''
  elements:
    - id: starter-source-brief-card
      sourceUnitId: strybldr-starter-source
      label: Source brief
      confidence: 1
      sourceBox: 'null'
      evidenceKind: source-metadata
      provider: knowgrph
      order: 1
      prompt: Summarize the source promise without copying transcript text or provider-generated output.
      action: Fill source fields before approving storyboard cards.
      summary: Capture the operator-owned source URL, title, author, constraints, and notes.
    - id: starter-storyboard-beats-card
      sourceUnitId: strybldr-starter-source
      label: Storyboard beats
      confidence: 1
      sourceBox: 'null'
      evidenceKind: user-edit
      provider: knowgrph
      order: 2
      prompt: Create four concise storyboard beats from the operator notes.
      action: Approve only paraphrased, source-backed beats.
      summary: Draft setup, turn, proof, and close beats as editable cards.
    - id: starter-elements-card
      sourceUnitId: strybldr-starter-source
      label: Reusable elements
      confidence: 1
      sourceBox: 'null'
      evidenceKind: user-edit
      provider: knowgrph
      order: 3
      prompt: Convert approved beats into reusable elements and style constraints.
      action: Keep generated media URLs blank until real outputs exist.
      summary: List reusable characters, locations, props, evidence cards, UI states, or shots.
    - id: starter-runtime-gate-card
      sourceUnitId: strybldr-starter-source
      label: Runtime gate
      confidence: 1
      sourceBox: 'null'
      evidenceKind: runtime-plan
      provider: knowgrph-local-animatic
      order: 4
      prompt: Render the local animatic handoff and keep live IDs empty until returned by an approved run.
      action: Generate locally first; require human approval before VideoDB, SenseNova, or other paid provider calls.
      summary: Default runtime is local animatic generation with zero paid calls and blank live provider fields.
    - id: starter-review-packet-card
      sourceUnitId: strybldr-starter-source
      label: Review packet
      confidence: 1
      sourceBox: 'null'
      evidenceKind: runtime-review
      provider: knowgrph
      order: 5
      lane: Review
      prompt: Prepare a review packet that separates local evidence from live provider evidence.
      action: Reject fabricated provider IDs, stream URLs, transcripts, or generated asset URLs.
      summary: Review provenance, approval state, cost, provider evidence, and local playback.
    - id: starter-local-publish-packet-card
      sourceUnitId: strybldr-starter-source
      label: Local publish packet
      confidence: 1
      sourceBox: 'null'
      evidenceKind: runtime-publish
      provider: knowgrph
      order: 6
      lane: Publish
      prompt: Close the workflow with a local-only packet and a visible publish gate.
      action: Keep publish scope local-only until the operator explicitly authorizes Prod or Cloudflare.
      summary: Final output is a local packet path and approval state, not a public deployment claim.
  edges:
    - id: edge-starter-source-storyboard
      source: starter-source-brief-card
      target: starter-storyboard-beats-card
      label: source_to_storyboard
    - id: edge-starter-storyboard-elements
      source: starter-storyboard-beats-card
      target: starter-elements-card
      label: storyboard_to_elements
    - id: edge-starter-elements-runtime
      source: starter-elements-card
      target: starter-runtime-gate-card
      label: elements_to_runtime
    - id: edge-starter-runtime-review
      source: starter-runtime-gate-card
      target: starter-review-packet-card
      label: runtime_to_review
    - id: edge-starter-review-publish
      source: starter-review-packet-card
      target: starter-local-publish-packet-card
      label: review_to_publish
  cards:
    - nodeId: starter-elements-card
      mediaKind: image
      mediaUrl: http://localhost:4176/api/storage/media/airvio/runs/upload-3b2fe39beaef6787/image/airvio_-3b2fe39beaef6787.jpeg?kg_media_token=eyJydW5JZCI6InVwbG9hZC0zYjJmZTM5YmVhZWY2Nzg3IiwiZXhwaXJlc0F0IjoxNzgyNjY2NzQxNTg1fQ
    - nodeId: starter-source-brief-card
      mediaKind: video
      mediaUrl: http://localhost:5173/api/storage/media/airvio/runs/upload-bb371a0f5fbda012/video/video-bb371a0f5fbda012.mp4?kg_media_token=eyJydW5JZCI6InVwbG9hZC1iYjM3MWEwZjVmYmRhMDEyIiwiZXhwaXJlc0F0IjoxNzgyNjY3MTk5MzIyfQ
    - nodeId: strybldr:source:3725310941
      mediaKind: image
      mediaUrl: https://example.com/storyboard-live-route-image.jpg
---

# Knowgrph Strybldr Starter Template

This is the minimum viable runnable Strybldr seed for a new source. It opens on the shared `storyboard` renderer, shows Source, Storyboard, Elements, Runtime, Review, and Publish cards, and can produce a local zero-paid-call animatic from approved cards.

The template is intentionally neutral. Fill in source fields, approve cards, and only then connect live providers. Runtime IDs, stream URLs, transcript text, generated media URLs, and deployment claims remain blank until returned by an operator-approved live run.

## Use

1. Open this Markdown file in Knowgrph.
2. Confirm Canvas View reports `2D Renderer: Storyboard`.
3. Edit `Source brief`, `Storyboard beats`, and `Reusable elements`.
4. Approve the storyboard cards before any paid or mutating provider call.
5. Run local generation first and confirm `paid_call_count: 0`.
6. Review the local packet before changing `publish_scope`.

## Acceptance Checklist

- [ ] Source URL and source notes are operator supplied.
- [ ] Storyboard beats are paraphrased and approved.
- [ ] Live provider fields stay blank until real responses return them.
- [ ] Local animatic generation works without `VIDEODB_API_KEY` or `SENSENOVA_API_KEY`.
- [ ] Publish scope remains `local-only` unless the operator explicitly authorizes Prod or Cloudflare.

## Guardrails

- Do not hardcode source-specific media IDs, provider IDs, stream URLs, transcripts, credentials, or generated asset URLs in repo code or tests.
- Do not remap stale renderer names or add downstream compatibility aliases.
- Do not deploy this starter to Prod or Cloudflare from this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
from this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
from this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
from this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
rse it.
from this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
om this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
red frontmatter readers can parse it.
om this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
 it.
from this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
om this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
red frontmatter readers can parse it.
om this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
red frontmatter readers can parse it.
om this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
fest" href="/manifest.webmanifest" type="application/manifest+json" />
              <link rel="alternate" type="text/plain" title="Knowgrph Source Files for LLMs" href="/api/storage/llms.txt" />
              <link rel="alternate" type="text/markdown" title="Knowgrph Source Files Index" href="/api/storage/source-files" />
              <title>knowgrph</title>
              <script type="module" src="/index.html?html-proxy&index=0.js"></script>
            </head>
            <body>
              <div id="root"></div>
              <script type="module" src="/src/main.tsx?t=1780468000213"></script>
            </body>
          </html>
          
      "visual:importance": {key: "visual:importance", type: number, value: 36}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 15.65685424949238}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -2}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 3}
    - id: {key: id, type: string, value: "ws:942f60f8::n3"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Smoke image"}
      position: {key: position, type: object, value: {"x":408,"y":78.5}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 0}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      image: {key: image, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      imageUrl: {key: imageUrl, type: text, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      media: {key: media, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      media_kind: {key: media_kind, type: string, value: "image"}
      media_url: {key: media_url, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      mediaKind: {key: mediaKind, type: string, value: "image"}
      mediaSourceKey: {key: mediaSourceKey, type: string, value: "smoke:image:canvas-drop"}
      mediaUrl: {key: mediaUrl, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      output: {key: output, type: textarea, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "image"}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "ws:942f60f8::n4"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Smoke image"}
      position: {key: position, type: object, value: {"x":408,"y":78.5}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 0}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      image: {key: image, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22/%3E"}
      imageUrl: {key: imageUrl, type: text, value: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22/%3E"}
      media: {key: media, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22/%3E"}
      media_kind: {key: media_kind, type: string, value: "image"}
      media_url: {key: media_url, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22/%3E"}
      mediaKind: {key: mediaKind, type: string, value: "image"}
      mediaSourceKey: {key: mediaSourceKey, type: string, value: "smoke:image:canvas-drop"}
      mediaUrl: {key: mediaUrl, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22/%3E"}
      output: {key: output, type: textarea, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "image"}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "ws:942f60f8::n5"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Smoke image"}
      position: {key: position, type: object, value: {"x":408,"y":78.5}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 0}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      image: {key: image, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      imageUrl: {key: imageUrl, type: text, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      media: {key: media, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      media_kind: {key: media_kind, type: string, value: "image"}
      media_url: {key: media_url, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      mediaKind: {key: mediaKind, type: string, value: "image"}
      mediaSourceKey: {key: mediaSourceKey, type: string, value: "smoke:image:canvas-drop"}
      mediaUrl: {key: mediaUrl, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      output: {key: output, type: textarea, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "image"}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "ws:942f60f8::n6"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Smoke image"}
      position: {key: position, type: object, value: {"x":408,"y":78.5}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 0}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      image: {key: image, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      imageUrl: {key: imageUrl, type: text, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      media: {key: media, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      media_kind: {key: media_kind, type: string, value: "image"}
      media_url: {key: media_url, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      mediaKind: {key: mediaKind, type: string, value: "image"}
      mediaSourceKey: {key: mediaSourceKey, type: string, value: "smoke:image:canvas-drop"}
      mediaUrl: {key: mediaUrl, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      output: {key: output, type: textarea, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "image"}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "ws:a472f238::n1"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Live route image"}
      position: {key: position, type: object, value: {"x":-811.6666666666666,"y":-794.4356060606061}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      image: {key: image, type: string, value: "https://example.com/storyboard-live-route-image.jpg"}
      imageUrl: {key: imageUrl, type: string, value: "https://example.com/storyboard-live-route-image.jpg"}
      media: {key: media, type: string, value: "https://example.com/storyboard-live-route-image.jpg"}
      media_kind: {key: media_kind, type: string, value: "image"}
      media_url: {key: media_url, type: string, value: "https://example.com/storyboard-live-route-image.jpg"}
      mediaKind: {key: mediaKind, type: string, value: "image"}
      mediaSourceKey: {key: mediaSourceKey, type: string, value: "live-route:image:canvas-drop"}
      mediaUrl: {key: mediaUrl, type: string, value: "https://example.com/storyboard-live-route-image.jpg"}
      output: {key: output, type: string, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: string, value: ""}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "image"}
    - id: {key: id, type: string, value: "ws:a472f238::starter-storyboard-beats-card"}
      type: {key: type, type: string, value: "StoryboardElement"}
      label: {key: label, type: string, value: "Storyboard beats"}
      action: {key: action, type: string, value: "Approve only paraphrased, source-backed beats."}
      byteSize: {key: byteSize, type: number, value: 0}
      confidence: {key: confidence, type: number, value: 1}
      evidenceKind: {key: evidenceKind, type: string, value: "user-edit"}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "storyboardElement"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      lane: {key: lane, type: string, value: "Elements"}
      mediaKind: {key: mediaKind, type: string, value: "doc"}
      mediaUrl: {key: mediaUrl, type: string, value: "https://example.com/storyboard-live-route-image.jpg"}
      mimeHint: {key: mimeHint, type: string, value: "text/markdown"}
      order: {key: order, type: number, value: 2}
      prompt: {key: prompt, type: string, value: "Create four concise storyboard beats from the operator notes."}
      provider: {key: provider, type: string, value: "knowgrph"}
      references: {key: references, type: array, value: ["docs/knowgrph-strybldr-starter-template.md"]}
      renderUrl: {key: renderUrl, type: string, value: null}
      sourceBox: {key: sourceBox, type: string, value: "null"}
      sourceUrl: {key: sourceUrl, type: string, value: null}
      strybldrElementId: {key: strybldrElementId, type: string, value: "starter-storyboard-beats-card"}
      strybldrRunId: {key: strybldrRunId, type: string, value: "strybldr-starter-template"}
      strybldrSourceUnitId: {key: strybldrSourceUnitId, type: string, value: "strybldr-starter-source"}
      summary: {key: summary, type: string, value: "Draft setup, turn, proof, and close beats as editable cards."}
      thumbnailUrl: {key: thumbnailUrl, type: string, value: null}
      title: {key: title, type: string, value: "Storyboard beats"}
      "visual:fill": {key: "visual:fill", type: string, value: "var(--kg-panel-bg)"}
      "visual:height": {key: "visual:height", type: number, value: 203}
      "visual:hideLabel": {key: "visual:hideLabel", type: boolean, value: true}
      "visual:preserveBody": {key: "visual:preserveBody", type: boolean, value: true}
      "visual:shape": {key: "visual:shape", type: string, value: "rect"}
      "visual:stroke": {key: "visual:stroke", type: string, value: "var(--kg-border)"}
      "visual:width": {key: "visual:width", type: number, value: 360}
  edges:
    - {"id":"ws:942f60f8::blk:md:workspace-readme:p:1:1-next-blk:md:workspace-readme:p:9:2-0","source":"ws:942f60f8::blk:md:workspace-readme:p:1:1","sourceHandle":"output","target":"ws:942f60f8::blk:md:workspace-readme:p:9:2","targetHandle":"input","label":"next"}
    - {"id":"ws:942f60f8::blk:md:workspace-readme:p:9:2-next-blk:md:workspace-readme:p:11:3-0","source":"ws:942f60f8::blk:md:workspace-readme:p:9:2","sourceHandle":"output","target":"ws:942f60f8::blk:md:workspace-readme:p:11:3","targetHandle":"input","label":"next"}
    - {"id":"ws:942f60f8::doc:md:workspace-readme-hasBlock-blk:md:workspace-readme:p:1:1-0","source":"ws:942f60f8::doc:md:workspace-readme","sourceHandle":"output","target":"ws:942f60f8::blk:md:workspace-readme:p:1:1","targetHandle":"input","label":"hasBlock"}
    - {"id":"ws:942f60f8::doc:md:workspace-readme-hasBlock-blk:md:workspace-readme:p:11:3-2","source":"ws:942f60f8::doc:md:workspace-readme","sourceHandle":"output","target":"ws:942f60f8::blk:md:workspace-readme:p:11:3","targetHandle":"input","label":"hasBlock"}
    - {"id":"ws:942f60f8::doc:md:workspace-readme-hasBlock-blk:md:workspace-readme:p:9:2-1","source":"ws:942f60f8::doc:md:workspace-readme","sourceHandle":"output","target":"ws:942f60f8::blk:md:workspace-readme:p:9:2","targetHandle":"input","label":"hasBlock"}
kgParserRoutingContract:
  version: "knowgrph-parser-routing/v1"
  parserLogic: "Opening frontmatter and authored source payloads are SSOT; parsers materialize graphData without renderer-local aliases."
  routingKeys:
    surface: "kgCanvasSurfaceMode"
    renderMode: "kgCanvasRenderMode"
    renderer: "kgCanvas2dRenderer"
    semanticMode: "kgDocumentSemanticMode"
    frontmatterMode: "kgFrontmatterModeEnabled"
    flowGraph: "flow"
    flowNodes: "flow.nodes"
    flowEdges: "flow.edges"
    strybldrStoryboard: "kgStrybldrStoryboard"
  diagramKinds:
    - "diagramKinds: frontmatter_flow"
    - "diagramKinds: strybldr_storyboard"
  surfaces:
    - "2D Renderer: Storyboard"
    - "FloatingPanel: Strybldr"
    - "FloatingPanel: Camera"
  edgePolicy: "Explicit flow.edges are source-owned SSOT; renderers project visible connectors only."
kgWebpageView: "markdown"
strybldr_storyboard:
  version: '1'
  runId: strybldr-starter-template
  createdAtMs: '1781577600000'
  notes: Neutral starter payload for local-first Strybldr authoring. Replace source fields with operator-owned inputs before live provider calls.
  workflow:
    stages:
      - 'stages: Source'
      - 'stages: Storyboard'
      - 'stages: Elements'
      - 'stages: Runtime'
      - 'stages: Review'
      - 'stages: Publish'
    publish:
      id: starter-local-publish-packet
      label: Local publish packet
      policy: Write local packet fields only; do not claim Prod, Cloudflare, provider IDs, or stream URLs without explicit operator approval and returned live evidence.
  sources:
    - sourceUnitId: strybldr-starter-source
      workspacePath: docs/knowgrph-strybldr-starter-template.md
      relativePath: knowgrph-strybldr-starter-template.md
      originalName: Strybldr starter source
      mediaKind: doc
      mimeHint: text/markdown
      byteSize: '0'
      textHash: strybldr-starter-template
      mediaUrl: ''
  elements:
    - id: starter-source-brief-card
      sourceUnitId: strybldr-starter-source
      label: Source brief
      confidence: 1
      sourceBox: 'null'
      evidenceKind: source-metadata
      provider: knowgrph
      order: 1
      prompt: Summarize the source promise without copying transcript text or provider-generated output.
      action: Fill source fields before approving storyboard cards.
      summary: Capture the operator-owned source URL, title, author, constraints, and notes.
    - id: starter-storyboard-beats-card
      sourceUnitId: strybldr-starter-source
      label: Storyboard beats
      confidence: 1
      sourceBox: 'null'
      evidenceKind: user-edit
      provider: knowgrph
      order: 2
      prompt: Create four concise storyboard beats from the operator notes.
      action: Approve only paraphrased, source-backed beats.
      summary: Draft setup, turn, proof, and close beats as editable cards.
    - id: starter-elements-card
      sourceUnitId: strybldr-starter-source
      label: Reusable elements
      confidence: 1
      sourceBox: 'null'
      evidenceKind: user-edit
      provider: knowgrph
      order: 3
      prompt: Convert approved beats into reusable elements and style constraints.
      action: Keep generated media URLs blank until real outputs exist.
      summary: List reusable characters, locations, props, evidence cards, UI states, or shots.
    - id: starter-runtime-gate-card
      sourceUnitId: strybldr-starter-source
      label: Runtime gate
      confidence: 1
      sourceBox: 'null'
      evidenceKind: runtime-plan
      provider: knowgrph-local-animatic
      order: 4
      prompt: Render the local animatic handoff and keep live IDs empty until returned by an approved run.
      action: Generate locally first; require human approval before VideoDB, SenseNova, or other paid provider calls.
      summary: Default runtime is local animatic generation with zero paid calls and blank live provider fields.
    - id: starter-review-packet-card
      sourceUnitId: strybldr-starter-source
      label: Review packet
      confidence: 1
      sourceBox: 'null'
      evidenceKind: runtime-review
      provider: knowgrph
      order: 5
      lane: Review
      prompt: Prepare a review packet that separates local evidence from live provider evidence.
      action: Reject fabricated provider IDs, stream URLs, transcripts, or generated asset URLs.
      summary: Review provenance, approval state, cost, provider evidence, and local playback.
    - id: starter-local-publish-packet-card
      sourceUnitId: strybldr-starter-source
      label: Local publish packet
      confidence: 1
      sourceBox: 'null'
      evidenceKind: runtime-publish
      provider: knowgrph
      order: 6
      lane: Publish
      prompt: Close the workflow with a local-only packet and a visible publish gate.
      action: Keep publish scope local-only until the operator explicitly authorizes Prod or Cloudflare.
      summary: Final output is a local packet path and approval state, not a public deployment claim.
  edges:
    - id: edge-starter-source-storyboard
      source: starter-source-brief-card
      target: starter-storyboard-beats-card
      label: source_to_storyboard
    - id: edge-starter-storyboard-elements
      source: starter-storyboard-beats-card
      target: starter-elements-card
      label: storyboard_to_elements
    - id: edge-starter-elements-runtime
      source: starter-elements-card
      target: starter-runtime-gate-card
      label: elements_to_runtime
    - id: edge-starter-runtime-review
      source: starter-runtime-gate-card
      target: starter-review-packet-card
      label: runtime_to_review
    - id: edge-starter-review-publish
      source: starter-review-packet-card
      target: starter-local-publish-packet-card
      label: review_to_publish
  cards:
    - nodeId: starter-elements-card
      mediaKind: image
      mediaUrl: http://localhost:4176/api/storage/media/airvio/runs/upload-3b2fe39beaef6787/image/airvio_-3b2fe39beaef6787.jpeg?kg_media_token=eyJydW5JZCI6InVwbG9hZC0zYjJmZTM5YmVhZWY2Nzg3IiwiZXhwaXJlc0F0IjoxNzgyNjY2NzQxNTg1fQ
    - nodeId: starter-source-brief-card
      mediaKind: video
      mediaUrl: http://localhost:5173/api/storage/media/airvio/runs/upload-bb371a0f5fbda012/video/video-bb371a0f5fbda012.mp4?kg_media_token=eyJydW5JZCI6InVwbG9hZC1iYjM3MWEwZjVmYmRhMDEyIiwiZXhwaXJlc0F0IjoxNzgyNjY3MTk5MzIyfQ
---

# Knowgrph Strybldr Starter Template

This is the minimum viable runnable Strybldr seed for a new source. It opens on the shared `storyboard` renderer, shows Source, Storyboard, Elements, Runtime, Review, and Publish cards, and can produce a local zero-paid-call animatic from approved cards.

The template is intentionally neutral. Fill in source fields, approve cards, and only then connect live providers. Runtime IDs, stream URLs, transcript text, generated media URLs, and deployment claims remain blank until returned by an operator-approved live run.

## Use

1. Open this Markdown file in Knowgrph.
2. Confirm Canvas View reports `2D Renderer: Storyboard`.
3. Edit `Source brief`, `Storyboard beats`, and `Reusable elements`.
4. Approve the storyboard cards before any paid or mutating provider call.
5. Run local generation first and confirm `paid_call_count: 0`.
6. Review the local packet before changing `publish_scope`.

## Acceptance Checklist

- [ ] Source URL and source notes are operator supplied.
- [ ] Storyboard beats are paraphrased and approved.
- [ ] Live provider fields stay blank until real responses return them.
- [ ] Local animatic generation works without `VIDEODB_API_KEY` or `SENSENOVA_API_KEY`.
- [ ] Publish scope remains `local-only` unless the operator explicitly authorizes Prod or Cloudflare.

## Guardrails

- Do not hardcode source-specific media IDs, provider IDs, stream URLs, transcripts, credentials, or generated asset URLs in repo code or tests.
- Do not remap stale renderer names or add downstream compatibility aliases.
- Do not deploy this starter to Prod or Cloudflare from this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
from this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
from this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
from this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
rse it.
from this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
om this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
red frontmatter readers can parse it.
om this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
 it.
from this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
om this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
red frontmatter readers can parse it.
om this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
red frontmatter readers can parse it.
om this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
ntmatter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
t.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
t.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
/main.tsx?t=1780468000213"></script>
            </body>
          </html>
          
      "visual:importance": {key: "visual:importance", type: number, value: 36}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 15.65685424949238}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -2}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 3}
    - id: {key: id, type: string, value: "ws:942f60f8::n3"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Smoke image"}
      position: {key: position, type: object, value: {"x":408,"y":78.5}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 0}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      image: {key: image, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      imageUrl: {key: imageUrl, type: text, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      media: {key: media, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      media_kind: {key: media_kind, type: string, value: "image"}
      media_url: {key: media_url, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      mediaKind: {key: mediaKind, type: string, value: "image"}
      mediaSourceKey: {key: mediaSourceKey, type: string, value: "smoke:image:canvas-drop"}
      mediaUrl: {key: mediaUrl, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      output: {key: output, type: textarea, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "image"}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "ws:942f60f8::n4"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Smoke image"}
      position: {key: position, type: object, value: {"x":408,"y":78.5}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 0}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      image: {key: image, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22/%3E"}
      imageUrl: {key: imageUrl, type: text, value: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22/%3E"}
      media: {key: media, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22/%3E"}
      media_kind: {key: media_kind, type: string, value: "image"}
      media_url: {key: media_url, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22/%3E"}
      mediaKind: {key: mediaKind, type: string, value: "image"}
      mediaSourceKey: {key: mediaSourceKey, type: string, value: "smoke:image:canvas-drop"}
      mediaUrl: {key: mediaUrl, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22/%3E"}
      output: {key: output, type: textarea, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "image"}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "ws:942f60f8::n5"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Smoke image"}
      position: {key: position, type: object, value: {"x":408,"y":78.5}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 0}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      image: {key: image, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      imageUrl: {key: imageUrl, type: text, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      media: {key: media, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      media_kind: {key: media_kind, type: string, value: "image"}
      media_url: {key: media_url, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      mediaKind: {key: mediaKind, type: string, value: "image"}
      mediaSourceKey: {key: mediaSourceKey, type: string, value: "smoke:image:canvas-drop"}
      mediaUrl: {key: mediaUrl, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      output: {key: output, type: textarea, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "image"}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "ws:942f60f8::n6"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Smoke image"}
      position: {key: position, type: object, value: {"x":408,"y":78.5}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 0}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      image: {key: image, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      imageUrl: {key: imageUrl, type: text, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      media: {key: media, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      media_kind: {key: media_kind, type: string, value: "image"}
      media_url: {key: media_url, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      mediaKind: {key: mediaKind, type: string, value: "image"}
      mediaSourceKey: {key: mediaSourceKey, type: string, value: "smoke:image:canvas-drop"}
      mediaUrl: {key: mediaUrl, type: string, value: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20360%20203%22%3E%3Crect%20width%3D%22360%22%20height%3D%22203%22%20rx%3D%2224%22%20fill%3D%22%230f172a%22/%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%22324%22%20height%3D%22167%22%20rx%3D%2218%22%20fill%3D%22%2338bdf8%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22112%22%20text-anchor%3D%22middle%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23082f49%22%3EStoryboard%20Smoke%20Image%3C/text%3E%3C/svg%3E"}
      output: {key: output, type: textarea, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "image"}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "ws:a472f238::n1"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Live route image"}
      position: {key: position, type: object, value: {"x":-811.6666666666666,"y":-794.4356060606061}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      image: {key: image, type: string, value: "https://example.com/storyboard-live-route-image.jpg"}
      imageUrl: {key: imageUrl, type: string, value: "https://example.com/storyboard-live-route-image.jpg"}
      media: {key: media, type: string, value: "https://example.com/storyboard-live-route-image.jpg"}
      media_kind: {key: media_kind, type: string, value: "image"}
      media_url: {key: media_url, type: string, value: "https://example.com/storyboard-live-route-image.jpg"}
      mediaKind: {key: mediaKind, type: string, value: "image"}
      mediaSourceKey: {key: mediaSourceKey, type: string, value: "live-route:image:canvas-drop"}
      mediaUrl: {key: mediaUrl, type: string, value: "https://example.com/storyboard-live-route-image.jpg"}
      output: {key: output, type: string, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: string, value: ""}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "image"}
    - id: {key: id, type: string, value: "ws:a472f238::starter-storyboard-beats-card"}
      type: {key: type, type: string, value: "StoryboardElement"}
      label: {key: label, type: string, value: "Storyboard beats"}
      action: {key: action, type: string, value: "Approve only paraphrased, source-backed beats."}
      byteSize: {key: byteSize, type: number, value: 0}
      confidence: {key: confidence, type: number, value: 1}
      evidenceKind: {key: evidenceKind, type: string, value: "user-edit"}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "storyboardElement"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      lane: {key: lane, type: string, value: "Elements"}
      mediaKind: {key: mediaKind, type: string, value: "doc"}
      mediaUrl: {key: mediaUrl, type: string, value: "https://example.com/storyboard-live-route-image.jpg"}
      mimeHint: {key: mimeHint, type: string, value: "text/markdown"}
      order: {key: order, type: number, value: 2}
      prompt: {key: prompt, type: string, value: "Create four concise storyboard beats from the operator notes."}
      provider: {key: provider, type: string, value: "knowgrph"}
      references: {key: references, type: array, value: ["docs/knowgrph-strybldr-starter-template.md"]}
      renderUrl: {key: renderUrl, type: string, value: null}
      sourceBox: {key: sourceBox, type: string, value: "null"}
      sourceUrl: {key: sourceUrl, type: string, value: null}
      strybldrElementId: {key: strybldrElementId, type: string, value: "starter-storyboard-beats-card"}
      strybldrRunId: {key: strybldrRunId, type: string, value: "strybldr-starter-template"}
      strybldrSourceUnitId: {key: strybldrSourceUnitId, type: string, value: "strybldr-starter-source"}
      summary: {key: summary, type: string, value: "Draft setup, turn, proof, and close beats as editable cards."}
      thumbnailUrl: {key: thumbnailUrl, type: string, value: null}
      title: {key: title, type: string, value: "Storyboard beats"}
      "visual:fill": {key: "visual:fill", type: string, value: "var(--kg-panel-bg)"}
      "visual:height": {key: "visual:height", type: number, value: 203}
      "visual:hideLabel": {key: "visual:hideLabel", type: boolean, value: true}
      "visual:preserveBody": {key: "visual:preserveBody", type: boolean, value: true}
      "visual:shape": {key: "visual:shape", type: string, value: "rect"}
      "visual:stroke": {key: "visual:stroke", type: string, value: "var(--kg-border)"}
      "visual:width": {key: "visual:width", type: number, value: 360}
  edges:
    - {"id":"ws:942f60f8::blk:md:workspace-readme:p:1:1-next-blk:md:workspace-readme:p:9:2-0","source":"ws:942f60f8::blk:md:workspace-readme:p:1:1","sourceHandle":"output","target":"ws:942f60f8::blk:md:workspace-readme:p:9:2","targetHandle":"input","label":"next"}
    - {"id":"ws:942f60f8::blk:md:workspace-readme:p:9:2-next-blk:md:workspace-readme:p:11:3-0","source":"ws:942f60f8::blk:md:workspace-readme:p:9:2","sourceHandle":"output","target":"ws:942f60f8::blk:md:workspace-readme:p:11:3","targetHandle":"input","label":"next"}
    - {"id":"ws:942f60f8::doc:md:workspace-readme-hasBlock-blk:md:workspace-readme:p:1:1-0","source":"ws:942f60f8::doc:md:workspace-readme","sourceHandle":"output","target":"ws:942f60f8::blk:md:workspace-readme:p:1:1","targetHandle":"input","label":"hasBlock"}
    - {"id":"ws:942f60f8::doc:md:workspace-readme-hasBlock-blk:md:workspace-readme:p:11:3-2","source":"ws:942f60f8::doc:md:workspace-readme","sourceHandle":"output","target":"ws:942f60f8::blk:md:workspace-readme:p:11:3","targetHandle":"input","label":"hasBlock"}
    - {"id":"ws:942f60f8::doc:md:workspace-readme-hasBlock-blk:md:workspace-readme:p:9:2-1","source":"ws:942f60f8::doc:md:workspace-readme","sourceHandle":"output","target":"ws:942f60f8::blk:md:workspace-readme:p:9:2","targetHandle":"input","label":"hasBlock"}
kgParserRoutingContract:
  version: "knowgrph-parser-routing/v1"
  parserLogic: "Opening frontmatter and authored source payloads are SSOT; parsers materialize graphData without renderer-local aliases."
  routingKeys:
    surface: "kgCanvasSurfaceMode"
    renderMode: "kgCanvasRenderMode"
    renderer: "kgCanvas2dRenderer"
    semanticMode: "kgDocumentSemanticMode"
    frontmatterMode: "kgFrontmatterModeEnabled"
    flowGraph: "flow"
    flowNodes: "flow.nodes"
    flowEdges: "flow.edges"
    strybldrStoryboard: "kgStrybldrStoryboard"
  diagramKinds:
    - "diagramKinds: frontmatter_flow"
    - "diagramKinds: strybldr_storyboard"
  surfaces:
    - "2D Renderer: Storyboard"
    - "FloatingPanel: Strybldr"
    - "FloatingPanel: Camera"
  edgePolicy: "Explicit flow.edges are source-owned SSOT; renderers project visible connectors only."
kgWebpageView: "markdown"
strybldr_storyboard:
  version: '1'
  runId: strybldr-starter-template
  createdAtMs: '1781577600000'
  notes: Neutral starter payload for local-first Strybldr authoring. Replace source fields with operator-owned inputs before live provider calls.
  workflow:
    stages:
      - 'stages: Source'
      - 'stages: Storyboard'
      - 'stages: Elements'
      - 'stages: Runtime'
      - 'stages: Review'
      - 'stages: Publish'
    publish:
      id: starter-local-publish-packet
      label: Local publish packet
      policy: Write local packet fields only; do not claim Prod, Cloudflare, provider IDs, or stream URLs without explicit operator approval and returned live evidence.
  sources:
    - sourceUnitId: strybldr-starter-source
      workspacePath: docs/knowgrph-strybldr-starter-template.md
      relativePath: knowgrph-strybldr-starter-template.md
      originalName: Strybldr starter source
      mediaKind: doc
      mimeHint: text/markdown
      byteSize: '0'
      textHash: strybldr-starter-template
      mediaUrl: ''
  elements:
    - id: starter-source-brief-card
      sourceUnitId: strybldr-starter-source
      label: Source brief
      confidence: 1
      sourceBox: 'null'
      evidenceKind: source-metadata
      provider: knowgrph
      order: 1
      prompt: Summarize the source promise without copying transcript text or provider-generated output.
      action: Fill source fields before approving storyboard cards.
      summary: Capture the operator-owned source URL, title, author, constraints, and notes.
    - id: starter-storyboard-beats-card
      sourceUnitId: strybldr-starter-source
      label: Storyboard beats
      confidence: 1
      sourceBox: 'null'
      evidenceKind: user-edit
      provider: knowgrph
      order: 2
      prompt: Create four concise storyboard beats from the operator notes.
      action: Approve only paraphrased, source-backed beats.
      summary: Draft setup, turn, proof, and close beats as editable cards.
    - id: starter-elements-card
      sourceUnitId: strybldr-starter-source
      label: Reusable elements
      confidence: 1
      sourceBox: 'null'
      evidenceKind: user-edit
      provider: knowgrph
      order: 3
      prompt: Convert approved beats into reusable elements and style constraints.
      action: Keep generated media URLs blank until real outputs exist.
      summary: List reusable characters, locations, props, evidence cards, UI states, or shots.
    - id: starter-runtime-gate-card
      sourceUnitId: strybldr-starter-source
      label: Runtime gate
      confidence: 1
      sourceBox: 'null'
      evidenceKind: runtime-plan
      provider: knowgrph-local-animatic
      order: 4
      prompt: Render the local animatic handoff and keep live IDs empty until returned by an approved run.
      action: Generate locally first; require human approval before VideoDB, SenseNova, or other paid provider calls.
      summary: Default runtime is local animatic generation with zero paid calls and blank live provider fields.
    - id: starter-review-packet-card
      sourceUnitId: strybldr-starter-source
      label: Review packet
      confidence: 1
      sourceBox: 'null'
      evidenceKind: runtime-review
      provider: knowgrph
      order: 5
      lane: Review
      prompt: Prepare a review packet that separates local evidence from live provider evidence.
      action: Reject fabricated provider IDs, stream URLs, transcripts, or generated asset URLs.
      summary: Review provenance, approval state, cost, provider evidence, and local playback.
    - id: starter-local-publish-packet-card
      sourceUnitId: strybldr-starter-source
      label: Local publish packet
      confidence: 1
      sourceBox: 'null'
      evidenceKind: runtime-publish
      provider: knowgrph
      order: 6
      lane: Publish
      prompt: Close the workflow with a local-only packet and a visible publish gate.
      action: Keep publish scope local-only until the operator explicitly authorizes Prod or Cloudflare.
      summary: Final output is a local packet path and approval state, not a public deployment claim.
  edges:
    - id: edge-starter-source-storyboard
      source: starter-source-brief-card
      target: starter-storyboard-beats-card
      label: source_to_storyboard
    - id: edge-starter-storyboard-elements
      source: starter-storyboard-beats-card
      target: starter-elements-card
      label: storyboard_to_elements
    - id: edge-starter-elements-runtime
      source: starter-elements-card
      target: starter-runtime-gate-card
      label: elements_to_runtime
    - id: edge-starter-runtime-review
      source: starter-runtime-gate-card
      target: starter-review-packet-card
      label: runtime_to_review
    - id: edge-starter-review-publish
      source: starter-review-packet-card
      target: starter-local-publish-packet-card
      label: review_to_publish
  cards:
    - nodeId: starter-elements-card
      mediaKind: image
      mediaUrl: http://localhost:4176/api/storage/media/airvio/runs/upload-3b2fe39beaef6787/image/airvio_-3b2fe39beaef6787.jpeg?kg_media_token=eyJydW5JZCI6InVwbG9hZC0zYjJmZTM5YmVhZWY2Nzg3IiwiZXhwaXJlc0F0IjoxNzgyNjY2NzQxNTg1fQ
    - nodeId: starter-source-brief-card
      mediaKind: video
      mediaUrl: http://localhost:5173/api/storage/media/airvio/runs/upload-bb371a0f5fbda012/video/video-bb371a0f5fbda012.mp4?kg_media_token=eyJydW5JZCI6InVwbG9hZC1iYjM3MWEwZjVmYmRhMDEyIiwiZXhwaXJlc0F0IjoxNzgyNjY3MTk5MzIyfQ
---

# Knowgrph Strybldr Starter Template

This is the minimum viable runnable Strybldr seed for a new source. It opens on the shared `storyboard` renderer, shows Source, Storyboard, Elements, Runtime, Review, and Publish cards, and can produce a local zero-paid-call animatic from approved cards.

The template is intentionally neutral. Fill in source fields, approve cards, and only then connect live providers. Runtime IDs, stream URLs, transcript text, generated media URLs, and deployment claims remain blank until returned by an operator-approved live run.

## Use

1. Open this Markdown file in Knowgrph.
2. Confirm Canvas View reports `2D Renderer: Storyboard`.
3. Edit `Source brief`, `Storyboard beats`, and `Reusable elements`.
4. Approve the storyboard cards before any paid or mutating provider call.
5. Run local generation first and confirm `paid_call_count: 0`.
6. Review the local packet before changing `publish_scope`.

## Acceptance Checklist

- [ ] Source URL and source notes are operator supplied.
- [ ] Storyboard beats are paraphrased and approved.
- [ ] Live provider fields stay blank until real responses return them.
- [ ] Local animatic generation works without `VIDEODB_API_KEY` or `SENSENOVA_API_KEY`.
- [ ] Publish scope remains `local-only` unless the operator explicitly authorizes Prod or Cloudflare.

## Guardrails

- Do not hardcode source-specific media IDs, provider IDs, stream URLs, transcripts, credentials, or generated asset URLs in repo code or tests.
- Do not remap stale renderer names or add downstream compatibility aliases.
- Do not deploy this starter to Prod or Cloudflare from this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
from this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
from this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
from this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
rse it.
from this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
om this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
red frontmatter readers can parse it.
om this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
 it.
from this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
om this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
red frontmatter readers can parse it.
om this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
red frontmatter readers can parse it.
om this document alone.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
ntmatter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
t.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
t.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
atter readers can parse it.
