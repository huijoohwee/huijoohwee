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
  - "Flow Editor exposes an HTML Video Renderer node with a complete animated HTML/CSS/data Render_Spec"
  - "HTML Video Renderer uses engine_hint=canvas-2d for browser-native MP4 smoke rendering without a system FFmpeg install"
  - "Run all writes a video/mp4 artifact and manifest through shared rich-media output owners when the selected runtime can encode video"
  - "Run all publishes the same parsed HTML/CSS/data as an inline preview when the browser lacks MediaRecorder, canvas captureStream, or WebCodecs"
  - "Rich Media Panel exposes the generated HTML-to-MP4 artifact or inline preview without stale runtime state in this source document"
  - "FloatingPanel Media exposes image/video ingestion, parsed media metadata, annotation JSON, and rendered preview outputs from the same source-owned flow"
  - "Visual Annotation Engine nodes validate Annotation_Spec input, resolve registered model identifiers at runtime, and materialize LLM-ready JSON through shared rich-media output owners"
  - "Image object_detection output renders labelled normalized bounding boxes over the source image preview in FloatingPanel Media"
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
    - "canvas/src/features/html-video-renderer/htmlVideoWidget.ts"
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
    - "unsupported browser encoders publish a runnable HTML preview through outputSrcDoc instead of leaving the panel empty"
visualAnnotationRuntimeContract:
  schema: "knowgrph-annotation/v1"
  nodeTypeId: "AnnotationEngine"
  formId: "annotationEngine"
  localMcpTools:
    - "knowgrph.annotate.image"
    - "knowgrph.annotate.video_frame"
  annotationTasks:
    - "caption"
    - "object_detection"
    - "dense_region_caption"
  runtimeBoundary:
    - "Annotation_Spec validation happens before worker dispatch"
    - "modelHint overrides KNOWGRPH_ANNOTATION_MODEL only when it resolves to ANNOTATION_MODEL_IDS"
    - "image and video-frame annotation outputs use buildScopedGraphSemanticKey with assetUrl, modelId, and sortedTasks"
    - "annotation JSON is routed through writeRichMediaWidgetRunOutputArtifact; no parallel storage or canvas-apply path is introduced"
  boundingBoxProjection:
    sourcePath: "tasks.object_detection.objects"
    boxFormat: "[x, y, width, height]"
    coordinateSpace: "normalized-0-to-1"
    clampToMediaBounds: true
    fields:
      - "label"
      - "bbox"
      - "confidence"
    rendering:
      - "project boxes against the image content rectangle after object-fit layout"
      - "preserve source coordinates during panel resize and zoom"
      - "render semantic labels without mutating annotation JSON"
  floatingPanelMedia:
    tab: "Media"
    accepts:
      - "image asset preview"
      - "video asset preview"
      - "annotation result JSON"
      - "image bounding-box overlay"
      - "rendered preview artifact"
  sourceTruth:
    - "canvas/src/features/visual-annotation-engine/annotationEngineSsot.ts"
    - "canvas/src/features/visual-annotation-engine/annotationSpec.ts"
    - "canvas/src/features/visual-annotation-engine/annotationOrchestrator.ts"
    - "canvas/src/features/visual-annotation-engine/annotationSerializers.ts"
    - "canvas/src/features/visual-annotation-engine/annotationFlowNode.ts"
    - "canvas/src/features/visual-annotation-engine/annotationMcpTools.ts"
    - "canvas/src/features/chat/richMediaRun.ts"
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
  visual_media_asset: {color: "#22c55e", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [visual_media_asset]}
  annotation_json: {color: "#a855f7", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [annotation_json]}
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
      css:
        key: css
        type: css
        value: |
          main{width:100%;height:100%;box-sizing:border-box;display:grid;grid-template-rows:auto 1fr auto;gap:14px;padding:18px;font-family:Inter,system-ui,sans-serif;background:#0b1020;color:#f8fafc;overflow:hidden}p,h1,h2{margin:0}.hero{display:grid;grid-template-columns:1fr auto;gap:12px;align-items:start;animation:kgSceneIn .5s ease-out both}.eyebrow{color:#6cf3c0;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.hero h1{font-size:30px;line-height:1.02;letter-spacing:0}.lede{max-width:620px;color:#cbd5e1;font-size:13px;line-height:1.45}.chip{border:1px solid #334155;background:#111827;color:#e2e8f0;border-radius:8px;padding:8px 10px;font:12px ui-monospace,SFMono-Regular,Menlo,monospace}.stage{display:grid;grid-template-columns:1.35fr .9fr;gap:12px;min-height:0}.browser,.director{min-width:0;border:1px solid #334155;border-radius:8px;background:#111827;box-shadow:0 18px 40px rgba(0,0,0,.28);overflow:hidden;animation:kgLift .8s cubic-bezier(.16,1,.3,1) both}.browser{animation-delay:.12s}.bar{display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center;padding:8px 10px;border-bottom:1px solid #334155;background:#0f172a}.dot{width:8px;height:8px;border-radius:50%;background:#f97316;box-shadow:14px 0 #facc15,28px 0 #22c55e}.url{font:12px ui-monospace,SFMono-Regular,Menlo,monospace;color:#cbd5e1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.badge{font-size:11px;color:#6cf3c0}.site{display:grid;grid-template-columns:1fr auto;gap:12px;padding:16px}.site h2{font-size:20px}.site p{color:#cbd5e1;font-size:12px;line-height:1.45}.capture-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px}.capture-grid li{list-style:none;border:1px solid #475569;border-radius:8px;padding:10px;background:#1f2937;animation:kgCard .7s ease-out both}.capture-grid li:nth-child(2){animation-delay:.2s}.capture-grid li:nth-child(3){animation-delay:.4s}.preview{width:96px;min-height:118px;border:1px solid #475569;border-radius:8px;background:#f8fafc;color:#0f172a;padding:10px;animation:kgScan 2.4s ease-in-out infinite}.preview strong{display:block;font-size:13px}.preview span{display:block;margin-top:28px;height:8px;border-radius:999px;background:#14b8a6}.director{display:grid;grid-template-rows:auto 1fr}.director header{padding:12px;border-bottom:1px solid #334155}.director h2{font-size:18px}.steps{display:grid;gap:8px;padding:12px}.steps li{list-style:none;display:grid;grid-template-columns:auto 1fr;gap:9px;align-items:center;border:1px solid #334155;border-radius:8px;padding:9px;background:#0f172a;transform:translateX(18px);opacity:.15;animation:kgStep .65s ease-out both}.steps li:nth-child(1){animation-delay:.15s}.steps li:nth-child(2){animation-delay:.42s}.steps li:nth-child(3){animation-delay:.7s}.steps li:nth-child(4){animation-delay:.98s}.num{display:grid;place-items:center;width:26px;height:26px;border-radius:50%;background:#6cf3c0;color:#052e2b;font-weight:800;font-size:12px}.steps span{font-size:12px;color:#e2e8f0}.timeline{display:grid;gap:8px;border-top:1px solid #334155;padding-top:10px}.rail{height:8px;border-radius:999px;background:#1f2937;overflow:hidden}.rail::before{content:"";display:block;height:100%;width:100%;background:#6cf3c0;transform-origin:left;animation:kgProgress 6s linear infinite}.ticks{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}.ticks li{list-style:none;color:#94a3b8;font-size:11px}.ticks strong{display:block;color:#f8fafc;font-size:12px}.pulse{animation:kgPulse 1.3s ease-in-out infinite}@keyframes kgSceneIn{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@keyframes kgLift{from{opacity:0;transform:translateY(22px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes kgCard{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}@keyframes kgStep{to{opacity:1;transform:translateX(0)}}@keyframes kgScan{0%,100%{box-shadow:inset 0 0 0 0 rgba(20,184,166,.0)}50%{box-shadow:inset 0 -56px 0 rgba(20,184,166,.18)}}@keyframes kgProgress{from{transform:scaleX(0)}to{transform:scaleX(1)}}@keyframes kgPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
          
      data_json: {key: data_json, type: json, value: "{\"title\":\"URL to MP4 Agent Demo\",\"engine\":\"canvas-2d\",\"rasterizer\":\"html2canvas\",\"output\":\"video/mp4\",\"referencePattern\":\"url-to-video composition workflow\",\"composition\":{\"id\":\"knowgrph-vdeoxpln-url-to-video-demo\",\"durationMs\":6000,\"fps\":24,\"width\":1280,\"height\":720},\"sourceCapture\":{\"url\":\"https://airvio.co/knowgrph\",\"viewports\":[{\"id\":\"desktop\",\"width\":1440,\"height\":900},{\"id\":\"tablet\",\"width\":1024,\"height\":768},{\"id\":\"mobile\",\"width\":390,\"height\":844}],\"extract\":[\"brand tokens\",\"layout hierarchy\",\"copy hooks\",\"motion cues\"]},\"workspaceFiles\":[{\"path\":\"url-to-video/index.html\",\"kind\":\"html\",\"role\":\"composition\"},{\"path\":\"url-to-video/styles.css\",\"kind\":\"css\",\"role\":\"style\"},{\"path\":\"url-to-video/data.json\",\"kind\":\"json\",\"role\":\"data\"},{\"path\":\"url-to-video/storyboard.md\",\"kind\":\"markdown\",\"role\":\"storyboard\"},{\"path\":\"url-to-video/manifest.json\",\"kind\":\"json\",\"role\":\"manifest\"}],\"timelineTracks\":[{\"id\":\"capture\",\"label\":\"Capture URL\",\"trackIndex\":0,\"startMs\":0,\"durationMs\":1200},{\"id\":\"extract\",\"label\":\"Extract identity\",\"trackIndex\":1,\"startMs\":1200,\"durationMs\":1200},{\"id\":\"storyboard\",\"label\":\"Storyboard scenes\",\"trackIndex\":2,\"startMs\":2400,\"durationMs\":1200},{\"id\":\"compose\",\"label\":\"Animate HTML\",\"trackIndex\":3,\"startMs\":3600,\"durationMs\":1200},{\"id\":\"artifact\",\"label\":\"Persist MP4\",\"trackIndex\":4,\"startMs\":4800,\"durationMs\":1200}],\"timelineLanes\":[{\"id\":\"lane:capture\",\"label\":\"Source capture\",\"tracks\":[\"capture\",\"extract\"]},{\"id\":\"lane:render\",\"label\":\"Composition render\",\"tracks\":[\"storyboard\",\"compose\",\"artifact\"]}],\"animation\":{\"driver\":\"css-keyframes\",\"targets\":[\".hero\",\".browser\",\".capture-grid li\",\".steps li\",\".rail\",\".preview\"],\"keyframes\":[\"kgSceneIn\",\"kgLift\",\"kgCard\",\"kgStep\",\"kgProgress\",\"kgScan\",\"kgPulse\"]},\"steps\":[\"ingest URL source\",\"parse brand and layout signals\",\"compose seekable HTML timeline\",\"render or preview artifact\"]}"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"out":{"html":"html_video_spec","css":"html_video_spec","data_json":"html_video_spec"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "htmlVideoRenderSpecInput"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 3}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 3}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      html: {key: html, type: html, value: "<main data-composition-id=\"knowgrph-vdeoxpln-url-to-video-demo\" data-start=\"0\" data-duration=\"6.000\" aria-label=\"URL to video HTML render\"><header class=\"hero\"><section><p class=\"eyebrow\">Knowgrph URL to video pipeline</p><h1>Source page to MP4 composition</h1><p class=\"lede\">Ingest a URL, parse brand and layout signals, build a seekable HTML timeline, then publish a renderable artifact through the Rich Media Panel.</p></section><p class=\"chip\">engine_hint=canvas-2d</p></header><section class=\"stage\" aria-label=\"URL capture and composition\"><article class=\"browser\" data-start=\"0.000\" data-duration=\"3.600\" data-track-index=\"0\"><header class=\"bar\"><span class=\"dot\" aria-hidden=\"true\"></span><span class=\"url\">https://airvio.co/knowgrph</span><span class=\"badge\">captured</span></header><section class=\"site\"><section><h2>Capture the source</h2><p>Brand tokens, hierarchy, copy hooks, and layout rhythm become structured timeline data.</p><ol class=\"capture-grid\"><li>Desktop hero</li><li>Tablet flow</li><li>Mobile crop</li></ol></section><aside class=\"preview\" aria-label=\"Source preview\"><strong>Knowgrph</strong><span class=\"pulse\"></span></aside></section></article><article class=\"director\" data-start=\"2.000\" data-duration=\"3.400\" data-track-index=\"1\"><header><p class=\"eyebrow\">Storyboard compiler</p><h2>HTML, CSS, data, artifact</h2></header><ol class=\"steps\"><li><strong class=\"num\">1</strong><span>Ingest URL source</span></li><li><strong class=\"num\">2</strong><span>Parse visual semantics</span></li><li><strong class=\"num\">3</strong><span>Animate seekable HTML</span></li><li><strong class=\"num\">4</strong><span>Render MP4 or inline preview</span></li></ol></article></section><footer class=\"timeline\" aria-label=\"Render timeline\"><section class=\"rail\" aria-label=\"Render progress\"></section><ol class=\"ticks\"><li><strong>0.0s</strong>capture</li><li><strong>1.2s</strong>extract</li><li><strong>2.4s</strong>storyboard</li><li><strong>3.6s</strong>compose</li><li><strong>4.8s</strong>artifact</li></ol></footer></main>"}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Source-owned HTML, CSS, and JSON data for the HTML Video Renderer node."}
      "visual:importance": {key: "visual:importance", type: number, value: 24}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 16.928203230275507}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 0}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "html_video_renderer_node"}
      type: {key: type, type: string, value: "HtmlVideoRenderer"}
      label: {key: label, type: string, value: "HTML Video Renderer Widget"}
      position: {key: position, type: object, value: {"x":420,"y":0}}
      handles: {key: handles, type: object, value: {"target":["html_in","css_in","data_json_in"],"source":["videoUrl","outputSrcDoc","outputPath","renderJobId"]}}
      css:
        key: css
        type: textarea
        value: |
          main{width:100%;height:100%;box-sizing:border-box;display:grid;grid-template-rows:auto 1fr auto;gap:14px;padding:18px;font-family:Inter,system-ui,sans-serif;background:#0b1020;color:#f8fafc;overflow:hidden}p,h1,h2{margin:0}.hero{display:grid;grid-template-columns:1fr auto;gap:12px;align-items:start;animation:kgSceneIn .5s ease-out both}.eyebrow{color:#6cf3c0;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.hero h1{font-size:30px;line-height:1.02;letter-spacing:0}.lede{max-width:620px;color:#cbd5e1;font-size:13px;line-height:1.45}.chip{border:1px solid #334155;background:#111827;color:#e2e8f0;border-radius:8px;padding:8px 10px;font:12px ui-monospace,SFMono-Regular,Menlo,monospace}.stage{display:grid;grid-template-columns:1.35fr .9fr;gap:12px;min-height:0}.browser,.director{min-width:0;border:1px solid #334155;border-radius:8px;background:#111827;box-shadow:0 18px 40px rgba(0,0,0,.28);overflow:hidden;animation:kgLift .8s cubic-bezier(.16,1,.3,1) both}.browser{animation-delay:.12s}.bar{display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center;padding:8px 10px;border-bottom:1px solid #334155;background:#0f172a}.dot{width:8px;height:8px;border-radius:50%;background:#f97316;box-shadow:14px 0 #facc15,28px 0 #22c55e}.url{font:12px ui-monospace,SFMono-Regular,Menlo,monospace;color:#cbd5e1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.badge{font-size:11px;color:#6cf3c0}.site{display:grid;grid-template-columns:1fr auto;gap:12px;padding:16px}.site h2{font-size:20px}.site p{color:#cbd5e1;font-size:12px;line-height:1.45}.capture-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px}.capture-grid li{list-style:none;border:1px solid #475569;border-radius:8px;padding:10px;background:#1f2937;animation:kgCard .7s ease-out both}.capture-grid li:nth-child(2){animation-delay:.2s}.capture-grid li:nth-child(3){animation-delay:.4s}.preview{width:96px;min-height:118px;border:1px solid #475569;border-radius:8px;background:#f8fafc;color:#0f172a;padding:10px;animation:kgScan 2.4s ease-in-out infinite}.preview strong{display:block;font-size:13px}.preview span{display:block;margin-top:28px;height:8px;border-radius:999px;background:#14b8a6}.director{display:grid;grid-template-rows:auto 1fr}.director header{padding:12px;border-bottom:1px solid #334155}.director h2{font-size:18px}.steps{display:grid;gap:8px;padding:12px}.steps li{list-style:none;display:grid;grid-template-columns:auto 1fr;gap:9px;align-items:center;border:1px solid #334155;border-radius:8px;padding:9px;background:#0f172a;transform:translateX(18px);opacity:.15;animation:kgStep .65s ease-out both}.steps li:nth-child(1){animation-delay:.15s}.steps li:nth-child(2){animation-delay:.42s}.steps li:nth-child(3){animation-delay:.7s}.steps li:nth-child(4){animation-delay:.98s}.num{display:grid;place-items:center;width:26px;height:26px;border-radius:50%;background:#6cf3c0;color:#052e2b;font-weight:800;font-size:12px}.steps span{font-size:12px;color:#e2e8f0}.timeline{display:grid;gap:8px;border-top:1px solid #334155;padding-top:10px}.rail{height:8px;border-radius:999px;background:#1f2937;overflow:hidden}.rail::before{content:"";display:block;height:100%;width:100%;background:#6cf3c0;transform-origin:left;animation:kgProgress 6s linear infinite}.ticks{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}.ticks li{list-style:none;color:#94a3b8;font-size:11px}.ticks strong{display:block;color:#f8fafc;font-size:12px}.pulse{animation:kgPulse 1.3s ease-in-out infinite}@keyframes kgSceneIn{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@keyframes kgLift{from{opacity:0;transform:translateY(22px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes kgCard{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}@keyframes kgStep{to{opacity:1;transform:translateX(0)}}@keyframes kgScan{0%,100%{box-shadow:inset 0 0 0 0 rgba(20,184,166,.0)}50%{box-shadow:inset 0 -56px 0 rgba(20,184,166,.18)}}@keyframes kgProgress{from{transform:scaleX(0)}to{transform:scaleX(1)}}@keyframes kgPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
          
      data_json: {key: data_json, type: textarea, value: "{\"title\":\"URL to MP4 Agent Demo\",\"engine\":\"canvas-2d\",\"rasterizer\":\"html2canvas\",\"output\":\"video/mp4\",\"referencePattern\":\"url-to-video composition workflow\",\"composition\":{\"id\":\"knowgrph-vdeoxpln-url-to-video-demo\",\"durationMs\":6000,\"fps\":24,\"width\":1280,\"height\":720},\"sourceCapture\":{\"url\":\"https://airvio.co/knowgrph\",\"viewports\":[{\"id\":\"desktop\",\"width\":1440,\"height\":900},{\"id\":\"tablet\",\"width\":1024,\"height\":768},{\"id\":\"mobile\",\"width\":390,\"height\":844}],\"extract\":[\"brand tokens\",\"layout hierarchy\",\"copy hooks\",\"motion cues\"]},\"workspaceFiles\":[{\"path\":\"url-to-video/index.html\",\"kind\":\"html\",\"role\":\"composition\"},{\"path\":\"url-to-video/styles.css\",\"kind\":\"css\",\"role\":\"style\"},{\"path\":\"url-to-video/data.json\",\"kind\":\"json\",\"role\":\"data\"},{\"path\":\"url-to-video/storyboard.md\",\"kind\":\"markdown\",\"role\":\"storyboard\"},{\"path\":\"url-to-video/manifest.json\",\"kind\":\"json\",\"role\":\"manifest\"}],\"timelineTracks\":[{\"id\":\"capture\",\"label\":\"Capture URL\",\"trackIndex\":0,\"startMs\":0,\"durationMs\":1200},{\"id\":\"extract\",\"label\":\"Extract identity\",\"trackIndex\":1,\"startMs\":1200,\"durationMs\":1200},{\"id\":\"storyboard\",\"label\":\"Storyboard scenes\",\"trackIndex\":2,\"startMs\":2400,\"durationMs\":1200},{\"id\":\"compose\",\"label\":\"Animate HTML\",\"trackIndex\":3,\"startMs\":3600,\"durationMs\":1200},{\"id\":\"artifact\",\"label\":\"Persist MP4\",\"trackIndex\":4,\"startMs\":4800,\"durationMs\":1200}],\"timelineLanes\":[{\"id\":\"lane:capture\",\"label\":\"Source capture\",\"tracks\":[\"capture\",\"extract\"]},{\"id\":\"lane:render\",\"label\":\"Composition render\",\"tracks\":[\"storyboard\",\"compose\",\"artifact\"]}],\"animation\":{\"driver\":\"css-keyframes\",\"targets\":[\".hero\",\".browser\",\".capture-grid li\",\".steps li\",\".rail\",\".preview\"],\"keyframes\":[\"kgSceneIn\",\"kgLift\",\"kgCard\",\"kgStep\",\"kgProgress\",\"kgScan\",\"kgPulse\"]},\"steps\":[\"ingest URL source\",\"parse brand and layout signals\",\"compose seekable HTML timeline\",\"render or preview artifact\"]}"}
      duration_ms: {key: duration_ms, type: number, value: 6000}
      engine_hint: {key: engine_hint, type: text, value: "canvas-2d"}
      engineId: {key: engineId, type: string, value: "canvas-2d"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"html_in":"html_video_spec","css_in":"html_video_spec","data_json_in":"html_video_spec"},"out":{"videoUrl":"html_video_artifact","outputSrcDoc":"html_video_artifact","outputPath":"html_video_artifact","renderJobId":"html_video_artifact"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "htmlVideoRenderer"}
      fps: {key: fps, type: number, value: 24}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 5}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 3}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 2}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      height: {key: height, type: number, value: 720}
      html: {key: html, type: textarea, value: "<main data-composition-id=\"knowgrph-vdeoxpln-url-to-video-demo\" data-start=\"0\" data-duration=\"6.000\" aria-label=\"URL to video HTML render\"><header class=\"hero\"><section><p class=\"eyebrow\">Knowgrph URL to video pipeline</p><h1>Source page to MP4 composition</h1><p class=\"lede\">Ingest a URL, parse brand and layout signals, build a seekable HTML timeline, then publish a renderable artifact through the Rich Media Panel.</p></section><p class=\"chip\">engine_hint=canvas-2d</p></header><section class=\"stage\" aria-label=\"URL capture and composition\"><article class=\"browser\" data-start=\"0.000\" data-duration=\"3.600\" data-track-index=\"0\"><header class=\"bar\"><span class=\"dot\" aria-hidden=\"true\"></span><span class=\"url\">https://airvio.co/knowgrph</span><span class=\"badge\">captured</span></header><section class=\"site\"><section><h2>Capture the source</h2><p>Brand tokens, hierarchy, copy hooks, and layout rhythm become structured timeline data.</p><ol class=\"capture-grid\"><li>Desktop hero</li><li>Tablet flow</li><li>Mobile crop</li></ol></section><aside class=\"preview\" aria-label=\"Source preview\"><strong>Knowgrph</strong><span class=\"pulse\"></span></aside></section></article><article class=\"director\" data-start=\"2.000\" data-duration=\"3.400\" data-track-index=\"1\"><header><p class=\"eyebrow\">Storyboard compiler</p><h2>HTML, CSS, data, artifact</h2></header><ol class=\"steps\"><li><strong class=\"num\">1</strong><span>Ingest URL source</span></li><li><strong class=\"num\">2</strong><span>Parse visual semantics</span></li><li><strong class=\"num\">3</strong><span>Animate seekable HTML</span></li><li><strong class=\"num\">4</strong><span>Render MP4 or inline preview</span></li></ol></article></section><footer class=\"timeline\" aria-label=\"Render timeline\"><section class=\"rail\" aria-label=\"Render progress\"></section><ol class=\"ticks\"><li><strong>0.0s</strong>capture</li><li><strong>1.2s</strong>extract</li><li><strong>2.4s</strong>storyboard</li><li><strong>3.6s</strong>compose</li><li><strong>4.8s</strong>artifact</li></ol></footer></main>"}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Runtime-selected HTML-to-MP4 renderer. The canvas-2d engine path is browser-native and does not require a system FFmpeg install."}
      "visual:importance": {key: "visual:importance", type: number, value: 28}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 18}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
      width: {key: width, type: number, value: 1280}
    - id: {key: id, type: string, value: "html_video_mp4_panel"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rendered MP4 Artifact"}
      position: {key: position, type: object, value: {"x":860,"y":0}}
      handles: {key: handles, type: object, value: {"target":["videoUrl","outputSrcDoc"],"source":["videoUrl","outputSrcDoc"]}}
      engineId: {key: engineId, type: string, value: "canvas-2d"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"videoUrl":"html_video_artifact","outputSrcDoc":"html_video_artifact"},"out":{"videoUrl":"html_video_artifact","outputSrcDoc":"html_video_artifact"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 2}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 2}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Rich Media Panel receives the video/mp4 artifact emitted by the HTML Video Renderer node."}
      lastRunAt: {key: lastRunAt, type: string, value: "2026-06-26T09:13:22.241Z"}
      outputManifestPath: {key: outputManifestPath, type: string, value: "/docs/knowgrph-vdeoxpln-demo-html-video-renderer-widget-video-output.md"}
      outputMimeType: {key: outputMimeType, type: string, value: "video/mp4; codecs=\"avc1.42e01e\""}
      outputModel: {key: outputModel, type: string, value: "canvas-2d"}
      outputPath: {key: outputPath, type: string, value: "/docs/knowgrph-vdeoxpln-demo-html-video-renderer-widget.mp4"}
      outputSavedName: {key: outputSavedName, type: string, value: "knowgrph-vdeoxpln-demo-html-video-renderer-widget.mp4"}
      outputSrcDoc:
        key: outputSrcDoc
        type: textarea
        value: |
          <!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><style>html,body{width:100%;height:100%;margin:0;overflow:hidden;background:transparent;}body{display:grid;place-items:center;--kg-render-duration-ms:6000;--kg-render-fps:24;--kg-html-video-preview-scale:1;--kg-html-video-preview-width:1280px;--kg-html-video-preview-height:720px;}main{width:100%;height:100%;box-sizing:border-box;display:grid;grid-template-rows:auto 1fr auto;gap:14px;padding:18px;font-family:Inter,system-ui,sans-serif;background:#0b1020;color:#f8fafc;overflow:hidden}p,h1,h2{margin:0}.hero{display:grid;grid-template-columns:1fr auto;gap:12px;align-items:start;animation:kgSceneIn .5s ease-out both}.eyebrow{color:#6cf3c0;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.hero h1{font-size:30px;line-height:1.02;letter-spacing:0}.lede{max-width:620px;color:#cbd5e1;font-size:13px;line-height:1.45}.chip{border:1px solid #334155;background:#111827;color:#e2e8f0;border-radius:8px;padding:8px 10px;font:12px ui-monospace,SFMono-Regular,Menlo,monospace}.stage{display:grid;grid-template-columns:1.35fr .9fr;gap:12px;min-height:0}.browser,.director{min-width:0;border:1px solid #334155;border-radius:8px;background:#111827;box-shadow:0 18px 40px rgba(0,0,0,.28);overflow:hidden;animation:kgLift .8s cubic-bezier(.16,1,.3,1) both}.browser{animation-delay:.12s}.bar{display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center;padding:8px 10px;border-bottom:1px solid #334155;background:#0f172a}.dot{width:8px;height:8px;border-radius:50%;background:#f97316;box-shadow:14px 0 #facc15,28px 0 #22c55e}.url{font:12px ui-monospace,SFMono-Regular,Menlo,monospace;color:#cbd5e1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.badge{font-size:11px;color:#6cf3c0}.site{display:grid;grid-template-columns:1fr auto;gap:12px;padding:16px}.site h2{font-size:20px}.site p{color:#cbd5e1;font-size:12px;line-height:1.45}.capture-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px}.capture-grid li{list-style:none;border:1px solid #475569;border-radius:8px;padding:10px;background:#1f2937;animation:kgCard .7s ease-out both}.capture-grid li:nth-child(2){animation-delay:.2s}.capture-grid li:nth-child(3){animation-delay:.4s}.preview{width:96px;min-height:118px;border:1px solid #475569;border-radius:8px;background:#f8fafc;color:#0f172a;padding:10px;animation:kgScan 2.4s ease-in-out infinite}.preview strong{display:block;font-size:13px}.preview span{display:block;margin-top:28px;height:8px;border-radius:999px;background:#14b8a6}.director{display:grid;grid-template-rows:auto 1fr}.director header{padding:12px;border-bottom:1px solid #334155}.director h2{font-size:18px}.steps{display:grid;gap:8px;padding:12px}.steps li{list-style:none;display:grid;grid-template-columns:auto 1fr;gap:9px;align-items:center;border:1px solid #334155;border-radius:8px;padding:9px;background:#0f172a;transform:translateX(18px);opacity:.15;animation:kgStep .65s ease-out both}.steps li:nth-child(1){animation-delay:.15s}.steps li:nth-child(2){animation-delay:.42s}.steps li:nth-child(3){animation-delay:.7s}.steps li:nth-child(4){animation-delay:.98s}.num{display:grid;place-items:center;width:26px;height:26px;border-radius:50%;background:#6cf3c0;color:#052e2b;font-weight:800;font-size:12px}.steps span{font-size:12px;color:#e2e8f0}.timeline{display:grid;gap:8px;border-top:1px solid #334155;padding-top:10px}.rail{height:8px;border-radius:999px;background:#1f2937;overflow:hidden}.rail::before{content:"";display:block;height:100%;width:100%;background:#6cf3c0;transform-origin:left;animation:kgProgress 6s linear infinite}.ticks{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}.ticks li{list-style:none;color:#94a3b8;font-size:11px}.ticks strong{display:block;color:#f8fafc;font-size:12px}.pulse{animation:kgPulse 1.3s ease-in-out infinite}@keyframes kgSceneIn{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@keyframes kgLift{from{opacity:0;transform:translateY(22px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes kgCard{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}@keyframes kgStep{to{opacity:1;transform:translateX(0)}}@keyframes kgScan{0%,100%{box-shadow:inset 0 0 0 0 rgba(20,184,166,.0)}50%{box-shadow:inset 0 -56px 0 rgba(20,184,166,.18)}}@keyframes kgProgress{from{transform:scaleX(0)}to{transform:scaleX(1)}}@keyframes kgPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
          figure[data-kg-html-video-preview-frame]{position:relative;display:block;width:100%;height:auto;max-width:100%;max-height:100%;margin:0;overflow:hidden;background:transparent;aspect-ratio:1280/720;}section[data-kg-html-video-preview-stage]{position:absolute;left:0;top:0;width:1280px;height:720px;overflow:hidden;transform-origin:0 0;transform:scale(var(--kg-html-video-preview-scale,1));}</style></head><body><figure data-kg-html-video-preview-frame aria-label="HTML video preview frame"><section data-kg-html-video-preview-stage><main data-composition-id="knowgrph-vdeoxpln-url-to-video-demo" data-start="0" data-duration="6.000" aria-label="URL to video HTML render"><header class="hero"><section><p class="eyebrow">Knowgrph URL to video pipeline</p><h1>Source page to MP4 composition</h1><p class="lede">Ingest a URL, parse brand and layout signals, build a seekable HTML timeline, then publish a renderable artifact through the Rich Media Panel.</p></section><p class="chip">engine_hint=canvas-2d</p></header><section class="stage" aria-label="URL capture and composition"><article class="browser" data-start="0.000" data-duration="3.600" data-track-index="0"><header class="bar"><span class="dot" aria-hidden="true"></span><span class="url">https://airvio.co/knowgrph</span><span class="badge">captured</span></header><section class="site"><section><h2>Capture the source</h2><p>Brand tokens, hierarchy, copy hooks, and layout rhythm become structured timeline data.</p><ol class="capture-grid"><li>Desktop hero</li><li>Tablet flow</li><li>Mobile crop</li></ol></section><aside class="preview" aria-label="Source preview"><strong>Knowgrph</strong><span class="pulse"></span></aside></section></article><article class="director" data-start="2.000" data-duration="3.400" data-track-index="1"><header><p class="eyebrow">Storyboard compiler</p><h2>HTML, CSS, data, artifact</h2></header><ol class="steps"><li><strong class="num">1</strong><span>Ingest URL source</span></li><li><strong class="num">2</strong><span>Parse visual semantics</span></li><li><strong class="num">3</strong><span>Animate seekable HTML</span></li><li><strong class="num">4</strong><span>Render MP4 or inline preview</span></li></ol></article></section><footer class="timeline" aria-label="Render timeline"><section class="rail" aria-label="Render progress"></section><ol class="ticks"><li><strong>0.0s</strong>capture</li><li><strong>1.2s</strong>extract</li><li><strong>2.4s</strong>storyboard</li><li><strong>3.6s</strong>compose</li><li><strong>4.8s</strong>artifact</li></ol></footer></main></section></figure><script type="application/json" id="knowgrph-html-video-data">{"title":"URL to MP4 Agent Demo","engine":"canvas-2d","rasterizer":"html2canvas","output":"video/mp4","referencePattern":"url-to-video composition workflow","composition":{"id":"knowgrph-vdeoxpln-url-to-video-demo","durationMs":6000,"fps":24,"width":1280,"height":720},"sourceCapture":{"url":"https://airvio.co/knowgrph","viewports":[{"id":"desktop","width":1440,"height":900},{"id":"tablet","width":1024,"height":768},{"id":"mobile","width":390,"height":844}],"extract":["brand tokens","layout hierarchy","copy hooks","motion cues"]},"workspaceFiles":[{"path":"url-to-video/index.html","kind":"html","role":"composition"},{"path":"url-to-video/styles.css","kind":"css","role":"style"},{"path":"url-to-video/data.json","kind":"json","role":"data"},{"path":"url-to-video/storyboard.md","kind":"markdown","role":"storyboard"},{"path":"url-to-video/manifest.json","kind":"json","role":"manifest"}],"timelineTracks":[{"id":"capture","label":"Capture URL","trackIndex":0,"startMs":0,"durationMs":1200},{"id":"extract","label":"Extract identity","trackIndex":1,"startMs":1200,"durationMs":1200},{"id":"storyboard","label":"Storyboard scenes","trackIndex":2,"startMs":2400,"durationMs":1200},{"id":"compose","label":"Animate HTML","trackIndex":3,"startMs":3600,"durationMs":1200},{"id":"artifact","label":"Persist MP4","trackIndex":4,"startMs":4800,"durationMs":1200}],"timelineLanes":[{"id":"lane:capture","label":"Source capture","tracks":["capture","extract"]},{"id":"lane:render","label":"Composition render","tracks":["storyboard","compose","artifact"]}],"animation":{"driver":"css-keyframes","targets":[".hero",".browser",".capture-grid li",".steps li",".rail",".preview"],"keyframes":["kgSceneIn","kgLift","kgCard","kgStep","kgProgress","kgScan","kgPulse"]},"steps":["ingest URL source","parse brand and layout signals","compose seekable HTML timeline","render or preview artifact"]}</script><script>(function(){var frame=document.querySelector("[data-kg-html-video-preview-frame]");var stage=document.querySelector("[data-kg-html-video-preview-stage]");var dataScript=document.getElementById("knowgrph-html-video-data");var sourceWidth=1280;var sourceHeight=720;var durationMs=6000;var raf=0;function readData(){try{return dataScript&&dataScript.textContent?JSON.parse(dataScript.textContent):{};}catch(e){return {};}}function fit(){raf=0;if(!frame||!stage)return;var host=document.body||document.documentElement;var bounds=host.getBoundingClientRect();var width=Math.max(1,bounds.width||host.clientWidth||sourceWidth);var height=Math.max(1,bounds.height||host.clientHeight||sourceHeight);var frameWidth=Math.min(width,height*sourceWidth/sourceHeight);var frameHeight=frameWidth*sourceHeight/sourceWidth;if(frameHeight>height){frameHeight=height;frameWidth=frameHeight*sourceWidth/sourceHeight;}var scale=frameWidth/sourceWidth;frame.style.width=frameWidth+"px";frame.style.height=frameHeight+"px";stage.style.setProperty("--kg-html-video-preview-scale",String(scale));stage.style.setProperty("--kg-html-video-preview-width",sourceWidth+"px");stage.style.setProperty("--kg-html-video-preview-height",sourceHeight+"px");}function schedule(){if(raf)return;raf=requestAnimationFrame(fit);}function syncCssAnimations(seconds){if(!stage)return;var nodes=[stage].concat(Array.prototype.slice.call(stage.querySelectorAll("*")));for(var i=0;i<nodes.length;i+=1){var node=nodes[i];try{var computed=window.getComputedStyle(node);if(!computed||computed.animationName==="none")continue;node.style.animationDelay="-"+Math.max(0,seconds)+"s";node.style.animationPlayState="paused";}catch(e){}}}var transportRaf=0;function cancelTransportPlayback(){if(transportRaf){cancelAnimationFrame(transportRaf);transportRaf=0;}}function startTransportPlayback(startTimeMs,playbackRate){cancelTransportPlayback();var baseTimeMs=Number.isFinite(Number(startTimeMs))?Math.max(0,Number(startTimeMs)):0;var rate=Number.isFinite(Number(playbackRate))&&Number(playbackRate)>0?Number(playbackRate):1;var baseNow=performance.now();function tick(now){var nextTimeMs=Math.min(durationMs,baseTimeMs+Math.max(0,now-baseNow)*rate);window.__knowgrphRenderFrame(nextTimeMs);if(nextTimeMs>=durationMs){transportRaf=0;return;}transportRaf=requestAnimationFrame(tick);}transportRaf=requestAnimationFrame(tick);}window.__KNOWGRPH_TIMELINE_TRANSPORT_NATIVE_LOOP__=true;window.__KNOWGRPH_HTML_VIDEO_DATA__=readData();window.__KNOWGRPH_RENDER_TIME_MS__=0;window.__knowgrphRenderFrame=async function(timeMs){var safeTimeMs=Number.isFinite(Number(timeMs))?Math.max(0,Math.min(durationMs,Number(timeMs))):0;var seconds=safeTimeMs/1000;window.__KNOWGRPH_RENDER_TIME_MS__=safeTimeMs;document.documentElement.style.setProperty("--kg-render-time-ms",String(safeTimeMs));document.documentElement.style.setProperty("--kg-render-time-s",String(seconds));document.documentElement.style.setProperty("--kg-render-progress",String(durationMs>0?safeTimeMs/durationMs:0));try{if(typeof window.__hyperframesSeek==="function")window.__hyperframesSeek(seconds,{timeMs:safeTimeMs,data:window.__KNOWGRPH_HTML_VIDEO_DATA__});}catch(e){}try{if(Array.isArray(window.__timelines)){window.__timelines.forEach(function(timeline){if(timeline&&typeof timeline.seek==="function")timeline.seek(seconds,false);else if(timeline&&typeof timeline.time==="function")timeline.time(seconds);});}}catch(e){}syncCssAnimations(seconds);try{window.dispatchEvent(new CustomEvent("knowgrph:render-frame",{detail:{timeMs:safeTimeMs,seconds:seconds,data:window.__KNOWGRPH_HTML_VIDEO_DATA__}}));}catch(e){}await new Promise(function(resolve){requestAnimationFrame(function(){requestAnimationFrame(resolve);});});};window.__knowgrphRenderFrame(0);window.addEventListener("message",function(event){var payload=event&&event.data;if(!payload||typeof payload!=="object"||payload.type!=="knowgrph:timeline-transport-frame")return;var timeMs=Number.isFinite(Number(payload.timeMs))?Number(payload.timeMs):0;window.__knowgrphRenderFrame(timeMs);if(payload.playing){startTransportPlayback(timeMs,payload.playbackRate);}else{cancelTransportPlayback();}});try{if(window.ResizeObserver&&frame){var ro=new ResizeObserver(schedule);ro.observe(frame);}}catch(e){}window.addEventListener("load",schedule,{passive:true});window.addEventListener("resize",schedule,{passive:true});schedule();setTimeout(schedule,80);setTimeout(schedule,280);})();</script></body></html>
          
      renderJobId: {key: renderJobId, type: string, value: "0f79237f"}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "video"}
      videoUrl: {key: videoUrl, type: text, value: "blob:http://localhost:5173/3b3a9bf7-5365-4e7b-9058-18b059d30a04"}
      "visual:height": {key: "visual:height", type: number, value: 472}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:width": {key: "visual:width", type: number, value: 839}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "floating_media_ingestion_source"}
      type: {key: type, type: string, value: "InputWidget"}
      label: {key: label, type: string, value: "FloatingPanel Media Source"}
      position: {key: position, type: object, value: {"x":0,"y":420}}
      handles: {key: handles, type: object, value: {"source":["image_asset_url","video_asset_url","image_tasks","video_tasks","frame_timestamp_ms"]}}
      assetCatalog: {key: assetCatalog, type: json, value: "{\"schema\":\"knowgrph-media-ingestion/v1\",\"surface\":\"FloatingPanel Media\",\"assets\":[{\"id\":\"media:image:demo\",\"assetType\":\"image\",\"assetUrl\":\"workspace://media/demo-image\",\"roles\":[\"preview\",\"annotation-source\",\"bounding-box-overlay-source\"]},{\"id\":\"media:video:demo\",\"assetType\":\"video\",\"assetUrl\":\"workspace://media/demo-video\",\"roles\":[\"preview\",\"video-frame-annotation-source\"]}],\"parseOutputs\":[\"mime family\",\"asset type\",\"semantic source key\",\"preview role\",\"annotation task set\"],\"renderOutputs\":[\"media preview\",\"annotation JSON\",\"image bounding-box overlay\",\"LLM-ready payload\"]}"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"out":{"image_asset_url":"visual_media_asset","video_asset_url":"visual_media_asset","image_tasks":"annotation_json","video_tasks":"annotation_json","frame_timestamp_ms":"annotation_json"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "mediaIngestionSource"}
      frame_timestamp_ms: {key: frame_timestamp_ms, type: number, value: 1200}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 6}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 6}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      image_asset_url: {key: image_asset_url, type: string, value: "workspace://media/demo-image"}
      image_tasks: {key: image_tasks, type: string, value: "caption,object_detection,dense_region_caption"}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "FloatingPanel Media source describes image/video assets and parsed annotation task inputs without generated runtime artifacts."}
      video_asset_url: {key: video_asset_url, type: string, value: "workspace://media/demo-video"}
      video_tasks: {key: video_tasks, type: string, value: "caption,object_detection"}
      "visual:importance": {key: "visual:importance", type: number, value: 22}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 16}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 0}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 1}
    - id: {key: id, type: string, value: "image_annotation_engine_node"}
      type: {key: type, type: string, value: "AnnotationEngine"}
      label: {key: label, type: string, value: "Image Annotation Engine"}
      position: {key: position, type: object, value: {"x":420,"y":360}}
      handles: {key: handles, type: object, value: {"target":["asset_url","tasks"],"source":["annotation_json","annotationId","outputPath"]}}
      asset_type: {key: asset_type, type: string, value: "image"}
      asset_url: {key: asset_url, type: string, value: "workspace://media/demo-image"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"asset_url":"visual_media_asset","tasks":"annotation_json"},"out":{"annotation_json":"annotation_json","annotationId":"annotation_json","outputPath":"annotation_json"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "annotationEngine"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 3}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 2}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Image Annotation Engine validates Annotation_Spec and emits captions, object_detection bounding boxes, dense-region captions, and LLM-ready JSON through shared rich-media artifact owners."}
      model_hint: {key: model_hint, type: string, value: ""}
      tasks: {key: tasks, type: string, value: "caption,object_detection,dense_region_caption"}
      "visual:importance": {key: "visual:importance", type: number, value: 24}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 17}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 1}
    - id: {key: id, type: string, value: "video_frame_annotation_engine_node"}
      type: {key: type, type: string, value: "AnnotationEngine"}
      label: {key: label, type: string, value: "Video Frame Annotation Engine"}
      position: {key: position, type: object, value: {"x":420,"y":580}}
      handles: {key: handles, type: object, value: {"target":["asset_url","tasks","frame_timestamp_ms"],"source":["annotation_json","annotationId","outputPath"]}}
      asset_type: {key: asset_type, type: string, value: "video_frame"}
      asset_url: {key: asset_url, type: string, value: "workspace://media/demo-video"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"asset_url":"visual_media_asset","tasks":"annotation_json","frame_timestamp_ms":"annotation_json"},"out":{"annotation_json":"annotation_json","annotationId":"annotation_json","outputPath":"annotation_json"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "annotationEngine"}
      frame_timestamp_ms: {key: frame_timestamp_ms, type: number, value: 1200}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 4}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 3}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Video frame annotation reuses the same AnnotationEngine contract and records frame_timestamp_ms as runtime input."}
      model_hint: {key: model_hint, type: string, value: ""}
      tasks: {key: tasks, type: string, value: "caption,object_detection"}
      "visual:importance": {key: "visual:importance", type: number, value: 23}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 17}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 2}
    - id: {key: id, type: string, value: "floating_panel_media_annotation_panel"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "FloatingPanel Media Annotation Outputs"}
      position: {key: position, type: object, value: {"x":860,"y":470}}
      handles: {key: handles, type: object, value: {"target":["imageAnnotationJson","videoFrameAnnotationJson","mediaPreview"],"source":["annotation_json","mediaUrl"]}}
      annotationBoxFormat: {key: annotationBoxFormat, type: string, value: "xywh"}
      annotationCoordinateSpace: {key: annotationCoordinateSpace, type: string, value: "normalized-0-to-1"}
      annotationId: {key: annotationId, type: string, value: "07a89c6d"}
      annotationOverlayEnabled: {key: annotationOverlayEnabled, type: boolean, value: true}
      annotationOverlaySource: {key: annotationOverlaySource, type: string, value: "imageAnnotationJson"}
      annotationSchemaVersion: {key: annotationSchemaVersion, type: string, value: "knowgrph-annotation/v1"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"imageAnnotationJson":"annotation_json","videoFrameAnnotationJson":"annotation_json","mediaPreview":"visual_media_asset"},"out":{"annotation_json":"annotation_json","mediaUrl":"visual_media_asset"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "FloatingPanel Media receives image/video previews plus annotation JSON and projects image object_detection results as labelled normalized bounding boxes without storing generated runtime output in the validation input."}
      kind: {key: kind, type: string, value: "annotation"}
      lastRunAt: {key: lastRunAt, type: string, value: "2026-06-29T03:47:12.867Z"}
      output:
        key: output
        type: textarea
        value: |
          ## Caption
          
          Runtime-local video frame annotation for demo video at 1200ms.
          
          ## Detected Objects
          - video frame
          
          ## Annotation JSON
          
          ```json
          {
            "ok": true,
            "annotationId": "07a89c6d",
            "assetUrl": "workspace://media/demo-video",
            "assetType": "video_frame",
            "modelId": "microsoft/Florence-2-base",
            "tasks": {
              "caption": {
                "text": "Runtime-local video frame annotation for demo video at 1200ms."
              },
              "object_detection": {
                "objects": [
                  {
                    "label": "video frame",
                    "bbox": [
                      0.08,
                      0.08,
                      0.84,
                      0.84
                    ],
                    "confidence": 0.51
                  }
                ]
              }
            },
            "processedAt": "2026-06-29T03:47:12.797Z",
            "durationMs": 1,
            "schemaVersion": "knowgrph-annotation/v1",
            "frameTimestampMs": 1200,
            "outputPath": "/docs/knowgrph-vdeoxpln-demo-video-frame-annotation-engine.json",
            "outputManifestPath": "/docs/knowgrph-vdeoxpln-demo-video-frame-annotation-engine-annotation-output.md",
            "outputStorageUrl": null
          }
          ```
      outputMimeType: {key: outputMimeType, type: string, value: "text/markdown; charset=utf-8"}
      outputModel: {key: outputModel, type: string, value: "microsoft/Florence-2-base"}
      outputPath: {key: outputPath, type: string, value: "/docs/knowgrph-vdeoxpln-demo-video-frame-annotation-engine.json"}
      outputSavedName: {key: outputSavedName, type: string, value: "knowgrph-vdeoxpln-demo-video-frame-annotation-engine.json"}
      outputSrcDoc:
        key: outputSrcDoc
        type: textarea
        value: |
          <!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Video Frame Annotation Engine</title><style>html{color-scheme:dark light}body{margin:0;padding:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:rgba(255, 255, 255, 0.95);color:#111827}main{max-width:980px;margin:0 auto;padding:16px}a{color:#3b82f6}pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace}pre{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;overflow:auto;color:#0f172a}code{background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:1px 4px;color:#0f172a}table{border-collapse:collapse;width:100%}th,td{border:1px solid #e5e7eb;padding:6px 8px;vertical-align:top}blockquote{border-left:3px solid #e5e7eb;margin:0;padding:0 0 0 12px;color:#4b5563}hr{border:0;border-top:1px solid #e5e7eb;margin:16px 0}img,video{max-width:100%;height:auto}</style></head><body><main><section data-kg-rich-media-markdown-srcdoc="1"><h2>Caption</h2>
          <p>Runtime-local video frame annotation for demo video at 1200ms.</p>
          <h2>Detected Objects</h2>
          <ul>
          <li>video frame</li>
          </ul>
          <h2>Annotation JSON</h2>
          <pre><code class="language-json">{
            &quot;ok&quot;: true,
            &quot;annotationId&quot;: &quot;07a89c6d&quot;,
            &quot;assetUrl&quot;: &quot;workspace://media/demo-video&quot;,
            &quot;assetType&quot;: &quot;video_frame&quot;,
            &quot;modelId&quot;: &quot;microsoft/Florence-2-base&quot;,
            &quot;tasks&quot;: {
              &quot;caption&quot;: {
                &quot;text&quot;: &quot;Runtime-local video frame annotation for demo video at 1200ms.&quot;
              },
              &quot;object_detection&quot;: {
                &quot;objects&quot;: [
                  {
                    &quot;label&quot;: &quot;video frame&quot;,
                    &quot;bbox&quot;: [
                      0.08,
                      0.08,
                      0.84,
                      0.84
                    ],
                    &quot;confidence&quot;: 0.51
                  }
                ]
              }
            },
            &quot;processedAt&quot;: &quot;2026-06-29T03:47:12.797Z&quot;,
            &quot;durationMs&quot;: 1,
            &quot;schemaVersion&quot;: &quot;knowgrph-annotation/v1&quot;,
            &quot;frameTimestampMs&quot;: 1200,
            &quot;outputPath&quot;: &quot;/docs/knowgrph-vdeoxpln-demo-video-frame-annotation-engine.json&quot;,
            &quot;outputManifestPath&quot;: &quot;/docs/knowgrph-vdeoxpln-demo-video-frame-annotation-engine-annotation-output.md&quot;,
            &quot;outputStorageUrl&quot;: null
          }
          </code></pre>
          </section></main></body></html>
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "text"}
      "visual:height": {key: "visual:height", type: number, value: 500}
      "visual:importance": {key: "visual:importance", type: number, value: 18}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 15}
      "visual:width": {key: "visual:width", type: number, value: 889}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 1}
  edges:
    - {"id":"flow-e01","source":"html_video_source_spec","sourceHandle":"html","target":"html_video_renderer_node","targetHandle":"html_in"}
    - {"id":"flow-e02","source":"html_video_source_spec","sourceHandle":"css","target":"html_video_renderer_node","targetHandle":"css_in"}
    - {"id":"flow-e03","source":"html_video_source_spec","sourceHandle":"data_json","target":"html_video_renderer_node","targetHandle":"data_json_in"}
    - {"id":"flow-e04","source":"html_video_renderer_node","sourceHandle":"videoUrl","target":"html_video_mp4_panel","targetHandle":"videoUrl"}
    - {"id":"flow-e05","source":"html_video_renderer_node","sourceHandle":"outputSrcDoc","target":"html_video_mp4_panel","targetHandle":"outputSrcDoc"}
    - {"id":"flow-e06","source":"floating_media_ingestion_source","sourceHandle":"image_asset_url","target":"image_annotation_engine_node","targetHandle":"asset_url"}
    - {"id":"flow-e07","source":"floating_media_ingestion_source","sourceHandle":"image_tasks","target":"image_annotation_engine_node","targetHandle":"tasks"}
    - {"id":"flow-e08","source":"floating_media_ingestion_source","sourceHandle":"video_asset_url","target":"video_frame_annotation_engine_node","targetHandle":"asset_url"}
    - {"id":"flow-e09","source":"floating_media_ingestion_source","sourceHandle":"video_tasks","target":"video_frame_annotation_engine_node","targetHandle":"tasks"}
    - {"id":"flow-e10","source":"floating_media_ingestion_source","sourceHandle":"frame_timestamp_ms","target":"video_frame_annotation_engine_node","targetHandle":"frame_timestamp_ms"}
    - {"id":"flow-e11","source":"image_annotation_engine_node","sourceHandle":"annotation_json","target":"floating_panel_media_annotation_panel","targetHandle":"imageAnnotationJson"}
    - {"id":"flow-e12","source":"video_frame_annotation_engine_node","sourceHandle":"annotation_json","target":"floating_panel_media_annotation_panel","targetHandle":"videoFrameAnnotationJson"}
    - {"id":"flow-e13","source":"floating_media_ingestion_source","sourceHandle":"image_asset_url","target":"floating_panel_media_annotation_panel","targetHandle":"mediaPreview"}
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
| Ingest Media | FloatingPanel Media receives source-owned image and video asset references without generated blob URLs in the validation input. | Rich Media / Media catalog owners |
| Annotate | `AnnotationEngine` nodes validate image and video-frame Annotation_Spec inputs and emit LLM-ready JSON. | `visual-annotation-engine/*` |
| Render Annotation | Annotation JSON, semantic ids, media previews, and image object-detection bounding boxes flow into the FloatingPanel Media Rich Media target through explicit edges. | `richMediaRun.ts` + Flow Editor dataflow |
| Project Bounding Boxes | The image preview projects `tasks.object_detection.objects[].bbox` from normalized `[x,y,width,height]` coordinates into its fitted media rectangle with labels and optional confidence. | FloatingPanel Media annotation overlay owner |
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

The `canvas-2d` engine is the no-install Dev/Prod smoke path. It rasterizes
HTML with `html2canvas` and uses browser-native recording capabilities when the
runtime exposes them. If the browser cannot encode video, Run all publishes the
same parsed HTML/CSS/data as an inline `outputSrcDoc` preview rather than
leaving the Rich Media Panel empty. The `headless-browser` adapter remains an
independent runtime option for operators who deliberately register an FFmpeg
runtime.

Run path:

- Import this Markdown file through `Toolbar -> Launch -> Import local files`.
- Switch to the Flow Editor surface if it is not already selected.
- Run `HTML Video Renderer Widget`, or run the whole flow from Toolbar Run all.
- Verify that the downstream Rich Media Panel has either a playable `video/mp4`
  artifact or the inline HTML preview generated from the same Render_Spec, and
  that the render manifest records the selected `engineHint=canvas-2d` when an
  MP4 is produced.
- Confirm the source document remains free of generated blob URLs, run IDs, and
  output paths; those fields are runtime artifacts, not validation input.

The embedded Render_Spec is source-owned in frontmatter under
`flow.nodes[].{html,css,data_json,duration_ms,fps,width,height,engine_hint}`.
It models a URL-to-video pipeline with source capture, identity extraction,
storyboard compilation, seekable CSS keyframes, timeline lanes, and artifact
publication. Do not duplicate the payload into fixture files; tests must ingest
this document by path.

## Runnable FloatingPanel Media Annotation Demo

The same frontmatter graph also includes a FloatingPanel Media branch for
image/video ingestion, parsing, annotation, and rendering:

1. `FloatingPanel Media Source` declares image and video asset references, parsed
   media roles, task sets, and a video frame timestamp as source-owned inputs.
2. `Image Annotation Engine` consumes the image asset and task set with
   `asset_type=image`.
3. `Video Frame Annotation Engine` consumes the video asset, task set, and
   `frame_timestamp_ms` with `asset_type=video_frame`.
4. `FloatingPanel Media Annotation Outputs` receives media previews plus
   annotation JSON through explicit Flow Editor edges, then projects image
   `object_detection` results as labelled bounding boxes over the image preview.

The branch is intentionally runtime-ready but source-neutral. The validation
input stores stable `workspace://media/...` asset references, task names, and
frame timestamp only. It does not store generated blob URLs, output paths,
annotation ids, model cache state, or worker progress. At runtime, the
Annotation Engine must build ids through the shared semantic-key helper and
route successful JSON through `writeRichMediaWidgetRunOutputArtifact`. The Dev
runtime uses dependency-free heuristic worker output for both image and
video-frame tasks; validation/runtime failures remain structured
(`invalid_spec`, `model_not_configured`, `worker_not_supported`, or
`inference_failed`) rather than branching into a demo-only fallback.

Image bounding-box projection contract:

- read detections from `tasks.object_detection.objects[]`
- require each detection to expose `label` and `bbox`, with optional
  `confidence`
- interpret `bbox` as normalized `[x, y, width, height]` values
- clamp projected rectangles to the fitted image content bounds
- recompute screen rectangles from source coordinates when the panel resizes or
  zoom changes; do not mutate or duplicate the annotation JSON
- hide only malformed detections while preserving other valid annotations

Run path:

- Import this Markdown file through `Toolbar -> Launch -> Import local files`.
- Open FloatingPanel Media and verify that the media branch exposes image/video
  source rows, parsed annotation task sets, and the downstream annotation panel.
- Run the image annotation node, the video-frame annotation node, or Toolbar Run
  all.
- Verify that successful outputs are LLM-ready `knowgrph-annotation/v1` JSON
  and that the FloatingPanel Media target shows the media preview alongside the
  annotation payload.
- Verify that the image preview shows at least one labelled bounding rectangle
  when `object_detection` returns objects, and that the rectangle remains
  aligned with the image while resizing or zooming the panel.
- Confirm the source document remains unchanged after execution; generated
  annotation ids, output paths, worker progress, and cached model state belong
  to runtime artifacts only.

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
- one FloatingPanel Media branch with `InputWidget -> AnnotationEngine -> RichMediaPanel` for both image annotation and video-frame annotation
- one Annotation Engine result path using `knowgrph-annotation/v1`, sorted task semantic-key inputs, and the shared rich-media artifact writer
- one image annotation projection reading normalized object-detection boxes from `tasks.object_detection.objects[]` and rendering labelled overlays in FloatingPanel Media
- one Design FloatingPanel Video workspace showing files, compositions, assets, timeline lanes, and the same runtime-registered Render MP4 action
- one Design BottomPanel Timeline view showing source-derived design video tracks when `kgCanvas2dRenderer=design` and the bottom tab is Timeline
- one Run all execution path that uses source-owned flow edges and publishes only the generated MP4 artifact

The repo must treat this file as external validation input. Runtime code and
tests may read it by caller-supplied path, but must not copy its node ids,
titles, prompts, source hashes, showrunner brief, MCP payload, HTML video
Render_Spec, media asset references, annotation task sets, Annotation_Spec
payloads, or output payload into implementation fixtures.
