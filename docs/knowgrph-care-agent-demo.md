---
title: "Knowgrph Care Agent Demo - Multilingual Care Plan Coach"
graphId: "md:knowgrph-care-agent-demo"
doc_type: "Care Agent Demo"
date: "2026-07-07"
lang: "en-US"
schema: "kgc-care-agent-demo/v1"
implementation_contract: "../agentic-os-docs/PRD-TAD.md"
template_policy: "Minimum viable runnable care-agent seed for local-first patient engagement ideation, harness definition, Canvas projection, and validation; authored source payload owns graph data; runtime outputs remain blank until local proof or operator-approved live evidence exists."
validation_input_forbid_hardcode_in_repo: "true"
deployed_api_claim: "false"
runtime_status: "spec-complete"
publish_scope: "local-only"
publish_policy: "No Prod mirror, Cloudflare deploy, external publication, PHI upload, fabricated provider IDs, generated media URLs, or clinical outcome claims."
kgCanvasSurfaceMode: "2d"
kgCanvasRenderMode: "2d"
kgCanvas2dRenderer: "storyboard"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: true
kgDocumentStructureBaselineLock: false
kgWorkflowManagerModeEnabled: true
kgAutoSaveEnabled: true
kgAutoSaveDebounceMs: 1500
kgAutoSaveOn: ["nodeEdit", "runComplete", "approval", "assetReady"]
kgBottomPanelOpen: true
kgBottomPanelTab: "eventModeling"
kgFloatingPanelOpen: true
kgFloatingPanelView: "storyboard"
kgSharedRendererContract:
  version: "shared-renderer-contract/v1"
  semanticIdentity: "buildScopedGraphSemanticKey"
  cardPreview: "CardMediaPreview + CardMarkdownPreview"
  widgetCard: "canvas:widgetCard"
  richMediaPanel: "RichMediaPanel"
  storyboardDisplay: "2D Renderer: Storyboard Card (default) and Widget variants"
  storyboardSurfaces: ["Cards", "Widgets", "Rich Media Panels"]
  edgeModel: "active graph edges derive from this frontmatter-owned care-agent graph"
  rendererPolicy: "frontmatter and source payloads own data; renderers project view state only"
credential_policy:
  phi: "Use synthetic or operator-redacted source notes only; never commit PHI, credentials, browser sessions, or generated patient media."
  providers: "Server-managed environment names only; no browser-stored keys, repo-stored keys, or client-side signing."
  live_generation: "Human approval required before paid, mutating, provider, browser-auth, Prod, or Cloudflare action."
safety_policy:
  clinical_role: "Patient engagement coach and explanation aid; not diagnosis, prescribing, emergency triage, or clinician replacement."
  escalation: "Emergency, red-flag, medication-dose, diagnosis, and conflicting-instruction cases route to clinician or emergency care guidance."
  source_policy: "Use operator-owned care-plan notes, discharge instructions, appointment tasks, lab explanations, and approved paraphrases only."
  data_minimization: "Prefer synthetic examples, local redaction, and source hashes over raw PHI."
runtime_defaults:
  provider: "knowgrph-local-care-dry-run"
  model: "care-agent-local-dry-run-v1"
  status: "spec-complete"
  paid_call_count: 0
  prompt_tokens: 0
  completion_tokens: 0
  cache_hits: 0
  estimated_cost_usd: 0
  runtime_proof_path: ""
  provider_job_id: ""
  live_result_url: ""
starter_inputs:
  patient_context: "Synthetic older-adult patient managing a new care plan after a clinic visit."
  source_url: ""
  source_title: "Operator-supplied care-plan notes"
  source_author: ""
  target_brief: "Create a multilingual, low-spec, phone-camera-friendly care-plan coach that explains tasks, checks comprehension, prepares caregiver handoff, and fails closed before clinical or deployment risk."
  approval_state: "draft"
agentic_os_care_agent_pipeline:
  version: "agentic-care-agent-pipeline/v1"
  status: "spec-complete"
  autonomy_mode: "local-dry-run-first"
  source_docs:
    - "../agentic-os-docs/MEMORY.md"
    - "../agentic-os-docs/AGENTS.md"
    - "../agentic-os-docs/DICTIONARY-COMMAND.md"
    - "../agentic-os-docs/DICTIONARY-SEMANTIC.md"
    - "../agentic-os-docs/DICTIONARY-BINDING.md"
    - "../agentic-os-docs/HARNESS-CONTRACTS.md"
    - "../agentic-os-docs/RUNTIME-READINESS.md"
    - "../../huijoohwee.github.io/guidelines/prd-tad-guidelines.md"
  invocation_routes:
    slash:
      - "/source.normalize"
      - "/memory.seed"
      - "/prd-tad.create"
      - "/harness.define"
      - "/mcp.capabilities"
      - "/cost.audit"
      - "/canvas.project"
      - "/runtime-ready.check"
      - "/validation.run"
      - "/deploy.guard"
    semantic:
      - "#frontmatter"
      - "#harness"
      - "#token-economics"
      - "#tco"
      - "#ttv"
      - "#vcc"
      - "#foss"
      - "#canvas"
      - "#runtime-ready"
      - "#approval-gate"
      - "#dev-only"
      - "#no-hardcode"
      - "#no-legacy"
    binding:
      - "@source.frontmatter"
      - "@source.body"
      - "@operator"
      - "@local-harness"
      - "@cost-log"
      - "@mcp-gateway"
      - "@canvas"
      - "@runtime-proof"
      - "@approval-gate"
      - "@dev-only"
  stages:
    - id: "care-source-normalization"
      lane: "Source"
      command: "/source.normalize"
      bindings: ["@source.frontmatter", "@source.body", "@operator"]
      semantics: ["#frontmatter", "#no-hardcode", "#no-legacy"]
      output: "redacted source summary, missing-field list, and safety boundary"
      paid_call_count: 0
    - id: "care-plan-ideation"
      lane: "Ideation"
      command: "/memory.seed"
      bindings: ["@source.frontmatter", "@source.body", "@operator"]
      semantics: ["#frontmatter", "#ttv", "#vcc"]
      output: "minimum viable care-coach journey and patient value hypothesis"
      paid_call_count: 0
    - id: "care-harness-definition"
      lane: "Harness"
      command: "/harness.define"
      bindings: ["@local-harness", "@cost-log", "@mcp-gateway"]
      semantics: ["#harness", "#token-economics", "#approval-gate"]
      output: "typed care-agent manifest with schemas, bounds, fallback, and cost ledger"
      paid_call_count: 0
    - id: "care-canvas-projection"
      lane: "Canvas"
      command: "/canvas.project"
      bindings: ["@canvas", "@runtime-proof", "@approval-gate"]
      semantics: ["#canvas", "#runtime-ready", "#dev-only"]
      output: "Storyboard cards and Rich Media proof surfaces from source-owned frontmatter"
      paid_call_count: 0
    - id: "care-validation"
      lane: "Validation"
      command: "/validation.run"
      bindings: ["@runtime-proof", "@dev-only"]
      semantics: ["#vcc", "#no-hardcode", "#runtime-ready"]
      output: "parse, route, schema, cost, approval, and deploy-boundary proof"
      paid_call_count: 0
  gates:
    clinical_decision: "blocked; route to clinician or emergency instruction"
    phi_upload: "blocked until explicit operator-owned redaction and approval"
    live_provider_calls: "blocked until @operator approves @approval-gate"
    prod_mirror: "blocked by /deploy.guard and @dev-only"
    cloudflare: "blocked by /deploy.guard and @dev-only"
care_agent_harness:
  id: "care-agent-local-harness"
  owner: "existing shared Agentic OS harness utilities"
  mode: "local-dry-run-first"
  input_schema:
    fields: ["redactedCarePlan", "language", "literacyLevel", "caregiverMode", "cameraHint", "approvals"]
    rejects: ["rawPhi", "credential", "unboundedLoop", "missingApprovalForClinicalRisk"]
  output_schema:
    fields: ["taskCards", "plainLanguageExplanation", "teachBackQuestions", "caregiverHandoff", "safetyEscalations", "costLog", "validationStatus"]
  fallback:
    schema_error: "reject before token spend"
    safety_risk: "return escalation card and stop"
    approval_missing: "blocked with zero paid calls"
    budget_breach: "blocked with cost summary"
  bounds:
    max_iterations: 1
    circuit_breaker: "schema error, safety risk, missing approval, budget breach, or validation failure"
socket_types:
  care_source_signal: {color: "#0ea5e9", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [care_source_signal]}
  care_task_signal: {color: "#14b8a6", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [care_task_signal]}
  care_safety_signal: {color: "#ef4444", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [care_safety_signal]}
  care_cost_signal: {color: "#f59e0b", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [care_cost_signal]}
  care_proof_signal: {color: "#22c55e", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [care_proof_signal]}
flow_diagrams:
  key: "flow_diagrams"
  type: "object"
  value:
    care_agent_flowchart:
      key: "care_agent_flowchart"
      type: "mermaid_flowchart"
      floatingPanelView: "flowchart"
      floatingPanelOpen: true
      bottomPanelTab: "flowchart"
      bottomPanelOpen: true
      value: |-
        flowchart LR
          source["Redacted care-plan source"]
          normalize["/source.normalize #frontmatter @source.frontmatter"]
          ideate["/memory.seed #ttv #vcc @source.body"]
          harness["/harness.define #harness @local-harness"]
          cost["/cost.audit #token-economics #tco @cost-log"]
          canvas["/canvas.project #canvas @canvas"]
          validate["/validation.run #vcc @runtime-proof"]
          guard["/deploy.guard #dev-only @operator"]
          source --> normalize --> ideate --> harness --> cost --> canvas --> validate --> guard
    care_agent_event_model:
      key: "care_agent_event_model"
      type: "mermaid_eventmodeling"
      floatingPanelView: "eventModeling"
      floatingPanelOpen: true
      bottomPanelTab: "eventModeling"
      bottomPanelOpen: true
      value: |-
        eventmodeling
        tf 01 ui RedactedCarePlanSubmitted
        tf 02 cmd NormalizeCarePlanSource
        tf 03 evt SourceSafetyBoundaryReady
        tf 04 cmd DefineCareAgentHarness
        tf 05 evt HarnessContractReady
        tf 06 cmd BuildTaskCards
        tf 07 evt TaskCardsReady
        tf 08 cmd RunTeachBackCheck
        tf 09 evt ComprehensionSignalsReady
        tf 10 cmd PrepareCaregiverHandoff
        tf 11 evt HandoffReady
        tf 12 cmd ValidateLocalProof
        tf 13 evt RuntimeProofOrGateReady
flow:
  direction: "LR"
  edgeType: "smoothstep"
  balancedViewportPreset: "widgetFrontmatter"
  computed: true
  snapToGrid: true
  nodes:
    - id: "care_source"
      type: "InputWidget"
      label: "Care Source"
      lane: "Source"
      position: {"x":0,"y":0}
      handles: {"source":["redactedCarePlan","language","literacyLevel"]}
      redactedCarePlan: "Synthetic care-plan note: take a morning walk if cleared, track symptoms, prepare questions for the next visit, and ask a clinician about medication uncertainty."
      language: "multilingual"
      literacyLevel: "plain-language"
      "frontmatter:primitive": "node"
      "kgc:readingSummary": "Source-owned redacted care-plan intake. It carries synthetic or operator-redacted notes only and rejects PHI or credentials."
    - id: "care_normalize"
      type: "ComputeWidget"
      label: "Normalize Source"
      lane: "Source"
      position: {"x":340,"y":0}
      handles: {"target":["redactedCarePlan"],"source":["normalizedSummary","safetyBoundary"]}
      invocation: "/source.normalize #frontmatter #no-hardcode @source.frontmatter @source.body"
      normalizedSummary: ""
      safetyBoundary: "No diagnosis, dosage change, emergency triage, or PHI persistence."
      "frontmatter:primitive": "node"
      "kgc:readingSummary": "Normalization removes stale or unsafe source content at the document source and surfaces missing care-plan fields before any model spend."
    - id: "care_tasks"
      type: "ComputeWidget"
      label: "Care Task Cards"
      lane: "Ideation"
      position: {"x":680,"y":0}
      handles: {"target":["normalizedSummary","language"],"source":["taskCards","teachBackQuestions"]}
      invocation: "/memory.seed /prd-tad.create #ttv #vcc @source.body @operator"
      taskCards: ""
      teachBackQuestions: ""
      "frontmatter:primitive": "node"
      "kgc:readingSummary": "Minimum viable task-card generation for patient engagement: explain, confirm understanding, and prepare caregiver follow-up."
    - id: "care_harness"
      type: "ComputeWidget"
      label: "Harness Contract"
      lane: "Harness"
      position: {"x":1020,"y":0}
      handles: {"target":["taskCards"],"source":["manifest","costLog","blockedReasons"]}
      invocation: "/harness.define /mcp.capabilities /cost.audit #harness #token-economics @local-harness @cost-log @mcp-gateway"
      manifest: ""
      costLog: {"model":"local-dry-run","prompt_tokens":0,"completion_tokens":0,"cache_hits":0,"estimated_cost_usd":0}
      blockedReasons: ["clinical_decision_without_clinician", "phi_upload_without_redaction", "missing_operator_approval_for_live_call"]
      "frontmatter:primitive": "node"
      "kgc:readingSummary": "Typed local harness manifest with one-iteration bounds, safety fallback, approval gates, and zero-cost dry-run ledger."
    - id: "care_canvas"
      type: "RichMediaPanel"
      label: "Patient Coach Panel"
      lane: "Canvas"
      position: {"x":1360,"y":0}
      handles: {"target":["manifest","taskCards"],"source":["outputSrcDoc","runtimeProof"]}
      invocation: "/canvas.project #canvas #runtime-ready @canvas @runtime-proof"
      outputSrcDoc: |-
        <article aria-labelledby="care-agent-panel-title">
          <header>
            <h1 id="care-agent-panel-title">Care Plan Coach</h1>
            <p>Local dry-run panel for plain-language task cards, teach-back prompts, caregiver handoff, and safety escalation.</p>
          </header>
          <section aria-labelledby="next-steps-heading">
            <h2 id="next-steps-heading">Next Steps</h2>
            <ol>
              <li>Review the redacted care-plan note.</li>
              <li>Confirm what the patient understood.</li>
              <li>Prepare questions for a clinician when instructions conflict.</li>
            </ol>
          </section>
          <section aria-labelledby="safety-heading">
            <h2 id="safety-heading">Safety Boundary</h2>
            <p>Emergency, diagnosis, and medication-dose questions stop here and route to clinician or emergency guidance.</p>
          </section>
        </article>
      runtimeProof: ""
      "frontmatter:primitive": "node"
      "kgc:readingSummary": "Semantic HTML Rich Media panel for care-agent proof surfaces. It uses article, header, section, heading, paragraph, and list elements instead of generic containers."
    - id: "care_validation"
      type: "ReviewWidget"
      label: "Validation Gate"
      lane: "Validation"
      position: {"x":1700,"y":0}
      handles: {"target":["runtimeProof","costLog"],"source":["validationStatus","deployBoundary"]}
      invocation: "/validation.run /deploy.guard #vcc #dev-only #approval-gate @runtime-proof @dev-only @operator"
      validationStatus: "pending"
      deployBoundary: "Dev-only; no Prod mirror or Cloudflare deploy without explicit operator instruction."
      "frontmatter:primitive": "node"
      "kgc:readingSummary": "Validation gate requires parse, route, schema, cost, safety, approval, and deploy-boundary proof before runtime-ready status."
  edges:
    - id: "edge_source_normalize"
      source: "care_source"
      target: "care_normalize"
      type: "care_source_signal"
    - id: "edge_normalize_tasks"
      source: "care_normalize"
      target: "care_tasks"
      type: "care_task_signal"
    - id: "edge_tasks_harness"
      source: "care_tasks"
      target: "care_harness"
      type: "care_task_signal"
    - id: "edge_harness_canvas"
      source: "care_harness"
      target: "care_canvas"
      type: "care_proof_signal"
    - id: "edge_canvas_validation"
      source: "care_canvas"
      target: "care_validation"
      type: "care_proof_signal"
strybldr_storyboard:
  version: "1"
  runId: "care-agent-demo"
  createdAtMs: "1783468800000"
  notes: "Neutral care-agent payload for local-first patient engagement. Use synthetic or redacted source fields before any live provider call."
  workflow:
    stages:
      - "Source"
      - "Ideation"
      - "Harness"
      - "Canvas"
      - "Safety"
      - "Cost"
      - "Validation"
      - "Publish"
    publish:
      id: "care-agent-local-publish-packet"
      label: "Local publish packet"
      policy: "Write local packet fields only; do not claim Prod, Cloudflare, provider IDs, patient outcomes, or live evidence without explicit operator approval and returned proof."
  sources:
    - sourceUnitId: "care-agent-demo-source"
      workspacePath: "docs/knowgrph-care-agent-demo.md"
      relativePath: "knowgrph-care-agent-demo.md"
      originalName: "Care agent demo source"
      mediaKind: "doc"
      mimeHint: "text/markdown"
      byteSize: "0"
      textHash: "care-agent-demo"
      mediaUrl: ""
  elements:
    - id: "care-source-card"
      sourceUnitId: "care-agent-demo-source"
      label: "Care source"
      confidence: 1
      sourceBox: null
      evidenceKind: "source-metadata"
      provider: "knowgrph"
      lane: "Source"
      order: 1
      prompt: "Run /source.normalize #frontmatter #no-hardcode @source.frontmatter @source.body."
      action: "Keep source notes synthetic or redacted; reject PHI, credentials, and provider-owned secrets."
      summary: "Source intake owns the care-plan context and safety boundary before any agent step runs."
    - id: "care-ideation-card"
      sourceUnitId: "care-agent-demo-source"
      label: "Care-plan ideation"
      confidence: 1
      sourceBox: null
      evidenceKind: "agentic-os-invocation"
      provider: "knowgrph"
      lane: "Ideation"
      order: 2
      prompt: "Run /memory.seed /prd-tad.create #ttv #vcc #foss @source.body @operator."
      action: "Produce the smallest patient-engagement workflow with clear time-to-value and VCC checks."
      summary: "Ideation turns redacted care notes into task cards, teach-back prompts, and caregiver handoff scope."
    - id: "care-harness-card"
      sourceUnitId: "care-agent-demo-source"
      label: "Care harness"
      confidence: 1
      sourceBox: null
      evidenceKind: "runtime-plan"
      provider: "knowgrph-local-care-dry-run"
      lane: "Harness"
      order: 3
      prompt: "Run /harness.define /mcp.capabilities /cost.audit #harness #token-economics @local-harness @cost-log @mcp-gateway."
      action: "Define typed input, output, fallback, cost log, max iteration, and approval gates."
      summary: "Harness definition blocks unsafe clinical, PHI, paid, mutating, and deployment paths by default."
    - id: "care-canvas-card"
      sourceUnitId: "care-agent-demo-source"
      label: "Canvas projection"
      confidence: 1
      sourceBox: null
      evidenceKind: "canvas-proof-plan"
      provider: "knowgrph"
      lane: "Canvas"
      order: 4
      prompt: "Run /canvas.project #canvas #runtime-ready @canvas @runtime-proof."
      action: "Project source-backed cards and semantic HTML panel through existing Canvas owners."
      summary: "Canvas projection uses Storyboard and Rich Media surfaces without renderer forks or dashboard-only state."
    - id: "care-safety-card"
      sourceUnitId: "care-agent-demo-source"
      label: "Safety gate"
      confidence: 1
      sourceBox: null
      evidenceKind: "safety-boundary"
      provider: "knowgrph"
      lane: "Safety"
      order: 5
      prompt: "Check clinical decision, emergency, medication-dose, conflicting-instruction, and PHI upload gates."
      action: "Route high-risk requests to clinician or emergency guidance and stop the agent loop."
      summary: "Safety gate keeps the demo as a coach and explanation aid, not a medical decision system."
    - id: "care-cost-card"
      sourceUnitId: "care-agent-demo-source"
      label: "Cost audit"
      confidence: 1
      sourceBox: null
      evidenceKind: "cost-ledger"
      provider: "knowgrph-local-care-dry-run"
      lane: "Cost"
      order: 6
      prompt: "Run /cost.audit #token-economics #tco #foss @cost-log @operator."
      action: "Keep local proof zero-cost and compare any proposed live dependency against FOSS or existing-owner alternatives."
      summary: "Cost audit reports token, cache, TCO, and budget fields before any paid call can run."
    - id: "care-validation-card"
      sourceUnitId: "care-agent-demo-source"
      label: "Validation"
      confidence: 1
      sourceBox: null
      evidenceKind: "runtime-review"
      provider: "knowgrph"
      lane: "Validation"
      order: 7
      prompt: "Run /validation.run #vcc #no-hardcode @runtime-proof @dev-only."
      action: "Require focused parse, route, schema, cost, safety, approval, and deploy-boundary evidence."
      summary: "Validation can promote the doc only after surfaced proof; prose alone keeps it spec-complete."
    - id: "care-publish-card"
      sourceUnitId: "care-agent-demo-source"
      label: "Publish gate"
      confidence: 1
      sourceBox: null
      evidenceKind: "runtime-publish"
      provider: "knowgrph"
      lane: "Publish"
      order: 8
      prompt: "Run /deploy.guard #dev-only #approval-gate @operator @dev-only."
      action: "Keep publish scope local-only until the operator explicitly authorizes Prod or Cloudflare."
      summary: "Publish gate records local packet readiness and blocks mirror or deploy mutation by default."
  cards: []
---

# Knowgrph Care Agent Demo

This is a `/prd-tad.create` minimum viable care-agent seed for multilingual patient engagement. It uses `/source.normalize`, `/memory.seed`, `/harness.define`, `/cost.audit`, `/canvas.project`, `/runtime-ready.check`, `/validation.run`, and `/deploy.guard` with existing `#` semantic filters and `@` bindings. /memory.seed #frontmatter #ttv #vcc @source.frontmatter @source.body

The demo is intentionally neutral and local-first. It explains a redacted care plan, prepares task cards, asks teach-back questions, and creates a caregiver handoff. It does not diagnose, prescribe, alter medication instructions, upload PHI, or claim live provider output. Runtime IDs, generated media, provider evidence, Prod mirror status, and Cloudflare deployment fields remain blank until real proof exists and the operator approves the relevant gate.

## Care-Agent Flow

| Stage | Invocation | Output | Gate |
|---|---|---|---|
| Source | `/source.normalize #frontmatter #no-hardcode @source.frontmatter @source.body` | Redacted source summary and missing-field list | Reject PHI, credentials, and stale hardcodes |
| Ideation | `/memory.seed /prd-tad.create #ttv #vcc #foss @source.body @operator` | Minimum viable patient-engagement journey | Keep scope small and ROI-positive |
| Harness | `/harness.define /mcp.capabilities #harness @local-harness @mcp-gateway` | Typed input, output, fallback, bounds, and capability list | Fail before spend when schema or approval is missing |
| Cost | `/cost.audit #token-economics #tco @cost-log @operator` | Token, cache, TCO, and budget ledger | Local dry-run reports exact zero |
| Canvas | `/canvas.project #canvas @canvas @runtime-proof` | Storyboard cards and semantic Rich Media panel | Existing shared Canvas owners only |
| Validation | `/validation.run #vcc #runtime-ready @runtime-proof @dev-only` | Focused proof or spec-complete gap | No prose-only runtime-ready promotion |
| Deploy guard | `/deploy.guard #dev-only #approval-gate @operator @dev-only` | Local-only status | No Prod or Cloudflare mutation |

## MVP Value

| Persona | Job | First value | Time-to-value target |
|---|---|---|---|
| Patient | Understand the next care-plan steps | Plain-language task cards and teach-back prompts | Under 3 minutes after redacted note entry |
| Caregiver | Know what to support and when to escalate | Handoff checklist and clinician-question list | Under 5 minutes |
| Solo builder | Prove a care-agent harness without cloud spend | Local Storyboard and validation packet | Same working session |

## Harness Contract

```yaml
care_agent_local_harness:
  source: "@source.frontmatter + @source.body"
  normalize: "/source.normalize #frontmatter #no-hardcode @source.frontmatter @source.body"
  ideation: "/memory.seed /prd-tad.create #ttv #vcc #foss @source.body @operator"
  harness: "/harness.define /mcp.capabilities #harness @local-harness @mcp-gateway"
  cost: "/cost.audit #token-economics #tco @cost-log @operator"
  canvas: "/canvas.project #canvas #runtime-ready @canvas @runtime-proof"
  validation: "/validation.run #vcc #no-hardcode @runtime-proof @dev-only"
  deploy_guard: "/deploy.guard #dev-only #approval-gate @operator @dev-only"
  default_result: "local care-agent packet; paid_call_count remains 0"
  live_result: "blank until @operator approves @approval-gate and returned evidence exists"
```

## Safety Boundaries

| Risk | Required behavior |
|---|---|
| Emergency symptom or red flag | Stop coaching and route to emergency or clinician guidance. |
| Diagnosis or medication-dose request | Explain that the agent cannot decide and prepare clinician questions. |
| Conflicting source instructions | Preserve the conflict and ask for clinician clarification. |
| Raw PHI or credential input | Reject or redact before persistence, model calls, or sharing. |
| Live provider, browser-auth, Prod, or Cloudflare action | Require explicit `@operator` approval and `@approval-gate` evidence. |

## Use

1. Open this Markdown file in Knowgrph.
2. Confirm Canvas View reports `2D Renderer: Storyboard`.
3. Replace the synthetic care-plan note with operator-redacted source content only.
4. Run `/source.normalize #frontmatter #no-hardcode @source.frontmatter @source.body`.
5. Run `/harness.define /cost.audit #harness #token-economics @local-harness @cost-log`.
6. Run `/canvas.project #canvas @canvas @runtime-proof` and review the Storyboard plus Rich Media panel.
7. Run `/validation.run #vcc @runtime-proof @dev-only`.
8. Keep `/deploy.guard #dev-only @dev-only` active unless the operator explicitly authorizes Prod or Cloudflare.

## Acceptance Checklist

- [ ] Frontmatter parses from byte zero without repair fallback.
- [ ] Source content is synthetic or operator-redacted.
- [ ] `/`, `#`, and `@` tokens match the Agentic OS dictionaries.
- [ ] Harness fields include schemas, fallback, max iteration, circuit breaker, and cost log.
- [ ] Local dry-run cost fields remain exact zero.
- [ ] Storyboard and Rich Media projection use existing shared Canvas owners.
- [ ] Rich Media HTML uses semantic elements and no generic container markup.
- [ ] Safety gate blocks clinical decisions, PHI upload, and medication-dose changes.
- [ ] Runtime-ready status is withheld until focused proof is surfaced.
- [ ] Publish scope remains `local-only` unless the operator explicitly authorizes Prod or Cloudflare.

## Guardrails

- Do not hardcode patient identifiers, PHI, source URLs, provider IDs, credentials, generated media, or runtime proof into repo code or tests.
- Do not add downstream aliases, compatibility remaps, duplicate registries, or renderer forks for care-agent routing.
- Do not backfill runtime-ready claims from prose, screenshots, or stale local state.
- Do not deploy this demo to Prod or Cloudflare from this document alone.
- Keep frontmatter as the source-owned graph and body prose as the human workflow.
