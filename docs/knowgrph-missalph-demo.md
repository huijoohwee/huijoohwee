---
schema: kgc-computing-flow/v1
id: knowgrph-missing-alpha-flow
doc_type: computing-flow-template
name: Missing Alpha: BTC-Gold Convergence (12–36M Horizon)

description: >
  Missing alpha engine for a 12–36 month 80% BTC / 20% gold portfolio. The flow
  maps ETF flow momentum vs spot premium/discount, cross-asset options skew,
  and macro catalyst (FOMC, CPI) sensitivity. It is designed to surface
  non-consensus graph signals where BTC–gold skew convergence is mispriced as
  institutional adoption matures — what consensus misses, the graph finds.

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
        # — portfolio & horizon —
        input_horizon_months:    {type: number, signal: template_number_signal, min: 12, max: 36}
        input_btc_allocation_pct:{type: number, signal: template_number_signal, min: 0,  max: 100}
        input_gold_allocation_pct:{type: number, signal: template_number_signal, min: 0, max: 100}
        # — ETF flow vs spot —
        input_btc_etf_flow_mom:  {type: number, signal: template_number_signal}   # e.g. \$bn / 4 weeks
        input_gold_etf_flow_mom: {type: number, signal: template_number_signal}
        input_btc_spot_prem_pct: {type: number, signal: template_number_signal, min: -20, max: 20}
        input_gold_spot_prem_pct:{type: number, signal: template_number_signal, min: -20, max: 20}
        # — options skew levels (30D) —
        input_btc_25d_rr_pct:    {type: number, signal: template_number_signal, min: -50, max: 50}
        input_gold_25d_rr_pct:   {type: number, signal: template_number_signal, min: -50, max: 50}
        input_btc_smile_steepness:{type: number, signal: template_number_signal, min: -50, max: 50}
        input_gold_smile_steepness:{type: number, signal: template_number_signal, min: -50, max: 50}
        # — macro signal/noise (FOMC, CPI) —
        input_fomc_beta_btc:     {type: number, signal: template_number_signal, min: -10, max: 10}
        input_fomc_beta_gold:    {type: number, signal: template_number_signal, min: -10, max: 10}
        input_cpi_beta_btc:      {type: number, signal: template_number_signal, min: -10, max: 10}
        input_cpi_beta_gold:     {type: number, signal: template_number_signal, min: -10, max: 10}
        input_macro_signal_noise:{type: number, signal: template_number_signal, min: 0, max: 2}
        # — adoption / structure —
        input_institutional_share_pct:{type: number, signal: template_number_signal, min: 0, max: 100}
        input_desk_risk_aversion:    {type: number, signal: template_number_signal, min: 0, max: 100}

    - id: compute_alpha
      type: ComputeWidget
      in: "source_input.*"
      out:
        output:       {type: markdown,     signal: template_text_signal}
        imageUrl:     {type: svg_data_uri, signal: template_image_signal}
        outputSrcDoc: {type: html_srcdoc,  signal: template_chart_html}
      compute:
        factor_graph: |
          # Normalize portfolio & factor inputs
          w_btc   = clamp(input_btc_allocation_pct/100,  0, 1)
          w_gold  = clamp(input_gold_allocation_pct/100, 0, 1)

          etf_flow_spread    = input_btc_etf_flow_mom − input_gold_etf_flow_mom
          spot_prem_spread   = input_btc_spot_prem_pct − input_gold_spot_prem_pct

          rr_spread_25d      = input_btc_25d_rr_pct − input_gold_25d_rr_pct
          smile_spread       = input_btc_smile_steepness − input_gold_smile_steepness

          fomc_beta_spread   = input_fomc_beta_btc − input_fomc_beta_gold
          cpi_beta_spread    = input_cpi_beta_btc  − input_cpi_beta_gold
          macro_sn           = input_macro_signal_noise

          adoption_level     = input_institutional_share_pct
          desk_risk_bias     = input_desk_risk_aversion

        alpha_signals: |
          # 1. Flow vs spot misalignment (missing flow-risk premium)
          flow_misprice_raw = etf_flow_spread − spot_prem_spread
          flow_misprice     = clamp(flow_misprice_raw/5, −3, 3)

          # 2. Cross-asset skew dislocation (BTC–gold skew gap)
          skew_gap_raw      = rr_spread_25d + 0.35×smile_spread
          skew_gap_z        = clamp(skew_gap_raw/5, −3, 3)

          # 3. Macro mis-hedge (FOMC/CPI beta asymmetry vs signal/noise)
          macro_gap_raw     = (fomc_beta_spread + cpi_beta_spread) × (1 − macro_sn)
          macro_gap_z       = clamp(macro_gap_raw/4, −3, 3)

          # 4. Adoption regime shift (where consensus models break)
          adoption_regime   = piecewise(
                               adoption_level < 30 → 0,
                               adoption_level < 55 → 1,
                               adoption_level < 75 → 2,
                               default             → 3)
          adoption_premium  = {0: 0.0, 1: 0.4, 2: 0.9, 3: 0.6}[adoption_regime]

        scoring: |
          # Graph-based “missing alpha” score
          consensus_blind_spot =
            0.40×abs(skew_gap_z) +
            0.30×abs(flow_misprice) +
            0.20×abs(macro_gap_z) +
            0.10×adoption_premium

          # Down-weight when desks already very conservative (over-hedged)
          risk_overhedge_penalty = desk_risk_bias/150    # ≈ 0–0.66
          missing_alpha_score    = clamp(
                                     (consensus_blind_spot − risk_overhedge_penalty)×22,
                                     0, 100)

          # Direction of trade: BTC vs gold risk skew
          direction_score = clamp(
                              40×sign(flow_misprice) +
                              40×sign(skew_gap_z)   +
                              20×sign(macro_gap_z),
                              −100, 100)

          # Simple labels
          alpha_direction =
            if direction_score >  20 → "BTC risk premium too cheap vs gold"
            if direction_score < −20 → "Gold hedges too rich vs BTC"
            else                     → "Ambiguous cross-asset skew"

        decision_rules: |
          decision =
            if missing_alpha_score ≥ 75 AND alpha_direction == "BTC risk premium too cheap vs gold"
              → "GO: Overweight BTC convexity vs gold"
            elif missing_alpha_score ≥ 55
              → "CONDITIONAL GO: Phase-in skew convergence trade"
            else
              → "NO-GO: Consensus fairly priced"

        output_contract:
          output: >
            ## {decision}

            ### Missing Alpha Summary
            - Horizon: {input_horizon_months} months
            - Portfolio: BTC {input_btc_allocation_pct}% / Gold {input_gold_allocation_pct}%
            - Missing-alpha score: {missing_alpha_score}/100
            - Cross-asset view: {alpha_direction}

            ### Factor Graph: What Consensus Misses, the Graph Finds
            1. **ETF Flow vs Spot Premium/Discount**
               - BTC ETF flow momentum: {input_btc_etf_flow_mom} (vs gold {input_gold_etf_flow_mom})
               - BTC spot premium: {input_btc_spot_prem_pct}% vs gold {input_gold_spot_prem_pct}%
               - Flow–spot gap (graph): {flow_misprice_raw} → normalized {flow_misprice}
               - Interpretation: When flows outrun BTC spot premium but gold holds flat,
                 consensus underprices BTC’s structural bid; the graph flags this as
                 latent long-vol BTC / short-vol gold carry.

            2. **Options Skew Divergence (BTC vs Gold)**
               - BTC 25Δ risk reversal: {input_btc_25d_rr_pct}% vs gold {input_gold_25d_rr_pct}%
               - Smile steepness spread (BTC–gold): {smile_spread}
               - Skew gap (graph): {skew_gap_raw} → Z-score {skew_gap_z}
               - Interpretation: Desks model BTC skew as idiosyncratic “tech beta”; the
                 graph links it to gold’s tail hedge regime. As institutional occupancy
                 rises, BTC skew mean-reverts toward gold’s macro hedge template —
                 a convergence consensus models ignore.

            3. **Macro Catalyst Sensitivity (FOMC / CPI)**
               - FOMC beta: BTC {input_fomc_beta_btc}, gold {input_fomc_beta_gold}
               - CPI beta:  BTC {input_cpi_beta_btc},  gold {input_cpi_beta_gold}
               - Macro signal/noise: {macro_sn}
               - Macro mis-hedge Z-score: {macro_gap_z}
               - Interpretation: At low signal/noise, desks overpay for gold protection
                 and underpay for BTC tails, assuming BTC is “risk-on only”. The graph
                 shows BTC’s beta bending toward “macro hedge with growth optionality”
                 as adoption matures.

            4. **Adoption Regime & Desk Behaviour**
               - Institutional share of BTC: {adoption_level}%
               - Regime bucket: {adoption_regime}
               - Desk risk aversion: {desk_risk_bias}/100
               - Interpretation: Above ~55% institutional share, BTC options liquidity
                 deepens and skew co-moves with gold. Most risk engines still calibrate
                 to pre-ETF retail regimes, systematically lagging regime shifts.

            ### Contrarian Implementation (12–36M)
            - **Core allocation**: Maintain 80% BTC / 20% gold.
            - **Skew convergence overlay (when decision ≠ NO-GO)**:
              - Long BTC 25Δ puts and 25Δ call spreads around macro events.
              - Finance part of BTC vol by:
                - Short gold 25Δ puts when skew_gap_z > 0 (gold hedges rich vs BTC).
                - Or short gold call spreads when macro_gap_z < 0 but flow_misprice > 0.
            - **Trigger band**:
              - Activate overlay when:
                - |skew_gap_z| ≥ 1 **and**
                - |flow_misprice| ≥ 0.7 **and**
                - adoption_regime ≥ 2 (institutional share ≳ 55%).
            - **Risk brakes**:
              - Cut overlay when direction_score flips sign or missing_alpha_score < 40.
              - Size options risk so max portfolio drawdown from overlay ≤ 20%.

            ### What Options Desks Systematically Miss
            1. **Regime-dependent correlation**:
               - They assume BTC–gold skew correlation is unstable noise.
               - The graph conditions on adoption_regime and macro_sn and finds a
                 sharp rise in correlation once institutions dominate, turning BTC
                 into a “levered macro hedge” rather than a pure risk asset.

            2. **Liquidity elasticity asymmetry**:
               - Desk models import gold-style liquidity assumptions into BTC.
               - In practice, BTC vol supply scales faster with macro demand;
                 this makes BTC tails cheaper precisely when gold tails are bid.

            3. **Gamma timing around macro prints**:
               - BTC gamma builds earlier and decays faster around FOMC/CPI than
                 gold. Desks hedge on gold calendars; the graph shows that the
                 optimal BTC–gold overlay is shorter-dated and more dynamic.

            4. **Flow/spot/vol triangle**:
               - Human desk views: three separate dashboards.
               - Graph view: a single factor triangle where persistent BTC ETF
                 inflows with muted spot premium and elevated gold skew is a
                 repeatable non-consensus pattern that precedes BTC–gold skew
                 convergence.

            ### Next Diligence Steps
            - Backtest the factor graph across previous macro tightening/easing
              cycles to calibrate thresholds per venue.
            - Stress test portfolio P&L under:
              - Re-steepening of BTC skew without adoption progression.
              - Sharp gold rally on non-crypto macro shock.
            - Instrument mapping:
              - Spot/futures: BTC, XAU.
              - Options: BTC 1–3M tenors vs gold 1–6M; focus on 15–35Δ wings.
              - ETF proxies as liquidity constraints require.

            The engine is designed to be updated with live inputs; as adoption and
            macro regimes shift, the factor graph recomputes missing-alpha score
            and direction, keeping the 80/20 BTC–gold portfolio aligned with
            where consensus risk models are slowest to adapt.

          imageUrl: >
            SVG data URI: missing-alpha score gauge · BTC–gold skew gap vs adoption
            regime timeline · flow–spot–vol triangle chart.

          outputSrcDoc: >
            Self-contained HTML + Recharts: interactive graph of ETF flows, skew gap,
            macro beta spreads, and adoption regime with overlays for GO /
            CONDITIONAL GO / NO-GO zones.

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
    - {from: "source_input.*",           to: "compute_alpha.*"}
    - {from: "compute_alpha.output",     to: "panel_text_output.output",        type: template_text_signal}
    - {from: "compute_alpha.imageUrl",   to: "panel_image_output.imageUrl",     type: template_image_signal}
    - {from: "compute_alpha.outputSrcDoc", to: "panel_chart_output.outputSrcDoc", type: template_chart_html}
---

## Response

{{compute_alpha.output}}

## Inputs

- Query: {{source_input.input_query}}
- Context: {{source_input.input_context}}
- Audience: {{source_input.input_audience}}
- Format: {{source_input.input_format}}
- Constraints: {{source_input.input_constraints}}
- Evidence: {{source_input.input_evidence}}
- Tone: {{source_input.input_tone}}
- Horizon (months): {{source_input.input_horizon_months}}
- BTC allocation %: {{source_input.input_btc_allocation_pct}}
- Gold allocation %: {{source_input.input_gold_allocation_pct}}
- BTC ETF flow momentum: {{source_input.input_btc_etf_flow_mom}}
- Gold ETF flow momentum: {{source_input.input_gold_etf_flow_mom}}
- BTC spot premium %: {{source_input.input_btc_spot_prem_pct}}
- Gold spot premium %: {{source_input.input_gold_spot_prem_pct}}
- BTC 25Δ risk reversal %: {{source_input.input_btc_25d_rr_pct}}
- Gold 25Δ risk reversal %: {{source_input.input_gold_25d_rr_pct}}
- BTC smile steepness: {{source_input.input_btc_smile_steepness}}
- Gold smile steepness: {{source_input.input_gold_smile_steepness}}
- FOMC beta BTC: {{source_input.input_fomc_beta_btc}}
- FOMC beta gold: {{source_input.input_fomc_beta_gold}}
- CPI beta BTC: {{source_input.input_cpi_beta_btc}}
- CPI beta gold: {{source_input.input_cpi_beta_gold}}
- Macro signal/noise: {{source_input.input_macro_signal_noise}}
- Institutional share %: {{source_input.input_institutional_share_pct}}
- Desk risk aversion: {{source_input.input_desk_risk_aversion}}