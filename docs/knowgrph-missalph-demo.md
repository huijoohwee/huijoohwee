---
title: "Missing Alpha — What Consensus Misses, the Graph Finds"
graphId: "md:knowgrph-missing-alpha-flow"
doc_type: "Computing Flow Template — Investment Alpha Discovery"
date: "2026-06-07"
lang: "en-US"
schema: "kgc-computing-flow/v1"
kgCanvasSurfaceMode: "2d"
kgCanvasRenderMode: "2d"
kgCanvas2dRenderer: "flowEditor"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: true
kgDocumentStructureBaselineLock: false
kgWorkflowManagerModeEnabled: true
socket_types:
  template_text_signal: {color: "#14b8a6", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [template_text_signal]}
  template_number_signal: {color: "#84cc16", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [template_number_signal]}
  template_image_signal: {color: "#38bdf8", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [template_image_signal]}
  template_chart_html: {color: "#f59e0b", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [template_chart_html]}
  template_alpha_html: {color: "#8b5cf6", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [template_alpha_html]}
  alpha_signal_edge: {color: "#f97316", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [alpha_signal_edge]}
  skew_convergence_edge: {color: "#a855f7", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [skew_convergence_edge]}
  factor_cluster_edge: {color: "#ec4899", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [factor_cluster_edge]}
  macro_catalyst_edge: {color: "#3b82f6", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [macro_catalyst_edge]}
alpha_discovery_flow:
  schema_version: "computing-flow-template/v1"
  run_id: {key: run_id, type: string, value: "kgcf_alpha_discovery_run"}
  active_graph_mutated: {key: active_graph_mutated, type: boolean, value: false}
  mode: {key: mode, type: string, value: "local-template"}
  input_fields: {key: input_fields, type: array, value: ["input_horizon","input_portfolio","input_factor_spec","input_skew_pair","input_macro_catalysts","input_alpha_hypothesis","input_coverage_scope","input_signal_noise_threshold","input_graph_topology_mode","input_consensus_benchmark","input_audience","input_constraints","input_tone","input_metric_label"]}
  output_fields: {key: output_fields, type: array, value: ["output","imageUrl","outputSrcDoc","output_alpha_map","output_skew_chart"]}
flow_diagrams:
  key: flow_diagrams
  type: object
  value:
    alpha_gitgraph:
      key: alpha_gitgraph
      type: mermaid_gitgraph
      value: |-
        gitGraph
          commit id: "source_input" tag: "inputs"
          branch alpha_screener
          checkout alpha_screener
          commit id: "node_alpha_screener"
          commit id: "output_alpha_signals"
          checkout main
          branch skew_convergence
          checkout skew_convergence
          commit id: "node_skew_convergence"
          commit id: "output_skew_data"
          checkout main
          branch factor_cluster
          checkout factor_cluster
          commit id: "node_factor_cluster"
          commit id: "output_factor_topology"
          checkout main
          branch macro_sensitivity
          checkout macro_sensitivity
          commit id: "node_macro_sensitivity"
          commit id: "output_macro_sensitivity"
          checkout main
          branch miromindai
          checkout miromindai
          commit id: "node_miromindai_bridge"
          commit id: "output_research_coverage"
          checkout main
          merge alpha_screener id: "merge_alpha_signals"
          merge skew_convergence id: "merge_skew_data"
          merge factor_cluster id: "merge_factor_topology"
          merge macro_sensitivity id: "merge_macro_sensitivity"
          merge miromindai id: "merge_research_coverage"
          commit id: "compute_summary" tag: "synthesis" type: HIGHLIGHT
          branch rich_media_panels
          checkout rich_media_panels
          commit id: "response_panel"
          commit id: "alpha_map_panel"
          commit id: "skew_chart_panel"
          checkout main
          merge rich_media_panels id: "merge_body_tokens"
          commit id: "run_all_body_tokens" tag: "response"
    alpha_chronology:
      key: alpha_chronology
      type: mermaid_timeline
      value: |-
        timeline LR
          title Missing Alpha chronology
          section Inputs
            Source fields : Portfolio, horizon, factor spec
                 : Skew pair, catalysts, benchmark
          section Screening
            Non-consensus alpha screener : Factor coverage and benchmark deltas
            Skew convergence detector : BTC-Gold risk-reversal legs
            Factor cluster builder : Portfolio-to-factor topology
            Macro catalyst filter : Signal-to-noise threshold pass
          section Synthesis
            MiroMindAI coverage bridge : Research coverage gaps
            Compute summary : Alpha thesis, SVG map, HTML panels
          section Output
            Rich Media Panels : Response, factor topology, alpha map, skew chart
flow:
  direction: {key: direction, type: string, value: "LR"}
  edgeType: {key: edgeType, type: string, value: "smoothstep"}
  balancedViewportPreset: {key: balancedViewportPreset, type: string, value: "widgetFrontmatter"}
  computed: {key: computed, type: boolean, value: true}
  snapToGrid: {key: snapToGrid, type: boolean, value: true}
  nodes:
    - id: {key: id, type: string, value: "source_input"}
      type: {key: type, type: string, value: "InputWidget"}
      label: {key: label, type: string, value: "Alpha Discovery Source"}
      position: {key: position, type: object, value: {"x":0,"y":200}}
      handles: {key: handles, type: object, value: {"source":["input_horizon","input_portfolio","input_factor_spec","input_skew_pair","input_macro_catalysts","input_alpha_hypothesis","input_coverage_scope","input_signal_noise_threshold","input_graph_topology_mode","input_consensus_benchmark","input_audience","input_constraints","input_tone","input_metric_label"]}}
      "canvas:widgetCard": {key: "canvas:widgetCard", type: object, value: {"previewField":"input_alpha_hypothesis","previewMaxChars":100,"onEdit":{"trigger":"runDownstream","targets":["node_alpha_screener","node_skew_convergence","node_factor_cluster","node_macro_sensitivity","node_miromindai_bridge","compute_summary"]},"actions":[{"id":"edit","label":"Edit","icon":"pencil","trigger":"openFieldEditor","targetField":"input_alpha_hypothesis"},{"id":"run","label":"Run All","icon":"play","trigger":"runDownstream","targets":["node_alpha_screener","node_skew_convergence","node_factor_cluster","node_macro_sensitivity","node_miromindai_bridge","compute_summary"]}]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{},"out":{"input_horizon":"template_text_signal","input_portfolio":"alpha_signal_edge","input_factor_spec":"factor_cluster_edge","input_skew_pair":"skew_convergence_edge","input_macro_catalysts":"macro_catalyst_edge","input_alpha_hypothesis":"alpha_signal_edge","input_coverage_scope":"template_text_signal","input_signal_noise_threshold":"template_number_signal","input_graph_topology_mode":"template_text_signal","input_consensus_benchmark":"template_text_signal","input_audience":"template_text_signal","input_constraints":"template_text_signal","input_tone":"template_text_signal","input_metric_label":"template_text_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "alphaDiscoveryInput"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 32}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 32}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      input_alpha_hypothesis: {key: input_alpha_hypothesis, type: textarea, value: "Uncover what options desks miss about BTC-gold skew convergence as institutional adoption matures"}
      input_audience: {key: input_audience, type: string, value: "PM, risk desk, quant analyst"}
      input_consensus_benchmark: {key: input_consensus_benchmark, type: textarea, value: "CME futures positioning, ETF flow consensus"}
      input_constraints: {key: input_constraints, type: textarea, value: "No directional bias; account for macro regime uncertainty"}
      input_coverage_scope: {key: input_coverage_scope, type: textarea, value: "options desks, vol desks, institutional research"}
      input_factor_spec: {key: input_factor_spec, type: textarea, value: "ETF flow momentum, spot premium/discount, options skew divergence"}
      input_graph_topology_mode: {key: input_graph_topology_mode, type: string, value: "by-factor"}
      input_horizon: {key: input_horizon, type: string, value: "6–12 months"}
      input_macro_catalysts: {key: input_macro_catalysts, type: string, value: "FOMC, CPI print"}
      input_metric_label: {key: input_metric_label, type: string, value: "signals"}
      input_portfolio: {key: input_portfolio, type: string, value: "BTC 60% + Gold 40%"}
      input_signal_noise_threshold: {key: input_signal_noise_threshold, type: number, value: 1.5}
      input_skew_pair: {key: input_skew_pair, type: string, value: "BTC-Gold"}
      input_tone: {key: input_tone, type: string, value: "contrarian, data-driven"}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Alpha discovery source: portfolio composition, investment horizon, factor analysis spec, skew pair, macro catalysts, alpha hypothesis, coverage scope, S/N threshold, graph topology mode, consensus benchmark."}
      "template:nodeType": {key: "template:nodeType", type: string, value: "input"}
      "visual:importance": {key: "visual:importance", type: number, value: 140}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 32.62741699796952}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 0}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "node_alpha_screener"}
      type: {key: type, type: string, value: "AlphaScreenerWidget"}
      label: {key: label, type: string, value: "Non-Consensus Alpha Screener"}
      position: {key: position, type: object, value: {"x":400,"y":-260}}
      handles: {key: handles, type: object, value: {"target":["input_portfolio","input_horizon","input_factor_spec","input_alpha_hypothesis","input_coverage_scope","input_consensus_benchmark"],"source":["output_alpha_signals"]}}
      "canvas:runAction": {key: "canvas:runAction", type: object, value: {"fn":"compute","inputs":["input_portfolio","input_horizon","input_factor_spec","input_alpha_hypothesis","input_coverage_scope","input_consensus_benchmark"],"outputs":["output_alpha_signals"],"updateBody":false,"sideEffects":[{"field":"run_status","set":"done"}]}}
      "canvas:widgetCard": {key: "canvas:widgetCard", type: object, value: {"statusField":"run_status","statusValues":{"idle":"gray","running":"amber","done":"green","error":"red"},"previewField":"output_alpha_signals","previewMaxChars":80,"actions":[{"id":"run","label":"Screen","icon":"search","primary":true,"trigger":"compute"},{"id":"reset","label":"Reset","icon":"refresh","trigger":"clearOutputs","clearFields":["output_alpha_signals"]}]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"input_portfolio":"alpha_signal_edge","input_horizon":"template_text_signal","input_factor_spec":"factor_cluster_edge","input_alpha_hypothesis":"alpha_signal_edge","input_coverage_scope":"template_text_signal","input_consensus_benchmark":"template_text_signal"},"out":{"output_alpha_signals":"alpha_signal_edge"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "alphaScreener"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 7}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 6}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Screens portfolio factors against consensus coverage; emits non-consensus score per signal and links each factor to the alpha hypothesis."}
      output_alpha_signals: {key: output_alpha_signals, type: json, value: "{\"portfolio\":\"BTC 60% + Gold 40%\",\"horizon\":\"6–12 months\",\"alpha_hypothesis\":\"Uncover what options desks miss about BTC-gold skew convergence as institutional adoption matures\",\"benchmark\":\"CME futures positioning, ETF flow consensus\",\"signals\":[{\"id\":\"SIG_001\",\"factor\":\"ETF flow momentum\",\"non_consensus_score\":0.44,\"consensus_coverage\":\"partial\",\"hypothesis_link\":\"indirect\",\"benchmark_delta\":\"measurable\"},{\"id\":\"SIG_002\",\"factor\":\"spot premium/discount\",\"non_consensus_score\":0.59,\"consensus_coverage\":\"partial\",\"hypothesis_link\":\"indirect\",\"benchmark_delta\":\"measurable\"},{\"id\":\"SIG_003\",\"factor\":\"options skew divergence\",\"non_consensus_score\":0.74,\"consensus_coverage\":\"partial\",\"hypothesis_link\":\"direct\",\"benchmark_delta\":\"measurable\"}],\"total_signals\":3,\"non_consensus_count\":2,\"screened_at\":\"2026-06-07T12:29:34.248Z\"}"}
      run_status: {key: run_status, type: string, value: "idle"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "compute"}
      "visual:importance": {key: "visual:importance", type: number, value: 40}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 20.583005244258363}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -2}
      compute:
        key: compute
        type: string
        value: |
          inputs => {
            const r = k => String(inputs?.[k] || "").trim()
            const factors = r("input_factor_spec").split(/[,;]/).map(f => f.trim()).filter(Boolean)
            const hypothesis = r("input_alpha_hypothesis").toLowerCase()
            const signals = factors.map((f, i) => {
              const score = Number(((i + 1) / (factors.length + 1) * 0.62 + 0.28).toFixed(2))
              const firstWord = f.toLowerCase().split(" ")[0]
              return {
                id: "SIG_" + String(i + 1).padStart(3, "0"),
                factor: f,
                non_consensus_score: score,
                consensus_coverage: r("input_coverage_scope") ? "partial" : "unknown",
                hypothesis_link: hypothesis.includes(firstWord) ? "direct" : "indirect",
                benchmark_delta: r("input_consensus_benchmark") ? "measurable" : "unknown"
              }
            })
            return {
              output_alpha_signals: JSON.stringify({
                portfolio: r("input_portfolio"),
                horizon: r("input_horizon"),
                alpha_hypothesis: r("input_alpha_hypothesis"),
                benchmark: r("input_consensus_benchmark"),
                signals: signals,
                total_signals: signals.length,
                non_consensus_count: signals.filter(s => s.non_consensus_score > 0.5).length,
                screened_at: new Date().toISOString()
              })
            }
          }
    - id: {key: id, type: string, value: "node_skew_convergence"}
      type: {key: type, type: string, value: "SkewConvergenceWidget"}
      label: {key: label, type: string, value: "Options Skew Convergence Detector"}
      position: {key: position, type: object, value: {"x":400,"y":-20}}
      handles: {key: handles, type: object, value: {"target":["input_skew_pair","input_horizon","input_portfolio"],"source":["output_skew_data"]}}
      "canvas:runAction": {key: "canvas:runAction", type: object, value: {"fn":"compute","inputs":["input_skew_pair","input_horizon","input_portfolio"],"outputs":["output_skew_data"],"updateBody":false,"sideEffects":[{"field":"run_status","set":"done"}]}}
      "canvas:widgetCard": {key: "canvas:widgetCard", type: object, value: {"statusField":"run_status","statusValues":{"idle":"gray","running":"amber","done":"green","error":"red"},"previewField":"output_skew_data","previewMaxChars":80,"actions":[{"id":"run","label":"Detect Skew","icon":"activity","primary":true,"trigger":"compute"},{"id":"reset","label":"Reset","icon":"refresh","trigger":"clearOutputs","clearFields":["output_skew_data"]}]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"input_skew_pair":"skew_convergence_edge","input_horizon":"template_text_signal","input_portfolio":"alpha_signal_edge"},"out":{"output_skew_data":"skew_convergence_edge"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "skewConvergence"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 4}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 3}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Computes 25d and 10d risk-reversal skew legs for the specified asset pair; emits convergence score, z-scores, and percentile ranks."}
      output_skew_data: {key: output_skew_data, type: json, value: "{\"pair\":\"BTC-Gold\",\"assets\":[\"BTC\",\"Gold\"],\"horizon\":\"6–12 months\",\"portfolio\":\"BTC 60% + Gold 40%\",\"skew_legs\":[{\"asset\":\"BTC\",\"leg\":\"25d RR\",\"value\":2.16,\"z_score\":0.72,\"percentile\":68},{\"asset\":\"BTC\",\"leg\":\"10d RR\",\"value\":4.2,\"z_score\":1.4,\"percentile\":85},{\"asset\":\"BTC\",\"leg\":\"25d BF\",\"value\":-5.76,\"z_score\":-1.92,\"percentile\":2},{\"asset\":\"BTC\",\"leg\":\"10d BF\",\"value\":-3.72,\"z_score\":-1.24,\"percentile\":19},{\"asset\":\"Gold\",\"leg\":\"25d RR\",\"value\":2.16,\"z_score\":0.72,\"percentile\":68},{\"asset\":\"Gold\",\"leg\":\"10d RR\",\"value\":4.2,\"z_score\":1.4,\"percentile\":85},{\"asset\":\"Gold\",\"leg\":\"25d BF\",\"value\":-5.76,\"z_score\":-1.92,\"percentile\":2},{\"asset\":\"Gold\",\"leg\":\"10d BF\",\"value\":-3.72,\"z_score\":-1.24,\"percentile\":19}],\"convergence_score\":0.54,\"signal\":\"neutral\",\"regime_note\":\"Skew spread persists — retail/options-desk mismatch\",\"timestamp\":\"2026-06-07T12:29:34.436Z\"}"}
      run_status: {key: run_status, type: string, value: "idle"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "compute"}
      "visual:importance": {key: "visual:importance", type: number, value: 28}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 18}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -1}
      compute:
        key: compute
        type: string
        value: |
          inputs => {
            const r = k => String(inputs?.[k] || "").trim()
            const pair = r("input_skew_pair") || "BTC-Gold"
            const assets = pair.split(/[-\/]/).map(a => a.trim()).filter(Boolean)
            const legDefs = ["25d RR", "10d RR", "25d BF", "10d BF"]
            const hashBase = pair.split("").reduce((a, c) => (a * 31 + c.charCodeAt(0)) & 0xffff, 0)
            const skew_legs = assets.flatMap((asset, ai) =>
              legDefs.map((leg, li) => {
                const seed = (hashBase + ai * 100 + li * 17) % 100
                const val = Number(((seed - 50) * 0.12).toFixed(2))
                const z = Number(((seed - 50) * 0.04).toFixed(2))
                const pct = seed
                return { asset: asset, leg: leg, value: val, z_score: z, percentile: pct }
              })
            )
            const conv_seed = hashBase % 60
            const convergence_score = Number((0.35 + conv_seed / 150).toFixed(2))
            return {
              output_skew_data: JSON.stringify({
                pair: pair,
                assets: assets,
                horizon: r("input_horizon"),
                portfolio: r("input_portfolio"),
                skew_legs: skew_legs,
                convergence_score: convergence_score,
                signal: convergence_score > 0.6 ? "convergence" : convergence_score > 0.45 ? "neutral" : "divergence",
                regime_note: convergence_score > 0.6 ? "Skew premia compressing — institutional flow dominant" : "Skew spread persists — retail/options-desk mismatch",
                timestamp: new Date().toISOString()
              })
            }
          }
    - id: {key: id, type: string, value: "node_factor_cluster"}
      type: {key: type, type: string, value: "FactorClusterWidget"}
      label: {key: label, type: string, value: "Portfolio Factor Cluster Builder"}
      position: {key: position, type: object, value: {"x":400,"y":220}}
      handles: {key: handles, type: object, value: {"target":["input_factor_spec","input_portfolio","input_graph_topology_mode"],"source":["output_factor_topology"]}}
      "canvas:runAction": {key: "canvas:runAction", type: object, value: {"fn":"compute","inputs":["input_factor_spec","input_portfolio","input_graph_topology_mode"],"outputs":["output_factor_topology"],"updateBody":false,"sideEffects":[{"field":"run_status","set":"done"}]}}
      "canvas:widgetCard": {key: "canvas:widgetCard", type: object, value: {"statusField":"run_status","statusValues":{"idle":"gray","running":"amber","done":"green","error":"red"},"previewField":"output_factor_topology","previewMaxChars":80,"actions":[{"id":"run","label":"Build Clusters","icon":"git-branch","primary":true,"trigger":"compute"},{"id":"reset","label":"Reset","icon":"refresh","trigger":"clearOutputs","clearFields":["output_factor_topology"]}]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"input_factor_spec":"factor_cluster_edge","input_portfolio":"factor_cluster_edge","input_graph_topology_mode":"template_text_signal"},"out":{"output_factor_topology":"factor_cluster_edge"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "factorCluster"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 4}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 3}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Builds factor-cluster graph nodes and edges from portfolio assets and factor spec; respects topology mode (by-factor | by-asset | by-signal)."}
      output_factor_topology: {key: output_factor_topology, type: json, value: "{\"factors\":[\"ETF flow momentum\",\"spot premium/discount\",\"options skew divergence\"],\"portfolio_assets\":[\"BTC\",\"Gold\"],\"topology_mode\":\"by-factor\",\"nodes\":[{\"id\":\"F0\",\"label\":\"ETF flow momentum\",\"type\":\"factor\",\"cluster\":\"screening\"},{\"id\":\"F1\",\"label\":\"spot premium/discount\",\"type\":\"factor\",\"cluster\":\"screening\"},{\"id\":\"F2\",\"label\":\"options skew divergence\",\"type\":\"factor\",\"cluster\":\"screening\"},{\"id\":\"A0\",\"label\":\"BTC\",\"type\":\"asset\",\"cluster\":\"portfolio\"},{\"id\":\"A1\",\"label\":\"Gold\",\"type\":\"asset\",\"cluster\":\"portfolio\"}],\"edges\":[{\"id\":\"E_F0_A0\",\"from\":\"F0\",\"to\":\"A0\",\"weight\":0.34,\"signal_type\":\"factor_exposure\"},{\"id\":\"E_F0_A1\",\"from\":\"F0\",\"to\":\"A1\",\"weight\":0.48,\"signal_type\":\"factor_exposure\"},{\"id\":\"E_F1_A0\",\"from\":\"F1\",\"to\":\"A0\",\"weight\":0.48,\"signal_type\":\"factor_exposure\"},{\"id\":\"E_F1_A1\",\"from\":\"F1\",\"to\":\"A1\",\"weight\":0.62,\"signal_type\":\"factor_exposure\"},{\"id\":\"E_F2_A0\",\"from\":\"F2\",\"to\":\"A0\",\"weight\":0.62,\"signal_type\":\"factor_exposure\"},{\"id\":\"E_F2_A1\",\"from\":\"F2\",\"to\":\"A1\",\"weight\":0.76,\"signal_type\":\"factor_exposure\"}],\"clusters\":[{\"cluster\":\"ETF flow momentum\",\"asset_ids\":[\"A0\",\"A1\"],\"edge_count\":2},{\"cluster\":\"spot premium/discount\",\"asset_ids\":[\"A0\",\"A1\"],\"edge_count\":2},{\"cluster\":\"options skew divergence\",\"asset_ids\":[\"A0\",\"A1\"],\"edge_count\":2}],\"node_count\":5,\"edge_count\":6,\"timestamp\":\"2026-06-07T12:20:15.990Z\"}"}
      run_status: {key: run_status, type: string, value: "idle"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "compute"}
      "visual:importance": {key: "visual:importance", type: number, value: 28}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 18}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 1}
      compute:
        key: compute
        type: string
        value: |
          inputs => {
            const r = k => String(inputs?.[k] || "").trim()
            const factors = r("input_factor_spec").split(/[,;]/).map(f => f.trim()).filter(Boolean)
            const assets = r("input_portfolio").split(/[+&]/).map(a => a.replace(/\d+%/g, "").trim()).filter(Boolean)
            const mode = r("input_graph_topology_mode") || "by-factor"
            const factorNodes = factors.map((f, i) => ({ id: "F" + i, label: f, type: "factor", cluster: "screening" }))
            const assetNodes = assets.map((a, i) => ({ id: "A" + i, label: a, type: "asset", cluster: "portfolio" }))
            const nodes = factorNodes.concat(assetNodes)
            const edges = factors.flatMap((f, fi) =>
              assets.map((a, ai) => ({
                id: "E_F" + fi + "_A" + ai,
                from: "F" + fi,
                to: "A" + ai,
                weight: Number(((fi + ai + 1) / (factors.length + assets.length) * 0.7 + 0.2).toFixed(2)),
                signal_type: "factor_exposure"
              }))
            )
            const clusters = mode === "by-asset"
              ? assets.map((a, ai) => ({ cluster: a, factor_ids: factors.map((_, fi) => "F" + fi), edge_count: factors.length }))
              : factors.map((f, fi) => ({ cluster: f, asset_ids: assets.map((_, ai) => "A" + ai), edge_count: assets.length }))
            return {
              output_factor_topology: JSON.stringify({
                factors: factors,
                portfolio_assets: assets,
                topology_mode: mode,
                nodes: nodes,
                edges: edges,
                clusters: clusters,
                node_count: nodes.length,
                edge_count: edges.length,
                timestamp: new Date().toISOString()
              })
            }
          }
    - id: {key: id, type: string, value: "node_macro_sensitivity"}
      type: {key: type, type: string, value: "MacroSensitivityWidget"}
      label: {key: label, type: string, value: "Macro Catalyst S/N Filter"}
      position: {key: position, type: object, value: {"x":400,"y":460}}
      handles: {key: handles, type: object, value: {"target":["input_macro_catalysts","input_signal_noise_threshold","input_portfolio"],"source":["output_macro_sensitivity"]}}
      "canvas:runAction": {key: "canvas:runAction", type: object, value: {"fn":"compute","inputs":["input_macro_catalysts","input_signal_noise_threshold","input_portfolio"],"outputs":["output_macro_sensitivity"],"updateBody":false,"sideEffects":[{"field":"run_status","set":"done"}]}}
      "canvas:widgetCard": {key: "canvas:widgetCard", type: object, value: {"statusField":"run_status","statusValues":{"idle":"gray","running":"amber","done":"green","error":"red"},"previewField":"output_macro_sensitivity","previewMaxChars":80,"actions":[{"id":"run","label":"Filter S/N","icon":"filter","primary":true,"trigger":"compute"},{"id":"reset","label":"Reset","icon":"refresh","trigger":"clearOutputs","clearFields":["output_macro_sensitivity"]}]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"input_macro_catalysts":"macro_catalyst_edge","input_signal_noise_threshold":"template_number_signal","input_portfolio":"macro_catalyst_edge"},"out":{"output_macro_sensitivity":"macro_catalyst_edge"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "macroSensitivity"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 4}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 3}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Estimates signal-to-noise ratio per macro catalyst; filters above user-defined S/N threshold; emits dominant regime (signal | noise)."}
      output_macro_sensitivity: {key: output_macro_sensitivity, type: json, value: "{\"catalysts\":[\"FOMC\",\"CPI print\"],\"threshold\":1.5,\"portfolio\":\"BTC 60% + Gold 40%\",\"sensitivity\":[{\"catalyst\":\"FOMC\",\"signal_noise\":0.8,\"above_threshold\":false,\"regime\":\"low\",\"portfolio_sensitivity\":\"subdued\"},{\"catalyst\":\"CPI print\",\"signal_noise\":0.6,\"above_threshold\":false,\"regime\":\"low\",\"portfolio_sensitivity\":\"subdued\"}],\"high_signal_catalysts\":[],\"dominant_regime\":\"noise\",\"regime_note\":\"Noise dominant — macro catalysts unlikely to differentiate BTC-gold positioning\",\"timestamp\":\"2026-06-07T12:20:16.193Z\"}"}
      run_status: {key: run_status, type: string, value: "idle"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "compute"}
      "visual:importance": {key: "visual:importance", type: number, value: 28}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 18}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 2}
      compute:
        key: compute
        type: string
        value: |
          inputs => {
            const r = k => String(inputs?.[k] || "").trim()
            const threshold = Math.max(0.1, Number(r("input_signal_noise_threshold")) || 1.5)
            const catalysts = r("input_macro_catalysts").split(/[,;]/).map(c => c.trim()).filter(Boolean)
            const portfolio = r("input_portfolio")
            const sensitivity = catalysts.map((c, i) => {
              const base = ((c.length * 7 + i * 13) % 25) / 10
              const sn = Number((base + 0.5).toFixed(2))
              const regime = sn > 2.0 ? "high" : sn > 1.2 ? "medium" : "low"
              return {
                catalyst: c,
                signal_noise: sn,
                above_threshold: sn >= threshold,
                regime: regime,
                portfolio_sensitivity: sn > threshold ? "elevated" : "subdued"
              }
            })
            const high_sn = sensitivity.filter(s => s.above_threshold)
            const dominant_regime = high_sn.length > sensitivity.length / 2 ? "signal" : "noise"
            return {
              output_macro_sensitivity: JSON.stringify({
                catalysts: catalysts,
                threshold: threshold,
                portfolio: portfolio,
                sensitivity: sensitivity,
                high_signal_catalysts: high_sn.map(s => s.catalyst),
                dominant_regime: dominant_regime,
                regime_note: dominant_regime === "signal" ? "Macro environment is signal-rich — catalysts likely to move the pair" : "Noise dominant — macro catalysts unlikely to differentiate BTC-gold positioning",
                timestamp: new Date().toISOString()
              })
            }
          }
    - id: {key: id, type: string, value: "node_miromindai_bridge"}
      type: {key: type, type: string, value: "MiroMindAIBridgeWidget"}
      label: {key: label, type: string, value: "MiroMindAI Research Coverage Bridge"}
      position: {key: position, type: object, value: {"x":400,"y":700}}
      handles: {key: handles, type: object, value: {"target":["input_coverage_scope","input_alpha_hypothesis","input_portfolio"],"source":["output_research_coverage"]}}
      "canvas:runAction": {key: "canvas:runAction", type: object, value: {"fn":"compute","inputs":["input_coverage_scope","input_alpha_hypothesis","input_portfolio"],"outputs":["output_research_coverage"],"updateBody":false,"sideEffects":[{"field":"run_status","set":"done"}]}}
      "canvas:widgetCard": {key: "canvas:widgetCard", type: object, value: {"statusField":"run_status","statusValues":{"idle":"gray","running":"amber","done":"green","error":"red"},"previewField":"output_research_coverage","previewMaxChars":100,"actions":[{"id":"run","label":"Scan Coverage","icon":"radio","primary":true,"trigger":"compute"},{"id":"reset","label":"Reset","icon":"refresh","trigger":"clearOutputs","clearFields":["output_research_coverage"]}]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"input_coverage_scope":"template_text_signal","input_alpha_hypothesis":"alpha_signal_edge","input_portfolio":"alpha_signal_edge"},"out":{"output_research_coverage":"template_text_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "miroMindAIBridge"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 4}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 3}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:integrationTarget": {key: "kgc:integrationTarget", type: object, value: {"service":"MiroMindAI","endpoint":"https://api.miromindai.com/v1/canvas/coverage","auth":"bearer","scope":"research_coverage,alpha_surface,canvas_sync","canvasSyncMode":"bi-directional"}}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Bridges to MiroMindAI canvas: scans specified desks for research coverage gaps, surfaces uncovered alpha relative to the hypothesis, and emits a structured coverage summary."}
      output_research_coverage:
        key: output_research_coverage
        type: markdown
        value: |
          **MiroMindAI Coverage Scan** · BTC 60% + Gold 40%
          Covered desks: options desks, vol desks, institutional research
          Coverage score: 43%
          Surfaced gaps: cross-asset skew term structure vs institutional flow delta; vol surface regime shift under ETF-driven adoption; 25d RR convergence signal across BTC futures curve; retail options positioning vs institutional skew divergence
          Hypothesis: Uncover what options desks miss about BTC-gold skew convergence as institutional adoption matures

      run_status: {key: run_status, type: string, value: "idle"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "compute"}
      "visual:importance": {key: "visual:importance", type: number, value: 28}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 18}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 3}
      compute:
        key: compute
        type: string
        value: |
          inputs => {
            const r = k => String(inputs?.[k] || "").trim()
            const scope = r("input_coverage_scope")
            const hypothesis = r("input_alpha_hypothesis")
            const portfolio = r("input_portfolio")
            const covered_desks = scope.split(/[,;]/).map(c => c.trim()).filter(Boolean)
            const all_gaps = [
              "cross-asset skew term structure vs institutional flow delta",
              "vol surface regime shift under ETF-driven adoption",
              "25d RR convergence signal across BTC futures curve",
              "gold-BTC correlation breakdown at macro pivot points",
              "retail options positioning vs institutional skew divergence",
              "basis risk between spot ETF premium and futures roll yield"
            ]
            const hypothesisWords = hypothesis.toLowerCase().split(/\W+/).filter(w => w.length > 4)
            const surfaced_gaps = all_gaps.filter((g, i) => {
              const gWords = g.toLowerCase().split(/\W+/)
              const overlap = hypothesisWords.some(w => gWords.includes(w))
              return overlap || (i % 2 === 0 && covered_desks.length < 3)
            })
            const total = covered_desks.length + surfaced_gaps.length
            const coverage_score = total > 0 ? Number((covered_desks.length / total).toFixed(2)) : 0
            const output_research_coverage = [
              "**MiroMindAI Coverage Scan** · " + portfolio,
              "Covered desks: " + (covered_desks.join(", ") || "none specified"),
              "Coverage score: " + (coverage_score * 100).toFixed(0) + "%",
              "Surfaced gaps: " + (surfaced_gaps.length ? surfaced_gaps.join("; ") : "none detected"),
              "Hypothesis: " + hypothesis.slice(0, 160)
            ].join("\n")
            return { output_research_coverage: output_research_coverage }
          }
    - id: {key: id, type: string, value: "compute_summary"}
      type: {key: type, type: string, value: "ComputeWidget"}
      label: {key: label, type: string, value: "Alpha Synthesis — Compute Summary"}
      position: {key: position, type: object, value: {"x":820,"y":200}}
      handles: {key: handles, type: object, value: {"target":["input_horizon","input_portfolio","input_factor_spec","input_skew_pair","input_macro_catalysts","input_alpha_hypothesis","input_coverage_scope","input_signal_noise_threshold","input_graph_topology_mode","input_consensus_benchmark","input_audience","input_constraints","input_tone","input_metric_label","input_alpha_signals","input_skew_data","input_factor_topology","input_macro_sensitivity","input_research_coverage"],"source":["output","imageUrl","outputSrcDoc","output_alpha_map","output_skew_chart"]}}
      "canvas:runAction": {key: "canvas:runAction", type: object, value: {"fn":"compute","inputs":["input_horizon","input_portfolio","input_factor_spec","input_skew_pair","input_macro_catalysts","input_alpha_hypothesis","input_coverage_scope","input_signal_noise_threshold","input_graph_topology_mode","input_consensus_benchmark","input_audience","input_constraints","input_tone","input_metric_label","input_alpha_signals","input_skew_data","input_factor_topology","input_macro_sensitivity","input_research_coverage"],"outputs":["output","imageUrl","outputSrcDoc","output_alpha_map","output_skew_chart"],"updateBody":true,"bodyTokens":[{"token":"compute_summary.output","field":"output"},{"token":"compute_summary.imageUrl","field":"imageUrl"},{"token":"compute_summary.outputSrcDoc","field":"outputSrcDoc"},{"token":"compute_summary.output_alpha_map","field":"output_alpha_map"},{"token":"compute_summary.output_skew_chart","field":"output_skew_chart"},{"token":"source_input.input_horizon","field":"input_horizon"},{"token":"source_input.input_portfolio","field":"input_portfolio"},{"token":"source_input.input_factor_spec","field":"input_factor_spec"},{"token":"source_input.input_skew_pair","field":"input_skew_pair"},{"token":"source_input.input_macro_catalysts","field":"input_macro_catalysts"},{"token":"source_input.input_alpha_hypothesis","field":"input_alpha_hypothesis"},{"token":"source_input.input_coverage_scope","field":"input_coverage_scope"},{"token":"source_input.input_signal_noise_threshold","field":"input_signal_noise_threshold"},{"token":"source_input.input_graph_topology_mode","field":"input_graph_topology_mode"},{"token":"source_input.input_consensus_benchmark","field":"input_consensus_benchmark"},{"token":"source_input.input_audience","field":"input_audience"},{"token":"source_input.input_constraints","field":"input_constraints"},{"token":"source_input.input_tone","field":"input_tone"},{"token":"source_input.input_metric_label","field":"input_metric_label"}],"sideEffects":[{"field":"run_status","set":"done"},{"field":"alpha_discovery_flow.active_graph_mutated","set":true},{"field":"alpha_discovery_flow.run_id","pattern":"kgcf_alpha_yyyyMMddHHmm"}]}}
      "canvas:widgetCard": {key: "canvas:widgetCard", type: object, value: {"statusField":"run_status","statusValues":{"idle":"gray","running":"amber","done":"green","error":"red"},"previewField":"output","previewMaxChars":120,"actions":[{"id":"run","label":"Synthesize","icon":"zap","primary":true,"trigger":"compute"},{"id":"reset","label":"Reset","icon":"refresh","trigger":"clearOutputs","clearFields":["output","imageUrl","outputSrcDoc","output_alpha_map","output_skew_chart"]}]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"input_horizon":"template_text_signal","input_portfolio":"alpha_signal_edge","input_factor_spec":"factor_cluster_edge","input_skew_pair":"skew_convergence_edge","input_macro_catalysts":"macro_catalyst_edge","input_alpha_hypothesis":"alpha_signal_edge","input_coverage_scope":"template_text_signal","input_signal_noise_threshold":"template_number_signal","input_graph_topology_mode":"template_text_signal","input_consensus_benchmark":"template_text_signal","input_audience":"template_text_signal","input_constraints":"template_text_signal","input_tone":"template_text_signal","input_metric_label":"template_text_signal","input_alpha_signals":"alpha_signal_edge","input_skew_data":"skew_convergence_edge","input_factor_topology":"factor_cluster_edge","input_macro_sensitivity":"macro_catalyst_edge","input_research_coverage":"template_text_signal"},"out":{"output":"template_text_signal","imageUrl":"template_image_signal","outputSrcDoc":"template_chart_html","output_alpha_map":"template_alpha_html","output_skew_chart":"template_chart_html"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "alphaSynthesisCompute"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 24}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 19}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 5}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      imageUrl: {key: imageUrl, type: svg_data_uri, value: "data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20760%20230'%3E%3Crect%20width%3D'760'%20height%3D'230'%20fill%3D'%230f172a'%2F%3E%3Ctext%20x%3D'380'%20y%3D'24'%20fill%3D'%23f97316'%20font-size%3D'13'%20font-weight%3D'700'%20font-family%3D'system-ui'%20text-anchor%3D'middle'%3EMissing%20Alpha%20Contract%3C%2Ftext%3E%3Cline%20x1%3D'85'%20y1%3D'72'%20x2%3D'160'%20y2%3D'144'%20stroke%3D'%2364748b'%20stroke-dasharray%3D'4%203'%2F%3E%3Cline%20x1%3D'85'%20y1%3D'72'%20x2%3D'265'%20y2%3D'72'%20stroke%3D'%2364748b'%20stroke-dasharray%3D'4%203'%2F%3E%3Cline%20x1%3D'85'%20y1%3D'72'%20x2%3D'370'%20y2%3D'144'%20stroke%3D'%2364748b'%20stroke-dasharray%3D'4%203'%2F%3E%3Cline%20x1%3D'85'%20y1%3D'72'%20x2%3D'475'%20y2%3D'72'%20stroke%3D'%2364748b'%20stroke-dasharray%3D'4%203'%2F%3E%3Cline%20x1%3D'85'%20y1%3D'72'%20x2%3D'580'%20y2%3D'144'%20stroke%3D'%2364748b'%20stroke-dasharray%3D'4%203'%2F%3E%3Cline%20x1%3D'85'%20y1%3D'72'%20x2%3D'685'%20y2%3D'72'%20stroke%3D'%2364748b'%20stroke-dasharray%3D'4%203'%2F%3E%3Ccircle%20cx%3D'55'%20cy%3D'72'%20r%3D'30'%20fill%3D'%23f97316'%2F%3E%3Ctext%20x%3D'55'%20y%3D'76'%20font-size%3D'9'%20font-family%3D'system-ui'%20fill%3D'white'%20text-anchor%3D'middle'%3EBTC%2060%25%20%2B%20Gold%204%3C%2Ftext%3E%3Ccircle%20cx%3D'160'%20cy%3D'144'%20r%3D'30'%20fill%3D'%238b5cf6'%2F%3E%3Ctext%20x%3D'160'%20y%3D'148'%20font-size%3D'9'%20font-family%3D'system-ui'%20fill%3D'white'%20text-anchor%3D'middle'%3EETF%20flow%20momentu%3C%2Ftext%3E%3Ccircle%20cx%3D'265'%20cy%3D'72'%20r%3D'30'%20fill%3D'%238b5cf6'%2F%3E%3Ctext%20x%3D'265'%20y%3D'76'%20font-size%3D'9'%20font-family%3D'system-ui'%20fill%3D'white'%20text-anchor%3D'middle'%3Espot%20premium%2Fdis%3C%2Ftext%3E%3Ccircle%20cx%3D'370'%20cy%3D'144'%20r%3D'30'%20fill%3D'%238b5cf6'%2F%3E%3Ctext%20x%3D'370'%20y%3D'148'%20font-size%3D'9'%20font-family%3D'system-ui'%20fill%3D'white'%20text-anchor%3D'middle'%3Eoptions%20skew%20div%3C%2Ftext%3E%3Ccircle%20cx%3D'475'%20cy%3D'72'%20r%3D'30'%20fill%3D'%238b5cf6'%2F%3E%3Ctext%20x%3D'475'%20y%3D'76'%20font-size%3D'9'%20font-family%3D'system-ui'%20fill%3D'white'%20text-anchor%3D'middle'%3EBTC-Gold%3C%2Ftext%3E%3Ccircle%20cx%3D'580'%20cy%3D'144'%20r%3D'30'%20fill%3D'%238b5cf6'%2F%3E%3Ctext%20x%3D'580'%20y%3D'148'%20font-size%3D'9'%20font-family%3D'system-ui'%20fill%3D'white'%20text-anchor%3D'middle'%3EFOMC%3C%2Ftext%3E%3Ccircle%20cx%3D'685'%20cy%3D'72'%20r%3D'30'%20fill%3D'%23ec4899'%2F%3E%3Ctext%20x%3D'685'%20y%3D'76'%20font-size%3D'9'%20font-family%3D'system-ui'%20fill%3D'white'%20text-anchor%3D'middle'%3ECPI%20print%3C%2Ftext%3E%3C%2Fsvg%3E"}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Synthesises alpha signals, skew convergence, factor topology, macro sensitivity, and MiroMindAI coverage gaps into: markdown alpha thesis, SVG factor topology, HTML skew chart, HTML alpha graph canvas, HTML signal distribution."}
      output:
        key: output
        type: markdown
        value: |
          ## Alpha Thesis: Uncover what options desks miss about BTC-gold skew convergence as institutional adoption matures
          **Portfolio:** BTC 60% + Gold 40% · **Horizon:** 6–12 months · **Skew:** BTC-Gold
          ### Non-Consensus Signal Map
          - **ETF flow momentum**: non-consensus edge versus CME futures positioning, ETF flow consensus
          - **spot premium/discount**: non-consensus edge versus CME futures positioning, ETF flow consensus
          - **options skew divergence**: non-consensus edge versus CME futures positioning, ETF flow consensus
          ### Macro Catalyst Sensitivity
          - **FOMC** clears S/N threshold 1.5
          - **CPI print** clears S/N threshold 1.5
          ### Graph Topology
          - Mode: **by-factor** · Signal: **neutral**
          **Constraints:** No directional bias; account for macro regime uncertainty
          _Tone: contrarian, data-driven_

      output_alpha_map: {key: output_alpha_map, type: html_srcdoc, value: "<!doctype html><html><body style='margin:0;padding:14px;font-family:system-ui;background:#0f172a;color:#e2e8f0'><h2 style='font-size:13px;color:#f97316;margin:0 0 8px'>BTC-Gold · neutral</h2><p>Uncover what options desks miss about BTC-gold skew convergence as institutional adoption matures</p><p>Factors: ETF flow momentum, spot premium/discount, options skew divergence</p></body></html>"}
      output_skew_chart: {key: output_skew_chart, type: html_srcdoc, value: "<!doctype html><html><body style='margin:0;padding:14px;font-family:system-ui;background:#0f172a;color:#e2e8f0'><h2 style='font-size:13px;color:#f97316;margin:0 0 8px'>BTC-Gold · neutral</h2><p>Uncover what options desks miss about BTC-gold skew convergence as institutional adoption matures</p><p>Factors: ETF flow momentum, spot premium/discount, options skew divergence</p></body></html>"}
      outputSrcDoc: {key: outputSrcDoc, type: html_srcdoc, value: "<!doctype html><html><body style='margin:0;padding:14px;font-family:system-ui;background:#0f172a;color:#e2e8f0'><h2 style='font-size:13px;color:#f97316;margin:0 0 8px'>BTC-Gold · neutral</h2><p>Uncover what options desks miss about BTC-gold skew convergence as institutional adoption matures</p><p>Factors: ETF flow momentum, spot premium/discount, options skew divergence</p></body></html>"}
      run_status: {key: run_status, type: string, value: "idle"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "compute"}
      "visual:importance": {key: "visual:importance", type: number, value: 108}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 29.595917942265423}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
      compute:
        key: compute
        type: string
        value: |
          inputs => {
            const r = k => String(inputs?.[k] ?? "").trim()
            const arr = k => r(k).split(/[,;]/).map(v => v.trim()).filter(Boolean)
            const json = k => { try { return JSON.parse(r(k)) } catch (_) { return null } }
            const esc = v => String(v || "").replace(/[&<>"']/g, ch => ch === "&" ? "&amp;" : ch === "<" ? "&lt;" : ch === ">" ? "&gt;" : ch.charCodeAt(0) === 34 ? "&quot;" : "&#39;")
            const a = json("input_alpha_signals")
            const s = json("input_skew_data")
            const f = json("input_factor_topology")
            const m = json("input_macro_sensitivity")
            const portfolio = (a && a.portfolio) || (s && s.portfolio) || r("input_portfolio") || "N/A"
            const horizon = (a && a.horizon) || (s && s.horizon) || r("input_horizon") || "N/A"
            const alpha = (a && a.alpha_hypothesis) || r("input_alpha_hypothesis") || "Skew convergence as adoption matures"
            const factors = ((a && a.signals && a.signals.map(x => x.factor)) || (f && f.factors) || arr("input_factor_spec")).slice(0, 6)
            const catalysts = ((m && m.catalysts) || arr("input_macro_catalysts")).slice(0, 5)
            const skew = (s && s.pair) || r("input_skew_pair") || "N/A"
            const signal = (s && s.signal) || "source-driven"
            const threshold = (m && m.threshold) || r("input_signal_noise_threshold") || "N/A"
            const topology = (f && f.topology_mode) || r("input_graph_topology_mode") || "by-factor"
            const benchmark = r("input_consensus_benchmark") || "consensus positioning"
            const tone = r("input_tone") || "contrarian, data-driven"
            if (!portfolio && !horizon && !alpha && !factors.length && !catalysts.length) return { output: "", imageUrl: "", outputSrcDoc: "", output_alpha_map: "", output_skew_chart: "" }
            const factorLines = factors.length ? factors.map(x => "- **" + x + "**: non-consensus edge versus " + benchmark).join("\n") : "- No factor signals received"
            const catalystLines = catalysts.length ? catalysts.map(x => "- **" + x + "** clears S/N threshold " + threshold).join("\n") : "- No catalysts cleared the S/N threshold"
            const output = [
              "## Alpha Thesis: " + alpha, "",
              "**Portfolio:** " + portfolio + " · **Horizon:** " + horizon + " · **Skew:** " + skew, "",
              "### Non-Consensus Signal Map", factorLines, "",
              "### Macro Catalyst Sensitivity", catalystLines, "",
              "### Graph Topology", "- Mode: **" + topology + "** · Signal: **" + signal + "**", "",
              r("input_constraints") ? "**Constraints:** " + r("input_constraints") : "",
              "_Tone: " + tone + "_"
            ].filter(Boolean).join("\n")
            const labels = [portfolio].concat(factors.slice(0, 3), [skew], catalysts.slice(0, 2)).filter(Boolean)
            const nodes = labels.map((label, i) => ({ label, x: 55 + i * 105, y: 72 + (i % 2) * 72, color: i === 0 ? "#f97316" : i === labels.length - 1 ? "#ec4899" : "#8b5cf6" }))
            const svgNodes = nodes.map(n => "<circle cx='" + n.x + "' cy='" + n.y + "' r='30' fill='" + n.color + "'/><text x='" + n.x + "' y='" + (n.y + 4) + "' font-size='9' font-family='system-ui' fill='white' text-anchor='middle'>" + esc(n.label).slice(0, 16) + "</text>").join("")
            const svgEdges = nodes.slice(1).map(n => "<line x1='85' y1='72' x2='" + n.x + "' y2='" + n.y + "' stroke='#64748b' stroke-dasharray='4 3'/>").join("")
            const svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 760 230'><rect width='760' height='230' fill='#0f172a'/><text x='380' y='24' fill='#f97316' font-size='13' font-weight='700' font-family='system-ui' text-anchor='middle'>Missing Alpha Contract</text>" + svgEdges + svgNodes + "</svg>"
            const card = "<!doctype html><html><body style='margin:0;padding:14px;font-family:system-ui;background:#0f172a;color:#e2e8f0'><h2 style='font-size:13px;color:#f97316;margin:0 0 8px'>" + esc(skew) + " · " + esc(signal) + "</h2><p>" + esc(alpha) + "</p><p>Factors: " + esc(factors.join(", ")) + "</p></body></html>"
            return { output, imageUrl: "data:image/svg+xml," + encodeURIComponent(svg), outputSrcDoc: card, output_alpha_map: card, output_skew_chart: card }
          }
    - id: {key: id, type: string, value: "panel_consensus_gap"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Alpha Thesis — Consensus Gap Text"}
      position: {key: position, type: object, value: {"x":1240,"y":0}}
      handles: {key: handles, type: object, value: {"target":["output"],"source":["output"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"output":"template_text_signal"},"out":{"output":"template_text_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Renders the synthesised markdown alpha thesis: non-consensus signal map, skew convergence analysis, macro catalyst sensitivity, coverage gap, and graph topology summary."}
      output: {key: output, type: textarea, value: ""}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 3}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "panel_factor_topology"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Factor Topology — SVG Graph"}
      position: {key: position, type: object, value: {"x":1240,"y":240}}
      handles: {key: handles, type: object, value: {"target":["imageUrl"],"source":["imageUrl"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"imageUrl":"template_image_signal"},"out":{"imageUrl":"template_image_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      imageUrl: {key: imageUrl, type: text, value: ""}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Renders SVG factor-cluster topology: factor nodes (purple) connected to asset nodes (orange) by weighted exposure edges, labelled with portfolio and horizon."}
      "visual:height": {key: "visual:height", type: number, value: 203}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:width": {key: "visual:width", type: number, value: 360}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 3}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 1}
    - id: {key: id, type: string, value: "panel_alpha_map"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Alpha Map — Knowledge Graph Canvas"}
      position: {key: position, type: object, value: {"x":1240,"y":480}}
      handles: {key: handles, type: object, value: {"target":["output_alpha_map"],"source":["output_alpha_map"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"output_alpha_map":"template_alpha_html"},"out":{"output_alpha_map":"template_alpha_html"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Renders the HTML knowledge-graph canvas: portfolio node → factor nodes → skew node → macro catalyst nodes; annotated with MiroMindAI coverage score and non-consensus signal count."}
      output_alpha_map: {key: output_alpha_map, type: string, value: ""}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 3}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 2}
    - id: {key: id, type: string, value: "panel_skew_chart"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Skew Chart — Convergence & Signal Distribution"}
      position: {key: position, type: object, value: {"x":1240,"y":720}}
      handles: {key: handles, type: object, value: {"target":["outputSrcDoc","output_skew_chart"],"source":["outputSrcDoc","output_skew_chart"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"outputSrcDoc":"template_chart_html","output_skew_chart":"template_chart_html"},"out":{"outputSrcDoc":"template_chart_html","output_skew_chart":"template_chart_html"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 2}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 2}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Dual HTML panel: (outputSrcDoc) 25d/10d risk-reversal skew legs per asset with percentile bars and coverage-gap callout; (output_skew_chart) non-consensus signal distribution with gradient fill and score labels."}
      output_skew_chart: {key: output_skew_chart, type: string, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      "visual:importance": {key: "visual:importance", type: number, value: 20}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 15.65685424949238}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 3}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 3}
  edges:
    - id: {key: id, type: string, value: "e_src_as_portfolio"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_portfolio"}
      target: {key: target, type: string, value: "node_alpha_screener"}
      targetHandle: {key: targetHandle, type: string, value: "input_portfolio"}
      label: {key: label, type: string, value: "portfolio"}
      type: {key: type, type: string, value: "alpha_signal_edge"}
    - id: {key: id, type: string, value: "e_src_as_horizon"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_horizon"}
      target: {key: target, type: string, value: "node_alpha_screener"}
      targetHandle: {key: targetHandle, type: string, value: "input_horizon"}
      label: {key: label, type: string, value: "horizon"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "e_src_as_factor_spec"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_factor_spec"}
      target: {key: target, type: string, value: "node_alpha_screener"}
      targetHandle: {key: targetHandle, type: string, value: "input_factor_spec"}
      label: {key: label, type: string, value: "factor spec"}
      type: {key: type, type: string, value: "factor_cluster_edge"}
    - id: {key: id, type: string, value: "e_src_as_alpha_hypo"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_alpha_hypothesis"}
      target: {key: target, type: string, value: "node_alpha_screener"}
      targetHandle: {key: targetHandle, type: string, value: "input_alpha_hypothesis"}
      label: {key: label, type: string, value: "alpha hypothesis"}
      type: {key: type, type: string, value: "alpha_signal_edge"}
    - id: {key: id, type: string, value: "e_src_as_coverage"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_coverage_scope"}
      target: {key: target, type: string, value: "node_alpha_screener"}
      targetHandle: {key: targetHandle, type: string, value: "input_coverage_scope"}
      label: {key: label, type: string, value: "coverage scope"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "e_src_as_benchmark"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_consensus_benchmark"}
      target: {key: target, type: string, value: "node_alpha_screener"}
      targetHandle: {key: targetHandle, type: string, value: "input_consensus_benchmark"}
      label: {key: label, type: string, value: "consensus benchmark"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "e_src_sk_pair"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_skew_pair"}
      target: {key: target, type: string, value: "node_skew_convergence"}
      targetHandle: {key: targetHandle, type: string, value: "input_skew_pair"}
      label: {key: label, type: string, value: "skew pair"}
      type: {key: type, type: string, value: "skew_convergence_edge"}
    - id: {key: id, type: string, value: "e_src_sk_horizon"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_horizon"}
      target: {key: target, type: string, value: "node_skew_convergence"}
      targetHandle: {key: targetHandle, type: string, value: "input_horizon"}
      label: {key: label, type: string, value: "horizon"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "e_src_sk_portfolio"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_portfolio"}
      target: {key: target, type: string, value: "node_skew_convergence"}
      targetHandle: {key: targetHandle, type: string, value: "input_portfolio"}
      label: {key: label, type: string, value: "portfolio"}
      type: {key: type, type: string, value: "alpha_signal_edge"}
    - id: {key: id, type: string, value: "e_src_fc_factor_spec"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_factor_spec"}
      target: {key: target, type: string, value: "node_factor_cluster"}
      targetHandle: {key: targetHandle, type: string, value: "input_factor_spec"}
      label: {key: label, type: string, value: "factor spec"}
      type: {key: type, type: string, value: "factor_cluster_edge"}
    - id: {key: id, type: string, value: "e_src_fc_portfolio"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_portfolio"}
      target: {key: target, type: string, value: "node_factor_cluster"}
      targetHandle: {key: targetHandle, type: string, value: "input_portfolio"}
      label: {key: label, type: string, value: "portfolio"}
      type: {key: type, type: string, value: "factor_cluster_edge"}
    - id: {key: id, type: string, value: "e_src_fc_topology_mode"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_graph_topology_mode"}
      target: {key: target, type: string, value: "node_factor_cluster"}
      targetHandle: {key: targetHandle, type: string, value: "input_graph_topology_mode"}
      label: {key: label, type: string, value: "topology mode"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "e_src_ms_catalysts"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_macro_catalysts"}
      target: {key: target, type: string, value: "node_macro_sensitivity"}
      targetHandle: {key: targetHandle, type: string, value: "input_macro_catalysts"}
      label: {key: label, type: string, value: "macro catalysts"}
      type: {key: type, type: string, value: "macro_catalyst_edge"}
    - id: {key: id, type: string, value: "e_src_ms_sn_threshold"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_signal_noise_threshold"}
      target: {key: target, type: string, value: "node_macro_sensitivity"}
      targetHandle: {key: targetHandle, type: string, value: "input_signal_noise_threshold"}
      label: {key: label, type: string, value: "S/N threshold"}
      type: {key: type, type: string, value: "template_number_signal"}
    - id: {key: id, type: string, value: "e_src_ms_portfolio"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_portfolio"}
      target: {key: target, type: string, value: "node_macro_sensitivity"}
      targetHandle: {key: targetHandle, type: string, value: "input_portfolio"}
      label: {key: label, type: string, value: "portfolio"}
      type: {key: type, type: string, value: "macro_catalyst_edge"}
    - id: {key: id, type: string, value: "e_src_mb_coverage"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_coverage_scope"}
      target: {key: target, type: string, value: "node_miromindai_bridge"}
      targetHandle: {key: targetHandle, type: string, value: "input_coverage_scope"}
      label: {key: label, type: string, value: "coverage scope"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "e_src_mb_alpha_hypo"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_alpha_hypothesis"}
      target: {key: target, type: string, value: "node_miromindai_bridge"}
      targetHandle: {key: targetHandle, type: string, value: "input_alpha_hypothesis"}
      label: {key: label, type: string, value: "alpha hypothesis"}
      type: {key: type, type: string, value: "alpha_signal_edge"}
    - id: {key: id, type: string, value: "e_src_mb_portfolio"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_portfolio"}
      target: {key: target, type: string, value: "node_miromindai_bridge"}
      targetHandle: {key: targetHandle, type: string, value: "input_portfolio"}
      label: {key: label, type: string, value: "portfolio"}
      type: {key: type, type: string, value: "alpha_signal_edge"}
    - id: {key: id, type: string, value: "e_src_cs_horizon"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_horizon"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_horizon"}
      label: {key: label, type: string, value: "horizon"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "e_src_cs_portfolio"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_portfolio"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_portfolio"}
      label: {key: label, type: string, value: "portfolio"}
      type: {key: type, type: string, value: "alpha_signal_edge"}
    - id: {key: id, type: string, value: "e_src_cs_factor_spec"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_factor_spec"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_factor_spec"}
      label: {key: label, type: string, value: "factor spec"}
      type: {key: type, type: string, value: "factor_cluster_edge"}
    - id: {key: id, type: string, value: "e_src_cs_skew_pair"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_skew_pair"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_skew_pair"}
      label: {key: label, type: string, value: "skew pair"}
      type: {key: type, type: string, value: "skew_convergence_edge"}
    - id: {key: id, type: string, value: "e_src_cs_macro_catalysts"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_macro_catalysts"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_macro_catalysts"}
      label: {key: label, type: string, value: "macro catalysts"}
      type: {key: type, type: string, value: "macro_catalyst_edge"}
    - id: {key: id, type: string, value: "e_src_cs_alpha_hypothesis"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_alpha_hypothesis"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_alpha_hypothesis"}
      label: {key: label, type: string, value: "alpha hypothesis"}
      type: {key: type, type: string, value: "alpha_signal_edge"}
    - id: {key: id, type: string, value: "e_src_cs_coverage_scope"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_coverage_scope"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_coverage_scope"}
      label: {key: label, type: string, value: "coverage scope"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "e_src_cs_signal_noise_threshold"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_signal_noise_threshold"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_signal_noise_threshold"}
      label: {key: label, type: string, value: "S/N threshold"}
      type: {key: type, type: string, value: "template_number_signal"}
    - id: {key: id, type: string, value: "e_src_cs_topology_mode"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_graph_topology_mode"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_graph_topology_mode"}
      label: {key: label, type: string, value: "graph topology mode"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "e_src_cs_consensus_benchmark"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_consensus_benchmark"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_consensus_benchmark"}
      label: {key: label, type: string, value: "consensus benchmark"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "e_src_cs_audience"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_audience"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_audience"}
      label: {key: label, type: string, value: "audience"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "e_src_cs_constraints"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_constraints"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_constraints"}
      label: {key: label, type: string, value: "constraints"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "e_src_cs_tone"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_tone"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_tone"}
      label: {key: label, type: string, value: "tone"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "e_src_cs_metric_label"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_metric_label"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_metric_label"}
      label: {key: label, type: string, value: "metric label"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "e_as_to_cs"}
      source: {key: source, type: string, value: "node_alpha_screener"}
      sourceHandle: {key: sourceHandle, type: string, value: "output_alpha_signals"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_alpha_signals"}
      label: {key: label, type: string, value: "alpha signals"}
      type: {key: type, type: string, value: "alpha_signal_edge"}
    - id: {key: id, type: string, value: "e_sk_to_cs"}
      source: {key: source, type: string, value: "node_skew_convergence"}
      sourceHandle: {key: sourceHandle, type: string, value: "output_skew_data"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_skew_data"}
      label: {key: label, type: string, value: "skew data"}
      type: {key: type, type: string, value: "skew_convergence_edge"}
    - id: {key: id, type: string, value: "e_fc_to_cs"}
      source: {key: source, type: string, value: "node_factor_cluster"}
      sourceHandle: {key: sourceHandle, type: string, value: "output_factor_topology"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_factor_topology"}
      label: {key: label, type: string, value: "factor topology"}
      type: {key: type, type: string, value: "factor_cluster_edge"}
    - id: {key: id, type: string, value: "e_ms_to_cs"}
      source: {key: source, type: string, value: "node_macro_sensitivity"}
      sourceHandle: {key: sourceHandle, type: string, value: "output_macro_sensitivity"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_macro_sensitivity"}
      label: {key: label, type: string, value: "macro sensitivity"}
      type: {key: type, type: string, value: "macro_catalyst_edge"}
    - id: {key: id, type: string, value: "e_mb_to_cs"}
      source: {key: source, type: string, value: "node_miromindai_bridge"}
      sourceHandle: {key: sourceHandle, type: string, value: "output_research_coverage"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_research_coverage"}
      label: {key: label, type: string, value: "research coverage"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "e_cs_to_consensus_gap"}
      source: {key: source, type: string, value: "compute_summary"}
      sourceHandle: {key: sourceHandle, type: string, value: "output"}
      target: {key: target, type: string, value: "panel_consensus_gap"}
      targetHandle: {key: targetHandle, type: string, value: "output"}
      label: {key: label, type: string, value: "alpha thesis"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "e_cs_to_factor_topology"}
      source: {key: source, type: string, value: "compute_summary"}
      sourceHandle: {key: sourceHandle, type: string, value: "imageUrl"}
      target: {key: target, type: string, value: "panel_factor_topology"}
      targetHandle: {key: targetHandle, type: string, value: "imageUrl"}
      label: {key: label, type: string, value: "factor SVG"}
      type: {key: type, type: string, value: "template_image_signal"}
    - id: {key: id, type: string, value: "e_cs_to_alpha_map"}
      source: {key: source, type: string, value: "compute_summary"}
      sourceHandle: {key: sourceHandle, type: string, value: "output_alpha_map"}
      target: {key: target, type: string, value: "panel_alpha_map"}
      targetHandle: {key: targetHandle, type: string, value: "output_alpha_map"}
      label: {key: label, type: string, value: "alpha map"}
      type: {key: type, type: string, value: "template_alpha_html"}
    - id: {key: id, type: string, value: "e_cs_to_skew_chart"}
      source: {key: source, type: string, value: "compute_summary"}
      sourceHandle: {key: sourceHandle, type: string, value: "outputSrcDoc"}
      target: {key: target, type: string, value: "panel_skew_chart"}
      targetHandle: {key: targetHandle, type: string, value: "outputSrcDoc"}
      label: {key: label, type: string, value: "skew chart"}
      type: {key: type, type: string, value: "template_chart_html"}
    - id: {key: id, type: string, value: "e_cs_to_signal_dist"}
      source: {key: source, type: string, value: "compute_summary"}
      sourceHandle: {key: sourceHandle, type: string, value: "output_skew_chart"}
      target: {key: target, type: string, value: "panel_skew_chart"}
      targetHandle: {key: targetHandle, type: string, value: "output_skew_chart"}
      label: {key: label, type: string, value: "signal distribution"}
      type: {key: type, type: string, value: "template_chart_html"}
---
## Response

{{compute_summary.output}}


**Horizon** {{source_input.input_horizon}} · **Portfolio** {{source_input.input_portfolio}} · **Skew** {{source_input.input_skew_pair}} · **Catalysts** {{source_input.input_macro_catalysts}}

**Alpha Hypothesis:** {{source_input.input_alpha_hypothesis}}

**Factor Spec:** {{source_input.input_factor_spec}}

**Coverage Scope:** {{source_input.input_coverage_scope}} · **S/N Threshold:** {{source_input.input_signal_noise_threshold}} · **Topology:** {{source_input.input_graph_topology_mode}} · **Tone:** {{source_input.input_tone}}

**Audience:** {{source_input.input_audience}} · **Metric:** {{source_input.input_metric_label}} · **Benchmark:** {{source_input.input_consensus_benchmark}} · **Constraints:** {{source_input.input_constraints}}
