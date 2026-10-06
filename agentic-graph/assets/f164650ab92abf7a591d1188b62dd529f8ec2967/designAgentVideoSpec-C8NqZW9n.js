import{bK as A,eu as O,ea as R,Y as D}from"./settings-mcp-core-CQz0mEUJ.js";import{a3 as F,a4 as L}from"./index-CF5eqrSx.js";import"./settings-byteplusModelArkMcpApiDocs-Ced_o71a.js";import"./settings-grabmapsMcpApiDocs-CNtvow1k.js";import"./byteplusRunGeneration-De7YRujU.js";import"./widgetOutputSrcDoc-ByJ4BasI.js";import"./react-BhUDf-ol.js";import"./d3-DgRUfpEQ.js";import"./agentic-graph-storage-browser-session-BKu5deyI.js";const I="agentic-graph-design-agent-video/v1",C=12,f=1280,v=720,h=1800,N=12,$=120,z=960,y="agent-design-video",V=t=>!!t&&typeof t=="object"&&!Array.isArray(t),n=t=>String(t??"").trim(),c=(t,e)=>typeof t=="number"&&Number.isFinite(t)?t:e,M=(t,e,i)=>Math.min(i,Math.max(e,t)),w=t=>n(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),T=(t,e)=>{const i=n(t);return/^#[0-9a-f]{3,8}$/i.test(i)||/^(rgb|rgba|hsl|hsla)\([0-9.,%/ a-z-]+\)$/i.test(i)||/^var\(--[-a-z0-9]+\)$/i.test(i)?i:e},E=t=>V(t.properties)?t.properties:{},H=t=>{const e=E(t);return n(e["visual:label"])||n(e.title)||n(e.name)||n(t.label)||n(t.id)||"Layer"},_=t=>{const e=new Set;if(!Array.isArray(t))return e;for(let i=0;i<t.length;i+=1){const o=n(t[i]);o&&e.add(o)}return e},S=t=>{const e=E(t),i=c(e["visual:yIndex"],Number.POSITIVE_INFINITY),o=c(e["visual:xIndex"],Number.POSITIVE_INFINITY),l=c(t.y,0),a=c(t.x,0);return[Number.isFinite(i)?i:l,Number.isFinite(o)?o:a,n(t.id)].join(":")},j=(t,e)=>{const i=Array.isArray(t==null?void 0:t.nodes)?t.nodes:[],o=_(e);return(o.size>0?i.filter(a=>o.has(n(a.id))):i).filter(a=>n(a.id)).sort((a,p)=>S(a).localeCompare(S(p))).slice(0,C)},Y=t=>{const e=t.map((s,r)=>{const g=E(s),k=M(c(g["visual:width"],180),48,520),x=M(c(g["visual:height"],96),32,320);return{id:n(s.id),label:H(s),type:n(s.type)||"Node",x:c(s.x,r%4*220),y:c(s.y,Math.floor(r/4)*150),width:k,height:x,fill:T(g["visual:fill"],"#ffffff"),stroke:T(g["visual:stroke"],"#64748b"),radius:M(c(g["visual:borderRadius"],10),0,64),opacity:M(c(g["visual:opacity"],1),.16,1)}});if(e.length===0)return[];const i=Math.min(...e.map(s=>s.x-s.width/2)),o=Math.min(...e.map(s=>s.y-s.height/2)),l=Math.max(...e.map(s=>s.x+s.width/2)),a=Math.max(...e.map(s=>s.y+s.height/2)),p=Math.max(1,l-i),m=Math.max(1,a-o),d=Math.min(1.4,Math.max(.35,Math.min((f-220)/p,(v-220)/m))),b=(f-p*d)/2,u=(v-m*d)/2;return e.map(s=>({...s,x:Math.round(b+(s.x-s.width/2-i)*d),y:Math.round(u+(s.y-s.height/2-o)*d),width:Math.round(s.width*d),height:Math.round(s.height*d),radius:Math.round(s.radius*d)}))},K=t=>t.map(e=>({id:e.id,label:e.label,type:e.type,trackIndex:e.trackIndex,startMs:e.startMs,durationMs:e.durationMs})),G=()=>[{path:`${y}/index.html`,kind:"html",role:"composition"},{path:`${y}/styles.css`,kind:"css",role:"style"},{path:`${y}/data.json`,kind:"json",role:"data"},{path:`${y}/manifest.json`,kind:"json",role:"manifest"}],P=t=>t.map(e=>({id:`composition:${e.id}`,label:e.label,sourceLayerId:e.id,startMs:e.startMs,durationMs:e.durationMs,trackIndex:e.trackIndex})),W=t=>t.map(e=>({id:`asset:${e.id}`,label:e.label,kind:"design-layer",sourceLayerId:e.id})),X=t=>[{id:"lane:composition",label:"Compositions",kind:"composition",tracks:[...t]}],B=()=>Array.from({length:4},(e,i)=>{const o=Math.round(h/3*i);return{label:`${(o/1e3).toFixed(i===0?0:1)}s`,timeMs:o,percent:o/h*100}}),U=t=>{const e=t.map((i,o)=>`
        <li class="kg-design-video-layer" data-start="${(i.startMs/1e3).toFixed(3)}" data-duration="${(i.durationMs/1e3).toFixed(3)}" data-track-index="${i.trackIndex}" style="--kg-layer-x:${i.x}px;--kg-layer-y:${i.y}px;--kg-layer-w:${i.width}px;--kg-layer-h:${i.height}px;--kg-layer-fill:${i.fill};--kg-layer-stroke:${i.stroke};--kg-layer-radius:${i.radius}px;--kg-layer-opacity:${i.opacity};--kg-layer-start:${(i.startMs/1e3).toFixed(3)};--kg-layer-duration-inv:${(1e3/Math.max(1,i.durationMs)).toFixed(4)};--kg-layer-track:${i.trackIndex};">
          <article>
            <header>
              <strong>${w(i.label)}</strong>
              <span>${w(i.type)}</span>
            </header>
          </article>
        </li>`).join("");return`
    <section class="kg-design-video-stage" data-composition-id="agentic-graph-design-agent-video" data-start="0" data-duration="${(h/1e3).toFixed(3)}" data-width="${f}" data-height="${v}" aria-label="Agent native design video stage">
      <header class="kg-design-video-header">
        <p>2D Renderer: Design</p>
        <h1>Agent-native design workspace</h1>
      </header>
      <ol class="kg-design-video-layers" aria-label="Rendered design layers">${e}
      </ol>
      <footer class="kg-design-video-footer">HTML + CSS + data -> MP4</footer>
    </section>`},q=()=>`
.kg-design-video-stage {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  color: #0f172a;
  background: #f8fafc;
  font-family: ${D};
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
  font-size: 36px;
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
  font-size: 18px;
  line-height: 1.2;
}
.kg-design-video-layer span {
  color: #475569;
  font-size: 12px;
  line-height: 1.2;
  text-transform: uppercase;
}
`;function at(t){const e=t.graphData||null,i=j(e,t.selectedNodeIds),o=Y(i).map((k,x)=>({...k,trackIndex:x,startMs:Math.min(h-240,x*$),durationMs:Math.max(240,Math.min(z,h-x*$))})),l=K(o),a=G(),p=P(o),m=W(o),d=X(l),b=B(),u=F({graphData:e,graphRevision:t.graphRevision,maxEntries:8}),s=A("design-agent-video",{graphData:e,graphRevision:t.graphRevision,graphSemanticKey:[u.semanticKey,Array.from(_(t.selectedNodeIds)).sort().join(","),o.map(k=>k.id).join(",")].filter(Boolean).join(":")}),r={html:U(o),css:q(),data:{schema:I,semanticKey:s,composition:{id:"agentic-graph-design-agent-video",durationMs:h,fps:N,width:f,height:v},workspaceFiles:a,compositions:p,assets:m,timelineTracks:l,timelineLanes:d,timelineTicks:b,layers:o,tokenSummary:u},durationMs:h,fps:N,width:f,height:v,engineHint:L.canvas2d},g={id:s,type:R,label:t.title||O,properties:{html:r.html,css:r.css,data_json:JSON.stringify(r.data),duration_ms:r.durationMs,fps:r.fps,width:r.width,height:r.height,engine_hint:r.engineHint}};return{schema:I,semanticKey:s,renderSpec:r,flowNode:g,manifest:{schema:I,semanticKey:s,layerCount:o.length,selectedLayerCount:_(t.selectedNodeIds).size,workspaceFiles:a,compositions:p,assets:m,timelineTracks:l,timelineLanes:d,timelineTicks:b,tokenSummary:u}}}export{at as b};
