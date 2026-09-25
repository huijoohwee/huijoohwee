import{M as Fe,V as st,l as Ze,h as et,P as Pn,w as pt,E as Bi,i as Ut,x as je,bc as qe,F as Ht,aI as Gi,Y as Ln,U as Pt,r as bt,R as Tt,bd as ca,b2 as vn,b1 as En,G as wn,I as on,e as ot,be as Hi,J as Ct,bf as Vn,bg as Vi,bh as la,bi as vt,bj as fa,bk as da,bl as ua,bm as pa,bn as ha,bo as ma,bp as _a,bq as ki,br as ga,bs as va,o as Ea,bt as Et,j as Jt,aR as Sa,bu as Ma,X as Un,aQ as Wi,bv as Ta,H as Qt,f as Gt,m as en,bw as xa,bx as Aa,A as Nt,by as Ra,bz as ba,bA as Ca,bB as Pa,bC as La,bD as wa,O as Ua,bE as Da,bF as ya,bG as Ia,bH as Na,k as Oa,bI as Fa,bJ as Ba,bK as Ga,bL as Sn,bM as Mn,bN as Tn,bO as xn,bP as An,bQ as Rn,bR as bn,bS as Ha,bT as kn,bU as Va,bV as ka,bW as Wn,bX as zn,bY as Xn,bZ as Wa,b_ as za,c as Xa,C as Ya,d as qa,a as Ot,b3 as ln,L as Yt,b4 as qt,b5 as Ka,b$ as Za,c0 as $a,c1 as Ja,c2 as Qa,c3 as ja,c4 as er,c5 as tr,N as wt,_ as tn,Z as Dn,$ as Vt,a0 as kt,aM as nn,aK as zi,aJ as Xi,aH as nr,aN as ir,aL as ar,aG as rr,az as or,aF as sr,aE as cr,aD as lr,aC as Yi,aB as fr,aA as qi,ay as Ki,ax as fn,aw as dn,av as un,au as pn,ar as Yn,at as qn,aq as Kn,as as Zn,ap as $n,ao as Jn,an as Qn,am as jn,al as ei,ak as ti,aj as ni,ai as ii,ah as ai,ag as ri,af as oi,ae as si,ad as ci,ac as li,ab as fi,aa as di,a9 as ui,a8 as hn,a7 as pi,a6 as hi,a5 as dr,a4 as mi,a3 as _i,a2 as gi,y as ur,a$ as pr,c6 as hr,W as mr}from"./three-math-Bxp2v-cH.js";import{m as rt,M as an,B as _r,S as rn,c as vi,P as Zi,g as $i,W as gr,a as Ei,w as Ft,U as vr,b as Er,d as Sr,D as Ji,C as Mr,e as Tr,f as Qi,T as ji,h as xr,L as Ar,i as Rr,j as br,k as Cr,l as Pr,n as Wt,o as Si,p as Lr,G as Kt,E as wr,q as mn,A as Ur,r as Dr,t as yr,s as Ir,u as Nr}from"./three-core-CpwJcB1a.js";function ea(){let e=null,n=!1,t=null,i=null;function c(s,h){t(s,h),i=e.requestAnimationFrame(c)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(c),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(s){t=s},setContext:function(s){e=s}}}function Or(e){const n=new WeakMap;function t(d,U){const M=d.array,y=d.usage,R=M.byteLength,S=e.createBuffer();e.bindBuffer(U,S),e.bufferData(U,M,y),d.onUploadCallback();let A;if(M instanceof Float32Array)A=e.FLOAT;else if(M instanceof Uint16Array)d.isFloat16BufferAttribute?A=e.HALF_FLOAT:A=e.UNSIGNED_SHORT;else if(M instanceof Int16Array)A=e.SHORT;else if(M instanceof Uint32Array)A=e.UNSIGNED_INT;else if(M instanceof Int32Array)A=e.INT;else if(M instanceof Int8Array)A=e.BYTE;else if(M instanceof Uint8Array)A=e.UNSIGNED_BYTE;else if(M instanceof Uint8ClampedArray)A=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+M);return{buffer:S,type:A,bytesPerElement:M.BYTES_PER_ELEMENT,version:d.version,size:R}}function i(d,U,M){const y=U.array,R=U.updateRanges;if(e.bindBuffer(M,d),R.length===0)e.bufferSubData(M,0,y);else{R.sort((A,N)=>A.start-N.start);let S=0;for(let A=1;A<R.length;A++){const N=R[S],C=R[A];C.start<=N.start+N.count+1?N.count=Math.max(N.count,C.start+C.count-N.start):(++S,R[S]=C)}R.length=S+1;for(let A=0,N=R.length;A<N;A++){const C=R[A];e.bufferSubData(M,C.start*y.BYTES_PER_ELEMENT,y,C.start,C.count)}U.clearUpdateRanges()}U.onUploadCallback()}function c(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function s(d){d.isInterleavedBufferAttribute&&(d=d.data);const U=n.get(d);U&&(e.deleteBuffer(U.buffer),n.delete(d))}function h(d,U){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const y=n.get(d);(!y||y.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const M=n.get(d);if(M===void 0)n.set(d,t(d,U));else if(M.version<d.version){if(M.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(M.buffer,d,U),M.version=d.version}}return{get:c,remove:s,update:h}}const Fr=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`,Br=`
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
`,Gr=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`,Hr=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,Vr=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`,kr=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,Wr=`
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
`,zr=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,Xr=`
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
`,Yr=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`,qr=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`,Kr=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,Zr=`

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

`,$r=`

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

`,Jr=`
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
`,Qr=`
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
`,jr=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,eo=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,to=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,no=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,io=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,ao=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec3 vColor;

#endif
`,ro=`
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
`,oo=`
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
`,so=`
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
`,co=`

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
`,lo=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,fo=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`,uo=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,po=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,ho=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,mo=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`,_o=`
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
`,go=`
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
`,vo=`
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
`,Eo=`
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
`,So=`
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
`,Mo=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,To=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,xo=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,Ao=`
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
`,Ro=`

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
`,bo=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,Co=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`,Po=`
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
`,Lo=`
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
`,wo=`
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
`,Uo=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,Do=`
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
`,yo=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,Io=`
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
`,No=`
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
`,Oo=`

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
`,Fo=`
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
`,Bo=`
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
`,Go=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`,Ho=`
#if defined( USE_LOGDEPTHBUF )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,Vo=`
#if defined( USE_LOGDEPTHBUF )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,ko=`
#ifdef USE_LOGDEPTHBUF

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,Wo=`
#ifdef USE_LOGDEPTHBUF

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`,zo=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`,Xo=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,Yo=`
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
`,qo=`
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
`,Ko=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,Zo=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,$o=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`,Jo=`
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
`,Qo=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`,jo=`
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
`,es=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`,ts=`
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

`,ns=`

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
`,is=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,as=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,rs=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,os=`
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
`,ss=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`,cs=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`,ls=`

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
`,fs=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`,ds=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,us=`
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
`,ps=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,hs=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,ms=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,_s=`
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
`,gs=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,vs=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,Es=`
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
`,Ss=`

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
`,Ms=`

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


`,Ts=`
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
`,xs=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,As=`
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
`,Rs=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,bs=`
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
`,Cs=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,Ps=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,Ls=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,ws=`
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
`,Us=`
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
`,Ds=`
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
`,ys=`
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
`,Is=`
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
`,Ns=`
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
`,Os=`
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
`,Fs=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,Bs=`
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
`,Gs=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Hs=`

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
`,Vs=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,ks=`
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
`,Ws=`
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
`,zs=`
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
`,Xs=`
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
`,Ys=`
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
`,qs=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,Ks=`
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
`,Zs=`
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
`,$s=`
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
`,Js=`
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
`,Qs=`
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
`,js=`
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
`,ec=`
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
`,tc=`
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
`,nc=`
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
`,ic=`
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
`,ac=`
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
`,rc=`
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
`,oc=`
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
`,sc=`
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
`,cc=`
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
`,lc=`
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
`,fc=`
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
`,dc=`
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
`,uc=`
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
`,pc=`
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
`,hc=`
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
`,mc=`
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
`,_c=`
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
`,Pe={alphahash_fragment:Fr,alphahash_pars_fragment:Br,alphamap_fragment:Gr,alphamap_pars_fragment:Hr,alphatest_fragment:Vr,alphatest_pars_fragment:kr,aomap_fragment:Wr,aomap_pars_fragment:zr,batching_pars_vertex:Xr,batching_vertex:Yr,begin_vertex:qr,beginnormal_vertex:Kr,bsdfs:Zr,iridescence_fragment:$r,bumpmap_pars_fragment:Jr,clipping_planes_fragment:Qr,clipping_planes_pars_fragment:jr,clipping_planes_pars_vertex:eo,clipping_planes_vertex:to,color_fragment:no,color_pars_fragment:io,color_pars_vertex:ao,color_vertex:ro,common:oo,cube_uv_reflection_fragment:so,defaultnormal_vertex:co,displacementmap_pars_vertex:lo,displacementmap_vertex:fo,emissivemap_fragment:uo,emissivemap_pars_fragment:po,colorspace_fragment:ho,colorspace_pars_fragment:mo,envmap_fragment:_o,envmap_common_pars_fragment:go,envmap_pars_fragment:vo,envmap_pars_vertex:Eo,envmap_physical_pars_fragment:wo,envmap_vertex:So,fog_vertex:Mo,fog_pars_vertex:To,fog_fragment:xo,fog_pars_fragment:Ao,gradientmap_pars_fragment:Ro,lightmap_pars_fragment:bo,lights_lambert_fragment:Co,lights_lambert_pars_fragment:Po,lights_pars_begin:Lo,lights_toon_fragment:Uo,lights_toon_pars_fragment:Do,lights_phong_fragment:yo,lights_phong_pars_fragment:Io,lights_physical_fragment:No,lights_physical_pars_fragment:Oo,lights_fragment_begin:Fo,lights_fragment_maps:Bo,lights_fragment_end:Go,logdepthbuf_fragment:Ho,logdepthbuf_pars_fragment:Vo,logdepthbuf_pars_vertex:ko,logdepthbuf_vertex:Wo,map_fragment:zo,map_pars_fragment:Xo,map_particle_fragment:Yo,map_particle_pars_fragment:qo,metalnessmap_fragment:Ko,metalnessmap_pars_fragment:Zo,morphinstance_vertex:$o,morphcolor_vertex:Jo,morphnormal_vertex:Qo,morphtarget_pars_vertex:jo,morphtarget_vertex:es,normal_fragment_begin:ts,normal_fragment_maps:ns,normal_pars_fragment:is,normal_pars_vertex:as,normal_vertex:rs,normalmap_pars_fragment:os,clearcoat_normal_fragment_begin:ss,clearcoat_normal_fragment_maps:cs,clearcoat_pars_fragment:ls,iridescence_pars_fragment:fs,opaque_fragment:ds,packing:us,premultiplied_alpha_fragment:ps,project_vertex:hs,dithering_fragment:ms,dithering_pars_fragment:_s,roughnessmap_fragment:gs,roughnessmap_pars_fragment:vs,shadowmap_pars_fragment:Es,shadowmap_pars_vertex:Ss,shadowmap_vertex:Ms,shadowmask_pars_fragment:Ts,skinbase_vertex:xs,skinning_pars_vertex:As,skinning_vertex:Rs,skinnormal_vertex:bs,specularmap_fragment:Cs,specularmap_pars_fragment:Ps,tonemapping_fragment:Ls,tonemapping_pars_fragment:ws,transmission_fragment:Us,transmission_pars_fragment:Ds,uv_pars_fragment:ys,uv_pars_vertex:Is,uv_vertex:Ns,worldpos_vertex:Os,background_vert:Fs,background_frag:Bs,backgroundCube_vert:Gs,backgroundCube_frag:Hs,cube_vert:Vs,cube_frag:ks,depth_vert:Ws,depth_frag:zs,distanceRGBA_vert:Xs,distanceRGBA_frag:Ys,equirect_vert:qs,equirect_frag:Ks,linedashed_vert:Zs,linedashed_frag:$s,meshbasic_vert:Js,meshbasic_frag:Qs,meshlambert_vert:js,meshlambert_frag:ec,meshmatcap_vert:tc,meshmatcap_frag:nc,meshnormal_vert:ic,meshnormal_frag:ac,meshphong_vert:rc,meshphong_frag:oc,meshphysical_vert:sc,meshphysical_frag:cc,meshtoon_vert:lc,meshtoon_frag:fc,points_vert:dc,points_frag:uc,shadow_vert:pc,shadow_frag:hc,sprite_vert:mc,sprite_frag:_c},ee={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},mt={basic:{uniforms:rt([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:rt([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:rt([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:rt([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:rt([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:rt([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:rt([ee.points,ee.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:rt([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:rt([ee.common,ee.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:rt([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:rt([ee.sprite,ee.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:rt([ee.common,ee.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:rt([ee.lights,ee.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};mt.physical={uniforms:rt([mt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const Zt={r:0,b:0,g:0},At=new Bi,gc=new Ut;function vc(e,n,t,i,c,s,h){const d=new Ze(0);let U=s===!0?0:1,M,y,R=null,S=0,A=null;function N(L){let x=L.isScene===!0?L.background:null;return x&&x.isTexture&&(x=(L.backgroundBlurriness>0?t:n).get(x)),x}function C(L){let x=!1;const m=N(L);m===null?a(d,U):m&&m.isColor&&(a(m,1),x=!0);const Q=e.xr.getEnvironmentBlendMode();Q==="additive"?i.buffers.color.setClear(0,0,0,1,h):Q==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,h),(e.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function l(L,x){const m=N(x);m&&(m.isCubeTexture||m.mapping===Pn)?(y===void 0&&(y=new an(new _r(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:vi(mt.backgroundCube.uniforms),vertexShader:mt.backgroundCube.vertexShader,fragmentShader:mt.backgroundCube.fragmentShader,side:pt,depthTest:!1,depthWrite:!1,fog:!1})),y.geometry.deleteAttribute("normal"),y.geometry.deleteAttribute("uv"),y.onBeforeRender=function(Q,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(y.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(y)),At.copy(x.backgroundRotation),At.x*=-1,At.y*=-1,At.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(At.y*=-1,At.z*=-1),y.material.uniforms.envMap.value=m,y.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,y.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,y.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,y.material.uniforms.backgroundRotation.value.setFromMatrix4(gc.makeRotationFromEuler(At)),y.material.toneMapped=je.getTransfer(m.colorSpace)!==qe,(R!==m||S!==m.version||A!==e.toneMapping)&&(y.material.needsUpdate=!0,R=m,S=m.version,A=e.toneMapping),y.layers.enableAll(),L.unshift(y,y.geometry,y.material,0,0,null)):m&&m.isTexture&&(M===void 0&&(M=new an(new Zi(2,2),new rn({name:"BackgroundMaterial",uniforms:vi(mt.background.uniforms),vertexShader:mt.background.vertexShader,fragmentShader:mt.background.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),M.geometry.deleteAttribute("normal"),Object.defineProperty(M.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(M)),M.material.uniforms.t2D.value=m,M.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,M.material.toneMapped=je.getTransfer(m.colorSpace)!==qe,m.matrixAutoUpdate===!0&&m.updateMatrix(),M.material.uniforms.uvTransform.value.copy(m.matrix),(R!==m||S!==m.version||A!==e.toneMapping)&&(M.material.needsUpdate=!0,R=m,S=m.version,A=e.toneMapping),M.layers.enableAll(),L.unshift(M,M.geometry,M.material,0,0,null))}function a(L,x){L.getRGB(Zt,$i(e)),i.buffers.color.setClear(Zt.r,Zt.g,Zt.b,x,h)}return{getClearColor:function(){return d},setClearColor:function(L,x=1){d.set(L),U=x,a(d,U)},getClearAlpha:function(){return U},setClearAlpha:function(L){U=L,a(d,U)},render:C,addToRenderList:l}}function Ec(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},c=S(null);let s=c,h=!1;function d(f,T,Y,G,X){let $=!1;const V=R(G,Y,T);s!==V&&(s=V,M(s.object)),$=A(f,G,Y,X),$&&N(f,G,Y,X),X!==null&&n.update(X,e.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,m(f,T,Y,G),X!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(X).buffer))}function U(){return e.createVertexArray()}function M(f){return e.bindVertexArray(f)}function y(f){return e.deleteVertexArray(f)}function R(f,T,Y){const G=Y.wireframe===!0;let X=i[f.id];X===void 0&&(X={},i[f.id]=X);let $=X[T.id];$===void 0&&($={},X[T.id]=$);let V=$[G];return V===void 0&&(V=S(U()),$[G]=V),V}function S(f){const T=[],Y=[],G=[];for(let X=0;X<t;X++)T[X]=0,Y[X]=0,G[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:Y,attributeDivisors:G,object:f,attributes:{},index:null}}function A(f,T,Y,G){const X=s.attributes,$=T.attributes;let V=0;const j=Y.getAttributes();for(const F in j)if(j[F].location>=0){const Se=X[F];let Le=$[F];if(Le===void 0&&(F==="instanceMatrix"&&f.instanceMatrix&&(Le=f.instanceMatrix),F==="instanceColor"&&f.instanceColor&&(Le=f.instanceColor)),Se===void 0||Se.attribute!==Le||Le&&Se.data!==Le.data)return!0;V++}return s.attributesNum!==V||s.index!==G}function N(f,T,Y,G){const X={},$=T.attributes;let V=0;const j=Y.getAttributes();for(const F in j)if(j[F].location>=0){let Se=$[F];Se===void 0&&(F==="instanceMatrix"&&f.instanceMatrix&&(Se=f.instanceMatrix),F==="instanceColor"&&f.instanceColor&&(Se=f.instanceColor));const Le={};Le.attribute=Se,Se&&Se.data&&(Le.data=Se.data),X[F]=Le,V++}s.attributes=X,s.attributesNum=V,s.index=G}function C(){const f=s.newAttributes;for(let T=0,Y=f.length;T<Y;T++)f[T]=0}function l(f){a(f,0)}function a(f,T){const Y=s.newAttributes,G=s.enabledAttributes,X=s.attributeDivisors;Y[f]=1,G[f]===0&&(e.enableVertexAttribArray(f),G[f]=1),X[f]!==T&&(e.vertexAttribDivisor(f,T),X[f]=T)}function L(){const f=s.newAttributes,T=s.enabledAttributes;for(let Y=0,G=T.length;Y<G;Y++)T[Y]!==f[Y]&&(e.disableVertexAttribArray(Y),T[Y]=0)}function x(f,T,Y,G,X,$,V){V===!0?e.vertexAttribIPointer(f,T,Y,X,$):e.vertexAttribPointer(f,T,Y,G,X,$)}function m(f,T,Y,G){C();const X=G.attributes,$=Y.getAttributes(),V=T.defaultAttributeValues;for(const j in $){const F=$[j];if(F.location>=0){let _e=X[j];if(_e===void 0&&(j==="instanceMatrix"&&f.instanceMatrix&&(_e=f.instanceMatrix),j==="instanceColor"&&f.instanceColor&&(_e=f.instanceColor)),_e!==void 0){const Se=_e.normalized,Le=_e.itemSize,Be=n.get(_e);if(Be===void 0)continue;const $e=Be.buffer,H=Be.type,J=Be.bytesPerElement,pe=H===e.INT||H===e.UNSIGNED_INT||_e.gpuType===Gi;if(_e.isInterleavedBufferAttribute){const ne=_e.data,Me=ne.stride,Ae=_e.offset;if(ne.isInstancedInterleavedBuffer){for(let we=0;we<F.locationSize;we++)a(F.location+we,ne.meshPerAttribute);f.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let we=0;we<F.locationSize;we++)l(F.location+we);e.bindBuffer(e.ARRAY_BUFFER,$e);for(let we=0;we<F.locationSize;we++)x(F.location+we,Le/F.locationSize,H,Se,Me*J,(Ae+Le/F.locationSize*we)*J,pe)}else{if(_e.isInstancedBufferAttribute){for(let ne=0;ne<F.locationSize;ne++)a(F.location+ne,_e.meshPerAttribute);f.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ne=0;ne<F.locationSize;ne++)l(F.location+ne);e.bindBuffer(e.ARRAY_BUFFER,$e);for(let ne=0;ne<F.locationSize;ne++)x(F.location+ne,Le/F.locationSize,H,Se,Le*J,Le/F.locationSize*ne*J,pe)}}else if(V!==void 0){const Se=V[j];if(Se!==void 0)switch(Se.length){case 2:e.vertexAttrib2fv(F.location,Se);break;case 3:e.vertexAttrib3fv(F.location,Se);break;case 4:e.vertexAttrib4fv(F.location,Se);break;default:e.vertexAttrib1fv(F.location,Se)}}}}L()}function Q(){z();for(const f in i){const T=i[f];for(const Y in T){const G=T[Y];for(const X in G)y(G[X].object),delete G[X];delete T[Y]}delete i[f]}}function D(f){if(i[f.id]===void 0)return;const T=i[f.id];for(const Y in T){const G=T[Y];for(const X in G)y(G[X].object),delete G[X];delete T[Y]}delete i[f.id]}function O(f){for(const T in i){const Y=i[T];if(Y[f.id]===void 0)continue;const G=Y[f.id];for(const X in G)y(G[X].object),delete G[X];delete Y[f.id]}}function z(){p(),h=!0,s!==c&&(s=c,M(s.object))}function p(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:z,resetDefaultState:p,dispose:Q,releaseStatesOfGeometry:D,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:l,disableUnusedAttributes:L}}function Sc(e,n,t){let i;function c(M){i=M}function s(M,y){e.drawArrays(i,M,y),t.update(y,i,1)}function h(M,y,R){R!==0&&(e.drawArraysInstanced(i,M,y,R),t.update(y,i,R))}function d(M,y,R){if(R===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,M,0,y,0,R);let A=0;for(let N=0;N<R;N++)A+=y[N];t.update(A,i,1)}function U(M,y,R,S){if(R===0)return;const A=n.get("WEBGL_multi_draw");if(A===null)for(let N=0;N<M.length;N++)h(M[N],y[N],S[N]);else{A.multiDrawArraysInstancedWEBGL(i,M,0,y,0,S,0,R);let N=0;for(let C=0;C<R;C++)N+=y[C]*S[C];t.update(N,i,1)}}this.setMode=c,this.render=s,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=U}function Mc(e,n,t,i){let c;function s(){if(c!==void 0)return c;if(n.has("EXT_texture_filter_anisotropic")===!0){const O=n.get("EXT_texture_filter_anisotropic");c=e.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function h(O){return!(O!==Tt&&i.convert(O)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const z=O===Ln&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(O!==Pt&&i.convert(O)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==bt&&!z)}function U(O){if(O==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let M=t.precision!==void 0?t.precision:"highp";const y=U(M);y!==M&&(console.warn("THREE.WebGLRenderer:",M,"not supported, using",y,"instead."),M=y);const R=t.logarithmicDepthBuffer===!0,S=t.reverseDepthBuffer===!0&&n.has("EXT_clip_control"),A=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),N=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=e.getParameter(e.MAX_TEXTURE_SIZE),l=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),a=e.getParameter(e.MAX_VERTEX_ATTRIBS),L=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),m=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),Q=N>0,D=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:U,textureFormatReadable:h,textureTypeReadable:d,precision:M,logarithmicDepthBuffer:R,reverseDepthBuffer:S,maxTextures:A,maxVertexTextures:N,maxTextureSize:C,maxCubemapSize:l,maxAttributes:a,maxVertexUniforms:L,maxVaryings:x,maxFragmentUniforms:m,vertexTextures:Q,maxSamples:D}}function Tc(e){const n=this;let t=null,i=0,c=!1,s=!1;const h=new ca,d=new Fe,U={value:null,needsUpdate:!1};this.uniform=U,this.numPlanes=0,this.numIntersection=0,this.init=function(R,S){const A=R.length!==0||S||i!==0||c;return c=S,i=R.length,A},this.beginShadows=function(){s=!0,y(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(R,S){t=y(R,S,0)},this.setState=function(R,S,A){const N=R.clippingPlanes,C=R.clipIntersection,l=R.clipShadows,a=e.get(R);if(!c||N===null||N.length===0||s&&!l)s?y(null):M();else{const L=s?0:i,x=L*4;let m=a.clippingState||null;U.value=m,m=y(N,S,x,A);for(let Q=0;Q!==x;++Q)m[Q]=t[Q];a.clippingState=m,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=L}};function M(){U.value!==t&&(U.value=t,U.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function y(R,S,A,N){const C=R!==null?R.length:0;let l=null;if(C!==0){if(l=U.value,N!==!0||l===null){const a=A+C*4,L=S.matrixWorldInverse;d.getNormalMatrix(L),(l===null||l.length<a)&&(l=new Float32Array(a));for(let x=0,m=A;x!==C;++x,m+=4)h.copy(R[x]).applyMatrix4(L,d),h.normal.toArray(l,m),l[m+3]=h.constant}U.value=l,U.needsUpdate=!0}return n.numPlanes=C,n.numIntersection=0,l}}function xc(e){let n=new WeakMap;function t(h,d){return d===vn?h.mapping=wn:d===En&&(h.mapping=on),h}function i(h){if(h&&h.isTexture){const d=h.mapping;if(d===vn||d===En)if(n.has(h)){const U=n.get(h).texture;return t(U,h.mapping)}else{const U=h.image;if(U&&U.height>0){const M=new gr(U.height);return M.fromEquirectangularTexture(e,h),n.set(h,M),h.addEventListener("dispose",c),t(M.texture,h.mapping)}else return null}}return h}function c(h){const d=h.target;d.removeEventListener("dispose",c);const U=n.get(d);U!==void 0&&(n.delete(d),U.dispose())}function s(){n=new WeakMap}return{get:i,dispose:s}}function Ac(e){let n=new WeakMap,t=null;function i(d){if(d&&d.isTexture){const U=d.mapping,M=U===vn||U===En,y=U===wn||U===on;if(M||y){let R=n.get(d);const S=R!==void 0?R.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return t===null&&(t=new Ei(e)),R=M?t.fromEquirectangular(d,R):t.fromCubemap(d,R),R.texture.pmremVersion=d.pmremVersion,n.set(d,R),R.texture;if(R!==void 0)return R.texture;{const A=d.image;return M&&A&&A.height>0||y&&A&&c(A)?(t===null&&(t=new Ei(e)),R=M?t.fromEquirectangular(d):t.fromCubemap(d),R.texture.pmremVersion=d.pmremVersion,n.set(d,R),d.addEventListener("dispose",s),R.texture):null}}}return d}function c(d){let U=0;const M=6;for(let y=0;y<M;y++)d[y]!==void 0&&U++;return U===M}function s(d){const U=d.target;U.removeEventListener("dispose",s);const M=n.get(U);M!==void 0&&(n.delete(U),M.dispose())}function h(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:h}}function Rc(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let c;switch(i){case"WEBGL_depth_texture":c=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":c=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":c=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":c=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:c=e.getExtension(i)}return n[i]=c,c}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const c=t(i);return c===null&&Ft("THREE.WebGLRenderer: "+i+" extension not supported."),c}}}function bc(e,n,t,i){const c={},s=new WeakMap;function h(R){const S=R.target;S.index!==null&&n.remove(S.index);for(const N in S.attributes)n.remove(S.attributes[N]);for(const N in S.morphAttributes){const C=S.morphAttributes[N];for(let l=0,a=C.length;l<a;l++)n.remove(C[l])}S.removeEventListener("dispose",h),delete c[S.id];const A=s.get(S);A&&(n.remove(A),s.delete(S)),i.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function d(R,S){return c[S.id]===!0||(S.addEventListener("dispose",h),c[S.id]=!0,t.memory.geometries++),S}function U(R){const S=R.attributes;for(const N in S)n.update(S[N],e.ARRAY_BUFFER);const A=R.morphAttributes;for(const N in A){const C=A[N];for(let l=0,a=C.length;l<a;l++)n.update(C[l],e.ARRAY_BUFFER)}}function M(R){const S=[],A=R.index,N=R.attributes.position;let C=0;if(A!==null){const L=A.array;C=A.version;for(let x=0,m=L.length;x<m;x+=3){const Q=L[x+0],D=L[x+1],O=L[x+2];S.push(Q,D,D,O,O,Q)}}else if(N!==void 0){const L=N.array;C=N.version;for(let x=0,m=L.length/3-1;x<m;x+=3){const Q=x+0,D=x+1,O=x+2;S.push(Q,D,D,O,O,Q)}}else return;const l=new(Sr(S)?vr:Er)(S,1);l.version=C;const a=s.get(R);a&&n.remove(a),s.set(R,l)}function y(R){const S=s.get(R);if(S){const A=R.index;A!==null&&S.version<A.version&&M(R)}else M(R);return s.get(R)}return{get:d,update:U,getWireframeAttribute:y}}function Cc(e,n,t){let i;function c(S){i=S}let s,h;function d(S){s=S.type,h=S.bytesPerElement}function U(S,A){e.drawElements(i,A,s,S*h),t.update(A,i,1)}function M(S,A,N){N!==0&&(e.drawElementsInstanced(i,A,s,S*h,N),t.update(A,i,N))}function y(S,A,N){if(N===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,A,0,s,S,0,N);let l=0;for(let a=0;a<N;a++)l+=A[a];t.update(l,i,1)}function R(S,A,N,C){if(N===0)return;const l=n.get("WEBGL_multi_draw");if(l===null)for(let a=0;a<S.length;a++)M(S[a]/h,A[a],C[a]);else{l.multiDrawElementsInstancedWEBGL(i,A,0,s,S,0,C,0,N);let a=0;for(let L=0;L<N;L++)a+=A[L]*C[L];t.update(a,i,1)}}this.setMode=c,this.setIndex=d,this.render=U,this.renderInstances=M,this.renderMultiDraw=y,this.renderMultiDrawInstances=R}function Pc(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,h,d){switch(t.calls++,h){case e.TRIANGLES:t.triangles+=d*(s/3);break;case e.LINES:t.lines+=d*(s/2);break;case e.LINE_STRIP:t.lines+=d*(s-1);break;case e.LINE_LOOP:t.lines+=d*s;break;case e.POINTS:t.points+=d*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function c(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:c,update:i}}function Lc(e,n,t){const i=new WeakMap,c=new ot;function s(h,d,U){const M=h.morphTargetInfluences,y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,R=y!==void 0?y.length:0;let S=i.get(d);if(S===void 0||S.count!==R){let p=function(){O.dispose(),i.delete(d),d.removeEventListener("dispose",p)};S!==void 0&&S.texture.dispose();const A=d.morphAttributes.position!==void 0,N=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,l=d.morphAttributes.position||[],a=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let x=0;A===!0&&(x=1),N===!0&&(x=2),C===!0&&(x=3);let m=d.attributes.position.count*x,Q=1;m>n.maxTextureSize&&(Q=Math.ceil(m/n.maxTextureSize),m=n.maxTextureSize);const D=new Float32Array(m*Q*4*R),O=new Ji(D,m,Q,R);O.type=bt,O.needsUpdate=!0;const z=x*4;for(let f=0;f<R;f++){const T=l[f],Y=a[f],G=L[f],X=m*Q*4*f;for(let $=0;$<T.count;$++){const V=$*z;A===!0&&(c.fromBufferAttribute(T,$),D[X+V+0]=c.x,D[X+V+1]=c.y,D[X+V+2]=c.z,D[X+V+3]=0),N===!0&&(c.fromBufferAttribute(Y,$),D[X+V+4]=c.x,D[X+V+5]=c.y,D[X+V+6]=c.z,D[X+V+7]=0),C===!0&&(c.fromBufferAttribute(G,$),D[X+V+8]=c.x,D[X+V+9]=c.y,D[X+V+10]=c.z,D[X+V+11]=G.itemSize===4?c.w:1)}}S={count:R,texture:O,size:new st(m,Q)},i.set(d,S),d.addEventListener("dispose",p)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)U.getUniforms().setValue(e,"morphTexture",h.morphTexture,t);else{let A=0;for(let C=0;C<M.length;C++)A+=M[C];const N=d.morphTargetsRelative?1:1-A;U.getUniforms().setValue(e,"morphTargetBaseInfluence",N),U.getUniforms().setValue(e,"morphTargetInfluences",M)}U.getUniforms().setValue(e,"morphTargetsTexture",S.texture,t),U.getUniforms().setValue(e,"morphTargetsTextureSize",S.size)}return{update:s}}function wc(e,n,t,i){let c=new WeakMap;function s(U){const M=i.render.frame,y=U.geometry,R=n.get(U,y);if(c.get(R)!==M&&(n.update(R),c.set(R,M)),U.isInstancedMesh&&(U.hasEventListener("dispose",d)===!1&&U.addEventListener("dispose",d),c.get(U)!==M&&(t.update(U.instanceMatrix,e.ARRAY_BUFFER),U.instanceColor!==null&&t.update(U.instanceColor,e.ARRAY_BUFFER),c.set(U,M))),U.isSkinnedMesh){const S=U.skeleton;c.get(S)!==M&&(S.update(),c.set(S,M))}return R}function h(){c=new WeakMap}function d(U){const M=U.target;M.removeEventListener("dispose",d),t.remove(M.instanceMatrix),M.instanceColor!==null&&t.remove(M.instanceColor)}return{update:s,dispose:h}}const ta=new ji,Mi=new Qi(1,1),na=new Ji,ia=new Tr,aa=new Mr,Ti=[],xi=[],Ai=new Float32Array(16),Ri=new Float32Array(9),bi=new Float32Array(4);function Dt(e,n,t){const i=e[0];if(i<=0||i>0)return e;const c=n*t;let s=Ti[c];if(s===void 0&&(s=new Float32Array(c),Ti[c]=s),n!==0){i.toArray(s,0);for(let h=1,d=0;h!==n;++h)d+=t,e[h].toArray(s,d)}return s}function tt(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function nt(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function sn(e,n){let t=xi[n];t===void 0&&(t=new Int32Array(n),xi[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Uc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Dc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(tt(t,n))return;e.uniform2fv(this.addr,n),nt(t,n)}}function yc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(tt(t,n))return;e.uniform3fv(this.addr,n),nt(t,n)}}function Ic(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(tt(t,n))return;e.uniform4fv(this.addr,n),nt(t,n)}}function Nc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(tt(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),nt(t,n)}else{if(tt(t,i))return;bi.set(i),e.uniformMatrix2fv(this.addr,!1,bi),nt(t,i)}}function Oc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(tt(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),nt(t,n)}else{if(tt(t,i))return;Ri.set(i),e.uniformMatrix3fv(this.addr,!1,Ri),nt(t,i)}}function Fc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(tt(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),nt(t,n)}else{if(tt(t,i))return;Ai.set(i),e.uniformMatrix4fv(this.addr,!1,Ai),nt(t,i)}}function Bc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Gc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(tt(t,n))return;e.uniform2iv(this.addr,n),nt(t,n)}}function Hc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(tt(t,n))return;e.uniform3iv(this.addr,n),nt(t,n)}}function Vc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(tt(t,n))return;e.uniform4iv(this.addr,n),nt(t,n)}}function kc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Wc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(tt(t,n))return;e.uniform2uiv(this.addr,n),nt(t,n)}}function zc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(tt(t,n))return;e.uniform3uiv(this.addr,n),nt(t,n)}}function Xc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(tt(t,n))return;e.uniform4uiv(this.addr,n),nt(t,n)}}function Yc(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c);let s;this.type===e.SAMPLER_2D_SHADOW?(Mi.compareFunction=Hi,s=Mi):s=ta,t.setTexture2D(n||s,c)}function qc(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c),t.setTexture3D(n||ia,c)}function Kc(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c),t.setTextureCube(n||aa,c)}function Zc(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c),t.setTexture2DArray(n||na,c)}function $c(e){switch(e){case 5126:return Uc;case 35664:return Dc;case 35665:return yc;case 35666:return Ic;case 35674:return Nc;case 35675:return Oc;case 35676:return Fc;case 5124:case 35670:return Bc;case 35667:case 35671:return Gc;case 35668:case 35672:return Hc;case 35669:case 35673:return Vc;case 5125:return kc;case 36294:return Wc;case 36295:return zc;case 36296:return Xc;case 35678:case 36198:case 36298:case 36306:case 35682:return Yc;case 35679:case 36299:case 36307:return qc;case 35680:case 36300:case 36308:case 36293:return Kc;case 36289:case 36303:case 36311:case 36292:return Zc}}function Jc(e,n){e.uniform1fv(this.addr,n)}function Qc(e,n){const t=Dt(n,this.size,2);e.uniform2fv(this.addr,t)}function jc(e,n){const t=Dt(n,this.size,3);e.uniform3fv(this.addr,t)}function el(e,n){const t=Dt(n,this.size,4);e.uniform4fv(this.addr,t)}function tl(e,n){const t=Dt(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function nl(e,n){const t=Dt(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function il(e,n){const t=Dt(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function al(e,n){e.uniform1iv(this.addr,n)}function rl(e,n){e.uniform2iv(this.addr,n)}function ol(e,n){e.uniform3iv(this.addr,n)}function sl(e,n){e.uniform4iv(this.addr,n)}function cl(e,n){e.uniform1uiv(this.addr,n)}function ll(e,n){e.uniform2uiv(this.addr,n)}function fl(e,n){e.uniform3uiv(this.addr,n)}function dl(e,n){e.uniform4uiv(this.addr,n)}function ul(e,n,t){const i=this.cache,c=n.length,s=sn(t,c);tt(i,s)||(e.uniform1iv(this.addr,s),nt(i,s));for(let h=0;h!==c;++h)t.setTexture2D(n[h]||ta,s[h])}function pl(e,n,t){const i=this.cache,c=n.length,s=sn(t,c);tt(i,s)||(e.uniform1iv(this.addr,s),nt(i,s));for(let h=0;h!==c;++h)t.setTexture3D(n[h]||ia,s[h])}function hl(e,n,t){const i=this.cache,c=n.length,s=sn(t,c);tt(i,s)||(e.uniform1iv(this.addr,s),nt(i,s));for(let h=0;h!==c;++h)t.setTextureCube(n[h]||aa,s[h])}function ml(e,n,t){const i=this.cache,c=n.length,s=sn(t,c);tt(i,s)||(e.uniform1iv(this.addr,s),nt(i,s));for(let h=0;h!==c;++h)t.setTexture2DArray(n[h]||na,s[h])}function _l(e){switch(e){case 5126:return Jc;case 35664:return Qc;case 35665:return jc;case 35666:return el;case 35674:return tl;case 35675:return nl;case 35676:return il;case 5124:case 35670:return al;case 35667:case 35671:return rl;case 35668:case 35672:return ol;case 35669:case 35673:return sl;case 5125:return cl;case 36294:return ll;case 36295:return fl;case 36296:return dl;case 35678:case 36198:case 36298:case 36306:case 35682:return ul;case 35679:case 36299:case 36307:return pl;case 35680:case 36300:case 36308:case 36293:return hl;case 36289:case 36303:case 36311:case 36292:return ml}}class gl{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$c(t.type)}}class vl{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_l(t.type)}}class El{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const c=this.seq;for(let s=0,h=c.length;s!==h;++s){const d=c[s];d.setValue(n,t[d.id],i)}}}const _n=/(\w+)(\])?(\[|\.)?/g;function Ci(e,n){e.seq.push(n),e.map[n.id]=n}function Sl(e,n,t){const i=e.name,c=i.length;for(_n.lastIndex=0;;){const s=_n.exec(i),h=_n.lastIndex;let d=s[1];const U=s[2]==="]",M=s[3];if(U&&(d=d|0),M===void 0||M==="["&&h+2===c){Ci(t,M===void 0?new gl(d,e,n):new vl(d,e,n));break}else{let R=t.map[d];R===void 0&&(R=new El(d),Ci(t,R)),t=R}}}class jt{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const s=n.getActiveUniform(t,c),h=n.getUniformLocation(t,s.name);Sl(s,h,this)}}setValue(n,t,i,c){const s=this.map[t];s!==void 0&&s.setValue(n,i,c)}setOptional(n,t,i){const c=t[i];c!==void 0&&this.setValue(n,i,c)}static upload(n,t,i,c){for(let s=0,h=t.length;s!==h;++s){const d=t[s],U=i[d.id];U.needsUpdate!==!1&&d.setValue(n,U.value,c)}}static seqWithValue(n,t){const i=[];for(let c=0,s=n.length;c!==s;++c){const h=n[c];h.id in t&&i.push(h)}return i}}function Pi(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const Ml=37297;let Tl=0;function xl(e,n){const t=e.split(`
`),i=[],c=Math.max(n-6,0),s=Math.min(n+6,t.length);for(let h=c;h<s;h++){const d=h+1;i.push(`${d===n?">":" "} ${d}: ${t[h]}`)}return i.join(`
`)}const Li=new Fe;function Al(e){je._getMatrix(Li,je.workingColorSpace,e);const n=`mat3( ${Li.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(e)){case ki:return[n,"LinearTransferOETF"];case qe:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function wi(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),c=e.getShaderInfoLog(n).trim();if(i&&c==="")return"";const s=/ERROR: 0:(\d+)/.exec(c);if(s){const h=parseInt(s[1]);return t.toUpperCase()+`

`+c+`

`+xl(e.getShaderSource(n),h)}else return c}function Rl(e,n){const t=Al(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bl(e,n){let t;switch(n){case _a:t="Linear";break;case ma:t="Reinhard";break;case ha:t="Cineon";break;case pa:t="ACESFilmic";break;case ua:t="AgX";break;case da:t="Neutral";break;case fa:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $t=new et;function Cl(){je.getLuminanceCoefficients($t);const e=$t.x.toFixed(4),n=$t.y.toFixed(4),t=$t.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pl(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bt).join(`
`)}function Ll(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function wl(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let c=0;c<i;c++){const s=e.getActiveAttrib(n,c),h=s.name;let d=1;s.type===e.FLOAT_MAT2&&(d=2),s.type===e.FLOAT_MAT3&&(d=3),s.type===e.FLOAT_MAT4&&(d=4),t[h]={type:s.type,location:e.getAttribLocation(n,h),locationSize:d}}return t}function Bt(e){return e!==""}function Ui(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function Di(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Ul=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cn(e){return e.replace(Ul,yl)}const Dl=new Map;function yl(e,n){let t=Pe[n];if(t===void 0){const i=Dl.get(n);if(i!==void 0)t=Pe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return Cn(t)}const Il=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yi(e){return e.replace(Il,Nl)}function Nl(e,n,t,i){let c="";for(let s=parseInt(n);s<parseInt(t);s++)c+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return c}function Ii(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function Ol(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Vi?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===la?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===vt&&(n="SHADOWMAP_TYPE_VSM"),n}function Fl(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case wn:case on:n="ENVMAP_TYPE_CUBE";break;case Pn:n="ENVMAP_TYPE_CUBE_UV";break}return n}function Bl(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case on:n="ENVMAP_MODE_REFRACTION";break}return n}function Gl(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Ea:n="ENVMAP_BLENDING_MULTIPLY";break;case va:n="ENVMAP_BLENDING_MIX";break;case ga:n="ENVMAP_BLENDING_ADD";break}return n}function Hl(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Vl(e,n,t,i){const c=e.getContext(),s=t.defines;let h=t.vertexShader,d=t.fragmentShader;const U=Ol(t),M=Fl(t),y=Bl(t),R=Gl(t),S=Hl(t),A=Pl(t),N=Ll(s),C=c.createProgram();let l,a,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N].filter(Bt).join(`
`),l.length>0&&(l+=`
`),a=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N].filter(Bt).join(`
`),a.length>0&&(a+=`
`)):(l=[Ii(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+y:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+U:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bt).join(`
`),a=[Ii(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+M:"",t.envMap?"#define "+y:"",t.envMap?"#define "+R:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+U:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ct?"#define TONE_MAPPING":"",t.toneMapping!==Ct?Pe.tonemapping_pars_fragment:"",t.toneMapping!==Ct?bl("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,Rl("linearToOutputTexel",t.outputColorSpace),Cl(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bt).join(`
`)),h=Cn(h),h=Ui(h,t),h=Di(h,t),d=Cn(d),d=Ui(d,t),d=Di(d,t),h=yi(h),d=yi(d),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,l=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+l,a=["#define varying in",t.glslVersion===Vn?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+a);const x=L+l+h,m=L+a+d,Q=Pi(c,c.VERTEX_SHADER,x),D=Pi(c,c.FRAGMENT_SHADER,m);c.attachShader(C,Q),c.attachShader(C,D),t.index0AttributeName!==void 0?c.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&c.bindAttribLocation(C,0,"position"),c.linkProgram(C);function O(T){if(e.debug.checkShaderErrors){const Y=c.getProgramInfoLog(C).trim(),G=c.getShaderInfoLog(Q).trim(),X=c.getShaderInfoLog(D).trim();let $=!0,V=!0;if(c.getProgramParameter(C,c.LINK_STATUS)===!1)if($=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(c,C,Q,D);else{const j=wi(c,Q,"vertex"),F=wi(c,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(C,c.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+Y+`
`+j+`
`+F)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(G===""||X==="")&&(V=!1);V&&(T.diagnostics={runnable:$,programLog:Y,vertexShader:{log:G,prefix:l},fragmentShader:{log:X,prefix:a}})}c.deleteShader(Q),c.deleteShader(D),z=new jt(c,C),p=wl(c,C)}let z;this.getUniforms=function(){return z===void 0&&O(this),z};let p;this.getAttributes=function(){return p===void 0&&O(this),p};let f=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return f===!1&&(f=c.getProgramParameter(C,Ml)),f},this.destroy=function(){i.releaseStatesOfProgram(this),c.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tl++,this.cacheKey=n,this.usedTimes=1,this.program=C,this.vertexShader=Q,this.fragmentShader=D,this}let kl=0;class Wl{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,c=this._getShaderStage(t),s=this._getShaderStage(i),h=this._getShaderCacheForMaterial(n);return h.has(c)===!1&&(h.add(c),c.usedTimes++),h.has(s)===!1&&(h.add(s),s.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new zl(n),t.set(n,i)),i}}class zl{constructor(n){this.id=kl++,this.code=n,this.usedTimes=0}}function Xl(e,n,t,i,c,s,h){const d=new Ar,U=new Wl,M=new Set,y=[],R=c.logarithmicDepthBuffer,S=c.vertexTextures;let A=c.precision;const N={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(p){return M.add(p),p===0?"uv":`uv${p}`}function l(p,f,T,Y,G){const X=Y.fog,$=G.geometry,V=p.isMeshStandardMaterial?Y.environment:null,j=(p.isMeshStandardMaterial?t:n).get(p.envMap||V),F=j&&j.mapping===Pn?j.image.height:null,_e=N[p.type];p.precision!==null&&(A=c.getMaxPrecision(p.precision),A!==p.precision&&console.warn("THREE.WebGLProgram.getParameters:",p.precision,"not supported, using",A,"instead."));const Se=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Le=Se!==void 0?Se.length:0;let Be=0;$.morphAttributes.position!==void 0&&(Be=1),$.morphAttributes.normal!==void 0&&(Be=2),$.morphAttributes.color!==void 0&&(Be=3);let $e,H,J,pe;if(_e){const Ve=mt[_e];$e=Ve.vertexShader,H=Ve.fragmentShader}else $e=p.vertexShader,H=p.fragmentShader,U.update(p),J=U.getVertexShaderID(p),pe=U.getFragmentShaderID(p);const ne=e.getRenderTarget(),Me=e.state.buffers.depth.getReversed(),Ae=G.isInstancedMesh===!0,we=G.isBatchedMesh===!0,Ke=!!p.map,Ie=!!p.matcap,Qe=!!j,E=!!p.aoMap,lt=!!p.lightMap,Ue=!!p.bumpMap,De=!!p.normalMap,ve=!!p.displacementMap,ze=!!p.emissiveMap,ge=!!p.metalnessMap,u=!!p.roughnessMap,r=p.anisotropy>0,b=p.clearcoat>0,k=p.dispersion>0,q=p.iridescence>0,B=p.sheen>0,he=p.transmission>0,ie=r&&!!p.anisotropyMap,se=b&&!!p.clearcoatMap,Ne=b&&!!p.clearcoatNormalMap,K=b&&!!p.clearcoatRoughnessMap,ce=q&&!!p.iridescenceMap,Ee=q&&!!p.iridescenceThicknessMap,Te=B&&!!p.sheenColorMap,le=B&&!!p.sheenRoughnessMap,ye=!!p.specularMap,Ce=!!p.specularColorMap,ke=!!p.specularIntensityMap,_=he&&!!p.transmissionMap,te=he&&!!p.thicknessMap,I=!!p.gradientMap,W=!!p.alphaMap,oe=p.alphaTest>0,ae=!!p.alphaHash,Re=!!p.extensions;let Je=Ct;p.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Je=e.toneMapping);const it={shaderID:_e,shaderType:p.type,shaderName:p.name,vertexShader:$e,fragmentShader:H,defines:p.defines,customVertexShaderID:J,customFragmentShaderID:pe,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:A,batching:we,batchingColor:we&&G._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&G.instanceColor!==null,instancingMorph:Ae&&G.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ne===null?e.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Un,alphaToCoverage:!!p.alphaToCoverage,map:Ke,matcap:Ie,envMap:Qe,envMapMode:Qe&&j.mapping,envMapCubeUVHeight:F,aoMap:E,lightMap:lt,bumpMap:Ue,normalMap:De,displacementMap:S&&ve,emissiveMap:ze,normalMapObjectSpace:De&&p.normalMapType===Ma,normalMapTangentSpace:De&&p.normalMapType===Sa,metalnessMap:ge,roughnessMap:u,anisotropy:r,anisotropyMap:ie,clearcoat:b,clearcoatMap:se,clearcoatNormalMap:Ne,clearcoatRoughnessMap:K,dispersion:k,iridescence:q,iridescenceMap:ce,iridescenceThicknessMap:Ee,sheen:B,sheenColorMap:Te,sheenRoughnessMap:le,specularMap:ye,specularColorMap:Ce,specularIntensityMap:ke,transmission:he,transmissionMap:_,thicknessMap:te,gradientMap:I,opaque:p.transparent===!1&&p.blending===Jt&&p.alphaToCoverage===!1,alphaMap:W,alphaTest:oe,alphaHash:ae,combine:p.combine,mapUv:Ke&&C(p.map.channel),aoMapUv:E&&C(p.aoMap.channel),lightMapUv:lt&&C(p.lightMap.channel),bumpMapUv:Ue&&C(p.bumpMap.channel),normalMapUv:De&&C(p.normalMap.channel),displacementMapUv:ve&&C(p.displacementMap.channel),emissiveMapUv:ze&&C(p.emissiveMap.channel),metalnessMapUv:ge&&C(p.metalnessMap.channel),roughnessMapUv:u&&C(p.roughnessMap.channel),anisotropyMapUv:ie&&C(p.anisotropyMap.channel),clearcoatMapUv:se&&C(p.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&C(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&C(p.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&C(p.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&C(p.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&C(p.sheenColorMap.channel),sheenRoughnessMapUv:le&&C(p.sheenRoughnessMap.channel),specularMapUv:ye&&C(p.specularMap.channel),specularColorMapUv:Ce&&C(p.specularColorMap.channel),specularIntensityMapUv:ke&&C(p.specularIntensityMap.channel),transmissionMapUv:_&&C(p.transmissionMap.channel),thicknessMapUv:te&&C(p.thicknessMap.channel),alphaMapUv:W&&C(p.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(De||r),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!$.attributes.uv&&(Ke||W),fog:!!X,useFog:p.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:p.flatShading===!0,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:R,reverseDepthBuffer:Me,skinning:G.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Be,numDirLights:f.directional.length,numPointLights:f.point.length,numSpotLights:f.spot.length,numSpotLightMaps:f.spotLightMap.length,numRectAreaLights:f.rectArea.length,numHemiLights:f.hemi.length,numDirLightShadows:f.directionalShadowMap.length,numPointLightShadows:f.pointShadowMap.length,numSpotLightShadows:f.spotShadowMap.length,numSpotLightShadowsWithMaps:f.numSpotLightShadowsWithMaps,numLightProbes:f.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:p.dithering,shadowMapEnabled:e.shadowMap.enabled&&T.length>0,shadowMapType:e.shadowMap.type,toneMapping:Je,decodeVideoTexture:Ke&&p.map.isVideoTexture===!0&&je.getTransfer(p.map.colorSpace)===qe,decodeVideoTextureEmissive:ze&&p.emissiveMap.isVideoTexture===!0&&je.getTransfer(p.emissiveMap.colorSpace)===qe,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===Et,flipSided:p.side===pt,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:Re&&p.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&p.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return it.vertexUv1s=M.has(1),it.vertexUv2s=M.has(2),it.vertexUv3s=M.has(3),M.clear(),it}function a(p){const f=[];if(p.shaderID?f.push(p.shaderID):(f.push(p.customVertexShaderID),f.push(p.customFragmentShaderID)),p.defines!==void 0)for(const T in p.defines)f.push(T),f.push(p.defines[T]);return p.isRawShaderMaterial===!1&&(L(f,p),x(f,p),f.push(e.outputColorSpace)),f.push(p.customProgramCacheKey),f.join()}function L(p,f){p.push(f.precision),p.push(f.outputColorSpace),p.push(f.envMapMode),p.push(f.envMapCubeUVHeight),p.push(f.mapUv),p.push(f.alphaMapUv),p.push(f.lightMapUv),p.push(f.aoMapUv),p.push(f.bumpMapUv),p.push(f.normalMapUv),p.push(f.displacementMapUv),p.push(f.emissiveMapUv),p.push(f.metalnessMapUv),p.push(f.roughnessMapUv),p.push(f.anisotropyMapUv),p.push(f.clearcoatMapUv),p.push(f.clearcoatNormalMapUv),p.push(f.clearcoatRoughnessMapUv),p.push(f.iridescenceMapUv),p.push(f.iridescenceThicknessMapUv),p.push(f.sheenColorMapUv),p.push(f.sheenRoughnessMapUv),p.push(f.specularMapUv),p.push(f.specularColorMapUv),p.push(f.specularIntensityMapUv),p.push(f.transmissionMapUv),p.push(f.thicknessMapUv),p.push(f.combine),p.push(f.fogExp2),p.push(f.sizeAttenuation),p.push(f.morphTargetsCount),p.push(f.morphAttributeCount),p.push(f.numDirLights),p.push(f.numPointLights),p.push(f.numSpotLights),p.push(f.numSpotLightMaps),p.push(f.numHemiLights),p.push(f.numRectAreaLights),p.push(f.numDirLightShadows),p.push(f.numPointLightShadows),p.push(f.numSpotLightShadows),p.push(f.numSpotLightShadowsWithMaps),p.push(f.numLightProbes),p.push(f.shadowMapType),p.push(f.toneMapping),p.push(f.numClippingPlanes),p.push(f.numClipIntersection),p.push(f.depthPacking)}function x(p,f){d.disableAll(),f.supportsVertexTextures&&d.enable(0),f.instancing&&d.enable(1),f.instancingColor&&d.enable(2),f.instancingMorph&&d.enable(3),f.matcap&&d.enable(4),f.envMap&&d.enable(5),f.normalMapObjectSpace&&d.enable(6),f.normalMapTangentSpace&&d.enable(7),f.clearcoat&&d.enable(8),f.iridescence&&d.enable(9),f.alphaTest&&d.enable(10),f.vertexColors&&d.enable(11),f.vertexAlphas&&d.enable(12),f.vertexUv1s&&d.enable(13),f.vertexUv2s&&d.enable(14),f.vertexUv3s&&d.enable(15),f.vertexTangents&&d.enable(16),f.anisotropy&&d.enable(17),f.alphaHash&&d.enable(18),f.batching&&d.enable(19),f.dispersion&&d.enable(20),f.batchingColor&&d.enable(21),p.push(d.mask),d.disableAll(),f.fog&&d.enable(0),f.useFog&&d.enable(1),f.flatShading&&d.enable(2),f.logarithmicDepthBuffer&&d.enable(3),f.reverseDepthBuffer&&d.enable(4),f.skinning&&d.enable(5),f.morphTargets&&d.enable(6),f.morphNormals&&d.enable(7),f.morphColors&&d.enable(8),f.premultipliedAlpha&&d.enable(9),f.shadowMapEnabled&&d.enable(10),f.doubleSided&&d.enable(11),f.flipSided&&d.enable(12),f.useDepthPacking&&d.enable(13),f.dithering&&d.enable(14),f.transmission&&d.enable(15),f.sheen&&d.enable(16),f.opaque&&d.enable(17),f.pointsUvs&&d.enable(18),f.decodeVideoTexture&&d.enable(19),f.decodeVideoTextureEmissive&&d.enable(20),f.alphaToCoverage&&d.enable(21),p.push(d.mask)}function m(p){const f=N[p.type];let T;if(f){const Y=mt[f];T=xr.clone(Y.uniforms)}else T=p.uniforms;return T}function Q(p,f){let T;for(let Y=0,G=y.length;Y<G;Y++){const X=y[Y];if(X.cacheKey===f){T=X,++T.usedTimes;break}}return T===void 0&&(T=new Vl(e,f,p,s),y.push(T)),T}function D(p){if(--p.usedTimes===0){const f=y.indexOf(p);y[f]=y[y.length-1],y.pop(),p.destroy()}}function O(p){U.remove(p)}function z(){U.dispose()}return{getParameters:l,getProgramCacheKey:a,getUniforms:m,acquireProgram:Q,releaseProgram:D,releaseShaderCache:O,programs:y,dispose:z}}function Yl(){let e=new WeakMap;function n(h){return e.has(h)}function t(h){let d=e.get(h);return d===void 0&&(d={},e.set(h,d)),d}function i(h){e.delete(h)}function c(h,d,U){e.get(h)[d]=U}function s(){e=new WeakMap}return{has:n,get:t,remove:i,update:c,dispose:s}}function ql(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function Ni(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Oi(){const e=[];let n=0;const t=[],i=[],c=[];function s(){n=0,t.length=0,i.length=0,c.length=0}function h(R,S,A,N,C,l){let a=e[n];return a===void 0?(a={id:R.id,object:R,geometry:S,material:A,groupOrder:N,renderOrder:R.renderOrder,z:C,group:l},e[n]=a):(a.id=R.id,a.object=R,a.geometry=S,a.material=A,a.groupOrder=N,a.renderOrder=R.renderOrder,a.z=C,a.group=l),n++,a}function d(R,S,A,N,C,l){const a=h(R,S,A,N,C,l);A.transmission>0?i.push(a):A.transparent===!0?c.push(a):t.push(a)}function U(R,S,A,N,C,l){const a=h(R,S,A,N,C,l);A.transmission>0?i.unshift(a):A.transparent===!0?c.unshift(a):t.unshift(a)}function M(R,S){t.length>1&&t.sort(R||ql),i.length>1&&i.sort(S||Ni),c.length>1&&c.sort(S||Ni)}function y(){for(let R=n,S=e.length;R<S;R++){const A=e[R];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:t,transmissive:i,transparent:c,init:s,push:d,unshift:U,finish:y,sort:M}}function Kl(){let e=new WeakMap;function n(i,c){const s=e.get(i);let h;return s===void 0?(h=new Oi,e.set(i,[h])):c>=s.length?(h=new Oi,s.push(h)):h=s[c],h}function t(){e=new WeakMap}return{get:n,dispose:t}}function Zl(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new et,color:new Ze};break;case"SpotLight":t={position:new et,direction:new et,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new et,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new et,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new et,halfWidth:new et,halfHeight:new et};break}return e[n.id]=t,t}}}function $l(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let Jl=0;function Ql(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function jl(e){const n=new Zl,t=$l(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let M=0;M<9;M++)i.probe.push(new et);const c=new et,s=new Ut,h=new Ut;function d(M){let y=0,R=0,S=0;for(let p=0;p<9;p++)i.probe[p].set(0,0,0);let A=0,N=0,C=0,l=0,a=0,L=0,x=0,m=0,Q=0,D=0,O=0;M.sort(Ql);for(let p=0,f=M.length;p<f;p++){const T=M[p],Y=T.color,G=T.intensity,X=T.distance,$=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)y+=Y.r*G,R+=Y.g*G,S+=Y.b*G;else if(T.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(T.sh.coefficients[V],G);O++}else if(T.isDirectionalLight){const V=n.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const j=T.shadow,F=t.get(T);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,i.directionalShadow[A]=F,i.directionalShadowMap[A]=$,i.directionalShadowMatrix[A]=T.shadow.matrix,L++}i.directional[A]=V,A++}else if(T.isSpotLight){const V=n.get(T);V.position.setFromMatrixPosition(T.matrixWorld),V.color.copy(Y).multiplyScalar(G),V.distance=X,V.coneCos=Math.cos(T.angle),V.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),V.decay=T.decay,i.spot[C]=V;const j=T.shadow;if(T.map&&(i.spotLightMap[Q]=T.map,Q++,j.updateMatrices(T),T.castShadow&&D++),i.spotLightMatrix[C]=j.matrix,T.castShadow){const F=t.get(T);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,i.spotShadow[C]=F,i.spotShadowMap[C]=$,m++}C++}else if(T.isRectAreaLight){const V=n.get(T);V.color.copy(Y).multiplyScalar(G),V.halfWidth.set(T.width*.5,0,0),V.halfHeight.set(0,T.height*.5,0),i.rectArea[l]=V,l++}else if(T.isPointLight){const V=n.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),V.distance=T.distance,V.decay=T.decay,T.castShadow){const j=T.shadow,F=t.get(T);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,F.shadowCameraNear=j.camera.near,F.shadowCameraFar=j.camera.far,i.pointShadow[N]=F,i.pointShadowMap[N]=$,i.pointShadowMatrix[N]=T.shadow.matrix,x++}i.point[N]=V,N++}else if(T.isHemisphereLight){const V=n.get(T);V.skyColor.copy(T.color).multiplyScalar(G),V.groundColor.copy(T.groundColor).multiplyScalar(G),i.hemi[a]=V,a++}}l>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ee.LTC_FLOAT_1,i.rectAreaLTC2=ee.LTC_FLOAT_2):(i.rectAreaLTC1=ee.LTC_HALF_1,i.rectAreaLTC2=ee.LTC_HALF_2)),i.ambient[0]=y,i.ambient[1]=R,i.ambient[2]=S;const z=i.hash;(z.directionalLength!==A||z.pointLength!==N||z.spotLength!==C||z.rectAreaLength!==l||z.hemiLength!==a||z.numDirectionalShadows!==L||z.numPointShadows!==x||z.numSpotShadows!==m||z.numSpotMaps!==Q||z.numLightProbes!==O)&&(i.directional.length=A,i.spot.length=C,i.rectArea.length=l,i.point.length=N,i.hemi.length=a,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=m,i.spotShadowMap.length=m,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=m+Q-D,i.spotLightMap.length=Q,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=O,z.directionalLength=A,z.pointLength=N,z.spotLength=C,z.rectAreaLength=l,z.hemiLength=a,z.numDirectionalShadows=L,z.numPointShadows=x,z.numSpotShadows=m,z.numSpotMaps=Q,z.numLightProbes=O,i.version=Jl++)}function U(M,y){let R=0,S=0,A=0,N=0,C=0;const l=y.matrixWorldInverse;for(let a=0,L=M.length;a<L;a++){const x=M[a];if(x.isDirectionalLight){const m=i.directional[R];m.direction.setFromMatrixPosition(x.matrixWorld),c.setFromMatrixPosition(x.target.matrixWorld),m.direction.sub(c),m.direction.transformDirection(l),R++}else if(x.isSpotLight){const m=i.spot[A];m.position.setFromMatrixPosition(x.matrixWorld),m.position.applyMatrix4(l),m.direction.setFromMatrixPosition(x.matrixWorld),c.setFromMatrixPosition(x.target.matrixWorld),m.direction.sub(c),m.direction.transformDirection(l),A++}else if(x.isRectAreaLight){const m=i.rectArea[N];m.position.setFromMatrixPosition(x.matrixWorld),m.position.applyMatrix4(l),h.identity(),s.copy(x.matrixWorld),s.premultiply(l),h.extractRotation(s),m.halfWidth.set(x.width*.5,0,0),m.halfHeight.set(0,x.height*.5,0),m.halfWidth.applyMatrix4(h),m.halfHeight.applyMatrix4(h),N++}else if(x.isPointLight){const m=i.point[S];m.position.setFromMatrixPosition(x.matrixWorld),m.position.applyMatrix4(l),S++}else if(x.isHemisphereLight){const m=i.hemi[C];m.direction.setFromMatrixPosition(x.matrixWorld),m.direction.transformDirection(l),C++}}}return{setup:d,setupView:U,state:i}}function Fi(e){const n=new jl(e),t=[],i=[];function c(y){M.camera=y,t.length=0,i.length=0}function s(y){t.push(y)}function h(y){i.push(y)}function d(){n.setup(t)}function U(y){n.setupView(t,y)}const M={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:c,state:M,setupLights:d,setupLightsView:U,pushLight:s,pushShadow:h}}function ef(e){let n=new WeakMap;function t(c,s=0){const h=n.get(c);let d;return h===void 0?(d=new Fi(e),n.set(c,[d])):s>=h.length?(d=new Fi(e),h.push(d)):d=h[s],d}function i(){n=new WeakMap}return{get:t,dispose:i}}const tf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,nf=`
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
`;function af(e,n,t){let i=new Wi;const c=new st,s=new st,h=new ot,d=new Rr({depthPacking:Ta}),U=new br,M={},y=t.maxTextureSize,R={[Ht]:pt,[pt]:Ht,[Et]:Et},S=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:tf,fragmentShader:nf}),A=S.clone();A.defines.HORIZONTAL_PASS=1;const N=new Cr;N.setAttribute("position",new Pr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new an(N,S),l=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vi;let a=this.type;this.render=function(D,O,z){if(l.enabled===!1||l.autoUpdate===!1&&l.needsUpdate===!1||D.length===0)return;const p=e.getRenderTarget(),f=e.getActiveCubeFace(),T=e.getActiveMipmapLevel(),Y=e.state;Y.setBlending(Qt),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const G=a!==vt&&this.type===vt,X=a===vt&&this.type!==vt;for(let $=0,V=D.length;$<V;$++){const j=D[$],F=j.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;c.copy(F.mapSize);const _e=F.getFrameExtents();if(c.multiply(_e),s.copy(F.mapSize),(c.x>y||c.y>y)&&(c.x>y&&(s.x=Math.floor(y/_e.x),c.x=s.x*_e.x,F.mapSize.x=s.x),c.y>y&&(s.y=Math.floor(y/_e.y),c.y=s.y*_e.y,F.mapSize.y=s.y)),F.map===null||G===!0||X===!0){const Le=this.type!==vt?{minFilter:Gt,magFilter:Gt}:{};F.map!==null&&F.map.dispose(),F.map=new Wt(c.x,c.y,Le),F.map.texture.name=j.name+".shadowMap",F.camera.updateProjectionMatrix()}e.setRenderTarget(F.map),e.clear();const Se=F.getViewportCount();for(let Le=0;Le<Se;Le++){const Be=F.getViewport(Le);h.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),Y.viewport(h),F.updateMatrices(j,Le),i=F.getFrustum(),m(O,z,F.camera,j,this.type)}F.isPointLightShadow!==!0&&this.type===vt&&L(F,z),F.needsUpdate=!1}a=this.type,l.needsUpdate=!1,e.setRenderTarget(p,f,T)};function L(D,O){const z=n.update(C);S.defines.VSM_SAMPLES!==D.blurSamples&&(S.defines.VSM_SAMPLES=D.blurSamples,A.defines.VSM_SAMPLES=D.blurSamples,S.needsUpdate=!0,A.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Wt(c.x,c.y)),S.uniforms.shadow_pass.value=D.map.texture,S.uniforms.resolution.value=D.mapSize,S.uniforms.radius.value=D.radius,e.setRenderTarget(D.mapPass),e.clear(),e.renderBufferDirect(O,null,z,S,C,null),A.uniforms.shadow_pass.value=D.mapPass.texture,A.uniforms.resolution.value=D.mapSize,A.uniforms.radius.value=D.radius,e.setRenderTarget(D.map),e.clear(),e.renderBufferDirect(O,null,z,A,C,null)}function x(D,O,z,p){let f=null;const T=z.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(T!==void 0)f=T;else if(f=z.isPointLight===!0?U:d,e.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const Y=f.uuid,G=O.uuid;let X=M[Y];X===void 0&&(X={},M[Y]=X);let $=X[G];$===void 0&&($=f.clone(),X[G]=$,O.addEventListener("dispose",Q)),f=$}if(f.visible=O.visible,f.wireframe=O.wireframe,p===vt?f.side=O.shadowSide!==null?O.shadowSide:O.side:f.side=O.shadowSide!==null?O.shadowSide:R[O.side],f.alphaMap=O.alphaMap,f.alphaTest=O.alphaTest,f.map=O.map,f.clipShadows=O.clipShadows,f.clippingPlanes=O.clippingPlanes,f.clipIntersection=O.clipIntersection,f.displacementMap=O.displacementMap,f.displacementScale=O.displacementScale,f.displacementBias=O.displacementBias,f.wireframeLinewidth=O.wireframeLinewidth,f.linewidth=O.linewidth,z.isPointLight===!0&&f.isMeshDistanceMaterial===!0){const Y=e.properties.get(f);Y.light=z}return f}function m(D,O,z,p,f){if(D.visible===!1)return;if(D.layers.test(O.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&f===vt)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,D.matrixWorld);const G=n.update(D),X=D.material;if(Array.isArray(X)){const $=G.groups;for(let V=0,j=$.length;V<j;V++){const F=$[V],_e=X[F.materialIndex];if(_e&&_e.visible){const Se=x(D,_e,p,f);D.onBeforeShadow(e,D,O,z,G,Se,F),e.renderBufferDirect(z,null,G,Se,D,F),D.onAfterShadow(e,D,O,z,G,Se,F)}}}else if(X.visible){const $=x(D,X,p,f);D.onBeforeShadow(e,D,O,z,G,$,null),e.renderBufferDirect(z,null,G,$,D,null),D.onAfterShadow(e,D,O,z,G,$,null)}}const Y=D.children;for(let G=0,X=Y.length;G<X;G++)m(Y[G],O,z,p,f)}function Q(D){D.target.removeEventListener("dispose",Q);for(const z in M){const p=M[z],f=D.target.uuid;f in p&&(p[f].dispose(),delete p[f])}}}const rf={[bn]:Rn,[An]:Mn,[xn]:Sn,[en]:Tn,[Rn]:bn,[Mn]:An,[Sn]:xn,[Tn]:en};function of(e,n){function t(){let _=!1;const te=new ot;let I=null;const W=new ot(0,0,0,0);return{setMask:function(oe){I!==oe&&!_&&(e.colorMask(oe,oe,oe,oe),I=oe)},setLocked:function(oe){_=oe},setClear:function(oe,ae,Re,Je,it){it===!0&&(oe*=Je,ae*=Je,Re*=Je),te.set(oe,ae,Re,Je),W.equals(te)===!1&&(e.clearColor(oe,ae,Re,Je),W.copy(te))},reset:function(){_=!1,I=null,W.set(-1,0,0,0)}}}function i(){let _=!1,te=!1,I=null,W=null,oe=null;return{setReversed:function(ae){if(te!==ae){const Re=n.get("EXT_clip_control");te?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT);const Je=oe;oe=null,this.setClear(Je)}te=ae},getReversed:function(){return te},setTest:function(ae){ae?ne(e.DEPTH_TEST):Me(e.DEPTH_TEST)},setMask:function(ae){I!==ae&&!_&&(e.depthMask(ae),I=ae)},setFunc:function(ae){if(te&&(ae=rf[ae]),W!==ae){switch(ae){case bn:e.depthFunc(e.NEVER);break;case Rn:e.depthFunc(e.ALWAYS);break;case An:e.depthFunc(e.LESS);break;case en:e.depthFunc(e.LEQUAL);break;case xn:e.depthFunc(e.EQUAL);break;case Tn:e.depthFunc(e.GEQUAL);break;case Mn:e.depthFunc(e.GREATER);break;case Sn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}W=ae}},setLocked:function(ae){_=ae},setClear:function(ae){oe!==ae&&(te&&(ae=1-ae),e.clearDepth(ae),oe=ae)},reset:function(){_=!1,I=null,W=null,oe=null,te=!1}}}function c(){let _=!1,te=null,I=null,W=null,oe=null,ae=null,Re=null,Je=null,it=null;return{setTest:function(Ve){_||(Ve?ne(e.STENCIL_TEST):Me(e.STENCIL_TEST))},setMask:function(Ve){te!==Ve&&!_&&(e.stencilMask(Ve),te=Ve)},setFunc:function(Ve,dt,_t){(I!==Ve||W!==dt||oe!==_t)&&(e.stencilFunc(Ve,dt,_t),I=Ve,W=dt,oe=_t)},setOp:function(Ve,dt,_t){(ae!==Ve||Re!==dt||Je!==_t)&&(e.stencilOp(Ve,dt,_t),ae=Ve,Re=dt,Je=_t)},setLocked:function(Ve){_=Ve},setClear:function(Ve){it!==Ve&&(e.clearStencil(Ve),it=Ve)},reset:function(){_=!1,te=null,I=null,W=null,oe=null,ae=null,Re=null,Je=null,it=null}}}const s=new t,h=new i,d=new c,U=new WeakMap,M=new WeakMap;let y={},R={},S=new WeakMap,A=[],N=null,C=!1,l=null,a=null,L=null,x=null,m=null,Q=null,D=null,O=new Ze(0,0,0),z=0,p=!1,f=null,T=null,Y=null,G=null,X=null;const $=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,j=0;const F=e.getParameter(e.VERSION);F.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(F)[1]),V=j>=1):F.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),V=j>=2);let _e=null,Se={};const Le=e.getParameter(e.SCISSOR_BOX),Be=e.getParameter(e.VIEWPORT),$e=new ot().fromArray(Le),H=new ot().fromArray(Be);function J(_,te,I,W){const oe=new Uint8Array(4),ae=e.createTexture();e.bindTexture(_,ae),e.texParameteri(_,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(_,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Re=0;Re<I;Re++)_===e.TEXTURE_3D||_===e.TEXTURE_2D_ARRAY?e.texImage3D(te,0,e.RGBA,1,1,W,0,e.RGBA,e.UNSIGNED_BYTE,oe):e.texImage2D(te+Re,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,oe);return ae}const pe={};pe[e.TEXTURE_2D]=J(e.TEXTURE_2D,e.TEXTURE_2D,1),pe[e.TEXTURE_CUBE_MAP]=J(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[e.TEXTURE_2D_ARRAY]=J(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),pe[e.TEXTURE_3D]=J(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ne(e.DEPTH_TEST),h.setFunc(en),Ue(!1),De(kn),ne(e.CULL_FACE),E(Qt);function ne(_){y[_]!==!0&&(e.enable(_),y[_]=!0)}function Me(_){y[_]!==!1&&(e.disable(_),y[_]=!1)}function Ae(_,te){return R[_]!==te?(e.bindFramebuffer(_,te),R[_]=te,_===e.DRAW_FRAMEBUFFER&&(R[e.FRAMEBUFFER]=te),_===e.FRAMEBUFFER&&(R[e.DRAW_FRAMEBUFFER]=te),!0):!1}function we(_,te){let I=A,W=!1;if(_){I=S.get(te),I===void 0&&(I=[],S.set(te,I));const oe=_.textures;if(I.length!==oe.length||I[0]!==e.COLOR_ATTACHMENT0){for(let ae=0,Re=oe.length;ae<Re;ae++)I[ae]=e.COLOR_ATTACHMENT0+ae;I.length=oe.length,W=!0}}else I[0]!==e.BACK&&(I[0]=e.BACK,W=!0);W&&e.drawBuffers(I)}function Ke(_){return N!==_?(e.useProgram(_),N=_,!0):!1}const Ie={[Nt]:e.FUNC_ADD,[Aa]:e.FUNC_SUBTRACT,[xa]:e.FUNC_REVERSE_SUBTRACT};Ie[Wa]=e.MIN,Ie[za]=e.MAX;const Qe={[Ga]:e.ZERO,[Ba]:e.ONE,[Fa]:e.SRC_COLOR,[Oa]:e.SRC_ALPHA,[Na]:e.SRC_ALPHA_SATURATE,[Ia]:e.DST_COLOR,[ya]:e.DST_ALPHA,[Da]:e.ONE_MINUS_SRC_COLOR,[Ua]:e.ONE_MINUS_SRC_ALPHA,[wa]:e.ONE_MINUS_DST_COLOR,[La]:e.ONE_MINUS_DST_ALPHA,[Pa]:e.CONSTANT_COLOR,[Ca]:e.ONE_MINUS_CONSTANT_COLOR,[ba]:e.CONSTANT_ALPHA,[Ra]:e.ONE_MINUS_CONSTANT_ALPHA};function E(_,te,I,W,oe,ae,Re,Je,it,Ve){if(_===Qt){C===!0&&(Me(e.BLEND),C=!1);return}if(C===!1&&(ne(e.BLEND),C=!0),_!==ka){if(_!==l||Ve!==p){if((a!==Nt||m!==Nt)&&(e.blendEquation(e.FUNC_ADD),a=Nt,m=Nt),Ve)switch(_){case Jt:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Xn:e.blendFunc(e.ONE,e.ONE);break;case zn:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Wn:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}else switch(_){case Jt:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Xn:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case zn:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Wn:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}L=null,x=null,Q=null,D=null,O.set(0,0,0),z=0,l=_,p=Ve}return}oe=oe||te,ae=ae||I,Re=Re||W,(te!==a||oe!==m)&&(e.blendEquationSeparate(Ie[te],Ie[oe]),a=te,m=oe),(I!==L||W!==x||ae!==Q||Re!==D)&&(e.blendFuncSeparate(Qe[I],Qe[W],Qe[ae],Qe[Re]),L=I,x=W,Q=ae,D=Re),(Je.equals(O)===!1||it!==z)&&(e.blendColor(Je.r,Je.g,Je.b,it),O.copy(Je),z=it),l=_,p=!1}function lt(_,te){_.side===Et?Me(e.CULL_FACE):ne(e.CULL_FACE);let I=_.side===pt;te&&(I=!I),Ue(I),_.blending===Jt&&_.transparent===!1?E(Qt):E(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),h.setFunc(_.depthFunc),h.setTest(_.depthTest),h.setMask(_.depthWrite),s.setMask(_.colorWrite);const W=_.stencilWrite;d.setTest(W),W&&(d.setMask(_.stencilWriteMask),d.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),d.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass)),ze(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?ne(e.SAMPLE_ALPHA_TO_COVERAGE):Me(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(_){f!==_&&(_?e.frontFace(e.CW):e.frontFace(e.CCW),f=_)}function De(_){_!==Ha?(ne(e.CULL_FACE),_!==T&&(_===kn?e.cullFace(e.BACK):_===Va?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Me(e.CULL_FACE),T=_}function ve(_){_!==Y&&(V&&e.lineWidth(_),Y=_)}function ze(_,te,I){_?(ne(e.POLYGON_OFFSET_FILL),(G!==te||X!==I)&&(e.polygonOffset(te,I),G=te,X=I)):Me(e.POLYGON_OFFSET_FILL)}function ge(_){_?ne(e.SCISSOR_TEST):Me(e.SCISSOR_TEST)}function u(_){_===void 0&&(_=e.TEXTURE0+$-1),_e!==_&&(e.activeTexture(_),_e=_)}function r(_,te,I){I===void 0&&(_e===null?I=e.TEXTURE0+$-1:I=_e);let W=Se[I];W===void 0&&(W={type:void 0,texture:void 0},Se[I]=W),(W.type!==_||W.texture!==te)&&(_e!==I&&(e.activeTexture(I),_e=I),e.bindTexture(_,te||pe[_]),W.type=_,W.texture=te)}function b(){const _=Se[_e];_!==void 0&&_.type!==void 0&&(e.bindTexture(_.type,null),_.type=void 0,_.texture=void 0)}function k(){try{e.compressedTexImage2D.apply(e,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function q(){try{e.compressedTexImage3D.apply(e,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function B(){try{e.texSubImage2D.apply(e,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function he(){try{e.texSubImage3D.apply(e,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ie(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function se(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Ne(){try{e.texStorage2D.apply(e,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function K(){try{e.texStorage3D.apply(e,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ce(){try{e.texImage2D.apply(e,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Ee(){try{e.texImage3D.apply(e,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Te(_){$e.equals(_)===!1&&(e.scissor(_.x,_.y,_.z,_.w),$e.copy(_))}function le(_){H.equals(_)===!1&&(e.viewport(_.x,_.y,_.z,_.w),H.copy(_))}function ye(_,te){let I=M.get(te);I===void 0&&(I=new WeakMap,M.set(te,I));let W=I.get(_);W===void 0&&(W=e.getUniformBlockIndex(te,_.name),I.set(_,W))}function Ce(_,te){const W=M.get(te).get(_);U.get(te)!==W&&(e.uniformBlockBinding(te,W,_.__bindingPointIndex),U.set(te,W))}function ke(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),h.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),y={},_e=null,Se={},R={},S=new WeakMap,A=[],N=null,C=!1,l=null,a=null,L=null,x=null,m=null,Q=null,D=null,O=new Ze(0,0,0),z=0,p=!1,f=null,T=null,Y=null,G=null,X=null,$e.set(0,0,e.canvas.width,e.canvas.height),H.set(0,0,e.canvas.width,e.canvas.height),s.reset(),h.reset(),d.reset()}return{buffers:{color:s,depth:h,stencil:d},enable:ne,disable:Me,bindFramebuffer:Ae,drawBuffers:we,useProgram:Ke,setBlending:E,setMaterial:lt,setFlipSided:Ue,setCullFace:De,setLineWidth:ve,setPolygonOffset:ze,setScissorTest:ge,activeTexture:u,bindTexture:r,unbindTexture:b,compressedTexImage2D:k,compressedTexImage3D:q,texImage2D:ce,texImage3D:Ee,updateUBOMapping:ye,uniformBlockBinding:Ce,texStorage2D:Ne,texStorage3D:K,texSubImage2D:B,texSubImage3D:he,compressedTexSubImage2D:ie,compressedTexSubImage3D:se,scissor:Te,viewport:le,reset:ke}}function sf(e,n,t,i,c,s,h){const d=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,U=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),M=new st,y=new WeakMap;let R;const S=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(u,r){return A?new OffscreenCanvas(u,r):Lr("canvas")}function C(u,r,b){let k=1;const q=ge(u);if((q.width>b||q.height>b)&&(k=b/Math.max(q.width,q.height)),k<1)if(typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap||typeof VideoFrame<"u"&&u instanceof VideoFrame){const B=Math.floor(k*q.width),he=Math.floor(k*q.height);R===void 0&&(R=N(B,he));const ie=r?N(B,he):R;return ie.width=B,ie.height=he,ie.getContext("2d").drawImage(u,0,0,B,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+B+"x"+he+")."),ie}else return"data"in u&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),u;return u}function l(u){return u.generateMipmaps}function a(u){e.generateMipmap(u)}function L(u){return u.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:u.isWebGL3DRenderTarget?e.TEXTURE_3D:u.isWebGLArrayRenderTarget||u.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(u,r,b,k,q=!1){if(u!==null){if(e[u]!==void 0)return e[u];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+u+"'")}let B=r;if(r===e.RED&&(b===e.FLOAT&&(B=e.R32F),b===e.HALF_FLOAT&&(B=e.R16F),b===e.UNSIGNED_BYTE&&(B=e.R8)),r===e.RED_INTEGER&&(b===e.UNSIGNED_BYTE&&(B=e.R8UI),b===e.UNSIGNED_SHORT&&(B=e.R16UI),b===e.UNSIGNED_INT&&(B=e.R32UI),b===e.BYTE&&(B=e.R8I),b===e.SHORT&&(B=e.R16I),b===e.INT&&(B=e.R32I)),r===e.RG&&(b===e.FLOAT&&(B=e.RG32F),b===e.HALF_FLOAT&&(B=e.RG16F),b===e.UNSIGNED_BYTE&&(B=e.RG8)),r===e.RG_INTEGER&&(b===e.UNSIGNED_BYTE&&(B=e.RG8UI),b===e.UNSIGNED_SHORT&&(B=e.RG16UI),b===e.UNSIGNED_INT&&(B=e.RG32UI),b===e.BYTE&&(B=e.RG8I),b===e.SHORT&&(B=e.RG16I),b===e.INT&&(B=e.RG32I)),r===e.RGB_INTEGER&&(b===e.UNSIGNED_BYTE&&(B=e.RGB8UI),b===e.UNSIGNED_SHORT&&(B=e.RGB16UI),b===e.UNSIGNED_INT&&(B=e.RGB32UI),b===e.BYTE&&(B=e.RGB8I),b===e.SHORT&&(B=e.RGB16I),b===e.INT&&(B=e.RGB32I)),r===e.RGBA_INTEGER&&(b===e.UNSIGNED_BYTE&&(B=e.RGBA8UI),b===e.UNSIGNED_SHORT&&(B=e.RGBA16UI),b===e.UNSIGNED_INT&&(B=e.RGBA32UI),b===e.BYTE&&(B=e.RGBA8I),b===e.SHORT&&(B=e.RGBA16I),b===e.INT&&(B=e.RGBA32I)),r===e.RGB&&b===e.UNSIGNED_INT_5_9_9_9_REV&&(B=e.RGB9_E5),r===e.RGBA){const he=q?ki:je.getTransfer(k);b===e.FLOAT&&(B=e.RGBA32F),b===e.HALF_FLOAT&&(B=e.RGBA16F),b===e.UNSIGNED_BYTE&&(B=he===qe?e.SRGB8_ALPHA8:e.RGBA8),b===e.UNSIGNED_SHORT_4_4_4_4&&(B=e.RGBA4),b===e.UNSIGNED_SHORT_5_5_5_1&&(B=e.RGB5_A1)}return(B===e.R16F||B===e.R32F||B===e.RG16F||B===e.RG32F||B===e.RGBA16F||B===e.RGBA32F)&&n.get("EXT_color_buffer_float"),B}function m(u,r){let b;return u?r===null||r===Vt||r===kt?b=e.DEPTH24_STENCIL8:r===bt?b=e.DEPTH32F_STENCIL8:r===nn&&(b=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):r===null||r===Vt||r===kt?b=e.DEPTH_COMPONENT24:r===bt?b=e.DEPTH_COMPONENT32F:r===nn&&(b=e.DEPTH_COMPONENT16),b}function Q(u,r){return l(u)===!0||u.isFramebufferTexture&&u.minFilter!==Gt&&u.minFilter!==Yt?Math.log2(Math.max(r.width,r.height))+1:u.mipmaps!==void 0&&u.mipmaps.length>0?u.mipmaps.length:u.isCompressedTexture&&Array.isArray(u.image)?r.mipmaps.length:1}function D(u){const r=u.target;r.removeEventListener("dispose",D),z(r),r.isVideoTexture&&y.delete(r)}function O(u){const r=u.target;r.removeEventListener("dispose",O),f(r)}function z(u){const r=i.get(u);if(r.__webglInit===void 0)return;const b=u.source,k=S.get(b);if(k){const q=k[r.__cacheKey];q.usedTimes--,q.usedTimes===0&&p(u),Object.keys(k).length===0&&S.delete(b)}i.remove(u)}function p(u){const r=i.get(u);e.deleteTexture(r.__webglTexture);const b=u.source,k=S.get(b);delete k[r.__cacheKey],h.memory.textures--}function f(u){const r=i.get(u);if(u.depthTexture&&(u.depthTexture.dispose(),i.remove(u.depthTexture)),u.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(r.__webglFramebuffer[k]))for(let q=0;q<r.__webglFramebuffer[k].length;q++)e.deleteFramebuffer(r.__webglFramebuffer[k][q]);else e.deleteFramebuffer(r.__webglFramebuffer[k]);r.__webglDepthbuffer&&e.deleteRenderbuffer(r.__webglDepthbuffer[k])}else{if(Array.isArray(r.__webglFramebuffer))for(let k=0;k<r.__webglFramebuffer.length;k++)e.deleteFramebuffer(r.__webglFramebuffer[k]);else e.deleteFramebuffer(r.__webglFramebuffer);if(r.__webglDepthbuffer&&e.deleteRenderbuffer(r.__webglDepthbuffer),r.__webglMultisampledFramebuffer&&e.deleteFramebuffer(r.__webglMultisampledFramebuffer),r.__webglColorRenderbuffer)for(let k=0;k<r.__webglColorRenderbuffer.length;k++)r.__webglColorRenderbuffer[k]&&e.deleteRenderbuffer(r.__webglColorRenderbuffer[k]);r.__webglDepthRenderbuffer&&e.deleteRenderbuffer(r.__webglDepthRenderbuffer)}const b=u.textures;for(let k=0,q=b.length;k<q;k++){const B=i.get(b[k]);B.__webglTexture&&(e.deleteTexture(B.__webglTexture),h.memory.textures--),i.remove(b[k])}i.remove(u)}let T=0;function Y(){T=0}function G(){const u=T;return u>=c.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+u+" texture units while this GPU supports only "+c.maxTextures),T+=1,u}function X(u){const r=[];return r.push(u.wrapS),r.push(u.wrapT),r.push(u.wrapR||0),r.push(u.magFilter),r.push(u.minFilter),r.push(u.anisotropy),r.push(u.internalFormat),r.push(u.format),r.push(u.type),r.push(u.generateMipmaps),r.push(u.premultiplyAlpha),r.push(u.flipY),r.push(u.unpackAlignment),r.push(u.colorSpace),r.join()}function $(u,r){const b=i.get(u);if(u.isVideoTexture&&ve(u),u.isRenderTargetTexture===!1&&u.version>0&&b.__version!==u.version){const k=u.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(b,u,r);return}}t.bindTexture(e.TEXTURE_2D,b.__webglTexture,e.TEXTURE0+r)}function V(u,r){const b=i.get(u);if(u.version>0&&b.__version!==u.version){H(b,u,r);return}t.bindTexture(e.TEXTURE_2D_ARRAY,b.__webglTexture,e.TEXTURE0+r)}function j(u,r){const b=i.get(u);if(u.version>0&&b.__version!==u.version){H(b,u,r);return}t.bindTexture(e.TEXTURE_3D,b.__webglTexture,e.TEXTURE0+r)}function F(u,r){const b=i.get(u);if(u.version>0&&b.__version!==u.version){J(b,u,r);return}t.bindTexture(e.TEXTURE_CUBE_MAP,b.__webglTexture,e.TEXTURE0+r)}const _e={[qa]:e.REPEAT,[Ya]:e.CLAMP_TO_EDGE,[Xa]:e.MIRRORED_REPEAT},Se={[Gt]:e.NEAREST,[Ka]:e.NEAREST_MIPMAP_NEAREST,[qt]:e.NEAREST_MIPMAP_LINEAR,[Yt]:e.LINEAR,[ln]:e.LINEAR_MIPMAP_NEAREST,[Ot]:e.LINEAR_MIPMAP_LINEAR},Le={[tr]:e.NEVER,[er]:e.ALWAYS,[ja]:e.LESS,[Hi]:e.LEQUAL,[Qa]:e.EQUAL,[Ja]:e.GEQUAL,[$a]:e.GREATER,[Za]:e.NOTEQUAL};function Be(u,r){if(r.type===bt&&n.has("OES_texture_float_linear")===!1&&(r.magFilter===Yt||r.magFilter===ln||r.magFilter===qt||r.magFilter===Ot||r.minFilter===Yt||r.minFilter===ln||r.minFilter===qt||r.minFilter===Ot)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(u,e.TEXTURE_WRAP_S,_e[r.wrapS]),e.texParameteri(u,e.TEXTURE_WRAP_T,_e[r.wrapT]),(u===e.TEXTURE_3D||u===e.TEXTURE_2D_ARRAY)&&e.texParameteri(u,e.TEXTURE_WRAP_R,_e[r.wrapR]),e.texParameteri(u,e.TEXTURE_MAG_FILTER,Se[r.magFilter]),e.texParameteri(u,e.TEXTURE_MIN_FILTER,Se[r.minFilter]),r.compareFunction&&(e.texParameteri(u,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(u,e.TEXTURE_COMPARE_FUNC,Le[r.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(r.magFilter===Gt||r.minFilter!==qt&&r.minFilter!==Ot||r.type===bt&&n.has("OES_texture_float_linear")===!1)return;if(r.anisotropy>1||i.get(r).__currentAnisotropy){const b=n.get("EXT_texture_filter_anisotropic");e.texParameterf(u,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,c.getMaxAnisotropy())),i.get(r).__currentAnisotropy=r.anisotropy}}}function $e(u,r){let b=!1;u.__webglInit===void 0&&(u.__webglInit=!0,r.addEventListener("dispose",D));const k=r.source;let q=S.get(k);q===void 0&&(q={},S.set(k,q));const B=X(r);if(B!==u.__cacheKey){q[B]===void 0&&(q[B]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,b=!0),q[B].usedTimes++;const he=q[u.__cacheKey];he!==void 0&&(q[u.__cacheKey].usedTimes--,he.usedTimes===0&&p(r)),u.__cacheKey=B,u.__webglTexture=q[B].texture}return b}function H(u,r,b){let k=e.TEXTURE_2D;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(k=e.TEXTURE_2D_ARRAY),r.isData3DTexture&&(k=e.TEXTURE_3D);const q=$e(u,r),B=r.source;t.bindTexture(k,u.__webglTexture,e.TEXTURE0+b);const he=i.get(B);if(B.version!==he.__version||q===!0){t.activeTexture(e.TEXTURE0+b);const ie=je.getPrimaries(je.workingColorSpace),se=r.colorSpace===wt?null:je.getPrimaries(r.colorSpace),Ne=r.colorSpace===wt||ie===se?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let K=C(r.image,!1,c.maxTextureSize);K=ze(r,K);const ce=s.convert(r.format,r.colorSpace),Ee=s.convert(r.type);let Te=x(r.internalFormat,ce,Ee,r.colorSpace,r.isVideoTexture);Be(k,r);let le;const ye=r.mipmaps,Ce=r.isVideoTexture!==!0,ke=he.__version===void 0||q===!0,_=B.dataReady,te=Q(r,K);if(r.isDepthTexture)Te=m(r.format===tn,r.type),ke&&(Ce?t.texStorage2D(e.TEXTURE_2D,1,Te,K.width,K.height):t.texImage2D(e.TEXTURE_2D,0,Te,K.width,K.height,0,ce,Ee,null));else if(r.isDataTexture)if(ye.length>0){Ce&&ke&&t.texStorage2D(e.TEXTURE_2D,te,Te,ye[0].width,ye[0].height);for(let I=0,W=ye.length;I<W;I++)le=ye[I],Ce?_&&t.texSubImage2D(e.TEXTURE_2D,I,0,0,le.width,le.height,ce,Ee,le.data):t.texImage2D(e.TEXTURE_2D,I,Te,le.width,le.height,0,ce,Ee,le.data);r.generateMipmaps=!1}else Ce?(ke&&t.texStorage2D(e.TEXTURE_2D,te,Te,K.width,K.height),_&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,K.width,K.height,ce,Ee,K.data)):t.texImage2D(e.TEXTURE_2D,0,Te,K.width,K.height,0,ce,Ee,K.data);else if(r.isCompressedTexture)if(r.isCompressedArrayTexture){Ce&&ke&&t.texStorage3D(e.TEXTURE_2D_ARRAY,te,Te,ye[0].width,ye[0].height,K.depth);for(let I=0,W=ye.length;I<W;I++)if(le=ye[I],r.format!==Tt)if(ce!==null)if(Ce){if(_)if(r.layerUpdates.size>0){const oe=Si(le.width,le.height,r.format,r.type);for(const ae of r.layerUpdates){const Re=le.data.subarray(ae*oe/le.data.BYTES_PER_ELEMENT,(ae+1)*oe/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,I,0,0,ae,le.width,le.height,1,ce,Re)}r.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,I,0,0,0,le.width,le.height,K.depth,ce,le.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,I,Te,le.width,le.height,K.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?_&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,I,0,0,0,le.width,le.height,K.depth,ce,Ee,le.data):t.texImage3D(e.TEXTURE_2D_ARRAY,I,Te,le.width,le.height,K.depth,0,ce,Ee,le.data)}else{Ce&&ke&&t.texStorage2D(e.TEXTURE_2D,te,Te,ye[0].width,ye[0].height);for(let I=0,W=ye.length;I<W;I++)le=ye[I],r.format!==Tt?ce!==null?Ce?_&&t.compressedTexSubImage2D(e.TEXTURE_2D,I,0,0,le.width,le.height,ce,le.data):t.compressedTexImage2D(e.TEXTURE_2D,I,Te,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?_&&t.texSubImage2D(e.TEXTURE_2D,I,0,0,le.width,le.height,ce,Ee,le.data):t.texImage2D(e.TEXTURE_2D,I,Te,le.width,le.height,0,ce,Ee,le.data)}else if(r.isDataArrayTexture)if(Ce){if(ke&&t.texStorage3D(e.TEXTURE_2D_ARRAY,te,Te,K.width,K.height,K.depth),_)if(r.layerUpdates.size>0){const I=Si(K.width,K.height,r.format,r.type);for(const W of r.layerUpdates){const oe=K.data.subarray(W*I/K.data.BYTES_PER_ELEMENT,(W+1)*I/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,W,K.width,K.height,1,ce,Ee,oe)}r.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ce,Ee,K.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,Te,K.width,K.height,K.depth,0,ce,Ee,K.data);else if(r.isData3DTexture)Ce?(ke&&t.texStorage3D(e.TEXTURE_3D,te,Te,K.width,K.height,K.depth),_&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ce,Ee,K.data)):t.texImage3D(e.TEXTURE_3D,0,Te,K.width,K.height,K.depth,0,ce,Ee,K.data);else if(r.isFramebufferTexture){if(ke)if(Ce)t.texStorage2D(e.TEXTURE_2D,te,Te,K.width,K.height);else{let I=K.width,W=K.height;for(let oe=0;oe<te;oe++)t.texImage2D(e.TEXTURE_2D,oe,Te,I,W,0,ce,Ee,null),I>>=1,W>>=1}}else if(ye.length>0){if(Ce&&ke){const I=ge(ye[0]);t.texStorage2D(e.TEXTURE_2D,te,Te,I.width,I.height)}for(let I=0,W=ye.length;I<W;I++)le=ye[I],Ce?_&&t.texSubImage2D(e.TEXTURE_2D,I,0,0,ce,Ee,le):t.texImage2D(e.TEXTURE_2D,I,Te,ce,Ee,le);r.generateMipmaps=!1}else if(Ce){if(ke){const I=ge(K);t.texStorage2D(e.TEXTURE_2D,te,Te,I.width,I.height)}_&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,ce,Ee,K)}else t.texImage2D(e.TEXTURE_2D,0,Te,ce,Ee,K);l(r)&&a(k),he.__version=B.version,r.onUpdate&&r.onUpdate(r)}u.__version=r.version}function J(u,r,b){if(r.image.length!==6)return;const k=$e(u,r),q=r.source;t.bindTexture(e.TEXTURE_CUBE_MAP,u.__webglTexture,e.TEXTURE0+b);const B=i.get(q);if(q.version!==B.__version||k===!0){t.activeTexture(e.TEXTURE0+b);const he=je.getPrimaries(je.workingColorSpace),ie=r.colorSpace===wt?null:je.getPrimaries(r.colorSpace),se=r.colorSpace===wt||he===ie?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const Ne=r.isCompressedTexture||r.image[0].isCompressedTexture,K=r.image[0]&&r.image[0].isDataTexture,ce=[];for(let W=0;W<6;W++)!Ne&&!K?ce[W]=C(r.image[W],!0,c.maxCubemapSize):ce[W]=K?r.image[W].image:r.image[W],ce[W]=ze(r,ce[W]);const Ee=ce[0],Te=s.convert(r.format,r.colorSpace),le=s.convert(r.type),ye=x(r.internalFormat,Te,le,r.colorSpace),Ce=r.isVideoTexture!==!0,ke=B.__version===void 0||k===!0,_=q.dataReady;let te=Q(r,Ee);Be(e.TEXTURE_CUBE_MAP,r);let I;if(Ne){Ce&&ke&&t.texStorage2D(e.TEXTURE_CUBE_MAP,te,ye,Ee.width,Ee.height);for(let W=0;W<6;W++){I=ce[W].mipmaps;for(let oe=0;oe<I.length;oe++){const ae=I[oe];r.format!==Tt?Te!==null?Ce?_&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe,0,0,ae.width,ae.height,Te,ae.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe,ye,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?_&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe,0,0,ae.width,ae.height,Te,le,ae.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe,ye,ae.width,ae.height,0,Te,le,ae.data)}}}else{if(I=r.mipmaps,Ce&&ke){I.length>0&&te++;const W=ge(ce[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,te,ye,W.width,W.height)}for(let W=0;W<6;W++)if(K){Ce?_&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,ce[W].width,ce[W].height,Te,le,ce[W].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,ye,ce[W].width,ce[W].height,0,Te,le,ce[W].data);for(let oe=0;oe<I.length;oe++){const Re=I[oe].image[W].image;Ce?_&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe+1,0,0,Re.width,Re.height,Te,le,Re.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe+1,ye,Re.width,Re.height,0,Te,le,Re.data)}}else{Ce?_&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Te,le,ce[W]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,ye,Te,le,ce[W]);for(let oe=0;oe<I.length;oe++){const ae=I[oe];Ce?_&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe+1,0,0,Te,le,ae.image[W]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe+1,ye,Te,le,ae.image[W])}}}l(r)&&a(e.TEXTURE_CUBE_MAP),B.__version=q.version,r.onUpdate&&r.onUpdate(r)}u.__version=r.version}function pe(u,r,b,k,q,B){const he=s.convert(b.format,b.colorSpace),ie=s.convert(b.type),se=x(b.internalFormat,he,ie,b.colorSpace),Ne=i.get(r),K=i.get(b);if(K.__renderTarget=r,!Ne.__hasExternalTextures){const ce=Math.max(1,r.width>>B),Ee=Math.max(1,r.height>>B);q===e.TEXTURE_3D||q===e.TEXTURE_2D_ARRAY?t.texImage3D(q,B,se,ce,Ee,r.depth,0,he,ie,null):t.texImage2D(q,B,se,ce,Ee,0,he,ie,null)}t.bindFramebuffer(e.FRAMEBUFFER,u),De(r)?d.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,k,q,K.__webglTexture,0,Ue(r)):(q===e.TEXTURE_2D||q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,k,q,K.__webglTexture,B),t.bindFramebuffer(e.FRAMEBUFFER,null)}function ne(u,r,b){if(e.bindRenderbuffer(e.RENDERBUFFER,u),r.depthBuffer){const k=r.depthTexture,q=k&&k.isDepthTexture?k.type:null,B=m(r.stencilBuffer,q),he=r.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ie=Ue(r);De(r)?d.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ie,B,r.width,r.height):b?e.renderbufferStorageMultisample(e.RENDERBUFFER,ie,B,r.width,r.height):e.renderbufferStorage(e.RENDERBUFFER,B,r.width,r.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,he,e.RENDERBUFFER,u)}else{const k=r.textures;for(let q=0;q<k.length;q++){const B=k[q],he=s.convert(B.format,B.colorSpace),ie=s.convert(B.type),se=x(B.internalFormat,he,ie,B.colorSpace),Ne=Ue(r);b&&De(r)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne,se,r.width,r.height):De(r)?d.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne,se,r.width,r.height):e.renderbufferStorage(e.RENDERBUFFER,se,r.width,r.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Me(u,r){if(r&&r.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,u),!(r.depthTexture&&r.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=i.get(r.depthTexture);k.__renderTarget=r,(!k.__webglTexture||r.depthTexture.image.width!==r.width||r.depthTexture.image.height!==r.height)&&(r.depthTexture.image.width=r.width,r.depthTexture.image.height=r.height,r.depthTexture.needsUpdate=!0),$(r.depthTexture,0);const q=k.__webglTexture,B=Ue(r);if(r.depthTexture.format===Dn)De(r)?d.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,q,0,B):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,q,0);else if(r.depthTexture.format===tn)De(r)?d.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,q,0,B):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Ae(u){const r=i.get(u),b=u.isWebGLCubeRenderTarget===!0;if(r.__boundDepthTexture!==u.depthTexture){const k=u.depthTexture;if(r.__depthDisposeCallback&&r.__depthDisposeCallback(),k){const q=()=>{delete r.__boundDepthTexture,delete r.__depthDisposeCallback,k.removeEventListener("dispose",q)};k.addEventListener("dispose",q),r.__depthDisposeCallback=q}r.__boundDepthTexture=k}if(u.depthTexture&&!r.__autoAllocateDepthBuffer){if(b)throw new Error("target.depthTexture not supported in Cube render targets");Me(r.__webglFramebuffer,u)}else if(b){r.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[k]),r.__webglDepthbuffer[k]===void 0)r.__webglDepthbuffer[k]=e.createRenderbuffer(),ne(r.__webglDepthbuffer[k],u,!1);else{const q=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,B=r.__webglDepthbuffer[k];e.bindRenderbuffer(e.RENDERBUFFER,B),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,B)}}else if(t.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer===void 0)r.__webglDepthbuffer=e.createRenderbuffer(),ne(r.__webglDepthbuffer,u,!1);else{const k=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=r.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,q),e.framebufferRenderbuffer(e.FRAMEBUFFER,k,e.RENDERBUFFER,q)}t.bindFramebuffer(e.FRAMEBUFFER,null)}function we(u,r,b){const k=i.get(u);r!==void 0&&pe(k.__webglFramebuffer,u,u.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),b!==void 0&&Ae(u)}function Ke(u){const r=u.texture,b=i.get(u),k=i.get(r);u.addEventListener("dispose",O);const q=u.textures,B=u.isWebGLCubeRenderTarget===!0,he=q.length>1;if(he||(k.__webglTexture===void 0&&(k.__webglTexture=e.createTexture()),k.__version=r.version,h.memory.textures++),B){b.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(r.mipmaps&&r.mipmaps.length>0){b.__webglFramebuffer[ie]=[];for(let se=0;se<r.mipmaps.length;se++)b.__webglFramebuffer[ie][se]=e.createFramebuffer()}else b.__webglFramebuffer[ie]=e.createFramebuffer()}else{if(r.mipmaps&&r.mipmaps.length>0){b.__webglFramebuffer=[];for(let ie=0;ie<r.mipmaps.length;ie++)b.__webglFramebuffer[ie]=e.createFramebuffer()}else b.__webglFramebuffer=e.createFramebuffer();if(he)for(let ie=0,se=q.length;ie<se;ie++){const Ne=i.get(q[ie]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=e.createTexture(),h.memory.textures++)}if(u.samples>0&&De(u)===!1){b.__webglMultisampledFramebuffer=e.createFramebuffer(),b.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let ie=0;ie<q.length;ie++){const se=q[ie];b.__webglColorRenderbuffer[ie]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,b.__webglColorRenderbuffer[ie]);const Ne=s.convert(se.format,se.colorSpace),K=s.convert(se.type),ce=x(se.internalFormat,Ne,K,se.colorSpace,u.isXRRenderTarget===!0),Ee=Ue(u);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee,ce,u.width,u.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ie,e.RENDERBUFFER,b.__webglColorRenderbuffer[ie])}e.bindRenderbuffer(e.RENDERBUFFER,null),u.depthBuffer&&(b.__webglDepthRenderbuffer=e.createRenderbuffer(),ne(b.__webglDepthRenderbuffer,u,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(B){t.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture),Be(e.TEXTURE_CUBE_MAP,r);for(let ie=0;ie<6;ie++)if(r.mipmaps&&r.mipmaps.length>0)for(let se=0;se<r.mipmaps.length;se++)pe(b.__webglFramebuffer[ie][se],u,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,se);else pe(b.__webglFramebuffer[ie],u,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);l(r)&&a(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let ie=0,se=q.length;ie<se;ie++){const Ne=q[ie],K=i.get(Ne);t.bindTexture(e.TEXTURE_2D,K.__webglTexture),Be(e.TEXTURE_2D,Ne),pe(b.__webglFramebuffer,u,Ne,e.COLOR_ATTACHMENT0+ie,e.TEXTURE_2D,0),l(Ne)&&a(e.TEXTURE_2D)}t.unbindTexture()}else{let ie=e.TEXTURE_2D;if((u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(ie=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ie,k.__webglTexture),Be(ie,r),r.mipmaps&&r.mipmaps.length>0)for(let se=0;se<r.mipmaps.length;se++)pe(b.__webglFramebuffer[se],u,r,e.COLOR_ATTACHMENT0,ie,se);else pe(b.__webglFramebuffer,u,r,e.COLOR_ATTACHMENT0,ie,0);l(r)&&a(ie),t.unbindTexture()}u.depthBuffer&&Ae(u)}function Ie(u){const r=u.textures;for(let b=0,k=r.length;b<k;b++){const q=r[b];if(l(q)){const B=L(u),he=i.get(q).__webglTexture;t.bindTexture(B,he),a(B),t.unbindTexture()}}}const Qe=[],E=[];function lt(u){if(u.samples>0){if(De(u)===!1){const r=u.textures,b=u.width,k=u.height;let q=e.COLOR_BUFFER_BIT;const B=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,he=i.get(u),ie=r.length>1;if(ie)for(let se=0;se<r.length;se++)t.bindFramebuffer(e.FRAMEBUFFER,he.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+se,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,he.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+se,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let se=0;se<r.length;se++){if(u.resolveDepthBuffer&&(u.depthBuffer&&(q|=e.DEPTH_BUFFER_BIT),u.stencilBuffer&&u.resolveStencilBuffer&&(q|=e.STENCIL_BUFFER_BIT)),ie){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,he.__webglColorRenderbuffer[se]);const Ne=i.get(r[se]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ne,0)}e.blitFramebuffer(0,0,b,k,0,0,b,k,q,e.NEAREST),U===!0&&(Qe.length=0,E.length=0,Qe.push(e.COLOR_ATTACHMENT0+se),u.depthBuffer&&u.resolveDepthBuffer===!1&&(Qe.push(B),E.push(B),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,E)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ie)for(let se=0;se<r.length;se++){t.bindFramebuffer(e.FRAMEBUFFER,he.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+se,e.RENDERBUFFER,he.__webglColorRenderbuffer[se]);const Ne=i.get(r[se]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,he.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+se,e.TEXTURE_2D,Ne,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(u.depthBuffer&&u.resolveDepthBuffer===!1&&U){const r=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[r])}}}function Ue(u){return Math.min(c.maxSamples,u.samples)}function De(u){const r=i.get(u);return u.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&r.__useRenderToTexture!==!1}function ve(u){const r=h.render.frame;y.get(u)!==r&&(y.set(u,r),u.update())}function ze(u,r){const b=u.colorSpace,k=u.format,q=u.type;return u.isCompressedTexture===!0||u.isVideoTexture===!0||b!==Un&&b!==wt&&(je.getTransfer(b)===qe?(k!==Tt||q!==Pt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",b)),r}function ge(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement?(M.width=u.naturalWidth||u.width,M.height=u.naturalHeight||u.height):typeof VideoFrame<"u"&&u instanceof VideoFrame?(M.width=u.displayWidth,M.height=u.displayHeight):(M.width=u.width,M.height=u.height),M}this.allocateTextureUnit=G,this.resetTextureUnits=Y,this.setTexture2D=$,this.setTexture2DArray=V,this.setTexture3D=j,this.setTextureCube=F,this.rebindTextures=we,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=De}function cf(e,n){function t(i,c=wt){let s;const h=je.getTransfer(c);if(i===Pt)return e.UNSIGNED_BYTE;if(i===zi)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Xi)return e.UNSIGNED_SHORT_5_5_5_1;if(i===nr)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===ir)return e.BYTE;if(i===ar)return e.SHORT;if(i===nn)return e.UNSIGNED_SHORT;if(i===Gi)return e.INT;if(i===Vt)return e.UNSIGNED_INT;if(i===bt)return e.FLOAT;if(i===Ln)return e.HALF_FLOAT;if(i===rr)return e.ALPHA;if(i===or)return e.RGB;if(i===Tt)return e.RGBA;if(i===sr)return e.LUMINANCE;if(i===cr)return e.LUMINANCE_ALPHA;if(i===Dn)return e.DEPTH_COMPONENT;if(i===tn)return e.DEPTH_STENCIL;if(i===lr)return e.RED;if(i===Yi)return e.RED_INTEGER;if(i===fr)return e.RG;if(i===qi)return e.RG_INTEGER;if(i===Ki)return e.RGBA_INTEGER;if(i===fn||i===dn||i===un||i===pn)if(h===qe)if(s=n.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===fn)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===un)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=n.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===fn)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dn)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===un)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pn)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yn||i===qn||i===Kn||i===Zn)if(s=n.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Yn)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qn)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kn)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zn)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$n||i===Jn||i===Qn)if(s=n.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$n||i===Jn)return h===qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Qn)return h===qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===jn||i===ei||i===ti||i===ni||i===ii||i===ai||i===ri||i===oi||i===si||i===ci||i===li||i===fi||i===di||i===ui)if(s=n.get("WEBGL_compressed_texture_astc"),s!==null){if(i===jn)return h===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ei)return h===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ti)return h===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ni)return h===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ii)return h===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ai)return h===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ri)return h===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oi)return h===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===si)return h===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ci)return h===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===li)return h===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fi)return h===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===di)return h===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ui)return h===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hn||i===pi||i===hi)if(s=n.get("EXT_texture_compression_bptc"),s!==null){if(i===hn)return h===qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pi)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hi)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dr||i===mi||i===_i||i===gi)if(s=n.get("EXT_texture_compression_rgtc"),s!==null){if(i===hn)return s.COMPRESSED_RED_RGTC1_EXT;if(i===mi)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_i)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gi)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===kt?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const lf={type:"move"};class gn{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const t=this._hand;if(t)for(const i of n.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,t,i){let c=null,s=null,h=null;const d=this._targetRay,U=this._grip,M=this._hand;if(n&&t.session.visibilityState!=="visible-blurred"){if(M&&n.hand){h=!0;for(const C of n.hand.values()){const l=t.getJointPose(C,i),a=this._getHandJoint(M,C);l!==null&&(a.matrix.fromArray(l.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,a.jointRadius=l.radius),a.visible=l!==null}const y=M.joints["index-finger-tip"],R=M.joints["thumb-tip"],S=y.position.distanceTo(R.position),A=.02,N=.005;M.inputState.pinching&&S>A+N?(M.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!M.inputState.pinching&&S<=A-N&&(M.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else U!==null&&n.gripSpace&&(s=t.getPose(n.gripSpace,i),s!==null&&(U.matrix.fromArray(s.transform.matrix),U.matrix.decompose(U.position,U.rotation,U.scale),U.matrixWorldNeedsUpdate=!0,s.linearVelocity?(U.hasLinearVelocity=!0,U.linearVelocity.copy(s.linearVelocity)):U.hasLinearVelocity=!1,s.angularVelocity?(U.hasAngularVelocity=!0,U.angularVelocity.copy(s.angularVelocity)):U.hasAngularVelocity=!1));d!==null&&(c=t.getPose(n.targetRaySpace,i),c===null&&s!==null&&(c=s),c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,c.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(c.linearVelocity)):d.hasLinearVelocity=!1,c.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(c.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(lf)))}return d!==null&&(d.visible=c!==null),U!==null&&(U.visible=s!==null),M!==null&&(M.visible=h!==null),this}_getHandJoint(n,t){if(n.joints[t.jointName]===void 0){const i=new Kt;i.matrixAutoUpdate=!1,i.visible=!1,n.joints[t.jointName]=i,n.add(i)}return n.joints[t.jointName]}}const ff=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,df=`
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

}`;class uf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t,i){if(this.texture===null){const c=new ji,s=n.properties.get(c);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=c}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new rn({vertexShader:ff,fragmentShader:df,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new an(new Zi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pf extends wr{constructor(n,t){super();const i=this;let c=null,s=1,h=null,d="local-floor",U=1,M=null,y=null,R=null,S=null,A=null,N=null;const C=new uf,l=t.getContextAttributes();let a=null,L=null;const x=[],m=[],Q=new st;let D=null;const O=new mn;O.viewport=new ot;const z=new mn;z.viewport=new ot;const p=[O,z],f=new Ur;let T=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=x[H];return J===void 0&&(J=new gn,x[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=x[H];return J===void 0&&(J=new gn,x[H]=J),J.getGripSpace()},this.getHand=function(H){let J=x[H];return J===void 0&&(J=new gn,x[H]=J),J.getHandSpace()};function G(H){const J=m.indexOf(H.inputSource);if(J===-1)return;const pe=x[J];pe!==void 0&&(pe.update(H.inputSource,H.frame,M||h),pe.dispatchEvent({type:H.type,data:H.inputSource}))}function X(){c.removeEventListener("select",G),c.removeEventListener("selectstart",G),c.removeEventListener("selectend",G),c.removeEventListener("squeeze",G),c.removeEventListener("squeezestart",G),c.removeEventListener("squeezeend",G),c.removeEventListener("end",X),c.removeEventListener("inputsourceschange",$);for(let H=0;H<x.length;H++){const J=m[H];J!==null&&(m[H]=null,x[H].disconnect(J))}T=null,Y=null,C.reset(),n.setRenderTarget(a),A=null,S=null,R=null,c=null,L=null,$e.stop(),i.isPresenting=!1,n.setPixelRatio(D),n.setSize(Q.width,Q.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){d=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return M||h},this.setReferenceSpace=function(H){M=H},this.getBaseLayer=function(){return S!==null?S:A},this.getBinding=function(){return R},this.getFrame=function(){return N},this.getSession=function(){return c},this.setSession=async function(H){if(c=H,c!==null){if(a=n.getRenderTarget(),c.addEventListener("select",G),c.addEventListener("selectstart",G),c.addEventListener("selectend",G),c.addEventListener("squeeze",G),c.addEventListener("squeezestart",G),c.addEventListener("squeezeend",G),c.addEventListener("end",X),c.addEventListener("inputsourceschange",$),l.xrCompatible!==!0&&await t.makeXRCompatible(),D=n.getPixelRatio(),n.getSize(Q),c.renderState.layers===void 0){const J={antialias:l.antialias,alpha:!0,depth:l.depth,stencil:l.stencil,framebufferScaleFactor:s};A=new XRWebGLLayer(c,t,J),c.updateRenderState({baseLayer:A}),n.setPixelRatio(1),n.setSize(A.framebufferWidth,A.framebufferHeight,!1),L=new Wt(A.framebufferWidth,A.framebufferHeight,{format:Tt,type:Pt,colorSpace:n.outputColorSpace,stencilBuffer:l.stencil})}else{let J=null,pe=null,ne=null;l.depth&&(ne=l.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=l.stencil?tn:Dn,pe=l.stencil?kt:Vt);const Me={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};R=new XRWebGLBinding(c,t),S=R.createProjectionLayer(Me),c.updateRenderState({layers:[S]}),n.setPixelRatio(1),n.setSize(S.textureWidth,S.textureHeight,!1),L=new Wt(S.textureWidth,S.textureHeight,{format:Tt,type:Pt,depthTexture:new Qi(S.textureWidth,S.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:l.stencil,colorSpace:n.outputColorSpace,samples:l.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(U),M=null,h=await c.requestReferenceSpace(d),$e.setContext(c),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function $(H){for(let J=0;J<H.removed.length;J++){const pe=H.removed[J],ne=m.indexOf(pe);ne>=0&&(m[ne]=null,x[ne].disconnect(pe))}for(let J=0;J<H.added.length;J++){const pe=H.added[J];let ne=m.indexOf(pe);if(ne===-1){for(let Ae=0;Ae<x.length;Ae++)if(Ae>=m.length){m.push(pe),ne=Ae;break}else if(m[Ae]===null){m[Ae]=pe,ne=Ae;break}if(ne===-1)break}const Me=x[ne];Me&&Me.connect(pe)}}const V=new et,j=new et;function F(H,J,pe){V.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(pe.matrixWorld);const ne=V.distanceTo(j),Me=J.projectionMatrix.elements,Ae=pe.projectionMatrix.elements,we=Me[14]/(Me[10]-1),Ke=Me[14]/(Me[10]+1),Ie=(Me[9]+1)/Me[5],Qe=(Me[9]-1)/Me[5],E=(Me[8]-1)/Me[0],lt=(Ae[8]+1)/Ae[0],Ue=we*E,De=we*lt,ve=ne/(-E+lt),ze=ve*-E;if(J.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ze),H.translateZ(ve),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Me[10]===-1)H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const ge=we+ve,u=Ke+ve,r=Ue-ze,b=De+(ne-ze),k=Ie*Ke/u*ge,q=Qe*Ke/u*ge;H.projectionMatrix.makePerspective(r,b,k,q,ge,u),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function _e(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(c===null)return;let J=H.near,pe=H.far;C.texture!==null&&(C.depthNear>0&&(J=C.depthNear),C.depthFar>0&&(pe=C.depthFar)),f.near=z.near=O.near=J,f.far=z.far=O.far=pe,(T!==f.near||Y!==f.far)&&(c.updateRenderState({depthNear:f.near,depthFar:f.far}),T=f.near,Y=f.far),O.layers.mask=H.layers.mask|2,z.layers.mask=H.layers.mask|4,f.layers.mask=O.layers.mask|z.layers.mask;const ne=H.parent,Me=f.cameras;_e(f,ne);for(let Ae=0;Ae<Me.length;Ae++)_e(Me[Ae],ne);Me.length===2?F(f,O,z):f.projectionMatrix.copy(O.projectionMatrix),Se(H,f,ne)};function Se(H,J,pe){pe===null?H.matrix.copy(J.matrixWorld):(H.matrix.copy(pe.matrixWorld),H.matrix.invert(),H.matrix.multiply(J.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=ur*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return f},this.getFoveation=function(){if(!(S===null&&A===null))return U},this.setFoveation=function(H){U=H,S!==null&&(S.fixedFoveation=H),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=H)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(f)};let Le=null;function Be(H,J){if(y=J.getViewerPose(M||h),N=J,y!==null){const pe=y.views;A!==null&&(n.setRenderTargetFramebuffer(L,A.framebuffer),n.setRenderTarget(L));let ne=!1;pe.length!==f.cameras.length&&(f.cameras.length=0,ne=!0);for(let Ae=0;Ae<pe.length;Ae++){const we=pe[Ae];let Ke=null;if(A!==null)Ke=A.getViewport(we);else{const Qe=R.getViewSubImage(S,we);Ke=Qe.viewport,Ae===0&&(n.setRenderTargetTextures(L,Qe.colorTexture,S.ignoreDepthValues?void 0:Qe.depthStencilTexture),n.setRenderTarget(L))}let Ie=p[Ae];Ie===void 0&&(Ie=new mn,Ie.layers.enable(Ae),Ie.viewport=new ot,p[Ae]=Ie),Ie.matrix.fromArray(we.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(we.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Ae===0&&(f.matrix.copy(Ie.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale)),ne===!0&&f.cameras.push(Ie)}const Me=c.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const Ae=R.getDepthInformation(pe[0]);Ae&&Ae.isValid&&Ae.texture&&C.init(n,Ae,c.renderState)}}for(let pe=0;pe<x.length;pe++){const ne=m[pe],Me=x[pe];ne!==null&&Me!==void 0&&Me.update(ne,J,M||h)}Le&&Le(H,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),N=null}const $e=new ea;$e.setAnimationLoop(Be),this.setAnimationLoop=function(H){Le=H},this.dispose=function(){}}}const Rt=new Bi,hf=new Ut;function mf(e,n){function t(l,a){l.matrixAutoUpdate===!0&&l.updateMatrix(),a.value.copy(l.matrix)}function i(l,a){a.color.getRGB(l.fogColor.value,$i(e)),a.isFog?(l.fogNear.value=a.near,l.fogFar.value=a.far):a.isFogExp2&&(l.fogDensity.value=a.density)}function c(l,a,L,x,m){a.isMeshBasicMaterial||a.isMeshLambertMaterial?s(l,a):a.isMeshToonMaterial?(s(l,a),R(l,a)):a.isMeshPhongMaterial?(s(l,a),y(l,a)):a.isMeshStandardMaterial?(s(l,a),S(l,a),a.isMeshPhysicalMaterial&&A(l,a,m)):a.isMeshMatcapMaterial?(s(l,a),N(l,a)):a.isMeshDepthMaterial?s(l,a):a.isMeshDistanceMaterial?(s(l,a),C(l,a)):a.isMeshNormalMaterial?s(l,a):a.isLineBasicMaterial?(h(l,a),a.isLineDashedMaterial&&d(l,a)):a.isPointsMaterial?U(l,a,L,x):a.isSpriteMaterial?M(l,a):a.isShadowMaterial?(l.color.value.copy(a.color),l.opacity.value=a.opacity):a.isShaderMaterial&&(a.uniformsNeedUpdate=!1)}function s(l,a){l.opacity.value=a.opacity,a.color&&l.diffuse.value.copy(a.color),a.emissive&&l.emissive.value.copy(a.emissive).multiplyScalar(a.emissiveIntensity),a.map&&(l.map.value=a.map,t(a.map,l.mapTransform)),a.alphaMap&&(l.alphaMap.value=a.alphaMap,t(a.alphaMap,l.alphaMapTransform)),a.bumpMap&&(l.bumpMap.value=a.bumpMap,t(a.bumpMap,l.bumpMapTransform),l.bumpScale.value=a.bumpScale,a.side===pt&&(l.bumpScale.value*=-1)),a.normalMap&&(l.normalMap.value=a.normalMap,t(a.normalMap,l.normalMapTransform),l.normalScale.value.copy(a.normalScale),a.side===pt&&l.normalScale.value.negate()),a.displacementMap&&(l.displacementMap.value=a.displacementMap,t(a.displacementMap,l.displacementMapTransform),l.displacementScale.value=a.displacementScale,l.displacementBias.value=a.displacementBias),a.emissiveMap&&(l.emissiveMap.value=a.emissiveMap,t(a.emissiveMap,l.emissiveMapTransform)),a.specularMap&&(l.specularMap.value=a.specularMap,t(a.specularMap,l.specularMapTransform)),a.alphaTest>0&&(l.alphaTest.value=a.alphaTest);const L=n.get(a),x=L.envMap,m=L.envMapRotation;x&&(l.envMap.value=x,Rt.copy(m),Rt.x*=-1,Rt.y*=-1,Rt.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Rt.y*=-1,Rt.z*=-1),l.envMapRotation.value.setFromMatrix4(hf.makeRotationFromEuler(Rt)),l.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,l.reflectivity.value=a.reflectivity,l.ior.value=a.ior,l.refractionRatio.value=a.refractionRatio),a.lightMap&&(l.lightMap.value=a.lightMap,l.lightMapIntensity.value=a.lightMapIntensity,t(a.lightMap,l.lightMapTransform)),a.aoMap&&(l.aoMap.value=a.aoMap,l.aoMapIntensity.value=a.aoMapIntensity,t(a.aoMap,l.aoMapTransform))}function h(l,a){l.diffuse.value.copy(a.color),l.opacity.value=a.opacity,a.map&&(l.map.value=a.map,t(a.map,l.mapTransform))}function d(l,a){l.dashSize.value=a.dashSize,l.totalSize.value=a.dashSize+a.gapSize,l.scale.value=a.scale}function U(l,a,L,x){l.diffuse.value.copy(a.color),l.opacity.value=a.opacity,l.size.value=a.size*L,l.scale.value=x*.5,a.map&&(l.map.value=a.map,t(a.map,l.uvTransform)),a.alphaMap&&(l.alphaMap.value=a.alphaMap,t(a.alphaMap,l.alphaMapTransform)),a.alphaTest>0&&(l.alphaTest.value=a.alphaTest)}function M(l,a){l.diffuse.value.copy(a.color),l.opacity.value=a.opacity,l.rotation.value=a.rotation,a.map&&(l.map.value=a.map,t(a.map,l.mapTransform)),a.alphaMap&&(l.alphaMap.value=a.alphaMap,t(a.alphaMap,l.alphaMapTransform)),a.alphaTest>0&&(l.alphaTest.value=a.alphaTest)}function y(l,a){l.specular.value.copy(a.specular),l.shininess.value=Math.max(a.shininess,1e-4)}function R(l,a){a.gradientMap&&(l.gradientMap.value=a.gradientMap)}function S(l,a){l.metalness.value=a.metalness,a.metalnessMap&&(l.metalnessMap.value=a.metalnessMap,t(a.metalnessMap,l.metalnessMapTransform)),l.roughness.value=a.roughness,a.roughnessMap&&(l.roughnessMap.value=a.roughnessMap,t(a.roughnessMap,l.roughnessMapTransform)),a.envMap&&(l.envMapIntensity.value=a.envMapIntensity)}function A(l,a,L){l.ior.value=a.ior,a.sheen>0&&(l.sheenColor.value.copy(a.sheenColor).multiplyScalar(a.sheen),l.sheenRoughness.value=a.sheenRoughness,a.sheenColorMap&&(l.sheenColorMap.value=a.sheenColorMap,t(a.sheenColorMap,l.sheenColorMapTransform)),a.sheenRoughnessMap&&(l.sheenRoughnessMap.value=a.sheenRoughnessMap,t(a.sheenRoughnessMap,l.sheenRoughnessMapTransform))),a.clearcoat>0&&(l.clearcoat.value=a.clearcoat,l.clearcoatRoughness.value=a.clearcoatRoughness,a.clearcoatMap&&(l.clearcoatMap.value=a.clearcoatMap,t(a.clearcoatMap,l.clearcoatMapTransform)),a.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=a.clearcoatRoughnessMap,t(a.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),a.clearcoatNormalMap&&(l.clearcoatNormalMap.value=a.clearcoatNormalMap,t(a.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(a.clearcoatNormalScale),a.side===pt&&l.clearcoatNormalScale.value.negate())),a.dispersion>0&&(l.dispersion.value=a.dispersion),a.iridescence>0&&(l.iridescence.value=a.iridescence,l.iridescenceIOR.value=a.iridescenceIOR,l.iridescenceThicknessMinimum.value=a.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=a.iridescenceThicknessRange[1],a.iridescenceMap&&(l.iridescenceMap.value=a.iridescenceMap,t(a.iridescenceMap,l.iridescenceMapTransform)),a.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=a.iridescenceThicknessMap,t(a.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),a.transmission>0&&(l.transmission.value=a.transmission,l.transmissionSamplerMap.value=L.texture,l.transmissionSamplerSize.value.set(L.width,L.height),a.transmissionMap&&(l.transmissionMap.value=a.transmissionMap,t(a.transmissionMap,l.transmissionMapTransform)),l.thickness.value=a.thickness,a.thicknessMap&&(l.thicknessMap.value=a.thicknessMap,t(a.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=a.attenuationDistance,l.attenuationColor.value.copy(a.attenuationColor)),a.anisotropy>0&&(l.anisotropyVector.value.set(a.anisotropy*Math.cos(a.anisotropyRotation),a.anisotropy*Math.sin(a.anisotropyRotation)),a.anisotropyMap&&(l.anisotropyMap.value=a.anisotropyMap,t(a.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=a.specularIntensity,l.specularColor.value.copy(a.specularColor),a.specularColorMap&&(l.specularColorMap.value=a.specularColorMap,t(a.specularColorMap,l.specularColorMapTransform)),a.specularIntensityMap&&(l.specularIntensityMap.value=a.specularIntensityMap,t(a.specularIntensityMap,l.specularIntensityMapTransform))}function N(l,a){a.matcap&&(l.matcap.value=a.matcap)}function C(l,a){const L=n.get(a).light;l.referencePosition.value.setFromMatrixPosition(L.matrixWorld),l.nearDistance.value=L.shadow.camera.near,l.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:c}}function _f(e,n,t,i){let c={},s={},h=[];const d=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function U(L,x){const m=x.program;i.uniformBlockBinding(L,m)}function M(L,x){let m=c[L.id];m===void 0&&(N(L),m=y(L),c[L.id]=m,L.addEventListener("dispose",l));const Q=x.program;i.updateUBOMapping(L,Q);const D=n.render.frame;s[L.id]!==D&&(S(L),s[L.id]=D)}function y(L){const x=R();L.__bindingPointIndex=x;const m=e.createBuffer(),Q=L.__size,D=L.usage;return e.bindBuffer(e.UNIFORM_BUFFER,m),e.bufferData(e.UNIFORM_BUFFER,Q,D),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,x,m),m}function R(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(L){const x=c[L.id],m=L.uniforms,Q=L.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let D=0,O=m.length;D<O;D++){const z=Array.isArray(m[D])?m[D]:[m[D]];for(let p=0,f=z.length;p<f;p++){const T=z[p];if(A(T,D,p,Q)===!0){const Y=T.__offset,G=Array.isArray(T.value)?T.value:[T.value];let X=0;for(let $=0;$<G.length;$++){const V=G[$],j=C(V);typeof V=="number"||typeof V=="boolean"?(T.__data[0]=V,e.bufferSubData(e.UNIFORM_BUFFER,Y+X,T.__data)):V.isMatrix3?(T.__data[0]=V.elements[0],T.__data[1]=V.elements[1],T.__data[2]=V.elements[2],T.__data[3]=0,T.__data[4]=V.elements[3],T.__data[5]=V.elements[4],T.__data[6]=V.elements[5],T.__data[7]=0,T.__data[8]=V.elements[6],T.__data[9]=V.elements[7],T.__data[10]=V.elements[8],T.__data[11]=0):(V.toArray(T.__data,X),X+=j.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,Y,T.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function A(L,x,m,Q){const D=L.value,O=x+"_"+m;if(Q[O]===void 0)return typeof D=="number"||typeof D=="boolean"?Q[O]=D:Q[O]=D.clone(),!0;{const z=Q[O];if(typeof D=="number"||typeof D=="boolean"){if(z!==D)return Q[O]=D,!0}else if(z.equals(D)===!1)return z.copy(D),!0}return!1}function N(L){const x=L.uniforms;let m=0;const Q=16;for(let O=0,z=x.length;O<z;O++){const p=Array.isArray(x[O])?x[O]:[x[O]];for(let f=0,T=p.length;f<T;f++){const Y=p[f],G=Array.isArray(Y.value)?Y.value:[Y.value];for(let X=0,$=G.length;X<$;X++){const V=G[X],j=C(V),F=m%Q,_e=F%j.boundary,Se=F+_e;m+=_e,Se!==0&&Q-Se<j.storage&&(m+=Q-Se),Y.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=m,m+=j.storage}}}const D=m%Q;return D>0&&(m+=Q-D),L.__size=m,L.__cache={},this}function C(L){const x={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(x.boundary=4,x.storage=4):L.isVector2?(x.boundary=8,x.storage=8):L.isVector3||L.isColor?(x.boundary=16,x.storage=12):L.isVector4?(x.boundary=16,x.storage=16):L.isMatrix3?(x.boundary=48,x.storage=48):L.isMatrix4?(x.boundary=64,x.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),x}function l(L){const x=L.target;x.removeEventListener("dispose",l);const m=h.indexOf(x.__bindingPointIndex);h.splice(m,1),e.deleteBuffer(c[x.id]),delete c[x.id],delete s[x.id]}function a(){for(const L in c)e.deleteBuffer(c[L]);h=[],c={},s={}}return{bind:U,update:M,dispose:a}}class Ef{constructor(n={}){const{canvas:t=Dr(),context:i=null,depth:c=!0,stencil:s=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:U=!0,preserveDrawingBuffer:M=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:R=!1,reverseDepthBuffer:S=!1}=n;this.isWebGLRenderer=!0;let A;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=i.getContextAttributes().alpha}else A=h;const N=new Uint32Array(4),C=new Int32Array(4);let l=null,a=null;const L=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pr,this.toneMapping=Ct,this.toneMappingExposure=1;const m=this;let Q=!1,D=0,O=0,z=null,p=-1,f=null;const T=new ot,Y=new ot;let G=null;const X=new Ze(0);let $=0,V=t.width,j=t.height,F=1,_e=null,Se=null;const Le=new ot(0,0,V,j),Be=new ot(0,0,V,j);let $e=!1;const H=new Wi;let J=!1,pe=!1;const ne=new Ut,Me=new Ut,Ae=new et,we=new ot,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function Qe(){return z===null?F:1}let E=i;function lt(o,g){return t.getContext(o,g)}try{const o={alpha:!0,depth:c,stencil:s,antialias:d,premultipliedAlpha:U,preserveDrawingBuffer:M,powerPreference:y,failIfMajorPerformanceCaveat:R};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hr}`),t.addEventListener("webglcontextlost",W,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",ae,!1),E===null){const g="webgl2";if(E=lt(g,o),E===null)throw lt(g)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(o){throw console.error("THREE.WebGLRenderer: "+o.message),o}let Ue,De,ve,ze,ge,u,r,b,k,q,B,he,ie,se,Ne,K,ce,Ee,Te,le,ye,Ce,ke,_;function te(){Ue=new Rc(E),Ue.init(),Ce=new cf(E,Ue),De=new Mc(E,Ue,n,Ce),ve=new of(E,Ue),De.reverseDepthBuffer&&S&&ve.buffers.depth.setReversed(!0),ze=new Pc(E),ge=new Yl,u=new sf(E,Ue,ve,ge,De,Ce,ze),r=new xc(m),b=new Ac(m),k=new Or(E),ke=new Ec(E,k),q=new bc(E,k,ze,ke),B=new wc(E,q,k,ze),Te=new Lc(E,De,u),K=new Tc(ge),he=new Xl(m,r,b,Ue,De,ke,K),ie=new mf(m,ge),se=new Kl,Ne=new ef(Ue),Ee=new vc(m,r,b,ve,B,A,U),ce=new af(m,B,De),_=new _f(E,ze,De,ve),le=new Sc(E,Ue,ze),ye=new Cc(E,Ue,ze),ze.programs=he.programs,m.capabilities=De,m.extensions=Ue,m.properties=ge,m.renderLists=se,m.shadowMap=ce,m.state=ve,m.info=ze}te();const I=new pf(m,E);this.xr=I,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const o=Ue.get("WEBGL_lose_context");o&&o.loseContext()},this.forceContextRestore=function(){const o=Ue.get("WEBGL_lose_context");o&&o.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(o){o!==void 0&&(F=o,this.setSize(V,j,!1))},this.getSize=function(o){return o.set(V,j)},this.setSize=function(o,g,P=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=o,j=g,t.width=Math.floor(o*F),t.height=Math.floor(g*F),P===!0&&(t.style.width=o+"px",t.style.height=g+"px"),this.setViewport(0,0,o,g)},this.getDrawingBufferSize=function(o){return o.set(V*F,j*F).floor()},this.setDrawingBufferSize=function(o,g,P){V=o,j=g,F=P,t.width=Math.floor(o*P),t.height=Math.floor(g*P),this.setViewport(0,0,o,g)},this.getCurrentViewport=function(o){return o.copy(T)},this.getViewport=function(o){return o.copy(Le)},this.setViewport=function(o,g,P,w){o.isVector4?Le.set(o.x,o.y,o.z,o.w):Le.set(o,g,P,w),ve.viewport(T.copy(Le).multiplyScalar(F).round())},this.getScissor=function(o){return o.copy(Be)},this.setScissor=function(o,g,P,w){o.isVector4?Be.set(o.x,o.y,o.z,o.w):Be.set(o,g,P,w),ve.scissor(Y.copy(Be).multiplyScalar(F).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(o){ve.setScissorTest($e=o)},this.setOpaqueSort=function(o){_e=o},this.setTransparentSort=function(o){Se=o},this.getClearColor=function(o){return o.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(o=!0,g=!0,P=!0){let w=0;if(o){let v=!1;if(z!==null){const Z=z.texture.format;v=Z===Ki||Z===qi||Z===Yi}if(v){const Z=z.texture.type,re=Z===Pt||Z===Vt||Z===nn||Z===kt||Z===zi||Z===Xi,fe=Ee.getClearColor(),de=Ee.getClearAlpha(),xe=fe.r,be=fe.g,ue=fe.b;re?(N[0]=xe,N[1]=be,N[2]=ue,N[3]=de,E.clearBufferuiv(E.COLOR,0,N)):(C[0]=xe,C[1]=be,C[2]=ue,C[3]=de,E.clearBufferiv(E.COLOR,0,C))}else w|=E.COLOR_BUFFER_BIT}g&&(w|=E.DEPTH_BUFFER_BIT),P&&(w|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(w)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",W,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),se.dispose(),Ne.dispose(),ge.dispose(),r.dispose(),b.dispose(),B.dispose(),ke.dispose(),_.dispose(),he.dispose(),I.dispose(),I.removeEventListener("sessionstart",yn),I.removeEventListener("sessionend",In),xt.stop()};function W(o){o.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Q=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),Q=!1;const o=ze.autoReset,g=ce.enabled,P=ce.autoUpdate,w=ce.needsUpdate,v=ce.type;te(),ze.autoReset=o,ce.enabled=g,ce.autoUpdate=P,ce.needsUpdate=w,ce.type=v}function ae(o){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",o.statusMessage)}function Re(o){const g=o.target;g.removeEventListener("dispose",Re),Je(g)}function Je(o){it(o),ge.remove(o)}function it(o){const g=ge.get(o).programs;g!==void 0&&(g.forEach(function(P){he.releaseProgram(P)}),o.isShaderMaterial&&he.releaseShaderCache(o))}this.renderBufferDirect=function(o,g,P,w,v,Z){g===null&&(g=Ke);const re=v.isMesh&&v.matrixWorld.determinant()<0,fe=ra(o,g,P,w,v);ve.setMaterial(w,re);let de=P.index,xe=1;if(w.wireframe===!0){if(de=q.getWireframeAttribute(P),de===void 0)return;xe=2}const be=P.drawRange,ue=P.attributes.position;let Oe=be.start*xe,We=(be.start+be.count)*xe;Z!==null&&(Oe=Math.max(Oe,Z.start*xe),We=Math.min(We,(Z.start+Z.count)*xe)),de!==null?(Oe=Math.max(Oe,0),We=Math.min(We,de.count)):ue!=null&&(Oe=Math.max(Oe,0),We=Math.min(We,ue.count));const Xe=We-Oe;if(Xe<0||Xe===1/0)return;ke.setup(v,w,fe,P,de);let at,Ge=le;if(de!==null&&(at=k.get(de),Ge=ye,Ge.setIndex(at)),v.isMesh)w.wireframe===!0?(ve.setLineWidth(w.wireframeLinewidth*Qe()),Ge.setMode(E.LINES)):Ge.setMode(E.TRIANGLES);else if(v.isLine){let me=w.linewidth;me===void 0&&(me=1),ve.setLineWidth(me*Qe()),v.isLineSegments?Ge.setMode(E.LINES):v.isLineLoop?Ge.setMode(E.LINE_LOOP):Ge.setMode(E.LINE_STRIP)}else v.isPoints?Ge.setMode(E.POINTS):v.isSprite&&Ge.setMode(E.TRIANGLES);if(v.isBatchedMesh)if(v._multiDrawInstances!==null)Ge.renderMultiDrawInstances(v._multiDrawStarts,v._multiDrawCounts,v._multiDrawCount,v._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))Ge.renderMultiDraw(v._multiDrawStarts,v._multiDrawCounts,v._multiDrawCount);else{const me=v._multiDrawStarts,gt=v._multiDrawCounts,He=v._multiDrawCount,ut=de?k.get(de).bytesPerElement:1,Lt=ge.get(w).currentProgram.getUniforms();for(let ct=0;ct<He;ct++)Lt.setValue(E,"_gl_DrawID",ct),Ge.render(me[ct]/ut,gt[ct])}else if(v.isInstancedMesh)Ge.renderInstances(Oe,Xe,v.count);else if(P.isInstancedBufferGeometry){const me=P._maxInstanceCount!==void 0?P._maxInstanceCount:1/0,gt=Math.min(P.instanceCount,me);Ge.renderInstances(Oe,Xe,gt)}else Ge.render(Oe,Xe)};function Ve(o,g,P){o.transparent===!0&&o.side===Et&&o.forceSinglePass===!1?(o.side=pt,o.needsUpdate=!0,Xt(o,g,P),o.side=Ht,o.needsUpdate=!0,Xt(o,g,P),o.side=Et):Xt(o,g,P)}this.compile=function(o,g,P=null){P===null&&(P=o),a=Ne.get(P),a.init(g),x.push(a),P.traverseVisible(function(v){v.isLight&&v.layers.test(g.layers)&&(a.pushLight(v),v.castShadow&&a.pushShadow(v))}),o!==P&&o.traverseVisible(function(v){v.isLight&&v.layers.test(g.layers)&&(a.pushLight(v),v.castShadow&&a.pushShadow(v))}),a.setupLights();const w=new Set;return o.traverse(function(v){if(!(v.isMesh||v.isPoints||v.isLine||v.isSprite))return;const Z=v.material;if(Z)if(Array.isArray(Z))for(let re=0;re<Z.length;re++){const fe=Z[re];Ve(fe,P,v),w.add(fe)}else Ve(Z,P,v),w.add(Z)}),x.pop(),a=null,w},this.compileAsync=function(o,g,P=null){const w=this.compile(o,g,P);return new Promise(v=>{function Z(){if(w.forEach(function(re){ge.get(re).currentProgram.isReady()&&w.delete(re)}),w.size===0){v(o);return}setTimeout(Z,10)}Ue.get("KHR_parallel_shader_compile")!==null?Z():setTimeout(Z,10)})};let dt=null;function _t(o){dt&&dt(o)}function yn(){xt.stop()}function In(){xt.start()}const xt=new ea;xt.setAnimationLoop(_t),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(o){dt=o,I.setAnimationLoop(o),o===null?xt.stop():xt.start()},I.addEventListener("sessionstart",yn),I.addEventListener("sessionend",In),this.render=function(o,g){if(g!==void 0&&g.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Q===!0)return;if(o.matrixWorldAutoUpdate===!0&&o.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(I.cameraAutoUpdate===!0&&I.updateCamera(g),g=I.getCamera()),o.isScene===!0&&o.onBeforeRender(m,o,g,z),a=Ne.get(o,x.length),a.init(g),x.push(a),Me.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),H.setFromProjectionMatrix(Me),pe=this.localClippingEnabled,J=K.init(this.clippingPlanes,pe),l=se.get(o,L.length),l.init(),L.push(l),I.enabled===!0&&I.isPresenting===!0){const Z=m.xr.getDepthSensingMesh();Z!==null&&cn(Z,g,-1/0,m.sortObjects)}cn(o,g,0,m.sortObjects),l.finish(),m.sortObjects===!0&&l.sort(_e,Se),Ie=I.enabled===!1||I.isPresenting===!1||I.hasDepthSensing()===!1,Ie&&Ee.addToRenderList(l,o),this.info.render.frame++,J===!0&&K.beginShadows();const P=a.state.shadowsArray;ce.render(P,o,g),J===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset();const w=l.opaque,v=l.transmissive;if(a.setupLights(),g.isArrayCamera){const Z=g.cameras;if(v.length>0)for(let re=0,fe=Z.length;re<fe;re++){const de=Z[re];On(w,v,o,de)}Ie&&Ee.render(o);for(let re=0,fe=Z.length;re<fe;re++){const de=Z[re];Nn(l,o,de,de.viewport)}}else v.length>0&&On(w,v,o,g),Ie&&Ee.render(o),Nn(l,o,g);z!==null&&(u.updateMultisampleRenderTarget(z),u.updateRenderTargetMipmap(z)),o.isScene===!0&&o.onAfterRender(m,o,g),ke.resetDefaultState(),p=-1,f=null,x.pop(),x.length>0?(a=x[x.length-1],J===!0&&K.setGlobalState(m.clippingPlanes,a.state.camera)):a=null,L.pop(),L.length>0?l=L[L.length-1]:l=null};function cn(o,g,P,w){if(o.visible===!1)return;if(o.layers.test(g.layers)){if(o.isGroup)P=o.renderOrder;else if(o.isLOD)o.autoUpdate===!0&&o.update(g);else if(o.isLight)a.pushLight(o),o.castShadow&&a.pushShadow(o);else if(o.isSprite){if(!o.frustumCulled||H.intersectsSprite(o)){w&&we.setFromMatrixPosition(o.matrixWorld).applyMatrix4(Me);const re=B.update(o),fe=o.material;fe.visible&&l.push(o,re,fe,P,we.z,null)}}else if((o.isMesh||o.isLine||o.isPoints)&&(!o.frustumCulled||H.intersectsObject(o))){const re=B.update(o),fe=o.material;if(w&&(o.boundingSphere!==void 0?(o.boundingSphere===null&&o.computeBoundingSphere(),we.copy(o.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),we.copy(re.boundingSphere.center)),we.applyMatrix4(o.matrixWorld).applyMatrix4(Me)),Array.isArray(fe)){const de=re.groups;for(let xe=0,be=de.length;xe<be;xe++){const ue=de[xe],Oe=fe[ue.materialIndex];Oe&&Oe.visible&&l.push(o,re,Oe,P,we.z,ue)}}else fe.visible&&l.push(o,re,fe,P,we.z,null)}}const Z=o.children;for(let re=0,fe=Z.length;re<fe;re++)cn(Z[re],g,P,w)}function Nn(o,g,P,w){const v=o.opaque,Z=o.transmissive,re=o.transparent;a.setupLightsView(P),J===!0&&K.setGlobalState(m.clippingPlanes,P),w&&ve.viewport(T.copy(w)),v.length>0&&zt(v,g,P),Z.length>0&&zt(Z,g,P),re.length>0&&zt(re,g,P),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function On(o,g,P,w){if((P.isScene===!0?P.overrideMaterial:null)!==null)return;a.state.transmissionRenderTarget[w.id]===void 0&&(a.state.transmissionRenderTarget[w.id]=new Wt(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Ln:Pt,minFilter:Ot,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const Z=a.state.transmissionRenderTarget[w.id],re=w.viewport||T;Z.setSize(re.z,re.w);const fe=m.getRenderTarget();m.setRenderTarget(Z),m.getClearColor(X),$=m.getClearAlpha(),$<1&&m.setClearColor(16777215,.5),m.clear(),Ie&&Ee.render(P);const de=m.toneMapping;m.toneMapping=Ct;const xe=w.viewport;if(w.viewport!==void 0&&(w.viewport=void 0),a.setupLightsView(w),J===!0&&K.setGlobalState(m.clippingPlanes,w),zt(o,P,w),u.updateMultisampleRenderTarget(Z),u.updateRenderTargetMipmap(Z),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let ue=0,Oe=g.length;ue<Oe;ue++){const We=g[ue],Xe=We.object,at=We.geometry,Ge=We.material,me=We.group;if(Ge.side===Et&&Xe.layers.test(w.layers)){const gt=Ge.side;Ge.side=pt,Ge.needsUpdate=!0,Fn(Xe,P,w,at,Ge,me),Ge.side=gt,Ge.needsUpdate=!0,be=!0}}be===!0&&(u.updateMultisampleRenderTarget(Z),u.updateRenderTargetMipmap(Z))}m.setRenderTarget(fe),m.setClearColor(X,$),xe!==void 0&&(w.viewport=xe),m.toneMapping=de}function zt(o,g,P){const w=g.isScene===!0?g.overrideMaterial:null;for(let v=0,Z=o.length;v<Z;v++){const re=o[v],fe=re.object,de=re.geometry,xe=w===null?re.material:w,be=re.group;fe.layers.test(P.layers)&&Fn(fe,g,P,de,xe,be)}}function Fn(o,g,P,w,v,Z){o.onBeforeRender(m,g,P,w,v,Z),o.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,o.matrixWorld),o.normalMatrix.getNormalMatrix(o.modelViewMatrix),v.onBeforeRender(m,g,P,w,o,Z),v.transparent===!0&&v.side===Et&&v.forceSinglePass===!1?(v.side=pt,v.needsUpdate=!0,m.renderBufferDirect(P,g,w,v,o,Z),v.side=Ht,v.needsUpdate=!0,m.renderBufferDirect(P,g,w,v,o,Z),v.side=Et):m.renderBufferDirect(P,g,w,v,o,Z),o.onAfterRender(m,g,P,w,v,Z)}function Xt(o,g,P){g.isScene!==!0&&(g=Ke);const w=ge.get(o),v=a.state.lights,Z=a.state.shadowsArray,re=v.state.version,fe=he.getParameters(o,v.state,Z,g,P),de=he.getProgramCacheKey(fe);let xe=w.programs;w.environment=o.isMeshStandardMaterial?g.environment:null,w.fog=g.fog,w.envMap=(o.isMeshStandardMaterial?b:r).get(o.envMap||w.environment),w.envMapRotation=w.environment!==null&&o.envMap===null?g.environmentRotation:o.envMapRotation,xe===void 0&&(o.addEventListener("dispose",Re),xe=new Map,w.programs=xe);let be=xe.get(de);if(be!==void 0){if(w.currentProgram===be&&w.lightsStateVersion===re)return Gn(o,fe),be}else fe.uniforms=he.getUniforms(o),o.onBeforeCompile(fe,m),be=he.acquireProgram(fe,de),xe.set(de,be),w.uniforms=fe.uniforms;const ue=w.uniforms;return(!o.isShaderMaterial&&!o.isRawShaderMaterial||o.clipping===!0)&&(ue.clippingPlanes=K.uniform),Gn(o,fe),w.needsLights=sa(o),w.lightsStateVersion=re,w.needsLights&&(ue.ambientLightColor.value=v.state.ambient,ue.lightProbe.value=v.state.probe,ue.directionalLights.value=v.state.directional,ue.directionalLightShadows.value=v.state.directionalShadow,ue.spotLights.value=v.state.spot,ue.spotLightShadows.value=v.state.spotShadow,ue.rectAreaLights.value=v.state.rectArea,ue.ltc_1.value=v.state.rectAreaLTC1,ue.ltc_2.value=v.state.rectAreaLTC2,ue.pointLights.value=v.state.point,ue.pointLightShadows.value=v.state.pointShadow,ue.hemisphereLights.value=v.state.hemi,ue.directionalShadowMap.value=v.state.directionalShadowMap,ue.directionalShadowMatrix.value=v.state.directionalShadowMatrix,ue.spotShadowMap.value=v.state.spotShadowMap,ue.spotLightMatrix.value=v.state.spotLightMatrix,ue.spotLightMap.value=v.state.spotLightMap,ue.pointShadowMap.value=v.state.pointShadowMap,ue.pointShadowMatrix.value=v.state.pointShadowMatrix),w.currentProgram=be,w.uniformsList=null,be}function Bn(o){if(o.uniformsList===null){const g=o.currentProgram.getUniforms();o.uniformsList=jt.seqWithValue(g.seq,o.uniforms)}return o.uniformsList}function Gn(o,g){const P=ge.get(o);P.outputColorSpace=g.outputColorSpace,P.batching=g.batching,P.batchingColor=g.batchingColor,P.instancing=g.instancing,P.instancingColor=g.instancingColor,P.instancingMorph=g.instancingMorph,P.skinning=g.skinning,P.morphTargets=g.morphTargets,P.morphNormals=g.morphNormals,P.morphColors=g.morphColors,P.morphTargetsCount=g.morphTargetsCount,P.numClippingPlanes=g.numClippingPlanes,P.numIntersection=g.numClipIntersection,P.vertexAlphas=g.vertexAlphas,P.vertexTangents=g.vertexTangents,P.toneMapping=g.toneMapping}function ra(o,g,P,w,v){g.isScene!==!0&&(g=Ke),u.resetTextureUnits();const Z=g.fog,re=w.isMeshStandardMaterial?g.environment:null,fe=z===null?m.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Un,de=(w.isMeshStandardMaterial?b:r).get(w.envMap||re),xe=w.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,be=!!P.attributes.tangent&&(!!w.normalMap||w.anisotropy>0),ue=!!P.morphAttributes.position,Oe=!!P.morphAttributes.normal,We=!!P.morphAttributes.color;let Xe=Ct;w.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Xe=m.toneMapping);const at=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Ge=at!==void 0?at.length:0,me=ge.get(w),gt=a.state.lights;if(J===!0&&(pe===!0||o!==f)){const ft=o===f&&w.id===p;K.setState(w,o,ft)}let He=!1;w.version===me.__version?(me.needsLights&&me.lightsStateVersion!==gt.state.version||me.outputColorSpace!==fe||v.isBatchedMesh&&me.batching===!1||!v.isBatchedMesh&&me.batching===!0||v.isBatchedMesh&&me.batchingColor===!0&&v.colorTexture===null||v.isBatchedMesh&&me.batchingColor===!1&&v.colorTexture!==null||v.isInstancedMesh&&me.instancing===!1||!v.isInstancedMesh&&me.instancing===!0||v.isSkinnedMesh&&me.skinning===!1||!v.isSkinnedMesh&&me.skinning===!0||v.isInstancedMesh&&me.instancingColor===!0&&v.instanceColor===null||v.isInstancedMesh&&me.instancingColor===!1&&v.instanceColor!==null||v.isInstancedMesh&&me.instancingMorph===!0&&v.morphTexture===null||v.isInstancedMesh&&me.instancingMorph===!1&&v.morphTexture!==null||me.envMap!==de||w.fog===!0&&me.fog!==Z||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==K.numPlanes||me.numIntersection!==K.numIntersection)||me.vertexAlphas!==xe||me.vertexTangents!==be||me.morphTargets!==ue||me.morphNormals!==Oe||me.morphColors!==We||me.toneMapping!==Xe||me.morphTargetsCount!==Ge)&&(He=!0):(He=!0,me.__version=w.version);let ut=me.currentProgram;He===!0&&(ut=Xt(w,g,v));let Lt=!1,ct=!1,yt=!1;const Ye=ut.getUniforms(),ht=me.uniforms;if(ve.useProgram(ut.program)&&(Lt=!0,ct=!0,yt=!0),w.id!==p&&(p=w.id,ct=!0),Lt||f!==o){ve.buffers.depth.getReversed()?(ne.copy(o.projectionMatrix),yr(ne),Ir(ne),Ye.setValue(E,"projectionMatrix",ne)):Ye.setValue(E,"projectionMatrix",o.projectionMatrix),Ye.setValue(E,"viewMatrix",o.matrixWorldInverse);const St=Ye.map.cameraPosition;St!==void 0&&St.setValue(E,Ae.setFromMatrixPosition(o.matrixWorld)),De.logarithmicDepthBuffer&&Ye.setValue(E,"logDepthBufFC",2/(Math.log(o.far+1)/Math.LN2)),(w.isMeshPhongMaterial||w.isMeshToonMaterial||w.isMeshLambertMaterial||w.isMeshBasicMaterial||w.isMeshStandardMaterial||w.isShaderMaterial)&&Ye.setValue(E,"isOrthographic",o.isOrthographicCamera===!0),f!==o&&(f=o,ct=!0,yt=!0)}if(v.isSkinnedMesh){Ye.setOptional(E,v,"bindMatrix"),Ye.setOptional(E,v,"bindMatrixInverse");const ft=v.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),Ye.setValue(E,"boneTexture",ft.boneTexture,u))}v.isBatchedMesh&&(Ye.setOptional(E,v,"batchingTexture"),Ye.setValue(E,"batchingTexture",v._matricesTexture,u),Ye.setOptional(E,v,"batchingIdTexture"),Ye.setValue(E,"batchingIdTexture",v._indirectTexture,u),Ye.setOptional(E,v,"batchingColorTexture"),v._colorsTexture!==null&&Ye.setValue(E,"batchingColorTexture",v._colorsTexture,u));const It=P.morphAttributes;if((It.position!==void 0||It.normal!==void 0||It.color!==void 0)&&Te.update(v,P,ut),(ct||me.receiveShadow!==v.receiveShadow)&&(me.receiveShadow=v.receiveShadow,Ye.setValue(E,"receiveShadow",v.receiveShadow)),w.isMeshGouraudMaterial&&w.envMap!==null&&(ht.envMap.value=de,ht.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),w.isMeshStandardMaterial&&w.envMap===null&&g.environment!==null&&(ht.envMapIntensity.value=g.environmentIntensity),ct&&(Ye.setValue(E,"toneMappingExposure",m.toneMappingExposure),me.needsLights&&oa(ht,yt),Z&&w.fog===!0&&ie.refreshFogUniforms(ht,Z),ie.refreshMaterialUniforms(ht,w,F,j,a.state.transmissionRenderTarget[o.id]),jt.upload(E,Bn(me),ht,u)),w.isShaderMaterial&&w.uniformsNeedUpdate===!0&&(jt.upload(E,Bn(me),ht,u),w.uniformsNeedUpdate=!1),w.isSpriteMaterial&&Ye.setValue(E,"center",v.center),Ye.setValue(E,"modelViewMatrix",v.modelViewMatrix),Ye.setValue(E,"normalMatrix",v.normalMatrix),Ye.setValue(E,"modelMatrix",v.matrixWorld),w.isShaderMaterial||w.isRawShaderMaterial){const ft=w.uniformsGroups;for(let St=0,Mt=ft.length;St<Mt;St++){const Hn=ft[St];_.update(Hn,ut),_.bind(Hn,ut)}}return ut}function oa(o,g){o.ambientLightColor.needsUpdate=g,o.lightProbe.needsUpdate=g,o.directionalLights.needsUpdate=g,o.directionalLightShadows.needsUpdate=g,o.pointLights.needsUpdate=g,o.pointLightShadows.needsUpdate=g,o.spotLights.needsUpdate=g,o.spotLightShadows.needsUpdate=g,o.rectAreaLights.needsUpdate=g,o.hemisphereLights.needsUpdate=g}function sa(o){return o.isMeshLambertMaterial||o.isMeshToonMaterial||o.isMeshPhongMaterial||o.isMeshStandardMaterial||o.isShadowMaterial||o.isShaderMaterial&&o.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(o,g,P){ge.get(o.texture).__webglTexture=g,ge.get(o.depthTexture).__webglTexture=P;const w=ge.get(o);w.__hasExternalTextures=!0,w.__autoAllocateDepthBuffer=P===void 0,w.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),w.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(o,g){const P=ge.get(o);P.__webglFramebuffer=g,P.__useDefaultFramebuffer=g===void 0},this.setRenderTarget=function(o,g=0,P=0){z=o,D=g,O=P;let w=!0,v=null,Z=!1,re=!1;if(o){const de=ge.get(o);if(de.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(E.FRAMEBUFFER,null),w=!1;else if(de.__webglFramebuffer===void 0)u.setupRenderTarget(o);else if(de.__hasExternalTextures)u.rebindTextures(o,ge.get(o.texture).__webglTexture,ge.get(o.depthTexture).__webglTexture);else if(o.depthBuffer){const ue=o.depthTexture;if(de.__boundDepthTexture!==ue){if(ue!==null&&ge.has(ue)&&(o.width!==ue.image.width||o.height!==ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");u.setupDepthRenderbuffer(o)}}const xe=o.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(re=!0);const be=ge.get(o).__webglFramebuffer;o.isWebGLCubeRenderTarget?(Array.isArray(be[g])?v=be[g][P]:v=be[g],Z=!0):o.samples>0&&u.useMultisampledRTT(o)===!1?v=ge.get(o).__webglMultisampledFramebuffer:Array.isArray(be)?v=be[P]:v=be,T.copy(o.viewport),Y.copy(o.scissor),G=o.scissorTest}else T.copy(Le).multiplyScalar(F).floor(),Y.copy(Be).multiplyScalar(F).floor(),G=$e;if(ve.bindFramebuffer(E.FRAMEBUFFER,v)&&w&&ve.drawBuffers(o,v),ve.viewport(T),ve.scissor(Y),ve.setScissorTest(G),Z){const de=ge.get(o.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+g,de.__webglTexture,P)}else if(re){const de=ge.get(o.texture),xe=g||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,de.__webglTexture,P||0,xe)}p=-1},this.readRenderTargetPixels=function(o,g,P,w,v,Z,re){if(!(o&&o.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=ge.get(o).__webglFramebuffer;if(o.isWebGLCubeRenderTarget&&re!==void 0&&(fe=fe[re]),fe){ve.bindFramebuffer(E.FRAMEBUFFER,fe);try{const de=o.texture,xe=de.format,be=de.type;if(!De.textureFormatReadable(xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}g>=0&&g<=o.width-w&&P>=0&&P<=o.height-v&&E.readPixels(g,P,w,v,Ce.convert(xe),Ce.convert(be),Z)}finally{const de=z!==null?ge.get(z).__webglFramebuffer:null;ve.bindFramebuffer(E.FRAMEBUFFER,de)}}},this.readRenderTargetPixelsAsync=async function(o,g,P,w,v,Z,re){if(!(o&&o.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=ge.get(o).__webglFramebuffer;if(o.isWebGLCubeRenderTarget&&re!==void 0&&(fe=fe[re]),fe){const de=o.texture,xe=de.format,be=de.type;if(!De.textureFormatReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(g>=0&&g<=o.width-w&&P>=0&&P<=o.height-v){ve.bindFramebuffer(E.FRAMEBUFFER,fe);const ue=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,ue),E.bufferData(E.PIXEL_PACK_BUFFER,Z.byteLength,E.STREAM_READ),E.readPixels(g,P,w,v,Ce.convert(xe),Ce.convert(be),0);const Oe=z!==null?ge.get(z).__webglFramebuffer:null;ve.bindFramebuffer(E.FRAMEBUFFER,Oe);const We=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Nr(E,We,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,ue),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Z),E.deleteBuffer(ue),E.deleteSync(We),Z}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(o,g=null,P=0){o.isTexture!==!0&&(Ft("WebGLRenderer: copyFramebufferToTexture function signature has changed."),g=arguments[0]||null,o=arguments[1]);const w=Math.pow(2,-P),v=Math.floor(o.image.width*w),Z=Math.floor(o.image.height*w),re=g!==null?g.x:0,fe=g!==null?g.y:0;u.setTexture2D(o,0),E.copyTexSubImage2D(E.TEXTURE_2D,P,0,0,re,fe,v,Z),ve.unbindTexture()},this.copyTextureToTexture=function(o,g,P=null,w=null,v=0){o.isTexture!==!0&&(Ft("WebGLRenderer: copyTextureToTexture function signature has changed."),w=arguments[0]||null,o=arguments[1],g=arguments[2],v=arguments[3]||0,P=null);let Z,re,fe,de,xe,be,ue,Oe,We;const Xe=o.isCompressedTexture?o.mipmaps[v]:o.image;P!==null?(Z=P.max.x-P.min.x,re=P.max.y-P.min.y,fe=P.isBox3?P.max.z-P.min.z:1,de=P.min.x,xe=P.min.y,be=P.isBox3?P.min.z:0):(Z=Xe.width,re=Xe.height,fe=Xe.depth||1,de=0,xe=0,be=0),w!==null?(ue=w.x,Oe=w.y,We=w.z):(ue=0,Oe=0,We=0);const at=Ce.convert(g.format),Ge=Ce.convert(g.type);let me;g.isData3DTexture?(u.setTexture3D(g,0),me=E.TEXTURE_3D):g.isDataArrayTexture||g.isCompressedArrayTexture?(u.setTexture2DArray(g,0),me=E.TEXTURE_2D_ARRAY):(u.setTexture2D(g,0),me=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,g.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,g.unpackAlignment);const gt=E.getParameter(E.UNPACK_ROW_LENGTH),He=E.getParameter(E.UNPACK_IMAGE_HEIGHT),ut=E.getParameter(E.UNPACK_SKIP_PIXELS),Lt=E.getParameter(E.UNPACK_SKIP_ROWS),ct=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Xe.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Xe.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,de),E.pixelStorei(E.UNPACK_SKIP_ROWS,xe),E.pixelStorei(E.UNPACK_SKIP_IMAGES,be);const yt=o.isDataArrayTexture||o.isData3DTexture,Ye=g.isDataArrayTexture||g.isData3DTexture;if(o.isRenderTargetTexture||o.isDepthTexture){const ht=ge.get(o),It=ge.get(g),ft=ge.get(ht.__renderTarget),St=ge.get(It.__renderTarget);ve.bindFramebuffer(E.READ_FRAMEBUFFER,ft.__webglFramebuffer),ve.bindFramebuffer(E.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Mt=0;Mt<fe;Mt++)yt&&E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ge.get(o).__webglTexture,v,be+Mt),o.isDepthTexture?(Ye&&E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ge.get(g).__webglTexture,v,We+Mt),E.blitFramebuffer(de,xe,Z,re,ue,Oe,Z,re,E.DEPTH_BUFFER_BIT,E.NEAREST)):Ye?E.copyTexSubImage3D(me,v,ue,Oe,We+Mt,de,xe,Z,re):E.copyTexSubImage2D(me,v,ue,Oe,We+Mt,de,xe,Z,re);ve.bindFramebuffer(E.READ_FRAMEBUFFER,null),ve.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Ye?o.isDataTexture||o.isData3DTexture?E.texSubImage3D(me,v,ue,Oe,We,Z,re,fe,at,Ge,Xe.data):g.isCompressedArrayTexture?E.compressedTexSubImage3D(me,v,ue,Oe,We,Z,re,fe,at,Xe.data):E.texSubImage3D(me,v,ue,Oe,We,Z,re,fe,at,Ge,Xe):o.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,v,ue,Oe,Z,re,at,Ge,Xe.data):o.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,v,ue,Oe,Xe.width,Xe.height,at,Xe.data):E.texSubImage2D(E.TEXTURE_2D,v,ue,Oe,Z,re,at,Ge,Xe);E.pixelStorei(E.UNPACK_ROW_LENGTH,gt),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,He),E.pixelStorei(E.UNPACK_SKIP_PIXELS,ut),E.pixelStorei(E.UNPACK_SKIP_ROWS,Lt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,ct),v===0&&g.generateMipmaps&&E.generateMipmap(me),ve.unbindTexture()},this.copyTextureToTexture3D=function(o,g,P=null,w=null,v=0){return o.isTexture!==!0&&(Ft("WebGLRenderer: copyTextureToTexture3D function signature has changed."),P=arguments[0]||null,w=arguments[1]||null,o=arguments[2],g=arguments[3],v=arguments[4]||0),Ft('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(o,g,P,w,v)},this.initRenderTarget=function(o){ge.get(o).__webglFramebuffer===void 0&&u.setupRenderTarget(o)},this.initTexture=function(o){o.isCubeTexture?u.setTextureCube(o,0):o.isData3DTexture?u.setTexture3D(o,0):o.isDataArrayTexture||o.isCompressedArrayTexture?u.setTexture2DArray(o,0):u.setTexture2D(o,0),ve.unbindTexture()},this.resetState=function(){D=0,O=0,z=null,ve.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(n),t.unpackColorSpace=je._getUnpackColorSpace()}}export{Pe as S,ee as U,Ef as W,mt as a,cf as b};
