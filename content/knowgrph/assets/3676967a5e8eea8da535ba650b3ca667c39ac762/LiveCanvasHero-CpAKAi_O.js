import{R as c,j as n}from"./react-gVJCSEhj.js";import{M as j,b as O,c as L}from"./MarkdownInlineTextEditSurface-IJ1qrJgl.js";import{di as R,a9 as H,a8 as M,u as K,dj as F}from"./settings-mcp-docs-BP6JjNXA.js";import{A as f,G as h,c as w,V as D,d as g,p as q,s as V,e as G,f as B}from"./chatInvocationRegistry-NdtM_Tjz.js";import{C as $,i as z,r as Q}from"./CanvasEmbedImportPanel-CPHT8hzo.js";import{s as W}from"./liveCanvasHeroEmbed-CHddyoT6.js";import{s as U}from"./CanvasViewport-Dj0Gwa3p.js";import{bG as X}from"./index-CnzXtfh-.js";import{aX as Y,ak as J,aY as Z}from"./ui-BQoZ550S.js";import"./svgSnapshot-CByfTPlu.js";import"./cardMarkdownPreviewUtils-B3I9bgAo.js";import"./agenticOsDocInvocations-DrqzeUn2.js";import"./settings-grabmapsMcpApiDocs-Br3EoCPY.js";import"./mermaid-CiCvLyb1.js";import"./d3-W0BRPxKc.js";import"./settings-apiNativeBrowserMcpApiDocs-B1e76jhP.js";import"./settings-vdeoxplnMcpApiDocs-BNWsVAhM.js";import"./settings-crawlerAccessMcpApiDocs-BYHag7Pg.js";import"./settings-cloudflareAiGatewayMcpApiDocs-DLcjFJml.js";import"./settings-openaiMcpApiDocs-BZR0TKg3.js";import"./settings-exaMcpApiDocs-9Vfcd-PQ.js";import"./settings-feishuBaseMcpApiDocs-BChfvyfX.js";import"./settings-larkAppMcpApiDocs-BC1cXghi.js";import"./settings-stripeMcpApiDocs-Bo9f5jtJ.js";import"./settings-miromindMcpApiDocs-Bw3m4eBg.js";import"./settings-operatorDeployMcpApiDocs-Ab5FzCMH.js";import"./CanvasEmbedPanelShell-LSj3oKwK.js";import"./useActiveGraphRenderData.impl-DASsMTZZ.js";import"./forbidBrowserZoom-Cs4ebhEB.js";import"./HighlightedCode-BR_xDp9y.js";import"./highlightjs-DNjUSkhs.js";import"./canvasEmbedCodePanelEvent-m0ojjNct.js";import"./markdown-it-CqrcgIMp.js";const ee=["视频","video","分镜","逐镜","剧本","script","旁白","audio","shot"],ae=a=>{var t;const e=((t=a.source)==null?void 0:t.kind)==="local"?String(a.source.path||""):"";return e.startsWith("workspace:")?e.slice(10):e||`/${a.name}`};function ne(a){return(a||[]).filter(e=>e.enabled!==!1&&/\.md$/i.test(e.name)).map(e=>({name:e.name,workspacePath:ae(e),score:ee.reduce((t,r)=>t+(`${e.name}
${String(e.text||"").slice(0,8e3)}`.toLowerCase().includes(r)?1:0),0)})).filter(e=>e.score>0).sort((e,t)=>t.score-e.score||e.workspacePath.localeCompare(t.workspacePath))[0]||null}function te(a){const e=ne(a),t=e?`[${e.name}](workspace:${encodeURI(e.workspacePath)})`:"";return{source:e,query:[f,h[0].token,...g.map(r=>r.token),w[0].token,D,t,"Generate an end-to-end agentic video canvas from the referenced script. Produce Chinese, Cantonese, and English audio variants with synchronized Chinese/English bilingual subtitles. Persist typed text, image, audio, and video artifacts for playable Cards, Widgets, Rich Media Panels, and BottomPanel Timeline video/FBF/audio lanes. Stop at approval or a missing provider capability."].filter(Boolean).join(" ")}}[f,...h.map(a=>a.token),...w.map(a=>a.token),...g.map(a=>a.token)];[f,h[0].token,...g.map(a=>a.token),w[0].token];function re(a={}){var t,r;const e=te(a.sourceFiles);return{status:"ready",defaultQuery:e.query,sourceLabel:((t=e.source)==null?void 0:t.name)||null,sourceWorkspacePath:((r=e.source)==null?void 0:r.workspacePath)||null,invocations:[{token:f,group:"Route",label:"Video agent",summary:"Agentic video route.",sourcePath:"canvas/src/features/chat/generationInvocation.ts",keywords:["video","agent"]},...h.map(s=>({...s,group:"Provider",sourcePath:"canvas/src/features/chat/generationInvocation.ts",keywords:["provider"]})),...w.map(s=>({...s,group:"Specification",sourcePath:"canvas/src/features/chat/generationInvocation.ts",keywords:["specification"]})),...g.map(s=>({...s,group:"Outputs",sourcePath:"canvas/src/features/chat/generationInvocation.ts",keywords:["output"]}))]}}const A=(a,e)=>R(a).some(t=>t.kind==="token"&&t.value.toLowerCase()===e.toLowerCase()),oe=(a,e)=>A(a,e)?a.trim():[a.trim(),e].filter(Boolean).join(" "),d={eyebrow:"Knowgrph · Live canvas",headline:["Map intent.","Orchestrate agents.","Prove outcomes."],lede:"A source-backed canvas where `/` routes work, `#` sets meaning, and `@` binds context.",posture:["0 model calls before Run","Frontmatter SSOT","Approval-gated"],markdown:""};function x(a){return String(a||"").trim()}function se(a){if(!Array.isArray(a))return[...d.headline];const e=a.map(t=>x(t)).filter(Boolean).slice(0,3);return e.length!==3?[...d.headline]:[e[0],e[1],e[2]]}function ie(a){if(!Array.isArray(a))return d.posture;const e=a.map(t=>x(t)).filter(Boolean);return e.length>0?e:d.posture}function ce(){if(`---
schema: kgc-live-canvas-hero/v1
id: knowgrph-live-canvas-hero
version: 1.0.0
status: implemented
created: 2026-07-11
updated: 2026-07-21
author: airvio / joohwee
domain: knowgrph
tags: [agent-ready, live-canvas, hero, discovery]
title: Knowgrph · Live canvas
eyebrow: Knowgrph · Live canvas
headline:
  - Map intent.
  - Orchestrate agents.
  - Prove outcomes.
lede: A source-backed canvas where \`/\` routes work, \`#\` sets meaning, and \`@\` binds context.
posture:
  - 0 model calls before Run
  - Frontmatter SSOT
  - Approval-gated
enter_href: /knowgrph/
markdown_route: /knowgrph-live-canvas-hero.md
frontmatter_contract: required
---

# Knowgrph

## Live Canvas Hero

Map intent. Orchestrate agents. Prove outcomes.

A source-backed canvas where \`/\` routes work, \`#\` sets meaning, and \`@\` binds context.

## Agentic Grammar

- \`/\` routes intent
- \`#\` sets meaning
- \`@\` binds context

The Home command deck is **Agentic Video Canvas**. Its editable query is the SSOT: \`/video-agent\` selects the route, \`@provider.byteplus|@provider.openai\` selects the provider, \`@text|@image|@audio|@video\` selects outputs, and \`#spec.low|#spec.medium|#spec.high\` selects the specification. BytePlus and Low are defaults; the visual controls only edit these tokens.

## Actions

- [Enter Knowgrph](/knowgrph/)
- [Read this discovery markdown](/knowgrph-live-canvas-hero.md)
- [Inspect the agent-ready homepage](/)

## Execution Posture

- 0 model calls before Run
- Frontmatter SSOT
- Approval-gated

## Discovery Notes

- The React Live Canvas Hero reads its eyebrow, headline, lede, and posture labels from this document.
- The apex Home hero retains viewport ownership during persisted workspace document bootstrap; the switching-document placeholder remains exclusive to \`/knowgrph\` workspace routes.
- The default shared background resolves the published Physics Playground path owned by \`XR_PHYSICS_DEMO_PUBLISHED_CANONICAL_PATH\`; its opaque share token is derived from that active canonical D1 path. The source frontmatter owns XR/3D renderer initialization, so Home does not pin a competing renderer query. MainPanel Settings → Canvas Embed exposes the same default as **Use Physics Playground background**.
- Production JavaScript, CSS, and generated assets are emitted under the exact 40-character Knowgrph source revision. A new protected release therefore uses a new asset namespace and cannot reuse an HTML-poisoned browser cache entry from an older deployment.
- Public discovery should advertise this route as the compact Markdown entry point for agent-first landing context.
`.trim())return`---
schema: kgc-live-canvas-hero/v1
id: knowgrph-live-canvas-hero
version: 1.0.0
status: implemented
created: 2026-07-11
updated: 2026-07-21
author: airvio / joohwee
domain: knowgrph
tags: [agent-ready, live-canvas, hero, discovery]
title: Knowgrph · Live canvas
eyebrow: Knowgrph · Live canvas
headline:
  - Map intent.
  - Orchestrate agents.
  - Prove outcomes.
lede: A source-backed canvas where \`/\` routes work, \`#\` sets meaning, and \`@\` binds context.
posture:
  - 0 model calls before Run
  - Frontmatter SSOT
  - Approval-gated
enter_href: /knowgrph/
markdown_route: /knowgrph-live-canvas-hero.md
frontmatter_contract: required
---

# Knowgrph

## Live Canvas Hero

Map intent. Orchestrate agents. Prove outcomes.

A source-backed canvas where \`/\` routes work, \`#\` sets meaning, and \`@\` binds context.

## Agentic Grammar

- \`/\` routes intent
- \`#\` sets meaning
- \`@\` binds context

The Home command deck is **Agentic Video Canvas**. Its editable query is the SSOT: \`/video-agent\` selects the route, \`@provider.byteplus|@provider.openai\` selects the provider, \`@text|@image|@audio|@video\` selects outputs, and \`#spec.low|#spec.medium|#spec.high\` selects the specification. BytePlus and Low are defaults; the visual controls only edit these tokens.

## Actions

- [Enter Knowgrph](/knowgrph/)
- [Read this discovery markdown](/knowgrph-live-canvas-hero.md)
- [Inspect the agent-ready homepage](/)

## Execution Posture

- 0 model calls before Run
- Frontmatter SSOT
- Approval-gated

## Discovery Notes

- The React Live Canvas Hero reads its eyebrow, headline, lede, and posture labels from this document.
- The apex Home hero retains viewport ownership during persisted workspace document bootstrap; the switching-document placeholder remains exclusive to \`/knowgrph\` workspace routes.
- The default shared background resolves the published Physics Playground path owned by \`XR_PHYSICS_DEMO_PUBLISHED_CANONICAL_PATH\`; its opaque share token is derived from that active canonical D1 path. The source frontmatter owns XR/3D renderer initialization, so Home does not pin a competing renderer query. MainPanel Settings → Canvas Embed exposes the same default as **Use Physics Playground background**.
- Production JavaScript, CSS, and generated assets are emitted under the exact 40-character Knowgrph source revision. A new protected release therefore uses a new asset namespace and cannot reuse an HTML-poisoned browser cache entry from an older deployment.
- Public discovery should advertise this route as the compact Markdown entry point for agent-first landing context.
`;const a=globalThis.__KNOWGRPH_LIVE_CANVAS_HERO_MARKDOWN__;return typeof a=="string"?a:""}function le(a){const e=String(a||"").trim();if(!e)return d;const r=H(M(e)).meta,s=x(r.eyebrow)||d.eyebrow,l=se(r.headline),b=x(r.lede)||d.lede,u=ie(r.posture);return{eyebrow:s,headline:l,lede:b,posture:u,markdown:e}}function de(){return le(ce())}function me(a){const e=c.useRef(null),t=c.useRef(null);return n.jsx("section",{className:"relative mt-2 min-h-16 overflow-hidden rounded-xl border border-[color:var(--kg-border)] bg-[color-mix(in_srgb,var(--kg-code-bg)_88%,transparent)]",onKeyDownCapture:r=>{var s,l;(r.metaKey||r.ctrlKey)&&r.key==="Enter"&&((l=(s=e.current)==null?void 0:s.closest("form"))==null||l.requestSubmit())},children:n.jsx(j,{value:a.value,ariaLabel:"Agentic Video Canvas",placeholder:"Describe the agentic video workflow",className:"min-h-16 bg-transparent px-3 py-2.5 font-mono text-xs leading-5 text-[var(--kg-code-text)] outline-none",commandMode:null,editorRef:e,inputProxyRef:t,inlineChipDensity:"compact",multiline:!0,projectedMediaAttachments:null,isCommandMenuTarget:()=>!1,onCancel:()=>{},onCommit:()=>{},onDraftChange:a.onChange,onFocus:()=>{},onOpenCommandMenuForSigilAtSelection:()=>{},readCommandSigilFromKeyEvent:()=>null,readCommandSigilFromInsertedText:()=>null,cardInlineEditInputAttribute:"data-kg-live-canvas-hero-query"})})}const S="inline-flex min-h-10 min-w-10 shrink-0 items-center justify-center rounded-lg border border-[color:var(--kg-border)] bg-[color-mix(in_srgb,var(--kg-panel-bg)_72%,transparent)] p-2.5 text-[var(--kg-text-primary)] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kg-canvas-accent)] disabled:cursor-wait disabled:opacity-60";function ue(a){return a.split(/(`[^`]+`)/g).map((e,t)=>e.startsWith("`")&&e.endsWith("`")?n.jsx("span",{className:"font-mono text-[var(--kg-text-primary)]",children:e.slice(1,-1)},`${e}:${t}`):n.jsx(c.Fragment,{children:e},`${e}:${t}`))}function pe(a){const{model:e}=a,t=c.useMemo(de,[]),[r,s]=c.useState(e.defaultQuery),l=c.useRef(e.defaultQuery),[b,u]=c.useState(""),[P,_]=c.useState(!1),y=c.useMemo(()=>q(r),[r]),C=(y==null?void 0:y.kinds)||[];c.useEffect(()=>{const i=l.current;l.current=e.defaultQuery,s(o=>o===i?e.defaultQuery:o)},[e.defaultQuery]),c.useEffect(()=>{const i=o=>{if(!z(o))return;const p=Q(o.data);p&&W(p)};return window.addEventListener("message",i),()=>window.removeEventListener("message",i)},[]);const E=i=>{i.preventDefault();const o=F(r.trim());if(!o){u("Enter an agent-ready query before running the canvas.");return}if(u(""),!U(o)){u("The canvas Chat surface is not ready. Keep the query here and try again.");return}};return n.jsxs("section",{className:"pointer-events-none absolute inset-0 z-[40] overflow-hidden text-[var(--kg-text-primary)]","aria-labelledby":"knowgrph-live-canvas-hero-title","data-kg-live-canvas-hero":"true","data-kg-live-canvas-hero-state":"ready","data-kg-live-canvas-hero-layout":"overlay-on-canvas",children:[n.jsx("section",{className:"absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,color-mix(in_srgb,var(--kg-canvas-bg)_14%,transparent)_25%,color-mix(in_srgb,var(--kg-canvas-bg)_92%,transparent)_56%,var(--kg-canvas-bg)_100%)] md:hidden","aria-hidden":"true"}),n.jsx("section",{className:"absolute inset-0 hidden bg-[linear-gradient(90deg,color-mix(in_srgb,var(--kg-canvas-bg)_96%,transparent)_0%,color-mix(in_srgb,var(--kg-canvas-bg)_82%,transparent)_34%,color-mix(in_srgb,var(--kg-canvas-bg)_16%,transparent)_60%,transparent_72%)] md:block","aria-hidden":"true"}),n.jsx("section",{className:"absolute -left-48 bottom-[-18rem] h-[38rem] w-[38rem] rounded-full bg-[color-mix(in_srgb,var(--kg-canvas-accent)_10%,transparent)] blur-3xl md:bottom-auto md:top-1/2 md:h-[46rem] md:w-[46rem] md:-translate-y-1/2","aria-hidden":"true"}),n.jsxs("article",{className:"pointer-events-auto absolute bottom-[calc(var(--kg-safe-bottom,0px)+var(--kg-canvas-viewport-edge-gap,12px)+var(--kg-toolbar-compact-surface-height,38px)+12px)] left-4 right-4 flex max-h-[calc(100dvh-var(--kg-main-toolbar-height,38px)-var(--kg-toolbar-compact-surface-height,38px)-4rem)] flex-col overflow-y-auto pr-1 md:bottom-auto md:left-8 md:right-auto md:top-1/2 md:w-[min(34rem,calc(100%-4rem))] md:max-h-[calc(100dvh-var(--kg-main-toolbar-height,38px)-2.5rem)] md:-translate-y-1/2 lg:left-12 lg:w-[34rem]","data-kg-live-canvas-hero-editorial":"overlay",children:[n.jsxs("p",{className:"flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--kg-text-secondary)]",children:[n.jsx("span",{className:"h-2 w-2 rounded-full bg-[var(--kg-canvas-accent)] shadow-[0_0_18px_var(--kg-canvas-accent)]","aria-hidden":"true"}),t.eyebrow]}),n.jsxs("h1",{id:"knowgrph-live-canvas-hero-title",className:"mt-3 text-balance text-3xl font-semibold leading-[1.02] tracking-[-0.045em] md:mt-4 md:text-5xl lg:text-[3.5rem]",children:[n.jsx("span",{className:"block",children:t.headline[0]}),n.jsx("span",{className:"block",children:t.headline[1]}),n.jsx("span",{className:"block text-[var(--kg-canvas-accent)]",children:t.headline[2]})]}),n.jsx("p",{className:"mt-4 max-w-[34rem] text-sm leading-6 text-[var(--kg-text-secondary)] sm:text-base",children:ue(t.lede)}),n.jsxs("form",{className:"mt-4 rounded-2xl border border-[color:var(--kg-border)] bg-[color-mix(in_srgb,var(--kg-panel-bg)_72%,transparent)] p-3 shadow-[0_18px_64px_color-mix(in_srgb,var(--kg-canvas-bg)_72%,transparent)] backdrop-blur-xl md:mt-6 md:p-4",onSubmit:E,"data-kg-live-canvas-hero-command-deck":"true",children:[n.jsx("label",{className:"text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--kg-text-secondary)]",htmlFor:"knowgrph-live-canvas-hero-query",children:"Agentic Video Canvas"}),n.jsx(me,{value:r,onChange:s}),e.sourceLabel?n.jsxs("p",{className:"mt-2 truncate text-[10px] text-[var(--kg-text-secondary)]",title:e.sourceWorkspacePath||e.sourceLabel,children:["Script: ",e.sourceLabel]}):null,n.jsx("section",{className:"mt-3 grid gap-2","aria-label":"Agentic video invocation controls",children:["Route","Provider","Specification","Outputs"].map(i=>n.jsxs("fieldset",{"data-kg-live-canvas-hero-invocation-group":i.toLowerCase(),children:[n.jsx("legend",{className:"text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--kg-text-secondary)]",children:i}),n.jsx("nav",{className:"mt-1 flex flex-wrap gap-1.5","aria-label":`${i} invocations`,children:e.invocations.filter(o=>o.group===i).map(o=>{const p=A(r,o.token),I=O(o.token)||{};return n.jsx("button",{type:"button",className:`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kg-canvas-accent)] ${p?"border-[var(--kg-canvas-accent)] bg-[color-mix(in_srgb,var(--kg-canvas-accent)_16%,transparent)] text-[var(--kg-text-primary)]":"border-[color:var(--kg-border)] bg-[color:var(--kg-panel-bg)]/70 text-[var(--kg-text-secondary)] hover:text-[var(--kg-text-primary)]"}`,"aria-pressed":p,title:L(o.token)||o.summary,"data-kg-live-canvas-hero-invocation-token":o.token,onClick:()=>s(v=>{const N=h.find(m=>m.token===o.token);if(N)return V(v,N.provider);if(o.token.startsWith("#spec."))return G(v,o.token.slice(6));const k=g.find(m=>m.token===o.token);if(k){const m=C.includes(k.kind)?C.filter(T=>T!==k.kind):[...C,k.kind];return m.length?B(v,m):v}return oe(v,o.token)}),...I,children:o.token},o.token)})})]},i))}),n.jsxs("section",{className:"mt-4 flex flex-wrap items-center gap-2",children:[n.jsx("a",{href:X("/knowgrph/"),onClick:a.onEnter,className:"inline-flex min-h-10 min-w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--kg-canvas-accent)] bg-[var(--kg-canvas-accent)] p-2.5 text-slate-950 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kg-canvas-accent)]","aria-label":"Enter Knowgrph",title:"Enter Knowgrph","data-kg-live-canvas-hero-enter":"true",children:n.jsx(Y,{className:"h-4 w-4","aria-label":"Enter Knowgrph icon","data-kg-live-canvas-hero-action-icon":"enter"})}),n.jsx("button",{type:"submit",className:S,"aria-label":"Run all",title:"Run all","data-kg-live-canvas-hero-start":"true",children:n.jsx(J,{className:"h-4 w-4","aria-label":"Run icon","data-kg-live-canvas-hero-action-icon":"run"})}),n.jsx("button",{type:"button",onClick:()=>_(!0),className:S,"aria-label":"Import canvas embed",title:"Import canvas embed","data-kg-live-canvas-hero-import-embed":"true",children:n.jsx(Z,{className:"h-4 w-4","aria-label":"Import canvas embed icon","data-kg-live-canvas-hero-action-icon":"import"})}),n.jsx("kbd",{className:"rounded-md border border-[color:var(--kg-border)] px-2 py-1 font-mono text-[10px] text-[var(--kg-text-secondary)]",title:"Start locally shortcut",children:"Ctrl/⌘↵"})]}),b?n.jsx("p",{className:"mt-2 text-xs text-red-500",role:"alert",children:b}):null]}),n.jsx("ul",{className:"mt-3 hidden flex-wrap gap-2 text-[10px] text-[var(--kg-text-secondary)] md:flex","aria-label":"Agent-ready execution posture",children:t.posture.map(i=>n.jsx("li",{className:"rounded-full border border-[color:var(--kg-border)] bg-[color-mix(in_srgb,var(--kg-panel-bg)_54%,transparent)] px-2.5 py-1 backdrop-blur-md",children:i},i))})]}),P?n.jsx($,{onClose:()=>_(!1)}):null]})}function Qe(a){const e=c.useMemo(()=>re({sourceFiles:a.sourceFiles}),[a.sourceFiles]),t=K(r=>r.requestZoom);return c.useEffect(()=>{let r=0;const s=requestAnimationFrame(()=>{r=requestAnimationFrame(()=>{t("fit",{intent:"fitToView"})})});return()=>{cancelAnimationFrame(s),r&&cancelAnimationFrame(r)}},[a.source.sourceLayerHash,t]),n.jsx("section",{className:"pointer-events-none absolute inset-0 z-[40] overflow-hidden","aria-label":"Knowgrph Live Canvas Hero","data-kg-live-canvas-hero-shell":"full-bleed","data-kg-live-canvas-hero-source":a.source.sourcePath,"data-kg-live-canvas-hero-source-graph-id":a.source.graphId||void 0,"data-kg-live-canvas-hero-source-revision":a.source.graphRevision,"data-kg-live-canvas-hero-source-schema":a.source.schema||void 0,children:n.jsx(pe,{...a,model:e})})}export{Qe as LiveCanvasHero,pe as LiveCanvasHeroEditorial};
