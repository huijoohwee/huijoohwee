import{_ as l,s as k,g as I,q as R,p as E,a as F,b as _,I as D,y as G,E as f,F as C,G as P,l as z,M as V}from"./mermaid.core-BGj1PvCs.js";import{p as W}from"./chunk-4BX2VUAB-DjC2HwdQ.js";import{p as B}from"./treemap-KMMF4GRG-BRJH-LBW.js";import"./canvas-3d-CmrngFRP.js";import"./react-Cpd4151S.js";import"./elk-api-DIMSqasN.js";import"./canvas-runtime-DAMiPXbo.js";import"./canvas-3d-shell-Z4zQVrUw.js";import"./design-canvas-ezbizOgQ.js";import"./d3-wIndiOZE.js";import"./geospatial-BOqQEtCT.js";import"./markdown-parser-BpOAmY0Z.js";import"./markdown-it-BX_wUld1.js";import"./markdown-ast-Cp1T4cP6.js";import"./ui-Cg8oVBSX.js";import"./graph-canvas-CgN8lZuY.js";import"./canvas-zoom-DFHTOp9H.js";import"./canvas-2d-CXjCMhmD.js";import"./schema-yxvpBaFC.js";import"./markdown-spqempoy.js";import"./workspace-main-BPK0pxRp.js";import"./flow-editor-ui-ChRZxtIf.js";import"./flow-editor-canvas-eM3D6YiO.js";import"./flow-canvas-core-DIn6ptcA.js";import"./workspace-fs-CKVCqbsM.js";import"./workspace-source-files-Cb5V5X9y.js";import"./panel-flow-editor-MK1n58GY.js";import"./canvas-shell-DMJYkVxp.js";import"./panels-B6MH_jKo.js";import"./schema-editor-CRQhF_AB.js";import"./toolbar-ui-BWUFbR24.js";import"./markdown-code-Dc8K5AAq.js";import"./highlightjs-Cd02PMP8.js";import"./markdown-preview-D62HXoCR.js";import"./toolbar-CIge7FQ6.js";import"./graph-canvas-root-a-_rlnHp.js";import"./toolbar-launch-BHVSursj.js";import"./settings-view-hvT6AehK.js";import"./settings-registry-CzY9m6PH.js";import"./settings-C7E2bFK7.js";import"./canvas-3d-scene-DIwYbZlT.js";import"./canvas-3d-visuals-Dk0ABQpq.js";import"./three-core-CI_PzYtU.js";import"./three-renderers-COZi_ocn.js";import"./three-textures-D4KpcNGc.js";import"./three-scene-core-Dxf37R84.js";import"./three-math-Cn_OgFNR.js";import"./three-extras-BrFkphqG.js";import"./three-objects-yoth8-Fa.js";import"./three-materials-CsgPCM-x.js";import"./three-geometries-CNb6CxmU.js";import"./three-lights-Bos6o4Yh.js";import"./three-examples-DwdOs8T0.js";import"./three-fiber-WjHjcfb-.js";import"./toolbar-imports-YanQVZmZ.js";import"./workspace-actions-DrbDEw9D.js";import"./workspace-runtime-cy-Cw5WO.js";import"./workspace-ui-CO5q3BMl.js";import"./workspace-DSy_cpIU.js";import"./panel-preview-CsyV7eDw.js";import"./panel-graph-fields-Cd_7VS5M.js";import"./spotlight-5NBq4khL.js";import"./toolbar-menu-DKX_jgOw.js";import"./flow-canvas-B-0dF9Lz.js";import"./min-wHClJwRh.js";import"./_baseUniq-BApWG1zY.js";var h={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},w={axes:[],curves:[],options:h},g=structuredClone(w),H=P.radar,j=l(()=>f({...H,...C().radar}),"getConfig"),b=l(()=>g.axes,"getAxes"),q=l(()=>g.curves,"getCurves"),N=l(()=>g.options,"getOptions"),U=l(e=>{g.axes=e.map(t=>({name:t.name,label:t.label??t.name}))},"setAxes"),X=l(e=>{g.curves=e.map(t=>({name:t.name,label:t.label??t.name,entries:Y(t.entries)}))},"setCurves"),Y=l(e=>{if(e[0].axis==null)return e.map(r=>r.value);const t=b();if(t.length===0)throw new Error("Axes must be populated before curves for reference entries");return t.map(r=>{const a=e.find(o=>{var s;return((s=o.axis)==null?void 0:s.$refText)===r.name});if(a===void 0)throw new Error("Missing entry for axis "+r.label);return a.value})},"computeCurveEntries"),Z=l(e=>{var r,a,o,s,n;const t=e.reduce((i,p)=>(i[p.name]=p,i),{});g.options={showLegend:((r=t.showLegend)==null?void 0:r.value)??h.showLegend,ticks:((a=t.ticks)==null?void 0:a.value)??h.ticks,max:((o=t.max)==null?void 0:o.value)??h.max,min:((s=t.min)==null?void 0:s.value)??h.min,graticule:((n=t.graticule)==null?void 0:n.value)??h.graticule}},"setOptions"),J=l(()=>{G(),g=structuredClone(w)},"clear"),$={getAxes:b,getCurves:q,getOptions:N,setAxes:U,setCurves:X,setOptions:Z,getConfig:j,clear:J,setAccTitle:_,getAccTitle:F,setDiagramTitle:E,getDiagramTitle:R,getAccDescription:I,setAccDescription:k},K=l(e=>{W(e,$);const{axes:t,curves:r,options:a}=e;$.setAxes(t),$.setCurves(r),$.setOptions(a)},"populate"),Q={parse:l(async e=>{const t=await B("radar",e);z.debug(t),K(t)},"parse")},tt=l((e,t,r,a)=>{const o=a.db,s=o.getAxes(),n=o.getCurves(),i=o.getOptions(),p=o.getConfig(),m=o.getDiagramTitle(),d=D(t),c=rt(d,p),u=i.max??Math.max(...n.map(y=>Math.max(...y.entries))),x=i.min,v=Math.min(p.width,p.height)/2;et(c,s,v,i.ticks,i.graticule),at(c,s,v,p),M(c,s,n,x,u,i.graticule,p),T(c,n,i.showLegend,p),c.append("text").attr("class","radarTitle").text(m).attr("x",0).attr("y",-p.height/2-p.marginTop)},"draw"),rt=l((e,t)=>{const r=t.width+t.marginLeft+t.marginRight,a=t.height+t.marginTop+t.marginBottom,o={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return e.attr("viewbox",`0 0 ${r} ${a}`).attr("width",r).attr("height",a),e.append("g").attr("transform",`translate(${o.x}, ${o.y})`)},"drawFrame"),et=l((e,t,r,a,o)=>{if(o==="circle")for(let s=0;s<a;s++){const n=r*(s+1)/a;e.append("circle").attr("r",n).attr("class","radarGraticule")}else if(o==="polygon"){const s=t.length;for(let n=0;n<a;n++){const i=r*(n+1)/a,p=t.map((m,d)=>{const c=2*d*Math.PI/s-Math.PI/2,u=i*Math.cos(c),x=i*Math.sin(c);return`${u},${x}`}).join(" ");e.append("polygon").attr("points",p).attr("class","radarGraticule")}}},"drawGraticule"),at=l((e,t,r,a)=>{const o=t.length;for(let s=0;s<o;s++){const n=t[s].label,i=2*s*Math.PI/o-Math.PI/2;e.append("line").attr("x1",0).attr("y1",0).attr("x2",r*a.axisScaleFactor*Math.cos(i)).attr("y2",r*a.axisScaleFactor*Math.sin(i)).attr("class","radarAxisLine"),e.append("text").text(n).attr("x",r*a.axisLabelFactor*Math.cos(i)).attr("y",r*a.axisLabelFactor*Math.sin(i)).attr("class","radarAxisLabel")}},"drawAxes");function M(e,t,r,a,o,s,n){const i=t.length,p=Math.min(n.width,n.height)/2;r.forEach((m,d)=>{if(m.entries.length!==i)return;const c=m.entries.map((u,x)=>{const v=2*Math.PI*x/i-Math.PI/2,y=A(u,a,o,p),O=y*Math.cos(v),S=y*Math.sin(v);return{x:O,y:S}});s==="circle"?e.append("path").attr("d",L(c,n.curveTension)).attr("class",`radarCurve-${d}`):s==="polygon"&&e.append("polygon").attr("points",c.map(u=>`${u.x},${u.y}`).join(" ")).attr("class",`radarCurve-${d}`)})}l(M,"drawCurves");function A(e,t,r,a){const o=Math.min(Math.max(e,t),r);return a*(o-t)/(r-t)}l(A,"relativeRadius");function L(e,t){const r=e.length;let a=`M${e[0].x},${e[0].y}`;for(let o=0;o<r;o++){const s=e[(o-1+r)%r],n=e[o],i=e[(o+1)%r],p=e[(o+2)%r],m={x:n.x+(i.x-s.x)*t,y:n.y+(i.y-s.y)*t},d={x:i.x-(p.x-n.x)*t,y:i.y-(p.y-n.y)*t};a+=` C${m.x},${m.y} ${d.x},${d.y} ${i.x},${i.y}`}return`${a} Z`}l(L,"closedRoundCurve");function T(e,t,r,a){if(!r)return;const o=(a.width/2+a.marginRight)*3/4,s=-(a.height/2+a.marginTop)*3/4,n=20;t.forEach((i,p)=>{const m=e.append("g").attr("transform",`translate(${o}, ${s+p*n})`);m.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${p}`),m.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(i.label)})}l(T,"drawLegend");var ot={draw:tt},it=l((e,t)=>{let r="";for(let a=0;a<e.THEME_COLOR_LIMIT;a++){const o=e[`cScale${a}`];r+=`
		.radarCurve-${a} {
			color: ${o};
			fill: ${o};
			fill-opacity: ${t.curveOpacity};
			stroke: ${o};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${a} {
			fill: ${o};
			fill-opacity: ${t.curveOpacity};
			stroke: ${o};
		}
		`}return r},"genIndexStyles"),st=l(e=>{const t=V(),r=C(),a=f(t,r.themeVariables),o=f(a.radar,e);return{themeVariables:a,radarOptions:o}},"buildRadarStyleOptions"),nt=l(({radar:e}={})=>{const{themeVariables:t,radarOptions:r}=st(e);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${r.axisColor};
		stroke-width: ${r.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${r.axisLabelFontSize}px;
		color: ${r.axisColor};
	}
	.radarGraticule {
		fill: ${r.graticuleColor};
		fill-opacity: ${r.graticuleOpacity};
		stroke: ${r.graticuleColor};
		stroke-width: ${r.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${r.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${it(t,r)}
	`},"styles"),fr={parser:Q,db:$,renderer:ot,styles:nt};export{fr as diagram};
