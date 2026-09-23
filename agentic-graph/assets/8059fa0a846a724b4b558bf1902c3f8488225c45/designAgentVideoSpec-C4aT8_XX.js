import{Q as A,R}from"./index-gkG-eVFi.js";import{bn as D,dS as O,dz as F}from"./settings-mcp-core-CUovYWhp.js";import"./settings-byteplusModelArkMcpApiDocs-DS9AgXgf.js";import"./settings-grabmapsMcpApiDocs-DVq_8X8h.js";import"./byteplusRunGeneration-D00Rb87J.js";import"./widgetOutputSrcDoc-Cdp8vHw0.js";import"./react-BhUDf-ol.js";import"./d3-DgRUfpEQ.js";import"./agentic-graph-storage-browser-session-c2uOlysX.js";const I="agentic-graph-design-agent-video/v1",L=12,f=1280,v=720,h=1800,w=12,N=120,C=960,y="agent-design-video",z=e=>!!e&&typeof e=="object"&&!Array.isArray(e),n=e=>String(e??"").trim(),c=(e,t)=>typeof e=="number"&&Number.isFinite(e)?e:t,M=(e,t,i)=>Math.min(i,Math.max(t,e)),$=e=>n(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),S=(e,t)=>{const i=n(e);return/^#[0-9a-f]{3,8}$/i.test(i)||/^(rgb|rgba|hsl|hsla)\([0-9.,%/ a-z-]+\)$/i.test(i)||/^var\(--[-a-z0-9]+\)$/i.test(i)?i:t},E=e=>z(e.properties)?e.properties:{},V=e=>{const t=E(e);return n(t["visual:label"])||n(t.title)||n(t.name)||n(e.label)||n(e.id)||"Layer"},_=e=>{const t=new Set;if(!Array.isArray(e))return t;for(let i=0;i<e.length;i+=1){const o=n(e[i]);o&&t.add(o)}return t},T=e=>{const t=E(e),i=c(t["visual:yIndex"],Number.POSITIVE_INFINITY),o=c(t["visual:xIndex"],Number.POSITIVE_INFINITY),l=c(e.y,0),a=c(e.x,0);return[Number.isFinite(i)?i:l,Number.isFinite(o)?o:a,n(e.id)].join(":")},H=(e,t)=>{const i=Array.isArray(e==null?void 0:e.nodes)?e.nodes:[],o=_(t);return(o.size>0?i.filter(a=>o.has(n(a.id))):i).filter(a=>n(a.id)).sort((a,p)=>T(a).localeCompare(T(p))).slice(0,L)},j=e=>{const t=e.map((s,r)=>{const g=E(s),k=M(c(g["visual:width"],180),48,520),x=M(c(g["visual:height"],96),32,320);return{id:n(s.id),label:V(s),type:n(s.type)||"Node",x:c(s.x,r%4*220),y:c(s.y,Math.floor(r/4)*150),width:k,height:x,fill:S(g["visual:fill"],"#ffffff"),stroke:S(g["visual:stroke"],"#64748b"),radius:M(c(g["visual:borderRadius"],10),0,64),opacity:M(c(g["visual:opacity"],1),.16,1)}});if(t.length===0)return[];const i=Math.min(...t.map(s=>s.x-s.width/2)),o=Math.min(...t.map(s=>s.y-s.height/2)),l=Math.max(...t.map(s=>s.x+s.width/2)),a=Math.max(...t.map(s=>s.y+s.height/2)),p=Math.max(1,l-i),m=Math.max(1,a-o),d=Math.min(1.4,Math.max(.35,Math.min((f-220)/p,(v-220)/m))),b=(f-p*d)/2,u=(v-m*d)/2;return t.map(s=>({...s,x:Math.round(b+(s.x-s.width/2-i)*d),y:Math.round(u+(s.y-s.height/2-o)*d),width:Math.round(s.width*d),height:Math.round(s.height*d),radius:Math.round(s.radius*d)}))},Y=e=>e.map(t=>({id:t.id,label:t.label,type:t.type,trackIndex:t.trackIndex,startMs:t.startMs,durationMs:t.durationMs})),G=()=>[{path:`${y}/index.html`,kind:"html",role:"composition"},{path:`${y}/styles.css`,kind:"css",role:"style"},{path:`${y}/data.json`,kind:"json",role:"data"},{path:`${y}/manifest.json`,kind:"json",role:"manifest"}],K=e=>e.map(t=>({id:`composition:${t.id}`,label:t.label,sourceLayerId:t.id,startMs:t.startMs,durationMs:t.durationMs,trackIndex:t.trackIndex})),P=e=>e.map(t=>({id:`asset:${t.id}`,label:t.label,kind:"design-layer",sourceLayerId:t.id})),W=e=>[{id:"lane:composition",label:"Compositions",kind:"composition",tracks:[...e]}],X=()=>Array.from({length:4},(t,i)=>{const o=Math.round(h/3*i);return{label:`${(o/1e3).toFixed(i===0?0:1)}s`,timeMs:o,percent:o/h*100}}),B=e=>{const t=e.map((i,o)=>`
        <li class="kg-design-video-layer" data-start="${(i.startMs/1e3).toFixed(3)}" data-duration="${(i.durationMs/1e3).toFixed(3)}" data-track-index="${i.trackIndex}" style="--kg-layer-x:${i.x}px;--kg-layer-y:${i.y}px;--kg-layer-w:${i.width}px;--kg-layer-h:${i.height}px;--kg-layer-fill:${i.fill};--kg-layer-stroke:${i.stroke};--kg-layer-radius:${i.radius}px;--kg-layer-opacity:${i.opacity};--kg-layer-start:${(i.startMs/1e3).toFixed(3)};--kg-layer-duration-inv:${(1e3/Math.max(1,i.durationMs)).toFixed(4)};--kg-layer-track:${i.trackIndex};">
          <article>
            <header>
              <strong>${$(i.label)}</strong>
              <span>${$(i.type)}</span>
            </header>
          </article>
        </li>`).join("");return`
    <section class="kg-design-video-stage" data-composition-id="agentic-graph-design-agent-video" data-start="0" data-duration="${(h/1e3).toFixed(3)}" data-width="${f}" data-height="${v}" aria-label="Agent native design video stage">
      <header class="kg-design-video-header">
        <p>2D Renderer: Design</p>
        <h1>Agent-native design workspace</h1>
      </header>
      <ol class="kg-design-video-layers" aria-label="Rendered design layers">${t}
      </ol>
      <footer class="kg-design-video-footer">HTML + CSS + data -> MP4</footer>
    </section>`},U=()=>`
.kg-design-video-stage {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  color: #0f172a;
  background: #f8fafc;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
.kg-design-video-header,
.kg-design-video-footer {
  position: absolute;
  left: 52px;
  right: 52px;
  z-index: 2;
}
.kg-design-video-header {
  top: 34px;
}
.kg-design-video-header p,
.kg-design-video-footer {
  margin: 0;
  color: #475569;
  font-size: 18px;
  line-height: 1.2;
}
.kg-design-video-header h1 {
  margin: 8px 0 0;
  color: #020617;
  font-size: 38px;
  line-height: 1.05;
  letter-spacing: 0;
}
.kg-design-video-footer {
  bottom: 34px;
  font-weight: 650;
}
.kg-design-video-layers {
  position: absolute;
  inset: 118px 52px 86px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.kg-design-video-layer {
  position: absolute;
  left: var(--kg-layer-x);
  top: var(--kg-layer-y);
  width: var(--kg-layer-w);
  height: var(--kg-layer-h);
  opacity: clamp(0.16, calc((var(--kg-render-time-s) - var(--kg-layer-start)) * var(--kg-layer-duration-inv)), var(--kg-layer-opacity));
  transform: translateY(clamp(0px, calc(22px - (var(--kg-render-time-s) - var(--kg-layer-start)) * 28px), 22px));
}
.kg-design-video-layer article {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 14px 16px;
  overflow: hidden;
  border: 2px solid var(--kg-layer-stroke);
  border-radius: var(--kg-layer-radius);
  background: var(--kg-layer-fill);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
}
.kg-design-video-layer header {
  display: grid;
  gap: 6px;
}
.kg-design-video-layer strong,
.kg-design-video-layer span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.kg-design-video-layer strong {
  font-size: 17px;
  line-height: 1.2;
}
.kg-design-video-layer span {
  color: #475569;
  font-size: 12px;
  line-height: 1.2;
  text-transform: uppercase;
}
`;function ne(e){const t=e.graphData||null,i=H(t,e.selectedNodeIds),o=j(i).map((k,x)=>({...k,trackIndex:x,startMs:Math.min(h-240,x*N),durationMs:Math.max(240,Math.min(C,h-x*N))})),l=Y(o),a=G(),p=K(o),m=P(o),d=W(l),b=X(),u=A({graphData:t,graphRevision:e.graphRevision,maxEntries:8}),s=D("design-agent-video",{graphData:t,graphRevision:e.graphRevision,graphSemanticKey:[u.semanticKey,Array.from(_(e.selectedNodeIds)).sort().join(","),o.map(k=>k.id).join(",")].filter(Boolean).join(":")}),r={html:B(o),css:U(),data:{schema:I,semanticKey:s,composition:{id:"agentic-graph-design-agent-video",durationMs:h,fps:w,width:f,height:v},workspaceFiles:a,compositions:p,assets:m,timelineTracks:l,timelineLanes:d,timelineTicks:b,layers:o,tokenSummary:u},durationMs:h,fps:w,width:f,height:v,engineHint:R.canvas2d},g={id:s,type:F,label:e.title||O,properties:{html:r.html,css:r.css,data_json:JSON.stringify(r.data),duration_ms:r.durationMs,fps:r.fps,width:r.width,height:r.height,engine_hint:r.engineHint}};return{schema:I,semanticKey:s,renderSpec:r,flowNode:g,manifest:{schema:I,semanticKey:s,layerCount:o.length,selectedLayerCount:_(e.selectedNodeIds).size,workspaceFiles:a,compositions:p,assets:m,timelineTracks:l,timelineLanes:d,timelineTicks:b,tokenSummary:u}}}export{ne as b};
