---
title: "Knowgrph — Map it. Score it. Decide it."
id: md:knowgrph-readme-v4
author: joohwee
institution: "Knowgrph — airvio.co/knowgrph"
date: "2026-05-03"
kgCanvasSurfaceMode: "2d"
kgCanvasRenderMode: "2d"
kgCanvas2dRenderer: "d3"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: false
kgDocumentStructureBaselineLock: false
index:
  legend:
    nodes:
      problem:   "#c0392b — red    — pain point / market gap / decision failure"
      insight:   "#d68910 — amber  — reframe / principle / scored signal"
      product:   "#1a6fa8 — blue   — tool / pipeline stage / canvas layer"
      actor:     "#1e8449 — green  — user segment / stakeholder / decision-maker"
      output:    "#7d3c98 — purple — artifact / scored report / data export"
      business:  "#117a65 — teal   — revenue line / model tier"
      milestone: "#5d6d7e — grey   — roadmap item"
      mcp:       "#0e4f6b — navy   — MCP tool / external API connector"
      signal:    "#1a7f5a — forest — ranked result / TOPSIS score / market signal"
    edges:
      user_flow:   "solid #2980b9  2px   — actor interacts with product surface"
      work_flow:   "dashed #d68910 2px   — pitch section narrative progression"
      data_flow:   "dotted #7d3c98 1.5px — artifact passes between pipeline stages"
      mcp_flow:    "solid #0e4f6b  1.5px — MCP tool call → collected data"
      signal_flow: "dotted #1a7f5a 1.5px — ranked signal feeds decision layer"
  mermaid: |
    %%{init:{
      "theme":"base",
      "themeVariables":{
        "primaryColor":"#1a1a2e","primaryTextColor":"#f0f0f0",
        "primaryBorderColor":"#444","lineColor":"#888",
        "secondaryColor":"#16213e","tertiaryColor":"#0f3460",
        "edgeLabelBackground":"#1a1a2e"
      }
    }}%%
    flowchart TD

      classDef problem   fill:#c0392b,color:#fff,stroke:#922b21,stroke-width:1.5px
      classDef insight   fill:#d68910,color:#fff,stroke:#9a6301,stroke-width:1.5px
      classDef product   fill:#1a6fa8,color:#fff,stroke:#154f7a,stroke-width:1.5px
      classDef actor     fill:#1e8449,color:#fff,stroke:#145a32,stroke-width:1.5px
      classDef output    fill:#7d3c98,color:#fff,stroke:#5b2c6f,stroke-width:1.5px
      classDef business  fill:#117a65,color:#fff,stroke:#0e6655,stroke-width:1.5px
      classDef milestone fill:#5d6d7e,color:#fff,stroke:#424f5c,stroke-width:1.5px
      classDef mcp       fill:#0e4f6b,color:#fff,stroke:#083444,stroke-width:1.5px
      classDef signal    fill:#1a7f5a,color:#fff,stroke:#125c40,stroke-width:1.5px

      subgraph S0["① Hook"]
        TAGLINE["Map it. Score it. Decide it."]:::insight
        POS["Geo data in · ranked decision out · no analyst required"]:::insight
      end

      subgraph S1["② Problem — Location Decisions Are Still Spreadsheets"]
        subgraph S1A["Too manual"]
          P_SHEET["Spreadsheet audits — hours of copy-paste per candidate"]:::problem
          P_STALE["Stale data — offline reports miss live POI density"]:::problem
        end
        subgraph S1B["Too opaque"]
          P_GUT["Gut-feel site picks — no reproducible scoring model"]:::problem
          P_SILO["Routing + competition + catchment analysed in separate tools"]:::problem
        end
        P_GAP["Decision-maker flying blind — no unified, live, scored view"]:::problem
      end

      subgraph S2["③ ICP — Local Market Decision-Makers"]
        subgraph S2A["Who"]
          ICP_FB["F&B operator — new outlet / expansion"]:::actor
          ICP_RET["Retailer / pop-up brand — site shortlisting"]:::actor
          ICP_DEV["Property developer — catchment due diligence"]:::actor
          ICP_CON["Management consultant — market entry advisory"]:::actor
        end
        subgraph S2B["Where — fragmented, data-poor markets"]
          MKT_SEA["Southeast Asia — SG MY TH ID PH VN"]:::actor
          MKT_MENA["MENA — AE SA EG"]:::actor
          MKT_SA["South Asia — IN BD PK"]:::actor
          MKT_LATAM["Latin America — MX BR CO"]:::actor
        end
        subgraph S2C["Situation"]
          SIT_CAND["Has 5–20 candidate locations · no time to survey all"]:::actor
          SIT_LOOP["Needs scored shortlist → site visit → final call"]:::insight
        end
      end

      subgraph S3["④ Insight — APIs Know More Than Any Analyst"]
        I_LIVE["Live POI density = real competition, not last year's survey"]:::insight
        I_MCP["MCP tools = maps APIs callable in a pipeline, not a browser tab"]:::insight
        I_TOPSIS["TOPSIS = transparent, weight-tunable, auditable scoring"]:::insight
        I_AUTO["Swap weight → all C* scores recompute in seconds"]:::insight
        I_POS["One pipeline. N candidates. One ranked output."]:::insight
      end

      subgraph S4["⑤ Product — Site Selection Canvas"]
        subgraph S4A["Discover — MCP Layer"]
          MCP_POI["POI Search — keyword · country · density"]:::mcp
          MCP_NEAR["Nearby Search — radius · rank_by=popularity"]:::mcp
          MCP_NAV["Routing ETA — walking · driving · cycling profiles"]:::mcp
        end
        subgraph S4B["Score — TOPSIS Engine"]
          SC_MAT["Decision Matrix — m candidates × n criteria"]:::product
          SC_NORM["Weighted Normalization — w_j × r_ij"]:::product
          SC_RANK["C* Ranking — D⁻ / (D⁺ + D⁻) per candidate"]:::signal
        end
        subgraph S4C["Report Layer"]
          OUT_RANK["Ranked Site Report — C* scores + sensitivity"]:::output
          OUT_MAP["Scored Map Canvas — visual heat overlay"]:::output
          OUT_MD["Markdown export — portable · version-controlled"]:::output
        end
      end

      subgraph S5["⑥ Demo — New Cafe · Singapore · 7 Candidates"]
        DM_BPJ["🥇 Bukit Panjang  C*=0.82 — zero competition · 16-sec MRT"]:::signal
        DM_PGL["🥈 Punggol        C*=0.78 — 22 residential POIs · young demo"]:::signal
        DM_WDL["🥉 Woodlands      C*=0.71 — zero competition · causeway traffic"]:::signal
        DM_SKG["✗  Sengkang       C*=0.22 — 6 cafes incl. 2 Starbucks"]:::problem
        DM_CBD["✗  CBD            C*=0.09 — baseline saturation"]:::problem
        DM_API["23 API calls · 5 MCP tools · 8 criteria · 1 ranked output"]:::product
      end

      subgraph S6["⑦ Architecture"]
        A_MCP["MCP Connectors — POI · nearby · navigation"]:::mcp
        A_SC["TOPSIS Engine — Python · NetworkX · DuckDB"]:::product
        A_FE["React 18 + TS + Vite — canvas + map overlay"]:::product
        A_DB["RxDB — offline-first · version-controlled reports"]:::product
        A_CF["Cloudflare Pages · Stripe"]:::product
      end

      subgraph S7["⑧ Business Model"]
        B_REP["Per-report — pay-per-scored-shortlist"]:::business
        B_SUB["Workspace subscription — unlimited scoring · saved canvases"]:::business
        B_API["API tier — embed scorer in existing tools"]:::business
        B_CON["Advisory — custom weight models per industry vertical"]:::business
      end

      subgraph S8["⑨ Roadmap"]
        R_NOW["Now — MCP pipeline · TOPSIS scorer · Markdown report · Stripe"]:::milestone
        R_NEXT["Next — scored map canvas · multi-provider geo adapter · batch candidates"]:::milestone
        R_LATER["Later — rent-index integration · real-time rescore · collab workspace"]:::milestone
      end

      subgraph S9["⑩ The Ask"]
        ASK_DP["Design partners — F&B / retail operators with live site decisions"]:::actor
        ASK_GEO["Geo API access — maps POI + routing connectors per market"]:::mcp
        ASK_DATA["Ground-truth datasets — site visits to validate C* predictions"]:::output
        ASK_DIST["Distribution — property consultants · franchise networks · VC portfolio ops"]:::actor
      end

      %% USER FLOW
      ICP_FB -->|"shortlists candidates"| MCP_POI
      ICP_RET -->|"scopes market"| MCP_NEAR
      ICP_CON -->|"advises on"| OUT_RANK
      SIT_CAND -->|"inputs to"| SC_MAT

      %% WORK FLOW
      S0 -.->|"frames"| S1
      S1 -.->|"scopes ICP"| S2
      S2 -.->|"motivates"| S3
      S3 -.->|"enables"| S4
      S4 -.->|"shown by"| S5
      S5 -.->|"runs on"| S6
      S6 -.->|"monetised via"| S7
      S7 -.->|"delivered by"| S8
      S8 -.->|"closes"| S9

      %% MCP FLOW
      MCP_POI -->|"poi_density"| SC_MAT
      MCP_NEAR -->|"competition_count"| SC_MAT
      MCP_NAV -->|"eta_minutes"| SC_MAT
      SC_MAT -->|"normalize · weight"| SC_NORM
      SC_NORM -->|"C* per candidate"| SC_RANK

      %% DATA FLOW
      SC_RANK -->|"ranked signal"| OUT_RANK
      SC_RANK -->|"heat scores"| OUT_MAP
      OUT_RANK -->|"export"| OUT_MD
      A_MCP -->|"live calls"| MCP_POI
      A_MCP -->|"live calls"| MCP_NEAR
      A_MCP -->|"live calls"| MCP_NAV
---

# Knowgrph

**Candidates in. Ranked decisions out.** A knowledge graph canvas that calls live map APIs via MCP tools, scores every candidate location through a TOPSIS multi-criteria engine, and delivers a portable, auditable site selection report — in minutes, not weeks.

> Not a dashboard. A decision pipeline.

---

## The problem — location decisions are still spreadsheets

Opening a cafe, placing a retail pop-up, entering a new market. The question is always the same: *which location?* The answer is almost always the same process: someone opens a spreadsheet, pastes in addresses, drives around, argues from gut feel, picks.

| | Status quo | Knowgrph |
|---|---|---|
| **Data freshness** | Offline reports, last-year surveys | Live POI density via MCP API calls |
| **Competition analysis** | Manual Google Maps tab-switching | `nearby_search` → competitor count per radius |
| **Routing / accessibility** | Estimated or ignored | `navigation` ETA — walking · driving · cycling |
| **Scoring model** | Gut feel, no audit trail | TOPSIS C* — weighted, normalized, reproducible |
| **Time per candidate** | 2–4 hours | Seconds per API call |
| **Output** | PowerPoint with vibes | Ranked Markdown report · scored map canvas |

The analyst time cost is real. The opacity is the bigger problem — a site pick that can't be interrogated can't be improved.

**Knowgrph makes location intelligence reproducible, live, and legible.**

---

## Who it's for

The ICP is not an industry. It's a decision type: **anyone shortlisting physical locations who needs scored, evidence-based output faster than a traditional market study allows.**

This person operates in:

- **F&B expansion** — franchise operators, independent restaurant groups, cloud kitchen networks opening outlet #2 to #10
- **Retail / pop-up brands** — DTC brands, seasonal activations, market stall operators choosing between 5–20 viable sites
- **Property development** — developers benchmarking commercial lots; landlords advising anchor tenant fit
- **Management consulting** — market entry advisory, retail network optimisation, competitor gap analysis across city districts

They share one bottleneck: **too many candidates, not enough scored data, not enough time.**

Markets where the gap is sharpest — Southeast Asia (SG MY TH ID PH VN), MENA (AE SA EG), South Asia (IN BD), Latin America (MX BR CO) — have high physical retail density, fragmented POI data, and no local equivalent of a mature market research platform.

---

## The insight — APIs already know

Maps platforms index millions of POIs, update in near-real-time, and expose everything needed for a rigorous site evaluation: competitor counts, category density, footfall proxies, transit ETAs across walking, driving, and cycling profiles.

None of that requires a field visit. It requires a pipeline.

```
candidate coordinates
→ MCP: POST nearby_search       → competitor count + F&B density
→ MCP: GET /place/v2/nearby     → residential + retail + commercial POI count
→ MCP: POST navigation          → walking ETA to transit · driving ETA to centre
→ TOPSIS: normalize · weight    → C* score per candidate
→ output: ranked report         → top 3 with sensitivity analysis
```

Swap a weight. All scores recompute. Same reproducibility as code.

---

## What it does

```mermaid
flowchart LR
  subgraph Discover["Discover — MCP Layer"]
    POI["POI Search\nkeyword · country · limit"]
    NEAR["Nearby Search\nradius · rank_by=popularity"]
    NAV["Routing ETA\nwalking · driving · cycling"]
  end
  subgraph Score["Score — TOPSIS Engine"]
    MAT["Decision Matrix\nm candidates × n criteria"]
    NORM["Weighted Normalization\nw_j × r_ij"]
    RANK["C* Ranking\nD⁻ / (D⁺ + D⁻)"]
  end
  subgraph Output["Output"]
    RPT["Ranked Report\nscored shortlist + sensitivity"]
    MAP["Scored Map Canvas\nheat overlay"]
    MD["Markdown export\nportable · auditable"]
  end

  POI --> MAT
  NEAR --> MAT
  NAV --> MAT
  MAT --> NORM --> RANK
  RANK --> RPT
  RANK --> MAP
  RPT --> MD
```

### Criteria the pipeline measures

| ID | Criterion | MCP Endpoint | Direction | Weight (default) |
|----|-----------|-------------|-----------|-----------------|
| C1 | Competitor density (2.5 km) | `POST nearby_search` | Lower = better | 0.25 |
| C2 | F&B / category saturation | `GET /place/v2/nearby` | Lower = better | 0.10 |
| C3 | Residential POI count | `GET /place/v2/nearby` | Higher = better | 0.15 |
| C4 | Retail / mall POI count | `GET /place/v2/nearby` | Higher = better | 0.10 |
| C5 | Walk-to-transit ETA (min) | `POST navigation profile=walking` | Lower = better | 0.15 |
| C6 | Drive-to-centre ETA (min) | `POST navigation profile=driving` | Target range | 0.05 |
| C7 | Total area POI density | `GET /poi/v1/search` | Higher = better | 0.10 |
| C8 | Commercial building count | `GET /place/v2/nearby` | Higher = better | 0.05 |

**Transport profiles:** `walking` · `driving` · `cycling` · `motorcycle` · `tricycle`

All weights are frontmatter fields. Swap one value, all C* scores recompute.

---

## Demo — New Cafe · Singapore · 7 Candidates · 23 API Calls

**Setup:** 7 candidate areas, radius 2.5 km (~30-min walk), ranked by `popularity`. 23 MCP calls total across POI search, nearby search, and routing profiles.

### TOPSIS results

| Rank | Location | C* | Decisive signal |
|------|----------|-----|----------------|
| 🥇 1 | **Bukit Panjang** | **0.82** | Zero cafe competitors · Bukit Panjang DTL MRT **16-second walk** · C8=18 commercial buildings (highest) |
| 🥈 2 | **Punggol** | **0.78** | C1=1 (one traditional coffeeshop only) · C3=22 HDB residential POIs · young growing demographic |
| 🥉 3 | **Woodlands** | **0.71** | C1=0 · causeway commuter flow · education/childcare ecosystem → family catchment |
| 4 | Yishun | 0.62 | Northpoint City mall anchor (C4=25) · C1=0 · high F&B saturation (C2=12) offsets |
| 5 | Jurong West | 0.41 | Major transport hub · C2=20 (worst saturation) · longest MRT walk (~14 min) |
| 6 | Sengkang | 0.22 | C1=6 cafes incl. 2 Starbucks · Compass One fully served — **do not enter** |
| — | CBD | 0.09 | Baseline saturation reference only |

### Sensitivity analysis — weight shifts change the winner

| Scenario | Weight change | New winner | Rationale |
|----------|-------------|-----------|-----------|
| Maximise foot traffic | C4 mall → 0.25 | **Yishun** | Northpoint City C4=25 becomes decisive |
| Minimise rent risk | Add C9 rent index → 0.10 | **Woodlands** | Northern areas ~30% below central band |
| Weekday lunch priority | C8 commercial → 0.20 | **Bukit Panjang** | C8=18 (highest) + DTL commuter lunch crowd |
| Family demographic focus | C3 residential → 0.30 | **Punggol** | C3=22 HDB precinct — dominant residential density |
| Hard filter C1 > 2 | Eliminate saturated | **BPJ · Woodlands · Yishun** 3-way tie | MRT access breaks tie → BPJ wins |

---

## Architecture

Server-light. MCP connectors call maps APIs directly. The TOPSIS engine runs in Python. The canvas renders in the browser.

```mermaid
flowchart LR
  CAND["Candidate\ncoordinates"] --> MCP
  subgraph MCP["MCP Connectors"]
    POI["POI search"]
    NEAR["Nearby search"]
    NAV["Routing ETA"]
  end
  MCP --> PY["TOPSIS Engine\nPython · NetworkX · DuckDB"]
  PY --> RANK["C* ranked signal"]
  RANK --> FC["Flow Editor Canvas\nReact 18 + TS + Vite"]
  FC --> MAP["Scored Map\nheat overlay"]
  FC --> RPT["Ranked Report\nMarkdown export"]
```

| Layer | Technology |
|---|---|
| MCP connectors | Maps APIs — POI search · nearby · routing ETA (5 transport profiles) |
| Scoring engine | TOPSIS — Python 3.10+ · NetworkX · DuckDB · weighted normalization · C* ranking |
| Frontend canvas | React 18 + TypeScript + Vite 6 · D3.js · Mermaid |
| Map overlay | D3.js / Leaflet — heat scored candidates on base map |
| Local DB | RxDB — offline-first · report versioning |
| Payments | Stripe — per-report + subscription |
| Deployment | Cloudflare Pages (PWA) — airvio.co/knowgrph |

---

## Business model

**Per-report** — pay-per-scored shortlist. Input candidates, receive ranked Markdown report + scored canvas. No subscription required to start.

**Workspace subscription** — unlimited scoring runs, saved canvases, report history, weight model library.

**API tier** — embed the TOPSIS scorer into existing property, F&B, or retail tools via REST. Bring your own geo API keys; Knowgrph handles the scoring logic.

**Advisory** — custom weight models per vertical (F&B vs. retail vs. logistics), calibrated against ground-truth site performance data.

---

## Roadmap

**Now** — MCP pipeline (POI + nearby + routing), TOPSIS scorer, ranked Markdown report, Stripe per-report gating

**Next** — scored map canvas (heat overlay), multi-provider geo adapter (swap maps API without re-wiring scorer), batch candidate import (CSV → N runs), sensitivity dashboard

**Later** — rent-index integration (URA / third-party property data), real-time rescore on candidate edit, collaborative workspace, mobile shortlisting UI

---

## The ask

**Design partners** — F&B operators, retail brands, or property consultants with live site decisions in the next 90 days. We run your shortlist through the pipeline; you validate the C* output against what you know on the ground.

**Geo API access** — teams with maps platform API keys (POI search, nearby, routing ETA) across SEA, MENA, or South Asia markets. Knowgrph is provider-agnostic; the adapter layer handles normalization.

**Ground-truth datasets** — post-opening performance data (revenue, footfall) from sites already chosen by gut feel. We back-test C* predictions against actuals to calibrate weights.

**Distribution intros** — franchise networks, VC portfolio ops teams, property consultancies, and retail expansion advisors who run multiple site decisions per quarter.

If you believe location intelligence should be as reproducible as code — scored, auditable, and re-runnable — let us build it together.

---

**Product:** airvio.co/knowgrph

**Docs:** see `docs/conflict-resolution.md` for repo sync policy.

> *"Map it. Score it. Decide it."*