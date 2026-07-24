import{bH as L}from"./index-DlOVmnbE.js";import{aX as z,eu as j,ev as H}from"./settings-mcp-docs-BvmvwLRz.js";import"./settings-grabmapsMcpApiDocs-CfWYDEv5.js";import"./byteplusRunGeneration-CLAE4f5b.js";import"./react-D-VqXPR-.js";import"./d3-W0BRPxKc.js";const V=48,K=4,y=new Map,w=t=>String(t??"").trim(),N=t=>!!t&&typeof t=="object"&&!Array.isArray(t),P=t=>{const e=w(t);return e?/^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(e)?e.toLowerCase():/^(rgb|rgba|hsl|hsla)\(/i.test(e)?e.replace(/\s+/g,""):/^var\(--[-a-z0-9]+\)$/i.test(e)?e:"":""},Y=t=>{if(typeof t!="number"||!Number.isFinite(t))return"";const e=Math.round(t*100)/100;return Number.isInteger(e)?String(e):e.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")},_=(t,e)=>{const s=t.toLowerCase();return e.some(i=>s.includes(i))},v=(t,e,s)=>{const i=w(e);if(!i)return;const o=t.get(i);if(o){o.count+=1,o.sampleNodeIds.length<K&&s&&!o.sampleNodeIds.includes(s)&&o.sampleNodeIds.push(s);return}t.set(i,{value:i,count:1,sampleNodeIds:s?[s]:[]})},I=(t,e)=>Array.from(t.values()).sort((s,i)=>i.count-s.count||s.value.localeCompare(i.value)).slice(0,Math.max(1,e)),G=(t,e)=>{const s=(i,o)=>{if(Array.isArray(o)){for(let a=0;a<o.length;a+=1)s(`${i}.${a}`,o[a]);return}if(N(o)){for(const[a,r]of Object.entries(o))s(i?`${i}.${a}`:a,r);return}e(i,o)};if(N(t.properties))for(const[i,o]of Object.entries(t.properties))s(i,o);if(N(t.metadata))for(const[i,o]of Object.entries(t.metadata))s(`metadata.${i}`,o)};function X(t){var r;const e=Array.isArray((r=t.graphData)==null?void 0:r.nodes)?t.graphData.nodes:[],s=new Map,i=new Map,o=new Map,a=new Map;for(const p of e){const d=w(p.id),u=w(p.type);u&&v(s,u,d),G(p,(h,n)=>{const c=P(n);c&&_(h,["color","fill","stroke","background","border"])&&v(i,c,d);const g=Y(n);g&&(_(h,["font","line-height","letter-spacing","weight"])?v(o,`${h}:${g}`,d):_(h,["gap","padding","margin","radius","width","height","inset"])&&v(a,`${h}:${g}`,d))})}return{semanticKey:t.semanticKey,nodeCount:e.length,typeEntries:I(s,t.maxEntries),colorEntries:I(i,t.maxEntries),typographyEntries:I(o,t.maxEntries),spacingEntries:I(a,t.maxEntries)}}function W(t){const e=t.graphData||null,s=Math.max(1,Math.min(24,Math.floor(t.maxEntries||8))),i=z("design-token-summary",{graphData:e,graphRevision:t.graphRevision}),o=`${i||"empty"}:${s}`,a=y.get(o);if(a)return a;const r=X({graphData:e,semanticKey:i,maxEntries:s});if(y.set(o,r),y.size>V){const p=y.keys().next().value;p&&y.delete(p)}return r}const A="knowgrph-design-agent-video/v1",B=12,b=1280,M=720,f=1800,D=12,O=120,U=960,E="agent-design-video",q=t=>!!t&&typeof t=="object"&&!Array.isArray(t),l=t=>String(t??"").trim(),m=(t,e)=>typeof t=="number"&&Number.isFinite(t)?t:e,$=(t,e,s)=>Math.min(s,Math.max(e,t)),R=t=>l(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),C=(t,e)=>{const s=l(t);return/^#[0-9a-f]{3,8}$/i.test(s)||/^(rgb|rgba|hsl|hsla)\([0-9.,%/ a-z-]+\)$/i.test(s)||/^var\(--[-a-z0-9]+\)$/i.test(s)?s:e},T=t=>q(t.properties)?t.properties:{},J=t=>{const e=T(t);return l(e["visual:label"])||l(e.title)||l(e.name)||l(t.label)||l(t.id)||"Layer"},S=t=>{const e=new Set;if(!Array.isArray(t))return e;for(let s=0;s<t.length;s+=1){const i=l(t[s]);i&&e.add(i)}return e},F=t=>{const e=T(t),s=m(e["visual:yIndex"],Number.POSITIVE_INFINITY),i=m(e["visual:xIndex"],Number.POSITIVE_INFINITY),o=m(t.y,0),a=m(t.x,0);return[Number.isFinite(s)?s:o,Number.isFinite(i)?i:a,l(t.id)].join(":")},Q=(t,e)=>{const s=Array.isArray(t==null?void 0:t.nodes)?t.nodes:[],i=S(e);return(i.size>0?s.filter(a=>i.has(l(a.id))):s).filter(a=>l(a.id)).sort((a,r)=>F(a).localeCompare(F(r))).slice(0,B)},Z=t=>{const e=t.map((n,c)=>{const g=T(n),k=$(m(g["visual:width"],180),48,520),x=$(m(g["visual:height"],96),32,320);return{id:l(n.id),label:J(n),type:l(n.type)||"Node",x:m(n.x,c%4*220),y:m(n.y,Math.floor(c/4)*150),width:k,height:x,fill:C(g["visual:fill"],"#ffffff"),stroke:C(g["visual:stroke"],"#64748b"),radius:$(m(g["visual:borderRadius"],10),0,64),opacity:$(m(g["visual:opacity"],1),.16,1)}});if(e.length===0)return[];const s=Math.min(...e.map(n=>n.x-n.width/2)),i=Math.min(...e.map(n=>n.y-n.height/2)),o=Math.max(...e.map(n=>n.x+n.width/2)),a=Math.max(...e.map(n=>n.y+n.height/2)),r=Math.max(1,o-s),p=Math.max(1,a-i),d=Math.min(1.4,Math.max(.35,Math.min((b-220)/r,(M-220)/p))),u=(b-r*d)/2,h=(M-p*d)/2;return e.map(n=>({...n,x:Math.round(u+(n.x-n.width/2-s)*d),y:Math.round(h+(n.y-n.height/2-i)*d),width:Math.round(n.width*d),height:Math.round(n.height*d),radius:Math.round(n.radius*d)}))},tt=t=>t.map(e=>({id:e.id,label:e.label,type:e.type,trackIndex:e.trackIndex,startMs:e.startMs,durationMs:e.durationMs})),et=()=>[{path:`${E}/index.html`,kind:"html",role:"composition"},{path:`${E}/styles.css`,kind:"css",role:"style"},{path:`${E}/data.json`,kind:"json",role:"data"},{path:`${E}/manifest.json`,kind:"json",role:"manifest"}],st=t=>t.map(e=>({id:`composition:${e.id}`,label:e.label,sourceLayerId:e.id,startMs:e.startMs,durationMs:e.durationMs,trackIndex:e.trackIndex})),it=t=>t.map(e=>({id:`asset:${e.id}`,label:e.label,kind:"design-layer",sourceLayerId:e.id})),nt=t=>[{id:"lane:composition",label:"Compositions",kind:"composition",tracks:[...t]}],ot=()=>Array.from({length:4},(e,s)=>{const i=Math.round(f/3*s);return{label:`${(i/1e3).toFixed(s===0?0:1)}s`,timeMs:i,percent:i/f*100}}),at=t=>{const e=t.map((s,i)=>`
        <li class="kg-design-video-layer" data-start="${(s.startMs/1e3).toFixed(3)}" data-duration="${(s.durationMs/1e3).toFixed(3)}" data-track-index="${s.trackIndex}" style="--kg-layer-x:${s.x}px;--kg-layer-y:${s.y}px;--kg-layer-w:${s.width}px;--kg-layer-h:${s.height}px;--kg-layer-fill:${s.fill};--kg-layer-stroke:${s.stroke};--kg-layer-radius:${s.radius}px;--kg-layer-opacity:${s.opacity};--kg-layer-start:${(s.startMs/1e3).toFixed(3)};--kg-layer-duration-inv:${(1e3/Math.max(1,s.durationMs)).toFixed(4)};--kg-layer-track:${s.trackIndex};">
          <article>
            <header>
              <strong>${R(s.label)}</strong>
              <span>${R(s.type)}</span>
            </header>
          </article>
        </li>`).join("");return`
    <section class="kg-design-video-stage" data-composition-id="knowgrph-design-agent-video" data-start="0" data-duration="${(f/1e3).toFixed(3)}" data-width="${b}" data-height="${M}" aria-label="Agent native design video stage">
      <header class="kg-design-video-header">
        <p>2D Renderer: Design</p>
        <h1>Agent-native design workspace</h1>
      </header>
      <ol class="kg-design-video-layers" aria-label="Rendered design layers">${e}
      </ol>
      <footer class="kg-design-video-footer">HTML + CSS + data -> MP4</footer>
    </section>`},rt=()=>`
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
`;function mt(t){const e=t.graphData||null,s=Q(e,t.selectedNodeIds),i=Z(s).map((k,x)=>({...k,trackIndex:x,startMs:Math.min(f-240,x*O),durationMs:Math.max(240,Math.min(U,f-x*O))})),o=tt(i),a=et(),r=st(i),p=it(i),d=nt(o),u=ot(),h=W({graphData:e,graphRevision:t.graphRevision,maxEntries:8}),n=z("design-agent-video",{graphData:e,graphRevision:t.graphRevision,graphSemanticKey:[h.semanticKey,Array.from(S(t.selectedNodeIds)).sort().join(","),i.map(k=>k.id).join(",")].filter(Boolean).join(":")}),c={html:at(i),css:rt(),data:{schema:A,semanticKey:n,composition:{id:"knowgrph-design-agent-video",durationMs:f,fps:D,width:b,height:M},workspaceFiles:a,compositions:r,assets:p,timelineTracks:o,timelineLanes:d,timelineTicks:u,layers:i,tokenSummary:h},durationMs:f,fps:D,width:b,height:M,engineHint:L.canvas2d},g={id:n,type:H,label:t.title||j,properties:{html:c.html,css:c.css,data_json:JSON.stringify(c.data),duration_ms:c.durationMs,fps:c.fps,width:c.width,height:c.height,engine_hint:c.engineHint}};return{schema:A,semanticKey:n,renderSpec:c,flowNode:g,manifest:{schema:A,semanticKey:n,layerCount:i.length,selectedLayerCount:S(t.selectedNodeIds).size,workspaceFiles:a,compositions:r,assets:p,timelineTracks:o,timelineLanes:d,timelineTicks:u,tokenSummary:h}}}export{mt as b,W as s};
