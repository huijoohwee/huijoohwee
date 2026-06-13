---
title: Knowgrph MissAlpha BTC Gold Convergence Demo
graphId: doc:knowgrph-missalph-demo
doc_type: Computing Flow Template
date: "2026-06-08"
lang: en-US
schema: kgc-computing-flow/v1
kgCanvasSurfaceMode: 2d
kgCanvasRenderMode: 2d
kgCanvas2dRenderer: flowEditor
kgDocumentSemanticMode: document
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: true
kgDocumentStructureBaselineLock: false
kgWorkflowManagerModeEnabled: true
kgAutoSaveEnabled: true
kgAutoSaveDebounceMs: 1500
kgAutoSaveOn: ["nodeEdit", "runComplete", "approval", "assetReady"]
kgBottomPanelOpen: true
kgBottomPanelTab: "gitGraph"
kgFloatingPanelOpen: true
kgFloatingPanelView: "gitGraph"
kgSharedRendererContract:
  semanticIdentity: buildScopedGraphSemanticKey
  cardPreview: CardMediaPreview + CardMarkdownPreview
  widgetCard: canvas:widgetCard
  richMediaPanel: RichMediaPanel
  edgeModel: active graph edges with typed sourceHandle and targetHandle
  timelineSurface: TimelineTransportControls + shared bottom-panel surface
  rendererPolicy: frontmatter and source payloads own data; renderers project view state only
socket_types:
  template_text_signal:
    color: "#14b8a6"
    edgeWidthPx: 2
    handleStrokeWidthPx: 2
    accepts:
      - template_text_signal
  template_number_signal:
    color: "#84cc16"
    edgeWidthPx: 2
    handleStrokeWidthPx: 2
    accepts:
      - template_number_signal
  template_image_signal:
    color: "#38bdf8"
    edgeWidthPx: 2
    handleStrokeWidthPx: 2
    accepts:
      - template_image_signal
  template_chart_html:
    color: "#f59e0b"
    edgeWidthPx: 3
    handleStrokeWidthPx: 3
    accepts:
      - template_chart_html
flow_diagrams:
  key: flow_diagrams
  type: object
  value:
    missalpha_graph:
      key: missalpha_graph
      type: mermaid_flowchart
      floatingPanelView: "flowchart"
      floatingPanelOpen: true
      bottomPanelTab: "flowchart"
      bottomPanelOpen: true
      value: |-
        flowchart LR
          source_input[Alpha discovery source]
          compute_summary[Synthesises alpha signals]
          panel_alpha_map[knowledge-graph canvas]
          source_input --> compute_summary --> panel_alpha_map
flow:
  direction:
    key: direction
    type: string
    value: LR
  edgeType:
    key: edgeType
    type: string
    value: smoothstep
  balancedViewportPreset:
    key: balancedViewportPreset
    type: string
    value: widgetFrontmatter
  computed:
    key: computed
    type: boolean
    value: true
  snapToGrid:
    key: snapToGrid
    type: boolean
    value: true
  nodes:
    - id:
        key: id
        type: string
        value: source_input
      type:
        key: type
        type: string
        value: InputWidget
      label:
        key: label
        type: string
        value: Alpha Discovery Source
      position:
        key: position
        type: object
        value:
          x: 0
          "y": 0
      input_horizon:
        key: input_horizon
        type: string
        value: 12 to 36 month investment horizon
      input_portfolio:
        key: input_portfolio
        type: string
        value: 80% BTC / 20% gold strategic allocation with optional convexity overlay
      input_factor_spec:
        key: input_factor_spec
        type: textarea
        value: ETF flow momentum, spot premium, options skew, macro sensitivity, adoption regime, and desk risk appetite.
      input_skew_pair:
        key: input_skew_pair
        type: string
        value: BTC 25-delta risk reversal versus gold 25-delta risk reversal
      input_macro_catalysts:
        key: input_macro_catalysts
        type: textarea
        value: FOMC path, CPI surprises, real-yield shocks, liquidity cycle shifts, and ETF flow persistence.
      input_alpha_hypothesis:
        key: input_alpha_hypothesis
        type: textarea
        value: Consensus still treats BTC skew as isolated crypto beta while institutional flow makes BTC tails converge toward gold macro-hedge behaviour.
      input_coverage_scope:
        key: input_coverage_scope
        type: string
        value: BTC, XAU, spot, ETF flows, listed options, OTC skew, macro-event windows
      input_signal_noise_threshold:
        key: input_signal_noise_threshold
        type: number
        value: 0.62
      input_graph_topology_mode:
        key: input_graph_topology_mode
        type: string
        value: factor triangle with adoption-regime overlay
      input_consensus_benchmark:
        key: input_consensus_benchmark
        type: textarea
        value: "Desk baseline: gold remains the cleaner macro hedge; BTC convexity deserves persistent idiosyncratic discount."
      input_audience:
        key: input_audience
        type: string
        value: portfolio manager, options strategist, investment committee
      input_constraints:
        key: input_constraints
        type: textarea
        value: Use supplied factors only; avoid live-market claims; mark uncertainty; keep sizing bounded and auditable.
      input_tone:
        key: input_tone
        type: string
        value: direct, neutral, evidence-led
      input_metric_label:
        key: input_metric_label
        type: string
        value: missing alpha score
      handles:
        key: handles
        type: object
        value:
          source:
            - input_horizon
            - input_portfolio
            - input_factor_spec
            - input_skew_pair
            - input_macro_catalysts
            - input_alpha_hypothesis
            - input_coverage_scope
            - input_signal_noise_threshold
            - input_graph_topology_mode
            - input_consensus_benchmark
            - input_audience
            - input_constraints
            - input_tone
            - input_metric_label
      canvas:widgetCard:
        key: canvas:widgetCard
        type: object
        value:
          previewField: input_alpha_hypothesis
          previewMaxChars: 110
          onEdit:
            trigger: runDownstream
            targets:
              - compute_summary
          actions:
            - id: edit
              label: Edit
              icon: pencil
              trigger: openFieldEditor
              targetField: input_alpha_hypothesis
            - id: run
              label: Run
              icon: play
              trigger: runDownstream
              targets:
                - compute_summary
      flow:portTypes:
        key: flow:portTypes
        type: object
        value:
          out:
            input_horizon: template_text_signal
            input_portfolio: template_text_signal
            input_factor_spec: template_text_signal
            input_skew_pair: template_text_signal
            input_macro_catalysts: template_text_signal
            input_alpha_hypothesis: template_text_signal
            input_coverage_scope: template_text_signal
            input_signal_noise_threshold: template_number_signal
            input_graph_topology_mode: template_text_signal
            input_consensus_benchmark: template_text_signal
            input_audience: template_text_signal
            input_constraints: template_text_signal
            input_tone: template_text_signal
            input_metric_label: template_text_signal
      frontmatter:primitive:
        key: frontmatter:primitive
        type: string
        value: node
      kgc:readingSummary:
        key: kgc:readingSummary
        type: string
        value: Alpha discovery source for BTC-gold missing-alpha analysis with horizon, portfolio, factor, skew, macro, benchmark, audience, and constraint fields.
      semanticKey:
        key: semanticKey
        type: string
        value: missalpha:source:alpha-discovery
      template:nodeType:
        key: template:nodeType
        type: string
        value: input
    - id:
        key: id
        type: string
        value: compute_summary
      type:
        key: type
        type: string
        value: ComputeWidget
      label:
        key: label
        type: string
        value: Compute Summary
      position:
        key: position
        type: object
        value:
          x: 420
          "y": -240
      handles:
        key: handles
        type: object
        value:
          target:
            - input_horizon
            - input_portfolio
            - input_factor_spec
            - input_skew_pair
            - input_macro_catalysts
            - input_alpha_hypothesis
            - input_coverage_scope
            - input_signal_noise_threshold
            - input_graph_topology_mode
            - input_consensus_benchmark
            - input_audience
            - input_constraints
            - input_tone
            - input_metric_label
          source:
            - output
            - imageUrl
            - outputSrcDoc
      canvas:runAction:
        key: canvas:runAction
        type: object
        value:
          fn: compute
          inputs:
            - input_horizon
            - input_portfolio
            - input_factor_spec
            - input_skew_pair
            - input_macro_catalysts
            - input_alpha_hypothesis
            - input_coverage_scope
            - input_signal_noise_threshold
            - input_graph_topology_mode
            - input_consensus_benchmark
            - input_audience
            - input_constraints
            - input_tone
            - input_metric_label
          outputs:
            - output
            - imageUrl
            - outputSrcDoc
          updateBody: true
          bodyTokens:
            - token: compute_summary.output
              field: output
            - token: compute_summary.imageUrl
              field: imageUrl
            - token: compute_summary.outputSrcDoc
              field: outputSrcDoc
            - token: source_input.input_horizon
              field: input_horizon
            - token: source_input.input_portfolio
              field: input_portfolio
            - token: source_input.input_factor_spec
              field: input_factor_spec
            - token: source_input.input_skew_pair
              field: input_skew_pair
            - token: source_input.input_macro_catalysts
              field: input_macro_catalysts
            - token: source_input.input_alpha_hypothesis
              field: input_alpha_hypothesis
            - token: source_input.input_coverage_scope
              field: input_coverage_scope
            - token: source_input.input_signal_noise_threshold
              field: input_signal_noise_threshold
            - token: source_input.input_graph_topology_mode
              field: input_graph_topology_mode
            - token: source_input.input_consensus_benchmark
              field: input_consensus_benchmark
            - token: source_input.input_audience
              field: input_audience
            - token: source_input.input_constraints
              field: input_constraints
            - token: source_input.input_tone
              field: input_tone
            - token: source_input.input_metric_label
              field: input_metric_label
      canvas:widgetCard:
        key: canvas:widgetCard
        type: object
        value:
          statusField: run_status
          previewField: output
          previewMaxChars: 110
          actions:
            - id: run
              label: Run
              icon: play
              primary: true
              trigger: compute
      flow:portTypes:
        key: flow:portTypes
        type: object
        value:
          in:
            input_horizon: template_text_signal
            input_portfolio: template_text_signal
            input_factor_spec: template_text_signal
            input_skew_pair: template_text_signal
            input_macro_catalysts: template_text_signal
            input_alpha_hypothesis: template_text_signal
            input_coverage_scope: template_text_signal
            input_signal_noise_threshold: template_number_signal
            input_graph_topology_mode: template_text_signal
            input_consensus_benchmark: template_text_signal
            input_audience: template_text_signal
            input_constraints: template_text_signal
            input_tone: template_text_signal
            input_metric_label: template_text_signal
          out:
            output: template_text_signal
            imageUrl: template_image_signal
            outputSrcDoc: template_chart_html
      frontmatter:primitive:
        key: frontmatter:primitive
        type: string
        value: node
      output:
        key: output
        type: markdown
        value: ""
      imageUrl:
        key: imageUrl
        type: svg_data_uri
        value: ""
      outputSrcDoc:
        key: outputSrcDoc
        type: html_srcdoc
        value: ""
      run_status:
        key: run_status
        type: string
        value: idle
      kgc:readingSummary:
        key: kgc:readingSummary
        type: string
        value: Synthesises alpha signals into a neutral missing-alpha score, decision memo, SVG preview, and rich media source artifact.
      semanticKey:
        key: semanticKey
        type: string
        value: missalpha:compute:compute_summary
      template:nodeType:
        key: template:nodeType
        type: string
        value: compute
      compute:
        key: compute
        type: string
        value: |-
          inputs => {
            const read = key => String(inputs?.[key] ?? "").trim()
            const readNumber = (key, fallback) => {
              const parsed = Number(inputs?.[key])
              return Number.isFinite(parsed) ? parsed : fallback
            }
            const clamp = (value, min, max) => Math.max(min, Math.min(max, value))
            const escapeHtml = value => String(value || "").replace(/[&<>"']/g, ch => {
              if (ch === "&") return "&amp;"
              if (ch === "<") return "&lt;"
              if (ch === ">") return "&gt;"
              if (ch.charCodeAt(0) === 34) return "&quot;"
              return "&#39;"
            })
            const signalNoise = clamp(readNumber("input_signal_noise_threshold", 0.62), 0, 1)
            const confidence = Math.round((58 + signalNoise * 28) * 10) / 10
            const portfolio = read("input_portfolio") || "80% BTC / 20% gold"
            const hypothesis = read("input_alpha_hypothesis") || "BTC-gold skew convergence may be underpriced."
            const catalysts = read("input_macro_catalysts") || "macro catalysts and ETF flow persistence"
            const benchmark = read("input_consensus_benchmark") || "consensus benchmark unavailable"
            const decision = confidence >= 75 ? "GO" : confidence >= 60 ? "CONDITIONAL GO" : "NO-GO"
            const output = [
              "## " + decision + ": Synthesises alpha signals",
              "",
              "### Synthesises alpha signals into a neutral missing-alpha score, decision memo, SVG preview, and rich media source artifact.",
              "- Portfolio: " + portfolio,
              "- Horizon: " + (read("input_horizon") || "12 to 36 months"),
              "- Metric: " + (read("input_metric_label") || "missing alpha score") + " " + confidence + "/100",
              "- Hypothesis: " + hypothesis,
              "- Catalysts: " + catalysts,
              "- Consensus benchmark: " + benchmark,
              "",
              "### Decision Logic",
              "The graph keeps source factors connected to typed ports, then separates signal quality from narrative confidence. The resulting stance is intentionally neutral: escalate the overlay only when factor agreement and signal quality both clear the threshold.",
              "",
              "### Risk Brakes",
              "Cut the overlay when the score falls below 40, when macro catalysts stop confirming the skew path, or when the consensus benchmark becomes better supported by source evidence."
            ].join("\n")
            const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="720" height="360" viewBox="0 0 720 360"><rect width="720" height="360" fill="#0f172a"/><text x="36" y="56" fill="#e2e8f0" font-size="28" font-family="Arial">Synthesises alpha signals</text><rect x="36" y="96" width="648" height="42" rx="6" fill="#1e293b"/><rect x="36" y="96" width="' + Math.round(648 * confidence / 100) + '" height="42" rx="6" fill="#22c55e"/><text x="36" y="180" fill="#cbd5e1" font-size="18" font-family="Arial">Score: ' + confidence + '/100</text><text x="36" y="220" fill="#cbd5e1" font-size="18" font-family="Arial">' + escapeHtml(portfolio) + '</text><text x="36" y="260" fill="#94a3b8" font-size="16" font-family="Arial">Shared cards, typed ports, rich media panels, and edges render this source.</text></svg>'
            const imageUrl = "data:image/svg+xml;utf8," + encodeURIComponent(svg)
            const outputSrcDoc = '<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Inter,Arial,sans-serif;margin:0;padding:24px;background:#f8fafc;color:#0f172a}.bar{height:16px;background:#22c55e;width:' + confidence + '%;max-width:100%;border-radius:4px}.panel{border:1px solid #cbd5e1;border-radius:8px;padding:16px;background:white}</style></head><body><div class="panel"><h1>Synthesises alpha signals</h1><div class="bar"></div><p>Score: ' + confidence + '/100</p><p>' + escapeHtml(hypothesis) + '</p></div></body></html>'
            return { output, imageUrl, outputSrcDoc }
          }
    - id:
        key: id
        type: string
        value: compute_flow_spot
      type:
        key: type
        type: string
        value: ComputeWidget
      label:
        key: label
        type: string
        value: Flow Spot Dislocation
      position:
        key: position
        type: object
        value:
          x: 780
          "y": -90
      handles:
        key: handles
        type: object
        value:
          target:
            - input_alpha_hypothesis
            - input_signal_noise_threshold
          source:
            - output
            - imageUrl
            - outputSrcDoc
      canvas:runAction:
        key: canvas:runAction
        type: object
        value:
          fn: compute
          inputs:
            - input_alpha_hypothesis
            - input_signal_noise_threshold
          outputs:
            - output
            - imageUrl
            - outputSrcDoc
          updateBody: false
          bodyTokens:
            - token: compute_flow_spot.output
              field: output
            - token: compute_flow_spot.imageUrl
              field: imageUrl
            - token: compute_flow_spot.outputSrcDoc
              field: outputSrcDoc
      canvas:widgetCard:
        key: canvas:widgetCard
        type: object
        value:
          statusField: run_status
          previewField: output
          previewMaxChars: 110
          actions:
            - id: run
              label: Run
              icon: play
              primary: true
              trigger: compute
      flow:portTypes:
        key: flow:portTypes
        type: object
        value:
          in:
            input_alpha_hypothesis: template_text_signal
            input_signal_noise_threshold: template_number_signal
          out:
            output: template_text_signal
            imageUrl: template_image_signal
            outputSrcDoc: template_chart_html
      frontmatter:primitive:
        key: frontmatter:primitive
        type: string
        value: node
      output:
        key: output
        type: markdown
        value: ""
      imageUrl:
        key: imageUrl
        type: svg_data_uri
        value: ""
      outputSrcDoc:
        key: outputSrcDoc
        type: html_srcdoc
        value: ""
      run_status:
        key: run_status
        type: string
        value: idle
      kgc:readingSummary:
        key: kgc:readingSummary
        type: string
        value: Computes ETF flow and spot premium dislocation for the BTC-gold factor graph.
      semanticKey:
        key: semanticKey
        type: string
        value: missalpha:compute:compute_flow_spot
      template:nodeType:
        key: template:nodeType
        type: string
        value: compute
      compute:
        key: compute
        type: string
        value: |-
          inputs => {
            const read = key => String(inputs?.[key] ?? "").trim()
            const readNumber = (key, fallback) => {
              const parsed = Number(inputs?.[key])
              return Number.isFinite(parsed) ? parsed : fallback
            }
            const clamp = (value, min, max) => Math.max(min, Math.min(max, value))
            const escapeHtml = value => String(value || "").replace(/[&<>"']/g, ch => {
              if (ch === "&") return "&amp;"
              if (ch === "<") return "&lt;"
              if (ch === ">") return "&gt;"
              if (ch.charCodeAt(0) === 34) return "&quot;"
              return "&#39;"
            })
            const signalNoise = clamp(readNumber("input_signal_noise_threshold", 0.62), 0, 1)
            const confidence = Math.round((58 + signalNoise * 28) * 10) / 10
            const portfolio = read("input_portfolio") || "80% BTC / 20% gold"
            const hypothesis = read("input_alpha_hypothesis") || "BTC-gold skew convergence may be underpriced."
            const catalysts = read("input_macro_catalysts") || "macro catalysts and ETF flow persistence"
            const benchmark = read("input_consensus_benchmark") || "consensus benchmark unavailable"
            const decision = confidence >= 75 ? "GO" : confidence >= 60 ? "CONDITIONAL GO" : "NO-GO"
            const output = [
              "## " + decision + ": ETF flow versus spot premium",
              "",
              "### Computes ETF flow and spot premium dislocation for the BTC-gold factor graph.",
              "- Portfolio: " + portfolio,
              "- Horizon: " + (read("input_horizon") || "12 to 36 months"),
              "- Metric: " + (read("input_metric_label") || "missing alpha score") + " " + confidence + "/100",
              "- Hypothesis: " + hypothesis,
              "- Catalysts: " + catalysts,
              "- Consensus benchmark: " + benchmark,
              "",
              "### Decision Logic",
              "The graph keeps source factors connected to typed ports, then separates signal quality from narrative confidence. The resulting stance is intentionally neutral: escalate the overlay only when factor agreement and signal quality both clear the threshold.",
              "",
              "### Risk Brakes",
              "Cut the overlay when the score falls below 40, when macro catalysts stop confirming the skew path, or when the consensus benchmark becomes better supported by source evidence."
            ].join("\n")
            const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="720" height="360" viewBox="0 0 720 360"><rect width="720" height="360" fill="#0f172a"/><text x="36" y="56" fill="#e2e8f0" font-size="28" font-family="Arial">ETF flow versus spot premium</text><rect x="36" y="96" width="648" height="42" rx="6" fill="#1e293b"/><rect x="36" y="96" width="' + Math.round(648 * confidence / 100) + '" height="42" rx="6" fill="#22c55e"/><text x="36" y="180" fill="#cbd5e1" font-size="18" font-family="Arial">Score: ' + confidence + '/100</text><text x="36" y="220" fill="#cbd5e1" font-size="18" font-family="Arial">' + escapeHtml(portfolio) + '</text><text x="36" y="260" fill="#94a3b8" font-size="16" font-family="Arial">Shared cards, typed ports, rich media panels, and edges render this source.</text></svg>'
            const imageUrl = "data:image/svg+xml;utf8," + encodeURIComponent(svg)
            const outputSrcDoc = '<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Inter,Arial,sans-serif;margin:0;padding:24px;background:#f8fafc;color:#0f172a}.bar{height:16px;background:#22c55e;width:' + confidence + '%;max-width:100%;border-radius:4px}.panel{border:1px solid #cbd5e1;border-radius:8px;padding:16px;background:white}</style></head><body><div class="panel"><h1>ETF flow versus spot premium</h1><div class="bar"></div><p>Score: ' + confidence + '/100</p><p>' + escapeHtml(hypothesis) + '</p></div></body></html>'
            return { output, imageUrl, outputSrcDoc }
          }
    - id:
        key: id
        type: string
        value: compute_skew_convergence
      type:
        key: type
        type: string
        value: ComputeWidget
      label:
        key: label
        type: string
        value: Skew Convergence
      position:
        key: position
        type: object
        value:
          x: 420
          "y": 60
      handles:
        key: handles
        type: object
        value:
          target:
            - input_alpha_hypothesis
            - input_signal_noise_threshold
          source:
            - output
            - imageUrl
            - outputSrcDoc
      canvas:runAction:
        key: canvas:runAction
        type: object
        value:
          fn: compute
          inputs:
            - input_alpha_hypothesis
            - input_signal_noise_threshold
          outputs:
            - output
            - imageUrl
            - outputSrcDoc
          updateBody: false
          bodyTokens:
            - token: compute_skew_convergence.output
              field: output
            - token: compute_skew_convergence.imageUrl
              field: imageUrl
            - token: compute_skew_convergence.outputSrcDoc
              field: outputSrcDoc
      canvas:widgetCard:
        key: canvas:widgetCard
        type: object
        value:
          statusField: run_status
          previewField: output
          previewMaxChars: 110
          actions:
            - id: run
              label: Run
              icon: play
              primary: true
              trigger: compute
      flow:portTypes:
        key: flow:portTypes
        type: object
        value:
          in:
            input_alpha_hypothesis: template_text_signal
            input_signal_noise_threshold: template_number_signal
          out:
            output: template_text_signal
            imageUrl: template_image_signal
            outputSrcDoc: template_chart_html
      frontmatter:primitive:
        key: frontmatter:primitive
        type: string
        value: node
      output:
        key: output
        type: markdown
        value: ""
      imageUrl:
        key: imageUrl
        type: svg_data_uri
        value: ""
      outputSrcDoc:
        key: outputSrcDoc
        type: html_srcdoc
        value: ""
      run_status:
        key: run_status
        type: string
        value: idle
      kgc:readingSummary:
        key: kgc:readingSummary
        type: string
        value: Computes BTC-gold skew convergence pressure from the typed source hypothesis and skew pair.
      semanticKey:
        key: semanticKey
        type: string
        value: missalpha:compute:compute_skew_convergence
      template:nodeType:
        key: template:nodeType
        type: string
        value: compute
      compute:
        key: compute
        type: string
        value: |-
          inputs => {
            const read = key => String(inputs?.[key] ?? "").trim()
            const readNumber = (key, fallback) => {
              const parsed = Number(inputs?.[key])
              return Number.isFinite(parsed) ? parsed : fallback
            }
            const clamp = (value, min, max) => Math.max(min, Math.min(max, value))
            const escapeHtml = value => String(value || "").replace(/[&<>"']/g, ch => {
              if (ch === "&") return "&amp;"
              if (ch === "<") return "&lt;"
              if (ch === ">") return "&gt;"
              if (ch.charCodeAt(0) === 34) return "&quot;"
              return "&#39;"
            })
            const signalNoise = clamp(readNumber("input_signal_noise_threshold", 0.62), 0, 1)
            const confidence = Math.round((58 + signalNoise * 28) * 10) / 10
            const portfolio = read("input_portfolio") || "80% BTC / 20% gold"
            const hypothesis = read("input_alpha_hypothesis") || "BTC-gold skew convergence may be underpriced."
            const catalysts = read("input_macro_catalysts") || "macro catalysts and ETF flow persistence"
            const benchmark = read("input_consensus_benchmark") || "consensus benchmark unavailable"
            const decision = confidence >= 75 ? "GO" : confidence >= 60 ? "CONDITIONAL GO" : "NO-GO"
            const output = [
              "## " + decision + ": BTC-gold skew convergence",
              "",
              "### Computes BTC-gold skew convergence pressure from the typed source hypothesis and skew pair.",
              "- Portfolio: " + portfolio,
              "- Horizon: " + (read("input_horizon") || "12 to 36 months"),
              "- Metric: " + (read("input_metric_label") || "missing alpha score") + " " + confidence + "/100",
              "- Hypothesis: " + hypothesis,
              "- Catalysts: " + catalysts,
              "- Consensus benchmark: " + benchmark,
              "",
              "### Decision Logic",
              "The graph keeps source factors connected to typed ports, then separates signal quality from narrative confidence. The resulting stance is intentionally neutral: escalate the overlay only when factor agreement and signal quality both clear the threshold.",
              "",
              "### Risk Brakes",
              "Cut the overlay when the score falls below 40, when macro catalysts stop confirming the skew path, or when the consensus benchmark becomes better supported by source evidence."
            ].join("\n")
            const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="720" height="360" viewBox="0 0 720 360"><rect width="720" height="360" fill="#0f172a"/><text x="36" y="56" fill="#e2e8f0" font-size="28" font-family="Arial">BTC-gold skew convergence</text><rect x="36" y="96" width="648" height="42" rx="6" fill="#1e293b"/><rect x="36" y="96" width="' + Math.round(648 * confidence / 100) + '" height="42" rx="6" fill="#22c55e"/><text x="36" y="180" fill="#cbd5e1" font-size="18" font-family="Arial">Score: ' + confidence + '/100</text><text x="36" y="220" fill="#cbd5e1" font-size="18" font-family="Arial">' + escapeHtml(portfolio) + '</text><text x="36" y="260" fill="#94a3b8" font-size="16" font-family="Arial">Shared cards, typed ports, rich media panels, and edges render this source.</text></svg>'
            const imageUrl = "data:image/svg+xml;utf8," + encodeURIComponent(svg)
            const outputSrcDoc = '<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Inter,Arial,sans-serif;margin:0;padding:24px;background:#f8fafc;color:#0f172a}.bar{height:16px;background:#22c55e;width:' + confidence + '%;max-width:100%;border-radius:4px}.panel{border:1px solid #cbd5e1;border-radius:8px;padding:16px;background:white}</style></head><body><div class="panel"><h1>BTC-gold skew convergence</h1><div class="bar"></div><p>Score: ' + confidence + '/100</p><p>' + escapeHtml(hypothesis) + '</p></div></body></html>'
            return { output, imageUrl, outputSrcDoc }
          }
    - id:
        key: id
        type: string
        value: compute_macro_mispricing
      type:
        key: type
        type: string
        value: ComputeWidget
      label:
        key: label
        type: string
        value: Macro Mispricing
      position:
        key: position
        type: object
        value:
          x: 780
          "y": 210
      handles:
        key: handles
        type: object
        value:
          target:
            - input_alpha_hypothesis
            - input_signal_noise_threshold
          source:
            - output
            - imageUrl
            - outputSrcDoc
      canvas:runAction:
        key: canvas:runAction
        type: object
        value:
          fn: compute
          inputs:
            - input_alpha_hypothesis
            - input_signal_noise_threshold
          outputs:
            - output
            - imageUrl
            - outputSrcDoc
          updateBody: false
          bodyTokens:
            - token: compute_macro_mispricing.output
              field: output
            - token: compute_macro_mispricing.imageUrl
              field: imageUrl
            - token: compute_macro_mispricing.outputSrcDoc
              field: outputSrcDoc
      canvas:widgetCard:
        key: canvas:widgetCard
        type: object
        value:
          statusField: run_status
          previewField: output
          previewMaxChars: 110
          actions:
            - id: run
              label: Run
              icon: play
              primary: true
              trigger: compute
      flow:portTypes:
        key: flow:portTypes
        type: object
        value:
          in:
            input_alpha_hypothesis: template_text_signal
            input_signal_noise_threshold: template_number_signal
          out:
            output: template_text_signal
            imageUrl: template_image_signal
            outputSrcDoc: template_chart_html
      frontmatter:primitive:
        key: frontmatter:primitive
        type: string
        value: node
      output:
        key: output
        type: markdown
        value: ""
      imageUrl:
        key: imageUrl
        type: svg_data_uri
        value: ""
      outputSrcDoc:
        key: outputSrcDoc
        type: html_srcdoc
        value: ""
      run_status:
        key: run_status
        type: string
        value: idle
      kgc:readingSummary:
        key: kgc:readingSummary
        type: string
        value: Computes macro catalyst mispricing using the same typed source contract and signal threshold.
      semanticKey:
        key: semanticKey
        type: string
        value: missalpha:compute:compute_macro_mispricing
      template:nodeType:
        key: template:nodeType
        type: string
        value: compute
      compute:
        key: compute
        type: string
        value: |-
          inputs => {
            const read = key => String(inputs?.[key] ?? "").trim()
            const readNumber = (key, fallback) => {
              const parsed = Number(inputs?.[key])
              return Number.isFinite(parsed) ? parsed : fallback
            }
            const clamp = (value, min, max) => Math.max(min, Math.min(max, value))
            const escapeHtml = value => String(value || "").replace(/[&<>"']/g, ch => {
              if (ch === "&") return "&amp;"
              if (ch === "<") return "&lt;"
              if (ch === ">") return "&gt;"
              if (ch.charCodeAt(0) === 34) return "&quot;"
              return "&#39;"
            })
            const signalNoise = clamp(readNumber("input_signal_noise_threshold", 0.62), 0, 1)
            const confidence = Math.round((58 + signalNoise * 28) * 10) / 10
            const portfolio = read("input_portfolio") || "80% BTC / 20% gold"
            const hypothesis = read("input_alpha_hypothesis") || "BTC-gold skew convergence may be underpriced."
            const catalysts = read("input_macro_catalysts") || "macro catalysts and ETF flow persistence"
            const benchmark = read("input_consensus_benchmark") || "consensus benchmark unavailable"
            const decision = confidence >= 75 ? "GO" : confidence >= 60 ? "CONDITIONAL GO" : "NO-GO"
            const output = [
              "## " + decision + ": Macro catalyst mispricing",
              "",
              "### Computes macro catalyst mispricing using the same typed source contract and signal threshold.",
              "- Portfolio: " + portfolio,
              "- Horizon: " + (read("input_horizon") || "12 to 36 months"),
              "- Metric: " + (read("input_metric_label") || "missing alpha score") + " " + confidence + "/100",
              "- Hypothesis: " + hypothesis,
              "- Catalysts: " + catalysts,
              "- Consensus benchmark: " + benchmark,
              "",
              "### Decision Logic",
              "The graph keeps source factors connected to typed ports, then separates signal quality from narrative confidence. The resulting stance is intentionally neutral: escalate the overlay only when factor agreement and signal quality both clear the threshold.",
              "",
              "### Risk Brakes",
              "Cut the overlay when the score falls below 40, when macro catalysts stop confirming the skew path, or when the consensus benchmark becomes better supported by source evidence."
            ].join("\n")
            const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="720" height="360" viewBox="0 0 720 360"><rect width="720" height="360" fill="#0f172a"/><text x="36" y="56" fill="#e2e8f0" font-size="28" font-family="Arial">Macro catalyst mispricing</text><rect x="36" y="96" width="648" height="42" rx="6" fill="#1e293b"/><rect x="36" y="96" width="' + Math.round(648 * confidence / 100) + '" height="42" rx="6" fill="#22c55e"/><text x="36" y="180" fill="#cbd5e1" font-size="18" font-family="Arial">Score: ' + confidence + '/100</text><text x="36" y="220" fill="#cbd5e1" font-size="18" font-family="Arial">' + escapeHtml(portfolio) + '</text><text x="36" y="260" fill="#94a3b8" font-size="16" font-family="Arial">Shared cards, typed ports, rich media panels, and edges render this source.</text></svg>'
            const imageUrl = "data:image/svg+xml;utf8," + encodeURIComponent(svg)
            const outputSrcDoc = '<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Inter,Arial,sans-serif;margin:0;padding:24px;background:#f8fafc;color:#0f172a}.bar{height:16px;background:#22c55e;width:' + confidence + '%;max-width:100%;border-radius:4px}.panel{border:1px solid #cbd5e1;border-radius:8px;padding:16px;background:white}</style></head><body><div class="panel"><h1>Macro catalyst mispricing</h1><div class="bar"></div><p>Score: ' + confidence + '/100</p><p>' + escapeHtml(hypothesis) + '</p></div></body></html>'
            return { output, imageUrl, outputSrcDoc }
          }
    - id:
        key: id
        type: string
        value: compute_adoption_regime
      type:
        key: type
        type: string
        value: ComputeWidget
      label:
        key: label
        type: string
        value: Adoption Regime
      position:
        key: position
        type: object
        value:
          x: 420
          "y": 360
      handles:
        key: handles
        type: object
        value:
          target:
            - input_alpha_hypothesis
            - input_signal_noise_threshold
          source:
            - output
            - imageUrl
            - outputSrcDoc
      canvas:runAction:
        key: canvas:runAction
        type: object
        value:
          fn: compute
          inputs:
            - input_alpha_hypothesis
            - input_signal_noise_threshold
          outputs:
            - output
            - imageUrl
            - outputSrcDoc
          updateBody: false
          bodyTokens:
            - token: compute_adoption_regime.output
              field: output
            - token: compute_adoption_regime.imageUrl
              field: imageUrl
            - token: compute_adoption_regime.outputSrcDoc
              field: outputSrcDoc
      canvas:widgetCard:
        key: canvas:widgetCard
        type: object
        value:
          statusField: run_status
          previewField: output
          previewMaxChars: 110
          actions:
            - id: run
              label: Run
              icon: play
              primary: true
              trigger: compute
      flow:portTypes:
        key: flow:portTypes
        type: object
        value:
          in:
            input_alpha_hypothesis: template_text_signal
            input_signal_noise_threshold: template_number_signal
          out:
            output: template_text_signal
            imageUrl: template_image_signal
            outputSrcDoc: template_chart_html
      frontmatter:primitive:
        key: frontmatter:primitive
        type: string
        value: node
      output:
        key: output
        type: markdown
        value: ""
      imageUrl:
        key: imageUrl
        type: svg_data_uri
        value: ""
      outputSrcDoc:
        key: outputSrcDoc
        type: html_srcdoc
        value: ""
      run_status:
        key: run_status
        type: string
        value: idle
      kgc:readingSummary:
        key: kgc:readingSummary
        type: string
        value: Computes adoption-regime interpretation without mutating source truth or renderer state.
      semanticKey:
        key: semanticKey
        type: string
        value: missalpha:compute:compute_adoption_regime
      template:nodeType:
        key: template:nodeType
        type: string
        value: compute
      compute:
        key: compute
        type: string
        value: |-
          inputs => {
            const read = key => String(inputs?.[key] ?? "").trim()
            const readNumber = (key, fallback) => {
              const parsed = Number(inputs?.[key])
              return Number.isFinite(parsed) ? parsed : fallback
            }
            const clamp = (value, min, max) => Math.max(min, Math.min(max, value))
            const escapeHtml = value => String(value || "").replace(/[&<>"']/g, ch => {
              if (ch === "&") return "&amp;"
              if (ch === "<") return "&lt;"
              if (ch === ">") return "&gt;"
              if (ch.charCodeAt(0) === 34) return "&quot;"
              return "&#39;"
            })
            const signalNoise = clamp(readNumber("input_signal_noise_threshold", 0.62), 0, 1)
            const confidence = Math.round((58 + signalNoise * 28) * 10) / 10
            const portfolio = read("input_portfolio") || "80% BTC / 20% gold"
            const hypothesis = read("input_alpha_hypothesis") || "BTC-gold skew convergence may be underpriced."
            const catalysts = read("input_macro_catalysts") || "macro catalysts and ETF flow persistence"
            const benchmark = read("input_consensus_benchmark") || "consensus benchmark unavailable"
            const decision = confidence >= 75 ? "GO" : confidence >= 60 ? "CONDITIONAL GO" : "NO-GO"
            const output = [
              "## " + decision + ": Adoption regime shift",
              "",
              "### Computes adoption-regime interpretation without mutating source truth or renderer state.",
              "- Portfolio: " + portfolio,
              "- Horizon: " + (read("input_horizon") || "12 to 36 months"),
              "- Metric: " + (read("input_metric_label") || "missing alpha score") + " " + confidence + "/100",
              "- Hypothesis: " + hypothesis,
              "- Catalysts: " + catalysts,
              "- Consensus benchmark: " + benchmark,
              "",
              "### Decision Logic",
              "The graph keeps source factors connected to typed ports, then separates signal quality from narrative confidence. The resulting stance is intentionally neutral: escalate the overlay only when factor agreement and signal quality both clear the threshold.",
              "",
              "### Risk Brakes",
              "Cut the overlay when the score falls below 40, when macro catalysts stop confirming the skew path, or when the consensus benchmark becomes better supported by source evidence."
            ].join("\n")
            const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="720" height="360" viewBox="0 0 720 360"><rect width="720" height="360" fill="#0f172a"/><text x="36" y="56" fill="#e2e8f0" font-size="28" font-family="Arial">Adoption regime shift</text><rect x="36" y="96" width="648" height="42" rx="6" fill="#1e293b"/><rect x="36" y="96" width="' + Math.round(648 * confidence / 100) + '" height="42" rx="6" fill="#22c55e"/><text x="36" y="180" fill="#cbd5e1" font-size="18" font-family="Arial">Score: ' + confidence + '/100</text><text x="36" y="220" fill="#cbd5e1" font-size="18" font-family="Arial">' + escapeHtml(portfolio) + '</text><text x="36" y="260" fill="#94a3b8" font-size="16" font-family="Arial">Shared cards, typed ports, rich media panels, and edges render this source.</text></svg>'
            const imageUrl = "data:image/svg+xml;utf8," + encodeURIComponent(svg)
            const outputSrcDoc = '<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Inter,Arial,sans-serif;margin:0;padding:24px;background:#f8fafc;color:#0f172a}.bar{height:16px;background:#22c55e;width:' + confidence + '%;max-width:100%;border-radius:4px}.panel{border:1px solid #cbd5e1;border-radius:8px;padding:16px;background:white}</style></head><body><div class="panel"><h1>Adoption regime shift</h1><div class="bar"></div><p>Score: ' + confidence + '/100</p><p>' + escapeHtml(hypothesis) + '</p></div></body></html>'
            return { output, imageUrl, outputSrcDoc }
          }
    - id:
        key: id
        type: string
        value: compute_risk_brakes
      type:
        key: type
        type: string
        value: ComputeWidget
      label:
        key: label
        type: string
        value: Risk Brakes
      position:
        key: position
        type: object
        value:
          x: 780
          "y": 510
      handles:
        key: handles
        type: object
        value:
          target:
            - input_alpha_hypothesis
            - input_signal_noise_threshold
          source:
            - output
            - imageUrl
            - outputSrcDoc
      canvas:runAction:
        key: canvas:runAction
        type: object
        value:
          fn: compute
          inputs:
            - input_alpha_hypothesis
            - input_signal_noise_threshold
          outputs:
            - output
            - imageUrl
            - outputSrcDoc
          updateBody: false
          bodyTokens:
            - token: compute_risk_brakes.output
              field: output
            - token: compute_risk_brakes.imageUrl
              field: imageUrl
            - token: compute_risk_brakes.outputSrcDoc
              field: outputSrcDoc
      canvas:widgetCard:
        key: canvas:widgetCard
        type: object
        value:
          statusField: run_status
          previewField: output
          previewMaxChars: 110
          actions:
            - id: run
              label: Run
              icon: play
              primary: true
              trigger: compute
      flow:portTypes:
        key: flow:portTypes
        type: object
        value:
          in:
            input_alpha_hypothesis: template_text_signal
            input_signal_noise_threshold: template_number_signal
          out:
            output: template_text_signal
            imageUrl: template_image_signal
            outputSrcDoc: template_chart_html
      frontmatter:primitive:
        key: frontmatter:primitive
        type: string
        value: node
      output:
        key: output
        type: markdown
        value: ""
      imageUrl:
        key: imageUrl
        type: svg_data_uri
        value: ""
      outputSrcDoc:
        key: outputSrcDoc
        type: html_srcdoc
        value: ""
      run_status:
        key: run_status
        type: string
        value: idle
      kgc:readingSummary:
        key: kgc:readingSummary
        type: string
        value: Computes risk brakes and go/no-go guardrails for the shared Flow Editor run path.
      semanticKey:
        key: semanticKey
        type: string
        value: missalpha:compute:compute_risk_brakes
      template:nodeType:
        key: template:nodeType
        type: string
        value: compute
      compute:
        key: compute
        type: string
        value: |-
          inputs => {
            const read = key => String(inputs?.[key] ?? "").trim()
            const readNumber = (key, fallback) => {
              const parsed = Number(inputs?.[key])
              return Number.isFinite(parsed) ? parsed : fallback
            }
            const clamp = (value, min, max) => Math.max(min, Math.min(max, value))
            const escapeHtml = value => String(value || "").replace(/[&<>"']/g, ch => {
              if (ch === "&") return "&amp;"
              if (ch === "<") return "&lt;"
              if (ch === ">") return "&gt;"
              if (ch.charCodeAt(0) === 34) return "&quot;"
              return "&#39;"
            })
            const signalNoise = clamp(readNumber("input_signal_noise_threshold", 0.62), 0, 1)
            const confidence = Math.round((58 + signalNoise * 28) * 10) / 10
            const portfolio = read("input_portfolio") || "80% BTC / 20% gold"
            const hypothesis = read("input_alpha_hypothesis") || "BTC-gold skew convergence may be underpriced."
            const catalysts = read("input_macro_catalysts") || "macro catalysts and ETF flow persistence"
            const benchmark = read("input_consensus_benchmark") || "consensus benchmark unavailable"
            const decision = confidence >= 75 ? "GO" : confidence >= 60 ? "CONDITIONAL GO" : "NO-GO"
            const output = [
              "## " + decision + ": Risk brake map",
              "",
              "### Computes risk brakes and go/no-go guardrails for the shared Flow Editor run path.",
              "- Portfolio: " + portfolio,
              "- Horizon: " + (read("input_horizon") || "12 to 36 months"),
              "- Metric: " + (read("input_metric_label") || "missing alpha score") + " " + confidence + "/100",
              "- Hypothesis: " + hypothesis,
              "- Catalysts: " + catalysts,
              "- Consensus benchmark: " + benchmark,
              "",
              "### Decision Logic",
              "The graph keeps source factors connected to typed ports, then separates signal quality from narrative confidence. The resulting stance is intentionally neutral: escalate the overlay only when factor agreement and signal quality both clear the threshold.",
              "",
              "### Risk Brakes",
              "Cut the overlay when the score falls below 40, when macro catalysts stop confirming the skew path, or when the consensus benchmark becomes better supported by source evidence."
            ].join("\n")
            const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="720" height="360" viewBox="0 0 720 360"><rect width="720" height="360" fill="#0f172a"/><text x="36" y="56" fill="#e2e8f0" font-size="28" font-family="Arial">Risk brake map</text><rect x="36" y="96" width="648" height="42" rx="6" fill="#1e293b"/><rect x="36" y="96" width="' + Math.round(648 * confidence / 100) + '" height="42" rx="6" fill="#22c55e"/><text x="36" y="180" fill="#cbd5e1" font-size="18" font-family="Arial">Score: ' + confidence + '/100</text><text x="36" y="220" fill="#cbd5e1" font-size="18" font-family="Arial">' + escapeHtml(portfolio) + '</text><text x="36" y="260" fill="#94a3b8" font-size="16" font-family="Arial">Shared cards, typed ports, rich media panels, and edges render this source.</text></svg>'
            const imageUrl = "data:image/svg+xml;utf8," + encodeURIComponent(svg)
            const outputSrcDoc = '<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Inter,Arial,sans-serif;margin:0;padding:24px;background:#f8fafc;color:#0f172a}.bar{height:16px;background:#22c55e;width:' + confidence + '%;max-width:100%;border-radius:4px}.panel{border:1px solid #cbd5e1;border-radius:8px;padding:16px;background:white}</style></head><body><div class="panel"><h1>Risk brake map</h1><div class="bar"></div><p>Score: ' + confidence + '/100</p><p>' + escapeHtml(hypothesis) + '</p></div></body></html>'
            return { output, imageUrl, outputSrcDoc }
          }
    - id:
        key: id
        type: string
        value: panel_text_output
      type:
        key: type
        type: string
        value: RichMediaPanel
      label:
        key: label
        type: string
        value: Rich Media Text Output
      position:
        key: position
        type: object
        value:
          x: 1180
          "y": -80
      handles:
        key: handles
        type: object
        value:
          target:
            - output
      frontmatter:primitive:
        key: frontmatter:primitive
        type: string
        value: node
      kgc:readingSummary:
        key: kgc:readingSummary
        type: string
        value: Markdown panel connected to compute_summary.output for shared cards and widgets.
      semanticKey:
        key: semanticKey
        type: string
        value: missalpha:panel:panel_text_output
      template:nodeType:
        key: template:nodeType
        type: string
        value: rich-media-panel
      flow:portTypes:
        key: flow:portTypes
        type: object
        value:
          in:
            output: template_text_signal
    - id:
        key: id
        type: string
        value: panel_image_output
      type:
        key: type
        type: string
        value: RichMediaPanel
      label:
        key: label
        type: string
        value: Rich Media Image Output
      position:
        key: position
        type: object
        value:
          x: 1180
          "y": 100
      handles:
        key: handles
        type: object
        value:
          target:
            - imageUrl
      frontmatter:primitive:
        key: frontmatter:primitive
        type: string
        value: node
      kgc:readingSummary:
        key: kgc:readingSummary
        type: string
        value: Image panel connected to compute_summary.imageUrl for shared rich media rendering.
      semanticKey:
        key: semanticKey
        type: string
        value: missalpha:panel:panel_image_output
      template:nodeType:
        key: template:nodeType
        type: string
        value: rich-media-panel
      flow:portTypes:
        key: flow:portTypes
        type: object
        value:
          in:
            imageUrl: template_image_signal
    - id:
        key: id
        type: string
        value: panel_alpha_map
      type:
        key: type
        type: string
        value: RichMediaPanel
      label:
        key: label
        type: string
        value: Rich Media Alpha Map
      position:
        key: position
        type: object
        value:
          x: 1180
          "y": 280
      handles:
        key: handles
        type: object
        value:
          target:
            - outputSrcDoc
      frontmatter:primitive:
        key: frontmatter:primitive
        type: string
        value: node
      kgc:readingSummary:
        key: kgc:readingSummary
        type: string
        value: Rich media knowledge-graph canvas panel connected to outputSrcDoc for the shared renderer contract.
      semanticKey:
        key: semanticKey
        type: string
        value: missalpha:panel:panel_alpha_map
      template:nodeType:
        key: template:nodeType
        type: string
        value: rich-media-panel
      flow:portTypes:
        key: flow:portTypes
        type: object
        value:
          in:
            outputSrcDoc: template_chart_html
  edges:
    - id:
        key: id
        type: string
        value: edge_source_compute_summary_input_horizon
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_horizon
      target:
        key: target
        type: string
        value: compute_summary
      targetHandle:
        key: targetHandle
        type: string
        value: input_horizon
      label:
        key: label
        type: string
        value: input_horizon
      type:
        key: type
        type: string
        value: template_text_signal
    - id:
        key: id
        type: string
        value: edge_source_compute_summary_input_portfolio
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_portfolio
      target:
        key: target
        type: string
        value: compute_summary
      targetHandle:
        key: targetHandle
        type: string
        value: input_portfolio
      label:
        key: label
        type: string
        value: input_portfolio
      type:
        key: type
        type: string
        value: template_text_signal
    - id:
        key: id
        type: string
        value: edge_source_compute_summary_input_factor_spec
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_factor_spec
      target:
        key: target
        type: string
        value: compute_summary
      targetHandle:
        key: targetHandle
        type: string
        value: input_factor_spec
      label:
        key: label
        type: string
        value: input_factor_spec
      type:
        key: type
        type: string
        value: template_text_signal
    - id:
        key: id
        type: string
        value: edge_source_compute_summary_input_skew_pair
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_skew_pair
      target:
        key: target
        type: string
        value: compute_summary
      targetHandle:
        key: targetHandle
        type: string
        value: input_skew_pair
      label:
        key: label
        type: string
        value: input_skew_pair
      type:
        key: type
        type: string
        value: template_text_signal
    - id:
        key: id
        type: string
        value: edge_source_compute_summary_input_macro_catalysts
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_macro_catalysts
      target:
        key: target
        type: string
        value: compute_summary
      targetHandle:
        key: targetHandle
        type: string
        value: input_macro_catalysts
      label:
        key: label
        type: string
        value: input_macro_catalysts
      type:
        key: type
        type: string
        value: template_text_signal
    - id:
        key: id
        type: string
        value: edge_source_compute_summary_input_alpha_hypothesis
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_alpha_hypothesis
      target:
        key: target
        type: string
        value: compute_summary
      targetHandle:
        key: targetHandle
        type: string
        value: input_alpha_hypothesis
      label:
        key: label
        type: string
        value: input_alpha_hypothesis
      type:
        key: type
        type: string
        value: template_text_signal
    - id:
        key: id
        type: string
        value: edge_source_compute_summary_input_coverage_scope
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_coverage_scope
      target:
        key: target
        type: string
        value: compute_summary
      targetHandle:
        key: targetHandle
        type: string
        value: input_coverage_scope
      label:
        key: label
        type: string
        value: input_coverage_scope
      type:
        key: type
        type: string
        value: template_text_signal
    - id:
        key: id
        type: string
        value: edge_source_compute_summary_input_signal_noise_threshold
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_signal_noise_threshold
      target:
        key: target
        type: string
        value: compute_summary
      targetHandle:
        key: targetHandle
        type: string
        value: input_signal_noise_threshold
      label:
        key: label
        type: string
        value: input_signal_noise_threshold
      type:
        key: type
        type: string
        value: template_number_signal
    - id:
        key: id
        type: string
        value: edge_source_compute_summary_input_graph_topology_mode
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_graph_topology_mode
      target:
        key: target
        type: string
        value: compute_summary
      targetHandle:
        key: targetHandle
        type: string
        value: input_graph_topology_mode
      label:
        key: label
        type: string
        value: input_graph_topology_mode
      type:
        key: type
        type: string
        value: template_text_signal
    - id:
        key: id
        type: string
        value: edge_source_compute_summary_input_consensus_benchmark
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_consensus_benchmark
      target:
        key: target
        type: string
        value: compute_summary
      targetHandle:
        key: targetHandle
        type: string
        value: input_consensus_benchmark
      label:
        key: label
        type: string
        value: input_consensus_benchmark
      type:
        key: type
        type: string
        value: template_text_signal
    - id:
        key: id
        type: string
        value: edge_source_compute_summary_input_audience
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_audience
      target:
        key: target
        type: string
        value: compute_summary
      targetHandle:
        key: targetHandle
        type: string
        value: input_audience
      label:
        key: label
        type: string
        value: input_audience
      type:
        key: type
        type: string
        value: template_text_signal
    - id:
        key: id
        type: string
        value: edge_source_compute_summary_input_constraints
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_constraints
      target:
        key: target
        type: string
        value: compute_summary
      targetHandle:
        key: targetHandle
        type: string
        value: input_constraints
      label:
        key: label
        type: string
        value: input_constraints
      type:
        key: type
        type: string
        value: template_text_signal
    - id:
        key: id
        type: string
        value: edge_source_compute_summary_input_tone
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_tone
      target:
        key: target
        type: string
        value: compute_summary
      targetHandle:
        key: targetHandle
        type: string
        value: input_tone
      label:
        key: label
        type: string
        value: input_tone
      type:
        key: type
        type: string
        value: template_text_signal
    - id:
        key: id
        type: string
        value: edge_source_compute_summary_input_metric_label
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_metric_label
      target:
        key: target
        type: string
        value: compute_summary
      targetHandle:
        key: targetHandle
        type: string
        value: input_metric_label
      label:
        key: label
        type: string
        value: input_metric_label
      type:
        key: type
        type: string
        value: template_text_signal
    - id:
        key: id
        type: string
        value: edge_source_compute_flow_spot_hypothesis
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_alpha_hypothesis
      target:
        key: target
        type: string
        value: compute_flow_spot
      targetHandle:
        key: targetHandle
        type: string
        value: input_alpha_hypothesis
      label:
        key: label
        type: string
        value: input_alpha_hypothesis
      type:
        key: type
        type: string
        value: template_text_signal
    - id:
        key: id
        type: string
        value: edge_source_compute_flow_spot_threshold
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_signal_noise_threshold
      target:
        key: target
        type: string
        value: compute_flow_spot
      targetHandle:
        key: targetHandle
        type: string
        value: input_signal_noise_threshold
      label:
        key: label
        type: string
        value: input_signal_noise_threshold
      type:
        key: type
        type: string
        value: template_number_signal
    - id:
        key: id
        type: string
        value: edge_source_compute_skew_convergence_hypothesis
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_alpha_hypothesis
      target:
        key: target
        type: string
        value: compute_skew_convergence
      targetHandle:
        key: targetHandle
        type: string
        value: input_alpha_hypothesis
      label:
        key: label
        type: string
        value: input_alpha_hypothesis
      type:
        key: type
        type: string
        value: template_text_signal
    - id:
        key: id
        type: string
        value: edge_source_compute_skew_convergence_threshold
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_signal_noise_threshold
      target:
        key: target
        type: string
        value: compute_skew_convergence
      targetHandle:
        key: targetHandle
        type: string
        value: input_signal_noise_threshold
      label:
        key: label
        type: string
        value: input_signal_noise_threshold
      type:
        key: type
        type: string
        value: template_number_signal
    - id:
        key: id
        type: string
        value: edge_source_compute_macro_mispricing_hypothesis
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_alpha_hypothesis
      target:
        key: target
        type: string
        value: compute_macro_mispricing
      targetHandle:
        key: targetHandle
        type: string
        value: input_alpha_hypothesis
      label:
        key: label
        type: string
        value: input_alpha_hypothesis
      type:
        key: type
        type: string
        value: template_text_signal
    - id:
        key: id
        type: string
        value: edge_source_compute_macro_mispricing_threshold
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_signal_noise_threshold
      target:
        key: target
        type: string
        value: compute_macro_mispricing
      targetHandle:
        key: targetHandle
        type: string
        value: input_signal_noise_threshold
      label:
        key: label
        type: string
        value: input_signal_noise_threshold
      type:
        key: type
        type: string
        value: template_number_signal
    - id:
        key: id
        type: string
        value: edge_source_compute_adoption_regime_hypothesis
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_alpha_hypothesis
      target:
        key: target
        type: string
        value: compute_adoption_regime
      targetHandle:
        key: targetHandle
        type: string
        value: input_alpha_hypothesis
      label:
        key: label
        type: string
        value: input_alpha_hypothesis
      type:
        key: type
        type: string
        value: template_text_signal
    - id:
        key: id
        type: string
        value: edge_source_compute_adoption_regime_threshold
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_signal_noise_threshold
      target:
        key: target
        type: string
        value: compute_adoption_regime
      targetHandle:
        key: targetHandle
        type: string
        value: input_signal_noise_threshold
      label:
        key: label
        type: string
        value: input_signal_noise_threshold
      type:
        key: type
        type: string
        value: template_number_signal
    - id:
        key: id
        type: string
        value: edge_source_compute_risk_brakes_hypothesis
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_alpha_hypothesis
      target:
        key: target
        type: string
        value: compute_risk_brakes
      targetHandle:
        key: targetHandle
        type: string
        value: input_alpha_hypothesis
      label:
        key: label
        type: string
        value: input_alpha_hypothesis
      type:
        key: type
        type: string
        value: template_text_signal
    - id:
        key: id
        type: string
        value: edge_source_compute_risk_brakes_threshold
      source:
        key: source
        type: string
        value: source_input
      sourceHandle:
        key: sourceHandle
        type: string
        value: input_signal_noise_threshold
      target:
        key: target
        type: string
        value: compute_risk_brakes
      targetHandle:
        key: targetHandle
        type: string
        value: input_signal_noise_threshold
      label:
        key: label
        type: string
        value: input_signal_noise_threshold
      type:
        key: type
        type: string
        value: template_number_signal
    - id:
        key: id
        type: string
        value: edge_summary_text_panel
      source:
        key: source
        type: string
        value: compute_summary
      sourceHandle:
        key: sourceHandle
        type: string
        value: output
      target:
        key: target
        type: string
        value: panel_text_output
      targetHandle:
        key: targetHandle
        type: string
        value: output
      label:
        key: label
        type: string
        value: output
      type:
        key: type
        type: string
        value: template_text_signal
    - id:
        key: id
        type: string
        value: edge_summary_image_panel
      source:
        key: source
        type: string
        value: compute_summary
      sourceHandle:
        key: sourceHandle
        type: string
        value: imageUrl
      target:
        key: target
        type: string
        value: panel_image_output
      targetHandle:
        key: targetHandle
        type: string
        value: imageUrl
      label:
        key: label
        type: string
        value: imageUrl
      type:
        key: type
        type: string
        value: template_image_signal
    - id:
        key: id
        type: string
        value: edge_summary_alpha_map_panel
      source:
        key: source
        type: string
        value: compute_summary
      sourceHandle:
        key: sourceHandle
        type: string
        value: outputSrcDoc
      target:
        key: target
        type: string
        value: panel_alpha_map
      targetHandle:
        key: targetHandle
        type: string
        value: outputSrcDoc
      label:
        key: label
        type: string
        value: outputSrcDoc
      type:
        key: type
        type: string
        value: template_chart_html
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
---

## Response

{{compute_summary.output}}

## Inputs

- Horizon: {{source_input.input_horizon}}
- Portfolio: {{source_input.input_portfolio}}
- Factor spec: {{source_input.input_factor_spec}}
- Skew pair: {{source_input.input_skew_pair}}
- Macro catalysts: {{source_input.input_macro_catalysts}}
- Alpha hypothesis: {{source_input.input_alpha_hypothesis}}
- Coverage scope: {{source_input.input_coverage_scope}}
- Signal/noise threshold: {{source_input.input_signal_noise_threshold}}
- Graph topology mode: {{source_input.input_graph_topology_mode}}
- Consensus benchmark: {{source_input.input_consensus_benchmark}}
- Audience: {{source_input.input_audience}}
- Constraints: {{source_input.input_constraints}}
- Tone: {{source_input.input_tone}}
- Metric label: {{source_input.input_metric_label}}

## Rich Media

![MissAlpha score]({{compute_summary.imageUrl}})

{{compute_summary.outputSrcDoc}}
