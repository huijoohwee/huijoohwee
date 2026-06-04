---
title: "Knowgrph Research Agent Demo - Review-First Thesis Graph"
graphId: "md:knowgrph-research-agent-demo-review-first-thesis-graph"
doc_type: "Research Agent Demo"
date: "2026-06-03"
updated: "2026-06-04"
lang: "en-US"
schema: "kgc-computing-flow/v1"

implementation_contract: "docs/documents/knowgrph-research-agent-prd-tad.md"
source_truth:
  - "canvas/src/features/research-agent/researchThesisContract.ts"
  - "canvas/src/features/research-agent/researchThesisTypes.ts"
  - "canvas/src/features/agent-ready/mainPanelSuperAgentIntegrationContract.ts"
  - "canvas/src/features/agent-ready/localMainPanelChatCanvasPipelineInspection.ts"
  - "cloudflare/workers/knowgrph-research/index.ts"
  - "cloudflare/d1/migrations/0005_research_thesis.sql"
demo_status: "dev-source capability demo; no Prod or Cloudflare deploy claim"
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
    source: "#0ea5e9"
    integration: "#6366f1"
    agent: "#14b8a6"
    runtime_surface: "#0f766e"
    subagent: "#7c3aed"
    claim: "#22c55e"
    assumption: "#f59e0b"
    risk: "#ef4444"
    open_question: "#a855f7"
    audit: "#64748b"
  edges:
    supports: "#22c55e"
    contradicts: "#ef4444"
    depends_on: "#a855f7"
    review: "#64748b"

socket_types:
  source_ref_signal: {color: "#0ea5e9", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [source_ref_signal]}
  sourced_claim_signal: {color: "#22c55e", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [sourced_claim_signal]}
  assumption_signal: {color: "#f59e0b", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [assumption_signal]}
  contradiction_signal: {color: "#ef4444", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [contradiction_signal]}
  open_question_signal: {color: "#a855f7", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [open_question_signal]}
  review_audit_signal: {color: "#64748b", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [review_audit_signal]}
  integration_provider_signal: {color: "#6366f1", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [integration_provider_signal]}
  rich_media_text_signal: {color: "#14b8a6", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [rich_media_text_signal]}
  rich_media_image_signal: {color: "#38bdf8", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [rich_media_image_signal]}
  rich_media_chart_html: {color: "#f59e0b", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [rich_media_chart_html]}
  agent_task_signal: {color: "#6366f1", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [agent_task_signal]}
  agent_artifact_signal: {color: "#14b8a6", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [agent_artifact_signal]}
  agent_runtime_surface_signal: {color: "#0f766e", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [agent_runtime_surface_signal]}
  agent_subagent_signal: {color: "#7c3aed", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [agent_subagent_signal]}
  agent_review_signal: {color: "#64748b", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [agent_review_signal]}

research_thesis_demo:
  schema_version: "research-thesis-spec/v1"
  run_id: "kgra_run_1659477923"
  prompt_hash: "sha256:6fb921a48fd8433d8ed9b1e5f68d654c5d20ee4addfb957fe95f6cd3f7eb3c1d"
  thesis_prompt: "Evaluate whether a Singapore SME launch analytics product can become an investable vertical SaaS thesis after source review."
  active_graph_mutated: false
  apply_owner: "canvas/src/features/chat/chatKgcCanvasApply.ts"
  cost_log:
    model: "offline-mock"
    prompt_tokens: 153
    completion_tokens: 1108
    estimated_cost_usd: 0
    source_hash_reuse: false

superagent_harness_demo:
  schema_version: "knowgrph-superagent-harness-demo/v1"
  harness_id: "kgra_superagent_harness"
  run_id: "kgra_superagent_run_20260604"
  source_run_id: "kgra_run_1659477923"
  mode: "offline-mock-long-horizon"
  active_graph_mutated: false
  inspiration_policy: "deer-flow-inspired concepts only; no copied code, no copied architecture"
  task_capabilities: ["research", "code", "create"]
  task_levels: ["quick_triage", "bounded_compile", "deep_research", "parallel_build"]
  native_owners:
    - "docs/documents/knowgrph-research-agent-prd-tad.md"
    - "docs/documents/knowgrph-deerflow/knowgrph-deerflow-prd-tad.md"
    - "canvas/src/features/research-agent/researchThesisContract.ts"
    - "canvas/src/features/research-agent/researchThesisTypes.ts"
    - "canvas/src/features/chat/chatKgcCanvasApply.ts"
    - "canvas/src/features/chat/richMediaRun.ts"
    - "cloudflare/workers/knowgrph-research/index.ts"
    - "cloudflare/pages/knowgrph-agent-ready.mjs"
  runtime_surfaces:
    message_gateway:
      ingress: ["MainPanel Integrations", "FloatingPanel Chat", "Agent-ready WebMCP", "optional DeerFlow local gateway provider"]
      thread_state: "run manifest plus review audit"
    sandbox: "bounded workspace execution with artifacts written through Source Files or shared rich-media owners"
    memory: "source hashes, run manifest, evidence ledger, cost log, and review audit"
    tools: "queryable corpus, Source Files, local MCP/WebMCP, provider-neutral chat, and shared rich-media runtime"
    skills: "progressively selected Knowgrph capability docs and KGC templates"
    subagents: ["source_scout", "thesis_compiler", "code_worker", "artifact_builder", "review_gate"]
  bounded_runtime:
    horizon: "minutes-to-hours"
    resumable: true
    max_compile_iterations: 2
    max_wall_clock_ms: 600000
  artifact_outputs:
    text: "panel_text_research_brief.output"
    image: "panel_image_evidence_map.imageUrl"
    chart: "panel_chart_guardrails.outputSrcDoc"
  review_gate:
    apply_owner: "canvas/src/features/chat/chatKgcCanvasApply.ts"
    accepted_candidates_only: true

main_panel_integrations_demo:
  schema_version: "knowgrph-mainpanel-superagent-integrations-demo/v1"
  source_file: "workspace:/docs/knowgrph-research-agent-demo.md"
  main_panel_entries: ["integrations", "mcp"]
  integration_open_tab: "chat"
  ingestion_surface: "docs-mirror Source Files selection"
  parsing_surface: "Markdown YAML frontmatter Flow parser"
  canvas_2d_renderer: "flowEditor"
  message_gateway: "MainPanel Integrations/MCP, FloatingPanel Chat, and knowgrph.superagent.run local MCP"
  provider_ids: ["openai", "byteplus-modelark", "agnes-ai", "miromind", "qwen", "google-cloud"]
  provider_labels: ["OpenAI", "BytePlus ModelArk", "Agnes AI API", "MiroMind API", "Qwen API", "Google Cloud Vertex AI"]
  task_capabilities: ["research", "code", "create"]
  task_levels: ["quick_triage", "bounded_compile", "deep_research", "parallel_build"]
  hardcode_policy: "No absolute demo path, provider-specific renderer fork, or downstream alias remap"

workflow_sections:
  - id: wf_main_panel_integrations
    title: "Route MainPanel provider integrations into the SuperAgent gateway"
    nodes: [integration_openai, integration_byteplus, integration_agnes, integration_miromind, integration_qwen, integration_google_cloud, kgra_superagent_harness]
  - id: wf_superagent_runtime_surfaces
    title: "Expose runtime surfaces as typed Flow Editor nodes"
    nodes: [kgra_runtime_message_gateway, kgra_runtime_sandbox, kgra_runtime_memory, kgra_runtime_tools, kgra_runtime_skills, kgra_runtime_subagents]
  - id: wf_superagent_subagents
    title: "Delegate bounded work through neutral subagent nodes"
    nodes: [kgra_subagent_source_scout, kgra_subagent_thesis_compiler, kgra_subagent_code_worker, kgra_subagent_artifact_builder, kgra_subagent_review_gate]
  - id: wf_select_sources
    title: "Select source refs and create manifest"
    nodes: [source_market_entry, source_customer_interviews, source_unit_economics, run_manifest]
  - id: wf_compile_claims
    title: "Compile typed claims, evidence, and monitoring spec"
    nodes: [claim_market_need, claim_founder_review, claim_unit_economics, thesis_assumption, monitoring_spec]
  - id: wf_review_before_commit
    title: "Render staged candidate graph before KGC apply"
    nodes: [risk_stale_evidence, open_question_disconfirming, review_audit, kgc_apply_owner]
  - id: wf_rich_media_outputs
    title: "Render review outputs as Rich Media Panels"
    nodes: [panel_text_research_brief, panel_image_evidence_map, panel_chart_guardrails]

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
      position: {key: position, type: object, value: {"x":-760,"y":-960}}
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
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -4}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "integration_byteplus"}
      type: {key: type, type: string, value: "integration"}
      label: {key: label, type: string, value: "BytePlus ModelArk"}
      position: {key: position, type: object, value: {"x":-760,"y":-720}}
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
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -3}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "integration_agnes"}
      type: {key: type, type: string, value: "integration"}
      label: {key: label, type: string, value: "Agnes AI"}
      position: {key: position, type: object, value: {"x":-760,"y":-480}}
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
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -2}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "integration_miromind"}
      type: {key: type, type: string, value: "integration"}
      label: {key: label, type: string, value: "MiroMind"}
      position: {key: position, type: object, value: {"x":-760,"y":-240}}
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
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -1}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "integration_qwen"}
      type: {key: type, type: string, value: "integration"}
      label: {key: label, type: string, value: "Qwen API"}
      position: {key: position, type: object, value: {"x":-760,"y":0}}
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
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "integration_google_cloud"}
      type: {key: type, type: string, value: "integration"}
      label: {key: label, type: string, value: "Google Cloud Vertex AI"}
      position: {key: position, type: object, value: {"x":-760,"y":240}}
      handles: {key: handles, type: object, value: {"source":["integration_provider_signal_out"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{},"out":{"integration_provider_signal_out":"integration_provider_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:integration_google_cloud"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "integration:mainPanelEntry": {key: "integration:mainPanelEntry", type: string, value: "integrations"}
      "integration:openTab": {key: "integration:openTab", type: string, value: "chat"}
      "integration:providerId": {key: "integration:providerId", type: string, value: "google-cloud"}
      "integration:providerLabel": {key: "integration:providerLabel", type: string, value: "Google Cloud Vertex AI"}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "integration"}
      "visual:importance": {key: "visual:importance", type: number, value: 18}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: -2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 1}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "kgra_superagent_harness"}
      type: {key: type, type: string, value: "agent"}
      label: {key: label, type: string, value: "Long-Horizon SuperAgent Harness"}
      position: {key: position, type: object, value: {"x":-380,"y":-720}}
      handles: {key: handles, type: object, value: {"target":["integration_provider_signal_in"],"source":["agent_runtime_surface_signal_out","agent_review_signal_out"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"integration_provider_signal_in":"integration_provider_signal"},"out":{"agent_runtime_surface_signal_out":"agent_runtime_surface_signal","agent_review_signal_out":"agent_review_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:kgra_superagent_harness"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 13}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 6}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 7}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "agent"}
      "kgSuperAgent:messageGateway": {key: "kgSuperAgent:messageGateway", type: string, value: "MainPanel Integrations/MCP -> FloatingPanel Chat -> knowgrph.superagent.run"}
      "kgSuperAgent:runId": {key: "kgSuperAgent:runId", type: string, value: "kgra_superagent_run_20260604"}
      "kgSuperAgent:taskCapabilities": {key: "kgSuperAgent:taskCapabilities", type: string, value: "research, code, create"}
      "kgSuperAgent:taskLevels": {key: "kgSuperAgent:taskLevels", type: string, value: "quick_triage, bounded_compile, deep_research, parallel_build"}
      "visual:importance": {key: "visual:importance", type: number, value: 30}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 18}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: -1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -3}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 1}
    - id: {key: id, type: string, value: "kgra_runtime_message_gateway"}
      type: {key: type, type: string, value: "runtime_surface"}
      label: {key: label, type: string, value: "Message Gateway"}
      position: {key: position, type: object, value: {"x":-380,"y":-1440}}
      handles: {key: handles, type: object, value: {"target":["agent_runtime_surface_signal_in"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"agent_runtime_surface_signal_in":"agent_runtime_surface_signal"},"out":{}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:kgra_runtime_message_gateway"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "runtime_surface"}
      "kgSuperAgent:surfaceKey": {key: "kgSuperAgent:surfaceKey", type: string, value: "message_gateway"}
      "kgSuperAgent:surfaceRole": {key: "kgSuperAgent:surfaceRole", type: string, value: "MainPanel Integrations/MCP and FloatingPanel Chat ingress"}
      "visual:importance": {key: "visual:importance", type: number, value: 22}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: -1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -6}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 1}
    - id: {key: id, type: string, value: "kgra_runtime_sandbox"}
      type: {key: type, type: string, value: "runtime_surface"}
      label: {key: label, type: string, value: "Sandbox"}
      position: {key: position, type: object, value: {"x":-380,"y":-1200}}
      handles: {key: handles, type: object, value: {"target":["agent_runtime_surface_signal_in"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"agent_runtime_surface_signal_in":"agent_runtime_surface_signal"},"out":{}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:kgra_runtime_sandbox"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "runtime_surface"}
      "kgSuperAgent:surfaceKey": {key: "kgSuperAgent:surfaceKey", type: string, value: "sandbox"}
      "kgSuperAgent:surfaceRole": {key: "kgSuperAgent:surfaceRole", type: string, value: "bounded workspace execution and artifact writes"}
      "visual:importance": {key: "visual:importance", type: number, value: 22}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: -1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -5}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 1}
    - id: {key: id, type: string, value: "kgra_runtime_memory"}
      type: {key: type, type: string, value: "runtime_surface"}
      label: {key: label, type: string, value: "Memory"}
      position: {key: position, type: object, value: {"x":-380,"y":-960}}
      handles: {key: handles, type: object, value: {"target":["agent_runtime_surface_signal_in"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"agent_runtime_surface_signal_in":"agent_runtime_surface_signal"},"out":{}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:kgra_runtime_memory"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "runtime_surface"}
      "kgSuperAgent:surfaceKey": {key: "kgSuperAgent:surfaceKey", type: string, value: "memory"}
      "kgSuperAgent:surfaceRole": {key: "kgSuperAgent:surfaceRole", type: string, value: "source hashes, evidence ledger, run manifest, and review audit"}
      "visual:importance": {key: "visual:importance", type: number, value: 22}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: -1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -4}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 1}
    - id: {key: id, type: string, value: "kgra_runtime_tools"}
      type: {key: type, type: string, value: "runtime_surface"}
      label: {key: label, type: string, value: "Tools"}
      position: {key: position, type: object, value: {"x":-380,"y":-480}}
      handles: {key: handles, type: object, value: {"target":["agent_runtime_surface_signal_in"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"agent_runtime_surface_signal_in":"agent_runtime_surface_signal"},"out":{}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:kgra_runtime_tools"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "runtime_surface"}
      "kgSuperAgent:surfaceKey": {key: "kgSuperAgent:surfaceKey", type: string, value: "tools"}
      "kgSuperAgent:surfaceRole": {key: "kgSuperAgent:surfaceRole", type: string, value: "queryable corpus, Source Files, local MCP, and rich-media runtime"}
      "visual:importance": {key: "visual:importance", type: number, value: 22}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: -1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -2}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 1}
    - id: {key: id, type: string, value: "kgra_runtime_skills"}
      type: {key: type, type: string, value: "runtime_surface"}
      label: {key: label, type: string, value: "Skills"}
      position: {key: position, type: object, value: {"x":-380,"y":-240}}
      handles: {key: handles, type: object, value: {"target":["agent_runtime_surface_signal_in"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"agent_runtime_surface_signal_in":"agent_runtime_surface_signal"},"out":{}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:kgra_runtime_skills"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "runtime_surface"}
      "kgSuperAgent:surfaceKey": {key: "kgSuperAgent:surfaceKey", type: string, value: "skills"}
      "kgSuperAgent:surfaceRole": {key: "kgSuperAgent:surfaceRole", type: string, value: "progressively selected Knowgrph capability docs and KGC templates"}
      "visual:importance": {key: "visual:importance", type: number, value: 22}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: -1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -1}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 1}
    - id: {key: id, type: string, value: "kgra_runtime_subagents"}
      type: {key: type, type: string, value: "runtime_surface"}
      label: {key: label, type: string, value: "Subagents"}
      position: {key: position, type: object, value: {"x":-380,"y":0}}
      handles: {key: handles, type: object, value: {"target":["agent_runtime_surface_signal_in"],"source":["agent_subagent_signal_out"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"agent_runtime_surface_signal_in":"agent_runtime_surface_signal"},"out":{"agent_subagent_signal_out":"agent_subagent_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:kgra_runtime_subagents"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 6}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 5}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "runtime_surface"}
      "kgSuperAgent:surfaceKey": {key: "kgSuperAgent:surfaceKey", type: string, value: "subagents"}
      "kgSuperAgent:surfaceRole": {key: "kgSuperAgent:surfaceRole", type: string, value: "bounded delegation across source, compile, code, artifact, and review workers"}
      "visual:importance": {key: "visual:importance", type: number, value: 22}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: -1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 1}
    - id: {key: id, type: string, value: "kgra_subagent_source_scout"}
      type: {key: type, type: string, value: "subagent"}
      label: {key: label, type: string, value: "Source Scout"}
      position: {key: position, type: object, value: {"x":0,"y":-1440}}
      handles: {key: handles, type: object, value: {"target":["agent_subagent_signal_in"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"agent_subagent_signal_in":"agent_subagent_signal"},"out":{}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:kgra_subagent_source_scout"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "subagent"}
      "kgSuperAgent:subagentId": {key: "kgSuperAgent:subagentId", type: string, value: "source_scout"}
      "kgSuperAgent:taskCapabilities": {key: "kgSuperAgent:taskCapabilities", type: string, value: "research"}
      "kgSuperAgent:taskLevels": {key: "kgSuperAgent:taskLevels", type: string, value: "quick_triage, deep_research"}
      "visual:importance": {key: "visual:importance", type: number, value: 20}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 0}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -6}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 1}
    - id: {key: id, type: string, value: "kgra_subagent_thesis_compiler"}
      type: {key: type, type: string, value: "subagent"}
      label: {key: label, type: string, value: "Thesis Compiler"}
      position: {key: position, type: object, value: {"x":0,"y":-1200}}
      handles: {key: handles, type: object, value: {"target":["agent_subagent_signal_in"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"agent_subagent_signal_in":"agent_subagent_signal"},"out":{}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:kgra_subagent_thesis_compiler"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "subagent"}
      "kgSuperAgent:subagentId": {key: "kgSuperAgent:subagentId", type: string, value: "thesis_compiler"}
      "kgSuperAgent:taskCapabilities": {key: "kgSuperAgent:taskCapabilities", type: string, value: "research, create"}
      "kgSuperAgent:taskLevels": {key: "kgSuperAgent:taskLevels", type: string, value: "bounded_compile, deep_research"}
      "visual:importance": {key: "visual:importance", type: number, value: 20}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 0}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -5}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 1}
    - id: {key: id, type: string, value: "kgra_subagent_code_worker"}
      type: {key: type, type: string, value: "subagent"}
      label: {key: label, type: string, value: "Code Worker"}
      position: {key: position, type: object, value: {"x":0,"y":-960}}
      handles: {key: handles, type: object, value: {"target":["agent_subagent_signal_in"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"agent_subagent_signal_in":"agent_subagent_signal"},"out":{}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:kgra_subagent_code_worker"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "subagent"}
      "kgSuperAgent:subagentId": {key: "kgSuperAgent:subagentId", type: string, value: "code_worker"}
      "kgSuperAgent:taskCapabilities": {key: "kgSuperAgent:taskCapabilities", type: string, value: "code"}
      "kgSuperAgent:taskLevels": {key: "kgSuperAgent:taskLevels", type: string, value: "bounded_compile, parallel_build"}
      "visual:importance": {key: "visual:importance", type: number, value: 20}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 0}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -4}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 1}
    - id: {key: id, type: string, value: "kgra_subagent_artifact_builder"}
      type: {key: type, type: string, value: "subagent"}
      label: {key: label, type: string, value: "Artifact Builder"}
      position: {key: position, type: object, value: {"x":0,"y":-840}}
      handles: {key: handles, type: object, value: {"target":["agent_subagent_signal_in"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"agent_subagent_signal_in":"agent_subagent_signal"},"out":{}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:kgra_subagent_artifact_builder"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "subagent"}
      "kgSuperAgent:subagentId": {key: "kgSuperAgent:subagentId", type: string, value: "artifact_builder"}
      "kgSuperAgent:taskCapabilities": {key: "kgSuperAgent:taskCapabilities", type: string, value: "create"}
      "kgSuperAgent:taskLevels": {key: "kgSuperAgent:taskLevels", type: string, value: "bounded_compile, parallel_build"}
      "visual:importance": {key: "visual:importance", type: number, value: 20}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 0}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -3.5}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 1}
    - id: {key: id, type: string, value: "kgra_subagent_review_gate"}
      type: {key: type, type: string, value: "subagent"}
      label: {key: label, type: string, value: "Review Gate"}
      position: {key: position, type: object, value: {"x":0,"y":-720}}
      handles: {key: handles, type: object, value: {"target":["agent_subagent_signal_in"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"agent_subagent_signal_in":"agent_subagent_signal"},"out":{}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:kgra_subagent_review_gate"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "subagent"}
      "kgSuperAgent:subagentId": {key: "kgSuperAgent:subagentId", type: string, value: "review_gate"}
      "kgSuperAgent:taskCapabilities": {key: "kgSuperAgent:taskCapabilities", type: string, value: "research, code, create"}
      "kgSuperAgent:taskLevels": {key: "kgSuperAgent:taskLevels", type: string, value: "quick_triage, bounded_compile, deep_research, parallel_build"}
      "visual:importance": {key: "visual:importance", type: number, value: 20}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 0}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -3}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 1}
    - id: {key: id, type: string, value: "review_audit"}
      type: {key: type, type: string, value: "audit"}
      label: {key: label, type: string, value: "Review Audit"}
      position: {key: position, type: object, value: {"x":0,"y":-600}}
      handles: {key: handles, type: object, value: {"target":["agent_review_signal_in"],"source":["review_audit_signal_out"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"agent_review_signal_in":"agent_review_signal"},"out":{"review_audit_signal_out":"review_audit_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:review_audit"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 2}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "audit"}
      "research:acceptedRejectedRecorded": {key: "research:acceptedRejectedRecorded", type: boolean, value: true}
      "research:activeGraphMutated": {key: "research:activeGraphMutated", type: boolean, value: false}
      "visual:importance": {key: "visual:importance", type: number, value: 24}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 3}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 3}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "run_manifest"}
      type: {key: type, type: string, value: "audit"}
      label: {key: label, type: string, value: "Run Manifest"}
      position: {key: position, type: object, value: {"x":0,"y":-360}}
      handles: {key: handles, type: object, value: {"source":["review_audit_signal_out"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{},"out":{"review_audit_signal_out":"review_audit_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:run_manifest"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "audit"}
      "research:activeGraphMutated": {key: "research:activeGraphMutated", type: boolean, value: false}
      "research:modelCallMode": {key: "research:modelCallMode", type: string, value: "offline-mock"}
      "research:runId": {key: "research:runId", type: string, value: "kgra_run_1659477923"}
      "visual:importance": {key: "visual:importance", type: number, value: 24}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 1}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "open_question_disconfirming"}
      type: {key: type, type: string, value: "open_question"}
      label: {key: label, type: string, value: "What evidence invalidates the thesis?"}
      position: {key: position, type: object, value: {"x":0,"y":-120}}
      handles: {key: handles, type: object, value: {"source":["open_question_signal_out"]}}
      "evidence:label": {key: "evidence:label", type: string, value: "open_question"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{},"out":{"open_question_signal_out":"open_question_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:open_question_disconfirming"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "open_question"}
      "research:claimId": {key: "research:claimId", type: string, value: "kgra_claim_399716083"}
      "research:claimType": {key: "research:claimType", type: string, value: "open_question"}
      "research:confidence": {key: "research:confidence", type: string, value: "low"}
      "visual:importance": {key: "visual:importance", type: number, value: 24}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 3}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 1}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "risk_stale_evidence"}
      type: {key: type, type: string, value: "risk"}
      label: {key: label, type: string, value: "Stale or contradicted evidence risk"}
      position: {key: position, type: object, value: {"x":0,"y":120}}
      handles: {key: handles, type: object, value: {"source":["contradiction_signal_out"]}}
      "evidence:label": {key: "evidence:label", type: string, value: "contradicted"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{},"out":{"contradiction_signal_out":"contradiction_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:risk_stale_evidence"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "risk"}
      "research:claimId": {key: "research:claimId", type: string, value: "kgra_claim_3506683371"}
      "research:claimType": {key: "research:claimType", type: string, value: "risk"}
      "research:confidence": {key: "research:confidence", type: string, value: "low"}
      "visual:importance": {key: "visual:importance", type: number, value: 24}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 3}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "source_customer_interviews"}
      type: {key: type, type: string, value: "source"}
      label: {key: label, type: string, value: "Customer Interviews"}
      position: {key: position, type: object, value: {"x":0,"y":360}}
      handles: {key: handles, type: object, value: {"source":["source_ref_signal_out"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{},"out":{"source_ref_signal_out":"source_ref_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:source_customer_interviews"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "source"}
      "research:contentHash": {key: "research:contentHash", type: string, value: "sha256:e36d9e66521d213875b56bd0fafd7cfa24eeeedd1711429bbc0358f4112d9246"}
      "research:locator": {key: "research:locator", type: string, value: "line:1-1"}
      "research:sourceId": {key: "research:sourceId", type: string, value: "kgra_source_697725692"}
      "visual:importance": {key: "visual:importance", type: number, value: 18}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 1}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "source_unit_economics"}
      type: {key: type, type: string, value: "source"}
      label: {key: label, type: string, value: "Unit Economics Notes"}
      position: {key: position, type: object, value: {"x":0,"y":600}}
      handles: {key: handles, type: object, value: {"source":["source_ref_signal_out"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{},"out":{"source_ref_signal_out":"source_ref_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:source_unit_economics"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "source"}
      "research:contentHash": {key: "research:contentHash", type: string, value: "sha256:7ce0f0fc66f19fe76caaf6650fac5172ecf7ec22182d44cd424e1b5325022210"}
      "research:locator": {key: "research:locator", type: string, value: "line:1-1"}
      "research:sourceId": {key: "research:sourceId", type: string, value: "kgra_source_3376275288"}
      "visual:importance": {key: "visual:importance", type: number, value: 18}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "kgc_apply_owner"}
      type: {key: type, type: string, value: "audit"}
      label: {key: label, type: string, value: "Existing KGC Apply Owner"}
      position: {key: position, type: object, value: {"x":380,"y":-360}}
      handles: {key: handles, type: object, value: {"target":["review_audit_signal_in"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"review_audit_signal_in":"review_audit_signal"},"out":{}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:kgc_apply_owner"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "audit"}
      "research:activeGraphMutated": {key: "research:activeGraphMutated", type: boolean, value: false}
      "research:applyOwner": {key: "research:applyOwner", type: string, value: "canvas/src/features/chat/chatKgcCanvasApply.ts"}
      "visual:importance": {key: "visual:importance", type: number, value: 24}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 3}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -2}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 1}
    - id: {key: id, type: string, value: "claim_founder_review"}
      type: {key: type, type: string, value: "claim"}
      label: {key: label, type: string, value: "Founders want confidence and contradiction tags"}
      position: {key: position, type: object, value: {"x":380,"y":-120}}
      handles: {key: handles, type: object, value: {"target":["source_ref_signal_in"],"source":["rich_media_text_signal_out"]}}
      "evidence:label": {key: "evidence:label", type: string, value: "sourced"}
      "evidence:refs": {key: "evidence:refs", type: string, value: "kgra_evidence_2381903668"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"source_ref_signal_in":"source_ref_signal"},"out":{"rich_media_text_signal_out":"rich_media_text_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:claim_founder_review"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 2}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "claim"}
      "research:claimId": {key: "research:claimId", type: string, value: "kgra_claim_2303438352"}
      "research:claimType": {key: "research:claimType", type: string, value: "fact"}
      "research:confidence": {key: "research:confidence", type: string, value: "medium"}
      "visual:importance": {key: "visual:importance", type: number, value: 28}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 15.65685424949238}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -1}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 1}
    - id: {key: id, type: string, value: "claim_unit_economics"}
      type: {key: type, type: string, value: "claim"}
      label: {key: label, type: string, value: "Gross margin depends on bounded runs and cache reuse"}
      position: {key: position, type: object, value: {"x":380,"y":120}}
      handles: {key: handles, type: object, value: {"target":["source_ref_signal_in"],"source":["sourced_claim_signal_out"]}}
      "evidence:label": {key: "evidence:label", type: string, value: "sourced"}
      "evidence:refs": {key: "evidence:refs", type: string, value: "kgra_evidence_718905064"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"source_ref_signal_in":"source_ref_signal"},"out":{"sourced_claim_signal_out":"sourced_claim_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:claim_unit_economics"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 2}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "claim"}
      "research:claimId": {key: "research:claimId", type: string, value: "kgra_claim_830553302"}
      "research:claimType": {key: "research:claimType", type: string, value: "fact"}
      "research:confidence": {key: "research:confidence", type: string, value: "medium"}
      "visual:importance": {key: "visual:importance", type: number, value: 28}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 15.65685424949238}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 1}
    - id: {key: id, type: string, value: "source_market_entry"}
      type: {key: type, type: string, value: "source"}
      label: {key: label, type: string, value: "Market Entry Notes"}
      position: {key: position, type: object, value: {"x":380,"y":360}}
      handles: {key: handles, type: object, value: {"target":["review_audit_signal_in"],"source":["source_ref_signal_out"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"review_audit_signal_in":"review_audit_signal"},"out":{"source_ref_signal_out":"source_ref_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:source_market_entry"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 2}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "source"}
      "research:contentHash": {key: "research:contentHash", type: string, value: "sha256:e214b9cf624eb8a5c477d5d55ca5626da4ac04dffeff5d05b6928cce9c4b590e"}
      "research:locator": {key: "research:locator", type: string, value: "line:1-1"}
      "research:sourceId": {key: "research:sourceId", type: string, value: "kgra_source_4110639131"}
      "visual:importance": {key: "visual:importance", type: number, value: 18}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 15.65685424949238}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 0}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 1}
    - id: {key: id, type: string, value: "claim_market_need"}
      type: {key: type, type: string, value: "claim"}
      label: {key: label, type: string, value: "SME launch research is fragmented"}
      position: {key: position, type: object, value: {"x":760,"y":-120}}
      handles: {key: handles, type: object, value: {"target":["source_ref_signal_in"],"source":["sourced_claim_signal_out","rich_media_image_signal_out"]}}
      "evidence:label": {key: "evidence:label", type: string, value: "sourced"}
      "evidence:refs": {key: "evidence:refs", type: string, value: "kgra_evidence_2008633339"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"source_ref_signal_in":"source_ref_signal"},"out":{"sourced_claim_signal_out":"sourced_claim_signal","rich_media_image_signal_out":"rich_media_image_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:claim_market_need"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 3}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 2}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "claim"}
      "research:claimId": {key: "research:claimId", type: string, value: "kgra_claim_43612152"}
      "research:claimType": {key: "research:claimType", type: string, value: "fact"}
      "research:confidence": {key: "research:confidence", type: string, value: "medium"}
      "visual:importance": {key: "visual:importance", type: number, value: 28}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 16.928203230275507}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 2}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 2}
    - id: {key: id, type: string, value: "panel_text_research_brief"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel - Text Brief"}
      position: {key: position, type: object, value: {"x":760,"y":120}}
      handles: {key: handles, type: object, value: {"target":["output"],"source":["output"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"output":"rich_media_text_signal"},"out":{"output":"rich_media_text_signal"}}}
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
          ### Review brief

          - Active graph remains unchanged until reviewer acceptance.
          - Source hashes and locators travel with each claim.
          - KGC apply receives accepted candidate deltas only.

      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "text"}
      "visual:height": {key: "visual:height", type: number, value: 203}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:width": {key: "visual:width", type: number, value: 360}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 4}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 3}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 2}
    - id: {key: id, type: string, value: "thesis_assumption"}
      type: {key: type, type: string, value: "assumption"}
      label: {key: label, type: string, value: "Investable vertical SaaS thesis"}
      position: {key: position, type: object, value: {"x":1140,"y":-120}}
      handles: {key: handles, type: object, value: {"target":["sourced_claim_signal_in","contradiction_signal_in","open_question_signal_in"],"source":["review_audit_signal_out"]}}
      "evidence:label": {key: "evidence:label", type: string, value: "assumption"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"sourced_claim_signal_in":"sourced_claim_signal","contradiction_signal_in":"contradiction_signal","open_question_signal_in":"open_question_signal"},"out":{"review_audit_signal_out":"review_audit_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:thesis_assumption"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 5}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 4}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "assumption"}
      "research:claimId": {key: "research:claimId", type: string, value: "kgra_claim_3894056773"}
      "research:claimType": {key: "research:claimType", type: string, value: "assumption"}
      "research:confidence": {key: "research:confidence", type: string, value: "medium"}
      "visual:importance": {key: "visual:importance", type: number, value: 32}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 18.94427190999916}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 3}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -1}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 3}
    - id: {key: id, type: string, value: "panel_image_evidence_map"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel - Evidence Map"}
      position: {key: position, type: object, value: {"x":1140,"y":120}}
      handles: {key: handles, type: object, value: {"target":["imageUrl"],"source":["imageUrl"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"imageUrl":"rich_media_image_signal"},"out":{"imageUrl":"rich_media_image_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      imageUrl: {key: imageUrl, type: text, value: "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20640%20360%22%3E%3Crect%20width=%22640%22%20height=%22360%22%20fill=%22%23f8fafc%22/%3E%3Crect%20x=%2240%22%20y=%2252%22%20width=%22170%22%20height=%2272%22%20rx=%2212%22%20fill=%22%23e0f2fe%22%20stroke=%22%230ea5e9%22/%3E%3Ctext%20x=%2258%22%20y=%2292%22%20font-family=%22system-ui%22%20font-size=%2218%22%20fill=%22%230f172a%22%3ESource%20refs%3C/text%3E%3Crect%20x=%22278%22%20y=%2252%22%20width=%22170%22%20height=%2272%22%20rx=%2212%22%20fill=%22%23dcfce7%22%20stroke=%22%2322c55e%22/%3E%3Ctext%20x=%22306%22%20y=%2292%22%20font-family=%22system-ui%22%20font-size=%2218%22%20fill=%22%230f172a%22%3ETyped%20claims%3C/text%3E%3Crect%20x=%22162%22%20y=%22210%22%20width=%22270%22%20height=%2278%22%20rx=%2212%22%20fill=%22%23fff7ed%22%20stroke=%22%23f59e0b%22/%3E%3Ctext%20x=%22192%22%20y=%22255%22%20font-family=%22system-ui%22%20font-size=%2218%22%20fill=%22%230f172a%22%3EReview%20gate%20before%20KGC%3C/text%3E%3Cpath%20d=%22M210%2088H278%22%20stroke=%22%2364748b%22%20stroke-width=%224%22%20marker-end=%22url(%23arrow)%22/%3E%3Cpath%20d=%22M363%20124C350%20162%20330%20188%20304%20210%22%20stroke=%22%2364748b%22%20stroke-width=%224%22%20fill=%22none%22%20marker-end=%22url(%23arrow)%22/%3E%3Cdefs%3E%3Cmarker%20id=%22arrow%22%20viewBox=%220%200%2010%2010%22%20refX=%229%22%20refY=%225%22%20markerWidth=%226%22%20markerHeight=%226%22%20orient=%22auto-start-reverse%22%3E%3Cpath%20d=%22M0%200l10%205-10%205z%22%20fill=%22%2364748b%22/%3E%3C/marker%3E%3C/defs%3E%3C/svg%3E"}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "image"}
      "visual:height": {key: "visual:height", type: number, value: 268}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:width": {key: "visual:width", type: number, value: 439}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 4}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 4}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 3}
    - id: {key: id, type: string, value: "monitoring_spec"}
      type: {key: type, type: string, value: "audit"}
      label: {key: label, type: string, value: "Monitoring Spec"}
      position: {key: position, type: object, value: {"x":1520,"y":0}}
      handles: {key: handles, type: object, value: {"target":["review_audit_signal_in"],"source":["rich_media_chart_html_out"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"review_audit_signal_in":"review_audit_signal"},"out":{"rich_media_chart_html_out":"rich_media_chart_html"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:monitoring_spec"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 2}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "audit"}
      "research:cadence": {key: "research:cadence", type: string, value: "weekly source refresh; manual disconfirming evidence count"}
      "research:metricIds": {key: "research:metricIds", type: string, value: "kgra_metric_2689250104, kgra_metric_1956522249"}
      "visual:importance": {key: "visual:importance", type: number, value: 20}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 15.65685424949238}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 3}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 2}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 4}
    - id: {key: id, type: string, value: "panel_chart_guardrails"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel - Guardrail Chart"}
      position: {key: position, type: object, value: {"x":1900,"y":0}}
      handles: {key: handles, type: object, value: {"target":["outputSrcDoc"],"source":["outputSrcDoc"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"outputSrcDoc":"rich_media_chart_html"},"out":{"outputSrcDoc":"rich_media_chart_html"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      output: {key: output, type: textarea, value: "Guardrail chart fallback copy; outputSrcDoc owns the rendered chart."}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: "<!doctype html><html><head><meta charset=\"utf-8\"><style>body{margin:0;font-family:system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",sans-serif;background:#f8fafc;color:#0f172a}.wrap{padding:18px}.title{font-size:18px;font-weight:700;margin:0 0 14px}.row{display:grid;grid-template-columns:150px 1fr 40px;gap:10px;align-items:center;margin:10px 0}.track{height:18px;background:#e2e8f0;border-radius:999px;overflow:hidden}.bar{height:100%;background:#14b8a6}.bar.warn{background:#f59e0b}.bar.risk{background:#ef4444}.note{margin-top:14px;font-size:12px;color:#475569}</style></head><body><main class=\"wrap\"><h1 class=\"title\">Research agent guardrail chart</h1><div class=\"row\"><span>Source hashes</span><span class=\"track\"><span class=\"bar\" style=\"display:block;width:100%\"></span></span><strong>3</strong></div><div class=\"row\"><span>Claims staged</span><span class=\"track\"><span class=\"bar\" style=\"display:block;width:75%\"></span></span><strong>3</strong></div><div class=\"row\"><span>Open risks</span><span class=\"track\"><span class=\"bar risk\" style=\"display:block;width:25%\"></span></span><strong>1</strong></div><div class=\"row\"><span>Review gate</span><span class=\"track\"><span class=\"bar warn\" style=\"display:block;width:50%\"></span></span><strong>on</strong></div><p class=\"note\">Staged graph remains separate until review acceptance.</p></main></body></html>"}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "text"}
      "visual:height": {key: "visual:height", type: number, value: 203}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:width": {key: "visual:width", type: number, value: 360}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 4}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -3}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 5}
  edges:
    - {"id":"edge_openai_to_superagent","source":"integration_openai","sourceHandle":"integration_provider_signal_out","target":"kgra_superagent_harness","targetHandle":"integration_provider_signal_in","label":"chat gateway","type":"integration_provider_signal"}
    - {"id":"edge_byteplus_to_superagent","source":"integration_byteplus","sourceHandle":"integration_provider_signal_out","target":"kgra_superagent_harness","targetHandle":"integration_provider_signal_in","label":"modelark gateway","type":"integration_provider_signal"}
    - {"id":"edge_agnes_to_superagent","source":"integration_agnes","sourceHandle":"integration_provider_signal_out","target":"kgra_superagent_harness","targetHandle":"integration_provider_signal_in","label":"agent gateway","type":"integration_provider_signal"}
    - {"id":"edge_miromind_to_superagent","source":"integration_miromind","sourceHandle":"integration_provider_signal_out","target":"kgra_superagent_harness","targetHandle":"integration_provider_signal_in","label":"research gateway","type":"integration_provider_signal"}
    - {"id":"edge_qwen_to_superagent","source":"integration_qwen","sourceHandle":"integration_provider_signal_out","target":"kgra_superagent_harness","targetHandle":"integration_provider_signal_in","label":"qwen gateway","type":"integration_provider_signal"}
    - {"id":"edge_google_cloud_to_superagent","source":"integration_google_cloud","sourceHandle":"integration_provider_signal_out","target":"kgra_superagent_harness","targetHandle":"integration_provider_signal_in","label":"vertex gateway","type":"integration_provider_signal"}
    - {"id":"edge_superagent_to_review","source":"kgra_superagent_harness","sourceHandle":"agent_review_signal_out","target":"review_audit","targetHandle":"agent_review_signal_in","label":"review before apply","type":"agent_review_signal"}
    - {"id":"edge_superagent_to_runtime_message_gateway","source":"kgra_superagent_harness","sourceHandle":"agent_runtime_surface_signal_out","target":"kgra_runtime_message_gateway","targetHandle":"agent_runtime_surface_signal_in","label":"ingress","type":"agent_runtime_surface_signal"}
    - {"id":"edge_superagent_to_runtime_sandbox","source":"kgra_superagent_harness","sourceHandle":"agent_runtime_surface_signal_out","target":"kgra_runtime_sandbox","targetHandle":"agent_runtime_surface_signal_in","label":"bounded execution","type":"agent_runtime_surface_signal"}
    - {"id":"edge_superagent_to_runtime_memory","source":"kgra_superagent_harness","sourceHandle":"agent_runtime_surface_signal_out","target":"kgra_runtime_memory","targetHandle":"agent_runtime_surface_signal_in","label":"run memory","type":"agent_runtime_surface_signal"}
    - {"id":"edge_superagent_to_runtime_tools","source":"kgra_superagent_harness","sourceHandle":"agent_runtime_surface_signal_out","target":"kgra_runtime_tools","targetHandle":"agent_runtime_surface_signal_in","label":"tools","type":"agent_runtime_surface_signal"}
    - {"id":"edge_superagent_to_runtime_skills","source":"kgra_superagent_harness","sourceHandle":"agent_runtime_surface_signal_out","target":"kgra_runtime_skills","targetHandle":"agent_runtime_surface_signal_in","label":"skills","type":"agent_runtime_surface_signal"}
    - {"id":"edge_superagent_to_runtime_subagents","source":"kgra_superagent_harness","sourceHandle":"agent_runtime_surface_signal_out","target":"kgra_runtime_subagents","targetHandle":"agent_runtime_surface_signal_in","label":"subagents","type":"agent_runtime_surface_signal"}
    - {"id":"edge_runtime_subagents_to_source_scout","source":"kgra_runtime_subagents","sourceHandle":"agent_subagent_signal_out","target":"kgra_subagent_source_scout","targetHandle":"agent_subagent_signal_in","label":"source research","type":"agent_subagent_signal"}
    - {"id":"edge_runtime_subagents_to_thesis_compiler","source":"kgra_runtime_subagents","sourceHandle":"agent_subagent_signal_out","target":"kgra_subagent_thesis_compiler","targetHandle":"agent_subagent_signal_in","label":"compile thesis","type":"agent_subagent_signal"}
    - {"id":"edge_runtime_subagents_to_code_worker","source":"kgra_runtime_subagents","sourceHandle":"agent_subagent_signal_out","target":"kgra_subagent_code_worker","targetHandle":"agent_subagent_signal_in","label":"code task","type":"agent_subagent_signal"}
    - {"id":"edge_runtime_subagents_to_artifact_builder","source":"kgra_runtime_subagents","sourceHandle":"agent_subagent_signal_out","target":"kgra_subagent_artifact_builder","targetHandle":"agent_subagent_signal_in","label":"create artifact","type":"agent_subagent_signal"}
    - {"id":"edge_runtime_subagents_to_review_gate","source":"kgra_runtime_subagents","sourceHandle":"agent_subagent_signal_out","target":"kgra_subagent_review_gate","targetHandle":"agent_subagent_signal_in","label":"review gate","type":"agent_subagent_signal"}
    - {"id":"edge_source_market_to_claim","source":"source_market_entry","sourceHandle":"source_ref_signal_out","target":"claim_market_need","targetHandle":"source_ref_signal_in","label":"evidence","type":"source_ref_signal"}
    - {"id":"edge_source_interviews_to_claim","source":"source_customer_interviews","sourceHandle":"source_ref_signal_out","target":"claim_founder_review","targetHandle":"source_ref_signal_in","label":"evidence","type":"source_ref_signal"}
    - {"id":"edge_source_economics_to_claim","source":"source_unit_economics","sourceHandle":"source_ref_signal_out","target":"claim_unit_economics","targetHandle":"source_ref_signal_in","label":"evidence","type":"source_ref_signal"}
    - {"id":"edge_manifest_to_sources","source":"run_manifest","sourceHandle":"review_audit_signal_out","target":"source_market_entry","targetHandle":"review_audit_signal_in","label":"source hash locked","type":"review_audit_signal"}
    - {"id":"edge_claim_supports_thesis","source":"claim_market_need","sourceHandle":"sourced_claim_signal_out","target":"thesis_assumption","targetHandle":"sourced_claim_signal_in","label":"supports","type":"sourced_claim_signal"}
    - {"id":"edge_economics_supports_thesis","source":"claim_unit_economics","sourceHandle":"sourced_claim_signal_out","target":"thesis_assumption","targetHandle":"sourced_claim_signal_in","label":"depends on margin","type":"sourced_claim_signal"}
    - {"id":"edge_risk_contradicts_thesis","source":"risk_stale_evidence","sourceHandle":"contradiction_signal_out","target":"thesis_assumption","targetHandle":"contradiction_signal_in","label":"contradicts","type":"contradiction_signal"}
    - {"id":"edge_question_depends_on_thesis","source":"open_question_disconfirming","sourceHandle":"open_question_signal_out","target":"thesis_assumption","targetHandle":"open_question_signal_in","label":"depends_on","type":"open_question_signal"}
    - {"id":"edge_thesis_to_monitoring","source":"thesis_assumption","sourceHandle":"review_audit_signal_out","target":"monitoring_spec","targetHandle":"review_audit_signal_in","label":"tracked by","type":"review_audit_signal"}
    - {"id":"edge_review_to_apply_owner","source":"review_audit","sourceHandle":"review_audit_signal_out","target":"kgc_apply_owner","targetHandle":"review_audit_signal_in","label":"accepted candidates only","type":"review_audit_signal"}
    - {"id":"edge_founder_review_to_text_panel","source":"claim_founder_review","sourceHandle":"rich_media_text_signal_out","target":"panel_text_research_brief","targetHandle":"output","label":"text output","type":"rich_media_text_signal"}
    - {"id":"edge_market_claim_to_image_panel","source":"claim_market_need","sourceHandle":"rich_media_image_signal_out","target":"panel_image_evidence_map","targetHandle":"imageUrl","label":"image output","type":"rich_media_image_signal"}
    - {"id":"edge_monitoring_to_chart_panel","source":"monitoring_spec","sourceHandle":"rich_media_chart_html_out","target":"panel_chart_guardrails","targetHandle":"outputSrcDoc","label":"chart outputSrcDoc","type":"rich_media_chart_html"}
---

# Knowgrph Research Agent Demo - Review-First Thesis Graph

This publish-side demo turns the research-agent PRD/TAD into an inspectable
Knowgrph document. It demonstrates the dev-source research thesis capability:
selected source refs become a manifest, typed claims, evidence labels, logic
edges, monitoring metrics, and a staged graph delta that stays separate from
the active graph until review. The same frontmatter graph also renders three
native Rich Media Panel outputs: a text brief, an image evidence map, and an
inline chart panel.

The same document now demonstrates a Knowgrph-native long-horizon SuperAgent
harness: a lead run researches sources, delegates bounded code and artifact
work, writes outputs through shared owners, and creates Text, Image, and Chart
Rich Media Panels without bypassing review.

The MainPanel Integrations lane is represented as first-class Flow Editor
nodes for OpenAI, BytePlus ModelArk, Agnes AI, MiroMind, and Qwen. Those
provider nodes feed the shared SuperAgent gateway and do not introduce
provider-specific renderer branches, local path assumptions, or downstream
alias remaps.

Runtime surfaces and delegated subagents are also represented as first-class
Flow Editor nodes. The demo therefore proves message gateway, sandbox, memory,
tools, skills, and subagents through the same ingestion, parser, and canvas
rendering path as the rest of the graph.

This is not a live Cloudflare route proof. The Dev repo contains the Worker
source and D1 migration, but this demo must not be read as a deployed
`/api/research/*` claim until Prod/Cloudflare deployment and route validation
are explicitly run.

## Demo Input

| Input | Value |
| Prompt | Evaluate whether a Singapore SME launch analytics product can become an investable vertical SaaS thesis after source review. |
| Run id | `kgra_run_1659477923` |
| Mode | `offline-mock` deterministic dev harness |
| Source count | `3` |
| Active graph mutation | `false` before review |
| Commit owner | `canvas/src/features/chat/chatKgcCanvasApply.ts` |
| Rich media outputs | Text, Image, Chart |
| Harness extension | Knowgrph-native long-horizon SuperAgent demo |
| MainPanel provider lane | OpenAI, BytePlus ModelArk, Agnes AI, MiroMind, Qwen |
| Inspiration boundary | `bytedance/deer-flow` concepts only; no copied code or architecture |

## SuperAgent Harness Extension

The harness extension keeps the existing review-first research graph as the
source of truth while adding a reusable long-horizon execution envelope. It is
not a DeerFlow clone and it does not introduce a second Flow Editor renderer,
graph parser, or apply path. The demo treats external SuperAgent ideas as
conceptual input only and routes every concrete output through Knowgrph owners.

| Surface | Demo role |
| MainPanel provider lane | Routes OpenAI, BytePlus ModelArk, Agnes AI, MiroMind, and Qwen through the shared Integrations -> Chat gateway. |
| Lead run | Creates the manifest, allocates scoped work, synthesizes results, and keeps candidates staged. |
| Message gateway | Accepts work from MainPanel Integrations, FloatingPanel Chat, Agent-ready WebMCP, or the optional DeerFlow local gateway provider. |
| Sandbox | Runs bounded workspace tasks and writes artifacts through Source Files or shared rich-media owners. |
| Memory | Reuses source hashes, the run manifest, evidence ledger, cost log, and review audit. |
| Tools | Uses queryable corpus, Source Files, local MCP/WebMCP, provider-neutral chat, and shared rich-media runtime. |
| Skills | Loads only the Knowgrph capability docs and KGC templates needed by the task. |
| Subagents | Scopes source scouting, thesis compilation, code work, artifact creation, and review as independent task slices. |
| Review gate | Hands accepted candidates to `canvas/src/features/chat/chatKgcCanvasApply.ts`; rejected candidates remain audit-only. |

## Long-Horizon Run Contract

```json
{
  "schema_version": "knowgrph-superagent-harness-demo/v1",
  "harness_id": "kgra_superagent_harness",
  "run_id": "kgra_superagent_run_20260604",
  "source_run_id": "kgra_run_1659477923",
  "mode": "offline-mock-long-horizon",
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
    "text": "panel_text_research_brief.output",
    "image": "panel_image_evidence_map.imageUrl",
    "chart": "panel_chart_guardrails.outputSrcDoc"
  },
  "active_graph_mutated": false
}
```

## Research-Code-Create Loop

| Loop stage | Agent slice | Output owner |
| Research | Source scout and thesis compiler read selected Source Files and queryable corpus refs. | `researchThesisContract.ts` source refs and evidence ledger |
| Code | Code worker prepares bounded implementation notes, patches, or runnable snippets only when the reviewed task requires them. | Source Files or existing repo owners, never generated downstream mirrors |
| Create | Artifact builder emits Text, Image, and Chart panel payloads. | `richMediaRun.ts` and Rich Media Panel fields |
| Review | Review gate records accepted, rejected, and deferred candidates before graph apply. | `chatKgcCanvasApply.ts` after human review |

## Non-Copy Inspiration Boundary

The external Deer Flow project is referenced because it describes a modern
long-horizon harness pattern with sandboxes, memory, skills, tools, subagents,
and message gateways. This demo forbids copied code, copied architecture,
provider-specific renderer branches, hardcoded local paths, legacy remapping,
or downstream alias stacks. Knowgrph remains the source authority.

## Source Refs

| Source | Source id | Hash | Evidence role |
| `/workspace/research/market-entry-notes.md` | `kgra_source_4110639131` | `sha256:e214b9cf624eb8a5c477d5d55ca5626da4ac04dffeff5d05b6928cce9c4b590e` | Market need and launch friction |
| `/workspace/research/customer-interviews.md` | `kgra_source_697725692` | `sha256:e36d9e66521d213875b56bd0fafd7cfa24eeeedd1711429bbc0358f4112d9246` | Founder review needs |
| `/workspace/research/unit-economics.md` | `kgra_source_3376275288` | `sha256:7ce0f0fc66f19fe76caaf6650fac5172ecf7ec22182d44cd424e1b5325022210` | Cost and cache guardrails |

## Candidate Claims

| Claim id | Type | Evidence label | Review status |
| `kgra_claim_43612152` | `fact` | `sourced` | Candidate |
| `kgra_claim_2303438352` | `fact` | `sourced` | Candidate |
| `kgra_claim_830553302` | `fact` | `sourced` | Candidate |
| `kgra_claim_3894056773` | `assumption` | `assumption` | Candidate |
| `kgra_claim_3506683371` | `risk` | `contradicted` | Candidate |
| `kgra_claim_399716083` | `open_question` | `open_question` | Candidate |

## Thesis Spec Artifact

```json
{
  "schema_version": "research-thesis-spec/v1",
  "run_id": "kgra_run_1659477923",
  "thesis_title": "Evaluate whether a Singapore SME launch analytics product can become an investable vertical SaaS thesis after source review",
  "source_refs": [
    {
      "source_id": "kgra_source_4110639131",
      "canonical_path": "/workspace/research/market-entry-notes.md",
      "content_hash": "sha256:e214b9cf624eb8a5c477d5d55ca5626da4ac04dffeff5d05b6928cce9c4b590e"
    },
    {
      "source_id": "kgra_source_697725692",
      "canonical_path": "/workspace/research/customer-interviews.md",
      "content_hash": "sha256:e36d9e66521d213875b56bd0fafd7cfa24eeeedd1711429bbc0358f4112d9246"
    },
    {
      "source_id": "kgra_source_3376275288",
      "canonical_path": "/workspace/research/unit-economics.md",
      "content_hash": "sha256:7ce0f0fc66f19fe76caaf6650fac5172ecf7ec22182d44cd424e1b5325022210"
    }
  ],
  "logic_edges": [
    {
      "edge_id": "kgra_edge_2492300373",
      "from_claim_id": "kgra_claim_43612152",
      "to_claim_id": "kgra_claim_3894056773",
      "relation": "supports"
    },
    {
      "edge_id": "kgra_edge_3903982305",
      "from_claim_id": "kgra_claim_3506683371",
      "to_claim_id": "kgra_claim_3894056773",
      "relation": "contradicts"
    },
    {
      "edge_id": "kgra_edge_3935083546",
      "from_claim_id": "kgra_claim_399716083",
      "to_claim_id": "kgra_claim_3894056773",
      "relation": "depends_on"
    }
  ],
  "monitoring": [
    {
      "metric_id": "kgra_metric_2689250104",
      "label": "Source refresh status",
      "source_hint": "/workspace/research/market-entry-notes.md",
      "refresh_cadence": "weekly"
    },
    {
      "metric_id": "kgra_metric_1956522249",
      "label": "Disconfirming evidence count",
      "source_hint": "review ledger",
      "refresh_cadence": "manual"
    }
  ]
}
```

## Review-First Contract

The generated candidate graph is deliberately staged:

```json
{
  "schema_version": "research-thesis-candidate-delta/v1",
  "run_id": "kgra_run_1659477923",
  "status": "staged",
  "active_graph_mutated": false,
  "apply_owner": "canvas/src/features/chat/chatKgcCanvasApply.ts"
}
```

Accepted candidates may be handed to the existing KGC apply owner. Rejected
candidates stay in the review audit and do not become active graph nodes or
edges.

For long-horizon runs, the same review gate also accepts or rejects code and
created artifact candidates. No source hash, generated file, Rich Media Panel,
or graph edge becomes authoritative until the review audit records the choice.

## Cost And Guardrail Proof

| Guardrail | Demo value | Why it matters |
|---|---:|---|
| Model mode | `offline-mock` | Shows a deterministic CI-safe path. |
| Prompt tokens | `153` | Demonstrates bounded request size. |
| Completion tokens | `1108` | Demonstrates typed output instead of unbounded report prose. |
| Estimated cost USD | `0` | Keeps the demo local and provider-neutral. |
| Source hash reuse | `false` | First run builds extraction summaries; unchanged hashes can be cached. |
| Harness runtime | `offline-mock-long-horizon` | Demonstrates minutes-to-hours orchestration without a deploy claim. |
| Review gate | `accepted_candidates_only` | Prevents graph, code, or artifact output from bypassing review. |

## Rich Media Panel Outputs

| Panel | Native output field | Rendered role |
| `panel_text_research_brief` | `output` | Markdown review brief for the staged thesis graph. |
| `panel_image_evidence_map` | `imageUrl` | Inline SVG evidence map rendered through the Image tab. |
| `panel_chart_guardrails` | `outputSrcDoc` | HTML chart rendered through the shared Rich Media Panel `srcDoc` path. |

## How To Inspect In Knowgrph

1. Open this Source File in Knowgrph.
2. Use 2D mode with `2D Renderer: Flow Editor`.
3. Verify OpenAI, BytePlus ModelArk, Agnes AI, MiroMind, and Qwen integration
   nodes feed the shared SuperAgent harness node.
4. Verify source nodes feed sourced claim nodes through evidence edges.
5. Verify the risk node contradicts the thesis assumption node.
6. Verify the open-question node remains explicit instead of hidden in prose.
7. Verify the review/audit node points to the existing KGC apply owner.
8. Verify the three Rich Media Panels render Text, Image, and Chart outputs.
9. Do not treat this document as proof of a deployed research API route.
10. Confirm `superagent_harness_demo` remains metadata and does not add a
   second renderer, parser, provider adapter, or graph apply owner.

## KGC Reading Layer

@node:source:source_market_entry Source ref `kgra_source_4110639131` anchors the market-entry evidence window.

@node:integration:integration_openai OpenAI is available through MainPanel Integrations and the shared chat gateway.

@node:integration:integration_byteplus BytePlus ModelArk is available through MainPanel Integrations and the shared chat gateway.

@node:integration:integration_agnes Agnes AI is available through MainPanel Integrations and the shared chat gateway.

@node:integration:integration_miromind MiroMind is available through MainPanel Integrations and the shared chat gateway.

@node:integration:integration_qwen Qwen API is available through MainPanel Integrations and the shared chat gateway.

@node:source:source_customer_interviews Source ref `kgra_source_697725692` anchors the founder interview evidence window.

@node:source:source_unit_economics Source ref `kgra_source_3376275288` anchors the unit-economics evidence window.

@node:claim:claim_market_need SMEs entering Singapore need market sizing, compliance checks, localization planning, and evidence-backed launch sequencing.

@node:claim:claim_founder_review Founders want confidence tags, contradiction flags, and a monitoring checklist before committing budget.

@node:claim:claim_unit_economics Gross margin depends on bounded model calls, cached source extraction, and review-first graph commits.

@node:assumption:thesis_assumption The investable vertical SaaS thesis remains a candidate assumption until review.

@node:risk:risk_stale_evidence The thesis weakens if source evidence is incomplete, stale, or contradicted by later operating metrics.

@node:open_question:open_question_disconfirming What disconfirming evidence would invalidate the thesis before execution or capital commitment?

@node:rich_media:panel_text_research_brief Text Rich Media Panel renders the staged research brief.

@node:rich_media:panel_image_evidence_map Image Rich Media Panel renders the evidence-to-thesis map.

@node:rich_media:panel_chart_guardrails Chart Rich Media Panel renders guardrail counts from `outputSrcDoc`.

@node:agent:kgra_superagent_harness Long-horizon SuperAgent harness coordinates research, code, and create task slices through shared Knowgrph owners.

@edge:supports source_market_entry -> claim_market_need
@edge:integration integration_openai -> kgra_superagent_harness
@edge:integration integration_byteplus -> kgra_superagent_harness
@edge:integration integration_agnes -> kgra_superagent_harness
@edge:integration integration_miromind -> kgra_superagent_harness
@edge:integration integration_qwen -> kgra_superagent_harness
@edge:integration integration_google_cloud -> kgra_superagent_harness
@edge:review kgra_superagent_harness -> review_audit
@edge:supports claim_market_need -> thesis_assumption
@edge:supports claim_unit_economics -> thesis_assumption
@edge:contradicts risk_stale_evidence -> thesis_assumption
@edge:depends_on open_question_disconfirming -> thesis_assumption
@edge:review review_audit -> kgc_apply_owner
@edge:rich_media claim_founder_review -> panel_text_research_brief
@edge:rich_media claim_market_need -> panel_image_evidence_map
@edge:rich_media monitoring_spec -> panel_chart_guardrails
