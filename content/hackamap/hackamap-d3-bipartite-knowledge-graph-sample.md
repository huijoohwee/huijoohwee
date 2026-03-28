# Hackamap — D3 Bipartite Knowledge Graph
### Multi-Dimensional Reference · Airtable Format
*Source: `hackamap-d3-bipartite-knowledge-graph.html` · `hackamap-d3-bipartite-knowledge-graph.json`*

---

## TABLE 1 — CLUSTERS

| ID | Name | Side | Color | Gap Ratio | Nodes | Edges | Status | Priority |
|---|---|---|---|---|---|---|---|---|
| `team` | Team Building | Problem | `#f59e0b` 🟡 | 31% | 3 | 4 | Partially served | Low |
| `validation` | Validation | Problem | `#9f7cff` 🟣 | 72% | 3 | 4 | Mostly unserved | High |
| `growth` | Growth | Problem | `#f43f5e` 🔴 | 55% | 3 | 4 | Half unserved | Medium |
| `capital` | Capital | Problem | `#c084fc` 💜 | 100% | 3 | 2 | Total whitespace | 🚨 Critical |
| `network` | Network | Solution | `#06b6d4` 🔵 | — | 3 | 3 | Serving team cluster | — |
| `launch` | Launch Platforms | Solution | `#22c55e` 🟢 | — | 3 | 4 | Serving validation/growth | — |
| `build` | Build & Hire | Solution | `#2dd4bf` 🩵 | — | 3 | 3 | Serving validation/growth | — |
| `funding` | Funding & Growth | Solution | `#3b82f6` 🔷 | — | 2 | 2 | Thin coverage of capital | — |

---

## TABLE 2 — PROBLEM NODES

| ID | Label | Cluster | Gap Score | PMF Score | Velocity | Sources | Specificity | Solutions Linked | Alert | Pulse | Glow | Opportunity Rank |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `p12` | Revenue-based financing options | Capital | **4.50** | **6.75** | +0.95 ↑ | 2 | domain_specific | 0 | 🚨 | Fast | g3 | **#1** |
| `p10` | Pre-seed without warm intro | Capital | **4.10** | **6.15** | +0.90 ↑ | 4 | domain_specific | 1 | 🚨 | Fast | g3 | **#2** |
| `p11` | SAFE vs priced round confusion | Capital | **3.80** | **5.70** | +0.85 ↑ | 3 | named_tool | 1 | 🚨 | Fast | g3 | **#3** |
| `p4` | AI agent memory persistence | Validation | 3.37 | 5.24 | +0.82 ↑ | 1 | named_tool | 1 | 🚨 | Fast | g2 | #4 |
| `p9` | SEO vs paid acquisition ROI | Growth | 2.80 | 3.40 | +0.70 ↑ | 3 | domain_specific | 0 | 🚨 | Fast | g2 | #5 |
| `p7` | Churn prediction for B2B SaaS | Growth | 2.40 | 3.60 | +0.60 ↑ | 2 | named_tool | 1 | 🚨 | Med | g2 | #6 |
| `p5` | No-code MVP testing pipeline | Validation | 2.10 | 3.20 | +0.45 ↑ | 2 | domain_specific | 2 | 🚨 | Med | g2 | #7 |
| `p8` | Viral loop design for dev tools | Growth | 1.90 | 2.90 | +0.35 ↑ | 1 | domain_specific | 2 | ❌ | — | g1 | #8 |
| `p1` | Finding co-founders remotely | Team Building | 1.80 | 2.70 | +0.30 ↑ | 2 | domain_specific | 3 | ❌ | — | g1 | #9 |
| `p6` | Getting first 10 users | Validation | 1.50 | 2.30 | +0.25 ↑ | 3 | vague | 2 | ❌ | — | g1 | #10 |
| `p3` | Equity splitting disputes | Team Building | 1.20 | 1.80 | +0.20 ↑ | 2 | domain_specific | 1 | ❌ | — | g1 | #11 |
| `p2` | Async team coordination | Team Building | 0.90 | 1.10 | +0.10 ↑ | 1 | domain_specific | 1 | ❌ | — | — | #12 |

---

## TABLE 3 — SOLUTION NODES

| ID | Label | Cluster | Source Count | Specificity | Problems Linked | Strength Range | Canvas Radius | Border |
|---|---|---|---|---|---|---|---|---|
| `s4` | Product Hunt | Launch Platforms | 8 | named_tool | 3 (`p5`,`p6`,`p8`) | 0.40–0.60 | 9px | 2.0px |
| `s6` | Hacker News | Launch Platforms | 7 | named_tool | 2 (`p6`,`p8`) | 0.50–0.65 | 9px | 2.0px |
| `s10` | Carta SAFE Manager | Funding & Growth | 6 | named_tool | 2 (`p3`,`p11`) | 0.30–0.50 | 9px | 2.0px |
| `s1` | YC Co-Founder Matching | Network | 5 | named_tool | 1 (`p1`) | 0.85 | 9px | 2.0px |
| `s8` | Cursor IDE | Build & Hire | 5 | named_tool | 1 (`p2`) | 0.40 | 9px | 2.0px |
| `s11` | AngelList | Funding & Growth | 5 | named_tool | 1 (`p10`) | 0.20 | 9px | 2.0px |
| `s3` | On Deck Fellowship | Network | 4 | named_tool | 1 (`p1`) | 0.60 | 9px | 2.0px |
| `s5` | Betalist | Launch Platforms | 4 | named_tool | 1 (`p5`) | 0.55 | 9px | 2.0px |
| `s9` | Replit | Build & Hire | 4 | named_tool | 0 | — | 9px | 2.0px |
| `s2` | Lunchclub AI | Network | 3 | named_tool | 1 (`p1`) | 0.70 | 9px | 2.0px |
| `s7` | LangGraph by LangChain | Build & Hire | 3 | named_tool | 2 (`p4`,`p7`) | 0.30–0.40 | 9px | 2.0px |

---

## TABLE 4 — EDGES

| ID | Problem | Problem Cluster | Solution | Solution Cluster | Strength | Type | Canvas Opacity | Cross-cluster? |
|---|---|---|---|---|---|---|---|---|
| `e01` | Finding co-founders remotely | Team Building | YC Co-Founder Matching | Network | 0.85 | Strong | 0.44 | ✅ |
| `e02` | Finding co-founders remotely | Team Building | Lunchclub AI | Network | 0.70 | Strong | 0.39 | ✅ |
| `e03` | Finding co-founders remotely | Team Building | On Deck Fellowship | Network | 0.60 | Moderate | 0.35 | ✅ |
| `e04` | Async team coordination | Team Building | Cursor IDE | Build & Hire | 0.40 | Weak | 0.27 | ✅ |
| `e05` | Equity splitting disputes | Team Building | Carta SAFE Manager | Funding & Growth | 0.50 | Moderate | 0.31 | ✅ |
| `e06` | AI agent memory persistence | Validation | LangGraph by LangChain | Build & Hire | 0.40 | Weak | 0.27 | ✅ |
| `e07` | No-code MVP testing pipeline | Validation | Product Hunt | Launch Platforms | 0.60 | Moderate | 0.35 | ✅ |
| `e08` | No-code MVP testing pipeline | Validation | Betalist | Launch Platforms | 0.55 | Moderate | 0.33 | ✅ |
| `e09` | Getting first 10 users | Validation | Hacker News | Launch Platforms | 0.65 | Moderate | 0.37 | ✅ |
| `e10` | Getting first 10 users | Validation | Product Hunt | Launch Platforms | 0.50 | Moderate | 0.31 | ✅ |
| `e11` | Churn prediction for B2B SaaS | Growth | LangGraph by LangChain | Build & Hire | 0.30 | Weak | 0.23 | ✅ |
| `e12` | Viral loop design for dev tools | Growth | Product Hunt | Launch Platforms | 0.40 | Weak | 0.27 | ✅ |
| `e13` | Viral loop design for dev tools | Growth | Hacker News | Launch Platforms | 0.50 | Moderate | 0.31 | ✅ |
| `e14` | Pre-seed without warm intro | Capital | AngelList | Funding & Growth | 0.20 | Weak | 0.20 | ✅ |
| `e15` | SAFE vs priced round confusion | Capital | Carta SAFE Manager | Funding & Growth | 0.30 | Weak | 0.23 | ✅ |

> All 15 edges are cross-cluster — no same-cluster connections exist in the bipartite model.

---

## TABLE 5 — PMF SCORING MATRIX

| ID | Label | Gap Score | Urgency Wt | Source Count | Spec Multiplier | PMF Score | Velocity | Rank | Alert |
|---|---|---|---|---|---|---|---|---|---|
| `p12` | Revenue-based financing | 4.50 | 1.5 | 2 | 1.2 | **6.75** | +0.95 | 1 | 🚨 |
| `p10` | Pre-seed without warm intro | 4.10 | 1.5 | 4 | 1.2 | **6.15** | +0.90 | 2 | 🚨 |
| `p11` | SAFE vs priced round confusion | 3.80 | 1.5 | 3 | 1.5 | **5.70** | +0.85 | 3 | 🚨 |
| `p4` | AI agent memory persistence | 3.37 | 1.5 | 1 | 1.5 | **5.24** | +0.82 | 4 | 🚨 |
| `p7` | Churn prediction for B2B SaaS | 2.40 | 1.5 | 2 | 1.5 | **3.60** | +0.60 | 5 | 🚨 |
| `p5` | No-code MVP testing pipeline | 2.10 | 1.5 | 2 | 1.2 | **3.20** | +0.45 | 6 | 🚨 |
| `p9` | SEO vs paid acquisition ROI | 2.80 | 1.5 | 3 | 1.2 | **3.40** | +0.70 | 7 | 🚨 |
| `p8` | Viral loop design for dev tools | 1.90 | 1.5 | 1 | 1.2 | **2.90** | +0.35 | 8 | ❌ |
| `p1` | Finding co-founders remotely | 1.80 | 1.5 | 2 | 1.2 | **2.70** | +0.30 | 9 | ❌ |
| `p6` | Getting first 10 users | 1.50 | 1.5 | 3 | 0.8 | **2.30** | +0.25 | 10 | ❌ |
| `p3` | Equity splitting disputes | 1.20 | 1.5 | 2 | 1.2 | **1.80** | +0.20 | 11 | ❌ |
| `p2` | Async team coordination | 0.90 | 1.5 | 1 | 1.2 | **1.10** | +0.10 | 12 | ❌ |

Formulas:
- `gap_score = LOG(asks + 1) / (solution_count + 1)`
- `pmf_score = gap_score × urgency_weight × LOG(source_count + 1) × specificity_multiplier`
- Alert fires when `pmf_score > 3.0`

---

## TABLE 6 — CANVAS ENCODING

| Visual Property | Data Field | Scale / Rule | Low Value | High Value |
|---|---|---|---|---|
| Node radius | `gap_score` | sqrt, 7–20px | 7px (gap=0) | 20px (gap=5) |
| Fill opacity | `type` | Problem=0.82, Solution=0.55 | Solution node | Problem node |
| Glow filter | `pmf_score` | >1.5→g1 >3→g2 >5→g3 | None | g3 (12px blur) |
| Pulse speed | `gap_velocity` | >0.7→fast >0.4→med | None | 0.85s cycle |
| Border width | `source_count` | >3 → 2px, else 1.2px | 1.2px | 2.0px |
| Gap label | `gap_score` | Shown if gap ≥ 1.0 (problems) | Hidden | Score above node |
| Edge opacity | `strength` | 0.12 + (str × 0.38) | 0.12 (str=0) | 0.50 (str=1) |
| Edge width | `strength` | 0.5 + (str × 2.2) | 0.5px | 2.7px |
| Edge color | `problem.cluster` | Inherits problem cluster color | — | — |
| Cluster badge | `cluster_gap_ratio` | Problems only, shown as `XX% gap` | 31% (team) | 100% (capital) |
| Halo ring | `pmf_score` | Problem + pmf>3, radius+8, opacity=0.06 | None | Capital cluster |

---

## TABLE 7 — WHITESPACE MAP (Zero-Edge Problems)

| ID | Label | Cluster | Gap Score | PMF Score | Velocity | Opportunity Note | Specificity | Action |
|---|---|---|---|---|---|---|---|---|
| `p12` | Revenue-based financing options | Capital | 4.50 | 6.75 | +0.95 | No RBF tools indexed; massive founder demand | domain_specific | Build now |
| `p9` | SEO vs paid acquisition ROI | Growth | 2.80 | 3.40 | +0.70 | Analytics tools exist but not founder-facing | domain_specific | Validate |

> `p9` and `p12` have **zero solution edges** — they appear as isolated nodes on the canvas. These are the literal whitespace the Opportunity Finder highlights on drag.

---

## TABLE 8 — PIPELINE × DATA FIELD PROVENANCE

| Field | Injected At | Tool | DF Step | Used In |
|---|---|---|---|---|
| `source`, `source_url`, `raw_text` | Ingestion | Bright Data | DF-01 | Classification, Telegram link |
| `upvotes`, `comments` (= `asks`) | Ingestion | Bright Data | DF-01 | gap_score numerator |
| `type`, `label`, `cluster`, `specificity` | Classification | Agnes AI | DF-02 | Canvas grouping, PMF multiplier |
| `tags`, `embedding` | Classification | Agnes AI | DF-02 | Edge cosine similarity |
| `last_seen_at`, `source_count` | Deduplication | mem9 | DF-03 | Cross-platform reach signal |
| `gap_score`, `urgency_weight`, `pmf_score` | Storage trigger | TiDB SQL | DF-04 | Alert threshold, node radius/glow |
| `gap_velocity` | Cron delta | ZenMux | DF-05 | Pulse animation, momentum signal |
| `cluster_gap_ratio` | Graph recalc | ZenMux | DF-05 | Cluster header badge |
| `alert` flag | Alert loop | Telegram Bot | DF-07 | 🚨 banner, watchlist match |
| `canvas.*` (radius, glow, pulse) | Render | D3.js v7 | DF-08 | Visual encoding only |

---

*Hackamap · Agent Forge Hackathon 2026 · $0 TCO*
