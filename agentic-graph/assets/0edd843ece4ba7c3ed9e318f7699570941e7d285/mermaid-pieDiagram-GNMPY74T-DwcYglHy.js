import{p as et}from"./mermaid-chunk-JWPE2WC7-5uJYJH5B.js";import{s as at}from"./mermaid-chunk-OYAV6JZA--ZardP5b.js";import{a as rt,p as it}from"./mermaid-chunk-7S6XSTFO-KJDeGpUa.js";import{N as ot,M as nt,O as st,P as lt,R as ct,Q as dt,g as pt,E as gt,S as ht,k as ft}from"./mermaid-chunk-DSNLSHJZ-C4QsjSrm.js";import{l as z}from"./mermaid-chunk-X3CZISLH-BCYoWsLM.js";import{_ as l}from"./mermaid-chunk-Y2CYZVJY-DM6BcmAw.js";import{p as mt}from"./mermaid-gitGraphDiagram-PDYL7XHY-hq68llTX.js";import{R as U,S as ut,T as vt}from"./d3-Bu_8eYpz.js";import"./monaco-ZdlrxFFV.js";import"./react-BhUDf-ol.js";import"./mermaid-chunk-2Q5K7J3B-BacGNAi0.js";var St=ft.pie,R={sections:new Map,showData:!1},T=R.sections,L=R.showData,xt=structuredClone(St),wt=l(()=>structuredClone(xt),"getConfig"),Ct=l(()=>{T=new Map,L=R.showData,ht()},"clear"),$t=l(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(t)||(T.set(t,a),z.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),Dt=l(()=>T,"getSections"),yt=l(t=>{L=t},"setShowData"),Tt=l(()=>L,"getShowData"),Q={getConfig:wt,clear:Ct,setDiagramTitle:dt,getDiagramTitle:ct,setAccTitle:lt,getAccTitle:st,setAccDescription:nt,getAccDescription:ot,addSection:$t,getSections:Dt,setShowData:yt,getShowData:Tt},bt=l((t,a)=>{et(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),At={parse:l(async t=>{const a=await mt("pie",t);z.debug(a),bt(a,Q)},"parse")},kt=l(t=>`
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
`,"getStyles"),_t=kt,Et=l(t=>{const a=[...t.values()].reduce((n,u)=>n+u,0),M=[...t.entries()].map(([n,u])=>({label:n,value:u})).filter(n=>n.value/a*100>=1);return vt().value(n=>n.value).sort(null)(M)},"createPieArcs"),zt=l((t,a,M,O)=>{var I;z.debug(`rendering pie chart
`+t);const n=O.db,u=pt(),h=rt(n.getConfig(),u.pie),P=40,i=18,c=4,C=450,S=C,b=at(a),$=b.append("g");$.attr("transform","translate("+S/2+","+C/2+")");const{themeVariables:o}=u;let[W]=it(o.pieOuterStrokeWidth);W??(W=2);const V=h.legendPosition,F=h.textPosition,X=h.donutHole>0&&h.donutHole<=.9?h.donutHole:0,f=Math.min(S,C)/2-P,Z=U().innerRadius(X*f).outerRadius(f),j=U().innerRadius(f*F).outerRadius(f*F),x=$.append("g");x.append("circle").attr("cx",0).attr("cy",0).attr("r",f+W/2).attr("class","pieOuterCircle");const D=n.getSections(),q=Et(D),J=[o.pie1,o.pie2,o.pie3,o.pie4,o.pie5,o.pie6,o.pie7,o.pie8,o.pie9,o.pie10,o.pie11,o.pie12];let A=0;D.forEach(e=>{A+=e});const H=q.filter(e=>(e.data.value/A*100).toFixed(0)!=="0"),k=ut(J).domain([...D.keys()]);x.selectAll("mySlices").data(H).enter().append("path").attr("d",Z).attr("fill",e=>k(e.data.label)).attr("class",e=>{let r="pieCircle";return h.highlightSlice==="hover"?r+=" highlightedOnHover":h.highlightSlice===e.data.label&&(r+=" highlighted"),r}),x.selectAll("mySlices").data(H).enter().append("text").text(e=>(e.data.value/A*100).toFixed(0)+"%").attr("transform",e=>"translate("+j.centroid(e)+")").style("text-anchor","middle").attr("class","slice");const K=$.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),w=[...D.entries()].map(([e,r])=>({label:e,value:r})),m=$.selectAll(".legend").data(w).enter().append("g").attr("class","legend");m.append("rect").attr("width",i).attr("height",i).style("fill",e=>k(e.label)).style("stroke",e=>k(e.label)),m.append("text").attr("x",i+c).attr("y",i-c).text(e=>n.getShowData()?`${e.label} [${e.value}]`:e.label);const v=Math.max(...m.selectAll("text").nodes().map(e=>(e==null?void 0:e.getBoundingClientRect().width)??0));let y=C,_=S+P;const s=i+c,E=w.length*s;switch(V){case"center":m.attr("transform",(e,r)=>{const d=s*w.length/2,p=-v/2-(i+c),g=r*s-d;return"translate("+p+","+g+")"});break;case"top":y+=E,m.attr("transform",(e,r)=>{const d=f,p=-v/2-(i+c),g=r*s-d;return`translate(${p}, ${g})`}),x.attr("transform",()=>`translate(0, ${E+s})`);break;case"bottom":y+=E,m.attr("transform",(e,r)=>{const d=-f-s,p=-v/2-(i+c),g=r*s-d;return"translate("+p+","+g+")"});break;case"left":_+=i+c+v,m.attr("transform",(e,r)=>{const d=s*w.length/2,p=-f-(i+c),g=r*s-d;return"translate("+p+","+g+")"}),x.attr("transform",()=>`translate(${v+i+c}, 0)`);break;case"right":default:_+=i+c+v,m.attr("transform",(e,r)=>{const d=s*w.length/2,p=12*i,g=r*s-d;return"translate("+p+","+g+")"});break}const G=((I=K.node())==null?void 0:I.getBoundingClientRect().width)??0,Y=S/2-G/2,tt=S/2+G/2,N=Math.min(0,Y),B=Math.max(_,tt)-N;b.attr("viewBox",`${N} 0 ${B} ${y}`),gt(b,y,B,h.useMaxWidth)},"draw"),Rt={draw:zt},Qt={parser:At,db:Q,renderer:Rt,styles:_t};export{Qt as diagram};
