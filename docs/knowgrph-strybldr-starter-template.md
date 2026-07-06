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
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: false
kgDocumentStructureBaselineLock: false
kgStrybldrStoryboard: true
kgBottomPanelOpen: true
kgBottomPanelTab: "timeline"
kgFloatingPanelOpen: true
kgFloatingPanelView: "strybldr"
kgSharedRendererContract:
  version: "shared-renderer-contract/v1"
  semanticIdentity: "buildScopedGraphSemanticKey"
  cardPreview: "CardMediaPreview + CardMarkdownPreview"
  widgetCard: "canvas:widgetCard"
  richMediaPanel: "RichMediaPanel"
  storyboardDisplay: "2D Renderer: Storyboard Card (default) and Widget variants"
  storyboardSurfaces: ["Cards", "Widgets", "Rich Media Panels"]
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
  paid_call_count: 0
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
  paid_call_count: 0
  source: "approved Strybldr cards from this starter document"
  output: "strybldr-video-*.md with embedded srcdoc animatic and source provenance links"
socket_types:
  strybldr_text_signal: {color: "#14b8a6", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [strybldr_text_signal]}
  strybldr_media_signal: {color: "#38bdf8", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [strybldr_media_signal]}
  strybldr_packet_signal: {color: "#f59e0b", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [strybldr_packet_signal]}
flow:
  nodes: []
  edges: []
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
    - "frontmatter_flow"
    - "strybldr_storyboard"
  surfaces:
    - "2D Renderer: Storyboard"
    - "FloatingPanel: Strybldr"
    - "FloatingPanel: Camera"
  edgePolicy: "Explicit flow.edges are source-owned SSOT; renderers project visible connectors only."
kgWebpageView: "markdown"
kgVideoSequenceSources:
  - id: "operator_source_video"
    originalName: "Seedance_2.0_is_on_Artlist-77FAnT935IE.mp4"
    relativePath: "Seedance_2.0_is_on_Artlist-77FAnT935IE.mp4"
    importMode: "url"
    sourceUrl: "http://localhost:5175/api/storage/media/airvio/runs/upload-5a525a6bbe2322b4/video/seedance_2.0_is_on_artlist-77fant935ie-5a525a6bbe2322b4.mp4?kg_media_token=eyJydW5JZCI6InVwbG9hZC01YTUyNWE2YmJlMjMyMmI0IiwiZXhwaXJlc0F0IjoxNzgzMjE0NDQyMzE4fQ"
    mimeHint: "video/mp4"
    byteSize: 3778691
    durationSeconds: 51.754666666666665
    frameRate: 24
  - id: "clip_748627097"
    originalName: "港岛仿生局.mp4"
    relativePath: "港岛仿生局.mp4"
    importMode: "url"
    sourceUrl: "http://localhost:5175/api/storage/media/airvio/runs/upload-bb371a0f5fbda012/video/video-bb371a0f5fbda012.mp4?kg_media_token=eyJydW5JZCI6InVwbG9hZC1iYjM3MWEwZjVmYmRhMDEyIiwiZXhwaXJlc0F0IjoxNzgzMjE0NDQyMzE5fQ"
    mimeHint: "video/mp4"
    byteSize: 6790608
    durationSeconds: 15.09297052154195
    frameRate: 24
kgVideoSequenceTimeline: true
flow_diagrams:
  key: "flow_diagrams"
  type: "object"
  value:
    video_sequence:
      key: video_sequence
      type: mermaid_gantt
      value: |-
        gantt
          title Video Sequence
          dateFormat HH:mm
          axisFormat %H:%M
          section Source video
          Seedance_2.0_is_on_Artlist-77FAnT935IE.mp4 : operator_source_video, kgsrc_0_51_755, kgpos_0, 0.863m
          港岛仿生局.mp4 : clip_748627097, kgsrc_0_15_093, kgpos_0_397, 0.252m
    starter_flowchart:
      key: "starter_flowchart"
      type: "mermaid_flowchart"
      floatingPanelView: "flowchart"
      floatingPanelOpen: true
      bottomPanelTab: "flowchart"
      bottomPanelOpen: true
      value: |-
        flowchart LR
          source["Source URL and operator notes"]
          storyboard["Paraphrased storyboard beats"]
          elements["Reusable elements"]
          runtime["Local animatic runtime gate"]
          review["Review packet"]
          publish["Local publish packet"]
          source --> storyboard --> elements --> runtime --> review --> publish
strybldr_storyboard:
  version: '1'
  runId: strybldr-starter-template
  createdAtMs: '1781577600000'
  notes: Neutral starter payload for local-first Strybldr authoring. Replace source fields with operator-owned inputs before live provider calls.
  workflow:
    stages:
      - Source
      - Storyboard
      - Elements
      - Runtime
      - Review
      - Publish
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
      sourceBox: null
      evidenceKind: source-metadata
      provider: knowgrph
      lane: Source
      order: 1
      prompt: Summarize the source promise without copying transcript text or provider-generated output.
      action: Fill source fields before approving storyboard cards.
      summary: Capture the operator-owned source URL, title, author, constraints, and notes.
    - id: starter-storyboard-beats-card
      sourceUnitId: strybldr-starter-source
      label: Storyboard beats
      confidence: 1
      sourceBox: null
      evidenceKind: user-edit
      provider: knowgrph
      lane: Storyboard
      order: 2
      prompt: Create four concise storyboard beats from the operator notes.
      action: Approve only paraphrased, source-backed beats.
      summary: Draft setup, turn, proof, and close beats as editable cards.
    - id: starter-elements-card
      sourceUnitId: strybldr-starter-source
      label: Reusable elements
      confidence: 1
      sourceBox: null
      evidenceKind: user-edit
      provider: knowgrph
      lane: Elements
      order: 3
      prompt: Convert approved beats into reusable elements and style constraints.
      action: Keep generated media URLs blank until real outputs exist.
      summary: List reusable characters, locations, props, evidence cards, UI states, or shots.
    - id: starter-runtime-gate-card
      sourceUnitId: strybldr-starter-source
      label: Runtime gate
      confidence: 1
      sourceBox: null
      evidenceKind: runtime-plan
      provider: knowgrph-local-animatic
      lane: Runtime
      order: 4
      prompt: Render the local animatic handoff and keep live IDs empty until returned by an approved run.
      action: Generate locally first; require human approval before VideoDB, SenseNova, or other paid provider calls.
      summary: Default runtime is local animatic generation with zero paid calls and blank live provider fields.
    - id: starter-review-packet-card
      sourceUnitId: strybldr-starter-source
      label: Review packet
      confidence: 1
      sourceBox: null
      evidenceKind: runtime-review
      provider: knowgrph
      lane: Review
      order: 5
      prompt: Prepare a review packet that separates local evidence from live provider evidence.
      action: Reject fabricated provider IDs, stream URLs, transcripts, or generated asset URLs.
      summary: Review provenance, approval state, cost, provider evidence, and local playback.
    - id: starter-local-publish-packet-card
      sourceUnitId: strybldr-starter-source
      label: Local publish packet
      confidence: 1
      sourceBox: null
      evidenceKind: runtime-publish
      provider: knowgrph
      lane: Publish
      order: 6
      prompt: Close the workflow with a local-only packet and a visible publish gate.
      action: Keep publish scope local-only until the operator explicitly authorizes Prod or Cloudflare.
      summary: Final output is a local packet path and approval state, not a public deployment claim.
  cards:
    - nodeId: starter-storyboard-beats-card
      mediaKind: image
      mediaUrl: http://localhost:5175/api/storage/media/airvio/runs/upload-017d1e965528642f/image/strybldr-starter-source-017d1e965528642f.png?kg_media_token=eyJydW5JZCI6InVwbG9hZC0wMTdkMWU5NjU1Mjg2NDJmIiwiZXhwaXJlc0F0IjoxNzgzMjE0NDQyMzE5fQ
    - nodeId: starter-elements-card
      mediaKind: image
      mediaUrl: data:image/webp;base64,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
    - nodeId: strybldr:frame:3595615238
      mediaKind: video
      mediaUrl: http://localhost:5175/api/storage/media/airvio/runs/upload-5a525a6bbe2322b4/video/seedance_2.0_is_on_artlist-77fant935ie-5a525a6bbe2322b4.mp4?kg_media_token=eyJydW5JZCI6InVwbG9hZC01YTUyNWE2YmJlMjMyMmI0IiwiZXhwaXJlc0F0IjoxNzgzMzQxNzMyNDE3fQ
    - nodeId: strybldr:source:3725310941
      mediaKind: image
      mediaUrl: http://localhost:5175/api/storage/media/airvio/runs/upload-017d1e965528642f/image/strybldr-starter-source-017d1e965528642f.png?kg_media_token=eyJydW5JZCI6InVwbG9hZC0wMTdkMWU5NjU1Mjg2NDJmIiwiZXhwaXJlc0F0IjoxNzgzMzM1ODExNTg3fQ
    - nodeId: starter-source-brief-card
      mediaKind: image
      mediaUrl: http://localhost:5175/api/storage/media/airvio/runs/upload-730fe6850f0fc26f/image/buddydrone-730fe6850f0fc26f.jpg?kg_media_token=eyJydW5JZCI6InVwbG9hZC03MzBmZTY4NTBmMGZjMjZmIiwiZXhwaXJlc0F0IjoxNzgzMzM2Mzg2Mjk4fQ
---

# Knowgrph Strybldr Starter Template

This is the minimum viable runnable Strybldr seed for a new source. It opens on the shared storyboard renderer, shows Source, Storyboard, Elements, `bg#FBCFE8:Runtime`, Review, and Publish cards, and can produce a local zero-paid-call animatic from approved cards.

The template is intentionally neutral. Fill in source fields, approve cards, and only then connect live providers. Runtime IDs, stream URLs, transcript text, generated `bg#FEF08A:media` URLs, and deployment claims remain blank until returned by an operator-approved live run.

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
