# hackamap-d3

This document defines the **HackaMap D3 knowledge graph**: how to derive nodes + edges from the HackaMap `*.md` tables and how to render them in a browser.

If you just want to view the graph:

- Open `hackamap.html` (same folder as the HackaMap markdown tables).

If you want a precomputed JSON export:

- Run `export_hackamap_graph.py` to generate `hackamap-graph.json`.

---

## Inputs (authoritative)

The graph is derived from these files (see `hackamap-ssot.md` for schema contracts):

- `events.md` (canonical)
- `demos.md` (canonical)
- `sources.md` (derived; URL normalization + domains)
- `organizer.md` (derived; organizer normalization + optional URL/type enrichment)
- `team.md` (derived; team normalization + optional URL/type enrichment)
- `techstack.md` (derived; tech normalization + TCO/FOSS tagging + optional license/vendor enrichment)

### Shared cell conventions (must hold for correct parsing)

- Arrays are stored as JSON arrays in backticks, e.g. `` `["A","B"]` ``.
- Null/unknown values are stored as `—` (and are not rendered as nodes).
- Cells never contain raw `|` characters (table safety).

---

## Node schema

All nodes are emitted in the following shape:

```json
{
  "id": "Type:stable-key",
  "type": "Event|Demo|Organizer|Team|Tech|Location|Audience|Source|PainPoint|Product",
  "label": "Human-readable label",
  "meta": { "any": "additional metadata" }
}
```

### Node ID rules (deduplication)

- **Canonical entities** use their primary keys:
  - Event node id: `Event:evt-123`
  - Demo node id: `Demo:demo-456`
- **Label-based entities** dedupe by `(type, label)`:
  - Tech node id: `Tech:LangChain`
  - Organizer node id: `Organizer:NUS Hackers`
  - Team node id: `Team:Acacia AI Society`
  - Location node id: `Location:Singapore`
  - Audience node id: `Audience:students`
  - Product node id: `Product:demo videos`
- **Prose entities** (pain points) are anchored to the demo id to avoid exploding dedup across unrelated demos:
  - Pain Point node id: `PainPoint:demo-123`

---

## Edge schema

```json
{
  "source": "node-id",
  "target": "node-id",
  "type": "edge-label"
}
```

### Edge types (current)

| Edge label | Source node | Target node | Trigger (from tables) |
|---|---|---|---|
| `has_demo` | Event | Demo | `demo.event_id === event.id` |
| `organized_by` | Event | Organizer | `Organizer in event.Organizer[]` |
| `focuses_on` | Event | Tech | `Tech in event.Tech Focus[]` |
| `held_at` | Event | Location | `event.Location` |
| `targets` | Event | Audience | `Eligibility in event.Eligibility[]` |
| `uses` | Demo | Tech | `Tech in demo.Tech Stack[]` |
| `built_by` | Demo | Team | `Team in demo.Team[]` |
| `addresses` | Demo | Pain Point | `demo.Pain Point` |
| `produces` | Demo | Product | `Product in demo.Product[]` |
| `sourced_from` | Event/Demo | Source | `URL in event.URL[]` OR `URL in demo.Demo URL / Repo URL / Video URL` |

---

## Implementation notes

### Browser build (live from markdown)

`hackamap.html` fetches `events.md`, `demos.md`, `sources.md`, `organizer.md`, `team.md`, `techstack.md`, parses their first markdown pipe-tables, and builds the graph in-browser.

This keeps the graph “wired” to the markdown SSOT: changes to `*.md` are reflected on reload.

### JSON export (optional)

`export_hackamap_graph.py` produces a precomputed JSON graph:

- Output: `hackamap-graph.json`
- Content: `{ nodes: [...], links: [...] }`

The HTML page will **prefer** `hackamap-graph.json` if it exists (faster load), and fall back to parsing markdown if it does not.

---

## How to run the export

From the repo root (or any working dir), run:

```bash
python3 content/hackamap/export_hackamap_graph.py \
  --base content/hackamap \
  --out content/hackamap/hackamap-graph.json
```

---

## Troubleshooting

- **Blank graph**: ensure the markdown files are on the same origin/path as `hackamap.html` (e.g., GitHub Pages deployment).
- **Parsing errors**: validate that each markdown file’s first pipe-table matches the SSOT header contract.
- **Too many nodes**: use the type filters and search box in the HTML UI to narrow focus.
