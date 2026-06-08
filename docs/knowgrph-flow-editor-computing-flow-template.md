---
schema: kgc-computing-flow/v1
id: knowgrph-flow-editor-computing-flow
doc_type: computing-flow-template
name: Universal Go No-Go Decision Flow
description: >
  DCF + risk-scoring decision flow. Accepts intent, economics, and risk inputs.
  Returns GO / CONDITIONAL GO / NO-GO with three-scenario stress, evidence-quality
  scoring, and structured markdown, SVG, and Recharts HTML outputs.

socket_types:
  template_text_signal:   {accepts: [template_text_signal]}
  template_number_signal: {accepts: [template_number_signal]}
  template_image_signal:  {accepts: [template_image_signal]}
  template_chart_html:    {accepts: [template_chart_html]}

flow:
  direction: LR
  edge_type: smoothstep

  nodes:

    - id: source_input
      type: InputWidget
      out:
        # — intent —
        input_query:         {type: string, signal: template_text_signal}
        input_context:       {type: string, signal: template_text_signal}
        input_audience:      {type: string, signal: template_text_signal}
        input_format:        {type: string, signal: template_text_signal}
        input_constraints:   {type: string, signal: template_text_signal}
        input_evidence:      {type: string, signal: template_text_signal}
        input_tone:          {type: string, signal: template_text_signal}
        # — threshold —
        input_metric_label:  {type: string, signal: template_text_signal}
        input_metric_target: {type: number, signal: template_number_signal}
        # — economics —
        input_investment_amount:           {type: number, signal: template_number_signal}
        input_forecast_years:              {type: number, signal: template_number_signal, min: 1,    max: 15}
        input_initial_revenue:             {type: number, signal: template_number_signal}
        input_revenue_growth_pct:          {type: number, signal: template_number_signal, min: -80,  max: 200}
        input_operating_margin_pct:        {type: number, signal: template_number_signal, min: -100, max: 100}
        input_tax_rate_pct:                {type: number, signal: template_number_signal, min: 0,    max: 60}
        input_discount_rate_pct:           {type: number, signal: template_number_signal, min: 0.1,  max: 80}
        input_terminal_growth_pct:         {type: number, signal: template_number_signal, min: -20,  max: 20}
        input_terminal_multiple:           {type: number, signal: template_number_signal, min: 0,    max: 50}
        input_capex_pct_revenue:           {type: number, signal: template_number_signal, min: 0,    max: 100}
        input_working_capital_pct_revenue: {type: number, signal: template_number_signal, min: 0,    max: 100}
        # — risk —
        input_probability_success_pct: {type: number, signal: template_number_signal, min: 0, max: 100}
        input_strategic_fit_score:     {type: number, signal: template_number_signal, min: 0, max: 100}
        input_execution_risk_score:    {type: number, signal: template_number_signal, min: 0, max: 100}
        input_market_risk_score:       {type: number, signal: template_number_signal, min: 0, max: 100}

    - id: compute_summary
      type: ComputeWidget
      in: "source_input.*"   # all 24 out-ports, same names
      out:
        output:       {type: markdown,     signal: template_text_signal}
        imageUrl:     {type: svg_data_uri, signal: template_image_signal}
        outputSrcDoc: {type: html_srcdoc,  signal: template_chart_html}
      compute:
        scenarios:
          downside: {revenue_factor: 0.82, margin_delta: -4,  prob_delta: -12}
          base:     {revenue_factor: 1.00, margin_delta:  0,  prob_delta:   0}
          upside:   {revenue_factor: 1.18, margin_delta: +4,  prob_delta:  +8}
        dcf: |
          revenue[t] = initial_revenue × revenue_factor × (1 + revenue_growth_pct/100)^(t−1)
          fcf[t]     = revenue[t] × clamp(margin+margin_delta, −100, 100)/100 − tax − capex − wc
          npv        = Σ fcf[t]/(1+r)^t + terminal/(1+r)^T − investment
          terminal   = fcf[T] × terminal_multiple  [Gordon growth when multiple=0 and r>g]
          ra_npv     = npv × probability_pct/100
        scoring: |
          risk_pressure    = clamp(execution_risk×0.55 + market_risk×0.45,               0, 100)
          economics_score  = clamp(50 + (base.ra_npv − target)/target × 55,              0, 100)
          resilience_score = clamp(50 + downside.ra_npv/target × 30,                     0, 100)
          evidence_score   = clamp(signal_count×18 + evidence_bonus×18 + const_bonus×10, 0, 100)
          confidence_score = round(clamp(evidence_score×0.45 + prob_pct×0.55,            0, 100))
          decision_score   = round(economics×0.38 + resilience×0.22 + fit×0.20 + evidence×0.20)
        decision_rules:   # evaluated in order; first match wins
          - "downside.ra_npv < 0 AND risk_pressure > 65                          → NO-GO"
          - "base.ra_npv ≥ target AND downside.ra_npv ≥ 0 AND score ≥ 70        → GO"
          - "base.ra_npv ≥ target×0.55 AND score ≥ 55                           → CONDITIONAL GO"
          - "default                                                              → NO-GO"
        output_contract:
          output:       "## {decision}; rationale; scores table; DCF base case; scenario stress; conditions to clear; next diligence"
          imageUrl:     "SVG data URI: decision label · base ra_npv vs threshold · decision/confidence scores · downside/upside range"
          outputSrcDoc: "self-contained HTML + Recharts: scenario NPV bar chart + decision pillars radar chart"

    - id: panel_text_output
      type: RichMediaPanel
      in: {output: template_text_signal}

    - id: panel_image_output
      type: RichMediaPanel
      in: {imageUrl: template_image_signal}

    - id: panel_chart_output
      type: RichMediaPanel
      in: {outputSrcDoc: template_chart_html}

  edges:
    - {from: "source_input.*",              to: "compute_summary.*"}
    - {from: "compute_summary.output",       to: "panel_text_output.output",        type: template_text_signal}
    - {from: "compute_summary.imageUrl",     to: "panel_image_output.imageUrl",     type: template_image_signal}
    - {from: "compute_summary.outputSrcDoc", to: "panel_chart_output.outputSrcDoc", type: template_chart_html}
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
- Metric label: {{source_input.input_metric_label}}
- Metric target: {{source_input.input_metric_target}}
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