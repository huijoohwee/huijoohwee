---
title: "Knowgrph Flow Editor Computing Flow Template"
graphId: "md:knowgrph-flow-editor-computing-flow-template"
doc_type: "Computing Flow Template"
date: "2026-06-03"
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
template_flow_demo:
  schema_version: "computing-flow-template/v1"
  run_id: {key: run_id, type: string, value: "kgcf_template_run"}
  active_graph_mutated: {key: active_graph_mutated, type: boolean, value: false}
  mode: {key: mode, type: string, value: "project-investment-decision-template"}
  input_fields: {key: input_fields, type: array, value: ["input_query","input_context","input_audience","input_format","input_constraints","input_evidence","input_tone","input_metric_label","input_metric_target","input_investment_amount","input_forecast_years","input_initial_revenue","input_revenue_growth_pct","input_operating_margin_pct","input_tax_rate_pct","input_discount_rate_pct","input_terminal_growth_pct","input_terminal_multiple","input_capex_pct_revenue","input_working_capital_pct_revenue","input_probability_success_pct","input_strategic_fit_score","input_execution_risk_score","input_market_risk_score"]}
  output_fields: {key: output_fields, type: array, value: ["output","imageUrl","outputSrcDoc"]}
flow_diagrams:
  key: flow_diagrams
  type: object
  value:
    template_gitgraph:
      key: template_gitgraph
      type: mermaid_gitgraph
      value: |-
        gitGraph
          commit id: "source_input" tag: "decision inputs"
          branch request_contract
          checkout request_contract
          commit id: "input_query" tag: "project"
          commit id: "input_context" tag: "decision"
          commit id: "input_evidence"
          checkout main
          branch dcf_contract
          checkout dcf_contract
          commit id: "input_investment_amount"
          commit id: "input_initial_revenue"
          commit id: "input_revenue_growth_pct"
          commit id: "input_discount_rate_pct"
          commit id: "input_metric_target"
          checkout main
          branch risk_contract
          checkout risk_contract
          commit id: "input_probability_success_pct"
          commit id: "input_strategic_fit_score"
          commit id: "input_execution_risk_score"
          commit id: "input_market_risk_score"
          checkout main
          branch presentation_contract
          checkout presentation_contract
          commit id: "input_audience"
          commit id: "input_format"
          commit id: "input_tone"
          checkout main
          branch guardrail_contract
          checkout guardrail_contract
          commit id: "input_constraints"
          checkout main
          checkout main
          merge request_contract id: "merge_request_contract"
          merge dcf_contract id: "merge_dcf_contract"
          merge risk_contract id: "merge_risk_contract"
          merge presentation_contract id: "merge_presentation_contract"
          merge guardrail_contract id: "merge_guardrail_contract"
          commit id: "compute_summary" tag: "DCF go/no-go" type: HIGHLIGHT
          branch rich_media_panels
          checkout rich_media_panels
          commit id: "panel_text_output"
          commit id: "panel_image_output"
          commit id: "panel_chart_output"
          checkout main
          merge rich_media_panels id: "merge_rich_media_panels"
          commit id: "run_body_tokens" tag: "response"
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
      input_query: {key: input_query, type: textarea, value: "Decide whether to GO, CONDITIONAL GO, or NO-GO on a project investment using project-agnostic DCF, risk, and evidence inputs."}
      input_context: {key: input_context, type: textarea, value: "Evaluate whether a generic project should proceed, pause for more diligence, or stop based on DCF economics, risk, and strategic fit."}
      input_audience: {key: input_audience, type: string, value: "project sponsor, investment committee, operators"}
      input_format: {key: input_format, type: string, value: "structured markdown decision memo"}
      input_constraints: {key: input_constraints, type: textarea, value: "Use supplied assumptions only; state uncertainty; do not present the score as guaranteed performance."}
      input_evidence: {key: input_evidence, type: textarea, value: "Replace with evidence, diligence notes, market data, operating assumptions, and known gaps."}
      input_tone: {key: input_tone, type: string, value: "direct"}
      input_metric_label: {key: input_metric_label, type: string, value: "risk-adjusted NPV threshold"}
      input_metric_target: {key: input_metric_target, type: number, value: 500000}
      input_investment_amount: {key: input_investment_amount, type: number, value: 100000}
      input_forecast_years: {key: input_forecast_years, type: number, value: 5}
      input_initial_revenue: {key: input_initial_revenue, type: number, value: 420000}
      input_revenue_growth_pct: {key: input_revenue_growth_pct, type: number, value: 14}
      input_operating_margin_pct: {key: input_operating_margin_pct, type: number, value: 18}
      input_tax_rate_pct: {key: input_tax_rate_pct, type: number, value: 20}
      input_discount_rate_pct: {key: input_discount_rate_pct, type: number, value: 12}
      input_terminal_growth_pct: {key: input_terminal_growth_pct, type: number, value: 3}
      input_terminal_multiple: {key: input_terminal_multiple, type: number, value: 7}
      input_capex_pct_revenue: {key: input_capex_pct_revenue, type: number, value: 6}
      input_working_capital_pct_revenue: {key: input_working_capital_pct_revenue, type: number, value: 4}
      input_probability_success_pct: {key: input_probability_success_pct, type: number, value: 65}
      input_strategic_fit_score: {key: input_strategic_fit_score, type: number, value: 72}
      input_execution_risk_score: {key: input_execution_risk_score, type: number, value: 45}
      input_market_risk_score: {key: input_market_risk_score, type: number, value: 40}
      handles: {key: handles, type: object, value: {"source":["input_query","input_context","input_audience","input_format","input_constraints","input_evidence","input_tone","input_metric_label","input_metric_target","input_investment_amount","input_forecast_years","input_initial_revenue","input_revenue_growth_pct","input_operating_margin_pct","input_tax_rate_pct","input_discount_rate_pct","input_terminal_growth_pct","input_terminal_multiple","input_capex_pct_revenue","input_working_capital_pct_revenue","input_probability_success_pct","input_strategic_fit_score","input_execution_risk_score","input_market_risk_score"]}}
      "canvas:widgetCard": {key: "canvas:widgetCard", type: object, value: {"previewField":"input_query","previewMaxChars":80,"onEdit":{"trigger":"runDownstream","targets":["compute_summary"]},"actions":[{"id":"edit","label":"Edit","icon":"pencil","trigger":"openFieldEditor","targetField":"input_query"},{"id":"run","label":"Run","icon":"play","trigger":"runDownstream","targets":["compute_summary"]}]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"out":{"input_query":"template_text_signal","input_context":"template_text_signal","input_audience":"template_text_signal","input_format":"template_text_signal","input_constraints":"template_text_signal","input_evidence":"template_text_signal","input_tone":"template_text_signal","input_metric_label":"template_text_signal","input_metric_target":"template_number_signal","input_investment_amount":"template_number_signal","input_forecast_years":"template_number_signal","input_initial_revenue":"template_number_signal","input_revenue_growth_pct":"template_number_signal","input_operating_margin_pct":"template_number_signal","input_tax_rate_pct":"template_number_signal","input_discount_rate_pct":"template_number_signal","input_terminal_growth_pct":"template_number_signal","input_terminal_multiple":"template_number_signal","input_capex_pct_revenue":"template_number_signal","input_working_capital_pct_revenue":"template_number_signal","input_probability_success_pct":"template_number_signal","input_strategic_fit_score":"template_number_signal","input_execution_risk_score":"template_number_signal","input_market_risk_score":"template_number_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "templateInput"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 24}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 24}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Reusable source widget with granular query, context, audience, format, constraints, evidence, tone, metric label, and metric target inputs plus generic project decision context, DCF assumptions, and risk scores."}
      "template:nodeType": {key: "template:nodeType", type: string, value: "input"}
      "visual:importance": {key: "visual:importance", type: number, value: 48}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 22}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 0}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "compute_summary"}
      type: {key: type, type: string, value: "ComputeWidget"}
      label: {key: label, type: string, value: "Compute Summary Outputs"}
      position: {key: position, type: object, value: {"x":380,"y":0}}
      handles: {key: handles, type: object, value: {"target":["input_query","input_context","input_audience","input_format","input_constraints","input_evidence","input_tone","input_metric_label","input_metric_target","input_investment_amount","input_forecast_years","input_initial_revenue","input_revenue_growth_pct","input_operating_margin_pct","input_tax_rate_pct","input_discount_rate_pct","input_terminal_growth_pct","input_terminal_multiple","input_capex_pct_revenue","input_working_capital_pct_revenue","input_probability_success_pct","input_strategic_fit_score","input_execution_risk_score","input_market_risk_score"],"source":["output","imageUrl","outputSrcDoc"]}}
      "canvas:runAction": {key: "canvas:runAction", type: object, value: {"fn":"compute","inputs":["input_query","input_context","input_audience","input_format","input_constraints","input_evidence","input_tone","input_metric_label","input_metric_target","input_investment_amount","input_forecast_years","input_initial_revenue","input_revenue_growth_pct","input_operating_margin_pct","input_tax_rate_pct","input_discount_rate_pct","input_terminal_growth_pct","input_terminal_multiple","input_capex_pct_revenue","input_working_capital_pct_revenue","input_probability_success_pct","input_strategic_fit_score","input_execution_risk_score","input_market_risk_score"],"outputs":["output","imageUrl","outputSrcDoc"],"updateBody":true,"bodyTokens":[{"token":"compute_summary.output","field":"output"},{"token":"compute_summary.imageUrl","field":"imageUrl"},{"token":"compute_summary.outputSrcDoc","field":"outputSrcDoc"},{"token":"source_input.input_query","field":"input_query"},{"token":"source_input.input_context","field":"input_context"},{"token":"source_input.input_audience","field":"input_audience"},{"token":"source_input.input_format","field":"input_format"},{"token":"source_input.input_constraints","field":"input_constraints"},{"token":"source_input.input_evidence","field":"input_evidence"},{"token":"source_input.input_tone","field":"input_tone"},{"token":"source_input.input_metric_label","field":"input_metric_label"},{"token":"source_input.input_metric_target","field":"input_metric_target"},{"token":"source_input.input_investment_amount","field":"input_investment_amount"},{"token":"source_input.input_forecast_years","field":"input_forecast_years"},{"token":"source_input.input_initial_revenue","field":"input_initial_revenue"},{"token":"source_input.input_revenue_growth_pct","field":"input_revenue_growth_pct"},{"token":"source_input.input_operating_margin_pct","field":"input_operating_margin_pct"},{"token":"source_input.input_tax_rate_pct","field":"input_tax_rate_pct"},{"token":"source_input.input_discount_rate_pct","field":"input_discount_rate_pct"},{"token":"source_input.input_terminal_growth_pct","field":"input_terminal_growth_pct"},{"token":"source_input.input_terminal_multiple","field":"input_terminal_multiple"},{"token":"source_input.input_capex_pct_revenue","field":"input_capex_pct_revenue"},{"token":"source_input.input_working_capital_pct_revenue","field":"input_working_capital_pct_revenue"},{"token":"source_input.input_probability_success_pct","field":"input_probability_success_pct"},{"token":"source_input.input_strategic_fit_score","field":"input_strategic_fit_score"},{"token":"source_input.input_execution_risk_score","field":"input_execution_risk_score"},{"token":"source_input.input_market_risk_score","field":"input_market_risk_score"}],"sideEffects":[{"field":"run_status","set":"done"},{"field":"template_flow_demo.active_graph_mutated","set":true},{"field":"template_flow_demo.run_id","pattern":"kgcf_run_yyyyMMddHHmm"}]}}
      "canvas:widgetCard": {key: "canvas:widgetCard", type: object, value: {"statusField":"run_status","statusValues":{"idle":"gray","running":"amber","done":"green","error":"red"},"previewField":"output","previewMaxChars":100,"actions":[{"id":"run","label":"Run","icon":"play","primary":true,"trigger":"compute"},{"id":"reset","label":"Reset","icon":"refresh","trigger":"clearOutputs","clearFields":["output","imageUrl","outputSrcDoc"]}]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"input_query":"template_text_signal","input_context":"template_text_signal","input_audience":"template_text_signal","input_format":"template_text_signal","input_constraints":"template_text_signal","input_evidence":"template_text_signal","input_tone":"template_text_signal","input_metric_label":"template_text_signal","input_metric_target":"template_number_signal","input_investment_amount":"template_number_signal","input_forecast_years":"template_number_signal","input_initial_revenue":"template_number_signal","input_revenue_growth_pct":"template_number_signal","input_operating_margin_pct":"template_number_signal","input_tax_rate_pct":"template_number_signal","input_discount_rate_pct":"template_number_signal","input_terminal_growth_pct":"template_number_signal","input_terminal_multiple":"template_number_signal","input_capex_pct_revenue":"template_number_signal","input_working_capital_pct_revenue":"template_number_signal","input_probability_success_pct":"template_number_signal","input_strategic_fit_score":"template_number_signal","input_execution_risk_score":"template_number_signal","input_market_risk_score":"template_number_signal"},"out":{"output":"template_text_signal","imageUrl":"template_image_signal","outputSrcDoc":"template_chart_html"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "templateCompute"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 27}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 24}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 3}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      imageUrl: {key: imageUrl, type: svg_data_uri, value: ""}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Compute widget with semantic ports for granular inputs, generic DCF, risk-adjusted NPV, go/no-go status, SVG summary, and D3 chart srcdoc for Rich Media Panels."}
      output: {key: output, type: markdown, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: html_srcdoc, value: ""}
      run_status: {key: run_status, type: string, value: "idle"}
      "template:nodeType": {key: "template:nodeType", type: string, value: "compute"}
      "visual:importance": {key: "visual:importance", type: number, value: 60}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 23.856406460551018}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
      compute:
        key: compute
        type: string
        value: |
          inputs => {
            const read = key => String(inputs?.[key] ?? "").trim()
            const readNumber = (key, fallback, min, max) => {
              const parsed = Number(read(key))
              const safe = Number.isFinite(parsed) ? parsed : fallback
              const lower = Number.isFinite(min) ? Math.max(min, safe) : safe
              return Number.isFinite(max) ? Math.min(max, lower) : lower
            }
            const escapeHtml = value => String(value || "").replace(/[&<>"']/g, ch => {
              if (ch === "&") return "&amp;"
              if (ch === "<") return "&lt;"
              if (ch === ">") return "&gt;"
              if (ch.charCodeAt(0) === 34) return "&quot;"
              return "&#39;"
            })
            const money = value => {
              const amount = Math.round(Number(value) || 0)
              return (amount < 0 ? "-" : "") + "$" + Math.abs(amount).toLocaleString("en-US")
            }
            const percent = value => Math.round((Number(value) || 0) * 10) / 10 + "%"
            const query = read("input_query")
            const context = read("input_context")
            const audience = read("input_audience")
            const format = read("input_format")
            const constraints = read("input_constraints")
            const evidence = read("input_evidence")
            const tone = read("input_tone")
            const metricLabel = read("input_metric_label") || "risk-adjusted NPV threshold"
            const metricTarget = readNumber("input_metric_target", 250000, 1, null)
            const investment = readNumber("input_investment_amount", 1200000, 0, null)
            const forecastYears = Math.round(readNumber("input_forecast_years", 5, 1, 15))
            const initialRevenue = readNumber("input_initial_revenue", 420000, 0, null)
            const revenueGrowthPct = readNumber("input_revenue_growth_pct", 14, -80, 200)
            const operatingMarginPct = readNumber("input_operating_margin_pct", 18, -100, 100)
            const taxRatePct = readNumber("input_tax_rate_pct", 20, 0, 60)
            const discountRatePct = readNumber("input_discount_rate_pct", 12, 0.1, 80)
            const terminalGrowthPct = readNumber("input_terminal_growth_pct", 3, -20, 20)
            const terminalMultiple = readNumber("input_terminal_multiple", 7, 0, 50)
            const capexPctRevenue = readNumber("input_capex_pct_revenue", 6, 0, 100)
            const workingCapitalPctRevenue = readNumber("input_working_capital_pct_revenue", 4, 0, 100)
            const probabilitySuccessPct = readNumber("input_probability_success_pct", 65, 0, 100)
            const strategicFitScore = readNumber("input_strategic_fit_score", 72, 0, 100)
            const executionRiskScore = readNumber("input_execution_risk_score", 45, 0, 100)
            const marketRiskScore = readNumber("input_market_risk_score", 40, 0, 100)
            const discountRate = discountRatePct / 100
            const terminalGrowth = terminalGrowthPct / 100
            const probability = probabilitySuccessPct / 100
            const rows = []
            let revenue = initialRevenue
            let pvTotal = 0
            for (let year = 1; year <= forecastYears; year += 1) {
              if (year > 1) revenue = revenue * (1 + revenueGrowthPct / 100)
              const operatingProfit = revenue * operatingMarginPct / 100
              const tax = Math.max(0, operatingProfit) * taxRatePct / 100
              const capex = revenue * capexPctRevenue / 100
              const workingCapital = revenue * workingCapitalPctRevenue / 100
              const freeCashFlow = operatingProfit - tax - capex - workingCapital
              const discountedFreeCashFlow = freeCashFlow / Math.pow(1 + discountRate, year)
              pvTotal += discountedFreeCashFlow
              rows.push({ year, revenue, freeCashFlow, discountedFreeCashFlow })
            }
            const terminalBase = rows.length ? rows[rows.length - 1].freeCashFlow : 0
            const terminalValueByMultiple = terminalBase * terminalMultiple
            const terminalValueByGrowth = discountRate > terminalGrowth
              ? terminalBase * (1 + terminalGrowth) / (discountRate - terminalGrowth)
              : terminalValueByMultiple
            const terminalValue = terminalMultiple > 0 ? terminalValueByMultiple : terminalValueByGrowth
            const terminalPv = terminalValue / Math.pow(1 + discountRate, forecastYears)
            const baseNpv = pvTotal + terminalPv - investment
            const riskAdjustedNpv = baseNpv * probability
            const riskPenalty = (executionRiskScore * 0.55) + (marketRiskScore * 0.45)
            const npvScore = Math.max(0, Math.min(100, 50 + (riskAdjustedNpv - metricTarget) / Math.max(metricTarget, 1) * 50))
            const decisionScore = Math.round((npvScore * 0.45) + (strategicFitScore * 0.3) + ((100 - riskPenalty) * 0.25))
            const decision = riskAdjustedNpv >= metricTarget && decisionScore >= 70
              ? "GO"
              : riskAdjustedNpv >= metricTarget * 0.5 && decisionScore >= 55
                ? "CONDITIONAL GO"
                : "NO-GO"
            const sensitivity = [
              { label: "Downside", npv: baseNpv * 0.72 * probability, score: Math.max(0, decisionScore - 18) },
              { label: "Base", npv: riskAdjustedNpv, score: decisionScore },
              { label: "Upside", npv: baseNpv * 1.28 * probability, score: Math.min(100, decisionScore + 14) }
            ]
            const output = [
              "## " + decision,
              "",
              query || "Structured project investment decision.",
              "",
              "**Decision score:** " + decisionScore + "/100",
              "**" + metricLabel + ":** " + money(metricTarget),
              "**Risk-adjusted NPV:** " + money(riskAdjustedNpv),
              "**Base DCF NPV:** " + money(baseNpv),
              "",
              "### DCF assumptions",
              "- Initial investment: " + money(investment),
              "- Forecast years: " + forecastYears,
              "- Initial revenue: " + money(initialRevenue),
              "- Revenue growth: " + percent(revenueGrowthPct),
              "- Operating margin: " + percent(operatingMarginPct),
              "- Discount rate: " + percent(discountRatePct),
              "- Terminal multiple: " + terminalMultiple + "x",
              "",
              "### Risk and evidence",
              "- Probability of success: " + percent(probabilitySuccessPct),
              "- Strategic fit score: " + Math.round(strategicFitScore) + "/100",
              "- Execution risk score: " + Math.round(executionRiskScore) + "/100",
              "- Market risk score: " + Math.round(marketRiskScore) + "/100",
              evidence ? "- Evidence: " + evidence : "- Evidence: Replace placeholder evidence before relying on the decision.",
              constraints ? "- Constraints: " + constraints : "",
              "",
              "### Next diligence",
              "- Validate the revenue base, margin bridge, capex, and working-capital assumptions.",
              "- Stress-test downside demand and delayed execution before approving spend.",
              "- Treat this as decision support, not a guarantee of project performance.",
              "",
              audience ? "**Audience:** " + audience : "",
              format ? "**Format:** " + format : "",
              tone ? "**Tone:** " + tone : "",
              context ? "**Context:** " + context : ""
            ].filter(Boolean).join("\n")
            const title = decision + " - " + money(riskAdjustedNpv) + " risk-adjusted NPV"
            const svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 200\">" +
              "<rect width=\"640\" height=\"200\" fill=\"#f8fafc\"/>" +
              "<text x=\"320\" y=\"68\" font-family=\"system-ui\" font-size=\"24\" font-weight=\"700\" fill=\"#0f172a\" text-anchor=\"middle\">" + escapeHtml(decision) + "</text>" +
              "<text x=\"320\" y=\"108\" font-family=\"system-ui\" font-size=\"14\" fill=\"#475569\" text-anchor=\"middle\">Risk-adjusted NPV " + escapeHtml(money(riskAdjustedNpv)) + " vs " + escapeHtml(String(metricTarget)) + " target</text>" +
              "<text x=\"320\" y=\"142\" font-family=\"system-ui\" font-size=\"12\" fill=\"#64748b\" text-anchor=\"middle\">Decision score " + decisionScore + "/100 - " + escapeHtml(metricLabel) + "</text>" +
              "</svg>"
            const imageUrl = "data:image/svg+xml," + encodeURIComponent(svg)
            const chartRows = rows.map(row => ({
              year: row.year,
              revenue: Math.round(row.revenue),
              freeCashFlow: Math.round(row.freeCashFlow),
              discountedFreeCashFlow: Math.round(row.discountedFreeCashFlow)
            }))
            const chartJson = JSON.stringify({ rows: chartRows, sensitivity, metricTarget, decision, title }).replace(/</g, "\\u003c")
            const outputSrcDoc = "<!doctype html><html><head><meta charset=utf-8>" +
              "<script src=\"https://cdn.jsdelivr.net/npm/d3@7\"></" + "script>" +
              "<style>body{margin:0;padding:16px;font-family:system-ui,sans-serif;background:#f8fafc;color:#0f172a}.kpi{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-bottom:12px}.kpi div{background:white;border:1px solid #e2e8f0;border-radius:8px;padding:8px}.label{margin:0 0 4px;font-size:11px;color:#64748b}.value{margin:0;font-size:15px;font-weight:700}.chart{height:240px}.note{font-size:12px;color:#64748b;margin:8px 0 0}.axis text{fill:#64748b;font-size:10px}.axis path,.axis line{stroke:#cbd5e1}.line{fill:none;stroke-width:2.5}</style>" +
              "</head><body><div class=kpi><div><p class=label>Decision</p><p class=value>" + escapeHtml(decision) + "</p></div><div><p class=label>Risk-adjusted NPV</p><p class=value>" + escapeHtml(money(riskAdjustedNpv)) + "</p></div><div><p class=label>Threshold</p><p class=value>" + escapeHtml(String(metricTarget)) + " target</p></div></div><svg id=chart class=chart viewBox=\"0 0 640 240\"></svg><p class=note>D3 Rich Media Panel: revenue, free cash flow, discounted free cash flow, and scenario NPV. Replace sample assumptions before use.</p>" +
              "<script>const payload=" + chartJson + ";(function(){const svg=d3.select('#chart');const rows=payload.rows;const margin={top:12,right:18,bottom:32,left:58};const width=640-margin.left-margin.right;const height=220-margin.top-margin.bottom;const g=svg.append('g').attr('transform','translate('+margin.left+','+margin.top+')');const x=d3.scalePoint().domain(rows.map(d=>String(d.year))).range([0,width]).padding(.35);const y=d3.scaleLinear().domain([0,d3.max(rows,d=>Math.max(d.revenue,d.freeCashFlow,d.discountedFreeCashFlow,payload.metricTarget))||1]).nice().range([height,0]);g.append('g').attr('class','axis').attr('transform','translate(0,'+height+')').call(d3.axisBottom(x).tickFormat(d=>'Y'+d));g.append('g').attr('class','axis').call(d3.axisLeft(y).ticks(5).tickFormat(d3.format('~s')));const line=(key,color)=>g.append('path').datum(rows).attr('class','line').attr('stroke',color).attr('d',d3.line().x(d=>x(String(d.year))).y(d=>y(d[key])));line('revenue','#0ea5e9');line('freeCashFlow','#14b8a6');line('discountedFreeCashFlow','#8b5cf6');g.append('line').attr('x1',0).attr('x2',width).attr('y1',y(payload.metricTarget)).attr('y2',y(payload.metricTarget)).attr('stroke','#f59e0b').attr('stroke-dasharray','5 4');const legend=[['Revenue','#0ea5e9'],['FCF','#14b8a6'],['Discounted FCF','#8b5cf6'],['Threshold','#f59e0b']];const lg=svg.append('g').attr('transform','translate(58,232)');legend.forEach((item,i)=>{const x0=i*132;lg.append('rect').attr('x',x0).attr('y',-9).attr('width',9).attr('height',9).attr('fill',item[1]);lg.append('text').attr('x',x0+14).attr('y',0).attr('font-size',11).attr('fill','#475569').text(item[0]);});})()</" + "script></body></html>"
            return { output, imageUrl, outputSrcDoc }
          }
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
      output: {key: output, type: textarea, value: ""}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 1}
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
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
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
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Chart Rich Media Panel receives the outputSrcDoc field."}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -2}
  edges:
    - id: {key: id, type: string, value: "edge_input_query_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_query"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_query"}
      label: {key: label, type: string, value: "input_query"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "edge_input_context_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_context"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_context"}
      label: {key: label, type: string, value: "input_context"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "edge_input_audience_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_audience"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_audience"}
      label: {key: label, type: string, value: "input_audience"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "edge_input_format_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_format"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_format"}
      label: {key: label, type: string, value: "input_format"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "edge_input_constraints_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_constraints"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_constraints"}
      label: {key: label, type: string, value: "input_constraints"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "edge_input_evidence_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_evidence"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_evidence"}
      label: {key: label, type: string, value: "input_evidence"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "edge_input_tone_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_tone"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_tone"}
      label: {key: label, type: string, value: "input_tone"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "edge_input_metric_label_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_metric_label"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_metric_label"}
      label: {key: label, type: string, value: "input_metric_label"}
      type: {key: type, type: string, value: "template_text_signal"}
    - id: {key: id, type: string, value: "edge_input_metric_target_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_metric_target"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_metric_target"}
      label: {key: label, type: string, value: "input_metric_target"}
      type: {key: type, type: string, value: "template_number_signal"}
    - id: {key: id, type: string, value: "edge_input_investment_amount_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_investment_amount"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_investment_amount"}
      label: {key: label, type: string, value: "input_investment_amount"}
      type: {key: type, type: string, value: "template_number_signal"}
    - id: {key: id, type: string, value: "edge_input_forecast_years_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_forecast_years"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_forecast_years"}
      label: {key: label, type: string, value: "input_forecast_years"}
      type: {key: type, type: string, value: "template_number_signal"}
    - id: {key: id, type: string, value: "edge_input_initial_revenue_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_initial_revenue"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_initial_revenue"}
      label: {key: label, type: string, value: "input_initial_revenue"}
      type: {key: type, type: string, value: "template_number_signal"}
    - id: {key: id, type: string, value: "edge_input_revenue_growth_pct_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_revenue_growth_pct"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_revenue_growth_pct"}
      label: {key: label, type: string, value: "input_revenue_growth_pct"}
      type: {key: type, type: string, value: "template_number_signal"}
    - id: {key: id, type: string, value: "edge_input_operating_margin_pct_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_operating_margin_pct"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_operating_margin_pct"}
      label: {key: label, type: string, value: "input_operating_margin_pct"}
      type: {key: type, type: string, value: "template_number_signal"}
    - id: {key: id, type: string, value: "edge_input_tax_rate_pct_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_tax_rate_pct"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_tax_rate_pct"}
      label: {key: label, type: string, value: "input_tax_rate_pct"}
      type: {key: type, type: string, value: "template_number_signal"}
    - id: {key: id, type: string, value: "edge_input_discount_rate_pct_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_discount_rate_pct"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_discount_rate_pct"}
      label: {key: label, type: string, value: "input_discount_rate_pct"}
      type: {key: type, type: string, value: "template_number_signal"}
    - id: {key: id, type: string, value: "edge_input_terminal_growth_pct_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_terminal_growth_pct"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_terminal_growth_pct"}
      label: {key: label, type: string, value: "input_terminal_growth_pct"}
      type: {key: type, type: string, value: "template_number_signal"}
    - id: {key: id, type: string, value: "edge_input_terminal_multiple_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_terminal_multiple"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_terminal_multiple"}
      label: {key: label, type: string, value: "input_terminal_multiple"}
      type: {key: type, type: string, value: "template_number_signal"}
    - id: {key: id, type: string, value: "edge_input_capex_pct_revenue_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_capex_pct_revenue"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_capex_pct_revenue"}
      label: {key: label, type: string, value: "input_capex_pct_revenue"}
      type: {key: type, type: string, value: "template_number_signal"}
    - id: {key: id, type: string, value: "edge_input_working_capital_pct_revenue_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_working_capital_pct_revenue"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_working_capital_pct_revenue"}
      label: {key: label, type: string, value: "input_working_capital_pct_revenue"}
      type: {key: type, type: string, value: "template_number_signal"}
    - id: {key: id, type: string, value: "edge_input_probability_success_pct_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_probability_success_pct"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_probability_success_pct"}
      label: {key: label, type: string, value: "input_probability_success_pct"}
      type: {key: type, type: string, value: "template_number_signal"}
    - id: {key: id, type: string, value: "edge_input_strategic_fit_score_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_strategic_fit_score"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_strategic_fit_score"}
      label: {key: label, type: string, value: "input_strategic_fit_score"}
      type: {key: type, type: string, value: "template_number_signal"}
    - id: {key: id, type: string, value: "edge_input_execution_risk_score_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_execution_risk_score"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_execution_risk_score"}
      label: {key: label, type: string, value: "input_execution_risk_score"}
      type: {key: type, type: string, value: "template_number_signal"}
    - id: {key: id, type: string, value: "edge_input_market_risk_score_to_compute"}
      source: {key: source, type: string, value: "source_input"}
      sourceHandle: {key: sourceHandle, type: string, value: "input_market_risk_score"}
      target: {key: target, type: string, value: "compute_summary"}
      targetHandle: {key: targetHandle, type: string, value: "input_market_risk_score"}
      label: {key: label, type: string, value: "input_market_risk_score"}
      type: {key: type, type: string, value: "template_number_signal"}
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
## Response

{{compute_summary.output}}

## Inputs

- Query: {{source_input.input_query}}
- Context: {{source_input.input_context}}
- Audience: {{source_input.input_audience}}
- Format: {{source_input.input_format}}
- Constraints: {{source_input.input_constraints}}
- Evidence: {{source_input.input_evidence}}
- Tone: {{source_input.input_tone}}
- Metric: {{source_input.input_metric_label}} / {{source_input.input_metric_target}}
- Investment amount: {{source_input.input_investment_amount}}
- Forecast years: {{source_input.input_forecast_years}}
- Initial revenue: {{source_input.input_initial_revenue}}
- Revenue growth %: {{source_input.input_revenue_growth_pct}}
- Operating margin %: {{source_input.input_operating_margin_pct}}
- Tax rate %: {{source_input.input_tax_rate_pct}}
- Discount rate %: {{source_input.input_discount_rate_pct}}
- Terminal growth %: {{source_input.input_terminal_growth_pct}}
- Terminal multiple: {{source_input.input_terminal_multiple}}
- Capex % revenue: {{source_input.input_capex_pct_revenue}}
- Working capital % revenue: {{source_input.input_working_capital_pct_revenue}}
- Probability success %: {{source_input.input_probability_success_pct}}
- Strategic fit score: {{source_input.input_strategic_fit_score}}
- Execution risk score: {{source_input.input_execution_risk_score}}
- Market risk score: {{source_input.input_market_risk_score}}
