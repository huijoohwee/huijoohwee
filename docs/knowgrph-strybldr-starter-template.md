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
    - id: {key: id, type: string, value: "strybldr:source:3725310941"}
      type: {key: type, type: string, value: "StrybldrImageSource"}
      label: {key: label, type: string, value: "Strybldr Starter Source"}
      action: {key: action, type: string, value: "Review the source evidence into editable storyboard elements."}
      byteSize: {key: byteSize, type: number, value: 0}
      confidence: {key: confidence, type: number, value: 1}
      evidenceKind: {key: evidenceKind, type: string, value: "source-metadata"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      lane: {key: lane, type: string, value: "Source"}
      mediaKind: {key: mediaKind, type: string, value: "doc"}
      mediaUrl: {key: mediaUrl, type: string, value: "Strybldr starter source"}
      mimeHint: {key: mimeHint, type: string, value: "text/markdown"}
      order: {key: order, type: number, value: 0}
      prompt: {key: prompt, type: string, value: "Use Strybldr starter source as the reference source."}
      references: {key: references, type: array, value: ["docs/knowgrph-strybldr-starter-template.md"]}
      renderUrl: {key: renderUrl, type: string, value: null}
      sourceBox: {key: sourceBox, type: object, value: {"xmin":0,"ymin":0,"xmax":1,"ymax":1,"unit":"percentage"}}
      sourceUrl: {key: sourceUrl, type: string, value: null}
      strybldrElementId: {key: strybldrElementId, type: string, value: "strybldr:source:3725310941"}
      strybldrRunId: {key: strybldrRunId, type: string, value: "strybldr-starter-template"}
      strybldrSourceUnitId: {key: strybldrSourceUnitId, type: string, value: "strybldr-starter-source"}
      summary: {key: summary, type: string, value: "Imported document source unit: Strybldr starter source."}
      thumbnailUrl: {key: thumbnailUrl, type: string, value: null}
      title: {key: title, type: string, value: "Strybldr Starter Source"}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
    - id: {key: id, type: string, value: "strybldr:frame:3595615238"}
      type: {key: type, type: string, value: "StoryboardFrame"}
      label: {key: label, type: string, value: "Strybldr Starter Source Frame"}
      action: {key: action, type: string, value: "Review element cards, revise prompts, then send the approved sequence to video generation."}
      byteSize: {key: byteSize, type: number, value: 0}
      confidence: {key: confidence, type: number, value: 0.5}
      evidenceKind: {key: evidenceKind, type: string, value: "source-metadata"}
      "graph:degree": {key: "graph:degree", type: number, value: 7}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 6}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      lane: {key: lane, type: string, value: "Storyboard"}
      mediaKind: {key: mediaKind, type: string, value: "doc"}
      mediaUrl: {key: mediaUrl, type: string, value: "Strybldr starter source"}
      mimeHint: {key: mimeHint, type: string, value: "text/markdown"}
      order: {key: order, type: number, value: 1}
      prompt: {key: prompt, type: string, value: "Create a short video storyboard beat from Strybldr starter source."}
      references: {key: references, type: array, value: ["docs/knowgrph-strybldr-starter-template.md"]}
      renderUrl: {key: renderUrl, type: string, value: null}
      sourceBox: {key: sourceBox, type: object, value: {"xmin":0,"ymin":0,"xmax":1,"ymax":1,"unit":"percentage"}}
      sourceUrl: {key: sourceUrl, type: string, value: null}
      strybldrElementId: {key: strybldrElementId, type: string, value: "strybldr:frame:3595615238"}
      strybldrRunId: {key: strybldrRunId, type: string, value: "strybldr-starter-template"}
      strybldrSourceUnitId: {key: strybldrSourceUnitId, type: string, value: "strybldr-starter-source"}
      summary: {key: summary, type: string, value: "Frame-level storyboard card generated from the imported source."}
      thumbnailUrl: {key: thumbnailUrl, type: string, value: null}
      title: {key: title, type: string, value: "Strybldr Starter Source Frame"}
      "visual:importance": {key: "visual:importance", type: number, value: 40}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 20.583005244258363}
    - id: {key: id, type: string, value: "starter-source-brief-card"}
      type: {key: type, type: string, value: "StoryboardElement"}
      label: {key: label, type: string, value: "Source brief"}
      action: {key: action, type: string, value: "Fill source fields before approving storyboard cards."}
      byteSize: {key: byteSize, type: number, value: 0}
      confidence: {key: confidence, type: number, value: 1}
      evidenceKind: {key: evidenceKind, type: string, value: "source-metadata"}
      "graph:degree": {key: "graph:degree", type: number, value: 2}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      lane: {key: lane, type: string, value: "Elements"}
      mediaKind: {key: mediaKind, type: string, value: "doc"}
      mediaUrl: {key: mediaUrl, type: string, value: "Strybldr starter source"}
      mimeHint: {key: mimeHint, type: string, value: "text/markdown"}
      order: {key: order, type: number, value: 1}
      prompt: {key: prompt, type: string, value: "Summarize the source promise without copying transcript text or provider-generated output."}
      provider: {key: provider, type: string, value: "knowgrph"}
      references: {key: references, type: array, value: ["docs/knowgrph-strybldr-starter-template.md"]}
      renderUrl: {key: renderUrl, type: string, value: null}
      sourceBox: {key: sourceBox, type: string, value: null}
      sourceUrl: {key: sourceUrl, type: string, value: null}
      strybldrElementId: {key: strybldrElementId, type: string, value: "starter-source-brief-card"}
      strybldrRunId: {key: strybldrRunId, type: string, value: "strybldr-starter-template"}
      strybldrSourceUnitId: {key: strybldrSourceUnitId, type: string, value: "strybldr-starter-source"}
      summary: {key: summary, type: string, value: "Capture the operator-owned source URL, title, author, constraints, and notes."}
      thumbnailUrl: {key: thumbnailUrl, type: string, value: null}
      title: {key: title, type: string, value: "Source brief"}
      "visual:importance": {key: "visual:importance", type: number, value: 20}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 15.65685424949238}
    - id: {key: id, type: string, value: "starter-storyboard-beats-card"}
      type: {key: type, type: string, value: "StoryboardElement"}
      label: {key: label, type: string, value: "Storyboard beats"}
      action: {key: action, type: string, value: "Approve only paraphrased, source-backed beats."}
      byteSize: {key: byteSize, type: number, value: 0}
      confidence: {key: confidence, type: number, value: 1}
      evidenceKind: {key: evidenceKind, type: string, value: "user-edit"}
      "graph:degree": {key: "graph:degree", type: number, value: 3}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 2}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      lane: {key: lane, type: string, value: "Elements"}
      mediaKind: {key: mediaKind, type: string, value: "doc"}
      mediaUrl: {key: mediaUrl, type: string, value: "Strybldr starter source"}
      mimeHint: {key: mimeHint, type: string, value: "text/markdown"}
      order: {key: order, type: number, value: 2}
      prompt: {key: prompt, type: string, value: "Create four concise storyboard beats from the operator notes."}
      provider: {key: provider, type: string, value: "knowgrph"}
      references: {key: references, type: array, value: ["docs/knowgrph-strybldr-starter-template.md"]}
      renderUrl: {key: renderUrl, type: string, value: null}
      sourceBox: {key: sourceBox, type: string, value: null}
      sourceUrl: {key: sourceUrl, type: string, value: null}
      strybldrElementId: {key: strybldrElementId, type: string, value: "starter-storyboard-beats-card"}
      strybldrRunId: {key: strybldrRunId, type: string, value: "strybldr-starter-template"}
      strybldrSourceUnitId: {key: strybldrSourceUnitId, type: string, value: "strybldr-starter-source"}
      summary: {key: summary, type: string, value: "Draft setup, turn, proof, and close beats as editable cards."}
      thumbnailUrl: {key: thumbnailUrl, type: string, value: null}
      title: {key: title, type: string, value: "Storyboard beats"}
      "visual:importance": {key: "visual:importance", type: number, value: 24}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 16.928203230275507}
    - id: {key: id, type: string, value: "starter-elements-card"}
      type: {key: type, type: string, value: "StoryboardElement"}
      label: {key: label, type: string, value: "Reusable elements"}
      action: {key: action, type: string, value: "Keep generated media URLs blank until real outputs exist."}
      byteSize: {key: byteSize, type: number, value: 0}
      confidence: {key: confidence, type: number, value: 1}
      evidenceKind: {key: evidenceKind, type: string, value: "user-edit"}
      "graph:degree": {key: "graph:degree", type: number, value: 3}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 2}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      lane: {key: lane, type: string, value: "Elements"}
      mediaKind: {key: mediaKind, type: string, value: "doc"}
      mediaUrl: {key: mediaUrl, type: string, value: "Strybldr starter source"}
      mimeHint: {key: mimeHint, type: string, value: "text/markdown"}
      order: {key: order, type: number, value: 3}
      prompt: {key: prompt, type: string, value: "Convert approved beats into reusable elements and style constraints."}
      provider: {key: provider, type: string, value: "knowgrph"}
      references: {key: references, type: array, value: ["docs/knowgrph-strybldr-starter-template.md"]}
      renderUrl: {key: renderUrl, type: string, value: null}
      sourceBox: {key: sourceBox, type: string, value: null}
      sourceUrl: {key: sourceUrl, type: string, value: null}
      strybldrElementId: {key: strybldrElementId, type: string, value: "starter-elements-card"}
      strybldrRunId: {key: strybldrRunId, type: string, value: "strybldr-starter-template"}
      strybldrSourceUnitId: {key: strybldrSourceUnitId, type: string, value: "strybldr-starter-source"}
      summary: {key: summary, type: string, value: "List reusable characters, locations, props, evidence cards, UI states, or shots."}
      thumbnailUrl: {key: thumbnailUrl, type: string, value: null}
      title: {key: title, type: string, value: "Reusable elements"}
      "visual:importance": {key: "visual:importance", type: number, value: 24}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 16.928203230275507}
    - id: {key: id, type: string, value: "starter-runtime-gate-card"}
      type: {key: type, type: string, value: "StoryboardElement"}
      label: {key: label, type: string, value: "Runtime gate"}
      action: {key: action, type: string, value: "Generate locally first; require human approval before VideoDB, SenseNova, or other paid provider calls."}
      byteSize: {key: byteSize, type: number, value: 0}
      confidence: {key: confidence, type: number, value: 1}
      evidenceKind: {key: evidenceKind, type: string, value: "runtime-plan"}
      "graph:degree": {key: "graph:degree", type: number, value: 3}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 2}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      lane: {key: lane, type: string, value: "Runtime"}
      mediaKind: {key: mediaKind, type: string, value: "doc"}
      mediaUrl: {key: mediaUrl, type: string, value: "Strybldr starter source"}
      mimeHint: {key: mimeHint, type: string, value: "text/markdown"}
      order: {key: order, type: number, value: 4}
      prompt: {key: prompt, type: string, value: "Render the local animatic handoff and keep live IDs empty until returned by an approved run."}
      provider: {key: provider, type: string, value: "knowgrph-local-animatic"}
      references: {key: references, type: array, value: ["docs/knowgrph-strybldr-starter-template.md"]}
      renderUrl: {key: renderUrl, type: string, value: null}
      sourceBox: {key: sourceBox, type: string, value: null}
      sourceUrl: {key: sourceUrl, type: string, value: null}
      strybldrElementId: {key: strybldrElementId, type: string, value: "starter-runtime-gate-card"}
      strybldrRunId: {key: strybldrRunId, type: string, value: "strybldr-starter-template"}
      strybldrSourceUnitId: {key: strybldrSourceUnitId, type: string, value: "strybldr-starter-source"}
      summary: {key: summary, type: string, value: "Default runtime is local animatic generation with zero paid calls and blank live provider fields."}
      thumbnailUrl: {key: thumbnailUrl, type: string, value: null}
      title: {key: title, type: string, value: "Runtime gate"}
      "visual:importance": {key: "visual:importance", type: number, value: 24}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 16.928203230275507}
    - id: {key: id, type: string, value: "starter-review-packet-card"}
      type: {key: type, type: string, value: "StoryboardElement"}
      label: {key: label, type: string, value: "Review packet"}
      action: {key: action, type: string, value: "Reject fabricated provider IDs, stream URLs, transcripts, or generated asset URLs."}
      byteSize: {key: byteSize, type: number, value: 0}
      confidence: {key: confidence, type: number, value: 1}
      evidenceKind: {key: evidenceKind, type: string, value: "runtime-review"}
      "graph:degree": {key: "graph:degree", type: number, value: 3}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 2}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      lane: {key: lane, type: string, value: "Publish"}
      mediaKind: {key: mediaKind, type: string, value: "doc"}
      mediaUrl: {key: mediaUrl, type: string, value: "Strybldr starter source"}
      mimeHint: {key: mimeHint, type: string, value: "text/markdown"}
      order: {key: order, type: number, value: 5}
      prompt: {key: prompt, type: string, value: "Prepare a review packet that separates local evidence from live provider evidence."}
      provider: {key: provider, type: string, value: "knowgrph"}
      references: {key: references, type: array, value: ["docs/knowgrph-strybldr-starter-template.md"]}
      renderUrl: {key: renderUrl, type: string, value: null}
      sourceBox: {key: sourceBox, type: string, value: null}
      sourceUrl: {key: sourceUrl, type: string, value: null}
      strybldrElementId: {key: strybldrElementId, type: string, value: "starter-review-packet-card"}
      strybldrRunId: {key: strybldrRunId, type: string, value: "strybldr-starter-template"}
      strybldrSourceUnitId: {key: strybldrSourceUnitId, type: string, value: "strybldr-starter-source"}
      summary: {key: summary, type: string, value: "Review provenance, approval state, cost, provider evidence, and local playback."}
      thumbnailUrl: {key: thumbnailUrl, type: string, value: null}
      title: {key: title, type: string, value: "Review packet"}
      "visual:importance": {key: "visual:importance", type: number, value: 24}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 16.928203230275507}
    - id: {key: id, type: string, value: "starter-local-publish-packet-card"}
      type: {key: type, type: string, value: "StoryboardElement"}
      label: {key: label, type: string, value: "Local publish packet"}
      action: {key: action, type: string, value: "Keep publish scope local-only until the operator explicitly authorizes Prod or Cloudflare."}
      byteSize: {key: byteSize, type: number, value: 0}
      confidence: {key: confidence, type: number, value: 1}
      evidenceKind: {key: evidenceKind, type: string, value: "runtime-publish"}
      "graph:degree": {key: "graph:degree", type: number, value: 2}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 2}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      lane: {key: lane, type: string, value: "Publish"}
      mediaKind: {key: mediaKind, type: string, value: "doc"}
      mediaUrl: {key: mediaUrl, type: string, value: "Strybldr starter source"}
      mimeHint: {key: mimeHint, type: string, value: "text/markdown"}
      order: {key: order, type: number, value: 6}
      prompt: {key: prompt, type: string, value: "Close the workflow with a local-only packet and a visible publish gate."}
      provider: {key: provider, type: string, value: "knowgrph"}
      references: {key: references, type: array, value: ["docs/knowgrph-strybldr-starter-template.md"]}
      renderUrl: {key: renderUrl, type: string, value: null}
      sourceBox: {key: sourceBox, type: string, value: null}
      sourceUrl: {key: sourceUrl, type: string, value: null}
      strybldrElementId: {key: strybldrElementId, type: string, value: "starter-local-publish-packet-card"}
      strybldrRunId: {key: strybldrRunId, type: string, value: "strybldr-starter-template"}
      strybldrSourceUnitId: {key: strybldrSourceUnitId, type: string, value: "strybldr-starter-source"}
      summary: {key: summary, type: string, value: "Final output is a local packet path and approval state, not a public deployment claim."}
      thumbnailUrl: {key: thumbnailUrl, type: string, value: null}
      title: {key: title, type: string, value: "Local publish packet"}
      "visual:importance": {key: "visual:importance", type: number, value: 20}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 15.65685424949238}
  edges:
    - "{\"id\": \"strybldr:edge:2908212329\",\"source\":\"strybldr:source:3725310941\",\"target\":\"strybldr:frame:3595615238\",\"label\":\"frames\"}"
    - "{\"id\": \"strybldr:edge:2976418985\",\"source\":\"strybldr:frame:3595615238\",\"target\":\"starter-source-brief-card\",\"label\":\"containsElement\"}"
    - "{\"id\": \"strybldr:edge:3745157328\",\"source\":\"strybldr:frame:3595615238\",\"target\":\"starter-storyboard-beats-card\",\"label\":\"containsElement\"}"
    - "{\"id\": \"strybldr:edge:963297330\",\"source\":\"strybldr:frame:3595615238\",\"target\":\"starter-elements-card\",\"label\":\"containsElement\"}"
    - "{\"id\": \"strybldr:edge:846179949\",\"source\":\"strybldr:frame:3595615238\",\"target\":\"starter-runtime-gate-card\",\"label\":\"containsElement\"}"
    - "{\"id\": \"strybldr:edge:2092723780\",\"source\":\"strybldr:frame:3595615238\",\"target\":\"starter-review-packet-card\",\"label\":\"containsElement\"}"
    - "{\"id\": \"strybldr:edge:1614941333\",\"source\":\"strybldr:frame:3595615238\",\"target\":\"starter-local-publish-packet-card\",\"label\":\"containsElement\"}"
    - "{\"id\": \"edge-starter-source-storyboard\",\"source\":\"starter-source-brief-card\",\"target\":\"starter-storyboard-beats-card\",\"label\":\"source_to_storyboard\"}"
    - "{\"id\": \"edge-starter-storyboard-elements\",\"source\":\"starter-storyboard-beats-card\",\"target\":\"starter-elements-card\",\"label\":\"storyboard_to_elements\"}"
    - "{\"id\": \"edge-starter-elements-runtime\",\"source\":\"starter-elements-card\",\"target\":\"starter-runtime-gate-card\",\"label\":\"elements_to_runtime\"}"
    - "{\"id\": \"edge-starter-runtime-review\",\"source\":\"starter-runtime-gate-card\",\"target\":\"starter-review-packet-card\",\"label\":\"runtime_to_review\"}"
    - "{\"id\": \"edge-starter-review-publish\",\"source\":\"starter-review-packet-card\",\"target\":\"starter-local-publish-packet-card\",\"label\":\"review_to_publish\"}"
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
      lane: Elements
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
      lane: Elements
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
      lane: Elements
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
      lane: Runtime
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
---

# Knowgrph Strybldr Starter Template

This is the minimum viable runnable Strybldr seed for a new source. It opens on the shared `storyboard` renderer, shows Source, Storyboard, Elements, Runtime, Review, and Publish cards, and can produce a local zero-paid-call animatic from approved cards.

The template is intentionally neutral. Fill in source fields, approve cards, and only then connect live providers. Runtime IDs, stream URLs, transcript text, generated media URLs, and deployment claims remain blank until returned by an operator-approved live run.

## Use

1. Open this Markdown file in Knowgrph.
2. Confirm Canvas View reports `2D Renderer: Storyboard`.
3. Edit `Source brief`, `Storyboard beats`, and `Reusable elements`.
4. Approve the @storyboard cards before any paid or mutating provider call.
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
