import{D as m,x as _,p as $,E as S,H as E,q as R}from"./index-DhghnBz9.js";import{b3 as f,aO as u,H as w,u as C,b4 as T}from"./settings-mcp-core-C7MNwvo3.js";import{f as b}from"./workspaceTimestamp-gdXCTS78.js";import{u as P}from"./upsertWorkspaceMarkdownSourceFile-6UwtvDmo.js";const A="codebase-graph",G="codebase-graph",g=2048,O=64,k=`${T}/${A}`,p=`${w}/${A}`;function D(t){return`${G}_${b(t)}.md`}function N(t){const e=Array.from(String(t??"")).filter(a=>{const o=a.charCodeAt(0);return o===9||o===10||o===13||o>=32&&o!==127}).join("");return e.length>g?`${e.slice(0,g)}…`:e}function s(t){return JSON.stringify(N(t))}function l(t){return`[${t.slice(0,O).map(a=>s(a)).join(", ")}]`}function i(t){const e=Number(t);return Number.isFinite(e)?Math.max(0,Math.floor(e)):0}function y(t,e){var c,d,h;const{invocation:a,repositoryUrl:o,result:r}=t,n=r.counts;return`---
title: "Codebase graph"
document_type: "agent-graph-manifest"
kgCanvasGraphApply: false
${e!=null&&e.projectionPath?`source_projection: ${s(e.projectionPath)}
kgCanvasRenderMode: 2d
kgCanvas2dRenderer: d3
`:""}source_remote: ${s(o)}
source_commit: ${s(((c=r.acquisition)==null?void 0:c.commitSha)||"unavailable")}
source_subpath: ${s(((d=r.acquisition)==null?void 0:d.subpath)||"")}
graph_id: ${s(r.graphId)}
snapshot_digest: ${s(r.snapshotDigest)}
parser_registry_digest: ${s(r.parserRegistryDigest)}
complete: ${r.complete===!0?"true":"false"}
source_count: ${i(n.sources)}
node_count: ${i(n.nodes)}
edge_count: ${i(n.edges)}
invocation:
  schema: ${s(a.schema)}
  tool: ${s(a.tool)}
  action: ${s(a.action)}
  semantics: ${l(a.semantics)}
  bindings: ${l(a.bindings)}
  source_revision: ${s(a.sourceRevision)}
  catalog_digest: ${s(a.catalogDigest)}
  routing_schema: ${s(a.routingSchema)}
  routing_digest: ${s(a.routingDigest)}
---

# Codebase graph

This source-backed record identifies the completed local, deterministic codebase graph import. The graph snapshot remains the canonical query surface; its edges retain their source explanations in the graph data.

- Source remote: ${s(o)}
- Acquisition commit: ${s(((h=r.acquisition)==null?void 0:h.commitSha)||"unavailable for local files or older imports")}
- Graph ID: ${s(r.graphId)}
- Snapshot digest: ${s(r.snapshotDigest)}
- Parser registry digest: ${s(r.parserRegistryDigest)}
- Sources: ${i(n.sources)}
- Nodes: ${i(n.nodes)}
- Edges: ${i(n.edges)}
`}function I(t){if(t.result.kind!=="agent-graph"||t.result.complete!==!0)throw new Error("A completed canonical knowledge graph result is required before materializing its Source Files artifact.")}async function H(t,e){I(t);const a=await u(),o=Number.isFinite(e==null?void 0:e.timestampMs)?Number(e==null?void 0:e.timestampMs):Date.now(),r=await j(E(t.result)),n=await P({fs:a,parentPath:k,name:D(o),text:y(t,{projectionPath:r}),source:{kind:"local",originalName:null},sourcePersistence:"sync"});return await R({fs:a,createdPaths:[n],opts:{applyToGraph:!1,skipComposedGraphApply:!0}}),{path:n}}async function j(t){var c;const e=(c=t.metadata)==null?void 0:c.agentGraphProjection;if(!f(t)||!/^kg:graph:[a-f0-9]{32}$/.test(String(e==null?void 0:e.graphId))||!/^[a-f0-9]{64}$/.test(String(e==null?void 0:e.snapshotDigest)))throw new Error("A completed source projection is required");const a=JSON.stringify(t);if(new TextEncoder().encode(a).length>m)throw new Error("Native source projection exceeds its workspace budget");const o=`${String(e.graphId).slice(9)}-${e.snapshotDigest}.json`,r=await u();await _({fs:r,folderPath:p});const n=`${p}/${o}`;return await r.readFileText(n)===null&&await r.createFile({parentPath:p,name:o,text:a,mirrorToHost:!1}),n}async function M(t,e){var n;if(!t.startsWith(`${p}/`)||!/^[a-f0-9]{32}-[a-f0-9]{64}\.json$/.test(t.slice(p.length+1)))throw new Error("Invalid retained source path");const a=await(await u()).readFileText(t);if(!a||new TextEncoder().encode(a).length>m)throw new Error("Retained source projection unavailable");const o=JSON.parse(a),r=(n=o.metadata)==null?void 0:n.agentGraphProjection;if(!f(o)||r.graphId!==e.graphId||r.snapshotDigest!==e.snapshotDigest)throw new Error("Retained source identity mismatch");return{...o,nodes:o.nodes.map(S)}}async function q(t,e){const a=await M(t,e);$({activateSource:!0}),C.getState().setGraphData(a)}export{j as a,q as b,y as c,H as m,M as r};
