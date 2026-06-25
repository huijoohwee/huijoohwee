---
title: "Knowgrph Vdeoxpln Demo - Interactive Visual Explanation"
graphId: "md:knowgrph-vdeoxpln-demo-interactive-visual-explanation"
doc_type: "Knowgrph Vdeoxpln Demo"
date: "2026-05-31"
lang: "en-US"
implementation_contract: "docs/documents/knowgrph-vdeoxpln-prd-tad.md"
source_truth: "canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"
validation_input_forbid_hardcode_in_repo: true
copyhardcode_forbid: true
kgCanvasSurfaceMode: "2d"
kgCanvasRenderMode: "2d"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: false
kgDocumentStructureBaselineLock: false
local_file_import_contract:
  - "Toolbar -> Launch -> Import local files"
  - "Select this Markdown document as validation input"
  - "Local import opens the 2D Flow Editor renderer"
  - "Canvas View Mode reports Flow Editor"
  - "AI Showrunner dry-run brief is runnable through local MCP start_run with zero paid calls"
  - "AI Showrunner artifacts include run state, cost log, narration manifest, and artifact manifest"
  - "Flow Editor exposes an HTML Video Renderer node with a complete HTML/CSS/data Render_Spec"
  - "HTML Video Renderer uses engine_hint=canvas-2d for browser-native MP4 smoke rendering without a system FFmpeg install"
  - "Run all writes a video/mp4 artifact and manifest through shared rich-media output owners"
  - "Rich Media Panel exposes the video tab for the generated HTML-to-MP4 artifact"
  - "Design FloatingPanel Video exposes workspace files, compositions, assets, timeline lanes, and Render MP4"
  - "Design BottomPanel Timeline exposes source-derived design video tracks instead of the generic empty Mermaid prompt"
aiShowrunnerRuntimeContract:
  schema: "knowgrph-showrunner-brief/v1"
  localMcpTool: "knowgrph.showrunner.start_run"
  mode: "dry-run"
  paidCallCount: 0
  sourceTruth:
    - "canvas/src/features/ai-showrunner"
    - "mcp/showrunner-runtime.js"
    - "mcp/local-tool-contract.js"
    - "canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"
  artifactPaths:
    - "showrunner/briefs/<run_id>/brief.md"
    - "showrunner/runs/<run_id>/state.json"
    - "showrunner/runs/<run_id>/cost-log.jsonl"
    - "showrunner/runs/<run_id>/narration-manifest.md"
    - "showrunner/runs/<run_id>/manifest.md"
htmlVideoRendererRuntimeContract:
  schema: "knowgrph-html-video-renderer/v1"
  nodeTypeId: "HtmlVideoRenderer"
  formId: "htmlVideoRenderer"
  localMcpTool: "knowgrph.html_video.render"
  recommendedDevProdEngine: "canvas-2d"
  noSystemFfmpegRequired: true
  outputMimeType: "video/mp4"
  sourceTruth:
    - "canvas/src/features/html-video-renderer/htmlVideoRendererSsot.ts"
    - "canvas/src/features/html-video-renderer/htmlVideoRendererSpec.ts"
    - "canvas/src/features/html-video-renderer/htmlVideoEngineRegistry.ts"
    - "canvas/src/features/html-video-renderer/htmlVideoFlowNode.ts"
    - "canvas/src/features/html-video-renderer/engines/canvas2dAdapter.ts"
    - "canvas/src/features/chat/richMediaRun.ts"
  renderSpec:
    html: "properties.html"
    css: "properties.css"
    data: "properties.data_json"
    durationMs: "properties.duration_ms"
    fps: "properties.fps"
    width: "properties.width"
    height: "properties.height"
    engineHint: "properties.engine_hint"
  acceptance:
    - "engine adapters are independent loadable modules"
    - "no hardcoded fallback engine is used when the selected engine is missing"
    - "canvas-2d produces a real MP4 in browser runtimes without installing ffmpeg"
    - "headless-browser remains available for operator-provided FFmpeg runtimes"
designAgentVideoWorkspaceContract:
  schema: "knowgrph-design-agent-video/v1"
  floatingPanel:
    - "Workspace files"
    - "Compositions"
    - "Assets"
    - "Timeline lanes"
    - "Render MP4"
  bottomPanel:
    tab: "timeline"
    view: "designTimeline"
    trackSource: "active Design graph through designAgentVideoSpec"
  artifactShape:
    - "semantic HTML with data-composition-id"
    - "per-track data-start data-duration data-track-index markers"
    - "virtual workspace files"
    - "composition rows"
    - "source-derived assets"
    - "timeline lanes and ticks"
kgCanvas2dRenderer: "flowEditor"
kgWorkflowManagerModeEnabled: true
socket_types:
  html_video_spec: {color: "#14b8a6", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [html_video_spec]}
  html_video_artifact: {color: "#0ea5e9", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [html_video_artifact]}
flow:
  direction: {key: direction, type: string, value: "LR"}
  edgeType: {key: edgeType, type: string, value: "smoothstep"}
  balancedViewportPreset: {key: balancedViewportPreset, type: string, value: "widgetFrontmatter"}
  computed: {key: computed, type: boolean, value: true}
  snapToGrid: {key: snapToGrid, type: boolean, value: true}
  nodes:
    - id: {key: id, type: string, value: "html_video_source_spec"}
      type: {key: type, type: string, value: "InputWidget"}
      label: {key: label, type: string, value: "Programmatic Video Render Spec"}
      position: {key: position, type: object, value: {"x":0,"y":0}}
      handles: {key: handles, type: object, value: {"source":["html","css","data_json"]}}
      css: {key: css, type: css, value: "main{width:100%;height:100%;box-sizing:border-box;display:grid;grid-template-rows:auto 1fr auto;gap:14px;padding:22px;font-family:Inter,system-ui,sans-serif;background:#f8fafc;color:#0f172a}header{display:grid;gap:8px}.eyebrow{margin:0;color:#0f766e;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em}h1{margin:0;font-size:28px;line-height:1.05;letter-spacing:0}p{margin:0}.lede{max-width:560px;color:#475569;font-size:14px;line-height:1.5}section{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;align-items:stretch}article{display:grid;grid-template-columns:auto 1fr;align-items:center;gap:10px;border:1px solid #cbd5e1;background:#ffffff;border-radius:8px;padding:12px;min-width:0}strong{display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:#111827;color:#f8fafc;font-size:13px}span{font-size:13px;font-weight:650;color:#1f2937}footer{border-top:1px solid #cbd5e1;padding-top:10px;color:#64748b;font-size:12px}"}
      data_json: {key: data_json, type: json, value: "{\"title\":\"HTML to MP4 for coding agents\",\"engine\":\"canvas-2d\",\"muxer\":\"mediabunny\",\"rasterizer\":\"html2canvas\",\"output\":\"video/mp4\",\"composition\":{\"id\":\"knowgrph-vdeoxpln-demo\",\"durationMs\":1800,\"fps\":6,\"width\":1280,\"height\":720},\"workspaceFiles\":[{\"path\":\"agent-design-video/index.html\",\"kind\":\"html\",\"role\":\"composition\"},{\"path\":\"agent-design-video/styles.css\",\"kind\":\"css\",\"role\":\"style\"},{\"path\":\"agent-design-video/data.json\",\"kind\":\"json\",\"role\":\"data\"},{\"path\":\"agent-design-video/manifest.json\",\"kind\":\"json\",\"role\":\"manifest\"}],\"timelineTracks\":[{\"id\":\"render-spec\",\"label\":\"Render Spec\",\"trackIndex\":0,\"startMs\":0,\"durationMs\":600},{\"id\":\"engine\",\"label\":\"Runtime Engine\",\"trackIndex\":1,\"startMs\":600,\"durationMs\":600},{\"id\":\"artifact\",\"label\":\"MP4 Artifact\",\"trackIndex\":2,\"startMs\":1200,\"durationMs\":600}],\"timelineLanes\":[{\"id\":\"lane:composition\",\"label\":\"Compositions\",\"tracks\":[\"render-spec\",\"engine\",\"artifact\"]}],\"steps\":[\"validate Render_Spec\",\"select runtime engine\",\"persist MP4 artifact\"]}"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"out":{"html":"html_video_spec","css":"html_video_spec","data_json":"html_video_spec"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "htmlVideoRenderSpecInput"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 3}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 3}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      html: {key: html, type: html, value: "<main data-composition-id=\"knowgrph-vdeoxpln-demo\" data-start=\"0\" data-duration=\"1.800\" aria-label=\"Agent HTML video render\"><header><p class=\"eyebrow\">Knowgrph HTML Video Renderer</p><h1>HTML to MP4 for coding agents</h1><p class=\"lede\">Turn semantic HTML, CSS, and JSON data into a real MP4 through a runtime-selected engine.</p></header><section aria-label=\"Render timeline\"><article data-start=\"0.000\" data-duration=\"0.600\" data-track-index=\"0\"><strong>1</strong><span>Validate Render_Spec</span></article><article data-start=\"0.600\" data-duration=\"0.600\" data-track-index=\"1\"><strong>2</strong><span>Select pluggable engine</span></article><article data-start=\"1.200\" data-duration=\"0.600\" data-track-index=\"2\"><strong>3</strong><span>Persist video/mp4 artifact</span></article></section><footer><p>engine_hint: canvas-2d · no system ffmpeg install</p></footer></main>"}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Source-owned HTML, CSS, and JSON data for the HTML Video Renderer node."}
      "visual:importance": {key: "visual:importance", type: number, value: 24}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 16.928203230275507}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 0}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "html_video_renderer_node"}
      type: {key: type, type: string, value: "HtmlVideoRenderer"}
      label: {key: label, type: string, value: "HTML Video Renderer Widget"}
      position: {key: position, type: object, value: {"x":420,"y":0}}
      handles: {key: handles, type: object, value: {"target":["html_in","css_in","data_json_in"],"source":["videoUrl","outputPath","renderJobId"]}}
      css: {key: css, type: textarea, value: "main{width:100%;height:100%;box-sizing:border-box;display:grid;grid-template-rows:auto 1fr auto;gap:14px;padding:22px;font-family:Inter,system-ui,sans-serif;background:#f8fafc;color:#0f172a}header{display:grid;gap:8px}.eyebrow{margin:0;color:#0f766e;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em}h1{margin:0;font-size:28px;line-height:1.05;letter-spacing:0}p{margin:0}.lede{max-width:560px;color:#475569;font-size:14px;line-height:1.5}section{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;align-items:stretch}article{display:grid;grid-template-columns:auto 1fr;align-items:center;gap:10px;border:1px solid #cbd5e1;background:#ffffff;border-radius:8px;padding:12px;min-width:0}strong{display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:#111827;color:#f8fafc;font-size:13px}span{font-size:13px;font-weight:650;color:#1f2937}footer{border-top:1px solid #cbd5e1;padding-top:10px;color:#64748b;font-size:12px}"}
      data_json: {key: data_json, type: textarea, value: "{\"title\":\"HTML to MP4 for coding agents\",\"engine\":\"canvas-2d\",\"muxer\":\"mediabunny\",\"rasterizer\":\"html2canvas\",\"output\":\"video/mp4\",\"composition\":{\"id\":\"knowgrph-vdeoxpln-demo\",\"durationMs\":1800,\"fps\":6,\"width\":1280,\"height\":720},\"workspaceFiles\":[{\"path\":\"agent-design-video/index.html\",\"kind\":\"html\",\"role\":\"composition\"},{\"path\":\"agent-design-video/styles.css\",\"kind\":\"css\",\"role\":\"style\"},{\"path\":\"agent-design-video/data.json\",\"kind\":\"json\",\"role\":\"data\"},{\"path\":\"agent-design-video/manifest.json\",\"kind\":\"json\",\"role\":\"manifest\"}],\"timelineTracks\":[{\"id\":\"render-spec\",\"label\":\"Render Spec\",\"trackIndex\":0,\"startMs\":0,\"durationMs\":600},{\"id\":\"engine\",\"label\":\"Runtime Engine\",\"trackIndex\":1,\"startMs\":600,\"durationMs\":600},{\"id\":\"artifact\",\"label\":\"MP4 Artifact\",\"trackIndex\":2,\"startMs\":1200,\"durationMs\":600}],\"timelineLanes\":[{\"id\":\"lane:composition\",\"label\":\"Compositions\",\"tracks\":[\"render-spec\",\"engine\",\"artifact\"]}],\"steps\":[\"validate Render_Spec\",\"select runtime engine\",\"persist MP4 artifact\"]}"}
      duration_ms: {key: duration_ms, type: number, value: 1800}
      engine_hint: {key: engine_hint, type: text, value: "canvas-2d"}
      engineId: {key: engineId, type: string, value: "canvas-2d"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"html_in":"html_video_spec","css_in":"html_video_spec","data_json_in":"html_video_spec"},"out":{"videoUrl":"html_video_artifact","outputPath":"html_video_artifact","renderJobId":"html_video_artifact"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "htmlVideoRenderer"}
      fps: {key: fps, type: number, value: 6}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 4}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 3}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      height: {key: height, type: number, value: 720}
      html: {key: html, type: textarea, value: "<main data-composition-id=\"knowgrph-vdeoxpln-demo\" data-start=\"0\" data-duration=\"1.800\" aria-label=\"Agent HTML video render\"><header><p class=\"eyebrow\">Knowgrph HTML Video Renderer</p><h1>HTML to MP4 for coding agents</h1><p class=\"lede\">Turn semantic HTML, CSS, and JSON data into a real MP4 through a runtime-selected engine.</p></header><section aria-label=\"Render timeline\"><article data-start=\"0.000\" data-duration=\"0.600\" data-track-index=\"0\"><strong>1</strong><span>Validate Render_Spec</span></article><article data-start=\"0.600\" data-duration=\"0.600\" data-track-index=\"1\"><strong>2</strong><span>Select pluggable engine</span></article><article data-start=\"1.200\" data-duration=\"0.600\" data-track-index=\"2\"><strong>3</strong><span>Persist video/mp4 artifact</span></article></section><footer><p>engine_hint: canvas-2d · no system ffmpeg install</p></footer></main>"}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Runtime-selected HTML-to-MP4 renderer. The canvas-2d engine path is browser-native and does not require a system FFmpeg install."}
      lastRunAt: {key: lastRunAt, type: string, value: "2026-06-25T02:24:24.046Z"}
      outputLoading: {key: outputLoading, type: boolean, value: true}
      outputLoadingKind: {key: outputLoadingKind, type: string, value: "video"}
      outputManifestPath: {key: outputManifestPath, type: string, value: "/docs/knowgrph-vdeoxpln-demo-html-video-renderer-widget-video-output.md"}
      outputMimeType: {key: outputMimeType, type: string, value: "video/mp4"}
      outputModel: {key: outputModel, type: string, value: "canvas-2d"}
      outputPath: {key: outputPath, type: string, value: "/docs/knowgrph-vdeoxpln-demo-html-video-renderer-widget.mp4"}
      outputSavedName: {key: outputSavedName, type: string, value: "knowgrph-vdeoxpln-demo-html-video-renderer-widget.mp4"}
      renderJobId: {key: renderJobId, type: string, value: "1d5ece65"}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "video"}
      videoUrl: {key: videoUrl, type: string, value: "blob:http://localhost:5173/5d319a12-fb5f-436d-a8c4-98064872a5f4"}
      "visual:importance": {key: "visual:importance", type: number, value: 28}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 18}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
      width: {key: width, type: number, value: 1280}
    - id: {key: id, type: string, value: "html_video_mp4_panel"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rendered MP4 Artifact"}
      position: {key: position, type: object, value: {"x":860,"y":0}}
      handles: {key: handles, type: object, value: {"target":["videoUrl"],"source":["videoUrl"]}}
      engineId: {key: engineId, type: string, value: "canvas-2d"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"videoUrl":"html_video_artifact"},"out":{"videoUrl":"html_video_artifact"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Rich Media Panel receives the video/mp4 artifact emitted by the HTML Video Renderer node."}
      lastRunAt: {key: lastRunAt, type: string, value: "2026-06-24T07:00:18.775Z"}
      outputManifestPath: {key: outputManifestPath, type: string, value: "/docs/knowgrph-vdeoxpln-demo-html-video-renderer-widget-video-output.md"}
      outputMimeType: {key: outputMimeType, type: string, value: "video/mp4"}
      outputModel: {key: outputModel, type: string, value: "canvas-2d"}
      outputPath: {key: outputPath, type: string, value: "/docs/knowgrph-vdeoxpln-demo-html-video-renderer-widget.mp4"}
      outputSavedName: {key: outputSavedName, type: string, value: "knowgrph-vdeoxpln-demo-html-video-renderer-widget.mp4"}
      renderJobId: {key: renderJobId, type: string, value: "1d5ece65"}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "video"}
      videoUrl: {key: videoUrl, type: text, value: "blob:http://localhost:5173/5d319a12-fb5f-436d-a8c4-98064872a5f4"}
      "visual:height": {key: "visual:height", type: number, value: 197}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:width": {key: "visual:width", type: number, value: 348}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
  edges:
    - {"id":"flow-e01","source":"html_video_source_spec","sourceHandle":"html","target":"html_video_renderer_node","targetHandle":"html_in"}
    - {"id":"flow-e02","source":"html_video_source_spec","sourceHandle":"css","target":"html_video_renderer_node","targetHandle":"css_in"}
    - {"id":"flow-e03","source":"html_video_source_spec","sourceHandle":"data_json","target":"html_video_renderer_node","targetHandle":"data_json_in"}
    - {"id":"flow-e04","source":"html_video_renderer_node","sourceHandle":"videoUrl","target":"html_video_mp4_panel","targetHandle":"videoUrl"}
modelSelection:
  selectionModel: "projected-data"            # renderers project these typed option groups as dropdowns; they do not branch on them
  scope: "local-overrides-global"             # a node-local options.model overrides the matching group's global default
  groups:
    text:
      global: "agnes-2.0-flash"               # group-global default; override per node via options.model
      options:
        - "agnes-2.0-flash"
        - "seed-2-0-mini-260215"
        - "seed-2-0-lite-260228"
        - "seed-2-0-pro-260328"
        - "seed-1-8-251228"
    image:
      global: "seedream-4-0-250828"
      options:
        - "seedream-4-0-250828"
        - "seedream-4-5-251128"
        - "seedream-5-0-260128"
    video:
      global: "seedance-1-0-pro-fast-251015"
      options:
        - "seedance-1-0-pro-fast-251015"
        - "seedance-1-5-pro-251215"
        - "dreamina-seedance-2-0-fast-260128"
        - "dreamina-seedance-2-0-260128"
kgParserRoutingContract:
  version: "knowgrph-parser-routing/v1"
  parserLogic: "opening frontmatter and authored source payloads are SSOT; parsers materialize graphData without renderer-local aliases"
  routingKeys:
    surface: "kgCanvasSurfaceMode"
    renderMode: "kgCanvasRenderMode"
    renderer: "kgCanvas2dRenderer"
    semanticMode: "kgDocumentSemanticMode"
    frontmatterMode: "kgFrontmatterModeEnabled"
    flowGraph: "flow"
    flowNodes: "flow.nodes"
    flowEdges: "flow.edges"
    mermaidBlocks: "flow_diagrams"
  diagramKinds:
    - "mermaid_flowchart"
    - "mermaid_gitgraph"
    - "mermaid_architecture"
    - "mermaid_eventmodeling"
    - "mermaid_gantt"
    - "frontmatter_flow"
  surfaces:
    - "2D Renderer: Flow Editor"
    - "BottomPanel/FloatingPanel Mermaid panels"
  edgePolicy: "explicit graphData.edges, flow.edges, workflow.edges, and diagram edges are source-owned SSOT; renderers project visible connectors only"
---

# Knowgrph Vdeoxpln Demo - Interactive Visual Explanation

This validation input turns the vdeoxpln contract into an inspectable visual
explanation. Import it into Knowgrph to verify that semantic HTML, CSS, and
data become a real MP4 through shared Flow Editor and Rich Media owners without
relying on copied reference strings, route names, demo filenames, provider keys,
or mirror-only patches.

## What The Demo Must Prove

| Stage | Required behavior | Shared owner |
|---|---|---|
| Import | The Markdown file is imported as a workspace document. | `workspaceFs.ts` |
| Parse | Frontmatter `flow.nodes` and `flow.edges` become runnable graph data. | frontmatter Flow Editor parser |
| Source | Contract, registry, chat, and renderer owners remain source-backed records. | Source Files owners |
| Visualize | The vdeoxpln workflow appears as editable Flow Editor widgets and Rich Media panels. | shared Flow Editor surface |
| Interact | The Render_Spec source feeds the HTML Video Renderer through explicit flow edges. | Flow Editor dataflow owners |
| Render MP4 | The Flow Editor `HtmlVideoRenderer` node turns semantic HTML, CSS, and data into a real `video/mp4` artifact through `engine_hint=canvas-2d`. | `html-video-renderer/*` + `richMediaRun.ts` |
| Execute | Toolbar Run all runs the flow and publishes the output to the downstream Rich Media Panel. | `flowEditorWorkflowRunAction.ts` |
| Guard | Repo code consumes this document by input path and must not copy this payload into fixtures or runtime branches. | policy tests |

## Runnable Programmatic HTML-to-MP4 Demo

This document includes a frontmatter Flow Editor graph with three runnable
nodes:

1. `Programmatic Video Render Spec` provides semantic HTML, CSS, and JSON data.
2. `HTML Video Renderer Widget` consumes the Render_Spec and sets
   `engine_hint` to `canvas-2d`.
3. `Rendered MP4 Artifact` receives the emitted `videoUrl` in a Rich Media
   Panel video tab.

The `canvas-2d` engine is the no-install Dev/Prod smoke path. It renders in the
browser runtime with `html2canvas`, WebCodecs, and Mediabunny; it does not
require a system `ffmpeg` binary. The `headless-browser` adapter remains an
independent runtime option for operators who deliberately register an FFmpeg
runtime.

Run path:

- Import this Markdown file through `Toolbar -> Launch -> Import local files`.
- Switch to the Flow Editor surface if it is not already selected.
- Run `HTML Video Renderer Widget`, or run the whole flow from Toolbar Run all.
- Verify that the downstream Rich Media Panel has a playable `video/mp4`
  artifact and that the render manifest records the selected
  `engineHint=canvas-2d`.
- Confirm the source document remains free of generated blob URLs, run IDs, and
  output paths; those fields are runtime artifacts, not validation input.

The embedded Render_Spec is intentionally small and deterministic:

```json html-video-render-spec
{
  "html": "<main data-composition-id=\"knowgrph-vdeoxpln-demo\" data-start=\"0\" data-duration=\"1.800\" aria-label=\"Agent HTML video render\"><header><p class=\"eyebrow\">Knowgrph HTML Video Renderer</p><h1>HTML to MP4 for coding agents</h1><p class=\"lede\">Turn semantic HTML, CSS, and JSON data into a real MP4 through a runtime-selected engine.</p></header><section aria-label=\"Render timeline\"><article data-start=\"0.000\" data-duration=\"0.600\" data-track-index=\"0\"><strong>1</strong><span>Validate Render_Spec</span></article><article data-start=\"0.600\" data-duration=\"0.600\" data-track-index=\"1\"><strong>2</strong><span>Select pluggable engine</span></article><article data-start=\"1.200\" data-duration=\"0.600\" data-track-index=\"2\"><strong>3</strong><span>Persist video/mp4 artifact</span></article></section><footer><p>engine_hint: canvas-2d · no system ffmpeg install</p></footer></main>",
  "css": "main{width:100%;height:100%;box-sizing:border-box;display:grid;grid-template-rows:auto 1fr auto;gap:14px;padding:22px;font-family:Inter,system-ui,sans-serif;background:#f8fafc;color:#0f172a}header{display:grid;gap:8px}.eyebrow{margin:0;color:#0f766e;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em}h1{margin:0;font-size:28px;line-height:1.05;letter-spacing:0}p{margin:0}.lede{max-width:560px;color:#475569;font-size:14px;line-height:1.5}section{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;align-items:stretch}article{display:grid;grid-template-columns:auto 1fr;align-items:center;gap:10px;border:1px solid #cbd5e1;background:#ffffff;border-radius:8px;padding:12px;min-width:0}strong{display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:#111827;color:#f8fafc;font-size:13px}span{font-size:13px;font-weight:650;color:#1f2937}footer{border-top:1px solid #cbd5e1;padding-top:10px;color:#64748b;font-size:12px}",
  "data": {
    "title": "HTML to MP4 for coding agents",
    "engine": "canvas-2d",
    "muxer": "mediabunny",
    "rasterizer": "html2canvas",
    "output": "video/mp4",
    "composition": {"id": "knowgrph-vdeoxpln-demo", "durationMs": 1800, "fps": 6, "width": 1280, "height": 720},
    "workspaceFiles": [
      {"path": "agent-design-video/index.html", "kind": "html", "role": "composition"},
      {"path": "agent-design-video/styles.css", "kind": "css", "role": "style"},
      {"path": "agent-design-video/data.json", "kind": "json", "role": "data"},
      {"path": "agent-design-video/manifest.json", "kind": "json", "role": "manifest"}
    ],
    "timelineTracks": [
      {"id": "render-spec", "label": "Render Spec", "trackIndex": 0, "startMs": 0, "durationMs": 600},
      {"id": "engine", "label": "Runtime Engine", "trackIndex": 1, "startMs": 600, "durationMs": 600},
      {"id": "artifact", "label": "MP4 Artifact", "trackIndex": 2, "startMs": 1200, "durationMs": 600}
    ],
    "timelineLanes": [{"id": "lane:composition", "label": "Compositions", "tracks": ["render-spec", "engine", "artifact"]}],
    "steps": ["validate Render_Spec", "select runtime engine", "persist MP4 artifact"]
  },
  "durationMs": 1800,
  "fps": 6,
  "width": 1280,
  "height": 720,
  "engineHint": "canvas-2d"
}
```

## Runnable AI Showrunner Dry-Run

Use this section to prove the AI Showrunner capability without a provider call.
The embedded Creative_Brief is a valid `knowgrph-showrunner-brief/v1` document.
The local MCP payload below runs it in dry-run mode and should return a
`run_id`, `run_status=complete`, `paid_call_count=0`, and a manifest path.

```yaml knowgrph-showrunner-brief
---
schema: "knowgrph-showrunner-brief/v1"
run_type: "podcast"
title: "Vdeoxpln AI Showrunner Demo"
run_id: "vdeoxpln-ai-showrunner-demo"
token_budget: 1200
max_retries: 2
max_memory_tokens: 300
dry_run: true
agent_pipeline: ["researcher","scriptwriter","director","narrator_router"]
agent_roles:
  - role: "researcher"
  - role: "scriptwriter"
  - role: "director"
  - role: "narrator_router"
narrator_voice_map:
  - speaker: "host"
    voice_endpoint_env_key: "SHOWRUNNER_HOST_VOICE_URL"
acceptance_criteria:
  - "research_pack entry is appended before scriptwriter runs"
  - "script_draft conforms to knowgrph-script/v1"
  - "narration-manifest.md is written before any TTS call"
  - "paid_call_count remains 0 in dry-run mode"
---

# Vdeoxpln AI Showrunner Demo

Run a provider-neutral podcast pipeline that explains how vdeoxpln turns an
abstract capability registry into source-backed visual workflows, review gates,
and artifact manifests.
```

```json mcp-call
{
  "tool": "knowgrph.showrunner.start_run",
  "arguments": {
    "dry_run": true,
    "brief_markdown": "---\nschema: \"knowgrph-showrunner-brief/v1\"\nrun_type: \"podcast\"\ntitle: \"Vdeoxpln AI Showrunner Demo\"\nrun_id: \"vdeoxpln-ai-showrunner-demo\"\ntoken_budget: 1200\nmax_retries: 2\nmax_memory_tokens: 300\ndry_run: true\nagent_pipeline: [\"researcher\",\"scriptwriter\",\"director\",\"narrator_router\"]\nagent_roles:\n  - role: \"researcher\"\n  - role: \"scriptwriter\"\n  - role: \"director\"\n  - role: \"narrator_router\"\nnarrator_voice_map:\n  - speaker: \"host\"\n    voice_endpoint_env_key: \"SHOWRUNNER_HOST_VOICE_URL\"\nacceptance_criteria:\n  - \"research_pack entry is appended before scriptwriter runs\"\n  - \"script_draft conforms to knowgrph-script/v1\"\n  - \"narration-manifest.md is written before any TTS call\"\n  - \"paid_call_count remains 0 in dry-run mode\"\n---\n\n# Vdeoxpln AI Showrunner Demo\n\nRun a provider-neutral podcast pipeline that explains how vdeoxpln turns an abstract capability registry into source-backed visual workflows, review gates, and artifact manifests.\n"
  }
}
```

Expected local MCP artifact shape:

- `showrunner/briefs/<run_id>/brief.md`
- `showrunner/runs/<run_id>/state.json`
- `showrunner/runs/<run_id>/cost-log.jsonl`
- `showrunner/runs/<run_id>/narration-manifest.md`
- `showrunner/runs/<run_id>/manifest.md`

## Expected Inspection Result

After import, the parsed graph should expose:

- `kgCanvasSurfaceMode=2d`
- `kgCanvasRenderMode=2d`
- `kgCanvas2dRenderer=flowEditor`
- one frontmatter Flow Editor graph containing the Render_Spec source, HTML Video Renderer, and Rich Media Panel
- one AI Showrunner branch showing the dry-run role pipeline, token budget, artifact manifest, and zero paid calls
- one Flow Editor HTML Video Renderer branch with `HtmlVideoRenderer -> RichMediaPanel`, `engine_hint=canvas-2d`, and a real `video/mp4` artifact
- one Design FloatingPanel Video workspace showing files, compositions, assets, timeline lanes, and the same runtime-registered Render MP4 action
- one Design BottomPanel Timeline view showing source-derived design video tracks when `kgCanvas2dRenderer=design` and the bottom tab is Timeline
- one Run all execution path that uses source-owned flow edges and publishes only the generated MP4 artifact

The repo must treat this file as external validation input. Runtime code and
tests may read it by caller-supplied path, but must not copy its node ids,
titles, prompts, source hashes, showrunner brief, MCP payload, HTML video
Render_Spec, or output payload into implementation fixtures.
