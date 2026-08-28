import{p as et}from"./mermaid-chunk-JWPE2WC7-5uJYJH5B.js";import{s as at}from"./mermaid-chunk-CLGD4ZFX-mIjAW5P1.js";import{a as rt,p as it}from"./mermaid-chunk-75Z2AOVW-Cs4IXvng.js";import{L as ot,K as nt,M as st,N as lt,R as ct,Q as dt,g as pt,E as gt,S as ht,k as ft}from"./mermaid-chunk-DU6HZSFF-CnlWBMVA.js";import{l as z}from"./mermaid-chunk-X3CZISLH-BCYoWsLM.js";import{_ as l}from"./mermaid-chunk-Y2CYZVJY-DM6BcmAw.js";import{p as mt}from"./mermaid-gitGraphDiagram-WWUBYQGX-B0FC5lxj.js";import{R as U,S as ut,T as vt}from"./d3-DuXkZ2Jo.js";import"./monaco-BSJPxBoT.js";import"./react-BhUDf-ol.js";import"./mermaid-chunk-2Q5K7J3B-BacGNAi0.js";var St=ft.pie,R={sections:new Map,showData:!1},T=R.sections,L=R.showData,xt=structuredClone(St),wt=l(()=>structuredClone(xt),"getConfig"),Ct=l(()=>{T=new Map,L=R.showData,ht()},"clear"),$t=l(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(t)||(T.set(t,a),z.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),Dt=l(()=>T,"getSections"),yt=l(t=>{L=t},"setShowData"),Tt=l(()=>L,"getShowData"),K={getConfig:wt,clear:Ct,setDiagramTitle:dt,getDiagramTitle:ct,setAccTitle:lt,getAccTitle:st,setAccDescription:nt,getAccDescription:ot,addSection:$t,getSections:Dt,setShowData:yt,getShowData:Tt},bt=l((t,a)=>{et(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),At={parse:l(async t=>{const a=await mt("pie",t);z.debug(a),bt(a,K)},"parse")},kt=l(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),_t=kt,Et=l(t=>{const a=[...t.values()].reduce((n,u)=>n+u,0),M=[...t.entries()].map(([n,u])=>({label:n,value:u})).filter(n=>n.value/a*100>=1);return vt().value(n=>n.value).sort(null)(M)},"createPieArcs"),zt=l((t,a,M,W)=>{var I;z.debug(`rendering pie chart
`+t);const n=W.db,u=pt(),h=rt(n.getConfig(),u.pie),F=40,i=18,c=4,C=450,S=C,b=at(a),$=b.append("g");$.attr("transform","translate("+S/2+","+C/2+")");const{themeVariables:o}=u;let[H]=it(o.pieOuterStrokeWidth);H??(H=2);const Q=h.legendPosition,O=h.textPosition,V=h.donutHole>0&&h.donutHole<=.9?h.donutHole:0,f=Math.min(S,C)/2-F,X=U().innerRadius(V*f).outerRadius(f),Z=U().innerRadius(f*O).outerRadius(f*O),x=$.append("g");x.append("circle").attr("cx",0).attr("cy",0).attr("r",f+H/2).attr("class","pieOuterCircle");const D=n.getSections(),j=Et(D),q=[o.pie1,o.pie2,o.pie3,o.pie4,o.pie5,o.pie6,o.pie7,o.pie8,o.pie9,o.pie10,o.pie11,o.pie12];let A=0;D.forEach(e=>{A+=e});const P=j.filter(e=>(e.data.value/A*100).toFixed(0)!=="0"),k=ut(q).domain([...D.keys()]);x.selectAll("mySlices").data(P).enter().append("path").attr("d",X).attr("fill",e=>k(e.data.label)).attr("class",e=>{let r="pieCircle";return h.highlightSlice==="hover"?r+=" highlightedOnHover":h.highlightSlice===e.data.label&&(r+=" highlighted"),r}),x.selectAll("mySlices").data(P).enter().append("text").text(e=>(e.data.value/A*100).toFixed(0)+"%").attr("transform",e=>"translate("+Z.centroid(e)+")").style("text-anchor","middle").attr("class","slice");const J=$.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),w=[...D.entries()].map(([e,r])=>({label:e,value:r})),m=$.selectAll(".legend").data(w).enter().append("g").attr("class","legend");m.append("rect").attr("width",i).attr("height",i).style("fill",e=>k(e.label)).style("stroke",e=>k(e.label)),m.append("text").attr("x",i+c).attr("y",i-c).text(e=>n.getShowData()?`${e.label} [${e.value}]`:e.label);const v=Math.max(...m.selectAll("text").nodes().map(e=>(e==null?void 0:e.getBoundingClientRect().width)??0));let y=C,_=S+F;const s=i+c,E=w.length*s;switch(Q){case"center":m.attr("transform",(e,r)=>{const d=s*w.length/2,p=-v/2-(i+c),g=r*s-d;return"translate("+p+","+g+")"});break;case"top":y+=E,m.attr("transform",(e,r)=>{const d=f,p=-v/2-(i+c),g=r*s-d;return`translate(${p}, ${g})`}),x.attr("transform",()=>`translate(0, ${E+s})`);break;case"bottom":y+=E,m.attr("transform",(e,r)=>{const d=-f-s,p=-v/2-(i+c),g=r*s-d;return"translate("+p+","+g+")"});break;case"left":_+=i+c+v,m.attr("transform",(e,r)=>{const d=s*w.length/2,p=-f-(i+c),g=r*s-d;return"translate("+p+","+g+")"}),x.attr("transform",()=>`translate(${v+i+c}, 0)`);break;case"right":default:_+=i+c+v,m.attr("transform",(e,r)=>{const d=s*w.length/2,p=12*i,g=r*s-d;return"translate("+p+","+g+")"});break}const G=((I=J.node())==null?void 0:I.getBoundingClientRect().width)??0,Y=S/2-G/2,tt=S/2+G/2,N=Math.min(0,Y),B=Math.max(_,tt)-N;b.attr("viewBox",`${N} 0 ${B} ${y}`),gt(b,y,B,h.useMaxWidth)},"draw"),Rt={draw:zt},Kt={parser:At,db:K,renderer:Rt,styles:_t};export{Kt as diagram};
