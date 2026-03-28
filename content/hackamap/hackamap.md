# Hackamap
### Startup Idea Radar · Gap Map · Knowledge Graph Canvas
*Pitch Deck + PRD + TAD*

---

## PART 1 — PITCH DECK

### One-liner
**Hackamap makes product-market fit visible in real time** — turning every customer problem into a live map that shows founders exactly where the money is still unclaimed.

---

### Slide 1 · Problem
Young founders and hackathon teams waste days on manual research:
- "Is this idea already built?" → ProductHunt rabbit hole, 3 hrs
- "Is anyone asking for this?" → Reddit spelunking, no structure
- "Where's the gap?" → gut feel, guesswork

**No tool cross-references what's being built against what people are screaming for.**

---

### Slide 2 · Solution
**Hackamap** is a live knowledge graph canvas that:
1. **Live Interactive Canvas** — D3-powered bipartite graph connecting what people desperately ask for with every solution already being built
2. **Gap Score** — one number that flags the biggest unmet needs before anyone else sees them
3. **Opportunity Finder** — drag any problem node and watch whitespace light up; that empty space is your next billion-dollar idea

One graph. Built in 3 hours. Updated continuously.

---

### Slide 3 · Live Demo Flow
```
[Today's ProductHunt launches]   →  Agnes AI  →  Solution nodes
[Reddit r/startups this morning] →  Agnes AI  →  Problem nodes
                                                       ↓
                             Gap Score Engine (LOG(asks+1) / (solutions+1))
                                                       ↓
                             D3 bipartite canvas · Telegram alert · ZenMux
```
**Demo moment:** On stage, scrape live → show a real gap in real time.

---

### Slide 4 · Market
- **3.2M** hackathon participants globally (2025, Devpost)
- **18M+** indie hackers / solo founders (Indie Hackers community)
- **Primary:** hackathon teams, solo founders, startup researchers
- **Secondary:** VCs doing landscape mapping, accelerators doing cohort analysis

---

### Slide 5 · Feature Comparison Matrix

| Feature | Hackamap | ProductHunt | Exploding Topics | Google Trends | Devpost |
|---|---|---|---|---|---|
| Problem-side signal | ✅ Live scrape | ❌ | Partial | Partial | ❌ |
| Solution-side mapping | ✅ Bipartite graph | ✅ Launches only | ❌ | ❌ | ✅ Demos only |
| Cross-reference both | ✅ | ❌ | ❌ | ❌ | ❌ |
| Gap Score (quantified) | ✅ | ❌ | ❌ | ❌ | ❌ |
| Real-time alerts | ✅ Telegram | ❌ | ❌ Newsletter | ❌ | ❌ |
| Open-source / $0 | ✅ | ❌ Paid | ❌ Paid | ✅ | ✅ |
| Cluster grouping | ✅ 4×4 clusters | ❌ | ❌ | ❌ | ❌ |
| **Category** | **Graph · AI · Alerts** | **Discovery** | **Trends** | **Search** | **Demos** |

---

### Slide 6 · Ask
**Hackathon:** Ship a working demo. Win.
**Post-hackathon:** Open-source the core, build a community around the gap map.

---

## PART 2 — PRODUCT REQUIREMENTS DOCUMENT (PRD)

### Overview
| Field | Value |
|---|---|
| Product | Hackamap |
| Version | 0.1.0 (Hackathon MVP) |
| Timeline | **3-hour build** |
| Deployment | Zeabur (free tier) |

---

### Goals
1. Ingest live data from ≥3 public sources with no manual intervention
2. Surface a bipartite D3 canvas with cluster grouping in a browser tab — no login required
3. Compute and display a **Gap Score** per problem node
4. Deliver Telegram alerts when a high-gap problem is detected

### Non-Goals (MVP)
- User accounts / auth · Mobile native app · Real-time collaboration on canvas

---

### User Stories

**U1 — Founder Research:** I open Hackamap and see a canvas of problems and solutions from the last 7 days to identify where no one is building.

**U2 — Hackathon Ideation:** I query "EdTech" and see clustered pain points with Gap Scores so I can pick a validated idea in under 5 minutes.

**U3 — Passive Monitoring:** I add keywords to my Telegram watchlist and receive alerts when a new high-gap cluster appears in my domain.

---

### Canvas Feature Set (from Build Plan)

- **Cluster groups:** 4 problem clusters (Team building, Validation, Growth, Capital) × 4 solution clusters (Network, Launch platforms, Build & hire, Funding & growth) — each color-coded from ramp palette
- **Collapse / expand:** clicking a cluster header shrinks it to a label bar with animated chevron flip; edges dynamically re-route to the header's Y position
- **Cluster-level hover:** highlights all edges from that cluster, dims everything else; tooltip shows node count, edge count, and open gaps
- **Node-level hover:** traces individual edges; sidebar shows source posts, Gap Score, related nodes
- **Gap highlight:** Capital cluster (purple, gap = 1.0) and scattered Validation/Growth gap nodes surface the real whitespace

---

### Acceptance Criteria
| Feature | Criterion |
|---|---|
| Scrape pipeline | ≥50 items ingested per source per run, zero crashes |
| Classification | Latency < 3s per item on CPU |
| Gap Score | Updates visible in canvas within 60s of recompute |
| Canvas | Loads ≤ 3s with 200 nodes; pan/zoom smooth |
| Telegram alert | Delivered < 5 min after trigger condition |

---

## PART 3 — TECHNICAL ARCHITECTURE DOCUMENT (TAD)

### Stack — Hackathon-Mandated Tools

| Layer | Tool | Role | License | Cost |
|---|---|---|---|---|
| **Scraping** | Bright Data Web Unlocker | Reddit, HN, PH scrape | Commercial | Free credit |
| **Classification** | Agnes AI | Problem/solution tagging + embeddings | Commercial | Free tier |
| **Orchestration** | OpenClaw | Agent skills manifest, API auth, rate-limiting | — | Free |
| **Memory** | mem9 | Duplicate detection, user watchlist across sessions | — | Free |
| **Database** | TiDB Cloud Zero | MySQL-compatible, JSON columns, `JSON_ARRAYAGG()` → D3 | Apache 2.0 | Free |
| **Real-time pipeline** | ZenMux | Gap recalculation orchestration, live canvas updates | — | Free |
| **Bot channel** | Telegram Bot Father | User interface, real-time alerts, DM intake | — | Free |
| **Deployment** | Zeabur | Node.js + static hosting, one `zeabur.json` | — | Free |
| **Frontend** | D3.js v7 | Force-directed bipartite canvas | MIT | $0 |

**Total TCO: $0/month**

---

### Data Schema (TiDB Cloud)

```sql
CREATE TABLE nodes (
  id        VARCHAR(36) PRIMARY KEY,
  type      ENUM('problem','solution'),
  label     VARCHAR(255),
  metadata  JSON,          -- { asks, tags, source_url }
  gap_score FLOAT DEFAULT 0
);
CREATE TABLE edges (
  problem_id  VARCHAR(36),
  solution_id VARCHAR(36),
  strength    FLOAT,
  INDEX(problem_id), INDEX(solution_id)
);
```

`gap_score = LOG(asks + 1) / (solution_count + 1)` — pure SQL, runs on insert trigger.

---

### Sequence — End to End

```
1. Bright Data    → scrape Reddit r/startups, HN "Ask HN", PH comments
2. Agnes AI       → classify problem/solution, extract keywords
3. mem9           → deduplicate against session memory
4. TiDB Cloud     → upsert node; insert trigger recomputes gap_score
5. ZenMux         → orchestrate gap recalculation pipeline
6. D3 Canvas      → poll /api/graph every 60s, re-render force layout
7. Alert loop     → every 5min: gap_score > 0.7 ∩ watchlist → Telegram
```

---

## PART 4 — CRITICAL PATH: 0 → 1 IN 3 HOURS (FREE TIER)

Parallel tracks — split between two team members. Hard convergence at H2:30.

| Task | Track | Hour | Owner | Blocker | Status | Category |
|---|---|---|---|---|---|---|
| Zeabur project + `zeabur.json` scaffold | Backend | 0:00 | Dev A | — | ☐ | Infra, Deploy |
| TiDB Cloud Zero — provision DB + schema | Backend | 0:10 | Dev A | Zeabur up | ☐ | DB, Infra |
| OpenClaw skills manifest init | Backend | 0:20 | Dev A | TiDB up | ☐ | Orchestration |
| Bright Data Web Unlocker — scrape Reddit | Backend | 0:30 | Dev A | OpenClaw | ☐ | Scrape, Data |
| Agnes AI — classify + tag items | Backend | 0:45 | Dev A | Bright Data | ☐ | AI, Data |
| mem9 — dedup check integration | Backend | 1:00 | Dev A | Agnes AI | ☐ | Memory, AI |
| TiDB upsert + insert trigger for gap_score | Backend | 1:10 | Dev A | mem9 | ☐ | DB, Logic |
| `/api/graph` endpoint → D3 JSON shape | Backend | 1:30 | Dev A | gap_score | ☐ | API, Backend |
| ZenMux pipeline — live recalc wiring | Backend | 2:00 | Dev A | API endpoint | ☐ | Orchestration |
| Telegram Bot Father — bot token + webhook | Frontend/Bot | 0:00 | Dev B | — | ☐ | Bot, Infra |
| D3 bipartite canvas — node/edge scaffold | Frontend/Bot | 0:15 | Dev B | — | ☐ | Frontend, Graph |
| Cluster grouping (4×4) + color ramp | Frontend/Bot | 0:45 | Dev B | D3 scaffold | ☐ | Frontend, UX |
| Collapse/expand + animated chevron | Frontend/Bot | 1:15 | Dev B | Clusters | ☐ | Frontend, UX |
| Cluster hover + edge bundling | Frontend/Bot | 1:45 | Dev B | Collapse | ☐ | Frontend, UX |
| Gap threshold slider + domain filter | Frontend/Bot | 2:00 | Dev B | API endpoint | ☐ | Frontend, UX |
| **CONVERGENCE: wire `/api/graph` → D3** | **Both** | **2:30** | **Both** | **API + Canvas** | **☐** | **Integration** |
| Telegram `/gaps`, `/watch`, alert loop | Bot | 2:30 | Dev B | mem9 + TiDB | ☐ | Bot, Alerts |
| ZenMux live alert on gap_score > 0.7 | Backend | 2:45 | Dev A | ZenMux | ☐ | Alerts, P0 |
| Deploy to Zeabur — public URL | Both | 2:55 | Dev A | All above | ☐ | Deploy |
| **DEMO READY: live scrape on stage** | **Both** | **3:00** | **Both** | **Deploy** | **☐** | **Demo, P0** |

> **P0 risk:** Telegram live alert on stage (H2:45 task) is the most commonly missed milestone — wire and test this before polishing the UI.

---

## PART 5 — COST-BENEFIT MATRIX

| Tool | Role in Hackamap | Free Tier Limit | Est. Hackathon Usage | Headroom | Category | Risk |
|---|---|---|---|---|---|---|
| Zeabur | Hosting Node.js app + static frontend | 1 project, 512MB RAM | ~200MB RAM peak | ✅ Comfortable | Infra, Deploy | Low |
| TiDB Cloud Zero | All persistent state: nodes, edges, gap_score | 5GB storage, shared cluster | ~50MB (≤5k nodes) | ✅ Very high | DB, Graph | Low |
| Bright Data | Reddit, HN, PH scraping via Web Unlocker | Free trial credits (~$5) | ~200–500 requests | ✅ Within credit | Scrape, Data | Medium |
| Agnes AI | Classify + embed problem/solution items | Free tier (req/min TBD) | ~500 classifications | ✅ Likely OK | AI, Classification | Medium |
| OpenClaw | Agent orchestration + API rate-limiting | Free tier | Light orchestration | ✅ Comfortable | Orchestration | Low |
| mem9 | Dedup memory + watchlist persistence | Free tier | ~1k memory entries | ✅ Comfortable | Memory, AI | Low |
| ZenMux | Real-time gap recalc pipeline orchestration | Free tier | 1 pipeline, ~6 runs/hr | ✅ Comfortable | Orchestration | Low |
| Telegram Bot Father | User DM intake + alerts channel | Unlimited | ~50 test messages | ✅ No limit | Bot, Alerts | Low |
| D3.js v7 | Frontend canvas rendering | MIT / self-hosted | Browser-side only | ✅ No server cost | Frontend | Low |
| **Total** | | | | **$0/month** | **Full stack** | **Low** |

---

## REPO STRUCTURE

```
Hackamap/
├── zeabur.json
├── package.json
├── src/
│   ├── scraper/        # Bright Data Web Unlocker + OpenClaw skills
│   ├── worker/         # Agnes AI classify + mem9 dedup + TiDB upsert
│   ├── app/            # Express API + D3 canvas static
│   └── bot/            # Telegram Bot Father handlers + ZenMux alerts
├── sql/
│   └── schema.sql      # TiDB Cloud schema + gap_score trigger
└── README.md
```

---

## End-to-End User Journey + Workflow + Data Flow (Ingestion → D3 Visualization)

This single table is the complete live blueprint from any source screaming a problem → classified node → Gap Score → beautiful D3 gap map that founders can drag and explore in real time.

| ID     | Stage                  | Workflow Step                                      | Data Flow (Sources → Output)                                                                 | Tools / Components                  | User Journey Touchpoint                  | Rendering in D3 Canvas                          | Notes / Critical Path (3h MVP) |
|--------|------------------------|----------------------------------------------------|----------------------------------------------------------------------------------------------|-------------------------------------|------------------------------------------|-------------------------------------------------|--------------------------------|
| DF-01  | Ingestion             | Live public scraping (no manual intervention)     | reddit (r/startups), linkedin (posts), **x** (tweets/posts), producthunt (launches + comments), hackernews (Ask HN), youtube (comments/transcripts) → raw unstructured items | Bright Data Web Unlocker + OpenClaw | U1 (Founder Research) & U2 (Hackathon Ideation) – fresh signals appear instantly | N/A (backend only)                             | H0:30 – Bright Data scrape |
| DF-02  | Classification        | AI tagging + embedding                            | Raw posts from all 6 sources → classified as **problem** or **solution** nodes + keywords + embeddings + tags | Agnes AI                           | U1 & U2 – problems vs solutions separated automatically | Nodes typed & colored (problem = left, solution = right) | H0:45 – Agnes AI classification |
| DF-03  | Deduplication         | Memory-based duplicate removal                    | Classified items → deduplicated against session memory (no duplicate nodes/edges)           | mem9                               | All U’s – clean, spam-free canvas               | Prevents duplicate nodes & crossed edges        | H1:00 – mem9 integration |
| DF-04  | Storage & Scoring     | Upsert + auto Gap Score trigger                   | Deduplicated nodes → TiDB (`nodes` + `edges` tables); **gap_score = LOG(asks+1)/(solutions+1)** computed on insert | TiDB Cloud Zero + SQL trigger      | U3 (Passive Monitoring) – high-gap items flagged | Gap Score visualized on every problem node (color intensity + label) | H1:10 – TiDB + trigger |
| DF-05  | Orchestration         | Live recalculation pipeline                       | New/updated data → ZenMux triggers full gap recalc across entire graph                      | ZenMux + OpenClaw                  | U1 & U2 – canvas stays current without refresh | Edges & node positions dynamically re-layout on gap change | H2:00 – ZenMux wiring |
| DF-06  | API Exposure          | Graph JSON endpoint                               | Aggregated nodes/edges/gap_scores from TiDB → clean D3-ready JSON                           | Express `/api/graph`               | All U’s – data delivered to browser             | Single source of truth for every poll           | H1:30 – `/api/graph` endpoint |
| DF-07  | Alerting              | High-gap detection & delivery                     | gap_score > 0.7 ∩ user watchlist → instant Telegram alert with direct canvas link           | Telegram Bot + ZenMux alert loop   | U3 (Passive Monitoring) – “new billion-dollar gap found” | Alert links straight into highlighted gap cluster | H2:45 – P0 Telegram live alert |
| DF-08  | Canvas Loading        | Browser loads interactive graph                   | User opens hackamap → `fetch('/api/graph')` every 60 s                                      | D3.js v7 + Zeabur static hosting   | U1 & U2 – open tab and see live map            | Initial bipartite force-directed layout (≤3 s load) | H0:15 – D3 scaffold + H2:30 convergence |
| DF-09  | User Interaction      | Drag, hover, cluster collapse, gap exploration    | Polled JSON + user actions (drag problem node, click cluster, hover edge) → real-time canvas updates | D3 force layout + custom 4×4 clusters | U1 (see whitespace), U2 (pick validated idea in <5 min), U3 (jump from alert) | • 4×4 color-coded clusters (Team/Validation/Growth/Capital × Network/Launch/Build/Funding)<br>• Collapse/expand with animated chevrons<br>• Hover traces edges + sidebar<br>• Drag problem → whitespace lights up | H1:15–2:00 – cluster UX + hover |
| DF-10  | Final Visualization   | Bipartite knowledge graph canvas                  | All upstream data synthesized → live interactive Gap Map                                    | D3.js v7 (client-side)             | Complete journey: Research → Ideation → Monitoring → Action | Full D3 bipartite graph with Gap Score highlights, edge bundling, zoom/pan, gap threshold slider | Demo-ready at H3:00 on Zeabur |

**How to use this table**  
- **Filter by column** → e.g. filter “User Journey” = U3 to see only passive monitoring flow.  
- **Filter by Source** → the Ingestion row shows all 6 sources (Reddit, LinkedIn, X, ProductHunt, Hacker News, YouTube).  
- **Sort by Critical Path** → see exact 3-hour hackathon order.  
- Everything runs on **$0 TCO** (Zeabur + free tiers) and updates **continuously**.

---

*Hackamap · 100% FOSS · $0 TCO*