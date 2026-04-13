# HackaMap import bundle (Knowgrph)

Generated from `project/prjt4000-hackamap/site/` SSOT.

## Files
- `hackamap-graph.json` (full graph: nodes + links; enriched `meta.search_text` + `meta.search_terms`)
- `hackamap_api_graph.json` (deterministic bipartite API payload used by Knowgrph `/api/graph` in dev + Pages)
- `hackamap_pipeline.json` (portable runtime pipeline config; browser-friendly)
- `hackamap_query.json` (JSON DSL preset: enhanced; supports `and/or/not` + ops `eq/contains/in/any/exists/regex`)
- `hackamap_query.<preset-id>.json` (JSON DSL preset specs; see preset catalog below)
- `hackamap_query_presets.json` (preset catalog; maps preset id → spec file + output filenames + default params)
- `hackamap_nodes.json` / `hackamap_links.json` (convenience full exports)
- `dataset-json/` (split JSON exports + manifest)
- `query-outputs/` (generated query outputs + per-table query subsets; `*.query.json` is typed/decoded JSON)

## Query preset selection (CLI)
From `project/prjt4000-hackamap`:
```bash
python3 site/hackamap_query.py --base site --list-presets
python3 site/hackamap_query.py --base site --preset sg-agents-postgres-devtools --param location=Singapore --write-query-views --write-query-json
# ad-hoc parameterized run without collisions:
python3 site/hackamap_query.py --base site --preset sg-agents-postgres-devtools --param location=Singapore --output-suffix run01 --write-query-views --write-query-json
```

## Import recommendation
1) Import `hackamap-graph.json`
2) Optionally import `query-outputs/hackamap-enhanced-query-results.md` as a curated entry doc

