# Hackamap — End-to-End Data Flow
### Ingestion → PMF Gap Score → D3 Visualization

Every step below traces **one single example item** through the full pipeline.
Raw noise → classified node → Gap Score → live D3 canvas → Telegram alert.

---

## PMF INSIGHT MODEL

Hackamap measures product-market fit as **whitespace density** on a bipartite graph.

| PMF Signal | How Hackamap Measures It | Field |
|---|---|---|
| Demand intensity | Upvotes + comment count on problem posts | `asks` |
| Supply coverage | Count of solution nodes within cosine distance < 0.4 | `solution_count` |
| Raw gap magnitude | `LOG(asks + 1) / (solution_count + 1)` | `gap_score` |
| Urgency | Recency-weighted asks (posts < 7 days get 1.5× multiplier) | `urgency_weight` |
| Specificity | Named technology/tool vs vague frustration (Agnes tag) | `specificity` ENUM |
| Cluster saturation | Ratio of gap nodes to total nodes in cluster | `cluster_gap_ratio` |
| Velocity | Gap score delta over last 24 hrs (rising = accelerating demand) | `gap_velocity` |
| Reach | Unique sources citing same problem (cross-platform signal) | `source_count` |

**Composite PMF Score** (used in Telegram alerts and canvas highlight intensity):
```
pmf_score = gap_score × urgency_weight × LOG(source_count + 1) × specificity_multiplier
```
Where `specificity_multiplier`: `named_tool` = 1.5 · `domain_specific` = 1.2 · `vague` = 0.8

---

## DATA FIELD REQUIREMENTS

### Node Schema (TiDB `nodes` table)

| Field | Type | Required | Source | PMF Role |
|---|---|---|---|---|
| `id` | VARCHAR(36) UUID | ✅ | System | Primary key |
| `type` | ENUM('problem','solution') | ✅ | Agnes AI | Graph side assignment |
| `label` | VARCHAR(255) | ✅ | Agnes AI | Canvas display text |
| `source` | VARCHAR(64) | ✅ | Scraper | Cross-platform reach calc |
| `source_url` | TEXT | ✅ | Bright Data | Telegram link |
| `raw_text` | TEXT | ✅ | Bright Data | Agnes re-classification |
| `asks` | INT | ✅ | Scraped | Demand intensity |
| `upvotes` | INT | ✅ | Scraped | Demand intensity |
| `comments` | INT | ✅ | Scraped | Demand intensity |
| `tags` | JSON ARRAY | ✅ | Agnes AI | Domain filter + cluster routing |
| `embedding` | JSON (1536-dim) | ✅ | Agnes AI | Cosine similarity for edges |
| `gap_score` | FLOAT | ✅ | SQL trigger | Primary PMF metric |
| `urgency_weight` | FLOAT | ✅ | SQL trigger | Recency multiplier |
| `pmf_score` | FLOAT | ✅ | SQL trigger | Composite alert score |
| `gap_velocity` | FLOAT | ❌ computed | Cron job | Rising vs falling demand |
| `source_count` | INT | ❌ computed | Cron job | Cross-platform reach |
| `specificity` | ENUM('named_tool','domain_specific','vague') | ✅ | Agnes AI | PMF multiplier |
| `cluster` | ENUM(4 problem / 4 solution clusters) | ✅ | Agnes AI | Canvas grouping |
| `scraped_at` | TIMESTAMPTZ | ✅ | System | TTL + recency weight |
| `last_seen_at` | TIMESTAMPTZ | ✅ | System | Dedup + freshness |

### Edge Schema (TiDB `edges` table)

| Field | Type | Required | Source | PMF Role |
|---|---|---|---|---|
| `problem_id` | VARCHAR(36) | ✅ | System | FK → nodes |
| `solution_id` | VARCHAR(36) | ✅ | System | FK → nodes |
| `strength` | FLOAT [0–1] | ✅ | Cosine similarity | Edge weight / canvas opacity |
| `computed_at` | TIMESTAMPTZ | ✅ | System | Staleness detection |

### API Response Schema (`/api/graph`)

| Field | Type | D3 Usage | PMF Usage |
|---|---|---|---|
| `nodes[].id` | STRING | Node identity | — |
| `nodes[].type` | STRING | Left/right bipartite side | — |
| `nodes[].label` | STRING | Canvas text | — |
| `nodes[].cluster` | STRING | Cluster grouping + color | — |
| `nodes[].gap_score` | FLOAT | Node radius scaling | Primary gap metric |
| `nodes[].pmf_score` | FLOAT | Glow intensity (high = bright) | Alert trigger |
| `nodes[].gap_velocity` | FLOAT | Pulse animation speed | Momentum signal |
| `nodes[].source_count` | INT | Border thickness | Cross-platform reach |
| `nodes[].specificity` | STRING | Icon badge on node | Actionability |
| `nodes[].color` | HEX | Node fill | Cluster identity |
| `nodes[].x`, `nodes[].y` | FLOAT | Simulation seed position | — |
| `edges[].source` | STRING | D3 link source | — |
| `edges[].target` | STRING | D3 link target | — |
| `edges[].strength` | FLOAT | Line opacity + width | Similarity signal |
| `meta.cluster_gap_ratios` | OBJECT | Cluster header badge | Cluster-level PMF |
| `meta.top_pmf_node` | STRING | Canvas highlight on load | Alert preview |
| `meta.last_updated` | ISO8601 | Freshness indicator | — |

---

## PIPELINE STEPS

### DF-01 — Ingestion (Bright Data Web Unlocker)
**Sources:** Reddit `r/startups` `r/SaaS`, HN "Ask HN", ProductHunt comments, LinkedIn, X.com, YouTube.

```json
{
  "source": "reddit_r_startups",
  "post_id": "1fghjkl",
  "url": "https://reddit.com/r/startups/comments/1fghjkl/",
  "title": "AI agents are cool but I spent 8 hours on prompt engineering just to get it to remember context across sessions 😩",
  "body": "Anyone else hitting this wall? Need something that persists memory without paying $50/mo...",
  "timestamp": "2026-03-27T12:45:00Z",
  "upvotes": 142,
  "comments": 28
}
```

**PMF fields captured here:** `asks` (= comments), `upvotes`, `source`, `source_url`, `raw_text`, `scraped_at`

---

### DF-02 — Classification + Embedding (Agnes AI)
**Raw → classified** as `problem`/`solution`, tagged with domain, specificity, cluster, and 1536-dim embedding.

```json
{
  "id": "node-uuid-abc123",
  "type": "problem",
  "label": "AI agent memory persistence across sessions",
  "specificity": "named_tool",
  "cluster": "Validation",
  "tags": ["ai_agents", "memory", "hackathon", "context_window"],
  "embedding": [0.234, -0.567, 0.891, "...1536 dims..."],
  "source": "reddit_r_startups",
  "asks": 28,
  "upvotes": 142
}
```

**PMF fields added:** `type`, `label`, `cluster`, `specificity`, `tags`, `embedding`

---

### DF-03 — Deduplication (mem9)
**Check:** is this item already known? If `similarity_to_existing > 0.85` → merge, update `last_seen_at` and increment `asks`. Otherwise proceed.

```json
{
  "status": "unique",
  "node_id": "node-uuid-abc123",
  "similarity_to_existing": 0.12,
  "action": "proceed_to_upsert"
}
```

**PMF benefit:** prevents demand signal inflation from duplicate posts across platforms.

---

### DF-04 — Storage + Scoring (TiDB Cloud)
**Upsert + SQL insert trigger** computes `gap_score`, `urgency_weight`, and `pmf_score` atomically.

```sql
INSERT INTO nodes (id, type, label, metadata, asks, upvotes, specificity, cluster, scraped_at)
VALUES (
  'node-uuid-abc123', 'problem',
  'AI agent memory persistence across sessions',
  '{"tags":["ai_agents","memory","hackathon"]}',
  28, 142, 'named_tool', 'Validation', NOW()
)
ON DUPLICATE KEY UPDATE
  asks = asks + VALUES(asks),
  last_seen_at = NOW(),
  source_count = source_count + 1;

-- Insert trigger computes:
-- gap_score      = LOG(asks + 1) / (solution_count + 1)  → 3.367
-- urgency_weight = IF(scraped_at > NOW() - INTERVAL 7 DAY, 1.5, 1.0)  → 1.5
-- pmf_score      = gap_score × urgency_weight × LOG(source_count+1) × 1.5 (named_tool)
--               = 3.367 × 1.5 × LOG(1+1) × 1.5  → 5.24  ← alert fires
```

**Resulting row PMF fields:** `gap_score = 3.367` · `urgency_weight = 1.5` · `pmf_score = 5.24` · `specificity_multiplier = 1.5`

---

### DF-05 — Orchestration (ZenMux)
**ZenMux** triggers full graph recalc + edge recomputation pipeline. Also schedules `gap_velocity` delta job (compares current `gap_score` to value 24 hrs ago).

```json
{
  "event": "gap_recalc_triggered",
  "affected_node": "node-uuid-abc123",
  "reason": "new_problem_inserted",
  "timestamp": "2026-03-27T12:46:12Z",
  "jobs": ["recompute_edges", "update_cluster_gap_ratios", "update_gap_velocity"]
}
```

---

### DF-06 — API Exposure (`/api/graph`)
**Full PMF-enriched D3 JSON** — every node carries all fields needed for canvas rendering and filter controls.

```json
{
  "nodes": [
    {
      "id": "node-uuid-abc123",
      "type": "problem",
      "label": "AI agent memory persistence across sessions",
      "cluster": "Validation",
      "gap_score": 3.367,
      "pmf_score": 5.24,
      "gap_velocity": 0.82,
      "source_count": 1,
      "specificity": "named_tool",
      "color": "#9f7cff",
      "x": 120, "y": 340
    },
    {
      "id": "sol-xyz987",
      "type": "solution",
      "label": "LangGraph by LangChain",
      "cluster": "Build & hire",
      "gap_score": 0,
      "pmf_score": 0,
      "gap_velocity": 0,
      "source_count": 3,
      "specificity": "named_tool",
      "color": "#2dd4bf"
    }
  ],
  "edges": [
    { "source": "node-uuid-abc123", "target": "sol-xyz987", "strength": 0.4 }
  ],
  "meta": {
    "total_problems": 87,
    "total_solutions": 34,
    "cluster_gap_ratios": {
      "Validation": 0.72, "Capital": 1.0, "Growth": 0.55, "Team building": 0.31
    },
    "top_pmf_node": "node-uuid-abc123",
    "last_updated": "2026-03-27T12:46:30Z"
  }
}
```

---

### DF-07 — Alerting (Telegram Bot Father)
**Fires when** `pmf_score > 3.0` AND node matches a `watchlist` keyword.

```
🚨 NEW HIGH-GAP DETECTED

Problem: AI agent memory persistence across sessions
Gap Score:   3.37  (0 matching solutions)
PMF Score:   5.24  ← highest today
Velocity:    +0.82 (rising fast)
Specificity: named_tool ✅
Cluster:     Validation · Sources: 1

→ Explore: https://hackamap.zeabur.app/?highlight=node-uuid-abc123
```

---

### DF-08 — Canvas Rendering (D3.js v7)

```js
const { nodes, edges, meta } = await fetch('/api/graph').then(r => r.json());

// Node radius = gap_score magnitude
const rScale = d3.scaleSqrt().domain([0, 5]).range([6, 22]);

// Node glow intensity = pmf_score (CSS filter)
node.style("filter", d => `drop-shadow(0 0 ${d.pmf_score * 2}px ${d.color})`);

// Edge opacity = similarity strength
link.style("opacity", d => 0.2 + d.strength * 0.6);

// Pulse animation speed = gap_velocity
node.classed("pulse-fast", d => d.gap_velocity > 0.5);

const simulation = d3.forceSimulation(nodes)
  .force("link", d3.forceLink(edges).id(d => d.id).strength(d => d.strength))
  .force("bipartite", customBipartiteForce())   // problems left, solutions right
  .force("cluster", clusterForce(clusterCenters));
```

### DF-09 — User Interaction → PMF Exploration

```js
// Drag problem node → whitespace in empty clusters lights up
node.call(d3.drag().on("drag", (event, d) => {
  highlightEmptyClusters(d.cluster);   // shows where NO solutions exist
  showGapScore(d.gap_score, d.pmf_score, d.gap_velocity);
}));

// Gap threshold slider filters canvas in real time
slider.on("input", val => {
  node.style("opacity", d => d.gap_score >= val ? 1 : 0.1);
  link.style("opacity", d => getNode(d.source).gap_score >= val ? 0.6 : 0.05);
});

// Cluster header hover → show cluster_gap_ratio badge
clusterHeader.on("mouseover", d => {
  showTooltip(`${d.name} · Gap ratio: ${meta.cluster_gap_ratios[d.name]}`);
  highlightClusterEdges(d.name);
});
```

### DF-10 — Final Canvas State (What the Founder Sees)

| Canvas Element | Data Source | PMF Meaning |
|---|---|---|
| Node radius | `gap_score` | Bigger = more unmet demand |
| Node glow | `pmf_score` | Brighter = higher composite opportunity |
| Pulse speed | `gap_velocity` | Faster pulse = accelerating demand |
| Border thickness | `source_count` | Thicker = seen across more platforms |
| Badge icon | `specificity` | 🔧 named tool · 🏷 domain · 💬 vague |
| Edge opacity | `strength` | Fainter = weaker solution match |
| Cluster badge | `cluster_gap_ratio` | % of nodes in cluster with no solution |
| Empty whitespace | No edges from cluster | The actual opportunity |

**Full journey:** one Reddit complaint → 10-step pipeline → Gap Score 3.37 · PMF Score 5.24 · bright purple pulsing node on live D3 canvas with Telegram alert → founder drags node → whitespace lights up → billion-dollar gap found.

---

*Hackamap · Agent Forge Hackathon 2026 · $0 TCO*