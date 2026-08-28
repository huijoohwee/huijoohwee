import{p as B}from"./mermaid-chunk-JWPE2WC7-5uJYJH5B.js";import{s as C}from"./mermaid-chunk-CLGD4ZFX-mIjAW5P1.js";import{a as u}from"./mermaid-chunk-75Z2AOVW-Cs4IXvng.js";import{E as S,N as D,M as T,Q as E,R as P,L as z,K as F,a as A,k as W,S as _}from"./mermaid-chunk-DU6HZSFF-CnlWBMVA.js";import{l as w}from"./mermaid-chunk-X3CZISLH-BCYoWsLM.js";import{_ as m}from"./mermaid-chunk-Y2CYZVJY-DM6BcmAw.js";import{p as N}from"./mermaid-gitGraphDiagram-WWUBYQGX-B0FC5lxj.js";import"./d3-DuXkZ2Jo.js";import"./monaco-BSJPxBoT.js";import"./react-BhUDf-ol.js";import"./mermaid-chunk-2Q5K7J3B-BacGNAi0.js";var L=W.packet,b,v=(b=class{constructor(){this.packet=[],this.setAccTitle=D,this.getAccTitle=T,this.setDiagramTitle=E,this.getDiagramTitle=P,this.getAccDescription=z,this.setAccDescription=F}getConfig(){const t=u({...L,...A().packet});return t.showBits&&(t.paddingY+=10),t}getPacket(){return this.packet}pushWord(t){t.length>0&&this.packet.push(t)}clear(){_(),this.packet=[]}},m(b,"PacketDB"),b),M=1e4,Y=m((e,t)=>{B(e,t);let o=-1,r=[],n=1;const{bitsPerRow:l}=t.getConfig();for(let{start:a,end:i,bits:d,label:c}of e.blocks){if(a!==void 0&&i!==void 0&&i<a)throw new Error(`Packet block ${a} - ${i} is invalid. End must be greater than start.`);if(a??(a=o+1),a!==o+1)throw new Error(`Packet block ${a} - ${i??a} is not contiguous. It should start from ${o+1}.`);if(d===0)throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(i??(i=a+(d??1)-1),d??(d=i-a+1),o=i,w.debug(`Packet block ${a} - ${o} with label ${c}`);r.length<=l+1&&t.getPacket().length<M;){const[p,s]=I({start:a,end:i,bits:d,label:c},n,l);if(r.push(p),p.end+1===n*l&&(t.pushWord(r),r=[],n++),!s)break;({start:a,end:i,bits:d,label:c}=s)}}t.pushWord(r)},"populate"),I=m((e,t,o)=>{if(e.start===void 0)throw new Error("start should have been set during first phase");if(e.end===void 0)throw new Error("end should have been set during first phase");if(e.start>e.end)throw new Error(`Block start ${e.start} is greater than block end ${e.end}.`);if(e.end+1<=t*o)return[e,void 0];const r=t*o-1,n=t*o;return[{start:e.start,end:r,label:e.label,bits:r-e.start},{start:n,end:e.end,label:e.label,bits:e.end-n}]},"getNextFittingBlock"),x={parser:{yy:void 0},parse:m(async e=>{var r;const t=await N("packet",e),o=(r=x.parser)==null?void 0:r.yy;if(!(o instanceof v))throw new Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");w.debug(t),Y(t,o)},"parse")},K=m((e,t,o,r)=>{const n=r.db,l=n.getConfig(),{rowHeight:a,paddingY:i,bitWidth:d,bitsPerRow:c}=l,p=n.getPacket(),s=n.getDiagramTitle(),h=a+i,g=h*(p.length+1)-(s?0:a),f=d*c+2,k=C(t);k.attr("viewBox",`0 0 ${f} ${g}`),S(k,g,f,l.useMaxWidth);for(const[y,$]of p.entries())O(k,$,y,l);k.append("text").text(s).attr("x",f/2).attr("y",g-h/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),O=m((e,t,o,{rowHeight:r,paddingX:n,paddingY:l,bitWidth:a,bitsPerRow:i,showBits:d})=>{const c=e.append("g"),p=o*(r+l)+l;for(const s of t){const h=s.start%i*a+1,g=(s.end-s.start+1)*a-n;if(c.append("rect").attr("x",h).attr("y",p).attr("width",g).attr("height",r).attr("class","packetBlock"),c.append("text").attr("x",h+g/2).attr("y",p+r/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(s.label),!d)continue;const f=s.end===s.start,k=p-2;c.append("text").attr("x",h+(f?g/2:0)).attr("y",k).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",f?"middle":"start").text(s.start),f||c.append("text").attr("x",h+g).attr("y",k).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(s.end)}},"drawWord"),R={draw:K},j={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},G=m(({packet:e}={})=>{const t=u(j,e);return`
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`},"styles"),rt={parser:x,get db(){return new v},renderer:R,styles:G};export{rt as diagram};
