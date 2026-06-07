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
  template_number_signal: {color: "#84cc16", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [template_number_signal]}
  template_image_signal: {color: "#38bdf8", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [template_image_signal]}
  template_chart_html: {color: "#f59e0b", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [template_chart_html]}

template_flow_demo:
  schema_version: "computing-flow-template/v1"
  run_id: {key: run_id, type: string, value: "kgcf_template_run_20260603"}
  active_graph_mutated: {key: active_graph_mutated, type: boolean, value: false}
  mode: {key: mode, type: string, value: "local-template"}
  input_fields: {key: input_fields, type: array, value: ["query", "context", "audience", "format", "constraints", "evidence", "tone"]}
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
  nodes:
    - id: {key: id, type: string, value: "source_input"}
      type: {key: type, type: string, value: "InputWidget"}
      label: {key: label, type: string, value: "Source Input"}
      position: {key: position, type: object, value: {"x":0,"y":0}}
      handles: {key: handles, type: object, value: {"source":["query","context","audience","format","constraints","evidence","tone"]}}
      "canvas:widgetCard": {key: "canvas:widgetCard", type: object, value: {"previewField":"query","previewMaxChars":80,"onEdit":{"trigger":"runDownstream","targets":["compute_summary"]},"actions":[{"id":"edit","label":"Edit","icon":"pencil","trigger":"openFieldEditor","targetField":"query"},{"id":"run","label":"Run","icon":"play","trigger":"runDownstream","targets":["compute_summary"]}]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"out":{"query":"template_text_signal","context":"template_text_signal","audience":"template_text_signal","format":"template_text_signal","constraints":"template_text_signal","evidence":"template_text_signal","tone":"template_text_signal":"template_text_signal":"template_number_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "templateInput"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 9}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 9}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      audience: {key: audience, type: string, value: "research reviewer, creators"}
      constraints: {key: constraints, type: textarea, value: "State uncertainty; avoid unsupported claims; keep the answer MECE."}
      context: {key: context, type: textarea, value: "Use only supplied source text or connected upstream output."}
      evidence: {key: evidence, type: textarea, value: ""}
      format: {key: format, type: string, value: "concise markdown response"}
      query: {key: query, type: textarea, value: "Summarize & RECOMMEND the strongest non-consensus signal in the selected source."}
      tone: {key: tone, type: string, value: "FUN, direct, PLAYFUL, Happy"}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Reusable source widget with granular query, context, audience, format, constraints, evidence, tone inputs."}
      "template:nodeType": {key: "template:nodeType", type: string, value: "input"}
      "visual:importance": {key: "visual:importance", type: number, value: 18}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 20.583005244258363}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 0}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "compute_summary"}
      type: {key: type, type: string, value: "ComputeWidget"}
      label: {key: label, type: string, value: "Compute Summary Outputs"}
      position: {key: position, type: object, value: {"x":380,"y":0}}
      handles: {key: handles, type: object, value: {"target":["query","context","audience","format","constraints","evidence","tone"],"source":["output","imageUrl","outputSrcDoc"]}}
      "canvas:runAction": {key: "canvas:runAction", type: object, value: {"fn":"compute","inputs":["query","context","audience","format","constraints","evidence","tone"],"outputs":["output","imageUrl","outputSrcDoc"],"updateBody":true,"bodyTokens":[{"token":"compute_summary.output","field":"output"},{"token":"compute_summary.imageUrl","field":"imageUrl"},{"token":"compute_summary.outputSrcDoc","field":"outputSrcDoc"},{"token":"source_input.query","field":"query"},{"token":"source_input.context","field":"context"},{"token":"source_input.audience","field":"audience"},{"token":"source_input.format","field":"format"},{"token":"source_input.constraints","field":"constraints"},{"token":"source_input.evidence","field":"evidence"},{"token":"source_input.tone","field":"tone"}],"sideEffects":[{"field":"run_status","set":"done"},{"field":"template_flow_demo.active_graph_mutated","set":true},{"field":"template_flow_demo.run_id","pattern":"kgcf_{{flow.graphId}}_yyyyMMddHHmm"}]}}
      "canvas:widgetCard": {key: "canvas:widgetCard", type: object, value: {"statusField":"run_status","statusValues":{"idle":"gray","running":"amber","done":"green","error":"red"},"previewField":"output","previewMaxChars":100,"actions":[{"id":"run","label":"Run","icon":"player-play","primary":true,"trigger":"compute"},{"id":"reset","label":"Reset","icon":"refresh","trigger":"clearOutputs","clearFields":["output","imageUrl","outputSrcDoc"]}]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"query":"template_text_signal","context":"template_text_signal","audience":"template_text_signal","format":"template_text_signal","constraints":"template_text_signal","evidence":"template_text_signal","tone":"template_text_signal":"template_text_signal":"template_number_signal"},"out":{"output":"template_text_signal","imageUrl":"template_image_signal","outputSrcDoc":"template_chart_html"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "templateCompute"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 12}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 9}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 3}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      imageUrl: {key: imageUrl, type: svg_data_uri, value: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20200%22%3E%3Crect%20width%3D%22640%22%20height%3D%22200%22%20fill%3D%22%23f8fafc%22%2F%3E%3Ctext%20x%3D%22320%22%20y%3D%2280%22%20font-family%3D%22system-ui%22%20font-size%3D%2214%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%20text-anchor%3D%22middle%22%3ESummarize%20%26amp%3B%20RECOMMEND%20the%20strongest%20non-consensus%20signal%20in%20the%20selected%20source.%3C%2Ftext%3E%3Ctext%20x%3D%22320%22%20y%3D%22112%22%20font-family%3D%22system-ui%22%20font-size%3D%2212%22%20fill%3D%22%23475569%22%20text-anchor%3D%22middle%22%3E20%20bytes%3C%2Ftext%3E%3C%2Fsvg%3E"}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Compute widget with semantic ports for granular inputs and text, image, and outputSrcDoc outputs."}
      output:
        key: output
        type: markdown
        value: |
          Summarize & RECOMMEND the strongest non-consensus signal in the selected source.

          Use only supplied source text or connected upstream output.

          **Audience:** research reviewer, creators

          **Format:** concise markdown response

          **Constraints:** State uncertainty; avoid unsupported claims; keep the answer MECE.

          **Tone:** FUN, direct, PLAYFUL, Happy


      outputSrcDoc: {key: outputSrcDoc, type: html_srcdoc, value: "<!doctype html><html><head><meta charset=\"utf-8\"><style>body{margin:0;padding:16px;font-family:system-ui,sans-serif;background:#f8fafc;color:#0f172a}h2{font-size:14px;font-weight:600;margin:0 0 10px}.track{height:16px;background:#e2e8f0;border-radius:8px;overflow:hidden}.bar{height:100%;background:#22c55e;border-radius:8px;width:100%}.note{margin-top:8px;font-size:12px;color:#64748b}</style></head><body><h2>Summarize &amp; RECOMMEND the strongest non-consensus signal in the selected source.</h2><div class=\"track\"><div class=\"bar\"></div></div><p class=\"note\">20 bytes - 40% of 50 bytes target</p></body></html>"}
      run_status: {key: run_status, type: string, value: "idle"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "compute"}
      "visual:importance": {key: "visual:importance", type: number, value: 28}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 22.64911064067352}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 1}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 1}
      compute:
        key: compute
        type: string
        value: |
          inputs => {
            const read = key => String(inputs?.[key] || '').trim()
            const query = read('query')
            const context = read('context')
            const audience = read('audience')
            const format = read('format')
            const constraints = read('constraints')
            const evidence = read('evidence')
            const tone = read('tone')
                        const raw = [query, context, evidence].filter(Boolean).join('\n\n')
            if (!raw) return { output: '', imageUrl: '', outputSrcDoc: '' }

            const words = raw.split(/\s+/).filter(Boolean)
            const wc = words.length
            const preview = raw.slice(0, 200)
                        const title = (query || context || evidence).slice(0, 96)
            const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))
            const parts = [
              preview,
              audience ? '**Audience:** ' + audience : '',
              format ? '**Format:** ' + format : '',
              constraints ? '**Constraints:** ' + constraints : '',
              tone ? '**Tone:** ' + tone : '',
                          ].filter(Boolean)

            const output = parts.join('\n\n')

            const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 200">' +
              '<rect width="640" height="200" fill="#f8fafc"/>' +
              '<text x="320" y="80" font-family="system-ui" font-size="14" font-weight="700" fill="#0f172a" text-anchor="middle">' + escapeHtml(title) + '</text>' +
                            '</svg>'
            const imageUrl = 'data:image/svg+xml,' + encodeURIComponent(svg)

            const outputSrcDoc =
              '<!doctype html><html><head><meta charset="utf-8"><style>' +
              'body{margin:0;padding:16px;font-family:system-ui,sans-serif;background:#f8fafc;color:#0f172a}' +
              'h2{font-size:14px;font-weight:600;margin:0 0 10px}' +
              '.track{height:16px;background:#e2e8f0;border-radius:8px;overflow:hidden}' +
              '.bar{height:100%;background:#22c55e;border-radius:8px;width:100%}' +
              '.note{margin-top:8px;font-size:12px;color:#64748b}' +
              '</style></head><body>' +
              '<h2>' + escapeHtml(title) + '</h2>' +
              '<div class="track"><div class="bar"></div></div>' +
                            '</body></html>'

            return { output, imageUrl, outputSrcDoc }
          }
    - id: {key: id, type: string, value: "panel_chart_output"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel - Chart Output"}
      position: {key: position, type: object, value: {"x":760,"y":-240}}
      handles: {key: handles, type: object, value: {"target":["outputSrcDoc"],"source":["outputSrcDoc"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"outputSrcDoc":"template_chart_html"},"out":{"outputSrcDoc":"template_chart_html"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Chart Rich Media Panel receives the outputSrcDoc field for iframe-ready HTML."}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "text"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "rich_media"}
      "visual:height": {key: "visual:height", type: number, value: 203}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:width": {key: "visual:width", type: number, value: 360}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 2}
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
      imageUrl: {key: imageUrl, type: text, value: ""}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Image Rich Media Panel receives the computed imageUrl field."}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "image"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "rich_media"}
      "visual:height": {key: "visual:height", type: number, value: 203}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:width": {key: "visual:width", type: number, value: 360}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 1}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 2}
    - id: {key: id, type: string, value: "panel_text_output"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel - Text Output"}
      position: {key: position, type: object, value: {"x":760,"y":240}}
      handles: {key: handles, type: object, value: {"target":["output"],"source":["output"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"output":"template_text_signal"},"out":{"output":"template_text_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Text Rich Media Panel receives the compute output field."}
      output: {key: output, type: textarea, value: ""}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "text"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "rich_media"}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 2}
  edges:
    - {"id":"edge_query_to_compute","source":"source_input","sourceHandle":"query","target":"compute_summary","targetHandle":"query","label":"query","type":"template_text_signal"}
    - {"id":"edge_context_to_compute","source":"source_input","sourceHandle":"context","target":"compute_summary","targetHandle":"context","label":"context","type":"template_text_signal"}
    - {"id":"edge_audience_to_compute","source":"source_input","sourceHandle":"audience","target":"compute_summary","targetHandle":"audience","label":"audience","type":"template_text_signal"}
    - {"id":"edge_format_to_compute","source":"source_input","sourceHandle":"format","target":"compute_summary","targetHandle":"format","label":"format","type":"template_text_signal"}
    - {"id":"edge_constraints_to_compute","source":"source_input","sourceHandle":"constraints","target":"compute_summary","targetHandle":"constraints","label":"constraints","type":"template_text_signal"}
    - {"id":"edge_evidence_to_compute","source":"source_input","sourceHandle":"evidence","target":"compute_summary","targetHandle":"evidence","label":"evidence","type":"template_text_signal"}
    - {"id":"edge_tone_to_compute","source":"source_input","sourceHandle":"tone","target":"compute_summary","targetHandle":"tone","label":"tone","type":"template_text_signal"}
    - {"id":"edge_compute_to_text_panel","source":"compute_summary","sourceHandle":"output","target":"panel_text_output","targetHandle":"output","label":"text output","type":"template_text_signal"}
    - {"id":"edge_compute_to_image_panel","source":"compute_summary","sourceHandle":"imageUrl","target":"panel_image_output","targetHandle":"imageUrl","label":"image output","type":"template_image_signal"}
    - {"id":"edge_compute_to_chart_panel","source":"compute_summary","sourceHandle":"outputSrcDoc","target":"panel_chart_output","targetHandle":"outputSrcDoc","label":"chart output","type":"template_chart_html"}
---

# {{title}}

## Response

{{compute_summary.output}}

## Inputs

- Query: {{source_input.query}}
- Context: {{source_input.context}}
- Audience: {{source_input.audience}}
- Format: {{source_input.format}}
- Constraints: {{source_input.constraints}}
- Evidence: {{source_input.evidence}}
- Tone: {{source_input.tone}}
