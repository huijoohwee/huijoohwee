import{R as c,j as t}from"./react-gVJCSEhj.js";import{M as O,b as P,c as L}from"./MarkdownInlineTextEditSurface-j53ad091.js";import{dc as R,a3 as H,a2 as M,u as F,dd as K}from"./settings-mcp-docs-A_iY5omL.js";import{A as f,G as h,c as w,V as D,d as g,p as V,s as G,e as q,f as $}from"./chatInvocationRegistry-DrqlRypl.js";import{C as B,i as Q,r as W}from"./CanvasEmbedImportPanel-CyUnAEKm.js";import{s as z}from"./liveCanvasHeroEmbed-D4vVWm-p.js";import{s as U}from"./CanvasViewport-DT5vVTG6.js";import{b9 as J}from"./index-CfdjntDa.js";import{aR as Z,af as X,aS as Y}from"./ui-CIV6Uagv.js";import"./svgSnapshot-ChOErxBZ.js";import"./cardMarkdownPreviewUtils-TdsfRYyP.js";import"./agenticOsDocInvocations-7fzfRMkQ.js";import"./settings-grabmapsMcpApiDocs-Br3EoCPY.js";import"./mermaid-1-gV1alF.js";import"./d3-W0BRPxKc.js";import"./settings-apiNativeBrowserMcpApiDocs-B1e76jhP.js";import"./settings-vdeoxplnMcpApiDocs-qRquZU_H.js";import"./settings-crawlerAccessMcpApiDocs-BYHag7Pg.js";import"./settings-cloudflareAiGatewayMcpApiDocs-DLcjFJml.js";import"./settings-openaiMcpApiDocs-BZR0TKg3.js";import"./settings-exaMcpApiDocs-9Vfcd-PQ.js";import"./settings-feishuBaseMcpApiDocs-BChfvyfX.js";import"./settings-larkAppMcpApiDocs-BC1cXghi.js";import"./settings-stripeMcpApiDocs-Bo9f5jtJ.js";import"./settings-miromindMcpApiDocs-Bw3m4eBg.js";import"./settings-operatorDeployMcpApiDocs-Ab5FzCMH.js";import"./CanvasEmbedPanelShell-B4PslcJA.js";import"./useActiveGraphRenderData.impl-bMLEEyOr.js";import"./forbidBrowserZoom-cTdaBiIH.js";import"./HighlightedCode-DONUA24h.js";import"./highlightjs-DNjUSkhs.js";import"./canvasEmbedCodePanelEvent-m0ojjNct.js";import"./markdown-it-CqrcgIMp.js";const ee=["视频","video","分镜","逐镜","剧本","script","旁白","audio","shot"],ae=a=>{var n;const e=((n=a.source)==null?void 0:n.kind)==="local"?String(a.source.path||""):"";return e.startsWith("workspace:")?e.slice(10):e||`/${a.name}`};function te(a){return(a||[]).filter(e=>e.enabled!==!1&&/\.md$/i.test(e.name)).map(e=>({name:e.name,workspacePath:ae(e),score:ee.reduce((n,r)=>n+(`${e.name}
${String(e.text||"").slice(0,8e3)}`.toLowerCase().includes(r)?1:0),0)})).filter(e=>e.score>0).sort((e,n)=>n.score-e.score||e.workspacePath.localeCompare(n.workspacePath))[0]||null}function ne(a){const e=te(a),n=e?`[${e.name}](workspace:${encodeURI(e.workspacePath)})`:"";return{source:e,query:[f,h[0].token,...g.map(r=>r.token),w[0].token,D,n,"Generate an end-to-end agentic video canvas from the referenced script. Produce Chinese, Cantonese, and English audio variants with synchronized Chinese/English bilingual subtitles. Persist typed text, image, audio, and video artifacts for playable Cards, Widgets, Rich Media Panels, and BottomPanel Timeline video/FBF/audio lanes. Stop at approval or a missing provider capability."].filter(Boolean).join(" ")}}[f,...h.map(a=>a.token),...w.map(a=>a.token),...g.map(a=>a.token)];[f,h[0].token,...g.map(a=>a.token),w[0].token];function re(a={}){var n,r;const e=ne(a.sourceFiles);return{status:"ready",defaultQuery:e.query,sourceLabel:((n=e.source)==null?void 0:n.name)||null,sourceWorkspacePath:((r=e.source)==null?void 0:r.workspacePath)||null,invocations:[{token:f,group:"Route",label:"Video agent",summary:"Agentic video route.",sourcePath:"canvas/src/features/chat/generationInvocation.ts",keywords:["video","agent"]},...h.map(s=>({...s,group:"Provider",sourcePath:"canvas/src/features/chat/generationInvocation.ts",keywords:["provider"]})),...w.map(s=>({...s,group:"Specification",sourcePath:"canvas/src/features/chat/generationInvocation.ts",keywords:["specification"]})),...g.map(s=>({...s,group:"Outputs",sourcePath:"canvas/src/features/chat/generationInvocation.ts",keywords:["output"]}))]}}const A=(a,e)=>R(a).some(n=>n.kind==="token"&&n.value.toLowerCase()===e.toLowerCase()),oe=(a,e)=>A(a,e)?a.trim():[a.trim(),e].filter(Boolean).join(" "),d={eyebrow:"Knowgrph · Live canvas",headline:["Map intent.","Orchestrate agents.","Prove outcomes."],lede:"A source-backed canvas where `/` routes work, `#` sets meaning, and `@` binds context.",posture:["0 model calls before Run","Frontmatter SSOT","Approval-gated"],markdown:""};function x(a){return String(a||"").trim()}function se(a){if(!Array.isArray(a))return[...d.headline];const e=a.map(n=>x(n)).filter(Boolean).slice(0,3);return e.length!==3?[...d.headline]:[e[0],e[1],e[2]]}function ie(a){if(!Array.isArray(a))return d.posture;const e=a.map(n=>x(n)).filter(Boolean);return e.length>0?e:d.posture}function ce(){if(`---
schema: kgc-live-canvas-hero/v1
id: knowgrph-live-canvas-hero
version: 1.0.0
status: implemented
created: 2026-07-11
updated: 2026-07-20
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
- The default shared Storyboard background resolves \`agentic-canvas-os/docs/AGENT-DEFINITIONS.md\`; its opaque share token is derived from that active canonical D1 path instead of a retired publish-mirror README path.
- Production JavaScript, CSS, and generated assets are emitted under the exact 40-character Knowgrph source revision. A new protected release therefore uses a new asset namespace and cannot reuse an HTML-poisoned browser cache entry from an older deployment.
- Public discovery should advertise this route as the compact Markdown entry point for agent-first landing context.
`.trim())return`---
schema: kgc-live-canvas-hero/v1
id: knowgrph-live-canvas-hero
version: 1.0.0
status: implemented
created: 2026-07-11
updated: 2026-07-20
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
- The default shared Storyboard background resolves \`agentic-canvas-os/docs/AGENT-DEFINITIONS.md\`; its opaque share token is derived from that active canonical D1 path instead of a retired publish-mirror README path.
- Production JavaScript, CSS, and generated assets are emitted under the exact 40-character Knowgrph source revision. A new protected release therefore uses a new asset namespace and cannot reuse an HTML-poisoned browser cache entry from an older deployment.
- Public discovery should advertise this route as the compact Markdown entry point for agent-first landing context.
`;const a=globalThis.__KNOWGRPH_LIVE_CANVAS_HERO_MARKDOWN__;return typeof a=="string"?a:""}function le(a){const e=String(a||"").trim();if(!e)return d;const r=H(M(e)).meta,s=x(r.eyebrow)||d.eyebrow,l=se(r.headline),b=x(r.lede)||d.lede,u=ie(r.posture);return{eyebrow:s,headline:l,lede:b,posture:u,markdown:e}}function de(){return le(ce())}function me(a){const e=c.useRef(null),n=c.useRef(null);return t.jsx("section",{className:"relative mt-2 min-h-16 overflow-hidden rounded-xl border border-[color:var(--kg-border)] bg-[color-mix(in_srgb,var(--kg-code-bg)_88%,transparent)]",onKeyDownCapture:r=>{var s,l;(r.metaKey||r.ctrlKey)&&r.key==="Enter"&&((l=(s=e.current)==null?void 0:s.closest("form"))==null||l.requestSubmit())},children:t.jsx(O,{value:a.value,ariaLabel:"Agentic Video Canvas",placeholder:"Describe the agentic video workflow",className:"min-h-16 bg-transparent px-3 py-2.5 font-mono text-xs leading-5 text-[var(--kg-code-text)] outline-none",commandMode:null,editorRef:e,inputProxyRef:n,inlineChipDensity:"compact",multiline:!0,projectedMediaAttachments:null,isCommandMenuTarget:()=>!1,onCancel:()=>{},onCommit:()=>{},onDraftChange:a.onChange,onFocus:()=>{},onOpenCommandMenuForSigilAtSelection:()=>{},readCommandSigilFromKeyEvent:()=>null,readCommandSigilFromInsertedText:()=>null,cardInlineEditInputAttribute:"data-kg-live-canvas-hero-query"})})}const E="inline-flex min-h-10 min-w-10 shrink-0 items-center justify-center rounded-lg border border-[color:var(--kg-border)] bg-[color-mix(in_srgb,var(--kg-panel-bg)_72%,transparent)] p-2.5 text-[var(--kg-text-primary)] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kg-canvas-accent)] disabled:cursor-wait disabled:opacity-60";function ue(a){return a.split(/(`[^`]+`)/g).map((e,n)=>e.startsWith("`")&&e.endsWith("`")?t.jsx("span",{className:"font-mono text-[var(--kg-text-primary)]",children:e.slice(1,-1)},`${e}:${n}`):t.jsx(c.Fragment,{children:e},`${e}:${n}`))}function pe(a){const{model:e}=a,n=c.useMemo(de,[]),[r,s]=c.useState(e.defaultQuery),l=c.useRef(e.defaultQuery),[b,u]=c.useState(""),[S,N]=c.useState(!1),y=c.useMemo(()=>V(r),[r]),C=(y==null?void 0:y.kinds)||[];c.useEffect(()=>{const i=l.current;l.current=e.defaultQuery,s(o=>o===i?e.defaultQuery:o)},[e.defaultQuery]),c.useEffect(()=>{const i=o=>{if(!Q(o))return;const p=W(o.data);p&&z(p)};return window.addEventListener("message",i),()=>window.removeEventListener("message",i)},[]);const I=i=>{i.preventDefault();const o=K(r.trim());if(!o){u("Enter an agent-ready query before running the canvas.");return}if(u(""),!U(o)){u("The canvas Chat surface is not ready. Keep the query here and try again.");return}};return t.jsxs("section",{className:"pointer-events-none absolute inset-0 z-[40] overflow-hidden text-[var(--kg-text-primary)]","aria-labelledby":"knowgrph-live-canvas-hero-title","data-kg-live-canvas-hero":"true","data-kg-live-canvas-hero-state":"ready","data-kg-live-canvas-hero-layout":"overlay-on-canvas",children:[t.jsx("section",{className:"absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,color-mix(in_srgb,var(--kg-canvas-bg)_14%,transparent)_25%,color-mix(in_srgb,var(--kg-canvas-bg)_92%,transparent)_56%,var(--kg-canvas-bg)_100%)] md:hidden","aria-hidden":"true"}),t.jsx("section",{className:"absolute inset-0 hidden bg-[linear-gradient(90deg,color-mix(in_srgb,var(--kg-canvas-bg)_96%,transparent)_0%,color-mix(in_srgb,var(--kg-canvas-bg)_82%,transparent)_34%,color-mix(in_srgb,var(--kg-canvas-bg)_16%,transparent)_60%,transparent_72%)] md:block","aria-hidden":"true"}),t.jsx("section",{className:"absolute -left-48 bottom-[-18rem] h-[38rem] w-[38rem] rounded-full bg-[color-mix(in_srgb,var(--kg-canvas-accent)_10%,transparent)] blur-3xl md:bottom-auto md:top-1/2 md:h-[46rem] md:w-[46rem] md:-translate-y-1/2","aria-hidden":"true"}),t.jsxs("article",{className:"pointer-events-auto absolute bottom-[calc(var(--kg-safe-bottom,0px)+var(--kg-canvas-viewport-edge-gap,12px)+var(--kg-toolbar-compact-surface-height,38px)+12px)] left-4 right-4 flex max-h-[calc(100dvh-var(--kg-main-toolbar-height,38px)-var(--kg-toolbar-compact-surface-height,38px)-4rem)] flex-col overflow-y-auto pr-1 md:bottom-auto md:left-8 md:right-auto md:top-1/2 md:w-[min(34rem,calc(100%-4rem))] md:max-h-[calc(100dvh-var(--kg-main-toolbar-height,38px)-2.5rem)] md:-translate-y-1/2 lg:left-12 lg:w-[34rem]","data-kg-live-canvas-hero-editorial":"overlay",children:[t.jsxs("p",{className:"flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--kg-text-secondary)]",children:[t.jsx("span",{className:"h-2 w-2 rounded-full bg-[var(--kg-canvas-accent)] shadow-[0_0_18px_var(--kg-canvas-accent)]","aria-hidden":"true"}),n.eyebrow]}),t.jsxs("h1",{id:"knowgrph-live-canvas-hero-title",className:"mt-3 text-balance text-3xl font-semibold leading-[1.02] tracking-[-0.045em] md:mt-4 md:text-5xl lg:text-[3.5rem]",children:[t.jsx("span",{className:"block",children:n.headline[0]}),t.jsx("span",{className:"block",children:n.headline[1]}),t.jsx("span",{className:"block text-[var(--kg-canvas-accent)]",children:n.headline[2]})]}),t.jsx("p",{className:"mt-4 max-w-[34rem] text-sm leading-6 text-[var(--kg-text-secondary)] sm:text-base",children:ue(n.lede)}),t.jsxs("form",{className:"mt-4 rounded-2xl border border-[color:var(--kg-border)] bg-[color-mix(in_srgb,var(--kg-panel-bg)_72%,transparent)] p-3 shadow-[0_18px_64px_color-mix(in_srgb,var(--kg-canvas-bg)_72%,transparent)] backdrop-blur-xl md:mt-6 md:p-4",onSubmit:I,"data-kg-live-canvas-hero-command-deck":"true",children:[t.jsx("label",{className:"text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--kg-text-secondary)]",htmlFor:"knowgrph-live-canvas-hero-query",children:"Agentic Video Canvas"}),t.jsx(me,{value:r,onChange:s}),e.sourceLabel?t.jsxs("p",{className:"mt-2 truncate text-[10px] text-[var(--kg-text-secondary)]",title:e.sourceWorkspacePath||e.sourceLabel,children:["Script: ",e.sourceLabel]}):null,t.jsx("section",{className:"mt-3 grid gap-2","aria-label":"Agentic video invocation controls",children:["Route","Provider","Specification","Outputs"].map(i=>t.jsxs("fieldset",{"data-kg-live-canvas-hero-invocation-group":i.toLowerCase(),children:[t.jsx("legend",{className:"text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--kg-text-secondary)]",children:i}),t.jsx("nav",{className:"mt-1 flex flex-wrap gap-1.5","aria-label":`${i} invocations`,children:e.invocations.filter(o=>o.group===i).map(o=>{const p=A(r,o.token),T=P(o.token)||{};return t.jsx("button",{type:"button",className:`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kg-canvas-accent)] ${p?"border-[var(--kg-canvas-accent)] bg-[color-mix(in_srgb,var(--kg-canvas-accent)_16%,transparent)] text-[var(--kg-text-primary)]":"border-[color:var(--kg-border)] bg-[color:var(--kg-panel-bg)]/70 text-[var(--kg-text-secondary)] hover:text-[var(--kg-text-primary)]"}`,"aria-pressed":p,title:L(o.token)||o.summary,"data-kg-live-canvas-hero-invocation-token":o.token,onClick:()=>s(v=>{const _=h.find(m=>m.token===o.token);if(_)return G(v,_.provider);if(o.token.startsWith("#spec."))return q(v,o.token.slice(6));const k=g.find(m=>m.token===o.token);if(k){const m=C.includes(k.kind)?C.filter(j=>j!==k.kind):[...C,k.kind];return m.length?$(v,m):v}return oe(v,o.token)}),...T,children:o.token},o.token)})})]},i))}),t.jsxs("section",{className:"mt-4 flex flex-wrap items-center gap-2",children:[t.jsx("a",{href:J("/knowgrph/"),onClick:a.onEnter,className:"inline-flex min-h-10 min-w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--kg-canvas-accent)] bg-[var(--kg-canvas-accent)] p-2.5 text-slate-950 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kg-canvas-accent)]","aria-label":"Enter Knowgrph",title:"Enter Knowgrph","data-kg-live-canvas-hero-enter":"true",children:t.jsx(Z,{className:"h-4 w-4","aria-label":"Enter Knowgrph icon","data-kg-live-canvas-hero-action-icon":"enter"})}),t.jsx("button",{type:"submit",className:E,"aria-label":"Run all",title:"Run all","data-kg-live-canvas-hero-start":"true",children:t.jsx(X,{className:"h-4 w-4","aria-label":"Run icon","data-kg-live-canvas-hero-action-icon":"run"})}),t.jsx("button",{type:"button",onClick:()=>N(!0),className:E,"aria-label":"Import canvas embed",title:"Import canvas embed","data-kg-live-canvas-hero-import-embed":"true",children:t.jsx(Y,{className:"h-4 w-4","aria-label":"Import canvas embed icon","data-kg-live-canvas-hero-action-icon":"import"})}),t.jsx("kbd",{className:"rounded-md border border-[color:var(--kg-border)] px-2 py-1 font-mono text-[10px] text-[var(--kg-text-secondary)]",title:"Start locally shortcut",children:"Ctrl/⌘↵"})]}),b?t.jsx("p",{className:"mt-2 text-xs text-red-500",role:"alert",children:b}):null]}),t.jsx("ul",{className:"mt-3 hidden flex-wrap gap-2 text-[10px] text-[var(--kg-text-secondary)] md:flex","aria-label":"Agent-ready execution posture",children:n.posture.map(i=>t.jsx("li",{className:"rounded-full border border-[color:var(--kg-border)] bg-[color-mix(in_srgb,var(--kg-panel-bg)_54%,transparent)] px-2.5 py-1 backdrop-blur-md",children:i},i))})]}),S?t.jsx(B,{onClose:()=>N(!1)}):null]})}function We(a){const e=c.useMemo(()=>re({sourceFiles:a.sourceFiles}),[a.sourceFiles]),n=F(r=>r.requestZoom);return c.useEffect(()=>{let r=0;const s=requestAnimationFrame(()=>{r=requestAnimationFrame(()=>{n("fit",{intent:"fitToView"})})});return()=>{cancelAnimationFrame(s),r&&cancelAnimationFrame(r)}},[a.source.sourceLayerHash,n]),t.jsx("section",{className:"pointer-events-none absolute inset-0 z-[40] overflow-hidden","aria-label":"Knowgrph Live Canvas Hero","data-kg-live-canvas-hero-shell":"full-bleed","data-kg-live-canvas-hero-source":a.source.sourcePath,"data-kg-live-canvas-hero-source-graph-id":a.source.graphId||void 0,"data-kg-live-canvas-hero-source-revision":a.source.graphRevision,"data-kg-live-canvas-hero-source-schema":a.source.schema||void 0,children:t.jsx(pe,{...a,model:e})})}export{We as LiveCanvasHero,pe as LiveCanvasHeroEditorial};
