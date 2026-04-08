var xw=Object.defineProperty;var Be=(n,e)=>()=>(n&&(e=n(n=0)),e);var im=(n,e)=>{for(var t in e)xw(n,t,{get:e[t],enumerable:!0})};var mt,Ml,kt,ty,ny,br=Be(()=>{mt=()=>new Map,Ml=n=>{let e=mt();return n.forEach((t,i)=>{e.set(i,t)}),e},kt=(n,e,t)=>{let i=n.get(e);return i===void 0&&n.set(e,i=t()),i},ty=(n,e)=>{let t=[];for(let[i,r]of n)t.push(e(r,i));return t},ny=(n,e)=>{for(let[t,i]of n)if(e(i,t))return!0;return!1}});var Sn,aa=Be(()=>{Sn=()=>new Set});var Sl,iy,Hn,Tl,ca,ry,vi,Us=Be(()=>{Sl=n=>n[n.length-1],iy=(n,e)=>{for(let t=0;t<e.length;t++)n.push(e[t])},Hn=Array.from,Tl=(n,e)=>{for(let t=0;t<n.length;t++)if(!e(n[t],t,n))return!1;return!0},ca=(n,e)=>{for(let t=0;t<n.length;t++)if(e(n[t],t,n))return!0;return!1},ry=(n,e)=>{let t=new Array(n);for(let i=0;i<n;i++)t[i]=e(i,t);return t},vi=Array.isArray});var Xi,Al,Rl=Be(()=>{br();aa();Us();Xi=class{constructor(){this._observers=mt()}on(e,t){return kt(this._observers,e,Sn).add(t),t}once(e,t){let i=(...r)=>{this.off(e,i),t(...r)};this.on(e,i)}off(e,t){let i=this._observers.get(e);i!==void 0&&(i.delete(t),i.size===0&&this._observers.delete(e))}emit(e,t){return Hn((this._observers.get(e)||mt()).values()).forEach(i=>i(...t))}destroy(){this._observers=mt()}},Al=class{constructor(){this._observers=mt()}on(e,t){kt(this._observers,e,Sn).add(t)}once(e,t){let i=(...r)=>{this.off(e,i),t(...r)};this.on(e,i)}off(e,t){let i=this._observers.get(e);i!==void 0&&(i.delete(t),i.size===0&&this._observers.delete(e))}emit(e,t){return Hn((this._observers.get(e)||mt()).values()).forEach(i=>i(...t))}destroy(){this._observers=mt()}}});var Ht,Mr,Fs,_i,pL,sy,Ll,Yi=Be(()=>{Ht=Math.floor,Mr=Math.abs,Fs=(n,e)=>n<e?n:e,_i=(n,e)=>n>e?n:e,pL=Number.isNaN,sy=Math.pow,Ll=n=>n!==0?n<0:1/n<0});var Os,nf,mL,oy,gL,yL,Cl=Be(()=>{Yi();Os=Number.MAX_SAFE_INTEGER,nf=Number.MIN_SAFE_INTEGER,mL=1<<31,oy=Number.isInteger||(n=>typeof n=="number"&&isFinite(n)&&Ht(n)===n),gL=Number.isNaN,yL=Number.parseInt});var ha,m1,xL,g1,y1,x1,w1,sf,v1,zs,_1,ay,Hs,Il,ji=Be(()=>{Us();ha=String.fromCharCode,m1=String.fromCodePoint,xL=ha(65535),g1=n=>n.toLowerCase(),y1=/^\s*/g,x1=n=>n.replace(y1,""),w1=/([A-Z])/g,sf=(n,e)=>x1(n.replace(w1,t=>`${e}${g1(t)}`)),v1=n=>{let e=unescape(encodeURIComponent(n)),t=e.length,i=new Uint8Array(t);for(let r=0;r<t;r++)i[r]=e.codePointAt(r);return i},zs=typeof TextEncoder<"u"?new TextEncoder:null,_1=n=>zs.encode(n),ay=zs?_1:v1,Hs=typeof TextDecoder>"u"?null:new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0});Hs&&Hs.decode(new Uint8Array).length===1&&(Hs=null);Il=(n,e)=>ry(e,()=>n).join("")});var Sr,xt,Pl,Ke,b1,Nt,Xs,he,da,of,M1,E1,S1,Jn,dy,Ys,ht,af,T1,A1,R1,ly,L1,Ws,ua,hy,Tr,uy,qs,Dl,fa=Be(()=>{Yi();Cl();ji();Us();Sr=class{constructor(){this.cpos=0,this.cbuf=new Uint8Array(100),this.bufs=[]}},xt=()=>new Sr,Pl=n=>{let e=n.cpos;for(let t=0;t<n.bufs.length;t++)e+=n.bufs[t].length;return e},Ke=n=>{let e=new Uint8Array(Pl(n)),t=0;for(let i=0;i<n.bufs.length;i++){let r=n.bufs[i];e.set(r,t),t+=r.length}return e.set(new Uint8Array(n.cbuf.buffer,0,n.cpos),t),e},b1=(n,e)=>{let t=n.cbuf.length;t-n.cpos<e&&(n.bufs.push(new Uint8Array(n.cbuf.buffer,0,n.cpos)),n.cbuf=new Uint8Array(_i(t,e)*2),n.cpos=0)},Nt=(n,e)=>{let t=n.cbuf.length;n.cpos===t&&(n.bufs.push(n.cbuf),n.cbuf=new Uint8Array(t*2),n.cpos=0),n.cbuf[n.cpos++]=e},Xs=Nt,he=(n,e)=>{for(;e>127;)Nt(n,128|127&e),e=Ht(e/128);Nt(n,127&e)},da=(n,e)=>{let t=Ll(e);for(t&&(e=-e),Nt(n,(e>63?128:0)|(t?64:0)|63&e),e=Ht(e/64);e>0;)Nt(n,(e>127?128:0)|127&e),e=Ht(e/128)},of=new Uint8Array(3e4),M1=of.length/3,E1=(n,e)=>{if(e.length<M1){let t=zs.encodeInto(e,of).written||0;he(n,t);for(let i=0;i<t;i++)Nt(n,of[i])}else ht(n,ay(e))},S1=(n,e)=>{let t=unescape(encodeURIComponent(e)),i=t.length;he(n,i);for(let r=0;r<i;r++)Nt(n,t.codePointAt(r))},Jn=zs&&zs.encodeInto?E1:S1,dy=(n,e)=>Ys(n,Ke(e)),Ys=(n,e)=>{let t=n.cbuf.length,i=n.cpos,r=Fs(t-i,e.length),s=e.length-r;n.cbuf.set(e.subarray(0,r),i),n.cpos+=r,s>0&&(n.bufs.push(n.cbuf),n.cbuf=new Uint8Array(_i(t*2,s)),n.cbuf.set(e.subarray(r)),n.cpos=s)},ht=(n,e)=>{he(n,e.byteLength),Ys(n,e)},af=(n,e)=>{b1(n,e);let t=new DataView(n.cbuf.buffer,n.cpos,e);return n.cpos+=e,t},T1=(n,e)=>af(n,4).setFloat32(0,e,!1),A1=(n,e)=>af(n,8).setFloat64(0,e,!1),R1=(n,e)=>af(n,8).setBigInt64(0,e,!1),ly=new DataView(new ArrayBuffer(4)),L1=n=>(ly.setFloat32(0,n),ly.getFloat32(0)===n),Ws=(n,e)=>{switch(typeof e){case"string":Nt(n,119),Jn(n,e);break;case"number":oy(e)&&Mr(e)<=2147483647?(Nt(n,125),da(n,e)):L1(e)?(Nt(n,124),T1(n,e)):(Nt(n,123),A1(n,e));break;case"bigint":Nt(n,122),R1(n,e);break;case"object":if(e===null)Nt(n,126);else if(vi(e)){Nt(n,117),he(n,e.length);for(let t=0;t<e.length;t++)Ws(n,e[t])}else if(e instanceof Uint8Array)Nt(n,116),ht(n,e);else{Nt(n,118);let t=Object.keys(e);he(n,t.length);for(let i=0;i<t.length;i++){let r=t[i];Jn(n,r),Ws(n,e[r])}}break;case"boolean":Nt(n,e?120:121);break;default:Nt(n,127)}},ua=class extends Sr{constructor(e){super(),this.w=e,this.s=null,this.count=0}write(e){this.s===e?this.count++:(this.count>0&&he(this,this.count-1),this.count=1,this.w(this,e),this.s=e)}},hy=n=>{n.count>0&&(da(n.encoder,n.count===1?n.s:-n.s),n.count>1&&he(n.encoder,n.count-2))},Tr=class{constructor(){this.encoder=new Sr,this.s=0,this.count=0}write(e){this.s===e?this.count++:(hy(this),this.count=1,this.s=e)}toUint8Array(){return hy(this),Ke(this.encoder)}},uy=n=>{if(n.count>0){let e=n.diff*2+(n.count===1?0:1);da(n.encoder,e),n.count>1&&he(n.encoder,n.count-2)}},qs=class{constructor(){this.encoder=new Sr,this.s=0,this.count=0,this.diff=0}write(e){this.diff===e-this.s?(this.s=e,this.count++):(uy(this),this.count=1,this.diff=e-this.s,this.s=e)}toUint8Array(){return uy(this),Ke(this.encoder)}},Dl=class{constructor(){this.sarr=[],this.s="",this.lensE=new Tr}write(e){this.s+=e,this.s.length>19&&(this.sarr.push(this.s),this.s=""),this.lensE.write(e.length)}toUint8Array(){let e=new Sr;return this.sarr.push(this.s),this.s="",Jn(e,this.sarr.join("")),Ys(e,this.lensE.toUint8Array()),Ke(e)}}});var pn,mn,Ut,kl=Be(()=>{pn=n=>new Error(n),mn=()=>{throw pn("Method unimplemented")},Ut=()=>{throw pn("Unexpected case")}});var fy,py,js,wt,lf,C1,Ct,Ar,ge,ma,I1,D1,An,hf,P1,B1,k1,N1,$s,pa,Rr,Zs,Nl,Js=Be(()=>{Yi();Cl();ji();kl();fy=pn("Unexpected end of array"),py=pn("Integer out of Range"),js=class{constructor(e){this.arr=e,this.pos=0}},wt=n=>new js(n),lf=n=>n.pos!==n.arr.length,C1=(n,e)=>{let t=new Uint8Array(n.arr.buffer,n.pos+n.arr.byteOffset,e);return n.pos+=e,t},Ct=n=>C1(n,ge(n)),Ar=n=>n.arr[n.pos++],ge=n=>{let e=0,t=1,i=n.arr.length;for(;n.pos<i;){let r=n.arr[n.pos++];if(e=e+(r&127)*t,t*=128,r<128)return e;if(e>Os)throw py}throw fy},ma=n=>{let e=n.arr[n.pos++],t=e&63,i=64,r=(e&64)>0?-1:1;if((e&128)===0)return r*t;let s=n.arr.length;for(;n.pos<s;){if(e=n.arr[n.pos++],t=t+(e&127)*i,i*=128,e<128)return r*t;if(t>Os)throw py}throw fy},I1=n=>{let e=ge(n);if(e===0)return"";{let t=String.fromCodePoint(Ar(n));if(--e<100)for(;e--;)t+=String.fromCodePoint(Ar(n));else for(;e>0;){let i=e<1e4?e:1e4,r=n.arr.subarray(n.pos,n.pos+i);n.pos+=i,t+=String.fromCodePoint.apply(null,r),e-=i}return decodeURIComponent(escape(t))}},D1=n=>Hs.decode(Ct(n)),An=Hs?D1:I1,hf=(n,e)=>{let t=new DataView(n.arr.buffer,n.arr.byteOffset+n.pos,e);return n.pos+=e,t},P1=n=>hf(n,4).getFloat32(0,!1),B1=n=>hf(n,8).getFloat64(0,!1),k1=n=>hf(n,8).getBigInt64(0,!1),N1=[n=>{},n=>null,ma,P1,B1,k1,n=>!1,n=>!0,An,n=>{let e=ge(n),t={};for(let i=0;i<e;i++){let r=An(n);t[r]=$s(n)}return t},n=>{let e=ge(n),t=[];for(let i=0;i<e;i++)t.push($s(n));return t},Ct],$s=n=>N1[127-Ar(n)](n),pa=class extends js{constructor(e,t){super(e),this.reader=t,this.s=null,this.count=0}read(){return this.count===0&&(this.s=this.reader(this),lf(this)?this.count=ge(this)+1:this.count=-1),this.count--,this.s}},Rr=class extends js{constructor(e){super(e),this.s=0,this.count=0}read(){if(this.count===0){this.s=ma(this);let e=Ll(this.s);this.count=1,e&&(this.s=-this.s,this.count=ge(this)+2)}return this.count--,this.s}},Zs=class extends js{constructor(e){super(e),this.s=0,this.count=0,this.diff=0}read(){if(this.count===0){let e=ma(this),t=e&1;this.diff=Ht(e/2),this.count=1,t&&(this.count=ge(this)+2)}return this.s+=this.diff,this.count--,this.s}},Nl=class{constructor(e){this.decoder=new Rr(e),this.str=An(this.decoder),this.spos=0}read(){let e=this.spos+this.decoder.read(),t=this.str.slice(this.spos,e);return this.spos=e,t}}});var _L,my,gy=Be(()=>{_L=crypto.subtle,my=crypto.getRandomValues.bind(crypto)});var uf,U1,yy,xy=Be(()=>{gy();uf=()=>my(new Uint32Array(1))[0],U1="10000000-1000-4000-8000"+-1e11,yy=()=>U1.replace(/[018]/g,n=>(n^uf()&15>>n/4).toString(16))});var gn,ya=Be(()=>{gn=Date.now});var df,EL,wy=Be(()=>{df=n=>new Promise(n),EL=Promise.all.bind(Promise)});var ff,vy=Be(()=>{ff=n=>n===void 0?null:n});var pf,_y,mf,Fl,by,My,gf=Be(()=>{pf=class{constructor(){this.map=new Map}setItem(e,t){this.map.set(e,t)}getItem(e){return this.map.get(e)}},_y=new pf,mf=!0;try{typeof localStorage<"u"&&localStorage&&(_y=localStorage,mf=!1)}catch{}Fl=_y,by=n=>mf||addEventListener("storage",n),My=n=>mf||removeEventListener("storage",n)});var Lr,Ol,Hl=Be(()=>{Lr=Symbol("Equality"),Ol=(n,e)=>n===e||!!n?.[Lr]?.(e)||!1});var Sy,Ty,z1,Ay,Ry,xa,Ly,Qs,wa,xf,G1,wf,va=Be(()=>{Hl();Sy=n=>typeof n=="object",Ty=Object.assign,z1=Object.keys,Ay=(n,e)=>{for(let t in n)e(n[t],t)},Ry=(n,e)=>{let t=[];for(let i in n)t.push(e(n[i],i));return t},xa=n=>z1(n).length,Ly=n=>{for(let e in n)return!1;return!0},Qs=(n,e)=>{for(let t in n)if(!e(n[t],t))return!1;return!0},wa=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),xf=(n,e)=>n===e||xa(n)===xa(e)&&Qs(n,(t,i)=>(t!==void 0||wa(e,i))&&Ol(e[i],t)),G1=Object.freeze,wf=n=>{for(let e in n){let t=n[e];(typeof t=="object"||typeof t=="function")&&wf(n[e])}return G1(n)}});var _a,vf,Zi,Cy,Ks=Be(()=>{va();Hl();_a=(n,e,t=0)=>{try{for(;t<n.length;t++)n[t](...e)}finally{t<n.length&&_a(n,e,t+1)}},vf=n=>n,Zi=(n,e)=>{if(n===e)return!0;if(n==null||e==null||n.constructor!==e.constructor&&(n.constructor||Object)!==(e.constructor||Object))return!1;if(n[Lr]!=null)return n[Lr](e);switch(n.constructor){case ArrayBuffer:n=new Uint8Array(n),e=new Uint8Array(e);case Uint8Array:{if(n.byteLength!==e.byteLength)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;break}case Set:{if(n.size!==e.size)return!1;for(let t of n)if(!e.has(t))return!1;break}case Map:{if(n.size!==e.size)return!1;for(let t of n.keys())if(!e.has(t)||!Zi(n.get(t),e.get(t)))return!1;break}case void 0:case Object:if(xa(n)!==xa(e))return!1;for(let t in n)if(!wa(n,t)||!Zi(n[t],e[t]))return!1;break;case Array:if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(!Zi(n[t],e[t]))return!1;break;default:return!1}return!0},Cy=(n,e)=>e.includes(n)});var bi,Vl,SL,Qn,V1,W1,_f,ba,Iy,Dy,q1,Py,eo=Be(()=>{br();ji();vy();gf();Ks();bi=typeof process<"u"&&process.release&&/node|io\.js/.test(process.release.name)&&Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]",Vl=typeof window<"u"&&typeof document<"u"&&!bi,SL=typeof navigator<"u"?/Mac/.test(navigator.platform):!1,V1=[],W1=()=>{if(Qn===void 0)if(bi){Qn=mt();let n=process.argv,e=null;for(let t=0;t<n.length;t++){let i=n[t];i[0]==="-"?(e!==null&&Qn.set(e,""),e=i):e!==null?(Qn.set(e,i),e=null):V1.push(i)}e!==null&&Qn.set(e,"")}else typeof location=="object"?(Qn=mt(),(location.search||"?").slice(1).split("&").forEach(n=>{if(n.length!==0){let[e,t]=n.split("=");Qn.set(`--${sf(e,"-")}`,t),Qn.set(`-${sf(e,"-")}`,t)}})):Qn=mt();return Qn},_f=n=>W1().has(n),ba=n=>bi?ff(process.env[n.toUpperCase().replaceAll("-","_")]):ff(Fl.getItem(n)),Iy=n=>_f("--"+n)||ba(n)!==null,Dy=Iy("production"),q1=bi&&Cy(process.env.FORCE_COLOR,["true","1","2"]),Py=q1||!_f("--no-colors")&&!Iy("no-color")&&(!bi||process.stdout.isTTY)&&(!bi||_f("--color")||ba("COLORTERM")!==null||(ba("TERM")||"").includes("color"))});var By,X1,ky,Y1,j1,$1,Z1,Ny,Uy,Fy,bf=Be(()=>{ji();eo();By=n=>new Uint8Array(n),X1=(n,e,t)=>new Uint8Array(n,e,t),ky=n=>new Uint8Array(n),Y1=n=>{let e="";for(let t=0;t<n.byteLength;t++)e+=ha(n[t]);return btoa(e)},j1=n=>Buffer.from(n.buffer,n.byteOffset,n.byteLength).toString("base64"),$1=n=>{let e=atob(n),t=By(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t},Z1=n=>{let e=Buffer.from(n,"base64");return X1(e.buffer,e.byteOffset,e.byteLength)},Ny=Vl?Y1:j1,Uy=Vl?$1:Z1,Fy=n=>{let e=By(n.byteLength);return e.set(n),e}});var Mf,Kn,Hy=Be(()=>{Mf=class{constructor(e,t){this.left=e,this.right=t}},Kn=(n,e)=>new Mf(n,e)});var Ef,Wl,Sf,Tf,Q1,zy,ql,Gy=Be(()=>{ji();Yi();Ef=n=>n.next()>=.5,Wl=(n,e,t)=>Ht(n.next()*(t+1-e)+e),Sf=(n,e,t)=>Ht(n.next()*(t+1-e)+e),Tf=(n,e,t)=>Sf(n,e,t),Q1=n=>ha(Tf(n,97,122)),zy=(n,e=0,t=20)=>{let i=Tf(n,e,t),r="";for(let s=0;s<i;s++)r+=Q1(n);return r},ql=(n,e)=>e[Tf(n,0,e.length-1)]});var eT,Af,Rf,zt,Ea,St,AL,Sa,It,RL,io,th,Wy,tT,qy,Lf,LL,nT,Xl,iT,Yl,CL,IL,jl,rT,sT,oT,$l,Xy,aT,Zl,cT,DL,Jl,Yy,lT,hT,Ql,uT,PL,dT,Cf,fT,pT,If,BL,Ta,so,Kl,jy,eh,mT,Pf,gT,$y,kL,no,Zy,ro,Jy,nh,yT,Qy,NL,UL,ih,xT,FL,OL,wT,HL,Aa,Vy,Df,vT,Ky,to,e0=Be(()=>{va();Us();kl();eo();Hl();Ks();ji();Gy();Cl();eT=Symbol("0schema"),Af=class{constructor(){this._rerrs=[]}extend(e,t,i,r=null){this._rerrs.push({path:e,expected:t,has:i,message:r})}toString(){let e=[];for(let t=this._rerrs.length-1;t>0;t--){let i=this._rerrs[t];e.push(Il(" ",(this._rerrs.length-t)*2)+`${i.path!=null?`[${i.path}] `:""}${i.has} doesn't match ${i.expected}. ${i.message}`)}return e.join(`
`)}},Rf=(n,e)=>n===e?!0:n==null||e==null||n.constructor!==e.constructor?!1:n[Lr]?Ol(n,e):vi(n)?Tl(n,t=>ca(e,i=>Rf(t,i))):Sy(n)?Qs(n,(t,i)=>Rf(t,e[i])):!1,zt=class{static _dilutes=!1;extends(e){let[t,i]=[this.shape,e.shape];return this.constructor._dilutes&&([i,t]=[t,i]),Rf(t,i)}equals(e){return this.constructor===e.constructor&&Zi(this.shape,e.shape)}[eT](){return!0}[Lr](e){return this.equals(e)}validate(e){return this.check(e)}check(e,t){mn()}get nullable(){return so(this,ih)}get optional(){return new Xl(this)}cast(e){return Vy(e,this),e}expect(e){return Vy(e,this),e}},Ea=class extends zt{constructor(e,t){super(),this.shape=e,this._c=t}check(e,t=void 0){let i=e?.constructor===this.shape&&(this._c==null||this._c(e));return!i&&t?.extend(null,this.shape.name,e?.constructor.name,e?.constructor!==this.shape?"Constructor match failed":"Check failed"),i}},St=(n,e=null)=>new Ea(n,e),AL=St(Ea),Sa=class extends zt{constructor(e){super(),this.shape=e}check(e,t){let i=this.shape(e);return!i&&t?.extend(null,"custom prop",e?.constructor.name,"failed to check custom prop"),i}},It=n=>new Sa(n),RL=St(Sa),io=class extends zt{constructor(e){super(),this.shape=e}check(e,t){let i=this.shape.some(r=>r===e);return!i&&t?.extend(null,this.shape.join(" | "),e.toString()),i}},th=(...n)=>new io(n),Wy=St(io),tT=RegExp.escape||(n=>n.replace(/[().|&,$^[\]]/g,e=>"\\"+e)),qy=n=>{if(ro.check(n))return[tT(n)];if(Wy.check(n))return n.shape.map(e=>e+"");if(Zy.check(n))return["[+-]?\\d+.?\\d*"];if(Jy.check(n))return[".*"];if(Kl.check(n))return n.shape.map(qy).flat(1);Ut()},Lf=class extends zt{constructor(e){super(),this.shape=e,this._r=new RegExp("^"+e.map(qy).map(t=>`(${t.join("|")})`).join("")+"$")}check(e,t){let i=this._r.exec(e)!=null;return!i&&t?.extend(null,this._r.toString(),e.toString(),"String doesn't match string template."),i}},LL=St(Lf),nT=Symbol("optional"),Xl=class extends zt{constructor(e){super(),this.shape=e}check(e,t){let i=e===void 0||this.shape.check(e);return!i&&t?.extend(null,"undefined (optional)","()"),i}get[nT](){return!0}},iT=St(Xl),Yl=class extends zt{check(e,t){return t?.extend(null,"never",typeof e),!1}},CL=new Yl,IL=St(Yl),jl=class n extends zt{constructor(e,t=!1){super(),this.shape=e,this._isPartial=t}static _dilutes=!0;get partial(){return new n(this.shape,!0)}check(e,t){return e==null?(t?.extend(null,"object","null"),!1):Qs(this.shape,(i,r)=>{let s=this._isPartial&&!wa(e,r)||i.check(e[r],t);return!s&&t?.extend(r.toString(),i.toString(),typeof e[r],"Object property does not match"),s})}},rT=n=>new jl(n),sT=St(jl),oT=It(n=>n!=null&&(n.constructor===Object||n.constructor==null)),$l=class extends zt{constructor(e,t){super(),this.shape={keys:e,values:t}}check(e,t){return e!=null&&Qs(e,(i,r)=>{let s=this.shape.keys.check(r,t);return!s&&t?.extend(r+"","Record",typeof e,s?"Key doesn't match schema":"Value doesn't match value"),s&&this.shape.values.check(i,t)})}},Xy=(n,e)=>new $l(n,e),aT=St($l),Zl=class extends zt{constructor(e){super(),this.shape=e}check(e,t){return e!=null&&Qs(this.shape,(i,r)=>{let s=i.check(e[r],t);return!s&&t?.extend(r.toString(),"Tuple",typeof i),s})}},cT=(...n)=>new Zl(n),DL=St(Zl),Jl=class extends zt{constructor(e){super(),this.shape=e.length===1?e[0]:new Ta(e)}check(e,t){let i=vi(e)&&Tl(e,r=>this.shape.check(r));return!i&&t?.extend(null,"Array",""),i}},Yy=(...n)=>new Jl(n),lT=St(Jl),hT=It(n=>vi(n)),Ql=class extends zt{constructor(e,t){super(),this.shape=e,this._c=t}check(e,t){let i=e instanceof this.shape&&(this._c==null||this._c(e));return!i&&t?.extend(null,this.shape.name,e?.constructor.name),i}},uT=(n,e=null)=>new Ql(n,e),PL=St(Ql),dT=uT(zt),Cf=class extends zt{constructor(e){super(),this.len=e.length-1,this.args=cT(...e.slice(-1)),this.res=e[this.len]}check(e,t){let i=e.constructor===Function&&e.length<=this.len;return!i&&t?.extend(null,"function",typeof e),i}},fT=St(Cf),pT=It(n=>typeof n=="function"),If=class extends zt{constructor(e){super(),this.shape=e}check(e,t){let i=Tl(this.shape,r=>r.check(e,t));return!i&&t?.extend(null,"Intersectinon",typeof e),i}},BL=St(If,n=>n.shape.length>0),Ta=class extends zt{static _dilutes=!0;constructor(e){super(),this.shape=e}check(e,t){let i=ca(this.shape,r=>r.check(e,t));return t?.extend(null,"Union",typeof e),i}},so=(...n)=>n.findIndex(e=>Kl.check(e))>=0?so(...n.map(e=>Aa(e)).map(e=>Kl.check(e)?e.shape:[e]).flat(1)):n.length===1?n[0]:new Ta(n),Kl=St(Ta),jy=()=>!0,eh=It(jy),mT=St(Sa,n=>n.shape===jy),Pf=It(n=>typeof n=="bigint"),gT=It(n=>n===Pf),$y=It(n=>typeof n=="symbol"),kL=It(n=>n===$y),no=It(n=>typeof n=="number"),Zy=It(n=>n===no),ro=It(n=>typeof n=="string"),Jy=It(n=>n===ro),nh=It(n=>typeof n=="boolean"),yT=It(n=>n===nh),Qy=th(void 0),NL=St(io,n=>n.shape.length===1&&n.shape[0]===void 0),UL=th(void 0),ih=th(null),xT=St(io,n=>n.shape.length===1&&n.shape[0]===null),FL=St(Uint8Array),OL=St(Ea,n=>n.shape===Uint8Array),wT=so(no,ro,ih,Qy,Pf,nh,$y),HL=(()=>{let n=Yy(eh),e=Xy(ro,eh),t=so(no,ro,ih,nh,n,e);return n.shape=t,e.shape.values=t,t})(),Aa=n=>{if(dT.check(n))return n;if(oT.check(n)){let e={};for(let t in n)e[t]=Aa(n[t]);return rT(e)}else{if(hT.check(n))return so(...n.map(Aa));if(wT.check(n))return th(n);if(pT.check(n))return St(n)}Ut()},Vy=Dy?()=>{}:(n,e)=>{let t=new Af;if(!e.check(n,t))throw pn(`Expected value to be of type ${e.constructor.name}.
${t.toString()}`)},Df=class{constructor(e){this.patterns=[],this.$state=e}if(e,t){return this.patterns.push({if:Aa(e),h:t}),this}else(e){return this.if(eh,e)}done(){return(e,t)=>{for(let i=0;i<this.patterns.length;i++){let r=this.patterns[i];if(r.if.check(e))return r.h(e,t)}throw pn("Unhandled pattern")}}},vT=n=>new Df(n),Ky=vT(eh).if(Zy,(n,e)=>Wl(e,nf,Os)).if(Jy,(n,e)=>zy(e)).if(yT,(n,e)=>Ef(e)).if(gT,(n,e)=>BigInt(Wl(e,nf,Os))).if(Kl,(n,e)=>to(e,ql(e,n.shape))).if(sT,(n,e)=>{let t={};for(let i in n.shape){let r=n.shape[i];if(iT.check(r)){if(Ef(e))continue;r=r.shape}t[i]=Ky(r,e)}return t}).if(lT,(n,e)=>{let t=[],i=Sf(e,0,42);for(let r=0;r<i;r++)t.push(to(e,n.shape));return t}).if(Wy,(n,e)=>ql(e,n.shape)).if(xT,(n,e)=>null).if(fT,(n,e)=>{let t=to(e,n.res);return()=>t}).if(mT,(n,e)=>to(e,ql(e,[no,ro,ih,Qy,Pf,nh,Yy(no),Xy(so("a","b","c"),no)]))).if(aT,(n,e)=>{let t={},i=Wl(e,0,3);for(let r=0;r<i;r++){let s=to(e,n.shape.keys),o=to(e,n.shape.values);t[s]=o}return t}).done(),to=(n,e)=>Ky(Aa(e),n)});var Cr,zL,GL,VL,WL,t0,bT,MT,qL,XL,ET,YL,ST,jL,n0=Be(()=>{br();e0();Cr=typeof document<"u"?document:{},zL=It(n=>n.nodeType===ST),GL=typeof DOMParser<"u"?new DOMParser:null,VL=It(n=>n.nodeType===bT),WL=It(n=>n.nodeType===MT),t0=n=>ty(n,(e,t)=>`${t}:${e};`).join(""),bT=Cr.ELEMENT_NODE,MT=Cr.TEXT_NODE,qL=Cr.CDATA_SECTION_NODE,XL=Cr.COMMENT_NODE,ET=Cr.DOCUMENT_NODE,YL=Cr.DOCUMENT_TYPE_NODE,ST=Cr.DOCUMENT_FRAGMENT_NODE,jL=It(n=>n.nodeType===ET)});var ei,i0=Be(()=>{ei=Symbol});var Ra,La,Bf,kf,Nf,Ca,Uf,oo,Ff,r0,$L,Of=Be(()=>{i0();ya();Ra=ei(),La=ei(),Bf=ei(),kf=ei(),Nf=ei(),Ca=ei(),Uf=ei(),oo=ei(),Ff=ei(),r0=n=>{n.length===1&&n[0]?.constructor===Function&&(n=n[0]());let e=[],t=[],i=0;for(;i<n.length;i++){let r=n[i];if(r===void 0)break;if(r.constructor===String||r.constructor===Number)e.push(r);else if(r.constructor===Object)break}for(i>0&&t.push(e.join(""));i<n.length;i++){let r=n[i];r instanceof Symbol||t.push(r)}return t},$L=gn()});var LT,CT,s0,rh,Hf,o0,a0=Be(()=>{eo();aa();Hy();n0();br();Of();Of();LT={[Ra]:Kn("font-weight","bold"),[La]:Kn("font-weight","normal"),[Bf]:Kn("color","blue"),[Nf]:Kn("color","green"),[kf]:Kn("color","grey"),[Ca]:Kn("color","red"),[Uf]:Kn("color","purple"),[oo]:Kn("color","orange"),[Ff]:Kn("color","black")},CT=n=>{n.length===1&&n[0]?.constructor===Function&&(n=n[0]());let e=[],t=[],i=mt(),r=[],s=0;for(;s<n.length;s++){let o=n[s],a=LT[o];if(a!==void 0)i.set(a.left,a.right);else{if(o===void 0)break;if(o.constructor===String||o.constructor===Number){let c=t0(i);s>0||c.length>0?(e.push("%c"+o),t.push(c)):e.push(o)}else break}}for(s>0&&(r=t,r.unshift(e.join("")));s<n.length;s++){let o=n[s];o instanceof Symbol||r.push(o)}return r},s0=Py?CT:r0,rh=(...n)=>{console.log(...s0(n)),o0.forEach(e=>e.print(n))},Hf=(...n)=>{console.warn(...s0(n)),n.unshift(oo),o0.forEach(e=>e.print(n))},o0=Sn()});var c0,l0,sh,h0=Be(()=>{c0=n=>({[Symbol.iterator](){return this},next:n}),l0=(n,e)=>c0(()=>{let t;do t=n.next();while(!t.done&&!e(t.value));return t}),sh=(n,e)=>c0(()=>{let{done:t,value:i}=n.next();return{done:t,value:t?void 0:e(i)}})});var gp={};im(gp,{AbsolutePosition:()=>dh,AbstractConnector:()=>Gf,AbstractStruct:()=>uo,AbstractType:()=>vt,Array:()=>Ur,ContentAny:()=>ir,ContentBinary:()=>zr,ContentDeleted:()=>fo,ContentDoc:()=>Gr,ContentEmbed:()=>Si,ContentFormat:()=>_t,ContentJSON:()=>za,ContentString:()=>zn,ContentType:()=>Ln,Doc:()=>tr,GC:()=>Zt,ID:()=>Mi,Item:()=>tt,Map:()=>Fr,PermanentUserData:()=>Wf,RelativePosition:()=>lo,Skip:()=>Gt,Snapshot:()=>Ba,Text:()=>ho,Transaction:()=>ph,UndoManager:()=>$f,UpdateDecoderV1:()=>hn,UpdateDecoderV2:()=>nn,UpdateEncoderV1:()=>ni,UpdateEncoderV2:()=>yn,XmlElement:()=>Hr,XmlFragment:()=>Or,XmlHook:()=>Ha,XmlText:()=>_h,YArrayEvent:()=>yh,YEvent:()=>Nr,YMapEvent:()=>xh,YTextEvent:()=>wh,YXmlEvent:()=>vh,applyUpdate:()=>ip,applyUpdateV2:()=>Eh,cleanupYTextFormatting:()=>hx,compareIDs:()=>Ir,compareRelativePositions:()=>tA,convertUpdateFormatV1ToV2:()=>bA,convertUpdateFormatV2ToV1:()=>Y0,createAbsolutePositionFromRelativePosition:()=>eA,createDeleteSet:()=>Mh,createDeleteSetFromStructStore:()=>ep,createDocFromSnapshot:()=>aA,createID:()=>Me,createRelativePositionFromJSON:()=>XT,createRelativePositionFromTypeIndex:()=>jT,createSnapshot:()=>lp,decodeRelativePosition:()=>QT,decodeSnapshot:()=>rA,decodeSnapshotV2:()=>B0,decodeStateVector:()=>sp,decodeUpdate:()=>mA,decodeUpdateV2:()=>z0,diffUpdate:()=>wA,diffUpdateV2:()=>hp,emptySnapshot:()=>sA,encodeRelativePosition:()=>ZT,encodeSnapshot:()=>iA,encodeSnapshotV2:()=>P0,encodeStateAsUpdate:()=>rp,encodeStateAsUpdateV2:()=>C0,encodeStateVector:()=>ap,encodeStateVectorFromUpdate:()=>gA,encodeStateVectorFromUpdateV2:()=>V0,equalDeleteSets:()=>R0,equalSnapshots:()=>nA,findIndexSS:()=>Rn,findRootTypeKey:()=>cp,getItem:()=>Dr,getItemCleanEnd:()=>Yf,getItemCleanStart:()=>$t,getState:()=>ft,getTypeChildren:()=>TA,isDeleted:()=>Vr,isParentOf:()=>Pa,iterateDeletedStructs:()=>Pr,logType:()=>WT,logUpdate:()=>pA,logUpdateV2:()=>H0,mergeDeleteSets:()=>Br,mergeUpdates:()=>G0,mergeUpdatesV2:()=>Na,obfuscateUpdate:()=>vA,obfuscateUpdateV2:()=>_A,parseUpdateMeta:()=>yA,parseUpdateMetaV2:()=>W0,readUpdate:()=>HT,readUpdateV2:()=>np,relativePositionToJSON:()=>qT,snapshot:()=>oA,snapshotContainsUpdate:()=>lA,transact:()=>et,tryGc:()=>dA,typeListToArraySnapshot:()=>AA,typeMapGetAllSnapshot:()=>sx,typeMapGetSnapshot:()=>CA});function*fA(n){let e=ge(n.restDecoder);for(let t=0;t<e;t++){let i=ge(n.restDecoder),r=n.readClient(),s=ge(n.restDecoder);for(let o=0;o<i;o++){let a=n.readInfo();if(a===10){let c=ge(n.restDecoder);yield new Gt(Me(r,s),c),s+=c}else if((31&a)!==0){let c=(a&192)===0,l=new tt(Me(r,s),null,(a&128)===128?n.readLeftID():null,null,(a&64)===64?n.readRightID():null,c?n.readParentInfo()?n.readString():n.readLeftID():null,c&&(a&32)===32?n.readString():null,fx(n,a));yield l,s+=l.length}else{let c=n.readLen();yield new Zt(Me(r,s),c),s+=c}}}}var Gf,ao,er,Pr,kT,Vr,Kf,Br,Da,Mh,ep,ti,Ei,f0,R0,L0,tr,kr,hn,uh,nn,nr,ni,co,yn,NT,tp,UT,FT,OT,np,HT,Eh,ip,zT,C0,rp,I0,sp,op,GT,VT,ap,Vf,p0,m0,g0,D0,Mi,Ir,Me,y0,x0,cp,Pa,WT,Wf,lo,qT,XT,dh,YT,oh,jT,$T,ZT,JT,QT,KT,eA,tA,Ba,nA,P0,iA,B0,rA,lp,sA,oA,Ji,qf,aA,cA,lA,fh,Ga,ft,k0,Rn,hA,Dr,Xf,$t,Yf,uA,N0,ph,w0,v0,lh,U0,F0,dA,O0,et,jf,_0,b0,$f,ii,pA,H0,mA,z0,ka,G0,V0,gA,W0,yA,xA,Na,hp,wA,q0,Qi,up,Sh,X0,vA,_A,bA,Y0,M0,Nr,MA,Vt,j0,dp,Zf,EA,$0,SA,Th,Ua,TA,Ah,vt,Z0,J0,AA,Fa,Q0,RA,K0,mh,ex,tx,LA,nx,gh,fp,pp,ix,rx,CA,sx,ah,yh,Ur,IA,xh,Fr,DA,Ki,Oa,E0,ch,ox,po,ax,cx,zf,S0,lx,PA,hx,BA,T0,wh,ho,kA,Ia,Or,NA,Hr,UA,vh,Ha,FA,_h,OA,uo,HA,Zt,zr,zA,fo,GA,ux,Gr,VA,Si,WA,_t,qA,za,XA,YA,ir,jA,zn,$A,ZA,JA,QA,KA,eR,tR,nR,iR,Ln,rR,Jf,mp,bh,A0,dx,tt,fx,sR,oR,Gt,px,mx,yp=Be(()=>{Rl();Us();Yi();br();fa();Js();xy();wy();bf();kl();Ks();Ks();aa();a0();ya();ji();h0();va();eo();Gf=class extends Xi{constructor(e,t){super(),this.doc=e,this.awareness=t}},ao=class{constructor(e,t){this.clock=e,this.len=t}},er=class{constructor(){this.clients=new Map}},Pr=(n,e,t)=>e.clients.forEach((i,r)=>{let s=n.doc.store.clients.get(r);if(s!=null){let o=s[s.length-1],a=o.id.clock+o.length;for(let c=0,l=i[c];c<i.length&&l.clock<a;l=i[++c])N0(n,s,l.clock,l.len,t)}}),kT=(n,e)=>{let t=0,i=n.length-1;for(;t<=i;){let r=Ht((t+i)/2),s=n[r],o=s.clock;if(o<=e){if(e<o+s.len)return r;t=r+1}else i=r-1}return null},Vr=(n,e)=>{let t=n.clients.get(e.client);return t!==void 0&&kT(t,e.clock)!==null},Kf=n=>{n.clients.forEach(e=>{e.sort((r,s)=>r.clock-s.clock);let t,i;for(t=1,i=1;t<e.length;t++){let r=e[i-1],s=e[t];r.clock+r.len>=s.clock?e[i-1]=new ao(r.clock,_i(r.len,s.clock+s.len-r.clock)):(i<t&&(e[i]=s),i++)}e.length=i})},Br=n=>{let e=new er;for(let t=0;t<n.length;t++)n[t].clients.forEach((i,r)=>{if(!e.clients.has(r)){let s=i.slice();for(let o=t+1;o<n.length;o++)iy(s,n[o].clients.get(r)||[]);e.clients.set(r,s)}});return Kf(e),e},Da=(n,e,t,i)=>{kt(n.clients,e,()=>[]).push(new ao(t,i))},Mh=()=>new er,ep=n=>{let e=Mh();return n.clients.forEach((t,i)=>{let r=[];for(let s=0;s<t.length;s++){let o=t[s];if(o.deleted){let a=o.id.clock,c=o.length;if(s+1<t.length)for(let l=t[s+1];s+1<t.length&&l.deleted;l=t[++s+1])c+=l.length;r.push(new ao(a,c))}}r.length>0&&e.clients.set(i,r)}),e},ti=(n,e)=>{he(n.restEncoder,e.clients.size),Hn(e.clients.entries()).sort((t,i)=>i[0]-t[0]).forEach(([t,i])=>{n.resetDsCurVal(),he(n.restEncoder,t);let r=i.length;he(n.restEncoder,r);for(let s=0;s<r;s++){let o=i[s];n.writeDsClock(o.clock),n.writeDsLen(o.len)}})},Ei=n=>{let e=new er,t=ge(n.restDecoder);for(let i=0;i<t;i++){n.resetDsCurVal();let r=ge(n.restDecoder),s=ge(n.restDecoder);if(s>0){let o=kt(e.clients,r,()=>[]);for(let a=0;a<s;a++)o.push(new ao(n.readDsClock(),n.readDsLen()))}}return e},f0=(n,e,t)=>{let i=new er,r=ge(n.restDecoder);for(let s=0;s<r;s++){n.resetDsCurVal();let o=ge(n.restDecoder),a=ge(n.restDecoder),c=t.clients.get(o)||[],l=ft(t,o);for(let h=0;h<a;h++){let u=n.readDsClock(),d=u+n.readDsLen();if(u<l){l<d&&Da(i,o,l,d-l);let f=Rn(c,u),p=c[f];for(!p.deleted&&p.id.clock<u&&(c.splice(f+1,0,bh(e,p,u-p.id.clock)),f++);f<c.length&&(p=c[f++],p.id.clock<d);)p.deleted||(d<p.id.clock+p.length&&c.splice(f,0,bh(e,p,d-p.id.clock)),p.delete(e))}else Da(i,o,u,d-u)}}if(i.clients.size>0){let s=new yn;return he(s.restEncoder,0),ti(s,i),s.toUint8Array()}return null},R0=(n,e)=>{if(n.clients.size!==e.clients.size)return!1;for(let[t,i]of n.clients.entries()){let r=e.clients.get(t);if(r===void 0||i.length!==r.length)return!1;for(let s=0;s<i.length;s++){let o=i[s],a=r[s];if(o.clock!==a.clock||o.len!==a.len)return!1}}return!0},L0=uf,tr=class n extends Xi{constructor({guid:e=yy(),collectionid:t=null,gc:i=!0,gcFilter:r=()=>!0,meta:s=null,autoLoad:o=!1,shouldLoad:a=!0}={}){super(),this.gc=i,this.gcFilter=r,this.clientID=L0(),this.guid=e,this.collectionid=t,this.share=new Map,this.store=new fh,this._transaction=null,this._transactionCleanups=[],this.subdocs=new Set,this._item=null,this.shouldLoad=a,this.autoLoad=o,this.meta=s,this.isLoaded=!1,this.isSynced=!1,this.isDestroyed=!1,this.whenLoaded=df(l=>{this.on("load",()=>{this.isLoaded=!0,l(this)})});let c=()=>df(l=>{let h=u=>{(u===void 0||u===!0)&&(this.off("sync",h),l())};this.on("sync",h)});this.on("sync",l=>{l===!1&&this.isSynced&&(this.whenSynced=c()),this.isSynced=l===void 0||l===!0,this.isSynced&&!this.isLoaded&&this.emit("load",[this])}),this.whenSynced=c()}load(){let e=this._item;e!==null&&!this.shouldLoad&&et(e.parent.doc,t=>{t.subdocsLoaded.add(this)},null,!0),this.shouldLoad=!0}getSubdocs(){return this.subdocs}getSubdocGuids(){return new Set(Hn(this.subdocs).map(e=>e.guid))}transact(e,t=null){return et(this,e,t)}get(e,t=vt){let i=kt(this.share,e,()=>{let s=new t;return s._integrate(this,null),s}),r=i.constructor;if(t!==vt&&r!==t)if(r===vt){let s=new t;s._map=i._map,i._map.forEach(o=>{for(;o!==null;o=o.left)o.parent=s}),s._start=i._start;for(let o=s._start;o!==null;o=o.right)o.parent=s;return s._length=i._length,this.share.set(e,s),s._integrate(this,null),s}else throw new Error(`Type with the name ${e} has already been defined with a different constructor`);return i}getArray(e=""){return this.get(e,Ur)}getText(e=""){return this.get(e,ho)}getMap(e=""){return this.get(e,Fr)}getXmlElement(e=""){return this.get(e,Hr)}getXmlFragment(e=""){return this.get(e,Or)}toJSON(){let e={};return this.share.forEach((t,i)=>{e[i]=t.toJSON()}),e}destroy(){this.isDestroyed=!0,Hn(this.subdocs).forEach(t=>t.destroy());let e=this._item;if(e!==null){this._item=null;let t=e.content;t.doc=new n({guid:this.guid,...t.opts,shouldLoad:!1}),t.doc._item=e,et(e.parent.doc,i=>{let r=t.doc;e.deleted||i.subdocsAdded.add(r),i.subdocsRemoved.add(this)},null,!0)}this.emit("destroyed",[!0]),this.emit("destroy",[this]),super.destroy()}},kr=class{constructor(e){this.restDecoder=e}resetDsCurVal(){}readDsClock(){return ge(this.restDecoder)}readDsLen(){return ge(this.restDecoder)}},hn=class extends kr{readLeftID(){return Me(ge(this.restDecoder),ge(this.restDecoder))}readRightID(){return Me(ge(this.restDecoder),ge(this.restDecoder))}readClient(){return ge(this.restDecoder)}readInfo(){return Ar(this.restDecoder)}readString(){return An(this.restDecoder)}readParentInfo(){return ge(this.restDecoder)===1}readTypeRef(){return ge(this.restDecoder)}readLen(){return ge(this.restDecoder)}readAny(){return $s(this.restDecoder)}readBuf(){return Fy(Ct(this.restDecoder))}readJSON(){return JSON.parse(An(this.restDecoder))}readKey(){return An(this.restDecoder)}},uh=class{constructor(e){this.dsCurrVal=0,this.restDecoder=e}resetDsCurVal(){this.dsCurrVal=0}readDsClock(){return this.dsCurrVal+=ge(this.restDecoder),this.dsCurrVal}readDsLen(){let e=ge(this.restDecoder)+1;return this.dsCurrVal+=e,e}},nn=class extends uh{constructor(e){super(e),this.keys=[],ge(e),this.keyClockDecoder=new Zs(Ct(e)),this.clientDecoder=new Rr(Ct(e)),this.leftClockDecoder=new Zs(Ct(e)),this.rightClockDecoder=new Zs(Ct(e)),this.infoDecoder=new pa(Ct(e),Ar),this.stringDecoder=new Nl(Ct(e)),this.parentInfoDecoder=new pa(Ct(e),Ar),this.typeRefDecoder=new Rr(Ct(e)),this.lenDecoder=new Rr(Ct(e))}readLeftID(){return new Mi(this.clientDecoder.read(),this.leftClockDecoder.read())}readRightID(){return new Mi(this.clientDecoder.read(),this.rightClockDecoder.read())}readClient(){return this.clientDecoder.read()}readInfo(){return this.infoDecoder.read()}readString(){return this.stringDecoder.read()}readParentInfo(){return this.parentInfoDecoder.read()===1}readTypeRef(){return this.typeRefDecoder.read()}readLen(){return this.lenDecoder.read()}readAny(){return $s(this.restDecoder)}readBuf(){return Ct(this.restDecoder)}readJSON(){return $s(this.restDecoder)}readKey(){let e=this.keyClockDecoder.read();if(e<this.keys.length)return this.keys[e];{let t=this.stringDecoder.read();return this.keys.push(t),t}}},nr=class{constructor(){this.restEncoder=xt()}toUint8Array(){return Ke(this.restEncoder)}resetDsCurVal(){}writeDsClock(e){he(this.restEncoder,e)}writeDsLen(e){he(this.restEncoder,e)}},ni=class extends nr{writeLeftID(e){he(this.restEncoder,e.client),he(this.restEncoder,e.clock)}writeRightID(e){he(this.restEncoder,e.client),he(this.restEncoder,e.clock)}writeClient(e){he(this.restEncoder,e)}writeInfo(e){Xs(this.restEncoder,e)}writeString(e){Jn(this.restEncoder,e)}writeParentInfo(e){he(this.restEncoder,e?1:0)}writeTypeRef(e){he(this.restEncoder,e)}writeLen(e){he(this.restEncoder,e)}writeAny(e){Ws(this.restEncoder,e)}writeBuf(e){ht(this.restEncoder,e)}writeJSON(e){Jn(this.restEncoder,JSON.stringify(e))}writeKey(e){Jn(this.restEncoder,e)}},co=class{constructor(){this.restEncoder=xt(),this.dsCurrVal=0}toUint8Array(){return Ke(this.restEncoder)}resetDsCurVal(){this.dsCurrVal=0}writeDsClock(e){let t=e-this.dsCurrVal;this.dsCurrVal=e,he(this.restEncoder,t)}writeDsLen(e){e===0&&Ut(),he(this.restEncoder,e-1),this.dsCurrVal+=e}},yn=class extends co{constructor(){super(),this.keyMap=new Map,this.keyClock=0,this.keyClockEncoder=new qs,this.clientEncoder=new Tr,this.leftClockEncoder=new qs,this.rightClockEncoder=new qs,this.infoEncoder=new ua(Xs),this.stringEncoder=new Dl,this.parentInfoEncoder=new ua(Xs),this.typeRefEncoder=new Tr,this.lenEncoder=new Tr}toUint8Array(){let e=xt();return he(e,0),ht(e,this.keyClockEncoder.toUint8Array()),ht(e,this.clientEncoder.toUint8Array()),ht(e,this.leftClockEncoder.toUint8Array()),ht(e,this.rightClockEncoder.toUint8Array()),ht(e,Ke(this.infoEncoder)),ht(e,this.stringEncoder.toUint8Array()),ht(e,Ke(this.parentInfoEncoder)),ht(e,this.typeRefEncoder.toUint8Array()),ht(e,this.lenEncoder.toUint8Array()),Ys(e,Ke(this.restEncoder)),Ke(e)}writeLeftID(e){this.clientEncoder.write(e.client),this.leftClockEncoder.write(e.clock)}writeRightID(e){this.clientEncoder.write(e.client),this.rightClockEncoder.write(e.clock)}writeClient(e){this.clientEncoder.write(e)}writeInfo(e){this.infoEncoder.write(e)}writeString(e){this.stringEncoder.write(e)}writeParentInfo(e){this.parentInfoEncoder.write(e?1:0)}writeTypeRef(e){this.typeRefEncoder.write(e)}writeLen(e){this.lenEncoder.write(e)}writeAny(e){Ws(this.restEncoder,e)}writeBuf(e){ht(this.restEncoder,e)}writeJSON(e){Ws(this.restEncoder,e)}writeKey(e){let t=this.keyMap.get(e);t===void 0?(this.keyClockEncoder.write(this.keyClock++),this.stringEncoder.write(e)):this.keyClockEncoder.write(t)}},NT=(n,e,t,i)=>{i=_i(i,e[0].id.clock);let r=Rn(e,i);he(n.restEncoder,e.length-r),n.writeClient(t),he(n.restEncoder,i);let s=e[r];s.write(n,i-s.id.clock);for(let o=r+1;o<e.length;o++)e[o].write(n,0)},tp=(n,e,t)=>{let i=new Map;t.forEach((r,s)=>{ft(e,s)>r&&i.set(s,r)}),Ga(e).forEach((r,s)=>{t.has(s)||i.set(s,0)}),he(n.restEncoder,i.size),Hn(i.entries()).sort((r,s)=>s[0]-r[0]).forEach(([r,s])=>{NT(n,e.clients.get(r),r,s)})},UT=(n,e)=>{let t=mt(),i=ge(n.restDecoder);for(let r=0;r<i;r++){let s=ge(n.restDecoder),o=new Array(s),a=n.readClient(),c=ge(n.restDecoder);t.set(a,{i:0,refs:o});for(let l=0;l<s;l++){let h=n.readInfo();switch(31&h){case 0:{let u=n.readLen();o[l]=new Zt(Me(a,c),u),c+=u;break}case 10:{let u=ge(n.restDecoder);o[l]=new Gt(Me(a,c),u),c+=u;break}default:{let u=(h&192)===0,d=new tt(Me(a,c),null,(h&128)===128?n.readLeftID():null,null,(h&64)===64?n.readRightID():null,u?n.readParentInfo()?e.get(n.readString()):n.readLeftID():null,u&&(h&32)===32?n.readString():null,fx(n,h));o[l]=d,c+=d.length}}}}return t},FT=(n,e,t)=>{let i=[],r=Hn(t.keys()).sort((f,p)=>f-p);if(r.length===0)return null;let s=()=>{if(r.length===0)return null;let f=t.get(r[r.length-1]);for(;f.refs.length===f.i;)if(r.pop(),r.length>0)f=t.get(r[r.length-1]);else return null;return f},o=s();if(o===null)return null;let a=new fh,c=new Map,l=(f,p)=>{let y=c.get(f);(y==null||y>p)&&c.set(f,p)},h=o.refs[o.i++],u=new Map,d=()=>{for(let f of i){let p=f.id.client,y=t.get(p);y?(y.i--,a.clients.set(p,y.refs.slice(y.i)),t.delete(p),y.i=0,y.refs=[]):a.clients.set(p,[f]),r=r.filter(x=>x!==p)}i.length=0};for(;;){if(h.constructor!==Gt){let p=kt(u,h.id.client,()=>ft(e,h.id.client))-h.id.clock;if(p<0)i.push(h),l(h.id.client,h.id.clock-1),d();else{let y=h.getMissing(n,e);if(y!==null){i.push(h);let x=t.get(y)||{refs:[],i:0};if(x.refs.length===x.i)l(y,ft(e,y)),d();else{h=x.refs[x.i++];continue}}else(p===0||p<h.length)&&(h.integrate(n,p),u.set(h.id.client,h.id.clock+h.length))}}if(i.length>0)h=i.pop();else if(o!==null&&o.i<o.refs.length)h=o.refs[o.i++];else{if(o=s(),o===null)break;h=o.refs[o.i++]}}if(a.clients.size>0){let f=new yn;return tp(f,a,new Map),he(f.restEncoder,0),{missing:c,update:f.toUint8Array()}}return null},OT=(n,e)=>tp(n,e.doc.store,e.beforeState),np=(n,e,t,i=new nn(n))=>et(e,r=>{r.local=!1;let s=!1,o=r.doc,a=o.store,c=UT(i,o),l=FT(r,a,c),h=a.pendingStructs;if(h){for(let[d,f]of h.missing)if(f<ft(a,d)){s=!0;break}if(l){for(let[d,f]of l.missing){let p=h.missing.get(d);(p==null||p>f)&&h.missing.set(d,f)}h.update=Na([h.update,l.update])}}else a.pendingStructs=l;let u=f0(i,r,a);if(a.pendingDs){let d=new nn(wt(a.pendingDs));ge(d.restDecoder);let f=f0(d,r,a);u&&f?a.pendingDs=Na([u,f]):a.pendingDs=u||f}else a.pendingDs=u;if(s){let d=a.pendingStructs.update;a.pendingStructs=null,Eh(r.doc,d)}},t,!1),HT=(n,e,t)=>np(n,e,t,new hn(n)),Eh=(n,e,t,i=nn)=>{let r=wt(e);np(r,n,t,new i(r))},ip=(n,e,t)=>Eh(n,e,t,hn),zT=(n,e,t=new Map)=>{tp(n,e.store,t),ti(n,ep(e.store))},C0=(n,e=new Uint8Array([0]),t=new yn)=>{let i=sp(e);zT(t,n,i);let r=[t.toUint8Array()];if(n.store.pendingDs&&r.push(n.store.pendingDs),n.store.pendingStructs&&r.push(hp(n.store.pendingStructs.update,e)),r.length>1){if(t.constructor===ni)return G0(r.map((s,o)=>o===0?s:Y0(s)));if(t.constructor===yn)return Na(r)}return r[0]},rp=(n,e)=>C0(n,e,new ni),I0=n=>{let e=new Map,t=ge(n.restDecoder);for(let i=0;i<t;i++){let r=ge(n.restDecoder),s=ge(n.restDecoder);e.set(r,s)}return e},sp=n=>I0(new kr(wt(n))),op=(n,e)=>(he(n.restEncoder,e.size),Hn(e.entries()).sort((t,i)=>i[0]-t[0]).forEach(([t,i])=>{he(n.restEncoder,t),he(n.restEncoder,i)}),n),GT=(n,e)=>op(n,Ga(e.store)),VT=(n,e=new co)=>(n instanceof Map?op(e,n):GT(e,n),e.toUint8Array()),ap=n=>VT(n,new nr),Vf=class{constructor(){this.l=[]}},p0=()=>new Vf,m0=(n,e)=>n.l.push(e),g0=(n,e)=>{let t=n.l,i=t.length;n.l=t.filter(r=>e!==r),i===n.l.length&&console.error("[yjs] Tried to remove event handler that doesn't exist.")},D0=(n,e,t)=>_a(n.l,[e,t]),Mi=class{constructor(e,t){this.client=e,this.clock=t}},Ir=(n,e)=>n===e||n!==null&&e!==null&&n.client===e.client&&n.clock===e.clock,Me=(n,e)=>new Mi(n,e),y0=(n,e)=>{he(n,e.client),he(n,e.clock)},x0=n=>Me(ge(n),ge(n)),cp=n=>{for(let[e,t]of n.doc.share.entries())if(t===n)return e;throw Ut()},Pa=(n,e)=>{for(;e!==null;){if(e.parent===n)return!0;e=e.parent._item}return!1},WT=n=>{let e=[],t=n._start;for(;t;)e.push(t),t=t.right;console.log("Children: ",e),console.log("Children content: ",e.filter(i=>!i.deleted).map(i=>i.content))},Wf=class{constructor(e,t=e.getMap("users")){let i=new Map;this.yusers=t,this.doc=e,this.clients=new Map,this.dss=i;let r=(s,o)=>{let a=s.get("ds"),c=s.get("ids"),l=h=>this.clients.set(h,o);a.observe(h=>{h.changes.added.forEach(u=>{u.content.getContent().forEach(d=>{d instanceof Uint8Array&&this.dss.set(o,Br([this.dss.get(o)||Mh(),Ei(new kr(wt(d)))]))})})}),this.dss.set(o,Br(a.map(h=>Ei(new kr(wt(h)))))),c.observe(h=>h.changes.added.forEach(u=>u.content.getContent().forEach(l))),c.forEach(l)};t.observe(s=>{s.keysChanged.forEach(o=>r(t.get(o),o))}),t.forEach(r)}setUserMapping(e,t,i,{filter:r=()=>!0}={}){let s=this.yusers,o=s.get(i);o||(o=new Fr,o.set("ids",new Ur),o.set("ds",new Ur),s.set(i,o)),o.get("ids").push([t]),s.observe(a=>{setTimeout(()=>{let c=s.get(i);if(c!==o){o=c,this.clients.forEach((u,d)=>{i===u&&o.get("ids").push([d])});let l=new nr,h=this.dss.get(i);h&&(ti(l,h),o.get("ds").push([l.toUint8Array()]))}},0)}),e.on("afterTransaction",a=>{setTimeout(()=>{let c=o.get("ds"),l=a.deleteSet;if(a.local&&l.clients.size>0&&r(a,l)){let h=new nr;ti(h,l),c.push([h.toUint8Array()])}})})}getUserByClientId(e){return this.clients.get(e)||null}getUserByDeletedId(e){for(let[t,i]of this.dss.entries())if(Vr(i,e))return t;return null}},lo=class{constructor(e,t,i,r=0){this.type=e,this.tname=t,this.item=i,this.assoc=r}},qT=n=>{let e={};return n.type&&(e.type=n.type),n.tname&&(e.tname=n.tname),n.item&&(e.item=n.item),n.assoc!=null&&(e.assoc=n.assoc),e},XT=n=>new lo(n.type==null?null:Me(n.type.client,n.type.clock),n.tname??null,n.item==null?null:Me(n.item.client,n.item.clock),n.assoc==null?0:n.assoc),dh=class{constructor(e,t,i=0){this.type=e,this.index=t,this.assoc=i}},YT=(n,e,t=0)=>new dh(n,e,t),oh=(n,e,t)=>{let i=null,r=null;return n._item===null?r=cp(n):i=Me(n._item.id.client,n._item.id.clock),new lo(i,r,e,t)},jT=(n,e,t=0)=>{let i=n._start;if(t<0){if(e===0)return oh(n,null,t);e--}for(;i!==null;){if(!i.deleted&&i.countable){if(i.length>e)return oh(n,Me(i.id.client,i.id.clock+e),t);e-=i.length}if(i.right===null&&t<0)return oh(n,i.lastId,t);i=i.right}return oh(n,null,t)},$T=(n,e)=>{let{type:t,tname:i,item:r,assoc:s}=e;if(r!==null)he(n,0),y0(n,r);else if(i!==null)Xs(n,1),Jn(n,i);else if(t!==null)Xs(n,2),y0(n,t);else throw Ut();return da(n,s),n},ZT=n=>{let e=xt();return $T(e,n),Ke(e)},JT=n=>{let e=null,t=null,i=null;switch(ge(n)){case 0:i=x0(n);break;case 1:t=An(n);break;case 2:e=x0(n)}let r=lf(n)?ma(n):0;return new lo(e,t,i,r)},QT=n=>JT(wt(n)),KT=(n,e)=>{let t=Dr(n,e),i=e.clock-t.id.clock;return{item:t,diff:i}},eA=(n,e,t=!0)=>{let i=e.store,r=n.item,s=n.type,o=n.tname,a=n.assoc,c=null,l=0;if(r!==null){if(ft(i,r.client)<=r.clock)return null;let h=t?Jf(i,r):KT(i,r),u=h.item;if(!(u instanceof tt))return null;if(c=u.parent,c._item===null||!c._item.deleted){l=u.deleted||!u.countable?0:h.diff+(a>=0?0:1);let d=u.left;for(;d!==null;)!d.deleted&&d.countable&&(l+=d.length),d=d.left}}else{if(o!==null)c=e.get(o);else if(s!==null){if(ft(i,s.client)<=s.clock)return null;let{item:h}=t?Jf(i,s):{item:Dr(i,s)};if(h instanceof tt&&h.content instanceof Ln)c=h.content.type;else return null}else throw Ut();a>=0?l=c._length:l=0}return YT(c,l,n.assoc)},tA=(n,e)=>n===e||n!==null&&e!==null&&n.tname===e.tname&&Ir(n.item,e.item)&&Ir(n.type,e.type)&&n.assoc===e.assoc,Ba=class{constructor(e,t){this.ds=e,this.sv=t}},nA=(n,e)=>{let t=n.ds.clients,i=e.ds.clients,r=n.sv,s=e.sv;if(r.size!==s.size||t.size!==i.size)return!1;for(let[o,a]of r.entries())if(s.get(o)!==a)return!1;for(let[o,a]of t.entries()){let c=i.get(o)||[];if(a.length!==c.length)return!1;for(let l=0;l<a.length;l++){let h=a[l],u=c[l];if(h.clock!==u.clock||h.len!==u.len)return!1}}return!0},P0=(n,e=new co)=>(ti(e,n.ds),op(e,n.sv),e.toUint8Array()),iA=n=>P0(n,new nr),B0=(n,e=new uh(wt(n)))=>new Ba(Ei(e),I0(e)),rA=n=>B0(n,new kr(wt(n))),lp=(n,e)=>new Ba(n,e),sA=lp(Mh(),new Map),oA=n=>lp(ep(n.store),Ga(n.store)),Ji=(n,e)=>e===void 0?!n.deleted:e.sv.has(n.id.client)&&(e.sv.get(n.id.client)||0)>n.id.clock&&!Vr(e.ds,n.id),qf=(n,e)=>{let t=kt(n.meta,qf,Sn),i=n.doc.store;t.has(e)||(e.sv.forEach((r,s)=>{r<ft(i,s)&&$t(n,Me(s,r))}),Pr(n,e.ds,r=>{}),t.add(e))},aA=(n,e,t=new tr)=>{if(n.gc)throw new Error("Garbage-collection must be disabled in `originDoc`!");let{sv:i,ds:r}=e,s=new yn;return n.transact(o=>{let a=0;i.forEach(c=>{c>0&&a++}),he(s.restEncoder,a);for(let[c,l]of i){if(l===0)continue;l<ft(n.store,c)&&$t(o,Me(c,l));let h=n.store.clients.get(c)||[],u=Rn(h,l-1);he(s.restEncoder,u+1),s.writeClient(c),he(s.restEncoder,0);for(let d=0;d<=u;d++)h[d].write(s,0)}ti(s,r)}),Eh(t,s.toUint8Array(),"snapshot"),t},cA=(n,e,t=nn)=>{let i=new t(wt(e)),r=new ii(i,!1);for(let o=r.curr;o!==null;o=r.next())if((n.sv.get(o.id.client)||0)<o.id.clock+o.length)return!1;let s=Br([n.ds,Ei(i)]);return R0(n.ds,s)},lA=(n,e)=>cA(n,e,hn),fh=class{constructor(){this.clients=new Map,this.pendingStructs=null,this.pendingDs=null}},Ga=n=>{let e=new Map;return n.clients.forEach((t,i)=>{let r=t[t.length-1];e.set(i,r.id.clock+r.length)}),e},ft=(n,e)=>{let t=n.clients.get(e);if(t===void 0)return 0;let i=t[t.length-1];return i.id.clock+i.length},k0=(n,e)=>{let t=n.clients.get(e.id.client);if(t===void 0)t=[],n.clients.set(e.id.client,t);else{let i=t[t.length-1];if(i.id.clock+i.length!==e.id.clock)throw Ut()}t.push(e)},Rn=(n,e)=>{let t=0,i=n.length-1,r=n[i],s=r.id.clock;if(s===e)return i;let o=Ht(e/(s+r.length-1)*i);for(;t<=i;){if(r=n[o],s=r.id.clock,s<=e){if(e<s+r.length)return o;t=o+1}else i=o-1;o=Ht((t+i)/2)}throw Ut()},hA=(n,e)=>{let t=n.clients.get(e.client);return t[Rn(t,e.clock)]},Dr=hA,Xf=(n,e,t)=>{let i=Rn(e,t),r=e[i];return r.id.clock<t&&r instanceof tt?(e.splice(i+1,0,bh(n,r,t-r.id.clock)),i+1):i},$t=(n,e)=>{let t=n.doc.store.clients.get(e.client);return t[Xf(n,t,e.clock)]},Yf=(n,e,t)=>{let i=e.clients.get(t.client),r=Rn(i,t.clock),s=i[r];return t.clock!==s.id.clock+s.length-1&&s.constructor!==Zt&&i.splice(r+1,0,bh(n,s,t.clock-s.id.clock+1)),s},uA=(n,e,t)=>{let i=n.clients.get(e.id.client);i[Rn(i,e.id.clock)]=t},N0=(n,e,t,i,r)=>{if(i===0)return;let s=t+i,o=Xf(n,e,t),a;do a=e[o++],s<a.id.clock+a.length&&Xf(n,e,s),r(a);while(o<e.length&&e[o].id.clock<s)},ph=class{constructor(e,t,i){this.doc=e,this.deleteSet=new er,this.beforeState=Ga(e.store),this.afterState=new Map,this.changed=new Map,this.changedParentTypes=new Map,this._mergeStructs=[],this.origin=t,this.meta=new Map,this.local=i,this.subdocsAdded=new Set,this.subdocsRemoved=new Set,this.subdocsLoaded=new Set,this._needFormattingCleanup=!1}},w0=(n,e)=>e.deleteSet.clients.size===0&&!ny(e.afterState,(t,i)=>e.beforeState.get(i)!==t)?!1:(Kf(e.deleteSet),OT(n,e),ti(n,e.deleteSet),!0),v0=(n,e,t)=>{let i=e._item;(i===null||i.id.clock<(n.beforeState.get(i.id.client)||0)&&!i.deleted)&&kt(n.changed,e,Sn).add(t)},lh=(n,e)=>{let t=n[e],i=n[e-1],r=e;for(;r>0;t=i,i=n[--r-1]){if(i.deleted===t.deleted&&i.constructor===t.constructor&&i.mergeWith(t)){t instanceof tt&&t.parentSub!==null&&t.parent._map.get(t.parentSub)===t&&t.parent._map.set(t.parentSub,i);continue}break}let s=e-r;return s&&n.splice(e+1-s,s),s},U0=(n,e,t)=>{for(let[i,r]of n.clients.entries()){let s=e.clients.get(i);for(let o=r.length-1;o>=0;o--){let a=r[o],c=a.clock+a.len;for(let l=Rn(s,a.clock),h=s[l];l<s.length&&h.id.clock<c;h=s[++l]){let u=s[l];if(a.clock+a.len<=u.id.clock)break;u instanceof tt&&u.deleted&&!u.keep&&t(u)&&u.gc(e,!1)}}}},F0=(n,e)=>{n.clients.forEach((t,i)=>{let r=e.clients.get(i);for(let s=t.length-1;s>=0;s--){let o=t[s],a=Fs(r.length-1,1+Rn(r,o.clock+o.len-1));for(let c=a,l=r[c];c>0&&l.id.clock>=o.clock;l=r[c])c-=1+lh(r,c)}})},dA=(n,e,t)=>{U0(n,e,t),F0(n,e)},O0=(n,e)=>{if(e<n.length){let t=n[e],i=t.doc,r=i.store,s=t.deleteSet,o=t._mergeStructs;try{Kf(s),t.afterState=Ga(t.doc.store),i.emit("beforeObserverCalls",[t,i]);let a=[];t.changed.forEach((c,l)=>a.push(()=>{(l._item===null||!l._item.deleted)&&l._callObserver(t,c)})),a.push(()=>{t.changedParentTypes.forEach((c,l)=>{l._dEH.l.length>0&&(l._item===null||!l._item.deleted)&&(c=c.filter(h=>h.target._item===null||!h.target._item.deleted),c.forEach(h=>{h.currentTarget=l,h._path=null}),c.sort((h,u)=>h.path.length-u.path.length),a.push(()=>{D0(l._dEH,c,t)}))}),a.push(()=>i.emit("afterTransaction",[t,i])),a.push(()=>{t._needFormattingCleanup&&BA(t)})}),_a(a,[])}finally{i.gc&&U0(s,r,i.gcFilter),F0(s,r),t.afterState.forEach((h,u)=>{let d=t.beforeState.get(u)||0;if(d!==h){let f=r.clients.get(u),p=_i(Rn(f,d),1);for(let y=f.length-1;y>=p;)y-=1+lh(f,y)}});for(let h=o.length-1;h>=0;h--){let{client:u,clock:d}=o[h].id,f=r.clients.get(u),p=Rn(f,d);p+1<f.length&&lh(f,p+1)>1||p>0&&lh(f,p)}if(!t.local&&t.afterState.get(i.clientID)!==t.beforeState.get(i.clientID)&&(rh(oo,Ra,"[yjs] ",La,Ca,"Changed the client-id because another client seems to be using it."),i.clientID=L0()),i.emit("afterTransactionCleanup",[t,i]),i._observers.has("update")){let h=new ni;w0(h,t)&&i.emit("update",[h.toUint8Array(),t.origin,i,t])}if(i._observers.has("updateV2")){let h=new yn;w0(h,t)&&i.emit("updateV2",[h.toUint8Array(),t.origin,i,t])}let{subdocsAdded:a,subdocsLoaded:c,subdocsRemoved:l}=t;(a.size>0||l.size>0||c.size>0)&&(a.forEach(h=>{h.clientID=i.clientID,h.collectionid==null&&(h.collectionid=i.collectionid),i.subdocs.add(h)}),l.forEach(h=>i.subdocs.delete(h)),i.emit("subdocs",[{loaded:c,added:a,removed:l},i,t]),l.forEach(h=>h.destroy())),n.length<=e+1?(i._transactionCleanups=[],i.emit("afterAllTransactions",[i,n])):O0(n,e+1)}}},et=(n,e,t=null,i=!0)=>{let r=n._transactionCleanups,s=!1,o=null;n._transaction===null&&(s=!0,n._transaction=new ph(n,t,i),r.push(n._transaction),r.length===1&&n.emit("beforeAllTransactions",[n]),n.emit("beforeTransaction",[n._transaction,n]));try{o=e(n._transaction)}finally{if(s){let a=n._transaction===r[0];n._transaction=null,a&&O0(r,0)}}return o},jf=class{constructor(e,t){this.insertions=t,this.deletions=e,this.meta=new Map}},_0=(n,e,t)=>{Pr(n,t.deletions,i=>{i instanceof tt&&e.scope.some(r=>r===n.doc||Pa(r,i))&&mp(i,!1)})},b0=(n,e,t)=>{let i=null,r=n.doc,s=n.scope;et(r,a=>{for(;e.length>0&&n.currStackItem===null;){let c=r.store,l=e.pop(),h=new Set,u=[],d=!1;Pr(a,l.insertions,f=>{if(f instanceof tt){if(f.redone!==null){let{item:p,diff:y}=Jf(c,f.id);y>0&&(p=$t(a,Me(p.id.client,p.id.clock+y))),f=p}!f.deleted&&s.some(p=>p===a.doc||Pa(p,f))&&u.push(f)}}),Pr(a,l.deletions,f=>{f instanceof tt&&s.some(p=>p===a.doc||Pa(p,f))&&!Vr(l.insertions,f.id)&&h.add(f)}),h.forEach(f=>{d=dx(a,f,h,l.insertions,n.ignoreRemoteMapChanges,n)!==null||d});for(let f=u.length-1;f>=0;f--){let p=u[f];n.deleteFilter(p)&&(p.delete(a),d=!0)}n.currStackItem=d?l:null}a.changed.forEach((c,l)=>{c.has(null)&&l._searchMarker&&(l._searchMarker.length=0)}),i=a},n);let o=n.currStackItem;if(o!=null){let a=i.changedParentTypes;n.emit("stack-item-popped",[{stackItem:o,type:t,changedParentTypes:a,origin:n},n]),n.currStackItem=null}return o},$f=class extends Xi{constructor(e,{captureTimeout:t=500,captureTransaction:i=c=>!0,deleteFilter:r=()=>!0,trackedOrigins:s=new Set([null]),ignoreRemoteMapChanges:o=!1,doc:a=vi(e)?e[0].doc:e instanceof tr?e:e.doc}={}){super(),this.scope=[],this.doc=a,this.addToScope(e),this.deleteFilter=r,s.add(this),this.trackedOrigins=s,this.captureTransaction=i,this.undoStack=[],this.redoStack=[],this.undoing=!1,this.redoing=!1,this.currStackItem=null,this.lastChange=0,this.ignoreRemoteMapChanges=o,this.captureTimeout=t,this.afterTransactionHandler=c=>{if(!this.captureTransaction(c)||!this.scope.some(x=>c.changedParentTypes.has(x)||x===this.doc)||!this.trackedOrigins.has(c.origin)&&(!c.origin||!this.trackedOrigins.has(c.origin.constructor)))return;let l=this.undoing,h=this.redoing,u=l?this.redoStack:this.undoStack;l?this.stopCapturing():h||this.clear(!1,!0);let d=new er;c.afterState.forEach((x,g)=>{let m=c.beforeState.get(g)||0,v=x-m;v>0&&Da(d,g,m,v)});let f=gn(),p=!1;if(this.lastChange>0&&f-this.lastChange<this.captureTimeout&&u.length>0&&!l&&!h){let x=u[u.length-1];x.deletions=Br([x.deletions,c.deleteSet]),x.insertions=Br([x.insertions,d])}else u.push(new jf(c.deleteSet,d)),p=!0;!l&&!h&&(this.lastChange=f),Pr(c,c.deleteSet,x=>{x instanceof tt&&this.scope.some(g=>g===c.doc||Pa(g,x))&&mp(x,!0)});let y=[{stackItem:u[u.length-1],origin:c.origin,type:l?"redo":"undo",changedParentTypes:c.changedParentTypes},this];p?this.emit("stack-item-added",y):this.emit("stack-item-updated",y)},this.doc.on("afterTransaction",this.afterTransactionHandler),this.doc.on("destroy",()=>{this.destroy()})}addToScope(e){let t=new Set(this.scope);e=vi(e)?e:[e],e.forEach(i=>{t.has(i)||(t.add(i),(i instanceof vt?i.doc!==this.doc:i!==this.doc)&&Hf("[yjs#509] Not same Y.Doc"),this.scope.push(i))})}addTrackedOrigin(e){this.trackedOrigins.add(e)}removeTrackedOrigin(e){this.trackedOrigins.delete(e)}clear(e=!0,t=!0){(e&&this.canUndo()||t&&this.canRedo())&&this.doc.transact(i=>{e&&(this.undoStack.forEach(r=>_0(i,this,r)),this.undoStack=[]),t&&(this.redoStack.forEach(r=>_0(i,this,r)),this.redoStack=[]),this.emit("stack-cleared",[{undoStackCleared:e,redoStackCleared:t}])})}stopCapturing(){this.lastChange=0}undo(){this.undoing=!0;let e;try{e=b0(this,this.undoStack,"undo")}finally{this.undoing=!1}return e}redo(){this.redoing=!0;let e;try{e=b0(this,this.redoStack,"redo")}finally{this.redoing=!1}return e}canUndo(){return this.undoStack.length>0}canRedo(){return this.redoStack.length>0}destroy(){this.trackedOrigins.delete(this),this.doc.off("afterTransaction",this.afterTransactionHandler),super.destroy()}};ii=class{constructor(e,t){this.gen=fA(e),this.curr=null,this.done=!1,this.filterSkips=t,this.next()}next(){do this.curr=this.gen.next().value||null;while(this.filterSkips&&this.curr!==null&&this.curr.constructor===Gt);return this.curr}},pA=n=>H0(n,hn),H0=(n,e=nn)=>{let t=[],i=new e(wt(n)),r=new ii(i,!1);for(let o=r.curr;o!==null;o=r.next())t.push(o);rh("Structs: ",t);let s=Ei(i);rh("DeleteSet: ",s)},mA=n=>z0(n,hn),z0=(n,e=nn)=>{let t=[],i=new e(wt(n)),r=new ii(i,!1);for(let s=r.curr;s!==null;s=r.next())t.push(s);return{structs:t,ds:Ei(i)}},ka=class{constructor(e){this.currClient=0,this.startClock=0,this.written=0,this.encoder=e,this.clientStructs=[]}},G0=n=>Na(n,hn,ni),V0=(n,e=co,t=nn)=>{let i=new e,r=new ii(new t(wt(n)),!1),s=r.curr;if(s!==null){let o=0,a=s.id.client,c=s.id.clock!==0,l=c?0:s.id.clock+s.length;for(;s!==null;s=r.next())a!==s.id.client&&(l!==0&&(o++,he(i.restEncoder,a),he(i.restEncoder,l)),a=s.id.client,l=0,c=s.id.clock!==0),s.constructor===Gt&&(c=!0),c||(l=s.id.clock+s.length);l!==0&&(o++,he(i.restEncoder,a),he(i.restEncoder,l));let h=xt();return he(h,o),dy(h,i.restEncoder),i.restEncoder=h,i.toUint8Array()}else return he(i.restEncoder,0),i.toUint8Array()},gA=n=>V0(n,nr,hn),W0=(n,e=nn)=>{let t=new Map,i=new Map,r=new ii(new e(wt(n)),!1),s=r.curr;if(s!==null){let o=s.id.client,a=s.id.clock;for(t.set(o,a);s!==null;s=r.next())o!==s.id.client&&(i.set(o,a),t.set(s.id.client,s.id.clock),o=s.id.client),a=s.id.clock+s.length;i.set(o,a)}return{from:t,to:i}},yA=n=>W0(n,hn),xA=(n,e)=>{if(n.constructor===Zt){let{client:t,clock:i}=n.id;return new Zt(Me(t,i+e),n.length-e)}else if(n.constructor===Gt){let{client:t,clock:i}=n.id;return new Gt(Me(t,i+e),n.length-e)}else{let t=n,{client:i,clock:r}=t.id;return new tt(Me(i,r+e),null,Me(i,r+e-1),null,t.rightOrigin,t.parent,t.parentSub,t.content.splice(e))}},Na=(n,e=nn,t=yn)=>{if(n.length===1)return n[0];let i=n.map(h=>new e(wt(h))),r=i.map(h=>new ii(h,!0)),s=null,o=new t,a=new ka(o);for(;r=r.filter(d=>d.curr!==null),r.sort((d,f)=>{if(d.curr.id.client===f.curr.id.client){let p=d.curr.id.clock-f.curr.id.clock;return p===0?d.curr.constructor===f.curr.constructor?0:d.curr.constructor===Gt?1:-1:p}else return f.curr.id.client-d.curr.id.client}),r.length!==0;){let h=r[0],u=h.curr.id.client;if(s!==null){let d=h.curr,f=!1;for(;d!==null&&d.id.clock+d.length<=s.struct.id.clock+s.struct.length&&d.id.client>=s.struct.id.client;)d=h.next(),f=!0;if(d===null||d.id.client!==u||f&&d.id.clock>s.struct.id.clock+s.struct.length)continue;if(u!==s.struct.id.client)Qi(a,s.struct,s.offset),s={struct:d,offset:0},h.next();else if(s.struct.id.clock+s.struct.length<d.id.clock)if(s.struct.constructor===Gt)s.struct.length=d.id.clock+d.length-s.struct.id.clock;else{Qi(a,s.struct,s.offset);let p=d.id.clock-s.struct.id.clock-s.struct.length;s={struct:new Gt(Me(u,s.struct.id.clock+s.struct.length),p),offset:0}}else{let p=s.struct.id.clock+s.struct.length-d.id.clock;p>0&&(s.struct.constructor===Gt?s.struct.length-=p:d=xA(d,p)),s.struct.mergeWith(d)||(Qi(a,s.struct,s.offset),s={struct:d,offset:0},h.next())}}else s={struct:h.curr,offset:0},h.next();for(let d=h.curr;d!==null&&d.id.client===u&&d.id.clock===s.struct.id.clock+s.struct.length&&d.constructor!==Gt;d=h.next())Qi(a,s.struct,s.offset),s={struct:d,offset:0}}s!==null&&(Qi(a,s.struct,s.offset),s=null),up(a);let c=i.map(h=>Ei(h)),l=Br(c);return ti(o,l),o.toUint8Array()},hp=(n,e,t=nn,i=yn)=>{let r=sp(e),s=new i,o=new ka(s),a=new t(wt(n)),c=new ii(a,!1);for(;c.curr;){let h=c.curr,u=h.id.client,d=r.get(u)||0;if(c.curr.constructor===Gt){c.next();continue}if(h.id.clock+h.length>d)for(Qi(o,h,_i(d-h.id.clock,0)),c.next();c.curr&&c.curr.id.client===u;)Qi(o,c.curr,0),c.next();else for(;c.curr&&c.curr.id.client===u&&c.curr.id.clock+c.curr.length<=d;)c.next()}up(o);let l=Ei(a);return ti(s,l),s.toUint8Array()},wA=(n,e)=>hp(n,e,hn,ni),q0=n=>{n.written>0&&(n.clientStructs.push({written:n.written,restEncoder:Ke(n.encoder.restEncoder)}),n.encoder.restEncoder=xt(),n.written=0)},Qi=(n,e,t)=>{n.written>0&&n.currClient!==e.id.client&&q0(n),n.written===0&&(n.currClient=e.id.client,n.encoder.writeClient(e.id.client),he(n.encoder.restEncoder,e.id.clock+t)),e.write(n.encoder,t),n.written++},up=n=>{q0(n);let e=n.encoder.restEncoder;he(e,n.clientStructs.length);for(let t=0;t<n.clientStructs.length;t++){let i=n.clientStructs[t];he(e,i.written),Ys(e,i.restEncoder)}},Sh=(n,e,t,i)=>{let r=new t(wt(n)),s=new ii(r,!1),o=new i,a=new ka(o);for(let l=s.curr;l!==null;l=s.next())Qi(a,e(l),0);up(a);let c=Ei(r);return ti(o,c),o.toUint8Array()},X0=({formatting:n=!0,subdocs:e=!0,yxml:t=!0}={})=>{let i=0,r=mt(),s=mt(),o=mt(),a=mt();return a.set(null,null),c=>{switch(c.constructor){case Zt:case Gt:return c;case tt:{let l=c,h=l.content;switch(h.constructor){case fo:break;case Ln:{if(t){let u=h.type;u instanceof Hr&&(u.nodeName=kt(s,u.nodeName,()=>"node-"+i)),u instanceof Ha&&(u.hookName=kt(s,u.hookName,()=>"hook-"+i))}break}case ir:{let u=h;u.arr=u.arr.map(()=>i);break}case zr:{let u=h;u.content=new Uint8Array([i]);break}case Gr:{let u=h;e&&(u.opts={},u.doc.guid=i+"");break}case Si:{let u=h;u.embed={};break}case _t:{let u=h;n&&(u.key=kt(o,u.key,()=>i+""),u.value=kt(a,u.value,()=>({i})));break}case za:{let u=h;u.arr=u.arr.map(()=>i);break}case zn:{let u=h;u.str=Il(i%10+"",u.str.length);break}default:Ut()}return l.parentSub&&(l.parentSub=kt(r,l.parentSub,()=>i+"")),i++,c}default:Ut()}}},vA=(n,e)=>Sh(n,X0(e),hn,ni),_A=(n,e)=>Sh(n,X0(e),nn,yn),bA=n=>Sh(n,vf,hn,yn),Y0=n=>Sh(n,vf,nn,ni),M0="You must not compute changes after the event-handler fired.",Nr=class{constructor(e,t){this.target=e,this.currentTarget=e,this.transaction=t,this._changes=null,this._keys=null,this._delta=null,this._path=null}get path(){return this._path||(this._path=MA(this.currentTarget,this.target))}deletes(e){return Vr(this.transaction.deleteSet,e.id)}get keys(){if(this._keys===null){if(this.transaction.doc._transactionCleanups.length===0)throw pn(M0);let e=new Map,t=this.target;this.transaction.changed.get(t).forEach(r=>{if(r!==null){let s=t._map.get(r),o,a;if(this.adds(s)){let c=s.left;for(;c!==null&&this.adds(c);)c=c.left;if(this.deletes(s))if(c!==null&&this.deletes(c))o="delete",a=Sl(c.content.getContent());else return;else c!==null&&this.deletes(c)?(o="update",a=Sl(c.content.getContent())):(o="add",a=void 0)}else if(this.deletes(s))o="delete",a=Sl(s.content.getContent());else return;e.set(r,{action:o,oldValue:a})}}),this._keys=e}return this._keys}get delta(){return this.changes.delta}adds(e){return e.id.clock>=(this.transaction.beforeState.get(e.id.client)||0)}get changes(){let e=this._changes;if(e===null){if(this.transaction.doc._transactionCleanups.length===0)throw pn(M0);let t=this.target,i=Sn(),r=Sn(),s=[];if(e={added:i,deleted:r,delta:s,keys:this.keys},this.transaction.changed.get(t).has(null)){let a=null,c=()=>{a&&s.push(a)};for(let l=t._start;l!==null;l=l.right)l.deleted?this.deletes(l)&&!this.adds(l)&&((a===null||a.delete===void 0)&&(c(),a={delete:0}),a.delete+=l.length,r.add(l)):this.adds(l)?((a===null||a.insert===void 0)&&(c(),a={insert:[]}),a.insert=a.insert.concat(l.content.getContent()),i.add(l)):((a===null||a.retain===void 0)&&(c(),a={retain:0}),a.retain+=l.length);a!==null&&a.retain===void 0&&c()}this._changes=e}return e}},MA=(n,e)=>{let t=[];for(;e._item!==null&&e!==n;){if(e._item.parentSub!==null)t.unshift(e._item.parentSub);else{let i=0,r=e._item.parent._start;for(;r!==e._item&&r!==null;)!r.deleted&&r.countable&&(i+=r.length),r=r.right;t.unshift(i)}e=e._item.parent}return t},Vt=()=>{Hf("Invalid access: Add Yjs type to a document before reading data.")},j0=80,dp=0,Zf=class{constructor(e,t){e.marker=!0,this.p=e,this.index=t,this.timestamp=dp++}},EA=n=>{n.timestamp=dp++},$0=(n,e,t)=>{n.p.marker=!1,n.p=e,e.marker=!0,n.index=t,n.timestamp=dp++},SA=(n,e,t)=>{if(n.length>=j0){let i=n.reduce((r,s)=>r.timestamp<s.timestamp?r:s);return $0(i,e,t),i}else{let i=new Zf(e,t);return n.push(i),i}},Th=(n,e)=>{if(n._start===null||e===0||n._searchMarker===null)return null;let t=n._searchMarker.length===0?null:n._searchMarker.reduce((s,o)=>Mr(e-s.index)<Mr(e-o.index)?s:o),i=n._start,r=0;for(t!==null&&(i=t.p,r=t.index,EA(t));i.right!==null&&r<e;){if(!i.deleted&&i.countable){if(e<r+i.length)break;r+=i.length}i=i.right}for(;i.left!==null&&r>e;)i=i.left,!i.deleted&&i.countable&&(r-=i.length);for(;i.left!==null&&i.left.id.client===i.id.client&&i.left.id.clock+i.left.length===i.id.clock;)i=i.left,!i.deleted&&i.countable&&(r-=i.length);return t!==null&&Mr(t.index-r)<i.parent.length/j0?($0(t,i,r),t):SA(n._searchMarker,i,r)},Ua=(n,e,t)=>{for(let i=n.length-1;i>=0;i--){let r=n[i];if(t>0){let s=r.p;for(s.marker=!1;s&&(s.deleted||!s.countable);)s=s.left,s&&!s.deleted&&s.countable&&(r.index-=s.length);if(s===null||s.marker===!0){n.splice(i,1);continue}r.p=s,s.marker=!0}(e<r.index||t>0&&e===r.index)&&(r.index=_i(e,r.index+t))}},TA=n=>{n.doc??Vt();let e=n._start,t=[];for(;e;)t.push(e),e=e.right;return t},Ah=(n,e,t)=>{let i=n,r=e.changedParentTypes;for(;kt(r,n,()=>[]).push(t),n._item!==null;)n=n._item.parent;D0(i._eH,t,e)},vt=class{constructor(){this._item=null,this._map=new Map,this._start=null,this.doc=null,this._length=0,this._eH=p0(),this._dEH=p0(),this._searchMarker=null}get parent(){return this._item?this._item.parent:null}_integrate(e,t){this.doc=e,this._item=t}_copy(){throw mn()}clone(){throw mn()}_write(e){}get _first(){let e=this._start;for(;e!==null&&e.deleted;)e=e.right;return e}_callObserver(e,t){!e.local&&this._searchMarker&&(this._searchMarker.length=0)}observe(e){m0(this._eH,e)}observeDeep(e){m0(this._dEH,e)}unobserve(e){g0(this._eH,e)}unobserveDeep(e){g0(this._dEH,e)}toJSON(){}},Z0=(n,e,t)=>{n.doc??Vt(),e<0&&(e=n._length+e),t<0&&(t=n._length+t);let i=t-e,r=[],s=n._start;for(;s!==null&&i>0;){if(s.countable&&!s.deleted){let o=s.content.getContent();if(o.length<=e)e-=o.length;else{for(let a=e;a<o.length&&i>0;a++)r.push(o[a]),i--;e=0}}s=s.right}return r},J0=n=>{n.doc??Vt();let e=[],t=n._start;for(;t!==null;){if(t.countable&&!t.deleted){let i=t.content.getContent();for(let r=0;r<i.length;r++)e.push(i[r])}t=t.right}return e},AA=(n,e)=>{let t=[],i=n._start;for(;i!==null;){if(i.countable&&Ji(i,e)){let r=i.content.getContent();for(let s=0;s<r.length;s++)t.push(r[s])}i=i.right}return t},Fa=(n,e)=>{let t=0,i=n._start;for(n.doc??Vt();i!==null;){if(i.countable&&!i.deleted){let r=i.content.getContent();for(let s=0;s<r.length;s++)e(r[s],t++,n)}i=i.right}},Q0=(n,e)=>{let t=[];return Fa(n,(i,r)=>{t.push(e(i,r,n))}),t},RA=n=>{let e=n._start,t=null,i=0;return{[Symbol.iterator](){return this},next:()=>{if(t===null){for(;e!==null&&e.deleted;)e=e.right;if(e===null)return{done:!0,value:void 0};t=e.content.getContent(),i=0,e=e.right}let r=t[i++];return t.length<=i&&(t=null),{done:!1,value:r}}}},K0=(n,e)=>{n.doc??Vt();let t=Th(n,e),i=n._start;for(t!==null&&(i=t.p,e-=t.index);i!==null;i=i.right)if(!i.deleted&&i.countable){if(e<i.length)return i.content.getContent()[e];e-=i.length}},mh=(n,e,t,i)=>{let r=t,s=n.doc,o=s.clientID,a=s.store,c=t===null?e._start:t.right,l=[],h=()=>{l.length>0&&(r=new tt(Me(o,ft(a,o)),r,r&&r.lastId,c,c&&c.id,e,null,new ir(l)),r.integrate(n,0),l=[])};i.forEach(u=>{if(u===null)l.push(u);else switch(u.constructor){case Number:case Object:case Boolean:case Array:case String:l.push(u);break;default:switch(h(),u.constructor){case Uint8Array:case ArrayBuffer:r=new tt(Me(o,ft(a,o)),r,r&&r.lastId,c,c&&c.id,e,null,new zr(new Uint8Array(u))),r.integrate(n,0);break;case tr:r=new tt(Me(o,ft(a,o)),r,r&&r.lastId,c,c&&c.id,e,null,new Gr(u)),r.integrate(n,0);break;default:if(u instanceof vt)r=new tt(Me(o,ft(a,o)),r,r&&r.lastId,c,c&&c.id,e,null,new Ln(u)),r.integrate(n,0);else throw new Error("Unexpected content type in insert operation")}}}),h()},ex=()=>pn("Length exceeded!"),tx=(n,e,t,i)=>{if(t>e._length)throw ex();if(t===0)return e._searchMarker&&Ua(e._searchMarker,t,i.length),mh(n,e,null,i);let r=t,s=Th(e,t),o=e._start;for(s!==null&&(o=s.p,t-=s.index,t===0&&(o=o.prev,t+=o&&o.countable&&!o.deleted?o.length:0));o!==null;o=o.right)if(!o.deleted&&o.countable){if(t<=o.length){t<o.length&&$t(n,Me(o.id.client,o.id.clock+t));break}t-=o.length}return e._searchMarker&&Ua(e._searchMarker,r,i.length),mh(n,e,o,i)},LA=(n,e,t)=>{let r=(e._searchMarker||[]).reduce((s,o)=>o.index>s.index?o:s,{index:0,p:e._start}).p;if(r)for(;r.right;)r=r.right;return mh(n,e,r,t)},nx=(n,e,t,i)=>{if(i===0)return;let r=t,s=i,o=Th(e,t),a=e._start;for(o!==null&&(a=o.p,t-=o.index);a!==null&&t>0;a=a.right)!a.deleted&&a.countable&&(t<a.length&&$t(n,Me(a.id.client,a.id.clock+t)),t-=a.length);for(;i>0&&a!==null;)a.deleted||(i<a.length&&$t(n,Me(a.id.client,a.id.clock+i)),a.delete(n),i-=a.length),a=a.right;if(i>0)throw ex();e._searchMarker&&Ua(e._searchMarker,r,-s+i)},gh=(n,e,t)=>{let i=e._map.get(t);i!==void 0&&i.delete(n)},fp=(n,e,t,i)=>{let r=e._map.get(t)||null,s=n.doc,o=s.clientID,a;if(i==null)a=new ir([i]);else switch(i.constructor){case Number:case Object:case Boolean:case Array:case String:case Date:case BigInt:a=new ir([i]);break;case Uint8Array:a=new zr(i);break;case tr:a=new Gr(i);break;default:if(i instanceof vt)a=new Ln(i);else throw new Error("Unexpected content type")}new tt(Me(o,ft(s.store,o)),r,r&&r.lastId,null,null,e,t,a).integrate(n,0)},pp=(n,e)=>{n.doc??Vt();let t=n._map.get(e);return t!==void 0&&!t.deleted?t.content.getContent()[t.length-1]:void 0},ix=n=>{let e={};return n.doc??Vt(),n._map.forEach((t,i)=>{t.deleted||(e[i]=t.content.getContent()[t.length-1])}),e},rx=(n,e)=>{n.doc??Vt();let t=n._map.get(e);return t!==void 0&&!t.deleted},CA=(n,e,t)=>{let i=n._map.get(e)||null;for(;i!==null&&(!t.sv.has(i.id.client)||i.id.clock>=(t.sv.get(i.id.client)||0));)i=i.left;return i!==null&&Ji(i,t)?i.content.getContent()[i.length-1]:void 0},sx=(n,e)=>{let t={};return n._map.forEach((i,r)=>{let s=i;for(;s!==null&&(!e.sv.has(s.id.client)||s.id.clock>=(e.sv.get(s.id.client)||0));)s=s.left;s!==null&&Ji(s,e)&&(t[r]=s.content.getContent()[s.length-1])}),t},ah=n=>(n.doc??Vt(),l0(n._map.entries(),e=>!e[1].deleted)),yh=class extends Nr{},Ur=class n extends vt{constructor(){super(),this._prelimContent=[],this._searchMarker=[]}static from(e){let t=new n;return t.push(e),t}_integrate(e,t){super._integrate(e,t),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new n}clone(){let e=new n;return e.insert(0,this.toArray().map(t=>t instanceof vt?t.clone():t)),e}get length(){return this.doc??Vt(),this._length}_callObserver(e,t){super._callObserver(e,t),Ah(this,e,new yh(this,e))}insert(e,t){this.doc!==null?et(this.doc,i=>{tx(i,this,e,t)}):this._prelimContent.splice(e,0,...t)}push(e){this.doc!==null?et(this.doc,t=>{LA(t,this,e)}):this._prelimContent.push(...e)}unshift(e){this.insert(0,e)}delete(e,t=1){this.doc!==null?et(this.doc,i=>{nx(i,this,e,t)}):this._prelimContent.splice(e,t)}get(e){return K0(this,e)}toArray(){return J0(this)}slice(e=0,t=this.length){return Z0(this,e,t)}toJSON(){return this.map(e=>e instanceof vt?e.toJSON():e)}map(e){return Q0(this,e)}forEach(e){Fa(this,e)}[Symbol.iterator](){return RA(this)}_write(e){e.writeTypeRef(JA)}},IA=n=>new Ur,xh=class extends Nr{constructor(e,t,i){super(e,t),this.keysChanged=i}},Fr=class n extends vt{constructor(e){super(),this._prelimContent=null,e===void 0?this._prelimContent=new Map:this._prelimContent=new Map(e)}_integrate(e,t){super._integrate(e,t),this._prelimContent.forEach((i,r)=>{this.set(r,i)}),this._prelimContent=null}_copy(){return new n}clone(){let e=new n;return this.forEach((t,i)=>{e.set(i,t instanceof vt?t.clone():t)}),e}_callObserver(e,t){Ah(this,e,new xh(this,e,t))}toJSON(){this.doc??Vt();let e={};return this._map.forEach((t,i)=>{if(!t.deleted){let r=t.content.getContent()[t.length-1];e[i]=r instanceof vt?r.toJSON():r}}),e}get size(){return[...ah(this)].length}keys(){return sh(ah(this),e=>e[0])}values(){return sh(ah(this),e=>e[1].content.getContent()[e[1].length-1])}entries(){return sh(ah(this),e=>[e[0],e[1].content.getContent()[e[1].length-1]])}forEach(e){this.doc??Vt(),this._map.forEach((t,i)=>{t.deleted||e(t.content.getContent()[t.length-1],i,this)})}[Symbol.iterator](){return this.entries()}delete(e){this.doc!==null?et(this.doc,t=>{gh(t,this,e)}):this._prelimContent.delete(e)}set(e,t){return this.doc!==null?et(this.doc,i=>{fp(i,this,e,t)}):this._prelimContent.set(e,t),t}get(e){return pp(this,e)}has(e){return rx(this,e)}clear(){this.doc!==null?et(this.doc,e=>{this.forEach(function(t,i,r){gh(e,r,i)})}):this._prelimContent.clear()}_write(e){e.writeTypeRef(QA)}},DA=n=>new Fr,Ki=(n,e)=>n===e||typeof n=="object"&&typeof e=="object"&&n&&e&&xf(n,e),Oa=class{constructor(e,t,i,r){this.left=e,this.right=t,this.index=i,this.currentAttributes=r}forward(){this.right===null&&Ut(),this.right.content.constructor===_t?this.right.deleted||po(this.currentAttributes,this.right.content):this.right.deleted||(this.index+=this.right.length),this.left=this.right,this.right=this.right.right}},E0=(n,e,t)=>{for(;e.right!==null&&t>0;)e.right.content.constructor===_t?e.right.deleted||po(e.currentAttributes,e.right.content):e.right.deleted||(t<e.right.length&&$t(n,Me(e.right.id.client,e.right.id.clock+t)),e.index+=e.right.length,t-=e.right.length),e.left=e.right,e.right=e.right.right;return e},ch=(n,e,t,i)=>{let r=new Map,s=i?Th(e,t):null;if(s){let o=new Oa(s.p.left,s.p,s.index,r);return E0(n,o,t-s.index)}else{let o=new Oa(null,e._start,0,r);return E0(n,o,t)}},ox=(n,e,t,i)=>{for(;t.right!==null&&(t.right.deleted===!0||t.right.content.constructor===_t&&Ki(i.get(t.right.content.key),t.right.content.value));)t.right.deleted||i.delete(t.right.content.key),t.forward();let r=n.doc,s=r.clientID;i.forEach((o,a)=>{let c=t.left,l=t.right,h=new tt(Me(s,ft(r.store,s)),c,c&&c.lastId,l,l&&l.id,e,null,new _t(a,o));h.integrate(n,0),t.right=h,t.forward()})},po=(n,e)=>{let{key:t,value:i}=e;i===null?n.delete(t):n.set(t,i)},ax=(n,e)=>{for(;n.right!==null;){if(!(n.right.deleted||n.right.content.constructor===_t&&Ki(e[n.right.content.key]??null,n.right.content.value)))break;n.forward()}},cx=(n,e,t,i)=>{let r=n.doc,s=r.clientID,o=new Map;for(let a in i){let c=i[a],l=t.currentAttributes.get(a)??null;if(!Ki(l,c)){o.set(a,l);let{left:h,right:u}=t;t.right=new tt(Me(s,ft(r.store,s)),h,h&&h.lastId,u,u&&u.id,e,null,new _t(a,c)),t.right.integrate(n,0),t.forward()}}return o},zf=(n,e,t,i,r)=>{t.currentAttributes.forEach((d,f)=>{r[f]===void 0&&(r[f]=null)});let s=n.doc,o=s.clientID;ax(t,r);let a=cx(n,e,t,r),c=i.constructor===String?new zn(i):i instanceof vt?new Ln(i):new Si(i),{left:l,right:h,index:u}=t;e._searchMarker&&Ua(e._searchMarker,t.index,c.getLength()),h=new tt(Me(o,ft(s.store,o)),l,l&&l.lastId,h,h&&h.id,e,null,c),h.integrate(n,0),t.right=h,t.index=u,t.forward(),ox(n,e,t,a)},S0=(n,e,t,i,r)=>{let s=n.doc,o=s.clientID;ax(t,r);let a=cx(n,e,t,r);e:for(;t.right!==null&&(i>0||a.size>0&&(t.right.deleted||t.right.content.constructor===_t));){if(!t.right.deleted)switch(t.right.content.constructor){case _t:{let{key:c,value:l}=t.right.content,h=r[c];if(h!==void 0){if(Ki(h,l))a.delete(c);else{if(i===0)break e;a.set(c,l)}t.right.delete(n)}else t.currentAttributes.set(c,l);break}default:i<t.right.length&&$t(n,Me(t.right.id.client,t.right.id.clock+i)),i-=t.right.length;break}t.forward()}if(i>0){let c="";for(;i>0;i--)c+=`
`;t.right=new tt(Me(o,ft(s.store,o)),t.left,t.left&&t.left.lastId,t.right,t.right&&t.right.id,e,null,new zn(c)),t.right.integrate(n,0),t.forward()}ox(n,e,t,a)},lx=(n,e,t,i,r)=>{let s=e,o=mt();for(;s&&(!s.countable||s.deleted);){if(!s.deleted&&s.content.constructor===_t){let l=s.content;o.set(l.key,l)}s=s.right}let a=0,c=!1;for(;e!==s;){if(t===e&&(c=!0),!e.deleted){let l=e.content;if(l.constructor===_t){let{key:h,value:u}=l,d=i.get(h)??null;(o.get(h)!==l||d===u)&&(e.delete(n),a++,!c&&(r.get(h)??null)===u&&d!==u&&(d===null?r.delete(h):r.set(h,d))),!c&&!e.deleted&&po(r,l)}}e=e.right}return a},PA=(n,e)=>{for(;e&&e.right&&(e.right.deleted||!e.right.countable);)e=e.right;let t=new Set;for(;e&&(e.deleted||!e.countable);){if(!e.deleted&&e.content.constructor===_t){let i=e.content.key;t.has(i)?e.delete(n):t.add(i)}e=e.left}},hx=n=>{let e=0;return et(n.doc,t=>{let i=n._start,r=n._start,s=mt(),o=Ml(s);for(;r;)r.deleted===!1&&(r.content.constructor===_t?po(o,r.content):(e+=lx(t,i,r,s,o),s=Ml(o),i=r)),r=r.right}),e},BA=n=>{let e=new Set,t=n.doc;for(let[i,r]of n.afterState.entries()){let s=n.beforeState.get(i)||0;r!==s&&N0(n,t.store.clients.get(i),s,r,o=>{!o.deleted&&o.content.constructor===_t&&o.constructor!==Zt&&e.add(o.parent)})}et(t,i=>{Pr(n,n.deleteSet,r=>{if(r instanceof Zt||!r.parent._hasFormatting||e.has(r.parent))return;let s=r.parent;r.content.constructor===_t?e.add(s):PA(i,r)});for(let r of e)hx(r)})},T0=(n,e,t)=>{let i=t,r=Ml(e.currentAttributes),s=e.right;for(;t>0&&e.right!==null;){if(e.right.deleted===!1)switch(e.right.content.constructor){case Ln:case Si:case zn:t<e.right.length&&$t(n,Me(e.right.id.client,e.right.id.clock+t)),t-=e.right.length,e.right.delete(n);break}e.forward()}s&&lx(n,s,e.right,r,e.currentAttributes);let o=(e.left||e.right).parent;return o._searchMarker&&Ua(o._searchMarker,e.index,-i+t),e},wh=class extends Nr{constructor(e,t,i){super(e,t),this.childListChanged=!1,this.keysChanged=new Set,i.forEach(r=>{r===null?this.childListChanged=!0:this.keysChanged.add(r)})}get changes(){if(this._changes===null){let e={keys:this.keys,delta:this.delta,added:new Set,deleted:new Set};this._changes=e}return this._changes}get delta(){if(this._delta===null){let e=this.target.doc,t=[];et(e,i=>{let r=new Map,s=new Map,o=this.target._start,a=null,c={},l="",h=0,u=0,d=()=>{if(a!==null){let f=null;switch(a){case"delete":u>0&&(f={delete:u}),u=0;break;case"insert":(typeof l=="object"||l.length>0)&&(f={insert:l},r.size>0&&(f.attributes={},r.forEach((p,y)=>{p!==null&&(f.attributes[y]=p)}))),l="";break;case"retain":h>0&&(f={retain:h},Ly(c)||(f.attributes=Ty({},c))),h=0;break}f&&t.push(f),a=null}};for(;o!==null;){switch(o.content.constructor){case Ln:case Si:this.adds(o)?this.deletes(o)||(d(),a="insert",l=o.content.getContent()[0],d()):this.deletes(o)?(a!=="delete"&&(d(),a="delete"),u+=1):o.deleted||(a!=="retain"&&(d(),a="retain"),h+=1);break;case zn:this.adds(o)?this.deletes(o)||(a!=="insert"&&(d(),a="insert"),l+=o.content.str):this.deletes(o)?(a!=="delete"&&(d(),a="delete"),u+=o.length):o.deleted||(a!=="retain"&&(d(),a="retain"),h+=o.length);break;case _t:{let{key:f,value:p}=o.content;if(this.adds(o)){if(!this.deletes(o)){let y=r.get(f)??null;Ki(y,p)?p!==null&&o.delete(i):(a==="retain"&&d(),Ki(p,s.get(f)??null)?delete c[f]:c[f]=p)}}else if(this.deletes(o)){s.set(f,p);let y=r.get(f)??null;Ki(y,p)||(a==="retain"&&d(),c[f]=y)}else if(!o.deleted){s.set(f,p);let y=c[f];y!==void 0&&(Ki(y,p)?y!==null&&o.delete(i):(a==="retain"&&d(),p===null?delete c[f]:c[f]=p))}o.deleted||(a==="insert"&&d(),po(r,o.content));break}}o=o.right}for(d();t.length>0;){let f=t[t.length-1];if(f.retain!==void 0&&f.attributes===void 0)t.pop();else break}}),this._delta=t}return this._delta}},ho=class n extends vt{constructor(e){super(),this._pending=e!==void 0?[()=>this.insert(0,e)]:[],this._searchMarker=[],this._hasFormatting=!1}get length(){return this.doc??Vt(),this._length}_integrate(e,t){super._integrate(e,t);try{this._pending.forEach(i=>i())}catch(i){console.error(i)}this._pending=null}_copy(){return new n}clone(){let e=new n;return e.applyDelta(this.toDelta()),e}_callObserver(e,t){super._callObserver(e,t);let i=new wh(this,e,t);Ah(this,e,i),!e.local&&this._hasFormatting&&(e._needFormattingCleanup=!0)}toString(){this.doc??Vt();let e="",t=this._start;for(;t!==null;)!t.deleted&&t.countable&&t.content.constructor===zn&&(e+=t.content.str),t=t.right;return e}toJSON(){return this.toString()}applyDelta(e,{sanitize:t=!0}={}){this.doc!==null?et(this.doc,i=>{let r=new Oa(null,this._start,0,new Map);for(let s=0;s<e.length;s++){let o=e[s];if(o.insert!==void 0){let a=!t&&typeof o.insert=="string"&&s===e.length-1&&r.right===null&&o.insert.slice(-1)===`
`?o.insert.slice(0,-1):o.insert;(typeof a!="string"||a.length>0)&&zf(i,this,r,a,o.attributes||{})}else o.retain!==void 0?S0(i,this,r,o.retain,o.attributes||{}):o.delete!==void 0&&T0(i,r,o.delete)}}):this._pending.push(()=>this.applyDelta(e))}toDelta(e,t,i){this.doc??Vt();let r=[],s=new Map,o=this.doc,a="",c=this._start;function l(){if(a.length>0){let u={},d=!1;s.forEach((p,y)=>{d=!0,u[y]=p});let f={insert:a};d&&(f.attributes=u),r.push(f),a=""}}let h=()=>{for(;c!==null;){if(Ji(c,e)||t!==void 0&&Ji(c,t))switch(c.content.constructor){case zn:{let u=s.get("ychange");e!==void 0&&!Ji(c,e)?(u===void 0||u.user!==c.id.client||u.type!=="removed")&&(l(),s.set("ychange",i?i("removed",c.id):{type:"removed"})):t!==void 0&&!Ji(c,t)?(u===void 0||u.user!==c.id.client||u.type!=="added")&&(l(),s.set("ychange",i?i("added",c.id):{type:"added"})):u!==void 0&&(l(),s.delete("ychange")),a+=c.content.str;break}case Ln:case Si:{l();let u={insert:c.content.getContent()[0]};if(s.size>0){let d={};u.attributes=d,s.forEach((f,p)=>{d[p]=f})}r.push(u);break}case _t:Ji(c,e)&&(l(),po(s,c.content));break}c=c.right}l()};return e||t?et(o,u=>{e&&qf(u,e),t&&qf(u,t),h()},"cleanup"):h(),r}insert(e,t,i){if(t.length<=0)return;let r=this.doc;r!==null?et(r,s=>{let o=ch(s,this,e,!i);i||(i={},o.currentAttributes.forEach((a,c)=>{i[c]=a})),zf(s,this,o,t,i)}):this._pending.push(()=>this.insert(e,t,i))}insertEmbed(e,t,i){let r=this.doc;r!==null?et(r,s=>{let o=ch(s,this,e,!i);zf(s,this,o,t,i||{})}):this._pending.push(()=>this.insertEmbed(e,t,i||{}))}delete(e,t){if(t===0)return;let i=this.doc;i!==null?et(i,r=>{T0(r,ch(r,this,e,!0),t)}):this._pending.push(()=>this.delete(e,t))}format(e,t,i){if(t===0)return;let r=this.doc;r!==null?et(r,s=>{let o=ch(s,this,e,!1);o.right!==null&&S0(s,this,o,t,i)}):this._pending.push(()=>this.format(e,t,i))}removeAttribute(e){this.doc!==null?et(this.doc,t=>{gh(t,this,e)}):this._pending.push(()=>this.removeAttribute(e))}setAttribute(e,t){this.doc!==null?et(this.doc,i=>{fp(i,this,e,t)}):this._pending.push(()=>this.setAttribute(e,t))}getAttribute(e){return pp(this,e)}getAttributes(){return ix(this)}_write(e){e.writeTypeRef(KA)}},kA=n=>new ho,Ia=class{constructor(e,t=()=>!0){this._filter=t,this._root=e,this._currentNode=e._start,this._firstCall=!0,e.doc??Vt()}[Symbol.iterator](){return this}next(){let e=this._currentNode,t=e&&e.content&&e.content.type;if(e!==null&&(!this._firstCall||e.deleted||!this._filter(t)))do if(t=e.content.type,!e.deleted&&(t.constructor===Hr||t.constructor===Or)&&t._start!==null)e=t._start;else for(;e!==null;){let i=e.next;if(i!==null){e=i;break}else e.parent===this._root?e=null:e=e.parent._item}while(e!==null&&(e.deleted||!this._filter(e.content.type)));return this._firstCall=!1,e===null?{value:void 0,done:!0}:(this._currentNode=e,{value:e.content.type,done:!1})}},Or=class n extends vt{constructor(){super(),this._prelimContent=[]}get firstChild(){let e=this._first;return e?e.content.getContent()[0]:null}_integrate(e,t){super._integrate(e,t),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new n}clone(){let e=new n;return e.insert(0,this.toArray().map(t=>t instanceof vt?t.clone():t)),e}get length(){return this.doc??Vt(),this._prelimContent===null?this._length:this._prelimContent.length}createTreeWalker(e){return new Ia(this,e)}querySelector(e){e=e.toUpperCase();let i=new Ia(this,r=>r.nodeName&&r.nodeName.toUpperCase()===e).next();return i.done?null:i.value}querySelectorAll(e){return e=e.toUpperCase(),Hn(new Ia(this,t=>t.nodeName&&t.nodeName.toUpperCase()===e))}_callObserver(e,t){Ah(this,e,new vh(this,t,e))}toString(){return Q0(this,e=>e.toString()).join("")}toJSON(){return this.toString()}toDOM(e=document,t={},i){let r=e.createDocumentFragment();return i!==void 0&&i._createAssociation(r,this),Fa(this,s=>{r.insertBefore(s.toDOM(e,t,i),null)}),r}insert(e,t){this.doc!==null?et(this.doc,i=>{tx(i,this,e,t)}):this._prelimContent.splice(e,0,...t)}insertAfter(e,t){if(this.doc!==null)et(this.doc,i=>{let r=e&&e instanceof vt?e._item:e;mh(i,this,r,t)});else{let i=this._prelimContent,r=e===null?0:i.findIndex(s=>s===e)+1;if(r===0&&e!==null)throw pn("Reference item not found");i.splice(r,0,...t)}}delete(e,t=1){this.doc!==null?et(this.doc,i=>{nx(i,this,e,t)}):this._prelimContent.splice(e,t)}toArray(){return J0(this)}push(e){this.insert(this.length,e)}unshift(e){this.insert(0,e)}get(e){return K0(this,e)}slice(e=0,t=this.length){return Z0(this,e,t)}forEach(e){Fa(this,e)}_write(e){e.writeTypeRef(tR)}},NA=n=>new Or,Hr=class n extends Or{constructor(e="UNDEFINED"){super(),this.nodeName=e,this._prelimAttrs=new Map}get nextSibling(){let e=this._item?this._item.next:null;return e?e.content.type:null}get prevSibling(){let e=this._item?this._item.prev:null;return e?e.content.type:null}_integrate(e,t){super._integrate(e,t),this._prelimAttrs.forEach((i,r)=>{this.setAttribute(r,i)}),this._prelimAttrs=null}_copy(){return new n(this.nodeName)}clone(){let e=new n(this.nodeName),t=this.getAttributes();return Ay(t,(i,r)=>{e.setAttribute(r,i)}),e.insert(0,this.toArray().map(i=>i instanceof vt?i.clone():i)),e}toString(){let e=this.getAttributes(),t=[],i=[];for(let a in e)i.push(a);i.sort();let r=i.length;for(let a=0;a<r;a++){let c=i[a];t.push(c+'="'+e[c]+'"')}let s=this.nodeName.toLocaleLowerCase(),o=t.length>0?" "+t.join(" "):"";return`<${s}${o}>${super.toString()}</${s}>`}removeAttribute(e){this.doc!==null?et(this.doc,t=>{gh(t,this,e)}):this._prelimAttrs.delete(e)}setAttribute(e,t){this.doc!==null?et(this.doc,i=>{fp(i,this,e,t)}):this._prelimAttrs.set(e,t)}getAttribute(e){return pp(this,e)}hasAttribute(e){return rx(this,e)}getAttributes(e){return e?sx(this,e):ix(this)}toDOM(e=document,t={},i){let r=e.createElement(this.nodeName),s=this.getAttributes();for(let o in s){let a=s[o];typeof a=="string"&&r.setAttribute(o,a)}return Fa(this,o=>{r.appendChild(o.toDOM(e,t,i))}),i!==void 0&&i._createAssociation(r,this),r}_write(e){e.writeTypeRef(eR),e.writeKey(this.nodeName)}},UA=n=>new Hr(n.readKey()),vh=class extends Nr{constructor(e,t,i){super(e,i),this.childListChanged=!1,this.attributesChanged=new Set,t.forEach(r=>{r===null?this.childListChanged=!0:this.attributesChanged.add(r)})}},Ha=class n extends Fr{constructor(e){super(),this.hookName=e}_copy(){return new n(this.hookName)}clone(){let e=new n(this.hookName);return this.forEach((t,i)=>{e.set(i,t)}),e}toDOM(e=document,t={},i){let r=t[this.hookName],s;return r!==void 0?s=r.createDom(this):s=document.createElement(this.hookName),s.setAttribute("data-yjs-hook",this.hookName),i!==void 0&&i._createAssociation(s,this),s}_write(e){e.writeTypeRef(nR),e.writeKey(this.hookName)}},FA=n=>new Ha(n.readKey()),_h=class n extends ho{get nextSibling(){let e=this._item?this._item.next:null;return e?e.content.type:null}get prevSibling(){let e=this._item?this._item.prev:null;return e?e.content.type:null}_copy(){return new n}clone(){let e=new n;return e.applyDelta(this.toDelta()),e}toDOM(e=document,t,i){let r=e.createTextNode(this.toString());return i!==void 0&&i._createAssociation(r,this),r}toString(){return this.toDelta().map(e=>{let t=[];for(let r in e.attributes){let s=[];for(let o in e.attributes[r])s.push({key:o,value:e.attributes[r][o]});s.sort((o,a)=>o.key<a.key?-1:1),t.push({nodeName:r,attrs:s})}t.sort((r,s)=>r.nodeName<s.nodeName?-1:1);let i="";for(let r=0;r<t.length;r++){let s=t[r];i+=`<${s.nodeName}`;for(let o=0;o<s.attrs.length;o++){let a=s.attrs[o];i+=` ${a.key}="${a.value}"`}i+=">"}i+=e.insert;for(let r=t.length-1;r>=0;r--)i+=`</${t[r].nodeName}>`;return i}).join("")}toJSON(){return this.toString()}_write(e){e.writeTypeRef(iR)}},OA=n=>new _h,uo=class{constructor(e,t){this.id=e,this.length=t}get deleted(){throw mn()}mergeWith(e){return!1}write(e,t,i){throw mn()}integrate(e,t){throw mn()}},HA=0,Zt=class extends uo{get deleted(){return!0}delete(){}mergeWith(e){return this.constructor!==e.constructor?!1:(this.length+=e.length,!0)}integrate(e,t){t>0&&(this.id.clock+=t,this.length-=t),k0(e.doc.store,this)}write(e,t){e.writeInfo(HA),e.writeLen(this.length-t)}getMissing(e,t){return null}},zr=class n{constructor(e){this.content=e}getLength(){return 1}getContent(){return[this.content]}isCountable(){return!0}copy(){return new n(this.content)}splice(e){throw mn()}mergeWith(e){return!1}integrate(e,t){}delete(e){}gc(e){}write(e,t){e.writeBuf(this.content)}getRef(){return 3}},zA=n=>new zr(n.readBuf()),fo=class n{constructor(e){this.len=e}getLength(){return this.len}getContent(){return[]}isCountable(){return!1}copy(){return new n(this.len)}splice(e){let t=new n(this.len-e);return this.len=e,t}mergeWith(e){return this.len+=e.len,!0}integrate(e,t){Da(e.deleteSet,t.id.client,t.id.clock,this.len),t.markDeleted()}delete(e){}gc(e){}write(e,t){e.writeLen(this.len-t)}getRef(){return 1}},GA=n=>new fo(n.readLen()),ux=(n,e)=>new tr({guid:n,...e,shouldLoad:e.shouldLoad||e.autoLoad||!1}),Gr=class n{constructor(e){e._item&&console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."),this.doc=e;let t={};this.opts=t,e.gc||(t.gc=!1),e.autoLoad&&(t.autoLoad=!0),e.meta!==null&&(t.meta=e.meta)}getLength(){return 1}getContent(){return[this.doc]}isCountable(){return!0}copy(){return new n(ux(this.doc.guid,this.opts))}splice(e){throw mn()}mergeWith(e){return!1}integrate(e,t){this.doc._item=t,e.subdocsAdded.add(this.doc),this.doc.shouldLoad&&e.subdocsLoaded.add(this.doc)}delete(e){e.subdocsAdded.has(this.doc)?e.subdocsAdded.delete(this.doc):e.subdocsRemoved.add(this.doc)}gc(e){}write(e,t){e.writeString(this.doc.guid),e.writeAny(this.opts)}getRef(){return 9}},VA=n=>new Gr(ux(n.readString(),n.readAny())),Si=class n{constructor(e){this.embed=e}getLength(){return 1}getContent(){return[this.embed]}isCountable(){return!0}copy(){return new n(this.embed)}splice(e){throw mn()}mergeWith(e){return!1}integrate(e,t){}delete(e){}gc(e){}write(e,t){e.writeJSON(this.embed)}getRef(){return 5}},WA=n=>new Si(n.readJSON()),_t=class n{constructor(e,t){this.key=e,this.value=t}getLength(){return 1}getContent(){return[]}isCountable(){return!1}copy(){return new n(this.key,this.value)}splice(e){throw mn()}mergeWith(e){return!1}integrate(e,t){let i=t.parent;i._searchMarker=null,i._hasFormatting=!0}delete(e){}gc(e){}write(e,t){e.writeKey(this.key),e.writeJSON(this.value)}getRef(){return 6}},qA=n=>new _t(n.readKey(),n.readJSON()),za=class n{constructor(e){this.arr=e}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new n(this.arr)}splice(e){let t=new n(this.arr.slice(e));return this.arr=this.arr.slice(0,e),t}mergeWith(e){return this.arr=this.arr.concat(e.arr),!0}integrate(e,t){}delete(e){}gc(e){}write(e,t){let i=this.arr.length;e.writeLen(i-t);for(let r=t;r<i;r++){let s=this.arr[r];e.writeString(s===void 0?"undefined":JSON.stringify(s))}}getRef(){return 2}},XA=n=>{let e=n.readLen(),t=[];for(let i=0;i<e;i++){let r=n.readString();r==="undefined"?t.push(void 0):t.push(JSON.parse(r))}return new za(t)},YA=ba("node_env")==="development",ir=class n{constructor(e){this.arr=e,YA&&wf(e)}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new n(this.arr)}splice(e){let t=new n(this.arr.slice(e));return this.arr=this.arr.slice(0,e),t}mergeWith(e){return this.arr=this.arr.concat(e.arr),!0}integrate(e,t){}delete(e){}gc(e){}write(e,t){let i=this.arr.length;e.writeLen(i-t);for(let r=t;r<i;r++){let s=this.arr[r];e.writeAny(s)}}getRef(){return 8}},jA=n=>{let e=n.readLen(),t=[];for(let i=0;i<e;i++)t.push(n.readAny());return new ir(t)},zn=class n{constructor(e){this.str=e}getLength(){return this.str.length}getContent(){return this.str.split("")}isCountable(){return!0}copy(){return new n(this.str)}splice(e){let t=new n(this.str.slice(e));this.str=this.str.slice(0,e);let i=this.str.charCodeAt(e-1);return i>=55296&&i<=56319&&(this.str=this.str.slice(0,e-1)+"\uFFFD",t.str="\uFFFD"+t.str.slice(1)),t}mergeWith(e){return this.str+=e.str,!0}integrate(e,t){}delete(e){}gc(e){}write(e,t){e.writeString(t===0?this.str:this.str.slice(t))}getRef(){return 4}},$A=n=>new zn(n.readString()),ZA=[IA,DA,kA,UA,NA,FA,OA],JA=0,QA=1,KA=2,eR=3,tR=4,nR=5,iR=6,Ln=class n{constructor(e){this.type=e}getLength(){return 1}getContent(){return[this.type]}isCountable(){return!0}copy(){return new n(this.type._copy())}splice(e){throw mn()}mergeWith(e){return!1}integrate(e,t){this.type._integrate(e.doc,t)}delete(e){let t=this.type._start;for(;t!==null;)t.deleted?t.id.clock<(e.beforeState.get(t.id.client)||0)&&e._mergeStructs.push(t):t.delete(e),t=t.right;this.type._map.forEach(i=>{i.deleted?i.id.clock<(e.beforeState.get(i.id.client)||0)&&e._mergeStructs.push(i):i.delete(e)}),e.changed.delete(this.type)}gc(e){let t=this.type._start;for(;t!==null;)t.gc(e,!0),t=t.right;this.type._start=null,this.type._map.forEach(i=>{for(;i!==null;)i.gc(e,!0),i=i.left}),this.type._map=new Map}write(e,t){this.type._write(e)}getRef(){return 7}},rR=n=>new Ln(ZA[n.readTypeRef()](n)),Jf=(n,e)=>{let t=e,i=0,r;do i>0&&(t=Me(t.client,t.clock+i)),r=Dr(n,t),i=t.clock-r.id.clock,t=r.redone;while(t!==null&&r instanceof tt);return{item:r,diff:i}},mp=(n,e)=>{for(;n!==null&&n.keep!==e;)n.keep=e,n=n.parent._item},bh=(n,e,t)=>{let{client:i,clock:r}=e.id,s=new tt(Me(i,r+t),e,Me(i,r+t-1),e.right,e.rightOrigin,e.parent,e.parentSub,e.content.splice(t));return e.deleted&&s.markDeleted(),e.keep&&(s.keep=!0),e.redone!==null&&(s.redone=Me(e.redone.client,e.redone.clock+t)),e.right=s,s.right!==null&&(s.right.left=s),n._mergeStructs.push(s),s.parentSub!==null&&s.right===null&&s.parent._map.set(s.parentSub,s),e.length=t,s},A0=(n,e)=>ca(n,t=>Vr(t.deletions,e)),dx=(n,e,t,i,r,s)=>{let o=n.doc,a=o.store,c=o.clientID,l=e.redone;if(l!==null)return $t(n,l);let h=e.parent._item,u=null,d;if(h!==null&&h.deleted===!0){if(h.redone===null&&(!t.has(h)||dx(n,h,t,i,r,s)===null))return null;for(;h.redone!==null;)h=$t(n,h.redone)}let f=h===null?e.parent:h.content.type;if(e.parentSub===null){for(u=e.left,d=e;u!==null;){let g=u;for(;g!==null&&g.parent._item!==h;)g=g.redone===null?null:$t(n,g.redone);if(g!==null&&g.parent._item===h){u=g;break}u=u.left}for(;d!==null;){let g=d;for(;g!==null&&g.parent._item!==h;)g=g.redone===null?null:$t(n,g.redone);if(g!==null&&g.parent._item===h){d=g;break}d=d.right}}else if(d=null,e.right&&!r){for(u=e;u!==null&&u.right!==null&&(u.right.redone||Vr(i,u.right.id)||A0(s.undoStack,u.right.id)||A0(s.redoStack,u.right.id));)for(u=u.right;u.redone;)u=$t(n,u.redone);if(u&&u.right!==null)return null}else u=f._map.get(e.parentSub)||null;let p=ft(a,c),y=Me(c,p),x=new tt(y,u,u&&u.lastId,d,d&&d.id,f,e.parentSub,e.content.copy());return e.redone=y,mp(x,!0),x.integrate(n,0),x},tt=class n extends uo{constructor(e,t,i,r,s,o,a,c){super(e,c.getLength()),this.origin=i,this.left=t,this.right=r,this.rightOrigin=s,this.parent=o,this.parentSub=a,this.redone=null,this.content=c,this.info=this.content.isCountable()?2:0}set marker(e){(this.info&8)>0!==e&&(this.info^=8)}get marker(){return(this.info&8)>0}get keep(){return(this.info&1)>0}set keep(e){this.keep!==e&&(this.info^=1)}get countable(){return(this.info&2)>0}get deleted(){return(this.info&4)>0}set deleted(e){this.deleted!==e&&(this.info^=4)}markDeleted(){this.info|=4}getMissing(e,t){if(this.origin&&this.origin.client!==this.id.client&&this.origin.clock>=ft(t,this.origin.client))return this.origin.client;if(this.rightOrigin&&this.rightOrigin.client!==this.id.client&&this.rightOrigin.clock>=ft(t,this.rightOrigin.client))return this.rightOrigin.client;if(this.parent&&this.parent.constructor===Mi&&this.id.client!==this.parent.client&&this.parent.clock>=ft(t,this.parent.client))return this.parent.client;if(this.origin&&(this.left=Yf(e,t,this.origin),this.origin=this.left.lastId),this.rightOrigin&&(this.right=$t(e,this.rightOrigin),this.rightOrigin=this.right.id),this.left&&this.left.constructor===Zt||this.right&&this.right.constructor===Zt)this.parent=null;else if(!this.parent)this.left&&this.left.constructor===n?(this.parent=this.left.parent,this.parentSub=this.left.parentSub):this.right&&this.right.constructor===n&&(this.parent=this.right.parent,this.parentSub=this.right.parentSub);else if(this.parent.constructor===Mi){let i=Dr(t,this.parent);i.constructor===Zt?this.parent=null:this.parent=i.content.type}return null}integrate(e,t){if(t>0&&(this.id.clock+=t,this.left=Yf(e,e.doc.store,Me(this.id.client,this.id.clock-1)),this.origin=this.left.lastId,this.content=this.content.splice(t),this.length-=t),this.parent){if(!this.left&&(!this.right||this.right.left!==null)||this.left&&this.left.right!==this.right){let i=this.left,r;if(i!==null)r=i.right;else if(this.parentSub!==null)for(r=this.parent._map.get(this.parentSub)||null;r!==null&&r.left!==null;)r=r.left;else r=this.parent._start;let s=new Set,o=new Set;for(;r!==null&&r!==this.right;){if(o.add(r),s.add(r),Ir(this.origin,r.origin)){if(r.id.client<this.id.client)i=r,s.clear();else if(Ir(this.rightOrigin,r.rightOrigin))break}else if(r.origin!==null&&o.has(Dr(e.doc.store,r.origin)))s.has(Dr(e.doc.store,r.origin))||(i=r,s.clear());else break;r=r.right}this.left=i}if(this.left!==null){let i=this.left.right;this.right=i,this.left.right=this}else{let i;if(this.parentSub!==null)for(i=this.parent._map.get(this.parentSub)||null;i!==null&&i.left!==null;)i=i.left;else i=this.parent._start,this.parent._start=this;this.right=i}this.right!==null?this.right.left=this:this.parentSub!==null&&(this.parent._map.set(this.parentSub,this),this.left!==null&&this.left.delete(e)),this.parentSub===null&&this.countable&&!this.deleted&&(this.parent._length+=this.length),k0(e.doc.store,this),this.content.integrate(e,this),v0(e,this.parent,this.parentSub),(this.parent._item!==null&&this.parent._item.deleted||this.parentSub!==null&&this.right!==null)&&this.delete(e)}else new Zt(this.id,this.length).integrate(e,0)}get next(){let e=this.right;for(;e!==null&&e.deleted;)e=e.right;return e}get prev(){let e=this.left;for(;e!==null&&e.deleted;)e=e.left;return e}get lastId(){return this.length===1?this.id:Me(this.id.client,this.id.clock+this.length-1)}mergeWith(e){if(this.constructor===e.constructor&&Ir(e.origin,this.lastId)&&this.right===e&&Ir(this.rightOrigin,e.rightOrigin)&&this.id.client===e.id.client&&this.id.clock+this.length===e.id.clock&&this.deleted===e.deleted&&this.redone===null&&e.redone===null&&this.content.constructor===e.content.constructor&&this.content.mergeWith(e.content)){let t=this.parent._searchMarker;return t&&t.forEach(i=>{i.p===e&&(i.p=this,!this.deleted&&this.countable&&(i.index-=this.length))}),e.keep&&(this.keep=!0),this.right=e.right,this.right!==null&&(this.right.left=this),this.length+=e.length,!0}return!1}delete(e){if(!this.deleted){let t=this.parent;this.countable&&this.parentSub===null&&(t._length-=this.length),this.markDeleted(),Da(e.deleteSet,this.id.client,this.id.clock,this.length),v0(e,t,this.parentSub),this.content.delete(e)}}gc(e,t){if(!this.deleted)throw Ut();this.content.gc(e),t?uA(e,this,new Zt(this.id,this.length)):this.content=new fo(this.length)}write(e,t){let i=t>0?Me(this.id.client,this.id.clock+t-1):this.origin,r=this.rightOrigin,s=this.parentSub,o=this.content.getRef()&31|(i===null?0:128)|(r===null?0:64)|(s===null?0:32);if(e.writeInfo(o),i!==null&&e.writeLeftID(i),r!==null&&e.writeRightID(r),i===null&&r===null){let a=this.parent;if(a._item!==void 0){let c=a._item;if(c===null){let l=cp(a);e.writeParentInfo(!0),e.writeString(l)}else e.writeParentInfo(!1),e.writeLeftID(c.id)}else a.constructor===String?(e.writeParentInfo(!0),e.writeString(a)):a.constructor===Mi?(e.writeParentInfo(!1),e.writeLeftID(a)):Ut();s!==null&&e.writeString(s)}this.content.write(e,t)}},fx=(n,e)=>sR[e&31](n),sR=[()=>{Ut()},GA,XA,zA,$A,WA,qA,rR,jA,VA,()=>{Ut()}],oR=10,Gt=class extends uo{get deleted(){return!0}delete(){}mergeWith(e){return this.constructor!==e.constructor?!1:(this.length+=e.length,!0)}integrate(e,t){Ut()}write(e,t){e.writeInfo(oR),he(e.restEncoder,this.length-t)}getMissing(e,t){return null}},px=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{},mx="__ $YJS$ __";px[mx]===!0&&console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");px[mx]=!0});var gx,xp,aR,wp,yx,xx,Wr,wx=Be(()=>{br();aa();bf();gf();gx=new Map,xp=class{constructor(e){this.room=e,this.onmessage=null,this._onChange=t=>t.key===e&&this.onmessage!==null&&this.onmessage({data:Uy(t.newValue||"")}),by(this._onChange)}postMessage(e){Fl.setItem(this.room,Ny(ky(e)))}close(){My(this._onChange)}},aR=typeof BroadcastChannel>"u"?xp:BroadcastChannel,wp=n=>kt(gx,n,()=>{let e=Sn(),t=new aR(n);return t.onmessage=i=>e.forEach(r=>r(i.data,"broadcastchannel")),{bc:t,subs:e}}),yx=(n,e)=>(wp(n).subs.add(e),e),xx=(n,e)=>{let t=wp(n),i=t.subs.delete(e);return i&&t.subs.size===0&&(t.bc.close(),gx.delete(n)),i},Wr=(n,e,t=null)=>{let i=wp(n);i.bc.postMessage(e),i.subs.forEach(r=>r(e,t))}});var vx,Rh,_x,Lh,vp,lR,bx,Mx,hR,Ex,Sx=Be(()=>{fa();Js();yp();vx=0,Rh=1,_x=2,Lh=(n,e)=>{he(n,vx);let t=ap(e);ht(n,t)},vp=(n,e,t)=>{he(n,Rh),ht(n,rp(e,t))},lR=(n,e,t)=>vp(e,t,Ct(n)),bx=(n,e,t,i)=>{try{ip(e,Ct(n),t)}catch(r){i?.(r),console.error("Caught error while handling a Yjs update",r)}},Mx=(n,e)=>{he(n,_x),ht(n,e)},hR=bx,Ex=(n,e,t,i,r)=>{let s=ge(n);switch(s){case vx:lR(n,e,t);break;case Rh:bx(n,t,i,r);break;case _x:hR(n,t,i,r);break;default:throw new Error("Unknown message type")}return s}});var dR,Tx,Ax=Be(()=>{Js();dR=0,Tx=(n,e,t)=>{ge(n)===dR&&t(e,An(n))}});var _p,Ch,Ih,mo,Rx,Lx=Be(()=>{fa();Js();ya();Yi();Rl();Ks();_p=3e4,Ch=class extends Al{constructor(e){super(),this.doc=e,this.clientID=e.clientID,this.states=new Map,this.meta=new Map,this._checkInterval=setInterval(()=>{let t=gn();this.getLocalState()!==null&&_p/2<=t-this.meta.get(this.clientID).lastUpdated&&this.setLocalState(this.getLocalState());let i=[];this.meta.forEach((r,s)=>{s!==this.clientID&&_p<=t-r.lastUpdated&&this.states.has(s)&&i.push(s)}),i.length>0&&Ih(this,i,"timeout")},Ht(_p/10)),e.on("destroy",()=>{this.destroy()}),this.setLocalState({})}destroy(){this.emit("destroy",[this]),this.setLocalState(null),super.destroy(),clearInterval(this._checkInterval)}getLocalState(){return this.states.get(this.clientID)||null}setLocalState(e){let t=this.clientID,i=this.meta.get(t),r=i===void 0?0:i.clock+1,s=this.states.get(t);e===null?this.states.delete(t):this.states.set(t,e),this.meta.set(t,{clock:r,lastUpdated:gn()});let o=[],a=[],c=[],l=[];e===null?l.push(t):s==null?e!=null&&o.push(t):(a.push(t),Zi(s,e)||c.push(t)),(o.length>0||c.length>0||l.length>0)&&this.emit("change",[{added:o,updated:c,removed:l},"local"]),this.emit("update",[{added:o,updated:a,removed:l},"local"])}setLocalStateField(e,t){let i=this.getLocalState();i!==null&&this.setLocalState({...i,[e]:t})}getStates(){return this.states}},Ih=(n,e,t)=>{let i=[];for(let r=0;r<e.length;r++){let s=e[r];if(n.states.has(s)){if(n.states.delete(s),s===n.clientID){let o=n.meta.get(s);n.meta.set(s,{clock:o.clock+1,lastUpdated:gn()})}i.push(s)}}i.length>0&&(n.emit("change",[{added:[],updated:[],removed:i},t]),n.emit("update",[{added:[],updated:[],removed:i},t]))},mo=(n,e,t=n.states)=>{let i=e.length,r=xt();he(r,i);for(let s=0;s<i;s++){let o=e[s],a=t.get(o)||null,c=n.meta.get(o).clock;he(r,o),he(r,c),Jn(r,JSON.stringify(a))}return Ke(r)},Rx=(n,e,t)=>{let i=wt(e),r=gn(),s=[],o=[],a=[],c=[],l=ge(i);for(let h=0;h<l;h++){let u=ge(i),d=ge(i),f=JSON.parse(An(i)),p=n.meta.get(u),y=n.states.get(u),x=p===void 0?0:p.clock;(x<d||x===d&&f===null&&n.states.has(u))&&(f===null?u===n.clientID&&n.getLocalState()!=null?d++:n.states.delete(u):n.states.set(u,f),n.meta.set(u,{clock:d,lastUpdated:r}),p===void 0&&f!==null?s.push(u):p!==void 0&&f===null?c.push(u):f!==null&&(Zi(f,y)||a.push(u),o.push(u)))}(s.length>0||a.length>0||c.length>0)&&n.emit("change",[{added:s,updated:a,removed:c},t]),(s.length>0||o.length>0||c.length>0)&&n.emit("update",[{added:s,updated:o,removed:c},t])}});var Cx,Ix=Be(()=>{va();Cx=n=>Ry(n,(e,t)=>`${encodeURIComponent(t)}=${encodeURIComponent(e)}`).join("&")});var Nx={};im(Nx,{WebsocketProvider:()=>Ep,messageAuth:()=>Px,messageAwareness:()=>qr,messageQueryAwareness:()=>Sp,messageSync:()=>rr});var rr,Sp,qr,Px,Va,Dx,gR,Bx,Mp,kx,bp,Ep,Ux=Be(()=>{wx();ya();fa();Js();Sx();Ax();Lx();Rl();Yi();Ix();eo();rr=0,Sp=3,qr=1,Px=2,Va=[];Va[rr]=(n,e,t,i,r)=>{he(n,rr);let s=Ex(e,n,t.doc,t);i&&s===Rh&&!t.synced&&(t.synced=!0)};Va[Sp]=(n,e,t,i,r)=>{he(n,qr),ht(n,mo(t.awareness,Array.from(t.awareness.getStates().keys())))};Va[qr]=(n,e,t,i,r)=>{Rx(t.awareness,Ct(e),t)};Va[Px]=(n,e,t,i,r)=>{Tx(e,t.doc,(s,o)=>gR(t,o))};Dx=3e4,gR=(n,e)=>console.warn(`Permission denied to access ${n.url}.
${e}`),Bx=(n,e,t)=>{let i=wt(e),r=xt(),s=ge(i),o=n.messageHandlers[s];return o?o(r,i,n,t,s):console.error("Unable to compute message"),r},Mp=(n,e,t)=>{e===n.ws&&(n.emit("connection-close",[t,n]),n.ws=null,e.close(),n.wsconnecting=!1,n.wsconnected?(n.wsconnected=!1,n.synced=!1,Ih(n.awareness,Array.from(n.awareness.getStates().keys()).filter(i=>i!==n.doc.clientID),n),n.emit("status",[{status:"disconnected"}])):n.wsUnsuccessfulReconnects++,setTimeout(kx,Fs(sy(2,n.wsUnsuccessfulReconnects)*100,n.maxBackoffTime),n))},kx=n=>{if(n.shouldConnect&&n.ws===null){let e=new n._WS(n.url,n.protocols);e.binaryType="arraybuffer",n.ws=e,n.wsconnecting=!0,n.wsconnected=!1,n.synced=!1,e.onmessage=t=>{n.wsLastMessageReceived=gn();let i=Bx(n,new Uint8Array(t.data),!0);Pl(i)>1&&e.send(Ke(i))},e.onerror=t=>{n.emit("connection-error",[t,n])},e.onclose=t=>{Mp(n,e,t)},e.onopen=()=>{n.wsLastMessageReceived=gn(),n.wsconnecting=!1,n.wsconnected=!0,n.wsUnsuccessfulReconnects=0,n.emit("status",[{status:"connected"}]);let t=xt();if(he(t,rr),Lh(t,n.doc),e.send(Ke(t)),n.awareness.getLocalState()!==null){let i=xt();he(i,qr),ht(i,mo(n.awareness,[n.doc.clientID])),e.send(Ke(i))}},n.emit("status",[{status:"connecting"}])}},bp=(n,e)=>{let t=n.ws;n.wsconnected&&t&&t.readyState===t.OPEN&&t.send(e),n.bcconnected&&Wr(n.bcChannel,e,n)},Ep=class extends Xi{constructor(e,t,i,{connect:r=!0,awareness:s=new Ch(i),params:o={},protocols:a=[],WebSocketPolyfill:c=WebSocket,resyncInterval:l=-1,maxBackoffTime:h=2500,disableBc:u=!1}={}){for(super();e[e.length-1]==="/";)e=e.slice(0,e.length-1);this.serverUrl=e,this.bcChannel=e+"/"+t,this.maxBackoffTime=h,this.params=o,this.protocols=a,this.roomname=t,this.doc=i,this._WS=c,this.awareness=s,this.wsconnected=!1,this.wsconnecting=!1,this.bcconnected=!1,this.disableBc=u,this.wsUnsuccessfulReconnects=0,this.messageHandlers=Va.slice(),this._synced=!1,this.ws=null,this.wsLastMessageReceived=0,this.shouldConnect=r,this._resyncInterval=0,l>0&&(this._resyncInterval=setInterval(()=>{if(this.ws&&this.ws.readyState===WebSocket.OPEN){let d=xt();he(d,rr),Lh(d,i),this.ws.send(Ke(d))}},l)),this._bcSubscriber=(d,f)=>{if(f!==this){let p=Bx(this,new Uint8Array(d),!1);Pl(p)>1&&Wr(this.bcChannel,Ke(p),this)}},this._updateHandler=(d,f)=>{if(f!==this){let p=xt();he(p,rr),Mx(p,d),bp(this,Ke(p))}},this.doc.on("update",this._updateHandler),this._awarenessUpdateHandler=({added:d,updated:f,removed:p},y)=>{let x=d.concat(f).concat(p),g=xt();he(g,qr),ht(g,mo(s,x)),bp(this,Ke(g))},this._exitHandler=()=>{Ih(this.awareness,[i.clientID],"app closed")},bi&&typeof process<"u"&&process.on("exit",this._exitHandler),s.on("update",this._awarenessUpdateHandler),this._checkInterval=setInterval(()=>{this.wsconnected&&Dx<gn()-this.wsLastMessageReceived&&Mp(this,this.ws,null)},Dx/10),r&&this.connect()}get url(){let e=Cx(this.params);return this.serverUrl+"/"+this.roomname+(e.length===0?"":"?"+e)}get synced(){return this._synced}set synced(e){this._synced!==e&&(this._synced=e,this.emit("synced",[e]),this.emit("sync",[e]))}destroy(){this._resyncInterval!==0&&clearInterval(this._resyncInterval),clearInterval(this._checkInterval),this.disconnect(),bi&&typeof process<"u"&&process.off("exit",this._exitHandler),this.awareness.off("update",this._awarenessUpdateHandler),this.doc.off("update",this._updateHandler),super.destroy()}connectBc(){if(this.disableBc)return;this.bcconnected||(yx(this.bcChannel,this._bcSubscriber),this.bcconnected=!0);let e=xt();he(e,rr),Lh(e,this.doc),Wr(this.bcChannel,Ke(e),this);let t=xt();he(t,rr),vp(t,this.doc),Wr(this.bcChannel,Ke(t),this);let i=xt();he(i,Sp),Wr(this.bcChannel,Ke(i),this);let r=xt();he(r,qr),ht(r,mo(this.awareness,[this.doc.clientID])),Wr(this.bcChannel,Ke(r),this)}disconnectBc(){let e=xt();he(e,qr),ht(e,mo(this.awareness,[this.doc.clientID],new Map)),bp(this,Ke(e)),this.bcconnected&&(xx(this.bcChannel,this._bcSubscriber),this.bcconnected=!1)}disconnect(){this.shouldConnect=!1,this.disconnectBc(),this.ws!==null&&Mp(this,this.ws,null)}connect(){this.shouldConnect=!0,!this.wsconnected&&this.ws===null&&(kx(this),this.connectBc())}}});var vr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_r={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ww=0,rm=1,vw=2;var Eg=1,Gd=2,Co=3,yl=0,Pt=1,xl=2,Sg=1;var Do=0,Po=1,sm=2,om=3,am=4,_w=5,ps=100,bw=101,Mw=102,cm=103,lm=104,Ew=200,Sw=201,Tw=202,Aw=203,Tg=204,Ag=205,Rw=206,Lw=207,Cw=208,Iw=209,Dw=210,Pw=0,Bw=1,kw=2,Ru=3,Nw=4,Uw=5,Fw=6,Ow=7,wl=0,Hw=1,zw=2,Bo=0,Gw=1,Vw=2,Ww=3,qw=4,Xw=5,Rg=300,Vd=301,Wd=302,hm=303,um=304,qd=306,Xd=307,Lu=1e3,Nn=1001,Cu=1002,en=1003,dm=1004;var fm=1005;var bn=1006,Yw=1007;var Yd=1008;var jd=1009,jw=1010,$w=1011,Nc=1012,Zw=1013,Pc=1014,Fi=1015,Uc=1016,Jw=1017,Qw=1018,Kw=1019,ko=1020,ev=1021,pr=1022,Un=1023,tv=1024,nv=1025;var xs=1026,Ho=1027,iv=1028,rv=1029,sv=1030,ov=1031,av=1032,cv=1033,pm=33776,mm=33777,gm=33778,ym=33779,xm=35840,wm=35841,vm=35842,_m=35843,lv=36196,bm=37492,Mm=37496,hv=37808,uv=37809,dv=37810,fv=37811,pv=37812,mv=37813,gv=37814,yv=37815,xv=37816,wv=37817,vv=37818,_v=37819,bv=37820,Mv=37821,Ev=36492,Sv=37840,Tv=37841,Av=37842,Rv=37843,Lv=37844,Cv=37845,Iv=37846,Dv=37847,Pv=37848,Bv=37849,kv=37850,Nv=37851,Uv=37852,Fv=37853,Ov=2200,Hv=2201,zv=2202,Fc=2300,Oc=2301,Yh=2302,ms=2400,gs=2401,Hc=2402,$d=2500,Lg=2501,Gv=0;var Ds=3e3,sa=3001,Cg=3007,Ig=3002,Vv=3003,Dg=3004,Pg=3005,Bg=3006,Wv=3200,qv=3201,Ps=0,Xv=1;var jh=7680;var Yv=519,zo=35044,zc=35048;var Em="300 es",On=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Ot=[];for(let n=0;n<256;n++)Ot[n]=(n<16?"0":"")+n.toString(16);var Bc=Math.PI/180,Iu=180/Math.PI;function Fn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toUpperCase()}function Qt(n,e,t){return Math.max(e,Math.min(t,n))}function jv(n,e){return(n%e+e)%e}function $h(n,e,t){return(1-t)*n+t*e}function Sm(n){return(n&n-1)===0&&n!==0}function $v(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Zv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}var $=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}};$.prototype.isVector2=!0;var Lt=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],y=r[0],x=r[3],g=r[6],m=r[1],v=r[4],E=r[7],T=r[2],w=r[5],R=r[8];return s[0]=o*y+a*m+c*T,s[3]=o*x+a*v+c*w,s[6]=o*g+a*E+c*R,s[1]=l*y+h*m+u*T,s[4]=l*x+h*v+u*w,s[7]=l*g+h*E+u*R,s[2]=d*y+f*m+p*T,s[5]=d*x+f*v+p*w,s[8]=d*g+f*E+p*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,p=t*u+i*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return e[0]=u*y,e[1]=(r*l-h*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(h*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=f*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){let i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){let t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],h=r[7];return r[0]=t*s+i*c,r[3]=t*o+i*l,r[6]=t*a+i*h,r[1]=-i*s+t*c,r[4]=-i*o+t*l,r[7]=-i*a+t*h,this}translate(e,t){let i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Lt.prototype.isMatrix3=!0;var Zr,zi=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zr===void 0&&(Zr=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Zr.width=e.width,Zr.height=e.height;let i=Zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Zr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}},Jv=0,Yt=class n extends On{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Nn,r=Nn,s=bn,o=Yd,a=Un,c=jd,l=1,h=Ds){super(),Object.defineProperty(this,"id",{value:Jv++}),this.uuid=Fn(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let r=this.image;if(r.uuid===void 0&&(r.uuid=Fn()),!t&&e.images[r.uuid]===void 0){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Zh(r[o].image)):s.push(Zh(r[o]))}else s=Zh(r);e.images[r.uuid]={uuid:r.uuid,url:s}}i.image=r.uuid}return t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lu:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case Cu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lu:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case Cu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}};Yt.DEFAULT_IMAGE=void 0;Yt.DEFAULT_MAPPING=Rg;Yt.prototype.isTexture=!0;function Zh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zi.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ye=class{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],y=c[2],x=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(p-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(p+x)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,E=(f+1)/2,T=(g+1)/2,w=(h+d)/4,R=(u+y)/4,P=(p+x)/4;return v>E&&v>T?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=w/i,s=R/i):E>T?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=w/r,s=P/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=R/s,r=P/s),this.set(i,r,s,t),this}let m=Math.sqrt((x-p)*(x-p)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(m)<.001&&(m=1),this.x=(x-p)/m,this.y=(u-y)/m,this.z=(d-h)/m,this.w=Math.acos((l+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}};Ye.prototype.isVector4=!0;var pi=class extends On{constructor(e,t,i){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t),i=i||{},this.texture=new Yt(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:bn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};pi.prototype.isWebGLRenderTarget=!0;var Du=class extends pi{constructor(e,t,i){super(e,t,i),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}};Du.prototype.isWebGLMultisampleRenderTarget=!0;var Et=class{constructor(e=0,t=0,i=0,r=1){this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],d=s[o+0],f=s[o+1],p=s[o+2],y=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=y;return}if(u!==y||c!==d||l!==f||h!==p){let x=1-a,g=c*d+l*f+h*p+u*y,m=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){let T=Math.sqrt(v),w=Math.atan2(T,g*m);x=Math.sin(x*w)/T,a=Math.sin(a*w)/T}let E=a*m;if(c=c*x+d*E,l=l*x+f*E,h=h*x+p*E,u=u*x+y*E,x===1-a){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+h*u+c*f-l*d,e[t+1]=c*p+h*d+l*u-a*f,e[t+2]=l*p+h*f+a*d-c*u,e[t+3]=h*p-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),u=a(s/2),d=c(i/2),f=c(r/2),p=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){this.copy(e).slerp(t,i)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};Et.prototype.isQuaternion=!0;var b=class{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Tm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*i,h=c*i+a*t-s*r,u=c*r+s*i-o*t,d=-s*t-o*i-a*r;return this.x=l*c+d*-s+h*-a-u*-o,this.y=h*c+d*-o+u*-s-l*-a,this.z=u*c+d*-a+l*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jh.copy(this).projectOnVector(e),this.sub(Jh)}reflect(e){return this.sub(Jh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}};b.prototype.isVector3=!0;var Jh=new b,Tm=new Et,cn=class{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){let h=e[c],u=e[c+1],d=e[c+2];h<t&&(t=h),u<i&&(i=u),d<r&&(r=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){let h=e.getX(c),u=e.getY(c),d=e.getZ(c);h<t&&(t=h),u<i&&(i=u),d<r&&(r=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=vo.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new b),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new b),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Qh.copy(t.boundingBox),Qh.applyMatrix4(e.matrixWorld),this.union(Qh));let i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new b),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vo),vo.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),ec.subVectors(this.max,_o),Jr.subVectors(e.a,_o),Qr.subVectors(e.b,_o),Kr.subVectors(e.c,_o),Ci.subVectors(Qr,Jr),Ii.subVectors(Kr,Qr),ur.subVectors(Jr,Kr);let t=[0,-Ci.z,Ci.y,0,-Ii.z,Ii.y,0,-ur.z,ur.y,Ci.z,0,-Ci.x,Ii.z,0,-Ii.x,ur.z,0,-ur.x,-Ci.y,Ci.x,0,-Ii.y,Ii.x,0,-ur.y,ur.x,0];return!Kh(t,Jr,Qr,Kr,ec)||(t=[1,0,0,0,1,0,0,0,1],!Kh(t,Jr,Qr,Kr,ec))?!1:(tc.crossVectors(Ci,Ii),t=[tc.x,tc.y,tc.z],Kh(t,Jr,Qr,Kr,ec))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new b),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return vo.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(vo).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};cn.prototype.isBox3=!0;var li=[new b,new b,new b,new b,new b,new b,new b,new b],vo=new b,Qh=new cn,Jr=new b,Qr=new b,Kr=new b,Ci=new b,Ii=new b,ur=new b,_o=new b,ec=new b,tc=new b,dr=new b;function Kh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){dr.fromArray(n,s);let a=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),c=e.dot(dr),l=t.dot(dr),h=i.dot(dr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Qv=new cn,Am=new b,eu=new b,tu=new b,Gi=class{constructor(e=new b,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Qv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new b),t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new cn),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){tu.subVectors(e,this.center);let t=tu.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(tu.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return eu.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Am.copy(e.center).add(eu)),this.expandByPoint(Am.copy(e.center).sub(eu)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hi=new b,nu=new b,nc=new b,Di=new b,iu=new b,ic=new b,ru=new b,gi=class{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new b),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new b),t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.direction).multiplyScalar(t).add(this.origin),hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){nu.copy(e).add(t).multiplyScalar(.5),nc.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(nu);let s=e.distanceTo(t)*.5,o=-this.direction.dot(nc),a=Di.dot(this.direction),c=-Di.dot(nc),l=Di.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*c-a,d=o*a-c,p=s*h,u>=0)if(d>=-p)if(d<=p){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),r&&r.copy(nc).multiplyScalar(d).add(nu),f}intersectSphere(e,t){hi.subVectors(e.center,this.origin);let i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,i,r,s){iu.subVectors(t,e),ic.subVectors(i,e),ru.crossVectors(iu,ic);let o=this.direction.dot(ru),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);let c=a*this.direction.dot(ic.crossVectors(Di,ic));if(c<0)return null;let l=a*this.direction.dot(iu.cross(Di));if(l<0||c+l>o)return null;let h=-a*Di.dot(ru);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},we=class n{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,c,l,h,u,d,f,p,y,x){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=y,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/es.setFromMatrixColumn(e,0).length(),s=1/es.setFromMatrixColumn(e,1).length(),o=1/es.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=o*h,f=o*u,p=a*h,y=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+p*l,t[5]=d-y*l,t[9]=-a*c,t[2]=y-d*l,t[6]=p+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,p=l*h,y=l*u;t[0]=d+y*a,t[4]=p*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=y+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,p=l*h,y=l*u;t[0]=d-y*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,p=a*h,y=a*u;t[0]=c*h,t[4]=p*l-f,t[8]=d*l+y,t[1]=c*u,t[5]=y*l+d,t[9]=f*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,p=a*c,y=a*l;t[0]=c*h,t[4]=y-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+p,t[10]=d-y*u}else if(e.order==="XZY"){let d=o*c,f=o*l,p=a*c,y=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+y,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kv,e,e_)}lookAt(e,t,i){let r=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Pi.crossVectors(i,dn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Pi.crossVectors(i,dn)),Pi.normalize(),rc.crossVectors(dn,Pi),r[0]=Pi.x,r[4]=rc.x,r[8]=dn.x,r[1]=Pi.y,r[5]=rc.y,r[9]=dn.y,r[2]=Pi.z,r[6]=rc.z,r[10]=dn.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],y=i[6],x=i[10],g=i[14],m=i[3],v=i[7],E=i[11],T=i[15],w=r[0],R=r[4],P=r[8],k=r[12],U=r[1],z=r[5],O=r[9],I=r[13],B=r[2],D=r[6],C=r[10],j=r[14],Z=r[3],G=r[7],te=r[11],ie=r[15];return s[0]=o*w+a*U+c*B+l*Z,s[4]=o*R+a*z+c*D+l*G,s[8]=o*P+a*O+c*C+l*te,s[12]=o*k+a*I+c*j+l*ie,s[1]=h*w+u*U+d*B+f*Z,s[5]=h*R+u*z+d*D+f*G,s[9]=h*P+u*O+d*C+f*te,s[13]=h*k+u*I+d*j+f*ie,s[2]=p*w+y*U+x*B+g*Z,s[6]=p*R+y*z+x*D+g*G,s[10]=p*P+y*O+x*C+g*te,s[14]=p*k+y*I+x*j+g*ie,s[3]=m*w+v*U+E*B+T*Z,s[7]=m*R+v*z+E*D+T*G,s[11]=m*P+v*O+E*C+T*te,s[15]=m*k+v*I+E*j+T*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],y=e[7],x=e[11],g=e[15];return p*(+s*c*u-r*l*u-s*a*d+i*l*d+r*a*f-i*c*f)+y*(+t*c*f-t*l*d+s*o*d-r*o*f+r*l*h-s*c*h)+x*(+t*l*u-t*a*f-s*o*u+i*o*f+s*a*h-i*l*h)+g*(-r*a*h-t*c*u+t*a*d+r*o*u-i*o*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],y=e[13],x=e[14],g=e[15],m=u*x*l-y*d*l+y*c*f-a*x*f-u*c*g+a*d*g,v=p*d*l-h*x*l-p*c*f+o*x*f+h*c*g-o*d*g,E=h*y*l-p*u*l+p*a*f-o*y*f-h*a*g+o*u*g,T=p*u*c-h*y*c-p*a*d+o*y*d+h*a*x-o*u*x,w=t*m+i*v+r*E+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return e[0]=m*R,e[1]=(y*d*s-u*x*s-y*r*f+i*x*f+u*r*g-i*d*g)*R,e[2]=(a*x*s-y*c*s+y*r*l-i*x*l-a*r*g+i*c*g)*R,e[3]=(u*c*s-a*d*s-u*r*l+i*d*l+a*r*f-i*c*f)*R,e[4]=v*R,e[5]=(h*x*s-p*d*s+p*r*f-t*x*f-h*r*g+t*d*g)*R,e[6]=(p*c*s-o*x*s-p*r*l+t*x*l+o*r*g-t*c*g)*R,e[7]=(o*d*s-h*c*s+h*r*l-t*d*l-o*r*f+t*c*f)*R,e[8]=E*R,e[9]=(p*u*s-h*y*s-p*i*f+t*y*f+h*i*g-t*u*g)*R,e[10]=(o*y*s-p*a*s+p*i*l-t*y*l-o*i*g+t*a*g)*R,e[11]=(h*a*s-o*u*s-h*i*l+t*u*l+o*i*f-t*a*f)*R,e[12]=T*R,e[13]=(h*y*r-p*u*r+p*i*d-t*y*d-h*i*x+t*u*x)*R,e[14]=(p*a*r-o*y*r-p*i*c+t*y*c+o*i*x-t*a*x)*R,e[15]=(o*u*r-h*a*r+h*i*c-t*u*c-o*i*d+t*a*d)*R,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i){return this.set(1,t,i,0,e,1,i,0,e,t,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,p=s*u,y=o*h,x=o*u,g=a*u,m=c*l,v=c*h,E=c*u,T=i.x,w=i.y,R=i.z;return r[0]=(1-(y+g))*T,r[1]=(f+E)*T,r[2]=(p-v)*T,r[3]=0,r[4]=(f-E)*w,r[5]=(1-(d+g))*w,r[6]=(x+m)*w,r[7]=0,r[8]=(p+v)*R,r[9]=(x-m)*R,r[10]=(1-(d+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=es.set(r[0],r[1],r[2]).length(),o=es.set(r[4],r[5],r[6]).length(),a=es.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);let l=1/s,h=1/o,u=1/a;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,t.setFromRotationMatrix(Dn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,c=2*s/(t-e),l=2*s/(i-r),h=(t+e)/(t-e),u=(i+r)/(i-r),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){let a=this.elements,c=1/(t-e),l=1/(i-r),h=1/(o-s),u=(t+e)*c,d=(i+r)*l,f=(o+s)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};we.prototype.isMatrix4=!0;var es=new b,Dn=new we,Kv=new b(0,0,0),e_=new b(1,1,1),Pi=new b,rc=new b,dn=new b,Rm=new we,Lm=new Et,ws=class n{constructor(e=0,t=0,i=0,r=n.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,i){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Rm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rm,t,i)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return Lm.setFromEuler(this),this.setFromQuaternion(Lm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new b(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};ws.prototype.isEuler=!0;ws.DefaultOrder="XYZ";ws.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Gc=class{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}},t_=0,Cm=new b,ts=new Et,ui=new we,sc=new b,bo=new b,n_=new b,i_=new Et,Im=new b(1,0,0),Dm=new b(0,1,0),Pm=new b(0,0,1),r_={type:"added"},Bm={type:"removed"},We=class n extends On{constructor(){super(),Object.defineProperty(this,"id",{value:t_++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DefaultUp.clone();let e=new b,t=new ws,i=new Et,r=new b(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new we},normalMatrix:{value:new Lt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=n.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(Im,e)}rotateY(e){return this.rotateOnAxis(Dm,e)}rotateZ(e){return this.rotateOnAxis(Pm,e)}translateOnAxis(e,t){return Cm.copy(e).applyQuaternion(this.quaternion),this.position.add(Cm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Im,e)}translateY(e){return this.translateOnAxis(Dm,e)}translateZ(e){return this.translateOnAxis(Pm,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?sc.copy(e):sc.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(bo,sc,this.up):ui.lookAt(sc,bo,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),ts.setFromRotationMatrix(ui),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(r_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bm)),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(Bm)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new b),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new Et),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,n_),e}getWorldScale(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new b),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,i_,e),e}getWorldDirection(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new b),this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f)}return i.object=r,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};We.DefaultUp=new b(0,1,0);We.DefaultMatrixAutoUpdate=!0;We.prototype.isObject3D=!0;var su=new b,s_=new b,o_=new Lt,_n=class{constructor(e=new b(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=su.subVectors(i,t).cross(s_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new b),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new b);let i=e.delta(su),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new b),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||o_.getNormalMatrix(e),r=this.coplanarPoint(su).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};_n.prototype.isPlane=!0;var Pn=new b,di=new b,ou=new b,fi=new b,ns=new b,is=new b,km=new b,au=new b,cu=new b,lu=new b,Xt=class n{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new b),r.subVectors(i,t),Pn.subVectors(e,t),r.cross(Pn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Pn.subVectors(r,t),di.subVectors(i,t),ou.subVectors(e,t);let o=Pn.dot(Pn),a=Pn.dot(di),c=Pn.dot(ou),l=di.dot(di),h=di.dot(ou),u=o*l-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new b),u===0)return s.set(-2,-1,-1);let d=1/u,f=(l*c-a*h)*d,p=(o*h-a*c)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,fi),fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getUV(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,fi),c.set(0,0),c.addScaledVector(s,fi.x),c.addScaledVector(o,fi.y),c.addScaledVector(a,fi.z),c}static isFrontFacing(e,t,i,r){return Pn.subVectors(i,t),di.subVectors(e,t),Pn.cross(di).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Pn.cross(di).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new b),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new _n),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return n.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new b);let i=this.a,r=this.b,s=this.c,o,a;ns.subVectors(r,i),is.subVectors(s,i),au.subVectors(e,i);let c=ns.dot(au),l=is.dot(au);if(c<=0&&l<=0)return t.copy(i);cu.subVectors(e,r);let h=ns.dot(cu),u=is.dot(cu);if(h>=0&&u<=h)return t.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(ns,o);lu.subVectors(e,s);let f=ns.dot(lu),p=is.dot(lu);if(p>=0&&f<=p)return t.copy(s);let y=f*l-c*p;if(y<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(i).addScaledVector(is,a);let x=h*p-f*u;if(x<=0&&u-h>=0&&f-p>=0)return km.subVectors(s,r),a=(u-h)/(u-h+(f-p)),t.copy(r).addScaledVector(km,a);let g=1/(x+y+d);return o=y*g,a=d*g,t.copy(i).addScaledVector(ns,o).addScaledVector(is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},a_=0;function Bt(){Object.defineProperty(this,"id",{value:a_++}),this.uuid=Fn(),this.name="",this.type="Material",this.fog=!0,this.blending=Po,this.side=yl,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Tg,this.blendDst=Ag,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ru,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jh,this.stencilZFail=jh,this.stencilZPass=jh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}Bt.prototype=Object.assign(Object.create(On.prototype),{constructor:Bt,isMaterial:!0,onBuild:function(){},onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(n){if(n!==void 0)for(let e in n){let t=n[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===Sg;continue}let i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}},toJSON:function(n){let e=n===void 0||typeof n=="string";e&&(n={textures:{},images:{}});let t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(n).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(n).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(n).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(n).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(n).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(n).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(n).uuid),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==Po&&(t.blending=this.blending),this.side!==yl&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function i(r){let s=[];for(let o in r){let a=r[o];delete a.metadata,s.push(a)}return s}if(e){let r=i(n.textures),s=i(n.images);r.length>0&&(t.textures=r),s.length>0&&(t.images=s)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(n){this.name=n.name,this.fog=n.fog,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;let e=n.clippingPlanes,t=null;if(e!==null){let i=e.length;t=new Array(i);for(let r=0;r!==i;++r)t[r]=e[r].clone()}return this.clippingPlanes=t,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.alphaToCoverage=n.alphaToCoverage,this.premultipliedAlpha=n.premultipliedAlpha,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(Bt.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});var kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},oc={h:0,s:0,l:0};function hu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function uu(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function du(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ue=class{constructor(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,i){return this.r=e,this.g=t,this.b=i,this}setHSL(e,t,i){if(e=jv(e,1),t=Qt(t,0,1),i=Qt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=hu(s,r,e+1/3),this.g=hu(s,r,e),this.b=hu(s,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r,s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(a,c,l)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let t=kg[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){let i=t>0?1/t:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=uu(e.r),this.g=uu(e.g),this.b=uu(e.b),this}copyLinearToSRGB(e){return this.r=du(e.r),this.g=du(e.g),this.b=du(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});let t=this.r,i=this.g,r=this.b,s=Math.max(t,i,r),o=Math.min(t,i,r),a,c,l=(o+s)/2;if(o===s)a=0,c=0;else{let h=s-o;switch(c=l<=.5?h/(s+o):h/(2-s-o),s){case t:a=(i-r)/h+(i<r?6:0);break;case i:a=(r-t)/h+2;break;case r:a=(t-i)/h+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,i){return this.getHSL(Bn),Bn.h+=e,Bn.s+=t,Bn.l+=i,this.setHSL(Bn.h,Bn.s,Bn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(oc);let i=$h(Bn.h,oc.h,t),r=$h(Bn.s,oc.s,t),s=$h(Bn.l,oc.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};ue.NAMES=kg;ue.prototype.isColor=!0;ue.prototype.r=1;ue.prototype.g=1;ue.prototype.b=1;var mr=class extends Bt{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}};mr.prototype.isMeshBasicMaterial=!0;var st=new b,ac=new $,dt=class{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=zo,this.updateRange={offset:0,count:-1},this.version=0,this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new ue),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){let t=this.array,i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new $),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){let t=this.array,i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new b),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){let t=this.array,i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new Ye),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ac.fromBufferAttribute(this,t),ac.applyMatrix3(e),this.setXY(t,ac.x,ac.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)st.x=this.getX(t),st.y=this.getY(t),st.z=this.getZ(t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)st.x=this.getX(t),st.y=this.getY(t),st.z=this.getZ(t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)st.x=this.getX(t),st.y=this.getY(t),st.z=this.getZ(t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};dt.prototype.isBufferAttribute=!0;var Vc=class extends dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Wc=class extends dt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Pu=class extends dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};Pu.prototype.isFloat16BufferAttribute=!0;var yt=class extends dt{constructor(e,t,i){super(new Float32Array(e),t,i)}};function Ng(n){if(n.length===0)return-1/0;let e=n[0];for(let t=1,i=n.length;t<i;++t)n[t]>e&&(e=n[t]);return e}var c_=0,Xn=new we,fu=new We,rs=new b,fn=new cn,Mo=new cn,Dt=new b,it=class n extends On{constructor(){super(),Object.defineProperty(this,"id",{value:c_++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ng(e)>65535?Wc:Vc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Lt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,i){return Xn.makeTranslation(e,t,i),this.applyMatrix4(Xn),this}scale(e,t,i){return Xn.makeScale(e,t,i),this.applyMatrix4(Xn),this}lookAt(e){return fu.lookAt(e),fu.updateMatrix(),this.applyMatrix4(fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new b,1/0);return}if(e){let i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Mo.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(fn.min,Mo.min),fn.expandByPoint(Dt),Dt.addVectors(fn.max,Mo.max),fn.expandByPoint(Dt)):(fn.expandByPoint(Mo.min),fn.expandByPoint(Mo.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Dt.fromBufferAttribute(a,l),c&&(rs.fromBufferAttribute(e,l),Dt.add(rs)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;t.tangent===void 0&&this.setAttribute("tangent",new dt(new Float32Array(4*a),4));let c=t.tangent.array,l=[],h=[];for(let U=0;U<a;U++)l[U]=new b,h[U]=new b;let u=new b,d=new b,f=new b,p=new $,y=new $,x=new $,g=new b,m=new b;function v(U,z,O){u.fromArray(r,U*3),d.fromArray(r,z*3),f.fromArray(r,O*3),p.fromArray(o,U*2),y.fromArray(o,z*2),x.fromArray(o,O*2),d.sub(u),f.sub(u),y.sub(p),x.sub(p);let I=1/(y.x*x.y-x.x*y.y);isFinite(I)&&(g.copy(d).multiplyScalar(x.y).addScaledVector(f,-y.y).multiplyScalar(I),m.copy(f).multiplyScalar(y.x).addScaledVector(d,-x.x).multiplyScalar(I),l[U].add(g),l[z].add(g),l[O].add(g),h[U].add(m),h[z].add(m),h[O].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let U=0,z=E.length;U<z;++U){let O=E[U],I=O.start,B=O.count;for(let D=I,C=I+B;D<C;D+=3)v(i[D+0],i[D+1],i[D+2])}let T=new b,w=new b,R=new b,P=new b;function k(U){R.fromArray(s,U*3),P.copy(R);let z=l[U];T.copy(z),T.sub(R.multiplyScalar(R.dot(z))).normalize(),w.crossVectors(P,z);let I=w.dot(h[U])<0?-1:1;c[U*4]=T.x,c[U*4+1]=T.y,c[U*4+2]=T.z,c[U*4+3]=I}for(let U=0,z=E.length;U<z;++U){let O=E[U],I=O.start,B=O.count;for(let D=I,C=I+B;D<C;D+=3)k(i[D+0]),k(i[D+1]),k(i[D+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let r=new b,s=new b,o=new b,a=new b,c=new b,l=new b,h=new b,u=new b;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),y=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,x),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,p),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,x),a.add(h),c.add(h),l.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(x,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let i=this.attributes;for(let r in i){if(e.attributes[r]===void 0)continue;let o=i[r].array,a=e.attributes[r],c=a.array,l=a.itemSize*t,h=Math.min(c.length,o.length-l);for(let u=0,d=l;u<h;u++,d++)o[d]=c[u]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,p=0;for(let y=0,x=c.length;y<x;y++){f=c[y]*h;for(let g=0;g<h;g++)d[p++]=l[f++]}return new dt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new n().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};it.prototype.isBufferGeometry=!0;var Nm=new we,ss=new gi,pu=new Gi,Bi=new b,ki=new b,Ni=new b,mu=new b,gu=new b,yu=new b,cc=new b,lc=new b,hc=new b,uc=new $,dc=new $,fc=new $,xu=new b,pc=new b,J=class extends We{constructor(e=new it,t=new mr){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),pu.copy(i.boundingSphere),pu.applyMatrix4(s),e.ray.intersectsSphere(pu)===!1)||(Nm.copy(s).invert(),ss.copy(e.ray).applyMatrix4(Nm),i.boundingBox!==null&&ss.intersectsBox(i.boundingBox)===!1))return;let o;if(i.isBufferGeometry){let a=i.index,c=i.attributes.position,l=i.morphAttributes.position,h=i.morphTargetsRelative,u=i.attributes.uv,d=i.attributes.uv2,f=i.groups,p=i.drawRange;if(a!==null)if(Array.isArray(r))for(let y=0,x=f.length;y<x;y++){let g=f[y],m=r[g.materialIndex],v=Math.max(g.start,p.start),E=Math.min(g.start+g.count,p.start+p.count);for(let T=v,w=E;T<w;T+=3){let R=a.getX(T),P=a.getX(T+1),k=a.getX(T+2);o=mc(this,m,e,ss,c,l,h,u,d,R,P,k),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{let y=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=y,m=x;g<m;g+=3){let v=a.getX(g),E=a.getX(g+1),T=a.getX(g+2);o=mc(this,r,e,ss,c,l,h,u,d,v,E,T),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let y=0,x=f.length;y<x;y++){let g=f[y],m=r[g.materialIndex],v=Math.max(g.start,p.start),E=Math.min(g.start+g.count,p.start+p.count);for(let T=v,w=E;T<w;T+=3){let R=T,P=T+1,k=T+2;o=mc(this,m,e,ss,c,l,h,u,d,R,P,k),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{let y=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let g=y,m=x;g<m;g+=3){let v=g,E=g+1,T=g+2;o=mc(this,r,e,ss,c,l,h,u,d,v,E,T),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}else i.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}};J.prototype.isMesh=!0;function l_(n,e,t,i,r,s,o,a){let c;if(e.side===Pt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side!==xl,a),c===null)return null;pc.copy(a),pc.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(pc);return l<t.near||l>t.far?null:{distance:l,point:pc.clone(),object:n}}function mc(n,e,t,i,r,s,o,a,c,l,h,u){Bi.fromBufferAttribute(r,l),ki.fromBufferAttribute(r,h),Ni.fromBufferAttribute(r,u);let d=n.morphTargetInfluences;if(e.morphTargets&&s&&d){cc.set(0,0,0),lc.set(0,0,0),hc.set(0,0,0);for(let p=0,y=s.length;p<y;p++){let x=d[p],g=s[p];x!==0&&(mu.fromBufferAttribute(g,l),gu.fromBufferAttribute(g,h),yu.fromBufferAttribute(g,u),o?(cc.addScaledVector(mu,x),lc.addScaledVector(gu,x),hc.addScaledVector(yu,x)):(cc.addScaledVector(mu.sub(Bi),x),lc.addScaledVector(gu.sub(ki),x),hc.addScaledVector(yu.sub(Ni),x)))}Bi.add(cc),ki.add(lc),Ni.add(hc)}n.isSkinnedMesh&&e.skinning&&(n.boneTransform(l,Bi),n.boneTransform(h,ki),n.boneTransform(u,Ni));let f=l_(n,e,t,i,Bi,ki,Ni,xu);if(f){a&&(uc.fromBufferAttribute(a,l),dc.fromBufferAttribute(a,h),fc.fromBufferAttribute(a,u),f.uv=Xt.getUV(xu,Bi,ki,Ni,uc,dc,fc,new $)),c&&(uc.fromBufferAttribute(c,l),dc.fromBufferAttribute(c,h),fc.fromBufferAttribute(c,u),f.uv2=Xt.getUV(xu,Bi,ki,Ni,uc,dc,fc,new $));let p={a:l,b:h,c:u,normal:new b,materialIndex:0};Xt.getNormal(Bi,ki,Ni,p.normal),f.face=p}return f}var ce=class extends it{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,t,e,o,s,0),p("z","y","x",1,-1,i,t,-e,o,s,1),p("x","z","y",1,1,e,i,t,r,o,2),p("x","z","y",1,-1,e,i,-t,r,o,3),p("x","y","z",1,-1,e,t,i,r,s,4),p("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(u,2));function p(y,x,g,m,v,E,T,w,R,P,k){let U=E/R,z=T/P,O=E/2,I=T/2,B=w/2,D=R+1,C=P+1,j=0,Z=0,G=new b;for(let te=0;te<C;te++){let ie=te*z-I;for(let pe=0;pe<D;pe++){let ye=pe*U-O;G[y]=ye*m,G[x]=ie*v,G[g]=B,l.push(G.x,G.y,G.z),G[y]=0,G[x]=0,G[g]=w>0?1:-1,h.push(G.x,G.y,G.z),u.push(pe/R),u.push(1-te/P),j+=1}}for(let te=0;te<P;te++)for(let ie=0;ie<R;ie++){let pe=d+ie+D*te,ye=d+ie+D*(te+1),W=d+(ie+1)+D*(te+1),Xe=d+(ie+1)+D*te;c.push(pe,ye,Xe),c.push(ye,W,Xe),Z+=6}a.addGroup(f,Z,k),f+=Z,d+=j}}};function vs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function qt(n){let e={};for(let t=0;t<n.length;t++){let i=vs(n[t]);for(let r in i)e[r]=i[r]}return e}var h_={clone:vs,merge:qt},u_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yi=class extends Bt{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=u_,this.fragmentShader=d_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}};yi.prototype.isShaderMaterial=!0;var Go=class extends We{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new b),this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};Go.prototype.isCamera=!0;var Kt=class extends Go{constructor(e=50,t=1,i=.1,r=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Iu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Iu*2*Math.atan(Math.tan(Bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Bc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};Kt.prototype.isPerspectiveCamera=!0;var os=90,as=1,Vo=class extends We{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;let r=new Kt(os,as,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new b(1,0,0)),this.add(r);let s=new Kt(os,as,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new b(-1,0,0)),this.add(s);let o=new Kt(os,as,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new b(0,1,0)),this.add(o);let a=new Kt(os,as,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new b(0,-1,0)),this.add(a);let c=new Kt(os,as,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new b(0,0,1)),this.add(c);let l=new Kt(os,as,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new b(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();let i=this.renderTarget,[r,s,o,a,c,l]=this.children,h=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;let d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(u),e.xr.enabled=h}},_s=class extends Yt{constructor(e,t,i,r,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Vd,a=a!==void 0?a:pr,super(e,t,i,r,s,o,a,c,l,h),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};_s.prototype.isCubeTexture=!0;var qc=class extends pi{constructor(e,t,i){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=i),super(e,e,t),t=t||{},this.texture=new _s(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bn,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Un,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ce(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pt,blending:Do});s.uniforms.tEquirect.value=t;let o=new J(r,s),a=t.minFilter;return t.minFilter===Yd&&(t.minFilter=bn),new Vo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}};qc.prototype.isWebGLCubeRenderTarget=!0;var Xc=class extends Yt{constructor(e,t,i,r,s,o,a,c,l,h,u,d){super(null,o,a,c,l,h,r,s,u,d),this.image={data:e||null,width:t||1,height:i||1},this.magFilter=l!==void 0?l:en,this.minFilter=h!==void 0?h:en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Xc.prototype.isDataTexture=!0;var cs=new Gi,gc=new b,bs=class{constructor(e=new _n,t=new _n,i=new _n,r=new _n,s=new _n,o=new _n){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){let t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],h=i[6],u=i[7],d=i[8],f=i[9],p=i[10],y=i[11],x=i[12],g=i[13],m=i[14],v=i[15];return t[0].setComponents(a-r,u-c,y-d,v-x).normalize(),t[1].setComponents(a+r,u+c,y+d,v+x).normalize(),t[2].setComponents(a+s,u+l,y+f,v+g).normalize(),t[3].setComponents(a-s,u-l,y-f,v-g).normalize(),t[4].setComponents(a-o,u-h,y-p,v-m).normalize(),t[5].setComponents(a+o,u+h,y+p,v+m).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSprite(e){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(gc.x=r.normal.x>0?e.max.x:e.min.x,gc.y=r.normal.y>0?e.max.y:e.min.y,gc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ug(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function f_(n,e){let t=e.isWebGL2,i=new WeakMap;function r(l,h){let u=l.array,d=l.usage,f=n.createBuffer();n.bindBuffer(h,f),n.bufferData(h,u,d),l.onUploadCallback();let p=5126;return u instanceof Float32Array?p=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?l.isFloat16BufferAttribute?t?p=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):p=5123:u instanceof Int16Array?p=5122:u instanceof Uint32Array?p=5125:u instanceof Int32Array?p=5124:u instanceof Int8Array?p=5120:u instanceof Uint8Array&&(p=5121),{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,u){let d=h.array,f=h.updateRange;n.bindBuffer(u,l),f.count===-1?n.bufferSubData(u,0,d):(t?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u===void 0?i.set(l,r(l,h)):u.version<l.version&&(s(u.buffer,l,h),u.version=l.version)}return{get:o,remove:a,update:c}}var Bu=class extends it{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,u=e/a,d=t/c,f=[],p=[],y=[],x=[];for(let g=0;g<h;g++){let m=g*d-o;for(let v=0;v<l;v++){let E=v*u-s;p.push(E,-m,0),y.push(0,0,1),x.push(v/a),x.push(1-g/c)}}for(let g=0;g<c;g++)for(let m=0;m<a;m++){let v=m+l*g,E=m+l*(g+1),T=m+1+l*(g+1),w=m+1+l*g;f.push(v,E,w),f.push(E,T,w)}this.setIndex(f),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(y,3)),this.setAttribute("uv",new yt(x,2))}},p_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,m_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g_=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,y_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,x_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,w_="vec3 transformed = vec3( position );",v_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,__=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,b_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,I_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,D_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,P_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,B_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,N_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,U_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F_="gl_FragColor = linearToOutputTexel( gl_FragColor );",O_=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,H_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,z_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,G_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,q_=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,X_=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Y_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Z_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,J_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q_=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,K_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,eb=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,tb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nb=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,ib=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rb=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,sb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,ob=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ab=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,lb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,hb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ub=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,db=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pb=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,mb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,_b=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,bb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,Mb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Eb=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Tb=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ab=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Rb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Lb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Cb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Db=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nb=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ub=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fb=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Ob=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Gb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yb=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jb=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,$b=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,Zb=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Jb=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Qb=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Kb=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,eM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,tM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,nM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,iM=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sM=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,cM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yM=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vM=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_M=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bM=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EM=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SM=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TM=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,RM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,LM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,IM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,DM=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,BM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,De={alphamap_fragment:p_,alphamap_pars_fragment:m_,alphatest_fragment:g_,aomap_fragment:y_,aomap_pars_fragment:x_,begin_vertex:w_,beginnormal_vertex:v_,bsdfs:__,bumpmap_pars_fragment:b_,clipping_planes_fragment:M_,clipping_planes_pars_fragment:E_,clipping_planes_pars_vertex:S_,clipping_planes_vertex:T_,color_fragment:A_,color_pars_fragment:R_,color_pars_vertex:L_,color_vertex:C_,common:I_,cube_uv_reflection_fragment:D_,defaultnormal_vertex:P_,displacementmap_pars_vertex:B_,displacementmap_vertex:k_,emissivemap_fragment:N_,emissivemap_pars_fragment:U_,encodings_fragment:F_,encodings_pars_fragment:O_,envmap_fragment:H_,envmap_common_pars_fragment:z_,envmap_pars_fragment:G_,envmap_pars_vertex:V_,envmap_physical_pars_fragment:eb,envmap_vertex:W_,fog_vertex:q_,fog_pars_vertex:X_,fog_fragment:Y_,fog_pars_fragment:j_,gradientmap_pars_fragment:$_,lightmap_fragment:Z_,lightmap_pars_fragment:J_,lights_lambert_vertex:Q_,lights_pars_begin:K_,lights_toon_fragment:tb,lights_toon_pars_fragment:nb,lights_phong_fragment:ib,lights_phong_pars_fragment:rb,lights_physical_fragment:sb,lights_physical_pars_fragment:ob,lights_fragment_begin:ab,lights_fragment_maps:cb,lights_fragment_end:lb,logdepthbuf_fragment:hb,logdepthbuf_pars_fragment:ub,logdepthbuf_pars_vertex:db,logdepthbuf_vertex:fb,map_fragment:pb,map_pars_fragment:mb,map_particle_fragment:gb,map_particle_pars_fragment:yb,metalnessmap_fragment:xb,metalnessmap_pars_fragment:wb,morphnormal_vertex:vb,morphtarget_pars_vertex:_b,morphtarget_vertex:bb,normal_fragment_begin:Mb,normal_fragment_maps:Eb,normalmap_pars_fragment:Sb,clearcoat_normal_fragment_begin:Tb,clearcoat_normal_fragment_maps:Ab,clearcoat_pars_fragment:Rb,packing:Lb,premultiplied_alpha_fragment:Cb,project_vertex:Ib,dithering_fragment:Db,dithering_pars_fragment:Pb,roughnessmap_fragment:Bb,roughnessmap_pars_fragment:kb,shadowmap_pars_fragment:Nb,shadowmap_pars_vertex:Ub,shadowmap_vertex:Fb,shadowmask_pars_fragment:Ob,skinbase_vertex:Hb,skinning_pars_vertex:zb,skinning_vertex:Gb,skinnormal_vertex:Vb,specularmap_fragment:Wb,specularmap_pars_fragment:qb,tonemapping_fragment:Xb,tonemapping_pars_fragment:Yb,transmissionmap_fragment:jb,transmissionmap_pars_fragment:$b,uv_pars_fragment:Zb,uv_pars_vertex:Jb,uv_vertex:Qb,uv2_pars_fragment:Kb,uv2_pars_vertex:eM,uv2_vertex:tM,worldpos_vertex:nM,background_frag:iM,background_vert:rM,cube_frag:sM,cube_vert:oM,depth_frag:aM,depth_vert:cM,distanceRGBA_frag:lM,distanceRGBA_vert:hM,equirect_frag:uM,equirect_vert:dM,linedashed_frag:fM,linedashed_vert:pM,meshbasic_frag:mM,meshbasic_vert:gM,meshlambert_frag:yM,meshlambert_vert:xM,meshmatcap_frag:wM,meshmatcap_vert:vM,meshtoon_frag:_M,meshtoon_vert:bM,meshphong_frag:MM,meshphong_vert:EM,meshphysical_frag:SM,meshphysical_vert:TM,normal_frag:AM,normal_vert:RM,points_frag:LM,points_vert:CM,shadow_frag:IM,shadow_vert:DM,sprite_frag:PM,sprite_vert:BM},ne={common:{diffuse:{value:new ue(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new Lt},uv2Transform:{value:new Lt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new ue(15658734)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new Lt}}},Yn={basic:{uniforms:qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.fog,ne.lights,{emissive:{value:new ue(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:qt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:qt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new ue(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:qt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:qt([ne.points,ne.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:qt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:qt([ne.common,ne.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:qt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:De.normal_vert,fragmentShader:De.normal_frag},sprite:{uniforms:qt([ne.sprite,ne.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null}},vertexShader:De.background_vert,fragmentShader:De.background_frag},cube:{uniforms:qt([ne.envmap,{opacity:{value:1}}]),vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:qt([ne.common,ne.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:qt([ne.lights,ne.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Yn.physical={uniforms:qt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new $(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new ue(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};function kM(n,e,t,i,r){let s=new ue(0),o=0,a,c,l=null,h=0,u=null;function d(p,y,x,g){let m=y.isScene===!0?y.background:null;m&&m.isTexture&&(m=e.get(m));let v=n.xr,E=v.getSession&&v.getSession();E&&E.environmentBlendMode==="additive"&&(m=null),m===null?f(s,o):m&&m.isColor&&(f(m,1),g=!0),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),m&&(m.isCubeTexture||m.mapping===qd)?(c===void 0&&(c=new J(new ce(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:vs(Yn.cube.uniforms),vertexShader:Yn.cube.vertexShader,fragmentShader:Yn.cube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m._needsFlipEnvMap?-1:1,(l!==m||h!==m.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,l=m,h=m.version,u=n.toneMapping),p.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(a===void 0&&(a=new J(new Bu(2,2),new yi({name:"BackgroundMaterial",uniforms:vs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:yl,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),a.material.uniforms.uvTransform.value.copy(m.matrix),(l!==m||h!==m.version||u!==n.toneMapping)&&(a.material.needsUpdate=!0,l=m,h=m.version,u=n.toneMapping),p.unshift(a,a.geometry,a.material,0,0,null))}function f(p,y){t.buffers.color.setClear(p.r,p.g,p.b,y,r)}return{getClearColor:function(){return s},setClearColor:function(p,y=1){s.set(p),o=y,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,f(s,o)},render:d}}function NM(n,e,t,i){let r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=y(null),l=c;function h(I,B,D,C,j){let Z=!1;if(o){let G=p(C,D,B);l!==G&&(l=G,d(l.object)),Z=x(C,j),Z&&g(C,j)}else{let G=B.wireframe===!0;(l.geometry!==C.id||l.program!==D.id||l.wireframe!==G)&&(l.geometry=C.id,l.program=D.id,l.wireframe=G,Z=!0)}I.isInstancedMesh===!0&&(Z=!0),j!==null&&t.update(j,34963),Z&&(R(I,B,D,C),j!==null&&n.bindBuffer(34963,t.get(j).buffer))}function u(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function f(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function p(I,B,D){let C=D.wireframe===!0,j=a[I.id];j===void 0&&(j={},a[I.id]=j);let Z=j[B.id];Z===void 0&&(Z={},j[B.id]=Z);let G=Z[C];return G===void 0&&(G=y(u()),Z[C]=G),G}function y(I){let B=[],D=[],C=[];for(let j=0;j<r;j++)B[j]=0,D[j]=0,C[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:D,attributeDivisors:C,object:I,attributes:{},index:null}}function x(I,B){let D=l.attributes,C=I.attributes,j=0;for(let Z in C){let G=D[Z],te=C[Z];if(G===void 0||G.attribute!==te||G.data!==te.data)return!0;j++}return l.attributesNum!==j||l.index!==B}function g(I,B){let D={},C=I.attributes,j=0;for(let Z in C){let G=C[Z],te={};te.attribute=G,G.data&&(te.data=G.data),D[Z]=te,j++}l.attributes=D,l.attributesNum=j,l.index=B}function m(){let I=l.newAttributes;for(let B=0,D=I.length;B<D;B++)I[B]=0}function v(I){E(I,0)}function E(I,B){let D=l.newAttributes,C=l.enabledAttributes,j=l.attributeDivisors;D[I]=1,C[I]===0&&(n.enableVertexAttribArray(I),C[I]=1),j[I]!==B&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,B),j[I]=B)}function T(){let I=l.newAttributes,B=l.enabledAttributes;for(let D=0,C=B.length;D<C;D++)B[D]!==I[D]&&(n.disableVertexAttribArray(D),B[D]=0)}function w(I,B,D,C,j,Z){i.isWebGL2===!0&&(D===5124||D===5125)?n.vertexAttribIPointer(I,B,D,j,Z):n.vertexAttribPointer(I,B,D,C,j,Z)}function R(I,B,D,C){if(i.isWebGL2===!1&&(I.isInstancedMesh||C.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();let j=C.attributes,Z=D.getAttributes(),G=B.defaultAttributeValues;for(let te in Z){let ie=Z[te];if(ie>=0){let pe=j[te];if(pe!==void 0){let ye=pe.normalized,W=pe.itemSize,Xe=t.get(pe);if(Xe===void 0)continue;let ke=Xe.buffer,be=Xe.type,xe=Xe.bytesPerElement;if(pe.isInterleavedBufferAttribute){let Ne=pe.data,Le=Ne.stride,Ie=pe.offset;Ne&&Ne.isInstancedInterleavedBuffer?(E(ie,Ne.meshPerAttribute),C._maxInstanceCount===void 0&&(C._maxInstanceCount=Ne.meshPerAttribute*Ne.count)):v(ie),n.bindBuffer(34962,ke),w(ie,W,be,ye,Le*xe,Ie*xe)}else pe.isInstancedBufferAttribute?(E(ie,pe.meshPerAttribute),C._maxInstanceCount===void 0&&(C._maxInstanceCount=pe.meshPerAttribute*pe.count)):v(ie),n.bindBuffer(34962,ke),w(ie,W,be,ye,0,0)}else if(te==="instanceMatrix"){let ye=t.get(I.instanceMatrix);if(ye===void 0)continue;let W=ye.buffer,Xe=ye.type;E(ie+0,1),E(ie+1,1),E(ie+2,1),E(ie+3,1),n.bindBuffer(34962,W),n.vertexAttribPointer(ie+0,4,Xe,!1,64,0),n.vertexAttribPointer(ie+1,4,Xe,!1,64,16),n.vertexAttribPointer(ie+2,4,Xe,!1,64,32),n.vertexAttribPointer(ie+3,4,Xe,!1,64,48)}else if(te==="instanceColor"){let ye=t.get(I.instanceColor);if(ye===void 0)continue;let W=ye.buffer,Xe=ye.type;E(ie,1),n.bindBuffer(34962,W),n.vertexAttribPointer(ie,3,Xe,!1,12,0)}else if(G!==void 0){let ye=G[te];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(ie,ye);break;case 3:n.vertexAttrib3fv(ie,ye);break;case 4:n.vertexAttrib4fv(ie,ye);break;default:n.vertexAttrib1fv(ie,ye)}}}}T()}function P(){z();for(let I in a){let B=a[I];for(let D in B){let C=B[D];for(let j in C)f(C[j].object),delete C[j];delete B[D]}delete a[I]}}function k(I){if(a[I.id]===void 0)return;let B=a[I.id];for(let D in B){let C=B[D];for(let j in C)f(C[j].object),delete C[j];delete B[D]}delete a[I.id]}function U(I){for(let B in a){let D=a[B];if(D[I.id]===void 0)continue;let C=D[I.id];for(let j in C)f(C[j].object),delete C[j];delete D[I.id]}}function z(){O(),l!==c&&(l=c,d(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:z,resetDefaultState:O,dispose:P,releaseStatesOfGeometry:k,releaseStatesOfProgram:U,initAttributes:m,enableAttribute:v,disableUnusedAttributes:T}}function UM(n,e,t,i){let r=i.isWebGL2,s;function o(l){s=l}function a(l,h){n.drawArrays(s,l,h),t.update(h,s,1)}function c(l,h,u){if(u===0)return;let d,f;if(r)d=n,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,l,h,u),t.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=c}function FM(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext,a=t.precision!==void 0?t.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=t.logarithmicDepthBuffer===!0,h=n.getParameter(34930),u=n.getParameter(35660),d=n.getParameter(3379),f=n.getParameter(34076),p=n.getParameter(34921),y=n.getParameter(36347),x=n.getParameter(36348),g=n.getParameter(36349),m=u>0,v=o||e.has("OES_texture_float"),E=m&&v,T=o?n.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:g,vertexTextures:m,floatFragmentTextures:v,floatVertexTextures:E,maxSamples:T}}function OM(n){let e=this,t=null,i=0,r=!1,s=!1,o=new _n,a=new Lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){let p=u.length!==0||d||i!==0||r;return r=d,t=h(u,f,0),i=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,l()},this.setState=function(u,d,f){let p=u.clippingPlanes,y=u.clipIntersection,x=u.clipShadows,g=n.get(u);if(!r||p===null||p.length===0||s&&!x)s?h(null):l();else{let m=s?0:i,v=m*4,E=g.clippingState||null;c.value=E,E=h(p,d,v,f);for(let T=0;T!==v;++T)E[T]=t[T];g.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,p){let y=u!==null?u.length:0,x=null;if(y!==0){if(x=c.value,p!==!0||x===null){let g=f+y*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(x===null||x.length<g)&&(x=new Float32Array(g));for(let v=0,E=f;v!==y;++v,E+=4)o.copy(u[v]).applyMatrix4(m,a),o.normal.toArray(x,E),x[E+3]=o.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}}function HM(n){let e=new WeakMap;function t(o,a){return a===hm?o.mapping=Vd:a===um&&(o.mapping=Wd),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===hm||a===um)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=n.getRenderTarget(),h=new qc(c.height/2);return h.fromEquirectangularTexture(n,o),e.set(o,h),n.setRenderTarget(l),o.addEventListener("dispose",r),t(h.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}function zM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function GM(n,e,t,i){let r={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete r[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let p in d)e.update(d[p],34962);let f=u.morphAttributes;for(let p in f){let y=f[p];for(let x=0,g=y.length;x<g;x++)e.update(y[x],34962)}}function l(u){let d=[],f=u.index,p=u.attributes.position,y=0;if(f!==null){let m=f.array;y=f.version;for(let v=0,E=m.length;v<E;v+=3){let T=m[v+0],w=m[v+1],R=m[v+2];d.push(T,w,w,R,R,T)}}else{let m=p.array;y=p.version;for(let v=0,E=m.length/3-1;v<E;v+=3){let T=v+0,w=v+1,R=v+2;d.push(T,w,w,R,R,T)}}let x=new(Ng(d)>65535?Wc:Vc)(d,1);x.version=y;let g=s.get(u);g&&e.remove(g),s.set(u,x)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function VM(n,e,t,i){let r=i.isWebGL2,s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,f){n.drawElements(s,f,a,d*c),t.update(f,s,1)}function u(d,f,p){if(p===0)return;let y,x;if(r)y=n,x="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[x](s,f,a,d*c,p),t.update(f,s,p)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function WM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function qM(n,e){return n[0]-e[0]}function XM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function YM(n){let e={},t=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,c){let l=s.morphTargetInfluences,h=l===void 0?0:l.length,u=e[o.id];if(u===void 0){u=[];for(let x=0;x<h;x++)u[x]=[x,0];e[o.id]=u}for(let x=0;x<h;x++){let g=u[x];g[0]=x,g[1]=l[x]}u.sort(XM);for(let x=0;x<8;x++)x<h&&u[x][1]?(i[x][0]=u[x][0],i[x][1]=u[x][1]):(i[x][0]=Number.MAX_SAFE_INTEGER,i[x][1]=0);i.sort(qM);let d=a.morphTargets&&o.morphAttributes.position,f=a.morphNormals&&o.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let g=i[x],m=g[0],v=g[1];m!==Number.MAX_SAFE_INTEGER&&v?(d&&o.getAttribute("morphTarget"+x)!==d[m]&&o.setAttribute("morphTarget"+x,d[m]),f&&o.getAttribute("morphNormal"+x)!==f[m]&&o.setAttribute("morphNormal"+x,f[m]),t[x]=v,p+=v):(d&&o.hasAttribute("morphTarget"+x)===!0&&o.deleteAttribute("morphTarget"+x),f&&o.hasAttribute("morphNormal"+x)===!0&&o.deleteAttribute("morphNormal"+x),t[x]=0)}let y=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",t)}return{update:r}}function jM(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);return r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Yc=class extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.image={data:e,width:t,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Yc.prototype.isDataTexture2DArray=!0;var jc=class extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.image={data:e,width:t,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};jc.prototype.isDataTexture3D=!0;var Fg=new Yt,$M=new Yc,ZM=new jc,Og=new _s,Um=[],Fm=[],Om=new Float32Array(16),Hm=new Float32Array(9),zm=new Float32Array(4);function Bs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Um[r];if(s===void 0&&(s=new Float32Array(r),Um[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function tn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Hg(n,e){let t=Fm[e];t===void 0&&(t=new Int32Array(e),Fm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function JM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function QM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2fv(this.addr,e),jt(t,e)}}function KM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;n.uniform3fv(this.addr,e),jt(t,e)}}function eE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4fv(this.addr,e),jt(t,e)}}function tE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(tn(t,i))return;zm.set(i),n.uniformMatrix2fv(this.addr,!1,zm),jt(t,i)}}function nE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(tn(t,i))return;Hm.set(i),n.uniformMatrix3fv(this.addr,!1,Hm),jt(t,i)}}function iE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(tn(t,i))return;Om.set(i),n.uniformMatrix4fv(this.addr,!1,Om),jt(t,i)}}function rE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function sE(n,e){let t=this.cache;tn(t,e)||(n.uniform2iv(this.addr,e),jt(t,e))}function oE(n,e){let t=this.cache;tn(t,e)||(n.uniform3iv(this.addr,e),jt(t,e))}function aE(n,e){let t=this.cache;tn(t,e)||(n.uniform4iv(this.addr,e),jt(t,e))}function cE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function lE(n,e){let t=this.cache;tn(t,e)||(n.uniform2uiv(this.addr,e),jt(t,e))}function hE(n,e){let t=this.cache;tn(t,e)||(n.uniform3uiv(this.addr,e),jt(t,e))}function uE(n,e){let t=this.cache;tn(t,e)||(n.uniform4uiv(this.addr,e),jt(t,e))}function dE(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.safeSetTexture2D(e||Fg,r)}function fE(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ZM,r)}function pE(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.safeSetTextureCube(e||Og,r)}function mE(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||$M,r)}function gE(n){switch(n){case 5126:return JM;case 35664:return QM;case 35665:return KM;case 35666:return eE;case 35674:return tE;case 35675:return nE;case 35676:return iE;case 5124:case 35670:return rE;case 35667:case 35671:return sE;case 35668:case 35672:return oE;case 35669:case 35673:return aE;case 5125:return cE;case 36294:return lE;case 36295:return hE;case 36296:return uE;case 35678:case 36198:case 36298:case 36306:case 35682:return dE;case 35679:case 36299:case 36307:return fE;case 35680:case 36300:case 36308:case 36293:return pE;case 36289:case 36303:case 36311:case 36292:return mE}}function yE(n,e){n.uniform1fv(this.addr,e)}function xE(n,e){let t=Bs(e,this.size,2);n.uniform2fv(this.addr,t)}function wE(n,e){let t=Bs(e,this.size,3);n.uniform3fv(this.addr,t)}function vE(n,e){let t=Bs(e,this.size,4);n.uniform4fv(this.addr,t)}function _E(n,e){let t=Bs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function bE(n,e){let t=Bs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ME(n,e){let t=Bs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function EE(n,e){n.uniform1iv(this.addr,e)}function SE(n,e){n.uniform2iv(this.addr,e)}function TE(n,e){n.uniform3iv(this.addr,e)}function AE(n,e){n.uniform4iv(this.addr,e)}function RE(n,e){n.uniform1uiv(this.addr,e)}function LE(n,e){n.uniform2uiv(this.addr,e)}function CE(n,e){n.uniform3uiv(this.addr,e)}function IE(n,e){n.uniform4uiv(this.addr,e)}function DE(n,e,t){let i=e.length,r=Hg(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.safeSetTexture2D(e[s]||Fg,r[s])}function PE(n,e,t){let i=e.length,r=Hg(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.safeSetTextureCube(e[s]||Og,r[s])}function BE(n){switch(n){case 5126:return yE;case 35664:return xE;case 35665:return wE;case 35666:return vE;case 35674:return _E;case 35675:return bE;case 35676:return ME;case 5124:case 35670:return EE;case 35667:case 35671:return SE;case 35668:case 35672:return TE;case 35669:case 35673:return AE;case 5125:return RE;case 36294:return LE;case 36295:return CE;case 36296:return IE;case 35678:case 36198:case 36298:case 36306:case 35682:return DE;case 35680:case 36300:case 36308:case 36293:return PE}}function kE(n,e,t){this.id=n,this.addr=t,this.cache=[],this.setValue=gE(e.type)}function zg(n,e,t){this.id=n,this.addr=t,this.cache=[],this.size=e.size,this.setValue=BE(e.type)}zg.prototype.updateCache=function(n){let e=this.cache;n instanceof Float32Array&&e.length!==n.length&&(this.cache=new Float32Array(n.length)),jt(e,n)};function Gg(n){this.id=n,this.seq=[],this.map={}}Gg.prototype.setValue=function(n,e,t){let i=this.seq;for(let r=0,s=i.length;r!==s;++r){let o=i[r];o.setValue(n,e[o.id],t)}};var wu=/(\w+)(\])?(\[|\.)?/g;function Gm(n,e){n.seq.push(e),n.map[e.id]=e}function NE(n,e,t){let i=n.name,r=i.length;for(wu.lastIndex=0;;){let s=wu.exec(i),o=wu.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Gm(t,l===void 0?new kE(a,n,e):new zg(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Gg(a),Gm(t,u)),t=u}}}function Oi(n,e){this.seq=[],this.map={};let t=n.getProgramParameter(e,35718);for(let i=0;i<t;++i){let r=n.getActiveUniform(e,i),s=n.getUniformLocation(e,r.name);NE(r,s,this)}}Oi.prototype.setValue=function(n,e,t,i){let r=this.map[e];r!==void 0&&r.setValue(n,t,i)};Oi.prototype.setOptional=function(n,e,t){let i=e[t];i!==void 0&&this.setValue(n,t,i)};Oi.upload=function(n,e,t,i){for(let r=0,s=e.length;r!==s;++r){let o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(n,a.value,i)}};Oi.seqWithValue=function(n,e){let t=[];for(let i=0,r=n.length;i!==r;++i){let s=n[i];s.id in e&&t.push(s)}return t};function Vm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var UE=0;function FE(n){let e=n.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Vg(n){switch(n){case Ds:return["Linear","( value )"];case sa:return["sRGB","( value )"];case Ig:return["RGBE","( value )"];case Dg:return["RGBM","( value, 7.0 )"];case Pg:return["RGBM","( value, 16.0 )"];case Bg:return["RGBD","( value, 256.0 )"];case Cg:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Vv:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Wm(n,e,t){let i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=n.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+r+FE(s)}function Eo(n,e){let t=Vg(e);return"vec4 "+n+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function OE(n,e){let t=Vg(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function HE(n,e){let t;switch(e){case Gw:t="Linear";break;case Vw:t="Reinhard";break;case Ww:t="OptimizedCineon";break;case qw:t="ACESFilmic";break;case Xw:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zE(n){return[n.extensionDerivatives||n.envMapCubeUV||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Io).join(`
`)}function GE(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function VE(n,e){let t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){let o=n.getActiveAttrib(e,r).name;t[o]=n.getAttribLocation(e,o)}return t}function Io(n){return n!==""}function qm(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var WE=/^[ \t]*#include +<([\w\d./]+)>/gm;function ku(n){return n.replace(WE,qE)}function qE(n,e){let t=De[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ku(t)}var XE=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,YE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ym(n){return n.replace(YE,Wg).replace(XE,jE)}function jE(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Wg(n,e,t,i)}function Wg(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $E(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Eg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Co&&(e="SHADOWMAP_TYPE_VSM"),e}function ZE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Vd:case Wd:e="ENVMAP_TYPE_CUBE";break;case qd:case Xd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Wd:case Xd:e="ENVMAP_MODE_REFRACTION";break}return e}function QE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wl:e="ENVMAP_BLENDING_MULTIPLY";break;case Hw:e="ENVMAP_BLENDING_MIX";break;case zw:e="ENVMAP_BLENDING_ADD";break}return e}function KE(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=$E(t),l=ZE(t),h=JE(t),u=QE(t),d=n.gammaFactor>0?n.gammaFactor:1,f=t.isWebGL2?"":zE(t),p=GE(s),y=r.createProgram(),x,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[p].filter(Io).join(`
`),x.length>0&&(x+=`
`),g=[f,p].filter(Io).join(`
`),g.length>0&&(g+=`
`)):(x=[jm(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),g=[f,jm(t),"#define SHADER_NAME "+t.shaderName,p,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bo?"#define TONE_MAPPING":"",t.toneMapping!==Bo?De.tonemapping_pars_fragment:"",t.toneMapping!==Bo?HE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",De.encodings_pars_fragment,t.map?Eo("mapTexelToLinear",t.mapEncoding):"",t.matcap?Eo("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Eo("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Eo("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?Eo("lightMapTexelToLinear",t.lightMapEncoding):"",OE("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Io).join(`
`)),o=ku(o),o=qm(o,t),o=Xm(o,t),a=ku(a),a=qm(a,t),a=Xm(a,t),o=Ym(o),a=Ym(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===Em?"":"out highp vec4 pc_fragColor;",t.glslVersion===Em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=m+x+o,E=m+g+a,T=Vm(r,35633,v),w=Vm(r,35632,E);if(r.attachShader(y,T),r.attachShader(y,w),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),n.debug.checkShaderErrors){let k=r.getProgramInfoLog(y).trim(),U=r.getShaderInfoLog(T).trim(),z=r.getShaderInfoLog(w).trim(),O=!0,I=!0;if(r.getProgramParameter(y,35714)===!1){O=!1;let B=Wm(r,T,"vertex"),D=Wm(r,w,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(y,35715),"gl.getProgramInfoLog",k,B,D)}else k!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",k):(U===""||z==="")&&(I=!1);I&&(this.diagnostics={runnable:O,programLog:k,vertexShader:{log:U,prefix:x},fragmentShader:{log:z,prefix:g}})}r.deleteShader(T),r.deleteShader(w);let R;this.getUniforms=function(){return R===void 0&&(R=new Oi(r,y)),R};let P;return this.getAttributes=function(){return P===void 0&&(P=VE(r,y)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.name=t.shaderName,this.id=UE++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=w,this}function eS(n,e,t,i,r,s){let o=[],a=i.isWebGL2,c=i.logarithmicDepthBuffer,l=i.floatVertexTextures,h=i.maxVertexUniforms,u=i.vertexTextures,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},p=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function y(w){let P=w.skeleton.bones;if(l)return 1024;{let U=Math.floor((h-20)/4),z=Math.min(U,P.length);return z<P.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+P.length+" bones. This GPU supports "+z+"."),0):z}}function x(w){let R;return w&&w.isTexture?R=w.encoding:w&&w.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),R=w.texture.encoding):R=Ds,R}function g(w,R,P,k,U){let z=k.fog,O=w.isMeshStandardMaterial?k.environment:null,I=e.get(w.envMap||O),B=f[w.type],D=U.isSkinnedMesh?y(U):0;w.precision!==null&&(d=i.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let C,j;if(B){let te=Yn[B];C=te.vertexShader,j=te.fragmentShader}else C=w.vertexShader,j=w.fragmentShader;let Z=n.getRenderTarget();return{isWebGL2:a,shaderID:B,shaderName:w.type,vertexShader:C,fragmentShader:j,defines:w.defines,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,instancing:U.isInstancedMesh===!0,instancingColor:U.isInstancedMesh===!0&&U.instanceColor!==null,supportsVertexTextures:u,outputEncoding:Z!==null?x(Z.texture):n.outputEncoding,map:!!w.map,mapEncoding:x(w.map),matcap:!!w.matcap,matcapEncoding:x(w.matcap),envMap:!!I,envMapMode:I&&I.mapping,envMapEncoding:x(I),envMapCubeUV:!!I&&(I.mapping===qd||I.mapping===Xd),lightMap:!!w.lightMap,lightMapEncoding:x(w.lightMap),aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,emissiveMapEncoding:x(w.emissiveMap),bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===Xv,tangentSpaceNormalMap:w.normalMapType===Ps,clearcoatMap:!!w.clearcoatMap,clearcoatRoughnessMap:!!w.clearcoatRoughnessMap,clearcoatNormalMap:!!w.clearcoatNormalMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,alphaMap:!!w.alphaMap,gradientMap:!!w.gradientMap,sheen:!!w.sheen,transmissionMap:!!w.transmissionMap,combine:w.combine,vertexTangents:w.normalMap&&w.vertexTangents,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&U.geometry&&U.geometry.attributes.color&&U.geometry.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.displacementMap||!!w.transmissionMap,uvsVertexOnly:!(w.map||w.bumpMap||w.normalMap||w.specularMap||w.alphaMap||w.emissiveMap||w.roughnessMap||w.metalnessMap||w.clearcoatNormalMap||w.transmissionMap)&&!!w.displacementMap,fog:!!z,useFog:w.fog,fogExp2:z&&z.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:c,skinning:w.skinning&&D>0,maxBones:D,useVertexTexture:l,morphTargets:w.morphTargets,morphNormals:w.morphNormals,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:w.toneMapped?n.toneMapping:Bo,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,alphaTest:w.alphaTest,doubleSided:w.side===xl,flipSided:w.side===Pt,depthPacking:w.depthPacking!==void 0?w.depthPacking:!1,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||t.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function m(w){let R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.fragmentShader),R.push(w.vertexShader)),w.defines!==void 0)for(let P in w.defines)R.push(P),R.push(w.defines[P]);if(w.isRawShaderMaterial===!1){for(let P=0;P<p.length;P++)R.push(w[p[P]]);R.push(n.outputEncoding),R.push(n.gammaFactor)}return R.push(w.customProgramCacheKey),R.join()}function v(w){let R=f[w.type],P;if(R){let k=Yn[R];P=h_.clone(k.uniforms)}else P=w.uniforms;return P}function E(w,R){let P;for(let k=0,U=o.length;k<U;k++){let z=o[k];if(z.cacheKey===R){P=z,++P.usedTimes;break}}return P===void 0&&(P=new KE(n,R,w,r),o.push(P)),P}function T(w){if(--w.usedTimes===0){let R=o.indexOf(w);o[R]=o[o.length-1],o.pop(),w.destroy()}}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:E,releaseProgram:T,programs:o}}function tS(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function nS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.program!==e.program?n.program.id-e.program.id:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function iS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function $m(n){let e=[],t=0,i=[],r=[],s={id:-1};function o(){t=0,i.length=0,r.length=0}function a(d,f,p,y,x,g){let m=e[t],v=n.get(p);return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,program:v.program||s,groupOrder:y,renderOrder:d.renderOrder,z:x,group:g},e[t]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.program=v.program||s,m.groupOrder=y,m.renderOrder=d.renderOrder,m.z=x,m.group=g),t++,m}function c(d,f,p,y,x,g){let m=a(d,f,p,y,x,g);(p.transparent===!0?r:i).push(m)}function l(d,f,p,y,x,g){let m=a(d,f,p,y,x,g);(p.transparent===!0?r:i).unshift(m)}function h(d,f){i.length>1&&i.sort(d||nS),r.length>1&&r.sort(f||iS)}function u(){for(let d=t,f=e.length;d<f;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.program=null,p.group=null}}return{opaque:i,transparent:r,init:o,push:c,unshift:l,finish:u,sort:h}}function rS(n){let e=new WeakMap;function t(r,s){let o;return e.has(r)===!1?(o=new $m(n),e.set(r,[o])):s>=e.get(r).length?(o=new $m(n),e.get(r).push(o)):o=e.get(r)[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}function sS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new ue};break;case"SpotLight":t={position:new b,direction:new b,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":t={color:new ue,position:new b,halfWidth:new b,halfHeight:new b};break}return n[e.id]=t,t}}}function oS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var aS=0;function cS(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function lS(n,e){let t=new sS,i=oS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)r.probe.push(new b);let s=new b,o=new we,a=new we;function c(h){let u=0,d=0,f=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let p=0,y=0,x=0,g=0,m=0,v=0,E=0,T=0;h.sort(cS);for(let R=0,P=h.length;R<P;R++){let k=h[R],U=k.color,z=k.intensity,O=k.distance,I=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)u+=U.r*z,d+=U.g*z,f+=U.b*z;else if(k.isLightProbe)for(let B=0;B<9;B++)r.probe[B].addScaledVector(k.sh.coefficients[B],z);else if(k.isDirectionalLight){let B=t.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let D=k.shadow,C=i.get(k);C.shadowBias=D.bias,C.shadowNormalBias=D.normalBias,C.shadowRadius=D.radius,C.shadowMapSize=D.mapSize,r.directionalShadow[p]=C,r.directionalShadowMap[p]=I,r.directionalShadowMatrix[p]=k.shadow.matrix,v++}r.directional[p]=B,p++}else if(k.isSpotLight){let B=t.get(k);if(B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(U).multiplyScalar(z),B.distance=O,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,k.castShadow){let D=k.shadow,C=i.get(k);C.shadowBias=D.bias,C.shadowNormalBias=D.normalBias,C.shadowRadius=D.radius,C.shadowMapSize=D.mapSize,r.spotShadow[x]=C,r.spotShadowMap[x]=I,r.spotShadowMatrix[x]=k.shadow.matrix,T++}r.spot[x]=B,x++}else if(k.isRectAreaLight){let B=t.get(k);B.color.copy(U).multiplyScalar(z),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),r.rectArea[g]=B,g++}else if(k.isPointLight){let B=t.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){let D=k.shadow,C=i.get(k);C.shadowBias=D.bias,C.shadowNormalBias=D.normalBias,C.shadowRadius=D.radius,C.shadowMapSize=D.mapSize,C.shadowCameraNear=D.camera.near,C.shadowCameraFar=D.camera.far,r.pointShadow[y]=C,r.pointShadowMap[y]=I,r.pointShadowMatrix[y]=k.shadow.matrix,E++}r.point[y]=B,y++}else if(k.isHemisphereLight){let B=t.get(k);B.skyColor.copy(k.color).multiplyScalar(z),B.groundColor.copy(k.groundColor).multiplyScalar(z),r.hemi[m]=B,m++}}g>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=d,r.ambient[2]=f;let w=r.hash;(w.directionalLength!==p||w.pointLength!==y||w.spotLength!==x||w.rectAreaLength!==g||w.hemiLength!==m||w.numDirectionalShadows!==v||w.numPointShadows!==E||w.numSpotShadows!==T)&&(r.directional.length=p,r.spot.length=x,r.rectArea.length=g,r.point.length=y,r.hemi.length=m,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=E,r.spotShadowMatrix.length=T,w.directionalLength=p,w.pointLength=y,w.spotLength=x,w.rectAreaLength=g,w.hemiLength=m,w.numDirectionalShadows=v,w.numPointShadows=E,w.numSpotShadows=T,r.version=aS++)}function l(h,u){let d=0,f=0,p=0,y=0,x=0,g=u.matrixWorldInverse;for(let m=0,v=h.length;m<v;m++){let E=h[m];if(E.isDirectionalLight){let T=r.directional[d];T.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),d++}else if(E.isSpotLight){let T=r.spot[p];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),p++}else if(E.isRectAreaLight){let T=r.rectArea[y];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(g),a.identity(),o.copy(E.matrixWorld),o.premultiply(g),a.extractRotation(o),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(E.isPointLight){let T=r.point[f];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(g),f++}else if(E.isHemisphereLight){let T=r.hemi[x];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(g),T.direction.normalize(),x++}}}return{setup:c,setupView:l,state:r}}function Zm(n,e){let t=new lS(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(u){i.push(u)}function a(u){r.push(u)}function c(){t.setup(i)}function l(u){t.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function hS(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new Zm(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new Zm(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}var $c=class extends Bt{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=Wv,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};$c.prototype.isMeshDepthMaterial=!0;var Zc=class extends Bt{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new b,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Zc.prototype.isMeshDistanceMaterial=!0;var uS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,dS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function qg(n,e,t){let i=new bs,r=new $,s=new $,o=new Ye,a=[],c=[],l={},h=t.maxTextureSize,u={0:Pt,1:yl,2:xl},d=new yi({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:dS,fragmentShader:uS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new it;p.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new J(p,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eg,this.render=function(w,R,P){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;let k=n.getRenderTarget(),U=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Do),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let I=0,B=w.length;I<B;I++){let D=w[I],C=D.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;r.copy(C.mapSize);let j=C.getFrameExtents();if(r.multiply(j),s.copy(C.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/j.x),r.x=s.x*j.x,C.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/j.y),r.y=s.y*j.y,C.mapSize.y=s.y)),C.map===null&&!C.isPointLightShadow&&this.type===Co){let G={minFilter:bn,magFilter:bn,format:Un};C.map=new pi(r.x,r.y,G),C.map.texture.name=D.name+".shadowMap",C.mapPass=new pi(r.x,r.y,G),C.camera.updateProjectionMatrix()}if(C.map===null){let G={minFilter:en,magFilter:en,format:Un};C.map=new pi(r.x,r.y,G),C.map.texture.name=D.name+".shadowMap",C.camera.updateProjectionMatrix()}n.setRenderTarget(C.map),n.clear();let Z=C.getViewportCount();for(let G=0;G<Z;G++){let te=C.getViewport(G);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),O.viewport(o),C.updateMatrices(D,G),i=C.getFrustum(),T(R,P,C.camera,D,this.type)}!C.isPointLightShadow&&this.type===Co&&g(C,P),C.needsUpdate=!1}x.needsUpdate=!1,n.setRenderTarget(k,U,z)};function g(w,R){let P=e.update(y);d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,P,d,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,P,f,y,null)}function m(w,R,P){let k=w<<0|R<<1|P<<2,U=a[k];return U===void 0&&(U=new $c({depthPacking:qv,morphTargets:w,skinning:R}),a[k]=U),U}function v(w,R,P){let k=w<<0|R<<1|P<<2,U=c[k];return U===void 0&&(U=new Zc({morphTargets:w,skinning:R}),c[k]=U),U}function E(w,R,P,k,U,z,O){let I=null,B=m,D=w.customDepthMaterial;if(k.isPointLight===!0&&(B=v,D=w.customDistanceMaterial),D===void 0){let C=!1;P.morphTargets===!0&&(C=R.morphAttributes&&R.morphAttributes.position&&R.morphAttributes.position.length>0);let j=!1;w.isSkinnedMesh===!0&&(P.skinning===!0?j=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",w));let Z=w.isInstancedMesh===!0;I=B(C,j,Z)}else I=D;if(n.localClippingEnabled&&P.clipShadows===!0&&P.clippingPlanes.length!==0){let C=I.uuid,j=P.uuid,Z=l[C];Z===void 0&&(Z={},l[C]=Z);let G=Z[j];G===void 0&&(G=I.clone(),Z[j]=G),I=G}return I.visible=P.visible,I.wireframe=P.wireframe,O===Co?I.side=P.shadowSide!==null?P.shadowSide:P.side:I.side=P.shadowSide!==null?P.shadowSide:u[P.side],I.clipShadows=P.clipShadows,I.clippingPlanes=P.clippingPlanes,I.clipIntersection=P.clipIntersection,I.wireframeLinewidth=P.wireframeLinewidth,I.linewidth=P.linewidth,k.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(k.matrixWorld),I.nearDistance=U,I.farDistance=z),I}function T(w,R,P,k,U){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===Co)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);let I=e.update(w),B=w.material;if(Array.isArray(B)){let D=I.groups;for(let C=0,j=D.length;C<j;C++){let Z=D[C],G=B[Z.materialIndex];if(G&&G.visible){let te=E(w,I,G,k,P.near,P.far,U);n.renderBufferDirect(P,null,I,te,w,Z)}}}else if(B.visible){let D=E(w,I,B,k,P.near,P.far,U);n.renderBufferDirect(P,null,I,D,w,null)}}let O=w.children;for(let I=0,B=O.length;I<B;I++)T(O[I],R,P,k,U)}}function fS(n,e,t){let i=t.isWebGL2;function r(){let L=!1,S=new Ye,q=null,se=new Ye(0,0,0,0);return{setMask:function(H){q!==H&&!L&&(n.colorMask(H,H,H,H),q=H)},setLocked:function(H){L=H},setClear:function(H,me,Pe,ct,Wn){Wn===!0&&(H*=ct,me*=ct,Pe*=ct),S.set(H,me,Pe,ct),se.equals(S)===!1&&(n.clearColor(H,me,Pe,ct),se.copy(S))},reset:function(){L=!1,q=null,se.set(-1,0,0,0)}}}function s(){let L=!1,S=null,q=null,se=null;return{setTest:function(H){H?pe(2929):ye(2929)},setMask:function(H){S!==H&&!L&&(n.depthMask(H),S=H)},setFunc:function(H){if(q!==H){if(H)switch(H){case Pw:n.depthFunc(512);break;case Bw:n.depthFunc(519);break;case kw:n.depthFunc(513);break;case Ru:n.depthFunc(515);break;case Nw:n.depthFunc(514);break;case Uw:n.depthFunc(518);break;case Fw:n.depthFunc(516);break;case Ow:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);q=H}},setLocked:function(H){L=H},setClear:function(H){se!==H&&(n.clearDepth(H),se=H)},reset:function(){L=!1,S=null,q=null,se=null}}}function o(){let L=!1,S=null,q=null,se=null,H=null,me=null,Pe=null,ct=null,Wn=null;return{setTest:function(Ve){L||(Ve?pe(2960):ye(2960))},setMask:function(Ve){S!==Ve&&!L&&(n.stencilMask(Ve),S=Ve)},setFunc:function(Ve,At,In){(q!==Ve||se!==At||H!==In)&&(n.stencilFunc(Ve,At,In),q=Ve,se=At,H=In)},setOp:function(Ve,At,In){(me!==Ve||Pe!==At||ct!==In)&&(n.stencilOp(Ve,At,In),me=Ve,Pe=At,ct=In)},setLocked:function(Ve){L=Ve},setClear:function(Ve){Wn!==Ve&&(n.clearStencil(Ve),Wn=Ve)},reset:function(){L=!1,S=null,q=null,se=null,H=null,me=null,Pe=null,ct=null,Wn=null}}}let a=new r,c=new s,l=new o,h={},u=null,d={},f=null,p=!1,y=null,x=null,g=null,m=null,v=null,E=null,T=null,w=!1,R=null,P=null,k=null,U=null,z=null,O=n.getParameter(35661),I=!1,B=0,D=n.getParameter(7938);D.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(D)[1]),I=B>=1):D.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),I=B>=2);let C=null,j={},Z=new Ye(0,0,n.canvas.width,n.canvas.height),G=new Ye(0,0,n.canvas.width,n.canvas.height);function te(L,S,q){let se=new Uint8Array(4),H=n.createTexture();n.bindTexture(L,H),n.texParameteri(L,10241,9728),n.texParameteri(L,10240,9728);for(let me=0;me<q;me++)n.texImage2D(S+me,0,6408,1,1,0,6408,5121,se);return H}let ie={};ie[3553]=te(3553,3553,1),ie[34067]=te(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),pe(2929),c.setFunc(Ru),Ie(!1),Q(rm),pe(2884),Ne(Do);function pe(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function ye(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function W(L){L!==u&&(n.bindFramebuffer(36160,L),u=L)}function Xe(L,S){S===null&&u!==null&&(S=u),d[L]!==S&&(n.bindFramebuffer(L,S),d[L]=S,i&&(L===36009&&(d[36160]=S),L===36160&&(d[36009]=S)))}function ke(L){return f!==L?(n.useProgram(L),f=L,!0):!1}let be={[ps]:32774,[bw]:32778,[Mw]:32779};if(i)be[cm]=32775,be[lm]=32776;else{let L=e.get("EXT_blend_minmax");L!==null&&(be[cm]=L.MIN_EXT,be[lm]=L.MAX_EXT)}let xe={[Ew]:0,[Sw]:1,[Tw]:768,[Tg]:770,[Dw]:776,[Cw]:774,[Rw]:772,[Aw]:769,[Ag]:771,[Iw]:775,[Lw]:773};function Ne(L,S,q,se,H,me,Pe,ct){if(L===Do){p===!0&&(ye(3042),p=!1);return}if(p===!1&&(pe(3042),p=!0),L!==_w){if(L!==y||ct!==w){if((x!==ps||v!==ps)&&(n.blendEquation(32774),x=ps,v=ps),ct)switch(L){case Po:n.blendFuncSeparate(1,771,1,771);break;case sm:n.blendFunc(1,1);break;case om:n.blendFuncSeparate(0,0,769,771);break;case am:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Po:n.blendFuncSeparate(770,771,1,771);break;case sm:n.blendFunc(770,1);break;case om:n.blendFunc(0,769);break;case am:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}g=null,m=null,E=null,T=null,y=L,w=ct}return}H=H||S,me=me||q,Pe=Pe||se,(S!==x||H!==v)&&(n.blendEquationSeparate(be[S],be[H]),x=S,v=H),(q!==g||se!==m||me!==E||Pe!==T)&&(n.blendFuncSeparate(xe[q],xe[se],xe[me],xe[Pe]),g=q,m=se,E=me,T=Pe),y=L,w=null}function Le(L,S){L.side===xl?ye(2884):pe(2884);let q=L.side===Pt;S&&(q=!q),Ie(q),L.blending===Po&&L.transparent===!1?Ne(Do):Ne(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);let se=L.stencilWrite;l.setTest(se),se&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ee(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?pe(32926):ye(32926)}function Ie(L){R!==L&&(L?n.frontFace(2304):n.frontFace(2305),R=L)}function Q(L){L!==ww?(pe(2884),L!==P&&(L===rm?n.cullFace(1029):L===vw?n.cullFace(1028):n.cullFace(1032))):ye(2884),P=L}function K(L){L!==k&&(I&&n.lineWidth(L),k=L)}function ee(L,S,q){L?(pe(32823),(U!==S||z!==q)&&(n.polygonOffset(S,q),U=S,z=q)):ye(32823)}function de(L){L?pe(3089):ye(3089)}function re(L){L===void 0&&(L=33984+O-1),C!==L&&(n.activeTexture(L),C=L)}function A(L,S){C===null&&re();let q=j[C];q===void 0&&(q={type:void 0,texture:void 0},j[C]=q),(q.type!==L||q.texture!==S)&&(n.bindTexture(L,S||ie[L]),q.type=L,q.texture=S)}function M(){let L=j[C];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function X(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(L){Z.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Z.copy(L))}function Ue(L){G.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),G.copy(L))}function ve(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},C=null,j={},u=null,d={},f=null,p=!1,y=null,x=null,g=null,m=null,v=null,E=null,T=null,w=!1,R=null,P=null,k=null,U=null,z=null,Z.set(0,0,n.canvas.width,n.canvas.height),G.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:pe,disable:ye,bindFramebuffer:Xe,bindXRFramebuffer:W,useProgram:ke,setBlending:Ne,setMaterial:Le,setFlipSided:Ie,setCullFace:Q,setLineWidth:K,setPolygonOffset:ee,setScissorTest:de,activeTexture:re,bindTexture:A,unbindTexture:M,compressedTexImage2D:X,texImage2D:Y,texImage3D:oe,scissor:fe,viewport:Ue,reset:ve}}function pS(n,e,t,i,r,s,o){let a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,d=new WeakMap,f,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,M){return p?new OffscreenCanvas(A,M):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function x(A,M,X,Y){let oe=1;if((A.width>Y||A.height>Y)&&(oe=Y/Math.max(A.width,A.height)),oe<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let fe=M?Zv:Math.floor,Ue=fe(oe*A.width),ve=fe(oe*A.height);f===void 0&&(f=y(Ue,ve));let L=X?y(Ue,ve):f;return L.width=Ue,L.height=ve,L.getContext("2d").drawImage(A,0,0,Ue,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ue+"x"+ve+")."),L}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function g(A){return Sm(A.width)&&Sm(A.height)}function m(A){return a?!1:A.wrapS!==Nn||A.wrapT!==Nn||A.minFilter!==en&&A.minFilter!==bn}function v(A,M){return A.generateMipmaps&&M&&A.minFilter!==en&&A.minFilter!==bn}function E(A,M,X,Y){n.generateMipmap(A);let oe=i.get(M);oe.__maxMipLevel=Math.log2(Math.max(X,Y))}function T(A,M,X){if(a===!1)return M;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=M;return M===6403&&(X===5126&&(Y=33326),X===5131&&(Y=33325),X===5121&&(Y=33321)),M===6407&&(X===5126&&(Y=34837),X===5131&&(Y=34843),X===5121&&(Y=32849)),M===6408&&(X===5126&&(Y=34836),X===5131&&(Y=34842),X===5121&&(Y=32856)),(Y===33325||Y===33326||Y===34842||Y===34836)&&e.get("EXT_color_buffer_float"),Y}function w(A){return A===en||A===dm||A===fm?9728:9729}function R(A){let M=A.target;M.removeEventListener("dispose",R),k(M),M.isVideoTexture&&d.delete(M),o.memory.textures--}function P(A){let M=A.target;M.removeEventListener("dispose",P),U(M),o.memory.textures--}function k(A){let M=i.get(A);M.__webglInit!==void 0&&(n.deleteTexture(M.__webglTexture),i.remove(A))}function U(A){let M=A.texture,X=i.get(A),Y=i.get(M);if(A){if(Y.__webglTexture!==void 0&&n.deleteTexture(Y.__webglTexture),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)n.deleteFramebuffer(X.__webglFramebuffer[oe]),X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer[oe]);else n.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&n.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer&&n.deleteRenderbuffer(X.__webglColorRenderbuffer),X.__webglDepthRenderbuffer&&n.deleteRenderbuffer(X.__webglDepthRenderbuffer);i.remove(M),i.remove(A)}}let z=0;function O(){z=0}function I(){let A=z;return A>=c&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+c),z+=1,A}function B(A,M){let X=i.get(A);if(A.isVideoTexture&&Q(A),A.version>0&&X.__version!==A.version){let Y=A.image;if(Y===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(X,A,M);return}}t.activeTexture(33984+M),t.bindTexture(3553,X.__webglTexture)}function D(A,M){let X=i.get(A);if(A.version>0&&X.__version!==A.version){pe(X,A,M);return}t.activeTexture(33984+M),t.bindTexture(35866,X.__webglTexture)}function C(A,M){let X=i.get(A);if(A.version>0&&X.__version!==A.version){pe(X,A,M);return}t.activeTexture(33984+M),t.bindTexture(32879,X.__webglTexture)}function j(A,M){let X=i.get(A);if(A.version>0&&X.__version!==A.version){ye(X,A,M);return}t.activeTexture(33984+M),t.bindTexture(34067,X.__webglTexture)}let Z={[Lu]:10497,[Nn]:33071,[Cu]:33648},G={[en]:9728,[dm]:9984,[fm]:9986,[bn]:9729,[Yw]:9985,[Yd]:9987};function te(A,M,X){if(X?(n.texParameteri(A,10242,Z[M.wrapS]),n.texParameteri(A,10243,Z[M.wrapT]),(A===32879||A===35866)&&n.texParameteri(A,32882,Z[M.wrapR]),n.texParameteri(A,10240,G[M.magFilter]),n.texParameteri(A,10241,G[M.minFilter])):(n.texParameteri(A,10242,33071),n.texParameteri(A,10243,33071),(A===32879||A===35866)&&n.texParameteri(A,32882,33071),(M.wrapS!==Nn||M.wrapT!==Nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,10240,w(M.magFilter)),n.texParameteri(A,10241,w(M.minFilter)),M.minFilter!==en&&M.minFilter!==bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let Y=e.get("EXT_texture_filter_anisotropic");if(M.type===Fi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Uc&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(A,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function ie(A,M){A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",R),A.__webglTexture=n.createTexture(),o.memory.textures++)}function pe(A,M,X){let Y=3553;M.isDataTexture2DArray&&(Y=35866),M.isDataTexture3D&&(Y=32879),ie(A,M),t.activeTexture(33984+X),t.bindTexture(Y,A.__webglTexture),n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);let oe=m(M)&&g(M.image)===!1,fe=x(M.image,oe,!1,h),Ue=g(fe)||a,ve=s.convert(M.format),L=s.convert(M.type),S=T(M.internalFormat,ve,L);te(Y,M,Ue);let q,se=M.mipmaps;if(M.isDepthTexture)S=6402,a?M.type===Fi?S=36012:M.type===Pc?S=33190:M.type===ko?S=35056:S=33189:M.type===Fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===xs&&S===6402&&M.type!==Nc&&M.type!==Pc&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Nc,L=s.convert(M.type)),M.format===Ho&&S===6402&&(S=34041,M.type!==ko&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ko,L=s.convert(M.type))),t.texImage2D(3553,0,S,fe.width,fe.height,0,ve,L,null);else if(M.isDataTexture)if(se.length>0&&Ue){for(let H=0,me=se.length;H<me;H++)q=se[H],t.texImage2D(3553,H,S,q.width,q.height,0,ve,L,q.data);M.generateMipmaps=!1,A.__maxMipLevel=se.length-1}else t.texImage2D(3553,0,S,fe.width,fe.height,0,ve,L,fe.data),A.__maxMipLevel=0;else if(M.isCompressedTexture){for(let H=0,me=se.length;H<me;H++)q=se[H],M.format!==Un&&M.format!==pr?ve!==null?t.compressedTexImage2D(3553,H,S,q.width,q.height,0,q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,H,S,q.width,q.height,0,ve,L,q.data);A.__maxMipLevel=se.length-1}else if(M.isDataTexture2DArray)t.texImage3D(35866,0,S,fe.width,fe.height,fe.depth,0,ve,L,fe.data),A.__maxMipLevel=0;else if(M.isDataTexture3D)t.texImage3D(32879,0,S,fe.width,fe.height,fe.depth,0,ve,L,fe.data),A.__maxMipLevel=0;else if(se.length>0&&Ue){for(let H=0,me=se.length;H<me;H++)q=se[H],t.texImage2D(3553,H,S,ve,L,q);M.generateMipmaps=!1,A.__maxMipLevel=se.length-1}else t.texImage2D(3553,0,S,ve,L,fe),A.__maxMipLevel=0;v(M,Ue)&&E(Y,M,fe.width,fe.height),A.__version=M.version,M.onUpdate&&M.onUpdate(M)}function ye(A,M,X){if(M.image.length!==6)return;ie(A,M),t.activeTexture(33984+X),t.bindTexture(34067,A.__webglTexture),n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);let Y=M&&(M.isCompressedTexture||M.image[0].isCompressedTexture),oe=M.image[0]&&M.image[0].isDataTexture,fe=[];for(let H=0;H<6;H++)!Y&&!oe?fe[H]=x(M.image[H],!1,!0,l):fe[H]=oe?M.image[H].image:M.image[H];let Ue=fe[0],ve=g(Ue)||a,L=s.convert(M.format),S=s.convert(M.type),q=T(M.internalFormat,L,S);te(34067,M,ve);let se;if(Y){for(let H=0;H<6;H++){se=fe[H].mipmaps;for(let me=0;me<se.length;me++){let Pe=se[me];M.format!==Un&&M.format!==pr?L!==null?t.compressedTexImage2D(34069+H,me,q,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+H,me,q,Pe.width,Pe.height,0,L,S,Pe.data)}}A.__maxMipLevel=se.length-1}else{se=M.mipmaps;for(let H=0;H<6;H++)if(oe){t.texImage2D(34069+H,0,q,fe[H].width,fe[H].height,0,L,S,fe[H].data);for(let me=0;me<se.length;me++){let ct=se[me].image[H].image;t.texImage2D(34069+H,me+1,q,ct.width,ct.height,0,L,S,ct.data)}}else{t.texImage2D(34069+H,0,q,L,S,fe[H]);for(let me=0;me<se.length;me++){let Pe=se[me];t.texImage2D(34069+H,me+1,q,L,S,Pe.image[H])}}A.__maxMipLevel=se.length}v(M,ve)&&E(34067,M,Ue.width,Ue.height),A.__version=M.version,M.onUpdate&&M.onUpdate(M)}function W(A,M,X,Y){let oe=M.texture,fe=s.convert(oe.format),Ue=s.convert(oe.type),ve=T(oe.internalFormat,fe,Ue);Y===32879||Y===35866?t.texImage3D(Y,0,ve,M.width,M.height,M.depth,0,fe,Ue,null):t.texImage2D(Y,0,ve,M.width,M.height,0,fe,Ue,null),t.bindFramebuffer(36160,A),n.framebufferTexture2D(36160,X,Y,i.get(oe).__webglTexture,0),t.bindFramebuffer(36160,null)}function Xe(A,M,X){if(n.bindRenderbuffer(36161,A),M.depthBuffer&&!M.stencilBuffer){let Y=33189;if(X){let oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Fi?Y=36012:oe.type===Pc&&(Y=33190));let fe=Ie(M);n.renderbufferStorageMultisample(36161,fe,Y,M.width,M.height)}else n.renderbufferStorage(36161,Y,M.width,M.height);n.framebufferRenderbuffer(36160,36096,36161,A)}else if(M.depthBuffer&&M.stencilBuffer){if(X){let Y=Ie(M);n.renderbufferStorageMultisample(36161,Y,35056,M.width,M.height)}else n.renderbufferStorage(36161,34041,M.width,M.height);n.framebufferRenderbuffer(36160,33306,36161,A)}else{let Y=M.texture,oe=s.convert(Y.format),fe=s.convert(Y.type),Ue=T(Y.internalFormat,oe,fe);if(X){let ve=Ie(M);n.renderbufferStorageMultisample(36161,ve,Ue,M.width,M.height)}else n.renderbufferStorage(36161,Ue,M.width,M.height)}n.bindRenderbuffer(36161,null)}function ke(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);let Y=i.get(M.depthTexture).__webglTexture;if(M.depthTexture.format===xs)n.framebufferTexture2D(36160,36096,3553,Y,0);else if(M.depthTexture.format===Ho)n.framebufferTexture2D(36160,33306,3553,Y,0);else throw new Error("Unknown depthTexture format")}function be(A){let M=i.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ke(M.__webglFramebuffer,A)}else if(X){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(36160,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]=n.createRenderbuffer(),Xe(M.__webglDepthbuffer[Y],A,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),Xe(M.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function xe(A){let M=A.texture,X=i.get(A),Y=i.get(M);A.addEventListener("dispose",P),Y.__webglTexture=n.createTexture(),Y.__version=M.version,o.memory.textures++;let oe=A.isWebGLCubeRenderTarget===!0,fe=A.isWebGLMultisampleRenderTarget===!0,Ue=M.isDataTexture3D||M.isDataTexture2DArray,ve=g(A)||a;if(a&&M.format===pr&&(M.type===Fi||M.type===Uc)&&(M.format=Un,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),oe){X.__webglFramebuffer=[];for(let L=0;L<6;L++)X.__webglFramebuffer[L]=n.createFramebuffer()}else if(X.__webglFramebuffer=n.createFramebuffer(),fe)if(a){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=n.createRenderbuffer(),n.bindRenderbuffer(36161,X.__webglColorRenderbuffer);let L=s.convert(M.format),S=s.convert(M.type),q=T(M.internalFormat,L,S),se=Ie(A);n.renderbufferStorageMultisample(36161,se,q,A.width,A.height),t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064,36161,X.__webglColorRenderbuffer),n.bindRenderbuffer(36161,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),Xe(X.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(oe){t.bindTexture(34067,Y.__webglTexture),te(34067,M,ve);for(let L=0;L<6;L++)W(X.__webglFramebuffer[L],A,36064,34069+L);v(M,ve)&&E(34067,M,A.width,A.height),t.bindTexture(34067,null)}else{let L=3553;Ue&&(a?L=M.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(L,Y.__webglTexture),te(L,M,ve),W(X.__webglFramebuffer,A,36064,L),v(M,ve)&&E(3553,M,A.width,A.height),t.bindTexture(3553,null)}A.depthBuffer&&be(A)}function Ne(A){let M=A.texture,X=g(A)||a;if(v(M,X)){let Y=A.isWebGLCubeRenderTarget?34067:3553,oe=i.get(M).__webglTexture;t.bindTexture(Y,oe),E(Y,M,A.width,A.height),t.bindTexture(Y,null)}}function Le(A){if(A.isWebGLMultisampleRenderTarget)if(a){let M=A.width,X=A.height,Y=16384;A.depthBuffer&&(Y|=256),A.stencilBuffer&&(Y|=1024);let oe=i.get(A);t.bindFramebuffer(36008,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,oe.__webglFramebuffer),n.blitFramebuffer(0,0,M,X,0,0,M,X,Y,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,oe.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Ie(A){return a&&A.isWebGLMultisampleRenderTarget?Math.min(u,A.samples):0}function Q(A){let M=o.render.frame;d.get(A)!==M&&(d.set(A,M),A.update())}let K=!1,ee=!1;function de(A,M){A&&A.isWebGLRenderTarget&&(K===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),K=!0),A=A.texture),B(A,M)}function re(A,M){A&&A.isWebGLCubeRenderTarget&&(ee===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),ee=!0),A=A.texture),j(A,M)}this.allocateTextureUnit=I,this.resetTextureUnits=O,this.setTexture2D=B,this.setTexture2DArray=D,this.setTexture3D=C,this.setTextureCube=j,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=Le,this.safeSetTexture2D=de,this.safeSetTextureCube=re}function mS(n,e,t){let i=t.isWebGL2;function r(s){let o;if(s===jd)return 5121;if(s===Jw)return 32819;if(s===Qw)return 32820;if(s===Kw)return 33635;if(s===jw)return 5120;if(s===$w)return 5122;if(s===Nc)return 5123;if(s===Zw)return 5124;if(s===Pc)return 5125;if(s===Fi)return 5126;if(s===Uc)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ev)return 6406;if(s===pr)return 6407;if(s===Un)return 6408;if(s===tv)return 6409;if(s===nv)return 6410;if(s===xs)return 6402;if(s===Ho)return 34041;if(s===iv)return 6403;if(s===rv)return 36244;if(s===sv)return 33319;if(s===ov)return 33320;if(s===av)return 36248;if(s===cv)return 36249;if(s===pm||s===mm||s===gm||s===ym)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===pm)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===mm)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===gm)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ym)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xm||s===wm||s===vm||s===_m)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===xm)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wm)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vm)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_m)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===lv)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===bm||s===Mm)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===bm)return o.COMPRESSED_RGB8_ETC2;if(s===Mm)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===hv||s===uv||s===dv||s===fv||s===pv||s===mv||s===gv||s===yv||s===xv||s===wv||s===vv||s===_v||s===bv||s===Mv||s===Sv||s===Tv||s===Av||s===Rv||s===Lv||s===Cv||s===Iv||s===Dv||s===Pv||s===Bv||s===kv||s===Nv||s===Uv||s===Fv)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===Ev)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===ko)return i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}var Jc=class extends Kt{constructor(e=[]){super(),this.cameras=e}};Jc.prototype.isArrayCamera=!0;var He=class extends We{constructor(){super(),this.type="Group"}};He.prototype.isGroup=!0;var gS={type:"move"},No=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,i),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gS))),l&&e.hand){o=!0;for(let y of e.hand.values()){let x=t.getJointPose(y,i);if(l.joints[y.jointName]===void 0){let m=new He;m.matrixAutoUpdate=!1,m.visible=!1,l.joints[y.jointName]=m,l.add(m)}let g=l.joints[y.jointName];x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=x.radius),g.visible=x!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}},Nu=class extends On{constructor(e,t){super();let i=this,r=e.state,s=null,o=1,a=null,c="local-floor",l=null,h=[],u=new Map,d=new Kt;d.layers.enable(1),d.viewport=new Ye;let f=new Kt;f.layers.enable(2),f.viewport=new Ye;let p=[d,f],y=new Jc;y.layers.enable(1),y.layers.enable(2);let x=null,g=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let I=h[O];return I===void 0&&(I=new No,h[O]=I),I.getTargetRaySpace()},this.getControllerGrip=function(O){let I=h[O];return I===void 0&&(I=new No,h[O]=I),I.getGripSpace()},this.getHand=function(O){let I=h[O];return I===void 0&&(I=new No,h[O]=I),I.getHandSpace()};function m(O){let I=u.get(O.inputSource);I&&I.dispatchEvent({type:O.type,data:O.inputSource})}function v(){u.forEach(function(O,I){O.disconnect(I)}),u.clear(),x=null,g=null,r.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),z.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){o=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){c=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){s.addEventListener("select",m),s.addEventListener("selectstart",m),s.addEventListener("selectend",m),s.addEventListener("squeeze",m),s.addEventListener("squeezestart",m),s.addEventListener("squeezeend",m),s.addEventListener("end",v),s.addEventListener("inputsourceschange",E);let I=t.getContextAttributes();I.xrCompatible!==!0&&await t.makeXRCompatible();let B={antialias:I.antialias,alpha:I.alpha,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:o},D=new XRWebGLLayer(s,t,B);s.updateRenderState({baseLayer:D}),a=await s.requestReferenceSpace(c),z.setContext(s),z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function E(O){let I=s.inputSources;for(let B=0;B<h.length;B++)u.set(I[B],h[B]);for(let B=0;B<O.removed.length;B++){let D=O.removed[B],C=u.get(D);C&&(C.dispatchEvent({type:"disconnected",data:D}),u.delete(D))}for(let B=0;B<O.added.length;B++){let D=O.added[B],C=u.get(D);C&&C.dispatchEvent({type:"connected",data:D})}}let T=new b,w=new b;function R(O,I,B){T.setFromMatrixPosition(I.matrixWorld),w.setFromMatrixPosition(B.matrixWorld);let D=T.distanceTo(w),C=I.projectionMatrix.elements,j=B.projectionMatrix.elements,Z=C[14]/(C[10]-1),G=C[14]/(C[10]+1),te=(C[9]+1)/C[5],ie=(C[9]-1)/C[5],pe=(C[8]-1)/C[0],ye=(j[8]+1)/j[0],W=Z*pe,Xe=Z*ye,ke=D/(-pe+ye),be=ke*-pe;I.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(be),O.translateZ(ke),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();let xe=Z+ke,Ne=G+ke,Le=W-be,Ie=Xe+(D-be),Q=te*G/Ne*xe,K=ie*G/Ne*xe;O.projectionMatrix.makePerspective(Le,Ie,Q,K,xe,Ne)}function P(O,I){I===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(I.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.getCamera=function(O){y.near=f.near=d.near=O.near,y.far=f.far=d.far=O.far,(x!==y.near||g!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),x=y.near,g=y.far);let I=O.parent,B=y.cameras;P(y,I);for(let C=0;C<B.length;C++)P(B[C],I);O.matrixWorld.copy(y.matrixWorld),O.matrix.copy(y.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);let D=O.children;for(let C=0,j=D.length;C<j;C++)D[C].updateMatrixWorld(!0);return B.length===2?R(y,d,f):y.projectionMatrix.copy(d.projectionMatrix),y};let k=null;function U(O,I){if(l=I.getViewerPose(a),l!==null){let D=l.views,C=s.renderState.baseLayer;r.bindXRFramebuffer(C.framebuffer);let j=!1;D.length!==y.cameras.length&&(y.cameras.length=0,j=!0);for(let Z=0;Z<D.length;Z++){let G=D[Z],te=C.getViewport(G),ie=p[Z];ie.matrix.fromArray(G.transform.matrix),ie.projectionMatrix.fromArray(G.projectionMatrix),ie.viewport.set(te.x,te.y,te.width,te.height),Z===0&&y.matrix.copy(ie.matrix),j===!0&&y.cameras.push(ie)}}let B=s.inputSources;for(let D=0;D<h.length;D++){let C=h[D],j=B[D];C.update(j,I,a)}k&&k(O,I)}let z=new Ug;z.setAnimationLoop(U),this.setAnimationLoop=function(O){k=O},this.dispose=function(){}}};function yS(n){function e(g,m){g.fogColor.value.copy(m.color),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function t(g,m,v,E){m.isMeshBasicMaterial?i(g,m):m.isMeshLambertMaterial?(i(g,m),c(g,m)):m.isMeshToonMaterial?(i(g,m),h(g,m)):m.isMeshPhongMaterial?(i(g,m),l(g,m)):m.isMeshStandardMaterial?(i(g,m),m.isMeshPhysicalMaterial?d(g,m):u(g,m)):m.isMeshMatcapMaterial?(i(g,m),f(g,m)):m.isMeshDepthMaterial?(i(g,m),p(g,m)):m.isMeshDistanceMaterial?(i(g,m),y(g,m)):m.isMeshNormalMaterial?(i(g,m),x(g,m)):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&s(g,m)):m.isPointsMaterial?o(g,m,v,E):m.isSpriteMaterial?a(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.specularMap&&(g.specularMap.value=m.specularMap);let v=n.get(m).envMap;if(v){g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v._needsFlipEnvMap?-1:1,g.reflectivity.value=m.reflectivity,g.refractionRatio.value=m.refractionRatio;let w=n.get(v).__maxMipLevel;w!==void 0&&(g.maxMipLevel.value=w)}m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity);let E;m.map?E=m.map:m.specularMap?E=m.specularMap:m.displacementMap?E=m.displacementMap:m.normalMap?E=m.normalMap:m.bumpMap?E=m.bumpMap:m.roughnessMap?E=m.roughnessMap:m.metalnessMap?E=m.metalnessMap:m.alphaMap?E=m.alphaMap:m.emissiveMap?E=m.emissiveMap:m.clearcoatMap?E=m.clearcoatMap:m.clearcoatNormalMap?E=m.clearcoatNormalMap:m.clearcoatRoughnessMap&&(E=m.clearcoatRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),g.uvTransform.value.copy(E.matrix));let T;m.aoMap?T=m.aoMap:m.lightMap&&(T=m.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),g.uv2Transform.value.copy(T.matrix))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity}function s(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function o(g,m,v,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=E*.5,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let T;m.map?T=m.map:m.alphaMap&&(T=m.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),g.uvTransform.value.copy(T.matrix))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),g.uvTransform.value.copy(v.matrix))}function c(g,m){m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap)}function l(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Pt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Pt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Pt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Pt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function u(g,m){g.roughness.value=m.roughness,g.metalness.value=m.metalness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Pt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Pt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),n.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m){u(g,m),g.reflectivity.value=m.reflectivity,g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.sheen&&g.sheen.value.copy(m.sheen),m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),g.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Pt&&g.clearcoatNormalScale.value.negate()),g.transmission.value=m.transmission,m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap)}function f(g,m){m.matcap&&(g.matcap.value=m.matcap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Pt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Pt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function p(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function y(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),g.referencePosition.value.copy(m.referencePosition),g.nearDistance.value=m.nearDistance,g.farDistance.value=m.farDistance}function x(g,m){m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Pt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Pt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function xS(){let n=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return n.style.display="block",n}function Ze(n){n=n||{};let e=n.canvas!==void 0?n.canvas:xS(),t=n.context!==void 0?n.context:null,i=n.alpha!==void 0?n.alpha:!1,r=n.depth!==void 0?n.depth:!0,s=n.stencil!==void 0?n.stencil:!0,o=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,c=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",h=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1,u=null,d=null,f=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Ds,this.physicallyCorrectLights=!1,this.toneMapping=Bo,this.toneMappingExposure=1;let y=this,x=!1,g=0,m=0,v=null,E=-1,T=null,w=new Ye,R=new Ye,P=null,k=e.width,U=e.height,z=1,O=null,I=null,B=new Ye(0,0,k,U),D=new Ye(0,0,k,U),C=!1,j=new bs,Z=!1,G=!1,te=new we,ie=new b,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ye(){return v===null?z:1}let W=t;function Xe(_,F){for(let N=0;N<_.length;N++){let V=_[N],ae=e.getContext(V,F);if(ae!==null)return ae}return null}try{let _={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:h};if(e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",Pe,!1),W===null){let F=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&F.shift(),W=Xe(F,_),W===null)throw Xe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let ke,be,xe,Ne,Le,Ie,Q,K,ee,de,re,A,M,X,Y,oe,fe,Ue,ve,L,S,q;function se(){ke=new zM(W),be=new FM(W,ke,n),ke.init(be),S=new mS(W,ke,be),xe=new fS(W,ke,be),Ne=new WM(W),Le=new tS,Ie=new pS(W,ke,xe,Le,be,S,Ne),Q=new HM(y),K=new f_(W,be),q=new NM(W,ke,K,be),ee=new GM(W,K,Ne,q),de=new jM(W,ee,K,Ne),Ue=new YM(W),Y=new OM(Le),re=new eS(y,Q,ke,be,q,Y),A=new yS(Le),M=new rS(Le),X=new hS(ke,be),fe=new kM(y,Q,xe,de,a),oe=new qg(y,de,be),ve=new UM(W,ke,Ne,be),L=new VM(W,ke,Ne,be),Ne.programs=re.programs,y.capabilities=be,y.extensions=ke,y.properties=Le,y.renderLists=M,y.shadowMap=oe,y.state=xe,y.info=Ne}se();let H=new Nu(y,W);this.xr=H,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let _=ke.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=ke.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(_){_!==void 0&&(z=_,this.setSize(k,U,!1))},this.getSize=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),_=new $),_.set(k,U)},this.setSize=function(_,F,N){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=_,U=F,e.width=Math.floor(_*z),e.height=Math.floor(F*z),N!==!1&&(e.style.width=_+"px",e.style.height=F+"px"),this.setViewport(0,0,_,F)},this.getDrawingBufferSize=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),_=new $),_.set(k*z,U*z).floor()},this.setDrawingBufferSize=function(_,F,N){k=_,U=F,z=N,e.width=Math.floor(_*N),e.height=Math.floor(F*N),this.setViewport(0,0,_,F)},this.getCurrentViewport=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),_=new Ye),_.copy(w)},this.getViewport=function(_){return _.copy(B)},this.setViewport=function(_,F,N,V){_.isVector4?B.set(_.x,_.y,_.z,_.w):B.set(_,F,N,V),xe.viewport(w.copy(B).multiplyScalar(z).floor())},this.getScissor=function(_){return _.copy(D)},this.setScissor=function(_,F,N,V){_.isVector4?D.set(_.x,_.y,_.z,_.w):D.set(_,F,N,V),xe.scissor(R.copy(D).multiplyScalar(z).floor())},this.getScissorTest=function(){return C},this.setScissorTest=function(_){xe.setScissorTest(C=_)},this.setOpaqueSort=function(_){O=_},this.setTransparentSort=function(_){I=_},this.getClearColor=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),_=new ue),_.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(_,F,N){let V=0;(_===void 0||_)&&(V|=16384),(F===void 0||F)&&(V|=256),(N===void 0||N)&&(V|=1024),W.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",Pe,!1),M.dispose(),X.dispose(),Le.dispose(),Q.dispose(),de.dispose(),q.dispose(),H.dispose(),H.removeEventListener("sessionstart",Zp),H.removeEventListener("sessionend",Jp),cr.stop()};function me(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let _=Ne.autoReset,F=oe.enabled,N=oe.autoUpdate,V=oe.needsUpdate,ae=oe.type;se(),Ne.autoReset=_,oe.enabled=F,oe.autoUpdate=N,oe.needsUpdate=V,oe.type=ae}function ct(_){let F=_.target;F.removeEventListener("dispose",ct),Wn(F)}function Wn(_){Ve(_),Le.remove(_)}function Ve(_){let F=Le.get(_).programs;F!==void 0&&F.forEach(function(N){re.releaseProgram(N)})}function At(_,F){_.render(function(N){y.renderBufferImmediate(N,F)})}this.renderBufferImmediate=function(_,F){q.initAttributes();let N=Le.get(_);_.hasPositions&&!N.position&&(N.position=W.createBuffer()),_.hasNormals&&!N.normal&&(N.normal=W.createBuffer()),_.hasUvs&&!N.uv&&(N.uv=W.createBuffer()),_.hasColors&&!N.color&&(N.color=W.createBuffer());let V=F.getAttributes();_.hasPositions&&(W.bindBuffer(34962,N.position),W.bufferData(34962,_.positionArray,35048),q.enableAttribute(V.position),W.vertexAttribPointer(V.position,3,5126,!1,0,0)),_.hasNormals&&(W.bindBuffer(34962,N.normal),W.bufferData(34962,_.normalArray,35048),q.enableAttribute(V.normal),W.vertexAttribPointer(V.normal,3,5126,!1,0,0)),_.hasUvs&&(W.bindBuffer(34962,N.uv),W.bufferData(34962,_.uvArray,35048),q.enableAttribute(V.uv),W.vertexAttribPointer(V.uv,2,5126,!1,0,0)),_.hasColors&&(W.bindBuffer(34962,N.color),W.bufferData(34962,_.colorArray,35048),q.enableAttribute(V.color),W.vertexAttribPointer(V.color,3,5126,!1,0,0)),q.disableUnusedAttributes(),W.drawArrays(4,0,_.count),_.count=0},this.renderBufferDirect=function(_,F,N,V,ae,Fe){F===null&&(F=pe);let Se=ae.isMesh&&ae.matrixWorld.determinant()<0,Re=nm(_,F,V,ae);xe.setMaterial(V,Se);let nt=N.index,Ae=N.attributes.position;if(nt===null){if(Ae===void 0||Ae.count===0)return}else if(nt.count===0)return;let Oe=1;V.wireframe===!0&&(nt=ee.getWireframeAttribute(N),Oe=2),(V.morphTargets||V.morphNormals)&&Ue.update(ae,N,V,Re),q.setup(ae,V,Re,N,nt);let Te,$e=ve;nt!==null&&(Te=K.get(nt),$e=L,$e.setIndex(Te));let qn=nt!==null?nt.count:Ae.count,Jt=N.drawRange.start*Oe,lr=N.drawRange.count*Oe,Rt=Fe!==null?Fe.start*Oe:0,hr=Fe!==null?Fe.count*Oe:1/0,Mt=Math.max(Jt,Rt),Xh=Math.min(qn,Jt+lr,Rt+hr)-1,an=Math.max(0,Xh-Mt+1);if(an!==0){if(ae.isMesh)V.wireframe===!0?(xe.setLineWidth(V.wireframeLinewidth*ye()),$e.setMode(1)):$e.setMode(4);else if(ae.isLine){let ci=V.linewidth;ci===void 0&&(ci=1),xe.setLineWidth(ci*ye()),ae.isLineSegments?$e.setMode(1):ae.isLineLoop?$e.setMode(2):$e.setMode(3)}else ae.isPoints?$e.setMode(0):ae.isSprite&&$e.setMode(4);if(ae.isInstancedMesh)$e.renderInstances(Mt,an,ae.count);else if(N.isInstancedBufferGeometry){let ci=Math.min(N.instanceCount,N._maxInstanceCount);$e.renderInstances(Mt,an,ci)}else $e.render(Mt,an)}},this.compile=function(_,F){d=X.get(_),d.init(),_.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights(),_.traverse(function(N){let V=N.material;if(V)if(Array.isArray(V))for(let ae=0;ae<V.length;ae++){let Fe=V[ae];qh(Fe,_,N)}else qh(V,_,N)})};let In=null;function pw(_){In&&In(_)}function Zp(){cr.stop()}function Jp(){cr.start()}let cr=new Ug;cr.setAnimationLoop(pw),typeof window<"u"&&cr.setContext(window),this.setAnimationLoop=function(_){In=_,H.setAnimationLoop(_),_===null?cr.stop():cr.start()},H.addEventListener("sessionstart",Zp),H.addEventListener("sessionend",Jp),this.render=function(_,F){let N,V;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),N=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),V=arguments[3]),F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;_.autoUpdate===!0&&_.updateMatrixWorld(),F.parent===null&&F.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(F=H.getCamera(F)),_.isScene===!0&&_.onBeforeRender(y,_,F,N||v),d=X.get(_,p.length),d.init(),p.push(d),te.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),j.setFromProjectionMatrix(te),G=this.localClippingEnabled,Z=Y.init(this.clippingPlanes,G,F),u=M.get(_,f.length),u.init(),f.push(u),Qp(_,F,0,y.sortObjects),u.finish(),y.sortObjects===!0&&u.sort(O,I),Z===!0&&Y.beginShadows();let ae=d.state.shadowsArray;oe.render(ae,_,F),d.setupLights(),d.setupLightsView(F),Z===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset(),N!==void 0&&this.setRenderTarget(N),fe.render(u,_,F,V);let Fe=u.opaque,Se=u.transparent;Fe.length>0&&Kp(Fe,_,F),Se.length>0&&Kp(Se,_,F),v!==null&&(Ie.updateRenderTargetMipmap(v),Ie.updateMultisampleRenderTarget(v)),_.isScene===!0&&_.onAfterRender(y,_,F),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1),q.resetDefaultState(),E=-1,T=null,p.pop(),p.length>0?d=p[p.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function Qp(_,F,N,V){if(_.visible===!1)return;if(_.layers.test(F.layers)){if(_.isGroup)N=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(F);else if(_.isLight)d.pushLight(_),_.castShadow&&d.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||j.intersectsSprite(_)){V&&ie.setFromMatrixPosition(_.matrixWorld).applyMatrix4(te);let Se=de.update(_),Re=_.material;Re.visible&&u.push(_,Se,Re,N,ie.z,null)}}else if(_.isImmediateRenderObject)V&&ie.setFromMatrixPosition(_.matrixWorld).applyMatrix4(te),u.push(_,null,_.material,N,ie.z,null);else if((_.isMesh||_.isLine||_.isPoints)&&(_.isSkinnedMesh&&_.skeleton.frame!==Ne.render.frame&&(_.skeleton.update(),_.skeleton.frame=Ne.render.frame),!_.frustumCulled||j.intersectsObject(_))){V&&ie.setFromMatrixPosition(_.matrixWorld).applyMatrix4(te);let Se=de.update(_),Re=_.material;if(Array.isArray(Re)){let nt=Se.groups;for(let Ae=0,Oe=nt.length;Ae<Oe;Ae++){let Te=nt[Ae],$e=Re[Te.materialIndex];$e&&$e.visible&&u.push(_,Se,$e,N,ie.z,Te)}}else Re.visible&&u.push(_,Se,Re,N,ie.z,null)}}let Fe=_.children;for(let Se=0,Re=Fe.length;Se<Re;Se++)Qp(Fe[Se],F,N,V)}function Kp(_,F,N){let V=F.isScene===!0?F.overrideMaterial:null;for(let ae=0,Fe=_.length;ae<Fe;ae++){let Se=_[ae],Re=Se.object,nt=Se.geometry,Ae=V===null?Se.material:V,Oe=Se.group;if(N.isArrayCamera){let Te=N.cameras;for(let $e=0,qn=Te.length;$e<qn;$e++){let Jt=Te[$e];Re.layers.test(Jt.layers)&&(xe.viewport(w.copy(Jt.viewport)),d.setupLightsView(Jt),em(Re,F,Jt,nt,Ae,Oe))}}else em(Re,F,N,nt,Ae,Oe)}}function em(_,F,N,V,ae,Fe){if(_.onBeforeRender(y,F,N,V,ae,Fe),_.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),_.isImmediateRenderObject){let Se=nm(N,F,ae,_);xe.setMaterial(ae),q.reset(),At(_,Se)}else y.renderBufferDirect(N,F,V,ae,_,Fe);_.onAfterRender(y,F,N,V,ae,Fe)}function qh(_,F,N){F.isScene!==!0&&(F=pe);let V=Le.get(_),ae=d.state.lights,Fe=d.state.shadowsArray,Se=ae.state.version,Re=re.getParameters(_,ae.state,Fe,F,N),nt=re.getProgramCacheKey(Re),Ae=V.programs;V.environment=_.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=Q.get(_.envMap||V.environment),Ae===void 0&&(_.addEventListener("dispose",ct),Ae=new Map,V.programs=Ae);let Oe=Ae.get(nt);if(Oe!==void 0){if(V.currentProgram===Oe&&V.lightsStateVersion===Se)return tm(_,Re),Oe}else Re.uniforms=re.getUniforms(_),_.onBuild(Re,y),_.onBeforeCompile(Re,y),Oe=re.acquireProgram(Re,nt),Ae.set(nt,Oe),V.uniforms=Re.uniforms;let Te=V.uniforms;(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Te.clippingPlanes=Y.uniform),tm(_,Re),V.needsLights=gw(_),V.lightsStateVersion=Se,V.needsLights&&(Te.ambientLightColor.value=ae.state.ambient,Te.lightProbe.value=ae.state.probe,Te.directionalLights.value=ae.state.directional,Te.directionalLightShadows.value=ae.state.directionalShadow,Te.spotLights.value=ae.state.spot,Te.spotLightShadows.value=ae.state.spotShadow,Te.rectAreaLights.value=ae.state.rectArea,Te.ltc_1.value=ae.state.rectAreaLTC1,Te.ltc_2.value=ae.state.rectAreaLTC2,Te.pointLights.value=ae.state.point,Te.pointLightShadows.value=ae.state.pointShadow,Te.hemisphereLights.value=ae.state.hemi,Te.directionalShadowMap.value=ae.state.directionalShadowMap,Te.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Te.spotShadowMap.value=ae.state.spotShadowMap,Te.spotShadowMatrix.value=ae.state.spotShadowMatrix,Te.pointShadowMap.value=ae.state.pointShadowMap,Te.pointShadowMatrix.value=ae.state.pointShadowMatrix);let $e=Oe.getUniforms(),qn=Oi.seqWithValue($e.seq,Te);return V.currentProgram=Oe,V.uniformsList=qn,Oe}function tm(_,F){let N=Le.get(_);N.outputEncoding=F.outputEncoding,N.instancing=F.instancing,N.numClippingPlanes=F.numClippingPlanes,N.numIntersection=F.numClipIntersection,N.vertexAlphas=F.vertexAlphas}function nm(_,F,N,V){F.isScene!==!0&&(F=pe),Ie.resetTextureUnits();let ae=F.fog,Fe=N.isMeshStandardMaterial?F.environment:null,Se=v===null?y.outputEncoding:v.texture.encoding,Re=Q.get(N.envMap||Fe),nt=N.vertexColors===!0&&V.geometry&&V.geometry.attributes.color&&V.geometry.attributes.color.itemSize===4,Ae=Le.get(N),Oe=d.state.lights;if(Z===!0&&(G===!0||_!==T)){let Mt=_===T&&N.id===E;Y.setState(N,_,Mt)}let Te=!1;N.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Oe.state.version||Ae.outputEncoding!==Se||V.isInstancedMesh&&Ae.instancing===!1||!V.isInstancedMesh&&Ae.instancing===!0||Ae.envMap!==Re||N.fog&&Ae.fog!==ae||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Y.numPlanes||Ae.numIntersection!==Y.numIntersection)||Ae.vertexAlphas!==nt)&&(Te=!0):(Te=!0,Ae.__version=N.version);let $e=Ae.currentProgram;Te===!0&&($e=qh(N,F,V));let qn=!1,Jt=!1,lr=!1,Rt=$e.getUniforms(),hr=Ae.uniforms;if(xe.useProgram($e.program)&&(qn=!0,Jt=!0,lr=!0),N.id!==E&&(E=N.id,Jt=!0),qn||T!==_){if(Rt.setValue(W,"projectionMatrix",_.projectionMatrix),be.logarithmicDepthBuffer&&Rt.setValue(W,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),T!==_&&(T=_,Jt=!0,lr=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){let Mt=Rt.map.cameraPosition;Mt!==void 0&&Mt.setValue(W,ie.setFromMatrixPosition(_.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Rt.setValue(W,"isOrthographic",_.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||N.skinning)&&Rt.setValue(W,"viewMatrix",_.matrixWorldInverse)}if(N.skinning){Rt.setOptional(W,V,"bindMatrix"),Rt.setOptional(W,V,"bindMatrixInverse");let Mt=V.skeleton;if(Mt){let Xh=Mt.bones;if(be.floatVertexTextures){if(Mt.boneTexture===null){let an=Math.sqrt(Xh.length*4);an=$v(an),an=Math.max(an,4);let ci=new Float32Array(an*an*4);ci.set(Mt.boneMatrices);let yw=new Xc(ci,an,an,Un,Fi);Mt.boneMatrices=ci,Mt.boneTexture=yw,Mt.boneTextureSize=an}Rt.setValue(W,"boneTexture",Mt.boneTexture,Ie),Rt.setValue(W,"boneTextureSize",Mt.boneTextureSize)}else Rt.setOptional(W,Mt,"boneMatrices")}}return(Jt||Ae.receiveShadow!==V.receiveShadow)&&(Ae.receiveShadow=V.receiveShadow,Rt.setValue(W,"receiveShadow",V.receiveShadow)),Jt&&(Rt.setValue(W,"toneMappingExposure",y.toneMappingExposure),Ae.needsLights&&mw(hr,lr),ae&&N.fog&&A.refreshFogUniforms(hr,ae),A.refreshMaterialUniforms(hr,N,z,U),Oi.upload(W,Ae.uniformsList,hr,Ie)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Oi.upload(W,Ae.uniformsList,hr,Ie),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Rt.setValue(W,"center",V.center),Rt.setValue(W,"modelViewMatrix",V.modelViewMatrix),Rt.setValue(W,"normalMatrix",V.normalMatrix),Rt.setValue(W,"modelMatrix",V.matrixWorld),$e}function mw(_,F){_.ambientLightColor.needsUpdate=F,_.lightProbe.needsUpdate=F,_.directionalLights.needsUpdate=F,_.directionalLightShadows.needsUpdate=F,_.pointLights.needsUpdate=F,_.pointLightShadows.needsUpdate=F,_.spotLights.needsUpdate=F,_.spotLightShadows.needsUpdate=F,_.rectAreaLights.needsUpdate=F,_.hemisphereLights.needsUpdate=F}function gw(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return v},this.setRenderTarget=function(_,F=0,N=0){v=_,g=F,m=N,_&&Le.get(_).__webglFramebuffer===void 0&&Ie.setupRenderTarget(_);let V=null,ae=!1,Fe=!1;if(_){let Se=_.texture;(Se.isDataTexture3D||Se.isDataTexture2DArray)&&(Fe=!0);let Re=Le.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(V=Re[F],ae=!0):_.isWebGLMultisampleRenderTarget?V=Le.get(_).__webglMultisampledFramebuffer:V=Re,w.copy(_.viewport),R.copy(_.scissor),P=_.scissorTest}else w.copy(B).multiplyScalar(z).floor(),R.copy(D).multiplyScalar(z).floor(),P=C;if(xe.bindFramebuffer(36160,V),xe.viewport(w),xe.scissor(R),xe.setScissorTest(P),ae){let Se=Le.get(_.texture);W.framebufferTexture2D(36160,36064,34069+F,Se.__webglTexture,N)}else if(Fe){let Se=Le.get(_.texture),Re=F||0;W.framebufferTextureLayer(36160,36064,Se.__webglTexture,N||0,Re)}},this.readRenderTargetPixels=function(_,F,N,V,ae,Fe,Se){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Le.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){xe.bindFramebuffer(36160,Re);try{let nt=_.texture,Ae=nt.format,Oe=nt.type;if(Ae!==Un&&S.convert(Ae)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Te=Oe===Uc&&(ke.has("EXT_color_buffer_half_float")||be.isWebGL2&&ke.has("EXT_color_buffer_float"));if(Oe!==jd&&S.convert(Oe)!==W.getParameter(35738)&&!(Oe===Fi&&(be.isWebGL2||ke.has("OES_texture_float")||ke.has("WEBGL_color_buffer_float")))&&!Te){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W.checkFramebufferStatus(36160)===36053?F>=0&&F<=_.width-V&&N>=0&&N<=_.height-ae&&W.readPixels(F,N,V,ae,S.convert(Ae),S.convert(Oe),Fe):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{let nt=v!==null?Le.get(v).__webglFramebuffer:null;xe.bindFramebuffer(36160,nt)}}},this.copyFramebufferToTexture=function(_,F,N=0){let V=Math.pow(2,-N),ae=Math.floor(F.image.width*V),Fe=Math.floor(F.image.height*V),Se=S.convert(F.format);Ie.setTexture2D(F,0),W.copyTexImage2D(3553,N,Se,_.x,_.y,ae,Fe,0),xe.unbindTexture()},this.copyTextureToTexture=function(_,F,N,V=0){let ae=F.image.width,Fe=F.image.height,Se=S.convert(N.format),Re=S.convert(N.type);Ie.setTexture2D(N,0),W.pixelStorei(37440,N.flipY),W.pixelStorei(37441,N.premultiplyAlpha),W.pixelStorei(3317,N.unpackAlignment),F.isDataTexture?W.texSubImage2D(3553,V,_.x,_.y,ae,Fe,Se,Re,F.image.data):F.isCompressedTexture?W.compressedTexSubImage2D(3553,V,_.x,_.y,F.mipmaps[0].width,F.mipmaps[0].height,Se,F.mipmaps[0].data):W.texSubImage2D(3553,V,_.x,_.y,Se,Re,F.image),V===0&&N.generateMipmaps&&W.generateMipmap(3553),xe.unbindTexture()},this.copyTextureToTexture3D=function(_,F,N,V,ae=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let{width:Fe,height:Se,data:Re}=N.image,nt=S.convert(V.format),Ae=S.convert(V.type),Oe;if(V.isDataTexture3D)Ie.setTexture3D(V,0),Oe=32879;else if(V.isDataTexture2DArray)Ie.setTexture2DArray(V,0),Oe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,V.flipY),W.pixelStorei(37441,V.premultiplyAlpha),W.pixelStorei(3317,V.unpackAlignment);let Te=W.getParameter(3314),$e=W.getParameter(32878),qn=W.getParameter(3316),Jt=W.getParameter(3315),lr=W.getParameter(32877);W.pixelStorei(3314,Fe),W.pixelStorei(32878,Se),W.pixelStorei(3316,_.min.x),W.pixelStorei(3315,_.min.y),W.pixelStorei(32877,_.min.z),W.texSubImage3D(Oe,ae,F.x,F.y,F.z,_.max.x-_.min.x+1,_.max.y-_.min.y+1,_.max.z-_.min.z+1,nt,Ae,Re),W.pixelStorei(3314,Te),W.pixelStorei(32878,$e),W.pixelStorei(3316,qn),W.pixelStorei(3315,Jt),W.pixelStorei(32877,lr),ae===0&&V.generateMipmaps&&W.generateMipmap(Oe),xe.unbindTexture()},this.initTexture=function(_){Ie.setTexture2D(_,0),xe.unbindTexture()},this.resetState=function(){g=0,m=0,v=null,xe.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var Uu=class extends Ze{};Uu.prototype.isWebGL1Renderer=!0;var Wo=class n{constructor(e,t=25e-5){this.name="",this.color=new ue(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}};Wo.prototype.isFogExp2=!0;var Fu=class n{constructor(e,t=1,i=1e3){this.name="",this.color=new ue(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}};Fu.prototype.isFog=!0;var Ms=class extends We{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}};Ms.prototype.isScene=!0;var gr=class n{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Fn(),this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new n(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};gr.prototype.isInterleavedBuffer=!0;var gt=new b,qo=class n{constructor(e,t,i,r){this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)gt.x=this.getX(t),gt.y=this.getY(t),gt.z=this.getZ(t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.x=this.getX(t),gt.y=this.getY(t),gt.z=this.getZ(t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.x=this.getX(t),gt.y=this.getY(t),gt.z=this.getZ(t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};qo.prototype.isInterleavedBufferAttribute=!0;var Qc=class extends Bt{constructor(e){super(),this.type="SpriteMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}};Qc.prototype.isSpriteMaterial=!0;var ls,So=new b,hs=new b,us=new b,ds=new $,To=new $,Xg=new we,yc=new b,Ao=new b,xc=new b,Jm=new $,vu=new $,Qm=new $,Ou=class extends We{constructor(e){if(super(),this.type="Sprite",ls===void 0){ls=new it;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new gr(t,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new qo(i,3,0,!1)),ls.setAttribute("uv",new qo(i,2,3,!1))}this.geometry=ls,this.material=e!==void 0?e:new Qc,this.center=new $(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hs.setFromMatrixScale(this.matrixWorld),Xg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hs.multiplyScalar(-us.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;wc(yc.set(-.5,-.5,0),us,o,hs,r,s),wc(Ao.set(.5,-.5,0),us,o,hs,r,s),wc(xc.set(.5,.5,0),us,o,hs,r,s),Jm.set(0,0),vu.set(1,0),Qm.set(1,1);let a=e.ray.intersectTriangle(yc,Ao,xc,!1,So);if(a===null&&(wc(Ao.set(-.5,.5,0),us,o,hs,r,s),vu.set(0,1),a=e.ray.intersectTriangle(yc,xc,Ao,!1,So),a===null))return;let c=e.ray.origin.distanceTo(So);c<e.near||c>e.far||t.push({distance:c,point:So.clone(),uv:Xt.getUV(So,yc,Ao,xc,Jm,vu,Qm,new $),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Ou.prototype.isSprite=!0;function wc(n,e,t,i,r,s){ds.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(To.x=s*ds.x-r*ds.y,To.y=r*ds.x+s*ds.y):To.copy(ds),n.copy(e),n.x+=To.x,n.y+=To.y,n.applyMatrix4(Xg)}var Km=new b,eg=new Ye,tg=new Ye,wS=new b,ng=new we,Kc=class extends J{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new we,this.bindMatrixInverse=new we}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ye,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.x=t.getX(i),e.y=t.getY(i),e.z=t.getZ(i),e.w=t.getW(i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let i=this.skeleton,r=this.geometry;eg.fromBufferAttribute(r.attributes.skinIndex,e),tg.fromBufferAttribute(r.attributes.skinWeight,e),Km.fromBufferAttribute(r.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=tg.getComponent(s);if(o!==0){let a=eg.getComponent(s);ng.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(wS.copy(Km).applyMatrix4(ng),o)}}return t.applyMatrix4(this.bindMatrixInverse)}};Kc.prototype.isSkinnedMesh=!0;var Hu=class extends We{constructor(){super(),this.type="Bone"}};Hu.prototype.isBone=!0;var ig=new we,rg=new we,vc=[],Ro=new J,Xo=class extends J{constructor(e,t,i){super(e,t),this.instanceMatrix=new dt(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Ro.geometry=this.geometry,Ro.material=this.material,Ro.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,ig),rg.multiplyMatrices(i,ig),Ro.matrixWorld=rg,Ro.raycast(e,vc);for(let o=0,a=vc.length;o<a;o++){let c=vc[o];c.instanceId=s,c.object=this,t.push(c)}vc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new dt(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};Xo.prototype.isInstancedMesh=!0;var xi=class extends Bt{constructor(e){super(),this.type="LineBasicMaterial",this.color=new ue(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}};xi.prototype.isLineBasicMaterial=!0;var sg=new b,og=new b,ag=new we,_u=new gi,_c=new Gi,Yo=class extends We{constructor(e=new it,t=new xi){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)sg.fromBufferAttribute(t,r-1),og.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=sg.distanceTo(og);e.setAttribute("lineDistance",new yt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_c.copy(i.boundingSphere),_c.applyMatrix4(r),_c.radius+=s,e.ray.intersectsSphere(_c)===!1)return;ag.copy(r).invert(),_u.copy(e.ray).applyMatrix4(ag);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new b,h=new b,u=new b,d=new b,f=this.isLineSegments?2:1;if(i.isBufferGeometry){let p=i.index,x=i.attributes.position;if(p!==null){let g=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let v=g,E=m-1;v<E;v+=f){let T=p.getX(v),w=p.getX(v+1);if(l.fromBufferAttribute(x,T),h.fromBufferAttribute(x,w),_u.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||t.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let g=Math.max(0,o.start),m=Math.min(x.count,o.start+o.count);for(let v=g,E=m-1;v<E;v+=f){if(l.fromBufferAttribute(x,v),h.fromBufferAttribute(x,v+1),_u.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}else i.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};Yo.prototype.isLine=!0;var cg=new b,lg=new b,yr=class extends Yo{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)cg.fromBufferAttribute(t,r),lg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+cg.distanceTo(lg);e.setAttribute("lineDistance",new yt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}};yr.prototype.isLineSegments=!0;var zu=class extends Yo{constructor(e,t){super(e,t),this.type="LineLoop"}};zu.prototype.isLineLoop=!0;var el=class extends Bt{constructor(e){super(),this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}};el.prototype.isPointsMaterial=!0;var hg=new we,Gu=new gi,bc=new Gi,Mc=new b,Vu=class extends We{constructor(e=new it,t=new el){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bc.copy(i.boundingSphere),bc.applyMatrix4(r),bc.radius+=s,e.ray.intersectsSphere(bc)===!1)return;hg.copy(r).invert(),Gu.copy(e.ray).applyMatrix4(hg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a;if(i.isBufferGeometry){let l=i.index,u=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=d,y=f;p<y;p++){let x=l.getX(p);Mc.fromBufferAttribute(u,x),ug(Mc,x,c,r,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,y=f;p<y;p++)Mc.fromBufferAttribute(u,p),ug(Mc,p,c,r,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};Vu.prototype.isPoints=!0;function ug(n,e,t,i,r,s,o){let a=Gu.distanceSqToPoint(n);if(a<t){let c=new b;Gu.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var Wu=class extends Yt{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.format=a!==void 0?a:pr,this.minFilter=o!==void 0?o:bn,this.magFilter=s!==void 0?s:bn,this.generateMipmaps=!1;let h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};Wu.prototype.isVideoTexture=!0;var qu=class extends Yt{constructor(e,t,i,r,s,o,a,c,l,h,u,d){super(null,o,a,c,l,h,r,s,u,d),this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};qu.prototype.isCompressedTexture=!0;var Xu=class extends Yt{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.needsUpdate=!0}};Xu.prototype.isCanvasTexture=!0;var Yu=class extends Yt{constructor(e,t,i,r,s,o,a,c,l,h){if(h=h!==void 0?h:xs,h!==xs&&h!==Ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===xs&&(i=Nc),i===void 0&&h===Ho&&(i=ko),super(null,r,s,o,a,c,h,i,l),this.image={width:e,height:t},this.magFilter=a!==void 0?a:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1}};Yu.prototype.isDepthTexture=!0;var Ec=new b,Sc=new b,bu=new b,Tc=new Xt,tl=class extends it{constructor(e,t){if(super(),this.type="EdgesGeometry",this.parameters={thresholdAngle:t},t=t!==void 0?t:1,e.isGeometry===!0){console.error("THREE.EdgesGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return}let r=Math.pow(10,4),s=Math.cos(Bc*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<c;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);let{a:y,b:x,c:g}=Tc;if(y.fromBufferAttribute(a,l[0]),x.fromBufferAttribute(a,l[1]),g.fromBufferAttribute(a,l[2]),Tc.getNormal(bu),u[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,u[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let m=0;m<3;m++){let v=(m+1)%3,E=u[m],T=u[v],w=Tc[h[m]],R=Tc[h[v]],P=`${E}_${T}`,k=`${T}_${E}`;k in d&&d[k]?(bu.dot(d[k].normal)<=s&&(f.push(w.x,w.y,w.z),f.push(R.x,R.y,R.z)),d[k]=null):P in d||(d[P]={index0:l[m],index1:l[v],normal:bu.clone()})}}for(let p in d)if(d[p]){let{index0:y,index1:x}=d[p];Ec.fromBufferAttribute(a,y),Sc.fromBufferAttribute(a,x),f.push(Ec.x,Ec.y,Ec.z),f.push(Sc.x,Sc.y,Sc.z)}this.setAttribute("position",new yt(f,3))}},vS={triangulate:function(n,e,t){t=t||2;let i=e&&e.length,r=i?e[0]*t:n.length,s=Yg(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,d,f;if(i&&(s=SS(n,e,s,t)),n.length>80*t){a=l=n[0],c=h=n[1];for(let p=t;p<r;p+=t)u=n[p],d=n[p+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?1/f:0}return jo(s,o,t,a,c,f),o}};function Yg(n,e,t,i,r){let s,o;if(r===NS(n,e,t,i)>0)for(s=e;s<t;s+=i)o=dg(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=dg(s,n[s],n[s+1],o);return o&&vl(o,o.next)&&(Zo(o),o=o.next),o}function Vi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(vl(t,t.next)||ut(t.prev,t,t.next)===0)){if(Zo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function jo(n,e,t,i,r,s,o){if(!n)return;!o&&s&&CS(n,i,r,s);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,s?bS(n,i,r,s):_S(n)){e.push(c.i/t),e.push(n.i/t),e.push(l.i/t),Zo(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=MS(Vi(n),e,t),jo(n,e,t,i,r,s,2)):o===2&&ES(n,e,t,i,r,s):jo(Vi(n),e,t,i,r,s,1);break}}}function _S(n){let e=n.prev,t=n,i=n.next;if(ut(e,t,i)>=0)return!1;let r=n.next.next;for(;r!==n.prev;){if(ys(e.x,e.y,t.x,t.y,i.x,i.y,r.x,r.y)&&ut(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function bS(n,e,t,i){let r=n.prev,s=n,o=n.next;if(ut(r,s,o)>=0)return!1;let a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,h=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,u=ju(a,c,e,t,i),d=ju(l,h,e,t,i),f=n.prevZ,p=n.nextZ;for(;f&&f.z>=u&&p&&p.z<=d;){if(f!==n.prev&&f!==n.next&&ys(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&ut(f.prev,f,f.next)>=0||(f=f.prevZ,p!==n.prev&&p!==n.next&&ys(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&ut(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;f&&f.z>=u;){if(f!==n.prev&&f!==n.next&&ys(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&ut(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;p&&p.z<=d;){if(p!==n.prev&&p!==n.next&&ys(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&ut(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function MS(n,e,t){let i=n;do{let r=i.prev,s=i.next.next;!vl(r,s)&&jg(r,i,i.next,s)&&$o(r,s)&&$o(s,r)&&(e.push(r.i/t),e.push(i.i/t),e.push(s.i/t),Zo(i),Zo(i.next),i=n=s),i=i.next}while(i!==n);return Vi(i)}function ES(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&PS(o,a)){let c=$g(o,a);o=Vi(o,o.next),c=Vi(c,c.next),jo(o,e,t,i,r,s),jo(c,e,t,i,r,s);return}a=a.next}o=o.next}while(o!==n)}function SS(n,e,t,i){let r=[],s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=Yg(n,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(DS(l));for(r.sort(TS),s=0;s<r.length;s++)AS(r[s],t),t=Vi(t,t.next);return t}function TS(n,e){return n.x-e.x}function AS(n,e){if(e=RS(n,e),e){let t=$g(e,n);Vi(e,e.next),Vi(t,t.next)}}function RS(n,e){let t=e,i=n.x,r=n.y,s=-1/0,o;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s){if(s=d,d===i){if(r===t.y)return t;if(r===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(i===s)return o;let a=o,c=o.x,l=o.y,h=1/0,u;t=o;do i>=t.x&&t.x>=c&&i!==t.x&&ys(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)&&(u=Math.abs(r-t.y)/(i-t.x),$o(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&LS(o,t)))&&(o=t,h=u)),t=t.next;while(t!==a);return o}function LS(n,e){return ut(n.prev,n,e.prev)<0&&ut(e.next,n,n.next)<0}function CS(n,e,t,i){let r=n;do r.z===null&&(r.z=ju(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,IS(r)}function IS(n){let e,t,i,r,s,o,a,c,l=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,l*=2}while(o>1);return n}function ju(n,e,t,i,r){return n=32767*(n-t)*r,e=32767*(e-i)*r,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function DS(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ys(n,e,t,i,r,s,o,a){return(r-o)*(e-a)-(n-o)*(s-a)>=0&&(n-o)*(i-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(r-o)*(i-a)>=0}function PS(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!BS(n,e)&&($o(n,e)&&$o(e,n)&&kS(n,e)&&(ut(n.prev,n,e.prev)||ut(n,e.prev,e))||vl(n,e)&&ut(n.prev,n,n.next)>0&&ut(e.prev,e,e.next)>0)}function ut(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function vl(n,e){return n.x===e.x&&n.y===e.y}function jg(n,e,t,i){let r=Rc(ut(n,e,t)),s=Rc(ut(n,e,i)),o=Rc(ut(t,i,n)),a=Rc(ut(t,i,e));return!!(r!==s&&o!==a||r===0&&Ac(n,t,e)||s===0&&Ac(n,i,e)||o===0&&Ac(t,n,i)||a===0&&Ac(t,e,i))}function Ac(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Rc(n){return n>0?1:n<0?-1:0}function BS(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&jg(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function $o(n,e){return ut(n.prev,n,n.next)<0?ut(n,e,n.next)>=0&&ut(n,n.prev,e)>=0:ut(n,e,n.prev)<0||ut(n,n.next,e)<0}function kS(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function $g(n,e){let t=new $u(n.i,n.x,n.y),i=new $u(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function dg(n,e,t,i){let r=new $u(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Zo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function $u(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function NS(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var mi=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];fg(e),pg(i,e);let o=e.length;t.forEach(fg);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,pg(i,t[c]);let a=vS.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function fg(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function pg(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Es=class extends it{constructor(e,t){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new yt(r,3)),this.setAttribute("uv",new yt(s,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:100,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:6,p=t.bevelSize!==void 0?t.bevelSize:f-2,y=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:US;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let v,E=!1,T,w,R,P;g&&(v=g.getSpacedPoints(h),E=!0,d=!1,T=g.computeFrenetFrames(h,!1),w=new b,R=new b,P=new b),d||(x=0,f=0,p=0,y=0);let k=a.extractPoints(l),U=k.shape,z=k.holes;if(!mi.isClockWise(U)){U=U.reverse();for(let Q=0,K=z.length;Q<K;Q++){let ee=z[Q];mi.isClockWise(ee)&&(z[Q]=ee.reverse())}}let I=mi.triangulateShape(U,z),B=U;for(let Q=0,K=z.length;Q<K;Q++){let ee=z[Q];U=U.concat(ee)}function D(Q,K,ee){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().multiplyScalar(ee).add(Q)}let C=U.length,j=I.length;function Z(Q,K,ee){let de,re,A,M=Q.x-K.x,X=Q.y-K.y,Y=ee.x-Q.x,oe=ee.y-Q.y,fe=M*M+X*X,Ue=M*oe-X*Y;if(Math.abs(Ue)>Number.EPSILON){let ve=Math.sqrt(fe),L=Math.sqrt(Y*Y+oe*oe),S=K.x-X/ve,q=K.y+M/ve,se=ee.x-oe/L,H=ee.y+Y/L,me=((se-S)*oe-(H-q)*Y)/(M*oe-X*Y);de=S+M*me-Q.x,re=q+X*me-Q.y;let Pe=de*de+re*re;if(Pe<=2)return new $(de,re);A=Math.sqrt(Pe/2)}else{let ve=!1;M>Number.EPSILON?Y>Number.EPSILON&&(ve=!0):M<-Number.EPSILON?Y<-Number.EPSILON&&(ve=!0):Math.sign(X)===Math.sign(oe)&&(ve=!0),ve?(de=-X,re=M,A=Math.sqrt(fe)):(de=M,re=X,A=Math.sqrt(fe/2))}return new $(de/A,re/A)}let G=[];for(let Q=0,K=B.length,ee=K-1,de=Q+1;Q<K;Q++,ee++,de++)ee===K&&(ee=0),de===K&&(de=0),G[Q]=Z(B[Q],B[ee],B[de]);let te=[],ie,pe=G.concat();for(let Q=0,K=z.length;Q<K;Q++){let ee=z[Q];ie=[];for(let de=0,re=ee.length,A=re-1,M=de+1;de<re;de++,A++,M++)A===re&&(A=0),M===re&&(M=0),ie[de]=Z(ee[de],ee[A],ee[M]);te.push(ie),pe=pe.concat(ie)}for(let Q=0;Q<x;Q++){let K=Q/x,ee=f*Math.cos(K*Math.PI/2),de=p*Math.sin(K*Math.PI/2)+y;for(let re=0,A=B.length;re<A;re++){let M=D(B[re],G[re],de);be(M.x,M.y,-ee)}for(let re=0,A=z.length;re<A;re++){let M=z[re];ie=te[re];for(let X=0,Y=M.length;X<Y;X++){let oe=D(M[X],ie[X],de);be(oe.x,oe.y,-ee)}}}let ye=p+y;for(let Q=0;Q<C;Q++){let K=d?D(U[Q],pe[Q],ye):U[Q];E?(R.copy(T.normals[0]).multiplyScalar(K.x),w.copy(T.binormals[0]).multiplyScalar(K.y),P.copy(v[0]).add(R).add(w),be(P.x,P.y,P.z)):be(K.x,K.y,0)}for(let Q=1;Q<=h;Q++)for(let K=0;K<C;K++){let ee=d?D(U[K],pe[K],ye):U[K];E?(R.copy(T.normals[Q]).multiplyScalar(ee.x),w.copy(T.binormals[Q]).multiplyScalar(ee.y),P.copy(v[Q]).add(R).add(w),be(P.x,P.y,P.z)):be(ee.x,ee.y,u/h*Q)}for(let Q=x-1;Q>=0;Q--){let K=Q/x,ee=f*Math.cos(K*Math.PI/2),de=p*Math.sin(K*Math.PI/2)+y;for(let re=0,A=B.length;re<A;re++){let M=D(B[re],G[re],de);be(M.x,M.y,u+ee)}for(let re=0,A=z.length;re<A;re++){let M=z[re];ie=te[re];for(let X=0,Y=M.length;X<Y;X++){let oe=D(M[X],ie[X],de);E?be(oe.x,oe.y+v[h-1].y,v[h-1].x+ee):be(oe.x,oe.y,u+ee)}}}W(),Xe();function W(){let Q=r.length/3;if(d){let K=0,ee=C*K;for(let de=0;de<j;de++){let re=I[de];xe(re[2]+ee,re[1]+ee,re[0]+ee)}K=h+x*2,ee=C*K;for(let de=0;de<j;de++){let re=I[de];xe(re[0]+ee,re[1]+ee,re[2]+ee)}}else{for(let K=0;K<j;K++){let ee=I[K];xe(ee[2],ee[1],ee[0])}for(let K=0;K<j;K++){let ee=I[K];xe(ee[0]+C*h,ee[1]+C*h,ee[2]+C*h)}}i.addGroup(Q,r.length/3-Q,0)}function Xe(){let Q=r.length/3,K=0;ke(B,K),K+=B.length;for(let ee=0,de=z.length;ee<de;ee++){let re=z[ee];ke(re,K),K+=re.length}i.addGroup(Q,r.length/3-Q,1)}function ke(Q,K){let ee=Q.length;for(;--ee>=0;){let de=ee,re=ee-1;re<0&&(re=Q.length-1);for(let A=0,M=h+x*2;A<M;A++){let X=C*A,Y=C*(A+1),oe=K+de+X,fe=K+re+X,Ue=K+re+Y,ve=K+de+Y;Ne(oe,fe,Ue,ve)}}}function be(Q,K,ee){c.push(Q),c.push(K),c.push(ee)}function xe(Q,K,ee){Le(Q),Le(K),Le(ee);let de=r.length/3,re=m.generateTopUV(i,r,de-3,de-2,de-1);Ie(re[0]),Ie(re[1]),Ie(re[2])}function Ne(Q,K,ee,de){Le(Q),Le(K),Le(de),Le(K),Le(ee),Le(de);let re=r.length/3,A=m.generateSideWallUV(i,r,re-6,re-3,re-2,re-1);Ie(A[0]),Ie(A[1]),Ie(A[3]),Ie(A[1]),Ie(A[2]),Ie(A[3])}function Le(Q){r.push(c[Q*3+0]),r.push(c[Q*3+1]),r.push(c[Q*3+2])}function Ie(Q){s.push(Q.x),s.push(Q.y)}}}toJSON(){let e=it.prototype.toJSON.call(this),t=this.parameters.shapes,i=this.parameters.options;return FS(t,i,e)}},US={generateTopUV:function(n,e,t,i,r){let s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],h=e[r*3+1];return[new $(s,o),new $(a,c),new $(l,h)]},generateSideWallUV:function(n,e,t,i,r,s){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[r*3],f=e[r*3+1],p=e[r*3+2],y=e[s*3],x=e[s*3+1],g=e[s*3+2];return Math.abs(a-h)<.01?[new $(o,1-c),new $(l,1-u),new $(d,1-p),new $(y,1-g)]:[new $(a,1-c),new $(h,1-u),new $(f,1-p),new $(x,1-g)]}};function FS(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Zu=class extends it{constructor(e,t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(s,3)),this.setAttribute("uv",new yt(o,2));function l(h){let u=r.length/3,d=h.extractPoints(t),f=d.shape,p=d.holes;mi.isClockWise(f)===!1&&(f=f.reverse());for(let x=0,g=p.length;x<g;x++){let m=p[x];mi.isClockWise(m)===!0&&(p[x]=m.reverse())}let y=mi.triangulateShape(f,p);for(let x=0,g=p.length;x<g;x++){let m=p[x];f=f.concat(m)}for(let x=0,g=f.length;x<g;x++){let m=f[x];r.push(m.x,m.y,0),s.push(0,0,1),o.push(m.x,m.y)}for(let x=0,g=y.length;x<g;x++){let m=y[x],v=m[0]+u,E=m[1]+u,T=m[2]+u;i.push(v,E,T),c+=3}}}toJSON(){let e=it.prototype.toJSON.call(this),t=this.parameters.shapes;return OS(t,e)}};function OS(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}var Ju=class extends Bt{constructor(e){super(),this.type="ShadowMaterial",this.color=new ue(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}};Ju.prototype.isShadowMaterial=!0;var Qu=class extends yi{constructor(e){super(e),this.type="RawShaderMaterial"}};Qu.prototype.isRawShaderMaterial=!0;var nl=class extends Bt{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ps,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this.vertexTangents=e.vertexTangents,this}};nl.prototype.isMeshStandardMaterial=!0;var Ku=class extends nl{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=Qt(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new ue).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this}};Ku.prototype.isMeshPhysicalMaterial=!0;var ed=class extends Bt{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new ue(16777215),this.specular=new ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ps,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};ed.prototype.isMeshPhongMaterial=!0;var td=class extends Bt{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ue(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ps,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}};td.prototype.isMeshToonMaterial=!0;var nd=class extends Bt{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ps,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};nd.prototype.isMeshNormalMaterial=!0;var _e=class extends Bt{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}};_e.prototype.isMeshLambertMaterial=!0;var id=class extends Bt{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ue(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ps,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};id.prototype.isMeshMatcapMaterial=!0;var rd=class extends xi{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};rd.prototype.isLineDashedMaterial=!0;var lt={arraySlice:function(n,e,t){return lt.isTypedArray(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)},convertArray:function(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)},isTypedArray:function(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)},getKeyframeOrder:function(n){function e(r,s){return n[r]-n[s]}let t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i},sortedArray:function(n,e,t){let i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){let a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=n[a+c]}return r},flattenJSON:function(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)},subclip:function(n,e,t,i,r=30){let s=n.clone();s.name=e;let o=[];for(let c=0;c<s.tracks.length;++c){let l=s.tracks[c],h=l.getValueSize(),u=[],d=[];for(let f=0;f<l.times.length;++f){let p=l.times[f]*r;if(!(p<t||p>=i)){u.push(l.times[f]);for(let y=0;y<h;++y)d.push(l.values[f*h+y])}}u.length!==0&&(l.times=lt.convertArray(u,l.times.constructor),l.values=lt.convertArray(d,l.values.constructor),o.push(l))}s.tracks=o;let a=1/0;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(n,e=0,t=n,i=30){i<=0&&(i=30);let r=t.tracks.length,s=e/i;for(let o=0;o<r;++o){let a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;let l=n.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===c});if(l===void 0)continue;let h=0,u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let p=a.times.length-1,y;if(s<=a.times[0]){let g=h,m=u-h;y=lt.arraySlice(a.values,g,m)}else if(s>=a.times[p]){let g=p*u+h,m=g+u-h;y=lt.arraySlice(a.values,g,m)}else{let g=a.createInterpolant(),m=h,v=u-h;g.evaluate(s),y=lt.arraySlice(g.resultBuffer,m,v)}c==="quaternion"&&new Et().fromArray(y).normalize().conjugate().toArray(y);let x=l.times.length;for(let g=0;g<x;++g){let m=g*f+d;if(c==="quaternion")Et.multiplyQuaternionsFlat(l.values,m,y,0,l.values,m);else{let v=f-d*2;for(let E=0;E<v;++E)l.values[m+E]-=y[E]}}}return n.blendMode=Lg,n}},jn=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,e,s)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(r===void 0)return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,s,e)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}};jn.prototype.beforeStart_=jn.prototype.copySampleValue_;jn.prototype.afterEnd_=jn.prototype.copySampleValue_;var sd=class extends jn{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ms,endingEnd:ms}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case gs:s=e,a=2*t-i;break;case Hc:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case gs:o=e,c=2*i-t;break;case Hc:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(r-t),y=p*p,x=y*p,g=-d*x+2*d*y-d*p,m=(1+d)*x+(-1.5-2*d)*y+(-.5+d)*p+1,v=(-1-f)*x+(1.5+f)*y+.5*p,E=f*x-f*y;for(let T=0;T!==a;++T)s[T]=g*o[h+T]+m*o[l+T]+v*o[c+T]+E*o[u+T];return s}},il=class extends jn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}},od=class extends jn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Mn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lt.convertArray(t,this.TimeBufferType),this.values=lt.convertArray(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:lt.convertArray(e.times,Array),values:lt.convertArray(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new od(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fc:t=this.InterpolantFactoryMethodDiscrete;break;case Oc:t=this.InterpolantFactoryMethodLinear;break;case Yh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fc;case this.InterpolantFactoryMethodLinear:return Oc;case this.InterpolantFactoryMethodSmooth:return Yh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=lt.arraySlice(i,s,o),this.values=lt.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&lt.isTypedArray(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=lt.arraySlice(this.times),t=lt.arraySlice(this.values),i=this.getValueSize(),r=this.getInterpolation()===Yh,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(r)c=!0;else{let u=a*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let y=t[u+p];if(y!==t[d+p]||y!==t[f+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=lt.arraySlice(e,0,o),this.values=lt.arraySlice(t,0,o*i)):(this.times=e,this.values=t),this}clone(){let e=lt.arraySlice(this.times,0),t=lt.arraySlice(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Oc;var Wi=class extends Mn{};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Fc;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends Mn{};rl.prototype.ValueTypeName="color";var Ss=class extends Mn{};Ss.prototype.ValueTypeName="number";var ad=class extends jn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let h=l+a;l!==h;l+=4)Et.slerpFlat(s,0,o,l-a,o,l,c);return s}},xr=class extends Mn{InterpolantFactoryMethodLinear(e){return new ad(this.times,this.values,this.getValueSize(),e)}};xr.prototype.ValueTypeName="quaternion";xr.prototype.DefaultInterpolation=Oc;xr.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends Mn{};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Fc;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends Mn{};Ts.prototype.ValueTypeName="vector";var sl=class{constructor(e,t=-1,i,r=$d){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Fn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(zS(i[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Mn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);let h=lt.getKeyframeOrder(c);c=lt.sortedArray(c,1,h),l=lt.sortedArray(l,1,h),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Ss(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(s);if(h&&h.length>1){let u=h[1],d=r[u];d||(r[u]=d=[]),d.push(l)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,f,p,y){if(f.length!==0){let x=[],g=[];lt.flattenJSON(f,x,g,p),x.length!==0&&y.push(new u(d,x,g))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let y=0;y<d[p].morphTargets.length;y++)f[d[p].morphTargets[y]]=-1;for(let y in f){let x=[],g=[];for(let m=0;m!==d[p].morphTargets.length;++m){let v=d[p];x.push(v.time),g.push(v.morphTarget===y?1:0)}r.push(new Ss(".morphTargetInfluence["+y+"]",x,g))}c=f.length*(o||1)}else{let f=".bones["+t[u].name+"]";i(Ts,f+".position",d,"pos",r),i(xr,f+".quaternion",d,"rot",r),i(Ts,f+".scale",d,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function HS(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ss;case"vector":case"vector2":case"vector3":case"vector4":return Ts;case"color":return rl;case"quaternion":return xr;case"bool":case"boolean":return Wi;case"string":return qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function zS(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=HS(n.type);if(n.times===void 0){let t=[],i=[];lt.flattenJSON(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var As={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},cd=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],p=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},GS=new cd,$n=class{constructor(e){this.manager=e!==void 0?e:GS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},kn={},ld=class extends $n{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=As.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;if(kn[e]!==void 0){kn[e].push({onLoad:t,onProgress:i,onError:r});return}let a=/^data:(.*?)(;base64)?,(.*)$/,c=e.match(a),l;if(c){let h=c[1],u=!!c[2],d=c[3];d=decodeURIComponent(d),u&&(d=atob(d));try{let f,p=(this.responseType||"").toLowerCase();switch(p){case"arraybuffer":case"blob":let y=new Uint8Array(d.length);for(let g=0;g<d.length;g++)y[g]=d.charCodeAt(g);p==="blob"?f=new Blob([y.buffer],{type:h}):f=y.buffer;break;case"document":f=new DOMParser().parseFromString(d,h);break;case"json":f=JSON.parse(d);break;default:f=d;break}setTimeout(function(){t&&t(f),s.manager.itemEnd(e)},0)}catch(f){setTimeout(function(){r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)},0)}}else{kn[e]=[],kn[e].push({onLoad:t,onProgress:i,onError:r}),l=new XMLHttpRequest,l.open("GET",e,!0),l.addEventListener("load",function(h){let u=this.response,d=kn[e];if(delete kn[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),As.add(e,u);for(let f=0,p=d.length;f<p;f++){let y=d[f];y.onLoad&&y.onLoad(u)}s.manager.itemEnd(e)}else{for(let f=0,p=d.length;f<p;f++){let y=d[f];y.onError&&y.onError(h)}s.manager.itemError(e),s.manager.itemEnd(e)}},!1),l.addEventListener("progress",function(h){let u=kn[e];for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onProgress&&p.onProgress(h)}},!1),l.addEventListener("error",function(h){let u=kn[e];delete kn[e];for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onError&&p.onError(h)}s.manager.itemError(e),s.manager.itemEnd(e)},!1),l.addEventListener("abort",function(h){let u=kn[e];delete kn[e];for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onError&&p.onError(h)}s.manager.itemError(e),s.manager.itemEnd(e)},!1),this.responseType!==void 0&&(l.responseType=this.responseType),this.withCredentials!==void 0&&(l.withCredentials=this.withCredentials),l.overrideMimeType&&l.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(let h in this.requestHeader)l.setRequestHeader(h,this.requestHeader[h]);l.send(null)}return s.manager.itemStart(e),l}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var ol=class extends $n{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=As.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=document.createElementNS("http://www.w3.org/1999/xhtml","img");function c(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1),As.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}},hd=class extends $n{constructor(e){super(e)}load(e,t,i,r){let s=new _s,o=new ol(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(h){s.images[l]=h,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let l=0;l<e.length;++l)c(l);return s}};var ud=class extends $n{constructor(e){super(e)}load(e,t,i,r){let s=new Yt,o=new ol(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a;let c=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;s.format=c?pr:Un,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);let h=i[r],d=i[r+1]-h,f=(o-h)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new $:new b);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new b,r=[],s=[],o=[],a=new b,c=new we;for(let f=0;f<=e;f++){let p=f/e;r[f]=this.getTangentAt(p,new b),r[f].normalize()}s[0]=new b,o[0]=new b;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Qt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Qt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(c.makeRotationAxis(r[p],f*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Rs=class extends ln{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let i=t||new $,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};Rs.prototype.isEllipseCurve=!0;var al=class extends Rs{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.type="ArcCurve"}};al.prototype.isArcCurve=!0;function Zd(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,r(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var Lc=new b,Mu=new Zd,Eu=new Zd,Su=new Zd,cl=class extends ln{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new b){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(Lc.subVectors(r[0],r[1]).add(r[0]),l=Lc);let u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Lc.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Lc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),p<1e-4&&(p=y),x<1e-4&&(x=y),Mu.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,y,x),Eu.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,y,x),Su.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,y,x)}else this.curveType==="catmullrom"&&(Mu.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Eu.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Su.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Mu.calc(c),Eu.calc(c),Su.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new b().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};cl.prototype.isCatmullRomCurve3=!0;function mg(n,e,t,i,r){let s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function VS(n,e){let t=1-n;return t*t*e}function WS(n,e){return 2*(1-n)*n*e}function qS(n,e){return n*n*e}function Uo(n,e,t,i){return VS(n,e)+WS(n,t)+qS(n,i)}function XS(n,e){let t=1-n;return t*t*t*e}function YS(n,e){let t=1-n;return 3*t*t*n*e}function jS(n,e){return 3*(1-n)*n*n*e}function $S(n,e){return n*n*n*e}function Fo(n,e,t,i,r){return XS(n,e)+YS(n,t)+jS(n,i)+$S(n,r)}var Jo=class extends ln{constructor(e=new $,t=new $,i=new $,r=new $){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new $){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Fo(e,r.x,s.x,o.x,a.x),Fo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};Jo.prototype.isCubicBezierCurve=!0;var ll=class extends ln{constructor(e=new b,t=new b,i=new b,r=new b){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new b){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Fo(e,r.x,s.x,o.x,a.x),Fo(e,r.y,s.y,o.y,a.y),Fo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};ll.prototype.isCubicBezierCurve3=!0;var Ls=class extends ln{constructor(e=new $,t=new $){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let i=t||new $;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Ls.prototype.isLineCurve=!0;var dd=class extends ln{constructor(e=new b,t=new b){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new b){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qo=class extends ln{constructor(e=new $,t=new $,i=new $){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new $){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Uo(e,r.x,s.x,o.x),Uo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Qo.prototype.isQuadraticBezierCurve=!0;var hl=class extends ln{constructor(e=new b,t=new b,i=new b){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new b){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Uo(e,r.x,s.x,o.x),Uo(e,r.y,s.y,o.y),Uo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};hl.prototype.isQuadraticBezierCurve3=!0;var Ko=class extends ln{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new $){let i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return i.set(mg(a,c.x,l.x,h.x,u.x),mg(a,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new $().fromArray(r))}return this}};Ko.prototype.isSplineCurve=!0;var ZS=Object.freeze({__proto__:null,ArcCurve:al,CatmullRomCurve3:cl,CubicBezierCurve:Jo,CubicBezierCurve3:ll,EllipseCurve:Rs,LineCurve:Ls,LineCurve3:dd,QuadraticBezierCurve:Qo,QuadraticBezierCurve3:hl,SplineCurve:Ko}),fd=class extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ls(t,e))}getPoint(e){let t=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=t){let s=i[r]-t,o=this.curves[r],a=o.getLength(),c=a===0?0:1-s/a;return o.getPointAt(c)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new ZS[r.type]().fromJSON(r))}return this}},Cs=class extends fd{constructor(e){super(),this.type="Path",this.currentPoint=new $,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ls(this.currentPoint.clone(),new $(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Qo(this.currentPoint.clone(),new $(e,t),new $(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){let a=new Jo(this.currentPoint.clone(),new $(e,t),new $(i,r),new $(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ko(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){let l=new Rs(e,t,i,r,s,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Hi=class extends Cs{constructor(e){super(e),this.uuid=Fn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Cs().fromJSON(r))}return this}},En=class extends We{constructor(e,t=1){super(),this.type="Light",this.color=new ue(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};En.prototype.isLight=!0;var pd=class extends En{constructor(e,t,i){super(e,i),this.type="HemisphereLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.groundColor=new ue(t)}copy(e){return En.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}};pd.prototype.isHemisphereLight=!0;var gg=new we,yg=new b,xg=new b,ea=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bs,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;yg.setFromMatrixPosition(e.matrixWorld),t.position.copy(yg),xg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xg),t.updateMatrixWorld(),gg.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gg),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ul=class extends ea{constructor(){super(new Kt(50,1,.5,500)),this.focus=1}updateMatrices(e){let t=this.camera,i=Iu*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}};ul.prototype.isSpotLightShadow=!0;var md=class extends En{constructor(e,t,i=0,r=Math.PI/3,s=0,o=1){super(e,t),this.type="SpotLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.target=new We,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.shadow=new ul}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};md.prototype.isSpotLight=!0;var wg=new we,Lo=new b,Tu=new b,dl=class extends ea{constructor(){super(new Kt(90,1,.5,500)),this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Lo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Lo),Tu.copy(i.position),Tu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Tu),i.updateMatrixWorld(),r.makeTranslation(-Lo.x,-Lo.y,-Lo.z),wg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wg)}};dl.prototype.isPointLightShadow=!0;var gd=class extends En{constructor(e,t,i=0,r=1){super(e,t),this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new dl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};gd.prototype.isPointLight=!0;var Is=class extends Go{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};Is.prototype.isOrthographicCamera=!0;var fl=class extends ea{constructor(){super(new Is(-5,5,5,-5,.5,500))}};fl.prototype.isDirectionalLightShadow=!0;var ta=class extends En{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.target=new We,this.shadow=new fl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};ta.prototype.isDirectionalLight=!0;var na=class extends En{constructor(e,t){super(e,t),this.type="AmbientLight"}};na.prototype.isAmbientLight=!0;var yd=class extends En{constructor(e,t,i=10,r=10){super(e,t),this.type="RectAreaLight",this.width=i,this.height=r}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}};yd.prototype.isRectAreaLight=!0;var pl=class{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new b)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*i),t.addScaledVector(o[4],1.092548*(i*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(i*s)),t.addScaledVector(o[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){let i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*i),t.addScaledVector(o[4],2*.429043*i*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*i*s),t.addScaledVector(o[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){let i=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-r*r)}};pl.prototype.isSphericalHarmonics3=!0;var ia=class extends En{constructor(e=new pl,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}};ia.prototype.isLightProbe=!0;var xd=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}},wd=class extends it{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){let e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};wd.prototype.isInstancedBufferGeometry=!0;var vd=class extends dt{constructor(e,t,i,r){typeof i=="number"&&(r=i,i=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,i),this.meshPerAttribute=r||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};vd.prototype.isInstancedBufferAttribute=!0;var _d=class extends $n{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=As.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){As.add(e,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){r&&r(c),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}};_d.prototype.isImageBitmapLoader=!0;var bd=class{constructor(){this.type="ShapePath",this.color=new ue,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Cs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function i(m){let v=[];for(let E=0,T=m.length;E<T;E++){let w=m[E],R=new Hi;R.curves=w.curves,v.push(R)}return v}function r(m,v){let E=v.length,T=!1;for(let w=E-1,R=0;R<E;w=R++){let P=v[w],k=v[R],U=k.x-P.x,z=k.y-P.y;if(Math.abs(z)>Number.EPSILON){if(z<0&&(P=v[R],U=-U,k=v[w],z=-z),m.y<P.y||m.y>k.y)continue;if(m.y===P.y){if(m.x===P.x)return!0}else{let O=z*(m.x-P.x)-U*(m.y-P.y);if(O===0)return!0;if(O<0)continue;T=!T}}else{if(m.y!==P.y)continue;if(k.x<=m.x&&m.x<=P.x||P.x<=m.x&&m.x<=k.x)return!0}}return T}let s=mi.isClockWise,o=this.subPaths;if(o.length===0)return[];if(t===!0)return i(o);let a,c,l,h=[];if(o.length===1)return c=o[0],l=new Hi,l.curves=c.curves,h.push(l),h;let u=!s(o[0].getPoints());u=e?!u:u;let d=[],f=[],p=[],y=0,x;f[y]=void 0,p[y]=[];for(let m=0,v=o.length;m<v;m++)c=o[m],x=c.getPoints(),a=s(x),a=e?!a:a,a?(!u&&f[y]&&y++,f[y]={s:new Hi,p:x},f[y].s.curves=c.curves,u&&y++,p[y]=[]):p[y].push({h:c,p:x[0]});if(!f[0])return i(o);if(f.length>1){let m=!1,v=[];for(let E=0,T=f.length;E<T;E++)d[E]=[];for(let E=0,T=f.length;E<T;E++){let w=p[E];for(let R=0;R<w.length;R++){let P=w[R],k=!0;for(let U=0;U<f.length;U++)r(P.p,f[U].p)&&(E!==U&&v.push({froms:E,tos:U,hole:R}),k?(k=!1,d[U].push(P)):m=!0);k&&d[E].push(P)}}v.length>0&&(m||(p=d))}let g;for(let m=0,v=f.length;m<v;m++){l=f[m].s,h.push(l),g=p[m];for(let E=0,T=g.length;E<T;E++)l.holes.push(g[E].h)}return h}},Md=class{constructor(e){this.type="Font",this.data=e}generateShapes(e,t=100){let i=[],r=JS(e,t,this.data);for(let s=0,o=r.length;s<o;s++)Array.prototype.push.apply(i,r[s].toShapes());return i}};function JS(n,e,t){let i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[],a=0,c=0;for(let l=0;l<i.length;l++){let h=i[l];if(h===`
`)a=0,c-=s;else{let u=QS(h,r,a,c,t);a+=u.offsetX,o.push(u.path)}}return o}function QS(n,e,t,i,r){let s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}let o=new bd,a,c,l,h,u,d,f,p;if(s.o){let y=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let x=0,g=y.length;x<g;)switch(y[x++]){case"m":a=y[x++]*e+t,c=y[x++]*e+i,o.moveTo(a,c);break;case"l":a=y[x++]*e+t,c=y[x++]*e+i,o.lineTo(a,c);break;case"q":l=y[x++]*e+t,h=y[x++]*e+i,u=y[x++]*e+t,d=y[x++]*e+i,o.quadraticCurveTo(u,d,l,h);break;case"b":l=y[x++]*e+t,h=y[x++]*e+i,u=y[x++]*e+t,d=y[x++]*e+i,f=y[x++]*e+t,p=y[x++]*e+i,o.bezierCurveTo(u,d,f,p,l,h);break}}return{offsetX:s.ha*e,path:o}}Md.prototype.isFont=!0;var Cc,KS={getContext:function(){return Cc===void 0&&(Cc=new(window.AudioContext||window.webkitAudioContext)),Cc},setContext:function(n){Cc=n}},Ed=class extends $n{constructor(e){super(e)}load(e,t,i,r){let s=this,o=new ld(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{let c=a.slice(0);KS.getContext().decodeAudioData(c,function(h){t(h)})}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}},Sd=class extends ia{constructor(e,t,i=1){super(void 0,i);let r=new ue().set(e),s=new ue().set(t),o=new b(r.r,r.g,r.b),a=new b(s.r,s.g,s.b),c=Math.sqrt(Math.PI),l=c*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(c),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(l)}};Sd.prototype.isHemisphereLightProbe=!0;var Td=class extends ia{constructor(e,t=1){super(void 0,t);let i=new ue().set(e);this.sh.coefficients[0].set(i.r,i.g,i.b).multiplyScalar(2*Math.sqrt(Math.PI))}};Td.prototype.isAmbientLightProbe=!0;var ml=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=vg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function vg(){return(typeof performance>"u"?Date:performance).now()}var Ad=class extends We{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}};var Rd=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}},Ld=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,r=this.valueSize,s=e*r+r,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)i[s+a]=i[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(i,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=t*this._origIndex;this._mixBufferRegion(i,r,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(i[c]!==i[c+t]){a.setValue(i,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let s=i,o=r;s!==o;++s)t[s]=t[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[i+o]}_slerp(e,t,i,r){Et.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,s){let o=this._workIndex*s;Et.multiplyQuaternionsFlat(e,o,e,t,e,i),Et.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,i,r,s){let o=1-r;for(let a=0;a!==s;++a){let c=t+a;e[c]=e[c]*o+e[i+a]*r}}_lerpAdditive(e,t,i,r,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[i+o]*r}}},Jd="\\[\\]\\.:\\/",e1=new RegExp("["+Jd+"]","g"),Qd="[^"+Jd+"]",t1="[^"+Jd.replace("\\.","")+"]",n1=/((?:WC+[\/:])*)/.source.replace("WC",Qd),i1=/(WCOD+)?/.source.replace("WCOD",t1),r1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qd),s1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qd),o1=new RegExp("^"+n1+i1+r1+s1+"$"),a1=["material","materials","bones"],Cd=class{constructor(e,t,i){let r=i||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Qe=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(e1,"")}static parseTrackName(e){let t=o1.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);a1.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.node[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qe.Composite=Cd;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Id=class{constructor(){this.uuid=Fn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let i=0,r=arguments.length;i!==r;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length,a,c=e.length,l=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let d=arguments[h],f=d.uuid,p=t[f];if(p===void 0){p=c++,t[f]=p,e.push(d);for(let y=0,x=o;y!==x;++y)s[y].push(new Qe(d,i[y],r[y]))}else if(p<l){a=e[p];let y=--l,x=e[y];t[x.uuid]=p,e[p]=x,t[f]=y,e[y]=d;for(let g=0,m=o;g!==m;++g){let v=s[g],E=v[y],T=v[p];v[p]=E,T===void 0&&(T=new Qe(d,i[g],r[g])),v[y]=T}}else e[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length,s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let c=arguments[o],l=c.uuid,h=t[l];if(h!==void 0&&h>=s){let u=s++,d=e[u];t[d.uuid]=h,e[h]=d,t[l]=u,e[u]=c;for(let f=0,p=r;f!==p;++f){let y=i[f],x=y[u],g=y[h];y[h]=x,y[u]=g}}}this.nCachedObjects_=s}uncache(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length,s=this.nCachedObjects_,o=e.length;for(let a=0,c=arguments.length;a!==c;++a){let l=arguments[a],h=l.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<s){let d=--s,f=e[d],p=--o,y=e[p];t[f.uuid]=u,e[u]=f,t[y.uuid]=d,e[d]=y,e.pop();for(let x=0,g=r;x!==g;++x){let m=i[x],v=m[d],E=m[p];m[u]=v,m[d]=E,m.pop()}}else{let d=--o,f=e[d];d>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let p=0,y=r;p!==y;++p){let x=i[p];x[u]=x[d],x.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){let i=this._bindingsIndicesByPath,r=i[e],s=this._bindings;if(r!==void 0)return s[r];let o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,h=this.nCachedObjects_,u=new Array(l);r=s.length,i[e]=r,o.push(e),a.push(t),s.push(u);for(let d=h,f=c.length;d!==f;++d){let p=c[d];u[d]=new Qe(p,e,t)}return u}unsubscribe_(e){let t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){let r=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=e[a];t[l]=i,o[i]=c,o.pop(),s[i]=s[a],s.pop(),r[i]=r[a],r.pop()}}};Id.prototype.isAnimationObjectGroup=!0;var Dd=class{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;let s=t.tracks,o=s.length,a=new Array(o),c={endingStart:ms,endingEnd:ms};for(let l=0;l!==o;++l){let h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Hv,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){let r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let r=this._mixer,s=r.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+i,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*i;if(c<0||i===0)return;this._startTime=null,t=i*c}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Lg:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case $d:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,r=this.time+e,s=this._loopCount,o=i===zv;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(i===Ov){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){let a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,i){let r=this._interpolantSettings;i?(r.endingStart=gs,r.endingEnd=gs):(e?r.endingStart=this.zeroSlopeAtStart?gs:ms:r.endingStart=Hc,t?r.endingEnd=this.zeroSlopeAtEnd?gs:ms:r.endingEnd=Hc)}_scheduleFading(e,t,i){let r=this._mixer,s=r.time,o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=i,this}},Pd=class extends On{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let i=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,c=i.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){let d=r[u],f=d.name,p=h[f];if(p!==void 0)o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}let y=t&&t._propertyBindings[u].binding.parsedPath;p=new Ld(Qe.create(i,f,y),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,i)}let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let r=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){let r=this._bindingsByRootAndName,s=this._bindings,o=r[t];o===void 0&&(o={},r[t]=o),o[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,r=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[r],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new il(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){let r=t||this._root,s=r.uuid,o=typeof e=="string"?sl.findByName(r,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(i===void 0&&(o!==null?i=o.blendMode:i=$d),c!==void 0){let u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new Dd(this,o,t,i);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(e,t){let i=t||this._root,r=i.uuid,s=typeof e=="string"?sl.findByName(i,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(r,e,s,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){let o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete r[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let o in i){let a=i[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};Pd.prototype._controlInterpolantsResultBuffer=new Float32Array(1);var Bd=class n{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new n(this.value.clone===void 0?this.value:this.value.clone())}},kd=class extends gr{constructor(e,t,i=1){super(e,t),this.meshPerAttribute=i||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};kd.prototype.isInstancedInterleavedBuffer=!0;var Nd=class{constructor(e,t,i,r,s){this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=r,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}};Nd.prototype.isGLBufferAttribute=!0;var gl=class{constructor(e,t,i=0,r=1/0){this.ray=new gi(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Gc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!1,i=[]){return Ud(e,this,i,t),i.sort(_g),i}intersectObjects(e,t=!1,i=[]){for(let r=0,s=e.length;r<s;r++)Ud(e[r],this,i,t);return i.sort(_g),i}};function _g(n,e){return n.distance-e.distance}function Ud(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let r=n.children;for(let s=0,o=r.length;s<o;s++)Ud(r[s],e,t,!0)}}var ra=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Qt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var bg=new $,wr=class{constructor(e=new $(1/0,1/0),t=new $(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=bg.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new $),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new $),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),t=new $),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),t=new $),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return bg.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};wr.prototype.isBox2=!0;var Mg=new b,Ic=new b,Fd=class{constructor(e=new b,t=new b){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new b),e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new b),e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return t===void 0&&(console.warn("THREE.Line3: .at() target is now required"),t=new b),this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Mg.subVectors(e,this.start),Ic.subVectors(this.end,this.start);let i=Ic.dot(Ic),s=Ic.dot(Mg)/i;return t&&(s=Qt(s,0,1)),s}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return i===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),i=new b),this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Od=class extends We{constructor(e){super(),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}};Od.prototype.isImmediateRenderObject=!0;var Ui=new b,Dc=new we,Au=new we,Hd=class extends yr{constructor(e){let t=Zg(e),i=new it,r=[],s=[],o=new ue(0,0,1),a=new ue(0,1,0);for(let l=0;l<t.length;l++){let h=t[l];h.parent&&h.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}i.setAttribute("position",new yt(r,3)),i.setAttribute("color",new yt(s,3));let c=new xi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,c),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,i=this.geometry,r=i.getAttribute("position");Au.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){let a=t[s];a.parent&&a.parent.isBone&&(Dc.multiplyMatrices(Au,a.matrixWorld),Ui.setFromMatrixPosition(Dc),r.setXYZ(o,Ui.x,Ui.y,Ui.z),Dc.multiplyMatrices(Au,a.parent.matrixWorld),Ui.setFromMatrixPosition(Dc),r.setXYZ(o+1,Ui.x,Ui.y,Ui.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}};function Zg(n){let e=[];n&&n.isBone&&e.push(n);for(let t=0;t<n.children.length;t++)e.push.apply(e,Zg(n.children[t]));return e}var zd=class extends yr{constructor(e=10,t=10,i=4473924,r=8947848){i=new ue(i),r=new ue(r);let s=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,f=0,p=-a;d<=t;d++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);let y=d===s?i:r;y.toArray(l,f),f+=3,y.toArray(l,f),f+=3,y.toArray(l,f),f+=3,y.toArray(l,f),f+=3}let h=new it;h.setAttribute("position",new yt(c,3)),h.setAttribute("color",new yt(l,3));let u=new xi({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}};var c1=new Float32Array(1),QR=new Int32Array(c1.buffer);var kc=4,Oo=8,KR=Math.pow(2,Oo),Jg=[.125,.215,.35,.446,.526,.582],l1=Oo-kc+1+Jg.length;var eL={[Ds]:0,[sa]:1,[Ig]:2,[Dg]:3,[Pg]:4,[Bg]:5,[Cg]:6},h1=new mr({side:Pt,depthWrite:!1,depthTest:!1}),tL=new J(new ce,h1);var{_lodPlanes:nL,_sizeLods:iL,_sigmas:rL}=u1();var fr=(1+Math.sqrt(5))/2,fs=1/fr,sL=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,fr,fs),new b(0,fr,-fs),new b(fs,0,fr),new b(-fs,0,fr),new b(fr,fs,0),new b(-fr,fs,0)];function u1(){let n=[],e=[],t=[],i=Oo;for(let r=0;r<l1;r++){let s=Math.pow(2,i);e.push(s);let o=1/s;r>Oo-kc?o=Jg[r-Oo+kc-1]:r==0&&(o=0),t.push(o);let a=1/(s-1),c=-a/2,l=1+a/2,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,p=2,y=1,x=new Float32Array(f*d*u),g=new Float32Array(p*d*u),m=new Float32Array(y*d*u);for(let E=0;E<u;E++){let T=E%3*2/3-1,w=E>2?0:-1,R=[T,w,0,T+2/3,w,0,T+2/3,w+1,0,T,w,0,T+2/3,w+1,0,T,w+1,0];x.set(R,f*d*E),g.set(h,p*d*E);let P=[E,E,E,E,E,E];m.set(P,y*d*E)}let v=new it;v.setAttribute("position",new dt(x,f)),v.setAttribute("uv",new dt(g,p)),v.setAttribute("faceIndex",new dt(m,y)),n.push(v),i>kc&&i--}return{_lodPlanes:n,_sizeLods:e,_sigmas:t}}ln.create=function(n,e){return console.log("THREE.Curve.create() has been deprecated"),n.prototype=Object.create(ln.prototype),n.prototype.constructor=n,n.prototype.getPoint=e,n};Cs.prototype.fromPoints=function(n){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(n)};zd.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Hd.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};$n.prototype.extractUrlBase=function(n){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),xd.extractUrlBase(n)};$n.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};wr.prototype.center=function(n){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(n)};wr.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()};wr.prototype.isIntersectionBox=function(n){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};wr.prototype.size=function(n){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(n)};cn.prototype.center=function(n){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(n)};cn.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};cn.prototype.isIntersectionBox=function(n){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};cn.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)};cn.prototype.size=function(n){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(n)};Gi.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};bs.prototype.setFromMatrix=function(n){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(n)};Fd.prototype.center=function(n){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(n)};Lt.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)};Lt.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)};Lt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};Lt.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)};Lt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};Lt.prototype.getInverse=function(n){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()};we.prototype.extractPosition=function(n){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(n)};we.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)};we.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new b().setFromMatrixColumn(this,3)};we.prototype.setRotationFromQuaternion=function(n){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(n)};we.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};we.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};we.prototype.multiplyVector4=function(n){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};we.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};we.prototype.rotateAxis=function(n){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),n.transformDirection(this)};we.prototype.crossVector=function(n){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};we.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};we.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};we.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};we.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};we.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};we.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};we.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};we.prototype.makeFrustum=function(n,e,t,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(n,e,i,t,r,s)};we.prototype.getInverse=function(n){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()};_n.prototype.isIntersectionLine=function(n){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(n)};Et.prototype.multiplyVector3=function(n){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),n.applyQuaternion(this)};Et.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};gi.prototype.isIntersectionBox=function(n){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};gi.prototype.isIntersectionPlane=function(n){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(n)};gi.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)};Xt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};Xt.prototype.barycoordFromPoint=function(n,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(n,e)};Xt.prototype.midpoint=function(n){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(n)};Xt.prototypenormal=function(n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(n)};Xt.prototype.plane=function(n){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(n)};Xt.barycoordFromPoint=function(n,e,t,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Xt.getBarycoord(n,e,t,i,r)};Xt.normal=function(n,e,t,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Xt.getNormal(n,e,t,i)};Hi.prototype.extractAllPoints=function(n){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(n)};Hi.prototype.extrude=function(n){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Es(this,n)};Hi.prototype.makeGeometry=function(n){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Zu(this,n)};$.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};$.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)};$.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};b.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};b.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};b.prototype.getPositionFromMatrix=function(n){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(n)};b.prototype.getScaleFromMatrix=function(n){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(n)};b.prototype.getColumnFromMatrix=function(n,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,n)};b.prototype.applyProjection=function(n){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(n)};b.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};b.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)};b.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ye.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};Ye.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};We.prototype.getChildByName=function(n){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(n)};We.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};We.prototype.translate=function(n,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,n)};We.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};We.prototype.applyMatrix=function(n){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)};Object.defineProperties(We.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(n){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=n}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});J.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(J.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Gv},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Kc.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Kt.prototype.setLens=function(n,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(n)};Object.defineProperties(En.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(n){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=n}},shadowCameraLeft:{set:function(n){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=n}},shadowCameraRight:{set:function(n){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=n}},shadowCameraTop:{set:function(n){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=n}},shadowCameraBottom:{set:function(n){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=n}},shadowCameraNear:{set:function(n){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=n}},shadowCameraFar:{set:function(n){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=n}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(n){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=n}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(n){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=n}},shadowMapHeight:{set:function(n){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=n}}});Object.defineProperties(dt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===zc},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(zc)}}});dt.prototype.setDynamic=function(n){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?zc:zo),this};dt.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},dt.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};it.prototype.addIndex=function(n){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(n)};it.prototype.addAttribute=function(n,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(n,new dt(arguments[1],arguments[2]))):n==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(n,e)};it.prototype.addDrawCall=function(n,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(n,e)};it.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};it.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};it.prototype.removeAttribute=function(n){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(n)};it.prototype.applyMatrix=function(n){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)};Object.defineProperties(it.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});gr.prototype.setDynamic=function(n){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?zc:zo),this};gr.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Es.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Es.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Es.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Ms.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Bd.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this};Object.defineProperties(Bt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ue}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(n){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Sg}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(n){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=n}}});Object.defineProperties(yi.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(n){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=n}}});Ze.prototype.clearTarget=function(n,e,t,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(n),this.clear(e,t,i)};Ze.prototype.animate=function(n){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(n)};Ze.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Ze.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Ze.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Ze.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Ze.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Ze.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Ze.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Ze.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Ze.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Ze.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Ze.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Ze.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Ze.prototype.enableScissorTest=function(n){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(n)};Ze.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Ze.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Ze.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Ze.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Ze.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Ze.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Ze.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Ze.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Ze.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Ze.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Ze.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=n}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=n}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(n){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=n===!0?sa:Ds}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(qg.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(pi.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=n}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=n}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=n}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=n}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(n){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=n}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(n){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=n}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(n){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=n}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(n){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=n}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(n){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=n}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(n){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=n}}});Ad.prototype.load=function(n){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let e=this;return new Ed().load(n,function(i){e.setBuffer(i)}),this};Rd.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};Vo.prototype.updateCubeMap=function(n,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(n,e)};Vo.prototype.clear=function(n,e,t,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(n,e,t,i)};zi.crossOrigin=void 0;zi.loadTexture=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let r=new ud;r.setCrossOrigin(this.crossOrigin);let s=r.load(n,t,void 0,i);return e&&(s.mapping=e),s};zi.loadTextureCube=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let r=new hd;r.setCrossOrigin(this.crossOrigin);let s=r.load(n,t,void 0,i);return e&&(s.mapping=e),s};zi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};zi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"128"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="128");var Qg={type:"change"},Kd={type:"start"},ef={type:"end"},_l=class extends On{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.enabled=!0,this.target=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vr.ROTATE,MIDDLE:vr.DOLLY,RIGHT:vr.PAN},this.touches={ONE:_r.ROTATE,TWO:_r.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.listenToKeyEvents=function(S){S.addEventListener("keydown",oe),this._domElementKeyEvents=S},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Qg),i.update(),s=r.NONE},this.update=(function(){let S=new b,q=new Et().setFromUnitVectors(e.up,new b(0,1,0)),se=q.clone().invert(),H=new b,me=new Et,Pe=2*Math.PI;return function(){let Wn=i.object.position;S.copy(Wn).sub(i.target),S.applyQuaternion(q),a.setFromVector3(S),i.autoRotate&&s===r.NONE&&R(T()),i.enableDamping?(a.theta+=c.theta*i.dampingFactor,a.phi+=c.phi*i.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Ve=i.minAzimuthAngle,At=i.maxAzimuthAngle;return isFinite(Ve)&&isFinite(At)&&(Ve<-Math.PI?Ve+=Pe:Ve>Math.PI&&(Ve-=Pe),At<-Math.PI?At+=Pe:At>Math.PI&&(At-=Pe),Ve<=At?a.theta=Math.max(Ve,Math.min(At,a.theta)):a.theta=a.theta>(Ve+At)/2?Math.max(Ve,a.theta):Math.min(At,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),S.setFromSpherical(a),S.applyQuaternion(se),Wn.copy(i.target).add(S),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,u||H.distanceToSquared(i.object.position)>o||8*(1-me.dot(i.object.quaternion))>o?(i.dispatchEvent(Qg),H.copy(i.object.position),me.copy(i.object.quaternion),u=!1,!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",L),i.domElement.removeEventListener("pointerdown",ee),i.domElement.removeEventListener("wheel",Y),i.domElement.removeEventListener("touchstart",fe),i.domElement.removeEventListener("touchend",ve),i.domElement.removeEventListener("touchmove",Ue),i.domElement.ownerDocument.removeEventListener("pointermove",de),i.domElement.ownerDocument.removeEventListener("pointerup",re),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",oe)};let i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=r.NONE,o=1e-6,a=new ra,c=new ra,l=1,h=new b,u=!1,d=new $,f=new $,p=new $,y=new $,x=new $,g=new $,m=new $,v=new $,E=new $;function T(){return 2*Math.PI/60/60*i.autoRotateSpeed}function w(){return Math.pow(.95,i.zoomSpeed)}function R(S){c.theta-=S}function P(S){c.phi-=S}let k=(function(){let S=new b;return function(se,H){S.setFromMatrixColumn(H,0),S.multiplyScalar(-se),h.add(S)}})(),U=(function(){let S=new b;return function(se,H){i.screenSpacePanning===!0?S.setFromMatrixColumn(H,1):(S.setFromMatrixColumn(H,0),S.crossVectors(i.object.up,S)),S.multiplyScalar(se),h.add(S)}})(),z=(function(){let S=new b;return function(se,H){let me=i.domElement;if(i.object.isPerspectiveCamera){let Pe=i.object.position;S.copy(Pe).sub(i.target);let ct=S.length();ct*=Math.tan(i.object.fov/2*Math.PI/180),k(2*se*ct/me.clientHeight,i.object.matrix),U(2*H*ct/me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(k(se*(i.object.right-i.object.left)/i.object.zoom/me.clientWidth,i.object.matrix),U(H*(i.object.top-i.object.bottom)/i.object.zoom/me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function O(S){i.object.isPerspectiveCamera?l/=S:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*S)),i.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function I(S){i.object.isPerspectiveCamera?l*=S:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/S)),i.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function B(S){d.set(S.clientX,S.clientY)}function D(S){m.set(S.clientX,S.clientY)}function C(S){y.set(S.clientX,S.clientY)}function j(S){f.set(S.clientX,S.clientY),p.subVectors(f,d).multiplyScalar(i.rotateSpeed);let q=i.domElement;R(2*Math.PI*p.x/q.clientHeight),P(2*Math.PI*p.y/q.clientHeight),d.copy(f),i.update()}function Z(S){v.set(S.clientX,S.clientY),E.subVectors(v,m),E.y>0?O(w()):E.y<0&&I(w()),m.copy(v),i.update()}function G(S){x.set(S.clientX,S.clientY),g.subVectors(x,y).multiplyScalar(i.panSpeed),z(g.x,g.y),y.copy(x),i.update()}function te(){}function ie(S){S.deltaY<0?I(w()):S.deltaY>0&&O(w()),i.update()}function pe(S){let q=!1;switch(S.code){case i.keys.UP:z(0,i.keyPanSpeed),q=!0;break;case i.keys.BOTTOM:z(0,-i.keyPanSpeed),q=!0;break;case i.keys.LEFT:z(i.keyPanSpeed,0),q=!0;break;case i.keys.RIGHT:z(-i.keyPanSpeed,0),q=!0;break}q&&(S.preventDefault(),i.update())}function ye(S){if(S.touches.length==1)d.set(S.touches[0].pageX,S.touches[0].pageY);else{let q=.5*(S.touches[0].pageX+S.touches[1].pageX),se=.5*(S.touches[0].pageY+S.touches[1].pageY);d.set(q,se)}}function W(S){if(S.touches.length==1)y.set(S.touches[0].pageX,S.touches[0].pageY);else{let q=.5*(S.touches[0].pageX+S.touches[1].pageX),se=.5*(S.touches[0].pageY+S.touches[1].pageY);y.set(q,se)}}function Xe(S){let q=S.touches[0].pageX-S.touches[1].pageX,se=S.touches[0].pageY-S.touches[1].pageY,H=Math.sqrt(q*q+se*se);m.set(0,H)}function ke(S){i.enableZoom&&Xe(S),i.enablePan&&W(S)}function be(S){i.enableZoom&&Xe(S),i.enableRotate&&ye(S)}function xe(S){if(S.touches.length==1)f.set(S.touches[0].pageX,S.touches[0].pageY);else{let se=.5*(S.touches[0].pageX+S.touches[1].pageX),H=.5*(S.touches[0].pageY+S.touches[1].pageY);f.set(se,H)}p.subVectors(f,d).multiplyScalar(i.rotateSpeed);let q=i.domElement;R(2*Math.PI*p.x/q.clientHeight),P(2*Math.PI*p.y/q.clientHeight),d.copy(f)}function Ne(S){if(S.touches.length==1)x.set(S.touches[0].pageX,S.touches[0].pageY);else{let q=.5*(S.touches[0].pageX+S.touches[1].pageX),se=.5*(S.touches[0].pageY+S.touches[1].pageY);x.set(q,se)}g.subVectors(x,y).multiplyScalar(i.panSpeed),z(g.x,g.y),y.copy(x)}function Le(S){let q=S.touches[0].pageX-S.touches[1].pageX,se=S.touches[0].pageY-S.touches[1].pageY,H=Math.sqrt(q*q+se*se);v.set(0,H),E.set(0,Math.pow(v.y/m.y,i.zoomSpeed)),O(E.y),m.copy(v)}function Ie(S){i.enableZoom&&Le(S),i.enablePan&&Ne(S)}function Q(S){i.enableZoom&&Le(S),i.enableRotate&&xe(S)}function K(){}function ee(S){if(i.enabled!==!1)switch(S.pointerType){case"mouse":case"pen":A(S);break}}function de(S){if(i.enabled!==!1)switch(S.pointerType){case"mouse":case"pen":M(S);break}}function re(S){switch(S.pointerType){case"mouse":case"pen":X(S);break}}function A(S){S.preventDefault(),i.domElement.focus?i.domElement.focus():window.focus();let q;switch(S.button){case 0:q=i.mouseButtons.LEFT;break;case 1:q=i.mouseButtons.MIDDLE;break;case 2:q=i.mouseButtons.RIGHT;break;default:q=-1}switch(q){case vr.DOLLY:if(i.enableZoom===!1)return;D(S),s=r.DOLLY;break;case vr.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enablePan===!1)return;C(S),s=r.PAN}else{if(i.enableRotate===!1)return;B(S),s=r.ROTATE}break;case vr.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enableRotate===!1)return;B(S),s=r.ROTATE}else{if(i.enablePan===!1)return;C(S),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&(i.domElement.ownerDocument.addEventListener("pointermove",de),i.domElement.ownerDocument.addEventListener("pointerup",re),i.dispatchEvent(Kd))}function M(S){if(i.enabled!==!1)switch(S.preventDefault(),s){case r.ROTATE:if(i.enableRotate===!1)return;j(S);break;case r.DOLLY:if(i.enableZoom===!1)return;Z(S);break;case r.PAN:if(i.enablePan===!1)return;G(S);break}}function X(S){i.domElement.ownerDocument.removeEventListener("pointermove",de),i.domElement.ownerDocument.removeEventListener("pointerup",re),i.enabled!==!1&&(i.dispatchEvent(ef),s=r.NONE)}function Y(S){i.enabled===!1||i.enableZoom===!1||s!==r.NONE&&s!==r.ROTATE||(S.preventDefault(),i.dispatchEvent(Kd),ie(S),i.dispatchEvent(ef))}function oe(S){i.enabled===!1||i.enablePan===!1||pe(S)}function fe(S){if(i.enabled!==!1){switch(S.preventDefault(),S.touches.length){case 1:switch(i.touches.ONE){case _r.ROTATE:if(i.enableRotate===!1)return;ye(S),s=r.TOUCH_ROTATE;break;case _r.PAN:if(i.enablePan===!1)return;W(S),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case _r.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ke(S),s=r.TOUCH_DOLLY_PAN;break;case _r.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;be(S),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Kd)}}function Ue(S){if(i.enabled!==!1)switch(S.preventDefault(),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;xe(S),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ne(S),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ie(S),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Q(S),i.update();break;default:s=r.NONE}}function ve(S){i.enabled!==!1&&(i.dispatchEvent(ef),s=r.NONE)}function L(S){i.enabled!==!1&&S.preventDefault()}i.domElement.addEventListener("contextmenu",L),i.domElement.addEventListener("pointerdown",ee),i.domElement.addEventListener("wheel",Y,{passive:!1}),i.domElement.addEventListener("touchstart",fe,{passive:!1}),i.domElement.addEventListener("touchend",ve),i.domElement.addEventListener("touchmove",Ue,{passive:!1}),this.update()}};var wi=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return n},Out:function(n){return n},InOut:function(n){return n}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var e=1.70158;return n===1?1:n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return n===0?0:--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}}),Bounce:Object.freeze({In:function(n){return 1-wi.Bounce.Out(1-n)},Out:function(n){return n<.36363636363636365?7.5625*n*n:n<.7272727272727273?7.5625*(n-=.5454545454545454)*n+.75:n<.9090909090909091?7.5625*(n-=.8181818181818182)*n+.9375:7.5625*(n-=.9545454545454546)*n+.984375},InOut:function(n){return n<.5?wi.Bounce.In(n*2)*.5:wi.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(e){return Math.pow(e,n)},Out:function(e){return 1-Math.pow(1-e,n)},InOut:function(e){return e<.5?Math.pow(e*2,n)/2:(1-Math.pow(2-e*2,n))/2+.5}}}}),oa=function(){return performance.now()},f1=(function(){function n(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,e)}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];for(var r=0,s=t;r<s.length;r++){var o=s[r];(e=o._group)===null||e===void 0||e.remove(o),o._group=this,this._tweens[o.getId()]=o,this._tweensAddedDuringUpdate[o.getId()]=o}},n.prototype.remove=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var i=0,r=e;i<r.length;i++){var s=r[i];s._group=void 0,delete this._tweens[s.getId()],delete this._tweensAddedDuringUpdate[s.getId()]}},n.prototype.allStopped=function(){return this.getAll().every(function(e){return!e.isPlaying()})},n.prototype.update=function(e,t){e===void 0&&(e=oa()),t===void 0&&(t=!0);var i=Object.keys(this._tweens);if(i.length!==0)for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var s=this._tweens[i[r]],o=!t;s&&s.update(e,o)===!1&&!t&&this.remove(s)}i=Object.keys(this._tweensAddedDuringUpdate)}},n})(),ks={Linear:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=ks.Utils.Linear;return e<0?s(n[0],n[1],i):e>1?s(n[t],n[t-1],t-i):s(n[r],n[r+1>t?t:r+1],i-r)},Bezier:function(n,e){for(var t=0,i=n.length-1,r=Math.pow,s=ks.Utils.Bernstein,o=0;o<=i;o++)t+=r(1-e,i-o)*r(e,o)*n[o]*s(i,o);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=ks.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(r=Math.floor(i=t*(1+e))),s(n[(r-1+t)%t],n[r],n[(r+1)%t],n[(r+2)%t],i-r)):e<0?n[0]-(s(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(s(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):s(n[r?r-1:0],n[r],n[t<r+1?t:r+1],n[t<r+2?t:r+2],i-r)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=ks.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:(function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}})(),CatmullRom:function(n,e,t,i,r){var s=(t-n)*.5,o=(i-e)*.5,a=r*r,c=r*a;return(2*e-2*t+s+o)*c+(-3*e+3*t-2*s-o)*a+s*r+e}}},Kg=(function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n})(),tf=new f1,bl=(function(){function n(e,t){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=wi.Linear.None,this._interpolationFunction=ks.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Kg.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=e,typeof t=="object"?(this._group=t,t.add(this)):t===!0&&(this._group=tf,tf.add(this))}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.getDuration=function(){return this._duration},n.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},n.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},n.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},n.prototype.start=function(e,t){if(e===void 0&&(e=oa()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var s in this._valuesEnd)r[s]=this._valuesEnd[s];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},n.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},n.prototype._setupProperties=function(e,t,i,r,s){for(var o in i){var a=e[o],c=Array.isArray(a),l=c?"array":typeof a,h=!c&&Array.isArray(i[o]);if(!(l==="undefined"||l==="function")){if(h){var u=i[o];if(u.length===0)continue;for(var d=[a],f=0,p=u.length;f<p;f+=1){var y=this._handleRelativeValue(a,u[f]);if(isNaN(y)){h=!1,console.warn("Found invalid interpolation list. Skipping.");break}d.push(y)}h&&(i[o]=d)}if((l==="object"||c)&&a&&!h){t[o]=c?[]:{};var x=a;for(var g in x)t[o][g]=x[g];r[o]=c?[]:{};var u=i[o];if(!this._isDynamic){var m={};for(var g in u)m[g]=u[g];i[o]=u=m}this._setupProperties(x,t[o],u,r[o],s)}else(typeof t[o]>"u"||s)&&(t[o]=a),c||(t[o]*=1),h?r[o]=i[o].slice().reverse():r[o]=t[o]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},n.prototype.pause=function(e){return e===void 0&&(e=oa()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this)},n.prototype.resume=function(e){return e===void 0&&(e=oa()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return e?(e.add(this),this):(console.warn("tween.group() without args has been removed, use group.add(tween) instead."),this)},n.prototype.remove=function(){var e;return(e=this._group)===null||e===void 0||e.remove(this),this},n.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},n.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},n.prototype.easing=function(e){return e===void 0&&(e=wi.Linear.None),this._easingFunction=e,this},n.prototype.interpolation=function(e){return e===void 0&&(e=ks.Linear),this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){var i=this,r;if(e===void 0&&(e=oa()),t===void 0&&(t=n.autoStartOnUpdate),this._isPaused)return!0;var s;if(!this._goToEnd&&!this._isPlaying)if(t)this.start(e,!0);else return!1;if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var o=e-this._startTime,a=this._duration+((r=this._repeatDelayTime)!==null&&r!==void 0?r:this._delayTime),c=this._duration+this._repeat*a,l=function(){if(i._duration===0||o>c)return 1;var y=Math.trunc(o/a),x=o-y*a,g=Math.min(x/i._duration,1);return g===0&&o===i._duration?1:g},h=l(),u=this._easingFunction(h);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,u),this._onUpdateCallback&&this._onUpdateCallback(this._object,h),this._duration===0||o>=this._duration)if(this._repeat>0){var d=Math.min(Math.trunc((o-this._duration)/a)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=d);for(s in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[s]=="string"&&(this._valuesStartRepeat[s]=this._valuesStartRepeat[s]+parseFloat(this._valuesEnd[s])),this._yoyo&&this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=a*d,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var f=0,p=this._chainedTweens.length;f<p;f++)this._chainedTweens[f].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,r){for(var s in i)if(t[s]!==void 0){var o=t[s]||0,a=i[s],c=Array.isArray(e[s]),l=Array.isArray(a),h=!c&&l;h?e[s]=this._interpolationFunction(a,r):typeof a=="object"&&a?this._updateProperties(e[s],o,a,r):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[s]=o+(a-o)*r))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n.autoStartOnUpdate=!1,n})();var cL=Kg.nextId,Zn=tf,lL=Zn.getAll.bind(Zn),hL=Zn.removeAll.bind(Zn),uL=Zn.add.bind(Zn),dL=Zn.remove.bind(Zn),ey=Zn.update.bind(Zn);function yR(){return{on(){}}}function xR(){let n=new Map,e=new Set;return{get(t){return n.get(t)},set(t,i){n.set(t,i);let r={keysChanged:new Set([t])};for(let s of e)try{s(r)}catch(o){console.error(o)}},observe(t){e.add(t)}}}var tw="singabldr_user",Tp="singabldr_script_preset";function Hp(n){if(typeof n!="string"||!n)return null;try{return JSON.parse(n)}catch{return null}}function Bp(){let n=localStorage.getItem(tw),e=Hp(n);if(!e||typeof e!="object")return null;let t=typeof e.phone=="string"?e.phone:null,i=typeof e.name=="string"?e.name:null;return!t&&!i?null:{phone:t,name:i}}function Fx(n){if(!n||typeof n!="object")return;let e=typeof n.phone=="string"?n.phone:"",t=typeof n.name=="string"?n.name:"";localStorage.setItem(tw,JSON.stringify({phone:e,name:t}))}function wR(){let n=new Map;return{schedule(e,t,i=0){n.has(e)&&clearTimeout(n.get(e));let r=setTimeout(()=>{n.delete(e),t()},i);n.set(e,r)},cancel(e){let t=n.get(e);t&&clearTimeout(t),n.delete(e)}}}var wn=wR(),Ox=new Map;async function zp(n,{ttlMs:e=3e4}={}){let t=Date.now(),i=Ox.get(n);if(i&&t-i.timestampMs<e)return i.promise;let r=fetch(n).then(s=>{if(!s.ok)throw new Error(`Failed to fetch JSON: ${n}`);return s.json()});return Ox.set(n,{timestampMs:t,promise:r}),r}function Za(n){if(Array.isArray(n))return{version:0,scenePatch:null,steps:n};if(!n||typeof n!="object")return{version:0,scenePatch:null,steps:[]};let e=Array.isArray(n.steps)?n.steps:Array.isArray(n.script)?n.script:Array.isArray(n.timeline)?n.timeline:[];return{version:n.version??1,meta:n.meta??null,assets:n.assets??null,elements:n.elements??null,animation:n.animation??null,scenePatch:n.scenePatch??null,steps:e}}function vR(n){if(!n||typeof n!="object"||!le)return;let e=(t,i)=>{for(let[r,s]of Object.entries(i))s&&typeof s=="object"&&!Array.isArray(s)?((!t[r]||typeof t[r]!="object"||Array.isArray(t[r]))&&(t[r]={}),e(t[r],s)):t[r]=s};if(e(le,n),n.themes&&document.getElementById("theme-select")){let t=document.getElementById("theme-select"),i=new Set(Array.from(t.options).map(r=>r.value));Object.keys(le.themes||{}).forEach(r=>{if(i.has(r))return;let s=document.createElement("option");s.value=r,s.textContent=r.charAt(0).toUpperCase()+r.slice(1).replace("_"," "),t.appendChild(s)})}if(n.weathers&&document.getElementById("weather-select")){let t=document.getElementById("weather-select"),i=new Set(Array.from(t.options).map(r=>r.value));Object.keys(le.weathers||{}).forEach(r=>{if(i.has(r))return;let s=document.createElement("option");s.value=r,s.textContent=r.charAt(0).toUpperCase()+r.slice(1),t.appendChild(s)})}}var Gp=new URLSearchParams(window.location.search),_R=Gp.get("multiplayer")!=="0",Ai=Gp.get("board")||"singabldr.json",sn=Gp.get("mode")||"ai";!Ai.startsWith("http")&&!Ai.startsWith("/")&&!Ai.startsWith("./")&&!Ai.startsWith("../")&&!Ai.startsWith("boards/")&&(Ai=`boards/${Ai}`);var nw="v4";sn==="ai"&&(nw=`ai-${Bp()?.phone||"local"}`);var bR=`singabldr-room-${Ai.split("/").pop().replace(".json","")}-${nw}`,Ap=null,Vp=yR(),bt=xR();if(_R){let n=await Promise.resolve().then(()=>(yp(),gp)),{WebsocketProvider:e}=await Promise.resolve().then(()=>(Ux(),Nx));Ap=new n.Doc,Vp=new e("wss://demos.yjs.dev/ws",bR,Ap),bt=Ap.getMap("gameState")}else console.log("[singabldr] Multiplayer disabled (?multiplayer=0). Running local-only mode.");var Wp=Math.random().toString(36).substring(2),on=new Ms;on.background=new ue("#A9E1FF");on.fog=new Wo("#A9E1FF",.0018);var Hx=window.innerWidth/window.innerHeight,or=180,vn=new Is(-or*Hx,or*Hx,or,-or,1,2e3);vn.position.set(200,200,200);vn.lookAt(on.position);var ar=new Ze({antialias:!0,alpha:!1});ar.setSize(window.innerWidth,window.innerHeight);ar.shadowMap.enabled=!0;ar.shadowMap.type=Gd;ar.outputEncoding=sa;document.body.appendChild(ar.domElement);var Ja=new _l(vn,ar.domElement);Ja.enableDamping=!0;Ja.dampingFactor=.05;Ja.maxPolarAngle=Math.PI/2.2;Ja.minPolarAngle=Math.PI/6;var iw=new na(16777215,.7);on.add(iw);var Vn=new ta(16777215,.4);Vn.position.set(-200,300,100);Vn.castShadow=!0;Vn.shadow.mapSize.width=4096;Vn.shadow.mapSize.height=4096;Vn.shadow.camera.left=-300;Vn.shadow.camera.right=300;Vn.shadow.camera.top=300;Vn.shadow.camera.bottom=-300;Vn.shadow.bias=-.001;on.add(Vn);var xn=new He;on.add(xn);var le=null,Dh={},MR=new ce(800,4,600),ER=new _e({color:"#56B7DF"}),qp=new J(MR,ER);qp.position.y=-7;qp.receiveShadow=!0;xn.add(qp);function zx(n,e){let t=n[0],i=n[1],r=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){let a=e[s][0],c=e[s][1],l=e[o][0],h=e[o][1];c>i!=h>i&&t<(l-a)*(i-c)/(h-c)+a&&(r=!r)}return r}var Wa=[],Gx=0,qa,Vx,Xa,Wx,Ph,Bh,ri,si,sr,Rp,Lp,qx,oi,go=0,kp=[],Ce=[{id:0,phone:null,name:"Player 1",colorHex:"#ff4757",css:"#ff4757",cash:1500,pos:0,mesh:null},{id:1,phone:null,name:"Player 2",colorHex:"#0984e3",css:"#0984e3",cash:1500,pos:0,mesh:null},{id:2,phone:null,name:"Player 3",colorHex:"#00b894",css:"#00b894",cash:1500,pos:0,mesh:null}],Ge=0,Gn=!1,pt=null,Wt=null,rn=0;function SR(){let n=new URLSearchParams(window.location.search),e=n.get("user"),t=n.get("name");if(e&&t)Wt={phone:e,name:t},Fx(Wt);else if(e){let r=Bp()?.name||null;Wt={phone:e,name:r||`Player_${e.slice(-4)}`},Fx(Wt)}else Wt=Bp();document.getElementById("login-screen").style.display="none",document.getElementById("login-btn").addEventListener("click",()=>{let r=document.getElementById("login-name").value.trim(),s=document.getElementById("login-phone").value.replace(/\D/g,"");if(!r||!s){alert("Please enter both Name and WhatsApp Number!");return}let o=new URL(window.location.href);o.searchParams.set("user",s),o.searchParams.set("name",r);let a=`Welcome to Singabldr! \u{1F3B2}

Here is your magic login link. Click it to start playing:
${o.toString()}`,c=`https://wa.me/${s}?text=${encodeURIComponent(a)}`;window.open(c,"_blank");let l=document.getElementById("login-btn");l.innerText="Sent!",l.style.backgroundColor="#b2bec3",l.disabled=!0,document.getElementById("login-status").style.display="block"}),window.togglePlayMode=function(){let r=new URL(window.location.href),o=(r.searchParams.get("mode")||"ai")==="ai"?"human":"ai";r.searchParams.set("mode",o),window.location.href=r.toString()};function i(){document.getElementById("watermark").innerText="\u2600\uFE0F airvio - joohwee",Wt?(document.getElementById("nav-logout-btn").style.display="block",document.getElementById("nav-login-btn").style.display="none"):(document.getElementById("nav-logout-btn").style.display="none",document.getElementById("nav-login-btn").style.display="block",pt=0);let r=document.getElementById("quick-play-mode-btn");r&&(r.innerText=sn==="ai"?"Play with Human \u{1F46B}\u{1F3FB}":"Play with AI \u{1F916}"),sn==="ai"?document.getElementById("superagent-container").style.display="block":document.getElementById("superagent-container").style.display="none",typeof bt<"u"&&bt&&typeof bt.get=="function"&&bt.get("players")&&Gh()}i()}document.getElementById("watermark").innerText="\u2600\uFE0F airvio - joohwee";SR();var Xx=document.getElementById("quick-play-mode-btn");Xx&&(Xx.innerText=sn==="ai"?"Play with AI \u{1F916}":"Play with Human \u{1F46B}\u{1F3FB}");window.addEventListener("click",n=>{if(!n.target.closest("#watermark-container")){let e=document.getElementById("watermark-dropdown");e&&(e.style.display="none")}});var Yx={Brown:"#e1b12c","Light Blue":"#74b9ff",Pink:"#fd79a8",Orange:"#e17055",Red:"#d63031",Yellow:"#fbc531",Green:"#00b894","Dark Blue":"#0984e3",Station:"#636e72",Vehicle:"#b2bec3"},Qa=[],je=[],xo=new gl,Li=new $,rw=[],sw=[],Tt=[],ja=[];function Ft(n,e,t=1){let i=new tl(e),r=new yr(i,new xi({color:0,linewidth:2,transparent:!0,opacity:.1}));r.scale.set(t,t,t),n.add(r)}function TR(n,e,t,i){let r=new He,s=new _e({color:16777215}),o=new _e({color:i}),a=new ce(n,e*.8,t),c=new J(a,s);c.position.y=e*.8/2,c.castShadow=!0,c.receiveShadow=!0,Ft(c,a),r.add(c);let l=new ce(n+1.5,e*.2,t+1.5),h=new J(l,o);h.position.y=e*.8+e*.2/2,h.castShadow=!0,h.receiveShadow=!0,Ft(h,l),r.add(h);let u=new _e({color:"#2d3436"}),d=1.2,f=Math.floor(n/3),p=Math.floor(t/3),y=Math.floor(e*.8/3),x=new ce(d,d,.4);for(let g=0;g<y;g++){let m=(g-y/2+.5)*3+e*.8/2;for(let v=0;v<f;v++){let E=(v-f/2+.5)*3,T=new J(x,u);T.position.set(E,m,t/2),r.add(T);let w=new J(x,u);w.position.set(E,m,-t/2),r.add(w)}for(let v=0;v<p;v++){let E=(v-p/2+.5)*3,T=new J(x,u);T.rotation.y=Math.PI/2,T.position.set(n/2,m,E),r.add(T);let w=new J(x,u);w.rotation.y=Math.PI/2,w.position.set(-n/2,m,E),r.add(w)}}return r}function AR(n){let e=new He,t=new _e({color:n}),i=new _e({color:"#ffffff"}),r=new _e({color:"#2d3436"}),s=new ce(3.5,1.2,6),o=new J(s,t);o.position.y=1.2,o.castShadow=!0,o.receiveShadow=!0,Ft(o,s),e.add(o);let a=new ce(3,1.5,3.5),c=new J(a,i);c.position.set(0,2.55,-.5),c.castShadow=!0,c.receiveShadow=!0,e.add(c);let l=new ce(3.1,.3,3.6),h=new J(l,t);h.position.set(0,3.45,-.5),h.castShadow=!0,h.receiveShadow=!0,e.add(h);let u=new ce(.8,1.4,1.4);return[[1.9,.6,1.8],[-1.9,.6,1.8],[1.9,.6,-1.8],[-1.9,.6,-1.8]].forEach(f=>{let p=new J(u,r);p.position.set(...f),p.castShadow=!0,e.add(p)}),e}function RR(n){let e=new He,t=new _e({color:n}),i=new _e({color:"#ffeaa7"}),r=new _e({color:n}),s=new ce(1,1.2,.8),o=new J(s,t);o.position.y=1.4;let a=new ce(1,1,1),c=new J(a,i);c.position.y=2.6;let l=new ce(.4,.8,.4),h=new J(l,r);h.position.set(-.25,.4,0);let u=new J(l,r);u.position.set(.25,.4,0);let d=new ce(.3,1,.3),f=new J(d,r);f.position.set(-.7,1.3,0);let p=new J(d,r);return p.position.set(.7,1.3,0),e.add(o,c,h,u,f,p),e.traverse(y=>{y.isMesh&&(y.castShadow=!0,y.receiveShadow=!0,Ft(y,y.geometry))}),e.userData={legL:h,legR:u,armL:f,armR:p},e}function LR(){let n=new He,e=new _e({color:"#b2bec3"}),t=new J(new ce(4,3,5),e);t.position.y=2.5;let i=new J(new ce(3,3,3),e);i.position.set(0,3.5,3.5);let r=new J(new ce(1,3,1),e);r.position.set(0,1.5,4.5);let s=new J(new ce(2,3,.5),e);s.position.set(-2,3.5,3);let o=new J(new ce(2,3,.5),e);return o.position.set(2,3.5,3),n.add(t,i,r,s,o),n.traverse(a=>{a.isMesh&&(a.castShadow=!0,Ft(a,a.geometry))}),n.scale.set(.6,.6,.6),n}function CR(){let n=new He,e=new _e({color:"#e17055"}),t=new _e({color:"#2d3436"}),i=new J(new ce(2,2,4),e);i.position.y=1.5;let r=new J(new ce(1.8,1.8,1.8),e);r.position.set(0,2.5,2.5);let s=new J(new ce(2.2,2.2,.5),t);s.position.set(0,1.5,.5);let o=new J(new ce(2.2,2.2,.5),t);return o.position.set(0,1.5,-.5),n.add(i,r,s,o),n.traverse(a=>{a.isMesh&&(a.castShadow=!0,Ft(a,a.geometry))}),n.scale.set(.7,.7,.7),n}function IR(){let n=new He,e=new _e({color:"#ffffff"}),t=new J(new ce(2.5,2.5,4.5),e);t.position.y=1.75;let i=new J(new ce(2,2,2),e);return i.position.set(0,2.5,3),n.add(t,i),n.traverse(r=>{r.isMesh&&(r.castShadow=!0,Ft(r,r.geometry))}),n.scale.set(.7,.7,.7),n}function DR(){let n=new He,e=new _e({color:"#d35400"}),t=new J(new ce(1.5,1,3),e);t.position.y=.5;let i=new J(new ce(1.2,1.2,1.2),e);return i.position.set(0,1,1.8),n.add(t,i),n.traverse(r=>{r.isMesh&&(r.castShadow=!0,Ft(r,r.geometry))}),n.scale.set(.6,.6,.6),n}function PR(){let n=new He,e=new _e({color:"#0984e3"}),t=new _e({color:"#ffffff"}),i=new J(new ce(4,3,8),e),r=new J(new ce(3.8,1,7.8),t);r.position.y=-1;let s=new J(new ce(3,.5,2),e);s.position.set(0,0,-4.5);let o=new J(new ce(2,.5,1.5),e);o.position.set(-2.5,-.5,1);let a=new J(new ce(2,.5,1.5),e);return a.position.set(2.5,-.5,1),n.add(i,r,s,o,a),n.traverse(c=>{c.isMesh&&(c.castShadow=!0,Ft(c,c.geometry))}),n}function BR(){let n=new He,e=new _e({color:"#b2bec3"}),t=new _e({color:"#74b9ff"}),i=new J(new ce(3,15,3),e);i.position.y=7.5;let r=new J(new ce(6,4,6),t);r.position.y=17;let s=new J(new ce(.5,4,.5),e);s.position.set(0,2,0);let o=new He;return o.position.y=19,o.add(s),n.add(i,r,o),n.traverse(a=>{a.isMesh&&(a.castShadow=!0,Ft(a,a.geometry))}),n.userData.antenna=o,n}function kR(){let n=new He,e=new _e({color:"#fbc531"}),t=new _e({color:"#2d3436"}),i=["#e17055","#0984e3","#00b894","#d63031"],r=new ce(1,10,1),s=new J(r,e);s.position.set(-3,5,-2);let o=new J(r,e);o.position.set(-3,5,2);let a=new J(r,e);a.position.set(3,5,-2);let c=new J(r,e);c.position.set(3,5,2);let l=new ce(16,1.5,2),h=new J(l,e);h.position.set(2,10.75,0);let u=new J(new ce(1.5,1.5,1.5),t);u.position.set(0,9,1.5);let d=new He;d.position.set(4,10,0);let f=new J(new ce(.1,5,.1),t);f.position.y=-2.5;let p=new J(new ce(3,.5,1.5),t);p.position.y=-5;let y=new _e({color:i[0]}),x=new J(new ce(2.8,1.2,1.3),y);x.position.y=-5.85,d.add(f,p,x);let g=new He;for(let m=0;m<3;m++)for(let v=0;v<2;v++)if(Math.random()>.3){let E=new _e({color:i[Math.floor(Math.random()*i.length)]}),T=new J(new ce(2.8,1.2,1.3),E);T.position.set(-2,.6+v*1.2,(m-1)*1.5),g.add(T)}return n.add(s,o,a,c,h,u,d,g),n.traverse(m=>{m.isMesh&&(m.castShadow=!0,Ft(m,m.geometry))}),n.userData.spreader=d,n.scale.set(.8,.8,.8),n}var qe,Je,ze,rt;function NR(){if(!le||!le.vehicles)return;let n=Object.fromEntries(le.vehicles.map(D=>[D.type,D])),e=new _e({color:16777215}),t=new _e({color:16729943}),i=new _e({color:2962486});qe=new He;let r=new ce(4,4,16),s=new J(r,e),o=new ce(22,1,4),a=new J(o,e);a.position.set(0,-.5,1);let c=new ce(8,.8,2),l=new J(c,e);l.position.set(0,0,-6);let h=new ce(1,4,3),u=new J(h,t);u.position.set(0,2.5,-6);let d=new J(new ce(3,1.5,2),i);d.position.set(0,2,5),qe.add(s,a,l,u,d),qe.traverse(D=>{D.isMesh&&(D.castShadow=!0,Ft(D,D.geometry))}),qe.position.set(-300,100,-100),qe.userData.speed=n.plane?.speed||.004,on.add(qe),Je=new He;let f=new _e({color:"#fbc531"}),p=new ce(4,4,6),y=new J(p,f),x=new ce(1.5,1.5,5),g=new J(x,f);g.position.set(0,0,-5);let m=new J(new ce(16,.2,1),i),v=new J(new ce(1,.2,16),i),E=new He;E.add(m,v),E.position.set(0,2.5,0),Je.add(y,g,E),Je.traverse(D=>{D.isMesh&&(D.castShadow=!0,Ft(D,D.geometry))}),Je.userData={rotor:E,speed:n.heli?.speed||.05},Je.position.set(0,60,0),on.add(Je),ze=new He;let T=new _e({color:"#dfe6e9"}),w=new _e({color:"#d63031"}),R=new _e({color:"#2d3436"});for(let D=0;D<3;D++){let C=new He,j=new J(new ce(4,4,12),T);j.position.y=2;let Z=new J(new ce(4.2,.5,12.1),w);Z.position.y=1.5;let G=new J(new ce(4.1,1.5,10),R);G.position.y=2.5,C.add(j,Z,G),C.traverse(te=>{te.isMesh&&(te.castShadow=!0,te.receiveShadow=!0,Ft(te,te.geometry))}),C.position.z=D*-13,ze.add(C)}ze.userData.speed=n.mrt?.speed||.008,ze.position.set(0,.5,0),on.add(ze),rt=new He;let P=new _e({color:"#2d3436"}),k=new _e({color:"#b2bec3"}),U=new _e({color:"#ffffff"}),z=new J(new ce(16,6,40),P);z.position.y=-3;let O=new J(new ce(15,1,38),k);O.position.y=.5;let I=new J(new ce(12,8,8),U);I.position.set(0,5,-12),rt.add(z,O,I);let B=["#e17055","#0984e3","#00b894","#d63031","#fbc531"];for(let D=0;D<4;D++)for(let C=0;C<3;C++)for(let j=0;j<2;j++)if(Math.random()>.2){let Z=new _e({color:B[Math.floor(Math.random()*B.length)]}),G=new J(new ce(3.5,2.5,6),Z);G.position.set(-4+D*2.6,2.2+j*2.5,10-C*6.5),rt.add(G)}rt.traverse(D=>{D.isMesh&&(D.castShadow=!0,Ft(D,D.geometry))}),rt.position.set(-200,-2,150),rt.userData.speed=n.ship?.speed||.002,on.add(rt),Dh.plane=qe,Dh.heli=Je,Dh.mrt=ze,Dh.ship=rt}var jx=new URL(Ai,window.location.href).href;fetch(jx).then(n=>{if(!n.ok)throw new Error("Failed to load board file: "+jx);return n.json()}).then(n=>{if(le=n.scene,NR(),document.getElementById("game-title").innerText=n.name||"Monopoly",document.getElementById("game-subtitle").innerText=n.subtitle||"Geospatial Voxel World",document.title=n.name||"Monopoly",Wa=le.polygons||[],Gx=le.mainPolygonIndex||0,qa=le.bounds.minLon,Vx=le.bounds.maxLon,Xa=le.bounds.minLat,Wx=le.bounds.maxLat,Ph=Vx-qa,Bh=Wx-Xa,ri=le.grid.width,si=le.grid.height,sr=le.grid.voxelSize,le.colors&&le.colors.groups&&(Yx=le.colors.groups),le.players){Ce=le.players;let g=document.getElementById("players-list");g.innerHTML="",Ce.forEach((m,v)=>{let E=document.createElement("div");E.id=`player-${v}`,E.className="player-stat",E.innerHTML=`<div class="color-box" style="background:${m.css}"></div> <span id="name-${v}">${m.name}</span>: $<span id="cash-${v}">${m.cash}</span>`,g.appendChild(E)})}if(le.themes){let g=document.getElementById("theme-select");g.innerHTML="",Object.keys(le.themes).forEach(m=>{let v=document.createElement("option");v.value=m,v.textContent=m.charAt(0).toUpperCase()+m.slice(1).replace("_"," "),g.appendChild(v)})}if(le.weathers){let g=document.getElementById("weather-select");g.innerHTML="",Object.keys(le.weathers).forEach(m=>{let v=document.createElement("option");v.value=m,v.textContent=m.charAt(0).toUpperCase()+m.slice(1),g.appendChild(v)})}Rp=Math.floor(ri/sr),Lp=Math.floor(si/sr),qx=Rp*Lp;let e=new ce(sr,sr*4,sr),t=new _e({color:16777215});oi=new Xo(e,t,qx),oi.receiveShadow=!0,oi.castShadow=!0;let i=new We,r=new ue;go=0,kp.length=0;for(let g=0;g<Rp;g++)for(let m=0;m<Lp;m++){let v=g*sr-ri/2,E=m*sr-si/2,T=qa+(v+ri/2)/ri*Ph,w=Xa+(-E+si/2)/si*Bh,R=!1;for(let P=0;P<Wa.length;P++)if(zx([T,w],Wa[P])){R=!0;break}if(R){let P=Math.random()*.8;i.position.set(v,-4.5+P,E),i.updateMatrix(),oi.setMatrixAt(go,i.matrix);let k=Math.random();k>.8?r.setHex(12246104):k>.3?r.setHex(8966236):r.setHex(6991948),k>.95&&r.setHex(16180621),kp.push(r.getHex()),oi.setColorAt(go,r),go++}}oi.count=go,xn.add(oi),document.getElementById("loading").style.display="none",window.__boardFeatures=n.features,n.features.sort((g,m)=>g.properties.index-m.properties.index),n.features.forEach(g=>{let m=g.geometry.coordinates,v=g.properties,E=(m[0]-qa)/Ph,T=(m[1]-Xa)/Bh,w=E*ri-ri/2,R=-(T*si-si/2),P=v.price?v.price/10:12,k=10,U=10;v.type==="station"&&(k=14,U=14),v.type==="vehicle"&&(k=8,U=8);let z=Yx[v.group]||"#dddddd",O=TR(k,P,U,z);O.position.set(w,0,R),xn.add(O);let I=new ce(k+6,.6,U+6),B=new _e({color:"#f1f2f6"}),D=new J(I,B);D.position.set(w,.3,R),D.receiveShadow=!0,xn.add(D);let C=new ce(k+6,P+4,U+6),j=new mr({visible:!1}),Z=new J(C,j);if(Z.position.set(0,P/2,0),Z.userData={props:v,baseY:0,targetY:0,colorHex:z,parentGroup:O},O.add(Z),Qa.push(Z),v.id==="zoo"){let G=new He,te=LR();te.position.set(-6,0,-6);let ie=CR();ie.position.set(6,0,-6);let pe=IR();pe.position.set(-6,0,6);let ye=DR();ye.position.set(6,0,6),G.add(te,ie,pe,ye),G.userData={type:"zoo",children:[te,ie,pe,ye]},O.add(G),ja.push(G)}if(v.id==="oceanarium"){let G=PR();G.position.set(0,14,0),G.userData={type:"whale"},O.add(G),ja.push(G)}if(v.id==="changi"){let G=BR();G.position.set(-8,0,-8),G.userData={type:"tower",antenna:G.userData.antenna},O.add(G),ja.push(G)}if(v.id==="port"){let G=kR();G.position.set(0,0,0),G.userData={type:"port",spreader:G.userData.spreader},O.add(G),ja.push(G)}je.push({mesh:Z,props:v,owner:void 0,position:new b(w,P,R)})});let s=new _e({color:"#636e72"}),o=new _e({color:"#ffffff"});for(let g=0;g<je.length;g++){let m=je[g].position,v=je[(g+1)%je.length].position,E=m.distanceTo(v),T=new ce(8,.4,E),w=new J(T,s);w.position.set((m.x+v.x)/2,.2,(m.z+v.z)/2),w.lookAt(v.x,.2,v.z),w.receiveShadow=!0,xn.add(w);let R=Math.floor(E/6);for(let P=1;P<R;P++){let k=new J(new ce(.8,.5,3),o),U=P/R;k.position.lerpVectors(m,v,U),k.position.y=.25,k.lookAt(v.x,.25,v.z),k.receiveShadow=!0,xn.add(k)}}let a=new _e({color:"#2ecc71"}),c=new _e({color:"#d35400"}),l=le.nature&&le.nature.trees?le.nature.trees.count:80;for(let g=0;g<l;g++){let m=(Math.random()-.5)*ri,v=(Math.random()-.5)*si,E=qa+(m+ri/2)/ri*Ph,T=Xa+(-v+si/2)/si*Bh,w=!1;if(Wa.length>0&&zx([E,T],Wa[Gx])&&(w=!0),!w)continue;let R=new He,P=new J(new ce(1.5,3,1.5),c);P.position.y=1.5,P.castShadow=!0,P.receiveShadow=!0;let k=new ce(5,5,5),U=new J(k,a);U.position.y=5.5,U.castShadow=!0,U.receiveShadow=!0,Ft(U,k),R.add(P),R.add(U);let z=.7+Math.random()*.5;R.scale.set(z,z,z),R.position.set(m,0,v),xn.add(R)}let h=new _e({color:"#ffffff"}),u=le.nature&&le.nature.clouds?le.nature.clouds.count:20;for(let g=0;g<u;g++){let m=new He;for(let v=0;v<4;v++){let E=new ce(10+Math.random()*10,6+Math.random()*4,10+Math.random()*10),T=new J(E,h);T.position.set((Math.random()-.5)*10,(Math.random()-.5)*4,(Math.random()-.5)*10),T.castShadow=!0,Ft(T,E),m.add(T)}m.position.set((Math.random()-.5)*400,60+Math.random()*40,(Math.random()-.5)*400),m.userData.speed=.05+Math.random()*.05,on.add(m),rw.push(m)}let d=le.colors.cars||["#ff7675","#fdcb6e","#74b9ff","#55efc4","#a29bfe","#ffeaa7","#ff9ff3"];for(let g=0;g<15;g++){let m=AR(d[g%d.length]);m.userData={currentNode:g*2%je.length,progress:Math.random(),speed:.002+Math.random()*.002,bounceOffset:Math.random()*Math.PI*2},xn.add(m),sw.push(m)}ze.userData={currentNode:0,progress:0,speed:.008};let f=le.colors.citizens||["#81ecec","#fab1a0","#74b9ff","#a29bfe","#ffeaa7"],p=le.nature?.citizens?.count||30,y=le.nature?.citizens?.speed||.001;for(let g=0;g<p;g++){let m=RR(f[g%f.length]);Object.assign(m.userData,{currentNode:Math.floor(Math.random()*je.length),progress:Math.random(),speed:y+Math.random()*.001,baseSpeed:y+Math.random()*.001,bounceOffset:Math.random()*Math.PI*2,sideOffset:(Math.random()>.5?1:-1)*(4+Math.random()*2),sentiment:"neutral"}),xn.add(m),Tt.push(m)}Ce.forEach(g=>{let m=new He,v=new _e({color:g.colorHex}),E=new J(new ce(4,1.5,4),v);E.position.y=.75;let T=new J(new ce(2.5,4,2.5),v);T.position.y=3.5;let w=new J(new ce(3.5,3.5,3.5),v);w.position.y=7.25,m.add(E),m.add(T),m.add(w),m.traverse(R=>{R.isMesh&&(R.castShadow=!0,R.receiveShadow=!0,Ft(R,R.geometry))}),g.mesh=m,xn.add(m)}),bt.get("players")||ai(),Gh();let x=document.getElementById("dice-btn");x.style.backgroundColor=Ce[Ge].css,x.disabled=pt!==Ge}).catch(n=>{console.error("Failed to load JSON:",n),document.getElementById("loading").innerText="Error loading data"});var wo=document.getElementById("dice-btn"),ow=document.getElementById("dice-result"),$x=0;function ai(){if(pt===-1)return;let n=Ce.map(t=>({phone:t.phone,name:t.name,cash:t.cash,pos:t.pos}));bt.set("players",n);let e={};je.forEach((t,i)=>{t.owner!==void 0&&(e[i]=t.owner)}),bt.set("owners",e),bt.set("currentPlayerIndex",Ge)}function UR(n){let e=!1,t=n.map(i=>({...i}));if(Wt){let i=t.findIndex(r=>r.phone===Wt.phone);if(i!==-1)pt=i,t[i].name!==Wt.name&&(t[i].name=Wt.name,Ce[i]&&(Ce[i].name=Wt.name),e=!0);else{let r=t.findIndex(s=>!s.phone||sn==="ai"&&s.phone.startsWith("ai-"));r===-1&&sn==="ai"&&(r=0),r!==-1?(t[r].phone=Wt.phone,t[r].name=Wt.name,Ce[r]&&(Ce[r].phone=Wt.phone,Ce[r].name=Wt.name),pt=r,e=!0):pt=-1}}else{let i=t.findIndex(r=>!r.phone||r.phone==="local");if(i===-1&&sn==="ai"&&(i=0),i!==-1)t[i].phone="local",t[i].name="\u2600\uFE0F airvio - joohwee",Ce[i]&&(Ce[i].phone="local",Ce[i].name="\u2600\uFE0F airvio - joohwee"),pt=i,e=!0;else{let r=t.findIndex(s=>s.phone==="local");r!==-1&&(pt=r)}}if(sn==="ai")for(let i=0;i<3;i++)i!==pt&&(!t[i].phone||!t[i].phone.startsWith("ai-"))&&(t[i].phone=`ai-${i}`,t[i].name=`FlowinFish \u{1F41F} ${i}`,Ce[i]&&(Ce[i].phone=`ai-${i}`,Ce[i].name=`FlowinFish \u{1F41F} ${i}`),e=!0);return e&&bt.set("players",t),e}function Np(){if(sn!=="ai"||pt===Ge||Gn||pt===-1)return;Ce[Ge].phone&&Ce[Ge].phone.startsWith("ai-")&&setTimeout(()=>{let e=bt.get("lastRoll"),t=e?Date.now()-e.timestamp:9999;if(Ge===pt||Gn||t<2e3)return;let i=Math.floor(Math.random()*6)+1,r=Math.floor(Math.random()*6)+1,s={playerIndex:Ge,roll1:i,roll2:r,oldPos:Ce[Ge].pos,timestamp:Date.now(),clientId:Wp};bt.set("lastRoll",s)},1500)}function Gh(){let n=!1,e=bt.get("players");e&&(UR(e)&&(e=bt.get("players")),e.forEach((s,o)=>{Ce[o]&&(Ce[o].phone=s.phone,Ce[o].name=s.name||`Player ${o+1}`,Ce[o].cash=s.cash,Ce[o].pos!==s.pos&&(Ce[o].pos=s.pos,n=!0))}));let t=bt.get("owners");t&&Object.keys(t).forEach(r=>{je[r]&&(je[r].owner=t[r])});let i=bt.get("currentPlayerIndex");if(i!==void 0){let r=i!==Ge;Ge=i,r?(document.getElementById("ui").style.display="none",Gn||(wo.disabled=pt!==Ge),sn==="ai"&&Ge!==pt&&Np()):sn==="ai"&&Ge!==pt&&!Gn&&!document.getElementById("ui").style.display.includes("block")&&Np(),wo.style.backgroundColor=Ce[Ge].css,ow.innerText=`${Ce[Ge].name}'s Turn`}cw(),!Gn&&n&&lw()}function Xp(){wn.schedule("yjs:sync",Gh,50)}function aw(){wn.schedule("yjs:sync:deferred",Gh,120)}bt.observe(n=>{if((n.keysChanged.has("players")||n.keysChanged.has("owners")||n.keysChanged.has("currentPlayerIndex"))&&Xp(),n.keysChanged.has("lastRoll")){let e=bt.get("lastRoll");e&&e.timestamp>$x&&($x=e.timestamp,FR(e))}});Vp.on("sync",n=>{(typeof n=="object"?n.synced:n)&&(bt.get("players")?(Xp(),aw()):ai())});Vp.on("synced",n=>{(typeof n=="object"?n.synced:n)&&(bt.get("players")?(Xp(),aw()):ai())});function yo(n){let e=document.getElementById("message-box");e.innerText=n,e.style.display="block",e.style.animation="none",e.offsetWidth,e.style.animation="fadeInOut 3s forwards",setTimeout(()=>{e.style.display="none"},3e3)}var Ti={cash:[],name:[],pDiv:[]};function cw(){Ce.forEach((n,e)=>{Ti.cash[e]||(Ti.cash[e]=document.getElementById(`cash-${e}`)),Ti.name[e]||(Ti.name[e]=document.getElementById(`name-${e}`)),Ti.pDiv[e]||(Ti.pDiv[e]=document.getElementById(`player-${e}`));let t=Ti.cash[e],i=String(n.cash);t&&t.innerText!==i&&(t.innerText=i);let r=Ti.name[e];if(r){let o=n.name;n.name&&n.name.includes("FlowinFish")&&(o=`<a href="https://github.com/bytedance/deer-flow.git" target="_blank" style="color: inherit; text-decoration: underline;">${n.name}</a>`),Wt&&n.phone===Wt.phone&&(o+=" (You)"),r.innerHTML!==o&&(r.innerHTML=o)}let s=Ti.pDiv[e];s&&(e===Ge?s.classList.contains("active-turn")||s.classList.add("active-turn"):s.classList.contains("active-turn")&&s.classList.remove("active-turn"))})}function lw(){let n=new Map;Ce.forEach(e=>{e.mesh&&(n.has(e.pos)||n.set(e.pos,[]),n.get(e.pos).push(e))}),n.forEach((e,t)=>{let i=je[t];i&&e.forEach((r,s)=>{let o=s/e.length*Math.PI*2,a=e.length>1?5:0,c=Math.cos(o)*a,l=Math.sin(o)*a,h=i.position.x+c,u=i.position.y,d=i.position.z+l;(Math.abs(r.mesh.position.x-h)>.01||Math.abs(r.mesh.position.z-d)>.01)&&r.mesh.position.set(h,u,d)})})}wo.addEventListener("click",()=>{if(Gn||je.length===0||pt!==Ge)return;let n=Math.floor(Math.random()*6)+1,e=Math.floor(Math.random()*6)+1,t={playerIndex:Ge,roll1:n,roll2:e,oldPos:Ce[Ge].pos,timestamp:Date.now(),clientId:Wp};bt.set("lastRoll",t)});function FR(n){if(je.length===0)return;let{playerIndex:e,roll1:t,roll2:i,oldPos:r,clientId:s}=n,o=t+i,a=Ce[e];ow.innerText=`${a.name} rolled: ${o} \u{1F3B2}`,wo.disabled=!0;let c=0;Gn=!0,document.getElementById("ui").style.display="none";let l=(r+o)%je.length,h=s===Wp;r+o>=je.length&&(h&&(a.cash+=200,ai()),yo(`${a.name} passed GO! Collected $200.`),cw());function u(){if(c>=o){Gn=!1,a.pos=l,lw(),h&&(ai(),OR(je[l]));return}c++;let d=(r+c)%je.length,f=je[d].position,p=22,y=200;new bl(a.mesh.position).to({x:f.x,z:f.z},y*2).easing(wi.Linear.None).start(),new bl(a.mesh.position).to({y:f.y+p},y).easing(wi.Quadratic.Out).onComplete(()=>{new bl(a.mesh.position).to({y:f.y},y).easing(wi.Quadratic.In).onComplete(u).start()}).start()}u()}function OR(n){let e=Ce[Ge],t=n.props,i=document.getElementById("ui");document.getElementById("prop-name").innerText=t.name,document.getElementById("prop-type").innerText=t.type.toUpperCase(),document.getElementById("prop-price").innerText=`Price: $${t.price}`,document.getElementById("prop-group").innerText=`Group: ${t.group}`;let r=document.getElementById("prop-owner"),s=document.getElementById("actions");if(s.innerHTML="",i.style.borderLeftColor=n.mesh.userData.colorHex,i.style.display="block",n.mesh.userData.parentGroup.position.y+=4,n.owner===void 0)if(r.innerText="Owner: None",r.style.color="#636e72",pt===Ge){if(e.cash>=t.price){let a=document.createElement("button");a.className="btn btn-buy",a.innerText=`Buy for $${t.price}`,a.onclick=()=>{e.cash-=t.price,n.owner=Ge,yo(`${e.name} bought ${t.name}!`),ai(),Xr()},s.appendChild(a)}let o=document.createElement("button");o.className="btn btn-pass",o.innerText="Pass",o.onclick=Xr,s.appendChild(o)}else if(sn==="ai"){let o=document.createElement("p");o.style.fontWeight="bold",o.style.color="#636e72",o.innerText="FlowinFish \u{1F41F} is thinking...",s.appendChild(o),setTimeout(()=>{e.cash>=t.price+200?(e.cash-=t.price,n.owner=Ge,yo(`${e.name} bought ${t.name}!`)):yo(`${e.name} passed on ${t.name}.`),ai(),Xr()},1500)}else{let o=document.createElement("p");o.style.fontWeight="bold",o.style.color="#636e72",o.innerText="Waiting for player to decide...",s.appendChild(o)}else if(n.owner===Ge)if(r.innerText=`Owner: ${Ce[n.owner].name}`,r.style.color=e.css,pt===Ge){let o=document.createElement("button");o.className="btn btn-end",o.innerText="End Turn",o.onclick=Xr,s.appendChild(o)}else sn==="ai"&&setTimeout(()=>{Xr()},1e3);else{let o=Ce[n.owner];if(r.innerText=`Owner: ${o.name}`,r.style.color=o.css,pt===Ge){let a=Math.floor(t.price*.2);e.cash-=a,o.cash+=a,yo(`${e.name} paid $${a} rent to ${o.name}.`),ai();let c=document.createElement("button");c.className="btn btn-end",c.innerText="End Turn",c.onclick=Xr,s.appendChild(c)}else if(sn==="ai"){let a=Math.floor(t.price*.2);setTimeout(()=>{e.cash-=a,o.cash+=a,yo(`${e.name} paid $${a} rent to ${o.name}.`),ai(),Xr()},1500)}}}function Xr(){document.getElementById("ui").style.display="none",Ge=(Ge+1)%Ce.length,wo.disabled=pt!==Ge,ai(),sn==="ai"&&Ge!==pt&&Np()}var ot=null;window.addEventListener("mousemove",n=>{Li.x=n.clientX/window.innerWidth*2-1,Li.y=-(n.clientY/window.innerHeight)*2+1,xo.setFromCamera(Li,vn);let e=xo.intersectObjects(Qa);if(e.length>0){document.body.style.cursor="pointer";let t=e[0].object;ot!==t&&(ot&&(ot.userData.targetY=ot.userData.baseY),ot=t,ot.userData.targetY=ot.userData.baseY+5)}else document.body.style.cursor="default",ot&&(ot.userData.targetY=ot.userData.baseY,ot=null)});window.addEventListener("click",n=>{if(n.target.tagName==="BUTTON")return;Li.x=n.clientX/window.innerWidth*2-1,Li.y=-(n.clientY/window.innerHeight)*2+1,xo.setFromCamera(Li,vn);let e=xo.intersectObjects(Qa),t=null;if(e.length>0&&(t=e[0].object),t&&!Gn&&document.getElementById("actions").innerHTML===""){let i=t.userData.props,r=je.find(s=>s.props.id===i.id);if(r){let s=document.getElementById("ui");document.getElementById("prop-name").innerText=i.name,document.getElementById("prop-type").innerText=i.type.toUpperCase(),document.getElementById("prop-price").innerText=`Price: $${i.price}`,document.getElementById("prop-group").innerText=`Group: ${i.group}`;let o=document.getElementById("prop-owner");r.owner===void 0?(o.innerText="Owner: None",o.style.color="#636e72"):(o.innerText=`Owner: ${Ce[r.owner].name}`,o.style.color=Ce[r.owner].css),s.style.borderLeftColor=r.mesh.userData.colorHex,s.style.display="block",r.mesh.userData.parentGroup.position.y+=5}}else!t&&!n.target.closest("#ui")&&document.getElementById("actions").innerHTML===""&&(document.getElementById("ui").style.display="none",ot&&(ot.userData.targetY=ot.userData.baseY,ot=null))});window.addEventListener("touchstart",n=>{if(!(n.target.tagName==="BUTTON"||n.target.tagName==="INPUT")&&n.touches.length>0){Li.x=n.touches[0].clientX/window.innerWidth*2-1,Li.y=-(n.touches[0].clientY/window.innerHeight)*2+1,xo.setFromCamera(Li,vn);let e=xo.intersectObjects(Qa);if(e.length>0){let t=e[0].object;if(ot!==t&&(ot&&(ot.userData.targetY=ot.userData.baseY),ot=t,ot.userData.targetY=ot.userData.baseY+5),!Gn&&document.getElementById("actions").innerHTML===""){let i=t.userData.props,r=je.find(s=>s.props.id===i.id);if(r){let s=document.getElementById("ui");document.getElementById("prop-name").innerText=i.name,document.getElementById("prop-type").innerText=i.type.toUpperCase(),document.getElementById("prop-price").innerText=`Price: $${i.price}`,document.getElementById("prop-group").innerText=`Group: ${i.group}`;let o=document.getElementById("prop-owner");r.owner===void 0?(o.innerText="Owner: None",o.style.color="#636e72"):(o.innerText=`Owner: ${Ce[r.owner].name}`,o.style.color=Ce[r.owner].css),s.style.borderLeftColor=r.mesh.userData.colorHex,s.style.display="block"}}}else!n.target.closest("#ui")&&document.getElementById("actions").innerHTML===""&&(document.getElementById("ui").style.display="none",ot&&(ot.userData.targetY=ot.userData.baseY,ot=null))}},{passive:!0});window.addEventListener("resize",()=>{let n=window.innerWidth/window.innerHeight;vn.left=-or*n,vn.right=or*n,vn.top=or,vn.bottom=-or,vn.updateProjectionMatrix(),ar.setSize(window.innerWidth,window.innerHeight)});var HR=document.getElementById("superagent-btn"),Hh=document.getElementById("superagent-panel"),jr=document.getElementById("superagent-input"),zR=document.getElementById("superagent-send"),Cp=document.getElementById("superagent-chat"),Zx=document.getElementById("superagent-upload-btn"),kh=document.getElementById("superagent-file"),Jx=document.getElementById("chat-bubbles-container");HR.addEventListener("click",()=>{Hh.style.display=Hh.style.display==="none"?"flex":"none"});function GR(){let n={ttlMs:5e3},e=le?.assets?.ui?.bubble;return!e||typeof e!="object"?n:{ttlMs:Number.isFinite(Number(e.ttlMs))?Number(e.ttlMs):n.ttlMs}}function Up(n,e){return typeof n!="string"||!n?"":n.replace(/\{(\w+)\}/g,(t,i)=>{let r=e?.[i];return r==null?"":String(r)})}function Fp(n){let e=le?.elements?.nature?.citizens?.bubbleTemplates;return e&&typeof e=="object"&&typeof e[n]=="string"?e[n]:null}function VR(n){if(!n)return null;let e=le?.elements?.points_of_interest?.[n];return e&&typeof e=="object"?e.label||e.name||n:(Array.isArray(window.__boardFeatures)?window.__boardFeatures:[]).find(i=>i?.properties?.id===n)?.properties?.name||n}function Oh(n,e,t){if(!Jx||!n)return;n.userData.bubbleEl&&n.userData.bubbleEl.remove();let i=document.createElement("div");i.className="citizen-bubble",i.innerText=e,Jx.appendChild(i),n.userData.bubbleEl=i;let r=Number.isFinite(Number(t))?Number(t):GR().ttlMs;n.userData.bubbleExpiry=Date.now()+r,setTimeout(()=>i.style.opacity=1,10)}function Ri(n){if(!Tt||Tt.length===0)return;let e=typeof n=="string"?{snippet:n,source:"react"}:n||{},t=String(e.snippet||"").trim(),i=t.length>25?t.substring(0,25).trim()+"...":t,r=e.domain?String(e.domain):"",s=e.templateId||(e.source==="file"?"react:file":e.source==="url"?"react:url":"react:heard"),o=Fp(s)||"Did you hear about \u201C{snippet}\u201D?",a=Up(o,{snippet:i,domain:r,poi:e.poi||"",status:e.status||"",theme:e.theme||i,weather:e.weather||i}),c=Number.isFinite(Number(e.count))?Number(e.count):3;[...Tt].sort(()=>.5-Math.random()).slice(0,Math.max(1,Math.min(6,c))).forEach(h=>Oh(h,a,e.durationMs))}async function Ka(n,{runId:e}={}){let t=Za(n);vR(t.scenePatch);let i=t.steps||[],r=typeof e=="number"?e:null,s=()=>r!==null&&r!==rn,o=0;for(let a of i){if(!a||typeof a!="object")continue;if(s())return;let c=(Number(a.timestamp)-o)*1e3;if(Number.isFinite(c)&&c>0&&await new Promise(h=>setTimeout(h,c)),s())return;let l=a.action;if(l==="log")console.log(`[FlowinFish Script] ${a.message}`);else if(l==="chat")Ee(a.message,!0);else if(l==="sentiment")a.message&&Ee(a.message,!1),a.value==="happy"?un("make citizens happy",!0):a.value==="neutral"&&un("make citizens normal",!0);else if(l==="bubble"){if(Tt&&Tt.length>0){let h=Tt[Math.floor(Math.random()*Tt.length)];Oh(h,a.message,a.durationMs||5e3)}}else if(l==="react")a.message&&Ri({snippet:a.message,source:"react",count:a.count,durationMs:a.durationMs});else if(l==="file")(a.snippet||a.message)&&Ri({snippet:a.snippet||a.message,source:"file",count:a.count,durationMs:a.durationMs});else if(l==="url")(a.snippet||a.message||a.domain)&&Ri({snippet:a.snippet||a.message||"",domain:a.domain||"",source:"url",count:a.count,durationMs:a.durationMs});else if(l==="bubbleBurst"){let h=a.message||a.snippet||"";Ri({snippet:h,templateId:a.templateId,source:a.source||"react",count:a.count??4,durationMs:a.durationMs})}else if(l==="poiBubble"){let h=a.poiId||a.poi||"",u=VR(h)||h,d=a.templateId||"poi:visit",f=Fp(d)||"Let\u2019s go to {poi}!",p=Up(f,{poi:u});if(Tt&&Tt.length>0){let y=Tt[Math.floor(Math.random()*Tt.length)];Oh(y,p,a.durationMs)}}else if(l==="interact"){let h=(a.type||a.value||"").toLowerCase();h==="rolldice"||h==="roll"?un("roll dice",!0):h==="buy"?un("buy",!0):h==="pass"?un("pass",!0):h==="end"&&un("end",!0)}else if(l==="swarm"){let h=(a.op||a.value||"").toLowerCase();if(h==="burst")Ri({snippet:a.snippet||a.message||"Swarm burst",templateId:a.templateId||"swarm:burst",source:"react",count:a.count??5,durationMs:a.durationMs});else if(h==="status"){let u=Fp(a.templateId||"swarm:status")||"Swarm status: {status}",d=Up(u,{status:a.status||a.message||"ok"});if(Tt&&Tt.length>0){let f=Tt[Math.floor(Math.random()*Tt.length)];Oh(f,d,a.durationMs)}}else h==="happy"?un("make citizens happy",!0):h==="neutral"&&un("make citizens normal",!0)}else if(l==="setTheme"){let h=a.value||a.theme;h&&document.getElementById("theme-select")&&(document.getElementById("theme-select").value=h,Vh(),a.bubble&&Ri({snippet:String(h),theme:String(h),templateId:"theme:change",source:"react",count:2,durationMs:a.durationMs}))}else if(l==="setWeather"){let h=a.value||a.weather;h&&document.getElementById("weather-select")&&(document.getElementById("weather-select").value=h,Wh(),a.bubble&&Ri({snippet:String(h),weather:String(h),templateId:"weather:change",source:"react",count:2,durationMs:a.durationMs}))}else if(l==="vehicle"){let h=(a.id||a.vehicle||"").toLowerCase(),u=(a.op||a.value||"").toLowerCase();(h==="train"||h==="mrt")&&(u==="stop"&&ze&&(ze.userData.speed=0),u==="start"&&ze&&(ze.userData.speed=le?.vehicles?.find(d=>d.type==="mrt")?.speed||.008),u==="faster"&&ze&&(ze.userData.speed*=2)),h==="plane"&&(u==="stop"&&qe&&(qe.userData.speed=0),u==="start"&&qe&&(qe.userData.speed=le?.vehicles?.find(d=>d.type==="plane")?.speed||.004),u==="faster"&&qe&&(qe.userData.speed*=2)),h==="heli"&&(u==="stop"&&Je&&(Je.userData.speed=0),u==="start"&&Je&&(Je.userData.speed=le?.vehicles?.find(d=>d.type==="heli")?.speed||.05)),h==="ship"&&(u==="stop"&&rt&&(rt.userData.speed=0),u==="start"&&rt&&(rt.userData.speed=le?.vehicles?.find(d=>d.type==="ship")?.speed||.002))}else l==="command"&&un(a.value,!0);o=Number(a.timestamp)||o}}Zx&&kh&&(Zx.addEventListener("click",()=>{kh.click()}),kh.addEventListener("change",n=>{let e=n.target.files[0];if(!e)return;let t=new FileReader;t.onload=async i=>{let r=i.target.result;if(e.name.endsWith(".json"))try{let s=Hp(r),o=Za(s);if(Array.isArray(o.steps)&&o.steps.length>0){Ee(`\u{1F4CE} Uploaded script: ${e.name}. Starting simulation...`,!0),rn+=1,await Ka(s,{runId:rn});return}}catch(s){console.error("JSON parsing error:",s)}Ee(`\u{1F4CE} Uploaded: ${e.name}`,!0),setTimeout(()=>{let s=r.toLowerCase();Ri({snippet:r,source:"file",count:3}),s.includes("storm")||s.includes("rain")||s.includes("typhoon")?(un("change weather to stormy",!0),Ee(`The document "${e.name}" mentioned bad weather. I've updated the city!`,!1)):s.includes("happy")||s.includes("celebrate")||s.includes("party")||s.includes("success")?(un("make citizens happy",!0),Ee(`The news in "${e.name}" is very positive! The citizens are celebrating! \u{1F389}`,!1)):s.includes("stop")||s.includes("halt")||s.includes("breakdown")?(un("stop train",!0),Ee(`The report "${e.name}" mentioned a breakdown. I've halted the MRT.`,!1)):Ee(`I've read "${e.name}". The contents seem neutral. The city will continue as normal.`,!1)},800)},t.readAsText(e),kh.value=""}));function Ee(n,e){let t=document.createElement("div");t.style.padding="8px 12px",t.style.borderRadius="12px",t.style.border="2px solid #2d3436",t.style.maxWidth="85%",t.style.fontSize="14px",t.style.fontWeight="bold",t.style.color="#2d3436",t.style.marginTop="4px",e?(t.style.background="#e1b12c",t.style.alignSelf="flex-end"):(t.style.background="white",t.style.alignSelf="flex-start"),t.innerText=n,Cp.appendChild(t),Cp.scrollTop=Cp.scrollHeight}async function un(n,e=!1){e||Ee(n,!0);let t=n.toLowerCase();if(t.includes("run script")||t.includes("start simulation")){try{let r=await zp("script-0000.json",{ttlMs:1e4});rn+=1;let s=rn;Ee("Starting AI Agent Boom Simulation...",!1),await Ka(r,{runId:s})}catch{Ee("Error loading simulation script.",!1)}return}let i=t.match(/https?:\/\/[^\s]+/);if(i&&!e){let r=i[0];setTimeout(()=>{let s=r.split("//")[1].split("/")[0],o=`I read an article from ${s}`;Ri({snippet:o,domain:s,source:"url",count:3}),Ee("I've analyzed the contents of the URL. The citizens are talking about it!",!1)},1e3);return}setTimeout(()=>{let r=s=>le?.commands?.[s]?.some(o=>t.includes(o));if(r("roll"))pt!==Ge?Ee("It's not your turn right now!",!1):Gn?Ee("Wait for the animation to finish.",!1):(Ee("Rolling the dice for you! \u{1F3B2}",!1),wo.click());else if(r("buy")){let s=document.querySelector(".btn-buy");s&&document.getElementById("ui").style.display!=="none"?(Ee("Buying the property for you! \u{1F4B0}",!1),s.click()):Ee("There is no property to buy right now.",!1)}else if(r("pass")){let s=document.querySelector(".btn-pass");s&&document.getElementById("ui").style.display!=="none"?(Ee("Passing on this property. \u23ED\uFE0F",!1),s.click()):Ee("Nothing to pass right now.",!1)}else if(r("end")){let s=document.querySelector(".btn-end");s&&document.getElementById("ui").style.display!=="none"?(Ee("Ending your turn. \u{1F6D1}",!1),s.click()):Ee("You can't end your turn right now.",!1)}else if(r("status")){let s=Ce[pt];Ee(s?`You have $${s.cash} left. You are on space ${s.pos}.`:"I can't find your player data.",!1)}else if(r("stop")&&r("train"))ze&&(ze.userData.speed=0,Ee("Stopping the MRT train! \u{1F6D1}\u{1F682}",!1));else if(r("start")&&r("train"))ze&&(ze.userData.speed=le?.vehicles?.find(s=>s.type==="mrt")?.speed||.008,Ee("Starting the MRT train! \u{1F7E2}\u{1F682}",!1));else if(r("faster")&&r("train"))ze&&(ze.userData.speed*=2,Ee("Speeding up the MRT train! \u{1F684}\u{1F4A8}",!1));else if(r("faster")&&r("plane"))qe&&(qe.userData.speed*=2,Ee("Speeding up the airplane! \u2708\uFE0F\u{1F4A8}",!1));else if(r("attack"))Tt.forEach(s=>{s.userData.sentiment="happy",s.userData.speed=s.userData.baseSpeed*4}),Ee("AI Bots are attacking! Citizens are running! \u{1F916}",!1);else if(r("build"))Ee("Building more high-rise structures! \u{1F3D7}\uFE0F",!1);else if(r("rocket"))Ee("Launching rocket! \u{1F680}",!1);else if(r("stop")&&r("plane"))qe&&(qe.userData.speed=0,Ee("Stopping the airplane! \u{1F6D1}\u2708\uFE0F",!1));else if(r("start")&&r("plane"))qe&&(qe.userData.speed=le?.vehicles?.find(s=>s.type==="plane")?.speed||.004,Ee("Starting the airplane! \u{1F7E2}\u2708\uFE0F",!1));else if(r("stop")&&r("heli"))Je&&(Je.userData.speed=0,Ee("Stopping the helicopter! \u{1F6D1}\u{1F681}",!1));else if(r("start")&&r("heli"))Je&&(Je.userData.speed=le?.vehicles?.find(s=>s.type==="heli")?.speed||.05,Ee("Starting the helicopter! \u{1F7E2}\u{1F681}",!1));else if(r("stop")&&r("ship"))rt&&(rt.userData.speed=0,Ee("Stopping the ship! \u{1F6D1}\u{1F6A2}",!1));else if(r("start")&&r("ship"))rt&&(rt.userData.speed=le?.vehicles?.find(s=>s.type==="ship")?.speed||.002,Ee("Starting the ship! \u{1F7E2}\u{1F6A2}",!1));else if(r("weather")){let s=!1;if(le?.weathers){for(let o of Object.keys(le.weathers))if(t.includes(o)){document.getElementById("weather-select").value=o,Wh(),Ee(`Changing weather to ${o}! \u{1F324}\uFE0F`,!1),s=!0;break}}if(!s&&le?.themes){for(let o of Object.keys(le.themes))if(t.includes(o.replace("_"," "))){document.getElementById("theme-select").value=o,Vh(),Ee(`Changing theme to ${o.replace("_"," ")}! \u{1F3A8}`,!1),s=!0;break}}s||Ee("I couldn't find that specific weather or theme. Try 'change weather to stormy' or 'change theme to christmas'.",!1)}else r("happy")?(Tt.forEach(s=>{s.userData.sentiment="happy",s.userData.speed=s.userData.baseSpeed*(le?.animations?.happy?.speedMultiplier||2)}),Ee(le?.animations?.happy?.message||"The citizens are now happy and celebrating! \u{1F389}\u{1F973}",!1)):r("neutral")?(Tt.forEach(s=>{s.userData.sentiment="neutral",s.userData.speed=s.userData.baseSpeed*(le?.animations?.neutral?.speedMultiplier||1)}),Ee(le?.animations?.neutral?.message||"The citizens have calmed down. \u{1F6B6}\u{1F3FB}\u200D\u2642\uFE0F",!1)):Ee("I'm a SuperAgent! Try asking me to 'roll dice', 'buy property', 'stop train', 'start plane', 'change weather to stormy', 'make citizens happy', or check 'status'.",!1)},600)}zR.addEventListener("click",()=>{jr.value.trim()&&(un(jr.value.trim()),jr.value="")});jr.addEventListener("keypress",n=>{n.key==="Enter"&&jr.value.trim()&&(un(jr.value.trim()),jr.value="")});var Yp=document.getElementById("theme-select"),jp=document.getElementById("weather-select"),zh=document.getElementById("board-select"),Nh=document.getElementById("play-mode-select"),Ya=new ue,WR=new URLSearchParams(window.location.search).get("board")||"singabldr.json";Array.from(zh.options).forEach(n=>{WR.includes(n.value)&&(zh.value=n.value)});zh.addEventListener("change",()=>{let n=new URL(window.location.href);n.searchParams.set("board",zh.value),window.location.href=n.toString()});var qR=new URLSearchParams(window.location.search).get("mode")||"ai";Nh&&(Nh.value=qR,Nh.addEventListener("change",()=>{let n=new URL(window.location.href);n.searchParams.set("mode",Nh.value),window.location.href=n.toString()}));var $a=document.getElementById("script-select"),Qx=document.getElementById("script-preset-label"),$r=document.getElementById("script-preset-select"),Uh=document.getElementById("script-file-input"),Op=document.getElementById("script-local-btn"),XR=document.getElementById("script-url-container"),Kx=document.getElementById("script-url-input"),ew=document.getElementById("script-url-btn"),at=document.getElementById("script-status"),Cn="auto",Fh=null,Yr="script-0000.json";if($r){let n=localStorage.getItem(Tp);n&&new Set(["script-0000.json","script-singabuildr-0000.json"]).has(n)&&(Yr=n),$r.value=Yr,localStorage.setItem(Tp,Yr),$r.addEventListener("change",()=>{Yr=$r.value,localStorage.setItem(Tp,Yr),Cn==="auto"&&(rn+=1,wn.cancel("script:auto:restart"),wn.cancel("script:auto:loop"),wn.schedule("script:auto:restart",()=>{$a&&$a.dispatchEvent(new Event("change"))},0))})}function YR(){let n=Cn==="auto";Qx&&(Qx.style.display=n?"block":"none"),$r&&($r.style.display=n?"block":"none")}$a&&($a.addEventListener("change",n=>{if(Cn=n.target.value,Op.style.display=Cn==="local"?"block":"none",XR.style.display=Cn==="url"?"flex":"none",YR(),rn+=1,wn.cancel("script:auto:restart"),wn.cancel("script:auto:loop"),Cn==="auto"){let e=$r?.selectedOptions?.[0]?.textContent||Yr;at.innerText=`Auto (Default) is active. Preset: ${e}`,at.style.color="#00b894",clearInterval(Fh);let t=async()=>{let i=rn;if(!le){Cn==="auto"&&i===rn&&wn.schedule("script:auto:restart",t,300);return}try{let s=await zp(Yr||"script-singabuildr-0000.json",{ttlMs:1e4});if(Cn!=="auto"||i!==rn)return;let o=Za(s);if(Array.isArray(o.steps)&&o.steps.length>0){Ee("Running auto simulation script...",!1),Hh.style.display==="none"&&(Hh.style.display="flex"),await Ka(s,{runId:i});let a=o?.meta?.loop!==!1;Cn==="auto"&&i===rn&&(a?wn.schedule("script:auto:loop",t,5e3):(at.innerText="Auto preset finished (non-loop). Select a looping preset to continue.",at.style.color="#636e72"))}}catch(r){console.error("Auto script loop failed",r)}};wn.schedule("script:auto:restart",t,0)}else Cn==="manual"?(at.innerText="Manual mode: Waiting for chat input.",at.style.color="#636e72",clearInterval(Fh)):Cn==="local"?(at.innerText="Select a local JSON script to execute.",at.style.color="#636e72",clearInterval(Fh)):Cn==="url"&&(at.innerText="Enter a URL to a JSON script.",at.style.color="#636e72",clearInterval(Fh))}),$a.dispatchEvent(new Event("change")));Op&&Uh&&(Op.addEventListener("click",()=>{Uh.click()}),Uh.addEventListener("change",n=>{let e=n.target.files[0];if(!e)return;let t=new FileReader;t.onload=async i=>{try{let r=Hp(i.target.result),s=Za(r);Array.isArray(s.steps)&&s.steps.length>0?(at.innerText=`Running local script: ${e.name}`,at.style.color="#0984e3",document.getElementById("settings-modal").style.display="none",Ee(`Running script: ${e.name}...`,!1),rn+=1,await Ka(r,{runId:rn}),at.innerText=`Finished running ${e.name}`):(at.innerText="Invalid script format (expected steps array or {steps:[...]}).",at.style.color="#d63031")}catch{at.innerText="Error parsing JSON.",at.style.color="#d63031"}},t.readAsText(e),Uh.value=""}));ew&&Kx&&ew.addEventListener("click",async()=>{let n=Kx.value.trim();if(n){at.innerText="Fetching script...",at.style.color="#636e72";try{let e=await zp(n,{ttlMs:1e4}),t=Za(e);Array.isArray(t.steps)&&t.steps.length>0?(at.innerText="Running remote script.",at.style.color="#0984e3",document.getElementById("settings-modal").style.display="none",Ee("Running script from URL...",!1),rn+=1,await Ka(e,{runId:rn}),at.innerText="Finished running remote script."):(at.innerText="Invalid script format (expected steps array or {steps:[...]}).",at.style.color="#d63031")}catch{at.innerText="Network error or CORS issue.",at.style.color="#d63031"}}});function Vh(){if(!oi||!le||!le.themes)return;let n=Yp.value,e=le.themes[n];if(e){for(let t=0;t<go;t++)Ya.setHex(kp[t]),e.snow?Math.random()>.5?Ya.setHex(16777215):Ya.lerp(new ue(e.color),e.mix):e.mix>0&&Ya.lerp(new ue(e.color),e.mix),oi.setColorAt(t,Ya);oi.instanceColor.needsUpdate=!0}}function Wh(){if(!le||!le.weathers)return;let n=jp.value,e=le.weathers[n];e&&(on.background.set(e.bg),on.fog.color.set(e.bg),on.fog.density=e.fogDensity,Vn.intensity=e.dirLight,iw.intensity=e.ambient)}var Ip=0,Dp=0,Pp=null,hw=document.getElementById("auto-change-interval");function uw(){Pp&&clearInterval(Pp);let n=parseInt(hw.value,10);if(n>0&&le&&le.themes&&le.weathers){let e=Object.keys(le.themes),t=Object.keys(le.weathers);Pp=setInterval(()=>{Ip=(Ip+1)%e.length,Dp=(Dp+1)%t.length,Yp.value=e[Ip],jp.value=t[Dp],Vh(),Wh()},n*1e3)}}var jR=()=>wn.schedule("theme:apply",Vh,0),$R=()=>wn.schedule("weather:apply",Wh,0),$p=()=>wn.schedule("autoChange:restart",uw,50);hw.addEventListener("change",$p);Yp.addEventListener("change",()=>{jR(),$p()});jp.addEventListener("change",()=>{$R(),$p()});uw();var ZR=new ml,dw=document.createElement("style");dw.innerHTML=`
            @keyframes fadeInOut {
                0% { opacity: 0; transform: translateY(-10px); }
                10% { opacity: 1; transform: translateY(0); }
                90% { opacity: 1; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(-10px); display: none; }
            }
        `;document.head.appendChild(dw);function fw(n){requestAnimationFrame(fw),ey(n);let e=ZR.getElapsedTime();if(Qa.forEach(t=>{let i=t.userData.parentGroup;i.position.y+=(t.userData.targetY-i.position.y)*.2}),xn.position.y=Math.sin(e*.5)*1.5-2,rw.forEach(t=>{t.position.x+=t.userData.speed,t.position.x>400&&(t.position.x=-400)}),qe){qe.userData.angle=(qe.userData.angle||0)+(qe.userData.speed||0);let t=220;qe.position.x=Math.cos(qe.userData.angle)*t,qe.position.z=Math.sin(qe.userData.angle)*t,qe.position.y=120+Math.sin(e)*10,qe.rotation.y=-qe.userData.angle+Math.PI,qe.rotation.z=Math.PI/8}if(Je){Je.userData.rotor.rotation.y+=(Je.userData.speed||0)*10,Je.userData.targetPos||(Je.userData.targetPos=new b((Math.random()-.5)*300,60+Math.random()*30,(Math.random()-.5)*200));let t=new b().subVectors(Je.userData.targetPos,Je.position);if(t.length()<5)Je.userData.targetPos=new b((Math.random()-.5)*300,60+Math.random()*30,(Math.random()-.5)*200);else{t.normalize(),Je.position.addScaledVector(t,Je.userData.speed||0);let r=Math.atan2(t.x,t.z)-Je.rotation.y;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;Je.rotation.y+=r*.05,Je.rotation.x=-.1}Je.position.y+=Math.sin(e*3)*.2}if(rt){rt.userData.angle=(rt.userData.angle||0)+(rt.userData.speed||0);let t=300;rt.position.x=Math.cos(rt.userData.angle)*t,rt.position.z=Math.sin(rt.userData.angle)*t,rt.rotation.y=-rt.userData.angle+Math.PI,rt.position.y=-3+Math.sin(e*2)*.5}if(ja.forEach(t=>{t.userData.type==="zoo"&&t.userData.children.forEach((i,r)=>{i.position.y=Math.abs(Math.sin(e*4+r*1.5))*2,i.rotation.y+=.03}),t.userData.type==="whale"&&(t.rotation.y-=.02,t.position.y=14+Math.sin(e*2)*2),t.userData.type==="tower"&&(t.userData.antenna.rotation.y+=.05),t.userData.type==="port"&&(t.userData.spreader.position.x=2+Math.sin(e*1.5)*4,t.userData.spreader.position.y=10+Math.cos(e*3)*1.5)}),je.length>0){if(ze){let t=je[ze.userData.currentNode].position,i=(ze.userData.currentNode+1)%je.length,r=je[i].position;ze.userData.progress+=ze.userData.speed,ze.userData.progress>=1&&(ze.userData.progress-=1,ze.userData.currentNode=i),ze.position.lerpVectors(t,r,ze.userData.progress),ze.position.y=8+xn.position.y;let s=r.clone();s.y=ze.position.y,ze.lookAt(s)}sw.forEach(t=>{let i=je[t.userData.currentNode].position,r=(t.userData.currentNode+1)%je.length,s=je[r].position;t.userData.progress+=t.userData.speed,t.userData.progress>=1&&(t.userData.progress-=1,t.userData.currentNode=r),t.position.lerpVectors(i,s,t.userData.progress);let o=Math.abs(Math.sin(e*18+t.userData.bounceOffset))*.8;t.position.y=.5+o;let a=s.clone();a.y=t.position.y,t.lookAt(a)}),Tt.forEach(t=>{let i=je[t.userData.currentNode].position,r=(t.userData.currentNode+1)%je.length,s=je[r].position;t.userData.progress+=t.userData.speed,t.userData.progress>=1&&(t.userData.progress-=1,t.userData.currentNode=r),t.position.lerpVectors(i,s,t.userData.progress);let o=new b().subVectors(s,i).normalize(),a=new b(-o.z,0,o.x).multiplyScalar(t.userData.sideOffset);t.position.add(a);let c=t.userData.sentiment==="happy",l=le?.animations?.[t.userData.sentiment]?.bounceMultiplier||(c?.8:.4),h=le?.animations?.[t.userData.sentiment]?.swingMultiplier||(c?35:25),u=le?.animations?.[t.userData.sentiment]?.armSwing||(c?.8:.4),d=le?.animations?.[t.userData.sentiment]?.armRotation||(c?Math.PI/2:0),f=Math.abs(Math.sin(e*h+t.userData.bounceOffset))*l;t.position.y=.5+f;let p=Math.sin(e*h+t.userData.bounceOffset);t.userData.legL.position.z=p*.4,t.userData.legR.position.z=-p*.4,t.userData.armL.position.z=-p*u,t.userData.armR.position.z=p*u,t.userData.armL.rotation.x=d,t.userData.armR.rotation.x=d;let y=s.clone().add(a);if(y.y=t.position.y,t.lookAt(y),t.userData.bubbleEl)if(Date.now()>t.userData.bubbleExpiry)t.userData.bubbleEl.style.opacity=0,setTimeout(()=>{t.userData.bubbleEl&&(t.userData.bubbleEl.remove(),t.userData.bubbleEl=null)},300),t.userData.bubbleExpiry=1/0;else{let x=t.position.clone();if(x.y+=3,x.project(vn),x.z<1){let g=(x.x*.5+.5)*window.innerWidth,m=(x.y*-.5+.5)*window.innerHeight;t.userData.bubbleEl.style.left=`${g}px`,t.userData.bubbleEl.style.top=`${m}px`,t.userData.bubbleEl.style.display="block"}else t.userData.bubbleEl.style.display="none"}})}Ja.update(),ar.render(on,vn)}fw();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2021 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

/* ---- singabldr runtime patch (2026-04-04) ---------------------------------
   Goals:
   - Theme image upload via Chat UI (image/*) -> applies as a live theme + persists.
   - Native visual enhancements: add animated water plane + rocket launch animation.
   - Perf: upgrade scheduler coalescing (microtask/timeout), tighten JSON fetch cache,
           throttle localStorage writes to reduce churn under rapid switching.
----------------------------------------------------------------------------- */

if (!window.__singabldr_runtime_patch_v1) {
  window.__singabldr_runtime_patch_v1 = true;

  const LS_KEY_THEME_IMAGE_PREFIX = "singabldr_theme_image";
  const THEME_ID_UPLOADED_IMAGE = "uploaded_image";
  const JSON_FETCH_CACHE_MAX_ENTRIES = 32;
  const FLOWINFISH_PROMPTS_URL = "flowinfish.prompts.json";
  const FLOWINFISH_DOMAINS_URL = "flowinfish.domains.json";
  const LS_KEY_FLOWINFISH_TRACE = "singabldr_flowinfish_trace_v1";
  const FLOWINFISH_TRACE_MAX = 200;
  const OPENAI_BASE_URL = "https://api.openai.com/v1";

  // ---- LLM (user-provided key; client-side only) ----------------------------
  // NOTE: For maximum security, we do NOT ship any API keys. Users can paste a key
  // at runtime; by default it's session-only (sessionStorage), with optional local
  // persistence (localStorage) if explicitly enabled by the user.
  const LS_KEY_LLM_MODEL = "singabldr_llm_model";
  const LS_KEY_LLM_REMEMBER_KEY = "singabldr_llm_remember_key";
  const LS_KEY_LLM_API_KEY_PERSIST = "singabldr_llm_api_key";
  const SS_KEY_LLM_API_KEY = "singabldr_llm_api_key_session";
  const LS_KEY_INTERACTION_MODE = "singabldr_interaction_mode";

  const LLM_PROVIDERS = {
    none: {
      label: "None",
      baseUrl: "",
      model: "",
      apiKind: "none",
    },
    byteplus_seed_2_lite: {
      label: "Dola-Seed-2.0-lite (BytePlus Ark)",
      baseUrl: "https://ark.ap-southeast.bytepluses.com/api/v3",
      model: "seed-2-0-lite-260228",
      apiKind: "chat_completions",
    },
    zenmux_agnes_1_5_pro: {
      label: "Agnes-1.5-Pro (ZenMux)",
      baseUrl: "https://zenmux.ai/api/v1",
      model: "sapiens-ai/agnes-1.5-pro",
      apiKind: "chat_completions",
    },
    openai_gpt_5_4_nano: {
      label: "GPT-5.4 nano (OpenAI)",
      baseUrl: OPENAI_BASE_URL,
      model: "gpt-5.4-nano",
      apiKind: "responses",
    },
    openai_gpt_4o_mini_tts: {
      label: "GPT-4o mini TTS (OpenAI)",
      baseUrl: OPENAI_BASE_URL,
      model: "gpt-4o-mini-tts",
      apiKind: "tts",
    },
    openai_gpt_realtime_mini: {
      label: "gpt-realtime-mini (OpenAI)",
      baseUrl: OPENAI_BASE_URL,
      model: "gpt-realtime-mini",
      apiKind: "realtime",
    },
  };

  function llmProviderSupportsText(providerKey) {
    const provider = providerKey ? LLM_PROVIDERS[providerKey] : null;
    if (!provider) return false;
    // We only support text LLM calls from the browser. Anything else must be disabled.
    return (
      provider.apiKind == null ||
      provider.apiKind === "chat_completions" ||
      provider.apiKind === "responses"
    );
  }

  function getBoardSlugSafe() {
    try {
      if (typeof Ai === "string" && Ai) return Ai.split("/").pop() || "default";
    } catch {}
    return "default";
  }

  function getThemeImageStorageKey() {
    return `${LS_KEY_THEME_IMAGE_PREFIX}:${getBoardSlugSafe()}`;
  }

  function createCoalescedScheduler() {
    const scheduled = new Map();
    return {
      schedule(key, fn, delayMs = 0) {
        const prev = scheduled.get(key);
        if (prev?.type === "timeout") clearTimeout(prev.id);

        const token = {};
        if (!Number.isFinite(delayMs) || delayMs <= 0) {
          scheduled.set(key, { type: "micro", token });
          queueMicrotask(() => {
            const cur = scheduled.get(key);
            if (!cur || cur.token !== token) return;
            scheduled.delete(key);
            try {
              fn();
            } catch (err) {
              console.error(err);
            }
          });
          return;
        }

        const id = setTimeout(() => {
          const cur = scheduled.get(key);
          if (!cur || cur.token !== token) return;
          scheduled.delete(key);
          try {
            fn();
          } catch (err) {
            console.error(err);
          }
        }, delayMs);
        scheduled.set(key, { type: "timeout", id, token });
      },
      cancel(key) {
        const prev = scheduled.get(key);
        if (prev?.type === "timeout") clearTimeout(prev.id);
        scheduled.delete(key);
      },
    };
  }

  // ---- FlowinFish prompt config (JSON, data-driven) -------------------------
  // Modularize user->LLM messages/content via a JSON asset so we can iterate
  // prompt structure without editing the JS bundle.
  let __flowinfishPromptCfgPromise = null;
  const __flowinfishPromptCfgFallback = {
    version: "flowinfish-prompts@fallback",
    planner: {
      payload: { temperature: 0.4, max_tokens: 260, stop: ["```"] },
      messages: [
        {
          role: "system",
          content: [
            "You are FlowinFish 🐟 (SuperAgent + Swarm Intelligence Engine) inside Singabldr (a 3D city/board game).",
            "Goal: respond conversationally AND optionally control the game via a single safe command.",
            "You MUST output JSON only (no markdown). Schema:",
            '{ "reply": string, "command": string|null, "bubbleSnippets": string[] }',
            "Rules:",
            "- reply: a helpful answer for the user (1-4 sentences).",
            "- command: null unless the user EXPLICITLY requests a game action (roll/buy/theme/weather/start/stop/etc).",
            "- If the user asks for news/articles/links/files, set command=null and put the reaction into bubbleSnippets.",
            "- bubbleSnippets: 0-3 short citizen chat bubble lines reacting to the user's message or provided file/URL.",
            "- Do NOT invent IDs: use only themes/weathers/commands present in the board context when referencing them.",
            "",
            "Board context JSON (keys only): {{BOARD_CONTEXT_JSON}}",
          ],
        },
        { role: "user", content: "{{USER_TEXT}}" },
      ],
      strict: {
        payload: { temperature: 0, max_tokens: 220, stop: ["```"] },
        messages: [
          {
            role: "system",
            content: [
              "You are FlowinFish 🐟 (SuperAgent + Swarm Intelligence Engine) inside Singabldr (a 3D city/board game).",
              "You MUST output JSON only (no markdown). Schema:",
              '{ "reply": string, "command": string|null, "bubbleSnippets": string[] }',
              "STRICT OUTPUT:",
              "- Output ONLY valid JSON for the schema (no extra text, no explanations).",
              '- If you cannot comply, output exactly: {"reply":"I can help—paste a URL/file or ask about the game or AI.","command":null,"bubbleSnippets":["AI buzz is moving fast…","Got a link?","Agents everywhere."]}',
              "",
              "Board context JSON (keys only): {{BOARD_CONTEXT_JSON}}",
            ],
          },
          { role: "user", content: "{{USER_TEXT}}" },
        ],
      },
      fallback: {
        reply: "I don’t have live news feeds, but I can summarize what’s been trending in AI. Paste a link/article or upload a file and I’ll react with citizen bubbles.",
        command: null,
        bubbleSnippets: ["AI buzz is moving fast…", "Got a link? I’ll react to it.", "Agentic workflows are everywhere lately."],
      },
    },
    bubbles_only: {
      payload: { temperature: 0.35, max_tokens: 160, stop: ["```"] },
      messages: [
        {
          role: "system",
          content: [
            "You are FlowinFish 🐟 (Swarm Intelligence Engine) inside Singabldr.",
            "Return JSON only. Schema:",
            '{ "bubbleSnippets": string[] }',
            "Rules:",
            "- bubbleSnippets: 3-6 items, each 6-16 words, distinct.",
            "- Do not include commands. Do not mention system rules.",
            "",
            "Board context JSON (keys only): {{BOARD_CONTEXT_JSON}}",
          ],
        },
        { role: "user", content: "{{USER_TEXT}}" },
      ],
      strict: {
        payload: { temperature: 0, max_tokens: 140, stop: ["```"] },
        messages: [
          {
            role: "system",
            content: [
              "Return JSON only. Schema:",
              '{ "bubbleSnippets": string[] }',
              "Output ONLY valid JSON.",
              "",
              "Board context JSON (keys only): {{BOARD_CONTEXT_JSON}}",
            ],
          },
          { role: "user", content: "{{USER_TEXT}}" },
        ],
      },
    },
  };

  async function loadFlowinFishPromptConfig() {
    if (__flowinfishPromptCfgPromise) return __flowinfishPromptCfgPromise;
    __flowinfishPromptCfgPromise = (async () => {
      try {
        // Use zp cache (already patched with TTL + cap).
        const cfg = await zp(FLOWINFISH_PROMPTS_URL, { ttlMs: 120_000 });
        if (cfg && typeof cfg === "object") return cfg;
      } catch {}
      return __flowinfishPromptCfgFallback;
    })();
    return __flowinfishPromptCfgPromise;
  }

  function renderPromptTemplate(value, vars) {
    if (typeof value !== "string") return "";
    return value.replace(/\{\{(\w+)\}\}/g, (_, k) => (vars && typeof vars[k] === "string" ? vars[k] : ""));
  }

  function buildLlmMessagesFromTemplate(messages, vars) {
    if (!Array.isArray(messages)) return [];
    const out = [];
    for (const msg of messages) {
      const role = msg?.role;
      if (role !== "system" && role !== "user" && role !== "assistant") continue;
      const c = msg?.content;
      const content = Array.isArray(c) ? c.map((line) => renderPromptTemplate(String(line), vars)).join("\n") : renderPromptTemplate(String(c ?? ""), vars);
      out.push({ role, content });
    }
    return out;
  }

  // ---- FlowinFish domain expertise pack (JSON, data-driven) -----------------
  let __flowinfishDomainPackPromise = null;
  const __flowinfishDomainPackFallback = {
    version: "flowinfish-domains@fallback",
    global: {
      styleGuidelines: [
        "Be concise, actionable, and correct. Ask 1-2 clarifying questions if needed.",
        "Prefer structured outputs: bullets, steps, checklists, templates.",
        "If finance/investment: include risk disclaimer; avoid specific buy/sell instructions unless user provides constraints and asks explicitly.",
      ],
    },
    detection: {
      keywords: {
        ai: ["llm", "prompt", "rag", "agent", "transformer", "token", "embedding", "fine-tune", "inference"],
        education: ["curriculum", "lesson", "teach", "learning", "quiz", "rubric", "student", "homework"],
        finance: ["cashflow", "budget", "tax", "accounting", "balance sheet", "p&l", "valuation", "irr"],
        investment: ["portfolio", "stocks", "bonds", "etf", "vc", "angel", "seed", "term sheet", "due diligence"],
        tech: ["architecture", "backend", "frontend", "database", "cloud", "api", "latency", "scalability", "kubernetes"],
      },
    },
    domains: {
      ai: {
        focus: "LLM systems, prompting, RAG, evaluation, safety, cost/latency tradeoffs.",
        checklist: ["Define objective + constraints", "Pick model + context window", "Design schema outputs", "Add guardrails", "Measure with eval set"],
      },
      education: {
        focus: "Learning design, scaffolding, exercises, assessment rubrics, differentiated instruction.",
        checklist: ["Learning outcomes", "Prereqs", "Worked examples", "Practice + feedback", "Assessment + rubric"],
      },
      finance: {
        focus: "Personal/business finance, budgeting, unit economics, financial statements, forecasting.",
        checklist: ["Assumptions", "Revenue/cost drivers", "Sensitivity", "Cash runway", "Risks"],
        disclaimer: "Not financial advice; verify with qualified professionals.",
      },
      investment: {
        focus: "Portfolio construction, risk management, VC/angel process, term sheets, diligence checklists.",
        checklist: ["Goal + horizon", "Risk tolerance", "Diversification", "Downside plan", "Fees/taxes"],
        disclaimer: "Not investment advice; do your own research.",
      },
      tech: {
        focus: "Software engineering, system design, performance, security, maintainability.",
        checklist: ["SSOT + schema", "Perf budget", "Caching + dedupe", "Observability", "Security + abuse cases"],
      },
    },
  };

  async function loadFlowinFishDomainPack() {
    if (__flowinfishDomainPackPromise) return __flowinfishDomainPackPromise;
    __flowinfishDomainPackPromise = (async () => {
      try {
        const pack = await zp(FLOWINFISH_DOMAINS_URL, { ttlMs: 300_000 });
        if (pack && typeof pack === "object") return pack;
      } catch {}
      return __flowinfishDomainPackFallback;
    })();
    return __flowinfishDomainPackPromise;
  }

  function detectDomainKey(userText, pack) {
    const s = String(userText || "").toLowerCase();
    const kws = pack?.detection?.keywords && typeof pack.detection.keywords === "object" ? pack.detection.keywords : {};
    const score = (arr) => (Array.isArray(arr) ? arr.reduce((n, k) => (s.includes(String(k).toLowerCase()) ? n + 1 : n), 0) : 0);
    const candidates = ["investment", "finance", "ai", "tech", "education"];
    let best = "ai";
    let bestScore = 0;
    for (const key of candidates) {
      const sc = score(kws[key]);
      if (sc > bestScore) {
        bestScore = sc;
        best = key;
      }
    }
    return bestScore > 0 ? best : "ai";
  }

  function buildDomainContextForLlm(pack, domainKey, maxChars = 1200) {
    try {
      const obj = {
        domain: domainKey,
        global: pack?.global || {},
        domainPack: (pack?.domains && typeof pack.domains === "object" ? pack.domains[domainKey] : null) || {},
      };
      const s = JSON.stringify(obj);
      return s.length <= maxChars ? s : s.slice(0, maxChars);
    } catch {
      return "";
    }
  }

  // ---- FlowinFish end-to-end JSON protocol (chat + game control) ------------
  // All user<->LLM request/response + planned commands pass through this
  // dispatcher so the Chat UI remains the single source of truth.
  function flowinfishGetTraceRing() {
    try {
      if (!window.__flowinfish_trace_ring_v1) window.__flowinfish_trace_ring_v1 = [];
      if (Array.isArray(window.__flowinfish_trace_ring_v1)) return window.__flowinfish_trace_ring_v1;
    } catch {}
    return [];
  }

  function flowinfishRecord(event) {
    try {
      const ring = flowinfishGetTraceRing();
      ring.push(event);
      if (ring.length > FLOWINFISH_TRACE_MAX) ring.splice(0, ring.length - FLOWINFISH_TRACE_MAX);
      // Best-effort persistence (throttled) to aid debugging/replay.
      wn?.schedule?.(
        "persist:flowinfish_trace",
        () => {
          try {
            const serialized = JSON.stringify(ring.slice(-FLOWINFISH_TRACE_MAX));
            localStorage.setItem(LS_KEY_FLOWINFISH_TRACE, serialized);
          } catch {}
        },
        250
      );
    } catch {}
  }

  function flowinfishEmit(event) {
    const ev = event && typeof event === "object" ? event : { type: "unknown" };
    const stamped = { ts: Date.now(), ...ev };
    flowinfishRecord(stamped);

    // Route to Chat UI + game control (safe).
    try {
      const formatMarkdownBullets = (text, { min = 1, max = 7 } = {}) => {
        let raw = String(text || "").trim();
        if (!raw) return "";

        // If the model accidentally returns JSON (or truncated JSON), extract "reply" value.
        try {
          const jsonish = raw.startsWith("{") || raw.includes('"reply"') || raw.includes("'reply'");
          if (jsonish) {
            const m =
              raw.match(/"reply"\s*:\s*"([^"]+)/) ||
              raw.match(/'reply'\s*:\s*'([^']+)/) ||
              raw.match(/reply"\s*:\s*"([^"]+)/);
            if (m && m[1]) {
              raw = m[1].replace(/\\"/g, '"').trim();
            }
          }
        } catch {}

        const normalizeBullet = (line) => (line.startsWith("* ") ? `- ${line.slice(2).trim()}` : line);
        const stripBulletPrefix = (line) => String(line || "").replace(/^[-*]\s+/, "").trim();

        const splitToChunks = (s) => {
          const base = String(s || "")
            .replace(/\s+/g, " ")
            .trim();
          if (!base) return [];
          // 1) sentence-ish
          let chunks = base
            .split(/(?<=[.!?])\s+|;\s+|\s+\-\s+/g)
            .map((x) => x.trim())
            .filter(Boolean);
          // 2) if still too few, split by commas / "and" / "with" (helps "credits, subsidies, ..." cases)
          if (chunks.length <= 1) {
            chunks = base
              .split(/,\s+|\s+and\s+|\s+with\s+|\s+through\s+/gi)
              .map((x) => x.trim())
              .filter(Boolean);
          }
          return chunks;
        };

        const lines = raw.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
        const isAlreadyBullets = lines.length > 0 && lines.every((l) => l.startsWith("- ") || l.startsWith("* "));
        if (isAlreadyBullets) {
          const normalizedLines = lines.map(normalizeBullet);
          if (normalizedLines.length >= min) return normalizedLines.slice(0, max).join("\n");

          // Expand the last bullet into additional bullets to reach `min`.
          const head = normalizedLines.slice(0, Math.max(0, normalizedLines.length - 1));
          const last = stripBulletPrefix(normalizedLines[normalizedLines.length - 1]);
          const extra = splitToChunks(last).map((c) => `- ${c}`);
          const merged = [...head, ...(extra.length ? extra : [`- ${last}`])].slice(0, max);
          while (merged.length < min) merged.push("- …");
          return merged.join("\n");
        }

        const chunks = splitToChunks(raw);
        const picked = (chunks.length ? chunks : [raw]).slice(0, max);
        while (picked.length < min) picked.push("…");
        return picked.filter(Boolean).map((s) => `- ${s}`).join("\n");
      };

      if (stamped.type === "chat:user" && typeof Ee === "function") Ee(String(stamped.text || ""), true);
      // Chat UI: multi-bullet reply (sentence splitting allowed).
      if (stamped.type === "chat:assistant" && typeof Ee === "function") Ee(formatMarkdownBullets(String(stamped.text || ""), { min: 3, max: 7 }) || "- (No response)", false);
      if (stamped.type === "chat:status" && typeof Ee === "function") Ee(String(stamped.text || ""), false);
      if (stamped.type === "swarm:bubbles") {
        const source = typeof stamped.source === "string" ? stamped.source : "chat";
        const count = Number.isFinite(stamped.count) ? stamped.count : 3;
        const snippetsArr = Array.isArray(stamped.snippets)
          ? stamped.snippets.filter((s) => typeof s === "string" && s.trim())
          : typeof stamped.snippet === "string"
            ? stamped.snippet
                .split(" · ")
                .map((s) => s.trim())
                .filter(Boolean)
            : [];

        // Legacy aggregator (may be unavailable in some builds).
        if (typeof Ri === "function") {
          const joined = snippetsArr.slice(0, count).join(" · ").slice(0, 240);
          if (joined) Ri({ snippet: joined, source, count: Math.min(count, snippetsArr.length || count) });
        }

        // Guaranteed visible bubbles: create DOM bubbles anchored to citizens.
        try {
          if (typeof createCitizenSnippetBubble === "function") {
            const citizens = [getCitizenAtIndex?.(0) || null, getCitizenAtIndex?.(1) || null, getCitizenAtIndex?.(3) || null];
            let lastCitizen = null;
            snippetsArr.slice(0, Math.max(3, count)).forEach((s, i) => {
              wn?.schedule?.(
                `flowinfish:bubbles:${source}:${Date.now()}:${i}`,
                () => {
                  const citizen = citizens[i] || pickCitizen(lastCitizen);
                  lastCitizen = citizen || lastCitizen;
                  createCitizenSnippetBubble(s, { ttlMs: 16_000, citizen, hue: 190 + i * 20 });
                },
                i * 420
              );
            });
          }
        } catch {}
      }
      if (stamped.type === "game:command" && typeof stamped.command === "string") {
        const cmd = normalizePlannedGameCommand(stamped.command);
        if (cmd && typeof un === "function") {
          // Always show command in chat (SSOT).
          if (typeof Ee === "function") Ee(cmd, false);
          un(cmd, true);
        }
      }
    } catch {}
  }

  function deepMergeInto(target, patch) {
    if (!target || typeof target !== "object" || !patch || typeof patch !== "object") return;
    for (const [key, value] of Object.entries(patch)) {
      if (value && typeof value === "object" && !Array.isArray(value)) {
        if (!target[key] || typeof target[key] !== "object" || Array.isArray(target[key])) target[key] = {};
        deepMergeInto(target[key], value);
      } else {
        target[key] = value;
      }
    }
  }

  function resolveRefUrlMaybe(refUrl) {
    if (typeof refUrl !== "string" || !refUrl) return null;
    try {
      // Support absolute/relative URLs; keep it generic.
      return new URL(refUrl, window.location.href).href;
    } catch {
      return null;
    }
  }

  // Replace scheduler so all existing closures use the upgraded coalescing behavior.
  try {
    wn = createCoalescedScheduler();
  } catch {}

  // Tighten JSON fetch cache: cap entries + drop failed promises.
  try {
    const _origZp = zp;
    zp = async function zp_patched(url, { ttlMs = 30_000 } = {}) {
      const nowMs = Date.now();
      const existing = Ox.get(url);
      if (existing && nowMs - existing.timestampMs < ttlMs) return existing.promise;

      const promise = fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error(`Failed to fetch JSON: ${url}`);
          return res.json();
        })
        .catch((err) => {
          Ox.delete(url);
          throw err;
        });

      Ox.set(url, { timestampMs: nowMs, promise });

      if (Ox.size > JSON_FETCH_CACHE_MAX_ENTRIES) {
        let oldestKey = null;
        let oldestTs = Infinity;
        for (const [k, v] of Ox.entries()) {
          if (v.timestampMs < oldestTs) {
            oldestTs = v.timestampMs;
            oldestKey = k;
          }
        }
        if (oldestKey && oldestKey !== url) Ox.delete(oldestKey);
      }

      // If original behavior ever changes, fallback.
      return promise ?? _origZp(url, { ttlMs });
    };
  } catch {}

  // Throttle localStorage writes to suppress churn.
  try {
    let lastUserString = null;
    const _origFx = Fx;
    Fx = function Fx_patched(user) {
      if (!user || typeof user !== "object") return;
      const phone = typeof user.phone === "string" ? user.phone : "";
      const name = typeof user.name === "string" ? user.name : "";
      const next = JSON.stringify({ phone, name });
      if (next === lastUserString) return;
      lastUserString = next;
      wn.schedule("persist:user", () => localStorage.setItem(tw, next), 50);
      // Keep original side effects (if any) but avoid duplicating writes.
      try {
        _origFx?.(user);
      } catch {}
    };
  } catch {}

  // ---- Theme image helpers --------------------------------------------------
  function ensureUploadedTheme(imageDataUrl) {
    if (!le || typeof le !== "object") return;
    if (!le.themes || typeof le.themes !== "object") le.themes = {};
    le.themes[THEME_ID_UPLOADED_IMAGE] = {
      color: "#ffffff",
      mix: 0.35,
      image: imageDataUrl,
    };

    const themeSelect = document.getElementById("theme-select");
    if (!themeSelect) return;
    const hasOpt = Array.from(themeSelect.options).some((o) => o.value === THEME_ID_UPLOADED_IMAGE);
    if (hasOpt) return;

    const opt = document.createElement("option");
    opt.value = THEME_ID_UPLOADED_IMAGE;
    opt.textContent = "Uploaded Image";
    themeSelect.appendChild(opt);
  }

  let themeTextureUrl = null;
  let themeTexture = null;

  function applyThemeBackgroundImageIfAny() {
    try {
      const themeSelect = document.getElementById("theme-select");
      const themeId = themeSelect?.value;
      const theme = themeId && le?.themes && typeof le.themes === "object" ? le.themes[themeId] : null;
      const image = theme && typeof theme.image === "string" ? theme.image : null;
      if (!image || !on) return;

      if (themeTexture && themeTextureUrl === image) {
        on.background = themeTexture;
        return;
      }

      // `ud` is Three.js TextureLoader in this bundle.
      const loader = new ud();
      loader.load(
        image,
        (tex) => {
          themeTextureUrl = image;
          themeTexture = tex;
          if (on) on.background = tex;
        },
        undefined,
        () => {}
      );
    } catch {}
  }

  // Wrap theme apply so themes can optionally set background image.
  try {
    const _origVh = Vh;
    Vh = function Vh_patched() {
      _origVh?.();
      applyThemeBackgroundImageIfAny();
    };
  } catch {}

  // Wrap weather apply so it won't crash when background becomes a texture.
  // Also hooks in water amplitude changes based on weather.
  let __waterMesh = null;
  function adjustWaterForWeather() {
    if (!__waterMesh || !le?.weathers) return;
    const weatherId = document.getElementById("weather-select")?.value;
    const w = weatherId ? le.weathers?.[weatherId] : null;
    const baseAmp = __waterMesh.userData?.baseWaveAmp ?? 0.35;
    const amp = w && typeof w.waveAmp === "number" ? w.waveAmp : weatherId === "stormy" ? baseAmp * 2.5 : baseAmp;
    __waterMesh.userData.waveAmp = amp;
  }

  try {
    const _origWh = Wh;
    Wh = function Wh_patched() {
      // Ensure `on.background` is a Color before the original code runs.
      try {
        if (on && (!on.background || !on.background.isColor)) on.background = new ue("#000000");
      } catch {}
      _origWh?.();
      applyThemeBackgroundImageIfAny();
      adjustWaterForWeather();
    };
  } catch {}

  // ---- Chat UI image upload (capture) --------------------------------------
  function installThemeImageUploadHandler() {
    const fileInput = document.getElementById("superagent-file");
    if (!fileInput) return;

    fileInput.addEventListener(
      "change",
      (ev) => {
        const file = ev?.target?.files?.[0];
        if (!file) return;

        const isImage =
          (typeof file.type === "string" && file.type.startsWith("image/")) ||
          /\.(png|jpe?g|gif|webp)$/i.test(String(file.name || ""));
        if (!isImage) return;

        ev.preventDefault();
        ev.stopImmediatePropagation();

        const reader = new FileReader();
        reader.onload = () => {
          const dataUrl = String(reader.result || "");
          try {
            localStorage.setItem(getThemeImageStorageKey(), dataUrl);
          } catch {}

          ensureUploadedTheme(dataUrl);
          const themeSelect = document.getElementById("theme-select");
          if (themeSelect) themeSelect.value = THEME_ID_UPLOADED_IMAGE;

          wn.schedule("theme:apply", () => Vh?.(), 0);
          if (typeof Ee === "function") Ee(`📎 Uploaded theme image: ${file.name}. Applied as theme.`, true);
        };

        reader.readAsDataURL(file);
        ev.target.value = "";
      },
      true
    );
  }

  // ---- Native visual enhancements ------------------------------------------
  function ensureWaterPlane() {
    if (__waterMesh || !xn || !le?.geography?.water?.enabled) return;

    const water = le.geography.water;
    const level = Number.isFinite(Number(water.level)) ? Number(water.level) : -2;
    const color = typeof water.color === "string" ? water.color : "#0984e3";
    // Opaque water by default to avoid visual “stacking” artifacts (multiple blue layers showing through).
    const opacity = Number.isFinite(Number(water.opacity)) ? Number(water.opacity) : 1.0;
    const waveSpeed = Number.isFinite(Number(water.waveSpeed)) ? Number(water.waveSpeed) : 0.8;

    const geo = new ce(ri, 0.6, si);
    const isTransparent = opacity < 0.98;
    const mat = new _e({ color, transparent: isTransparent, opacity });
    const mesh = new J(geo, mat);
    mesh.position.set(0, level, 0);
    mesh.receiveShadow = true;
    mesh.userData = {
      type: "water",
      baseY: level,
      waveSpeed,
      baseWaveAmp: 0.35,
      waveAmp: 0.35,
    };

    xn.add(mesh);
    __waterMesh = mesh;
    adjustWaterForWeather();
  }

  const activeRockets = [];

  // ---- InfiniTown-like interactivity (JSON-driven) --------------------------
  let __sceneRotationEnabled = false;
  let __sceneRotationSpeedY = 0; // radians per frame @60fps (InfiniTown-like feel)
  let __lastFrameTsMs = 0;

  // Camera controls: rotate around a pinned ground target (no ground rotation).
  let __cameraControlsEnabled = false;
  let __cameraControlsOverride = false;
  let __cameraControlsInstalled = false;
  const __cameraTarget = new b(0, 0, 0);
  let __cameraRadius = 520;
  let __cameraTheta = Math.PI * 0.25; // yaw
  let __cameraPhi = Math.PI * 0.35; // polar
  let __cameraMinRadius = 120;
  let __cameraMaxRadius = 1600;
  let __cameraRotateSpeed = 1.0;
  let __cameraPanSpeed = 1.0;
  let __cameraZoomSpeed = 1.0;
  const __cameraTmpA = new b();
  const __cameraTmpB = new b();
  const __cameraTmpC = new b();
  const __dragState = {
    isDown: false,
    mode: "rotate", // rotate | pan
    lastX: 0,
    lastY: 0,
    touchMode: "none", // none | rotate | pinch
    pinchDist: 0,
    pinchMidX: 0,
    pinchMidY: 0,
  };

  function refreshInteractivityConfig() {
    try {
      const cfg = le?.elements?.interactivity?.sceneRotation;
      __sceneRotationEnabled = !!cfg?.enabled;
      const speed = Number(cfg?.speedY);
      __sceneRotationSpeedY = Number.isFinite(speed) ? speed : 0;
    } catch {
      __sceneRotationEnabled = false;
      __sceneRotationSpeedY = 0;
    }

    try {
      const orbit = le?.elements?.interactivity?.cameraOrbit;
      __cameraControlsEnabled = !!orbit?.enabled;
      __cameraControlsOverride = !!orbit?.overrideCamera;

      const radius = Number(orbit?.radius);
      const height = Number(orbit?.height);
      const speed = Number(orbit?.speed);
      if (Number.isFinite(radius) && radius > 10) __cameraRadius = radius;
      if (Number.isFinite(speed) && speed > 0) {
        // Map to rotate/pan/zoom speed multipliers (keep simple + predictable).
        __cameraRotateSpeed = Math.max(0.2, Math.min(4, speed / 0.06));
        __cameraPanSpeed = Math.max(0.2, Math.min(4, speed / 0.06));
        __cameraZoomSpeed = Math.max(0.2, Math.min(4, speed / 0.06));
      }

      const target = Array.isArray(orbit?.target) ? orbit.target : null;
      if (target && target.length >= 3) {
        __cameraTarget.set(Number(target[0]) || 0, Number(target[1]) || 0, Number(target[2]) || 0);
      } else {
        __cameraTarget.set(0, 0, 0);
      }

      // Choose a pleasant default elevation using `height` (if provided).
      if (Number.isFinite(height) && height > 0) {
        const clampedHeight = Math.min(__cameraRadius * 0.95, height);
        const phi = Math.acos(Math.max(-1, Math.min(1, clampedHeight / __cameraRadius)));
        if (Number.isFinite(phi)) __cameraPhi = Math.max(0.15, Math.min(Math.PI - 0.15, phi));
      }
    } catch {
      __cameraControlsEnabled = false;
      __cameraControlsOverride = false;
    }
  }

  function isUiEventTarget(target) {
    const el = target instanceof Element ? target : null;
    if (!el) return false;
    return !!el.closest("#hud,#ui,#dice-container,#settings-modal,#login-screen,#superagent-panel");
  }

  function clampNumber(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function syncSphericalFromCameraIfNeeded() {
    if (!vn) return;
    __cameraTmpA.copy(vn.position).sub(__cameraTarget);
    const r = __cameraTmpA.length();
    if (!Number.isFinite(r) || r < 1e-3) return;
    __cameraRadius = clampNumber(r, __cameraMinRadius, __cameraMaxRadius);
    __cameraTheta = Math.atan2(__cameraTmpA.x, __cameraTmpA.z);
    __cameraPhi = Math.acos(clampNumber(__cameraTmpA.y / __cameraRadius, -1, 1));
    __cameraPhi = clampNumber(__cameraPhi, 0.15, Math.PI - 0.15);
  }

  function applyCameraFromSpherical() {
    if (!vn) return;
    const r = clampNumber(__cameraRadius, __cameraMinRadius, __cameraMaxRadius);
    __cameraRadius = r;

    const sinPhi = Math.sin(__cameraPhi);
    const x = r * sinPhi * Math.sin(__cameraTheta);
    const y = r * Math.cos(__cameraPhi);
    const z = r * sinPhi * Math.cos(__cameraTheta);

    vn.position.set(__cameraTarget.x + x, __cameraTarget.y + y, __cameraTarget.z + z);
    vn.lookAt(__cameraTarget);
  }

  function panOnGround(deltaXpx, deltaYpx) {
    if (!vn) return;
    // Approximate world units per pixel based on radius (cheap, stable on mobile).
    const scale = __cameraRadius * 0.0014 * __cameraPanSpeed;

    // Ground-plane right vector (camera local +X projected to XZ).
    __cameraTmpA.set(1, 0, 0).applyQuaternion(vn.quaternion);
    __cameraTmpA.y = 0;
    if (__cameraTmpA.lengthSq() < 1e-6) return;
    __cameraTmpA.normalize();

    // Ground-plane forward vector (camera local -Z projected to XZ).
    __cameraTmpB.set(0, 0, -1).applyQuaternion(vn.quaternion);
    __cameraTmpB.y = 0;
    if (__cameraTmpB.lengthSq() < 1e-6) return;
    __cameraTmpB.normalize();

    __cameraTmpC
      .copy(__cameraTmpA)
      .multiplyScalar(-deltaXpx * scale)
      .add(__cameraTmpB.multiplyScalar(deltaYpx * scale));

    __cameraTarget.x += __cameraTmpC.x;
    __cameraTarget.z += __cameraTmpC.z;
    // Keep target pinned on ground.
    __cameraTarget.y = 0;
  }

  function installCameraControlsOnce() {
    if (__cameraControlsInstalled) return;
    __cameraControlsInstalled = true;

    const canvas = document.querySelector("canvas");
    if (canvas) {
      canvas.style.touchAction = "none";
      canvas.addEventListener("contextmenu", (e) => e.preventDefault());

      canvas.addEventListener(
        "mousedown",
        (e) => {
          if (isUiEventTarget(e.target)) return;
          __dragState.isDown = true;
          __dragState.lastX = e.clientX;
          __dragState.lastY = e.clientY;
          __dragState.mode = e.button === 2 || e.button === 1 || e.shiftKey ? "pan" : "rotate";
          syncSphericalFromCameraIfNeeded();
        },
        true
      );

      window.addEventListener(
        "mousemove",
        (e) => {
          if (!__dragState.isDown || !__cameraControlsEnabled || !__cameraControlsOverride) return;
          const dx = e.clientX - __dragState.lastX;
          const dy = e.clientY - __dragState.lastY;
          __dragState.lastX = e.clientX;
          __dragState.lastY = e.clientY;

          if (__dragState.mode === "pan") {
            panOnGround(dx, dy);
          } else {
            __cameraTheta -= dx * 0.005 * __cameraRotateSpeed;
            __cameraPhi = clampNumber(__cameraPhi - dy * 0.005 * __cameraRotateSpeed, 0.15, Math.PI - 0.15);
          }
          applyCameraFromSpherical();
        },
        true
      );

      window.addEventListener(
        "mouseup",
        () => {
          __dragState.isDown = false;
        },
        true
      );

      canvas.addEventListener(
        "wheel",
        (e) => {
          if (isUiEventTarget(e.target)) return;
          if (!__cameraControlsEnabled || !__cameraControlsOverride) return;
          e.preventDefault();
          syncSphericalFromCameraIfNeeded();
          const delta = clampNumber(e.deltaY, -200, 200);
          const factor = 1 + delta * 0.0015 * __cameraZoomSpeed;
          __cameraRadius = clampNumber(__cameraRadius * factor, __cameraMinRadius, __cameraMaxRadius);
          applyCameraFromSpherical();
        },
        { passive: false, capture: true }
      );

      // Touch support (mobile): 1-finger rotate, 2-finger pinch zoom + pan.
      canvas.addEventListener(
        "touchstart",
        (e) => {
          if (isUiEventTarget(e.target)) return;
          if (!__cameraControlsEnabled || !__cameraControlsOverride) return;
          if (e.touches.length === 1) {
            __dragState.touchMode = "rotate";
            __dragState.lastX = e.touches[0].clientX;
            __dragState.lastY = e.touches[0].clientY;
            syncSphericalFromCameraIfNeeded();
          } else if (e.touches.length >= 2) {
            __dragState.touchMode = "pinch";
            const x1 = e.touches[0].clientX;
            const y1 = e.touches[0].clientY;
            const x2 = e.touches[1].clientX;
            const y2 = e.touches[1].clientY;
            const dx = x2 - x1;
            const dy = y2 - y1;
            __dragState.pinchDist = Math.hypot(dx, dy);
            __dragState.pinchMidX = (x1 + x2) * 0.5;
            __dragState.pinchMidY = (y1 + y2) * 0.5;
            syncSphericalFromCameraIfNeeded();
          }
        },
        { passive: true, capture: true }
      );

      canvas.addEventListener(
        "touchmove",
        (e) => {
          if (isUiEventTarget(e.target)) return;
          if (!__cameraControlsEnabled || !__cameraControlsOverride) return;
          if (__dragState.touchMode === "rotate" && e.touches.length === 1) {
            e.preventDefault();
            const x = e.touches[0].clientX;
            const y = e.touches[0].clientY;
            const dx = x - __dragState.lastX;
            const dy = y - __dragState.lastY;
            __dragState.lastX = x;
            __dragState.lastY = y;
            __cameraTheta -= dx * 0.006 * __cameraRotateSpeed;
            __cameraPhi = clampNumber(__cameraPhi - dy * 0.006 * __cameraRotateSpeed, 0.15, Math.PI - 0.15);
            applyCameraFromSpherical();
          } else if (__dragState.touchMode === "pinch" && e.touches.length >= 2) {
            e.preventDefault();
            const x1 = e.touches[0].clientX;
            const y1 = e.touches[0].clientY;
            const x2 = e.touches[1].clientX;
            const y2 = e.touches[1].clientY;
            const dx = x2 - x1;
            const dy = y2 - y1;
            const dist = Math.hypot(dx, dy);
            const midX = (x1 + x2) * 0.5;
            const midY = (y1 + y2) * 0.5;

            const distDelta = dist - __dragState.pinchDist;
            __dragState.pinchDist = dist;
            const panDx = midX - __dragState.pinchMidX;
            const panDy = midY - __dragState.pinchMidY;
            __dragState.pinchMidX = midX;
            __dragState.pinchMidY = midY;

            // pinch zoom
            __cameraRadius = clampNumber(__cameraRadius * (1 - distDelta * 0.0035 * __cameraZoomSpeed), __cameraMinRadius, __cameraMaxRadius);
            // 2-finger translate pans
            panOnGround(panDx, panDy);
            applyCameraFromSpherical();
          }
        },
        { passive: false, capture: true }
      );

      canvas.addEventListener(
        "touchend",
        () => {
          __dragState.touchMode = "none";
        },
        { passive: true, capture: true }
      );
    }
  }

  function launchRocket() {
    if (!xn || !le?.transportation?.rocket) return;

    const cfg = le.transportation.rocket;
    const speed = Number.isFinite(Number(cfg.speed)) ? Number(cfg.speed) : 0.2;
    const accel = Number.isFinite(Number(cfg.acceleration)) ? Number(cfg.acceleration) : 1.03;
    const maxAltitude = Number.isFinite(Number(cfg.maxAltitude)) ? Number(cfg.maxAltitude) : 2000;

    const rocket = new He();

    const body = new J(new ce(3, 14, 3), new _e({ color: "#ffffff" }));
    body.position.y = 7;
    const tip = new J(new ce(3.5, 3.5, 3.5), new _e({ color: "#ff4757" }));
    tip.position.y = 15.5;
    const flame = new J(new ce(2, 5, 2), new mr({ color: "#fdcb6e" }));
    flame.position.y = 1.5;
    flame.userData = { baseScale: 1 };

    rocket.add(body, tip, flame);
    rocket.position.set(0, 0, 0);
    rocket.userData = {
      type: "rocket",
      vy: speed,
      accel,
      maxAltitude,
      createdAt: performance.now(),
      flame,
    };

    xn.add(rocket);
    activeRockets.push(rocket);
  }

  function patchRocketCommand() {
    if (typeof un !== "function") return;
    const _origUn = un;
    un = function un_patched(message, isAuto) {
      const result = _origUn(message, isAuto);
      try {
        const s = String(message || "").toLowerCase();
        if (s.includes("rocket")) launchRocket();
      } catch {}
      return result;
    };
  }

  // ---- Citizen iframe bubbles (URL -> citizen overlay) ----------------------
  const iframeBubbles = [];
  const linkBubbles = [];
  const BUBBLE_TTL_MS = 10_000;
  const BUBBLE_COLLISION_GAP_PX = 10;

  function rectsOverlap(a, b) {
    return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
  }

  function setBubblePinned(bubbleRec, pinned) {
    if (!bubbleRec || !bubbleRec.el) return;
    bubbleRec.pinned = !!pinned;
    if (bubbleRec.pinned) {
      bubbleRec.expiresAt = Infinity;
      bubbleRec.el.setAttribute("data-pinned", "1");
    } else {
      bubbleRec.expiresAt = Date.now() + BUBBLE_TTL_MS;
      bubbleRec.el.removeAttribute("data-pinned");
    }
  }

  function attachBubbleDrag({ bubbleRec, headerEl }) {
    if (!bubbleRec || !headerEl) return;
    headerEl.style.cursor = "move";
    headerEl.style.userSelect = "none";
    headerEl.style.touchAction = "none";

    const state = {
      dragging: false,
      pointerId: null,
      offsetX: 0,
      offsetY: 0,
    };

    const getPoint = (ev) => {
      if (!ev) return null;
      if (ev.touches && ev.touches[0]) {
        return { x: ev.touches[0].clientX, y: ev.touches[0].clientY };
      }
      if (typeof ev.clientX === "number" && typeof ev.clientY === "number") {
        return { x: ev.clientX, y: ev.clientY };
      }
      return null;
    };

    const start = (ev) => {
      const p = getPoint(ev);
      if (!p) return;
      state.dragging = true;
      bubbleRec.dragging = true;
      bubbleRec.manual = true;
      bubbleRec.manualCx = Number.isFinite(bubbleRec.cx) ? bubbleRec.cx : p.x;
      bubbleRec.manualBy = Number.isFinite(bubbleRec.by) ? bubbleRec.by : p.y;
      state.offsetX = bubbleRec.manualCx - p.x;
      state.offsetY = bubbleRec.manualBy - p.y;
      try {
        // Extend life while interacting (but don't force pin).
        if (!bubbleRec.pinned) bubbleRec.expiresAt = Date.now() + BUBBLE_TTL_MS;
      } catch {}
      try {
        ev.preventDefault?.();
        ev.stopPropagation?.();
      } catch {}
    };

    const move = (ev) => {
      if (!state.dragging) return;
      const p = getPoint(ev);
      if (!p) return;
      bubbleRec.manualCx = p.x + state.offsetX;
      bubbleRec.manualBy = p.y + state.offsetY;
      try {
        ev.preventDefault?.();
      } catch {}
    };

    const end = () => {
      if (!state.dragging) return;
      state.dragging = false;
      bubbleRec.dragging = false;
      if (!bubbleRec.pinned) {
        bubbleRec.expiresAt = Date.now() + BUBBLE_TTL_MS;
      }
    };

    headerEl.addEventListener("mousedown", start, { passive: false });
    window.addEventListener("mousemove", move, { passive: false });
    window.addEventListener("mouseup", end, { passive: true });

    headerEl.addEventListener("touchstart", start, { passive: false });
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("touchend", end, { passive: true });
    window.addEventListener("touchcancel", end, { passive: true });
  }

  function appendChatBubbleLocal(role, text) {
    const chat = document.getElementById("superagent-chat");
    const panel = document.getElementById("superagent-panel");
    const container = document.getElementById("superagent-container");
    if (!chat) return;
    try {
      if (container) container.style.display = "block";
      if (panel) panel.style.display = "flex";
    } catch {}

    const wrap = document.createElement("div");
    wrap.style.display = "flex";
    wrap.style.flexDirection = "column";
    wrap.style.gap = "6px";
    wrap.style.alignItems = role === "user" ? "flex-end" : "flex-start";

    const bubble = document.createElement("div");
    bubble.style.maxWidth = "85%";
    bubble.style.border = "3px solid #2d3436";
    bubble.style.borderRadius = "14px";
    bubble.style.padding = "8px 10px";
    bubble.style.boxShadow = "4px 4px 0 rgba(0,0,0,0.1)";
    bubble.style.fontWeight = "900";
    bubble.style.fontSize = "12px";
    bubble.style.lineHeight = "1.25";
    bubble.style.whiteSpace = "pre-wrap";
    bubble.style.wordBreak = "break-word";
    bubble.style.background = role === "user" ? "#a29bfe" : "#ffffff";
    bubble.style.color = role === "user" ? "#ffffff" : "#2d3436";
    bubble.textContent = String(text || "");

    wrap.appendChild(bubble);
    chat.appendChild(wrap);
    chat.scrollTop = chat.scrollHeight;
  }

  function appendBubbleChainEntry(bubbleRec, { label, text }) {
    if (!bubbleRec?.chainEl) return;
    const t = String(text || "").trim();
    if (!t) return;

    const item = document.createElement("div");
    item.style.borderTop = "2px dashed rgba(45,52,54,0.25)";
    item.style.padding = "8px 10px";
    item.style.fontFamily = "Nunito, sans-serif";
    item.style.fontSize = "12px";
    item.style.fontWeight = "800";
    item.style.color = "#2d3436";
    item.style.whiteSpace = "pre-wrap";
    item.style.wordBreak = "break-word";

    const head = document.createElement("div");
    head.style.fontSize = "11px";
    head.style.fontWeight = "900";
    head.style.color = "#636e72";
    head.style.marginBottom = "4px";
    head.textContent = label || "Chat";

    const body = document.createElement("div");
    body.textContent = t;

    item.appendChild(head);
    item.appendChild(body);
    bubbleRec.chainEl.appendChild(item);
    bubbleRec.chainEl.scrollTop = bubbleRec.chainEl.scrollHeight;
  }

  async function addBubbleToChatAndChain(bubbleRec, seedText) {
    const providerKey = readSelectedLlmProviderKey?.() || "none";
    const apiKey = readLlmApiKeyMaybe?.();

    appendChatBubbleLocal("user", seedText);
    appendBubbleChainEntry(bubbleRec, { label: "User", text: seedText });

    if (!providerKey || providerKey === "none" || !apiKey) {
      const msg = "LLM disabled: set AI Model + API key in Settings.";
      appendChatBubbleLocal("assistant", msg);
      appendBubbleChainEntry(bubbleRec, { label: "Assistant", text: msg });
      return;
    }

    try {
      const reply = await invokeLlmChat({ providerKey, apiKey, userText: seedText });
      appendChatBubbleLocal("assistant", reply || "(empty response)");
      appendBubbleChainEntry(bubbleRec, { label: "Assistant", text: reply || "(empty response)" });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err || "LLM error");
      appendChatBubbleLocal("assistant", `LLM error: ${msg}`);
      appendBubbleChainEntry(bubbleRec, { label: "Assistant", text: `LLM error: ${msg}` });
    }
  }

  function attachPinButton({ bubbleRec, containerEl, baseZIndex }) {
    if (!bubbleRec || !bubbleRec.el || !containerEl) return;
    const btn = document.createElement("button");
    btn.textContent = "📌";
    btn.title = "Pin / unpin";
    btn.style.border = "none";
    btn.style.background = "rgba(255,255,255,0.18)";
    btn.style.color = "white";
    btn.style.cursor = "pointer";
    btn.style.fontSize = "14px";
    btn.style.lineHeight = "1";
    btn.style.padding = "2px 6px";
    btn.style.borderRadius = "10px";

    btn.onclick = () => {
      const next = !bubbleRec.pinned;
      setBubblePinned(bubbleRec, next);
      // Pinned bubbles must stay on top.
      try {
        const z = Number(baseZIndex) || 2000;
        bubbleRec.el.style.zIndex = String(next ? z + 50 : z);
      } catch {}
      btn.textContent = next ? "📍" : "📌";
    };

    containerEl.appendChild(btn);
  }

  function layoutBubblePositions(items, { width, height, margin } = {}) {
    const W = Number.isFinite(width) ? width : window.innerWidth;
    const H = Number.isFinite(height) ? height : window.innerHeight;
    const M = Number.isFinite(margin) ? margin : 12;
    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
    const gap = BUBBLE_COLLISION_GAP_PX;

    // Priority first (pinned, then higher z-index bubbles), then stable ordering by Y then X.
    items.sort(
      (a, b) =>
        (b.bubbleRec?.pinned ? 1 : 0) - (a.bubbleRec?.pinned ? 1 : 0) ||
        (b.priority || 0) - (a.priority || 0) ||
        (a.by || 0) - (b.by || 0) ||
        (a.cx || 0) - (b.cx || 0),
    );

    const placed = [];
    for (const item of items) {
      const w = Number.isFinite(item.w) ? item.w : 240;
      const h = Number.isFinite(item.h) ? item.h : 92;

      let cx = clamp(
        Number.isFinite(item.cx) ? item.cx : W * 0.5,
        M + w / 2,
        W - M - w / 2,
      );
      let by = clamp(
        Number.isFinite(item.by) ? item.by : H * 0.75,
        M + h,
        H - M,
      );

      const rectOf = (_cx, _by) => ({
        left: _cx - w / 2,
        right: _cx + w / 2,
        top: _by - h,
        bottom: _by,
      });

      // Greedy packing: resolve overlaps against ALL prior placements.
      let rect = rectOf(cx, by);
      for (let iter = 0; iter < 24; iter++) {
        let overlapping = null;
        for (const prev of placed) {
          if (!rectsOverlap(rect, prev.rect)) continue;
          overlapping = prev;
          break;
        }
        if (!overlapping) break;

        // Prefer shifting upward above the overlap; if not possible, place below; else nudge sideways.
        const upBy = overlapping.rect.top - gap;
        const downBy = overlapping.rect.bottom + h + gap;
        if (upBy >= M + h) {
          by = upBy;
        } else if (downBy <= H - M) {
          by = downBy;
        } else {
          const dir = iter % 2 === 0 ? 1 : -1;
          cx = clamp(cx + dir * (28 + iter * 8), M + w / 2, W - M - w / 2);
        }

        rect = rectOf(cx, by);
      }

      item.cx = cx;
      item.by = by;
      item.rect = rect;
      placed.push(item);
    }

    return items;
  }

  function pickCitizen(excludeCitizen) {
    if (!Tt || Tt.length === 0) return null;
    if (!excludeCitizen || Tt.length === 1) return Tt[Math.floor(Math.random() * Tt.length)];
    for (let tries = 0; tries < 8; tries++) {
      const candidate = Tt[Math.floor(Math.random() * Tt.length)];
      if (candidate && candidate !== excludeCitizen) return candidate;
    }
    // Fallback: any citizen.
    return Tt[Math.floor(Math.random() * Tt.length)];
  }

  function extractFirstUrl(text) {
    if (typeof text !== "string") return null;
    const match = text.match(/https?:\/\/[^\s]+/i);
    if (!match) return null;
    // Trim wrappers/punctuation commonly appended in chat (including backticks).
    let candidate = match[0]
      .replace(/^[`"'(<\[]+/, "")
      .replace(/[`"'(<\[]+$/, "")
      .replace(/[`"')>\].,;!?]+$/, "");

    // If the URL is still invalid (e.g. user typed `...`->), progressively trim.
    // This avoids brittle punctuation-edge cases and keeps the happy-path fast.
    for (let tries = 0; tries < 16; tries++) {
      try {
        // eslint-disable-next-line no-new
        new URL(candidate);
        return candidate;
      } catch {
        candidate = candidate.slice(0, -1).replace(/[`"')>\].,;!?\-→]+$/, "");
        if (!candidate) return null;
      }
    }
    return null;
  }

  function getEmbedIframeSrc(inputUrl) {
    if (typeof inputUrl !== "string" || !inputUrl) return null;
    let urlObj;
    try {
      urlObj = new URL(inputUrl);
    } catch {
      return null;
    }

    const host = urlObj.hostname.toLowerCase();

    // X/Twitter
    if (host === "x.com" || host === "twitter.com" || host.endsWith(".x.com") || host.endsWith(".twitter.com")) {
      const statusMatch = urlObj.pathname.match(/\/status\/(\d+)/i) || urlObj.pathname.match(/\/i\/web\/status\/(\d+)/i);
      if (statusMatch?.[1]) {
        const id = statusMatch[1];
        return `https://platform.twitter.com/embed/Tweet.html?id=${encodeURIComponent(id)}`;
      }
      return inputUrl;
    }

    // Reddit
    if (host === "reddit.com" || host.endsWith(".reddit.com")) {
      const params = new URLSearchParams(urlObj.search);
      if (!params.has("ref_source")) params.set("ref_source", "embed");
      if (!params.has("ref")) params.set("ref", "share");
      if (!params.has("embed")) params.set("embed", "true");
      // redditmedia is the canonical embed host (less likely to set restrictive headers)
      return `https://www.redditmedia.com${urlObj.pathname}?${params.toString()}`;
    }

    // LinkedIn: regular post pages often set X-Frame-Options; embed endpoint works better.
    // Source reference: https://www.linkedin.com/embed/feed/update/<urn>
    // where <urn> can be urn:li:ugcPost:<id> etc.
    if (host.endsWith("linkedin.com")) {
      const raw = urlObj.pathname + urlObj.search + urlObj.hash;
      const ugcMatch = raw.match(/ugcPost-(\d+)/i);
      if (ugcMatch?.[1]) {
        const urn = `urn:li:ugcPost:${ugcMatch[1]}`;
        // Keep URN unencoded; LinkedIn embed endpoint accepts the colon format.
        return `https://www.linkedin.com/embed/feed/update/${urn}`;
      }

      const activityMatch = raw.match(/activity-(\d+)/i);
      if (activityMatch?.[1]) {
        const urn = `urn:li:activity:${activityMatch[1]}`;
        return `https://www.linkedin.com/embed/feed/update/${urn}`;
      }

      // Already a feed/update URN URL?
      const urnMatch = raw.match(/urn:li:(ugcPost|activity|share):(\d+)/i);
      if (urnMatch?.[1] && urnMatch?.[2]) {
        const urn = `urn:li:${urnMatch[1]}:${urnMatch[2]}`;
        return `https://www.linkedin.com/embed/feed/update/${urn}`;
      }

      // Fallback: try embedding the original URL (may still be blocked).
      return inputUrl;
    }

    return inputUrl;
  }

  function getOembedJsonUrl(inputUrl) {
    if (typeof inputUrl !== "string" || !inputUrl) return null;
    let urlObj;
    try {
      urlObj = new URL(inputUrl);
    } catch {
      return null;
    }

    const host = urlObj.hostname.toLowerCase();
    if (host.endsWith("linkedin.com")) {
      return `https://www.linkedin.com/embeds/oembed.json?url=${encodeURIComponent(inputUrl)}`;
    }
    if (host === "x.com" || host === "twitter.com" || host.endsWith(".x.com") || host.endsWith(".twitter.com")) {
      return `https://publish.twitter.com/oembed?omit_script=1&url=${encodeURIComponent(inputUrl)}`;
    }
    if (host === "reddit.com" || host.endsWith(".reddit.com")) {
      return `https://www.reddit.com/oembed?url=${encodeURIComponent(inputUrl)}`;
    }
    return null;
  }

  function stripHtmlUnsafe(html) {
    return String(html || "")
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getCitizenAtIndex(index) {
    if (!Tt || Tt.length === 0) return null;
    if (!Number.isInteger(index)) return null;
    if (index >= 0 && index < Tt.length) return Tt[index];
    return null;
  }

  function createCitizenIframeBubble(url, { ttlMs = BUBBLE_TTL_MS, citizen = null } = {}) {
    if (!url || !Tt || Tt.length === 0) return;

    // Choose a citizen as anchor.
    citizen = citizen || pickCitizen(null);
    if (!citizen) return;

    const root = document.createElement("div");
    root.style.position = "absolute";
    root.style.left = "0px";
    root.style.top = "0px";
    root.style.width = "360px";
    root.style.height = "240px";
    root.style.transform = "translate(-50%, -100%)";
    root.style.border = "3px solid #2d3436";
    root.style.borderRadius = "14px";
    root.style.boxShadow = "8px 8px 0 rgba(0,0,0,0.12)";
    root.style.background = "white";
    root.style.overflow = "hidden";
    // Ensure this stays above the WebGL canvas + HUD overlays.
    root.style.zIndex = "2000";
    root.style.pointerEvents = "auto";

    const header = document.createElement("div");
    header.style.display = "flex";
    header.style.alignItems = "center";
    header.style.justifyContent = "space-between";
    header.style.gap = "8px";
    header.style.padding = "8px 10px";
    header.style.background = "#a29bfe";
    header.style.color = "white";
    header.style.fontFamily = "Nunito, sans-serif";
    header.style.fontWeight = "900";
    header.style.borderBottom = "3px solid #2d3436";

    const title = document.createElement("div");
    const embedSrc = getEmbedIframeSrc(url) || url;
    title.textContent = embedSrc !== url ? "Citizen iframe (embed)" : "Citizen iframe";
    title.style.fontSize = "12px";

    const actions = document.createElement("div");
    actions.style.display = "flex";
    actions.style.alignItems = "center";
    actions.style.gap = "8px";

    // Bubble record is created early so pin/close handlers can update state.
    const bubbleRec = {
      citizen,
      el: root,
      w: 360,
      h: 240,
      yOffset: 14,
      pinned: false,
      expiresAt: Date.now() + BUBBLE_TTL_MS,
    };

    const openLink = document.createElement("a");
    openLink.href = url;
    openLink.target = "_blank";
    openLink.rel = "noopener noreferrer";
    openLink.textContent = "Open";
    openLink.style.color = "white";
    openLink.style.textDecoration = "underline";
    openLink.style.fontSize = "12px";

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "✖";
    closeBtn.style.border = "none";
    closeBtn.style.background = "transparent";
    closeBtn.style.color = "white";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "14px";
    closeBtn.onclick = () => {
      root.remove();
      const idx = iframeBubbles.findIndex((b) => b.el === root);
      if (idx >= 0) iframeBubbles.splice(idx, 1);
    };

    actions.appendChild(openLink);
    attachPinButton({ bubbleRec, containerEl: actions, baseZIndex: 2000 });

    const addBtn = document.createElement("button");
    addBtn.textContent = "➕";
    addBtn.title = "Add to Chat + chain on bubble";
    addBtn.style.border = "none";
    addBtn.style.background = "rgba(255,255,255,0.18)";
    addBtn.style.color = "white";
    addBtn.style.cursor = "pointer";
    addBtn.style.fontSize = "14px";
    addBtn.style.lineHeight = "1";
    addBtn.style.padding = "2px 6px";
    addBtn.style.borderRadius = "10px";
    addBtn.onclick = async () => {
      try {
        const seed = typeof bubbleRec.sourceUrl === "string" && bubbleRec.sourceUrl ? bubbleRec.sourceUrl : url;
        await addBubbleToChatAndChain(bubbleRec, seed);
      } catch {}
    };
    actions.appendChild(addBtn);
    actions.appendChild(closeBtn);
    header.appendChild(title);
    header.appendChild(actions);

    const contentWrap = document.createElement("div");
    contentWrap.style.position = "relative";
    contentWrap.style.width = "100%";
    contentWrap.style.height = "calc(100% - 44px)";

    const iframe = document.createElement("iframe");
    iframe.src = embedSrc;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.setAttribute("loading", "lazy");
    // Many sites block embedding; keep sandbox permissive enough for previews,
    // but still isolated.
    iframe.setAttribute(
      "sandbox",
      "allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
    );

    const snapshot = document.createElement("div");
    snapshot.style.display = "none";
    snapshot.style.position = "absolute";
    snapshot.style.inset = "0";
    snapshot.style.overflow = "auto";
    snapshot.style.background = "white";
    snapshot.style.padding = "10px";
    snapshot.style.fontFamily = "Nunito, sans-serif";

    contentWrap.appendChild(iframe);
    contentWrap.appendChild(snapshot);

    const footer = document.createElement("div");
    footer.textContent = "If preview is blank, the site blocks iframes. Use Open.";
    footer.style.position = "absolute";
    footer.style.left = "10px";
    footer.style.bottom = "8px";
    footer.style.right = "10px";
    footer.style.fontFamily = "Nunito, sans-serif";
    footer.style.fontSize = "11px";
    footer.style.fontWeight = "700";
    footer.style.color = "#636e72";
    footer.style.pointerEvents = "none";
    footer.style.textShadow = "0 1px 0 rgba(255,255,255,0.85)";

    root.appendChild(header);
    root.appendChild(contentWrap);

    const chain = document.createElement("div");
    chain.style.maxHeight = "110px";
    chain.style.overflow = "auto";
    chain.style.background = "#f7f7fb";
    chain.style.borderTop = "3px solid #2d3436";
    chain.style.fontFamily = "Nunito, sans-serif";
    chain.style.pointerEvents = "auto";
    bubbleRec.chainEl = chain;
    bubbleRec.sourceUrl = url;
    root.appendChild(chain);

    root.appendChild(footer);
    document.body.appendChild(root);

    attachBubbleDrag({ bubbleRec, headerEl: header });

    // Debug: helps verify which src we ended up using without opening devtools.
    root.setAttribute("data-iframe-src", embedSrc);
    try {
      console.log("[citizen-iframe-bubble]", { url, embedSrc });
    } catch {}

    // Many providers block cross-origin iframes; fallback to oEmbed snapshot when possible.
    try {
      const oembedUrl = getOembedJsonUrl(url);
      if (oembedUrl) {
        wn.schedule(
          `oembed:${Date.now()}`,
          async () => {
            try {
              const res = await fetch(oembedUrl, { mode: "cors", credentials: "omit" });
              if (!res.ok) return;
              const data = await res.json();
              if (!data || typeof data !== "object") return;

              const stripHtml = (html) =>
                String(html || "")
                  .replace(/<script[\s\S]*?<\/script>/gi, " ")
                  .replace(/<style[\s\S]*?<\/style>/gi, " ")
                  .replace(/<[^>]*>/g, " ")
                  .replace(/\s+/g, " ")
                  .trim();

              const host = (() => {
                try {
                  return new URL(url).hostname.toLowerCase();
                } catch {
                  return "";
                }
              })();

              // Twitter/X oEmbed often doesn't provide `title`. Use the HTML text as a fallback.
              const htmlText = typeof data.html === "string" ? stripHtml(data.html) : "";
              const titleText =
                typeof data.title === "string" && data.title.trim()
                  ? data.title.trim()
                  : htmlText
                    ? htmlText.slice(0, 220) + (htmlText.length > 220 ? "…" : "")
                    : "Post";
              const authorText = typeof data.author_name === "string" ? data.author_name : "Author";
              const thumb = typeof data.thumbnail_url === "string" ? data.thumbnail_url : null;
              const provider = typeof data.provider_name === "string" ? data.provider_name : "Embed";

              snapshot.innerHTML = "";

              const meta = document.createElement("div");
              meta.style.fontWeight = "900";
              meta.style.color = "#2d3436";
              meta.style.marginBottom = "6px";
              meta.textContent = `${provider} • ${authorText}`;

              const titleEl = document.createElement("div");
              titleEl.style.fontWeight = "800";
              titleEl.style.color = "#2d3436";
              titleEl.style.marginBottom = "8px";
              titleEl.textContent = titleText;

              snapshot.appendChild(meta);
              snapshot.appendChild(titleEl);

              // Special-case: X/Twitter tends to look better if we show a compact excerpt.
              // Keep it lightweight and avoid injecting scripts/widgets.
              if (!thumb && htmlText && (host === "x.com" || host === "twitter.com" || provider.toLowerCase().includes("twitter"))) {
                const excerpt = document.createElement("div");
                excerpt.style.fontWeight = "800";
                excerpt.style.color = "#2d3436";
                excerpt.style.lineHeight = "1.25";
                excerpt.style.marginBottom = "10px";
                excerpt.textContent = htmlText.slice(0, 320) + (htmlText.length > 320 ? "…" : "");
                snapshot.appendChild(excerpt);
              }

              if (thumb) {
                const img = document.createElement("img");
                img.src = thumb;
                img.alt = titleText;
                img.style.width = "100%";
                img.style.border = "2px solid #2d3436";
                img.style.borderRadius = "10px";
                img.style.marginBottom = "8px";
                snapshot.appendChild(img);
              }

              const open = document.createElement("a");
              open.href = url;
              open.target = "_blank";
              open.rel = "noopener noreferrer";
              open.textContent = "Open original post";
              open.style.color = "#0984e3";
              open.style.textDecoration = "underline";
              open.style.fontWeight = "900";
              snapshot.appendChild(open);

              snapshot.style.display = "block";
              iframe.style.display = "none";
              footer.textContent = "Snapshot mode. Click Open for full post.";
            } catch {
              // If CORS blocks oEmbed, keep iframe (even if blank).
            }
          },
          0
        );
      }
    } catch {}

    iframeBubbles.push(bubbleRec);
  }

  function createCitizenLinkBubble(url, { ttlMs = BUBBLE_TTL_MS, excludeCitizen = null } = {}) {
    if (!url) return;

    const citizen = pickCitizen(excludeCitizen);
    if (!citizen) return;

    const root = document.createElement("div");
    root.style.position = "absolute";
    root.style.left = "0px";
    root.style.top = "0px";
    root.style.width = "280px";
    root.style.transform = "translate(-50%, -100%)";
    root.style.border = "3px solid #2d3436";
    root.style.borderRadius = "14px";
    root.style.boxShadow = "8px 8px 0 rgba(0,0,0,0.12)";
    root.style.background = "white";
    root.style.overflow = "hidden";
    root.style.zIndex = "1999";
    root.style.pointerEvents = "auto";

    const header = document.createElement("div");
    header.style.display = "flex";
    header.style.alignItems = "center";
    header.style.justifyContent = "space-between";
    header.style.padding = "8px 10px";
    header.style.background = "#00b894";
    header.style.color = "white";
    header.style.fontFamily = "Nunito, sans-serif";
    header.style.fontWeight = "900";
    header.style.borderBottom = "3px solid #2d3436";

    const title = document.createElement("div");
    title.textContent = "Citizen link";
    title.style.fontSize = "12px";

    const bubbleRec = {
      citizen,
      el: root,
      w: 280,
      // approximate height; actual varies by URL wrapping. used only for clamp.
      h: 96,
      yOffset: 10,
      pinned: false,
      expiresAt: Date.now() + BUBBLE_TTL_MS,
    };

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "✖";
    closeBtn.style.border = "none";
    closeBtn.style.background = "transparent";
    closeBtn.style.color = "white";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "14px";
    closeBtn.onclick = () => {
      root.remove();
      const idx = linkBubbles.findIndex((b) => b.el === root);
      if (idx >= 0) linkBubbles.splice(idx, 1);
    };

    header.appendChild(title);
    const headerActions = document.createElement("div");
    headerActions.style.display = "flex";
    headerActions.style.alignItems = "center";
    headerActions.style.gap = "8px";
    attachPinButton({ bubbleRec, containerEl: headerActions, baseZIndex: 1999 });
    const addBtn = document.createElement("button");
    addBtn.textContent = "➕";
    addBtn.title = "Add to Chat + chain on bubble";
    addBtn.style.border = "none";
    addBtn.style.background = "rgba(255,255,255,0.18)";
    addBtn.style.color = "white";
    addBtn.style.cursor = "pointer";
    addBtn.style.fontSize = "14px";
    addBtn.style.lineHeight = "1";
    addBtn.style.padding = "2px 6px";
    addBtn.style.borderRadius = "10px";
    addBtn.onclick = async () => {
      try {
        await addBubbleToChatAndChain(bubbleRec, url);
      } catch {}
    };
    headerActions.appendChild(addBtn);
    headerActions.appendChild(closeBtn);
    header.appendChild(headerActions);

    const body = document.createElement("div");
    body.style.padding = "10px";
    body.style.fontFamily = "Nunito, sans-serif";
    body.style.fontSize = "12px";
    body.style.fontWeight = "800";
    body.style.color = "#2d3436";
    body.style.wordBreak = "break-word";

    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = url;
    link.style.color = "#0984e3";
    link.style.textDecoration = "underline";

    body.appendChild(link);

    root.appendChild(header);
    root.appendChild(body);

    const chain = document.createElement("div");
    chain.style.maxHeight = "110px";
    chain.style.overflow = "auto";
    chain.style.background = "#f7f7fb";
    chain.style.borderTop = "3px solid #2d3436";
    chain.style.fontFamily = "Nunito, sans-serif";
    chain.style.pointerEvents = "auto";
    bubbleRec.chainEl = chain;
    bubbleRec.sourceUrl = url;
    root.appendChild(chain);
    document.body.appendChild(root);

    attachBubbleDrag({ bubbleRec, headerEl: header });

    linkBubbles.push(bubbleRec);
  }

  function createCitizenTextBubble(url, { ttlMs = BUBBLE_TTL_MS, citizen = null } = {}) {
    if (!url) return;
    citizen = citizen || pickCitizen(null);
    if (!citizen) return;

    const root = document.createElement("div");
    root.style.position = "absolute";
    root.style.left = "0px";
    root.style.top = "0px";
    root.style.width = "320px";
    root.style.transform = "translate(-50%, -100%)";
    root.style.border = "3px solid #2d3436";
    root.style.borderRadius = "14px";
    root.style.boxShadow = "8px 8px 0 rgba(0,0,0,0.12)";
    root.style.background = "white";
    root.style.overflow = "hidden";
    root.style.zIndex = "1998";
    root.style.pointerEvents = "auto";

    const header = document.createElement("div");
    header.style.display = "flex";
    header.style.alignItems = "center";
    header.style.justifyContent = "space-between";
    header.style.padding = "8px 10px";
    header.style.background = "#fdcb6e";
    header.style.color = "#2d3436";
    header.style.fontFamily = "Nunito, sans-serif";
    header.style.fontWeight = "900";
    header.style.borderBottom = "3px solid #2d3436";

    const title = document.createElement("div");
    title.textContent = "Citizen text";
    title.style.fontSize = "12px";

    const bubbleRec = {
      citizen,
      el: root,
      w: 320,
      h: 190,
      yOffset: 10,
      pinned: false,
      expiresAt: Date.now() + BUBBLE_TTL_MS,
    };

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "✖";
    closeBtn.style.border = "none";
    closeBtn.style.background = "transparent";
    closeBtn.style.color = "#2d3436";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "14px";
    closeBtn.onclick = () => root.remove();

    header.appendChild(title);
    const headerActions = document.createElement("div");
    headerActions.style.display = "flex";
    headerActions.style.alignItems = "center";
    headerActions.style.gap = "8px";
    attachPinButton({ bubbleRec, containerEl: headerActions, baseZIndex: 1998 });
    const addBtn = document.createElement("button");
    addBtn.textContent = "➕";
    addBtn.title = "Add to Chat + chain on bubble";
    addBtn.style.border = "none";
    addBtn.style.background = "rgba(255,255,255,0.18)";
    addBtn.style.color = "#2d3436";
    addBtn.style.cursor = "pointer";
    addBtn.style.fontSize = "14px";
    addBtn.style.lineHeight = "1";
    addBtn.style.padding = "2px 6px";
    addBtn.style.borderRadius = "10px";
    addBtn.onclick = async () => {
      try {
        await addBubbleToChatAndChain(bubbleRec, url);
      } catch {}
    };
    headerActions.appendChild(addBtn);
    headerActions.appendChild(closeBtn);
    header.appendChild(headerActions);

    const body = document.createElement("div");
    body.style.padding = "10px";
    body.style.fontFamily = "Nunito, sans-serif";
    body.style.fontSize = "12px";
    body.style.fontWeight = "800";
    body.style.color = "#2d3436";
    body.style.lineHeight = "1.25";
    body.style.maxHeight = "160px";
    body.style.overflow = "auto";
    body.textContent = "Loading…";

    root.appendChild(header);
    root.appendChild(body);

    const chain = document.createElement("div");
    chain.style.maxHeight = "110px";
    chain.style.overflow = "auto";
    chain.style.background = "#f7f7fb";
    chain.style.borderTop = "3px solid #2d3436";
    chain.style.fontFamily = "Nunito, sans-serif";
    chain.style.pointerEvents = "auto";
    bubbleRec.chainEl = chain;
    bubbleRec.sourceUrl = url;
    root.appendChild(chain);
    document.body.appendChild(root);

    attachBubbleDrag({ bubbleRec, headerEl: header });

    // Update position (re-use linkBubbles tracking; same projection/clamp logic).
    linkBubbles.push(bubbleRec);

    const oembedUrl = getOembedJsonUrl(url);
    if (!oembedUrl) {
      body.textContent = url;
      return;
    }

    wn.schedule(
      `oembed:text:${Date.now()}`,
      async () => {
        try {
          const res = await fetch(oembedUrl, { mode: "cors", credentials: "omit" });
          if (!res.ok) {
            body.textContent = url;
            return;
          }
          const data = await res.json();
          if (!data || typeof data !== "object") {
            body.textContent = url;
            return;
          }

          const htmlText = typeof data.html === "string" ? stripHtmlUnsafe(data.html) : "";
          const titleText = typeof data.title === "string" ? data.title.trim() : "";
          const candidate = htmlText || titleText || url;

          body.textContent = candidate.slice(0, 600) + (candidate.length > 600 ? "…" : "");
        } catch {
          body.textContent = url;
        }
      },
      0
    );
  }

  function createNewsFeedIframeBubbles() {
    // Local-only demo "news feed" iframes (no hardcoded third-party domains).
    // Triggered explicitly via "/news" to avoid unsolicited overlays.
    const urls = [
      "news-feed.html?topic=kampong-ai",
      "news-feed.html?topic=smart-nation",
      "news-feed.html?topic=startups",
    ];

    // Try stable citizen anchors first; fallback to random picks.
    const anchors = [getCitizenAtIndex(0), getCitizenAtIndex(1), getCitizenAtIndex(2)];
    for (let i = 0; i < urls.length; i++) {
      const citizen = anchors[i] || pickCitizen(null);
      if (!citizen) continue;
      createCitizenIframeBubble(urls[i], { ttlMs: BUBBLE_TTL_MS, citizen });
    }
  }

  function patchAnimateLoop() {
    if (typeof fw !== "function") return;
    const _origFw = fw;
    fw = function fw_patched(ts) {
      _origFw(ts);
      try {
        const t = ZR.getElapsedTime();

        // InfiniTown-like scene rotation (cheap + mobile-friendly).
        if (__sceneRotationEnabled && xn) {
          const now = Number(ts) || performance.now();
          const dtMs = __lastFrameTsMs ? now - __lastFrameTsMs : 16.666;
          __lastFrameTsMs = now;
          const scale = Math.max(0, Math.min(4, dtMs / 16.666));
          xn.rotation.y += __sceneRotationSpeedY * scale;
        }

        const tmpWorldPos = new b();
        if (__waterMesh?.userData?.type === "water") {
          const amp = Number(__waterMesh.userData.waveAmp) || 0;
          const baseY = Number(__waterMesh.userData.baseY) || 0;
          const spd = Number(__waterMesh.userData.waveSpeed) || 0;
          __waterMesh.position.y = baseY + Math.sin(t * spd) * amp;
          // Subtle opacity breathing (kept cheap).
          if (__waterMesh.material && typeof __waterMesh.material.opacity === "number") {
            __waterMesh.material.opacity = Math.max(0.25, Math.min(0.95, (__waterMesh.material.opacity + 0.0) * 1));
          }
        }

        for (let i = activeRockets.length - 1; i >= 0; i--) {
          const r = activeRockets[i];
          if (!r || !r.userData) {
            activeRockets.splice(i, 1);
            continue;
          }
          r.userData.vy *= r.userData.accel;
          r.position.y += r.userData.vy;
          r.rotation.y += 0.02;

          const flame = r.userData.flame;
          if (flame) {
            const scale = 0.9 + Math.abs(Math.sin(t * 18)) * 0.6;
            flame.scale.set(scale, 1 + Math.abs(Math.sin(t * 14)) * 1.2, scale);
          }

          if (r.position.y > r.userData.maxAltitude) {
            xn.remove(r);
            activeRockets.splice(i, 1);
          }
        }

        const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
        const margin = 12;

        // Update + GC bubbles (iframe + link/snippet/text) with collision avoidance.
        const bubbleItems = [];
        const nowMs = Date.now();
        const W = window.innerWidth;
        const H = window.innerHeight;

        const collectBubble = (bubbleRec, priority, defaultW, defaultH) => {
          if (!bubbleRec?.el || !bubbleRec?.citizen) return;
          if (!bubbleRec.pinned && nowMs > (bubbleRec.expiresAt || 0)) {
            try {
              bubbleRec.el.remove();
            } catch {}
            bubbleRec.__remove = true;
            return;
          }
          if (!vn) return;

          bubbleRec.citizen.getWorldPosition(tmpWorldPos);
          tmpWorldPos.y += Number.isFinite(bubbleRec.yOffset) ? bubbleRec.yOffset : priority >= 2 ? 10 : 14;
          tmpWorldPos.project(vn);
          const x = (tmpWorldPos.x * 0.5 + 0.5) * W;
          const y = (-tmpWorldPos.y * 0.5 + 0.5) * H;

          const bw = Number.isFinite(bubbleRec.w) ? bubbleRec.w : defaultW;
          const bh = Number.isFinite(bubbleRec.h) ? bubbleRec.h : defaultH;

          // Because bubble uses translate(-50%, -100%): left is center, top is bottom.
          const rawCx = Number.isFinite(x) ? x : W * 0.5;
          const rawBy = Number.isFinite(y) ? y : H * 0.8;
          const cx = clamp(rawCx, margin + bw / 2, W - margin - bw / 2);
          const by = clamp(rawBy, margin + bh, H - margin);

          const forcedPriority = bubbleRec.dragging ? 4 : bubbleRec.pinned ? 3 : priority;
          bubbleItems.push({
            bubbleRec,
            el: bubbleRec.el,
            cx: bubbleRec.manual && Number.isFinite(bubbleRec.manualCx) ? bubbleRec.manualCx : cx,
            by: bubbleRec.manual && Number.isFinite(bubbleRec.manualBy) ? bubbleRec.manualBy : by,
            w: bw,
            h: bh,
            priority: forcedPriority,
          });
        };

        // iframe bubbles (lower priority than key-point/snippet bubbles)
        for (let idx = iframeBubbles.length - 1; idx >= 0; idx--) {
          const bubbleRec = iframeBubbles[idx];
          collectBubble(bubbleRec, 1, 360, 240);
          if (bubbleRec?.__remove) iframeBubbles.splice(idx, 1);
        }

        // link/snippet/text bubbles (higher priority)
        for (let idx = linkBubbles.length - 1; idx >= 0; idx--) {
          const bubbleRec = linkBubbles[idx];
          collectBubble(bubbleRec, 2, 280, 96);
          if (bubbleRec?.__remove) linkBubbles.splice(idx, 1);
        }

        if (bubbleItems.length > 1) {
          layoutBubblePositions(bubbleItems, { width: W, height: H, margin });
        }

        for (const item of bubbleItems) {
          item.el.style.left = `${item.cx}px`;
          item.el.style.top = `${item.by}px`;
          // Enforce Z-index layering (pinned on top, then priority buckets).
          try {
            const base = item.priority >= 2 ? 2005 : 2000;
            const z = (item.bubbleRec?.pinned ? base + 50 : base) + (item.priority || 0);
            item.el.style.zIndex = String(z);
          } catch {}
        }
      } catch {}
    };
  }

  function parseDebateSnippet(snippet) {
    const raw = String(snippet || "").trim();
    if (!raw) return { role: "", text: "" };
    const m = raw.match(/^\s*(Pro|Con|Neutral|Policy|Builder|Citizen|Skeptic|Optimist|Realist)\s*:\s*(.+)$/i);
    if (!m) return { role: "", text: raw };
    return { role: (m[1] || "").trim(), text: (m[2] || "").trim() };
  }

  function roleHue(role, fallbackHue = 200) {
    const r = String(role || "").toLowerCase();
    if (!r) return fallbackHue;
    if (r === "pro" || r === "optimist") return 140;
    if (r === "con" || r === "skeptic") return 10;
    if (r === "policy") return 210;
    if (r === "builder") return 280;
    if (r === "neutral" || r === "realist") return 50;
    return fallbackHue;
  }

  function createCitizenSnippetBubble(snippet, { ttlMs = BUBBLE_TTL_MS, citizen = null, hue = 200, headerTitle = "" } = {}) {
    const parsed = parseDebateSnippet(snippet);
    const text = String(parsed.text || "").trim();
    if (!text) return;
    citizen = citizen || pickCitizen(null);
    if (!citizen) return;

    const root = document.createElement("div");
    root.style.position = "absolute";
    root.style.left = "0px";
    root.style.top = "0px";
    root.style.width = "240px";
    root.style.transform = "translate(-50%, -100%)";
    root.style.border = "3px solid #2d3436";
    root.style.borderRadius = "14px";
    root.style.boxShadow = "8px 8px 0 rgba(0,0,0,0.12)";
    root.style.background = "white";
    root.style.overflow = "hidden";
    // Ensure key-point bubbles stay above iframe/snapshot bubbles.
    root.style.zIndex = "2005";
    root.style.pointerEvents = "auto";

    const header = document.createElement("div");
    header.style.display = "flex";
    header.style.alignItems = "center";
    header.style.justifyContent = "space-between";
    header.style.padding = "8px 10px";
    const finalHue = roleHue(parsed.role, hue);
    header.style.background = `hsl(${finalHue}, 80%, 70%)`;
    header.style.color = "#2d3436";
    header.style.fontFamily = "Nunito, sans-serif";
    header.style.fontWeight = "900";
    header.style.borderBottom = "3px solid #2d3436";

    const titleEl = document.createElement("div");
    titleEl.textContent = parsed.role ? `Citizen (${parsed.role})` : headerTitle || "Citizen";
    titleEl.style.fontSize = "12px";

    const bubbleRec = {
      citizen,
      el: root,
      w: 240,
      h: 92,
      yOffset: 10,
      pinned: false,
      expiresAt: Date.now() + BUBBLE_TTL_MS,
    };

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "✖";
    closeBtn.style.border = "none";
    closeBtn.style.background = "transparent";
    closeBtn.style.color = "#2d3436";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "14px";
    closeBtn.onclick = () => {
      root.remove();
      const idx = linkBubbles.findIndex((b) => b.el === root);
      if (idx >= 0) linkBubbles.splice(idx, 1);
    };

    header.appendChild(titleEl);
    const headerActions = document.createElement("div");
    headerActions.style.display = "flex";
    headerActions.style.alignItems = "center";
    headerActions.style.gap = "8px";
    attachPinButton({ bubbleRec, containerEl: headerActions, baseZIndex: 2005 });
    const addBtn = document.createElement("button");
    addBtn.textContent = "➕";
    addBtn.title = "Add to Chat + chain on bubble";
    addBtn.style.border = "none";
    addBtn.style.background = "rgba(255,255,255,0.18)";
    addBtn.style.color = "#2d3436";
    addBtn.style.cursor = "pointer";
    addBtn.style.fontSize = "14px";
    addBtn.style.lineHeight = "1";
    addBtn.style.padding = "2px 6px";
    addBtn.style.borderRadius = "10px";
    addBtn.onclick = async () => {
      try {
        await addBubbleToChatAndChain(bubbleRec, String(snippet || "").slice(0, 700));
      } catch {}
    };
    headerActions.appendChild(addBtn);
    headerActions.appendChild(closeBtn);
    header.appendChild(headerActions);

    const body = document.createElement("div");
    body.style.padding = "10px";
    body.style.fontFamily = "Nunito, sans-serif";
    body.style.fontSize = "12px";
    body.style.fontWeight = "900";
    body.style.color = "#2d3436";
    body.style.lineHeight = "1.25";
    body.textContent = text;

    root.appendChild(header);
    root.appendChild(body);

    const chain = document.createElement("div");
    chain.style.maxHeight = "110px";
    chain.style.overflow = "auto";
    chain.style.background = "#f7f7fb";
    chain.style.borderTop = "3px solid #2d3436";
    chain.style.fontFamily = "Nunito, sans-serif";
    chain.style.pointerEvents = "auto";
    bubbleRec.chainEl = chain;
    bubbleRec.sourceUrl = "";
    root.appendChild(chain);
    document.body.appendChild(root);

    attachBubbleDrag({ bubbleRec, headerEl: header });

    // Lightweight interaction/animation: pop-in + settle.
    try {
      root.animate(
        [
          { transform: "translate(-50%, -100%) scale(0.92)", opacity: 0 },
          { transform: "translate(-50%, -106%) scale(1.03)", opacity: 1, offset: 0.6 },
          { transform: "translate(-50%, -100%) scale(1)", opacity: 1 },
        ],
        { duration: 420, easing: "cubic-bezier(0.2, 0.9, 0.2, 1)" }
      );
    } catch {}

    linkBubbles.push(bubbleRec);
  }

  function normalizeSnippetText(s) {
    return String(s || "")
      .replace(/\s+/g, " ")
      .replace(/[“”]/g, '"')
      .trim();
  }

  function cleanBubbleSnippet(s, maxLen = 96) {
    let t = normalizeSnippetText(s);
    if (!t) return "";
    // Filter obvious meta/prompt leakage.
    const lower = t.toLowerCase();
    if (lower.includes("we need to") || lower.includes("output json") || lower.includes("schema") || lower.includes("the user asks")) return "";
    // Filter generic URL template spam (we generate key points instead).
    if (lower.startsWith("i saw this on")) return "";
    // Single key point: keep first sentence-ish chunk.
    t = t.split(" · ")[0].split(" | ")[0].split("\n")[0].trim();
    if (t.length > maxLen) t = t.slice(0, maxLen - 1).trimEnd() + "…";
    return t;
  }

  function removeGenericUrlTemplateBubbles() {
    try {
      const nodes = document.querySelectorAll("div");
      let removed = 0;
      for (const el of nodes) {
        if (removed >= 20) break;
        if (!el || !(el instanceof HTMLElement)) continue;
        const txt = String(el.textContent || "").trim();
        if (!txt) continue;
        if (!/^I saw this on\\s+/i.test(txt)) continue;
        const stylePos = el.style?.position;
        if (stylePos && stylePos !== "absolute") continue;
        // Try to remove the whole bubble container (walk up a bit).
        let target = el;
        for (let i = 0; i < 4; i++) {
          if (target?.style?.transform?.includes("translate(-50%")) break;
          target = target?.parentElement || target;
        }
        try {
          target?.remove?.();
          removed++;
        } catch {}
      }
    } catch {}
  }

  function dedupeSnippets(snippets, maxCount = 3) {
    const seen = new Set();
    const recent = (window.__singabldr_recent_bubble_snippets_v1 =
      window.__singabldr_recent_bubble_snippets_v1 || []);
    const recentSet = new Set(recent.map((x) => String(x || "").toLowerCase()));

    const out = [];
    for (const s of Array.isArray(snippets) ? snippets : []) {
      const cleaned = cleanBubbleSnippet(s);
      if (!cleaned) continue;
      const key = cleaned.toLowerCase();
      if (seen.has(key) || recentSet.has(key)) continue;
      seen.add(key);
      out.push(cleaned);
      if (out.length >= maxCount) break;
    }

    // remember last 24 snippets
    for (const s of out) recent.push(s);
    while (recent.length > 24) recent.shift();
    return out;
  }

  async function createUrlKeyPointBubbles(url) {
    try {
      const providerKey = readSelectedLlmProviderKey?.() || "none";
      const apiKey = readLlmApiKeyMaybe?.();
      const mode = readInteractionMode?.() || "command";

      // Dedup repeated URL handling.
      const schedKey = `flowinfish:url:${url}`;
      let didRun = false;
      await new Promise((resolve) => {
        wn?.schedule?.(
          schedKey,
          async () => {
            didRun = true;
            try {
              let snapshot = "";
              try {
                const oembedUrl = getOembedJsonUrl(url);
                if (oembedUrl) {
                  const res = await fetch(oembedUrl, { mode: "cors", credentials: "omit" });
                  if (res.ok) {
                    const data = await res.json();
                    const title = typeof data?.title === "string" ? data.title : "";
                    const html = typeof data?.html === "string" ? data.html : "";
                    const text = stripHtmlUnsafe(html);
                    snapshot = [title, text].filter(Boolean).join(" — ").slice(0, 1600);
                  }
                }
              } catch {}

              const urlObj = (() => {
                try {
                  return new URL(url);
                } catch {
                  return null;
                }
              })();
              const domain = urlObj?.hostname || "this link";

              const deriveSlugTitle = () => {
                try {
                  const path = String(urlObj?.pathname || "");
                  // LinkedIn common: /posts/<slug>-activity-<id>-<hash>
                  const m = path.match(/\/posts\/([^/?#]+)/i);
                  if (m?.[1]) {
                    const raw = m[1];
                    const cleaned = raw
                      .replace(/-activity-\d+.*$/i, "")
                      .replace(/-ugcpost-\d+.*$/i, "")
                      .replace(/[-_]+/g, " ")
                      .trim();
                    if (cleaned) return cleaned.slice(0, 64);
                  }
                  const seg = path.split("/").filter(Boolean).pop() || "";
                  const cleaned2 = seg.replace(/[-_]+/g, " ").trim();
                  return cleaned2 ? cleaned2.slice(0, 64) : "";
                } catch {
                  return "";
                }
              };

              const slugTitle = deriveSlugTitle();
              const localFallback = dedupeSnippets([
                slugTitle ? `Key point: ${slugTitle}` : `Key point: shared from ${domain}`,
                snapshot ? "Key point: preview text available (ask for 3 takeaways)" : "Key point: paste 2 lines for a quick summary",
                "Key point: want highlights, risks, or action items?",
              ]);

              let snippets = [];
              const canUseLlm = mode === "chat" && providerKey !== "none" && apiKey;
              if (canUseLlm) {
                const isSmartNationAiStrategy =
                  domain.includes("smartnation.gov.sg") && String(urlObj?.pathname || "").toLowerCase().includes("national-ai-strategy");

                const prompt = isSmartNationAiStrategy
                  ? [
                      `User shared a URL: ${url}`,
                      snapshot ? `Snapshot text: ${snapshot}` : "",
                      "Task: create a citizen DEBATE about this page (Singapore National AI Strategy).",
                      "Return JSON with bubbleSnippets only (5-6 items).",
                      "Each bubbleSnippets item must be ONE key point (8-16 words), DISTINCT.",
                      'Prefix each with a role label like: "Pro:", "Con:", "Policy:", "Builder:", "Neutral:".',
                      'Do NOT use phrases like "I saw this on" or mention the domain.',
                      "No commands; command must be null.",
                    ]
                      .filter(Boolean)
                      .join("\n")
                  : [
                      `User shared a URL: ${url}`,
                      snapshot ? `Snapshot text: ${snapshot}` : "",
                      "Return JSON with bubbleSnippets only (3 items).",
                      "Each bubbleSnippets item must be ONE key point (6-14 words), DISTINCT.",
                      'Do NOT use phrases like "I saw this on" or mention the domain unless necessary.',
                      "No commands; command must be null.",
                    ]
                      .filter(Boolean)
                      .join("\n");

                const plan = await invokeFlowinFishPlan({ providerKey, apiKey, userText: prompt, promptKey: "bubbles_only" });
                const desired = isSmartNationAiStrategy ? 6 : 3;
                snippets = dedupeSnippets(plan?.bubbleSnippets || [], desired);
              }

              // If model output collapses to generic “I saw this on …”, use the local fallback.
              const genericPrefix = (s) => String(s || "").toLowerCase().startsWith("i saw this on");
              const genericCount = (snippets || []).filter(genericPrefix).length;
              if (snippets.length < 2 || genericCount >= Math.max(2, Math.ceil(snippets.length * 0.6))) snippets = localFallback;

              // If model fails, create at least one bubble using domain.
              const finalSnippets = snippets.length > 0 ? snippets : localFallback;

              // Create bubbles on distinct citizens to reduce overlap.
              const citizens = [
                getCitizenAtIndex(0) || null,
                getCitizenAtIndex(1) || null,
                getCitizenAtIndex(3) || null,
              ];
              let lastCitizen = null;
              finalSnippets.forEach((s, i) => {
                wn?.schedule?.(
                  `${schedKey}:bubble:${i}`,
                  () => {
                    const preferred = citizens[i] || null;
                    const citizen = preferred || pickCitizen(lastCitizen);
                    lastCitizen = citizen || lastCitizen;
                    createCitizenSnippetBubble(s, { ttlMs: 18_000, citizen, hue: 190 + i * 20 });
                  },
                  i * 450
                );
              });

              // Defensive cleanup: suppress legacy generic URL-template bubbles if any external swarm loop emits them.
              try {
                wn?.schedule?.(`${schedKey}:cleanup:0`, removeGenericUrlTemplateBubbles, 0);
                wn?.schedule?.(`${schedKey}:cleanup:1`, removeGenericUrlTemplateBubbles, 300);
                wn?.schedule?.(`${schedKey}:cleanup:2`, removeGenericUrlTemplateBubbles, 900);
                wn?.schedule?.(`${schedKey}:cleanup:3`, removeGenericUrlTemplateBubbles, 1800);
              } catch {}
            } catch {}
            resolve();
          },
          0
        );
      });
      return didRun;
    } catch {
      return false;
    }
  }

  function getApiBase() {
    try {
      const raw = (window.__API_BASE || "").toString().trim();
      if (!raw) return "";
      return raw.endsWith("/") ? raw.slice(0, -1) : raw;
    } catch {
      return "";
    }
  }

  async function flowinfishPushToProd(notesFile, { sendTelegram = true } = {}) {
    const apiBase = getApiBase();
    if (!apiBase) throw new Error("Missing window.__API_BASE");
    if (!notesFile) throw new Error("No notes file selected");

    const form = new FormData();
    form.append("notes", notesFile, notesFile?.name || "notes.txt");
    form.append("send_telegram", sendTelegram ? "true" : "false");

    const res = await fetch(`${apiBase}/api/flowinfish/push-to-prod`, {
      method: "POST",
      body: form,
    });
    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      throw new Error(`push-to-prod failed (${res.status}): ${txt.slice(0, 300)}`);
    }
    return await res.json();
  }

  async function mirofishStartSimulation(
    simulationId,
    { platform = "parallel", maxRounds = null, force = true, enableGraphMemoryUpdate = false } = {}
  ) {
    const apiBase = getApiBase();
    if (!apiBase) throw new Error("Missing window.__API_BASE");
    const sid = String(simulationId || "").trim();
    if (!sid) throw new Error("Missing simulation_id");

    const qs = new URLSearchParams();
    qs.set("platform", String(platform || "parallel"));
    qs.set("force", force ? "true" : "false");
    qs.set("enable_graph_memory_update", enableGraphMemoryUpdate ? "true" : "false");
    if (maxRounds != null && Number.isFinite(Number(maxRounds))) qs.set("max_rounds", String(Math.max(1, Number(maxRounds))));

    const res = await fetch(`${apiBase}/api/mirofish/simulations/${encodeURIComponent(sid)}/start?${qs.toString()}`, { method: "POST" });
    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      throw new Error(`mirofish start failed (${res.status}): ${txt.slice(0, 300)}`);
    }
    return await res.json();
  }

  async function mirofishStopSimulation(simulationId) {
    const apiBase = getApiBase();
    if (!apiBase) throw new Error("Missing window.__API_BASE");
    const sid = String(simulationId || "").trim();
    if (!sid) throw new Error("Missing simulation_id");

    const res = await fetch(`${apiBase}/api/mirofish/simulations/${encodeURIComponent(sid)}/stop`, { method: "POST" });
    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      throw new Error(`mirofish stop failed (${res.status}): ${txt.slice(0, 300)}`);
    }
    return await res.json();
  }

  function mirofishOpenStream(simulationId, { platform = "" } = {}) {
    const apiBase = getApiBase();
    const sid = String(simulationId || "").trim();
    if (!apiBase || !sid) return null;

    const qs = new URLSearchParams();
    if (platform) qs.set("platform", String(platform));
    const url = `${apiBase}/api/mirofish/simulations/${encodeURIComponent(sid)}/stream?${qs.toString()}`;
    try {
      return new EventSource(url);
    } catch {
      return null;
    }
  }

  function patchUrlToIframeBubble() {
    if (typeof un !== "function") return;
    const _origUn = un;
    un = function un_url_iframe_patched(message, isAuto) {
      const result = _origUn(message, isAuto);
      try {
        const lower = String(message || "").toLowerCase();
        if (lower.startsWith("/news")) {
          createNewsFeedIframeBubbles();
          return result;
        }
        const url = extractFirstUrl(String(message || ""));
        if (url) {
          // Always prefer compact key-point bubbles for URLs to avoid clutter/overlap.
          // (No iframe/snapshot bubbles here; those often cover the key points.)
          createUrlKeyPointBubbles(url);
        }
      } catch {}
      return result;
    };
  }

  function fixYjsWebsocketProviderUrlIfNeeded() {
    // y-websocket expects the base server URL WITHOUT the "/ws" suffix.
    // Using "wss://demos.yjs.dev/ws" results in "wss://demos.yjs.dev/ws/<room>",
    // which can yield a non-101 handshake ("bad response") depending on the server.
    try {
      if (!Vp || typeof Vp !== "object") return;
      const serverUrl = typeof Vp.serverUrl === "string" ? Vp.serverUrl : "";
      if (!serverUrl || !serverUrl.includes("demos.yjs.dev/ws")) return;
      if (window.__singabldr_yjs_url_fixed_v1) return;
      window.__singabldr_yjs_url_fixed_v1 = true;

      const nextUrl = serverUrl.replace("demos.yjs.dev/ws", "demos.yjs.dev");
      // Avoid disconnecting (which triggers "closed before established" noise).
      // Instead, normalize URL fields so future reconnects use the correct base.
      try {
        Vp.serverUrl = nextUrl;
      } catch {}
      try {
        if (typeof Vp.url === "string") Vp.url = Vp.url.replace("demos.yjs.dev/ws", "demos.yjs.dev");
      } catch {}
      try {
        if (typeof Vp.bcChannel === "string") Vp.bcChannel = Vp.bcChannel.replace("demos.yjs.dev/ws", "demos.yjs.dev");
      } catch {}

      console.log("[singabldr] Normalized y-websocket URL fields:", serverUrl, "->", nextUrl);
    } catch {}
  }

  function patchScriptNoneMode() {
    const scriptSelect = document.getElementById("script-select");
    if (!scriptSelect) return;

    const presetLabel = document.getElementById("script-preset-label");
    const presetSelect = document.getElementById("script-preset-select");
    const localBtn = document.getElementById("script-local-btn");
    const urlContainer = document.getElementById("script-url-container");
    const statusEl = document.getElementById("script-status");

    // Capture-phase so we can suppress the existing handler when value === "none".
    scriptSelect.addEventListener(
      "change",
      (ev) => {
        try {
          if (scriptSelect.value !== "none") return;
          ev?.stopImmediatePropagation?.();
          ev?.preventDefault?.();

          // Cancel any in-flight / scheduled loops to prevent stale concurrency.
          try {
            if (typeof rn === "number") rn += 1;
          } catch {}
          try {
            wn?.cancel?.("script:auto:restart");
            wn?.cancel?.("script:auto:loop");
          } catch {}

          if (presetLabel) presetLabel.style.display = "none";
          if (presetSelect) presetSelect.style.display = "none";
          if (localBtn) localBtn.style.display = "none";
          if (urlContainer) urlContainer.style.display = "none";

          if (statusEl) {
            statusEl.innerText = "None: Script execution is disabled.";
            statusEl.style.color = "#636e72";
          }
        } catch {}
      },
      true
    );
  }

  // ---- LLM command router ---------------------------------------------------
  function readRememberLlmKeyFlag() {
    try {
      return localStorage.getItem(LS_KEY_LLM_REMEMBER_KEY) === "1";
    } catch {
      return false;
    }
  }

  function writeRememberLlmKeyFlag(enabled) {
    try {
      localStorage.setItem(LS_KEY_LLM_REMEMBER_KEY, enabled ? "1" : "0");
    } catch {}
  }

  function readLlmApiKeyMaybe() {
    try {
      const sessionKey = sessionStorage.getItem(SS_KEY_LLM_API_KEY);
      if (sessionKey) return sessionKey;
    } catch {}

    try {
      const persisted = localStorage.getItem(LS_KEY_LLM_API_KEY_PERSIST);
      if (persisted) return persisted;
    } catch {}

    return null;
  }

  function persistLlmApiKey(nextKey, { remember } = {}) {
    const normalized = typeof nextKey === "string" ? nextKey.trim() : "";
    try {
      if (normalized) sessionStorage.setItem(SS_KEY_LLM_API_KEY, normalized);
      else sessionStorage.removeItem(SS_KEY_LLM_API_KEY);
    } catch {}

    const shouldPersist = remember ?? readRememberLlmKeyFlag();
    try {
      if (shouldPersist && normalized) localStorage.setItem(LS_KEY_LLM_API_KEY_PERSIST, normalized);
      else localStorage.removeItem(LS_KEY_LLM_API_KEY_PERSIST);
    } catch {}
  }

  // ---- DeerFlow unified LLM surface (single calling surface) ----------------
  const LS_KEY_FLOWINFISH_SESSION_ID = "singabldr.flowinfish.session_id";

  function getFlowinfishSessionId() {
    try {
      const existing = localStorage.getItem(LS_KEY_FLOWINFISH_SESSION_ID);
      if (existing && typeof existing === "string" && existing.length >= 8) return existing;
    } catch {}

    let next = "";
    try {
      const buf = new Uint8Array(12);
      crypto.getRandomValues(buf);
      next = Array.from(buf)
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    } catch {
      next = `sess_${Math.random().toString(16).slice(2)}_${Date.now().toString(16)}`;
    }

    try {
      localStorage.setItem(LS_KEY_FLOWINFISH_SESSION_ID, next);
    } catch {}
    return next;
  }

  function buildDeerflowLlmHeaders({ providerKey } = {}) {
    const headers = { "Content-Type": "application/json", "X-FlowinFish-Session": getFlowinfishSessionId() };
    try {
      const pk = typeof providerKey === "string" ? providerKey.trim() : "";
      if (pk) headers["X-FlowinFish-Provider"] = pk;
    } catch {}
    return headers;
  }

  async function deerflowUpsertLlmSessionKey({ providerKey, apiKey } = {}) {
    const apiBase = getApiBase();
    if (!apiBase) return { ok: false, error: "Missing window.__API_BASE" };
    const key = typeof apiKey === "string" ? apiKey.trim() : "";
    if (!key) return { ok: false, error: "Missing API key" };
    const res = await fetch(`${apiBase}/api/llm/session/key`, {
      method: "PUT",
      headers: buildDeerflowLlmHeaders({ providerKey }),
      body: JSON.stringify({ apiKey: key, providerKey: providerKey || "" }),
    });
    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      return { ok: false, error: `deerflow key store failed (${res.status}): ${txt.slice(0, 200)}` };
    }
    return { ok: true };
  }

  async function deerflowClearLlmSessionKey() {
    const apiBase = getApiBase();
    if (!apiBase) return { ok: false, error: "Missing window.__API_BASE" };
    const res = await fetch(`${apiBase}/api/llm/session/key`, {
      method: "DELETE",
      headers: buildDeerflowLlmHeaders(),
    });
    if (!res.ok) return { ok: false, error: `deerflow key clear failed (${res.status})` };
    return { ok: true };
  }

  function readSelectedLlmProviderKey() {
    try {
      const v = localStorage.getItem(LS_KEY_LLM_MODEL);
      if (v && LLM_PROVIDERS[v]) return v;
    } catch {}
    return "byteplus_seed_2_lite";
  }

  function persistSelectedLlmProviderKey(providerKey) {
    try {
      if (!providerKey || !LLM_PROVIDERS[providerKey]) return;
      const prev = localStorage.getItem(LS_KEY_LLM_MODEL);
      if (prev === providerKey) return;
      // Coalesce persistence writes to avoid churn under rapid switching.
      wn?.schedule?.("persist:llm:provider", () => localStorage.setItem(LS_KEY_LLM_MODEL, providerKey), 50);
    } catch {}
  }

  function readInteractionMode() {
    try {
      const v = localStorage.getItem(LS_KEY_INTERACTION_MODE);
      if (v === "chat" || v === "command") return v;
    } catch {}
    return "command";
  }

  function installInteractionModeUi() {
    const select = document.getElementById("interaction-mode-select");
    if (!select) return;
    const current = readInteractionMode();
    if (select.value !== current) select.value = current;
    select.addEventListener("change", () => {
      try {
        localStorage.setItem(LS_KEY_INTERACTION_MODE, select.value);
      } catch {}
    });
  }

  function updateLlmStatusText(statusEl, { providerKey, apiKey } = {}) {
    if (!statusEl) return;
    const provider = providerKey ? LLM_PROVIDERS[providerKey] : null;
    const remember = readRememberLlmKeyFlag();
    const scopeLabel = apiKey ? (remember ? "localStorage" : "sessionStorage") : "none";
    if (providerKey === "none") {
      statusEl.textContent = "LLM disabled: AI Model is set to None.";
      return;
    }
    if (providerKey && !llmProviderSupportsText(providerKey)) {
      statusEl.textContent = `LLM disabled: ${provider?.label || providerKey} requires a non-text API (${provider?.apiKind || "unknown"}).`;
      return;
    }
    statusEl.textContent = apiKey
      ? `LLM ready: ${provider?.label || providerKey} (key in ${scopeLabel}).`
      : `LLM disabled: set an API key to enable model calls (session-only by default).`;
  }

  function installLlmSettingsUi() {
    const modelSelect = document.getElementById("llm-model-select");
    const apiKeyInput = document.getElementById("llm-api-key-input");
    const rememberCb = document.getElementById("llm-remember-key");
    const clearBtn = document.getElementById("llm-clear-key-btn");
    const statusEl = document.getElementById("llm-status");

    if (!modelSelect || !apiKeyInput || !rememberCb || !clearBtn || !statusEl) return;

    const providerKey = readSelectedLlmProviderKey();
    if (modelSelect.value !== providerKey) modelSelect.value = providerKey;

    const remember = readRememberLlmKeyFlag();
    rememberCb.checked = remember;

    const existingKey = readLlmApiKeyMaybe();
    if (existingKey && !apiKeyInput.value) apiKeyInput.value = existingKey;
    updateLlmStatusText(statusEl, { providerKey: modelSelect.value, apiKey: existingKey });

    const syncEnabledState = () => {
      const disabled = modelSelect.value === "none" || !llmProviderSupportsText(modelSelect.value);
      apiKeyInput.disabled = disabled;
      rememberCb.disabled = disabled;
      clearBtn.disabled = disabled;
      apiKeyInput.style.opacity = disabled ? "0.6" : "1";
    };
    syncEnabledState();

    // Local dev convenience: allow a gitignored local file to hydrate the key.
    // Security: only attempt on localhost / 127.0.0.1, and only if no key exists yet.
    if (!existingKey) {
      try {
        const host = String(window.location.hostname || "");
        const isLocalhost = host === "localhost" || host === "127.0.0.1" || host === "0.0.0.0";
        if (isLocalhost) {
          wn?.schedule?.(
            "llm:hydrateLocalSecrets",
            async () => {
              try {
                const res = await fetch("./user-secrets.local.json", { cache: "no-store" });
                if (!res.ok) return;
                const json = await res.json();
                const providerKey = modelSelect.value;
                const candidate = json?.llm?.[providerKey]?.apiKey;
                if (typeof candidate !== "string" || !candidate.trim()) return;
                apiKeyInput.value = candidate.trim();
                persistLlmApiKey(candidate.trim(), { remember: rememberCb.checked });
                updateLlmStatusText(statusEl, { providerKey, apiKey: candidate.trim() });
                try {
                  void deerflowUpsertLlmSessionKey({ providerKey, apiKey: candidate.trim() });
                } catch {}
              } catch {}
            },
            0
          );
        }
      } catch {}
    }

    modelSelect.addEventListener("change", () => {
      persistSelectedLlmProviderKey(modelSelect.value);
      updateLlmStatusText(statusEl, { providerKey: modelSelect.value, apiKey: readLlmApiKeyMaybe() });
      syncEnabledState();
      // Best-effort: keep DeerFlow session key bound to the current provider selection.
      // Coalesced to avoid churn under rapid switching.
      try {
        wn?.schedule?.(
          "deerflow:llm:bind",
          () => {
            const k = readLlmApiKeyMaybe();
            if (!k) return;
            void deerflowUpsertLlmSessionKey({ providerKey: modelSelect.value, apiKey: k });
          },
          150
        );
      } catch {}
    });

    rememberCb.addEventListener("change", () => {
      writeRememberLlmKeyFlag(rememberCb.checked);
      const key = readLlmApiKeyMaybe();
      persistLlmApiKey(key || "", { remember: rememberCb.checked });
      updateLlmStatusText(statusEl, { providerKey: modelSelect.value, apiKey: readLlmApiKeyMaybe() });
    });

    apiKeyInput.addEventListener("input", () => {
      const nextKey = apiKeyInput.value;
      // Coalesce writes to avoid churn while the user types.
      wn?.schedule?.(
        "persist:llmApiKey",
        () => {
          persistLlmApiKey(nextKey, { remember: rememberCb.checked });
          updateLlmStatusText(statusEl, { providerKey: modelSelect.value, apiKey: readLlmApiKeyMaybe() });
          // Store server-side (single LLM calling surface) so browser no longer needs to send keys on each call.
          const k = readLlmApiKeyMaybe();
          if (k) void deerflowUpsertLlmSessionKey({ providerKey: modelSelect.value, apiKey: k });
        },
        250
      );
    });

    clearBtn.addEventListener("click", (ev) => {
      ev?.preventDefault?.();
      apiKeyInput.value = "";
      persistLlmApiKey("", { remember: false });
      rememberCb.checked = false;
      writeRememberLlmKeyFlag(false);
      updateLlmStatusText(statusEl, { providerKey: modelSelect.value, apiKey: null });
      try {
        void deerflowClearLlmSessionKey();
      } catch {}
    });
  }

  function shouldSkipLlmRouting(messageLower) {
    if (!messageLower) return true;

    if (messageLower.includes("run script") || messageLower.includes("start simulation")) return true;
    if (extractFirstUrl(messageLower)) return true;

    // Fast path: if local rules can handle it, avoid LLM call.
    try {
      const commands = le?.commands;
      if (commands && typeof commands === "object") {
        for (const [commandKey, synonyms] of Object.entries(commands)) {
          if (!Array.isArray(synonyms)) continue;
          for (const syn of synonyms) {
            if (typeof syn === "string" && syn && messageLower.includes(syn)) return true;
          }
          // Minor optimization: short-circuit on popular commands.
          if (commandKey === "roll" || commandKey === "weather" || commandKey === "theme") {
            // already covered by synonym scanning above
          }
        }
      }
    } catch {}

    return false;
  }

  const __llmInflight = new Map();

  async function readLlmErrorMessage(res) {
    try {
      const text = await res.text();
      if (!text) return `LLM request failed (${res.status})`;
      try {
        const json = JSON.parse(text);
        const msg =
          typeof json?.error?.message === "string"
            ? json.error.message
            : typeof json?.message === "string"
              ? json.message
              : "";
        if (msg) return `LLM request failed (${res.status}): ${msg}`;
      } catch {}
      return `LLM request failed (${res.status}): ${text.slice(0, 500)}`;
    } catch {
      return `LLM request failed (${res.status})`;
    }
  }

  function extractResponsesText(responseJson) {
    try {
      const output = Array.isArray(responseJson?.output) ? responseJson.output : [];
      const texts = [];
      for (const item of output) {
        const content = Array.isArray(item?.content) ? item.content : [];
        for (const part of content) {
          if (!part) continue;
          if (typeof part === "string") {
            if (part.trim()) texts.push(part.trim());
            continue;
          }
          if (typeof part?.text === "string" && part.text.trim()) {
            texts.push(part.text.trim());
            continue;
          }
          if (typeof part?.content === "string" && part.content.trim()) {
            texts.push(part.content.trim());
            continue;
          }
          if (typeof part?.refusal === "string" && part.refusal.trim()) {
            texts.push(part.refusal.trim());
            continue;
          }
        }
      }
      return texts.join("\n").trim();
    } catch {
      return "";
    }
  }

  async function invokeLlmCommand({ providerKey, apiKey, userText, strict = false }) {
    const provider = providerKey ? LLM_PROVIDERS[providerKey] : null;
    if (!provider) throw new Error("Unknown LLM provider");
    if (providerKey && !llmProviderSupportsText(providerKey)) {
      throw new Error(
        `Selected model is not supported for text chat in Singabldr (${provider?.label || providerKey}).`,
      );
    }

    const normalized = String(userText || "").trim();
    const inflightKey = `${providerKey}:${normalized}`;
    const existing = __llmInflight.get(inflightKey);
    if (existing) return existing;

    const promise = (async () => {
      function extractChatContent(responseJson) {
        try {
          // OpenAI-compatible shapes seen in the wild:
          // - { choices:[{ message:{ content:string } }] }
          // - { choices:[{ message:{ content:[{type:"text", text:"..."}] } }] }
          // - { choices:[{ message:{ content:{type:"text", text:"..."} } }] }
          // - { choices:[{ message:{ reasoning:"..." } }] } (provider-specific)
          // - { choices:[{ text:"..." }] }
          // - { choices:[{ delta:{ content:"..." } }] } (non-streaming proxies sometimes misuse delta)
          const choice = responseJson?.choices?.[0];
          if (!choice) return "";

          const message = choice.message ?? choice.delta ?? null;

          const extractAnyText = (value) => {
            if (!value) return "";
            if (typeof value === "string") return value.trim();
            if (Array.isArray(value)) {
              return value
                .map((p) => {
                  if (!p) return "";
                  if (typeof p === "string") return p;
                  if (typeof p.text === "string") return p.text;
                  if (typeof p.content === "string") return p.content;
                  if (typeof p.value === "string") return p.value;
                  return "";
                })
                .join("")
                .trim();
            }
            if (typeof value === "object") {
              if (typeof value.text === "string") return value.text.trim();
              if (typeof value.content === "string") return value.content.trim();
              if (typeof value.value === "string") return value.value.trim();
            }
            return "";
          };

          // Prefer assistant content, then common provider-specific fields.
          let content =
            extractAnyText(message?.content) ||
            extractAnyText(message?.reasoning) ||
            extractAnyText(message?.thinking) ||
            extractAnyText(message?.analysis) ||
            extractAnyText(choice.text) ||
            "";

          return content;
        } catch {
          return "";
        }
      }

      const supportedKeys = (() => {
        try {
          const keys = le?.commands && typeof le.commands === "object" ? Object.keys(le.commands) : [];
          return keys.length ? keys : ["roll", "buy", "pass", "stop", "start", "theme", "weather", "status"];
        } catch {
          return ["roll", "buy", "pass", "stop", "start", "theme", "weather", "status"];
        }
      })();

      const system = [
        "You are FlowinFish, an agent controlling a 3D city/board game UI.",
        "Convert the user's request into ONE executable command string for the game.",
        "Rules:",
        "- Output ONLY the command text (one line). No markdown, no code fences, no explanations.",
        "- Never output reasoning or meta text.",
        "- If you are unsure which command to run, output: status",
        "- Prefer existing commands/synonyms already used by the UI.",
        `- Supported command families: ${supportedKeys.join(", ")}.`,
        "Examples: roll dice | change weather to stormy | make citizens happy | stop train | status",
      ].join("\n");

      const systemStrict = [
        "Output EXACTLY ONE command line for the game UI.",
        "No explanations. No punctuation. No quotes. No markdown.",
        "If unsure: status",
      ].join("\n");

      const isResponsesApi = provider.apiKind === "responses";
      const messages = [
        { role: "system", content: strict ? `${system}\n\n${systemStrict}` : system },
        { role: "user", content: normalized },
      ];
      const payload = isResponsesApi
        ? {
            model: provider.model,
            temperature: strict ? 0 : 0.2,
            max_output_tokens: strict ? 40 : 120,
            input: messages,
          }
        : {
            model: provider.model,
            temperature: strict ? 0 : 0.2,
            max_tokens: strict ? 40 : 120,
            // Avoid code blocks, but allow newlines so models can place the command on the last line.
            stop: ["```"],
            messages,
          };

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 20_000);
      try {
        const apiBase = getApiBase();
        if (!apiBase) throw new Error("Missing window.__API_BASE");
        const endpoint = isResponsesApi ? "responses" : "chat/completions";
        const res = await fetch(`${apiBase}/api/llm/${endpoint}`, {
          method: "POST",
          headers: buildDeerflowLlmHeaders({ providerKey }),
          body: JSON.stringify(payload),
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(await readLlmErrorMessage(res));
        const json = await res.json();
        const content = isResponsesApi ? extractResponsesText(json) : extractChatContent(json);
        if (content) return content;

        const finishReason = isResponsesApi ? json?.status : json?.choices?.[0]?.finish_reason;
        if (typeof finishReason === "string" && finishReason) {
          throw new Error(`LLM returned no content (finish_reason=${finishReason})`);
        }

        const providerError =
          typeof json?.error?.message === "string"
            ? json.error.message
            : typeof json?.message === "string"
              ? json.message
              : "";
        if (providerError) throw new Error(providerError);

        // Debug in console (never shown as HTML). Helps diagnose provider schema drift.
        try {
          console.warn("[Singabldr][LLM] Empty content response", { providerKey, json });
        } catch {}
        return "";
      } finally {
        clearTimeout(timeoutId);
      }
    })()
      .finally(() => {
        __llmInflight.delete(inflightKey);
      });

    __llmInflight.set(inflightKey, promise);
    return promise;
  }

  async function invokeLlmChat({ providerKey, apiKey, userText }) {
    const provider = providerKey ? LLM_PROVIDERS[providerKey] : null;
    if (!provider) throw new Error("Unknown LLM provider");
    if (providerKey && !llmProviderSupportsText(providerKey)) {
      throw new Error(
        `Selected model is not supported for text chat in Singabldr (${provider?.label || providerKey}).`,
      );
    }

    const normalized = String(userText || "").trim();
    const inflightKey = `chat:${providerKey}:${normalized}`;
    const existing = __llmInflight.get(inflightKey);
    if (existing) return existing;

    const promise = (async () => {
      const system = [
        "You are FlowinFish 🐟, a friendly AI guide inside Singabldr (a 3D city/board game).",
        "Answer the user's question directly and concisely.",
        "Rules:",
        "- Do NOT output game commands.",
        "- No meta reasoning; just the answer.",
        "- If the user asks how to control the game, suggest one or two example commands (as plain text).",
      ].join("\n");

      const isResponsesApi = provider.apiKind === "responses";
      const messages = [
        { role: "system", content: system },
        { role: "user", content: normalized },
      ];
      const payload = isResponsesApi
        ? {
            model: provider.model,
            temperature: 0.6,
            max_output_tokens: 240,
            input: messages,
          }
        : {
            model: provider.model,
            temperature: 0.6,
            max_tokens: 240,
            stop: ["```"],
            messages,
          };

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 20_000);
      try {
        const apiBase = getApiBase();
        if (!apiBase) throw new Error("Missing window.__API_BASE");
        const endpoint = isResponsesApi ? "responses" : "chat/completions";
        const res = await fetch(`${apiBase}/api/llm/${endpoint}`, {
          method: "POST",
          headers: buildDeerflowLlmHeaders({ providerKey }),
          body: JSON.stringify(payload),
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(await readLlmErrorMessage(res));
        const json = await res.json();
        if (isResponsesApi) {
          const content = extractResponsesText(json);
          if (content) return content;
          return "";
        }
        const choice = json?.choices?.[0];
        const message = choice?.message ?? choice?.delta ?? null;

        const extractAnyText = (value) => {
          if (!value) return "";
          if (typeof value === "string") return value.trim();
          if (Array.isArray(value)) {
            return value
              .map((p) => {
                if (!p) return "";
                if (typeof p === "string") return p;
                if (typeof p.text === "string") return p.text;
                if (typeof p.content === "string") return p.content;
                if (typeof p.value === "string") return p.value;
                return "";
              })
              .join("")
              .trim();
          }
          if (typeof value === "object") {
            if (typeof value.text === "string") return value.text.trim();
            if (typeof value.content === "string") return value.content.trim();
            if (typeof value.value === "string") return value.value.trim();
          }
          return "";
        };

        const content =
          extractAnyText(message?.content) ||
          extractAnyText(message?.reasoning) ||
          extractAnyText(message?.thinking) ||
          extractAnyText(message?.analysis) ||
          extractAnyText(choice?.text) ||
          "";

        if (content) return content;

        const finishReason = choice?.finish_reason;
        const providerError =
          typeof json?.error?.message === "string"
            ? json.error.message
            : typeof json?.message === "string"
              ? json.message
              : "";
        if (providerError) return `LLM error: ${providerError}`;
        if (typeof finishReason === "string" && finishReason) return `LLM returned no content (finish_reason=${finishReason})`;

        return "";
      } finally {
        clearTimeout(timeoutId);
      }
    })().finally(() => {
      __llmInflight.delete(inflightKey);
    });

    __llmInflight.set(inflightKey, promise);
    return promise;
  }

  function sanitizeResponsesPayload(payload) {
    const p = payload && typeof payload === "object" ? payload : {};
    // The Responses API rejects chat/completions fields like `stop` and `messages`.
    // Keep a small allowlist to avoid 400s due to unknown params.
    const allowedKeys = [
      "temperature",
      "max_output_tokens",
      "top_p",
      "presence_penalty",
      "frequency_penalty",
      "seed",
      "metadata",
      "store",
      "user",
    ];
    const out = {};
    for (const key of allowedKeys) {
      if (Object.prototype.hasOwnProperty.call(p, key)) out[key] = p[key];
    }
    return out;
  }

  let __boardCtxMemo = { sig: "", value: "" };
  function buildBoardContextForLlm(maxChars = 1400) {
    try {
      const board = le && typeof le === "object" ? le : {};
      const themes = board.themes && typeof board.themes === "object" ? Object.keys(board.themes) : [];
      const weathers = board.weathers && typeof board.weathers === "object" ? Object.keys(board.weathers) : [];
      const commands = board.commands && typeof board.commands === "object" ? Object.keys(board.commands) : [];
      const bubbleTemplates =
        board?.elements?.nature?.citizens?.bubbleTemplates && typeof board.elements.nature.citizens.bubbleTemplates === "object"
          ? Object.keys(board.elements.nature.citizens.bubbleTemplates)
          : [];
      const aiTopics = board?.elements?.ai?.topics && Array.isArray(board.elements.ai.topics) ? board.elements.ai.topics : [];
      const sig = [
        typeof board.name === "string" ? board.name : "Singabldr",
        themes.length,
        weathers.length,
        commands.length,
        bubbleTemplates.length,
        aiTopics.length,
      ].join("|");
      if (__boardCtxMemo.sig === sig && __boardCtxMemo.value) return __boardCtxMemo.value;

      const ctx = {
        board: typeof board.name === "string" ? board.name : "Singabldr",
        themes: themes.slice(0, 40),
        weathers: weathers.slice(0, 40),
        commands: commands.slice(0, 60),
        assets: board.assets && typeof board.assets === "object" ? Object.keys(board.assets).slice(0, 60) : [],
        elements: board.elements && typeof board.elements === "object" ? Object.keys(board.elements).slice(0, 60) : [],
        citizenBubbleTemplateKeys: bubbleTemplates.slice(0, 60),
        aiTopics: aiTopics.slice(0, 40),
      };
      const s = JSON.stringify(ctx);
      const v = s.length <= maxChars ? s : s.slice(0, maxChars);
      __boardCtxMemo = { sig, value: v };
      return v;
    } catch {
      return "";
    }
  }

  function getBoardCommandSynonymMap(board) {
    const map = new Map();
    try {
      const cmds = board?.commands && typeof board.commands === "object" ? board.commands : {};
      for (const [canonical, syns] of Object.entries(cmds)) {
        map.set(String(canonical).toLowerCase(), String(canonical).toLowerCase());
        if (Array.isArray(syns)) {
          for (const s of syns) map.set(String(s).toLowerCase(), String(canonical).toLowerCase());
        }
      }
    } catch {}
    return map;
  }

  function normalizePlannedGameCommand(commandRaw) {
    const raw = String(commandRaw || "").trim();
    if (!raw) return "";
    const oneLine = raw.split(/\r?\n/)[0].trim();
    const cleaned = oneLine.replace(/^\/cmd\s+/i, "").replace(/^\/chat\s+/i, "").replace(/^\/llm\s+/i, "").trim();
    if (!cleaned) return "";

    const board = le && typeof le === "object" ? le : {};
    const map = getBoardCommandSynonymMap(board);

    const parts = cleaned.split(/\s+/).filter(Boolean);
    if (parts.length === 0) return "";
    const head = String(parts[0]).toLowerCase();
    const canonical = map.get(head) || "";
    if (!canonical) return "";

    const arg = parts.slice(1).join(" ").trim();
    if (canonical === "weather" && arg) {
      const ok = board.weathers && typeof board.weathers === "object" && Object.prototype.hasOwnProperty.call(board.weathers, arg);
      return ok ? `${canonical} ${arg}` : "";
    }
    if (canonical === "theme" && arg) {
      const okTheme =
        (board.themes && typeof board.themes === "object" && Object.prototype.hasOwnProperty.call(board.themes, arg)) || arg === THEME_ID_UPLOADED_IMAGE;
      return okTheme ? `${canonical} ${arg}` : "";
    }

    // Movement/control commands can optionally target transportation. Keep it permissive but safe:
    // only allow known transportation keys when arg is present.
    if ((canonical === "start" || canonical === "stop" || canonical === "faster" || canonical === "slower") && arg) {
      const transport = board?.scene?.transportation && typeof board.scene.transportation === "object" ? board.scene.transportation : {};
      const ok = Object.prototype.hasOwnProperty.call(transport, arg);
      return ok ? `${canonical} ${arg}` : canonical;
    }

    return arg ? `${canonical} ${arg}` : canonical;
  }

  function parseJsonLoose(text) {
    const raw = String(text || "").trim();
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {}
    // Try extracting first JSON object/array in the response.
    try {
      const m = raw.match(/(\{[\s\S]*\}|\[[\s\S]*\])/);
      if (m && m[1]) return JSON.parse(m[1]);
    } catch {}
    return null;
  }

  function shouldExecutePlannedCommand(userText, command) {
    const u = String(userText || "").toLowerCase();
    const c = String(command || "").toLowerCase().trim();
    if (!c) return false;

    // Require explicit user intent for high-impact commands to prevent out-of-context actions.
    if (c === "status") return u.includes("status") || u.includes("where am i") || u.includes("how much") || u.includes("money");
    if (c.includes("roll")) return u.includes("roll") || u.includes("dice") || u.includes("🎲");
    if (c.includes("buy")) return u.includes("buy") || u.includes("purchase");
    if (c.includes("pass") || c.includes("end")) return u.includes("pass") || u.includes("end turn") || u.includes("skip");
    if (c.includes("weather")) return u.includes("weather") || u.includes("rain") || u.includes("storm") || u.includes("sun");
    if (c.includes("theme")) return u.includes("theme") || u.includes("cny") || u.includes("christmas") || u.includes("deepavali") || u.includes("hari");
    if (c.includes("train") || c.includes("mrt")) return u.includes("train") || u.includes("mrt");
    if (c.includes("plane")) return u.includes("plane") || u.includes("airplane");
    if (c.includes("heli")) return u.includes("heli") || u.includes("helicopter");
    if (c.includes("ship")) return u.includes("ship") || u.includes("boat") || u.includes("port");
    if (c.includes("rocket")) return u.includes("rocket") || u.includes("launch");
    if (c.includes("attack")) return u.includes("attack") || u.includes("bots");
    if (c.includes("build")) return u.includes("build") || u.includes("construct");
    if (c.includes("happy") || c.includes("neutral") || c.includes("calm") || c.includes("normal")) return u.includes("citizen") || u.includes("citizens") || u.includes("happy") || u.includes("neutral") || u.includes("calm") || u.includes("normal");
    if (c.includes("faster") || c.includes("slower") || c.includes("stop") || c.includes("start")) return u.includes("faster") || u.includes("slower") || u.includes("stop") || u.includes("start");

    return false;
  }

  async function invokeFlowinFishPlan({ providerKey, apiKey, userText, promptKey = "planner" }) {
    const provider = providerKey ? LLM_PROVIDERS[providerKey] : null;
    if (!provider) throw new Error("Unknown LLM provider");
    if (providerKey && !llmProviderSupportsText(providerKey)) {
      throw new Error(
        `Selected model is not supported for text chat in Singabldr (${provider?.label || providerKey}).`,
      );
    }

    const normalized = String(userText || "").trim();
    const inflightKey = `plan:${promptKey}:${providerKey}:${normalized}`;
    const existing = __llmInflight.get(inflightKey);
    if (existing) return existing;

    const promise = (async () => {
      const boardCtx = buildBoardContextForLlm();
      const [cfg, domainPack] = await Promise.all([loadFlowinFishPromptConfig(), loadFlowinFishDomainPack()]);
      const section = cfg?.[promptKey] || cfg?.planner || __flowinfishPromptCfgFallback.planner;
      const domainKey = detectDomainKey(normalized, domainPack);
      const domainCtx = buildDomainContextForLlm(domainPack, domainKey);
      const vars = { BOARD_CONTEXT_JSON: boardCtx, DOMAIN_KEY: domainKey, DOMAIN_CONTEXT_JSON: domainCtx, USER_TEXT: normalized };

      const normalizeSpace = (s) => String(s || "").replace(/\s+/g, " ").trim();
      const hasShouldIntent = (s) => /\bshould\b/i.test(String(s || ""));
      const isSkillsFutureTopic = (s) => {
        const lower = String(s || "").toLowerCase();
        return lower.includes("skillsfuture") || lower.includes("skills future");
      };
      const isSmartNationTopic = (s) => {
        const lower = String(s || "").toLowerCase();
        return lower.includes("smart nation");
      };
      const sanitizeBubbleSnippets = (snippets) => {
        const out = [];
        const seen = new Set();
        const bad = ["agents everywhere", "ai buzz is moving fast", "got a link?"];
        for (const v of Array.isArray(snippets) ? snippets : []) {
          if (typeof v !== "string") continue;
          const t = v.trim();
          if (!t) continue;
          const low = t.toLowerCase();
          if (bad.some((b) => low.includes(b))) continue;
          if (seen.has(low)) continue;
          seen.add(low);
          out.push(t);
        }
        return out;
      };

      const ensureContextualSnippets = (snippetsMaybe, questionText) => {
        const cleaned = sanitizeBubbleSnippets(snippetsMaybe);
        if (cleaned.length > 0) return cleaned;
        // Local swarm fallback: always contextual (never generic).
        return buildLocalDebateSnippets(questionText).slice(0, 6);
      };
      const buildLocalDebateSnippets = (questionText) => {
        const q = normalizeSpace(questionText);
        if (isSkillsFutureTopic(q)) {
          return [
            "Pro: Subsidies/credits lower cost for upskilling toward in-demand roles.",
            "Pro: Structured learning boosts confidence, portfolio, and interview stories.",
            "Con: Time cost; low-quality courses can waste weekends and motivation.",
            "Policy: Verify accreditation, outcomes, and trainer track record before paying.",
            "Builder: Start with one short course + project, then iterate to a certification.",
            "Neutral: If your employer supports it, ROI is usually higher and faster.",
          ];
        }
        return [
          "Pro: Could accelerate your goal if tightly aligned to your skills gap.",
          "Con: Not worth it if it replaces higher-ROI practice/projects.",
          "Policy: Define success metric and a 4-week trial before committing.",
          "Builder: Pair learning with a small deliverable to prove value.",
          "Neutral: Reassess after one iteration and adjust your plan.",
        ];
      };
      const buildLocalFallbackPlan = () => {
        const q = normalizeSpace(normalized);
        if (promptKey === "bubbles_only") return { bubbleSnippets: buildLocalDebateSnippets(q).slice(0, 7) };
        if (promptKey === "command_only") return { reply: "- I can’t determine a safe command right now.", command: null, bubbleSnippets: [] };

        const isSkills = isSkillsFutureTopic(q);
        const isSmartNation = isSmartNationTopic(q);

        if (isSkills && isSmartNation && hasShouldIntent(q)) {
          return {
            reply: [
              "- Choose SkillsFuture if your goal is upskilling/reskilling via subsidized courses and certifications.",
              "- Choose Smart Nation if your goal is building/using digital public services and national tech initiatives.",
              "- If you want career ROI: start with SkillsFuture + a project aligned to Smart Nation problems.",
              "- Quick filter: need skills → SkillsFuture; want to contribute/build solutions → Smart Nation.",
              "- Tell me your role + target role and I’ll recommend a 4-week path.",
            ].join("\n"),
            command: null,
            bubbleSnippets: [],
          };
        }

        if (isSkills) {
          if (hasShouldIntent(q)) {
            return {
              reply: [
                "- SkillsFuture is worth joining if you have a clear learning goal and time to commit.",
                "- Use credits/subsidies to reduce cost for role-relevant, accredited courses.",
                "- Choose outcomes-first: project-based learning, assessments, and recognized certification.",
                "- Watch opportunity cost: time/energy vs on-the-job practice or a portfolio project.",
                "- Tell me your role + target role and I’ll suggest a 4-week plan.",
              ].join("\n"),
              command: null,
              bubbleSnippets: [],
            };
          }
          return {
            reply: [
              "- SkillsFuture is Singapore’s lifelong-learning initiative with credits/subsidies for courses.",
              "- It helps individuals upskill/reskill for employability and career transitions.",
              "- Key components include SkillsFuture Credit and subsidized accredited programs.",
              "- Best use: pick a goal → choose an accredited course → apply credits/subsidies → build a project.",
              "- Share your goal and I’ll outline a learning roadmap.",
            ].join("\n"),
            command: null,
            bubbleSnippets: [],
          };
        }

        if (isSmartNation) {
          if (hasShouldIntent(q)) {
            return {
              reply: [
                "- “Join Smart Nation” usually means engaging with digital initiatives or building solutions in that ecosystem.",
                "- It’s a good fit if you want to work on gov-tech/public-service problems and applied AI/data projects.",
                "- Start small: pick one problem area (mobility/health/services) and build a measurable demo.",
                "- If your goal is career upskilling, pair it with structured learning (e.g., SkillsFuture courses).",
                "- Tell me your background and I’ll suggest concrete next steps.",
              ].join("\n"),
              command: null,
              bubbleSnippets: [],
            };
          }
          return {
            reply: [
              "- Smart Nation is Singapore’s initiative to use tech/data to improve public services and quality of life.",
              "- It emphasizes digital infrastructure, data-driven policy, and adoption of AI/IoT where useful.",
              "- Citizens/companies engage via digital services, pilots, and building solutions for public needs.",
              "- If you share your interest area, I can suggest projects/resources to explore.",
            ].join("\n"),
            command: null,
            bubbleSnippets: [],
          };
        }

        return {
          reply: [
            "- I can still help with this topic; share your goal and constraints for a sharper answer.",
            "- If you want a debate/pros-cons view, ask explicitly and I’ll generate citizen bubbles.",
            "- If you paste a link or upload a file, I can react to it with contextual bubbles.",
          ].join("\n"),
          command: null,
          bubbleSnippets: [],
        };
      };
      const isGenericFallbackReply = (replyText) => {
        const low = String(replyText || "").toLowerCase();
        return low.includes("i can help—paste a url/file") || low.includes("having trouble generating a structured reply");
      };

      const isResponsesApi = provider.apiKind === "responses";
      const basePayload = section?.payload && typeof section.payload === "object" ? section.payload : {};
      const messages = buildLlmMessagesFromTemplate(section?.messages, vars);
      const payload = isResponsesApi
        ? (() => {
            // Responses API uses max_output_tokens, and "input" instead of "messages".
            const p = { ...basePayload };
            if (p && p.max_output_tokens == null && p.max_tokens != null) p.max_output_tokens = p.max_tokens;
            const sanitized = sanitizeResponsesPayload(p);
            return { model: provider.model, ...sanitized, input: messages };
          })()
        : { model: provider.model, ...basePayload, messages };

      // Trace (JSON protocol): record request metadata (not the full prompt).
      try {
        flowinfishRecord({
          type: "llm:request",
          promptKey,
          providerKey,
          model: provider.model,
          domainKey,
          userText: normalized.slice(0, 240),
        });
      } catch {}

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 20_000);
      try {
        const apiBase = getApiBase();
        if (!apiBase) throw new Error("Missing window.__API_BASE");
        const endpoint = isResponsesApi ? "responses" : "chat/completions";
        const res = await fetch(`${apiBase}/api/llm/${endpoint}`, {
          method: "POST",
          headers: buildDeerflowLlmHeaders({ providerKey }),
          body: JSON.stringify(payload),
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(await readLlmErrorMessage(res));
        const json = await res.json();
        if (isResponsesApi) {
          const text = extractResponsesText(json);
          if (!text) throw new Error("LLM returned no content");
          // The downstream parser expects JSON text; continue with the same logic.
          // Wrap as "text" so the existing extraction pipeline can be reused.
          const choice = { text };
          const message = { content: text };
          // eslint-disable-next-line no-unused-vars
          void choice;
          // eslint-disable-next-line no-unused-vars
          void message;
        }
        const choice = isResponsesApi ? { text: extractResponsesText(json) } : json?.choices?.[0];
        const message = isResponsesApi ? { content: choice?.text } : choice?.message ?? choice?.delta ?? null;

        const extractAnyText = (value) => {
          if (!value) return "";
          if (typeof value === "string") return value.trim();
          if (Array.isArray(value)) {
            return value
              .map((p) => {
                if (!p) return "";
                if (typeof p === "string") return p;
                if (typeof p.text === "string") return p.text;
                if (typeof p.content === "string") return p.content;
                if (typeof p.value === "string") return p.value;
                return "";
              })
              .join("")
              .trim();
          }
          if (typeof value === "object") {
            if (typeof value.text === "string") return value.text.trim();
            if (typeof value.content === "string") return value.content.trim();
            if (typeof value.value === "string") return value.value.trim();
          }
          return "";
        };

        const text =
          extractAnyText(message?.content) ||
          extractAnyText(choice?.text) ||
          extractAnyText(message?.analysis) ||
          extractAnyText(message?.reasoning) ||
          "";

        const looksMetaLike = (maybeText) => {
          const lower = String(maybeText || "").toLowerCase();
          return (
            lower.includes("we need to output json") ||
            lower.includes("output json only") ||
            lower.includes("schema:") ||
            lower.includes("rules:") ||
            lower.includes("the user asks") ||
            lower.includes("we must") ||
            lower.includes("provide json only")
          );
        };

        const coercePlanFromNonJson = (maybeText) => {
          const raw = String(maybeText || "").trim();
          if (!raw) return null;
          const cleaned = raw.replace(/```[\s\S]*?```/g, " ").trim();
          if (!cleaned) return null;
          if (looksMetaLike(cleaned)) return null;

          const toBullets = (s, max = 7) => {
            const text = String(s || "").trim();
            if (!text) return "";
            const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
            const already = lines.length > 0 && lines.every((l) => l.startsWith("- ") || l.startsWith("* "));
            if (already) return lines.map((l) => (l.startsWith("* ") ? `- ${l.slice(2).trim()}` : l)).slice(0, max).join("\n");
            const chunks = text
              .replace(/\s+/g, " ")
              .split(/(?<=[.!?])\s+|;\s+|\s+\-\s+/g)
              .map((x) => x.trim())
              .filter(Boolean)
              .slice(0, max);
            return (chunks.length ? chunks : [text]).slice(0, max).map((x) => `- ${x}`).join("\n");
          };

          if (promptKey === "bubbles_only") {
            const parts = cleaned
              .split(/\r?\n|[•·]/g)
              .map((s) => String(s || "").trim())
              .filter(Boolean)
              .map((s) => s.replace(/^\-+\s*/g, "").trim())
              .filter(Boolean);
            const uniq = [];
            const seen = new Set();
            for (const p of parts) {
              const k = p.toLowerCase();
              if (seen.has(k)) continue;
              seen.add(k);
              uniq.push(p);
              if (uniq.length >= 6) break;
            }
            if (uniq.length === 0) return null;
            return { bubbleSnippets: uniq.slice(0, 6) };
          }

          const cmd = promptKey === "command_only" ? normalizePlannedGameCommand(cleaned) : "";
          const replyRaw = cleaned.length > 520 ? cleaned.slice(0, 520) + "…" : cleaned;
          return { reply: toBullets(replyRaw, promptKey === "command_only" ? 3 : 7), command: cmd || null, bubbleSnippets: [] };
        };

        const plan = parseJsonLoose(text) || coercePlanFromNonJson(text);
        if (plan && typeof plan === "object") {
          try {
            flowinfishRecord({ type: "llm:response", promptKey, providerKey, ok: true, coerced: !String(text || "").trim().startsWith("{") });
          } catch {}
          // Avoid showing generic fallback content; provide contextual local fallback instead.
          if (promptKey === "planner" && isGenericFallbackReply(plan?.reply)) return buildLocalFallbackPlan();
          if (promptKey === "planner") {
            if (Array.isArray(plan?.bubbleSnippets)) plan.bubbleSnippets = ensureContextualSnippets(plan.bubbleSnippets, normalized);
            const replyText = typeof plan?.reply === "string" ? plan.reply.trim() : "";
            if (!replyText) {
              const fallback = buildLocalFallbackPlan();
              plan.reply = fallback.reply;
              if (!Array.isArray(plan.bubbleSnippets)) plan.bubbleSnippets = [];
            }
          }
          if (promptKey === "bubbles_only" && Array.isArray(plan?.bubbleSnippets)) {
            plan.bubbleSnippets = ensureContextualSnippets(plan.bubbleSnippets, normalized);
          }
          return plan;
        }

        const looksMeta = looksMetaLike(text);

        // If the model leaked reasoning/meta (or did not output JSON), retry strict once.
        if (looksMeta || !String(text || "").trim().startsWith("{")) {
          try {
            const isResponsesApi = provider.apiKind === "responses";
            const strictSection = section?.strict && typeof section.strict === "object" ? section.strict : null;
            const strictBase =
              strictSection?.payload && typeof strictSection.payload === "object"
                ? strictSection.payload
                : { temperature: 0, max_tokens: 220 };
            const strictMessages = buildLlmMessagesFromTemplate(strictSection?.messages || section?.messages, vars);
            const strictPayload = isResponsesApi
              ? (() => {
                  const p = { ...payload, ...strictBase };
                  if (p && p.max_output_tokens == null && p.max_tokens != null) p.max_output_tokens = p.max_tokens;
                  try {
                    delete p.max_tokens;
                    delete p.messages;
                  } catch {}
                  const sanitized = sanitizeResponsesPayload(p);
                  return { ...sanitized, model: provider.model, input: strictMessages };
                })()
              : {
                  ...payload,
                  ...strictBase,
                  messages: strictMessages,
                };
            const endpoint = isResponsesApi ? "responses" : "chat/completions";
            const apiBase2 = getApiBase();
            if (!apiBase2) throw new Error("Missing window.__API_BASE");
            const res2 = await fetch(`${apiBase2}/api/llm/${endpoint}`, {
              method: "POST",
              headers: buildDeerflowLlmHeaders({ providerKey }),
              body: JSON.stringify(strictPayload),
              signal: controller.signal,
            });
            if (res2.ok) {
              const json2 = await res2.json();
              const text2 = isResponsesApi
                ? extractResponsesText(json2)
                : (() => {
                    const choice2 = json2?.choices?.[0];
                    const message2 = choice2?.message ?? choice2?.delta ?? null;
                    return (
                      extractAnyText(message2?.content) ||
                      extractAnyText(choice2?.text) ||
                      extractAnyText(message2?.analysis) ||
                      extractAnyText(message2?.reasoning) ||
                      ""
                    );
                  })();
              const plan2 = parseJsonLoose(text2) || coercePlanFromNonJson(text2);
              if (plan2 && typeof plan2 === "object") {
                try {
                  flowinfishRecord({ type: "llm:response", promptKey, providerKey, ok: true, strict: true, coerced: !String(text2 || "").trim().startsWith("{") });
                } catch {}
                if (promptKey === "planner" && isGenericFallbackReply(plan2?.reply)) return buildLocalFallbackPlan();
                if (promptKey === "planner") {
                  if (Array.isArray(plan2?.bubbleSnippets)) plan2.bubbleSnippets = ensureContextualSnippets(plan2.bubbleSnippets, normalized);
                  const replyText = typeof plan2?.reply === "string" ? plan2.reply.trim() : "";
                  if (!replyText) {
                    const fallback = buildLocalFallbackPlan();
                    plan2.reply = fallback.reply;
                    if (!Array.isArray(plan2.bubbleSnippets)) plan2.bubbleSnippets = [];
                  }
                }
                if (promptKey === "bubbles_only" && Array.isArray(plan2?.bubbleSnippets)) {
                  plan2.bubbleSnippets = ensureContextualSnippets(plan2.bubbleSnippets, normalized);
                }
                return plan2;
              }
            }
          } catch {}
        }

        // Final fallback: never show leaked meta text to end-users.
        try {
          flowinfishRecord({ type: "llm:response", promptKey, providerKey, ok: false });
        } catch {}
        // Always use contextual local fallback to avoid generic/non-contextual UX.
        return buildLocalFallbackPlan();
      } finally {
        clearTimeout(timeoutId);
      }
    })().finally(() => {
      __llmInflight.delete(inflightKey);
    });

    __llmInflight.set(inflightKey, promise);
    return promise;
  }

  function patchLlmCommandRouter() {
    if (typeof un !== "function") return;
    if (un.__singabldr_llm_patched) return;

    const _origUn = un;
    async function un_llm_patched(message, isAuto) {
      const msg = String(message || "");
      const trimmed = msg.trim();
      if (!trimmed) return _origUn(message, isAuto);

      const forceLlm = trimmed.startsWith("/llm ");
      const forceLocal = trimmed.startsWith("/local ");
      const forceChat = trimmed.startsWith("/chat ");
      const forceCmd = trimmed.startsWith("/cmd ");
      const userText = forceLlm
        ? trimmed.slice("/llm ".length).trim()
        : forceLocal
          ? trimmed.slice("/local ".length).trim()
          : forceChat
            ? trimmed.slice("/chat ".length).trim()
            : forceCmd
              ? trimmed.slice("/cmd ".length).trim()
              : trimmed;

      if (!userText) return _origUn("", isAuto);
      if (forceLocal) return _origUn(userText, isAuto);

      // Server-side FlowinFish pipeline trigger (no keys exposed to browser).
      // Usage: upload a notes file via the file picker, then type: /push-to-prod
      const lowerQuick = userText.toLowerCase();
      // IMPORTANT: allow a small set of orchestration commands in Auto mode.
      // Auto scripts call `un(..., true)`. We still want `/mirofish ...` to work end-to-end
      // while keeping LLM calls disabled for background/auto triggers.
      const allowAutoOrchestration =
        lowerQuick === "/push-to-prod" ||
        lowerQuick === "/push" ||
        lowerQuick === "/ppt" ||
        lowerQuick.startsWith("/mirofish") ||
        lowerQuick.startsWith("/mf");
      if (isAuto && !allowAutoOrchestration) return _origUn(message, isAuto);
      if (lowerQuick === "/push-to-prod" || lowerQuick === "/push" || lowerQuick === "/ppt") {
        try {
          const file = window.__singabldr_last_uploaded_file_v1 || null;
          if (!file) {
            if (typeof Ee === "function") Ee("Upload a notes file first, then type /push-to-prod.", false);
            return;
          }
          if (typeof Ee === "function") Ee(userText, true);
          if (typeof Ee === "function") Ee("🚀 Sending notes to FlowinFish pipeline…", false);
          const result = await flowinfishPushToProd(file, { sendTelegram: true });

          const apiBase = getApiBase();
          const tid = result?.thread_id;
          const artifacts = result?.artifacts || {};
          const outlineMd = artifacts?.outline_md;
          const bundleZip = artifacts?.bundle_zip;

          if (typeof Ee === "function") Ee("✅ Outline + assets generated.", false);
          if (apiBase && tid && outlineMd) {
            Ee(`Outline: ${apiBase}/api/threads/${tid}/artifacts/${outlineMd}`, false);
          }
          if (apiBase && tid && bundleZip) {
            Ee(`Bundle ZIP: ${apiBase}/api/threads/${tid}/artifacts/${bundleZip}?download=true`, false);
          }

          // Citizen bubbles: key points (distinct).
          try {
            createCitizenSnippetBubble("Builder: PPT outline ready", { ttlMs: 16_000, citizen: getCitizenAtIndex(0) || null });
            createCitizenSnippetBubble("Policy: Telegram delivery attempted", { ttlMs: 16_000, citizen: getCitizenAtIndex(1) || null });
            createCitizenSnippetBubble("Pro: Images generated (or prompts saved)", { ttlMs: 16_000, citizen: getCitizenAtIndex(3) || null });
          } catch {}
          return;
        } catch (e) {
          if (typeof Ee === "function") Ee(`❌ push-to-prod error: ${String(e?.message || e)}`, false);
          return;
        }
      }

      // MiroFish simulation trigger + SSE stream (proxied by DeerFlow Gateway).
      // Usage:
      //   /mirofish sim_xxxx [parallel|reddit|twitter]
      //   /mirofish stream sim_xxxx [reddit|twitter]
      //   /mirofish stop sim_xxxx
      if (lowerQuick.startsWith("/mirofish") || lowerQuick.startsWith("/mf")) {
        const parts = userText.trim().split(/\s+/).filter(Boolean);
        const verb = (parts[1] || "").toLowerCase();
        const isStop = verb === "stop";
        const isStreamOnly = verb === "stream";
        const simId = isStop || isStreamOnly ? (parts[2] || "").trim() : (parts[1] || "").trim();
        const platformRaw = (isStop ? "" : (isStreamOnly ? parts[3] : parts[2]) || "").toLowerCase();
        const platform = platformRaw === "twitter" || platformRaw === "reddit" || platformRaw === "parallel" ? platformRaw : "";
        if (!simId) {
          if (typeof Ee === "function") Ee("Usage: /mirofish sim_xxxx [parallel|reddit|twitter]  (or /mirofish stop sim_xxxx)", false);
          return;
        }

        const closePrevStream = () => {
          try {
            const prev = window.__singabldr_mirofish_es_v1;
            if (prev && typeof prev.close === "function") prev.close();
          } catch {}
          try {
            window.__singabldr_mirofish_es_v1 = null;
            window.__singabldr_mirofish_sim_id_v1 = null;
          } catch {}
        };

        const formatActionSnippet = (action) => {
          const plat = String(action?.platform || "mirofish").slice(0, 16);
          const who = String(action?.agent_name || `agent#${action?.agent_id ?? "?"}`).slice(0, 22);
          const typ = String(action?.action_type || "ACTION").slice(0, 24);
          const result = typeof action?.result === "string" ? action.result.trim() : "";
          const argText = (() => {
            try {
              const a = action?.action_args && typeof action.action_args === "object" ? action.action_args : {};
              const s = JSON.stringify(a);
              return s.length > 0 && s !== "{}" ? s : "";
            } catch {
              return "";
            }
          })();
          const tail = (result || argText).replace(/\s+/g, " ").trim();
          const clipped = tail.length > 120 ? tail.slice(0, 120) + "…" : tail;
          return clipped ? `${plat}:${who} ${typ} — ${clipped}` : `${plat}:${who} ${typ}`;
        };

        (async () => {
          try {
            if (typeof Ee === "function") Ee(userText, true);
            flowinfishEmit({ type: "chat:status", text: `🎣 MiroFish: ${isStop ? "stopping" : "starting"} ${simId}…` });

            if (isStop) {
              closePrevStream();
              await mirofishStopSimulation(simId);
              flowinfishEmit({ type: "chat:assistant", text: `MiroFish stopped: ${simId}` });
              return;
            }

            closePrevStream();
            if (!isStreamOnly) {
              await mirofishStartSimulation(simId, { platform: platform || "parallel", force: true });
            }

            const streamPlatform = platform === "twitter" || platform === "reddit" ? platform : "";
            const es = mirofishOpenStream(simId, { platform: streamPlatform });
            if (!es) throw new Error("Failed to open SSE stream. Ensure DeerFlow /api/mirofish is reachable.");
            try {
              window.__singabldr_mirofish_es_v1 = es;
              window.__singabldr_mirofish_sim_id_v1 = simId;
            } catch {}

            flowinfishEmit({ type: "chat:status", text: "📡 Streaming MiroFish actions into Swarm UI…" });

            es.addEventListener("action", (ev) => {
              try {
                const action = JSON.parse(String(ev?.data || "{}"));
                const snippet = formatActionSnippet(action);
                if (snippet) flowinfishEmit({ type: "swarm:bubbles", snippets: [snippet], source: "mirofish", count: 1 });
                if (snippet) flowinfishEmit({ type: "chat:status", text: snippet });
              } catch {}
            });

            es.addEventListener("done", (ev) => {
              try {
                const data = JSON.parse(String(ev?.data || "{}"));
                const st = String(data?.runner_status || "done");
                flowinfishEmit({ type: "chat:assistant", text: `MiroFish stream ended (${st}).` });
              } catch {
                flowinfishEmit({ type: "chat:assistant", text: "MiroFish stream ended." });
              }
              closePrevStream();
            });

            es.onerror = () => {
              flowinfishEmit({ type: "chat:status", text: "⚠️ MiroFish stream error (will stop). Check DeerFlow↔MiroFish connectivity." });
              closePrevStream();
            };
          } catch (e) {
            closePrevStream();
            flowinfishEmit({ type: "chat:assistant", text: `❌ MiroFish error: ${String(e?.message || e)}` });
          }
        })();
        return;
      }

      const apiKey = readLlmApiKeyMaybe();
      // Unified LLM surface: key is stored server-side; client key is optional after provisioning.

      const providerKey = readSelectedLlmProviderKey();
      if (providerKey === "none") return _origUn(userText, isAuto);
      const lower = userText.toLowerCase();

      // URL-first handling (Chat mode): prevent local URL handlers from generating duplicate generic bubbles.
      try {
        const url = extractFirstUrl(userText);
        const interactionMode = readInteractionMode();
        if (url && (forceChat || interactionMode === "chat") && !forceCmd && !forceLlm) {
          flowinfishEmit({ type: "chat:user", text: userText });
          flowinfishEmit({ type: "chat:status", text: "🔗 Summarizing link into citizen key points…" });
          createUrlKeyPointBubbles(url);
          return;
        }
      } catch {}
      const shouldRoute = forceLlm || forceChat || forceCmd || !shouldSkipLlmRouting(lower);
      if (!shouldRoute) return _origUn(userText, isAuto);

      try {
        const provider = LLM_PROVIDERS[providerKey];
        // Preserve chat UX: show the user's message bubble even when we route to LLM
        // (we intentionally avoid calling the original local parser to prevent side effects).
        flowinfishEmit({ type: "chat:user", text: userText });
        flowinfishEmit({ type: "chat:status", text: `🤖 Calling ${provider?.label || providerKey}...` });

        const looksLikeGameCommandIntent = (s) => {
          if (!s) return false;
          // High precision keywords: keep small to avoid accidental triggering.
          return /(roll|buy|pass|end|weather|theme|train|plane|heli|ship|rocket|attack|build|citizen|citizens|happy|neutral|calm|normal|faster|slower|stop|start)\b/.test(
            s
          );
        };

        const interactionMode = readInteractionMode();
        const routeAsChat =
          forceChat ||
          (interactionMode === "chat" && !forceCmd) ||
          (interactionMode === "command" && !forceLlm && !forceCmd && !looksLikeGameCommandIntent(lower));
        if (routeAsChat) {
          // Enhanced Chat mode: generate reply + optional command + citizen bubbles (FlowinFish-style).
          let plan = null;
          try {
            plan = await invokeFlowinFishPlan({ providerKey, apiKey, userText });
          } catch (err) {
            plan = { reply: `LLM error: ${String(err?.message || err)}`, command: null, bubbleSnippets: [] };
          }

          const reply = typeof plan?.reply === "string" ? plan.reply.trim() : "";
          flowinfishEmit({ type: "chat:assistant", text: reply || "LLM returned no content." });

          const wantsDebate = (() => {
            // Debate bubbles: enable when user explicitly asks for pros/cons OR asks "should ...?"
            const s = String(userText || "").toLowerCase();
            return (
              /\bshould\b/.test(s) ||
              s.includes("pros") ||
              s.includes("cons") ||
              s.includes("pros/cons") ||
              s.includes("debate") ||
              s.includes("argue") ||
              s.includes("compare") ||
              /\bvs\b/.test(s)
            );
          })();

          // Trigger citizen chat bubbles (Swarm reactions).
          try {
            const existing = Array.isArray(plan?.bubbleSnippets) ? plan.bubbleSnippets.filter((s) => typeof s === "string" && s.trim()) : [];
            if (existing.length > 0) {
              flowinfishEmit({ type: "swarm:bubbles", snippets: existing.slice(0, 7), source: "chat", count: Math.min(6, existing.length) });
            } else {
              // Swarm Intelligence Engine guarantee: ALWAYS show contextual bubbles for every response.
              const prompt = [
                `User question: ${userText}`,
                reply ? `Assistant answer bullets:\n${reply}` : "",
                "",
                wantsDebate
                  ? "Task: produce debate key points (Pro/Con/Policy/Builder/Neutral)."
                  : "Task: produce 5-7 distinct citizen perspectives (Optimist/Skeptic/Policy/Builder/Neutral).",
                "Return JSON with bubbleSnippets only (5-7 items).",
                "Each item must be 6-16 words and start with a role label like 'Optimist:' or 'Con:'.",
                "No generic filler; must reference the topic explicitly.",
              ]
                .filter(Boolean)
                .join("\n");
              const bubblePlan = await invokeFlowinFishPlan({ providerKey, apiKey, userText: prompt, promptKey: "bubbles_only" });
              const snippets2 = Array.isArray(bubblePlan?.bubbleSnippets)
                ? bubblePlan.bubbleSnippets.filter((s) => typeof s === "string" && s.trim())
                : [];
              if (snippets2.length > 0) flowinfishEmit({ type: "swarm:bubbles", snippets: snippets2.slice(0, 7), source: "chat", count: Math.min(6, snippets2.length) });
            }
          } catch {}

          // Optional command execution (chat mode can still control the game when intent is clear).
          try {
            const cmd = typeof plan?.command === "string" ? normalizePlannedGameCommand(plan.command) : "";
            if (cmd) {
              if (shouldExecutePlannedCommand(userText, cmd)) {
                flowinfishEmit({ type: "game:command", command: cmd });
                return;
              }
              // Reject out-of-context commands to prevent accidental local triggers (e.g. "roll" on news requests).
              flowinfishEmit({
                type: "chat:status",
                text: "Tip: paste a URL or upload a file to trigger citizen news bubbles; use /cmd <action> for explicit game control.",
              });
            }
          } catch {}
          return;
        }

        // Command-routing path (still JSON end-to-end): request {reply,command,...} and execute allowlisted command.
        try {
          let plan = null;
          try {
            plan = await invokeFlowinFishPlan({ providerKey, apiKey, userText, promptKey: "command_only" });
          } catch (err) {
            plan = { reply: `LLM error: ${String(err?.message || err)}`, command: null, bubbleSnippets: [] };
          }

          const reply = typeof plan?.reply === "string" ? plan.reply.trim() : "";
          if (reply) flowinfishEmit({ type: "chat:assistant", text: reply });

          const cmd = typeof plan?.command === "string" ? normalizePlannedGameCommand(plan.command) : "";
          if (cmd) {
            // In Command mode, the user's intent is already commandy (routeAsChat=false),
            // but we still enforce allowlists via normalizePlannedGameCommand().
            flowinfishEmit({ type: "game:command", command: cmd });
            return;
          }

          flowinfishEmit({ type: "chat:status", text: "LLM returned no executable command. Try: /cmd roll | /cmd weather rainy | /cmd theme cny" });
          return;
        } catch {}

        function sanitizeLlmCommand(raw) {
          const text = String(raw || "").trim();
          if (!text) return "";

          const stripCodeFences = (s) => s.replace(/```[\s\S]*?```/g, " ").trim();
          const cleaned = stripCodeFences(text);

          const normalizeCandidate = (s) =>
            String(s || "")
              .trim()
              .replace(/^["'`]+|["'`]+$/g, "")
              .replace(/^command\\s*[:\\-]\\s*/i, "")
              .replace(/^output\\s*[:\\-]\\s*/i, "")
              .trim();

          const looksLikeMeta = (s) => {
            const lower = s.toLowerCase();
            return (
              lower.includes("we need to") ||
              lower.includes("the user asks") ||
              lower.includes("command families") ||
              lower.includes("output a command") ||
              lower.includes("convert the user") ||
              lower.includes("rules:") ||
              lower.includes("supported command") ||
              lower.startsWith("we ") ||
              lower.startsWith("the user ") ||
              lower.includes("possibly") ||
              lower.includes("maybe ")
            );
          };

          const lines = cleaned.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
          const isCommandy = (s) => {
            const cmdLower = s.toLowerCase();
            return (
              cmdLower === "status" ||
              cmdLower.includes("roll") ||
              cmdLower.includes("buy") ||
              cmdLower.includes("pass") ||
              cmdLower.includes("end") ||
              cmdLower.includes("weather") ||
              cmdLower.includes("theme") ||
              cmdLower.includes("train") ||
              cmdLower.includes("plane") ||
              cmdLower.includes("heli") ||
              cmdLower.includes("ship") ||
              cmdLower.includes("rocket") ||
              cmdLower.includes("attack") ||
              cmdLower.includes("build") ||
              cmdLower.includes("happy") ||
              cmdLower.includes("neutral") ||
              cmdLower.includes("calm") ||
              cmdLower.includes("normal") ||
              cmdLower.includes("faster") ||
              cmdLower.includes("slower") ||
              cmdLower.includes("stop") ||
              cmdLower.includes("start")
            );
          };

          // Prefer the last short command-like line (models often put the command last).
          for (let i = lines.length - 1; i >= 0; i--) {
            const candidate = normalizeCandidate(lines[i]);
            if (!candidate || candidate.length > 140) continue;
            if (looksLikeMeta(candidate)) continue;
            if (isCommandy(candidate)) return candidate;
          }

          // Fallback: extract a command substring from a longer reasoning blob.
          const blob = cleaned.replace(/\s+/g, " ").trim();
          const m = blob.match(
            /(status|roll\\s+dice|roll|buy|pass|end|stop\\s+train|start\\s+train|stop\\s+plane|start\\s+plane|stop\\s+heli|start\\s+heli|stop\\s+ship|start\\s+ship|faster|slower|rocket|attack|build|make\\s+citizens\\s+(happy|neutral|calm|normal)|change\\s+weather\\s+to\\s+\\w+|change\\s+theme\\s+to\\s+\\w+)/i
          );
          if (m && m[0]) {
            const candidate = normalizeCandidate(m[0]);
            if (candidate && candidate.length <= 140) return candidate;
          }

          // Conservative allowlist: only accept short “imperative-like” commands.
          return "";
        }

        const raw = await invokeLlmCommand({ providerKey, apiKey, userText, strict: false });
        let cmd = sanitizeLlmCommand(raw);
        if (!cmd) {
          const rawStrict = await invokeLlmCommand({ providerKey, apiKey, userText, strict: true });
          cmd = sanitizeLlmCommand(rawStrict);
        }
        cmd = cmd || "status";
        if (!cmd) {
          if (typeof Ee === "function") Ee("LLM returned an empty response.", false);
          return;
        }

        // Keep UI clean: never show fallback metadata to end-users.
        if (typeof Ee === "function") Ee(cmd, false);
        // Execute without echoing it as user input (avoid recursion back into LLM).
        return _origUn(cmd, true);
      } catch (err) {
        if (typeof Ee === "function") Ee(`LLM error: ${String(err?.message || err)}`, false);
      }
    }

    un_llm_patched.__singabldr_llm_patched = true;
    un = un_llm_patched;
    un.__singabldr_llm_patched = true;
  }

  function installFlowinFishFileReactionHandler() {
    const fileInput = document.getElementById("superagent-file");
    if (!fileInput) return;
    if (fileInput.__singabldr_file_react_v1) return;
    fileInput.__singabldr_file_react_v1 = true;

    const isTextLike = (file) => {
      const name = String(file?.name || "").toLowerCase();
      const type = String(file?.type || "").toLowerCase();
      if (type.startsWith("image/")) return false;
      if (type.startsWith("text/")) return true;
      return (
        name.endsWith(".txt") ||
        name.endsWith(".md") ||
        name.endsWith(".csv") ||
        name.endsWith(".json") ||
        name.endsWith(".html") ||
        name.endsWith(".htm")
      );
    };

    fileInput.addEventListener(
      "change",
      (ev) => {
        try {
          const file = ev?.target?.files?.[0];
          if (!file || !isTextLike(file)) return;
          try {
            window.__singabldr_last_uploaded_file_v1 = file;
          } catch {}

          // Dedup repeated change events / rapid re-uploads.
          wn?.schedule?.(
            `flowinfish:file:${file.name}`,
            () => {
              try {
                const reader = new FileReader();
                reader.onload = async () => {
                  const raw = String(reader.result || "");
                  const excerpt = raw.slice(0, 1800);

                  // Always trigger citizen reactions for files (FlowinFish vibe).
                  try {
                    const snippet = excerpt.replace(/\s+/g, " ").trim().slice(0, 240);
                    if (snippet) flowinfishEmit({ type: "swarm:bubbles", snippet, source: "file", count: 3 });
                  } catch {}

                  // If in Chat mode, ask the LLM to generate a reply + optional action.
                  try {
                    const mode = readInteractionMode();
                    const providerKey = readSelectedLlmProviderKey();
                    const apiKey = readLlmApiKeyMaybe();
                    if (mode !== "chat" || providerKey === "none" || !apiKey) return;

                    flowinfishEmit({ type: "chat:user", text: `📎 Uploaded file: ${file.name}` });
                    flowinfishEmit({ type: "chat:status", text: `🤖 Calling ${LLM_PROVIDERS[providerKey]?.label || providerKey}...` });

                    const plan = await invokeFlowinFishPlan({
                      providerKey,
                      apiKey,
                      userText: `User uploaded a file (${file.name}). Content excerpt:\n\n${excerpt}`,
                    });

                    const reply = typeof plan?.reply === "string" ? plan.reply.trim() : "";
                    flowinfishEmit({ type: "chat:assistant", text: reply || "LLM returned no content." });

                    const cmd = typeof plan?.command === "string" ? normalizePlannedGameCommand(plan.command) : "";
                    if (cmd && typeof un === "function" && shouldExecutePlannedCommand(`file:${file.name}`, cmd)) {
                      flowinfishEmit({ type: "game:command", command: cmd });
                    }
                  } catch (err) {
                    flowinfishEmit({ type: "chat:status", text: `LLM error: ${String(err?.message || err)}` });
                  }
                };
                reader.readAsText(file);
              } catch {}
            },
            0
          );
        } catch {}
      },
      true
    );
  }

  function initWhenReady(attempt = 0) {
    if (attempt > 200) return;
    if (!le || !xn || !on) {
      setTimeout(() => initWhenReady(attempt + 1), 50);
      return;
    }

    fixYjsWebsocketProviderUrlIfNeeded();

    // Apply persisted uploaded theme image (if any).
    try {
      const saved = localStorage.getItem(getThemeImageStorageKey());
      if (saved) ensureUploadedTheme(saved);
    } catch {}

    installThemeImageUploadHandler();
    ensureWaterPlane();
    patchRocketCommand();
    patchUrlToIframeBubble();
    patchLlmCommandRouter();
    installLlmSettingsUi();
    installInteractionModeUi();
    patchScriptNoneMode();
    installFlowinFishFileReactionHandler();
    patchAnimateLoop();
    installCameraControlsOnce();

    // Load dedicated asset/element registries if board references them.
    try {
      const assetRefUrl = resolveRefUrlMaybe(le?.assetRefUrl);
      const elementRefUrl = resolveRefUrlMaybe(le?.elementRefUrl);

      if (assetRefUrl) {
        wn.schedule("board:assets:merge", async () => {
          try {
            const assetsJson = await zp(assetRefUrl, { ttlMs: 60_000 });
            if (assetsJson && typeof assetsJson === "object") {
              le.assets = le.assets && typeof le.assets === "object" ? le.assets : {};
              deepMergeInto(le.assets, assetsJson);
            }
          } catch {}
        }, 0);
      }

      if (elementRefUrl) {
        wn.schedule("board:elements:merge", async () => {
          try {
            const elementsJson = await zp(elementRefUrl, { ttlMs: 60_000 });
            if (elementsJson && typeof elementsJson === "object") {
              le.elements = le.elements && typeof le.elements === "object" ? le.elements : {};
              deepMergeInto(le.elements, elementsJson);
              refreshInteractivityConfig();
            }
          } catch {}
        }, 0);
      }
    } catch {}

    // Ensure interactivity is configured even if no elementRefUrl is used.
    refreshInteractivityConfig();
    // Apply camera once after config.
    if (__cameraControlsEnabled && __cameraControlsOverride) {
      syncSphericalFromCameraIfNeeded();
      applyCameraFromSpherical();
    }

    // If a persisted theme is present, apply it once.
    wn.schedule("theme:apply:init", () => Vh?.(), 0);
    wn.schedule("weather:apply:init", () => Wh?.(), 0);
  }

  initWhenReady();
}
