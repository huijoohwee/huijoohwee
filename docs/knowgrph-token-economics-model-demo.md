---
title: "Knowgrph Token Economics Model Demo - Flow Editor Cost Driver Ports"
doc_type: "Flow Editor TCO Demo"
date: "2026-05-29"
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

"renderer:palette":
  nodes:
    idea: "var(--kg-canvas-accent)"
    hypothesis: "#f59e0b"
    execution: "#22c55e"
    pivot: "#f97316"
    alert: "#ef4444"
  edges:
    critical: "#ef4444"
    neutral: "#9CA3AF"

socket_types:
  demand_driver_signal: {color: "#f59e0b", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [demand_driver_signal]}
  platform_cost_signal: {color: "#22c55e", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [platform_cost_signal]}
  token_risk_signal: {color: "#ef4444", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [token_risk_signal]}
  stack_tco_metric: {color: "#f97316", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [stack_tco_metric]}
  revenue_driver_signal: {color: "var(--kg-canvas-accent)", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [revenue_driver_signal]}
  revenue_metric_signal: {color: "#22c55e", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [revenue_metric_signal]}
  journey_driver_signal: {color: "var(--kg-canvas-accent)", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [journey_driver_signal]}
  prediction_engine_signal: {color: "#f59e0b", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [prediction_engine_signal]}
  yield_engine_signal: {color: "#22c55e", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [yield_engine_signal]}
  payment_engine_signal: {color: "var(--kg-canvas-accent)", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [payment_engine_signal]}
  liquidity_exchange_signal: {color: "#f97316", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [liquidity_exchange_signal]}
  infrastructure_engine_signal: {color: "#9CA3AF", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [infrastructure_engine_signal]}
  closed_loop_signal: {color: "#f97316", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [closed_loop_signal]}
  decision_driver_signal: {color: "#9CA3AF", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [decision_driver_signal]}
  rich_media_chart_html: {color: "var(--kg-canvas-accent)", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [rich_media_chart_html]}

workflow_sections:
  - id: wf_ingest_drivers
    title: "Ingest demand, platform, token, and revenue drivers"
    nodes: [workload_drivers, shared_platform_drivers, token_exposure_drivers, revenue_drivers]
  - id: wf_calculate_stack_costs
    title: "Calculate per-stack TCO from typed cost-driver ports"
    nodes: [fetch_agentverse_tco, elizaos_ai16z_tco, virtuals_game_tco]
  - id: wf_simulate_revenue_margin
    title: "Simulate revenue, cost, net margin, and break-even path"
    nodes: [revenue_calculator, tco_calculator]
  - id: wf_web3_closed_user_journey
    title: "Evaluate the Web3 economics closed user journey value loop"
    nodes: [web3_economics_drivers, prediction_engine, yield_engine, payment_engine, liquidity_exchange_engine, infrastructure_engine, closed_value_loop]
  - id: wf_render_decision
    title: "Render ranked decision drivers and chart payload"
    nodes: [decision_ranking, tco_chart_panel, value_loop_chart_panel]

flow:
  direction: LR
  edgeType: smoothstep
  snapToGrid: true
  computed: true
  aspectRatio: "16:9"
  targetResolution: "1920x1080"
  portHandleContract: "Every widget handle is named after a TCO, Web3 economics, user-journey, engine, metric, or decision driver."
  nodes:
    - id: workload_drivers
      type: CostDriverWidget
      label: "Workload Cost Drivers"
      position: {x: 80, y: 120}
      size: {width: 320, height: 190}
      handles:
        source: [monthly_agent_requests, avg_tool_calls_per_request, avg_tokens_per_request, retry_rate]
      tags: [hypothesis]
      "visual:fill": "#f59e0b"
      "visual:stroke": "#9CA3AF"
      "flow:widgetFormId": "fm:workload_drivers"
      "flow:portTypes":
        out:
          monthly_agent_requests: demand_driver_signal
          avg_tool_calls_per_request: demand_driver_signal
          avg_tokens_per_request: demand_driver_signal
          retry_rate: demand_driver_signal
      monthly_agent_requests: 10000
      avg_tool_calls_per_request: 1
      avg_tokens_per_request: "bring-your-own model meter"
      retry_rate: "tracked as risk, not baked into quoted platform fee"
      driver_group: "demand"
    - id: shared_platform_drivers
      type: CostDriverWidget
      label: "Shared Platform Drivers"
      position: {x: 80, y: 390}
      size: {width: 320, height: 240}
      handles:
        source: [platform_subscription_usd, platform_unit_call_cost_usd, managed_hosting_required, model_provider_fee_usd, social_api_rpc_data_api_fees, ops_hours]
      tags: [execution]
      "visual:fill": "#22c55e"
      "visual:stroke": "#9CA3AF"
      "flow:widgetFormId": "fm:shared_platform_drivers"
      "flow:portTypes":
        out:
          platform_subscription_usd: platform_cost_signal
          platform_unit_call_cost_usd: platform_cost_signal
          managed_hosting_required: platform_cost_signal
          model_provider_fee_usd: platform_cost_signal
          social_api_rpc_data_api_fees: platform_cost_signal
          ops_hours: platform_cost_signal
      platform_subscription_usd: "0-25+ depending on stack and quota"
      platform_unit_call_cost_usd: "0.003 when using Virtuals GAME paid tier"
      managed_hosting_required: "true for managed demo, false for self-host baseline"
      model_provider_fee_usd: "explicit external meter"
      social_api_rpc_data_api_fees: "external API meter"
      ops_hours: "excluded from cash floor, scored separately"
      driver_group: "platform"
    - id: token_exposure_drivers
      type: CostDriverWidget
      label: "Token Exposure Drivers"
      position: {x: 80, y: 700}
      size: {width: 320, height: 210}
      handles:
        source: [onchain_token_launch_required, token_setup_exposure, onchain_gas_and_token_fees, token_price_volatility]
      tags: [alert]
      "visual:fill": "#ef4444"
      "visual:stroke": "#9CA3AF"
      "flow:widgetFormId": "fm:token_exposure_drivers"
      "flow:portTypes":
        out:
          onchain_token_launch_required: token_risk_signal
          token_setup_exposure: token_risk_signal
          onchain_gas_and_token_fees: token_risk_signal
          token_price_volatility: token_risk_signal
      onchain_token_launch_required: "only when tokenized agent launch is required"
      token_setup_exposure: "kept token-denominated"
      onchain_gas_and_token_fees: "chain and wallet dependent"
      token_price_volatility: "risk driver, kept token-denominated"
      driver_group: "web3"
    - id: revenue_drivers
      type: RevenueDriverWidget
      label: "Revenue Drivers"
      position: {x: 80, y: 990}
      size: {width: 320, height: 250}
      handles:
        source: [monthly_active_users, paid_conversion_rate, subscription_price_usd, marketplace_gmv_usd, agent_token_take_rate, support_refund_rate]
      tags: [idea]
      "visual:fill": "var(--kg-canvas-accent)"
      "visual:stroke": "#9CA3AF"
      "flow:widgetFormId": "fm:revenue_drivers"
      "flow:portTypes":
        out:
          monthly_active_users: revenue_driver_signal
          paid_conversion_rate: revenue_driver_signal
          subscription_price_usd: revenue_driver_signal
          marketplace_gmv_usd: revenue_driver_signal
          agent_token_take_rate: revenue_driver_signal
          support_refund_rate: revenue_driver_signal
      monthly_active_users: 2500
      paid_conversion_rate: 0.03
      subscription_price_usd: 19
      marketplace_gmv_usd: 10000
      agent_token_take_rate: 0.005
      support_refund_rate: 0.12
      driver_group: "revenue"
    - id: web3_economics_drivers
      type: Web3EconomicsDriverWidget
      label: "Web3 Economics Drivers"
      position: {x: 80, y: 1300}
      size: {width: 340, height: 280}
      handles:
        source: [prediction_accuracy_rate, wallet_activation_rate, yield_share_rate, payment_success_rate, payment_fee_rate, liquidity_spread_rate, exchange_conversion_rate, infrastructure_uptime_slo, infrastructure_unit_cost_usd]
      tags: [idea]
      "visual:fill": "var(--kg-canvas-accent)"
      "visual:stroke": "#9CA3AF"
      "flow:widgetFormId": "fm:web3_economics_drivers"
      "flow:portTypes":
        out:
          prediction_accuracy_rate: journey_driver_signal
          wallet_activation_rate: journey_driver_signal
          yield_share_rate: journey_driver_signal
          payment_success_rate: journey_driver_signal
          payment_fee_rate: journey_driver_signal
          liquidity_spread_rate: journey_driver_signal
          exchange_conversion_rate: journey_driver_signal
          infrastructure_uptime_slo: journey_driver_signal
          infrastructure_unit_cost_usd: journey_driver_signal
      prediction_accuracy_rate: 0.68
      wallet_activation_rate: 0.42
      yield_share_rate: 0.18
      payment_success_rate: 0.97
      payment_fee_rate: 0.012
      liquidity_spread_rate: 0.008
      exchange_conversion_rate: 0.74
      infrastructure_uptime_slo: 0.995
      infrastructure_unit_cost_usd: 0.0004
      driver_group: "web3_economics"
    - id: fetch_agentverse_tco
      type: TcoStackWidget
      label: "Fetch.ai / Agentverse TCO"
      position: {x: 520, y: 110}
      size: {width: 360, height: 240}
      handles:
        target: [monthly_agent_requests, platform_subscription_usd, managed_hosting_required, model_provider_fee_usd, onchain_gas_and_token_fees]
        source: [fetch_monthly_tco_usd, fetch_quota_risk, fetch_tco_score]
      tags: [execution]
      "visual:fill": "#22c55e"
      "visual:stroke": "#9CA3AF"
      "flow:widgetFormId": "fm:fetch_agentverse_tco"
      "flow:portTypes":
        in:
          monthly_agent_requests: demand_driver_signal
          platform_subscription_usd: platform_cost_signal
          managed_hosting_required: platform_cost_signal
          model_provider_fee_usd: platform_cost_signal
          onchain_gas_and_token_fees: token_risk_signal
        out:
          fetch_monthly_tco_usd: stack_tco_metric
          fetch_quota_risk: token_risk_signal
          fetch_tco_score: stack_tco_metric
      compute: |
        inputs => {
          const n = v => {
            const m = String(v ?? '').match(/-?[0-9]+(?:\.[0-9]+)?/);
            const x = m ? Number(m[0]) : Number(v);
            return Number.isFinite(x) ? x : 0;
          };
          const req = n(inputs.monthly_agent_requests);
          const sub = req <= 10000 ? 0 : 25;
          const total = sub + n(inputs.model_provider_fee_usd) + n(inputs.onchain_gas_and_token_fees);
          return {
            fetch_monthly_tco_usd: Math.round(total * 100) / 100,
            fetch_quota_risk: req <= 10000 ? 'Basic quota fit at current request load' : 'Premium quota needed at current request load',
            fetch_tco_score: total <= 25 ? 'predictable low managed cash floor' : 'managed cost rises with external meters'
          };
        }
      stack: "Fetch.ai / Agentverse"
      platform_subscription_usd: "0 on Basic if quotas fit; 25 on Premium"
      fetch_monthly_tco_usd: 25
      fetch_monthly_tco_note: "0-25 platform floor before model/API/FET costs"
      fetch_quota_risk: "processed messages, compute seconds, storage"
      fetch_tco_score: "best predictable managed starter TCO"
    - id: elizaos_ai16z_tco
      type: TcoStackWidget
      label: "elizaOS / AI16Z TCO"
      position: {x: 520, y: 420}
      size: {width: 360, height: 250}
      handles:
        target: [monthly_agent_requests, hosting_or_cloud_runtime_usd, model_provider_fee_usd, social_api_rpc_data_api_fees, ops_hours]
        source: [eliza_monthly_tco_usd, eliza_ops_risk, eliza_tco_score]
      tags: [hypothesis]
      "visual:fill": "#f59e0b"
      "visual:stroke": "#9CA3AF"
      "flow:widgetFormId": "fm:elizaos_ai16z_tco"
      "flow:portTypes":
        in:
          monthly_agent_requests: demand_driver_signal
          hosting_or_cloud_runtime_usd: platform_cost_signal
          model_provider_fee_usd: platform_cost_signal
          social_api_rpc_data_api_fees: platform_cost_signal
          ops_hours: platform_cost_signal
        out:
          eliza_monthly_tco_usd: stack_tco_metric
          eliza_ops_risk: platform_cost_signal
          eliza_tco_score: stack_tco_metric
      compute: |
        inputs => {
          const n = v => {
            const m = String(v ?? '').match(/-?[0-9]+(?:\.[0-9]+)?/);
            const x = m ? Number(m[0]) : Number(v);
            return Number.isFinite(x) ? x : 0;
          };
          const total = n(inputs.hosting_or_cloud_runtime_usd) + n(inputs.model_provider_fee_usd) + n(inputs.social_api_rpc_data_api_fees);
          const ops = n(inputs.ops_hours);
          return {
            eliza_monthly_tco_usd: Math.round(total * 100) / 100,
            eliza_ops_risk: ops > 0 ? 'operator hours dominate the real TCO' : 'ops hours tracked outside cash floor',
            eliza_tco_score: total === 0 ? 'lowest cash floor with owner-operated runtime' : 'infra and provider meters drive cash cost'
          };
        }
      stack: "elizaOS / AI16Z"
      hosting_or_cloud_runtime_usd: "BYO when self-hosted; cloud credits when managed"
      eliza_monthly_tco_usd: 0
      eliza_monthly_tco_note: "0 public framework fee plus infra/model/ops"
      eliza_ops_risk: "highest operator-owned surface"
      eliza_tco_score: "best FOSS/control baseline"
    - id: virtuals_game_tco
      type: TcoStackWidget
      label: "Virtuals / GAME TCO"
      position: {x: 520, y: 740}
      size: {width: 360, height: 260}
      handles:
        target: [monthly_agent_requests, platform_unit_call_cost_usd, onchain_token_launch_required, token_setup_exposure, onchain_gas_and_token_fees, token_price_volatility]
        source: [virtuals_monthly_tco_usd, virtuals_token_risk, virtuals_tco_score]
      tags: [alert]
      "visual:fill": "#ef4444"
      "visual:stroke": "#9CA3AF"
      "flow:widgetFormId": "fm:virtuals_game_tco"
      "flow:portTypes":
        in:
          monthly_agent_requests: demand_driver_signal
          platform_unit_call_cost_usd: platform_cost_signal
          onchain_token_launch_required: token_risk_signal
          token_setup_exposure: token_risk_signal
          onchain_gas_and_token_fees: token_risk_signal
          token_price_volatility: token_risk_signal
        out:
          virtuals_monthly_tco_usd: stack_tco_metric
          virtuals_token_risk: token_risk_signal
          virtuals_tco_score: stack_tco_metric
      compute: |
        inputs => {
          const n = v => {
            const m = String(v ?? '').match(/-?[0-9]+(?:\.[0-9]+)?/);
            const x = m ? Number(m[0]) : Number(v);
            return Number.isFinite(x) ? x : 0;
          };
          const req = n(inputs.monthly_agent_requests);
          const unit = n(inputs.platform_unit_call_cost_usd) || 0.003;
          const total = req * unit + n(inputs.onchain_gas_and_token_fees);
          return {
            virtuals_monthly_tco_usd: Math.round(total * 100) / 100,
            virtuals_token_risk: 'launch fee, graduation threshold, gas, and VIRTUAL price stay separate',
            virtuals_tco_score: total <= 30 ? 'tokenized distribution fit with per-call floor' : 'runtime cost scales with paid calls'
          };
        }
      stack: "Virtuals Protocol / GAME"
      platform_unit_call_cost_usd: 0.003
      virtuals_monthly_tco_usd: 30
      virtuals_monthly_tco_note: "30 platform call floor at 10k paid GAME calls"
      virtuals_token_risk: "launch fee, graduation threshold, gas, VIRTUAL price"
      virtuals_tco_score: "best tokenized-agent economy fit"
    - id: revenue_calculator
      type: RevenueCalculatorWidget
      label: "Revenue Calculator"
      position: {x: 520, y: 1060}
      size: {width: 360, height: 250}
      handles:
        target: [monthly_agent_requests, monthly_active_users, paid_conversion_rate, subscription_price_usd, marketplace_gmv_usd, agent_token_take_rate, support_refund_rate]
        source: [monthly_revenue_usd, net_revenue_usd, revenue_per_request_usd, revenue_model_confidence]
      tags: [idea]
      "visual:fill": "var(--kg-canvas-accent)"
      "visual:stroke": "#9CA3AF"
      "flow:widgetFormId": "fm:revenue_calculator"
      "flow:portTypes":
        in:
          monthly_agent_requests: demand_driver_signal
          monthly_active_users: revenue_driver_signal
          paid_conversion_rate: revenue_driver_signal
          subscription_price_usd: revenue_driver_signal
          marketplace_gmv_usd: revenue_driver_signal
          agent_token_take_rate: revenue_driver_signal
          support_refund_rate: revenue_driver_signal
        out:
          monthly_revenue_usd: revenue_metric_signal
          net_revenue_usd: revenue_metric_signal
          revenue_per_request_usd: revenue_metric_signal
          revenue_model_confidence: decision_driver_signal
      compute: |
        inputs => {
          const n = v => {
            const m = String(v ?? '').match(/-?[0-9]+(?:\.[0-9]+)?/);
            const x = m ? Number(m[0]) : Number(v);
            return Number.isFinite(x) ? x : 0;
          };
          const req = Math.max(1, n(inputs.monthly_agent_requests) || 10000);
          const users = n(inputs.monthly_active_users);
          const conversion = n(inputs.paid_conversion_rate);
          const price = n(inputs.subscription_price_usd);
          const marketplace = n(inputs.marketplace_gmv_usd);
          const take = n(inputs.agent_token_take_rate);
          const refund = Math.max(0, Math.min(0.95, n(inputs.support_refund_rate)));
          const gross = users * conversion * price + marketplace * take;
          const net = gross * (1 - refund);
          return {
            monthly_revenue_usd: Math.round(gross * 100) / 100,
            net_revenue_usd: Math.round(net * 100) / 100,
            revenue_per_request_usd: Math.round((net / req) * 10000) / 10000,
            revenue_model_confidence: net > 0 ? 'revenue-positive baseline, validate conversion and refunds' : 'no revenue yet, treat costs as burn'
          };
        }
      formula: "net_revenue = (monthly_active_users * paid_conversion_rate * subscription_price_usd + marketplace_gmv_usd * agent_token_take_rate) * (1 - support_refund_rate)"
    - id: tco_calculator
      type: TcoCalculatorWidget
      label: "TCO Calculator"
      position: {x: 1040, y: 280}
      size: {width: 360, height: 260}
      handles:
        target: [monthly_revenue_usd, net_revenue_usd, fetch_monthly_tco_usd, eliza_monthly_tco_usd, virtuals_monthly_tco_usd, fetch_quota_risk, eliza_ops_risk, virtuals_token_risk]
        source: [lowest_cash_tco_driver, highest_margin_driver, breakeven_path_driver, lowest_lockin_driver, tokenized_distribution_driver, outputSrcDoc]
      tags: [pivot]
      "visual:fill": "#f97316"
      "visual:stroke": "#9CA3AF"
      "flow:widgetFormId": "fm:tco_calculator"
      "flow:portTypes":
        in:
          monthly_revenue_usd: revenue_metric_signal
          net_revenue_usd: revenue_metric_signal
          fetch_monthly_tco_usd: stack_tco_metric
          eliza_monthly_tco_usd: stack_tco_metric
          virtuals_monthly_tco_usd: stack_tco_metric
          fetch_quota_risk: token_risk_signal
          eliza_ops_risk: platform_cost_signal
          virtuals_token_risk: token_risk_signal
        out:
          lowest_cash_tco_driver: decision_driver_signal
          highest_margin_driver: decision_driver_signal
          breakeven_path_driver: decision_driver_signal
          lowest_lockin_driver: decision_driver_signal
          tokenized_distribution_driver: decision_driver_signal
          outputSrcDoc: rich_media_chart_html
      compute: |
        inputs => {
          const n = v => {
            const m = String(v ?? '').match(/-?[0-9]+(?:\.[0-9]+)?/);
            const x = m ? Number(m[0]) : Number(v);
            return Number.isFinite(x) ? x : 0;
          };
          const gross = n(inputs.monthly_revenue_usd);
          const net = n(inputs.net_revenue_usd);
          const rows = [
            ['elizaOS / AI16Z', n(inputs.eliza_monthly_tco_usd), '#f59e0b'],
            ['Fetch.ai / Agentverse', n(inputs.fetch_monthly_tco_usd), '#22c55e'],
            ['Virtuals / GAME', n(inputs.virtuals_monthly_tco_usd), '#ef4444'],
          ];
          const scored = rows.map(row => [row[0], row[1], Math.round((net - row[1]) * 100) / 100, row[2]]);
          const maxCost = rows.reduce((acc, row) => row[1] > acc ? row[1] : acc, 1);
          const best = scored.reduce((acc, row) => row[2] > acc[2] ? row : acc, scored[0]);
          const costBars = rows.map(row => `<section class="bar-row"><strong>${row[0]}</strong><span class="bar"><i style="width:${Math.max(4, Math.round((row[1] / maxCost) * 100))}%;background:${row[2]}"></i></span><b>$${row[1]}/mo</b></section>`).join('');
          const marginBars = scored.map(row => `<section class="bar-row"><strong>${row[0]}</strong><span class="bar"><i style="width:${Math.max(4, Math.min(100, Math.round(((row[2] + maxCost) / Math.max(1, net + maxCost)) * 100)))}%;background:${row[3]}"></i></span><b>$${row[2]}/mo</b></section>`).join('');
          const html = `<!doctype html><html><head><meta charset="utf-8"><style>body{margin:0;font:14px system-ui,Arial,sans-serif;background:#f8fafc;color:#111827}.wrap{padding:18px}h1{font-size:18px;margin:0 0 12px}h2{font-size:13px;margin:14px 0 8px;color:#374151}.bar-row{display:grid;grid-template-columns:150px 1fr 82px;gap:10px;align-items:center;margin:8px 0}.bar{height:16px;border-radius:5px;background:#e5e7eb;overflow:hidden}.bar i{display:block;height:100%}.kpi{display:flex;gap:10px;flex-wrap:wrap}.kpi b{background:white;border:1px solid #e5e7eb;border-radius:6px;padding:6px 8px}p{margin:10px 0 0;color:#4b5563}</style></head><body><main class="wrap"><h1>Revenue and TCO simulation</h1><section class="kpi"><b>Gross $${gross}/mo</b><b>Net $${net}/mo</b><b>Best margin ${best[0]}</b></section><h2>Monthly cost</h2>${costBars}<h2>Net margin after cost</h2>${marginBars}<p>Every bar is fed by a typed Flow Editor port; token, gas, ops, and quota risk remain separate driver handles.</p></main></body></html>`;
          return {
            lowest_cash_tco_driver: 'elizaOS self-host cash floor when operator time is available',
            highest_margin_driver: `${best[0]} net margin $${best[2]}/mo`,
            breakeven_path_driver: best[2] >= 0 ? 'current revenue clears selected cost floor' : 'revenue must rise or cost floor must fall',
            lowest_lockin_driver: 'elizaOS local/self-host',
            tokenized_distribution_driver: 'Virtuals when agent-token distribution matters',
            outputSrcDoc: html
          };
        }
      lowest_cash_tco_driver: "elizaOS self-host cash floor, if ops are available"
      highest_margin_driver: "waits for net revenue and computed stack costs"
      breakeven_path_driver: "waits for net revenue and computed stack costs"
      lowest_lockin_driver: "elizaOS local/self-host"
      tokenized_distribution_driver: "Virtuals when agent token launch matters"
      calculation_policy: "cash floors, net revenue, ops, and token-volatility risk stay separate until the calculator joins them"
      outputSrcDoc: "<!doctype html><html><body><p>TCO chart waits for calculator inputs.</p></body></html>"
    - id: prediction_engine
      type: PredictionEngineWidget
      label: "Prediction Engine"
      position: {x: 960, y: 980}
      size: {width: 340, height: 230}
      handles:
        target: [monthly_active_users, paid_conversion_rate, prediction_accuracy_rate, wallet_activation_rate]
        source: [predicted_intent_quality_score, conversion_uplift_rate, demand_forecast_index]
      tags: [hypothesis]
      "visual:fill": "#f59e0b"
      "visual:stroke": "#9CA3AF"
      "flow:widgetFormId": "fm:prediction_engine"
      "flow:portTypes":
        in:
          monthly_active_users: revenue_driver_signal
          paid_conversion_rate: revenue_driver_signal
          prediction_accuracy_rate: journey_driver_signal
          wallet_activation_rate: journey_driver_signal
        out:
          predicted_intent_quality_score: prediction_engine_signal
          conversion_uplift_rate: prediction_engine_signal
          demand_forecast_index: prediction_engine_signal
      compute: |
        inputs => {
          const n = v => {
            const m = String(v ?? '').match(/-?[0-9]+(?:\.[0-9]+)?/);
            const x = m ? Number(m[0]) : Number(v);
            return Number.isFinite(x) ? x : 0;
          };
          const users = n(inputs.monthly_active_users);
          const conversion = n(inputs.paid_conversion_rate);
          const accuracy = Math.max(0, Math.min(1, n(inputs.prediction_accuracy_rate)));
          const activation = Math.max(0, Math.min(1, n(inputs.wallet_activation_rate)));
          const quality = Math.max(0, Math.min(1, accuracy * 0.7 + activation * 0.3));
          const uplift = conversion * quality;
          return {
            predicted_intent_quality_score: Math.round(quality * 1000) / 1000,
            conversion_uplift_rate: Math.round(uplift * 10000) / 10000,
            demand_forecast_index: Math.round(users * (1 + uplift) * 100) / 100
          };
        }
      engine_role: "turns observed user intent into a demand and conversion signal"
    - id: yield_engine
      type: YieldEngineWidget
      label: "Yield Engine"
      position: {x: 1320, y: 980}
      size: {width: 340, height: 230}
      handles:
        target: [net_revenue_usd, revenue_per_request_usd, yield_share_rate, predicted_intent_quality_score, demand_forecast_index]
        source: [user_value_yield_usd, protocol_yield_score, retention_value_index]
      tags: [execution]
      "visual:fill": "#22c55e"
      "visual:stroke": "#9CA3AF"
      "flow:widgetFormId": "fm:yield_engine"
      "flow:portTypes":
        in:
          net_revenue_usd: revenue_metric_signal
          revenue_per_request_usd: revenue_metric_signal
          yield_share_rate: journey_driver_signal
          predicted_intent_quality_score: prediction_engine_signal
          demand_forecast_index: prediction_engine_signal
        out:
          user_value_yield_usd: yield_engine_signal
          protocol_yield_score: yield_engine_signal
          retention_value_index: yield_engine_signal
      compute: |
        inputs => {
          const n = v => {
            const m = String(v ?? '').match(/-?[0-9]+(?:\.[0-9]+)?/);
            const x = m ? Number(m[0]) : Number(v);
            return Number.isFinite(x) ? x : 0;
          };
          const net = n(inputs.net_revenue_usd);
          const perRequest = n(inputs.revenue_per_request_usd);
          const share = Math.max(0, Math.min(1, n(inputs.yield_share_rate)));
          const quality = Math.max(0, Math.min(1, n(inputs.predicted_intent_quality_score)));
          const yieldValue = net * share * Math.max(0.1, quality);
          const score = Math.min(100, (yieldValue / Math.max(1, net)) * 100);
          return {
            user_value_yield_usd: Math.round(yieldValue * 100) / 100,
            protocol_yield_score: Math.round(score * 100) / 100,
            retention_value_index: Math.round(Math.min(1, quality + perRequest) * 1000) / 1000
          };
        }
      engine_role: "converts revenue into user-retained value and protocol yield"
    - id: payment_engine
      type: PaymentEngineWidget
      label: "Payment Engine"
      position: {x: 1680, y: 980}
      size: {width: 340, height: 230}
      handles:
        target: [net_revenue_usd, user_value_yield_usd, payment_success_rate, payment_fee_rate]
        source: [settled_payment_volume_usd, payment_fee_cost_usd, payment_value_capture_usd]
      tags: [idea]
      "visual:fill": "var(--kg-canvas-accent)"
      "visual:stroke": "#9CA3AF"
      "flow:widgetFormId": "fm:payment_engine"
      "flow:portTypes":
        in:
          net_revenue_usd: revenue_metric_signal
          user_value_yield_usd: yield_engine_signal
          payment_success_rate: journey_driver_signal
          payment_fee_rate: journey_driver_signal
        out:
          settled_payment_volume_usd: payment_engine_signal
          payment_fee_cost_usd: payment_engine_signal
          payment_value_capture_usd: payment_engine_signal
      compute: |
        inputs => {
          const n = v => {
            const m = String(v ?? '').match(/-?[0-9]+(?:\.[0-9]+)?/);
            const x = m ? Number(m[0]) : Number(v);
            return Number.isFinite(x) ? x : 0;
          };
          const success = Math.max(0, Math.min(1, n(inputs.payment_success_rate)));
          const feeRate = Math.max(0, Math.min(1, n(inputs.payment_fee_rate)));
          const settled = (n(inputs.net_revenue_usd) + n(inputs.user_value_yield_usd)) * success;
          const fee = settled * feeRate;
          return {
            settled_payment_volume_usd: Math.round(settled * 100) / 100,
            payment_fee_cost_usd: Math.round(fee * 100) / 100,
            payment_value_capture_usd: Math.round((settled - fee) * 100) / 100
          };
        }
      engine_role: "settles value capture through wallet/payment rails"
    - id: liquidity_exchange_engine
      type: LiquidityExchangeEngineWidget
      label: "Liquidity & Exchange Engine"
      position: {x: 1320, y: 1260}
      size: {width: 360, height: 240}
      handles:
        target: [settled_payment_volume_usd, liquidity_spread_rate, exchange_conversion_rate, token_price_volatility]
        source: [exchange_liquidity_depth_usd, liquidity_slippage_cost_usd, token_exchange_efficiency_score]
      tags: [pivot]
      "visual:fill": "#f97316"
      "visual:stroke": "#9CA3AF"
      "flow:widgetFormId": "fm:liquidity_exchange_engine"
      "flow:portTypes":
        in:
          settled_payment_volume_usd: payment_engine_signal
          liquidity_spread_rate: journey_driver_signal
          exchange_conversion_rate: journey_driver_signal
          token_price_volatility: token_risk_signal
        out:
          exchange_liquidity_depth_usd: liquidity_exchange_signal
          liquidity_slippage_cost_usd: liquidity_exchange_signal
          token_exchange_efficiency_score: liquidity_exchange_signal
      compute: |
        inputs => {
          const n = v => {
            const m = String(v ?? '').match(/-?[0-9]+(?:\.[0-9]+)?/);
            const x = m ? Number(m[0]) : Number(v);
            return Number.isFinite(x) ? x : 0;
          };
          const settled = n(inputs.settled_payment_volume_usd);
          const spread = Math.max(0, Math.min(1, n(inputs.liquidity_spread_rate)));
          const conversion = Math.max(0, Math.min(1, n(inputs.exchange_conversion_rate)));
          const volatility = Math.max(0, n(inputs.token_price_volatility));
          const depth = settled * conversion;
          const slippage = settled * spread * (1 + volatility);
          const efficiency = Math.max(0, Math.min(100, conversion * 100 - spread * 100 - volatility * 10));
          return {
            exchange_liquidity_depth_usd: Math.round(depth * 100) / 100,
            liquidity_slippage_cost_usd: Math.round(slippage * 100) / 100,
            token_exchange_efficiency_score: Math.round(efficiency * 100) / 100
          };
        }
      engine_role: "turns settled payments into exchangeable liquidity"
    - id: infrastructure_engine
      type: InfrastructureEngineWidget
      label: "Infrastructure Engine"
      position: {x: 960, y: 1260}
      size: {width: 350, height: 240}
      handles:
        target: [monthly_agent_requests, infrastructure_unit_cost_usd, infrastructure_uptime_slo, exchange_liquidity_depth_usd, payment_fee_cost_usd]
        source: [infrastructure_cost_usd, uptime_value_score, infra_adjusted_value_usd]
      tags: [execution]
      "visual:fill": "#22c55e"
      "visual:stroke": "#9CA3AF"
      "flow:widgetFormId": "fm:infrastructure_engine"
      "flow:portTypes":
        in:
          monthly_agent_requests: demand_driver_signal
          infrastructure_unit_cost_usd: journey_driver_signal
          infrastructure_uptime_slo: journey_driver_signal
          exchange_liquidity_depth_usd: liquidity_exchange_signal
          payment_fee_cost_usd: payment_engine_signal
        out:
          infrastructure_cost_usd: infrastructure_engine_signal
          uptime_value_score: infrastructure_engine_signal
          infra_adjusted_value_usd: infrastructure_engine_signal
      compute: |
        inputs => {
          const n = v => {
            const m = String(v ?? '').match(/-?[0-9]+(?:\.[0-9]+)?/);
            const x = m ? Number(m[0]) : Number(v);
            return Number.isFinite(x) ? x : 0;
          };
          const cost = n(inputs.monthly_agent_requests) * n(inputs.infrastructure_unit_cost_usd);
          const uptime = Math.max(0, Math.min(1, n(inputs.infrastructure_uptime_slo)));
          const adjusted = n(inputs.exchange_liquidity_depth_usd) - cost - n(inputs.payment_fee_cost_usd);
          return {
            infrastructure_cost_usd: Math.round(cost * 100) / 100,
            uptime_value_score: Math.round(uptime * 10000) / 100,
            infra_adjusted_value_usd: Math.round(adjusted * 100) / 100
          };
        }
      engine_role: "prices the reliability layer that keeps the loop available"
    - id: closed_value_loop
      type: ClosedValueLoopWidget
      label: "Closed User Journey Value Loop"
      position: {x: 1680, y: 1260}
      size: {width: 380, height: 270}
      handles:
        target: [predicted_intent_quality_score, protocol_yield_score, payment_value_capture_usd, token_exchange_efficiency_score, uptime_value_score, infra_adjusted_value_usd, net_revenue_usd, highest_margin_driver]
        source: [closed_loop_health_score, user_journey_value_loop, web3_economics_decision_driver, outputSrcDoc]
      tags: [pivot]
      "visual:fill": "#f97316"
      "visual:stroke": "#9CA3AF"
      "flow:widgetFormId": "fm:closed_value_loop"
      "flow:portTypes":
        in:
          predicted_intent_quality_score: prediction_engine_signal
          protocol_yield_score: yield_engine_signal
          payment_value_capture_usd: payment_engine_signal
          token_exchange_efficiency_score: liquidity_exchange_signal
          uptime_value_score: infrastructure_engine_signal
          infra_adjusted_value_usd: infrastructure_engine_signal
          net_revenue_usd: revenue_metric_signal
          highest_margin_driver: decision_driver_signal
        out:
          closed_loop_health_score: closed_loop_signal
          user_journey_value_loop: closed_loop_signal
          web3_economics_decision_driver: decision_driver_signal
          outputSrcDoc: rich_media_chart_html
      compute: |
        inputs => {
          const n = v => {
            const m = String(v ?? '').match(/-?[0-9]+(?:\.[0-9]+)?/);
            const x = m ? Number(m[0]) : Number(v);
            return Number.isFinite(x) ? x : 0;
          };
          const net = Math.max(1, n(inputs.net_revenue_usd));
          const predictionScore = Math.max(0, Math.min(100, n(inputs.predicted_intent_quality_score) * 100));
          const yieldScore = Math.max(0, Math.min(100, n(inputs.protocol_yield_score)));
          const captureScore = Math.max(0, Math.min(100, (n(inputs.payment_value_capture_usd) / net) * 100));
          const exchangeScore = Math.max(0, Math.min(100, n(inputs.token_exchange_efficiency_score)));
          const uptimeScore = Math.max(0, Math.min(100, n(inputs.uptime_value_score)));
          const infraValueScore = Math.max(0, Math.min(100, (n(inputs.infra_adjusted_value_usd) / net) * 100));
          const infraScore = Math.round(((uptimeScore + infraValueScore) / 2) * 100) / 100;
          const health = Math.round(((predictionScore + yieldScore + captureScore + exchangeScore + infraScore) / 5) * 100) / 100;
          const margin = String(inputs.highest_margin_driver || 'margin waits for TCO inputs');
          const html = `<!doctype html><html><head><meta charset="utf-8"><style>body{margin:0;font:14px system-ui,Arial,sans-serif;background:#f8fafc;color:#111827}.wrap{padding:18px}h1{font-size:18px;margin:0 0 10px}.grid{display:grid;grid-template-columns:1fr 72px;gap:8px;align-items:center}.bar{height:15px;border-radius:5px;background:#e5e7eb;overflow:hidden}.bar i{display:block;height:100%;background:#f97316}.kpi{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px}.kpi b{background:white;border:1px solid #e5e7eb;border-radius:6px;padding:6px 8px}p{color:#4b5563;margin:10px 0 0}</style></head><body><main class="wrap"><h1>Closed user journey value loop</h1><section class="kpi"><b>Health ${health}/100</b><b>${margin}</b></section><section class="grid"><span>Prediction Engine</span><b>${predictionScore}</b><span class="bar"><i style="width:${predictionScore}%"></i></span><span></span><span>Yield Engine</span><b>${yieldScore}</b><span class="bar"><i style="width:${yieldScore}%"></i></span><span></span><span>Payment Engine</span><b>${captureScore}</b><span class="bar"><i style="width:${captureScore}%"></i></span><span></span><span>Liquidity & Exchange Engine</span><b>${exchangeScore}</b><span class="bar"><i style="width:${exchangeScore}%"></i></span><span></span><span>Infrastructure Engine</span><b>${infraScore}</b><span class="bar"><i style="width:${infraScore}%"></i></span><span></span></section><p>The loop closes when prediction, yield, payment, liquidity, and infrastructure outputs all feed the next journey decision.</p></main></body></html>`;
          return {
            closed_loop_health_score: health,
            user_journey_value_loop: 'prediction -> yield -> payment -> liquidity/exchange -> infrastructure -> next prediction',
            web3_economics_decision_driver: health >= 70 ? 'closed value loop is viable under current drivers' : 'rebalance driver assumptions before scaling the loop',
            outputSrcDoc: html
          };
        }
      engine_role: "scores the closed journey loop across all five Web3 economics engines"
    - id: decision_ranking
      type: DecisionWidget
      label: "Decision Ranking"
      position: {x: 1500, y: 310}
      size: {width: 340, height: 240}
      handles:
        target: [lowest_cash_tco_driver, highest_margin_driver, breakeven_path_driver, lowest_lockin_driver, tokenized_distribution_driver]
        source: [recommended_demo_path, managed_demo_path, tokenized_demo_path, margin_optimized_path]
      tags: [pivot]
      "visual:fill": "#f97316"
      "visual:stroke": "#9CA3AF"
      "flow:widgetFormId": "fm:decision_ranking"
      "flow:portTypes":
        in:
          lowest_cash_tco_driver: decision_driver_signal
          highest_margin_driver: decision_driver_signal
          breakeven_path_driver: decision_driver_signal
          lowest_lockin_driver: decision_driver_signal
          tokenized_distribution_driver: decision_driver_signal
        out:
          recommended_demo_path: decision_driver_signal
          managed_demo_path: decision_driver_signal
          tokenized_demo_path: decision_driver_signal
          margin_optimized_path: decision_driver_signal
      recommended_demo_path: "local demo = elizaOS + local model + no token launch"
      managed_demo_path: "managed demo = Fetch Agentverse Basic/Premium + explicit model cap"
      tokenized_demo_path: "tokenized demo = Virtuals GAME + separate token setup meters"
      margin_optimized_path: "use calculator highest_margin_driver and validate conversion inputs"
    - id: tco_chart_panel
      type: RichMediaPanel
      label: "TCO Chart Panel"
      position: {x: 1500, y: 650}
      size: {width: 420, height: 260}
      handles:
        target: [outputSrcDoc]
        source: [outputSrcDoc]
      tags: [idea]
      "visual:fill": "var(--kg-canvas-accent)"
      "visual:stroke": "#9CA3AF"
      "flow:widgetFormId": "richMediaPanel"
      "flow:portTypes":
        in:
          outputSrcDoc: rich_media_chart_html
        out:
          outputSrcDoc: rich_media_chart_html
      richMediaActiveTab: "text"
      output: "Interactive chart panel receives calculator outputSrcDoc."
      outputSrcDoc: "<!doctype html><html><body><p>TCO chart waits for calculator output.</p></body></html>"
    - id: value_loop_chart_panel
      type: RichMediaPanel
      label: "Value Loop Chart Panel"
      position: {x: 2100, y: 1260}
      size: {width: 440, height: 270}
      handles:
        target: [outputSrcDoc]
        source: [outputSrcDoc]
      tags: [idea]
      "visual:fill": "var(--kg-canvas-accent)"
      "visual:stroke": "#9CA3AF"
      "flow:widgetFormId": "fm:value_loop_chart_panel"
      "flow:portTypes":
        in:
          outputSrcDoc: rich_media_chart_html
        out:
          outputSrcDoc: rich_media_chart_html
      richMediaActiveTab: "text"
      output: "Closed value-loop chart panel receives closed_value_loop outputSrcDoc."
      outputSrcDoc: "<!doctype html><html><body><p>Value loop chart waits for engine outputs.</p></body></html>"
  edges:
    - {id: e-workload-fetch, source: workload_drivers, sourceHandle: monthly_agent_requests, target: fetch_agentverse_tco, targetHandle: monthly_agent_requests, label: "monthly_agent_requests", type: demand_driver_signal, animated: true}
    - {id: e-workload-eliza, source: workload_drivers, sourceHandle: monthly_agent_requests, target: elizaos_ai16z_tco, targetHandle: monthly_agent_requests, label: "monthly_agent_requests", type: demand_driver_signal, animated: true}
    - {id: e-workload-virtuals, source: workload_drivers, sourceHandle: monthly_agent_requests, target: virtuals_game_tco, targetHandle: monthly_agent_requests, label: "monthly_agent_requests", type: demand_driver_signal, animated: true}
    - {id: e-workload-revenue, source: workload_drivers, sourceHandle: monthly_agent_requests, target: revenue_calculator, targetHandle: monthly_agent_requests, label: "monthly_agent_requests", type: demand_driver_signal, animated: true}
    - {id: e-subscription-fetch, source: shared_platform_drivers, sourceHandle: platform_subscription_usd, target: fetch_agentverse_tco, targetHandle: platform_subscription_usd, label: "platform_subscription_usd", type: platform_cost_signal, animated: true}
    - {id: e-hosting-fetch, source: shared_platform_drivers, sourceHandle: managed_hosting_required, target: fetch_agentverse_tco, targetHandle: managed_hosting_required, label: "managed_hosting_required", type: platform_cost_signal, animated: true}
    - {id: e-model-fetch, source: shared_platform_drivers, sourceHandle: model_provider_fee_usd, target: fetch_agentverse_tco, targetHandle: model_provider_fee_usd, label: "model_provider_fee_usd", type: platform_cost_signal, animated: true}
    - {id: e-hosting-eliza, source: shared_platform_drivers, sourceHandle: managed_hosting_required, target: elizaos_ai16z_tco, targetHandle: hosting_or_cloud_runtime_usd, label: "hosting_or_cloud_runtime_usd", type: platform_cost_signal, animated: true}
    - {id: e-model-eliza, source: shared_platform_drivers, sourceHandle: model_provider_fee_usd, target: elizaos_ai16z_tco, targetHandle: model_provider_fee_usd, label: "model_provider_fee_usd", type: platform_cost_signal, animated: true}
    - {id: e-api-eliza, source: shared_platform_drivers, sourceHandle: social_api_rpc_data_api_fees, target: elizaos_ai16z_tco, targetHandle: social_api_rpc_data_api_fees, label: "social_api_rpc_data_api_fees", type: platform_cost_signal, animated: true}
    - {id: e-ops-eliza, source: shared_platform_drivers, sourceHandle: ops_hours, target: elizaos_ai16z_tco, targetHandle: ops_hours, label: "ops_hours", type: platform_cost_signal, animated: true}
    - {id: e-unit-virtuals, source: shared_platform_drivers, sourceHandle: platform_unit_call_cost_usd, target: virtuals_game_tco, targetHandle: platform_unit_call_cost_usd, label: "platform_unit_call_cost_usd", type: platform_cost_signal, animated: true}
    - {id: e-token-launch-virtuals, source: token_exposure_drivers, sourceHandle: onchain_token_launch_required, target: virtuals_game_tco, targetHandle: onchain_token_launch_required, label: "onchain_token_launch_required", type: token_risk_signal, animated: true}
    - {id: e-token-setup-virtuals, source: token_exposure_drivers, sourceHandle: token_setup_exposure, target: virtuals_game_tco, targetHandle: token_setup_exposure, label: "token_setup_exposure", type: token_risk_signal, animated: true}
    - {id: e-gas-fetch, source: token_exposure_drivers, sourceHandle: onchain_gas_and_token_fees, target: fetch_agentverse_tco, targetHandle: onchain_gas_and_token_fees, label: "onchain_gas_and_token_fees", type: token_risk_signal, animated: true}
    - {id: e-gas-virtuals, source: token_exposure_drivers, sourceHandle: onchain_gas_and_token_fees, target: virtuals_game_tco, targetHandle: onchain_gas_and_token_fees, label: "onchain_gas_and_token_fees", type: token_risk_signal, animated: true}
    - {id: e-volatility-virtuals, source: token_exposure_drivers, sourceHandle: token_price_volatility, target: virtuals_game_tco, targetHandle: token_price_volatility, label: "token_price_volatility", type: token_risk_signal, animated: true}
    - {id: e-revenue-users, source: revenue_drivers, sourceHandle: monthly_active_users, target: revenue_calculator, targetHandle: monthly_active_users, label: "monthly_active_users", type: revenue_driver_signal, animated: true}
    - {id: e-revenue-conversion, source: revenue_drivers, sourceHandle: paid_conversion_rate, target: revenue_calculator, targetHandle: paid_conversion_rate, label: "paid_conversion_rate", type: revenue_driver_signal, animated: true}
    - {id: e-revenue-price, source: revenue_drivers, sourceHandle: subscription_price_usd, target: revenue_calculator, targetHandle: subscription_price_usd, label: "subscription_price_usd", type: revenue_driver_signal, animated: true}
    - {id: e-revenue-gmv, source: revenue_drivers, sourceHandle: marketplace_gmv_usd, target: revenue_calculator, targetHandle: marketplace_gmv_usd, label: "marketplace_gmv_usd", type: revenue_driver_signal, animated: true}
    - {id: e-revenue-take, source: revenue_drivers, sourceHandle: agent_token_take_rate, target: revenue_calculator, targetHandle: agent_token_take_rate, label: "agent_token_take_rate", type: revenue_driver_signal, animated: true}
    - {id: e-revenue-refund, source: revenue_drivers, sourceHandle: support_refund_rate, target: revenue_calculator, targetHandle: support_refund_rate, label: "support_refund_rate", type: revenue_driver_signal, animated: true}
    - {id: e-revenue-gross-calc, source: revenue_calculator, sourceHandle: monthly_revenue_usd, target: tco_calculator, targetHandle: monthly_revenue_usd, label: "monthly_revenue_usd", type: revenue_metric_signal, animated: true}
    - {id: e-revenue-net-calc, source: revenue_calculator, sourceHandle: net_revenue_usd, target: tco_calculator, targetHandle: net_revenue_usd, label: "net_revenue_usd", type: revenue_metric_signal, animated: true}
    - {id: e-fetch-calc, source: fetch_agentverse_tco, sourceHandle: fetch_monthly_tco_usd, target: tco_calculator, targetHandle: fetch_monthly_tco_usd, label: "fetch_monthly_tco_usd", type: stack_tco_metric, animated: true}
    - {id: e-eliza-calc, source: elizaos_ai16z_tco, sourceHandle: eliza_monthly_tco_usd, target: tco_calculator, targetHandle: eliza_monthly_tco_usd, label: "eliza_monthly_tco_usd", type: stack_tco_metric, animated: true}
    - {id: e-virtuals-calc, source: virtuals_game_tco, sourceHandle: virtuals_monthly_tco_usd, target: tco_calculator, targetHandle: virtuals_monthly_tco_usd, label: "virtuals_monthly_tco_usd", type: stack_tco_metric, animated: true}
    - {id: e-fetch-risk-calc, source: fetch_agentverse_tco, sourceHandle: fetch_quota_risk, target: tco_calculator, targetHandle: fetch_quota_risk, label: "fetch_quota_risk", type: token_risk_signal, animated: true}
    - {id: e-eliza-risk-calc, source: elizaos_ai16z_tco, sourceHandle: eliza_ops_risk, target: tco_calculator, targetHandle: eliza_ops_risk, label: "eliza_ops_risk", type: platform_cost_signal, animated: true}
    - {id: e-virtuals-risk-calc, source: virtuals_game_tco, sourceHandle: virtuals_token_risk, target: tco_calculator, targetHandle: virtuals_token_risk, label: "virtuals_token_risk", type: token_risk_signal, animated: true}
    - {id: e-users-prediction, source: revenue_drivers, sourceHandle: monthly_active_users, target: prediction_engine, targetHandle: monthly_active_users, label: "monthly_active_users", type: revenue_driver_signal, animated: true}
    - {id: e-conversion-prediction, source: revenue_drivers, sourceHandle: paid_conversion_rate, target: prediction_engine, targetHandle: paid_conversion_rate, label: "paid_conversion_rate", type: revenue_driver_signal, animated: true}
    - {id: e-accuracy-prediction, source: web3_economics_drivers, sourceHandle: prediction_accuracy_rate, target: prediction_engine, targetHandle: prediction_accuracy_rate, label: "prediction_accuracy_rate", type: journey_driver_signal, animated: true}
    - {id: e-wallet-prediction, source: web3_economics_drivers, sourceHandle: wallet_activation_rate, target: prediction_engine, targetHandle: wallet_activation_rate, label: "wallet_activation_rate", type: journey_driver_signal, animated: true}
    - {id: e-net-yield, source: revenue_calculator, sourceHandle: net_revenue_usd, target: yield_engine, targetHandle: net_revenue_usd, label: "net_revenue_usd", type: revenue_metric_signal, animated: true}
    - {id: e-request-yield, source: revenue_calculator, sourceHandle: revenue_per_request_usd, target: yield_engine, targetHandle: revenue_per_request_usd, label: "revenue_per_request_usd", type: revenue_metric_signal, animated: true}
    - {id: e-share-yield, source: web3_economics_drivers, sourceHandle: yield_share_rate, target: yield_engine, targetHandle: yield_share_rate, label: "yield_share_rate", type: journey_driver_signal, animated: true}
    - {id: e-quality-yield, source: prediction_engine, sourceHandle: predicted_intent_quality_score, target: yield_engine, targetHandle: predicted_intent_quality_score, label: "predicted_intent_quality_score", type: prediction_engine_signal, animated: true}
    - {id: e-demand-yield, source: prediction_engine, sourceHandle: demand_forecast_index, target: yield_engine, targetHandle: demand_forecast_index, label: "demand_forecast_index", type: prediction_engine_signal, animated: true}
    - {id: e-net-payment, source: revenue_calculator, sourceHandle: net_revenue_usd, target: payment_engine, targetHandle: net_revenue_usd, label: "net_revenue_usd", type: revenue_metric_signal, animated: true}
    - {id: e-yield-payment, source: yield_engine, sourceHandle: user_value_yield_usd, target: payment_engine, targetHandle: user_value_yield_usd, label: "user_value_yield_usd", type: yield_engine_signal, animated: true}
    - {id: e-success-payment, source: web3_economics_drivers, sourceHandle: payment_success_rate, target: payment_engine, targetHandle: payment_success_rate, label: "payment_success_rate", type: journey_driver_signal, animated: true}
    - {id: e-fee-payment, source: web3_economics_drivers, sourceHandle: payment_fee_rate, target: payment_engine, targetHandle: payment_fee_rate, label: "payment_fee_rate", type: journey_driver_signal, animated: true}
    - {id: e-settled-liquidity, source: payment_engine, sourceHandle: settled_payment_volume_usd, target: liquidity_exchange_engine, targetHandle: settled_payment_volume_usd, label: "settled_payment_volume_usd", type: payment_engine_signal, animated: true}
    - {id: e-spread-liquidity, source: web3_economics_drivers, sourceHandle: liquidity_spread_rate, target: liquidity_exchange_engine, targetHandle: liquidity_spread_rate, label: "liquidity_spread_rate", type: journey_driver_signal, animated: true}
    - {id: e-conversion-liquidity, source: web3_economics_drivers, sourceHandle: exchange_conversion_rate, target: liquidity_exchange_engine, targetHandle: exchange_conversion_rate, label: "exchange_conversion_rate", type: journey_driver_signal, animated: true}
    - {id: e-volatility-liquidity, source: token_exposure_drivers, sourceHandle: token_price_volatility, target: liquidity_exchange_engine, targetHandle: token_price_volatility, label: "token_price_volatility", type: token_risk_signal, animated: true}
    - {id: e-workload-infra, source: workload_drivers, sourceHandle: monthly_agent_requests, target: infrastructure_engine, targetHandle: monthly_agent_requests, label: "monthly_agent_requests", type: demand_driver_signal, animated: true}
    - {id: e-unit-infra, source: web3_economics_drivers, sourceHandle: infrastructure_unit_cost_usd, target: infrastructure_engine, targetHandle: infrastructure_unit_cost_usd, label: "infrastructure_unit_cost_usd", type: journey_driver_signal, animated: true}
    - {id: e-uptime-infra, source: web3_economics_drivers, sourceHandle: infrastructure_uptime_slo, target: infrastructure_engine, targetHandle: infrastructure_uptime_slo, label: "infrastructure_uptime_slo", type: journey_driver_signal, animated: true}
    - {id: e-depth-infra, source: liquidity_exchange_engine, sourceHandle: exchange_liquidity_depth_usd, target: infrastructure_engine, targetHandle: exchange_liquidity_depth_usd, label: "exchange_liquidity_depth_usd", type: liquidity_exchange_signal, animated: true}
    - {id: e-paymentfee-infra, source: payment_engine, sourceHandle: payment_fee_cost_usd, target: infrastructure_engine, targetHandle: payment_fee_cost_usd, label: "payment_fee_cost_usd", type: payment_engine_signal, animated: true}
    - {id: e-prediction-loop, source: prediction_engine, sourceHandle: predicted_intent_quality_score, target: closed_value_loop, targetHandle: predicted_intent_quality_score, label: "predicted_intent_quality_score", type: prediction_engine_signal, animated: true}
    - {id: e-yield-loop, source: yield_engine, sourceHandle: protocol_yield_score, target: closed_value_loop, targetHandle: protocol_yield_score, label: "protocol_yield_score", type: yield_engine_signal, animated: true}
    - {id: e-capture-loop, source: payment_engine, sourceHandle: payment_value_capture_usd, target: closed_value_loop, targetHandle: payment_value_capture_usd, label: "payment_value_capture_usd", type: payment_engine_signal, animated: true}
    - {id: e-exchange-loop, source: liquidity_exchange_engine, sourceHandle: token_exchange_efficiency_score, target: closed_value_loop, targetHandle: token_exchange_efficiency_score, label: "token_exchange_efficiency_score", type: liquidity_exchange_signal, animated: true}
    - {id: e-uptime-loop, source: infrastructure_engine, sourceHandle: uptime_value_score, target: closed_value_loop, targetHandle: uptime_value_score, label: "uptime_value_score", type: infrastructure_engine_signal, animated: true}
    - {id: e-infra-value-loop, source: infrastructure_engine, sourceHandle: infra_adjusted_value_usd, target: closed_value_loop, targetHandle: infra_adjusted_value_usd, label: "infra_adjusted_value_usd", type: infrastructure_engine_signal, animated: true}
    - {id: e-net-loop, source: revenue_calculator, sourceHandle: net_revenue_usd, target: closed_value_loop, targetHandle: net_revenue_usd, label: "net_revenue_usd", type: revenue_metric_signal, animated: true}
    - {id: e-margin-loop, source: tco_calculator, sourceHandle: highest_margin_driver, target: closed_value_loop, targetHandle: highest_margin_driver, label: "highest_margin_driver", type: decision_driver_signal, animated: true}
    - {id: e-lowest-cash-decision, source: tco_calculator, sourceHandle: lowest_cash_tco_driver, target: decision_ranking, targetHandle: lowest_cash_tco_driver, label: "lowest_cash_tco_driver", type: decision_driver_signal, animated: true}
    - {id: e-margin-decision, source: tco_calculator, sourceHandle: highest_margin_driver, target: decision_ranking, targetHandle: highest_margin_driver, label: "highest_margin_driver", type: decision_driver_signal, animated: true}
    - {id: e-breakeven-decision, source: tco_calculator, sourceHandle: breakeven_path_driver, target: decision_ranking, targetHandle: breakeven_path_driver, label: "breakeven_path_driver", type: decision_driver_signal, animated: true}
    - {id: e-lockin-decision, source: tco_calculator, sourceHandle: lowest_lockin_driver, target: decision_ranking, targetHandle: lowest_lockin_driver, label: "lowest_lockin_driver", type: decision_driver_signal, animated: true}
    - {id: e-tokenized-decision, source: tco_calculator, sourceHandle: tokenized_distribution_driver, target: decision_ranking, targetHandle: tokenized_distribution_driver, label: "tokenized_distribution_driver", type: decision_driver_signal, animated: true}
    - {id: e-calculator-chart, source: tco_calculator, sourceHandle: outputSrcDoc, target: tco_chart_panel, targetHandle: outputSrcDoc, label: "outputSrcDoc", type: rich_media_chart_html, animated: true}
    - {id: e-value-loop-chart, source: closed_value_loop, sourceHandle: outputSrcDoc, target: value_loop_chart_panel, targetHandle: outputSrcDoc, label: "outputSrcDoc", type: rich_media_chart_html, animated: true}

node_types:
  - metric
  - lever
  - cost
  - outcome
  - component
edge_predicates:
  - drives
  - reduces
  - caps
  - accumulates
  - penalises
  - emits
  - bounds
  - informs
  - sequences
  - improves
  - lowers
  - triggers
  - feeds
  - wraps
  - validates
  - produces
  - consumes
tags:
  - knowgrph
  - token-economics
  - web3-economics
  - web3-ai-agents
  - closed-user-journey
  - tco
  - kgc
---

# Knowgrph Token Economics Model Demo - Flow Editor

## Scope

This demo compares the total cost of ownership (TCO) for three Web3 AI agent stacks as a native `2D Renderer: Flow Editor` cost-driver graph:

1. Virtuals Protocol / GAME
2. Fetch.ai / Agentverse
3. elizaOS / AI16Z

Market-cap lists are not perfectly aligned. CoinGecko's AI Agents category currently surfaces Venice Token, Artificial Superintelligence Alliance, and Virtuals Protocol near the top, while CoinMarketCap's AI Agents category lists Virtuals Protocol, Artificial Superintelligence Alliance, and Kite near the top. QuickNode's Web3 AI agent guide highlights Virtuals Protocol, AI16Z DAO by Eliza Labs, AIXBT, and Fetch.ai. For TCO, this document compares deployable agent stacks rather than pure token tickers.

Not investment advice. Prices, quotas, token requirements, and product terms change. Treat this as an executable TCO model template, not a live quote.

## Flow Editor Runtime Contract

The frontmatter `flow:` block is the source of truth for this demo. Each widget exposes port handles named after a cost driver, risk driver, TCO metric, or decision driver. The Flow Editor should render those handles as connectable widget ports, and every edge label should repeat the exact handle name it connects.

| Widget | Input Port Handles | Output Port Handles | Purpose |
|---|---|---|---|
| `workload_drivers` | n/a | `monthly_agent_requests`, `avg_tool_calls_per_request`, `avg_tokens_per_request`, `retry_rate` | Demand-side cost drivers shared by every stack. |
| `shared_platform_drivers` | n/a | `platform_subscription_usd`, `platform_unit_call_cost_usd`, `managed_hosting_required`, `model_provider_fee_usd`, `social_api_rpc_data_api_fees`, `ops_hours` | Platform and provider meters that can hit any stack. |
| `token_exposure_drivers` | n/a | `onchain_token_launch_required`, `token_setup_exposure`, `onchain_gas_and_token_fees`, `token_price_volatility` | Web3-specific token and gas exposure. |
| `revenue_drivers` | n/a | `monthly_active_users`, `paid_conversion_rate`, `subscription_price_usd`, `marketplace_gmv_usd`, `agent_token_take_rate`, `support_refund_rate` | Revenue-side drivers used by the margin simulation. |
| `web3_economics_drivers` | n/a | `prediction_accuracy_rate`, `wallet_activation_rate`, `yield_share_rate`, `payment_success_rate`, `payment_fee_rate`, `liquidity_spread_rate`, `exchange_conversion_rate`, `infrastructure_uptime_slo`, `infrastructure_unit_cost_usd` | Closed journey assumptions shared by the five Web3 economics engines. |
| `fetch_agentverse_tco` | `monthly_agent_requests`, `platform_subscription_usd`, `managed_hosting_required`, `model_provider_fee_usd`, `onchain_gas_and_token_fees` | `fetch_monthly_tco_usd`, `fetch_quota_risk`, `fetch_tco_score` | Hosted/Web3 agent TCO widget. |
| `elizaos_ai16z_tco` | `monthly_agent_requests`, `hosting_or_cloud_runtime_usd`, `model_provider_fee_usd`, `social_api_rpc_data_api_fees`, `ops_hours` | `eliza_monthly_tco_usd`, `eliza_ops_risk`, `eliza_tco_score` | FOSS/self-host TCO widget. |
| `virtuals_game_tco` | `monthly_agent_requests`, `platform_unit_call_cost_usd`, `onchain_token_launch_required`, `token_setup_exposure`, `onchain_gas_and_token_fees`, `token_price_volatility` | `virtuals_monthly_tco_usd`, `virtuals_token_risk`, `virtuals_tco_score` | Tokenized-agent TCO widget. |
| `revenue_calculator` | `monthly_agent_requests`, `monthly_active_users`, `paid_conversion_rate`, `subscription_price_usd`, `marketplace_gmv_usd`, `agent_token_take_rate`, `support_refund_rate` | `monthly_revenue_usd`, `net_revenue_usd`, `revenue_per_request_usd`, `revenue_model_confidence` | Computes monthly revenue and per-request revenue from business drivers. |
| `tco_calculator` | `monthly_revenue_usd`, `net_revenue_usd`, `fetch_monthly_tco_usd`, `eliza_monthly_tco_usd`, `virtuals_monthly_tco_usd`, `fetch_quota_risk`, `eliza_ops_risk`, `virtuals_token_risk` | `lowest_cash_tco_driver`, `highest_margin_driver`, `breakeven_path_driver`, `lowest_lockin_driver`, `tokenized_distribution_driver`, `outputSrcDoc` | Joins cost and revenue paths, computes margin drivers, and emits chart HTML without hiding assumptions. |
| `prediction_engine` | `monthly_active_users`, `paid_conversion_rate`, `prediction_accuracy_rate`, `wallet_activation_rate` | `predicted_intent_quality_score`, `conversion_uplift_rate`, `demand_forecast_index` | Converts closed-journey intent signals into demand and conversion forecasts. |
| `yield_engine` | `net_revenue_usd`, `revenue_per_request_usd`, `yield_share_rate`, `predicted_intent_quality_score`, `demand_forecast_index` | `user_value_yield_usd`, `protocol_yield_score`, `retention_value_index` | Converts revenue into user-retained value and protocol yield. |
| `payment_engine` | `net_revenue_usd`, `user_value_yield_usd`, `payment_success_rate`, `payment_fee_rate` | `settled_payment_volume_usd`, `payment_fee_cost_usd`, `payment_value_capture_usd` | Converts yielded value into settled payment volume and value capture. |
| `liquidity_exchange_engine` | `settled_payment_volume_usd`, `liquidity_spread_rate`, `exchange_conversion_rate`, `token_price_volatility` | `exchange_liquidity_depth_usd`, `liquidity_slippage_cost_usd`, `token_exchange_efficiency_score` | Converts settled payment volume into token/liquidity exchange efficiency. |
| `infrastructure_engine` | `monthly_agent_requests`, `infrastructure_unit_cost_usd`, `infrastructure_uptime_slo`, `exchange_liquidity_depth_usd`, `payment_fee_cost_usd` | `infrastructure_cost_usd`, `uptime_value_score`, `infra_adjusted_value_usd` | Prices the reliability layer required to keep the journey loop available. |
| `closed_value_loop` | `predicted_intent_quality_score`, `protocol_yield_score`, `payment_value_capture_usd`, `token_exchange_efficiency_score`, `uptime_value_score`, `infra_adjusted_value_usd`, `net_revenue_usd`, `highest_margin_driver` | `closed_loop_health_score`, `user_journey_value_loop`, `web3_economics_decision_driver`, `outputSrcDoc` | Scores the full closed user journey loop and emits the value-loop chart. |
| `decision_ranking` | `lowest_cash_tco_driver`, `highest_margin_driver`, `breakeven_path_driver`, `lowest_lockin_driver`, `tokenized_distribution_driver` | `recommended_demo_path`, `managed_demo_path`, `tokenized_demo_path`, `margin_optimized_path` | Converts calculator outputs into recommended demo paths. |
| `tco_chart_panel` | `outputSrcDoc` | `outputSrcDoc` | Rich Media Panel chart fed by the calculator output. |
| `value_loop_chart_panel` | `outputSrcDoc` | `outputSrcDoc` | Rich Media Panel chart fed by the closed value-loop evaluator. |

Renderer checks:

- `kgCanvas2dRenderer` is `flowEditor`.
- `flow.nodes[*].handles.target` defines the visible input handles.
- `flow.nodes[*].handles.source` defines the visible output handles.
- `flow.edges[*].sourceHandle` and `flow.edges[*].targetHandle` point to those same cost-driver names.
- `flow.computed` is enabled so the calculator can emit decision drivers and a chart `outputSrcDoc`.
- `tco_chart_panel` is a Rich Media Panel; its only visible port is the chart payload handle.
- Token exposure stays a separate driver group instead of being converted into fixed USD values.
- `socket_types` color every handle and edge by shared renderer palette role: hypothesis for demand/prediction, execution for platform/yield/infrastructure, alert for token risk, pivot for stack TCO/liquidity/closed-loop decisions, and the canvas accent for revenue/payment/chart payloads.
- `workflow_sections` keeps the MainPanel Workflow Manager view aligned with the same graph contract: ingest drivers, calculate stack costs, simulate margin, evaluate the five-engine Web3 value loop, and render decisions.

## Flow Editor Palette And Workflow

The document reuses the existing FloatingPanel Renderer palette keys instead of inventing stack-specific colors.

| Flow Segment | Socket Type | Palette Role | Handle Meaning |
|---|---|---|---|
| Demand drivers | `demand_driver_signal` | `hypothesis` | Workload assumptions that should be tested. |
| Platform costs | `platform_cost_signal` | `execution` | Cash-cost meters and operational meters. |
| Token exposure | `token_risk_signal` | `alert` | Token, gas, quota, volatility, and launch risks. |
| Stack TCO metrics | `stack_tco_metric` | `pivot` | Computed per-stack monthly TCO outputs. |
| Revenue drivers | `revenue_driver_signal` | `idea` | Product and marketplace revenue assumptions. |
| Revenue metrics | `revenue_metric_signal` | `execution` | Computed gross revenue, net revenue, and revenue/request. |
| Journey drivers | `journey_driver_signal` | `idea` | Wallet, payment, liquidity, prediction, and infrastructure assumptions. |
| Prediction Engine | `prediction_engine_signal` | `hypothesis` | Forecasted user intent, conversion uplift, and demand index. |
| Yield Engine | `yield_engine_signal` | `execution` | User-retained value, protocol yield, and retention value. |
| Payment Engine | `payment_engine_signal` | `idea` | Settled payment volume, payment fees, and captured value. |
| Liquidity & Exchange Engine | `liquidity_exchange_signal` | `pivot` | Exchange depth, slippage, and token exchange efficiency. |
| Infrastructure Engine | `infrastructure_engine_signal` | `neutral` | Availability cost, uptime score, and infrastructure-adjusted value. |
| Closed value loop | `closed_loop_signal` | `pivot` | Composite closed user journey health. |
| Decisions | `decision_driver_signal` | `neutral` | Ranked path outputs and break-even commentary. |
| Chart payload | `rich_media_chart_html` | `idea` | Rich Media Panel `outputSrcDoc`. |

## Web3 Economics Closed User Journey

The five engine widgets model a closed value loop rather than a one-way funnel:

```text
Prediction Engine
  -> Yield Engine
  -> Payment Engine
  -> Liquidity & Exchange Engine
  -> Infrastructure Engine
  -> next Prediction Engine decision
```

Engine formulas:

```text
predicted_intent_quality_score =
  prediction_accuracy_rate * 0.70
  + wallet_activation_rate * 0.30

user_value_yield =
  net_revenue * yield_share_rate * max(0.10, predicted_intent_quality_score)

settled_payment_volume =
  (net_revenue + user_value_yield) * payment_success_rate

liquidity_slippage_cost =
  settled_payment_volume * liquidity_spread_rate * (1 + token_price_volatility)

infrastructure_cost =
  monthly_agent_requests * infrastructure_unit_cost

closed_loop_health =
  average(protocol_yield_score, payment_capture_score, token_exchange_efficiency_score, uptime_value_score, infra_adjusted_value_score)
```

The loop remains neutral: every rate and cost is an editable port driver, and no engine assumes a specific wallet, chain, exchange, custodian, or hosting vendor.

## Semantic Graph Seed

This document declares the core TCO levers in KGC-compatible typed sigils:

- `@node:lever:monthly_agent_requests`
- `@node:lever:avg_tool_calls_per_request`
- `@node:lever:avg_tokens_per_request`
- `@node:lever:retry_rate`
- `@node:lever:managed_hosting_required`
- `@node:lever:onchain_token_launch_required`
- `@node:lever:monthly_active_users`
- `@node:lever:paid_conversion_rate`
- `@node:lever:subscription_price_usd`
- `@node:lever:marketplace_gmv_usd`
- `@node:lever:agent_token_take_rate`
- `@node:lever:support_refund_rate`
- `@node:lever:prediction_accuracy_rate`
- `@node:lever:wallet_activation_rate`
- `@node:lever:yield_share_rate`
- `@node:lever:payment_success_rate`
- `@node:lever:payment_fee_rate`
- `@node:lever:liquidity_spread_rate`
- `@node:lever:exchange_conversion_rate`
- `@node:lever:infrastructure_uptime_slo`
- `@node:lever:infrastructure_unit_cost_usd`
- `@node:cost:platform_subscription_usd`
- `@node:cost:platform_unit_call_cost_usd`
- `@node:cost:hosting_or_cloud_runtime_usd`
- `@node:cost:model_provider_fee_usd`
- `@node:cost:social_api_rpc_data_api_fees`
- `@node:cost:onchain_gas_and_token_fees`
- `@node:cost:token_setup_exposure`
- `@node:metric:monthly_revenue_usd`
- `@node:metric:net_revenue_usd`
- `@node:metric:net_margin_usd`
- `@node:metric:closed_loop_health_score`
- `@node:outcome:tco_score`
- `@node:outcome:user_journey_value_loop`
- `@node:component:virtuals_game`
- `@node:component:fetch_agentverse`
- `@node:component:elizaos_ai16z`
- `@node:component:revenue_calculator_semantic`
- `@node:component:tco_calculator_semantic`
- `@node:component:prediction_engine_semantic`
- `@node:component:yield_engine_semantic`
- `@node:component:payment_engine_semantic`
- `@node:component:liquidity_exchange_engine_semantic`
- `@node:component:infrastructure_engine_semantic`
- `@node:component:closed_value_loop_semantic`
- `@node:component:decision_ranking_semantic`
- `@node:component:tco_chart_panel_semantic`
- `@node:component:value_loop_chart_panel_semantic`

Relationships:

- `@edge:drives:monthly_agent_requests->platform_unit_call_cost_usd`
- `@edge:drives:managed_hosting_required->platform_subscription_usd`
- `@edge:drives:onchain_token_launch_required->token_setup_exposure`
- `@edge:drives:monthly_active_users->monthly_revenue_usd`
- `@edge:drives:paid_conversion_rate->monthly_revenue_usd`
- `@edge:drives:subscription_price_usd->monthly_revenue_usd`
- `@edge:drives:marketplace_gmv_usd->monthly_revenue_usd`
- `@edge:drives:agent_token_take_rate->monthly_revenue_usd`
- `@edge:reduces:support_refund_rate->net_revenue_usd`
- `@edge:drives:token_setup_exposure->virtuals_game`
- `@edge:drives:hosting_or_cloud_runtime_usd->elizaos_ai16z`
- `@edge:drives:platform_subscription_usd->fetch_agentverse`
- `@edge:accumulates:platform_subscription_usd->tco_score`
- `@edge:accumulates:platform_unit_call_cost_usd->tco_score`
- `@edge:accumulates:hosting_or_cloud_runtime_usd->tco_score`
- `@edge:accumulates:model_provider_fee_usd->tco_score`
- `@edge:accumulates:onchain_gas_and_token_fees->tco_score`
- `@edge:produces:revenue_calculator_semantic->monthly_revenue_usd`
- `@edge:produces:revenue_calculator_semantic->net_revenue_usd`
- `@edge:accumulates:net_revenue_usd->net_margin_usd`
- `@edge:accumulates:tco_score->net_margin_usd`
- `@edge:drives:prediction_accuracy_rate->prediction_engine_semantic`
- `@edge:drives:wallet_activation_rate->prediction_engine_semantic`
- `@edge:feeds:prediction_engine_semantic->yield_engine_semantic`
- `@edge:feeds:yield_engine_semantic->payment_engine_semantic`
- `@edge:feeds:payment_engine_semantic->liquidity_exchange_engine_semantic`
- `@edge:feeds:liquidity_exchange_engine_semantic->infrastructure_engine_semantic`
- `@edge:feeds:prediction_engine_semantic->closed_value_loop_semantic`
- `@edge:feeds:infrastructure_engine_semantic->closed_value_loop_semantic`
- `@edge:produces:closed_value_loop_semantic->closed_loop_health_score`
- `@edge:produces:closed_value_loop_semantic->user_journey_value_loop`
- `@edge:produces:tco_calculator_semantic->decision_ranking_semantic`
- `@edge:feeds:tco_calculator_semantic->tco_chart_panel_semantic`
- `@edge:feeds:closed_value_loop_semantic->value_loop_chart_panel_semantic`

## TCO Formula

Monthly TCO:

```text
monthly_tco =
  platform_subscription
  + platform_usage_calls * platform_unit_call_cost
  + hosting_or_cloud_runtime
  + model_input_output_tokens * model_provider_rate
  + storage_and_vector_index
  + social_api_rpc_data_api_fees
  + onchain_gas_and_token_fees
  + ops_hours * hourly_rate
```

Revenue simulation:

```text
monthly_revenue =
  monthly_active_users * paid_conversion_rate * subscription_price
  + marketplace_gmv * agent_token_take_rate

net_revenue =
  monthly_revenue * (1 - support_refund_rate)

net_margin_by_stack =
  net_revenue - monthly_tco_by_stack

breakeven_path =
  net_margin_by_stack >= 0 ? current revenue clears selected cost floor : reduce cost or raise conversion
```

This demo uses a normalized baseline:

| Lever | Baseline |
|---|---:|
| Workload | 10,000 agent requests / month |
| Agent count | 1 production agent |
| Runtime | Public internet reachable |
| Model provider | Excluded unless the stack bundles it or publishes a unit fee |
| Labor | Excluded from dollar totals, scored separately |
| Token setup cost | Tracked as token-denominated exposure unless public docs give a fixed USD price |
| Revenue | 2,500 monthly active users, 3% paid conversion, $19 subscription, $10,000 marketplace GMV, 0.5% agent-token take rate, 12% support/refund holdback |

## Executive Comparison

| Rank for Low TCO | Stack | Best Fit | Known Public Platform Cost | 10k Request Demo Cost | TCO Risk | Verdict |
|---:|---|---|---|---:|---|---|
| 1 | Fetch.ai / Agentverse | Hosted or local agents with clear quotas | Basic free; Premium $25/month; Enterprise custom | $0 if Basic quotas fit, otherwise $25/month before model or FET transaction costs | Quotas, FET wallet operations, paid plan upkeep | Best predictable starter TCO for hosted Web3 agents. |
| 2 | elizaOS / AI16Z | Open-source agent framework and own-infra control | Framework license $0; Eliza Cloud uses account credits; self-hosting is BYO | Public platform fee is $0 for self-host; managed cloud cost is not publicly fixed in docs | Ops burden, model API costs, cloud credits, plugin sprawl | Best FOSS/control profile, but TCO shifts to infra and operations. |
| 3 | Virtuals Protocol / GAME | Tokenized agent economy and Virtuals-native launch | GAME paid tier is $0.003/API call; launch modes add VIRTUAL-denominated setup costs | $30/month for 10k GAME calls, before token launch, gas, social/API extras | Token price volatility, launch mechanics, per-inference/on-chain economics | Strong if tokenized agent distribution matters; not the cheapest neutral demo path. |

## Dynamic Simulation Baseline

The Flow Editor calculator emits these values from the frontmatter ports, so changing any driver handle updates the chart payload and decision handles.

| Stack | Computed Monthly TCO | Net Revenue Input | Simulated Net Margin | Driver Notes |
|---|---:|---:|---:|---|
| elizaOS / AI16Z | $0 | $1,298 | $1,298 | Lowest cash floor when operator-owned runtime is acceptable. |
| Fetch.ai / Agentverse | $0 on Basic, $25 if Premium is required | $1,298 | $1,298 on Basic, $1,273 on Premium | Quota state determines whether the managed cash floor is zero or Premium. |
| Virtuals / GAME | $30 | $1,298 | $1,268 | Per-call GAME cost is dynamic; token setup and gas remain separate risk handles. |

Closed journey engine baseline:

| Engine | Main Driver Ports | Computed Output Ports | Baseline Readout |
|---|---|---|---|
| Prediction Engine | `prediction_accuracy_rate`, `wallet_activation_rate`, `monthly_active_users`, `paid_conversion_rate` | `predicted_intent_quality_score`, `conversion_uplift_rate`, `demand_forecast_index` | Intent quality and demand forecast rise only when prediction and wallet activation both improve. |
| Yield Engine | `net_revenue_usd`, `yield_share_rate`, `predicted_intent_quality_score` | `user_value_yield_usd`, `protocol_yield_score`, `retention_value_index` | User-retained value is tied to net revenue, not token price alone. |
| Payment Engine | `payment_success_rate`, `payment_fee_rate`, `user_value_yield_usd` | `settled_payment_volume_usd`, `payment_fee_cost_usd`, `payment_value_capture_usd` | Payment value capture stays visible after fee drag. |
| Liquidity & Exchange Engine | `liquidity_spread_rate`, `exchange_conversion_rate`, `token_price_volatility` | `exchange_liquidity_depth_usd`, `liquidity_slippage_cost_usd`, `token_exchange_efficiency_score` | Liquidity health falls when spread or volatility rises. |
| Infrastructure Engine | `infrastructure_uptime_slo`, `infrastructure_unit_cost_usd`, `monthly_agent_requests` | `infrastructure_cost_usd`, `uptime_value_score`, `infra_adjusted_value_usd` | Infrastructure value depends on uptime and per-request cost discipline. |
| Closed User Journey Value Loop | all five engine outputs | `closed_loop_health_score`, `user_journey_value_loop`, `web3_economics_decision_driver` | The loop is viable only when prediction, yield, payment, liquidity, and infrastructure outputs all remain healthy. |

## Stack Details

### 1. Fetch.ai / Agentverse

Agentverse is the lowest-friction hosted comparison when the goal is a Web3 agent that can be discovered, hosted, and messaged without building a custom deployment stack.

Cost profile:

| Component | Public Signal | TCO Impact |
|---|---|---|
| Basic plan | Free tier lists 8 hosted agents, 8 local agents, 60K seconds computation time, 10K processed messages, and 5MB storage | Baseline demo can fit if one request maps to one processed message and compute remains modest. |
| Premium plan | $25/month with 25 hosted agents, 25 local agents, 500K seconds computation time, 1M processed messages, and 100MB storage | Predictable small-team plan; 12-month subscription cost is $300 before model/API/FET costs. |
| Enterprise | Custom | Use only when quotas, support, or team constraints exceed Premium. |
| Agent type | Hosted agents are managed in Agentverse; local agents run on your own infrastructure; mailbox agents bridge intermittent local availability | Lets the same agent move between lowest-cash-cost local mode and managed uptime. |
| Web3 payments | Fetch docs describe FET token transactions, Almanac registration, and agent discovery | Token operations add wallet, transaction, and governance overhead even if hosting is inexpensive. |

TCO readout:

```text
Fetch Basic baseline = $0/month platform subscription
Fetch Premium baseline = $25/month platform subscription
12-month Premium cash floor = $300
```

Best use in Knowgrph:

- Use Fetch Agentverse when the demo needs hosted uptime, marketplace discovery, and a published quota table.
- Keep model-provider calls metered separately.
- Add a budget alert when processed messages approach quota.

### 2. elizaOS / AI16Z

elizaOS is the lowest-lock-in framework comparison. It is useful when the key TCO question is "what do we own ourselves?" rather than "which platform hosts the agent for us?"

Cost profile:

| Component | Public Signal | TCO Impact |
|---|---|---|
| Framework | elizaOS docs position it as an open TypeScript framework with local, Docker, Eliza Cloud, or own-infrastructure deployment | Framework license cost is $0; real cost moves to hosting, model providers, plugins, and operations. |
| Cloud deployment | Eliza Cloud deploys with `elizaos login` and `elizaos deploy`; docs say each deployment gets a dedicated EC2 t4g.small ARM server, HTTPS, health monitoring, and logs | Managed convenience is high, but docs refer to account credits rather than publishing a simple monthly price in the deploy guide. |
| Model providers | elizaOS uses plugins for providers such as OpenAI, Anthropic, Google GenAI, OpenRouter, and local Ollama | Cost can be near zero for local dev with Ollama, or unbounded if hosted model calls loop. |
| Operations | Self-hosting means Docker, secrets, uptime, monitoring, database, memory, and plugin version management | Lower vendor lock-in, higher engineering TCO. |

TCO readout:

```text
elizaOS self-host framework cost = $0/month
elizaOS managed cloud cost = credit-based / not fixed in public deploy docs
12-month public platform cash floor = $0 + infra + model/provider usage + ops
```

Best use in Knowgrph:

- Use elizaOS when FOSS, provider neutrality, and local/browser-side experimentation matter more than managed platform convenience.
- Use local models for draft demos and budget-capped cloud models for production.
- Track each plugin as its own cost node, because social, chain, search, and model plugins can each introduce separate usage fees.

### 3. Virtuals Protocol / GAME

Virtuals is the clearest match when the agent itself is part of an on-chain creator, token, and commerce economy.

Cost profile:

| Component | Public Signal | TCO Impact |
|---|---|---|
| GAME SDK free tier | GAME docs say the SDK is free with default limits of 10 GAME requests per 5 minutes and 10 X requests per 15 minutes | Good for prototyping; not enough for sustained production load. |
| GAME paid tier | GAME docs publish $0.003 per API call for the pay-as-you-go upgrade | 10,000 calls/month = $30/month before other providers. |
| Prototype agent launch | Virtuals Genesis docs describe a 100 VIRTUAL setup cost for a prototype bonding curve and 42K VIRTUAL needed for graduation | Token-denominated setup creates market-price exposure. |
| Other launch mechanics | Virtuals launch mechanics also describe a 1,000 VIRTUAL non-refundable creation fee for founders in the launch system | Pick the correct launch path before budgeting; do not assume all Virtuals launches have one fixed setup cost. |
| Agent inference payments | Virtuals docs describe public API access, predetermined per-inference costs, and VIRTUAL-denominated wallet deductions | Runtime can become token-metered if exposing agent APIs. |

TCO readout:

```text
GAME paid baseline = 10,000 calls * $0.003 = $30/month
12-month GAME call floor = $360
Token setup exposure = 100 VIRTUAL prototype path OR 1,000 VIRTUAL launch creation path, depending on launch mode
```

Best use in Knowgrph:

- Use Virtuals when the demo needs agent-token launch, agent commerce, or VIRTUAL-native distribution.
- Avoid it for a neutral zero-TCO document demo unless tokenized launch mechanics are the subject.
- Keep launch fee, graduation threshold, gas, and per-inference payments as separate nodes so token volatility cannot be hidden inside a single "platform fee" number.

## Optional Service Benchmark: AIXBT

AIXBT is useful as a reference point for "buy access to an existing Web3 AI agent/product" rather than "build a new general-purpose agent stack."

| Access Path | Public Price Signal | Best Fit |
|---|---:|---|
| Trader subscription | $40/month | Human terminal access, alerts, reports |
| Data subscription | $100/month | API, MCP, CLI, historical snapshots, recipes |
| Pro subscription | $200/month | Chat with AIXBT, custom reports, agent API |
| x402 key pass | $10/day, $50/week, $100/4 weeks | Temporary API access paid on Base |
| Indigo agent x402 call | $2/call | Occasional agent endpoint calls without a subscription |
| Holder path | 600K AIXBT held | Token-backed access with market exposure |

This is a high-signal comparison row for buyer TCO, but it is not a direct substitute for the three build/deploy stacks above.

## Scenario Matrix

| Scenario | Fetch.ai / Agentverse | elizaOS / AI16Z | Virtuals / GAME |
|---|---|---|---|
| Cheapest local prototype | Good with local agents and mailbox | Best with local Docker/Ollama | Good only if staying in free GAME limits |
| Cheapest managed prototype | Best if Basic quotas fit | Unknown until cloud credits/pricing are checked | $0 SDK until limits, then $0.003/call |
| Predictable small production | Premium at $25/month plus usage | Self-host if ops are available; cloud if credits are acceptable | $30/month per 10k calls plus token/gas costs |
| Best FOSS posture | Medium | High | Medium |
| Best on-chain agent economy | Medium | Medium | High |
| Lowest token volatility exposure | Medium | High if self-hosted and no token launch | Low |
| Lowest operator burden | High | Medium on cloud, low when self-hosted | Medium |

## Recommendation For This Demo

For a Knowgrph token-economics demo, use this decision rule:

1. Use elizaOS for the FOSS/local baseline. It keeps framework cost at zero and makes model/infra costs explicit.
2. Use Fetch Agentverse as the managed-hosting baseline. Its public quota table makes TCO easy to explain.
3. Use Virtuals only when the demo needs tokenized agent launch or agent-commerce economics.
4. Treat AIXBT as a buyer-side market-data agent benchmark, not as the main build stack.

The lowest transparent TCO path is:

```text
local demo = elizaOS + local model + no token launch
managed demo = Fetch Agentverse Basic/Premium + explicit model-provider cap
tokenized demo = Virtuals GAME + separate token setup and per-call meters
```

## Source Links

- [CoinGecko AI Agents category](https://www.coingecko.com/en/categories/ai-agents)
- [CoinMarketCap AI Agents category](https://coinmarketcap.com/view/ai-agents/)
- [QuickNode Top 10 AI Agents in Web3](https://www.quicknode.com/builders-guide/best/top-10-ai-agents-in-web3)
- [Virtuals GAME SDK usage and pricing](https://docs.game.virtuals.io/game-sdk-usage-and-pricing)
- [Virtuals Genesis launch modes](https://whitepaper.virtuals.io/builders-hub/genesis-launch/modes)
- [Virtuals launch mechanics](https://whitepaper.virtuals.io/about-virtuals/tokenization/agent-tokenization-platform/virtuals-launch-mechanics)
- [Virtuals agent inference payments](https://whitepaper.virtuals.io/about-virtuals/the-protocol/virtual-agents-as-programmable-decentralized-entities/agent-inference-payments)
- [Fetch.ai concepts and Agentverse architecture](https://fetch.ai/docs/concepts)
- [Agentverse subscriptions and quotas](https://docs.agentverse.ai/documentation/advanced-usages/agentverse-subscriptions-and-quotas)
- [Fetch.ai hosted, local, mailbox, and proxy agents](https://uagents.fetch.ai/docs/guides/types)
- [elizaOS overview](https://docs.elizaos.ai)
- [elizaOS deploy to cloud](https://docs.elizaos.ai/guides/deploy-to-cloud)
- [elizaOS language model configuration](https://docs.elizaos.ai/plugin-registry/llm)
- [AIXBT subscription pricing](https://aixbt.tech/subscribe)
- [AIXBT builder access paths](https://docs.aixbt.tech/builders/getting-started)
- [AIXBT REST API access levels](https://docs.aixbt.tech/builders/rest-api)

## Validation Checklist

- The document has renderer frontmatter for Knowgrph.
- The comparison is market-source aware instead of claiming one universal ranking.
- Every hard dollar/token number is linked to a public source.
- Model-provider and ops costs are not hidden inside platform fees.
- Token-denominated costs stay token-denominated; no fixed USD conversion is embedded.
- Every widget port handle corresponds to a cost, revenue, risk, metric, decision, or chart driver.
- `socket_types` and node tags reuse the renderer palette roles exposed by the FloatingPanel Renderer settings.
- `workflow_sections` mirrors the MainPanel Workflow Manager execution path from driver ingestion through chart rendering.
- The five Web3 economics engines are first-class Flow Editor widgets, not prose-only rows.
- The closed user journey value loop emits both decision drivers and a Rich Media Panel chart payload.
