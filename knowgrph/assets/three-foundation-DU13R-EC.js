const ju="170",Xu={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yu={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ju=0,Zu=1,$u=2,Qu=3,Ku=0,td=1,ed=2,id=3,qs=0,ba=1,sd=2,nd=0,En=1,rd=2,ad=3,od=4,ld=5,In=100,cd=101,hd=102,ud=103,dd=104,fd=200,pd=201,md=202,gd=203,Pn=204,Ln=205,vd=206,xd=207,_d=208,yd=209,Md=210,Sd=211,bd=212,wd=213,Ad=214,Cd=0,Td=1,Ed=2,Dn=3,Id=4,Pd=5,Ld=6,Dd=7,Qs=0,Nd=1,Rd=2,zd=0,Ud=1,Od=2,Fd=3,Bd=4,kd=5,Vd=6,Hd=7,Nn="attached",wa="detached",Gr=300,Wr=301,Gd=302,Wd=303,qd=304,jd=306,Rn=1e3,ue=1001,zn=1002,zt=1003,Xd=1004,Yd=1004,Jd=1005,Zd=1005,$i=1006,$d=1007,Qd=1007,Aa=1008,Kd=1008,qr=1009,Ca=1010,Ta=1011,Ea=1012,Ia=1013,Ks=1014,Fe=1015,Pa=1016,La=1017,Da=1018,Na=1020,Ra=35902,za=1021,Ua=1022,ai=1023,Oa=1024,Fa=1025,us=1026,Un=1027,jr=1028,Xr=1029,Ba=1030,ka=1031,tf=1032,Va=1033,Ha=33776,Ga=33777,Wa=33778,qa=33779,ja=35840,Xa=35841,Ya=35842,Ja=35843,Za=36196,$a=37492,Qa=37496,Ka=37808,to=37809,eo=37810,io=37811,so=37812,no=37813,ro=37814,ao=37815,oo=37816,lo=37817,co=37818,ho=37819,uo=37820,fo=37821,po=36492,mo=36494,go=36495,vo=36283,xo=36284,_o=36285,yo=36286,ef=2200,sf=2201,nf=2202,rf=2300,af=2301,of=2302,On=2400,Fn=2401,Bn=2402,lf=2500,cf=2501,hf=0,uf=1,df=2,Mo=3200,ff=3201,pf=3202,mf=3203,Be=0,gf=1,Yr="",Dt="srgb",Jr="srgb-linear",Zr="linear",js="srgb",vf=0,ve=7680,xf=7681,_f=7682,yf=7683,Mf=34055,Sf=34056,bf=5386,wf=512,Af=513,Cf=514,Tf=515,Ef=516,If=517,Pf=518,kn=519,Lf=512,Df=513,Nf=514,Rf=515,zf=516,Uf=517,Of=518,Ff=519,Qi=35044,Bf=35048,kf=35040,Vf=35045,Hf=35049,Gf=35041,Wf=35046,qf=35050,jf=35042,Xf="100",Yf="300 es",ie=2e3,Ki=2001;class pe{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const n=s.indexOf(e);n!==-1&&s.splice(n,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let n=0,r=s.length;n<r;n++)s[n].call(this,t);t.target=null}}}const lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vn=1234567;const de=Math.PI/180,oi=180/Math.PI;function Rt(){const l=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(lt[l&255]+lt[l>>8&255]+lt[l>>16&255]+lt[l>>24&255]+"-"+lt[t&255]+lt[t>>8&255]+"-"+lt[t>>16&15|64]+lt[t>>24&255]+"-"+lt[e&63|128]+lt[e>>8&255]+"-"+lt[e>>16&255]+lt[e>>24&255]+lt[i&255]+lt[i>>8&255]+lt[i>>16&255]+lt[i>>24&255]).toLowerCase()}function et(l,t,e){return Math.max(t,Math.min(e,l))}function tn(l,t){return(l%t+t)%t}function So(l,t,e,i,s){return i+(l-t)*(s-i)/(e-t)}function bo(l,t,e){return l!==t?(e-l)/(t-l):0}function ei(l,t,e){return(1-e)*l+e*t}function wo(l,t,e,i){return ei(l,t,1-Math.exp(-e*i))}function Ao(l,t=1){return t-Math.abs(tn(l,t*2)-t)}function Co(l,t,e){return l<=t?0:l>=e?1:(l=(l-t)/(e-t),l*l*(3-2*l))}function To(l,t,e){return l<=t?0:l>=e?1:(l=(l-t)/(e-t),l*l*l*(l*(l*6-15)+10))}function Eo(l,t){return l+Math.floor(Math.random()*(t-l+1))}function Io(l,t){return l+Math.random()*(t-l)}function Po(l){return l*(.5-Math.random())}function Lo(l){l!==void 0&&(Vn=l);let t=Vn+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Do(l){return l*de}function No(l){return l*oi}function Ro(l){return(l&l-1)===0&&l!==0}function zo(l){return Math.pow(2,Math.ceil(Math.log(l)/Math.LN2))}function Uo(l){return Math.pow(2,Math.floor(Math.log(l)/Math.LN2))}function Oo(l,t,e,i,s){const n=Math.cos,r=Math.sin,a=n(e/2),o=r(e/2),c=n((t+i)/2),h=r((t+i)/2),u=n((t-i)/2),d=r((t-i)/2),f=n((i-t)/2),p=r((i-t)/2);switch(s){case"XYX":l.set(a*h,o*u,o*d,a*c);break;case"YZY":l.set(o*d,a*h,o*u,a*c);break;case"ZXZ":l.set(o*u,o*d,a*h,a*c);break;case"XZX":l.set(a*h,o*p,o*f,a*c);break;case"YXY":l.set(o*f,a*h,o*p,a*c);break;case"ZYZ":l.set(o*p,o*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mt(l,t){switch(t.constructor){case Float32Array:return l;case Uint32Array:return l/4294967295;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int32Array:return Math.max(l/2147483647,-1);case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function O(l,t){switch(t.constructor){case Float32Array:return l;case Uint32Array:return Math.round(l*4294967295);case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int32Array:return Math.round(l*2147483647);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}const Jf={DEG2RAD:de,RAD2DEG:oi,generateUUID:Rt,clamp:et,euclideanModulo:tn,mapLinear:So,inverseLerp:bo,lerp:ei,damp:wo,pingpong:Ao,smoothstep:Co,smootherstep:To,randInt:Eo,randFloat:Io,randFloatSpread:Po,seededRandom:Lo,degToRad:Do,radToDeg:No,isPowerOfTwo:Ro,ceilPowerOfTwo:zo,floorPowerOfTwo:Uo,setQuaternionFromProperEuler:Oo,normalize:O,denormalize:mt};class C{constructor(t=0,e=0){C.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(et(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),n=this.x-t.x,r=this.y-t.y;return this.x=n*i-r*s+t.x,this.y=n*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class B{constructor(t,e,i,s,n,r,a,o,c){B.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,n,r,a,o,c)}set(t,e,i,s,n,r,a,o,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=n,h[5]=o,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,n=this.elements,r=i[0],a=i[3],o=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],m=s[0],g=s[3],y=s[6],M=s[1],x=s[4],_=s[7],S=s[2],b=s[5],A=s[8];return n[0]=r*m+a*M+o*S,n[3]=r*g+a*x+o*b,n[6]=r*y+a*_+o*A,n[1]=c*m+h*M+u*S,n[4]=c*g+h*x+u*b,n[7]=c*y+h*_+u*A,n[2]=d*m+f*M+p*S,n[5]=d*g+f*x+p*b,n[8]=d*y+f*_+p*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],n=t[3],r=t[4],a=t[5],o=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-i*n*h+i*a*o+s*n*c-s*r*o}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],n=t[3],r=t[4],a=t[5],o=t[6],c=t[7],h=t[8],u=h*r-a*c,d=a*o-h*n,f=c*n-r*o,p=e*u+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return t[0]=u*m,t[1]=(s*c-h*i)*m,t[2]=(a*i-s*r)*m,t[3]=d*m,t[4]=(h*e-s*o)*m,t[5]=(s*n-a*e)*m,t[6]=f*m,t[7]=(i*o-c*e)*m,t[8]=(r*e-i*n)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,n,r,a){const o=Math.cos(n),c=Math.sin(n);return this.set(i*o,i*c,-i*(o*r+c*a)+r+t,-s*c,s*o,-s*(-c*r+o*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ds.makeScale(t,e)),this}rotate(t){return this.premultiply(ds.makeRotation(-t)),this}translate(t,e){return this.premultiply(ds.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ds=new B;function Fo(l){for(let t=l.length-1;t>=0;--t)if(l[t]>=65535)return!0;return!1}const Bo={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Zf(l,t){return new Bo[l](t)}function Xs(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function $f(){const l=Xs("canvas");return l.style.display="block",l}const Hn={};function Qf(l){l in Hn||(Hn[l]=!0,console.warn(l))}function Kf(l,t,e){return new Promise(function(i,s){function n(){switch(l.clientWaitSync(t,l.SYNC_FLUSH_COMMANDS_BIT,0)){case l.WAIT_FAILED:s();break;case l.TIMEOUT_EXPIRED:setTimeout(n,e);break;default:i()}}setTimeout(n,e)})}function tp(l){const t=l.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ep(l){const t=l.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const xt={enabled:!0,workingColorSpace:Jr,spaces:{},convert:function(l,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===js&&(l.r=Yt(l.r),l.g=Yt(l.g),l.b=Yt(l.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(l.applyMatrix3(this.spaces[t].toXYZ),l.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===js&&(l.r=Oe(l.r),l.g=Oe(l.g),l.b=Oe(l.b))),l},fromWorkingColorSpace:function(l,t){return this.convert(l,this.workingColorSpace,t)},toWorkingColorSpace:function(l,t){return this.convert(l,t,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Yr?Zr:this.spaces[l].transfer},getLuminanceCoefficients:function(l,t=this.workingColorSpace){return l.fromArray(this.spaces[t].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,t,e){return l.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}};function Yt(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function Oe(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}const Gn=[.64,.33,.3,.6,.15,.06],Wn=[.2126,.7152,.0722],qn=[.3127,.329],jn=new B().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xn=new B().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xt.define({[Jr]:{primaries:Gn,whitePoint:qn,transfer:Zr,toXYZ:jn,fromXYZ:Xn,luminanceCoefficients:Wn,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:Gn,whitePoint:qn,transfer:js,toXYZ:jn,fromXYZ:Xn,luminanceCoefficients:Wn,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}});let xe;class ko{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xe===void 0&&(xe=Xs("canvas")),xe.width=t.width,xe.height=t.height;const i=xe.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=xe}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),n=s.data;for(let r=0;r<n.length;r++)n[r]=Yt(n[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Yt(e[i]/255)*255):e[i]=Yt(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vo=0;class $r{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vo++}),this.uuid=Rt(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let n;if(Array.isArray(s)){n=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?n.push(fs(s[r].image)):n.push(fs(s[r]))}else n=fs(s);i.url=n}return e||(t.images[this.uuid]=i),i}}function fs(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?ko.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ho=0;class ot extends pe{constructor(t=ot.DEFAULT_IMAGE,e=ot.DEFAULT_MAPPING,i=ue,s=ue,n=$i,r=Aa,a=ai,o=qr,c=ot.DEFAULT_ANISOTROPY,h=Yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ho++}),this.uuid=Rt(),this.name="",this.source=new $r(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=n,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=o,this.offset=new C(0,0),this.repeat=new C(1,1),this.center=new C(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new B,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gr)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rn:t.x=t.x-Math.floor(t.x);break;case ue:t.x=t.x<0?0:1;break;case zn:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rn:t.y=t.y-Math.floor(t.y);break;case ue:t.y=t.y<0?0:1;break;case zn:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ot.DEFAULT_IMAGE=null;ot.DEFAULT_MAPPING=Gr;ot.DEFAULT_ANISOTROPY=1;class at{constructor(t=0,e=0,i=0,s=1){at.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,n=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*n,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*n,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*n,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,n;const o=t.elements,c=o[0],h=o[4],u=o[8],d=o[1],f=o[5],p=o[9],m=o[2],g=o[6],y=o[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,_=(f+1)/2,S=(y+1)/2,b=(h+d)/4,A=(u+m)/4,w=(p+g)/4;return x>_&&x>S?x<.01?(i=0,s=.707106781,n=.707106781):(i=Math.sqrt(x),s=b/i,n=A/i):_>S?_<.01?(i=.707106781,s=0,n=.707106781):(s=Math.sqrt(_),i=b/s,n=w/s):S<.01?(i=.707106781,s=.707106781,n=0):(n=Math.sqrt(S),i=A/n,s=w/n),this.set(i,s,n,e),this}let M=Math.sqrt((g-p)*(g-p)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(u-m)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+y-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ip extends pe{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new at(0,0,t,e),this.scissorTest=!1,this.viewport=new at(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const n=new ot(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);n.flipY=!1,n.generateMipmaps=i.generateMipmaps,n.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=n.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,n=this.textures.length;s<n;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $r(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sp extends ot{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=ue,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class np extends ot{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=ue,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ke{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,n,r,a){let o=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=n[r+0],f=n[r+1],p=n[r+2],m=n[r+3];if(a===0){t[e+0]=o,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=m;return}if(u!==m||o!==d||c!==f||h!==p){let g=1-a;const y=o*d+c*f+h*p+u*m,M=y>=0?1:-1,x=1-y*y;if(x>Number.EPSILON){const S=Math.sqrt(x),b=Math.atan2(S,y*M);g=Math.sin(g*b)/S,a=Math.sin(a*b)/S}const _=a*M;if(o=o*g+d*_,c=c*g+f*_,h=h*g+p*_,u=u*g+m*_,g===1-a){const S=1/Math.sqrt(o*o+c*c+h*h+u*u);o*=S,c*=S,h*=S,u*=S}}t[e]=o,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,n,r){const a=i[s],o=i[s+1],c=i[s+2],h=i[s+3],u=n[r],d=n[r+1],f=n[r+2],p=n[r+3];return t[e]=a*p+h*u+o*f-c*d,t[e+1]=o*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-o*u,t[e+3]=h*p-a*u-o*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,n=t._z,r=t._order,a=Math.cos,o=Math.sin,c=a(i/2),h=a(s/2),u=a(n/2),d=o(i/2),f=o(s/2),p=o(n/2);switch(r){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],n=e[8],r=e[1],a=e[5],o=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-o)*f,this._y=(n-c)*f,this._z=(r-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-o)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(n+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(n-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(o+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(r-s)/f,this._x=(n+c)/f,this._y=(o+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(et(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,n=t._z,r=t._w,a=e._x,o=e._y,c=e._z,h=e._w;return this._x=i*h+r*a+s*c-n*o,this._y=s*h+r*o+n*a-i*c,this._z=n*h+r*c+i*o-s*a,this._w=r*h-i*a-s*o-n*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,n=this._z,r=this._w;let a=r*t._w+i*t._x+s*t._y+n*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=n,this;const o=1-a*a;if(o<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*n+e*this._z,this.normalize(),this}const c=Math.sqrt(o),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=n*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),n*Math.sin(e),n*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class v{constructor(t=0,e=0,i=0){v.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yn.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yn.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6]*s,this.y=n[1]*e+n[4]*i+n[7]*s,this.z=n[2]*e+n[5]*i+n[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,n=t.elements,r=1/(n[3]*e+n[7]*i+n[11]*s+n[15]);return this.x=(n[0]*e+n[4]*i+n[8]*s+n[12])*r,this.y=(n[1]*e+n[5]*i+n[9]*s+n[13])*r,this.z=(n[2]*e+n[6]*i+n[10]*s+n[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,n=t.x,r=t.y,a=t.z,o=t.w,c=2*(r*s-a*i),h=2*(a*e-n*s),u=2*(n*i-r*e);return this.x=e+o*c+r*u-a*h,this.y=i+o*h+a*c-n*u,this.z=s+o*u+n*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,n=t.elements;return this.x=n[0]*e+n[4]*i+n[8]*s,this.y=n[1]*e+n[5]*i+n[9]*s,this.z=n[2]*e+n[6]*i+n[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,n=t.z,r=e.x,a=e.y,o=e.z;return this.x=s*o-n*a,this.y=n*r-i*o,this.z=i*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ps.copy(this).projectOnVector(t),this.sub(ps)}reflect(t){return this.sub(ps.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(et(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ps=new v,Yn=new ke;class Ct{constructor(t=new v(1/0,1/0,1/0),e=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(It.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(It.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=It.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const n=i.getAttribute("position");if(e===!0&&n!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=n.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,It):It.fromBufferAttribute(n,r),It.applyMatrix4(t.matrixWorld),this.expandByPoint(It);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mi.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mi.copy(i.boundingBox)),mi.applyMatrix4(t.matrixWorld),this.union(mi)}const s=t.children;for(let n=0,r=s.length;n<r;n++)this.expandByObject(s[n],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,It),It.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(He),gi.subVectors(this.max,He),_e.subVectors(t.a,He),ye.subVectors(t.b,He),Me.subVectors(t.c,He),Zt.subVectors(ye,_e),$t.subVectors(Me,ye),ne.subVectors(_e,Me);let e=[0,-Zt.z,Zt.y,0,-$t.z,$t.y,0,-ne.z,ne.y,Zt.z,0,-Zt.x,$t.z,0,-$t.x,ne.z,0,-ne.x,-Zt.y,Zt.x,0,-$t.y,$t.x,0,-ne.y,ne.x,0];return!ms(e,_e,ye,Me,gi)||(e=[1,0,0,0,1,0,0,0,1],!ms(e,_e,ye,Me,gi))?!1:(vi.crossVectors(Zt,$t),e=[vi.x,vi.y,vi.z],ms(e,_e,ye,Me,gi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,It).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(It).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ht[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ht[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ht[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ht[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ht[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ht[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ht[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ht[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ht),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ht=[new v,new v,new v,new v,new v,new v,new v,new v],It=new v,mi=new Ct,_e=new v,ye=new v,Me=new v,Zt=new v,$t=new v,ne=new v,He=new v,gi=new v,vi=new v,re=new v;function ms(l,t,e,i,s){for(let n=0,r=l.length-3;n<=r;n+=3){re.fromArray(l,n);const a=s.x*Math.abs(re.x)+s.y*Math.abs(re.y)+s.z*Math.abs(re.z),o=t.dot(re),c=e.dot(re),h=i.dot(re);if(Math.max(-Math.max(o,c,h),Math.min(o,c,h))>a)return!1}return!0}const Go=new Ct,Ge=new v,gs=new v;class bt{constructor(t=new v,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Go.setFromPoints(t).getCenter(i);let s=0;for(let n=0,r=t.length;n<r;n++)s=Math.max(s,i.distanceToSquared(t[n]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ge.subVectors(t,this.center);const e=Ge.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ge,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ge.copy(t.center).add(gs)),this.expandByPoint(Ge.copy(t.center).sub(gs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gt=new v,vs=new v,xi=new v,Qt=new v,xs=new v,_i=new v,_s=new v;class ui{constructor(t=new v,e=new v(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gt)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gt.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gt.copy(this.origin).addScaledVector(this.direction,e),Gt.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){vs.copy(t).add(e).multiplyScalar(.5),xi.copy(e).sub(t).normalize(),Qt.copy(this.origin).sub(vs);const n=t.distanceTo(e)*.5,r=-this.direction.dot(xi),a=Qt.dot(this.direction),o=-Qt.dot(xi),c=Qt.lengthSq(),h=Math.abs(1-r*r);let u,d,f,p;if(h>0)if(u=r*o-a,d=r*a-o,p=n*h,u>=0)if(d>=-p)if(d<=p){const m=1/h;u*=m,d*=m,f=u*(u+r*d+2*a)+d*(r*u+d+2*o)+c}else d=n,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*o)+c;else d=-n,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*o)+c;else d<=-p?(u=Math.max(0,-(-r*n+a)),d=u>0?-n:Math.min(Math.max(-n,-o),n),f=-u*u+d*(d+2*o)+c):d<=p?(u=0,d=Math.min(Math.max(-n,-o),n),f=d*(d+2*o)+c):(u=Math.max(0,-(r*n+a)),d=u>0?n:Math.min(Math.max(-n,-o),n),f=-u*u+d*(d+2*o)+c);else d=r>0?-n:n,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*o)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(vs).addScaledVector(xi,d),f}intersectSphere(t,e){Gt.subVectors(t.center,this.origin);const i=Gt.dot(this.direction),s=Gt.dot(Gt)-i*i,n=t.radius*t.radius;if(s>n)return null;const r=Math.sqrt(n-s),a=i-r,o=i+r;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,n,r,a,o;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(n=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(n=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),i>r||n>s||((n>i||isNaN(i))&&(i=n),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,o=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,o=(t.min.z-d.z)*u),i>o||a>s)||((a>i||i!==i)&&(i=a),(o<s||s!==s)&&(s=o),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Gt)!==null}intersectTriangle(t,e,i,s,n){xs.subVectors(e,t),_i.subVectors(i,t),_s.crossVectors(xs,_i);let r=this.direction.dot(_s),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Qt.subVectors(this.origin,t);const o=a*this.direction.dot(_i.crossVectors(Qt,_i));if(o<0)return null;const c=a*this.direction.dot(xs.cross(Qt));if(c<0||o+c>r)return null;const h=-a*Qt.dot(_s);return h<0?null:this.at(h/r,n)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class k{constructor(t,e,i,s,n,r,a,o,c,h,u,d,f,p,m,g){k.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,n,r,a,o,c,h,u,d,f,p,m,g)}set(t,e,i,s,n,r,a,o,c,h,u,d,f,p,m,g){const y=this.elements;return y[0]=t,y[4]=e,y[8]=i,y[12]=s,y[1]=n,y[5]=r,y[9]=a,y[13]=o,y[2]=c,y[6]=h,y[10]=u,y[14]=d,y[3]=f,y[7]=p,y[11]=m,y[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new k().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Se.setFromMatrixColumn(t,0).length(),n=1/Se.setFromMatrixColumn(t,1).length(),r=1/Se.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*n,e[5]=i[5]*n,e[6]=i[6]*n,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,n=t.z,r=Math.cos(i),a=Math.sin(i),o=Math.cos(s),c=Math.sin(s),h=Math.cos(n),u=Math.sin(n);if(t.order==="XYZ"){const d=r*h,f=r*u,p=a*h,m=a*u;e[0]=o*h,e[4]=-o*u,e[8]=c,e[1]=f+p*c,e[5]=d-m*c,e[9]=-a*o,e[2]=m-d*c,e[6]=p+f*c,e[10]=r*o}else if(t.order==="YXZ"){const d=o*h,f=o*u,p=c*h,m=c*u;e[0]=d+m*a,e[4]=p*a-f,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-p,e[6]=m+d*a,e[10]=r*o}else if(t.order==="ZXY"){const d=o*h,f=o*u,p=c*h,m=c*u;e[0]=d-m*a,e[4]=-r*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=r*h,e[9]=m-d*a,e[2]=-r*c,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){const d=r*h,f=r*u,p=a*h,m=a*u;e[0]=o*h,e[4]=p*c-f,e[8]=d*c+m,e[1]=o*u,e[5]=m*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){const d=r*o,f=r*c,p=a*o,m=a*c;e[0]=o*h,e[4]=m-d*u,e[8]=p*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-m*u}else if(t.order==="XZY"){const d=r*o,f=r*c,p=a*o,m=a*c;e[0]=o*h,e[4]=-u,e[8]=c*h,e[1]=d*u+m,e[5]=r*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=m*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wo,t,qo)}lookAt(t,e,i){const s=this.elements;return yt.subVectors(t,e),yt.lengthSq()===0&&(yt.z=1),yt.normalize(),Kt.crossVectors(i,yt),Kt.lengthSq()===0&&(Math.abs(i.z)===1?yt.x+=1e-4:yt.z+=1e-4,yt.normalize(),Kt.crossVectors(i,yt)),Kt.normalize(),yi.crossVectors(yt,Kt),s[0]=Kt.x,s[4]=yi.x,s[8]=yt.x,s[1]=Kt.y,s[5]=yi.y,s[9]=yt.y,s[2]=Kt.z,s[6]=yi.z,s[10]=yt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,n=this.elements,r=i[0],a=i[4],o=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],m=i[6],g=i[10],y=i[14],M=i[3],x=i[7],_=i[11],S=i[15],b=s[0],A=s[4],w=s[8],T=s[12],E=s[1],R=s[5],V=s[9],G=s[13],W=s[2],J=s[6],$=s[10],wt=s[14],Tt=s[3],Q=s[7],it=s[11],K=s[15];return n[0]=r*b+a*E+o*W+c*Tt,n[4]=r*A+a*R+o*J+c*Q,n[8]=r*w+a*V+o*$+c*it,n[12]=r*T+a*G+o*wt+c*K,n[1]=h*b+u*E+d*W+f*Tt,n[5]=h*A+u*R+d*J+f*Q,n[9]=h*w+u*V+d*$+f*it,n[13]=h*T+u*G+d*wt+f*K,n[2]=p*b+m*E+g*W+y*Tt,n[6]=p*A+m*R+g*J+y*Q,n[10]=p*w+m*V+g*$+y*it,n[14]=p*T+m*G+g*wt+y*K,n[3]=M*b+x*E+_*W+S*Tt,n[7]=M*A+x*R+_*J+S*Q,n[11]=M*w+x*V+_*$+S*it,n[15]=M*T+x*G+_*wt+S*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],n=t[12],r=t[1],a=t[5],o=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],m=t[7],g=t[11],y=t[15];return p*(+n*o*u-s*c*u-n*a*d+i*c*d+s*a*f-i*o*f)+m*(+e*o*f-e*c*d+n*r*d-s*r*f+s*c*h-n*o*h)+g*(+e*c*u-e*a*f-n*r*u+i*r*f+n*a*h-i*c*h)+y*(-s*a*h-e*o*u+e*a*d+s*r*u-i*r*d+i*o*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],n=t[3],r=t[4],a=t[5],o=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],m=t[13],g=t[14],y=t[15],M=u*g*c-m*d*c+m*o*f-a*g*f-u*o*y+a*d*y,x=p*d*c-h*g*c-p*o*f+r*g*f+h*o*y-r*d*y,_=h*m*c-p*u*c+p*a*f-r*m*f-h*a*y+r*u*y,S=p*u*o-h*m*o-p*a*d+r*m*d+h*a*g-r*u*g,b=e*M+i*x+s*_+n*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=M*A,t[1]=(m*d*n-u*g*n-m*s*f+i*g*f+u*s*y-i*d*y)*A,t[2]=(a*g*n-m*o*n+m*s*c-i*g*c-a*s*y+i*o*y)*A,t[3]=(u*o*n-a*d*n-u*s*c+i*d*c+a*s*f-i*o*f)*A,t[4]=x*A,t[5]=(h*g*n-p*d*n+p*s*f-e*g*f-h*s*y+e*d*y)*A,t[6]=(p*o*n-r*g*n-p*s*c+e*g*c+r*s*y-e*o*y)*A,t[7]=(r*d*n-h*o*n+h*s*c-e*d*c-r*s*f+e*o*f)*A,t[8]=_*A,t[9]=(p*u*n-h*m*n-p*i*f+e*m*f+h*i*y-e*u*y)*A,t[10]=(r*m*n-p*a*n+p*i*c-e*m*c-r*i*y+e*a*y)*A,t[11]=(h*a*n-r*u*n-h*i*c+e*u*c+r*i*f-e*a*f)*A,t[12]=S*A,t[13]=(h*m*s-p*u*s+p*i*d-e*m*d-h*i*g+e*u*g)*A,t[14]=(p*a*s-r*m*s-p*i*o+e*m*o+r*i*g-e*a*g)*A,t[15]=(r*u*s-h*a*s+h*i*o-e*u*o-r*i*d+e*a*d)*A,this}scale(t){const e=this.elements,i=t.x,s=t.y,n=t.z;return e[0]*=i,e[4]*=s,e[8]*=n,e[1]*=i,e[5]*=s,e[9]*=n,e[2]*=i,e[6]*=s,e[10]*=n,e[3]*=i,e[7]*=s,e[11]*=n,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),n=1-i,r=t.x,a=t.y,o=t.z,c=n*r,h=n*a;return this.set(c*r+i,c*a-s*o,c*o+s*a,0,c*a+s*o,h*a+i,h*o-s*r,0,c*o-s*a,h*o+s*r,n*o*o+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,n,r){return this.set(1,i,n,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,n=e._x,r=e._y,a=e._z,o=e._w,c=n+n,h=r+r,u=a+a,d=n*c,f=n*h,p=n*u,m=r*h,g=r*u,y=a*u,M=o*c,x=o*h,_=o*u,S=i.x,b=i.y,A=i.z;return s[0]=(1-(m+y))*S,s[1]=(f+_)*S,s[2]=(p-x)*S,s[3]=0,s[4]=(f-_)*b,s[5]=(1-(d+y))*b,s[6]=(g+M)*b,s[7]=0,s[8]=(p+x)*A,s[9]=(g-M)*A,s[10]=(1-(d+m))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let n=Se.set(s[0],s[1],s[2]).length();const r=Se.set(s[4],s[5],s[6]).length(),a=Se.set(s[8],s[9],s[10]).length();this.determinant()<0&&(n=-n),t.x=s[12],t.y=s[13],t.z=s[14],Pt.copy(this);const c=1/n,h=1/r,u=1/a;return Pt.elements[0]*=c,Pt.elements[1]*=c,Pt.elements[2]*=c,Pt.elements[4]*=h,Pt.elements[5]*=h,Pt.elements[6]*=h,Pt.elements[8]*=u,Pt.elements[9]*=u,Pt.elements[10]*=u,e.setFromRotationMatrix(Pt),i.x=n,i.y=r,i.z=a,this}makePerspective(t,e,i,s,n,r,a=ie){const o=this.elements,c=2*n/(e-t),h=2*n/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let f,p;if(a===ie)f=-(r+n)/(r-n),p=-2*r*n/(r-n);else if(a===Ki)f=-r/(r-n),p=-r*n/(r-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=c,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=h,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,i,s,n,r,a=ie){const o=this.elements,c=1/(e-t),h=1/(i-s),u=1/(r-n),d=(e+t)*c,f=(i+s)*h;let p,m;if(a===ie)p=(r+n)*u,m=-2*u;else if(a===Ki)p=n*u,m=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*h,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=m,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Se=new v,Pt=new k,Wo=new v(0,0,0),qo=new v(1,1,1),Kt=new v,yi=new v,yt=new v,Jn=new k,Zn=new ke;class Ut{constructor(t=0,e=0,i=0,s=Ut.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,n=s[0],r=s[4],a=s[8],o=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,n)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(o,n));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(o,n)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-et(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,n)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Jn.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jn,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zn.setFromEuler(this),this.setFromQuaternion(Zn,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ut.DEFAULT_ORDER="XYZ";class Qr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jo=0;const $n=new v,be=new ke,Wt=new k,Mi=new v,We=new v,Xo=new v,Yo=new ke,Qn=new v(1,0,0),Kn=new v(0,1,0),tr=new v(0,0,1),er={type:"added"},Jo={type:"removed"},we={type:"childadded",child:null},ys={type:"childremoved",child:null};class X extends pe{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jo++}),this.uuid=Rt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=X.DEFAULT_UP.clone();const t=new v,e=new Ut,i=new ke,s=new v(1,1,1);function n(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(n),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new k},normalMatrix:{value:new B}}),this.matrix=new k,this.matrixWorld=new k,this.matrixAutoUpdate=X.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=X.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return be.setFromAxisAngle(t,e),this.quaternion.multiply(be),this}rotateOnWorldAxis(t,e){return be.setFromAxisAngle(t,e),this.quaternion.premultiply(be),this}rotateX(t){return this.rotateOnAxis(Qn,t)}rotateY(t){return this.rotateOnAxis(Kn,t)}rotateZ(t){return this.rotateOnAxis(tr,t)}translateOnAxis(t,e){return $n.copy(t).applyQuaternion(this.quaternion),this.position.add($n.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qn,t)}translateY(t){return this.translateOnAxis(Kn,t)}translateZ(t){return this.translateOnAxis(tr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wt.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Mi.copy(t):Mi.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),We.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wt.lookAt(We,Mi,this.up):Wt.lookAt(Mi,We,this.up),this.quaternion.setFromRotationMatrix(Wt),s&&(Wt.extractRotation(s.matrixWorld),be.setFromRotationMatrix(Wt),this.quaternion.premultiply(be.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(er),we.child=t,this.dispatchEvent(we),we.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jo),ys.child=t,this.dispatchEvent(ys),ys.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wt.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wt.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wt),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(er),we.child=t,this.dispatchEvent(we),we.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let n=0,r=s.length;n<r;n++)s[n].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(We,t,Xo),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(We,Yo,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let n=0,r=s.length;n<r;n++)s[n].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function n(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=n(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let c=0,h=o.length;c<h;c++){const u=o[c];n(t.shapes,u)}else n(t.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,c=this.material.length;o<c;o++)a.push(n(t.materials,this.material[o]));s.material=a}else s.material=n(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];s.animations.push(n(t.animations,o))}}if(e){const a=r(t.geometries),o=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),p=r(t.nodes);a.length>0&&(i.geometries=a),o.length>0&&(i.materials=o),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function r(a){const o=[];for(const c in a){const h=a[c];delete h.metadata,o.push(h)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}X.DEFAULT_UP=new v(0,1,0);X.DEFAULT_MATRIX_AUTO_UPDATE=!0;X.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Lt=new v,qt=new v,Ms=new v,jt=new v,Ae=new v,Ce=new v,ir=new v,Ss=new v,bs=new v,ws=new v,As=new at,Cs=new at,Ts=new at;class St{constructor(t=new v,e=new v,i=new v){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Lt.subVectors(t,e),s.cross(Lt);const n=s.lengthSq();return n>0?s.multiplyScalar(1/Math.sqrt(n)):s.set(0,0,0)}static getBarycoord(t,e,i,s,n){Lt.subVectors(s,e),qt.subVectors(i,e),Ms.subVectors(t,e);const r=Lt.dot(Lt),a=Lt.dot(qt),o=Lt.dot(Ms),c=qt.dot(qt),h=qt.dot(Ms),u=r*c-a*a;if(u===0)return n.set(0,0,0),null;const d=1/u,f=(c*o-a*h)*d,p=(r*h-a*o)*d;return n.set(1-f-p,p,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,jt)===null?!1:jt.x>=0&&jt.y>=0&&jt.x+jt.y<=1}static getInterpolation(t,e,i,s,n,r,a,o){return this.getBarycoord(t,e,i,s,jt)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(n,jt.x),o.addScaledVector(r,jt.y),o.addScaledVector(a,jt.z),o)}static getInterpolatedAttribute(t,e,i,s,n,r){return As.setScalar(0),Cs.setScalar(0),Ts.setScalar(0),As.fromBufferAttribute(t,e),Cs.fromBufferAttribute(t,i),Ts.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(As,n.x),r.addScaledVector(Cs,n.y),r.addScaledVector(Ts,n.z),r}static isFrontFacing(t,e,i,s){return Lt.subVectors(i,e),qt.subVectors(t,e),Lt.cross(qt).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Lt.subVectors(this.c,this.b),qt.subVectors(this.a,this.b),Lt.cross(qt).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return St.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return St.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,n){return St.getInterpolation(t,this.a,this.b,this.c,e,i,s,n)}containsPoint(t){return St.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return St.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,n=this.c;let r,a;Ae.subVectors(s,i),Ce.subVectors(n,i),Ss.subVectors(t,i);const o=Ae.dot(Ss),c=Ce.dot(Ss);if(o<=0&&c<=0)return e.copy(i);bs.subVectors(t,s);const h=Ae.dot(bs),u=Ce.dot(bs);if(h>=0&&u<=h)return e.copy(s);const d=o*u-h*c;if(d<=0&&o>=0&&h<=0)return r=o/(o-h),e.copy(i).addScaledVector(Ae,r);ws.subVectors(t,n);const f=Ae.dot(ws),p=Ce.dot(ws);if(p>=0&&f<=p)return e.copy(n);const m=f*c-o*p;if(m<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(Ce,a);const g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return ir.subVectors(n,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(ir,a);const y=1/(g+m+d);return r=m*y,a=d*y,e.copy(i).addScaledVector(Ae,r).addScaledVector(Ce,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Kr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},te={h:0,s:0,l:0},Si={h:0,s:0,l:0};function Es(l,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?l+(t-l)*6*e:e<1/2?t:e<2/3?l+(t-l)*6*(2/3-e):l}class F{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Dt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=xt.workingColorSpace){return this.r=t,this.g=e,this.b=i,xt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=xt.workingColorSpace){if(t=tn(t,1),e=et(e,0,1),i=et(i,0,1),e===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+e):i+e-i*e,r=2*i-n;this.r=Es(r,n,t+1/3),this.g=Es(r,n,t),this.b=Es(r,n,t-1/3)}return xt.toWorkingColorSpace(this,s),this}setStyle(t,e=Dt){function i(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let n;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,e);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,e);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const n=s[1],r=n.length;if(r===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(n,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Dt){const i=Kr[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yt(t.r),this.g=Yt(t.g),this.b=Yt(t.b),this}copyLinearToSRGB(t){return this.r=Oe(t.r),this.g=Oe(t.g),this.b=Oe(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Dt){return xt.fromWorkingColorSpace(ct.copy(this),t),Math.round(et(ct.r*255,0,255))*65536+Math.round(et(ct.g*255,0,255))*256+Math.round(et(ct.b*255,0,255))}getHexString(t=Dt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xt.workingColorSpace){xt.fromWorkingColorSpace(ct.copy(this),e);const i=ct.r,s=ct.g,n=ct.b,r=Math.max(i,s,n),a=Math.min(i,s,n);let o,c;const h=(a+r)/2;if(a===r)o=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case i:o=(s-n)/u+(s<n?6:0);break;case s:o=(n-i)/u+2;break;case n:o=(i-s)/u+4;break}o/=6}return t.h=o,t.s=c,t.l=h,t}getRGB(t,e=xt.workingColorSpace){return xt.fromWorkingColorSpace(ct.copy(this),e),t.r=ct.r,t.g=ct.g,t.b=ct.b,t}getStyle(t=Dt){xt.fromWorkingColorSpace(ct.copy(this),t);const e=ct.r,i=ct.g,s=ct.b;return t!==Dt?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(te),this.setHSL(te.h+t,te.s+e,te.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(te),t.getHSL(Si);const i=ei(te.h,Si.h,e),s=ei(te.s,Si.s,e),n=ei(te.l,Si.l,e);return this.setHSL(i,s,n),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,n=t.elements;return this.r=n[0]*e+n[3]*i+n[6]*s,this.g=n[1]*e+n[4]*i+n[7]*s,this.b=n[2]*e+n[5]*i+n[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ct=new F;F.NAMES=Kr;let Zo=0;class _t extends pe{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zo++}),this.uuid=Rt(),this.name="",this.blending=En,this.side=qs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pn,this.blendDst=Ln,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new F(0,0,0),this.blendAlpha=0,this.depthFunc=Dn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kn,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ve,this.stencilZFail=ve,this.stencilZPass=ve,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==En&&(i.blending=this.blending),this.side!==qs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pn&&(i.blendSrc=this.blendSrc),this.blendDst!==Ln&&(i.blendDst=this.blendDst),this.blendEquation!==In&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Dn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kn&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ve&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ve&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ve&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(n){const r=[];for(const a in n){const o=n[a];delete o.metadata,r.push(o)}return r}if(e){const n=s(t.textures),r=s(t.images);n.length>0&&(i.textures=n),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let n=0;n!==s;++n)i[n]=e[n].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $o extends _t{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new F(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ut,this.combine=Qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xt=Qo();function Qo(){const l=new ArrayBuffer(4),t=new Float32Array(l),e=new Uint32Array(l),i=new Uint32Array(512),s=new Uint32Array(512);for(let o=0;o<256;++o){const c=o-127;c<-27?(i[o]=0,i[o|256]=32768,s[o]=24,s[o|256]=24):c<-14?(i[o]=1024>>-c-14,i[o|256]=1024>>-c-14|32768,s[o]=-c-1,s[o|256]=-c-1):c<=15?(i[o]=c+15<<10,i[o|256]=c+15<<10|32768,s[o]=13,s[o|256]=13):c<128?(i[o]=31744,i[o|256]=64512,s[o]=24,s[o|256]=24):(i[o]=31744,i[o|256]=64512,s[o]=13,s[o|256]=13)}const n=new Uint32Array(2048),r=new Uint32Array(64),a=new Uint32Array(64);for(let o=1;o<1024;++o){let c=o<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,n[o]=c|h}for(let o=1024;o<2048;++o)n[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)r[o]=o<<23;r[31]=1199570944,r[32]=2147483648;for(let o=33;o<63;++o)r[o]=2147483648+(o-32<<23);r[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(a[o]=1024);return{floatView:t,uint32View:e,baseTable:i,shiftTable:s,mantissaTable:n,exponentTable:r,offsetTable:a}}function vt(l){Math.abs(l)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),l=et(l,-65504,65504),Xt.floatView[0]=l;const t=Xt.uint32View[0],e=t>>23&511;return Xt.baseTable[e]+((t&8388607)>>Xt.shiftTable[e])}function ti(l){const t=l>>10;return Xt.uint32View[0]=Xt.mantissaTable[Xt.offsetTable[t]+(l&1023)]+Xt.exponentTable[t],Xt.floatView[0]}const rp={toHalfFloat:vt,fromHalfFloat:ti},st=new v,bi=new C;class ut{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Qi,this.updateRanges=[],this.gpuType=Fe,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,n=this.itemSize;s<n;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)bi.fromBufferAttribute(this,e),bi.applyMatrix3(t),this.setXY(e,bi.x,bi.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)st.fromBufferAttribute(this,e),st.applyMatrix3(t),this.setXYZ(e,st.x,st.y,st.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)st.fromBufferAttribute(this,e),st.applyMatrix4(t),this.setXYZ(e,st.x,st.y,st.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)st.fromBufferAttribute(this,e),st.applyNormalMatrix(t),this.setXYZ(e,st.x,st.y,st.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)st.fromBufferAttribute(this,e),st.transformDirection(t),this.setXYZ(e,st.x,st.y,st.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=mt(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=O(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mt(e,this.array)),e}setX(t,e){return this.normalized&&(e=O(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mt(e,this.array)),e}setY(t,e){return this.normalized&&(e=O(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mt(e,this.array)),e}setZ(t,e){return this.normalized&&(e=O(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mt(e,this.array)),e}setW(t,e){return this.normalized&&(e=O(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=O(e,this.array),i=O(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=O(e,this.array),i=O(i,this.array),s=O(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,n){return t*=this.itemSize,this.normalized&&(e=O(e,this.array),i=O(i,this.array),s=O(s,this.array),n=O(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=n,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qi&&(t.usage=this.usage),t}}class ap extends ut{constructor(t,e,i){super(new Int8Array(t),e,i)}}class op extends ut{constructor(t,e,i){super(new Uint8Array(t),e,i)}}class lp extends ut{constructor(t,e,i){super(new Uint8ClampedArray(t),e,i)}}class cp extends ut{constructor(t,e,i){super(new Int16Array(t),e,i)}}class Ko extends ut{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class hp extends ut{constructor(t,e,i){super(new Int32Array(t),e,i)}}class tl extends ut{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class up extends ut{constructor(t,e,i){super(new Uint16Array(t),e,i),this.isFloat16BufferAttribute=!0}getX(t){let e=ti(this.array[t*this.itemSize]);return this.normalized&&(e=mt(e,this.array)),e}setX(t,e){return this.normalized&&(e=O(e,this.array)),this.array[t*this.itemSize]=vt(e),this}getY(t){let e=ti(this.array[t*this.itemSize+1]);return this.normalized&&(e=mt(e,this.array)),e}setY(t,e){return this.normalized&&(e=O(e,this.array)),this.array[t*this.itemSize+1]=vt(e),this}getZ(t){let e=ti(this.array[t*this.itemSize+2]);return this.normalized&&(e=mt(e,this.array)),e}setZ(t,e){return this.normalized&&(e=O(e,this.array)),this.array[t*this.itemSize+2]=vt(e),this}getW(t){let e=ti(this.array[t*this.itemSize+3]);return this.normalized&&(e=mt(e,this.array)),e}setW(t,e){return this.normalized&&(e=O(e,this.array)),this.array[t*this.itemSize+3]=vt(e),this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=O(e,this.array),i=O(i,this.array)),this.array[t+0]=vt(e),this.array[t+1]=vt(i),this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=O(e,this.array),i=O(i,this.array),s=O(s,this.array)),this.array[t+0]=vt(e),this.array[t+1]=vt(i),this.array[t+2]=vt(s),this}setXYZW(t,e,i,s,n){return t*=this.itemSize,this.normalized&&(e=O(e,this.array),i=O(i,this.array),s=O(s,this.array),n=O(n,this.array)),this.array[t+0]=vt(e),this.array[t+1]=vt(i),this.array[t+2]=vt(s),this.array[t+3]=vt(n),this}}class U extends ut{constructor(t,e,i){super(new Float32Array(t),e,i)}}let el=0;const At=new k,Is=new X,Te=new v,Mt=new Ct,qe=new Ct,nt=new v;class Y extends pe{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:el++}),this.uuid=Rt(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fo(t)?tl:Ko)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new B().getNormalMatrix(t);i.applyNormalMatrix(n),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return At.makeRotationFromQuaternion(t),this.applyMatrix4(At),this}rotateX(t){return At.makeRotationX(t),this.applyMatrix4(At),this}rotateY(t){return At.makeRotationY(t),this.applyMatrix4(At),this}rotateZ(t){return At.makeRotationZ(t),this.applyMatrix4(At),this}translate(t,e,i){return At.makeTranslation(t,e,i),this.applyMatrix4(At),this}scale(t,e,i){return At.makeScale(t,e,i),this.applyMatrix4(At),this}lookAt(t){return Is.lookAt(t),Is.updateMatrix(),this.applyMatrix4(Is.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Te).negate(),this.translate(Te.x,Te.y,Te.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,n=t.length;s<n;s++){const r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new U(i,3))}else{for(let i=0,s=e.count;i<s;i++){const n=t[i];e.setXYZ(i,n.x,n.y,n.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ct);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const n=e[i];Mt.setFromBufferAttribute(n),this.morphTargetsRelative?(nt.addVectors(this.boundingBox.min,Mt.min),this.boundingBox.expandByPoint(nt),nt.addVectors(this.boundingBox.max,Mt.max),this.boundingBox.expandByPoint(nt)):(this.boundingBox.expandByPoint(Mt.min),this.boundingBox.expandByPoint(Mt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bt);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(t){const i=this.boundingSphere.center;if(Mt.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const a=e[n];qe.setFromBufferAttribute(a),this.morphTargetsRelative?(nt.addVectors(Mt.min,qe.min),Mt.expandByPoint(nt),nt.addVectors(Mt.max,qe.max),Mt.expandByPoint(nt)):(Mt.expandByPoint(qe.min),Mt.expandByPoint(qe.max))}Mt.getCenter(i);let s=0;for(let n=0,r=t.count;n<r;n++)nt.fromBufferAttribute(t,n),s=Math.max(s,i.distanceToSquared(nt));if(e)for(let n=0,r=e.length;n<r;n++){const a=e[n],o=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nt.fromBufferAttribute(a,c),o&&(Te.fromBufferAttribute(t,c),nt.add(Te)),s=Math.max(s,i.distanceToSquared(nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,n=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ut(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],o=[];for(let w=0;w<i.count;w++)a[w]=new v,o[w]=new v;const c=new v,h=new v,u=new v,d=new C,f=new C,p=new C,m=new v,g=new v;function y(w,T,E){c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,E),d.fromBufferAttribute(n,w),f.fromBufferAttribute(n,T),p.fromBufferAttribute(n,E),h.sub(c),u.sub(c),f.sub(d),p.sub(d);const R=1/(f.x*p.y-p.x*f.y);isFinite(R)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(R),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(R),a[w].add(m),a[T].add(m),a[E].add(m),o[w].add(g),o[T].add(g),o[E].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let w=0,T=M.length;w<T;++w){const E=M[w],R=E.start,V=E.count;for(let G=R,W=R+V;G<W;G+=3)y(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const x=new v,_=new v,S=new v,b=new v;function A(w){S.fromBufferAttribute(s,w),b.copy(S);const T=a[w];x.copy(T),x.sub(S.multiplyScalar(S.dot(T))).normalize(),_.crossVectors(b,T);const R=_.dot(o[w])<0?-1:1;r.setXYZW(w,x.x,x.y,x.z,R)}for(let w=0,T=M.length;w<T;++w){const E=M[w],R=E.start,V=E.count;for(let G=R,W=R+V;G<W;G+=3)A(t.getX(G+0)),A(t.getX(G+1)),A(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ut(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new v,n=new v,r=new v,a=new v,o=new v,c=new v,h=new v,u=new v;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),m=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),n.fromBufferAttribute(e,m),r.fromBufferAttribute(e,g),h.subVectors(r,n),u.subVectors(s,n),h.cross(u),a.fromBufferAttribute(i,p),o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,g),a.add(h),o.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),n.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,n),u.subVectors(s,n),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)nt.fromBufferAttribute(t,e),nt.normalize(),t.setXYZ(e,nt.x,nt.y,nt.z)}toNonIndexed(){function t(a,o){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(o.length*h);let f=0,p=0;for(let m=0,g=o.length;m<g;m++){a.isInterleavedBufferAttribute?f=o[m]*a.data.stride+a.offset:f=o[m]*h;for(let y=0;y<h;y++)d[p++]=c[f++]}return new ut(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Y,i=this.index.array,s=this.attributes;for(const a in s){const o=s[a],c=t(o,i);e.setAttribute(a,c)}const n=this.morphAttributes;for(const a in n){const o=[],c=n[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);o.push(f)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,o=r.length;a<o;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const c in o)o[c]!==void 0&&(t[c]=o[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const o in i){const c=i[o];t.data.attributes[o]=c.toJSON(t.data)}const s={};let n=!1;for(const o in this.morphAttributes){const c=this.morphAttributes[o],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[o]=h,n=!0)}n&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const n=t.morphAttributes;for(const c in n){const h=[],u=n[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sr=new k,ae=new ui,wi=new bt,nr=new v,Ai=new v,Ci=new v,Ti=new v,Ps=new v,Ei=new v,rr=new v,Ii=new v;class di extends X{constructor(t=new Y,e=new $o){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=s.length;n<r;n++){const a=s[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,n=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(n&&a){Ei.set(0,0,0);for(let o=0,c=n.length;o<c;o++){const h=a[o],u=n[o];h!==0&&(Ps.fromBufferAttribute(u,t),r?Ei.addScaledVector(Ps,h):Ei.addScaledVector(Ps.sub(e),h))}e.add(Ei)}return e}raycast(t,e){const i=this.geometry,s=this.material,n=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wi.copy(i.boundingSphere),wi.applyMatrix4(n),ae.copy(t.ray).recast(t.near),!(wi.containsPoint(ae.origin)===!1&&(ae.intersectSphere(wi,nr)===null||ae.origin.distanceToSquared(nr)>(t.far-t.near)**2))&&(sr.copy(n).invert(),ae.copy(t.ray).applyMatrix4(sr),!(i.boundingBox!==null&&ae.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ae)))}_computeIntersections(t,e,i){let s;const n=this.geometry,r=this.material,a=n.index,o=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv1,u=n.attributes.normal,d=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,m=d.length;p<m;p++){const g=d[p],y=r[g.materialIndex],M=Math.max(g.start,f.start),x=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,S=x;_<S;_+=3){const b=a.getX(_),A=a.getX(_+1),w=a.getX(_+2);s=Pi(this,y,t,i,c,h,u,b,A,w),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),m=Math.min(a.count,f.start+f.count);for(let g=p,y=m;g<y;g+=3){const M=a.getX(g),x=a.getX(g+1),_=a.getX(g+2);s=Pi(this,r,t,i,c,h,u,M,x,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(o!==void 0)if(Array.isArray(r))for(let p=0,m=d.length;p<m;p++){const g=d[p],y=r[g.materialIndex],M=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,S=x;_<S;_+=3){const b=_,A=_+1,w=_+2;s=Pi(this,y,t,i,c,h,u,b,A,w),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),m=Math.min(o.count,f.start+f.count);for(let g=p,y=m;g<y;g+=3){const M=g,x=g+1,_=g+2;s=Pi(this,r,t,i,c,h,u,M,x,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function il(l,t,e,i,s,n,r,a){let o;if(t.side===ba?o=i.intersectTriangle(r,n,s,!0,a):o=i.intersectTriangle(s,n,r,t.side===qs,a),o===null)return null;Ii.copy(a),Ii.applyMatrix4(l.matrixWorld);const c=e.ray.origin.distanceTo(Ii);return c<e.near||c>e.far?null:{distance:c,point:Ii.clone(),object:l}}function Pi(l,t,e,i,s,n,r,a,o,c){l.getVertexPosition(a,Ai),l.getVertexPosition(o,Ci),l.getVertexPosition(c,Ti);const h=il(l,t,e,i,Ai,Ci,Ti,rr);if(h){const u=new v;St.getBarycoord(rr,Ai,Ci,Ti,u),s&&(h.uv=St.getInterpolatedAttribute(s,a,o,c,u,new C)),n&&(h.uv1=St.getInterpolatedAttribute(n,a,o,c,u,new C)),r&&(h.normal=St.getInterpolatedAttribute(r,a,o,c,u,new v),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:o,c,normal:new v,materialIndex:0};St.getNormal(Ai,Ci,Ti,d.normal),h.face=d,h.barycoord=u}return h}class en extends Y{constructor(t=1,e=1,i=1,s=1,n=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:n,depthSegments:r};const a=this;s=Math.floor(s),n=Math.floor(n),r=Math.floor(r);const o=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,i,e,t,r,n,0),p("z","y","x",1,-1,i,e,-t,r,n,1),p("x","z","y",1,1,t,i,e,s,r,2),p("x","z","y",1,-1,t,i,-e,s,r,3),p("x","y","z",1,-1,t,e,i,s,n,4),p("x","y","z",-1,-1,t,e,-i,s,n,5),this.setIndex(o),this.setAttribute("position",new U(c,3)),this.setAttribute("normal",new U(h,3)),this.setAttribute("uv",new U(u,2));function p(m,g,y,M,x,_,S,b,A,w,T){const E=_/A,R=S/w,V=_/2,G=S/2,W=b/2,J=A+1,$=w+1;let wt=0,Tt=0;const Q=new v;for(let it=0;it<$;it++){const K=it*R-G;for(let Et=0;Et<J;Et++){const se=Et*E-V;Q[m]=se*M,Q[g]=K*x,Q[y]=W,c.push(Q.x,Q.y,Q.z),Q[m]=0,Q[g]=0,Q[y]=b>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(Et/A),u.push(1-it/w),wt+=1}}for(let it=0;it<w;it++)for(let K=0;K<A;K++){const Et=d+K+J*it,se=d+K+J*(it+1),cs=d+(K+1)+J*(it+1),fi=d+(K+1)+J*it;o.push(Et,se,fi),o.push(se,cs,fi),Tt+=6}a.addGroup(f,Tt,T),f+=Tt,d+=wt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function sn(l){const t={};for(const e in l){t[e]={};for(const i in l[e]){const s=l[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function pt(l){const t={};for(let e=0;e<l.length;e++){const i=sn(l[e]);for(const s in i)t[s]=i[s]}return t}function sl(l){const t=[];for(let e=0;e<l.length;e++)t.push(l[e].clone());return t}function dp(l){const t=l.getRenderTarget();return t===null?l.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xt.workingColorSpace}const fp={clone:sn,merge:pt},nl=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,rl=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class al extends _t{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nl,this.fragmentShader=rl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sn(t.uniforms),this.uniformsGroups=sl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class ta extends X{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new k,this.projectionMatrix=new k,this.projectionMatrixInverse=new k,this.coordinateSystem=ie}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ee=new v,ar=new C,or=new C;class Nt extends ta{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=oi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(de*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oi*2*Math.atan(Math.tan(de*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ee.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ee.x,ee.y).multiplyScalar(-t/ee.z),ee.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ee.x,ee.y).multiplyScalar(-t/ee.z)}getViewSize(t,e){return this.getViewBounds(t,ar,or),e.subVectors(or,ar)}setViewOffset(t,e,i,s,n,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=n,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(de*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,n=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const o=r.fullWidth,c=r.fullHeight;n+=r.offsetX*s/o,e-=r.offsetY*i/c,s*=r.width/o,i*=r.height/c}const a=this.filmOffset;a!==0&&(n+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ee=-90,Ie=1;class pp extends X{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Nt(Ee,Ie,t,e);s.layers=this.layers,this.add(s);const n=new Nt(Ee,Ie,t,e);n.layers=this.layers,this.add(n);const r=new Nt(Ee,Ie,t,e);r.layers=this.layers,this.add(r);const a=new Nt(Ee,Ie,t,e);a.layers=this.layers,this.add(a);const o=new Nt(Ee,Ie,t,e);o.layers=this.layers,this.add(o);const c=new Nt(Ee,Ie,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,n,r,a,o]=e;for(const c of e)this.remove(c);if(t===ie)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===Ki)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[n,r,a,o,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,n),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,o),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=m,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class mp extends ot{constructor(t,e,i,s,n,r,a,o,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Wr,super(t,e,i,s,n,r,a,o,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}const Ls=new v,ol=new v,ll=new B;class Pe{constructor(t=new v(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ls.subVectors(i,e).cross(ol.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ls),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const n=-(t.start.dot(this.normal)+this.constant)/s;return n<0||n>1?null:e.copy(t.start).addScaledVector(i,n)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ll.getNormalMatrix(t),s=this.coplanarPoint(Ls).applyMatrix4(t),n=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(n),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oe=new bt,Li=new v;class ea{constructor(t=new Pe,e=new Pe,i=new Pe,s=new Pe,n=new Pe,r=new Pe){this.planes=[t,e,i,s,n,r]}set(t,e,i,s,n,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(n),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ie){const i=this.planes,s=t.elements,n=s[0],r=s[1],a=s[2],o=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],p=s[9],m=s[10],g=s[11],y=s[12],M=s[13],x=s[14],_=s[15];if(i[0].setComponents(o-n,d-c,g-f,_-y).normalize(),i[1].setComponents(o+n,d+c,g+f,_+y).normalize(),i[2].setComponents(o+r,d+h,g+p,_+M).normalize(),i[3].setComponents(o-r,d-h,g-p,_-M).normalize(),i[4].setComponents(o-a,d-u,g-m,_-x).normalize(),e===ie)i[5].setComponents(o+a,d+u,g+m,_+x).normalize();else if(e===Ki)i[5].setComponents(a,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oe.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oe.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oe)}intersectsSprite(t){return oe.center.set(0,0,0),oe.radius=.7071067811865476,oe.applyMatrix4(t.matrixWorld),this.intersectsSphere(oe)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let n=0;n<6;n++)if(e[n].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Li.x=s.normal.x>0?t.max.x:t.min.x,Li.y=s.normal.y>0?t.max.y:t.min.y,Li.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Li)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nn extends Y{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const n=t/2,r=e/2,a=Math.floor(i),o=Math.floor(s),c=a+1,h=o+1,u=t/a,d=e/o,f=[],p=[],m=[],g=[];for(let y=0;y<h;y++){const M=y*d-r;for(let x=0;x<c;x++){const _=x*u-n;p.push(_,-M,0),m.push(0,0,1),g.push(x/a),g.push(1-y/o)}}for(let y=0;y<o;y++)for(let M=0;M<a;M++){const x=M+c*y,_=M+c*(y+1),S=M+1+c*(y+1),b=M+1+c*y;f.push(x,_,b),f.push(_,S,b)}this.setIndex(f),this.setAttribute("position",new U(p,3)),this.setAttribute("normal",new U(m,3)),this.setAttribute("uv",new U(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nn(t.width,t.height,t.widthSegments,t.heightSegments)}}const cl=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`,hl=`
#ifdef USE_ALPHAHASH

	/**
	 * See: https://casual-effects.com/research/Wyman2017Hashed/index.html
	 */

	const float ALPHA_HASH_SCALE = 0.05; // Derived from trials only, and may be changed.

	float hash2D( vec2 value ) {

		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );

	}

	float hash3D( vec3 value ) {

		return hash2D( vec2( hash2D( value.xy ), value.z ) );

	}

	float getAlphaHashThreshold( vec3 position ) {

		// Find the discretized derivatives of our coordinates
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );

		// Find two nearest log-discretized noise scales
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);

		// Compute alpha thresholds at our two noise scales
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);

		// Factor to interpolate lerp with
		float lerpFactor = fract( log2( pixScale ) );

		// Interpolate alpha threshold from noise at two scales
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;

		// Pass into CDF to compute uniformly distrib threshold
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);

		// Find our final, uniformly distributed alpha threshold (ατ)
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;

		// Avoids ατ == 0. Could also do ατ =1-ατ
		return clamp( threshold , 1.0e-6, 1.0 );

	}

#endif
`,ul=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`,dl=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,fl=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`,pl=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,ml=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`,gl=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,vl=`
#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif

	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {

		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );

	}

	float getIndirectIndex( const in int i ) {

		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );

	}

#endif

#ifdef USE_BATCHING_COLOR

	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {

		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;

	}

#endif
`,xl=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`,_l=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`,yl=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,Ml=`

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

`,Sl=`

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;

		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;

	}

	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`,bl=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );

		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// normalize is done to ensure that the bump map looks the same regardless of the texture's scale
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,wl=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#ifdef ALPHA_TO_COVERAGE

		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			if ( clipOpacity == 0.0 ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			float unionClipOpacity = 1.0;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			}
			#pragma unroll_loop_end

			clipOpacity *= 1.0 - unionClipOpacity;

		#endif

		diffuseColor.a *= clipOpacity;

		if ( diffuseColor.a == 0.0 ) discard;

	#else

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

	#endif

#endif
`,Al=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,Cl=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,Tl=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,El=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,Il=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,Pl=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec3 vColor;

#endif
`,Ll=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif

#ifdef USE_BATCHING_COLOR

	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );

	vColor.xyz *= batchingColor.xyz;

#endif
`,Dl=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {

	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );

	return fract( sin( sn ) * c );

}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
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

#ifdef USE_ALPHAHASH

	varying vec3 vPosition;

#endif

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated
`,Nl=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

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

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		uv.x += filterInt * 3.0 * cubeUV_minTileSize;

		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );

		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		#ifdef texture2DGradEXT

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= cubeUV_r1 ) {

			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;

		} else if ( roughness >= cubeUV_r4 ) {

			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;

		} else if ( roughness >= cubeUV_r5 ) {

			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;

		} else if ( roughness >= cubeUV_r6 ) {

			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );

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

#endif
`,Rl=`

vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT

	vec3 transformedTangent = objectTangent;

#endif

#ifdef USE_BATCHING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = bm * transformedTangent;

	#endif

#endif

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = im * transformedTangent;

	#endif

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`,zl=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,Ul=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`,Ol=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,Fl=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,Bl=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,kl=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`,Vl=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
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

		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`,Hl=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,Gl=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`,Wl=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,ql=`
#ifdef USE_ENVMAP

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

#endif
`,jl=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,Xl=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,Yl=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,Jl=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,Zl=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`,$l=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,Ql=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`,Kl=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`,tc=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;

#if defined( USE_LIGHT_PROBES )

	uniform vec3 lightProbe[ 9 ];

#endif

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	// based upon Frostbite 3 Moving to Physically-based Rendering
	// page 32, equation 26: E[window1]
	// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

	if ( cutoffDistance > 0.0 ) {

		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

	}

	return distanceFalloff;

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

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

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

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

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

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

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif
`,ec=`
#ifdef USE_ENVMAP

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	#ifdef USE_ANISOTROPY

		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

			#ifdef ENVMAP_TYPE_CUBE_UV

			  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

				return getIBLRadiance( viewDir, bentNormal, roughness );

			#else

				return vec3( 0.0 );

			#endif

		}

	#endif

#endif
`,ic=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,sc=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
`,nc=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,rc=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`,ac=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	material.ior = ior;

	#ifdef USE_SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULAR_COLORMAP

			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;

		#endif

		#ifdef USE_SPECULAR_INTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;

#endif

#ifdef USE_CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_DISPERSION

	material.dispersion = dispersion;

#endif

#ifdef USE_IRIDESCENCE

	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;

	#ifdef USE_IRIDESCENCEMAP

		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;

	#endif

	#ifdef USE_IRIDESCENCE_THICKNESSMAP

		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;

	#else

		material.iridescenceThickness = iridescenceThicknessMaximum;

	#endif

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEEN_COLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

	#ifdef USE_SHEEN_ROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;

	#endif

#endif

#ifdef USE_ANISOTROPY

	#ifdef USE_ANISOTROPYMAP

		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;

	#else

		vec2 anisotropyV = anisotropyVector;

	#endif

	material.anisotropy = length( anisotropyV );

	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}

	// Roughness along the anisotropy bitangent is the material roughness, while the tangent roughness increases with anisotropy.
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );

	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;

#endif
`,oc=`

struct PhysicalMaterial {

	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;

	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif

	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

	#ifdef IOR
		float ior;
	#endif

	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif

	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif

};

// temporary
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );

vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );

    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// https://google.github.io/filament/Filament.md.html#materialsystem/anisotropicmodel/anisotropicspecularbrdf
#ifdef USE_ANISOTROPY

	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {

		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );

		return saturate(v);

	}

	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {

		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;

		return RECIPROCAL_PI * a2 * pow2 ( w2 );

	}

#endif

#ifdef USE_CLEARCOAT

	// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {

		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;

		float alpha = pow2( roughness ); // UE4's roughness

		vec3 halfDir = normalize( lightDir + viewDir );

		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );

		vec3 F = F_Schlick( f0, f90, dotVH );

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

		return F * ( V * D );

	}

#endif

vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {

	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	#ifdef USE_IRIDESCENCE

		F = mix( F, material.iridescenceFresnel, material.iridescence );

	#endif

	#ifdef USE_ANISOTROPY

		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );

		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );

		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );

	#else

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

	#endif

	return F * ( V * D );

}

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif

// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from 
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;

	return fab;

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Agüera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	#ifdef USE_IRIDESCENCE

		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );

	#else

		vec3 Fr = specularColor;

	#endif

	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
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

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );

	#endif

	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );

	#else

		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

	#endif

	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );

	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,lc=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

vec3 geometryClearcoatNormal = vec3( 0.0 );

#ifdef USE_CLEARCOAT

	geometryClearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometryViewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

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

		getPointLightInfo( pointLight, geometryPosition, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometryPosition, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

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

		getDirectionalLightInfo( directionalLight, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	#if defined( USE_LIGHT_PROBES )

		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );

	#endif

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,cc=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometryNormal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	#ifdef USE_ANISOTROPY

		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );

	#else

		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );

	#endif

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`,hc=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`,uc=`
#if defined( USE_LOGDEPTHBUF )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,dc=`
#if defined( USE_LOGDEPTHBUF )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,fc=`
#ifdef USE_LOGDEPTHBUF

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,pc=`
#ifdef USE_LOGDEPTHBUF

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`,mc=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`,gc=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,vc=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	#if defined( USE_POINTS_UV )

		vec2 uv = vUv;

	#else

		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

	#endif

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`,xc=`
#if defined( USE_POINTS_UV )

	varying vec2 vUv;

#else

	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

		uniform mat3 uvTransform;

	#endif

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,_c=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,yc=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,Mc=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`,Sc=`
#if defined( USE_MORPHCOLORS )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`,bc=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`,wc=`
#ifdef USE_MORPHTARGETS

	#ifndef USE_INSTANCING_MORPH

		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	#endif

	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;

	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {

		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;

		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );

	}

#endif
`,Ac=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`,Cc=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal *= faceDirection;

	#endif

#endif

#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )

	#ifdef USE_TANGENT

		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;

	#endif

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	#ifdef USE_TANGENT

		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 nonPerturbedNormal = normal;

`,Tc=`

#ifdef USE_NORMALMAP_OBJECTSPACE

	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( USE_NORMALMAP_TANGENTSPACE )

	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	normal = normalize( tbn * mapN );

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`,Ec=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Ic=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Pc=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,Lc=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef USE_NORMALMAP_OBJECTSPACE

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

		return mat3( T * scale, B * scale, N );

	}

#endif
`,Dc=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`,Nc=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`,Rc=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif
`,zc=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`,Uc=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,Oc=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)
const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;

const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );

const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );

vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}

vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	// the 0.9999 tweak is unimportant, very tiny empirical improvement
	// return vec3( vuf * Inv255, gf * PackUpscale, bf * 0.9999 );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}

vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}

float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}

float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}

vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( viewZ + near ) / ( near - far );
}

float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps orthographic depth in [ 0, 1 ] to viewZ
	return depth * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}

float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps perspective depth in [ 0, 1 ] to viewZ
	return ( near * far ) / ( ( far - near ) * depth - far );
}
`,Fc=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,Bc=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,kc=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,Vc=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,Hc=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,Gc=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,Wc=`
#if NUM_SPOT_LIGHT_COORDS > 0

	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#if NUM_SPOT_LIGHT_MAPS > 0

	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

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

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

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

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		float shadow = 1.0;

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );

		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {

			// dp = normalized distance from light to fragment position
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
			dp += shadowBias;

			// bd3D = base direction 3D
			vec3 bd3D = normalize( lightToPosition );

			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

				shadow = (
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

			#else // no percentage-closer filtering

				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

			#endif

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

#endif
`,qc=`

#if NUM_SPOT_LIGHT_COORDS > 0

	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,jc=`

#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;

#endif

#if defined( USE_SHADOWMAP )

	#if NUM_DIR_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif

// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)

#if NUM_SPOT_LIGHT_COORDS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {

		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

#endif


`,Xc=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,Yc=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,Jc=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	uniform highp sampler2D boneTexture;

	mat4 getBoneMatrix( const in float i ) {

		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );

		return mat4( v1, v2, v3, v4 );

	}

#endif
`,Zc=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,$c=`
#ifdef USE_SKINNING

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

#endif
`,Qc=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,Kc=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,th=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,eh=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return saturate( toneMappingExposure * color );

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 CineonToneMapping( vec3 color ) {

	// filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

// Matrices for rec 2020 <> rec 709 color space conversion
// matrix provided in row-major order so it has been transposed
// https://www.itu.int/pub/R-REP-BT.2407-2017
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);

const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);

// https://iolite-engine.com/blog_posts/minimal_agx_implementation
// Mean error^2: 3.6705141e-06
vec3 agxDefaultContrastApprox( vec3 x ) {

	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;

	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;

}

// AgX Tone Mapping implementation based on Filament, which in turn is based
// on Blender's implementation using rec 2020 primaries
// https://github.com/google/filament/pull/7236
// Inputs and outputs are encoded as Linear-sRGB.

vec3 AgXToneMapping( vec3 color ) {

	// AgX constants
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);

	// explicit AgXOutsetMatrix generated from Filaments AgXOutsetMatrixInv
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);

	// LOG2_MIN      = -10.0
	// LOG2_MAX      =  +6.5
	// MIDDLE_GRAY   =  0.18
	const float AgxMinEv = - 12.47393;  // log2( pow( 2, LOG2_MIN ) * MIDDLE_GRAY )
	const float AgxMaxEv = 4.026069;    // log2( pow( 2, LOG2_MAX ) * MIDDLE_GRAY )

	color *= toneMappingExposure;

	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;

	color = AgXInsetMatrix * color;

	// Log2 encoding
	color = max( color, 1e-10 ); // avoid 0 or negative numbers for log2
	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );

	color = clamp( color, 0.0, 1.0 );

	// Apply sigmoid
	color = agxDefaultContrastApprox( color );

	// Apply AgX look
	// v = agxLook(v, look);

	color = AgXOutsetMatrix * color;

	// Linearize
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );

	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;

	// Gamut mapping. Simple clamp for now.
	color = clamp( color, 0.0, 1.0 );

	return color;

}

// https://modelviewer.dev/examples/tone-mapping

vec3 NeutralToneMapping( vec3 color ) {

	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;

	color *= toneMappingExposure;

	float x = min( color.r, min( color.g, color.b ) );

	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;

	color -= offset;

	float peak = max( color.r, max( color.g, color.b ) );

	if ( peak < StartCompression ) return color;

	float d = 1. - StartCompression;

	float newPeak = 1. - d * d / ( peak + d - StartCompression );

	color *= newPeak / peak;

	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );

	return mix( color, vec3( newPeak ), g );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`,ih=`
#ifdef USE_TRANSMISSION

	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );

#endif
`,sh=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	// Mipped Bicubic Texture Filtering by N8
	// https://www.shadertoy.com/view/Dl2SDW

	float w0( float a ) {

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );

	}

	float w1( float a ) {

		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );

	}

	float w2( float a ){

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );

	}

	float w3( float a ) {

		return ( 1.0 / 6.0 ) * ( a * a * a );

	}

	// g0 and g1 are the two amplitude functions
	float g0( float a ) {

		return w0( a ) + w1( a );

	}

	float g1( float a ) {

		return w2( a ) + w3( a );

	}

	// h0 and h1 are the two offset functions
	float h0( float a ) {

		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );

	}

	float h1( float a ) {

		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );

	}

	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {

		uv = uv * texelSize.zw + 0.5;

		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );

		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );

		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;

		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );

	}

	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {

		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );

	}

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independant scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );

	}

	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
			return vec3( 1.0 );

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec4 transmittedLight;
		vec3 transmittance;

		#ifdef USE_DISPERSION

			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );

			for ( int i = 0; i < 3; i ++ ) {

				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				// Sample framebuffer to get pixel the refracted ray hits.
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;

				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];

			}

			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;

			// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;

			// Sample framebuffer to get pixel the refracted ray hits.
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif

		vec3 attenuatedColor = transmittance * transmittedLight.rgb;

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		// As less light is transmitted, the opacity should be increased. This simple approximation does a decent job 
		// of modulating a CSS background, and has no effect when the buffer is opaque, due to a solid object or clear color.
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;

		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );

	}
#endif
`,nh=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	varying vec2 vNormalMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_SPECULARMAP

	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`,rh=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;

#endif
#ifdef USE_DISPLACEMENTMAP

	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SPECULARMAP

	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`,ah=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	vUv = vec3( uv, 1 ).xy;

#endif
#ifdef USE_MAP

	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ALPHAMAP

	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_LIGHTMAP

	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_AOMAP

	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_BUMPMAP

	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_NORMALMAP

	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_DISPLACEMENTMAP

	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_EMISSIVEMAP

	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_METALNESSMAP

	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ROUGHNESSMAP

	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ANISOTROPYMAP

	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOATMAP

	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCEMAP

	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_COLORMAP

	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULARMAP

	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_COLORMAP

	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_TRANSMISSIONMAP

	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_THICKNESSMAP

	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;

#endif
`,oh=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_BATCHING

		worldPosition = batchingMatrix * worldPosition;

	#endif

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`,lh=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,ch=`
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_APLHA8 with video textures

		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,hh=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,uh=`

#ifdef ENVMAP_TYPE_CUBE

	uniform samplerCube envMap;

#elif defined( ENVMAP_TYPE_CUBE_UV )

	uniform sampler2D envMap;

#endif

uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	#ifdef ENVMAP_TYPE_CUBE

		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );

	#else

		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,dh=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,fh=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,ph=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

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

}
`,mh=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#elif DEPTH_PACKING == 3202

		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );

	#elif DEPTH_PACKING == 3203

		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );

	#endif

}
`,gh=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

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

}
`,vh=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,xh=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,_h=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,yh=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,Mh=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,Sh=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,bh=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,wh=`
#define LAMBERT

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

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

}
`,Ah=`
#define LAMBERT

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Ch=`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,Th=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Eh=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,Ih=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`,Ph=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

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

}
`,Lh=`
#define PHONG

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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Dh=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

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

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}
`,Nh=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif

	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_DISPERSION
	uniform float dispersion;
#endif

#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;

	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;

	#endif

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Rh=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

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

}
`,zh=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Uh=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_POINTS_UV

	varying vec2 vUv;
	uniform mat3 uvTransform;

#endif

void main() {

	#ifdef USE_POINTS_UV

		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	#endif

	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
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

}
`,Oh=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,Fh=`
#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Bh=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	#include <logdepthbuf_fragment>

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`,kh=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix[ 3 ];

	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );

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

}
`,Vh=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`,H={alphahash_fragment:cl,alphahash_pars_fragment:hl,alphamap_fragment:ul,alphamap_pars_fragment:dl,alphatest_fragment:fl,alphatest_pars_fragment:pl,aomap_fragment:ml,aomap_pars_fragment:gl,batching_pars_vertex:vl,batching_vertex:xl,begin_vertex:_l,beginnormal_vertex:yl,bsdfs:Ml,iridescence_fragment:Sl,bumpmap_pars_fragment:bl,clipping_planes_fragment:wl,clipping_planes_pars_fragment:Al,clipping_planes_pars_vertex:Cl,clipping_planes_vertex:Tl,color_fragment:El,color_pars_fragment:Il,color_pars_vertex:Pl,color_vertex:Ll,common:Dl,cube_uv_reflection_fragment:Nl,defaultnormal_vertex:Rl,displacementmap_pars_vertex:zl,displacementmap_vertex:Ul,emissivemap_fragment:Ol,emissivemap_pars_fragment:Fl,colorspace_fragment:Bl,colorspace_pars_fragment:kl,envmap_fragment:Vl,envmap_common_pars_fragment:Hl,envmap_pars_fragment:Gl,envmap_pars_vertex:Wl,envmap_physical_pars_fragment:ec,envmap_vertex:ql,fog_vertex:jl,fog_pars_vertex:Xl,fog_fragment:Yl,fog_pars_fragment:Jl,gradientmap_pars_fragment:Zl,lightmap_pars_fragment:$l,lights_lambert_fragment:Ql,lights_lambert_pars_fragment:Kl,lights_pars_begin:tc,lights_toon_fragment:ic,lights_toon_pars_fragment:sc,lights_phong_fragment:nc,lights_phong_pars_fragment:rc,lights_physical_fragment:ac,lights_physical_pars_fragment:oc,lights_fragment_begin:lc,lights_fragment_maps:cc,lights_fragment_end:hc,logdepthbuf_fragment:uc,logdepthbuf_pars_fragment:dc,logdepthbuf_pars_vertex:fc,logdepthbuf_vertex:pc,map_fragment:mc,map_pars_fragment:gc,map_particle_fragment:vc,map_particle_pars_fragment:xc,metalnessmap_fragment:_c,metalnessmap_pars_fragment:yc,morphinstance_vertex:Mc,morphcolor_vertex:Sc,morphnormal_vertex:bc,morphtarget_pars_vertex:wc,morphtarget_vertex:Ac,normal_fragment_begin:Cc,normal_fragment_maps:Tc,normal_pars_fragment:Ec,normal_pars_vertex:Ic,normal_vertex:Pc,normalmap_pars_fragment:Lc,clearcoat_normal_fragment_begin:Dc,clearcoat_normal_fragment_maps:Nc,clearcoat_pars_fragment:Rc,iridescence_pars_fragment:zc,opaque_fragment:Uc,packing:Oc,premultiplied_alpha_fragment:Fc,project_vertex:Bc,dithering_fragment:kc,dithering_pars_fragment:Vc,roughnessmap_fragment:Hc,roughnessmap_pars_fragment:Gc,shadowmap_pars_fragment:Wc,shadowmap_pars_vertex:qc,shadowmap_vertex:jc,shadowmask_pars_fragment:Xc,skinbase_vertex:Yc,skinning_pars_vertex:Jc,skinning_vertex:Zc,skinnormal_vertex:$c,specularmap_fragment:Qc,specularmap_pars_fragment:Kc,tonemapping_fragment:th,tonemapping_pars_fragment:eh,transmission_fragment:ih,transmission_pars_fragment:sh,uv_pars_fragment:nh,uv_pars_vertex:rh,uv_vertex:ah,worldpos_vertex:oh,background_vert:lh,background_frag:ch,backgroundCube_vert:hh,backgroundCube_frag:uh,cube_vert:dh,cube_frag:fh,depth_vert:ph,depth_frag:mh,distanceRGBA_vert:gh,distanceRGBA_frag:vh,equirect_vert:xh,equirect_frag:_h,linedashed_vert:yh,linedashed_frag:Mh,meshbasic_vert:Sh,meshbasic_frag:bh,meshlambert_vert:wh,meshlambert_frag:Ah,meshmatcap_vert:Ch,meshmatcap_frag:Th,meshnormal_vert:Eh,meshnormal_frag:Ih,meshphong_vert:Ph,meshphong_frag:Lh,meshphysical_vert:Dh,meshphysical_frag:Nh,meshtoon_vert:Rh,meshtoon_frag:zh,points_vert:Uh,points_frag:Oh,shadow_vert:Fh,shadow_frag:Bh,sprite_vert:kh,sprite_frag:Vh},I={common:{diffuse:{value:new F(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new B}},envmap:{envMap:{value:null},envMapRotation:{value:new B},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new B}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new B}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new B},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new B},normalScale:{value:new C(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new B},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new B}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new B}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new B}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new F(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new F(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0},uvTransform:{value:new B}},sprite:{diffuse:{value:new F(16777215)},opacity:{value:1},center:{value:new C(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}}},lr={basic:{uniforms:pt([I.common,I.specularmap,I.envmap,I.aomap,I.lightmap,I.fog]),vertexShader:H.meshbasic_vert,fragmentShader:H.meshbasic_frag},lambert:{uniforms:pt([I.common,I.specularmap,I.envmap,I.aomap,I.lightmap,I.emissivemap,I.bumpmap,I.normalmap,I.displacementmap,I.fog,I.lights,{emissive:{value:new F(0)}}]),vertexShader:H.meshlambert_vert,fragmentShader:H.meshlambert_frag},phong:{uniforms:pt([I.common,I.specularmap,I.envmap,I.aomap,I.lightmap,I.emissivemap,I.bumpmap,I.normalmap,I.displacementmap,I.fog,I.lights,{emissive:{value:new F(0)},specular:{value:new F(1118481)},shininess:{value:30}}]),vertexShader:H.meshphong_vert,fragmentShader:H.meshphong_frag},standard:{uniforms:pt([I.common,I.envmap,I.aomap,I.lightmap,I.emissivemap,I.bumpmap,I.normalmap,I.displacementmap,I.roughnessmap,I.metalnessmap,I.fog,I.lights,{emissive:{value:new F(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:H.meshphysical_vert,fragmentShader:H.meshphysical_frag},toon:{uniforms:pt([I.common,I.aomap,I.lightmap,I.emissivemap,I.bumpmap,I.normalmap,I.displacementmap,I.gradientmap,I.fog,I.lights,{emissive:{value:new F(0)}}]),vertexShader:H.meshtoon_vert,fragmentShader:H.meshtoon_frag},matcap:{uniforms:pt([I.common,I.bumpmap,I.normalmap,I.displacementmap,I.fog,{matcap:{value:null}}]),vertexShader:H.meshmatcap_vert,fragmentShader:H.meshmatcap_frag},points:{uniforms:pt([I.points,I.fog]),vertexShader:H.points_vert,fragmentShader:H.points_frag},dashed:{uniforms:pt([I.common,I.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:H.linedashed_vert,fragmentShader:H.linedashed_frag},depth:{uniforms:pt([I.common,I.displacementmap]),vertexShader:H.depth_vert,fragmentShader:H.depth_frag},normal:{uniforms:pt([I.common,I.bumpmap,I.normalmap,I.displacementmap,{opacity:{value:1}}]),vertexShader:H.meshnormal_vert,fragmentShader:H.meshnormal_frag},sprite:{uniforms:pt([I.sprite,I.fog]),vertexShader:H.sprite_vert,fragmentShader:H.sprite_frag},background:{uniforms:{uvTransform:{value:new B},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:H.background_vert,fragmentShader:H.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new B}},vertexShader:H.backgroundCube_vert,fragmentShader:H.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:H.cube_vert,fragmentShader:H.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:H.equirect_vert,fragmentShader:H.equirect_frag},distanceRGBA:{uniforms:pt([I.common,I.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:H.distanceRGBA_vert,fragmentShader:H.distanceRGBA_frag},shadow:{uniforms:pt([I.lights,I.fog,{color:{value:new F(0)},opacity:{value:1}}]),vertexShader:H.shadow_vert,fragmentShader:H.shadow_frag}};lr.physical={uniforms:pt([lr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new B},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new B},clearcoatNormalScale:{value:new C(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new B},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new B},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new B},sheen:{value:0},sheenColor:{value:new F(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new B},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new B},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new B},transmissionSamplerSize:{value:new C},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new B},attenuationDistance:{value:0},attenuationColor:{value:new F(0)},specularColor:{value:new F(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new B},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new B},anisotropyVector:{value:new C},anisotropyMap:{value:null},anisotropyMapTransform:{value:new B}}]),vertexShader:H.meshphysical_vert,fragmentShader:H.meshphysical_frag};class Hh extends ta{constructor(t=-1,e=1,i=1,s=-1,n=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=n,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,n,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=n,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let n=i-t,r=i+t,a=s+e,o=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,r=n+c*this.view.width,a-=h*this.view.offsetY,o=a-h*this.view.height}this.projectionMatrix.makeOrthographic(n,r,a,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class gp extends ot{constructor(t,e,i,s,n,r,a,o,c,h=us){if(h!==us&&h!==Un)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===us&&(i=Ks),i===void 0&&h===Un&&(i=Na),super(null,s,n,r,a,o,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:zt,this.minFilter=o!==void 0?o:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class vp extends _t{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Mo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xp extends _t{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const _p=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,yp=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`;function Gh(l,t){const e=l.image&&l.image.width?l.image.width/l.image.height:1;return e>t?(l.repeat.x=1,l.repeat.y=e/t,l.offset.x=0,l.offset.y=(1-l.repeat.y)/2):(l.repeat.x=t/e,l.repeat.y=1,l.offset.x=(1-l.repeat.x)/2,l.offset.y=0),l}function Wh(l,t){const e=l.image&&l.image.width?l.image.width/l.image.height:1;return e>t?(l.repeat.x=t/e,l.repeat.y=1,l.offset.x=(1-l.repeat.x)/2,l.offset.y=0):(l.repeat.x=1,l.repeat.y=e/t,l.offset.x=0,l.offset.y=(1-l.repeat.y)/2),l}function qh(l){return l.repeat.x=1,l.repeat.y=1,l.offset.x=0,l.offset.y=0,l}function jh(l,t,e,i){const s=Xh(i);switch(e){case za:return l*t;case Oa:return l*t;case Fa:return l*t*2;case jr:return l*t/s.components*s.byteLength;case Xr:return l*t/s.components*s.byteLength;case Ba:return l*t*2/s.components*s.byteLength;case ka:return l*t*2/s.components*s.byteLength;case Ua:return l*t*3/s.components*s.byteLength;case ai:return l*t*4/s.components*s.byteLength;case Va:return l*t*4/s.components*s.byteLength;case Ha:case Ga:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*8;case Wa:case qa:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case Xa:case Ja:return Math.max(l,16)*Math.max(t,8)/4;case ja:case Ya:return Math.max(l,8)*Math.max(t,8)/2;case Za:case $a:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*8;case Qa:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((l+4)/5)*Math.floor((t+3)/4)*16;case eo:return Math.floor((l+4)/5)*Math.floor((t+4)/5)*16;case io:return Math.floor((l+5)/6)*Math.floor((t+4)/5)*16;case so:return Math.floor((l+5)/6)*Math.floor((t+5)/6)*16;case no:return Math.floor((l+7)/8)*Math.floor((t+4)/5)*16;case ro:return Math.floor((l+7)/8)*Math.floor((t+5)/6)*16;case ao:return Math.floor((l+7)/8)*Math.floor((t+7)/8)*16;case oo:return Math.floor((l+9)/10)*Math.floor((t+4)/5)*16;case lo:return Math.floor((l+9)/10)*Math.floor((t+5)/6)*16;case co:return Math.floor((l+9)/10)*Math.floor((t+7)/8)*16;case ho:return Math.floor((l+9)/10)*Math.floor((t+9)/10)*16;case uo:return Math.floor((l+11)/12)*Math.floor((t+9)/10)*16;case fo:return Math.floor((l+11)/12)*Math.floor((t+11)/12)*16;case po:case mo:case go:return Math.ceil(l/4)*Math.ceil(t/4)*16;case vo:case xo:return Math.ceil(l/4)*Math.ceil(t/4)*8;case _o:case yo:return Math.ceil(l/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xh(l){switch(l){case qr:case Ca:return{byteLength:1,components:1};case Ea:case Ta:case Pa:return{byteLength:2,components:1};case La:case Da:return{byteLength:2,components:4};case Ks:case Ia:case Fe:return{byteLength:4,components:1};case Ra:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${l}.`)}const Mp={contain:Gh,cover:Wh,fill:qh,getByteLength:jh};class Sp extends Nt{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class bp extends X{constructor(){super(),this.isGroup=!0,this.type="Group"}}class ia{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new F(t),this.density=e}clone(){return new ia(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sa{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new F(t),this.near=e,this.far=i}clone(){return new sa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wp extends X{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ut,this.environmentIntensity=1,this.environmentRotation=new Ut,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class na{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qi,this.updateRanges=[],this.version=0,this.uuid=Rt()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,n=this.stride;s<n;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rt()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rt()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ft=new v;class ts{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ft.fromBufferAttribute(this,e),ft.applyMatrix4(t),this.setXYZ(e,ft.x,ft.y,ft.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ft.fromBufferAttribute(this,e),ft.applyNormalMatrix(t),this.setXYZ(e,ft.x,ft.y,ft.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ft.fromBufferAttribute(this,e),ft.transformDirection(t),this.setXYZ(e,ft.x,ft.y,ft.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=mt(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=O(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=O(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=O(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=O(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=O(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=mt(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=mt(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=mt(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=mt(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=O(e,this.array),i=O(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=O(e,this.array),i=O(i,this.array),s=O(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=O(e,this.array),i=O(i,this.array),s=O(s,this.array),n=O(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=n,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)e.push(this.data.array[s+n])}return new ut(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ts(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)e.push(this.data.array[s+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Yh extends _t{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new F(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Le;const je=new v,De=new v,Ne=new v,Re=new C,Xe=new C,ra=new k,Di=new v,Ye=new v,Ni=new v,cr=new C,Ds=new C,hr=new C;class Ap extends X{constructor(t=new Yh){if(super(),this.isSprite=!0,this.type="Sprite",Le===void 0){Le=new Y;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new na(e,5);Le.setIndex([0,1,2,0,2,3]),Le.setAttribute("position",new ts(i,3,0,!1)),Le.setAttribute("uv",new ts(i,2,3,!1))}this.geometry=Le,this.material=t,this.center=new C(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),De.setFromMatrixScale(this.matrixWorld),ra.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ne.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&De.multiplyScalar(-Ne.z);const i=this.material.rotation;let s,n;i!==0&&(n=Math.cos(i),s=Math.sin(i));const r=this.center;Ri(Di.set(-.5,-.5,0),Ne,r,De,s,n),Ri(Ye.set(.5,-.5,0),Ne,r,De,s,n),Ri(Ni.set(.5,.5,0),Ne,r,De,s,n),cr.set(0,0),Ds.set(1,0),hr.set(1,1);let a=t.ray.intersectTriangle(Di,Ye,Ni,!1,je);if(a===null&&(Ri(Ye.set(-.5,.5,0),Ne,r,De,s,n),Ds.set(0,1),a=t.ray.intersectTriangle(Di,Ni,Ye,!1,je),a===null))return;const o=t.ray.origin.distanceTo(je);o<t.near||o>t.far||e.push({distance:o,point:je.clone(),uv:St.getInterpolation(je,Di,Ye,Ni,cr,Ds,hr,new C),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ri(l,t,e,i,s,n){Re.subVectors(l,e).addScalar(.5).multiply(i),s!==void 0?(Xe.x=n*Re.x-s*Re.y,Xe.y=s*Re.x+n*Re.y):Xe.copy(Re),l.copy(t),l.x+=Xe.x,l.y+=Xe.y,l.applyMatrix4(ra)}const zi=new v,ur=new v;class Cp extends X{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let i=0,s=e.length;i<s;i++){const n=e[i];this.addLevel(n.object.clone(),n.distance,n.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,i=0){e=Math.abs(e);const s=this.levels;let n;for(n=0;n<s.length&&!(e<s[n].distance);n++);return s.splice(n,0,{distance:e,hysteresis:i,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let i=0;i<e.length;i++)if(e[i].distance===t){const s=e.splice(i,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let i,s;for(i=1,s=e.length;i<s;i++){let n=e[i].distance;if(e[i].object.visible&&(n-=n*e[i].hysteresis),t<n)break}return e[i-1].object}return null}raycast(t,e){if(this.levels.length>0){zi.setFromMatrixPosition(this.matrixWorld);const s=t.ray.origin.distanceTo(zi);this.getObjectForDistance(s).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){zi.setFromMatrixPosition(t.matrixWorld),ur.setFromMatrixPosition(this.matrixWorld);const i=zi.distanceTo(ur)/t.zoom;e[0].object.visible=!0;let s,n;for(s=1,n=e.length;s<n;s++){let r=e[s].distance;if(e[s].object.visible&&(r-=r*e[s].hysteresis),i>=r)e[s-1].object.visible=!1,e[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<n;s++)e[s].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const i=this.levels;for(let s=0,n=i.length;s<n;s++){const r=i[s];e.object.levels.push({object:r.object.uuid,distance:r.distance,hysteresis:r.hysteresis})}return e}}const dr=new v,fr=new at,pr=new at,Jh=new v,mr=new k,Ui=new v,Ns=new bt,gr=new k,Rs=new ui;class Tp extends di{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nn,this.bindMatrix=new k,this.bindMatrixInverse=new k,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ct),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Ui),this.boundingBox.expandByPoint(Ui)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bt),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Ui),this.boundingSphere.expandByPoint(Ui)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(s),t.ray.intersectsSphere(Ns)!==!1&&(gr.copy(s).invert(),Rs.copy(t.ray).applyMatrix4(gr),!(this.boundingBox!==null&&Rs.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Rs)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new at,e=this.geometry.attributes.skinWeight;for(let i=0,s=e.count;i<s;i++){t.fromBufferAttribute(e,i);const n=1/t.manhattanLength();n!==1/0?t.multiplyScalar(n):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Nn?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wa?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const i=this.skeleton,s=this.geometry;fr.fromBufferAttribute(s.attributes.skinIndex,t),pr.fromBufferAttribute(s.attributes.skinWeight,t),dr.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let n=0;n<4;n++){const r=pr.getComponent(n);if(r!==0){const a=fr.getComponent(n);mr.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),e.addScaledVector(Jh.copy(dr).applyMatrix4(mr),r)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Zh extends X{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ii extends ot{constructor(t=null,e=1,i=1,s,n,r,a,o,c=zt,h=zt,u,d){super(null,r,a,o,c,h,s,n,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vr=new k,$h=new k;class aa{constructor(t=[],e=[]){this.uuid=Rt(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new k)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const i=new k;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,e=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let n=0,r=t.length;n<r;n++){const a=t[n]?t[n].matrixWorld:$h;vr.multiplyMatrices(a,e[n]),vr.toArray(i,n*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new aa(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const i=new ii(e,t,t,ai,Fe);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,s=t.bones.length;i<s;i++){const n=t.bones[i];let r=e[n];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",n),r=new Zh),this.bones.push(r),this.boneInverses.push(new k().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,i=this.boneInverses;for(let s=0,n=e.length;s<n;s++){const r=e[s];t.bones.push(r.uuid);const a=i[s];t.boneInverses.push(a.toArray())}return t}}class xr extends ut{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ze=new k,_r=new k,Oi=[],yr=new Ct,Qh=new k,Je=new di,Ze=new bt;class Ep extends di{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Qh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ct),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ze),yr.copy(t.boundingBox).applyMatrix4(ze),this.boundingBox.union(yr)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bt),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ze),Ze.copy(t.boundingSphere).applyMatrix4(ze),this.boundingSphere.union(Ze)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,n=i.length+1,r=t*n+1;for(let a=0;a<i.length;a++)i[a]=s[r+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Je.geometry=this.geometry,Je.material=this.material,Je.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ze.copy(this.boundingSphere),Ze.applyMatrix4(i),t.ray.intersectsSphere(Ze)!==!1))for(let n=0;n<s;n++){this.getMatrixAt(n,ze),_r.multiplyMatrices(i,ze),Je.matrixWorld=_r,Je.raycast(t,Oi);for(let r=0,a=Oi.length;r<a;r++){const o=Oi[r];o.instanceId=n,o.object=this,e.push(o)}Oi.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new xr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ii(new Float32Array(s*this.count),s,this.count,jr,Fe));const n=this.morphTexture.source.data.data;let r=0;for(let c=0;c<i.length;c++)r+=i[c];const a=this.geometry.morphTargetsRelative?1:1-r,o=s*t;n[o]=a,n.set(i,o+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function zs(l,t){return l-t}function Kh(l,t){return l.z-t.z}function tu(l,t){return t.z-l.z}class eu{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,i,s){const n=this.pool,r=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1,index:-1});const a=n[this.index];r.push(a),this.index++,a.start=t,a.count=e,a.z=i,a.index=s}reset(){this.list.length=0,this.index=0}}const gt=new k,iu=new F(1,1,1),Us=new ea,Fi=new Ct,le=new bt,$e=new v,Mr=new v,su=new v,Os=new eu,ht=new di,Bi=[];function nu(l,t,e=0){const i=t.itemSize;if(l.isInterleavedBufferAttribute||l.array.constructor!==t.array.constructor){const s=l.count;for(let n=0;n<s;n++)for(let r=0;r<i;r++)t.setComponent(n+e,r,l.getComponent(n,r))}else t.array.set(l.array,e*i);t.needsUpdate=!0}function ce(l,t){if(l.constructor!==t.constructor){const e=Math.min(l.length,t.length);for(let i=0;i<e;i++)t[i]=l[i]}else{const e=Math.min(l.length,t.length);t.set(new l.constructor(l.buffer,0,e))}}class Ip extends di{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(t,e,i=e*2,s){super(new Y,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),i=new ii(e,t,t,ai,Fe);this._matricesTexture=i}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),i=new ii(e,t,t,Xr,Ks);this._indirectTexture=i}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),i=new ii(e,t,t,ai,Fe);i.colorSpace=xt.workingColorSpace,this._colorsTexture=i}_initializeGeometry(t){const e=this.geometry,i=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const n in t.attributes){const r=t.getAttribute(n),{array:a,itemSize:o,normalized:c}=r,h=new a.constructor(i*o),u=new ut(h,o,c);e.setAttribute(n,u)}if(t.getIndex()!==null){const n=i>65535?new Uint32Array(s):new Uint16Array(s);e.setIndex(new ut(n,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const i in e.attributes){if(!t.hasAttribute(i))throw new Error(`BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const s=t.getAttribute(i),n=e.getAttribute(i);if(s.itemSize!==n.itemSize||s.normalized!==n.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ct);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let i=0,s=e.length;i<s;i++){if(e[i].active===!1)continue;const n=e[i].geometryIndex;this.getMatrixAt(i,gt),this.getBoundingBoxAt(n,Fi).applyMatrix4(gt),t.union(Fi)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bt);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let i=0,s=e.length;i<s;i++){if(e[i].active===!1)continue;const n=e[i].geometryIndex;this.getMatrixAt(i,gt),this.getBoundingSphereAt(n,le).applyMatrix4(gt),t.union(le)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const i={visible:!0,active:!0,geometryIndex:t};let s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(zs),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=i):(s=this._instanceInfo.length,this._instanceInfo.push(i));const n=this._matricesTexture;gt.identity().toArray(n.image.data,s*16),n.needsUpdate=!0;const r=this._colorsTexture;return r&&(iu.toArray(r.image.data,s*4),r.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(t,e=-1,i=-1){this._initializeGeometry(t),this._validateGeometry(t);const s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},n=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const r=t.getIndex();if(r!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=i===-1?r.count:i),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let o;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(zs),o=this._availableGeometryIds.shift(),n[o]=s):(o=this._geometryCount,this._geometryCount++,n.push(s)),this.setGeometryAt(o,t),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,o}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const i=this.geometry,s=i.getIndex()!==null,n=i.getIndex(),r=e.getIndex(),a=this._geometryInfo[t];if(s&&r.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const o=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(const h in i.attributes){const u=e.getAttribute(h),d=i.getAttribute(h);nu(u,d,o);const f=u.itemSize;for(let p=u.count,m=c;p<m;p++){const g=o+p;for(let y=0;y<f;y++)d.setComponent(g,y,0)}d.needsUpdate=!0,d.addUpdateRange(o*f,c*f)}if(s){const h=a.indexStart,u=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let d=0;d<r.count;d++)n.setX(h+d,o+r.getX(d));for(let d=r.count,f=u;d<f;d++)n.setX(h+d,o);n.needsUpdate=!0,n.addUpdateRange(h,a.reservedIndexCount)}return a.start=s?a.indexStart:a.vertexStart,a.count=s?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const i=this._instanceInfo;for(let s=0,n=i.length;s<n;s++)i[s].geometryIndex===t&&this.deleteInstance(s);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?this:(e[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this)}optimize(){let t=0,e=0;const i=this._geometryInfo,s=i.map((r,a)=>a).sort((r,a)=>i[r].vertexStart-i[a].vertexStart),n=this.geometry;for(let r=0,a=i.length;r<a;r++){const o=s[r],c=i[o];if(c.active!==!1){if(n.index!==null){if(c.indexStart!==e){const{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,f=n.index,p=f.array,m=t-u;for(let g=h;g<h+d;g++)p[g]=p[g]+m;f.array.copyWithin(e,h,h+d),f.addUpdateRange(e,d),c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){const{vertexStart:h,reservedVertexCount:u}=c,d=n.attributes;for(const f in d){const p=d[f],{array:m,itemSize:g}=p;m.copyWithin(t*g,h*g,(h+u)*g),p.addUpdateRange(t*g,u*g)}c.vertexStart=t}t+=c.reservedVertexCount,c.start=n.index?c.indexStart:c.vertexStart,this._nextIndexStart=n.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const i=this.geometry,s=this._geometryInfo[t];if(s.boundingBox===null){const n=new Ct,r=i.index,a=i.attributes.position;for(let o=s.start,c=s.start+s.count;o<c;o++){let h=o;r&&(h=r.getX(h)),n.expandByPoint($e.fromBufferAttribute(a,h))}s.boundingBox=n}return e.copy(s.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const i=this.geometry,s=this._geometryInfo[t];if(s.boundingSphere===null){const n=new bt;this.getBoundingBoxAt(t,Fi),Fi.getCenter(n.center);const r=i.index,a=i.attributes.position;let o=0;for(let c=s.start,h=s.start+s.count;c<h;c++){let u=c;r&&(u=r.getX(u)),$e.fromBufferAttribute(a,u),o=Math.max(o,n.center.distanceToSquared($e))}n.radius=Math.sqrt(o),s.boundingSphere=n}return e.copy(s.boundingSphere),e}setMatrixAt(t,e){const i=this._instanceInfo,s=this._matricesTexture,n=this._matricesTexture.image.data;return t>=i.length||i[t].active===!1?this:(e.toArray(n,t*16),s.needsUpdate=!0,this)}getMatrixAt(t,e){const i=this._instanceInfo,s=this._matricesTexture.image.data;return t>=i.length||i[t].active===!1?null:e.fromArray(s,t*16)}setColorAt(t,e){this._colorsTexture===null&&this._initColorsTexture();const i=this._colorsTexture,s=this._colorsTexture.image.data,n=this._instanceInfo;return t>=n.length||n[t].active===!1?this:(e.toArray(s,t*4),i.needsUpdate=!0,this)}getColorAt(t,e){const i=this._colorsTexture.image.data,s=this._instanceInfo;return t>=s.length||s[t].active===!1?null:e.fromArray(i,t*4)}setVisibleAt(t,e){const i=this._instanceInfo;return t>=i.length||i[t].active===!1||i[t].visible===e?this:(i[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?!1:e[t].visible}setGeometryIdAt(t,e){const i=this._instanceInfo,s=this._geometryInfo;return t>=i.length||i[t].active===!1||e>=s.length||s[e].active===!1?null:(i[t].geometryIndex=e,this)}getGeometryIdAt(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?-1:e[t].geometryIndex}getGeometryRangeAt(t,e={}){if(t<0||t>=this._geometryCount)return null;const i=this._geometryInfo[t];return e.vertexStart=i.vertexStart,e.vertexCount=i.vertexCount,e.reservedVertexCount=i.reservedVertexCount,e.indexStart=i.indexStart,e.indexCount=i.indexCount,e.reservedIndexCount=i.reservedIndexCount,e.start=i.start,e.count=i.count,e}setInstanceCount(t){const e=this._availableInstanceIds,i=this._instanceInfo;for(e.sort(zs);e[e.length-1]===i.length;)i.pop(),e.pop();if(t<i.length)throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const s=new Int32Array(t),n=new Int32Array(t);ce(this._multiDrawCounts,s),ce(this._multiDrawStarts,n),this._multiDrawCounts=s,this._multiDrawStarts=n,this._maxInstanceCount=t;const r=this._indirectTexture,a=this._matricesTexture,o=this._colorsTexture;r.dispose(),this._initIndirectTexture(),ce(r.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),ce(a.image.data,this._matricesTexture.image.data),o&&(o.dispose(),this._initColorsTexture(),ce(o.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const i=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...i.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(o=>o.indexStart+o.reservedIndexCount))>e)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const n=this.geometry;n.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Y,this._initializeGeometry(n));const r=this.geometry;n.index&&ce(n.index.array,r.index.array);for(const a in n.attributes)ce(n.attributes[a].array,r.attributes[a].array)}raycast(t,e){const i=this._instanceInfo,s=this._geometryInfo,n=this.matrixWorld,r=this.geometry;ht.material=this.material,ht.geometry.index=r.index,ht.geometry.attributes=r.attributes,ht.geometry.boundingBox===null&&(ht.geometry.boundingBox=new Ct),ht.geometry.boundingSphere===null&&(ht.geometry.boundingSphere=new bt);for(let a=0,o=i.length;a<o;a++){if(!i[a].visible||!i[a].active)continue;const c=i[a].geometryIndex,h=s[c];ht.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,ht.matrixWorld).premultiply(n),this.getBoundingBoxAt(c,ht.geometry.boundingBox),this.getBoundingSphereAt(c,ht.geometry.boundingSphere),ht.raycast(t,Bi);for(let u=0,d=Bi.length;u<d;u++){const f=Bi[u];f.object=this,f.batchId=a,e.push(f)}Bi.length=0}ht.material=null,ht.geometry.index=null,ht.geometry.attributes={},ht.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(t,e,i,s,n){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const r=s.getIndex(),a=r===null?1:r.array.BYTES_PER_ELEMENT,o=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,p=f.image.data;d&&(gt.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),Us.setFromProjectionMatrix(gt,t.coordinateSystem));let m=0;if(this.sortObjects){gt.copy(this.matrixWorld).invert(),$e.setFromMatrixPosition(i.matrixWorld).applyMatrix4(gt),Mr.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(gt);for(let M=0,x=o.length;M<x;M++)if(o[M].visible&&o[M].active){const _=o[M].geometryIndex;this.getMatrixAt(M,gt),this.getBoundingSphereAt(_,le).applyMatrix4(gt);let S=!1;if(d&&(S=!Us.intersectsSphere(le)),!S){const b=u[_],A=su.subVectors(le.center,$e).dot(Mr);Os.push(b.start,b.count,A,M)}}const g=Os.list,y=this.customSort;y===null?g.sort(n.transparent?tu:Kh):y.call(this,g,i);for(let M=0,x=g.length;M<x;M++){const _=g[M];c[m]=_.start*a,h[m]=_.count,p[m]=_.index,m++}Os.reset()}else for(let g=0,y=o.length;g<y;g++)if(o[g].visible&&o[g].active){const M=o[g].geometryIndex;let x=!1;if(d&&(this.getMatrixAt(g,gt),this.getBoundingSphereAt(M,le).applyMatrix4(gt),x=!Us.intersectsSphere(le)),!x){const _=u[M];c[m]=_.start*a,h[m]=_.count,p[m]=g,m++}}f.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(t,e,i,s,n,r){this.onBeforeRender(t,null,s,n,r)}}class oa extends _t{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new F(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const es=new v,is=new v,Sr=new k,Qe=new ui,ki=new bt,Fs=new v,br=new v;class la extends X{constructor(t=new Y,e=new oa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,n=e.count;s<n;s++)es.fromBufferAttribute(e,s-1),is.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=es.distanceTo(is);t.setAttribute("lineDistance",new U(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,n=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ki.copy(i.boundingSphere),ki.applyMatrix4(s),ki.radius+=n,t.ray.intersectsSphere(ki)===!1)return;Sr.copy(s).invert(),Qe.copy(t.ray).applyMatrix4(Sr);const a=n/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let m=f,g=p-1;m<g;m+=c){const y=h.getX(m),M=h.getX(m+1),x=Vi(this,t,Qe,o,y,M);x&&e.push(x)}if(this.isLineLoop){const m=h.getX(p-1),g=h.getX(f),y=Vi(this,t,Qe,o,m,g);y&&e.push(y)}}else{const f=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let m=f,g=p-1;m<g;m+=c){const y=Vi(this,t,Qe,o,m,m+1);y&&e.push(y)}if(this.isLineLoop){const m=Vi(this,t,Qe,o,p-1,f);m&&e.push(m)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=s.length;n<r;n++){const a=s[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}function Vi(l,t,e,i,s,n){const r=l.geometry.attributes.position;if(es.fromBufferAttribute(r,s),is.fromBufferAttribute(r,n),e.distanceSqToSegment(es,is,Fs,br)>i)return;Fs.applyMatrix4(l.matrixWorld);const o=t.ray.origin.distanceTo(Fs);if(!(o<t.near||o>t.far))return{distance:o,point:br.clone().applyMatrix4(l.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:l}}const wr=new v,Ar=new v;class Pp extends la{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,n=e.count;s<n;s+=2)wr.fromBufferAttribute(e,s),Ar.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+wr.distanceTo(Ar);t.setAttribute("lineDistance",new U(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lp extends la{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class ru extends _t{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new F(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Cr=new k,Ys=new ui,Hi=new bt,Gi=new v;class Dp extends X{constructor(t=new Y,e=new ru){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,n=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hi.copy(i.boundingSphere),Hi.applyMatrix4(s),Hi.radius+=n,t.ray.intersectsSphere(Hi)===!1)return;Cr.copy(s).invert(),Ys.copy(t.ray).applyMatrix4(Cr);const a=n/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let p=d,m=f;p<m;p++){const g=c.getX(p);Gi.fromBufferAttribute(u,g),Tr(Gi,g,o,s,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let p=d,m=f;p<m;p++)Gi.fromBufferAttribute(u,p),Tr(Gi,p,o,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=s.length;n<r;n++){const a=s[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}function Tr(l,t,e,i,s,n,r){const a=Ys.distanceSqToPoint(l);if(a<e){const o=new v;Ys.closestPointToPoint(l,o),o.applyMatrix4(i);const c=s.ray.origin.distanceTo(o);if(c<s.near||c>s.far)return;n.push({distance:c,distanceToRay:Math.sqrt(a),point:o,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Np extends ot{constructor(t,e,i,s,n,r,a,o,c){super(t,e,i,s,n,r,a,o,c),this.isVideoTexture=!0,this.minFilter=r!==void 0?r:$i,this.magFilter=n!==void 0?n:$i,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Rp extends ot{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=zt,this.minFilter=zt,this.generateMipmaps=!1,this.needsUpdate=!0}}class ca extends ot{constructor(t,e,i,s,n,r,a,o,c,h,u,d){super(null,r,a,o,c,h,s,n,u,d),this.isCompressedTexture=!0,this.image={width:e,height:i},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class zp extends ca{constructor(t,e,i,s,n,r){super(t,e,i,n,r),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=ue,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Up extends ca{constructor(t,e,i){super(void 0,t[0].width,t[0].height,e,i,Wr),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class Op extends ot{constructor(t,e,i,s,n,r,a,o,c){super(t,e,i,s,n,r,a,o,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ot{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),n=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),n+=i.distanceTo(s),e.push(n),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const n=i.length;let r;e?r=e:r=t*i[n-1];let a=0,o=n-1,c;for(;a<=o;)if(s=Math.floor(a+(o-a)/2),c=i[s]-r,c<0)a=s+1;else if(c>0)o=s-1;else{o=s;break}if(s=o,i[s]===r)return s/(n-1);const h=i[s],d=i[s+1]-h,f=(r-h)/d;return(s+f)/(n-1)}getTangent(t,e){let s=t-1e-4,n=t+1e-4;s<0&&(s=0),n>1&&(n=1);const r=this.getPoint(s),a=this.getPoint(n),o=e||(r.isVector2?new C:new v);return o.copy(a).sub(r).normalize(),o}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new v,s=[],n=[],r=[],a=new v,o=new k;for(let f=0;f<=t;f++){const p=f/t;s[f]=this.getTangentAt(p,new v)}n[0]=new v,r[0]=new v;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),n[0].crossVectors(s[0],a),r[0].crossVectors(s[0],n[0]);for(let f=1;f<=t;f++){if(n[f]=n[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(et(s[f-1].dot(s[f]),-1,1));n[f].applyMatrix4(o.makeRotationAxis(a,p))}r[f].crossVectors(s[f],n[f])}if(e===!0){let f=Math.acos(et(n[0].dot(n[t]),-1,1));f/=t,s[0].dot(a.crossVectors(n[0],n[t]))>0&&(f=-f);for(let p=1;p<=t;p++)n[p].applyMatrix4(o.makeRotationAxis(s[p],f*p)),r[p].crossVectors(s[p],n[p])}return{tangents:s,normals:n,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class rn extends Ot{constructor(t=0,e=0,i=1,s=1,n=0,r=Math.PI*2,a=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=n,this.aEndAngle=r,this.aClockwise=a,this.aRotation=o}getPoint(t,e=new C){const i=e,s=Math.PI*2;let n=this.aEndAngle-this.aStartAngle;const r=Math.abs(n)<Number.EPSILON;for(;n<0;)n+=s;for(;n>s;)n-=s;n<Number.EPSILON&&(r?n=0:n=s),this.aClockwise===!0&&!r&&(n===s?n=-s:n=n-s);const a=this.aStartAngle+t*n;let o=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=o-this.aX,f=c-this.aY;o=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(o,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class au extends rn{constructor(t,e,i,s,n,r){super(t,e,i,i,s,n,r),this.isArcCurve=!0,this.type="ArcCurve"}}function an(){let l=0,t=0,e=0,i=0;function s(n,r,a,o){l=n,t=a,e=-3*n+3*r-2*a-o,i=2*n-2*r+a+o}return{initCatmullRom:function(n,r,a,o,c){s(r,a,c*(a-n),c*(o-r))},initNonuniformCatmullRom:function(n,r,a,o,c,h,u){let d=(r-n)/c-(a-n)/(c+h)+(a-r)/h,f=(a-r)/h-(o-r)/(h+u)+(o-a)/u;d*=h,f*=h,s(r,a,d,f)},calc:function(n){const r=n*n,a=r*n;return l+t*n+e*r+i*a}}}const Wi=new v,Bs=new an,ks=new an,Vs=new an;class ou extends Ot{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new v){const i=e,s=this.points,n=s.length,r=(n-(this.closed?0:1))*t;let a=Math.floor(r),o=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/n)+1)*n:o===0&&a===n-1&&(a=n-2,o=1);let c,h;this.closed||a>0?c=s[(a-1)%n]:(Wi.subVectors(s[0],s[1]).add(s[0]),c=Wi);const u=s[a%n],d=s[(a+1)%n];if(this.closed||a+2<n?h=s[(a+2)%n]:(Wi.subVectors(s[n-1],s[n-2]).add(s[n-1]),h=Wi),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);m<1e-4&&(m=1),p<1e-4&&(p=m),g<1e-4&&(g=m),Bs.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,m,g),ks.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,m,g),Vs.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,m,g)}else this.curveType==="catmullrom"&&(Bs.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ks.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Vs.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Bs.calc(o),ks.calc(o),Vs.calc(o)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new v().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Er(l,t,e,i,s){const n=(i-t)*.5,r=(s-e)*.5,a=l*l,o=l*a;return(2*e-2*i+n+r)*o+(-3*e+3*i-2*n-r)*a+n*l+e}function lu(l,t){const e=1-l;return e*e*t}function cu(l,t){return 2*(1-l)*l*t}function hu(l,t){return l*l*t}function si(l,t,e,i){return lu(l,t)+cu(l,e)+hu(l,i)}function uu(l,t){const e=1-l;return e*e*e*t}function du(l,t){const e=1-l;return 3*e*e*l*t}function fu(l,t){return 3*(1-l)*l*l*t}function pu(l,t){return l*l*l*t}function ni(l,t,e,i,s){return uu(l,t)+du(l,e)+fu(l,i)+pu(l,s)}class ha extends Ot{constructor(t=new C,e=new C,i=new C,s=new C){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new C){const i=e,s=this.v0,n=this.v1,r=this.v2,a=this.v3;return i.set(ni(t,s.x,n.x,r.x,a.x),ni(t,s.y,n.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mu extends Ot{constructor(t=new v,e=new v,i=new v,s=new v){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new v){const i=e,s=this.v0,n=this.v1,r=this.v2,a=this.v3;return i.set(ni(t,s.x,n.x,r.x,a.x),ni(t,s.y,n.y,r.y,a.y),ni(t,s.z,n.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ua extends Ot{constructor(t=new C,e=new C){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new C){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gu extends Ot{constructor(t=new v,e=new v){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new v){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new v){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class da extends Ot{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){const i=e,s=this.v0,n=this.v1,r=this.v2;return i.set(si(t,s.x,n.x,r.x),si(t,s.y,n.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fa extends Ot{constructor(t=new v,e=new v,i=new v){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new v){const i=e,s=this.v0,n=this.v1,r=this.v2;return i.set(si(t,s.x,n.x,r.x),si(t,s.y,n.y,r.y),si(t,s.z,n.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pa extends Ot{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new C){const i=e,s=this.points,n=(s.length-1)*t,r=Math.floor(n),a=n-r,o=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return i.set(Er(a,o.x,c.x,h.x,u.x),Er(a,o.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this}}const ss=Object.freeze(Object.defineProperty({__proto__:null,ArcCurve:au,CatmullRomCurve3:ou,CubicBezierCurve:ha,CubicBezierCurve3:mu,EllipseCurve:rn,LineCurve:ua,LineCurve3:gu,QuadraticBezierCurve:da,QuadraticBezierCurve3:fa,SplineCurve:pa},Symbol.toStringTag,{value:"Module"}));class vu extends Ot{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ss[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let n=0;for(;n<s.length;){if(s[n]>=i){const r=s[n]-i,a=this.curves[n],o=a.getLength(),c=o===0?0:1-r/o;return a.getPointAt(c,e)}n++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,n=this.curves;s<n.length;s++){const r=n[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,o=r.getPoints(a);for(let c=0;c<o.length;c++){const h=o[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new ss[s.type]().fromJSON(s))}return this}}class ns extends vu{constructor(t){super(),this.type="Path",this.currentPoint=new C,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new ua(this.currentPoint.clone(),new C(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const n=new da(this.currentPoint.clone(),new C(t,e),new C(i,s));return this.curves.push(n),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,n,r){const a=new ha(this.currentPoint.clone(),new C(t,e),new C(i,s),new C(n,r));return this.curves.push(a),this.currentPoint.set(n,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new pa(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,n,r){const a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+a,e+o,i,s,n,r),this}absarc(t,e,i,s,n,r){return this.absellipse(t,e,i,i,s,n,r),this}ellipse(t,e,i,s,n,r,a,o){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,n,r,a,o),this}absellipse(t,e,i,s,n,r,a,o){const c=new rn(t,e,i,s,n,r,a,o);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class rs extends Y{constructor(t=[new C(0,-.5),new C(.5,0),new C(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=et(s,0,Math.PI*2);const n=[],r=[],a=[],o=[],c=[],h=1/e,u=new v,d=new C,f=new v,p=new v,m=new v;let g=0,y=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,y=t[M+1].y-t[M].y,f.x=y*1,f.y=-g,f.z=y*0,m.copy(f),f.normalize(),o.push(f.x,f.y,f.z);break;case t.length-1:o.push(m.x,m.y,m.z);break;default:g=t[M+1].x-t[M].x,y=t[M+1].y-t[M].y,f.x=y*1,f.y=-g,f.z=y*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),o.push(f.x,f.y,f.z),m.copy(p)}for(let M=0;M<=e;M++){const x=i+M*h*s,_=Math.sin(x),S=Math.cos(x);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*_,u.y=t[b].y,u.z=t[b].x*S,r.push(u.x,u.y,u.z),d.x=M/e,d.y=b/(t.length-1),a.push(d.x,d.y);const A=o[3*b+0]*_,w=o[3*b+1],T=o[3*b+0]*S;c.push(A,w,T)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){const _=x+M*t.length,S=_,b=_+t.length,A=_+t.length+1,w=_+1;n.push(S,b,w),n.push(A,w,b)}this.setIndex(n),this.setAttribute("position",new U(r,3)),this.setAttribute("uv",new U(a,2)),this.setAttribute("normal",new U(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rs(t.points,t.segments,t.phiStart,t.phiLength)}}class on extends rs{constructor(t=1,e=1,i=4,s=8){const n=new ns;n.absarc(0,-e/2,t,Math.PI*1.5,0),n.absarc(0,e/2,t,0,Math.PI*.5),super(n.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new on(t.radius,t.length,t.capSegments,t.radialSegments)}}class ln extends Y{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const n=[],r=[],a=[],o=[],c=new v,h=new C;r.push(0,0,0),a.push(0,0,1),o.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,o.push(h.x,h.y)}for(let u=1;u<=e;u++)n.push(u,u+1,0);this.setIndex(n),this.setAttribute("position",new U(r,3)),this.setAttribute("normal",new U(a,3)),this.setAttribute("uv",new U(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class as extends Y{constructor(t=1,e=1,i=1,s=32,n=1,r=!1,a=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o};const c=this;s=Math.floor(s),n=Math.floor(n);const h=[],u=[],d=[],f=[];let p=0;const m=[],g=i/2;let y=0;M(),r===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new U(u,3)),this.setAttribute("normal",new U(d,3)),this.setAttribute("uv",new U(f,2));function M(){const _=new v,S=new v;let b=0;const A=(e-t)/i;for(let w=0;w<=n;w++){const T=[],E=w/n,R=E*(e-t)+t;for(let V=0;V<=s;V++){const G=V/s,W=G*o+a,J=Math.sin(W),$=Math.cos(W);S.x=R*J,S.y=-E*i+g,S.z=R*$,u.push(S.x,S.y,S.z),_.set(J,A,$).normalize(),d.push(_.x,_.y,_.z),f.push(G,1-E),T.push(p++)}m.push(T)}for(let w=0;w<s;w++)for(let T=0;T<n;T++){const E=m[T][w],R=m[T+1][w],V=m[T+1][w+1],G=m[T][w+1];(t>0||T!==0)&&(h.push(E,R,G),b+=3),(e>0||T!==n-1)&&(h.push(R,V,G),b+=3)}c.addGroup(y,b,0),y+=b}function x(_){const S=p,b=new C,A=new v;let w=0;const T=_===!0?t:e,E=_===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,g*E,0),d.push(0,E,0),f.push(.5,.5),p++;const R=p;for(let V=0;V<=s;V++){const W=V/s*o+a,J=Math.cos(W),$=Math.sin(W);A.x=T*$,A.y=g*E,A.z=T*J,u.push(A.x,A.y,A.z),d.push(0,E,0),b.x=J*.5+.5,b.y=$*.5*E+.5,f.push(b.x,b.y),p++}for(let V=0;V<s;V++){const G=S+V,W=R+V;_===!0?h.push(W,W+1,G):h.push(W+1,W,G),w+=3}c.addGroup(y,w,_===!0?1:2),y+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cn extends as{constructor(t=1,e=1,i=32,s=1,n=!1,r=0,a=Math.PI*2){super(0,t,e,i,s,n,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:n,thetaStart:r,thetaLength:a}}static fromJSON(t){return new cn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class me extends Y{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const n=[],r=[];a(s),c(i),h(),this.setAttribute("position",new U(n,3)),this.setAttribute("normal",new U(n.slice(),3)),this.setAttribute("uv",new U(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const x=new v,_=new v,S=new v;for(let b=0;b<e.length;b+=3)f(e[b+0],x),f(e[b+1],_),f(e[b+2],S),o(x,_,S,M)}function o(M,x,_,S){const b=S+1,A=[];for(let w=0;w<=b;w++){A[w]=[];const T=M.clone().lerp(_,w/b),E=x.clone().lerp(_,w/b),R=b-w;for(let V=0;V<=R;V++)V===0&&w===b?A[w][V]=T:A[w][V]=T.clone().lerp(E,V/R)}for(let w=0;w<b;w++)for(let T=0;T<2*(b-w)-1;T++){const E=Math.floor(T/2);T%2===0?(d(A[w][E+1]),d(A[w+1][E]),d(A[w][E])):(d(A[w][E+1]),d(A[w+1][E+1]),d(A[w+1][E]))}}function c(M){const x=new v;for(let _=0;_<n.length;_+=3)x.x=n[_+0],x.y=n[_+1],x.z=n[_+2],x.normalize().multiplyScalar(M),n[_+0]=x.x,n[_+1]=x.y,n[_+2]=x.z}function h(){const M=new v;for(let x=0;x<n.length;x+=3){M.x=n[x+0],M.y=n[x+1],M.z=n[x+2];const _=g(M)/2/Math.PI+.5,S=y(M)/Math.PI+.5;r.push(_,1-S)}p(),u()}function u(){for(let M=0;M<r.length;M+=6){const x=r[M+0],_=r[M+2],S=r[M+4],b=Math.max(x,_,S),A=Math.min(x,_,S);b>.9&&A<.1&&(x<.2&&(r[M+0]+=1),_<.2&&(r[M+2]+=1),S<.2&&(r[M+4]+=1))}}function d(M){n.push(M.x,M.y,M.z)}function f(M,x){const _=M*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function p(){const M=new v,x=new v,_=new v,S=new v,b=new C,A=new C,w=new C;for(let T=0,E=0;T<n.length;T+=9,E+=6){M.set(n[T+0],n[T+1],n[T+2]),x.set(n[T+3],n[T+4],n[T+5]),_.set(n[T+6],n[T+7],n[T+8]),b.set(r[E+0],r[E+1]),A.set(r[E+2],r[E+3]),w.set(r[E+4],r[E+5]),S.copy(M).add(x).add(_).divideScalar(3);const R=g(S);m(b,E+0,M,R),m(A,E+2,x,R),m(w,E+4,_,R)}}function m(M,x,_,S){S<0&&M.x===1&&(r[x]=M.x-1),_.x===0&&_.z===0&&(r[x]=S/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function y(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.vertices,t.indices,t.radius,t.details)}}class hn extends me{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,n=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(n,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hn(t.radius,t.detail)}}const qi=new v,ji=new v,Hs=new v,Xi=new St;class xu extends Y{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),n=Math.cos(de*e),r=t.getIndex(),a=t.getAttribute("position"),o=r?r.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<o;p+=3){r?(c[0]=r.getX(p),c[1]=r.getX(p+1),c[2]=r.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:m,b:g,c:y}=Xi;if(m.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),y.fromBufferAttribute(a,c[2]),Xi.getNormal(Hs),u[0]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[2]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){const x=(M+1)%3,_=u[M],S=u[x],b=Xi[h[M]],A=Xi[h[x]],w=`${_}_${S}`,T=`${S}_${_}`;T in d&&d[T]?(Hs.dot(d[T].normal)<=n&&(f.push(b.x,b.y,b.z),f.push(A.x,A.y,A.z)),d[T]=null):w in d||(d[w]={index0:c[M],index1:c[x],normal:Hs.clone()})}}for(const p in d)if(d[p]){const{index0:m,index1:g}=d[p];qi.fromBufferAttribute(a,m),ji.fromBufferAttribute(a,g),f.push(qi.x,qi.y,qi.z),f.push(ji.x,ji.y,ji.z)}this.setAttribute("position",new U(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ri extends ns{constructor(t){super(t),this.uuid=Rt(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new ns().fromJSON(s))}return this}}const _u={triangulate:function(l,t,e=2){const i=t&&t.length,s=i?t[0]*e:l.length;let n=ma(l,0,s,e,!0);const r=[];if(!n||n.next===n.prev)return r;let a,o,c,h,u,d,f;if(i&&(n=wu(l,t,n,e)),l.length>80*e){a=c=l[0],o=h=l[1];for(let p=e;p<s;p+=e)u=l[p],d=l[p+1],u<a&&(a=u),d<o&&(o=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-o),f=f!==0?32767/f:0}return li(n,r,e,a,o,f,0),r}};function ma(l,t,e,i,s){let n,r;if(s===zu(l,t,e,i)>0)for(n=t;n<e;n+=i)r=Ir(n,l[n],l[n+1],r);else for(n=e-i;n>=t;n-=i)r=Ir(n,l[n],l[n+1],r);return r&&os(r,r.next)&&(hi(r),r=r.next),r}function fe(l,t){if(!l)return l;t||(t=l);let e=l,i;do if(i=!1,!e.steiner&&(os(e,e.next)||Z(e.prev,e,e.next)===0)){if(hi(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function li(l,t,e,i,s,n,r){if(!l)return;!r&&n&&Iu(l,i,s,n);let a=l,o,c;for(;l.prev!==l.next;){if(o=l.prev,c=l.next,n?Mu(l,i,s,n):yu(l)){t.push(o.i/e|0),t.push(l.i/e|0),t.push(c.i/e|0),hi(l),l=c.next,a=c.next;continue}if(l=c,l===a){r?r===1?(l=Su(fe(l),t,e),li(l,t,e,i,s,n,2)):r===2&&bu(l,t,e,i,s,n):li(fe(l),t,e,i,s,n,1);break}}}function yu(l){const t=l.prev,e=l,i=l.next;if(Z(t,e,i)>=0)return!1;const s=t.x,n=e.x,r=i.x,a=t.y,o=e.y,c=i.y,h=s<n?s<r?s:r:n<r?n:r,u=a<o?a<c?a:c:o<c?o:c,d=s>n?s>r?s:r:n>r?n:r,f=a>o?a>c?a:c:o>c?o:c;let p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Ue(s,a,n,o,r,c,p.x,p.y)&&Z(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Mu(l,t,e,i){const s=l.prev,n=l,r=l.next;if(Z(s,n,r)>=0)return!1;const a=s.x,o=n.x,c=r.x,h=s.y,u=n.y,d=r.y,f=a<o?a<c?a:c:o<c?o:c,p=h<u?h<d?h:d:u<d?u:d,m=a>o?a>c?a:c:o>c?o:c,g=h>u?h>d?h:d:u>d?u:d,y=Js(f,p,t,e,i),M=Js(m,g,t,e,i);let x=l.prevZ,_=l.nextZ;for(;x&&x.z>=y&&_&&_.z<=M;){if(x.x>=f&&x.x<=m&&x.y>=p&&x.y<=g&&x!==s&&x!==r&&Ue(a,h,o,u,c,d,x.x,x.y)&&Z(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=m&&_.y>=p&&_.y<=g&&_!==s&&_!==r&&Ue(a,h,o,u,c,d,_.x,_.y)&&Z(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=y;){if(x.x>=f&&x.x<=m&&x.y>=p&&x.y<=g&&x!==s&&x!==r&&Ue(a,h,o,u,c,d,x.x,x.y)&&Z(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=m&&_.y>=p&&_.y<=g&&_!==s&&_!==r&&Ue(a,h,o,u,c,d,_.x,_.y)&&Z(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Su(l,t,e){let i=l;do{const s=i.prev,n=i.next.next;!os(s,n)&&ga(s,i,i.next,n)&&ci(s,n)&&ci(n,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(n.i/e|0),hi(i),hi(i.next),i=l=n),i=i.next}while(i!==l);return fe(i)}function bu(l,t,e,i,s,n){let r=l;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Du(r,a)){let o=va(r,a);r=fe(r,r.next),o=fe(o,o.next),li(r,t,e,i,s,n,0),li(o,t,e,i,s,n,0);return}a=a.next}r=r.next}while(r!==l)}function wu(l,t,e,i){const s=[];let n,r,a,o,c;for(n=0,r=t.length;n<r;n++)a=t[n]*i,o=n<r-1?t[n+1]*i:l.length,c=ma(l,a,o,i,!1),c===c.next&&(c.steiner=!0),s.push(Lu(c));for(s.sort(Au),n=0;n<s.length;n++)e=Cu(s[n],e);return e}function Au(l,t){return l.x-t.x}function Cu(l,t){const e=Tu(l,t);if(!e)return t;const i=va(e,l);return fe(i,i.next),fe(e,e.next)}function Tu(l,t){let e=t,i=-1/0,s;const n=l.x,r=l.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===n))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,o=s.x,c=s.y;let h=1/0,u;e=s;do n>=e.x&&e.x>=o&&n!==e.x&&Ue(r<c?n:i,r,o,c,r<c?i:n,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(n-e.x),ci(e,l)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Eu(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Eu(l,t){return Z(l.prev,l,t.prev)<0&&Z(t.next,l,l.next)<0}function Iu(l,t,e,i){let s=l;do s.z===0&&(s.z=Js(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==l);s.prevZ.nextZ=null,s.prevZ=null,Pu(s)}function Pu(l){let t,e,i,s,n,r,a,o,c=1;do{for(e=l,l=null,n=null,r=0;e;){for(r++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(o=c;a>0||o>0&&i;)a!==0&&(o===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,o--),n?n.nextZ=s:l=s,s.prevZ=n,n=s;e=i}n.nextZ=null,c*=2}while(r>1);return l}function Js(l,t,e,i,s){return l=(l-e)*s|0,t=(t-i)*s|0,l=(l|l<<8)&16711935,l=(l|l<<4)&252645135,l=(l|l<<2)&858993459,l=(l|l<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,l|t<<1}function Lu(l){let t=l,e=l;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==l);return e}function Ue(l,t,e,i,s,n,r,a){return(s-r)*(t-a)>=(l-r)*(n-a)&&(l-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(n-a)>=(s-r)*(i-a)}function Du(l,t){return l.next.i!==t.i&&l.prev.i!==t.i&&!Nu(l,t)&&(ci(l,t)&&ci(t,l)&&Ru(l,t)&&(Z(l.prev,l,t.prev)||Z(l,t.prev,t))||os(l,t)&&Z(l.prev,l,l.next)>0&&Z(t.prev,t,t.next)>0)}function Z(l,t,e){return(t.y-l.y)*(e.x-t.x)-(t.x-l.x)*(e.y-t.y)}function os(l,t){return l.x===t.x&&l.y===t.y}function ga(l,t,e,i){const s=Ji(Z(l,t,e)),n=Ji(Z(l,t,i)),r=Ji(Z(e,i,l)),a=Ji(Z(e,i,t));return!!(s!==n&&r!==a||s===0&&Yi(l,e,t)||n===0&&Yi(l,i,t)||r===0&&Yi(e,l,i)||a===0&&Yi(e,t,i))}function Yi(l,t,e){return t.x<=Math.max(l.x,e.x)&&t.x>=Math.min(l.x,e.x)&&t.y<=Math.max(l.y,e.y)&&t.y>=Math.min(l.y,e.y)}function Ji(l){return l>0?1:l<0?-1:0}function Nu(l,t){let e=l;do{if(e.i!==l.i&&e.next.i!==l.i&&e.i!==t.i&&e.next.i!==t.i&&ga(e,e.next,l,t))return!0;e=e.next}while(e!==l);return!1}function ci(l,t){return Z(l.prev,l,l.next)<0?Z(l,t,l.next)>=0&&Z(l,l.prev,t)>=0:Z(l,t,l.prev)<0||Z(l,l.next,t)<0}function Ru(l,t){let e=l,i=!1;const s=(l.x+t.x)/2,n=(l.y+t.y)/2;do e.y>n!=e.next.y>n&&e.next.y!==e.y&&s<(e.next.x-e.x)*(n-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==l);return i}function va(l,t){const e=new Zs(l.i,l.x,l.y),i=new Zs(t.i,t.x,t.y),s=l.next,n=t.prev;return l.next=t,t.prev=l,e.next=s,s.prev=e,i.next=e,e.prev=i,n.next=i,i.prev=n,i}function Ir(l,t,e,i){const s=new Zs(l,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function hi(l){l.next.prev=l.prev,l.prev.next=l.next,l.prevZ&&(l.prevZ.nextZ=l.nextZ),l.nextZ&&(l.nextZ.prevZ=l.prevZ)}function Zs(l,t,e){this.i=l,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function zu(l,t,e,i){let s=0;for(let n=t,r=e-i;n<e;n+=i)s+=(l[r]-l[n])*(l[n+1]+l[r+1]),r=n;return s}class Jt{static area(t){const e=t.length;let i=0;for(let s=e-1,n=0;n<e;s=n++)i+=t[s].x*t[n].y-t[n].x*t[s].y;return i*.5}static isClockWise(t){return Jt.area(t)<0}static triangulateShape(t,e){const i=[],s=[],n=[];Pr(t),Lr(i,t);let r=t.length;e.forEach(Pr);for(let o=0;o<e.length;o++)s.push(r),r+=e[o].length,Lr(i,e[o]);const a=_u.triangulate(i,s);for(let o=0;o<a.length;o+=3)n.push(a.slice(o,o+3));return n}}function Pr(l){const t=l.length;t>2&&l[t-1].equals(l[0])&&l.pop()}function Lr(l,t){for(let e=0;e<t.length;e++)l.push(t[e].x),l.push(t[e].y)}class un extends Y{constructor(t=new ri([new C(.5,.5),new C(-.5,.5),new C(-.5,-.5),new C(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],n=[];for(let a=0,o=t.length;a<o;a++){const c=t[a];r(c)}this.setAttribute("position",new U(s,3)),this.setAttribute("uv",new U(n,2)),this.computeVertexNormals();function r(a){const o=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const y=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Uu;let x,_=!1,S,b,A,w;y&&(x=y.getSpacedPoints(h),_=!0,d=!1,S=y.computeFrenetFrames(h,!1),b=new v,A=new v,w=new v),d||(g=0,f=0,p=0,m=0);const T=a.extractPoints(c);let E=T.shape;const R=T.holes;if(!Jt.isClockWise(E)){E=E.reverse();for(let P=0,L=R.length;P<L;P++){const D=R[P];Jt.isClockWise(D)&&(R[P]=D.reverse())}}const G=Jt.triangulateShape(E,R),W=E;for(let P=0,L=R.length;P<L;P++){const D=R[P];E=E.concat(D)}function J(P,L,D){return L||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(L,D)}const $=E.length,wt=G.length;function Tt(P,L,D){let z,N,q;const j=P.x-L.x,tt=P.y-L.y,dt=D.x-P.x,rt=D.y-P.y,Ve=j*j+tt*tt,hs=j*rt-tt*dt;if(Math.abs(hs)>Number.EPSILON){const Vt=Math.sqrt(Ve),bn=Math.sqrt(dt*dt+rt*rt),wn=L.x-tt/Vt,An=L.y+j/Vt,Ma=D.x-rt/bn,Sa=D.y+dt/bn,Cn=((Ma-wn)*rt-(Sa-An)*dt)/(j*rt-tt*dt);z=wn+j*Cn-P.x,N=An+tt*Cn-P.y;const Tn=z*z+N*N;if(Tn<=2)return new C(z,N);q=Math.sqrt(Tn/2)}else{let Vt=!1;j>Number.EPSILON?dt>Number.EPSILON&&(Vt=!0):j<-Number.EPSILON?dt<-Number.EPSILON&&(Vt=!0):Math.sign(tt)===Math.sign(rt)&&(Vt=!0),Vt?(z=-tt,N=j,q=Math.sqrt(Ve)):(z=j,N=tt,q=Math.sqrt(Ve/2))}return new C(z/q,N/q)}const Q=[];for(let P=0,L=W.length,D=L-1,z=P+1;P<L;P++,D++,z++)D===L&&(D=0),z===L&&(z=0),Q[P]=Tt(W[P],W[D],W[z]);const it=[];let K,Et=Q.concat();for(let P=0,L=R.length;P<L;P++){const D=R[P];K=[];for(let z=0,N=D.length,q=N-1,j=z+1;z<N;z++,q++,j++)q===N&&(q=0),j===N&&(j=0),K[z]=Tt(D[z],D[q],D[j]);it.push(K),Et=Et.concat(K)}for(let P=0;P<g;P++){const L=P/g,D=f*Math.cos(L*Math.PI/2),z=p*Math.sin(L*Math.PI/2)+m;for(let N=0,q=W.length;N<q;N++){const j=J(W[N],Q[N],z);Ft(j.x,j.y,-D)}for(let N=0,q=R.length;N<q;N++){const j=R[N];K=it[N];for(let tt=0,dt=j.length;tt<dt;tt++){const rt=J(j[tt],K[tt],z);Ft(rt.x,rt.y,-D)}}}const se=p+m;for(let P=0;P<$;P++){const L=d?J(E[P],Et[P],se):E[P];_?(A.copy(S.normals[0]).multiplyScalar(L.x),b.copy(S.binormals[0]).multiplyScalar(L.y),w.copy(x[0]).add(A).add(b),Ft(w.x,w.y,w.z)):Ft(L.x,L.y,0)}for(let P=1;P<=h;P++)for(let L=0;L<$;L++){const D=d?J(E[L],Et[L],se):E[L];_?(A.copy(S.normals[P]).multiplyScalar(D.x),b.copy(S.binormals[P]).multiplyScalar(D.y),w.copy(x[P]).add(A).add(b),Ft(w.x,w.y,w.z)):Ft(D.x,D.y,u/h*P)}for(let P=g-1;P>=0;P--){const L=P/g,D=f*Math.cos(L*Math.PI/2),z=p*Math.sin(L*Math.PI/2)+m;for(let N=0,q=W.length;N<q;N++){const j=J(W[N],Q[N],z);Ft(j.x,j.y,u+D)}for(let N=0,q=R.length;N<q;N++){const j=R[N];K=it[N];for(let tt=0,dt=j.length;tt<dt;tt++){const rt=J(j[tt],K[tt],z);_?Ft(rt.x,rt.y+x[h-1].y,x[h-1].x+D):Ft(rt.x,rt.y,u+D)}}}cs(),fi();function cs(){const P=s.length/3;if(d){let L=0,D=$*L;for(let z=0;z<wt;z++){const N=G[z];pi(N[2]+D,N[1]+D,N[0]+D)}L=h+g*2,D=$*L;for(let z=0;z<wt;z++){const N=G[z];pi(N[0]+D,N[1]+D,N[2]+D)}}else{for(let L=0;L<wt;L++){const D=G[L];pi(D[2],D[1],D[0])}for(let L=0;L<wt;L++){const D=G[L];pi(D[0]+$*h,D[1]+$*h,D[2]+$*h)}}i.addGroup(P,s.length/3-P,0)}function fi(){const P=s.length/3;let L=0;Sn(W,L),L+=W.length;for(let D=0,z=R.length;D<z;D++){const N=R[D];Sn(N,L),L+=N.length}i.addGroup(P,s.length/3-P,1)}function Sn(P,L){let D=P.length;for(;--D>=0;){const z=D;let N=D-1;N<0&&(N=P.length-1);for(let q=0,j=h+g*2;q<j;q++){const tt=$*q,dt=$*(q+1),rt=L+z+tt,Ve=L+N+tt,hs=L+N+dt,Vt=L+z+dt;ya(rt,Ve,hs,Vt)}}}function Ft(P,L,D){o.push(P),o.push(L),o.push(D)}function pi(P,L,D){Bt(P),Bt(L),Bt(D);const z=s.length/3,N=M.generateTopUV(i,s,z-3,z-2,z-1);kt(N[0]),kt(N[1]),kt(N[2])}function ya(P,L,D,z){Bt(P),Bt(L),Bt(z),Bt(L),Bt(D),Bt(z);const N=s.length/3,q=M.generateSideWallUV(i,s,N-6,N-3,N-2,N-1);kt(q[0]),kt(q[1]),kt(q[3]),kt(q[1]),kt(q[2]),kt(q[3])}function Bt(P){s.push(o[P*3+0]),s.push(o[P*3+1]),s.push(o[P*3+2])}function kt(P){n.push(P.x),n.push(P.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Ou(e,i,t)}static fromJSON(t,e){const i=[];for(let n=0,r=t.shapes.length;n<r;n++){const a=e[t.shapes[n]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ss[s.type]().fromJSON(s)),new un(i,t.options)}}const Uu={generateTopUV:function(l,t,e,i,s){const n=t[e*3],r=t[e*3+1],a=t[i*3],o=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new C(n,r),new C(a,o),new C(c,h)]},generateSideWallUV:function(l,t,e,i,s,n){const r=t[e*3],a=t[e*3+1],o=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],m=t[n*3],g=t[n*3+1],y=t[n*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new C(r,1-o),new C(c,1-u),new C(d,1-p),new C(m,1-y)]:[new C(a,1-o),new C(h,1-u),new C(f,1-p),new C(g,1-y)]}};function Ou(l,t,e){if(e.shapes=[],Array.isArray(l))for(let i=0,s=l.length;i<s;i++){const n=l[i];e.shapes.push(n.uuid)}else e.shapes.push(l.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class dn extends me{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,n,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new dn(t.radius,t.detail)}}class fn extends me{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new fn(t.radius,t.detail)}}class pn extends Y{constructor(t=.5,e=1,i=32,s=1,n=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:n,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);const a=[],o=[],c=[],h=[];let u=t;const d=(e-t)/s,f=new v,p=new C;for(let m=0;m<=s;m++){for(let g=0;g<=i;g++){const y=n+g/i*r;f.x=u*Math.cos(y),f.y=u*Math.sin(y),o.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let m=0;m<s;m++){const g=m*(i+1);for(let y=0;y<i;y++){const M=y+g,x=M,_=M+i+1,S=M+i+2,b=M+1;a.push(x,_,b),a.push(_,S,b)}}this.setIndex(a),this.setAttribute("position",new U(o,3)),this.setAttribute("normal",new U(c,3)),this.setAttribute("uv",new U(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class mn extends Y{constructor(t=new ri([new C(0,.5),new C(-.5,-.5),new C(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],n=[],r=[];let a=0,o=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,o,h),a+=o,o=0;this.setIndex(i),this.setAttribute("position",new U(s,3)),this.setAttribute("normal",new U(n,3)),this.setAttribute("uv",new U(r,2));function c(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const p=d.holes;Jt.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,y=p.length;g<y;g++){const M=p[g];Jt.isClockWise(M)===!0&&(p[g]=M.reverse())}const m=Jt.triangulateShape(f,p);for(let g=0,y=p.length;g<y;g++){const M=p[g];f=f.concat(M)}for(let g=0,y=f.length;g<y;g++){const M=f[g];s.push(M.x,M.y,0),n.push(0,0,1),r.push(M.x,M.y)}for(let g=0,y=m.length;g<y;g++){const M=m[g],x=M[0]+u,_=M[1]+u,S=M[2]+u;i.push(x,_,S),o+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Fu(e,t)}static fromJSON(t,e){const i=[];for(let s=0,n=t.shapes.length;s<n;s++){const r=e[t.shapes[s]];i.push(r)}return new mn(i,t.curveSegments)}}function Fu(l,t){if(t.shapes=[],Array.isArray(l))for(let e=0,i=l.length;e<i;e++){const s=l[e];t.shapes.push(s.uuid)}else t.shapes.push(l.uuid);return t}class gn extends Y{constructor(t=1,e=32,i=16,s=0,n=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:n,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const o=Math.min(r+a,Math.PI);let c=0;const h=[],u=new v,d=new v,f=[],p=[],m=[],g=[];for(let y=0;y<=i;y++){const M=[],x=y/i;let _=0;y===0&&r===0?_=.5/e:y===i&&o===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){const b=S/e;u.x=-t*Math.cos(s+b*n)*Math.sin(r+x*a),u.y=t*Math.cos(r+x*a),u.z=t*Math.sin(s+b*n)*Math.sin(r+x*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),g.push(b+_,1-x),M.push(c++)}h.push(M)}for(let y=0;y<i;y++)for(let M=0;M<e;M++){const x=h[y][M+1],_=h[y][M],S=h[y+1][M],b=h[y+1][M+1];(y!==0||r>0)&&f.push(x,_,b),(y!==i-1||o<Math.PI)&&f.push(_,S,b)}this.setIndex(f),this.setAttribute("position",new U(p,3)),this.setAttribute("normal",new U(m,3)),this.setAttribute("uv",new U(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class vn extends me{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vn(t.radius,t.detail)}}class xn extends Y{constructor(t=1,e=.4,i=12,s=48,n=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:n},i=Math.floor(i),s=Math.floor(s);const r=[],a=[],o=[],c=[],h=new v,u=new v,d=new v;for(let f=0;f<=i;f++)for(let p=0;p<=s;p++){const m=p/s*n,g=f/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(m),u.y=(t+e*Math.cos(g))*Math.sin(m),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(m),h.y=t*Math.sin(m),d.subVectors(u,h).normalize(),o.push(d.x,d.y,d.z),c.push(p/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let p=1;p<=s;p++){const m=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,y=(s+1)*(f-1)+p,M=(s+1)*f+p;r.push(m,g,M),r.push(g,y,M)}this.setIndex(r),this.setAttribute("position",new U(a,3)),this.setAttribute("normal",new U(o,3)),this.setAttribute("uv",new U(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class _n extends Y{constructor(t=1,e=.4,i=64,s=8,n=2,r=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:i,radialSegments:s,p:n,q:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],c=[],h=[],u=new v,d=new v,f=new v,p=new v,m=new v,g=new v,y=new v;for(let x=0;x<=i;++x){const _=x/i*n*Math.PI*2;M(_,n,r,t,f),M(_+.01,n,r,t,p),g.subVectors(p,f),y.addVectors(p,f),m.crossVectors(g,y),y.crossVectors(m,g),m.normalize(),y.normalize();for(let S=0;S<=s;++S){const b=S/s*Math.PI*2,A=-e*Math.cos(b),w=e*Math.sin(b);u.x=f.x+(A*y.x+w*m.x),u.y=f.y+(A*y.y+w*m.y),u.z=f.z+(A*y.z+w*m.z),o.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(x/i),h.push(S/s)}}for(let x=1;x<=i;x++)for(let _=1;_<=s;_++){const S=(s+1)*(x-1)+(_-1),b=(s+1)*x+(_-1),A=(s+1)*x+_,w=(s+1)*(x-1)+_;a.push(S,b,w),a.push(b,A,w)}this.setIndex(a),this.setAttribute("position",new U(o,3)),this.setAttribute("normal",new U(c,3)),this.setAttribute("uv",new U(h,2));function M(x,_,S,b,A){const w=Math.cos(x),T=Math.sin(x),E=S/_*x,R=Math.cos(E);A.x=b*(2+R)*.5*w,A.y=b*(2+R)*T*.5,A.z=b*Math.sin(E)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class yn extends Y{constructor(t=new fa(new v(-1,-1,0),new v(-1,1,0),new v(1,1,0)),e=64,i=1,s=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:n};const r=t.computeFrenetFrames(e,n);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new v,o=new v,c=new C;let h=new v;const u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute("position",new U(u,3)),this.setAttribute("normal",new U(d,3)),this.setAttribute("uv",new U(f,2));function m(){for(let x=0;x<e;x++)g(x);g(n===!1?e:0),M(),y()}function g(x){h=t.getPointAt(x/e,h);const _=r.normals[x],S=r.binormals[x];for(let b=0;b<=s;b++){const A=b/s*Math.PI*2,w=Math.sin(A),T=-Math.cos(A);o.x=T*_.x+w*S.x,o.y=T*_.y+w*S.y,o.z=T*_.z+w*S.z,o.normalize(),d.push(o.x,o.y,o.z),a.x=h.x+i*o.x,a.y=h.y+i*o.y,a.z=h.z+i*o.z,u.push(a.x,a.y,a.z)}}function y(){for(let x=1;x<=e;x++)for(let _=1;_<=s;_++){const S=(s+1)*(x-1)+(_-1),b=(s+1)*x+(_-1),A=(s+1)*x+_,w=(s+1)*(x-1)+_;p.push(S,b,w),p.push(b,A,w)}}function M(){for(let x=0;x<=e;x++)for(let _=0;_<=s;_++)c.x=x/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new yn(new ss[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Bu extends Y{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,s=new v,n=new v;if(t.index!==null){const r=t.attributes.position,a=t.index;let o=t.groups;o.length===0&&(o=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=o.length;c<h;++c){const u=o[c],d=u.start,f=u.count;for(let p=d,m=d+f;p<m;p+=3)for(let g=0;g<3;g++){const y=a.getX(p+g),M=a.getX(p+(g+1)%3);s.fromBufferAttribute(r,y),n.fromBufferAttribute(r,M),Dr(s,n,i)===!0&&(e.push(s.x,s.y,s.z),e.push(n.x,n.y,n.z))}}}else{const r=t.attributes.position;for(let a=0,o=r.count/3;a<o;a++)for(let c=0;c<3;c++){const h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(r,h),n.fromBufferAttribute(r,u),Dr(s,n,i)===!0&&(e.push(s.x,s.y,s.z),e.push(n.x,n.y,n.z))}}this.setAttribute("position",new U(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Dr(l,t,e){const i=`${l.x},${l.y},${l.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${l.x},${l.y},${l.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}const Fp=Object.freeze(Object.defineProperty({__proto__:null,BoxGeometry:en,CapsuleGeometry:on,CircleGeometry:ln,ConeGeometry:cn,CylinderGeometry:as,DodecahedronGeometry:hn,EdgesGeometry:xu,ExtrudeGeometry:un,IcosahedronGeometry:dn,LatheGeometry:rs,OctahedronGeometry:fn,PlaneGeometry:nn,PolyhedronGeometry:me,RingGeometry:pn,ShapeGeometry:mn,SphereGeometry:gn,TetrahedronGeometry:vn,TorusGeometry:xn,TorusKnotGeometry:_n,TubeGeometry:yn,WireframeGeometry:Bu},Symbol.toStringTag,{value:"Module"}));class Bp extends _t{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new F(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class kp extends al{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class ku extends _t{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new F(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new F(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Be,this.normalScale=new C(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ut,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vp extends ku{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new C(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new F(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new F(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new F(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Hp extends _t{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new F(16777215),this.specular=new F(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new F(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Be,this.normalScale=new C(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ut,this.combine=Qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gp extends _t{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new F(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new F(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Be,this.normalScale=new C(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Wp extends _t{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Be,this.normalScale=new C(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class qp extends _t{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new F(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new F(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Be,this.normalScale=new C(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ut,this.combine=Qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jp extends _t{static get type(){return"MeshMatcapMaterial"}constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.color=new F(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Be,this.normalScale=new C(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xp extends oa{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class ls{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,s=e[i],n=e[i-1];i:{t:{let r;e:{s:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<n)break s;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(n=s,s=e[++i],t<s)break t}r=e.length;break e}if(!(t>=n)){const a=e[1];t<a&&(i=2,n=a);for(let o=i-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(s=n,n=e[--i-1],t>=n)break t}r=i,i=0;break e}break i}for(;i<r;){const a=i+r>>>1;t<e[a]?r=a:i=a+1}if(s=e[i],n=e[i-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,n,s)}return this.interpolate_(i,n,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,n=t*s;for(let r=0;r!==s;++r)e[r]=i[n+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Yp extends ls{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:On,endingEnd:On}}intervalChanged_(t,e,i){const s=this.parameterPositions;let n=t-2,r=t+1,a=s[n],o=s[r];if(a===void 0)switch(this.getSettings_().endingStart){case Fn:n=t,a=2*e-i;break;case Bn:n=s.length-2,a=e+s[n]-s[n+1];break;default:n=t,a=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Fn:r=t,o=2*i-e;break;case Bn:r=1,o=i+s[1]-s[0];break;default:r=t-1,o=e}const c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(o-i),this._offsetPrev=n*h,this._offsetNext=r*h}interpolate_(t,e,i,s){const n=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,c=o-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(s-e),m=p*p,g=m*p,y=-d*g+2*d*m-d*p,M=(1+d)*g+(-1.5-2*d)*m+(-.5+d)*p+1,x=(-1-f)*g+(1.5+f)*m+.5*p,_=f*g-f*m;for(let S=0;S!==a;++S)n[S]=y*r[h+S]+M*r[c+S]+x*r[o+S]+_*r[u+S];return n}}class Jp extends ls{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){const n=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,c=o-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)n[d]=r[c+d]*u+r[o+d]*h;return n}}class Zp extends ls{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class $p extends ls{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){const n=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(i-e)/(s-e);let c=t*a;for(let h=c+a;c!==h;c+=4)ke.slerpFlat(n,0,r,c-a,r,c,o);return n}}class ge extends X{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new F(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Qp extends ge{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(X.DEFAULT_UP),this.updateMatrix(),this.groundColor=new F(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Gs=new k,Nr=new v,Rr=new v;class Mn{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new C(512,512),this.map=null,this.mapPass=null,this.matrix=new k,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ea,this._frameExtents=new C(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Nr.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nr),Rr.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rr),e.updateMatrixWorld(),Gs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Vu extends Mn{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=oi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,n=t.distance||e.far;(i!==e.fov||s!==e.aspect||n!==e.far)&&(e.fov=i,e.aspect=s,e.far=n,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Kp extends ge{constructor(t,e,i=0,s=Math.PI/3,n=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(X.DEFAULT_UP),this.updateMatrix(),this.target=new X,this.distance=i,this.angle=s,this.penumbra=n,this.decay=r,this.map=null,this.shadow=new Vu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const zr=new k,Ke=new v,Ws=new v;class Hu extends Mn{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new C(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new v(1,0,0),new v(-1,0,0),new v(0,0,1),new v(0,0,-1),new v(0,1,0),new v(0,-1,0)],this._cubeUps=[new v(0,1,0),new v(0,1,0),new v(0,1,0),new v(0,1,0),new v(0,0,1),new v(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,n=t.distance||i.far;n!==i.far&&(i.far=n,i.updateProjectionMatrix()),Ke.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ke),Ws.copy(i.position),Ws.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ws),i.updateMatrixWorld(),s.makeTranslation(-Ke.x,-Ke.y,-Ke.z),zr.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zr)}}class tm extends ge{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Hu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Gu extends Mn{constructor(){super(new Hh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class em extends ge{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(X.DEFAULT_UP),this.updateMatrix(),this.target=new X,this.shadow=new Gu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class im extends ge{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class sm extends ge{constructor(t,e,i=10,s=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class Wu{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new v)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const i=t.x,s=t.y,n=t.z,r=this.coefficients;return e.copy(r[0]).multiplyScalar(.282095),e.addScaledVector(r[1],.488603*s),e.addScaledVector(r[2],.488603*n),e.addScaledVector(r[3],.488603*i),e.addScaledVector(r[4],1.092548*(i*s)),e.addScaledVector(r[5],1.092548*(s*n)),e.addScaledVector(r[6],.315392*(3*n*n-1)),e.addScaledVector(r[7],1.092548*(i*n)),e.addScaledVector(r[8],.546274*(i*i-s*s)),e}getIrradianceAt(t,e){const i=t.x,s=t.y,n=t.z,r=this.coefficients;return e.copy(r[0]).multiplyScalar(.886227),e.addScaledVector(r[1],2*.511664*s),e.addScaledVector(r[2],2*.511664*n),e.addScaledVector(r[3],2*.511664*i),e.addScaledVector(r[4],2*.429043*i*s),e.addScaledVector(r[5],2*.429043*s*n),e.addScaledVector(r[6],.743125*n*n-.247708),e.addScaledVector(r[7],2*.429043*i*n),e.addScaledVector(r[8],.429043*(i*i-s*s)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(t.coefficients[i],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let i=0;i<9;i++)this.coefficients[i].lerp(t.coefficients[i],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const i=this.coefficients;for(let s=0;s<9;s++)i[s].fromArray(t,e+s*3);return this}toArray(t=[],e=0){const i=this.coefficients;for(let s=0;s<9;s++)i[s].toArray(t,e+s*3);return t}static getBasisAt(t,e){const i=t.x,s=t.y,n=t.z;e[0]=.282095,e[1]=.488603*s,e[2]=.488603*n,e[3]=.488603*i,e[4]=1.092548*i*s,e[5]=1.092548*s*n,e[6]=.315392*(3*n*n-1),e[7]=1.092548*i*n,e[8]=.546274*(i*i-s*s)}}class nm extends ge{constructor(t=new Wu,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class rm extends Y{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}const Ur=new k,Or=new k,he=new k;class am{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Nt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Nt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,he.copy(t.projectionMatrix);const s=e.eyeSep/2,n=s*e.near/e.focus,r=e.near*Math.tan(de*e.fov*.5)/e.zoom;let a,o;Or.elements[12]=-s,Ur.elements[12]=s,a=-r*e.aspect+n,o=r*e.aspect+n,he.elements[0]=2*e.near/(o-a),he.elements[8]=(o+a)/(o-a),this.cameraL.projectionMatrix.copy(he),a=-r*e.aspect-n,o=r*e.aspect-n,he.elements[0]=2*e.near/(o-a),he.elements[8]=(o+a)/(o-a),this.cameraR.projectionMatrix.copy(he)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Or),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Ur)}}class om{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fr(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Fr();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Fr(){return performance.now()}class xa{constructor(t){this.value=t}clone(){return new xa(this.value.clone===void 0?this.value:this.value.clone())}}let qu=0;class lm extends pe{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:qu++}),this.name="",this.usage=Qi,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let i=0,s=e.length;i<s;i++){const n=Array.isArray(e[i])?e[i]:[e[i]];for(let r=0;r<n.length;r++)this.uniforms.push(n[r].clone())}return this}clone(){return new this.constructor().copy(this)}}class cm extends na{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class hm{constructor(t,e,i,s,n){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=i,this.elementSize=s,this.count=n,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const Br=new k;class um{constructor(t,e,i=0,s=1/0){this.ray=new ui(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Br.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Br),this}intersectObject(t,e=!0,i=[]){return $s(t,this,i,e),i.sort(kr),i}intersectObjects(t,e=!0,i=[]){for(let s=0,n=t.length;s<n;s++)$s(t[s],this,i,e);return i.sort(kr),i}}function kr(l,t){return l.distance-t.distance}function $s(l,t,e,i){let s=!0;if(l.layers.test(t.layers)&&l.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const n=l.children;for(let r=0,a=n.length;r<a;r++)$s(n[r],t,e,!0)}}class dm{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(et(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class fm{constructor(t=1,e=0,i=0){return this.radius=t,this.theta=e,this.y=i,this}set(t,e,i){return this.radius=t,this.theta=e,this.y=i,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+i*i),this.theta=Math.atan2(t,i),this.y=e,this}clone(){return new this.constructor().copy(this)}}class _a{constructor(t,e,i,s){_a.prototype.isMatrix2=!0,this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const n=this.elements;return n[0]=t,n[2]=e,n[1]=i,n[3]=s,this}}const Vr=new C;class pm{constructor(t=new C(1/0,1/0),e=new C(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Vr.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vr).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Hr=new v,Zi=new v;class mm{constructor(t=new v,e=new v){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Hr.subVectors(t,this.start),Zi.subVectors(this.end,this.start);const i=Zi.dot(Zi);let n=Zi.dot(Hr)/i;return e&&(n=et(n,0,1)),n}closestPointToPoint(t,e,i){const s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class gm{constructor(){this.type="ShapePath",this.color=new F,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new ns,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,s){return this.currentPath.quadraticCurveTo(t,e,i,s),this}bezierCurveTo(t,e,i,s,n,r){return this.currentPath.bezierCurveTo(t,e,i,s,n,r),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(y){const M=[];for(let x=0,_=y.length;x<_;x++){const S=y[x],b=new ri;b.curves=S.curves,M.push(b)}return M}function i(y,M){const x=M.length;let _=!1;for(let S=x-1,b=0;b<x;S=b++){let A=M[S],w=M[b],T=w.x-A.x,E=w.y-A.y;if(Math.abs(E)>Number.EPSILON){if(E<0&&(A=M[b],T=-T,w=M[S],E=-E),y.y<A.y||y.y>w.y)continue;if(y.y===A.y){if(y.x===A.x)return!0}else{const R=E*(y.x-A.x)-T*(y.y-A.y);if(R===0)return!0;if(R<0)continue;_=!_}}else{if(y.y!==A.y)continue;if(w.x<=y.x&&y.x<=A.x||A.x<=y.x&&y.x<=w.x)return!0}}return _}const s=Jt.isClockWise,n=this.subPaths;if(n.length===0)return[];let r,a,o;const c=[];if(n.length===1)return a=n[0],o=new ri,o.curves=a.curves,c.push(o),c;let h=!s(n[0].getPoints());h=t?!h:h;const u=[],d=[];let f=[],p=0,m;d[p]=void 0,f[p]=[];for(let y=0,M=n.length;y<M;y++)a=n[y],m=a.getPoints(),r=s(m),r=t?!r:r,r?(!h&&d[p]&&p++,d[p]={s:new ri,p:m},d[p].s.curves=a.curves,h&&p++,f[p]=[]):f[p].push({h:a,p:m[0]});if(!d[0])return e(n);if(d.length>1){let y=!1,M=0;for(let x=0,_=d.length;x<_;x++)u[x]=[];for(let x=0,_=d.length;x<_;x++){const S=f[x];for(let b=0;b<S.length;b++){const A=S[b];let w=!0;for(let T=0;T<d.length;T++)i(A.p,d[T].p)&&(x!==T&&M++,w?(w=!1,u[T].push(A)):y=!0);w&&u[x].push(A)}}M>0&&y===!1&&(f=u)}let g;for(let y=0,M=d.length;y<M;y++){o=d[y].s,c.push(o),g=f[y];for(let x=0,_=g.length;x<_;x++)o.holes.push(g[x].h)}return c}}class vm extends pe{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}export{F as $,cf as A,ba as B,Yp as C,Zp as D,pe as E,pm as F,Ct as G,en as H,of as I,ut as J,Y as K,Jp as L,Ca as M,lf as N,X as O,ta as P,ke as Q,ju as R,Op as S,on as T,ou as U,v as V,Bn as W,Fd as X,ln as Y,On as Z,ue as _,af as a,zf as a$,xt as a0,zp as a1,Up as a2,ca as a3,cn as a4,wd as a5,Sd as a6,vm as a7,pp as a8,Wr as a9,hn as aA,sd as aB,vd as aC,_d as aD,qf as aE,Bf as aF,Hf as aG,xu as aH,rn as aI,Nf as aJ,Id as aK,Cf as aL,Wd as aM,qd as aN,Ut as aO,un as aP,up as aQ,U as aR,Fe as aS,sa as aT,ia as aU,Rp as aV,qs as aW,ea as aX,hm as aY,Xf as aZ,Yf as a_,Gd as aa,mp as ab,jd as ac,ha as ad,mu as ae,Zu as af,$u as ag,Qu as ah,Ju as ai,Ot as aj,vu as ak,ld as al,kd as am,as as an,fm as ao,np as ap,sp as aq,ii as ar,rp as as,yf as at,Sf as au,us as av,Un as aw,gp as ax,wa as ay,em as az,rf as b,vp as b$,Ld as b0,Of as b1,Pd as b2,Pf as b3,Ef as b4,bp as b5,Pa as b6,Qp as b7,dn as b8,ko as b9,la as bA,mm as bB,oa as bC,ua as bD,gu as bE,Xp as bF,Lp as bG,Pp as bH,$i as bI,Kd as bJ,Qd as bK,Aa as bL,$d as bM,Jr as bN,Ud as bO,Zr as bP,Fa as bQ,Oa as bR,Xu as bS,_t as bT,Jf as bU,_a as bV,B as bW,k as bX,dd as bY,di as bZ,$o as b_,_f as ba,Mf as bb,xr as bc,rm as bd,cm as be,Ep as bf,cp as bg,hp as bh,ap as bi,Ia as bj,na as bk,ts as bl,ls as bm,bf as bn,ve as bo,Cp as bp,rs as bq,Qr as br,Df as bs,Ed as bt,Rf as bu,Dn as bv,Tf as bw,Af as bx,ge as by,nm as bz,$p as c,to as c$,xp as c0,qp as c1,jp as c2,Wp as c3,Hp as c4,Vp as c5,ku as c6,Gp as c7,ud as c8,zn as c9,Ln as cA,gd as cB,Hh as cC,td as cD,ed as cE,ns as cF,Nt as cG,Pe as cH,nn as cI,tm as cJ,Dp as cK,ru as cL,me as cM,da as cN,fa as cO,_o as cP,vo as cQ,ff as cR,ai as cS,Va as cT,ho as cU,oo as cV,lo as cW,co as cX,uo as cY,fo as cZ,Ka as c_,Nd as ca,od as cb,Qs as cc,zt as cd,Zd as ce,Yd as cf,Jd as cg,Xd as ch,Hd as ci,Lf as cj,Cd as ck,wf as cl,nd as cm,Yr as cn,zd as co,En as cp,Uf as cq,Dd as cr,If as cs,gf as ct,fn as cu,pd as cv,Ad as cw,bd as cx,xd as cy,yd as cz,sf as d,Yh as d$,eo as d0,io as d1,so as d2,no as d3,ro as d4,ao as d5,po as d6,Qa as d7,Ja as d8,Ya as d9,xf as dA,hd as dB,pn as dC,yo as dD,xo as dE,Dt as dF,js as dG,wp as dH,H as dI,lr as dJ,al as dK,Bp as dL,ri as dM,mn as dN,gm as dO,Jt as dP,Ta as dQ,aa as dR,Tp as dS,$r as dT,bt as dU,gn as dV,dm as dW,Wu as dX,pa as dY,Kp as dZ,Ap as d_,Ga as da,Wa as db,qa as dc,pf as dd,Ua as de,tf as df,mo as dg,go as dh,Za as di,$a as dj,Xa as dk,ja as dl,Ha as dm,mf as dn,Ba as dp,ka as dq,kp as dr,ui as ds,um as dt,sm as du,jr as dv,Xr as dw,Od as dx,ip as dy,Rn as dz,ef as e,Kf as e$,Pn as e0,Md as e1,md as e2,Wf as e3,Qi as e4,Vf as e5,am as e6,jf as e7,kf as e8,Gf as e9,Ks as eA,La as eB,Da as eC,Ea as eD,id as eE,C as eF,at as eG,Np as eH,ie as eI,Ki as eJ,Bu as eK,fd as eL,vf as eM,$f as eN,Xs as eO,Zf as eP,Fp as eQ,sn as eR,dp as eS,Qf as eT,Fo as eU,yp as eV,_p as eW,jh as eX,oi as eY,tp as eZ,ep as e_,cd as ea,ad as eb,Yu as ec,Be as ed,vn as ee,ot as ef,Mp as eg,xn as eh,_n as ei,St as ej,df as ek,uf as el,hf as em,yn as en,Gr as eo,Ko as ep,tl as eq,op as er,lp as es,xa as et,lm as eu,I as ev,fp as ew,qr as ex,Na as ey,Ra as ez,Fn as f,Rt as g,nf as h,om as i,Bd as j,In as k,Rd as l,rd as m,Vd as n,za as o,Ff as p,Td as q,kn as r,im as s,au as t,Sp as u,Nn as v,Mo as w,Ku as x,Ip as y,Zh as z};
