---
schema: kgc-computing-flow/v1
id: accelerator-roi-scorer
version: 1.0.0
status: draft
created: 2026-06-12
author: airvio/joohwee

# ── tier-a instance fields ──────────────────────────────────────────────────
title: AcceleratorROI Scorer + EcosystemPulse Dashboard
tagline: TOPSIS-ranked accelerator intelligence with cohort-level ecosystem monitoring
product: AgenticGraph / airvio
track: Startup Ecosystem
theme: Track what happens to startups after accelerator graduation
stack:
  search: exa-mcp-server (web_search_exa, deep_search_exa, company_research, crawling, linkedin_search)
  runtime: Cloudflare Workers + Pages
  storage: D1 (read cache) · R2 (snapshot blobs) · KV (ttl index)
  frontend: React · D3.js · Chart.js
  orchestration: KGC harness · Hermes Agent (MCP-callable)
  tco: near-zero (Exa API + Cloudflare free tier)

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
    label: visibility probe results
  - from: n-exa-company → n-classify
    signal: text
    label: funding + pivot signals
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

| Criterion | Primary tool | Query pattern | Fallback |
|---|---|---|---|
| `survival_rate` | `deep_search_exa` | `"{{accelerator}}" cohort survival rate 2 years shutdown statistics` | CB Insights / Beauhurst reports |
| `median_funding_m` | `company_research` | crawl `{{accelerator}}` portfolio page → extract funding data | `deep_search_exa` + Crunchbase mention search |
| `months_series_a` | `deep_search_exa` | `"{{accelerator}}" median time Series A months statistics` | `web_search_exa` + AngelList / Dealroom |
| `exits_per_100` | `web_search_exa` | `"{{accelerator}}" acquisition IPO exit alumni {{cohort_year}}` | `crawling` on accelerator press page |

**Token budget:** 1 `deep_search_exa` call returns ~800–1200 tokens. At 4 criteria × 5 accelerators = 20 calls worst-case. Batch via single `deep_search_exa` prompt returning structured JSON for all programs simultaneously. Target: ≤5 Exa calls total for the program layer.

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
  - key: prior_scores     type: number[]   source: KV[snapshot_prior]
  - key: company_labels   type: text[]     source: n-input
output:
  signal: chart
  format: ranked list · top 3 gainers (teal) + top 3 losers (coral)
  delta_label: +Δ / −Δ TOPSIS points since {{snapshot_prior_date}}
  interaction: click → open CompanyCard with change driver explanation
```

**Change driver explanation** — Claude prompt on delta:
```
Given that {{company}} moved from TOPSIS {{prior}} to {{current}}, 
identify the most likely cause from recent Exa signals: 
funding event / founder departure / product launch / press / silence.
Return: { driver: string, confidence: low|med|high, evidence_url: string }
```

---

## 4. Harness Contract

### 4.1 Orchestration Topology

```
InputWidget[AcceleratorSelector]
    │  text: {{accelerator}} + {{cohort_year}}
    ├──────────────────────────────────────────────────────────┐
    │                                                          │
    ▼                                                          ▼
ComputeWidget[ProgramDataFetcher]              ComputeWidget[CompanyDataFetcher]
  deep_search_exa × 4 criteria                  company_research × N companies
  → program criteria vector                     → per-company signal bundle
    │                                                   │           │
    ▼                                                   ▼           ▼
ComputeWidget[TOPSISEngine]            ComputeWidget[DVI]   ComputeWidget[StatusClassifier]
  normalize → weight → distance         visibility probe       status taxonomy
  → C_i rank vector                     → DVI[0–100]           → status code
    │                                           │                    │
    └───────────────────────────────────────────┴────────────────────┘
                                                │
                                                ▼
                               RichMediaPanel[EcosystemPulseDashboard]
                                 ├── Panel 1: QuadrantMap
                                 ├── Panel 2: StatusDonut
                                 ├── Panel 3: FundingTimeline
                                 ├── Panel 4: SectorHeatmap
                                 └── Panel 5: TopMovers
```

### 4.2 Token Economics

| Step | Tool | Est. tokens (in+out) | Frequency |
|---|---|---|---|
| Program fetch | `deep_search_exa` × 1 batch | ~2 400 | once per session |
| Company fetch | `company_research` × N | ~800 × N | once per cohort |
| DVI probe | `web_search_exa` × N | ~400 × N | TTL 24h (KV cached) |
| Status classify | Claude synthesis | ~600 × N | TTL 24h |
| Delta explain | Claude synthesis | ~300 × movers | on-demand |

> **Optimization:** pre-cache company-level results in KV with 24h TTL. Program-level TOPSIS only recomputes on explicit user refresh. Top movers delta requires two snapshots — store prior in R2 as `snapshot-{{accelerator}}-{{cohort_year}}-{{snapshot_date}}.json`.

### 4.3 MCP Tool Call Sequence

```jsonc
// Step 1 — program layer (single batched call)
{
  "tool": "deep_search_exa",
  "query": "{{accelerator}} cohort {{cohort_year}} survival rate funding raised Series A exits statistics",
  "num_results": 8
}

// Step 2 — company layer (per-company, fan-out)
{
  "tool": "company_research",
  "company_url": "https://{{company_domain}}",
  "goal": "Extract: current status, last funding round, product description, founding team"
}

// Step 3 — DVI probe (per-company)
{
  "tool": "web_search_exa",
  "query": "\"{{company}}\" 2025 2026 news launch funding announcement",
  "num_results": 3,
  "start_published_date": "{{ninety_days_ago}}"
}

// Step 4 — founder check for Ghost quadrant (triggered only if DVI < 20)
{
  "tool": "linkedin_search",
  "query": "{{founder_name}} {{company}} founder",
  "num_results": 1
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
6. `TopMovers` panel requires `snapshot_prior` in R2; if missing, render panel as empty with `status: awaiting-baseline`
7. Weights must sum to 1.00 ± 0.001 — assert on TOPSIS init

---

## 7. Open Questions / ADRs

| # | Question | Default | Trigger for revisit |
|---|---|---|---|
| ADR-01 | TOPSIS or AHP for program ranking? | TOPSIS (deterministic, zero additional infra) | If judge asks for pairwise weight justification |
| ADR-02 | How many companies per cohort before DVI probe cost exceeds budget? | Cap at 20 per demo; full cohort async | Token cost > $2 threshold |
| ADR-03 | Ghost quadrant: auto-escalate to `defunct` after N days silent? | No auto-escalate; human-in-loop confirm | Product v2 scope |
| ADR-04 | Store snapshots in R2 or D1? | R2 (blob, low TCO) for JSON snapshots; D1 for queryable index only | If cross-cohort queries become primary use case |
| ADR-05 | Sector taxonomy: L1 only or L1+L2? | L1 only for hackathon; L2 (`fintech/wealthtech`, etc.) deferred | Post-hackathon if heatmap too coarse |