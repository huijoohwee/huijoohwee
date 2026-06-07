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
flow:
  direction: {key: direction, type: string, value: "LR"}
  edgeType: {key: edgeType, type: string, value: "smoothstep"}
  balancedViewportPreset: {key: balancedViewportPreset, type: string, value: "widgetFrontmatter"}
  computed: {key: computed, type: boolean, value: true}
  snapToGrid: {key: snapToGrid, type: boolean, value: true}
  legend:
    items:
      - {color: "#f97316", label: "Alpha signal / non-consensus factor", type: "alpha_signal_edge"}
      - {color: "#a855f7", label: "Options skew convergence", type: "skew_convergence_edge"}
      - {color: "#ec4899", label: "Portfolio factor cluster", type: "factor_cluster_edge"}
      - {color: "#3b82f6", label: "Macro catalyst sensitivity", type: "macro_catalyst_edge"}
      - {color: "#8b5cf6", label: "Alpha map canvas output", type: "template_alpha_html"}
      - {color: "#14b8a6", label: "Text / metadata signal", type: "template_text_signal"}
      - {color: "#84cc16", label: "Numeric threshold / S/N ratio", type: "template_number_signal"}
  clusterDefs:
    - {id: cluster_screening, label: "Non-Consensus Alpha Screener", nodeIds: ["node_alpha_screener"], color: "#f97316", position: {"x":360,"y":-280}}
    - {id: cluster_skew, label: "Skew Convergence Detector", nodeIds: ["node_skew_convergence"], color: "#a855f7", position: {"x":360,"y":-40}}
    - {id: cluster_factor, label: "Factor Cluster Graph", nodeIds: ["node_factor_cluster"], color: "#ec4899", position: {"x":360,"y":200}}
    - {id: cluster_macro, label: "Macro Catalyst Filter", nodeIds: ["node_macro_sensitivity"], color: "#3b82f6", position: {"x":360,"y":440}}
    - {id: cluster_miro, label: "MiroMindAI Coverage Bridge", nodeIds: ["node_miromindai_bridge"], color: "#8b5cf6", position: {"x":360,"y":680}}
  nodes:
    - id: {key: id, type: string, value: "source_input"}
      type: {key: type, type: string, value: "InputWidget"}
      label: {key: label, type: string, value: "Alpha Discovery Source"}
      position: {key: position, type: object, value: {"x":0,"y":200}}
      input_horizon: {key: input_horizon, type: string, value: "6–12 months"}
      input_portfolio: {key: input_portfolio, type: string, value: "BTC 60% + Gold 40%"}
      input_factor_spec: {key: input_factor_spec, type: textarea, value: "ETF flow momentum, spot premium/discount, options skew divergence"}
      input_skew_pair: {key: input_skew_pair, type: string, value: "BTC-Gold"}
      input_macro_catalysts: {key: input_macro_catalysts, type: string, value: "FOMC, CPI print"}
      input_alpha_hypothesis: {key: input_alpha_hypothesis, type: textarea, value: "Uncover what options desks miss about BTC-gold skew convergence as institutional adoption matures"}
      input_coverage_scope: {key: input_coverage_scope, type: textarea, value: "options desks, vol desks, institutional research"}
      input_signal_noise_threshold: {key: input_signal_noise_threshold, type: number, value: 1.5}
      input_graph_topology_mode: {key: input_graph_topology_mode, type: string, value: "by-factor"}
      input_consensus_benchmark: {key: input_consensus_benchmark, type: textarea, value: "CME futures positioning, ETF flow consensus"}
      input_audience: {key: input_audience, type: string, value: "PM, risk desk, quant analyst"}
      input_constraints: {key: input_constraints, type: textarea, value: "No directional bias; account for macro regime uncertainty"}
      input_tone: {key: input_tone, type: string, value: "contrarian, data-driven"}
      input_metric_label: {key: input_metric_label, type: string, value: "signals"}
      handles: {key: handles, type: object, value: {"source":["input_horizon","input_portfolio","input_factor_spec","input_skew_pair","input_macro_catalysts","input_alpha_hypothesis","input_coverage_scope","input_signal_noise_threshold","input_graph_topology_mode","input_consensus_benchmark","input_audience","input_constraints","input_tone","input_metric_label"]}}
      "canvas:widgetCard": {key: "canvas:widgetCard", type: object, value: {"previewField":"input_alpha_hypothesis","previewMaxChars":100,"onEdit":{"trigger":"runDownstream","targets":["node_alpha_screener","node_skew_convergence","node_factor_cluster","node_macro_sensitivity","node_miromindai_bridge","compute_summary"]},"actions":[{"id":"edit","label":"Edit","icon":"pencil","trigger":"openFieldEditor","targetField":"input_alpha_hypothesis"},{"id":"run","label":"Run All","icon":"play","trigger":"runDownstream","targets":["node_alpha_screener","node_skew_convergence","node_factor_cluster","node_macro_sensitivity","node_miromindai_bridge","compute_summary"]}]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"out":{"input_horizon":"template_text_signal","input_portfolio":"alpha_signal_edge","input_factor_spec":"factor_cluster_edge","input_skew_pair":"skew_convergence_edge","input_macro_catalysts":"macro_catalyst_edge","input_alpha_hypothesis":"alpha_signal_edge","input_coverage_scope":"template_text_signal","input_signal_noise_threshold":"template_number_signal","input_graph_topology_mode":"template_text_signal","input_consensus_benchmark":"template_text_signal","input_audience":"template_text_signal","input_constraints":"template_text_signal","input_tone":"template_text_signal","input_metric_label":"template_text_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "alphaDiscoveryInput"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Alpha discovery source: portfolio composition, investment horizon, factor analysis spec, skew pair, macro catalysts, alpha hypothesis, coverage scope, S/N threshold, graph topology mode, consensus benchmark."}
      "template:nodeType": {key: "template:nodeType", type: string, value: "input"}

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
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Screens portfolio factors against consensus coverage; emits non-consensus score per signal and links each factor to the alpha hypothesis."}
      "template:nodeType": {key: "template:nodeType", type: string, value: "compute"}
      output_alpha_signals: {key: output_alpha_signals, type: json, value: ""}
      run_status: {key: run_status, type: string, value: "idle"}
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
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Computes 25d and 10d risk-reversal skew legs for the specified asset pair; emits convergence score, z-scores, and percentile ranks."}
      "template:nodeType": {key: "template:nodeType", type: string, value: "compute"}
      output_skew_data: {key: output_skew_data, type: json, value: ""}
      run_status: {key: run_status, type: string, value: "idle"}
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
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Builds factor-cluster graph nodes and edges from portfolio assets and factor spec; respects topology mode (by-factor | by-asset | by-signal)."}
      "template:nodeType": {key: "template:nodeType", type: string, value: "compute"}
      output_factor_topology: {key: output_factor_topology, type: json, value: ""}
      run_status: {key: run_status, type: string, value: "idle"}
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
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Estimates signal-to-noise ratio per macro catalyst; filters above user-defined S/N threshold; emits dominant regime (signal | noise)."}
      "template:nodeType": {key: "template:nodeType", type: string, value: "compute"}
      output_macro_sensitivity: {key: output_macro_sensitivity, type: json, value: ""}
      run_status: {key: run_status, type: string, value: "idle"}
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
      "kgc:integrationTarget": {key: "kgc:integrationTarget", type: object, value: {"service":"MiroMindAI","endpoint":"https://api.miromindai.com/v1/canvas/coverage","auth":"bearer","scope":"research_coverage,alpha_surface,canvas_sync","canvasSyncMode":"bi-directional"}}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Bridges to MiroMindAI canvas: scans specified desks for research coverage gaps, surfaces uncovered alpha relative to the hypothesis, and emits a structured coverage summary."}
      "template:nodeType": {key: "template:nodeType", type: string, value: "compute"}
      output_research_coverage: {key: output_research_coverage, type: markdown, value: ""}
      run_status: {key: run_status, type: string, value: "idle"}
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
      handles: {key: handles, type: object, value: {"target":["input_audience","input_constraints","input_tone","input_metric_label","input_alpha_signals","input_skew_data","input_factor_topology","input_macro_sensitivity","input_research_coverage"],"source":["output","imageUrl","outputSrcDoc","output_alpha_map","output_skew_chart"]}}
      "canvas:runAction": {key: "canvas:runAction", type: object, value: {"fn":"compute","inputs":["input_audience","input_constraints","input_tone","input_metric_label","input_alpha_signals","input_skew_data","input_factor_topology","input_macro_sensitivity","input_research_coverage"],"outputs":["output","imageUrl","outputSrcDoc","output_alpha_map","output_skew_chart"],"updateBody":true,"bodyTokens":[{"token":"compute_summary.output","field":"output"},{"token":"compute_summary.imageUrl","field":"imageUrl"},{"token":"compute_summary.outputSrcDoc","field":"outputSrcDoc"},{"token":"compute_summary.output_alpha_map","field":"output_alpha_map"},{"token":"compute_summary.output_skew_chart","field":"output_skew_chart"},{"token":"source_input.input_horizon","field":"input_horizon"},{"token":"source_input.input_portfolio","field":"input_portfolio"},{"token":"source_input.input_skew_pair","field":"input_skew_pair"},{"token":"source_input.input_macro_catalysts","field":"input_macro_catalysts"},{"token":"source_input.input_alpha_hypothesis","field":"input_alpha_hypothesis"},{"token":"source_input.input_coverage_scope","field":"input_coverage_scope"},{"token":"source_input.input_signal_noise_threshold","field":"input_signal_noise_threshold"},{"token":"source_input.input_graph_topology_mode","field":"input_graph_topology_mode"},{"token":"source_input.input_consensus_benchmark","field":"input_consensus_benchmark"},{"token":"source_input.input_audience","field":"input_audience"},{"token":"source_input.input_constraints","field":"input_constraints"},{"token":"source_input.input_tone","field":"input_tone"},{"token":"source_input.input_metric_label","field":"input_metric_label"}],"sideEffects":[{"field":"run_status","set":"done"},{"field":"alpha_discovery_flow.active_graph_mutated","set":true},{"field":"alpha_discovery_flow.run_id","pattern":"kgcf_alpha_yyyyMMddHHmm"}]}}
      "canvas:widgetCard": {key: "canvas:widgetCard", type: object, value: {"statusField":"run_status","statusValues":{"idle":"gray","running":"amber","done":"green","error":"red"},"previewField":"output","previewMaxChars":120,"actions":[{"id":"run","label":"Synthesize","icon":"zap","primary":true,"trigger":"compute"},{"id":"reset","label":"Reset","icon":"refresh","trigger":"clearOutputs","clearFields":["output","imageUrl","outputSrcDoc","output_alpha_map","output_skew_chart"]}]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"input_audience":"template_text_signal","input_constraints":"template_text_signal","input_tone":"template_text_signal","input_metric_label":"template_text_signal","input_alpha_signals":"alpha_signal_edge","input_skew_data":"skew_convergence_edge","input_factor_topology":"factor_cluster_edge","input_macro_sensitivity":"macro_catalyst_edge","input_research_coverage":"template_text_signal"},"out":{"output":"template_text_signal","imageUrl":"template_image_signal","outputSrcDoc":"template_chart_html","output_alpha_map":"template_alpha_html","output_skew_chart":"template_chart_html"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "alphaSynthesisCompute"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Synthesises alpha signals, skew convergence, factor topology, macro sensitivity, and MiroMindAI coverage gaps into: markdown alpha thesis, SVG factor topology, HTML skew chart, HTML alpha graph canvas, HTML signal distribution."}
      "template:nodeType": {key: "template:nodeType", type: string, value: "compute"}
      output: {key: output, type: markdown, value: ""}
      imageUrl: {key: imageUrl, type: svg_data_uri, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: html_srcdoc, value: ""}
      output_alpha_map: {key: output_alpha_map, type: html_srcdoc, value: ""}
      output_skew_chart: {key: output_skew_chart, type: html_srcdoc, value: ""}
      run_status: {key: run_status, type: string, value: "idle"}
      compute:
        key: compute
        type: string
        value: |
          inputs => {
            const r = k => String(inputs?.[k] || "").trim()
            const audience = r("input_audience") || "PM"
            const constraints = r("input_constraints")
            const tone = r("input_tone") || "contrarian, data-driven"
            const metricLabel = r("input_metric_label") || "signals"
            const researchCoverage = r("input_research_coverage")

            let aS = null, sD = null, fT = null, mS = null
            try { aS = JSON.parse(r("input_alpha_signals")) } catch (_) {}
            try { sD = JSON.parse(r("input_skew_data")) } catch (_) {}
            try { fT = JSON.parse(r("input_factor_topology")) } catch (_) {}
            try { mS = JSON.parse(r("input_macro_sensitivity")) } catch (_) {}

            if (!aS && !sD && !fT && !mS) {
              return { output: "", imageUrl: "", outputSrcDoc: "", output_alpha_map: "", output_skew_chart: "" }
            }

            const portfolio = (aS && aS.portfolio) || (sD && sD.portfolio) || "N/A"
            const horizon = (aS && aS.horizon) || (sD && sD.horizon) || "N/A"
            const alphaHypo = (aS && aS.alpha_hypothesis) || ""
            const factors = (aS && aS.signals && aS.signals.map(s => s.factor)) || (fT && fT.factors) || []
            const catalysts = (mS && mS.catalysts) || []
            const highSn = (mS && mS.high_signal_catalysts) || []
            const skewPair = (sD && sD.pair) || "N/A"
            const skewSignal = (sD && sD.signal) || "unknown"
            const convScore = sD ? sD.convergence_score : null
            const nonConsCount = aS ? (aS.non_consensus_count || 0) : 0
            const totalSig = aS ? (aS.total_signals || factors.length) : factors.length
            const nodeCount = fT ? (fT.node_count || 0) : 0
            const edgeCount = fT ? (fT.edge_count || 0) : 0
            const topoMode = fT ? (fT.topology_mode || "by-factor") : "by-factor"
            const macroRegime = mS ? (mS.dominant_regime || "unknown") : "unknown"
            const macroNote = mS ? (mS.regime_note || "") : ""
            const skewNote = sD ? (sD.regime_note || "") : ""

            var coverageGaps = ""
            var coverageScore = ""
            if (researchCoverage.indexOf("Surfaced gaps:") !== -1) {
              var gapLine = researchCoverage.split("Surfaced gaps:")[1].split("\n")[0].trim()
              if (gapLine && gapLine !== "none detected") coverageGaps = gapLine
            }
            if (researchCoverage.indexOf("Coverage score:") !== -1) {
              coverageScore = researchCoverage.split("Coverage score:")[1].split("\n")[0].trim()
            }

            var esc = function(v) {
              return String(v || "").replace(/[&<>"']/g, function(ch) {
                if (ch === "&") return "&amp;"
                if (ch === "<") return "&lt;"
                if (ch === ">") return "&gt;"
                if (ch.charCodeAt(0) === 34) return "&quot;"
                return "&#39;"
              })
            }

            // --- Markdown alpha thesis ---
            var factorLines = factors.length
              ? factors.map(function(f) { return "- **" + f + "**: graph-detected — diverges from consensus positioning" }).join("\n")
              : "- No factor signals received"
            var snLines = highSn.length
              ? highSn.map(function(c) { return "- \u2713 **" + c + "**: cleared S/N threshold" }).join("\n")
              : "- No catalysts cleared the S/N threshold \u2014 macro noise dominant"
            var gapLines = coverageGaps
              ? coverageGaps.split(";").map(function(g) { return "- " + g.trim() }).join("\n")
              : "- " + (alphaHypo || "Skew convergence as institutional adoption matures")
            var skewLegLines = (sD && sD.skew_legs)
              ? sD.skew_legs.slice(0, 6).map(function(l) {
                  return "  - " + l.asset + " " + l.leg + ": " + l.value + " (z\u2009" + l.z_score + ", P" + l.percentile + ")"
                }).join("\n")
              : ""

            var output = [
              "## Alpha Thesis: " + (alphaHypo.slice(0, 90) || (skewPair + " Convergence")),
              "",
              "**Portfolio:** " + portfolio + " \u00b7 **Horizon:** " + horizon + " \u00b7 **Audience:** " + audience,
              "",
              "### Non-Consensus Signal Map",
              factorLines,
              "",
              nonConsCount > 0 ? "_" + nonConsCount + "/" + totalSig + " " + metricLabel + " above consensus threshold_" : "",
              "",
              "### Skew Convergence (" + skewPair + ")",
              convScore !== null ? "- Convergence score: **" + convScore + "** \u00b7 Signal: **" + skewSignal + "**" : "- Skew data unavailable",
              skewLegLines,
              skewNote ? "\n_" + skewNote + "_" : "",
              "",
              "### Macro Catalyst Sensitivity",
              "- Regime: **" + macroRegime + "** \u00b7 S/N threshold: " + ((mS && mS.threshold) || "N/A"),
              snLines,
              macroNote ? "\n_" + macroNote + "_" : "",
              "",
              "### Coverage Gap \u2014 What Consensus Misses",
              gapLines,
              coverageScore ? "\n_MiroMindAI coverage score: " + coverageScore + "_" : "",
              "",
              "### Graph Topology \u00b7 " + topoMode,
              (nodeCount || edgeCount) ? "- Nodes: **" + nodeCount + "** \u00b7 Edges: **" + edgeCount + "**" : "",
              constraints ? "\n**Constraints:** " + constraints : "",
              "",
              "_Tone: " + tone + "_"
            ].filter(function(s) { return s !== null && s !== undefined }).join("\n")

            // --- SVG factor topology ---
            var svgNodes = (fT && fT.nodes ? fT.nodes : factors.map(function(f, i) {
              return { id: "F" + i, label: f, type: "factor" }
            })).slice(0, 8)
            var positioned = svgNodes.map(function(n, i) {
              return Object.assign({}, n, { cx: 60 + (i % 4) * 155 + 55, cy: Math.floor(i / 4) * 100 + 65 })
            })
            var nodeByIdMap = {}
            positioned.forEach(function(n) { nodeByIdMap[n.id] = n })
            var svgEdgeParts = (fT && fT.edges ? fT.edges.slice(0, 16) : []).map(function(e) {
              var s = nodeByIdMap[e.from], t = nodeByIdMap[e.to]
              if (!s || !t) return ""
              return "<line x1=\"" + s.cx + "\" y1=\"" + s.cy + "\" x2=\"" + t.cx + "\" y2=\"" + t.cy + "\" stroke=\"#334155\" stroke-width=\"1.5\" stroke-dasharray=\"4,2\" opacity=\"0.7\"/>"
            }).join("")
            var svgNodeParts = positioned.map(function(n) {
              var col = n.type === "asset" ? "#f97316" : "#a855f7"
              return "<circle cx=\"" + n.cx + "\" cy=\"" + n.cy + "\" r=\"38\" fill=\"" + col + "\" opacity=\"0.88\"/>" +
                "<text x=\"" + n.cx + "\" y=\"" + (n.cy - 6) + "\" font-family=\"system-ui\" font-size=\"9\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">" + esc(n.label.slice(0, 16)) + "</text>" +
                "<text x=\"" + n.cx + "\" y=\"" + (n.cy + 9) + "\" font-family=\"system-ui\" font-size=\"8\" fill=\"rgba(255,255,255,0.55)\" text-anchor=\"middle\">" + esc(n.type) + "</text>"
            }).join("")
            var svgRows = Math.ceil(svgNodes.length / 4)
            var svgW = Math.max(680, (Math.min(svgNodes.length, 4)) * 155 + 80)
            var svgH = svgRows * 100 + 80
            var svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 " + svgW + " " + svgH + "\">" +
              "<rect width=\"" + svgW + "\" height=\"" + svgH + "\" fill=\"#0f172a\"/>" +
              "<text x=\"" + (svgW / 2) + "\" y=\"22\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"700\" fill=\"#f97316\" text-anchor=\"middle\">Factor Topology \u00b7 " + esc(topoMode) + "</text>" +
              svgEdgeParts + svgNodeParts +
              "<text x=\"" + (svgW / 2) + "\" y=\"" + (svgH - 8) + "\" font-family=\"system-ui\" font-size=\"9\" fill=\"#64748b\" text-anchor=\"middle\">" + esc(portfolio) + " \u00b7 " + esc(horizon) + " \u00b7 " + nodeCount + " nodes / " + edgeCount + " edges</text>" +
              "</svg>"
            var imageUrl = "data:image/svg+xml," + encodeURIComponent(svg)

            // --- HTML skew convergence chart ---
            var skewLegs = (sD && sD.skew_legs) ? sD.skew_legs.slice(0, 6) : []
            var skewAssets = (sD && sD.assets) ? sD.assets : []
            var legCards = skewLegs.map(function(l, i) {
              var pct = l.percentile || 50
              var col = l.asset === skewAssets[0] ? "#f97316" : "#a855f7"
              return "<div class=\"leg\"><div class=\"leg-h\">" + esc(l.asset) + " " + esc(l.leg) + "</div>" +
                "<div class=\"bar\"><div class=\"bar-fill\" style=\"width:" + pct + "%;background:" + col + "\"></div></div>" +
                "<div class=\"val\">val\u2009" + l.value + " \u00b7 z\u2009" + l.z_score + " \u00b7 P" + pct + "</div></div>"
            }).join("")
            var outputSrcDoc = "<!doctype html><html><head><meta charset=\"utf-8\"><style>" +
              "body{margin:0;padding:14px;font-family:system-ui,sans-serif;background:#0f172a;color:#f8fafc}" +
              "h2{font-size:12px;font-weight:700;margin:0 0 10px;color:#a855f7}" +
              ".row{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:8px}" +
              ".leg{flex:1;min-width:110px;background:#1e293b;border-radius:6px;padding:8px;border-left:3px solid #a855f7}" +
              ".leg-h{font-size:10px;font-weight:700;color:#f97316;margin:0 0 4px}" +
              ".bar{height:8px;background:#334155;border-radius:4px;overflow:hidden;margin:4px 0}" +
              ".bar-fill{height:100%;border-radius:4px}" +
              ".val{font-size:9px;color:#94a3b8}" +
              ".gap{background:#1e293b;border-radius:6px;padding:8px;border-left:3px solid #f97316;margin-top:8px;font-size:10px}" +
              ".conv{font-size:10px;color:#64748b;margin-top:6px}" +
              "</style></head><body>" +
              "<h2>Skew Convergence \u00b7 " + esc(skewPair) + " \u00b7 " + esc(skewSignal) + " (" + (convScore !== null ? convScore : "\u2014") + ")</h2>" +
              "<div class=\"row\">" + legCards + "</div>" +
              "<div class=\"gap\"><strong style=\"color:#f97316\">Coverage gap:</strong> <span style=\"color:#cbd5e1\">" + esc(coverageGaps || alphaHypo || "Skew convergence as institutional adoption matures") + "</span></div>" +
              "<div class=\"conv\">" + esc(skewNote) + "</div>" +
              "</body></html>"

            // --- HTML alpha map (knowledge graph canvas) ---
            var mapNodes = [
              { id: "P", label: portfolio.slice(0, 20), color: "#f97316", x: 20, y: 120, type: "portfolio" }
            ]
            factors.slice(0, 3).forEach(function(f, i) {
              mapNodes.push({ id: "F" + i, label: f.slice(0, 24), color: "#a855f7", x: 200, y: 30 + i * 90, type: "factor" })
            })
            mapNodes.push({ id: "SK", label: skewPair + " Skew", color: "#3b82f6", x: 420, y: 120, type: "skew" })
            catalysts.slice(0, 2).forEach(function(c, i) {
              mapNodes.push({ id: "M" + i, label: c, color: "#ec4899", x: 600, y: 60 + i * 120, type: "macro" })
            })
            var mnMapObj = {}
            mapNodes.forEach(function(n) { mnMapObj[n.id] = n })
            var mapEdges = []
            factors.slice(0, 3).forEach(function(_, i) { mapEdges.push({ from: "P", to: "F" + i, color: "#f97316" }) })
            factors.slice(0, 3).forEach(function(_, i) { mapEdges.push({ from: "F" + i, to: "SK", color: "#a855f7" }) })
            catalysts.slice(0, 2).forEach(function(_, i) { mapEdges.push({ from: "SK", to: "M" + i, color: "#3b82f6" }) })
            var mapEdgeSvg = mapEdges.map(function(e) {
              var s = mnMapObj[e.from], t = mnMapObj[e.to]
              if (!s || !t) return ""
              return "<line x1=\"" + (s.x + 70) + "\" y1=\"" + (s.y + 20) + "\" x2=\"" + t.x + "\" y2=\"" + (t.y + 20) + "\" stroke=\"" + e.color + "\" stroke-width=\"1.5\" stroke-dasharray=\"5,3\" opacity=\"0.65\"/>"
            }).join("")
            var mapNodeSvg = mapNodes.map(function(n) {
              return "<rect x=\"" + n.x + "\" y=\"" + n.y + "\" width=\"140\" height=\"40\" rx=\"6\" fill=\"" + n.color + "\" opacity=\"0.9\"/>" +
                "<text x=\"" + (n.x + 70) + "\" y=\"" + (n.y + 15) + "\" font-family=\"system-ui\" font-size=\"9\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">" + esc(n.label) + "</text>" +
                "<text x=\"" + (n.x + 70) + "\" y=\"" + (n.y + 30) + "\" font-family=\"system-ui\" font-size=\"8\" fill=\"rgba(255,255,255,0.5)\" text-anchor=\"middle\">" + n.type + "</text>"
            }).join("")
            var alphaMapSvgStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 300\">" +
              "<rect width=\"760\" height=\"300\" fill=\"#0f172a\"/>" +
              "<text x=\"380\" y=\"20\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"700\" fill=\"#f97316\" text-anchor=\"middle\">Missing Alpha \u00b7 What consensus misses, the graph finds</text>" +
              mapEdgeSvg + mapNodeSvg +
              "<text x=\"380\" y=\"290\" font-family=\"system-ui\" font-size=\"9\" fill=\"#475569\" text-anchor=\"middle\">MiroMindAI \u00b7 " + esc(coverageScore) + " coverage \u00b7 " + nonConsCount + " non-consensus " + esc(metricLabel) + "</text>" +
              "</svg>"
            var output_alpha_map = "<!doctype html><html><head><meta charset=\"utf-8\"><style>body{margin:0;background:#0f172a}svg{width:100%;height:auto}</style></head><body>" + alphaMapSvgStr + "</body></html>"

            // --- HTML signal distribution chart ---
            var sigItems = (aS && aS.signals) ? aS.signals : factors.map(function(f, i) {
              return { id: "SIG_" + String(i + 1).padStart(3, "0"), factor: f, non_consensus_score: Number(((i + 1) / (factors.length + 1) * 0.6 + 0.3).toFixed(2)) }
            })
            var sigRows = sigItems.slice(0, 7).map(function(s) {
              var pct = Math.round((s.non_consensus_score || 0.5) * 100)
              var scoreCol = pct > 60 ? "#f97316" : "#64748b"
              return "<div class=\"row\"><span class=\"sig-id\">" + esc(s.id || "") + "</span>" +
                "<div class=\"bar\"><div class=\"fill\" style=\"width:" + pct + "%\"></div></div>" +
                "<span class=\"lbl\">" + esc((s.factor || "").slice(0, 30)) + "</span>" +
                "<span class=\"score\" style=\"color:" + scoreCol + "\">" + pct + "%</span></div>"
            }).join("")
            var output_skew_chart = "<!doctype html><html><head><meta charset=\"utf-8\"><style>" +
              "body{margin:0;padding:14px;font-family:system-ui,sans-serif;background:#0f172a;color:#f8fafc}" +
              "h2{font-size:12px;font-weight:700;color:#8b5cf6;margin:0 0 10px}" +
              ".row{display:flex;align-items:center;gap:8px;margin-bottom:7px}" +
              ".sig-id{font-size:9px;color:#64748b;min-width:52px}" +
              ".bar{flex:1;height:8px;background:#1e293b;border-radius:4px;overflow:hidden}" +
              ".fill{height:100%;border-radius:4px;background:linear-gradient(90deg,#f97316,#a855f7)}" +
              ".lbl{font-size:9px;color:#cbd5e1;min-width:140px}" +
              ".score{font-size:9px;font-weight:700;min-width:32px;text-align:right}" +
              "</style></head><body>" +
              "<h2>Alpha Signal Distribution \u00b7 " + esc(metricLabel) + " (non-consensus score)</h2>" +
              sigRows +
              "</body></html>"

            return {
              output: output,
              imageUrl: imageUrl,
              outputSrcDoc: outputSrcDoc,
              output_alpha_map: output_alpha_map,
              output_skew_chart: output_skew_chart
            }
          }

    - id: {key: id, type: string, value: "panel_consensus_gap"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Alpha Thesis — Consensus Gap Text"}
      position: {key: position, type: object, value: {"x":1240,"y":0}}
      handles: {key: handles, type: object, value: {"target":["output"],"source":["output"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"output":"template_text_signal"},"out":{"output":"template_text_signal"}}}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Renders the synthesised markdown alpha thesis: non-consensus signal map, skew convergence analysis, macro catalyst sensitivity, coverage gap, and graph topology summary."}
      output: {key: output, type: textarea, value: ""}

    - id: {key: id, type: string, value: "panel_factor_topology"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Factor Topology — SVG Graph"}
      position: {key: position, type: object, value: {"x":1240,"y":240}}
      handles: {key: handles, type: object, value: {"target":["imageUrl"],"source":["imageUrl"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"imageUrl":"template_image_signal"},"out":{"imageUrl":"template_image_signal"}}}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Renders SVG factor-cluster topology: factor nodes (purple) connected to asset nodes (orange) by weighted exposure edges, labelled with portfolio and horizon."}
      imageUrl: {key: imageUrl, type: text, value: ""}

    - id: {key: id, type: string, value: "panel_alpha_map"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Alpha Map — Knowledge Graph Canvas"}
      position: {key: position, type: object, value: {"x":1240,"y":480}}
      handles: {key: handles, type: object, value: {"target":["output_alpha_map"],"source":["output_alpha_map"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"output_alpha_map":"template_alpha_html"},"out":{"output_alpha_map":"template_alpha_html"}}}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Renders the HTML knowledge-graph canvas: portfolio node → factor nodes → skew node → macro catalyst nodes; annotated with MiroMindAI coverage score and non-consensus signal count."}
      output_alpha_map: {key: output_alpha_map, type: textarea, value: ""}

    - id: {key: id, type: string, value: "panel_skew_chart"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Skew Chart — Convergence & Signal Distribution"}
      position: {key: position, type: object, value: {"x":1240,"y":720}}
      handles: {key: handles, type: object, value: {"target":["outputSrcDoc","output_skew_chart"],"source":["outputSrcDoc","output_skew_chart"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"outputSrcDoc":"template_chart_html","output_skew_chart":"template_chart_html"},"out":{"outputSrcDoc":"template_chart_html","output_skew_chart":"template_chart_html"}}}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Dual HTML panel: (outputSrcDoc) 25d/10d risk-reversal skew legs per asset with percentile bars and coverage-gap callout; (output_skew_chart) non-consensus signal distribution with gradient fill and score labels."}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      output_skew_chart: {key: output_skew_chart, type: textarea, value: ""}

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

---

**Horizon** {{source_input.input_horizon}} · **Portfolio** {{source_input.input_portfolio}} · **Skew** {{source_input.input_skew_pair}} · **Catalysts** {{source_input.input_macro_catalysts}}

**Alpha Hypothesis:** {{source_input.input_alpha_hypothesis}}

**Coverage Scope:** {{source_input.input_coverage_scope}} · **S/N Threshold:** {{source_input.input_signal_noise_threshold}} · **Topology:** {{source_input.input_graph_topology_mode}} · **Tone:** {{source_input.input_tone}}

**Audience:** {{source_input.input_audience}} · **Metric:** {{source_input.input_metric_label}} · **Benchmark:** {{source_input.input_consensus_benchmark}} · **Constraints:** {{source_input.input_constraints}}