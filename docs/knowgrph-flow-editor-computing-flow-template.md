---
title: "Knowgrph Flow Editor Computing Flow Template"
graphId: "md:knowgrph-flow-editor-computing-flow-template"
doc_type: "Computing Flow Template"
date: "2026-06-03"
updated: "2026-06-04"
lang: "en-US"
schema: "kgc-computing-flow/v1"

implementation_contract: "docs/documents/knowgrph-computing-data-flows-import-render-pipeline-document.md"
source_truth:
  - "docs/documents/knowgrph-research-agent-prd-tad.md"
  - "docs/documents/knowgrph-computing-data-flows-import-render-pipeline-document.md"
  - "canvas/src/features/agent-ready/mainPanelSuperAgentIntegrationContract.ts"
  - "canvas/src/features/agent-ready/localMainPanelChatCanvasPipelineInspection.ts"
  - "canvas/src/features/parsers/markdownFrontmatterFlowGraph.ts"
  - "canvas/src/lib/render/richMediaSsot.ts"
template_status: "publish-side reusable template; no Prod or Cloudflare deploy claim"
deployed_api_claim: false
live_route_validation_required_before_claim: true

external_inspiration:
  - name: "bytedance/deer-flow"
    source_url: "https://github.com/bytedance/deer-flow"
    use: "conceptual reference for long-horizon harness patterns only"
    copy_policy: "forbid copied code, copied architecture, provider-specific renderer forks, or downstream alias stacks"

kgCanvasSurfaceMode: "2d"
kgCanvasRenderMode: "2d"
kgCanvas2dRenderer: "flowEditor"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: true
kgDocumentStructureBaselineLock: false
kgWorkflowManagerModeEnabled: true

"renderer:palette":
  nodes:
    input: "#0ea5e9"
    integration: "#6366f1"
    agent: "#14b8a6"
    compute: "#22c55e"
    rich_media: "#f59e0b"
    validation: "#64748b"
  edges:
    text: "#14b8a6"
    image: "#38bdf8"
    chart: "#f59e0b"

socket_types:
  template_text_signal: {color: "#14b8a6", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [template_text_signal]}
  template_image_signal: {color: "#38bdf8", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [template_image_signal]}
  template_chart_html: {color: "#f59e0b", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [template_chart_html]}
  integration_provider_signal: {color: "#6366f1", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [integration_provider_signal]}
  agent_task_signal: {color: "#6366f1", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [agent_task_signal]}
  agent_artifact_signal: {color: "#14b8a6", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [agent_artifact_signal]}
  agent_review_signal: {color: "#64748b", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [agent_review_signal]}

template_flow_demo:
  schema_version: "computing-flow-template/v1"
  run_id: "kgcf_template_run_20260603"
  active_graph_mutated: false
  mode: "local-template"
  output_fields: ["output", "imageUrl", "outputSrcDoc"]

superagent_harness_demo:
  schema_version: "knowgrph-superagent-harness-template/v1"
  harness_id: "kgcf_superagent_template"
  run_id: "kgcf_superagent_template_run_20260604"
  source_run_id: "kgcf_template_run_20260603"
  mode: "local-template-long-horizon"
  active_graph_mutated: false
  inspiration_policy: "deer-flow-inspired concepts only; no copied code, no copied architecture"
  task_capabilities: ["research", "code", "create"]
  task_levels: ["quick_triage", "bounded_compile", "deep_research", "parallel_build"]
  native_owners:
    - "docs/documents/knowgrph-research-agent-prd-tad.md"
    - "docs/documents/knowgrph-computing-data-flows-import-render-pipeline-document.md"
    - "docs/documents/knowgrph-deerflow/knowgrph-deerflow-prd-tad.md"
    - "canvas/src/features/research-agent/researchThesisContract.ts"
    - "canvas/src/features/chat/chatKgcCanvasApply.ts"
    - "canvas/src/features/chat/richMediaRun.ts"
    - "canvas/src/features/markdown-workspace/workspaceImport/deerflowUrlImport.ts"
    - "cloudflare/pages/knowgrph-agent-ready.mjs"
  runtime_surfaces:
    message_gateway:
      ingress: ["MainPanel Integrations", "FloatingPanel Chat", "Agent-ready WebMCP", "optional DeerFlow local gateway provider"]
      thread_state: "template run manifest plus review audit"
    sandbox: "bounded workspace execution with artifacts written through Source Files or shared rich-media owners"
    memory: "run manifest, source hashes, evidence ledger, cost log, and review audit"
    tools: "provider-neutral chat, Source Files, queryable corpus, local MCP/WebMCP, and shared rich-media runtime"
    skills: "progressively selected Knowgrph capability docs and KGC templates"
    subagents: ["source_scout", "template_compiler", "code_worker", "artifact_builder", "review_gate"]
  bounded_runtime:
    horizon: "minutes-to-hours"
    resumable: true
    max_compile_iterations: 2
    max_wall_clock_ms: 600000
  artifact_outputs:
    text: "panel_text_output.output"
    image: "panel_image_output.imageUrl"
    chart: "panel_chart_output.outputSrcDoc"
  review_gate:
    apply_owner: "canvas/src/features/chat/chatKgcCanvasApply.ts"
    accepted_candidates_only: true

main_panel_integrations_demo:
  schema_version: "knowgrph-mainpanel-superagent-integrations-template/v1"
  source_file: "workspace:/docs/knowgrph-flow-editor-computing-flow-template.md"
  main_panel_entry: "integrations"
  integration_open_tab: "chat"
  ingestion_surface: "docs-mirror Source Files selection"
  parsing_surface: "Markdown YAML frontmatter Flow parser"
  canvas_2d_renderer: "flowEditor"
  message_gateway: "FloatingPanel Chat and knowgrph.superagent.run local MCP"
  provider_ids: ["openai", "byteplus-modelark", "agnes-ai", "miromind", "qwen"]
  provider_labels: ["OpenAI", "BytePlus ModelArk", "Agnes AI API", "MiroMind API", "Qwen API"]
  task_capabilities: ["research", "code", "create"]
  task_levels: ["quick_triage", "bounded_compile", "deep_research", "parallel_build"]
  hardcode_policy: "No absolute demo path, provider-specific renderer fork, or downstream alias remap"

workflow_sections:
  - id: wf_main_panel_integrations
    title: "Route MainPanel provider integrations into the template SuperAgent gateway"
    nodes: [integration_openai, integration_byteplus, integration_agnes, integration_miromind, integration_qwen, kgcf_superagent_template]
  - id: wf_template_input
    title: "Declare source input"
    nodes: [source_input]
  - id: wf_template_compute
    title: "Compute text, image, and chart outputs"
    nodes: [compute_summary]
  - id: wf_template_render_outputs
    title: "Render outputs as Rich Media Panels"
    nodes: [panel_text_output, panel_image_output, panel_chart_output]

flow:
  direction: {key: direction, type: string, value: "LR"}
  edgeType: {key: edgeType, type: string, value: "smoothstep"}
  balancedViewportPreset: {key: balancedViewportPreset, type: string, value: "widgetFrontmatter"}
  computed: {key: computed, type: boolean, value: true}
  snapToGrid: {key: snapToGrid, type: boolean, value: true}
  nodes:
    - id: {key: id, type: string, value: "integration_openai"}
      type: {key: type, type: string, value: "integration"}
      label: {key: label, type: string, value: "OpenAI"}
      position: {key: position, type: object, value: {"x":-760,"y":-720}}
      handles: {key: handles, type: object, value: {"source":["integration_provider_signal_out"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{},"out":{"integration_provider_signal_out":"integration_provider_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:integration_openai"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "integration:mainPanelEntry": {key: "integration:mainPanelEntry", type: string, value: "integrations"}
      "integration:openTab": {key: "integration:openTab", type: string, value: "chat"}
      "integration:providerId": {key: "integration:providerId", type: string, value: "openai"}
      "integration:providerLabel": {key: "integration:providerLabel", type: string, value: "OpenAI"}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "integration"}
      "visual:importance": {key: "visual:importance", type: number, value: 18}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: -2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -3}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "integration_byteplus"}
      type: {key: type, type: string, value: "integration"}
      label: {key: label, type: string, value: "BytePlus ModelArk"}
      position: {key: position, type: object, value: {"x":-760,"y":-480}}
      handles: {key: handles, type: object, value: {"source":["integration_provider_signal_out"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{},"out":{"integration_provider_signal_out":"integration_provider_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:integration_byteplus"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "integration:mainPanelEntry": {key: "integration:mainPanelEntry", type: string, value: "integrations"}
      "integration:openTab": {key: "integration:openTab", type: string, value: "chat"}
      "integration:providerId": {key: "integration:providerId", type: string, value: "byteplus-modelark"}
      "integration:providerLabel": {key: "integration:providerLabel", type: string, value: "BytePlus ModelArk"}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "integration"}
      "visual:importance": {key: "visual:importance", type: number, value: 18}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: -2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -2}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "integration_agnes"}
      type: {key: type, type: string, value: "integration"}
      label: {key: label, type: string, value: "Agnes AI API"}
      position: {key: position, type: object, value: {"x":-760,"y":-240}}
      handles: {key: handles, type: object, value: {"source":["integration_provider_signal_out"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{},"out":{"integration_provider_signal_out":"integration_provider_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:integration_agnes"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "integration:mainPanelEntry": {key: "integration:mainPanelEntry", type: string, value: "integrations"}
      "integration:openTab": {key: "integration:openTab", type: string, value: "chat"}
      "integration:providerId": {key: "integration:providerId", type: string, value: "agnes-ai"}
      "integration:providerLabel": {key: "integration:providerLabel", type: string, value: "Agnes AI API"}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "integration"}
      "visual:importance": {key: "visual:importance", type: number, value: 18}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: -2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -1}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "integration_miromind"}
      type: {key: type, type: string, value: "integration"}
      label: {key: label, type: string, value: "MiroMind API"}
      position: {key: position, type: object, value: {"x":-760,"y":0}}
      handles: {key: handles, type: object, value: {"source":["integration_provider_signal_out"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{},"out":{"integration_provider_signal_out":"integration_provider_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:integration_miromind"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "integration:mainPanelEntry": {key: "integration:mainPanelEntry", type: string, value: "integrations"}
      "integration:openTab": {key: "integration:openTab", type: string, value: "chat"}
      "integration:providerId": {key: "integration:providerId", type: string, value: "miromind"}
      "integration:providerLabel": {key: "integration:providerLabel", type: string, value: "MiroMind API"}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "integration"}
      "visual:importance": {key: "visual:importance", type: number, value: 18}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: -2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "integration_qwen"}
      type: {key: type, type: string, value: "integration"}
      label: {key: label, type: string, value: "Qwen API"}
      position: {key: position, type: object, value: {"x":-760,"y":240}}
      handles: {key: handles, type: object, value: {"source":["integration_provider_signal_out"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{},"out":{"integration_provider_signal_out":"integration_provider_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:integration_qwen"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "integration:mainPanelEntry": {key: "integration:mainPanelEntry", type: string, value: "integrations"}
      "integration:openTab": {key: "integration:openTab", type: string, value: "chat"}
      "integration:providerId": {key: "integration:providerId", type: string, value: "qwen"}
      "integration:providerLabel": {key: "integration:providerLabel", type: string, value: "Qwen API"}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "integration"}
      "visual:importance": {key: "visual:importance", type: number, value: 18}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: -2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 1}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "kgcf_superagent_template"}
      type: {key: type, type: string, value: "agent"}
      label: {key: label, type: string, value: "Template SuperAgent Harness"}
      position: {key: position, type: object, value: {"x":-380,"y":-360}}
      handles: {key: handles, type: object, value: {"target":["integration_provider_signal_in"],"source":["agent_task_signal_out"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"integration_provider_signal_in":"integration_provider_signal"},"out":{"agent_task_signal_out":"agent_task_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:kgcf_superagent_template"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 6}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 5}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "agent"}
      "agent:capabilities": {key: "agent:capabilities", type: object, value: ["research","code","create"]}
      "agent:taskLevels": {key: "agent:taskLevels", type: object, value: ["quick_triage","bounded_compile","deep_research","parallel_build"]}
      "agent:reviewGate": {key: "agent:reviewGate", type: string, value: "accepted_candidates_only"}
      "visual:importance": {key: "visual:importance", type: number, value: 22}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 15}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: -1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -2}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 1}
    - id: {key: id, type: string, value: "source_input"}
      type: {key: type, type: string, value: "InputWidget"}
      label: {key: label, type: string, value: "Source Input"}
      position: {key: position, type: object, value: {"x":0,"y":0}}
      handles: {key: handles, type: object, value: {"source":["input_text"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{},"out":{"input_text":"template_text_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "templateInput"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "input"}
      input_text: {key: input_text, type: textarea, value: "Replace this value with source text, an upstream result, or a user prompt."}
      "visual:importance": {key: "visual:importance", type: number, value: 18}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 0}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "compute_summary"}
      type: {key: type, type: string, value: "ComputeWidget"}
      label: {key: label, type: string, value: "Compute Summary Outputs"}
      position: {key: position, type: object, value: {"x":380,"y":0}}
      handles: {key: handles, type: object, value: {"target":["input_text","agent_task_signal_in"],"source":["output","imageUrl","outputSrcDoc"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"input_text":"template_text_signal","agent_task_signal_in":"agent_task_signal"},"out":{"output":"template_text_signal","imageUrl":"template_image_signal","outputSrcDoc":"template_chart_html"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "templateCompute"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 5}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 2}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 3}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "compute"}
      output: {key: output, type: string, value: "Computed summary placeholder."}
      imageUrl: {key: imageUrl, type: text, value: "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20640%20360%22%3E%3Crect%20width=%22640%22%20height=%22360%22%20fill=%22%23f8fafc%22/%3E%3Crect%20x=%2256%22%20y=%2280%22%20width=%22168%22%20height=%2280%22%20rx=%2212%22%20fill=%22%23e0f2fe%22%20stroke=%22%230ea5e9%22/%3E%3Ctext%20x=%2280%22%20y=%22128%22%20font-family=%22system-ui%22%20font-size=%2218%22%20fill=%22%230f172a%22%3EInput%3C/text%3E%3Crect%20x=%22312%22%20y=%2280%22%20width=%22168%22%20height=%2280%22%20rx=%2212%22%20fill=%22%23dcfce7%22%20stroke=%22%2322c55e%22/%3E%3Ctext%20x=%22344%22%20y=%22128%22%20font-family=%22system-ui%22%20font-size=%2218%22%20fill=%22%230f172a%22%3ECompute%3C/text%3E%3Crect%20x=%22184%22%20y=%22224%22%20width=%22256%22%20height=%2272%22%20rx=%2212%22%20fill=%22%23fff7ed%22%20stroke=%22%23f59e0b%22/%3E%3Ctext%20x=%22224%22%20y=%22268%22%20font-family=%22system-ui%22%20font-size=%2218%22%20fill=%22%230f172a%22%3ERich%20Media%20Outputs%3C/text%3E%3Cpath%20d=%22M224%20120H312%22%20stroke=%22%2364748b%22%20stroke-width=%224%22%20marker-end=%22url(%23arrow)%22/%3E%3Cpath%20d=%22M396%20160C380%20198%20352%20218%20312%20224%22%20stroke=%22%2364748b%22%20stroke-width=%224%22%20fill=%22none%22%20marker-end=%22url(%23arrow)%22/%3E%3Cdefs%3E%3Cmarker%20id=%22arrow%22%20viewBox=%220%200%2010%2010%22%20refX=%229%22%20refY=%225%22%20markerWidth=%226%22%20markerHeight=%226%22%20orient=%22auto-start-reverse%22%3E%3Cpath%20d=%22M0%200l10%205-10%205z%22%20fill=%22%2364748b%22/%3E%3C/marker%3E%3C/defs%3E%3C/svg%3E"}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: '<!doctype html><html><head><meta charset="utf-8"><style>body{margin:0;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#f8fafc;color:#0f172a}.wrap{padding:18px}.title{font-size:18px;font-weight:700;margin:0 0 14px}.row{display:grid;grid-template-columns:130px 1fr 40px;gap:10px;align-items:center;margin:10px 0}.track{height:18px;background:#e2e8f0;border-radius:999px;overflow:hidden}.bar{height:100%;background:#14b8a6}.bar.warn{background:#f59e0b}.note{margin-top:14px;font-size:12px;color:#475569}</style></head><body><main class="wrap"><h1 class="title">Computing flow chart output</h1><div class="row"><span>Input</span><span class="track"><span class="bar" style="display:block;width:100%"></span></span><strong>1</strong></div><div class="row"><span>Outputs</span><span class="track"><span class="bar" style="display:block;width:75%"></span></span><strong>3</strong></div><div class="row"><span>Review</span><span class="track"><span class="bar warn" style="display:block;width:50%"></span></span><strong>on</strong></div><p class="note">Use outputSrcDoc for inline chart or HTML output.</p></main></body></html>'}
      compute:
        key: compute
        type: textarea
        value: |-
          inputs => {
            const raw = String(inputs?.input_text || '').trim()
            return {
              output: raw ? `Summary: ${raw}` : 'Summary: no source text provided.',
              imageUrl: 'data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20640%20360%22%3E%3Crect%20width=%22640%22%20height=%22360%22%20fill=%22%23f8fafc%22/%3E%3Ctext%20x=%2272%22%20y=%22180%22%20font-family=%22system-ui%22%20font-size=%2224%22%20fill=%22%230f172a%22%3EComputed%20image%20output%3C/text%3E%3C/svg%3E',
              outputSrcDoc: '<!doctype html><html><body><main><h1>Computed outputSrcDoc</h1><p>Source length: ' + raw.length + '</p></main></body></html>'
            }
          }
      "visual:importance": {key: "visual:importance", type: number, value: 28}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 16}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 1}
    - id: {key: id, type: string, value: "panel_text_output"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel - Text Output"}
      position: {key: position, type: object, value: {"x":760,"y":-240}}
      handles: {key: handles, type: object, value: {"target":["output"],"source":["output"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"output":"template_text_signal"},"out":{"output":"template_text_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      output:
        key: output
        type: textarea
        value: |
          ### Text output

          Replace this placeholder with a computed summary or review brief.
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "text"}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -1}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 2}
    - id: {key: id, type: string, value: "panel_image_output"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel - Image Output"}
      position: {key: position, type: object, value: {"x":760,"y":0}}
      handles: {key: handles, type: object, value: {"target":["imageUrl"],"source":["imageUrl"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"imageUrl":"template_image_signal"},"out":{"imageUrl":"template_image_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "image"}
      imageUrl: {key: imageUrl, type: text, value: "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20640%20360%22%3E%3Crect%20width=%22640%22%20height=%22360%22%20fill=%22%23f8fafc%22/%3E%3Ccircle%20cx=%22210%22%20cy=%22180%22%20r=%2274%22%20fill=%22%23dbeafe%22%20stroke=%22%2338bdf8%22/%3E%3Ccircle%20cx=%22380%22%20cy=%22180%22%20r=%2274%22%20fill=%22%23dcfce7%22%20stroke=%22%2322c55e%22/%3E%3Cpath%20d=%22M284%20180H306%22%20stroke=%22%2364748b%22%20stroke-width=%224%22/%3E%3Ctext%20x=%22165%22%20y=%22186%22%20font-family=%22system-ui%22%20font-size=%2218%22%20fill=%22%230f172a%22%3EText%3C/text%3E%3Ctext%20x=%22338%22%20y=%22186%22%20font-family=%22system-ui%22%20font-size=%2218%22%20fill=%22%230f172a%22%3EChart%3C/text%3E%3C/svg%3E"}
      "visual:height": {key: "visual:height", type: number, value: 268}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:width": {key: "visual:width", type: number, value: 439}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 3}
    - id: {key: id, type: string, value: "panel_chart_output"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel - Chart Output"}
      position: {key: position, type: object, value: {"x":760,"y":240}}
      handles: {key: handles, type: object, value: {"target":["outputSrcDoc"],"source":["outputSrcDoc"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"outputSrcDoc":"template_chart_html"},"out":{"outputSrcDoc":"template_chart_html"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "text"}
      output: {key: output, type: string, value: "Helper text only. outputSrcDoc owns chart rendering."}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: '<!doctype html><html><head><meta charset="utf-8"><style>body{margin:0;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#f8fafc;color:#0f172a}.wrap{padding:18px}.title{font-size:18px;font-weight:700;margin:0 0 14px}.bar{height:18px;border-radius:999px;background:linear-gradient(90deg,#f59e0b 0 42%,#e2e8f0 42% 100%)}.note{margin-top:14px;font-size:12px;color:#475569}</style></head><body><main class="wrap"><h1 class="title">Chart output placeholder</h1><div class="bar"></div><p class="note">Use outputSrcDoc for inline charts.</p></main></body></html>'}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 1}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 4}
  edges:
    - {"id":"edge_openai_to_template_superagent","source":"integration_openai","sourceHandle":"integration_provider_signal_out","target":"kgcf_superagent_template","targetHandle":"integration_provider_signal_in","label":"chat gateway","type":"integration_provider_signal"}
    - {"id":"edge_byteplus_to_template_superagent","source":"integration_byteplus","sourceHandle":"integration_provider_signal_out","target":"kgcf_superagent_template","targetHandle":"integration_provider_signal_in","label":"modelark gateway","type":"integration_provider_signal"}
    - {"id":"edge_agnes_to_template_superagent","source":"integration_agnes","sourceHandle":"integration_provider_signal_out","target":"kgcf_superagent_template","targetHandle":"integration_provider_signal_in","label":"agent gateway","type":"integration_provider_signal"}
    - {"id":"edge_miromind_to_template_superagent","source":"integration_miromind","sourceHandle":"integration_provider_signal_out","target":"kgcf_superagent_template","targetHandle":"integration_provider_signal_in","label":"research gateway","type":"integration_provider_signal"}
    - {"id":"edge_qwen_to_template_superagent","source":"integration_qwen","sourceHandle":"integration_provider_signal_out","target":"kgcf_superagent_template","targetHandle":"integration_provider_signal_in","label":"qwen gateway","type":"integration_provider_signal"}
    - {"id":"edge_template_superagent_to_compute","source":"kgcf_superagent_template","sourceHandle":"agent_task_signal_out","target":"compute_summary","targetHandle":"agent_task_signal_in","label":"template task","type":"agent_task_signal"}
    - {"id":"edge_input_to_compute","source":"source_input","sourceHandle":"input_text","target":"compute_summary","targetHandle":"input_text","label":"input text","type":"template_text_signal"}
    - {"id":"edge_compute_to_text_panel","source":"compute_summary","sourceHandle":"output","target":"panel_text_output","targetHandle":"output","label":"text output","type":"template_text_signal"}
    - {"id":"edge_compute_to_image_panel","source":"compute_summary","sourceHandle":"imageUrl","target":"panel_image_output","targetHandle":"imageUrl","label":"image output","type":"template_image_signal"}
    - {"id":"edge_compute_to_chart_panel","source":"compute_summary","sourceHandle":"outputSrcDoc","target":"panel_chart_output","targetHandle":"outputSrcDoc","label":"chart outputSrcDoc","type":"template_chart_html"}
---

# Knowgrph Flow Editor Computing Flow Template

This publish-side template turns the computing-flow contract into an
inspectable Knowgrph document. It demonstrates a reusable `2D Renderer: Flow
Editor` starting point: source input becomes a typed compute node, semantic
ports carry text, image, and chart outputs, and the generated artifacts render
through native Rich Media Panels.

The same document mirrors the research-agent demo's long-horizon SuperAgent
envelope: MainPanel provider integrations feed a shared harness, the harness
researches inputs, delegates bounded code or artifact work, writes outputs
through shared owners, and keeps generated graph changes review-only until
acceptance.

This is not a live Cloudflare route proof. Treat it as a local docs-mirror
template until deployment and route validation are explicitly run.

## Template Input

| Input | Value |
|---|---|
| Run id | `kgcf_template_run_20260603` |
| Harness run id | `kgcf_superagent_template_run_20260604` |
| Mode | `local-template` |
| Renderer | `2D Renderer: Flow Editor` |
| Provider lane | OpenAI, BytePlus ModelArk, Agnes AI API, MiroMind API, Qwen API |
| Harness node | `kgcf_superagent_template` |
| Source node | `source_input` |
| Compute node | `compute_summary` |
| Active graph mutation | `false` before user edits |
| Rich media outputs | Text, Image, Chart |
| Harness extension | Knowgrph-native long-horizon SuperAgent template |
| Inspiration boundary | `bytedance/deer-flow` concepts only; no copied code or architecture |

## SuperAgent Harness Extension

The harness extension keeps the computing-flow template as the source of truth
while adding a reusable long-horizon execution envelope. It is not a DeerFlow
clone and it does not introduce a second Flow Editor renderer, graph parser, or
apply path. The template treats external SuperAgent ideas as conceptual input
only and routes every concrete output through Knowgrph owners.

| Surface | Native template role |
|---|---|
| Lead run | Creates the manifest, allocates scoped work, synthesizes results, and keeps candidates staged. |
| Message gateway | Accepts work from MainPanel Integrations, FloatingPanel Chat, Agent-ready WebMCP, or the optional DeerFlow local gateway provider. |
| MainPanel providers | Routes OpenAI, BytePlus ModelArk, Agnes AI API, MiroMind API, and Qwen API through one provider-neutral harness node. |
| Sandbox | Runs bounded workspace tasks and writes artifacts through Source Files or shared rich-media owners. |
| Memory | Reuses the run manifest, source hashes, evidence ledger, cost log, and review audit. |
| Tools | Uses provider-neutral chat, Source Files, queryable corpus, local MCP/WebMCP, and shared rich-media runtime. |
| Skills | Loads only the Knowgrph capability docs and KGC templates needed by the current task. |
| Subagents | Scopes source scouting, template compilation, code work, artifact creation, and review as independent task slices. |
| Review gate | Hands accepted candidates to `canvas/src/features/chat/chatKgcCanvasApply.ts`; rejected candidates remain audit-only. |

## Long-Horizon Run Contract

```json
{
  "schema_version": "knowgrph-superagent-harness-template/v1",
  "harness_id": "kgcf_superagent_template",
  "run_id": "kgcf_superagent_template_run_20260604",
  "source_run_id": "kgcf_template_run_20260603",
  "mode": "local-template-long-horizon",
  "task_capabilities": [
    "research",
    "code",
    "create"
  ],
  "task_levels": [
    "quick_triage",
    "bounded_compile",
    "deep_research",
    "parallel_build"
  ],
  "runtime_surfaces": [
    "message_gateway",
    "sandbox",
    "memory",
    "tools",
    "skills",
    "subagents",
    "review_gate"
  ],
  "bounded_runtime": {
    "horizon": "minutes-to-hours",
    "max_compile_iterations": 2,
    "max_wall_clock_ms": 600000,
    "resumable": true
  },
  "artifact_outputs": {
    "text": "panel_text_output.output",
    "image": "panel_image_output.imageUrl",
    "chart": "panel_chart_output.outputSrcDoc"
  },
  "active_graph_mutated": false
}
```

## Research-Code-Create Loop

| Loop stage | Agent slice | Output owner |
|---|---|---|
| Research | Source scout and template compiler read selected Source Files and queryable corpus refs. | Template input, source hashes, and evidence ledger |
| Code | Code worker prepares bounded implementation notes, patches, or runnable snippets only when the reviewed task requires them. | Source Files or existing repo owners, never generated downstream mirrors |
| Create | Artifact builder emits Text, Image, and Chart panel payloads. | Shared Rich Media Panel fields |
| Review | Review gate records accepted, rejected, and deferred candidates before graph apply. | `chatKgcCanvasApply.ts` after human review |

## Non-Copy Inspiration Boundary

The external Deer Flow project is referenced because it describes a modern
long-horizon harness pattern with sandboxes, memory, skills, tools, subagents,
and message gateways. This template forbids copied code, copied architecture,
provider-specific renderer branches, hardcoded local paths, legacy remapping,
or downstream alias stacks. Knowgrph remains the source authority.

## Flow Slots

| Slot | Native field | Replacement role |
|---|---|---|
| `integration_openai.integration_provider_signal_out` | `integration_provider_signal` | MainPanel OpenAI entry into the shared harness. |
| `integration_byteplus.integration_provider_signal_out` | `integration_provider_signal` | MainPanel BytePlus ModelArk entry into the shared harness. |
| `integration_agnes.integration_provider_signal_out` | `integration_provider_signal` | MainPanel Agnes AI API entry into the shared harness. |
| `integration_miromind.integration_provider_signal_out` | `integration_provider_signal` | MainPanel MiroMind API entry into the shared harness. |
| `integration_qwen.integration_provider_signal_out` | `integration_provider_signal` | MainPanel Qwen API entry into the shared harness. |
| `kgcf_superagent_template.agent_task_signal_out` | `agent_task_signal` | Provider-neutral task signal into the compute/output lane. |
| `source_input.input_text` | `input_text` | Source text, upstream result, or user prompt. |
| `compute_summary.output` | `output` | Text summary or review brief. |
| `compute_summary.imageUrl` | `imageUrl` | Inline image, generated image URL, or data SVG. |
| `compute_summary.outputSrcDoc` | `outputSrcDoc` | Inline chart or HTML result. |

## Template Spec Artifact

```json
{
  "schema_version": "computing-flow-template/v1",
  "run_id": "kgcf_template_run_20260603",
  "mode": "local-template",
  "active_graph_mutated": false,
  "output_fields": [
    "output",
    "imageUrl",
    "outputSrcDoc"
  ]
}
```

## Compute Output Contract

The template keeps the active graph unchanged until the author replaces source
values and reruns parser validation:

```json
{
  "schema_version": "computing-flow-template-contract/v1",
  "provider_nodes": [
    "integration_openai",
    "integration_byteplus",
    "integration_agnes",
    "integration_miromind",
    "integration_qwen"
  ],
  "harness_node": "kgcf_superagent_template",
  "source_node": "source_input",
  "compute_node": "compute_summary",
  "active_graph_mutated": false,
  "render_nodes": [
    {
      "node_id": "panel_text_output",
      "field": "output",
      "tab": "text"
    },
    {
      "node_id": "panel_image_output",
      "field": "imageUrl",
      "tab": "image"
    },
    {
      "node_id": "panel_chart_output",
      "field": "outputSrcDoc",
      "tab": "text"
    }
  ]
}
```

## Review-First Contract

The template graph is deliberately staged:

```json
{
  "schema_version": "computing-flow-template-candidate-delta/v1",
  "run_id": "kgcf_template_run_20260603",
  "status": "staged",
  "active_graph_mutated": false,
  "apply_owner": "canvas/src/features/chat/chatKgcCanvasApply.ts"
}
```

Accepted candidates may be handed to the existing KGC apply owner. Rejected
candidates stay in the review audit and do not become active graph nodes,
edges, code files, or Rich Media Panel outputs.

## Cost And Guardrail Proof

| Guardrail | Template value | Why it matters |
|---|---:|---|
| Model mode | `local-template` | Keeps the document runnable without a provider claim. |
| MainPanel provider nodes | `4` | Mirrors the research-agent demo provider lane without provider-specific renderer branches. |
| SuperAgent harness nodes | `1` | Keeps long-horizon task routing on one shared harness node. |
| Source nodes | `1` | Shows the smallest reusable input surface. |
| Compute nodes | `1` | Demonstrates shared value propagation from input to outputs. |
| Rich Media Panels | `3` | Demonstrates Text, Image, and Chart output paths. |
| Estimated cost USD | `0` | Keeps the template local and provider-neutral. |
| Harness runtime | `local-template-long-horizon` | Demonstrates minutes-to-hours orchestration without a deploy claim. |
| Review gate | `accepted_candidates_only` | Prevents graph, code, or artifact output from bypassing review. |

## Rich Media Panel Outputs

| Panel | Native output field | Rendered role |
|---|---|---|
| `panel_text_output` | `output` | Markdown text panel rendered through the Text tab. |
| `panel_image_output` | `imageUrl` | Inline SVG image panel rendered through the Image tab. |
| `panel_chart_output` | `outputSrcDoc` | HTML chart rendered through the shared Rich Media Panel `srcDoc` path. |

## Validation Checklist

1. Parse the document through the Markdown parser and require zero warnings.
2. Confirm the graph materializes eleven nodes and ten edges.
3. Open through Source Files as `/docs/knowgrph-flow-editor-computing-flow-template.md`.
4. Use 2D mode with `2D Renderer: Flow Editor`.
5. Confirm the five provider nodes feed `kgcf_superagent_template`.
6. Confirm `data-kg-flow-editor-surface-root` exists.
7. Confirm three `data-kg-rich-media-panel` surfaces render.
8. Confirm the chart panel has an iframe `srcdoc` preview.
9. Confirm `superagent_harness_demo` and `main_panel_integrations_demo` add no
   second renderer, parser, provider adapter, or graph apply owner.
10. Confirm the document still makes no deployed API or Cloudflare route claim.

## How To Inspect In Knowgrph

1. Open this Source File in Knowgrph.
2. Verify `integration_openai`, `integration_byteplus`, `integration_agnes`,
   `integration_miromind`, and `integration_qwen` feed `kgcf_superagent_template`.
3. Verify `kgcf_superagent_template` feeds `compute_summary` through
   `agent_task_signal_in`.
4. Verify `source_input` feeds `compute_summary` through `input_text`.
5. Verify `compute_summary` exposes `output`, `imageUrl`, and `outputSrcDoc`.
6. Verify the three Rich Media Panels render Text, Image, and Chart outputs.
7. Replace node labels, values, socket names, and compute output only after the
   parser smoke stays warning-free.

## KGC Reading Layer

@node:input:source_input Source input anchors the template source text or upstream result.

@node:integration:integration_openai MainPanel OpenAI route feeds the template SuperAgent gateway.

@node:integration:integration_byteplus MainPanel BytePlus ModelArk route feeds the template SuperAgent gateway.

@node:integration:integration_agnes MainPanel Agnes AI API route feeds the template SuperAgent gateway.

@node:integration:integration_miromind MainPanel MiroMind API route feeds the template SuperAgent gateway.

@node:integration:integration_qwen MainPanel Qwen API route feeds the template SuperAgent gateway.

@node:agent:kgcf_superagent_template Long-horizon SuperAgent template keeps research, code, and create tasks on shared Knowgrph owners.

@node:compute:compute_summary Compute node emits text, image, and chart outputs through semantic ports.

@node:rich_media:panel_text_output Text Rich Media Panel renders the `output` field.

@node:rich_media:panel_image_output Image Rich Media Panel renders the `imageUrl` field.

@node:rich_media:panel_chart_output Chart Rich Media Panel renders the `outputSrcDoc` field.

@edge:integration integration_openai -> kgcf_superagent_template
@edge:integration integration_byteplus -> kgcf_superagent_template
@edge:integration integration_agnes -> kgcf_superagent_template
@edge:integration integration_miromind -> kgcf_superagent_template
@edge:integration integration_qwen -> kgcf_superagent_template
@edge:agent_task kgcf_superagent_template -> compute_summary
@edge:text source_input -> compute_summary
@edge:text compute_summary -> panel_text_output
@edge:image compute_summary -> panel_image_output
@edge:chart compute_summary -> panel_chart_output
