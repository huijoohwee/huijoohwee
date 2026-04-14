import{_ as s,W as V,V as U,X as K,Y as X,a8 as Y,a7 as Z,l as w,L as j,z as q,x as H,av as J,y as Q,K as ee,al as te,an as ae}from"./mermaid-core-runtime-DF6OXriJ.js";import{L as re}from"./mermaid-architecture-CLaRVGsq.js";import{V as F,x as ie,W as se}from"./d3-D-lDTyUD.js";import"./mermaid-block-k2j4EbVs.js";import"./mermaid-C3S7BIsm.js";import"./elk-CVD44F0V.js";import"./mermaid-c4-C7PKh-BJ.js";var le=te.pie,D={sections:new Map,showData:!1},g=D.sections,C=D.showData,oe=structuredClone(le),ne=s(()=>structuredClone(oe),"getConfig"),ce=s(()=>{g=new Map,C=D.showData,ee()},"clear"),pe=s(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);g.has(e)||(g.set(e,a),w.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),de=s(()=>g,"getSections"),ge=s(e=>{C=e},"setShowData"),ue=s(()=>C,"getShowData"),G={getConfig:ne,clear:ce,setDiagramTitle:Z,getDiagramTitle:Y,setAccTitle:X,getAccTitle:K,setAccDescription:U,getAccDescription:V,addSection:pe,getSections:de,setShowData:ge,getShowData:ue},fe=s((e,a)=>{ae(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),he={parse:s(async e=>{const a=await re("pie",e);w.debug(a),fe(a,G)},"parse")},me=s(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),ve=me,Se=s(e=>{const a=[...e.values()].reduce((r,l)=>r+l,0),y=[...e.entries()].map(([r,l])=>({label:r,value:l})).filter(r=>r.value/a*100>=1).sort((r,l)=>l.value-r.value);return se().value(r=>r.value)(y)},"createPieArcs"),xe=s((e,a,y,$)=>{w.debug(`rendering pie chart
`+e);const r=$.db,l=j(),T=q(r.getConfig(),l.pie),A=40,o=18,p=4,c=450,u=c,f=H(a),n=f.append("g");n.attr("transform","translate("+u/2+","+c/2+")");const{themeVariables:i}=l;let[_]=J(i.pieOuterStrokeWidth);_??(_=2);const b=T.textPosition,d=Math.min(u,c)/2-A,L=F().innerRadius(0).outerRadius(d),M=F().innerRadius(d*b).outerRadius(d*b);n.append("circle").attr("cx",0).attr("cy",0).attr("r",d+_/2).attr("class","pieOuterCircle");const h=r.getSections(),O=Se(h),P=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let m=0;h.forEach(t=>{m+=t});const E=O.filter(t=>(t.data.value/m*100).toFixed(0)!=="0"),v=ie(P);n.selectAll("mySlices").data(E).enter().append("path").attr("d",L).attr("fill",t=>v(t.data.label)).attr("class","pieCircle"),n.selectAll("mySlices").data(E).enter().append("text").text(t=>(t.data.value/m*100).toFixed(0)+"%").attr("transform",t=>"translate("+M.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),n.append("text").text(r.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const k=[...h.entries()].map(([t,x])=>({label:t,value:x})),S=n.selectAll(".legend").data(k).enter().append("g").attr("class","legend").attr("transform",(t,x)=>{const W=o+p,I=W*k.length/2,N=12*o,B=x*W-I;return"translate("+N+","+B+")"});S.append("rect").attr("width",o).attr("height",o).style("fill",t=>v(t.label)).style("stroke",t=>v(t.label)),S.append("text").attr("x",o+p).attr("y",o-p).text(t=>r.getShowData()?`${t.label} [${t.value}]`:t.label);const R=Math.max(...S.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),z=u+A+o+p+R;f.attr("viewBox",`0 0 ${z} ${c}`),Q(f,c,z,T.useMaxWidth)},"draw"),we={draw:xe},be={parser:he,db:G,renderer:we,styles:ve};export{be as diagram};
