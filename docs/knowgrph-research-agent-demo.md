---
title: "Knowgrph Research Agent Demo - Review-First Thesis Graph"
graphId: "md:knowgrph-research-agent-demo-review-first-thesis-graph"
doc_type: "Research Agent Demo"
date: "2026-06-03"
lang: "en-US"
schema: "kgc-computing-flow/v1"

implementation_contract: "docs/documents/knowgrph-research-agent-prd-tad.md"
source_truth:
  - "canvas/src/features/research-agent/researchThesisContract.ts"
  - "canvas/src/features/research-agent/researchThesisTypes.ts"
  - "cloudflare/workers/knowgrph-research/index.ts"
  - "cloudflare/d1/migrations/0005_research_thesis.sql"
demo_status: "dev-source capability demo; no Prod or Cloudflare deploy claim"
deployed_api_claim: false
live_route_validation_required_before_claim: true

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
  rich_media_text_signal: {color: "#14b8a6", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [rich_media_text_signal]}
  rich_media_image_signal: {color: "#38bdf8", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [rich_media_image_signal]}
  rich_media_chart_html: {color: "#f59e0b", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [rich_media_chart_html]}

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

workflow_sections:
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
    - id: {key: id, type: string, value: "source_market_entry"}
      type: {key: type, type: string, value: "source"}
      label: {key: label, type: string, value: "Market Entry Notes"}
      "research:sourceId": {key: "research:sourceId", type: string, value: "kgra_source_4110639131"}
      "research:contentHash": {key: "research:contentHash", type: string, value: "sha256:e214b9cf624eb8a5c477d5d55ca5626da4ac04dffeff5d05b6928cce9c4b590e"}
      "research:locator": {key: "research:locator", type: string, value: "line:1-1"}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "source"}
      "visual:importance": {key: "visual:importance", type: number, value: 18}
    - id: {key: id, type: string, value: "source_customer_interviews"}
      type: {key: type, type: string, value: "source"}
      label: {key: label, type: string, value: "Customer Interviews"}
      "research:sourceId": {key: "research:sourceId", type: string, value: "kgra_source_697725692"}
      "research:contentHash": {key: "research:contentHash", type: string, value: "sha256:e36d9e66521d213875b56bd0fafd7cfa24eeeedd1711429bbc0358f4112d9246"}
      "research:locator": {key: "research:locator", type: string, value: "line:1-1"}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "source"}
      "visual:importance": {key: "visual:importance", type: number, value: 18}
    - id: {key: id, type: string, value: "source_unit_economics"}
      type: {key: type, type: string, value: "source"}
      label: {key: label, type: string, value: "Unit Economics Notes"}
      "research:sourceId": {key: "research:sourceId", type: string, value: "kgra_source_3376275288"}
      "research:contentHash": {key: "research:contentHash", type: string, value: "sha256:7ce0f0fc66f19fe76caaf6650fac5172ecf7ec22182d44cd424e1b5325022210"}
      "research:locator": {key: "research:locator", type: string, value: "line:1-1"}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "source"}
      "visual:importance": {key: "visual:importance", type: number, value: 18}
    - id: {key: id, type: string, value: "run_manifest"}
      type: {key: type, type: string, value: "audit"}
      label: {key: label, type: string, value: "Run Manifest"}
      "research:runId": {key: "research:runId", type: string, value: "kgra_run_1659477923"}
      "research:activeGraphMutated": {key: "research:activeGraphMutated", type: boolean, value: false}
      "research:modelCallMode": {key: "research:modelCallMode", type: string, value: "offline-mock"}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "audit"}
      "visual:importance": {key: "visual:importance", type: number, value: 24}
    - id: {key: id, type: string, value: "claim_market_need"}
      type: {key: type, type: string, value: "claim"}
      label: {key: label, type: string, value: "SME launch research is fragmented"}
      "research:claimId": {key: "research:claimId", type: string, value: "kgra_claim_43612152"}
      "research:claimType": {key: "research:claimType", type: string, value: "fact"}
      "research:confidence": {key: "research:confidence", type: string, value: "medium"}
      "evidence:label": {key: "evidence:label", type: string, value: "sourced"}
      "evidence:refs": {key: "evidence:refs", type: string, value: "kgra_evidence_2008633339"}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "claim"}
      "visual:importance": {key: "visual:importance", type: number, value: 28}
    - id: {key: id, type: string, value: "claim_founder_review"}
      type: {key: type, type: string, value: "claim"}
      label: {key: label, type: string, value: "Founders want confidence and contradiction tags"}
      "research:claimId": {key: "research:claimId", type: string, value: "kgra_claim_2303438352"}
      "research:claimType": {key: "research:claimType", type: string, value: "fact"}
      "research:confidence": {key: "research:confidence", type: string, value: "medium"}
      "evidence:label": {key: "evidence:label", type: string, value: "sourced"}
      "evidence:refs": {key: "evidence:refs", type: string, value: "kgra_evidence_2381903668"}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "claim"}
      "visual:importance": {key: "visual:importance", type: number, value: 28}
    - id: {key: id, type: string, value: "claim_unit_economics"}
      type: {key: type, type: string, value: "claim"}
      label: {key: label, type: string, value: "Gross margin depends on bounded runs and cache reuse"}
      "research:claimId": {key: "research:claimId", type: string, value: "kgra_claim_830553302"}
      "research:claimType": {key: "research:claimType", type: string, value: "fact"}
      "research:confidence": {key: "research:confidence", type: string, value: "medium"}
      "evidence:label": {key: "evidence:label", type: string, value: "sourced"}
      "evidence:refs": {key: "evidence:refs", type: string, value: "kgra_evidence_718905064"}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "claim"}
      "visual:importance": {key: "visual:importance", type: number, value: 28}
    - id: {key: id, type: string, value: "thesis_assumption"}
      type: {key: type, type: string, value: "assumption"}
      label: {key: label, type: string, value: "Investable vertical SaaS thesis"}
      "research:claimId": {key: "research:claimId", type: string, value: "kgra_claim_3894056773"}
      "research:claimType": {key: "research:claimType", type: string, value: "assumption"}
      "research:confidence": {key: "research:confidence", type: string, value: "medium"}
      "evidence:label": {key: "evidence:label", type: string, value: "assumption"}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "assumption"}
      "visual:importance": {key: "visual:importance", type: number, value: 32}
    - id: {key: id, type: string, value: "risk_stale_evidence"}
      type: {key: type, type: string, value: "risk"}
      label: {key: label, type: string, value: "Stale or contradicted evidence risk"}
      "research:claimId": {key: "research:claimId", type: string, value: "kgra_claim_3506683371"}
      "research:claimType": {key: "research:claimType", type: string, value: "risk"}
      "research:confidence": {key: "research:confidence", type: string, value: "low"}
      "evidence:label": {key: "evidence:label", type: string, value: "contradicted"}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "risk"}
      "visual:importance": {key: "visual:importance", type: number, value: 24}
    - id: {key: id, type: string, value: "open_question_disconfirming"}
      type: {key: type, type: string, value: "open_question"}
      label: {key: label, type: string, value: "What evidence invalidates the thesis?"}
      "research:claimId": {key: "research:claimId", type: string, value: "kgra_claim_399716083"}
      "research:claimType": {key: "research:claimType", type: string, value: "open_question"}
      "research:confidence": {key: "research:confidence", type: string, value: "low"}
      "evidence:label": {key: "evidence:label", type: string, value: "open_question"}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "open_question"}
      "visual:importance": {key: "visual:importance", type: number, value: 24}
    - id: {key: id, type: string, value: "monitoring_spec"}
      type: {key: type, type: string, value: "audit"}
      label: {key: label, type: string, value: "Monitoring Spec"}
      "research:metricIds": {key: "research:metricIds", type: string, value: "kgra_metric_2689250104, kgra_metric_1956522249"}
      "research:cadence": {key: "research:cadence", type: string, value: "weekly source refresh; manual disconfirming evidence count"}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "audit"}
      "visual:importance": {key: "visual:importance", type: number, value: 20}
    - id: {key: id, type: string, value: "review_audit"}
      type: {key: type, type: string, value: "audit"}
      label: {key: label, type: string, value: "Review Audit"}
      "research:acceptedRejectedRecorded": {key: "research:acceptedRejectedRecorded", type: boolean, value: true}
      "research:activeGraphMutated": {key: "research:activeGraphMutated", type: boolean, value: false}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "audit"}
      "visual:importance": {key: "visual:importance", type: number, value: 24}
    - id: {key: id, type: string, value: "kgc_apply_owner"}
      type: {key: type, type: string, value: "audit"}
      label: {key: label, type: string, value: "Existing KGC Apply Owner"}
      "research:applyOwner": {key: "research:applyOwner", type: string, value: "canvas/src/features/chat/chatKgcCanvasApply.ts"}
      "research:activeGraphMutated": {key: "research:activeGraphMutated", type: boolean, value: false}
      "kgc:nodeType": {key: "kgc:nodeType", type: string, value: "audit"}
      "visual:importance": {key: "visual:importance", type: number, value: 24}
    - id: {key: id, type: string, value: "panel_text_research_brief"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel - Text Brief"}
      handles: {key: handles, type: object, value: {target: ["output"], source: ["output"]}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {in: {output: rich_media_text_signal}, out: {output: rich_media_text_signal}}}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "text"}
      output:
        key: output
        type: textarea
        value: |-
          ### Review brief

          - Active graph remains unchanged until reviewer acceptance.
          - Source hashes and locators travel with each claim.
          - KGC apply receives accepted candidate deltas only.
    - id: {key: id, type: string, value: "panel_image_evidence_map"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel - Evidence Map"}
      handles: {key: handles, type: object, value: {target: ["imageUrl"], source: ["imageUrl"]}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {in: {imageUrl: rich_media_image_signal}, out: {imageUrl: rich_media_image_signal}}}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "image"}
      imageUrl: {key: imageUrl, type: string, value: "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20640%20360%22%3E%3Crect%20width=%22640%22%20height=%22360%22%20fill=%22%23f8fafc%22/%3E%3Crect%20x=%2240%22%20y=%2252%22%20width=%22170%22%20height=%2272%22%20rx=%2212%22%20fill=%22%23e0f2fe%22%20stroke=%22%230ea5e9%22/%3E%3Ctext%20x=%2258%22%20y=%2292%22%20font-family=%22system-ui%22%20font-size=%2218%22%20fill=%22%230f172a%22%3ESource%20refs%3C/text%3E%3Crect%20x=%22278%22%20y=%2252%22%20width=%22170%22%20height=%2272%22%20rx=%2212%22%20fill=%22%23dcfce7%22%20stroke=%22%2322c55e%22/%3E%3Ctext%20x=%22306%22%20y=%2292%22%20font-family=%22system-ui%22%20font-size=%2218%22%20fill=%22%230f172a%22%3ETyped%20claims%3C/text%3E%3Crect%20x=%22162%22%20y=%22210%22%20width=%22270%22%20height=%2278%22%20rx=%2212%22%20fill=%22%23fff7ed%22%20stroke=%22%23f59e0b%22/%3E%3Ctext%20x=%22192%22%20y=%22255%22%20font-family=%22system-ui%22%20font-size=%2218%22%20fill=%22%230f172a%22%3EReview%20gate%20before%20KGC%3C/text%3E%3Cpath%20d=%22M210%2088H278%22%20stroke=%22%2364748b%22%20stroke-width=%224%22%20marker-end=%22url(%23arrow)%22/%3E%3Cpath%20d=%22M363%20124C350%20162%20330%20188%20304%20210%22%20stroke=%22%2364748b%22%20stroke-width=%224%22%20fill=%22none%22%20marker-end=%22url(%23arrow)%22/%3E%3Cdefs%3E%3Cmarker%20id=%22arrow%22%20viewBox=%220%200%2010%2010%22%20refX=%229%22%20refY=%225%22%20markerWidth=%226%22%20markerHeight=%226%22%20orient=%22auto-start-reverse%22%3E%3Cpath%20d=%22M0%200l10%205-10%205z%22%20fill=%22%2364748b%22/%3E%3C/marker%3E%3C/defs%3E%3C/svg%3E"}
    - id: {key: id, type: string, value: "panel_chart_guardrails"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel - Guardrail Chart"}
      handles: {key: handles, type: object, value: {target: ["outputSrcDoc"], source: ["outputSrcDoc"]}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {in: {outputSrcDoc: rich_media_chart_html}, out: {outputSrcDoc: rich_media_chart_html}}}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "text"}
      output: {key: output, type: string, value: "Guardrail chart fallback copy; outputSrcDoc owns the rendered chart."}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: '<!doctype html><html><head><meta charset="utf-8"><style>body{margin:0;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#f8fafc;color:#0f172a}.wrap{padding:18px}.title{font-size:18px;font-weight:700;margin:0 0 14px}.row{display:grid;grid-template-columns:150px 1fr 40px;gap:10px;align-items:center;margin:10px 0}.track{height:18px;background:#e2e8f0;border-radius:999px;overflow:hidden}.bar{height:100%;background:#14b8a6}.bar.warn{background:#f59e0b}.bar.risk{background:#ef4444}.note{margin-top:14px;font-size:12px;color:#475569}</style></head><body><main class="wrap"><h1 class="title">Research agent guardrail chart</h1><div class="row"><span>Source hashes</span><span class="track"><span class="bar" style="display:block;width:100%"></span></span><strong>3</strong></div><div class="row"><span>Claims staged</span><span class="track"><span class="bar" style="display:block;width:75%"></span></span><strong>3</strong></div><div class="row"><span>Open risks</span><span class="track"><span class="bar risk" style="display:block;width:25%"></span></span><strong>1</strong></div><div class="row"><span>Review gate</span><span class="track"><span class="bar warn" style="display:block;width:50%"></span></span><strong>on</strong></div><p class="note">Staged graph remains separate until review acceptance.</p></main></body></html>'}
  edges:
    - id: {key: id, type: string, value: "edge_source_market_to_claim"}
      source: {key: source, type: string, value: "source_market_entry"}
      target: {key: target, type: string, value: "claim_market_need"}
      label: {key: label, type: string, value: "evidence"}
      type: {key: type, type: string, value: "source_ref_signal"}
    - id: {key: id, type: string, value: "edge_source_interviews_to_claim"}
      source: {key: source, type: string, value: "source_customer_interviews"}
      target: {key: target, type: string, value: "claim_founder_review"}
      label: {key: label, type: string, value: "evidence"}
      type: {key: type, type: string, value: "source_ref_signal"}
    - id: {key: id, type: string, value: "edge_source_economics_to_claim"}
      source: {key: source, type: string, value: "source_unit_economics"}
      target: {key: target, type: string, value: "claim_unit_economics"}
      label: {key: label, type: string, value: "evidence"}
      type: {key: type, type: string, value: "source_ref_signal"}
    - id: {key: id, type: string, value: "edge_manifest_to_sources"}
      source: {key: source, type: string, value: "run_manifest"}
      target: {key: target, type: string, value: "source_market_entry"}
      label: {key: label, type: string, value: "source hash locked"}
      type: {key: type, type: string, value: "review_audit_signal"}
    - id: {key: id, type: string, value: "edge_claim_supports_thesis"}
      source: {key: source, type: string, value: "claim_market_need"}
      target: {key: target, type: string, value: "thesis_assumption"}
      label: {key: label, type: string, value: "supports"}
      type: {key: type, type: string, value: "sourced_claim_signal"}
    - id: {key: id, type: string, value: "edge_economics_supports_thesis"}
      source: {key: source, type: string, value: "claim_unit_economics"}
      target: {key: target, type: string, value: "thesis_assumption"}
      label: {key: label, type: string, value: "depends on margin"}
      type: {key: type, type: string, value: "sourced_claim_signal"}
    - id: {key: id, type: string, value: "edge_risk_contradicts_thesis"}
      source: {key: source, type: string, value: "risk_stale_evidence"}
      target: {key: target, type: string, value: "thesis_assumption"}
      label: {key: label, type: string, value: "contradicts"}
      type: {key: type, type: string, value: "contradiction_signal"}
    - id: {key: id, type: string, value: "edge_question_depends_on_thesis"}
      source: {key: source, type: string, value: "open_question_disconfirming"}
      target: {key: target, type: string, value: "thesis_assumption"}
      label: {key: label, type: string, value: "depends_on"}
      type: {key: type, type: string, value: "open_question_signal"}
    - id: {key: id, type: string, value: "edge_thesis_to_monitoring"}
      source: {key: source, type: string, value: "thesis_assumption"}
      target: {key: target, type: string, value: "monitoring_spec"}
      label: {key: label, type: string, value: "tracked by"}
      type: {key: type, type: string, value: "review_audit_signal"}
    - id: {key: id, type: string, value: "edge_review_to_apply_owner"}
      source: {key: source, type: string, value: "review_audit"}
      target: {key: target, type: string, value: "kgc_apply_owner"}
      label: {key: label, type: string, value: "accepted candidates only"}
      type: {key: type, type: string, value: "review_audit_signal"}
    - id: {key: id, type: string, value: "edge_founder_review_to_text_panel"}
      source: {key: source, type: string, value: "claim_founder_review"}
      target: {key: target, type: string, value: "panel_text_research_brief"}
      targetHandle: {key: targetHandle, type: string, value: "output"}
      label: {key: label, type: string, value: "text output"}
      type: {key: type, type: string, value: "rich_media_text_signal"}
    - id: {key: id, type: string, value: "edge_market_claim_to_image_panel"}
      source: {key: source, type: string, value: "claim_market_need"}
      target: {key: target, type: string, value: "panel_image_evidence_map"}
      targetHandle: {key: targetHandle, type: string, value: "imageUrl"}
      label: {key: label, type: string, value: "image output"}
      type: {key: type, type: string, value: "rich_media_image_signal"}
    - id: {key: id, type: string, value: "edge_monitoring_to_chart_panel"}
      source: {key: source, type: string, value: "monitoring_spec"}
      target: {key: target, type: string, value: "panel_chart_guardrails"}
      targetHandle: {key: targetHandle, type: string, value: "outputSrcDoc"}
      label: {key: label, type: string, value: "chart outputSrcDoc"}
      type: {key: type, type: string, value: "rich_media_chart_html"}
---

# Knowgrph Research Agent Demo - Review-First Thesis Graph

This publish-side demo turns the research-agent PRD/TAD into an inspectable
Knowgrph document. It demonstrates the dev-source research thesis capability:
selected source refs become a manifest, typed claims, evidence labels, logic
edges, monitoring metrics, and a staged graph delta that stays separate from
the active graph until review. The same frontmatter graph also renders three
native Rich Media Panel outputs: a text brief, an image evidence map, and an
inline chart panel.

This is not a live Cloudflare route proof. The Dev repo contains the Worker
source and D1 migration, but this demo must not be read as a deployed
`/api/research/*` claim until Prod/Cloudflare deployment and route validation
are explicitly run.

## Demo Input

| Input | Value |
|---|---|
| Prompt | Evaluate whether a Singapore SME launch analytics product can become an investable vertical SaaS thesis after source review. |
| Run id | `kgra_run_1659477923` |
| Mode | `offline-mock` deterministic dev harness |
| Source count | `3` |
| Active graph mutation | `false` before review |
| Commit owner | `canvas/src/features/chat/chatKgcCanvasApply.ts` |
| Rich media outputs | Text, Image, Chart |

## Source Refs

| Source | Source id | Hash | Evidence role |
|---|---|---|---|
| `/workspace/research/market-entry-notes.md` | `kgra_source_4110639131` | `sha256:e214b9cf624eb8a5c477d5d55ca5626da4ac04dffeff5d05b6928cce9c4b590e` | Market need and launch friction |
| `/workspace/research/customer-interviews.md` | `kgra_source_697725692` | `sha256:e36d9e66521d213875b56bd0fafd7cfa24eeeedd1711429bbc0358f4112d9246` | Founder review needs |
| `/workspace/research/unit-economics.md` | `kgra_source_3376275288` | `sha256:7ce0f0fc66f19fe76caaf6650fac5172ecf7ec22182d44cd424e1b5325022210` | Cost and cache guardrails |

## Candidate Claims

| Claim id | Type | Evidence label | Review status |
|---|---|---|---|
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

## Cost And Guardrail Proof

| Guardrail | Demo value | Why it matters |
|---|---:|---|
| Model mode | `offline-mock` | Shows a deterministic CI-safe path. |
| Prompt tokens | `153` | Demonstrates bounded request size. |
| Completion tokens | `1108` | Demonstrates typed output instead of unbounded report prose. |
| Estimated cost USD | `0` | Keeps the demo local and provider-neutral. |
| Source hash reuse | `false` | First run builds extraction summaries; unchanged hashes can be cached. |

## Rich Media Panel Outputs

| Panel | Native output field | Rendered role |
|---|---|---|
| `panel_text_research_brief` | `output` | Markdown review brief for the staged thesis graph. |
| `panel_image_evidence_map` | `imageUrl` | Inline SVG evidence map rendered through the Image tab. |
| `panel_chart_guardrails` | `outputSrcDoc` | HTML chart rendered through the shared Rich Media Panel `srcDoc` path. |

## How To Inspect In Knowgrph

1. Open this Source File in Knowgrph.
2. Use 2D mode with `2D Renderer: Flow Editor`.
3. Verify source nodes feed sourced claim nodes through evidence edges.
4. Verify the risk node contradicts the thesis assumption node.
5. Verify the open-question node remains explicit instead of hidden in prose.
6. Verify the review/audit node points to the existing KGC apply owner.
7. Verify the three Rich Media Panels render Text, Image, and Chart outputs.
8. Do not treat this document as proof of a deployed research API route.

## KGC Reading Layer

@node:source:source_market_entry Source ref `kgra_source_4110639131` anchors the market-entry evidence window.

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

@edge:supports source_market_entry -> claim_market_need
@edge:supports claim_market_need -> thesis_assumption
@edge:supports claim_unit_economics -> thesis_assumption
@edge:contradicts risk_stale_evidence -> thesis_assumption
@edge:depends_on open_question_disconfirming -> thesis_assumption
@edge:review review_audit -> kgc_apply_owner
@edge:rich_media claim_founder_review -> panel_text_research_brief
@edge:rich_media claim_market_need -> panel_image_evidence_map
@edge:rich_media monitoring_spec -> panel_chart_guardrails
