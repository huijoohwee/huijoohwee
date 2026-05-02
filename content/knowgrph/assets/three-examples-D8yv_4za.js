import{M as V,T as G,R as je,N as He,a as Ge,D as Ye,P as ie,I as Ve,S as we,b as We,c as Ke,d as Ze,e as Xe,L as qe,f as Je,g as Qe,C as $e,h as et,i as tt,j as st}from"./three-core-YJ_pwGB0.js";import{I as nt,F as Te,f as fe,b as Y,a as k}from"./three-scene-core-BTiTuMh6.js";import{W as it}from"./three-geometries-DMUcSuo3.js";import{a as U,B as ye,S as Ce,V as T,f as J,k as ot,M as ge,l as q,Q as me,o as Ee,n as rt,P as at,C as ct}from"./three-math-DifZTZZx.js";import{S as lt}from"./three-materials-B69Oc6ic.js";import{a as se,b as ze,U as ne}from"./three-renderers-MCUCrlfV.js";import{M as ht}from"./three-objects-BRpQuzYs.js";import{a as ut}from"./three-extras-pbwMbJWh.js";import{C as ae,S as dt}from"./three-textures-CwD3SyZp.js";ne.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new U(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};se.line={uniforms:ze.merge([ne.common,ne.fog,ne.line]),vertexShader:`
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
		`};class pt extends lt{static get type(){return"LineMaterial"}constructor(e){super({uniforms:ze.clone(se.line.uniforms),vertexShader:se.line.vertexShader,fragmentShader:se.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const be=new ye,Q=new T;class ft extends nt{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Te(e,3)),this.setAttribute("uv",new Te(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new fe(t,6,1);return this.setAttribute("instanceStart",new Y(n,3,0)),this.setAttribute("instanceEnd",new Y(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new fe(t,6,1);return this.setAttribute("instanceColorStart",new Y(n,3,0)),this.setAttribute("instanceColorEnd",new Y(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new it(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ye);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),be.setFromBufferAttribute(t),this.boundingBox.union(be))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ce),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let i=0,o=e.count;i<o;i++)Q.fromBufferAttribute(e,i),s=Math.max(s,n.distanceToSquared(Q)),Q.fromBufferAttribute(t,i),s=Math.max(s,n.distanceToSquared(Q));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}const ce=new J,Me=new T,Se=new T,S=new J,A=new J,C=new J,le=new T,he=new ge,v=new ot,Ae=new T,$=new ye,ee=new Ce,z=new J;let F,j;function ve(r,e,t){return z.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),z.multiplyScalar(1/z.w),z.x=j/t.width,z.y=j/t.height,z.applyMatrix4(r.projectionMatrixInverse),z.multiplyScalar(1/z.w),Math.abs(Math.max(z.x,z.y))}function mt(r,e){const t=r.matrixWorld,n=r.geometry,s=n.attributes.instanceStart,i=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,c=o;a<c;a++){v.start.fromBufferAttribute(s,a),v.end.fromBufferAttribute(i,a),v.applyMatrix4(t);const l=new T,u=new T;F.distanceSqToSegment(v.start,v.end,u,l),u.distanceTo(l)<j*.5&&e.push({point:u,pointOnLine:l,distance:F.origin.distanceTo(u),object:r,face:null,faceIndex:a,uv:null,uv1:null})}}function yt(r,e,t){const n=e.projectionMatrix,i=r.material.resolution,o=r.matrixWorld,a=r.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),h=-e.near;F.at(1,C),C.w=1,C.applyMatrix4(e.matrixWorldInverse),C.applyMatrix4(n),C.multiplyScalar(1/C.w),C.x*=i.x/2,C.y*=i.y/2,C.z=0,le.copy(C),he.multiplyMatrices(e.matrixWorldInverse,o);for(let y=0,d=u;y<d;y++){if(S.fromBufferAttribute(c,y),A.fromBufferAttribute(l,y),S.w=1,A.w=1,S.applyMatrix4(he),A.applyMatrix4(he),S.z>h&&A.z>h)continue;if(S.z>h){const O=S.z-A.z,p=(S.z-h)/O;S.lerp(A,p)}else if(A.z>h){const O=A.z-S.z,p=(A.z-h)/O;A.lerp(S,p)}S.applyMatrix4(n),A.applyMatrix4(n),S.multiplyScalar(1/S.w),A.multiplyScalar(1/A.w),S.x*=i.x/2,S.y*=i.y/2,A.x*=i.x/2,A.y*=i.y/2,v.start.copy(S),v.start.z=0,v.end.copy(A),v.end.z=0;const f=v.closestPointToPointParameter(le,!0);v.at(f,Ae);const g=q.lerp(S.z,A.z,f),b=g>=-1&&g<=1,I=le.distanceTo(Ae)<j*.5;if(b&&I){v.start.fromBufferAttribute(c,y),v.end.fromBufferAttribute(l,y),v.start.applyMatrix4(o),v.end.applyMatrix4(o);const O=new T,p=new T;F.distanceSqToSegment(v.start,v.end,p,O),t.push({point:p,pointOnLine:O,distance:F.origin.distanceTo(p),object:r,face:null,faceIndex:y,uv:null,uv1:null})}}}class cs extends ht{constructor(e=new ft,t=new pt({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,c=t.count;o<c;o++,a+=2)Me.fromBufferAttribute(t,o),Se.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Me.distanceTo(Se);const i=new fe(s,2,1);return e.setAttribute("instanceDistanceStart",new Y(i,1,0)),e.setAttribute("instanceDistanceEnd",new Y(i,1,1)),this}raycast(e,t){const n=this.material.worldUnits,s=e.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const i=e.params.Line2!==void 0&&e.params.Line2.threshold||0;F=e.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;j=c.linewidth+i,a.boundingSphere===null&&a.computeBoundingSphere(),ee.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=j*.5;else{const h=Math.max(s.near,ee.distanceToPoint(F.origin));l=ve(s,h,c.resolution)}if(ee.radius+=l,F.intersectsSphere(ee)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),$.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=j*.5;else{const h=Math.max(s.near,$.distanceToPoint(F.origin));u=ve(s,h,c.resolution)}$.expandByScalar(u),F.intersectsBox($)!==!1&&(n?mt(this,t):yt(this,s,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(ce),this.material.uniforms.resolution.value.set(ce.z,ce.w))}}const Re={type:"change"},_e={type:"start"},Fe={type:"end"},te=new rt,Ie=new at,gt=Math.cos(70*q.DEG2RAD),E=new T,D=2*Math.PI,x={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ue=1e-6;class ls extends ut{constructor(e,t=null){super(e,t),this.state=x.NONE,this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:V.ROTATE,MIDDLE:V.DOLLY,RIGHT:V.PAN},this.touches={ONE:G.ROTATE,TWO:G.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new me,this._lastTargetPosition=new T,this._quat=new me().setFromUnitVectors(e.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ee,this._sphericalDelta=new Ee,this._scale=1,this._panOffset=new T,this._rotateStart=new U,this._rotateEnd=new U,this._rotateDelta=new U,this._panStart=new U,this._panEnd=new U,this._panDelta=new U,this._dollyStart=new U,this._dollyEnd=new U,this._dollyDelta=new U,this._dollyDirection=new T,this._mouse=new U,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xt.bind(this),this._onPointerDown=_t.bind(this),this._onPointerUp=wt.bind(this),this._onContextMenu=vt.bind(this),this._onMouseWheel=bt.bind(this),this._onKeyDown=Mt.bind(this),this._onTouchStart=St.bind(this),this._onTouchMove=At.bind(this),this._onMouseDown=Tt.bind(this),this._onMouseMove=Et.bind(this),this._interceptControlDown=Rt.bind(this),this._interceptControlUp=It.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Re),this.update(),this.state=x.NONE}update(e=null){const t=this.object.position;E.copy(t).sub(this.target),E.applyQuaternion(this._quat),this._spherical.setFromVector3(E),this.autoRotate&&this.state===x.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=D:n>Math.PI&&(n-=D),s<-Math.PI?s+=D:s>Math.PI&&(s-=D),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=o!=this._spherical.radius}if(E.setFromSpherical(this._spherical),E.applyQuaternion(this._quatInverse),t.copy(this.target).add(E),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=E.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),i=!!c}else if(this.object.isOrthographicCamera){const a=new T(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=c!==this.object.zoom;const l=new T(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=E.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(te.origin.copy(this.object.position),te.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(te.direction))<gt?this.object.lookAt(this.target):(Ie.setFromNormalAndCoplanarPoint(this.object.up,this.target),te.intersectPlane(Ie,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>ue||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ue||this._lastTargetPosition.distanceToSquared(this.target)>ue?(this.dispatchEvent(Re),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?D/60*this.autoRotateSpeed*e:D/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){E.setFromMatrixColumn(t,0),E.multiplyScalar(-e),this._panOffset.add(E)}_panUp(e,t){this.screenSpacePanning===!0?E.setFromMatrixColumn(t,1):(E.setFromMatrixColumn(t,0),E.crossVectors(this.object.up,E)),E.multiplyScalar(e),this._panOffset.add(E)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;E.copy(s).sub(this.target);let i=E.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,i=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(i/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(D*this._rotateDelta.x/t.clientHeight),this._rotateUp(D*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(D*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-D*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(D*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-D*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,i=Math.sqrt(n*n+s*s);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),i=.5*(e.pageY+n.y);this._rotateEnd.set(s,i)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(D*this._rotateDelta.x/t.clientHeight),this._rotateUp(D*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,i=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,i),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new U,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function _t(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function xt(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function wt(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fe),this.state=x.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Tt(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case V.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=x.DOLLY;break;case V.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=x.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=x.ROTATE}break;case V.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=x.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=x.PAN}break;default:this.state=x.NONE}this.state!==x.NONE&&this.dispatchEvent(_e)}function Et(r){switch(this.state){case x.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case x.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case x.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function bt(r){this.enabled===!1||this.enableZoom===!1||this.state!==x.NONE||(r.preventDefault(),this.dispatchEvent(_e),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Fe))}function Mt(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function St(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case G.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=x.TOUCH_ROTATE;break;case G.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=x.TOUCH_PAN;break;default:this.state=x.NONE}break;case 2:switch(this.touches.TWO){case G.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=x.TOUCH_DOLLY_PAN;break;case G.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=x.TOUCH_DOLLY_ROTATE;break;default:this.state=x.NONE}break;default:this.state=x.NONE}this.state!==x.NONE&&this.dispatchEvent(_e)}function At(r){switch(this._trackPointer(r),this.state){case x.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case x.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case x.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case x.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=x.NONE}}function vt(r){this.enabled!==!1&&r.preventDefault()}function Rt(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function It(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Le={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class oe{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new Bt(e)}),this.register(function(e){return new kt(e)}),this.register(function(e){return new Yt(e)}),this.register(function(e){return new Vt(e)}),this.register(function(e){return new Wt(e)}),this.register(function(e){return new Kt(e)}),this.register(function(e){return new jt(e)}),this.register(function(e){return new Ht(e)}),this.register(function(e){return new Gt(e)}),this.register(function(e){return new Zt(e)}),this.register(function(e){return new Xt(e)}),this.register(function(e){return new qt(e)}),this.register(function(e){return new Jt(e)}),this.register(function(e){return new Qt(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,s){const i=new Ft,o=[];for(let a=0,c=this.pluginCallbacks.length;a<c;a++)o.push(this.pluginCallbacks[a](i));i.setPlugins(o),i.setTextureUtils(this.textureUtils),i.writeAsync(e,t,s).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(s,i){n.parse(e,s,i,t)})}}const _={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},de="KHR_mesh_quantization",N={};N[Ke]=_.NEAREST;N[Ze]=_.NEAREST_MIPMAP_NEAREST;N[Xe]=_.NEAREST_MIPMAP_LINEAR;N[qe]=_.LINEAR;N[Je]=_.LINEAR_MIPMAP_NEAREST;N[Qe]=_.LINEAR_MIPMAP_LINEAR;N[$e]=_.CLAMP_TO_EDGE;N[et]=_.REPEAT;N[tt]=_.MIRRORED_REPEAT;const De={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},Lt=new ct,Pe=12,Dt=1179937895,Pt=2,Ne=8,Nt=1313821514,Ut=5130562;function X(r,e){return r.length===e.length&&r.every(function(t,n){return t===e[n]})}function Ot(r){return new TextEncoder().encode(r).buffer}function Ct(r){return X(r.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function zt(r,e,t){const n={min:new Array(r.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(r.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=e;s<e+t;s++)for(let i=0;i<r.itemSize;i++){let o;r.itemSize>4?o=r.array[s*r.itemSize+i]:(i===0?o=r.getX(s):i===1?o=r.getY(s):i===2?o=r.getZ(s):i===3&&(o=r.getW(s)),r.normalized===!0&&(o=q.normalize(o,r.array))),n.min[i]=Math.min(n.min[i],o),n.max[i]=Math.max(n.max[i],o)}return n}function Be(r){return Math.ceil(r/4)*4}function pe(r,e=0){const t=Be(r.byteLength);if(t!==r.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(r)),e!==0)for(let s=r.byteLength;s<t;s++)n[s]=e;return n.buffer}return r}function Ue(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function Oe(r,e){if(r.toBlob!==void 0)return new Promise(n=>r.toBlob(n,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),r.convertToBlob({type:e,quality:t})}class Ft{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+je}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);const s=this,i=s.buffers,o=s.json;n=s.options;const a=s.extensionsUsed,c=s.extensionsRequired,l=new Blob(i,{type:"application/octet-stream"}),u=Object.keys(a),h=Object.keys(c);if(u.length>0&&(o.extensionsUsed=u),h.length>0&&(o.extensionsRequired=h),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=l.size),n.binary===!0){const y=new FileReader;y.readAsArrayBuffer(l),y.onloadend=function(){const d=pe(y.result),m=new DataView(new ArrayBuffer(Ne));m.setUint32(0,d.byteLength,!0),m.setUint32(4,Ut,!0);const f=pe(Ot(JSON.stringify(o)),32),g=new DataView(new ArrayBuffer(Ne));g.setUint32(0,f.byteLength,!0),g.setUint32(4,Nt,!0);const b=new ArrayBuffer(Pe),I=new DataView(b);I.setUint32(0,Dt,!0),I.setUint32(4,Pt,!0);const O=Pe+g.byteLength+f.byteLength+m.byteLength+d.byteLength;I.setUint32(8,O,!0);const p=new Blob([b,g,f,m,d],{type:"application/octet-stream"}),w=new FileReader;w.readAsArrayBuffer(p),w.onloadend=function(){t(w.result)}}}else if(o.buffers&&o.buffers.length>0){const y=new FileReader;y.readAsDataURL(l),y.onloadend=function(){const d=y.result;o.buffers[0].uri=d,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,s=this.extensionsUsed;try{const i=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&i.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const o in i.gltfExtensions)t.extensions[o]=i.gltfExtensions[o],s[o]=!0;delete i.gltfExtensions}Object.keys(i).length>0&&(t.extras=i)}catch(i){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+i.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(e,s)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const n=new T;for(let s=0,i=e.count;s<i;s++)if(Math.abs(n.fromBufferAttribute(e,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),s=new T;for(let i=0,o=n.count;i<o;i++)s.fromBufferAttribute(n,i),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(i,s.x,s.y,s.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const s={};(t.offset.x!==0||t.offset.y!==0)&&(s.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(s.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(s.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(d){return d.colorSpace===We?function(f){return f<.04045?f*.0773993808:Math.pow(f*.9478672986+.0521327014,2.4)}:function(f){return f}}e instanceof ae&&(e=await this.decompressTextureAsync(e)),t instanceof ae&&(t=await this.decompressTextureAsync(t));const s=e?e.image:null,i=t?t.image:null,o=Math.max(s?s.width:0,i?i.width:0),a=Math.max(s?s.height:0,i?i.height:0),c=Ue();c.width=o,c.height=a;const l=c.getContext("2d",{willReadFrequently:!0});l.fillStyle="#00ffff",l.fillRect(0,0,o,a);const u=l.getImageData(0,0,o,a);if(s){l.drawImage(s,0,0,o,a);const d=n(e),m=l.getImageData(0,0,o,a).data;for(let f=2;f<m.length;f+=4)u.data[f]=d(m[f]/256)*256}if(i){l.drawImage(i,0,0,o,a);const d=n(t),m=l.getImageData(0,0,o,a).data;for(let f=1;f<m.length;f+=4)u.data[f]=d(m[f]/256)*256}l.putImageData(u,0,0);const y=(e||t).clone();return y.source=new dt(c),y.colorSpace=He,y.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),y}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,s,i){const o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case _.BYTE:case _.UNSIGNED_BYTE:a=1;break;case _.SHORT:case _.UNSIGNED_SHORT:a=2;break;default:a=4}let c=e.itemSize*a;i===_.ARRAY_BUFFER&&(c=Math.ceil(c/4)*4);const l=Be(s*c),u=new DataView(new ArrayBuffer(l));let h=0;for(let m=n;m<n+s;m++){for(let f=0;f<e.itemSize;f++){let g;e.itemSize>4?g=e.array[m*e.itemSize+f]:(f===0?g=e.getX(m):f===1?g=e.getY(m):f===2?g=e.getZ(m):f===3&&(g=e.getW(m)),e.normalized===!0&&(g=q.normalize(g,e.array))),t===_.FLOAT?u.setFloat32(h,g,!0):t===_.INT?u.setInt32(h,g,!0):t===_.UNSIGNED_INT?u.setUint32(h,g,!0):t===_.SHORT?u.setInt16(h,g,!0):t===_.UNSIGNED_SHORT?u.setUint16(h,g,!0):t===_.BYTE?u.setInt8(h,g):t===_.UNSIGNED_BYTE&&u.setUint8(h,g),h+=a}h%c!==0&&(h+=c-h%c)}const y={buffer:this.processBuffer(u.buffer),byteOffset:this.byteOffset,byteLength:l};return i!==void 0&&(y.target=i),i===_.ARRAY_BUFFER&&(y.byteStride=c),this.byteOffset+=l,o.bufferViews.push(y),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){const i=new FileReader;i.readAsArrayBuffer(e),i.onloadend=function(){const o=pe(i.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,s(n.bufferViews.push(a)-1)}})}processAccessor(e,t,n,s){const i=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let a;if(e.array.constructor===Float32Array)a=_.FLOAT;else if(e.array.constructor===Int32Array)a=_.INT;else if(e.array.constructor===Uint32Array)a=_.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=_.SHORT;else if(e.array.constructor===Uint16Array)a=_.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=_.BYTE;else if(e.array.constructor===Uint8Array)a=_.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=e.count),s===0)return null;const c=zt(e,n,s);let l;t!==void 0&&(l=e===t.index?_.ELEMENT_ARRAY_BUFFER:_.ARRAY_BUFFER);const u=this.processBufferView(e,a,n,s,l),h={bufferView:u.id,byteOffset:u.byteOffset,componentType:a,count:s,max:c.max,min:c.min,type:o[e.itemSize]};return e.normalized===!0&&(h.normalized=!0),i.accessors||(i.accessors=[]),i.accessors.push(h)-1}processImage(e,t,n,s="image/png"){if(e!==null){const i=this,o=i.cache,a=i.json,c=i.options,l=i.pending;o.images.has(e)||o.images.set(e,{});const u=o.images.get(e),h=s+":flipY/"+n.toString();if(u[h]!==void 0)return u[h];a.images||(a.images=[]);const y={mimeType:s},d=Ue();d.width=Math.min(e.width,c.maxTextureSize),d.height=Math.min(e.height,c.maxTextureSize);const m=d.getContext("2d",{willReadFrequently:!0});if(n===!0&&(m.translate(0,d.height),m.scale(1,-1)),e.data!==void 0){t!==Ge&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>c.maxTextureSize||e.height>c.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const g=new Uint8ClampedArray(e.height*e.width*4);for(let b=0;b<g.length;b+=4)g[b+0]=e.data[b+0],g[b+1]=e.data[b+1],g[b+2]=e.data[b+2],g[b+3]=e.data[b+3];m.putImageData(new ImageData(g,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)m.drawImage(e,0,0,d.width,d.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");c.binary===!0?l.push(Oe(d,s).then(g=>i.processBufferViewImage(g)).then(g=>{y.bufferView=g})):d.toDataURL!==void 0?y.uri=d.toDataURL(s):l.push(Oe(d,s).then(g=>new FileReader().readAsDataURL(g)).then(g=>{y.uri=g}));const f=a.images.push(y)-1;return u[h]=f,f}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:N[e.magFilter],minFilter:N[e.minFilter],wrapS:N[e.wrapS],wrapT:N[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){const n=this.options,s=this.cache,i=this.json;if(s.textures.has(e))return s.textures.get(e);i.textures||(i.textures=[]),e instanceof ae&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let o=e.userData.mimeType;o==="image/webp"&&(o="image/png");const a={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,o)};e.name&&(a.name=e.name),await this._invokeAllAsync(async function(l){l.writeTexture&&await l.writeTexture(e,a)});const c=i.textures.push(a)-1;return s.textures.set(e,c),c}async processMaterialAsync(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const s={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const i=e.color.toArray().concat([e.opacity]);if(X(i,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=i),e.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=e.metalness,s.pbrMetallicRoughness.roughnessFactor=e.roughness):(s.pbrMetallicRoughness.metallicFactor=0,s.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){const a=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),c={index:await this.processTextureAsync(a),texCoord:a.channel};this.applyTextureTransform(c,a),s.pbrMetallicRoughness.metallicRoughnessTexture=c}if(e.map){const a={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(a,e.map),s.pbrMetallicRoughness.baseColorTexture=a}if(e.emissive){const a=e.emissive;if(Math.max(a.r,a.g,a.b)>0&&(s.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const l={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(l,e.emissiveMap),s.emissiveTexture=l}}if(e.normalMap){const a={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(a.scale=e.normalScale.x),this.applyTextureTransform(a,e.normalMap),s.normalTexture=a}if(e.aoMap){const a={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(a.strength=e.aoMapIntensity),this.applyTextureTransform(a,e.aoMap),s.occlusionTexture=a}e.transparent?s.alphaMode="BLEND":e.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=e.alphaTest),e.side===Ye&&(s.doubleSided=!0),e.name!==""&&(s.name=e.name),this.serializeUserData(e,s),await this._invokeAllAsync(async function(a){a.writeMaterialAsync&&await a.writeMaterialAsync(e,s)});const o=n.materials.push(s)-1;return t.materials.set(e,o),o}async processMeshAsync(e){const t=this.cache,n=this.json,s=[e.geometry.uuid];if(Array.isArray(e.material))for(let p=0,w=e.material.length;p<w;p++)s.push(e.material[p].uuid);else s.push(e.material.uuid);const i=s.join(":");if(t.meshes.has(i))return t.meshes.get(i);const o=e.geometry;let a;e.isLineSegments?a=_.LINES:e.isLineLoop?a=_.LINE_LOOP:e.isLine?a=_.LINE_STRIP:e.isPoints?a=_.POINTS:a=e.material.wireframe?_.LINES:_.TRIANGLES;const c={},l={},u=[],h=[],y={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},d=o.getAttribute("normal");d!==void 0&&!this.isNormalizedNormalAttribute(d)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(d)));let m=null;for(let p in o.attributes){if(p.slice(0,5)==="morph")continue;const w=o.attributes[p];if(p=y[p]||p.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(p)||(p="_"+p),t.attributes.has(this.getUID(w))){l[p]=t.attributes.get(this.getUID(w));continue}m=null;const M=w.array;p==="JOINTS_0"&&!(M instanceof Uint16Array)&&!(M instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),m=new k(new Uint16Array(M),w.itemSize,w.normalized)):(M instanceof Uint32Array||M instanceof Int32Array)&&!p.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${p}" converted to type FLOAT.`),m=oe.Utils.toFloat32BufferAttribute(w));const P=this.processAccessor(m||w,o);P!==null&&(p.startsWith("_")||this.detectMeshQuantization(p,w),l[p]=P,t.attributes.set(this.getUID(w),P))}if(d!==void 0&&o.setAttribute("normal",d),Object.keys(l).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const p=[],w=[],R={};if(e.morphTargetDictionary!==void 0)for(const M in e.morphTargetDictionary)R[e.morphTargetDictionary[M]]=M;for(let M=0;M<e.morphTargetInfluences.length;++M){const P={};let xe=!1;for(const W in o.morphAttributes){if(W!=="position"&&W!=="normal"){xe||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),xe=!0);continue}const B=o.morphAttributes[W][M],re=W.toUpperCase(),K=o.attributes[W];if(t.attributes.has(this.getUID(B,!0))){P[re]=t.attributes.get(this.getUID(B,!0));continue}const Z=B.clone();if(!o.morphTargetsRelative)for(let L=0,ke=B.count;L<ke;L++)for(let H=0;H<B.itemSize;H++)H===0&&Z.setX(L,B.getX(L)-K.getX(L)),H===1&&Z.setY(L,B.getY(L)-K.getY(L)),H===2&&Z.setZ(L,B.getZ(L)-K.getZ(L)),H===3&&Z.setW(L,B.getW(L)-K.getW(L));P[re]=this.processAccessor(Z,o),t.attributes.set(this.getUID(K,!0),P[re])}h.push(P),p.push(e.morphTargetInfluences[M]),e.morphTargetDictionary!==void 0&&w.push(R[M])}c.weights=p,w.length>0&&(c.extras={},c.extras.targetNames=w)}const f=Array.isArray(e.material);if(f&&o.groups.length===0)return null;let g=!1;if(f&&o.index===null){const p=[];for(let w=0,R=o.attributes.position.count;w<R;w++)p[w]=w;o.setIndex(p),g=!0}const b=f?e.material:[e.material],I=f?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let p=0,w=I.length;p<w;p++){const R={mode:a,attributes:l};if(this.serializeUserData(o,R),h.length>0&&(R.targets=h),o.index!==null){let P=this.getUID(o.index);(I[p].start!==void 0||I[p].count!==void 0)&&(P+=":"+I[p].start+":"+I[p].count),t.attributes.has(P)?R.indices=t.attributes.get(P):(R.indices=this.processAccessor(o.index,o,I[p].start,I[p].count),t.attributes.set(P,R.indices)),R.indices===null&&delete R.indices}const M=await this.processMaterialAsync(b[I[p].materialIndex]);M!==null&&(R.material=M),u.push(R)}g===!0&&o.setIndex(null),c.primitives=u,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(p){p.writeMesh&&p.writeMesh(e,c)});const O=n.meshes.push(c)-1;return t.meshes.set(i,O),O}detectMeshQuantization(e,t){if(this.extensionsUsed[de])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");const s=e.split("_",1)[0];Le[s]&&Le[s].includes(n)&&(this.extensionsUsed[de]=!0,this.extensionsRequired[de]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:s.perspective={aspectRatio:e.aspect,yfov:q.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(s.name=e.type),t.cameras.push(s)-1}processAnimation(e,t){const n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),e=oe.Utils.mergeMorphTargetTracks(e.clone(),t);const i=e.tracks,o=[],a=[];for(let c=0;c<i.length;++c){const l=i[c],u=ie.parseTrackName(l.name);let h=ie.findNode(t,u.nodeName);const y=De[u.propertyName];if(u.objectName==="bones"&&(h.isSkinnedMesh===!0?h=h.skeleton.getBoneByName(u.objectIndex):h=void 0),!h||!y){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',l.name);continue}const d=1;let m=l.values.length/l.times.length;y===De.morphTargetInfluences&&(m/=h.morphTargetInfluences.length);let f;l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(f="CUBICSPLINE",m/=3):l.getInterpolation()===Ve?f="STEP":f="LINEAR",a.push({input:this.processAccessor(new k(l.times,d)),output:this.processAccessor(new k(l.values,m)),interpolation:f}),o.push({sampler:a.length-1,target:{node:s.get(h),path:y}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:a,channels:o}),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,s=t.nodes[n.get(e)],i=e.skeleton;if(i===void 0)return null;const o=e.skeleton.bones[0];if(o===void 0)return null;const a=[],c=new Float32Array(i.bones.length*16),l=new ge;for(let h=0;h<i.bones.length;++h)a.push(n.get(i.bones[h])),l.copy(i.boneInverses[h]),l.multiply(e.bindMatrix).toArray(c,h*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new k(c,16)),joints:a,skeleton:n.get(o)}),s.skin=t.skins.length-1}async processNodeAsync(e){const t=this.json,n=this.options,s=this.nodeMap;t.nodes||(t.nodes=[]);const i={};if(n.trs){const a=e.quaternion.toArray(),c=e.position.toArray(),l=e.scale.toArray();X(a,[0,0,0,1])||(i.rotation=a),X(c,[0,0,0])||(i.translation=c),X(l,[1,1,1])||(i.scale=l)}else e.matrixAutoUpdate&&e.updateMatrix(),Ct(e.matrix)===!1&&(i.matrix=e.matrix.elements);if(e.name!==""&&(i.name=String(e.name)),this.serializeUserData(e,i),e.isMesh||e.isLine||e.isPoints){const a=await this.processMeshAsync(e);a!==null&&(i.mesh=a)}else e.isCamera&&(i.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const a=[];for(let c=0,l=e.children.length;c<l;c++){const u=e.children[c];if(u.visible||n.onlyVisible===!1){const h=await this.processNodeAsync(u);h!==null&&a.push(h)}}a.length>0&&(i.children=a)}await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(e,i)});const o=t.nodes.push(i)-1;return s.set(e,o),o}async processSceneAsync(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const s={};e.name!==""&&(s.name=e.name),t.scenes.push(s);const i=[];for(let o=0,a=e.children.length;o<a;o++){const c=e.children[o];if(c.visible||n.onlyVisible===!1){const l=await this.processNodeAsync(c);l!==null&&i.push(l)}}i.length>0&&(s.nodes=i),this.serializeUserData(e,s)}async processObjectsAsync(e){const t=new we;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){const t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(e)});const n=[];for(let s=0;s<e.length;s++)e[s]instanceof we?await this.processSceneAsync(e[s]):n.push(e[s]);n.length>0&&await this.processObjectsAsync(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<t.animations.length;++s)this.processAnimation(t.animations[s],e[0]);await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}}class Bt{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,s=n.json,i=n.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),i[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},i[this.name]=!0);const a=s.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}}class kt{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;const s=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},s[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class jt{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const n=this.writer,s=n.extensionsUsed,i={};if(i.clearcoatFactor=e.clearcoat,e.clearcoatMap){const o={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(o,e.clearcoatMap),i.clearcoatTexture=o}if(i.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const o={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,e.clearcoatRoughnessMap),i.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){const o={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(o.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(o,e.clearcoatNormalMap),i.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=i,s[this.name]=!0}}class Ht{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const s=this.writer.extensionsUsed,i={};i.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=i,s[this.name]=!0}}class Gt{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const n=this.writer,s=n.extensionsUsed,i={};if(i.iridescenceFactor=e.iridescence,e.iridescenceMap){const o={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(o,e.iridescenceMap),i.iridescenceTexture=o}if(i.iridescenceIor=e.iridescenceIOR,i.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],i.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const o={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(o,e.iridescenceThicknessMap),i.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=i,s[this.name]=!0}}class Yt{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,s=n.extensionsUsed,i={};if(i.transmissionFactor=e.transmission,e.transmissionMap){const o={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(o,e.transmissionMap),i.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=i,s[this.name]=!0}}class Vt{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,s=n.extensionsUsed,i={};if(i.thicknessFactor=e.thickness,e.thicknessMap){const o={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(o,e.thicknessMap),i.thicknessTexture=o}e.attenuationDistance!==1/0&&(i.attenuationDistance=e.attenuationDistance),i.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=i,s[this.name]=!0}}class Wt{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const s=this.writer.extensionsUsed,i={};i.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=i,s[this.name]=!0}}class Kt{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(Lt)&&!e.specularIntensityMap&&!e.specularColorMap)return;const n=this.writer,s=n.extensionsUsed,i={};if(e.specularIntensityMap){const o={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(o,e.specularIntensityMap),i.specularTexture=o}if(e.specularColorMap){const o={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(o,e.specularColorMap),i.specularColorTexture=o}i.specularFactor=e.specularIntensity,i.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=i,s[this.name]=!0}}class Zt{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const n=this.writer,s=n.extensionsUsed,i={};if(e.sheenRoughnessMap){const o={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(o,e.sheenRoughnessMap),i.sheenRoughnessTexture=o}if(e.sheenColorMap){const o={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(o,e.sheenColorMap),i.sheenColorTexture=o}i.sheenRoughnessFactor=e.sheenRoughness,i.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=i,s[this.name]=!0}}class Xt{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const n=this.writer,s=n.extensionsUsed,i={};if(e.anisotropyMap){const o={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(o,e.anisotropyMap),i.anisotropyTexture=o}i.anisotropyStrength=e.anisotropy,i.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=i,s[this.name]=!0}}class qt{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const s=this.writer.extensionsUsed,i={};i.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=i,s[this.name]=!0}}class Jt{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const n=this.writer,s=n.extensionsUsed,i={};if(e.bumpMap){const o={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(o,e.bumpMap),i.bumpTexture=o}i.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=i,s[this.name]=!0}}class Qt{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const n=this.writer,s=e,i=new Float32Array(s.count*3),o=new Float32Array(s.count*4),a=new Float32Array(s.count*3),c=new ge,l=new T,u=new me,h=new T;for(let d=0;d<s.count;d++)s.getMatrixAt(d,c),c.decompose(l,u,h),l.toArray(i,d*3),u.toArray(o,d*4),h.toArray(a,d*3);const y={TRANSLATION:n.processAccessor(new k(i,3)),ROTATION:n.processAccessor(new k(o,4)),SCALE:n.processAccessor(new k(a,3))};s.instanceColor&&(y._COLOR_0=n.processAccessor(s.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:y},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}oe.Utils={insertKeyframe:function(r,e){const n=r.getValueSize(),s=new r.TimeBufferType(r.times.length+1),i=new r.ValueBufferType(r.values.length+n),o=r.createInterpolant(new r.ValueBufferType(n));let a;if(r.times.length===0){s[0]=e;for(let c=0;c<n;c++)i[c]=0;a=0}else if(e<r.times[0]){if(Math.abs(r.times[0]-e)<.001)return 0;s[0]=e,s.set(r.times,1),i.set(o.evaluate(e),0),i.set(r.values,n),a=0}else if(e>r.times[r.times.length-1]){if(Math.abs(r.times[r.times.length-1]-e)<.001)return r.times.length-1;s[s.length-1]=e,s.set(r.times,0),i.set(r.values,0),i.set(o.evaluate(e),r.values.length),a=s.length-1}else for(let c=0;c<r.times.length;c++){if(Math.abs(r.times[c]-e)<.001)return c;if(r.times[c]<e&&r.times[c+1]>e){s.set(r.times.slice(0,c+1),0),s[c+1]=e,s.set(r.times.slice(c+1),c+2),i.set(r.values.slice(0,(c+1)*n),0),i.set(o.evaluate(e),(c+1)*n),i.set(r.values.slice((c+1)*n),(c+2)*n),a=c+1;break}}return r.times=s,r.values=i,a},mergeMorphTargetTracks:function(r,e){const t=[],n={},s=r.tracks;for(let i=0;i<s.length;++i){let o=s[i];const a=ie.parseTrackName(o.name),c=ie.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(st)}const l=c.morphTargetInfluences.length,u=c.morphTargetDictionary[a.propertyIndex];if(u===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let h;if(n[c.uuid]===void 0){h=o.clone();const d=new h.ValueBufferType(l*h.times.length);for(let m=0;m<h.times.length;m++)d[m*l+u]=h.values[m];h.name=(a.nodeName||"")+".morphTargetInfluences",h.values=d,n[c.uuid]=h,t.push(h);continue}const y=o.createInterpolant(new o.ValueBufferType(1));h=n[c.uuid];for(let d=0;d<h.times.length;d++)h.values[d*l+u]=y.evaluate(h.times[d]);for(let d=0;d<o.times.length;d++){const m=this.insertKeyframe(h,o.times[d]);h.values[m*l+u]=o.values[d]}}return r.tracks=t,r},toFloat32BufferAttribute:function(r){const e=new k(new Float32Array(r.count*r.itemSize),r.itemSize,!1);if(!r.normalized&&!r.isInterleavedBufferAttribute)return e.array.set(r.array),e;for(let t=0,n=r.count;t<n;t++)for(let s=0;s<r.itemSize;s++)e.setComponent(t,s,r.getComponent(t,s));return e}};const hs=Object.freeze(Object.defineProperty({__proto__:null,GLTFExporter:oe},Symbol.toStringTag,{value:"Module"}));export{hs as G,ft as L,ls as O,pt as a,cs as b};
