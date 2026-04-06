import"./three-Threejs-DqdeAVsp.js";import{C as Ie,M as ae,V as L,Q as _e,a as J,l as Re,b as ce,S as Se,m as j,L as Le}from"./three-math-CUfZG_iw.js";import{a as F,c as Ue,b as ue,d as re,i as P}from"./three-core-BfLkNVRA.js";import{R as Ne,aM as Ce,b3 as ze,D as Oe,a8 as Fe,S as Be,aC as De,aG as Pe,aF as Ge,L as He,am as ke,al as Ve,C as je,bG as We,ay as Ye,a9 as Ke}from"./three-constantsjs-DDkumpQT.js";import{c as $,S as qe}from"./three-textures-Cl9vYoVc.js";import{P as Z}from"./three-animation-DIkq6vRc.js";import{S as fe}from"./three-scenes-Cs29qdMA.js";import{W as Xe}from"./three-geometries-DOArPI8E.js";import{l as Je}from"./three-materials-D7LfanzJ.js";import{a as q,b as Ee,U as X}from"./three-renderers-26UNfH0W.js";import{M as Ze}from"./three-objects-_hqkUX5F.js";const de={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class oe{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new at(e)}),this.register(function(e){return new ct(e)}),this.register(function(e){return new dt(e)}),this.register(function(e){return new ht(e)}),this.register(function(e){return new pt(e)}),this.register(function(e){return new mt(e)}),this.register(function(e){return new lt(e)}),this.register(function(e){return new ut(e)}),this.register(function(e){return new ft(e)}),this.register(function(e){return new xt(e)}),this.register(function(e){return new yt(e)}),this.register(function(e){return new gt(e)}),this.register(function(e){return new wt(e)}),this.register(function(e){return new Tt(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,s){const i=new ot,r=[];for(let o=0,c=this.pluginCallbacks.length;o<c;o++)r.push(this.pluginCallbacks[o](i));i.setPlugins(r),i.setTextureUtils(this.textureUtils),i.writeAsync(e,t,s).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(s,i){n.parse(e,s,i,t)})}}const g={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},ee="KHR_mesh_quantization",R={};R[De]=g.NEAREST;R[Pe]=g.NEAREST_MIPMAP_NEAREST;R[Ge]=g.NEAREST_MIPMAP_LINEAR;R[He]=g.LINEAR;R[ke]=g.LINEAR_MIPMAP_NEAREST;R[Ve]=g.LINEAR_MIPMAP_LINEAR;R[je]=g.CLAMP_TO_EDGE;R[We]=g.REPEAT;R[Ye]=g.MIRRORED_REPEAT;const he={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},Qe=new Ie,pe=12,$e=1179937895,et=2,me=8,tt=1313821514,st=5130562;function V(a,e){return a.length===e.length&&a.every(function(t,n){return t===e[n]})}function nt(a){return new TextEncoder().encode(a).buffer}function it(a){return V(a.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function rt(a,e,t){const n={min:new Array(a.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(a.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=e;s<e+t;s++)for(let i=0;i<a.itemSize;i++){let r;a.itemSize>4?r=a.array[s*a.itemSize+i]:(i===0?r=a.getX(s):i===1?r=a.getY(s):i===2?r=a.getZ(s):i===3&&(r=a.getW(s)),a.normalized===!0&&(r=J.normalize(r,a.array))),n.min[i]=Math.min(n.min[i],r),n.max[i]=Math.max(n.max[i],r)}return n}function ve(a){return Math.ceil(a/4)*4}function te(a,e=0){const t=ve(a.byteLength);if(t!==a.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(a)),e!==0)for(let s=a.byteLength;s<t;s++)n[s]=e;return n.buffer}return a}function xe(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function ye(a,e){if(a.toBlob!==void 0)return new Promise(n=>a.toBlob(n,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),a.convertToBlob({type:e,quality:t})}class ot{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+Ne}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);const s=this,i=s.buffers,r=s.json;n=s.options;const o=s.extensionsUsed,c=s.extensionsRequired,u=new Blob(i,{type:"application/octet-stream"}),f=Object.keys(o),l=Object.keys(c);if(f.length>0&&(r.extensionsUsed=f),l.length>0&&(r.extensionsRequired=l),r.buffers&&r.buffers.length>0&&(r.buffers[0].byteLength=u.size),n.binary===!0){const x=new FileReader;x.readAsArrayBuffer(u),x.onloadend=function(){const d=te(x.result),m=new DataView(new ArrayBuffer(me));m.setUint32(0,d.byteLength,!0),m.setUint32(4,st,!0);const p=te(nt(JSON.stringify(r)),32),y=new DataView(new ArrayBuffer(me));y.setUint32(0,p.byteLength,!0),y.setUint32(4,tt,!0);const T=new ArrayBuffer(pe),b=new DataView(T);b.setUint32(0,$e,!0),b.setUint32(4,et,!0);const U=pe+y.byteLength+p.byteLength+m.byteLength+d.byteLength;b.setUint32(8,U,!0);const h=new Blob([T,y,p,m,d],{type:"application/octet-stream"}),w=new FileReader;w.readAsArrayBuffer(h),w.onloadend=function(){t(w.result)}}}else if(r.buffers&&r.buffers.length>0){const x=new FileReader;x.readAsDataURL(u),x.onloadend=function(){const d=x.result;r.buffers[0].uri=d,t(r)}}else t(r)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,s=this.extensionsUsed;try{const i=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&i.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const r in i.gltfExtensions)t.extensions[r]=i.gltfExtensions[r],s[r]=!0;delete i.gltfExtensions}Object.keys(i).length>0&&(t.extras=i)}catch(i){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+i.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(e,s)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const n=new L;for(let s=0,i=e.count;s<i;s++)if(Math.abs(n.fromBufferAttribute(e,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),s=new L;for(let i=0,r=n.count;i<r;i++)s.fromBufferAttribute(n,i),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(i,s.x,s.y,s.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const s={};(t.offset.x!==0||t.offset.y!==0)&&(s.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(s.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(s.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(d){return d.colorSpace===Be?function(p){return p<.04045?p*.0773993808:Math.pow(p*.9478672986+.0521327014,2.4)}:function(p){return p}}e instanceof $&&(e=await this.decompressTextureAsync(e)),t instanceof $&&(t=await this.decompressTextureAsync(t));const s=e?e.image:null,i=t?t.image:null,r=Math.max(s?s.width:0,i?i.width:0),o=Math.max(s?s.height:0,i?i.height:0),c=xe();c.width=r,c.height=o;const u=c.getContext("2d",{willReadFrequently:!0});u.fillStyle="#00ffff",u.fillRect(0,0,r,o);const f=u.getImageData(0,0,r,o);if(s){u.drawImage(s,0,0,r,o);const d=n(e),m=u.getImageData(0,0,r,o).data;for(let p=2;p<m.length;p+=4)f.data[p]=d(m[p]/256)*256}if(i){u.drawImage(i,0,0,r,o);const d=n(t),m=u.getImageData(0,0,r,o).data;for(let p=1;p<m.length;p+=4)f.data[p]=d(m[p]/256)*256}u.putImageData(f,0,0);const x=(e||t).clone();return x.source=new qe(c),x.colorSpace=Ce,x.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),x}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,s,i){const r=this.json;r.bufferViews||(r.bufferViews=[]);let o;switch(t){case g.BYTE:case g.UNSIGNED_BYTE:o=1;break;case g.SHORT:case g.UNSIGNED_SHORT:o=2;break;default:o=4}let c=e.itemSize*o;i===g.ARRAY_BUFFER&&(c=Math.ceil(c/4)*4);const u=ve(s*c),f=new DataView(new ArrayBuffer(u));let l=0;for(let m=n;m<n+s;m++){for(let p=0;p<e.itemSize;p++){let y;e.itemSize>4?y=e.array[m*e.itemSize+p]:(p===0?y=e.getX(m):p===1?y=e.getY(m):p===2?y=e.getZ(m):p===3&&(y=e.getW(m)),e.normalized===!0&&(y=J.normalize(y,e.array))),t===g.FLOAT?f.setFloat32(l,y,!0):t===g.INT?f.setInt32(l,y,!0):t===g.UNSIGNED_INT?f.setUint32(l,y,!0):t===g.SHORT?f.setInt16(l,y,!0):t===g.UNSIGNED_SHORT?f.setUint16(l,y,!0):t===g.BYTE?f.setInt8(l,y):t===g.UNSIGNED_BYTE&&f.setUint8(l,y),l+=o}l%c!==0&&(l+=c-l%c)}const x={buffer:this.processBuffer(f.buffer),byteOffset:this.byteOffset,byteLength:u};return i!==void 0&&(x.target=i),i===g.ARRAY_BUFFER&&(x.byteStride=c),this.byteOffset+=u,r.bufferViews.push(x),{id:r.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){const i=new FileReader;i.readAsArrayBuffer(e),i.onloadend=function(){const r=te(i.result),o={buffer:t.processBuffer(r),byteOffset:t.byteOffset,byteLength:r.byteLength};t.byteOffset+=r.byteLength,s(n.bufferViews.push(o)-1)}})}processAccessor(e,t,n,s){const i=this.json,r={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let o;if(e.array.constructor===Float32Array)o=g.FLOAT;else if(e.array.constructor===Int32Array)o=g.INT;else if(e.array.constructor===Uint32Array)o=g.UNSIGNED_INT;else if(e.array.constructor===Int16Array)o=g.SHORT;else if(e.array.constructor===Uint16Array)o=g.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)o=g.BYTE;else if(e.array.constructor===Uint8Array)o=g.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=e.count),s===0)return null;const c=rt(e,n,s);let u;t!==void 0&&(u=e===t.index?g.ELEMENT_ARRAY_BUFFER:g.ARRAY_BUFFER);const f=this.processBufferView(e,o,n,s,u),l={bufferView:f.id,byteOffset:f.byteOffset,componentType:o,count:s,max:c.max,min:c.min,type:r[e.itemSize]};return e.normalized===!0&&(l.normalized=!0),i.accessors||(i.accessors=[]),i.accessors.push(l)-1}processImage(e,t,n,s="image/png"){if(e!==null){const i=this,r=i.cache,o=i.json,c=i.options,u=i.pending;r.images.has(e)||r.images.set(e,{});const f=r.images.get(e),l=s+":flipY/"+n.toString();if(f[l]!==void 0)return f[l];o.images||(o.images=[]);const x={mimeType:s},d=xe();d.width=Math.min(e.width,c.maxTextureSize),d.height=Math.min(e.height,c.maxTextureSize);const m=d.getContext("2d",{willReadFrequently:!0});if(n===!0&&(m.translate(0,d.height),m.scale(1,-1)),e.data!==void 0){t!==ze&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>c.maxTextureSize||e.height>c.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const y=new Uint8ClampedArray(e.height*e.width*4);for(let T=0;T<y.length;T+=4)y[T+0]=e.data[T+0],y[T+1]=e.data[T+1],y[T+2]=e.data[T+2],y[T+3]=e.data[T+3];m.putImageData(new ImageData(y,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)m.drawImage(e,0,0,d.width,d.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");c.binary===!0?u.push(ye(d,s).then(y=>i.processBufferViewImage(y)).then(y=>{x.bufferView=y})):d.toDataURL!==void 0?x.uri=d.toDataURL(s):u.push(ye(d,s).then(y=>new FileReader().readAsDataURL(y)).then(y=>{x.uri=y}));const p=o.images.push(x)-1;return f[l]=p,p}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:R[e.magFilter],minFilter:R[e.minFilter],wrapS:R[e.wrapS],wrapT:R[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){const n=this.options,s=this.cache,i=this.json;if(s.textures.has(e))return s.textures.get(e);i.textures||(i.textures=[]),e instanceof $&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let r=e.userData.mimeType;r==="image/webp"&&(r="image/png");const o={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,r)};e.name&&(o.name=e.name),await this._invokeAllAsync(async function(u){u.writeTexture&&await u.writeTexture(e,o)});const c=i.textures.push(o)-1;return s.textures.set(e,c),c}async processMaterialAsync(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const s={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const i=e.color.toArray().concat([e.opacity]);if(V(i,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=i),e.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=e.metalness,s.pbrMetallicRoughness.roughnessFactor=e.roughness):(s.pbrMetallicRoughness.metallicFactor=0,s.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){const o=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),c={index:await this.processTextureAsync(o),texCoord:o.channel};this.applyTextureTransform(c,o),s.pbrMetallicRoughness.metallicRoughnessTexture=c}if(e.map){const o={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(o,e.map),s.pbrMetallicRoughness.baseColorTexture=o}if(e.emissive){const o=e.emissive;if(Math.max(o.r,o.g,o.b)>0&&(s.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const u={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(u,e.emissiveMap),s.emissiveTexture=u}}if(e.normalMap){const o={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(o.scale=e.normalScale.x),this.applyTextureTransform(o,e.normalMap),s.normalTexture=o}if(e.aoMap){const o={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(o.strength=e.aoMapIntensity),this.applyTextureTransform(o,e.aoMap),s.occlusionTexture=o}e.transparent?s.alphaMode="BLEND":e.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=e.alphaTest),e.side===Oe&&(s.doubleSided=!0),e.name!==""&&(s.name=e.name),this.serializeUserData(e,s),await this._invokeAllAsync(async function(o){o.writeMaterialAsync&&await o.writeMaterialAsync(e,s)});const r=n.materials.push(s)-1;return t.materials.set(e,r),r}async processMeshAsync(e){const t=this.cache,n=this.json,s=[e.geometry.uuid];if(Array.isArray(e.material))for(let h=0,w=e.material.length;h<w;h++)s.push(e.material[h].uuid);else s.push(e.material.uuid);const i=s.join(":");if(t.meshes.has(i))return t.meshes.get(i);const r=e.geometry;let o;e.isLineSegments?o=g.LINES:e.isLineLoop?o=g.LINE_LOOP:e.isLine?o=g.LINE_STRIP:e.isPoints?o=g.POINTS:o=e.material.wireframe?g.LINES:g.TRIANGLES;const c={},u={},f=[],l=[],x={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},d=r.getAttribute("normal");d!==void 0&&!this.isNormalizedNormalAttribute(d)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),r.setAttribute("normal",this.createNormalizedNormalAttribute(d)));let m=null;for(let h in r.attributes){if(h.slice(0,5)==="morph")continue;const w=r.attributes[h];if(h=x[h]||h.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(h)||(h="_"+h),t.attributes.has(this.getUID(w))){u[h]=t.attributes.get(this.getUID(w));continue}m=null;const M=w.array;h==="JOINTS_0"&&!(M instanceof Uint16Array)&&!(M instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),m=new F(new Uint16Array(M),w.itemSize,w.normalized)):(M instanceof Uint32Array||M instanceof Int32Array)&&!h.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${h}" converted to type FLOAT.`),m=oe.Utils.toFloat32BufferAttribute(w));const _=this.processAccessor(m||w,r);_!==null&&(h.startsWith("_")||this.detectMeshQuantization(h,w),u[h]=_,t.attributes.set(this.getUID(w),_))}if(d!==void 0&&r.setAttribute("normal",d),Object.keys(u).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const h=[],w=[],v={};if(e.morphTargetDictionary!==void 0)for(const M in e.morphTargetDictionary)v[e.morphTargetDictionary[M]]=M;for(let M=0;M<e.morphTargetInfluences.length;++M){const _={};let le=!1;for(const G in r.morphAttributes){if(G!=="position"&&G!=="normal"){le||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),le=!0);continue}const O=r.morphAttributes[G][M],Q=G.toUpperCase(),H=r.attributes[G];if(t.attributes.has(this.getUID(O,!0))){_[Q]=t.attributes.get(this.getUID(O,!0));continue}const k=O.clone();if(!r.morphTargetsRelative)for(let I=0,be=O.count;I<be;I++)for(let D=0;D<O.itemSize;D++)D===0&&k.setX(I,O.getX(I)-H.getX(I)),D===1&&k.setY(I,O.getY(I)-H.getY(I)),D===2&&k.setZ(I,O.getZ(I)-H.getZ(I)),D===3&&k.setW(I,O.getW(I)-H.getW(I));_[Q]=this.processAccessor(k,r),t.attributes.set(this.getUID(H,!0),_[Q])}l.push(_),h.push(e.morphTargetInfluences[M]),e.morphTargetDictionary!==void 0&&w.push(v[M])}c.weights=h,w.length>0&&(c.extras={},c.extras.targetNames=w)}const p=Array.isArray(e.material);if(p&&r.groups.length===0)return null;let y=!1;if(p&&r.index===null){const h=[];for(let w=0,v=r.attributes.position.count;w<v;w++)h[w]=w;r.setIndex(h),y=!0}const T=p?e.material:[e.material],b=p?r.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let h=0,w=b.length;h<w;h++){const v={mode:o,attributes:u};if(this.serializeUserData(r,v),l.length>0&&(v.targets=l),r.index!==null){let _=this.getUID(r.index);(b[h].start!==void 0||b[h].count!==void 0)&&(_+=":"+b[h].start+":"+b[h].count),t.attributes.has(_)?v.indices=t.attributes.get(_):(v.indices=this.processAccessor(r.index,r,b[h].start,b[h].count),t.attributes.set(_,v.indices)),v.indices===null&&delete v.indices}const M=await this.processMaterialAsync(T[b[h].materialIndex]);M!==null&&(v.material=M),f.push(v)}y===!0&&r.setIndex(null),c.primitives=f,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(h){h.writeMesh&&h.writeMesh(e,c)});const U=n.meshes.push(c)-1;return t.meshes.set(i,U),U}detectMeshQuantization(e,t){if(this.extensionsUsed[ee])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");const s=e.split("_",1)[0];de[s]&&de[s].includes(n)&&(this.extensionsUsed[ee]=!0,this.extensionsRequired[ee]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:s.perspective={aspectRatio:e.aspect,yfov:J.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(s.name=e.type),t.cameras.push(s)-1}processAnimation(e,t){const n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),e=oe.Utils.mergeMorphTargetTracks(e.clone(),t);const i=e.tracks,r=[],o=[];for(let c=0;c<i.length;++c){const u=i[c],f=Z.parseTrackName(u.name);let l=Z.findNode(t,f.nodeName);const x=he[f.propertyName];if(f.objectName==="bones"&&(l.isSkinnedMesh===!0?l=l.skeleton.getBoneByName(f.objectIndex):l=void 0),!l||!x){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',u.name);continue}const d=1;let m=u.values.length/u.times.length;x===he.morphTargetInfluences&&(m/=l.morphTargetInfluences.length);let p;u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(p="CUBICSPLINE",m/=3):u.getInterpolation()===Fe?p="STEP":p="LINEAR",o.push({input:this.processAccessor(new F(u.times,d)),output:this.processAccessor(new F(u.values,m)),interpolation:p}),r.push({sampler:o.length-1,target:{node:s.get(l),path:x}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:o,channels:r}),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,s=t.nodes[n.get(e)],i=e.skeleton;if(i===void 0)return null;const r=e.skeleton.bones[0];if(r===void 0)return null;const o=[],c=new Float32Array(i.bones.length*16),u=new ae;for(let l=0;l<i.bones.length;++l)o.push(n.get(i.bones[l])),u.copy(i.boneInverses[l]),u.multiply(e.bindMatrix).toArray(c,l*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new F(c,16)),joints:o,skeleton:n.get(r)}),s.skin=t.skins.length-1}async processNodeAsync(e){const t=this.json,n=this.options,s=this.nodeMap;t.nodes||(t.nodes=[]);const i={};if(n.trs){const o=e.quaternion.toArray(),c=e.position.toArray(),u=e.scale.toArray();V(o,[0,0,0,1])||(i.rotation=o),V(c,[0,0,0])||(i.translation=c),V(u,[1,1,1])||(i.scale=u)}else e.matrixAutoUpdate&&e.updateMatrix(),it(e.matrix)===!1&&(i.matrix=e.matrix.elements);if(e.name!==""&&(i.name=String(e.name)),this.serializeUserData(e,i),e.isMesh||e.isLine||e.isPoints){const o=await this.processMeshAsync(e);o!==null&&(i.mesh=o)}else e.isCamera&&(i.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const o=[];for(let c=0,u=e.children.length;c<u;c++){const f=e.children[c];if(f.visible||n.onlyVisible===!1){const l=await this.processNodeAsync(f);l!==null&&o.push(l)}}o.length>0&&(i.children=o)}await this._invokeAllAsync(function(o){o.writeNode&&o.writeNode(e,i)});const r=t.nodes.push(i)-1;return s.set(e,r),r}async processSceneAsync(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const s={};e.name!==""&&(s.name=e.name),t.scenes.push(s);const i=[];for(let r=0,o=e.children.length;r<o;r++){const c=e.children[r];if(c.visible||n.onlyVisible===!1){const u=await this.processNodeAsync(c);u!==null&&i.push(u)}}i.length>0&&(s.nodes=i),this.serializeUserData(e,s)}async processObjectsAsync(e){const t=new fe;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){const t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(e)});const n=[];for(let s=0;s<e.length;s++)e[s]instanceof fe?await this.processSceneAsync(e[s]):n.push(e[s]);n.length>0&&await this.processObjectsAsync(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<t.animations.length;++s)this.processAnimation(t.animations[s],e[0]);await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}}class at{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,s=n.json,i=n.extensionsUsed,r={};e.name&&(r.name=e.name),r.color=e.color.toArray(),r.intensity=e.intensity,e.isDirectionalLight?r.type="directional":e.isPointLight?(r.type="point",e.distance>0&&(r.range=e.distance)):e.isSpotLight&&(r.type="spot",e.distance>0&&(r.range=e.distance),r.spot={},r.spot.innerConeAngle=(1-e.penumbra)*e.angle,r.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),i[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},i[this.name]=!0);const o=s.extensions[this.name].lights;o.push(r),t.extensions=t.extensions||{},t.extensions[this.name]={light:o.length-1}}}class ct{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;const s=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},s[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class lt{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const n=this.writer,s=n.extensionsUsed,i={};if(i.clearcoatFactor=e.clearcoat,e.clearcoatMap){const r={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(r,e.clearcoatMap),i.clearcoatTexture=r}if(i.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const r={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(r,e.clearcoatRoughnessMap),i.clearcoatRoughnessTexture=r}if(e.clearcoatNormalMap){const r={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(r.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(r,e.clearcoatNormalMap),i.clearcoatNormalTexture=r}t.extensions=t.extensions||{},t.extensions[this.name]=i,s[this.name]=!0}}class ut{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const s=this.writer.extensionsUsed,i={};i.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=i,s[this.name]=!0}}class ft{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const n=this.writer,s=n.extensionsUsed,i={};if(i.iridescenceFactor=e.iridescence,e.iridescenceMap){const r={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(r,e.iridescenceMap),i.iridescenceTexture=r}if(i.iridescenceIor=e.iridescenceIOR,i.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],i.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const r={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(r,e.iridescenceThicknessMap),i.iridescenceThicknessTexture=r}t.extensions=t.extensions||{},t.extensions[this.name]=i,s[this.name]=!0}}class dt{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,s=n.extensionsUsed,i={};if(i.transmissionFactor=e.transmission,e.transmissionMap){const r={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(r,e.transmissionMap),i.transmissionTexture=r}t.extensions=t.extensions||{},t.extensions[this.name]=i,s[this.name]=!0}}class ht{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,s=n.extensionsUsed,i={};if(i.thicknessFactor=e.thickness,e.thicknessMap){const r={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(r,e.thicknessMap),i.thicknessTexture=r}e.attenuationDistance!==1/0&&(i.attenuationDistance=e.attenuationDistance),i.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=i,s[this.name]=!0}}class pt{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const s=this.writer.extensionsUsed,i={};i.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=i,s[this.name]=!0}}class mt{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(Qe)&&!e.specularIntensityMap&&!e.specularColorMap)return;const n=this.writer,s=n.extensionsUsed,i={};if(e.specularIntensityMap){const r={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(r,e.specularIntensityMap),i.specularTexture=r}if(e.specularColorMap){const r={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(r,e.specularColorMap),i.specularColorTexture=r}i.specularFactor=e.specularIntensity,i.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=i,s[this.name]=!0}}class xt{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const n=this.writer,s=n.extensionsUsed,i={};if(e.sheenRoughnessMap){const r={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(r,e.sheenRoughnessMap),i.sheenRoughnessTexture=r}if(e.sheenColorMap){const r={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(r,e.sheenColorMap),i.sheenColorTexture=r}i.sheenRoughnessFactor=e.sheenRoughness,i.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=i,s[this.name]=!0}}class yt{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const n=this.writer,s=n.extensionsUsed,i={};if(e.anisotropyMap){const r={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(r,e.anisotropyMap),i.anisotropyTexture=r}i.anisotropyStrength=e.anisotropy,i.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=i,s[this.name]=!0}}class gt{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const s=this.writer.extensionsUsed,i={};i.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=i,s[this.name]=!0}}class wt{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const n=this.writer,s=n.extensionsUsed,i={};if(e.bumpMap){const r={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(r,e.bumpMap),i.bumpTexture=r}i.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=i,s[this.name]=!0}}class Tt{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const n=this.writer,s=e,i=new Float32Array(s.count*3),r=new Float32Array(s.count*4),o=new Float32Array(s.count*3),c=new ae,u=new L,f=new _e,l=new L;for(let d=0;d<s.count;d++)s.getMatrixAt(d,c),c.decompose(u,f,l),u.toArray(i,d*3),f.toArray(r,d*4),l.toArray(o,d*3);const x={TRANSLATION:n.processAccessor(new F(i,3)),ROTATION:n.processAccessor(new F(r,4)),SCALE:n.processAccessor(new F(o,3))};s.instanceColor&&(x._COLOR_0=n.processAccessor(s.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:x},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}oe.Utils={insertKeyframe:function(a,e){const n=a.getValueSize(),s=new a.TimeBufferType(a.times.length+1),i=new a.ValueBufferType(a.values.length+n),r=a.createInterpolant(new a.ValueBufferType(n));let o;if(a.times.length===0){s[0]=e;for(let c=0;c<n;c++)i[c]=0;o=0}else if(e<a.times[0]){if(Math.abs(a.times[0]-e)<.001)return 0;s[0]=e,s.set(a.times,1),i.set(r.evaluate(e),0),i.set(a.values,n),o=0}else if(e>a.times[a.times.length-1]){if(Math.abs(a.times[a.times.length-1]-e)<.001)return a.times.length-1;s[s.length-1]=e,s.set(a.times,0),i.set(a.values,0),i.set(r.evaluate(e),a.values.length),o=s.length-1}else for(let c=0;c<a.times.length;c++){if(Math.abs(a.times[c]-e)<.001)return c;if(a.times[c]<e&&a.times[c+1]>e){s.set(a.times.slice(0,c+1),0),s[c+1]=e,s.set(a.times.slice(c+1),c+2),i.set(a.values.slice(0,(c+1)*n),0),i.set(r.evaluate(e),(c+1)*n),i.set(a.values.slice((c+1)*n),(c+2)*n),o=c+1;break}}return a.times=s,a.values=i,o},mergeMorphTargetTracks:function(a,e){const t=[],n={},s=a.tracks;for(let i=0;i<s.length;++i){let r=s[i];const o=Z.parseTrackName(r.name),c=Z.findNode(e,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){t.push(r);continue}if(r.createInterpolant!==r.InterpolantFactoryMethodDiscrete&&r.createInterpolant!==r.InterpolantFactoryMethodLinear){if(r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),r=r.clone(),r.setInterpolation(Ke)}const u=c.morphTargetInfluences.length,f=c.morphTargetDictionary[o.propertyIndex];if(f===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let l;if(n[c.uuid]===void 0){l=r.clone();const d=new l.ValueBufferType(u*l.times.length);for(let m=0;m<l.times.length;m++)d[m*u+f]=l.values[m];l.name=(o.nodeName||"")+".morphTargetInfluences",l.values=d,n[c.uuid]=l,t.push(l);continue}const x=r.createInterpolant(new r.ValueBufferType(1));l=n[c.uuid];for(let d=0;d<l.times.length;d++)l.values[d*u+f]=x.evaluate(l.times[d]);for(let d=0;d<r.times.length;d++){const m=this.insertKeyframe(l,r.times[d]);l.values[m*u+f]=r.values[d]}}return a.tracks=t,a},toFloat32BufferAttribute:function(a){const e=new F(new Float32Array(a.count*a.itemSize),a.itemSize,!1);if(!a.normalized&&!a.isInterleavedBufferAttribute)return e.array.set(a.array),e;for(let t=0,n=a.count;t<n;t++)for(let s=0;s<a.itemSize;s++)e.setComponent(t,s,a.getComponent(t,s));return e}};X.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Re(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};q.line={uniforms:Ee.merge([X.common,X.fog,X.line]),vertexShader:`
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
		`};class Mt extends Je{static get type(){return"LineMaterial"}constructor(e){super({uniforms:Ee.clone(q.line.uniforms),vertexShader:q.line.vertexShader,fragmentShader:q.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const ge=new ce,W=new L;class At extends Ue{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new ue(e,3)),this.setAttribute("uv",new ue(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new re(t,6,1);return this.setAttribute("instanceStart",new P(n,3,0)),this.setAttribute("instanceEnd",new P(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new re(t,6,1);return this.setAttribute("instanceColorStart",new P(n,3,0)),this.setAttribute("instanceColorEnd",new P(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Xe(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ce);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),ge.setFromBufferAttribute(t),this.boundingBox.union(ge))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Se),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let i=0,r=e.count;i<r;i++)W.fromBufferAttribute(e,i),s=Math.max(s,n.distanceToSquared(W)),W.fromBufferAttribute(t,i),s=Math.max(s,n.distanceToSquared(W));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}const se=new j,we=new L,Te=new L,A=new j,S=new j,N=new j,ne=new L,ie=new ae,E=new Le,Me=new L,Y=new ce,K=new Se,C=new j;let z,B;function Ae(a,e,t){return C.set(0,0,-e,1).applyMatrix4(a.projectionMatrix),C.multiplyScalar(1/C.w),C.x=B/t.width,C.y=B/t.height,C.applyMatrix4(a.projectionMatrixInverse),C.multiplyScalar(1/C.w),Math.abs(Math.max(C.x,C.y))}function St(a,e){const t=a.matrixWorld,n=a.geometry,s=n.attributes.instanceStart,i=n.attributes.instanceEnd,r=Math.min(n.instanceCount,s.count);for(let o=0,c=r;o<c;o++){E.start.fromBufferAttribute(s,o),E.end.fromBufferAttribute(i,o),E.applyMatrix4(t);const u=new L,f=new L;z.distanceSqToSegment(E.start,E.end,f,u),f.distanceTo(u)<B*.5&&e.push({point:f,pointOnLine:u,distance:z.origin.distanceTo(f),object:a,face:null,faceIndex:o,uv:null,uv1:null})}}function Et(a,e,t){const n=e.projectionMatrix,i=a.material.resolution,r=a.matrixWorld,o=a.geometry,c=o.attributes.instanceStart,u=o.attributes.instanceEnd,f=Math.min(o.instanceCount,c.count),l=-e.near;z.at(1,N),N.w=1,N.applyMatrix4(e.matrixWorldInverse),N.applyMatrix4(n),N.multiplyScalar(1/N.w),N.x*=i.x/2,N.y*=i.y/2,N.z=0,ne.copy(N),ie.multiplyMatrices(e.matrixWorldInverse,r);for(let x=0,d=f;x<d;x++){if(A.fromBufferAttribute(c,x),S.fromBufferAttribute(u,x),A.w=1,S.w=1,A.applyMatrix4(ie),S.applyMatrix4(ie),A.z>l&&S.z>l)continue;if(A.z>l){const U=A.z-S.z,h=(A.z-l)/U;A.lerp(S,h)}else if(S.z>l){const U=S.z-A.z,h=(S.z-l)/U;S.lerp(A,h)}A.applyMatrix4(n),S.applyMatrix4(n),A.multiplyScalar(1/A.w),S.multiplyScalar(1/S.w),A.x*=i.x/2,A.y*=i.y/2,S.x*=i.x/2,S.y*=i.y/2,E.start.copy(A),E.start.z=0,E.end.copy(S),E.end.z=0;const p=E.closestPointToPointParameter(ne,!0);E.at(p,Me);const y=J.lerp(A.z,S.z,p),T=y>=-1&&y<=1,b=ne.distanceTo(Me)<B*.5;if(T&&b){E.start.fromBufferAttribute(c,x),E.end.fromBufferAttribute(u,x),E.start.applyMatrix4(r),E.end.applyMatrix4(r);const U=new L,h=new L;z.distanceSqToSegment(E.start,E.end,h,U),t.push({point:h,pointOnLine:U,distance:z.origin.distanceTo(h),object:a,face:null,faceIndex:x,uv:null,uv1:null})}}}class Ft extends Ze{constructor(e=new At,t=new Mt({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let r=0,o=0,c=t.count;r<c;r++,o+=2)we.fromBufferAttribute(t,r),Te.fromBufferAttribute(n,r),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+we.distanceTo(Te);const i=new re(s,2,1);return e.setAttribute("instanceDistanceStart",new P(i,1,0)),e.setAttribute("instanceDistanceEnd",new P(i,1,1)),this}raycast(e,t){const n=this.material.worldUnits,s=e.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const i=e.params.Line2!==void 0&&e.params.Line2.threshold||0;z=e.ray;const r=this.matrixWorld,o=this.geometry,c=this.material;B=c.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),K.copy(o.boundingSphere).applyMatrix4(r);let u;if(n)u=B*.5;else{const l=Math.max(s.near,K.distanceToPoint(z.origin));u=Ae(s,l,c.resolution)}if(K.radius+=u,z.intersectsSphere(K)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Y.copy(o.boundingBox).applyMatrix4(r);let f;if(n)f=B*.5;else{const l=Math.max(s.near,Y.distanceToPoint(z.origin));f=Ae(s,l,c.resolution)}Y.expandByScalar(f),z.intersectsBox(Y)!==!1&&(n?St(this,t):Et(this,s,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(se),this.material.uniforms.resolution.value.set(se.z,se.w))}}export{oe as G,At as L,Mt as a,Ft as b};
