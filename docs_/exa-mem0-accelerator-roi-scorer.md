---
schema: kgc-computing-flow/v1
id: accelerator-roi-scorer
version: 1.2.0
status: draft
created: 2026-06-12
updated: 2026-06-13
author: airvio/joohwee

# ── tier-a instance fields ──────────────────────────────────────────────────
title: AcceleratorROI Scorer + EcosystemPulse Dashboard
tagline: TOPSIS-ranked accelerator intelligence with cohort-level ecosystem monitoring
product: Knowgrph / airvio
track: Startup Ecosystem
theme: Track what happens to startups after accelerator graduation
stack:
  search: exa-mcp-server (web_search_exa, deep_search_exa, company_research, crawling, linkedin_search)
  memory: mem0ai/mem0 v1.0.0 (MIT) — self-hosted on Oracle ARM · REST callable from CF Workers
  wire_format: csv-first (flat) · minified-json (nested only) · plain-text (crawl prose) — see §9
  runtime: Cloudflare Workers + Pages
  storage: D1 (read cache) · R2 (long-term archival only) · KV (hot index)
  frontend: React · D3.js · Chart.js
  orchestration: KGC harness · Hermes Agent (MCP-callable)
  tco: near-zero (Exa API + Cloudflare free tier + mem0 self-hosted)

# ── tier-b domain identity variables ────────────────────────────────────────
domain_vars:
  accelerator: "{{accelerator}}"       # e.g. Y Combinator, Antler, EF
  cohort_year: "{{cohort_year}}"       # e.g. 2022, 2023
  company: "{{company}}"              # individual startup name
  sector: "{{sector}}"                # e.g. fintech, deeptech, b2b-saas
  snapshot_date: "{{snapshot_date}}"  # ISO date of last Exa scan

# ── roi score ────────────────────────────────────────────────────────────────
roi:
  formula: "(Impact × Reach) / (Build Hours + Monthly TCO + Token Cost/Month)"
  impact: 8      # live signal on ~$2B+ annual accelerator market
  reach: 7       # founders, VCs, program managers, ecosystem researchers
  build_hours: 0.5
  monthly_tco: 2
  token_cost_month: 4
  score: 10.5

# ── harness topology ─────────────────────────────────────────────────────────
orchestration_class: fan-out-aggregate
entry_point: InputWidget[AcceleratorSelector]
exit_point: RichMediaPanel[EcosystemPulseDashboard]
mcp_tools:
  - deep_search_exa    # survival, follow-on, time-to-A signals
  - company_research   # per-company structured crawl
  - web_search_exa     # exits, sector signals, movers
  - linkedin_search    # founder journey, stealth detection
  - crawling           # digital visibility index computation

# ── node registry ────────────────────────────────────────────────────────────
nodes:
  - id: n-input
    type: InputWidget
    label: AcceleratorSelector
  - id: n-mem0
    type: MemoryWidget
    label: Mem0MemoryLayer
    mem0_user_id: "{{accelerator_slug}}-{{cohort_year}}"
    ops: [search, add]
  - id: n-exa-program
    type: ComputeWidget
    label: ProgramDataFetcher
  - id: n-exa-company
    type: ComputeWidget
    label: CompanyDataFetcher
  - id: n-topsis
    type: ComputeWidget
    label: TOPSISEngine
  - id: n-dvi
    type: ComputeWidget
    label: DigitalVisibilityIndex
  - id: n-classify
    type: ComputeWidget
    label: StatusClassifier
  - id: n-dashboard
    type: RichMediaPanel
    label: EcosystemPulseDashboard

edges:
  - from: n-input → n-mem0
    signal: text
    label: accelerator_slug + cohort_year (namespace key)
  - from: n-mem0 → n-dvi
    signal: number
    label: cached DVI per company (skip probe if age < 24h)
  - from: n-mem0 → n-topsis
    signal: number
    label: prior TOPSIS scores (TopMovers delta source)
  - from: n-mem0 → n-classify
    signal: text
    label: Ghost flag counts + prior status per company
  - from: n-input → n-exa-program
    signal: text
    label: accelerator + cohort_year
  - from: n-input → n-exa-company
    signal: text
    label: company list (batch)
  - from: n-exa-program → n-topsis
    signal: number
    label: program-level criteria vectors
  - from: n-exa-company → n-dvi
    signal: number
    label: fresh visibility probe results (when cache miss)
  - from: n-exa-company → n-classify
    signal: text
    label: funding + pivot signals
  - from: n-topsis → n-mem0
    signal: number
    label: write current TOPSIS scores (persist for next TopMovers)
  - from: n-dvi → n-mem0
    signal: number
    label: write current DVI scores + timestamp
  - from: n-classify → n-mem0
    signal: text
    label: write status changes + Ghost flag increments
  - from: n-topsis → n-dashboard
    signal: chart
    label: TOPSIS rank + score vector
  - from: n-dvi → n-dashboard
    signal: chart
    label: visibility index per company
  - from: n-classify → n-dashboard
    signal: chart
    label: status taxonomy per company

clusters:
  - id: c-program-layer
    label: Program-level scoring
    nodes: [n-input, n-exa-program, n-topsis]
  - id: c-memory-layer
    label: Cross-session memory (mem0)
    nodes: [n-mem0]
  - id: c-company-layer
    label: Company-level monitoring
    nodes: [n-exa-company, n-dvi, n-classify]
  - id: c-presentation
    label: Dashboard
    nodes: [n-dashboard]
---

# AcceleratorROI Scorer + EcosystemPulse Dashboard

> TOPSIS-ranked accelerator intelligence · cohort survival · pivot detection · `Low-score ≠ dead`

---

## 1. Product Overview

Two coupled views over the same Exa-sourced data spine:

| Layer | View | Unit of analysis | Output |
|---|---|---|---|
| Program | AcceleratorROI Scorer | Accelerator program | TOPSIS rank + score breakdown |
| Cohort | EcosystemPulse Dashboard | Individual startup | 5-panel status dashboard |

The program ranker answers: **which accelerator produces the best post-graduation outcomes?**
The cohort dashboard answers: **what is happening right now inside a specific batch?**

Both run off the same harness. `{{accelerator}}` + `{{cohort_year}}` are the only required inputs.

---

## 2. TOPSIS Spec — Program Ranker

### 2.1 Criteria + Weight Matrix

| # | Criterion | `id` | Weight | Direction | Unit | Rationale |
|---|---|---|---|---|---|---|
| 1 | Survival rate | `survival_rate` | **0.30** | benefit ↑ | % | Core viability; most observable signal |
| 2 | Median funding raised | `median_funding_m` | **0.28** | benefit ↑ | $M | Dollar outcome; cohort-size-normalized |
| 3 | Time to Series A | `months_series_a` | **0.25** | cost ↓ | months | Velocity proxy; null → 40mo penalty |
| 4 | Notable exits | `exits_per_100` | **0.17** | benefit ↑ | exits/100 | High-signal, low-frequency; confirming |

> **Weight rationale:** survival and funding front-loaded because they are observable facts, not optics. Time-to-A is a velocity signal. Exits are the ultimate outcome but too sparse to overweight in early cohorts. Weights sum to 1.00.

> **`null` handling:** `months_series_a = null` → substitute 40 (worst-case penalty). Prevents a missing-data gap from awarding an "ideal" cost score.

### 2.2 TOPSIS Steps

```
1. Build decision matrix  D[m×n]  (m accelerators × n criteria)
2. Normalize              R = D / ||D||_col
3. Weight                 V = R × w_j
4. Ideal best A+          max col if benefit, min col if cost
   Ideal worst A−         min col if benefit, max col if cost
5. Euclidean distance     d+_i = ||V_i − A+||₂
                          d−_i = ||V_i − A−||₂
6. Relative closeness     C_i  = d−_i / (d+_i + d−_i)   ∈ [0, 1]
7. Rank                   sort descending by C_i
```

### 2.3 Exa Data Sourcing Chain — Program Layer

| Criterion | Primary tool | Query pattern | Wire format | Fallback |
|---|---|---|---|---|
| `survival_rate` | `deep_search_exa` | `"{{accelerator}}" cohort survival rate 2 years shutdown statistics` | **CSV** `accelerator,survival_rate` | CB Insights / Beauhurst reports |
| `median_funding_m` | `company_research` | crawl `{{accelerator}}` portfolio page → extract funding data | **minified JSON** → pluck `median_funding_m` field | `deep_search_exa` + Crunchbase mention search |
| `months_series_a` | `deep_search_exa` | `"{{accelerator}}" median time Series A months statistics` | **CSV** `accelerator,months_series_a` | `web_search_exa` + AngelList / Dealroom |
| `exits_per_100` | `web_search_exa` | `"{{accelerator}}" acquisition IPO exit alumni {{cohort_year}}` | **CSV** `accelerator,exit_type,count,year` | `crawling` on accelerator press page |

**Token budget:** 1 `deep_search_exa` call returns ~800–1200 tokens raw. After CSV extraction at the synthesis node, the downstream payload drops to ~50–120 tokens per accelerator (see §9 for savings by format). Batch via single `deep_search_exa` prompt returning CSV for all programs simultaneously. Target: ≤5 Exa calls total for the program layer.

---

## 3. Dashboard Spec — EcosystemPulse (5 Panels)

All panels are computed from company-level Exa signals for a single `{{accelerator}}` + `{{cohort_year}}` cohort.

---

### Panel 1 — Quadrant Map

**Purpose:** Plot every company by TOPSIS outcome score (X) × Digital Visibility Index (Y). Reveals four behavioral archetypes without conflating low-score with dead.

```
        high DVI
            │
  Struggling │  Rising Star
  (visible,  │  (high score,
   low score)│   high visible)
─────────────┼─────────────── TOPSIS score
  Ghost      │  Quiet Champion
  (investigate│  (high score,
   ≠ dead)   │   low visible / stealth)
            │
        low DVI
```

> **`Low-score ≠ dead`:** A company in the bottom-left (Ghost quadrant) has low TOPSIS score AND low digital visibility. This does NOT confirm shutdown. It may indicate:
> - Stealth mode (deliberate radio silence pre-launch)
> - Pivot in progress (domain redirect, brand change)
> - Quiet B2B operation (no consumer-facing signals)
>
> A Ghost is flagged `status: investigate` until confirmed via `company_research` crawl or `linkedin_search` on founders. Only if crawl returns 404 + LinkedIn shows founders departed is status escalated to `status: likely-defunct`.

**Digital Visibility Index (DVI)** — composite score `[0–100]` built from:

| Signal | Exa tool | Weight |
|---|---|---|
| Blog / news mentions in last 90d | `web_search_exa` | 0.35 |
| Active job postings | `web_search_exa` | 0.25 |
| Founder LinkedIn activity | `linkedin_search` | 0.20 |
| Domain resolves + content fresh | `crawling` | 0.20 |

**@node** `QuadrantMap`
```
type: RichMediaPanel
inputs:
  - key: topsis_scores    type: number[]   source: n-topsis
  - key: dvi_scores       type: number[]   source: n-dvi
  - key: company_labels   type: text[]     source: n-input
output:
  signal: chart
  format: D3 scatter · quadrant lines at median(x) + median(y)
  interaction: click company → open CompanyCard overlay
```

---

### Panel 2 — Status Donut

**Purpose:** Distribution of company statuses across the cohort at `{{snapshot_date}}`. Single at-a-glance survivorship read.

**Status taxonomy** (MECE):

| Status | Code | Criteria |
|---|---|---|
| Active | `active` | DVI > 30, no shutdown signals |
| Fundraising | `fundraising` | Active + funding round signal in last 90d |
| Stealth | `stealth` | DVI < 20, founders still listed as founders on LinkedIn |
| Pivoted | `pivoted` | Active + product/sector change signal detected |
| Acquired | `acquired` | M&A press release or LinkedIn "acquired by" |
| IPO'd | `ipo` | Public market listing confirmed |
| Likely Defunct | `defunct` | 404 domain + founders departed LinkedIn |

**@node** `StatusDonut`
```
type: RichMediaPanel
inputs:
  - key: status_vector    type: text[]     source: n-classify
output:
  signal: chart
  format: Chart.js doughnut · center label = cohort size
  palette:
    active:       #1D9E75   (teal-600)
    fundraising:  #378ADD   (blue-600)
    stealth:      #888780   (gray-500)
    pivoted:      #EF9F27   (amber-400)
    acquired:     #534AB7   (purple-600)
    ipo:          #639922   (green-600)
    defunct:      #E24B4A   (red-400)
```

---

### Panel 3 — Funding Timeline

**Purpose:** Chronological view of all post-graduation funding events across the cohort. Reveals funding velocity, clustering, and dry spells.

**@node** `FundingTimeline`
```
type: RichMediaPanel
inputs:
  - key: funding_events   type: text[]     source: n-exa-company
    schema:
      company: string
      round_type: pre-seed | seed | series-a | series-b | bridge | undisclosed
      amount_m: number | null
      date: ISO date
      source_url: string
output:
  signal: chart
  format: D3 horizontal timeline · Y = company · X = date · bubble size = amount
  interaction: hover → tooltip(round_type, amount, source) · click → web_fetch source
```

**Exa sourcing:**
```
deep_search_exa:  "{{company}}" funding raised 2023 2024 2025 press release
web_search_exa:   "{{company}}" Series A seed round announced
```

Batch: one `deep_search_exa` call per company returning structured event JSON. Cap at 10 companies for demo; paginate for full cohort.

---

### Panel 4 — Sector Heatmap

**Purpose:** Matrix of `sector × accelerator` showing concentration and relative TOPSIS performance. Answers: which accelerator punches above weight in which vertical?

**@node** `SectorHeatmap`
```
type: RichMediaPanel
inputs:
  - key: sector_assignments   type: text[]     source: n-classify
  - key: topsis_scores        type: number[]   source: n-topsis
output:
  signal: chart
  format: D3 heatmap · X = accelerator · Y = sector · fill = mean TOPSIS score for cell
  cell label: count(companies) in cell
  interaction: click cell → filter QuadrantMap to that sector × accelerator slice
```

**Sector taxonomy** (L1, MECE):
`fintech` · `deeptech` · `b2b-saas` · `consumer` · `healthtech` · `climatetech` · `marketplace` · `other`

**Sector assignment** via `web_search_exa` query:
```
"{{company}}" sector vertical market category startup
```
Claude classifies free-text result into L1 sector. Single pass per company; cached in KV.

---

### Panel 5 — Top Movers

**Purpose:** Companies with the largest positive or negative TOPSIS score delta since the prior `{{snapshot_date}}`. Surfaces emerging breakouts and deteriorating signals before they are obvious.

**@node** `TopMovers`
```
type: RichMediaPanel
inputs:
  - key: current_scores   type: number[]   source: n-topsis
  - key: prior_scores     type: number[]   source: n-mem0   # mem0.search("TOPSIS score", user_id=namespace)
  - key: company_labels   type: text[]     source: n-input
output:
  signal: chart
  format: ranked list · top 3 gainers (teal) + top 3 losers (coral)
  delta_label: +Δ / −Δ TOPSIS points since {{snapshot_prior_date}}
  interaction: click → open CompanyCard with change driver explanation
```

**Change driver explanation** — Claude prompt on delta, mem0-augmented:
```
memory.search("{{company}} status history funding events", user_id="{{namespace}}", limit=5)
→ inject top memories as context

Given that {{company}} moved from TOPSIS {{prior}} to {{current}},
and given these prior memory fragments: {{mem0_context}},
identify the most likely cause from recent Exa signals:
funding event / founder departure / product launch / press / silence.
Return: { driver: string, confidence: low|med|high, evidence_url: string }
```

> **Why mem0 here:** prior scores were previously fetched from R2 JSON blobs (~N×600 tokens). mem0.search() returns only the relevant score fragments — 90% fewer tokens. No R2 read overhead, no blob deserialization.

---

## 4. Harness Contract

### 4.1 Orchestration Topology

```
InputWidget[AcceleratorSelector]
    │  text: {{accelerator}} + {{cohort_year}} + namespace key
    ├─────────────────────────────┬────────────────────────────┐
    │                             │                            │
    ▼                             ▼                            ▼
MemoryWidget[Mem0]           ComputeWidget               ComputeWidget
  mem0.search()              [ProgramDataFetcher]        [CompanyDataFetcher]
  namespace:                   deep_search_exa ×4          company_research ×N
  {{accel}}-{{year}}           → program criteria          → per-company signals
    │                             │                     │           │
    │  prior TOPSIS scores        ▼                     ▼           ▼
    ├──────────────────► ComputeWidget[TOPSISEngine]  [DVI]    [StatusClassifier]
    │  cached DVI (24h)    normalize→weight→distance  visibility  status taxonomy
    ├──────────────────►   → C_i rank vector          [0–100]    → status code
    │  Ghost counts                 │                    │            │
    └──────────────────►            └────────────────────┴────────────┤
                                                                       │
    ◄──────────────────────────────────────────────────────────────────┤
    │  write: TOPSIS scores + DVI scores + status changes + Ghost flags
    │  (mem0.add · user_id={{namespace}})
    │
    ▼
RichMediaPanel[EcosystemPulseDashboard]
  ├── Panel 1: QuadrantMap      (TOPSIS × DVI)
  ├── Panel 2: StatusDonut      (status taxonomy)
  ├── Panel 3: FundingTimeline  (funding events)
  ├── Panel 4: SectorHeatmap    (sector × TOPSIS)
  └── Panel 5: TopMovers        (Δ TOPSIS vs mem0 prior)
```

### 4.2 Token Economics

| Step | Tool | Est. tokens raw | Est. tokens after format | Frequency | mem0 effect |
|---|---|---|---|---|---|
| Memory read | `mem0.search()` | ~150 | ~150 (minified JSON) | pre-scan (always) | replaces R2 blob read |
| Program fetch | `deep_search_exa` × 1 batch | ~2 400 | **~130** (CSV extraction) | once per session | — |
| Company fetch | `company_research` × N | ~800 × N | **~180 × N** (minified JSON + CSV events) | once per cohort | — |
| DVI probe | `web_search_exa` × N | ~400 × N | **~60 × N** (CSV extraction) | cache miss only (24h TTL) | skipped if mem0 DVI fresh |
| Status classify | Claude synthesis | ~600 × N | ~600 × N (plain text → code) | cache miss only (24h TTL) | mem0 prior reduces prompt context |
| Delta explain | Claude synthesis | ~300 × movers | ~300 × movers | on-demand | mem0 replaces ~600-token R2 blob |
| Memory write | `mem0.add()` | ~80 | ~80 | post-scan (always) | — |

> **Format savings:** converting `deep_search_exa` output from pretty JSON to CSV at the synthesis node cuts that payload from ~2 400 tokens to ~130 — an ~80% reduction on the heaviest single call. Across all flat-data tools at N=20, format conversion saves an estimated ~6 000 tokens per scan cycle on top of mem0 savings. See §9 for the full decision table, extraction templates, and reject list.

> **mem0 token saving:** TopMovers delta previously required loading full prior snapshot JSON from R2 (~N×600 tokens). mem0.search() returns only the relevant score fragments — consistent with mem0's published **90% token reduction** vs. full-context. At N=20, this saves ~10 400 tokens per scan cycle.

> **DVI cache:** mem0 stores `DVI={{score}} timestamp={{iso}}` per company. If age < 24h, the `web_search_exa` DVI probe is skipped entirely. KV TTL index is retired; mem0 is the single cache authority.

### 4.3 MCP Tool Call Sequence

```jsonc
// Step 0 — memory read (pre-scan, always first)
// mem0 REST API · user_id = "{{accelerator_slug}}-{{cohort_year}}"
POST https://{{mem0_host}}/v1/memories/search
{
  "query": "TOPSIS scores DVI status {{cohort_year}}",
  "user_id": "{{accelerator_slug}}-{{cohort_year}}",
  "limit": 50
}
// → returns: prior TOPSIS per company, cached DVI per company,
//            Ghost flag counts, last status per company, confirmed founder checks
// → drives: DVI cache-hit check, TopMovers prior scores, Ghost escalation logic

// Step 1 — program layer (single batched call)
{
  "tool": "deep_search_exa",
  "query": "{{accelerator}} cohort {{cohort_year}} survival rate funding raised Series A exits statistics",
  "num_results": 8
}
// → extract as: CSV · no fences · no explanation
//   schema: accelerator,survival_rate,median_funding_m,months_series_a,exits_per_100
//   null months_series_a → emit empty cell (parser substitutes 40)

// Step 2 — company layer (per-company, fan-out)
{
  "tool": "company_research",
  "company_url": "https://{{company_domain}}",
  "goal": "Extract: current status, last funding round, product description, founding team"
}
// → extract as: TWO outputs (nested object splits here)
//   (a) minified JSON — company record (no whitespace):
//       {"name":"...","status":"...","sector":"...","domain":"..."}
//   (b) CSV — funding events (flat, FK on company_slug):
//       company_slug,round_type,amount_m,date,source_url

// Step 3 — DVI probe (per-company · SKIP if mem0 age < 24h)
{
  "tool": "web_search_exa",
  "query": "\"{{company}}\" 2025 2026 news launch funding announcement",
  "num_results": 3,
  "start_published_date": "{{ninety_days_ago}}"
}
// → extract as: CSV · no fences · no explanation
//   schema: company,signal_type,signal_date,source_url
//   signal_type ∈ blog|news|job|social|press · one row per signal hit

// Step 4 — founder check (triggered only if DVI < 20 AND no fresh mem0 confirm)
{
  "tool": "linkedin_search",
  "query": "{{founder_name}} {{company}} founder",
  "num_results": 1
}
// → extract as: CSV · single data row
//   schema: founder,company,current_role,still_founder(bool),profile_url

// Step 5 — memory write (post-scan, always last)
// one mem0.add() call per company; batched where possible
POST https://{{mem0_host}}/v1/memories
{
  "messages": [
    {
      "role": "user",
      "content": "Scan {{snapshot_date}}: {{company}} TOPSIS={{topsis}} DVI={{dvi}} status={{status}} Ghost_flags={{ghost_n}}"
    }
  ],
  "user_id": "{{accelerator_slug}}-{{cohort_year}}",
  "metadata": {
    "snapshot_date": "{{snapshot_date}}",
    "company": "{{company}}",
    "topsis": "{{topsis}}",
    "dvi": "{{dvi}}",
    "status": "{{status}}"
  }
}
```

---

## 5. KGC Schema — Node + Edge Types

### @node types

| Sigil | `id` pattern | Node type | Key fields |
|---|---|---|---|
| `@node` | `prg-{{accelerator_slug}}` | Program | `name:text`, `topsis_score:number`, `rank:number`, `cohort_size:number` |
| `@node` | `co-{{company_slug}}` | Company | `name:text`, `status:text`, `dvi:number`, `topsis:number`, `sector:text` |
| `@node` | `ev-{{company_slug}}-{{date}}` | FundingEvent | `round_type:text`, `amount_m:number`, `date:text`, `source_url:text` |
| `@node` | `snap-{{accelerator_slug}}-{{date}}` | Snapshot | `snapshot_date:text`, `cohort_year:text`, `scores:number[]` |
| `@node` | `mem-{{accelerator_slug}}-{{cohort_year}}` | MemoryStore | `mem0_user_id:text`, `host:text`, `last_write:text`, `memory_count:number` |

### @edge types

| Sigil | `id` pattern | Relationship | Typed fields |
|---|---|---|---|
| `@edge` | `graduated-{{co}}-{{prg}}` | Company → Program | `cohort_year:text`, `demo_day_date:text` |
| `@edge` | `raised-{{co}}-{{ev}}` | Company → FundingEvent | `months_post_grad:number` |
| `@edge` | `pivoted-{{co}}-{{co2}}` | Company → Company | `pivot_type:text`, `evidence_url:text` |
| `@edge` | `acquired-{{acquirer}}-{{co}}` | Acquirer → Company | `acquisition_date:text`, `amount_m:number` |

### @cluster types

| Sigil | `id` | Cluster | Contains |
|---|---|---|---|
| `@cluster` | `cohort-{{prg}}-{{year}}` | Cohort | all `co-*` nodes for that batch |
| `@cluster` | `sector-{{sector}}` | Sector | all `co-*` nodes sharing sector |
| `@cluster` | `quadrant-{{q}}` | Quadrant | `rising-star` / `quiet-champion` / `struggling` / `ghost` |

---

## 6. Validation Rules

1. `topsis_score` ∈ [0, 1] for all program nodes — clamp before write
2. `dvi` ∈ [0, 100] — round to integer
3. `status: defunct` requires BOTH `crawl_404: true` AND `founders_departed: true` — never infer from DVI alone (`Low-score ≠ dead`)
4. `months_series_a: null` → substitute 40 in TOPSIS matrix; preserve null in @node field
5. All `@edge: raised-*` must have `source_url` — no unsourced funding events written to graph
6. `TopMovers` panel requires prior TOPSIS scores from `mem0.search()`; if mem0 returns no prior scores (first scan), render panel as empty with `status: awaiting-baseline` — do not read from R2
7. `mem0.add()` must be called post-scan for every company processed; failure to write is logged but does not block dashboard render
8. Weights must sum to 1.00 ± 0.001 — assert on TOPSIS init

---

## 7. Open Questions / ADRs

| # | Question | Default | Trigger for revisit |
|---|---|---|---|
| ADR-01 | TOPSIS or AHP for program ranking? | TOPSIS (deterministic, zero additional infra) | If judge asks for pairwise weight justification |
| ADR-02 | How many companies per cohort before DVI probe cost exceeds budget? | Cap at 20 per demo; full cohort async | Token cost > $2 threshold |
| ADR-03 | Ghost quadrant: auto-escalate to `defunct` after N days silent? | No auto-escalate; human-in-loop confirm | Product v2 scope |
| ADR-04 | Store snapshots in R2 or mem0? | mem0 (self-hosted) for recent memory (rolling 90d); R2 retained for long-term archival only (>90d snapshots as cold JSON blobs). KV TTL index retired. | If mem0 self-host goes down; fallback to R2 cold read |
| ADR-05 | Sector taxonomy: L1 only or L1+L2? | L1 only for hackathon; L2 (`fintech/wealthtech`, etc.) deferred | Post-hackathon if heatmap too coarse |
| ADR-06 | mem0 self-hosted (Oracle ARM) vs. managed platform (app.mem0.ai)? | Self-hosted — MIT license, zero monthly SaaS cost, co-located with PocketBase on Oracle Always Free ARM. REST API exposed internally; callable from CF Workers via `fetch()`. | If Oracle ARM instance has uptime issues or mem0 managed tier becomes free-tier viable |

---

## 8. mem0 Memory Layer Integration

**Source:** [github.com/mem0ai/mem0](https://github.com/mem0ai/mem0) · MIT license · v1.0.0  
**Published benchmarks:** +26% accuracy vs. OpenAI Memory · 91% faster than full-context · 90% fewer tokens  
**Deploy:** `pip install mem0ai` on Oracle Always Free ARM alongside PocketBase

### 8.1 Why mem0 in this harness

The harness runs periodic Exa scans across N companies. Without cross-session memory, every scan is stateless: TopMovers can't compute deltas, Ghost escalation resets on restart, DVI probes re-fire on every cycle even when unchanged. R2 blob reads solved this but required loading full snapshot JSON into context (~N×600 tokens).

mem0 replaces that pattern with a vector-indexed memory store: `mem0.search()` retrieves only the relevant fragments per company (prior score, last status, Ghost count) rather than deserializing an entire snapshot. The result is ~90% token reduction on context hydration and a clean separation between **live Exa data** (what is happening now) and **longitudinal memory** (what has changed over time).

### 8.2 Namespace Design

```
user_id = "{{accelerator_slug}}-{{cohort_year}}"
# e.g.  "yc-2023", "antler-sg-2024", "ef-ldn-2023"
```

One `user_id` namespace per accelerator × cohort pair. All company memories within a cohort share that namespace; `mem0.search()` scoped to `user_id` keeps queries fast and isolated across cohorts.

Agent-level memory (harness run metadata) uses a separate scope:
```
agent_id = "ecosystem-pulse-harness"
```

### 8.3 Memory Schema — What Gets Stored

Each `mem0.add()` call stores one natural-language memory string + structured metadata. mem0's LLM-extraction layer normalizes the string; metadata enables exact-match filtering.

| Memory type | String template | Metadata keys |
|---|---|---|
| TOPSIS snapshot | `{{company}} TOPSIS score {{topsis}} on {{snapshot_date}}` | `company`, `topsis`, `snapshot_date` |
| DVI snapshot | `{{company}} DVI {{dvi}} on {{snapshot_date}}` | `company`, `dvi`, `snapshot_date` |
| Status change | `{{company}} status changed from {{prior_status}} to {{new_status}} on {{snapshot_date}}` | `company`, `prior_status`, `new_status` |
| Ghost flag | `{{company}} Ghost flag count {{ghost_n}} as of {{snapshot_date}}` | `company`, `ghost_n` |
| Founder confirm | `{{founder}} confirmed as founder at {{company}} via LinkedIn on {{snapshot_date}}` | `founder`, `company`, `confirmed_date` |
| Funding event | `{{company}} raised {{round_type}} of ${{amount_m}}M announced {{date}}` | `company`, `round_type`, `amount_m` |

### 8.4 Read Patterns — What Gets Retrieved

| Panel / decision point | `mem0.search()` query | Expected return |
|---|---|---|
| TopMovers — prior scores | `"TOPSIS score {{company}}"` | last score + snapshot_date per company |
| DVI — cache hit check | `"DVI {{company}}"` | DVI + snapshot_date → skip probe if age < 24h |
| Ghost escalation | `"Ghost flag {{company}}"` | ghost_n → if ≥3 consecutive, trigger linkedin_search |
| StatusClassifier context | `"status history {{company}}"` | status change trail → reduce Claude context tokens |
| Change driver explanation | `"{{company}} funding events status"` | top 5 memories → inject as prior context |
| Founder check gate | `"founder confirmed {{company}}"` | confirmed_date → skip linkedin_search if < 7d |

### 8.5 Self-Hosted Setup (Oracle ARM)

```bash
# on Oracle Always Free ARM instance (alongside PocketBase)
pip install mem0ai qdrant-client fastapi uvicorn
```

```json
// mem0_config.json
{
  "vector_store": {
    "provider": "qdrant",
    "config": { "host": "localhost", "port": 6333, "collection_name": "ecosystem_pulse" }
  },
  "llm": {
    "provider": "anthropic",
    "config": { "model": "claude-haiku-4-5-20251001", "api_key": "{{ANTHROPIC_API_KEY}}" }
  },
  "embedder": {
    "provider": "anthropic",
    "config": { "model": "claude-haiku-4-5-20251001" }
  }
}
```

> **LLM choice for mem0:** `claude-haiku-4-5-20251001` for memory extraction — lowest token cost, sufficient for structured string parsing. Sonnet reserved for TOPSIS synthesis and change driver explanation.

**Thin FastAPI wrapper — callable from CF Workers via `fetch()`:**

```python
# mem0_api.py
from fastapi import FastAPI
from mem0 import Memory

app = FastAPI()
m = Memory.from_config("mem0_config.json")

@app.post("/memories")
def add(p: dict):
    return m.add(p["messages"], user_id=p["user_id"], metadata=p.get("metadata", {}))

@app.post("/memories/search")
def search(p: dict):
    return m.search(p["query"], user_id=p["user_id"], limit=p.get("limit", 10))
```

No Python runtime on Cloudflare required — CF Workers calls `fetch("https://{{oracle_arm_host}}/memories/search", { method:"POST", body: JSON.stringify({...}) })`.

### 8.6 TCO Delta vs. Prior Architecture

| Component | Before mem0 | After mem0 | Delta |
|---|---|---|---|
| R2 reads (snapshot blobs) | ~N reads/scan | 0 — retired | −R2 ops |
| KV TTL index | N writes + N reads/scan | 0 — retired | −KV ops |
| Context tokens — TopMovers | ~N×600/scan | ~N×60/scan | **−90%** |
| Context tokens — DVI cache hit | ~400×N/scan | 0 if age < 24h | up to **−400×N** |
| mem0.add() write tokens | 0 | ~80×N/scan | +80×N |
| Qdrant (self-hosted) | $0 | $0 (Oracle ARM) | $0 |
| **Net token cost/scan (N=20)** | ~20 400 | ~3 700 | **−82%** |

---

## 9. Wire Format Spec

**Rule:** convert Exa output at the **earliest extraction point** — the synthesis node immediately after the tool call. Never pass pretty-printed JSON downstream through the harness. Format is a prompt instruction, not an API parameter.

### 9.1 Decision Table

| Exa tool | Data shape | Nesting | → Optimal format | Token saving vs. pretty JSON |
|---|---|---|---|---|
| `deep_search_exa` → TOPSIS criteria vectors | tabular metrics per accelerator | flat | **CSV** | ~80% |
| `web_search_exa` → result lists (title · url · date · snippet) | repeating flat rows | flat | **CSV** | ~60% |
| `web_search_exa` → DVI signals, status codes | categorical + numeric | flat | **CSV** | ~75% |
| `web_search_exa` → FundingTimeline events | event rows | flat | **CSV** | ~60% |
| `linkedin_search` → founder profile fields | flat profile record | flat | **CSV** | ~65% |
| `company_research` → company object | rich company record | **nested** | minified JSON | ~30% vs. pretty |
| `company_research` → `funding_events[]` sub-array | event rows with FK | flat (extracted) | **CSV** with `company_slug` FK | ~75% |
| `crawling` → raw page content | prose | n/a | plain text (pass-through) | n/a |
| `mem0.search()` → memory fragments | semi-nested results | semi-nested | minified JSON | ~30% vs. pretty |

> **CSV wins on all flat/tabular data.** The gain is not just whitespace — it eliminates repeating key names across N rows. At N=20 companies with 6 fields, pretty JSON costs ~2 400 tokens; CSV costs ~132 tokens (header once + 20 data rows). That is ~94% reduction, conservatively stated as ~80% to account for variable field verbosity.

### 9.2 Extraction Instruction Templates

**Template A — flat data → CSV**

```
Extract from the results above and return ONLY CSV.
One header row. No JSON. No markdown fences. No explanation. No trailing newline.
Schema: {{col1}},{{col2}},{{col3}},...
If a field is missing or unknown, emit an empty cell.
```

**Template B — nested object → minified JSON**

```
Extract the following fields and return minified JSON only.
No whitespace between tokens. No newlines. No markdown fences. No explanation.
Shape: {"{{field1}}":"...","{{field2}}":0,"{{nested}}":{"{{k}}":"..."}}
If a field is absent, emit null.
```

**Template C — nested object with sub-array → split output**

```
Return TWO blocks separated by the delimiter ---SPLIT---.
Block 1: minified JSON of the company record (no whitespace).
Block 2: CSV of the funding_events array.
  Header: company_slug,round_type,amount_m,date,source_url
  One row per event. Empty amount_m if undisclosed.
No other text.
```

> **Template C is the `company_research` pattern.** The nested `funding_events[]` array is lossy to flatten into a single CSV row and wrong to keep in JSON (repeating key overhead). Splitting at the sub-array boundary gives optimal format for each shape. The FK join (`company_slug`) reconnects them at the FundingTimeline panel render — not in the LLM context.

**Template D — crawl prose → plain text (pass-through)**

```
Return the page content as plain text. Strip HTML tags and navigation boilerplate.
Preserve headings as lines prefixed with ##. No JSON. No CSV. No fences.
```

### 9.3 Reject List

| Format | Why not |
|---|---|
| Pretty JSON | Repeating key names across N records = pure token waste; forbidden at any harness node |
| YAML | Indentation overhead exceeds JSON; false "readability" benefit inside a harness |
| JSONL | ~5% savings vs. minified JSON; not worth the split/parse logic |
| Markdown table | `\|` delimiters + padding spaces ≈ 130% of CSV token cost |
| MessagePack / Protobuf | Binary; Claude cannot read directly — wrong abstraction layer for LLM harness |
| XML | Closing tag redundancy ≈ 200% of JSON token cost |

### 9.4 Parsing Contract (CF Workers side)

```typescript
// CSV parse — all flat Exa outputs
function parseCSV(raw: string): Record<string, string>[] {
  const [header, ...rows] = raw.trim().split('\n');
  const keys = header.split(',');
  return rows.map(r => Object.fromEntries(r.split(',').map((v, i) => [keys[i], v.trim()])));
}

// Split parse — company_research Template C
function parseSplit(raw: string): { company: Record<string, unknown>; events: Record<string, string>[] } {
  const [jsonBlock, csvBlock] = raw.split('---SPLIT---').map(s => s.trim());
  return { company: JSON.parse(jsonBlock), events: parseCSV(csvBlock) };
}

// Minified JSON — mem0 results, company objects
const obj = JSON.parse(raw);  // raw is already minified; parse is O(n) on content only
```

### 9.5 Format × Node Map

| Harness node | Input format | Output format |
|---|---|---|
| `n-exa-program` (ProgramDataFetcher) | Exa raw JSON | **CSV** (program criteria vectors) |
| `n-exa-company` (CompanyDataFetcher) | Exa raw JSON | **minified JSON** (company) + **CSV** (events) |
| `n-dvi` (DigitalVisibilityIndex) | Exa raw JSON | **CSV** (signal rows) → numeric DVI |
| `n-classify` (StatusClassifier) | CSV signals + mem0 minified JSON | status code string |
| `n-topsis` (TOPSISEngine) | CSV criteria vectors | numeric rank vector (in-memory) |
| `n-mem0` (Mem0MemoryLayer) | natural-language string + metadata | minified JSON (search results) |
| `n-dashboard` (EcosystemPulseDashboard) | numeric vectors + status codes | rendered chart (D3 / Chart.js) |

> **No format crosses more than one node boundary in raw form.** Extract → transform → pass typed primitives. The dashboard never sees a JSON blob or a CSV string — only `number[]`, `string[]`, and structured event objects resolved from the FK join.