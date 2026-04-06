import{b as m}from"./maplibre-util-qi_X5axi.js";function De(i,n){return i=m(Math.floor(i),0,255),n=m(Math.floor(n),0,255),256*i+n}const h=`#ifdef GL_ES
precision mediump float;
#else
#if !defined(lowp)
#define lowp
#endif
#if !defined(mediump)
#define mediump
#endif
#if !defined(highp)
#define highp
#endif
#endif
out highp vec4 fragColor;`,x=`#ifdef GL_ES
precision highp float;
#else
#if !defined(lowp)
#define lowp
#endif
#if !defined(mediump)
#define mediump
#endif
#if !defined(highp)
#define highp
#endif
#endif
vec2 unpack_float(const float packedValue) {int packedIntValue=int(packedValue);int v0=packedIntValue/256;return vec2(v0,packedIntValue-v0*256);}vec2 unpack_opacity(const float packedOpacity) {int intOpacity=int(packedOpacity)/2;return vec2(float(intOpacity)/127.0,mod(packedOpacity,2.0));}vec4 decode_color(const vec2 encodedColor) {return vec4(unpack_float(encodedColor[0])/255.0,unpack_float(encodedColor[1])/255.0
);}float unpack_mix_vec2(const vec2 packedValue,const float t) {return mix(packedValue[0],packedValue[1],t);}vec4 unpack_mix_color(const vec4 packedColors,const float t) {vec4 minColor=decode_color(vec2(packedColors[0],packedColors[1]));vec4 maxColor=decode_color(vec2(packedColors[2],packedColors[3]));return mix(minColor,maxColor,t);}vec2 get_pattern_pos(const vec2 pixel_coord_upper,const vec2 pixel_coord_lower,const vec2 pattern_size,const float tile_units_to_pixels,const vec2 pos) {vec2 offset=mod(mod(mod(pixel_coord_upper,pattern_size)*256.0,pattern_size)*256.0+pixel_coord_lower,pattern_size);return (tile_units_to_pixels*pos+offset)/pattern_size;}mat3 rotationMatrixFromAxisAngle(vec3 u,float angle) {float c=cos(angle);float s=sin(angle);float c2=1.0-c;return mat3(u.x*u.x*c2+      c,u.x*u.y*c2-u.z*s,u.x*u.z*c2+u.y*s,u.y*u.x*c2+u.z*s,u.y*u.y*c2+    c,u.y*u.z*c2-u.x*s,u.z*u.x*c2-u.y*s,u.z*u.y*c2+u.x*s,u.z*u.z*c2+    c
);}
#ifdef TERRAIN3D
uniform sampler2D u_terrain;uniform float u_terrain_dim;uniform mat4 u_terrain_matrix;uniform vec4 u_terrain_unpack;uniform float u_terrain_exaggeration;uniform highp sampler2D u_depth;
#endif
const highp vec4 bitSh=vec4(256.*256.*256.,256.*256.,256.,1.);const highp vec4 bitShifts=vec4(1.)/bitSh;highp float unpack(highp vec4 color) {return dot(color,bitShifts);}highp float depthOpacity(vec3 frag) {
#ifdef TERRAIN3D
highp float d=unpack(texture(u_depth,frag.xy*0.5+0.5))+0.0001-frag.z;return 1.0-max(0.0,min(1.0,-d*500.0));
#else
return 1.0;
#endif
}float calculate_visibility(vec4 pos) {
#ifdef TERRAIN3D
vec3 frag=pos.xyz/pos.w;highp float d=depthOpacity(frag);if (d > 0.95) return 1.0;return (d+depthOpacity(frag+vec3(0.0,0.01,0.0)))/2.0;
#else
return 1.0;
#endif
}float ele(vec2 pos) {
#ifdef TERRAIN3D
vec4 rgb=(texture(u_terrain,pos)*255.0)*u_terrain_unpack;return rgb.r+rgb.g+rgb.b-u_terrain_unpack.a;
#else
return 0.0;
#endif
}float get_elevation(vec2 pos) {
#ifdef TERRAIN3D
#ifdef GLOBE
if ((pos.y <-32767.5) || (pos.y > 32766.5)) {return 0.0;}
#endif
vec2 coord=(u_terrain_matrix*vec4(pos,0.0,1.0)).xy*u_terrain_dim+1.0;vec2 f=fract(coord);vec2 c=(floor(coord)+0.5)/(u_terrain_dim+2.0);float d=1.0/(u_terrain_dim+2.0);float tl=ele(c);float tr=ele(c+vec2(d,0.0));float bl=ele(c+vec2(0.0,d));float br=ele(c+vec2(d,d));float elevation=mix(mix(tl,tr,f.x),mix(bl,br,f.x),f.y);return elevation*u_terrain_exaggeration;
#else
return 0.0;
#endif
}const float PI=3.141592653589793;uniform mat4 u_projection_matrix;`,b=`uniform vec4 u_color;uniform float u_opacity;void main() {fragColor=u_color*u_opacity;
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(1.0);
#endif
}`,w="in vec2 a_pos;void main() {gl_Position=projectTile(a_pos);}",y=`uniform vec2 u_pattern_tl_a;uniform vec2 u_pattern_br_a;uniform vec2 u_pattern_tl_b;uniform vec2 u_pattern_br_b;uniform vec2 u_texsize;uniform float u_mix;uniform float u_opacity;uniform sampler2D u_image;in vec2 v_pos_a;in vec2 v_pos_b;void main() {vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(u_pattern_tl_a/u_texsize,u_pattern_br_a/u_texsize,imagecoord);vec4 color1=texture(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(u_pattern_tl_b/u_texsize,u_pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture(u_image,pos2);fragColor=mix(color1,color2,u_mix)*u_opacity;
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(1.0);
#endif
}`,z="uniform vec2 u_pattern_size_a;uniform vec2 u_pattern_size_b;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform float u_scale_a;uniform float u_scale_b;uniform float u_tile_units_to_pixels;in vec2 a_pos;out vec2 v_pos_a;out vec2 v_pos_b;void main() {gl_Position=projectTile(a_pos);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,u_scale_a*u_pattern_size_a,u_tile_units_to_pixels,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,u_scale_b*u_pattern_size_b,u_tile_units_to_pixels,a_pos);}",j=`in vec3 v_data;in float v_visibility;
#pragma mapbox: define highp vec4 color
#pragma mapbox: define mediump float radius
#pragma mapbox: define lowp float blur
#pragma mapbox: define lowp float opacity
#pragma mapbox: define highp vec4 stroke_color
#pragma mapbox: define mediump float stroke_width
#pragma mapbox: define lowp float stroke_opacity
void main() {
#pragma mapbox: initialize highp vec4 color
#pragma mapbox: initialize mediump float radius
#pragma mapbox: initialize lowp float blur
#pragma mapbox: initialize lowp float opacity
#pragma mapbox: initialize highp vec4 stroke_color
#pragma mapbox: initialize mediump float stroke_width
#pragma mapbox: initialize lowp float stroke_opacity
vec2 extrude=v_data.xy;float extrude_length=length(extrude);float antialiased_blur=v_data.z;float opacity_t=smoothstep(0.0,antialiased_blur,extrude_length-1.0);float color_t=stroke_width < 0.01 ? 0.0 : smoothstep(antialiased_blur,0.0,extrude_length-radius/(radius+stroke_width));fragColor=v_visibility*opacity_t*mix(color*opacity,stroke_color*stroke_opacity,color_t);const float epsilon=0.5/255.0;if (fragColor.r < epsilon && fragColor.g < epsilon && fragColor.b < epsilon && fragColor.a < epsilon) {discard;}
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(1.0);
#endif
}`,P=`uniform bool u_scale_with_map;uniform bool u_pitch_with_map;uniform vec2 u_extrude_scale;uniform highp float u_globe_extrude_scale;uniform lowp float u_device_pixel_ratio;uniform highp float u_camera_to_center_distance;uniform vec2 u_translate;in vec2 a_pos;out vec3 v_data;out float v_visibility;
#pragma mapbox: define highp vec4 color
#pragma mapbox: define mediump float radius
#pragma mapbox: define lowp float blur
#pragma mapbox: define lowp float opacity
#pragma mapbox: define highp vec4 stroke_color
#pragma mapbox: define mediump float stroke_width
#pragma mapbox: define lowp float stroke_opacity
void main(void) {
#pragma mapbox: initialize highp vec4 color
#pragma mapbox: initialize mediump float radius
#pragma mapbox: initialize lowp float blur
#pragma mapbox: initialize lowp float opacity
#pragma mapbox: initialize highp vec4 stroke_color
#pragma mapbox: initialize mediump float stroke_width
#pragma mapbox: initialize lowp float stroke_opacity
vec2 pos_raw=a_pos+32768.0;vec2 extrude=vec2(mod(pos_raw,8.0)/7.0*2.0-1.0);vec2 circle_center=floor(pos_raw/8.0)+u_translate;float ele=get_elevation(circle_center);v_visibility=calculate_visibility(projectTileWithElevation(circle_center,ele));if (u_pitch_with_map) {
#ifdef GLOBE
vec3 center_vector=projectToSphere(circle_center);
#endif
float angle_scale=u_globe_extrude_scale;vec2 corner_position=circle_center;if (u_scale_with_map) {angle_scale*=(radius+stroke_width);corner_position+=extrude*u_extrude_scale*(radius+stroke_width);} else {
#ifdef GLOBE
vec4 projected_center=interpolateProjection(circle_center,center_vector,ele);
#else
vec4 projected_center=projectTileWithElevation(circle_center,ele);
#endif
corner_position+=extrude*u_extrude_scale*(radius+stroke_width)*(projected_center.w/u_camera_to_center_distance);angle_scale*=(radius+stroke_width)*(projected_center.w/u_camera_to_center_distance);}
#ifdef GLOBE
vec2 angles=extrude*angle_scale;vec3 corner_vector=globeRotateVector(center_vector,angles);gl_Position=interpolateProjection(corner_position,corner_vector,ele);
#else
gl_Position=projectTileWithElevation(corner_position,ele);
#endif
} else {gl_Position=projectTileWithElevation(circle_center,ele);if (gl_Position.z/gl_Position.w > 1.0) {gl_Position.xy=vec2(10000.0);}if (u_scale_with_map) {gl_Position.xy+=extrude*(radius+stroke_width)*u_extrude_scale*u_camera_to_center_distance;} else {gl_Position.xy+=extrude*(radius+stroke_width)*u_extrude_scale*gl_Position.w;}}float antialiasblur=-max(1.0/u_device_pixel_ratio/(radius+stroke_width),blur);v_data=vec3(extrude.x,extrude.y,antialiasblur);}`,d="void main() {fragColor=vec4(1.0);}",T="in vec2 a_pos;void main() {gl_Position=projectTile(a_pos);}",S=`uniform highp float u_intensity;in vec2 v_extrude;
#pragma mapbox: define highp float weight
#define GAUSS_COEF 0.3989422804014327
void main() {
#pragma mapbox: initialize highp float weight
float d=-0.5*3.0*3.0*dot(v_extrude,v_extrude);float val=weight*u_intensity*GAUSS_COEF*exp(d);fragColor=vec4(val,1.0,1.0,1.0);
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(1.0);
#endif
}`,I=`uniform float u_extrude_scale;uniform float u_opacity;uniform float u_intensity;uniform highp float u_globe_extrude_scale;in vec2 a_pos;out vec2 v_extrude;
#pragma mapbox: define highp float weight
#pragma mapbox: define mediump float radius
const highp float ZERO=1.0/255.0/16.0;
#define GAUSS_COEF 0.3989422804014327
void main(void) {
#pragma mapbox: initialize highp float weight
#pragma mapbox: initialize mediump float radius
vec2 pos_raw=a_pos+32768.0;vec2 unscaled_extrude=vec2(mod(pos_raw,8.0)/7.0*2.0-1.0);float S=sqrt(-2.0*log(ZERO/weight/u_intensity/GAUSS_COEF))/3.0;v_extrude=S*unscaled_extrude;vec2 extrude=v_extrude*radius*u_extrude_scale;vec2 circle_center=floor(pos_raw/8.0);
#ifdef GLOBE
vec2 angles=v_extrude*radius*u_globe_extrude_scale;vec3 center_vector=projectToSphere(circle_center);vec3 corner_vector=globeRotateVector(center_vector,angles);gl_Position=interpolateProjection(circle_center+extrude,corner_vector,0.0);
#else
gl_Position=projectTileFor3D(circle_center+extrude,get_elevation(circle_center));
#endif
}`,E=`uniform sampler2D u_image;uniform sampler2D u_color_ramp;uniform float u_opacity;in vec2 v_pos;void main() {float t=texture(u_image,v_pos).r;vec4 color=texture(u_color_ramp,vec2(t,0.5));fragColor=color*u_opacity;
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(0.0);
#endif
}`,R="uniform mat4 u_matrix;uniform vec2 u_world;in vec2 a_pos;out vec2 v_pos;void main() {gl_Position=u_matrix*vec4(a_pos*u_world,0,1);v_pos.x=a_pos.x;v_pos.y=1.0-a_pos.y;}",A="in float v_placed;in float v_notUsed;void main() {float alpha=0.5;fragColor=vec4(1.0,0.0,0.0,1.0)*alpha;if (v_placed > 0.5) {fragColor=vec4(0.0,0.0,1.0,0.5)*alpha;}if (v_notUsed > 0.5) {fragColor*=.1;}}",C="in vec2 a_anchor_pos;in vec2 a_placed;in vec2 a_box_real;uniform vec2 u_pixel_extrude_scale;out float v_placed;out float v_notUsed;void main() {gl_Position=projectTileWithElevation(a_anchor_pos,get_elevation(a_anchor_pos));gl_Position.xy=((a_box_real+0.5)*u_pixel_extrude_scale*2.0-1.0)*vec2(1.0,-1.0)*gl_Position.w;if (gl_Position.z/gl_Position.w < 1.1) {gl_Position.z=0.5;}v_placed=a_placed.x;v_notUsed=a_placed.y;}",O="in float v_radius;in vec2 v_extrude;in float v_collision;void main() {float alpha=0.5;float stroke_radius=0.9;float distance_to_center=length(v_extrude);float distance_to_edge=abs(distance_to_center-v_radius);float opacity_t=smoothstep(-stroke_radius,0.0,-distance_to_edge);vec4 color=mix(vec4(0.0,0.0,1.0,0.5),vec4(1.0,0.0,0.0,1.0),v_collision);fragColor=color*alpha*opacity_t;}",k="in vec2 a_pos;in float a_radius;in vec2 a_flags;uniform vec2 u_viewport_size;out float v_radius;out vec2 v_extrude;out float v_collision;void main() {float radius=a_radius;float collision=a_flags.x;float vertexIdx=a_flags.y;vec2 quadVertexOffset=vec2(mix(-1.0,1.0,float(vertexIdx >=2.0)),mix(-1.0,1.0,float(vertexIdx >=1.0 && vertexIdx <=2.0)));vec2 quadVertexExtent=quadVertexOffset*radius;float padding_factor=1.2;v_radius=radius;v_extrude=quadVertexExtent*padding_factor;v_collision=collision;gl_Position=vec4((a_pos/u_viewport_size*2.0-1.0)*vec2(1.0,-1.0),0.0,1.0)+vec4(quadVertexExtent*padding_factor/u_viewport_size*2.0,0.0,0.0);}",D=`#ifdef GL_ES
precision highp float;
#endif
uniform sampler2D u_image;uniform vec4 u_unpack;uniform sampler2D u_elevation_stops;uniform sampler2D u_color_stops;uniform int u_color_ramp_size;uniform float u_opacity;in vec2 v_pos;float getElevation(vec2 coord) {vec4 data=texture(u_image,coord)*255.0;data.a=-1.0;return dot(data,u_unpack);}float getElevationStop(int stop) {float x=(float(stop)+0.5)/float(u_color_ramp_size);vec4 data=texture(u_elevation_stops,vec2(x,0))*255.0;data.a=-1.0;return dot(data,u_unpack);}void main() {float el=getElevation(v_pos);int r=(u_color_ramp_size-1);int l=0;float el_l=getElevationStop(l);float el_r=getElevationStop(r);while(r-l > 1){int m=(r+l)/2;float el_m=getElevationStop(m);if(el < el_m){r=m;el_r=el_m;}else
{l=m;el_l=el_m;}}float x=(float(l)+(el-el_l)/(el_r-el_l)+0.5)/float(u_color_ramp_size);fragColor=u_opacity*texture(u_color_stops,vec2(x,0));
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(1.0);
#endif
}`,L="uniform vec2 u_dimension;in vec2 a_pos;out vec2 v_pos;void main() {gl_Position=projectTile(a_pos,a_pos);highp vec2 epsilon=1.0/u_dimension;float scale=(u_dimension.x-2.0)/u_dimension.x;v_pos=(a_pos/8192.0)*scale+epsilon;if (a_pos.y <-32767.5) {v_pos.y=0.0;}if (a_pos.y > 32766.5) {v_pos.y=1.0;}}",N="uniform highp vec4 u_color;uniform sampler2D u_overlay;in vec2 v_uv;void main() {vec4 overlay_color=texture(u_overlay,v_uv);fragColor=mix(u_color,overlay_color,overlay_color.a);}",G="in vec2 a_pos;out vec2 v_uv;uniform float u_overlay_scale;void main() {v_uv=a_pos/8192.0;gl_Position=projectTileWithElevation(a_pos*u_overlay_scale,get_elevation(a_pos));}",F=`in vec2 a_pos;void main() {
#ifdef GLOBE
gl_Position=projectTileFor3D(a_pos,0.0);
#else
gl_Position=u_projection_matrix*vec4(a_pos,0.0,1.0);
#endif
}`,M=`#pragma mapbox: define highp vec4 color
#pragma mapbox: define lowp float opacity
void main() {
#pragma mapbox: initialize highp vec4 color
#pragma mapbox: initialize lowp float opacity
fragColor=color*opacity;
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(1.0);
#endif
}`,V=`uniform vec2 u_fill_translate;in vec2 a_pos;
#pragma mapbox: define highp vec4 color
#pragma mapbox: define lowp float opacity
void main() {
#pragma mapbox: initialize highp vec4 color
#pragma mapbox: initialize lowp float opacity
gl_Position=projectTile(a_pos+u_fill_translate,a_pos);}`,$=`in vec2 v_pos;
#ifdef GLOBE
in float v_depth;
#endif
#pragma mapbox: define highp vec4 outline_color
#pragma mapbox: define lowp float opacity
void main() {
#pragma mapbox: initialize highp vec4 outline_color
#pragma mapbox: initialize lowp float opacity
float dist=length(v_pos-gl_FragCoord.xy);float alpha=1.0-smoothstep(0.0,1.0,dist);fragColor=outline_color*(alpha*opacity);
#ifdef GLOBE
if (v_depth > 1.0) {discard;}
#endif
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(1.0);
#endif
}`,U=`uniform vec2 u_world;uniform vec2 u_fill_translate;in vec2 a_pos;out vec2 v_pos;
#ifdef GLOBE
out float v_depth;
#endif
#pragma mapbox: define highp vec4 outline_color
#pragma mapbox: define lowp float opacity
void main() {
#pragma mapbox: initialize highp vec4 outline_color
#pragma mapbox: initialize lowp float opacity
gl_Position=projectTile(a_pos+u_fill_translate,a_pos);v_pos=(gl_Position.xy/gl_Position.w+1.0)/2.0*u_world;
#ifdef GLOBE
v_depth=gl_Position.z/gl_Position.w;
#endif
}`,B=`uniform vec2 u_texsize;uniform sampler2D u_image;uniform float u_fade;in vec2 v_pos_a;in vec2 v_pos_b;in vec2 v_pos;
#ifdef GLOBE
in float v_depth;
#endif
#pragma mapbox: define lowp float opacity
#pragma mapbox: define lowp vec4 pattern_from
#pragma mapbox: define lowp vec4 pattern_to
void main() {
#pragma mapbox: initialize lowp float opacity
#pragma mapbox: initialize mediump vec4 pattern_from
#pragma mapbox: initialize mediump vec4 pattern_to
vec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture(u_image,pos2);float dist=length(v_pos-gl_FragCoord.xy);float alpha=1.0-smoothstep(0.0,1.0,dist);fragColor=mix(color1,color2,u_fade)*alpha*opacity;
#ifdef GLOBE
if (v_depth > 1.0) {discard;}
#endif
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(1.0);
#endif
}`,W=`uniform vec2 u_world;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform vec3 u_scale;uniform vec2 u_fill_translate;in vec2 a_pos;out vec2 v_pos_a;out vec2 v_pos_b;out vec2 v_pos;
#ifdef GLOBE
out float v_depth;
#endif
#pragma mapbox: define lowp float opacity
#pragma mapbox: define lowp vec4 pattern_from
#pragma mapbox: define lowp vec4 pattern_to
#pragma mapbox: define lowp float pixel_ratio_from
#pragma mapbox: define lowp float pixel_ratio_to
void main() {
#pragma mapbox: initialize lowp float opacity
#pragma mapbox: initialize mediump vec4 pattern_from
#pragma mapbox: initialize mediump vec4 pattern_to
#pragma mapbox: initialize lowp float pixel_ratio_from
#pragma mapbox: initialize lowp float pixel_ratio_to
vec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;gl_Position=projectTile(a_pos+u_fill_translate,a_pos);vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileRatio,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileRatio,a_pos);v_pos=(gl_Position.xy/gl_Position.w+1.0)/2.0*u_world;
#ifdef GLOBE
v_depth=gl_Position.z/gl_Position.w;
#endif
}`,H=`#ifdef GL_ES
precision highp float;
#endif
uniform vec2 u_texsize;uniform float u_fade;uniform sampler2D u_image;in vec2 v_pos_a;in vec2 v_pos_b;
#pragma mapbox: define lowp float opacity
#pragma mapbox: define lowp vec4 pattern_from
#pragma mapbox: define lowp vec4 pattern_to
void main() {
#pragma mapbox: initialize lowp float opacity
#pragma mapbox: initialize mediump vec4 pattern_from
#pragma mapbox: initialize mediump vec4 pattern_to
vec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture(u_image,pos2);fragColor=mix(color1,color2,u_fade)*opacity;
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(1.0);
#endif
}`,q=`uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform vec3 u_scale;uniform vec2 u_fill_translate;in vec2 a_pos;out vec2 v_pos_a;out vec2 v_pos_b;
#pragma mapbox: define lowp float opacity
#pragma mapbox: define lowp vec4 pattern_from
#pragma mapbox: define lowp vec4 pattern_to
#pragma mapbox: define lowp float pixel_ratio_from
#pragma mapbox: define lowp float pixel_ratio_to
void main() {
#pragma mapbox: initialize lowp float opacity
#pragma mapbox: initialize mediump vec4 pattern_from
#pragma mapbox: initialize mediump vec4 pattern_to
#pragma mapbox: initialize lowp float pixel_ratio_from
#pragma mapbox: initialize lowp float pixel_ratio_to
vec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileZoomRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;gl_Position=projectTile(a_pos+u_fill_translate,a_pos);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileZoomRatio,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileZoomRatio,a_pos);}`,Y=`in vec4 v_color;void main() {fragColor=v_color;
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(1.0);
#endif
}`,Z=`uniform vec3 u_lightcolor;uniform lowp vec3 u_lightpos;uniform lowp vec3 u_lightpos_globe;uniform lowp float u_lightintensity;uniform float u_vertical_gradient;uniform lowp float u_opacity;uniform vec2 u_fill_translate;in vec2 a_pos;in vec4 a_normal_ed;
#ifdef TERRAIN3D
in vec2 a_centroid;
#endif
out vec4 v_color;
#pragma mapbox: define highp float base
#pragma mapbox: define highp float height
#pragma mapbox: define highp vec4 color
void main() {
#pragma mapbox: initialize highp float base
#pragma mapbox: initialize highp float height
#pragma mapbox: initialize highp vec4 color
vec3 normal=a_normal_ed.xyz;
#ifdef TERRAIN3D
float height_terrain3d_offset=get_elevation(a_centroid);float base_terrain3d_offset=height_terrain3d_offset-(base > 0.0 ? 0.0 : 10.0);
#else
float height_terrain3d_offset=0.0;float base_terrain3d_offset=0.0;
#endif
base=max(0.0,base)+base_terrain3d_offset;height=max(0.0,height)+height_terrain3d_offset;float t=mod(normal.x,2.0);float elevation=t > 0.0 ? height : base;vec2 posInTile=a_pos+u_fill_translate;
#ifdef GLOBE
vec3 spherePos=projectToSphere(posInTile,a_pos);gl_Position=interpolateProjectionFor3D(posInTile,spherePos,elevation);
#else
gl_Position=u_projection_matrix*vec4(posInTile,elevation,1.0);
#endif
float colorvalue=color.r*0.2126+color.g*0.7152+color.b*0.0722;v_color=vec4(0.0,0.0,0.0,1.0);vec4 ambientlight=vec4(0.03,0.03,0.03,1.0);color+=ambientlight;vec3 normalForLighting=normal/16384.0;float directional=clamp(dot(normalForLighting,u_lightpos),0.0,1.0);
#ifdef GLOBE
mat3 rotMatrix=globeGetRotationMatrix(spherePos);normalForLighting=rotMatrix*normalForLighting;directional=mix(directional,clamp(dot(normalForLighting,u_lightpos_globe),0.0,1.0),u_projection_transition);
#endif
directional=mix((1.0-u_lightintensity),max((1.0-colorvalue+u_lightintensity),1.0),directional);if (normal.y !=0.0) {directional*=((1.0-u_vertical_gradient)+(u_vertical_gradient*clamp((t+base)*pow(height/150.0,0.5),mix(0.7,0.98,1.0-u_lightintensity),1.0)));}v_color.r+=clamp(color.r*directional*u_lightcolor.r,mix(0.0,0.3,1.0-u_lightcolor.r),1.0);v_color.g+=clamp(color.g*directional*u_lightcolor.g,mix(0.0,0.3,1.0-u_lightcolor.g),1.0);v_color.b+=clamp(color.b*directional*u_lightcolor.b,mix(0.0,0.3,1.0-u_lightcolor.b),1.0);v_color*=u_opacity;}`,X=`uniform vec2 u_texsize;uniform float u_fade;uniform sampler2D u_image;in vec2 v_pos_a;in vec2 v_pos_b;in vec4 v_lighting;
#pragma mapbox: define lowp float base
#pragma mapbox: define lowp float height
#pragma mapbox: define lowp vec4 pattern_from
#pragma mapbox: define lowp vec4 pattern_to
#pragma mapbox: define lowp float pixel_ratio_from
#pragma mapbox: define lowp float pixel_ratio_to
void main() {
#pragma mapbox: initialize lowp float base
#pragma mapbox: initialize lowp float height
#pragma mapbox: initialize mediump vec4 pattern_from
#pragma mapbox: initialize mediump vec4 pattern_to
#pragma mapbox: initialize lowp float pixel_ratio_from
#pragma mapbox: initialize lowp float pixel_ratio_to
vec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture(u_image,pos2);vec4 mixedColor=mix(color1,color2,u_fade);fragColor=mixedColor*v_lighting;
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(1.0);
#endif
}`,J=`uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform float u_height_factor;uniform vec3 u_scale;uniform float u_vertical_gradient;uniform lowp float u_opacity;uniform vec2 u_fill_translate;uniform vec3 u_lightcolor;uniform lowp vec3 u_lightpos;uniform lowp vec3 u_lightpos_globe;uniform lowp float u_lightintensity;in vec2 a_pos;in vec4 a_normal_ed;
#ifdef TERRAIN3D
in vec2 a_centroid;
#endif
#ifdef GLOBE
out vec3 v_sphere_pos;
#endif
out vec2 v_pos_a;out vec2 v_pos_b;out vec4 v_lighting;
#pragma mapbox: define lowp float base
#pragma mapbox: define lowp float height
#pragma mapbox: define lowp vec4 pattern_from
#pragma mapbox: define lowp vec4 pattern_to
#pragma mapbox: define lowp float pixel_ratio_from
#pragma mapbox: define lowp float pixel_ratio_to
void main() {
#pragma mapbox: initialize lowp float base
#pragma mapbox: initialize lowp float height
#pragma mapbox: initialize mediump vec4 pattern_from
#pragma mapbox: initialize mediump vec4 pattern_to
#pragma mapbox: initialize lowp float pixel_ratio_from
#pragma mapbox: initialize lowp float pixel_ratio_to
vec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;vec3 normal=a_normal_ed.xyz;float edgedistance=a_normal_ed.w;vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;
#ifdef TERRAIN3D
float height_terrain3d_offset=get_elevation(a_centroid);float base_terrain3d_offset=height_terrain3d_offset-(base > 0.0 ? 0.0 : 10.0);
#else
float height_terrain3d_offset=0.0;float base_terrain3d_offset=0.0;
#endif
base=max(0.0,base)+base_terrain3d_offset;height=max(0.0,height)+height_terrain3d_offset;float t=mod(normal.x,2.0);float elevation=t > 0.0 ? height : base;vec2 posInTile=a_pos+u_fill_translate;
#ifdef GLOBE
vec3 spherePos=projectToSphere(posInTile,a_pos);vec3 elevatedPos=spherePos*(1.0+elevation/GLOBE_RADIUS);v_sphere_pos=elevatedPos;gl_Position=interpolateProjectionFor3D(posInTile,spherePos,elevation);
#else
gl_Position=u_projection_matrix*vec4(posInTile,elevation,1.0);
#endif
vec2 pos=normal.x==1.0 && normal.y==0.0 && normal.z==16384.0
? a_pos
: vec2(edgedistance,elevation*u_height_factor);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileRatio,pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileRatio,pos);v_lighting=vec4(0.0,0.0,0.0,1.0);float directional=clamp(dot(normal/16383.0,u_lightpos),0.0,1.0);directional=mix((1.0-u_lightintensity),max((0.5+u_lightintensity),1.0),directional);if (normal.y !=0.0) {directional*=((1.0-u_vertical_gradient)+(u_vertical_gradient*clamp((t+base)*pow(height/150.0,0.5),mix(0.7,0.98,1.0-u_lightintensity),1.0)));}v_lighting.rgb+=clamp(directional*u_lightcolor,mix(vec3(0.0),vec3(0.3),1.0-u_lightcolor),vec3(1.0));v_lighting*=u_opacity;}`,K=`#ifdef GL_ES
precision highp float;
#endif
uniform sampler2D u_image;in vec2 v_pos;uniform vec2 u_dimension;uniform float u_zoom;uniform vec4 u_unpack;float getElevation(vec2 coord,float bias) {vec4 data=texture(u_image,coord)*255.0;data.a=-1.0;return dot(data,u_unpack);}void main() {vec2 epsilon=1.0/u_dimension;float tileSize=u_dimension.x-2.0;float a=getElevation(v_pos+vec2(-epsilon.x,-epsilon.y),0.0);float b=getElevation(v_pos+vec2(0,-epsilon.y),0.0);float c=getElevation(v_pos+vec2(epsilon.x,-epsilon.y),0.0);float d=getElevation(v_pos+vec2(-epsilon.x,0),0.0);float e=getElevation(v_pos,0.0);float f=getElevation(v_pos+vec2(epsilon.x,0),0.0);float g=getElevation(v_pos+vec2(-epsilon.x,epsilon.y),0.0);float h=getElevation(v_pos+vec2(0,epsilon.y),0.0);float i=getElevation(v_pos+vec2(epsilon.x,epsilon.y),0.0);float exaggerationFactor=u_zoom < 2.0 ? 0.4 : u_zoom < 4.5 ? 0.35 : 0.3;float exaggeration=u_zoom < 15.0 ? (u_zoom-15.0)*exaggerationFactor : 0.0;vec2 deriv=vec2((c+f+f+i)-(a+d+d+g),(g+h+h+i)-(a+b+b+c))*tileSize/pow(2.0,exaggeration+(28.2562-u_zoom));fragColor=clamp(vec4(deriv.x/8.0+0.5,deriv.y/8.0+0.5,1.0,1.0),0.0,1.0);
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(1.0);
#endif
}`,Q="uniform mat4 u_matrix;uniform vec2 u_dimension;in vec2 a_pos;in vec2 a_texture_pos;out vec2 v_pos;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);highp vec2 epsilon=1.0/u_dimension;float scale=(u_dimension.x-2.0)/u_dimension.x;v_pos=(a_texture_pos/8192.0)*scale+epsilon;}",ee=`uniform sampler2D u_image;in vec2 v_pos;uniform vec2 u_latrange;uniform float u_exaggeration;uniform vec4 u_accent;uniform int u_method;uniform float u_altitudes[NUM_ILLUMINATION_SOURCES];uniform float u_azimuths[NUM_ILLUMINATION_SOURCES];uniform vec4 u_shadows[NUM_ILLUMINATION_SOURCES];uniform vec4 u_highlights[NUM_ILLUMINATION_SOURCES];
#define PI 3.141592653589793
#define STANDARD 0
#define COMBINED 1
#define IGOR 2
#define MULTIDIRECTIONAL 3
#define BASIC 4
float get_aspect(vec2 deriv){return deriv.x !=0.0 ? atan(deriv.y,-deriv.x) : PI/2.0*(deriv.y > 0.0 ? 1.0 :-1.0);}void igor_hillshade(vec2 deriv){deriv=deriv*u_exaggeration*2.0;float aspect=get_aspect(deriv);float azimuth=u_azimuths[0]+PI;float slope_stength=atan(length(deriv))*2.0/PI;float aspect_strength=1.0-abs(mod((aspect+azimuth)/PI+0.5,2.0)-1.0);float shadow_strength=slope_stength*aspect_strength;float highlight_strength=slope_stength*(1.0-aspect_strength);fragColor=u_shadows[0]*shadow_strength+u_highlights[0]*highlight_strength;}void standard_hillshade(vec2 deriv){float azimuth=u_azimuths[0]+PI;float slope=atan(0.625*length(deriv));float aspect=get_aspect(deriv);float intensity=u_exaggeration;float base=1.875-intensity*1.75;float maxValue=0.5*PI;float scaledSlope=intensity !=0.5 ? ((pow(base,slope)-1.0)/(pow(base,maxValue)-1.0))*maxValue : slope;float accent=cos(scaledSlope);vec4 accent_color=(1.0-accent)*u_accent*clamp(intensity*2.0,0.0,1.0);float shade=abs(mod((aspect+azimuth)/PI+0.5,2.0)-1.0);vec4 shade_color=mix(u_shadows[0],u_highlights[0],shade)*sin(scaledSlope)*clamp(intensity*2.0,0.0,1.0);fragColor=accent_color*(1.0-shade_color.a)+shade_color;}void basic_hillshade(vec2 deriv){deriv=deriv*u_exaggeration*2.0;float azimuth=u_azimuths[0]+PI;float cos_az=cos(azimuth);float sin_az=sin(azimuth);float cos_alt=cos(u_altitudes[0]);float sin_alt=sin(u_altitudes[0]);float cang=(sin_alt-(deriv.y*cos_az*cos_alt-deriv.x*sin_az*cos_alt))/sqrt(1.0+dot(deriv,deriv));float shade=clamp(cang,0.0,1.0);if(shade > 0.5){fragColor=u_highlights[0]*(2.0*shade-1.0);}else
{fragColor=u_shadows[0]*(1.0-2.0*shade);}}void multidirectional_hillshade(vec2 deriv){deriv=deriv*u_exaggeration*2.0;fragColor=vec4(0,0,0,0);for(int i=0; i < NUM_ILLUMINATION_SOURCES; i++){float cos_alt=cos(u_altitudes[i]);float sin_alt=sin(u_altitudes[i]);float cos_az=-cos(u_azimuths[i]);float sin_az=-sin(u_azimuths[i]);float cang=(sin_alt-(deriv.y*cos_az*cos_alt-deriv.x*sin_az*cos_alt))/sqrt(1.0+dot(deriv,deriv));float shade=clamp(cang,0.0,1.0);if(shade > 0.5){fragColor+=u_highlights[i]*(2.0*shade-1.0)/float(NUM_ILLUMINATION_SOURCES);}else
{fragColor+=u_shadows[i]*(1.0-2.0*shade)/float(NUM_ILLUMINATION_SOURCES);}}}void combined_hillshade(vec2 deriv){deriv=deriv*u_exaggeration*2.0;float azimuth=u_azimuths[0]+PI;float cos_az=cos(azimuth);float sin_az=sin(azimuth);float cos_alt=cos(u_altitudes[0]);float sin_alt=sin(u_altitudes[0]);float cang=acos((sin_alt-(deriv.y*cos_az*cos_alt-deriv.x*sin_az*cos_alt))/sqrt(1.0+dot(deriv,deriv)));cang=clamp(cang,0.0,PI/2.0);float shade=cang*atan(length(deriv))*4.0/PI/PI;float highlight=(PI/2.0-cang)*atan(length(deriv))*4.0/PI/PI;fragColor=u_shadows[0]*shade+u_highlights[0]*highlight;}void main() {vec4 pixel=texture(u_image,v_pos);float scaleFactor=cos(radians((u_latrange[0]-u_latrange[1])*(1.0-v_pos.y)+u_latrange[1]));vec2 deriv=((pixel.rg*8.0)-4.0)/scaleFactor;if (u_method==BASIC) {basic_hillshade(deriv);} else if (u_method==COMBINED) {combined_hillshade(deriv);} else if (u_method==IGOR) {igor_hillshade(deriv);} else if (u_method==MULTIDIRECTIONAL) {multidirectional_hillshade(deriv);} else if (u_method==STANDARD) {standard_hillshade(deriv);} else {standard_hillshade(deriv);}
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(1.0);
#endif
}`,oe="uniform mat4 u_matrix;in vec2 a_pos;out vec2 v_pos;void main() {gl_Position=projectTile(a_pos,a_pos);v_pos=a_pos/8192.0;if (a_pos.y <-32767.5) {v_pos.y=0.0;}if (a_pos.y > 32766.5) {v_pos.y=1.0;}}",ae=`uniform lowp float u_device_pixel_ratio;in vec2 v_width2;in vec2 v_normal;in float v_gamma_scale;
#ifdef GLOBE
in float v_depth;
#endif
#pragma mapbox: define highp vec4 color
#pragma mapbox: define lowp float blur
#pragma mapbox: define lowp float opacity
void main() {
#pragma mapbox: initialize highp vec4 color
#pragma mapbox: initialize lowp float blur
#pragma mapbox: initialize lowp float opacity
float dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);fragColor=color*(alpha*opacity);
#ifdef GLOBE
if (v_depth > 1.0) {discard;}
#endif
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(1.0);
#endif
}`,te=`
#define scale 0.015873016
in vec2 a_pos_normal;in vec4 a_data;uniform vec2 u_translation;uniform mediump float u_ratio;uniform vec2 u_units_to_pixels;uniform lowp float u_device_pixel_ratio;out vec2 v_normal;out vec2 v_width2;out float v_gamma_scale;out highp float v_linesofar;
#ifdef GLOBE
out float v_depth;
#endif
#pragma mapbox: define highp vec4 color
#pragma mapbox: define lowp float blur
#pragma mapbox: define lowp float opacity
#pragma mapbox: define mediump float gapwidth
#pragma mapbox: define lowp float offset
#pragma mapbox: define mediump float width
void main() {
#pragma mapbox: initialize highp vec4 color
#pragma mapbox: initialize lowp float blur
#pragma mapbox: initialize lowp float opacity
#pragma mapbox: initialize mediump float gapwidth
#pragma mapbox: initialize lowp float offset
#pragma mapbox: initialize mediump float width
float ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;v_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*2.0;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);float adjustedThickness=projectLineThickness(pos.y);vec4 projected_no_extrude=projectTile(pos+offset2/u_ratio*adjustedThickness+u_translation);vec4 projected_with_extrude=projectTile(pos+offset2/u_ratio*adjustedThickness+u_translation+dist/u_ratio*adjustedThickness);gl_Position=projected_with_extrude;
#ifdef GLOBE
v_depth=gl_Position.z/gl_Position.w;
#endif
#ifdef TERRAIN3D
v_gamma_scale=1.0;
#else
float extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length((projected_with_extrude.xy-projected_no_extrude.xy)/projected_with_extrude.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;
#endif
v_width2=vec2(outset,inset);}`,ie=`uniform lowp float u_device_pixel_ratio;uniform sampler2D u_image;in vec2 v_width2;in vec2 v_normal;in float v_gamma_scale;in highp vec2 v_uv;
#ifdef GLOBE
in float v_depth;
#endif
#pragma mapbox: define lowp float blur
#pragma mapbox: define lowp float opacity
void main() {
#pragma mapbox: initialize lowp float blur
#pragma mapbox: initialize lowp float opacity
float dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);vec4 color=texture(u_image,v_uv);fragColor=color*(alpha*opacity);
#ifdef GLOBE
if (v_depth > 1.0) {discard;}
#endif
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(1.0);
#endif
}`,ne=`
#define scale 0.015873016
in vec2 a_pos_normal;in vec4 a_data;in float a_uv_x;in float a_split_index;uniform vec2 u_translation;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;uniform vec2 u_units_to_pixels;uniform float u_image_height;out vec2 v_normal;out vec2 v_width2;out float v_gamma_scale;out highp vec2 v_uv;
#ifdef GLOBE
out float v_depth;
#endif
#pragma mapbox: define lowp float blur
#pragma mapbox: define lowp float opacity
#pragma mapbox: define mediump float gapwidth
#pragma mapbox: define lowp float offset
#pragma mapbox: define mediump float width
void main() {
#pragma mapbox: initialize lowp float blur
#pragma mapbox: initialize lowp float opacity
#pragma mapbox: initialize mediump float gapwidth
#pragma mapbox: initialize lowp float offset
#pragma mapbox: initialize mediump float width
float ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;highp float texel_height=1.0/u_image_height;highp float half_texel_height=0.5*texel_height;v_uv=vec2(a_uv_x,a_split_index*texel_height-half_texel_height);vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);float adjustedThickness=projectLineThickness(pos.y);vec4 projected_no_extrude=projectTile(pos+offset2/u_ratio*adjustedThickness+u_translation);vec4 projected_with_extrude=projectTile(pos+offset2/u_ratio*adjustedThickness+u_translation+dist/u_ratio*adjustedThickness);gl_Position=projected_with_extrude;
#ifdef GLOBE
v_depth=gl_Position.z/gl_Position.w;
#endif
#ifdef TERRAIN3D
v_gamma_scale=1.0;
#else
float extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length((projected_with_extrude.xy-projected_no_extrude.xy)/projected_with_extrude.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;
#endif
v_width2=vec2(outset,inset);}`,_e=`#ifdef GL_ES
precision highp float;
#endif
uniform lowp float u_device_pixel_ratio;uniform vec2 u_texsize;uniform float u_fade;uniform mediump vec3 u_scale;uniform sampler2D u_image;in vec2 v_normal;in vec2 v_width2;in float v_linesofar;in float v_gamma_scale;in float v_width;
#ifdef GLOBE
in float v_depth;
#endif
#pragma mapbox: define lowp vec4 pattern_from
#pragma mapbox: define lowp vec4 pattern_to
#pragma mapbox: define lowp float pixel_ratio_from
#pragma mapbox: define lowp float pixel_ratio_to
#pragma mapbox: define lowp float blur
#pragma mapbox: define lowp float opacity
void main() {
#pragma mapbox: initialize mediump vec4 pattern_from
#pragma mapbox: initialize mediump vec4 pattern_to
#pragma mapbox: initialize lowp float pixel_ratio_from
#pragma mapbox: initialize lowp float pixel_ratio_to
#pragma mapbox: initialize lowp float blur
#pragma mapbox: initialize lowp float opacity
vec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileZoomRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;vec2 pattern_size_a=vec2(display_size_a.x*fromScale/tileZoomRatio,display_size_a.y);vec2 pattern_size_b=vec2(display_size_b.x*toScale/tileZoomRatio,display_size_b.y);float aspect_a=display_size_a.y/v_width;float aspect_b=display_size_b.y/v_width;float dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);float x_a=mod(v_linesofar/pattern_size_a.x*aspect_a,1.0);float x_b=mod(v_linesofar/pattern_size_b.x*aspect_b,1.0);float y=0.5*v_normal.y+0.5;vec2 texel_size=1.0/u_texsize;vec2 pos_a=mix(pattern_tl_a*texel_size-texel_size,pattern_br_a*texel_size+texel_size,vec2(x_a,y));vec2 pos_b=mix(pattern_tl_b*texel_size-texel_size,pattern_br_b*texel_size+texel_size,vec2(x_b,y));vec4 color=mix(texture(u_image,pos_a),texture(u_image,pos_b),u_fade);fragColor=color*alpha*opacity;
#ifdef GLOBE
if (v_depth > 1.0) {discard;}
#endif
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(1.0);
#endif
}`,le=`
#define scale 0.015873016
#define LINE_DISTANCE_SCALE 2.0
in vec2 a_pos_normal;in vec4 a_data;uniform vec2 u_translation;uniform vec2 u_units_to_pixels;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;out vec2 v_normal;out vec2 v_width2;out float v_linesofar;out float v_gamma_scale;out float v_width;
#ifdef GLOBE
out float v_depth;
#endif
#pragma mapbox: define lowp float blur
#pragma mapbox: define lowp float opacity
#pragma mapbox: define lowp float offset
#pragma mapbox: define mediump float gapwidth
#pragma mapbox: define mediump float width
#pragma mapbox: define lowp float floorwidth
#pragma mapbox: define lowp vec4 pattern_from
#pragma mapbox: define lowp vec4 pattern_to
#pragma mapbox: define lowp float pixel_ratio_from
#pragma mapbox: define lowp float pixel_ratio_to
void main() {
#pragma mapbox: initialize lowp float blur
#pragma mapbox: initialize lowp float opacity
#pragma mapbox: initialize lowp float offset
#pragma mapbox: initialize mediump float gapwidth
#pragma mapbox: initialize mediump float width
#pragma mapbox: initialize lowp float floorwidth
#pragma mapbox: initialize mediump vec4 pattern_from
#pragma mapbox: initialize mediump vec4 pattern_to
#pragma mapbox: initialize lowp float pixel_ratio_from
#pragma mapbox: initialize lowp float pixel_ratio_to
float ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;float a_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*LINE_DISTANCE_SCALE;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);float adjustedThickness=projectLineThickness(pos.y);vec4 projected_no_extrude=projectTile(pos+offset2/u_ratio*adjustedThickness+u_translation);vec4 projected_with_extrude=projectTile(pos+offset2/u_ratio*adjustedThickness+u_translation+dist/u_ratio*adjustedThickness);gl_Position=projected_with_extrude;
#ifdef GLOBE
v_depth=gl_Position.z/gl_Position.w;
#endif
#ifdef TERRAIN3D
v_gamma_scale=1.0;
#else
float extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length((projected_with_extrude.xy-projected_no_extrude.xy)/projected_with_extrude.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;
#endif
v_linesofar=a_linesofar;v_width2=vec2(outset,inset);v_width=floorwidth;}`,re=`uniform lowp float u_device_pixel_ratio;uniform lowp float u_lineatlas_width;uniform sampler2D u_image;uniform float u_mix;in vec2 v_normal;in vec2 v_width2;in vec2 v_tex_a;in vec2 v_tex_b;in float v_gamma_scale;
#ifdef GLOBE
in float v_depth;
#endif
#pragma mapbox: define highp vec4 color
#pragma mapbox: define lowp float blur
#pragma mapbox: define lowp float opacity
#pragma mapbox: define mediump float width
#pragma mapbox: define lowp float floorwidth
#pragma mapbox: define mediump vec4 dasharray_from
#pragma mapbox: define mediump vec4 dasharray_to
void main() {
#pragma mapbox: initialize highp vec4 color
#pragma mapbox: initialize lowp float blur
#pragma mapbox: initialize lowp float opacity
#pragma mapbox: initialize mediump float width
#pragma mapbox: initialize lowp float floorwidth
#pragma mapbox: initialize mediump vec4 dasharray_from
#pragma mapbox: initialize mediump vec4 dasharray_to
float dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);float sdfdist_a=texture(u_image,v_tex_a).a;float sdfdist_b=texture(u_image,v_tex_b).a;float sdfdist=mix(sdfdist_a,sdfdist_b,u_mix);float sdfgamma=(u_lineatlas_width/256.0/u_device_pixel_ratio)/min(dasharray_from.w,dasharray_to.w);alpha*=smoothstep(0.5-sdfgamma/floorwidth,0.5+sdfgamma/floorwidth,sdfdist);fragColor=color*(alpha*opacity);
#ifdef GLOBE
if (v_depth > 1.0) {discard;}
#endif
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(1.0);
#endif
}`,pe=`
#define scale 0.015873016
#define LINE_DISTANCE_SCALE 2.0
in vec2 a_pos_normal;in vec4 a_data;uniform vec2 u_translation;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;uniform vec2 u_units_to_pixels;uniform float u_tileratio;uniform float u_crossfade_from;uniform float u_crossfade_to;uniform float u_lineatlas_height;out vec2 v_normal;out vec2 v_width2;out vec2 v_tex_a;out vec2 v_tex_b;out float v_gamma_scale;
#ifdef GLOBE
out float v_depth;
#endif
#pragma mapbox: define highp vec4 color
#pragma mapbox: define lowp float blur
#pragma mapbox: define lowp float opacity
#pragma mapbox: define mediump float gapwidth
#pragma mapbox: define lowp float offset
#pragma mapbox: define mediump float width
#pragma mapbox: define lowp float floorwidth
#pragma mapbox: define mediump vec4 dasharray_from
#pragma mapbox: define mediump vec4 dasharray_to
void main() {
#pragma mapbox: initialize highp vec4 color
#pragma mapbox: initialize lowp float blur
#pragma mapbox: initialize lowp float opacity
#pragma mapbox: initialize mediump float gapwidth
#pragma mapbox: initialize lowp float offset
#pragma mapbox: initialize mediump float width
#pragma mapbox: initialize lowp float floorwidth
#pragma mapbox: initialize mediump vec4 dasharray_from
#pragma mapbox: initialize mediump vec4 dasharray_to
float ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;float a_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*LINE_DISTANCE_SCALE;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);float adjustedThickness=projectLineThickness(pos.y);vec4 projected_no_extrude=projectTile(pos+offset2/u_ratio*adjustedThickness+u_translation);vec4 projected_with_extrude=projectTile(pos+offset2/u_ratio*adjustedThickness+u_translation+dist/u_ratio*adjustedThickness);gl_Position=projected_with_extrude;
#ifdef GLOBE
v_depth=gl_Position.z/gl_Position.w;
#endif
#ifdef TERRAIN3D
v_gamma_scale=1.0;
#else
float extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length((projected_with_extrude.xy-projected_no_extrude.xy)/projected_with_extrude.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;
#endif
float u_patternscale_a_x=u_tileratio/dasharray_from.w/u_crossfade_from;float u_patternscale_a_y=-dasharray_from.z/2.0/u_lineatlas_height;float u_patternscale_b_x=u_tileratio/dasharray_to.w/u_crossfade_to;float u_patternscale_b_y=-dasharray_to.z/2.0/u_lineatlas_height;v_tex_a=vec2(a_linesofar*u_patternscale_a_x/floorwidth,normal.y*u_patternscale_a_y+(float(dasharray_from.y)+0.5)/u_lineatlas_height);v_tex_b=vec2(a_linesofar*u_patternscale_b_x/floorwidth,normal.y*u_patternscale_b_y+(float(dasharray_to.y)+0.5)/u_lineatlas_height);v_width2=vec2(outset,inset);}`,ce=`uniform lowp float u_device_pixel_ratio;uniform sampler2D u_image;uniform sampler2D u_image_dash;uniform float u_mix;uniform lowp float u_lineatlas_width;in vec2 v_normal;in vec2 v_width2;in vec2 v_tex_a;in vec2 v_tex_b;in float v_gamma_scale;in highp vec2 v_uv;
#ifdef GLOBE
in float v_depth;
#endif
#pragma mapbox: define lowp float blur
#pragma mapbox: define lowp float opacity
#pragma mapbox: define mediump float width
#pragma mapbox: define lowp float floorwidth
#pragma mapbox: define mediump vec4 dasharray_from
#pragma mapbox: define mediump vec4 dasharray_to
void main() {
#pragma mapbox: initialize lowp float blur
#pragma mapbox: initialize lowp float opacity
#pragma mapbox: initialize mediump float width
#pragma mapbox: initialize lowp float floorwidth
#pragma mapbox: initialize mediump vec4 dasharray_from
#pragma mapbox: initialize mediump vec4 dasharray_to
float dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);vec4 color=texture(u_image,v_uv);float sdfdist_a=texture(u_image_dash,v_tex_a).a;float sdfdist_b=texture(u_image_dash,v_tex_b).a;float sdfdist=mix(sdfdist_a,sdfdist_b,u_mix);float sdfgamma=(u_lineatlas_width/256.0)/min(dasharray_from.w,dasharray_to.w);float dash_alpha=smoothstep(0.5-sdfgamma/floorwidth,0.5+sdfgamma/floorwidth,sdfdist);fragColor=color*(alpha*dash_alpha*opacity);
#ifdef GLOBE
if (v_depth > 1.0) {discard;}
#endif
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(1.0);
#endif
}`,se=`
#define scale 0.015873016
#define LINE_DISTANCE_SCALE 2.0
in vec2 a_pos_normal;in vec4 a_data;in float a_uv_x;in float a_split_index;uniform vec2 u_translation;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;uniform vec2 u_units_to_pixels;uniform float u_image_height;uniform float u_tileratio;uniform float u_crossfade_from;uniform float u_crossfade_to;uniform float u_lineatlas_height;out vec2 v_normal;out vec2 v_width2;out float v_gamma_scale;out highp vec2 v_uv;out vec2 v_tex_a;out vec2 v_tex_b;
#ifdef GLOBE
out float v_depth;
#endif
#pragma mapbox: define lowp float blur
#pragma mapbox: define lowp float opacity
#pragma mapbox: define mediump float gapwidth
#pragma mapbox: define lowp float offset
#pragma mapbox: define mediump float width
#pragma mapbox: define lowp float floorwidth
#pragma mapbox: define mediump vec4 dasharray_from
#pragma mapbox: define mediump vec4 dasharray_to
void main() {
#pragma mapbox: initialize lowp float blur
#pragma mapbox: initialize lowp float opacity
#pragma mapbox: initialize mediump float gapwidth
#pragma mapbox: initialize lowp float offset
#pragma mapbox: initialize mediump float width
#pragma mapbox: initialize lowp float floorwidth
#pragma mapbox: initialize mediump vec4 dasharray_from
#pragma mapbox: initialize mediump vec4 dasharray_to
float ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;float a_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*LINE_DISTANCE_SCALE;float texel_height=1.0/u_image_height;float half_texel_height=0.5*texel_height;v_uv=vec2(a_uv_x,a_split_index*texel_height-half_texel_height);vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);float adjustedThickness=projectLineThickness(pos.y);vec4 projected_no_extrude=projectTile(pos+offset2/u_ratio*adjustedThickness+u_translation);vec4 projected_with_extrude=projectTile(pos+offset2/u_ratio*adjustedThickness+u_translation+dist/u_ratio*adjustedThickness);gl_Position=projected_with_extrude;
#ifdef GLOBE
v_depth=gl_Position.z/gl_Position.w;
#endif
#ifdef TERRAIN3D
v_gamma_scale=1.0;
#else
float extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length((projected_with_extrude.xy-projected_no_extrude.xy)/projected_with_extrude.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;
#endif
float u_patternscale_a_x=u_tileratio/dasharray_from.w/u_crossfade_from;float u_patternscale_a_y=-dasharray_from.z/2.0/u_lineatlas_height;float u_patternscale_b_x=u_tileratio/dasharray_to.w/u_crossfade_to;float u_patternscale_b_y=-dasharray_to.z/2.0/u_lineatlas_height;v_tex_a=vec2(a_linesofar*u_patternscale_a_x/floorwidth,normal.y*u_patternscale_a_y+(float(dasharray_from.y)+0.5)/u_lineatlas_height);v_tex_b=vec2(a_linesofar*u_patternscale_b_x/floorwidth,normal.y*u_patternscale_b_y+(float(dasharray_to.y)+0.5)/u_lineatlas_height);v_width2=vec2(outset,inset);}`,fe=`uniform float u_fade_t;uniform float u_opacity;uniform sampler2D u_image0;uniform sampler2D u_image1;in vec2 v_pos0;in vec2 v_pos1;uniform float u_brightness_low;uniform float u_brightness_high;uniform float u_saturation_factor;uniform float u_contrast_factor;uniform vec3 u_spin_weights;void main() {vec4 color0=texture(u_image0,v_pos0);vec4 color1=texture(u_image1,v_pos1);if (color0.a > 0.0) {color0.rgb=color0.rgb/color0.a;}if (color1.a > 0.0) {color1.rgb=color1.rgb/color1.a;}vec4 color=mix(color0,color1,u_fade_t);color.a*=u_opacity;vec3 rgb=color.rgb;rgb=vec3(dot(rgb,u_spin_weights.xyz),dot(rgb,u_spin_weights.zxy),dot(rgb,u_spin_weights.yzx));float average=(color.r+color.g+color.b)/3.0;rgb+=(average-rgb)*u_saturation_factor;rgb=(rgb-0.5)*u_contrast_factor+0.5;vec3 u_high_vec=vec3(u_brightness_low,u_brightness_low,u_brightness_low);vec3 u_low_vec=vec3(u_brightness_high,u_brightness_high,u_brightness_high);fragColor=vec4(mix(u_high_vec,u_low_vec,rgb)*color.a,color.a);
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(1.0);
#endif
}`,me=`uniform vec2 u_tl_parent;uniform float u_scale_parent;uniform float u_buffer_scale;uniform vec4 u_coords_top;uniform vec4 u_coords_bottom;in vec2 a_pos;out vec2 v_pos0;out vec2 v_pos1;void main() {vec2 fractionalPos=a_pos/8192.0;vec2 position=mix(mix(u_coords_top.xy,u_coords_top.zw,fractionalPos.x),mix(u_coords_bottom.xy,u_coords_bottom.zw,fractionalPos.x),fractionalPos.y);gl_Position=projectTile(position,position);v_pos0=((fractionalPos-0.5)/u_buffer_scale)+0.5;
#ifdef GLOBE
if (a_pos.y <-32767.5) {v_pos0.y=0.0;}if (a_pos.y > 32766.5) {v_pos0.y=1.0;}
#endif
v_pos1=(v_pos0*u_scale_parent)+u_tl_parent;}`,de=`uniform sampler2D u_texture;in vec2 v_tex;in float v_fade_opacity;
#pragma mapbox: define lowp float opacity
void main() {
#pragma mapbox: initialize lowp float opacity
lowp float alpha=opacity*v_fade_opacity;fragColor=texture(u_texture,v_tex)*alpha;
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(1.0);
#endif
}`,ue=`in vec4 a_pos_offset;in vec4 a_data;in vec4 a_pixeloffset;in vec3 a_projected_pos;in float a_fade_opacity;uniform bool u_is_size_zoom_constant;uniform bool u_is_size_feature_constant;uniform highp float u_size_t;uniform highp float u_size;uniform highp float u_camera_to_center_distance;uniform highp float u_pitch;uniform bool u_rotate_symbol;uniform highp float u_aspect_ratio;uniform float u_fade_change;uniform mat4 u_label_plane_matrix;uniform mat4 u_coord_matrix;uniform bool u_is_text;uniform bool u_pitch_with_map;uniform vec2 u_texsize;uniform bool u_is_along_line;uniform bool u_is_variable_anchor;uniform vec2 u_translation;uniform float u_pitched_scale;out vec2 v_tex;out float v_fade_opacity;
#pragma mapbox: define lowp float opacity
void main() {
#pragma mapbox: initialize lowp float opacity
vec2 a_pos=a_pos_offset.xy;vec2 a_offset=a_pos_offset.zw;vec2 a_tex=a_data.xy;vec2 a_size=a_data.zw;float a_size_min=floor(a_size[0]*0.5);vec2 a_pxoffset=a_pixeloffset.xy;vec2 a_minFontScale=a_pixeloffset.zw/256.0;float ele=get_elevation(a_pos);highp float segment_angle=-a_projected_pos[2];float size;if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {size=mix(a_size_min,a_size[1],u_size_t)/128.0;} else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {size=a_size_min/128.0;} else {size=u_size;}vec2 translated_a_pos=a_pos+u_translation;vec4 projectedPoint=projectTileWithElevation(translated_a_pos,ele);highp float camera_to_anchor_distance=projectedPoint.w;highp float distance_ratio=u_pitch_with_map ?
camera_to_anchor_distance/u_camera_to_center_distance :
u_camera_to_center_distance/camera_to_anchor_distance;highp float perspective_ratio=clamp(0.5+0.5*distance_ratio,0.0,4.0);size*=perspective_ratio;float fontScale=u_is_text ? size/24.0 : size;highp float symbol_rotation=0.0;if (u_rotate_symbol) {vec4 offsetProjectedPoint=projectTileWithElevation(translated_a_pos+vec2(1,0),ele);vec2 a=projectedPoint.xy/projectedPoint.w;vec2 b=offsetProjectedPoint.xy/offsetProjectedPoint.w;symbol_rotation=atan((b.y-a.y)/u_aspect_ratio,b.x-a.x);}highp float angle_sin=sin(segment_angle+symbol_rotation);highp float angle_cos=cos(segment_angle+symbol_rotation);mat2 rotation_matrix=mat2(angle_cos,-1.0*angle_sin,angle_sin,angle_cos);vec4 projected_pos;if (u_is_along_line || u_is_variable_anchor) {projected_pos=vec4(a_projected_pos.xy,ele,1.0);} else if (u_pitch_with_map) {projected_pos=u_label_plane_matrix*vec4(a_projected_pos.xy+u_translation,ele,1.0);} else {projected_pos=u_label_plane_matrix*projectTileWithElevation(a_projected_pos.xy+u_translation,ele);}float z=float(u_pitch_with_map)*projected_pos.z/projected_pos.w;float projectionScaling=1.0;
#ifdef GLOBE
if(u_pitch_with_map) {float anchor_pos_tile_y=(u_coord_matrix*vec4(projected_pos.xy/projected_pos.w,z,1.0)).y;projectionScaling=mix(projectionScaling,1.0/circumferenceRatioAtTileY(anchor_pos_tile_y)*u_pitched_scale,u_projection_transition);}
#endif
vec4 finalPos=u_coord_matrix*vec4(projected_pos.xy/projected_pos.w+rotation_matrix*(a_offset/32.0*max(a_minFontScale,fontScale)+a_pxoffset/16.0)*projectionScaling,z,1.0);if(u_pitch_with_map) {finalPos=projectTileWithElevation(finalPos.xy,finalPos.z);}gl_Position=finalPos;v_tex=a_tex/u_texsize;vec2 fade_opacity=unpack_opacity(a_fade_opacity);float fade_change=fade_opacity[1] > 0.5 ? u_fade_change :-u_fade_change;float visibility=calculate_visibility(projectedPoint);v_fade_opacity=max(0.0,min(visibility,fade_opacity[0]+fade_change));}`,ve=`#define SDF_PX 8.0
uniform bool u_is_halo;uniform sampler2D u_texture;uniform highp float u_gamma_scale;uniform lowp float u_device_pixel_ratio;uniform bool u_is_text;in vec2 v_data0;in vec3 v_data1;
#pragma mapbox: define highp vec4 fill_color
#pragma mapbox: define highp vec4 halo_color
#pragma mapbox: define lowp float opacity
#pragma mapbox: define lowp float halo_width
#pragma mapbox: define lowp float halo_blur
void main() {
#pragma mapbox: initialize highp vec4 fill_color
#pragma mapbox: initialize highp vec4 halo_color
#pragma mapbox: initialize lowp float opacity
#pragma mapbox: initialize lowp float halo_width
#pragma mapbox: initialize lowp float halo_blur
float EDGE_GAMMA=0.105/u_device_pixel_ratio;vec2 tex=v_data0.xy;float gamma_scale=v_data1.x;float size=v_data1.y;float fade_opacity=v_data1[2];float fontScale=u_is_text ? size/24.0 : size;lowp vec4 color=fill_color;highp float gamma=EDGE_GAMMA/(fontScale*u_gamma_scale);lowp float inner_edge=(256.0-64.0)/256.0;if (u_is_halo) {color=halo_color;gamma=(halo_blur*1.19/SDF_PX+EDGE_GAMMA)/(fontScale*u_gamma_scale);inner_edge=inner_edge+gamma*gamma_scale;}lowp float dist=texture(u_texture,tex).a;highp float gamma_scaled=gamma*gamma_scale;highp float alpha=smoothstep(inner_edge-gamma_scaled,inner_edge+gamma_scaled,dist);if (u_is_halo) {lowp float halo_edge=(6.0-halo_width/fontScale)/SDF_PX;alpha=min(smoothstep(halo_edge-gamma_scaled,halo_edge+gamma_scaled,dist),1.0-alpha);}fragColor=color*(alpha*opacity*fade_opacity);
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(1.0);
#endif
}`,ge=`in vec4 a_pos_offset;in vec4 a_data;in vec4 a_pixeloffset;in vec3 a_projected_pos;in float a_fade_opacity;uniform bool u_is_size_zoom_constant;uniform bool u_is_size_feature_constant;uniform highp float u_size_t;uniform highp float u_size;uniform mat4 u_label_plane_matrix;uniform mat4 u_coord_matrix;uniform bool u_is_text;uniform bool u_pitch_with_map;uniform bool u_is_along_line;uniform bool u_is_variable_anchor;uniform highp float u_pitch;uniform bool u_rotate_symbol;uniform highp float u_aspect_ratio;uniform highp float u_camera_to_center_distance;uniform float u_fade_change;uniform vec2 u_texsize;uniform vec2 u_translation;uniform float u_pitched_scale;out vec2 v_data0;out vec3 v_data1;
#pragma mapbox: define highp vec4 fill_color
#pragma mapbox: define highp vec4 halo_color
#pragma mapbox: define lowp float opacity
#pragma mapbox: define lowp float halo_width
#pragma mapbox: define lowp float halo_blur
void main() {
#pragma mapbox: initialize highp vec4 fill_color
#pragma mapbox: initialize highp vec4 halo_color
#pragma mapbox: initialize lowp float opacity
#pragma mapbox: initialize lowp float halo_width
#pragma mapbox: initialize lowp float halo_blur
vec2 a_pos=a_pos_offset.xy;vec2 a_offset=a_pos_offset.zw;vec2 a_tex=a_data.xy;vec2 a_size=a_data.zw;float a_size_min=floor(a_size[0]*0.5);vec2 a_pxoffset=a_pixeloffset.xy;float ele=get_elevation(a_pos);highp float segment_angle=-a_projected_pos[2];float size;if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {size=mix(a_size_min,a_size[1],u_size_t)/128.0;} else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {size=a_size_min/128.0;} else {size=u_size;}vec2 translated_a_pos=a_pos+u_translation;vec4 projectedPoint=projectTileWithElevation(translated_a_pos,ele);highp float camera_to_anchor_distance=projectedPoint.w;highp float distance_ratio=u_pitch_with_map ?
camera_to_anchor_distance/u_camera_to_center_distance :
u_camera_to_center_distance/camera_to_anchor_distance;highp float perspective_ratio=clamp(0.5+0.5*distance_ratio,0.0,4.0);size*=perspective_ratio;float fontScale=u_is_text ? size/24.0 : size;highp float symbol_rotation=0.0;if (u_rotate_symbol) {vec4 offsetProjectedPoint=projectTileWithElevation(translated_a_pos+vec2(1,0),ele);vec2 a=projectedPoint.xy/projectedPoint.w;vec2 b=offsetProjectedPoint.xy/offsetProjectedPoint.w;symbol_rotation=atan((b.y-a.y)/u_aspect_ratio,b.x-a.x);}highp float angle_sin=sin(segment_angle+symbol_rotation);highp float angle_cos=cos(segment_angle+symbol_rotation);mat2 rotation_matrix=mat2(angle_cos,-1.0*angle_sin,angle_sin,angle_cos);vec4 projected_pos;if (u_is_along_line || u_is_variable_anchor) {projected_pos=vec4(a_projected_pos.xy,ele,1.0);} else if (u_pitch_with_map) {projected_pos=u_label_plane_matrix*vec4(a_projected_pos.xy+u_translation,ele,1.0);} else {projected_pos=u_label_plane_matrix*projectTileWithElevation(a_projected_pos.xy+u_translation,ele);}float z=float(u_pitch_with_map)*projected_pos.z/projected_pos.w;float projectionScaling=1.0;
#ifdef GLOBE
if(u_pitch_with_map) {float anchor_pos_tile_y=(u_coord_matrix*vec4(projected_pos.xy/projected_pos.w,z,1.0)).y;projectionScaling=mix(projectionScaling,1.0/circumferenceRatioAtTileY(anchor_pos_tile_y)*u_pitched_scale,u_projection_transition);}
#endif
vec4 finalPos=u_coord_matrix*vec4(projected_pos.xy/projected_pos.w+rotation_matrix*(a_offset/32.0*fontScale+a_pxoffset)*projectionScaling,z,1.0);if(u_pitch_with_map) {finalPos=projectTileWithElevation(finalPos.xy,finalPos.z);}float gamma_scale=finalPos.w;gl_Position=finalPos;vec2 fade_opacity=unpack_opacity(a_fade_opacity);float visibility=calculate_visibility(projectedPoint);float fade_change=fade_opacity[1] > 0.5 ? u_fade_change :-u_fade_change;float interpolated_fade_opacity=max(0.0,min(visibility,fade_opacity[0]+fade_change));v_data0=a_tex/u_texsize;v_data1=vec3(gamma_scale,size,interpolated_fade_opacity);}`,he=`#define SDF_PX 8.0
#define SDF 1.0
#define ICON 0.0
uniform bool u_is_halo;uniform sampler2D u_texture;uniform sampler2D u_texture_icon;uniform highp float u_gamma_scale;uniform lowp float u_device_pixel_ratio;in vec4 v_data0;in vec4 v_data1;
#pragma mapbox: define highp vec4 fill_color
#pragma mapbox: define highp vec4 halo_color
#pragma mapbox: define lowp float opacity
#pragma mapbox: define lowp float halo_width
#pragma mapbox: define lowp float halo_blur
void main() {
#pragma mapbox: initialize highp vec4 fill_color
#pragma mapbox: initialize highp vec4 halo_color
#pragma mapbox: initialize lowp float opacity
#pragma mapbox: initialize lowp float halo_width
#pragma mapbox: initialize lowp float halo_blur
float fade_opacity=v_data1[2];if (v_data1.w==ICON) {vec2 tex_icon=v_data0.zw;lowp float alpha=opacity*fade_opacity;fragColor=texture(u_texture_icon,tex_icon)*alpha;
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(1.0);
#endif
return;}vec2 tex=v_data0.xy;float EDGE_GAMMA=0.105/u_device_pixel_ratio;float gamma_scale=v_data1.x;float size=v_data1.y;float fontScale=size/24.0;lowp vec4 color=fill_color;highp float gamma=EDGE_GAMMA/(fontScale*u_gamma_scale);lowp float buff=(256.0-64.0)/256.0;if (u_is_halo) {color=halo_color;gamma=(halo_blur*1.19/SDF_PX+EDGE_GAMMA)/(fontScale*u_gamma_scale);buff=(6.0-halo_width/fontScale)/SDF_PX;}lowp float dist=texture(u_texture,tex).a;highp float gamma_scaled=gamma*gamma_scale;highp float alpha=smoothstep(buff-gamma_scaled,buff+gamma_scaled,dist);fragColor=color*(alpha*opacity*fade_opacity);
#ifdef OVERDRAW_INSPECTOR
fragColor=vec4(1.0);
#endif
}`,xe=`in vec4 a_pos_offset;in vec4 a_data;in vec3 a_projected_pos;in float a_fade_opacity;uniform bool u_is_size_zoom_constant;uniform bool u_is_size_feature_constant;uniform highp float u_size_t;uniform highp float u_size;uniform mat4 u_label_plane_matrix;uniform mat4 u_coord_matrix;uniform bool u_is_text;uniform bool u_pitch_with_map;uniform highp float u_pitch;uniform bool u_rotate_symbol;uniform highp float u_aspect_ratio;uniform highp float u_camera_to_center_distance;uniform float u_fade_change;uniform vec2 u_texsize;uniform vec2 u_texsize_icon;uniform bool u_is_along_line;uniform bool u_is_variable_anchor;uniform vec2 u_translation;uniform float u_pitched_scale;out vec4 v_data0;out vec4 v_data1;
#pragma mapbox: define highp vec4 fill_color
#pragma mapbox: define highp vec4 halo_color
#pragma mapbox: define lowp float opacity
#pragma mapbox: define lowp float halo_width
#pragma mapbox: define lowp float halo_blur
void main() {
#pragma mapbox: initialize highp vec4 fill_color
#pragma mapbox: initialize highp vec4 halo_color
#pragma mapbox: initialize lowp float opacity
#pragma mapbox: initialize lowp float halo_width
#pragma mapbox: initialize lowp float halo_blur
vec2 a_pos=a_pos_offset.xy;vec2 a_offset=a_pos_offset.zw;vec2 a_tex=a_data.xy;vec2 a_size=a_data.zw;float a_size_min=floor(a_size[0]*0.5);float is_sdf=a_size[0]-2.0*a_size_min;float ele=get_elevation(a_pos);highp float segment_angle=-a_projected_pos[2];float size;if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {size=mix(a_size_min,a_size[1],u_size_t)/128.0;} else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {size=a_size_min/128.0;} else {size=u_size;}vec2 translated_a_pos=a_pos+u_translation;vec4 projectedPoint=projectTileWithElevation(translated_a_pos,ele);highp float camera_to_anchor_distance=projectedPoint.w;highp float distance_ratio=u_pitch_with_map ?
camera_to_anchor_distance/u_camera_to_center_distance :
u_camera_to_center_distance/camera_to_anchor_distance;highp float perspective_ratio=clamp(0.5+0.5*distance_ratio,0.0,4.0);size*=perspective_ratio;float fontScale=size/24.0;highp float symbol_rotation=0.0;if (u_rotate_symbol) {vec4 offsetProjectedPoint=projectTileWithElevation(translated_a_pos+vec2(1,0),ele);vec2 a=projectedPoint.xy/projectedPoint.w;vec2 b=offsetProjectedPoint.xy/offsetProjectedPoint.w;symbol_rotation=atan((b.y-a.y)/u_aspect_ratio,b.x-a.x);}highp float angle_sin=sin(segment_angle+symbol_rotation);highp float angle_cos=cos(segment_angle+symbol_rotation);mat2 rotation_matrix=mat2(angle_cos,-1.0*angle_sin,angle_sin,angle_cos);vec4 projected_pos;if (u_is_along_line || u_is_variable_anchor) {projected_pos=vec4(a_projected_pos.xy,ele,1.0);} else if (u_pitch_with_map) {projected_pos=u_label_plane_matrix*vec4(a_projected_pos.xy+u_translation,ele,1.0);} else {projected_pos=u_label_plane_matrix*projectTileWithElevation(a_projected_pos.xy+u_translation,ele);}float z=float(u_pitch_with_map)*projected_pos.z/projected_pos.w;float projectionScaling=1.0;
#ifdef GLOBE
if(u_pitch_with_map && !u_is_along_line) {float anchor_pos_tile_y=(u_coord_matrix*vec4(projected_pos.xy/projected_pos.w,z,1.0)).y;projectionScaling=mix(projectionScaling,1.0/circumferenceRatioAtTileY(anchor_pos_tile_y)*u_pitched_scale,u_projection_transition);}
#endif
vec4 finalPos=u_coord_matrix*vec4(projected_pos.xy/projected_pos.w+rotation_matrix*(a_offset/32.0*fontScale)*projectionScaling,z,1.0);if(u_pitch_with_map) {finalPos=projectTileWithElevation(finalPos.xy,finalPos.z);}float gamma_scale=finalPos.w;gl_Position=finalPos;vec2 fade_opacity=unpack_opacity(a_fade_opacity);float visibility=calculate_visibility(projectedPoint);float fade_change=fade_opacity[1] > 0.5 ? u_fade_change :-u_fade_change;float interpolated_fade_opacity=max(0.0,min(visibility,fade_opacity[0]+fade_change));v_data0.xy=a_tex/u_texsize;v_data0.zw=a_tex/u_texsize_icon;v_data1=vec4(gamma_scale,size,interpolated_fade_opacity,is_sdf);}`,be="in float v_depth;const highp vec4 bitSh=vec4(256.*256.*256.,256.*256.,256.,1.);const highp vec4 bitMsk=vec4(0.,vec3(1./256.0));highp vec4 pack(highp float value) {highp vec4 comp=fract(value*bitSh);comp-=comp.xxyz*bitMsk;return comp;}void main() {fragColor=pack(v_depth);}",we="precision mediump float;uniform sampler2D u_texture;uniform float u_terrain_coords_id;in vec2 v_texture_pos;void main() {vec4 rgba=texture(u_texture,v_texture_pos);fragColor=vec4(rgba.r,rgba.g,rgba.b,u_terrain_coords_id);}",ye="uniform sampler2D u_texture;uniform vec4 u_fog_color;uniform vec4 u_horizon_color;uniform float u_fog_ground_blend;uniform float u_fog_ground_blend_opacity;uniform float u_horizon_fog_blend;uniform bool u_is_globe_mode;in vec2 v_texture_pos;in float v_fog_depth;const float gamma=2.2;vec4 gammaToLinear(vec4 color) {return pow(color,vec4(gamma));}vec4 linearToGamma(vec4 color) {return pow(color,vec4(1.0/gamma));}void main() {vec4 surface_color=texture(u_texture,vec2(v_texture_pos.x,1.0-v_texture_pos.y));if (!u_is_globe_mode && v_fog_depth > u_fog_ground_blend) {vec4 surface_color_linear=gammaToLinear(surface_color);float blend_color=smoothstep(0.0,1.0,max((v_fog_depth-u_horizon_fog_blend)/(1.0-u_horizon_fog_blend),0.0));vec4 fog_horizon_color_linear=mix(gammaToLinear(u_fog_color),gammaToLinear(u_horizon_color),blend_color);float factor_fog=max(v_fog_depth-u_fog_ground_blend,0.0)/(1.0-u_fog_ground_blend);fragColor=linearToGamma(mix(surface_color_linear,fog_horizon_color_linear,pow(factor_fog,2.0)*u_fog_ground_blend_opacity));} else {fragColor=surface_color;}}",ze="in vec3 a_pos3d;uniform mat4 u_fog_matrix;uniform float u_ele_delta;out vec2 v_texture_pos;out float v_fog_depth;void main() {float ele=get_elevation(a_pos3d.xy);float ele_delta=a_pos3d.z==1.0 ? u_ele_delta : 0.0;v_texture_pos=a_pos3d.xy/8192.0;gl_Position=projectTileFor3D(a_pos3d.xy,get_elevation(a_pos3d.xy)-ele_delta);vec4 pos=u_fog_matrix*vec4(a_pos3d.xy,ele,1.0);v_fog_depth=pos.z/pos.w*0.5+0.5;}",je="in vec3 a_pos3d;uniform float u_ele_delta;out float v_depth;void main() {float ele=get_elevation(a_pos3d.xy);float ele_delta=a_pos3d.z==1.0 ? u_ele_delta : 0.0;gl_Position=projectTileFor3D(a_pos3d.xy,ele-ele_delta);v_depth=gl_Position.z/gl_Position.w;}",Pe="in vec3 a_pos3d;uniform float u_ele_delta;out vec2 v_texture_pos;void main() {float ele=get_elevation(a_pos3d.xy);float ele_delta=a_pos3d.z==1.0 ? u_ele_delta : 0.0;v_texture_pos=a_pos3d.xy/8192.0;gl_Position=projectTileFor3D(a_pos3d.xy,ele-ele_delta);}",Te="in vec2 a_pos;uniform highp float u_input;uniform highp float u_output_expected;out vec4 v_output_error_encoded;void main() {float real_output=2.0*atan(exp(PI-(u_input*PI*2.0)))-PI*0.5;float error=real_output-u_output_expected;float abs_error=abs(error)*128.0;v_output_error_encoded.x=min(floor(abs_error*256.0),255.0)/255.0;abs_error-=v_output_error_encoded.x;v_output_error_encoded.y=min(floor(abs_error*65536.0),255.0)/255.0;abs_error-=v_output_error_encoded.x/255.0;v_output_error_encoded.z=min(floor(abs_error*16777216.0),255.0)/255.0;v_output_error_encoded.w=error >=0.0 ? 1.0 : 0.0;gl_Position=vec4(a_pos,0.0,1.0);}",Se="in vec4 v_output_error_encoded;void main() {fragColor=v_output_error_encoded;}",Ie="float projectLineThickness(float tileY) {return 1.0;}float projectCircleRadius(float tileY) {return 1.0;}vec4 projectTile(vec2 p) {vec4 result=u_projection_matrix*vec4(p,0.0,1.0);return result;}vec4 projectTile(vec2 p,vec2 rawPos) {vec4 result=u_projection_matrix*vec4(p,0.0,1.0);if (rawPos.y <-32767.5 || rawPos.y > 32766.5) {result.z=-10000000.0;}return result;}vec4 projectTileWithElevation(vec2 posInTile,float elevation) {return u_projection_matrix*vec4(posInTile,elevation,1.0);}vec4 projectTileFor3D(vec2 posInTile,float elevation) {return projectTileWithElevation(posInTile,elevation);}",Ee=`#define GLOBE_RADIUS 6371008.8
uniform highp vec4 u_projection_tile_mercator_coords;uniform highp vec4 u_projection_clipping_plane;uniform highp float u_projection_transition;uniform mat4 u_projection_fallback_matrix;vec3 globeRotateVector(vec3 vec,vec2 angles) {vec3 axisRight=vec3(vec.z,0.0,-vec.x);vec3 axisUp=cross(axisRight,vec);axisRight=normalize(axisRight);axisUp=normalize(axisUp);vec2 t=tan(angles);return normalize(vec+axisRight*t.x+axisUp*t.y);}mat3 globeGetRotationMatrix(vec3 spherePos) {vec3 axisRight=vec3(spherePos.z,0.0,-spherePos.x);vec3 axisDown=cross(axisRight,spherePos);axisRight=normalize(axisRight);axisDown=normalize(axisDown);return mat3(axisRight,axisDown,spherePos
);}float circumferenceRatioAtTileY(float tileY) {float mercator_pos_y=u_projection_tile_mercator_coords.y+u_projection_tile_mercator_coords.w*tileY;float spherical_y=2.0*atan(exp(PI-(mercator_pos_y*PI*2.0)))-PI*0.5;return cos(spherical_y);}float projectLineThickness(float tileY) {float thickness=1.0/circumferenceRatioAtTileY(tileY); 
if (u_projection_transition < 0.999) {return mix(1.0,thickness,u_projection_transition);} else {return thickness;}}vec3 projectToSphere(vec2 translatedPos,vec2 rawPos) {vec2 mercator_pos=u_projection_tile_mercator_coords.xy+u_projection_tile_mercator_coords.zw*translatedPos;vec2 spherical;spherical.x=mercator_pos.x*PI*2.0+PI;spherical.y=2.0*atan(exp(PI-(mercator_pos.y*PI*2.0)))-PI*0.5;float len=cos(spherical.y);vec3 pos=vec3(sin(spherical.x)*len,sin(spherical.y),cos(spherical.x)*len
);if (rawPos.y <-32767.5) {pos=vec3(0.0,1.0,0.0);}if (rawPos.y > 32766.5) {pos=vec3(0.0,-1.0,0.0);}return pos;}vec3 projectToSphere(vec2 posInTile) {return projectToSphere(posInTile,vec2(0.0,0.0));}float globeComputeClippingZ(vec3 spherePos) {return (1.0-(dot(spherePos,u_projection_clipping_plane.xyz)+u_projection_clipping_plane.w));}vec4 interpolateProjection(vec2 posInTile,vec3 spherePos,float elevation) {vec3 elevatedPos=spherePos*(1.0+elevation/GLOBE_RADIUS);vec4 globePosition=u_projection_matrix*vec4(elevatedPos,1.0);globePosition.z=globeComputeClippingZ(elevatedPos)*globePosition.w;if (u_projection_transition > 0.999) {return globePosition;}vec4 flatPosition=u_projection_fallback_matrix*vec4(posInTile,elevation,1.0);const float z_globeness_threshold=0.2;vec4 result=globePosition;result.z=mix(0.0,globePosition.z,clamp((u_projection_transition-z_globeness_threshold)/(1.0-z_globeness_threshold),0.0,1.0));result.xyw=mix(flatPosition.xyw,globePosition.xyw,u_projection_transition);if ((posInTile.y <-32767.5) || (posInTile.y > 32766.5)) {result=globePosition;const float poles_hidden_anim_percentage=0.02;result.z=mix(globePosition.z,100.0,pow(max((1.0-u_projection_transition)/poles_hidden_anim_percentage,0.0),8.0));}return result;}vec4 interpolateProjectionFor3D(vec2 posInTile,vec3 spherePos,float elevation) {vec3 elevatedPos=spherePos*(1.0+elevation/GLOBE_RADIUS);vec4 globePosition=u_projection_matrix*vec4(elevatedPos,1.0);if (u_projection_transition > 0.999) {return globePosition;}vec4 fallbackPosition=u_projection_fallback_matrix*vec4(posInTile,elevation,1.0);return mix(fallbackPosition,globePosition,u_projection_transition);}vec4 projectTile(vec2 posInTile) {return interpolateProjection(posInTile,projectToSphere(posInTile),0.0);}vec4 projectTile(vec2 posInTile,vec2 rawPos) {return interpolateProjection(posInTile,projectToSphere(posInTile,rawPos),0.0);}vec4 projectTileWithElevation(vec2 posInTile,float elevation) {return interpolateProjection(posInTile,projectToSphere(posInTile),elevation);}vec4 projectTileFor3D(vec2 posInTile,float elevation) {vec3 spherePos=projectToSphere(posInTile,posInTile);return interpolateProjectionFor3D(posInTile,spherePos,elevation);}`,Re=`#ifdef GL_ES
precision highp float;
#endif
in vec3 view_direction;uniform vec3 u_sun_pos;uniform vec3 u_globe_position;uniform float u_globe_radius;uniform float u_atmosphere_blend;/**Shader use from https:*Made some change to adapt to MapLibre Globe geometry*/const float PI=3.141592653589793;const int iSteps=5;const int jSteps=3;/*radius of the planet*/const float EARTH_RADIUS=6371e3;/*radius of the atmosphere*/const float ATMOS_RADIUS=6471e3;vec2 rsi(vec3 r0,vec3 rd,float sr) {float a=dot(rd,rd);float b=2.0*dot(rd,r0);float c=dot(r0,r0)-(sr*sr);float d=(b*b)-4.0*a*c;if (d < 0.0) return vec2(1e5,-1e5);return vec2((-b-sqrt(d))/(2.0*a),(-b+sqrt(d))/(2.0*a));}vec4 atmosphere(vec3 r,vec3 r0,vec3 pSun,float iSun,float rPlanet,float rAtmos,vec3 kRlh,float kMie,float shRlh,float shMie,float g) {pSun=normalize(pSun);r=normalize(r);vec2 p=rsi(r0,r,rAtmos);if (p.x > p.y) {return vec4(0.0,0.0,0.0,1.0);}if (p.x < 0.0) {p.x=0.0;}vec3 pos=r0+r*p.x;vec2 p2=rsi(r0,r,rPlanet);if (p2.x <=p2.y && p2.x > 0.0) {p.y=min(p.y,p2.x);}float iStepSize=(p.y-p.x)/float(iSteps);float iTime=p.x+iStepSize*0.5;vec3 totalRlh=vec3(0,0,0);vec3 totalMie=vec3(0,0,0);float iOdRlh=0.0;float iOdMie=0.0;float mu=dot(r,pSun);float mumu=mu*mu;float gg=g*g;float pRlh=3.0/(16.0*PI)*(1.0+mumu);float pMie=3.0/(8.0*PI)*((1.0-gg)*(mumu+1.0))/(pow(1.0+gg-2.0*mu*g,1.5)*(2.0+gg));for (int i=0; i < iSteps; i++) {vec3 iPos=r0+r*iTime;float iHeight=length(iPos)-rPlanet;float odStepRlh=exp(-iHeight/shRlh)*iStepSize;float odStepMie=exp(-iHeight/shMie)*iStepSize;iOdRlh+=odStepRlh;iOdMie+=odStepMie;float jStepSize=rsi(iPos,pSun,rAtmos).y/float(jSteps);float jTime=jStepSize*0.5;float jOdRlh=0.0;float jOdMie=0.0;for (int j=0; j < jSteps; j++) {vec3 jPos=iPos+pSun*jTime;float jHeight=length(jPos)-rPlanet;jOdRlh+=exp(-jHeight/shRlh)*jStepSize;jOdMie+=exp(-jHeight/shMie)*jStepSize;jTime+=jStepSize;}vec3 attn=exp(-(kMie*(iOdMie+jOdMie)+kRlh*(iOdRlh+jOdRlh)));totalRlh+=odStepRlh*attn;totalMie+=odStepMie*attn;iTime+=iStepSize;}float opacity=exp(-(length(kRlh)*length(totalRlh)+kMie*length(totalMie)));vec3 color=iSun*(pRlh*kRlh*totalRlh+pMie*kMie*totalMie);return vec4(color,opacity);}void main() {vec3 scale_camera_pos=-u_globe_position*EARTH_RADIUS/u_globe_radius;vec4 color=atmosphere(normalize(view_direction),scale_camera_pos,u_sun_pos,22.0,EARTH_RADIUS,ATMOS_RADIUS,vec3(5.5e-6,13.0e-6,22.4e-6),21e-6,8e3,1.2e3,0.758
);color.rgb=1.0-exp(-1.0*color.rgb);color=pow(color,vec4(1.0/2.2));fragColor=vec4(color.rgb,1.0-color.a)*u_atmosphere_blend;}`,Ae="in vec2 a_pos;uniform mat4 u_inv_proj_matrix;out vec3 view_direction;void main() {view_direction=(u_inv_proj_matrix*vec4(a_pos,0.0,1.0)).xyz;gl_Position=vec4(a_pos,0.0,1.0);}",Ce="uniform vec4 u_sky_color;uniform vec4 u_horizon_color;uniform vec2 u_horizon;uniform vec2 u_horizon_normal;uniform float u_sky_horizon_blend;uniform float u_sky_blend;void main() {float x=gl_FragCoord.x;float y=gl_FragCoord.y;float blend=(y-u_horizon.y)*u_horizon_normal.y+(x-u_horizon.x)*u_horizon_normal.x;if (blend > 0.0) {if (blend < u_sky_horizon_blend) {fragColor=mix(u_sky_color,u_horizon_color,pow(1.0-blend/u_sky_horizon_blend,2.0));} else {fragColor=u_sky_color;}}fragColor=mix(fragColor,vec4(vec3(0.0),0.0),u_sky_blend);}",Oe="in vec2 a_pos;void main() {gl_Position=vec4(a_pos,1.0,1.0);}",Le={prelude:o(h,x),projectionMercator:o("",Ie),projectionGlobe:o("",Ee),background:o(b,w),backgroundPattern:o(y,z),circle:o(j,P),clippingMask:o(d,T),heatmap:o(S,I),heatmapTexture:o(E,R),collisionBox:o(A,C),collisionCircle:o(O,k),colorRelief:o(D,L),debug:o(N,G),depth:o(d,F),fill:o(M,V),fillOutline:o($,U),fillOutlinePattern:o(B,W),fillPattern:o(H,q),fillExtrusion:o(Y,Z),fillExtrusionPattern:o(X,J),hillshadePrepare:o(K,Q),hillshade:o(ee,oe),line:o(ae,te),lineGradient:o(ie,ne),linePattern:o(_e,le),lineSDF:o(re,pe),lineGradientSDF:o(ce,se),raster:o(fe,me),symbolIcon:o(de,ue),symbolSDF:o(ve,ge),symbolTextAndIcon:o(he,xe),terrain:o(ye,ze),terrainDepth:o(be,je),terrainCoords:o(we,Pe),projectionErrorMeasurement:o(Se,Te),atmosphere:o(Re,Ae),sky:o(Ce,Oe)};function o(i,n){const p=/#pragma mapbox: ([\w]+) ([\w]+) ([\w]+) ([\w]+)/g,u=n.match(/in ([\w]+) ([\w]+)/g),c=i.match(/uniform ([\w]+) ([\w]+)([\s]*)([\w]*)/g),s=n.match(/uniform ([\w]+) ([\w]+)([\s]*)([\w]*)/g),v=s?s.concat(c):c,f={};return i=i.replace(p,(g,_,a,t,e)=>(f[e]=!0,_==="define"?`
#ifndef HAS_UNIFORM_u_${e}
in ${a} ${t} ${e};
#else
uniform ${a} ${t} u_${e};
#endif
`:`
#ifdef HAS_UNIFORM_u_${e}
    ${a} ${t} ${e} = u_${e};
#endif
`)),n=n.replace(p,(g,_,a,t,e)=>{const r=t==="float"?"vec2":"vec4",l=e.match(/color/)?"color":r;return f[e]?_==="define"?`
#ifndef HAS_UNIFORM_u_${e}
uniform lowp float u_${e}_t;
in ${a} ${r} a_${e};
out ${a} ${t} ${e};
#else
uniform ${a} ${t} u_${e};
#endif
`:l==="vec4"?`
#ifndef HAS_UNIFORM_u_${e}
    ${e} = a_${e};
#else
    ${a} ${t} ${e} = u_${e};
#endif
`:`
#ifndef HAS_UNIFORM_u_${e}
    ${e} = unpack_mix_${l}(a_${e}, u_${e}_t);
#else
    ${a} ${t} ${e} = u_${e};
#endif
`:_==="define"?`
#ifndef HAS_UNIFORM_u_${e}
uniform lowp float u_${e}_t;
in ${a} ${r} a_${e};
#else
uniform ${a} ${t} u_${e};
#endif
`:l==="vec4"?`
#ifndef HAS_UNIFORM_u_${e}
    ${a} ${t} ${e} = a_${e};
#else
    ${a} ${t} ${e} = u_${e};
#endif
`:`
#ifndef HAS_UNIFORM_u_${e}
    ${a} ${t} ${e} = unpack_mix_${l}(a_${e}, u_${e}_t);
#else
    ${a} ${t} ${e} = u_${e};
#endif
`}),{fragmentSource:i,vertexSource:n,staticAttributes:u,staticUniforms:v}}function Ne(i){return i.replace(/\bin\s/g,"attribute ").replace(/\bout\s/g,"varying ").replace(/texture\(/g,"texture2D(")}function Ge(i){return i.replace(/\bin\s/g,"varying ").replace("out highp vec4 fragColor;","").replace(/fragColor/g,"gl_FragColor").replace(/texture\(/g,"texture2D(")}export{Ne as a,De as p,Le as s,Ge as t};
