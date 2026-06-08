export const STRYBORD_API_VERSION = '2026-06-08.strybord.v1'

export const STRYBORD_ROUTE_PREFIX = '/api/payments/strybord'

export const STRYBORD_MCP_WRITE_SCOPES = Object.freeze({
  runWrite: 'knowgrph:run.write',
  renderWrite: 'knowgrph:render.write',
  publishWrite: 'knowgrph:publish.write',
  payoutWrite: 'knowgrph:payout.write',
})

export const STRYBORD_MCP_ACTION_TOOL_IDS = Object.freeze({
  startStoryboardRun: 'start_storyboard_run',
  advanceLane: 'advance_lane',
  submitResearchQuery: 'submit_research_query',
  proposeBudget: 'propose_budget',
  requestHumanGate: 'request_human_gate',
  getGateDecision: 'get_gate_decision',
  enqueueRender: 'enqueue_render',
  publishAsset: 'publish_asset',
  settlePayout: 'settle_payout',
  getRunState: 'get_run_state',
})

export const STRYBORD_MUTATING_MCP_ACTION_TOOL_IDS = Object.freeze([
  STRYBORD_MCP_ACTION_TOOL_IDS.startStoryboardRun,
  STRYBORD_MCP_ACTION_TOOL_IDS.advanceLane,
  STRYBORD_MCP_ACTION_TOOL_IDS.submitResearchQuery,
  STRYBORD_MCP_ACTION_TOOL_IDS.proposeBudget,
  STRYBORD_MCP_ACTION_TOOL_IDS.requestHumanGate,
  STRYBORD_MCP_ACTION_TOOL_IDS.enqueueRender,
  STRYBORD_MCP_ACTION_TOOL_IDS.publishAsset,
  STRYBORD_MCP_ACTION_TOOL_IDS.settlePayout,
] as const)

export type StrybordMcpActionToolId =
  typeof STRYBORD_MCP_ACTION_TOOL_IDS[keyof typeof STRYBORD_MCP_ACTION_TOOL_IDS]

const MUTATING_TOOL_ID_SET = new Set<string>(STRYBORD_MUTATING_MCP_ACTION_TOOL_IDS)

export const isStrybordMutatingMcpActionToolId = (toolId: string): boolean =>
  MUTATING_TOOL_ID_SET.has(String(toolId || '').trim())

export const STRYBORD_LANES = Object.freeze([
  'Brief',
  'Research',
  'Storyboard',
  'Storytree',
  'Proof',
  'CTA',
  'Budget',
  'Render',
  'Publish',
] as const)

export type StrybordLane = typeof STRYBORD_LANES[number]

export const STRYBORD_RUN_STATES = Object.freeze([
  'pending',
  'running',
  'awaiting_gate',
  'blocked',
  'succeeded',
  'failed',
  'cancelled',
] as const)

export type StrybordRunState = typeof STRYBORD_RUN_STATES[number]

export const STRYBORD_GATE_KINDS = Object.freeze([
  'budget',
  'proof',
  'publish',
  'render',
  'compliance',
] as const)

export type StrybordGateKind = typeof STRYBORD_GATE_KINDS[number]

export const STRYBORD_GATE_STATES = Object.freeze([
  'pending',
  'approved',
  'rejected',
  'expired',
] as const)

export type StrybordGateState = typeof STRYBORD_GATE_STATES[number]

export const STRYBORD_PAYOUT_STATUSES = Object.freeze([
  'pending',
  'settled',
  'failed',
  'reversed',
  'held',
] as const)

export type StrybordPayoutStatus = typeof STRYBORD_PAYOUT_STATUSES[number]

export const STRYBORD_CREATOR_SHARE_BPS_DEFAULT = 8000
export const STRYBORD_PLATFORM_SHARE_BPS_DEFAULT = 2000
export const STRYBORD_BPS_TOTAL = 10000
export const STRYBORD_DEFAULT_MAX_ITERATIONS = 24

export const normalizeStrybordBps = (value: unknown, fallback: number): number => {
  const n = typeof value === 'number' ? value : Number(value)
  if (!Number.isFinite(n)) return fallback
  return Math.max(0, Math.min(STRYBORD_BPS_TOTAL, Math.floor(n)))
}

export const buildStrybordRevenueSplit = (args: {
  grossUsd: unknown
  creatorShareBps?: unknown
  platformShareBps?: unknown
}) => {
  const grossUsdRaw = typeof args.grossUsd === 'number' ? args.grossUsd : Number(args.grossUsd)
  const grossUsd = Number.isFinite(grossUsdRaw) ? Math.max(0, grossUsdRaw) : 0
  const creatorShareBps = normalizeStrybordBps(args.creatorShareBps, STRYBORD_CREATOR_SHARE_BPS_DEFAULT)
  const platformShareBps = args.platformShareBps == null
    ? STRYBORD_BPS_TOTAL - creatorShareBps
    : normalizeStrybordBps(args.platformShareBps, STRYBORD_PLATFORM_SHARE_BPS_DEFAULT)
  const valid = creatorShareBps + platformShareBps === STRYBORD_BPS_TOTAL
  const roundCurrency = (value: number) => Math.round(value * 100) / 100
  return {
    grossUsd,
    creatorShareBps,
    platformShareBps,
    creatorAmountUsd: roundCurrency((grossUsd * creatorShareBps) / STRYBORD_BPS_TOTAL),
    platformAmountUsd: roundCurrency((grossUsd * platformShareBps) / STRYBORD_BPS_TOTAL),
    valid,
  }
}

export const buildStrybordMcpToolPath = (toolId: string): string =>
  `${STRYBORD_ROUTE_PREFIX}/mcp-tools/${encodeURIComponent(String(toolId || '').trim())}`

export const STRYBORD_MCP_ACTION_TOOL_META = Object.freeze({
  [STRYBORD_MCP_ACTION_TOOL_IDS.startStoryboardRun]: {
    title: 'Start Storyboard Run',
    scope: STRYBORD_MCP_WRITE_SCOPES.runWrite,
    mutating: true,
    description: 'Create a dual-persisted StoryboardRun and start the Storyboard Studio OS orchestration loop.',
  },
  [STRYBORD_MCP_ACTION_TOOL_IDS.advanceLane]: {
    title: 'Advance Storyboard Run Lane',
    scope: STRYBORD_MCP_WRITE_SCOPES.runWrite,
    mutating: true,
    description: 'Advance a StoryboardRun to the next lane, enforcing iteration bounds and gate state.',
  },
  [STRYBORD_MCP_ACTION_TOOL_IDS.submitResearchQuery]: {
    title: 'Submit Strybord Research Query',
    scope: STRYBORD_MCP_WRITE_SCOPES.runWrite,
    mutating: true,
    description: 'Record a research-lane request for a StoryboardRun.',
  },
  [STRYBORD_MCP_ACTION_TOOL_IDS.proposeBudget]: {
    title: 'Propose Strybord Budget',
    scope: STRYBORD_MCP_WRITE_SCOPES.runWrite,
    mutating: true,
    description: 'Record a provider-neutral budget estimate before paid render.',
  },
  [STRYBORD_MCP_ACTION_TOOL_IDS.requestHumanGate]: {
    title: 'Request Human Gate',
    scope: STRYBORD_MCP_WRITE_SCOPES.runWrite,
    mutating: true,
    description: 'Open or update a human-in-the-loop Budget, Proof, Publish, Render, or Compliance gate.',
  },
  [STRYBORD_MCP_ACTION_TOOL_IDS.getGateDecision]: {
    title: 'Get Human Gate Decision',
    scope: 'knowgrph:read',
    mutating: false,
    description: 'Read the current decision for a human-in-the-loop gate.',
  },
  [STRYBORD_MCP_ACTION_TOOL_IDS.enqueueRender]: {
    title: 'Enqueue Strybord Render',
    scope: STRYBORD_MCP_WRITE_SCOPES.renderWrite,
    mutating: true,
    description: 'Create a render job placeholder only after the Budget gate is approved.',
  },
  [STRYBORD_MCP_ACTION_TOOL_IDS.publishAsset]: {
    title: 'Publish Strybord Asset',
    scope: STRYBORD_MCP_WRITE_SCOPES.publishWrite,
    mutating: true,
    description: 'Publish a render artifact only after Proof and Publish gates are approved.',
  },
  [STRYBORD_MCP_ACTION_TOOL_IDS.settlePayout]: {
    title: 'Settle Strybord Payout',
    scope: STRYBORD_MCP_WRITE_SCOPES.payoutWrite,
    mutating: true,
    description: 'Settle the creator revenue share at the default 80/20 split through payment-worker ownership.',
  },
  [STRYBORD_MCP_ACTION_TOOL_IDS.getRunState]: {
    title: 'Get Storyboard Run State',
    scope: 'knowgrph:read',
    mutating: false,
    description: 'Read the D1-authoritative StoryboardRun state and gate/payout summary.',
  },
})
