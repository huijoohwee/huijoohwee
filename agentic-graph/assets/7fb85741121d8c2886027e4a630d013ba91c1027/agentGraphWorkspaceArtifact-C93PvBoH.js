import{A as h,v as f,B as A,o as _}from"./index-DfBo1kFL.js";import{bb as l,aW as p,B as $,u as S,bc as E}from"./settings-mcp-core-Ci_ZBUbK.js";import{f as T}from"./workspaceTimestamp-gdXCTS78.js";import{u as R}from"./upsertWorkspaceMarkdownSourceFile-jxShsam0.js";const m="codebase-graph",w="codebase-graph",g=2048,C=64,b=`${E}/${m}`,c=`${$}/${m}`;function O(t){return`${w}_${T(t)}.md`}function G(t){const e=Array.from(String(t??"")).filter(a=>{const r=a.charCodeAt(0);return r===9||r===10||r===13||r>=32&&r!==127}).join("");return e.length>g?`${e.slice(0,g)}…`:e}function o(t){return JSON.stringify(G(t))}function d(t){return`[${t.slice(0,C).map(a=>o(a)).join(", ")}]`}function n(t){const e=Number(t);return Number.isFinite(e)?Math.max(0,Math.floor(e)):0}function P(t){const{invocation:e,repositoryUrl:a,result:r}=t,s=r.counts;return`---
title: "Codebase graph"
document_type: "agent-graph-manifest"
kgCanvasGraphApply: false
source_remote: ${o(a)}
graph_id: ${o(r.graphId)}
snapshot_digest: ${o(r.snapshotDigest)}
parser_registry_digest: ${o(r.parserRegistryDigest)}
complete: ${r.complete===!0?"true":"false"}
source_count: ${n(s.sources)}
node_count: ${n(s.nodes)}
edge_count: ${n(s.edges)}
invocation:
  schema: ${o(e.schema)}
  tool: ${o(e.tool)}
  action: ${o(e.action)}
  semantics: ${d(e.semantics)}
  bindings: ${d(e.bindings)}
  source_revision: ${o(e.sourceRevision)}
  catalog_digest: ${o(e.catalogDigest)}
  routing_schema: ${o(e.routingSchema)}
  routing_digest: ${o(e.routingDigest)}
---

# Codebase graph

This source-backed record identifies the completed local, deterministic codebase graph import. The graph snapshot remains the canonical query surface; its edges retain their source explanations in the graph data.

- Source remote: ${o(a)}
- Graph ID: ${o(r.graphId)}
- Snapshot digest: ${o(r.snapshotDigest)}
- Parser registry digest: ${o(r.parserRegistryDigest)}
- Sources: ${n(s.sources)}
- Nodes: ${n(s.nodes)}
- Edges: ${n(s.edges)}
`}function D(t){if(t.result.kind!=="agent-graph"||t.result.complete!==!0)throw new Error("A completed canonical knowledge graph result is required before materializing its Source Files artifact.")}async function M(t,e){D(t);const a=await p(),r=Number.isFinite(e==null?void 0:e.timestampMs)?Number(e==null?void 0:e.timestampMs):Date.now(),s=await R({fs:a,parentPath:b,name:O(r),text:P(t),source:{kind:"local",originalName:null},sourcePersistence:"sync"});return await _({fs:a,createdPaths:[s],opts:{applyToGraph:!1,skipComposedGraphApply:!0}}),{path:s}}async function W(t){var u;const e=(u=t.metadata)==null?void 0:u.agentGraphProjection;if(!l(t)||!/^kg:graph:[a-f0-9]{32}$/.test(String(e==null?void 0:e.graphId))||!/^[a-f0-9]{64}$/.test(String(e==null?void 0:e.snapshotDigest)))throw new Error("A completed source projection is required");const a=JSON.stringify(t);if(new TextEncoder().encode(a).length>h)throw new Error("Native source projection exceeds its workspace budget");const r=`${String(e.graphId).slice(9)}-${e.snapshotDigest}.json`,s=await p();await f({fs:s,folderPath:c});const i=`${c}/${r}`;return await s.readFileText(i)===null&&await s.createFile({parentPath:c,name:r,text:a,mirrorToHost:!1}),i}async function F(t,e){var i;if(!t.startsWith(`${c}/`)||!/^[a-f0-9]{32}-[a-f0-9]{64}\.json$/.test(t.slice(c.length+1)))throw new Error("Invalid retained source path");const a=await(await p()).readFileText(t);if(!a||new TextEncoder().encode(a).length>h)throw new Error("Retained source projection unavailable");const r=JSON.parse(a),s=(i=r.metadata)==null?void 0:i.agentGraphProjection;if(!l(r)||s.graphId!==e.graphId||s.snapshotDigest!==e.snapshotDigest)throw new Error("Retained source identity mismatch");A({activateSource:!0}),S.getState().setGraphData(r)}export{F as a,M as m,W as r};
