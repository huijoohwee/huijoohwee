/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const ia = "128";
const ts = "300 es";
class sn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, a = i.length; s < a; s++)
        i[s].call(this, e);
      e.target = null;
    }
  }
}
const $e = [];
for (let r = 0; r < 256; r++)
  $e[r] = (r < 16 ? "0" : "") + r.toString(16);
const Vi = Math.PI / 180, Tr = 180 / Math.PI;
function bt() {
  const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return ($e[r & 255] + $e[r >> 8 & 255] + $e[r >> 16 & 255] + $e[r >> 24 & 255] + "-" + $e[e & 255] + $e[e >> 8 & 255] + "-" + $e[e >> 16 & 15 | 64] + $e[e >> 24 & 255] + "-" + $e[t & 63 | 128] + $e[t >> 8 & 255] + "-" + $e[t >> 16 & 255] + $e[t >> 24 & 255] + $e[n & 255] + $e[n >> 8 & 255] + $e[n >> 16 & 255] + $e[n >> 24 & 255]).toUpperCase();
}
function ct(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function Qa(r, e) {
  return (r % e + e) % e;
}
function ki(r, e, t) {
  return (1 - t) * r + t * e;
}
function ns(r) {
  return (r & r - 1) === 0 && r !== 0;
}
function Ka(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function eo(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
class j {
  constructor(e = 0, t = 0) {
    this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this);
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this);
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t, n) {
    return n !== void 0 && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * n - a * i + e.x, this.y = s * i + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
}
j.prototype.isVector2 = !0;
class Qe {
  constructor() {
    this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
  }
  set(e, t, n, i, s, a, o, l, c) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = o, h[3] = t, h[4] = s, h[5] = l, h[6] = n, h[7] = a, h[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], h = n[4], d = n[7], u = n[2], f = n[5], m = n[8], x = i[0], _ = i[3], g = i[6], p = i[1], E = i[4], T = i[7], S = i[2], v = i[5], P = i[8];
    return s[0] = a * x + o * p + l * S, s[3] = a * _ + o * E + l * v, s[6] = a * g + o * T + l * P, s[1] = c * x + h * p + d * S, s[4] = c * _ + h * E + d * v, s[7] = c * g + h * T + d * P, s[2] = u * x + f * p + m * S, s[5] = u * _ + f * E + m * v, s[8] = u * g + f * T + m * P, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8];
    return t * a * h - t * o * c - n * s * h + n * o * l + i * s * c - i * a * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], d = h * a - o * c, u = o * l - h * s, f = c * s - a * l, m = t * d + n * u + i * f;
    if (m === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const x = 1 / m;
    return e[0] = d * x, e[1] = (i * c - h * n) * x, e[2] = (o * n - i * a) * x, e[3] = u * x, e[4] = (h * t - i * l) * x, e[5] = (i * s - o * t) * x, e[6] = f * x, e[7] = (n * l - c * t) * x, e[8] = (a * t - n * s) * x, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, s, a, o) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(
      n * l,
      n * c,
      -n * (l * a + c * o) + a + e,
      -i * c,
      i * l,
      -i * (-c * a + l * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  scale(e, t) {
    const n = this.elements;
    return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this;
  }
  rotate(e) {
    const t = Math.cos(e), n = Math.sin(e), i = this.elements, s = i[0], a = i[3], o = i[6], l = i[1], c = i[4], h = i[7];
    return i[0] = t * s + n * l, i[3] = t * a + n * c, i[6] = t * o + n * h, i[1] = -n * s + t * l, i[4] = -n * a + t * c, i[7] = -n * o + t * h, this;
  }
  translate(e, t) {
    const n = this.elements;
    return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
Qe.prototype.isMatrix3 = !0;
let on;
class An {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      on === void 0 && (on = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), on.width = e.width, on.height = e.height;
      const n = on.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = on;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
}
let to = 0;
class Ke extends sn {
  constructor(e = Ke.DEFAULT_IMAGE, t = Ke.DEFAULT_MAPPING, n = 1001, i = 1001, s = 1006, a = 1008, o = 1023, l = 1009, c = 1, h = 3e3) {
    super(), Object.defineProperty(this, "id", { value: to++ }), this.uuid = bt(), this.name = "", this.image = e, this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new j(0, 0), this.repeat = new j(1, 1), this.center = new j(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Qe(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = h, this.version = 0, this.onUpdate = null;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    if (this.image !== void 0) {
      const i = this.image;
      if (i.uuid === void 0 && (i.uuid = bt()), !t && e.images[i.uuid] === void 0) {
        let s;
        if (Array.isArray(i)) {
          s = [];
          for (let a = 0, o = i.length; a < o; a++)
            i[a].isDataTexture ? s.push(Wi(i[a].image)) : s.push(Wi(i[a]));
        } else
          s = Wi(i);
        e.images[i.uuid] = {
          uuid: i.uuid,
          url: s
        };
      }
      n.image = i.uuid;
    }
    return t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== 300) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case 1e3:
          e.x = e.x - Math.floor(e.x);
          break;
        case 1001:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case 1e3:
          e.y = e.y - Math.floor(e.y);
          break;
        case 1001:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
Ke.DEFAULT_IMAGE = void 0;
Ke.DEFAULT_MAPPING = 300;
Ke.prototype.isTexture = !0;
function Wi(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? An.getDataURL(r) : r.data ? {
    data: Array.prototype.slice.call(r.data),
    width: r.width,
    height: r.height,
    type: r.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
class Ie {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this);
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this);
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const l = e.elements, c = l[0], h = l[4], d = l[8], u = l[1], f = l[5], m = l[9], x = l[2], _ = l[6], g = l[10];
    if (Math.abs(h - u) < 0.01 && Math.abs(d - x) < 0.01 && Math.abs(m - _) < 0.01) {
      if (Math.abs(h + u) < 0.1 && Math.abs(d + x) < 0.1 && Math.abs(m + _) < 0.1 && Math.abs(c + f + g - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const E = (c + 1) / 2, T = (f + 1) / 2, S = (g + 1) / 2, v = (h + u) / 4, P = (d + x) / 4, N = (m + _) / 4;
      return E > T && E > S ? E < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(E), i = v / n, s = P / n) : T > S ? T < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(T), n = v / i, s = N / i) : S < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(S), n = P / s, i = N / s), this.set(n, i, s, t), this;
    }
    let p = Math.sqrt((_ - m) * (_ - m) + (d - x) * (d - x) + (u - h) * (u - h));
    return Math.abs(p) < 1e-3 && (p = 1), this.x = (_ - m) / p, this.y = (d - x) / p, this.z = (u - h) / p, this.w = Math.acos((c + f + g - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t, n) {
    return n !== void 0 && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
}
Ie.prototype.isVector4 = !0;
class nn extends sn {
  constructor(e, t, n) {
    super(), this.width = e, this.height = t, this.depth = 1, this.scissor = new Ie(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ie(0, 0, e, t), n = n || {}, this.texture = new Ke(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.image = {}, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = 1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : 1006, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null;
  }
  setTexture(e) {
    e.image = {
      width: this.width,
      height: this.height,
      depth: this.depth
    }, this.texture = e;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
nn.prototype.isWebGLRenderTarget = !0;
class no extends nn {
  constructor(e, t, n) {
    super(e, t, n), this.samples = 4;
  }
  copy(e) {
    return super.copy.call(this, e), this.samples = e.samples, this;
  }
}
no.prototype.isWebGLMultisampleRenderTarget = !0;
class it {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerp(e, t, n, i) {
    return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), n.slerpQuaternions(e, t, i);
  }
  static slerpFlat(e, t, n, i, s, a, o) {
    let l = n[i + 0], c = n[i + 1], h = n[i + 2], d = n[i + 3];
    const u = s[a + 0], f = s[a + 1], m = s[a + 2], x = s[a + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = d;
      return;
    }
    if (o === 1) {
      e[t + 0] = u, e[t + 1] = f, e[t + 2] = m, e[t + 3] = x;
      return;
    }
    if (d !== x || l !== u || c !== f || h !== m) {
      let _ = 1 - o;
      const g = l * u + c * f + h * m + d * x, p = g >= 0 ? 1 : -1, E = 1 - g * g;
      if (E > Number.EPSILON) {
        const S = Math.sqrt(E), v = Math.atan2(S, g * p);
        _ = Math.sin(_ * v) / S, o = Math.sin(o * v) / S;
      }
      const T = o * p;
      if (l = l * _ + u * T, c = c * _ + f * T, h = h * _ + m * T, d = d * _ + x * T, _ === 1 - o) {
        const S = 1 / Math.sqrt(l * l + c * c + h * h + d * d);
        l *= S, c *= S, h *= S, d *= S;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = d;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, a) {
    const o = n[i], l = n[i + 1], c = n[i + 2], h = n[i + 3], d = s[a], u = s[a + 1], f = s[a + 2], m = s[a + 3];
    return e[t] = o * m + h * d + l * f - c * u, e[t + 1] = l * m + h * u + c * d - o * f, e[t + 2] = c * m + h * f + o * u - l * d, e[t + 3] = h * m - o * d - l * u - c * f, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t) {
    if (!(e && e.isEuler))
      throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
    const n = e._x, i = e._y, s = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), h = o(i / 2), d = o(s / 2), u = l(n / 2), f = l(i / 2), m = l(s / 2);
    switch (a) {
      case "XYZ":
        this._x = u * h * d + c * f * m, this._y = c * f * d - u * h * m, this._z = c * h * m + u * f * d, this._w = c * h * d - u * f * m;
        break;
      case "YXZ":
        this._x = u * h * d + c * f * m, this._y = c * f * d - u * h * m, this._z = c * h * m - u * f * d, this._w = c * h * d + u * f * m;
        break;
      case "ZXY":
        this._x = u * h * d - c * f * m, this._y = c * f * d + u * h * m, this._z = c * h * m + u * f * d, this._w = c * h * d - u * f * m;
        break;
      case "ZYX":
        this._x = u * h * d - c * f * m, this._y = c * f * d + u * h * m, this._z = c * h * m - u * f * d, this._w = c * h * d + u * f * m;
        break;
      case "YZX":
        this._x = u * h * d + c * f * m, this._y = c * f * d + u * h * m, this._z = c * h * m - u * f * d, this._w = c * h * d - u * f * m;
        break;
      case "XZY":
        this._x = u * h * d - c * f * m, this._y = c * f * d - u * h * m, this._z = c * h * m + u * f * d, this._w = c * h * d + u * f * m;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], s = t[8], a = t[1], o = t[5], l = t[9], c = t[2], h = t[6], d = t[10], u = n + o + d;
    if (u > 0) {
      const f = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / f, this._x = (h - l) * f, this._y = (s - c) * f, this._z = (a - i) * f;
    } else if (n > o && n > d) {
      const f = 2 * Math.sqrt(1 + n - o - d);
      this._w = (h - l) / f, this._x = 0.25 * f, this._y = (i + a) / f, this._z = (s + c) / f;
    } else if (o > d) {
      const f = 2 * Math.sqrt(1 + o - n - d);
      this._w = (s - c) / f, this._x = (i + a) / f, this._y = 0.25 * f, this._z = (l + h) / f;
    } else {
      const f = 2 * Math.sqrt(1 + d - n - o);
      this._w = (a - i) / f, this._x = (s + c) / f, this._y = (l + h) / f, this._z = 0.25 * f;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(ct(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e, t) {
    return t !== void 0 ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, s = e._z, a = e._w, o = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = n * h + a * o + i * c - s * l, this._y = i * h + a * l + s * o - n * c, this._z = s * h + a * c + n * l - i * o, this._w = a * h - n * o - i * l - s * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, i = this._y, s = this._z, a = this._w;
    let o = a * e._w + n * e._x + i * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = a, this._x = n, this._y = i, this._z = s, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const f = 1 - t;
      return this._w = f * a + t * this._w, this._x = f * n + t * this._x, this._y = f * i + t * this._y, this._z = f * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, o), d = Math.sin((1 - t) * h) / c, u = Math.sin(t * h) / c;
    return this._w = a * d + this._w * u, this._x = n * d + this._x * u, this._y = i * d + this._y * u, this._z = s * d + this._z * u, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    this.copy(e).slerp(t, n);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
}
it.prototype.isQuaternion = !0;
class w {
  constructor(e = 0, t = 0, n = 0) {
    this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this);
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this);
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this);
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(is.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(is.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, s = e.x, a = e.y, o = e.z, l = e.w, c = l * t + a * i - o * n, h = l * n + o * t - s * i, d = l * i + s * n - a * t, u = -s * t - a * n - o * i;
    return this.x = c * l + u * -s + h * -o - d * -a, this.y = h * l + u * -a + d * -s - c * -o, this.z = d * l + u * -o + c * -a - h * -s, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t)) : this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, s = e.z, a = t.x, o = t.y, l = t.z;
    return this.x = i * l - s * o, this.y = s * a - n * l, this.z = n * o - i * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return qi.copy(this).projectOnVector(e), this.sub(qi);
  }
  reflect(e) {
    return this.sub(qi.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ct(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t, n) {
    return n !== void 0 && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
}
w.prototype.isVector3 = !0;
const qi = /* @__PURE__ */ new w(), is = /* @__PURE__ */ new it();
class ft {
  constructor(e = new w(1 / 0, 1 / 0, 1 / 0), t = new w(-1 / 0, -1 / 0, -1 / 0)) {
    this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, a = -1 / 0, o = -1 / 0;
    for (let l = 0, c = e.length; l < c; l += 3) {
      const h = e[l], d = e[l + 1], u = e[l + 2];
      h < t && (t = h), d < n && (n = d), u < i && (i = u), h > s && (s = h), d > a && (a = d), u > o && (o = u);
    }
    return this.min.set(t, n, i), this.max.set(s, a, o), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, a = -1 / 0, o = -1 / 0;
    for (let l = 0, c = e.count; l < c; l++) {
      const h = e.getX(l), d = e.getY(l), u = e.getZ(l);
      h < t && (t = h), d < n && (n = d), u < i && (i = u), h > s && (s = h), d > a && (a = d), u > o && (o = u);
    }
    return this.min.set(t, n, i), this.max.set(s, a, o), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Fn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e) {
    return this.makeEmpty(), this.expandByObject(e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return e === void 0 && (console.warn("THREE.Box3: .getCenter() target is now required"), e = new w()), this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return e === void 0 && (console.warn("THREE.Box3: .getSize() target is now required"), e = new w()), this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e) {
    e.updateWorldMatrix(!1, !1);
    const t = e.geometry;
    t !== void 0 && (t.boundingBox === null && t.computeBoundingBox(), Xi.copy(t.boundingBox), Xi.applyMatrix4(e.matrixWorld), this.union(Xi));
    const n = e.children;
    for (let i = 0, s = n.length; i < s; i++)
      this.expandByObject(n[i]);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t === void 0 && (console.warn("THREE.Box3: .getParameter() target is now required"), t = new w()), t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Fn), Fn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Nn), Kn.subVectors(this.max, Nn), ln.subVectors(e.a, Nn), cn.subVectors(e.b, Nn), hn.subVectors(e.c, Nn), Nt.subVectors(cn, ln), Bt.subVectors(hn, cn), Kt.subVectors(ln, hn);
    let t = [
      0,
      -Nt.z,
      Nt.y,
      0,
      -Bt.z,
      Bt.y,
      0,
      -Kt.z,
      Kt.y,
      Nt.z,
      0,
      -Nt.x,
      Bt.z,
      0,
      -Bt.x,
      Kt.z,
      0,
      -Kt.x,
      -Nt.y,
      Nt.x,
      0,
      -Bt.y,
      Bt.x,
      0,
      -Kt.y,
      Kt.x,
      0
    ];
    return !Yi(t, ln, cn, hn, Kn) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Yi(t, ln, cn, hn, Kn)) ? !1 : (ei.crossVectors(Nt, Bt), t = [ei.x, ei.y, ei.z], Yi(t, ln, cn, hn, Kn));
  }
  clampPoint(e, t) {
    return t === void 0 && (console.warn("THREE.Box3: .clampPoint() target is now required"), t = new w()), t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return Fn.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return e === void 0 && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(e.center), e.radius = this.getSize(Fn).length() * 0.5, e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Lt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Lt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Lt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Lt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Lt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Lt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Lt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Lt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Lt), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
ft.prototype.isBox3 = !0;
const Lt = [
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w()
], Fn = /* @__PURE__ */ new w(), Xi = /* @__PURE__ */ new ft(), ln = /* @__PURE__ */ new w(), cn = /* @__PURE__ */ new w(), hn = /* @__PURE__ */ new w(), Nt = /* @__PURE__ */ new w(), Bt = /* @__PURE__ */ new w(), Kt = /* @__PURE__ */ new w(), Nn = /* @__PURE__ */ new w(), Kn = /* @__PURE__ */ new w(), ei = /* @__PURE__ */ new w(), en = /* @__PURE__ */ new w();
function Yi(r, e, t, n, i) {
  for (let s = 0, a = r.length - 3; s <= a; s += 3) {
    en.fromArray(r, s);
    const o = i.x * Math.abs(en.x) + i.y * Math.abs(en.y) + i.z * Math.abs(en.z), l = e.dot(en), c = t.dot(en), h = n.dot(en);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o)
      return !1;
  }
  return !0;
}
const io = /* @__PURE__ */ new ft(), rs = /* @__PURE__ */ new w(), ji = /* @__PURE__ */ new w(), Zi = /* @__PURE__ */ new w();
class Ln {
  constructor(e = new w(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : io.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, a = e.length; s < a; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t === void 0 && (console.warn("THREE.Sphere: .clampPoint() target is now required"), t = new w()), t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return e === void 0 && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), e = new ft()), this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    Zi.subVectors(e, this.center);
    const t = Zi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.add(Zi.multiplyScalar(i / n)), this.radius += i;
    }
    return this;
  }
  union(e) {
    return ji.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius), this.expandByPoint(rs.copy(e.center).add(ji)), this.expandByPoint(rs.copy(e.center).sub(ji)), this;
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Rt = /* @__PURE__ */ new w(), Ji = /* @__PURE__ */ new w(), ti = /* @__PURE__ */ new w(), zt = /* @__PURE__ */ new w(), $i = /* @__PURE__ */ new w(), ni = /* @__PURE__ */ new w(), Qi = /* @__PURE__ */ new w();
class Rn {
  constructor(e = new w(), t = new w(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t === void 0 && (console.warn("THREE.Ray: .at() target is now required"), t = new w()), t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Rt)), this;
  }
  closestPointToPoint(e, t) {
    t === void 0 && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), t = new w()), t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Rt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Rt.copy(this.direction).multiplyScalar(t).add(this.origin), Rt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Ji.copy(e).add(t).multiplyScalar(0.5), ti.copy(t).sub(e).normalize(), zt.copy(this.origin).sub(Ji);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(ti), o = zt.dot(this.direction), l = -zt.dot(ti), c = zt.lengthSq(), h = Math.abs(1 - a * a);
    let d, u, f, m;
    if (h > 0)
      if (d = a * l - o, u = a * o - l, m = s * h, d >= 0)
        if (u >= -m)
          if (u <= m) {
            const x = 1 / h;
            d *= x, u *= x, f = d * (d + a * u + 2 * o) + u * (a * d + u + 2 * l) + c;
          } else
            u = s, d = Math.max(0, -(a * u + o)), f = -d * d + u * (u + 2 * l) + c;
        else
          u = -s, d = Math.max(0, -(a * u + o)), f = -d * d + u * (u + 2 * l) + c;
      else
        u <= -m ? (d = Math.max(0, -(-a * s + o)), u = d > 0 ? -s : Math.min(Math.max(-s, -l), s), f = -d * d + u * (u + 2 * l) + c) : u <= m ? (d = 0, u = Math.min(Math.max(-s, -l), s), f = u * (u + 2 * l) + c) : (d = Math.max(0, -(a * s + o)), u = d > 0 ? s : Math.min(Math.max(-s, -l), s), f = -d * d + u * (u + 2 * l) + c);
    else
      u = a > 0 ? -s : s, d = Math.max(0, -(a * u + o)), f = -d * d + u * (u + 2 * l) + c;
    return n && n.copy(this.direction).multiplyScalar(d).add(this.origin), i && i.copy(ti).multiplyScalar(u).add(Ji), f;
  }
  intersectSphere(e, t) {
    Rt.subVectors(e.center, this.origin);
    const n = Rt.dot(this.direction), i = Rt.dot(Rt) - n * n, s = e.radius * e.radius;
    if (i > s) return null;
    const a = Math.sqrt(s - i), o = n - a, l = n + a;
    return o < 0 && l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, a, o, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, d = 1 / this.direction.z, u = this.origin;
    return c >= 0 ? (n = (e.min.x - u.x) * c, i = (e.max.x - u.x) * c) : (n = (e.max.x - u.x) * c, i = (e.min.x - u.x) * c), h >= 0 ? (s = (e.min.y - u.y) * h, a = (e.max.y - u.y) * h) : (s = (e.max.y - u.y) * h, a = (e.min.y - u.y) * h), n > a || s > i || ((s > n || n !== n) && (n = s), (a < i || i !== i) && (i = a), d >= 0 ? (o = (e.min.z - u.z) * d, l = (e.max.z - u.z) * d) : (o = (e.max.z - u.z) * d, l = (e.min.z - u.z) * d), n > l || o > i) || ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Rt) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    $i.subVectors(t, e), ni.subVectors(n, e), Qi.crossVectors($i, ni);
    let a = this.direction.dot(Qi), o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    zt.subVectors(this.origin, e);
    const l = o * this.direction.dot(ni.crossVectors(zt, ni));
    if (l < 0)
      return null;
    const c = o * this.direction.dot($i.cross(zt));
    if (c < 0 || l + c > a)
      return null;
    const h = -o * zt.dot(Qi);
    return h < 0 ? null : this.at(h / a, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ue {
  constructor() {
    this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
  }
  set(e, t, n, i, s, a, o, l, c, h, d, u, f, m, x, _) {
    const g = this.elements;
    return g[0] = e, g[4] = t, g[8] = n, g[12] = i, g[1] = s, g[5] = a, g[9] = o, g[13] = l, g[2] = c, g[6] = h, g[10] = d, g[14] = u, g[3] = f, g[7] = m, g[11] = x, g[15] = _, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new ue().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / un.setFromMatrixColumn(e, 0).length(), s = 1 / un.setFromMatrixColumn(e, 1).length(), a = 1 / un.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
    const t = this.elements, n = e.x, i = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(i), c = Math.sin(i), h = Math.cos(s), d = Math.sin(s);
    if (e.order === "XYZ") {
      const u = a * h, f = a * d, m = o * h, x = o * d;
      t[0] = l * h, t[4] = -l * d, t[8] = c, t[1] = f + m * c, t[5] = u - x * c, t[9] = -o * l, t[2] = x - u * c, t[6] = m + f * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const u = l * h, f = l * d, m = c * h, x = c * d;
      t[0] = u + x * o, t[4] = m * o - f, t[8] = a * c, t[1] = a * d, t[5] = a * h, t[9] = -o, t[2] = f * o - m, t[6] = x + u * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const u = l * h, f = l * d, m = c * h, x = c * d;
      t[0] = u - x * o, t[4] = -a * d, t[8] = m + f * o, t[1] = f + m * o, t[5] = a * h, t[9] = x - u * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const u = a * h, f = a * d, m = o * h, x = o * d;
      t[0] = l * h, t[4] = m * c - f, t[8] = u * c + x, t[1] = l * d, t[5] = x * c + u, t[9] = f * c - m, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const u = a * l, f = a * c, m = o * l, x = o * c;
      t[0] = l * h, t[4] = x - u * d, t[8] = m * d + f, t[1] = d, t[5] = a * h, t[9] = -o * h, t[2] = -c * h, t[6] = f * d + m, t[10] = u - x * d;
    } else if (e.order === "XZY") {
      const u = a * l, f = a * c, m = o * l, x = o * c;
      t[0] = l * h, t[4] = -d, t[8] = c * h, t[1] = u * d + x, t[5] = a * h, t[9] = f * d - m, t[2] = m * d - f, t[6] = o * h, t[10] = x * d + u;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(ro, e, so);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return ot.subVectors(e, t), ot.lengthSq() === 0 && (ot.z = 1), ot.normalize(), Ut.crossVectors(n, ot), Ut.lengthSq() === 0 && (Math.abs(n.z) === 1 ? ot.x += 1e-4 : ot.z += 1e-4, ot.normalize(), Ut.crossVectors(n, ot)), Ut.normalize(), ii.crossVectors(ot, Ut), i[0] = Ut.x, i[4] = ii.x, i[8] = ot.x, i[1] = Ut.y, i[5] = ii.y, i[9] = ot.y, i[2] = Ut.z, i[6] = ii.z, i[10] = ot.z, this;
  }
  multiply(e, t) {
    return t !== void 0 ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], h = n[1], d = n[5], u = n[9], f = n[13], m = n[2], x = n[6], _ = n[10], g = n[14], p = n[3], E = n[7], T = n[11], S = n[15], v = i[0], P = i[4], N = i[8], z = i[12], F = i[1], H = i[5], U = i[9], A = i[13], C = i[2], D = i[6], R = i[10], W = i[14], J = i[3], X = i[7], se = i[11], ne = i[15];
    return s[0] = a * v + o * F + l * C + c * J, s[4] = a * P + o * H + l * D + c * X, s[8] = a * N + o * U + l * R + c * se, s[12] = a * z + o * A + l * W + c * ne, s[1] = h * v + d * F + u * C + f * J, s[5] = h * P + d * H + u * D + f * X, s[9] = h * N + d * U + u * R + f * se, s[13] = h * z + d * A + u * W + f * ne, s[2] = m * v + x * F + _ * C + g * J, s[6] = m * P + x * H + _ * D + g * X, s[10] = m * N + x * U + _ * R + g * se, s[14] = m * z + x * A + _ * W + g * ne, s[3] = p * v + E * F + T * C + S * J, s[7] = p * P + E * H + T * D + S * X, s[11] = p * N + E * U + T * R + S * se, s[15] = p * z + E * A + T * W + S * ne, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], a = e[1], o = e[5], l = e[9], c = e[13], h = e[2], d = e[6], u = e[10], f = e[14], m = e[3], x = e[7], _ = e[11], g = e[15];
    return m * (+s * l * d - i * c * d - s * o * u + n * c * u + i * o * f - n * l * f) + x * (+t * l * f - t * c * u + s * a * u - i * a * f + i * c * h - s * l * h) + _ * (+t * c * d - t * o * f - s * a * d + n * a * f + s * o * h - n * c * h) + g * (-i * o * h - t * l * d + t * o * u + i * a * d - n * a * u + n * l * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], d = e[9], u = e[10], f = e[11], m = e[12], x = e[13], _ = e[14], g = e[15], p = d * _ * c - x * u * c + x * l * f - o * _ * f - d * l * g + o * u * g, E = m * u * c - h * _ * c - m * l * f + a * _ * f + h * l * g - a * u * g, T = h * x * c - m * d * c + m * o * f - a * x * f - h * o * g + a * d * g, S = m * d * l - h * x * l - m * o * u + a * x * u + h * o * _ - a * d * _, v = t * p + n * E + i * T + s * S;
    if (v === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const P = 1 / v;
    return e[0] = p * P, e[1] = (x * u * s - d * _ * s - x * i * f + n * _ * f + d * i * g - n * u * g) * P, e[2] = (o * _ * s - x * l * s + x * i * c - n * _ * c - o * i * g + n * l * g) * P, e[3] = (d * l * s - o * u * s - d * i * c + n * u * c + o * i * f - n * l * f) * P, e[4] = E * P, e[5] = (h * _ * s - m * u * s + m * i * f - t * _ * f - h * i * g + t * u * g) * P, e[6] = (m * l * s - a * _ * s - m * i * c + t * _ * c + a * i * g - t * l * g) * P, e[7] = (a * u * s - h * l * s + h * i * c - t * u * c - a * i * f + t * l * f) * P, e[8] = T * P, e[9] = (m * d * s - h * x * s - m * n * f + t * x * f + h * n * g - t * d * g) * P, e[10] = (a * x * s - m * o * s + m * n * c - t * x * c - a * n * g + t * o * g) * P, e[11] = (h * o * s - a * d * s - h * n * c + t * d * c + a * n * f - t * o * f) * P, e[12] = S * P, e[13] = (h * x * i - m * d * i + m * n * u - t * x * u - h * n * _ + t * d * _) * P, e[14] = (m * o * i - a * x * i - m * n * l + t * x * l + a * n * _ - t * o * _) * P, e[15] = (a * d * i - h * o * i + h * n * l - t * d * l - a * n * u + t * o * u) * P, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, a = e.x, o = e.y, l = e.z, c = s * a, h = s * o;
    return this.set(
      c * a + n,
      c * o - i * l,
      c * l + i * o,
      0,
      c * o + i * l,
      h * o + n,
      h * l - i * a,
      0,
      c * l - i * o,
      h * l + i * a,
      s * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n) {
    return this.set(
      1,
      t,
      n,
      0,
      e,
      1,
      n,
      0,
      e,
      t,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, s = t._x, a = t._y, o = t._z, l = t._w, c = s + s, h = a + a, d = o + o, u = s * c, f = s * h, m = s * d, x = a * h, _ = a * d, g = o * d, p = l * c, E = l * h, T = l * d, S = n.x, v = n.y, P = n.z;
    return i[0] = (1 - (x + g)) * S, i[1] = (f + T) * S, i[2] = (m - E) * S, i[3] = 0, i[4] = (f - T) * v, i[5] = (1 - (u + g)) * v, i[6] = (_ + p) * v, i[7] = 0, i[8] = (m + E) * P, i[9] = (_ - p) * P, i[10] = (1 - (u + x)) * P, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = un.set(i[0], i[1], i[2]).length();
    const a = un.set(i[4], i[5], i[6]).length(), o = un.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], mt.copy(this);
    const c = 1 / s, h = 1 / a, d = 1 / o;
    return mt.elements[0] *= c, mt.elements[1] *= c, mt.elements[2] *= c, mt.elements[4] *= h, mt.elements[5] *= h, mt.elements[6] *= h, mt.elements[8] *= d, mt.elements[9] *= d, mt.elements[10] *= d, t.setFromRotationMatrix(mt), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, i, s, a) {
    a === void 0 && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
    const o = this.elements, l = 2 * s / (t - e), c = 2 * s / (n - i), h = (t + e) / (t - e), d = (n + i) / (n - i), u = -(a + s) / (a - s), f = -2 * a * s / (a - s);
    return o[0] = l, o[4] = 0, o[8] = h, o[12] = 0, o[1] = 0, o[5] = c, o[9] = d, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = u, o[14] = f, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, a) {
    const o = this.elements, l = 1 / (t - e), c = 1 / (n - i), h = 1 / (a - s), d = (t + e) * l, u = (n + i) * c, f = (a + s) * h;
    return o[0] = 2 * l, o[4] = 0, o[8] = 0, o[12] = -d, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 * h, o[14] = -f, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
ue.prototype.isMatrix4 = !0;
const un = /* @__PURE__ */ new w(), mt = /* @__PURE__ */ new ue(), ro = /* @__PURE__ */ new w(0, 0, 0), so = /* @__PURE__ */ new w(1, 1, 1), Ut = /* @__PURE__ */ new w(), ii = /* @__PURE__ */ new w(), ot = /* @__PURE__ */ new w(), ss = /* @__PURE__ */ new ue(), as = /* @__PURE__ */ new it();
class Cn {
  constructor(e = 0, t = 0, n = 0, i = Cn.DefaultOrder) {
    this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._order = i || this._order, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t, n) {
    const i = e.elements, s = i[0], a = i[4], o = i[8], l = i[1], c = i[5], h = i[9], d = i[2], u = i[6], f = i[10];
    switch (t = t || this._order, t) {
      case "XYZ":
        this._y = Math.asin(ct(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(u, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-ct(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-d, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(ct(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-d, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-ct(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(u, f), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(ct(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-d, s)) : (this._x = 0, this._y = Math.atan2(o, f));
        break;
      case "XZY":
        this._z = Math.asin(-ct(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(u, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, f), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n !== !1 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return ss.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ss, t, n);
  }
  setFromVector3(e, t) {
    return this.set(e.x, e.y, e.z, t || this._order);
  }
  reorder(e) {
    return as.setFromEuler(this), this.setFromQuaternion(as, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  toVector3(e) {
    return e ? e.set(this._x, this._y, this._z) : new w(this._x, this._y, this._z);
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
}
Cn.prototype.isEuler = !0;
Cn.DefaultOrder = "XYZ";
Cn.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class ao {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = 1 << e | 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
}
let oo = 0;
const os = new w(), dn = new it(), Ct = new ue(), ri = new w(), Bn = new w(), lo = new w(), co = new it(), ls = new w(1, 0, 0), cs = new w(0, 1, 0), hs = new w(0, 0, 1), ho = { type: "added" }, us = { type: "removed" };
class Re extends sn {
  constructor() {
    super(), Object.defineProperty(this, "id", { value: oo++ }), this.uuid = bt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Re.DefaultUp.clone();
    const e = new w(), t = new Cn(), n = new it(), i = new w(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new ue()
      },
      normalMatrix: {
        value: new Qe()
      }
    }), this.matrix = new ue(), this.matrixWorld = new ue(), this.matrixAutoUpdate = Re.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new ao(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return dn.setFromAxisAngle(e, t), this.quaternion.multiply(dn), this;
  }
  rotateOnWorldAxis(e, t) {
    return dn.setFromAxisAngle(e, t), this.quaternion.premultiply(dn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(ls, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(cs, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(hs, e);
  }
  translateOnAxis(e, t) {
    return os.copy(e).applyQuaternion(this.quaternion), this.position.add(os.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(ls, e);
  }
  translateY(e) {
    return this.translateOnAxis(cs, e);
  }
  translateZ(e) {
    return this.translateOnAxis(hs, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(Ct.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? ri.copy(e) : ri.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), Bn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Ct.lookAt(Bn, ri, this.up) : Ct.lookAt(ri, Bn, this.up), this.quaternion.setFromRotationMatrix(Ct), i && (Ct.extractRotation(i.matrixWorld), dn.setFromRotationMatrix(Ct), this.quaternion.premultiply(dn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(ho)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(us)), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(us);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Ct.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Ct.multiply(e.parent.matrixWorld)), e.applyMatrix4(Ct), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  getWorldPosition(e) {
    return e === void 0 && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), e = new w()), this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return e === void 0 && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), e = new it()), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Bn, e, lo), e;
  }
  getWorldScale(e) {
    return e === void 0 && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), e = new w()), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Bn, co, e), e;
  }
  getWorldDirection(e) {
    e === void 0 && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), e = new w()), this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const i = this.children;
      for (let s = 0, a = i.length; s < a; s++)
        i[s].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {}
    }, n.metadata = {
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const d = l[c];
            s(e.shapes, d);
          }
        else
          s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(e.materials, this.material[l]));
        i.material = o;
      } else
        i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        i.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), h = a(e.images), d = a(e.shapes), u = a(e.skeletons), f = a(e.animations);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), d.length > 0 && (n.shapes = d), u.length > 0 && (n.skeletons = u), f.length > 0 && (n.animations = f);
    }
    return n.object = i, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
Re.DefaultUp = new w(0, 1, 0);
Re.DefaultMatrixAutoUpdate = !0;
Re.prototype.isObject3D = !0;
const Ki = /* @__PURE__ */ new w(), uo = /* @__PURE__ */ new w(), fo = /* @__PURE__ */ new Qe();
class Mt {
  constructor(e = new w(1, 0, 0), t = 0) {
    this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Ki.subVectors(n, t).cross(uo.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t === void 0 && (console.warn("THREE.Plane: .projectPoint() target is now required"), t = new w()), t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    t === void 0 && (console.warn("THREE.Plane: .intersectLine() target is now required"), t = new w());
    const n = e.delta(Ki), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(n).multiplyScalar(s).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e === void 0 && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), e = new w()), e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || fo.getNormalMatrix(e), i = this.coplanarPoint(Ki).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
Mt.prototype.isPlane = !0;
const gt = /* @__PURE__ */ new w(), Pt = /* @__PURE__ */ new w(), er = /* @__PURE__ */ new w(), Dt = /* @__PURE__ */ new w(), fn = /* @__PURE__ */ new w(), pn = /* @__PURE__ */ new w(), ds = /* @__PURE__ */ new w(), tr = /* @__PURE__ */ new w(), nr = /* @__PURE__ */ new w(), ir = /* @__PURE__ */ new w();
class Ye {
  constructor(e = new w(), t = new w(), n = new w()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i === void 0 && (console.warn("THREE.Triangle: .getNormal() target is now required"), i = new w()), i.subVectors(n, t), gt.subVectors(e, t), i.cross(gt);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, i, s) {
    gt.subVectors(i, t), Pt.subVectors(n, t), er.subVectors(e, t);
    const a = gt.dot(gt), o = gt.dot(Pt), l = gt.dot(er), c = Pt.dot(Pt), h = Pt.dot(er), d = a * c - o * o;
    if (s === void 0 && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), s = new w()), d === 0)
      return s.set(-2, -1, -1);
    const u = 1 / d, f = (c * l - o * h) * u, m = (a * h - o * l) * u;
    return s.set(1 - f - m, m, f);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Dt), Dt.x >= 0 && Dt.y >= 0 && Dt.x + Dt.y <= 1;
  }
  static getUV(e, t, n, i, s, a, o, l) {
    return this.getBarycoord(e, t, n, i, Dt), l.set(0, 0), l.addScaledVector(s, Dt.x), l.addScaledVector(a, Dt.y), l.addScaledVector(o, Dt.z), l;
  }
  static isFrontFacing(e, t, n, i) {
    return gt.subVectors(n, t), Pt.subVectors(e, t), gt.cross(Pt).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return gt.subVectors(this.c, this.b), Pt.subVectors(this.a, this.b), gt.cross(Pt).length() * 0.5;
  }
  getMidpoint(e) {
    return e === void 0 && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), e = new w()), e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Ye.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e === void 0 && (console.warn("THREE.Triangle: .getPlane() target is now required"), e = new Mt()), e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Ye.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return Ye.getUV(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return Ye.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Ye.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    t === void 0 && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), t = new w());
    const n = this.a, i = this.b, s = this.c;
    let a, o;
    fn.subVectors(i, n), pn.subVectors(s, n), tr.subVectors(e, n);
    const l = fn.dot(tr), c = pn.dot(tr);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    nr.subVectors(e, i);
    const h = fn.dot(nr), d = pn.dot(nr);
    if (h >= 0 && d <= h)
      return t.copy(i);
    const u = l * d - h * c;
    if (u <= 0 && l >= 0 && h <= 0)
      return a = l / (l - h), t.copy(n).addScaledVector(fn, a);
    ir.subVectors(e, s);
    const f = fn.dot(ir), m = pn.dot(ir);
    if (m >= 0 && f <= m)
      return t.copy(s);
    const x = f * c - l * m;
    if (x <= 0 && c >= 0 && m <= 0)
      return o = c / (c - m), t.copy(n).addScaledVector(pn, o);
    const _ = h * m - f * d;
    if (_ <= 0 && d - h >= 0 && f - m >= 0)
      return ds.subVectors(s, i), o = (d - h) / (d - h + (f - m)), t.copy(i).addScaledVector(ds, o);
    const g = 1 / (_ + x + u);
    return a = x * g, o = u * g, t.copy(n).addScaledVector(fn, a).addScaledVector(pn, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let po = 0;
function Je() {
  Object.defineProperty(this, "id", { value: po++ }), this.uuid = bt(), this.name = "", this.type = "Material", this.fog = !0, this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0;
}
Je.prototype = Object.assign(Object.create(sn.prototype), {
  constructor: Je,
  isMaterial: !0,
  onBuild: function() {
  },
  onBeforeCompile: function() {
  },
  customProgramCacheKey: function() {
    return this.onBeforeCompile.toString();
  },
  setValues: function(r) {
    if (r !== void 0)
      for (const e in r) {
        const t = r[e];
        if (t === void 0) {
          console.warn("THREE.Material: '" + e + "' parameter is undefined.");
          continue;
        }
        if (e === "shading") {
          console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = t === 1;
          continue;
        }
        const n = this[e];
        if (n === void 0) {
          console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.");
          continue;
        }
        n && n.isColor ? n.set(t) : n && n.isVector3 && t && t.isVector3 ? n.copy(t) : this[e] = t;
      }
  },
  toJSON: function(r) {
    const e = r === void 0 || typeof r == "string";
    e && (r = {
      textures: {},
      images: {}
    });
    const t = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), this.color && this.color.isColor && (t.color = this.color.getHex()), this.roughness !== void 0 && (t.roughness = this.roughness), this.metalness !== void 0 && (t.metalness = this.metalness), this.sheen && this.sheen.isColor && (t.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (t.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (t.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (t.specular = this.specular.getHex()), this.shininess !== void 0 && (t.shininess = this.shininess), this.clearcoat !== void 0 && (t.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (t.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (t.clearcoatMap = this.clearcoatMap.toJSON(r).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (t.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(r).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (t.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(r).uuid, t.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (t.map = this.map.toJSON(r).uuid), this.matcap && this.matcap.isTexture && (t.matcap = this.matcap.toJSON(r).uuid), this.alphaMap && this.alphaMap.isTexture && (t.alphaMap = this.alphaMap.toJSON(r).uuid), this.lightMap && this.lightMap.isTexture && (t.lightMap = this.lightMap.toJSON(r).uuid, t.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (t.aoMap = this.aoMap.toJSON(r).uuid, t.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (t.bumpMap = this.bumpMap.toJSON(r).uuid, t.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (t.normalMap = this.normalMap.toJSON(r).uuid, t.normalMapType = this.normalMapType, t.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (t.displacementMap = this.displacementMap.toJSON(r).uuid, t.displacementScale = this.displacementScale, t.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (t.roughnessMap = this.roughnessMap.toJSON(r).uuid), this.metalnessMap && this.metalnessMap.isTexture && (t.metalnessMap = this.metalnessMap.toJSON(r).uuid), this.emissiveMap && this.emissiveMap.isTexture && (t.emissiveMap = this.emissiveMap.toJSON(r).uuid), this.specularMap && this.specularMap.isTexture && (t.specularMap = this.specularMap.toJSON(r).uuid), this.envMap && this.envMap.isTexture && (t.envMap = this.envMap.toJSON(r).uuid, this.combine !== void 0 && (t.combine = this.combine)), this.envMapIntensity !== void 0 && (t.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (t.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (t.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (t.gradientMap = this.gradientMap.toJSON(r).uuid), this.size !== void 0 && (t.size = this.size), this.shadowSide !== null && (t.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (t.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (t.blending = this.blending), this.side !== 0 && (t.side = this.side), this.vertexColors && (t.vertexColors = !0), this.opacity < 1 && (t.opacity = this.opacity), this.transparent === !0 && (t.transparent = this.transparent), t.depthFunc = this.depthFunc, t.depthTest = this.depthTest, t.depthWrite = this.depthWrite, t.colorWrite = this.colorWrite, t.stencilWrite = this.stencilWrite, t.stencilWriteMask = this.stencilWriteMask, t.stencilFunc = this.stencilFunc, t.stencilRef = this.stencilRef, t.stencilFuncMask = this.stencilFuncMask, t.stencilFail = this.stencilFail, t.stencilZFail = this.stencilZFail, t.stencilZPass = this.stencilZPass, this.rotation && this.rotation !== 0 && (t.rotation = this.rotation), this.polygonOffset === !0 && (t.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (t.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (t.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && this.linewidth !== 1 && (t.linewidth = this.linewidth), this.dashSize !== void 0 && (t.dashSize = this.dashSize), this.gapSize !== void 0 && (t.gapSize = this.gapSize), this.scale !== void 0 && (t.scale = this.scale), this.dithering === !0 && (t.dithering = !0), this.alphaTest > 0 && (t.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (t.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (t.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (t.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (t.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (t.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (t.wireframeLinejoin = this.wireframeLinejoin), this.morphTargets === !0 && (t.morphTargets = !0), this.morphNormals === !0 && (t.morphNormals = !0), this.skinning === !0 && (t.skinning = !0), this.flatShading === !0 && (t.flatShading = this.flatShading), this.visible === !1 && (t.visible = !1), this.toneMapped === !1 && (t.toneMapped = !1), JSON.stringify(this.userData) !== "{}" && (t.userData = this.userData);
    function n(i) {
      const s = [];
      for (const a in i) {
        const o = i[a];
        delete o.metadata, s.push(o);
      }
      return s;
    }
    if (e) {
      const i = n(r.textures), s = n(r.images);
      i.length > 0 && (t.textures = i), s.length > 0 && (t.images = s);
    }
    return t;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(r) {
    this.name = r.name, this.fog = r.fog, this.blending = r.blending, this.side = r.side, this.vertexColors = r.vertexColors, this.opacity = r.opacity, this.transparent = r.transparent, this.blendSrc = r.blendSrc, this.blendDst = r.blendDst, this.blendEquation = r.blendEquation, this.blendSrcAlpha = r.blendSrcAlpha, this.blendDstAlpha = r.blendDstAlpha, this.blendEquationAlpha = r.blendEquationAlpha, this.depthFunc = r.depthFunc, this.depthTest = r.depthTest, this.depthWrite = r.depthWrite, this.stencilWriteMask = r.stencilWriteMask, this.stencilFunc = r.stencilFunc, this.stencilRef = r.stencilRef, this.stencilFuncMask = r.stencilFuncMask, this.stencilFail = r.stencilFail, this.stencilZFail = r.stencilZFail, this.stencilZPass = r.stencilZPass, this.stencilWrite = r.stencilWrite;
    const e = r.clippingPlanes;
    let t = null;
    if (e !== null) {
      const n = e.length;
      t = new Array(n);
      for (let i = 0; i !== n; ++i)
        t[i] = e[i].clone();
    }
    return this.clippingPlanes = t, this.clipIntersection = r.clipIntersection, this.clipShadows = r.clipShadows, this.shadowSide = r.shadowSide, this.colorWrite = r.colorWrite, this.precision = r.precision, this.polygonOffset = r.polygonOffset, this.polygonOffsetFactor = r.polygonOffsetFactor, this.polygonOffsetUnits = r.polygonOffsetUnits, this.dithering = r.dithering, this.alphaTest = r.alphaTest, this.alphaToCoverage = r.alphaToCoverage, this.premultipliedAlpha = r.premultipliedAlpha, this.visible = r.visible, this.toneMapped = r.toneMapped, this.userData = JSON.parse(JSON.stringify(r.userData)), this;
  },
  dispose: function() {
    this.dispatchEvent({ type: "dispose" });
  }
});
Object.defineProperty(Je.prototype, "needsUpdate", {
  set: function(r) {
    r === !0 && this.version++;
  }
});
const ra = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, xt = { h: 0, s: 0, l: 0 }, si = { h: 0, s: 0, l: 0 };
function rr(r, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
}
function sr(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function ar(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
class le {
  constructor(e, t, n) {
    return t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
  }
  set(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, this;
  }
  setRGB(e, t, n) {
    return this.r = e, this.g = t, this.b = n, this;
  }
  setHSL(e, t, n) {
    if (e = Qa(e, 1), t = ct(t, 0, 1), n = ct(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const i = n <= 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - i;
      this.r = rr(s, i, e + 1 / 3), this.g = rr(s, i, e), this.b = rr(s, i, e - 1 / 3);
    }
    return this;
  }
  setStyle(e) {
    function t(i) {
      i !== void 0 && parseFloat(i) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let n;
    if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
      let i;
      const s = n[1], a = n[2];
      switch (s) {
        case "rgb":
        case "rgba":
          if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return this.r = Math.min(255, parseInt(i[1], 10)) / 255, this.g = Math.min(255, parseInt(i[2], 10)) / 255, this.b = Math.min(255, parseInt(i[3], 10)) / 255, t(i[4]), this;
          if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return this.r = Math.min(100, parseInt(i[1], 10)) / 100, this.g = Math.min(100, parseInt(i[2], 10)) / 100, this.b = Math.min(100, parseInt(i[3], 10)) / 100, t(i[4]), this;
          break;
        case "hsl":
        case "hsla":
          if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
            const o = parseFloat(i[1]) / 360, l = parseInt(i[2], 10) / 100, c = parseInt(i[3], 10) / 100;
            return t(i[4]), this.setHSL(o, l, c);
          }
          break;
      }
    } else if (n = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const i = n[1], s = i.length;
      if (s === 3)
        return this.r = parseInt(i.charAt(0) + i.charAt(0), 16) / 255, this.g = parseInt(i.charAt(1) + i.charAt(1), 16) / 255, this.b = parseInt(i.charAt(2) + i.charAt(2), 16) / 255, this;
      if (s === 6)
        return this.r = parseInt(i.charAt(0) + i.charAt(1), 16) / 255, this.g = parseInt(i.charAt(2) + i.charAt(3), 16) / 255, this.b = parseInt(i.charAt(4) + i.charAt(5), 16) / 255, this;
    }
    return e && e.length > 0 ? this.setColorName(e) : this;
  }
  setColorName(e) {
    const t = ra[e.toLowerCase()];
    return t !== void 0 ? this.setHex(t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copyGammaToLinear(e, t = 2) {
    return this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this;
  }
  copyLinearToGamma(e, t = 2) {
    const n = t > 0 ? 1 / t : 1;
    return this.r = Math.pow(e.r, n), this.g = Math.pow(e.g, n), this.b = Math.pow(e.b, n), this;
  }
  convertGammaToLinear(e) {
    return this.copyGammaToLinear(this, e), this;
  }
  convertLinearToGamma(e) {
    return this.copyLinearToGamma(this, e), this;
  }
  copySRGBToLinear(e) {
    return this.r = sr(e.r), this.g = sr(e.g), this.b = sr(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = ar(e.r), this.g = ar(e.g), this.b = ar(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex() {
    return this.r * 255 << 16 ^ this.g * 255 << 8 ^ this.b * 255 << 0;
  }
  getHexString() {
    return ("000000" + this.getHex().toString(16)).slice(-6);
  }
  getHSL(e) {
    e === void 0 && (console.warn("THREE.Color: .getHSL() target is now required"), e = { h: 0, s: 0, l: 0 });
    const t = this.r, n = this.g, i = this.b, s = Math.max(t, n, i), a = Math.min(t, n, i);
    let o, l;
    const c = (a + s) / 2;
    if (a === s)
      o = 0, l = 0;
    else {
      const h = s - a;
      switch (l = c <= 0.5 ? h / (s + a) : h / (2 - s - a), s) {
        case t:
          o = (n - i) / h + (n < i ? 6 : 0);
          break;
        case n:
          o = (i - t) / h + 2;
          break;
        case i:
          o = (t - n) / h + 4;
          break;
      }
      o /= 6;
    }
    return e.h = o, e.s = l, e.l = c, e;
  }
  getStyle() {
    return "rgb(" + (this.r * 255 | 0) + "," + (this.g * 255 | 0) + "," + (this.b * 255 | 0) + ")";
  }
  offsetHSL(e, t, n) {
    return this.getHSL(xt), xt.h += e, xt.s += t, xt.l += n, this.setHSL(xt.h, xt.s, xt.l), this;
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(xt), e.getHSL(si);
    const n = ki(xt.h, si.h, t), i = ki(xt.s, si.s, t), s = ki(xt.l, si.l, t);
    return this.setHSL(n, i, s), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), e.normalized === !0 && (this.r /= 255, this.g /= 255, this.b /= 255), this;
  }
  toJSON() {
    return this.getHex();
  }
}
le.NAMES = ra;
le.prototype.isColor = !0;
le.prototype.r = 1;
le.prototype.g = 1;
le.prototype.b = 1;
class Ir extends Je {
  constructor(e) {
    super(), this.type = "MeshBasicMaterial", this.color = new le(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this;
  }
}
Ir.prototype.isMeshBasicMaterial = !0;
const Ue = new w(), ai = new j();
class Ze {
  constructor(e, t, n) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n === !0, this.usage = 35044, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.onUploadCallback = function() {
    };
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  copyColorsArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, s = e.length; i < s; i++) {
      let a = e[i];
      a === void 0 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), a = new le()), t[n++] = a.r, t[n++] = a.g, t[n++] = a.b;
    }
    return this;
  }
  copyVector2sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, s = e.length; i < s; i++) {
      let a = e[i];
      a === void 0 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), a = new j()), t[n++] = a.x, t[n++] = a.y;
    }
    return this;
  }
  copyVector3sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, s = e.length; i < s; i++) {
      let a = e[i];
      a === void 0 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), a = new w()), t[n++] = a.x, t[n++] = a.y, t[n++] = a.z;
    }
    return this;
  }
  copyVector4sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, s = e.length; i < s; i++) {
      let a = e[i];
      a === void 0 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), a = new Ie()), t[n++] = a.x, t[n++] = a.y, t[n++] = a.z, t[n++] = a.w;
    }
    return this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        ai.fromBufferAttribute(this, t), ai.applyMatrix3(e), this.setXY(t, ai.x, ai.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Ue.fromBufferAttribute(this, t), Ue.applyMatrix3(e), this.setXYZ(t, Ue.x, Ue.y, Ue.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ue.x = this.getX(t), Ue.y = this.getY(t), Ue.z = this.getZ(t), Ue.applyMatrix4(e), this.setXYZ(t, Ue.x, Ue.y, Ue.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ue.x = this.getX(t), Ue.y = this.getY(t), Ue.z = this.getZ(t), Ue.applyNormalMatrix(e), this.setXYZ(t, Ue.x, Ue.y, Ue.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ue.x = this.getX(t), Ue.y = this.getY(t), Ue.z = this.getZ(t), Ue.transformDirection(e), this.setXYZ(t, Ue.x, Ue.y, Ue.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    return this.array[e * this.itemSize];
  }
  setX(e, t) {
    return this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    return this.array[e * this.itemSize + 1];
  }
  setY(e, t) {
    return this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    return this.array[e * this.itemSize + 2];
  }
  setZ(e, t) {
    return this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    return this.array[e * this.itemSize + 3];
  }
  setW(e, t) {
    return this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.prototype.slice.call(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
}
Ze.prototype.isBufferAttribute = !0;
class sa extends Ze {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class aa extends Ze {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class mo extends Ze {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
mo.prototype.isFloat16BufferAttribute = !0;
class ke extends Ze {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
function oa(r) {
  if (r.length === 0) return -1 / 0;
  let e = r[0];
  for (let t = 1, n = r.length; t < n; ++t)
    r[t] > e && (e = r[t]);
  return e;
}
let go = 0;
const yt = new ue(), or = new Re(), mn = new w(), lt = new ft(), zn = new ft(), je = new w();
class ze extends sn {
  constructor() {
    super(), Object.defineProperty(this, "id", { value: go++ }), this.uuid = bt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (oa(e) > 65535 ? aa : sa)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Qe().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  rotateX(e) {
    return yt.makeRotationX(e), this.applyMatrix4(yt), this;
  }
  rotateY(e) {
    return yt.makeRotationY(e), this.applyMatrix4(yt), this;
  }
  rotateZ(e) {
    return yt.makeRotationZ(e), this.applyMatrix4(yt), this;
  }
  translate(e, t, n) {
    return yt.makeTranslation(e, t, n), this.applyMatrix4(yt), this;
  }
  scale(e, t, n) {
    return yt.makeScale(e, t, n), this.applyMatrix4(yt), this;
  }
  lookAt(e) {
    return or.lookAt(e), or.updateMatrix(), this.applyMatrix4(or.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(mn).negate(), this.translate(mn.x, mn.y, mn.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new ke(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ft());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new w(-1 / 0, -1 / 0, -1 / 0),
        new w(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          lt.setFromBufferAttribute(s), this.morphTargetsRelative ? (je.addVectors(this.boundingBox.min, lt.min), this.boundingBox.expandByPoint(je), je.addVectors(this.boundingBox.max, lt.max), this.boundingBox.expandByPoint(je)) : (this.boundingBox.expandByPoint(lt.min), this.boundingBox.expandByPoint(lt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ln());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new w(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (lt.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          zn.setFromBufferAttribute(o), this.morphTargetsRelative ? (je.addVectors(lt.min, zn.min), lt.expandByPoint(je), je.addVectors(lt.max, zn.max), lt.expandByPoint(je)) : (lt.expandByPoint(zn.min), lt.expandByPoint(zn.max));
        }
      lt.getCenter(n);
      let i = 0;
      for (let s = 0, a = e.count; s < a; s++)
        je.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(je));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], l = this.morphTargetsRelative;
          for (let c = 0, h = o.count; c < h; c++)
            je.fromBufferAttribute(o, c), l && (mn.fromBufferAttribute(e, c), je.add(mn)), i = Math.max(i, n.distanceToSquared(je));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeFaceNormals() {
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, i = t.position.array, s = t.normal.array, a = t.uv.array, o = i.length / 3;
    t.tangent === void 0 && this.setAttribute("tangent", new Ze(new Float32Array(4 * o), 4));
    const l = t.tangent.array, c = [], h = [];
    for (let F = 0; F < o; F++)
      c[F] = new w(), h[F] = new w();
    const d = new w(), u = new w(), f = new w(), m = new j(), x = new j(), _ = new j(), g = new w(), p = new w();
    function E(F, H, U) {
      d.fromArray(i, F * 3), u.fromArray(i, H * 3), f.fromArray(i, U * 3), m.fromArray(a, F * 2), x.fromArray(a, H * 2), _.fromArray(a, U * 2), u.sub(d), f.sub(d), x.sub(m), _.sub(m);
      const A = 1 / (x.x * _.y - _.x * x.y);
      isFinite(A) && (g.copy(u).multiplyScalar(_.y).addScaledVector(f, -x.y).multiplyScalar(A), p.copy(f).multiplyScalar(x.x).addScaledVector(u, -_.x).multiplyScalar(A), c[F].add(g), c[H].add(g), c[U].add(g), h[F].add(p), h[H].add(p), h[U].add(p));
    }
    let T = this.groups;
    T.length === 0 && (T = [{
      start: 0,
      count: n.length
    }]);
    for (let F = 0, H = T.length; F < H; ++F) {
      const U = T[F], A = U.start, C = U.count;
      for (let D = A, R = A + C; D < R; D += 3)
        E(
          n[D + 0],
          n[D + 1],
          n[D + 2]
        );
    }
    const S = new w(), v = new w(), P = new w(), N = new w();
    function z(F) {
      P.fromArray(s, F * 3), N.copy(P);
      const H = c[F];
      S.copy(H), S.sub(P.multiplyScalar(P.dot(H))).normalize(), v.crossVectors(N, H);
      const A = v.dot(h[F]) < 0 ? -1 : 1;
      l[F * 4] = S.x, l[F * 4 + 1] = S.y, l[F * 4 + 2] = S.z, l[F * 4 + 3] = A;
    }
    for (let F = 0, H = T.length; F < H; ++F) {
      const U = T[F], A = U.start, C = U.count;
      for (let D = A, R = A + C; D < R; D += 3)
        z(n[D + 0]), z(n[D + 1]), z(n[D + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Ze(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let u = 0, f = n.count; u < f; u++)
          n.setXYZ(u, 0, 0, 0);
      const i = new w(), s = new w(), a = new w(), o = new w(), l = new w(), c = new w(), h = new w(), d = new w();
      if (e)
        for (let u = 0, f = e.count; u < f; u += 3) {
          const m = e.getX(u + 0), x = e.getX(u + 1), _ = e.getX(u + 2);
          i.fromBufferAttribute(t, m), s.fromBufferAttribute(t, x), a.fromBufferAttribute(t, _), h.subVectors(a, s), d.subVectors(i, s), h.cross(d), o.fromBufferAttribute(n, m), l.fromBufferAttribute(n, x), c.fromBufferAttribute(n, _), o.add(h), l.add(h), c.add(h), n.setXYZ(m, o.x, o.y, o.z), n.setXYZ(x, l.x, l.y, l.z), n.setXYZ(_, c.x, c.y, c.z);
        }
      else
        for (let u = 0, f = t.count; u < f; u += 3)
          i.fromBufferAttribute(t, u + 0), s.fromBufferAttribute(t, u + 1), a.fromBufferAttribute(t, u + 2), h.subVectors(a, s), d.subVectors(i, s), h.cross(d), n.setXYZ(u + 0, h.x, h.y, h.z), n.setXYZ(u + 1, h.x, h.y, h.z), n.setXYZ(u + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  merge(e, t) {
    if (!(e && e.isBufferGeometry)) {
      console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
      return;
    }
    t === void 0 && (t = 0, console.warn(
      "THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
    ));
    const n = this.attributes;
    for (const i in n) {
      if (e.attributes[i] === void 0) continue;
      const a = n[i].array, o = e.attributes[i], l = o.array, c = o.itemSize * t, h = Math.min(l.length, a.length - c);
      for (let d = 0, u = c; d < h; d++, u++)
        a[u] = l[d];
    }
    return this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      je.fromBufferAttribute(e, t), je.normalize(), e.setXYZ(t, je.x, je.y, je.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, h = o.itemSize, d = o.normalized, u = new c.constructor(l.length * h);
      let f = 0, m = 0;
      for (let x = 0, _ = l.length; x < _; x++) {
        f = l[x] * h;
        for (let g = 0; g < h; g++)
          u[m++] = c[f++];
      }
      return new Ze(u, h, d);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new ze(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const l = i[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let h = 0, d = c.length; h < d; h++) {
        const u = c[h], f = e(u, n);
        l.push(f);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let d = 0, u = c.length; d < u; d++) {
        const f = c[d];
        h.push(f.toJSON(e.data));
      }
      h.length > 0 && (i[l] = h, s = !0);
    }
    s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  }
  clone() {
    return new ze().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const h = i[c];
      this.setAttribute(c, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const h = [], d = s[c];
      for (let u = 0, f = d.length; u < f; u++)
        h.push(d[u].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const d = a[c];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
ze.prototype.isBufferGeometry = !0;
const fs = /* @__PURE__ */ new ue(), gn = /* @__PURE__ */ new Rn(), lr = /* @__PURE__ */ new Ln(), Ot = /* @__PURE__ */ new w(), Gt = /* @__PURE__ */ new w(), Ht = /* @__PURE__ */ new w(), cr = /* @__PURE__ */ new w(), hr = /* @__PURE__ */ new w(), ur = /* @__PURE__ */ new w(), oi = /* @__PURE__ */ new w(), li = /* @__PURE__ */ new w(), ci = /* @__PURE__ */ new w(), hi = /* @__PURE__ */ new j(), ui = /* @__PURE__ */ new j(), di = /* @__PURE__ */ new j(), dr = /* @__PURE__ */ new w(), fi = /* @__PURE__ */ new w();
class ut extends Re {
  constructor(e = new ze(), t = new Ir()) {
    super(), this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e) {
    return super.copy(e), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const e = this.geometry;
    if (e.isBufferGeometry) {
      const t = e.morphAttributes, n = Object.keys(t);
      if (n.length > 0) {
        const i = t[n[0]];
        if (i !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let s = 0, a = i.length; s < a; s++) {
            const o = i[s].name || String(s);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
          }
        }
      }
    } else {
      const t = e.morphTargets;
      t !== void 0 && t.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), lr.copy(n.boundingSphere), lr.applyMatrix4(s), e.ray.intersectsSphere(lr) === !1) || (fs.copy(s).invert(), gn.copy(e.ray).applyMatrix4(fs), n.boundingBox !== null && gn.intersectsBox(n.boundingBox) === !1))
      return;
    let a;
    if (n.isBufferGeometry) {
      const o = n.index, l = n.attributes.position, c = n.morphAttributes.position, h = n.morphTargetsRelative, d = n.attributes.uv, u = n.attributes.uv2, f = n.groups, m = n.drawRange;
      if (o !== null)
        if (Array.isArray(i))
          for (let x = 0, _ = f.length; x < _; x++) {
            const g = f[x], p = i[g.materialIndex], E = Math.max(g.start, m.start), T = Math.min(g.start + g.count, m.start + m.count);
            for (let S = E, v = T; S < v; S += 3) {
              const P = o.getX(S), N = o.getX(S + 1), z = o.getX(S + 2);
              a = pi(this, p, e, gn, l, c, h, d, u, P, N, z), a && (a.faceIndex = Math.floor(S / 3), a.face.materialIndex = g.materialIndex, t.push(a));
            }
          }
        else {
          const x = Math.max(0, m.start), _ = Math.min(o.count, m.start + m.count);
          for (let g = x, p = _; g < p; g += 3) {
            const E = o.getX(g), T = o.getX(g + 1), S = o.getX(g + 2);
            a = pi(this, i, e, gn, l, c, h, d, u, E, T, S), a && (a.faceIndex = Math.floor(g / 3), t.push(a));
          }
        }
      else if (l !== void 0)
        if (Array.isArray(i))
          for (let x = 0, _ = f.length; x < _; x++) {
            const g = f[x], p = i[g.materialIndex], E = Math.max(g.start, m.start), T = Math.min(g.start + g.count, m.start + m.count);
            for (let S = E, v = T; S < v; S += 3) {
              const P = S, N = S + 1, z = S + 2;
              a = pi(this, p, e, gn, l, c, h, d, u, P, N, z), a && (a.faceIndex = Math.floor(S / 3), a.face.materialIndex = g.materialIndex, t.push(a));
            }
          }
        else {
          const x = Math.max(0, m.start), _ = Math.min(l.count, m.start + m.count);
          for (let g = x, p = _; g < p; g += 3) {
            const E = g, T = g + 1, S = g + 2;
            a = pi(this, i, e, gn, l, c, h, d, u, E, T, S), a && (a.faceIndex = Math.floor(g / 3), t.push(a));
          }
        }
    } else n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
  }
}
ut.prototype.isMesh = !0;
function xo(r, e, t, n, i, s, a, o) {
  let l;
  if (e.side === 1 ? l = n.intersectTriangle(a, s, i, !0, o) : l = n.intersectTriangle(i, s, a, e.side !== 2, o), l === null) return null;
  fi.copy(o), fi.applyMatrix4(r.matrixWorld);
  const c = t.ray.origin.distanceTo(fi);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: fi.clone(),
    object: r
  };
}
function pi(r, e, t, n, i, s, a, o, l, c, h, d) {
  Ot.fromBufferAttribute(i, c), Gt.fromBufferAttribute(i, h), Ht.fromBufferAttribute(i, d);
  const u = r.morphTargetInfluences;
  if (e.morphTargets && s && u) {
    oi.set(0, 0, 0), li.set(0, 0, 0), ci.set(0, 0, 0);
    for (let m = 0, x = s.length; m < x; m++) {
      const _ = u[m], g = s[m];
      _ !== 0 && (cr.fromBufferAttribute(g, c), hr.fromBufferAttribute(g, h), ur.fromBufferAttribute(g, d), a ? (oi.addScaledVector(cr, _), li.addScaledVector(hr, _), ci.addScaledVector(ur, _)) : (oi.addScaledVector(cr.sub(Ot), _), li.addScaledVector(hr.sub(Gt), _), ci.addScaledVector(ur.sub(Ht), _)));
    }
    Ot.add(oi), Gt.add(li), Ht.add(ci);
  }
  r.isSkinnedMesh && e.skinning && (r.boneTransform(c, Ot), r.boneTransform(h, Gt), r.boneTransform(d, Ht));
  const f = xo(r, e, t, n, Ot, Gt, Ht, dr);
  if (f) {
    o && (hi.fromBufferAttribute(o, c), ui.fromBufferAttribute(o, h), di.fromBufferAttribute(o, d), f.uv = Ye.getUV(dr, Ot, Gt, Ht, hi, ui, di, new j())), l && (hi.fromBufferAttribute(l, c), ui.fromBufferAttribute(l, h), di.fromBufferAttribute(l, d), f.uv2 = Ye.getUV(dr, Ot, Gt, Ht, hi, ui, di, new j()));
    const m = {
      a: c,
      b: h,
      c: d,
      normal: new w(),
      materialIndex: 0
    };
    Ye.getNormal(Ot, Gt, Ht, m.normal), f.face = m;
  }
  return f;
}
class Pi extends ze {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    i = Math.floor(i), s = Math.floor(s), a = Math.floor(a);
    const l = [], c = [], h = [], d = [];
    let u = 0, f = 0;
    m("z", "y", "x", -1, -1, n, t, e, a, s, 0), m("z", "y", "x", 1, -1, n, t, -e, a, s, 1), m("x", "z", "y", 1, 1, e, n, t, i, a, 2), m("x", "z", "y", 1, -1, e, n, -t, i, a, 3), m("x", "y", "z", 1, -1, e, t, n, i, s, 4), m("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(l), this.setAttribute("position", new ke(c, 3)), this.setAttribute("normal", new ke(h, 3)), this.setAttribute("uv", new ke(d, 2));
    function m(x, _, g, p, E, T, S, v, P, N, z) {
      const F = T / P, H = S / N, U = T / 2, A = S / 2, C = v / 2, D = P + 1, R = N + 1;
      let W = 0, J = 0;
      const X = new w();
      for (let se = 0; se < R; se++) {
        const ne = se * H - A;
        for (let ce = 0; ce < D; ce++) {
          const de = ce * F - U;
          X[x] = de * p, X[_] = ne * E, X[g] = C, c.push(X.x, X.y, X.z), X[x] = 0, X[_] = 0, X[g] = v > 0 ? 1 : -1, h.push(X.x, X.y, X.z), d.push(ce / P), d.push(1 - se / N), W += 1;
        }
      }
      for (let se = 0; se < N; se++)
        for (let ne = 0; ne < P; ne++) {
          const ce = u + ne + D * se, de = u + ne + D * (se + 1), G = u + (ne + 1) + D * (se + 1), Ne = u + (ne + 1) + D * se;
          l.push(ce, de, Ne), l.push(de, G, Ne), J += 6;
        }
      o.addGroup(f, J, z), f += J, u += W;
    }
  }
}
function En(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function et(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = En(r[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
const _o = { clone: En, merge: et };
var vo = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, yo = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class rn extends Je {
  constructor(e) {
    super(), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = vo, this.fragmentShader = yo, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
      derivatives: !1,
      // set to use derivatives
      fragDepth: !1,
      // set to use fragment depth values
      drawBuffers: !1,
      // set to use draw buffers
      shaderTextureLOD: !1
      // set to use shader texture LOD
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && (e.attributes !== void 0 && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e));
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = En(e.uniforms), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture ? t.uniforms[i] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[i] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[i] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
rn.prototype.isShaderMaterial = !0;
class Fr extends Re {
  constructor() {
    super(), this.type = "Camera", this.matrixWorldInverse = new ue(), this.projectionMatrix = new ue(), this.projectionMatrixInverse = new ue();
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
  }
  getWorldDirection(e) {
    e === void 0 && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), e = new w()), this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
Fr.prototype.isCamera = !0;
class at extends Fr {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Tr * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Vi * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Tr * 2 * Math.atan(
      Math.tan(Vi * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, i, s, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Vi * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      s += a.offsetX * i / l, t -= a.offsetY * n / c, i *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
at.prototype.isPerspectiveCamera = !0;
const xn = 90, _n = 1;
class Nr extends Re {
  constructor(e, t, n) {
    if (super(), this.type = "CubeCamera", n.isWebGLCubeRenderTarget !== !0) {
      console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
      return;
    }
    this.renderTarget = n;
    const i = new at(xn, _n, e, t);
    i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new w(1, 0, 0)), this.add(i);
    const s = new at(xn, _n, e, t);
    s.layers = this.layers, s.up.set(0, -1, 0), s.lookAt(new w(-1, 0, 0)), this.add(s);
    const a = new at(xn, _n, e, t);
    a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(new w(0, 1, 0)), this.add(a);
    const o = new at(xn, _n, e, t);
    o.layers = this.layers, o.up.set(0, 0, -1), o.lookAt(new w(0, -1, 0)), this.add(o);
    const l = new at(xn, _n, e, t);
    l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new w(0, 0, 1)), this.add(l);
    const c = new at(xn, _n, e, t);
    c.layers = this.layers, c.up.set(0, -1, 0), c.lookAt(new w(0, 0, -1)), this.add(c);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget, [i, s, a, o, l, c] = this.children, h = e.xr.enabled, d = e.getRenderTarget();
    e.xr.enabled = !1;
    const u = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, a), e.setRenderTarget(n, 3), e.render(t, o), e.setRenderTarget(n, 4), e.render(t, l), n.texture.generateMipmaps = u, e.setRenderTarget(n, 5), e.render(t, c), e.setRenderTarget(d), e.xr.enabled = h;
  }
}
class Di extends Ke {
  constructor(e, t, n, i, s, a, o, l, c, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : 301, o = o !== void 0 ? o : 1022, super(e, t, n, i, s, a, o, l, c, h), this._needsFlipEnvMap = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
Di.prototype.isCubeTexture = !0;
class la extends nn {
  constructor(e, t, n) {
    Number.isInteger(t) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), t = n), super(e, e, t), t = t || {}, this.texture = new Di(void 0, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : 1006, this.texture._needsFlipEnvMap = !1;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.format = 1023, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, i = new Pi(5, 5, 5), s = new rn({
      name: "CubemapFromEquirect",
      uniforms: En(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    s.uniforms.tEquirect.value = t;
    const a = new ut(i, s), o = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new Nr(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
la.prototype.isWebGLCubeRenderTarget = !0;
class ca extends Ke {
  constructor(e, t, n, i, s, a, o, l, c, h, d, u) {
    super(null, a, o, l, c, h, i, s, d, u), this.image = { data: e || null, width: t || 1, height: n || 1 }, this.magFilter = c !== void 0 ? c : 1003, this.minFilter = h !== void 0 ? h : 1003, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0;
  }
}
ca.prototype.isDataTexture = !0;
const vn = /* @__PURE__ */ new Ln(), mi = /* @__PURE__ */ new w();
class Ii {
  constructor(e = new Mt(), t = new Mt(), n = new Mt(), i = new Mt(), s = new Mt(), a = new Mt()) {
    this.planes = [e, t, n, i, s, a];
  }
  set(e, t, n, i, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(s), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes, n = e.elements, i = n[0], s = n[1], a = n[2], o = n[3], l = n[4], c = n[5], h = n[6], d = n[7], u = n[8], f = n[9], m = n[10], x = n[11], _ = n[12], g = n[13], p = n[14], E = n[15];
    return t[0].setComponents(o - i, d - l, x - u, E - _).normalize(), t[1].setComponents(o + i, d + l, x + u, E + _).normalize(), t[2].setComponents(o + s, d + c, x + f, E + g).normalize(), t[3].setComponents(o - s, d - c, x - f, E - g).normalize(), t[4].setComponents(o - a, d - h, x - m, E - p).normalize(), t[5].setComponents(o + a, d + h, x + m, E + p).normalize(), this;
  }
  intersectsObject(e) {
    const t = e.geometry;
    return t.boundingSphere === null && t.computeBoundingSphere(), vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(vn);
  }
  intersectsSprite(e) {
    return vn.center.set(0, 0, 0), vn.radius = 0.7071067811865476, vn.applyMatrix4(e.matrixWorld), this.intersectsSphere(vn);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (mi.x = i.normal.x > 0 ? e.max.x : e.min.x, mi.y = i.normal.y > 0 ? e.max.y : e.min.y, mi.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(mi) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function ha() {
  let r = null, e = !1, t = null, n = null;
  function i(s, a) {
    t(s, a), n = r.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = r.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      r.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      r = s;
    }
  };
}
function Mo(r, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(c, h) {
    const d = c.array, u = c.usage, f = r.createBuffer();
    r.bindBuffer(h, f), r.bufferData(h, d, u), c.onUploadCallback();
    let m = 5126;
    return d instanceof Float32Array ? m = 5126 : d instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : d instanceof Uint16Array ? c.isFloat16BufferAttribute ? t ? m = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : m = 5123 : d instanceof Int16Array ? m = 5122 : d instanceof Uint32Array ? m = 5125 : d instanceof Int32Array ? m = 5124 : d instanceof Int8Array ? m = 5120 : d instanceof Uint8Array && (m = 5121), {
      buffer: f,
      type: m,
      bytesPerElement: d.BYTES_PER_ELEMENT,
      version: c.version
    };
  }
  function s(c, h, d) {
    const u = h.array, f = h.updateRange;
    r.bindBuffer(d, c), f.count === -1 ? r.bufferSubData(d, 0, u) : (t ? r.bufferSubData(
      d,
      f.offset * u.BYTES_PER_ELEMENT,
      u,
      f.offset,
      f.count
    ) : r.bufferSubData(
      d,
      f.offset * u.BYTES_PER_ELEMENT,
      u.subarray(f.offset, f.offset + f.count)
    ), f.count = -1);
  }
  function a(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function o(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const h = n.get(c);
    h && (r.deleteBuffer(h.buffer), n.delete(c));
  }
  function l(c, h) {
    if (c.isGLBufferAttribute) {
      const u = n.get(c);
      (!u || u.version < c.version) && n.set(c, {
        buffer: c.buffer,
        type: c.type,
        bytesPerElement: c.elementSize,
        version: c.version
      });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const d = n.get(c);
    d === void 0 ? n.set(c, i(c, h)) : d.version < c.version && (s(d.buffer, c, h), d.version = c.version);
  }
  return {
    get: a,
    remove: o,
    update: l
  };
}
class wo extends ze {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(i), c = o + 1, h = l + 1, d = e / o, u = t / l, f = [], m = [], x = [], _ = [];
    for (let g = 0; g < h; g++) {
      const p = g * u - a;
      for (let E = 0; E < c; E++) {
        const T = E * d - s;
        m.push(T, -p, 0), x.push(0, 0, 1), _.push(E / o), _.push(1 - g / l);
      }
    }
    for (let g = 0; g < l; g++)
      for (let p = 0; p < o; p++) {
        const E = p + c * g, T = p + c * (g + 1), S = p + 1 + c * (g + 1), v = p + 1 + c * g;
        f.push(E, T, v), f.push(T, S, v);
      }
    this.setIndex(f), this.setAttribute("position", new ke(m, 3)), this.setAttribute("normal", new ke(x, 3)), this.setAttribute("uv", new ke(_, 2));
  }
}
var bo = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, So = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Eo = `#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`, To = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`, Ao = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Lo = "vec3 transformed = vec3( position );", Ro = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Co = `vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
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
#endif`, Po = `#ifdef USE_BUMPMAP
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
#endif`, Do = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, Io = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Fo = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, No = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Bo = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, zo = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Uo = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Oo = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Go = `#define PI 3.141592653589793
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
}`, Ho = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, Vo = `vec3 transformedNormal = objectNormal;
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
#endif`, ko = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Wo = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, qo = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Xo = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Yo = "gl_FragColor = linearToOutputTexel( gl_FragColor );", jo = `
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
}`, Zo = `#ifdef USE_ENVMAP
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
#endif`, Jo = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, $o = `#ifdef USE_ENVMAP
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
#endif`, Qo = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Ko = `#ifdef USE_ENVMAP
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
#endif`, el = `#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`, tl = `#ifdef USE_FOG
	varying float fogDepth;
#endif`, nl = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, il = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, rl = `#ifdef USE_GRADIENTMAP
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
}`, sl = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`, al = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, ol = `vec3 diffuse = vec3( 1.0 );
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
#endif`, ll = `uniform bool receiveShadow;
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
#endif`, cl = `#if defined( USE_ENVMAP )
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
#endif`, hl = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, ul = `varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`, dl = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, fl = `varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`, pl = `PhysicalMaterial material;
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
#endif`, ml = `struct PhysicalMaterial {
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
}`, gl = `
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
#endif`, xl = `#if defined( RE_IndirectDiffuse )
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
#endif`, _l = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, vl = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, yl = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Ml = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, wl = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, bl = `#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`, Sl = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, El = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Tl = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Al = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Ll = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Rl = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`, Cl = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`, Pl = `#ifdef USE_MORPHTARGETS
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
#endif`, Dl = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`, Il = `#ifdef OBJECTSPACE_NORMALMAP
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
#endif`, Fl = `#ifdef USE_NORMALMAP
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
#endif`, Nl = `#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, Bl = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, zl = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, Ul = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, Ol = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Gl = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Hl = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Vl = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, kl = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Wl = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, ql = `#ifdef USE_SHADOWMAP
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
#endif`, Xl = `#ifdef USE_SHADOWMAP
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
#endif`, Yl = `#ifdef USE_SHADOWMAP
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
#endif`, jl = `float getShadowMask() {
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
}`, Zl = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Jl = `#ifdef USE_SKINNING
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
#endif`, $l = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Ql = `#ifdef USE_SKINNING
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
#endif`, Kl = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, ec = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, tc = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, nc = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, ic = `#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`, rc = `#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`, sc = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, ac = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, oc = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, lc = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, cc = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, hc = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, uc = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`, dc = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, fc = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, pc = `#include <envmap_common_pars_fragment>
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
}`, mc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, gc = `#if DEPTH_PACKING == 3200
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
}`, xc = `#include <common>
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
}`, _c = `#define DISTANCE
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
}`, vc = `#define DISTANCE
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
}`, yc = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Mc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, wc = `uniform vec3 diffuse;
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
}`, bc = `uniform float scale;
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
}`, Sc = `uniform vec3 diffuse;
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
}`, Ec = `#include <common>
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
}`, Tc = `uniform vec3 diffuse;
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
}`, Ac = `#define LAMBERT
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
}`, Lc = `#define MATCAP
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
}`, Rc = `#define MATCAP
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
}`, Cc = `#define TOON
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
}`, Pc = `#define TOON
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
}`, Dc = `#define PHONG
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
}`, Ic = `#define PHONG
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
}`, Fc = `#define STANDARD
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
}`, Nc = `#define STANDARD
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
}`, Bc = `#define NORMAL
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
}`, zc = `#define NORMAL
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
}`, Uc = `uniform vec3 diffuse;
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
}`, Oc = `uniform float size;
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
}`, Gc = `uniform vec3 color;
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
}`, Hc = `#include <common>
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
}`, Vc = `uniform vec3 diffuse;
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
}`, kc = `uniform float rotation;
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
}`;
const we = {
  alphamap_fragment: bo,
  alphamap_pars_fragment: So,
  alphatest_fragment: Eo,
  aomap_fragment: To,
  aomap_pars_fragment: Ao,
  begin_vertex: Lo,
  beginnormal_vertex: Ro,
  bsdfs: Co,
  bumpmap_pars_fragment: Po,
  clipping_planes_fragment: Do,
  clipping_planes_pars_fragment: Io,
  clipping_planes_pars_vertex: Fo,
  clipping_planes_vertex: No,
  color_fragment: Bo,
  color_pars_fragment: zo,
  color_pars_vertex: Uo,
  color_vertex: Oo,
  common: Go,
  cube_uv_reflection_fragment: Ho,
  defaultnormal_vertex: Vo,
  displacementmap_pars_vertex: ko,
  displacementmap_vertex: Wo,
  emissivemap_fragment: qo,
  emissivemap_pars_fragment: Xo,
  encodings_fragment: Yo,
  encodings_pars_fragment: jo,
  envmap_fragment: Zo,
  envmap_common_pars_fragment: Jo,
  envmap_pars_fragment: $o,
  envmap_pars_vertex: Qo,
  envmap_physical_pars_fragment: cl,
  envmap_vertex: Ko,
  fog_vertex: el,
  fog_pars_vertex: tl,
  fog_fragment: nl,
  fog_pars_fragment: il,
  gradientmap_pars_fragment: rl,
  lightmap_fragment: sl,
  lightmap_pars_fragment: al,
  lights_lambert_vertex: ol,
  lights_pars_begin: ll,
  lights_toon_fragment: hl,
  lights_toon_pars_fragment: ul,
  lights_phong_fragment: dl,
  lights_phong_pars_fragment: fl,
  lights_physical_fragment: pl,
  lights_physical_pars_fragment: ml,
  lights_fragment_begin: gl,
  lights_fragment_maps: xl,
  lights_fragment_end: _l,
  logdepthbuf_fragment: vl,
  logdepthbuf_pars_fragment: yl,
  logdepthbuf_pars_vertex: Ml,
  logdepthbuf_vertex: wl,
  map_fragment: bl,
  map_pars_fragment: Sl,
  map_particle_fragment: El,
  map_particle_pars_fragment: Tl,
  metalnessmap_fragment: Al,
  metalnessmap_pars_fragment: Ll,
  morphnormal_vertex: Rl,
  morphtarget_pars_vertex: Cl,
  morphtarget_vertex: Pl,
  normal_fragment_begin: Dl,
  normal_fragment_maps: Il,
  normalmap_pars_fragment: Fl,
  clearcoat_normal_fragment_begin: Nl,
  clearcoat_normal_fragment_maps: Bl,
  clearcoat_pars_fragment: zl,
  packing: Ul,
  premultiplied_alpha_fragment: Ol,
  project_vertex: Gl,
  dithering_fragment: Hl,
  dithering_pars_fragment: Vl,
  roughnessmap_fragment: kl,
  roughnessmap_pars_fragment: Wl,
  shadowmap_pars_fragment: ql,
  shadowmap_pars_vertex: Xl,
  shadowmap_vertex: Yl,
  shadowmask_pars_fragment: jl,
  skinbase_vertex: Zl,
  skinning_pars_vertex: Jl,
  skinning_vertex: $l,
  skinnormal_vertex: Ql,
  specularmap_fragment: Kl,
  specularmap_pars_fragment: ec,
  tonemapping_fragment: tc,
  tonemapping_pars_fragment: nc,
  transmissionmap_fragment: ic,
  transmissionmap_pars_fragment: rc,
  uv_pars_fragment: sc,
  uv_pars_vertex: ac,
  uv_vertex: oc,
  uv2_pars_fragment: lc,
  uv2_pars_vertex: cc,
  uv2_vertex: hc,
  worldpos_vertex: uc,
  background_frag: dc,
  background_vert: fc,
  cube_frag: pc,
  cube_vert: mc,
  depth_frag: gc,
  depth_vert: xc,
  distanceRGBA_frag: _c,
  distanceRGBA_vert: vc,
  equirect_frag: yc,
  equirect_vert: Mc,
  linedashed_frag: wc,
  linedashed_vert: bc,
  meshbasic_frag: Sc,
  meshbasic_vert: Ec,
  meshlambert_frag: Tc,
  meshlambert_vert: Ac,
  meshmatcap_frag: Lc,
  meshmatcap_vert: Rc,
  meshtoon_frag: Cc,
  meshtoon_vert: Pc,
  meshphong_frag: Dc,
  meshphong_vert: Ic,
  meshphysical_frag: Fc,
  meshphysical_vert: Nc,
  normal_frag: Bc,
  normal_vert: zc,
  points_frag: Uc,
  points_vert: Oc,
  shadow_frag: Gc,
  shadow_vert: Hc,
  sprite_frag: Vc,
  sprite_vert: kc
}, K = {
  common: {
    diffuse: { value: new le(15658734) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: new Qe() },
    uv2Transform: { value: new Qe() },
    alphaMap: { value: null }
  },
  specularmap: {
    specularMap: { value: null }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    refractionRatio: { value: 0.98 },
    maxMipLevel: { value: 0 }
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 }
  },
  emissivemap: {
    emissiveMap: { value: null }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalScale: { value: new j(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  roughnessmap: {
    roughnessMap: { value: null }
  },
  metalnessmap: {
    metalnessMap: { value: null }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: new le(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotShadowMap: { value: [] },
    spotShadowMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: new le(15658734) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    uvTransform: { value: new Qe() }
  },
  sprite: {
    diffuse: { value: new le(15658734) },
    opacity: { value: 1 },
    center: { value: new j(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    uvTransform: { value: new Qe() }
  }
}, wt = {
  basic: {
    uniforms: et([
      K.common,
      K.specularmap,
      K.envmap,
      K.aomap,
      K.lightmap,
      K.fog
    ]),
    vertexShader: we.meshbasic_vert,
    fragmentShader: we.meshbasic_frag
  },
  lambert: {
    uniforms: et([
      K.common,
      K.specularmap,
      K.envmap,
      K.aomap,
      K.lightmap,
      K.emissivemap,
      K.fog,
      K.lights,
      {
        emissive: { value: new le(0) }
      }
    ]),
    vertexShader: we.meshlambert_vert,
    fragmentShader: we.meshlambert_frag
  },
  phong: {
    uniforms: et([
      K.common,
      K.specularmap,
      K.envmap,
      K.aomap,
      K.lightmap,
      K.emissivemap,
      K.bumpmap,
      K.normalmap,
      K.displacementmap,
      K.fog,
      K.lights,
      {
        emissive: { value: new le(0) },
        specular: { value: new le(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: we.meshphong_vert,
    fragmentShader: we.meshphong_frag
  },
  standard: {
    uniforms: et([
      K.common,
      K.envmap,
      K.aomap,
      K.lightmap,
      K.emissivemap,
      K.bumpmap,
      K.normalmap,
      K.displacementmap,
      K.roughnessmap,
      K.metalnessmap,
      K.fog,
      K.lights,
      {
        emissive: { value: new le(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: we.meshphysical_vert,
    fragmentShader: we.meshphysical_frag
  },
  toon: {
    uniforms: et([
      K.common,
      K.aomap,
      K.lightmap,
      K.emissivemap,
      K.bumpmap,
      K.normalmap,
      K.displacementmap,
      K.gradientmap,
      K.fog,
      K.lights,
      {
        emissive: { value: new le(0) }
      }
    ]),
    vertexShader: we.meshtoon_vert,
    fragmentShader: we.meshtoon_frag
  },
  matcap: {
    uniforms: et([
      K.common,
      K.bumpmap,
      K.normalmap,
      K.displacementmap,
      K.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: we.meshmatcap_vert,
    fragmentShader: we.meshmatcap_frag
  },
  points: {
    uniforms: et([
      K.points,
      K.fog
    ]),
    vertexShader: we.points_vert,
    fragmentShader: we.points_frag
  },
  dashed: {
    uniforms: et([
      K.common,
      K.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: we.linedashed_vert,
    fragmentShader: we.linedashed_frag
  },
  depth: {
    uniforms: et([
      K.common,
      K.displacementmap
    ]),
    vertexShader: we.depth_vert,
    fragmentShader: we.depth_frag
  },
  normal: {
    uniforms: et([
      K.common,
      K.bumpmap,
      K.normalmap,
      K.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: we.normal_vert,
    fragmentShader: we.normal_frag
  },
  sprite: {
    uniforms: et([
      K.sprite,
      K.fog
    ]),
    vertexShader: we.sprite_vert,
    fragmentShader: we.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: new Qe() },
      t2D: { value: null }
    },
    vertexShader: we.background_vert,
    fragmentShader: we.background_frag
  },
  /* -------------------------------------------------------------------------
  //	Cube map shader
   ------------------------------------------------------------------------- */
  cube: {
    uniforms: et([
      K.envmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: we.cube_vert,
    fragmentShader: we.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: we.equirect_vert,
    fragmentShader: we.equirect_frag
  },
  distanceRGBA: {
    uniforms: et([
      K.common,
      K.displacementmap,
      {
        referencePosition: { value: new w() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: we.distanceRGBA_vert,
    fragmentShader: we.distanceRGBA_frag
  },
  shadow: {
    uniforms: et([
      K.lights,
      K.fog,
      {
        color: { value: new le(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: we.shadow_vert,
    fragmentShader: we.shadow_frag
  }
};
wt.physical = {
  uniforms: et([
    wt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new j(1, 1) },
      clearcoatNormalMap: { value: null },
      sheen: { value: new le(0) },
      transmission: { value: 0 },
      transmissionMap: { value: null }
    }
  ]),
  vertexShader: we.meshphysical_vert,
  fragmentShader: we.meshphysical_frag
};
function Wc(r, e, t, n, i) {
  const s = new le(0);
  let a = 0, o, l, c = null, h = 0, d = null;
  function u(m, x, _, g) {
    let p = x.isScene === !0 ? x.background : null;
    p && p.isTexture && (p = e.get(p));
    const E = r.xr, T = E.getSession && E.getSession();
    T && T.environmentBlendMode === "additive" && (p = null), p === null ? f(s, a) : p && p.isColor && (f(p, 1), g = !0), (r.autoClear || g) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil), p && (p.isCubeTexture || p.mapping === 306) ? (l === void 0 && (l = new ut(
      new Pi(1, 1, 1),
      new rn({
        name: "BackgroundCubeMaterial",
        uniforms: En(wt.cube.uniforms),
        vertexShader: wt.cube.vertexShader,
        fragmentShader: wt.cube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(S, v, P) {
      this.matrixWorld.copyPosition(P.matrixWorld);
    }, Object.defineProperty(l.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), n.update(l)), l.material.uniforms.envMap.value = p, l.material.uniforms.flipEnvMap.value = p.isCubeTexture && p._needsFlipEnvMap ? -1 : 1, (c !== p || h !== p.version || d !== r.toneMapping) && (l.material.needsUpdate = !0, c = p, h = p.version, d = r.toneMapping), m.unshift(l, l.geometry, l.material, 0, 0, null)) : p && p.isTexture && (o === void 0 && (o = new ut(
      new wo(2, 2),
      new rn({
        name: "BackgroundMaterial",
        uniforms: En(wt.background.uniforms),
        vertexShader: wt.background.vertexShader,
        fragmentShader: wt.background.fragmentShader,
        side: 0,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), o.geometry.deleteAttribute("normal"), Object.defineProperty(o.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), n.update(o)), o.material.uniforms.t2D.value = p, p.matrixAutoUpdate === !0 && p.updateMatrix(), o.material.uniforms.uvTransform.value.copy(p.matrix), (c !== p || h !== p.version || d !== r.toneMapping) && (o.material.needsUpdate = !0, c = p, h = p.version, d = r.toneMapping), m.unshift(o, o.geometry, o.material, 0, 0, null));
  }
  function f(m, x) {
    t.buffers.color.setClear(m.r, m.g, m.b, x, i);
  }
  return {
    getClearColor: function() {
      return s;
    },
    setClearColor: function(m, x = 1) {
      s.set(m), a = x, f(s, a);
    },
    getClearAlpha: function() {
      return a;
    },
    setClearAlpha: function(m) {
      a = m, f(s, a);
    },
    render: u
  };
}
function qc(r, e, t, n) {
  const i = r.getParameter(34921), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), a = n.isWebGL2 || s !== null, o = {}, l = x(null);
  let c = l;
  function h(A, C, D, R, W) {
    let J = !1;
    if (a) {
      const X = m(R, D, C);
      c !== X && (c = X, u(c.object)), J = _(R, W), J && g(R, W);
    } else {
      const X = C.wireframe === !0;
      (c.geometry !== R.id || c.program !== D.id || c.wireframe !== X) && (c.geometry = R.id, c.program = D.id, c.wireframe = X, J = !0);
    }
    A.isInstancedMesh === !0 && (J = !0), W !== null && t.update(W, 34963), J && (P(A, C, D, R), W !== null && r.bindBuffer(34963, t.get(W).buffer));
  }
  function d() {
    return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
  }
  function u(A) {
    return n.isWebGL2 ? r.bindVertexArray(A) : s.bindVertexArrayOES(A);
  }
  function f(A) {
    return n.isWebGL2 ? r.deleteVertexArray(A) : s.deleteVertexArrayOES(A);
  }
  function m(A, C, D) {
    const R = D.wireframe === !0;
    let W = o[A.id];
    W === void 0 && (W = {}, o[A.id] = W);
    let J = W[C.id];
    J === void 0 && (J = {}, W[C.id] = J);
    let X = J[R];
    return X === void 0 && (X = x(d()), J[R] = X), X;
  }
  function x(A) {
    const C = [], D = [], R = [];
    for (let W = 0; W < i; W++)
      C[W] = 0, D[W] = 0, R[W] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: C,
      enabledAttributes: D,
      attributeDivisors: R,
      object: A,
      attributes: {},
      index: null
    };
  }
  function _(A, C) {
    const D = c.attributes, R = A.attributes;
    let W = 0;
    for (const J in R) {
      const X = D[J], se = R[J];
      if (X === void 0 || X.attribute !== se || X.data !== se.data) return !0;
      W++;
    }
    return c.attributesNum !== W || c.index !== C;
  }
  function g(A, C) {
    const D = {}, R = A.attributes;
    let W = 0;
    for (const J in R) {
      const X = R[J], se = {};
      se.attribute = X, X.data && (se.data = X.data), D[J] = se, W++;
    }
    c.attributes = D, c.attributesNum = W, c.index = C;
  }
  function p() {
    const A = c.newAttributes;
    for (let C = 0, D = A.length; C < D; C++)
      A[C] = 0;
  }
  function E(A) {
    T(A, 0);
  }
  function T(A, C) {
    const D = c.newAttributes, R = c.enabledAttributes, W = c.attributeDivisors;
    D[A] = 1, R[A] === 0 && (r.enableVertexAttribArray(A), R[A] = 1), W[A] !== C && ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](A, C), W[A] = C);
  }
  function S() {
    const A = c.newAttributes, C = c.enabledAttributes;
    for (let D = 0, R = C.length; D < R; D++)
      C[D] !== A[D] && (r.disableVertexAttribArray(D), C[D] = 0);
  }
  function v(A, C, D, R, W, J) {
    n.isWebGL2 === !0 && (D === 5124 || D === 5125) ? r.vertexAttribIPointer(A, C, D, W, J) : r.vertexAttribPointer(A, C, D, R, W, J);
  }
  function P(A, C, D, R) {
    if (n.isWebGL2 === !1 && (A.isInstancedMesh || R.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    p();
    const W = R.attributes, J = D.getAttributes(), X = C.defaultAttributeValues;
    for (const se in J) {
      const ne = J[se];
      if (ne >= 0) {
        const ce = W[se];
        if (ce !== void 0) {
          const de = ce.normalized, G = ce.itemSize, Ne = t.get(ce);
          if (Ne === void 0) continue;
          const Se = Ne.buffer, _e = Ne.type, fe = Ne.bytesPerElement;
          if (ce.isInterleavedBufferAttribute) {
            const Te = ce.data, Me = Te.stride, be = ce.offset;
            Te && Te.isInstancedInterleavedBuffer ? (T(ne, Te.meshPerAttribute), R._maxInstanceCount === void 0 && (R._maxInstanceCount = Te.meshPerAttribute * Te.count)) : E(ne), r.bindBuffer(34962, Se), v(ne, G, _e, de, Me * fe, be * fe);
          } else
            ce.isInstancedBufferAttribute ? (T(ne, ce.meshPerAttribute), R._maxInstanceCount === void 0 && (R._maxInstanceCount = ce.meshPerAttribute * ce.count)) : E(ne), r.bindBuffer(34962, Se), v(ne, G, _e, de, 0, 0);
        } else if (se === "instanceMatrix") {
          const de = t.get(A.instanceMatrix);
          if (de === void 0) continue;
          const G = de.buffer, Ne = de.type;
          T(ne + 0, 1), T(ne + 1, 1), T(ne + 2, 1), T(ne + 3, 1), r.bindBuffer(34962, G), r.vertexAttribPointer(ne + 0, 4, Ne, !1, 64, 0), r.vertexAttribPointer(ne + 1, 4, Ne, !1, 64, 16), r.vertexAttribPointer(ne + 2, 4, Ne, !1, 64, 32), r.vertexAttribPointer(ne + 3, 4, Ne, !1, 64, 48);
        } else if (se === "instanceColor") {
          const de = t.get(A.instanceColor);
          if (de === void 0) continue;
          const G = de.buffer, Ne = de.type;
          T(ne, 1), r.bindBuffer(34962, G), r.vertexAttribPointer(ne, 3, Ne, !1, 12, 0);
        } else if (X !== void 0) {
          const de = X[se];
          if (de !== void 0)
            switch (de.length) {
              case 2:
                r.vertexAttrib2fv(ne, de);
                break;
              case 3:
                r.vertexAttrib3fv(ne, de);
                break;
              case 4:
                r.vertexAttrib4fv(ne, de);
                break;
              default:
                r.vertexAttrib1fv(ne, de);
            }
        }
      }
    }
    S();
  }
  function N() {
    H();
    for (const A in o) {
      const C = o[A];
      for (const D in C) {
        const R = C[D];
        for (const W in R)
          f(R[W].object), delete R[W];
        delete C[D];
      }
      delete o[A];
    }
  }
  function z(A) {
    if (o[A.id] === void 0) return;
    const C = o[A.id];
    for (const D in C) {
      const R = C[D];
      for (const W in R)
        f(R[W].object), delete R[W];
      delete C[D];
    }
    delete o[A.id];
  }
  function F(A) {
    for (const C in o) {
      const D = o[C];
      if (D[A.id] === void 0) continue;
      const R = D[A.id];
      for (const W in R)
        f(R[W].object), delete R[W];
      delete D[A.id];
    }
  }
  function H() {
    U(), c !== l && (c = l, u(c.object));
  }
  function U() {
    l.geometry = null, l.program = null, l.wireframe = !1;
  }
  return {
    setup: h,
    reset: H,
    resetDefaultState: U,
    dispose: N,
    releaseStatesOfGeometry: z,
    releaseStatesOfProgram: F,
    initAttributes: p,
    enableAttribute: E,
    disableUnusedAttributes: S
  };
}
function Xc(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function a(c) {
    s = c;
  }
  function o(c, h) {
    r.drawArrays(s, c, h), t.update(h, s, 1);
  }
  function l(c, h, d) {
    if (d === 0) return;
    let u, f;
    if (i)
      u = r, f = "drawArraysInstanced";
    else if (u = e.get("ANGLE_instanced_arrays"), f = "drawArraysInstancedANGLE", u === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    u[f](s, c, h, d), t.update(h, s, d);
  }
  this.setMode = a, this.render = o, this.renderInstances = l;
}
function Yc(r, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const v = e.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(v) {
    if (v === "highp") {
      if (r.getShaderPrecisionFormat(35633, 36338).precision > 0 && r.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
      v = "mediump";
    }
    return v === "mediump" && r.getShaderPrecisionFormat(35633, 36337).precision > 0 && r.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  const a = typeof WebGL2RenderingContext < "u" && r instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && r instanceof WebGL2ComputeRenderingContext;
  let o = t.precision !== void 0 ? t.precision : "highp";
  const l = s(o);
  l !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", l, "instead."), o = l);
  const c = t.logarithmicDepthBuffer === !0, h = r.getParameter(34930), d = r.getParameter(35660), u = r.getParameter(3379), f = r.getParameter(34076), m = r.getParameter(34921), x = r.getParameter(36347), _ = r.getParameter(36348), g = r.getParameter(36349), p = d > 0, E = a || e.has("OES_texture_float"), T = p && E, S = a ? r.getParameter(36183) : 0;
  return {
    isWebGL2: a,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: o,
    logarithmicDepthBuffer: c,
    maxTextures: h,
    maxVertexTextures: d,
    maxTextureSize: u,
    maxCubemapSize: f,
    maxAttributes: m,
    maxVertexUniforms: x,
    maxVaryings: _,
    maxFragmentUniforms: g,
    vertexTextures: p,
    floatFragmentTextures: E,
    floatVertexTextures: T,
    maxSamples: S
  };
}
function jc(r) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const a = new Mt(), o = new Qe(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, u, f) {
    const m = d.length !== 0 || u || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = u, t = h(d, f, 0), n = d.length, m;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1, c();
  }, this.setState = function(d, u, f) {
    const m = d.clippingPlanes, x = d.clipIntersection, _ = d.clipShadows, g = r.get(d);
    if (!i || m === null || m.length === 0 || s && !_)
      s ? h(null) : c();
    else {
      const p = s ? 0 : n, E = p * 4;
      let T = g.clippingState || null;
      l.value = T, T = h(m, u, E, f);
      for (let S = 0; S !== E; ++S)
        T[S] = t[S];
      g.clippingState = T, this.numIntersection = x ? this.numPlanes : 0, this.numPlanes += p;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(d, u, f, m) {
    const x = d !== null ? d.length : 0;
    let _ = null;
    if (x !== 0) {
      if (_ = l.value, m !== !0 || _ === null) {
        const g = f + x * 4, p = u.matrixWorldInverse;
        o.getNormalMatrix(p), (_ === null || _.length < g) && (_ = new Float32Array(g));
        for (let E = 0, T = f; E !== x; ++E, T += 4)
          a.copy(d[E]).applyMatrix4(p, o), a.normal.toArray(_, T), _[T + 3] = a.constant;
      }
      l.value = _, l.needsUpdate = !0;
    }
    return e.numPlanes = x, e.numIntersection = 0, _;
  }
}
function Zc(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === 303 ? a.mapping = 301 : o === 304 && (a.mapping = 302), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === 303 || o === 304)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return t(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = r.getRenderTarget(), h = new la(l.height / 2);
            return h.fromEquirectangularTexture(r, a), e.set(a, h), r.setRenderTarget(c), a.addEventListener("dispose", i), t(h.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
function Jc(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float");
    },
    get: function(n) {
      const i = t(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function $c(r, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function a(d) {
    const u = d.target;
    u.index !== null && e.remove(u.index);
    for (const m in u.attributes)
      e.remove(u.attributes[m]);
    u.removeEventListener("dispose", a), delete i[u.id];
    const f = s.get(u);
    f && (e.remove(f), s.delete(u)), n.releaseStatesOfGeometry(u), u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount, t.memory.geometries--;
  }
  function o(d, u) {
    return i[u.id] === !0 || (u.addEventListener("dispose", a), i[u.id] = !0, t.memory.geometries++), u;
  }
  function l(d) {
    const u = d.attributes;
    for (const m in u)
      e.update(u[m], 34962);
    const f = d.morphAttributes;
    for (const m in f) {
      const x = f[m];
      for (let _ = 0, g = x.length; _ < g; _++)
        e.update(x[_], 34962);
    }
  }
  function c(d) {
    const u = [], f = d.index, m = d.attributes.position;
    let x = 0;
    if (f !== null) {
      const p = f.array;
      x = f.version;
      for (let E = 0, T = p.length; E < T; E += 3) {
        const S = p[E + 0], v = p[E + 1], P = p[E + 2];
        u.push(S, v, v, P, P, S);
      }
    } else {
      const p = m.array;
      x = m.version;
      for (let E = 0, T = p.length / 3 - 1; E < T; E += 3) {
        const S = E + 0, v = E + 1, P = E + 2;
        u.push(S, v, v, P, P, S);
      }
    }
    const _ = new (oa(u) > 65535 ? aa : sa)(u, 1);
    _.version = x;
    const g = s.get(d);
    g && e.remove(g), s.set(d, _);
  }
  function h(d) {
    const u = s.get(d);
    if (u) {
      const f = d.index;
      f !== null && u.version < f.version && c(d);
    } else
      c(d);
    return s.get(d);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: h
  };
}
function Qc(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function a(u) {
    s = u;
  }
  let o, l;
  function c(u) {
    o = u.type, l = u.bytesPerElement;
  }
  function h(u, f) {
    r.drawElements(s, f, o, u * l), t.update(f, s, 1);
  }
  function d(u, f, m) {
    if (m === 0) return;
    let x, _;
    if (i)
      x = r, _ = "drawElementsInstanced";
    else if (x = e.get("ANGLE_instanced_arrays"), _ = "drawElementsInstancedANGLE", x === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    x[_](s, f, o, u * l, m), t.update(f, s, m);
  }
  this.setMode = a, this.setIndex = c, this.render = h, this.renderInstances = d;
}
function Kc(r) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, a, o) {
    switch (t.calls++, a) {
      case 4:
        t.triangles += o * (s / 3);
        break;
      case 1:
        t.lines += o * (s / 2);
        break;
      case 3:
        t.lines += o * (s - 1);
        break;
      case 2:
        t.lines += o * s;
        break;
      case 0:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function eh(r, e) {
  return r[0] - e[0];
}
function th(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1]);
}
function nh(r) {
  const e = {}, t = new Float32Array(8), n = [];
  for (let s = 0; s < 8; s++)
    n[s] = [s, 0];
  function i(s, a, o, l) {
    const c = s.morphTargetInfluences, h = c === void 0 ? 0 : c.length;
    let d = e[a.id];
    if (d === void 0) {
      d = [];
      for (let _ = 0; _ < h; _++)
        d[_] = [_, 0];
      e[a.id] = d;
    }
    for (let _ = 0; _ < h; _++) {
      const g = d[_];
      g[0] = _, g[1] = c[_];
    }
    d.sort(th);
    for (let _ = 0; _ < 8; _++)
      _ < h && d[_][1] ? (n[_][0] = d[_][0], n[_][1] = d[_][1]) : (n[_][0] = Number.MAX_SAFE_INTEGER, n[_][1] = 0);
    n.sort(eh);
    const u = o.morphTargets && a.morphAttributes.position, f = o.morphNormals && a.morphAttributes.normal;
    let m = 0;
    for (let _ = 0; _ < 8; _++) {
      const g = n[_], p = g[0], E = g[1];
      p !== Number.MAX_SAFE_INTEGER && E ? (u && a.getAttribute("morphTarget" + _) !== u[p] && a.setAttribute("morphTarget" + _, u[p]), f && a.getAttribute("morphNormal" + _) !== f[p] && a.setAttribute("morphNormal" + _, f[p]), t[_] = E, m += E) : (u && a.hasAttribute("morphTarget" + _) === !0 && a.deleteAttribute("morphTarget" + _), f && a.hasAttribute("morphNormal" + _) === !0 && a.deleteAttribute("morphNormal" + _), t[_] = 0);
    }
    const x = a.morphTargetsRelative ? 1 : 1 - m;
    l.getUniforms().setValue(r, "morphTargetBaseInfluence", x), l.getUniforms().setValue(r, "morphTargetInfluences", t);
  }
  return {
    update: i
  };
}
function ih(r, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, h = l.geometry, d = e.get(l, h);
    return i.get(d) !== c && (e.update(d), i.set(d, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), t.update(l.instanceMatrix, 34962), l.instanceColor !== null && t.update(l.instanceColor, 34962)), d;
  }
  function a() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: s,
    dispose: a
  };
}
class ua extends Ke {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0;
  }
}
ua.prototype.isDataTexture2DArray = !0;
class da extends Ke {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0;
  }
}
da.prototype.isDataTexture3D = !0;
const fa = new Ke(), rh = new ua(), sh = new da(), pa = new Di(), ps = [], ms = [], gs = new Float32Array(16), xs = new Float32Array(9), _s = new Float32Array(4);
function Pn(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = e * t;
  let s = ps[i];
  if (s === void 0 && (s = new Float32Array(i), ps[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, r[a].toArray(s, o);
  }
  return s;
}
function rt(r, e) {
  if (r.length !== e.length) return !1;
  for (let t = 0, n = r.length; t < n; t++)
    if (r[t] !== e[t]) return !1;
  return !0;
}
function tt(r, e) {
  for (let t = 0, n = e.length; t < n; t++)
    r[t] = e[t];
}
function ma(r, e) {
  let t = ms[e];
  t === void 0 && (t = new Int32Array(e), ms[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = r.allocateTextureUnit();
  return t;
}
function ah(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e);
}
function oh(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (rt(t, e)) return;
    r.uniform2fv(this.addr, e), tt(t, e);
  }
}
function lh(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (rt(t, e)) return;
    r.uniform3fv(this.addr, e), tt(t, e);
  }
}
function ch(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (rt(t, e)) return;
    r.uniform4fv(this.addr, e), tt(t, e);
  }
}
function hh(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (rt(t, e)) return;
    r.uniformMatrix2fv(this.addr, !1, e), tt(t, e);
  } else {
    if (rt(t, n)) return;
    _s.set(n), r.uniformMatrix2fv(this.addr, !1, _s), tt(t, n);
  }
}
function uh(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (rt(t, e)) return;
    r.uniformMatrix3fv(this.addr, !1, e), tt(t, e);
  } else {
    if (rt(t, n)) return;
    xs.set(n), r.uniformMatrix3fv(this.addr, !1, xs), tt(t, n);
  }
}
function dh(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (rt(t, e)) return;
    r.uniformMatrix4fv(this.addr, !1, e), tt(t, e);
  } else {
    if (rt(t, n)) return;
    gs.set(n), r.uniformMatrix4fv(this.addr, !1, gs), tt(t, n);
  }
}
function fh(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
}
function ph(r, e) {
  const t = this.cache;
  rt(t, e) || (r.uniform2iv(this.addr, e), tt(t, e));
}
function mh(r, e) {
  const t = this.cache;
  rt(t, e) || (r.uniform3iv(this.addr, e), tt(t, e));
}
function gh(r, e) {
  const t = this.cache;
  rt(t, e) || (r.uniform4iv(this.addr, e), tt(t, e));
}
function xh(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
}
function _h(r, e) {
  const t = this.cache;
  rt(t, e) || (r.uniform2uiv(this.addr, e), tt(t, e));
}
function vh(r, e) {
  const t = this.cache;
  rt(t, e) || (r.uniform3uiv(this.addr, e), tt(t, e));
}
function yh(r, e) {
  const t = this.cache;
  rt(t, e) || (r.uniform4uiv(this.addr, e), tt(t, e));
}
function Mh(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.safeSetTexture2D(e || fa, i);
}
function wh(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || sh, i);
}
function bh(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.safeSetTextureCube(e || pa, i);
}
function Sh(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || rh, i);
}
function Eh(r) {
  switch (r) {
    case 5126:
      return ah;
    case 35664:
      return oh;
    case 35665:
      return lh;
    case 35666:
      return ch;
    case 35674:
      return hh;
    case 35675:
      return uh;
    case 35676:
      return dh;
    case 5124:
    case 35670:
      return fh;
    case 35667:
    case 35671:
      return ph;
    case 35668:
    case 35672:
      return mh;
    case 35669:
    case 35673:
      return gh;
    case 5125:
      return xh;
    case 36294:
      return _h;
    case 36295:
      return vh;
    case 36296:
      return yh;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Mh;
    case 35679:
    case 36299:
    case 36307:
      return wh;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return bh;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Sh;
  }
}
function Th(r, e) {
  r.uniform1fv(this.addr, e);
}
function Ah(r, e) {
  const t = Pn(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function Lh(r, e) {
  const t = Pn(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function Rh(r, e) {
  const t = Pn(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function Ch(r, e) {
  const t = Pn(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function Ph(r, e) {
  const t = Pn(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function Dh(r, e) {
  const t = Pn(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function Ih(r, e) {
  r.uniform1iv(this.addr, e);
}
function Fh(r, e) {
  r.uniform2iv(this.addr, e);
}
function Nh(r, e) {
  r.uniform3iv(this.addr, e);
}
function Bh(r, e) {
  r.uniform4iv(this.addr, e);
}
function zh(r, e) {
  r.uniform1uiv(this.addr, e);
}
function Uh(r, e) {
  r.uniform2uiv(this.addr, e);
}
function Oh(r, e) {
  r.uniform3uiv(this.addr, e);
}
function Gh(r, e) {
  r.uniform4uiv(this.addr, e);
}
function Hh(r, e, t) {
  const n = e.length, i = ma(t, n);
  r.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s)
    t.safeSetTexture2D(e[s] || fa, i[s]);
}
function Vh(r, e, t) {
  const n = e.length, i = ma(t, n);
  r.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s)
    t.safeSetTextureCube(e[s] || pa, i[s]);
}
function kh(r) {
  switch (r) {
    case 5126:
      return Th;
    case 35664:
      return Ah;
    case 35665:
      return Lh;
    case 35666:
      return Rh;
    case 35674:
      return Ch;
    case 35675:
      return Ph;
    case 35676:
      return Dh;
    case 5124:
    case 35670:
      return Ih;
    case 35667:
    case 35671:
      return Fh;
    case 35668:
    case 35672:
      return Nh;
    case 35669:
    case 35673:
      return Bh;
    case 5125:
      return zh;
    case 36294:
      return Uh;
    case 36295:
      return Oh;
    case 36296:
      return Gh;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Hh;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Vh;
  }
}
function Wh(r, e, t) {
  this.id = r, this.addr = t, this.cache = [], this.setValue = Eh(e.type);
}
function ga(r, e, t) {
  this.id = r, this.addr = t, this.cache = [], this.size = e.size, this.setValue = kh(e.type);
}
ga.prototype.updateCache = function(r) {
  const e = this.cache;
  r instanceof Float32Array && e.length !== r.length && (this.cache = new Float32Array(r.length)), tt(e, r);
};
function xa(r) {
  this.id = r, this.seq = [], this.map = {};
}
xa.prototype.setValue = function(r, e, t) {
  const n = this.seq;
  for (let i = 0, s = n.length; i !== s; ++i) {
    const a = n[i];
    a.setValue(r, e[a.id], t);
  }
};
const fr = /(\w+)(\])?(\[|\.)?/g;
function vs(r, e) {
  r.seq.push(e), r.map[e.id] = e;
}
function qh(r, e, t) {
  const n = r.name, i = n.length;
  for (fr.lastIndex = 0; ; ) {
    const s = fr.exec(n), a = fr.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === i) {
      vs(t, c === void 0 ? new Wh(o, r, e) : new ga(o, r, e));
      break;
    } else {
      let d = t.map[o];
      d === void 0 && (d = new xa(o), vs(t, d)), t = d;
    }
  }
}
function Wt(r, e) {
  this.seq = [], this.map = {};
  const t = r.getProgramParameter(e, 35718);
  for (let n = 0; n < t; ++n) {
    const i = r.getActiveUniform(e, n), s = r.getUniformLocation(e, i.name);
    qh(i, s, this);
  }
}
Wt.prototype.setValue = function(r, e, t, n) {
  const i = this.map[e];
  i !== void 0 && i.setValue(r, t, n);
};
Wt.prototype.setOptional = function(r, e, t) {
  const n = e[t];
  n !== void 0 && this.setValue(r, t, n);
};
Wt.upload = function(r, e, t, n) {
  for (let i = 0, s = e.length; i !== s; ++i) {
    const a = e[i], o = t[a.id];
    o.needsUpdate !== !1 && a.setValue(r, o.value, n);
  }
};
Wt.seqWithValue = function(r, e) {
  const t = [];
  for (let n = 0, i = r.length; n !== i; ++n) {
    const s = r[n];
    s.id in e && t.push(s);
  }
  return t;
};
function ys(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
let Xh = 0;
function Yh(r) {
  const e = r.split(`
`);
  for (let t = 0; t < e.length; t++)
    e[t] = t + 1 + ": " + e[t];
  return e.join(`
`);
}
function _a(r) {
  switch (r) {
    case 3e3:
      return ["Linear", "( value )"];
    case 3001:
      return ["sRGB", "( value )"];
    case 3002:
      return ["RGBE", "( value )"];
    case 3004:
      return ["RGBM", "( value, 7.0 )"];
    case 3005:
      return ["RGBM", "( value, 16.0 )"];
    case 3006:
      return ["RGBD", "( value, 256.0 )"];
    case 3007:
      return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
    case 3003:
      return ["LogLuv", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported encoding:", r), ["Linear", "( value )"];
  }
}
function Ms(r, e, t) {
  const n = r.getShaderParameter(e, 35713), i = r.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const s = r.getShaderSource(e);
  return "THREE.WebGLShader: gl.getShaderInfoLog() " + t + `
` + i + Yh(s);
}
function Un(r, e) {
  const t = _a(e);
  return "vec4 " + r + "( vec4 value ) { return " + t[0] + "ToLinear" + t[1] + "; }";
}
function jh(r, e) {
  const t = _a(e);
  return "vec4 " + r + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function Zh(r, e) {
  let t;
  switch (e) {
    case 1:
      t = "Linear";
      break;
    case 2:
      t = "Reinhard";
      break;
    case 3:
      t = "OptimizedCineon";
      break;
    case 4:
      t = "ACESFilmic";
      break;
    case 5:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function Jh(r) {
  return [
    r.extensionDerivatives || r.envMapCubeUV || r.bumpMap || r.tangentSpaceNormalMap || r.clearcoatNormalMap || r.flatShading || r.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (r.extensionShaderTextureLOD || r.envMap) && r.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(Wn).join(`
`);
}
function $h(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Qh(r, e) {
  const t = {}, n = r.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const a = r.getActiveAttrib(e, i).name;
    t[a] = r.getAttribLocation(e, a);
  }
  return t;
}
function Wn(r) {
  return r !== "";
}
function ws(r, e) {
  return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function bs(r, e) {
  return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Kh = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ar(r) {
  return r.replace(Kh, eu);
}
function eu(r, e) {
  const t = we[e];
  if (t === void 0)
    throw new Error("Can not resolve #include <" + e + ">");
  return Ar(t);
}
const tu = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, nu = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ss(r) {
  return r.replace(nu, va).replace(tu, iu);
}
function iu(r, e, t, n) {
  return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), va(r, e, t, n);
}
function va(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function Es(r) {
  let e = "precision " + r.precision + ` float;
precision ` + r.precision + " int;";
  return r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function ru(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === 1 ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === 2 ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === 3 && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function su(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case 301:
      case 302:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case 306:
      case 307:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function au(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case 302:
      case 307:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function ou(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case 0:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case 1:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case 2:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function lu(r, e, t, n) {
  const i = r.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = ru(t), c = su(t), h = au(t), d = ou(t), u = r.gammaFactor > 0 ? r.gammaFactor : 1, f = t.isWebGL2 ? "" : Jh(t), m = $h(s), x = i.createProgram();
  let _, g, p = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (_ = [
    m
  ].filter(Wn).join(`
`), _.length > 0 && (_ += `
`), g = [
    f,
    m
  ].filter(Wn).join(`
`), g.length > 0 && (g += `
`)) : (_ = [
    Es(t),
    "#define SHADER_NAME " + t.shaderName,
    m,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
    "#define GAMMA_FACTOR " + u,
    "#define MAX_BONES " + t.maxBones,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.useVertexTexture ? "#define BONE_TEXTURE" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_MORPHTARGETS",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Wn).join(`
`), g = [
    f,
    Es(t),
    "#define SHADER_NAME " + t.shaderName,
    m,
    t.alphaTest ? "#define ALPHATEST " + t.alphaTest + (t.alphaTest % 1 ? "" : ".0") : "",
    // add '.0' if integer
    "#define GAMMA_FACTOR " + u,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + d : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    (t.extensionShaderTextureLOD || t.envMap) && t.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
    t.toneMapping !== 0 ? we.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== 0 ? Zh("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    we.encodings_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    t.map ? Un("mapTexelToLinear", t.mapEncoding) : "",
    t.matcap ? Un("matcapTexelToLinear", t.matcapEncoding) : "",
    t.envMap ? Un("envMapTexelToLinear", t.envMapEncoding) : "",
    t.emissiveMap ? Un("emissiveMapTexelToLinear", t.emissiveMapEncoding) : "",
    t.lightMap ? Un("lightMapTexelToLinear", t.lightMapEncoding) : "",
    jh("linearToOutputTexel", t.outputEncoding),
    t.depthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Wn).join(`
`)), a = Ar(a), a = ws(a, t), a = bs(a, t), o = Ar(o), o = ws(o, t), o = bs(o, t), a = Ss(a), o = Ss(o), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (p = `#version 300 es
`, _ = [
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + _, g = [
    "#define varying in",
    t.glslVersion === ts ? "" : "out highp vec4 pc_fragColor;",
    t.glslVersion === ts ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + g);
  const E = p + _ + a, T = p + g + o, S = ys(i, 35633, E), v = ys(i, 35632, T);
  if (i.attachShader(x, S), i.attachShader(x, v), t.index0AttributeName !== void 0 ? i.bindAttribLocation(x, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(x, 0, "position"), i.linkProgram(x), r.debug.checkShaderErrors) {
    const z = i.getProgramInfoLog(x).trim(), F = i.getShaderInfoLog(S).trim(), H = i.getShaderInfoLog(v).trim();
    let U = !0, A = !0;
    if (i.getProgramParameter(x, 35714) === !1) {
      U = !1;
      const C = Ms(i, S, "vertex"), D = Ms(i, v, "fragment");
      console.error("THREE.WebGLProgram: shader error: ", i.getError(), "35715", i.getProgramParameter(x, 35715), "gl.getProgramInfoLog", z, C, D);
    } else z !== "" ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", z) : (F === "" || H === "") && (A = !1);
    A && (this.diagnostics = {
      runnable: U,
      programLog: z,
      vertexShader: {
        log: F,
        prefix: _
      },
      fragmentShader: {
        log: H,
        prefix: g
      }
    });
  }
  i.deleteShader(S), i.deleteShader(v);
  let P;
  this.getUniforms = function() {
    return P === void 0 && (P = new Wt(i, x)), P;
  };
  let N;
  return this.getAttributes = function() {
    return N === void 0 && (N = Qh(i, x)), N;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(x), this.program = void 0;
  }, this.name = t.shaderName, this.id = Xh++, this.cacheKey = e, this.usedTimes = 1, this.program = x, this.vertexShader = S, this.fragmentShader = v, this;
}
function cu(r, e, t, n, i, s) {
  const a = [], o = n.isWebGL2, l = n.logarithmicDepthBuffer, c = n.floatVertexTextures, h = n.maxVertexUniforms, d = n.vertexTextures;
  let u = n.precision;
  const f = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  }, m = [
    "precision",
    "isWebGL2",
    "supportsVertexTextures",
    "outputEncoding",
    "instancing",
    "instancingColor",
    "map",
    "mapEncoding",
    "matcap",
    "matcapEncoding",
    "envMap",
    "envMapMode",
    "envMapEncoding",
    "envMapCubeUV",
    "lightMap",
    "lightMapEncoding",
    "aoMap",
    "emissiveMap",
    "emissiveMapEncoding",
    "bumpMap",
    "normalMap",
    "objectSpaceNormalMap",
    "tangentSpaceNormalMap",
    "clearcoatMap",
    "clearcoatRoughnessMap",
    "clearcoatNormalMap",
    "displacementMap",
    "specularMap",
    "roughnessMap",
    "metalnessMap",
    "gradientMap",
    "alphaMap",
    "combine",
    "vertexColors",
    "vertexAlphas",
    "vertexTangents",
    "vertexUvs",
    "uvsVertexOnly",
    "fog",
    "useFog",
    "fogExp2",
    "flatShading",
    "sizeAttenuation",
    "logarithmicDepthBuffer",
    "skinning",
    "maxBones",
    "useVertexTexture",
    "morphTargets",
    "morphNormals",
    "premultipliedAlpha",
    "numDirLights",
    "numPointLights",
    "numSpotLights",
    "numHemiLights",
    "numRectAreaLights",
    "numDirLightShadows",
    "numPointLightShadows",
    "numSpotLightShadows",
    "shadowMapEnabled",
    "shadowMapType",
    "toneMapping",
    "physicallyCorrectLights",
    "alphaTest",
    "doubleSided",
    "flipSided",
    "numClippingPlanes",
    "numClipIntersection",
    "depthPacking",
    "dithering",
    "sheen",
    "transmissionMap"
  ];
  function x(v) {
    const N = v.skeleton.bones;
    if (c)
      return 1024;
    {
      const F = Math.floor((h - 20) / 4), H = Math.min(F, N.length);
      return H < N.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + N.length + " bones. This GPU supports " + H + "."), 0) : H;
    }
  }
  function _(v) {
    let P;
    return v && v.isTexture ? P = v.encoding : v && v.isWebGLRenderTarget ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), P = v.texture.encoding) : P = 3e3, P;
  }
  function g(v, P, N, z, F) {
    const H = z.fog, U = v.isMeshStandardMaterial ? z.environment : null, A = e.get(v.envMap || U), C = f[v.type], D = F.isSkinnedMesh ? x(F) : 0;
    v.precision !== null && (u = n.getMaxPrecision(v.precision), u !== v.precision && console.warn("THREE.WebGLProgram.getParameters:", v.precision, "not supported, using", u, "instead."));
    let R, W;
    if (C) {
      const se = wt[C];
      R = se.vertexShader, W = se.fragmentShader;
    } else
      R = v.vertexShader, W = v.fragmentShader;
    const J = r.getRenderTarget();
    return {
      isWebGL2: o,
      shaderID: C,
      shaderName: v.type,
      vertexShader: R,
      fragmentShader: W,
      defines: v.defines,
      isRawShaderMaterial: v.isRawShaderMaterial === !0,
      glslVersion: v.glslVersion,
      precision: u,
      instancing: F.isInstancedMesh === !0,
      instancingColor: F.isInstancedMesh === !0 && F.instanceColor !== null,
      supportsVertexTextures: d,
      outputEncoding: J !== null ? _(J.texture) : r.outputEncoding,
      map: !!v.map,
      mapEncoding: _(v.map),
      matcap: !!v.matcap,
      matcapEncoding: _(v.matcap),
      envMap: !!A,
      envMapMode: A && A.mapping,
      envMapEncoding: _(A),
      envMapCubeUV: !!A && (A.mapping === 306 || A.mapping === 307),
      lightMap: !!v.lightMap,
      lightMapEncoding: _(v.lightMap),
      aoMap: !!v.aoMap,
      emissiveMap: !!v.emissiveMap,
      emissiveMapEncoding: _(v.emissiveMap),
      bumpMap: !!v.bumpMap,
      normalMap: !!v.normalMap,
      objectSpaceNormalMap: v.normalMapType === 1,
      tangentSpaceNormalMap: v.normalMapType === 0,
      clearcoatMap: !!v.clearcoatMap,
      clearcoatRoughnessMap: !!v.clearcoatRoughnessMap,
      clearcoatNormalMap: !!v.clearcoatNormalMap,
      displacementMap: !!v.displacementMap,
      roughnessMap: !!v.roughnessMap,
      metalnessMap: !!v.metalnessMap,
      specularMap: !!v.specularMap,
      alphaMap: !!v.alphaMap,
      gradientMap: !!v.gradientMap,
      sheen: !!v.sheen,
      transmissionMap: !!v.transmissionMap,
      combine: v.combine,
      vertexTangents: v.normalMap && v.vertexTangents,
      vertexColors: v.vertexColors,
      vertexAlphas: v.vertexColors === !0 && F.geometry && F.geometry.attributes.color && F.geometry.attributes.color.itemSize === 4,
      vertexUvs: !!v.map || !!v.bumpMap || !!v.normalMap || !!v.specularMap || !!v.alphaMap || !!v.emissiveMap || !!v.roughnessMap || !!v.metalnessMap || !!v.clearcoatMap || !!v.clearcoatRoughnessMap || !!v.clearcoatNormalMap || !!v.displacementMap || !!v.transmissionMap,
      uvsVertexOnly: !(v.map || v.bumpMap || v.normalMap || v.specularMap || v.alphaMap || v.emissiveMap || v.roughnessMap || v.metalnessMap || v.clearcoatNormalMap || v.transmissionMap) && !!v.displacementMap,
      fog: !!H,
      useFog: v.fog,
      fogExp2: H && H.isFogExp2,
      flatShading: !!v.flatShading,
      sizeAttenuation: v.sizeAttenuation,
      logarithmicDepthBuffer: l,
      skinning: v.skinning && D > 0,
      maxBones: D,
      useVertexTexture: c,
      morphTargets: v.morphTargets,
      morphNormals: v.morphNormals,
      numDirLights: P.directional.length,
      numPointLights: P.point.length,
      numSpotLights: P.spot.length,
      numRectAreaLights: P.rectArea.length,
      numHemiLights: P.hemi.length,
      numDirLightShadows: P.directionalShadowMap.length,
      numPointLightShadows: P.pointShadowMap.length,
      numSpotLightShadows: P.spotShadowMap.length,
      numClippingPlanes: s.numPlanes,
      numClipIntersection: s.numIntersection,
      dithering: v.dithering,
      shadowMapEnabled: r.shadowMap.enabled && N.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: v.toneMapped ? r.toneMapping : 0,
      physicallyCorrectLights: r.physicallyCorrectLights,
      premultipliedAlpha: v.premultipliedAlpha,
      alphaTest: v.alphaTest,
      doubleSided: v.side === 2,
      flipSided: v.side === 1,
      depthPacking: v.depthPacking !== void 0 ? v.depthPacking : !1,
      index0AttributeName: v.index0AttributeName,
      extensionDerivatives: v.extensions && v.extensions.derivatives,
      extensionFragDepth: v.extensions && v.extensions.fragDepth,
      extensionDrawBuffers: v.extensions && v.extensions.drawBuffers,
      extensionShaderTextureLOD: v.extensions && v.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: o || t.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: o || t.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: o || t.has("EXT_shader_texture_lod"),
      customProgramCacheKey: v.customProgramCacheKey()
    };
  }
  function p(v) {
    const P = [];
    if (v.shaderID ? P.push(v.shaderID) : (P.push(v.fragmentShader), P.push(v.vertexShader)), v.defines !== void 0)
      for (const N in v.defines)
        P.push(N), P.push(v.defines[N]);
    if (v.isRawShaderMaterial === !1) {
      for (let N = 0; N < m.length; N++)
        P.push(v[m[N]]);
      P.push(r.outputEncoding), P.push(r.gammaFactor);
    }
    return P.push(v.customProgramCacheKey), P.join();
  }
  function E(v) {
    const P = f[v.type];
    let N;
    if (P) {
      const z = wt[P];
      N = _o.clone(z.uniforms);
    } else
      N = v.uniforms;
    return N;
  }
  function T(v, P) {
    let N;
    for (let z = 0, F = a.length; z < F; z++) {
      const H = a[z];
      if (H.cacheKey === P) {
        N = H, ++N.usedTimes;
        break;
      }
    }
    return N === void 0 && (N = new lu(r, P, v, i), a.push(N)), N;
  }
  function S(v) {
    if (--v.usedTimes === 0) {
      const P = a.indexOf(v);
      a[P] = a[a.length - 1], a.pop(), v.destroy();
    }
  }
  return {
    getParameters: g,
    getProgramCacheKey: p,
    getUniforms: E,
    acquireProgram: T,
    releaseProgram: S,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: a
  };
}
function hu() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let a = r.get(s);
    return a === void 0 && (a = {}, r.set(s, a)), a;
  }
  function t(s) {
    r.delete(s);
  }
  function n(s, a, o) {
    r.get(s)[a] = o;
  }
  function i() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function uu(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.program !== e.program ? r.program.id - e.program.id : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
}
function du(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function Ts(r) {
  const e = [];
  let t = 0;
  const n = [], i = [], s = { id: -1 };
  function a() {
    t = 0, n.length = 0, i.length = 0;
  }
  function o(u, f, m, x, _, g) {
    let p = e[t];
    const E = r.get(m);
    return p === void 0 ? (p = {
      id: u.id,
      object: u,
      geometry: f,
      material: m,
      program: E.program || s,
      groupOrder: x,
      renderOrder: u.renderOrder,
      z: _,
      group: g
    }, e[t] = p) : (p.id = u.id, p.object = u, p.geometry = f, p.material = m, p.program = E.program || s, p.groupOrder = x, p.renderOrder = u.renderOrder, p.z = _, p.group = g), t++, p;
  }
  function l(u, f, m, x, _, g) {
    const p = o(u, f, m, x, _, g);
    (m.transparent === !0 ? i : n).push(p);
  }
  function c(u, f, m, x, _, g) {
    const p = o(u, f, m, x, _, g);
    (m.transparent === !0 ? i : n).unshift(p);
  }
  function h(u, f) {
    n.length > 1 && n.sort(u || uu), i.length > 1 && i.sort(f || du);
  }
  function d() {
    for (let u = t, f = e.length; u < f; u++) {
      const m = e[u];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.program = null, m.group = null;
    }
  }
  return {
    opaque: n,
    transparent: i,
    init: a,
    push: l,
    unshift: c,
    finish: d,
    sort: h
  };
}
function fu(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(i, s) {
    let a;
    return e.has(i) === !1 ? (a = new Ts(r), e.set(i, [a])) : s >= e.get(i).length ? (a = new Ts(r), e.get(i).push(a)) : a = e.get(i)[s], a;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
function pu() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new w(),
            color: new le()
          };
          break;
        case "SpotLight":
          t = {
            position: new w(),
            direction: new w(),
            color: new le(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new w(),
            color: new le(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new w(),
            skyColor: new le(),
            groundColor: new le()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new le(),
            position: new w(),
            halfWidth: new w(),
            halfHeight: new w()
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
function mu() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new j()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new j()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new j(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
let gu = 0;
function xu(r, e) {
  return (e.castShadow ? 1 : 0) - (r.castShadow ? 1 : 0);
}
function _u(r, e) {
  const t = new pu(), n = mu(), i = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotShadow: [],
    spotShadowMap: [],
    spotShadowMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: []
  };
  for (let h = 0; h < 9; h++) i.probe.push(new w());
  const s = new w(), a = new ue(), o = new ue();
  function l(h) {
    let d = 0, u = 0, f = 0;
    for (let P = 0; P < 9; P++) i.probe[P].set(0, 0, 0);
    let m = 0, x = 0, _ = 0, g = 0, p = 0, E = 0, T = 0, S = 0;
    h.sort(xu);
    for (let P = 0, N = h.length; P < N; P++) {
      const z = h[P], F = z.color, H = z.intensity, U = z.distance, A = z.shadow && z.shadow.map ? z.shadow.map.texture : null;
      if (z.isAmbientLight)
        d += F.r * H, u += F.g * H, f += F.b * H;
      else if (z.isLightProbe)
        for (let C = 0; C < 9; C++)
          i.probe[C].addScaledVector(z.sh.coefficients[C], H);
      else if (z.isDirectionalLight) {
        const C = t.get(z);
        if (C.color.copy(z.color).multiplyScalar(z.intensity), z.castShadow) {
          const D = z.shadow, R = n.get(z);
          R.shadowBias = D.bias, R.shadowNormalBias = D.normalBias, R.shadowRadius = D.radius, R.shadowMapSize = D.mapSize, i.directionalShadow[m] = R, i.directionalShadowMap[m] = A, i.directionalShadowMatrix[m] = z.shadow.matrix, E++;
        }
        i.directional[m] = C, m++;
      } else if (z.isSpotLight) {
        const C = t.get(z);
        if (C.position.setFromMatrixPosition(z.matrixWorld), C.color.copy(F).multiplyScalar(H), C.distance = U, C.coneCos = Math.cos(z.angle), C.penumbraCos = Math.cos(z.angle * (1 - z.penumbra)), C.decay = z.decay, z.castShadow) {
          const D = z.shadow, R = n.get(z);
          R.shadowBias = D.bias, R.shadowNormalBias = D.normalBias, R.shadowRadius = D.radius, R.shadowMapSize = D.mapSize, i.spotShadow[_] = R, i.spotShadowMap[_] = A, i.spotShadowMatrix[_] = z.shadow.matrix, S++;
        }
        i.spot[_] = C, _++;
      } else if (z.isRectAreaLight) {
        const C = t.get(z);
        C.color.copy(F).multiplyScalar(H), C.halfWidth.set(z.width * 0.5, 0, 0), C.halfHeight.set(0, z.height * 0.5, 0), i.rectArea[g] = C, g++;
      } else if (z.isPointLight) {
        const C = t.get(z);
        if (C.color.copy(z.color).multiplyScalar(z.intensity), C.distance = z.distance, C.decay = z.decay, z.castShadow) {
          const D = z.shadow, R = n.get(z);
          R.shadowBias = D.bias, R.shadowNormalBias = D.normalBias, R.shadowRadius = D.radius, R.shadowMapSize = D.mapSize, R.shadowCameraNear = D.camera.near, R.shadowCameraFar = D.camera.far, i.pointShadow[x] = R, i.pointShadowMap[x] = A, i.pointShadowMatrix[x] = z.shadow.matrix, T++;
        }
        i.point[x] = C, x++;
      } else if (z.isHemisphereLight) {
        const C = t.get(z);
        C.skyColor.copy(z.color).multiplyScalar(H), C.groundColor.copy(z.groundColor).multiplyScalar(H), i.hemi[p] = C, p++;
      }
    }
    g > 0 && (e.isWebGL2 || r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = K.LTC_FLOAT_1, i.rectAreaLTC2 = K.LTC_FLOAT_2) : r.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = K.LTC_HALF_1, i.rectAreaLTC2 = K.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = u, i.ambient[2] = f;
    const v = i.hash;
    (v.directionalLength !== m || v.pointLength !== x || v.spotLength !== _ || v.rectAreaLength !== g || v.hemiLength !== p || v.numDirectionalShadows !== E || v.numPointShadows !== T || v.numSpotShadows !== S) && (i.directional.length = m, i.spot.length = _, i.rectArea.length = g, i.point.length = x, i.hemi.length = p, i.directionalShadow.length = E, i.directionalShadowMap.length = E, i.pointShadow.length = T, i.pointShadowMap.length = T, i.spotShadow.length = S, i.spotShadowMap.length = S, i.directionalShadowMatrix.length = E, i.pointShadowMatrix.length = T, i.spotShadowMatrix.length = S, v.directionalLength = m, v.pointLength = x, v.spotLength = _, v.rectAreaLength = g, v.hemiLength = p, v.numDirectionalShadows = E, v.numPointShadows = T, v.numSpotShadows = S, i.version = gu++);
  }
  function c(h, d) {
    let u = 0, f = 0, m = 0, x = 0, _ = 0;
    const g = d.matrixWorldInverse;
    for (let p = 0, E = h.length; p < E; p++) {
      const T = h[p];
      if (T.isDirectionalLight) {
        const S = i.directional[u];
        S.direction.setFromMatrixPosition(T.matrixWorld), s.setFromMatrixPosition(T.target.matrixWorld), S.direction.sub(s), S.direction.transformDirection(g), u++;
      } else if (T.isSpotLight) {
        const S = i.spot[m];
        S.position.setFromMatrixPosition(T.matrixWorld), S.position.applyMatrix4(g), S.direction.setFromMatrixPosition(T.matrixWorld), s.setFromMatrixPosition(T.target.matrixWorld), S.direction.sub(s), S.direction.transformDirection(g), m++;
      } else if (T.isRectAreaLight) {
        const S = i.rectArea[x];
        S.position.setFromMatrixPosition(T.matrixWorld), S.position.applyMatrix4(g), o.identity(), a.copy(T.matrixWorld), a.premultiply(g), o.extractRotation(a), S.halfWidth.set(T.width * 0.5, 0, 0), S.halfHeight.set(0, T.height * 0.5, 0), S.halfWidth.applyMatrix4(o), S.halfHeight.applyMatrix4(o), x++;
      } else if (T.isPointLight) {
        const S = i.point[f];
        S.position.setFromMatrixPosition(T.matrixWorld), S.position.applyMatrix4(g), f++;
      } else if (T.isHemisphereLight) {
        const S = i.hemi[_];
        S.direction.setFromMatrixPosition(T.matrixWorld), S.direction.transformDirection(g), S.direction.normalize(), _++;
      }
    }
  }
  return {
    setup: l,
    setupView: c,
    state: i
  };
}
function As(r, e) {
  const t = new _u(r, e), n = [], i = [];
  function s() {
    n.length = 0, i.length = 0;
  }
  function a(d) {
    n.push(d);
  }
  function o(d) {
    i.push(d);
  }
  function l() {
    t.setup(n);
  }
  function c(d) {
    t.setupView(n, d);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: l,
    setupLightsView: c,
    pushLight: a,
    pushShadow: o
  };
}
function vu(r, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, a = 0) {
    let o;
    return t.has(s) === !1 ? (o = new As(r, e), t.set(s, [o])) : a >= t.get(s).length ? (o = new As(r, e), t.get(s).push(o)) : o = t.get(s)[a], o;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class ya extends Je {
  constructor(e) {
    super(), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
ya.prototype.isMeshDepthMaterial = !0;
class Ma extends Je {
  constructor(e) {
    super(), this.type = "MeshDistanceMaterial", this.referencePosition = new w(), this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
Ma.prototype.isMeshDistanceMaterial = !0;
var yu = `uniform sampler2D shadow_pass;
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
}`, Mu = `void main() {
	gl_Position = vec4( position, 1.0 );
}`;
function wa(r, e, t) {
  let n = new Ii();
  const i = new j(), s = new j(), a = new Ie(), o = [], l = [], c = {}, h = t.maxTextureSize, d = { 0: 1, 1: 0, 2: 2 }, u = new rn({
    defines: {
      SAMPLE_RATE: 2 / 8,
      HALF_SAMPLE_RATE: 1 / 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new j() },
      radius: { value: 4 }
    },
    vertexShader: Mu,
    fragmentShader: yu
  }), f = u.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const m = new ze();
  m.setAttribute(
    "position",
    new Ze(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const x = new ut(m, u), _ = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(v, P, N) {
    if (_.enabled === !1 || _.autoUpdate === !1 && _.needsUpdate === !1 || v.length === 0) return;
    const z = r.getRenderTarget(), F = r.getActiveCubeFace(), H = r.getActiveMipmapLevel(), U = r.state;
    U.setBlending(0), U.buffers.color.setClear(1, 1, 1, 1), U.buffers.depth.setTest(!0), U.setScissorTest(!1);
    for (let A = 0, C = v.length; A < C; A++) {
      const D = v[A], R = D.shadow;
      if (R === void 0) {
        console.warn("THREE.WebGLShadowMap:", D, "has no shadow.");
        continue;
      }
      if (R.autoUpdate === !1 && R.needsUpdate === !1) continue;
      i.copy(R.mapSize);
      const W = R.getFrameExtents();
      if (i.multiply(W), s.copy(R.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / W.x), i.x = s.x * W.x, R.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / W.y), i.y = s.y * W.y, R.mapSize.y = s.y)), R.map === null && !R.isPointLightShadow && this.type === 3) {
        const X = { minFilter: 1006, magFilter: 1006, format: 1023 };
        R.map = new nn(i.x, i.y, X), R.map.texture.name = D.name + ".shadowMap", R.mapPass = new nn(i.x, i.y, X), R.camera.updateProjectionMatrix();
      }
      if (R.map === null) {
        const X = { minFilter: 1003, magFilter: 1003, format: 1023 };
        R.map = new nn(i.x, i.y, X), R.map.texture.name = D.name + ".shadowMap", R.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(R.map), r.clear();
      const J = R.getViewportCount();
      for (let X = 0; X < J; X++) {
        const se = R.getViewport(X);
        a.set(
          s.x * se.x,
          s.y * se.y,
          s.x * se.z,
          s.y * se.w
        ), U.viewport(a), R.updateMatrices(D, X), n = R.getFrustum(), S(P, N, R.camera, D, this.type);
      }
      !R.isPointLightShadow && this.type === 3 && g(R, N), R.needsUpdate = !1;
    }
    _.needsUpdate = !1, r.setRenderTarget(z, F, H);
  };
  function g(v, P) {
    const N = e.update(x);
    u.uniforms.shadow_pass.value = v.map.texture, u.uniforms.resolution.value = v.mapSize, u.uniforms.radius.value = v.radius, r.setRenderTarget(v.mapPass), r.clear(), r.renderBufferDirect(P, null, N, u, x, null), f.uniforms.shadow_pass.value = v.mapPass.texture, f.uniforms.resolution.value = v.mapSize, f.uniforms.radius.value = v.radius, r.setRenderTarget(v.map), r.clear(), r.renderBufferDirect(P, null, N, f, x, null);
  }
  function p(v, P, N) {
    const z = v << 0 | P << 1 | N << 2;
    let F = o[z];
    return F === void 0 && (F = new ya({
      depthPacking: 3201,
      morphTargets: v,
      skinning: P
    }), o[z] = F), F;
  }
  function E(v, P, N) {
    const z = v << 0 | P << 1 | N << 2;
    let F = l[z];
    return F === void 0 && (F = new Ma({
      morphTargets: v,
      skinning: P
    }), l[z] = F), F;
  }
  function T(v, P, N, z, F, H, U) {
    let A = null, C = p, D = v.customDepthMaterial;
    if (z.isPointLight === !0 && (C = E, D = v.customDistanceMaterial), D === void 0) {
      let R = !1;
      N.morphTargets === !0 && (R = P.morphAttributes && P.morphAttributes.position && P.morphAttributes.position.length > 0);
      let W = !1;
      v.isSkinnedMesh === !0 && (N.skinning === !0 ? W = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", v));
      const J = v.isInstancedMesh === !0;
      A = C(R, W, J);
    } else
      A = D;
    if (r.localClippingEnabled && N.clipShadows === !0 && N.clippingPlanes.length !== 0) {
      const R = A.uuid, W = N.uuid;
      let J = c[R];
      J === void 0 && (J = {}, c[R] = J);
      let X = J[W];
      X === void 0 && (X = A.clone(), J[W] = X), A = X;
    }
    return A.visible = N.visible, A.wireframe = N.wireframe, U === 3 ? A.side = N.shadowSide !== null ? N.shadowSide : N.side : A.side = N.shadowSide !== null ? N.shadowSide : d[N.side], A.clipShadows = N.clipShadows, A.clippingPlanes = N.clippingPlanes, A.clipIntersection = N.clipIntersection, A.wireframeLinewidth = N.wireframeLinewidth, A.linewidth = N.linewidth, z.isPointLight === !0 && A.isMeshDistanceMaterial === !0 && (A.referencePosition.setFromMatrixPosition(z.matrixWorld), A.nearDistance = F, A.farDistance = H), A;
  }
  function S(v, P, N, z, F) {
    if (v.visible === !1) return;
    if (v.layers.test(P.layers) && (v.isMesh || v.isLine || v.isPoints) && (v.castShadow || v.receiveShadow && F === 3) && (!v.frustumCulled || n.intersectsObject(v))) {
      v.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, v.matrixWorld);
      const A = e.update(v), C = v.material;
      if (Array.isArray(C)) {
        const D = A.groups;
        for (let R = 0, W = D.length; R < W; R++) {
          const J = D[R], X = C[J.materialIndex];
          if (X && X.visible) {
            const se = T(v, A, X, z, N.near, N.far, F);
            r.renderBufferDirect(N, null, A, se, v, J);
          }
        }
      } else if (C.visible) {
        const D = T(v, A, C, z, N.near, N.far, F);
        r.renderBufferDirect(N, null, A, D, v, null);
      }
    }
    const U = v.children;
    for (let A = 0, C = U.length; A < C; A++)
      S(U[A], P, N, z, F);
  }
}
function wu(r, e, t) {
  const n = t.isWebGL2;
  function i() {
    let L = !1;
    const Z = new Ie();
    let Q = null;
    const he = new Ie(0, 0, 0, 0);
    return {
      setMask: function(q) {
        Q !== q && !L && (r.colorMask(q, q, q, q), Q = q);
      },
      setLocked: function(q) {
        L = q;
      },
      setClear: function(q, pe, Ce, We, Zt) {
        Zt === !0 && (q *= We, pe *= We, Ce *= We), Z.set(q, pe, Ce, We), he.equals(Z) === !1 && (r.clearColor(q, pe, Ce, We), he.copy(Z));
      },
      reset: function() {
        L = !1, Q = null, he.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let L = !1, Z = null, Q = null, he = null;
    return {
      setTest: function(q) {
        q ? ce(2929) : de(2929);
      },
      setMask: function(q) {
        Z !== q && !L && (r.depthMask(q), Z = q);
      },
      setFunc: function(q) {
        if (Q !== q) {
          if (q)
            switch (q) {
              case 0:
                r.depthFunc(512);
                break;
              case 1:
                r.depthFunc(519);
                break;
              case 2:
                r.depthFunc(513);
                break;
              case 3:
                r.depthFunc(515);
                break;
              case 4:
                r.depthFunc(514);
                break;
              case 5:
                r.depthFunc(518);
                break;
              case 6:
                r.depthFunc(516);
                break;
              case 7:
                r.depthFunc(517);
                break;
              default:
                r.depthFunc(515);
            }
          else
            r.depthFunc(515);
          Q = q;
        }
      },
      setLocked: function(q) {
        L = q;
      },
      setClear: function(q) {
        he !== q && (r.clearDepth(q), he = q);
      },
      reset: function() {
        L = !1, Z = null, Q = null, he = null;
      }
    };
  }
  function a() {
    let L = !1, Z = null, Q = null, he = null, q = null, pe = null, Ce = null, We = null, Zt = null;
    return {
      setTest: function(He) {
        L || (He ? ce(2960) : de(2960));
      },
      setMask: function(He) {
        Z !== He && !L && (r.stencilMask(He), Z = He);
      },
      setFunc: function(He, Tt, pt) {
        (Q !== He || he !== Tt || q !== pt) && (r.stencilFunc(He, Tt, pt), Q = He, he = Tt, q = pt);
      },
      setOp: function(He, Tt, pt) {
        (pe !== He || Ce !== Tt || We !== pt) && (r.stencilOp(He, Tt, pt), pe = He, Ce = Tt, We = pt);
      },
      setLocked: function(He) {
        L = He;
      },
      setClear: function(He) {
        Zt !== He && (r.clearStencil(He), Zt = He);
      },
      reset: function() {
        L = !1, Z = null, Q = null, he = null, q = null, pe = null, Ce = null, We = null, Zt = null;
      }
    };
  }
  const o = new i(), l = new s(), c = new a();
  let h = {}, d = null, u = {}, f = null, m = !1, x = null, _ = null, g = null, p = null, E = null, T = null, S = null, v = !1, P = null, N = null, z = null, F = null, H = null;
  const U = r.getParameter(35661);
  let A = !1, C = 0;
  const D = r.getParameter(7938);
  D.indexOf("WebGL") !== -1 ? (C = parseFloat(/^WebGL (\d)/.exec(D)[1]), A = C >= 1) : D.indexOf("OpenGL ES") !== -1 && (C = parseFloat(/^OpenGL ES (\d)/.exec(D)[1]), A = C >= 2);
  let R = null, W = {};
  const J = new Ie(0, 0, r.canvas.width, r.canvas.height), X = new Ie(0, 0, r.canvas.width, r.canvas.height);
  function se(L, Z, Q) {
    const he = new Uint8Array(4), q = r.createTexture();
    r.bindTexture(L, q), r.texParameteri(L, 10241, 9728), r.texParameteri(L, 10240, 9728);
    for (let pe = 0; pe < Q; pe++)
      r.texImage2D(Z + pe, 0, 6408, 1, 1, 0, 6408, 5121, he);
    return q;
  }
  const ne = {};
  ne[3553] = se(3553, 3553, 1), ne[34067] = se(34067, 34069, 6), o.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), ce(2929), l.setFunc(3), be(!1), Y(1), ce(2884), Te(0);
  function ce(L) {
    h[L] !== !0 && (r.enable(L), h[L] = !0);
  }
  function de(L) {
    h[L] !== !1 && (r.disable(L), h[L] = !1);
  }
  function G(L) {
    L !== d && (r.bindFramebuffer(36160, L), d = L);
  }
  function Ne(L, Z) {
    Z === null && d !== null && (Z = d), u[L] !== Z && (r.bindFramebuffer(L, Z), u[L] = Z, n && (L === 36009 && (u[36160] = Z), L === 36160 && (u[36009] = Z)));
  }
  function Se(L) {
    return f !== L ? (r.useProgram(L), f = L, !0) : !1;
  }
  const _e = {
    100: 32774,
    101: 32778,
    102: 32779
  };
  if (n)
    _e[103] = 32775, _e[104] = 32776;
  else {
    const L = e.get("EXT_blend_minmax");
    L !== null && (_e[103] = L.MIN_EXT, _e[104] = L.MAX_EXT);
  }
  const fe = {
    200: 0,
    201: 1,
    202: 768,
    204: 770,
    210: 776,
    208: 774,
    206: 772,
    203: 769,
    205: 771,
    209: 775,
    207: 773
  };
  function Te(L, Z, Q, he, q, pe, Ce, We) {
    if (L === 0) {
      m === !0 && (de(3042), m = !1);
      return;
    }
    if (m === !1 && (ce(3042), m = !0), L !== 5) {
      if (L !== x || We !== v) {
        if ((_ !== 100 || E !== 100) && (r.blendEquation(32774), _ = 100, E = 100), We)
          switch (L) {
            case 1:
              r.blendFuncSeparate(1, 771, 1, 771);
              break;
            case 2:
              r.blendFunc(1, 1);
              break;
            case 3:
              r.blendFuncSeparate(0, 0, 769, 771);
              break;
            case 4:
              r.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        else
          switch (L) {
            case 1:
              r.blendFuncSeparate(770, 771, 1, 771);
              break;
            case 2:
              r.blendFunc(770, 1);
              break;
            case 3:
              r.blendFunc(0, 769);
              break;
            case 4:
              r.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        g = null, p = null, T = null, S = null, x = L, v = We;
      }
      return;
    }
    q = q || Z, pe = pe || Q, Ce = Ce || he, (Z !== _ || q !== E) && (r.blendEquationSeparate(_e[Z], _e[q]), _ = Z, E = q), (Q !== g || he !== p || pe !== T || Ce !== S) && (r.blendFuncSeparate(fe[Q], fe[he], fe[pe], fe[Ce]), g = Q, p = he, T = pe, S = Ce), x = L, v = null;
  }
  function Me(L, Z) {
    L.side === 2 ? de(2884) : ce(2884);
    let Q = L.side === 1;
    Z && (Q = !Q), be(Q), L.blending === 1 && L.transparent === !1 ? Te(0) : Te(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.premultipliedAlpha), l.setFunc(L.depthFunc), l.setTest(L.depthTest), l.setMask(L.depthWrite), o.setMask(L.colorWrite);
    const he = L.stencilWrite;
    c.setTest(he), he && (c.setMask(L.stencilWriteMask), c.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), c.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), ee(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? ce(32926) : de(32926);
  }
  function be(L) {
    P !== L && (L ? r.frontFace(2304) : r.frontFace(2305), P = L);
  }
  function Y(L) {
    L !== 0 ? (ce(2884), L !== N && (L === 1 ? r.cullFace(1029) : L === 2 ? r.cullFace(1028) : r.cullFace(1032))) : de(2884), N = L;
  }
  function $(L) {
    L !== z && (A && r.lineWidth(L), z = L);
  }
  function ee(L, Z, Q) {
    L ? (ce(32823), (F !== Z || H !== Q) && (r.polygonOffset(Z, Q), F = Z, H = Q)) : de(32823);
  }
  function oe(L) {
    L ? ce(3089) : de(3089);
  }
  function ie(L) {
    L === void 0 && (L = 33984 + U - 1), R !== L && (r.activeTexture(L), R = L);
  }
  function b(L, Z) {
    R === null && ie();
    let Q = W[R];
    Q === void 0 && (Q = { type: void 0, texture: void 0 }, W[R] = Q), (Q.type !== L || Q.texture !== Z) && (r.bindTexture(L, Z || ne[L]), Q.type = L, Q.texture = Z);
  }
  function M() {
    const L = W[R];
    L !== void 0 && L.type !== void 0 && (r.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
  }
  function V() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function k() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function re() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ae(L) {
    J.equals(L) === !1 && (r.scissor(L.x, L.y, L.z, L.w), J.copy(L));
  }
  function Ae(L) {
    X.equals(L) === !1 && (r.viewport(L.x, L.y, L.z, L.w), X.copy(L));
  }
  function me() {
    r.disable(3042), r.disable(2884), r.disable(2929), r.disable(32823), r.disable(3089), r.disable(2960), r.disable(32926), r.blendEquation(32774), r.blendFunc(1, 0), r.blendFuncSeparate(1, 0, 1, 0), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(513), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(519, 0, 4294967295), r.stencilOp(7680, 7680, 7680), r.clearStencil(0), r.cullFace(1029), r.frontFace(2305), r.polygonOffset(0, 0), r.activeTexture(33984), r.bindFramebuffer(36160, null), n === !0 && (r.bindFramebuffer(36009, null), r.bindFramebuffer(36008, null)), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), h = {}, R = null, W = {}, d = null, u = {}, f = null, m = !1, x = null, _ = null, g = null, p = null, E = null, T = null, S = null, v = !1, P = null, N = null, z = null, F = null, H = null, J.set(0, 0, r.canvas.width, r.canvas.height), X.set(0, 0, r.canvas.width, r.canvas.height), o.reset(), l.reset(), c.reset();
  }
  return {
    buffers: {
      color: o,
      depth: l,
      stencil: c
    },
    enable: ce,
    disable: de,
    bindFramebuffer: Ne,
    bindXRFramebuffer: G,
    useProgram: Se,
    setBlending: Te,
    setMaterial: Me,
    setFlipSided: be,
    setCullFace: Y,
    setLineWidth: $,
    setPolygonOffset: ee,
    setScissorTest: oe,
    activeTexture: ie,
    bindTexture: b,
    unbindTexture: M,
    compressedTexImage2D: V,
    texImage2D: k,
    texImage3D: re,
    scissor: ae,
    viewport: Ae,
    reset: me
  };
}
function bu(r, e, t, n, i, s, a) {
  const o = i.isWebGL2, l = i.maxTextures, c = i.maxCubemapSize, h = i.maxTextureSize, d = i.maxSamples, u = /* @__PURE__ */ new WeakMap();
  let f, m = !1;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function x(b, M) {
    return m ? new OffscreenCanvas(b, M) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
  }
  function _(b, M, V, k) {
    let re = 1;
    if ((b.width > k || b.height > k) && (re = k / Math.max(b.width, b.height)), re < 1 || M === !0)
      if (typeof HTMLImageElement < "u" && b instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && b instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && b instanceof ImageBitmap) {
        const ae = M ? eo : Math.floor, Ae = ae(re * b.width), me = ae(re * b.height);
        f === void 0 && (f = x(Ae, me));
        const L = V ? x(Ae, me) : f;
        return L.width = Ae, L.height = me, L.getContext("2d").drawImage(b, 0, 0, Ae, me), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + b.width + "x" + b.height + ") to (" + Ae + "x" + me + ")."), L;
      } else
        return "data" in b && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + b.width + "x" + b.height + ")."), b;
    return b;
  }
  function g(b) {
    return ns(b.width) && ns(b.height);
  }
  function p(b) {
    return o ? !1 : b.wrapS !== 1001 || b.wrapT !== 1001 || b.minFilter !== 1003 && b.minFilter !== 1006;
  }
  function E(b, M) {
    return b.generateMipmaps && M && b.minFilter !== 1003 && b.minFilter !== 1006;
  }
  function T(b, M, V, k) {
    r.generateMipmap(b);
    const re = n.get(M);
    re.__maxMipLevel = Math.log2(Math.max(V, k));
  }
  function S(b, M, V) {
    if (o === !1) return M;
    if (b !== null) {
      if (r[b] !== void 0) return r[b];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + b + "'");
    }
    let k = M;
    return M === 6403 && (V === 5126 && (k = 33326), V === 5131 && (k = 33325), V === 5121 && (k = 33321)), M === 6407 && (V === 5126 && (k = 34837), V === 5131 && (k = 34843), V === 5121 && (k = 32849)), M === 6408 && (V === 5126 && (k = 34836), V === 5131 && (k = 34842), V === 5121 && (k = 32856)), (k === 33325 || k === 33326 || k === 34842 || k === 34836) && e.get("EXT_color_buffer_float"), k;
  }
  function v(b) {
    return b === 1003 || b === 1004 || b === 1005 ? 9728 : 9729;
  }
  function P(b) {
    const M = b.target;
    M.removeEventListener("dispose", P), z(M), M.isVideoTexture && u.delete(M), a.memory.textures--;
  }
  function N(b) {
    const M = b.target;
    M.removeEventListener("dispose", N), F(M), a.memory.textures--;
  }
  function z(b) {
    const M = n.get(b);
    M.__webglInit !== void 0 && (r.deleteTexture(M.__webglTexture), n.remove(b));
  }
  function F(b) {
    const M = b.texture, V = n.get(b), k = n.get(M);
    if (b) {
      if (k.__webglTexture !== void 0 && r.deleteTexture(k.__webglTexture), b.depthTexture && b.depthTexture.dispose(), b.isWebGLCubeRenderTarget)
        for (let re = 0; re < 6; re++)
          r.deleteFramebuffer(V.__webglFramebuffer[re]), V.__webglDepthbuffer && r.deleteRenderbuffer(V.__webglDepthbuffer[re]);
      else
        r.deleteFramebuffer(V.__webglFramebuffer), V.__webglDepthbuffer && r.deleteRenderbuffer(V.__webglDepthbuffer), V.__webglMultisampledFramebuffer && r.deleteFramebuffer(V.__webglMultisampledFramebuffer), V.__webglColorRenderbuffer && r.deleteRenderbuffer(V.__webglColorRenderbuffer), V.__webglDepthRenderbuffer && r.deleteRenderbuffer(V.__webglDepthRenderbuffer);
      n.remove(M), n.remove(b);
    }
  }
  let H = 0;
  function U() {
    H = 0;
  }
  function A() {
    const b = H;
    return b >= l && console.warn("THREE.WebGLTextures: Trying to use " + b + " texture units while this GPU supports only " + l), H += 1, b;
  }
  function C(b, M) {
    const V = n.get(b);
    if (b.isVideoTexture && Y(b), b.version > 0 && V.__version !== b.version) {
      const k = b.image;
      if (k === void 0)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
      else if (k.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ce(V, b, M);
        return;
      }
    }
    t.activeTexture(33984 + M), t.bindTexture(3553, V.__webglTexture);
  }
  function D(b, M) {
    const V = n.get(b);
    if (b.version > 0 && V.__version !== b.version) {
      ce(V, b, M);
      return;
    }
    t.activeTexture(33984 + M), t.bindTexture(35866, V.__webglTexture);
  }
  function R(b, M) {
    const V = n.get(b);
    if (b.version > 0 && V.__version !== b.version) {
      ce(V, b, M);
      return;
    }
    t.activeTexture(33984 + M), t.bindTexture(32879, V.__webglTexture);
  }
  function W(b, M) {
    const V = n.get(b);
    if (b.version > 0 && V.__version !== b.version) {
      de(V, b, M);
      return;
    }
    t.activeTexture(33984 + M), t.bindTexture(34067, V.__webglTexture);
  }
  const J = {
    1e3: 10497,
    1001: 33071,
    1002: 33648
  }, X = {
    1003: 9728,
    1004: 9984,
    1005: 9986,
    1006: 9729,
    1007: 9985,
    1008: 9987
  };
  function se(b, M, V) {
    if (V ? (r.texParameteri(b, 10242, J[M.wrapS]), r.texParameteri(b, 10243, J[M.wrapT]), (b === 32879 || b === 35866) && r.texParameteri(b, 32882, J[M.wrapR]), r.texParameteri(b, 10240, X[M.magFilter]), r.texParameteri(b, 10241, X[M.minFilter])) : (r.texParameteri(b, 10242, 33071), r.texParameteri(b, 10243, 33071), (b === 32879 || b === 35866) && r.texParameteri(b, 32882, 33071), (M.wrapS !== 1001 || M.wrapT !== 1001) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), r.texParameteri(b, 10240, v(M.magFilter)), r.texParameteri(b, 10241, v(M.minFilter)), M.minFilter !== 1003 && M.minFilter !== 1006 && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
      const k = e.get("EXT_texture_filter_anisotropic");
      if (M.type === 1015 && e.has("OES_texture_float_linear") === !1 || o === !1 && M.type === 1016 && e.has("OES_texture_half_float_linear") === !1) return;
      (M.anisotropy > 1 || n.get(M).__currentAnisotropy) && (r.texParameterf(b, k.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(M.anisotropy, i.getMaxAnisotropy())), n.get(M).__currentAnisotropy = M.anisotropy);
    }
  }
  function ne(b, M) {
    b.__webglInit === void 0 && (b.__webglInit = !0, M.addEventListener("dispose", P), b.__webglTexture = r.createTexture(), a.memory.textures++);
  }
  function ce(b, M, V) {
    let k = 3553;
    M.isDataTexture2DArray && (k = 35866), M.isDataTexture3D && (k = 32879), ne(b, M), t.activeTexture(33984 + V), t.bindTexture(k, b.__webglTexture), r.pixelStorei(37440, M.flipY), r.pixelStorei(37441, M.premultiplyAlpha), r.pixelStorei(3317, M.unpackAlignment), r.pixelStorei(37443, 0);
    const re = p(M) && g(M.image) === !1, ae = _(M.image, re, !1, h), Ae = g(ae) || o, me = s.convert(M.format);
    let L = s.convert(M.type), Z = S(M.internalFormat, me, L);
    se(k, M, Ae);
    let Q;
    const he = M.mipmaps;
    if (M.isDepthTexture)
      Z = 6402, o ? M.type === 1015 ? Z = 36012 : M.type === 1014 ? Z = 33190 : M.type === 1020 ? Z = 35056 : Z = 33189 : M.type === 1015 && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), M.format === 1026 && Z === 6402 && M.type !== 1012 && M.type !== 1014 && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), M.type = 1012, L = s.convert(M.type)), M.format === 1027 && Z === 6402 && (Z = 34041, M.type !== 1020 && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), M.type = 1020, L = s.convert(M.type))), t.texImage2D(3553, 0, Z, ae.width, ae.height, 0, me, L, null);
    else if (M.isDataTexture)
      if (he.length > 0 && Ae) {
        for (let q = 0, pe = he.length; q < pe; q++)
          Q = he[q], t.texImage2D(3553, q, Z, Q.width, Q.height, 0, me, L, Q.data);
        M.generateMipmaps = !1, b.__maxMipLevel = he.length - 1;
      } else
        t.texImage2D(3553, 0, Z, ae.width, ae.height, 0, me, L, ae.data), b.__maxMipLevel = 0;
    else if (M.isCompressedTexture) {
      for (let q = 0, pe = he.length; q < pe; q++)
        Q = he[q], M.format !== 1023 && M.format !== 1022 ? me !== null ? t.compressedTexImage2D(3553, q, Z, Q.width, Q.height, 0, Q.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : t.texImage2D(3553, q, Z, Q.width, Q.height, 0, me, L, Q.data);
      b.__maxMipLevel = he.length - 1;
    } else if (M.isDataTexture2DArray)
      t.texImage3D(35866, 0, Z, ae.width, ae.height, ae.depth, 0, me, L, ae.data), b.__maxMipLevel = 0;
    else if (M.isDataTexture3D)
      t.texImage3D(32879, 0, Z, ae.width, ae.height, ae.depth, 0, me, L, ae.data), b.__maxMipLevel = 0;
    else if (he.length > 0 && Ae) {
      for (let q = 0, pe = he.length; q < pe; q++)
        Q = he[q], t.texImage2D(3553, q, Z, me, L, Q);
      M.generateMipmaps = !1, b.__maxMipLevel = he.length - 1;
    } else
      t.texImage2D(3553, 0, Z, me, L, ae), b.__maxMipLevel = 0;
    E(M, Ae) && T(k, M, ae.width, ae.height), b.__version = M.version, M.onUpdate && M.onUpdate(M);
  }
  function de(b, M, V) {
    if (M.image.length !== 6) return;
    ne(b, M), t.activeTexture(33984 + V), t.bindTexture(34067, b.__webglTexture), r.pixelStorei(37440, M.flipY), r.pixelStorei(37441, M.premultiplyAlpha), r.pixelStorei(3317, M.unpackAlignment), r.pixelStorei(37443, 0);
    const k = M && (M.isCompressedTexture || M.image[0].isCompressedTexture), re = M.image[0] && M.image[0].isDataTexture, ae = [];
    for (let q = 0; q < 6; q++)
      !k && !re ? ae[q] = _(M.image[q], !1, !0, c) : ae[q] = re ? M.image[q].image : M.image[q];
    const Ae = ae[0], me = g(Ae) || o, L = s.convert(M.format), Z = s.convert(M.type), Q = S(M.internalFormat, L, Z);
    se(34067, M, me);
    let he;
    if (k) {
      for (let q = 0; q < 6; q++) {
        he = ae[q].mipmaps;
        for (let pe = 0; pe < he.length; pe++) {
          const Ce = he[pe];
          M.format !== 1023 && M.format !== 1022 ? L !== null ? t.compressedTexImage2D(34069 + q, pe, Q, Ce.width, Ce.height, 0, Ce.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : t.texImage2D(34069 + q, pe, Q, Ce.width, Ce.height, 0, L, Z, Ce.data);
        }
      }
      b.__maxMipLevel = he.length - 1;
    } else {
      he = M.mipmaps;
      for (let q = 0; q < 6; q++)
        if (re) {
          t.texImage2D(34069 + q, 0, Q, ae[q].width, ae[q].height, 0, L, Z, ae[q].data);
          for (let pe = 0; pe < he.length; pe++) {
            const We = he[pe].image[q].image;
            t.texImage2D(34069 + q, pe + 1, Q, We.width, We.height, 0, L, Z, We.data);
          }
        } else {
          t.texImage2D(34069 + q, 0, Q, L, Z, ae[q]);
          for (let pe = 0; pe < he.length; pe++) {
            const Ce = he[pe];
            t.texImage2D(34069 + q, pe + 1, Q, L, Z, Ce.image[q]);
          }
        }
      b.__maxMipLevel = he.length;
    }
    E(M, me) && T(34067, M, Ae.width, Ae.height), b.__version = M.version, M.onUpdate && M.onUpdate(M);
  }
  function G(b, M, V, k) {
    const re = M.texture, ae = s.convert(re.format), Ae = s.convert(re.type), me = S(re.internalFormat, ae, Ae);
    k === 32879 || k === 35866 ? t.texImage3D(k, 0, me, M.width, M.height, M.depth, 0, ae, Ae, null) : t.texImage2D(k, 0, me, M.width, M.height, 0, ae, Ae, null), t.bindFramebuffer(36160, b), r.framebufferTexture2D(36160, V, k, n.get(re).__webglTexture, 0), t.bindFramebuffer(36160, null);
  }
  function Ne(b, M, V) {
    if (r.bindRenderbuffer(36161, b), M.depthBuffer && !M.stencilBuffer) {
      let k = 33189;
      if (V) {
        const re = M.depthTexture;
        re && re.isDepthTexture && (re.type === 1015 ? k = 36012 : re.type === 1014 && (k = 33190));
        const ae = be(M);
        r.renderbufferStorageMultisample(36161, ae, k, M.width, M.height);
      } else
        r.renderbufferStorage(36161, k, M.width, M.height);
      r.framebufferRenderbuffer(36160, 36096, 36161, b);
    } else if (M.depthBuffer && M.stencilBuffer) {
      if (V) {
        const k = be(M);
        r.renderbufferStorageMultisample(36161, k, 35056, M.width, M.height);
      } else
        r.renderbufferStorage(36161, 34041, M.width, M.height);
      r.framebufferRenderbuffer(36160, 33306, 36161, b);
    } else {
      const k = M.texture, re = s.convert(k.format), ae = s.convert(k.type), Ae = S(k.internalFormat, re, ae);
      if (V) {
        const me = be(M);
        r.renderbufferStorageMultisample(36161, me, Ae, M.width, M.height);
      } else
        r.renderbufferStorage(36161, Ae, M.width, M.height);
    }
    r.bindRenderbuffer(36161, null);
  }
  function Se(b, M) {
    if (M && M.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(36160, b), !(M.depthTexture && M.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(M.depthTexture).__webglTexture || M.depthTexture.image.width !== M.width || M.depthTexture.image.height !== M.height) && (M.depthTexture.image.width = M.width, M.depthTexture.image.height = M.height, M.depthTexture.needsUpdate = !0), C(M.depthTexture, 0);
    const k = n.get(M.depthTexture).__webglTexture;
    if (M.depthTexture.format === 1026)
      r.framebufferTexture2D(36160, 36096, 3553, k, 0);
    else if (M.depthTexture.format === 1027)
      r.framebufferTexture2D(36160, 33306, 3553, k, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function _e(b) {
    const M = n.get(b), V = b.isWebGLCubeRenderTarget === !0;
    if (b.depthTexture) {
      if (V) throw new Error("target.depthTexture not supported in Cube render targets");
      Se(M.__webglFramebuffer, b);
    } else if (V) {
      M.__webglDepthbuffer = [];
      for (let k = 0; k < 6; k++)
        t.bindFramebuffer(36160, M.__webglFramebuffer[k]), M.__webglDepthbuffer[k] = r.createRenderbuffer(), Ne(M.__webglDepthbuffer[k], b, !1);
    } else
      t.bindFramebuffer(36160, M.__webglFramebuffer), M.__webglDepthbuffer = r.createRenderbuffer(), Ne(M.__webglDepthbuffer, b, !1);
    t.bindFramebuffer(36160, null);
  }
  function fe(b) {
    const M = b.texture, V = n.get(b), k = n.get(M);
    b.addEventListener("dispose", N), k.__webglTexture = r.createTexture(), k.__version = M.version, a.memory.textures++;
    const re = b.isWebGLCubeRenderTarget === !0, ae = b.isWebGLMultisampleRenderTarget === !0, Ae = M.isDataTexture3D || M.isDataTexture2DArray, me = g(b) || o;
    if (o && M.format === 1022 && (M.type === 1015 || M.type === 1016) && (M.format = 1023, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), re) {
      V.__webglFramebuffer = [];
      for (let L = 0; L < 6; L++)
        V.__webglFramebuffer[L] = r.createFramebuffer();
    } else if (V.__webglFramebuffer = r.createFramebuffer(), ae)
      if (o) {
        V.__webglMultisampledFramebuffer = r.createFramebuffer(), V.__webglColorRenderbuffer = r.createRenderbuffer(), r.bindRenderbuffer(36161, V.__webglColorRenderbuffer);
        const L = s.convert(M.format), Z = s.convert(M.type), Q = S(M.internalFormat, L, Z), he = be(b);
        r.renderbufferStorageMultisample(36161, he, Q, b.width, b.height), t.bindFramebuffer(36160, V.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(36160, 36064, 36161, V.__webglColorRenderbuffer), r.bindRenderbuffer(36161, null), b.depthBuffer && (V.__webglDepthRenderbuffer = r.createRenderbuffer(), Ne(V.__webglDepthRenderbuffer, b, !0)), t.bindFramebuffer(36160, null);
      } else
        console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
    if (re) {
      t.bindTexture(34067, k.__webglTexture), se(34067, M, me);
      for (let L = 0; L < 6; L++)
        G(V.__webglFramebuffer[L], b, 36064, 34069 + L);
      E(M, me) && T(34067, M, b.width, b.height), t.bindTexture(34067, null);
    } else {
      let L = 3553;
      Ae && (o ? L = M.isDataTexture3D ? 32879 : 35866 : console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")), t.bindTexture(L, k.__webglTexture), se(L, M, me), G(V.__webglFramebuffer, b, 36064, L), E(M, me) && T(3553, M, b.width, b.height), t.bindTexture(3553, null);
    }
    b.depthBuffer && _e(b);
  }
  function Te(b) {
    const M = b.texture, V = g(b) || o;
    if (E(M, V)) {
      const k = b.isWebGLCubeRenderTarget ? 34067 : 3553, re = n.get(M).__webglTexture;
      t.bindTexture(k, re), T(k, M, b.width, b.height), t.bindTexture(k, null);
    }
  }
  function Me(b) {
    if (b.isWebGLMultisampleRenderTarget)
      if (o) {
        const M = b.width, V = b.height;
        let k = 16384;
        b.depthBuffer && (k |= 256), b.stencilBuffer && (k |= 1024);
        const re = n.get(b);
        t.bindFramebuffer(36008, re.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, re.__webglFramebuffer), r.blitFramebuffer(0, 0, M, V, 0, 0, M, V, k, 9728), t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, re.__webglMultisampledFramebuffer);
      } else
        console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
  }
  function be(b) {
    return o && b.isWebGLMultisampleRenderTarget ? Math.min(d, b.samples) : 0;
  }
  function Y(b) {
    const M = a.render.frame;
    u.get(b) !== M && (u.set(b, M), b.update());
  }
  let $ = !1, ee = !1;
  function oe(b, M) {
    b && b.isWebGLRenderTarget && ($ === !1 && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), $ = !0), b = b.texture), C(b, M);
  }
  function ie(b, M) {
    b && b.isWebGLCubeRenderTarget && (ee === !1 && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), ee = !0), b = b.texture), W(b, M);
  }
  this.allocateTextureUnit = A, this.resetTextureUnits = U, this.setTexture2D = C, this.setTexture2DArray = D, this.setTexture3D = R, this.setTextureCube = W, this.setupRenderTarget = fe, this.updateRenderTargetMipmap = Te, this.updateMultisampleRenderTarget = Me, this.safeSetTexture2D = oe, this.safeSetTextureCube = ie;
}
function Su(r, e, t) {
  const n = t.isWebGL2;
  function i(s) {
    let a;
    if (s === 1009) return 5121;
    if (s === 1017) return 32819;
    if (s === 1018) return 32820;
    if (s === 1019) return 33635;
    if (s === 1010) return 5120;
    if (s === 1011) return 5122;
    if (s === 1012) return 5123;
    if (s === 1013) return 5124;
    if (s === 1014) return 5125;
    if (s === 1015) return 5126;
    if (s === 1016)
      return n ? 5131 : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (s === 1021) return 6406;
    if (s === 1022) return 6407;
    if (s === 1023) return 6408;
    if (s === 1024) return 6409;
    if (s === 1025) return 6410;
    if (s === 1026) return 6402;
    if (s === 1027) return 34041;
    if (s === 1028) return 6403;
    if (s === 1029) return 36244;
    if (s === 1030) return 33319;
    if (s === 1031) return 33320;
    if (s === 1032) return 36248;
    if (s === 1033) return 36249;
    if (s === 33776 || s === 33777 || s === 33778 || s === 33779)
      if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (s === 33776) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === 33777) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === 33778) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === 33779) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === 35840 || s === 35841 || s === 35842 || s === 35843)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (s === 35840) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === 35841) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === 35842) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === 35843) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === 36196)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if ((s === 37492 || s === 37496) && (a = e.get("WEBGL_compressed_texture_etc"), a !== null)) {
      if (s === 37492) return a.COMPRESSED_RGB8_ETC2;
      if (s === 37496) return a.COMPRESSED_RGBA8_ETC2_EAC;
    }
    if (s === 37808 || s === 37809 || s === 37810 || s === 37811 || s === 37812 || s === 37813 || s === 37814 || s === 37815 || s === 37816 || s === 37817 || s === 37818 || s === 37819 || s === 37820 || s === 37821 || s === 37840 || s === 37841 || s === 37842 || s === 37843 || s === 37844 || s === 37845 || s === 37846 || s === 37847 || s === 37848 || s === 37849 || s === 37850 || s === 37851 || s === 37852 || s === 37853)
      return a = e.get("WEBGL_compressed_texture_astc"), a !== null ? s : null;
    if (s === 36492)
      return a = e.get("EXT_texture_compression_bptc"), a !== null ? s : null;
    if (s === 1020)
      return n ? 34042 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null);
  }
  return { convert: i };
}
class ba extends at {
  constructor(e = []) {
    super(), this.cameras = e;
  }
}
ba.prototype.isArrayCamera = !0;
class kt extends Re {
  constructor() {
    super(), this.type = "Group";
  }
}
kt.prototype.isGroup = !0;
const Eu = { type: "move" };
class pr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new kt(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new kt(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new w(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new w()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new kt(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new w(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new w()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, s = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred")
      if (o !== null && (i = t.getPose(e.targetRaySpace, n), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Eu))), c && e.hand) {
        a = !0;
        for (const x of e.hand.values()) {
          const _ = t.getJointPose(x, n);
          if (c.joints[x.jointName] === void 0) {
            const p = new kt();
            p.matrixAutoUpdate = !1, p.visible = !1, c.joints[x.jointName] = p, c.add(p);
          }
          const g = c.joints[x.jointName];
          _ !== null && (g.matrix.fromArray(_.transform.matrix), g.matrix.decompose(g.position, g.rotation, g.scale), g.jointRadius = _.radius), g.visible = _ !== null;
        }
        const h = c.joints["index-finger-tip"], d = c.joints["thumb-tip"], u = h.position.distanceTo(d.position), f = 0.02, m = 5e-3;
        c.inputState.pinching && u > f + m ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && u <= f - m && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
    return o !== null && (o.visible = i !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this;
  }
}
class Tu extends sn {
  constructor(e, t) {
    super();
    const n = this, i = e.state;
    let s = null, a = 1, o = null, l = "local-floor", c = null;
    const h = [], d = /* @__PURE__ */ new Map(), u = new at();
    u.layers.enable(1), u.viewport = new Ie();
    const f = new at();
    f.layers.enable(2), f.viewport = new Ie();
    const m = [u, f], x = new ba();
    x.layers.enable(1), x.layers.enable(2);
    let _ = null, g = null;
    this.enabled = !1, this.isPresenting = !1, this.getController = function(U) {
      let A = h[U];
      return A === void 0 && (A = new pr(), h[U] = A), A.getTargetRaySpace();
    }, this.getControllerGrip = function(U) {
      let A = h[U];
      return A === void 0 && (A = new pr(), h[U] = A), A.getGripSpace();
    }, this.getHand = function(U) {
      let A = h[U];
      return A === void 0 && (A = new pr(), h[U] = A), A.getHandSpace();
    };
    function p(U) {
      const A = d.get(U.inputSource);
      A && A.dispatchEvent({ type: U.type, data: U.inputSource });
    }
    function E() {
      d.forEach(function(U, A) {
        U.disconnect(A);
      }), d.clear(), _ = null, g = null, i.bindXRFramebuffer(null), e.setRenderTarget(e.getRenderTarget()), H.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(U) {
      a = U, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(U) {
      l = U, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return o;
    }, this.getSession = function() {
      return s;
    }, this.setSession = async function(U) {
      if (s = U, s !== null) {
        s.addEventListener("select", p), s.addEventListener("selectstart", p), s.addEventListener("selectend", p), s.addEventListener("squeeze", p), s.addEventListener("squeezestart", p), s.addEventListener("squeezeend", p), s.addEventListener("end", E), s.addEventListener("inputsourceschange", T);
        const A = t.getContextAttributes();
        A.xrCompatible !== !0 && await t.makeXRCompatible();
        const C = {
          antialias: A.antialias,
          alpha: A.alpha,
          depth: A.depth,
          stencil: A.stencil,
          framebufferScaleFactor: a
        }, D = new XRWebGLLayer(s, t, C);
        s.updateRenderState({ baseLayer: D }), o = await s.requestReferenceSpace(l), H.setContext(s), H.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    };
    function T(U) {
      const A = s.inputSources;
      for (let C = 0; C < h.length; C++)
        d.set(A[C], h[C]);
      for (let C = 0; C < U.removed.length; C++) {
        const D = U.removed[C], R = d.get(D);
        R && (R.dispatchEvent({ type: "disconnected", data: D }), d.delete(D));
      }
      for (let C = 0; C < U.added.length; C++) {
        const D = U.added[C], R = d.get(D);
        R && R.dispatchEvent({ type: "connected", data: D });
      }
    }
    const S = new w(), v = new w();
    function P(U, A, C) {
      S.setFromMatrixPosition(A.matrixWorld), v.setFromMatrixPosition(C.matrixWorld);
      const D = S.distanceTo(v), R = A.projectionMatrix.elements, W = C.projectionMatrix.elements, J = R[14] / (R[10] - 1), X = R[14] / (R[10] + 1), se = (R[9] + 1) / R[5], ne = (R[9] - 1) / R[5], ce = (R[8] - 1) / R[0], de = (W[8] + 1) / W[0], G = J * ce, Ne = J * de, Se = D / (-ce + de), _e = Se * -ce;
      A.matrixWorld.decompose(U.position, U.quaternion, U.scale), U.translateX(_e), U.translateZ(Se), U.matrixWorld.compose(U.position, U.quaternion, U.scale), U.matrixWorldInverse.copy(U.matrixWorld).invert();
      const fe = J + Se, Te = X + Se, Me = G - _e, be = Ne + (D - _e), Y = se * X / Te * fe, $ = ne * X / Te * fe;
      U.projectionMatrix.makePerspective(Me, be, Y, $, fe, Te);
    }
    function N(U, A) {
      A === null ? U.matrixWorld.copy(U.matrix) : U.matrixWorld.multiplyMatrices(A.matrixWorld, U.matrix), U.matrixWorldInverse.copy(U.matrixWorld).invert();
    }
    this.getCamera = function(U) {
      x.near = f.near = u.near = U.near, x.far = f.far = u.far = U.far, (_ !== x.near || g !== x.far) && (s.updateRenderState({
        depthNear: x.near,
        depthFar: x.far
      }), _ = x.near, g = x.far);
      const A = U.parent, C = x.cameras;
      N(x, A);
      for (let R = 0; R < C.length; R++)
        N(C[R], A);
      U.matrixWorld.copy(x.matrixWorld), U.matrix.copy(x.matrix), U.matrix.decompose(U.position, U.quaternion, U.scale);
      const D = U.children;
      for (let R = 0, W = D.length; R < W; R++)
        D[R].updateMatrixWorld(!0);
      return C.length === 2 ? P(x, u, f) : x.projectionMatrix.copy(u.projectionMatrix), x;
    };
    let z = null;
    function F(U, A) {
      if (c = A.getViewerPose(o), c !== null) {
        const D = c.views, R = s.renderState.baseLayer;
        i.bindXRFramebuffer(R.framebuffer);
        let W = !1;
        D.length !== x.cameras.length && (x.cameras.length = 0, W = !0);
        for (let J = 0; J < D.length; J++) {
          const X = D[J], se = R.getViewport(X), ne = m[J];
          ne.matrix.fromArray(X.transform.matrix), ne.projectionMatrix.fromArray(X.projectionMatrix), ne.viewport.set(se.x, se.y, se.width, se.height), J === 0 && x.matrix.copy(ne.matrix), W === !0 && x.cameras.push(ne);
        }
      }
      const C = s.inputSources;
      for (let D = 0; D < h.length; D++) {
        const R = h[D], W = C[D];
        R.update(W, A, o);
      }
      z && z(U, A);
    }
    const H = new ha();
    H.setAnimationLoop(F), this.setAnimationLoop = function(U) {
      z = U;
    }, this.dispose = function() {
    };
  }
}
function Au(r) {
  function e(g, p) {
    g.fogColor.value.copy(p.color), p.isFog ? (g.fogNear.value = p.near, g.fogFar.value = p.far) : p.isFogExp2 && (g.fogDensity.value = p.density);
  }
  function t(g, p, E, T) {
    p.isMeshBasicMaterial ? n(g, p) : p.isMeshLambertMaterial ? (n(g, p), l(g, p)) : p.isMeshToonMaterial ? (n(g, p), h(g, p)) : p.isMeshPhongMaterial ? (n(g, p), c(g, p)) : p.isMeshStandardMaterial ? (n(g, p), p.isMeshPhysicalMaterial ? u(g, p) : d(g, p)) : p.isMeshMatcapMaterial ? (n(g, p), f(g, p)) : p.isMeshDepthMaterial ? (n(g, p), m(g, p)) : p.isMeshDistanceMaterial ? (n(g, p), x(g, p)) : p.isMeshNormalMaterial ? (n(g, p), _(g, p)) : p.isLineBasicMaterial ? (i(g, p), p.isLineDashedMaterial && s(g, p)) : p.isPointsMaterial ? a(g, p, E, T) : p.isSpriteMaterial ? o(g, p) : p.isShadowMaterial ? (g.color.value.copy(p.color), g.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function n(g, p) {
    g.opacity.value = p.opacity, p.color && g.diffuse.value.copy(p.color), p.emissive && g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (g.map.value = p.map), p.alphaMap && (g.alphaMap.value = p.alphaMap), p.specularMap && (g.specularMap.value = p.specularMap);
    const E = r.get(p).envMap;
    if (E) {
      g.envMap.value = E, g.flipEnvMap.value = E.isCubeTexture && E._needsFlipEnvMap ? -1 : 1, g.reflectivity.value = p.reflectivity, g.refractionRatio.value = p.refractionRatio;
      const v = r.get(E).__maxMipLevel;
      v !== void 0 && (g.maxMipLevel.value = v);
    }
    p.lightMap && (g.lightMap.value = p.lightMap, g.lightMapIntensity.value = p.lightMapIntensity), p.aoMap && (g.aoMap.value = p.aoMap, g.aoMapIntensity.value = p.aoMapIntensity);
    let T;
    p.map ? T = p.map : p.specularMap ? T = p.specularMap : p.displacementMap ? T = p.displacementMap : p.normalMap ? T = p.normalMap : p.bumpMap ? T = p.bumpMap : p.roughnessMap ? T = p.roughnessMap : p.metalnessMap ? T = p.metalnessMap : p.alphaMap ? T = p.alphaMap : p.emissiveMap ? T = p.emissiveMap : p.clearcoatMap ? T = p.clearcoatMap : p.clearcoatNormalMap ? T = p.clearcoatNormalMap : p.clearcoatRoughnessMap && (T = p.clearcoatRoughnessMap), T !== void 0 && (T.isWebGLRenderTarget && (T = T.texture), T.matrixAutoUpdate === !0 && T.updateMatrix(), g.uvTransform.value.copy(T.matrix));
    let S;
    p.aoMap ? S = p.aoMap : p.lightMap && (S = p.lightMap), S !== void 0 && (S.isWebGLRenderTarget && (S = S.texture), S.matrixAutoUpdate === !0 && S.updateMatrix(), g.uv2Transform.value.copy(S.matrix));
  }
  function i(g, p) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity;
  }
  function s(g, p) {
    g.dashSize.value = p.dashSize, g.totalSize.value = p.dashSize + p.gapSize, g.scale.value = p.scale;
  }
  function a(g, p, E, T) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.size.value = p.size * E, g.scale.value = T * 0.5, p.map && (g.map.value = p.map), p.alphaMap && (g.alphaMap.value = p.alphaMap);
    let S;
    p.map ? S = p.map : p.alphaMap && (S = p.alphaMap), S !== void 0 && (S.matrixAutoUpdate === !0 && S.updateMatrix(), g.uvTransform.value.copy(S.matrix));
  }
  function o(g, p) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.rotation.value = p.rotation, p.map && (g.map.value = p.map), p.alphaMap && (g.alphaMap.value = p.alphaMap);
    let E;
    p.map ? E = p.map : p.alphaMap && (E = p.alphaMap), E !== void 0 && (E.matrixAutoUpdate === !0 && E.updateMatrix(), g.uvTransform.value.copy(E.matrix));
  }
  function l(g, p) {
    p.emissiveMap && (g.emissiveMap.value = p.emissiveMap);
  }
  function c(g, p) {
    g.specular.value.copy(p.specular), g.shininess.value = Math.max(p.shininess, 1e-4), p.emissiveMap && (g.emissiveMap.value = p.emissiveMap), p.bumpMap && (g.bumpMap.value = p.bumpMap, g.bumpScale.value = p.bumpScale, p.side === 1 && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, g.normalScale.value.copy(p.normalScale), p.side === 1 && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias);
  }
  function h(g, p) {
    p.gradientMap && (g.gradientMap.value = p.gradientMap), p.emissiveMap && (g.emissiveMap.value = p.emissiveMap), p.bumpMap && (g.bumpMap.value = p.bumpMap, g.bumpScale.value = p.bumpScale, p.side === 1 && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, g.normalScale.value.copy(p.normalScale), p.side === 1 && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias);
  }
  function d(g, p) {
    g.roughness.value = p.roughness, g.metalness.value = p.metalness, p.roughnessMap && (g.roughnessMap.value = p.roughnessMap), p.metalnessMap && (g.metalnessMap.value = p.metalnessMap), p.emissiveMap && (g.emissiveMap.value = p.emissiveMap), p.bumpMap && (g.bumpMap.value = p.bumpMap, g.bumpScale.value = p.bumpScale, p.side === 1 && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, g.normalScale.value.copy(p.normalScale), p.side === 1 && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias), r.get(p).envMap && (g.envMapIntensity.value = p.envMapIntensity);
  }
  function u(g, p) {
    d(g, p), g.reflectivity.value = p.reflectivity, g.clearcoat.value = p.clearcoat, g.clearcoatRoughness.value = p.clearcoatRoughness, p.sheen && g.sheen.value.copy(p.sheen), p.clearcoatMap && (g.clearcoatMap.value = p.clearcoatMap), p.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap), p.clearcoatNormalMap && (g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), g.clearcoatNormalMap.value = p.clearcoatNormalMap, p.side === 1 && g.clearcoatNormalScale.value.negate()), g.transmission.value = p.transmission, p.transmissionMap && (g.transmissionMap.value = p.transmissionMap);
  }
  function f(g, p) {
    p.matcap && (g.matcap.value = p.matcap), p.bumpMap && (g.bumpMap.value = p.bumpMap, g.bumpScale.value = p.bumpScale, p.side === 1 && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, g.normalScale.value.copy(p.normalScale), p.side === 1 && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias);
  }
  function m(g, p) {
    p.displacementMap && (g.displacementMap.value = p.displacementMap, g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias);
  }
  function x(g, p) {
    p.displacementMap && (g.displacementMap.value = p.displacementMap, g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias), g.referencePosition.value.copy(p.referencePosition), g.nearDistance.value = p.nearDistance, g.farDistance.value = p.farDistance;
  }
  function _(g, p) {
    p.bumpMap && (g.bumpMap.value = p.bumpMap, g.bumpScale.value = p.bumpScale, p.side === 1 && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, g.normalScale.value.copy(p.normalScale), p.side === 1 && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias);
  }
  return {
    refreshFogUniforms: e,
    refreshMaterialUniforms: t
  };
}
function Lu() {
  const r = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
  return r.style.display = "block", r;
}
function Fe(r) {
  r = r || {};
  const e = r.canvas !== void 0 ? r.canvas : Lu(), t = r.context !== void 0 ? r.context : null, n = r.alpha !== void 0 ? r.alpha : !1, i = r.depth !== void 0 ? r.depth : !0, s = r.stencil !== void 0 ? r.stencil : !0, a = r.antialias !== void 0 ? r.antialias : !1, o = r.premultipliedAlpha !== void 0 ? r.premultipliedAlpha : !0, l = r.preserveDrawingBuffer !== void 0 ? r.preserveDrawingBuffer : !1, c = r.powerPreference !== void 0 ? r.powerPreference : "default", h = r.failIfMajorPerformanceCaveat !== void 0 ? r.failIfMajorPerformanceCaveat : !1;
  let d = null, u = null;
  const f = [], m = [];
  this.domElement = e, this.debug = {
    /**
     * Enables error checking and reporting when shader programs are being compiled
     * @type {boolean}
     */
    checkShaderErrors: !0
  }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = 3e3, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1;
  const x = this;
  let _ = !1, g = 0, p = 0, E = null, T = -1, S = null;
  const v = new Ie(), P = new Ie();
  let N = null, z = e.width, F = e.height, H = 1, U = null, A = null;
  const C = new Ie(0, 0, z, F), D = new Ie(0, 0, z, F);
  let R = !1;
  const W = new Ii();
  let J = !1, X = !1;
  const se = new ue(), ne = new w(), ce = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
  function de() {
    return E === null ? H : 1;
  }
  let G = t;
  function Ne(y, B) {
    for (let I = 0; I < y.length; I++) {
      const O = y[I], te = e.getContext(O, B);
      if (te !== null) return te;
    }
    return null;
  }
  try {
    const y = {
      alpha: n,
      depth: i,
      stencil: s,
      antialias: a,
      premultipliedAlpha: o,
      preserveDrawingBuffer: l,
      powerPreference: c,
      failIfMajorPerformanceCaveat: h
    };
    if (e.addEventListener("webglcontextlost", pe, !1), e.addEventListener("webglcontextrestored", Ce, !1), G === null) {
      const B = ["webgl2", "webgl", "experimental-webgl"];
      if (x.isWebGL1Renderer === !0 && B.shift(), G = Ne(B, y), G === null)
        throw Ne(B) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    }
    G.getShaderPrecisionFormat === void 0 && (G.getShaderPrecisionFormat = function() {
      return { rangeMin: 1, rangeMax: 1, precision: 1 };
    });
  } catch (y) {
    throw console.error("THREE.WebGLRenderer: " + y.message), y;
  }
  let Se, _e, fe, Te, Me, be, Y, $, ee, oe, ie, b, M, V, k, re, ae, Ae, me, L, Z, Q;
  function he() {
    Se = new Jc(G), _e = new Yc(G, Se, r), Se.init(_e), Z = new Su(G, Se, _e), fe = new wu(G, Se, _e), Te = new Kc(), Me = new hu(), be = new bu(G, Se, fe, Me, _e, Z, Te), Y = new Zc(x), $ = new Mo(G, _e), Q = new qc(G, Se, $, _e), ee = new $c(G, $, Te, Q), oe = new ih(G, ee, $, Te), Ae = new nh(G), k = new jc(Me), ie = new cu(x, Y, Se, _e, Q, k), b = new Au(Me), M = new fu(Me), V = new vu(Se, _e), ae = new Wc(x, Y, fe, oe, o), re = new wa(x, oe, _e), me = new Xc(G, Se, Te, _e), L = new Qc(G, Se, Te, _e), Te.programs = ie.programs, x.capabilities = _e, x.extensions = Se, x.properties = Me, x.renderLists = M, x.shadowMap = re, x.state = fe, x.info = Te;
  }
  he();
  const q = new Tu(x, G);
  this.xr = q, this.getContext = function() {
    return G;
  }, this.getContextAttributes = function() {
    return G.getContextAttributes();
  }, this.forceContextLoss = function() {
    const y = Se.get("WEBGL_lose_context");
    y && y.loseContext();
  }, this.forceContextRestore = function() {
    const y = Se.get("WEBGL_lose_context");
    y && y.restoreContext();
  }, this.getPixelRatio = function() {
    return H;
  }, this.setPixelRatio = function(y) {
    y !== void 0 && (H = y, this.setSize(z, F, !1));
  }, this.getSize = function(y) {
    return y === void 0 && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), y = new j()), y.set(z, F);
  }, this.setSize = function(y, B, I) {
    if (q.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    z = y, F = B, e.width = Math.floor(y * H), e.height = Math.floor(B * H), I !== !1 && (e.style.width = y + "px", e.style.height = B + "px"), this.setViewport(0, 0, y, B);
  }, this.getDrawingBufferSize = function(y) {
    return y === void 0 && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), y = new j()), y.set(z * H, F * H).floor();
  }, this.setDrawingBufferSize = function(y, B, I) {
    z = y, F = B, H = I, e.width = Math.floor(y * I), e.height = Math.floor(B * I), this.setViewport(0, 0, y, B);
  }, this.getCurrentViewport = function(y) {
    return y === void 0 && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), y = new Ie()), y.copy(v);
  }, this.getViewport = function(y) {
    return y.copy(C);
  }, this.setViewport = function(y, B, I, O) {
    y.isVector4 ? C.set(y.x, y.y, y.z, y.w) : C.set(y, B, I, O), fe.viewport(v.copy(C).multiplyScalar(H).floor());
  }, this.getScissor = function(y) {
    return y.copy(D);
  }, this.setScissor = function(y, B, I, O) {
    y.isVector4 ? D.set(y.x, y.y, y.z, y.w) : D.set(y, B, I, O), fe.scissor(P.copy(D).multiplyScalar(H).floor());
  }, this.getScissorTest = function() {
    return R;
  }, this.setScissorTest = function(y) {
    fe.setScissorTest(R = y);
  }, this.setOpaqueSort = function(y) {
    U = y;
  }, this.setTransparentSort = function(y) {
    A = y;
  }, this.getClearColor = function(y) {
    return y === void 0 && (console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"), y = new le()), y.copy(ae.getClearColor());
  }, this.setClearColor = function() {
    ae.setClearColor.apply(ae, arguments);
  }, this.getClearAlpha = function() {
    return ae.getClearAlpha();
  }, this.setClearAlpha = function() {
    ae.setClearAlpha.apply(ae, arguments);
  }, this.clear = function(y, B, I) {
    let O = 0;
    (y === void 0 || y) && (O |= 16384), (B === void 0 || B) && (O |= 256), (I === void 0 || I) && (O |= 1024), G.clear(O);
  }, this.clearColor = function() {
    this.clear(!0, !1, !1);
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1);
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0);
  }, this.dispose = function() {
    e.removeEventListener("webglcontextlost", pe, !1), e.removeEventListener("webglcontextrestored", Ce, !1), M.dispose(), V.dispose(), Me.dispose(), Y.dispose(), oe.dispose(), Q.dispose(), q.dispose(), q.removeEventListener("sessionstart", jr), q.removeEventListener("sessionend", Zr), Jt.stop();
  };
  function pe(y) {
    y.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), _ = !0;
  }
  function Ce() {
    console.log("THREE.WebGLRenderer: Context Restored."), _ = !1;
    const y = Te.autoReset, B = re.enabled, I = re.autoUpdate, O = re.needsUpdate, te = re.type;
    he(), Te.autoReset = y, re.enabled = B, re.autoUpdate = I, re.needsUpdate = O, re.type = te;
  }
  function We(y) {
    const B = y.target;
    B.removeEventListener("dispose", We), Zt(B);
  }
  function Zt(y) {
    He(y), Me.remove(y);
  }
  function He(y) {
    const B = Me.get(y).programs;
    B !== void 0 && B.forEach(function(I) {
      ie.releaseProgram(I);
    });
  }
  function Tt(y, B) {
    y.render(function(I) {
      x.renderBufferImmediate(I, B);
    });
  }
  this.renderBufferImmediate = function(y, B) {
    Q.initAttributes();
    const I = Me.get(y);
    y.hasPositions && !I.position && (I.position = G.createBuffer()), y.hasNormals && !I.normal && (I.normal = G.createBuffer()), y.hasUvs && !I.uv && (I.uv = G.createBuffer()), y.hasColors && !I.color && (I.color = G.createBuffer());
    const O = B.getAttributes();
    y.hasPositions && (G.bindBuffer(34962, I.position), G.bufferData(34962, y.positionArray, 35048), Q.enableAttribute(O.position), G.vertexAttribPointer(O.position, 3, 5126, !1, 0, 0)), y.hasNormals && (G.bindBuffer(34962, I.normal), G.bufferData(34962, y.normalArray, 35048), Q.enableAttribute(O.normal), G.vertexAttribPointer(O.normal, 3, 5126, !1, 0, 0)), y.hasUvs && (G.bindBuffer(34962, I.uv), G.bufferData(34962, y.uvArray, 35048), Q.enableAttribute(O.uv), G.vertexAttribPointer(O.uv, 2, 5126, !1, 0, 0)), y.hasColors && (G.bindBuffer(34962, I.color), G.bufferData(34962, y.colorArray, 35048), Q.enableAttribute(O.color), G.vertexAttribPointer(O.color, 3, 5126, !1, 0, 0)), Q.disableUnusedAttributes(), G.drawArrays(4, 0, y.count), y.count = 0;
  }, this.renderBufferDirect = function(y, B, I, O, te, Ee) {
    B === null && (B = ce);
    const ge = te.isMesh && te.matrixWorld.determinant() < 0, ye = es(y, B, O, te);
    fe.setMaterial(O, ge);
    let Be = I.index;
    const ve = I.attributes.position;
    if (Be === null) {
      if (ve === void 0 || ve.count === 0) return;
    } else if (Be.count === 0)
      return;
    let Le = 1;
    O.wireframe === !0 && (Be = ee.getWireframeAttribute(I), Le = 2), (O.morphTargets || O.morphNormals) && Ae.update(te, I, O, ye), Q.setup(te, O, ye, I, Be);
    let xe, Pe = me;
    Be !== null && (xe = $.get(Be), Pe = L, Pe.setIndex(xe));
    const vt = Be !== null ? Be.count : ve.count, nt = I.drawRange.start * Le, $t = I.drawRange.count * Le, Xe = Ee !== null ? Ee.start * Le : 0, Qt = Ee !== null ? Ee.count * Le : 1 / 0, qe = Math.max(nt, Xe), Hi = Math.min(vt, nt + $t, Xe + Qt) - 1, st = Math.max(0, Hi - qe + 1);
    if (st !== 0) {
      if (te.isMesh)
        O.wireframe === !0 ? (fe.setLineWidth(O.wireframeLinewidth * de()), Pe.setMode(1)) : Pe.setMode(4);
      else if (te.isLine) {
        let At = O.linewidth;
        At === void 0 && (At = 1), fe.setLineWidth(At * de()), te.isLineSegments ? Pe.setMode(1) : te.isLineLoop ? Pe.setMode(2) : Pe.setMode(3);
      } else te.isPoints ? Pe.setMode(0) : te.isSprite && Pe.setMode(4);
      if (te.isInstancedMesh)
        Pe.renderInstances(qe, st, te.count);
      else if (I.isInstancedBufferGeometry) {
        const At = Math.min(I.instanceCount, I._maxInstanceCount);
        Pe.renderInstances(qe, st, At);
      } else
        Pe.render(qe, st);
    }
  }, this.compile = function(y, B) {
    u = V.get(y), u.init(), y.traverseVisible(function(I) {
      I.isLight && I.layers.test(B.layers) && (u.pushLight(I), I.castShadow && u.pushShadow(I));
    }), u.setupLights(), y.traverse(function(I) {
      const O = I.material;
      if (O)
        if (Array.isArray(O))
          for (let te = 0; te < O.length; te++) {
            const Ee = O[te];
            Gi(Ee, y, I);
          }
        else
          Gi(O, y, I);
    });
  };
  let pt = null;
  function ja(y) {
    pt && pt(y);
  }
  function jr() {
    Jt.stop();
  }
  function Zr() {
    Jt.start();
  }
  const Jt = new ha();
  Jt.setAnimationLoop(ja), typeof window < "u" && Jt.setContext(window), this.setAnimationLoop = function(y) {
    pt = y, q.setAnimationLoop(y), y === null ? Jt.stop() : Jt.start();
  }, q.addEventListener("sessionstart", jr), q.addEventListener("sessionend", Zr), this.render = function(y, B) {
    let I, O;
    if (arguments[2] !== void 0 && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."), I = arguments[2]), arguments[3] !== void 0 && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."), O = arguments[3]), B !== void 0 && B.isCamera !== !0) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (_ === !0) return;
    y.autoUpdate === !0 && y.updateMatrixWorld(), B.parent === null && B.updateMatrixWorld(), q.enabled === !0 && q.isPresenting === !0 && (B = q.getCamera(B)), y.isScene === !0 && y.onBeforeRender(x, y, B, I || E), u = V.get(y, m.length), u.init(), m.push(u), se.multiplyMatrices(B.projectionMatrix, B.matrixWorldInverse), W.setFromProjectionMatrix(se), X = this.localClippingEnabled, J = k.init(this.clippingPlanes, X, B), d = M.get(y, f.length), d.init(), f.push(d), Jr(y, B, 0, x.sortObjects), d.finish(), x.sortObjects === !0 && d.sort(U, A), J === !0 && k.beginShadows();
    const te = u.state.shadowsArray;
    re.render(te, y, B), u.setupLights(), u.setupLightsView(B), J === !0 && k.endShadows(), this.info.autoReset === !0 && this.info.reset(), I !== void 0 && this.setRenderTarget(I), ae.render(d, y, B, O);
    const Ee = d.opaque, ge = d.transparent;
    Ee.length > 0 && $r(Ee, y, B), ge.length > 0 && $r(ge, y, B), E !== null && (be.updateRenderTargetMipmap(E), be.updateMultisampleRenderTarget(E)), y.isScene === !0 && y.onAfterRender(x, y, B), fe.buffers.depth.setTest(!0), fe.buffers.depth.setMask(!0), fe.buffers.color.setMask(!0), fe.setPolygonOffset(!1), Q.resetDefaultState(), T = -1, S = null, m.pop(), m.length > 0 ? u = m[m.length - 1] : u = null, f.pop(), f.length > 0 ? d = f[f.length - 1] : d = null;
  };
  function Jr(y, B, I, O) {
    if (y.visible === !1) return;
    if (y.layers.test(B.layers)) {
      if (y.isGroup)
        I = y.renderOrder;
      else if (y.isLOD)
        y.autoUpdate === !0 && y.update(B);
      else if (y.isLight)
        u.pushLight(y), y.castShadow && u.pushShadow(y);
      else if (y.isSprite) {
        if (!y.frustumCulled || W.intersectsSprite(y)) {
          O && ne.setFromMatrixPosition(y.matrixWorld).applyMatrix4(se);
          const ge = oe.update(y), ye = y.material;
          ye.visible && d.push(y, ge, ye, I, ne.z, null);
        }
      } else if (y.isImmediateRenderObject)
        O && ne.setFromMatrixPosition(y.matrixWorld).applyMatrix4(se), d.push(y, null, y.material, I, ne.z, null);
      else if ((y.isMesh || y.isLine || y.isPoints) && (y.isSkinnedMesh && y.skeleton.frame !== Te.render.frame && (y.skeleton.update(), y.skeleton.frame = Te.render.frame), !y.frustumCulled || W.intersectsObject(y))) {
        O && ne.setFromMatrixPosition(y.matrixWorld).applyMatrix4(se);
        const ge = oe.update(y), ye = y.material;
        if (Array.isArray(ye)) {
          const Be = ge.groups;
          for (let ve = 0, Le = Be.length; ve < Le; ve++) {
            const xe = Be[ve], Pe = ye[xe.materialIndex];
            Pe && Pe.visible && d.push(y, ge, Pe, I, ne.z, xe);
          }
        } else ye.visible && d.push(y, ge, ye, I, ne.z, null);
      }
    }
    const Ee = y.children;
    for (let ge = 0, ye = Ee.length; ge < ye; ge++)
      Jr(Ee[ge], B, I, O);
  }
  function $r(y, B, I) {
    const O = B.isScene === !0 ? B.overrideMaterial : null;
    for (let te = 0, Ee = y.length; te < Ee; te++) {
      const ge = y[te], ye = ge.object, Be = ge.geometry, ve = O === null ? ge.material : O, Le = ge.group;
      if (I.isArrayCamera) {
        const xe = I.cameras;
        for (let Pe = 0, vt = xe.length; Pe < vt; Pe++) {
          const nt = xe[Pe];
          ye.layers.test(nt.layers) && (fe.viewport(v.copy(nt.viewport)), u.setupLightsView(nt), Qr(ye, B, nt, Be, ve, Le));
        }
      } else
        Qr(ye, B, I, Be, ve, Le);
    }
  }
  function Qr(y, B, I, O, te, Ee) {
    if (y.onBeforeRender(x, B, I, O, te, Ee), y.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse, y.matrixWorld), y.normalMatrix.getNormalMatrix(y.modelViewMatrix), y.isImmediateRenderObject) {
      const ge = es(I, B, te, y);
      fe.setMaterial(te), Q.reset(), Tt(y, ge);
    } else
      x.renderBufferDirect(I, B, O, te, y, Ee);
    y.onAfterRender(x, B, I, O, te, Ee);
  }
  function Gi(y, B, I) {
    B.isScene !== !0 && (B = ce);
    const O = Me.get(y), te = u.state.lights, Ee = u.state.shadowsArray, ge = te.state.version, ye = ie.getParameters(y, te.state, Ee, B, I), Be = ie.getProgramCacheKey(ye);
    let ve = O.programs;
    O.environment = y.isMeshStandardMaterial ? B.environment : null, O.fog = B.fog, O.envMap = Y.get(y.envMap || O.environment), ve === void 0 && (y.addEventListener("dispose", We), ve = /* @__PURE__ */ new Map(), O.programs = ve);
    let Le = ve.get(Be);
    if (Le !== void 0) {
      if (O.currentProgram === Le && O.lightsStateVersion === ge)
        return Kr(y, ye), Le;
    } else
      ye.uniforms = ie.getUniforms(y), y.onBuild(ye, x), y.onBeforeCompile(ye, x), Le = ie.acquireProgram(ye, Be), ve.set(Be, Le), O.uniforms = ye.uniforms;
    const xe = O.uniforms;
    (!y.isShaderMaterial && !y.isRawShaderMaterial || y.clipping === !0) && (xe.clippingPlanes = k.uniform), Kr(y, ye), O.needsLights = Ja(y), O.lightsStateVersion = ge, O.needsLights && (xe.ambientLightColor.value = te.state.ambient, xe.lightProbe.value = te.state.probe, xe.directionalLights.value = te.state.directional, xe.directionalLightShadows.value = te.state.directionalShadow, xe.spotLights.value = te.state.spot, xe.spotLightShadows.value = te.state.spotShadow, xe.rectAreaLights.value = te.state.rectArea, xe.ltc_1.value = te.state.rectAreaLTC1, xe.ltc_2.value = te.state.rectAreaLTC2, xe.pointLights.value = te.state.point, xe.pointLightShadows.value = te.state.pointShadow, xe.hemisphereLights.value = te.state.hemi, xe.directionalShadowMap.value = te.state.directionalShadowMap, xe.directionalShadowMatrix.value = te.state.directionalShadowMatrix, xe.spotShadowMap.value = te.state.spotShadowMap, xe.spotShadowMatrix.value = te.state.spotShadowMatrix, xe.pointShadowMap.value = te.state.pointShadowMap, xe.pointShadowMatrix.value = te.state.pointShadowMatrix);
    const Pe = Le.getUniforms(), vt = Wt.seqWithValue(Pe.seq, xe);
    return O.currentProgram = Le, O.uniformsList = vt, Le;
  }
  function Kr(y, B) {
    const I = Me.get(y);
    I.outputEncoding = B.outputEncoding, I.instancing = B.instancing, I.numClippingPlanes = B.numClippingPlanes, I.numIntersection = B.numClipIntersection, I.vertexAlphas = B.vertexAlphas;
  }
  function es(y, B, I, O) {
    B.isScene !== !0 && (B = ce), be.resetTextureUnits();
    const te = B.fog, Ee = I.isMeshStandardMaterial ? B.environment : null, ge = E === null ? x.outputEncoding : E.texture.encoding, ye = Y.get(I.envMap || Ee), Be = I.vertexColors === !0 && O.geometry && O.geometry.attributes.color && O.geometry.attributes.color.itemSize === 4, ve = Me.get(I), Le = u.state.lights;
    if (J === !0 && (X === !0 || y !== S)) {
      const qe = y === S && I.id === T;
      k.setState(I, y, qe);
    }
    let xe = !1;
    I.version === ve.__version ? (ve.needsLights && ve.lightsStateVersion !== Le.state.version || ve.outputEncoding !== ge || O.isInstancedMesh && ve.instancing === !1 || !O.isInstancedMesh && ve.instancing === !0 || ve.envMap !== ye || I.fog && ve.fog !== te || ve.numClippingPlanes !== void 0 && (ve.numClippingPlanes !== k.numPlanes || ve.numIntersection !== k.numIntersection) || ve.vertexAlphas !== Be) && (xe = !0) : (xe = !0, ve.__version = I.version);
    let Pe = ve.currentProgram;
    xe === !0 && (Pe = Gi(I, B, O));
    let vt = !1, nt = !1, $t = !1;
    const Xe = Pe.getUniforms(), Qt = ve.uniforms;
    if (fe.useProgram(Pe.program) && (vt = !0, nt = !0, $t = !0), I.id !== T && (T = I.id, nt = !0), vt || S !== y) {
      if (Xe.setValue(G, "projectionMatrix", y.projectionMatrix), _e.logarithmicDepthBuffer && Xe.setValue(
        G,
        "logDepthBufFC",
        2 / (Math.log(y.far + 1) / Math.LN2)
      ), S !== y && (S = y, nt = !0, $t = !0), I.isShaderMaterial || I.isMeshPhongMaterial || I.isMeshToonMaterial || I.isMeshStandardMaterial || I.envMap) {
        const qe = Xe.map.cameraPosition;
        qe !== void 0 && qe.setValue(
          G,
          ne.setFromMatrixPosition(y.matrixWorld)
        );
      }
      (I.isMeshPhongMaterial || I.isMeshToonMaterial || I.isMeshLambertMaterial || I.isMeshBasicMaterial || I.isMeshStandardMaterial || I.isShaderMaterial) && Xe.setValue(G, "isOrthographic", y.isOrthographicCamera === !0), (I.isMeshPhongMaterial || I.isMeshToonMaterial || I.isMeshLambertMaterial || I.isMeshBasicMaterial || I.isMeshStandardMaterial || I.isShaderMaterial || I.isShadowMaterial || I.skinning) && Xe.setValue(G, "viewMatrix", y.matrixWorldInverse);
    }
    if (I.skinning) {
      Xe.setOptional(G, O, "bindMatrix"), Xe.setOptional(G, O, "bindMatrixInverse");
      const qe = O.skeleton;
      if (qe) {
        const Hi = qe.bones;
        if (_e.floatVertexTextures) {
          if (qe.boneTexture === null) {
            let st = Math.sqrt(Hi.length * 4);
            st = Ka(st), st = Math.max(st, 4);
            const At = new Float32Array(st * st * 4);
            At.set(qe.boneMatrices);
            const $a = new ca(At, st, st, 1023, 1015);
            qe.boneMatrices = At, qe.boneTexture = $a, qe.boneTextureSize = st;
          }
          Xe.setValue(G, "boneTexture", qe.boneTexture, be), Xe.setValue(G, "boneTextureSize", qe.boneTextureSize);
        } else
          Xe.setOptional(G, qe, "boneMatrices");
      }
    }
    return (nt || ve.receiveShadow !== O.receiveShadow) && (ve.receiveShadow = O.receiveShadow, Xe.setValue(G, "receiveShadow", O.receiveShadow)), nt && (Xe.setValue(G, "toneMappingExposure", x.toneMappingExposure), ve.needsLights && Za(Qt, $t), te && I.fog && b.refreshFogUniforms(Qt, te), b.refreshMaterialUniforms(Qt, I, H, F), Wt.upload(G, ve.uniformsList, Qt, be)), I.isShaderMaterial && I.uniformsNeedUpdate === !0 && (Wt.upload(G, ve.uniformsList, Qt, be), I.uniformsNeedUpdate = !1), I.isSpriteMaterial && Xe.setValue(G, "center", O.center), Xe.setValue(G, "modelViewMatrix", O.modelViewMatrix), Xe.setValue(G, "normalMatrix", O.normalMatrix), Xe.setValue(G, "modelMatrix", O.matrixWorld), Pe;
  }
  function Za(y, B) {
    y.ambientLightColor.needsUpdate = B, y.lightProbe.needsUpdate = B, y.directionalLights.needsUpdate = B, y.directionalLightShadows.needsUpdate = B, y.pointLights.needsUpdate = B, y.pointLightShadows.needsUpdate = B, y.spotLights.needsUpdate = B, y.spotLightShadows.needsUpdate = B, y.rectAreaLights.needsUpdate = B, y.hemisphereLights.needsUpdate = B;
  }
  function Ja(y) {
    return y.isMeshLambertMaterial || y.isMeshToonMaterial || y.isMeshPhongMaterial || y.isMeshStandardMaterial || y.isShadowMaterial || y.isShaderMaterial && y.lights === !0;
  }
  this.getActiveCubeFace = function() {
    return g;
  }, this.getActiveMipmapLevel = function() {
    return p;
  }, this.getRenderTarget = function() {
    return E;
  }, this.setRenderTarget = function(y, B = 0, I = 0) {
    E = y, g = B, p = I, y && Me.get(y).__webglFramebuffer === void 0 && be.setupRenderTarget(y);
    let O = null, te = !1, Ee = !1;
    if (y) {
      const ge = y.texture;
      (ge.isDataTexture3D || ge.isDataTexture2DArray) && (Ee = !0);
      const ye = Me.get(y).__webglFramebuffer;
      y.isWebGLCubeRenderTarget ? (O = ye[B], te = !0) : y.isWebGLMultisampleRenderTarget ? O = Me.get(y).__webglMultisampledFramebuffer : O = ye, v.copy(y.viewport), P.copy(y.scissor), N = y.scissorTest;
    } else
      v.copy(C).multiplyScalar(H).floor(), P.copy(D).multiplyScalar(H).floor(), N = R;
    if (fe.bindFramebuffer(36160, O), fe.viewport(v), fe.scissor(P), fe.setScissorTest(N), te) {
      const ge = Me.get(y.texture);
      G.framebufferTexture2D(36160, 36064, 34069 + B, ge.__webglTexture, I);
    } else if (Ee) {
      const ge = Me.get(y.texture), ye = B || 0;
      G.framebufferTextureLayer(36160, 36064, ge.__webglTexture, I || 0, ye);
    }
  }, this.readRenderTargetPixels = function(y, B, I, O, te, Ee, ge) {
    if (!(y && y.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    let ye = Me.get(y).__webglFramebuffer;
    if (y.isWebGLCubeRenderTarget && ge !== void 0 && (ye = ye[ge]), ye) {
      fe.bindFramebuffer(36160, ye);
      try {
        const Be = y.texture, ve = Be.format, Le = Be.type;
        if (ve !== 1023 && Z.convert(ve) !== G.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        const xe = Le === 1016 && (Se.has("EXT_color_buffer_half_float") || _e.isWebGL2 && Se.has("EXT_color_buffer_float"));
        if (Le !== 1009 && Z.convert(Le) !== G.getParameter(35738) && // Edge and Chrome Mac < 52 (#9513)
        !(Le === 1015 && (_e.isWebGL2 || Se.has("OES_texture_float") || Se.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
        !xe) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        G.checkFramebufferStatus(36160) === 36053 ? B >= 0 && B <= y.width - O && I >= 0 && I <= y.height - te && G.readPixels(B, I, O, te, Z.convert(ve), Z.convert(Le), Ee) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
      } finally {
        const Be = E !== null ? Me.get(E).__webglFramebuffer : null;
        fe.bindFramebuffer(36160, Be);
      }
    }
  }, this.copyFramebufferToTexture = function(y, B, I = 0) {
    const O = Math.pow(2, -I), te = Math.floor(B.image.width * O), Ee = Math.floor(B.image.height * O), ge = Z.convert(B.format);
    be.setTexture2D(B, 0), G.copyTexImage2D(3553, I, ge, y.x, y.y, te, Ee, 0), fe.unbindTexture();
  }, this.copyTextureToTexture = function(y, B, I, O = 0) {
    const te = B.image.width, Ee = B.image.height, ge = Z.convert(I.format), ye = Z.convert(I.type);
    be.setTexture2D(I, 0), G.pixelStorei(37440, I.flipY), G.pixelStorei(37441, I.premultiplyAlpha), G.pixelStorei(3317, I.unpackAlignment), B.isDataTexture ? G.texSubImage2D(3553, O, y.x, y.y, te, Ee, ge, ye, B.image.data) : B.isCompressedTexture ? G.compressedTexSubImage2D(3553, O, y.x, y.y, B.mipmaps[0].width, B.mipmaps[0].height, ge, B.mipmaps[0].data) : G.texSubImage2D(3553, O, y.x, y.y, ge, ye, B.image), O === 0 && I.generateMipmaps && G.generateMipmap(3553), fe.unbindTexture();
  }, this.copyTextureToTexture3D = function(y, B, I, O, te = 0) {
    if (x.isWebGL1Renderer) {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      return;
    }
    const { width: Ee, height: ge, data: ye } = I.image, Be = Z.convert(O.format), ve = Z.convert(O.type);
    let Le;
    if (O.isDataTexture3D)
      be.setTexture3D(O, 0), Le = 32879;
    else if (O.isDataTexture2DArray)
      be.setTexture2DArray(O, 0), Le = 35866;
    else {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
      return;
    }
    G.pixelStorei(37440, O.flipY), G.pixelStorei(37441, O.premultiplyAlpha), G.pixelStorei(3317, O.unpackAlignment);
    const xe = G.getParameter(3314), Pe = G.getParameter(32878), vt = G.getParameter(3316), nt = G.getParameter(3315), $t = G.getParameter(32877);
    G.pixelStorei(3314, Ee), G.pixelStorei(32878, ge), G.pixelStorei(3316, y.min.x), G.pixelStorei(3315, y.min.y), G.pixelStorei(32877, y.min.z), G.texSubImage3D(
      Le,
      te,
      B.x,
      B.y,
      B.z,
      y.max.x - y.min.x + 1,
      y.max.y - y.min.y + 1,
      y.max.z - y.min.z + 1,
      Be,
      ve,
      ye
    ), G.pixelStorei(3314, xe), G.pixelStorei(32878, Pe), G.pixelStorei(3316, vt), G.pixelStorei(3315, nt), G.pixelStorei(32877, $t), te === 0 && O.generateMipmaps && G.generateMipmap(Le), fe.unbindTexture();
  }, this.initTexture = function(y) {
    be.setTexture2D(y, 0), fe.unbindTexture();
  }, this.resetState = function() {
    g = 0, p = 0, E = null, fe.reset(), Q.reset();
  }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
class Ru extends Fe {
}
Ru.prototype.isWebGL1Renderer = !0;
class Fi {
  constructor(e, t = 25e-5) {
    this.name = "", this.color = new le(e), this.density = t;
  }
  clone() {
    return new Fi(this.color, this.density);
  }
  toJSON() {
    return {
      type: "FogExp2",
      color: this.color.getHex(),
      density: this.density
    };
  }
}
Fi.prototype.isFogExp2 = !0;
class Br extends Re {
  constructor() {
    super(), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.background !== null && (t.object.background = this.background.toJSON(e)), this.environment !== null && (t.object.environment = this.environment.toJSON(e)), this.fog !== null && (t.object.fog = this.fog.toJSON()), t;
  }
}
Br.prototype.isScene = !0;
class an {
  constructor(e, t) {
    this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = 35044, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = bt(), this.onUploadCallback = function() {
    };
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, s = this.stride; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = bt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new an(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = bt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
an.prototype.isInterleavedBuffer = !0;
const Ve = new w();
class Yn {
  constructor(e, t, n, i) {
    this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i === !0;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      Ve.x = this.getX(t), Ve.y = this.getY(t), Ve.z = this.getZ(t), Ve.applyMatrix4(e), this.setXYZ(t, Ve.x, Ve.y, Ve.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ve.x = this.getX(t), Ve.y = this.getY(t), Ve.z = this.getZ(t), Ve.applyNormalMatrix(e), this.setXYZ(t, Ve.x, Ve.y, Ve.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ve.x = this.getX(t), Ve.y = this.getY(t), Ve.z = this.getZ(t), Ve.transformDirection(e), this.setXYZ(t, Ve.x, Ve.y, Ve.z);
    return this;
  }
  setX(e, t) {
    return this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    return this.data.array[e * this.data.stride + this.offset];
  }
  getY(e) {
    return this.data.array[e * this.data.stride + this.offset + 1];
  }
  getZ(e) {
    return this.data.array[e * this.data.stride + this.offset + 2];
  }
  getW(e) {
    return this.data.array[e * this.data.stride + this.offset + 3];
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return new Ze(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Yn(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
Yn.prototype.isInterleavedBufferAttribute = !0;
class Sa extends Je {
  constructor(e) {
    super(), this.type = "SpriteMaterial", this.color = new le(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this;
  }
}
Sa.prototype.isSpriteMaterial = !0;
let yn;
const On = /* @__PURE__ */ new w(), Mn = /* @__PURE__ */ new w(), wn = /* @__PURE__ */ new w(), bn = /* @__PURE__ */ new j(), Gn = /* @__PURE__ */ new j(), Ea = /* @__PURE__ */ new ue(), gi = /* @__PURE__ */ new w(), Hn = /* @__PURE__ */ new w(), xi = /* @__PURE__ */ new w(), Ls = /* @__PURE__ */ new j(), mr = /* @__PURE__ */ new j(), Rs = /* @__PURE__ */ new j();
class Cu extends Re {
  constructor(e) {
    if (super(), this.type = "Sprite", yn === void 0) {
      yn = new ze();
      const t = new Float32Array([
        -0.5,
        -0.5,
        0,
        0,
        0,
        0.5,
        -0.5,
        0,
        1,
        0,
        0.5,
        0.5,
        0,
        1,
        1,
        -0.5,
        0.5,
        0,
        0,
        1
      ]), n = new an(t, 5);
      yn.setIndex([0, 1, 2, 0, 2, 3]), yn.setAttribute("position", new Yn(n, 3, 0, !1)), yn.setAttribute("uv", new Yn(n, 2, 3, !1));
    }
    this.geometry = yn, this.material = e !== void 0 ? e : new Sa(), this.center = new j(0.5, 0.5);
  }
  raycast(e, t) {
    e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Mn.setFromMatrixScale(this.matrixWorld), Ea.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), wn.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && Mn.multiplyScalar(-wn.z);
    const n = this.material.rotation;
    let i, s;
    n !== 0 && (s = Math.cos(n), i = Math.sin(n));
    const a = this.center;
    _i(gi.set(-0.5, -0.5, 0), wn, a, Mn, i, s), _i(Hn.set(0.5, -0.5, 0), wn, a, Mn, i, s), _i(xi.set(0.5, 0.5, 0), wn, a, Mn, i, s), Ls.set(0, 0), mr.set(1, 0), Rs.set(1, 1);
    let o = e.ray.intersectTriangle(gi, Hn, xi, !1, On);
    if (o === null && (_i(Hn.set(-0.5, 0.5, 0), wn, a, Mn, i, s), mr.set(0, 1), o = e.ray.intersectTriangle(gi, xi, Hn, !1, On), o === null))
      return;
    const l = e.ray.origin.distanceTo(On);
    l < e.near || l > e.far || t.push({
      distance: l,
      point: On.clone(),
      uv: Ye.getUV(On, gi, Hn, xi, Ls, mr, Rs, new j()),
      face: null,
      object: this
    });
  }
  copy(e) {
    return super.copy(e), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
}
Cu.prototype.isSprite = !0;
function _i(r, e, t, n, i, s) {
  bn.subVectors(r, t).addScalar(0.5).multiply(n), i !== void 0 ? (Gn.x = s * bn.x - i * bn.y, Gn.y = i * bn.x + s * bn.y) : Gn.copy(bn), r.copy(e), r.x += Gn.x, r.y += Gn.y, r.applyMatrix4(Ea);
}
const Cs = /* @__PURE__ */ new w(), Ps = /* @__PURE__ */ new Ie(), Ds = /* @__PURE__ */ new Ie(), Pu = /* @__PURE__ */ new w(), Is = /* @__PURE__ */ new ue();
class Ta extends ut {
  constructor(e, t) {
    super(e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new ue(), this.bindMatrixInverse = new ue();
  }
  copy(e) {
    return super.copy(e), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, this;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new Ie(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.w = t.getW(n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  boneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    Ps.fromBufferAttribute(i.attributes.skinIndex, e), Ds.fromBufferAttribute(i.attributes.skinWeight, e), Cs.fromBufferAttribute(i.attributes.position, e).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const a = Ds.getComponent(s);
      if (a !== 0) {
        const o = Ps.getComponent(s);
        Is.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(Pu.copy(Cs).applyMatrix4(Is), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
Ta.prototype.isSkinnedMesh = !0;
class Du extends Re {
  constructor() {
    super(), this.type = "Bone";
  }
}
Du.prototype.isBone = !0;
const Fs = /* @__PURE__ */ new ue(), Ns = /* @__PURE__ */ new ue(), vi = [], Vn = /* @__PURE__ */ new ut();
class Aa extends ut {
  constructor(e, t, n) {
    super(e, t), this.instanceMatrix = new Ze(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1;
  }
  copy(e) {
    return super.copy(e), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (Vn.geometry = this.geometry, Vn.material = this.material, Vn.material !== void 0)
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, Fs), Ns.multiplyMatrices(n, Fs), Vn.matrixWorld = Ns, Vn.raycast(e, vi);
        for (let a = 0, o = vi.length; a < o; a++) {
          const l = vi[a];
          l.instanceId = s, l.object = this, t.push(l);
        }
        vi.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new Ze(new Float32Array(this.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
Aa.prototype.isInstancedMesh = !0;
class $n extends Je {
  constructor(e) {
    super(), this.type = "LineBasicMaterial", this.color = new le(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.morphTargets = !1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.morphTargets = e.morphTargets, this;
  }
}
$n.prototype.isLineBasicMaterial = !0;
const Bs = /* @__PURE__ */ new w(), zs = /* @__PURE__ */ new w(), Us = /* @__PURE__ */ new ue(), gr = /* @__PURE__ */ new Rn(), yi = /* @__PURE__ */ new Ln();
class zr extends Re {
  constructor(e = new ze(), t = new $n()) {
    super(), this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e) {
    return super.copy(e), this.material = e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.isBufferGeometry)
      if (e.index === null) {
        const t = e.attributes.position, n = [0];
        for (let i = 1, s = t.count; i < s; i++)
          Bs.fromBufferAttribute(t, i - 1), zs.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += Bs.distanceTo(zs);
        e.setAttribute("lineDistance", new ke(n, 1));
      } else
        console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    else e.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), yi.copy(n.boundingSphere), yi.applyMatrix4(i), yi.radius += s, e.ray.intersectsSphere(yi) === !1) return;
    Us.copy(i).invert(), gr.copy(e.ray).applyMatrix4(Us);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = new w(), h = new w(), d = new w(), u = new w(), f = this.isLineSegments ? 2 : 1;
    if (n.isBufferGeometry) {
      const m = n.index, _ = n.attributes.position;
      if (m !== null) {
        const g = Math.max(0, a.start), p = Math.min(m.count, a.start + a.count);
        for (let E = g, T = p - 1; E < T; E += f) {
          const S = m.getX(E), v = m.getX(E + 1);
          if (c.fromBufferAttribute(_, S), h.fromBufferAttribute(_, v), gr.distanceSqToSegment(c, h, u, d) > l) continue;
          u.applyMatrix4(this.matrixWorld);
          const N = e.ray.origin.distanceTo(u);
          N < e.near || N > e.far || t.push({
            distance: N,
            // What do we want? intersection point on the ray or on the segment??
            // point: raycaster.ray.at( distance ),
            point: d.clone().applyMatrix4(this.matrixWorld),
            index: E,
            face: null,
            faceIndex: null,
            object: this
          });
        }
      } else {
        const g = Math.max(0, a.start), p = Math.min(_.count, a.start + a.count);
        for (let E = g, T = p - 1; E < T; E += f) {
          if (c.fromBufferAttribute(_, E), h.fromBufferAttribute(_, E + 1), gr.distanceSqToSegment(c, h, u, d) > l) continue;
          u.applyMatrix4(this.matrixWorld);
          const v = e.ray.origin.distanceTo(u);
          v < e.near || v > e.far || t.push({
            distance: v,
            // What do we want? intersection point on the ray or on the segment??
            // point: raycaster.ray.at( distance ),
            point: d.clone().applyMatrix4(this.matrixWorld),
            index: E,
            face: null,
            faceIndex: null,
            object: this
          });
        }
      }
    } else n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
  }
  updateMorphTargets() {
    const e = this.geometry;
    if (e.isBufferGeometry) {
      const t = e.morphAttributes, n = Object.keys(t);
      if (n.length > 0) {
        const i = t[n[0]];
        if (i !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let s = 0, a = i.length; s < a; s++) {
            const o = i[s].name || String(s);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
          }
        }
      }
    } else {
      const t = e.morphTargets;
      t !== void 0 && t.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  }
}
zr.prototype.isLine = !0;
const Os = /* @__PURE__ */ new w(), Gs = /* @__PURE__ */ new w();
class Ur extends zr {
  constructor(e, t) {
    super(e, t), this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.isBufferGeometry)
      if (e.index === null) {
        const t = e.attributes.position, n = [];
        for (let i = 0, s = t.count; i < s; i += 2)
          Os.fromBufferAttribute(t, i), Gs.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Os.distanceTo(Gs);
        e.setAttribute("lineDistance", new ke(n, 1));
      } else
        console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    else e.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    return this;
  }
}
Ur.prototype.isLineSegments = !0;
class Iu extends zr {
  constructor(e, t) {
    super(e, t), this.type = "LineLoop";
  }
}
Iu.prototype.isLineLoop = !0;
class La extends Je {
  constructor(e) {
    super(), this.type = "PointsMaterial", this.color = new le(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.morphTargets = e.morphTargets, this;
  }
}
La.prototype.isPointsMaterial = !0;
const Hs = /* @__PURE__ */ new ue(), Lr = /* @__PURE__ */ new Rn(), Mi = /* @__PURE__ */ new Ln(), wi = /* @__PURE__ */ new w();
class Fu extends Re {
  constructor(e = new ze(), t = new La()) {
    super(), this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e) {
    return super.copy(e), this.material = e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Mi.copy(n.boundingSphere), Mi.applyMatrix4(i), Mi.radius += s, e.ray.intersectsSphere(Mi) === !1) return;
    Hs.copy(i).invert(), Lr.copy(e.ray).applyMatrix4(Hs);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o;
    if (n.isBufferGeometry) {
      const c = n.index, d = n.attributes.position;
      if (c !== null) {
        const u = Math.max(0, a.start), f = Math.min(c.count, a.start + a.count);
        for (let m = u, x = f; m < x; m++) {
          const _ = c.getX(m);
          wi.fromBufferAttribute(d, _), Vs(wi, _, l, i, e, t, this);
        }
      } else {
        const u = Math.max(0, a.start), f = Math.min(d.count, a.start + a.count);
        for (let m = u, x = f; m < x; m++)
          wi.fromBufferAttribute(d, m), Vs(wi, m, l, i, e, t, this);
      }
    } else
      console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
  }
  updateMorphTargets() {
    const e = this.geometry;
    if (e.isBufferGeometry) {
      const t = e.morphAttributes, n = Object.keys(t);
      if (n.length > 0) {
        const i = t[n[0]];
        if (i !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let s = 0, a = i.length; s < a; s++) {
            const o = i[s].name || String(s);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
          }
        }
      }
    } else {
      const t = e.morphTargets;
      t !== void 0 && t.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  }
}
Fu.prototype.isPoints = !0;
function Vs(r, e, t, n, i, s, a) {
  const o = Lr.distanceSqToPoint(r);
  if (o < t) {
    const l = new w();
    Lr.closestPointToPoint(r, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: e,
      face: null,
      object: a
    });
  }
}
class Nu extends Ke {
  constructor(e, t, n, i, s, a, o, l, c) {
    super(e, t, n, i, s, a, o, l, c), this.format = o !== void 0 ? o : 1022, this.minFilter = a !== void 0 ? a : 1006, this.magFilter = s !== void 0 ? s : 1006, this.generateMipmaps = !1;
    const h = this;
    function d() {
      h.needsUpdate = !0, e.requestVideoFrameCallback(d);
    }
    "requestVideoFrameCallback" in e && e.requestVideoFrameCallback(d);
  }
  clone() {
    return new this.constructor(this.image).copy(this);
  }
  update() {
    const e = this.image;
    "requestVideoFrameCallback" in e === !1 && e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
  }
}
Nu.prototype.isVideoTexture = !0;
class Bu extends Ke {
  constructor(e, t, n, i, s, a, o, l, c, h, d, u) {
    super(null, a, o, l, c, h, i, s, d, u), this.image = { width: t, height: n }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1;
  }
}
Bu.prototype.isCompressedTexture = !0;
class zu extends Ke {
  constructor(e, t, n, i, s, a, o, l, c) {
    super(e, t, n, i, s, a, o, l, c), this.needsUpdate = !0;
  }
}
zu.prototype.isCanvasTexture = !0;
class Uu extends Ke {
  constructor(e, t, n, i, s, a, o, l, c, h) {
    if (h = h !== void 0 ? h : 1026, h !== 1026 && h !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === 1026 && (n = 1012), n === void 0 && h === 1027 && (n = 1020), super(null, i, s, a, o, l, h, n, c), this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : 1003, this.minFilter = l !== void 0 ? l : 1003, this.flipY = !1, this.generateMipmaps = !1;
  }
}
Uu.prototype.isDepthTexture = !0;
const Ou = {
  triangulate: function(r, e, t) {
    t = t || 2;
    const n = e && e.length, i = n ? e[0] * t : r.length;
    let s = Ra(r, 0, i, t, !0);
    const a = [];
    if (!s || s.next === s.prev) return a;
    let o, l, c, h, d, u, f;
    if (n && (s = Wu(r, e, s, t)), r.length > 80 * t) {
      o = c = r[0], l = h = r[1];
      for (let m = t; m < i; m += t)
        d = r[m], u = r[m + 1], d < o && (o = d), u < l && (l = u), d > c && (c = d), u > h && (h = u);
      f = Math.max(c - o, h - l), f = f !== 0 ? 1 / f : 0;
    }
    return jn(s, a, t, o, l, f), a;
  }
};
function Ra(r, e, t, n, i) {
  let s, a;
  if (i === td(r, e, t, n) > 0)
    for (s = e; s < t; s += n) a = ks(s, r[s], r[s + 1], a);
  else
    for (s = t - n; s >= e; s -= n) a = ks(s, r[s], r[s + 1], a);
  return a && Ni(a, a.next) && (Jn(a), a = a.next), a;
}
function Xt(r, e) {
  if (!r) return r;
  e || (e = r);
  let t = r, n;
  do
    if (n = !1, !t.steiner && (Ni(t, t.next) || Ge(t.prev, t, t.next) === 0)) {
      if (Jn(t), t = e = t.prev, t === t.next) break;
      n = !0;
    } else
      t = t.next;
  while (n || t !== e);
  return e;
}
function jn(r, e, t, n, i, s, a) {
  if (!r) return;
  !a && s && Zu(r, n, i, s);
  let o = r, l, c;
  for (; r.prev !== r.next; ) {
    if (l = r.prev, c = r.next, s ? Hu(r, n, i, s) : Gu(r)) {
      e.push(l.i / t), e.push(r.i / t), e.push(c.i / t), Jn(r), r = c.next, o = c.next;
      continue;
    }
    if (r = c, r === o) {
      a ? a === 1 ? (r = Vu(Xt(r), e, t), jn(r, e, t, n, i, s, 2)) : a === 2 && ku(r, e, t, n, i, s) : jn(Xt(r), e, t, n, i, s, 1);
      break;
    }
  }
}
function Gu(r) {
  const e = r.prev, t = r, n = r.next;
  if (Ge(e, t, n) >= 0) return !1;
  let i = r.next.next;
  for (; i !== r.prev; ) {
    if (Sn(e.x, e.y, t.x, t.y, n.x, n.y, i.x, i.y) && Ge(i.prev, i, i.next) >= 0) return !1;
    i = i.next;
  }
  return !0;
}
function Hu(r, e, t, n) {
  const i = r.prev, s = r, a = r.next;
  if (Ge(i, s, a) >= 0) return !1;
  const o = i.x < s.x ? i.x < a.x ? i.x : a.x : s.x < a.x ? s.x : a.x, l = i.y < s.y ? i.y < a.y ? i.y : a.y : s.y < a.y ? s.y : a.y, c = i.x > s.x ? i.x > a.x ? i.x : a.x : s.x > a.x ? s.x : a.x, h = i.y > s.y ? i.y > a.y ? i.y : a.y : s.y > a.y ? s.y : a.y, d = Rr(o, l, e, t, n), u = Rr(c, h, e, t, n);
  let f = r.prevZ, m = r.nextZ;
  for (; f && f.z >= d && m && m.z <= u; ) {
    if (f !== r.prev && f !== r.next && Sn(i.x, i.y, s.x, s.y, a.x, a.y, f.x, f.y) && Ge(f.prev, f, f.next) >= 0 || (f = f.prevZ, m !== r.prev && m !== r.next && Sn(i.x, i.y, s.x, s.y, a.x, a.y, m.x, m.y) && Ge(m.prev, m, m.next) >= 0)) return !1;
    m = m.nextZ;
  }
  for (; f && f.z >= d; ) {
    if (f !== r.prev && f !== r.next && Sn(i.x, i.y, s.x, s.y, a.x, a.y, f.x, f.y) && Ge(f.prev, f, f.next) >= 0) return !1;
    f = f.prevZ;
  }
  for (; m && m.z <= u; ) {
    if (m !== r.prev && m !== r.next && Sn(i.x, i.y, s.x, s.y, a.x, a.y, m.x, m.y) && Ge(m.prev, m, m.next) >= 0) return !1;
    m = m.nextZ;
  }
  return !0;
}
function Vu(r, e, t) {
  let n = r;
  do {
    const i = n.prev, s = n.next.next;
    !Ni(i, s) && Ca(i, n, n.next, s) && Zn(i, s) && Zn(s, i) && (e.push(i.i / t), e.push(n.i / t), e.push(s.i / t), Jn(n), Jn(n.next), n = r = s), n = n.next;
  } while (n !== r);
  return Xt(n);
}
function ku(r, e, t, n, i, s) {
  let a = r;
  do {
    let o = a.next.next;
    for (; o !== a.prev; ) {
      if (a.i !== o.i && Qu(a, o)) {
        let l = Pa(a, o);
        a = Xt(a, a.next), l = Xt(l, l.next), jn(a, e, t, n, i, s), jn(l, e, t, n, i, s);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== r);
}
function Wu(r, e, t, n) {
  const i = [];
  let s, a, o, l, c;
  for (s = 0, a = e.length; s < a; s++)
    o = e[s] * n, l = s < a - 1 ? e[s + 1] * n : r.length, c = Ra(r, o, l, n, !1), c === c.next && (c.steiner = !0), i.push($u(c));
  for (i.sort(qu), s = 0; s < i.length; s++)
    Xu(i[s], t), t = Xt(t, t.next);
  return t;
}
function qu(r, e) {
  return r.x - e.x;
}
function Xu(r, e) {
  if (e = Yu(r, e), e) {
    const t = Pa(e, r);
    Xt(e, e.next), Xt(t, t.next);
  }
}
function Yu(r, e) {
  let t = e;
  const n = r.x, i = r.y;
  let s = -1 / 0, a;
  do {
    if (i <= t.y && i >= t.next.y && t.next.y !== t.y) {
      const u = t.x + (i - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
      if (u <= n && u > s) {
        if (s = u, u === n) {
          if (i === t.y) return t;
          if (i === t.next.y) return t.next;
        }
        a = t.x < t.next.x ? t : t.next;
      }
    }
    t = t.next;
  } while (t !== e);
  if (!a) return null;
  if (n === s) return a;
  const o = a, l = a.x, c = a.y;
  let h = 1 / 0, d;
  t = a;
  do
    n >= t.x && t.x >= l && n !== t.x && Sn(i < c ? n : s, i, l, c, i < c ? s : n, i, t.x, t.y) && (d = Math.abs(i - t.y) / (n - t.x), Zn(t, r) && (d < h || d === h && (t.x > a.x || t.x === a.x && ju(a, t))) && (a = t, h = d)), t = t.next;
  while (t !== o);
  return a;
}
function ju(r, e) {
  return Ge(r.prev, r, e.prev) < 0 && Ge(e.next, r, r.next) < 0;
}
function Zu(r, e, t, n) {
  let i = r;
  do
    i.z === null && (i.z = Rr(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== r);
  i.prevZ.nextZ = null, i.prevZ = null, Ju(i);
}
function Ju(r) {
  let e, t, n, i, s, a, o, l, c = 1;
  do {
    for (t = r, r = null, s = null, a = 0; t; ) {
      for (a++, n = t, o = 0, e = 0; e < c && (o++, n = n.nextZ, !!n); e++)
        ;
      for (l = c; o > 0 || l > 0 && n; )
        o !== 0 && (l === 0 || !n || t.z <= n.z) ? (i = t, t = t.nextZ, o--) : (i = n, n = n.nextZ, l--), s ? s.nextZ = i : r = i, i.prevZ = s, s = i;
      t = n;
    }
    s.nextZ = null, c *= 2;
  } while (a > 1);
  return r;
}
function Rr(r, e, t, n, i) {
  return r = 32767 * (r - t) * i, e = 32767 * (e - n) * i, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, r | e << 1;
}
function $u(r) {
  let e = r, t = r;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== r);
  return t;
}
function Sn(r, e, t, n, i, s, a, o) {
  return (i - a) * (e - o) - (r - a) * (s - o) >= 0 && (r - a) * (n - o) - (t - a) * (e - o) >= 0 && (t - a) * (s - o) - (i - a) * (n - o) >= 0;
}
function Qu(r, e) {
  return r.next.i !== e.i && r.prev.i !== e.i && !Ku(r, e) && // dones't intersect other edges
  (Zn(r, e) && Zn(e, r) && ed(r, e) && // locally visible
  (Ge(r.prev, r, e.prev) || Ge(r, e.prev, e)) || // does not create opposite-facing sectors
  Ni(r, e) && Ge(r.prev, r, r.next) > 0 && Ge(e.prev, e, e.next) > 0);
}
function Ge(r, e, t) {
  return (e.y - r.y) * (t.x - e.x) - (e.x - r.x) * (t.y - e.y);
}
function Ni(r, e) {
  return r.x === e.x && r.y === e.y;
}
function Ca(r, e, t, n) {
  const i = Si(Ge(r, e, t)), s = Si(Ge(r, e, n)), a = Si(Ge(t, n, r)), o = Si(Ge(t, n, e));
  return !!(i !== s && a !== o || i === 0 && bi(r, t, e) || s === 0 && bi(r, n, e) || a === 0 && bi(t, r, n) || o === 0 && bi(t, e, n));
}
function bi(r, e, t) {
  return e.x <= Math.max(r.x, t.x) && e.x >= Math.min(r.x, t.x) && e.y <= Math.max(r.y, t.y) && e.y >= Math.min(r.y, t.y);
}
function Si(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0;
}
function Ku(r, e) {
  let t = r;
  do {
    if (t.i !== r.i && t.next.i !== r.i && t.i !== e.i && t.next.i !== e.i && Ca(t, t.next, r, e)) return !0;
    t = t.next;
  } while (t !== r);
  return !1;
}
function Zn(r, e) {
  return Ge(r.prev, r, r.next) < 0 ? Ge(r, e, r.next) >= 0 && Ge(r, r.prev, e) >= 0 : Ge(r, e, r.prev) < 0 || Ge(r, r.next, e) < 0;
}
function ed(r, e) {
  let t = r, n = !1;
  const i = (r.x + e.x) / 2, s = (r.y + e.y) / 2;
  do
    t.y > s != t.next.y > s && t.next.y !== t.y && i < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next;
  while (t !== r);
  return n;
}
function Pa(r, e) {
  const t = new Cr(r.i, r.x, r.y), n = new Cr(e.i, e.x, e.y), i = r.next, s = e.prev;
  return r.next = e, e.prev = r, t.next = i, i.prev = t, n.next = t, t.prev = n, s.next = n, n.prev = s, n;
}
function ks(r, e, t, n) {
  const i = new Cr(r, e, t);
  return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function Jn(r) {
  r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ);
}
function Cr(r, e, t) {
  this.i = r, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function td(r, e, t, n) {
  let i = 0;
  for (let s = e, a = t - n; s < t; s += n)
    i += (r[a] - r[s]) * (r[s + 1] + r[a + 1]), a = s;
  return i;
}
class qt {
  // calculate area of the contour polygon
  static area(e) {
    const t = e.length;
    let n = 0;
    for (let i = t - 1, s = 0; s < t; i = s++)
      n += e[i].x * e[s].y - e[s].x * e[i].y;
    return n * 0.5;
  }
  static isClockWise(e) {
    return qt.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const n = [], i = [], s = [];
    Ws(e), qs(n, e);
    let a = e.length;
    t.forEach(Ws);
    for (let l = 0; l < t.length; l++)
      i.push(a), a += t[l].length, qs(n, t[l]);
    const o = Ou.triangulate(n, i);
    for (let l = 0; l < o.length; l += 3)
      s.push(o.slice(l, l + 3));
    return s;
  }
}
function Ws(r) {
  const e = r.length;
  e > 2 && r[e - 1].equals(r[0]) && r.pop();
}
function qs(r, e) {
  for (let t = 0; t < e.length; t++)
    r.push(e[t].x), r.push(e[t].y);
}
class Bi extends ze {
  constructor(e, t) {
    super(), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: e,
      options: t
    }, e = Array.isArray(e) ? e : [e];
    const n = this, i = [], s = [];
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o];
      a(c);
    }
    this.setAttribute("position", new ke(i, 3)), this.setAttribute("uv", new ke(s, 2)), this.computeVertexNormals();
    function a(o) {
      const l = [], c = t.curveSegments !== void 0 ? t.curveSegments : 12, h = t.steps !== void 0 ? t.steps : 1;
      let d = t.depth !== void 0 ? t.depth : 100, u = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0, f = t.bevelThickness !== void 0 ? t.bevelThickness : 6, m = t.bevelSize !== void 0 ? t.bevelSize : f - 2, x = t.bevelOffset !== void 0 ? t.bevelOffset : 0, _ = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
      const g = t.extrudePath, p = t.UVGenerator !== void 0 ? t.UVGenerator : nd;
      t.amount !== void 0 && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), d = t.amount);
      let E, T = !1, S, v, P, N;
      g && (E = g.getSpacedPoints(h), T = !0, u = !1, S = g.computeFrenetFrames(h, !1), v = new w(), P = new w(), N = new w()), u || (_ = 0, f = 0, m = 0, x = 0);
      const z = o.extractPoints(c);
      let F = z.shape;
      const H = z.holes;
      if (!qt.isClockWise(F)) {
        F = F.reverse();
        for (let Y = 0, $ = H.length; Y < $; Y++) {
          const ee = H[Y];
          qt.isClockWise(ee) && (H[Y] = ee.reverse());
        }
      }
      const A = qt.triangulateShape(F, H), C = F;
      for (let Y = 0, $ = H.length; Y < $; Y++) {
        const ee = H[Y];
        F = F.concat(ee);
      }
      function D(Y, $, ee) {
        return $ || console.error("THREE.ExtrudeGeometry: vec does not exist"), $.clone().multiplyScalar(ee).add(Y);
      }
      const R = F.length, W = A.length;
      function J(Y, $, ee) {
        let oe, ie, b;
        const M = Y.x - $.x, V = Y.y - $.y, k = ee.x - Y.x, re = ee.y - Y.y, ae = M * M + V * V, Ae = M * re - V * k;
        if (Math.abs(Ae) > Number.EPSILON) {
          const me = Math.sqrt(ae), L = Math.sqrt(k * k + re * re), Z = $.x - V / me, Q = $.y + M / me, he = ee.x - re / L, q = ee.y + k / L, pe = ((he - Z) * re - (q - Q) * k) / (M * re - V * k);
          oe = Z + M * pe - Y.x, ie = Q + V * pe - Y.y;
          const Ce = oe * oe + ie * ie;
          if (Ce <= 2)
            return new j(oe, ie);
          b = Math.sqrt(Ce / 2);
        } else {
          let me = !1;
          M > Number.EPSILON ? k > Number.EPSILON && (me = !0) : M < -Number.EPSILON ? k < -Number.EPSILON && (me = !0) : Math.sign(V) === Math.sign(re) && (me = !0), me ? (oe = -V, ie = M, b = Math.sqrt(ae)) : (oe = M, ie = V, b = Math.sqrt(ae / 2));
        }
        return new j(oe / b, ie / b);
      }
      const X = [];
      for (let Y = 0, $ = C.length, ee = $ - 1, oe = Y + 1; Y < $; Y++, ee++, oe++)
        ee === $ && (ee = 0), oe === $ && (oe = 0), X[Y] = J(C[Y], C[ee], C[oe]);
      const se = [];
      let ne, ce = X.concat();
      for (let Y = 0, $ = H.length; Y < $; Y++) {
        const ee = H[Y];
        ne = [];
        for (let oe = 0, ie = ee.length, b = ie - 1, M = oe + 1; oe < ie; oe++, b++, M++)
          b === ie && (b = 0), M === ie && (M = 0), ne[oe] = J(ee[oe], ee[b], ee[M]);
        se.push(ne), ce = ce.concat(ne);
      }
      for (let Y = 0; Y < _; Y++) {
        const $ = Y / _, ee = f * Math.cos($ * Math.PI / 2), oe = m * Math.sin($ * Math.PI / 2) + x;
        for (let ie = 0, b = C.length; ie < b; ie++) {
          const M = D(C[ie], X[ie], oe);
          _e(M.x, M.y, -ee);
        }
        for (let ie = 0, b = H.length; ie < b; ie++) {
          const M = H[ie];
          ne = se[ie];
          for (let V = 0, k = M.length; V < k; V++) {
            const re = D(M[V], ne[V], oe);
            _e(re.x, re.y, -ee);
          }
        }
      }
      const de = m + x;
      for (let Y = 0; Y < R; Y++) {
        const $ = u ? D(F[Y], ce[Y], de) : F[Y];
        T ? (P.copy(S.normals[0]).multiplyScalar($.x), v.copy(S.binormals[0]).multiplyScalar($.y), N.copy(E[0]).add(P).add(v), _e(N.x, N.y, N.z)) : _e($.x, $.y, 0);
      }
      for (let Y = 1; Y <= h; Y++)
        for (let $ = 0; $ < R; $++) {
          const ee = u ? D(F[$], ce[$], de) : F[$];
          T ? (P.copy(S.normals[Y]).multiplyScalar(ee.x), v.copy(S.binormals[Y]).multiplyScalar(ee.y), N.copy(E[Y]).add(P).add(v), _e(N.x, N.y, N.z)) : _e(ee.x, ee.y, d / h * Y);
        }
      for (let Y = _ - 1; Y >= 0; Y--) {
        const $ = Y / _, ee = f * Math.cos($ * Math.PI / 2), oe = m * Math.sin($ * Math.PI / 2) + x;
        for (let ie = 0, b = C.length; ie < b; ie++) {
          const M = D(C[ie], X[ie], oe);
          _e(M.x, M.y, d + ee);
        }
        for (let ie = 0, b = H.length; ie < b; ie++) {
          const M = H[ie];
          ne = se[ie];
          for (let V = 0, k = M.length; V < k; V++) {
            const re = D(M[V], ne[V], oe);
            T ? _e(re.x, re.y + E[h - 1].y, E[h - 1].x + ee) : _e(re.x, re.y, d + ee);
          }
        }
      }
      G(), Ne();
      function G() {
        const Y = i.length / 3;
        if (u) {
          let $ = 0, ee = R * $;
          for (let oe = 0; oe < W; oe++) {
            const ie = A[oe];
            fe(ie[2] + ee, ie[1] + ee, ie[0] + ee);
          }
          $ = h + _ * 2, ee = R * $;
          for (let oe = 0; oe < W; oe++) {
            const ie = A[oe];
            fe(ie[0] + ee, ie[1] + ee, ie[2] + ee);
          }
        } else {
          for (let $ = 0; $ < W; $++) {
            const ee = A[$];
            fe(ee[2], ee[1], ee[0]);
          }
          for (let $ = 0; $ < W; $++) {
            const ee = A[$];
            fe(ee[0] + R * h, ee[1] + R * h, ee[2] + R * h);
          }
        }
        n.addGroup(Y, i.length / 3 - Y, 0);
      }
      function Ne() {
        const Y = i.length / 3;
        let $ = 0;
        Se(C, $), $ += C.length;
        for (let ee = 0, oe = H.length; ee < oe; ee++) {
          const ie = H[ee];
          Se(ie, $), $ += ie.length;
        }
        n.addGroup(Y, i.length / 3 - Y, 1);
      }
      function Se(Y, $) {
        let ee = Y.length;
        for (; --ee >= 0; ) {
          const oe = ee;
          let ie = ee - 1;
          ie < 0 && (ie = Y.length - 1);
          for (let b = 0, M = h + _ * 2; b < M; b++) {
            const V = R * b, k = R * (b + 1), re = $ + oe + V, ae = $ + ie + V, Ae = $ + ie + k, me = $ + oe + k;
            Te(re, ae, Ae, me);
          }
        }
      }
      function _e(Y, $, ee) {
        l.push(Y), l.push($), l.push(ee);
      }
      function fe(Y, $, ee) {
        Me(Y), Me($), Me(ee);
        const oe = i.length / 3, ie = p.generateTopUV(n, i, oe - 3, oe - 2, oe - 1);
        be(ie[0]), be(ie[1]), be(ie[2]);
      }
      function Te(Y, $, ee, oe) {
        Me(Y), Me($), Me(oe), Me($), Me(ee), Me(oe);
        const ie = i.length / 3, b = p.generateSideWallUV(n, i, ie - 6, ie - 3, ie - 2, ie - 1);
        be(b[0]), be(b[1]), be(b[3]), be(b[1]), be(b[2]), be(b[3]);
      }
      function Me(Y) {
        i.push(l[Y * 3 + 0]), i.push(l[Y * 3 + 1]), i.push(l[Y * 3 + 2]);
      }
      function be(Y) {
        s.push(Y.x), s.push(Y.y);
      }
    }
  }
  toJSON() {
    const e = ze.prototype.toJSON.call(this), t = this.parameters.shapes, n = this.parameters.options;
    return id(t, n, e);
  }
}
const nd = {
  generateTopUV: function(r, e, t, n, i) {
    const s = e[t * 3], a = e[t * 3 + 1], o = e[n * 3], l = e[n * 3 + 1], c = e[i * 3], h = e[i * 3 + 1];
    return [
      new j(s, a),
      new j(o, l),
      new j(c, h)
    ];
  },
  generateSideWallUV: function(r, e, t, n, i, s) {
    const a = e[t * 3], o = e[t * 3 + 1], l = e[t * 3 + 2], c = e[n * 3], h = e[n * 3 + 1], d = e[n * 3 + 2], u = e[i * 3], f = e[i * 3 + 1], m = e[i * 3 + 2], x = e[s * 3], _ = e[s * 3 + 1], g = e[s * 3 + 2];
    return Math.abs(o - h) < 0.01 ? [
      new j(a, 1 - l),
      new j(c, 1 - d),
      new j(u, 1 - m),
      new j(x, 1 - g)
    ] : [
      new j(o, 1 - l),
      new j(h, 1 - d),
      new j(f, 1 - m),
      new j(_, 1 - g)
    ];
  }
};
function id(r, e, t) {
  if (t.shapes = [], Array.isArray(r))
    for (let n = 0, i = r.length; n < i; n++) {
      const s = r[n];
      t.shapes.push(s.uuid);
    }
  else
    t.shapes.push(r.uuid);
  return e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t;
}
class rd extends ze {
  constructor(e, t = 12) {
    super(), this.type = "ShapeGeometry", this.parameters = {
      shapes: e,
      curveSegments: t
    };
    const n = [], i = [], s = [], a = [];
    let o = 0, l = 0;
    if (Array.isArray(e) === !1)
      c(e);
    else
      for (let h = 0; h < e.length; h++)
        c(e[h]), this.addGroup(o, l, h), o += l, l = 0;
    this.setIndex(n), this.setAttribute("position", new ke(i, 3)), this.setAttribute("normal", new ke(s, 3)), this.setAttribute("uv", new ke(a, 2));
    function c(h) {
      const d = i.length / 3, u = h.extractPoints(t);
      let f = u.shape;
      const m = u.holes;
      qt.isClockWise(f) === !1 && (f = f.reverse());
      for (let _ = 0, g = m.length; _ < g; _++) {
        const p = m[_];
        qt.isClockWise(p) === !0 && (m[_] = p.reverse());
      }
      const x = qt.triangulateShape(f, m);
      for (let _ = 0, g = m.length; _ < g; _++) {
        const p = m[_];
        f = f.concat(p);
      }
      for (let _ = 0, g = f.length; _ < g; _++) {
        const p = f[_];
        i.push(p.x, p.y, 0), s.push(0, 0, 1), a.push(p.x, p.y);
      }
      for (let _ = 0, g = x.length; _ < g; _++) {
        const p = x[_], E = p[0] + d, T = p[1] + d, S = p[2] + d;
        n.push(E, T, S), l += 3;
      }
    }
  }
  toJSON() {
    const e = ze.prototype.toJSON.call(this), t = this.parameters.shapes;
    return sd(t, e);
  }
}
function sd(r, e) {
  if (e.shapes = [], Array.isArray(r))
    for (let t = 0, n = r.length; t < n; t++) {
      const i = r[t];
      e.shapes.push(i.uuid);
    }
  else
    e.shapes.push(r.uuid);
  return e;
}
class ad extends ze {
  constructor(e = 1, t = 8, n = 6, i = 0, s = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: e,
      widthSegments: t,
      heightSegments: n,
      phiStart: i,
      phiLength: s,
      thetaStart: a,
      thetaLength: o
    }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
    const l = Math.min(a + o, Math.PI);
    let c = 0;
    const h = [], d = new w(), u = new w(), f = [], m = [], x = [], _ = [];
    for (let g = 0; g <= n; g++) {
      const p = [], E = g / n;
      let T = 0;
      g == 0 && a == 0 ? T = 0.5 / t : g == n && l == Math.PI && (T = -0.5 / t);
      for (let S = 0; S <= t; S++) {
        const v = S / t;
        d.x = -e * Math.cos(i + v * s) * Math.sin(a + E * o), d.y = e * Math.cos(a + E * o), d.z = e * Math.sin(i + v * s) * Math.sin(a + E * o), m.push(d.x, d.y, d.z), u.copy(d).normalize(), x.push(u.x, u.y, u.z), _.push(v + T, 1 - E), p.push(c++);
      }
      h.push(p);
    }
    for (let g = 0; g < n; g++)
      for (let p = 0; p < t; p++) {
        const E = h[g][p + 1], T = h[g][p], S = h[g + 1][p], v = h[g + 1][p + 1];
        (g !== 0 || a > 0) && f.push(E, T, v), (g !== n - 1 || l < Math.PI) && f.push(T, S, v);
      }
    this.setIndex(f), this.setAttribute("position", new ke(m, 3)), this.setAttribute("normal", new ke(x, 3)), this.setAttribute("uv", new ke(_, 2));
  }
}
class od extends Je {
  constructor(e) {
    super(), this.type = "ShadowMaterial", this.color = new le(0), this.transparent = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this;
  }
}
od.prototype.isShadowMaterial = !0;
class ld extends rn {
  constructor(e) {
    super(e), this.type = "RawShaderMaterial";
  }
}
ld.prototype.isRawShaderMaterial = !0;
class zi extends Je {
  constructor(e) {
    super(), this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new le(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new le(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new j(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.vertexTangents = !1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.flatShading = e.flatShading, this.vertexTangents = e.vertexTangents, this;
  }
}
zi.prototype.isMeshStandardMaterial = !0;
class cd extends zi {
  constructor(e) {
    super(), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.clearcoat = 0, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new j(1, 1), this.clearcoatNormalMap = null, this.reflectivity = 0.5, Object.defineProperty(this, "ior", {
      get: function() {
        return (1 + 0.4 * this.reflectivity) / (1 - 0.4 * this.reflectivity);
      },
      set: function(t) {
        this.reflectivity = ct(2.5 * (t - 1) / (t + 1), 0, 1);
      }
    }), this.sheen = null, this.transmission = 0, this.transmissionMap = null, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.reflectivity = e.reflectivity, e.sheen ? this.sheen = (this.sheen || new le()).copy(e.sheen) : this.sheen = null, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this;
  }
}
cd.prototype.isMeshPhysicalMaterial = !0;
class hd extends Je {
  constructor(e) {
    super(), this.type = "MeshPhongMaterial", this.color = new le(16777215), this.specular = new le(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new le(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new j(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.flatShading = e.flatShading, this;
  }
}
hd.prototype.isMeshPhongMaterial = !0;
class ud extends Je {
  constructor(e) {
    super(), this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.color = new le(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new le(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new j(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this;
  }
}
ud.prototype.isMeshToonMaterial = !0;
class dd extends Je {
  constructor(e) {
    super(), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new j(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.flatShading = e.flatShading, this;
  }
}
dd.prototype.isMeshNormalMaterial = !0;
class fd extends Je {
  constructor(e) {
    super(), this.type = "MeshLambertMaterial", this.color = new le(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new le(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this;
  }
}
fd.prototype.isMeshLambertMaterial = !0;
class pd extends Je {
  constructor(e) {
    super(), this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new le(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new j(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { MATCAP: "" }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.flatShading = e.flatShading, this;
  }
}
pd.prototype.isMeshMatcapMaterial = !0;
class md extends $n {
  constructor(e) {
    super(), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this;
  }
}
md.prototype.isLineDashedMaterial = !0;
const Oe = {
  // same as Array.prototype.slice, but also works on typed arrays
  arraySlice: function(r, e, t) {
    return Oe.isTypedArray(r) ? new r.constructor(r.subarray(e, t !== void 0 ? t : r.length)) : r.slice(e, t);
  },
  // converts an array to a specific type
  convertArray: function(r, e, t) {
    return !r || // let 'undefined' and 'null' pass
    !t && r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r);
  },
  isTypedArray: function(r) {
    return ArrayBuffer.isView(r) && !(r instanceof DataView);
  },
  // returns an array by which times and values can be sorted
  getKeyframeOrder: function(r) {
    function e(i, s) {
      return r[i] - r[s];
    }
    const t = r.length, n = new Array(t);
    for (let i = 0; i !== t; ++i) n[i] = i;
    return n.sort(e), n;
  },
  // uses the array previously returned by 'getKeyframeOrder' to sort data
  sortedArray: function(r, e, t) {
    const n = r.length, i = new r.constructor(n);
    for (let s = 0, a = 0; a !== n; ++s) {
      const o = t[s] * e;
      for (let l = 0; l !== e; ++l)
        i[a++] = r[o + l];
    }
    return i;
  },
  // function for parsing AOS keyframe formats
  flattenJSON: function(r, e, t, n) {
    let i = 1, s = r[0];
    for (; s !== void 0 && s[n] === void 0; )
      s = r[i++];
    if (s === void 0) return;
    let a = s[n];
    if (a !== void 0)
      if (Array.isArray(a))
        do
          a = s[n], a !== void 0 && (e.push(s.time), t.push.apply(t, a)), s = r[i++];
        while (s !== void 0);
      else if (a.toArray !== void 0)
        do
          a = s[n], a !== void 0 && (e.push(s.time), a.toArray(t, t.length)), s = r[i++];
        while (s !== void 0);
      else
        do
          a = s[n], a !== void 0 && (e.push(s.time), t.push(a)), s = r[i++];
        while (s !== void 0);
  },
  subclip: function(r, e, t, n, i = 30) {
    const s = r.clone();
    s.name = e;
    const a = [];
    for (let l = 0; l < s.tracks.length; ++l) {
      const c = s.tracks[l], h = c.getValueSize(), d = [], u = [];
      for (let f = 0; f < c.times.length; ++f) {
        const m = c.times[f] * i;
        if (!(m < t || m >= n)) {
          d.push(c.times[f]);
          for (let x = 0; x < h; ++x)
            u.push(c.values[f * h + x]);
        }
      }
      d.length !== 0 && (c.times = Oe.convertArray(d, c.times.constructor), c.values = Oe.convertArray(u, c.values.constructor), a.push(c));
    }
    s.tracks = a;
    let o = 1 / 0;
    for (let l = 0; l < s.tracks.length; ++l)
      o > s.tracks[l].times[0] && (o = s.tracks[l].times[0]);
    for (let l = 0; l < s.tracks.length; ++l)
      s.tracks[l].shift(-1 * o);
    return s.resetDuration(), s;
  },
  makeClipAdditive: function(r, e = 0, t = r, n = 30) {
    n <= 0 && (n = 30);
    const i = t.tracks.length, s = e / n;
    for (let a = 0; a < i; ++a) {
      const o = t.tracks[a], l = o.ValueTypeName;
      if (l === "bool" || l === "string") continue;
      const c = r.tracks.find(function(g) {
        return g.name === o.name && g.ValueTypeName === l;
      });
      if (c === void 0) continue;
      let h = 0;
      const d = o.getValueSize();
      o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (h = d / 3);
      let u = 0;
      const f = c.getValueSize();
      c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (u = f / 3);
      const m = o.times.length - 1;
      let x;
      if (s <= o.times[0]) {
        const g = h, p = d - h;
        x = Oe.arraySlice(o.values, g, p);
      } else if (s >= o.times[m]) {
        const g = m * d + h, p = g + d - h;
        x = Oe.arraySlice(o.values, g, p);
      } else {
        const g = o.createInterpolant(), p = h, E = d - h;
        g.evaluate(s), x = Oe.arraySlice(g.resultBuffer, p, E);
      }
      l === "quaternion" && new it().fromArray(x).normalize().conjugate().toArray(x);
      const _ = c.times.length;
      for (let g = 0; g < _; ++g) {
        const p = g * f + u;
        if (l === "quaternion")
          it.multiplyQuaternionsFlat(
            c.values,
            p,
            x,
            0,
            c.values,
            p
          );
        else {
          const E = f - u * 2;
          for (let T = 0; T < E; ++T)
            c.values[p + T] -= x[T];
        }
      }
    }
    return r.blendMode = 2501, r;
  }
};
class Yt {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], s = t[n - 1];
    e: {
      t: {
        let a;
        n: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < s) break i;
                return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, e, s);
              }
              if (n === o) break;
              if (s = i, i = t[++n], e < i)
                break t;
            }
            a = t.length;
            break n;
          }
          if (!(e >= s)) {
            const o = t[1];
            e < o && (n = 2, s = o);
            for (let l = n - 2; ; ) {
              if (s === void 0)
                return this._cachedIndex = 0, this.beforeStart_(0, e, i);
              if (n === l) break;
              if (i = s, s = t[--n - 1], e >= s)
                break t;
            }
            a = n, n = 0;
            break n;
          }
          break e;
        }
        for (; n < a; ) {
          const o = n + a >>> 1;
          e < t[o] ? a = o : n = o + 1;
        }
        if (i = t[n], s = t[n - 1], s === void 0)
          return this._cachedIndex = 0, this.beforeStart_(0, e, i);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, s, e);
      }
      this._cachedIndex = n, this.intervalChanged_(n, s, i);
    }
    return this.interpolate_(n, s, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i;
    for (let a = 0; a !== i; ++a)
      t[a] = n[s + a];
    return t;
  }
  // Template methods for derived classes:
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
Yt.prototype.beforeStart_ = Yt.prototype.copySampleValue_;
Yt.prototype.afterEnd_ = Yt.prototype.copySampleValue_;
class gd extends Yt {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: 2400,
      endingEnd: 2400
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2, a = e + 1, o = i[s], l = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case 2401:
          s = e, o = 2 * t - n;
          break;
        case 2402:
          s = i.length - 2, o = t + i[s] - i[s + 1];
          break;
        default:
          s = e, o = n;
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case 2401:
          a = e, l = 2 * n - t;
          break;
        case 2402:
          a = 1, l = n + i[1] - i[0];
          break;
        default:
          a = e - 1, l = t;
      }
    const c = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = c / (t - o), this._weightNext = c / (l - n), this._offsetPrev = s * h, this._offsetNext = a * h;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = this._offsetPrev, d = this._offsetNext, u = this._weightPrev, f = this._weightNext, m = (n - t) / (i - t), x = m * m, _ = x * m, g = -u * _ + 2 * u * x - u * m, p = (1 + u) * _ + (-1.5 - 2 * u) * x + (-0.5 + u) * m + 1, E = (-1 - f) * _ + (1.5 + f) * x + 0.5 * m, T = f * _ - f * x;
    for (let S = 0; S !== o; ++S)
      s[S] = g * a[h + S] + p * a[c + S] + E * a[l + S] + T * a[d + S];
    return s;
  }
}
class Da extends Yt {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = (n - t) / (i - t), d = 1 - h;
    for (let u = 0; u !== o; ++u)
      s[u] = a[c + u] * d + a[l + u] * h;
    return s;
  }
}
class xd extends Yt {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Et {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = Oe.convertArray(t, this.TimeBufferType), this.values = Oe.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Oe.convertArray(e.times, Array),
        values: Oe.convertArray(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new xd(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Da(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new gd(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case 2300:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case 2301:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case 2302:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return 2300;
      case this.InterpolantFactoryMethodLinear:
        return 2301;
      case this.InterpolantFactoryMethodSmooth:
        return 2302;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  // move all keyframes either forwards or backwards in time
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] += e;
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] *= e;
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(e, t) {
    const n = this.times, i = n.length;
    let s = 0, a = i - 1;
    for (; s !== i && n[s] < e; )
      ++s;
    for (; a !== -1 && n[a] > t; )
      --a;
    if (++a, s !== 0 || a !== i) {
      s >= a && (a = Math.max(a, 1), s = a - 1);
      const o = this.getValueSize();
      this.times = Oe.arraySlice(n, s, a), this.values = Oe.arraySlice(this.values, s * o, a * o);
    }
    return this;
  }
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, s = n.length;
    s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let a = null;
    for (let o = 0; o !== s; o++) {
      const l = n[o];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, l), e = !1;
        break;
      }
      if (a !== null && a > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, a), e = !1;
        break;
      }
      a = l;
    }
    if (i !== void 0 && Oe.isTypedArray(i))
      for (let o = 0, l = i.length; o !== l; ++o) {
        const c = i[o];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), e = !1;
          break;
        }
      }
    return e;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const e = Oe.arraySlice(this.times), t = Oe.arraySlice(this.values), n = this.getValueSize(), i = this.getInterpolation() === 2302, s = e.length - 1;
    let a = 1;
    for (let o = 1; o < s; ++o) {
      let l = !1;
      const c = e[o], h = e[o + 1];
      if (c !== h && (o !== 1 || c !== e[0]))
        if (i)
          l = !0;
        else {
          const d = o * n, u = d - n, f = d + n;
          for (let m = 0; m !== n; ++m) {
            const x = t[d + m];
            if (x !== t[u + m] || x !== t[f + m]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (o !== a) {
          e[a] = e[o];
          const d = o * n, u = a * n;
          for (let f = 0; f !== n; ++f)
            t[u + f] = t[d + f];
        }
        ++a;
      }
    }
    if (s > 0) {
      e[a] = e[s];
      for (let o = s * n, l = a * n, c = 0; c !== n; ++c)
        t[l + c] = t[o + c];
      ++a;
    }
    return a !== e.length ? (this.times = Oe.arraySlice(e, 0, a), this.values = Oe.arraySlice(t, 0, a * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = Oe.arraySlice(this.times, 0), t = Oe.arraySlice(this.values, 0), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
Et.prototype.TimeBufferType = Float32Array;
Et.prototype.ValueBufferType = Float32Array;
Et.prototype.DefaultInterpolation = 2301;
class Dn extends Et {
}
Dn.prototype.ValueTypeName = "bool";
Dn.prototype.ValueBufferType = Array;
Dn.prototype.DefaultInterpolation = 2300;
Dn.prototype.InterpolantFactoryMethodLinear = void 0;
Dn.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ia extends Et {
}
Ia.prototype.ValueTypeName = "color";
class Ri extends Et {
}
Ri.prototype.ValueTypeName = "number";
class _d extends Yt {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = (n - t) / (i - t);
    let c = e * o;
    for (let h = c + o; c !== h; c += 4)
      it.slerpFlat(s, 0, a, c - o, a, c, l);
    return s;
  }
}
class Qn extends Et {
  InterpolantFactoryMethodLinear(e) {
    return new _d(this.times, this.values, this.getValueSize(), e);
  }
}
Qn.prototype.ValueTypeName = "quaternion";
Qn.prototype.DefaultInterpolation = 2301;
Qn.prototype.InterpolantFactoryMethodSmooth = void 0;
class In extends Et {
}
In.prototype.ValueTypeName = "string";
In.prototype.ValueBufferType = Array;
In.prototype.DefaultInterpolation = 2300;
In.prototype.InterpolantFactoryMethodLinear = void 0;
In.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ci extends Et {
}
Ci.prototype.ValueTypeName = "vector";
class Xs {
  constructor(e, t = -1, n, i = 2500) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = bt(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a)
      t.push(yd(n[a]).scale(i));
    const s = new this(e.name, e.duration, t, e.blendMode);
    return s.uuid = e.uuid, s;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let s = 0, a = n.length; s !== a; ++s)
      t.push(Et.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const s = t.length, a = [];
    for (let o = 0; o < s; o++) {
      let l = [], c = [];
      l.push(
        (o + s - 1) % s,
        o,
        (o + 1) % s
      ), c.push(0, 1, 0);
      const h = Oe.getKeyframeOrder(l);
      l = Oe.sortedArray(l, 1, h), c = Oe.sortedArray(c, 1, h), !i && l[0] === 0 && (l.push(s), c.push(c[0])), a.push(
        new Ri(
          ".morphTargetInfluences[" + t[o].name + "]",
          l,
          c
        ).scale(1 / n)
      );
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, s = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], h = c.name.match(s);
      if (h && h.length > 1) {
        const d = h[1];
        let u = i[d];
        u || (i[d] = u = []), u.push(c);
      }
    }
    const a = [];
    for (const o in i)
      a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return a;
  }
  // parse the animation.hierarchy format
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(d, u, f, m, x) {
      if (f.length !== 0) {
        const _ = [], g = [];
        Oe.flattenJSON(f, _, g, m), _.length !== 0 && x.push(new d(u, _, g));
      }
    }, i = [], s = e.name || "default", a = e.fps || 30, o = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let d = 0; d < c.length; d++) {
      const u = c[d].keys;
      if (!(!u || u.length === 0))
        if (u[0].morphTargets) {
          const f = {};
          let m;
          for (m = 0; m < u.length; m++)
            if (u[m].morphTargets)
              for (let x = 0; x < u[m].morphTargets.length; x++)
                f[u[m].morphTargets[x]] = -1;
          for (const x in f) {
            const _ = [], g = [];
            for (let p = 0; p !== u[m].morphTargets.length; ++p) {
              const E = u[m];
              _.push(E.time), g.push(E.morphTarget === x ? 1 : 0);
            }
            i.push(new Ri(".morphTargetInfluence[" + x + "]", _, g));
          }
          l = f.length * a;
        } else {
          const f = ".bones[" + t[d].name + "]";
          n(
            Ci,
            f + ".position",
            u,
            "pos",
            i
          ), n(
            Qn,
            f + ".quaternion",
            u,
            "rot",
            i
          ), n(
            Ci,
            f + ".scale",
            u,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(s, l, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const s = this.tracks[n];
      t = Math.max(t, s.times[s.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function vd(r) {
  switch (r.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Ri;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Ci;
    case "color":
      return Ia;
    case "quaternion":
      return Qn;
    case "bool":
    case "boolean":
      return Dn;
    case "string":
      return In;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
}
function yd(r) {
  if (r.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = vd(r.type);
  if (r.times === void 0) {
    const t = [], n = [];
    Oe.flattenJSON(r.keys, t, n, "value"), r.times = t, r.values = n;
  }
  return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation);
}
const Tn = {
  enabled: !1,
  files: {},
  add: function(r, e) {
    this.enabled !== !1 && (this.files[r] = e);
  },
  get: function(r) {
    if (this.enabled !== !1)
      return this.files[r];
  },
  remove: function(r) {
    delete this.files[r];
  },
  clear: function() {
    this.files = {};
  }
};
class Md {
  constructor(e, t, n) {
    const i = this;
    let s = !1, a = 0, o = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      o++, s === !1 && i.onStart !== void 0 && i.onStart(h, a, o), s = !0;
    }, this.itemEnd = function(h) {
      a++, i.onProgress !== void 0 && i.onProgress(h, a, o), a === o && (s = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return l ? l(h) : h;
    }, this.setURLModifier = function(h) {
      return l = h, this;
    }, this.addHandler = function(h, d) {
      return c.push(h, d), this;
    }, this.removeHandler = function(h) {
      const d = c.indexOf(h);
      return d !== -1 && c.splice(d, 2), this;
    }, this.getHandler = function(h) {
      for (let d = 0, u = c.length; d < u; d += 2) {
        const f = c[d], m = c[d + 1];
        if (f.global && (f.lastIndex = 0), f.test(h))
          return m;
      }
      return null;
    };
  }
}
const wd = new Md();
class jt {
  constructor(e) {
    this.manager = e !== void 0 ? e : wd, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
const _t = {};
class bd extends jt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = Tn.get(e);
    if (a !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    if (_t[e] !== void 0) {
      _t[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    const o = /^data:(.*?)(;base64)?,(.*)$/, l = e.match(o);
    let c;
    if (l) {
      const h = l[1], d = !!l[2];
      let u = l[3];
      u = decodeURIComponent(u), d && (u = atob(u));
      try {
        let f;
        const m = (this.responseType || "").toLowerCase();
        switch (m) {
          case "arraybuffer":
          case "blob":
            const x = new Uint8Array(u.length);
            for (let g = 0; g < u.length; g++)
              x[g] = u.charCodeAt(g);
            m === "blob" ? f = new Blob([x.buffer], { type: h }) : f = x.buffer;
            break;
          case "document":
            f = new DOMParser().parseFromString(u, h);
            break;
          case "json":
            f = JSON.parse(u);
            break;
          default:
            f = u;
            break;
        }
        setTimeout(function() {
          t && t(f), s.manager.itemEnd(e);
        }, 0);
      } catch (f) {
        setTimeout(function() {
          i && i(f), s.manager.itemError(e), s.manager.itemEnd(e);
        }, 0);
      }
    } else {
      _t[e] = [], _t[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      }), c = new XMLHttpRequest(), c.open("GET", e, !0), c.addEventListener("load", function(h) {
        const d = this.response, u = _t[e];
        if (delete _t[e], this.status === 200 || this.status === 0) {
          this.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), Tn.add(e, d);
          for (let f = 0, m = u.length; f < m; f++) {
            const x = u[f];
            x.onLoad && x.onLoad(d);
          }
          s.manager.itemEnd(e);
        } else {
          for (let f = 0, m = u.length; f < m; f++) {
            const x = u[f];
            x.onError && x.onError(h);
          }
          s.manager.itemError(e), s.manager.itemEnd(e);
        }
      }, !1), c.addEventListener("progress", function(h) {
        const d = _t[e];
        for (let u = 0, f = d.length; u < f; u++) {
          const m = d[u];
          m.onProgress && m.onProgress(h);
        }
      }, !1), c.addEventListener("error", function(h) {
        const d = _t[e];
        delete _t[e];
        for (let u = 0, f = d.length; u < f; u++) {
          const m = d[u];
          m.onError && m.onError(h);
        }
        s.manager.itemError(e), s.manager.itemEnd(e);
      }, !1), c.addEventListener("abort", function(h) {
        const d = _t[e];
        delete _t[e];
        for (let u = 0, f = d.length; u < f; u++) {
          const m = d[u];
          m.onError && m.onError(h);
        }
        s.manager.itemError(e), s.manager.itemEnd(e);
      }, !1), this.responseType !== void 0 && (c.responseType = this.responseType), this.withCredentials !== void 0 && (c.withCredentials = this.withCredentials), c.overrideMimeType && c.overrideMimeType(this.mimeType !== void 0 ? this.mimeType : "text/plain");
      for (const h in this.requestHeader)
        c.setRequestHeader(h, this.requestHeader[h]);
      c.send(null);
    }
    return s.manager.itemStart(e), c;
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class Fa extends jt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = Tn.get(e);
    if (a !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    const o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
    function l() {
      o.removeEventListener("load", l, !1), o.removeEventListener("error", c, !1), Tn.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(h) {
      o.removeEventListener("load", l, !1), o.removeEventListener("error", c, !1), i && i(h), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    return o.addEventListener("load", l, !1), o.addEventListener("error", c, !1), e.substr(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), s.manager.itemStart(e), o.src = e, o;
  }
}
class Sd extends jt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new Di(), a = new Fa(this.manager);
    a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
    let o = 0;
    function l(c) {
      a.load(e[c], function(h) {
        s.images[c] = h, o++, o === 6 && (s.needsUpdate = !0, t && t(s));
      }, void 0, i);
    }
    for (let c = 0; c < e.length; ++c)
      l(c);
    return s;
  }
}
class Ed extends jt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new Ke(), a = new Fa(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      s.image = o;
      const l = e.search(/\.jpe?g($|\?)/i) > 0 || e.search(/^data\:image\/jpeg/) === 0;
      s.format = l ? 1022 : 1023, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, i), s;
  }
}
class dt {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  // Virtual base class method to overwrite and implement in subclasses
  //	- t [0 .. 1]
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  // Get point at relative position in curve according to arc length
  // - u [0 .. 1]
  getPointAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  // Get sequence of points using getPoint( t )
  getPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return t;
  }
  // Get sequence of points using getPointAt( u )
  getSpacedPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPointAt(n / e));
    return t;
  }
  // Get total curve arc length
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  // Get list of cumulative segment lengths
  getLengths(e = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const t = [];
    let n, i = this.getPoint(0), s = 0;
    t.push(0);
    for (let a = 1; a <= e; a++)
      n = this.getPoint(a / e), s += n.distanceTo(i), t.push(s), i = n;
    return this.cacheArcLengths = t, t;
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  // Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
  getUtoTmapping(e, t) {
    const n = this.getLengths();
    let i = 0;
    const s = n.length;
    let a;
    t ? a = t : a = e * n[s - 1];
    let o = 0, l = s - 1, c;
    for (; o <= l; )
      if (i = Math.floor(o + (l - o) / 2), c = n[i] - a, c < 0)
        o = i + 1;
      else if (c > 0)
        l = i - 1;
      else {
        l = i;
        break;
      }
    if (i = l, n[i] === a)
      return i / (s - 1);
    const h = n[i], u = n[i + 1] - h, f = (a - h) / u;
    return (i + f) / (s - 1);
  }
  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation
  getTangent(e, t) {
    let i = e - 1e-4, s = e + 1e-4;
    i < 0 && (i = 0), s > 1 && (s = 1);
    const a = this.getPoint(i), o = this.getPoint(s), l = t || (a.isVector2 ? new j() : new w());
    return l.copy(o).sub(a).normalize(), l;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    const n = new w(), i = [], s = [], a = [], o = new w(), l = new ue();
    for (let f = 0; f <= e; f++) {
      const m = f / e;
      i[f] = this.getTangentAt(m, new w()), i[f].normalize();
    }
    s[0] = new w(), a[0] = new w();
    let c = Number.MAX_VALUE;
    const h = Math.abs(i[0].x), d = Math.abs(i[0].y), u = Math.abs(i[0].z);
    h <= c && (c = h, n.set(1, 0, 0)), d <= c && (c = d, n.set(0, 1, 0)), u <= c && n.set(0, 0, 1), o.crossVectors(i[0], n).normalize(), s[0].crossVectors(i[0], o), a[0].crossVectors(i[0], s[0]);
    for (let f = 1; f <= e; f++) {
      if (s[f] = s[f - 1].clone(), a[f] = a[f - 1].clone(), o.crossVectors(i[f - 1], i[f]), o.length() > Number.EPSILON) {
        o.normalize();
        const m = Math.acos(ct(i[f - 1].dot(i[f]), -1, 1));
        s[f].applyMatrix4(l.makeRotationAxis(o, m));
      }
      a[f].crossVectors(i[f], s[f]);
    }
    if (t === !0) {
      let f = Math.acos(ct(s[0].dot(s[e]), -1, 1));
      f /= e, i[0].dot(o.crossVectors(s[0], s[e])) > 0 && (f = -f);
      for (let m = 1; m <= e; m++)
        s[m].applyMatrix4(l.makeRotationAxis(i[m], f * m)), a[m].crossVectors(i[m], s[m]);
    }
    return {
      tangents: i,
      normals: s,
      binormals: a
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
  }
  fromJSON(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
}
class Ui extends dt {
  constructor(e = 0, t = 0, n = 1, i = 1, s = 0, a = Math.PI * 2, o = !1, l = 0) {
    super(), this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = s, this.aEndAngle = a, this.aClockwise = o, this.aRotation = l;
  }
  getPoint(e, t) {
    const n = t || new j(), i = Math.PI * 2;
    let s = this.aEndAngle - this.aStartAngle;
    const a = Math.abs(s) < Number.EPSILON;
    for (; s < 0; ) s += i;
    for (; s > i; ) s -= i;
    s < Number.EPSILON && (a ? s = 0 : s = i), this.aClockwise === !0 && !a && (s === i ? s = -i : s = s - i);
    const o = this.aStartAngle + e * s;
    let l = this.aX + this.xRadius * Math.cos(o), c = this.aY + this.yRadius * Math.sin(o);
    if (this.aRotation !== 0) {
      const h = Math.cos(this.aRotation), d = Math.sin(this.aRotation), u = l - this.aX, f = c - this.aY;
      l = u * h - f * d + this.aX, c = u * d + f * h + this.aY;
    }
    return n.set(l, c);
  }
  copy(e) {
    return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
}
Ui.prototype.isEllipseCurve = !0;
class Na extends Ui {
  constructor(e, t, n, i, s, a) {
    super(e, t, n, n, i, s, a), this.type = "ArcCurve";
  }
}
Na.prototype.isArcCurve = !0;
function Or() {
  let r = 0, e = 0, t = 0, n = 0;
  function i(s, a, o, l) {
    r = s, e = o, t = -3 * s + 3 * a - 2 * o - l, n = 2 * s - 2 * a + o + l;
  }
  return {
    initCatmullRom: function(s, a, o, l, c) {
      i(a, o, c * (o - s), c * (l - a));
    },
    initNonuniformCatmullRom: function(s, a, o, l, c, h, d) {
      let u = (a - s) / c - (o - s) / (c + h) + (o - a) / h, f = (o - a) / h - (l - a) / (h + d) + (l - o) / d;
      u *= h, f *= h, i(a, o, u, f);
    },
    calc: function(s) {
      const a = s * s, o = a * s;
      return r + e * s + t * a + n * o;
    }
  };
}
const Ei = new w(), xr = new Or(), _r = new Or(), vr = new Or();
class Ba extends dt {
  constructor(e = [], t = !1, n = "centripetal", i = 0.5) {
    super(), this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i;
  }
  getPoint(e, t = new w()) {
    const n = t, i = this.points, s = i.length, a = (s - (this.closed ? 0 : 1)) * e;
    let o = Math.floor(a), l = a - o;
    this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / s) + 1) * s : l === 0 && o === s - 1 && (o = s - 2, l = 1);
    let c, h;
    this.closed || o > 0 ? c = i[(o - 1) % s] : (Ei.subVectors(i[0], i[1]).add(i[0]), c = Ei);
    const d = i[o % s], u = i[(o + 1) % s];
    if (this.closed || o + 2 < s ? h = i[(o + 2) % s] : (Ei.subVectors(i[s - 1], i[s - 2]).add(i[s - 1]), h = Ei), this.curveType === "centripetal" || this.curveType === "chordal") {
      const f = this.curveType === "chordal" ? 0.5 : 0.25;
      let m = Math.pow(c.distanceToSquared(d), f), x = Math.pow(d.distanceToSquared(u), f), _ = Math.pow(u.distanceToSquared(h), f);
      x < 1e-4 && (x = 1), m < 1e-4 && (m = x), _ < 1e-4 && (_ = x), xr.initNonuniformCatmullRom(c.x, d.x, u.x, h.x, m, x, _), _r.initNonuniformCatmullRom(c.y, d.y, u.y, h.y, m, x, _), vr.initNonuniformCatmullRom(c.z, d.z, u.z, h.z, m, x, _);
    } else this.curveType === "catmullrom" && (xr.initCatmullRom(c.x, d.x, u.x, h.x, this.tension), _r.initCatmullRom(c.y, d.y, u.y, h.y, this.tension), vr.initCatmullRom(c.z, d.z, u.z, h.z, this.tension));
    return n.set(
      xr.calc(l),
      _r.calc(l),
      vr.calc(l)
    ), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(i.clone());
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const i = this.points[t];
      e.points.push(i.toArray());
    }
    return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(new w().fromArray(i));
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
}
Ba.prototype.isCatmullRomCurve3 = !0;
function Ys(r, e, t, n, i) {
  const s = (n - e) * 0.5, a = (i - t) * 0.5, o = r * r, l = r * o;
  return (2 * t - 2 * n + s + a) * l + (-3 * t + 3 * n - 2 * s - a) * o + s * r + t;
}
function Td(r, e) {
  const t = 1 - r;
  return t * t * e;
}
function Ad(r, e) {
  return 2 * (1 - r) * r * e;
}
function Ld(r, e) {
  return r * r * e;
}
function qn(r, e, t, n) {
  return Td(r, e) + Ad(r, t) + Ld(r, n);
}
function Rd(r, e) {
  const t = 1 - r;
  return t * t * t * e;
}
function Cd(r, e) {
  const t = 1 - r;
  return 3 * t * t * r * e;
}
function Pd(r, e) {
  return 3 * (1 - r) * r * r * e;
}
function Dd(r, e) {
  return r * r * r * e;
}
function Xn(r, e, t, n, i) {
  return Rd(r, e) + Cd(r, t) + Pd(r, n) + Dd(r, i);
}
class Gr extends dt {
  constructor(e = new j(), t = new j(), n = new j(), i = new j()) {
    super(), this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new j()) {
    const n = t, i = this.v0, s = this.v1, a = this.v2, o = this.v3;
    return n.set(
      Xn(e, i.x, s.x, a.x, o.x),
      Xn(e, i.y, s.y, a.y, o.y)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
Gr.prototype.isCubicBezierCurve = !0;
class za extends dt {
  constructor(e = new w(), t = new w(), n = new w(), i = new w()) {
    super(), this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new w()) {
    const n = t, i = this.v0, s = this.v1, a = this.v2, o = this.v3;
    return n.set(
      Xn(e, i.x, s.x, a.x, o.x),
      Xn(e, i.y, s.y, a.y, o.y),
      Xn(e, i.z, s.z, a.z, o.z)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
za.prototype.isCubicBezierCurve3 = !0;
class Oi extends dt {
  constructor(e = new j(), t = new j()) {
    super(), this.type = "LineCurve", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new j()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t) {
    const n = t || new j();
    return n.copy(this.v2).sub(this.v1).normalize(), n;
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
Oi.prototype.isLineCurve = !0;
class Id extends dt {
  constructor(e = new w(), t = new w()) {
    super(), this.type = "LineCurve3", this.isLineCurve3 = !0, this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new w()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class Hr extends dt {
  constructor(e = new j(), t = new j(), n = new j()) {
    super(), this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new j()) {
    const n = t, i = this.v0, s = this.v1, a = this.v2;
    return n.set(
      qn(e, i.x, s.x, a.x),
      qn(e, i.y, s.y, a.y)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
Hr.prototype.isQuadraticBezierCurve = !0;
class Ua extends dt {
  constructor(e = new w(), t = new w(), n = new w()) {
    super(), this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new w()) {
    const n = t, i = this.v0, s = this.v1, a = this.v2;
    return n.set(
      qn(e, i.x, s.x, a.x),
      qn(e, i.y, s.y, a.y),
      qn(e, i.z, s.z, a.z)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
Ua.prototype.isQuadraticBezierCurve3 = !0;
class Vr extends dt {
  constructor(e = []) {
    super(), this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new j()) {
    const n = t, i = this.points, s = (i.length - 1) * e, a = Math.floor(s), o = s - a, l = i[a === 0 ? a : a - 1], c = i[a], h = i[a > i.length - 2 ? i.length - 1 : a + 1], d = i[a > i.length - 3 ? i.length - 1 : a + 2];
    return n.set(
      Ys(o, l.x, c.x, h.x, d.x),
      Ys(o, l.y, c.y, h.y, d.y)
    ), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const i = this.points[t];
      e.points.push(i.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(new j().fromArray(i));
    }
    return this;
  }
}
Vr.prototype.isSplineCurve = !0;
var Fd = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: Na,
  CatmullRomCurve3: Ba,
  CubicBezierCurve: Gr,
  CubicBezierCurve3: za,
  EllipseCurve: Ui,
  LineCurve: Oi,
  LineCurve3: Id,
  QuadraticBezierCurve: Hr,
  QuadraticBezierCurve3: Ua,
  SplineCurve: Vr
});
class Nd extends dt {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new Oi(t, e));
  }
  // To get accurate point with reference to
  // entire path distance at time t,
  // following has to be done:
  // 1. Length of each sub path have to be known
  // 2. Locate and identify type of curve
  // 3. Get t for the curve
  // 4. Return curve.getPointAt(t')
  getPoint(e) {
    const t = e * this.getLength(), n = this.getCurveLengths();
    let i = 0;
    for (; i < n.length; ) {
      if (n[i] >= t) {
        const s = n[i] - t, a = this.curves[i], o = a.getLength(), l = o === 0 ? 0 : 1 - s / o;
        return a.getPointAt(l);
      }
      i++;
    }
    return null;
  }
  // We cannot use the default THREE.Curve getPoint() with getLength() because in
  // THREE.Curve, getLength() depends on getPoint() but in THREE.CurvePath
  // getPoint() depends on getLength
  getLength() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  }
  // cacheLengths must be recalculated.
  updateArcLengths() {
    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
  }
  // Compute lengths and cache them
  // We cannot overwrite getLengths() because UtoT mapping uses it.
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const e = [];
    let t = 0;
    for (let n = 0, i = this.curves.length; n < i; n++)
      t += this.curves[n].getLength(), e.push(t);
    return this.cacheLengths = e, e;
  }
  getSpacedPoints(e = 40) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    const t = [];
    let n;
    for (let i = 0, s = this.curves; i < s.length; i++) {
      const a = s[i], o = a && a.isEllipseCurve ? e * 2 : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? e * a.points.length : e, l = a.getPoints(o);
      for (let c = 0; c < l.length; c++) {
        const h = l[c];
        n && n.equals(h) || (t.push(h), n = h);
      }
    }
    return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
  }
  copy(e) {
    super.copy(e), this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(i.clone());
    }
    return this.autoClose = e.autoClose, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.autoClose = this.autoClose, e.curves = [];
    for (let t = 0, n = this.curves.length; t < n; t++) {
      const i = this.curves[t];
      e.curves.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(new Fd[i.type]().fromJSON(i));
    }
    return this;
  }
}
class Pr extends Nd {
  constructor(e) {
    super(), this.type = "Path", this.currentPoint = new j(), e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, n = e.length; t < n; t++)
      this.lineTo(e[t].x, e[t].y);
    return this;
  }
  moveTo(e, t) {
    return this.currentPoint.set(e, t), this;
  }
  lineTo(e, t) {
    const n = new Oi(this.currentPoint.clone(), new j(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    const s = new Hr(
      this.currentPoint.clone(),
      new j(e, t),
      new j(n, i)
    );
    return this.curves.push(s), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(e, t, n, i, s, a) {
    const o = new Gr(
      this.currentPoint.clone(),
      new j(e, t),
      new j(n, i),
      new j(s, a)
    );
    return this.curves.push(o), this.currentPoint.set(s, a), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e), n = new Vr(t);
    return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, n, i, s, a) {
    const o = this.currentPoint.x, l = this.currentPoint.y;
    return this.absarc(
      e + o,
      t + l,
      n,
      i,
      s,
      a
    ), this;
  }
  absarc(e, t, n, i, s, a) {
    return this.absellipse(e, t, n, n, i, s, a), this;
  }
  ellipse(e, t, n, i, s, a, o, l) {
    const c = this.currentPoint.x, h = this.currentPoint.y;
    return this.absellipse(e + c, t + h, n, i, s, a, o, l), this;
  }
  absellipse(e, t, n, i, s, a, o, l) {
    const c = new Ui(e, t, n, i, s, a, o, l);
    if (this.curves.length > 0) {
      const d = c.getPoint(0);
      d.equals(this.currentPoint) || this.lineTo(d.x, d.y);
    }
    this.curves.push(c);
    const h = c.getPoint(1);
    return this.currentPoint.copy(h), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.currentPoint = this.currentPoint.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}
class kr extends Pr {
  constructor(e) {
    super(e), this.uuid = bt(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(e) {
    const t = [];
    for (let n = 0, i = this.holes.length; n < i; n++)
      t[n] = this.holes[n].getPoints(e);
    return t;
  }
  // get points of shape and holes (keypoints based on segments parameter)
  extractPoints(e) {
    return {
      shape: this.getPoints(e),
      holes: this.getPointsHoles(e)
    };
  }
  copy(e) {
    super.copy(e), this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.uuid = this.uuid, e.holes = [];
    for (let t = 0, n = this.holes.length; t < n; t++) {
      const i = this.holes[t];
      e.holes.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(new Pr().fromJSON(i));
    }
    return this;
  }
}
class St extends Re {
  constructor(e, t = 1) {
    super(), this.type = "Light", this.color = new le(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
St.prototype.isLight = !0;
class Bd extends St {
  constructor(e, t, n) {
    super(e, n), this.type = "HemisphereLight", this.position.copy(Re.DefaultUp), this.updateMatrix(), this.groundColor = new le(t);
  }
  copy(e) {
    return St.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this;
  }
}
Bd.prototype.isHemisphereLight = !0;
const js = /* @__PURE__ */ new ue(), Zs = /* @__PURE__ */ new w(), Js = /* @__PURE__ */ new w();
class Wr {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.mapSize = new j(512, 512), this.map = null, this.mapPass = null, this.matrix = new ue(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Ii(), this._frameExtents = new j(1, 1), this._viewportCount = 1, this._viewports = [
      new Ie(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    Zs.setFromMatrixPosition(e.matrixWorld), t.position.copy(Zs), Js.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Js), t.updateMatrixWorld(), js.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(js), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(t.projectionMatrix), n.multiply(t.matrixWorldInverse);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class Oa extends Wr {
  constructor() {
    super(new at(50, 1, 0.5, 500)), this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = Tr * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
Oa.prototype.isSpotLightShadow = !0;
class zd extends St {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, a = 1) {
    super(e, t), this.type = "SpotLight", this.position.copy(Re.DefaultUp), this.updateMatrix(), this.target = new Re(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = a, this.shadow = new Oa();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
zd.prototype.isSpotLight = !0;
const $s = /* @__PURE__ */ new ue(), kn = /* @__PURE__ */ new w(), yr = /* @__PURE__ */ new w();
class Ga extends Wr {
  constructor() {
    super(new at(90, 1, 0.5, 500)), this._frameExtents = new j(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new Ie(2, 1, 1, 1),
      // negative X
      new Ie(0, 1, 1, 1),
      // positive Z
      new Ie(3, 1, 1, 1),
      // negative Z
      new Ie(1, 1, 1, 1),
      // positive Y
      new Ie(3, 0, 1, 1),
      // negative Y
      new Ie(1, 0, 1, 1)
    ], this._cubeDirections = [
      new w(1, 0, 0),
      new w(-1, 0, 0),
      new w(0, 0, 1),
      new w(0, 0, -1),
      new w(0, 1, 0),
      new w(0, -1, 0)
    ], this._cubeUps = [
      new w(0, 1, 0),
      new w(0, 1, 0),
      new w(0, 1, 0),
      new w(0, 1, 0),
      new w(0, 0, 1),
      new w(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), kn.setFromMatrixPosition(e.matrixWorld), n.position.copy(kn), yr.copy(n.position), yr.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(yr), n.updateMatrixWorld(), i.makeTranslation(-kn.x, -kn.y, -kn.z), $s.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix($s);
  }
}
Ga.prototype.isPointLightShadow = !0;
class Ud extends St {
  constructor(e, t, n = 0, i = 1) {
    super(e, t), this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Ga();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
Ud.prototype.isPointLight = !0;
class Ha extends Fr {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, a = 2e3) {
    super(), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - e, a = n + e, o = i + t, l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, a = s + c * this.view.width, o -= h * this.view.offsetY, l = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
Ha.prototype.isOrthographicCamera = !0;
class Va extends Wr {
  constructor() {
    super(new Ha(-5, 5, 5, -5, 0.5, 500));
  }
}
Va.prototype.isDirectionalLightShadow = !0;
class ka extends St {
  constructor(e, t) {
    super(e, t), this.type = "DirectionalLight", this.position.copy(Re.DefaultUp), this.updateMatrix(), this.target = new Re(), this.shadow = new Va();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
ka.prototype.isDirectionalLight = !0;
class Wa extends St {
  constructor(e, t) {
    super(e, t), this.type = "AmbientLight";
  }
}
Wa.prototype.isAmbientLight = !0;
class Od extends St {
  constructor(e, t, n = 10, i = 10) {
    super(e, t), this.type = "RectAreaLight", this.width = n, this.height = i;
  }
  copy(e) {
    return super.copy(e), this.width = e.width, this.height = e.height, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.width = this.width, t.object.height = this.height, t;
  }
}
Od.prototype.isRectAreaLight = !0;
class qa {
  constructor() {
    this.coefficients = [];
    for (let e = 0; e < 9; e++)
      this.coefficients.push(new w());
  }
  set(e) {
    for (let t = 0; t < 9; t++)
      this.coefficients[t].copy(e[t]);
    return this;
  }
  zero() {
    for (let e = 0; e < 9; e++)
      this.coefficients[e].set(0, 0, 0);
    return this;
  }
  // get the radiance in the direction of the normal
  // target is a Vector3
  getAt(e, t) {
    const n = e.x, i = e.y, s = e.z, a = this.coefficients;
    return t.copy(a[0]).multiplyScalar(0.282095), t.addScaledVector(a[1], 0.488603 * i), t.addScaledVector(a[2], 0.488603 * s), t.addScaledVector(a[3], 0.488603 * n), t.addScaledVector(a[4], 1.092548 * (n * i)), t.addScaledVector(a[5], 1.092548 * (i * s)), t.addScaledVector(a[6], 0.315392 * (3 * s * s - 1)), t.addScaledVector(a[7], 1.092548 * (n * s)), t.addScaledVector(a[8], 0.546274 * (n * n - i * i)), t;
  }
  // get the irradiance (radiance convolved with cosine lobe) in the direction of the normal
  // target is a Vector3
  // https://graphics.stanford.edu/papers/envmap/envmap.pdf
  getIrradianceAt(e, t) {
    const n = e.x, i = e.y, s = e.z, a = this.coefficients;
    return t.copy(a[0]).multiplyScalar(0.886227), t.addScaledVector(a[1], 2 * 0.511664 * i), t.addScaledVector(a[2], 2 * 0.511664 * s), t.addScaledVector(a[3], 2 * 0.511664 * n), t.addScaledVector(a[4], 2 * 0.429043 * n * i), t.addScaledVector(a[5], 2 * 0.429043 * i * s), t.addScaledVector(a[6], 0.743125 * s * s - 0.247708), t.addScaledVector(a[7], 2 * 0.429043 * n * s), t.addScaledVector(a[8], 0.429043 * (n * n - i * i)), t;
  }
  add(e) {
    for (let t = 0; t < 9; t++)
      this.coefficients[t].add(e.coefficients[t]);
    return this;
  }
  addScaledSH(e, t) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].addScaledVector(e.coefficients[n], t);
    return this;
  }
  scale(e) {
    for (let t = 0; t < 9; t++)
      this.coefficients[t].multiplyScalar(e);
    return this;
  }
  lerp(e, t) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].lerp(e.coefficients[n], t);
    return this;
  }
  equals(e) {
    for (let t = 0; t < 9; t++)
      if (!this.coefficients[t].equals(e.coefficients[t]))
        return !1;
    return !0;
  }
  copy(e) {
    return this.set(e.coefficients);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  fromArray(e, t = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++)
      n[i].fromArray(e, t + i * 3);
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++)
      n[i].toArray(e, t + i * 3);
    return e;
  }
  // evaluate the basis functions
  // shBasis is an Array[ 9 ]
  static getBasisAt(e, t) {
    const n = e.x, i = e.y, s = e.z;
    t[0] = 0.282095, t[1] = 0.488603 * i, t[2] = 0.488603 * s, t[3] = 0.488603 * n, t[4] = 1.092548 * n * i, t[5] = 1.092548 * i * s, t[6] = 0.315392 * (3 * s * s - 1), t[7] = 1.092548 * n * s, t[8] = 0.546274 * (n * n - i * i);
  }
}
qa.prototype.isSphericalHarmonics3 = !0;
class qr extends St {
  constructor(e = new qa(), t = 1) {
    super(void 0, t), this.sh = e;
  }
  copy(e) {
    return super.copy(e), this.sh.copy(e.sh), this;
  }
  fromJSON(e) {
    return this.intensity = e.intensity, this.sh.fromArray(e.sh), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.sh = this.sh.toArray(), t;
  }
}
qr.prototype.isLightProbe = !0;
class Gd {
  static decodeText(e) {
    if (typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.substr(0, t + 1);
  }
}
class Hd extends ze {
  constructor() {
    super(), this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
  }
  copy(e) {
    return super.copy(e), this.instanceCount = e.instanceCount, this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = super.toJSON(this);
    return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e;
  }
}
Hd.prototype.isInstancedBufferGeometry = !0;
class Vd extends Ze {
  constructor(e, t, n, i) {
    typeof n == "number" && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), super(e, t, n), this.meshPerAttribute = i || 1;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
Vd.prototype.isInstancedBufferAttribute = !0;
class kd extends jt {
  constructor(e) {
    super(e), typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = Tn.get(e);
    if (a !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    const o = {};
    o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader, fetch(e, o).then(function(l) {
      return l.blob();
    }).then(function(l) {
      return createImageBitmap(l, Object.assign(s.options, { colorSpaceConversion: "none" }));
    }).then(function(l) {
      Tn.add(e, l), t && t(l), s.manager.itemEnd(e);
    }).catch(function(l) {
      i && i(l), s.manager.itemError(e), s.manager.itemEnd(e);
    }), s.manager.itemStart(e);
  }
}
kd.prototype.isImageBitmapLoader = !0;
let Ti;
const Wd = {
  getContext: function() {
    return Ti === void 0 && (Ti = new (window.AudioContext || window.webkitAudioContext)()), Ti;
  },
  setContext: function(r) {
    Ti = r;
  }
};
class qd extends jt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, a = new bd(this.manager);
    a.setResponseType("arraybuffer"), a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(o) {
      try {
        const l = o.slice(0);
        Wd.getContext().decodeAudioData(l, function(h) {
          t(h);
        });
      } catch (l) {
        i ? i(l) : console.error(l), s.manager.itemError(e);
      }
    }, n, i);
  }
}
class Xd extends qr {
  constructor(e, t, n = 1) {
    super(void 0, n);
    const i = new le().set(e), s = new le().set(t), a = new w(i.r, i.g, i.b), o = new w(s.r, s.g, s.b), l = Math.sqrt(Math.PI), c = l * Math.sqrt(0.75);
    this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l), this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c);
  }
}
Xd.prototype.isHemisphereLightProbe = !0;
class Yd extends qr {
  constructor(e, t = 1) {
    super(void 0, t);
    const n = new le().set(e);
    this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));
  }
}
Yd.prototype.isAmbientLightProbe = !0;
class jd extends Re {
  constructor(e) {
    super(), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = [];
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this;
  }
  setMediaElementSource(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this;
  }
  setMediaStreamSource(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this;
  }
  setBuffer(e) {
    return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this;
  }
  play(e = 0) {
    if (this.isPlaying === !0) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + e;
    const t = this.context.createBufferSource();
    return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
  }
  pause() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.isPlaying === !0 && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.loop === !0 && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
  }
  stop() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].connect(this.filters[e]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else
      this.source.connect(this.getOutput());
    return this._connected = !0, this;
  }
  disconnect() {
    if (this.filters.length > 0) {
      this.source.disconnect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].disconnect(this.filters[e]);
      this.filters[this.filters.length - 1].disconnect(this.getOutput());
    } else
      this.source.disconnect(this.getOutput());
    return this._connected = !1, this;
  }
  getFilters() {
    return this.filters;
  }
  setFilters(e) {
    return e || (e = []), this._connected === !0 ? (this.disconnect(), this.filters = e.slice(), this.connect()) : this.filters = e.slice(), this;
  }
  setDetune(e) {
    if (this.detune = e, this.source.detune !== void 0)
      return this.isPlaying === !0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this;
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(e) {
    return this.setFilters(e ? [e] : []);
  }
  setPlaybackRate(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.playbackRate = e, this.isPlaying === !0 && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this;
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    this.isPlaying = !1;
  }
  getLoop() {
    return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
  }
  setLoop(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.loop = e, this.isPlaying === !0 && (this.source.loop = this.loop), this;
  }
  setLoopStart(e) {
    return this.loopStart = e, this;
  }
  setLoopEnd(e) {
    return this.loopEnd = e, this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  }
}
class Zd {
  constructor(e, t, n) {
    this.binding = e, this.valueSize = n;
    let i, s, a;
    switch (t) {
      case "quaternion":
        i = this._slerp, s = this._slerpAdditive, a = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
        break;
      case "string":
      case "bool":
        i = this._select, s = this._select, a = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
        break;
      default:
        i = this._lerp, s = this._lerpAdditive, a = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
    }
    this._mixBufferRegion = i, this._mixBufferRegionAdditive = s, this._setIdentity = a, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
  }
  // accumulate data in the 'incoming' region into 'accu<i>'
  accumulate(e, t) {
    const n = this.buffer, i = this.valueSize, s = e * i + i;
    let a = this.cumulativeWeight;
    if (a === 0) {
      for (let o = 0; o !== i; ++o)
        n[s + o] = n[o];
      a = t;
    } else {
      a += t;
      const o = t / a;
      this._mixBufferRegion(n, s, 0, o, i);
    }
    this.cumulativeWeight = a;
  }
  // accumulate data in the 'incoming' region into 'add'
  accumulateAdditive(e) {
    const t = this.buffer, n = this.valueSize, i = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, i, 0, e, n), this.cumulativeWeightAdditive += e;
  }
  // apply the state of 'accu<i>' to the binding when accus differ
  apply(e) {
    const t = this.valueSize, n = this.buffer, i = e * t + t, s = this.cumulativeWeight, a = this.cumulativeWeightAdditive, o = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, s < 1) {
      const l = t * this._origIndex;
      this._mixBufferRegion(
        n,
        i,
        l,
        1 - s,
        t
      );
    }
    a > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
    for (let l = t, c = t + t; l !== c; ++l)
      if (n[l] !== n[l + t]) {
        o.setValue(n, i);
        break;
      }
  }
  // remember the state of the bound property and copy it to both accus
  saveOriginalState() {
    const e = this.binding, t = this.buffer, n = this.valueSize, i = n * this._origIndex;
    e.getValue(t, i);
    for (let s = n, a = i; s !== a; ++s)
      t[s] = t[i + s % n];
    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
  }
  // apply the state previously taken via 'saveOriginalState' to the binding
  restoreOriginalState() {
    const e = this.valueSize * 3;
    this.binding.setValue(this.buffer, e);
  }
  _setAdditiveIdentityNumeric() {
    const e = this._addIndex * this.valueSize, t = e + this.valueSize;
    for (let n = e; n < t; n++)
      this.buffer[n] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
  }
  _setAdditiveIdentityOther() {
    const e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++)
      this.buffer[t + n] = this.buffer[e + n];
  }
  // mix functions
  _select(e, t, n, i, s) {
    if (i >= 0.5)
      for (let a = 0; a !== s; ++a)
        e[t + a] = e[n + a];
  }
  _slerp(e, t, n, i) {
    it.slerpFlat(e, t, e, t, e, n, i);
  }
  _slerpAdditive(e, t, n, i, s) {
    const a = this._workIndex * s;
    it.multiplyQuaternionsFlat(e, a, e, t, e, n), it.slerpFlat(e, t, e, t, e, a, i);
  }
  _lerp(e, t, n, i, s) {
    const a = 1 - i;
    for (let o = 0; o !== s; ++o) {
      const l = t + o;
      e[l] = e[l] * a + e[n + o] * i;
    }
  }
  _lerpAdditive(e, t, n, i, s) {
    for (let a = 0; a !== s; ++a) {
      const o = t + a;
      e[o] = e[o] + e[n + a] * i;
    }
  }
}
const Xr = "\\[\\]\\.:\\/", Jd = new RegExp("[" + Xr + "]", "g"), Yr = "[^" + Xr + "]", $d = "[^" + Xr.replace("\\.", "") + "]", Qd = /((?:WC+[\/:])*)/.source.replace("WC", Yr), Kd = /(WCOD+)?/.source.replace("WCOD", $d), ef = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Yr), tf = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Yr), nf = new RegExp(
  "^" + Qd + Kd + ef + tf + "$"
), rf = ["material", "materials", "bones"];
class sf {
  constructor(e, t, n) {
    const i = n || De.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class De {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || De.parseTrackName(t), this.node = De.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new De.Composite(e, t, n) : new De(e, t, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(Jd, "");
  }
  static parseTrackName(e) {
    const t = nf.exec(e);
    if (!t)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      // required
      propertyIndex: t[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const s = n.nodeName.substring(i + 1);
      rf.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (!t || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      const n = function(s) {
        for (let a = 0; a < s.length; a++) {
          const o = s[a];
          if (o.name === t || o.uuid === t)
            return o;
          const l = n(o.children);
          if (l) return l;
        }
        return null;
      }, i = n(e.children);
      if (i)
        return i;
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(e, t) {
    e[t] = this.node[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  // Direct
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // EntireArray
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // ArrayElement
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // HasToFromArray
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  // create getter / setter pair for a property in the scene graph
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let s = t.propertyIndex;
    if (e || (e = De.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
      return;
    }
    if (n) {
      let c = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++)
            if (e[h].name === c) {
              c = h;
              break;
            }
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[c];
      }
    }
    const a = e[i];
    if (a === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (s !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (e.geometry.isBufferGeometry) {
          if (!e.geometry.morphAttributes) {
            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
            return;
          }
          e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s]);
        } else {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
          return;
        }
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = s;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (l = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
De.Composite = sf;
De.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
De.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
De.prototype.GetterByBindingType = [
  De.prototype._getValue_direct,
  De.prototype._getValue_array,
  De.prototype._getValue_arrayElement,
  De.prototype._getValue_toArray
];
De.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    De.prototype._setValue_direct,
    De.prototype._setValue_direct_setNeedsUpdate,
    De.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    De.prototype._setValue_array,
    De.prototype._setValue_array_setNeedsUpdate,
    De.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    De.prototype._setValue_arrayElement,
    De.prototype._setValue_arrayElement_setNeedsUpdate,
    De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    De.prototype._setValue_fromArray,
    De.prototype._setValue_fromArray_setNeedsUpdate,
    De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class af {
  constructor(e, t, n = null, i = t.blendMode) {
    this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = i;
    const s = t.tracks, a = s.length, o = new Array(a), l = {
      endingStart: 2400,
      endingEnd: 2400
    };
    for (let c = 0; c !== a; ++c) {
      const h = s[c].createInterpolant(null);
      o[c] = h, h.settings = l;
    }
    this._interpolantSettings = l, this._interpolants = o, this._propertyBindings = new Array(a), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
  }
  // State & Scheduling
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  }
  isRunning() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  }
  // return true when play has been called
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(e) {
    return this._startTime = e, this;
  }
  setLoop(e, t) {
    return this.loop = e, this.repetitions = t, this;
  }
  // Weight
  // set the weight stopping any scheduled fading
  // although .enabled = false yields an effective weight of zero, this
  // method does *not* change .enabled, because it would be confusing
  setEffectiveWeight(e) {
    return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading();
  }
  // return the weight considering fading and .enabled
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(e) {
    return this._scheduleFading(e, 0, 1);
  }
  fadeOut(e) {
    return this._scheduleFading(e, 1, 0);
  }
  crossFadeFrom(e, t, n) {
    if (e.fadeOut(t), this.fadeIn(t), n) {
      const i = this._clip.duration, s = e._clip.duration, a = s / i, o = i / s;
      e.warp(1, a, t), this.warp(o, 1, t);
    }
    return this;
  }
  crossFadeTo(e, t, n) {
    return e.crossFadeFrom(this, t, n);
  }
  stopFading() {
    const e = this._weightInterpolant;
    return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  // Time Scale Control
  // set the time scale stopping any scheduled warping
  // although .paused = true yields an effective time scale of zero, this
  // method does *not* change .paused, because it would be confusing
  setEffectiveTimeScale(e) {
    return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping();
  }
  // return the time scale considering warping and .paused
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(e) {
    return this.timeScale = this._clip.duration / e, this.stopWarping();
  }
  syncWith(e) {
    return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping();
  }
  halt(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  }
  warp(e, t, n) {
    const i = this._mixer, s = i.time, a = this.timeScale;
    let o = this._timeScaleInterpolant;
    o === null && (o = i._lendControlInterpolant(), this._timeScaleInterpolant = o);
    const l = o.parameterPositions, c = o.sampleValues;
    return l[0] = s, l[1] = s + n, c[0] = e / a, c[1] = t / a, this;
  }
  stopWarping() {
    const e = this._timeScaleInterpolant;
    return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  // Object Accessors
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  // Interna
  _update(e, t, n, i) {
    if (!this.enabled) {
      this._updateWeight(e);
      return;
    }
    const s = this._startTime;
    if (s !== null) {
      const l = (e - s) * n;
      if (l < 0 || n === 0)
        return;
      this._startTime = null, t = n * l;
    }
    t *= this._updateTimeScale(e);
    const a = this._updateTime(t), o = this._updateWeight(e);
    if (o > 0) {
      const l = this._interpolants, c = this._propertyBindings;
      switch (this.blendMode) {
        case 2501:
          for (let h = 0, d = l.length; h !== d; ++h)
            l[h].evaluate(a), c[h].accumulateAdditive(o);
          break;
        case 2500:
        default:
          for (let h = 0, d = l.length; h !== d; ++h)
            l[h].evaluate(a), c[h].accumulate(i, o);
      }
    }
  }
  _updateWeight(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopFading(), i === 0 && (this.enabled = !1));
      }
    }
    return this._effectiveWeight = t, t;
  }
  _updateTimeScale(e) {
    let t = 0;
    if (!this.paused) {
      t = this.timeScale;
      const n = this._timeScaleInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t);
      }
    }
    return this._effectiveTimeScale = t, t;
  }
  _updateTime(e) {
    const t = this._clip.duration, n = this.loop;
    let i = this.time + e, s = this._loopCount;
    const a = n === 2202;
    if (e === 0)
      return s === -1 ? i : a && (s & 1) === 1 ? t - i : i;
    if (n === 2200) {
      s === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
      e: {
        if (i >= t)
          i = t;
        else if (i < 0)
          i = 0;
        else {
          this.time = i;
          break e;
        }
        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: e < 0 ? -1 : 1
        });
      }
    } else {
      if (s === -1 && (e >= 0 ? (s = 0, this._setEndings(!0, this.repetitions === 0, a)) : this._setEndings(this.repetitions === 0, !0, a)), i >= t || i < 0) {
        const o = Math.floor(i / t);
        i -= t * o, s += Math.abs(o);
        const l = this.repetitions - s;
        if (l <= 0)
          this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = e > 0 ? t : 0, this.time = i, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: e > 0 ? 1 : -1
          });
        else {
          if (l === 1) {
            const c = e < 0;
            this._setEndings(c, !c, a);
          } else
            this._setEndings(!1, !1, a);
          this._loopCount = s, this.time = i, this._mixer.dispatchEvent({
            type: "loop",
            action: this,
            loopDelta: o
          });
        }
      } else
        this.time = i;
      if (a && (s & 1) === 1)
        return t - i;
    }
    return i;
  }
  _setEndings(e, t, n) {
    const i = this._interpolantSettings;
    n ? (i.endingStart = 2401, i.endingEnd = 2401) : (e ? i.endingStart = this.zeroSlopeAtStart ? 2401 : 2400 : i.endingStart = 2402, t ? i.endingEnd = this.zeroSlopeAtEnd ? 2401 : 2400 : i.endingEnd = 2402);
  }
  _scheduleFading(e, t, n) {
    const i = this._mixer, s = i.time;
    let a = this._weightInterpolant;
    a === null && (a = i._lendControlInterpolant(), this._weightInterpolant = a);
    const o = a.parameterPositions, l = a.sampleValues;
    return o[0] = s, l[0] = t, o[1] = s + e, l[1] = n, this;
  }
}
class of extends sn {
  constructor(e) {
    super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(e, t) {
    const n = e._localRoot || this._root, i = e._clip.tracks, s = i.length, a = e._propertyBindings, o = e._interpolants, l = n.uuid, c = this._bindingsByRootAndName;
    let h = c[l];
    h === void 0 && (h = {}, c[l] = h);
    for (let d = 0; d !== s; ++d) {
      const u = i[d], f = u.name;
      let m = h[f];
      if (m !== void 0)
        a[d] = m;
      else {
        if (m = a[d], m !== void 0) {
          m._cacheIndex === null && (++m.referenceCount, this._addInactiveBinding(m, l, f));
          continue;
        }
        const x = t && t._propertyBindings[d].binding.parsedPath;
        m = new Zd(
          De.create(n, f, x),
          u.ValueTypeName,
          u.getValueSize()
        ), ++m.referenceCount, this._addInactiveBinding(m, l, f), a[d] = m;
      }
      o[d].resultBuffer = m.buffer;
    }
  }
  _activateAction(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        const n = (e._localRoot || this._root).uuid, i = e._clip.uuid, s = this._actionsByClip[i];
        this._bindAction(
          e,
          s && s.knownActions[0]
        ), this._addInactiveAction(e, i, n);
      }
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const s = t[n];
        s.useCount++ === 0 && (this._lendBinding(s), s.saveOriginalState());
      }
      this._lendAction(e);
    }
  }
  _deactivateAction(e) {
    if (this._isActiveAction(e)) {
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const s = t[n];
        --s.useCount === 0 && (s.restoreOriginalState(), this._takeBackBinding(s));
      }
      this._takeBackAction(e);
    }
  }
  // Memory manager
  _initMemoryManager() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    const e = this;
    this.stats = {
      actions: {
        get total() {
          return e._actions.length;
        },
        get inUse() {
          return e._nActiveActions;
        }
      },
      bindings: {
        get total() {
          return e._bindings.length;
        },
        get inUse() {
          return e._nActiveBindings;
        }
      },
      controlInterpolants: {
        get total() {
          return e._controlInterpolants.length;
        },
        get inUse() {
          return e._nActiveControlInterpolants;
        }
      }
    };
  }
  // Memory management for AnimationAction objects
  _isActiveAction(e) {
    const t = e._cacheIndex;
    return t !== null && t < this._nActiveActions;
  }
  _addInactiveAction(e, t, n) {
    const i = this._actions, s = this._actionsByClip;
    let a = s[t];
    if (a === void 0)
      a = {
        knownActions: [e],
        actionByRoot: {}
      }, e._byClipCacheIndex = 0, s[t] = a;
    else {
      const o = a.knownActions;
      e._byClipCacheIndex = o.length, o.push(e);
    }
    e._cacheIndex = i.length, i.push(e), a.actionByRoot[n] = e;
  }
  _removeInactiveAction(e) {
    const t = this._actions, n = t[t.length - 1], i = e._cacheIndex;
    n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null;
    const s = e._clip.uuid, a = this._actionsByClip, o = a[s], l = o.knownActions, c = l[l.length - 1], h = e._byClipCacheIndex;
    c._byClipCacheIndex = h, l[h] = c, l.pop(), e._byClipCacheIndex = null;
    const d = o.actionByRoot, u = (e._localRoot || this._root).uuid;
    delete d[u], l.length === 0 && delete a[s], this._removeInactiveBindingsForAction(e);
  }
  _removeInactiveBindingsForAction(e) {
    const t = e._propertyBindings;
    for (let n = 0, i = t.length; n !== i; ++n) {
      const s = t[n];
      --s.referenceCount === 0 && this._removeInactiveBinding(s);
    }
  }
  _lendAction(e) {
    const t = this._actions, n = e._cacheIndex, i = this._nActiveActions++, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  _takeBackAction(e) {
    const t = this._actions, n = e._cacheIndex, i = --this._nActiveActions, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  // Memory management for PropertyMixer objects
  _addInactiveBinding(e, t, n) {
    const i = this._bindingsByRootAndName, s = this._bindings;
    let a = i[t];
    a === void 0 && (a = {}, i[t] = a), a[n] = e, e._cacheIndex = s.length, s.push(e);
  }
  _removeInactiveBinding(e) {
    const t = this._bindings, n = e.binding, i = n.rootNode.uuid, s = n.path, a = this._bindingsByRootAndName, o = a[i], l = t[t.length - 1], c = e._cacheIndex;
    l._cacheIndex = c, t[c] = l, t.pop(), delete o[s], Object.keys(o).length === 0 && delete a[i];
  }
  _lendBinding(e) {
    const t = this._bindings, n = e._cacheIndex, i = this._nActiveBindings++, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  _takeBackBinding(e) {
    const t = this._bindings, n = e._cacheIndex, i = --this._nActiveBindings, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  // Memory management of Interpolants for weight and time scale
  _lendControlInterpolant() {
    const e = this._controlInterpolants, t = this._nActiveControlInterpolants++;
    let n = e[t];
    return n === void 0 && (n = new Da(
      new Float32Array(2),
      new Float32Array(2),
      1,
      this._controlInterpolantsResultBuffer
    ), n.__cacheIndex = t, e[t] = n), n;
  }
  _takeBackControlInterpolant(e) {
    const t = this._controlInterpolants, n = e.__cacheIndex, i = --this._nActiveControlInterpolants, s = t[i];
    e.__cacheIndex = i, t[i] = e, s.__cacheIndex = n, t[n] = s;
  }
  // return an action for a clip optionally using a custom root target
  // object (this method allocates a lot of dynamic memory in case a
  // previously unknown clip/root combination is specified)
  clipAction(e, t, n) {
    const i = t || this._root, s = i.uuid;
    let a = typeof e == "string" ? Xs.findByName(i, e) : e;
    const o = a !== null ? a.uuid : e, l = this._actionsByClip[o];
    let c = null;
    if (n === void 0 && (a !== null ? n = a.blendMode : n = 2500), l !== void 0) {
      const d = l.actionByRoot[s];
      if (d !== void 0 && d.blendMode === n)
        return d;
      c = l.knownActions[0], a === null && (a = c._clip);
    }
    if (a === null) return null;
    const h = new af(this, a, t, n);
    return this._bindAction(h, c), this._addInactiveAction(h, o, s), h;
  }
  // get an existing action
  existingAction(e, t) {
    const n = t || this._root, i = n.uuid, s = typeof e == "string" ? Xs.findByName(n, e) : e, a = s ? s.uuid : e, o = this._actionsByClip[a];
    return o !== void 0 && o.actionByRoot[i] || null;
  }
  // deactivates all previously scheduled actions
  stopAllAction() {
    const e = this._actions, t = this._nActiveActions;
    for (let n = t - 1; n >= 0; --n)
      e[n].stop();
    return this;
  }
  // advance the time and update apply the animation
  update(e) {
    e *= this.timeScale;
    const t = this._actions, n = this._nActiveActions, i = this.time += e, s = Math.sign(e), a = this._accuIndex ^= 1;
    for (let c = 0; c !== n; ++c)
      t[c]._update(i, e, s, a);
    const o = this._bindings, l = this._nActiveBindings;
    for (let c = 0; c !== l; ++c)
      o[c].apply(a);
    return this;
  }
  // Allows you to seek to a specific time in an animation.
  setTime(e) {
    this.time = 0;
    for (let t = 0; t < this._actions.length; t++)
      this._actions[t].time = 0;
    return this.update(e);
  }
  // return this mixer's root target object
  getRoot() {
    return this._root;
  }
  // free all resources specific to a particular clip
  uncacheClip(e) {
    const t = this._actions, n = e.uuid, i = this._actionsByClip, s = i[n];
    if (s !== void 0) {
      const a = s.knownActions;
      for (let o = 0, l = a.length; o !== l; ++o) {
        const c = a[o];
        this._deactivateAction(c);
        const h = c._cacheIndex, d = t[t.length - 1];
        c._cacheIndex = null, c._byClipCacheIndex = null, d._cacheIndex = h, t[h] = d, t.pop(), this._removeInactiveBindingsForAction(c);
      }
      delete i[n];
    }
  }
  // free all resources specific to a particular root target object
  uncacheRoot(e) {
    const t = e.uuid, n = this._actionsByClip;
    for (const a in n) {
      const o = n[a].actionByRoot, l = o[t];
      l !== void 0 && (this._deactivateAction(l), this._removeInactiveAction(l));
    }
    const i = this._bindingsByRootAndName, s = i[t];
    if (s !== void 0)
      for (const a in s) {
        const o = s[a];
        o.restoreOriginalState(), this._removeInactiveBinding(o);
      }
  }
  // remove a targeted clip from the cache
  uncacheAction(e, t) {
    const n = this.existingAction(e, t);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
of.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
class lf extends an {
  constructor(e, t, n = 1) {
    super(e, t), this.meshPerAttribute = n || 1;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  clone(e) {
    const t = super.clone(e);
    return t.meshPerAttribute = this.meshPerAttribute, t;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.isInstancedInterleavedBuffer = !0, t.meshPerAttribute = this.meshPerAttribute, t;
  }
}
lf.prototype.isInstancedInterleavedBuffer = !0;
class cf extends Re {
  constructor(e) {
    super(), this.material = e, this.render = function() {
    }, this.hasPositions = !1, this.hasNormals = !1, this.hasColors = !1, this.hasUvs = !1, this.positionArray = null, this.normalArray = null, this.colorArray = null, this.uvArray = null, this.count = 0;
  }
}
cf.prototype.isImmediateRenderObject = !0;
const Vt = /* @__PURE__ */ new w(), Ai = /* @__PURE__ */ new ue(), Mr = /* @__PURE__ */ new ue();
class hf extends Ur {
  constructor(e) {
    const t = Xa(e), n = new ze(), i = [], s = [], a = new le(0, 0, 1), o = new le(0, 1, 0);
    for (let c = 0; c < t.length; c++) {
      const h = t[c];
      h.parent && h.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), s.push(a.r, a.g, a.b), s.push(o.r, o.g, o.b));
    }
    n.setAttribute("position", new ke(i, 3)), n.setAttribute("color", new ke(s, 3));
    const l = new $n({ vertexColors: !0, depthTest: !1, depthWrite: !1, toneMapped: !1, transparent: !0 });
    super(n, l), this.type = "SkeletonHelper", this.isSkeletonHelper = !0, this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1;
  }
  updateMatrixWorld(e) {
    const t = this.bones, n = this.geometry, i = n.getAttribute("position");
    Mr.copy(this.root.matrixWorld).invert();
    for (let s = 0, a = 0; s < t.length; s++) {
      const o = t[s];
      o.parent && o.parent.isBone && (Ai.multiplyMatrices(Mr, o.matrixWorld), Vt.setFromMatrixPosition(Ai), i.setXYZ(a, Vt.x, Vt.y, Vt.z), Ai.multiplyMatrices(Mr, o.parent.matrixWorld), Vt.setFromMatrixPosition(Ai), i.setXYZ(a + 1, Vt.x, Vt.y, Vt.z), a += 2);
    }
    n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(e);
  }
}
function Xa(r) {
  const e = [];
  r && r.isBone && e.push(r);
  for (let t = 0; t < r.children.length; t++)
    e.push.apply(e, Xa(r.children[t]));
  return e;
}
class uf extends Ur {
  constructor(e = 10, t = 10, n = 4473924, i = 8947848) {
    n = new le(n), i = new le(i);
    const s = t / 2, a = e / t, o = e / 2, l = [], c = [];
    for (let u = 0, f = 0, m = -o; u <= t; u++, m += a) {
      l.push(-o, 0, m, o, 0, m), l.push(m, 0, -o, m, 0, o);
      const x = u === s ? n : i;
      x.toArray(c, f), f += 3, x.toArray(c, f), f += 3, x.toArray(c, f), f += 3, x.toArray(c, f), f += 3;
    }
    const h = new ze();
    h.setAttribute("position", new ke(l, 3)), h.setAttribute("color", new ke(c, 3));
    const d = new $n({ vertexColors: !0, toneMapped: !1 });
    super(h, d), this.type = "GridHelper";
  }
}
const df = new Float32Array(1);
new Int32Array(df.buffer);
const ff = new Ir({
  side: 1,
  depthWrite: !1,
  depthTest: !1
});
new ut(new Pi(), ff);
dt.create = function(r, e) {
  return console.log("THREE.Curve.create() has been deprecated"), r.prototype = Object.create(dt.prototype), r.prototype.constructor = r, r.prototype.getPoint = e, r;
};
Pr.prototype.fromPoints = function(r) {
  return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(r);
};
uf.prototype.setColors = function() {
  console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");
};
hf.prototype.update = function() {
  console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
};
jt.prototype.extractUrlBase = function(r) {
  return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), Gd.extractUrlBase(r);
};
jt.Handlers = {
  add: function() {
    console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");
  },
  get: function() {
    console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");
  }
};
ft.prototype.center = function(r) {
  return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(r);
};
ft.prototype.empty = function() {
  return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty();
};
ft.prototype.isIntersectionBox = function(r) {
  return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(r);
};
ft.prototype.isIntersectionSphere = function(r) {
  return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(r);
};
ft.prototype.size = function(r) {
  return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(r);
};
Ln.prototype.empty = function() {
  return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty();
};
Ii.prototype.setFromMatrix = function(r) {
  return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(r);
};
Qe.prototype.flattenToArrayOffset = function(r, e) {
  return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(r, e);
};
Qe.prototype.multiplyVector3 = function(r) {
  return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), r.applyMatrix3(this);
};
Qe.prototype.multiplyVector3Array = function() {
  console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
};
Qe.prototype.applyToBufferAttribute = function(r) {
  return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), r.applyMatrix3(this);
};
Qe.prototype.applyToVector3Array = function() {
  console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
};
Qe.prototype.getInverse = function(r) {
  return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(r).invert();
};
ue.prototype.extractPosition = function(r) {
  return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(r);
};
ue.prototype.flattenToArrayOffset = function(r, e) {
  return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(r, e);
};
ue.prototype.getPosition = function() {
  return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), new w().setFromMatrixColumn(this, 3);
};
ue.prototype.setRotationFromQuaternion = function(r) {
  return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(r);
};
ue.prototype.multiplyToArray = function() {
  console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
};
ue.prototype.multiplyVector3 = function(r) {
  return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), r.applyMatrix4(this);
};
ue.prototype.multiplyVector4 = function(r) {
  return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), r.applyMatrix4(this);
};
ue.prototype.multiplyVector3Array = function() {
  console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
};
ue.prototype.rotateAxis = function(r) {
  console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), r.transformDirection(this);
};
ue.prototype.crossVector = function(r) {
  return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), r.applyMatrix4(this);
};
ue.prototype.translate = function() {
  console.error("THREE.Matrix4: .translate() has been removed.");
};
ue.prototype.rotateX = function() {
  console.error("THREE.Matrix4: .rotateX() has been removed.");
};
ue.prototype.rotateY = function() {
  console.error("THREE.Matrix4: .rotateY() has been removed.");
};
ue.prototype.rotateZ = function() {
  console.error("THREE.Matrix4: .rotateZ() has been removed.");
};
ue.prototype.rotateByAxis = function() {
  console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
};
ue.prototype.applyToBufferAttribute = function(r) {
  return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), r.applyMatrix4(this);
};
ue.prototype.applyToVector3Array = function() {
  console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
};
ue.prototype.makeFrustum = function(r, e, t, n, i, s) {
  return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(r, e, n, t, i, s);
};
ue.prototype.getInverse = function(r) {
  return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(r).invert();
};
Mt.prototype.isIntersectionLine = function(r) {
  return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(r);
};
it.prototype.multiplyVector3 = function(r) {
  return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), r.applyQuaternion(this);
};
it.prototype.inverse = function() {
  return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert();
};
Rn.prototype.isIntersectionBox = function(r) {
  return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(r);
};
Rn.prototype.isIntersectionPlane = function(r) {
  return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(r);
};
Rn.prototype.isIntersectionSphere = function(r) {
  return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(r);
};
Ye.prototype.area = function() {
  return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea();
};
Ye.prototype.barycoordFromPoint = function(r, e) {
  return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(r, e);
};
Ye.prototype.midpoint = function(r) {
  return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(r);
};
Ye.prototypenormal = function(r) {
  return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(r);
};
Ye.prototype.plane = function(r) {
  return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(r);
};
Ye.barycoordFromPoint = function(r, e, t, n, i) {
  return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), Ye.getBarycoord(r, e, t, n, i);
};
Ye.normal = function(r, e, t, n) {
  return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), Ye.getNormal(r, e, t, n);
};
kr.prototype.extractAllPoints = function(r) {
  return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(r);
};
kr.prototype.extrude = function(r) {
  return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new Bi(this, r);
};
kr.prototype.makeGeometry = function(r) {
  return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new rd(this, r);
};
j.prototype.fromAttribute = function(r, e, t) {
  return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(r, e, t);
};
j.prototype.distanceToManhattan = function(r) {
  return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(r);
};
j.prototype.lengthManhattan = function() {
  return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
};
w.prototype.setEulerFromRotationMatrix = function() {
  console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");
};
w.prototype.setEulerFromQuaternion = function() {
  console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
};
w.prototype.getPositionFromMatrix = function(r) {
  return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(r);
};
w.prototype.getScaleFromMatrix = function(r) {
  return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(r);
};
w.prototype.getColumnFromMatrix = function(r, e) {
  return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, r);
};
w.prototype.applyProjection = function(r) {
  return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(r);
};
w.prototype.fromAttribute = function(r, e, t) {
  return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(r, e, t);
};
w.prototype.distanceToManhattan = function(r) {
  return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(r);
};
w.prototype.lengthManhattan = function() {
  return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
};
Ie.prototype.fromAttribute = function(r, e, t) {
  return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(r, e, t);
};
Ie.prototype.lengthManhattan = function() {
  return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
};
Re.prototype.getChildByName = function(r) {
  return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(r);
};
Re.prototype.renderDepth = function() {
  console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
};
Re.prototype.translate = function(r, e) {
  return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, r);
};
Re.prototype.getWorldRotation = function() {
  console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");
};
Re.prototype.applyMatrix = function(r) {
  return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(r);
};
Object.defineProperties(Re.prototype, {
  eulerOrder: {
    get: function() {
      return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order;
    },
    set: function(r) {
      console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = r;
    }
  },
  useQuaternion: {
    get: function() {
      console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
    },
    set: function() {
      console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
    }
  }
});
ut.prototype.setDrawMode = function() {
  console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
};
Object.defineProperties(ut.prototype, {
  drawMode: {
    get: function() {
      return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), 0;
    },
    set: function() {
      console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
    }
  }
});
Ta.prototype.initBones = function() {
  console.error("THREE.SkinnedMesh: initBones() has been removed.");
};
at.prototype.setLens = function(r, e) {
  console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), e !== void 0 && (this.filmGauge = e), this.setFocalLength(r);
};
Object.defineProperties(St.prototype, {
  onlyShadow: {
    set: function() {
      console.warn("THREE.Light: .onlyShadow has been removed.");
    }
  },
  shadowCameraFov: {
    set: function(r) {
      console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = r;
    }
  },
  shadowCameraLeft: {
    set: function(r) {
      console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = r;
    }
  },
  shadowCameraRight: {
    set: function(r) {
      console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = r;
    }
  },
  shadowCameraTop: {
    set: function(r) {
      console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = r;
    }
  },
  shadowCameraBottom: {
    set: function(r) {
      console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = r;
    }
  },
  shadowCameraNear: {
    set: function(r) {
      console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = r;
    }
  },
  shadowCameraFar: {
    set: function(r) {
      console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = r;
    }
  },
  shadowCameraVisible: {
    set: function() {
      console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");
    }
  },
  shadowBias: {
    set: function(r) {
      console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = r;
    }
  },
  shadowDarkness: {
    set: function() {
      console.warn("THREE.Light: .shadowDarkness has been removed.");
    }
  },
  shadowMapWidth: {
    set: function(r) {
      console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = r;
    }
  },
  shadowMapHeight: {
    set: function(r) {
      console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = r;
    }
  }
});
Object.defineProperties(Ze.prototype, {
  length: {
    get: function() {
      return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length;
    }
  },
  dynamic: {
    get: function() {
      return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === 35048;
    },
    set: function() {
      console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(35048);
    }
  }
});
Ze.prototype.setDynamic = function(r) {
  return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(r === !0 ? 35048 : 35044), this;
};
Ze.prototype.copyIndicesArray = function() {
  console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
}, Ze.prototype.setArray = function() {
  console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
};
ze.prototype.addIndex = function(r) {
  console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(r);
};
ze.prototype.addAttribute = function(r, e) {
  return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), !(e && e.isBufferAttribute) && !(e && e.isInterleavedBufferAttribute) ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(r, new Ze(arguments[1], arguments[2]))) : r === "index" ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(r, e);
};
ze.prototype.addDrawCall = function(r, e, t) {
  t !== void 0 && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(r, e);
};
ze.prototype.clearDrawCalls = function() {
  console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups();
};
ze.prototype.computeOffsets = function() {
  console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
};
ze.prototype.removeAttribute = function(r) {
  return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(r);
};
ze.prototype.applyMatrix = function(r) {
  return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(r);
};
Object.defineProperties(ze.prototype, {
  drawcalls: {
    get: function() {
      return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups;
    }
  },
  offsets: {
    get: function() {
      return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups;
    }
  }
});
an.prototype.setDynamic = function(r) {
  return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(r === !0 ? 35048 : 35044), this;
};
an.prototype.setArray = function() {
  console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
};
Bi.prototype.getArrays = function() {
  console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.");
};
Bi.prototype.addShapeList = function() {
  console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.");
};
Bi.prototype.addShape = function() {
  console.error("THREE.ExtrudeGeometry: .addShape() has been removed.");
};
Br.prototype.dispose = function() {
  console.error("THREE.Scene: .dispose() has been removed.");
};
Object.defineProperties(Je.prototype, {
  wrapAround: {
    get: function() {
      console.warn("THREE.Material: .wrapAround has been removed.");
    },
    set: function() {
      console.warn("THREE.Material: .wrapAround has been removed.");
    }
  },
  overdraw: {
    get: function() {
      console.warn("THREE.Material: .overdraw has been removed.");
    },
    set: function() {
      console.warn("THREE.Material: .overdraw has been removed.");
    }
  },
  wrapRGB: {
    get: function() {
      return console.warn("THREE.Material: .wrapRGB has been removed."), new le();
    }
  },
  shading: {
    get: function() {
      console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
    },
    set: function(r) {
      console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = r === 1;
    }
  },
  stencilMask: {
    get: function() {
      return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask;
    },
    set: function(r) {
      console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = r;
    }
  }
});
Object.defineProperties(rn.prototype, {
  derivatives: {
    get: function() {
      return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives;
    },
    set: function(r) {
      console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = r;
    }
  }
});
Fe.prototype.clearTarget = function(r, e, t, n) {
  console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(r), this.clear(e, t, n);
};
Fe.prototype.animate = function(r) {
  console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(r);
};
Fe.prototype.getCurrentRenderTarget = function() {
  return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget();
};
Fe.prototype.getMaxAnisotropy = function() {
  return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy();
};
Fe.prototype.getPrecision = function() {
  return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision;
};
Fe.prototype.resetGLState = function() {
  return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset();
};
Fe.prototype.supportsFloatTextures = function() {
  return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float");
};
Fe.prototype.supportsHalfFloatTextures = function() {
  return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float");
};
Fe.prototype.supportsStandardDerivatives = function() {
  return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives");
};
Fe.prototype.supportsCompressedTextureS3TC = function() {
  return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc");
};
Fe.prototype.supportsCompressedTexturePVRTC = function() {
  return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc");
};
Fe.prototype.supportsBlendMinMax = function() {
  return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax");
};
Fe.prototype.supportsVertexTextures = function() {
  return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures;
};
Fe.prototype.supportsInstancedArrays = function() {
  return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays");
};
Fe.prototype.enableScissorTest = function(r) {
  console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(r);
};
Fe.prototype.initMaterial = function() {
  console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
};
Fe.prototype.addPrePlugin = function() {
  console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
};
Fe.prototype.addPostPlugin = function() {
  console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
};
Fe.prototype.updateShadowMap = function() {
  console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
};
Fe.prototype.setFaceCulling = function() {
  console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
};
Fe.prototype.allocTextureUnit = function() {
  console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
};
Fe.prototype.setTexture = function() {
  console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
};
Fe.prototype.setTexture2D = function() {
  console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
};
Fe.prototype.setTextureCube = function() {
  console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
};
Fe.prototype.getActiveMipMapLevel = function() {
  return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel();
};
Object.defineProperties(Fe.prototype, {
  shadowMapEnabled: {
    get: function() {
      return this.shadowMap.enabled;
    },
    set: function(r) {
      console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = r;
    }
  },
  shadowMapType: {
    get: function() {
      return this.shadowMap.type;
    },
    set: function(r) {
      console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = r;
    }
  },
  shadowMapCullFace: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
    }
  },
  context: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext();
    }
  },
  vr: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr;
    }
  },
  gammaInput: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1;
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");
    }
  },
  gammaOutput: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1;
    },
    set: function(r) {
      console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = r === !0 ? 3001 : 3e3;
    }
  },
  toneMappingWhitePoint: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1;
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.");
    }
  }
});
Object.defineProperties(wa.prototype, {
  cullFace: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
    }
  },
  renderReverseSided: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
    }
  },
  renderSingleSided: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
    }
  }
});
Object.defineProperties(nn.prototype, {
  wrapS: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS;
    },
    set: function(r) {
      console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = r;
    }
  },
  wrapT: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT;
    },
    set: function(r) {
      console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = r;
    }
  },
  magFilter: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter;
    },
    set: function(r) {
      console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = r;
    }
  },
  minFilter: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter;
    },
    set: function(r) {
      console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = r;
    }
  },
  anisotropy: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy;
    },
    set: function(r) {
      console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = r;
    }
  },
  offset: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset;
    },
    set: function(r) {
      console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = r;
    }
  },
  repeat: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat;
    },
    set: function(r) {
      console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = r;
    }
  },
  format: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format;
    },
    set: function(r) {
      console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = r;
    }
  },
  type: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type;
    },
    set: function(r) {
      console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = r;
    }
  },
  generateMipmaps: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps;
    },
    set: function(r) {
      console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = r;
    }
  }
});
jd.prototype.load = function(r) {
  console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
  const e = this;
  return new qd().load(r, function(n) {
    e.setBuffer(n);
  }), this;
};
Nr.prototype.updateCubeMap = function(r, e) {
  return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(r, e);
};
Nr.prototype.clear = function(r, e, t, n) {
  return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(r, e, t, n);
};
An.crossOrigin = void 0;
An.loadTexture = function(r, e, t, n) {
  console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
  const i = new Ed();
  i.setCrossOrigin(this.crossOrigin);
  const s = i.load(r, t, void 0, n);
  return e && (s.mapping = e), s;
};
An.loadTextureCube = function(r, e, t, n) {
  console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
  const i = new Sd();
  i.setCrossOrigin(this.crossOrigin);
  const s = i.load(r, t, void 0, n);
  return e && (s.mapping = e), s;
};
An.loadCompressedTexture = function() {
  console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
};
An.loadCompressedTextureCube = function() {
  console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
};
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: ia
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = ia);
const pf = 3, wr = Object.freeze({}), tn = /* @__PURE__ */ new Map(), br = /* @__PURE__ */ new Map();
function mf(r) {
  try {
    return new URL(String(r), window.location.href).toString();
  } catch {
    return String(r || "");
  }
}
function gf() {
  try {
    for (; tn.size > pf; ) {
      const r = tn.keys().next().value;
      if (!r) break;
      tn.delete(r);
    }
  } catch {
  }
}
async function xf({ file: r, signal: e }) {
  const t = mf(`./boards/${r}`), n = tn.get(t);
  if (n && n.json)
    return tn.delete(t), tn.set(t, n), n.json;
  const i = br.get(t);
  if (i) return await i;
  const s = (async () => {
    var c, h;
    const a = await fetch(t, { signal: e });
    if (!a.ok) throw new Error(`Failed to load board: ${r}`);
    const o = String(((h = (c = a.headers) == null ? void 0 : c.get) == null ? void 0 : h.call(c, "content-type")) || "").toLowerCase();
    let l = wr;
    if (o.includes("application/json")) {
      const d = await a.json();
      l = d && typeof d == "object" ? d : wr;
    } else {
      const d = await a.text();
      if (d) {
        const u = JSON.parse(d);
        l = u && typeof u == "object" ? u : wr;
      }
    }
    return tn.set(t, { at: Date.now(), json: l }), gf(), l;
  })().finally(() => br.delete(t));
  return br.set(t, s), await s;
}
function Sr(r) {
  if (r)
    try {
      r.traverse((e) => {
        var t, n, i;
        try {
          (n = (t = e.geometry) == null ? void 0 : t.dispose) == null || n.call(t);
        } catch {
        }
        try {
          const s = e.material;
          Array.isArray(s) ? s.forEach((a) => {
            var o;
            return (o = a == null ? void 0 : a.dispose) == null ? void 0 : o.call(a);
          }) : (i = s == null ? void 0 : s.dispose) == null || i.call(s);
        } catch {
        }
      });
    } catch {
    }
}
const _f = "singabldr.board.v2.json", Qs = 10, vf = 2, yf = 520, Mf = 640, Ks = /* @__PURE__ */ new WeakMap(), Dr = Object.freeze({
  STATUS: "status:update",
  BOARD_REBUILD: "board:rebuild",
  FINE_BUILD_PREFIX: "build:fine"
}), Er = /* @__PURE__ */ new Map();
let ea = "";
function ht() {
  return typeof performance < "u" && performance ? performance.now() : Date.now();
}
function Ft(r) {
  try {
    return r();
  } catch {
    return;
  }
}
function wf(r, e) {
  const t = String(r || "default");
  Ft(() => typeof window.__SINGABLDR_COALESCE == "function" ? (window.__SINGABLDR_COALESCE(t, e), !0) : !1) || Promise.resolve().then(e);
}
function Li(r, e, t) {
  const n = String(r || "default"), s = { signature: String(e || "") };
  Er.set(n, s), wf(n, () => {
    Er.get(n) === s && (Er.delete(n), t());
  });
}
function It(r, e) {
  const t = String(r || ""), n = String(e || ""), i = `${t}\0${n}`;
  i !== ea && (ea = i, Li(Dr.STATUS, i, () => {
    Ft(() => {
      const s = document.getElementById("game-title");
      s && s.textContent !== t && (s.textContent = t);
    }), Ft(() => {
      const s = document.getElementById("game-subtitle");
      s && s.textContent !== n && (s.textContent = n);
    });
  }));
}
function ta() {
  const r = Ft(() => document.getElementById("board-select"));
  return Ft(() => r ? String(r.value || "").trim() : "") || _f;
}
function bf() {
  const r = Ft(() => document.getElementById("board-select"));
  if (!r) return;
  let e = 0;
  r.addEventListener("change", () => {
    const t = ht();
    if (!(t - e < 120)) {
      e = t;
      try {
        if (window.__SINGABLDR_BOARD_SWITCH_MODE === "inplace" && typeof window.__SINGABLDR_REQUEST_BOARD_REBUILD == "function") {
          window.__SINGABLDR_REQUEST_BOARD_REBUILD();
          return;
        }
      } catch {
      }
      try {
        window.location.reload();
      } catch {
      }
    }
  });
}
function Sf(r) {
  let e = 1 / 0, t = 1 / 0, n = -1 / 0, i = -1 / 0;
  for (let s = 0; s < r.length; s++) {
    const a = r[s];
    if (!a || a.length < 2) continue;
    const o = Number(a[0]), l = Number(a[1]);
    !Number.isFinite(o) || !Number.isFinite(l) || (o < e && (e = o), o > n && (n = o), l < t && (t = l), l > i && (i = l));
  }
  return Number.isFinite(e) ? { minX: e, minY: t, maxX: n, maxY: i } : null;
}
function Ef(r, e, t) {
  let n = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i][0], o = t[i][1], l = t[s][0], c = t[s][1];
    o > e != c > e && r < (l - a) * (e - o) / (c - o + 0) + a && (n = !n);
  }
  return n;
}
function Tf(r) {
  const e = Array.isArray(r) ? r : [], t = [];
  for (const n of e) {
    if (!Array.isArray(n) || n.length < 3) continue;
    const i = Sf(n);
    i && t.push({ poly: n, bounds: i });
  }
  return function(i, s) {
    for (let a = 0; a < t.length; a++) {
      const o = t[a], l = o.bounds;
      if (!(i < l.minX || i > l.maxX || s < l.minY || s > l.maxY) && Ef(i, s, o.poly))
        return !0;
    }
    return !1;
  };
}
function Af(r, e, t) {
  const n = r.maxLon - r.minLon, i = r.maxLat - r.minLat;
  return {
    gridToLonLat(s, a) {
      const o = r.minLon + (s + 0.5) / e * n, l = r.minLat + (a + 0.5) / t * i;
      return { lon: o, lat: l };
    },
    lonLatToWorld(s, a, o) {
      const l = (s - r.minLon) / n, c = (a - r.minLat) / i, h = (l - 0.5) * e * o, d = (c - 0.5) * t * o;
      return { x: h, z: d };
    }
  };
}
function Lf(r) {
  var o;
  const e = Ft(() => Ks.get(r));
  if (e) return e;
  const t = Uf(r), n = Of(r), i = Array.isArray((o = r == null ? void 0 : r.scene) == null ? void 0 : o.polygons) ? r.scene.polygons : [], s = Array.isArray(r == null ? void 0 : r.features) ? r.features : [], a = {
    bounds: t,
    grid: n,
    polygons: i,
    features: s,
    polygonTester: Tf(i),
    buildGridCache: /* @__PURE__ */ new Map(),
    poiWorldPositionsCache: /* @__PURE__ */ new Map()
  };
  return Ft(() => {
    Ks.set(r, a);
  }), a;
}
function Rf(r, e, t) {
  const n = Number(r), i = Number(e), s = Number(t);
  return `${n}:${i}:${s}`;
}
function Ya(r, e) {
  const t = Rf(r.grid.width, r.grid.height, e), n = r.buildGridCache.get(t);
  if (n) return n;
  const i = Math.max(1, Math.floor(r.grid.width / e)), s = Math.max(1, Math.floor(r.grid.height / e)), a = Af(r.bounds, i, s), o = new Float64Array(i), l = new Float64Array(s), c = new Float32Array(i), h = new Float32Array(s);
  for (let u = 0; u < i; u++)
    o[u] = r.bounds.minLon + (u + 0.5) / i * (r.bounds.maxLon - r.bounds.minLon), c[u] = (u - i / 2) * e;
  for (let u = 0; u < s; u++)
    l[u] = r.bounds.minLat + (u + 0.5) / s * (r.bounds.maxLat - r.bounds.minLat), h[u] = (u - s / 2) * e;
  const d = {
    cols: i,
    rows: s,
    max: i * s,
    proj: a,
    lonByCol: o,
    latByRow: l,
    xByCol: c,
    zByRow: h
  };
  return r.buildGridCache.set(t, d), d;
}
function Cf(r, e) {
  var a;
  const t = String(e), n = r.poiWorldPositionsCache.get(t);
  if (n) return n;
  const { proj: i } = Ya(r, e), s = [];
  for (const o of r.features) {
    const l = (a = o == null ? void 0 : o.geometry) == null ? void 0 : a.coordinates;
    if (!Array.isArray(l) || l.length < 2) continue;
    const c = Number(l[0]), h = Number(l[1]);
    if (!Number.isFinite(c) || !Number.isFinite(h)) continue;
    const { x: d, z: u } = i.lonLatToWorld(c, h, e);
    s.push({ x: d, z: u });
  }
  return r.poiWorldPositionsCache.set(t, s), s;
}
function Pf() {
  const r = new Fe({ antialias: !0, alpha: !0, powerPreference: "high-performance" });
  return r.setPixelRatio(Math.min(2, window.devicePixelRatio || 1)), r.setSize(window.innerWidth, window.innerHeight), r.domElement.style.position = "fixed", r.domElement.style.inset = "0", r.domElement.style.width = "100%", r.domElement.style.height = "100%", r.domElement.style.zIndex = "0", r.domElement.style.display = "block", r.domElement.style.background = "transparent", document.body.appendChild(r.domElement), r;
}
function Df() {
  const r = new at(48, window.innerWidth / window.innerHeight, 0.1, 5e3);
  return r.position.set(420, 520, 420), r.lookAt(0, 0, 0), r;
}
function If() {
  const r = new Br();
  return r.fog = new Fi(657930, 8e-4), r;
}
function Ff(r) {
  r.add(new Wa(16777215, 0.55));
  const e = new ka(16777215, 0.45);
  e.position.set(300, 600, 150), r.add(e);
}
function Nf(r, e, { onChange: t } = {}) {
  const n = {
    target: new w(0, 0, 0),
    distance: 920,
    yaw: -Math.PI / 4,
    pitch: Math.PI / 3.2,
    dragging: !1,
    lastX: 0,
    lastY: 0
  };
  function i() {
    const o = Math.cos(n.yaw), l = Math.sin(n.yaw), c = Math.cos(n.pitch), h = Math.sin(n.pitch), d = n.target.x + n.distance * c * o, u = n.target.z + n.distance * c * l, f = n.target.y + n.distance * h;
    r.position.set(d, f, u), r.lookAt(n.target);
    try {
      t == null || t();
    } catch {
    }
  }
  function s() {
    n.distance = Math.min(Math.max(n.distance, 200), 2e3), n.pitch = Math.min(Math.max(n.pitch, 0.55), 1.35);
  }
  function a(o, l) {
    const h = 0.9 * (n.distance / 900), d = new w(Math.cos(n.yaw + Math.PI / 2), 0, Math.sin(n.yaw + Math.PI / 2)), u = new w(Math.cos(n.yaw), 0, Math.sin(n.yaw));
    n.target.addScaledVector(d, -o * h), n.target.addScaledVector(u, l * h);
  }
  return e.addEventListener(
    "wheel",
    (o) => {
      o.preventDefault();
      const l = Math.sign(o.deltaY);
      n.distance *= l > 0 ? 1.08 : 0.92, s(), i();
    },
    { passive: !1 }
  ), e.addEventListener("pointerdown", (o) => {
    var l;
    n.dragging = !0, n.lastX = o.clientX, n.lastY = o.clientY, (l = e.setPointerCapture) == null || l.call(e, o.pointerId);
  }), e.addEventListener("pointermove", (o) => {
    if (!n.dragging) return;
    const l = o.clientX - n.lastX, c = o.clientY - n.lastY;
    n.lastX = o.clientX, n.lastY = o.clientY, a(l, c), i();
  }), e.addEventListener("pointerup", () => {
    n.dragging = !1;
  }), e.addEventListener("pointercancel", () => {
    n.dragging = !1;
  }), s(), i(), {
    get distance() {
      return n.distance;
    },
    setTarget(o, l) {
      n.target.x = o, n.target.z = l, i();
    }
  };
}
function Bf() {
  return new zi({
    color: 52937,
    metalness: 0.18,
    roughness: 0.55,
    emissive: 6682,
    emissiveIntensity: 0.9
  });
}
async function na({
  name: r,
  boardDerived: e,
  voxelSize: t,
  color: n,
  onProgress: i,
  signal: s
}) {
  const a = Ya(e, t), o = a.cols, l = a.rows, c = a.max, h = a.proj, d = e.polygonTester, u = new Pi(t, t * 1.6, t), f = Bf();
  n && (f.color = new le(n));
  const m = new Aa(u, f, c);
  m.name = r, m.instanceMatrix.setUsage(35048), m.count = 0;
  const x = () => {
    var T, S, v;
    try {
      (S = (T = m.geometry) == null ? void 0 : T.dispose) == null || S.call(T);
    } catch {
    }
    try {
      const P = m.material;
      Array.isArray(P) ? P.forEach((N) => {
        var z;
        return (z = N == null ? void 0 : N.dispose) == null ? void 0 : z.call(N);
      }) : (v = P == null ? void 0 : P.dispose) == null || v.call(P);
    } catch {
    }
  }, _ = new Re();
  let g = 0, p = 0;
  const E = ht();
  try {
    for (let T = 0; T < l; T++) {
      let S = ht();
      for (let v = 0; v < o; v++) {
        if (s != null && s.aborted) throw new Error("aborted");
        const P = a.lonByCol[v], N = a.latByRow[T];
        if (!d(P, N)) {
          p++;
          continue;
        }
        const z = a.xByCol[v], F = a.zByRow[T];
        _.position.set(z, t * 0.5, F), _.updateMatrix(), m.setMatrixAt(g, _.matrix), g++, p++, ht() - S > Qs && (m.count = g, m.instanceMatrix.needsUpdate = !0, i == null || i({
          phase: r,
          processed: p,
          total: c,
          visible: g,
          elapsedMs: Math.round(ht() - E)
        }), await new Promise((H) => requestAnimationFrame(H)), S = ht());
      }
      ht() - S > Qs && (m.count = g, m.instanceMatrix.needsUpdate = !0, i == null || i({
        phase: r,
        processed: p,
        total: c,
        visible: g,
        elapsedMs: Math.round(ht() - E)
      }), await new Promise((v) => requestAnimationFrame(v)));
    }
    return m.count = g, m.instanceMatrix.needsUpdate = !0, i == null || i({
      phase: r,
      processed: c,
      total: c,
      visible: g,
      elapsedMs: Math.round(ht() - E),
      done: !0
    }), { mesh: m, cols: o, rows: l, proj: h };
  } catch (T) {
    throw x(), T;
  }
}
function zf(r, e) {
  const t = new kt();
  t.name = "poi";
  const n = new ad(e * 0.9, 16, 16), i = new zi({ color: 16729943, emissive: 2228224, emissiveIntensity: 0.6 });
  for (const s of r || []) {
    const a = Number(s == null ? void 0 : s.x), o = Number(s == null ? void 0 : s.z);
    if (!Number.isFinite(a) || !Number.isFinite(o)) continue;
    const l = new ut(n, i);
    l.position.set(a, e * 2, o), t.add(l);
  }
  return t;
}
function Uf(r) {
  var a;
  const e = (a = r == null ? void 0 : r.scene) == null ? void 0 : a.bounds, t = Number(e == null ? void 0 : e.minLon), n = Number(e == null ? void 0 : e.maxLon), i = Number(e == null ? void 0 : e.minLat), s = Number(e == null ? void 0 : e.maxLat);
  if (![t, n, i, s].every(Number.isFinite))
    throw new Error("invalid_bounds");
  return { minLon: t, maxLon: n, minLat: i, maxLat: s };
}
function Of(r) {
  var s;
  const e = (s = r == null ? void 0 : r.scene) == null ? void 0 : s.grid, t = Number(e == null ? void 0 : e.width), n = Number(e == null ? void 0 : e.height), i = Number(e == null ? void 0 : e.voxelSize);
  if (![t, n, i].every(Number.isFinite)) throw new Error("invalid_grid");
  return { width: t, height: n, voxelSize: i };
}
function Gf() {
  try {
    return new AbortController();
  } catch {
    return null;
  }
}
async function Hf() {
  bf(), It("Loading…", "Fetching board data");
  const r = Pf(), e = Df(), t = If();
  Ff(t);
  let n = !1, i = !1, s = 0, a = null;
  function o() {
    if (a != null) {
      try {
        clearTimeout(a);
      } catch {
      }
      a = null;
    }
  }
  function l() {
    o(), i && (a = setTimeout(() => {
      if (a = null, !i) return;
      if (ht() - s > 180) {
        i = !1;
        return;
      }
      l();
    }, 120));
  }
  function c(F) {
    F === "continuous" && (i = !0, s = ht(), l()), Li("render", String(i), () => {
      n || (n = !0, requestAnimationFrame((H) => {
        n = !1, v(), r.render(t, e), i && c();
      }));
    });
  }
  const h = Nf(e, r.domElement, {
    onChange: () => c("continuous")
  });
  let d = "coarse", u = null, f = null, m = null, x = null, _ = 0, g = !1, p = "", E = 0;
  function T() {
    var F;
    o();
    try {
      (F = x == null ? void 0 : x.abort) == null || F.call(x);
    } catch {
    }
    return x = Gf(), x ? x.signal : null;
  }
  function S() {
    if (u != null && u.group) {
      try {
        t.remove(u.group);
      } catch {
      }
      Sr(u.group);
    }
    if (f != null && f.group) {
      try {
        t.remove(f.group);
      } catch {
      }
      Sr(f.group);
    }
    if (m) {
      try {
        t.remove(m);
      } catch {
      }
      Sr(m);
    }
    u = null, f = null, m = null, d = "coarse";
  }
  function v() {
    const F = h.distance, U = (d === "fine" ? F < Mf : F < yf) && f ? "fine" : "coarse";
    U !== d && (d = U, u != null && u.group && (u.group.visible = d === "coarse"), f != null && f.group && (f.group.visible = d === "fine"), c());
  }
  function P(F) {
    const H = F.total ? Math.round(F.processed / F.total * 100) : 0, U = `${String(F.phase || "")}|${H}|${Number(F.visible || 0)}|${!!F.done}`, A = ht();
    !F.done && U === p && A - E < 120 || !F.done && A - E < 66 || (p = U, E = A, It("Generating Voxels…", `${F.phase} • ${H}% • visible=${F.visible ?? 0} • ${F.elapsedMs ?? 0}ms`), c());
  }
  async function N() {
    const F = ++_, H = ta();
    S();
    const U = T();
    It("Loading…", `Fetching board data (${H})`);
    const A = await xf({ file: H, signal: U });
    if (F !== _) throw new Error("stale_build");
    const C = Lf(A), D = C.bounds, R = C.grid;
    It("Generating Voxels…", "coarse (fast start)");
    const W = R.voxelSize * vf, J = await na({ name: "coarse", boardDerived: C, voxelSize: W, color: 52937, onProgress: P, signal: U });
    if (F !== _) throw new Error("stale_build");
    u = { voxelSize: W, proj: J.proj, group: new kt() }, u.group.add(J.mesh), t.add(u.group), m = zf(Cf(C, W), W), t.add(m);
    const X = (D.minLon + D.maxLon) / 2, se = (D.minLat + D.maxLat) / 2, ne = J.proj.lonLatToWorld(X, se, W);
    h.setTarget(ne.x, ne.z), It("Generating Voxels…", "fine (building in background)");
    const ce = R.voxelSize;
    Li(`${Dr.FINE_BUILD_PREFIX}:${H}`, String(ce), async () => {
      try {
        const de = await na({ name: "fine", boardDerived: C, voxelSize: ce, color: 623843, onProgress: P, signal: U });
        if (F !== _) return;
        f = { voxelSize: ce, proj: de.proj, group: new kt() }, f.group.add(de.mesh), f.group.visible = !1, t.add(f.group), It((A == null ? void 0 : A.name) || "Singabldr", (A == null ? void 0 : A.subtitle) || "Geospatial Voxel World");
      } catch (de) {
        if (F !== _) return;
        It("Singabldr", "Fine LOD build failed; using coarse."), console.warn("fine build failed", de);
      }
    });
  }
  function z() {
    const F = ta();
    Li(Dr.BOARD_REBUILD, F, () => {
      N().catch((H) => {
        It("Error", H instanceof Error ? H.message : "failed_to_rebuild");
      });
    });
  }
  try {
    await N();
  } catch (F) {
    It("Error", F instanceof Error ? F.message : "failed_to_init"), console.error(F), T();
  }
  Ft(() => {
    g || (g = !0, window.__SINGABLDR_REQUEST_BOARD_REBUILD = z);
  }), c(), window.addEventListener("resize", () => {
    r.setSize(window.innerWidth, window.innerHeight), e.aspect = window.innerWidth / window.innerHeight, e.updateProjectionMatrix(), c();
  });
}
Hf();
