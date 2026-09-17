import{D as f,x as $,p as R,E as A,q as S}from"./index-BbXAd7ey.js";import{b5 as _,aQ as d,b6 as E,u as C,r as T,b7 as b}from"./settings-mcp-core-cga6L-Cs.js";import{f as k}from"./workspaceTimestamp-gdXCTS78.js";import{u as w}from"./upsertWorkspaceMarkdownSourceFile-BFZMk_qK.js";const D="codebase-graph",y="codebase-graph",h=2048,I=64,G=`${b}/${D}`,u=E;function P(t){return`${y}_${k(t)}.md`}function j(t){const e=Array.from(String(t??"")).filter(a=>{const r=a.charCodeAt(0);return r===9||r===10||r===13||r>=32&&r!==127}).join("");return e.length>h?`${e.slice(0,h)}…`:e}function s(t){return JSON.stringify(j(t))}function m(t){return`[${t.slice(0,I).map(a=>s(a)).join(", ")}]`}function c(t){const e=Number(t);return Number.isFinite(e)?Math.max(0,Math.floor(e)):0}function O(t,e){var p,l,g;const{invocation:a,result:r}=t,n=t.source||{kind:"repository-url",url:t.repositoryUrl},o=n.kind==="repository-url"?n.url:"Local folder",i=r.counts;return`---
title: "Codebase graph"
document_type: "agent-graph-manifest"
kgCanvasGraphApply: false
${e!=null&&e.projectionPath?`source_projection: ${s(e.projectionPath)}
kgCanvasRenderMode: 2d
kgCanvas2dRenderer: d3
`:""}source_kind: ${s(n.kind)}
${n.kind==="repository-url"?`source_remote: ${s(n.url)}`:"source_remote: null"}
source_commit: ${s(((p=r.acquisition)==null?void 0:p.commitSha)||"unavailable")}
source_subpath: ${s(((l=r.acquisition)==null?void 0:l.subpath)||"")}
graph_id: ${s(r.graphId)}
snapshot_digest: ${s(r.snapshotDigest)}
parser_registry_digest: ${s(r.parserRegistryDigest)}
complete: ${r.complete===!0?"true":"false"}
source_count: ${c(i.sources)}
node_count: ${c(i.nodes)}
edge_count: ${c(i.edges)}
invocation:
  schema: ${s(a.schema)}
  tool: ${s(a.tool)}
  action: ${s(a.action)}
  semantics: ${m(a.semantics)}
  bindings: ${m(a.bindings)}
  source_revision: ${s(a.sourceRevision)}
  catalog_digest: ${s(a.catalogDigest)}
  routing_schema: ${s(a.routingSchema)}
  routing_digest: ${s(a.routingDigest)}
---

# Codebase graph

This source-backed record identifies the completed local, deterministic codebase graph import. The graph snapshot remains the canonical query surface; its edges retain their source explanations in the graph data.

- Source: ${s(o)}
- Acquisition commit: ${s(((g=r.acquisition)==null?void 0:g.commitSha)||"unavailable for local files or older imports")}
- Graph ID: ${s(r.graphId)}
- Snapshot digest: ${s(r.snapshotDigest)}
- Parser registry digest: ${s(r.parserRegistryDigest)}
- Sources: ${c(i.sources)}
- Nodes: ${c(i.nodes)}
- Edges: ${c(i.edges)}
`}function N(t){if(!t.source&&!t.repositoryUrl||t.result.kind!=="agent-graph"||t.result.complete!==!0)throw new Error("A completed canonical knowledge graph result is required before materializing its Source Files artifact.")}async function x(t,e){N(t);const a=await d(),r=Number.isFinite(e==null?void 0:e.timestampMs)?Number(e==null?void 0:e.timestampMs):Date.now(),n=await v(A(t.result)),o=await w({fs:a,parentPath:G,name:P(r),text:O(t,{projectionPath:n}),source:{kind:"local",originalName:null},sourcePersistence:"sync"});return await S({fs:a,createdPaths:[o],opts:{applyToGraph:!1,skipComposedGraphApply:!0}}),{path:o}}async function v(t){var i;const e=(i=t.metadata)==null?void 0:i.agentGraphProjection;if(!_(t)||!/^kg:graph:[a-f0-9]{32}$/.test(String(e==null?void 0:e.graphId))||!/^[a-f0-9]{64}$/.test(String(e==null?void 0:e.snapshotDigest)))throw new Error("A completed source projection is required");const a=JSON.stringify(t);if(new TextEncoder().encode(a).length>f)throw new Error("Native source projection exceeds its workspace budget");const r=`${String(e.graphId).slice(9)}-${e.snapshotDigest}.json`,n=await d();await $({fs:n,folderPath:u});const o=`${u}/${r}`;return await n.readFileText(o)===null&&await n.createFile({parentPath:u,name:r,text:a,mirrorToHost:!1}),o}async function M(t,e){var p;const a=T(t);if(!a||a.graphId!==e.graphId||a.snapshotDigest!==e.snapshotDigest)throw new Error("Invalid retained source path");const r=await(await d()).readFileText(t);if(!r||new TextEncoder().encode(r).length>f)throw new Error("Retained source projection unavailable");const n=JSON.parse(r),o=(p=n.metadata)==null?void 0:p.agentGraphProjection;if(!_(n)||o.graphId!==e.graphId||o.snapshotDigest!==e.snapshotDigest)throw new Error("Retained source identity mismatch");return A({handled:!0,kind:"agent-graph",graphId:e.graphId,snapshotDigest:e.snapshotDigest,parserRegistryDigest:o.parserRegistryDigest,complete:o.complete,...o.acquisition?{acquisition:o.acquisition}:{},counts:o.counts,projection:{token:o.projectionToken,readOnly:!0,complete:o.projectionComplete,truncated:o.projectionTruncated,limit:o.projectionLimit,...o.projectionReason?{reason:o.projectionReason}:{},graphData:n}})}async function Y(t,e){const a=await M(t,e);R({activateSource:!0}),C.getState().setGraphData(a)}export{v as a,Y as b,O as c,x as m,M as r};
