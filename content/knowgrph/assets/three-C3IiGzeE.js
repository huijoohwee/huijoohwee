import{r as rM,a as pt,j as Pi}from"./react-BoA_4QeP.js";import{c as sM}from"./ui-DqysQgw8.js";import{g as oM}from"./elk-CVD44F0V.js";const il="170",Rs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Q0=0,Kd=1,$0=2,aM=3,ey=0,rh=1,La=2,Ci=3,xr=0,Wn=1,Ii=2,yr=0,Cs=1,Jd=2,Qd=3,$d=4,ty=5,Gr=100,ny=101,iy=102,ry=103,sy=104,oy=200,ay=201,ly=202,cy=203,_u=204,yu=205,uy=206,hy=207,fy=208,dy=209,py=210,my=211,gy=212,_y=213,yy=214,vu=0,xu=1,Mu=2,Os=3,Su=4,wu=5,Eu=6,Tu=7,rl=0,vy=1,xy=2,Qi=0,My=1,Sy=2,wy=3,mp=4,Ey=5,Ty=6,by=7,ep="attached",Ay="detached",sh=300,Mr=301,Xr=302,Ha=303,Va=304,Wo=306,No=1e3,li=1001,Oo=1002,vn=1003,oh=1004,lM=1004,Es=1005,cM=1005,on=1006,Do=1007,uM=1007,Li=1008,hM=1008,Di=1009,gp=1010,_p=1011,Fo=1012,ah=1013,Sr=1014,ei=1015,Xo=1016,lh=1017,ch=1018,Fs=1020,yp=35902,vp=1021,xp=1022,bn=1023,Mp=1024,Sp=1025,Ps=1026,Bs=1027,uh=1028,sl=1029,wp=1030,hh=1031,fM=1032,fh=1033,Da=33776,Ua=33777,Na=33778,Oa=33779,bu=35840,Au=35841,Ru=35842,Cu=35843,Pu=36196,Iu=37492,Lu=37496,Du=37808,Uu=37809,Nu=37810,Ou=37811,Fu=37812,Bu=37813,zu=37814,ku=37815,Hu=37816,Vu=37817,Gu=37818,Wu=37819,Xu=37820,Yu=37821,Fa=36492,qu=36494,Zu=36495,Ep=36283,ju=36284,Ku=36285,Ju=36286,Ry=2200,Cy=2201,Py=2202,Bo=2300,Ga=2301,pu=2302,Ts=2400,bs=2401,Wa=2402,dh=2500,Tp=2501,dM=0,pM=1,mM=2,Iy=3200,Ly=3201,gM=3202,_M=3203,qr=0,Dy=1,ji="",Hn="srgb",ks="srgb-linear",ol="linear",Ot="srgb",yM=0,xs=7680,vM=7681,xM=7682,MM=7683,SM=34055,wM=34056,EM=5386,TM=512,bM=513,AM=514,RM=515,CM=516,PM=517,IM=518,tp=519,Uy=512,Ny=513,Oy=514,bp=515,Fy=516,By=517,zy=518,ky=519,Xa=35044,LM=35048,DM=35040,UM=35045,NM=35049,OM=35041,FM=35046,BM=35050,zM=35042,kM="100",np="300 es",Ji=2e3,Ya=2001;class tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bg=1234567;const Is=Math.PI/180,zo=180/Math.PI;function hi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function Kt(r,e,t){return Math.max(e,Math.min(t,r))}function Ap(r,e){return(r%e+e)%e}function HM(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function VM(r,e,t){return r!==e?(t-r)/(e-r):0}function Ba(r,e,t){return(1-t)*r+t*e}function GM(r,e,t,n){return Ba(r,e,1-Math.exp(-t*n))}function WM(r,e=1){return e-Math.abs(Ap(r,e*2)-e)}function XM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function YM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function qM(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ZM(r,e){return r+Math.random()*(e-r)}function jM(r){return r*(.5-Math.random())}function KM(r){r!==void 0&&(Bg=r);let e=Bg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function JM(r){return r*Is}function QM(r){return r*zo}function $M(r){return(r&r-1)===0&&r!==0}function eS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function tS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function nS(r,e,t,n,i){const s=Math.cos,o=Math.sin,c=s(t/2),u=o(t/2),h=s((e+n)/2),f=o((e+n)/2),p=s((e-n)/2),m=o((e-n)/2),g=s((n-e)/2),v=o((n-e)/2);switch(i){case"XYX":r.set(c*f,u*p,u*m,c*h);break;case"YZY":r.set(u*m,c*f,u*p,c*h);break;case"ZXZ":r.set(u*p,u*m,c*f,c*h);break;case"XZX":r.set(c*f,u*v,u*g,c*h);break;case"YXY":r.set(u*g,c*f,u*v,c*h);break;case"ZYZ":r.set(u*v,u*g,c*f,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Gn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function dt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ko={DEG2RAD:Is,RAD2DEG:zo,generateUUID:hi,clamp:Kt,euclideanModulo:Ap,mapLinear:HM,inverseLerp:VM,lerp:Ba,damp:GM,pingpong:WM,smoothstep:XM,smootherstep:YM,randInt:qM,randFloat:ZM,randFloatSpread:jM,seededRandom:KM,degToRad:JM,radToDeg:QM,isPowerOfTwo:$M,ceilPowerOfTwo:eS,floorPowerOfTwo:tS,setQuaternionFromProperEuler:nS,normalize:dt,denormalize:Gn};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,t,n,i,s,o,c,u,h){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,c,u,h)}set(e,t,n,i,s,o,c,u,h){const f=this.elements;return f[0]=e,f[1]=i,f[2]=c,f[3]=t,f[4]=s,f[5]=u,f[6]=n,f[7]=o,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],c=n[3],u=n[6],h=n[1],f=n[4],p=n[7],m=n[2],g=n[5],v=n[8],S=i[0],x=i[3],y=i[6],E=i[1],T=i[4],w=i[7],U=i[2],P=i[5],L=i[8];return s[0]=o*S+c*E+u*U,s[3]=o*x+c*T+u*P,s[6]=o*y+c*w+u*L,s[1]=h*S+f*E+p*U,s[4]=h*x+f*T+p*P,s[7]=h*y+f*w+p*L,s[2]=m*S+g*E+v*U,s[5]=m*x+g*T+v*P,s[8]=m*y+g*w+v*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],u=e[6],h=e[7],f=e[8];return t*o*f-t*c*h-n*s*f+n*c*u+i*s*h-i*o*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=f*o-c*h,m=c*u-f*s,g=h*s-o*u,v=t*p+n*m+i*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=p*S,e[1]=(i*h-f*n)*S,e[2]=(c*n-i*o)*S,e[3]=m*S,e[4]=(f*t-i*u)*S,e[5]=(i*s-c*t)*S,e[6]=g*S,e[7]=(n*u-h*t)*S,e[8]=(o*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,c){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*o+h*c)+o+e,-i*h,i*u,-i*(-h*o+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Gf.makeScale(e,t)),this}rotate(e){return this.premultiply(Gf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gf=new ft;function Hy(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const iS={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Ro(r,e){return new iS[r](e)}function qa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Vy(){const r=qa("canvas");return r.style.display="block",r}const zg={};function Ra(r){r in zg||(zg[r]=!0,console.warn(r))}function rS(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function sS(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function oS(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Pt={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ot&&(r.r=vr(r.r),r.g=vr(r.g),r.b=vr(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ot&&(r.r=Uo(r.r),r.g=Uo(r.g),r.b=Uo(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ji?ol:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function vr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Uo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const kg=[.64,.33,.3,.6,.15,.06],Hg=[.2126,.7152,.0722],Vg=[.3127,.329],Gg=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wg=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Pt.define({[ks]:{primaries:kg,whitePoint:Vg,transfer:ol,toXYZ:Gg,fromXYZ:Wg,luminanceCoefficients:Hg,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:kg,whitePoint:Vg,transfer:Ot,toXYZ:Gg,fromXYZ:Wg,luminanceCoefficients:Hg,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}});let so;class Gy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{so===void 0&&(so=qa("canvas")),so.width=e.width,so.height=e.height;const n=so.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=so}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=vr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vr(t[n]/255)*255):t[n]=vr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aS=0;class Wr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=hi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,c=i.length;o<c;o++)i[o].isDataTexture?s.push(Wf(i[o].image)):s.push(Wf(i[o]))}else s=Wf(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Wf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lS=0;class Jt extends tr{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=li,i=li,s=on,o=Li,c=bn,u=Di,h=Jt.DEFAULT_ANISOTROPY,f=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=hi(),this.name="",this.source=new Wr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case No:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case No:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=sh;Jt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,n=0,i=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,h=u[0],f=u[4],p=u[8],m=u[1],g=u[5],v=u[9],S=u[2],x=u[6],y=u[10];if(Math.abs(f-m)<.01&&Math.abs(p-S)<.01&&Math.abs(v-x)<.01){if(Math.abs(f+m)<.1&&Math.abs(p+S)<.1&&Math.abs(v+x)<.1&&Math.abs(h+g+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(h+1)/2,w=(g+1)/2,U=(y+1)/2,P=(f+m)/4,L=(p+S)/4,O=(v+x)/4;return T>w&&T>U?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=P/n,s=L/n):w>U?w<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),n=P/i,s=O/i):U<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(U),n=L/s,i=O/s),this.set(n,i,s,t),this}let E=Math.sqrt((x-v)*(x-v)+(p-S)*(p-S)+(m-f)*(m-f));return Math.abs(E)<.001&&(E=1),this.x=(x-v)/E,this.y=(p-S)/E,this.z=(m-f)/E,this.w=Math.acos((h+g+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wy extends tr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let c=0;c<o;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends Wy{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ph extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cS extends Ui{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new ph(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Rp extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uS extends Ui{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Rp(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class An{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,c){let u=n[i+0],h=n[i+1],f=n[i+2],p=n[i+3];const m=s[o+0],g=s[o+1],v=s[o+2],S=s[o+3];if(c===0){e[t+0]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p;return}if(c===1){e[t+0]=m,e[t+1]=g,e[t+2]=v,e[t+3]=S;return}if(p!==S||u!==m||h!==g||f!==v){let x=1-c;const y=u*m+h*g+f*v+p*S,E=y>=0?1:-1,T=1-y*y;if(T>Number.EPSILON){const U=Math.sqrt(T),P=Math.atan2(U,y*E);x=Math.sin(x*P)/U,c=Math.sin(c*P)/U}const w=c*E;if(u=u*x+m*w,h=h*x+g*w,f=f*x+v*w,p=p*x+S*w,x===1-c){const U=1/Math.sqrt(u*u+h*h+f*f+p*p);u*=U,h*=U,f*=U,p*=U}}e[t]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,s,o){const c=n[i],u=n[i+1],h=n[i+2],f=n[i+3],p=s[o],m=s[o+1],g=s[o+2],v=s[o+3];return e[t]=c*v+f*p+u*g-h*m,e[t+1]=u*v+f*m+h*p-c*g,e[t+2]=h*v+f*g+c*m-u*p,e[t+3]=f*v-c*p-u*m-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,c=Math.cos,u=Math.sin,h=c(n/2),f=c(i/2),p=c(s/2),m=u(n/2),g=u(i/2),v=u(s/2);switch(o){case"XYZ":this._x=m*f*p+h*g*v,this._y=h*g*p-m*f*v,this._z=h*f*v+m*g*p,this._w=h*f*p-m*g*v;break;case"YXZ":this._x=m*f*p+h*g*v,this._y=h*g*p-m*f*v,this._z=h*f*v-m*g*p,this._w=h*f*p+m*g*v;break;case"ZXY":this._x=m*f*p-h*g*v,this._y=h*g*p+m*f*v,this._z=h*f*v+m*g*p,this._w=h*f*p-m*g*v;break;case"ZYX":this._x=m*f*p-h*g*v,this._y=h*g*p+m*f*v,this._z=h*f*v-m*g*p,this._w=h*f*p+m*g*v;break;case"YZX":this._x=m*f*p+h*g*v,this._y=h*g*p+m*f*v,this._z=h*f*v-m*g*p,this._w=h*f*p-m*g*v;break;case"XZY":this._x=m*f*p-h*g*v,this._y=h*g*p-m*f*v,this._z=h*f*v+m*g*p,this._w=h*f*p+m*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],c=t[5],u=t[9],h=t[2],f=t[6],p=t[10],m=n+c+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(f-u)*g,this._y=(s-h)*g,this._z=(o-i)*g}else if(n>c&&n>p){const g=2*Math.sqrt(1+n-c-p);this._w=(f-u)/g,this._x=.25*g,this._y=(i+o)/g,this._z=(s+h)/g}else if(c>p){const g=2*Math.sqrt(1+c-n-p);this._w=(s-h)/g,this._x=(i+o)/g,this._y=.25*g,this._z=(u+f)/g}else{const g=2*Math.sqrt(1+p-n-c);this._w=(o-i)/g,this._x=(s+h)/g,this._y=(u+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,c=t._x,u=t._y,h=t._z,f=t._w;return this._x=n*f+o*c+i*h-s*u,this._y=i*f+o*u+s*c-n*h,this._z=s*f+o*h+n*u-i*c,this._w=o*f-n*c-i*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let c=o*e._w+n*e._x+i*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const u=1-c*c;if(u<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const h=Math.sqrt(u),f=Math.atan2(h,c),p=Math.sin((1-t)*f)/h,m=Math.sin(t*f)/h;return this._w=o*p+this._w*m,this._x=n*p+this._x*m,this._y=i*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,c=e.z,u=e.w,h=2*(o*i-c*n),f=2*(c*t-s*i),p=2*(s*n-o*t);return this.x=t+u*h+o*p-c*f,this.y=n+u*f+c*h-s*p,this.z=i+u*p+s*f-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,c=t.y,u=t.z;return this.x=i*u-s*c,this.y=s*o-n*u,this.z=n*c-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xf.copy(this).projectOnVector(e),this.sub(Xf)}reflect(e){return this.sub(Xf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xf=new D,Xg=new An;class xn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,c=s.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,bi):bi.fromBufferAttribute(s,o),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_c.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_c.copy(n.boundingBox)),_c.applyMatrix4(e.matrixWorld),this.union(_c)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),yc.subVectors(this.max,pa),oo.subVectors(e.a,pa),ao.subVectors(e.b,pa),lo.subVectors(e.c,pa),Nr.subVectors(ao,oo),Or.subVectors(lo,ao),as.subVectors(oo,lo);let t=[0,-Nr.z,Nr.y,0,-Or.z,Or.y,0,-as.z,as.y,Nr.z,0,-Nr.x,Or.z,0,-Or.x,as.z,0,-as.x,-Nr.y,Nr.x,0,-Or.y,Or.x,0,-as.y,as.x,0];return!Yf(t,oo,ao,lo,yc)||(t=[1,0,0,0,1,0,0,0,1],!Yf(t,oo,ao,lo,yc))?!1:(vc.crossVectors(Nr,Or),t=[vc.x,vc.y,vc.z],Yf(t,oo,ao,lo,yc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cr=[new D,new D,new D,new D,new D,new D,new D,new D],bi=new D,_c=new xn,oo=new D,ao=new D,lo=new D,Nr=new D,Or=new D,as=new D,pa=new D,yc=new D,vc=new D,ls=new D;function Yf(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ls.fromArray(r,s);const c=i.x*Math.abs(ls.x)+i.y*Math.abs(ls.y)+i.z*Math.abs(ls.z),u=e.dot(ls),h=t.dot(ls),f=n.dot(ls);if(Math.max(-Math.max(u,h,f),Math.min(u,h,f))>c)return!1}return!0}const hS=new xn,ma=new D,qf=new D;class Mn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hS.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const t=ma.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ma,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(qf)),this.expandByPoint(ma.copy(e.center).sub(qf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ur=new D,Zf=new D,xc=new D,Fr=new D,jf=new D,Mc=new D,Kf=new D;class Hs{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ur.copy(this.origin).addScaledVector(this.direction,t),ur.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Zf.copy(e).add(t).multiplyScalar(.5),xc.copy(t).sub(e).normalize(),Fr.copy(this.origin).sub(Zf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(xc),c=Fr.dot(this.direction),u=-Fr.dot(xc),h=Fr.lengthSq(),f=Math.abs(1-o*o);let p,m,g,v;if(f>0)if(p=o*u-c,m=o*c-u,v=s*f,p>=0)if(m>=-v)if(m<=v){const S=1/f;p*=S,m*=S,g=p*(p+o*m+2*c)+m*(o*p+m+2*u)+h}else m=s,p=Math.max(0,-(o*m+c)),g=-p*p+m*(m+2*u)+h;else m=-s,p=Math.max(0,-(o*m+c)),g=-p*p+m*(m+2*u)+h;else m<=-v?(p=Math.max(0,-(-o*s+c)),m=p>0?-s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h):m<=v?(p=0,m=Math.min(Math.max(-s,-u),s),g=m*(m+2*u)+h):(p=Math.max(0,-(o*s+c)),m=p>0?s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h);else m=o>0?-s:s,p=Math.max(0,-(o*m+c)),g=-p*p+m*(m+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Zf).addScaledVector(xc,m),g}intersectSphere(e,t){ur.subVectors(e.center,this.origin);const n=ur.dot(this.direction),i=ur.dot(ur)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),c=n-o,u=n+o;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,c,u;const h=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,i=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,i=(e.min.x-m.x)*h),f>=0?(s=(e.min.y-m.y)*f,o=(e.max.y-m.y)*f):(s=(e.max.y-m.y)*f,o=(e.min.y-m.y)*f),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),p>=0?(c=(e.min.z-m.z)*p,u=(e.max.z-m.z)*p):(c=(e.max.z-m.z)*p,u=(e.min.z-m.z)*p),n>u||c>i)||((c>n||n!==n)&&(n=c),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ur)!==null}intersectTriangle(e,t,n,i,s){jf.subVectors(t,e),Mc.subVectors(n,e),Kf.crossVectors(jf,Mc);let o=this.direction.dot(Kf),c;if(o>0){if(i)return null;c=1}else if(o<0)c=-1,o=-o;else return null;Fr.subVectors(this.origin,e);const u=c*this.direction.dot(Mc.crossVectors(Fr,Mc));if(u<0)return null;const h=c*this.direction.dot(jf.cross(Fr));if(h<0||u+h>o)return null;const f=-c*Fr.dot(Kf);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,n,i,s,o,c,u,h,f,p,m,g,v,S,x){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,c,u,h,f,p,m,g,v,S,x)}set(e,t,n,i,s,o,c,u,h,f,p,m,g,v,S,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=s,y[5]=o,y[9]=c,y[13]=u,y[2]=h,y[6]=f,y[10]=p,y[14]=m,y[3]=g,y[7]=v,y[11]=S,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/co.setFromMatrixColumn(e,0).length(),s=1/co.setFromMatrixColumn(e,1).length(),o=1/co.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),c=Math.sin(n),u=Math.cos(i),h=Math.sin(i),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=o*f,g=o*p,v=c*f,S=c*p;t[0]=u*f,t[4]=-u*p,t[8]=h,t[1]=g+v*h,t[5]=m-S*h,t[9]=-c*u,t[2]=S-m*h,t[6]=v+g*h,t[10]=o*u}else if(e.order==="YXZ"){const m=u*f,g=u*p,v=h*f,S=h*p;t[0]=m+S*c,t[4]=v*c-g,t[8]=o*h,t[1]=o*p,t[5]=o*f,t[9]=-c,t[2]=g*c-v,t[6]=S+m*c,t[10]=o*u}else if(e.order==="ZXY"){const m=u*f,g=u*p,v=h*f,S=h*p;t[0]=m-S*c,t[4]=-o*p,t[8]=v+g*c,t[1]=g+v*c,t[5]=o*f,t[9]=S-m*c,t[2]=-o*h,t[6]=c,t[10]=o*u}else if(e.order==="ZYX"){const m=o*f,g=o*p,v=c*f,S=c*p;t[0]=u*f,t[4]=v*h-g,t[8]=m*h+S,t[1]=u*p,t[5]=S*h+m,t[9]=g*h-v,t[2]=-h,t[6]=c*u,t[10]=o*u}else if(e.order==="YZX"){const m=o*u,g=o*h,v=c*u,S=c*h;t[0]=u*f,t[4]=S-m*p,t[8]=v*p+g,t[1]=p,t[5]=o*f,t[9]=-c*f,t[2]=-h*f,t[6]=g*p+v,t[10]=m-S*p}else if(e.order==="XZY"){const m=o*u,g=o*h,v=c*u,S=c*h;t[0]=u*f,t[4]=-p,t[8]=h*f,t[1]=m*p+S,t[5]=o*f,t[9]=g*p-v,t[2]=v*p-g,t[6]=c*f,t[10]=S*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fS,e,dS)}lookAt(e,t,n){const i=this.elements;return oi.subVectors(e,t),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Br.crossVectors(n,oi),Br.lengthSq()===0&&(Math.abs(n.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Br.crossVectors(n,oi)),Br.normalize(),Sc.crossVectors(oi,Br),i[0]=Br.x,i[4]=Sc.x,i[8]=oi.x,i[1]=Br.y,i[5]=Sc.y,i[9]=oi.y,i[2]=Br.z,i[6]=Sc.z,i[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],c=n[4],u=n[8],h=n[12],f=n[1],p=n[5],m=n[9],g=n[13],v=n[2],S=n[6],x=n[10],y=n[14],E=n[3],T=n[7],w=n[11],U=n[15],P=i[0],L=i[4],O=i[8],R=i[12],A=i[1],N=i[5],q=i[9],Y=i[13],j=i[2],te=i[6],J=i[10],de=i[14],k=i[3],ie=i[7],ne=i[11],ue=i[15];return s[0]=o*P+c*A+u*j+h*k,s[4]=o*L+c*N+u*te+h*ie,s[8]=o*O+c*q+u*J+h*ne,s[12]=o*R+c*Y+u*de+h*ue,s[1]=f*P+p*A+m*j+g*k,s[5]=f*L+p*N+m*te+g*ie,s[9]=f*O+p*q+m*J+g*ne,s[13]=f*R+p*Y+m*de+g*ue,s[2]=v*P+S*A+x*j+y*k,s[6]=v*L+S*N+x*te+y*ie,s[10]=v*O+S*q+x*J+y*ne,s[14]=v*R+S*Y+x*de+y*ue,s[3]=E*P+T*A+w*j+U*k,s[7]=E*L+T*N+w*te+U*ie,s[11]=E*O+T*q+w*J+U*ne,s[15]=E*R+T*Y+w*de+U*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],c=e[5],u=e[9],h=e[13],f=e[2],p=e[6],m=e[10],g=e[14],v=e[3],S=e[7],x=e[11],y=e[15];return v*(+s*u*p-i*h*p-s*c*m+n*h*m+i*c*g-n*u*g)+S*(+t*u*g-t*h*m+s*o*m-i*o*g+i*h*f-s*u*f)+x*(+t*h*p-t*c*g-s*o*p+n*o*g+s*c*f-n*h*f)+y*(-i*c*f-t*u*p+t*c*m+i*o*p-n*o*m+n*u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=e[9],m=e[10],g=e[11],v=e[12],S=e[13],x=e[14],y=e[15],E=p*x*h-S*m*h+S*u*g-c*x*g-p*u*y+c*m*y,T=v*m*h-f*x*h-v*u*g+o*x*g+f*u*y-o*m*y,w=f*S*h-v*p*h+v*c*g-o*S*g-f*c*y+o*p*y,U=v*p*u-f*S*u-v*c*m+o*S*m+f*c*x-o*p*x,P=t*E+n*T+i*w+s*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=E*L,e[1]=(S*m*s-p*x*s-S*i*g+n*x*g+p*i*y-n*m*y)*L,e[2]=(c*x*s-S*u*s+S*i*h-n*x*h-c*i*y+n*u*y)*L,e[3]=(p*u*s-c*m*s-p*i*h+n*m*h+c*i*g-n*u*g)*L,e[4]=T*L,e[5]=(f*x*s-v*m*s+v*i*g-t*x*g-f*i*y+t*m*y)*L,e[6]=(v*u*s-o*x*s-v*i*h+t*x*h+o*i*y-t*u*y)*L,e[7]=(o*m*s-f*u*s+f*i*h-t*m*h-o*i*g+t*u*g)*L,e[8]=w*L,e[9]=(v*p*s-f*S*s-v*n*g+t*S*g+f*n*y-t*p*y)*L,e[10]=(o*S*s-v*c*s+v*n*h-t*S*h-o*n*y+t*c*y)*L,e[11]=(f*c*s-o*p*s-f*n*h+t*p*h+o*n*g-t*c*g)*L,e[12]=U*L,e[13]=(f*S*i-v*p*i+v*n*m-t*S*m-f*n*x+t*p*x)*L,e[14]=(v*c*i-o*S*i-v*n*u+t*S*u+o*n*x-t*c*x)*L,e[15]=(o*p*i-f*c*i+f*n*u-t*p*u-o*n*m+t*c*m)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,c=e.y,u=e.z,h=s*o,f=s*c;return this.set(h*o+n,h*c-i*u,h*u+i*c,0,h*c+i*u,f*c+n,f*u-i*o,0,h*u-i*c,f*u+i*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,c=t._z,u=t._w,h=s+s,f=o+o,p=c+c,m=s*h,g=s*f,v=s*p,S=o*f,x=o*p,y=c*p,E=u*h,T=u*f,w=u*p,U=n.x,P=n.y,L=n.z;return i[0]=(1-(S+y))*U,i[1]=(g+w)*U,i[2]=(v-T)*U,i[3]=0,i[4]=(g-w)*P,i[5]=(1-(m+y))*P,i[6]=(x+E)*P,i[7]=0,i[8]=(v+T)*L,i[9]=(x-E)*L,i[10]=(1-(m+S))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=co.set(i[0],i[1],i[2]).length();const o=co.set(i[4],i[5],i[6]).length(),c=co.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ai.copy(this);const h=1/s,f=1/o,p=1/c;return Ai.elements[0]*=h,Ai.elements[1]*=h,Ai.elements[2]*=h,Ai.elements[4]*=f,Ai.elements[5]*=f,Ai.elements[6]*=f,Ai.elements[8]*=p,Ai.elements[9]*=p,Ai.elements[10]*=p,t.setFromRotationMatrix(Ai),n.x=s,n.y=o,n.z=c,this}makePerspective(e,t,n,i,s,o,c=Ji){const u=this.elements,h=2*s/(t-e),f=2*s/(n-i),p=(t+e)/(t-e),m=(n+i)/(n-i);let g,v;if(c===Ji)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(c===Ya)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=h,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=f,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,s,o,c=Ji){const u=this.elements,h=1/(t-e),f=1/(n-i),p=1/(o-s),m=(t+e)*h,g=(n+i)*f;let v,S;if(c===Ji)v=(o+s)*p,S=-2*p;else if(c===Ya)v=s*p,S=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*f,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=S,u[14]=-v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const co=new D,Ai=new et,fS=new D(0,0,0),dS=new D(1,1,1),Br=new D,Sc=new D,oi=new D,Yg=new et,qg=new An;class fi{constructor(e=0,t=0,n=0,i=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],c=i[8],u=i[1],h=i[5],f=i[9],p=i[2],m=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Kt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qg.setFromEuler(this),this.setFromQuaternion(qg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class Ls{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pS=0;const Zg=new D,uo=new An,hr=new et,wc=new D,ga=new D,mS=new D,gS=new An,jg=new D(1,0,0),Kg=new D(0,1,0),Jg=new D(0,0,1),Qg={type:"added"},_S={type:"removed"},ho={type:"childadded",child:null},Jf={type:"childremoved",child:null};class It extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new D,t=new fi,n=new An,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new ft}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return uo.setFromAxisAngle(e,t),this.quaternion.multiply(uo),this}rotateOnWorldAxis(e,t){return uo.setFromAxisAngle(e,t),this.quaternion.premultiply(uo),this}rotateX(e){return this.rotateOnAxis(jg,e)}rotateY(e){return this.rotateOnAxis(Kg,e)}rotateZ(e){return this.rotateOnAxis(Jg,e)}translateOnAxis(e,t){return Zg.copy(e).applyQuaternion(this.quaternion),this.position.add(Zg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jg,e)}translateY(e){return this.translateOnAxis(Kg,e)}translateZ(e){return this.translateOnAxis(Jg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wc.copy(e):wc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hr.lookAt(ga,wc,this.up):hr.lookAt(wc,ga,this.up),this.quaternion.setFromRotationMatrix(hr),i&&(hr.extractRotation(i.matrixWorld),uo.setFromRotationMatrix(hr),this.quaternion.premultiply(uo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qg),ho.child=e,this.dispatchEvent(ho),ho.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_S),Jf.child=e,this.dispatchEvent(Jf),Jf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hr.multiply(e.parent.matrixWorld)),e.applyMatrix4(hr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qg),ho.child=e,this.dispatchEvent(ho),ho.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,mS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,gS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let h=0,f=u.length;h<f;h++){const p=u[h];s(e.shapes,p)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(s(e.materials,this.material[u]));i.material=c}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];i.animations.push(s(e.animations,u))}}if(t){const c=o(e.geometries),u=o(e.materials),h=o(e.textures),f=o(e.images),p=o(e.shapes),m=o(e.skeletons),g=o(e.animations),v=o(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(c){const u=[];for(const h in c){const f=c[h];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}It.DEFAULT_UP=new D(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new D,fr=new D,Qf=new D,dr=new D,fo=new D,po=new D,$g=new D,$f=new D,ed=new D,td=new D,nd=new Et,id=new Et,rd=new Et;class $n{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ri.subVectors(e,t),i.cross(Ri);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ri.subVectors(i,t),fr.subVectors(n,t),Qf.subVectors(e,t);const o=Ri.dot(Ri),c=Ri.dot(fr),u=Ri.dot(Qf),h=fr.dot(fr),f=fr.dot(Qf),p=o*h-c*c;if(p===0)return s.set(0,0,0),null;const m=1/p,g=(h*u-c*f)*m,v=(o*f-c*u)*m;return s.set(1-g-v,v,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,dr)===null?!1:dr.x>=0&&dr.y>=0&&dr.x+dr.y<=1}static getInterpolation(e,t,n,i,s,o,c,u){return this.getBarycoord(e,t,n,i,dr)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,dr.x),u.addScaledVector(o,dr.y),u.addScaledVector(c,dr.z),u)}static getInterpolatedAttribute(e,t,n,i,s,o){return nd.setScalar(0),id.setScalar(0),rd.setScalar(0),nd.fromBufferAttribute(e,t),id.fromBufferAttribute(e,n),rd.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(nd,s.x),o.addScaledVector(id,s.y),o.addScaledVector(rd,s.z),o}static isFrontFacing(e,t,n,i){return Ri.subVectors(n,t),fr.subVectors(e,t),Ri.cross(fr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Ri.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return $n.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,c;fo.subVectors(i,n),po.subVectors(s,n),$f.subVectors(e,n);const u=fo.dot($f),h=po.dot($f);if(u<=0&&h<=0)return t.copy(n);ed.subVectors(e,i);const f=fo.dot(ed),p=po.dot(ed);if(f>=0&&p<=f)return t.copy(i);const m=u*p-f*h;if(m<=0&&u>=0&&f<=0)return o=u/(u-f),t.copy(n).addScaledVector(fo,o);td.subVectors(e,s);const g=fo.dot(td),v=po.dot(td);if(v>=0&&g<=v)return t.copy(s);const S=g*h-u*v;if(S<=0&&h>=0&&v<=0)return c=h/(h-v),t.copy(n).addScaledVector(po,c);const x=f*v-g*p;if(x<=0&&p-f>=0&&g-v>=0)return $g.subVectors(s,i),c=(p-f)/(p-f+(g-v)),t.copy(i).addScaledVector($g,c);const y=1/(x+S+m);return o=S*y,c=m*y,t.copy(n).addScaledVector(fo,o).addScaledVector(po,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function sd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Pt.workingColorSpace){if(e=Ap(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=sd(o,s,e+1/3),this.g=sd(o,s,e),this.b=sd(o,s,e-1/3)}return Pt.toWorkingColorSpace(this,i),this}setStyle(e,t=Hn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],c=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Hn){const n=Xy[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return Pt.fromWorkingColorSpace(Dn.copy(this),e),Math.round(Kt(Dn.r*255,0,255))*65536+Math.round(Kt(Dn.g*255,0,255))*256+Math.round(Kt(Dn.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(Dn.copy(this),t);const n=Dn.r,i=Dn.g,s=Dn.b,o=Math.max(n,i,s),c=Math.min(n,i,s);let u,h;const f=(c+o)/2;if(c===o)u=0,h=0;else{const p=o-c;switch(h=f<=.5?p/(o+c):p/(2-o-c),o){case n:u=(i-s)/p+(i<s?6:0);break;case i:u=(s-n)/p+2;break;case s:u=(n-i)/p+4;break}u/=6}return e.h=u,e.s=h,e.l=f,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Hn){Pt.fromWorkingColorSpace(Dn.copy(this),e);const t=Dn.r,n=Dn.g,i=Dn.b;return e!==Hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+t,zr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zr),e.getHSL(Ec);const n=Ba(zr.h,Ec.h,t),i=Ba(zr.s,Ec.s,t),s=Ba(zr.l,Ec.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Ne;Ne.NAMES=Xy;let yS=0;class Nn extends tr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=hi(),this.name="",this.blending=Cs,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_u,this.blendDst=yu,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==xr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_u&&(n.blendSrc=this.blendSrc),this.blendDst!==yu&&(n.blendDst=this.blendDst),this.blendEquation!==Gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const c in s){const u=s[c];delete u.metadata,o.push(u)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zr extends Nn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gr=vS();function vS(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let u=0;u<256;++u){const h=u-127;h<-27?(n[u]=0,n[u|256]=32768,i[u]=24,i[u|256]=24):h<-14?(n[u]=1024>>-h-14,n[u|256]=1024>>-h-14|32768,i[u]=-h-1,i[u|256]=-h-1):h<=15?(n[u]=h+15<<10,n[u|256]=h+15<<10|32768,i[u]=13,i[u|256]=13):h<128?(n[u]=31744,n[u|256]=64512,i[u]=24,i[u|256]=24):(n[u]=31744,n[u|256]=64512,i[u]=13,i[u|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),c=new Uint32Array(64);for(let u=1;u<1024;++u){let h=u<<13,f=0;for(;(h&8388608)===0;)h<<=1,f-=8388608;h&=-8388609,f+=947912704,s[u]=h|f}for(let u=1024;u<2048;++u)s[u]=939524096+(u-1024<<13);for(let u=1;u<31;++u)o[u]=u<<23;o[31]=1199570944,o[32]=2147483648;for(let u=33;u<63;++u)o[u]=2147483648+(u-32<<23);o[63]=3347054592;for(let u=1;u<64;++u)u!==32&&(c[u]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:c}}function Qn(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Kt(r,-65504,65504),gr.floatView[0]=r;const e=gr.uint32View[0],t=e>>23&511;return gr.baseTable[t]+((e&8388607)>>gr.shiftTable[t])}function Ca(r){const e=r>>10;return gr.uint32View[0]=gr.mantissaTable[gr.offsetTable[e]+(r&1023)]+gr.exponentTable[e],gr.floatView[0]}const xS={toHalfFloat:Qn,fromHalfFloat:Ca},sn=new D,Tc=new le;class Rt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xa,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tc.fromBufferAttribute(this,t),Tc.applyMatrix3(e),this.setXY(t,Tc.x,Tc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xa&&(e.usage=this.usage),e}}class MS extends Rt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class SS extends Rt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class wS extends Rt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class ES extends Rt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Cp extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class TS extends Rt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Pp extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bS extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Ca(this.array[e*this.itemSize]);return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=Qn(t),this}getY(e){let t=Ca(this.array[e*this.itemSize+1]);return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=Qn(t),this}getZ(e){let t=Ca(this.array[e*this.itemSize+2]);return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=Qn(t),this}getW(e){let t=Ca(this.array[e*this.itemSize+3]);return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=Qn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=Qn(t),this.array[e+1]=Qn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=Qn(t),this.array[e+1]=Qn(n),this.array[e+2]=Qn(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=Qn(t),this.array[e+1]=Qn(n),this.array[e+2]=Qn(i),this.array[e+3]=Qn(s),this}}class Ve extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let AS=0;const Mi=new et,od=new It,mo=new D,ai=new xn,_a=new xn,_n=new D;class _t extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hy(e)?Pp:Cp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ft().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,t,n){return Mi.makeTranslation(e,t,n),this.applyMatrix4(Mi),this}scale(e,t,n){return Mi.makeScale(e,t,n),this.applyMatrix4(Mi),this}lookAt(e){return od.lookAt(e),od.updateMatrix(),this.applyMatrix4(od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mo).negate(),this.translate(mo.x,mo.y,mo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ve(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ai.setFromBufferAttribute(s),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const c=t[s];_a.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(ai.min,_a.min),ai.expandByPoint(_n),_n.addVectors(ai.max,_a.max),ai.expandByPoint(_n)):(ai.expandByPoint(_a.min),ai.expandByPoint(_a.max))}ai.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)_n.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(_n));if(t)for(let s=0,o=t.length;s<o;s++){const c=t[s],u=this.morphTargetsRelative;for(let h=0,f=c.count;h<f;h++)_n.fromBufferAttribute(c,h),u&&(mo.fromBufferAttribute(e,h),_n.add(mo)),i=Math.max(i,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),c=[],u=[];for(let O=0;O<n.count;O++)c[O]=new D,u[O]=new D;const h=new D,f=new D,p=new D,m=new le,g=new le,v=new le,S=new D,x=new D;function y(O,R,A){h.fromBufferAttribute(n,O),f.fromBufferAttribute(n,R),p.fromBufferAttribute(n,A),m.fromBufferAttribute(s,O),g.fromBufferAttribute(s,R),v.fromBufferAttribute(s,A),f.sub(h),p.sub(h),g.sub(m),v.sub(m);const N=1/(g.x*v.y-v.x*g.y);isFinite(N)&&(S.copy(f).multiplyScalar(v.y).addScaledVector(p,-g.y).multiplyScalar(N),x.copy(p).multiplyScalar(g.x).addScaledVector(f,-v.x).multiplyScalar(N),c[O].add(S),c[R].add(S),c[A].add(S),u[O].add(x),u[R].add(x),u[A].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let O=0,R=E.length;O<R;++O){const A=E[O],N=A.start,q=A.count;for(let Y=N,j=N+q;Y<j;Y+=3)y(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const T=new D,w=new D,U=new D,P=new D;function L(O){U.fromBufferAttribute(i,O),P.copy(U);const R=c[O];T.copy(R),T.sub(U.multiplyScalar(U.dot(R))).normalize(),w.crossVectors(P,R);const N=w.dot(u[O])<0?-1:1;o.setXYZW(O,T.x,T.y,T.z,N)}for(let O=0,R=E.length;O<R;++O){const A=E[O],N=A.start,q=A.count;for(let Y=N,j=N+q;Y<j;Y+=3)L(e.getX(Y+0)),L(e.getX(Y+1)),L(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const i=new D,s=new D,o=new D,c=new D,u=new D,h=new D,f=new D,p=new D;if(e)for(let m=0,g=e.count;m<g;m+=3){const v=e.getX(m+0),S=e.getX(m+1),x=e.getX(m+2);i.fromBufferAttribute(t,v),s.fromBufferAttribute(t,S),o.fromBufferAttribute(t,x),f.subVectors(o,s),p.subVectors(i,s),f.cross(p),c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,x),c.add(f),u.add(f),h.add(f),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(S,u.x,u.y,u.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let m=0,g=t.count;m<g;m+=3)i.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),f.subVectors(o,s),p.subVectors(i,s),f.cross(p),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(c,u){const h=c.array,f=c.itemSize,p=c.normalized,m=new h.constructor(u.length*f);let g=0,v=0;for(let S=0,x=u.length;S<x;S++){c.isInterleavedBufferAttribute?g=u[S]*c.data.stride+c.offset:g=u[S]*f;for(let y=0;y<f;y++)m[v++]=h[g++]}return new Rt(m,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,n=this.index.array,i=this.attributes;for(const c in i){const u=i[c],h=e(u,n);t.setAttribute(c,h)}const s=this.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++){const m=h[f],g=e(m,n);u.push(g)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],f=[];for(let p=0,m=h.length;p<m;p++){const g=h[p];f.push(g.toJSON(e.data))}f.length>0&&(i[u]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const f=i[h];this.setAttribute(h,f.clone(t))}const s=e.morphAttributes;for(const h in s){const f=[],p=s[h];for(let m=0,g=p.length;m<g;m++)f.push(p[m].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,f=o.length;h<f;h++){const p=o[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const e_=new et,cs=new Hs,bc=new Mn,t_=new D,Ac=new D,Rc=new D,Cc=new D,ad=new D,Pc=new D,n_=new D,Ic=new D;class tn extends It{constructor(e=new _t,t=new Zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(s&&c){Pc.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const f=c[u],p=s[u];f!==0&&(ad.fromBufferAttribute(p,e),o?Pc.addScaledVector(ad,f):Pc.addScaledVector(ad.sub(t),f))}t.add(Pc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bc.copy(n.boundingSphere),bc.applyMatrix4(s),cs.copy(e.ray).recast(e.near),!(bc.containsPoint(cs.origin)===!1&&(cs.intersectSphere(bc,t_)===null||cs.origin.distanceToSquared(t_)>(e.far-e.near)**2))&&(e_.copy(s).invert(),cs.copy(e.ray).applyMatrix4(e_),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,c=s.index,u=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(c!==null)if(Array.isArray(o))for(let v=0,S=m.length;v<S;v++){const x=m[v],y=o[x.materialIndex],E=Math.max(x.start,g.start),T=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let w=E,U=T;w<U;w+=3){const P=c.getX(w),L=c.getX(w+1),O=c.getX(w+2);i=Lc(this,y,e,n,h,f,p,P,L,O),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const v=Math.max(0,g.start),S=Math.min(c.count,g.start+g.count);for(let x=v,y=S;x<y;x+=3){const E=c.getX(x),T=c.getX(x+1),w=c.getX(x+2);i=Lc(this,o,e,n,h,f,p,E,T,w),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(o))for(let v=0,S=m.length;v<S;v++){const x=m[v],y=o[x.materialIndex],E=Math.max(x.start,g.start),T=Math.min(u.count,Math.min(x.start+x.count,g.start+g.count));for(let w=E,U=T;w<U;w+=3){const P=w,L=w+1,O=w+2;i=Lc(this,y,e,n,h,f,p,P,L,O),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const v=Math.max(0,g.start),S=Math.min(u.count,g.start+g.count);for(let x=v,y=S;x<y;x+=3){const E=x,T=x+1,w=x+2;i=Lc(this,o,e,n,h,f,p,E,T,w),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function RS(r,e,t,n,i,s,o,c){let u;if(e.side===Wn?u=n.intersectTriangle(o,s,i,!0,c):u=n.intersectTriangle(i,s,o,e.side===xr,c),u===null)return null;Ic.copy(c),Ic.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Ic);return h<t.near||h>t.far?null:{distance:h,point:Ic.clone(),object:r}}function Lc(r,e,t,n,i,s,o,c,u,h){r.getVertexPosition(c,Ac),r.getVertexPosition(u,Rc),r.getVertexPosition(h,Cc);const f=RS(r,e,t,n,Ac,Rc,Cc,n_);if(f){const p=new D;$n.getBarycoord(n_,Ac,Rc,Cc,p),i&&(f.uv=$n.getInterpolatedAttribute(i,c,u,h,p,new le)),s&&(f.uv1=$n.getInterpolatedAttribute(s,c,u,h,p,new le)),o&&(f.normal=$n.getInterpolatedAttribute(o,c,u,h,p,new D),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const m={a:c,b:u,c:h,normal:new D,materialIndex:0};$n.getNormal(Ac,Rc,Cc,m.normal),f.face=m,f.barycoord=p}return f}class Vs extends _t{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const c=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const u=[],h=[],f=[],p=[];let m=0,g=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,i,o,2),v("x","z","y",1,-1,e,n,-t,i,o,3),v("x","y","z",1,-1,e,t,n,i,s,4),v("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new Ve(h,3)),this.setAttribute("normal",new Ve(f,3)),this.setAttribute("uv",new Ve(p,2));function v(S,x,y,E,T,w,U,P,L,O,R){const A=w/L,N=U/O,q=w/2,Y=U/2,j=P/2,te=L+1,J=O+1;let de=0,k=0;const ie=new D;for(let ne=0;ne<J;ne++){const ue=ne*N-Y;for(let Re=0;Re<te;Re++){const Ye=Re*A-q;ie[S]=Ye*E,ie[x]=ue*T,ie[y]=j,h.push(ie.x,ie.y,ie.z),ie[S]=0,ie[x]=0,ie[y]=P>0?1:-1,f.push(ie.x,ie.y,ie.z),p.push(Re/L),p.push(1-ne/O),de+=1}}for(let ne=0;ne<O;ne++)for(let ue=0;ue<L;ue++){const Re=m+ue+te*ne,Ye=m+ue+te*(ne+1),se=m+(ue+1)+te*(ne+1),ge=m+(ue+1)+te*ne;u.push(Re,Ye,ge),u.push(Ye,se,ge),k+=6}c.addGroup(g,k,R),g+=k,m+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ho(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kn(r){const e={};for(let t=0;t<r.length;t++){const n=Ho(r[t]);for(const i in n)e[i]=n[i]}return e}function CS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Yy(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const mh={clone:Ho,merge:kn},PS=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,IS=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Si extends Nn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PS,this.fragmentShader=IS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ho(e.uniforms),this.uniformsGroups=CS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class al extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kr=new D,i_=new le,r_=new le;class yn extends al{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kr.x,kr.y).multiplyScalar(-e/kr.z),kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kr.x,kr.y).multiplyScalar(-e/kr.z)}getViewSize(e,t){return this.getViewBounds(e,i_,r_),t.subVectors(r_,i_)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Is*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,h=o.fullHeight;s+=o.offsetX*i/u,t-=o.offsetY*n/h,i*=o.width/u,n*=o.height/h}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const go=-90,_o=1;class qy extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new yn(go,_o,e,t);i.layers=this.layers,this.add(i);const s=new yn(go,_o,e,t);s.layers=this.layers,this.add(s);const o=new yn(go,_o,e,t);o.layers=this.layers,this.add(o);const c=new yn(go,_o,e,t);c.layers=this.layers,this.add(c);const u=new yn(go,_o,e,t);u.layers=this.layers,this.add(u);const h=new yn(go,_o,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,c,u]=t;for(const h of t)this.remove(h);if(e===Ji)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Ya)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,c,u,h,f]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,c),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,i),e.render(t,f),e.setRenderTarget(p,m,g),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ll extends Jt{constructor(e,t,n,i,s,o,c,u,h,f){e=e!==void 0?e:[],t=t!==void 0?t:Mr,super(e,t,n,i,s,o,c,u,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zy extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ll(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Vs(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:Ho(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:yr});s.uniforms.tEquirect.value=t;const o=new tn(i,s),c=t.minFilter;return t.minFilter===Li&&(t.minFilter=on),new qy(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const ld=new D,LS=new D,DS=new ft;class mr{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ld.subVectors(n,t).cross(LS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ld),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||DS.getNormalMatrix(e),i=this.coplanarPoint(ld).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new Mn,Dc=new D;class cl{constructor(e=new mr,t=new mr,n=new mr,i=new mr,s=new mr,o=new mr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(s),c[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ji){const n=this.planes,i=e.elements,s=i[0],o=i[1],c=i[2],u=i[3],h=i[4],f=i[5],p=i[6],m=i[7],g=i[8],v=i[9],S=i[10],x=i[11],y=i[12],E=i[13],T=i[14],w=i[15];if(n[0].setComponents(u-s,m-h,x-g,w-y).normalize(),n[1].setComponents(u+s,m+h,x+g,w+y).normalize(),n[2].setComponents(u+o,m+f,x+v,w+E).normalize(),n[3].setComponents(u-o,m-f,x-v,w-E).normalize(),n[4].setComponents(u-c,m-p,x-S,w-T).normalize(),t===Ji)n[5].setComponents(u+c,m+p,x+S,w+T).normalize();else if(t===Ya)n[5].setComponents(c,p,S,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Dc.x=i.normal.x>0?e.max.x:e.min.x,Dc.y=i.normal.y>0?e.max.y:e.min.y,Dc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jy(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function US(r){const e=new WeakMap;function t(c,u){const h=c.array,f=c.usage,p=h.byteLength,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?g=r.HALF_FLOAT:g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function n(c,u,h){const f=u.array,p=u.updateRanges;if(r.bindBuffer(h,c),p.length===0)r.bufferSubData(h,0,f);else{p.sort((g,v)=>g.start-v.start);let m=0;for(let g=1;g<p.length;g++){const v=p[m],S=p[g];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++m,p[m]=S)}p.length=m+1;for(let g=0,v=p.length;g<v;g++){const S=p[g];r.bufferSubData(h,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}u.clearUpdateRanges()}u.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=e.get(c);u&&(r.deleteBuffer(u.buffer),e.delete(c))}function o(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const f=e.get(c);(!f||f.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,u),h.version=c.version}}return{get:i,remove:s,update:o}}class Yo extends _t{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,c=Math.floor(n),u=Math.floor(i),h=c+1,f=u+1,p=e/c,m=t/u,g=[],v=[],S=[],x=[];for(let y=0;y<f;y++){const E=y*m-o;for(let T=0;T<h;T++){const w=T*p-s;v.push(w,-E,0),S.push(0,0,1),x.push(T/c),x.push(1-y/u)}}for(let y=0;y<u;y++)for(let E=0;E<c;E++){const T=E+h*y,w=E+h*(y+1),U=E+1+h*(y+1),P=E+1+h*y;g.push(T,w,P),g.push(w,U,P)}this.setIndex(g),this.setAttribute("position",new Ve(v,3)),this.setAttribute("normal",new Ve(S,3)),this.setAttribute("uv",new Ve(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.widthSegments,e.heightSegments)}}const NS=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`,OS=`
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
`,FS=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`,BS=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,zS=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`,kS=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,HS=`
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
`,VS=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,GS=`
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
`,WS=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`,XS=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`,YS=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,qS=`

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

`,ZS=`

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

`,jS=`
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
`,KS=`
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
`,JS=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,QS=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,$S=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,ew=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,tw=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,nw=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec3 vColor;

#endif
`,iw=`
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
`,rw=`
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
`,sw=`
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
`,ow=`

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
`,aw=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,lw=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`,cw=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,uw=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,hw=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,fw=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`,dw=`
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
`,pw=`
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
`,mw=`
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
`,gw=`
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
`,_w=`
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
`,yw=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,vw=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,xw=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,Mw=`
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
`,Sw=`

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
`,ww=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,Ew=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`,Tw=`
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
`,bw=`
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
`,Aw=`
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
`,Rw=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,Cw=`
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
`,Pw=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,Iw=`
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
`,Lw=`
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
`,Dw=`

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
`,Uw=`
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
`,Nw=`
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
`,Ow=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`,Fw=`
#if defined( USE_LOGDEPTHBUF )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,Bw=`
#if defined( USE_LOGDEPTHBUF )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,zw=`
#ifdef USE_LOGDEPTHBUF

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,kw=`
#ifdef USE_LOGDEPTHBUF

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`,Hw=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`,Vw=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,Gw=`
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
`,Ww=`
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
`,Xw=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,Yw=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,qw=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`,Zw=`
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
`,jw=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`,Kw=`
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
`,Jw=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`,Qw=`
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

`,$w=`

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
`,eE=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,tE=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,nE=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,iE=`
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
`,rE=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`,sE=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`,oE=`

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
`,aE=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`,lE=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,cE=`
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
`,uE=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,hE=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,fE=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,dE=`
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
`,pE=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,mE=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,gE=`
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
`,_E=`

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
`,yE=`

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


`,vE=`
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
`,xE=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,ME=`
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
`,SE=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,wE=`
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
`,EE=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,TE=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,bE=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,AE=`
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
`,RE=`
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
`,CE=`
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
`,PE=`
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
`,IE=`
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
`,LE=`
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
`,DE=`
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
`,UE=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,NE=`
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
`,OE=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,FE=`

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
`,BE=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,zE=`
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
`,kE=`
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
`,HE=`
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
`,VE=`
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
`,GE=`
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
`,WE=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,XE=`
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
`,YE=`
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
`,qE=`
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
`,ZE=`
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
`,jE=`
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
`,KE=`
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
`,JE=`
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
`,QE=`
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
`,$E=`
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
`,e1=`
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
`,t1=`
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
`,n1=`
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
`,i1=`
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
`,r1=`
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
`,s1=`
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
`,o1=`
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
`,a1=`
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
`,l1=`
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
`,c1=`
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
`,u1=`
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
`,h1=`
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
`,f1=`
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
`,d1=`
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
`,gt={alphahash_fragment:NS,alphahash_pars_fragment:OS,alphamap_fragment:FS,alphamap_pars_fragment:BS,alphatest_fragment:zS,alphatest_pars_fragment:kS,aomap_fragment:HS,aomap_pars_fragment:VS,batching_pars_vertex:GS,batching_vertex:WS,begin_vertex:XS,beginnormal_vertex:YS,bsdfs:qS,iridescence_fragment:ZS,bumpmap_pars_fragment:jS,clipping_planes_fragment:KS,clipping_planes_pars_fragment:JS,clipping_planes_pars_vertex:QS,clipping_planes_vertex:$S,color_fragment:ew,color_pars_fragment:tw,color_pars_vertex:nw,color_vertex:iw,common:rw,cube_uv_reflection_fragment:sw,defaultnormal_vertex:ow,displacementmap_pars_vertex:aw,displacementmap_vertex:lw,emissivemap_fragment:cw,emissivemap_pars_fragment:uw,colorspace_fragment:hw,colorspace_pars_fragment:fw,envmap_fragment:dw,envmap_common_pars_fragment:pw,envmap_pars_fragment:mw,envmap_pars_vertex:gw,envmap_physical_pars_fragment:Aw,envmap_vertex:_w,fog_vertex:yw,fog_pars_vertex:vw,fog_fragment:xw,fog_pars_fragment:Mw,gradientmap_pars_fragment:Sw,lightmap_pars_fragment:ww,lights_lambert_fragment:Ew,lights_lambert_pars_fragment:Tw,lights_pars_begin:bw,lights_toon_fragment:Rw,lights_toon_pars_fragment:Cw,lights_phong_fragment:Pw,lights_phong_pars_fragment:Iw,lights_physical_fragment:Lw,lights_physical_pars_fragment:Dw,lights_fragment_begin:Uw,lights_fragment_maps:Nw,lights_fragment_end:Ow,logdepthbuf_fragment:Fw,logdepthbuf_pars_fragment:Bw,logdepthbuf_pars_vertex:zw,logdepthbuf_vertex:kw,map_fragment:Hw,map_pars_fragment:Vw,map_particle_fragment:Gw,map_particle_pars_fragment:Ww,metalnessmap_fragment:Xw,metalnessmap_pars_fragment:Yw,morphinstance_vertex:qw,morphcolor_vertex:Zw,morphnormal_vertex:jw,morphtarget_pars_vertex:Kw,morphtarget_vertex:Jw,normal_fragment_begin:Qw,normal_fragment_maps:$w,normal_pars_fragment:eE,normal_pars_vertex:tE,normal_vertex:nE,normalmap_pars_fragment:iE,clearcoat_normal_fragment_begin:rE,clearcoat_normal_fragment_maps:sE,clearcoat_pars_fragment:oE,iridescence_pars_fragment:aE,opaque_fragment:lE,packing:cE,premultiplied_alpha_fragment:uE,project_vertex:hE,dithering_fragment:fE,dithering_pars_fragment:dE,roughnessmap_fragment:pE,roughnessmap_pars_fragment:mE,shadowmap_pars_fragment:gE,shadowmap_pars_vertex:_E,shadowmap_vertex:yE,shadowmask_pars_fragment:vE,skinbase_vertex:xE,skinning_pars_vertex:ME,skinning_vertex:SE,skinnormal_vertex:wE,specularmap_fragment:EE,specularmap_pars_fragment:TE,tonemapping_fragment:bE,tonemapping_pars_fragment:AE,transmission_fragment:RE,transmission_pars_fragment:CE,uv_pars_fragment:PE,uv_pars_vertex:IE,uv_vertex:LE,worldpos_vertex:DE,background_vert:UE,background_frag:NE,backgroundCube_vert:OE,backgroundCube_frag:FE,cube_vert:BE,cube_frag:zE,depth_vert:kE,depth_frag:HE,distanceRGBA_vert:VE,distanceRGBA_frag:GE,equirect_vert:WE,equirect_frag:XE,linedashed_vert:YE,linedashed_frag:qE,meshbasic_vert:ZE,meshbasic_frag:jE,meshlambert_vert:KE,meshlambert_frag:JE,meshmatcap_vert:QE,meshmatcap_frag:$E,meshnormal_vert:e1,meshnormal_frag:t1,meshphong_vert:n1,meshphong_frag:i1,meshphysical_vert:r1,meshphysical_frag:s1,meshtoon_vert:o1,meshtoon_frag:a1,points_vert:l1,points_frag:c1,shadow_vert:u1,shadow_frag:h1,sprite_vert:f1,sprite_frag:d1},we={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Vn={basic:{uniforms:kn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:kn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ne(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:kn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:kn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:kn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ne(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:kn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:kn([we.points,we.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:kn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:kn([we.common,we.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:kn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:kn([we.sprite,we.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:kn([we.common,we.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:kn([we.lights,we.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Vn.physical={uniforms:kn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Uc={r:0,b:0,g:0},hs=new fi,p1=new et;function m1(r,e,t,n,i,s,o){const c=new Ne(0);let u=s===!0?0:1,h,f,p=null,m=0,g=null;function v(E){let T=E.isScene===!0?E.background:null;return T&&T.isTexture&&(T=(E.backgroundBlurriness>0?t:e).get(T)),T}function S(E){let T=!1;const w=v(E);w===null?y(c,u):w&&w.isColor&&(y(w,1),T=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(E,T){const w=v(T);w&&(w.isCubeTexture||w.mapping===Wo)?(f===void 0&&(f=new tn(new Vs(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Ho(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(U,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),hs.copy(T.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),f.material.uniforms.envMap.value=w,f.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(p1.makeRotationFromEuler(hs)),f.material.toneMapped=Pt.getTransfer(w.colorSpace)!==Ot,(p!==w||m!==w.version||g!==r.toneMapping)&&(f.material.needsUpdate=!0,p=w,m=w.version,g=r.toneMapping),f.layers.enableAll(),E.unshift(f,f.geometry,f.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new tn(new Yo(2,2),new Si({name:"BackgroundMaterial",uniforms:Ho(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.toneMapped=Pt.getTransfer(w.colorSpace)!==Ot,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(p!==w||m!==w.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,p=w,m=w.version,g=r.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function y(E,T){E.getRGB(Uc,Yy(r)),n.buffers.color.setClear(Uc.r,Uc.g,Uc.b,T,o)}return{getClearColor:function(){return c},setClearColor:function(E,T=1){c.set(E),u=T,y(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(E){u=E,y(c,u)},render:S,addToRenderList:x}}function g1(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=m(null);let s=i,o=!1;function c(A,N,q,Y,j){let te=!1;const J=p(Y,q,N);s!==J&&(s=J,h(s.object)),te=g(A,Y,q,j),te&&v(A,Y,q,j),j!==null&&e.update(j,r.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,w(A,N,q,Y),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function u(){return r.createVertexArray()}function h(A){return r.bindVertexArray(A)}function f(A){return r.deleteVertexArray(A)}function p(A,N,q){const Y=q.wireframe===!0;let j=n[A.id];j===void 0&&(j={},n[A.id]=j);let te=j[N.id];te===void 0&&(te={},j[N.id]=te);let J=te[Y];return J===void 0&&(J=m(u()),te[Y]=J),J}function m(A){const N=[],q=[],Y=[];for(let j=0;j<t;j++)N[j]=0,q[j]=0,Y[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:q,attributeDivisors:Y,object:A,attributes:{},index:null}}function g(A,N,q,Y){const j=s.attributes,te=N.attributes;let J=0;const de=q.getAttributes();for(const k in de)if(de[k].location>=0){const ne=j[k];let ue=te[k];if(ue===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(ue=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(ue=A.instanceColor)),ne===void 0||ne.attribute!==ue||ue&&ne.data!==ue.data)return!0;J++}return s.attributesNum!==J||s.index!==Y}function v(A,N,q,Y){const j={},te=N.attributes;let J=0;const de=q.getAttributes();for(const k in de)if(de[k].location>=0){let ne=te[k];ne===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(ne=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(ne=A.instanceColor));const ue={};ue.attribute=ne,ne&&ne.data&&(ue.data=ne.data),j[k]=ue,J++}s.attributes=j,s.attributesNum=J,s.index=Y}function S(){const A=s.newAttributes;for(let N=0,q=A.length;N<q;N++)A[N]=0}function x(A){y(A,0)}function y(A,N){const q=s.newAttributes,Y=s.enabledAttributes,j=s.attributeDivisors;q[A]=1,Y[A]===0&&(r.enableVertexAttribArray(A),Y[A]=1),j[A]!==N&&(r.vertexAttribDivisor(A,N),j[A]=N)}function E(){const A=s.newAttributes,N=s.enabledAttributes;for(let q=0,Y=N.length;q<Y;q++)N[q]!==A[q]&&(r.disableVertexAttribArray(q),N[q]=0)}function T(A,N,q,Y,j,te,J){J===!0?r.vertexAttribIPointer(A,N,q,j,te):r.vertexAttribPointer(A,N,q,Y,j,te)}function w(A,N,q,Y){S();const j=Y.attributes,te=q.getAttributes(),J=N.defaultAttributeValues;for(const de in te){const k=te[de];if(k.location>=0){let ie=j[de];if(ie===void 0&&(de==="instanceMatrix"&&A.instanceMatrix&&(ie=A.instanceMatrix),de==="instanceColor"&&A.instanceColor&&(ie=A.instanceColor)),ie!==void 0){const ne=ie.normalized,ue=ie.itemSize,Re=e.get(ie);if(Re===void 0)continue;const Ye=Re.buffer,se=Re.type,ge=Re.bytesPerElement,De=se===r.INT||se===r.UNSIGNED_INT||ie.gpuType===ah;if(ie.isInterleavedBufferAttribute){const ve=ie.data,Ke=ve.stride,it=ie.offset;if(ve.isInstancedInterleavedBuffer){for(let Je=0;Je<k.locationSize;Je++)y(k.location+Je,ve.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Je=0;Je<k.locationSize;Je++)x(k.location+Je);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let Je=0;Je<k.locationSize;Je++)T(k.location+Je,ue/k.locationSize,se,ne,Ke*ge,(it+ue/k.locationSize*Je)*ge,De)}else{if(ie.isInstancedBufferAttribute){for(let ve=0;ve<k.locationSize;ve++)y(k.location+ve,ie.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ve=0;ve<k.locationSize;ve++)x(k.location+ve);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let ve=0;ve<k.locationSize;ve++)T(k.location+ve,ue/k.locationSize,se,ne,ue*ge,ue/k.locationSize*ve*ge,De)}}else if(J!==void 0){const ne=J[de];if(ne!==void 0)switch(ne.length){case 2:r.vertexAttrib2fv(k.location,ne);break;case 3:r.vertexAttrib3fv(k.location,ne);break;case 4:r.vertexAttrib4fv(k.location,ne);break;default:r.vertexAttrib1fv(k.location,ne)}}}}E()}function U(){O();for(const A in n){const N=n[A];for(const q in N){const Y=N[q];for(const j in Y)f(Y[j].object),delete Y[j];delete N[q]}delete n[A]}}function P(A){if(n[A.id]===void 0)return;const N=n[A.id];for(const q in N){const Y=N[q];for(const j in Y)f(Y[j].object),delete Y[j];delete N[q]}delete n[A.id]}function L(A){for(const N in n){const q=n[N];if(q[A.id]===void 0)continue;const Y=q[A.id];for(const j in Y)f(Y[j].object),delete Y[j];delete q[A.id]}}function O(){R(),o=!0,s!==i&&(s=i,h(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:O,resetDefaultState:R,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:S,enableAttribute:x,disableUnusedAttributes:E}}function _1(r,e,t){let n;function i(h){n=h}function s(h,f){r.drawArrays(n,h,f),t.update(f,n,1)}function o(h,f,p){p!==0&&(r.drawArraysInstanced(n,h,f,p),t.update(f,n,p))}function c(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,f,0,p);let g=0;for(let v=0;v<p;v++)g+=f[v];t.update(g,n,1)}function u(h,f,p,m){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<h.length;v++)o(h[v],f[v],m[v]);else{g.multiDrawArraysInstancedWEBGL(n,h,0,f,0,m,0,p);let v=0;for(let S=0;S<p;S++)v+=f[S]*m[S];t.update(v,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function y1(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(L){return!(L!==bn&&n.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(L){const O=L===Xo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Di&&n.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ei&&!O)}function u(L){if(L==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const f=u(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const p=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),U=v>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:p,reverseDepthBuffer:m,maxTextures:g,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:w,vertexTextures:U,maxSamples:P}}function v1(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new mr,c=new ft,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||n!==0||i;return i=m,n=p.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=f(p,m,0)},this.setState=function(p,m,g){const v=p.clippingPlanes,S=p.clipIntersection,x=p.clipShadows,y=r.get(p);if(!i||v===null||v.length===0||s&&!x)s?f(null):h();else{const E=s?0:n,T=E*4;let w=y.clippingState||null;u.value=w,w=f(v,m,T,g);for(let U=0;U!==T;++U)w[U]=t[U];y.clippingState=w,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,m,g,v){const S=p!==null?p.length:0;let x=null;if(S!==0){if(x=u.value,v!==!0||x===null){const y=g+S*4,E=m.matrixWorldInverse;c.getNormalMatrix(E),(x===null||x.length<y)&&(x=new Float32Array(y));for(let T=0,w=g;T!==S;++T,w+=4)o.copy(p[T]).applyMatrix4(E,c),o.normal.toArray(x,w),x[w+3]=o.constant}u.value=x,u.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,x}}function x1(r){let e=new WeakMap;function t(o,c){return c===Ha?o.mapping=Mr:c===Va&&(o.mapping=Xr),o}function n(o){if(o&&o.isTexture){const c=o.mapping;if(c===Ha||c===Va)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const h=new Zy(u.height);return h.fromEquirectangularTexture(r,o),e.set(o,h),o.addEventListener("dispose",i),t(h.texture,o.mapping)}else return null}}return o}function i(o){const c=o.target;c.removeEventListener("dispose",i);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ul extends al{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,c=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,c-=f*this.view.offsetY,u=c-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,c,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Co=4,s_=[.125,.215,.35,.446,.526,.582],Ss=20,cd=new ul,o_=new Ne;let ud=null,hd=0,fd=0,dd=!1;const Ms=(1+Math.sqrt(5))/2,yo=1/Ms,a_=[new D(-Ms,yo,0),new D(Ms,yo,0),new D(-yo,0,Ms),new D(yo,0,Ms),new D(0,Ms,-yo),new D(0,Ms,yo),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class ip{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ud=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ud,hd,fd),this._renderer.xr.enabled=dd,e.scissorTest=!1,Nc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ud=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Xo,format:bn,colorSpace:ks,depthBuffer:!1},i=l_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=l_(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=M1(s)),this._blurMaterial=S1(s,e,t)}return i}_compileMaterial(e){const t=new tn(this._lodPlanes[0],e);this._renderer.compile(t,cd)}_sceneToCubeUV(e,t,n,i){const c=new yn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(o_),f.toneMapping=Qi,f.autoClear=!1;const g=new Zr({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),v=new tn(new Vs,g);let S=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,S=!0):(g.color.copy(o_),S=!0);for(let y=0;y<6;y++){const E=y%3;E===0?(c.up.set(0,u[y],0),c.lookAt(h[y],0,0)):E===1?(c.up.set(0,0,u[y]),c.lookAt(0,h[y],0)):(c.up.set(0,u[y],0),c.lookAt(0,0,h[y]));const T=this._cubeSize;Nc(i,E*T,y>2?T:0,T,T),f.setRenderTarget(i),S&&f.render(v,c),f.render(e,c)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=m,f.autoClear=p,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Mr||e.mapping===Xr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=u_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=c_());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new tn(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=e;const u=this._cubeSize;Nc(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,cd)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=a_[(i-s-1)%a_.length];this._blur(e,s-1,s,o,c)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,c){const u=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new tn(this._lodPlanes[i],h),m=h.uniforms,g=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Ss-1),S=s/v,x=isFinite(s)?1+Math.floor(f*S):Ss;x>Ss&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ss}`);const y=[];let E=0;for(let L=0;L<Ss;++L){const O=L/S,R=Math.exp(-O*O/2);y.push(R),L===0?E+=R:L<x&&(E+=2*R)}for(let L=0;L<y.length;L++)y[L]=y[L]/E;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=y,m.latitudinal.value=o==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:T}=this;m.dTheta.value=v,m.mipInt.value=T-n;const w=this._sizeLods[i],U=3*w*(i>T-Co?i-T+Co:0),P=4*(this._cubeSize-w);Nc(t,U,P,3*w,2*w),u.setRenderTarget(t),u.render(p,cd)}}function M1(r){const e=[],t=[],n=[];let i=r;const s=r-Co+1+s_.length;for(let o=0;o<s;o++){const c=Math.pow(2,i);t.push(c);let u=1/c;o>r-Co?u=s_[o-r+Co-1]:o===0&&(u=0),n.push(u);const h=1/(c-2),f=-h,p=1+h,m=[f,f,p,f,p,p,f,f,p,p,f,p],g=6,v=6,S=3,x=2,y=1,E=new Float32Array(S*v*g),T=new Float32Array(x*v*g),w=new Float32Array(y*v*g);for(let P=0;P<g;P++){const L=P%3*2/3-1,O=P>2?0:-1,R=[L,O,0,L+2/3,O,0,L+2/3,O+1,0,L,O,0,L+2/3,O+1,0,L,O+1,0];E.set(R,S*v*P),T.set(m,x*v*P);const A=[P,P,P,P,P,P];w.set(A,y*v*P)}const U=new _t;U.setAttribute("position",new Rt(E,S)),U.setAttribute("uv",new Rt(T,x)),U.setAttribute("faceIndex",new Rt(w,y)),e.push(U),i>Co&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function l_(r,e,t){const n=new Ui(r,e,t);return n.texture.mapping=Wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function S1(r,e,t){const n=new Float32Array(Ss),i=new D(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ip(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function c_(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ip(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function u_(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ip(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Ip(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function w1(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,h=u===Ha||u===Va,f=u===Mr||u===Xr;if(h||f){let p=e.get(c);const m=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return t===null&&(t=new ip(r)),p=h?t.fromEquirectangular(c,p):t.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),p.texture;if(p!==void 0)return p.texture;{const g=c.image;return h&&g&&g.height>0||f&&g&&i(g)?(t===null&&(t=new ip(r)),p=h?t.fromEquirectangular(c):t.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),c.addEventListener("dispose",s),p.texture):null}}}return c}function i(c){let u=0;const h=6;for(let f=0;f<h;f++)c[f]!==void 0&&u++;return u===h}function s(c){const u=c.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function E1(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ra("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function T1(r,e,t,n){const i={},s=new WeakMap;function o(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const v in m.attributes)e.remove(m.attributes[v]);for(const v in m.morphAttributes){const S=m.morphAttributes[v];for(let x=0,y=S.length;x<y;x++)e.remove(S[x])}m.removeEventListener("dispose",o),delete i[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(p,m){return i[m.id]===!0||(m.addEventListener("dispose",o),i[m.id]=!0,t.memory.geometries++),m}function u(p){const m=p.attributes;for(const v in m)e.update(m[v],r.ARRAY_BUFFER);const g=p.morphAttributes;for(const v in g){const S=g[v];for(let x=0,y=S.length;x<y;x++)e.update(S[x],r.ARRAY_BUFFER)}}function h(p){const m=[],g=p.index,v=p.attributes.position;let S=0;if(g!==null){const E=g.array;S=g.version;for(let T=0,w=E.length;T<w;T+=3){const U=E[T+0],P=E[T+1],L=E[T+2];m.push(U,P,P,L,L,U)}}else if(v!==void 0){const E=v.array;S=v.version;for(let T=0,w=E.length/3-1;T<w;T+=3){const U=T+0,P=T+1,L=T+2;m.push(U,P,P,L,L,U)}}else return;const x=new(Hy(m)?Pp:Cp)(m,1);x.version=S;const y=s.get(p);y&&e.remove(y),s.set(p,x)}function f(p){const m=s.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&h(p)}else h(p);return s.get(p)}return{get:c,update:u,getWireframeAttribute:f}}function b1(r,e,t){let n;function i(m){n=m}let s,o;function c(m){s=m.type,o=m.bytesPerElement}function u(m,g){r.drawElements(n,g,s,m*o),t.update(g,n,1)}function h(m,g,v){v!==0&&(r.drawElementsInstanced(n,g,s,m*o,v),t.update(g,n,v))}function f(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,m,0,v);let x=0;for(let y=0;y<v;y++)x+=g[y];t.update(x,n,1)}function p(m,g,v,S){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<m.length;y++)h(m[y]/o,g[y],S[y]);else{x.multiDrawElementsInstancedWEBGL(n,g,0,s,m,0,S,0,v);let y=0;for(let E=0;E<v;E++)y+=g[E]*S[E];t.update(y,n,1)}}this.setMode=i,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function A1(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,c){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=c*(s/3);break;case r.LINES:t.lines+=c*(s/2);break;case r.LINE_STRIP:t.lines+=c*(s-1);break;case r.LINE_LOOP:t.lines+=c*s;break;case r.POINTS:t.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function R1(r,e,t){const n=new WeakMap,i=new Et;function s(o,c,u){const h=o.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=f!==void 0?f.length:0;let m=n.get(c);if(m===void 0||m.count!==p){let R=function(){L.dispose(),n.delete(c),c.removeEventListener("dispose",R)};m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,v=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],E=c.morphAttributes.color||[];let T=0;g===!0&&(T=1),v===!0&&(T=2),S===!0&&(T=3);let w=c.attributes.position.count*T,U=1;w>e.maxTextureSize&&(U=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const P=new Float32Array(w*U*4*p),L=new ph(P,w,U,p);L.type=ei,L.needsUpdate=!0;const O=T*4;for(let A=0;A<p;A++){const N=x[A],q=y[A],Y=E[A],j=w*U*4*A;for(let te=0;te<N.count;te++){const J=te*O;g===!0&&(i.fromBufferAttribute(N,te),P[j+J+0]=i.x,P[j+J+1]=i.y,P[j+J+2]=i.z,P[j+J+3]=0),v===!0&&(i.fromBufferAttribute(q,te),P[j+J+4]=i.x,P[j+J+5]=i.y,P[j+J+6]=i.z,P[j+J+7]=0),S===!0&&(i.fromBufferAttribute(Y,te),P[j+J+8]=i.x,P[j+J+9]=i.y,P[j+J+10]=i.z,P[j+J+11]=Y.itemSize===4?i.w:1)}}m={count:p,texture:L,size:new le(w,U)},n.set(c,m),c.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let S=0;S<h.length;S++)g+=h[S];const v=c.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",v),u.getUniforms().setValue(r,"morphTargetInfluences",h)}u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:s}}function C1(r,e,t,n){let i=new WeakMap;function s(u){const h=n.render.frame,f=u.geometry,p=e.get(u,f);if(i.get(p)!==h&&(e.update(p),i.set(p,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),i.get(u)!==h&&(t.update(u.instanceMatrix,r.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,r.ARRAY_BUFFER),i.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;i.get(m)!==h&&(m.update(),i.set(m,h))}return p}function o(){i=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:o}}class Lp extends Jt{constructor(e,t,n,i,s,o,c,u,h,f=Ps){if(f!==Ps&&f!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Ps&&(n=Sr),n===void 0&&f===Bs&&(n=Fs),super(null,i,s,o,c,u,f,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:vn,this.minFilter=u!==void 0?u:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ky=new Jt,h_=new Lp(1,1),Jy=new ph,Qy=new Rp,$y=new ll,f_=[],d_=[],p_=new Float32Array(16),m_=new Float32Array(9),g_=new Float32Array(4);function qo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=f_[i];if(s===void 0&&(s=new Float32Array(i),f_[i]=s),e!==0){n.toArray(s,0);for(let o=1,c=0;o!==e;++o)c+=t,r[o].toArray(s,c)}return s}function un(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function hn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function gh(r,e){let t=d_[e];t===void 0&&(t=new Int32Array(e),d_[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function P1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function I1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2fv(this.addr,e),hn(t,e)}}function L1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;r.uniform3fv(this.addr,e),hn(t,e)}}function D1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4fv(this.addr,e),hn(t,e)}}function U1(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;g_.set(n),r.uniformMatrix2fv(this.addr,!1,g_),hn(t,n)}}function N1(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;m_.set(n),r.uniformMatrix3fv(this.addr,!1,m_),hn(t,n)}}function O1(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;p_.set(n),r.uniformMatrix4fv(this.addr,!1,p_),hn(t,n)}}function F1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function B1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2iv(this.addr,e),hn(t,e)}}function z1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;r.uniform3iv(this.addr,e),hn(t,e)}}function k1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4iv(this.addr,e),hn(t,e)}}function H1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function V1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2uiv(this.addr,e),hn(t,e)}}function G1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;r.uniform3uiv(this.addr,e),hn(t,e)}}function W1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4uiv(this.addr,e),hn(t,e)}}function X1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(h_.compareFunction=bp,s=h_):s=Ky,t.setTexture2D(e||s,i)}function Y1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qy,i)}function q1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$y,i)}function Z1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jy,i)}function j1(r){switch(r){case 5126:return P1;case 35664:return I1;case 35665:return L1;case 35666:return D1;case 35674:return U1;case 35675:return N1;case 35676:return O1;case 5124:case 35670:return F1;case 35667:case 35671:return B1;case 35668:case 35672:return z1;case 35669:case 35673:return k1;case 5125:return H1;case 36294:return V1;case 36295:return G1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return Z1}}function K1(r,e){r.uniform1fv(this.addr,e)}function J1(r,e){const t=qo(e,this.size,2);r.uniform2fv(this.addr,t)}function Q1(r,e){const t=qo(e,this.size,3);r.uniform3fv(this.addr,t)}function $1(r,e){const t=qo(e,this.size,4);r.uniform4fv(this.addr,t)}function eT(r,e){const t=qo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function tT(r,e){const t=qo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function nT(r,e){const t=qo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function iT(r,e){r.uniform1iv(this.addr,e)}function rT(r,e){r.uniform2iv(this.addr,e)}function sT(r,e){r.uniform3iv(this.addr,e)}function oT(r,e){r.uniform4iv(this.addr,e)}function aT(r,e){r.uniform1uiv(this.addr,e)}function lT(r,e){r.uniform2uiv(this.addr,e)}function cT(r,e){r.uniform3uiv(this.addr,e)}function uT(r,e){r.uniform4uiv(this.addr,e)}function hT(r,e,t){const n=this.cache,i=e.length,s=gh(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ky,s[o])}function fT(r,e,t){const n=this.cache,i=e.length,s=gh(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Qy,s[o])}function dT(r,e,t){const n=this.cache,i=e.length,s=gh(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||$y,s[o])}function pT(r,e,t){const n=this.cache,i=e.length,s=gh(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Jy,s[o])}function mT(r){switch(r){case 5126:return K1;case 35664:return J1;case 35665:return Q1;case 35666:return $1;case 35674:return eT;case 35675:return tT;case 35676:return nT;case 5124:case 35670:return iT;case 35667:case 35671:return rT;case 35668:case 35672:return sT;case 35669:case 35673:return oT;case 5125:return aT;case 36294:return lT;case 36295:return cT;case 36296:return uT;case 35678:case 36198:case 36298:case 36306:case 35682:return hT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return dT;case 36289:case 36303:case 36311:case 36292:return pT}}class gT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=j1(t.type)}}class _T{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mT(t.type)}}class yT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const c=i[s];c.setValue(e,t[c.id],n)}}}const pd=/(\w+)(\])?(\[|\.)?/g;function __(r,e){r.seq.push(e),r.map[e.id]=e}function vT(r,e,t){const n=r.name,i=n.length;for(pd.lastIndex=0;;){const s=pd.exec(n),o=pd.lastIndex;let c=s[1];const u=s[2]==="]",h=s[3];if(u&&(c=c|0),h===void 0||h==="["&&o+2===i){__(t,h===void 0?new gT(c,r,e):new _T(c,r,e));break}else{let p=t.map[c];p===void 0&&(p=new yT(c),__(t,p)),t=p}}}class mu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);vT(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const c=t[s],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function y_(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const xT=37297;let MT=0;function ST(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const c=o+1;n.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return n.join(`
`)}const v_=new ft;function wT(r){Pt._getMatrix(v_,Pt.workingColorSpace,r);const e=`mat3( ${v_.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(r)){case ol:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function x_(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+ST(r.getShaderSource(e),o)}else return i}function ET(r,e){const t=wT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function TT(r,e){let t;switch(e){case My:t="Linear";break;case Sy:t="Reinhard";break;case wy:t="Cineon";break;case mp:t="ACESFilmic";break;case Ty:t="AgX";break;case by:t="Neutral";break;case Ey:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Oc=new D;function bT(){Pt.getLuminanceCoefficients(Oc);const r=Oc.x.toFixed(4),e=Oc.y.toFixed(4),t=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function RT(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function CT(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let c=1;s.type===r.FLOAT_MAT2&&(c=2),s.type===r.FLOAT_MAT3&&(c=3),s.type===r.FLOAT_MAT4&&(c=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:c}}return t}function Pa(r){return r!==""}function M_(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function S_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PT=/^[ \t]*#include +<([\w\d./]+)>/gm;function rp(r){return r.replace(PT,LT)}const IT=new Map;function LT(r,e){let t=gt[e];if(t===void 0){const n=IT.get(e);if(n!==void 0)t=gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return rp(t)}const DT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w_(r){return r.replace(DT,UT)}function UT(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function E_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function NT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===rh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===La?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function OT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Mr:case Xr:e="ENVMAP_TYPE_CUBE";break;case Wo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Xr:e="ENVMAP_MODE_REFRACTION";break}return e}function BT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case rl:e="ENVMAP_BLENDING_MULTIPLY";break;case vy:e="ENVMAP_BLENDING_MIX";break;case xy:e="ENVMAP_BLENDING_ADD";break}return e}function zT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function kT(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,c=t.fragmentShader;const u=NT(t),h=OT(t),f=FT(t),p=BT(t),m=zT(t),g=AT(t),v=RT(s),S=i.createProgram();let x,y,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Pa).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Pa).join(`
`),y.length>0&&(y+=`
`)):(x=[E_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),y=[E_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?gt.tonemapping_pars_fragment:"",t.toneMapping!==Qi?TT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,ET("linearToOutputTexel",t.outputColorSpace),bT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pa).join(`
`)),o=rp(o),o=M_(o,t),o=S_(o,t),c=rp(c),c=M_(c,t),c=S_(c,t),o=w_(o),c=w_(c),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===np?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===np?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const T=E+x+o,w=E+y+c,U=y_(i,i.VERTEX_SHADER,T),P=y_(i,i.FRAGMENT_SHADER,w);i.attachShader(S,U),i.attachShader(S,P),t.index0AttributeName!==void 0?i.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(S,0,"position"),i.linkProgram(S);function L(N){if(r.debug.checkShaderErrors){const q=i.getProgramInfoLog(S).trim(),Y=i.getShaderInfoLog(U).trim(),j=i.getShaderInfoLog(P).trim();let te=!0,J=!0;if(i.getProgramParameter(S,i.LINK_STATUS)===!1)if(te=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,S,U,P);else{const de=x_(i,U,"vertex"),k=x_(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(S,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+q+`
`+de+`
`+k)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(Y===""||j==="")&&(J=!1);J&&(N.diagnostics={runnable:te,programLog:q,vertexShader:{log:Y,prefix:x},fragmentShader:{log:j,prefix:y}})}i.deleteShader(U),i.deleteShader(P),O=new mu(i,S),R=CT(i,S)}let O;this.getUniforms=function(){return O===void 0&&L(this),O};let R;this.getAttributes=function(){return R===void 0&&L(this),R};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(S,xT)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=MT++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=U,this.fragmentShader=P,this}let HT=0;class VT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new GT(e),t.set(e,n)),n}}class GT{constructor(e){this.id=HT++,this.code=e,this.usedTimes=0}}function WT(r,e,t,n,i,s,o){const c=new Ls,u=new VT,h=new Set,f=[],p=i.logarithmicDepthBuffer,m=i.vertexTextures;let g=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(R){return h.add(R),R===0?"uv":`uv${R}`}function x(R,A,N,q,Y){const j=q.fog,te=Y.geometry,J=R.isMeshStandardMaterial?q.environment:null,de=(R.isMeshStandardMaterial?t:e).get(R.envMap||J),k=de&&de.mapping===Wo?de.image.height:null,ie=v[R.type];R.precision!==null&&(g=i.getMaxPrecision(R.precision),g!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",g,"instead."));const ne=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ue=ne!==void 0?ne.length:0;let Re=0;te.morphAttributes.position!==void 0&&(Re=1),te.morphAttributes.normal!==void 0&&(Re=2),te.morphAttributes.color!==void 0&&(Re=3);let Ye,se,ge,De;if(ie){const Lt=Vn[ie];Ye=Lt.vertexShader,se=Lt.fragmentShader}else Ye=R.vertexShader,se=R.fragmentShader,u.update(R),ge=u.getVertexShaderID(R),De=u.getFragmentShaderID(R);const ve=r.getRenderTarget(),Ke=r.state.buffers.depth.getReversed(),it=Y.isInstancedMesh===!0,Je=Y.isBatchedMesh===!0,ot=!!R.map,he=!!R.matcap,me=!!de,z=!!R.aoMap,qe=!!R.lightMap,_e=!!R.bumpMap,Fe=!!R.normalMap,Se=!!R.displacementMap,tt=!!R.emissiveMap,Ie=!!R.metalnessMap,F=!!R.roughnessMap,C=R.anisotropy>0,Z=R.clearcoat>0,ae=R.dispersion>0,pe=R.iridescence>0,ce=R.sheen>0,Xe=R.transmission>0,Ee=C&&!!R.anisotropyMap,Oe=Z&&!!R.clearcoatMap,St=Z&&!!R.clearcoatNormalMap,ye=Z&&!!R.clearcoatRoughnessMap,Be=pe&&!!R.iridescenceMap,nt=pe&&!!R.iridescenceThicknessMap,st=ce&&!!R.sheenColorMap,ze=ce&&!!R.sheenRoughnessMap,At=!!R.specularMap,lt=!!R.specularColorMap,Ft=!!R.specularIntensityMap,V=Xe&&!!R.transmissionMap,Te=Xe&&!!R.thicknessMap,oe=!!R.gradientMap,fe=!!R.alphaMap,Ue=R.alphaTest>0,Ce=!!R.alphaHash,at=!!R.extensions;let Vt=Qi;R.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Vt=r.toneMapping);const an={shaderID:ie,shaderType:R.type,shaderName:R.name,vertexShader:Ye,fragmentShader:se,defines:R.defines,customVertexShaderID:ge,customFragmentShaderID:De,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:g,batching:Je,batchingColor:Je&&Y._colorsTexture!==null,instancing:it,instancingColor:it&&Y.instanceColor!==null,instancingMorph:it&&Y.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ve===null?r.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:ks,alphaToCoverage:!!R.alphaToCoverage,map:ot,matcap:he,envMap:me,envMapMode:me&&de.mapping,envMapCubeUVHeight:k,aoMap:z,lightMap:qe,bumpMap:_e,normalMap:Fe,displacementMap:m&&Se,emissiveMap:tt,normalMapObjectSpace:Fe&&R.normalMapType===Dy,normalMapTangentSpace:Fe&&R.normalMapType===qr,metalnessMap:Ie,roughnessMap:F,anisotropy:C,anisotropyMap:Ee,clearcoat:Z,clearcoatMap:Oe,clearcoatNormalMap:St,clearcoatRoughnessMap:ye,dispersion:ae,iridescence:pe,iridescenceMap:Be,iridescenceThicknessMap:nt,sheen:ce,sheenColorMap:st,sheenRoughnessMap:ze,specularMap:At,specularColorMap:lt,specularIntensityMap:Ft,transmission:Xe,transmissionMap:V,thicknessMap:Te,gradientMap:oe,opaque:R.transparent===!1&&R.blending===Cs&&R.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ue,alphaHash:Ce,combine:R.combine,mapUv:ot&&S(R.map.channel),aoMapUv:z&&S(R.aoMap.channel),lightMapUv:qe&&S(R.lightMap.channel),bumpMapUv:_e&&S(R.bumpMap.channel),normalMapUv:Fe&&S(R.normalMap.channel),displacementMapUv:Se&&S(R.displacementMap.channel),emissiveMapUv:tt&&S(R.emissiveMap.channel),metalnessMapUv:Ie&&S(R.metalnessMap.channel),roughnessMapUv:F&&S(R.roughnessMap.channel),anisotropyMapUv:Ee&&S(R.anisotropyMap.channel),clearcoatMapUv:Oe&&S(R.clearcoatMap.channel),clearcoatNormalMapUv:St&&S(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&S(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&S(R.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&S(R.iridescenceThicknessMap.channel),sheenColorMapUv:st&&S(R.sheenColorMap.channel),sheenRoughnessMapUv:ze&&S(R.sheenRoughnessMap.channel),specularMapUv:At&&S(R.specularMap.channel),specularColorMapUv:lt&&S(R.specularColorMap.channel),specularIntensityMapUv:Ft&&S(R.specularIntensityMap.channel),transmissionMapUv:V&&S(R.transmissionMap.channel),thicknessMapUv:Te&&S(R.thicknessMap.channel),alphaMapUv:fe&&S(R.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Fe||C),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!te.attributes.uv&&(ot||fe),fog:!!j,useFog:R.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:Ke,skinning:Y.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Re,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:Vt,decodeVideoTexture:ot&&R.map.isVideoTexture===!0&&Pt.getTransfer(R.map.colorSpace)===Ot,decodeVideoTextureEmissive:tt&&R.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(R.emissiveMap.colorSpace)===Ot,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Ii,flipSided:R.side===Wn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:at&&R.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&R.extensions.multiDraw===!0||Je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return an.vertexUv1s=h.has(1),an.vertexUv2s=h.has(2),an.vertexUv3s=h.has(3),h.clear(),an}function y(R){const A=[];if(R.shaderID?A.push(R.shaderID):(A.push(R.customVertexShaderID),A.push(R.customFragmentShaderID)),R.defines!==void 0)for(const N in R.defines)A.push(N),A.push(R.defines[N]);return R.isRawShaderMaterial===!1&&(E(A,R),T(A,R),A.push(r.outputColorSpace)),A.push(R.customProgramCacheKey),A.join()}function E(R,A){R.push(A.precision),R.push(A.outputColorSpace),R.push(A.envMapMode),R.push(A.envMapCubeUVHeight),R.push(A.mapUv),R.push(A.alphaMapUv),R.push(A.lightMapUv),R.push(A.aoMapUv),R.push(A.bumpMapUv),R.push(A.normalMapUv),R.push(A.displacementMapUv),R.push(A.emissiveMapUv),R.push(A.metalnessMapUv),R.push(A.roughnessMapUv),R.push(A.anisotropyMapUv),R.push(A.clearcoatMapUv),R.push(A.clearcoatNormalMapUv),R.push(A.clearcoatRoughnessMapUv),R.push(A.iridescenceMapUv),R.push(A.iridescenceThicknessMapUv),R.push(A.sheenColorMapUv),R.push(A.sheenRoughnessMapUv),R.push(A.specularMapUv),R.push(A.specularColorMapUv),R.push(A.specularIntensityMapUv),R.push(A.transmissionMapUv),R.push(A.thicknessMapUv),R.push(A.combine),R.push(A.fogExp2),R.push(A.sizeAttenuation),R.push(A.morphTargetsCount),R.push(A.morphAttributeCount),R.push(A.numDirLights),R.push(A.numPointLights),R.push(A.numSpotLights),R.push(A.numSpotLightMaps),R.push(A.numHemiLights),R.push(A.numRectAreaLights),R.push(A.numDirLightShadows),R.push(A.numPointLightShadows),R.push(A.numSpotLightShadows),R.push(A.numSpotLightShadowsWithMaps),R.push(A.numLightProbes),R.push(A.shadowMapType),R.push(A.toneMapping),R.push(A.numClippingPlanes),R.push(A.numClipIntersection),R.push(A.depthPacking)}function T(R,A){c.disableAll(),A.supportsVertexTextures&&c.enable(0),A.instancing&&c.enable(1),A.instancingColor&&c.enable(2),A.instancingMorph&&c.enable(3),A.matcap&&c.enable(4),A.envMap&&c.enable(5),A.normalMapObjectSpace&&c.enable(6),A.normalMapTangentSpace&&c.enable(7),A.clearcoat&&c.enable(8),A.iridescence&&c.enable(9),A.alphaTest&&c.enable(10),A.vertexColors&&c.enable(11),A.vertexAlphas&&c.enable(12),A.vertexUv1s&&c.enable(13),A.vertexUv2s&&c.enable(14),A.vertexUv3s&&c.enable(15),A.vertexTangents&&c.enable(16),A.anisotropy&&c.enable(17),A.alphaHash&&c.enable(18),A.batching&&c.enable(19),A.dispersion&&c.enable(20),A.batchingColor&&c.enable(21),R.push(c.mask),c.disableAll(),A.fog&&c.enable(0),A.useFog&&c.enable(1),A.flatShading&&c.enable(2),A.logarithmicDepthBuffer&&c.enable(3),A.reverseDepthBuffer&&c.enable(4),A.skinning&&c.enable(5),A.morphTargets&&c.enable(6),A.morphNormals&&c.enable(7),A.morphColors&&c.enable(8),A.premultipliedAlpha&&c.enable(9),A.shadowMapEnabled&&c.enable(10),A.doubleSided&&c.enable(11),A.flipSided&&c.enable(12),A.useDepthPacking&&c.enable(13),A.dithering&&c.enable(14),A.transmission&&c.enable(15),A.sheen&&c.enable(16),A.opaque&&c.enable(17),A.pointsUvs&&c.enable(18),A.decodeVideoTexture&&c.enable(19),A.decodeVideoTextureEmissive&&c.enable(20),A.alphaToCoverage&&c.enable(21),R.push(c.mask)}function w(R){const A=v[R.type];let N;if(A){const q=Vn[A];N=mh.clone(q.uniforms)}else N=R.uniforms;return N}function U(R,A){let N;for(let q=0,Y=f.length;q<Y;q++){const j=f[q];if(j.cacheKey===A){N=j,++N.usedTimes;break}}return N===void 0&&(N=new kT(r,A,R,s),f.push(N)),N}function P(R){if(--R.usedTimes===0){const A=f.indexOf(R);f[A]=f[f.length-1],f.pop(),R.destroy()}}function L(R){u.remove(R)}function O(){u.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:w,acquireProgram:U,releaseProgram:P,releaseShaderCache:L,programs:f,dispose:O}}function XT(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let c=r.get(o);return c===void 0&&(c={},r.set(o,c)),c}function n(o){r.delete(o)}function i(o,c,u){r.get(o)[c]=u}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function YT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function T_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function b_(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(p,m,g,v,S,x){let y=r[e];return y===void 0?(y={id:p.id,object:p,geometry:m,material:g,groupOrder:v,renderOrder:p.renderOrder,z:S,group:x},r[e]=y):(y.id=p.id,y.object=p,y.geometry=m,y.material=g,y.groupOrder=v,y.renderOrder=p.renderOrder,y.z=S,y.group=x),e++,y}function c(p,m,g,v,S,x){const y=o(p,m,g,v,S,x);g.transmission>0?n.push(y):g.transparent===!0?i.push(y):t.push(y)}function u(p,m,g,v,S,x){const y=o(p,m,g,v,S,x);g.transmission>0?n.unshift(y):g.transparent===!0?i.unshift(y):t.unshift(y)}function h(p,m){t.length>1&&t.sort(p||YT),n.length>1&&n.sort(m||T_),i.length>1&&i.sort(m||T_)}function f(){for(let p=e,m=r.length;p<m;p++){const g=r[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:u,finish:f,sort:h}}function qT(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new b_,r.set(n,[o])):i>=s.length?(o=new b_,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function ZT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ne};break;case"SpotLight":t={position:new D,direction:new D,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function jT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let KT=0;function JT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function QT(r){const e=new ZT,t=jT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new D);const i=new D,s=new et,o=new et;function c(h){let f=0,p=0,m=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let g=0,v=0,S=0,x=0,y=0,E=0,T=0,w=0,U=0,P=0,L=0;h.sort(JT);for(let R=0,A=h.length;R<A;R++){const N=h[R],q=N.color,Y=N.intensity,j=N.distance,te=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=q.r*Y,p+=q.g*Y,m+=q.b*Y;else if(N.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(N.sh.coefficients[J],Y);L++}else if(N.isDirectionalLight){const J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const de=N.shadow,k=t.get(N);k.shadowIntensity=de.intensity,k.shadowBias=de.bias,k.shadowNormalBias=de.normalBias,k.shadowRadius=de.radius,k.shadowMapSize=de.mapSize,n.directionalShadow[g]=k,n.directionalShadowMap[g]=te,n.directionalShadowMatrix[g]=N.shadow.matrix,E++}n.directional[g]=J,g++}else if(N.isSpotLight){const J=e.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(q).multiplyScalar(Y),J.distance=j,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,n.spot[S]=J;const de=N.shadow;if(N.map&&(n.spotLightMap[U]=N.map,U++,de.updateMatrices(N),N.castShadow&&P++),n.spotLightMatrix[S]=de.matrix,N.castShadow){const k=t.get(N);k.shadowIntensity=de.intensity,k.shadowBias=de.bias,k.shadowNormalBias=de.normalBias,k.shadowRadius=de.radius,k.shadowMapSize=de.mapSize,n.spotShadow[S]=k,n.spotShadowMap[S]=te,w++}S++}else if(N.isRectAreaLight){const J=e.get(N);J.color.copy(q).multiplyScalar(Y),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),n.rectArea[x]=J,x++}else if(N.isPointLight){const J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),J.distance=N.distance,J.decay=N.decay,N.castShadow){const de=N.shadow,k=t.get(N);k.shadowIntensity=de.intensity,k.shadowBias=de.bias,k.shadowNormalBias=de.normalBias,k.shadowRadius=de.radius,k.shadowMapSize=de.mapSize,k.shadowCameraNear=de.camera.near,k.shadowCameraFar=de.camera.far,n.pointShadow[v]=k,n.pointShadowMap[v]=te,n.pointShadowMatrix[v]=N.shadow.matrix,T++}n.point[v]=J,v++}else if(N.isHemisphereLight){const J=e.get(N);J.skyColor.copy(N.color).multiplyScalar(Y),J.groundColor.copy(N.groundColor).multiplyScalar(Y),n.hemi[y]=J,y++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=m;const O=n.hash;(O.directionalLength!==g||O.pointLength!==v||O.spotLength!==S||O.rectAreaLength!==x||O.hemiLength!==y||O.numDirectionalShadows!==E||O.numPointShadows!==T||O.numSpotShadows!==w||O.numSpotMaps!==U||O.numLightProbes!==L)&&(n.directional.length=g,n.spot.length=S,n.rectArea.length=x,n.point.length=v,n.hemi.length=y,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=w+U-P,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=L,O.directionalLength=g,O.pointLength=v,O.spotLength=S,O.rectAreaLength=x,O.hemiLength=y,O.numDirectionalShadows=E,O.numPointShadows=T,O.numSpotShadows=w,O.numSpotMaps=U,O.numLightProbes=L,n.version=KT++)}function u(h,f){let p=0,m=0,g=0,v=0,S=0;const x=f.matrixWorldInverse;for(let y=0,E=h.length;y<E;y++){const T=h[y];if(T.isDirectionalLight){const w=n.directional[p];w.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(x),p++}else if(T.isSpotLight){const w=n.spot[g];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(x),g++}else if(T.isRectAreaLight){const w=n.rectArea[v];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(x),o.identity(),s.copy(T.matrixWorld),s.premultiply(x),o.extractRotation(s),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){const w=n.point[m];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(x),m++}else if(T.isHemisphereLight){const w=n.hemi[S];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(x),S++}}}return{setup:c,setupView:u,state:n}}function A_(r){const e=new QT(r),t=[],n=[];function i(f){h.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function o(f){n.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:o}}function $T(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let c;return o===void 0?(c=new A_(r),e.set(i,[c])):s>=o.length?(c=new A_(r),o.push(c)):c=o[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}class Dp extends Nn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Iy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Up extends Nn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,tb=`
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
`;function nb(r,e,t){let n=new cl;const i=new le,s=new le,o=new Et,c=new Dp({depthPacking:Ly}),u=new Up,h={},f=t.maxTextureSize,p={[xr]:Wn,[Wn]:xr,[Ii]:Ii},m=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:eb,fragmentShader:tb}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const v=new _t;v.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new tn(v,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rh;let y=this.type;this.render=function(P,L,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;const R=r.getRenderTarget(),A=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),q=r.state;q.setBlending(yr),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Y=y!==Ci&&this.type===Ci,j=y===Ci&&this.type!==Ci;for(let te=0,J=P.length;te<J;te++){const de=P[te],k=de.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const ie=k.getFrameExtents();if(i.multiply(ie),s.copy(k.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/ie.x),i.x=s.x*ie.x,k.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/ie.y),i.y=s.y*ie.y,k.mapSize.y=s.y)),k.map===null||Y===!0||j===!0){const ue=this.type!==Ci?{minFilter:vn,magFilter:vn}:{};k.map!==null&&k.map.dispose(),k.map=new Ui(i.x,i.y,ue),k.map.texture.name=de.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const ne=k.getViewportCount();for(let ue=0;ue<ne;ue++){const Re=k.getViewport(ue);o.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),q.viewport(o),k.updateMatrices(de,ue),n=k.getFrustum(),w(L,O,k.camera,de,this.type)}k.isPointLightShadow!==!0&&this.type===Ci&&E(k,O),k.needsUpdate=!1}y=this.type,x.needsUpdate=!1,r.setRenderTarget(R,A,N)};function E(P,L){const O=e.update(S);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,g.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ui(i.x,i.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(L,null,O,m,S,null),g.uniforms.shadow_pass.value=P.mapPass.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(L,null,O,g,S,null)}function T(P,L,O,R){let A=null;const N=O.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(N!==void 0)A=N;else if(A=O.isPointLight===!0?u:c,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const q=A.uuid,Y=L.uuid;let j=h[q];j===void 0&&(j={},h[q]=j);let te=j[Y];te===void 0&&(te=A.clone(),j[Y]=te,L.addEventListener("dispose",U)),A=te}if(A.visible=L.visible,A.wireframe=L.wireframe,R===Ci?A.side=L.shadowSide!==null?L.shadowSide:L.side:A.side=L.shadowSide!==null?L.shadowSide:p[L.side],A.alphaMap=L.alphaMap,A.alphaTest=L.alphaTest,A.map=L.map,A.clipShadows=L.clipShadows,A.clippingPlanes=L.clippingPlanes,A.clipIntersection=L.clipIntersection,A.displacementMap=L.displacementMap,A.displacementScale=L.displacementScale,A.displacementBias=L.displacementBias,A.wireframeLinewidth=L.wireframeLinewidth,A.linewidth=L.linewidth,O.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const q=r.properties.get(A);q.light=O}return A}function w(P,L,O,R,A){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&A===Ci)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,P.matrixWorld);const Y=e.update(P),j=P.material;if(Array.isArray(j)){const te=Y.groups;for(let J=0,de=te.length;J<de;J++){const k=te[J],ie=j[k.materialIndex];if(ie&&ie.visible){const ne=T(P,ie,R,A);P.onBeforeShadow(r,P,L,O,Y,ne,k),r.renderBufferDirect(O,null,Y,ne,P,k),P.onAfterShadow(r,P,L,O,Y,ne,k)}}}else if(j.visible){const te=T(P,j,R,A);P.onBeforeShadow(r,P,L,O,Y,te,null),r.renderBufferDirect(O,null,Y,te,P,null),P.onAfterShadow(r,P,L,O,Y,te,null)}}const q=P.children;for(let Y=0,j=q.length;Y<j;Y++)w(q[Y],L,O,R,A)}function U(P){P.target.removeEventListener("dispose",U);for(const O in h){const R=h[O],A=P.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}const ib={[vu]:xu,[Mu]:Eu,[Su]:Tu,[Os]:wu,[xu]:vu,[Eu]:Mu,[Tu]:Su,[wu]:Os};function rb(r,e){function t(){let V=!1;const Te=new Et;let oe=null;const fe=new Et(0,0,0,0);return{setMask:function(Ue){oe!==Ue&&!V&&(r.colorMask(Ue,Ue,Ue,Ue),oe=Ue)},setLocked:function(Ue){V=Ue},setClear:function(Ue,Ce,at,Vt,an){an===!0&&(Ue*=Vt,Ce*=Vt,at*=Vt),Te.set(Ue,Ce,at,Vt),fe.equals(Te)===!1&&(r.clearColor(Ue,Ce,at,Vt),fe.copy(Te))},reset:function(){V=!1,oe=null,fe.set(-1,0,0,0)}}}function n(){let V=!1,Te=!1,oe=null,fe=null,Ue=null;return{setReversed:function(Ce){if(Te!==Ce){const at=e.get("EXT_clip_control");Te?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);const Vt=Ue;Ue=null,this.setClear(Vt)}Te=Ce},getReversed:function(){return Te},setTest:function(Ce){Ce?ve(r.DEPTH_TEST):Ke(r.DEPTH_TEST)},setMask:function(Ce){oe!==Ce&&!V&&(r.depthMask(Ce),oe=Ce)},setFunc:function(Ce){if(Te&&(Ce=ib[Ce]),fe!==Ce){switch(Ce){case vu:r.depthFunc(r.NEVER);break;case xu:r.depthFunc(r.ALWAYS);break;case Mu:r.depthFunc(r.LESS);break;case Os:r.depthFunc(r.LEQUAL);break;case Su:r.depthFunc(r.EQUAL);break;case wu:r.depthFunc(r.GEQUAL);break;case Eu:r.depthFunc(r.GREATER);break;case Tu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}fe=Ce}},setLocked:function(Ce){V=Ce},setClear:function(Ce){Ue!==Ce&&(Te&&(Ce=1-Ce),r.clearDepth(Ce),Ue=Ce)},reset:function(){V=!1,oe=null,fe=null,Ue=null,Te=!1}}}function i(){let V=!1,Te=null,oe=null,fe=null,Ue=null,Ce=null,at=null,Vt=null,an=null;return{setTest:function(Lt){V||(Lt?ve(r.STENCIL_TEST):Ke(r.STENCIL_TEST))},setMask:function(Lt){Te!==Lt&&!V&&(r.stencilMask(Lt),Te=Lt)},setFunc:function(Lt,Yn,wi){(oe!==Lt||fe!==Yn||Ue!==wi)&&(r.stencilFunc(Lt,Yn,wi),oe=Lt,fe=Yn,Ue=wi)},setOp:function(Lt,Yn,wi){(Ce!==Lt||at!==Yn||Vt!==wi)&&(r.stencilOp(Lt,Yn,wi),Ce=Lt,at=Yn,Vt=wi)},setLocked:function(Lt){V=Lt},setClear:function(Lt){an!==Lt&&(r.clearStencil(Lt),an=Lt)},reset:function(){V=!1,Te=null,oe=null,fe=null,Ue=null,Ce=null,at=null,Vt=null,an=null}}}const s=new t,o=new n,c=new i,u=new WeakMap,h=new WeakMap;let f={},p={},m=new WeakMap,g=[],v=null,S=!1,x=null,y=null,E=null,T=null,w=null,U=null,P=null,L=new Ne(0,0,0),O=0,R=!1,A=null,N=null,q=null,Y=null,j=null;const te=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,de=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(k)[1]),J=de>=1):k.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),J=de>=2);let ie=null,ne={};const ue=r.getParameter(r.SCISSOR_BOX),Re=r.getParameter(r.VIEWPORT),Ye=new Et().fromArray(ue),se=new Et().fromArray(Re);function ge(V,Te,oe,fe){const Ue=new Uint8Array(4),Ce=r.createTexture();r.bindTexture(V,Ce),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let at=0;at<oe;at++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Te,0,r.RGBA,1,1,fe,0,r.RGBA,r.UNSIGNED_BYTE,Ue):r.texImage2D(Te+at,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ue);return Ce}const De={};De[r.TEXTURE_2D]=ge(r.TEXTURE_2D,r.TEXTURE_2D,1),De[r.TEXTURE_CUBE_MAP]=ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[r.TEXTURE_2D_ARRAY]=ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),De[r.TEXTURE_3D]=ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),c.setClear(0),ve(r.DEPTH_TEST),o.setFunc(Os),_e(!1),Fe(Kd),ve(r.CULL_FACE),z(yr);function ve(V){f[V]!==!0&&(r.enable(V),f[V]=!0)}function Ke(V){f[V]!==!1&&(r.disable(V),f[V]=!1)}function it(V,Te){return p[V]!==Te?(r.bindFramebuffer(V,Te),p[V]=Te,V===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=Te),V===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=Te),!0):!1}function Je(V,Te){let oe=g,fe=!1;if(V){oe=m.get(Te),oe===void 0&&(oe=[],m.set(Te,oe));const Ue=V.textures;if(oe.length!==Ue.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let Ce=0,at=Ue.length;Ce<at;Ce++)oe[Ce]=r.COLOR_ATTACHMENT0+Ce;oe.length=Ue.length,fe=!0}}else oe[0]!==r.BACK&&(oe[0]=r.BACK,fe=!0);fe&&r.drawBuffers(oe)}function ot(V){return v!==V?(r.useProgram(V),v=V,!0):!1}const he={[Gr]:r.FUNC_ADD,[ny]:r.FUNC_SUBTRACT,[iy]:r.FUNC_REVERSE_SUBTRACT};he[ry]=r.MIN,he[sy]=r.MAX;const me={[oy]:r.ZERO,[ay]:r.ONE,[ly]:r.SRC_COLOR,[_u]:r.SRC_ALPHA,[py]:r.SRC_ALPHA_SATURATE,[fy]:r.DST_COLOR,[uy]:r.DST_ALPHA,[cy]:r.ONE_MINUS_SRC_COLOR,[yu]:r.ONE_MINUS_SRC_ALPHA,[dy]:r.ONE_MINUS_DST_COLOR,[hy]:r.ONE_MINUS_DST_ALPHA,[my]:r.CONSTANT_COLOR,[gy]:r.ONE_MINUS_CONSTANT_COLOR,[_y]:r.CONSTANT_ALPHA,[yy]:r.ONE_MINUS_CONSTANT_ALPHA};function z(V,Te,oe,fe,Ue,Ce,at,Vt,an,Lt){if(V===yr){S===!0&&(Ke(r.BLEND),S=!1);return}if(S===!1&&(ve(r.BLEND),S=!0),V!==ty){if(V!==x||Lt!==R){if((y!==Gr||w!==Gr)&&(r.blendEquation(r.FUNC_ADD),y=Gr,w=Gr),Lt)switch(V){case Cs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jd:r.blendFunc(r.ONE,r.ONE);break;case Qd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $d:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Cs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jd:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Qd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $d:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}E=null,T=null,U=null,P=null,L.set(0,0,0),O=0,x=V,R=Lt}return}Ue=Ue||Te,Ce=Ce||oe,at=at||fe,(Te!==y||Ue!==w)&&(r.blendEquationSeparate(he[Te],he[Ue]),y=Te,w=Ue),(oe!==E||fe!==T||Ce!==U||at!==P)&&(r.blendFuncSeparate(me[oe],me[fe],me[Ce],me[at]),E=oe,T=fe,U=Ce,P=at),(Vt.equals(L)===!1||an!==O)&&(r.blendColor(Vt.r,Vt.g,Vt.b,an),L.copy(Vt),O=an),x=V,R=!1}function qe(V,Te){V.side===Ii?Ke(r.CULL_FACE):ve(r.CULL_FACE);let oe=V.side===Wn;Te&&(oe=!oe),_e(oe),V.blending===Cs&&V.transparent===!1?z(yr):z(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const fe=V.stencilWrite;c.setTest(fe),fe&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),tt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ve(r.SAMPLE_ALPHA_TO_COVERAGE):Ke(r.SAMPLE_ALPHA_TO_COVERAGE)}function _e(V){A!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),A=V)}function Fe(V){V!==Q0?(ve(r.CULL_FACE),V!==N&&(V===Kd?r.cullFace(r.BACK):V===$0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ke(r.CULL_FACE),N=V}function Se(V){V!==q&&(J&&r.lineWidth(V),q=V)}function tt(V,Te,oe){V?(ve(r.POLYGON_OFFSET_FILL),(Y!==Te||j!==oe)&&(r.polygonOffset(Te,oe),Y=Te,j=oe)):Ke(r.POLYGON_OFFSET_FILL)}function Ie(V){V?ve(r.SCISSOR_TEST):Ke(r.SCISSOR_TEST)}function F(V){V===void 0&&(V=r.TEXTURE0+te-1),ie!==V&&(r.activeTexture(V),ie=V)}function C(V,Te,oe){oe===void 0&&(ie===null?oe=r.TEXTURE0+te-1:oe=ie);let fe=ne[oe];fe===void 0&&(fe={type:void 0,texture:void 0},ne[oe]=fe),(fe.type!==V||fe.texture!==Te)&&(ie!==oe&&(r.activeTexture(oe),ie=oe),r.bindTexture(V,Te||De[V]),fe.type=V,fe.texture=Te)}function Z(){const V=ne[ie];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ae(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pe(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ce(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xe(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Be(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function nt(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function st(V){Ye.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),Ye.copy(V))}function ze(V){se.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),se.copy(V))}function At(V,Te){let oe=h.get(Te);oe===void 0&&(oe=new WeakMap,h.set(Te,oe));let fe=oe.get(V);fe===void 0&&(fe=r.getUniformBlockIndex(Te,V.name),oe.set(V,fe))}function lt(V,Te){const fe=h.get(Te).get(V);u.get(Te)!==fe&&(r.uniformBlockBinding(Te,fe,V.__bindingPointIndex),u.set(Te,fe))}function Ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},ie=null,ne={},p={},m=new WeakMap,g=[],v=null,S=!1,x=null,y=null,E=null,T=null,w=null,U=null,P=null,L=new Ne(0,0,0),O=0,R=!1,A=null,N=null,q=null,Y=null,j=null,Ye.set(0,0,r.canvas.width,r.canvas.height),se.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),c.reset()}return{buffers:{color:s,depth:o,stencil:c},enable:ve,disable:Ke,bindFramebuffer:it,drawBuffers:Je,useProgram:ot,setBlending:z,setMaterial:qe,setFlipSided:_e,setCullFace:Fe,setLineWidth:Se,setPolygonOffset:tt,setScissorTest:Ie,activeTexture:F,bindTexture:C,unbindTexture:Z,compressedTexImage2D:ae,compressedTexImage3D:pe,texImage2D:Be,texImage3D:nt,updateUBOMapping:At,uniformBlockBinding:lt,texStorage2D:St,texStorage3D:ye,texSubImage2D:ce,texSubImage3D:Xe,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Oe,scissor:st,viewport:ze,reset:Ft}}function sb(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function ob(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function ab(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function sp(r,e,t,n){const i=lb(n);switch(t){case vp:return r*e;case Mp:return r*e;case Sp:return r*e*2;case uh:return r*e/i.components*i.byteLength;case sl:return r*e/i.components*i.byteLength;case wp:return r*e*2/i.components*i.byteLength;case hh:return r*e*2/i.components*i.byteLength;case xp:return r*e*3/i.components*i.byteLength;case bn:return r*e*4/i.components*i.byteLength;case fh:return r*e*4/i.components*i.byteLength;case Da:case Ua:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Na:case Oa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Au:case Cu:return Math.max(r,16)*Math.max(e,8)/4;case bu:case Ru:return Math.max(r,8)*Math.max(e,8)/2;case Pu:case Iu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Lu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Du:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Nu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ou:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Fu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Bu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case zu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ku:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Hu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Vu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Gu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Wu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Xu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Yu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Fa:case qu:case Zu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ep:case ju:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ku:case Ju:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lb(r){switch(r){case Di:case gp:return{byteLength:1,components:1};case Fo:case _p:case Xo:return{byteLength:2,components:1};case lh:case ch:return{byteLength:2,components:4};case Sr:case ah:case ei:return{byteLength:4,components:1};case yp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}const cb={contain:sb,cover:ob,fill:ab,getByteLength:sp};function ub(r,e,t,n,i,s,o){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new le,f=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(F,C){return g?new OffscreenCanvas(F,C):qa("canvas")}function S(F,C,Z){let ae=1;const pe=Ie(F);if((pe.width>Z||pe.height>Z)&&(ae=Z/Math.max(pe.width,pe.height)),ae<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ce=Math.floor(ae*pe.width),Xe=Math.floor(ae*pe.height);p===void 0&&(p=v(ce,Xe));const Ee=C?v(ce,Xe):p;return Ee.width=ce,Ee.height=Xe,Ee.getContext("2d").drawImage(F,0,0,ce,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ce+"x"+Xe+")."),Ee}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),F;return F}function x(F){return F.generateMipmaps}function y(F){r.generateMipmap(F)}function E(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(F,C,Z,ae,pe=!1){if(F!==null){if(r[F]!==void 0)return r[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ce=C;if(C===r.RED&&(Z===r.FLOAT&&(ce=r.R32F),Z===r.HALF_FLOAT&&(ce=r.R16F),Z===r.UNSIGNED_BYTE&&(ce=r.R8)),C===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ce=r.R8UI),Z===r.UNSIGNED_SHORT&&(ce=r.R16UI),Z===r.UNSIGNED_INT&&(ce=r.R32UI),Z===r.BYTE&&(ce=r.R8I),Z===r.SHORT&&(ce=r.R16I),Z===r.INT&&(ce=r.R32I)),C===r.RG&&(Z===r.FLOAT&&(ce=r.RG32F),Z===r.HALF_FLOAT&&(ce=r.RG16F),Z===r.UNSIGNED_BYTE&&(ce=r.RG8)),C===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ce=r.RG8UI),Z===r.UNSIGNED_SHORT&&(ce=r.RG16UI),Z===r.UNSIGNED_INT&&(ce=r.RG32UI),Z===r.BYTE&&(ce=r.RG8I),Z===r.SHORT&&(ce=r.RG16I),Z===r.INT&&(ce=r.RG32I)),C===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),Z===r.UNSIGNED_INT&&(ce=r.RGB32UI),Z===r.BYTE&&(ce=r.RGB8I),Z===r.SHORT&&(ce=r.RGB16I),Z===r.INT&&(ce=r.RGB32I)),C===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),Z===r.UNSIGNED_INT&&(ce=r.RGBA32UI),Z===r.BYTE&&(ce=r.RGBA8I),Z===r.SHORT&&(ce=r.RGBA16I),Z===r.INT&&(ce=r.RGBA32I)),C===r.RGB&&Z===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),C===r.RGBA){const Xe=pe?ol:Pt.getTransfer(ae);Z===r.FLOAT&&(ce=r.RGBA32F),Z===r.HALF_FLOAT&&(ce=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(ce=Xe===Ot?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function w(F,C){let Z;return F?C===null||C===Sr||C===Fs?Z=r.DEPTH24_STENCIL8:C===ei?Z=r.DEPTH32F_STENCIL8:C===Fo&&(Z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Sr||C===Fs?Z=r.DEPTH_COMPONENT24:C===ei?Z=r.DEPTH_COMPONENT32F:C===Fo&&(Z=r.DEPTH_COMPONENT16),Z}function U(F,C){return x(F)===!0||F.isFramebufferTexture&&F.minFilter!==vn&&F.minFilter!==on?Math.log2(Math.max(C.width,C.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?C.mipmaps.length:1}function P(F){const C=F.target;C.removeEventListener("dispose",P),O(C),C.isVideoTexture&&f.delete(C)}function L(F){const C=F.target;C.removeEventListener("dispose",L),A(C)}function O(F){const C=n.get(F);if(C.__webglInit===void 0)return;const Z=F.source,ae=m.get(Z);if(ae){const pe=ae[C.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&R(F),Object.keys(ae).length===0&&m.delete(Z)}n.remove(F)}function R(F){const C=n.get(F);r.deleteTexture(C.__webglTexture);const Z=F.source,ae=m.get(Z);delete ae[C.__cacheKey],o.memory.textures--}function A(F){const C=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(C.__webglFramebuffer[ae]))for(let pe=0;pe<C.__webglFramebuffer[ae].length;pe++)r.deleteFramebuffer(C.__webglFramebuffer[ae][pe]);else r.deleteFramebuffer(C.__webglFramebuffer[ae]);C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[ae])}else{if(Array.isArray(C.__webglFramebuffer))for(let ae=0;ae<C.__webglFramebuffer.length;ae++)r.deleteFramebuffer(C.__webglFramebuffer[ae]);else r.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ae=0;ae<C.__webglColorRenderbuffer.length;ae++)C.__webglColorRenderbuffer[ae]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[ae]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const Z=F.textures;for(let ae=0,pe=Z.length;ae<pe;ae++){const ce=n.get(Z[ae]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),o.memory.textures--),n.remove(Z[ae])}n.remove(F)}let N=0;function q(){N=0}function Y(){const F=N;return F>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+i.maxTextures),N+=1,F}function j(F){const C=[];return C.push(F.wrapS),C.push(F.wrapT),C.push(F.wrapR||0),C.push(F.magFilter),C.push(F.minFilter),C.push(F.anisotropy),C.push(F.internalFormat),C.push(F.format),C.push(F.type),C.push(F.generateMipmaps),C.push(F.premultiplyAlpha),C.push(F.flipY),C.push(F.unpackAlignment),C.push(F.colorSpace),C.join()}function te(F,C){const Z=n.get(F);if(F.isVideoTexture&&Se(F),F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){const ae=F.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(Z,F,C);return}}t.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+C)}function J(F,C){const Z=n.get(F);if(F.version>0&&Z.__version!==F.version){se(Z,F,C);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+C)}function de(F,C){const Z=n.get(F);if(F.version>0&&Z.__version!==F.version){se(Z,F,C);return}t.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+C)}function k(F,C){const Z=n.get(F);if(F.version>0&&Z.__version!==F.version){ge(Z,F,C);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+C)}const ie={[No]:r.REPEAT,[li]:r.CLAMP_TO_EDGE,[Oo]:r.MIRRORED_REPEAT},ne={[vn]:r.NEAREST,[oh]:r.NEAREST_MIPMAP_NEAREST,[Es]:r.NEAREST_MIPMAP_LINEAR,[on]:r.LINEAR,[Do]:r.LINEAR_MIPMAP_NEAREST,[Li]:r.LINEAR_MIPMAP_LINEAR},ue={[Uy]:r.NEVER,[ky]:r.ALWAYS,[Ny]:r.LESS,[bp]:r.LEQUAL,[Oy]:r.EQUAL,[zy]:r.GEQUAL,[Fy]:r.GREATER,[By]:r.NOTEQUAL};function Re(F,C){if(C.type===ei&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===on||C.magFilter===Do||C.magFilter===Es||C.magFilter===Li||C.minFilter===on||C.minFilter===Do||C.minFilter===Es||C.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,ie[C.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,ie[C.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,ie[C.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,ne[C.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,ne[C.minFilter]),C.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,ue[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===vn||C.minFilter!==Es&&C.minFilter!==Li||C.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(F,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Ye(F,C){let Z=!1;F.__webglInit===void 0&&(F.__webglInit=!0,C.addEventListener("dispose",P));const ae=C.source;let pe=m.get(ae);pe===void 0&&(pe={},m.set(ae,pe));const ce=j(C);if(ce!==F.__cacheKey){pe[ce]===void 0&&(pe[ce]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),pe[ce].usedTimes++;const Xe=pe[F.__cacheKey];Xe!==void 0&&(pe[F.__cacheKey].usedTimes--,Xe.usedTimes===0&&R(C)),F.__cacheKey=ce,F.__webglTexture=pe[ce].texture}return Z}function se(F,C,Z){let ae=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ae=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ae=r.TEXTURE_3D);const pe=Ye(F,C),ce=C.source;t.bindTexture(ae,F.__webglTexture,r.TEXTURE0+Z);const Xe=n.get(ce);if(ce.version!==Xe.__version||pe===!0){t.activeTexture(r.TEXTURE0+Z);const Ee=Pt.getPrimaries(Pt.workingColorSpace),Oe=C.colorSpace===ji?null:Pt.getPrimaries(C.colorSpace),St=C.colorSpace===ji||Ee===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let ye=S(C.image,!1,i.maxTextureSize);ye=tt(C,ye);const Be=s.convert(C.format,C.colorSpace),nt=s.convert(C.type);let st=T(C.internalFormat,Be,nt,C.colorSpace,C.isVideoTexture);Re(ae,C);let ze;const At=C.mipmaps,lt=C.isVideoTexture!==!0,Ft=Xe.__version===void 0||pe===!0,V=ce.dataReady,Te=U(C,ye);if(C.isDepthTexture)st=w(C.format===Bs,C.type),Ft&&(lt?t.texStorage2D(r.TEXTURE_2D,1,st,ye.width,ye.height):t.texImage2D(r.TEXTURE_2D,0,st,ye.width,ye.height,0,Be,nt,null));else if(C.isDataTexture)if(At.length>0){lt&&Ft&&t.texStorage2D(r.TEXTURE_2D,Te,st,At[0].width,At[0].height);for(let oe=0,fe=At.length;oe<fe;oe++)ze=At[oe],lt?V&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,ze.width,ze.height,Be,nt,ze.data):t.texImage2D(r.TEXTURE_2D,oe,st,ze.width,ze.height,0,Be,nt,ze.data);C.generateMipmaps=!1}else lt?(Ft&&t.texStorage2D(r.TEXTURE_2D,Te,st,ye.width,ye.height),V&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye.width,ye.height,Be,nt,ye.data)):t.texImage2D(r.TEXTURE_2D,0,st,ye.width,ye.height,0,Be,nt,ye.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){lt&&Ft&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Te,st,At[0].width,At[0].height,ye.depth);for(let oe=0,fe=At.length;oe<fe;oe++)if(ze=At[oe],C.format!==bn)if(Be!==null)if(lt){if(V)if(C.layerUpdates.size>0){const Ue=sp(ze.width,ze.height,C.format,C.type);for(const Ce of C.layerUpdates){const at=ze.data.subarray(Ce*Ue/ze.data.BYTES_PER_ELEMENT,(Ce+1)*Ue/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,Ce,ze.width,ze.height,1,Be,at)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,ze.width,ze.height,ye.depth,Be,ze.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,oe,st,ze.width,ze.height,ye.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?V&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,ze.width,ze.height,ye.depth,Be,nt,ze.data):t.texImage3D(r.TEXTURE_2D_ARRAY,oe,st,ze.width,ze.height,ye.depth,0,Be,nt,ze.data)}else{lt&&Ft&&t.texStorage2D(r.TEXTURE_2D,Te,st,At[0].width,At[0].height);for(let oe=0,fe=At.length;oe<fe;oe++)ze=At[oe],C.format!==bn?Be!==null?lt?V&&t.compressedTexSubImage2D(r.TEXTURE_2D,oe,0,0,ze.width,ze.height,Be,ze.data):t.compressedTexImage2D(r.TEXTURE_2D,oe,st,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?V&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,ze.width,ze.height,Be,nt,ze.data):t.texImage2D(r.TEXTURE_2D,oe,st,ze.width,ze.height,0,Be,nt,ze.data)}else if(C.isDataArrayTexture)if(lt){if(Ft&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Te,st,ye.width,ye.height,ye.depth),V)if(C.layerUpdates.size>0){const oe=sp(ye.width,ye.height,C.format,C.type);for(const fe of C.layerUpdates){const Ue=ye.data.subarray(fe*oe/ye.data.BYTES_PER_ELEMENT,(fe+1)*oe/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,fe,ye.width,ye.height,1,Be,nt,Ue)}C.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Be,nt,ye.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,st,ye.width,ye.height,ye.depth,0,Be,nt,ye.data);else if(C.isData3DTexture)lt?(Ft&&t.texStorage3D(r.TEXTURE_3D,Te,st,ye.width,ye.height,ye.depth),V&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Be,nt,ye.data)):t.texImage3D(r.TEXTURE_3D,0,st,ye.width,ye.height,ye.depth,0,Be,nt,ye.data);else if(C.isFramebufferTexture){if(Ft)if(lt)t.texStorage2D(r.TEXTURE_2D,Te,st,ye.width,ye.height);else{let oe=ye.width,fe=ye.height;for(let Ue=0;Ue<Te;Ue++)t.texImage2D(r.TEXTURE_2D,Ue,st,oe,fe,0,Be,nt,null),oe>>=1,fe>>=1}}else if(At.length>0){if(lt&&Ft){const oe=Ie(At[0]);t.texStorage2D(r.TEXTURE_2D,Te,st,oe.width,oe.height)}for(let oe=0,fe=At.length;oe<fe;oe++)ze=At[oe],lt?V&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,Be,nt,ze):t.texImage2D(r.TEXTURE_2D,oe,st,Be,nt,ze);C.generateMipmaps=!1}else if(lt){if(Ft){const oe=Ie(ye);t.texStorage2D(r.TEXTURE_2D,Te,st,oe.width,oe.height)}V&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Be,nt,ye)}else t.texImage2D(r.TEXTURE_2D,0,st,Be,nt,ye);x(C)&&y(ae),Xe.__version=ce.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function ge(F,C,Z){if(C.image.length!==6)return;const ae=Ye(F,C),pe=C.source;t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+Z);const ce=n.get(pe);if(pe.version!==ce.__version||ae===!0){t.activeTexture(r.TEXTURE0+Z);const Xe=Pt.getPrimaries(Pt.workingColorSpace),Ee=C.colorSpace===ji?null:Pt.getPrimaries(C.colorSpace),Oe=C.colorSpace===ji||Xe===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const St=C.isCompressedTexture||C.image[0].isCompressedTexture,ye=C.image[0]&&C.image[0].isDataTexture,Be=[];for(let fe=0;fe<6;fe++)!St&&!ye?Be[fe]=S(C.image[fe],!0,i.maxCubemapSize):Be[fe]=ye?C.image[fe].image:C.image[fe],Be[fe]=tt(C,Be[fe]);const nt=Be[0],st=s.convert(C.format,C.colorSpace),ze=s.convert(C.type),At=T(C.internalFormat,st,ze,C.colorSpace),lt=C.isVideoTexture!==!0,Ft=ce.__version===void 0||ae===!0,V=pe.dataReady;let Te=U(C,nt);Re(r.TEXTURE_CUBE_MAP,C);let oe;if(St){lt&&Ft&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Te,At,nt.width,nt.height);for(let fe=0;fe<6;fe++){oe=Be[fe].mipmaps;for(let Ue=0;Ue<oe.length;Ue++){const Ce=oe[Ue];C.format!==bn?st!==null?lt?V&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,0,0,Ce.width,Ce.height,st,Ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,At,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,0,0,Ce.width,Ce.height,st,ze,Ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,At,Ce.width,Ce.height,0,st,ze,Ce.data)}}}else{if(oe=C.mipmaps,lt&&Ft){oe.length>0&&Te++;const fe=Ie(Be[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Te,At,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(ye){lt?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Be[fe].width,Be[fe].height,st,ze,Be[fe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,At,Be[fe].width,Be[fe].height,0,st,ze,Be[fe].data);for(let Ue=0;Ue<oe.length;Ue++){const at=oe[Ue].image[fe].image;lt?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,0,0,at.width,at.height,st,ze,at.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,At,at.width,at.height,0,st,ze,at.data)}}else{lt?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,st,ze,Be[fe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,At,st,ze,Be[fe]);for(let Ue=0;Ue<oe.length;Ue++){const Ce=oe[Ue];lt?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,0,0,st,ze,Ce.image[fe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,At,st,ze,Ce.image[fe])}}}x(C)&&y(r.TEXTURE_CUBE_MAP),ce.__version=pe.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function De(F,C,Z,ae,pe,ce){const Xe=s.convert(Z.format,Z.colorSpace),Ee=s.convert(Z.type),Oe=T(Z.internalFormat,Xe,Ee,Z.colorSpace),St=n.get(C),ye=n.get(Z);if(ye.__renderTarget=C,!St.__hasExternalTextures){const Be=Math.max(1,C.width>>ce),nt=Math.max(1,C.height>>ce);pe===r.TEXTURE_3D||pe===r.TEXTURE_2D_ARRAY?t.texImage3D(pe,ce,Oe,Be,nt,C.depth,0,Xe,Ee,null):t.texImage2D(pe,ce,Oe,Be,nt,0,Xe,Ee,null)}t.bindFramebuffer(r.FRAMEBUFFER,F),Fe(C)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,pe,ye.__webglTexture,0,_e(C)):(pe===r.TEXTURE_2D||pe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ae,pe,ye.__webglTexture,ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ve(F,C,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,F),C.depthBuffer){const ae=C.depthTexture,pe=ae&&ae.isDepthTexture?ae.type:null,ce=w(C.stencilBuffer,pe),Xe=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=_e(C);Fe(C)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ee,ce,C.width,C.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,ce,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,ce,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Xe,r.RENDERBUFFER,F)}else{const ae=C.textures;for(let pe=0;pe<ae.length;pe++){const ce=ae[pe],Xe=s.convert(ce.format,ce.colorSpace),Ee=s.convert(ce.type),Oe=T(ce.internalFormat,Xe,Ee,ce.colorSpace),St=_e(C);Z&&Fe(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,St,Oe,C.width,C.height):Fe(C)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,St,Oe,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,Oe,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ke(F,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,F),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=n.get(C.depthTexture);ae.__renderTarget=C,(!ae.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),te(C.depthTexture,0);const pe=ae.__webglTexture,ce=_e(C);if(C.depthTexture.format===Ps)Fe(C)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,pe,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,pe,0);else if(C.depthTexture.format===Bs)Fe(C)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,pe,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function it(F){const C=n.get(F),Z=F.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==F.depthTexture){const ae=F.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),ae){const pe=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,ae.removeEventListener("dispose",pe)};ae.addEventListener("dispose",pe),C.__depthDisposeCallback=pe}C.__boundDepthTexture=ae}if(F.depthTexture&&!C.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Ke(C.__webglFramebuffer,F)}else if(Z){C.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[ae]),C.__webglDepthbuffer[ae]===void 0)C.__webglDepthbuffer[ae]=r.createRenderbuffer(),ve(C.__webglDepthbuffer[ae],F,!1);else{const pe=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=C.__webglDepthbuffer[ae];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,ce)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=r.createRenderbuffer(),ve(C.__webglDepthbuffer,F,!1);else{const ae=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=C.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,pe)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(F,C,Z){const ae=n.get(F);C!==void 0&&De(ae.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&it(F)}function ot(F){const C=F.texture,Z=n.get(F),ae=n.get(C);F.addEventListener("dispose",L);const pe=F.textures,ce=F.isWebGLCubeRenderTarget===!0,Xe=pe.length>1;if(Xe||(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=C.version,o.memory.textures++),ce){Z.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(C.mipmaps&&C.mipmaps.length>0){Z.__webglFramebuffer[Ee]=[];for(let Oe=0;Oe<C.mipmaps.length;Oe++)Z.__webglFramebuffer[Ee][Oe]=r.createFramebuffer()}else Z.__webglFramebuffer[Ee]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ee=0;Ee<C.mipmaps.length;Ee++)Z.__webglFramebuffer[Ee]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Xe)for(let Ee=0,Oe=pe.length;Ee<Oe;Ee++){const St=n.get(pe[Ee]);St.__webglTexture===void 0&&(St.__webglTexture=r.createTexture(),o.memory.textures++)}if(F.samples>0&&Fe(F)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ee=0;Ee<pe.length;Ee++){const Oe=pe[Ee];Z.__webglColorRenderbuffer[Ee]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ee]);const St=s.convert(Oe.format,Oe.colorSpace),ye=s.convert(Oe.type),Be=T(Oe.internalFormat,St,ye,Oe.colorSpace,F.isXRRenderTarget===!0),nt=_e(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,nt,Be,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ee])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),ve(Z.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),Re(r.TEXTURE_CUBE_MAP,C);for(let Ee=0;Ee<6;Ee++)if(C.mipmaps&&C.mipmaps.length>0)for(let Oe=0;Oe<C.mipmaps.length;Oe++)De(Z.__webglFramebuffer[Ee][Oe],F,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Oe);else De(Z.__webglFramebuffer[Ee],F,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);x(C)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Ee=0,Oe=pe.length;Ee<Oe;Ee++){const St=pe[Ee],ye=n.get(St);t.bindTexture(r.TEXTURE_2D,ye.__webglTexture),Re(r.TEXTURE_2D,St),De(Z.__webglFramebuffer,F,St,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,0),x(St)&&y(r.TEXTURE_2D)}t.unbindTexture()}else{let Ee=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ee=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ee,ae.__webglTexture),Re(Ee,C),C.mipmaps&&C.mipmaps.length>0)for(let Oe=0;Oe<C.mipmaps.length;Oe++)De(Z.__webglFramebuffer[Oe],F,C,r.COLOR_ATTACHMENT0,Ee,Oe);else De(Z.__webglFramebuffer,F,C,r.COLOR_ATTACHMENT0,Ee,0);x(C)&&y(Ee),t.unbindTexture()}F.depthBuffer&&it(F)}function he(F){const C=F.textures;for(let Z=0,ae=C.length;Z<ae;Z++){const pe=C[Z];if(x(pe)){const ce=E(F),Xe=n.get(pe).__webglTexture;t.bindTexture(ce,Xe),y(ce),t.unbindTexture()}}}const me=[],z=[];function qe(F){if(F.samples>0){if(Fe(F)===!1){const C=F.textures,Z=F.width,ae=F.height;let pe=r.COLOR_BUFFER_BIT;const ce=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Xe=n.get(F),Ee=C.length>1;if(Ee)for(let Oe=0;Oe<C.length;Oe++)t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Oe=0;Oe<C.length;Oe++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(pe|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(pe|=r.STENCIL_BUFFER_BIT)),Ee){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[Oe]);const St=n.get(C[Oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,St,0)}r.blitFramebuffer(0,0,Z,ae,0,0,Z,ae,pe,r.NEAREST),u===!0&&(me.length=0,z.length=0,me.push(r.COLOR_ATTACHMENT0+Oe),F.depthBuffer&&F.resolveDepthBuffer===!1&&(me.push(ce),z.push(ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,z)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ee)for(let Oe=0;Oe<C.length;Oe++){t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[Oe]);const St=n.get(C[Oe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,St,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&u){const C=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}}function _e(F){return Math.min(i.maxSamples,F.samples)}function Fe(F){const C=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Se(F){const C=o.render.frame;f.get(F)!==C&&(f.set(F,C),F.update())}function tt(F,C){const Z=F.colorSpace,ae=F.format,pe=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Z!==ks&&Z!==ji&&(Pt.getTransfer(Z)===Ot?(ae!==bn||pe!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),C}function Ie(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=Y,this.resetTextureUnits=q,this.setTexture2D=te,this.setTexture2DArray=J,this.setTexture3D=de,this.setTextureCube=k,this.rebindTextures=Je,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Fe}function ev(r,e){function t(n,i=ji){let s;const o=Pt.getTransfer(i);if(n===Di)return r.UNSIGNED_BYTE;if(n===lh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ch)return r.UNSIGNED_SHORT_5_5_5_1;if(n===yp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===gp)return r.BYTE;if(n===_p)return r.SHORT;if(n===Fo)return r.UNSIGNED_SHORT;if(n===ah)return r.INT;if(n===Sr)return r.UNSIGNED_INT;if(n===ei)return r.FLOAT;if(n===Xo)return r.HALF_FLOAT;if(n===vp)return r.ALPHA;if(n===xp)return r.RGB;if(n===bn)return r.RGBA;if(n===Mp)return r.LUMINANCE;if(n===Sp)return r.LUMINANCE_ALPHA;if(n===Ps)return r.DEPTH_COMPONENT;if(n===Bs)return r.DEPTH_STENCIL;if(n===uh)return r.RED;if(n===sl)return r.RED_INTEGER;if(n===wp)return r.RG;if(n===hh)return r.RG_INTEGER;if(n===fh)return r.RGBA_INTEGER;if(n===Da||n===Ua||n===Na||n===Oa)if(o===Ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Da)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Da)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ua)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Na)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bu||n===Au||n===Ru||n===Cu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===bu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Au)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ru)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pu||n===Iu||n===Lu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Pu||n===Iu)return o===Ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Lu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Du||n===Uu||n===Nu||n===Ou||n===Fu||n===Bu||n===zu||n===ku||n===Hu||n===Vu||n===Gu||n===Wu||n===Xu||n===Yu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Du)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ou)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ku)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fa||n===qu||n===Zu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Fa)return o===Ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ep||n===ju||n===Ku||n===Ju)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Fa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ju)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ku)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ju)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class tv extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Po extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hb={type:"move"};class md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const c=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const S of e.hand.values()){const x=t.getJointPose(S,n),y=this._getHandJoint(h,S);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const f=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],m=f.position.distanceTo(p.position),g=.02,v=.005;h.inputState.pinching&&m>g+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=g-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(hb)))}return c!==null&&(c.visible=i!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Po;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const fb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,db=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Jt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Si({vertexShader:fb,fragmentShader:db,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tn(new Yo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mb extends tr{constructor(e,t){super();const n=this;let i=null,s=1,o=null,c="local-floor",u=1,h=null,f=null,p=null,m=null,g=null,v=null;const S=new pb,x=t.getContextAttributes();let y=null,E=null;const T=[],w=[],U=new le;let P=null;const L=new yn;L.viewport=new Et;const O=new yn;O.viewport=new Et;const R=[L,O],A=new tv;let N=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ge=T[se];return ge===void 0&&(ge=new md,T[se]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(se){let ge=T[se];return ge===void 0&&(ge=new md,T[se]=ge),ge.getGripSpace()},this.getHand=function(se){let ge=T[se];return ge===void 0&&(ge=new md,T[se]=ge),ge.getHandSpace()};function Y(se){const ge=w.indexOf(se.inputSource);if(ge===-1)return;const De=T[ge];De!==void 0&&(De.update(se.inputSource,se.frame,h||o),De.dispatchEvent({type:se.type,data:se.inputSource}))}function j(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",te);for(let se=0;se<T.length;se++){const ge=w[se];ge!==null&&(w[se]=null,T[se].disconnect(ge))}N=null,q=null,S.reset(),e.setRenderTarget(y),g=null,m=null,p=null,i=null,E=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){c=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(se){if(i=se,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",j),i.addEventListener("inputsourceschange",te),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(U),i.renderState.layers===void 0){const ge={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new Ui(g.framebufferWidth,g.framebufferHeight,{format:bn,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ge=null,De=null,ve=null;x.depth&&(ve=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=x.stencil?Bs:Ps,De=x.stencil?Fs:Sr);const Ke={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};p=new XRWebGLBinding(i,t),m=p.createProjectionLayer(Ke),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new Ui(m.textureWidth,m.textureHeight,{format:bn,type:Di,depthTexture:new Lp(m.textureWidth,m.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(u),h=null,o=await i.requestReferenceSpace(c),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function te(se){for(let ge=0;ge<se.removed.length;ge++){const De=se.removed[ge],ve=w.indexOf(De);ve>=0&&(w[ve]=null,T[ve].disconnect(De))}for(let ge=0;ge<se.added.length;ge++){const De=se.added[ge];let ve=w.indexOf(De);if(ve===-1){for(let it=0;it<T.length;it++)if(it>=w.length){w.push(De),ve=it;break}else if(w[it]===null){w[it]=De,ve=it;break}if(ve===-1)break}const Ke=T[ve];Ke&&Ke.connect(De)}}const J=new D,de=new D;function k(se,ge,De){J.setFromMatrixPosition(ge.matrixWorld),de.setFromMatrixPosition(De.matrixWorld);const ve=J.distanceTo(de),Ke=ge.projectionMatrix.elements,it=De.projectionMatrix.elements,Je=Ke[14]/(Ke[10]-1),ot=Ke[14]/(Ke[10]+1),he=(Ke[9]+1)/Ke[5],me=(Ke[9]-1)/Ke[5],z=(Ke[8]-1)/Ke[0],qe=(it[8]+1)/it[0],_e=Je*z,Fe=Je*qe,Se=ve/(-z+qe),tt=Se*-z;if(ge.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(tt),se.translateZ(Se),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Ke[10]===-1)se.projectionMatrix.copy(ge.projectionMatrix),se.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Ie=Je+Se,F=ot+Se,C=_e-tt,Z=Fe+(ve-tt),ae=he*ot/F*Ie,pe=me*ot/F*Ie;se.projectionMatrix.makePerspective(C,Z,ae,pe,Ie,F),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function ie(se,ge){ge===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ge.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(i===null)return;let ge=se.near,De=se.far;S.texture!==null&&(S.depthNear>0&&(ge=S.depthNear),S.depthFar>0&&(De=S.depthFar)),A.near=O.near=L.near=ge,A.far=O.far=L.far=De,(N!==A.near||q!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),N=A.near,q=A.far),L.layers.mask=se.layers.mask|2,O.layers.mask=se.layers.mask|4,A.layers.mask=L.layers.mask|O.layers.mask;const ve=se.parent,Ke=A.cameras;ie(A,ve);for(let it=0;it<Ke.length;it++)ie(Ke[it],ve);Ke.length===2?k(A,L,O):A.projectionMatrix.copy(L.projectionMatrix),ne(se,A,ve)};function ne(se,ge,De){De===null?se.matrix.copy(ge.matrixWorld):(se.matrix.copy(De.matrixWorld),se.matrix.invert(),se.matrix.multiply(ge.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ge.projectionMatrix),se.projectionMatrixInverse.copy(ge.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=zo*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(m===null&&g===null))return u},this.setFoveation=function(se){u=se,m!==null&&(m.fixedFoveation=se),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=se)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(A)};let ue=null;function Re(se,ge){if(f=ge.getViewerPose(h||o),v=ge,f!==null){const De=f.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let ve=!1;De.length!==A.cameras.length&&(A.cameras.length=0,ve=!0);for(let it=0;it<De.length;it++){const Je=De[it];let ot=null;if(g!==null)ot=g.getViewport(Je);else{const me=p.getViewSubImage(m,Je);ot=me.viewport,it===0&&(e.setRenderTargetTextures(E,me.colorTexture,m.ignoreDepthValues?void 0:me.depthStencilTexture),e.setRenderTarget(E))}let he=R[it];he===void 0&&(he=new yn,he.layers.enable(it),he.viewport=new Et,R[it]=he),he.matrix.fromArray(Je.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(Je.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ot.x,ot.y,ot.width,ot.height),it===0&&(A.matrix.copy(he.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ve===!0&&A.cameras.push(he)}const Ke=i.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")){const it=p.getDepthInformation(De[0]);it&&it.isValid&&it.texture&&S.init(e,it,i.renderState)}}for(let De=0;De<T.length;De++){const ve=w[De],Ke=T[De];ve!==null&&Ke!==void 0&&Ke.update(ve,ge,h||o)}ue&&ue(se,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),v=null}const Ye=new jy;Ye.setAnimationLoop(Re),this.setAnimationLoop=function(se){ue=se},this.dispose=function(){}}}const fs=new fi,gb=new et;function _b(r,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function n(x,y){y.color.getRGB(x.fogColor.value,Yy(r)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function i(x,y,E,T,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?s(x,y):y.isMeshToonMaterial?(s(x,y),p(x,y)):y.isMeshPhongMaterial?(s(x,y),f(x,y)):y.isMeshStandardMaterial?(s(x,y),m(x,y),y.isMeshPhysicalMaterial&&g(x,y,w)):y.isMeshMatcapMaterial?(s(x,y),v(x,y)):y.isMeshDepthMaterial?s(x,y):y.isMeshDistanceMaterial?(s(x,y),S(x,y)):y.isMeshNormalMaterial?s(x,y):y.isLineBasicMaterial?(o(x,y),y.isLineDashedMaterial&&c(x,y)):y.isPointsMaterial?u(x,y,E,T):y.isSpriteMaterial?h(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function s(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Wn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Wn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const E=e.get(y),T=E.envMap,w=E.envMapRotation;T&&(x.envMap.value=T,fs.copy(w),fs.x*=-1,fs.y*=-1,fs.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),x.envMapRotation.value.setFromMatrix4(gb.makeRotationFromEuler(fs)),x.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function o(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function c(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function u(x,y,E,T){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*E,x.scale.value=T*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function h(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function f(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function p(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function m(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function g(x,y,E){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Wn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=E.texture,x.transmissionSamplerSize.value.set(E.width,E.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,y){y.matcap&&(x.matcap.value=y.matcap)}function S(x,y){const E=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(E.matrixWorld),x.nearDistance.value=E.shadow.camera.near,x.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yb(r,e,t,n){let i={},s={},o=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function u(E,T){const w=T.program;n.uniformBlockBinding(E,w)}function h(E,T){let w=i[E.id];w===void 0&&(v(E),w=f(E),i[E.id]=w,E.addEventListener("dispose",x));const U=T.program;n.updateUBOMapping(E,U);const P=e.render.frame;s[E.id]!==P&&(m(E),s[E.id]=P)}function f(E){const T=p();E.__bindingPointIndex=T;const w=r.createBuffer(),U=E.__size,P=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,U,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,w),w}function p(){for(let E=0;E<c;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){const T=i[E.id],w=E.uniforms,U=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let P=0,L=w.length;P<L;P++){const O=Array.isArray(w[P])?w[P]:[w[P]];for(let R=0,A=O.length;R<A;R++){const N=O[R];if(g(N,P,R,U)===!0){const q=N.__offset,Y=Array.isArray(N.value)?N.value:[N.value];let j=0;for(let te=0;te<Y.length;te++){const J=Y[te],de=S(J);typeof J=="number"||typeof J=="boolean"?(N.__data[0]=J,r.bufferSubData(r.UNIFORM_BUFFER,q+j,N.__data)):J.isMatrix3?(N.__data[0]=J.elements[0],N.__data[1]=J.elements[1],N.__data[2]=J.elements[2],N.__data[3]=0,N.__data[4]=J.elements[3],N.__data[5]=J.elements[4],N.__data[6]=J.elements[5],N.__data[7]=0,N.__data[8]=J.elements[6],N.__data[9]=J.elements[7],N.__data[10]=J.elements[8],N.__data[11]=0):(J.toArray(N.__data,j),j+=de.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(E,T,w,U){const P=E.value,L=T+"_"+w;if(U[L]===void 0)return typeof P=="number"||typeof P=="boolean"?U[L]=P:U[L]=P.clone(),!0;{const O=U[L];if(typeof P=="number"||typeof P=="boolean"){if(O!==P)return U[L]=P,!0}else if(O.equals(P)===!1)return O.copy(P),!0}return!1}function v(E){const T=E.uniforms;let w=0;const U=16;for(let L=0,O=T.length;L<O;L++){const R=Array.isArray(T[L])?T[L]:[T[L]];for(let A=0,N=R.length;A<N;A++){const q=R[A],Y=Array.isArray(q.value)?q.value:[q.value];for(let j=0,te=Y.length;j<te;j++){const J=Y[j],de=S(J),k=w%U,ie=k%de.boundary,ne=k+ie;w+=ie,ne!==0&&U-ne<de.storage&&(w+=U-ne),q.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=w,w+=de.storage}}}const P=w%U;return P>0&&(w+=U-P),E.__size=w,E.__cache={},this}function S(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function x(E){const T=E.target;T.removeEventListener("dispose",x);const w=o.indexOf(T.__bindingPointIndex);o.splice(w,1),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function y(){for(const E in i)r.deleteBuffer(i[E]);o=[],i={},s={}}return{bind:u,update:h,dispose:y}}class nv{constructor(e={}){const{canvas:t=Vy(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const v=new Uint32Array(4),S=new Int32Array(4);let x=null,y=null;const E=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=Qi,this.toneMappingExposure=1;const w=this;let U=!1,P=0,L=0,O=null,R=-1,A=null;const N=new Et,q=new Et;let Y=null;const j=new Ne(0);let te=0,J=t.width,de=t.height,k=1,ie=null,ne=null;const ue=new Et(0,0,J,de),Re=new Et(0,0,J,de);let Ye=!1;const se=new cl;let ge=!1,De=!1;const ve=new et,Ke=new et,it=new D,Je=new Et,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function me(){return O===null?k:1}let z=n;function qe(I,G){return t.getContext(I,G)}try{const I={alpha:!0,depth:i,stencil:s,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${il}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),z===null){const G="webgl2";if(z=qe(G,I),z===null)throw qe(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let _e,Fe,Se,tt,Ie,F,C,Z,ae,pe,ce,Xe,Ee,Oe,St,ye,Be,nt,st,ze,At,lt,Ft,V;function Te(){_e=new E1(z),_e.init(),lt=new ev(z,_e),Fe=new y1(z,_e,e,lt),Se=new rb(z,_e),Fe.reverseDepthBuffer&&m&&Se.buffers.depth.setReversed(!0),tt=new A1(z),Ie=new XT,F=new ub(z,_e,Se,Ie,Fe,lt,tt),C=new x1(w),Z=new w1(w),ae=new US(z),Ft=new g1(z,ae),pe=new T1(z,ae,tt,Ft),ce=new C1(z,pe,ae,tt),st=new R1(z,Fe,F),ye=new v1(Ie),Xe=new WT(w,C,Z,_e,Fe,Ft,ye),Ee=new _b(w,Ie),Oe=new qT,St=new $T(_e),nt=new m1(w,C,Z,Se,ce,g,u),Be=new nb(w,ce,Fe),V=new yb(z,tt,Fe,Se),ze=new _1(z,_e,tt),At=new b1(z,_e,tt),tt.programs=Xe.programs,w.capabilities=Fe,w.extensions=_e,w.properties=Ie,w.renderLists=Oe,w.shadowMap=Be,w.state=Se,w.info=tt}Te();const oe=new mb(w,z);this.xr=oe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const I=_e.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=_e.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(I){I!==void 0&&(k=I,this.setSize(J,de,!1))},this.getSize=function(I){return I.set(J,de)},this.setSize=function(I,G,Q=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=I,de=G,t.width=Math.floor(I*k),t.height=Math.floor(G*k),Q===!0&&(t.style.width=I+"px",t.style.height=G+"px"),this.setViewport(0,0,I,G)},this.getDrawingBufferSize=function(I){return I.set(J*k,de*k).floor()},this.setDrawingBufferSize=function(I,G,Q){J=I,de=G,k=Q,t.width=Math.floor(I*Q),t.height=Math.floor(G*Q),this.setViewport(0,0,I,G)},this.getCurrentViewport=function(I){return I.copy(N)},this.getViewport=function(I){return I.copy(ue)},this.setViewport=function(I,G,Q,$){I.isVector4?ue.set(I.x,I.y,I.z,I.w):ue.set(I,G,Q,$),Se.viewport(N.copy(ue).multiplyScalar(k).round())},this.getScissor=function(I){return I.copy(Re)},this.setScissor=function(I,G,Q,$){I.isVector4?Re.set(I.x,I.y,I.z,I.w):Re.set(I,G,Q,$),Se.scissor(q.copy(Re).multiplyScalar(k).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(I){Se.setScissorTest(Ye=I)},this.setOpaqueSort=function(I){ie=I},this.setTransparentSort=function(I){ne=I},this.getClearColor=function(I){return I.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(I=!0,G=!0,Q=!0){let $=0;if(I){let X=!1;if(O!==null){const Me=O.texture.format;X=Me===fh||Me===hh||Me===sl}if(X){const Me=O.texture.type,be=Me===Di||Me===Sr||Me===Fo||Me===Fs||Me===lh||Me===ch,He=nt.getClearColor(),Ge=nt.getClearAlpha(),rt=He.r,ct=He.g,We=He.b;be?(v[0]=rt,v[1]=ct,v[2]=We,v[3]=Ge,z.clearBufferuiv(z.COLOR,0,v)):(S[0]=rt,S[1]=ct,S[2]=We,S[3]=Ge,z.clearBufferiv(z.COLOR,0,S))}else $|=z.COLOR_BUFFER_BIT}G&&($|=z.DEPTH_BUFFER_BIT),Q&&($|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Oe.dispose(),St.dispose(),Ie.dispose(),C.dispose(),Z.dispose(),ce.dispose(),Ft.dispose(),V.dispose(),Xe.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",_l),oe.removeEventListener("sessionend",yl),Fi.stop()};function fe(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const I=tt.autoReset,G=Be.enabled,Q=Be.autoUpdate,$=Be.needsUpdate,X=Be.type;Te(),tt.autoReset=I,Be.enabled=G,Be.autoUpdate=Q,Be.needsUpdate=$,Be.type=X}function Ce(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function at(I){const G=I.target;G.removeEventListener("dispose",at),Vt(G)}function Vt(I){an(I),Ie.remove(I)}function an(I){const G=Ie.get(I).programs;G!==void 0&&(G.forEach(function(Q){Xe.releaseProgram(Q)}),I.isShaderMaterial&&Xe.releaseShaderCache(I))}this.renderBufferDirect=function(I,G,Q,$,X,Me){G===null&&(G=ot);const be=X.isMesh&&X.matrixWorld.determinant()<0,He=Oh(I,G,Q,$,X);Se.setMaterial($,be);let Ge=Q.index,rt=1;if($.wireframe===!0){if(Ge=pe.getWireframeAttribute(Q),Ge===void 0)return;rt=2}const ct=Q.drawRange,We=Q.attributes.position;let vt=ct.start*rt,Ct=(ct.start+ct.count)*rt;Me!==null&&(vt=Math.max(vt,Me.start*rt),Ct=Math.min(Ct,(Me.start+Me.count)*rt)),Ge!==null?(vt=Math.max(vt,0),Ct=Math.min(Ct,Ge.count)):We!=null&&(vt=Math.max(vt,0),Ct=Math.min(Ct,We.count));const $e=Ct-vt;if($e<0||$e===1/0)return;Ft.setup(X,$,He,Q,Ge);let mt,xt=ze;if(Ge!==null&&(mt=ae.get(Ge),xt=At,xt.setIndex(mt)),X.isMesh)$.wireframe===!0?(Se.setLineWidth($.wireframeLinewidth*me()),xt.setMode(z.LINES)):xt.setMode(z.TRIANGLES);else if(X.isLine){let Pe=$.linewidth;Pe===void 0&&(Pe=1),Se.setLineWidth(Pe*me()),X.isLineSegments?xt.setMode(z.LINES):X.isLineLoop?xt.setMode(z.LINE_LOOP):xt.setMode(z.LINE_STRIP)}else X.isPoints?xt.setMode(z.POINTS):X.isSprite&&xt.setMode(z.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)xt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(_e.get("WEBGL_multi_draw"))xt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Pe=X._multiDrawStarts,Gt=X._multiDrawCounts,wt=X._multiDrawCount,fn=Ge?ae.get(Ge).bytesPerElement:1,Qt=Ie.get($).currentProgram.getUniforms();for(let dn=0;dn<wt;dn++)Qt.setValue(z,"_gl_DrawID",dn),xt.render(Pe[dn]/fn,Gt[dn])}else if(X.isInstancedMesh)xt.renderInstances(vt,$e,X.count);else if(Q.isInstancedBufferGeometry){const Pe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Gt=Math.min(Q.instanceCount,Pe);xt.renderInstances(vt,$e,Gt)}else xt.render(vt,$e)};function Lt(I,G,Q){I.transparent===!0&&I.side===Ii&&I.forceSinglePass===!1?(I.side=Wn,I.needsUpdate=!0,Ys(I,G,Q),I.side=xr,I.needsUpdate=!0,Ys(I,G,Q),I.side=Ii):Ys(I,G,Q)}this.compile=function(I,G,Q=null){Q===null&&(Q=I),y=St.get(Q),y.init(G),T.push(y),Q.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),I!==Q&&I.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),y.setupLights();const $=new Set;return I.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Me=X.material;if(Me)if(Array.isArray(Me))for(let be=0;be<Me.length;be++){const He=Me[be];Lt(He,Q,X),$.add(He)}else Lt(Me,Q,X),$.add(Me)}),T.pop(),y=null,$},this.compileAsync=function(I,G,Q=null){const $=this.compile(I,G,Q);return new Promise(X=>{function Me(){if($.forEach(function(be){Ie.get(be).currentProgram.isReady()&&$.delete(be)}),$.size===0){X(I);return}setTimeout(Me,10)}_e.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Yn=null;function wi(I){Yn&&Yn(I)}function _l(){Fi.stop()}function yl(){Fi.start()}const Fi=new jy;Fi.setAnimationLoop(wi),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(I){Yn=I,oe.setAnimationLoop(I),I===null?Fi.stop():Fi.start()},oe.addEventListener("sessionstart",_l),oe.addEventListener("sessionend",yl),this.render=function(I,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(G),G=oe.getCamera()),I.isScene===!0&&I.onBeforeRender(w,I,G,O),y=St.get(I,T.length),y.init(G),T.push(y),Ke.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),se.setFromProjectionMatrix(Ke),De=this.localClippingEnabled,ge=ye.init(this.clippingPlanes,De),x=Oe.get(I,E.length),x.init(),E.push(x),oe.enabled===!0&&oe.isPresenting===!0){const Me=w.xr.getDepthSensingMesh();Me!==null&&Jr(Me,G,-1/0,w.sortObjects)}Jr(I,G,0,w.sortObjects),x.finish(),w.sortObjects===!0&&x.sort(ie,ne),he=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,he&&nt.addToRenderList(x,I),this.info.render.frame++,ge===!0&&ye.beginShadows();const Q=y.state.shadowsArray;Be.render(Q,I,G),ge===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=x.opaque,X=x.transmissive;if(y.setupLights(),G.isArrayCamera){const Me=G.cameras;if(X.length>0)for(let be=0,He=Me.length;be<He;be++){const Ge=Me[be];Er($,X,I,Ge)}he&&nt.render(I);for(let be=0,He=Me.length;be<He;be++){const Ge=Me[be];vl(x,I,Ge,Ge.viewport)}}else X.length>0&&Er($,X,I,G),he&&nt.render(I),vl(x,I,G);O!==null&&(F.updateMultisampleRenderTarget(O),F.updateRenderTargetMipmap(O)),I.isScene===!0&&I.onAfterRender(w,I,G),Ft.resetDefaultState(),R=-1,A=null,T.pop(),T.length>0?(y=T[T.length-1],ge===!0&&ye.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,E.pop(),E.length>0?x=E[E.length-1]:x=null};function Jr(I,G,Q,$){if(I.visible===!1)return;if(I.layers.test(G.layers)){if(I.isGroup)Q=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(G);else if(I.isLight)y.pushLight(I),I.castShadow&&y.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||se.intersectsSprite(I)){$&&Je.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Ke);const be=ce.update(I),He=I.material;He.visible&&x.push(I,be,He,Q,Je.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||se.intersectsObject(I))){const be=ce.update(I),He=I.material;if($&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Je.copy(I.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Je.copy(be.boundingSphere.center)),Je.applyMatrix4(I.matrixWorld).applyMatrix4(Ke)),Array.isArray(He)){const Ge=be.groups;for(let rt=0,ct=Ge.length;rt<ct;rt++){const We=Ge[rt],vt=He[We.materialIndex];vt&&vt.visible&&x.push(I,be,vt,Q,Je.z,We)}}else He.visible&&x.push(I,be,He,Q,Je.z,null)}}const Me=I.children;for(let be=0,He=Me.length;be<He;be++)Jr(Me[be],G,Q,$)}function vl(I,G,Q,$){const X=I.opaque,Me=I.transmissive,be=I.transparent;y.setupLightsView(Q),ge===!0&&ye.setGlobalState(w.clippingPlanes,Q),$&&Se.viewport(N.copy($)),X.length>0&&Xs(X,G,Q),Me.length>0&&Xs(Me,G,Q),be.length>0&&Xs(be,G,Q),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Er(I,G,Q,$){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[$.id]===void 0&&(y.state.transmissionRenderTarget[$.id]=new Ui(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float")?Xo:Di,minFilter:Li,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Me=y.state.transmissionRenderTarget[$.id],be=$.viewport||N;Me.setSize(be.z,be.w);const He=w.getRenderTarget();w.setRenderTarget(Me),w.getClearColor(j),te=w.getClearAlpha(),te<1&&w.setClearColor(16777215,.5),w.clear(),he&&nt.render(Q);const Ge=w.toneMapping;w.toneMapping=Qi;const rt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),y.setupLightsView($),ge===!0&&ye.setGlobalState(w.clippingPlanes,$),Xs(I,Q,$),F.updateMultisampleRenderTarget(Me),F.updateRenderTargetMipmap(Me),_e.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let We=0,vt=G.length;We<vt;We++){const Ct=G[We],$e=Ct.object,mt=Ct.geometry,xt=Ct.material,Pe=Ct.group;if(xt.side===Ii&&$e.layers.test($.layers)){const Gt=xt.side;xt.side=Wn,xt.needsUpdate=!0,xl($e,Q,$,mt,xt,Pe),xt.side=Gt,xt.needsUpdate=!0,ct=!0}}ct===!0&&(F.updateMultisampleRenderTarget(Me),F.updateRenderTargetMipmap(Me))}w.setRenderTarget(He),w.setClearColor(j,te),rt!==void 0&&($.viewport=rt),w.toneMapping=Ge}function Xs(I,G,Q){const $=G.isScene===!0?G.overrideMaterial:null;for(let X=0,Me=I.length;X<Me;X++){const be=I[X],He=be.object,Ge=be.geometry,rt=$===null?be.material:$,ct=be.group;He.layers.test(Q.layers)&&xl(He,G,Q,Ge,rt,ct)}}function xl(I,G,Q,$,X,Me){I.onBeforeRender(w,G,Q,$,X,Me),I.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),X.onBeforeRender(w,G,Q,$,I,Me),X.transparent===!0&&X.side===Ii&&X.forceSinglePass===!1?(X.side=Wn,X.needsUpdate=!0,w.renderBufferDirect(Q,G,$,X,I,Me),X.side=xr,X.needsUpdate=!0,w.renderBufferDirect(Q,G,$,X,I,Me),X.side=Ii):w.renderBufferDirect(Q,G,$,X,I,Me),I.onAfterRender(w,G,Q,$,X,Me)}function Ys(I,G,Q){G.isScene!==!0&&(G=ot);const $=Ie.get(I),X=y.state.lights,Me=y.state.shadowsArray,be=X.state.version,He=Xe.getParameters(I,X.state,Me,G,Q),Ge=Xe.getProgramCacheKey(He);let rt=$.programs;$.environment=I.isMeshStandardMaterial?G.environment:null,$.fog=G.fog,$.envMap=(I.isMeshStandardMaterial?Z:C).get(I.envMap||$.environment),$.envMapRotation=$.environment!==null&&I.envMap===null?G.environmentRotation:I.envMapRotation,rt===void 0&&(I.addEventListener("dispose",at),rt=new Map,$.programs=rt);let ct=rt.get(Ge);if(ct!==void 0){if($.currentProgram===ct&&$.lightsStateVersion===be)return Sl(I,He),ct}else He.uniforms=Xe.getUniforms(I),I.onBeforeCompile(He,w),ct=Xe.acquireProgram(He,Ge),rt.set(Ge,ct),$.uniforms=He.uniforms;const We=$.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(We.clippingPlanes=ye.uniform),Sl(I,He),$.needsLights=wl(I),$.lightsStateVersion=be,$.needsLights&&(We.ambientLightColor.value=X.state.ambient,We.lightProbe.value=X.state.probe,We.directionalLights.value=X.state.directional,We.directionalLightShadows.value=X.state.directionalShadow,We.spotLights.value=X.state.spot,We.spotLightShadows.value=X.state.spotShadow,We.rectAreaLights.value=X.state.rectArea,We.ltc_1.value=X.state.rectAreaLTC1,We.ltc_2.value=X.state.rectAreaLTC2,We.pointLights.value=X.state.point,We.pointLightShadows.value=X.state.pointShadow,We.hemisphereLights.value=X.state.hemi,We.directionalShadowMap.value=X.state.directionalShadowMap,We.directionalShadowMatrix.value=X.state.directionalShadowMatrix,We.spotShadowMap.value=X.state.spotShadowMap,We.spotLightMatrix.value=X.state.spotLightMatrix,We.spotLightMap.value=X.state.spotLightMap,We.pointShadowMap.value=X.state.pointShadowMap,We.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=ct,$.uniformsList=null,ct}function Ml(I){if(I.uniformsList===null){const G=I.currentProgram.getUniforms();I.uniformsList=mu.seqWithValue(G.seq,I.uniforms)}return I.uniformsList}function Sl(I,G){const Q=Ie.get(I);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function Oh(I,G,Q,$,X){G.isScene!==!0&&(G=ot),F.resetTextureUnits();const Me=G.fog,be=$.isMeshStandardMaterial?G.environment:null,He=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ks,Ge=($.isMeshStandardMaterial?Z:C).get($.envMap||be),rt=$.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ct=!!Q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),We=!!Q.morphAttributes.position,vt=!!Q.morphAttributes.normal,Ct=!!Q.morphAttributes.color;let $e=Qi;$.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&($e=w.toneMapping);const mt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,xt=mt!==void 0?mt.length:0,Pe=Ie.get($),Gt=y.state.lights;if(ge===!0&&(De===!0||I!==A)){const Wt=I===A&&$.id===R;ye.setState($,I,Wt)}let wt=!1;$.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Gt.state.version||Pe.outputColorSpace!==He||X.isBatchedMesh&&Pe.batching===!1||!X.isBatchedMesh&&Pe.batching===!0||X.isBatchedMesh&&Pe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Pe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Pe.instancing===!1||!X.isInstancedMesh&&Pe.instancing===!0||X.isSkinnedMesh&&Pe.skinning===!1||!X.isSkinnedMesh&&Pe.skinning===!0||X.isInstancedMesh&&Pe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Pe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Pe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Pe.instancingMorph===!1&&X.morphTexture!==null||Pe.envMap!==Ge||$.fog===!0&&Pe.fog!==Me||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ye.numPlanes||Pe.numIntersection!==ye.numIntersection)||Pe.vertexAlphas!==rt||Pe.vertexTangents!==ct||Pe.morphTargets!==We||Pe.morphNormals!==vt||Pe.morphColors!==Ct||Pe.toneMapping!==$e||Pe.morphTargetsCount!==xt)&&(wt=!0):(wt=!0,Pe.__version=$.version);let fn=Pe.currentProgram;wt===!0&&(fn=Ys($,G,X));let Qt=!1,dn=!1,Tr=!1;const Bt=fn.getUniforms(),On=Pe.uniforms;if(Se.useProgram(fn.program)&&(Qt=!0,dn=!0,Tr=!0),$.id!==R&&(R=$.id,dn=!0),Qt||A!==I){Se.buffers.depth.getReversed()?(ve.copy(I.projectionMatrix),sS(ve),oS(ve),Bt.setValue(z,"projectionMatrix",ve)):Bt.setValue(z,"projectionMatrix",I.projectionMatrix),Bt.setValue(z,"viewMatrix",I.matrixWorldInverse);const Bi=Bt.map.cameraPosition;Bi!==void 0&&Bi.setValue(z,it.setFromMatrixPosition(I.matrixWorld)),Fe.logarithmicDepthBuffer&&Bt.setValue(z,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Bt.setValue(z,"isOrthographic",I.isOrthographicCamera===!0),A!==I&&(A=I,dn=!0,Tr=!0)}if(X.isSkinnedMesh){Bt.setOptional(z,X,"bindMatrix"),Bt.setOptional(z,X,"bindMatrixInverse");const Wt=X.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),Bt.setValue(z,"boneTexture",Wt.boneTexture,F))}X.isBatchedMesh&&(Bt.setOptional(z,X,"batchingTexture"),Bt.setValue(z,"batchingTexture",X._matricesTexture,F),Bt.setOptional(z,X,"batchingIdTexture"),Bt.setValue(z,"batchingIdTexture",X._indirectTexture,F),Bt.setOptional(z,X,"batchingColorTexture"),X._colorsTexture!==null&&Bt.setValue(z,"batchingColorTexture",X._colorsTexture,F));const br=Q.morphAttributes;if((br.position!==void 0||br.normal!==void 0||br.color!==void 0)&&st.update(X,Q,fn),(dn||Pe.receiveShadow!==X.receiveShadow)&&(Pe.receiveShadow=X.receiveShadow,Bt.setValue(z,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(On.envMap.value=Ge,On.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&G.environment!==null&&(On.envMapIntensity.value=G.environmentIntensity),dn&&(Bt.setValue(z,"toneMappingExposure",w.toneMappingExposure),Pe.needsLights&&Fh(On,Tr),Me&&$.fog===!0&&Ee.refreshFogUniforms(On,Me),Ee.refreshMaterialUniforms(On,$,k,de,y.state.transmissionRenderTarget[I.id]),mu.upload(z,Ml(Pe),On,F)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(mu.upload(z,Ml(Pe),On,F),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Bt.setValue(z,"center",X.center),Bt.setValue(z,"modelViewMatrix",X.modelViewMatrix),Bt.setValue(z,"normalMatrix",X.normalMatrix),Bt.setValue(z,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Wt=$.uniformsGroups;for(let Bi=0,zi=Wt.length;Bi<zi;Bi++){const El=Wt[Bi];V.update(El,fn),V.bind(El,fn)}}return fn}function Fh(I,G){I.ambientLightColor.needsUpdate=G,I.lightProbe.needsUpdate=G,I.directionalLights.needsUpdate=G,I.directionalLightShadows.needsUpdate=G,I.pointLights.needsUpdate=G,I.pointLightShadows.needsUpdate=G,I.spotLights.needsUpdate=G,I.spotLightShadows.needsUpdate=G,I.rectAreaLights.needsUpdate=G,I.hemisphereLights.needsUpdate=G}function wl(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(I,G,Q){Ie.get(I.texture).__webglTexture=G,Ie.get(I.depthTexture).__webglTexture=Q;const $=Ie.get(I);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Q===void 0,$.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,G){const Q=Ie.get(I);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(I,G=0,Q=0){O=I,P=G,L=Q;let $=!0,X=null,Me=!1,be=!1;if(I){const Ge=Ie.get(I);if(Ge.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(z.FRAMEBUFFER,null),$=!1;else if(Ge.__webglFramebuffer===void 0)F.setupRenderTarget(I);else if(Ge.__hasExternalTextures)F.rebindTextures(I,Ie.get(I.texture).__webglTexture,Ie.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const We=I.depthTexture;if(Ge.__boundDepthTexture!==We){if(We!==null&&Ie.has(We)&&(I.width!==We.image.width||I.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(I)}}const rt=I.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(be=!0);const ct=Ie.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ct[G])?X=ct[G][Q]:X=ct[G],Me=!0):I.samples>0&&F.useMultisampledRTT(I)===!1?X=Ie.get(I).__webglMultisampledFramebuffer:Array.isArray(ct)?X=ct[Q]:X=ct,N.copy(I.viewport),q.copy(I.scissor),Y=I.scissorTest}else N.copy(ue).multiplyScalar(k).floor(),q.copy(Re).multiplyScalar(k).floor(),Y=Ye;if(Se.bindFramebuffer(z.FRAMEBUFFER,X)&&$&&Se.drawBuffers(I,X),Se.viewport(N),Se.scissor(q),Se.setScissorTest(Y),Me){const Ge=Ie.get(I.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ge.__webglTexture,Q)}else if(be){const Ge=Ie.get(I.texture),rt=G||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.__webglTexture,Q||0,rt)}R=-1},this.readRenderTargetPixels=function(I,G,Q,$,X,Me,be){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Ie.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&be!==void 0&&(He=He[be]),He){Se.bindFramebuffer(z.FRAMEBUFFER,He);try{const Ge=I.texture,rt=Ge.format,ct=Ge.type;if(!Fe.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=I.width-$&&Q>=0&&Q<=I.height-X&&z.readPixels(G,Q,$,X,lt.convert(rt),lt.convert(ct),Me)}finally{const Ge=O!==null?Ie.get(O).__webglFramebuffer:null;Se.bindFramebuffer(z.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(I,G,Q,$,X,Me,be){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=Ie.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&be!==void 0&&(He=He[be]),He){const Ge=I.texture,rt=Ge.format,ct=Ge.type;if(!Fe.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=I.width-$&&Q>=0&&Q<=I.height-X){Se.bindFramebuffer(z.FRAMEBUFFER,He);const We=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,We),z.bufferData(z.PIXEL_PACK_BUFFER,Me.byteLength,z.STREAM_READ),z.readPixels(G,Q,$,X,lt.convert(rt),lt.convert(ct),0);const vt=O!==null?Ie.get(O).__webglFramebuffer:null;Se.bindFramebuffer(z.FRAMEBUFFER,vt);const Ct=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await rS(z,Ct,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,We),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Me),z.deleteBuffer(We),z.deleteSync(Ct),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,G=null,Q=0){I.isTexture!==!0&&(Ra("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,I=arguments[1]);const $=Math.pow(2,-Q),X=Math.floor(I.image.width*$),Me=Math.floor(I.image.height*$),be=G!==null?G.x:0,He=G!==null?G.y:0;F.setTexture2D(I,0),z.copyTexSubImage2D(z.TEXTURE_2D,Q,0,0,be,He,X,Me),Se.unbindTexture()},this.copyTextureToTexture=function(I,G,Q=null,$=null,X=0){I.isTexture!==!0&&(Ra("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,I=arguments[1],G=arguments[2],X=arguments[3]||0,Q=null);let Me,be,He,Ge,rt,ct,We,vt,Ct;const $e=I.isCompressedTexture?I.mipmaps[X]:I.image;Q!==null?(Me=Q.max.x-Q.min.x,be=Q.max.y-Q.min.y,He=Q.isBox3?Q.max.z-Q.min.z:1,Ge=Q.min.x,rt=Q.min.y,ct=Q.isBox3?Q.min.z:0):(Me=$e.width,be=$e.height,He=$e.depth||1,Ge=0,rt=0,ct=0),$!==null?(We=$.x,vt=$.y,Ct=$.z):(We=0,vt=0,Ct=0);const mt=lt.convert(G.format),xt=lt.convert(G.type);let Pe;G.isData3DTexture?(F.setTexture3D(G,0),Pe=z.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(F.setTexture2DArray(G,0),Pe=z.TEXTURE_2D_ARRAY):(F.setTexture2D(G,0),Pe=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment);const Gt=z.getParameter(z.UNPACK_ROW_LENGTH),wt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),fn=z.getParameter(z.UNPACK_SKIP_PIXELS),Qt=z.getParameter(z.UNPACK_SKIP_ROWS),dn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,$e.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,$e.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ge),z.pixelStorei(z.UNPACK_SKIP_ROWS,rt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ct);const Tr=I.isDataArrayTexture||I.isData3DTexture,Bt=G.isDataArrayTexture||G.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){const On=Ie.get(I),br=Ie.get(G),Wt=Ie.get(On.__renderTarget),Bi=Ie.get(br.__renderTarget);Se.bindFramebuffer(z.READ_FRAMEBUFFER,Wt.__webglFramebuffer),Se.bindFramebuffer(z.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let zi=0;zi<He;zi++)Tr&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ie.get(I).__webglTexture,X,ct+zi),I.isDepthTexture?(Bt&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ie.get(G).__webglTexture,X,Ct+zi),z.blitFramebuffer(Ge,rt,Me,be,We,vt,Me,be,z.DEPTH_BUFFER_BIT,z.NEAREST)):Bt?z.copyTexSubImage3D(Pe,X,We,vt,Ct+zi,Ge,rt,Me,be):z.copyTexSubImage2D(Pe,X,We,vt,Ct+zi,Ge,rt,Me,be);Se.bindFramebuffer(z.READ_FRAMEBUFFER,null),Se.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Bt?I.isDataTexture||I.isData3DTexture?z.texSubImage3D(Pe,X,We,vt,Ct,Me,be,He,mt,xt,$e.data):G.isCompressedArrayTexture?z.compressedTexSubImage3D(Pe,X,We,vt,Ct,Me,be,He,mt,$e.data):z.texSubImage3D(Pe,X,We,vt,Ct,Me,be,He,mt,xt,$e):I.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,X,We,vt,Me,be,mt,xt,$e.data):I.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,X,We,vt,$e.width,$e.height,mt,$e.data):z.texSubImage2D(z.TEXTURE_2D,X,We,vt,Me,be,mt,xt,$e);z.pixelStorei(z.UNPACK_ROW_LENGTH,Gt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,wt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,fn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Qt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,dn),X===0&&G.generateMipmaps&&z.generateMipmap(Pe),Se.unbindTexture()},this.copyTextureToTexture3D=function(I,G,Q=null,$=null,X=0){return I.isTexture!==!0&&(Ra("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,$=arguments[1]||null,I=arguments[2],G=arguments[3],X=arguments[4]||0),Ra('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,G,Q,$,X)},this.initRenderTarget=function(I){Ie.get(I).__webglFramebuffer===void 0&&F.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?F.setTextureCube(I,0):I.isData3DTexture?F.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?F.setTexture2DArray(I,0):F.setTexture2D(I,0),Se.unbindTexture()},this.resetState=function(){P=0,L=0,O=null,Se.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}class _h{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new _h(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=n}clone(){return new yh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Za extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xa,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new D;class ci{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ci(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Np extends Nn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let vo;const ya=new D,xo=new D,Mo=new D,So=new le,va=new le,iv=new et,Fc=new D,xa=new D,Bc=new D,R_=new le,gd=new le,C_=new le;class rv extends It{constructor(e=new Np){if(super(),this.isSprite=!0,this.type="Sprite",vo===void 0){vo=new _t;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vh(t,5);vo.setIndex([0,1,2,0,2,3]),vo.setAttribute("position",new ci(n,3,0,!1)),vo.setAttribute("uv",new ci(n,2,3,!1))}this.geometry=vo,this.material=e,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xo.setFromMatrixScale(this.matrixWorld),iv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xo.multiplyScalar(-Mo.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;zc(Fc.set(-.5,-.5,0),Mo,o,xo,i,s),zc(xa.set(.5,-.5,0),Mo,o,xo,i,s),zc(Bc.set(.5,.5,0),Mo,o,xo,i,s),R_.set(0,0),gd.set(1,0),C_.set(1,1);let c=e.ray.intersectTriangle(Fc,xa,Bc,!1,ya);if(c===null&&(zc(xa.set(-.5,.5,0),Mo,o,xo,i,s),gd.set(0,1),c=e.ray.intersectTriangle(Fc,Bc,xa,!1,ya),c===null))return;const u=e.ray.origin.distanceTo(ya);u<e.near||u>e.far||t.push({distance:u,point:ya.clone(),uv:$n.getInterpolation(ya,Fc,xa,Bc,R_,gd,C_,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function zc(r,e,t,n,i,s){So.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(va.x=s*So.x-i*So.y,va.y=i*So.x+s*So.y):va.copy(So),r.copy(e),r.x+=va.x,r.y+=va.y,r.applyMatrix4(iv)}const kc=new D,P_=new D;class sv extends It{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){kc.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(kc);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){kc.setFromMatrixPosition(e.matrixWorld),P_.setFromMatrixPosition(this.matrixWorld);const n=kc.distanceTo(P_)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const I_=new D,L_=new Et,D_=new Et,vb=new D,U_=new et,Hc=new D,_d=new Mn,N_=new et,yd=new Hs;class ov extends tn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ep,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Hc),this.boundingBox.expandByPoint(Hc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Hc),this.boundingSphere.expandByPoint(Hc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_d.copy(this.boundingSphere),_d.applyMatrix4(i),e.ray.intersectsSphere(_d)!==!1&&(N_.copy(i).invert(),yd.copy(e.ray).applyMatrix4(N_),!(this.boundingBox!==null&&yd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,yd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ep?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ay?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;L_.fromBufferAttribute(i.attributes.skinIndex,e),D_.fromBufferAttribute(i.attributes.skinWeight,e),I_.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=D_.getComponent(s);if(o!==0){const c=L_.getComponent(s);U_.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(vb.copy(I_).applyMatrix4(U_),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Op extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $i extends Jt{constructor(e=null,t=1,n=1,i,s,o,c,u,h=vn,f=vn,p,m){super(null,o,c,u,h,f,i,s,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const O_=new et,xb=new et;class xh{constructor(e=[],t=[]){this.uuid=hi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const c=e[s]?e[s].matrixWorld:xb;O_.multiplyMatrices(c,t[s]),O_.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new xh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new $i(t,e,e,bn,ei);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Op),this.bones.push(o),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const c=n[i];e.boneInverses.push(c.toArray())}return e}}class Vo extends Rt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const wo=new et,F_=new et,Vc=[],B_=new xn,Mb=new et,Ma=new tn,Sa=new Mn;class av extends tn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Mb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wo),B_.copy(e.boundingBox).applyMatrix4(wo),this.boundingBox.union(B_)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wo),Sa.copy(e.boundingSphere).applyMatrix4(wo),this.boundingSphere.union(Sa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let c=0;c<n.length;c++)n[c]=i[o+c]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ma.geometry=this.geometry,Ma.material=this.material,Ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sa.copy(this.boundingSphere),Sa.applyMatrix4(n),e.ray.intersectsSphere(Sa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,wo),F_.multiplyMatrices(n,wo),Ma.matrixWorld=F_,Ma.raycast(e,Vc);for(let o=0,c=Vc.length;o<c;o++){const u=Vc[o];u.instanceId=s,u.object=this,t.push(u)}Vc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new $i(new Float32Array(i*this.count),i,this.count,uh,ei));const s=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const c=this.geometry.morphTargetsRelative?1:1-o,u=i*e;s[u]=c,s.set(n,u+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function vd(r,e){return r-e}function Sb(r,e){return r.z-e.z}function wb(r,e){return e.z-r.z}class Eb{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const s=this.pool,o=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const c=s[this.index];o.push(c),this.index++,c.start=e,c.count=t,c.z=n,c.index=i}reset(){this.list.length=0,this.index=0}}const Kn=new et,Tb=new Ne(1,1,1),xd=new cl,Gc=new xn,ds=new Mn,wa=new D,z_=new D,bb=new D,Md=new Eb,Un=new tn,Wc=[];function Ab(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let o=0;o<n;o++)e.setComponent(s+t,o,r.getComponent(s,o))}else e.array.set(r.array,t*n);e.needsUpdate=!0}function ps(r,e){if(r.constructor!==e.constructor){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)e[n]=r[n]}else{const t=Math.min(r.length,e.length);e.set(new r.constructor(r.buffer,0,t))}}class lv extends tn{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(e,t,n=t*2,i){super(new _t,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new $i(t,e,e,bn,ei);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new $i(t,e,e,sl,Sr);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new $i(t,e,e,bn,ei);n.colorSpace=Pt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const o=e.getAttribute(s),{array:c,itemSize:u,normalized:h}=o,f=new c.constructor(n*u),p=new Rt(f,u,h);t.setAttribute(s,p)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new Rt(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Kn),this.getBoundingBoxAt(s,Gc).applyMatrix4(Kn),e.union(Gc)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Kn),this.getBoundingSphereAt(s,ds).applyMatrix4(Kn),e.union(ds)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(vd),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const s=this._matricesTexture;Kn.identity().toArray(s.image.data,i*16),s.needsUpdate=!0;const o=this._colorsTexture;return o&&(Tb.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const o=e.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let u;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(vd),u=this._availableGeometryIds.shift(),s[u]=i):(u=this._geometryCount,this._geometryCount++,s.push(i)),this.setGeometryAt(u,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,u}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),o=t.getIndex(),c=this._geometryInfo[e];if(i&&o.count>c.reservedIndexCount||t.attributes.position.count>c.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const u=c.vertexStart,h=c.reservedVertexCount;c.vertexCount=t.getAttribute("position").count;for(const f in n.attributes){const p=t.getAttribute(f),m=n.getAttribute(f);Ab(p,m,u);const g=p.itemSize;for(let v=p.count,S=h;v<S;v++){const x=u+v;for(let y=0;y<g;y++)m.setComponent(x,y,0)}m.needsUpdate=!0,m.addUpdateRange(u*g,h*g)}if(i){const f=c.indexStart,p=c.reservedIndexCount;c.indexCount=t.getIndex().count;for(let m=0;m<o.count;m++)s.setX(f+m,u+o.getX(m));for(let m=o.count,g=p;m<g;m++)s.setX(f+m,u);s.needsUpdate=!0,s.addUpdateRange(f,c.reservedIndexCount)}return c.start=i?c.indexStart:c.vertexStart,c.count=i?c.indexCount:c.vertexCount,c.boundingBox=null,t.boundingBox!==null&&(c.boundingBox=t.boundingBox.clone()),c.boundingSphere=null,t.boundingSphere!==null&&(c.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,s=n.length;i<s;i++)n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((o,c)=>c).sort((o,c)=>n[o].vertexStart-n[c].vertexStart),s=this.geometry;for(let o=0,c=n.length;o<c;o++){const u=i[o],h=n[u];if(h.active!==!1){if(s.index!==null){if(h.indexStart!==t){const{indexStart:f,vertexStart:p,reservedIndexCount:m}=h,g=s.index,v=g.array,S=e-p;for(let x=f;x<f+m;x++)v[x]=v[x]+S;g.array.copyWithin(t,f,f+m),g.addUpdateRange(t,m),h.indexStart=t}t+=h.reservedIndexCount}if(h.vertexStart!==e){const{vertexStart:f,reservedVertexCount:p}=h,m=s.attributes;for(const g in m){const v=m[g],{array:S,itemSize:x}=v;S.copyWithin(e*x,f*x,(f+p)*x),v.addUpdateRange(e*x,p*x)}h.vertexStart=e}e+=h.reservedVertexCount,h.start=s.index?h.indexStart:h.vertexStart,this._nextIndexStart=s.index?h.indexStart+h.reservedIndexCount:0,this._nextVertexStart=h.vertexStart+h.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const s=new xn,o=n.index,c=n.attributes.position;for(let u=i.start,h=i.start+i.count;u<h;u++){let f=u;o&&(f=o.getX(f)),s.expandByPoint(wa.fromBufferAttribute(c,f))}i.boundingBox=s}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const s=new Mn;this.getBoundingBoxAt(e,Gc),Gc.getCenter(s.center);const o=n.index,c=n.attributes.position;let u=0;for(let h=i.start,f=i.start+i.count;h<f;h++){let p=h;o&&(p=o.getX(p)),wa.fromBufferAttribute(c,p),u=Math.max(u,s.center.distanceToSquared(wa))}s.radius=Math.sqrt(u),i.boundingSphere=s}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){const n=this._instanceInfo,i=this._matricesTexture,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(s,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._instanceInfo,i=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(i,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,s=this._instanceInfo;return e>=s.length||s[e].active===!1?this:(t.toArray(i,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,i=this._instanceInfo;return e>=i.length||i[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._instanceInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){const n=this._instanceInfo,i=this._geometryInfo;return e>=n.length||n[e].active===!1||t>=i.length||i[t].active===!1?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(vd);t[t.length-1]===n.length;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),s=new Int32Array(e);ps(this._multiDrawCounts,i),ps(this._multiDrawStarts,s),this._multiDrawCounts=i,this._multiDrawStarts=s,this._maxInstanceCount=e;const o=this._indirectTexture,c=this._matricesTexture,u=this._colorsTexture;o.dispose(),this._initIndirectTexture(),ps(o.image.data,this._indirectTexture.image.data),c.dispose(),this._initMatricesTexture(),ps(c.image.data,this._matricesTexture.image.data),u&&(u.dispose(),this._initColorsTexture(),ps(u.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(c=>c.active);if(Math.max(...n.map(c=>c.vertexStart+c.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(u=>u.indexStart+u.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new _t,this._initializeGeometry(s));const o=this.geometry;s.index&&ps(s.index.array,o.index.array);for(const c in s.attributes)ps(s.attributes[c].array,o.attributes[c].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,s=this.matrixWorld,o=this.geometry;Un.material=this.material,Un.geometry.index=o.index,Un.geometry.attributes=o.attributes,Un.geometry.boundingBox===null&&(Un.geometry.boundingBox=new xn),Un.geometry.boundingSphere===null&&(Un.geometry.boundingSphere=new Mn);for(let c=0,u=n.length;c<u;c++){if(!n[c].visible||!n[c].active)continue;const h=n[c].geometryIndex,f=i[h];Un.geometry.setDrawRange(f.start,f.count),this.getMatrixAt(c,Un.matrixWorld).premultiply(s),this.getBoundingBoxAt(h,Un.geometry.boundingBox),this.getBoundingSphereAt(h,Un.geometry.boundingSphere),Un.raycast(e,Wc);for(let p=0,m=Wc.length;p<m;p++){const g=Wc[p];g.object=this,g.batchId=c,t.push(g)}Wc.length=0}Un.material=null,Un.geometry.index=null,Un.geometry.attributes={},Un.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),c=o===null?1:o.array.BYTES_PER_ELEMENT,u=this._instanceInfo,h=this._multiDrawStarts,f=this._multiDrawCounts,p=this._geometryInfo,m=this.perObjectFrustumCulled,g=this._indirectTexture,v=g.image.data;m&&(Kn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),xd.setFromProjectionMatrix(Kn,e.coordinateSystem));let S=0;if(this.sortObjects){Kn.copy(this.matrixWorld).invert(),wa.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Kn),z_.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Kn);for(let E=0,T=u.length;E<T;E++)if(u[E].visible&&u[E].active){const w=u[E].geometryIndex;this.getMatrixAt(E,Kn),this.getBoundingSphereAt(w,ds).applyMatrix4(Kn);let U=!1;if(m&&(U=!xd.intersectsSphere(ds)),!U){const P=p[w],L=bb.subVectors(ds.center,wa).dot(z_);Md.push(P.start,P.count,L,E)}}const x=Md.list,y=this.customSort;y===null?x.sort(s.transparent?wb:Sb):y.call(this,x,n);for(let E=0,T=x.length;E<T;E++){const w=x[E];h[S]=w.start*c,f[S]=w.count,v[S]=w.index,S++}Md.reset()}else for(let x=0,y=u.length;x<y;x++)if(u[x].visible&&u[x].active){const E=u[x].geometryIndex;let T=!1;if(m&&(this.getMatrixAt(x,Kn),this.getBoundingSphereAt(E,ds).applyMatrix4(Kn),T=!xd.intersectsSphere(ds)),!T){const w=p[E];h[S]=w.start*c,f[S]=w.count,v[S]=x,S++}}g.needsUpdate=!0,this._multiDrawCount=S,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,o){this.onBeforeRender(e,null,i,s,o)}}class Xn extends Nn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qu=new D,$u=new D,k_=new et,Ea=new Hs,Xc=new Mn,Sd=new D,H_=new D;class Yr extends It{constructor(e=new _t,t=new Xn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Qu.fromBufferAttribute(t,i-1),$u.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Qu.distanceTo($u);e.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xc.copy(n.boundingSphere),Xc.applyMatrix4(i),Xc.radius+=s,e.ray.intersectsSphere(Xc)===!1)return;k_.copy(i).invert(),Ea.copy(e.ray).applyMatrix4(k_);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=this.isLineSegments?2:1,f=n.index,m=n.attributes.position;if(f!==null){const g=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let S=g,x=v-1;S<x;S+=h){const y=f.getX(S),E=f.getX(S+1),T=Yc(this,e,Ea,u,y,E);T&&t.push(T)}if(this.isLineLoop){const S=f.getX(v-1),x=f.getX(g),y=Yc(this,e,Ea,u,S,x);y&&t.push(y)}}else{const g=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let S=g,x=v-1;S<x;S+=h){const y=Yc(this,e,Ea,u,S,S+1);y&&t.push(y)}if(this.isLineLoop){const S=Yc(this,e,Ea,u,v-1,g);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function Yc(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(Qu.fromBufferAttribute(o,i),$u.fromBufferAttribute(o,s),t.distanceSqToSegment(Qu,$u,Sd,H_)>n)return;Sd.applyMatrix4(r.matrixWorld);const u=e.ray.origin.distanceTo(Sd);if(!(u<e.near||u>e.far))return{distance:u,point:H_.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const V_=new D,G_=new D;class nr extends Yr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)V_.fromBufferAttribute(t,i),G_.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+V_.distanceTo(G_);e.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cv extends Yr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Fp extends Nn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const W_=new et,op=new Hs,qc=new Mn,Zc=new D;class uv extends It{constructor(e=new _t,t=new Fp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qc.copy(n.boundingSphere),qc.applyMatrix4(i),qc.radius+=s,e.ray.intersectsSphere(qc)===!1)return;W_.copy(i).invert(),op.copy(e.ray).applyMatrix4(W_);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=m,S=g;v<S;v++){const x=h.getX(v);Zc.fromBufferAttribute(p,x),X_(Zc,x,u,i,e,t,this)}}else{const m=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let v=m,S=g;v<S;v++)Zc.fromBufferAttribute(p,v),X_(Zc,v,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function X_(r,e,t,n,i,s,o){const c=op.distanceSqToPoint(r);if(c<t){const u=new D;op.closestPointToPoint(r,u),u.applyMatrix4(n);const h=i.ray.origin.distanceTo(u);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(c),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Rb extends Jt{constructor(e,t,n,i,s,o,c,u,h){super(e,t,n,i,s,o,c,u,h),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:on,this.magFilter=s!==void 0?s:on,this.generateMipmaps=!1;const f=this;function p(){f.needsUpdate=!0,e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(p)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Cb extends Jt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=vn,this.minFilter=vn,this.generateMipmaps=!1,this.needsUpdate=!0}}class Ds extends Jt{constructor(e,t,n,i,s,o,c,u,h,f,p,m){super(null,o,c,u,h,f,i,s,p,m),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Pb extends Ds{constructor(e,t,n,i,s,o){super(e,t,n,s,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=li,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ib extends Ds{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Mr),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Lb extends Jt{constructor(e,t,n,i,s,o,c,u,h){super(e,t,n,i,s,o,c,u,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ni{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let c=0,u=s-1,h;for(;c<=u;)if(i=Math.floor(c+(u-c)/2),h=n[i]-o,h<0)c=i+1;else if(h>0)u=i-1;else{u=i;break}if(i=u,n[i]===o)return i/(s-1);const f=n[i],m=n[i+1]-f,g=(o-f)/m;return(i+g)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),c=this.getPoint(s),u=t||(o.isVector2?new le:new D);return u.copy(c).sub(o).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,i=[],s=[],o=[],c=new D,u=new et;for(let g=0;g<=e;g++){const v=g/e;i[g]=this.getTangentAt(v,new D)}s[0]=new D,o[0]=new D;let h=Number.MAX_VALUE;const f=Math.abs(i[0].x),p=Math.abs(i[0].y),m=Math.abs(i[0].z);f<=h&&(h=f,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),m<=h&&n.set(0,0,1),c.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],c),o[0].crossVectors(i[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),c.crossVectors(i[g-1],i[g]),c.length()>Number.EPSILON){c.normalize();const v=Math.acos(Kt(i[g-1].dot(i[g]),-1,1));s[g].applyMatrix4(u.makeRotationAxis(c,v))}o[g].crossVectors(i[g],s[g])}if(t===!0){let g=Math.acos(Kt(s[0].dot(s[e]),-1,1));g/=e,i[0].dot(c.crossVectors(s[0],s[e]))>0&&(g=-g);for(let v=1;v<=e;v++)s[v].applyMatrix4(u.makeRotationAxis(i[v],g*v)),o[v].crossVectors(i[v],s[v])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Mh extends Ni{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,c=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=c,this.aRotation=u}getPoint(e,t=new le){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const c=this.aStartAngle+e*s;let u=this.aX+this.xRadius*Math.cos(c),h=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=u-this.aX,g=h-this.aY;u=m*f-g*p+this.aX,h=m*p+g*f+this.aY}return n.set(u,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class hv extends Mh{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Bp(){let r=0,e=0,t=0,n=0;function i(s,o,c,u){r=s,e=c,t=-3*s+3*o-2*c-u,n=2*s-2*o+c+u}return{initCatmullRom:function(s,o,c,u,h){i(o,c,h*(c-s),h*(u-o))},initNonuniformCatmullRom:function(s,o,c,u,h,f,p){let m=(o-s)/h-(c-s)/(h+f)+(c-o)/f,g=(c-o)/f-(u-o)/(f+p)+(u-c)/p;m*=f,g*=f,i(o,c,m,g)},calc:function(s){const o=s*s,c=o*s;return r+e*s+t*o+n*c}}}const jc=new D,wd=new Bp,Ed=new Bp,Td=new Bp;class fv extends Ni{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let c=Math.floor(o),u=o-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:u===0&&c===s-1&&(c=s-2,u=1);let h,f;this.closed||c>0?h=i[(c-1)%s]:(jc.subVectors(i[0],i[1]).add(i[0]),h=jc);const p=i[c%s],m=i[(c+1)%s];if(this.closed||c+2<s?f=i[(c+2)%s]:(jc.subVectors(i[s-1],i[s-2]).add(i[s-1]),f=jc),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let v=Math.pow(h.distanceToSquared(p),g),S=Math.pow(p.distanceToSquared(m),g),x=Math.pow(m.distanceToSquared(f),g);S<1e-4&&(S=1),v<1e-4&&(v=S),x<1e-4&&(x=S),wd.initNonuniformCatmullRom(h.x,p.x,m.x,f.x,v,S,x),Ed.initNonuniformCatmullRom(h.y,p.y,m.y,f.y,v,S,x),Td.initNonuniformCatmullRom(h.z,p.z,m.z,f.z,v,S,x)}else this.curveType==="catmullrom"&&(wd.initCatmullRom(h.x,p.x,m.x,f.x,this.tension),Ed.initCatmullRom(h.y,p.y,m.y,f.y,this.tension),Td.initCatmullRom(h.z,p.z,m.z,f.z,this.tension));return n.set(wd.calc(u),Ed.calc(u),Td.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Y_(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,c=r*r,u=r*c;return(2*t-2*n+s+o)*u+(-3*t+3*n-2*s-o)*c+s*r+t}function Db(r,e){const t=1-r;return t*t*e}function Ub(r,e){return 2*(1-r)*r*e}function Nb(r,e){return r*r*e}function za(r,e,t,n){return Db(r,e)+Ub(r,t)+Nb(r,n)}function Ob(r,e){const t=1-r;return t*t*t*e}function Fb(r,e){const t=1-r;return 3*t*t*r*e}function Bb(r,e){return 3*(1-r)*r*r*e}function zb(r,e){return r*r*r*e}function ka(r,e,t,n,i){return Ob(r,e)+Fb(r,t)+Bb(r,n)+zb(r,i)}class zp extends Ni{constructor(e=new le,t=new le,n=new le,i=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new le){const n=t,i=this.v0,s=this.v1,o=this.v2,c=this.v3;return n.set(ka(e,i.x,s.x,o.x,c.x),ka(e,i.y,s.y,o.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dv extends Ni{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){const n=t,i=this.v0,s=this.v1,o=this.v2,c=this.v3;return n.set(ka(e,i.x,s.x,o.x,c.x),ka(e,i.y,s.y,o.y,c.y),ka(e,i.z,s.z,o.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class kp extends Ni{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pv extends Ni{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hp extends Ni{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(za(e,i.x,s.x,o.x),za(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vp extends Ni{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(za(e,i.x,s.x,o.x),za(e,i.y,s.y,o.y),za(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gp extends Ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),c=s-o,u=i[o===0?o:o-1],h=i[o],f=i[o>i.length-2?i.length-1:o+1],p=i[o>i.length-3?i.length-1:o+2];return n.set(Y_(c,u.x,h.x,f.x,p.x),Y_(c,u.y,h.y,f.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new le().fromArray(i))}return this}}const eh=Object.freeze(Object.defineProperty({__proto__:null,ArcCurve:hv,CatmullRomCurve3:fv,CubicBezierCurve:zp,CubicBezierCurve3:dv,EllipseCurve:Mh,LineCurve:kp,LineCurve3:pv,QuadraticBezierCurve:Hp,QuadraticBezierCurve3:Vp,SplineCurve:Gp},Symbol.toStringTag,{value:"Module"}));class mv extends Ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,c=this.curves[s],u=c.getLength(),h=u===0?0:1-o/u;return c.getPointAt(h,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],c=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,u=o.getPoints(c);for(let h=0;h<u.length;h++){const f=u[h];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new eh[i.type]().fromJSON(i))}return this}}class ja extends mv{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new kp(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Hp(this.currentPoint.clone(),new le(e,t),new le(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const c=new zp(this.currentPoint.clone(),new le(e,t),new le(n,i),new le(s,o));return this.curves.push(c),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Gp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+c,t+u,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,c,u){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+h,t+f,n,i,s,o,c,u),this}absellipse(e,t,n,i,s,o,c,u){const h=new Mh(e,t,n,i,s,o,c,u);if(this.curves.length>0){const p=h.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(h);const f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class hl extends _t{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Kt(i,0,Math.PI*2);const s=[],o=[],c=[],u=[],h=[],f=1/t,p=new D,m=new le,g=new D,v=new D,S=new D;let x=0,y=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:x=e[E+1].x-e[E].x,y=e[E+1].y-e[E].y,g.x=y*1,g.y=-x,g.z=y*0,S.copy(g),g.normalize(),u.push(g.x,g.y,g.z);break;case e.length-1:u.push(S.x,S.y,S.z);break;default:x=e[E+1].x-e[E].x,y=e[E+1].y-e[E].y,g.x=y*1,g.y=-x,g.z=y*0,v.copy(g),g.x+=S.x,g.y+=S.y,g.z+=S.z,g.normalize(),u.push(g.x,g.y,g.z),S.copy(v)}for(let E=0;E<=t;E++){const T=n+E*f*i,w=Math.sin(T),U=Math.cos(T);for(let P=0;P<=e.length-1;P++){p.x=e[P].x*w,p.y=e[P].y,p.z=e[P].x*U,o.push(p.x,p.y,p.z),m.x=E/t,m.y=P/(e.length-1),c.push(m.x,m.y);const L=u[3*P+0]*w,O=u[3*P+1],R=u[3*P+0]*U;h.push(L,O,R)}}for(let E=0;E<t;E++)for(let T=0;T<e.length-1;T++){const w=T+E*e.length,U=w,P=w+e.length,L=w+e.length+1,O=w+1;s.push(U,P,O),s.push(L,O,P)}this.setIndex(s),this.setAttribute("position",new Ve(o,3)),this.setAttribute("uv",new Ve(c,2)),this.setAttribute("normal",new Ve(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.points,e.segments,e.phiStart,e.phiLength)}}class Sh extends hl{constructor(e=1,t=1,n=4,i=8){const s=new ja;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Sh(e.radius,e.length,e.capSegments,e.radialSegments)}}class wh extends _t{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],c=[],u=[],h=new D,f=new le;o.push(0,0,0),c.push(0,0,1),u.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){const g=n+p/t*i;h.x=e*Math.cos(g),h.y=e*Math.sin(g),o.push(h.x,h.y,h.z),c.push(0,0,1),f.x=(o[m]/e+1)/2,f.y=(o[m+1]/e+1)/2,u.push(f.x,f.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new Ve(o,3)),this.setAttribute("normal",new Ve(c,3)),this.setAttribute("uv",new Ve(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Zo extends _t{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,c=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:c,thetaLength:u};const h=this;i=Math.floor(i),s=Math.floor(s);const f=[],p=[],m=[],g=[];let v=0;const S=[],x=n/2;let y=0;E(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(f),this.setAttribute("position",new Ve(p,3)),this.setAttribute("normal",new Ve(m,3)),this.setAttribute("uv",new Ve(g,2));function E(){const w=new D,U=new D;let P=0;const L=(t-e)/n;for(let O=0;O<=s;O++){const R=[],A=O/s,N=A*(t-e)+e;for(let q=0;q<=i;q++){const Y=q/i,j=Y*u+c,te=Math.sin(j),J=Math.cos(j);U.x=N*te,U.y=-A*n+x,U.z=N*J,p.push(U.x,U.y,U.z),w.set(te,L,J).normalize(),m.push(w.x,w.y,w.z),g.push(Y,1-A),R.push(v++)}S.push(R)}for(let O=0;O<i;O++)for(let R=0;R<s;R++){const A=S[R][O],N=S[R+1][O],q=S[R+1][O+1],Y=S[R][O+1];(e>0||R!==0)&&(f.push(A,N,Y),P+=3),(t>0||R!==s-1)&&(f.push(N,q,Y),P+=3)}h.addGroup(y,P,0),y+=P}function T(w){const U=v,P=new le,L=new D;let O=0;const R=w===!0?e:t,A=w===!0?1:-1;for(let q=1;q<=i;q++)p.push(0,x*A,0),m.push(0,A,0),g.push(.5,.5),v++;const N=v;for(let q=0;q<=i;q++){const j=q/i*u+c,te=Math.cos(j),J=Math.sin(j);L.x=R*J,L.y=x*A,L.z=R*te,p.push(L.x,L.y,L.z),m.push(0,A,0),P.x=te*.5+.5,P.y=J*.5*A+.5,g.push(P.x,P.y),v++}for(let q=0;q<i;q++){const Y=U+q,j=N+q;w===!0?f.push(j,j+1,Y):f.push(j+1,j,Y),O+=3}h.addGroup(y,O,w===!0?1:2),y+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Eh extends Zo{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,c=Math.PI*2){super(0,e,t,n,i,s,o,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:c}}static fromJSON(e){return new Eh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jr extends _t{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];c(i),h(n),f(),this.setAttribute("position",new Ve(s,3)),this.setAttribute("normal",new Ve(s.slice(),3)),this.setAttribute("uv",new Ve(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function c(E){const T=new D,w=new D,U=new D;for(let P=0;P<t.length;P+=3)g(t[P+0],T),g(t[P+1],w),g(t[P+2],U),u(T,w,U,E)}function u(E,T,w,U){const P=U+1,L=[];for(let O=0;O<=P;O++){L[O]=[];const R=E.clone().lerp(w,O/P),A=T.clone().lerp(w,O/P),N=P-O;for(let q=0;q<=N;q++)q===0&&O===P?L[O][q]=R:L[O][q]=R.clone().lerp(A,q/N)}for(let O=0;O<P;O++)for(let R=0;R<2*(P-O)-1;R++){const A=Math.floor(R/2);R%2===0?(m(L[O][A+1]),m(L[O+1][A]),m(L[O][A])):(m(L[O][A+1]),m(L[O+1][A+1]),m(L[O+1][A]))}}function h(E){const T=new D;for(let w=0;w<s.length;w+=3)T.x=s[w+0],T.y=s[w+1],T.z=s[w+2],T.normalize().multiplyScalar(E),s[w+0]=T.x,s[w+1]=T.y,s[w+2]=T.z}function f(){const E=new D;for(let T=0;T<s.length;T+=3){E.x=s[T+0],E.y=s[T+1],E.z=s[T+2];const w=x(E)/2/Math.PI+.5,U=y(E)/Math.PI+.5;o.push(w,1-U)}v(),p()}function p(){for(let E=0;E<o.length;E+=6){const T=o[E+0],w=o[E+2],U=o[E+4],P=Math.max(T,w,U),L=Math.min(T,w,U);P>.9&&L<.1&&(T<.2&&(o[E+0]+=1),w<.2&&(o[E+2]+=1),U<.2&&(o[E+4]+=1))}}function m(E){s.push(E.x,E.y,E.z)}function g(E,T){const w=E*3;T.x=e[w+0],T.y=e[w+1],T.z=e[w+2]}function v(){const E=new D,T=new D,w=new D,U=new D,P=new le,L=new le,O=new le;for(let R=0,A=0;R<s.length;R+=9,A+=6){E.set(s[R+0],s[R+1],s[R+2]),T.set(s[R+3],s[R+4],s[R+5]),w.set(s[R+6],s[R+7],s[R+8]),P.set(o[A+0],o[A+1]),L.set(o[A+2],o[A+3]),O.set(o[A+4],o[A+5]),U.copy(E).add(T).add(w).divideScalar(3);const N=x(U);S(P,A+0,E,N),S(L,A+2,T,N),S(O,A+4,w,N)}}function S(E,T,w,U){U<0&&E.x===1&&(o[T]=E.x-1),w.x===0&&w.z===0&&(o[T]=U/2/Math.PI+.5)}function x(E){return Math.atan2(E.z,-E.x)}function y(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.vertices,e.indices,e.radius,e.details)}}class Th extends jr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Th(e.radius,e.detail)}}const Kc=new D,Jc=new D,bd=new D,Qc=new $n;class gv extends _t{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Is*t),o=e.getIndex(),c=e.getAttribute("position"),u=o?o.count:c.count,h=[0,0,0],f=["a","b","c"],p=new Array(3),m={},g=[];for(let v=0;v<u;v+=3){o?(h[0]=o.getX(v),h[1]=o.getX(v+1),h[2]=o.getX(v+2)):(h[0]=v,h[1]=v+1,h[2]=v+2);const{a:S,b:x,c:y}=Qc;if(S.fromBufferAttribute(c,h[0]),x.fromBufferAttribute(c,h[1]),y.fromBufferAttribute(c,h[2]),Qc.getNormal(bd),p[0]=`${Math.round(S.x*i)},${Math.round(S.y*i)},${Math.round(S.z*i)}`,p[1]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,p[2]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let E=0;E<3;E++){const T=(E+1)%3,w=p[E],U=p[T],P=Qc[f[E]],L=Qc[f[T]],O=`${w}_${U}`,R=`${U}_${w}`;R in m&&m[R]?(bd.dot(m[R].normal)<=s&&(g.push(P.x,P.y,P.z),g.push(L.x,L.y,L.z)),m[R]=null):O in m||(m[O]={index0:h[E],index1:h[T],normal:bd.clone()})}}for(const v in m)if(m[v]){const{index0:S,index1:x}=m[v];Kc.fromBufferAttribute(c,S),Jc.fromBufferAttribute(c,x),g.push(Kc.x,Kc.y,Kc.z),g.push(Jc.x,Jc.y,Jc.z)}this.setAttribute("position",new Ve(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Us extends ja{constructor(e){super(e),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ja().fromJSON(i))}return this}}const kb={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=_v(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let c,u,h,f,p,m,g;if(n&&(s=Xb(r,e,s,t)),r.length>80*t){c=h=r[0],u=f=r[1];for(let v=t;v<i;v+=t)p=r[v],m=r[v+1],p<c&&(c=p),m<u&&(u=m),p>h&&(h=p),m>f&&(f=m);g=Math.max(h-c,f-u),g=g!==0?32767/g:0}return Ka(s,o,t,c,u,g,0),o}};function _v(r,e,t,n,i){let s,o;if(i===nA(r,e,t,n)>0)for(s=e;s<t;s+=n)o=q_(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=q_(s,r[s],r[s+1],o);return o&&bh(o,o.next)&&(Qa(o),o=o.next),o}function zs(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(bh(t,t.next)||qt(t.prev,t,t.next)===0)){if(Qa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ka(r,e,t,n,i,s,o){if(!r)return;!o&&s&&Kb(r,n,i,s);let c=r,u,h;for(;r.prev!==r.next;){if(u=r.prev,h=r.next,s?Vb(r,n,i,s):Hb(r)){e.push(u.i/t|0),e.push(r.i/t|0),e.push(h.i/t|0),Qa(r),r=h.next,c=h.next;continue}if(r=h,r===c){o?o===1?(r=Gb(zs(r),e,t),Ka(r,e,t,n,i,s,2)):o===2&&Wb(r,e,t,n,i,s):Ka(zs(r),e,t,n,i,s,1);break}}}function Hb(r){const e=r.prev,t=r,n=r.next;if(qt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,c=e.y,u=t.y,h=n.y,f=i<s?i<o?i:o:s<o?s:o,p=c<u?c<h?c:h:u<h?u:h,m=i>s?i>o?i:o:s>o?s:o,g=c>u?c>h?c:h:u>h?u:h;let v=n.next;for(;v!==e;){if(v.x>=f&&v.x<=m&&v.y>=p&&v.y<=g&&Io(i,c,s,u,o,h,v.x,v.y)&&qt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function Vb(r,e,t,n){const i=r.prev,s=r,o=r.next;if(qt(i,s,o)>=0)return!1;const c=i.x,u=s.x,h=o.x,f=i.y,p=s.y,m=o.y,g=c<u?c<h?c:h:u<h?u:h,v=f<p?f<m?f:m:p<m?p:m,S=c>u?c>h?c:h:u>h?u:h,x=f>p?f>m?f:m:p>m?p:m,y=ap(g,v,e,t,n),E=ap(S,x,e,t,n);let T=r.prevZ,w=r.nextZ;for(;T&&T.z>=y&&w&&w.z<=E;){if(T.x>=g&&T.x<=S&&T.y>=v&&T.y<=x&&T!==i&&T!==o&&Io(c,f,u,p,h,m,T.x,T.y)&&qt(T.prev,T,T.next)>=0||(T=T.prevZ,w.x>=g&&w.x<=S&&w.y>=v&&w.y<=x&&w!==i&&w!==o&&Io(c,f,u,p,h,m,w.x,w.y)&&qt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;T&&T.z>=y;){if(T.x>=g&&T.x<=S&&T.y>=v&&T.y<=x&&T!==i&&T!==o&&Io(c,f,u,p,h,m,T.x,T.y)&&qt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;w&&w.z<=E;){if(w.x>=g&&w.x<=S&&w.y>=v&&w.y<=x&&w!==i&&w!==o&&Io(c,f,u,p,h,m,w.x,w.y)&&qt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Gb(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!bh(i,s)&&yv(i,n,n.next,s)&&Ja(i,s)&&Ja(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Qa(n),Qa(n.next),n=r=s),n=n.next}while(n!==r);return zs(n)}function Wb(r,e,t,n,i,s){let o=r;do{let c=o.next.next;for(;c!==o.prev;){if(o.i!==c.i&&$b(o,c)){let u=vv(o,c);o=zs(o,o.next),u=zs(u,u.next),Ka(o,e,t,n,i,s,0),Ka(u,e,t,n,i,s,0);return}c=c.next}o=o.next}while(o!==r)}function Xb(r,e,t,n){const i=[];let s,o,c,u,h;for(s=0,o=e.length;s<o;s++)c=e[s]*n,u=s<o-1?e[s+1]*n:r.length,h=_v(r,c,u,n,!1),h===h.next&&(h.steiner=!0),i.push(Qb(h));for(i.sort(Yb),s=0;s<i.length;s++)t=qb(i[s],t);return t}function Yb(r,e){return r.x-e.x}function qb(r,e){const t=Zb(r,e);if(!t)return e;const n=vv(t,r);return zs(n,n.next),zs(t,t.next)}function Zb(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const m=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=s&&m>n&&(n=m,i=t.x<t.next.x?t:t.next,m===s))return i}t=t.next}while(t!==e);if(!i)return null;const c=i,u=i.x,h=i.y;let f=1/0,p;t=i;do s>=t.x&&t.x>=u&&s!==t.x&&Io(o<h?s:n,o,u,h,o<h?n:s,o,t.x,t.y)&&(p=Math.abs(o-t.y)/(s-t.x),Ja(t,r)&&(p<f||p===f&&(t.x>i.x||t.x===i.x&&jb(i,t)))&&(i=t,f=p)),t=t.next;while(t!==c);return i}function jb(r,e){return qt(r.prev,r,e.prev)<0&&qt(e.next,r,r.next)<0}function Kb(r,e,t,n){let i=r;do i.z===0&&(i.z=ap(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Jb(i)}function Jb(r){let e,t,n,i,s,o,c,u,h=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,c=0,e=0;e<h&&(c++,n=n.nextZ,!!n);e++);for(u=h;c>0||u>0&&n;)c!==0&&(u===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,c--):(i=n,n=n.nextZ,u--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,h*=2}while(o>1);return r}function ap(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Qb(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Io(r,e,t,n,i,s,o,c){return(i-o)*(e-c)>=(r-o)*(s-c)&&(r-o)*(n-c)>=(t-o)*(e-c)&&(t-o)*(s-c)>=(i-o)*(n-c)}function $b(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!eA(r,e)&&(Ja(r,e)&&Ja(e,r)&&tA(r,e)&&(qt(r.prev,r,e.prev)||qt(r,e.prev,e))||bh(r,e)&&qt(r.prev,r,r.next)>0&&qt(e.prev,e,e.next)>0)}function qt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function bh(r,e){return r.x===e.x&&r.y===e.y}function yv(r,e,t,n){const i=eu(qt(r,e,t)),s=eu(qt(r,e,n)),o=eu(qt(t,n,r)),c=eu(qt(t,n,e));return!!(i!==s&&o!==c||i===0&&$c(r,t,e)||s===0&&$c(r,n,e)||o===0&&$c(t,r,n)||c===0&&$c(t,e,n))}function $c(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function eu(r){return r>0?1:r<0?-1:0}function eA(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&yv(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Ja(r,e){return qt(r.prev,r,r.next)<0?qt(r,e,r.next)>=0&&qt(r,r.prev,e)>=0:qt(r,e,r.prev)<0||qt(r,r.next,e)<0}function tA(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function vv(r,e){const t=new lp(r.i,r.x,r.y),n=new lp(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function q_(r,e,t,n){const i=new lp(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Qa(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function lp(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function nA(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class er{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return er.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Z_(e),j_(n,e);let o=e.length;t.forEach(Z_);for(let u=0;u<t.length;u++)i.push(o),o+=t[u].length,j_(n,t[u]);const c=kb.triangulate(n,i);for(let u=0;u<c.length;u+=3)s.push(c.slice(u,u+3));return s}}function Z_(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function j_(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Ah extends _t{constructor(e=new Us([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];o(h)}this.setAttribute("position",new Ve(i,3)),this.setAttribute("uv",new Ve(s,2)),this.computeVertexNormals();function o(c){const u=[],h=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:g-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const y=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:iA;let T,w=!1,U,P,L,O;y&&(T=y.getSpacedPoints(f),w=!0,m=!1,U=y.computeFrenetFrames(f,!1),P=new D,L=new D,O=new D),m||(x=0,g=0,v=0,S=0);const R=c.extractPoints(h);let A=R.shape;const N=R.holes;if(!er.isClockWise(A)){A=A.reverse();for(let he=0,me=N.length;he<me;he++){const z=N[he];er.isClockWise(z)&&(N[he]=z.reverse())}}const Y=er.triangulateShape(A,N),j=A;for(let he=0,me=N.length;he<me;he++){const z=N[he];A=A.concat(z)}function te(he,me,z){return me||console.error("THREE.ExtrudeGeometry: vec does not exist"),he.clone().addScaledVector(me,z)}const J=A.length,de=Y.length;function k(he,me,z){let qe,_e,Fe;const Se=he.x-me.x,tt=he.y-me.y,Ie=z.x-he.x,F=z.y-he.y,C=Se*Se+tt*tt,Z=Se*F-tt*Ie;if(Math.abs(Z)>Number.EPSILON){const ae=Math.sqrt(C),pe=Math.sqrt(Ie*Ie+F*F),ce=me.x-tt/ae,Xe=me.y+Se/ae,Ee=z.x-F/pe,Oe=z.y+Ie/pe,St=((Ee-ce)*F-(Oe-Xe)*Ie)/(Se*F-tt*Ie);qe=ce+Se*St-he.x,_e=Xe+tt*St-he.y;const ye=qe*qe+_e*_e;if(ye<=2)return new le(qe,_e);Fe=Math.sqrt(ye/2)}else{let ae=!1;Se>Number.EPSILON?Ie>Number.EPSILON&&(ae=!0):Se<-Number.EPSILON?Ie<-Number.EPSILON&&(ae=!0):Math.sign(tt)===Math.sign(F)&&(ae=!0),ae?(qe=-tt,_e=Se,Fe=Math.sqrt(C)):(qe=Se,_e=tt,Fe=Math.sqrt(C/2))}return new le(qe/Fe,_e/Fe)}const ie=[];for(let he=0,me=j.length,z=me-1,qe=he+1;he<me;he++,z++,qe++)z===me&&(z=0),qe===me&&(qe=0),ie[he]=k(j[he],j[z],j[qe]);const ne=[];let ue,Re=ie.concat();for(let he=0,me=N.length;he<me;he++){const z=N[he];ue=[];for(let qe=0,_e=z.length,Fe=_e-1,Se=qe+1;qe<_e;qe++,Fe++,Se++)Fe===_e&&(Fe=0),Se===_e&&(Se=0),ue[qe]=k(z[qe],z[Fe],z[Se]);ne.push(ue),Re=Re.concat(ue)}for(let he=0;he<x;he++){const me=he/x,z=g*Math.cos(me*Math.PI/2),qe=v*Math.sin(me*Math.PI/2)+S;for(let _e=0,Fe=j.length;_e<Fe;_e++){const Se=te(j[_e],ie[_e],qe);ve(Se.x,Se.y,-z)}for(let _e=0,Fe=N.length;_e<Fe;_e++){const Se=N[_e];ue=ne[_e];for(let tt=0,Ie=Se.length;tt<Ie;tt++){const F=te(Se[tt],ue[tt],qe);ve(F.x,F.y,-z)}}}const Ye=v+S;for(let he=0;he<J;he++){const me=m?te(A[he],Re[he],Ye):A[he];w?(L.copy(U.normals[0]).multiplyScalar(me.x),P.copy(U.binormals[0]).multiplyScalar(me.y),O.copy(T[0]).add(L).add(P),ve(O.x,O.y,O.z)):ve(me.x,me.y,0)}for(let he=1;he<=f;he++)for(let me=0;me<J;me++){const z=m?te(A[me],Re[me],Ye):A[me];w?(L.copy(U.normals[he]).multiplyScalar(z.x),P.copy(U.binormals[he]).multiplyScalar(z.y),O.copy(T[he]).add(L).add(P),ve(O.x,O.y,O.z)):ve(z.x,z.y,p/f*he)}for(let he=x-1;he>=0;he--){const me=he/x,z=g*Math.cos(me*Math.PI/2),qe=v*Math.sin(me*Math.PI/2)+S;for(let _e=0,Fe=j.length;_e<Fe;_e++){const Se=te(j[_e],ie[_e],qe);ve(Se.x,Se.y,p+z)}for(let _e=0,Fe=N.length;_e<Fe;_e++){const Se=N[_e];ue=ne[_e];for(let tt=0,Ie=Se.length;tt<Ie;tt++){const F=te(Se[tt],ue[tt],qe);w?ve(F.x,F.y+T[f-1].y,T[f-1].x+z):ve(F.x,F.y,p+z)}}}se(),ge();function se(){const he=i.length/3;if(m){let me=0,z=J*me;for(let qe=0;qe<de;qe++){const _e=Y[qe];Ke(_e[2]+z,_e[1]+z,_e[0]+z)}me=f+x*2,z=J*me;for(let qe=0;qe<de;qe++){const _e=Y[qe];Ke(_e[0]+z,_e[1]+z,_e[2]+z)}}else{for(let me=0;me<de;me++){const z=Y[me];Ke(z[2],z[1],z[0])}for(let me=0;me<de;me++){const z=Y[me];Ke(z[0]+J*f,z[1]+J*f,z[2]+J*f)}}n.addGroup(he,i.length/3-he,0)}function ge(){const he=i.length/3;let me=0;De(j,me),me+=j.length;for(let z=0,qe=N.length;z<qe;z++){const _e=N[z];De(_e,me),me+=_e.length}n.addGroup(he,i.length/3-he,1)}function De(he,me){let z=he.length;for(;--z>=0;){const qe=z;let _e=z-1;_e<0&&(_e=he.length-1);for(let Fe=0,Se=f+x*2;Fe<Se;Fe++){const tt=J*Fe,Ie=J*(Fe+1),F=me+qe+tt,C=me+_e+tt,Z=me+_e+Ie,ae=me+qe+Ie;it(F,C,Z,ae)}}}function ve(he,me,z){u.push(he),u.push(me),u.push(z)}function Ke(he,me,z){Je(he),Je(me),Je(z);const qe=i.length/3,_e=E.generateTopUV(n,i,qe-3,qe-2,qe-1);ot(_e[0]),ot(_e[1]),ot(_e[2])}function it(he,me,z,qe){Je(he),Je(me),Je(qe),Je(me),Je(z),Je(qe);const _e=i.length/3,Fe=E.generateSideWallUV(n,i,_e-6,_e-3,_e-2,_e-1);ot(Fe[0]),ot(Fe[1]),ot(Fe[3]),ot(Fe[1]),ot(Fe[2]),ot(Fe[3])}function Je(he){i.push(u[he*3+0]),i.push(u[he*3+1]),i.push(u[he*3+2])}function ot(he){s.push(he.x),s.push(he.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return rA(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const c=t[e.shapes[s]];n.push(c)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new eh[i.type]().fromJSON(i)),new Ah(n,e.options)}}const iA={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],c=e[n*3],u=e[n*3+1],h=e[i*3],f=e[i*3+1];return[new le(s,o),new le(c,u),new le(h,f)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],c=e[t*3+1],u=e[t*3+2],h=e[n*3],f=e[n*3+1],p=e[n*3+2],m=e[i*3],g=e[i*3+1],v=e[i*3+2],S=e[s*3],x=e[s*3+1],y=e[s*3+2];return Math.abs(c-f)<Math.abs(o-h)?[new le(o,1-u),new le(h,1-p),new le(m,1-v),new le(S,1-y)]:[new le(c,1-u),new le(f,1-p),new le(g,1-v),new le(x,1-y)]}};function rA(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Rh extends jr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Rh(e.radius,e.detail)}}class fl extends jr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fl(e.radius,e.detail)}}class Ch extends _t{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const c=[],u=[],h=[],f=[];let p=e;const m=(t-e)/i,g=new D,v=new le;for(let S=0;S<=i;S++){for(let x=0;x<=n;x++){const y=s+x/n*o;g.x=p*Math.cos(y),g.y=p*Math.sin(y),u.push(g.x,g.y,g.z),h.push(0,0,1),v.x=(g.x/t+1)/2,v.y=(g.y/t+1)/2,f.push(v.x,v.y)}p+=m}for(let S=0;S<i;S++){const x=S*(n+1);for(let y=0;y<n;y++){const E=y+x,T=E,w=E+n+1,U=E+n+2,P=E+1;c.push(T,w,P),c.push(w,U,P)}}this.setIndex(c),this.setAttribute("position",new Ve(u,3)),this.setAttribute("normal",new Ve(h,3)),this.setAttribute("uv",new Ve(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ch(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ph extends _t{constructor(e=new Us([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let c=0,u=0;if(Array.isArray(e)===!1)h(e);else for(let f=0;f<e.length;f++)h(e[f]),this.addGroup(c,u,f),c+=u,u=0;this.setIndex(n),this.setAttribute("position",new Ve(i,3)),this.setAttribute("normal",new Ve(s,3)),this.setAttribute("uv",new Ve(o,2));function h(f){const p=i.length/3,m=f.extractPoints(t);let g=m.shape;const v=m.holes;er.isClockWise(g)===!1&&(g=g.reverse());for(let x=0,y=v.length;x<y;x++){const E=v[x];er.isClockWise(E)===!0&&(v[x]=E.reverse())}const S=er.triangulateShape(g,v);for(let x=0,y=v.length;x<y;x++){const E=v[x];g=g.concat(E)}for(let x=0,y=g.length;x<y;x++){const E=g[x];i.push(E.x,E.y,0),s.push(0,0,1),o.push(E.x,E.y)}for(let x=0,y=S.length;x<y;x++){const E=S[x],T=E[0]+p,w=E[1]+p,U=E[2]+p;n.push(T,w,U),u+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return sA(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new Ph(n,e.curveSegments)}}function sA(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class dl extends _t{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(o+c,Math.PI);let h=0;const f=[],p=new D,m=new D,g=[],v=[],S=[],x=[];for(let y=0;y<=n;y++){const E=[],T=y/n;let w=0;y===0&&o===0?w=.5/t:y===n&&u===Math.PI&&(w=-.5/t);for(let U=0;U<=t;U++){const P=U/t;p.x=-e*Math.cos(i+P*s)*Math.sin(o+T*c),p.y=e*Math.cos(o+T*c),p.z=e*Math.sin(i+P*s)*Math.sin(o+T*c),v.push(p.x,p.y,p.z),m.copy(p).normalize(),S.push(m.x,m.y,m.z),x.push(P+w,1-T),E.push(h++)}f.push(E)}for(let y=0;y<n;y++)for(let E=0;E<t;E++){const T=f[y][E+1],w=f[y][E],U=f[y+1][E],P=f[y+1][E+1];(y!==0||o>0)&&g.push(T,w,P),(y!==n-1||u<Math.PI)&&g.push(w,U,P)}this.setIndex(g),this.setAttribute("position",new Ve(v,3)),this.setAttribute("normal",new Ve(S,3)),this.setAttribute("uv",new Ve(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ih extends jr{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ih(e.radius,e.detail)}}class Lh extends _t{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],c=[],u=[],h=[],f=new D,p=new D,m=new D;for(let g=0;g<=n;g++)for(let v=0;v<=i;v++){const S=v/i*s,x=g/n*Math.PI*2;p.x=(e+t*Math.cos(x))*Math.cos(S),p.y=(e+t*Math.cos(x))*Math.sin(S),p.z=t*Math.sin(x),c.push(p.x,p.y,p.z),f.x=e*Math.cos(S),f.y=e*Math.sin(S),m.subVectors(p,f).normalize(),u.push(m.x,m.y,m.z),h.push(v/i),h.push(g/n)}for(let g=1;g<=n;g++)for(let v=1;v<=i;v++){const S=(i+1)*g+v-1,x=(i+1)*(g-1)+v-1,y=(i+1)*(g-1)+v,E=(i+1)*g+v;o.push(S,x,E),o.push(x,y,E)}this.setIndex(o),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(u,3)),this.setAttribute("uv",new Ve(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Dh extends _t{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const c=[],u=[],h=[],f=[],p=new D,m=new D,g=new D,v=new D,S=new D,x=new D,y=new D;for(let T=0;T<=n;++T){const w=T/n*s*Math.PI*2;E(w,s,o,e,g),E(w+.01,s,o,e,v),x.subVectors(v,g),y.addVectors(v,g),S.crossVectors(x,y),y.crossVectors(S,x),S.normalize(),y.normalize();for(let U=0;U<=i;++U){const P=U/i*Math.PI*2,L=-t*Math.cos(P),O=t*Math.sin(P);p.x=g.x+(L*y.x+O*S.x),p.y=g.y+(L*y.y+O*S.y),p.z=g.z+(L*y.z+O*S.z),u.push(p.x,p.y,p.z),m.subVectors(p,g).normalize(),h.push(m.x,m.y,m.z),f.push(T/n),f.push(U/i)}}for(let T=1;T<=n;T++)for(let w=1;w<=i;w++){const U=(i+1)*(T-1)+(w-1),P=(i+1)*T+(w-1),L=(i+1)*T+w,O=(i+1)*(T-1)+w;c.push(U,P,O),c.push(P,L,O)}this.setIndex(c),this.setAttribute("position",new Ve(u,3)),this.setAttribute("normal",new Ve(h,3)),this.setAttribute("uv",new Ve(f,2));function E(T,w,U,P,L){const O=Math.cos(T),R=Math.sin(T),A=U/w*T,N=Math.cos(A);L.x=P*(2+N)*.5*O,L.y=P*(2+N)*R*.5,L.z=P*Math.sin(A)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Uh extends _t{constructor(e=new Vp(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const c=new D,u=new D,h=new le;let f=new D;const p=[],m=[],g=[],v=[];S(),this.setIndex(v),this.setAttribute("position",new Ve(p,3)),this.setAttribute("normal",new Ve(m,3)),this.setAttribute("uv",new Ve(g,2));function S(){for(let T=0;T<t;T++)x(T);x(s===!1?t:0),E(),y()}function x(T){f=e.getPointAt(T/t,f);const w=o.normals[T],U=o.binormals[T];for(let P=0;P<=i;P++){const L=P/i*Math.PI*2,O=Math.sin(L),R=-Math.cos(L);u.x=R*w.x+O*U.x,u.y=R*w.y+O*U.y,u.z=R*w.z+O*U.z,u.normalize(),m.push(u.x,u.y,u.z),c.x=f.x+n*u.x,c.y=f.y+n*u.y,c.z=f.z+n*u.z,p.push(c.x,c.y,c.z)}}function y(){for(let T=1;T<=t;T++)for(let w=1;w<=i;w++){const U=(i+1)*(T-1)+(w-1),P=(i+1)*T+(w-1),L=(i+1)*T+w,O=(i+1)*(T-1)+w;v.push(U,P,O),v.push(P,L,O)}}function E(){for(let T=0;T<=t;T++)for(let w=0;w<=i;w++)h.x=T/t,h.y=w/i,g.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Uh(new eh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Wp extends _t{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new D,s=new D;if(e.index!==null){const o=e.attributes.position,c=e.index;let u=e.groups;u.length===0&&(u=[{start:0,count:c.count,materialIndex:0}]);for(let h=0,f=u.length;h<f;++h){const p=u[h],m=p.start,g=p.count;for(let v=m,S=m+g;v<S;v+=3)for(let x=0;x<3;x++){const y=c.getX(v+x),E=c.getX(v+(x+1)%3);i.fromBufferAttribute(o,y),s.fromBufferAttribute(o,E),K_(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let c=0,u=o.count/3;c<u;c++)for(let h=0;h<3;h++){const f=3*c+h,p=3*c+(h+1)%3;i.fromBufferAttribute(o,f),s.fromBufferAttribute(o,p),K_(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ve(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function K_(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}const J_=Object.freeze(Object.defineProperty({__proto__:null,BoxGeometry:Vs,CapsuleGeometry:Sh,CircleGeometry:wh,ConeGeometry:Eh,CylinderGeometry:Zo,DodecahedronGeometry:Th,EdgesGeometry:gv,ExtrudeGeometry:Ah,IcosahedronGeometry:Rh,LatheGeometry:hl,OctahedronGeometry:fl,PlaneGeometry:Yo,PolyhedronGeometry:jr,RingGeometry:Ch,ShapeGeometry:Ph,SphereGeometry:dl,TetrahedronGeometry:Ih,TorusGeometry:Lh,TorusKnotGeometry:Dh,TubeGeometry:Uh,WireframeGeometry:Wp},Symbol.toStringTag,{value:"Module"}));class xv extends Nn{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new Ne(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Mv extends Si{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Xp extends Nn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sv extends Xp{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class wv extends Nn{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Ne(16777215),this.specular=new Ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ev extends Nn{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Ne(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Tv extends Nn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class bv extends Nn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Av extends Nn{static get type(){return"MeshMatcapMaterial"}constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.color=new Ne(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rv extends Xn{static get type(){return"LineDashedMaterial"}constructor(e){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function As(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Cv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Pv(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function cp(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const c=t[s]*e;for(let u=0;u!==e;++u)i[o++]=r[c+u]}return i}function Yp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}function oA(r,e,t,n,i=30){const s=r.clone();s.name=e;const o=[];for(let u=0;u<s.tracks.length;++u){const h=s.tracks[u],f=h.getValueSize(),p=[],m=[];for(let g=0;g<h.times.length;++g){const v=h.times[g]*i;if(!(v<t||v>=n)){p.push(h.times[g]);for(let S=0;S<f;++S)m.push(h.values[g*f+S])}}p.length!==0&&(h.times=As(p,h.times.constructor),h.values=As(m,h.values.constructor),o.push(h))}s.tracks=o;let c=1/0;for(let u=0;u<s.tracks.length;++u)c>s.tracks[u].times[0]&&(c=s.tracks[u].times[0]);for(let u=0;u<s.tracks.length;++u)s.tracks[u].shift(-1*c);return s.resetDuration(),s}function aA(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){const c=t.tracks[o],u=c.ValueTypeName;if(u==="bool"||u==="string")continue;const h=r.tracks.find(function(y){return y.name===c.name&&y.ValueTypeName===u});if(h===void 0)continue;let f=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=p/3);let m=0;const g=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(m=g/3);const v=c.times.length-1;let S;if(s<=c.times[0]){const y=f,E=p-f;S=c.values.slice(y,E)}else if(s>=c.times[v]){const y=v*p+f,E=y+p-f;S=c.values.slice(y,E)}else{const y=c.createInterpolant(),E=f,T=p-f;y.evaluate(s),S=y.resultBuffer.slice(E,T)}u==="quaternion"&&new An().fromArray(S).normalize().conjugate().toArray(S);const x=h.times.length;for(let y=0;y<x;++y){const E=y*g+m;if(u==="quaternion")An.multiplyQuaternionsFlat(h.values,E,S,0,h.values,E);else{const T=g-m*2;for(let w=0;w<T;++w)h.values[E+w]-=S[w]}}}return r.blendMode=Tp,r}const lA={convertArray:As,isTypedArray:Cv,getKeyframeOrder:Pv,sortedArray:cp,flattenJSON:Yp,subclip:oA,makeClipAdditive:aA};class pl{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let c=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const c=t[1];e<c&&(n=2,s=c);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const c=n+o>>>1;e<t[c]?o=c:n=c+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Iv extends pl{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ts,endingEnd:Ts}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,c=i[s],u=i[o];if(c===void 0)switch(this.getSettings_().endingStart){case bs:s=e,c=2*t-n;break;case Wa:s=i.length-2,c=t+i[s]-i[s+1];break;default:s=e,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case bs:o=e,u=2*n-t;break;case Wa:o=1,u=n+i[1]-i[0];break;default:o=e-1,u=t}const h=(n-t)*.5,f=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(u-n),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,g=this._weightNext,v=(n-t)/(i-t),S=v*v,x=S*v,y=-m*x+2*m*S-m*v,E=(1+m)*x+(-1.5-2*m)*S+(-.5+m)*v+1,T=(-1-g)*x+(1.5+g)*S+.5*v,w=g*x-g*S;for(let U=0;U!==c;++U)s[U]=y*o[f+U]+E*o[h+U]+T*o[u+U]+w*o[p+U];return s}}class qp extends pl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=(n-t)/(i-t),p=1-f;for(let m=0;m!==c;++m)s[m]=o[h+m]*p+o[u+m]*f;return s}}class Lv extends pl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Oi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=As(t,this.TimeBufferType),this.values=As(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:As(e.times,Array),values:As(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Iv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Bo:t=this.InterpolantFactoryMethodDiscrete;break;case Ga:t=this.InterpolantFactoryMethodLinear;break;case pu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bo;case this.InterpolantFactoryMethodLinear:return Ga;case this.InterpolantFactoryMethodSmooth:return pu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const c=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*c,o*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let c=0;c!==s;c++){const u=n[c];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,u),e=!1;break}if(o!==null&&o>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,u,o),e=!1;break}o=u}if(i!==void 0&&Cv(i))for(let c=0,u=i.length;c!==u;++c){const h=i[c];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===pu,s=e.length-1;let o=1;for(let c=1;c<s;++c){let u=!1;const h=e[c],f=e[c+1];if(h!==f&&(c!==1||h!==e[0]))if(i)u=!0;else{const p=c*n,m=p-n,g=p+n;for(let v=0;v!==n;++v){const S=t[p+v];if(S!==t[m+v]||S!==t[g+v]){u=!0;break}}}if(u){if(c!==o){e[o]=e[c];const p=c*n,m=o*n;for(let g=0;g!==n;++g)t[m+g]=t[p+g]}++o}}if(s>0){e[o]=e[s];for(let c=s*n,u=o*n,h=0;h!==n;++h)t[u+h]=t[c+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Oi.prototype.TimeBufferType=Float32Array;Oi.prototype.ValueBufferType=Float32Array;Oi.prototype.DefaultInterpolation=Ga;class Gs extends Oi{constructor(e,t,n){super(e,t,n)}}Gs.prototype.ValueTypeName="bool";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Bo;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Zp extends Oi{}Zp.prototype.ValueTypeName="color";class $a extends Oi{}$a.prototype.ValueTypeName="number";class Dv extends pl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=(n-t)/(i-t);let h=e*c;for(let f=h+c;h!==f;h+=4)An.slerpFlat(s,0,o,h-c,o,h,u);return s}}class ml extends Oi{InterpolantFactoryMethodLinear(e){return new Dv(this.times,this.values,this.getValueSize(),e)}}ml.prototype.ValueTypeName="quaternion";ml.prototype.InterpolantFactoryMethodSmooth=void 0;class Ws extends Oi{constructor(e,t,n){super(e,t,n)}}Ws.prototype.ValueTypeName="string";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=Bo;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;class el extends Oi{}el.prototype.ValueTypeName="vector";class tl{constructor(e="",t=-1,n=[],i=dh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=hi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,c=n.length;o!==c;++o)t.push(uA(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Oi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let c=0;c<s;c++){let u=[],h=[];u.push((c+s-1)%s,c,(c+1)%s),h.push(0,1,0);const f=Pv(u);u=cp(u,1,f),h=cp(h,1,f),!i&&u[0]===0&&(u.push(s),h.push(h[0])),o.push(new $a(".morphTargetInfluences["+t[c].name+"]",u,h).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,u=e.length;c<u;c++){const h=e[c],f=h.name.match(s);if(f&&f.length>1){const p=f[1];let m=i[p];m||(i[p]=m=[]),m.push(h)}}const o=[];for(const c in i)o.push(this.CreateFromMorphTargetSequence(c,i[c],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(p,m,g,v,S){if(g.length!==0){const x=[],y=[];Yp(g,x,y,v),x.length!==0&&S.push(new p(m,x,y))}},i=[],s=e.name||"default",o=e.fps||30,c=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let p=0;p<h.length;p++){const m=h[p].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const g={};let v;for(v=0;v<m.length;v++)if(m[v].morphTargets)for(let S=0;S<m[v].morphTargets.length;S++)g[m[v].morphTargets[S]]=-1;for(const S in g){const x=[],y=[];for(let E=0;E!==m[v].morphTargets.length;++E){const T=m[v];x.push(T.time),y.push(T.morphTarget===S?1:0)}i.push(new $a(".morphTargetInfluence["+S+"]",x,y))}u=g.length*o}else{const g=".bones["+t[p].name+"]";n(el,g+".position",m,"pos",i),n(ml,g+".quaternion",m,"rot",i),n(el,g+".scale",m,"scl",i)}}return i.length===0?null:new this(s,u,i,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function cA(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $a;case"vector":case"vector2":case"vector3":case"vector4":return el;case"color":return Zp;case"quaternion":return ml;case"bool":case"boolean":return Gs;case"string":return Ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function uA(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=cA(r.type);if(r.times===void 0){const t=[],n=[];Yp(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const _r={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class jp{constructor(e,t,n){const i=this;let s=!1,o=0,c=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){c++,s===!1&&i.onStart!==void 0&&i.onStart(f,o,c),s=!0},this.itemEnd=function(f){o++,i.onProgress!==void 0&&i.onProgress(f,o,c),o===c&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,p){return h.push(f,p),this},this.removeHandler=function(f){const p=h.indexOf(f);return p!==-1&&h.splice(p,2),this},this.getHandler=function(f){for(let p=0,m=h.length;p<m;p+=2){const g=h[p],v=h[p+1];if(g.global&&(g.lastIndex=0),g.test(f))return v}return null}}}const Uv=new jp;class ti{constructor(e){this.manager=e!==void 0?e:Uv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ti.DEFAULT_MATERIAL_NAME="__DEFAULT";const pr={};class hA extends Error{constructor(e,t){super(e),this.response=t}}class wr extends ti{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=_r.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(pr[e]!==void 0){pr[e].push({onLoad:t,onProgress:n,onError:i});return}pr[e]=[],pr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,u=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const f=pr[e],p=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),g=m?parseInt(m):0,v=g!==0;let S=0;const x=new ReadableStream({start(y){E();function E(){p.read().then(({done:T,value:w})=>{if(T)y.close();else{S+=w.byteLength;const U=new ProgressEvent("progress",{lengthComputable:v,loaded:S,total:g});for(let P=0,L=f.length;P<L;P++){const O=f[P];O.onProgress&&O.onProgress(U)}y.enqueue(w),E()}},T=>{y.error(T)})}}});return new Response(x)}else throw new hA(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(f=>new DOMParser().parseFromString(f,c));case"json":return h.json();default:if(c===void 0)return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(c),m=p&&p[1]?p[1].toLowerCase():void 0,g=new TextDecoder(m);return h.arrayBuffer().then(v=>g.decode(v))}}}).then(h=>{_r.add(e,h);const f=pr[e];delete pr[e];for(let p=0,m=f.length;p<m;p++){const g=f[p];g.onLoad&&g.onLoad(h)}}).catch(h=>{const f=pr[e];if(f===void 0)throw this.manager.itemError(e),h;delete pr[e];for(let p=0,m=f.length;p<m;p++){const g=f[p];g.onError&&g.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class fA extends ti{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new wr(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=tl.parse(e[n]);t.push(i)}return t}}class dA extends ti{constructor(e){super(e)}load(e,t,n,i){const s=this,o=[],c=new Ds,u=new wr(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(s.withCredentials);let h=0;function f(p){u.load(e[p],function(m){const g=s.parse(m,!0);o[p]={width:g.width,height:g.height,format:g.format,mipmaps:g.mipmaps},h+=1,h===6&&(g.mipmapCount===1&&(c.minFilter=on),c.image=o,c.format=g.format,c.needsUpdate=!0,t&&t(c))},n,i)}if(Array.isArray(e))for(let p=0,m=e.length;p<m;++p)f(p);else u.load(e,function(p){const m=s.parse(p,!0);if(m.isCubemap){const g=m.mipmaps.length/m.mipmapCount;for(let v=0;v<g;v++){o[v]={mipmaps:[]};for(let S=0;S<m.mipmapCount;S++)o[v].mipmaps.push(m.mipmaps[v*m.mipmapCount+S]),o[v].format=m.format,o[v].width=m.width,o[v].height=m.height}c.image=o}else c.image.width=m.width,c.image.height=m.height,c.mipmaps=m.mipmaps;m.mipmapCount===1&&(c.minFilter=on),c.format=m.format,c.needsUpdate=!0,t&&t(c)},n,i);return c}}class nl extends ti{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=_r.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const c=qa("img");function u(){f(),_r.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(p){f(),i&&i(p),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){c.removeEventListener("load",u,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),s.manager.itemStart(e),c.src=e,c}}class pA extends ti{constructor(e){super(e)}load(e,t,n,i){const s=new ll;s.colorSpace=Hn;const o=new nl(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let c=0;function u(h){o.load(e[h],function(f){s.images[h]=f,c++,c===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let h=0;h<e.length;++h)u(h);return s}}class mA extends ti{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new $i,c=new wr(this.manager);return c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(s.withCredentials),c.load(e,function(u){let h;try{h=s.parse(u)}catch(f){if(i!==void 0)i(f);else{console.error(f);return}}h.image!==void 0?o.image=h.image:h.data!==void 0&&(o.image.width=h.width,o.image.height=h.height,o.image.data=h.data),o.wrapS=h.wrapS!==void 0?h.wrapS:li,o.wrapT=h.wrapT!==void 0?h.wrapT:li,o.magFilter=h.magFilter!==void 0?h.magFilter:on,o.minFilter=h.minFilter!==void 0?h.minFilter:on,o.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(o.colorSpace=h.colorSpace),h.flipY!==void 0&&(o.flipY=h.flipY),h.format!==void 0&&(o.format=h.format),h.type!==void 0&&(o.type=h.type),h.mipmaps!==void 0&&(o.mipmaps=h.mipmaps,o.minFilter=Li),h.mipmapCount===1&&(o.minFilter=on),h.generateMipmaps!==void 0&&(o.generateMipmaps=h.generateMipmaps),o.needsUpdate=!0,t&&t(o,h)},n,i),o}}class gA extends ti{constructor(e){super(e)}load(e,t,n,i){const s=new Jt,o=new nl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Kr extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Nv extends Kr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ad=new et,Q_=new D,$_=new D;class Kp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cl,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Q_.setFromMatrixPosition(e.matrixWorld),t.position.copy(Q_),$_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($_),t.updateMatrixWorld(),Ad.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ad),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _A extends Kp{constructor(){super(new yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=zo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ov extends Kr{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new _A}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const e0=new et,Ta=new D,Rd=new D;class yA extends Kp{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ta.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ta),Rd.copy(n.position),Rd.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Rd),n.updateMatrixWorld(),i.makeTranslation(-Ta.x,-Ta.y,-Ta.z),e0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(e0)}}class Fv extends Kr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new yA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class vA extends Kp{constructor(){super(new ul(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bv extends Kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new vA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zv extends Kr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class kv extends Kr{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Hv{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new D)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class Vv extends Kr{constructor(e=new Hv,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Nh extends ti{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,o=new wr(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(i.uniforms[s]={},o.type){case"t":i.uniforms[s].value=n(o.value);break;case"c":i.uniforms[s].value=new Ne().setHex(o.value);break;case"v2":i.uniforms[s].value=new le().fromArray(o.value);break;case"v3":i.uniforms[s].value=new D().fromArray(o.value);break;case"v4":i.uniforms[s].value=new Et().fromArray(o.value);break;case"m3":i.uniforms[s].value=new ft().fromArray(o.value);break;case"m4":i.uniforms[s].value=new et().fromArray(o.value);break;default:i.uniforms[s].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new le().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Nh.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:xv,SpriteMaterial:Np,RawShaderMaterial:Mv,ShaderMaterial:Si,PointsMaterial:Fp,MeshPhysicalMaterial:Sv,MeshStandardMaterial:Xp,MeshPhongMaterial:wv,MeshToonMaterial:Ev,MeshNormalMaterial:Tv,MeshLambertMaterial:bv,MeshDepthMaterial:Dp,MeshDistanceMaterial:Up,MeshBasicMaterial:Zr,MeshMatcapMaterial:Av,LineDashedMaterial:Rv,LineBasicMaterial:Xn,Material:Nn};return new t[e]}}class up{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Jp extends _t{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Gv extends ti{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new wr(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(g,v){if(t[v]!==void 0)return t[v];const x=g.interleavedBuffers[v],y=s(g,x.buffer),E=Ro(x.type,y),T=new vh(E,x.stride);return T.uuid=x.uuid,t[v]=T,T}function s(g,v){if(n[v]!==void 0)return n[v];const x=g.arrayBuffers[v],y=new Uint32Array(x).buffer;return n[v]=y,y}const o=e.isInstancedBufferGeometry?new Jp:new _t,c=e.data.index;if(c!==void 0){const g=Ro(c.type,c.array);o.setIndex(new Rt(g,1))}const u=e.data.attributes;for(const g in u){const v=u[g];let S;if(v.isInterleavedBufferAttribute){const x=i(e.data,v.data);S=new ci(x,v.itemSize,v.offset,v.normalized)}else{const x=Ro(v.type,v.array),y=v.isInstancedBufferAttribute?Vo:Rt;S=new y(x,v.itemSize,v.normalized)}v.name!==void 0&&(S.name=v.name),v.usage!==void 0&&S.setUsage(v.usage),o.setAttribute(g,S)}const h=e.data.morphAttributes;if(h)for(const g in h){const v=h[g],S=[];for(let x=0,y=v.length;x<y;x++){const E=v[x];let T;if(E.isInterleavedBufferAttribute){const w=i(e.data,E.data);T=new ci(w,E.itemSize,E.offset,E.normalized)}else{const w=Ro(E.type,E.array);T=new Rt(w,E.itemSize,E.normalized)}E.name!==void 0&&(T.name=E.name),S.push(T)}o.morphAttributes[g]=S}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const p=e.data.groups||e.data.drawcalls||e.data.offsets;if(p!==void 0)for(let g=0,v=p.length;g!==v;++g){const S=p[g];o.addGroup(S.start,S.count,S.materialIndex)}const m=e.data.boundingSphere;if(m!==void 0){const g=new D;m.center!==void 0&&g.fromArray(m.center),o.boundingSphere=new Mn(g,m.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class xA extends ti{constructor(e){super(e)}load(e,t,n,i){const s=this,o=this.path===""?up.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const c=new wr(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){let h=null;try{h=JSON.parse(u)}catch(p){i!==void 0&&i(p),console.error("THREE:ObjectLoader: Can't parse "+e+".",p.message);return}const f=h.metadata;if(f===void 0||f.type===void 0||f.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(h,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?up.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new wr(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const o=await s.loadAsync(e,t),c=JSON.parse(o),u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(c)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(h)}),c=this.parseTextures(e.textures,o),u=this.parseMaterials(e.materials,c),h=this.parseObject(e.object,s,u,c,n),f=this.parseSkeletons(e.skeletons,h);if(this.bindSkeletons(h,f),this.bindLightTargets(h),t!==void 0){let p=!1;for(const m in o)if(o[m].data instanceof HTMLImageElement){p=!0;break}p===!1&&t(h)}return h}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,s),c=this.parseMaterials(e.materials,o),u=this.parseObject(e.object,i,c,o,t),h=this.parseSkeletons(e.skeletons,u);return this.bindSkeletons(u,h),this.bindLightTargets(u),u}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new Us().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const c=new xh().fromJSON(e[s],i);n[c.uuid]=c}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new Gv;for(let s=0,o=e.length;s<o;s++){let c;const u=e[s];switch(u.type){case"BufferGeometry":case"InstancedBufferGeometry":c=i.parse(u);break;default:u.type in J_?c=J_[u.type].fromJSON(u,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${u.type}"`)}c.uuid=u.uuid,u.name!==void 0&&(c.name=u.name),u.userData!==void 0&&(c.userData=u.userData),n[u.uuid]=c}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new Nh;s.setTextures(t);for(let o=0,c=e.length;o<c;o++){const u=e[o];n[u.uuid]===void 0&&(n[u.uuid]=s.parse(u)),i[u.uuid]=n[u.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=tl.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function o(u){return n.manager.itemStart(u),s.load(u,function(){n.manager.itemEnd(u)},void 0,function(){n.manager.itemError(u),n.manager.itemEnd(u)})}function c(u){if(typeof u=="string"){const h=u,f=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h)?h:n.resourcePath+h;return o(f)}else return u.data?{data:Ro(u.type,u.data),width:u.width,height:u.height}:null}if(e!==void 0&&e.length>0){const u=new jp(t);s=new nl(u),s.setCrossOrigin(this.crossOrigin);for(let h=0,f=e.length;h<f;h++){const p=e[h],m=p.url;if(Array.isArray(m)){const g=[];for(let v=0,S=m.length;v<S;v++){const x=m[v],y=c(x);y!==null&&(y instanceof HTMLImageElement?g.push(y):g.push(new $i(y.data,y.width,y.height)))}i[p.uuid]=new Wr(g)}else{const g=c(p.url);i[p.uuid]=new Wr(g)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(o){if(typeof o=="string"){const c=o,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:t.resourcePath+c;return await i.loadAsync(u)}else return o.data?{data:Ro(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new nl(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,c=e.length;o<c;o++){const u=e[o],h=u.url;if(Array.isArray(h)){const f=[];for(let p=0,m=h.length;p<m;p++){const g=h[p],v=await s(g);v!==null&&(v instanceof HTMLImageElement?f.push(v):f.push(new $i(v.data,v.width,v.height)))}n[u.uuid]=new Wr(f)}else{const f=await s(u.url);n[u.uuid]=new Wr(f)}}}return n}parseTextures(e,t){function n(s,o){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const i={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const c=e[s];c.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',c.uuid),t[c.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",c.image);const u=t[c.image],h=u.data;let f;Array.isArray(h)?(f=new ll,h.length===6&&(f.needsUpdate=!0)):(h&&h.data?f=new $i:f=new Jt,h&&(f.needsUpdate=!0)),f.source=u,f.uuid=c.uuid,c.name!==void 0&&(f.name=c.name),c.mapping!==void 0&&(f.mapping=n(c.mapping,MA)),c.channel!==void 0&&(f.channel=c.channel),c.offset!==void 0&&f.offset.fromArray(c.offset),c.repeat!==void 0&&f.repeat.fromArray(c.repeat),c.center!==void 0&&f.center.fromArray(c.center),c.rotation!==void 0&&(f.rotation=c.rotation),c.wrap!==void 0&&(f.wrapS=n(c.wrap[0],t0),f.wrapT=n(c.wrap[1],t0)),c.format!==void 0&&(f.format=c.format),c.internalFormat!==void 0&&(f.internalFormat=c.internalFormat),c.type!==void 0&&(f.type=c.type),c.colorSpace!==void 0&&(f.colorSpace=c.colorSpace),c.minFilter!==void 0&&(f.minFilter=n(c.minFilter,n0)),c.magFilter!==void 0&&(f.magFilter=n(c.magFilter,n0)),c.anisotropy!==void 0&&(f.anisotropy=c.anisotropy),c.flipY!==void 0&&(f.flipY=c.flipY),c.generateMipmaps!==void 0&&(f.generateMipmaps=c.generateMipmaps),c.premultiplyAlpha!==void 0&&(f.premultiplyAlpha=c.premultiplyAlpha),c.unpackAlignment!==void 0&&(f.unpackAlignment=c.unpackAlignment),c.compareFunction!==void 0&&(f.compareFunction=c.compareFunction),c.userData!==void 0&&(f.userData=c.userData),i[c.uuid]=f}return i}parseObject(e,t,n,i,s){let o;function c(m){return t[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",m),t[m]}function u(m){if(m!==void 0){if(Array.isArray(m)){const g=[];for(let v=0,S=m.length;v<S;v++){const x=m[v];n[x]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",x),g.push(n[x])}return g}return n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),n[m]}}function h(m){return i[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",m),i[m]}let f,p;switch(e.type){case"Scene":o=new Za,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new Ne(e.background):o.background=h(e.background)),e.environment!==void 0&&(o.environment=h(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new yh(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new _h(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new yn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new ul(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new zv(e.color,e.intensity);break;case"DirectionalLight":o=new Bv(e.color,e.intensity),o.target=e.target||"";break;case"PointLight":o=new Fv(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new kv(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new Ov(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),o.target=e.target||"";break;case"HemisphereLight":o=new Nv(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new Vv().fromJSON(e);break;case"SkinnedMesh":f=c(e.geometry),p=u(e.material),o=new ov(f,p),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":f=c(e.geometry),p=u(e.material),o=new tn(f,p);break;case"InstancedMesh":f=c(e.geometry),p=u(e.material);const m=e.count,g=e.instanceMatrix,v=e.instanceColor;o=new av(f,p,m),o.instanceMatrix=new Vo(new Float32Array(g.array),16),v!==void 0&&(o.instanceColor=new Vo(new Float32Array(v.array),v.itemSize));break;case"BatchedMesh":f=c(e.geometry),p=u(e.material),o=new lv(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,p),o.geometry=f,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._visibility=e.visibility,o._active=e.active,o._bounds=e.bounds.map(S=>{const x=new xn;x.min.fromArray(S.boxMin),x.max.fromArray(S.boxMax);const y=new Mn;return y.radius=S.sphereRadius,y.center.fromArray(S.sphereCenter),{boxInitialized:S.boxInitialized,box:x,sphereInitialized:S.sphereInitialized,sphere:y}}),o._maxInstanceCount=e.maxInstanceCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._geometryCount=e.geometryCount,o._matricesTexture=h(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(o._colorsTexture=h(e.colorsTexture.uuid));break;case"LOD":o=new sv;break;case"Line":o=new Yr(c(e.geometry),u(e.material));break;case"LineLoop":o=new cv(c(e.geometry),u(e.material));break;case"LineSegments":o=new nr(c(e.geometry),u(e.material));break;case"PointCloud":case"Points":o=new uv(c(e.geometry),u(e.material));break;case"Sprite":o=new rv(u(e.material));break;case"Group":o=new Po;break;case"Bone":o=new Op;break;default:o=new It}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(o.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const m=e.children;for(let g=0;g<m.length;g++)o.add(this.parseObject(m[g],t,n,i,s))}if(e.animations!==void 0){const m=e.animations;for(let g=0;g<m.length;g++){const v=m[g];o.animations.push(s[v])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const m=e.levels;for(let g=0;g<m.length;g++){const v=m[g],S=o.getObjectByProperty("uuid",v.object);S!==void 0&&o.addLevel(S,v.distance,v.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new It}})}}const MA={UVMapping:sh,CubeReflectionMapping:Mr,CubeRefractionMapping:Xr,EquirectangularReflectionMapping:Ha,EquirectangularRefractionMapping:Va,CubeUVReflectionMapping:Wo},t0={RepeatWrapping:No,ClampToEdgeWrapping:li,MirroredRepeatWrapping:Oo},n0={NearestFilter:vn,NearestMipmapNearestFilter:oh,NearestMipmapLinearFilter:Es,LinearFilter:on,LinearMipmapNearestFilter:Do,LinearMipmapLinearFilter:Li};class SA extends ti{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=_r.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const u=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return _r.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),_r.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});_r.add(e,u),s.manager.itemStart(e)}}let tu;class Qp{static getContext(){return tu===void 0&&(tu=new(window.AudioContext||window.webkitAudioContext)),tu}static setContext(e){tu=e}}class wA extends ti{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new wr(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(u){try{const h=u.slice(0);Qp.getContext().decodeAudioData(h,function(p){t(p)}).catch(c)}catch(h){c(h)}},n,i);function c(u){i?i(u):console.error(u),s.manager.itemError(e)}}}const i0=new et,r0=new et,ms=new et;class EA{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new yn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new yn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,ms.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,o=t.near*Math.tan(Is*t.fov*.5)/t.zoom;let c,u;r0.elements[12]=-i,i0.elements[12]=i,c=-o*t.aspect+s,u=o*t.aspect+s,ms.elements[0]=2*t.near/(u-c),ms.elements[8]=(u+c)/(u-c),this.cameraL.projectionMatrix.copy(ms),c=-o*t.aspect-s,u=o*t.aspect-s,ms.elements[0]=2*t.near/(u-c),ms.elements[8]=(u+c)/(u-c),this.cameraR.projectionMatrix.copy(ms)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(r0),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(i0)}}class $p{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=s0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=s0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function s0(){return performance.now()}const gs=new D,o0=new An,TA=new D,_s=new D;class bA extends It{constructor(){super(),this.type="AudioListener",this.context=Qp.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new $p}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(gs,o0,TA),_s.set(0,0,-1).applyQuaternion(o0),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(gs.x,i),t.positionY.linearRampToValueAtTime(gs.y,i),t.positionZ.linearRampToValueAtTime(gs.z,i),t.forwardX.linearRampToValueAtTime(_s.x,i),t.forwardY.linearRampToValueAtTime(_s.y,i),t.forwardZ.linearRampToValueAtTime(_s.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(gs.x,gs.y,gs.z),t.setOrientation(_s.x,_s.y,_s.z,n.x,n.y,n.z)}}class Wv extends It{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const ys=new D,a0=new An,AA=new D,vs=new D;class RA extends Wv{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ys,a0,AA),vs.set(0,0,1).applyQuaternion(a0);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(ys.x,n),t.positionY.linearRampToValueAtTime(ys.y,n),t.positionZ.linearRampToValueAtTime(ys.z,n),t.orientationX.linearRampToValueAtTime(vs.x,n),t.orientationY.linearRampToValueAtTime(vs.y,n),t.orientationZ.linearRampToValueAtTime(vs.z,n)}else t.setPosition(ys.x,ys.y,ys.z),t.setOrientation(vs.x,vs.y,vs.z)}}class CA{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Xv{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let c=0;c!==i;++c)n[s+c]=n[c];o=t}else{o+=t;const c=t/o;this._mixBufferRegion(n,s,0,c,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,c=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const u=t*this._origIndex;this._mixBufferRegion(n,i,u,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let u=t,h=t+t;u!==h;++u)if(n[u]!==n[u+t]){c.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){An.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;An.multiplyQuaternionsFlat(e,o,e,t,e,n),An.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let c=0;c!==s;++c){const u=t+c;e[u]=e[u]*o+e[n+c]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]+e[n+o]*i}}}const em="\\[\\]\\.:\\/",PA=new RegExp("["+em+"]","g"),tm="[^"+em+"]",IA="[^"+em.replace("\\.","")+"]",LA=/((?:WC+[\/:])*)/.source.replace("WC",tm),DA=/(WCOD+)?/.source.replace("WCOD",IA),UA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tm),NA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tm),OA=new RegExp("^"+LA+DA+UA+NA+"$"),FA=["material","materials","bones","map"];class BA{constructor(e,t,n){const i=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class bt{constructor(e,t,n){this.path=t,this.parsedPath=n||bt.parseTrackName(t),this.node=bt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new bt.Composite(e,t,n):new bt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(PA,"")}static parseTrackName(e){const t=OA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);FA.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const c=s[o];if(c.name===t||c.uuid===t)return c;const u=n(c.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=bt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===h){h=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const o=e[i];if(o===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}bt.Composite=BA;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class zA{constructor(){this.isAnimationObjectGroup=!0,this.uuid=hi(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length;let c,u=e.length,h=this.nCachedObjects_;for(let f=0,p=arguments.length;f!==p;++f){const m=arguments[f],g=m.uuid;let v=t[g];if(v===void 0){v=u++,t[g]=v,e.push(m);for(let S=0,x=o;S!==x;++S)s[S].push(new bt(m,n[S],i[S]))}else if(v<h){c=e[v];const S=--h,x=e[S];t[x.uuid]=v,e[v]=x,t[g]=S,e[S]=m;for(let y=0,E=o;y!==E;++y){const T=s[y],w=T[S];let U=T[v];T[v]=w,U===void 0&&(U=new bt(m,n[y],i[y])),T[S]=U}}else e[v]!==c&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=h}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let o=0,c=arguments.length;o!==c;++o){const u=arguments[o],h=u.uuid,f=t[h];if(f!==void 0&&f>=s){const p=s++,m=e[p];t[m.uuid]=f,e[f]=m,t[h]=p,e[p]=u;for(let g=0,v=i;g!==v;++g){const S=n[g],x=S[p],y=S[f];S[f]=x,S[p]=y}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,o=e.length;for(let c=0,u=arguments.length;c!==u;++c){const h=arguments[c],f=h.uuid,p=t[f];if(p!==void 0)if(delete t[f],p<s){const m=--s,g=e[m],v=--o,S=e[v];t[g.uuid]=p,e[p]=g,t[S.uuid]=m,e[m]=S,e.pop();for(let x=0,y=i;x!==y;++x){const E=n[x],T=E[m],w=E[v];E[p]=T,E[m]=w,E.pop()}}else{const m=--o,g=e[m];m>0&&(t[g.uuid]=p),e[p]=g,e.pop();for(let v=0,S=i;v!==S;++v){const x=n[v];x[p]=x[m],x.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const o=this._paths,c=this._parsedPaths,u=this._objects,h=u.length,f=this.nCachedObjects_,p=new Array(h);i=s.length,n[e]=i,o.push(e),c.push(t),s.push(p);for(let m=f,g=u.length;m!==g;++m){const v=u[m];p[m]=new bt(v,e,t)}return p}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,o=this._bindings,c=o.length-1,u=o[c],h=e[c];t[h]=n,o[n]=u,o.pop(),s[n]=s[c],s.pop(),i[n]=i[c],i.pop()}}}class Yv{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,c=new Array(o),u={endingStart:Ts,endingEnd:Ts};for(let h=0;h!==o;++h){const f=s[h].createInterpolant(null);c[h]=f,f.settings=u}this._interpolantSettings=u,this._interpolants=c,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Cy,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,c=i/s;e.warp(1,o,t),this.warp(c,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let c=this._timeScaleInterpolant;c===null&&(c=i._lendControlInterpolant(),this._timeScaleInterpolant=c);const u=c.parameterPositions,h=c.sampleValues;return u[0]=s,u[1]=s+n,h[0]=e/o,h[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const u=(e-s)*n;u<0||n===0?t=0:(this._startTime=null,t=n*u)}t*=this._updateTimeScale(e);const o=this._updateTime(t),c=this._updateWeight(e);if(c>0){const u=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case Tp:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(o),h[f].accumulateAdditive(c);break;case dh:default:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(o),h[f].accumulate(i,c)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Py;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Ry){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const c=Math.floor(i/t);i-=t*c,s+=Math.abs(c);const u=this.repetitions-s;if(u<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(u===1){const h=e<0;this._setEndings(h,!h,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:c})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=bs,i.endingEnd=bs):(e?i.endingStart=this.zeroSlopeAtStart?bs:Ts:i.endingStart=Wa,t?i.endingEnd=this.zeroSlopeAtEnd?bs:Ts:i.endingEnd=Wa)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const c=o.parameterPositions,u=o.sampleValues;return c[0]=s,u[0]=t,c[1]=s+e,u[1]=n,this}}const kA=new Float32Array(1);class HA extends tr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,c=e._interpolants,u=n.uuid,h=this._bindingsByRootAndName;let f=h[u];f===void 0&&(f={},h[u]=f);for(let p=0;p!==s;++p){const m=i[p],g=m.name;let v=f[g];if(v!==void 0)++v.referenceCount,o[p]=v;else{if(v=o[p],v!==void 0){v._cacheIndex===null&&(++v.referenceCount,this._addInactiveBinding(v,u,g));continue}const S=t&&t._propertyBindings[p].binding.parsedPath;v=new Xv(bt.create(n,g,S),m.ValueTypeName,m.getValueSize()),++v.referenceCount,this._addInactiveBinding(v,u,g),o[p]=v}c[p].resultBuffer=v.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const c=o.knownActions;e._byClipCacheIndex=c.length,c.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,c=o[s],u=c.knownActions,h=u[u.length-1],f=e._byClipCacheIndex;h._byClipCacheIndex=f,u[f]=h,u.pop(),e._byClipCacheIndex=null;const p=c.actionByRoot,m=(e._localRoot||this._root).uuid;delete p[m],u.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,c=o[i],u=t[t.length-1],h=e._cacheIndex;u._cacheIndex=h,t[h]=u,t.pop(),delete c[s],Object.keys(c).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new qp(new Float32Array(2),new Float32Array(2),1,kA),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?tl.findByName(i,e):e;const c=o!==null?o.uuid:e,u=this._actionsByClip[c];let h=null;if(n===void 0&&(o!==null?n=o.blendMode:n=dh),u!==void 0){const p=u.actionByRoot[s];if(p!==void 0&&p.blendMode===n)return p;h=u.knownActions[0],o===null&&(o=h._clip)}if(o===null)return null;const f=new Yv(this,o,t,n);return this._bindAction(f,h),this._addInactiveAction(f,c,s),f}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?tl.findByName(n,e):e,o=s?s.uuid:e,c=this._actionsByClip[o];return c!==void 0&&c.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,s,o);const c=this._bindings,u=this._nActiveBindings;for(let h=0;h!==u;++h)c[h].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let c=0,u=o.length;c!==u;++c){const h=o[c];this._deactivateAction(h);const f=h._cacheIndex,p=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,p._cacheIndex=f,t[f]=p,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const c=n[o].actionByRoot,u=c[t];u!==void 0&&(this._deactivateAction(u),this._removeInactiveAction(u))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const c=s[o];c.restoreOriginalState(),this._removeInactiveBinding(c)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class nm{constructor(e){this.value=e}clone(){return new nm(this.value.clone===void 0?this.value:this.value.clone())}}let VA=0;class GA extends tr{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:VA++}),this.name="",this.usage=Xa,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<s.length;o++)this.uniforms.push(s[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class th extends vh{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class WA{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const l0=new et;class qv{constructor(e,t,n=0,i=1/0){this.ray=new Hs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ls,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return l0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(l0),this}intersectObject(e,t=!0,n=[]){return hp(e,this,n,t),n.sort(c0),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)hp(e[i],this,n,t);return n.sort(c0),n}}function c0(r,e){return r.distance-e.distance}function hp(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,c=s.length;o<c;o++)hp(s[o],e,t,!0)}}class fp{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class XA{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class im{constructor(e,t,n,i){im.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}const u0=new le;class YA{constructor(e=new le(1/0,1/0),t=new le(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=u0.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,u0).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const h0=new D,nu=new D;class Zv{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){h0.subVectors(e,this.start),nu.subVectors(this.end,this.start);const n=nu.dot(nu);let s=nu.dot(h0)/n;return t&&(s=Kt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const f0=new D;class qA extends It{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new _t,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,c=1,u=32;o<u;o++,c++){const h=o/u*Math.PI*2,f=c/u*Math.PI*2;i.push(Math.cos(h),Math.sin(h),1,Math.cos(f),Math.sin(f),1)}n.setAttribute("position",new Ve(i,3));const s=new Xn({fog:!1,toneMapped:!1});this.cone=new nr(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),f0.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(f0),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Hr=new D,iu=new et,Cd=new et;class ZA extends nr{constructor(e){const t=jv(e),n=new _t,i=[],s=[],o=new Ne(0,0,1),c=new Ne(0,1,0);for(let h=0;h<t.length;h++){const f=t[h];f.parent&&f.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(c.r,c.g,c.b))}n.setAttribute("position",new Ve(i,3)),n.setAttribute("color",new Ve(s,3));const u=new Xn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,u),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Cd.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const c=t[s];c.parent&&c.parent.isBone&&(iu.multiplyMatrices(Cd,c.matrixWorld),Hr.setFromMatrixPosition(iu),i.setXYZ(o,Hr.x,Hr.y,Hr.z),iu.multiplyMatrices(Cd,c.parent.matrixWorld),Hr.setFromMatrixPosition(iu),i.setXYZ(o+1,Hr.x,Hr.y,Hr.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function jv(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,jv(r.children[t]));return e}class jA extends tn{constructor(e,t,n){const i=new dl(t,4,2),s=new Zr({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const KA=new D,d0=new Ne,p0=new Ne;class JA extends It{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new fl(t);i.rotateY(Math.PI*.5),this.material=new Zr({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),o=new Float32Array(s.count*3);i.setAttribute("color",new Rt(o,3)),this.add(new tn(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");d0.copy(this.light.color),p0.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?d0:p0;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(KA.setFromMatrixPosition(this.light.matrixWorld).negate())}}class QA extends nr{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ne(n),i=new Ne(i);const s=t/2,o=e/t,c=e/2,u=[],h=[];for(let m=0,g=0,v=-c;m<=t;m++,v+=o){u.push(-c,0,v,c,0,v),u.push(v,0,-c,v,0,c);const S=m===s?n:i;S.toArray(h,g),g+=3,S.toArray(h,g),g+=3,S.toArray(h,g),g+=3,S.toArray(h,g),g+=3}const f=new _t;f.setAttribute("position",new Ve(u,3)),f.setAttribute("color",new Ve(h,3));const p=new Xn({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class $A extends nr{constructor(e=10,t=16,n=8,i=64,s=4473924,o=8947848){s=new Ne(s),o=new Ne(o);const c=[],u=[];if(t>1)for(let p=0;p<t;p++){const m=p/t*(Math.PI*2),g=Math.sin(m)*e,v=Math.cos(m)*e;c.push(0,0,0),c.push(g,0,v);const S=p&1?s:o;u.push(S.r,S.g,S.b),u.push(S.r,S.g,S.b)}for(let p=0;p<n;p++){const m=p&1?s:o,g=e-e/n*p;for(let v=0;v<i;v++){let S=v/i*(Math.PI*2),x=Math.sin(S)*g,y=Math.cos(S)*g;c.push(x,0,y),u.push(m.r,m.g,m.b),S=(v+1)/i*(Math.PI*2),x=Math.sin(S)*g,y=Math.cos(S)*g,c.push(x,0,y),u.push(m.r,m.g,m.b)}}const h=new _t;h.setAttribute("position",new Ve(c,3)),h.setAttribute("color",new Ve(u,3));const f=new Xn({vertexColors:!0,toneMapped:!1});super(h,f),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const m0=new D,ru=new D,g0=new D;class eR extends It{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new _t;i.setAttribute("position",new Ve([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new Xn({fog:!1,toneMapped:!1});this.lightPlane=new Yr(i,s),this.add(this.lightPlane),i=new _t,i.setAttribute("position",new Ve([0,0,0,0,0,1],3)),this.targetLine=new Yr(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),m0.setFromMatrixPosition(this.light.matrixWorld),ru.setFromMatrixPosition(this.light.target.matrixWorld),g0.subVectors(ru,m0),this.lightPlane.lookAt(ru),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ru),this.targetLine.scale.z=g0.length()}}const su=new D,jt=new al;class tR extends nr{constructor(e){const t=new _t,n=new Xn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};c("n1","n2"),c("n2","n4"),c("n4","n3"),c("n3","n1"),c("f1","f2"),c("f2","f4"),c("f4","f3"),c("f3","f1"),c("n1","f1"),c("n2","f2"),c("n3","f3"),c("n4","f4"),c("p","n1"),c("p","n2"),c("p","n3"),c("p","n4"),c("u1","u2"),c("u2","u3"),c("u3","u1"),c("c","t"),c("p","c"),c("cn1","cn2"),c("cn3","cn4"),c("cf1","cf2"),c("cf3","cf4");function c(v,S){u(v),u(S)}function u(v){i.push(0,0,0),s.push(0,0,0),o[v]===void 0&&(o[v]=[]),o[v].push(i.length/3-1)}t.setAttribute("position",new Ve(i,3)),t.setAttribute("color",new Ve(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const h=new Ne(16755200),f=new Ne(16711680),p=new Ne(43775),m=new Ne(16777215),g=new Ne(3355443);this.setColors(h,f,p,m,g)}setColors(e,t,n,i,s){const c=this.geometry.getAttribute("color");c.setXYZ(0,e.r,e.g,e.b),c.setXYZ(1,e.r,e.g,e.b),c.setXYZ(2,e.r,e.g,e.b),c.setXYZ(3,e.r,e.g,e.b),c.setXYZ(4,e.r,e.g,e.b),c.setXYZ(5,e.r,e.g,e.b),c.setXYZ(6,e.r,e.g,e.b),c.setXYZ(7,e.r,e.g,e.b),c.setXYZ(8,e.r,e.g,e.b),c.setXYZ(9,e.r,e.g,e.b),c.setXYZ(10,e.r,e.g,e.b),c.setXYZ(11,e.r,e.g,e.b),c.setXYZ(12,e.r,e.g,e.b),c.setXYZ(13,e.r,e.g,e.b),c.setXYZ(14,e.r,e.g,e.b),c.setXYZ(15,e.r,e.g,e.b),c.setXYZ(16,e.r,e.g,e.b),c.setXYZ(17,e.r,e.g,e.b),c.setXYZ(18,e.r,e.g,e.b),c.setXYZ(19,e.r,e.g,e.b),c.setXYZ(20,e.r,e.g,e.b),c.setXYZ(21,e.r,e.g,e.b),c.setXYZ(22,e.r,e.g,e.b),c.setXYZ(23,e.r,e.g,e.b),c.setXYZ(24,t.r,t.g,t.b),c.setXYZ(25,t.r,t.g,t.b),c.setXYZ(26,t.r,t.g,t.b),c.setXYZ(27,t.r,t.g,t.b),c.setXYZ(28,t.r,t.g,t.b),c.setXYZ(29,t.r,t.g,t.b),c.setXYZ(30,t.r,t.g,t.b),c.setXYZ(31,t.r,t.g,t.b),c.setXYZ(32,n.r,n.g,n.b),c.setXYZ(33,n.r,n.g,n.b),c.setXYZ(34,n.r,n.g,n.b),c.setXYZ(35,n.r,n.g,n.b),c.setXYZ(36,n.r,n.g,n.b),c.setXYZ(37,n.r,n.g,n.b),c.setXYZ(38,i.r,i.g,i.b),c.setXYZ(39,i.r,i.g,i.b),c.setXYZ(40,s.r,s.g,s.b),c.setXYZ(41,s.r,s.g,s.b),c.setXYZ(42,s.r,s.g,s.b),c.setXYZ(43,s.r,s.g,s.b),c.setXYZ(44,s.r,s.g,s.b),c.setXYZ(45,s.r,s.g,s.b),c.setXYZ(46,s.r,s.g,s.b),c.setXYZ(47,s.r,s.g,s.b),c.setXYZ(48,s.r,s.g,s.b),c.setXYZ(49,s.r,s.g,s.b),c.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;jt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),en("c",t,e,jt,0,0,-1),en("t",t,e,jt,0,0,1),en("n1",t,e,jt,-n,-i,-1),en("n2",t,e,jt,n,-i,-1),en("n3",t,e,jt,-n,i,-1),en("n4",t,e,jt,n,i,-1),en("f1",t,e,jt,-n,-i,1),en("f2",t,e,jt,n,-i,1),en("f3",t,e,jt,-n,i,1),en("f4",t,e,jt,n,i,1),en("u1",t,e,jt,n*.7,i*1.1,-1),en("u2",t,e,jt,-n*.7,i*1.1,-1),en("u3",t,e,jt,0,i*2,-1),en("cf1",t,e,jt,-n,0,1),en("cf2",t,e,jt,n,0,1),en("cf3",t,e,jt,0,-i,1),en("cf4",t,e,jt,0,i,1),en("cn1",t,e,jt,-n,0,-1),en("cn2",t,e,jt,n,0,-1),en("cn3",t,e,jt,0,-i,-1),en("cn4",t,e,jt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function en(r,e,t,n,i,s,o){su.set(i,s,o).unproject(n);const c=e[r];if(c!==void 0){const u=t.getAttribute("position");for(let h=0,f=c.length;h<f;h++)u.setXYZ(c[h],su.x,su.y,su.z)}}const ou=new xn;class nR extends nr{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),s=new _t;s.setIndex(new Rt(n,1)),s.setAttribute("position",new Rt(i,3)),super(s,new Xn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&ou.setFromObject(this.object),ou.isEmpty())return;const t=ou.min,n=ou.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class iR extends nr{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new _t;s.setIndex(new Rt(n,1)),s.setAttribute("position",new Ve(i,3)),super(s,new Xn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class rR extends Yr{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new _t;o.setAttribute("position",new Ve(s,3)),o.computeBoundingSphere(),super(o,new Xn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const c=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],u=new _t;u.setAttribute("position",new Ve(c,3)),u.computeBoundingSphere(),this.add(new tn(u,new Zr({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const _0=new D;let au,Pd;class sR extends It{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",au===void 0&&(au=new _t,au.setAttribute("position",new Ve([0,0,0,0,1,0],3)),Pd=new Zo(0,.5,1,5,1),Pd.translate(0,-.5,0)),this.position.copy(t),this.line=new Yr(au,new Xn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new tn(Pd,new Zr({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{_0.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(_0,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class oR extends nr{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new _t;i.setAttribute("position",new Ve(t,3)),i.setAttribute("color",new Ve(n,3));const s=new Xn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Ne,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class aR{constructor(){this.type="ShapePath",this.color=new Ne,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ja,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(y){const E=[];for(let T=0,w=y.length;T<w;T++){const U=y[T],P=new Us;P.curves=U.curves,E.push(P)}return E}function n(y,E){const T=E.length;let w=!1;for(let U=T-1,P=0;P<T;U=P++){let L=E[U],O=E[P],R=O.x-L.x,A=O.y-L.y;if(Math.abs(A)>Number.EPSILON){if(A<0&&(L=E[P],R=-R,O=E[U],A=-A),y.y<L.y||y.y>O.y)continue;if(y.y===L.y){if(y.x===L.x)return!0}else{const N=A*(y.x-L.x)-R*(y.y-L.y);if(N===0)return!0;if(N<0)continue;w=!w}}else{if(y.y!==L.y)continue;if(O.x<=y.x&&y.x<=L.x||L.x<=y.x&&y.x<=O.x)return!0}}return w}const i=er.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,c,u;const h=[];if(s.length===1)return c=s[0],u=new Us,u.curves=c.curves,h.push(u),h;let f=!i(s[0].getPoints());f=e?!f:f;const p=[],m=[];let g=[],v=0,S;m[v]=void 0,g[v]=[];for(let y=0,E=s.length;y<E;y++)c=s[y],S=c.getPoints(),o=i(S),o=e?!o:o,o?(!f&&m[v]&&v++,m[v]={s:new Us,p:S},m[v].s.curves=c.curves,f&&v++,g[v]=[]):g[v].push({h:c,p:S[0]});if(!m[0])return t(s);if(m.length>1){let y=!1,E=0;for(let T=0,w=m.length;T<w;T++)p[T]=[];for(let T=0,w=m.length;T<w;T++){const U=g[T];for(let P=0;P<U.length;P++){const L=U[P];let O=!0;for(let R=0;R<m.length;R++)n(L.p,m[R].p)&&(T!==R&&E++,O?(O=!1,p[R].push(L)):y=!0);O&&p[T].push(L)}}E>0&&y===!1&&(g=p)}let x;for(let y=0,E=m.length;y<E;y++){u=m[y].s,h.push(u),x=g[y];for(let T=0,w=x.length;T<w;T++)u.holes.push(x[T].h)}return h}}class Kv extends tr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class lR extends Ui{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);const cR=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:mp,AddEquation:Gr,AddOperation:xy,AdditiveAnimationBlendMode:Tp,AdditiveBlending:Jd,AgXToneMapping:Ty,AlphaFormat:vp,AlwaysCompare:ky,AlwaysDepth:xu,AlwaysStencilFunc:tp,AmbientLight:zv,AnimationAction:Yv,AnimationClip:tl,AnimationLoader:fA,AnimationMixer:HA,AnimationObjectGroup:zA,AnimationUtils:lA,ArcCurve:hv,ArrayCamera:tv,ArrowHelper:sR,AttachedBindMode:ep,Audio:Wv,AudioAnalyser:CA,AudioContext:Qp,AudioListener:bA,AudioLoader:wA,AxesHelper:oR,BackSide:Wn,BasicDepthPacking:Iy,BasicShadowMap:ey,BatchedMesh:lv,Bone:Op,BooleanKeyframeTrack:Gs,Box2:YA,Box3:xn,Box3Helper:iR,BoxGeometry:Vs,BoxHelper:nR,BufferAttribute:Rt,BufferGeometry:_t,BufferGeometryLoader:Gv,ByteType:gp,Cache:_r,Camera:al,CameraHelper:tR,CanvasTexture:Lb,CapsuleGeometry:Sh,CatmullRomCurve3:fv,CineonToneMapping:wy,CircleGeometry:wh,ClampToEdgeWrapping:li,Clock:$p,Color:Ne,ColorKeyframeTrack:Zp,ColorManagement:Pt,CompressedArrayTexture:Pb,CompressedCubeTexture:Ib,CompressedTexture:Ds,CompressedTextureLoader:dA,ConeGeometry:Eh,ConstantAlphaFactor:_y,ConstantColorFactor:my,Controls:Kv,CubeCamera:qy,CubeReflectionMapping:Mr,CubeRefractionMapping:Xr,CubeTexture:ll,CubeTextureLoader:pA,CubeUVReflectionMapping:Wo,CubicBezierCurve:zp,CubicBezierCurve3:dv,CubicInterpolant:Iv,CullFaceBack:Kd,CullFaceFront:$0,CullFaceFrontBack:aM,CullFaceNone:Q0,Curve:Ni,CurvePath:mv,CustomBlending:ty,CustomToneMapping:Ey,CylinderGeometry:Zo,Cylindrical:XA,Data3DTexture:Rp,DataArrayTexture:ph,DataTexture:$i,DataTextureLoader:mA,DataUtils:xS,DecrementStencilOp:MM,DecrementWrapStencilOp:wM,DefaultLoadingManager:Uv,DepthFormat:Ps,DepthStencilFormat:Bs,DepthTexture:Lp,DetachedBindMode:Ay,DirectionalLight:Bv,DirectionalLightHelper:eR,DiscreteInterpolant:Lv,DodecahedronGeometry:Th,DoubleSide:Ii,DstAlphaFactor:uy,DstColorFactor:fy,DynamicCopyUsage:BM,DynamicDrawUsage:LM,DynamicReadUsage:NM,EdgesGeometry:gv,EllipseCurve:Mh,EqualCompare:Oy,EqualDepth:Su,EqualStencilFunc:AM,EquirectangularReflectionMapping:Ha,EquirectangularRefractionMapping:Va,Euler:fi,EventDispatcher:tr,ExtrudeGeometry:Ah,FileLoader:wr,Float16BufferAttribute:bS,Float32BufferAttribute:Ve,FloatType:ei,Fog:yh,FogExp2:_h,FramebufferTexture:Cb,FrontSide:xr,Frustum:cl,GLBufferAttribute:WA,GLSL1:kM,GLSL3:np,GreaterCompare:Fy,GreaterDepth:Eu,GreaterEqualCompare:zy,GreaterEqualDepth:wu,GreaterEqualStencilFunc:IM,GreaterStencilFunc:CM,GridHelper:QA,Group:Po,HalfFloatType:Xo,HemisphereLight:Nv,HemisphereLightHelper:JA,IcosahedronGeometry:Rh,ImageBitmapLoader:SA,ImageLoader:nl,ImageUtils:Gy,IncrementStencilOp:xM,IncrementWrapStencilOp:SM,InstancedBufferAttribute:Vo,InstancedBufferGeometry:Jp,InstancedInterleavedBuffer:th,InstancedMesh:av,Int16BufferAttribute:ES,Int32BufferAttribute:TS,Int8BufferAttribute:MS,IntType:ah,InterleavedBuffer:vh,InterleavedBufferAttribute:ci,Interpolant:pl,InterpolateDiscrete:Bo,InterpolateLinear:Ga,InterpolateSmooth:pu,InvertStencilOp:EM,KeepStencilOp:xs,KeyframeTrack:Oi,LOD:sv,LatheGeometry:hl,Layers:Ls,LessCompare:Ny,LessDepth:Mu,LessEqualCompare:bp,LessEqualDepth:Os,LessEqualStencilFunc:RM,LessStencilFunc:bM,Light:Kr,LightProbe:Vv,Line:Yr,Line3:Zv,LineBasicMaterial:Xn,LineCurve:kp,LineCurve3:pv,LineDashedMaterial:Rv,LineLoop:cv,LineSegments:nr,LinearFilter:on,LinearInterpolant:qp,LinearMipMapLinearFilter:hM,LinearMipMapNearestFilter:uM,LinearMipmapLinearFilter:Li,LinearMipmapNearestFilter:Do,LinearSRGBColorSpace:ks,LinearToneMapping:My,LinearTransfer:ol,Loader:ti,LoaderUtils:up,LoadingManager:jp,LoopOnce:Ry,LoopPingPong:Py,LoopRepeat:Cy,LuminanceAlphaFormat:Sp,LuminanceFormat:Mp,MOUSE:Rs,Material:Nn,MaterialLoader:Nh,MathUtils:ko,Matrix2:im,Matrix3:ft,Matrix4:et,MaxEquation:sy,Mesh:tn,MeshBasicMaterial:Zr,MeshDepthMaterial:Dp,MeshDistanceMaterial:Up,MeshLambertMaterial:bv,MeshMatcapMaterial:Av,MeshNormalMaterial:Tv,MeshPhongMaterial:wv,MeshPhysicalMaterial:Sv,MeshStandardMaterial:Xp,MeshToonMaterial:Ev,MinEquation:ry,MirroredRepeatWrapping:Oo,MixOperation:vy,MultiplyBlending:$d,MultiplyOperation:rl,NearestFilter:vn,NearestMipMapLinearFilter:cM,NearestMipMapNearestFilter:lM,NearestMipmapLinearFilter:Es,NearestMipmapNearestFilter:oh,NeutralToneMapping:by,NeverCompare:Uy,NeverDepth:vu,NeverStencilFunc:TM,NoBlending:yr,NoColorSpace:ji,NoToneMapping:Qi,NormalAnimationBlendMode:dh,NormalBlending:Cs,NotEqualCompare:By,NotEqualDepth:Tu,NotEqualStencilFunc:PM,NumberKeyframeTrack:$a,Object3D:It,ObjectLoader:xA,ObjectSpaceNormalMap:Dy,OctahedronGeometry:fl,OneFactor:ay,OneMinusConstantAlphaFactor:yy,OneMinusConstantColorFactor:gy,OneMinusDstAlphaFactor:hy,OneMinusDstColorFactor:dy,OneMinusSrcAlphaFactor:yu,OneMinusSrcColorFactor:cy,OrthographicCamera:ul,PCFShadowMap:rh,PCFSoftShadowMap:La,PMREMGenerator:ip,Path:ja,PerspectiveCamera:yn,Plane:mr,PlaneGeometry:Yo,PlaneHelper:rR,PointLight:Fv,PointLightHelper:jA,Points:uv,PointsMaterial:Fp,PolarGridHelper:$A,PolyhedronGeometry:jr,PositionalAudio:RA,PropertyBinding:bt,PropertyMixer:Xv,QuadraticBezierCurve:Hp,QuadraticBezierCurve3:Vp,Quaternion:An,QuaternionKeyframeTrack:ml,QuaternionLinearInterpolant:Dv,RED_GREEN_RGTC2_Format:Ku,RED_RGTC1_Format:Ep,REVISION:il,RGBADepthPacking:Ly,RGBAFormat:bn,RGBAIntegerFormat:fh,RGBA_ASTC_10x10_Format:Wu,RGBA_ASTC_10x5_Format:Hu,RGBA_ASTC_10x6_Format:Vu,RGBA_ASTC_10x8_Format:Gu,RGBA_ASTC_12x10_Format:Xu,RGBA_ASTC_12x12_Format:Yu,RGBA_ASTC_4x4_Format:Du,RGBA_ASTC_5x4_Format:Uu,RGBA_ASTC_5x5_Format:Nu,RGBA_ASTC_6x5_Format:Ou,RGBA_ASTC_6x6_Format:Fu,RGBA_ASTC_8x5_Format:Bu,RGBA_ASTC_8x6_Format:zu,RGBA_ASTC_8x8_Format:ku,RGBA_BPTC_Format:Fa,RGBA_ETC2_EAC_Format:Lu,RGBA_PVRTC_2BPPV1_Format:Cu,RGBA_PVRTC_4BPPV1_Format:Ru,RGBA_S3TC_DXT1_Format:Ua,RGBA_S3TC_DXT3_Format:Na,RGBA_S3TC_DXT5_Format:Oa,RGBDepthPacking:gM,RGBFormat:xp,RGBIntegerFormat:fM,RGB_BPTC_SIGNED_Format:qu,RGB_BPTC_UNSIGNED_Format:Zu,RGB_ETC1_Format:Pu,RGB_ETC2_Format:Iu,RGB_PVRTC_2BPPV1_Format:Au,RGB_PVRTC_4BPPV1_Format:bu,RGB_S3TC_DXT1_Format:Da,RGDepthPacking:_M,RGFormat:wp,RGIntegerFormat:hh,RawShaderMaterial:Mv,Ray:Hs,Raycaster:qv,RectAreaLight:kv,RedFormat:uh,RedIntegerFormat:sl,ReinhardToneMapping:Sy,RenderTarget:Wy,RepeatWrapping:No,ReplaceStencilOp:vM,ReverseSubtractEquation:iy,RingGeometry:Ch,SIGNED_RED_GREEN_RGTC2_Format:Ju,SIGNED_RED_RGTC1_Format:ju,SRGBColorSpace:Hn,SRGBTransfer:Ot,Scene:Za,ShaderChunk:gt,ShaderLib:Vn,ShaderMaterial:Si,ShadowMaterial:xv,Shape:Us,ShapeGeometry:Ph,ShapePath:aR,ShapeUtils:er,ShortType:_p,Skeleton:xh,SkeletonHelper:ZA,SkinnedMesh:ov,Source:Wr,Sphere:Mn,SphereGeometry:dl,Spherical:fp,SphericalHarmonics3:Hv,SplineCurve:Gp,SpotLight:Ov,SpotLightHelper:qA,Sprite:rv,SpriteMaterial:Np,SrcAlphaFactor:_u,SrcAlphaSaturateFactor:py,SrcColorFactor:ly,StaticCopyUsage:FM,StaticDrawUsage:Xa,StaticReadUsage:UM,StereoCamera:EA,StreamCopyUsage:zM,StreamDrawUsage:DM,StreamReadUsage:OM,StringKeyframeTrack:Ws,SubtractEquation:ny,SubtractiveBlending:Qd,TOUCH:ws,TangentSpaceNormalMap:qr,TetrahedronGeometry:Ih,Texture:Jt,TextureLoader:gA,TextureUtils:cb,TorusGeometry:Lh,TorusKnotGeometry:Dh,Triangle:$n,TriangleFanDrawMode:mM,TriangleStripDrawMode:pM,TrianglesDrawMode:dM,TubeGeometry:Uh,UVMapping:sh,Uint16BufferAttribute:Cp,Uint32BufferAttribute:Pp,Uint8BufferAttribute:SS,Uint8ClampedBufferAttribute:wS,Uniform:nm,UniformsGroup:GA,UniformsLib:we,UniformsUtils:mh,UnsignedByteType:Di,UnsignedInt248Type:Fs,UnsignedInt5999Type:yp,UnsignedIntType:Sr,UnsignedShort4444Type:lh,UnsignedShort5551Type:ch,UnsignedShortType:Fo,VSMShadowMap:Ci,Vector2:le,Vector3:D,Vector4:Et,VectorKeyframeTrack:el,VideoTexture:Rb,WebGL3DRenderTarget:uS,WebGLArrayRenderTarget:cS,WebGLCoordinateSystem:Ji,WebGLCubeRenderTarget:Zy,WebGLMultipleRenderTargets:lR,WebGLRenderTarget:Ui,WebGLRenderer:nv,WebGLUtils:ev,WebGPUCoordinateSystem:Ya,WireframeGeometry:Wp,WrapAroundEnding:Wa,ZeroCurvatureEnding:Ts,ZeroFactor:oy,ZeroSlopeEnding:bs,ZeroStencilOp:yM,createCanvasElement:Vy},Symbol.toStringTag,{value:"Module"}));var Id={exports:{}},Vr={};/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function uR(){return y0||(y0=1,Vr.ConcurrentRoot=1,Vr.ContinuousEventPriority=4,Vr.DefaultEventPriority=16,Vr.DiscreteEventPriority=1,Vr.IdleEventPriority=536870912,Vr.LegacyRoot=0),Vr}var v0;function hR(){return v0||(v0=1,Id.exports=uR()),Id.exports}var Lo=hR(),Ld={exports:{}},Dd={exports:{}},Ud={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x0;function fR(){return x0||(x0=1,(function(r){function e(k,ie){var ne=k.length;k.push(ie);e:for(;0<ne;){var ue=ne-1>>>1,Re=k[ue];if(0<i(Re,ie))k[ue]=ie,k[ne]=Re,ne=ue;else break e}}function t(k){return k.length===0?null:k[0]}function n(k){if(k.length===0)return null;var ie=k[0],ne=k.pop();if(ne!==ie){k[0]=ne;e:for(var ue=0,Re=k.length,Ye=Re>>>1;ue<Ye;){var se=2*(ue+1)-1,ge=k[se],De=se+1,ve=k[De];if(0>i(ge,ne))De<Re&&0>i(ve,ge)?(k[ue]=ve,k[De]=ne,ue=De):(k[ue]=ge,k[se]=ne,ue=se);else if(De<Re&&0>i(ve,ne))k[ue]=ve,k[De]=ne,ue=De;else break e}}return ie}function i(k,ie){var ne=k.sortIndex-ie.sortIndex;return ne!==0?ne:k.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;r.unstable_now=function(){return s.now()}}else{var o=Date,c=o.now();r.unstable_now=function(){return o.now()-c}}var u=[],h=[],f=1,p=null,m=3,g=!1,v=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(k){for(var ie=t(h);ie!==null;){if(ie.callback===null)n(h);else if(ie.startTime<=k)n(h),ie.sortIndex=ie.expirationTime,e(u,ie);else break;ie=t(h)}}function w(k){if(S=!1,T(k),!v)if(t(u)!==null)v=!0,J(U);else{var ie=t(h);ie!==null&&de(w,ie.startTime-k)}}function U(k,ie){v=!1,S&&(S=!1,y(O),O=-1),g=!0;var ne=m;try{for(T(ie),p=t(u);p!==null&&(!(p.expirationTime>ie)||k&&!N());){var ue=p.callback;if(typeof ue=="function"){p.callback=null,m=p.priorityLevel;var Re=ue(p.expirationTime<=ie);ie=r.unstable_now(),typeof Re=="function"?p.callback=Re:p===t(u)&&n(u),T(ie)}else n(u);p=t(u)}if(p!==null)var Ye=!0;else{var se=t(h);se!==null&&de(w,se.startTime-ie),Ye=!1}return Ye}finally{p=null,m=ne,g=!1}}var P=!1,L=null,O=-1,R=5,A=-1;function N(){return!(r.unstable_now()-A<R)}function q(){if(L!==null){var k=r.unstable_now();A=k;var ie=!0;try{ie=L(!0,k)}finally{ie?Y():(P=!1,L=null)}}else P=!1}var Y;if(typeof E=="function")Y=function(){E(q)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,te=j.port2;j.port1.onmessage=q,Y=function(){te.postMessage(null)}}else Y=function(){x(q,0)};function J(k){L=k,P||(P=!0,Y())}function de(k,ie){O=x(function(){k(r.unstable_now())},ie)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(k){k.callback=null},r.unstable_continueExecution=function(){v||g||(v=!0,J(U))},r.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<k?Math.floor(1e3/k):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(u)},r.unstable_next=function(k){switch(m){case 1:case 2:case 3:var ie=3;break;default:ie=m}var ne=m;m=ie;try{return k()}finally{m=ne}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(k,ie){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var ne=m;m=k;try{return ie()}finally{m=ne}},r.unstable_scheduleCallback=function(k,ie,ne){var ue=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ue+ne:ue):ne=ue,k){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=ne+Re,k={id:f++,callback:ie,priorityLevel:k,startTime:ne,expirationTime:Re,sortIndex:-1},ne>ue?(k.sortIndex=ne,e(h,k),t(u)===null&&k===t(h)&&(S?(y(O),O=-1):S=!0,de(w,ne-ue))):(k.sortIndex=Re,e(u,k),v||g||(v=!0,J(U))),k},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(k){var ie=m;return function(){var ne=m;m=ie;try{return k.apply(this,arguments)}finally{m=ne}}}})(Ud)),Ud}var M0;function Jv(){return M0||(M0=1,Dd.exports=fR()),Dd.exports}/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd,S0;function dR(){return S0||(S0=1,Nd=function(e){var t={},n=rM(),i=Jv(),s=Object.assign;function o(a){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=1;d<arguments.length;d++)l+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+a+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,u=Symbol.for("react.element"),h=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),v=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),w=Symbol.for("react.offscreen"),U=Symbol.iterator;function P(a){return a===null||typeof a!="object"?null:(a=U&&a[U]||a["@@iterator"],typeof a=="function"?a:null)}function L(a){if(a==null)return null;if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case f:return"Fragment";case h:return"Portal";case m:return"Profiler";case p:return"StrictMode";case x:return"Suspense";case y:return"SuspenseList"}if(typeof a=="object")switch(a.$$typeof){case v:return(a.displayName||"Context")+".Consumer";case g:return(a._context.displayName||"Context")+".Provider";case S:var l=a.render;return a=a.displayName,a||(a=l.displayName||l.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case E:return l=a.displayName||null,l!==null?l:L(a.type)||"Memo";case T:l=a._payload,a=a._init;try{return L(a(l))}catch{}}return null}function O(a){var l=a.type;switch(a.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=l.render,a=a.displayName||a.name||"",l.displayName||(a!==""?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return L(l);case 8:return l===p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function R(a){var l=a,d=a;if(a.alternate)for(;l.return;)l=l.return;else{a=l;do l=a,(l.flags&4098)!==0&&(d=l.return),a=l.return;while(a)}return l.tag===3?d:null}function A(a){if(R(a)!==a)throw Error(o(188))}function N(a){var l=a.alternate;if(!l){if(l=R(a),l===null)throw Error(o(188));return l!==a?null:a}for(var d=a,_=l;;){var M=d.return;if(M===null)break;var b=M.alternate;if(b===null){if(_=M.return,_!==null){d=_;continue}break}if(M.child===b.child){for(b=M.child;b;){if(b===d)return A(M),a;if(b===_)return A(M),l;b=b.sibling}throw Error(o(188))}if(d.return!==_.return)d=M,_=b;else{for(var B=!1,H=M.child;H;){if(H===d){B=!0,d=M,_=b;break}if(H===_){B=!0,_=M,d=b;break}H=H.sibling}if(!B){for(H=b.child;H;){if(H===d){B=!0,d=b,_=M;break}if(H===_){B=!0,_=b,d=M;break}H=H.sibling}if(!B)throw Error(o(189))}}if(d.alternate!==_)throw Error(o(190))}if(d.tag!==3)throw Error(o(188));return d.stateNode.current===d?a:l}function q(a){return a=N(a),a!==null?Y(a):null}function Y(a){if(a.tag===5||a.tag===6)return a;for(a=a.child;a!==null;){var l=Y(a);if(l!==null)return l;a=a.sibling}return null}function j(a){if(a.tag===5||a.tag===6)return a;for(a=a.child;a!==null;){if(a.tag!==4){var l=j(a);if(l!==null)return l}a=a.sibling}return null}var te=Array.isArray,J=e.getPublicInstance,de=e.getRootHostContext,k=e.getChildHostContext,ie=e.prepareForCommit,ne=e.resetAfterCommit,ue=e.createInstance,Re=e.appendInitialChild,Ye=e.finalizeInitialChildren,se=e.prepareUpdate,ge=e.shouldSetTextContent,De=e.createTextInstance,ve=e.scheduleTimeout,Ke=e.cancelTimeout,it=e.noTimeout,Je=e.isPrimaryRenderer,ot=e.supportsMutation,he=e.supportsPersistence,me=e.supportsHydration,z=e.getInstanceFromNode,qe=e.preparePortalMount,_e=e.getCurrentEventPriority,Fe=e.detachDeletedInstance,Se=e.supportsMicrotasks,tt=e.scheduleMicrotask,Ie=e.supportsTestSelectors,F=e.findFiberRoot,C=e.getBoundingRect,Z=e.getTextContent,ae=e.isHiddenSubtree,pe=e.matchAccessibilityRole,ce=e.setFocusIfFocusable,Xe=e.setupIntersectionObserver,Ee=e.appendChild,Oe=e.appendChildToContainer,St=e.commitTextUpdate,ye=e.commitMount,Be=e.commitUpdate,nt=e.insertBefore,st=e.insertInContainerBefore,ze=e.removeChild,At=e.removeChildFromContainer,lt=e.resetTextContent,Ft=e.hideInstance,V=e.hideTextInstance,Te=e.unhideInstance,oe=e.unhideTextInstance,fe=e.clearContainer,Ue=e.cloneInstance,Ce=e.createContainerChildSet,at=e.appendChildToContainerChildSet,Vt=e.finalizeContainerChildren,an=e.replaceContainerChildren,Lt=e.cloneHiddenInstance,Yn=e.cloneHiddenTextInstance,wi=e.canHydrateInstance,_l=e.canHydrateTextInstance,yl=e.canHydrateSuspenseInstance,Fi=e.isSuspenseInstancePending,Jr=e.isSuspenseInstanceFallback,vl=e.registerSuspenseInstanceRetry,Er=e.getNextHydratableSibling,Xs=e.getFirstHydratableChild,xl=e.getFirstHydratableChildWithinContainer,Ys=e.getFirstHydratableChildWithinSuspenseInstance,Ml=e.hydrateInstance,Sl=e.hydrateTextInstance,Oh=e.hydrateSuspenseInstance,Fh=e.getNextHydratableInstanceAfterSuspenseInstance,wl=e.commitHydratedContainer,I=e.commitHydratedSuspenseInstance,G=e.clearSuspenseBoundary,Q=e.clearSuspenseBoundaryFromContainer,$=e.shouldDeleteUnhydratedTailInstances,X=e.didNotMatchHydratedContainerTextInstance,Me=e.didNotMatchHydratedTextInstance,be;function He(a){if(be===void 0)try{throw Error()}catch(d){var l=d.stack.trim().match(/\n( *(at )?)/);be=l&&l[1]||""}return`
`+be+a}var Ge=!1;function rt(a,l){if(!a||Ge)return"";Ge=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(xe){var _=xe}Reflect.construct(a,[],l)}else{try{l.call()}catch(xe){_=xe}a.call(l.prototype)}else{try{throw Error()}catch(xe){_=xe}a()}}catch(xe){if(xe&&_&&typeof xe.stack=="string"){for(var M=xe.stack.split(`
`),b=_.stack.split(`
`),B=M.length-1,H=b.length-1;1<=B&&0<=H&&M[B]!==b[H];)H--;for(;1<=B&&0<=H;B--,H--)if(M[B]!==b[H]){if(B!==1||H!==1)do if(B--,H--,0>H||M[B]!==b[H]){var re=`
`+M[B].replace(" at new "," at ");return a.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",a.displayName)),re}while(1<=B&&0<=H);break}}}finally{Ge=!1,Error.prepareStackTrace=d}return(a=a?a.displayName||a.name:"")?He(a):""}var ct=Object.prototype.hasOwnProperty,We=[],vt=-1;function Ct(a){return{current:a}}function $e(a){0>vt||(a.current=We[vt],We[vt]=null,vt--)}function mt(a,l){vt++,We[vt]=a.current,a.current=l}var xt={},Pe=Ct(xt),Gt=Ct(!1),wt=xt;function fn(a,l){var d=a.type.contextTypes;if(!d)return xt;var _=a.stateNode;if(_&&_.__reactInternalMemoizedUnmaskedChildContext===l)return _.__reactInternalMemoizedMaskedChildContext;var M={},b;for(b in d)M[b]=l[b];return _&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=l,a.__reactInternalMemoizedMaskedChildContext=M),M}function Qt(a){return a=a.childContextTypes,a!=null}function dn(){$e(Gt),$e(Pe)}function Tr(a,l,d){if(Pe.current!==xt)throw Error(o(168));mt(Pe,l),mt(Gt,d)}function Bt(a,l,d){var _=a.stateNode;if(l=l.childContextTypes,typeof _.getChildContext!="function")return d;_=_.getChildContext();for(var M in _)if(!(M in l))throw Error(o(108,O(a)||"Unknown",M));return s({},d,_)}function On(a){return a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||xt,wt=Pe.current,mt(Pe,a),mt(Gt,Gt.current),!0}function br(a,l,d){var _=a.stateNode;if(!_)throw Error(o(169));d?(a=Bt(a,l,wt),_.__reactInternalMemoizedMergedChildContext=a,$e(Gt),$e(Pe),mt(Pe,a)):$e(Gt),mt(Gt,d)}var Wt=Math.clz32?Math.clz32:El,Bi=Math.log,zi=Math.LN2;function El(a){return a>>>=0,a===0?32:31-(Bi(a)/zi|0)|0}var Tl=64,bl=4194304;function jo(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return a}}function Al(a,l){var d=a.pendingLanes;if(d===0)return 0;var _=0,M=a.suspendedLanes,b=a.pingedLanes,B=d&268435455;if(B!==0){var H=B&~M;H!==0?_=jo(H):(b&=B,b!==0&&(_=jo(b)))}else B=d&~M,B!==0?_=jo(B):b!==0&&(_=jo(b));if(_===0)return 0;if(l!==0&&l!==_&&(l&M)===0&&(M=_&-_,b=l&-l,M>=b||M===16&&(b&4194240)!==0))return l;if((_&4)!==0&&(_|=d&16),l=a.entangledLanes,l!==0)for(a=a.entanglements,l&=_;0<l;)d=31-Wt(l),M=1<<d,_|=a[d],l&=~M;return _}function gx(a,l){switch(a){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _x(a,l){for(var d=a.suspendedLanes,_=a.pingedLanes,M=a.expirationTimes,b=a.pendingLanes;0<b;){var B=31-Wt(b),H=1<<B,re=M[B];re===-1?((H&d)===0||(H&_)!==0)&&(M[B]=gx(H,l)):re<=l&&(a.expiredLanes|=H),b&=~H}}function Bh(a){return a=a.pendingLanes&-1073741825,a!==0?a:a&1073741824?1073741824:0}function zh(a){for(var l=[],d=0;31>d;d++)l.push(a);return l}function Ko(a,l,d){a.pendingLanes|=l,l!==536870912&&(a.suspendedLanes=0,a.pingedLanes=0),a=a.eventTimes,l=31-Wt(l),a[l]=d}function yx(a,l){var d=a.pendingLanes&~l;a.pendingLanes=l,a.suspendedLanes=0,a.pingedLanes=0,a.expiredLanes&=l,a.mutableReadLanes&=l,a.entangledLanes&=l,l=a.entanglements;var _=a.eventTimes;for(a=a.expirationTimes;0<d;){var M=31-Wt(d),b=1<<M;l[M]=0,_[M]=-1,a[M]=-1,d&=~b}}function kh(a,l){var d=a.entangledLanes|=l;for(a=a.entanglements;d;){var _=31-Wt(d),M=1<<_;M&l|a[_]&l&&(a[_]|=l),d&=~M}}var Dt=0;function am(a){return a&=-a,1<a?4<a?(a&268435455)!==0?16:536870912:4:1}var Hh=i.unstable_scheduleCallback,lm=i.unstable_cancelCallback,vx=i.unstable_shouldYield,xx=i.unstable_requestPaint,pn=i.unstable_now,Vh=i.unstable_ImmediatePriority,Mx=i.unstable_UserBlockingPriority,Gh=i.unstable_NormalPriority,Sx=i.unstable_IdlePriority,Rl=null,ki=null;function wx(a){if(ki&&typeof ki.onCommitFiberRoot=="function")try{ki.onCommitFiberRoot(Rl,a,void 0,(a.current.flags&128)===128)}catch{}}function Ex(a,l){return a===l&&(a!==0||1/a===1/l)||a!==a&&l!==l}var Hi=typeof Object.is=="function"?Object.is:Ex,ir=null,Cl=!1,Wh=!1;function cm(a){ir===null?ir=[a]:ir.push(a)}function Tx(a){Cl=!0,cm(a)}function Vi(){if(!Wh&&ir!==null){Wh=!0;var a=0,l=Dt;try{var d=ir;for(Dt=1;a<d.length;a++){var _=d[a];do _=_(!0);while(_!==null)}ir=null,Cl=!1}catch(M){throw ir!==null&&(ir=ir.slice(a+1)),Hh(Vh,Vi),M}finally{Dt=l,Wh=!1}}return null}var bx=c.ReactCurrentBatchConfig;function Pl(a,l){if(Hi(a,l))return!0;if(typeof a!="object"||a===null||typeof l!="object"||l===null)return!1;var d=Object.keys(a),_=Object.keys(l);if(d.length!==_.length)return!1;for(_=0;_<d.length;_++){var M=d[_];if(!ct.call(l,M)||!Hi(a[M],l[M]))return!1}return!0}function Ax(a){switch(a.tag){case 5:return He(a.type);case 16:return He("Lazy");case 13:return He("Suspense");case 19:return He("SuspenseList");case 0:case 2:case 15:return a=rt(a.type,!1),a;case 11:return a=rt(a.type.render,!1),a;case 1:return a=rt(a.type,!0),a;default:return""}}function Ei(a,l){if(a&&a.defaultProps){l=s({},l),a=a.defaultProps;for(var d in a)l[d]===void 0&&(l[d]=a[d]);return l}return l}var Il=Ct(null),Ll=null,qs=null,Xh=null;function Yh(){Xh=qs=Ll=null}function um(a,l,d){Je?(mt(Il,l._currentValue),l._currentValue=d):(mt(Il,l._currentValue2),l._currentValue2=d)}function qh(a){var l=Il.current;$e(Il),Je?a._currentValue=l:a._currentValue2=l}function Zh(a,l,d){for(;a!==null;){var _=a.alternate;if((a.childLanes&l)!==l?(a.childLanes|=l,_!==null&&(_.childLanes|=l)):_!==null&&(_.childLanes&l)!==l&&(_.childLanes|=l),a===d)break;a=a.return}}function Zs(a,l){Ll=a,Xh=qs=null,a=a.dependencies,a!==null&&a.firstContext!==null&&((a.lanes&l)!==0&&(ri=!0),a.firstContext=null)}function di(a){var l=Je?a._currentValue:a._currentValue2;if(Xh!==a)if(a={context:a,memoizedValue:l,next:null},qs===null){if(Ll===null)throw Error(o(308));qs=a,Ll.dependencies={lanes:0,firstContext:a}}else qs=qs.next=a;return l}var Gi=null,Ar=!1;function jh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hm(a,l){a=a.updateQueue,l.updateQueue===a&&(l.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function rr(a,l){return{eventTime:a,lane:l,tag:0,payload:null,callback:null,next:null}}function Rr(a,l){var d=a.updateQueue;d!==null&&(d=d.shared,nn!==null&&(a.mode&1)!==0&&(Mt&2)===0?(a=d.interleaved,a===null?(l.next=l,Gi===null?Gi=[d]:Gi.push(d)):(l.next=a.next,a.next=l),d.interleaved=l):(a=d.pending,a===null?l.next=l:(l.next=a.next,a.next=l),d.pending=l))}function Dl(a,l,d){if(l=l.updateQueue,l!==null&&(l=l.shared,(d&4194240)!==0)){var _=l.lanes;_&=a.pendingLanes,d|=_,l.lanes=d,kh(a,d)}}function fm(a,l){var d=a.updateQueue,_=a.alternate;if(_!==null&&(_=_.updateQueue,d===_)){var M=null,b=null;if(d=d.firstBaseUpdate,d!==null){do{var B={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};b===null?M=b=B:b=b.next=B,d=d.next}while(d!==null);b===null?M=b=l:b=b.next=l}else M=b=l;d={baseState:_.baseState,firstBaseUpdate:M,lastBaseUpdate:b,shared:_.shared,effects:_.effects},a.updateQueue=d;return}a=d.lastBaseUpdate,a===null?d.firstBaseUpdate=l:a.next=l,d.lastBaseUpdate=l}function Ul(a,l,d,_){var M=a.updateQueue;Ar=!1;var b=M.firstBaseUpdate,B=M.lastBaseUpdate,H=M.shared.pending;if(H!==null){M.shared.pending=null;var re=H,xe=re.next;re.next=null,B===null?b=xe:B.next=xe,B=re;var ke=a.alternate;ke!==null&&(ke=ke.updateQueue,H=ke.lastBaseUpdate,H!==B&&(H===null?ke.firstBaseUpdate=xe:H.next=xe,ke.lastBaseUpdate=re))}if(b!==null){var ut=M.baseState;B=0,ke=xe=re=null,H=b;do{var Qe=H.lane,kt=H.eventTime;if((_&Qe)===Qe){ke!==null&&(ke=ke.next={eventTime:kt,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var je=a,In=H;switch(Qe=l,kt=d,In.tag){case 1:if(je=In.payload,typeof je=="function"){ut=je.call(kt,ut,Qe);break e}ut=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=In.payload,Qe=typeof je=="function"?je.call(kt,ut,Qe):je,Qe==null)break e;ut=s({},ut,Qe);break e;case 2:Ar=!0}}H.callback!==null&&H.lane!==0&&(a.flags|=64,Qe=M.effects,Qe===null?M.effects=[H]:Qe.push(H))}else kt={eventTime:kt,lane:Qe,tag:H.tag,payload:H.payload,callback:H.callback,next:null},ke===null?(xe=ke=kt,re=ut):ke=ke.next=kt,B|=Qe;if(H=H.next,H===null){if(H=M.shared.pending,H===null)break;Qe=H,H=Qe.next,Qe.next=null,M.lastBaseUpdate=Qe,M.shared.pending=null}}while(!0);if(ke===null&&(re=ut),M.baseState=re,M.firstBaseUpdate=xe,M.lastBaseUpdate=ke,l=M.shared.interleaved,l!==null){M=l;do B|=M.lane,M=M.next;while(M!==l)}else b===null&&(M.shared.lanes=0);io|=B,a.lanes=B,a.memoizedState=ut}}function dm(a,l,d){if(a=l.effects,l.effects=null,a!==null)for(l=0;l<a.length;l++){var _=a[l],M=_.callback;if(M!==null){if(_.callback=null,_=d,typeof M!="function")throw Error(o(191,M));M.call(_)}}}var pm=new n.Component().refs;function Kh(a,l,d,_){l=a.memoizedState,d=d(_,l),d=d==null?l:s({},l,d),a.memoizedState=d,a.lanes===0&&(a.updateQueue.baseState=d)}var Nl={isMounted:function(a){return(a=a._reactInternals)?R(a)===a:!1},enqueueSetState:function(a,l,d){a=a._reactInternals;var _=Bn(),M=Ir(a),b=rr(_,M);b.payload=l,d!=null&&(b.callback=d),Rr(a,b),l=yi(a,M,_),l!==null&&Dl(l,a,M)},enqueueReplaceState:function(a,l,d){a=a._reactInternals;var _=Bn(),M=Ir(a),b=rr(_,M);b.tag=1,b.payload=l,d!=null&&(b.callback=d),Rr(a,b),l=yi(a,M,_),l!==null&&Dl(l,a,M)},enqueueForceUpdate:function(a,l){a=a._reactInternals;var d=Bn(),_=Ir(a),M=rr(d,_);M.tag=2,l!=null&&(M.callback=l),Rr(a,M),l=yi(a,_,d),l!==null&&Dl(l,a,_)}};function mm(a,l,d,_,M,b,B){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(_,b,B):l.prototype&&l.prototype.isPureReactComponent?!Pl(d,_)||!Pl(M,b):!0}function gm(a,l,d){var _=!1,M=xt,b=l.contextType;return typeof b=="object"&&b!==null?b=di(b):(M=Qt(l)?wt:Pe.current,_=l.contextTypes,b=(_=_!=null)?fn(a,M):xt),l=new l(d,b),a.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Nl,a.stateNode=l,l._reactInternals=a,_&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=M,a.__reactInternalMemoizedMaskedChildContext=b),l}function _m(a,l,d,_){a=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(d,_),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(d,_),l.state!==a&&Nl.enqueueReplaceState(l,l.state,null)}function Jh(a,l,d,_){var M=a.stateNode;M.props=d,M.state=a.memoizedState,M.refs=pm,jh(a);var b=l.contextType;typeof b=="object"&&b!==null?M.context=di(b):(b=Qt(l)?wt:Pe.current,M.context=fn(a,b)),M.state=a.memoizedState,b=l.getDerivedStateFromProps,typeof b=="function"&&(Kh(a,l,b,d),M.state=a.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof M.getSnapshotBeforeUpdate=="function"||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(l=M.state,typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount(),l!==M.state&&Nl.enqueueReplaceState(M,M.state,null),Ul(a,d,M,_),M.state=a.memoizedState),typeof M.componentDidMount=="function"&&(a.flags|=4194308)}var js=[],Ks=0,Ol=null,Fl=0,pi=[],mi=0,Qr=null,sr=1,or="";function $r(a,l){js[Ks++]=Fl,js[Ks++]=Ol,Ol=a,Fl=l}function ym(a,l,d){pi[mi++]=sr,pi[mi++]=or,pi[mi++]=Qr,Qr=a;var _=sr;a=or;var M=32-Wt(_)-1;_&=~(1<<M),d+=1;var b=32-Wt(l)+M;if(30<b){var B=M-M%5;b=(_&(1<<B)-1).toString(32),_>>=B,M-=B,sr=1<<32-Wt(l)+M|d<<M|_,or=b+a}else sr=1<<b|d<<M|_,or=a}function Qh(a){a.return!==null&&($r(a,1),ym(a,1,0))}function $h(a){for(;a===Ol;)Ol=js[--Ks],js[Ks]=null,Fl=js[--Ks],js[Ks]=null;for(;a===Qr;)Qr=pi[--mi],pi[mi]=null,or=pi[--mi],pi[mi]=null,sr=pi[--mi],pi[mi]=null}var ni=null,ii=null,Xt=!1,Jo=!1,Ti=null;function vm(a,l){var d=vi(5,null,null,0);d.elementType="DELETED",d.stateNode=l,d.return=a,l=a.deletions,l===null?(a.deletions=[d],a.flags|=16):l.push(d)}function xm(a,l){switch(a.tag){case 5:return l=wi(l,a.type,a.pendingProps),l!==null?(a.stateNode=l,ni=a,ii=Xs(l),!0):!1;case 6:return l=_l(l,a.pendingProps),l!==null?(a.stateNode=l,ni=a,ii=null,!0):!1;case 13:if(l=yl(l),l!==null){var d=Qr!==null?{id:sr,overflow:or}:null;return a.memoizedState={dehydrated:l,treeContext:d,retryLane:1073741824},d=vi(18,null,null,0),d.stateNode=l,d.return=a,a.child=d,ni=a,ii=null,!0}return!1;default:return!1}}function ef(a){return(a.mode&1)!==0&&(a.flags&128)===0}function tf(a){if(Xt){var l=ii;if(l){var d=l;if(!xm(a,l)){if(ef(a))throw Error(o(418));l=Er(d);var _=ni;l&&xm(a,l)?vm(_,d):(a.flags=a.flags&-4097|2,Xt=!1,ni=a)}}else{if(ef(a))throw Error(o(418));a.flags=a.flags&-4097|2,Xt=!1,ni=a}}}function Mm(a){for(a=a.return;a!==null&&a.tag!==5&&a.tag!==3&&a.tag!==13;)a=a.return;ni=a}function Qo(a){if(!me||a!==ni)return!1;if(!Xt)return Mm(a),Xt=!0,!1;if(a.tag!==3&&(a.tag!==5||$(a.type)&&!ge(a.type,a.memoizedProps))){var l=ii;if(l){if(ef(a)){for(a=ii;a;)a=Er(a);throw Error(o(418))}for(;l;)vm(a,l),l=Er(l)}}if(Mm(a),a.tag===13){if(!me)throw Error(o(316));if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(o(317));ii=Fh(a)}else ii=ni?Er(a.stateNode):null;return!0}function Js(){me&&(ii=ni=null,Jo=Xt=!1)}function nf(a){Ti===null?Ti=[a]:Ti.push(a)}function $o(a,l,d){if(a=d.ref,a!==null&&typeof a!="function"&&typeof a!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(o(309));var _=d.stateNode}if(!_)throw Error(o(147,a));var M=_,b=""+a;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===b?l.ref:(l=function(B){var H=M.refs;H===pm&&(H=M.refs={}),B===null?delete H[b]:H[b]=B},l._stringRef=b,l)}if(typeof a!="string")throw Error(o(284));if(!d._owner)throw Error(o(290,a))}return a}function Bl(a,l){throw a=Object.prototype.toString.call(l),Error(o(31,a==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":a))}function Sm(a){var l=a._init;return l(a._payload)}function wm(a){function l(K,W){if(a){var ee=K.deletions;ee===null?(K.deletions=[W],K.flags|=16):ee.push(W)}}function d(K,W){if(!a)return null;for(;W!==null;)l(K,W),W=W.sibling;return null}function _(K,W){for(K=new Map;W!==null;)W.key!==null?K.set(W.key,W):K.set(W.index,W),W=W.sibling;return K}function M(K,W){return K=Dr(K,W),K.index=0,K.sibling=null,K}function b(K,W,ee){return K.index=ee,a?(ee=K.alternate,ee!==null?(ee=ee.index,ee<W?(K.flags|=2,W):ee):(K.flags|=2,W)):(K.flags|=1048576,W)}function B(K){return a&&K.alternate===null&&(K.flags|=2),K}function H(K,W,ee,Le){return W===null||W.tag!==6?(W=kf(ee,K.mode,Le),W.return=K,W):(W=M(W,ee),W.return=K,W)}function re(K,W,ee,Le){var Ze=ee.type;return Ze===f?ke(K,W,ee.props.children,Le,ee.key):W!==null&&(W.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===T&&Sm(Ze)===W.type)?(Le=M(W,ee.props),Le.ref=$o(K,W,ee),Le.return=K,Le):(Le=mc(ee.type,ee.key,ee.props,null,K.mode,Le),Le.ref=$o(K,W,ee),Le.return=K,Le)}function xe(K,W,ee,Le){return W===null||W.tag!==4||W.stateNode.containerInfo!==ee.containerInfo||W.stateNode.implementation!==ee.implementation?(W=Hf(ee,K.mode,Le),W.return=K,W):(W=M(W,ee.children||[]),W.return=K,W)}function ke(K,W,ee,Le,Ze){return W===null||W.tag!==7?(W=os(ee,K.mode,Le,Ze),W.return=K,W):(W=M(W,ee),W.return=K,W)}function ut(K,W,ee){if(typeof W=="string"&&W!==""||typeof W=="number")return W=kf(""+W,K.mode,ee),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case u:return ee=mc(W.type,W.key,W.props,null,K.mode,ee),ee.ref=$o(K,null,W),ee.return=K,ee;case h:return W=Hf(W,K.mode,ee),W.return=K,W;case T:var Le=W._init;return ut(K,Le(W._payload),ee)}if(te(W)||P(W))return W=os(W,K.mode,ee,null),W.return=K,W;Bl(K,W)}return null}function Qe(K,W,ee,Le){var Ze=W!==null?W.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Ze!==null?null:H(K,W,""+ee,Le);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case u:return ee.key===Ze?re(K,W,ee,Le):null;case h:return ee.key===Ze?xe(K,W,ee,Le):null;case T:return Ze=ee._init,Qe(K,W,Ze(ee._payload),Le)}if(te(ee)||P(ee))return Ze!==null?null:ke(K,W,ee,Le,null);Bl(K,ee)}return null}function kt(K,W,ee,Le,Ze){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return K=K.get(ee)||null,H(W,K,""+Le,Ze);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case u:return K=K.get(Le.key===null?ee:Le.key)||null,re(W,K,Le,Ze);case h:return K=K.get(Le.key===null?ee:Le.key)||null,xe(W,K,Le,Ze);case T:var yt=Le._init;return kt(K,W,ee,yt(Le._payload),Ze)}if(te(Le)||P(Le))return K=K.get(ee)||null,ke(W,K,Le,Ze,null);Bl(W,Le)}return null}function je(K,W,ee,Le){for(var Ze=null,yt=null,ht=W,Ut=W=0,gn=null;ht!==null&&Ut<ee.length;Ut++){ht.index>Ut?(gn=ht,ht=null):gn=ht.sibling;var Nt=Qe(K,ht,ee[Ut],Le);if(Nt===null){ht===null&&(ht=gn);break}a&&ht&&Nt.alternate===null&&l(K,ht),W=b(Nt,W,Ut),yt===null?Ze=Nt:yt.sibling=Nt,yt=Nt,ht=gn}if(Ut===ee.length)return d(K,ht),Xt&&$r(K,Ut),Ze;if(ht===null){for(;Ut<ee.length;Ut++)ht=ut(K,ee[Ut],Le),ht!==null&&(W=b(ht,W,Ut),yt===null?Ze=ht:yt.sibling=ht,yt=ht);return Xt&&$r(K,Ut),Ze}for(ht=_(K,ht);Ut<ee.length;Ut++)gn=kt(ht,K,Ut,ee[Ut],Le),gn!==null&&(a&&gn.alternate!==null&&ht.delete(gn.key===null?Ut:gn.key),W=b(gn,W,Ut),yt===null?Ze=gn:yt.sibling=gn,yt=gn);return a&&ht.forEach(function(Ur){return l(K,Ur)}),Xt&&$r(K,Ut),Ze}function In(K,W,ee,Le){var Ze=P(ee);if(typeof Ze!="function")throw Error(o(150));if(ee=Ze.call(ee),ee==null)throw Error(o(151));for(var yt=Ze=null,ht=W,Ut=W=0,gn=null,Nt=ee.next();ht!==null&&!Nt.done;Ut++,Nt=ee.next()){ht.index>Ut?(gn=ht,ht=null):gn=ht.sibling;var Ur=Qe(K,ht,Nt.value,Le);if(Ur===null){ht===null&&(ht=gn);break}a&&ht&&Ur.alternate===null&&l(K,ht),W=b(Ur,W,Ut),yt===null?Ze=Ur:yt.sibling=Ur,yt=Ur,ht=gn}if(Nt.done)return d(K,ht),Xt&&$r(K,Ut),Ze;if(ht===null){for(;!Nt.done;Ut++,Nt=ee.next())Nt=ut(K,Nt.value,Le),Nt!==null&&(W=b(Nt,W,Ut),yt===null?Ze=Nt:yt.sibling=Nt,yt=Nt);return Xt&&$r(K,Ut),Ze}for(ht=_(K,ht);!Nt.done;Ut++,Nt=ee.next())Nt=kt(ht,K,Ut,Nt.value,Le),Nt!==null&&(a&&Nt.alternate!==null&&ht.delete(Nt.key===null?Ut:Nt.key),W=b(Nt,W,Ut),yt===null?Ze=Nt:yt.sibling=Nt,yt=Nt);return a&&ht.forEach(function(iM){return l(K,iM)}),Xt&&$r(K,Ut),Ze}function xi(K,W,ee,Le){if(typeof ee=="object"&&ee!==null&&ee.type===f&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case u:e:{for(var Ze=ee.key,yt=W;yt!==null;){if(yt.key===Ze){if(Ze=ee.type,Ze===f){if(yt.tag===7){d(K,yt.sibling),W=M(yt,ee.props.children),W.return=K,K=W;break e}}else if(yt.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===T&&Sm(Ze)===yt.type){d(K,yt.sibling),W=M(yt,ee.props),W.ref=$o(K,yt,ee),W.return=K,K=W;break e}d(K,yt);break}else l(K,yt);yt=yt.sibling}ee.type===f?(W=os(ee.props.children,K.mode,Le,ee.key),W.return=K,K=W):(Le=mc(ee.type,ee.key,ee.props,null,K.mode,Le),Le.ref=$o(K,W,ee),Le.return=K,K=Le)}return B(K);case h:e:{for(yt=ee.key;W!==null;){if(W.key===yt)if(W.tag===4&&W.stateNode.containerInfo===ee.containerInfo&&W.stateNode.implementation===ee.implementation){d(K,W.sibling),W=M(W,ee.children||[]),W.return=K,K=W;break e}else{d(K,W);break}else l(K,W);W=W.sibling}W=Hf(ee,K.mode,Le),W.return=K,K=W}return B(K);case T:return yt=ee._init,xi(K,W,yt(ee._payload),Le)}if(te(ee))return je(K,W,ee,Le);if(P(ee))return In(K,W,ee,Le);Bl(K,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,W!==null&&W.tag===6?(d(K,W.sibling),W=M(W,ee),W.return=K,K=W):(d(K,W),W=kf(ee,K.mode,Le),W.return=K,K=W),B(K)):d(K,W)}return xi}var Qs=wm(!0),Em=wm(!1),ea={},gi=Ct(ea),ta=Ct(ea),$s=Ct(ea);function Wi(a){if(a===ea)throw Error(o(174));return a}function rf(a,l){mt($s,l),mt(ta,a),mt(gi,ea),a=de(l),$e(gi),mt(gi,a)}function eo(){$e(gi),$e(ta),$e($s)}function Tm(a){var l=Wi($s.current),d=Wi(gi.current);l=k(d,a.type,l),d!==l&&(mt(ta,a),mt(gi,l))}function sf(a){ta.current===a&&($e(gi),$e(ta))}var Yt=Ct(0);function zl(a){for(var l=a;l!==null;){if(l.tag===13){var d=l.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||Fi(d)||Jr(d)))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break;for(;l.sibling===null;){if(l.return===null||l.return===a)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var of=[];function af(){for(var a=0;a<of.length;a++){var l=of[a];Je?l._workInProgressVersionPrimary=null:l._workInProgressVersionSecondary=null}of.length=0}var kl=c.ReactCurrentDispatcher,_i=c.ReactCurrentBatchConfig,to=0,Zt=null,Rn=null,mn=null,Hl=!1,na=!1,ia=0,Rx=0;function Cn(){throw Error(o(321))}function lf(a,l){if(l===null)return!1;for(var d=0;d<l.length&&d<a.length;d++)if(!Hi(a[d],l[d]))return!1;return!0}function cf(a,l,d,_,M,b){if(to=b,Zt=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,kl.current=a===null||a.memoizedState===null?Lx:Dx,a=d(_,M),na){b=0;do{if(na=!1,ia=0,25<=b)throw Error(o(301));b+=1,mn=Rn=null,l.updateQueue=null,kl.current=Ux,a=d(_,M)}while(na)}if(kl.current=Yl,l=Rn!==null&&Rn.next!==null,to=0,mn=Rn=Zt=null,Hl=!1,l)throw Error(o(300));return a}function uf(){var a=ia!==0;return ia=0,a}function ar(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?Zt.memoizedState=mn=a:mn=mn.next=a,mn}function Xi(){if(Rn===null){var a=Zt.alternate;a=a!==null?a.memoizedState:null}else a=Rn.next;var l=mn===null?Zt.memoizedState:mn.next;if(l!==null)mn=l,Rn=a;else{if(a===null)throw Error(o(310));Rn=a,a={memoizedState:Rn.memoizedState,baseState:Rn.baseState,baseQueue:Rn.baseQueue,queue:Rn.queue,next:null},mn===null?Zt.memoizedState=mn=a:mn=mn.next=a}return mn}function es(a,l){return typeof l=="function"?l(a):l}function Vl(a){var l=Xi(),d=l.queue;if(d===null)throw Error(o(311));d.lastRenderedReducer=a;var _=Rn,M=_.baseQueue,b=d.pending;if(b!==null){if(M!==null){var B=M.next;M.next=b.next,b.next=B}_.baseQueue=M=b,d.pending=null}if(M!==null){b=M.next,_=_.baseState;var H=B=null,re=null,xe=b;do{var ke=xe.lane;if((to&ke)===ke)re!==null&&(re=re.next={lane:0,action:xe.action,hasEagerState:xe.hasEagerState,eagerState:xe.eagerState,next:null}),_=xe.hasEagerState?xe.eagerState:a(_,xe.action);else{var ut={lane:ke,action:xe.action,hasEagerState:xe.hasEagerState,eagerState:xe.eagerState,next:null};re===null?(H=re=ut,B=_):re=re.next=ut,Zt.lanes|=ke,io|=ke}xe=xe.next}while(xe!==null&&xe!==b);re===null?B=_:re.next=H,Hi(_,l.memoizedState)||(ri=!0),l.memoizedState=_,l.baseState=B,l.baseQueue=re,d.lastRenderedState=_}if(a=d.interleaved,a!==null){M=a;do b=M.lane,Zt.lanes|=b,io|=b,M=M.next;while(M!==a)}else M===null&&(d.lanes=0);return[l.memoizedState,d.dispatch]}function Gl(a){var l=Xi(),d=l.queue;if(d===null)throw Error(o(311));d.lastRenderedReducer=a;var _=d.dispatch,M=d.pending,b=l.memoizedState;if(M!==null){d.pending=null;var B=M=M.next;do b=a(b,B.action),B=B.next;while(B!==M);Hi(b,l.memoizedState)||(ri=!0),l.memoizedState=b,l.baseQueue===null&&(l.baseState=b),d.lastRenderedState=b}return[b,_]}function bm(){}function Am(a,l){var d=Zt,_=Xi(),M=l(),b=!Hi(_.memoizedState,M);if(b&&(_.memoizedState=M,ri=!0),_=_.queue,sa(Pm.bind(null,d,_,a),[a]),_.getSnapshot!==l||b||mn!==null&&mn.memoizedState.tag&1){if(d.flags|=2048,ra(9,Cm.bind(null,d,_,M,l),void 0,null),nn===null)throw Error(o(349));(to&30)!==0||Rm(d,l,M)}return M}function Rm(a,l,d){a.flags|=16384,a={getSnapshot:l,value:d},l=Zt.updateQueue,l===null?(l={lastEffect:null,stores:null},Zt.updateQueue=l,l.stores=[a]):(d=l.stores,d===null?l.stores=[a]:d.push(a))}function Cm(a,l,d,_){l.value=d,l.getSnapshot=_,Im(l)&&yi(a,1,-1)}function Pm(a,l,d){return d(function(){Im(l)&&yi(a,1,-1)})}function Im(a){var l=a.getSnapshot;a=a.value;try{var d=l();return!Hi(a,d)}catch{return!0}}function hf(a){var l=ar();return typeof a=="function"&&(a=a()),l.memoizedState=l.baseState=a,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:a},l.queue=a,a=a.dispatch=Ix.bind(null,Zt,a),[l.memoizedState,a]}function ra(a,l,d,_){return a={tag:a,create:l,destroy:d,deps:_,next:null},l=Zt.updateQueue,l===null?(l={lastEffect:null,stores:null},Zt.updateQueue=l,l.lastEffect=a.next=a):(d=l.lastEffect,d===null?l.lastEffect=a.next=a:(_=d.next,d.next=a,a.next=_,l.lastEffect=a)),a}function Lm(){return Xi().memoizedState}function Wl(a,l,d,_){var M=ar();Zt.flags|=a,M.memoizedState=ra(1|l,d,void 0,_===void 0?null:_)}function Xl(a,l,d,_){var M=Xi();_=_===void 0?null:_;var b=void 0;if(Rn!==null){var B=Rn.memoizedState;if(b=B.destroy,_!==null&&lf(_,B.deps)){M.memoizedState=ra(l,d,b,_);return}}Zt.flags|=a,M.memoizedState=ra(1|l,d,b,_)}function ff(a,l){return Wl(8390656,8,a,l)}function sa(a,l){return Xl(2048,8,a,l)}function Dm(a,l){return Xl(4,2,a,l)}function Um(a,l){return Xl(4,4,a,l)}function Nm(a,l){if(typeof l=="function")return a=a(),l(a),function(){l(null)};if(l!=null)return a=a(),l.current=a,function(){l.current=null}}function Om(a,l,d){return d=d!=null?d.concat([a]):null,Xl(4,4,Nm.bind(null,l,a),d)}function df(){}function Fm(a,l){var d=Xi();l=l===void 0?null:l;var _=d.memoizedState;return _!==null&&l!==null&&lf(l,_[1])?_[0]:(d.memoizedState=[a,l],a)}function Bm(a,l){var d=Xi();l=l===void 0?null:l;var _=d.memoizedState;return _!==null&&l!==null&&lf(l,_[1])?_[0]:(a=a(),d.memoizedState=[a,l],a)}function Cx(a,l){var d=Dt;Dt=d!==0&&4>d?d:4,a(!0);var _=_i.transition;_i.transition={};try{a(!1),l()}finally{Dt=d,_i.transition=_}}function zm(){return Xi().memoizedState}function Px(a,l,d){var _=Ir(a);d={lane:_,action:d,hasEagerState:!1,eagerState:null,next:null},km(a)?Hm(l,d):(Vm(a,l,d),d=Bn(),a=yi(a,_,d),a!==null&&Gm(a,l,_))}function Ix(a,l,d){var _=Ir(a),M={lane:_,action:d,hasEagerState:!1,eagerState:null,next:null};if(km(a))Hm(l,M);else{Vm(a,l,M);var b=a.alternate;if(a.lanes===0&&(b===null||b.lanes===0)&&(b=l.lastRenderedReducer,b!==null))try{var B=l.lastRenderedState,H=b(B,d);if(M.hasEagerState=!0,M.eagerState=H,Hi(H,B))return}catch{}finally{}d=Bn(),a=yi(a,_,d),a!==null&&Gm(a,l,_)}}function km(a){var l=a.alternate;return a===Zt||l!==null&&l===Zt}function Hm(a,l){na=Hl=!0;var d=a.pending;d===null?l.next=l:(l.next=d.next,d.next=l),a.pending=l}function Vm(a,l,d){nn!==null&&(a.mode&1)!==0&&(Mt&2)===0?(a=l.interleaved,a===null?(d.next=d,Gi===null?Gi=[l]:Gi.push(l)):(d.next=a.next,a.next=d),l.interleaved=d):(a=l.pending,a===null?d.next=d:(d.next=a.next,a.next=d),l.pending=d)}function Gm(a,l,d){if((d&4194240)!==0){var _=l.lanes;_&=a.pendingLanes,d|=_,l.lanes=d,kh(a,d)}}var Yl={readContext:di,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},Lx={readContext:di,useCallback:function(a,l){return ar().memoizedState=[a,l===void 0?null:l],a},useContext:di,useEffect:ff,useImperativeHandle:function(a,l,d){return d=d!=null?d.concat([a]):null,Wl(4194308,4,Nm.bind(null,l,a),d)},useLayoutEffect:function(a,l){return Wl(4194308,4,a,l)},useInsertionEffect:function(a,l){return Wl(4,2,a,l)},useMemo:function(a,l){var d=ar();return l=l===void 0?null:l,a=a(),d.memoizedState=[a,l],a},useReducer:function(a,l,d){var _=ar();return l=d!==void 0?d(l):l,_.memoizedState=_.baseState=l,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:l},_.queue=a,a=a.dispatch=Px.bind(null,Zt,a),[_.memoizedState,a]},useRef:function(a){var l=ar();return a={current:a},l.memoizedState=a},useState:hf,useDebugValue:df,useDeferredValue:function(a){var l=hf(a),d=l[0],_=l[1];return ff(function(){var M=_i.transition;_i.transition={};try{_(a)}finally{_i.transition=M}},[a]),d},useTransition:function(){var a=hf(!1),l=a[0];return a=Cx.bind(null,a[1]),ar().memoizedState=a,[l,a]},useMutableSource:function(){},useSyncExternalStore:function(a,l,d){var _=Zt,M=ar();if(Xt){if(d===void 0)throw Error(o(407));d=d()}else{if(d=l(),nn===null)throw Error(o(349));(to&30)!==0||Rm(_,l,d)}M.memoizedState=d;var b={value:d,getSnapshot:l};return M.queue=b,ff(Pm.bind(null,_,b,a),[a]),_.flags|=2048,ra(9,Cm.bind(null,_,b,d,l),void 0,null),d},useId:function(){var a=ar(),l=nn.identifierPrefix;if(Xt){var d=or,_=sr;d=(_&~(1<<32-Wt(_)-1)).toString(32)+d,l=":"+l+"R"+d,d=ia++,0<d&&(l+="H"+d.toString(32)),l+=":"}else d=Rx++,l=":"+l+"r"+d.toString(32)+":";return a.memoizedState=l},unstable_isNewReconciler:!1},Dx={readContext:di,useCallback:Fm,useContext:di,useEffect:sa,useImperativeHandle:Om,useInsertionEffect:Dm,useLayoutEffect:Um,useMemo:Bm,useReducer:Vl,useRef:Lm,useState:function(){return Vl(es)},useDebugValue:df,useDeferredValue:function(a){var l=Vl(es),d=l[0],_=l[1];return sa(function(){var M=_i.transition;_i.transition={};try{_(a)}finally{_i.transition=M}},[a]),d},useTransition:function(){var a=Vl(es)[0],l=Xi().memoizedState;return[a,l]},useMutableSource:bm,useSyncExternalStore:Am,useId:zm,unstable_isNewReconciler:!1},Ux={readContext:di,useCallback:Fm,useContext:di,useEffect:sa,useImperativeHandle:Om,useInsertionEffect:Dm,useLayoutEffect:Um,useMemo:Bm,useReducer:Gl,useRef:Lm,useState:function(){return Gl(es)},useDebugValue:df,useDeferredValue:function(a){var l=Gl(es),d=l[0],_=l[1];return sa(function(){var M=_i.transition;_i.transition={};try{_(a)}finally{_i.transition=M}},[a]),d},useTransition:function(){var a=Gl(es)[0],l=Xi().memoizedState;return[a,l]},useMutableSource:bm,useSyncExternalStore:Am,useId:zm,unstable_isNewReconciler:!1};function pf(a,l){try{var d="",_=l;do d+=Ax(_),_=_.return;while(_);var M=d}catch(b){M=`
Error generating stack: `+b.message+`
`+b.stack}return{value:a,source:l,stack:M}}function mf(a,l){try{console.error(l.value)}catch(d){setTimeout(function(){throw d})}}var Nx=typeof WeakMap=="function"?WeakMap:Map;function Wm(a,l,d){d=rr(-1,d),d.tag=3,d.payload={element:null};var _=l.value;return d.callback=function(){lc||(lc=!0,Df=_),mf(a,l)},d}function Xm(a,l,d){d=rr(-1,d),d.tag=3;var _=a.type.getDerivedStateFromError;if(typeof _=="function"){var M=l.value;d.payload=function(){return _(M)},d.callback=function(){mf(a,l)}}var b=a.stateNode;return b!==null&&typeof b.componentDidCatch=="function"&&(d.callback=function(){mf(a,l),typeof _!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var B=l.stack;this.componentDidCatch(l.value,{componentStack:B!==null?B:""})}),d}function Ym(a,l,d){var _=a.pingCache;if(_===null){_=a.pingCache=new Nx;var M=new Set;_.set(l,M)}else M=_.get(l),M===void 0&&(M=new Set,_.set(l,M));M.has(d)||(M.add(d),a=jx.bind(null,a,l,d),l.then(a,a))}function qm(a){do{var l;if((l=a.tag===13)&&(l=a.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return a;a=a.return}while(a!==null);return null}function Zm(a,l,d,_,M){return(a.mode&1)===0?(a===l?a.flags|=65536:(a.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(l=rr(-1,1),l.tag=2,Rr(d,l))),d.lanes|=1),a):(a.flags|=65536,a.lanes=M,a)}function Yi(a){a.flags|=4}function jm(a,l){if(a!==null&&a.child===l.child)return!0;if((l.flags&16)!==0)return!1;for(a=l.child;a!==null;){if((a.flags&12854)!==0||(a.subtreeFlags&12854)!==0)return!1;a=a.sibling}return!0}var oa,aa,ql,Zl;if(ot)oa=function(a,l){for(var d=l.child;d!==null;){if(d.tag===5||d.tag===6)Re(a,d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===l)break;for(;d.sibling===null;){if(d.return===null||d.return===l)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},aa=function(){},ql=function(a,l,d,_,M){if(a=a.memoizedProps,a!==_){var b=l.stateNode,B=Wi(gi.current);d=se(b,d,a,_,M,B),(l.updateQueue=d)&&Yi(l)}},Zl=function(a,l,d,_){d!==_&&Yi(l)};else if(he){oa=function(a,l,d,_){for(var M=l.child;M!==null;){if(M.tag===5){var b=M.stateNode;d&&_&&(b=Lt(b,M.type,M.memoizedProps,M)),Re(a,b)}else if(M.tag===6)b=M.stateNode,d&&_&&(b=Yn(b,M.memoizedProps,M)),Re(a,b);else if(M.tag!==4){if(M.tag===22&&M.memoizedState!==null)b=M.child,b!==null&&(b.return=M),oa(a,M,!0,!0);else if(M.child!==null){M.child.return=M,M=M.child;continue}}if(M===l)break;for(;M.sibling===null;){if(M.return===null||M.return===l)return;M=M.return}M.sibling.return=M.return,M=M.sibling}};var Km=function(a,l,d,_){for(var M=l.child;M!==null;){if(M.tag===5){var b=M.stateNode;d&&_&&(b=Lt(b,M.type,M.memoizedProps,M)),at(a,b)}else if(M.tag===6)b=M.stateNode,d&&_&&(b=Yn(b,M.memoizedProps,M)),at(a,b);else if(M.tag!==4){if(M.tag===22&&M.memoizedState!==null)b=M.child,b!==null&&(b.return=M),Km(a,M,!0,!0);else if(M.child!==null){M.child.return=M,M=M.child;continue}}if(M===l)break;for(;M.sibling===null;){if(M.return===null||M.return===l)return;M=M.return}M.sibling.return=M.return,M=M.sibling}};aa=function(a,l){var d=l.stateNode;if(!jm(a,l)){a=d.containerInfo;var _=Ce(a);Km(_,l,!1,!1),d.pendingChildren=_,Yi(l),Vt(a,_)}},ql=function(a,l,d,_,M){var b=a.stateNode,B=a.memoizedProps;if((a=jm(a,l))&&B===_)l.stateNode=b;else{var H=l.stateNode,re=Wi(gi.current),xe=null;B!==_&&(xe=se(H,d,B,_,M,re)),a&&xe===null?l.stateNode=b:(b=Ue(b,xe,d,B,_,l,a,H),Ye(b,d,_,M,re)&&Yi(l),l.stateNode=b,a?Yi(l):oa(b,l,!1,!1))}},Zl=function(a,l,d,_){d!==_?(a=Wi($s.current),d=Wi(gi.current),l.stateNode=De(_,a,d,l),Yi(l)):l.stateNode=a.stateNode}}else aa=function(){},ql=function(){},Zl=function(){};function la(a,l){if(!Xt)switch(a.tailMode){case"hidden":l=a.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?a.tail=null:d.sibling=null;break;case"collapsed":d=a.tail;for(var _=null;d!==null;)d.alternate!==null&&(_=d),d=d.sibling;_===null?l||a.tail===null?a.tail=null:a.tail.sibling=null:_.sibling=null}}function Pn(a){var l=a.alternate!==null&&a.alternate.child===a.child,d=0,_=0;if(l)for(var M=a.child;M!==null;)d|=M.lanes|M.childLanes,_|=M.subtreeFlags&14680064,_|=M.flags&14680064,M.return=a,M=M.sibling;else for(M=a.child;M!==null;)d|=M.lanes|M.childLanes,_|=M.subtreeFlags,_|=M.flags,M.return=a,M=M.sibling;return a.subtreeFlags|=_,a.childLanes=d,l}function Ox(a,l,d){var _=l.pendingProps;switch($h(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pn(l),null;case 1:return Qt(l.type)&&dn(),Pn(l),null;case 3:return _=l.stateNode,eo(),$e(Gt),$e(Pe),af(),_.pendingContext&&(_.context=_.pendingContext,_.pendingContext=null),(a===null||a.child===null)&&(Qo(l)?Yi(l):a===null||a.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,Ti!==null&&(Of(Ti),Ti=null))),aa(a,l),Pn(l),null;case 5:sf(l),d=Wi($s.current);var M=l.type;if(a!==null&&l.stateNode!=null)ql(a,l,M,_,d),a.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!_){if(l.stateNode===null)throw Error(o(166));return Pn(l),null}if(a=Wi(gi.current),Qo(l)){if(!me)throw Error(o(175));a=Ml(l.stateNode,l.type,l.memoizedProps,d,a,l,!Jo),l.updateQueue=a,a!==null&&Yi(l)}else{var b=ue(M,_,d,a,l);oa(b,l,!1,!1),l.stateNode=b,Ye(b,M,_,d,a)&&Yi(l)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return Pn(l),null;case 6:if(a&&l.stateNode!=null)Zl(a,l,a.memoizedProps,_);else{if(typeof _!="string"&&l.stateNode===null)throw Error(o(166));if(a=Wi($s.current),d=Wi(gi.current),Qo(l)){if(!me)throw Error(o(176));if(a=l.stateNode,_=l.memoizedProps,(d=Sl(a,_,l,!Jo))&&(M=ni,M!==null))switch(b=(M.mode&1)!==0,M.tag){case 3:X(M.stateNode.containerInfo,a,_,b);break;case 5:Me(M.type,M.memoizedProps,M.stateNode,a,_,b)}d&&Yi(l)}else l.stateNode=De(_,a,d,l)}return Pn(l),null;case 13:if($e(Yt),_=l.memoizedState,Xt&&ii!==null&&(l.mode&1)!==0&&(l.flags&128)===0){for(a=ii;a;)a=Er(a);return Js(),l.flags|=98560,l}if(_!==null&&_.dehydrated!==null){if(_=Qo(l),a===null){if(!_)throw Error(o(318));if(!me)throw Error(o(344));if(a=l.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(o(317));Oh(a,l)}else Js(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;return Pn(l),null}return Ti!==null&&(Of(Ti),Ti=null),(l.flags&128)!==0?(l.lanes=d,l):(_=_!==null,d=!1,a===null?Qo(l):d=a.memoizedState!==null,_&&!d&&(l.child.flags|=8192,(l.mode&1)!==0&&(a===null||(Yt.current&1)!==0?ln===0&&(ln=3):Bf())),l.updateQueue!==null&&(l.flags|=4),Pn(l),null);case 4:return eo(),aa(a,l),a===null&&qe(l.stateNode.containerInfo),Pn(l),null;case 10:return qh(l.type._context),Pn(l),null;case 17:return Qt(l.type)&&dn(),Pn(l),null;case 19:if($e(Yt),M=l.memoizedState,M===null)return Pn(l),null;if(_=(l.flags&128)!==0,b=M.rendering,b===null)if(_)la(M,!1);else{if(ln!==0||a!==null&&(a.flags&128)!==0)for(a=l.child;a!==null;){if(b=zl(a),b!==null){for(l.flags|=128,la(M,!1),a=b.updateQueue,a!==null&&(l.updateQueue=a,l.flags|=4),l.subtreeFlags=0,a=d,_=l.child;_!==null;)d=_,M=a,d.flags&=14680066,b=d.alternate,b===null?(d.childLanes=0,d.lanes=M,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=b.childLanes,d.lanes=b.lanes,d.child=b.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=b.memoizedProps,d.memoizedState=b.memoizedState,d.updateQueue=b.updateQueue,d.type=b.type,M=b.dependencies,d.dependencies=M===null?null:{lanes:M.lanes,firstContext:M.firstContext}),_=_.sibling;return mt(Yt,Yt.current&1|2),l.child}a=a.sibling}M.tail!==null&&pn()>Lf&&(l.flags|=128,_=!0,la(M,!1),l.lanes=4194304)}else{if(!_)if(a=zl(b),a!==null){if(l.flags|=128,_=!0,a=a.updateQueue,a!==null&&(l.updateQueue=a,l.flags|=4),la(M,!0),M.tail===null&&M.tailMode==="hidden"&&!b.alternate&&!Xt)return Pn(l),null}else 2*pn()-M.renderingStartTime>Lf&&d!==1073741824&&(l.flags|=128,_=!0,la(M,!1),l.lanes=4194304);M.isBackwards?(b.sibling=l.child,l.child=b):(a=M.last,a!==null?a.sibling=b:l.child=b,M.last=b)}return M.tail!==null?(l=M.tail,M.rendering=l,M.tail=l.sibling,M.renderingStartTime=pn(),l.sibling=null,a=Yt.current,mt(Yt,_?a&1|2:a&1),l):(Pn(l),null);case 22:case 23:return Ff(),_=l.memoizedState!==null,a!==null&&a.memoizedState!==null!==_&&(l.flags|=8192),_&&(l.mode&1)!==0?(si&1073741824)!==0&&(Pn(l),ot&&l.subtreeFlags&6&&(l.flags|=8192)):Pn(l),null;case 24:return null;case 25:return null}throw Error(o(156,l.tag))}var Fx=c.ReactCurrentOwner,ri=!1;function Fn(a,l,d,_){l.child=a===null?Em(l,null,d,_):Qs(l,a.child,d,_)}function Jm(a,l,d,_,M){d=d.render;var b=l.ref;return Zs(l,M),_=cf(a,l,d,_,b,M),d=uf(),a!==null&&!ri?(l.updateQueue=a.updateQueue,l.flags&=-2053,a.lanes&=~M,lr(a,l,M)):(Xt&&d&&Qh(l),l.flags|=1,Fn(a,l,_,M),l.child)}function Qm(a,l,d,_,M){if(a===null){var b=d.type;return typeof b=="function"&&!zf(b)&&b.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(l.tag=15,l.type=b,$m(a,l,b,_,M)):(a=mc(d.type,null,_,l,l.mode,M),a.ref=l.ref,a.return=l,l.child=a)}if(b=a.child,(a.lanes&M)===0){var B=b.memoizedProps;if(d=d.compare,d=d!==null?d:Pl,d(B,_)&&a.ref===l.ref)return lr(a,l,M)}return l.flags|=1,a=Dr(b,_),a.ref=l.ref,a.return=l,l.child=a}function $m(a,l,d,_,M){if(a!==null&&Pl(a.memoizedProps,_)&&a.ref===l.ref)if(ri=!1,(a.lanes&M)!==0)(a.flags&131072)!==0&&(ri=!0);else return l.lanes=a.lanes,lr(a,l,M);return gf(a,l,d,_,M)}function eg(a,l,d){var _=l.pendingProps,M=_.children,b=a!==null?a.memoizedState:null;if(_.mode==="hidden")if((l.mode&1)===0)l.memoizedState={baseLanes:0,cachePool:null},mt(no,si),si|=d;else if((d&1073741824)!==0)l.memoizedState={baseLanes:0,cachePool:null},_=b!==null?b.baseLanes:d,mt(no,si),si|=_;else return a=b!==null?b.baseLanes|d:d,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:a,cachePool:null},l.updateQueue=null,mt(no,si),si|=a,null;else b!==null?(_=b.baseLanes|d,l.memoizedState=null):_=d,mt(no,si),si|=_;return Fn(a,l,M,d),l.child}function tg(a,l){var d=l.ref;(a===null&&d!==null||a!==null&&a.ref!==d)&&(l.flags|=512,l.flags|=2097152)}function gf(a,l,d,_,M){var b=Qt(d)?wt:Pe.current;return b=fn(l,b),Zs(l,M),d=cf(a,l,d,_,b,M),_=uf(),a!==null&&!ri?(l.updateQueue=a.updateQueue,l.flags&=-2053,a.lanes&=~M,lr(a,l,M)):(Xt&&_&&Qh(l),l.flags|=1,Fn(a,l,d,M),l.child)}function ng(a,l,d,_,M){if(Qt(d)){var b=!0;On(l)}else b=!1;if(Zs(l,M),l.stateNode===null)a!==null&&(a.alternate=null,l.alternate=null,l.flags|=2),gm(l,d,_),Jh(l,d,_,M),_=!0;else if(a===null){var B=l.stateNode,H=l.memoizedProps;B.props=H;var re=B.context,xe=d.contextType;typeof xe=="object"&&xe!==null?xe=di(xe):(xe=Qt(d)?wt:Pe.current,xe=fn(l,xe));var ke=d.getDerivedStateFromProps,ut=typeof ke=="function"||typeof B.getSnapshotBeforeUpdate=="function";ut||typeof B.UNSAFE_componentWillReceiveProps!="function"&&typeof B.componentWillReceiveProps!="function"||(H!==_||re!==xe)&&_m(l,B,_,xe),Ar=!1;var Qe=l.memoizedState;B.state=Qe,Ul(l,_,B,M),re=l.memoizedState,H!==_||Qe!==re||Gt.current||Ar?(typeof ke=="function"&&(Kh(l,d,ke,_),re=l.memoizedState),(H=Ar||mm(l,d,H,_,Qe,re,xe))?(ut||typeof B.UNSAFE_componentWillMount!="function"&&typeof B.componentWillMount!="function"||(typeof B.componentWillMount=="function"&&B.componentWillMount(),typeof B.UNSAFE_componentWillMount=="function"&&B.UNSAFE_componentWillMount()),typeof B.componentDidMount=="function"&&(l.flags|=4194308)):(typeof B.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=_,l.memoizedState=re),B.props=_,B.state=re,B.context=xe,_=H):(typeof B.componentDidMount=="function"&&(l.flags|=4194308),_=!1)}else{B=l.stateNode,hm(a,l),H=l.memoizedProps,xe=l.type===l.elementType?H:Ei(l.type,H),B.props=xe,ut=l.pendingProps,Qe=B.context,re=d.contextType,typeof re=="object"&&re!==null?re=di(re):(re=Qt(d)?wt:Pe.current,re=fn(l,re));var kt=d.getDerivedStateFromProps;(ke=typeof kt=="function"||typeof B.getSnapshotBeforeUpdate=="function")||typeof B.UNSAFE_componentWillReceiveProps!="function"&&typeof B.componentWillReceiveProps!="function"||(H!==ut||Qe!==re)&&_m(l,B,_,re),Ar=!1,Qe=l.memoizedState,B.state=Qe,Ul(l,_,B,M);var je=l.memoizedState;H!==ut||Qe!==je||Gt.current||Ar?(typeof kt=="function"&&(Kh(l,d,kt,_),je=l.memoizedState),(xe=Ar||mm(l,d,xe,_,Qe,je,re)||!1)?(ke||typeof B.UNSAFE_componentWillUpdate!="function"&&typeof B.componentWillUpdate!="function"||(typeof B.componentWillUpdate=="function"&&B.componentWillUpdate(_,je,re),typeof B.UNSAFE_componentWillUpdate=="function"&&B.UNSAFE_componentWillUpdate(_,je,re)),typeof B.componentDidUpdate=="function"&&(l.flags|=4),typeof B.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof B.componentDidUpdate!="function"||H===a.memoizedProps&&Qe===a.memoizedState||(l.flags|=4),typeof B.getSnapshotBeforeUpdate!="function"||H===a.memoizedProps&&Qe===a.memoizedState||(l.flags|=1024),l.memoizedProps=_,l.memoizedState=je),B.props=_,B.state=je,B.context=re,_=xe):(typeof B.componentDidUpdate!="function"||H===a.memoizedProps&&Qe===a.memoizedState||(l.flags|=4),typeof B.getSnapshotBeforeUpdate!="function"||H===a.memoizedProps&&Qe===a.memoizedState||(l.flags|=1024),_=!1)}return _f(a,l,d,_,b,M)}function _f(a,l,d,_,M,b){tg(a,l);var B=(l.flags&128)!==0;if(!_&&!B)return M&&br(l,d,!1),lr(a,l,b);_=l.stateNode,Fx.current=l;var H=B&&typeof d.getDerivedStateFromError!="function"?null:_.render();return l.flags|=1,a!==null&&B?(l.child=Qs(l,a.child,null,b),l.child=Qs(l,null,H,b)):Fn(a,l,H,b),l.memoizedState=_.state,M&&br(l,d,!0),l.child}function ig(a){var l=a.stateNode;l.pendingContext?Tr(a,l.pendingContext,l.pendingContext!==l.context):l.context&&Tr(a,l.context,!1),rf(a,l.containerInfo)}function rg(a,l,d,_,M){return Js(),nf(M),l.flags|=256,Fn(a,l,d,_),l.child}var jl={dehydrated:null,treeContext:null,retryLane:0};function Kl(a){return{baseLanes:a,cachePool:null}}function sg(a,l,d){var _=l.pendingProps,M=Yt.current,b=!1,B=(l.flags&128)!==0,H;if((H=B)||(H=a!==null&&a.memoizedState===null?!1:(M&2)!==0),H?(b=!0,l.flags&=-129):(a===null||a.memoizedState!==null)&&(M|=1),mt(Yt,M&1),a===null)return tf(l),a=l.memoizedState,a!==null&&(a=a.dehydrated,a!==null)?((l.mode&1)===0?l.lanes=1:Jr(a)?l.lanes=8:l.lanes=1073741824,null):(M=_.children,a=_.fallback,b?(_=l.mode,b=l.child,M={mode:"hidden",children:M},(_&1)===0&&b!==null?(b.childLanes=0,b.pendingProps=M):b=gc(M,_,0,null),a=os(a,_,d,null),b.return=l,a.return=l,b.sibling=a,l.child=b,l.child.memoizedState=Kl(d),l.memoizedState=jl,a):yf(l,M));if(M=a.memoizedState,M!==null){if(H=M.dehydrated,H!==null){if(B)return l.flags&256?(l.flags&=-257,Jl(a,l,d,Error(o(422)))):l.memoizedState!==null?(l.child=a.child,l.flags|=128,null):(b=_.fallback,M=l.mode,_=gc({mode:"visible",children:_.children},M,0,null),b=os(b,M,d,null),b.flags|=2,_.return=l,b.return=l,_.sibling=b,l.child=_,(l.mode&1)!==0&&Qs(l,a.child,null,d),l.child.memoizedState=Kl(d),l.memoizedState=jl,b);if((l.mode&1)===0)l=Jl(a,l,d,null);else if(Jr(H))l=Jl(a,l,d,Error(o(419)));else if(_=(d&a.childLanes)!==0,ri||_){if(_=nn,_!==null){switch(d&-d){case 4:b=2;break;case 16:b=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:b=32;break;case 536870912:b=268435456;break;default:b=0}_=(b&(_.suspendedLanes|d))!==0?0:b,_!==0&&_!==M.retryLane&&(M.retryLane=_,yi(a,_,-1))}Bf(),l=Jl(a,l,d,Error(o(421)))}else Fi(H)?(l.flags|=128,l.child=a.child,l=Kx.bind(null,a),vl(H,l),l=null):(d=M.treeContext,me&&(ii=Ys(H),ni=l,Xt=!0,Ti=null,Jo=!1,d!==null&&(pi[mi++]=sr,pi[mi++]=or,pi[mi++]=Qr,sr=d.id,or=d.overflow,Qr=l)),l=yf(l,l.pendingProps.children),l.flags|=4096);return l}return b?(_=ag(a,l,_.children,_.fallback,d),b=l.child,M=a.child.memoizedState,b.memoizedState=M===null?Kl(d):{baseLanes:M.baseLanes|d,cachePool:null},b.childLanes=a.childLanes&~d,l.memoizedState=jl,_):(d=og(a,l,_.children,d),l.memoizedState=null,d)}return b?(_=ag(a,l,_.children,_.fallback,d),b=l.child,M=a.child.memoizedState,b.memoizedState=M===null?Kl(d):{baseLanes:M.baseLanes|d,cachePool:null},b.childLanes=a.childLanes&~d,l.memoizedState=jl,_):(d=og(a,l,_.children,d),l.memoizedState=null,d)}function yf(a,l){return l=gc({mode:"visible",children:l},a.mode,0,null),l.return=a,a.child=l}function og(a,l,d,_){var M=a.child;return a=M.sibling,d=Dr(M,{mode:"visible",children:d}),(l.mode&1)===0&&(d.lanes=_),d.return=l,d.sibling=null,a!==null&&(_=l.deletions,_===null?(l.deletions=[a],l.flags|=16):_.push(a)),l.child=d}function ag(a,l,d,_,M){var b=l.mode;a=a.child;var B=a.sibling,H={mode:"hidden",children:d};return(b&1)===0&&l.child!==a?(d=l.child,d.childLanes=0,d.pendingProps=H,l.deletions=null):(d=Dr(a,H),d.subtreeFlags=a.subtreeFlags&14680064),B!==null?_=Dr(B,_):(_=os(_,b,M,null),_.flags|=2),_.return=l,d.return=l,d.sibling=_,l.child=d,_}function Jl(a,l,d,_){return _!==null&&nf(_),Qs(l,a.child,null,d),a=yf(l,l.pendingProps.children),a.flags|=2,l.memoizedState=null,a}function lg(a,l,d){a.lanes|=l;var _=a.alternate;_!==null&&(_.lanes|=l),Zh(a.return,l,d)}function vf(a,l,d,_,M){var b=a.memoizedState;b===null?a.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:_,tail:d,tailMode:M}:(b.isBackwards=l,b.rendering=null,b.renderingStartTime=0,b.last=_,b.tail=d,b.tailMode=M)}function cg(a,l,d){var _=l.pendingProps,M=_.revealOrder,b=_.tail;if(Fn(a,l,_.children,d),_=Yt.current,(_&2)!==0)_=_&1|2,l.flags|=128;else{if(a!==null&&(a.flags&128)!==0)e:for(a=l.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&lg(a,d,l);else if(a.tag===19)lg(a,d,l);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===l)break e;for(;a.sibling===null;){if(a.return===null||a.return===l)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}_&=1}if(mt(Yt,_),(l.mode&1)===0)l.memoizedState=null;else switch(M){case"forwards":for(d=l.child,M=null;d!==null;)a=d.alternate,a!==null&&zl(a)===null&&(M=d),d=d.sibling;d=M,d===null?(M=l.child,l.child=null):(M=d.sibling,d.sibling=null),vf(l,!1,M,d,b);break;case"backwards":for(d=null,M=l.child,l.child=null;M!==null;){if(a=M.alternate,a!==null&&zl(a)===null){l.child=M;break}a=M.sibling,M.sibling=d,d=M,M=a}vf(l,!0,d,null,b);break;case"together":vf(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function lr(a,l,d){if(a!==null&&(l.dependencies=a.dependencies),io|=l.lanes,(d&l.childLanes)===0)return null;if(a!==null&&l.child!==a.child)throw Error(o(153));if(l.child!==null){for(a=l.child,d=Dr(a,a.pendingProps),l.child=d,d.return=l;a.sibling!==null;)a=a.sibling,d=d.sibling=Dr(a,a.pendingProps),d.return=l;d.sibling=null}return l.child}function Bx(a,l,d){switch(l.tag){case 3:ig(l),Js();break;case 5:Tm(l);break;case 1:Qt(l.type)&&On(l);break;case 4:rf(l,l.stateNode.containerInfo);break;case 10:um(l,l.type._context,l.memoizedProps.value);break;case 13:var _=l.memoizedState;if(_!==null)return _.dehydrated!==null?(mt(Yt,Yt.current&1),l.flags|=128,null):(d&l.child.childLanes)!==0?sg(a,l,d):(mt(Yt,Yt.current&1),a=lr(a,l,d),a!==null?a.sibling:null);mt(Yt,Yt.current&1);break;case 19:if(_=(d&l.childLanes)!==0,(a.flags&128)!==0){if(_)return cg(a,l,d);l.flags|=128}var M=l.memoizedState;if(M!==null&&(M.rendering=null,M.tail=null,M.lastEffect=null),mt(Yt,Yt.current),_)break;return null;case 22:case 23:return l.lanes=0,eg(a,l,d)}return lr(a,l,d)}function zx(a,l){switch($h(l),l.tag){case 1:return Qt(l.type)&&dn(),a=l.flags,a&65536?(l.flags=a&-65537|128,l):null;case 3:return eo(),$e(Gt),$e(Pe),af(),a=l.flags,(a&65536)!==0&&(a&128)===0?(l.flags=a&-65537|128,l):null;case 5:return sf(l),null;case 13:if($e(Yt),a=l.memoizedState,a!==null&&a.dehydrated!==null){if(l.alternate===null)throw Error(o(340));Js()}return a=l.flags,a&65536?(l.flags=a&-65537|128,l):null;case 19:return $e(Yt),null;case 4:return eo(),null;case 10:return qh(l.type._context),null;case 22:case 23:return Ff(),null;case 24:return null;default:return null}}var Ql=!1,ts=!1,kx=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function $l(a,l){var d=a.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(_){jn(a,l,_)}else d.current=null}function xf(a,l,d){try{d()}catch(_){jn(a,l,_)}}var ug=!1;function Hx(a,l){for(ie(a.containerInfo),Ae=l;Ae!==null;)if(a=Ae,l=a.child,(a.subtreeFlags&1028)!==0&&l!==null)l.return=a,Ae=l;else for(;Ae!==null;){a=Ae;try{var d=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(d!==null){var _=d.memoizedProps,M=d.memoizedState,b=a.stateNode,B=b.getSnapshotBeforeUpdate(a.elementType===a.type?_:Ei(a.type,_),M);b.__reactInternalSnapshotBeforeUpdate=B}break;case 3:ot&&fe(a.stateNode.containerInfo);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(H){jn(a,a.return,H)}if(l=a.sibling,l!==null){l.return=a.return,Ae=l;break}Ae=a.return}return d=ug,ug=!1,d}function ns(a,l,d){var _=l.updateQueue;if(_=_!==null?_.lastEffect:null,_!==null){var M=_=_.next;do{if((M.tag&a)===a){var b=M.destroy;M.destroy=void 0,b!==void 0&&xf(l,d,b)}M=M.next}while(M!==_)}}function ca(a,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&a)===a){var _=d.create;d.destroy=_()}d=d.next}while(d!==l)}}function Mf(a){var l=a.ref;if(l!==null){var d=a.stateNode;switch(a.tag){case 5:a=J(d);break;default:a=d}typeof l=="function"?l(a):l.current=a}}function hg(a,l,d){if(ki&&typeof ki.onCommitFiberUnmount=="function")try{ki.onCommitFiberUnmount(Rl,l)}catch{}switch(l.tag){case 0:case 11:case 14:case 15:if(a=l.updateQueue,a!==null&&(a=a.lastEffect,a!==null)){var _=a=a.next;do{var M=_,b=M.destroy;M=M.tag,b!==void 0&&((M&2)!==0||(M&4)!==0)&&xf(l,d,b),_=_.next}while(_!==a)}break;case 1:if($l(l,d),a=l.stateNode,typeof a.componentWillUnmount=="function")try{a.props=l.memoizedProps,a.state=l.memoizedState,a.componentWillUnmount()}catch(B){jn(l,d,B)}break;case 5:$l(l,d);break;case 4:ot?_g(a,l,d):he&&he&&(l=l.stateNode.containerInfo,d=Ce(l),an(l,d))}}function fg(a,l,d){for(var _=l;;)if(hg(a,_,d),_.child===null||ot&&_.tag===4){if(_===l)break;for(;_.sibling===null;){if(_.return===null||_.return===l)return;_=_.return}_.sibling.return=_.return,_=_.sibling}else _.child.return=_,_=_.child}function dg(a){var l=a.alternate;l!==null&&(a.alternate=null,dg(l)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(l=a.stateNode,l!==null&&Fe(l)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}function pg(a){return a.tag===5||a.tag===3||a.tag===4}function mg(a){e:for(;;){for(;a.sibling===null;){if(a.return===null||pg(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.flags&2||a.child===null||a.tag===4)continue e;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function gg(a){if(ot){e:{for(var l=a.return;l!==null;){if(pg(l))break e;l=l.return}throw Error(o(160))}var d=l;switch(d.tag){case 5:l=d.stateNode,d.flags&32&&(lt(l),d.flags&=-33),d=mg(a),wf(a,d,l);break;case 3:case 4:l=d.stateNode.containerInfo,d=mg(a),Sf(a,d,l);break;default:throw Error(o(161))}}}function Sf(a,l,d){var _=a.tag;if(_===5||_===6)a=a.stateNode,l?st(d,a,l):Oe(d,a);else if(_!==4&&(a=a.child,a!==null))for(Sf(a,l,d),a=a.sibling;a!==null;)Sf(a,l,d),a=a.sibling}function wf(a,l,d){var _=a.tag;if(_===5||_===6)a=a.stateNode,l?nt(d,a,l):Ee(d,a);else if(_!==4&&(a=a.child,a!==null))for(wf(a,l,d),a=a.sibling;a!==null;)wf(a,l,d),a=a.sibling}function _g(a,l,d){for(var _=l,M=!1,b,B;;){if(!M){M=_.return;e:for(;;){if(M===null)throw Error(o(160));switch(b=M.stateNode,M.tag){case 5:B=!1;break e;case 3:b=b.containerInfo,B=!0;break e;case 4:b=b.containerInfo,B=!0;break e}M=M.return}M=!0}if(_.tag===5||_.tag===6)fg(a,_,d),B?At(b,_.stateNode):ze(b,_.stateNode);else if(_.tag===18)B?Q(b,_.stateNode):G(b,_.stateNode);else if(_.tag===4){if(_.child!==null){b=_.stateNode.containerInfo,B=!0,_.child.return=_,_=_.child;continue}}else if(hg(a,_,d),_.child!==null){_.child.return=_,_=_.child;continue}if(_===l)break;for(;_.sibling===null;){if(_.return===null||_.return===l)return;_=_.return,_.tag===4&&(M=!1)}_.sibling.return=_.return,_=_.sibling}}function Ef(a,l){if(ot){switch(l.tag){case 0:case 11:case 14:case 15:ns(3,l,l.return),ca(3,l),ns(5,l,l.return);return;case 1:return;case 5:var d=l.stateNode;if(d!=null){var _=l.memoizedProps;a=a!==null?a.memoizedProps:_;var M=l.type,b=l.updateQueue;l.updateQueue=null,b!==null&&Be(d,b,M,a,_,l)}return;case 6:if(l.stateNode===null)throw Error(o(162));d=l.memoizedProps,St(l.stateNode,a!==null?a.memoizedProps:d,d);return;case 3:me&&a!==null&&a.memoizedState.isDehydrated&&wl(l.stateNode.containerInfo);return;case 12:return;case 13:ec(l);return;case 19:ec(l);return;case 17:return}throw Error(o(163))}switch(l.tag){case 0:case 11:case 14:case 15:ns(3,l,l.return),ca(3,l),ns(5,l,l.return);return;case 12:return;case 13:ec(l);return;case 19:ec(l);return;case 3:me&&a!==null&&a.memoizedState.isDehydrated&&wl(l.stateNode.containerInfo);break;case 22:case 23:return}e:if(he){switch(l.tag){case 1:case 5:case 6:break e;case 3:case 4:l=l.stateNode,an(l.containerInfo,l.pendingChildren);break e}throw Error(o(163))}}function ec(a){var l=a.updateQueue;if(l!==null){a.updateQueue=null;var d=a.stateNode;d===null&&(d=a.stateNode=new kx),l.forEach(function(_){var M=Jx.bind(null,a,_);d.has(_)||(d.add(_),_.then(M,M))})}}function Vx(a,l){for(Ae=l;Ae!==null;){l=Ae;var d=l.deletions;if(d!==null)for(var _=0;_<d.length;_++){var M=d[_];try{var b=a;ot?_g(b,M,l):fg(b,M,l);var B=M.alternate;B!==null&&(B.return=null),M.return=null}catch(Ze){jn(M,l,Ze)}}if(d=l.child,(l.subtreeFlags&12854)!==0&&d!==null)d.return=l,Ae=d;else for(;Ae!==null;){l=Ae;try{var H=l.flags;if(H&32&&ot&&lt(l.stateNode),H&512){var re=l.alternate;if(re!==null){var xe=re.ref;xe!==null&&(typeof xe=="function"?xe(null):xe.current=null)}}if(H&8192)switch(l.tag){case 13:if(l.memoizedState!==null){var ke=l.alternate;(ke===null||ke.memoizedState===null)&&(If=pn())}break;case 22:var ut=l.memoizedState!==null,Qe=l.alternate,kt=Qe!==null&&Qe.memoizedState!==null;if(d=l,ot){e:if(_=d,M=ut,b=null,ot)for(var je=_;;){if(je.tag===5){if(b===null){b=je;var In=je.stateNode;M?Ft(In):Te(je.stateNode,je.memoizedProps)}}else if(je.tag===6){if(b===null){var xi=je.stateNode;M?V(xi):oe(xi,je.memoizedProps)}}else if((je.tag!==22&&je.tag!==23||je.memoizedState===null||je===_)&&je.child!==null){je.child.return=je,je=je.child;continue}if(je===_)break;for(;je.sibling===null;){if(je.return===null||je.return===_)break e;b===je&&(b=null),je=je.return}b===je&&(b=null),je.sibling.return=je.return,je=je.sibling}}if(ut&&!kt&&(d.mode&1)!==0){Ae=d;for(var K=d.child;K!==null;){for(d=Ae=K;Ae!==null;){_=Ae;var W=_.child;switch(_.tag){case 0:case 11:case 14:case 15:ns(4,_,_.return);break;case 1:$l(_,_.return);var ee=_.stateNode;if(typeof ee.componentWillUnmount=="function"){var Le=_.return;try{ee.props=_.memoizedProps,ee.state=_.memoizedState,ee.componentWillUnmount()}catch(Ze){jn(_,Le,Ze)}}break;case 5:$l(_,_.return);break;case 22:if(_.memoizedState!==null){xg(d);continue}}W!==null?(W.return=_,Ae=W):xg(d)}K=K.sibling}}}switch(H&4102){case 2:gg(l),l.flags&=-3;break;case 6:gg(l),l.flags&=-3,Ef(l.alternate,l);break;case 4096:l.flags&=-4097;break;case 4100:l.flags&=-4097,Ef(l.alternate,l);break;case 4:Ef(l.alternate,l)}}catch(Ze){jn(l,l.return,Ze)}if(d=l.sibling,d!==null){d.return=l.return,Ae=d;break}Ae=l.return}}}function Gx(a,l,d){Ae=a,yg(a)}function yg(a,l,d){for(var _=(a.mode&1)!==0;Ae!==null;){var M=Ae,b=M.child;if(M.tag===22&&_){var B=M.memoizedState!==null||Ql;if(!B){var H=M.alternate,re=H!==null&&H.memoizedState!==null||ts;H=Ql;var xe=ts;if(Ql=B,(ts=re)&&!xe)for(Ae=M;Ae!==null;)B=Ae,re=B.child,B.tag===22&&B.memoizedState!==null?Mg(M):re!==null?(re.return=B,Ae=re):Mg(M);for(;b!==null;)Ae=b,yg(b),b=b.sibling;Ae=M,Ql=H,ts=xe}vg(a)}else(M.subtreeFlags&8772)!==0&&b!==null?(b.return=M,Ae=b):vg(a)}}function vg(a){for(;Ae!==null;){var l=Ae;if((l.flags&8772)!==0){var d=l.alternate;try{if((l.flags&8772)!==0)switch(l.tag){case 0:case 11:case 15:ts||ca(5,l);break;case 1:var _=l.stateNode;if(l.flags&4&&!ts)if(d===null)_.componentDidMount();else{var M=l.elementType===l.type?d.memoizedProps:Ei(l.type,d.memoizedProps);_.componentDidUpdate(M,d.memoizedState,_.__reactInternalSnapshotBeforeUpdate)}var b=l.updateQueue;b!==null&&dm(l,b,_);break;case 3:var B=l.updateQueue;if(B!==null){if(d=null,l.child!==null)switch(l.child.tag){case 5:d=J(l.child.stateNode);break;case 1:d=l.child.stateNode}dm(l,B,d)}break;case 5:var H=l.stateNode;d===null&&l.flags&4&&ye(H,l.type,l.memoizedProps,l);break;case 6:break;case 4:break;case 12:break;case 13:if(me&&l.memoizedState===null){var re=l.alternate;if(re!==null){var xe=re.memoizedState;if(xe!==null){var ke=xe.dehydrated;ke!==null&&I(ke)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(o(163))}ts||l.flags&512&&Mf(l)}catch(ut){jn(l,l.return,ut)}}if(l===a){Ae=null;break}if(d=l.sibling,d!==null){d.return=l.return,Ae=d;break}Ae=l.return}}function xg(a){for(;Ae!==null;){var l=Ae;if(l===a){Ae=null;break}var d=l.sibling;if(d!==null){d.return=l.return,Ae=d;break}Ae=l.return}}function Mg(a){for(;Ae!==null;){var l=Ae;try{switch(l.tag){case 0:case 11:case 15:var d=l.return;try{ca(4,l)}catch(re){jn(l,d,re)}break;case 1:var _=l.stateNode;if(typeof _.componentDidMount=="function"){var M=l.return;try{_.componentDidMount()}catch(re){jn(l,M,re)}}var b=l.return;try{Mf(l)}catch(re){jn(l,b,re)}break;case 5:var B=l.return;try{Mf(l)}catch(re){jn(l,B,re)}}}catch(re){jn(l,l.return,re)}if(l===a){Ae=null;break}var H=l.sibling;if(H!==null){H.return=l.return,Ae=H;break}Ae=l.return}}var tc=0,nc=1,ic=2,rc=3,sc=4;if(typeof Symbol=="function"&&Symbol.for){var ua=Symbol.for;tc=ua("selector.component"),nc=ua("selector.has_pseudo_class"),ic=ua("selector.role"),rc=ua("selector.test_id"),sc=ua("selector.text")}function Tf(a){var l=z(a);if(l!=null){if(typeof l.memoizedProps["data-testname"]!="string")throw Error(o(364));return l}if(a=F(a),a===null)throw Error(o(362));return a.stateNode.current}function bf(a,l){switch(l.$$typeof){case tc:if(a.type===l.value)return!0;break;case nc:e:{l=l.value,a=[a,0];for(var d=0;d<a.length;){var _=a[d++],M=a[d++],b=l[M];if(_.tag!==5||!ae(_)){for(;b!=null&&bf(_,b);)M++,b=l[M];if(M===l.length){l=!0;break e}else for(_=_.child;_!==null;)a.push(_,M),_=_.sibling}}l=!1}return l;case ic:if(a.tag===5&&pe(a.stateNode,l.value))return!0;break;case sc:if((a.tag===5||a.tag===6)&&(a=Z(a),a!==null&&0<=a.indexOf(l.value)))return!0;break;case rc:if(a.tag===5&&(a=a.memoizedProps["data-testname"],typeof a=="string"&&a.toLowerCase()===l.value.toLowerCase()))return!0;break;default:throw Error(o(365))}return!1}function Af(a){switch(a.$$typeof){case tc:return"<"+(L(a.value)||"Unknown")+">";case nc:return":has("+(Af(a)||"")+")";case ic:return'[role="'+a.value+'"]';case sc:return'"'+a.value+'"';case rc:return'[data-testname="'+a.value+'"]';default:throw Error(o(365))}}function Sg(a,l){var d=[];a=[a,0];for(var _=0;_<a.length;){var M=a[_++],b=a[_++],B=l[b];if(M.tag!==5||!ae(M)){for(;B!=null&&bf(M,B);)b++,B=l[b];if(b===l.length)d.push(M);else for(M=M.child;M!==null;)a.push(M,b),M=M.sibling}}return d}function Rf(a,l){if(!Ie)throw Error(o(363));a=Tf(a),a=Sg(a,l),l=[],a=Array.from(a);for(var d=0;d<a.length;){var _=a[d++];if(_.tag===5)ae(_)||l.push(_.stateNode);else for(_=_.child;_!==null;)a.push(_),_=_.sibling}return l}var Wx=Math.ceil,oc=c.ReactCurrentDispatcher,Cf=c.ReactCurrentOwner,$t=c.ReactCurrentBatchConfig,Mt=0,nn=null,rn=null,Sn=0,si=0,no=Ct(0),ln=0,ha=null,io=0,ac=0,Pf=0,fa=null,qn=null,If=0,Lf=1/0;function ro(){Lf=pn()+500}var lc=!1,Df=null,Cr=null,cc=!1,Pr=null,uc=0,da=0,Uf=null,hc=-1,fc=0;function Bn(){return(Mt&6)!==0?pn():hc!==-1?hc:hc=pn()}function Ir(a){return(a.mode&1)===0?1:(Mt&2)!==0&&Sn!==0?Sn&-Sn:bx.transition!==null?(fc===0&&(a=Tl,Tl<<=1,(Tl&4194240)===0&&(Tl=64),fc=a),fc):(a=Dt,a!==0?a:_e())}function yi(a,l,d){if(50<da)throw da=0,Uf=null,Error(o(185));var _=dc(a,l);return _===null?null:(Ko(_,l,d),((Mt&2)===0||_!==nn)&&(_===nn&&((Mt&2)===0&&(ac|=l),ln===4&&Lr(_,Sn)),Zn(_,d),l===1&&Mt===0&&(a.mode&1)===0&&(ro(),Cl&&Vi())),_)}function dc(a,l){a.lanes|=l;var d=a.alternate;for(d!==null&&(d.lanes|=l),d=a,a=a.return;a!==null;)a.childLanes|=l,d=a.alternate,d!==null&&(d.childLanes|=l),d=a,a=a.return;return d.tag===3?d.stateNode:null}function Zn(a,l){var d=a.callbackNode;_x(a,l);var _=Al(a,a===nn?Sn:0);if(_===0)d!==null&&lm(d),a.callbackNode=null,a.callbackPriority=0;else if(l=_&-_,a.callbackPriority!==l){if(d!=null&&lm(d),l===1)a.tag===0?Tx(Eg.bind(null,a)):cm(Eg.bind(null,a)),Se?tt(function(){Mt===0&&Vi()}):Hh(Vh,Vi),d=null;else{switch(am(_)){case 1:d=Vh;break;case 4:d=Mx;break;case 16:d=Gh;break;case 536870912:d=Sx;break;default:d=Gh}d=Dg(d,wg.bind(null,a))}a.callbackPriority=l,a.callbackNode=d}}function wg(a,l){if(hc=-1,fc=0,(Mt&6)!==0)throw Error(o(327));var d=a.callbackNode;if(ss()&&a.callbackNode!==d)return null;var _=Al(a,a===nn?Sn:0);if(_===0)return null;if((_&30)!==0||(_&a.expiredLanes)!==0||l)l=pc(a,_);else{l=_;var M=Mt;Mt|=2;var b=Ag();(nn!==a||Sn!==l)&&(ro(),is(a,l));do try{qx();break}catch(H){bg(a,H)}while(!0);Yh(),oc.current=b,Mt=M,rn!==null?l=0:(nn=null,Sn=0,l=ln)}if(l!==0){if(l===2&&(M=Bh(a),M!==0&&(_=M,l=Nf(a,M))),l===1)throw d=ha,is(a,0),Lr(a,_),Zn(a,pn()),d;if(l===6)Lr(a,_);else{if(M=a.current.alternate,(_&30)===0&&!Xx(M)&&(l=pc(a,_),l===2&&(b=Bh(a),b!==0&&(_=b,l=Nf(a,b))),l===1))throw d=ha,is(a,0),Lr(a,_),Zn(a,pn()),d;switch(a.finishedWork=M,a.finishedLanes=_,l){case 0:case 1:throw Error(o(345));case 2:rs(a,qn);break;case 3:if(Lr(a,_),(_&130023424)===_&&(l=If+500-pn(),10<l)){if(Al(a,0)!==0)break;if(M=a.suspendedLanes,(M&_)!==_){Bn(),a.pingedLanes|=a.suspendedLanes&M;break}a.timeoutHandle=ve(rs.bind(null,a,qn),l);break}rs(a,qn);break;case 4:if(Lr(a,_),(_&4194240)===_)break;for(l=a.eventTimes,M=-1;0<_;){var B=31-Wt(_);b=1<<B,B=l[B],B>M&&(M=B),_&=~b}if(_=M,_=pn()-_,_=(120>_?120:480>_?480:1080>_?1080:1920>_?1920:3e3>_?3e3:4320>_?4320:1960*Wx(_/1960))-_,10<_){a.timeoutHandle=ve(rs.bind(null,a,qn),_);break}rs(a,qn);break;case 5:rs(a,qn);break;default:throw Error(o(329))}}}return Zn(a,pn()),a.callbackNode===d?wg.bind(null,a):null}function Nf(a,l){var d=fa;return a.current.memoizedState.isDehydrated&&(is(a,l).flags|=256),a=pc(a,l),a!==2&&(l=qn,qn=d,l!==null&&Of(l)),a}function Of(a){qn===null?qn=a:qn.push.apply(qn,a)}function Xx(a){for(var l=a;;){if(l.flags&16384){var d=l.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var _=0;_<d.length;_++){var M=d[_],b=M.getSnapshot;M=M.value;try{if(!Hi(b(),M))return!1}catch{return!1}}}if(d=l.child,l.subtreeFlags&16384&&d!==null)d.return=l,l=d;else{if(l===a)break;for(;l.sibling===null;){if(l.return===null||l.return===a)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function Lr(a,l){for(l&=~Pf,l&=~ac,a.suspendedLanes|=l,a.pingedLanes&=~l,a=a.expirationTimes;0<l;){var d=31-Wt(l),_=1<<d;a[d]=-1,l&=~_}}function Eg(a){if((Mt&6)!==0)throw Error(o(327));ss();var l=Al(a,0);if((l&1)===0)return Zn(a,pn()),null;var d=pc(a,l);if(a.tag!==0&&d===2){var _=Bh(a);_!==0&&(l=_,d=Nf(a,_))}if(d===1)throw d=ha,is(a,0),Lr(a,l),Zn(a,pn()),d;if(d===6)throw Error(o(345));return a.finishedWork=a.current.alternate,a.finishedLanes=l,rs(a,qn),Zn(a,pn()),null}function Tg(a){Pr!==null&&Pr.tag===0&&(Mt&6)===0&&ss();var l=Mt;Mt|=1;var d=$t.transition,_=Dt;try{if($t.transition=null,Dt=1,a)return a()}finally{Dt=_,$t.transition=d,Mt=l,(Mt&6)===0&&Vi()}}function Ff(){si=no.current,$e(no)}function is(a,l){a.finishedWork=null,a.finishedLanes=0;var d=a.timeoutHandle;if(d!==it&&(a.timeoutHandle=it,Ke(d)),rn!==null)for(d=rn.return;d!==null;){var _=d;switch($h(_),_.tag){case 1:_=_.type.childContextTypes,_!=null&&dn();break;case 3:eo(),$e(Gt),$e(Pe),af();break;case 5:sf(_);break;case 4:eo();break;case 13:$e(Yt);break;case 19:$e(Yt);break;case 10:qh(_.type._context);break;case 22:case 23:Ff()}d=d.return}if(nn=a,rn=a=Dr(a.current,null),Sn=si=l,ln=0,ha=null,Pf=ac=io=0,qn=fa=null,Gi!==null){for(l=0;l<Gi.length;l++)if(d=Gi[l],_=d.interleaved,_!==null){d.interleaved=null;var M=_.next,b=d.pending;if(b!==null){var B=b.next;b.next=M,_.next=B}d.pending=_}Gi=null}return a}function bg(a,l){do{var d=rn;try{if(Yh(),kl.current=Yl,Hl){for(var _=Zt.memoizedState;_!==null;){var M=_.queue;M!==null&&(M.pending=null),_=_.next}Hl=!1}if(to=0,mn=Rn=Zt=null,na=!1,ia=0,Cf.current=null,d===null||d.return===null){ln=1,ha=l,rn=null;break}e:{var b=a,B=d.return,H=d,re=l;if(l=Sn,H.flags|=32768,re!==null&&typeof re=="object"&&typeof re.then=="function"){var xe=re,ke=H,ut=ke.tag;if((ke.mode&1)===0&&(ut===0||ut===11||ut===15)){var Qe=ke.alternate;Qe?(ke.updateQueue=Qe.updateQueue,ke.memoizedState=Qe.memoizedState,ke.lanes=Qe.lanes):(ke.updateQueue=null,ke.memoizedState=null)}var kt=qm(B);if(kt!==null){kt.flags&=-257,Zm(kt,B,H,b,l),kt.mode&1&&Ym(b,xe,l),l=kt,re=xe;var je=l.updateQueue;if(je===null){var In=new Set;In.add(re),l.updateQueue=In}else je.add(re);break e}else{if((l&1)===0){Ym(b,xe,l),Bf();break e}re=Error(o(426))}}else if(Xt&&H.mode&1){var xi=qm(B);if(xi!==null){(xi.flags&65536)===0&&(xi.flags|=256),Zm(xi,B,H,b,l),nf(re);break e}}b=re,ln!==4&&(ln=2),fa===null?fa=[b]:fa.push(b),re=pf(re,H),H=B;do{switch(H.tag){case 3:H.flags|=65536,l&=-l,H.lanes|=l;var K=Wm(H,re,l);fm(H,K);break e;case 1:b=re;var W=H.type,ee=H.stateNode;if((H.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(Cr===null||!Cr.has(ee)))){H.flags|=65536,l&=-l,H.lanes|=l;var Le=Xm(H,b,l);fm(H,Le);break e}}H=H.return}while(H!==null)}Cg(d)}catch(Ze){l=Ze,rn===d&&d!==null&&(rn=d=d.return);continue}break}while(!0)}function Ag(){var a=oc.current;return oc.current=Yl,a===null?Yl:a}function Bf(){(ln===0||ln===3||ln===2)&&(ln=4),nn===null||(io&268435455)===0&&(ac&268435455)===0||Lr(nn,Sn)}function pc(a,l){var d=Mt;Mt|=2;var _=Ag();nn===a&&Sn===l||is(a,l);do try{Yx();break}catch(M){bg(a,M)}while(!0);if(Yh(),Mt=d,oc.current=_,rn!==null)throw Error(o(261));return nn=null,Sn=0,ln}function Yx(){for(;rn!==null;)Rg(rn)}function qx(){for(;rn!==null&&!vx();)Rg(rn)}function Rg(a){var l=Lg(a.alternate,a,si);a.memoizedProps=a.pendingProps,l===null?Cg(a):rn=l,Cf.current=null}function Cg(a){var l=a;do{var d=l.alternate;if(a=l.return,(l.flags&32768)===0){if(d=Ox(d,l,si),d!==null){rn=d;return}}else{if(d=zx(d,l),d!==null){d.flags&=32767,rn=d;return}if(a!==null)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{ln=6,rn=null;return}}if(l=l.sibling,l!==null){rn=l;return}rn=l=a}while(l!==null);ln===0&&(ln=5)}function rs(a,l){var d=Dt,_=$t.transition;try{$t.transition=null,Dt=1,Zx(a,l,d)}finally{$t.transition=_,Dt=d}return null}function Zx(a,l,d){do ss();while(Pr!==null);if((Mt&6)!==0)throw Error(o(327));var _=a.finishedWork,M=a.finishedLanes;if(_===null)return null;if(a.finishedWork=null,a.finishedLanes=0,_===a.current)throw Error(o(177));a.callbackNode=null,a.callbackPriority=0;var b=_.lanes|_.childLanes;if(yx(a,b),a===nn&&(rn=nn=null,Sn=0),(_.subtreeFlags&2064)===0&&(_.flags&2064)===0||cc||(cc=!0,Dg(Gh,function(){return ss(),null})),b=(_.flags&15990)!==0,(_.subtreeFlags&15990)!==0||b){b=$t.transition,$t.transition=null;var B=Dt;Dt=1;var H=Mt;Mt|=4,Cf.current=null,Hx(a,_),Vx(a,_),ne(a.containerInfo),a.current=_,Gx(_),xx(),Mt=H,Dt=B,$t.transition=b}else a.current=_;if(cc&&(cc=!1,Pr=a,uc=M),b=a.pendingLanes,b===0&&(Cr=null),wx(_.stateNode),Zn(a,pn()),l!==null)for(d=a.onRecoverableError,_=0;_<l.length;_++)d(l[_]);if(lc)throw lc=!1,a=Df,Df=null,a;return(uc&1)!==0&&a.tag!==0&&ss(),b=a.pendingLanes,(b&1)!==0?a===Uf?da++:(da=0,Uf=a):da=0,Vi(),null}function ss(){if(Pr!==null){var a=am(uc),l=$t.transition,d=Dt;try{if($t.transition=null,Dt=16>a?16:a,Pr===null)var _=!1;else{if(a=Pr,Pr=null,uc=0,(Mt&6)!==0)throw Error(o(331));var M=Mt;for(Mt|=4,Ae=a.current;Ae!==null;){var b=Ae,B=b.child;if((Ae.flags&16)!==0){var H=b.deletions;if(H!==null){for(var re=0;re<H.length;re++){var xe=H[re];for(Ae=xe;Ae!==null;){var ke=Ae;switch(ke.tag){case 0:case 11:case 15:ns(8,ke,b)}var ut=ke.child;if(ut!==null)ut.return=ke,Ae=ut;else for(;Ae!==null;){ke=Ae;var Qe=ke.sibling,kt=ke.return;if(dg(ke),ke===xe){Ae=null;break}if(Qe!==null){Qe.return=kt,Ae=Qe;break}Ae=kt}}}var je=b.alternate;if(je!==null){var In=je.child;if(In!==null){je.child=null;do{var xi=In.sibling;In.sibling=null,In=xi}while(In!==null)}}Ae=b}}if((b.subtreeFlags&2064)!==0&&B!==null)B.return=b,Ae=B;else e:for(;Ae!==null;){if(b=Ae,(b.flags&2048)!==0)switch(b.tag){case 0:case 11:case 15:ns(9,b,b.return)}var K=b.sibling;if(K!==null){K.return=b.return,Ae=K;break e}Ae=b.return}}var W=a.current;for(Ae=W;Ae!==null;){B=Ae;var ee=B.child;if((B.subtreeFlags&2064)!==0&&ee!==null)ee.return=B,Ae=ee;else e:for(B=W;Ae!==null;){if(H=Ae,(H.flags&2048)!==0)try{switch(H.tag){case 0:case 11:case 15:ca(9,H)}}catch(Ze){jn(H,H.return,Ze)}if(H===B){Ae=null;break e}var Le=H.sibling;if(Le!==null){Le.return=H.return,Ae=Le;break e}Ae=H.return}}if(Mt=M,Vi(),ki&&typeof ki.onPostCommitFiberRoot=="function")try{ki.onPostCommitFiberRoot(Rl,a)}catch{}_=!0}return _}finally{Dt=d,$t.transition=l}}return!1}function Pg(a,l,d){l=pf(d,l),l=Wm(a,l,1),Rr(a,l),l=Bn(),a=dc(a,1),a!==null&&(Ko(a,1,l),Zn(a,l))}function jn(a,l,d){if(a.tag===3)Pg(a,a,d);else for(;l!==null;){if(l.tag===3){Pg(l,a,d);break}else if(l.tag===1){var _=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof _.componentDidCatch=="function"&&(Cr===null||!Cr.has(_))){a=pf(d,a),a=Xm(l,a,1),Rr(l,a),a=Bn(),l=dc(l,1),l!==null&&(Ko(l,1,a),Zn(l,a));break}}l=l.return}}function jx(a,l,d){var _=a.pingCache;_!==null&&_.delete(l),l=Bn(),a.pingedLanes|=a.suspendedLanes&d,nn===a&&(Sn&d)===d&&(ln===4||ln===3&&(Sn&130023424)===Sn&&500>pn()-If?is(a,0):Pf|=d),Zn(a,l)}function Ig(a,l){l===0&&((a.mode&1)===0?l=1:(l=bl,bl<<=1,(bl&130023424)===0&&(bl=4194304)));var d=Bn();a=dc(a,l),a!==null&&(Ko(a,l,d),Zn(a,d))}function Kx(a){var l=a.memoizedState,d=0;l!==null&&(d=l.retryLane),Ig(a,d)}function Jx(a,l){var d=0;switch(a.tag){case 13:var _=a.stateNode,M=a.memoizedState;M!==null&&(d=M.retryLane);break;case 19:_=a.stateNode;break;default:throw Error(o(314))}_!==null&&_.delete(l),Ig(a,d)}var Lg;Lg=function(a,l,d){if(a!==null)if(a.memoizedProps!==l.pendingProps||Gt.current)ri=!0;else{if((a.lanes&d)===0&&(l.flags&128)===0)return ri=!1,Bx(a,l,d);ri=(a.flags&131072)!==0}else ri=!1,Xt&&(l.flags&1048576)!==0&&ym(l,Fl,l.index);switch(l.lanes=0,l.tag){case 2:var _=l.type;a!==null&&(a.alternate=null,l.alternate=null,l.flags|=2),a=l.pendingProps;var M=fn(l,Pe.current);Zs(l,d),M=cf(null,l,_,a,M,d);var b=uf();return l.flags|=1,typeof M=="object"&&M!==null&&typeof M.render=="function"&&M.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,Qt(_)?(b=!0,On(l)):b=!1,l.memoizedState=M.state!==null&&M.state!==void 0?M.state:null,jh(l),M.updater=Nl,l.stateNode=M,M._reactInternals=l,Jh(l,_,a,d),l=_f(null,l,_,!0,b,d)):(l.tag=0,Xt&&b&&Qh(l),Fn(null,l,M,d),l=l.child),l;case 16:_=l.elementType;e:{switch(a!==null&&(a.alternate=null,l.alternate=null,l.flags|=2),a=l.pendingProps,M=_._init,_=M(_._payload),l.type=_,M=l.tag=$x(_),a=Ei(_,a),M){case 0:l=gf(null,l,_,a,d);break e;case 1:l=ng(null,l,_,a,d);break e;case 11:l=Jm(null,l,_,a,d);break e;case 14:l=Qm(null,l,_,Ei(_.type,a),d);break e}throw Error(o(306,_,""))}return l;case 0:return _=l.type,M=l.pendingProps,M=l.elementType===_?M:Ei(_,M),gf(a,l,_,M,d);case 1:return _=l.type,M=l.pendingProps,M=l.elementType===_?M:Ei(_,M),ng(a,l,_,M,d);case 3:e:{if(ig(l),a===null)throw Error(o(387));_=l.pendingProps,b=l.memoizedState,M=b.element,hm(a,l),Ul(l,_,null,d);var B=l.memoizedState;if(_=B.element,me&&b.isDehydrated)if(b={element:_,isDehydrated:!1,cache:B.cache,transitions:B.transitions},l.updateQueue.baseState=b,l.memoizedState=b,l.flags&256){M=Error(o(423)),l=rg(a,l,_,d,M);break e}else if(_!==M){M=Error(o(424)),l=rg(a,l,_,d,M);break e}else for(me&&(ii=xl(l.stateNode.containerInfo),ni=l,Xt=!0,Ti=null,Jo=!1),d=Em(l,null,_,d),l.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(Js(),_===M){l=lr(a,l,d);break e}Fn(a,l,_,d)}l=l.child}return l;case 5:return Tm(l),a===null&&tf(l),_=l.type,M=l.pendingProps,b=a!==null?a.memoizedProps:null,B=M.children,ge(_,M)?B=null:b!==null&&ge(_,b)&&(l.flags|=32),tg(a,l),Fn(a,l,B,d),l.child;case 6:return a===null&&tf(l),null;case 13:return sg(a,l,d);case 4:return rf(l,l.stateNode.containerInfo),_=l.pendingProps,a===null?l.child=Qs(l,null,_,d):Fn(a,l,_,d),l.child;case 11:return _=l.type,M=l.pendingProps,M=l.elementType===_?M:Ei(_,M),Jm(a,l,_,M,d);case 7:return Fn(a,l,l.pendingProps,d),l.child;case 8:return Fn(a,l,l.pendingProps.children,d),l.child;case 12:return Fn(a,l,l.pendingProps.children,d),l.child;case 10:e:{if(_=l.type._context,M=l.pendingProps,b=l.memoizedProps,B=M.value,um(l,_,B),b!==null)if(Hi(b.value,B)){if(b.children===M.children&&!Gt.current){l=lr(a,l,d);break e}}else for(b=l.child,b!==null&&(b.return=l);b!==null;){var H=b.dependencies;if(H!==null){B=b.child;for(var re=H.firstContext;re!==null;){if(re.context===_){if(b.tag===1){re=rr(-1,d&-d),re.tag=2;var xe=b.updateQueue;if(xe!==null){xe=xe.shared;var ke=xe.pending;ke===null?re.next=re:(re.next=ke.next,ke.next=re),xe.pending=re}}b.lanes|=d,re=b.alternate,re!==null&&(re.lanes|=d),Zh(b.return,d,l),H.lanes|=d;break}re=re.next}}else if(b.tag===10)B=b.type===l.type?null:b.child;else if(b.tag===18){if(B=b.return,B===null)throw Error(o(341));B.lanes|=d,H=B.alternate,H!==null&&(H.lanes|=d),Zh(B,d,l),B=b.sibling}else B=b.child;if(B!==null)B.return=b;else for(B=b;B!==null;){if(B===l){B=null;break}if(b=B.sibling,b!==null){b.return=B.return,B=b;break}B=B.return}b=B}Fn(a,l,M.children,d),l=l.child}return l;case 9:return M=l.type,_=l.pendingProps.children,Zs(l,d),M=di(M),_=_(M),l.flags|=1,Fn(a,l,_,d),l.child;case 14:return _=l.type,M=Ei(_,l.pendingProps),M=Ei(_.type,M),Qm(a,l,_,M,d);case 15:return $m(a,l,l.type,l.pendingProps,d);case 17:return _=l.type,M=l.pendingProps,M=l.elementType===_?M:Ei(_,M),a!==null&&(a.alternate=null,l.alternate=null,l.flags|=2),l.tag=1,Qt(_)?(a=!0,On(l)):a=!1,Zs(l,d),gm(l,_,M),Jh(l,_,M,d),_f(null,l,_,!0,a,d);case 19:return cg(a,l,d);case 22:return eg(a,l,d)}throw Error(o(156,l.tag))};function Dg(a,l){return Hh(a,l)}function Qx(a,l,d,_){this.tag=a,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=_,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(a,l,d,_){return new Qx(a,l,d,_)}function zf(a){return a=a.prototype,!(!a||!a.isReactComponent)}function $x(a){if(typeof a=="function")return zf(a)?1:0;if(a!=null){if(a=a.$$typeof,a===S)return 11;if(a===E)return 14}return 2}function Dr(a,l){var d=a.alternate;return d===null?(d=vi(a.tag,l,a.key,a.mode),d.elementType=a.elementType,d.type=a.type,d.stateNode=a.stateNode,d.alternate=a,a.alternate=d):(d.pendingProps=l,d.type=a.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=a.flags&14680064,d.childLanes=a.childLanes,d.lanes=a.lanes,d.child=a.child,d.memoizedProps=a.memoizedProps,d.memoizedState=a.memoizedState,d.updateQueue=a.updateQueue,l=a.dependencies,d.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},d.sibling=a.sibling,d.index=a.index,d.ref=a.ref,d}function mc(a,l,d,_,M,b){var B=2;if(_=a,typeof a=="function")zf(a)&&(B=1);else if(typeof a=="string")B=5;else e:switch(a){case f:return os(d.children,M,b,l);case p:B=8,M|=8;break;case m:return a=vi(12,d,l,M|2),a.elementType=m,a.lanes=b,a;case x:return a=vi(13,d,l,M),a.elementType=x,a.lanes=b,a;case y:return a=vi(19,d,l,M),a.elementType=y,a.lanes=b,a;case w:return gc(d,M,b,l);default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case g:B=10;break e;case v:B=9;break e;case S:B=11;break e;case E:B=14;break e;case T:B=16,_=null;break e}throw Error(o(130,a==null?a:typeof a,""))}return l=vi(B,d,l,M),l.elementType=a,l.type=_,l.lanes=b,l}function os(a,l,d,_){return a=vi(7,a,_,l),a.lanes=d,a}function gc(a,l,d,_){return a=vi(22,a,_,l),a.elementType=w,a.lanes=d,a.stateNode={},a}function kf(a,l,d){return a=vi(6,a,null,l),a.lanes=d,a}function Hf(a,l,d){return l=vi(4,a.children!==null?a.children:[],a.key,l),l.lanes=d,l.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},l}function eM(a,l,d,_,M){this.tag=l,this.containerInfo=a,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=it,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zh(0),this.expirationTimes=zh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zh(0),this.identifierPrefix=_,this.onRecoverableError=M,me&&(this.mutableSourceEagerHydrationData=null)}function Ug(a,l,d,_,M,b,B,H,re){return a=new eM(a,l,d,H,re),l===1?(l=1,b===!0&&(l|=8)):l=0,b=vi(3,null,null,l),a.current=b,b.stateNode=a,b.memoizedState={element:_,isDehydrated:d,cache:null,transitions:null},jh(b),a}function Ng(a){if(!a)return xt;a=a._reactInternals;e:{if(R(a)!==a||a.tag!==1)throw Error(o(170));var l=a;do{switch(l.tag){case 3:l=l.stateNode.context;break e;case 1:if(Qt(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break e}}l=l.return}while(l!==null);throw Error(o(171))}if(a.tag===1){var d=a.type;if(Qt(d))return Bt(a,d,l)}return l}function Og(a){var l=a._reactInternals;if(l===void 0)throw typeof a.render=="function"?Error(o(188)):(a=Object.keys(a).join(","),Error(o(268,a)));return a=q(l),a===null?null:a.stateNode}function Fg(a,l){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var d=a.retryLane;a.retryLane=d!==0&&d<l?d:l}}function Vf(a,l){Fg(a,l),(a=a.alternate)&&Fg(a,l)}function tM(a){return a=q(a),a===null?null:a.stateNode}function nM(){return null}return t.attemptContinuousHydration=function(a){if(a.tag===13){var l=Bn();yi(a,134217728,l),Vf(a,134217728)}},t.attemptHydrationAtCurrentPriority=function(a){if(a.tag===13){var l=Bn(),d=Ir(a);yi(a,d,l),Vf(a,d)}},t.attemptSynchronousHydration=function(a){switch(a.tag){case 3:var l=a.stateNode;if(l.current.memoizedState.isDehydrated){var d=jo(l.pendingLanes);d!==0&&(kh(l,d|1),Zn(l,pn()),(Mt&6)===0&&(ro(),Vi()))}break;case 13:var _=Bn();Tg(function(){return yi(a,1,_)}),Vf(a,1)}},t.batchedUpdates=function(a,l){var d=Mt;Mt|=1;try{return a(l)}finally{Mt=d,Mt===0&&(ro(),Cl&&Vi())}},t.createComponentSelector=function(a){return{$$typeof:tc,value:a}},t.createContainer=function(a,l,d,_,M,b,B){return Ug(a,l,!1,null,d,_,M,b,B)},t.createHasPseudoClassSelector=function(a){return{$$typeof:nc,value:a}},t.createHydrationContainer=function(a,l,d,_,M,b,B,H,re){return a=Ug(d,_,!0,a,M,b,B,H,re),a.context=Ng(null),d=a.current,_=Bn(),M=Ir(d),b=rr(_,M),b.callback=l??null,Rr(d,b),a.current.lanes=M,Ko(a,M,_),Zn(a,_),a},t.createPortal=function(a,l,d){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:_==null?null:""+_,children:a,containerInfo:l,implementation:d}},t.createRoleSelector=function(a){return{$$typeof:ic,value:a}},t.createTestNameSelector=function(a){return{$$typeof:rc,value:a}},t.createTextSelector=function(a){return{$$typeof:sc,value:a}},t.deferredUpdates=function(a){var l=Dt,d=$t.transition;try{return $t.transition=null,Dt=16,a()}finally{Dt=l,$t.transition=d}},t.discreteUpdates=function(a,l,d,_,M){var b=Dt,B=$t.transition;try{return $t.transition=null,Dt=1,a(l,d,_,M)}finally{Dt=b,$t.transition=B,Mt===0&&ro()}},t.findAllNodes=Rf,t.findBoundingRects=function(a,l){if(!Ie)throw Error(o(363));l=Rf(a,l),a=[];for(var d=0;d<l.length;d++)a.push(C(l[d]));for(l=a.length-1;0<l;l--){d=a[l];for(var _=d.x,M=_+d.width,b=d.y,B=b+d.height,H=l-1;0<=H;H--)if(l!==H){var re=a[H],xe=re.x,ke=xe+re.width,ut=re.y,Qe=ut+re.height;if(_>=xe&&b>=ut&&M<=ke&&B<=Qe){a.splice(l,1);break}else if(_!==xe||d.width!==re.width||Qe<b||ut>B){if(!(b!==ut||d.height!==re.height||ke<_||xe>M)){xe>_&&(re.width+=xe-_,re.x=_),ke<M&&(re.width=M-xe),a.splice(l,1);break}}else{ut>b&&(re.height+=ut-b,re.y=b),Qe<B&&(re.height=B-ut),a.splice(l,1);break}}}return a},t.findHostInstance=Og,t.findHostInstanceWithNoPortals=function(a){return a=N(a),a=a!==null?j(a):null,a===null?null:a.stateNode},t.findHostInstanceWithWarning=function(a){return Og(a)},t.flushControlled=function(a){var l=Mt;Mt|=1;var d=$t.transition,_=Dt;try{$t.transition=null,Dt=1,a()}finally{Dt=_,$t.transition=d,Mt=l,Mt===0&&(ro(),Vi())}},t.flushPassiveEffects=ss,t.flushSync=Tg,t.focusWithin=function(a,l){if(!Ie)throw Error(o(363));for(a=Tf(a),l=Sg(a,l),l=Array.from(l),a=0;a<l.length;){var d=l[a++];if(!ae(d)){if(d.tag===5&&ce(d.stateNode))return!0;for(d=d.child;d!==null;)l.push(d),d=d.sibling}}return!1},t.getCurrentUpdatePriority=function(){return Dt},t.getFindAllNodesFailureDescription=function(a,l){if(!Ie)throw Error(o(363));var d=0,_=[];a=[Tf(a),0];for(var M=0;M<a.length;){var b=a[M++],B=a[M++],H=l[B];if((b.tag!==5||!ae(b))&&(bf(b,H)&&(_.push(Af(H)),B++,B>d&&(d=B)),B<l.length))for(b=b.child;b!==null;)a.push(b,B),b=b.sibling}if(d<l.length){for(a=[];d<l.length;d++)a.push(Af(l[d]));return`findAllNodes was able to match part of the selector:
  `+(_.join(" > ")+`

No matching component was found for:
  `)+a.join(" > ")}return null},t.getPublicRootInstance=function(a){if(a=a.current,!a.child)return null;switch(a.child.tag){case 5:return J(a.child.stateNode);default:return a.child.stateNode}},t.injectIntoDevTools=function(a){if(a={bundleType:a.bundleType,version:a.version,rendererPackageName:a.rendererPackageName,rendererConfig:a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:c.ReactCurrentDispatcher,findHostInstanceByFiber:tM,findFiberByHostInstance:a.findFiberByHostInstance||nM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")a=!1;else{var l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(l.isDisabled||!l.supportsFiber)a=!0;else{try{Rl=l.inject(a),ki=l}catch{}a=!!l.checkDCE}}return a},t.isAlreadyRendering=function(){return!1},t.observeVisibleRects=function(a,l,d,_){if(!Ie)throw Error(o(363));a=Rf(a,l);var M=Xe(a,d,_).disconnect;return{disconnect:function(){M()}}},t.registerMutableSourceForHydration=function(a,l){var d=l._getVersion;d=d(l._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[l,d]:a.mutableSourceEagerHydrationData.push(l,d)},t.runWithPriority=function(a,l){var d=Dt;try{return Dt=a,l()}finally{Dt=d}},t.shouldError=function(){return null},t.shouldSuspend=function(){return!1},t.updateContainer=function(a,l,d,_){var M=l.current,b=Bn(),B=Ir(M);return d=Ng(d),l.context===null?l.context=d:l.pendingContext=d,l=rr(b,B),l.payload={element:a},_=_===void 0?null:_,_!==null&&(l.callback=_),Rr(M,l),a=yi(M,B,b),a!==null&&Dl(a,M,B),B},t}),Nd}var w0;function pR(){return w0||(w0=1,Ld.exports=dR()),Ld.exports}var mR=pR();const gR=oM(mR);var E0=Jv();const rm={},_R=r=>void Object.assign(rm,r);function yR(r,e){function t(f,{args:p=[],attach:m,...g},v){let S=`${f[0].toUpperCase()}${f.slice(1)}`,x;if(f==="primitive"){if(g.object===void 0)throw new Error("R3F: Primitives without 'object' are invalid!");const y=g.object;x=bo(y,{type:f,root:v,attach:m,primitive:!0})}else{const y=rm[S];if(!y)throw new Error(`R3F: ${S} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(!Array.isArray(p))throw new Error("R3F: The args prop must be an array!");x=bo(new y(...p),{type:f,root:v,attach:m,memoizedProps:{args:p}})}return x.__r3f.attach===void 0&&(x.isBufferGeometry?x.__r3f.attach="geometry":x.isMaterial&&(x.__r3f.attach="material")),S!=="inject"&&Bd(x,g),x}function n(f,p){let m=!1;if(p){var g,v;(g=p.__r3f)!=null&&g.attach?Fd(f,p,p.__r3f.attach):p.isObject3D&&f.isObject3D&&(f.add(p),m=!0),m||(v=f.__r3f)==null||v.objects.push(p),p.__r3f||bo(p,{}),p.__r3f.parent=f,pp(p),Ao(p)}}function i(f,p,m){let g=!1;if(p){var v,S;if((v=p.__r3f)!=null&&v.attach)Fd(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){p.parent=f,p.dispatchEvent({type:"added"}),f.dispatchEvent({type:"childadded",child:p});const x=f.children.filter(E=>E!==p),y=x.indexOf(m);f.children=[...x.slice(0,y),p,...x.slice(y)],g=!0}g||(S=f.__r3f)==null||S.objects.push(p),p.__r3f||bo(p,{}),p.__r3f.parent=f,pp(p),Ao(p)}}function s(f,p,m=!1){f&&[...f].forEach(g=>o(p,g,m))}function o(f,p,m){if(p){var g,v,S;if(p.__r3f&&(p.__r3f.parent=null),(g=f.__r3f)!=null&&g.objects&&(f.__r3f.objects=f.__r3f.objects.filter(w=>w!==p)),(v=p.__r3f)!=null&&v.attach)C0(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){var x;f.remove(p),(x=p.__r3f)!=null&&x.root&&TR(gu(p),p)}const E=(S=p.__r3f)==null?void 0:S.primitive,T=!E&&(m===void 0?p.dispose!==null:m);if(!E){var y;s((y=p.__r3f)==null?void 0:y.objects,p,T),s(p.children,p,T)}if(delete p.__r3f,T&&p.dispose&&p.type!=="Scene"){const w=()=>{try{p.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT>"u"?E0.unstable_scheduleCallback(E0.unstable_IdlePriority,w):w()}Ao(f)}}function c(f,p,m,g){var v;const S=(v=f.__r3f)==null?void 0:v.parent;if(!S)return;const x=t(p,m,f.__r3f.root);if(f.children){for(const y of f.children)y.__r3f&&n(x,y);f.children=f.children.filter(y=>!y.__r3f)}f.__r3f.objects.forEach(y=>n(x,y)),f.__r3f.objects=[],f.__r3f.autoRemovedBeforeAppend||o(S,f),x.parent&&(x.__r3f.autoRemovedBeforeAppend=!0),n(S,x),x.raycast&&x.__r3f.eventCount&&gu(x).getState().internal.interaction.push(x),[g,g.alternate].forEach(y=>{y!==null&&(y.stateNode=x,y.ref&&(typeof y.ref=="function"?y.ref(x):y.ref.current=x))})}const u=()=>{};return{reconciler:gR({createInstance:t,removeChild:o,appendChild:n,appendInitialChild:n,insertBefore:i,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(f,p)=>{if(!p)return;const m=f.getState().scene;m.__r3f&&(m.__r3f.root=f,n(m,p))},removeChildFromContainer:(f,p)=>{p&&o(f.getState().scene,p)},insertInContainerBefore:(f,p,m)=>{if(!p||!m)return;const g=f.getState().scene;g.__r3f&&i(g,p,m)},getRootHostContext:()=>null,getChildHostContext:f=>f,finalizeInitialChildren(f){var p;return!!((p=f==null?void 0:f.__r3f)!=null?p:{}).handlers},prepareUpdate(f,p,m,g){var v;if(((v=f==null?void 0:f.__r3f)!=null?v:{}).primitive&&g.object&&g.object!==f)return[!0];{const{args:x=[],children:y,...E}=g,{args:T=[],children:w,...U}=m;if(!Array.isArray(x))throw new Error("R3F: the args prop must be an array!");if(x.some((L,O)=>L!==T[O]))return[!0];const P=rx(f,E,U,!0);return P.changes.length?[!1,P]:null}},commitUpdate(f,[p,m],g,v,S,x){p?c(f,g,S,x):Bd(f,m)},commitMount(f,p,m,g){var v;const S=(v=f.__r3f)!=null?v:{};f.raycast&&S.handlers&&S.eventCount&&gu(f).getState().internal.interaction.push(f)},getPublicInstance:f=>f,prepareForCommit:()=>null,preparePortalMount:f=>bo(f.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(f){var p;const{attach:m,parent:g}=(p=f.__r3f)!=null?p:{};m&&g&&C0(g,f,m),f.isObject3D&&(f.visible=!1),Ao(f)},unhideInstance(f,p){var m;const{attach:g,parent:v}=(m=f.__r3f)!=null?m:{};g&&v&&Fd(v,f,g),(f.isObject3D&&p.visible==null||p.visible)&&(f.visible=!0),Ao(f)},createTextInstance:u,hideTextInstance:u,unhideTextInstance:u,getCurrentEventPriority:()=>e?e():Lo.DefaultEventPriority,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:typeof performance<"u"&&Ht.fun(performance.now)?performance.now:Ht.fun(Date.now)?Date.now:()=>0,scheduleTimeout:Ht.fun(setTimeout)?setTimeout:void 0,cancelTimeout:Ht.fun(clearTimeout)?clearTimeout:void 0}),applyProps:Bd}}var T0,b0;const Od=r=>"colorSpace"in r||"outputColorSpace"in r,Qv=()=>{var r;return(r=rm.ColorManagement)!=null?r:null},$v=r=>r&&r.isOrthographicCamera,vR=r=>r&&r.hasOwnProperty("current"),gl=typeof window<"u"&&((T0=window.document)!=null&&T0.createElement||((b0=window.navigator)==null?void 0:b0.product)==="ReactNative")?pt.useLayoutEffect:pt.useEffect;function ex(r){const e=pt.useRef(r);return gl(()=>void(e.current=r),[r]),e}function xR({set:r}){return gl(()=>(r(new Promise(()=>null)),()=>r(!1)),[r]),null}class tx extends pt.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}}tx.getDerivedStateFromError=()=>({error:!0});const nx="__default",A0=new Map,MR=r=>r&&!!r.memoized&&!!r.changes;function ix(r){var e;const t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(r)?Math.min(Math.max(r[0],t),r[1]):r}const ba=r=>{var e;return(e=r.__r3f)==null?void 0:e.root.getState()};function gu(r){let e=r.__r3f.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}const Ht={obj:r=>r===Object(r)&&!Ht.arr(r)&&typeof r!="function",fun:r=>typeof r=="function",str:r=>typeof r=="string",num:r=>typeof r=="number",boo:r=>typeof r=="boolean",und:r=>r===void 0,arr:r=>Array.isArray(r),equ(r,e,{arrays:t="shallow",objects:n="reference",strict:i=!0}={}){if(typeof r!=typeof e||!!r!=!!e)return!1;if(Ht.str(r)||Ht.num(r)||Ht.boo(r))return r===e;const s=Ht.obj(r);if(s&&n==="reference")return r===e;const o=Ht.arr(r);if(o&&t==="reference")return r===e;if((o||s)&&r===e)return!0;let c;for(c in r)if(!(c in e))return!1;if(s&&t==="shallow"&&n==="shallow"){for(c in i?e:r)if(!Ht.equ(r[c],e[c],{strict:i,objects:"reference"}))return!1}else for(c in i?e:r)if(r[c]!==e[c])return!1;if(Ht.und(c)){if(o&&r.length===0&&e.length===0||s&&Object.keys(r).length===0&&Object.keys(e).length===0)return!0;if(r!==e)return!1}return!0}};function SR(r){r.dispose&&r.type!=="Scene"&&r.dispose();for(const e in r)e.dispose==null||e.dispose(),delete r[e]}function bo(r,e){const t=r;return t.__r3f={type:"",root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null,...e},r}function dp(r,e){let t=r;if(e.includes("-")){const n=e.split("-"),i=n.pop();return t=n.reduce((s,o)=>s[o],r),{target:t,key:i}}else return{target:t,key:e}}const R0=/-\d+$/;function Fd(r,e,t){if(Ht.str(t)){if(R0.test(t)){const s=t.replace(R0,""),{target:o,key:c}=dp(r,s);Array.isArray(o[c])||(o[c]=[])}const{target:n,key:i}=dp(r,t);e.__r3f.previousAttach=n[i],n[i]=e}else e.__r3f.previousAttach=t(r,e)}function C0(r,e,t){var n,i;if(Ht.str(t)){const{target:s,key:o}=dp(r,t),c=e.__r3f.previousAttach;c===void 0?delete s[o]:s[o]=c}else(n=e.__r3f)==null||n.previousAttach==null||n.previousAttach(r,e);(i=e.__r3f)==null||delete i.previousAttach}function rx(r,{children:e,key:t,ref:n,...i},{children:s,key:o,ref:c,...u}={},h=!1){const f=r.__r3f,p=Object.entries(i),m=[];if(h){const v=Object.keys(u);for(let S=0;S<v.length;S++)i.hasOwnProperty(v[S])||p.unshift([v[S],nx+"remove"])}p.forEach(([v,S])=>{var x;if((x=r.__r3f)!=null&&x.primitive&&v==="object"||Ht.equ(S,u[v]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(v))return m.push([v,S,!0,[]]);let y=[];v.includes("-")&&(y=v.split("-")),m.push([v,S,!1,y]);for(const E in i){const T=i[E];E.startsWith(`${v}-`)&&m.push([E,T,!1,E.split("-")])}});const g={...i};return f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.args&&(g.args=f.memoizedProps.args),f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.attach&&(g.attach=f.memoizedProps.attach),{memoized:g,changes:m}}function Bd(r,e){var t;const n=r.__r3f,i=n==null?void 0:n.root,s=i==null||i.getState==null?void 0:i.getState(),{memoized:o,changes:c}=MR(e)?e:rx(r,e),u=n==null?void 0:n.eventCount;r.__r3f&&(r.__r3f.memoizedProps=o);for(let m=0;m<c.length;m++){let[g,v,S,x]=c[m];if(Od(r)){const w="srgb",U="srgb-linear";g==="encoding"?(g="colorSpace",v=v===3001?w:U):g==="outputEncoding"&&(g="outputColorSpace",v=v===3001?w:U)}let y=r,E=y[g];if(x.length&&(E=x.reduce((T,w)=>T[w],r),!(E&&E.set))){const[T,...w]=x.reverse();y=w.reverse().reduce((U,P)=>U[P],r),g=T}if(v===nx+"remove")if(y.constructor){let T=A0.get(y.constructor);T||(T=new y.constructor,A0.set(y.constructor,T)),v=T[g]}else v=0;if(S&&n)v?n.handlers[g]=v:delete n.handlers[g],n.eventCount=Object.keys(n.handlers).length;else if(E&&E.set&&(E.copy||E instanceof Ls)){if(Array.isArray(v))E.fromArray?E.fromArray(v):E.set(...v);else if(E.copy&&v&&v.constructor&&E.constructor===v.constructor)E.copy(v);else if(v!==void 0){var h;const T=(h=E)==null?void 0:h.isColor;!T&&E.setScalar?E.setScalar(v):E instanceof Ls&&v instanceof Ls?E.mask=v.mask:E.set(v),!Qv()&&s&&!s.linear&&T&&E.convertSRGBToLinear()}}else{var f;if(y[g]=v,(f=y[g])!=null&&f.isTexture&&y[g].format===bn&&y[g].type===Di&&s){const T=y[g];Od(T)&&Od(s.gl)?T.colorSpace=s.gl.outputColorSpace:T.encoding=s.gl.outputEncoding}}Ao(r)}if(n&&n.parent&&r.raycast&&u!==n.eventCount){const m=gu(r).getState().internal,g=m.interaction.indexOf(r);g>-1&&m.interaction.splice(g,1),n.eventCount&&m.interaction.push(r)}return!(c.length===1&&c[0][0]==="onUpdate")&&c.length&&(t=r.__r3f)!=null&&t.parent&&pp(r),r}function Ao(r){var e,t;const n=(e=r.__r3f)==null||(t=e.root)==null||t.getState==null?void 0:t.getState();n&&n.internal.frames===0&&n.invalidate()}function pp(r){r.onUpdate==null||r.onUpdate(r)}function wR(r,e){r.manual||($v(r)?(r.left=e.width/-2,r.right=e.width/2,r.top=e.height/2,r.bottom=e.height/-2):r.aspect=e.width/e.height,r.updateProjectionMatrix(),r.updateMatrixWorld())}function lu(r){return(r.eventObject||r.object).uuid+"/"+r.index+r.instanceId}function ER(){var r;const e=typeof self<"u"&&self||typeof window<"u"&&window;if(!e)return Lo.DefaultEventPriority;switch((r=e.event)==null?void 0:r.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return Lo.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return Lo.ContinuousEventPriority;default:return Lo.DefaultEventPriority}}function sx(r,e,t,n){const i=t.get(e);i&&(t.delete(e),t.size===0&&(r.delete(n),i.target.releasePointerCapture(n)))}function TR(r,e){const{internal:t}=r.getState();t.interaction=t.interaction.filter(n=>n!==e),t.initialHits=t.initialHits.filter(n=>n!==e),t.hovered.forEach((n,i)=>{(n.eventObject===e||n.object===e)&&t.hovered.delete(i)}),t.capturedMap.forEach((n,i)=>{sx(t.capturedMap,e,n,i)})}function bR(r){function e(u){const{internal:h}=r.getState(),f=u.offsetX-h.initialClick[0],p=u.offsetY-h.initialClick[1];return Math.round(Math.sqrt(f*f+p*p))}function t(u){return u.filter(h=>["Move","Over","Enter","Out","Leave"].some(f=>{var p;return(p=h.__r3f)==null?void 0:p.handlers["onPointer"+f]}))}function n(u,h){const f=r.getState(),p=new Set,m=[],g=h?h(f.internal.interaction):f.internal.interaction;for(let y=0;y<g.length;y++){const E=ba(g[y]);E&&(E.raycaster.camera=void 0)}f.previousRoot||f.events.compute==null||f.events.compute(u,f);function v(y){const E=ba(y);if(!E||!E.events.enabled||E.raycaster.camera===null)return[];if(E.raycaster.camera===void 0){var T;E.events.compute==null||E.events.compute(u,E,(T=E.previousRoot)==null?void 0:T.getState()),E.raycaster.camera===void 0&&(E.raycaster.camera=null)}return E.raycaster.camera?E.raycaster.intersectObject(y,!0):[]}let S=g.flatMap(v).sort((y,E)=>{const T=ba(y.object),w=ba(E.object);return!T||!w?y.distance-E.distance:w.events.priority-T.events.priority||y.distance-E.distance}).filter(y=>{const E=lu(y);return p.has(E)?!1:(p.add(E),!0)});f.events.filter&&(S=f.events.filter(S,f));for(const y of S){let E=y.object;for(;E;){var x;(x=E.__r3f)!=null&&x.eventCount&&m.push({...y,eventObject:E}),E=E.parent}}if("pointerId"in u&&f.internal.capturedMap.has(u.pointerId))for(let y of f.internal.capturedMap.get(u.pointerId).values())p.has(lu(y.intersection))||m.push(y.intersection);return m}function i(u,h,f,p){const m=r.getState();if(u.length){const g={stopped:!1};for(const v of u){const S=ba(v.object)||m,{raycaster:x,pointer:y,camera:E,internal:T}=S,w=new D(y.x,y.y,0).unproject(E),U=A=>{var N,q;return(N=(q=T.capturedMap.get(A))==null?void 0:q.has(v.eventObject))!=null?N:!1},P=A=>{const N={intersection:v,target:h.target};T.capturedMap.has(A)?T.capturedMap.get(A).set(v.eventObject,N):T.capturedMap.set(A,new Map([[v.eventObject,N]])),h.target.setPointerCapture(A)},L=A=>{const N=T.capturedMap.get(A);N&&sx(T.capturedMap,v.eventObject,N,A)};let O={};for(let A in h){let N=h[A];typeof N!="function"&&(O[A]=N)}let R={...v,...O,pointer:y,intersections:u,stopped:g.stopped,delta:f,unprojectedPoint:w,ray:x.ray,camera:E,stopPropagation(){const A="pointerId"in h&&T.capturedMap.get(h.pointerId);if((!A||A.has(v.eventObject))&&(R.stopped=g.stopped=!0,T.hovered.size&&Array.from(T.hovered.values()).find(N=>N.eventObject===v.eventObject))){const N=u.slice(0,u.indexOf(v));s([...N,v])}},target:{hasPointerCapture:U,setPointerCapture:P,releasePointerCapture:L},currentTarget:{hasPointerCapture:U,setPointerCapture:P,releasePointerCapture:L},nativeEvent:h};if(p(R),g.stopped===!0)break}}return u}function s(u){const{internal:h}=r.getState();for(const f of h.hovered.values())if(!u.length||!u.find(p=>p.object===f.object&&p.index===f.index&&p.instanceId===f.instanceId)){const m=f.eventObject.__r3f,g=m==null?void 0:m.handlers;if(h.hovered.delete(lu(f)),m!=null&&m.eventCount){const v={...f,intersections:u};g.onPointerOut==null||g.onPointerOut(v),g.onPointerLeave==null||g.onPointerLeave(v)}}}function o(u,h){for(let f=0;f<h.length;f++){const p=h[f].__r3f;p==null||p.handlers.onPointerMissed==null||p.handlers.onPointerMissed(u)}}function c(u){switch(u){case"onPointerLeave":case"onPointerCancel":return()=>s([]);case"onLostPointerCapture":return h=>{const{internal:f}=r.getState();"pointerId"in h&&f.capturedMap.has(h.pointerId)&&requestAnimationFrame(()=>{f.capturedMap.has(h.pointerId)&&(f.capturedMap.delete(h.pointerId),s([]))})}}return function(f){const{onPointerMissed:p,internal:m}=r.getState();m.lastEvent.current=f;const g=u==="onPointerMove",v=u==="onClick"||u==="onContextMenu"||u==="onDoubleClick",x=n(f,g?t:void 0),y=v?e(f):0;u==="onPointerDown"&&(m.initialClick=[f.offsetX,f.offsetY],m.initialHits=x.map(T=>T.eventObject)),v&&!x.length&&y<=2&&(o(f,m.interaction),p&&p(f)),g&&s(x);function E(T){const w=T.eventObject,U=w.__r3f,P=U==null?void 0:U.handlers;if(U!=null&&U.eventCount)if(g){if(P.onPointerOver||P.onPointerEnter||P.onPointerOut||P.onPointerLeave){const L=lu(T),O=m.hovered.get(L);O?O.stopped&&T.stopPropagation():(m.hovered.set(L,T),P.onPointerOver==null||P.onPointerOver(T),P.onPointerEnter==null||P.onPointerEnter(T))}P.onPointerMove==null||P.onPointerMove(T)}else{const L=P[u];L?(!v||m.initialHits.includes(w))&&(o(f,m.interaction.filter(O=>!m.initialHits.includes(O))),L(T)):v&&m.initialHits.includes(w)&&o(f,m.interaction.filter(O=>!m.initialHits.includes(O)))}}i(x,f,y,E)}}return{handlePointer:c}}const ox=r=>!!(r!=null&&r.render),ax=pt.createContext(null),AR=(r,e)=>{const t=sM((c,u)=>{const h=new D,f=new D,p=new D;function m(y=u().camera,E=f,T=u().size){const{width:w,height:U,top:P,left:L}=T,O=w/U;E.isVector3?p.copy(E):p.set(...E);const R=y.getWorldPosition(h).distanceTo(p);if($v(y))return{width:w/y.zoom,height:U/y.zoom,top:P,left:L,factor:1,distance:R,aspect:O};{const A=y.fov*Math.PI/180,N=2*Math.tan(A/2)*R,q=N*(w/U);return{width:q,height:N,top:P,left:L,factor:w/q,distance:R,aspect:O}}}let g;const v=y=>c(E=>({performance:{...E.performance,current:y}})),S=new le;return{set:c,get:u,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},xr:null,scene:null,invalidate:(y=1)=>r(u(),y),advance:(y,E)=>e(y,E,u()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new $p,pointer:S,mouse:S,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const y=u();g&&clearTimeout(g),y.performance.current!==y.performance.min&&v(y.performance.min),g=setTimeout(()=>v(u().performance.max),y.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:m},setEvents:y=>c(E=>({...E,events:{...E.events,...y}})),setSize:(y,E,T,w,U)=>{const P=u().camera,L={width:y,height:E,top:w||0,left:U||0,updateStyle:T};c(O=>({size:L,viewport:{...O.viewport,...m(P,f,L)}}))},setDpr:y=>c(E=>{const T=ix(y);return{viewport:{...E.viewport,dpr:T,initialDpr:E.viewport.initialDpr||T}}}),setFrameloop:(y="always")=>{const E=u().clock;E.stop(),E.elapsedTime=0,y!=="never"&&(E.start(),E.elapsedTime=0),c(()=>({frameloop:y}))},previousRoot:void 0,internal:{active:!1,priority:0,frames:0,lastEvent:pt.createRef(),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(y,E,T)=>{const w=u().internal;return w.priority=w.priority+(E>0?1:0),w.subscribers.push({ref:y,priority:E,store:T}),w.subscribers=w.subscribers.sort((U,P)=>U.priority-P.priority),()=>{const U=u().internal;U!=null&&U.subscribers&&(U.priority=U.priority-(E>0?1:0),U.subscribers=U.subscribers.filter(P=>P.ref!==y))}}}}}),n=t.getState();let i=n.size,s=n.viewport.dpr,o=n.camera;return t.subscribe(()=>{const{camera:c,size:u,viewport:h,gl:f,set:p}=t.getState();if(u.width!==i.width||u.height!==i.height||h.dpr!==s){var m;i=u,s=h.dpr,wR(c,u),f.setPixelRatio(h.dpr);const g=(m=u.updateStyle)!=null?m:typeof HTMLCanvasElement<"u"&&f.domElement instanceof HTMLCanvasElement;f.setSize(u.width,u.height,g)}c!==o&&(o=c,p(g=>({viewport:{...g.viewport,...g.viewport.getCurrentViewport(c)}})))}),t.subscribe(c=>r(c)),t};let cu,RR=new Set,CR=new Set,PR=new Set;function zd(r,e){if(r.size)for(const{callback:t}of r.values())t(e)}function Aa(r,e){switch(r){case"before":return zd(RR,e);case"after":return zd(CR,e);case"tail":return zd(PR,e)}}let kd,Hd;function Vd(r,e,t){let n=e.clock.getDelta();for(e.frameloop==="never"&&typeof r=="number"&&(n=r-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=r),kd=e.internal.subscribers,cu=0;cu<kd.length;cu++)Hd=kd[cu],Hd.ref.current(Hd.store.getState(),n,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}function IR(r){let e=!1,t=!1,n,i,s;function o(h){i=requestAnimationFrame(o),e=!0,n=0,Aa("before",h),t=!0;for(const p of r.values()){var f;s=p.store.getState(),s.internal.active&&(s.frameloop==="always"||s.internal.frames>0)&&!((f=s.gl.xr)!=null&&f.isPresenting)&&(n+=Vd(h,s))}if(t=!1,Aa("after",h),n===0)return Aa("tail",h),e=!1,cancelAnimationFrame(i)}function c(h,f=1){var p;if(!h)return r.forEach(m=>c(m.store.getState(),f));(p=h.gl.xr)!=null&&p.isPresenting||!h.internal.active||h.frameloop==="never"||(f>1?h.internal.frames=Math.min(60,h.internal.frames+f):t?h.internal.frames=2:h.internal.frames=1,e||(e=!0,requestAnimationFrame(o)))}function u(h,f=!0,p,m){if(f&&Aa("before",h),p)Vd(h,p,m);else for(const g of r.values())Vd(h,g.store.getState());f&&Aa("after",h)}return{loop:o,invalidate:c,advance:u}}function lx(){const r=pt.useContext(ax);if(!r)throw new Error("R3F: Hooks can only be used within the Canvas component!");return r}function HC(r=t=>t,e){return lx()(r,e)}function VC(r,e=0){const t=lx(),n=t.getState().internal.subscribe,i=ex(r);return gl(()=>n(i,e,t),[e,n,t]),null}const Go=new Map,{invalidate:P0,advance:I0}=IR(Go),{reconciler:nh,applyProps:Eo}=yR(Go,ER),To={objects:"shallow",strict:!1},LR=(r,e)=>{const t=typeof r=="function"?r(e):r;return ox(t)?t:new nv({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...r})};function DR(r,e){const t=typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement;if(e){const{width:n,height:i,top:s,left:o,updateStyle:c=t}=e;return{width:n,height:i,top:s,left:o,updateStyle:c}}else if(typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement&&r.parentElement){const{width:n,height:i,top:s,left:o}=r.parentElement.getBoundingClientRect();return{width:n,height:i,top:s,left:o,updateStyle:t}}else if(typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas)return{width:r.width,height:r.height,top:0,left:0,updateStyle:t};return{width:0,height:0,top:0,left:0}}function UR(r){const e=Go.get(r),t=e==null?void 0:e.fiber,n=e==null?void 0:e.store;e&&console.warn("R3F.createRoot should only be called once!");const i=typeof reportError=="function"?reportError:console.error,s=n||AR(P0,I0),o=t||nh.createContainer(s,Lo.ConcurrentRoot,null,!1,null,"",i,null);e||Go.set(r,{fiber:o,store:s});let c,u=!1,h;return{configure(f={}){let{gl:p,size:m,scene:g,events:v,onCreated:S,shadows:x=!1,linear:y=!1,flat:E=!1,legacy:T=!1,orthographic:w=!1,frameloop:U="always",dpr:P=[1,2],performance:L,raycaster:O,camera:R,onPointerMissed:A}=f,N=s.getState(),q=N.gl;N.gl||N.set({gl:q=LR(p,r)});let Y=N.raycaster;Y||N.set({raycaster:Y=new qv});const{params:j,...te}=O||{};if(Ht.equ(te,Y,To)||Eo(Y,{...te}),Ht.equ(j,Y.params,To)||Eo(Y,{params:{...Y.params,...j}}),!N.camera||N.camera===h&&!Ht.equ(h,R,To)){h=R;const ne=R instanceof al,ue=ne?R:w?new ul(0,0,0,0,.1,1e3):new yn(75,0,.1,1e3);ne||(ue.position.z=5,R&&(Eo(ue,R),("aspect"in R||"left"in R||"right"in R||"bottom"in R||"top"in R)&&(ue.manual=!0,ue.updateProjectionMatrix())),!N.camera&&!(R!=null&&R.rotation)&&ue.lookAt(0,0,0)),N.set({camera:ue}),Y.camera=ue}if(!N.scene){let ne;g!=null&&g.isScene?ne=g:(ne=new Za,g&&Eo(ne,g)),N.set({scene:bo(ne)})}if(!N.xr){var J;const ne=(Ye,se)=>{const ge=s.getState();ge.frameloop!=="never"&&I0(Ye,!0,ge,se)},ue=()=>{const Ye=s.getState();Ye.gl.xr.enabled=Ye.gl.xr.isPresenting,Ye.gl.xr.setAnimationLoop(Ye.gl.xr.isPresenting?ne:null),Ye.gl.xr.isPresenting||P0(Ye)},Re={connect(){const Ye=s.getState().gl;Ye.xr.addEventListener("sessionstart",ue),Ye.xr.addEventListener("sessionend",ue)},disconnect(){const Ye=s.getState().gl;Ye.xr.removeEventListener("sessionstart",ue),Ye.xr.removeEventListener("sessionend",ue)}};typeof((J=q.xr)==null?void 0:J.addEventListener)=="function"&&Re.connect(),N.set({xr:Re})}if(q.shadowMap){const ne=q.shadowMap.enabled,ue=q.shadowMap.type;if(q.shadowMap.enabled=!!x,Ht.boo(x))q.shadowMap.type=La;else if(Ht.str(x)){var de;const Re={basic:ey,percentage:rh,soft:La,variance:Ci};q.shadowMap.type=(de=Re[x])!=null?de:La}else Ht.obj(x)&&Object.assign(q.shadowMap,x);(ne!==q.shadowMap.enabled||ue!==q.shadowMap.type)&&(q.shadowMap.needsUpdate=!0)}const k=Qv();k&&("enabled"in k?k.enabled=!T:"legacyMode"in k&&(k.legacyMode=T)),u||Eo(q,{outputEncoding:y?3e3:3001,toneMapping:E?Qi:mp}),N.legacy!==T&&N.set(()=>({legacy:T})),N.linear!==y&&N.set(()=>({linear:y})),N.flat!==E&&N.set(()=>({flat:E})),p&&!Ht.fun(p)&&!ox(p)&&!Ht.equ(p,q,To)&&Eo(q,p),v&&!N.events.handlers&&N.set({events:v(s)});const ie=DR(r,m);return Ht.equ(ie,N.size,To)||N.setSize(ie.width,ie.height,ie.updateStyle,ie.top,ie.left),P&&N.viewport.dpr!==ix(P)&&N.setDpr(P),N.frameloop!==U&&N.setFrameloop(U),N.onPointerMissed||N.set({onPointerMissed:A}),L&&!Ht.equ(L,N.performance,To)&&N.set(ne=>({performance:{...ne.performance,...L}})),c=S,u=!0,this},render(f){return u||this.configure(),nh.updateContainer(Pi.jsx(NR,{store:s,children:f,onCreated:c,rootElement:r}),o,null,()=>{}),s},unmount(){cx(r)}}}function NR({store:r,children:e,onCreated:t,rootElement:n}){return gl(()=>{const i=r.getState();i.set(s=>({internal:{...s.internal,active:!0}})),t&&t(i),r.getState().events.connected||i.events.connect==null||i.events.connect(n)},[]),Pi.jsx(ax.Provider,{value:r,children:e})}function cx(r,e){const t=Go.get(r),n=t==null?void 0:t.fiber;if(n){const i=t==null?void 0:t.store.getState();i&&(i.internal.active=!1),nh.updateContainer(null,n,null,()=>{i&&setTimeout(()=>{try{var s,o,c,u;i.events.disconnect==null||i.events.disconnect(),(s=i.gl)==null||(o=s.renderLists)==null||o.dispose==null||o.dispose(),(c=i.gl)==null||c.forceContextLoss==null||c.forceContextLoss(),(u=i.gl)!=null&&u.xr&&i.xr.disconnect(),SR(i),Go.delete(r)}catch{}},500)})}}nh.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:pt.version});const Gd={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function OR(r){const{handlePointer:e}=bR(r);return{priority:1,enabled:!0,compute(t,n,i){n.pointer.set(t.offsetX/n.size.width*2-1,-(t.offsetY/n.size.height)*2+1),n.raycaster.setFromCamera(n.pointer,n.camera)},connected:void 0,handlers:Object.keys(Gd).reduce((t,n)=>({...t,[n]:e(n)}),{}),update:()=>{var t;const{events:n,internal:i}=r.getState();(t=i.lastEvent)!=null&&t.current&&n.handlers&&n.handlers.onPointerMove(i.lastEvent.current)},connect:t=>{var n;const{set:i,events:s}=r.getState();s.disconnect==null||s.disconnect(),i(o=>({events:{...o.events,connected:t}})),Object.entries((n=s.handlers)!=null?n:[]).forEach(([o,c])=>{const[u,h]=Gd[o];t.addEventListener(u,c,{passive:h})})},disconnect:()=>{const{set:t,events:n}=r.getState();if(n.connected){var i;Object.entries((i=n.handlers)!=null?i:[]).forEach(([s,o])=>{if(n&&n.connected instanceof HTMLElement){const[c]=Gd[s];n.connected.removeEventListener(c,o)}}),t(s=>({events:{...s.events,connected:void 0}}))}}}}function L0(r,e){let t;return(...n)=>{window.clearTimeout(t),t=window.setTimeout(()=>r(...n),e)}}function FR({debounce:r,scroll:e,polyfill:t,offsetSize:n}={debounce:0,scroll:!1,offsetSize:!1}){const i=t||(typeof window>"u"?class{}:window.ResizeObserver);if(!i)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[s,o]=pt.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),c=pt.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:s,orientationHandler:null}),u=r?typeof r=="number"?r:r.scroll:null,h=r?typeof r=="number"?r:r.resize:null,f=pt.useRef(!1);pt.useEffect(()=>(f.current=!0,()=>void(f.current=!1)));const[p,m,g]=pt.useMemo(()=>{const y=()=>{if(!c.current.element)return;const{left:E,top:T,width:w,height:U,bottom:P,right:L,x:O,y:R}=c.current.element.getBoundingClientRect(),A={left:E,top:T,width:w,height:U,bottom:P,right:L,x:O,y:R};c.current.element instanceof HTMLElement&&n&&(A.height=c.current.element.offsetHeight,A.width=c.current.element.offsetWidth),Object.freeze(A),f.current&&!HR(c.current.lastBounds,A)&&o(c.current.lastBounds=A)};return[y,h?L0(y,h):y,u?L0(y,u):y]},[o,n,u,h]);function v(){c.current.scrollContainers&&(c.current.scrollContainers.forEach(y=>y.removeEventListener("scroll",g,!0)),c.current.scrollContainers=null),c.current.resizeObserver&&(c.current.resizeObserver.disconnect(),c.current.resizeObserver=null),c.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",c.current.orientationHandler))}function S(){c.current.element&&(c.current.resizeObserver=new i(g),c.current.resizeObserver.observe(c.current.element),e&&c.current.scrollContainers&&c.current.scrollContainers.forEach(y=>y.addEventListener("scroll",g,{capture:!0,passive:!0})),c.current.orientationHandler=()=>{g()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",c.current.orientationHandler))}const x=y=>{!y||y===c.current.element||(v(),c.current.element=y,c.current.scrollContainers=ux(y),S())};return zR(g,!!e),BR(m),pt.useEffect(()=>{v(),S()},[e,g,m]),pt.useEffect(()=>v,[]),[x,s,p]}function BR(r){pt.useEffect(()=>{const e=r;return window.addEventListener("resize",e),()=>void window.removeEventListener("resize",e)},[r])}function zR(r,e){pt.useEffect(()=>{if(e){const t=r;return window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",t,!0)}},[r,e])}function ux(r){const e=[];if(!r||r===document.body)return e;const{overflow:t,overflowX:n,overflowY:i}=window.getComputedStyle(r);return[t,n,i].some(s=>s==="auto"||s==="scroll")&&e.push(r),[...e,...ux(r.parentElement)]}const kR=["x","y","top","bottom","left","right","width","height"],HR=(r,e)=>kR.every(t=>r[t]===e[t]);var VR=Object.defineProperty,GR=Object.defineProperties,WR=Object.getOwnPropertyDescriptors,D0=Object.getOwnPropertySymbols,XR=Object.prototype.hasOwnProperty,YR=Object.prototype.propertyIsEnumerable,U0=(r,e,t)=>e in r?VR(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,N0=(r,e)=>{for(var t in e||(e={}))XR.call(e,t)&&U0(r,t,e[t]);if(D0)for(var t of D0(e))YR.call(e,t)&&U0(r,t,e[t]);return r},qR=(r,e)=>GR(r,WR(e)),O0,F0;typeof window<"u"&&((O0=window.document)!=null&&O0.createElement||((F0=window.navigator)==null?void 0:F0.product)==="ReactNative")?pt.useLayoutEffect:pt.useEffect;function hx(r,e,t){if(!r)return;if(t(r)===!0)return r;let n=r.child;for(;n;){const i=hx(n,e,t);if(i)return i;n=n.sibling}}function fx(r){try{return Object.defineProperties(r,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return r}}const B0=console.error;console.error=function(){const r=[...arguments].join("");if(r!=null&&r.startsWith("Warning:")&&r.includes("useContext")){console.error=B0;return}return B0.apply(this,arguments)};const sm=fx(pt.createContext(null));class dx extends pt.Component{render(){return pt.createElement(sm.Provider,{value:this._reactInternals},this.props.children)}}function ZR(){const r=pt.useContext(sm);if(r===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const e=pt.useId();return pt.useMemo(()=>{for(const n of[r,r==null?void 0:r.alternate]){if(!n)continue;const i=hx(n,!1,s=>{let o=s.memoizedState;for(;o;){if(o.memoizedState===e)return!0;o=o.next}});if(i)return i}},[r,e])}function jR(){const r=ZR(),[e]=pt.useState(()=>new Map);e.clear();let t=r;for(;t;){if(t.type&&typeof t.type=="object"){const i=t.type._context===void 0&&t.type.Provider===t.type?t.type:t.type._context;i&&i!==sm&&!e.has(i)&&e.set(i,pt.useContext(fx(i)))}t=t.return}return e}function KR(){const r=jR();return pt.useMemo(()=>Array.from(r.keys()).reduce((e,t)=>n=>pt.createElement(e,null,pt.createElement(t.Provider,qR(N0({},n),{value:r.get(t)}))),e=>pt.createElement(dx,N0({},e))),[r])}const JR=pt.forwardRef(function({children:e,fallback:t,resize:n,style:i,gl:s,events:o=OR,eventSource:c,eventPrefix:u,shadows:h,linear:f,flat:p,legacy:m,orthographic:g,frameloop:v,dpr:S,performance:x,raycaster:y,camera:E,scene:T,onPointerMissed:w,onCreated:U,...P},L){pt.useMemo(()=>_R(cR),[]);const O=KR(),[R,A]=FR({scroll:!0,debounce:{scroll:50,resize:0},...n}),N=pt.useRef(null),q=pt.useRef(null);pt.useImperativeHandle(L,()=>N.current);const Y=ex(w),[j,te]=pt.useState(!1),[J,de]=pt.useState(!1);if(j)throw j;if(J)throw J;const k=pt.useRef(null);gl(()=>{const ne=N.current;A.width>0&&A.height>0&&ne&&(k.current||(k.current=UR(ne)),k.current.configure({gl:s,events:o,shadows:h,linear:f,flat:p,legacy:m,orthographic:g,frameloop:v,dpr:S,performance:x,raycaster:y,camera:E,scene:T,size:A,onPointerMissed:(...ue)=>Y.current==null?void 0:Y.current(...ue),onCreated:ue=>{ue.events.connect==null||ue.events.connect(c?vR(c)?c.current:c:q.current),u&&ue.setEvents({compute:(Re,Ye)=>{const se=Re[u+"X"],ge=Re[u+"Y"];Ye.pointer.set(se/Ye.size.width*2-1,-(ge/Ye.size.height)*2+1),Ye.raycaster.setFromCamera(Ye.pointer,Ye.camera)}}),U==null||U(ue)}}),k.current.render(Pi.jsx(O,{children:Pi.jsx(tx,{set:de,children:Pi.jsx(pt.Suspense,{fallback:Pi.jsx(xR,{set:te}),children:e??null})})})))}),pt.useEffect(()=>{const ne=N.current;if(ne)return()=>cx(ne)},[]);const ie=c?"none":"auto";return Pi.jsx("div",{ref:q,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:ie,...i},...P,children:Pi.jsx("div",{ref:R,style:{width:"100%",height:"100%"},children:Pi.jsx("canvas",{ref:N,style:{display:"block"},children:t})})})}),GC=pt.forwardRef(function(e,t){return Pi.jsx(dx,{children:Pi.jsx(JR,{...e,ref:t})})});we.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new le(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Vn.line={uniforms:mh.merge([we.common,we.fog,we.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class QR extends Si{static get type(){return"LineMaterial"}constructor(e){super({uniforms:mh.clone(Vn.line.uniforms),vertexShader:Vn.line.vertexShader,fragmentShader:Vn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const z0=new xn,uu=new D;class $R extends Jp{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Ve(e,3)),this.setAttribute("uv",new Ve(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new th(t,6,1);return this.setAttribute("instanceStart",new ci(n,3,0)),this.setAttribute("instanceEnd",new ci(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new th(t,6,1);return this.setAttribute("instanceColorStart",new ci(n,3,0)),this.setAttribute("instanceColorEnd",new ci(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Wp(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),z0.setFromBufferAttribute(t),this.boundingBox.union(z0))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)uu.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(uu)),uu.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(uu));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}const Wd=new Et,k0=new D,H0=new D,wn=new Et,En=new Et,qi=new Et,Xd=new D,Yd=new et,Tn=new Zv,V0=new D,hu=new xn,fu=new Mn,Zi=new Et;let Ki,Ns;function G0(r,e,t){return Zi.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),Zi.multiplyScalar(1/Zi.w),Zi.x=Ns/t.width,Zi.y=Ns/t.height,Zi.applyMatrix4(r.projectionMatrixInverse),Zi.multiplyScalar(1/Zi.w),Math.abs(Math.max(Zi.x,Zi.y))}function eC(r,e){const t=r.matrixWorld,n=r.geometry,i=n.attributes.instanceStart,s=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let c=0,u=o;c<u;c++){Tn.start.fromBufferAttribute(i,c),Tn.end.fromBufferAttribute(s,c),Tn.applyMatrix4(t);const h=new D,f=new D;Ki.distanceSqToSegment(Tn.start,Tn.end,f,h),f.distanceTo(h)<Ns*.5&&e.push({point:f,pointOnLine:h,distance:Ki.origin.distanceTo(f),object:r,face:null,faceIndex:c,uv:null,uv1:null})}}function tC(r,e,t){const n=e.projectionMatrix,s=r.material.resolution,o=r.matrixWorld,c=r.geometry,u=c.attributes.instanceStart,h=c.attributes.instanceEnd,f=Math.min(c.instanceCount,u.count),p=-e.near;Ki.at(1,qi),qi.w=1,qi.applyMatrix4(e.matrixWorldInverse),qi.applyMatrix4(n),qi.multiplyScalar(1/qi.w),qi.x*=s.x/2,qi.y*=s.y/2,qi.z=0,Xd.copy(qi),Yd.multiplyMatrices(e.matrixWorldInverse,o);for(let m=0,g=f;m<g;m++){if(wn.fromBufferAttribute(u,m),En.fromBufferAttribute(h,m),wn.w=1,En.w=1,wn.applyMatrix4(Yd),En.applyMatrix4(Yd),wn.z>p&&En.z>p)continue;if(wn.z>p){const T=wn.z-En.z,w=(wn.z-p)/T;wn.lerp(En,w)}else if(En.z>p){const T=En.z-wn.z,w=(En.z-p)/T;En.lerp(wn,w)}wn.applyMatrix4(n),En.applyMatrix4(n),wn.multiplyScalar(1/wn.w),En.multiplyScalar(1/En.w),wn.x*=s.x/2,wn.y*=s.y/2,En.x*=s.x/2,En.y*=s.y/2,Tn.start.copy(wn),Tn.start.z=0,Tn.end.copy(En),Tn.end.z=0;const S=Tn.closestPointToPointParameter(Xd,!0);Tn.at(S,V0);const x=ko.lerp(wn.z,En.z,S),y=x>=-1&&x<=1,E=Xd.distanceTo(V0)<Ns*.5;if(y&&E){Tn.start.fromBufferAttribute(u,m),Tn.end.fromBufferAttribute(h,m),Tn.start.applyMatrix4(o),Tn.end.applyMatrix4(o);const T=new D,w=new D;Ki.distanceSqToSegment(Tn.start,Tn.end,w,T),t.push({point:w,pointOnLine:T,distance:Ki.origin.distanceTo(w),object:r,face:null,faceIndex:m,uv:null,uv1:null})}}}class WC extends tn{constructor(e=new $R,t=new QR({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,c=0,u=t.count;o<u;o++,c+=2)k0.fromBufferAttribute(t,o),H0.fromBufferAttribute(n,o),i[c]=c===0?0:i[c-1],i[c+1]=i[c]+k0.distanceTo(H0);const s=new th(i,2,1);return e.setAttribute("instanceDistanceStart",new ci(s,1,0)),e.setAttribute("instanceDistanceEnd",new ci(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Ki=e.ray;const o=this.matrixWorld,c=this.geometry,u=this.material;Ns=u.linewidth+s,c.boundingSphere===null&&c.computeBoundingSphere(),fu.copy(c.boundingSphere).applyMatrix4(o);let h;if(n)h=Ns*.5;else{const p=Math.max(i.near,fu.distanceToPoint(Ki.origin));h=G0(i,p,u.resolution)}if(fu.radius+=h,Ki.intersectsSphere(fu)===!1)return;c.boundingBox===null&&c.computeBoundingBox(),hu.copy(c.boundingBox).applyMatrix4(o);let f;if(n)f=Ns*.5;else{const p=Math.max(i.near,hu.distanceToPoint(Ki.origin));f=G0(i,p,u.resolution)}hu.expandByScalar(f),Ki.intersectsBox(hu)!==!1&&(n?eC(this,t):tC(this,i,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Wd),this.material.uniforms.resolution.value.set(Wd.z,Wd.w))}}const W0={type:"change"},om={type:"start"},px={type:"end"},du=new Hs,X0=new mr,nC=Math.cos(70*ko.DEG2RAD),cn=new D,Jn=2*Math.PI,zt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qd=1e-6;class XC extends Kv{constructor(e,t=null){super(e,t),this.state=zt.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rs.ROTATE,MIDDLE:Rs.DOLLY,RIGHT:Rs.PAN},this.touches={ONE:ws.ROTATE,TWO:ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new An,this._lastTargetPosition=new D,this._quat=new An().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fp,this._sphericalDelta=new fp,this._scale=1,this._panOffset=new D,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new D,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=rC.bind(this),this._onPointerDown=iC.bind(this),this._onPointerUp=sC.bind(this),this._onContextMenu=fC.bind(this),this._onMouseWheel=lC.bind(this),this._onKeyDown=cC.bind(this),this._onTouchStart=uC.bind(this),this._onTouchMove=hC.bind(this),this._onMouseDown=oC.bind(this),this._onMouseMove=aC.bind(this),this._interceptControlDown=dC.bind(this),this._interceptControlUp=pC.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(W0),this.update(),this.state=zt.NONE}update(e=null){const t=this.object.position;cn.copy(t).sub(this.target),cn.applyQuaternion(this._quat),this._spherical.setFromVector3(cn),this.autoRotate&&this.state===zt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Jn:n>Math.PI&&(n-=Jn),i<-Math.PI?i+=Jn:i>Math.PI&&(i-=Jn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(cn.setFromSpherical(this._spherical),cn.applyQuaternion(this._quatInverse),t.copy(this.target).add(cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const c=cn.length();o=this._clampDistance(c*this._scale);const u=c-o;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),s=!!u}else if(this.object.isOrthographicCamera){const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=u!==this.object.zoom;const h=new D(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(c),this.object.updateMatrixWorld(),o=cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(du.origin.copy(this.object.position),du.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(du.direction))<nC?this.object.lookAt(this.target):(X0.setFromNormalAndCoplanarPoint(this.object.up,this.target),du.intersectPlane(X0,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>qd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qd||this._lastTargetPosition.distanceToSquared(this.target)>qd?(this.dispatchEvent(W0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Jn/60*this.autoRotateSpeed*e:Jn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){cn.setFromMatrixColumn(t,0),cn.multiplyScalar(-e),this._panOffset.add(cn)}_panUp(e,t){this.screenSpacePanning===!0?cn.setFromMatrixColumn(t,1):(cn.setFromMatrixColumn(t,0),cn.crossVectors(this.object.up,cn)),cn.multiplyScalar(e),this._panOffset.add(cn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;cn.copy(i).sub(this.target);let s=cn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,o=n.width,c=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(o,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function iC(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function rC(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function sC(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(px),this.state=zt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function oC(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Rs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=zt.DOLLY;break;case Rs.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=zt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=zt.ROTATE}break;case Rs.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=zt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=zt.PAN}break;default:this.state=zt.NONE}this.state!==zt.NONE&&this.dispatchEvent(om)}function aC(r){switch(this.state){case zt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case zt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case zt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function lC(r){this.enabled===!1||this.enableZoom===!1||this.state!==zt.NONE||(r.preventDefault(),this.dispatchEvent(om),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(px))}function cC(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function uC(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=zt.TOUCH_ROTATE;break;case ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=zt.TOUCH_PAN;break;default:this.state=zt.NONE}break;case 2:switch(this.touches.TWO){case ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=zt.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=zt.TOUCH_DOLLY_ROTATE;break;default:this.state=zt.NONE}break;default:this.state=zt.NONE}this.state!==zt.NONE&&this.dispatchEvent(om)}function hC(r){switch(this._trackPointer(r),this.state){case zt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case zt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case zt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case zt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=zt.NONE}}function fC(r){this.enabled!==!1&&r.preventDefault()}function dC(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function pC(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Y0={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class ih{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new EC(e)}),this.register(function(e){return new TC(e)}),this.register(function(e){return new CC(e)}),this.register(function(e){return new PC(e)}),this.register(function(e){return new IC(e)}),this.register(function(e){return new LC(e)}),this.register(function(e){return new bC(e)}),this.register(function(e){return new AC(e)}),this.register(function(e){return new RC(e)}),this.register(function(e){return new DC(e)}),this.register(function(e){return new UC(e)}),this.register(function(e){return new NC(e)}),this.register(function(e){return new OC(e)}),this.register(function(e){return new FC(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,i){const s=new wC,o=[];for(let c=0,u=this.pluginCallbacks.length;c<u;c++)o.push(this.pluginCallbacks[c](s));s.setPlugins(o),s.setTextureUtils(this.textureUtils),s.writeAsync(e,t,i).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,i,s,t)})}}const Tt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Zd="KHR_mesh_quantization",ui={};ui[vn]=Tt.NEAREST;ui[oh]=Tt.NEAREST_MIPMAP_NEAREST;ui[Es]=Tt.NEAREST_MIPMAP_LINEAR;ui[on]=Tt.LINEAR;ui[Do]=Tt.LINEAR_MIPMAP_NEAREST;ui[Li]=Tt.LINEAR_MIPMAP_LINEAR;ui[li]=Tt.CLAMP_TO_EDGE;ui[No]=Tt.REPEAT;ui[Oo]=Tt.MIRRORED_REPEAT;const q0={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},mC=new Ne,Z0=12,gC=1179937895,_C=2,j0=8,yC=1313821514,vC=5130562;function Ia(r,e){return r.length===e.length&&r.every(function(t,n){return t===e[n]})}function xC(r){return new TextEncoder().encode(r).buffer}function MC(r){return Ia(r.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function SC(r,e,t){const n={min:new Array(r.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(r.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let i=e;i<e+t;i++)for(let s=0;s<r.itemSize;s++){let o;r.itemSize>4?o=r.array[i*r.itemSize+s]:(s===0?o=r.getX(i):s===1?o=r.getY(i):s===2?o=r.getZ(i):s===3&&(o=r.getW(i)),r.normalized===!0&&(o=ko.normalize(o,r.array))),n.min[s]=Math.min(n.min[s],o),n.max[s]=Math.max(n.max[s],o)}return n}function mx(r){return Math.ceil(r/4)*4}function jd(r,e=0){const t=mx(r.byteLength);if(t!==r.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(r)),e!==0)for(let i=r.byteLength;i<t;i++)n[i]=e;return n.buffer}return r}function K0(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function J0(r,e){if(r.toBlob!==void 0)return new Promise(n=>r.toBlob(n,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),r.convertToBlob({type:e,quality:t})}class wC{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+il}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);const i=this,s=i.buffers,o=i.json;n=i.options;const c=i.extensionsUsed,u=i.extensionsRequired,h=new Blob(s,{type:"application/octet-stream"}),f=Object.keys(c),p=Object.keys(u);if(f.length>0&&(o.extensionsUsed=f),p.length>0&&(o.extensionsRequired=p),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=h.size),n.binary===!0){const m=new FileReader;m.readAsArrayBuffer(h),m.onloadend=function(){const g=jd(m.result),v=new DataView(new ArrayBuffer(j0));v.setUint32(0,g.byteLength,!0),v.setUint32(4,vC,!0);const S=jd(xC(JSON.stringify(o)),32),x=new DataView(new ArrayBuffer(j0));x.setUint32(0,S.byteLength,!0),x.setUint32(4,yC,!0);const y=new ArrayBuffer(Z0),E=new DataView(y);E.setUint32(0,gC,!0),E.setUint32(4,_C,!0);const T=Z0+x.byteLength+S.byteLength+v.byteLength+g.byteLength;E.setUint32(8,T,!0);const w=new Blob([y,x,S,v,g],{type:"application/octet-stream"}),U=new FileReader;U.readAsArrayBuffer(w),U.onloadend=function(){t(U.result)}}}else if(o.buffers&&o.buffers.length>0){const m=new FileReader;m.readAsDataURL(h),m.onloadend=function(){const g=m.result;o.buffers[0].uri=g,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,i=this.extensionsUsed;try{const s=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&s.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const o in s.gltfExtensions)t.extensions[o]=s.gltfExtensions[o],i[o]=!0;delete s.gltfExtensions}Object.keys(s).length>0&&(t.extras=s)}catch(s){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+s.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const i=new Map;i.set(!0,this.uid++),i.set(!1,this.uid++),this.uids.set(e,i)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const n=new D;for(let i=0,s=e.count;i<s;i++)if(Math.abs(n.fromBufferAttribute(e,i).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),i=new D;for(let s=0,o=n.count;s<o;s++)i.fromBufferAttribute(n,s),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(s,i.x,i.y,i.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const i={};(t.offset.x!==0||t.offset.y!==0)&&(i.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(i.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(i.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(g){return g.colorSpace===Hn?function(S){return S<.04045?S*.0773993808:Math.pow(S*.9478672986+.0521327014,2.4)}:function(S){return S}}e instanceof Ds&&(e=await this.decompressTextureAsync(e)),t instanceof Ds&&(t=await this.decompressTextureAsync(t));const i=e?e.image:null,s=t?t.image:null,o=Math.max(i?i.width:0,s?s.width:0),c=Math.max(i?i.height:0,s?s.height:0),u=K0();u.width=o,u.height=c;const h=u.getContext("2d",{willReadFrequently:!0});h.fillStyle="#00ffff",h.fillRect(0,0,o,c);const f=h.getImageData(0,0,o,c);if(i){h.drawImage(i,0,0,o,c);const g=n(e),v=h.getImageData(0,0,o,c).data;for(let S=2;S<v.length;S+=4)f.data[S]=g(v[S]/256)*256}if(s){h.drawImage(s,0,0,o,c);const g=n(t),v=h.getImageData(0,0,o,c).data;for(let S=1;S<v.length;S+=4)f.data[S]=g(v[S]/256)*256}h.putImageData(f,0,0);const m=(e||t).clone();return m.source=new Wr(u),m.colorSpace=ji,m.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),m}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,i,s){const o=this.json;o.bufferViews||(o.bufferViews=[]);let c;switch(t){case Tt.BYTE:case Tt.UNSIGNED_BYTE:c=1;break;case Tt.SHORT:case Tt.UNSIGNED_SHORT:c=2;break;default:c=4}let u=e.itemSize*c;s===Tt.ARRAY_BUFFER&&(u=Math.ceil(u/4)*4);const h=mx(i*u),f=new DataView(new ArrayBuffer(h));let p=0;for(let v=n;v<n+i;v++){for(let S=0;S<e.itemSize;S++){let x;e.itemSize>4?x=e.array[v*e.itemSize+S]:(S===0?x=e.getX(v):S===1?x=e.getY(v):S===2?x=e.getZ(v):S===3&&(x=e.getW(v)),e.normalized===!0&&(x=ko.normalize(x,e.array))),t===Tt.FLOAT?f.setFloat32(p,x,!0):t===Tt.INT?f.setInt32(p,x,!0):t===Tt.UNSIGNED_INT?f.setUint32(p,x,!0):t===Tt.SHORT?f.setInt16(p,x,!0):t===Tt.UNSIGNED_SHORT?f.setUint16(p,x,!0):t===Tt.BYTE?f.setInt8(p,x):t===Tt.UNSIGNED_BYTE&&f.setUint8(p,x),p+=c}p%u!==0&&(p+=u-p%u)}const m={buffer:this.processBuffer(f.buffer),byteOffset:this.byteOffset,byteLength:h};return s!==void 0&&(m.target=s),s===Tt.ARRAY_BUFFER&&(m.byteStride=u),this.byteOffset+=h,o.bufferViews.push(m),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){const s=new FileReader;s.readAsArrayBuffer(e),s.onloadend=function(){const o=jd(s.result),c={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,i(n.bufferViews.push(c)-1)}})}processAccessor(e,t,n,i){const s=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let c;if(e.array.constructor===Float32Array)c=Tt.FLOAT;else if(e.array.constructor===Int32Array)c=Tt.INT;else if(e.array.constructor===Uint32Array)c=Tt.UNSIGNED_INT;else if(e.array.constructor===Int16Array)c=Tt.SHORT;else if(e.array.constructor===Uint16Array)c=Tt.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)c=Tt.BYTE;else if(e.array.constructor===Uint8Array)c=Tt.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(i===void 0||i===1/0)&&(i=e.count),i===0)return null;const u=SC(e,n,i);let h;t!==void 0&&(h=e===t.index?Tt.ELEMENT_ARRAY_BUFFER:Tt.ARRAY_BUFFER);const f=this.processBufferView(e,c,n,i,h),p={bufferView:f.id,byteOffset:f.byteOffset,componentType:c,count:i,max:u.max,min:u.min,type:o[e.itemSize]};return e.normalized===!0&&(p.normalized=!0),s.accessors||(s.accessors=[]),s.accessors.push(p)-1}processImage(e,t,n,i="image/png"){if(e!==null){const s=this,o=s.cache,c=s.json,u=s.options,h=s.pending;o.images.has(e)||o.images.set(e,{});const f=o.images.get(e),p=i+":flipY/"+n.toString();if(f[p]!==void 0)return f[p];c.images||(c.images=[]);const m={mimeType:i},g=K0();g.width=Math.min(e.width,u.maxTextureSize),g.height=Math.min(e.height,u.maxTextureSize);const v=g.getContext("2d",{willReadFrequently:!0});if(n===!0&&(v.translate(0,g.height),v.scale(1,-1)),e.data!==void 0){t!==bn&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>u.maxTextureSize||e.height>u.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const x=new Uint8ClampedArray(e.height*e.width*4);for(let y=0;y<x.length;y+=4)x[y+0]=e.data[y+0],x[y+1]=e.data[y+1],x[y+2]=e.data[y+2],x[y+3]=e.data[y+3];v.putImageData(new ImageData(x,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)v.drawImage(e,0,0,g.width,g.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");u.binary===!0?h.push(J0(g,i).then(x=>s.processBufferViewImage(x)).then(x=>{m.bufferView=x})):g.toDataURL!==void 0?m.uri=g.toDataURL(i):h.push(J0(g,i).then(x=>new FileReader().readAsDataURL(x)).then(x=>{m.uri=x}));const S=c.images.push(m)-1;return f[p]=S,S}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:ui[e.magFilter],minFilter:ui[e.minFilter],wrapS:ui[e.wrapS],wrapT:ui[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){const n=this.options,i=this.cache,s=this.json;if(i.textures.has(e))return i.textures.get(e);s.textures||(s.textures=[]),e instanceof Ds&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let o=e.userData.mimeType;o==="image/webp"&&(o="image/png");const c={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,o)};e.name&&(c.name=e.name),await this._invokeAllAsync(async function(h){h.writeTexture&&await h.writeTexture(e,c)});const u=s.textures.push(c)-1;return i.textures.set(e,u),u}async processMaterialAsync(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const i={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const s=e.color.toArray().concat([e.opacity]);if(Ia(s,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=s),e.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=e.metalness,i.pbrMetallicRoughness.roughnessFactor=e.roughness):(i.pbrMetallicRoughness.metallicFactor=0,i.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){const c=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),u={index:await this.processTextureAsync(c),texCoord:c.channel};this.applyTextureTransform(u,c),i.pbrMetallicRoughness.metallicRoughnessTexture=u}if(e.map){const c={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(c,e.map),i.pbrMetallicRoughness.baseColorTexture=c}if(e.emissive){const c=e.emissive;if(Math.max(c.r,c.g,c.b)>0&&(i.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const h={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(h,e.emissiveMap),i.emissiveTexture=h}}if(e.normalMap){const c={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(c.scale=e.normalScale.x),this.applyTextureTransform(c,e.normalMap),i.normalTexture=c}if(e.aoMap){const c={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(c.strength=e.aoMapIntensity),this.applyTextureTransform(c,e.aoMap),i.occlusionTexture=c}e.transparent?i.alphaMode="BLEND":e.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=e.alphaTest),e.side===Ii&&(i.doubleSided=!0),e.name!==""&&(i.name=e.name),this.serializeUserData(e,i),await this._invokeAllAsync(async function(c){c.writeMaterialAsync&&await c.writeMaterialAsync(e,i)});const o=n.materials.push(i)-1;return t.materials.set(e,o),o}async processMeshAsync(e){const t=this.cache,n=this.json,i=[e.geometry.uuid];if(Array.isArray(e.material))for(let w=0,U=e.material.length;w<U;w++)i.push(e.material[w].uuid);else i.push(e.material.uuid);const s=i.join(":");if(t.meshes.has(s))return t.meshes.get(s);const o=e.geometry;let c;e.isLineSegments?c=Tt.LINES:e.isLineLoop?c=Tt.LINE_LOOP:e.isLine?c=Tt.LINE_STRIP:e.isPoints?c=Tt.POINTS:c=e.material.wireframe?Tt.LINES:Tt.TRIANGLES;const u={},h={},f=[],p=[],m={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},g=o.getAttribute("normal");g!==void 0&&!this.isNormalizedNormalAttribute(g)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(g)));let v=null;for(let w in o.attributes){if(w.slice(0,5)==="morph")continue;const U=o.attributes[w];if(w=m[w]||w.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(w)||(w="_"+w),t.attributes.has(this.getUID(U))){h[w]=t.attributes.get(this.getUID(U));continue}v=null;const L=U.array;w==="JOINTS_0"&&!(L instanceof Uint16Array)&&!(L instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),v=new Rt(new Uint16Array(L),U.itemSize,U.normalized)):(L instanceof Uint32Array||L instanceof Int32Array)&&!w.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${w}" converted to type FLOAT.`),v=ih.Utils.toFloat32BufferAttribute(U));const O=this.processAccessor(v||U,o);O!==null&&(w.startsWith("_")||this.detectMeshQuantization(w,U),h[w]=O,t.attributes.set(this.getUID(U),O))}if(g!==void 0&&o.setAttribute("normal",g),Object.keys(h).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const w=[],U=[],P={};if(e.morphTargetDictionary!==void 0)for(const L in e.morphTargetDictionary)P[e.morphTargetDictionary[L]]=L;for(let L=0;L<e.morphTargetInfluences.length;++L){const O={};let R=!1;for(const A in o.morphAttributes){if(A!=="position"&&A!=="normal"){R||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),R=!0);continue}const N=o.morphAttributes[A][L],q=A.toUpperCase(),Y=o.attributes[A];if(t.attributes.has(this.getUID(N,!0))){O[q]=t.attributes.get(this.getUID(N,!0));continue}const j=N.clone();if(!o.morphTargetsRelative)for(let te=0,J=N.count;te<J;te++)for(let de=0;de<N.itemSize;de++)de===0&&j.setX(te,N.getX(te)-Y.getX(te)),de===1&&j.setY(te,N.getY(te)-Y.getY(te)),de===2&&j.setZ(te,N.getZ(te)-Y.getZ(te)),de===3&&j.setW(te,N.getW(te)-Y.getW(te));O[q]=this.processAccessor(j,o),t.attributes.set(this.getUID(Y,!0),O[q])}p.push(O),w.push(e.morphTargetInfluences[L]),e.morphTargetDictionary!==void 0&&U.push(P[L])}u.weights=w,U.length>0&&(u.extras={},u.extras.targetNames=U)}const S=Array.isArray(e.material);if(S&&o.groups.length===0)return null;let x=!1;if(S&&o.index===null){const w=[];for(let U=0,P=o.attributes.position.count;U<P;U++)w[U]=U;o.setIndex(w),x=!0}const y=S?e.material:[e.material],E=S?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let w=0,U=E.length;w<U;w++){const P={mode:c,attributes:h};if(this.serializeUserData(o,P),p.length>0&&(P.targets=p),o.index!==null){let O=this.getUID(o.index);(E[w].start!==void 0||E[w].count!==void 0)&&(O+=":"+E[w].start+":"+E[w].count),t.attributes.has(O)?P.indices=t.attributes.get(O):(P.indices=this.processAccessor(o.index,o,E[w].start,E[w].count),t.attributes.set(O,P.indices)),P.indices===null&&delete P.indices}const L=await this.processMaterialAsync(y[E[w].materialIndex]);L!==null&&(P.material=L),f.push(P)}x===!0&&o.setIndex(null),u.primitives=f,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(w){w.writeMesh&&w.writeMesh(e,u)});const T=n.meshes.push(u)-1;return t.meshes.set(s,T),T}detectMeshQuantization(e,t){if(this.extensionsUsed[Zd])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");const i=e.split("_",1)[0];Y0[i]&&Y0[i].includes(n)&&(this.extensionsUsed[Zd]=!0,this.extensionsRequired[Zd]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:i.perspective={aspectRatio:e.aspect,yfov:ko.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(i.name=e.type),t.cameras.push(i)-1}processAnimation(e,t){const n=this.json,i=this.nodeMap;n.animations||(n.animations=[]),e=ih.Utils.mergeMorphTargetTracks(e.clone(),t);const s=e.tracks,o=[],c=[];for(let u=0;u<s.length;++u){const h=s[u],f=bt.parseTrackName(h.name);let p=bt.findNode(t,f.nodeName);const m=q0[f.propertyName];if(f.objectName==="bones"&&(p.isSkinnedMesh===!0?p=p.skeleton.getBoneByName(f.objectIndex):p=void 0),!p||!m){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',h.name);continue}const g=1;let v=h.values.length/h.times.length;m===q0.morphTargetInfluences&&(v/=p.morphTargetInfluences.length);let S;h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(S="CUBICSPLINE",v/=3):h.getInterpolation()===Bo?S="STEP":S="LINEAR",c.push({input:this.processAccessor(new Rt(h.times,g)),output:this.processAccessor(new Rt(h.values,v)),interpolation:S}),o.push({sampler:c.length-1,target:{node:i.get(p),path:m}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:c,channels:o}),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,i=t.nodes[n.get(e)],s=e.skeleton;if(s===void 0)return null;const o=e.skeleton.bones[0];if(o===void 0)return null;const c=[],u=new Float32Array(s.bones.length*16),h=new et;for(let p=0;p<s.bones.length;++p)c.push(n.get(s.bones[p])),h.copy(s.boneInverses[p]),h.multiply(e.bindMatrix).toArray(u,p*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new Rt(u,16)),joints:c,skeleton:n.get(o)}),i.skin=t.skins.length-1}async processNodeAsync(e){const t=this.json,n=this.options,i=this.nodeMap;t.nodes||(t.nodes=[]);const s={};if(n.trs){const c=e.quaternion.toArray(),u=e.position.toArray(),h=e.scale.toArray();Ia(c,[0,0,0,1])||(s.rotation=c),Ia(u,[0,0,0])||(s.translation=u),Ia(h,[1,1,1])||(s.scale=h)}else e.matrixAutoUpdate&&e.updateMatrix(),MC(e.matrix)===!1&&(s.matrix=e.matrix.elements);if(e.name!==""&&(s.name=String(e.name)),this.serializeUserData(e,s),e.isMesh||e.isLine||e.isPoints){const c=await this.processMeshAsync(e);c!==null&&(s.mesh=c)}else e.isCamera&&(s.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const c=[];for(let u=0,h=e.children.length;u<h;u++){const f=e.children[u];if(f.visible||n.onlyVisible===!1){const p=await this.processNodeAsync(f);p!==null&&c.push(p)}}c.length>0&&(s.children=c)}await this._invokeAllAsync(function(c){c.writeNode&&c.writeNode(e,s)});const o=t.nodes.push(s)-1;return i.set(e,o),o}async processSceneAsync(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const i={};e.name!==""&&(i.name=e.name),t.scenes.push(i);const s=[];for(let o=0,c=e.children.length;o<c;o++){const u=e.children[o];if(u.visible||n.onlyVisible===!1){const h=await this.processNodeAsync(u);h!==null&&s.push(h)}}s.length>0&&(i.nodes=s),this.serializeUserData(e,i)}async processObjectsAsync(e){const t=new Za;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){const t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(i){i.beforeParse&&i.beforeParse(e)});const n=[];for(let i=0;i<e.length;i++)e[i]instanceof Za?await this.processSceneAsync(e[i]):n.push(e[i]);n.length>0&&await this.processObjectsAsync(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<t.animations.length;++i)this.processAnimation(t.animations[i],e[0]);await this._invokeAllAsync(function(i){i.afterParse&&i.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}}class EC{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,i=n.json,s=n.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),s[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},s[this.name]=!0);const c=i.extensions[this.name].lights;c.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:c.length-1}}}class TC{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;const i=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},i[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class bC{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const n=this.writer,i=n.extensionsUsed,s={};if(s.clearcoatFactor=e.clearcoat,e.clearcoatMap){const o={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(o,e.clearcoatMap),s.clearcoatTexture=o}if(s.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const o={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,e.clearcoatRoughnessMap),s.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){const o={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(o.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(o,e.clearcoatNormalMap),s.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class AC{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const i=this.writer.extensionsUsed,s={};s.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class RC{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const n=this.writer,i=n.extensionsUsed,s={};if(s.iridescenceFactor=e.iridescence,e.iridescenceMap){const o={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(o,e.iridescenceMap),s.iridescenceTexture=o}if(s.iridescenceIor=e.iridescenceIOR,s.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],s.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const o={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(o,e.iridescenceThicknessMap),s.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class CC{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,s={};if(s.transmissionFactor=e.transmission,e.transmissionMap){const o={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(o,e.transmissionMap),s.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class PC{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,s={};if(s.thicknessFactor=e.thickness,e.thicknessMap){const o={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(o,e.thicknessMap),s.thicknessTexture=o}e.attenuationDistance!==1/0&&(s.attenuationDistance=e.attenuationDistance),s.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class IC{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const i=this.writer.extensionsUsed,s={};s.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class LC{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(mC)&&!e.specularIntensityMap&&!e.specularColorMap)return;const n=this.writer,i=n.extensionsUsed,s={};if(e.specularIntensityMap){const o={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(o,e.specularIntensityMap),s.specularTexture=o}if(e.specularColorMap){const o={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(o,e.specularColorMap),s.specularColorTexture=o}s.specularFactor=e.specularIntensity,s.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class DC{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const n=this.writer,i=n.extensionsUsed,s={};if(e.sheenRoughnessMap){const o={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(o,e.sheenRoughnessMap),s.sheenRoughnessTexture=o}if(e.sheenColorMap){const o={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(o,e.sheenColorMap),s.sheenColorTexture=o}s.sheenRoughnessFactor=e.sheenRoughness,s.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class UC{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const n=this.writer,i=n.extensionsUsed,s={};if(e.anisotropyMap){const o={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(o,e.anisotropyMap),s.anisotropyTexture=o}s.anisotropyStrength=e.anisotropy,s.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class NC{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const i=this.writer.extensionsUsed,s={};s.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class OC{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const n=this.writer,i=n.extensionsUsed,s={};if(e.bumpMap){const o={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(o,e.bumpMap),s.bumpTexture=o}s.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class FC{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const n=this.writer,i=e,s=new Float32Array(i.count*3),o=new Float32Array(i.count*4),c=new Float32Array(i.count*3),u=new et,h=new D,f=new An,p=new D;for(let g=0;g<i.count;g++)i.getMatrixAt(g,u),u.decompose(h,f,p),h.toArray(s,g*3),f.toArray(o,g*4),p.toArray(c,g*3);const m={TRANSLATION:n.processAccessor(new Rt(s,3)),ROTATION:n.processAccessor(new Rt(o,4)),SCALE:n.processAccessor(new Rt(c,3))};i.instanceColor&&(m._COLOR_0=n.processAccessor(i.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:m},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}ih.Utils={insertKeyframe:function(r,e){const n=r.getValueSize(),i=new r.TimeBufferType(r.times.length+1),s=new r.ValueBufferType(r.values.length+n),o=r.createInterpolant(new r.ValueBufferType(n));let c;if(r.times.length===0){i[0]=e;for(let u=0;u<n;u++)s[u]=0;c=0}else if(e<r.times[0]){if(Math.abs(r.times[0]-e)<.001)return 0;i[0]=e,i.set(r.times,1),s.set(o.evaluate(e),0),s.set(r.values,n),c=0}else if(e>r.times[r.times.length-1]){if(Math.abs(r.times[r.times.length-1]-e)<.001)return r.times.length-1;i[i.length-1]=e,i.set(r.times,0),s.set(r.values,0),s.set(o.evaluate(e),r.values.length),c=i.length-1}else for(let u=0;u<r.times.length;u++){if(Math.abs(r.times[u]-e)<.001)return u;if(r.times[u]<e&&r.times[u+1]>e){i.set(r.times.slice(0,u+1),0),i[u+1]=e,i.set(r.times.slice(u+1),u+2),s.set(r.values.slice(0,(u+1)*n),0),s.set(o.evaluate(e),(u+1)*n),s.set(r.values.slice((u+1)*n),(u+2)*n),c=u+1;break}}return r.times=i,r.values=s,c},mergeMorphTargetTracks:function(r,e){const t=[],n={},i=r.tracks;for(let s=0;s<i.length;++s){let o=i[s];const c=bt.parseTrackName(o.name),u=bt.findNode(e,c.nodeName);if(c.propertyName!=="morphTargetInfluences"||c.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(Ga)}const h=u.morphTargetInfluences.length,f=u.morphTargetDictionary[c.propertyIndex];if(f===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+c.propertyIndex);let p;if(n[u.uuid]===void 0){p=o.clone();const g=new p.ValueBufferType(h*p.times.length);for(let v=0;v<p.times.length;v++)g[v*h+f]=p.values[v];p.name=(c.nodeName||"")+".morphTargetInfluences",p.values=g,n[u.uuid]=p,t.push(p);continue}const m=o.createInterpolant(new o.ValueBufferType(1));p=n[u.uuid];for(let g=0;g<p.times.length;g++)p.values[g*h+f]=m.evaluate(p.times[g]);for(let g=0;g<o.times.length;g++){const v=this.insertKeyframe(p,o.times[g]);p.values[v*h+f]=o.values[g]}}return r.tracks=t,r},toFloat32BufferAttribute:function(r){const e=new Rt(new Float32Array(r.count*r.itemSize),r.itemSize,!1);if(!r.normalized&&!r.isInterleavedBufferAttribute)return e.array.set(r.array),e;for(let t=0,n=r.count;t<n;t++)for(let i=0;i<r.itemSize;i++)e.setComponent(t,i,r.getComponent(t,i));return e}};const YC=Object.freeze(Object.defineProperty({__proto__:null,GLTFExporter:ih},Symbol.toStringTag,{value:"Module"}));export{Jd as A,_t as B,Lb as C,Ii as D,Mh as E,YC as G,on as L,ko as M,XC as O,mr as P,An as Q,Np as S,Uh as T,D as V,VC as a,li as b,Rt as c,fi as d,Ne as e,Wn as f,Xn as g,Zr as h,Yr as i,dl as j,Vs as k,et as l,fv as m,$R as n,QR as o,WC as p,Vp as q,GC as r,mp as s,La as t,HC as u,Hn as v};
