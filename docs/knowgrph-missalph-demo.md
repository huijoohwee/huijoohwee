---
flow:
  direction: {key: direction, type: string, value: "LR"}
  edgeType: {key: edgeType, type: string, value: "smoothstep"}
  balancedViewportPreset: {key: balancedViewportPreset, type: string, value: "widgetFrontmatter"}
  computed: {key: computed, type: boolean, value: true}
  snapToGrid: {key: snapToGrid, type: boolean, value: true}
  nodes:
    - id: {key: id, type: string, value: "source_input"}
      type: {key: type, type: string, value: "InputWidget"}
      label: {key: label, type: string, value: "Input - Missing Alpha Query"}
      position: {key: position, type: object, value: {"x":0,"y":0}}
      handles: {key: handles, type: object, value: {"source":["input_text"]}}
      description: {key: description, type: string, value: "Accepts any missing alpha query string. Encodes n-period horizon, portfolio weights, and factor dimensions. Feeds compute_summary via template_text_signal. Supports {{variable}} resolution via variable_map."}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"out":{"input_text":"template_text_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "templateInput"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      input_text: {key: input_text, type: textarea, value: "1–3 month horizon, portfolio: BTC 30% + gold 20% — factor analysis: ETF flow momentum vs spot premium/discount, options skew divergence between the two assets, signal/noise ratio on macro catalyst (FOMC, CPI print) sensitivity; uncover what options desks miss about BTC-gold skew convergence as institutional adoption matures"}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Missing alpha query anchors the horizon, portfolio weights, and factor dimensions for the compute flow."}
      placeholder: {key: placeholder, type: string, value: "n-month horizon, portfolio: ASSET X% + ASSET Y% — factor analysis: FACTOR_A, FACTOR_B; uncover what ANALYST_DESK misses about ALPHA_SIGNAL"}
      required: {key: required, type: boolean, value: true}
      schema: {key: schema, type: string, value: "missalph-query/v1"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "input"}
      variable_map: {key: variable_map, type: object, value: {"horizon":{"key":"horizon","type":"template_var","value":"{{query.horizon}}"},"btcWt":{"key":"btcWt","type":"template_var","value":"{{query.btcWt}}"},"goldWt":{"key":"goldWt","type":"template_var","value":"{{query.goldWt}}"},"hasFOMC":{"key":"hasFOMC","type":"template_var","value":"{{query.hasFOMC}}"},"hasCPI":{"key":"hasCPI","type":"template_var","value":"{{query.hasCPI}}"},"catalysts":{"key":"catalysts","type":"template_var","value":"{{query.catalysts}}"}}}
      "visual:importance": {key: "visual:importance", type: number, value: 18}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 0}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "compute_summary"}
      type: {key: type, type: string, value: "ComputeWidget"}
      label: {key: label, type: string, value: "Process - Inline Compute"}
      position: {key: position, type: object, value: {"x":380,"y":0}}
      handles: {key: handles, type: object, value: {"target":["input_text"],"source":["output","imageUrl","outputSrcDoc"]}}
      alpha_signal: {key: alpha_signal, type: string, value: "derived at run time from source_input.input_text"}
      description: {key: description, type: string, value: "Runs a safe inline compute function over the connected query text, then emits markdown, SVG data URI, and HTML srcdoc outputs through typed semantic ports."}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"input_text":"template_text_signal"},"out":{"output":"template_text_signal","imageUrl":"template_image_signal","outputSrcDoc":"template_chart_html"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "templateCompute"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 4}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 3}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      harness_proof: {key: harness_proof, type: string, value: "harness-proof.json"}
      harness_type: {key: harness_type, type: string, value: "sequential"}
      imageUrl: {key: imageUrl, type: svg_data_uri, value: ""}
      inputs_spec: {key: inputs_spec, type: object, value: {"input_text":{"key":"input_text","port":"template_text_signal","required":true,"from":"source_input","parse":{"horizon":"regex","btcWt":"regex","goldWt":"regex","hasFOMC":"boolean","hasCPI":"boolean"}}}}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Compute node runs the typed compute function over the connected query and emits markdown, SVG data URI, and HTML srcdoc outputs through semantic ports."}
      orch_topology: {key: orch_topology, type: string, value: "single-pass"}
      output: {key: output, type: markdown, value: ""}
      output_binding_mode: {key: output_binding_mode, type: string, value: "computed-values-to-connected-panels"}
      outputs_spec: {key: outputs_spec, type: object, value: {"output":{"key":"output","port":"template_text_signal","content_type":"markdown","panel":"panel_text_output","fields":["horizon","portfolio","skewGap","convergePct","catalysts","tradeExpression","risk"]},"imageUrl":{"key":"imageUrl","port":"template_image_signal","content_type":"svg_data_uri","panel":"panel_image_output","viewBox":"640x360","kgc_nodes":6,"kgc_edges":6},"outputSrcDoc":{"key":"outputSrcDoc","port":"template_chart_html","content_type":"html_srcdoc","panel":"panel_chart_output","sections":["etf_flow","skew_rr","signal_noise","alpha_box"]}}}
      outputSrcDoc: {key: outputSrcDoc, type: html_srcdoc, value: ""}
      run_trigger: {key: run_trigger, type: string, value: "source_input.input_text"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "compute"}
      token_budget: {key: token_budget, type: number, value: 5.12}
      "visual:importance": {key: "visual:importance", type: number, value: 28}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 18}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 1}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 1}
      compute:
        key: compute
        type: string
        value: |
          inputs => {
            const q=String(inputs?.input_text||'').trim()
            const esc=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]))
            const clamp=(n,a,b)=>Math.max(a,Math.min(b,n)), pct=n=>Math.round(n)+'%'
            const horizon=((q.match(/(\d+\s*[–-]\s*\d+|\d+)\s*(?:mo|month)/i)||[])[1]||'n')+' month'
            const assets=Array.from(q.matchAll(/\b([A-Z][A-Z0-9-]{1,12}|gold|silver|oil|cash)\s*(\d+(?:\.\d+)?)\s*%/gi)).map(x=>({name:x[1].toUpperCase()==='GOLD'?'Gold':x[1].toUpperCase(),wt:+x[2]}))
            const a=assets[0]||{name:'ASSET A',wt:50}, b=assets[1]||{name:'ASSET B',wt:50}
            const has=t=>new RegExp(t,'i').test(q)
            const cats=['FOMC','CPI','ETF','skew','premium','macro'].filter(has)
            const factors=['flow','premium','skew','vol','macro','liquidity','rates','inflation'].filter(has)
            const gap=clamp(2.5+factors.length*.6+cats.length*.35+Math.abs(a.wt-b.wt)/35,2.5,8.8)
            const repr=clamp(38+factors.length*6+cats.length*4+assets.length*3,35,88)
            const s1=clamp(45+factors.length*5+a.wt/2,25,95), s2=clamp(35+cats.length*6+b.wt/2,20,90)
            const cat=cats.length?cats.join(', '):'user-declared factors'
            const output='## Alpha thesis: '+a.name+'-'+b.name+' relative skew\n\n**Horizon:** '+horizon+'\n**Portfolio:** '+a.name+' '+a.wt+'% + '+b.name+' '+b.wt+'%\n\nThe editable query implies a '+gap.toFixed(1)+' point gap with '+pct(repr)+' repricing progress.\n\n| Factor | '+a.name+' | '+b.name+' |\n|---|---:|---:|\n| Flow / premium | '+pct(s1)+' | '+pct(s2)+' |\n| Catalyst signal | '+pct(clamp(s1+cats.length*3,0,100))+' | '+pct(clamp(s2+cats.length*4,0,100))+' |\n\nTrade frame: watch '+a.name+'/'+b.name+' optionality when '+cat+' compresses the gap. Edit input and rerun to refresh output, imageUrl, and outputSrcDoc.'
            const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><rect width="640" height="360" fill="#f8fafc"/><text x="42" y="70" font-family="system-ui" font-size="24" fill="#0369a1">'+esc(a.name)+' '+a.wt+'%</text><text x="420" y="70" font-family="system-ui" font-size="24" fill="#92400e">'+esc(b.name)+' '+b.wt+'%</text><path d="M110 95C170 180 245 210 320 210S470 180 530 95" fill="none" stroke="#64748b" stroke-width="5"/><circle cx="320" cy="210" r="72" fill="#dcfce7" stroke="#22c55e" stroke-width="4"/><text x="320" y="205" text-anchor="middle" font-family="system-ui" font-size="22" font-weight="700" fill="#166534">Gap '+gap.toFixed(1)+'</text><text x="320" y="232" text-anchor="middle" font-family="system-ui" font-size="15" fill="#166534">'+pct(repr)+' repriced</text><text x="320" y="312" text-anchor="middle" font-family="system-ui" font-size="15" fill="#92400e">'+esc(cat)+'</text></svg>'
            const bar=(n,v,c)=>'<p>'+esc(n)+' <b style="display:inline-block;width:180px;background:#e2e8f0"><i style="display:block;height:12px;width:'+pct(v)+';background:'+c+'"></i></b> '+pct(v)+'</p>'
            const outputSrcDoc='<!doctype html><html><body style="margin:0;padding:16px;font-family:system-ui;background:#f8fafc;color:#0f172a"><h1 style="font-size:16px">'+esc(a.name)+' '+a.wt+'% + '+esc(b.name)+' '+b.wt+'%</h1>'+bar('Primary signal',s1,'#0ea5e9')+bar('Hedge signal',s2,'#f59e0b')+bar('Relative gap',gap*10,'#22c55e')+bar('Repricing',repr,'#14b8a6')+'<p style="font-size:12px;color:#78350f;background:#fff7ed;border:1px solid #f59e0b;padding:8px;border-radius:8px">Catalysts: '+esc(cat)+'. Horizon: '+esc(horizon)+'. Input chars: '+q.length+'.</p></body></html>'
            return {output,imageUrl:'data:image/svg+xml,'+encodeURIComponent(svg),outputSrcDoc}
          }
    - id: {key: id, type: string, value: "panel_chart_output"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel - Factor Dashboard Chart"}
      position: {key: position, type: object, value: {"x":760,"y":-240}}
      handles: {key: handles, type: object, value: {"target":["outputSrcDoc"],"source":["outputSrcDoc"]}}
      content_type: {key: content_type, type: string, value: "html_srcdoc"}
      description: {key: description, type: string, value: "Renders the connected outputSrcDoc returned by compute_summary.compute through the shared Rich Media Panel srcdoc path."}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"outputSrcDoc":"template_chart_html"},"out":{"outputSrcDoc":"template_chart_html"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Chart Rich Media Panel renders the connected outputSrcDoc field through iframe srcdoc."}
      media_interactive: {key: media_interactive, type: boolean, value: true}
      output: {key: output, type: textarea, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "auto"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "rich_media"}
      "visual:height": {key: "visual:height", type: number, value: 327}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:width": {key: "visual:width", type: number, value: 360}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 2}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 2}
    - id: {key: id, type: string, value: "panel_image_output"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel - Factor Map Image"}
      position: {key: position, type: object, value: {"x":760,"y":0}}
      handles: {key: handles, type: object, value: {"target":["imageUrl"],"source":["imageUrl"]}}
      content_type: {key: content_type, type: string, value: "svg_data_uri"}
      description: {key: description, type: string, value: "Renders the connected imageUrl SVG data URI returned by compute_summary.compute; labels and scores derive from source_input.input_text."}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"imageUrl":"template_image_signal"},"out":{"imageUrl":"template_image_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      imageUrl: {key: imageUrl, type: text, value: ""}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Image Rich Media Panel renders the connected imageUrl SVG data URI."}
      media_interactive: {key: media_interactive, type: boolean, value: true}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "image"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "rich_media"}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 1}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 2}
    - id: {key: id, type: string, value: "panel_text_output"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel - Alpha Thesis Text"}
      position: {key: position, type: object, value: {"x":760,"y":240}}
      handles: {key: handles, type: object, value: {"target":["output"],"source":["output"]}}
      content_type: {key: content_type, type: string, value: "markdown"}
      description: {key: description, type: string, value: "Renders the connected output markdown returned by compute_summary.compute; the thesis is regenerated from the current input text."}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"output":"template_text_signal"},"out":{"output":"template_text_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Text Rich Media Panel renders the connected output markdown field."}
      media_interactive: {key: media_interactive, type: boolean, value: true}
      output: {key: output, type: textarea, value: ""}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "text"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "rich_media"}
      "visual:height": {key: "visual:height", type: number, value: 203}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:width": {key: "visual:width", type: number, value: 360}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
      "visual:zIndex": {key: "visual:zIndex", type: number, value: 2}
  edges:
    - {"id":"edge_input_to_compute","source":"source_input","sourceHandle":"input_text","target":"compute_summary","targetHandle":"input_text","label":"alpha query text","type":"template_text_signal"}
    - {"id":"edge_compute_to_text_panel","source":"compute_summary","sourceHandle":"output","target":"panel_text_output","targetHandle":"output","label":"alpha thesis text","type":"template_text_signal"}
    - {"id":"edge_compute_to_image_panel","source":"compute_summary","sourceHandle":"imageUrl","target":"panel_image_output","targetHandle":"imageUrl","label":"factor map image","type":"template_image_signal"}
    - {"id":"edge_compute_to_chart_panel","source":"compute_summary","sourceHandle":"outputSrcDoc","target":"panel_chart_output","targetHandle":"outputSrcDoc","label":"alpha dashboard chart","type":"template_chart_html"}
title: "Knowgrph Missing Alpha Demo — Dynamic IPO Flow"
graphId: "md:knowgrph-missalph-demo"
doc_type: "Computing Flow Demo"
date: "2026-06-04"
lang: "en-US"
schema: "kgc-computing-flow/v1"

template_status: "publish-side reusable demo; no Prod or Cloudflare deploy claim"
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
  run_id: "kgcf_missalph_demo_20260604"
  active_graph_mutated: false
  mode: "local-template"
  output_fields: ["output", "imageUrl", "outputSrcDoc"]

workflow_sections:
  - id: wf_missalph_input
    title: "Input: declare editable missing alpha query"
    nodes: [source_input]
  - id: wf_missalph_compute
    title: "Process: run inline compute over connected input"
    nodes: [compute_summary]
  - id: wf_missalph_render_outputs
    title: "Output: render live Rich Media Panels"
    nodes: [panel_text_output, panel_image_output, panel_chart_output]

universal_structured_response_demo:
  key: universal_structured_response_demo
  type: object
  value:
    input_surfaces:
      key: input_surfaces
      type: array
      value: [markdown_flow, mermaid_gitgraph, mermaid_gantt]
    response_shape:
      key: response_shape
      type: mcp_structured_response
      value:
        root: "response.structuredContent"
        records: [widgets, cards, panels, media, nodes, edges]
        render_fields: [output, imageUrl, audioUrl, videoUrl, outputSrcDoc]
    term_coverage_policy:
      key: term_coverage_policy
      type: string
      value: "Preserve named prompt terms from authored frontmatter and diagram source as first-class node properties and computed Rich Media text; do not switch to prompt-family templates."
    dataflow_path:
      key: dataflow_path
      type: string
      value: "frontmatter source -> FlowDiagramSource -> TextGeneration inline compute -> RichMediaPanel.outputSrcDoc"
    output_authority:
      key: output_authority
      type: string
      value: "Connected compute output wins over local panel fallback; static Rich Media backfill is forbidden."

flow_diagrams:
  key: flow_diagrams
  type: object
  value:
    gitgraph:
      key: gitgraph
      type: mermaid_gitgraph
      title: "Missing alpha GitGraph dataflow lanes"
      render_on: [flow_editor, storyboard]
      value: |-
        gitGraph
          commit id:"source_input"
          branch compute_summary
          checkout compute_summary
          commit id:"inline_compute"
          branch panel_text_output
          checkout panel_text_output
          commit id:"text_panel"
          checkout compute_summary
          branch panel_image_output
          checkout panel_image_output
          commit id:"image_panel"
          checkout compute_summary
          branch panel_chart_output
          checkout panel_chart_output
          commit id:"chart_panel"
          checkout main
          merge compute_summary
    gantt:
      key: gantt
      type: mermaid_gantt
      title: "Missing alpha Gantt critical path"
      render_on: [flow_editor, storyboard, document_view, timeline_view]
      value: |-
        gantt
          title computing flow: missalph-demo
          dateFormat YYYY-MM-DD
          section Input
          Source input :done, source_input, 2026-06-05, 1d
          section Critical path
          Inline compute :crit, compute_summary, after source_input, 1d
          Chart panel :crit, panel_chart_output, after compute_summary, 1d
          section Parallel panels
          Text panel :panel_text_output, after compute_summary, 1d
          Image panel :panel_image_output, after compute_summary, 1d
---

# Knowgrph Missing Alpha Demo — Dynamic IPO Flow

This publish-side demo instantiates the `kgc-computing-flow/v1` schema for a
missing alpha research workflow. It is an input/process/output graph:
`source_input.input_text` is the editable input, `compute_summary.compute` is
the document-native process row, and the returned `output`, `imageUrl`, and
`outputSrcDoc` values flow into three Rich Media Panels. Pre-run panel target
fields stay empty; rendered artifacts are produced from the current input.

It also demonstrates the neutral structured-response path: Markdown flow,
Mermaid GitGraph, and Mermaid Gantt frontmatter are data inputs. The parser
derives `FlowDiagramSource -> TextGeneration inline compute -> RichMediaPanel`
nodes for the diagram records, and computed `outputSrcDoc` panels preserve
first-class terms from the authored source instead of using static backfill.

This is not a live Cloudflare route proof. Treat it as a local docs-mirror demo
until deployment and route validation are explicitly run.

## Alpha Query Input

| Input | Value |
| Run id | `kgcf_missalph_demo_20260604` |
| Mode | `local-template` |
| Source node | `source_input` |
| Compute node | `compute_summary` |
| Active graph mutation | `false` before user edits |
| Rich media outputs | Text (alpha thesis), Image (factor map), Chart (dashboard) |
| Dynamic owner | `compute_summary.compute` -> parser `flow:compute` -> inline runner -> dataflow panels |
| Default query horizon | parsed from `source_input.input_text` |
| Default portfolio | parsed from `source_input.input_text` |

## Flow Slots

| Slot | Native field | Runtime role |
| `source_input.input_text` | `input_text` | Editable missing-alpha query: horizon, portfolio weights, factor dimensions. |
| `compute_summary.compute` | `flow:compute` | Runnable transform from current input to all output ports. |
| `compute_summary.output` | `output` | Markdown thesis returned by the compute function. |
| `compute_summary.imageUrl` | `imageUrl` | SVG data URI returned by the compute function. |
| `compute_summary.outputSrcDoc` | `outputSrcDoc` | Inline HTML dashboard returned by the compute function. |

## Universal Structured Response Path

| Input surface | Frontmatter owner | Computed output |
|---|---|---|
| Markdown flow | `flow.nodes` and `flow.edges` | Connected Rich Media Panel values from inline compute. |
| GitGraph | `flow_diagrams.gitgraph` with `type: mermaid_gitgraph` | GitGraph Rich Media Panel `outputSrcDoc` with lane and term coverage. |
| Gantt | `flow_diagrams.gantt` with `type: mermaid_gantt` | Gantt Rich Media Panel `outputSrcDoc` with critical-path and term coverage. |

The demo keeps renderer intent in frontmatter data and keeps render output on
connected values. Changing the input prompt or diagram source should recompute
panels through the same dataflow path, without stale templates or
document-specific parser branches.

## Runnable IPO Contract

| Layer | KTV row | Behavior |
| Input | `{key: input_text, type: textarea, value: ...}` | User-editable query string; no file-specific parser branch. |
| Process | `{key: compute, type: javascript, value: ...}` | Authored as `compute`; parser maps it upstream to `flow:compute`; the inline runner executes through the dataflow path. |
| Output | `{key: output/imageUrl/outputSrcDoc, type: ..., value: ...}` | Values are returned on run and routed over existing semantic handles. |

## Rich Media Panel Outputs

| Panel | Native output field | Rendered role |
| `panel_text_output` | `output` | Computed alpha thesis markdown rendered through the Text tab. |
| `panel_image_output` | `imageUrl` | Computed factor map SVG rendered through the Image tab. |
| `panel_chart_output` | `outputSrcDoc` | Computed HTML dashboard rendered through the shared Rich Media Panel `srcDoc` path. |

## Factor Map Node Legend

| Node role | Type | Color | Runtime source |
| Primary asset leg | input | `#0ea5e9` blue | First parsed `{asset weight%}` token from `source_input.input_text`. |
| Hedge asset leg | input | `#f59e0b` amber | Second parsed `{asset weight%}` token from `source_input.input_text`. |
| Relative skew gap | compute | `#22c55e` green | Deterministic score from factor tokens and portfolio weight spread. |
| Repricing progress | compute | `#14b8a6` teal | Deterministic score from factor/catalyst token coverage. |
| Catalyst line | validation | `#64748b` slate | Parsed catalyst tokens such as FOMC, CPI, ETF, skew, premium, and macro. |
| Rich media outputs | rich_media | `#f59e0b` amber | Markdown, SVG, and HTML returned by the same compute run. |

## Compute Function Contract

The `compute` field on `compute_summary` is the runnable owner and is authored
as a typed KTV row with type `javascript`. The Markdown parser maps this
document-native `compute` row to the runtime `flow:compute` property upstream,
so the document does not need a parallel `flow:compute` alias:

```
inputs => { … } → { output: markdown, imageUrl: svg_data_uri, outputSrcDoc: html_srcdoc }
```

### Input spec (`inputs_spec`)

| Key | Port | Type | Required | Source | Parse targets |
| `input_text` | `template_text_signal` | `textarea` | `true` | `source_input` | `horizon`, `btcWt`, `goldWt`, `hasFOMC`, `hasCPI` |

### Output spec (`outputs_spec`)

| Key | Port | Content type | Panel | Structured fields / metadata |
| `output` | `template_text_signal` | `markdown` | `panel_text_output` | `horizon`, `portfolio`, `skewGap`, `convergePct`, `catalysts`, `tradeExpression`, `risk` |
| `imageUrl` | `template_image_signal` | `svg_data_uri` | `panel_image_output` | `viewBox: 640x360`, `kgc_nodes: 6`, `kgc_edges: 6` |
| `outputSrcDoc` | `template_chart_html` | `html_srcdoc` | `panel_chart_output` | `etf_flow`, `skew_rr`, `signal_noise`, `alpha_box` |

### Harness metadata

| Field | Key | Type | Value |
| `harness_type` | `harness_type` | `string` | `sequential` |
| `orch_topology` | `orch_topology` | `string` | `single-pass` |
| `token_budget` | `token_budget` | `number` | `512` |
| `alpha_signal` | `alpha_signal` | `string` | Derived at run time from `source_input.input_text` |
| `harness_proof` | `harness_proof` | `string` | `harness-proof.json` |

The function parses horizon, asset weights, catalyst tokens, and factor tokens
from the raw input string. Gap, repricing, and signal scores are deterministic
run values derived from the current input, so editing `source_input.input_text`
and rerunning changes all three output ports without frozen reference payloads,
network fetches, DOM access, or renderer-specific branches.

## Validation Checklist

1. Parse the document through the Markdown parser and require zero warnings.
2. Confirm the graph materialises five nodes and four edges.
3. Open through Source Files as `/docs/knowgrph-missalph-demo.md`.
4. Use 2D mode with `2D Renderer: Flow Editor`.
5. Confirm `data-kg-flow-editor-surface-root` exists.
6. Confirm three `data-kg-rich-media-panel` surfaces render.
7. Run the compute node and confirm the chart panel receives an iframe `srcdoc` preview.
8. Edit `source_input.input_text` to a different query string and confirm
   `compute_summary` re-derives horizon, weights, catalysts, `output`,
   `imageUrl`, and `outputSrcDoc`.

## How To Inspect In Knowgrph

1. Open this Source File in Knowgrph.
2. Verify `source_input` feeds `compute_summary` through `input_text`
   via a `template_text_signal` edge (teal, 2px).
3. Verify `compute_summary` exposes `output`, `imageUrl`, and `outputSrcDoc`
   on three typed source handles.
4. Run `compute_summary` and verify `panel_text_output` renders computed markdown.
5. Verify `panel_image_output` renders the SVG data URI returned by the same run.
6. Verify `panel_chart_output` renders the HTML dashboard returned through
   the `srcDoc` path.
7. Replace `source_input.input_text` with a different missing alpha prompt and
   rerun. The three panels should change from the same input edit without
   changing node ids, edge topology, or renderer-specific code.
