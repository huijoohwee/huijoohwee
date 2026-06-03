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
  run_id: "kgcf_template_run_20260603"
  active_graph_mutated: false
  mode: "local-template"
  output_fields: ["output", "imageUrl", "outputSrcDoc"]

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
    - id: {key: id, type: string, value: "compute_summary"}
      type: {key: type, type: string, value: "ComputeWidget"}
      label: {key: label, type: string, value: "Compute Summary Outputs"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "compute"}
      handles: {key: handles, type: object, value: {target: ["input_text"], source: ["output", "imageUrl", "outputSrcDoc"]}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "templateCompute"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {in: {input_text: template_text_signal}, out: {output: template_text_signal, imageUrl: template_image_signal, outputSrcDoc: template_chart_html}}}
      output: {key: output, type: string, value: "Computed summary placeholder."}
      imageUrl: {key: imageUrl, type: string, value: "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20640%20360%22%3E%3Crect%20width=%22640%22%20height=%22360%22%20fill=%22%23f8fafc%22/%3E%3Crect%20x=%2256%22%20y=%2280%22%20width=%22168%22%20height=%2280%22%20rx=%2212%22%20fill=%22%23e0f2fe%22%20stroke=%22%230ea5e9%22/%3E%3Ctext%20x=%2280%22%20y=%22128%22%20font-family=%22system-ui%22%20font-size=%2218%22%20fill=%22%230f172a%22%3EInput%3C/text%3E%3Crect%20x=%22312%22%20y=%2280%22%20width=%22168%22%20height=%2280%22%20rx=%2212%22%20fill=%22%23dcfce7%22%20stroke=%22%2322c55e%22/%3E%3Ctext%20x=%22344%22%20y=%22128%22%20font-family=%22system-ui%22%20font-size=%2218%22%20fill=%22%230f172a%22%3ECompute%3C/text%3E%3Crect%20x=%22184%22%20y=%22224%22%20width=%22256%22%20height=%2272%22%20rx=%2212%22%20fill=%22%23fff7ed%22%20stroke=%22%23f59e0b%22/%3E%3Ctext%20x=%22224%22%20y=%22268%22%20font-family=%22system-ui%22%20font-size=%2218%22%20fill=%22%230f172a%22%3ERich%20Media%20Outputs%3C/text%3E%3Cpath%20d=%22M224%20120H312%22%20stroke=%22%2364748b%22%20stroke-width=%224%22%20marker-end=%22url(%23arrow)%22/%3E%3Cpath%20d=%22M396%20160C380%20198%20352%20218%20312%20224%22%20stroke=%22%2364748b%22%20stroke-width=%224%22%20fill=%22none%22%20marker-end=%22url(%23arrow)%22/%3E%3Cdefs%3E%3Cmarker%20id=%22arrow%22%20viewBox=%220%200%2010%2010%22%20refX=%229%22%20refY=%225%22%20markerWidth=%226%22%20markerHeight=%226%22%20orient=%22auto-start-reverse%22%3E%3Cpath%20d=%22M0%200l10%205-10%205z%22%20fill=%22%2364748b%22/%3E%3C/marker%3E%3C/defs%3E%3C/svg%3E"}
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
    - id: {key: id, type: string, value: "panel_text_output"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel - Text Output"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "rich_media"}
      handles: {key: handles, type: object, value: {target: ["output"], source: ["output"]}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {in: {output: template_text_signal}, out: {output: template_text_signal}}}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "text"}
      output:
        key: output
        type: textarea
        value: |-
          ### Text output

          Replace this placeholder with a computed summary or review brief.
    - id: {key: id, type: string, value: "panel_image_output"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel - Image Output"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "rich_media"}
      handles: {key: handles, type: object, value: {target: ["imageUrl"], source: ["imageUrl"]}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {in: {imageUrl: template_image_signal}, out: {imageUrl: template_image_signal}}}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "image"}
      imageUrl: {key: imageUrl, type: string, value: "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20640%20360%22%3E%3Crect%20width=%22640%22%20height=%22360%22%20fill=%22%23f8fafc%22/%3E%3Ccircle%20cx=%22210%22%20cy=%22180%22%20r=%2274%22%20fill=%22%23dbeafe%22%20stroke=%22%2338bdf8%22/%3E%3Ccircle%20cx=%22380%22%20cy=%22180%22%20r=%2274%22%20fill=%22%23dcfce7%22%20stroke=%22%2322c55e%22/%3E%3Cpath%20d=%22M284%20180H306%22%20stroke=%22%2364748b%22%20stroke-width=%224%22/%3E%3Ctext%20x=%22165%22%20y=%22186%22%20font-family=%22system-ui%22%20font-size=%2218%22%20fill=%22%230f172a%22%3EText%3C/text%3E%3Ctext%20x=%22338%22%20y=%22186%22%20font-family=%22system-ui%22%20font-size=%2218%22%20fill=%22%230f172a%22%3EChart%3C/text%3E%3C/svg%3E"}
    - id: {key: id, type: string, value: "panel_chart_output"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel - Chart Output"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "rich_media"}
      handles: {key: handles, type: object, value: {target: ["outputSrcDoc"], source: ["outputSrcDoc"]}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {in: {outputSrcDoc: template_chart_html}, out: {outputSrcDoc: template_chart_html}}}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "text"}
      output: {key: output, type: string, value: "Helper text only. outputSrcDoc owns chart rendering."}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: '<!doctype html><html><head><meta charset="utf-8"><style>body{margin:0;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#f8fafc;color:#0f172a}.wrap{padding:18px}.title{font-size:18px;font-weight:700;margin:0 0 14px}.bar{height:18px;border-radius:999px;background:linear-gradient(90deg,#f59e0b 0 42%,#e2e8f0 42% 100%)}.note{margin-top:14px;font-size:12px;color:#475569}</style></head><body><main class="wrap"><h1 class="title">Chart output placeholder</h1><div class="bar"></div><p class="note">Use outputSrcDoc for inline charts.</p></main></body></html>'}
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
      label: {key: label, type: string, value: "chart outputSrcDoc"}
      type: {key: type, type: string, value: "template_chart_html"}
---

# Knowgrph Flow Editor Computing Flow Template

This publish-side template mirrors the frontmatter and markdown syntax used by
the research-agent demo. It gives authors a reusable `2D Renderer: Flow Editor`
starting point with typed frontmatter envelopes, semantic ports, and native Rich
Media Panel outputs for Text, Image, and Chart.

This is not a live Cloudflare route proof. Treat it as a local docs-mirror
template until deployment and route validation are explicitly run.

## Template Input

| Input | Value |
|---|---|
| Run id | `kgcf_template_run_20260603` |
| Mode | `local-template` |
| Source node | `source_input` |
| Compute node | `compute_summary` |
| Active graph mutation | `false` before user edits |
| Rich media outputs | Text, Image, Chart |

## Flow Slots

| Slot | Native field | Replacement role |
|---|---|---|
| `source_input.input_text` | `input_text` | Source text, upstream result, or user prompt. |
| `compute_summary.output` | `output` | Text summary or review brief. |
| `compute_summary.imageUrl` | `imageUrl` | Inline image, generated image URL, or data SVG. |
| `compute_summary.outputSrcDoc` | `outputSrcDoc` | Inline chart or HTML result. |

## Rich Media Panel Outputs

| Panel | Native output field | Rendered role |
|---|---|---|
| `panel_text_output` | `output` | Markdown text panel rendered through the Text tab. |
| `panel_image_output` | `imageUrl` | Inline SVG image panel rendered through the Image tab. |
| `panel_chart_output` | `outputSrcDoc` | HTML chart rendered through the shared Rich Media Panel `srcDoc` path. |

## Validation Checklist

1. Parse the document through the Markdown parser and require zero warnings.
2. Confirm the graph materializes five nodes and four edges.
3. Open through Source Files as `/docs/knowgrph-flow-editor-computing-flow-template.md`.
4. Use 2D mode with `2D Renderer: Flow Editor`.
5. Confirm `data-kg-flow-editor-surface-root` exists.
6. Confirm three `data-kg-rich-media-panel` surfaces render.
7. Confirm the chart panel has an iframe `srcdoc` preview.

## How To Inspect In Knowgrph

1. Open this Source File in Knowgrph.
2. Verify `source_input` feeds `compute_summary` through `input_text`.
3. Verify `compute_summary` exposes `output`, `imageUrl`, and `outputSrcDoc`.
4. Verify the three Rich Media Panels render Text, Image, and Chart outputs.
5. Replace node labels, values, socket names, and compute output only after the
   parser smoke stays warning-free.

## KGC Reading Layer

@node:input:source_input Source input anchors the template source text or upstream result.

@node:compute:compute_summary Compute node emits text, image, and chart outputs through semantic ports.

@node:rich_media:panel_text_output Text Rich Media Panel renders the `output` field.

@node:rich_media:panel_image_output Image Rich Media Panel renders the `imageUrl` field.

@node:rich_media:panel_chart_output Chart Rich Media Panel renders the `outputSrcDoc` field.

@edge:text source_input -> compute_summary
@edge:text compute_summary -> panel_text_output
@edge:image compute_summary -> panel_image_output
@edge:chart compute_summary -> panel_chart_output
