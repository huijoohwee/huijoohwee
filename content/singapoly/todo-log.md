# todo-log

- **Canonical directive**: **STRICTLY COMPLY** with one-row-one-directive (Max 50 words)
- **Table cells**: MUST fill-up all cells in the table; FORBID empty/`-` cells.

## 2026-04-02

| Context | Intent | Directive | Module | Class/Object | Function/Method | Input | Output | Decision Logic | Next Step Recommendation | Updated Date |
|--------|--------|-----------|--------|-----------------|-------|--------|----------------|--------------------------|--------------------------|--------------|
| Game Development & Deployment | Refactor Singapoly engine, deploy to Cloudflare Pages, generate promo video, and document best practices | Separate 3D game logic from data using `scene.json` and `singapoly.json`, deploy to Cloudflare Pages with `_redirects`, generate 15s MP4 using Remotion and Python audio synthesis, and document process in SHOWCASE.md. | `content/singapoly/{singapoly.html,scene.json,singapoly.json,SHOWCASE.md,_redirects,demo/}` | `Three.js` Engine, `Remotion` Video, Cloudflare Config | `Promise.all` Fetching, Procedural 3D InstancedMesh, Audio Synthesis | Hardcoded HTML variables, monopoly.json | Fully data-driven HTML, scene config JSON, Cloudflare routing rules, 15s MP4 video | Abstract variables to `scene.json` for generic 3D board engine capability, utilize `_redirects` for clean URLs, and use `yt-dlp` + python for custom BGM. | Commit and push all changes to the repository to trigger the Cloudflare Pages deployment and verify the live URL. | 2026-04-02 |
| ...


## 2026-04-01

| Context | Intent | Directive | Module | Class/Object | Function/Method | Input | Output | Decision Logic | Next Step Recommendation | Updated Date |
|--------|--------|-----------|--------|-----------------|-------|--------|----------------|--------------------------|--------------------------|--------------|
| Geospatial 3D / Cesium Removal + MapLibre Globe | Replace Cesium 3D with MapLibre Globe, remove all Cesium assets and config, and harden 3D init camera centering anti-churn | Update cross-repo docs to document Cesium removal, MapLibre Globe as the sole 3D renderer, deterministic single-shot 3D init camera (Singapore center, zoom 2.8, pitch/bearing 0, padding 0, with one RAF follow-up), passive auto-fit disabled in 3D mode, shared coalesced scheduler routing for workspace FS/persistence/UI, and forbid iterative zoom solvers, repeated jumpTo calls, multi-step recalc loops, or passive fit overrides at 3D startup. | `knowgrph/docs/documents/{knowgrph-geospatial-mode-document.md,knowgrph-renderer-document.md}`, `huijoohwee.github.io/schema/AgenticRAG/{geospatial.jsonld,canvas.jsonld,README.md}`, `knowgrph/todo-log.md` | Cross-repo Geospatial 3D + state-sync docs | GeospatialHost + useMapLibreBasemap + workspaceSyncScheduler + SourceFilesPersistenceBootstrap + MarkdownWorkspaceRuntime + useGraphStore | Cesium dependency + geospatialViewMode=3d + rapid workspace switch + shared scheduler keys | MapLibre Globe 3D overlay centered at Singapore, zero-churn init, deduped runtime+persistence subscriptions | Remove cesium dep and config; use deterministic single-shot camera; disable passive auto-fit in 3D; route workspace FS/persistence/UI through shared coalesced scheduler; forbid iterative/loop paths at 3D init. | Run `npm -C knowgrph/canvas run doc:lint`, `npm -C knowgrph/canvas run doc:sanity`, and `python3 huijoohwee.github.io/schema/AgenticRAG/sync_map.py --mode check`. | 2026-04-02 |
