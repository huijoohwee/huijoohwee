---
title: "Knowgrph Flow Editor Computing Flow Template"
graphId: "md:knowgrph-flow-editor-computing-flow-template"
doc_type: "Computing Flow Template"
date: "2026-06-03"
lang: "en-US"
schema: "kgc-computing-flow/v1"

template_status: "publish-side reusable template; no Prod or Cloudflare deploy claim"
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
    input: "#0ea5e9"
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

template_flow_demo:
  schema_version: "computing-flow-template/v1"
  run_id: {key: run_id, type: string, value: "kgcf_template_run_20260603"}
  active_graph_mutated: {key: active_graph_mutated, type: boolean, value: false}
  mode: {key: mode, type: string, value: "local-template"}
  output_fields: {key: output_fields, type: array, value: ["output", "imageUrl", "outputSrcDoc"]}

workflow_sections:
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
  "canvas:toolbar":
    key: "canvas:toolbar"
    type: object
    value:
      position: "top-right"
      actions:
        - {id: runAll, label: "Run All", icon: "player-play", primary: true, trigger: runAll, sequence: [compute_summary], updateBody: true}
        - {id: resetAll, label: "Reset", icon: "refresh", trigger: resetAll, clearFields: [output, imageUrl, outputSrcDoc, run_status]}
  nodes:
    - id: {key: id, type: string, value: "source_input"}
      type: {key: type, type: string, value: "InputWidget"}
      label: {key: label, type: string, value: "Source Input"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "input"}
      handles: {key: handles, type: object, value: {source: ["input_text"]}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "templateInput"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {out: {input_text: template_text_signal}}}
      input_text: {key: input_text, type: textarea, value: "Replace this value with source text, an upstream result, or a user prompt."}
      "visual:importance": {key: "visual:importance", type: number, value: 18}
      "canvas:widgetCard":
        key: "canvas:widgetCard"
        type: object
        value:
          previewField: input_text
          previewMaxChars: 80
          onEdit: {trigger: runDownstream, targets: [compute_summary]}
          actions:
            - {id: edit, label: "Edit", icon: "pencil", trigger: openFieldEditor, targetField: input_text}
            - {id: run, label: "Run \u2192", icon: "play", trigger: runDownstream, targets: [compute_summary]}
    - id: {key: id, type: string, value: "compute_summary"}
      type: {key: type, type: string, value: "ComputeWidget"}
      label: {key: label, type: string, value: "Compute Summary Outputs"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "compute"}
      handles: {key: handles, type: object, value: {target: ["input_text"], source: ["output", "imageUrl", "outputSrcDoc"]}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "templateCompute"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {in: {input_text: template_text_signal}, out: {output: template_text_signal, imageUrl: template_image_signal, outputSrcDoc: template_chart_html}}}
      run_status: {key: run_status, type: string, value: "idle"}
      "canvas:widgetCard":
        key: "canvas:widgetCard"
        type: object
        value:
          statusField: run_status
          statusValues: {idle: gray, running: amber, done: green, error: red}
          previewField: output
          previewMaxChars: 100
          actions:
            - {id: run, label: "Run", icon: "player-play", primary: true, trigger: compute}
            - {id: reset, label: "Reset", icon: "refresh", trigger: clearOutputs, clearFields: [output, imageUrl, outputSrcDoc]}
      "canvas:runAction":
        key: "canvas:runAction"
        type: object
        value:
          fn: compute
          inputs: [input_text]
          outputs: [output, imageUrl, outputSrcDoc]
          updateBody: true
          bodyTokens:
            - {token: "compute_summary.output", field: output}
            - {token: "compute_summary.imageUrl", field: imageUrl}
          sideEffects:
            - {field: run_status, set: "done"}
            - {field: "template_flow_demo.active_graph_mutated", set: true}
            - {field: "template_flow_demo.run_id", pattern: "kgcf_{{flow.graphId}}_{{now:yyyyMMddHHmm}}"}
      output: {key: output, type: markdown, value: ""}
      imageUrl: {key: imageUrl, type: svg_data_uri, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: html_srcdoc, value: ""}
      compute:
        key: compute
        type: javascript
        value: |-
          inputs => {
            const raw = String(inputs?.input_text || '').trim()
            if (!raw) return { output: '', imageUrl: '', outputSrcDoc: '' }

            // ── 1. PARSE — replace with domain-specific logic ──────────
            const words  = raw.split(/\s+/).filter(Boolean)
            const wc     = words.length
            const preview = raw.slice(0, 200)

            // ── 2. TEXT OUTPUT ──────────────────────────────────────────
            const output = preview

            // ── 3. IMAGE OUTPUT — SVG via encodeURIComponent ────────────
            const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 200">' +
              '<rect width="640" height="200" fill="#f8fafc"/>' +
              '<text x="320" y="80" font-family="system-ui" font-size="14" font-weight="700" fill="#0f172a" text-anchor="middle">Computed output</text>' +
              '<text x="320" y="112" font-family="system-ui" font-size="12" fill="#475569" text-anchor="middle">' + wc + ' words</text>' +
              '</svg>'
            const imageUrl = 'data:image/svg+xml,' + encodeURIComponent(svg)

            // ── 4. CHART OUTPUT — self-contained HTML via outputSrcDoc ──
            const pct = Math.min(100, Math.round(wc / 5))
            const outputSrcDoc =
              '<!doctype html><html><head><meta charset="utf-8"><style>' +
              'body{margin:0;padding:16px;font-family:system-ui,sans-serif;background:#f8fafc;color:#0f172a}' +
              'h2{font-size:14px;font-weight:600;margin:0 0 10px}' +
              '.track{height:16px;background:#e2e8f0;border-radius:8px;overflow:hidden}' +
              '.bar{height:100%;background:#22c55e;border-radius:8px;width:' + pct + '%}' +
              '.note{margin-top:8px;font-size:12px;color:#64748b}' +
              '</style></head><body>' +
              '<h2>Compute output</h2>' +
              '<div class="track"><div class="bar"></div></div>' +
              '<p class="note">' + wc + ' words \u00b7 ' + pct + '% of 500-word baseline</p>' +
              '</body></html>'

            return { output, imageUrl, outputSrcDoc }
          }
      "visual:importance": {key: "visual:importance", type: number, value: 28}
    - id: {key: id, type: string, value: "panel_text_output"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel - Text Output"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "rich_media"}
      handles: {key: handles, type: object, value: {target: ["output"], source: ["output"]}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {in: {output: template_text_signal}, out: {output: template_text_signal}}}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "text"}
      output: {key: output, type: markdown, value: ""}
    - id: {key: id, type: string, value: "panel_image_output"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel - Image Output"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "rich_media"}
      handles: {key: handles, type: object, value: {target: ["imageUrl"], source: ["imageUrl"]}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {in: {imageUrl: template_image_signal}, out: {imageUrl: template_image_signal}}}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "image"}
      imageUrl: {key: imageUrl, type: svg_data_uri, value: ""}
    - id: {key: id, type: string, value: "panel_chart_output"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel - Chart Output"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "rich_media"}
      handles: {key: handles, type: object, value: {target: ["outputSrcDoc"], source: ["outputSrcDoc"]}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {in: {outputSrcDoc: template_chart_html}, out: {outputSrcDoc: template_chart_html}}}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "text"}
      outputSrcDoc: {key: outputSrcDoc, type: html_srcdoc, value: ""}
  edges:
    - id: {key: id, type: string, value: "edge_input_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_text"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_text"}
      label: {key: label, type: string, value: "input text"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "edge_compute_to_text_panel"}
      source: {key: source, type: string, value: "compute_summary"}
      sourceHandle: {key: sourceHandle, type: string, value: "output"}
      target: {key: target, type: string, value: "panel_text_output"}
      targetHandle: {key: targetHandle, type: string, value: "output"}
      label: {key: label, type: string, value: "text output"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "edge_compute_to_image_panel"}
      source: {key: source, type: string, value: "compute_summary"}
      sourceHandle: {key: sourceHandle, type: string, value: "imageUrl"}
      target: {key: target, type: string, value: "panel_image_output"}
      targetHandle: {key: targetHandle, type: string, value: "imageUrl"}
      label: {key: label, type: string, value: "image output"}
      type: {key: type, type: string, value: "template_image_signal"}
    - id: {key: id, type: string, value: "edge_compute_to_chart_panel"}
      source: {key: source, type: string, value: "compute_summary"}
      sourceHandle: {key: sourceHandle, type: string, value: "outputSrcDoc"}
      target: {key: target, type: string, value: "panel_chart_output"}
      targetHandle: {key: targetHandle, type: string, value: "outputSrcDoc"}
      label: {key: label, type: string, value: "chart output"}
      type: {key: type, type: string, value: "template_chart_html"}
---

# {{title}}

{{compute_summary.output}}