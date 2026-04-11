# HackaMap import bundle (Knowgrph)

Generated from `project/prjt4000-hackamap/site/` SSOT.

## Files
- `hackamap-graph.json` (full graph: nodes + links; enriched `meta.search_text`)
- `hackamap_query.json` (JSON DSL query spec; AgentQL-like shape)
- `hackamap_nodes.json` / `hackamap_links.json` (convenience full exports)
- `dataset-json/` (split JSON exports + manifest)
- `query-outputs/` (generated query outputs + per-table query subsets)

## Import recommendation
1) Import `hackamap-graph.json`
2) Optionally import `query-outputs/hackamap-enhanced-query-results.md` as a curated entry doc

