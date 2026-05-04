/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const ba = "128";
const ps = "300 es";
class hn {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e);
  }
  hasEventListener(t, e) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[t] !== void 0 && n[t].indexOf(e) !== -1;
  }
  removeEventListener(t, e) {
    if (this._listeners === void 0) return;
    const i = this._listeners[t];
    if (i !== void 0) {
      const s = i.indexOf(e);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(t) {
    if (this._listeners === void 0) return;
    const n = this._listeners[t.type];
    if (n !== void 0) {
      t.target = this;
      const i = n.slice(0);
      for (let s = 0, a = i.length; s < a; s++)
        i[s].call(this, t);
      t.target = null;
    }
  }
}
const Kt = [];
for (let r = 0; r < 256; r++)
  Kt[r] = (r < 16 ? "0" : "") + r.toString(16);
const Ki = Math.PI / 180, zr = 180 / Math.PI;
function Le() {
  const r = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Kt[r & 255] + Kt[r >> 8 & 255] + Kt[r >> 16 & 255] + Kt[r >> 24 & 255] + "-" + Kt[t & 255] + Kt[t >> 8 & 255] + "-" + Kt[t >> 16 & 15 | 64] + Kt[t >> 24 & 255] + "-" + Kt[e & 63 | 128] + Kt[e >> 8 & 255] + "-" + Kt[e >> 16 & 255] + Kt[e >> 24 & 255] + Kt[n & 255] + Kt[n >> 8 & 255] + Kt[n >> 16 & 255] + Kt[n >> 24 & 255]).toUpperCase();
}
function pe(r, t, e) {
  return Math.max(t, Math.min(e, r));
}
function Ao(r, t) {
  return (r % t + t) % t;
}
function tr(r, t, e) {
  return (1 - e) * r + e * t;
}
function ms(r) {
  return (r & r - 1) === 0 && r !== 0;
}
function Lo(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function Ro(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
class Z {
  constructor(t = 0, e = 0) {
    this.x = t, this.y = e;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t, e) {
    return e !== void 0 ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this);
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this;
  }
  sub(t, e) {
    return e !== void 0 ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this);
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, i = t.elements;
    return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
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
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
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
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y;
    return e * e + n * n;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t;
  }
  fromBufferAttribute(t, e, n) {
    return n !== void 0 && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this;
  }
  rotateAround(t, e) {
    const n = Math.cos(e), i = Math.sin(e), s = this.x - t.x, a = this.y - t.y;
    return this.x = s * n - a * i + t.x, this.y = s * i + a * n + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
}
Z.prototype.isVector2 = !0;
class te {
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
  set(t, e, n, i, s, a, o, l, c) {
    const d = this.elements;
    return d[0] = t, d[1] = i, d[2] = o, d[3] = e, d[4] = s, d[5] = l, d[6] = n, d[7] = a, d[8] = c, this;
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
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[4],
      e[8],
      e[1],
      e[5],
      e[9],
      e[2],
      e[6],
      e[10]
    ), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, i = e.elements, s = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], d = n[4], h = n[7], u = n[2], f = n[5], p = n[8], x = i[0], y = i[3], g = i[6], m = i[1], w = i[4], E = i[7], b = i[2], _ = i[5], R = i[8];
    return s[0] = a * x + o * m + l * b, s[3] = a * y + o * w + l * _, s[6] = a * g + o * E + l * R, s[1] = c * x + d * m + h * b, s[4] = c * y + d * w + h * _, s[7] = c * g + d * E + h * R, s[2] = u * x + f * m + p * b, s[5] = u * y + f * w + p * _, s[8] = u * g + f * E + p * R, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[1], i = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], d = t[8];
    return e * a * d - e * o * c - n * s * d + n * o * l + i * s * c - i * a * l;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], i = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], d = t[8], h = d * a - o * c, u = o * l - d * s, f = c * s - a * l, p = e * h + n * u + i * f;
    if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const x = 1 / p;
    return t[0] = h * x, t[1] = (i * c - d * n) * x, t[2] = (o * n - i * a) * x, t[3] = u * x, t[4] = (d * e - i * l) * x, t[5] = (i * s - o * e) * x, t[6] = f * x, t[7] = (n * l - c * e) * x, t[8] = (a * e - n * s) * x, this;
  }
  transpose() {
    let t;
    const e = this.elements;
    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
  }
  setUvTransform(t, e, n, i, s, a, o) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(
      n * l,
      n * c,
      -n * (l * a + c * o) + a + t,
      -i * c,
      i * l,
      -i * (-c * a + l * o) + o + e,
      0,
      0,
      1
    ), this;
  }
  scale(t, e) {
    const n = this.elements;
    return n[0] *= t, n[3] *= t, n[6] *= t, n[1] *= e, n[4] *= e, n[7] *= e, this;
  }
  rotate(t) {
    const e = Math.cos(t), n = Math.sin(t), i = this.elements, s = i[0], a = i[3], o = i[6], l = i[1], c = i[4], d = i[7];
    return i[0] = e * s + n * l, i[3] = e * a + n * c, i[6] = e * o + n * d, i[1] = -n * s + e * l, i[4] = -n * a + e * c, i[7] = -n * o + e * d, this;
  }
  translate(t, e) {
    const n = this.elements;
    return n[0] += t * n[2], n[3] += t * n[5], n[6] += t * n[8], n[1] += e * n[2], n[4] += e * n[5], n[7] += e * n[8], this;
  }
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let i = 0; i < 9; i++)
      if (e[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
te.prototype.isMatrix3 = !0;
let dn;
class Fn {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
      return t.src;
    let e;
    if (t instanceof HTMLCanvasElement)
      e = t;
    else {
      dn === void 0 && (dn = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), dn.width = t.width, dn.height = t.height;
      const n = dn.getContext("2d");
      t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = dn;
    }
    return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", 0.6)) : e.toDataURL("image/png");
  }
}
let Co = 0;
class ne extends hn {
  constructor(t = ne.DEFAULT_IMAGE, e = ne.DEFAULT_MAPPING, n = 1001, i = 1001, s = 1006, a = 1008, o = 1023, l = 1009, c = 1, d = 3e3) {
    super(), Object.defineProperty(this, "id", { value: Co++ }), this.uuid = Le(), this.name = "", this.image = t, this.mipmaps = [], this.mapping = e, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Z(0, 0), this.repeat = new Z(1, 1), this.center = new Z(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new te(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = d, this.version = 0, this.onUpdate = null;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.textures[this.uuid] !== void 0)
      return t.textures[this.uuid];
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
      if (i.uuid === void 0 && (i.uuid = Le()), !e && t.images[i.uuid] === void 0) {
        let s;
        if (Array.isArray(i)) {
          s = [];
          for (let a = 0, o = i.length; a < o; a++)
            i[a].isDataTexture ? s.push(er(i[a].image)) : s.push(er(i[a]));
        } else
          s = er(i);
        t.images[i.uuid] = {
          uuid: i.uuid,
          url: s
        };
      }
      n.image = i.uuid;
    }
    return e || (t.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== 300) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
      switch (this.wrapS) {
        case 1e3:
          t.x = t.x - Math.floor(t.x);
          break;
        case 1001:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case 1e3:
          t.y = t.y - Math.floor(t.y);
          break;
        case 1001:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
          break;
      }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
}
ne.DEFAULT_IMAGE = void 0;
ne.DEFAULT_MAPPING = 300;
ne.prototype.isTexture = !0;
function er(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? Fn.getDataURL(r) : r.data ? {
    data: Array.prototype.slice.call(r.data),
    width: r.width,
    height: r.height,
    type: r.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
class Bt {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    this.x = t, this.y = e, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, n, i) {
    return this.x = t, this.y = e, this.z = n, this.w = i, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setW(t) {
    return this.w = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  add(t, e) {
    return e !== void 0 ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this);
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
  }
  sub(t, e) {
    return e !== void 0 ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this);
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, i = this.z, s = this.w, a = t.elements;
    return this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * s, this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * s, this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * s, this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * s, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, n, i, s;
    const l = t.elements, c = l[0], d = l[4], h = l[8], u = l[1], f = l[5], p = l[9], x = l[2], y = l[6], g = l[10];
    if (Math.abs(d - u) < 0.01 && Math.abs(h - x) < 0.01 && Math.abs(p - y) < 0.01) {
      if (Math.abs(d + u) < 0.1 && Math.abs(h + x) < 0.1 && Math.abs(p + y) < 0.1 && Math.abs(c + f + g - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const w = (c + 1) / 2, E = (f + 1) / 2, b = (g + 1) / 2, _ = (d + u) / 4, R = (h + x) / 4, I = (p + y) / 4;
      return w > E && w > b ? w < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(w), i = _ / n, s = R / n) : E > b ? E < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(E), n = _ / i, s = I / i) : b < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(b), n = R / s, i = I / s), this.set(n, i, s, e), this;
    }
    let m = Math.sqrt((y - p) * (y - p) + (h - x) * (h - x) + (u - d) * (u - d));
    return Math.abs(m) < 1e-3 && (m = 1), this.x = (y - p) / m, this.y = (h - x) / m, this.z = (u - d) / m, this.w = Math.acos((c + f + g - 1) / 2), this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
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
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
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
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
  }
  fromBufferAttribute(t, e, n) {
    return n !== void 0 && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
}
Bt.prototype.isVector4 = !0;
class ln extends hn {
  constructor(t, e, n) {
    super(), this.width = t, this.height = e, this.depth = 1, this.scissor = new Bt(0, 0, t, e), this.scissorTest = !1, this.viewport = new Bt(0, 0, t, e), n = n || {}, this.texture = new ne(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.image = {}, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = 1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : 1006, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null;
  }
  setTexture(t) {
    t.image = {
      width: this.width,
      height: this.height,
      depth: this.depth
    }, this.texture = t;
  }
  setSize(t, e, n = 1) {
    (this.width !== t || this.height !== e || this.depth !== n) && (this.width = t, this.height = e, this.depth = n, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
ln.prototype.isWebGLRenderTarget = !0;
class Po extends ln {
  constructor(t, e, n) {
    super(t, e, n), this.samples = 4;
  }
  copy(t) {
    return super.copy.call(this, t), this.samples = t.samples, this;
  }
}
Po.prototype.isWebGLMultisampleRenderTarget = !0;
class le {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    this._x = t, this._y = e, this._z = n, this._w = i;
  }
  static slerp(t, e, n, i) {
    return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), n.slerpQuaternions(t, e, i);
  }
  static slerpFlat(t, e, n, i, s, a, o) {
    let l = n[i + 0], c = n[i + 1], d = n[i + 2], h = n[i + 3];
    const u = s[a + 0], f = s[a + 1], p = s[a + 2], x = s[a + 3];
    if (o === 0) {
      t[e + 0] = l, t[e + 1] = c, t[e + 2] = d, t[e + 3] = h;
      return;
    }
    if (o === 1) {
      t[e + 0] = u, t[e + 1] = f, t[e + 2] = p, t[e + 3] = x;
      return;
    }
    if (h !== x || l !== u || c !== f || d !== p) {
      let y = 1 - o;
      const g = l * u + c * f + d * p + h * x, m = g >= 0 ? 1 : -1, w = 1 - g * g;
      if (w > Number.EPSILON) {
        const b = Math.sqrt(w), _ = Math.atan2(b, g * m);
        y = Math.sin(y * _) / b, o = Math.sin(o * _) / b;
      }
      const E = o * m;
      if (l = l * y + u * E, c = c * y + f * E, d = d * y + p * E, h = h * y + x * E, y === 1 - o) {
        const b = 1 / Math.sqrt(l * l + c * c + d * d + h * h);
        l *= b, c *= b, d *= b, h *= b;
      }
    }
    t[e] = l, t[e + 1] = c, t[e + 2] = d, t[e + 3] = h;
  }
  static multiplyQuaternionsFlat(t, e, n, i, s, a) {
    const o = n[i], l = n[i + 1], c = n[i + 2], d = n[i + 3], h = s[a], u = s[a + 1], f = s[a + 2], p = s[a + 3];
    return t[e] = o * p + d * h + l * f - c * u, t[e + 1] = l * p + d * u + c * h - o * f, t[e + 2] = c * p + d * f + o * u - l * h, t[e + 3] = d * p - o * h - l * u - c * f, t;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  set(t, e, n, i) {
    return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, e) {
    if (!(t && t.isEuler))
      throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
    const n = t._x, i = t._y, s = t._z, a = t._order, o = Math.cos, l = Math.sin, c = o(n / 2), d = o(i / 2), h = o(s / 2), u = l(n / 2), f = l(i / 2), p = l(s / 2);
    switch (a) {
      case "XYZ":
        this._x = u * d * h + c * f * p, this._y = c * f * h - u * d * p, this._z = c * d * p + u * f * h, this._w = c * d * h - u * f * p;
        break;
      case "YXZ":
        this._x = u * d * h + c * f * p, this._y = c * f * h - u * d * p, this._z = c * d * p - u * f * h, this._w = c * d * h + u * f * p;
        break;
      case "ZXY":
        this._x = u * d * h - c * f * p, this._y = c * f * h + u * d * p, this._z = c * d * p + u * f * h, this._w = c * d * h - u * f * p;
        break;
      case "ZYX":
        this._x = u * d * h - c * f * p, this._y = c * f * h + u * d * p, this._z = c * d * p - u * f * h, this._w = c * d * h + u * f * p;
        break;
      case "YZX":
        this._x = u * d * h + c * f * p, this._y = c * f * h + u * d * p, this._z = c * d * p - u * f * h, this._w = c * d * h - u * f * p;
        break;
      case "XZY":
        this._x = u * d * h - c * f * p, this._y = c * f * h - u * d * p, this._z = c * d * p + u * f * h, this._w = c * d * h + u * f * p;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return e !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const n = e / 2, i = Math.sin(n);
    return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const e = t.elements, n = e[0], i = e[4], s = e[8], a = e[1], o = e[5], l = e[9], c = e[2], d = e[6], h = e[10], u = n + o + h;
    if (u > 0) {
      const f = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / f, this._x = (d - l) * f, this._y = (s - c) * f, this._z = (a - i) * f;
    } else if (n > o && n > h) {
      const f = 2 * Math.sqrt(1 + n - o - h);
      this._w = (d - l) / f, this._x = 0.25 * f, this._y = (i + a) / f, this._z = (s + c) / f;
    } else if (o > h) {
      const f = 2 * Math.sqrt(1 + o - n - h);
      this._w = (s - c) / f, this._x = (i + a) / f, this._y = 0.25 * f, this._z = (l + d) / f;
    } else {
      const f = 2 * Math.sqrt(1 + h - n - o);
      this._w = (a - i) / f, this._x = (s + c) / f, this._y = (l + d) / f, this._z = 0.25 * f;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(pe(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const n = this.angleTo(t);
    if (n === 0) return this;
    const i = Math.min(1, e / n);
    return this.slerp(t, i), this;
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
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  multiply(t, e) {
    return e !== void 0 ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const n = t._x, i = t._y, s = t._z, a = t._w, o = e._x, l = e._y, c = e._z, d = e._w;
    return this._x = n * d + a * o + i * c - s * l, this._y = i * d + a * l + s * o - n * c, this._z = s * d + a * c + n * l - i * o, this._w = a * d - n * o - i * l - s * c, this._onChangeCallback(), this;
  }
  slerp(t, e) {
    if (e === 0) return this;
    if (e === 1) return this.copy(t);
    const n = this._x, i = this._y, s = this._z, a = this._w;
    let o = a * t._w + n * t._x + i * t._y + s * t._z;
    if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1)
      return this._w = a, this._x = n, this._y = i, this._z = s, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const f = 1 - e;
      return this._w = f * a + e * this._w, this._x = f * n + e * this._x, this._y = f * i + e * this._y, this._z = f * s + e * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const c = Math.sqrt(l), d = Math.atan2(c, o), h = Math.sin((1 - e) * d) / c, u = Math.sin(e * d) / c;
    return this._w = a * h + this._w * u, this._x = n * h + this._x * u, this._y = i * h + this._y * u, this._z = s * h + this._z * u, this._onChangeCallback(), this;
  }
  slerpQuaternions(t, e, n) {
    this.copy(t).slerp(e, n);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, e = 0) {
    return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
  }
  fromBufferAttribute(t, e) {
    return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
}
le.prototype.isQuaternion = !0;
class S {
  constructor(t = 0, e = 0, n = 0) {
    this.x = t, this.y = e, this.z = n;
  }
  set(t, e, n) {
    return n === void 0 && (n = this.z), this.x = t, this.y = e, this.z = n, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t, e) {
    return e !== void 0 ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this);
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
  }
  sub(t, e) {
    return e !== void 0 ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this);
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
  }
  multiply(t, e) {
    return e !== void 0 ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this);
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, e) {
    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
  }
  applyEuler(t) {
    return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(gs.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(gs.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, i = this.z, s = t.elements;
    return this.x = s[0] * e + s[3] * n + s[6] * i, this.y = s[1] * e + s[4] * n + s[7] * i, this.z = s[2] * e + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, i = this.z, s = t.elements, a = 1 / (s[3] * e + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * e + s[4] * n + s[8] * i + s[12]) * a, this.y = (s[1] * e + s[5] * n + s[9] * i + s[13]) * a, this.z = (s[2] * e + s[6] * n + s[10] * i + s[14]) * a, this;
  }
  applyQuaternion(t) {
    const e = this.x, n = this.y, i = this.z, s = t.x, a = t.y, o = t.z, l = t.w, c = l * e + a * i - o * n, d = l * n + o * e - s * i, h = l * i + s * n - a * e, u = -s * e - a * n - o * i;
    return this.x = c * l + u * -s + d * -o - h * -a, this.y = d * l + u * -a + h * -s - c * -o, this.z = h * l + u * -o + c * -a - d * -s, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const e = this.x, n = this.y, i = this.z, s = t.elements;
    return this.x = s[0] * e + s[4] * n + s[8] * i, this.y = s[1] * e + s[5] * n + s[9] * i, this.z = s[2] * e + s[6] * n + s[10] * i, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
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
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
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
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
  }
  cross(t, e) {
    return e !== void 0 ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const n = t.x, i = t.y, s = t.z, a = e.x, o = e.y, l = e.z;
    return this.x = i * l - s * o, this.y = s * a - n * l, this.z = n * o - i * a, this;
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return nr.copy(this).projectOnVector(t), this.sub(nr);
  }
  reflect(t) {
    return this.sub(nr.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(pe(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y, i = this.z - t.z;
    return e * e + n * n + i * i;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, n) {
    const i = Math.sin(e) * t;
    return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, n) {
    return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), i = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
  }
  fromBufferAttribute(t, e, n) {
    return n !== void 0 && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
}
S.prototype.isVector3 = !0;
const nr = /* @__PURE__ */ new S(), gs = /* @__PURE__ */ new le();
class xe {
  constructor(t = new S(1 / 0, 1 / 0, 1 / 0), e = new S(-1 / 0, -1 / 0, -1 / 0)) {
    this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    let e = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, a = -1 / 0, o = -1 / 0;
    for (let l = 0, c = t.length; l < c; l += 3) {
      const d = t[l], h = t[l + 1], u = t[l + 2];
      d < e && (e = d), h < n && (n = h), u < i && (i = u), d > s && (s = d), h > a && (a = h), u > o && (o = u);
    }
    return this.min.set(e, n, i), this.max.set(s, a, o), this;
  }
  setFromBufferAttribute(t) {
    let e = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, a = -1 / 0, o = -1 / 0;
    for (let l = 0, c = t.count; l < c; l++) {
      const d = t.getX(l), h = t.getY(l), u = t.getZ(l);
      d < e && (e = d), h < n && (n = h), u < i && (i = u), d > s && (s = d), h > a && (a = h), u > o && (o = u);
    }
    return this.min.set(e, n, i), this.max.set(s, a, o), this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++)
      this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = kn.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  setFromObject(t) {
    return this.makeEmpty(), this.expandByObject(t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(t) {
    return t === void 0 && (console.warn("THREE.Box3: .getCenter() target is now required"), t = new S()), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return t === void 0 && (console.warn("THREE.Box3: .getSize() target is now required"), t = new S()), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t) {
    t.updateWorldMatrix(!1, !1);
    const e = t.geometry;
    e !== void 0 && (e.boundingBox === null && e.computeBoundingBox(), ir.copy(e.boundingBox), ir.applyMatrix4(t.matrixWorld), this.union(ir));
    const n = t.children;
    for (let i = 0, s = n.length; i < s; i++)
      this.expandByObject(n[i]);
    return this;
  }
  containsPoint(t) {
    return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z);
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  getParameter(t, e) {
    return e === void 0 && (console.warn("THREE.Box3: .getParameter() target is now required"), e = new S()), e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(t) {
    return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z);
  }
  intersectsSphere(t) {
    return this.clampPoint(t.center, kn), kn.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let e, n;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty())
      return !1;
    this.getCenter(On), li.subVectors(this.max, On), fn.subVectors(t.a, On), pn.subVectors(t.b, On), mn.subVectors(t.c, On), ke.subVectors(pn, fn), Oe.subVectors(mn, pn), sn.subVectors(fn, mn);
    let e = [
      0,
      -ke.z,
      ke.y,
      0,
      -Oe.z,
      Oe.y,
      0,
      -sn.z,
      sn.y,
      ke.z,
      0,
      -ke.x,
      Oe.z,
      0,
      -Oe.x,
      sn.z,
      0,
      -sn.x,
      -ke.y,
      ke.x,
      0,
      -Oe.y,
      Oe.x,
      0,
      -sn.y,
      sn.x,
      0
    ];
    return !rr(e, fn, pn, mn, li) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !rr(e, fn, pn, mn, li)) ? !1 : (ci.crossVectors(ke, Oe), e = [ci.x, ci.y, ci.z], rr(e, fn, pn, mn, li));
  }
  clampPoint(t, e) {
    return e === void 0 && (console.warn("THREE.Box3: .clampPoint() target is now required"), e = new S()), e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return kn.copy(t).clamp(this.min, this.max).sub(t).length();
  }
  getBoundingSphere(t) {
    return t === void 0 && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(t.center), t.radius = this.getSize(kn).length() * 0.5, t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : (Fe[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Fe[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Fe[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Fe[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Fe[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Fe[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Fe[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Fe[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Fe), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
xe.prototype.isBox3 = !0;
const Fe = [
  /* @__PURE__ */ new S(),
  /* @__PURE__ */ new S(),
  /* @__PURE__ */ new S(),
  /* @__PURE__ */ new S(),
  /* @__PURE__ */ new S(),
  /* @__PURE__ */ new S(),
  /* @__PURE__ */ new S(),
  /* @__PURE__ */ new S()
], kn = /* @__PURE__ */ new S(), ir = /* @__PURE__ */ new xe(), fn = /* @__PURE__ */ new S(), pn = /* @__PURE__ */ new S(), mn = /* @__PURE__ */ new S(), ke = /* @__PURE__ */ new S(), Oe = /* @__PURE__ */ new S(), sn = /* @__PURE__ */ new S(), On = /* @__PURE__ */ new S(), li = /* @__PURE__ */ new S(), ci = /* @__PURE__ */ new S(), an = /* @__PURE__ */ new S();
function rr(r, t, e, n, i) {
  for (let s = 0, a = r.length - 3; s <= a; s += 3) {
    an.fromArray(r, s);
    const o = i.x * Math.abs(an.x) + i.y * Math.abs(an.y) + i.z * Math.abs(an.z), l = t.dot(an), c = e.dot(an), d = n.dot(an);
    if (Math.max(-Math.max(l, c, d), Math.min(l, c, d)) > o)
      return !1;
  }
  return !0;
}
const Do = /* @__PURE__ */ new xe(), xs = /* @__PURE__ */ new S(), sr = /* @__PURE__ */ new S(), ar = /* @__PURE__ */ new S();
class Nn {
  constructor(t = new S(), e = -1) {
    this.center = t, this.radius = e;
  }
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  setFromPoints(t, e) {
    const n = this.center;
    e !== void 0 ? n.copy(e) : Do.setFromPoints(t).getCenter(n);
    let i = 0;
    for (let s = 0, a = t.length; s < a; s++)
      i = Math.max(i, n.distanceToSquared(t[s]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(t) {
    return this.center.copy(t.center), this.radius = t.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const n = this.center.distanceToSquared(t);
    return e === void 0 && (console.warn("THREE.Sphere: .clampPoint() target is now required"), e = new S()), e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
  }
  getBoundingBox(t) {
    return t === void 0 && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), t = new xe()), this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    ar.subVectors(t, this.center);
    const e = ar.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e), i = (n - this.radius) * 0.5;
      this.center.add(ar.multiplyScalar(i / n)), this.radius += i;
    }
    return this;
  }
  union(t) {
    return sr.subVectors(t.center, this.center).normalize().multiplyScalar(t.radius), this.expandByPoint(xs.copy(t.center).add(sr)), this.expandByPoint(xs.copy(t.center).sub(sr)), this;
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Ne = /* @__PURE__ */ new S(), or = /* @__PURE__ */ new S(), hi = /* @__PURE__ */ new S(), Ve = /* @__PURE__ */ new S(), lr = /* @__PURE__ */ new S(), ui = /* @__PURE__ */ new S(), cr = /* @__PURE__ */ new S();
class In {
  constructor(t = new S(), e = new S(0, 0, -1)) {
    this.origin = t, this.direction = e;
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e === void 0 && (console.warn("THREE.Ray: .at() target is now required"), e = new S()), e.copy(this.direction).multiplyScalar(t).add(this.origin);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, Ne)), this;
  }
  closestPointToPoint(t, e) {
    e === void 0 && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), e = new S()), e.subVectors(t, this.origin);
    const n = e.dot(this.direction);
    return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = Ne.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (Ne.copy(this.direction).multiplyScalar(e).add(this.origin), Ne.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, n, i) {
    or.copy(t).add(e).multiplyScalar(0.5), hi.copy(e).sub(t).normalize(), Ve.copy(this.origin).sub(or);
    const s = t.distanceTo(e) * 0.5, a = -this.direction.dot(hi), o = Ve.dot(this.direction), l = -Ve.dot(hi), c = Ve.lengthSq(), d = Math.abs(1 - a * a);
    let h, u, f, p;
    if (d > 0)
      if (h = a * l - o, u = a * o - l, p = s * d, h >= 0)
        if (u >= -p)
          if (u <= p) {
            const x = 1 / d;
            h *= x, u *= x, f = h * (h + a * u + 2 * o) + u * (a * h + u + 2 * l) + c;
          } else
            u = s, h = Math.max(0, -(a * u + o)), f = -h * h + u * (u + 2 * l) + c;
        else
          u = -s, h = Math.max(0, -(a * u + o)), f = -h * h + u * (u + 2 * l) + c;
      else
        u <= -p ? (h = Math.max(0, -(-a * s + o)), u = h > 0 ? -s : Math.min(Math.max(-s, -l), s), f = -h * h + u * (u + 2 * l) + c) : u <= p ? (h = 0, u = Math.min(Math.max(-s, -l), s), f = u * (u + 2 * l) + c) : (h = Math.max(0, -(a * s + o)), u = h > 0 ? s : Math.min(Math.max(-s, -l), s), f = -h * h + u * (u + 2 * l) + c);
    else
      u = a > 0 ? -s : s, h = Math.max(0, -(a * u + o)), f = -h * h + u * (u + 2 * l) + c;
    return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy(hi).multiplyScalar(u).add(or), f;
  }
  intersectSphere(t, e) {
    Ne.subVectors(t.center, this.origin);
    const n = Ne.dot(this.direction), i = Ne.dot(Ne) - n * n, s = t.radius * t.radius;
    if (i > s) return null;
    const a = Math.sqrt(s - i), o = n - a, l = n + a;
    return o < 0 && l < 0 ? null : o < 0 ? this.at(l, e) : this.at(o, e);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (e === 0)
      return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(t.normal) + t.constant) / e;
    return n >= 0 ? n : null;
  }
  intersectPlane(t, e) {
    const n = this.distanceToPlane(t);
    return n === null ? null : this.at(n, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let n, i, s, a, o, l;
    const c = 1 / this.direction.x, d = 1 / this.direction.y, h = 1 / this.direction.z, u = this.origin;
    return c >= 0 ? (n = (t.min.x - u.x) * c, i = (t.max.x - u.x) * c) : (n = (t.max.x - u.x) * c, i = (t.min.x - u.x) * c), d >= 0 ? (s = (t.min.y - u.y) * d, a = (t.max.y - u.y) * d) : (s = (t.max.y - u.y) * d, a = (t.min.y - u.y) * d), n > a || s > i || ((s > n || n !== n) && (n = s), (a < i || i !== i) && (i = a), h >= 0 ? (o = (t.min.z - u.z) * h, l = (t.max.z - u.z) * h) : (o = (t.max.z - u.z) * h, l = (t.min.z - u.z) * h), n > l || o > i) || ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, e);
  }
  intersectsBox(t) {
    return this.intersectBox(t, Ne) !== null;
  }
  intersectTriangle(t, e, n, i, s) {
    lr.subVectors(e, t), ui.subVectors(n, t), cr.crossVectors(lr, ui);
    let a = this.direction.dot(cr), o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    Ve.subVectors(this.origin, t);
    const l = o * this.direction.dot(ui.crossVectors(Ve, ui));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(lr.cross(Ve));
    if (c < 0 || l + c > a)
      return null;
    const d = -o * Ve.dot(cr);
    return d < 0 ? null : this.at(d / a, s);
  }
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ut {
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
  set(t, e, n, i, s, a, o, l, c, d, h, u, f, p, x, y) {
    const g = this.elements;
    return g[0] = t, g[4] = e, g[8] = n, g[12] = i, g[1] = s, g[5] = a, g[9] = o, g[13] = l, g[2] = c, g[6] = d, g[10] = h, g[14] = u, g[3] = f, g[7] = p, g[11] = x, g[15] = y, this;
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
    return new ut().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
  }
  copyPosition(t) {
    const e = this.elements, n = t.elements;
    return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[3],
      e[6],
      0,
      e[1],
      e[4],
      e[7],
      0,
      e[2],
      e[5],
      e[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t, e, n) {
    return this.set(
      t.x,
      e.x,
      n.x,
      0,
      t.y,
      e.y,
      n.y,
      0,
      t.z,
      e.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(t) {
    const e = this.elements, n = t.elements, i = 1 / gn.setFromMatrixColumn(t, 0).length(), s = 1 / gn.setFromMatrixColumn(t, 1).length(), a = 1 / gn.setFromMatrixColumn(t, 2).length();
    return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * s, e[5] = n[5] * s, e[6] = n[6] * s, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
    const e = this.elements, n = t.x, i = t.y, s = t.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(i), c = Math.sin(i), d = Math.cos(s), h = Math.sin(s);
    if (t.order === "XYZ") {
      const u = a * d, f = a * h, p = o * d, x = o * h;
      e[0] = l * d, e[4] = -l * h, e[8] = c, e[1] = f + p * c, e[5] = u - x * c, e[9] = -o * l, e[2] = x - u * c, e[6] = p + f * c, e[10] = a * l;
    } else if (t.order === "YXZ") {
      const u = l * d, f = l * h, p = c * d, x = c * h;
      e[0] = u + x * o, e[4] = p * o - f, e[8] = a * c, e[1] = a * h, e[5] = a * d, e[9] = -o, e[2] = f * o - p, e[6] = x + u * o, e[10] = a * l;
    } else if (t.order === "ZXY") {
      const u = l * d, f = l * h, p = c * d, x = c * h;
      e[0] = u - x * o, e[4] = -a * h, e[8] = p + f * o, e[1] = f + p * o, e[5] = a * d, e[9] = x - u * o, e[2] = -a * c, e[6] = o, e[10] = a * l;
    } else if (t.order === "ZYX") {
      const u = a * d, f = a * h, p = o * d, x = o * h;
      e[0] = l * d, e[4] = p * c - f, e[8] = u * c + x, e[1] = l * h, e[5] = x * c + u, e[9] = f * c - p, e[2] = -c, e[6] = o * l, e[10] = a * l;
    } else if (t.order === "YZX") {
      const u = a * l, f = a * c, p = o * l, x = o * c;
      e[0] = l * d, e[4] = x - u * h, e[8] = p * h + f, e[1] = h, e[5] = a * d, e[9] = -o * d, e[2] = -c * d, e[6] = f * h + p, e[10] = u - x * h;
    } else if (t.order === "XZY") {
      const u = a * l, f = a * c, p = o * l, x = o * c;
      e[0] = l * d, e[4] = -h, e[8] = c * d, e[1] = u * h + x, e[5] = a * d, e[9] = f * h - p, e[2] = p * h - f, e[6] = o * d, e[10] = x * h + u;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Fo, t, No);
  }
  lookAt(t, e, n) {
    const i = this.elements;
    return de.subVectors(t, e), de.lengthSq() === 0 && (de.z = 1), de.normalize(), We.crossVectors(n, de), We.lengthSq() === 0 && (Math.abs(n.z) === 1 ? de.x += 1e-4 : de.z += 1e-4, de.normalize(), We.crossVectors(n, de)), We.normalize(), di.crossVectors(de, We), i[0] = We.x, i[4] = di.x, i[8] = de.x, i[1] = We.y, i[5] = di.y, i[9] = de.y, i[2] = We.z, i[6] = di.z, i[10] = de.z, this;
  }
  multiply(t, e) {
    return e !== void 0 ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, i = e.elements, s = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], d = n[1], h = n[5], u = n[9], f = n[13], p = n[2], x = n[6], y = n[10], g = n[14], m = n[3], w = n[7], E = n[11], b = n[15], _ = i[0], R = i[4], I = i[8], B = i[12], U = i[1], W = i[5], F = i[9], A = i[13], P = i[2], D = i[6], C = i[10], k = i[14], Y = i[3], X = i[7], $ = i[11], K = i[15];
    return s[0] = a * _ + o * U + l * P + c * Y, s[4] = a * R + o * W + l * D + c * X, s[8] = a * I + o * F + l * C + c * $, s[12] = a * B + o * A + l * k + c * K, s[1] = d * _ + h * U + u * P + f * Y, s[5] = d * R + h * W + u * D + f * X, s[9] = d * I + h * F + u * C + f * $, s[13] = d * B + h * A + u * k + f * K, s[2] = p * _ + x * U + y * P + g * Y, s[6] = p * R + x * W + y * D + g * X, s[10] = p * I + x * F + y * C + g * $, s[14] = p * B + x * A + y * k + g * K, s[3] = m * _ + w * U + E * P + b * Y, s[7] = m * R + w * W + E * D + b * X, s[11] = m * I + w * F + E * C + b * $, s[15] = m * B + w * A + E * k + b * K, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[4], i = t[8], s = t[12], a = t[1], o = t[5], l = t[9], c = t[13], d = t[2], h = t[6], u = t[10], f = t[14], p = t[3], x = t[7], y = t[11], g = t[15];
    return p * (+s * l * h - i * c * h - s * o * u + n * c * u + i * o * f - n * l * f) + x * (+e * l * f - e * c * u + s * a * u - i * a * f + i * c * d - s * l * d) + y * (+e * c * h - e * o * f - s * a * h + n * a * f + s * o * d - n * c * d) + g * (-i * o * d - e * l * h + e * o * u + i * a * h - n * a * u + n * l * d);
  }
  transpose() {
    const t = this.elements;
    let e;
    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
  }
  setPosition(t, e, n) {
    const i = this.elements;
    return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], i = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], d = t[8], h = t[9], u = t[10], f = t[11], p = t[12], x = t[13], y = t[14], g = t[15], m = h * y * c - x * u * c + x * l * f - o * y * f - h * l * g + o * u * g, w = p * u * c - d * y * c - p * l * f + a * y * f + d * l * g - a * u * g, E = d * x * c - p * h * c + p * o * f - a * x * f - d * o * g + a * h * g, b = p * h * l - d * x * l - p * o * u + a * x * u + d * o * y - a * h * y, _ = e * m + n * w + i * E + s * b;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const R = 1 / _;
    return t[0] = m * R, t[1] = (x * u * s - h * y * s - x * i * f + n * y * f + h * i * g - n * u * g) * R, t[2] = (o * y * s - x * l * s + x * i * c - n * y * c - o * i * g + n * l * g) * R, t[3] = (h * l * s - o * u * s - h * i * c + n * u * c + o * i * f - n * l * f) * R, t[4] = w * R, t[5] = (d * y * s - p * u * s + p * i * f - e * y * f - d * i * g + e * u * g) * R, t[6] = (p * l * s - a * y * s - p * i * c + e * y * c + a * i * g - e * l * g) * R, t[7] = (a * u * s - d * l * s + d * i * c - e * u * c - a * i * f + e * l * f) * R, t[8] = E * R, t[9] = (p * h * s - d * x * s - p * n * f + e * x * f + d * n * g - e * h * g) * R, t[10] = (a * x * s - p * o * s + p * n * c - e * x * c - a * n * g + e * o * g) * R, t[11] = (d * o * s - a * h * s - d * n * c + e * h * c + a * n * f - e * o * f) * R, t[12] = b * R, t[13] = (d * x * i - p * h * i + p * n * u - e * x * u - d * n * y + e * h * y) * R, t[14] = (p * o * i - a * x * i - p * n * l + e * x * l + a * n * y - e * o * y) * R, t[15] = (a * h * i - d * o * i + d * n * l - e * h * l - a * n * u + e * o * u) * R, this;
  }
  scale(t) {
    const e = this.elements, n = t.x, i = t.y, s = t.z;
    return e[0] *= n, e[4] *= i, e[8] *= s, e[1] *= n, e[5] *= i, e[9] *= s, e[2] *= n, e[6] *= i, e[10] *= s, e[3] *= n, e[7] *= i, e[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, i));
  }
  makeTranslation(t, e, n) {
    return this.set(
      1,
      0,
      0,
      t,
      0,
      1,
      0,
      e,
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
  makeRotationX(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      e,
      -n,
      0,
      0,
      n,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      -n,
      0,
      0,
      n,
      e,
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
  makeRotationAxis(t, e) {
    const n = Math.cos(e), i = Math.sin(e), s = 1 - n, a = t.x, o = t.y, l = t.z, c = s * a, d = s * o;
    return this.set(
      c * a + n,
      c * o - i * l,
      c * l + i * o,
      0,
      c * o + i * l,
      d * o + n,
      d * l - i * a,
      0,
      c * l - i * o,
      d * l + i * a,
      s * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(t, e, n) {
    return this.set(
      t,
      0,
      0,
      0,
      0,
      e,
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
  makeShear(t, e, n) {
    return this.set(
      1,
      e,
      n,
      0,
      t,
      1,
      n,
      0,
      t,
      e,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(t, e, n) {
    const i = this.elements, s = e._x, a = e._y, o = e._z, l = e._w, c = s + s, d = a + a, h = o + o, u = s * c, f = s * d, p = s * h, x = a * d, y = a * h, g = o * h, m = l * c, w = l * d, E = l * h, b = n.x, _ = n.y, R = n.z;
    return i[0] = (1 - (x + g)) * b, i[1] = (f + E) * b, i[2] = (p - w) * b, i[3] = 0, i[4] = (f - E) * _, i[5] = (1 - (u + g)) * _, i[6] = (y + m) * _, i[7] = 0, i[8] = (p + w) * R, i[9] = (y - m) * R, i[10] = (1 - (u + x)) * R, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this;
  }
  decompose(t, e, n) {
    const i = this.elements;
    let s = gn.set(i[0], i[1], i[2]).length();
    const a = gn.set(i[4], i[5], i[6]).length(), o = gn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), t.x = i[12], t.y = i[13], t.z = i[14], _e.copy(this);
    const c = 1 / s, d = 1 / a, h = 1 / o;
    return _e.elements[0] *= c, _e.elements[1] *= c, _e.elements[2] *= c, _e.elements[4] *= d, _e.elements[5] *= d, _e.elements[6] *= d, _e.elements[8] *= h, _e.elements[9] *= h, _e.elements[10] *= h, e.setFromRotationMatrix(_e), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(t, e, n, i, s, a) {
    a === void 0 && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
    const o = this.elements, l = 2 * s / (e - t), c = 2 * s / (n - i), d = (e + t) / (e - t), h = (n + i) / (n - i), u = -(a + s) / (a - s), f = -2 * a * s / (a - s);
    return o[0] = l, o[4] = 0, o[8] = d, o[12] = 0, o[1] = 0, o[5] = c, o[9] = h, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = u, o[14] = f, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this;
  }
  makeOrthographic(t, e, n, i, s, a) {
    const o = this.elements, l = 1 / (e - t), c = 1 / (n - i), d = 1 / (a - s), h = (e + t) * l, u = (n + i) * c, f = (a + s) * d;
    return o[0] = 2 * l, o[4] = 0, o[8] = 0, o[12] = -h, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 * d, o[14] = -f, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this;
  }
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let i = 0; i < 16; i++)
      if (e[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
  }
}
ut.prototype.isMatrix4 = !0;
const gn = /* @__PURE__ */ new S(), _e = /* @__PURE__ */ new ut(), Fo = /* @__PURE__ */ new S(0, 0, 0), No = /* @__PURE__ */ new S(1, 1, 1), We = /* @__PURE__ */ new S(), di = /* @__PURE__ */ new S(), de = /* @__PURE__ */ new S(), ys = /* @__PURE__ */ new ut(), _s = /* @__PURE__ */ new le();
class Bn {
  constructor(t = 0, e = 0, n = 0, i = Bn.DefaultOrder) {
    this._x = t, this._y = e, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, e, n, i) {
    return this._x = t, this._y = e, this._z = n, this._order = i || this._order, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, e, n) {
    const i = t.elements, s = i[0], a = i[4], o = i[8], l = i[1], c = i[5], d = i[9], h = i[2], u = i[6], f = i[10];
    switch (e = e || this._order, e) {
      case "XYZ":
        this._y = Math.asin(pe(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-d, f), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(u, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-pe(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(pe(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-h, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-pe(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(u, f), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(pe(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-d, c), this._y = Math.atan2(-h, s)) : (this._x = 0, this._y = Math.atan2(o, f));
        break;
      case "XZY":
        this._z = Math.asin(-pe(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(u, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-d, f), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, n !== !1 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, n) {
    return ys.makeRotationFromQuaternion(t), this.setFromRotationMatrix(ys, e, n);
  }
  setFromVector3(t, e) {
    return this.set(t.x, t.y, t.z, e || this._order);
  }
  reorder(t) {
    return _s.setFromEuler(this), this.setFromQuaternion(_s, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
  }
  toVector3(t) {
    return t ? t.set(this._x, this._y, this._z) : new S(this._x, this._y, this._z);
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
}
Bn.prototype.isEuler = !0;
Bn.DefaultOrder = "XYZ";
Bn.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class Io {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = 1 << t | 0;
  }
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
}
let Bo = 0;
const vs = new S(), xn = new le(), Ie = new ut(), fi = new S(), Vn = new S(), zo = new S(), Uo = new le(), Ms = new S(1, 0, 0), ws = new S(0, 1, 0), bs = new S(0, 0, 1), Go = { type: "added" }, Ss = { type: "removed" };
class At extends hn {
  constructor() {
    super(), Object.defineProperty(this, "id", { value: Bo++ }), this.uuid = Le(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = At.DefaultUp.clone();
    const t = new S(), e = new Bn(), n = new le(), i = new S(1, 1, 1);
    function s() {
      n.setFromEuler(e, !1);
    }
    function a() {
      e.setFromQuaternion(n, void 0, !1);
    }
    e._onChange(s), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: e
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
        value: new ut()
      },
      normalMatrix: {
        value: new te()
      }
    }), this.matrix = new ut(), this.matrixWorld = new ut(), this.matrixAutoUpdate = At.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Io(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return xn.setFromAxisAngle(t, e), this.quaternion.multiply(xn), this;
  }
  rotateOnWorldAxis(t, e) {
    return xn.setFromAxisAngle(t, e), this.quaternion.premultiply(xn), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(Ms, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(ws, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(bs, t);
  }
  translateOnAxis(t, e) {
    return vs.copy(t).applyQuaternion(this.quaternion), this.position.add(vs.multiplyScalar(e)), this;
  }
  translateX(t) {
    return this.translateOnAxis(Ms, t);
  }
  translateY(t) {
    return this.translateOnAxis(ws, t);
  }
  translateZ(t) {
    return this.translateOnAxis(bs, t);
  }
  localToWorld(t) {
    return t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return t.applyMatrix4(Ie.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, n) {
    t.isVector3 ? fi.copy(t) : fi.set(t, e, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), Vn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Ie.lookAt(Vn, fi, this.up) : Ie.lookAt(fi, Vn, this.up), this.quaternion.setFromRotationMatrix(Ie), i && (Ie.extractRotation(i.matrixWorld), xn.setFromRotationMatrix(Ie), this.quaternion.premultiply(xn.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++)
        this.add(arguments[e]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.parent !== null && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(Go)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Ss)), this;
  }
  clear() {
    for (let t = 0; t < this.children.length; t++) {
      const e = this.children[t];
      e.parent = null, e.dispatchEvent(Ss);
    }
    return this.children.length = 0, this;
  }
  attach(t) {
    return this.updateWorldMatrix(!0, !1), Ie.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), Ie.multiply(t.parent.matrixWorld)), t.applyMatrix4(Ie), this.add(t), t.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(t, e);
      if (a !== void 0)
        return a;
    }
  }
  getWorldPosition(t) {
    return t === void 0 && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), t = new S()), this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return t === void 0 && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), t = new le()), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Vn, t, zo), t;
  }
  getWorldScale(t) {
    return t === void 0 && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), t = new S()), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Vn, Uo, t), t;
  }
  getWorldDirection(t) {
    t === void 0 && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), t = new S()), this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++)
      e[n].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === !1) return;
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++)
      e[n].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++)
      e[n].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, e) {
    const n = this.parent;
    if (t === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), e === !0) {
      const i = this.children;
      for (let s = 0, a = i.length; s < a; s++)
        i[s].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string", n = {};
    e && (t = {
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
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(t)), l.uuid;
    }
    if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(t.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, d = l.length; c < d; c++) {
            const h = l[c];
            s(t.shapes, h);
          }
        else
          s(t.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(t.materials, this.material[l]));
        i.material = o;
      } else
        i.material = s(t.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        i.animations.push(s(t.animations, l));
      }
    }
    if (e) {
      const o = a(t.geometries), l = a(t.materials), c = a(t.textures), d = a(t.images), h = a(t.shapes), u = a(t.skeletons), f = a(t.animations);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), d.length > 0 && (n.images = d), h.length > 0 && (n.shapes = h), u.length > 0 && (n.skeletons = u), f.length > 0 && (n.animations = f);
    }
    return n.object = i, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const d = o[c];
        delete d.metadata, l.push(d);
      }
      return l;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = !0) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0)
      for (let n = 0; n < t.children.length; n++) {
        const i = t.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
At.DefaultUp = new S(0, 1, 0);
At.DefaultMatrixAutoUpdate = !0;
At.prototype.isObject3D = !0;
const hr = /* @__PURE__ */ new S(), Ho = /* @__PURE__ */ new S(), ko = /* @__PURE__ */ new te();
class Te {
  constructor(t = new S(1, 0, 0), e = 0) {
    this.normal = t, this.constant = e;
  }
  set(t, e) {
    return this.normal.copy(t), this.constant = e, this;
  }
  setComponents(t, e, n, i) {
    return this.normal.set(t, e, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
  }
  setFromCoplanarPoints(t, e, n) {
    const i = hr.subVectors(n, e).cross(Ho.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), this.constant = t.constant, this;
  }
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), this.constant *= t, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e === void 0 && (console.warn("THREE.Plane: .projectPoint() target is now required"), e = new S()), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t);
  }
  intersectLine(t, e) {
    e === void 0 && (console.warn("THREE.Plane: .intersectLine() target is now required"), e = new S());
    const n = t.delta(hr), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const s = -(t.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : e.copy(n).multiplyScalar(s).add(t.start);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
    return e < 0 && n > 0 || n < 0 && e > 0;
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t === void 0 && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), t = new S()), t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    const n = e || ko.getNormalMatrix(t), i = this.coplanarPoint(hr).applyMatrix4(t), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s), this;
  }
  translate(t) {
    return this.constant -= t.dot(this.normal), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
Te.prototype.isPlane = !0;
const ve = /* @__PURE__ */ new S(), Be = /* @__PURE__ */ new S(), ur = /* @__PURE__ */ new S(), ze = /* @__PURE__ */ new S(), yn = /* @__PURE__ */ new S(), _n = /* @__PURE__ */ new S(), Ts = /* @__PURE__ */ new S(), dr = /* @__PURE__ */ new S(), fr = /* @__PURE__ */ new S(), pr = /* @__PURE__ */ new S();
class jt {
  constructor(t = new S(), e = new S(), n = new S()) {
    this.a = t, this.b = e, this.c = n;
  }
  static getNormal(t, e, n, i) {
    i === void 0 && (console.warn("THREE.Triangle: .getNormal() target is now required"), i = new S()), i.subVectors(n, e), ve.subVectors(t, e), i.cross(ve);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(t, e, n, i, s) {
    ve.subVectors(i, e), Be.subVectors(n, e), ur.subVectors(t, e);
    const a = ve.dot(ve), o = ve.dot(Be), l = ve.dot(ur), c = Be.dot(Be), d = Be.dot(ur), h = a * c - o * o;
    if (s === void 0 && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), s = new S()), h === 0)
      return s.set(-2, -1, -1);
    const u = 1 / h, f = (c * l - o * d) * u, p = (a * d - o * l) * u;
    return s.set(1 - f - p, p, f);
  }
  static containsPoint(t, e, n, i) {
    return this.getBarycoord(t, e, n, i, ze), ze.x >= 0 && ze.y >= 0 && ze.x + ze.y <= 1;
  }
  static getUV(t, e, n, i, s, a, o, l) {
    return this.getBarycoord(t, e, n, i, ze), l.set(0, 0), l.addScaledVector(s, ze.x), l.addScaledVector(a, ze.y), l.addScaledVector(o, ze.z), l;
  }
  static isFrontFacing(t, e, n, i) {
    return ve.subVectors(n, e), Be.subVectors(t, e), ve.cross(Be).dot(i) < 0;
  }
  set(t, e, n) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
  }
  setFromPointsAndIndices(t, e, n, i) {
    return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return ve.subVectors(this.c, this.b), Be.subVectors(this.a, this.b), ve.cross(Be).length() * 0.5;
  }
  getMidpoint(t) {
    return t === void 0 && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), t = new S()), t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return jt.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t === void 0 && (console.warn("THREE.Triangle: .getPlane() target is now required"), t = new Te()), t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return jt.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getUV(t, e, n, i, s) {
    return jt.getUV(t, this.a, this.b, this.c, e, n, i, s);
  }
  containsPoint(t) {
    return jt.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return jt.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    e === void 0 && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), e = new S());
    const n = this.a, i = this.b, s = this.c;
    let a, o;
    yn.subVectors(i, n), _n.subVectors(s, n), dr.subVectors(t, n);
    const l = yn.dot(dr), c = _n.dot(dr);
    if (l <= 0 && c <= 0)
      return e.copy(n);
    fr.subVectors(t, i);
    const d = yn.dot(fr), h = _n.dot(fr);
    if (d >= 0 && h <= d)
      return e.copy(i);
    const u = l * h - d * c;
    if (u <= 0 && l >= 0 && d <= 0)
      return a = l / (l - d), e.copy(n).addScaledVector(yn, a);
    pr.subVectors(t, s);
    const f = yn.dot(pr), p = _n.dot(pr);
    if (p >= 0 && f <= p)
      return e.copy(s);
    const x = f * c - l * p;
    if (x <= 0 && c >= 0 && p <= 0)
      return o = c / (c - p), e.copy(n).addScaledVector(_n, o);
    const y = d * p - f * h;
    if (y <= 0 && h - d >= 0 && f - p >= 0)
      return Ts.subVectors(s, i), o = (h - d) / (h - d + (f - p)), e.copy(i).addScaledVector(Ts, o);
    const g = 1 / (y + x + u);
    return a = x * g, o = u * g, e.copy(n).addScaledVector(yn, a).addScaledVector(_n, o);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
let Oo = 0;
function Qt() {
  Object.defineProperty(this, "id", { value: Oo++ }), this.uuid = Le(), this.name = "", this.type = "Material", this.fog = !0, this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0;
}
Qt.prototype = Object.assign(Object.create(hn.prototype), {
  constructor: Qt,
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
      for (const t in r) {
        const e = r[t];
        if (e === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        if (t === "shading") {
          console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = e === 1;
          continue;
        }
        const n = this[t];
        if (n === void 0) {
          console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
          continue;
        }
        n && n.isColor ? n.set(e) : n && n.isVector3 && e && e.isVector3 ? n.copy(e) : this[t] = e;
      }
  },
  toJSON: function(r) {
    const t = r === void 0 || typeof r == "string";
    t && (r = {
      textures: {},
      images: {}
    });
    const e = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), this.color && this.color.isColor && (e.color = this.color.getHex()), this.roughness !== void 0 && (e.roughness = this.roughness), this.metalness !== void 0 && (e.metalness = this.metalness), this.sheen && this.sheen.isColor && (e.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (e.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (e.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (e.specular = this.specular.getHex()), this.shininess !== void 0 && (e.shininess = this.shininess), this.clearcoat !== void 0 && (e.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (e.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (e.clearcoatMap = this.clearcoatMap.toJSON(r).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (e.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(r).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (e.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(r).uuid, e.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (e.map = this.map.toJSON(r).uuid), this.matcap && this.matcap.isTexture && (e.matcap = this.matcap.toJSON(r).uuid), this.alphaMap && this.alphaMap.isTexture && (e.alphaMap = this.alphaMap.toJSON(r).uuid), this.lightMap && this.lightMap.isTexture && (e.lightMap = this.lightMap.toJSON(r).uuid, e.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (e.aoMap = this.aoMap.toJSON(r).uuid, e.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (e.bumpMap = this.bumpMap.toJSON(r).uuid, e.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (e.normalMap = this.normalMap.toJSON(r).uuid, e.normalMapType = this.normalMapType, e.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (e.displacementMap = this.displacementMap.toJSON(r).uuid, e.displacementScale = this.displacementScale, e.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (e.roughnessMap = this.roughnessMap.toJSON(r).uuid), this.metalnessMap && this.metalnessMap.isTexture && (e.metalnessMap = this.metalnessMap.toJSON(r).uuid), this.emissiveMap && this.emissiveMap.isTexture && (e.emissiveMap = this.emissiveMap.toJSON(r).uuid), this.specularMap && this.specularMap.isTexture && (e.specularMap = this.specularMap.toJSON(r).uuid), this.envMap && this.envMap.isTexture && (e.envMap = this.envMap.toJSON(r).uuid, this.combine !== void 0 && (e.combine = this.combine)), this.envMapIntensity !== void 0 && (e.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (e.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (e.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (e.gradientMap = this.gradientMap.toJSON(r).uuid), this.size !== void 0 && (e.size = this.size), this.shadowSide !== null && (e.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (e.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (e.blending = this.blending), this.side !== 0 && (e.side = this.side), this.vertexColors && (e.vertexColors = !0), this.opacity < 1 && (e.opacity = this.opacity), this.transparent === !0 && (e.transparent = this.transparent), e.depthFunc = this.depthFunc, e.depthTest = this.depthTest, e.depthWrite = this.depthWrite, e.colorWrite = this.colorWrite, e.stencilWrite = this.stencilWrite, e.stencilWriteMask = this.stencilWriteMask, e.stencilFunc = this.stencilFunc, e.stencilRef = this.stencilRef, e.stencilFuncMask = this.stencilFuncMask, e.stencilFail = this.stencilFail, e.stencilZFail = this.stencilZFail, e.stencilZPass = this.stencilZPass, this.rotation && this.rotation !== 0 && (e.rotation = this.rotation), this.polygonOffset === !0 && (e.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (e.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (e.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && this.linewidth !== 1 && (e.linewidth = this.linewidth), this.dashSize !== void 0 && (e.dashSize = this.dashSize), this.gapSize !== void 0 && (e.gapSize = this.gapSize), this.scale !== void 0 && (e.scale = this.scale), this.dithering === !0 && (e.dithering = !0), this.alphaTest > 0 && (e.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (e.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (e.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (e.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (e.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (e.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (e.wireframeLinejoin = this.wireframeLinejoin), this.morphTargets === !0 && (e.morphTargets = !0), this.morphNormals === !0 && (e.morphNormals = !0), this.skinning === !0 && (e.skinning = !0), this.flatShading === !0 && (e.flatShading = this.flatShading), this.visible === !1 && (e.visible = !1), this.toneMapped === !1 && (e.toneMapped = !1), JSON.stringify(this.userData) !== "{}" && (e.userData = this.userData);
    function n(i) {
      const s = [];
      for (const a in i) {
        const o = i[a];
        delete o.metadata, s.push(o);
      }
      return s;
    }
    if (t) {
      const i = n(r.textures), s = n(r.images);
      i.length > 0 && (e.textures = i), s.length > 0 && (e.images = s);
    }
    return e;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(r) {
    this.name = r.name, this.fog = r.fog, this.blending = r.blending, this.side = r.side, this.vertexColors = r.vertexColors, this.opacity = r.opacity, this.transparent = r.transparent, this.blendSrc = r.blendSrc, this.blendDst = r.blendDst, this.blendEquation = r.blendEquation, this.blendSrcAlpha = r.blendSrcAlpha, this.blendDstAlpha = r.blendDstAlpha, this.blendEquationAlpha = r.blendEquationAlpha, this.depthFunc = r.depthFunc, this.depthTest = r.depthTest, this.depthWrite = r.depthWrite, this.stencilWriteMask = r.stencilWriteMask, this.stencilFunc = r.stencilFunc, this.stencilRef = r.stencilRef, this.stencilFuncMask = r.stencilFuncMask, this.stencilFail = r.stencilFail, this.stencilZFail = r.stencilZFail, this.stencilZPass = r.stencilZPass, this.stencilWrite = r.stencilWrite;
    const t = r.clippingPlanes;
    let e = null;
    if (t !== null) {
      const n = t.length;
      e = new Array(n);
      for (let i = 0; i !== n; ++i)
        e[i] = t[i].clone();
    }
    return this.clippingPlanes = e, this.clipIntersection = r.clipIntersection, this.clipShadows = r.clipShadows, this.shadowSide = r.shadowSide, this.colorWrite = r.colorWrite, this.precision = r.precision, this.polygonOffset = r.polygonOffset, this.polygonOffsetFactor = r.polygonOffsetFactor, this.polygonOffsetUnits = r.polygonOffsetUnits, this.dithering = r.dithering, this.alphaTest = r.alphaTest, this.alphaToCoverage = r.alphaToCoverage, this.premultipliedAlpha = r.premultipliedAlpha, this.visible = r.visible, this.toneMapped = r.toneMapped, this.userData = JSON.parse(JSON.stringify(r.userData)), this;
  },
  dispose: function() {
    this.dispatchEvent({ type: "dispose" });
  }
});
Object.defineProperty(Qt.prototype, "needsUpdate", {
  set: function(r) {
    r === !0 && this.version++;
  }
});
const Sa = {
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
}, Me = { h: 0, s: 0, l: 0 }, pi = { h: 0, s: 0, l: 0 };
function mr(r, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? r + (t - r) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? r + (t - r) * 6 * (2 / 3 - e) : r;
}
function gr(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function xr(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
class at {
  constructor(t, e, n) {
    return e === void 0 && n === void 0 ? this.set(t) : this.setRGB(t, e, n);
  }
  set(t) {
    return t && t.isColor ? this.copy(t) : typeof t == "number" ? this.setHex(t) : typeof t == "string" && this.setStyle(t), this;
  }
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  setHex(t) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, this;
  }
  setRGB(t, e, n) {
    return this.r = t, this.g = e, this.b = n, this;
  }
  setHSL(t, e, n) {
    if (t = Ao(t, 1), e = pe(e, 0, 1), n = pe(n, 0, 1), e === 0)
      this.r = this.g = this.b = n;
    else {
      const i = n <= 0.5 ? n * (1 + e) : n + e - n * e, s = 2 * n - i;
      this.r = mr(s, i, t + 1 / 3), this.g = mr(s, i, t), this.b = mr(s, i, t - 1 / 3);
    }
    return this;
  }
  setStyle(t) {
    function e(i) {
      i !== void 0 && parseFloat(i) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
    }
    let n;
    if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
      let i;
      const s = n[1], a = n[2];
      switch (s) {
        case "rgb":
        case "rgba":
          if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return this.r = Math.min(255, parseInt(i[1], 10)) / 255, this.g = Math.min(255, parseInt(i[2], 10)) / 255, this.b = Math.min(255, parseInt(i[3], 10)) / 255, e(i[4]), this;
          if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return this.r = Math.min(100, parseInt(i[1], 10)) / 100, this.g = Math.min(100, parseInt(i[2], 10)) / 100, this.b = Math.min(100, parseInt(i[3], 10)) / 100, e(i[4]), this;
          break;
        case "hsl":
        case "hsla":
          if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
            const o = parseFloat(i[1]) / 360, l = parseInt(i[2], 10) / 100, c = parseInt(i[3], 10) / 100;
            return e(i[4]), this.setHSL(o, l, c);
          }
          break;
      }
    } else if (n = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const i = n[1], s = i.length;
      if (s === 3)
        return this.r = parseInt(i.charAt(0) + i.charAt(0), 16) / 255, this.g = parseInt(i.charAt(1) + i.charAt(1), 16) / 255, this.b = parseInt(i.charAt(2) + i.charAt(2), 16) / 255, this;
      if (s === 6)
        return this.r = parseInt(i.charAt(0) + i.charAt(1), 16) / 255, this.g = parseInt(i.charAt(2) + i.charAt(3), 16) / 255, this.b = parseInt(i.charAt(4) + i.charAt(5), 16) / 255, this;
    }
    return t && t.length > 0 ? this.setColorName(t) : this;
  }
  setColorName(t) {
    const e = Sa[t.toLowerCase()];
    return e !== void 0 ? this.setHex(e) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copyGammaToLinear(t, e = 2) {
    return this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this;
  }
  copyLinearToGamma(t, e = 2) {
    const n = e > 0 ? 1 / e : 1;
    return this.r = Math.pow(t.r, n), this.g = Math.pow(t.g, n), this.b = Math.pow(t.b, n), this;
  }
  convertGammaToLinear(t) {
    return this.copyGammaToLinear(this, t), this;
  }
  convertLinearToGamma(t) {
    return this.copyLinearToGamma(this, t), this;
  }
  copySRGBToLinear(t) {
    return this.r = gr(t.r), this.g = gr(t.g), this.b = gr(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = xr(t.r), this.g = xr(t.g), this.b = xr(t.b), this;
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
  getHSL(t) {
    t === void 0 && (console.warn("THREE.Color: .getHSL() target is now required"), t = { h: 0, s: 0, l: 0 });
    const e = this.r, n = this.g, i = this.b, s = Math.max(e, n, i), a = Math.min(e, n, i);
    let o, l;
    const c = (a + s) / 2;
    if (a === s)
      o = 0, l = 0;
    else {
      const d = s - a;
      switch (l = c <= 0.5 ? d / (s + a) : d / (2 - s - a), s) {
        case e:
          o = (n - i) / d + (n < i ? 6 : 0);
          break;
        case n:
          o = (i - e) / d + 2;
          break;
        case i:
          o = (e - n) / d + 4;
          break;
      }
      o /= 6;
    }
    return t.h = o, t.s = l, t.l = c, t;
  }
  getStyle() {
    return "rgb(" + (this.r * 255 | 0) + "," + (this.g * 255 | 0) + "," + (this.b * 255 | 0) + ")";
  }
  offsetHSL(t, e, n) {
    return this.getHSL(Me), Me.h += t, Me.s += e, Me.l += n, this.setHSL(Me.h, Me.s, Me.l), this;
  }
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  addColors(t, e) {
    return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
  }
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  lerp(t, e) {
    return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
  }
  lerpColors(t, e, n) {
    return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this;
  }
  lerpHSL(t, e) {
    this.getHSL(Me), t.getHSL(pi);
    const n = tr(Me.h, pi.h, e), i = tr(Me.s, pi.s, e), s = tr(Me.l, pi.l, e);
    return this.setHSL(n, i, s), this;
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
  }
  fromBufferAttribute(t, e) {
    return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), t.normalized === !0 && (this.r /= 255, this.g /= 255, this.b /= 255), this;
  }
  toJSON() {
    return this.getHex();
  }
}
at.NAMES = Sa;
at.prototype.isColor = !0;
at.prototype.r = 1;
at.prototype.g = 1;
at.prototype.b = 1;
class Xr extends Qt {
  constructor(t) {
    super(), this.type = "MeshBasicMaterial", this.color = new at(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this;
  }
}
Xr.prototype.isMeshBasicMaterial = !0;
const Gt = new S(), mi = new Z();
class $t {
  constructor(t, e, n) {
    if (Array.isArray(t))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n === !0, this.usage = 35044, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.onUploadCallback = function() {
    };
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  copy(t) {
    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this;
  }
  copyAt(t, e, n) {
    t *= this.itemSize, n *= e.itemSize;
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[t + i] = e.array[n + i];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  copyColorsArray(t) {
    const e = this.array;
    let n = 0;
    for (let i = 0, s = t.length; i < s; i++) {
      let a = t[i];
      a === void 0 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), a = new at()), e[n++] = a.r, e[n++] = a.g, e[n++] = a.b;
    }
    return this;
  }
  copyVector2sArray(t) {
    const e = this.array;
    let n = 0;
    for (let i = 0, s = t.length; i < s; i++) {
      let a = t[i];
      a === void 0 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), a = new Z()), e[n++] = a.x, e[n++] = a.y;
    }
    return this;
  }
  copyVector3sArray(t) {
    const e = this.array;
    let n = 0;
    for (let i = 0, s = t.length; i < s; i++) {
      let a = t[i];
      a === void 0 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), a = new S()), e[n++] = a.x, e[n++] = a.y, e[n++] = a.z;
    }
    return this;
  }
  copyVector4sArray(t) {
    const e = this.array;
    let n = 0;
    for (let i = 0, s = t.length; i < s; i++) {
      let a = t[i];
      a === void 0 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), a = new Bt()), e[n++] = a.x, e[n++] = a.y, e[n++] = a.z, e[n++] = a.w;
    }
    return this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let e = 0, n = this.count; e < n; e++)
        mi.fromBufferAttribute(this, e), mi.applyMatrix3(t), this.setXY(e, mi.x, mi.y);
    else if (this.itemSize === 3)
      for (let e = 0, n = this.count; e < n; e++)
        Gt.fromBufferAttribute(this, e), Gt.applyMatrix3(t), this.setXYZ(e, Gt.x, Gt.y, Gt.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Gt.x = this.getX(e), Gt.y = this.getY(e), Gt.z = this.getZ(e), Gt.applyMatrix4(t), this.setXYZ(e, Gt.x, Gt.y, Gt.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Gt.x = this.getX(e), Gt.y = this.getY(e), Gt.z = this.getZ(e), Gt.applyNormalMatrix(t), this.setXYZ(e, Gt.x, Gt.y, Gt.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Gt.x = this.getX(e), Gt.y = this.getY(e), Gt.z = this.getZ(e), Gt.transformDirection(t), this.setXYZ(e, Gt.x, Gt.y, Gt.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getX(t) {
    return this.array[t * this.itemSize];
  }
  setX(t, e) {
    return this.array[t * this.itemSize] = e, this;
  }
  getY(t) {
    return this.array[t * this.itemSize + 1];
  }
  setY(t, e) {
    return this.array[t * this.itemSize + 1] = e, this;
  }
  getZ(t) {
    return this.array[t * this.itemSize + 2];
  }
  setZ(t, e) {
    return this.array[t * this.itemSize + 2] = e, this;
  }
  getW(t) {
    return this.array[t * this.itemSize + 3];
  }
  setW(t, e) {
    return this.array[t * this.itemSize + 3] = e, this;
  }
  setXY(t, e, n) {
    return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, i) {
    return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this;
  }
  setXYZW(t, e, n, i, s) {
    return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = s, this;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.prototype.slice.call(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (t.name = this.name), this.usage !== 35044 && (t.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (t.updateRange = this.updateRange), t;
  }
}
$t.prototype.isBufferAttribute = !0;
class Ta extends $t {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class Ea extends $t {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class Vo extends $t {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
Vo.prototype.isFloat16BufferAttribute = !0;
class kt extends $t {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
function Aa(r) {
  if (r.length === 0) return -1 / 0;
  let t = r[0];
  for (let e = 1, n = r.length; e < n; ++e)
    r[e] > t && (t = r[e]);
  return t;
}
let Wo = 0;
const Se = new ut(), yr = new At(), vn = new S(), fe = new xe(), Wn = new xe(), Jt = new S();
class It extends hn {
  constructor() {
    super(), Object.defineProperty(this, "id", { value: Wo++ }), this.uuid = Le(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (Aa(t) > 65535 ? Ea : Ta)(t, 1) : this.index = t, this;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return this.attributes[t] = e, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, e, n = 0) {
    this.groups.push({
      start: t,
      count: e,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    this.drawRange.start = t, this.drawRange.count = e;
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new te().getNormalMatrix(t);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(t), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  rotateX(t) {
    return Se.makeRotationX(t), this.applyMatrix4(Se), this;
  }
  rotateY(t) {
    return Se.makeRotationY(t), this.applyMatrix4(Se), this;
  }
  rotateZ(t) {
    return Se.makeRotationZ(t), this.applyMatrix4(Se), this;
  }
  translate(t, e, n) {
    return Se.makeTranslation(t, e, n), this.applyMatrix4(Se), this;
  }
  scale(t, e, n) {
    return Se.makeScale(t, e, n), this.applyMatrix4(Se), this;
  }
  lookAt(t) {
    return yr.lookAt(t), yr.updateMatrix(), this.applyMatrix4(yr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(vn).negate(), this.translate(vn.x, vn.y, vn.z), this;
  }
  setFromPoints(t) {
    const e = [];
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      e.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new kt(e, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new xe());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new S(-1 / 0, -1 / 0, -1 / 0),
        new S(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e)
        for (let n = 0, i = e.length; n < i; n++) {
          const s = e[n];
          fe.setFromBufferAttribute(s), this.morphTargetsRelative ? (Jt.addVectors(this.boundingBox.min, fe.min), this.boundingBox.expandByPoint(Jt), Jt.addVectors(this.boundingBox.max, fe.max), this.boundingBox.expandByPoint(Jt)) : (this.boundingBox.expandByPoint(fe.min), this.boundingBox.expandByPoint(fe.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Nn());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new S(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if (fe.setFromBufferAttribute(t), e)
        for (let s = 0, a = e.length; s < a; s++) {
          const o = e[s];
          Wn.setFromBufferAttribute(o), this.morphTargetsRelative ? (Jt.addVectors(fe.min, Wn.min), fe.expandByPoint(Jt), Jt.addVectors(fe.max, Wn.max), fe.expandByPoint(Jt)) : (fe.expandByPoint(Wn.min), fe.expandByPoint(Wn.max));
        }
      fe.getCenter(n);
      let i = 0;
      for (let s = 0, a = t.count; s < a; s++)
        Jt.fromBufferAttribute(t, s), i = Math.max(i, n.distanceToSquared(Jt));
      if (e)
        for (let s = 0, a = e.length; s < a; s++) {
          const o = e[s], l = this.morphTargetsRelative;
          for (let c = 0, d = o.count; c < d; c++)
            Jt.fromBufferAttribute(o, c), l && (vn.fromBufferAttribute(t, c), Jt.add(vn)), i = Math.max(i, n.distanceToSquared(Jt));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeFaceNormals() {
  }
  computeTangents() {
    const t = this.index, e = this.attributes;
    if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.array, i = e.position.array, s = e.normal.array, a = e.uv.array, o = i.length / 3;
    e.tangent === void 0 && this.setAttribute("tangent", new $t(new Float32Array(4 * o), 4));
    const l = e.tangent.array, c = [], d = [];
    for (let U = 0; U < o; U++)
      c[U] = new S(), d[U] = new S();
    const h = new S(), u = new S(), f = new S(), p = new Z(), x = new Z(), y = new Z(), g = new S(), m = new S();
    function w(U, W, F) {
      h.fromArray(i, U * 3), u.fromArray(i, W * 3), f.fromArray(i, F * 3), p.fromArray(a, U * 2), x.fromArray(a, W * 2), y.fromArray(a, F * 2), u.sub(h), f.sub(h), x.sub(p), y.sub(p);
      const A = 1 / (x.x * y.y - y.x * x.y);
      isFinite(A) && (g.copy(u).multiplyScalar(y.y).addScaledVector(f, -x.y).multiplyScalar(A), m.copy(f).multiplyScalar(x.x).addScaledVector(u, -y.x).multiplyScalar(A), c[U].add(g), c[W].add(g), c[F].add(g), d[U].add(m), d[W].add(m), d[F].add(m));
    }
    let E = this.groups;
    E.length === 0 && (E = [{
      start: 0,
      count: n.length
    }]);
    for (let U = 0, W = E.length; U < W; ++U) {
      const F = E[U], A = F.start, P = F.count;
      for (let D = A, C = A + P; D < C; D += 3)
        w(
          n[D + 0],
          n[D + 1],
          n[D + 2]
        );
    }
    const b = new S(), _ = new S(), R = new S(), I = new S();
    function B(U) {
      R.fromArray(s, U * 3), I.copy(R);
      const W = c[U];
      b.copy(W), b.sub(R.multiplyScalar(R.dot(W))).normalize(), _.crossVectors(I, W);
      const A = _.dot(d[U]) < 0 ? -1 : 1;
      l[U * 4] = b.x, l[U * 4 + 1] = b.y, l[U * 4 + 2] = b.z, l[U * 4 + 3] = A;
    }
    for (let U = 0, W = E.length; U < W; ++U) {
      const F = E[U], A = F.start, P = F.count;
      for (let D = A, C = A + P; D < C; D += 3)
        B(n[D + 0]), B(n[D + 1]), B(n[D + 2]);
    }
  }
  computeVertexNormals() {
    const t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new $t(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let u = 0, f = n.count; u < f; u++)
          n.setXYZ(u, 0, 0, 0);
      const i = new S(), s = new S(), a = new S(), o = new S(), l = new S(), c = new S(), d = new S(), h = new S();
      if (t)
        for (let u = 0, f = t.count; u < f; u += 3) {
          const p = t.getX(u + 0), x = t.getX(u + 1), y = t.getX(u + 2);
          i.fromBufferAttribute(e, p), s.fromBufferAttribute(e, x), a.fromBufferAttribute(e, y), d.subVectors(a, s), h.subVectors(i, s), d.cross(h), o.fromBufferAttribute(n, p), l.fromBufferAttribute(n, x), c.fromBufferAttribute(n, y), o.add(d), l.add(d), c.add(d), n.setXYZ(p, o.x, o.y, o.z), n.setXYZ(x, l.x, l.y, l.z), n.setXYZ(y, c.x, c.y, c.z);
        }
      else
        for (let u = 0, f = e.count; u < f; u += 3)
          i.fromBufferAttribute(e, u + 0), s.fromBufferAttribute(e, u + 1), a.fromBufferAttribute(e, u + 2), d.subVectors(a, s), h.subVectors(i, s), d.cross(h), n.setXYZ(u + 0, d.x, d.y, d.z), n.setXYZ(u + 1, d.x, d.y, d.z), n.setXYZ(u + 2, d.x, d.y, d.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  merge(t, e) {
    if (!(t && t.isBufferGeometry)) {
      console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
      return;
    }
    e === void 0 && (e = 0, console.warn(
      "THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
    ));
    const n = this.attributes;
    for (const i in n) {
      if (t.attributes[i] === void 0) continue;
      const a = n[i].array, o = t.attributes[i], l = o.array, c = o.itemSize * e, d = Math.min(l.length, a.length - c);
      for (let h = 0, u = c; h < d; h++, u++)
        a[u] = l[h];
    }
    return this;
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, n = t.count; e < n; e++)
      Jt.fromBufferAttribute(t, e), Jt.normalize(), t.setXYZ(e, Jt.x, Jt.y, Jt.z);
  }
  toNonIndexed() {
    function t(o, l) {
      const c = o.array, d = o.itemSize, h = o.normalized, u = new c.constructor(l.length * d);
      let f = 0, p = 0;
      for (let x = 0, y = l.length; x < y; x++) {
        f = l[x] * d;
        for (let g = 0; g < d; g++)
          u[p++] = c[f++];
      }
      return new $t(u, d, h);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new It(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const l = i[o], c = t(l, n);
      e.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let d = 0, h = c.length; d < h; d++) {
        const u = c[d], f = t(u, n);
        l.push(f);
      }
      e.morphAttributes[o] = l;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      e.addGroup(c.start, c.count, c.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (t[c] = l[c]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null && (t.data.index = {
      type: e.array.constructor.name,
      array: Array.prototype.slice.call(e.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      t.data.attributes[l] = c.toJSON(t.data);
    }
    const i = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], d = [];
      for (let h = 0, u = c.length; h < u; h++) {
        const f = c[h];
        d.push(f.toJSON(t.data));
      }
      d.length > 0 && (i[l] = d, s = !0);
    }
    s && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (t.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), t;
  }
  clone() {
    return new It().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const e = {};
    this.name = t.name;
    const n = t.index;
    n !== null && this.setIndex(n.clone(e));
    const i = t.attributes;
    for (const c in i) {
      const d = i[c];
      this.setAttribute(c, d.clone(e));
    }
    const s = t.morphAttributes;
    for (const c in s) {
      const d = [], h = s[c];
      for (let u = 0, f = h.length; u < f; u++)
        d.push(h[u].clone(e));
      this.morphAttributes[c] = d;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let c = 0, d = a.length; c < d; c++) {
      const h = a[c];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const o = t.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = t.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
It.prototype.isBufferGeometry = !0;
const Es = /* @__PURE__ */ new ut(), Mn = /* @__PURE__ */ new In(), _r = /* @__PURE__ */ new Nn(), qe = /* @__PURE__ */ new S(), Xe = /* @__PURE__ */ new S(), Ye = /* @__PURE__ */ new S(), vr = /* @__PURE__ */ new S(), Mr = /* @__PURE__ */ new S(), wr = /* @__PURE__ */ new S(), gi = /* @__PURE__ */ new S(), xi = /* @__PURE__ */ new S(), yi = /* @__PURE__ */ new S(), _i = /* @__PURE__ */ new Z(), vi = /* @__PURE__ */ new Z(), Mi = /* @__PURE__ */ new Z(), br = /* @__PURE__ */ new S(), wi = /* @__PURE__ */ new S();
class ee extends At {
  constructor(t = new It(), e = new Xr()) {
    super(), this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t) {
    return super.copy(t), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry;
    if (t.isBufferGeometry) {
      const e = t.morphAttributes, n = Object.keys(e);
      if (n.length > 0) {
        const i = e[n[0]];
        if (i !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let s = 0, a = i.length; s < a; s++) {
            const o = i[s].name || String(s);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
          }
        }
      }
    } else {
      const e = t.morphTargets;
      e !== void 0 && e.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  }
  raycast(t, e) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), _r.copy(n.boundingSphere), _r.applyMatrix4(s), t.ray.intersectsSphere(_r) === !1) || (Es.copy(s).invert(), Mn.copy(t.ray).applyMatrix4(Es), n.boundingBox !== null && Mn.intersectsBox(n.boundingBox) === !1))
      return;
    let a;
    if (n.isBufferGeometry) {
      const o = n.index, l = n.attributes.position, c = n.morphAttributes.position, d = n.morphTargetsRelative, h = n.attributes.uv, u = n.attributes.uv2, f = n.groups, p = n.drawRange;
      if (o !== null)
        if (Array.isArray(i))
          for (let x = 0, y = f.length; x < y; x++) {
            const g = f[x], m = i[g.materialIndex], w = Math.max(g.start, p.start), E = Math.min(g.start + g.count, p.start + p.count);
            for (let b = w, _ = E; b < _; b += 3) {
              const R = o.getX(b), I = o.getX(b + 1), B = o.getX(b + 2);
              a = bi(this, m, t, Mn, l, c, d, h, u, R, I, B), a && (a.faceIndex = Math.floor(b / 3), a.face.materialIndex = g.materialIndex, e.push(a));
            }
          }
        else {
          const x = Math.max(0, p.start), y = Math.min(o.count, p.start + p.count);
          for (let g = x, m = y; g < m; g += 3) {
            const w = o.getX(g), E = o.getX(g + 1), b = o.getX(g + 2);
            a = bi(this, i, t, Mn, l, c, d, h, u, w, E, b), a && (a.faceIndex = Math.floor(g / 3), e.push(a));
          }
        }
      else if (l !== void 0)
        if (Array.isArray(i))
          for (let x = 0, y = f.length; x < y; x++) {
            const g = f[x], m = i[g.materialIndex], w = Math.max(g.start, p.start), E = Math.min(g.start + g.count, p.start + p.count);
            for (let b = w, _ = E; b < _; b += 3) {
              const R = b, I = b + 1, B = b + 2;
              a = bi(this, m, t, Mn, l, c, d, h, u, R, I, B), a && (a.faceIndex = Math.floor(b / 3), a.face.materialIndex = g.materialIndex, e.push(a));
            }
          }
        else {
          const x = Math.max(0, p.start), y = Math.min(l.count, p.start + p.count);
          for (let g = x, m = y; g < m; g += 3) {
            const w = g, E = g + 1, b = g + 2;
            a = bi(this, i, t, Mn, l, c, d, h, u, w, E, b), a && (a.faceIndex = Math.floor(g / 3), e.push(a));
          }
        }
    } else n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
  }
}
ee.prototype.isMesh = !0;
function qo(r, t, e, n, i, s, a, o) {
  let l;
  if (t.side === 1 ? l = n.intersectTriangle(a, s, i, !0, o) : l = n.intersectTriangle(i, s, a, t.side !== 2, o), l === null) return null;
  wi.copy(o), wi.applyMatrix4(r.matrixWorld);
  const c = e.ray.origin.distanceTo(wi);
  return c < e.near || c > e.far ? null : {
    distance: c,
    point: wi.clone(),
    object: r
  };
}
function bi(r, t, e, n, i, s, a, o, l, c, d, h) {
  qe.fromBufferAttribute(i, c), Xe.fromBufferAttribute(i, d), Ye.fromBufferAttribute(i, h);
  const u = r.morphTargetInfluences;
  if (t.morphTargets && s && u) {
    gi.set(0, 0, 0), xi.set(0, 0, 0), yi.set(0, 0, 0);
    for (let p = 0, x = s.length; p < x; p++) {
      const y = u[p], g = s[p];
      y !== 0 && (vr.fromBufferAttribute(g, c), Mr.fromBufferAttribute(g, d), wr.fromBufferAttribute(g, h), a ? (gi.addScaledVector(vr, y), xi.addScaledVector(Mr, y), yi.addScaledVector(wr, y)) : (gi.addScaledVector(vr.sub(qe), y), xi.addScaledVector(Mr.sub(Xe), y), yi.addScaledVector(wr.sub(Ye), y)));
    }
    qe.add(gi), Xe.add(xi), Ye.add(yi);
  }
  r.isSkinnedMesh && t.skinning && (r.boneTransform(c, qe), r.boneTransform(d, Xe), r.boneTransform(h, Ye));
  const f = qo(r, t, e, n, qe, Xe, Ye, br);
  if (f) {
    o && (_i.fromBufferAttribute(o, c), vi.fromBufferAttribute(o, d), Mi.fromBufferAttribute(o, h), f.uv = jt.getUV(br, qe, Xe, Ye, _i, vi, Mi, new Z())), l && (_i.fromBufferAttribute(l, c), vi.fromBufferAttribute(l, d), Mi.fromBufferAttribute(l, h), f.uv2 = jt.getUV(br, qe, Xe, Ye, _i, vi, Mi, new Z()));
    const p = {
      a: c,
      b: d,
      c: h,
      normal: new S(),
      materialIndex: 0
    };
    jt.getNormal(qe, Xe, Ye, p.normal), f.face = p;
  }
  return f;
}
class Ge extends It {
  constructor(t = 1, e = 1, n = 1, i = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: e,
      depth: n,
      widthSegments: i,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    i = Math.floor(i), s = Math.floor(s), a = Math.floor(a);
    const l = [], c = [], d = [], h = [];
    let u = 0, f = 0;
    p("z", "y", "x", -1, -1, n, e, t, a, s, 0), p("z", "y", "x", 1, -1, n, e, -t, a, s, 1), p("x", "z", "y", 1, 1, t, n, e, i, a, 2), p("x", "z", "y", 1, -1, t, n, -e, i, a, 3), p("x", "y", "z", 1, -1, t, e, n, i, s, 4), p("x", "y", "z", -1, -1, t, e, -n, i, s, 5), this.setIndex(l), this.setAttribute("position", new kt(c, 3)), this.setAttribute("normal", new kt(d, 3)), this.setAttribute("uv", new kt(h, 2));
    function p(x, y, g, m, w, E, b, _, R, I, B) {
      const U = E / R, W = b / I, F = E / 2, A = b / 2, P = _ / 2, D = R + 1, C = I + 1;
      let k = 0, Y = 0;
      const X = new S();
      for (let $ = 0; $ < C; $++) {
        const K = $ * W - A;
        for (let ct = 0; ct < D; ct++) {
          const ft = ct * U - F;
          X[x] = ft * m, X[y] = K * w, X[g] = P, c.push(X.x, X.y, X.z), X[x] = 0, X[y] = 0, X[g] = _ > 0 ? 1 : -1, d.push(X.x, X.y, X.z), h.push(ct / R), h.push(1 - $ / I), k += 1;
        }
      }
      for (let $ = 0; $ < I; $++)
        for (let K = 0; K < R; K++) {
          const ct = u + K + D * $, ft = u + K + D * ($ + 1), G = u + (K + 1) + D * ($ + 1), Ct = u + (K + 1) + D * $;
          l.push(ct, ft, Ct), l.push(ft, G, Ct), Y += 6;
        }
      o.addGroup(f, Y, B), f += Y, u += k;
    }
  }
}
function Cn(r) {
  const t = {};
  for (const e in r) {
    t[e] = {};
    for (const n in r[e]) {
      const i = r[e][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? t[e][n] = i.clone() : Array.isArray(i) ? t[e][n] = i.slice() : t[e][n] = i;
    }
  }
  return t;
}
function ie(r) {
  const t = {};
  for (let e = 0; e < r.length; e++) {
    const n = Cn(r[e]);
    for (const i in n)
      t[i] = n[i];
  }
  return t;
}
const Xo = { clone: Cn, merge: ie };
var Yo = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, jo = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class cn extends Qt {
  constructor(t) {
    super(), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = Yo, this.fragmentShader = jo, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
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
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, t !== void 0 && (t.attributes !== void 0 && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t));
  }
  copy(t) {
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Cn(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    e.glslVersion = this.glslVersion, e.uniforms = {};
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture ? e.uniforms[i] = {
        type: "t",
        value: a.toJSON(t).uuid
      } : a && a.isColor ? e.uniforms[i] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? e.uniforms[i] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? e.uniforms[i] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? e.uniforms[i] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? e.uniforms[i] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? e.uniforms[i] = {
        type: "m4",
        value: a.toArray()
      } : e.uniforms[i] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }
}
cn.prototype.isShaderMaterial = !0;
class Yr extends At {
  constructor() {
    super(), this.type = "Camera", this.matrixWorldInverse = new ut(), this.projectionMatrix = new ut(), this.projectionMatrixInverse = new ut();
  }
  copy(t, e) {
    return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this;
  }
  getWorldDirection(t) {
    t === void 0 && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), t = new S()), this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(-e[8], -e[9], -e[10]).normalize();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
Yr.prototype.isCamera = !0;
class ue extends Yr {
  constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
    super(), this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(t) {
    const e = 0.5 * this.getFilmHeight() / t;
    this.fov = zr * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const t = Math.tan(Ki * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  getEffectiveFOV() {
    return zr * 2 * Math.atan(
      Math.tan(Ki * 0.5 * this.fov) / this.zoom
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
  setViewOffset(t, e, n, i, s, a) {
    this.aspect = t / e, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = t * Math.tan(Ki * 0.5 * this.fov) / this.zoom, n = 2 * e, i = this.aspect * n, s = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      s += a.offsetX * i / l, e -= a.offsetY * n / c, i *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (s += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, e, e - n, t, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
}
ue.prototype.isPerspectiveCamera = !0;
const wn = 90, bn = 1;
class jr extends At {
  constructor(t, e, n) {
    if (super(), this.type = "CubeCamera", n.isWebGLCubeRenderTarget !== !0) {
      console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
      return;
    }
    this.renderTarget = n;
    const i = new ue(wn, bn, t, e);
    i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new S(1, 0, 0)), this.add(i);
    const s = new ue(wn, bn, t, e);
    s.layers = this.layers, s.up.set(0, -1, 0), s.lookAt(new S(-1, 0, 0)), this.add(s);
    const a = new ue(wn, bn, t, e);
    a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(new S(0, 1, 0)), this.add(a);
    const o = new ue(wn, bn, t, e);
    o.layers = this.layers, o.up.set(0, 0, -1), o.lookAt(new S(0, -1, 0)), this.add(o);
    const l = new ue(wn, bn, t, e);
    l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new S(0, 0, 1)), this.add(l);
    const c = new ue(wn, bn, t, e);
    c.layers = this.layers, c.up.set(0, -1, 0), c.lookAt(new S(0, 0, -1)), this.add(c);
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget, [i, s, a, o, l, c] = this.children, d = t.xr.enabled, h = t.getRenderTarget();
    t.xr.enabled = !1;
    const u = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0), t.render(e, i), t.setRenderTarget(n, 1), t.render(e, s), t.setRenderTarget(n, 2), t.render(e, a), t.setRenderTarget(n, 3), t.render(e, o), t.setRenderTarget(n, 4), t.render(e, l), n.texture.generateMipmaps = u, t.setRenderTarget(n, 5), t.render(e, c), t.setRenderTarget(h), t.xr.enabled = d;
  }
}
class Vi extends ne {
  constructor(t, e, n, i, s, a, o, l, c, d) {
    t = t !== void 0 ? t : [], e = e !== void 0 ? e : 301, o = o !== void 0 ? o : 1022, super(t, e, n, i, s, a, o, l, c, d), this._needsFlipEnvMap = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
Vi.prototype.isCubeTexture = !0;
class La extends ln {
  constructor(t, e, n) {
    Number.isInteger(e) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), e = n), super(t, t, e), e = e || {}, this.texture = new Vi(void 0, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : !1, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : 1006, this.texture._needsFlipEnvMap = !1;
  }
  fromEquirectangularTexture(t, e) {
    this.texture.type = e.type, this.texture.format = 1023, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
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
    }, i = new Ge(5, 5, 5), s = new cn({
      name: "CubemapFromEquirect",
      uniforms: Cn(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    s.uniforms.tEquirect.value = e;
    const a = new ee(i, s), o = e.minFilter;
    return e.minFilter === 1008 && (e.minFilter = 1006), new jr(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(t, e, n, i) {
    const s = t.getRenderTarget();
    for (let a = 0; a < 6; a++)
      t.setRenderTarget(this, a), t.clear(e, n, i);
    t.setRenderTarget(s);
  }
}
La.prototype.isWebGLCubeRenderTarget = !0;
class Ra extends ne {
  constructor(t, e, n, i, s, a, o, l, c, d, h, u) {
    super(null, a, o, l, c, d, i, s, h, u), this.image = { data: t || null, width: e || 1, height: n || 1 }, this.magFilter = c !== void 0 ? c : 1003, this.minFilter = d !== void 0 ? d : 1003, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0;
  }
}
Ra.prototype.isDataTexture = !0;
const Sn = /* @__PURE__ */ new Nn(), Si = /* @__PURE__ */ new S();
class Wi {
  constructor(t = new Te(), e = new Te(), n = new Te(), i = new Te(), s = new Te(), a = new Te()) {
    this.planes = [t, e, n, i, s, a];
  }
  set(t, e, n, i, s, a) {
    const o = this.planes;
    return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(i), o[4].copy(s), o[5].copy(a), this;
  }
  copy(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++)
      e[n].copy(t.planes[n]);
    return this;
  }
  setFromProjectionMatrix(t) {
    const e = this.planes, n = t.elements, i = n[0], s = n[1], a = n[2], o = n[3], l = n[4], c = n[5], d = n[6], h = n[7], u = n[8], f = n[9], p = n[10], x = n[11], y = n[12], g = n[13], m = n[14], w = n[15];
    return e[0].setComponents(o - i, h - l, x - u, w - y).normalize(), e[1].setComponents(o + i, h + l, x + u, w + y).normalize(), e[2].setComponents(o + s, h + c, x + f, w + g).normalize(), e[3].setComponents(o - s, h - c, x - f, w - g).normalize(), e[4].setComponents(o - a, h - d, x - p, w - m).normalize(), e[5].setComponents(o + a, h + d, x + p, w + m).normalize(), this;
  }
  intersectsObject(t) {
    const e = t.geometry;
    return e.boundingSphere === null && e.computeBoundingSphere(), Sn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(Sn);
  }
  intersectsSprite(t) {
    return Sn.center.set(0, 0, 0), Sn.radius = 0.7071067811865476, Sn.applyMatrix4(t.matrixWorld), this.intersectsSphere(Sn);
  }
  intersectsSphere(t) {
    const e = this.planes, n = t.center, i = -t.radius;
    for (let s = 0; s < 6; s++)
      if (e[s].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = e[n];
      if (Si.x = i.normal.x > 0 ? t.max.x : t.min.x, Si.y = i.normal.y > 0 ? t.max.y : t.min.y, Si.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(Si) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++)
      if (e[n].distanceToPoint(t) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Ca() {
  let r = null, t = !1, e = null, n = null;
  function i(s, a) {
    e(s, a), n = r.requestAnimationFrame(i);
  }
  return {
    start: function() {
      t !== !0 && e !== null && (n = r.requestAnimationFrame(i), t = !0);
    },
    stop: function() {
      r.cancelAnimationFrame(n), t = !1;
    },
    setAnimationLoop: function(s) {
      e = s;
    },
    setContext: function(s) {
      r = s;
    }
  };
}
function Zo(r, t) {
  const e = t.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(c, d) {
    const h = c.array, u = c.usage, f = r.createBuffer();
    r.bindBuffer(d, f), r.bufferData(d, h, u), c.onUploadCallback();
    let p = 5126;
    return h instanceof Float32Array ? p = 5126 : h instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : h instanceof Uint16Array ? c.isFloat16BufferAttribute ? e ? p = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : p = 5123 : h instanceof Int16Array ? p = 5122 : h instanceof Uint32Array ? p = 5125 : h instanceof Int32Array ? p = 5124 : h instanceof Int8Array ? p = 5120 : h instanceof Uint8Array && (p = 5121), {
      buffer: f,
      type: p,
      bytesPerElement: h.BYTES_PER_ELEMENT,
      version: c.version
    };
  }
  function s(c, d, h) {
    const u = d.array, f = d.updateRange;
    r.bindBuffer(h, c), f.count === -1 ? r.bufferSubData(h, 0, u) : (e ? r.bufferSubData(
      h,
      f.offset * u.BYTES_PER_ELEMENT,
      u,
      f.offset,
      f.count
    ) : r.bufferSubData(
      h,
      f.offset * u.BYTES_PER_ELEMENT,
      u.subarray(f.offset, f.offset + f.count)
    ), f.count = -1);
  }
  function a(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function o(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const d = n.get(c);
    d && (r.deleteBuffer(d.buffer), n.delete(c));
  }
  function l(c, d) {
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
    const h = n.get(c);
    h === void 0 ? n.set(c, i(c, d)) : h.version < c.version && (s(h.buffer, c, d), h.version = c.version);
  }
  return {
    get: a,
    remove: o,
    update: l
  };
}
class Pa extends It {
  constructor(t = 1, e = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: e,
      widthSegments: n,
      heightSegments: i
    };
    const s = t / 2, a = e / 2, o = Math.floor(n), l = Math.floor(i), c = o + 1, d = l + 1, h = t / o, u = e / l, f = [], p = [], x = [], y = [];
    for (let g = 0; g < d; g++) {
      const m = g * u - a;
      for (let w = 0; w < c; w++) {
        const E = w * h - s;
        p.push(E, -m, 0), x.push(0, 0, 1), y.push(w / o), y.push(1 - g / l);
      }
    }
    for (let g = 0; g < l; g++)
      for (let m = 0; m < o; m++) {
        const w = m + c * g, E = m + c * (g + 1), b = m + 1 + c * (g + 1), _ = m + 1 + c * g;
        f.push(w, E, _), f.push(E, b, _);
      }
    this.setIndex(f), this.setAttribute("position", new kt(p, 3)), this.setAttribute("normal", new kt(x, 3)), this.setAttribute("uv", new kt(y, 2));
  }
}
var Jo = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, $o = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Qo = `#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`, Ko = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`, tl = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, el = "vec3 transformed = vec3( position );", nl = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, il = `vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
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
#endif`, rl = `#ifdef USE_BUMPMAP
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
#endif`, sl = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, al = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, ol = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, ll = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, cl = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, hl = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, ul = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, dl = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, fl = `#define PI 3.141592653589793
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
}`, pl = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, ml = `vec3 transformedNormal = objectNormal;
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
#endif`, gl = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, xl = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, yl = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, _l = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, vl = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Ml = `
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
}`, wl = `#ifdef USE_ENVMAP
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
#endif`, bl = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Sl = `#ifdef USE_ENVMAP
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
#endif`, Tl = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, El = `#ifdef USE_ENVMAP
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
#endif`, Al = `#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`, Ll = `#ifdef USE_FOG
	varying float fogDepth;
#endif`, Rl = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Cl = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Pl = `#ifdef USE_GRADIENTMAP
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
}`, Dl = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`, Fl = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Nl = `vec3 diffuse = vec3( 1.0 );
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
#endif`, Il = `uniform bool receiveShadow;
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
#endif`, Bl = `#if defined( USE_ENVMAP )
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
#endif`, zl = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Ul = `varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`, Gl = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Hl = `varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`, kl = `PhysicalMaterial material;
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
#endif`, Ol = `struct PhysicalMaterial {
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
}`, Vl = `
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
#endif`, Wl = `#if defined( RE_IndirectDiffuse )
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
#endif`, ql = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, Xl = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Yl = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, jl = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Zl = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Jl = `#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`, $l = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Ql = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Kl = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, tc = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, ec = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, nc = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`, ic = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`, rc = `#ifdef USE_MORPHTARGETS
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
#endif`, sc = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`, ac = `#ifdef OBJECTSPACE_NORMALMAP
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
#endif`, oc = `#ifdef USE_NORMALMAP
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
#endif`, lc = `#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, cc = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, hc = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, uc = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, dc = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, fc = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, pc = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, mc = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, gc = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, xc = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, yc = `#ifdef USE_SHADOWMAP
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
#endif`, _c = `#ifdef USE_SHADOWMAP
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
#endif`, vc = `#ifdef USE_SHADOWMAP
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
#endif`, Mc = `float getShadowMask() {
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
}`, wc = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, bc = `#ifdef USE_SKINNING
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
#endif`, Sc = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Tc = `#ifdef USE_SKINNING
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
#endif`, Ec = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Ac = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Lc = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Rc = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, Cc = `#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`, Pc = `#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`, Dc = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, Fc = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, Nc = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, Ic = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, Bc = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, zc = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, Uc = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`, Gc = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Hc = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, kc = `#include <envmap_common_pars_fragment>
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
}`, Oc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Vc = `#if DEPTH_PACKING == 3200
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
}`, Wc = `#include <common>
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
}`, qc = `#define DISTANCE
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
}`, Xc = `#define DISTANCE
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
}`, Yc = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, jc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Zc = `uniform vec3 diffuse;
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
}`, Jc = `uniform float scale;
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
}`, $c = `uniform vec3 diffuse;
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
}`, Qc = `#include <common>
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
}`, Kc = `uniform vec3 diffuse;
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
}`, th = `#define LAMBERT
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
}`, eh = `#define MATCAP
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
}`, nh = `#define MATCAP
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
}`, ih = `#define TOON
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
}`, rh = `#define TOON
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
}`, sh = `#define PHONG
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
}`, ah = `#define PHONG
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
}`, oh = `#define STANDARD
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
}`, lh = `#define STANDARD
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
}`, ch = `#define NORMAL
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
}`, hh = `#define NORMAL
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
}`, uh = `uniform vec3 diffuse;
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
}`, dh = `uniform float size;
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
}`, fh = `uniform vec3 color;
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
}`, ph = `#include <common>
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
}`, mh = `uniform vec3 diffuse;
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
}`, gh = `uniform float rotation;
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
const bt = {
  alphamap_fragment: Jo,
  alphamap_pars_fragment: $o,
  alphatest_fragment: Qo,
  aomap_fragment: Ko,
  aomap_pars_fragment: tl,
  begin_vertex: el,
  beginnormal_vertex: nl,
  bsdfs: il,
  bumpmap_pars_fragment: rl,
  clipping_planes_fragment: sl,
  clipping_planes_pars_fragment: al,
  clipping_planes_pars_vertex: ol,
  clipping_planes_vertex: ll,
  color_fragment: cl,
  color_pars_fragment: hl,
  color_pars_vertex: ul,
  color_vertex: dl,
  common: fl,
  cube_uv_reflection_fragment: pl,
  defaultnormal_vertex: ml,
  displacementmap_pars_vertex: gl,
  displacementmap_vertex: xl,
  emissivemap_fragment: yl,
  emissivemap_pars_fragment: _l,
  encodings_fragment: vl,
  encodings_pars_fragment: Ml,
  envmap_fragment: wl,
  envmap_common_pars_fragment: bl,
  envmap_pars_fragment: Sl,
  envmap_pars_vertex: Tl,
  envmap_physical_pars_fragment: Bl,
  envmap_vertex: El,
  fog_vertex: Al,
  fog_pars_vertex: Ll,
  fog_fragment: Rl,
  fog_pars_fragment: Cl,
  gradientmap_pars_fragment: Pl,
  lightmap_fragment: Dl,
  lightmap_pars_fragment: Fl,
  lights_lambert_vertex: Nl,
  lights_pars_begin: Il,
  lights_toon_fragment: zl,
  lights_toon_pars_fragment: Ul,
  lights_phong_fragment: Gl,
  lights_phong_pars_fragment: Hl,
  lights_physical_fragment: kl,
  lights_physical_pars_fragment: Ol,
  lights_fragment_begin: Vl,
  lights_fragment_maps: Wl,
  lights_fragment_end: ql,
  logdepthbuf_fragment: Xl,
  logdepthbuf_pars_fragment: Yl,
  logdepthbuf_pars_vertex: jl,
  logdepthbuf_vertex: Zl,
  map_fragment: Jl,
  map_pars_fragment: $l,
  map_particle_fragment: Ql,
  map_particle_pars_fragment: Kl,
  metalnessmap_fragment: tc,
  metalnessmap_pars_fragment: ec,
  morphnormal_vertex: nc,
  morphtarget_pars_vertex: ic,
  morphtarget_vertex: rc,
  normal_fragment_begin: sc,
  normal_fragment_maps: ac,
  normalmap_pars_fragment: oc,
  clearcoat_normal_fragment_begin: lc,
  clearcoat_normal_fragment_maps: cc,
  clearcoat_pars_fragment: hc,
  packing: uc,
  premultiplied_alpha_fragment: dc,
  project_vertex: fc,
  dithering_fragment: pc,
  dithering_pars_fragment: mc,
  roughnessmap_fragment: gc,
  roughnessmap_pars_fragment: xc,
  shadowmap_pars_fragment: yc,
  shadowmap_pars_vertex: _c,
  shadowmap_vertex: vc,
  shadowmask_pars_fragment: Mc,
  skinbase_vertex: wc,
  skinning_pars_vertex: bc,
  skinning_vertex: Sc,
  skinnormal_vertex: Tc,
  specularmap_fragment: Ec,
  specularmap_pars_fragment: Ac,
  tonemapping_fragment: Lc,
  tonemapping_pars_fragment: Rc,
  transmissionmap_fragment: Cc,
  transmissionmap_pars_fragment: Pc,
  uv_pars_fragment: Dc,
  uv_pars_vertex: Fc,
  uv_vertex: Nc,
  uv2_pars_fragment: Ic,
  uv2_pars_vertex: Bc,
  uv2_vertex: zc,
  worldpos_vertex: Uc,
  background_frag: Gc,
  background_vert: Hc,
  cube_frag: kc,
  cube_vert: Oc,
  depth_frag: Vc,
  depth_vert: Wc,
  distanceRGBA_frag: qc,
  distanceRGBA_vert: Xc,
  equirect_frag: Yc,
  equirect_vert: jc,
  linedashed_frag: Zc,
  linedashed_vert: Jc,
  meshbasic_frag: $c,
  meshbasic_vert: Qc,
  meshlambert_frag: Kc,
  meshlambert_vert: th,
  meshmatcap_frag: eh,
  meshmatcap_vert: nh,
  meshtoon_frag: ih,
  meshtoon_vert: rh,
  meshphong_frag: sh,
  meshphong_vert: ah,
  meshphysical_frag: oh,
  meshphysical_vert: lh,
  normal_frag: ch,
  normal_vert: hh,
  points_frag: uh,
  points_vert: dh,
  shadow_frag: fh,
  shadow_vert: ph,
  sprite_frag: mh,
  sprite_vert: gh
}, et = {
  common: {
    diffuse: { value: new at(15658734) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: new te() },
    uv2Transform: { value: new te() },
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
    normalScale: { value: new Z(1, 1) }
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
    fogColor: { value: new at(16777215) }
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
    diffuse: { value: new at(15658734) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    uvTransform: { value: new te() }
  },
  sprite: {
    diffuse: { value: new at(15658734) },
    opacity: { value: 1 },
    center: { value: new Z(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    uvTransform: { value: new te() }
  }
}, Ee = {
  basic: {
    uniforms: ie([
      et.common,
      et.specularmap,
      et.envmap,
      et.aomap,
      et.lightmap,
      et.fog
    ]),
    vertexShader: bt.meshbasic_vert,
    fragmentShader: bt.meshbasic_frag
  },
  lambert: {
    uniforms: ie([
      et.common,
      et.specularmap,
      et.envmap,
      et.aomap,
      et.lightmap,
      et.emissivemap,
      et.fog,
      et.lights,
      {
        emissive: { value: new at(0) }
      }
    ]),
    vertexShader: bt.meshlambert_vert,
    fragmentShader: bt.meshlambert_frag
  },
  phong: {
    uniforms: ie([
      et.common,
      et.specularmap,
      et.envmap,
      et.aomap,
      et.lightmap,
      et.emissivemap,
      et.bumpmap,
      et.normalmap,
      et.displacementmap,
      et.fog,
      et.lights,
      {
        emissive: { value: new at(0) },
        specular: { value: new at(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: bt.meshphong_vert,
    fragmentShader: bt.meshphong_frag
  },
  standard: {
    uniforms: ie([
      et.common,
      et.envmap,
      et.aomap,
      et.lightmap,
      et.emissivemap,
      et.bumpmap,
      et.normalmap,
      et.displacementmap,
      et.roughnessmap,
      et.metalnessmap,
      et.fog,
      et.lights,
      {
        emissive: { value: new at(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: bt.meshphysical_vert,
    fragmentShader: bt.meshphysical_frag
  },
  toon: {
    uniforms: ie([
      et.common,
      et.aomap,
      et.lightmap,
      et.emissivemap,
      et.bumpmap,
      et.normalmap,
      et.displacementmap,
      et.gradientmap,
      et.fog,
      et.lights,
      {
        emissive: { value: new at(0) }
      }
    ]),
    vertexShader: bt.meshtoon_vert,
    fragmentShader: bt.meshtoon_frag
  },
  matcap: {
    uniforms: ie([
      et.common,
      et.bumpmap,
      et.normalmap,
      et.displacementmap,
      et.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: bt.meshmatcap_vert,
    fragmentShader: bt.meshmatcap_frag
  },
  points: {
    uniforms: ie([
      et.points,
      et.fog
    ]),
    vertexShader: bt.points_vert,
    fragmentShader: bt.points_frag
  },
  dashed: {
    uniforms: ie([
      et.common,
      et.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: bt.linedashed_vert,
    fragmentShader: bt.linedashed_frag
  },
  depth: {
    uniforms: ie([
      et.common,
      et.displacementmap
    ]),
    vertexShader: bt.depth_vert,
    fragmentShader: bt.depth_frag
  },
  normal: {
    uniforms: ie([
      et.common,
      et.bumpmap,
      et.normalmap,
      et.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: bt.normal_vert,
    fragmentShader: bt.normal_frag
  },
  sprite: {
    uniforms: ie([
      et.sprite,
      et.fog
    ]),
    vertexShader: bt.sprite_vert,
    fragmentShader: bt.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: new te() },
      t2D: { value: null }
    },
    vertexShader: bt.background_vert,
    fragmentShader: bt.background_frag
  },
  /* -------------------------------------------------------------------------
  //	Cube map shader
   ------------------------------------------------------------------------- */
  cube: {
    uniforms: ie([
      et.envmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: bt.cube_vert,
    fragmentShader: bt.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: bt.equirect_vert,
    fragmentShader: bt.equirect_frag
  },
  distanceRGBA: {
    uniforms: ie([
      et.common,
      et.displacementmap,
      {
        referencePosition: { value: new S() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: bt.distanceRGBA_vert,
    fragmentShader: bt.distanceRGBA_frag
  },
  shadow: {
    uniforms: ie([
      et.lights,
      et.fog,
      {
        color: { value: new at(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: bt.shadow_vert,
    fragmentShader: bt.shadow_frag
  }
};
Ee.physical = {
  uniforms: ie([
    Ee.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new Z(1, 1) },
      clearcoatNormalMap: { value: null },
      sheen: { value: new at(0) },
      transmission: { value: 0 },
      transmissionMap: { value: null }
    }
  ]),
  vertexShader: bt.meshphysical_vert,
  fragmentShader: bt.meshphysical_frag
};
function xh(r, t, e, n, i) {
  const s = new at(0);
  let a = 0, o, l, c = null, d = 0, h = null;
  function u(p, x, y, g) {
    let m = x.isScene === !0 ? x.background : null;
    m && m.isTexture && (m = t.get(m));
    const w = r.xr, E = w.getSession && w.getSession();
    E && E.environmentBlendMode === "additive" && (m = null), m === null ? f(s, a) : m && m.isColor && (f(m, 1), g = !0), (r.autoClear || g) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil), m && (m.isCubeTexture || m.mapping === 306) ? (l === void 0 && (l = new ee(
      new Ge(1, 1, 1),
      new cn({
        name: "BackgroundCubeMaterial",
        uniforms: Cn(Ee.cube.uniforms),
        vertexShader: Ee.cube.vertexShader,
        fragmentShader: Ee.cube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(b, _, R) {
      this.matrixWorld.copyPosition(R.matrixWorld);
    }, Object.defineProperty(l.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), n.update(l)), l.material.uniforms.envMap.value = m, l.material.uniforms.flipEnvMap.value = m.isCubeTexture && m._needsFlipEnvMap ? -1 : 1, (c !== m || d !== m.version || h !== r.toneMapping) && (l.material.needsUpdate = !0, c = m, d = m.version, h = r.toneMapping), p.unshift(l, l.geometry, l.material, 0, 0, null)) : m && m.isTexture && (o === void 0 && (o = new ee(
      new Pa(2, 2),
      new cn({
        name: "BackgroundMaterial",
        uniforms: Cn(Ee.background.uniforms),
        vertexShader: Ee.background.vertexShader,
        fragmentShader: Ee.background.fragmentShader,
        side: 0,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), o.geometry.deleteAttribute("normal"), Object.defineProperty(o.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), n.update(o)), o.material.uniforms.t2D.value = m, m.matrixAutoUpdate === !0 && m.updateMatrix(), o.material.uniforms.uvTransform.value.copy(m.matrix), (c !== m || d !== m.version || h !== r.toneMapping) && (o.material.needsUpdate = !0, c = m, d = m.version, h = r.toneMapping), p.unshift(o, o.geometry, o.material, 0, 0, null));
  }
  function f(p, x) {
    e.buffers.color.setClear(p.r, p.g, p.b, x, i);
  }
  return {
    getClearColor: function() {
      return s;
    },
    setClearColor: function(p, x = 1) {
      s.set(p), a = x, f(s, a);
    },
    getClearAlpha: function() {
      return a;
    },
    setClearAlpha: function(p) {
      a = p, f(s, a);
    },
    render: u
  };
}
function yh(r, t, e, n) {
  const i = r.getParameter(34921), s = n.isWebGL2 ? null : t.get("OES_vertex_array_object"), a = n.isWebGL2 || s !== null, o = {}, l = x(null);
  let c = l;
  function d(A, P, D, C, k) {
    let Y = !1;
    if (a) {
      const X = p(C, D, P);
      c !== X && (c = X, u(c.object)), Y = y(C, k), Y && g(C, k);
    } else {
      const X = P.wireframe === !0;
      (c.geometry !== C.id || c.program !== D.id || c.wireframe !== X) && (c.geometry = C.id, c.program = D.id, c.wireframe = X, Y = !0);
    }
    A.isInstancedMesh === !0 && (Y = !0), k !== null && e.update(k, 34963), Y && (R(A, P, D, C), k !== null && r.bindBuffer(34963, e.get(k).buffer));
  }
  function h() {
    return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
  }
  function u(A) {
    return n.isWebGL2 ? r.bindVertexArray(A) : s.bindVertexArrayOES(A);
  }
  function f(A) {
    return n.isWebGL2 ? r.deleteVertexArray(A) : s.deleteVertexArrayOES(A);
  }
  function p(A, P, D) {
    const C = D.wireframe === !0;
    let k = o[A.id];
    k === void 0 && (k = {}, o[A.id] = k);
    let Y = k[P.id];
    Y === void 0 && (Y = {}, k[P.id] = Y);
    let X = Y[C];
    return X === void 0 && (X = x(h()), Y[C] = X), X;
  }
  function x(A) {
    const P = [], D = [], C = [];
    for (let k = 0; k < i; k++)
      P[k] = 0, D[k] = 0, C[k] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: P,
      enabledAttributes: D,
      attributeDivisors: C,
      object: A,
      attributes: {},
      index: null
    };
  }
  function y(A, P) {
    const D = c.attributes, C = A.attributes;
    let k = 0;
    for (const Y in C) {
      const X = D[Y], $ = C[Y];
      if (X === void 0 || X.attribute !== $ || X.data !== $.data) return !0;
      k++;
    }
    return c.attributesNum !== k || c.index !== P;
  }
  function g(A, P) {
    const D = {}, C = A.attributes;
    let k = 0;
    for (const Y in C) {
      const X = C[Y], $ = {};
      $.attribute = X, X.data && ($.data = X.data), D[Y] = $, k++;
    }
    c.attributes = D, c.attributesNum = k, c.index = P;
  }
  function m() {
    const A = c.newAttributes;
    for (let P = 0, D = A.length; P < D; P++)
      A[P] = 0;
  }
  function w(A) {
    E(A, 0);
  }
  function E(A, P) {
    const D = c.newAttributes, C = c.enabledAttributes, k = c.attributeDivisors;
    D[A] = 1, C[A] === 0 && (r.enableVertexAttribArray(A), C[A] = 1), k[A] !== P && ((n.isWebGL2 ? r : t.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](A, P), k[A] = P);
  }
  function b() {
    const A = c.newAttributes, P = c.enabledAttributes;
    for (let D = 0, C = P.length; D < C; D++)
      P[D] !== A[D] && (r.disableVertexAttribArray(D), P[D] = 0);
  }
  function _(A, P, D, C, k, Y) {
    n.isWebGL2 === !0 && (D === 5124 || D === 5125) ? r.vertexAttribIPointer(A, P, D, k, Y) : r.vertexAttribPointer(A, P, D, C, k, Y);
  }
  function R(A, P, D, C) {
    if (n.isWebGL2 === !1 && (A.isInstancedMesh || C.isInstancedBufferGeometry) && t.get("ANGLE_instanced_arrays") === null)
      return;
    m();
    const k = C.attributes, Y = D.getAttributes(), X = P.defaultAttributeValues;
    for (const $ in Y) {
      const K = Y[$];
      if (K >= 0) {
        const ct = k[$];
        if (ct !== void 0) {
          const ft = ct.normalized, G = ct.itemSize, Ct = e.get(ct);
          if (Ct === void 0) continue;
          const Tt = Ct.buffer, pt = Ct.type, dt = Ct.bytesPerElement;
          if (ct.isInterleavedBufferAttribute) {
            const St = ct.data, Mt = St.stride, wt = ct.offset;
            St && St.isInstancedInterleavedBuffer ? (E(K, St.meshPerAttribute), C._maxInstanceCount === void 0 && (C._maxInstanceCount = St.meshPerAttribute * St.count)) : w(K), r.bindBuffer(34962, Tt), _(K, G, pt, ft, Mt * dt, wt * dt);
          } else
            ct.isInstancedBufferAttribute ? (E(K, ct.meshPerAttribute), C._maxInstanceCount === void 0 && (C._maxInstanceCount = ct.meshPerAttribute * ct.count)) : w(K), r.bindBuffer(34962, Tt), _(K, G, pt, ft, 0, 0);
        } else if ($ === "instanceMatrix") {
          const ft = e.get(A.instanceMatrix);
          if (ft === void 0) continue;
          const G = ft.buffer, Ct = ft.type;
          E(K + 0, 1), E(K + 1, 1), E(K + 2, 1), E(K + 3, 1), r.bindBuffer(34962, G), r.vertexAttribPointer(K + 0, 4, Ct, !1, 64, 0), r.vertexAttribPointer(K + 1, 4, Ct, !1, 64, 16), r.vertexAttribPointer(K + 2, 4, Ct, !1, 64, 32), r.vertexAttribPointer(K + 3, 4, Ct, !1, 64, 48);
        } else if ($ === "instanceColor") {
          const ft = e.get(A.instanceColor);
          if (ft === void 0) continue;
          const G = ft.buffer, Ct = ft.type;
          E(K, 1), r.bindBuffer(34962, G), r.vertexAttribPointer(K, 3, Ct, !1, 12, 0);
        } else if (X !== void 0) {
          const ft = X[$];
          if (ft !== void 0)
            switch (ft.length) {
              case 2:
                r.vertexAttrib2fv(K, ft);
                break;
              case 3:
                r.vertexAttrib3fv(K, ft);
                break;
              case 4:
                r.vertexAttrib4fv(K, ft);
                break;
              default:
                r.vertexAttrib1fv(K, ft);
            }
        }
      }
    }
    b();
  }
  function I() {
    W();
    for (const A in o) {
      const P = o[A];
      for (const D in P) {
        const C = P[D];
        for (const k in C)
          f(C[k].object), delete C[k];
        delete P[D];
      }
      delete o[A];
    }
  }
  function B(A) {
    if (o[A.id] === void 0) return;
    const P = o[A.id];
    for (const D in P) {
      const C = P[D];
      for (const k in C)
        f(C[k].object), delete C[k];
      delete P[D];
    }
    delete o[A.id];
  }
  function U(A) {
    for (const P in o) {
      const D = o[P];
      if (D[A.id] === void 0) continue;
      const C = D[A.id];
      for (const k in C)
        f(C[k].object), delete C[k];
      delete D[A.id];
    }
  }
  function W() {
    F(), c !== l && (c = l, u(c.object));
  }
  function F() {
    l.geometry = null, l.program = null, l.wireframe = !1;
  }
  return {
    setup: d,
    reset: W,
    resetDefaultState: F,
    dispose: I,
    releaseStatesOfGeometry: B,
    releaseStatesOfProgram: U,
    initAttributes: m,
    enableAttribute: w,
    disableUnusedAttributes: b
  };
}
function _h(r, t, e, n) {
  const i = n.isWebGL2;
  let s;
  function a(c) {
    s = c;
  }
  function o(c, d) {
    r.drawArrays(s, c, d), e.update(d, s, 1);
  }
  function l(c, d, h) {
    if (h === 0) return;
    let u, f;
    if (i)
      u = r, f = "drawArraysInstanced";
    else if (u = t.get("ANGLE_instanced_arrays"), f = "drawArraysInstancedANGLE", u === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    u[f](s, c, d, h), e.update(d, s, h);
  }
  this.setMode = a, this.render = o, this.renderInstances = l;
}
function vh(r, t, e) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (t.has("EXT_texture_filter_anisotropic") === !0) {
      const _ = t.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(_) {
    if (_ === "highp") {
      if (r.getShaderPrecisionFormat(35633, 36338).precision > 0 && r.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
      _ = "mediump";
    }
    return _ === "mediump" && r.getShaderPrecisionFormat(35633, 36337).precision > 0 && r.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  const a = typeof WebGL2RenderingContext < "u" && r instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && r instanceof WebGL2ComputeRenderingContext;
  let o = e.precision !== void 0 ? e.precision : "highp";
  const l = s(o);
  l !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", l, "instead."), o = l);
  const c = e.logarithmicDepthBuffer === !0, d = r.getParameter(34930), h = r.getParameter(35660), u = r.getParameter(3379), f = r.getParameter(34076), p = r.getParameter(34921), x = r.getParameter(36347), y = r.getParameter(36348), g = r.getParameter(36349), m = h > 0, w = a || t.has("OES_texture_float"), E = m && w, b = a ? r.getParameter(36183) : 0;
  return {
    isWebGL2: a,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: o,
    logarithmicDepthBuffer: c,
    maxTextures: d,
    maxVertexTextures: h,
    maxTextureSize: u,
    maxCubemapSize: f,
    maxAttributes: p,
    maxVertexUniforms: x,
    maxVaryings: y,
    maxFragmentUniforms: g,
    vertexTextures: m,
    floatFragmentTextures: w,
    floatVertexTextures: E,
    maxSamples: b
  };
}
function Mh(r) {
  const t = this;
  let e = null, n = 0, i = !1, s = !1;
  const a = new Te(), o = new te(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, u, f) {
    const p = h.length !== 0 || u || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = u, e = d(h, f, 0), n = h.length, p;
  }, this.beginShadows = function() {
    s = !0, d(null);
  }, this.endShadows = function() {
    s = !1, c();
  }, this.setState = function(h, u, f) {
    const p = h.clippingPlanes, x = h.clipIntersection, y = h.clipShadows, g = r.get(h);
    if (!i || p === null || p.length === 0 || s && !y)
      s ? d(null) : c();
    else {
      const m = s ? 0 : n, w = m * 4;
      let E = g.clippingState || null;
      l.value = E, E = d(p, u, w, f);
      for (let b = 0; b !== w; ++b)
        E[b] = e[b];
      g.clippingState = E, this.numIntersection = x ? this.numPlanes : 0, this.numPlanes += m;
    }
  };
  function c() {
    l.value !== e && (l.value = e, l.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function d(h, u, f, p) {
    const x = h !== null ? h.length : 0;
    let y = null;
    if (x !== 0) {
      if (y = l.value, p !== !0 || y === null) {
        const g = f + x * 4, m = u.matrixWorldInverse;
        o.getNormalMatrix(m), (y === null || y.length < g) && (y = new Float32Array(g));
        for (let w = 0, E = f; w !== x; ++w, E += 4)
          a.copy(h[w]).applyMatrix4(m, o), a.normal.toArray(y, E), y[E + 3] = a.constant;
      }
      l.value = y, l.needsUpdate = !0;
    }
    return t.numPlanes = x, t.numIntersection = 0, y;
  }
}
function wh(r) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(a, o) {
    return o === 303 ? a.mapping = 301 : o === 304 && (a.mapping = 302), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === 303 || o === 304)
        if (t.has(a)) {
          const l = t.get(a).texture;
          return e(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = r.getRenderTarget(), d = new La(l.height / 2);
            return d.fromEquirectangularTexture(r, a), t.set(a, d), r.setRenderTarget(c), a.addEventListener("dispose", i), e(d.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const l = t.get(o);
    l !== void 0 && (t.delete(o), l.dispose());
  }
  function s() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
function bh(r) {
  const t = {};
  function e(n) {
    if (t[n] !== void 0)
      return t[n];
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
    return t[n] = i, i;
  }
  return {
    has: function(n) {
      return e(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? e("EXT_color_buffer_float") : (e("WEBGL_depth_texture"), e("OES_texture_float"), e("OES_texture_half_float"), e("OES_texture_half_float_linear"), e("OES_standard_derivatives"), e("OES_element_index_uint"), e("OES_vertex_array_object"), e("ANGLE_instanced_arrays")), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float");
    },
    get: function(n) {
      const i = e(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function Sh(r, t, e, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function a(h) {
    const u = h.target;
    u.index !== null && t.remove(u.index);
    for (const p in u.attributes)
      t.remove(u.attributes[p]);
    u.removeEventListener("dispose", a), delete i[u.id];
    const f = s.get(u);
    f && (t.remove(f), s.delete(u)), n.releaseStatesOfGeometry(u), u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount, e.memory.geometries--;
  }
  function o(h, u) {
    return i[u.id] === !0 || (u.addEventListener("dispose", a), i[u.id] = !0, e.memory.geometries++), u;
  }
  function l(h) {
    const u = h.attributes;
    for (const p in u)
      t.update(u[p], 34962);
    const f = h.morphAttributes;
    for (const p in f) {
      const x = f[p];
      for (let y = 0, g = x.length; y < g; y++)
        t.update(x[y], 34962);
    }
  }
  function c(h) {
    const u = [], f = h.index, p = h.attributes.position;
    let x = 0;
    if (f !== null) {
      const m = f.array;
      x = f.version;
      for (let w = 0, E = m.length; w < E; w += 3) {
        const b = m[w + 0], _ = m[w + 1], R = m[w + 2];
        u.push(b, _, _, R, R, b);
      }
    } else {
      const m = p.array;
      x = p.version;
      for (let w = 0, E = m.length / 3 - 1; w < E; w += 3) {
        const b = w + 0, _ = w + 1, R = w + 2;
        u.push(b, _, _, R, R, b);
      }
    }
    const y = new (Aa(u) > 65535 ? Ea : Ta)(u, 1);
    y.version = x;
    const g = s.get(h);
    g && t.remove(g), s.set(h, y);
  }
  function d(h) {
    const u = s.get(h);
    if (u) {
      const f = h.index;
      f !== null && u.version < f.version && c(h);
    } else
      c(h);
    return s.get(h);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: d
  };
}
function Th(r, t, e, n) {
  const i = n.isWebGL2;
  let s;
  function a(u) {
    s = u;
  }
  let o, l;
  function c(u) {
    o = u.type, l = u.bytesPerElement;
  }
  function d(u, f) {
    r.drawElements(s, f, o, u * l), e.update(f, s, 1);
  }
  function h(u, f, p) {
    if (p === 0) return;
    let x, y;
    if (i)
      x = r, y = "drawElementsInstanced";
    else if (x = t.get("ANGLE_instanced_arrays"), y = "drawElementsInstancedANGLE", x === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    x[y](s, f, o, u * l, p), e.update(f, s, p);
  }
  this.setMode = a, this.setIndex = c, this.render = d, this.renderInstances = h;
}
function Eh(r) {
  const t = {
    geometries: 0,
    textures: 0
  }, e = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, a, o) {
    switch (e.calls++, a) {
      case 4:
        e.triangles += o * (s / 3);
        break;
      case 1:
        e.lines += o * (s / 2);
        break;
      case 3:
        e.lines += o * (s - 1);
        break;
      case 2:
        e.lines += o * s;
        break;
      case 0:
        e.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
  }
  return {
    memory: t,
    render: e,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function Ah(r, t) {
  return r[0] - t[0];
}
function Lh(r, t) {
  return Math.abs(t[1]) - Math.abs(r[1]);
}
function Rh(r) {
  const t = {}, e = new Float32Array(8), n = [];
  for (let s = 0; s < 8; s++)
    n[s] = [s, 0];
  function i(s, a, o, l) {
    const c = s.morphTargetInfluences, d = c === void 0 ? 0 : c.length;
    let h = t[a.id];
    if (h === void 0) {
      h = [];
      for (let y = 0; y < d; y++)
        h[y] = [y, 0];
      t[a.id] = h;
    }
    for (let y = 0; y < d; y++) {
      const g = h[y];
      g[0] = y, g[1] = c[y];
    }
    h.sort(Lh);
    for (let y = 0; y < 8; y++)
      y < d && h[y][1] ? (n[y][0] = h[y][0], n[y][1] = h[y][1]) : (n[y][0] = Number.MAX_SAFE_INTEGER, n[y][1] = 0);
    n.sort(Ah);
    const u = o.morphTargets && a.morphAttributes.position, f = o.morphNormals && a.morphAttributes.normal;
    let p = 0;
    for (let y = 0; y < 8; y++) {
      const g = n[y], m = g[0], w = g[1];
      m !== Number.MAX_SAFE_INTEGER && w ? (u && a.getAttribute("morphTarget" + y) !== u[m] && a.setAttribute("morphTarget" + y, u[m]), f && a.getAttribute("morphNormal" + y) !== f[m] && a.setAttribute("morphNormal" + y, f[m]), e[y] = w, p += w) : (u && a.hasAttribute("morphTarget" + y) === !0 && a.deleteAttribute("morphTarget" + y), f && a.hasAttribute("morphNormal" + y) === !0 && a.deleteAttribute("morphNormal" + y), e[y] = 0);
    }
    const x = a.morphTargetsRelative ? 1 : 1 - p;
    l.getUniforms().setValue(r, "morphTargetBaseInfluence", x), l.getUniforms().setValue(r, "morphTargetInfluences", e);
  }
  return {
    update: i
  };
}
function Ch(r, t, e, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, d = l.geometry, h = t.get(l, d);
    return i.get(h) !== c && (t.update(h), i.set(h, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), e.update(l.instanceMatrix, 34962), l.instanceColor !== null && e.update(l.instanceColor, 34962)), h;
  }
  function a() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), e.remove(c.instanceMatrix), c.instanceColor !== null && e.remove(c.instanceColor);
  }
  return {
    update: s,
    dispose: a
  };
}
class Da extends ne {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null), this.image = { data: t, width: e, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0;
  }
}
Da.prototype.isDataTexture2DArray = !0;
class Fa extends ne {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null), this.image = { data: t, width: e, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0;
  }
}
Fa.prototype.isDataTexture3D = !0;
const Na = new ne(), Ph = new Da(), Dh = new Fa(), Ia = new Vi(), As = [], Ls = [], Rs = new Float32Array(16), Cs = new Float32Array(9), Ps = new Float32Array(4);
function zn(r, t, e) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = t * e;
  let s = As[i];
  if (s === void 0 && (s = new Float32Array(i), As[i] = s), t !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== t; ++a)
      o += e, r[a].toArray(s, o);
  }
  return s;
}
function ce(r, t) {
  if (r.length !== t.length) return !1;
  for (let e = 0, n = r.length; e < n; e++)
    if (r[e] !== t[e]) return !1;
  return !0;
}
function ae(r, t) {
  for (let e = 0, n = t.length; e < n; e++)
    r[e] = t[e];
}
function Ba(r, t) {
  let e = Ls[t];
  e === void 0 && (e = new Int32Array(t), Ls[t] = e);
  for (let n = 0; n !== t; ++n)
    e[n] = r.allocateTextureUnit();
  return e;
}
function Fh(r, t) {
  const e = this.cache;
  e[0] !== t && (r.uniform1f(this.addr, t), e[0] = t);
}
function Nh(r, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (r.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (ce(e, t)) return;
    r.uniform2fv(this.addr, t), ae(e, t);
  }
}
function Ih(r, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (r.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0)
    (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (r.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (ce(e, t)) return;
    r.uniform3fv(this.addr, t), ae(e, t);
  }
}
function Bh(r, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (r.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (ce(e, t)) return;
    r.uniform4fv(this.addr, t), ae(e, t);
  }
}
function zh(r, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ce(e, t)) return;
    r.uniformMatrix2fv(this.addr, !1, t), ae(e, t);
  } else {
    if (ce(e, n)) return;
    Ps.set(n), r.uniformMatrix2fv(this.addr, !1, Ps), ae(e, n);
  }
}
function Uh(r, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ce(e, t)) return;
    r.uniformMatrix3fv(this.addr, !1, t), ae(e, t);
  } else {
    if (ce(e, n)) return;
    Cs.set(n), r.uniformMatrix3fv(this.addr, !1, Cs), ae(e, n);
  }
}
function Gh(r, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ce(e, t)) return;
    r.uniformMatrix4fv(this.addr, !1, t), ae(e, t);
  } else {
    if (ce(e, n)) return;
    Rs.set(n), r.uniformMatrix4fv(this.addr, !1, Rs), ae(e, n);
  }
}
function Hh(r, t) {
  const e = this.cache;
  e[0] !== t && (r.uniform1i(this.addr, t), e[0] = t);
}
function kh(r, t) {
  const e = this.cache;
  ce(e, t) || (r.uniform2iv(this.addr, t), ae(e, t));
}
function Oh(r, t) {
  const e = this.cache;
  ce(e, t) || (r.uniform3iv(this.addr, t), ae(e, t));
}
function Vh(r, t) {
  const e = this.cache;
  ce(e, t) || (r.uniform4iv(this.addr, t), ae(e, t));
}
function Wh(r, t) {
  const e = this.cache;
  e[0] !== t && (r.uniform1ui(this.addr, t), e[0] = t);
}
function qh(r, t) {
  const e = this.cache;
  ce(e, t) || (r.uniform2uiv(this.addr, t), ae(e, t));
}
function Xh(r, t) {
  const e = this.cache;
  ce(e, t) || (r.uniform3uiv(this.addr, t), ae(e, t));
}
function Yh(r, t) {
  const e = this.cache;
  ce(e, t) || (r.uniform4uiv(this.addr, t), ae(e, t));
}
function jh(r, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), e.safeSetTexture2D(t || Na, i);
}
function Zh(r, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), e.setTexture3D(t || Dh, i);
}
function Jh(r, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), e.safeSetTextureCube(t || Ia, i);
}
function $h(r, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), e.setTexture2DArray(t || Ph, i);
}
function Qh(r) {
  switch (r) {
    case 5126:
      return Fh;
    case 35664:
      return Nh;
    case 35665:
      return Ih;
    case 35666:
      return Bh;
    case 35674:
      return zh;
    case 35675:
      return Uh;
    case 35676:
      return Gh;
    case 5124:
    case 35670:
      return Hh;
    case 35667:
    case 35671:
      return kh;
    case 35668:
    case 35672:
      return Oh;
    case 35669:
    case 35673:
      return Vh;
    case 5125:
      return Wh;
    case 36294:
      return qh;
    case 36295:
      return Xh;
    case 36296:
      return Yh;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return jh;
    case 35679:
    case 36299:
    case 36307:
      return Zh;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Jh;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return $h;
  }
}
function Kh(r, t) {
  r.uniform1fv(this.addr, t);
}
function tu(r, t) {
  const e = zn(t, this.size, 2);
  r.uniform2fv(this.addr, e);
}
function eu(r, t) {
  const e = zn(t, this.size, 3);
  r.uniform3fv(this.addr, e);
}
function nu(r, t) {
  const e = zn(t, this.size, 4);
  r.uniform4fv(this.addr, e);
}
function iu(r, t) {
  const e = zn(t, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, e);
}
function ru(r, t) {
  const e = zn(t, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, e);
}
function su(r, t) {
  const e = zn(t, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, e);
}
function au(r, t) {
  r.uniform1iv(this.addr, t);
}
function ou(r, t) {
  r.uniform2iv(this.addr, t);
}
function lu(r, t) {
  r.uniform3iv(this.addr, t);
}
function cu(r, t) {
  r.uniform4iv(this.addr, t);
}
function hu(r, t) {
  r.uniform1uiv(this.addr, t);
}
function uu(r, t) {
  r.uniform2uiv(this.addr, t);
}
function du(r, t) {
  r.uniform3uiv(this.addr, t);
}
function fu(r, t) {
  r.uniform4uiv(this.addr, t);
}
function pu(r, t, e) {
  const n = t.length, i = Ba(e, n);
  r.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s)
    e.safeSetTexture2D(t[s] || Na, i[s]);
}
function mu(r, t, e) {
  const n = t.length, i = Ba(e, n);
  r.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s)
    e.safeSetTextureCube(t[s] || Ia, i[s]);
}
function gu(r) {
  switch (r) {
    case 5126:
      return Kh;
    case 35664:
      return tu;
    case 35665:
      return eu;
    case 35666:
      return nu;
    case 35674:
      return iu;
    case 35675:
      return ru;
    case 35676:
      return su;
    case 5124:
    case 35670:
      return au;
    case 35667:
    case 35671:
      return ou;
    case 35668:
    case 35672:
      return lu;
    case 35669:
    case 35673:
      return cu;
    case 5125:
      return hu;
    case 36294:
      return uu;
    case 36295:
      return du;
    case 36296:
      return fu;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return pu;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return mu;
  }
}
function xu(r, t, e) {
  this.id = r, this.addr = e, this.cache = [], this.setValue = Qh(t.type);
}
function za(r, t, e) {
  this.id = r, this.addr = e, this.cache = [], this.size = t.size, this.setValue = gu(t.type);
}
za.prototype.updateCache = function(r) {
  const t = this.cache;
  r instanceof Float32Array && t.length !== r.length && (this.cache = new Float32Array(r.length)), ae(t, r);
};
function Ua(r) {
  this.id = r, this.seq = [], this.map = {};
}
Ua.prototype.setValue = function(r, t, e) {
  const n = this.seq;
  for (let i = 0, s = n.length; i !== s; ++i) {
    const a = n[i];
    a.setValue(r, t[a.id], e);
  }
};
const Sr = /(\w+)(\])?(\[|\.)?/g;
function Ds(r, t) {
  r.seq.push(t), r.map[t.id] = t;
}
function yu(r, t, e) {
  const n = r.name, i = n.length;
  for (Sr.lastIndex = 0; ; ) {
    const s = Sr.exec(n), a = Sr.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === i) {
      Ds(e, c === void 0 ? new xu(o, r, t) : new za(o, r, t));
      break;
    } else {
      let h = e.map[o];
      h === void 0 && (h = new Ua(o), Ds(e, h)), e = h;
    }
  }
}
function Ze(r, t) {
  this.seq = [], this.map = {};
  const e = r.getProgramParameter(t, 35718);
  for (let n = 0; n < e; ++n) {
    const i = r.getActiveUniform(t, n), s = r.getUniformLocation(t, i.name);
    yu(i, s, this);
  }
}
Ze.prototype.setValue = function(r, t, e, n) {
  const i = this.map[t];
  i !== void 0 && i.setValue(r, e, n);
};
Ze.prototype.setOptional = function(r, t, e) {
  const n = t[e];
  n !== void 0 && this.setValue(r, e, n);
};
Ze.upload = function(r, t, e, n) {
  for (let i = 0, s = t.length; i !== s; ++i) {
    const a = t[i], o = e[a.id];
    o.needsUpdate !== !1 && a.setValue(r, o.value, n);
  }
};
Ze.seqWithValue = function(r, t) {
  const e = [];
  for (let n = 0, i = r.length; n !== i; ++n) {
    const s = r[n];
    s.id in t && e.push(s);
  }
  return e;
};
function Fs(r, t, e) {
  const n = r.createShader(t);
  return r.shaderSource(n, e), r.compileShader(n), n;
}
let _u = 0;
function vu(r) {
  const t = r.split(`
`);
  for (let e = 0; e < t.length; e++)
    t[e] = e + 1 + ": " + t[e];
  return t.join(`
`);
}
function Ga(r) {
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
function Ns(r, t, e) {
  const n = r.getShaderParameter(t, 35713), i = r.getShaderInfoLog(t).trim();
  if (n && i === "") return "";
  const s = r.getShaderSource(t);
  return "THREE.WebGLShader: gl.getShaderInfoLog() " + e + `
` + i + vu(s);
}
function qn(r, t) {
  const e = Ga(t);
  return "vec4 " + r + "( vec4 value ) { return " + e[0] + "ToLinear" + e[1] + "; }";
}
function Mu(r, t) {
  const e = Ga(t);
  return "vec4 " + r + "( vec4 value ) { return LinearTo" + e[0] + e[1] + "; }";
}
function wu(r, t) {
  let e;
  switch (t) {
    case 1:
      e = "Linear";
      break;
    case 2:
      e = "Reinhard";
      break;
    case 3:
      e = "OptimizedCineon";
      break;
    case 4:
      e = "ACESFilmic";
      break;
    case 5:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + r + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
function bu(r) {
  return [
    r.extensionDerivatives || r.envMapCubeUV || r.bumpMap || r.tangentSpaceNormalMap || r.clearcoatNormalMap || r.flatShading || r.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (r.extensionShaderTextureLOD || r.envMap) && r.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(ti).join(`
`);
}
function Su(r) {
  const t = [];
  for (const e in r) {
    const n = r[e];
    n !== !1 && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function Tu(r, t) {
  const e = {}, n = r.getProgramParameter(t, 35721);
  for (let i = 0; i < n; i++) {
    const a = r.getActiveAttrib(t, i).name;
    e[a] = r.getAttribLocation(t, a);
  }
  return e;
}
function ti(r) {
  return r !== "";
}
function Is(r, t) {
  return r.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Bs(r, t) {
  return r.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const Eu = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ur(r) {
  return r.replace(Eu, Au);
}
function Au(r, t) {
  const e = bt[t];
  if (e === void 0)
    throw new Error("Can not resolve #include <" + t + ">");
  return Ur(e);
}
const Lu = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, Ru = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function zs(r) {
  return r.replace(Ru, Ha).replace(Lu, Cu);
}
function Cu(r, t, e, n) {
  return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Ha(r, t, e, n);
}
function Ha(r, t, e, n) {
  let i = "";
  for (let s = parseInt(t); s < parseInt(e); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function Us(r) {
  let t = "precision " + r.precision + ` float;
precision ` + r.precision + " int;";
  return r.precision === "highp" ? t += `
#define HIGH_PRECISION` : r.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
function Pu(r) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === 1 ? t = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === 2 ? t = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === 3 && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function Du(r) {
  let t = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case 301:
      case 302:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case 306:
      case 307:
        t = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return t;
}
function Fu(r) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case 302:
      case 307:
        t = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return t;
}
function Nu(r) {
  let t = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case 0:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case 1:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case 2:
        t = "ENVMAP_BLENDING_ADD";
        break;
    }
  return t;
}
function Iu(r, t, e, n) {
  const i = r.getContext(), s = e.defines;
  let a = e.vertexShader, o = e.fragmentShader;
  const l = Pu(e), c = Du(e), d = Fu(e), h = Nu(e), u = r.gammaFactor > 0 ? r.gammaFactor : 1, f = e.isWebGL2 ? "" : bu(e), p = Su(s), x = i.createProgram();
  let y, g, m = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (y = [
    p
  ].filter(ti).join(`
`), y.length > 0 && (y += `
`), g = [
    f,
    p
  ].filter(ti).join(`
`), g.length > 0 && (g += `
`)) : (y = [
    Us(e),
    "#define SHADER_NAME " + e.shaderName,
    p,
    e.instancing ? "#define USE_INSTANCING" : "",
    e.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    e.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
    "#define GAMMA_FACTOR " + u,
    "#define MAX_BONES " + e.maxBones,
    e.useFog && e.fog ? "#define USE_FOG" : "",
    e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
    e.map ? "#define USE_MAP" : "",
    e.envMap ? "#define USE_ENVMAP" : "",
    e.envMap ? "#define " + d : "",
    e.lightMap ? "#define USE_LIGHTMAP" : "",
    e.aoMap ? "#define USE_AOMAP" : "",
    e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    e.bumpMap ? "#define USE_BUMPMAP" : "",
    e.normalMap ? "#define USE_NORMALMAP" : "",
    e.normalMap && e.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    e.normalMap && e.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    e.displacementMap && e.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
    e.specularMap ? "#define USE_SPECULARMAP" : "",
    e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    e.metalnessMap ? "#define USE_METALNESSMAP" : "",
    e.alphaMap ? "#define USE_ALPHAMAP" : "",
    e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    e.vertexTangents ? "#define USE_TANGENT" : "",
    e.vertexColors ? "#define USE_COLOR" : "",
    e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    e.vertexUvs ? "#define USE_UV" : "",
    e.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    e.flatShading ? "#define FLAT_SHADED" : "",
    e.skinning ? "#define USE_SKINNING" : "",
    e.useVertexTexture ? "#define BONE_TEXTURE" : "",
    e.morphTargets ? "#define USE_MORPHTARGETS" : "",
    e.morphNormals && e.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    e.doubleSided ? "#define DOUBLE_SIDED" : "",
    e.flipSided ? "#define FLIP_SIDED" : "",
    e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    e.shadowMapEnabled ? "#define " + l : "",
    e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    e.logarithmicDepthBuffer && e.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
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
  ].filter(ti).join(`
`), g = [
    f,
    Us(e),
    "#define SHADER_NAME " + e.shaderName,
    p,
    e.alphaTest ? "#define ALPHATEST " + e.alphaTest + (e.alphaTest % 1 ? "" : ".0") : "",
    // add '.0' if integer
    "#define GAMMA_FACTOR " + u,
    e.useFog && e.fog ? "#define USE_FOG" : "",
    e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
    e.map ? "#define USE_MAP" : "",
    e.matcap ? "#define USE_MATCAP" : "",
    e.envMap ? "#define USE_ENVMAP" : "",
    e.envMap ? "#define " + c : "",
    e.envMap ? "#define " + d : "",
    e.envMap ? "#define " + h : "",
    e.lightMap ? "#define USE_LIGHTMAP" : "",
    e.aoMap ? "#define USE_AOMAP" : "",
    e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    e.bumpMap ? "#define USE_BUMPMAP" : "",
    e.normalMap ? "#define USE_NORMALMAP" : "",
    e.normalMap && e.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    e.normalMap && e.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    e.specularMap ? "#define USE_SPECULARMAP" : "",
    e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    e.metalnessMap ? "#define USE_METALNESSMAP" : "",
    e.alphaMap ? "#define USE_ALPHAMAP" : "",
    e.sheen ? "#define USE_SHEEN" : "",
    e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    e.vertexTangents ? "#define USE_TANGENT" : "",
    e.vertexColors || e.instancingColor ? "#define USE_COLOR" : "",
    e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    e.vertexUvs ? "#define USE_UV" : "",
    e.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    e.gradientMap ? "#define USE_GRADIENTMAP" : "",
    e.flatShading ? "#define FLAT_SHADED" : "",
    e.doubleSided ? "#define DOUBLE_SIDED" : "",
    e.flipSided ? "#define FLIP_SIDED" : "",
    e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    e.shadowMapEnabled ? "#define " + l : "",
    e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    e.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
    e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    e.logarithmicDepthBuffer && e.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    (e.extensionShaderTextureLOD || e.envMap) && e.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    e.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
    e.toneMapping !== 0 ? bt.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    e.toneMapping !== 0 ? wu("toneMapping", e.toneMapping) : "",
    e.dithering ? "#define DITHERING" : "",
    bt.encodings_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    e.map ? qn("mapTexelToLinear", e.mapEncoding) : "",
    e.matcap ? qn("matcapTexelToLinear", e.matcapEncoding) : "",
    e.envMap ? qn("envMapTexelToLinear", e.envMapEncoding) : "",
    e.emissiveMap ? qn("emissiveMapTexelToLinear", e.emissiveMapEncoding) : "",
    e.lightMap ? qn("lightMapTexelToLinear", e.lightMapEncoding) : "",
    Mu("linearToOutputTexel", e.outputEncoding),
    e.depthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",
    `
`
  ].filter(ti).join(`
`)), a = Ur(a), a = Is(a, e), a = Bs(a, e), o = Ur(o), o = Is(o, e), o = Bs(o, e), a = zs(a), o = zs(o), e.isWebGL2 && e.isRawShaderMaterial !== !0 && (m = `#version 300 es
`, y = [
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + y, g = [
    "#define varying in",
    e.glslVersion === ps ? "" : "out highp vec4 pc_fragColor;",
    e.glslVersion === ps ? "" : "#define gl_FragColor pc_fragColor",
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
  const w = m + y + a, E = m + g + o, b = Fs(i, 35633, w), _ = Fs(i, 35632, E);
  if (i.attachShader(x, b), i.attachShader(x, _), e.index0AttributeName !== void 0 ? i.bindAttribLocation(x, 0, e.index0AttributeName) : e.morphTargets === !0 && i.bindAttribLocation(x, 0, "position"), i.linkProgram(x), r.debug.checkShaderErrors) {
    const B = i.getProgramInfoLog(x).trim(), U = i.getShaderInfoLog(b).trim(), W = i.getShaderInfoLog(_).trim();
    let F = !0, A = !0;
    if (i.getProgramParameter(x, 35714) === !1) {
      F = !1;
      const P = Ns(i, b, "vertex"), D = Ns(i, _, "fragment");
      console.error("THREE.WebGLProgram: shader error: ", i.getError(), "35715", i.getProgramParameter(x, 35715), "gl.getProgramInfoLog", B, P, D);
    } else B !== "" ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", B) : (U === "" || W === "") && (A = !1);
    A && (this.diagnostics = {
      runnable: F,
      programLog: B,
      vertexShader: {
        log: U,
        prefix: y
      },
      fragmentShader: {
        log: W,
        prefix: g
      }
    });
  }
  i.deleteShader(b), i.deleteShader(_);
  let R;
  this.getUniforms = function() {
    return R === void 0 && (R = new Ze(i, x)), R;
  };
  let I;
  return this.getAttributes = function() {
    return I === void 0 && (I = Tu(i, x)), I;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(x), this.program = void 0;
  }, this.name = e.shaderName, this.id = _u++, this.cacheKey = t, this.usedTimes = 1, this.program = x, this.vertexShader = b, this.fragmentShader = _, this;
}
function Bu(r, t, e, n, i, s) {
  const a = [], o = n.isWebGL2, l = n.logarithmicDepthBuffer, c = n.floatVertexTextures, d = n.maxVertexUniforms, h = n.vertexTextures;
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
  }, p = [
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
  function x(_) {
    const I = _.skeleton.bones;
    if (c)
      return 1024;
    {
      const U = Math.floor((d - 20) / 4), W = Math.min(U, I.length);
      return W < I.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + I.length + " bones. This GPU supports " + W + "."), 0) : W;
    }
  }
  function y(_) {
    let R;
    return _ && _.isTexture ? R = _.encoding : _ && _.isWebGLRenderTarget ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), R = _.texture.encoding) : R = 3e3, R;
  }
  function g(_, R, I, B, U) {
    const W = B.fog, F = _.isMeshStandardMaterial ? B.environment : null, A = t.get(_.envMap || F), P = f[_.type], D = U.isSkinnedMesh ? x(U) : 0;
    _.precision !== null && (u = n.getMaxPrecision(_.precision), u !== _.precision && console.warn("THREE.WebGLProgram.getParameters:", _.precision, "not supported, using", u, "instead."));
    let C, k;
    if (P) {
      const $ = Ee[P];
      C = $.vertexShader, k = $.fragmentShader;
    } else
      C = _.vertexShader, k = _.fragmentShader;
    const Y = r.getRenderTarget();
    return {
      isWebGL2: o,
      shaderID: P,
      shaderName: _.type,
      vertexShader: C,
      fragmentShader: k,
      defines: _.defines,
      isRawShaderMaterial: _.isRawShaderMaterial === !0,
      glslVersion: _.glslVersion,
      precision: u,
      instancing: U.isInstancedMesh === !0,
      instancingColor: U.isInstancedMesh === !0 && U.instanceColor !== null,
      supportsVertexTextures: h,
      outputEncoding: Y !== null ? y(Y.texture) : r.outputEncoding,
      map: !!_.map,
      mapEncoding: y(_.map),
      matcap: !!_.matcap,
      matcapEncoding: y(_.matcap),
      envMap: !!A,
      envMapMode: A && A.mapping,
      envMapEncoding: y(A),
      envMapCubeUV: !!A && (A.mapping === 306 || A.mapping === 307),
      lightMap: !!_.lightMap,
      lightMapEncoding: y(_.lightMap),
      aoMap: !!_.aoMap,
      emissiveMap: !!_.emissiveMap,
      emissiveMapEncoding: y(_.emissiveMap),
      bumpMap: !!_.bumpMap,
      normalMap: !!_.normalMap,
      objectSpaceNormalMap: _.normalMapType === 1,
      tangentSpaceNormalMap: _.normalMapType === 0,
      clearcoatMap: !!_.clearcoatMap,
      clearcoatRoughnessMap: !!_.clearcoatRoughnessMap,
      clearcoatNormalMap: !!_.clearcoatNormalMap,
      displacementMap: !!_.displacementMap,
      roughnessMap: !!_.roughnessMap,
      metalnessMap: !!_.metalnessMap,
      specularMap: !!_.specularMap,
      alphaMap: !!_.alphaMap,
      gradientMap: !!_.gradientMap,
      sheen: !!_.sheen,
      transmissionMap: !!_.transmissionMap,
      combine: _.combine,
      vertexTangents: _.normalMap && _.vertexTangents,
      vertexColors: _.vertexColors,
      vertexAlphas: _.vertexColors === !0 && U.geometry && U.geometry.attributes.color && U.geometry.attributes.color.itemSize === 4,
      vertexUvs: !!_.map || !!_.bumpMap || !!_.normalMap || !!_.specularMap || !!_.alphaMap || !!_.emissiveMap || !!_.roughnessMap || !!_.metalnessMap || !!_.clearcoatMap || !!_.clearcoatRoughnessMap || !!_.clearcoatNormalMap || !!_.displacementMap || !!_.transmissionMap,
      uvsVertexOnly: !(_.map || _.bumpMap || _.normalMap || _.specularMap || _.alphaMap || _.emissiveMap || _.roughnessMap || _.metalnessMap || _.clearcoatNormalMap || _.transmissionMap) && !!_.displacementMap,
      fog: !!W,
      useFog: _.fog,
      fogExp2: W && W.isFogExp2,
      flatShading: !!_.flatShading,
      sizeAttenuation: _.sizeAttenuation,
      logarithmicDepthBuffer: l,
      skinning: _.skinning && D > 0,
      maxBones: D,
      useVertexTexture: c,
      morphTargets: _.morphTargets,
      morphNormals: _.morphNormals,
      numDirLights: R.directional.length,
      numPointLights: R.point.length,
      numSpotLights: R.spot.length,
      numRectAreaLights: R.rectArea.length,
      numHemiLights: R.hemi.length,
      numDirLightShadows: R.directionalShadowMap.length,
      numPointLightShadows: R.pointShadowMap.length,
      numSpotLightShadows: R.spotShadowMap.length,
      numClippingPlanes: s.numPlanes,
      numClipIntersection: s.numIntersection,
      dithering: _.dithering,
      shadowMapEnabled: r.shadowMap.enabled && I.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: _.toneMapped ? r.toneMapping : 0,
      physicallyCorrectLights: r.physicallyCorrectLights,
      premultipliedAlpha: _.premultipliedAlpha,
      alphaTest: _.alphaTest,
      doubleSided: _.side === 2,
      flipSided: _.side === 1,
      depthPacking: _.depthPacking !== void 0 ? _.depthPacking : !1,
      index0AttributeName: _.index0AttributeName,
      extensionDerivatives: _.extensions && _.extensions.derivatives,
      extensionFragDepth: _.extensions && _.extensions.fragDepth,
      extensionDrawBuffers: _.extensions && _.extensions.drawBuffers,
      extensionShaderTextureLOD: _.extensions && _.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: o || e.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: o || e.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: o || e.has("EXT_shader_texture_lod"),
      customProgramCacheKey: _.customProgramCacheKey()
    };
  }
  function m(_) {
    const R = [];
    if (_.shaderID ? R.push(_.shaderID) : (R.push(_.fragmentShader), R.push(_.vertexShader)), _.defines !== void 0)
      for (const I in _.defines)
        R.push(I), R.push(_.defines[I]);
    if (_.isRawShaderMaterial === !1) {
      for (let I = 0; I < p.length; I++)
        R.push(_[p[I]]);
      R.push(r.outputEncoding), R.push(r.gammaFactor);
    }
    return R.push(_.customProgramCacheKey), R.join();
  }
  function w(_) {
    const R = f[_.type];
    let I;
    if (R) {
      const B = Ee[R];
      I = Xo.clone(B.uniforms);
    } else
      I = _.uniforms;
    return I;
  }
  function E(_, R) {
    let I;
    for (let B = 0, U = a.length; B < U; B++) {
      const W = a[B];
      if (W.cacheKey === R) {
        I = W, ++I.usedTimes;
        break;
      }
    }
    return I === void 0 && (I = new Iu(r, R, _, i), a.push(I)), I;
  }
  function b(_) {
    if (--_.usedTimes === 0) {
      const R = a.indexOf(_);
      a[R] = a[a.length - 1], a.pop(), _.destroy();
    }
  }
  return {
    getParameters: g,
    getProgramCacheKey: m,
    getUniforms: w,
    acquireProgram: E,
    releaseProgram: b,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: a
  };
}
function zu() {
  let r = /* @__PURE__ */ new WeakMap();
  function t(s) {
    let a = r.get(s);
    return a === void 0 && (a = {}, r.set(s, a)), a;
  }
  function e(s) {
    r.delete(s);
  }
  function n(s, a, o) {
    r.get(s)[a] = o;
  }
  function i() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    remove: e,
    update: n,
    dispose: i
  };
}
function Uu(r, t) {
  return r.groupOrder !== t.groupOrder ? r.groupOrder - t.groupOrder : r.renderOrder !== t.renderOrder ? r.renderOrder - t.renderOrder : r.program !== t.program ? r.program.id - t.program.id : r.material.id !== t.material.id ? r.material.id - t.material.id : r.z !== t.z ? r.z - t.z : r.id - t.id;
}
function Gu(r, t) {
  return r.groupOrder !== t.groupOrder ? r.groupOrder - t.groupOrder : r.renderOrder !== t.renderOrder ? r.renderOrder - t.renderOrder : r.z !== t.z ? t.z - r.z : r.id - t.id;
}
function Gs(r) {
  const t = [];
  let e = 0;
  const n = [], i = [], s = { id: -1 };
  function a() {
    e = 0, n.length = 0, i.length = 0;
  }
  function o(u, f, p, x, y, g) {
    let m = t[e];
    const w = r.get(p);
    return m === void 0 ? (m = {
      id: u.id,
      object: u,
      geometry: f,
      material: p,
      program: w.program || s,
      groupOrder: x,
      renderOrder: u.renderOrder,
      z: y,
      group: g
    }, t[e] = m) : (m.id = u.id, m.object = u, m.geometry = f, m.material = p, m.program = w.program || s, m.groupOrder = x, m.renderOrder = u.renderOrder, m.z = y, m.group = g), e++, m;
  }
  function l(u, f, p, x, y, g) {
    const m = o(u, f, p, x, y, g);
    (p.transparent === !0 ? i : n).push(m);
  }
  function c(u, f, p, x, y, g) {
    const m = o(u, f, p, x, y, g);
    (p.transparent === !0 ? i : n).unshift(m);
  }
  function d(u, f) {
    n.length > 1 && n.sort(u || Uu), i.length > 1 && i.sort(f || Gu);
  }
  function h() {
    for (let u = e, f = t.length; u < f; u++) {
      const p = t[u];
      if (p.id === null) break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.program = null, p.group = null;
    }
  }
  return {
    opaque: n,
    transparent: i,
    init: a,
    push: l,
    unshift: c,
    finish: h,
    sort: d
  };
}
function Hu(r) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(i, s) {
    let a;
    return t.has(i) === !1 ? (a = new Gs(r), t.set(i, [a])) : s >= t.get(i).length ? (a = new Gs(r), t.get(i).push(a)) : a = t.get(i)[s], a;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: n
  };
}
function ku() {
  const r = {};
  return {
    get: function(t) {
      if (r[t.id] !== void 0)
        return r[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            direction: new S(),
            color: new at()
          };
          break;
        case "SpotLight":
          e = {
            position: new S(),
            direction: new S(),
            color: new at(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          e = {
            position: new S(),
            color: new at(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          e = {
            direction: new S(),
            skyColor: new at(),
            groundColor: new at()
          };
          break;
        case "RectAreaLight":
          e = {
            color: new at(),
            position: new S(),
            halfWidth: new S(),
            halfHeight: new S()
          };
          break;
      }
      return r[t.id] = e, e;
    }
  };
}
function Ou() {
  const r = {};
  return {
    get: function(t) {
      if (r[t.id] !== void 0)
        return r[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Z()
          };
          break;
        case "SpotLight":
          e = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Z()
          };
          break;
        case "PointLight":
          e = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Z(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return r[t.id] = e, e;
    }
  };
}
let Vu = 0;
function Wu(r, t) {
  return (t.castShadow ? 1 : 0) - (r.castShadow ? 1 : 0);
}
function qu(r, t) {
  const e = new ku(), n = Ou(), i = {
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
  for (let d = 0; d < 9; d++) i.probe.push(new S());
  const s = new S(), a = new ut(), o = new ut();
  function l(d) {
    let h = 0, u = 0, f = 0;
    for (let R = 0; R < 9; R++) i.probe[R].set(0, 0, 0);
    let p = 0, x = 0, y = 0, g = 0, m = 0, w = 0, E = 0, b = 0;
    d.sort(Wu);
    for (let R = 0, I = d.length; R < I; R++) {
      const B = d[R], U = B.color, W = B.intensity, F = B.distance, A = B.shadow && B.shadow.map ? B.shadow.map.texture : null;
      if (B.isAmbientLight)
        h += U.r * W, u += U.g * W, f += U.b * W;
      else if (B.isLightProbe)
        for (let P = 0; P < 9; P++)
          i.probe[P].addScaledVector(B.sh.coefficients[P], W);
      else if (B.isDirectionalLight) {
        const P = e.get(B);
        if (P.color.copy(B.color).multiplyScalar(B.intensity), B.castShadow) {
          const D = B.shadow, C = n.get(B);
          C.shadowBias = D.bias, C.shadowNormalBias = D.normalBias, C.shadowRadius = D.radius, C.shadowMapSize = D.mapSize, i.directionalShadow[p] = C, i.directionalShadowMap[p] = A, i.directionalShadowMatrix[p] = B.shadow.matrix, w++;
        }
        i.directional[p] = P, p++;
      } else if (B.isSpotLight) {
        const P = e.get(B);
        if (P.position.setFromMatrixPosition(B.matrixWorld), P.color.copy(U).multiplyScalar(W), P.distance = F, P.coneCos = Math.cos(B.angle), P.penumbraCos = Math.cos(B.angle * (1 - B.penumbra)), P.decay = B.decay, B.castShadow) {
          const D = B.shadow, C = n.get(B);
          C.shadowBias = D.bias, C.shadowNormalBias = D.normalBias, C.shadowRadius = D.radius, C.shadowMapSize = D.mapSize, i.spotShadow[y] = C, i.spotShadowMap[y] = A, i.spotShadowMatrix[y] = B.shadow.matrix, b++;
        }
        i.spot[y] = P, y++;
      } else if (B.isRectAreaLight) {
        const P = e.get(B);
        P.color.copy(U).multiplyScalar(W), P.halfWidth.set(B.width * 0.5, 0, 0), P.halfHeight.set(0, B.height * 0.5, 0), i.rectArea[g] = P, g++;
      } else if (B.isPointLight) {
        const P = e.get(B);
        if (P.color.copy(B.color).multiplyScalar(B.intensity), P.distance = B.distance, P.decay = B.decay, B.castShadow) {
          const D = B.shadow, C = n.get(B);
          C.shadowBias = D.bias, C.shadowNormalBias = D.normalBias, C.shadowRadius = D.radius, C.shadowMapSize = D.mapSize, C.shadowCameraNear = D.camera.near, C.shadowCameraFar = D.camera.far, i.pointShadow[x] = C, i.pointShadowMap[x] = A, i.pointShadowMatrix[x] = B.shadow.matrix, E++;
        }
        i.point[x] = P, x++;
      } else if (B.isHemisphereLight) {
        const P = e.get(B);
        P.skyColor.copy(B.color).multiplyScalar(W), P.groundColor.copy(B.groundColor).multiplyScalar(W), i.hemi[m] = P, m++;
      }
    }
    g > 0 && (t.isWebGL2 || r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = et.LTC_FLOAT_1, i.rectAreaLTC2 = et.LTC_FLOAT_2) : r.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = et.LTC_HALF_1, i.rectAreaLTC2 = et.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = h, i.ambient[1] = u, i.ambient[2] = f;
    const _ = i.hash;
    (_.directionalLength !== p || _.pointLength !== x || _.spotLength !== y || _.rectAreaLength !== g || _.hemiLength !== m || _.numDirectionalShadows !== w || _.numPointShadows !== E || _.numSpotShadows !== b) && (i.directional.length = p, i.spot.length = y, i.rectArea.length = g, i.point.length = x, i.hemi.length = m, i.directionalShadow.length = w, i.directionalShadowMap.length = w, i.pointShadow.length = E, i.pointShadowMap.length = E, i.spotShadow.length = b, i.spotShadowMap.length = b, i.directionalShadowMatrix.length = w, i.pointShadowMatrix.length = E, i.spotShadowMatrix.length = b, _.directionalLength = p, _.pointLength = x, _.spotLength = y, _.rectAreaLength = g, _.hemiLength = m, _.numDirectionalShadows = w, _.numPointShadows = E, _.numSpotShadows = b, i.version = Vu++);
  }
  function c(d, h) {
    let u = 0, f = 0, p = 0, x = 0, y = 0;
    const g = h.matrixWorldInverse;
    for (let m = 0, w = d.length; m < w; m++) {
      const E = d[m];
      if (E.isDirectionalLight) {
        const b = i.directional[u];
        b.direction.setFromMatrixPosition(E.matrixWorld), s.setFromMatrixPosition(E.target.matrixWorld), b.direction.sub(s), b.direction.transformDirection(g), u++;
      } else if (E.isSpotLight) {
        const b = i.spot[p];
        b.position.setFromMatrixPosition(E.matrixWorld), b.position.applyMatrix4(g), b.direction.setFromMatrixPosition(E.matrixWorld), s.setFromMatrixPosition(E.target.matrixWorld), b.direction.sub(s), b.direction.transformDirection(g), p++;
      } else if (E.isRectAreaLight) {
        const b = i.rectArea[x];
        b.position.setFromMatrixPosition(E.matrixWorld), b.position.applyMatrix4(g), o.identity(), a.copy(E.matrixWorld), a.premultiply(g), o.extractRotation(a), b.halfWidth.set(E.width * 0.5, 0, 0), b.halfHeight.set(0, E.height * 0.5, 0), b.halfWidth.applyMatrix4(o), b.halfHeight.applyMatrix4(o), x++;
      } else if (E.isPointLight) {
        const b = i.point[f];
        b.position.setFromMatrixPosition(E.matrixWorld), b.position.applyMatrix4(g), f++;
      } else if (E.isHemisphereLight) {
        const b = i.hemi[y];
        b.direction.setFromMatrixPosition(E.matrixWorld), b.direction.transformDirection(g), b.direction.normalize(), y++;
      }
    }
  }
  return {
    setup: l,
    setupView: c,
    state: i
  };
}
function Hs(r, t) {
  const e = new qu(r, t), n = [], i = [];
  function s() {
    n.length = 0, i.length = 0;
  }
  function a(h) {
    n.push(h);
  }
  function o(h) {
    i.push(h);
  }
  function l() {
    e.setup(n);
  }
  function c(h) {
    e.setupView(n, h);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: e
    },
    setupLights: l,
    setupLightsView: c,
    pushLight: a,
    pushShadow: o
  };
}
function Xu(r, t) {
  let e = /* @__PURE__ */ new WeakMap();
  function n(s, a = 0) {
    let o;
    return e.has(s) === !1 ? (o = new Hs(r, t), e.set(s, [o])) : a >= e.get(s).length ? (o = new Hs(r, t), e.get(s).push(o)) : o = e.get(s)[a], o;
  }
  function i() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class ka extends Qt {
  constructor(t) {
    super(), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
ka.prototype.isMeshDepthMaterial = !0;
class Oa extends Qt {
  constructor(t) {
    super(), this.type = "MeshDistanceMaterial", this.referencePosition = new S(), this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
}
Oa.prototype.isMeshDistanceMaterial = !0;
var Yu = `uniform sampler2D shadow_pass;
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
}`, ju = `void main() {
	gl_Position = vec4( position, 1.0 );
}`;
function Va(r, t, e) {
  let n = new Wi();
  const i = new Z(), s = new Z(), a = new Bt(), o = [], l = [], c = {}, d = e.maxTextureSize, h = { 0: 1, 1: 0, 2: 2 }, u = new cn({
    defines: {
      SAMPLE_RATE: 2 / 8,
      HALF_SAMPLE_RATE: 1 / 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Z() },
      radius: { value: 4 }
    },
    vertexShader: ju,
    fragmentShader: Yu
  }), f = u.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const p = new It();
  p.setAttribute(
    "position",
    new $t(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const x = new ee(p, u), y = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(_, R, I) {
    if (y.enabled === !1 || y.autoUpdate === !1 && y.needsUpdate === !1 || _.length === 0) return;
    const B = r.getRenderTarget(), U = r.getActiveCubeFace(), W = r.getActiveMipmapLevel(), F = r.state;
    F.setBlending(0), F.buffers.color.setClear(1, 1, 1, 1), F.buffers.depth.setTest(!0), F.setScissorTest(!1);
    for (let A = 0, P = _.length; A < P; A++) {
      const D = _[A], C = D.shadow;
      if (C === void 0) {
        console.warn("THREE.WebGLShadowMap:", D, "has no shadow.");
        continue;
      }
      if (C.autoUpdate === !1 && C.needsUpdate === !1) continue;
      i.copy(C.mapSize);
      const k = C.getFrameExtents();
      if (i.multiply(k), s.copy(C.mapSize), (i.x > d || i.y > d) && (i.x > d && (s.x = Math.floor(d / k.x), i.x = s.x * k.x, C.mapSize.x = s.x), i.y > d && (s.y = Math.floor(d / k.y), i.y = s.y * k.y, C.mapSize.y = s.y)), C.map === null && !C.isPointLightShadow && this.type === 3) {
        const X = { minFilter: 1006, magFilter: 1006, format: 1023 };
        C.map = new ln(i.x, i.y, X), C.map.texture.name = D.name + ".shadowMap", C.mapPass = new ln(i.x, i.y, X), C.camera.updateProjectionMatrix();
      }
      if (C.map === null) {
        const X = { minFilter: 1003, magFilter: 1003, format: 1023 };
        C.map = new ln(i.x, i.y, X), C.map.texture.name = D.name + ".shadowMap", C.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(C.map), r.clear();
      const Y = C.getViewportCount();
      for (let X = 0; X < Y; X++) {
        const $ = C.getViewport(X);
        a.set(
          s.x * $.x,
          s.y * $.y,
          s.x * $.z,
          s.y * $.w
        ), F.viewport(a), C.updateMatrices(D, X), n = C.getFrustum(), b(R, I, C.camera, D, this.type);
      }
      !C.isPointLightShadow && this.type === 3 && g(C, I), C.needsUpdate = !1;
    }
    y.needsUpdate = !1, r.setRenderTarget(B, U, W);
  };
  function g(_, R) {
    const I = t.update(x);
    u.uniforms.shadow_pass.value = _.map.texture, u.uniforms.resolution.value = _.mapSize, u.uniforms.radius.value = _.radius, r.setRenderTarget(_.mapPass), r.clear(), r.renderBufferDirect(R, null, I, u, x, null), f.uniforms.shadow_pass.value = _.mapPass.texture, f.uniforms.resolution.value = _.mapSize, f.uniforms.radius.value = _.radius, r.setRenderTarget(_.map), r.clear(), r.renderBufferDirect(R, null, I, f, x, null);
  }
  function m(_, R, I) {
    const B = _ << 0 | R << 1 | I << 2;
    let U = o[B];
    return U === void 0 && (U = new ka({
      depthPacking: 3201,
      morphTargets: _,
      skinning: R
    }), o[B] = U), U;
  }
  function w(_, R, I) {
    const B = _ << 0 | R << 1 | I << 2;
    let U = l[B];
    return U === void 0 && (U = new Oa({
      morphTargets: _,
      skinning: R
    }), l[B] = U), U;
  }
  function E(_, R, I, B, U, W, F) {
    let A = null, P = m, D = _.customDepthMaterial;
    if (B.isPointLight === !0 && (P = w, D = _.customDistanceMaterial), D === void 0) {
      let C = !1;
      I.morphTargets === !0 && (C = R.morphAttributes && R.morphAttributes.position && R.morphAttributes.position.length > 0);
      let k = !1;
      _.isSkinnedMesh === !0 && (I.skinning === !0 ? k = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", _));
      const Y = _.isInstancedMesh === !0;
      A = P(C, k, Y);
    } else
      A = D;
    if (r.localClippingEnabled && I.clipShadows === !0 && I.clippingPlanes.length !== 0) {
      const C = A.uuid, k = I.uuid;
      let Y = c[C];
      Y === void 0 && (Y = {}, c[C] = Y);
      let X = Y[k];
      X === void 0 && (X = A.clone(), Y[k] = X), A = X;
    }
    return A.visible = I.visible, A.wireframe = I.wireframe, F === 3 ? A.side = I.shadowSide !== null ? I.shadowSide : I.side : A.side = I.shadowSide !== null ? I.shadowSide : h[I.side], A.clipShadows = I.clipShadows, A.clippingPlanes = I.clippingPlanes, A.clipIntersection = I.clipIntersection, A.wireframeLinewidth = I.wireframeLinewidth, A.linewidth = I.linewidth, B.isPointLight === !0 && A.isMeshDistanceMaterial === !0 && (A.referencePosition.setFromMatrixPosition(B.matrixWorld), A.nearDistance = U, A.farDistance = W), A;
  }
  function b(_, R, I, B, U) {
    if (_.visible === !1) return;
    if (_.layers.test(R.layers) && (_.isMesh || _.isLine || _.isPoints) && (_.castShadow || _.receiveShadow && U === 3) && (!_.frustumCulled || n.intersectsObject(_))) {
      _.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse, _.matrixWorld);
      const A = t.update(_), P = _.material;
      if (Array.isArray(P)) {
        const D = A.groups;
        for (let C = 0, k = D.length; C < k; C++) {
          const Y = D[C], X = P[Y.materialIndex];
          if (X && X.visible) {
            const $ = E(_, A, X, B, I.near, I.far, U);
            r.renderBufferDirect(I, null, A, $, _, Y);
          }
        }
      } else if (P.visible) {
        const D = E(_, A, P, B, I.near, I.far, U);
        r.renderBufferDirect(I, null, A, D, _, null);
      }
    }
    const F = _.children;
    for (let A = 0, P = F.length; A < P; A++)
      b(F[A], R, I, B, U);
  }
}
function Zu(r, t, e) {
  const n = e.isWebGL2;
  function i() {
    let L = !1;
    const J = new Bt();
    let tt = null;
    const ht = new Bt(0, 0, 0, 0);
    return {
      setMask: function(q) {
        tt !== q && !L && (r.colorMask(q, q, q, q), tt = q);
      },
      setLocked: function(q) {
        L = q;
      },
      setClear: function(q, mt, Dt, qt, tn) {
        tn === !0 && (q *= qt, mt *= qt, Dt *= qt), J.set(q, mt, Dt, qt), ht.equals(J) === !1 && (r.clearColor(q, mt, Dt, qt), ht.copy(J));
      },
      reset: function() {
        L = !1, tt = null, ht.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let L = !1, J = null, tt = null, ht = null;
    return {
      setTest: function(q) {
        q ? ct(2929) : ft(2929);
      },
      setMask: function(q) {
        J !== q && !L && (r.depthMask(q), J = q);
      },
      setFunc: function(q) {
        if (tt !== q) {
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
          tt = q;
        }
      },
      setLocked: function(q) {
        L = q;
      },
      setClear: function(q) {
        ht !== q && (r.clearDepth(q), ht = q);
      },
      reset: function() {
        L = !1, J = null, tt = null, ht = null;
      }
    };
  }
  function a() {
    let L = !1, J = null, tt = null, ht = null, q = null, mt = null, Dt = null, qt = null, tn = null;
    return {
      setTest: function(Vt) {
        L || (Vt ? ct(2960) : ft(2960));
      },
      setMask: function(Vt) {
        J !== Vt && !L && (r.stencilMask(Vt), J = Vt);
      },
      setFunc: function(Vt, Pe, ye) {
        (tt !== Vt || ht !== Pe || q !== ye) && (r.stencilFunc(Vt, Pe, ye), tt = Vt, ht = Pe, q = ye);
      },
      setOp: function(Vt, Pe, ye) {
        (mt !== Vt || Dt !== Pe || qt !== ye) && (r.stencilOp(Vt, Pe, ye), mt = Vt, Dt = Pe, qt = ye);
      },
      setLocked: function(Vt) {
        L = Vt;
      },
      setClear: function(Vt) {
        tn !== Vt && (r.clearStencil(Vt), tn = Vt);
      },
      reset: function() {
        L = !1, J = null, tt = null, ht = null, q = null, mt = null, Dt = null, qt = null, tn = null;
      }
    };
  }
  const o = new i(), l = new s(), c = new a();
  let d = {}, h = null, u = {}, f = null, p = !1, x = null, y = null, g = null, m = null, w = null, E = null, b = null, _ = !1, R = null, I = null, B = null, U = null, W = null;
  const F = r.getParameter(35661);
  let A = !1, P = 0;
  const D = r.getParameter(7938);
  D.indexOf("WebGL") !== -1 ? (P = parseFloat(/^WebGL (\d)/.exec(D)[1]), A = P >= 1) : D.indexOf("OpenGL ES") !== -1 && (P = parseFloat(/^OpenGL ES (\d)/.exec(D)[1]), A = P >= 2);
  let C = null, k = {};
  const Y = new Bt(0, 0, r.canvas.width, r.canvas.height), X = new Bt(0, 0, r.canvas.width, r.canvas.height);
  function $(L, J, tt) {
    const ht = new Uint8Array(4), q = r.createTexture();
    r.bindTexture(L, q), r.texParameteri(L, 10241, 9728), r.texParameteri(L, 10240, 9728);
    for (let mt = 0; mt < tt; mt++)
      r.texImage2D(J + mt, 0, 6408, 1, 1, 0, 6408, 5121, ht);
    return q;
  }
  const K = {};
  K[3553] = $(3553, 3553, 1), K[34067] = $(34067, 34069, 6), o.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), ct(2929), l.setFunc(3), wt(!1), j(1), ct(2884), St(0);
  function ct(L) {
    d[L] !== !0 && (r.enable(L), d[L] = !0);
  }
  function ft(L) {
    d[L] !== !1 && (r.disable(L), d[L] = !1);
  }
  function G(L) {
    L !== h && (r.bindFramebuffer(36160, L), h = L);
  }
  function Ct(L, J) {
    J === null && h !== null && (J = h), u[L] !== J && (r.bindFramebuffer(L, J), u[L] = J, n && (L === 36009 && (u[36160] = J), L === 36160 && (u[36009] = J)));
  }
  function Tt(L) {
    return f !== L ? (r.useProgram(L), f = L, !0) : !1;
  }
  const pt = {
    100: 32774,
    101: 32778,
    102: 32779
  };
  if (n)
    pt[103] = 32775, pt[104] = 32776;
  else {
    const L = t.get("EXT_blend_minmax");
    L !== null && (pt[103] = L.MIN_EXT, pt[104] = L.MAX_EXT);
  }
  const dt = {
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
  function St(L, J, tt, ht, q, mt, Dt, qt) {
    if (L === 0) {
      p === !0 && (ft(3042), p = !1);
      return;
    }
    if (p === !1 && (ct(3042), p = !0), L !== 5) {
      if (L !== x || qt !== _) {
        if ((y !== 100 || w !== 100) && (r.blendEquation(32774), y = 100, w = 100), qt)
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
        g = null, m = null, E = null, b = null, x = L, _ = qt;
      }
      return;
    }
    q = q || J, mt = mt || tt, Dt = Dt || ht, (J !== y || q !== w) && (r.blendEquationSeparate(pt[J], pt[q]), y = J, w = q), (tt !== g || ht !== m || mt !== E || Dt !== b) && (r.blendFuncSeparate(dt[tt], dt[ht], dt[mt], dt[Dt]), g = tt, m = ht, E = mt, b = Dt), x = L, _ = null;
  }
  function Mt(L, J) {
    L.side === 2 ? ft(2884) : ct(2884);
    let tt = L.side === 1;
    J && (tt = !tt), wt(tt), L.blending === 1 && L.transparent === !1 ? St(0) : St(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.premultipliedAlpha), l.setFunc(L.depthFunc), l.setTest(L.depthTest), l.setMask(L.depthWrite), o.setMask(L.colorWrite);
    const ht = L.stencilWrite;
    c.setTest(ht), ht && (c.setMask(L.stencilWriteMask), c.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), c.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), nt(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? ct(32926) : ft(32926);
  }
  function wt(L) {
    R !== L && (L ? r.frontFace(2304) : r.frontFace(2305), R = L);
  }
  function j(L) {
    L !== 0 ? (ct(2884), L !== I && (L === 1 ? r.cullFace(1029) : L === 2 ? r.cullFace(1028) : r.cullFace(1032))) : ft(2884), I = L;
  }
  function Q(L) {
    L !== B && (A && r.lineWidth(L), B = L);
  }
  function nt(L, J, tt) {
    L ? (ct(32823), (U !== J || W !== tt) && (r.polygonOffset(J, tt), U = J, W = tt)) : ft(32823);
  }
  function lt(L) {
    L ? ct(3089) : ft(3089);
  }
  function rt(L) {
    L === void 0 && (L = 33984 + F - 1), C !== L && (r.activeTexture(L), C = L);
  }
  function T(L, J) {
    C === null && rt();
    let tt = k[C];
    tt === void 0 && (tt = { type: void 0, texture: void 0 }, k[C] = tt), (tt.type !== L || tt.texture !== J) && (r.bindTexture(L, J || K[L]), tt.type = L, tt.texture = J);
  }
  function M() {
    const L = k[C];
    L !== void 0 && L.type !== void 0 && (r.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
  }
  function O() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function V() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function st() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ot(L) {
    Y.equals(L) === !1 && (r.scissor(L.x, L.y, L.z, L.w), Y.copy(L));
  }
  function Lt(L) {
    X.equals(L) === !1 && (r.viewport(L.x, L.y, L.z, L.w), X.copy(L));
  }
  function gt() {
    r.disable(3042), r.disable(2884), r.disable(2929), r.disable(32823), r.disable(3089), r.disable(2960), r.disable(32926), r.blendEquation(32774), r.blendFunc(1, 0), r.blendFuncSeparate(1, 0, 1, 0), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(513), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(519, 0, 4294967295), r.stencilOp(7680, 7680, 7680), r.clearStencil(0), r.cullFace(1029), r.frontFace(2305), r.polygonOffset(0, 0), r.activeTexture(33984), r.bindFramebuffer(36160, null), n === !0 && (r.bindFramebuffer(36009, null), r.bindFramebuffer(36008, null)), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), d = {}, C = null, k = {}, h = null, u = {}, f = null, p = !1, x = null, y = null, g = null, m = null, w = null, E = null, b = null, _ = !1, R = null, I = null, B = null, U = null, W = null, Y.set(0, 0, r.canvas.width, r.canvas.height), X.set(0, 0, r.canvas.width, r.canvas.height), o.reset(), l.reset(), c.reset();
  }
  return {
    buffers: {
      color: o,
      depth: l,
      stencil: c
    },
    enable: ct,
    disable: ft,
    bindFramebuffer: Ct,
    bindXRFramebuffer: G,
    useProgram: Tt,
    setBlending: St,
    setMaterial: Mt,
    setFlipSided: wt,
    setCullFace: j,
    setLineWidth: Q,
    setPolygonOffset: nt,
    setScissorTest: lt,
    activeTexture: rt,
    bindTexture: T,
    unbindTexture: M,
    compressedTexImage2D: O,
    texImage2D: V,
    texImage3D: st,
    scissor: ot,
    viewport: Lt,
    reset: gt
  };
}
function Ju(r, t, e, n, i, s, a) {
  const o = i.isWebGL2, l = i.maxTextures, c = i.maxCubemapSize, d = i.maxTextureSize, h = i.maxSamples, u = /* @__PURE__ */ new WeakMap();
  let f, p = !1;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function x(T, M) {
    return p ? new OffscreenCanvas(T, M) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
  }
  function y(T, M, O, V) {
    let st = 1;
    if ((T.width > V || T.height > V) && (st = V / Math.max(T.width, T.height)), st < 1 || M === !0)
      if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap) {
        const ot = M ? Ro : Math.floor, Lt = ot(st * T.width), gt = ot(st * T.height);
        f === void 0 && (f = x(Lt, gt));
        const L = O ? x(Lt, gt) : f;
        return L.width = Lt, L.height = gt, L.getContext("2d").drawImage(T, 0, 0, Lt, gt), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + T.width + "x" + T.height + ") to (" + Lt + "x" + gt + ")."), L;
      } else
        return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + T.width + "x" + T.height + ")."), T;
    return T;
  }
  function g(T) {
    return ms(T.width) && ms(T.height);
  }
  function m(T) {
    return o ? !1 : T.wrapS !== 1001 || T.wrapT !== 1001 || T.minFilter !== 1003 && T.minFilter !== 1006;
  }
  function w(T, M) {
    return T.generateMipmaps && M && T.minFilter !== 1003 && T.minFilter !== 1006;
  }
  function E(T, M, O, V) {
    r.generateMipmap(T);
    const st = n.get(M);
    st.__maxMipLevel = Math.log2(Math.max(O, V));
  }
  function b(T, M, O) {
    if (o === !1) return M;
    if (T !== null) {
      if (r[T] !== void 0) return r[T];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'");
    }
    let V = M;
    return M === 6403 && (O === 5126 && (V = 33326), O === 5131 && (V = 33325), O === 5121 && (V = 33321)), M === 6407 && (O === 5126 && (V = 34837), O === 5131 && (V = 34843), O === 5121 && (V = 32849)), M === 6408 && (O === 5126 && (V = 34836), O === 5131 && (V = 34842), O === 5121 && (V = 32856)), (V === 33325 || V === 33326 || V === 34842 || V === 34836) && t.get("EXT_color_buffer_float"), V;
  }
  function _(T) {
    return T === 1003 || T === 1004 || T === 1005 ? 9728 : 9729;
  }
  function R(T) {
    const M = T.target;
    M.removeEventListener("dispose", R), B(M), M.isVideoTexture && u.delete(M), a.memory.textures--;
  }
  function I(T) {
    const M = T.target;
    M.removeEventListener("dispose", I), U(M), a.memory.textures--;
  }
  function B(T) {
    const M = n.get(T);
    M.__webglInit !== void 0 && (r.deleteTexture(M.__webglTexture), n.remove(T));
  }
  function U(T) {
    const M = T.texture, O = n.get(T), V = n.get(M);
    if (T) {
      if (V.__webglTexture !== void 0 && r.deleteTexture(V.__webglTexture), T.depthTexture && T.depthTexture.dispose(), T.isWebGLCubeRenderTarget)
        for (let st = 0; st < 6; st++)
          r.deleteFramebuffer(O.__webglFramebuffer[st]), O.__webglDepthbuffer && r.deleteRenderbuffer(O.__webglDepthbuffer[st]);
      else
        r.deleteFramebuffer(O.__webglFramebuffer), O.__webglDepthbuffer && r.deleteRenderbuffer(O.__webglDepthbuffer), O.__webglMultisampledFramebuffer && r.deleteFramebuffer(O.__webglMultisampledFramebuffer), O.__webglColorRenderbuffer && r.deleteRenderbuffer(O.__webglColorRenderbuffer), O.__webglDepthRenderbuffer && r.deleteRenderbuffer(O.__webglDepthRenderbuffer);
      n.remove(M), n.remove(T);
    }
  }
  let W = 0;
  function F() {
    W = 0;
  }
  function A() {
    const T = W;
    return T >= l && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + l), W += 1, T;
  }
  function P(T, M) {
    const O = n.get(T);
    if (T.isVideoTexture && j(T), T.version > 0 && O.__version !== T.version) {
      const V = T.image;
      if (V === void 0)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
      else if (V.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ct(O, T, M);
        return;
      }
    }
    e.activeTexture(33984 + M), e.bindTexture(3553, O.__webglTexture);
  }
  function D(T, M) {
    const O = n.get(T);
    if (T.version > 0 && O.__version !== T.version) {
      ct(O, T, M);
      return;
    }
    e.activeTexture(33984 + M), e.bindTexture(35866, O.__webglTexture);
  }
  function C(T, M) {
    const O = n.get(T);
    if (T.version > 0 && O.__version !== T.version) {
      ct(O, T, M);
      return;
    }
    e.activeTexture(33984 + M), e.bindTexture(32879, O.__webglTexture);
  }
  function k(T, M) {
    const O = n.get(T);
    if (T.version > 0 && O.__version !== T.version) {
      ft(O, T, M);
      return;
    }
    e.activeTexture(33984 + M), e.bindTexture(34067, O.__webglTexture);
  }
  const Y = {
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
  function $(T, M, O) {
    if (O ? (r.texParameteri(T, 10242, Y[M.wrapS]), r.texParameteri(T, 10243, Y[M.wrapT]), (T === 32879 || T === 35866) && r.texParameteri(T, 32882, Y[M.wrapR]), r.texParameteri(T, 10240, X[M.magFilter]), r.texParameteri(T, 10241, X[M.minFilter])) : (r.texParameteri(T, 10242, 33071), r.texParameteri(T, 10243, 33071), (T === 32879 || T === 35866) && r.texParameteri(T, 32882, 33071), (M.wrapS !== 1001 || M.wrapT !== 1001) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), r.texParameteri(T, 10240, _(M.magFilter)), r.texParameteri(T, 10241, _(M.minFilter)), M.minFilter !== 1003 && M.minFilter !== 1006 && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), t.has("EXT_texture_filter_anisotropic") === !0) {
      const V = t.get("EXT_texture_filter_anisotropic");
      if (M.type === 1015 && t.has("OES_texture_float_linear") === !1 || o === !1 && M.type === 1016 && t.has("OES_texture_half_float_linear") === !1) return;
      (M.anisotropy > 1 || n.get(M).__currentAnisotropy) && (r.texParameterf(T, V.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(M.anisotropy, i.getMaxAnisotropy())), n.get(M).__currentAnisotropy = M.anisotropy);
    }
  }
  function K(T, M) {
    T.__webglInit === void 0 && (T.__webglInit = !0, M.addEventListener("dispose", R), T.__webglTexture = r.createTexture(), a.memory.textures++);
  }
  function ct(T, M, O) {
    let V = 3553;
    M.isDataTexture2DArray && (V = 35866), M.isDataTexture3D && (V = 32879), K(T, M), e.activeTexture(33984 + O), e.bindTexture(V, T.__webglTexture), r.pixelStorei(37440, M.flipY), r.pixelStorei(37441, M.premultiplyAlpha), r.pixelStorei(3317, M.unpackAlignment), r.pixelStorei(37443, 0);
    const st = m(M) && g(M.image) === !1, ot = y(M.image, st, !1, d), Lt = g(ot) || o, gt = s.convert(M.format);
    let L = s.convert(M.type), J = b(M.internalFormat, gt, L);
    $(V, M, Lt);
    let tt;
    const ht = M.mipmaps;
    if (M.isDepthTexture)
      J = 6402, o ? M.type === 1015 ? J = 36012 : M.type === 1014 ? J = 33190 : M.type === 1020 ? J = 35056 : J = 33189 : M.type === 1015 && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), M.format === 1026 && J === 6402 && M.type !== 1012 && M.type !== 1014 && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), M.type = 1012, L = s.convert(M.type)), M.format === 1027 && J === 6402 && (J = 34041, M.type !== 1020 && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), M.type = 1020, L = s.convert(M.type))), e.texImage2D(3553, 0, J, ot.width, ot.height, 0, gt, L, null);
    else if (M.isDataTexture)
      if (ht.length > 0 && Lt) {
        for (let q = 0, mt = ht.length; q < mt; q++)
          tt = ht[q], e.texImage2D(3553, q, J, tt.width, tt.height, 0, gt, L, tt.data);
        M.generateMipmaps = !1, T.__maxMipLevel = ht.length - 1;
      } else
        e.texImage2D(3553, 0, J, ot.width, ot.height, 0, gt, L, ot.data), T.__maxMipLevel = 0;
    else if (M.isCompressedTexture) {
      for (let q = 0, mt = ht.length; q < mt; q++)
        tt = ht[q], M.format !== 1023 && M.format !== 1022 ? gt !== null ? e.compressedTexImage2D(3553, q, J, tt.width, tt.height, 0, tt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : e.texImage2D(3553, q, J, tt.width, tt.height, 0, gt, L, tt.data);
      T.__maxMipLevel = ht.length - 1;
    } else if (M.isDataTexture2DArray)
      e.texImage3D(35866, 0, J, ot.width, ot.height, ot.depth, 0, gt, L, ot.data), T.__maxMipLevel = 0;
    else if (M.isDataTexture3D)
      e.texImage3D(32879, 0, J, ot.width, ot.height, ot.depth, 0, gt, L, ot.data), T.__maxMipLevel = 0;
    else if (ht.length > 0 && Lt) {
      for (let q = 0, mt = ht.length; q < mt; q++)
        tt = ht[q], e.texImage2D(3553, q, J, gt, L, tt);
      M.generateMipmaps = !1, T.__maxMipLevel = ht.length - 1;
    } else
      e.texImage2D(3553, 0, J, gt, L, ot), T.__maxMipLevel = 0;
    w(M, Lt) && E(V, M, ot.width, ot.height), T.__version = M.version, M.onUpdate && M.onUpdate(M);
  }
  function ft(T, M, O) {
    if (M.image.length !== 6) return;
    K(T, M), e.activeTexture(33984 + O), e.bindTexture(34067, T.__webglTexture), r.pixelStorei(37440, M.flipY), r.pixelStorei(37441, M.premultiplyAlpha), r.pixelStorei(3317, M.unpackAlignment), r.pixelStorei(37443, 0);
    const V = M && (M.isCompressedTexture || M.image[0].isCompressedTexture), st = M.image[0] && M.image[0].isDataTexture, ot = [];
    for (let q = 0; q < 6; q++)
      !V && !st ? ot[q] = y(M.image[q], !1, !0, c) : ot[q] = st ? M.image[q].image : M.image[q];
    const Lt = ot[0], gt = g(Lt) || o, L = s.convert(M.format), J = s.convert(M.type), tt = b(M.internalFormat, L, J);
    $(34067, M, gt);
    let ht;
    if (V) {
      for (let q = 0; q < 6; q++) {
        ht = ot[q].mipmaps;
        for (let mt = 0; mt < ht.length; mt++) {
          const Dt = ht[mt];
          M.format !== 1023 && M.format !== 1022 ? L !== null ? e.compressedTexImage2D(34069 + q, mt, tt, Dt.width, Dt.height, 0, Dt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : e.texImage2D(34069 + q, mt, tt, Dt.width, Dt.height, 0, L, J, Dt.data);
        }
      }
      T.__maxMipLevel = ht.length - 1;
    } else {
      ht = M.mipmaps;
      for (let q = 0; q < 6; q++)
        if (st) {
          e.texImage2D(34069 + q, 0, tt, ot[q].width, ot[q].height, 0, L, J, ot[q].data);
          for (let mt = 0; mt < ht.length; mt++) {
            const qt = ht[mt].image[q].image;
            e.texImage2D(34069 + q, mt + 1, tt, qt.width, qt.height, 0, L, J, qt.data);
          }
        } else {
          e.texImage2D(34069 + q, 0, tt, L, J, ot[q]);
          for (let mt = 0; mt < ht.length; mt++) {
            const Dt = ht[mt];
            e.texImage2D(34069 + q, mt + 1, tt, L, J, Dt.image[q]);
          }
        }
      T.__maxMipLevel = ht.length;
    }
    w(M, gt) && E(34067, M, Lt.width, Lt.height), T.__version = M.version, M.onUpdate && M.onUpdate(M);
  }
  function G(T, M, O, V) {
    const st = M.texture, ot = s.convert(st.format), Lt = s.convert(st.type), gt = b(st.internalFormat, ot, Lt);
    V === 32879 || V === 35866 ? e.texImage3D(V, 0, gt, M.width, M.height, M.depth, 0, ot, Lt, null) : e.texImage2D(V, 0, gt, M.width, M.height, 0, ot, Lt, null), e.bindFramebuffer(36160, T), r.framebufferTexture2D(36160, O, V, n.get(st).__webglTexture, 0), e.bindFramebuffer(36160, null);
  }
  function Ct(T, M, O) {
    if (r.bindRenderbuffer(36161, T), M.depthBuffer && !M.stencilBuffer) {
      let V = 33189;
      if (O) {
        const st = M.depthTexture;
        st && st.isDepthTexture && (st.type === 1015 ? V = 36012 : st.type === 1014 && (V = 33190));
        const ot = wt(M);
        r.renderbufferStorageMultisample(36161, ot, V, M.width, M.height);
      } else
        r.renderbufferStorage(36161, V, M.width, M.height);
      r.framebufferRenderbuffer(36160, 36096, 36161, T);
    } else if (M.depthBuffer && M.stencilBuffer) {
      if (O) {
        const V = wt(M);
        r.renderbufferStorageMultisample(36161, V, 35056, M.width, M.height);
      } else
        r.renderbufferStorage(36161, 34041, M.width, M.height);
      r.framebufferRenderbuffer(36160, 33306, 36161, T);
    } else {
      const V = M.texture, st = s.convert(V.format), ot = s.convert(V.type), Lt = b(V.internalFormat, st, ot);
      if (O) {
        const gt = wt(M);
        r.renderbufferStorageMultisample(36161, gt, Lt, M.width, M.height);
      } else
        r.renderbufferStorage(36161, Lt, M.width, M.height);
    }
    r.bindRenderbuffer(36161, null);
  }
  function Tt(T, M) {
    if (M && M.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(36160, T), !(M.depthTexture && M.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(M.depthTexture).__webglTexture || M.depthTexture.image.width !== M.width || M.depthTexture.image.height !== M.height) && (M.depthTexture.image.width = M.width, M.depthTexture.image.height = M.height, M.depthTexture.needsUpdate = !0), P(M.depthTexture, 0);
    const V = n.get(M.depthTexture).__webglTexture;
    if (M.depthTexture.format === 1026)
      r.framebufferTexture2D(36160, 36096, 3553, V, 0);
    else if (M.depthTexture.format === 1027)
      r.framebufferTexture2D(36160, 33306, 3553, V, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function pt(T) {
    const M = n.get(T), O = T.isWebGLCubeRenderTarget === !0;
    if (T.depthTexture) {
      if (O) throw new Error("target.depthTexture not supported in Cube render targets");
      Tt(M.__webglFramebuffer, T);
    } else if (O) {
      M.__webglDepthbuffer = [];
      for (let V = 0; V < 6; V++)
        e.bindFramebuffer(36160, M.__webglFramebuffer[V]), M.__webglDepthbuffer[V] = r.createRenderbuffer(), Ct(M.__webglDepthbuffer[V], T, !1);
    } else
      e.bindFramebuffer(36160, M.__webglFramebuffer), M.__webglDepthbuffer = r.createRenderbuffer(), Ct(M.__webglDepthbuffer, T, !1);
    e.bindFramebuffer(36160, null);
  }
  function dt(T) {
    const M = T.texture, O = n.get(T), V = n.get(M);
    T.addEventListener("dispose", I), V.__webglTexture = r.createTexture(), V.__version = M.version, a.memory.textures++;
    const st = T.isWebGLCubeRenderTarget === !0, ot = T.isWebGLMultisampleRenderTarget === !0, Lt = M.isDataTexture3D || M.isDataTexture2DArray, gt = g(T) || o;
    if (o && M.format === 1022 && (M.type === 1015 || M.type === 1016) && (M.format = 1023, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), st) {
      O.__webglFramebuffer = [];
      for (let L = 0; L < 6; L++)
        O.__webglFramebuffer[L] = r.createFramebuffer();
    } else if (O.__webglFramebuffer = r.createFramebuffer(), ot)
      if (o) {
        O.__webglMultisampledFramebuffer = r.createFramebuffer(), O.__webglColorRenderbuffer = r.createRenderbuffer(), r.bindRenderbuffer(36161, O.__webglColorRenderbuffer);
        const L = s.convert(M.format), J = s.convert(M.type), tt = b(M.internalFormat, L, J), ht = wt(T);
        r.renderbufferStorageMultisample(36161, ht, tt, T.width, T.height), e.bindFramebuffer(36160, O.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(36160, 36064, 36161, O.__webglColorRenderbuffer), r.bindRenderbuffer(36161, null), T.depthBuffer && (O.__webglDepthRenderbuffer = r.createRenderbuffer(), Ct(O.__webglDepthRenderbuffer, T, !0)), e.bindFramebuffer(36160, null);
      } else
        console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
    if (st) {
      e.bindTexture(34067, V.__webglTexture), $(34067, M, gt);
      for (let L = 0; L < 6; L++)
        G(O.__webglFramebuffer[L], T, 36064, 34069 + L);
      w(M, gt) && E(34067, M, T.width, T.height), e.bindTexture(34067, null);
    } else {
      let L = 3553;
      Lt && (o ? L = M.isDataTexture3D ? 32879 : 35866 : console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")), e.bindTexture(L, V.__webglTexture), $(L, M, gt), G(O.__webglFramebuffer, T, 36064, L), w(M, gt) && E(3553, M, T.width, T.height), e.bindTexture(3553, null);
    }
    T.depthBuffer && pt(T);
  }
  function St(T) {
    const M = T.texture, O = g(T) || o;
    if (w(M, O)) {
      const V = T.isWebGLCubeRenderTarget ? 34067 : 3553, st = n.get(M).__webglTexture;
      e.bindTexture(V, st), E(V, M, T.width, T.height), e.bindTexture(V, null);
    }
  }
  function Mt(T) {
    if (T.isWebGLMultisampleRenderTarget)
      if (o) {
        const M = T.width, O = T.height;
        let V = 16384;
        T.depthBuffer && (V |= 256), T.stencilBuffer && (V |= 1024);
        const st = n.get(T);
        e.bindFramebuffer(36008, st.__webglMultisampledFramebuffer), e.bindFramebuffer(36009, st.__webglFramebuffer), r.blitFramebuffer(0, 0, M, O, 0, 0, M, O, V, 9728), e.bindFramebuffer(36008, null), e.bindFramebuffer(36009, st.__webglMultisampledFramebuffer);
      } else
        console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
  }
  function wt(T) {
    return o && T.isWebGLMultisampleRenderTarget ? Math.min(h, T.samples) : 0;
  }
  function j(T) {
    const M = a.render.frame;
    u.get(T) !== M && (u.set(T, M), T.update());
  }
  let Q = !1, nt = !1;
  function lt(T, M) {
    T && T.isWebGLRenderTarget && (Q === !1 && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), Q = !0), T = T.texture), P(T, M);
  }
  function rt(T, M) {
    T && T.isWebGLCubeRenderTarget && (nt === !1 && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), nt = !0), T = T.texture), k(T, M);
  }
  this.allocateTextureUnit = A, this.resetTextureUnits = F, this.setTexture2D = P, this.setTexture2DArray = D, this.setTexture3D = C, this.setTextureCube = k, this.setupRenderTarget = dt, this.updateRenderTargetMipmap = St, this.updateMultisampleRenderTarget = Mt, this.safeSetTexture2D = lt, this.safeSetTextureCube = rt;
}
function $u(r, t, e) {
  const n = e.isWebGL2;
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
      return n ? 5131 : (a = t.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
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
      if (a = t.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (s === 33776) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === 33777) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === 33778) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === 33779) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === 35840 || s === 35841 || s === 35842 || s === 35843)
      if (a = t.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (s === 35840) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === 35841) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === 35842) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === 35843) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === 36196)
      return a = t.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if ((s === 37492 || s === 37496) && (a = t.get("WEBGL_compressed_texture_etc"), a !== null)) {
      if (s === 37492) return a.COMPRESSED_RGB8_ETC2;
      if (s === 37496) return a.COMPRESSED_RGBA8_ETC2_EAC;
    }
    if (s === 37808 || s === 37809 || s === 37810 || s === 37811 || s === 37812 || s === 37813 || s === 37814 || s === 37815 || s === 37816 || s === 37817 || s === 37818 || s === 37819 || s === 37820 || s === 37821 || s === 37840 || s === 37841 || s === 37842 || s === 37843 || s === 37844 || s === 37845 || s === 37846 || s === 37847 || s === 37848 || s === 37849 || s === 37850 || s === 37851 || s === 37852 || s === 37853)
      return a = t.get("WEBGL_compressed_texture_astc"), a !== null ? s : null;
    if (s === 36492)
      return a = t.get("EXT_texture_compression_bptc"), a !== null ? s : null;
    if (s === 1020)
      return n ? 34042 : (a = t.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null);
  }
  return { convert: i };
}
class Wa extends ue {
  constructor(t = []) {
    super(), this.cameras = t;
  }
}
Wa.prototype.isArrayCamera = !0;
class Zt extends At {
  constructor() {
    super(), this.type = "Group";
  }
}
Zt.prototype.isGroup = !0;
const Qu = { type: "move" };
class Tr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Zt(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Zt(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new S(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new S()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Zt(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new S(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new S()), this._grip;
  }
  dispatchEvent(t) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this;
  }
  disconnect(t) {
    return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(t, e, n) {
    let i = null, s = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred")
      if (o !== null && (i = e.getPose(t.targetRaySpace, n), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Qu))), c && t.hand) {
        a = !0;
        for (const x of t.hand.values()) {
          const y = e.getJointPose(x, n);
          if (c.joints[x.jointName] === void 0) {
            const m = new Zt();
            m.matrixAutoUpdate = !1, m.visible = !1, c.joints[x.jointName] = m, c.add(m);
          }
          const g = c.joints[x.jointName];
          y !== null && (g.matrix.fromArray(y.transform.matrix), g.matrix.decompose(g.position, g.rotation, g.scale), g.jointRadius = y.radius), g.visible = y !== null;
        }
        const d = c.joints["index-finger-tip"], h = c.joints["thumb-tip"], u = d.position.distanceTo(h.position), f = 0.02, p = 5e-3;
        c.inputState.pinching && u > f + p ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: t.handedness,
          target: this
        })) : !c.inputState.pinching && u <= f - p && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: t.handedness,
          target: this
        }));
      } else
        l !== null && t.gripSpace && (s = e.getPose(t.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
    return o !== null && (o.visible = i !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this;
  }
}
class Ku extends hn {
  constructor(t, e) {
    super();
    const n = this, i = t.state;
    let s = null, a = 1, o = null, l = "local-floor", c = null;
    const d = [], h = /* @__PURE__ */ new Map(), u = new ue();
    u.layers.enable(1), u.viewport = new Bt();
    const f = new ue();
    f.layers.enable(2), f.viewport = new Bt();
    const p = [u, f], x = new Wa();
    x.layers.enable(1), x.layers.enable(2);
    let y = null, g = null;
    this.enabled = !1, this.isPresenting = !1, this.getController = function(F) {
      let A = d[F];
      return A === void 0 && (A = new Tr(), d[F] = A), A.getTargetRaySpace();
    }, this.getControllerGrip = function(F) {
      let A = d[F];
      return A === void 0 && (A = new Tr(), d[F] = A), A.getGripSpace();
    }, this.getHand = function(F) {
      let A = d[F];
      return A === void 0 && (A = new Tr(), d[F] = A), A.getHandSpace();
    };
    function m(F) {
      const A = h.get(F.inputSource);
      A && A.dispatchEvent({ type: F.type, data: F.inputSource });
    }
    function w() {
      h.forEach(function(F, A) {
        F.disconnect(A);
      }), h.clear(), y = null, g = null, i.bindXRFramebuffer(null), t.setRenderTarget(t.getRenderTarget()), W.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(F) {
      a = F, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(F) {
      l = F, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return o;
    }, this.getSession = function() {
      return s;
    }, this.setSession = async function(F) {
      if (s = F, s !== null) {
        s.addEventListener("select", m), s.addEventListener("selectstart", m), s.addEventListener("selectend", m), s.addEventListener("squeeze", m), s.addEventListener("squeezestart", m), s.addEventListener("squeezeend", m), s.addEventListener("end", w), s.addEventListener("inputsourceschange", E);
        const A = e.getContextAttributes();
        A.xrCompatible !== !0 && await e.makeXRCompatible();
        const P = {
          antialias: A.antialias,
          alpha: A.alpha,
          depth: A.depth,
          stencil: A.stencil,
          framebufferScaleFactor: a
        }, D = new XRWebGLLayer(s, e, P);
        s.updateRenderState({ baseLayer: D }), o = await s.requestReferenceSpace(l), W.setContext(s), W.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    };
    function E(F) {
      const A = s.inputSources;
      for (let P = 0; P < d.length; P++)
        h.set(A[P], d[P]);
      for (let P = 0; P < F.removed.length; P++) {
        const D = F.removed[P], C = h.get(D);
        C && (C.dispatchEvent({ type: "disconnected", data: D }), h.delete(D));
      }
      for (let P = 0; P < F.added.length; P++) {
        const D = F.added[P], C = h.get(D);
        C && C.dispatchEvent({ type: "connected", data: D });
      }
    }
    const b = new S(), _ = new S();
    function R(F, A, P) {
      b.setFromMatrixPosition(A.matrixWorld), _.setFromMatrixPosition(P.matrixWorld);
      const D = b.distanceTo(_), C = A.projectionMatrix.elements, k = P.projectionMatrix.elements, Y = C[14] / (C[10] - 1), X = C[14] / (C[10] + 1), $ = (C[9] + 1) / C[5], K = (C[9] - 1) / C[5], ct = (C[8] - 1) / C[0], ft = (k[8] + 1) / k[0], G = Y * ct, Ct = Y * ft, Tt = D / (-ct + ft), pt = Tt * -ct;
      A.matrixWorld.decompose(F.position, F.quaternion, F.scale), F.translateX(pt), F.translateZ(Tt), F.matrixWorld.compose(F.position, F.quaternion, F.scale), F.matrixWorldInverse.copy(F.matrixWorld).invert();
      const dt = Y + Tt, St = X + Tt, Mt = G - pt, wt = Ct + (D - pt), j = $ * X / St * dt, Q = K * X / St * dt;
      F.projectionMatrix.makePerspective(Mt, wt, j, Q, dt, St);
    }
    function I(F, A) {
      A === null ? F.matrixWorld.copy(F.matrix) : F.matrixWorld.multiplyMatrices(A.matrixWorld, F.matrix), F.matrixWorldInverse.copy(F.matrixWorld).invert();
    }
    this.getCamera = function(F) {
      x.near = f.near = u.near = F.near, x.far = f.far = u.far = F.far, (y !== x.near || g !== x.far) && (s.updateRenderState({
        depthNear: x.near,
        depthFar: x.far
      }), y = x.near, g = x.far);
      const A = F.parent, P = x.cameras;
      I(x, A);
      for (let C = 0; C < P.length; C++)
        I(P[C], A);
      F.matrixWorld.copy(x.matrixWorld), F.matrix.copy(x.matrix), F.matrix.decompose(F.position, F.quaternion, F.scale);
      const D = F.children;
      for (let C = 0, k = D.length; C < k; C++)
        D[C].updateMatrixWorld(!0);
      return P.length === 2 ? R(x, u, f) : x.projectionMatrix.copy(u.projectionMatrix), x;
    };
    let B = null;
    function U(F, A) {
      if (c = A.getViewerPose(o), c !== null) {
        const D = c.views, C = s.renderState.baseLayer;
        i.bindXRFramebuffer(C.framebuffer);
        let k = !1;
        D.length !== x.cameras.length && (x.cameras.length = 0, k = !0);
        for (let Y = 0; Y < D.length; Y++) {
          const X = D[Y], $ = C.getViewport(X), K = p[Y];
          K.matrix.fromArray(X.transform.matrix), K.projectionMatrix.fromArray(X.projectionMatrix), K.viewport.set($.x, $.y, $.width, $.height), Y === 0 && x.matrix.copy(K.matrix), k === !0 && x.cameras.push(K);
        }
      }
      const P = s.inputSources;
      for (let D = 0; D < d.length; D++) {
        const C = d[D], k = P[D];
        C.update(k, A, o);
      }
      B && B(F, A);
    }
    const W = new Ca();
    W.setAnimationLoop(U), this.setAnimationLoop = function(F) {
      B = F;
    }, this.dispose = function() {
    };
  }
}
function td(r) {
  function t(g, m) {
    g.fogColor.value.copy(m.color), m.isFog ? (g.fogNear.value = m.near, g.fogFar.value = m.far) : m.isFogExp2 && (g.fogDensity.value = m.density);
  }
  function e(g, m, w, E) {
    m.isMeshBasicMaterial ? n(g, m) : m.isMeshLambertMaterial ? (n(g, m), l(g, m)) : m.isMeshToonMaterial ? (n(g, m), d(g, m)) : m.isMeshPhongMaterial ? (n(g, m), c(g, m)) : m.isMeshStandardMaterial ? (n(g, m), m.isMeshPhysicalMaterial ? u(g, m) : h(g, m)) : m.isMeshMatcapMaterial ? (n(g, m), f(g, m)) : m.isMeshDepthMaterial ? (n(g, m), p(g, m)) : m.isMeshDistanceMaterial ? (n(g, m), x(g, m)) : m.isMeshNormalMaterial ? (n(g, m), y(g, m)) : m.isLineBasicMaterial ? (i(g, m), m.isLineDashedMaterial && s(g, m)) : m.isPointsMaterial ? a(g, m, w, E) : m.isSpriteMaterial ? o(g, m) : m.isShadowMaterial ? (g.color.value.copy(m.color), g.opacity.value = m.opacity) : m.isShaderMaterial && (m.uniformsNeedUpdate = !1);
  }
  function n(g, m) {
    g.opacity.value = m.opacity, m.color && g.diffuse.value.copy(m.color), m.emissive && g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity), m.map && (g.map.value = m.map), m.alphaMap && (g.alphaMap.value = m.alphaMap), m.specularMap && (g.specularMap.value = m.specularMap);
    const w = r.get(m).envMap;
    if (w) {
      g.envMap.value = w, g.flipEnvMap.value = w.isCubeTexture && w._needsFlipEnvMap ? -1 : 1, g.reflectivity.value = m.reflectivity, g.refractionRatio.value = m.refractionRatio;
      const _ = r.get(w).__maxMipLevel;
      _ !== void 0 && (g.maxMipLevel.value = _);
    }
    m.lightMap && (g.lightMap.value = m.lightMap, g.lightMapIntensity.value = m.lightMapIntensity), m.aoMap && (g.aoMap.value = m.aoMap, g.aoMapIntensity.value = m.aoMapIntensity);
    let E;
    m.map ? E = m.map : m.specularMap ? E = m.specularMap : m.displacementMap ? E = m.displacementMap : m.normalMap ? E = m.normalMap : m.bumpMap ? E = m.bumpMap : m.roughnessMap ? E = m.roughnessMap : m.metalnessMap ? E = m.metalnessMap : m.alphaMap ? E = m.alphaMap : m.emissiveMap ? E = m.emissiveMap : m.clearcoatMap ? E = m.clearcoatMap : m.clearcoatNormalMap ? E = m.clearcoatNormalMap : m.clearcoatRoughnessMap && (E = m.clearcoatRoughnessMap), E !== void 0 && (E.isWebGLRenderTarget && (E = E.texture), E.matrixAutoUpdate === !0 && E.updateMatrix(), g.uvTransform.value.copy(E.matrix));
    let b;
    m.aoMap ? b = m.aoMap : m.lightMap && (b = m.lightMap), b !== void 0 && (b.isWebGLRenderTarget && (b = b.texture), b.matrixAutoUpdate === !0 && b.updateMatrix(), g.uv2Transform.value.copy(b.matrix));
  }
  function i(g, m) {
    g.diffuse.value.copy(m.color), g.opacity.value = m.opacity;
  }
  function s(g, m) {
    g.dashSize.value = m.dashSize, g.totalSize.value = m.dashSize + m.gapSize, g.scale.value = m.scale;
  }
  function a(g, m, w, E) {
    g.diffuse.value.copy(m.color), g.opacity.value = m.opacity, g.size.value = m.size * w, g.scale.value = E * 0.5, m.map && (g.map.value = m.map), m.alphaMap && (g.alphaMap.value = m.alphaMap);
    let b;
    m.map ? b = m.map : m.alphaMap && (b = m.alphaMap), b !== void 0 && (b.matrixAutoUpdate === !0 && b.updateMatrix(), g.uvTransform.value.copy(b.matrix));
  }
  function o(g, m) {
    g.diffuse.value.copy(m.color), g.opacity.value = m.opacity, g.rotation.value = m.rotation, m.map && (g.map.value = m.map), m.alphaMap && (g.alphaMap.value = m.alphaMap);
    let w;
    m.map ? w = m.map : m.alphaMap && (w = m.alphaMap), w !== void 0 && (w.matrixAutoUpdate === !0 && w.updateMatrix(), g.uvTransform.value.copy(w.matrix));
  }
  function l(g, m) {
    m.emissiveMap && (g.emissiveMap.value = m.emissiveMap);
  }
  function c(g, m) {
    g.specular.value.copy(m.specular), g.shininess.value = Math.max(m.shininess, 1e-4), m.emissiveMap && (g.emissiveMap.value = m.emissiveMap), m.bumpMap && (g.bumpMap.value = m.bumpMap, g.bumpScale.value = m.bumpScale, m.side === 1 && (g.bumpScale.value *= -1)), m.normalMap && (g.normalMap.value = m.normalMap, g.normalScale.value.copy(m.normalScale), m.side === 1 && g.normalScale.value.negate()), m.displacementMap && (g.displacementMap.value = m.displacementMap, g.displacementScale.value = m.displacementScale, g.displacementBias.value = m.displacementBias);
  }
  function d(g, m) {
    m.gradientMap && (g.gradientMap.value = m.gradientMap), m.emissiveMap && (g.emissiveMap.value = m.emissiveMap), m.bumpMap && (g.bumpMap.value = m.bumpMap, g.bumpScale.value = m.bumpScale, m.side === 1 && (g.bumpScale.value *= -1)), m.normalMap && (g.normalMap.value = m.normalMap, g.normalScale.value.copy(m.normalScale), m.side === 1 && g.normalScale.value.negate()), m.displacementMap && (g.displacementMap.value = m.displacementMap, g.displacementScale.value = m.displacementScale, g.displacementBias.value = m.displacementBias);
  }
  function h(g, m) {
    g.roughness.value = m.roughness, g.metalness.value = m.metalness, m.roughnessMap && (g.roughnessMap.value = m.roughnessMap), m.metalnessMap && (g.metalnessMap.value = m.metalnessMap), m.emissiveMap && (g.emissiveMap.value = m.emissiveMap), m.bumpMap && (g.bumpMap.value = m.bumpMap, g.bumpScale.value = m.bumpScale, m.side === 1 && (g.bumpScale.value *= -1)), m.normalMap && (g.normalMap.value = m.normalMap, g.normalScale.value.copy(m.normalScale), m.side === 1 && g.normalScale.value.negate()), m.displacementMap && (g.displacementMap.value = m.displacementMap, g.displacementScale.value = m.displacementScale, g.displacementBias.value = m.displacementBias), r.get(m).envMap && (g.envMapIntensity.value = m.envMapIntensity);
  }
  function u(g, m) {
    h(g, m), g.reflectivity.value = m.reflectivity, g.clearcoat.value = m.clearcoat, g.clearcoatRoughness.value = m.clearcoatRoughness, m.sheen && g.sheen.value.copy(m.sheen), m.clearcoatMap && (g.clearcoatMap.value = m.clearcoatMap), m.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap), m.clearcoatNormalMap && (g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale), g.clearcoatNormalMap.value = m.clearcoatNormalMap, m.side === 1 && g.clearcoatNormalScale.value.negate()), g.transmission.value = m.transmission, m.transmissionMap && (g.transmissionMap.value = m.transmissionMap);
  }
  function f(g, m) {
    m.matcap && (g.matcap.value = m.matcap), m.bumpMap && (g.bumpMap.value = m.bumpMap, g.bumpScale.value = m.bumpScale, m.side === 1 && (g.bumpScale.value *= -1)), m.normalMap && (g.normalMap.value = m.normalMap, g.normalScale.value.copy(m.normalScale), m.side === 1 && g.normalScale.value.negate()), m.displacementMap && (g.displacementMap.value = m.displacementMap, g.displacementScale.value = m.displacementScale, g.displacementBias.value = m.displacementBias);
  }
  function p(g, m) {
    m.displacementMap && (g.displacementMap.value = m.displacementMap, g.displacementScale.value = m.displacementScale, g.displacementBias.value = m.displacementBias);
  }
  function x(g, m) {
    m.displacementMap && (g.displacementMap.value = m.displacementMap, g.displacementScale.value = m.displacementScale, g.displacementBias.value = m.displacementBias), g.referencePosition.value.copy(m.referencePosition), g.nearDistance.value = m.nearDistance, g.farDistance.value = m.farDistance;
  }
  function y(g, m) {
    m.bumpMap && (g.bumpMap.value = m.bumpMap, g.bumpScale.value = m.bumpScale, m.side === 1 && (g.bumpScale.value *= -1)), m.normalMap && (g.normalMap.value = m.normalMap, g.normalScale.value.copy(m.normalScale), m.side === 1 && g.normalScale.value.negate()), m.displacementMap && (g.displacementMap.value = m.displacementMap, g.displacementScale.value = m.displacementScale, g.displacementBias.value = m.displacementBias);
  }
  return {
    refreshFogUniforms: t,
    refreshMaterialUniforms: e
  };
}
function ed() {
  const r = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
  return r.style.display = "block", r;
}
function zt(r) {
  r = r || {};
  const t = r.canvas !== void 0 ? r.canvas : ed(), e = r.context !== void 0 ? r.context : null, n = r.alpha !== void 0 ? r.alpha : !1, i = r.depth !== void 0 ? r.depth : !0, s = r.stencil !== void 0 ? r.stencil : !0, a = r.antialias !== void 0 ? r.antialias : !1, o = r.premultipliedAlpha !== void 0 ? r.premultipliedAlpha : !0, l = r.preserveDrawingBuffer !== void 0 ? r.preserveDrawingBuffer : !1, c = r.powerPreference !== void 0 ? r.powerPreference : "default", d = r.failIfMajorPerformanceCaveat !== void 0 ? r.failIfMajorPerformanceCaveat : !1;
  let h = null, u = null;
  const f = [], p = [];
  this.domElement = t, this.debug = {
    /**
     * Enables error checking and reporting when shader programs are being compiled
     * @type {boolean}
     */
    checkShaderErrors: !0
  }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = 3e3, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1;
  const x = this;
  let y = !1, g = 0, m = 0, w = null, E = -1, b = null;
  const _ = new Bt(), R = new Bt();
  let I = null, B = t.width, U = t.height, W = 1, F = null, A = null;
  const P = new Bt(0, 0, B, U), D = new Bt(0, 0, B, U);
  let C = !1;
  const k = new Wi();
  let Y = !1, X = !1;
  const $ = new ut(), K = new S(), ct = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
  function ft() {
    return w === null ? W : 1;
  }
  let G = e;
  function Ct(v, z) {
    for (let N = 0; N < v.length; N++) {
      const H = v[N], it = t.getContext(H, z);
      if (it !== null) return it;
    }
    return null;
  }
  try {
    const v = {
      alpha: n,
      depth: i,
      stencil: s,
      antialias: a,
      premultipliedAlpha: o,
      preserveDrawingBuffer: l,
      powerPreference: c,
      failIfMajorPerformanceCaveat: d
    };
    if (t.addEventListener("webglcontextlost", mt, !1), t.addEventListener("webglcontextrestored", Dt, !1), G === null) {
      const z = ["webgl2", "webgl", "experimental-webgl"];
      if (x.isWebGL1Renderer === !0 && z.shift(), G = Ct(z, v), G === null)
        throw Ct(z) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    }
    G.getShaderPrecisionFormat === void 0 && (G.getShaderPrecisionFormat = function() {
      return { rangeMin: 1, rangeMax: 1, precision: 1 };
    });
  } catch (v) {
    throw console.error("THREE.WebGLRenderer: " + v.message), v;
  }
  let Tt, pt, dt, St, Mt, wt, j, Q, nt, lt, rt, T, M, O, V, st, ot, Lt, gt, L, J, tt;
  function ht() {
    Tt = new bh(G), pt = new vh(G, Tt, r), Tt.init(pt), J = new $u(G, Tt, pt), dt = new Zu(G, Tt, pt), St = new Eh(), Mt = new zu(), wt = new Ju(G, Tt, dt, Mt, pt, J, St), j = new wh(x), Q = new Zo(G, pt), tt = new yh(G, Tt, Q, pt), nt = new Sh(G, Q, St, tt), lt = new Ch(G, nt, Q, St), Lt = new Rh(G), V = new Mh(Mt), rt = new Bu(x, j, Tt, pt, tt, V), T = new td(Mt), M = new Hu(Mt), O = new Xu(Tt, pt), ot = new xh(x, j, dt, lt, o), st = new Va(x, lt, pt), gt = new _h(G, Tt, St, pt), L = new Th(G, Tt, St, pt), St.programs = rt.programs, x.capabilities = pt, x.extensions = Tt, x.properties = Mt, x.renderLists = M, x.shadowMap = st, x.state = dt, x.info = St;
  }
  ht();
  const q = new Ku(x, G);
  this.xr = q, this.getContext = function() {
    return G;
  }, this.getContextAttributes = function() {
    return G.getContextAttributes();
  }, this.forceContextLoss = function() {
    const v = Tt.get("WEBGL_lose_context");
    v && v.loseContext();
  }, this.forceContextRestore = function() {
    const v = Tt.get("WEBGL_lose_context");
    v && v.restoreContext();
  }, this.getPixelRatio = function() {
    return W;
  }, this.setPixelRatio = function(v) {
    v !== void 0 && (W = v, this.setSize(B, U, !1));
  }, this.getSize = function(v) {
    return v === void 0 && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), v = new Z()), v.set(B, U);
  }, this.setSize = function(v, z, N) {
    if (q.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    B = v, U = z, t.width = Math.floor(v * W), t.height = Math.floor(z * W), N !== !1 && (t.style.width = v + "px", t.style.height = z + "px"), this.setViewport(0, 0, v, z);
  }, this.getDrawingBufferSize = function(v) {
    return v === void 0 && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), v = new Z()), v.set(B * W, U * W).floor();
  }, this.setDrawingBufferSize = function(v, z, N) {
    B = v, U = z, W = N, t.width = Math.floor(v * N), t.height = Math.floor(z * N), this.setViewport(0, 0, v, z);
  }, this.getCurrentViewport = function(v) {
    return v === void 0 && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), v = new Bt()), v.copy(_);
  }, this.getViewport = function(v) {
    return v.copy(P);
  }, this.setViewport = function(v, z, N, H) {
    v.isVector4 ? P.set(v.x, v.y, v.z, v.w) : P.set(v, z, N, H), dt.viewport(_.copy(P).multiplyScalar(W).floor());
  }, this.getScissor = function(v) {
    return v.copy(D);
  }, this.setScissor = function(v, z, N, H) {
    v.isVector4 ? D.set(v.x, v.y, v.z, v.w) : D.set(v, z, N, H), dt.scissor(R.copy(D).multiplyScalar(W).floor());
  }, this.getScissorTest = function() {
    return C;
  }, this.setScissorTest = function(v) {
    dt.setScissorTest(C = v);
  }, this.setOpaqueSort = function(v) {
    F = v;
  }, this.setTransparentSort = function(v) {
    A = v;
  }, this.getClearColor = function(v) {
    return v === void 0 && (console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"), v = new at()), v.copy(ot.getClearColor());
  }, this.setClearColor = function() {
    ot.setClearColor.apply(ot, arguments);
  }, this.getClearAlpha = function() {
    return ot.getClearAlpha();
  }, this.setClearAlpha = function() {
    ot.setClearAlpha.apply(ot, arguments);
  }, this.clear = function(v, z, N) {
    let H = 0;
    (v === void 0 || v) && (H |= 16384), (z === void 0 || z) && (H |= 256), (N === void 0 || N) && (H |= 1024), G.clear(H);
  }, this.clearColor = function() {
    this.clear(!0, !1, !1);
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1);
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0);
  }, this.dispose = function() {
    t.removeEventListener("webglcontextlost", mt, !1), t.removeEventListener("webglcontextrestored", Dt, !1), M.dispose(), O.dispose(), Mt.dispose(), j.dispose(), lt.dispose(), tt.dispose(), q.dispose(), q.removeEventListener("sessionstart", os), q.removeEventListener("sessionend", ls), en.stop();
  };
  function mt(v) {
    v.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), y = !0;
  }
  function Dt() {
    console.log("THREE.WebGLRenderer: Context Restored."), y = !1;
    const v = St.autoReset, z = st.enabled, N = st.autoUpdate, H = st.needsUpdate, it = st.type;
    ht(), St.autoReset = v, st.enabled = z, st.autoUpdate = N, st.needsUpdate = H, st.type = it;
  }
  function qt(v) {
    const z = v.target;
    z.removeEventListener("dispose", qt), tn(z);
  }
  function tn(v) {
    Vt(v), Mt.remove(v);
  }
  function Vt(v) {
    const z = Mt.get(v).programs;
    z !== void 0 && z.forEach(function(N) {
      rt.releaseProgram(N);
    });
  }
  function Pe(v, z) {
    v.render(function(N) {
      x.renderBufferImmediate(N, z);
    });
  }
  this.renderBufferImmediate = function(v, z) {
    tt.initAttributes();
    const N = Mt.get(v);
    v.hasPositions && !N.position && (N.position = G.createBuffer()), v.hasNormals && !N.normal && (N.normal = G.createBuffer()), v.hasUvs && !N.uv && (N.uv = G.createBuffer()), v.hasColors && !N.color && (N.color = G.createBuffer());
    const H = z.getAttributes();
    v.hasPositions && (G.bindBuffer(34962, N.position), G.bufferData(34962, v.positionArray, 35048), tt.enableAttribute(H.position), G.vertexAttribPointer(H.position, 3, 5126, !1, 0, 0)), v.hasNormals && (G.bindBuffer(34962, N.normal), G.bufferData(34962, v.normalArray, 35048), tt.enableAttribute(H.normal), G.vertexAttribPointer(H.normal, 3, 5126, !1, 0, 0)), v.hasUvs && (G.bindBuffer(34962, N.uv), G.bufferData(34962, v.uvArray, 35048), tt.enableAttribute(H.uv), G.vertexAttribPointer(H.uv, 2, 5126, !1, 0, 0)), v.hasColors && (G.bindBuffer(34962, N.color), G.bufferData(34962, v.colorArray, 35048), tt.enableAttribute(H.color), G.vertexAttribPointer(H.color, 3, 5126, !1, 0, 0)), tt.disableUnusedAttributes(), G.drawArrays(4, 0, v.count), v.count = 0;
  }, this.renderBufferDirect = function(v, z, N, H, it, Et) {
    z === null && (z = ct);
    const xt = it.isMesh && it.matrixWorld.determinant() < 0, vt = fs(v, z, H, it);
    dt.setMaterial(H, xt);
    let Ut = N.index;
    const _t = N.attributes.position;
    if (Ut === null) {
      if (_t === void 0 || _t.count === 0) return;
    } else if (Ut.count === 0)
      return;
    let Rt = 1;
    H.wireframe === !0 && (Ut = nt.getWireframeAttribute(N), Rt = 2), (H.morphTargets || H.morphNormals) && Lt.update(it, N, H, vt), tt.setup(it, H, vt, N, Ut);
    let yt, Ft = gt;
    Ut !== null && (yt = Q.get(Ut), Ft = L, Ft.setIndex(yt));
    const be = Ut !== null ? Ut.count : _t.count, oe = N.drawRange.start * Rt, nn = N.drawRange.count * Rt, Yt = Et !== null ? Et.start * Rt : 0, rn = Et !== null ? Et.count * Rt : 1 / 0, Xt = Math.max(oe, Yt), Qi = Math.min(be, oe + nn, Yt + rn) - 1, he = Math.max(0, Qi - Xt + 1);
    if (he !== 0) {
      if (it.isMesh)
        H.wireframe === !0 ? (dt.setLineWidth(H.wireframeLinewidth * ft()), Ft.setMode(1)) : Ft.setMode(4);
      else if (it.isLine) {
        let De = H.linewidth;
        De === void 0 && (De = 1), dt.setLineWidth(De * ft()), it.isLineSegments ? Ft.setMode(1) : it.isLineLoop ? Ft.setMode(2) : Ft.setMode(3);
      } else it.isPoints ? Ft.setMode(0) : it.isSprite && Ft.setMode(4);
      if (it.isInstancedMesh)
        Ft.renderInstances(Xt, he, it.count);
      else if (N.isInstancedBufferGeometry) {
        const De = Math.min(N.instanceCount, N._maxInstanceCount);
        Ft.renderInstances(Xt, he, De);
      } else
        Ft.render(Xt, he);
    }
  }, this.compile = function(v, z) {
    u = O.get(v), u.init(), v.traverseVisible(function(N) {
      N.isLight && N.layers.test(z.layers) && (u.pushLight(N), N.castShadow && u.pushShadow(N));
    }), u.setupLights(), v.traverse(function(N) {
      const H = N.material;
      if (H)
        if (Array.isArray(H))
          for (let it = 0; it < H.length; it++) {
            const Et = H[it];
            $i(Et, v, N);
          }
        else
          $i(H, v, N);
    });
  };
  let ye = null;
  function bo(v) {
    ye && ye(v);
  }
  function os() {
    en.stop();
  }
  function ls() {
    en.start();
  }
  const en = new Ca();
  en.setAnimationLoop(bo), typeof window < "u" && en.setContext(window), this.setAnimationLoop = function(v) {
    ye = v, q.setAnimationLoop(v), v === null ? en.stop() : en.start();
  }, q.addEventListener("sessionstart", os), q.addEventListener("sessionend", ls), this.render = function(v, z) {
    let N, H;
    if (arguments[2] !== void 0 && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."), N = arguments[2]), arguments[3] !== void 0 && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."), H = arguments[3]), z !== void 0 && z.isCamera !== !0) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (y === !0) return;
    v.autoUpdate === !0 && v.updateMatrixWorld(), z.parent === null && z.updateMatrixWorld(), q.enabled === !0 && q.isPresenting === !0 && (z = q.getCamera(z)), v.isScene === !0 && v.onBeforeRender(x, v, z, N || w), u = O.get(v, p.length), u.init(), p.push(u), $.multiplyMatrices(z.projectionMatrix, z.matrixWorldInverse), k.setFromProjectionMatrix($), X = this.localClippingEnabled, Y = V.init(this.clippingPlanes, X, z), h = M.get(v, f.length), h.init(), f.push(h), cs(v, z, 0, x.sortObjects), h.finish(), x.sortObjects === !0 && h.sort(F, A), Y === !0 && V.beginShadows();
    const it = u.state.shadowsArray;
    st.render(it, v, z), u.setupLights(), u.setupLightsView(z), Y === !0 && V.endShadows(), this.info.autoReset === !0 && this.info.reset(), N !== void 0 && this.setRenderTarget(N), ot.render(h, v, z, H);
    const Et = h.opaque, xt = h.transparent;
    Et.length > 0 && hs(Et, v, z), xt.length > 0 && hs(xt, v, z), w !== null && (wt.updateRenderTargetMipmap(w), wt.updateMultisampleRenderTarget(w)), v.isScene === !0 && v.onAfterRender(x, v, z), dt.buffers.depth.setTest(!0), dt.buffers.depth.setMask(!0), dt.buffers.color.setMask(!0), dt.setPolygonOffset(!1), tt.resetDefaultState(), E = -1, b = null, p.pop(), p.length > 0 ? u = p[p.length - 1] : u = null, f.pop(), f.length > 0 ? h = f[f.length - 1] : h = null;
  };
  function cs(v, z, N, H) {
    if (v.visible === !1) return;
    if (v.layers.test(z.layers)) {
      if (v.isGroup)
        N = v.renderOrder;
      else if (v.isLOD)
        v.autoUpdate === !0 && v.update(z);
      else if (v.isLight)
        u.pushLight(v), v.castShadow && u.pushShadow(v);
      else if (v.isSprite) {
        if (!v.frustumCulled || k.intersectsSprite(v)) {
          H && K.setFromMatrixPosition(v.matrixWorld).applyMatrix4($);
          const xt = lt.update(v), vt = v.material;
          vt.visible && h.push(v, xt, vt, N, K.z, null);
        }
      } else if (v.isImmediateRenderObject)
        H && K.setFromMatrixPosition(v.matrixWorld).applyMatrix4($), h.push(v, null, v.material, N, K.z, null);
      else if ((v.isMesh || v.isLine || v.isPoints) && (v.isSkinnedMesh && v.skeleton.frame !== St.render.frame && (v.skeleton.update(), v.skeleton.frame = St.render.frame), !v.frustumCulled || k.intersectsObject(v))) {
        H && K.setFromMatrixPosition(v.matrixWorld).applyMatrix4($);
        const xt = lt.update(v), vt = v.material;
        if (Array.isArray(vt)) {
          const Ut = xt.groups;
          for (let _t = 0, Rt = Ut.length; _t < Rt; _t++) {
            const yt = Ut[_t], Ft = vt[yt.materialIndex];
            Ft && Ft.visible && h.push(v, xt, Ft, N, K.z, yt);
          }
        } else vt.visible && h.push(v, xt, vt, N, K.z, null);
      }
    }
    const Et = v.children;
    for (let xt = 0, vt = Et.length; xt < vt; xt++)
      cs(Et[xt], z, N, H);
  }
  function hs(v, z, N) {
    const H = z.isScene === !0 ? z.overrideMaterial : null;
    for (let it = 0, Et = v.length; it < Et; it++) {
      const xt = v[it], vt = xt.object, Ut = xt.geometry, _t = H === null ? xt.material : H, Rt = xt.group;
      if (N.isArrayCamera) {
        const yt = N.cameras;
        for (let Ft = 0, be = yt.length; Ft < be; Ft++) {
          const oe = yt[Ft];
          vt.layers.test(oe.layers) && (dt.viewport(_.copy(oe.viewport)), u.setupLightsView(oe), us(vt, z, oe, Ut, _t, Rt));
        }
      } else
        us(vt, z, N, Ut, _t, Rt);
    }
  }
  function us(v, z, N, H, it, Et) {
    if (v.onBeforeRender(x, z, N, H, it, Et), v.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, v.matrixWorld), v.normalMatrix.getNormalMatrix(v.modelViewMatrix), v.isImmediateRenderObject) {
      const xt = fs(N, z, it, v);
      dt.setMaterial(it), tt.reset(), Pe(v, xt);
    } else
      x.renderBufferDirect(N, z, H, it, v, Et);
    v.onAfterRender(x, z, N, H, it, Et);
  }
  function $i(v, z, N) {
    z.isScene !== !0 && (z = ct);
    const H = Mt.get(v), it = u.state.lights, Et = u.state.shadowsArray, xt = it.state.version, vt = rt.getParameters(v, it.state, Et, z, N), Ut = rt.getProgramCacheKey(vt);
    let _t = H.programs;
    H.environment = v.isMeshStandardMaterial ? z.environment : null, H.fog = z.fog, H.envMap = j.get(v.envMap || H.environment), _t === void 0 && (v.addEventListener("dispose", qt), _t = /* @__PURE__ */ new Map(), H.programs = _t);
    let Rt = _t.get(Ut);
    if (Rt !== void 0) {
      if (H.currentProgram === Rt && H.lightsStateVersion === xt)
        return ds(v, vt), Rt;
    } else
      vt.uniforms = rt.getUniforms(v), v.onBuild(vt, x), v.onBeforeCompile(vt, x), Rt = rt.acquireProgram(vt, Ut), _t.set(Ut, Rt), H.uniforms = vt.uniforms;
    const yt = H.uniforms;
    (!v.isShaderMaterial && !v.isRawShaderMaterial || v.clipping === !0) && (yt.clippingPlanes = V.uniform), ds(v, vt), H.needsLights = To(v), H.lightsStateVersion = xt, H.needsLights && (yt.ambientLightColor.value = it.state.ambient, yt.lightProbe.value = it.state.probe, yt.directionalLights.value = it.state.directional, yt.directionalLightShadows.value = it.state.directionalShadow, yt.spotLights.value = it.state.spot, yt.spotLightShadows.value = it.state.spotShadow, yt.rectAreaLights.value = it.state.rectArea, yt.ltc_1.value = it.state.rectAreaLTC1, yt.ltc_2.value = it.state.rectAreaLTC2, yt.pointLights.value = it.state.point, yt.pointLightShadows.value = it.state.pointShadow, yt.hemisphereLights.value = it.state.hemi, yt.directionalShadowMap.value = it.state.directionalShadowMap, yt.directionalShadowMatrix.value = it.state.directionalShadowMatrix, yt.spotShadowMap.value = it.state.spotShadowMap, yt.spotShadowMatrix.value = it.state.spotShadowMatrix, yt.pointShadowMap.value = it.state.pointShadowMap, yt.pointShadowMatrix.value = it.state.pointShadowMatrix);
    const Ft = Rt.getUniforms(), be = Ze.seqWithValue(Ft.seq, yt);
    return H.currentProgram = Rt, H.uniformsList = be, Rt;
  }
  function ds(v, z) {
    const N = Mt.get(v);
    N.outputEncoding = z.outputEncoding, N.instancing = z.instancing, N.numClippingPlanes = z.numClippingPlanes, N.numIntersection = z.numClipIntersection, N.vertexAlphas = z.vertexAlphas;
  }
  function fs(v, z, N, H) {
    z.isScene !== !0 && (z = ct), wt.resetTextureUnits();
    const it = z.fog, Et = N.isMeshStandardMaterial ? z.environment : null, xt = w === null ? x.outputEncoding : w.texture.encoding, vt = j.get(N.envMap || Et), Ut = N.vertexColors === !0 && H.geometry && H.geometry.attributes.color && H.geometry.attributes.color.itemSize === 4, _t = Mt.get(N), Rt = u.state.lights;
    if (Y === !0 && (X === !0 || v !== b)) {
      const Xt = v === b && N.id === E;
      V.setState(N, v, Xt);
    }
    let yt = !1;
    N.version === _t.__version ? (_t.needsLights && _t.lightsStateVersion !== Rt.state.version || _t.outputEncoding !== xt || H.isInstancedMesh && _t.instancing === !1 || !H.isInstancedMesh && _t.instancing === !0 || _t.envMap !== vt || N.fog && _t.fog !== it || _t.numClippingPlanes !== void 0 && (_t.numClippingPlanes !== V.numPlanes || _t.numIntersection !== V.numIntersection) || _t.vertexAlphas !== Ut) && (yt = !0) : (yt = !0, _t.__version = N.version);
    let Ft = _t.currentProgram;
    yt === !0 && (Ft = $i(N, z, H));
    let be = !1, oe = !1, nn = !1;
    const Yt = Ft.getUniforms(), rn = _t.uniforms;
    if (dt.useProgram(Ft.program) && (be = !0, oe = !0, nn = !0), N.id !== E && (E = N.id, oe = !0), be || b !== v) {
      if (Yt.setValue(G, "projectionMatrix", v.projectionMatrix), pt.logarithmicDepthBuffer && Yt.setValue(
        G,
        "logDepthBufFC",
        2 / (Math.log(v.far + 1) / Math.LN2)
      ), b !== v && (b = v, oe = !0, nn = !0), N.isShaderMaterial || N.isMeshPhongMaterial || N.isMeshToonMaterial || N.isMeshStandardMaterial || N.envMap) {
        const Xt = Yt.map.cameraPosition;
        Xt !== void 0 && Xt.setValue(
          G,
          K.setFromMatrixPosition(v.matrixWorld)
        );
      }
      (N.isMeshPhongMaterial || N.isMeshToonMaterial || N.isMeshLambertMaterial || N.isMeshBasicMaterial || N.isMeshStandardMaterial || N.isShaderMaterial) && Yt.setValue(G, "isOrthographic", v.isOrthographicCamera === !0), (N.isMeshPhongMaterial || N.isMeshToonMaterial || N.isMeshLambertMaterial || N.isMeshBasicMaterial || N.isMeshStandardMaterial || N.isShaderMaterial || N.isShadowMaterial || N.skinning) && Yt.setValue(G, "viewMatrix", v.matrixWorldInverse);
    }
    if (N.skinning) {
      Yt.setOptional(G, H, "bindMatrix"), Yt.setOptional(G, H, "bindMatrixInverse");
      const Xt = H.skeleton;
      if (Xt) {
        const Qi = Xt.bones;
        if (pt.floatVertexTextures) {
          if (Xt.boneTexture === null) {
            let he = Math.sqrt(Qi.length * 4);
            he = Lo(he), he = Math.max(he, 4);
            const De = new Float32Array(he * he * 4);
            De.set(Xt.boneMatrices);
            const Eo = new Ra(De, he, he, 1023, 1015);
            Xt.boneMatrices = De, Xt.boneTexture = Eo, Xt.boneTextureSize = he;
          }
          Yt.setValue(G, "boneTexture", Xt.boneTexture, wt), Yt.setValue(G, "boneTextureSize", Xt.boneTextureSize);
        } else
          Yt.setOptional(G, Xt, "boneMatrices");
      }
    }
    return (oe || _t.receiveShadow !== H.receiveShadow) && (_t.receiveShadow = H.receiveShadow, Yt.setValue(G, "receiveShadow", H.receiveShadow)), oe && (Yt.setValue(G, "toneMappingExposure", x.toneMappingExposure), _t.needsLights && So(rn, nn), it && N.fog && T.refreshFogUniforms(rn, it), T.refreshMaterialUniforms(rn, N, W, U), Ze.upload(G, _t.uniformsList, rn, wt)), N.isShaderMaterial && N.uniformsNeedUpdate === !0 && (Ze.upload(G, _t.uniformsList, rn, wt), N.uniformsNeedUpdate = !1), N.isSpriteMaterial && Yt.setValue(G, "center", H.center), Yt.setValue(G, "modelViewMatrix", H.modelViewMatrix), Yt.setValue(G, "normalMatrix", H.normalMatrix), Yt.setValue(G, "modelMatrix", H.matrixWorld), Ft;
  }
  function So(v, z) {
    v.ambientLightColor.needsUpdate = z, v.lightProbe.needsUpdate = z, v.directionalLights.needsUpdate = z, v.directionalLightShadows.needsUpdate = z, v.pointLights.needsUpdate = z, v.pointLightShadows.needsUpdate = z, v.spotLights.needsUpdate = z, v.spotLightShadows.needsUpdate = z, v.rectAreaLights.needsUpdate = z, v.hemisphereLights.needsUpdate = z;
  }
  function To(v) {
    return v.isMeshLambertMaterial || v.isMeshToonMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isShadowMaterial || v.isShaderMaterial && v.lights === !0;
  }
  this.getActiveCubeFace = function() {
    return g;
  }, this.getActiveMipmapLevel = function() {
    return m;
  }, this.getRenderTarget = function() {
    return w;
  }, this.setRenderTarget = function(v, z = 0, N = 0) {
    w = v, g = z, m = N, v && Mt.get(v).__webglFramebuffer === void 0 && wt.setupRenderTarget(v);
    let H = null, it = !1, Et = !1;
    if (v) {
      const xt = v.texture;
      (xt.isDataTexture3D || xt.isDataTexture2DArray) && (Et = !0);
      const vt = Mt.get(v).__webglFramebuffer;
      v.isWebGLCubeRenderTarget ? (H = vt[z], it = !0) : v.isWebGLMultisampleRenderTarget ? H = Mt.get(v).__webglMultisampledFramebuffer : H = vt, _.copy(v.viewport), R.copy(v.scissor), I = v.scissorTest;
    } else
      _.copy(P).multiplyScalar(W).floor(), R.copy(D).multiplyScalar(W).floor(), I = C;
    if (dt.bindFramebuffer(36160, H), dt.viewport(_), dt.scissor(R), dt.setScissorTest(I), it) {
      const xt = Mt.get(v.texture);
      G.framebufferTexture2D(36160, 36064, 34069 + z, xt.__webglTexture, N);
    } else if (Et) {
      const xt = Mt.get(v.texture), vt = z || 0;
      G.framebufferTextureLayer(36160, 36064, xt.__webglTexture, N || 0, vt);
    }
  }, this.readRenderTargetPixels = function(v, z, N, H, it, Et, xt) {
    if (!(v && v.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    let vt = Mt.get(v).__webglFramebuffer;
    if (v.isWebGLCubeRenderTarget && xt !== void 0 && (vt = vt[xt]), vt) {
      dt.bindFramebuffer(36160, vt);
      try {
        const Ut = v.texture, _t = Ut.format, Rt = Ut.type;
        if (_t !== 1023 && J.convert(_t) !== G.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        const yt = Rt === 1016 && (Tt.has("EXT_color_buffer_half_float") || pt.isWebGL2 && Tt.has("EXT_color_buffer_float"));
        if (Rt !== 1009 && J.convert(Rt) !== G.getParameter(35738) && // Edge and Chrome Mac < 52 (#9513)
        !(Rt === 1015 && (pt.isWebGL2 || Tt.has("OES_texture_float") || Tt.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
        !yt) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        G.checkFramebufferStatus(36160) === 36053 ? z >= 0 && z <= v.width - H && N >= 0 && N <= v.height - it && G.readPixels(z, N, H, it, J.convert(_t), J.convert(Rt), Et) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
      } finally {
        const Ut = w !== null ? Mt.get(w).__webglFramebuffer : null;
        dt.bindFramebuffer(36160, Ut);
      }
    }
  }, this.copyFramebufferToTexture = function(v, z, N = 0) {
    const H = Math.pow(2, -N), it = Math.floor(z.image.width * H), Et = Math.floor(z.image.height * H), xt = J.convert(z.format);
    wt.setTexture2D(z, 0), G.copyTexImage2D(3553, N, xt, v.x, v.y, it, Et, 0), dt.unbindTexture();
  }, this.copyTextureToTexture = function(v, z, N, H = 0) {
    const it = z.image.width, Et = z.image.height, xt = J.convert(N.format), vt = J.convert(N.type);
    wt.setTexture2D(N, 0), G.pixelStorei(37440, N.flipY), G.pixelStorei(37441, N.premultiplyAlpha), G.pixelStorei(3317, N.unpackAlignment), z.isDataTexture ? G.texSubImage2D(3553, H, v.x, v.y, it, Et, xt, vt, z.image.data) : z.isCompressedTexture ? G.compressedTexSubImage2D(3553, H, v.x, v.y, z.mipmaps[0].width, z.mipmaps[0].height, xt, z.mipmaps[0].data) : G.texSubImage2D(3553, H, v.x, v.y, xt, vt, z.image), H === 0 && N.generateMipmaps && G.generateMipmap(3553), dt.unbindTexture();
  }, this.copyTextureToTexture3D = function(v, z, N, H, it = 0) {
    if (x.isWebGL1Renderer) {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      return;
    }
    const { width: Et, height: xt, data: vt } = N.image, Ut = J.convert(H.format), _t = J.convert(H.type);
    let Rt;
    if (H.isDataTexture3D)
      wt.setTexture3D(H, 0), Rt = 32879;
    else if (H.isDataTexture2DArray)
      wt.setTexture2DArray(H, 0), Rt = 35866;
    else {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
      return;
    }
    G.pixelStorei(37440, H.flipY), G.pixelStorei(37441, H.premultiplyAlpha), G.pixelStorei(3317, H.unpackAlignment);
    const yt = G.getParameter(3314), Ft = G.getParameter(32878), be = G.getParameter(3316), oe = G.getParameter(3315), nn = G.getParameter(32877);
    G.pixelStorei(3314, Et), G.pixelStorei(32878, xt), G.pixelStorei(3316, v.min.x), G.pixelStorei(3315, v.min.y), G.pixelStorei(32877, v.min.z), G.texSubImage3D(
      Rt,
      it,
      z.x,
      z.y,
      z.z,
      v.max.x - v.min.x + 1,
      v.max.y - v.min.y + 1,
      v.max.z - v.min.z + 1,
      Ut,
      _t,
      vt
    ), G.pixelStorei(3314, yt), G.pixelStorei(32878, Ft), G.pixelStorei(3316, be), G.pixelStorei(3315, oe), G.pixelStorei(32877, nn), it === 0 && H.generateMipmaps && G.generateMipmap(Rt), dt.unbindTexture();
  }, this.initTexture = function(v) {
    wt.setTexture2D(v, 0), dt.unbindTexture();
  }, this.resetState = function() {
    g = 0, m = 0, w = null, dt.reset(), tt.reset();
  }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
class nd extends zt {
}
nd.prototype.isWebGL1Renderer = !0;
class qi {
  constructor(t, e = 25e-5) {
    this.name = "", this.color = new at(t), this.density = e;
  }
  clone() {
    return new qi(this.color, this.density);
  }
  toJSON() {
    return {
      type: "FogExp2",
      color: this.color.getHex(),
      density: this.density
    };
  }
}
qi.prototype.isFogExp2 = !0;
class Zr extends At {
  constructor() {
    super(), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.background !== null && (e.object.background = this.background.toJSON(t)), this.environment !== null && (e.object.environment = this.environment.toJSON(t)), this.fog !== null && (e.object.fog = this.fog.toJSON()), e;
  }
}
Zr.prototype.isScene = !0;
class un {
  constructor(t, e) {
    this.array = t, this.stride = e, this.count = t !== void 0 ? t.length / e : 0, this.usage = 35044, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = Le(), this.onUploadCallback = function() {
    };
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  copy(t) {
    return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this;
  }
  copyAt(t, e, n) {
    t *= this.stride, n *= e.stride;
    for (let i = 0, s = this.stride; i < s; i++)
      this.array[t + i] = e.array[n + i];
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  clone(t) {
    t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Le()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), n = new un(e, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  toJSON(t) {
    return t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Le()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
un.prototype.isInterleavedBuffer = !0;
const Wt = new S();
class ii {
  constructor(t, e, n, i) {
    this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = i === !0;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(t) {
    this.data.needsUpdate = t;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.data.count; e < n; e++)
      Wt.x = this.getX(e), Wt.y = this.getY(e), Wt.z = this.getZ(e), Wt.applyMatrix4(t), this.setXYZ(e, Wt.x, Wt.y, Wt.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Wt.x = this.getX(e), Wt.y = this.getY(e), Wt.z = this.getZ(e), Wt.applyNormalMatrix(t), this.setXYZ(e, Wt.x, Wt.y, Wt.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Wt.x = this.getX(e), Wt.y = this.getY(e), Wt.z = this.getZ(e), Wt.transformDirection(t), this.setXYZ(e, Wt.x, Wt.y, Wt.z);
    return this;
  }
  setX(t, e) {
    return this.data.array[t * this.data.stride + this.offset] = e, this;
  }
  setY(t, e) {
    return this.data.array[t * this.data.stride + this.offset + 1] = e, this;
  }
  setZ(t, e) {
    return this.data.array[t * this.data.stride + this.offset + 2] = e, this;
  }
  setW(t, e) {
    return this.data.array[t * this.data.stride + this.offset + 3] = e, this;
  }
  getX(t) {
    return this.data.array[t * this.data.stride + this.offset];
  }
  getY(t) {
    return this.data.array[t * this.data.stride + this.offset + 1];
  }
  getZ(t) {
    return this.data.array[t * this.data.stride + this.offset + 2];
  }
  getW(t) {
    return this.data.array[t * this.data.stride + this.offset + 3];
  }
  setXY(t, e, n) {
    return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, i) {
    return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this;
  }
  setXYZW(t, e, n, i, s) {
    return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this.data.array[t + 3] = s, this;
  }
  clone(t) {
    if (t === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
      const e = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          e.push(this.data.array[i + s]);
      }
      return new $t(new this.array.constructor(e), this.itemSize, this.normalized);
    } else
      return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new ii(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(t) {
    if (t === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
      const e = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          e.push(this.data.array[i + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: e,
        normalized: this.normalized
      };
    } else
      return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
ii.prototype.isInterleavedBufferAttribute = !0;
class qa extends Qt {
  constructor(t) {
    super(), this.type = "SpriteMaterial", this.color = new at(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this;
  }
}
qa.prototype.isSpriteMaterial = !0;
let Tn;
const Xn = /* @__PURE__ */ new S(), En = /* @__PURE__ */ new S(), An = /* @__PURE__ */ new S(), Ln = /* @__PURE__ */ new Z(), Yn = /* @__PURE__ */ new Z(), Xa = /* @__PURE__ */ new ut(), Ti = /* @__PURE__ */ new S(), jn = /* @__PURE__ */ new S(), Ei = /* @__PURE__ */ new S(), ks = /* @__PURE__ */ new Z(), Er = /* @__PURE__ */ new Z(), Os = /* @__PURE__ */ new Z();
class id extends At {
  constructor(t) {
    if (super(), this.type = "Sprite", Tn === void 0) {
      Tn = new It();
      const e = new Float32Array([
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
      ]), n = new un(e, 5);
      Tn.setIndex([0, 1, 2, 0, 2, 3]), Tn.setAttribute("position", new ii(n, 3, 0, !1)), Tn.setAttribute("uv", new ii(n, 2, 3, !1));
    }
    this.geometry = Tn, this.material = t !== void 0 ? t : new qa(), this.center = new Z(0.5, 0.5);
  }
  raycast(t, e) {
    t.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), En.setFromMatrixScale(this.matrixWorld), Xa.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), An.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && En.multiplyScalar(-An.z);
    const n = this.material.rotation;
    let i, s;
    n !== 0 && (s = Math.cos(n), i = Math.sin(n));
    const a = this.center;
    Ai(Ti.set(-0.5, -0.5, 0), An, a, En, i, s), Ai(jn.set(0.5, -0.5, 0), An, a, En, i, s), Ai(Ei.set(0.5, 0.5, 0), An, a, En, i, s), ks.set(0, 0), Er.set(1, 0), Os.set(1, 1);
    let o = t.ray.intersectTriangle(Ti, jn, Ei, !1, Xn);
    if (o === null && (Ai(jn.set(-0.5, 0.5, 0), An, a, En, i, s), Er.set(0, 1), o = t.ray.intersectTriangle(Ti, Ei, jn, !1, Xn), o === null))
      return;
    const l = t.ray.origin.distanceTo(Xn);
    l < t.near || l > t.far || e.push({
      distance: l,
      point: Xn.clone(),
      uv: jt.getUV(Xn, Ti, jn, Ei, ks, Er, Os, new Z()),
      face: null,
      object: this
    });
  }
  copy(t) {
    return super.copy(t), t.center !== void 0 && this.center.copy(t.center), this.material = t.material, this;
  }
}
id.prototype.isSprite = !0;
function Ai(r, t, e, n, i, s) {
  Ln.subVectors(r, e).addScalar(0.5).multiply(n), i !== void 0 ? (Yn.x = s * Ln.x - i * Ln.y, Yn.y = i * Ln.x + s * Ln.y) : Yn.copy(Ln), r.copy(t), r.x += Yn.x, r.y += Yn.y, r.applyMatrix4(Xa);
}
const Vs = /* @__PURE__ */ new S(), Ws = /* @__PURE__ */ new Bt(), qs = /* @__PURE__ */ new Bt(), rd = /* @__PURE__ */ new S(), Xs = /* @__PURE__ */ new ut();
class Ya extends ee {
  constructor(t, e) {
    super(t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new ut(), this.bindMatrixInverse = new ut();
  }
  copy(t) {
    return super.copy(t), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, this;
  }
  bind(t, e) {
    this.skeleton = t, e === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const t = new Bt(), e = this.geometry.attributes.skinWeight;
    for (let n = 0, i = e.count; n < i; n++) {
      t.x = e.getX(n), t.y = e.getY(n), t.z = e.getZ(n), t.w = e.getW(n);
      const s = 1 / t.manhattanLength();
      s !== 1 / 0 ? t.multiplyScalar(s) : t.set(1, 0, 0, 0), e.setXYZW(n, t.x, t.y, t.z, t.w);
    }
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  boneTransform(t, e) {
    const n = this.skeleton, i = this.geometry;
    Ws.fromBufferAttribute(i.attributes.skinIndex, t), qs.fromBufferAttribute(i.attributes.skinWeight, t), Vs.fromBufferAttribute(i.attributes.position, t).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const a = qs.getComponent(s);
      if (a !== 0) {
        const o = Ws.getComponent(s);
        Xs.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), e.addScaledVector(rd.copy(Vs).applyMatrix4(Xs), a);
      }
    }
    return e.applyMatrix4(this.bindMatrixInverse);
  }
}
Ya.prototype.isSkinnedMesh = !0;
class sd extends At {
  constructor() {
    super(), this.type = "Bone";
  }
}
sd.prototype.isBone = !0;
const Ys = /* @__PURE__ */ new ut(), js = /* @__PURE__ */ new ut(), Li = [], Zn = /* @__PURE__ */ new ee();
class Xi extends ee {
  constructor(t, e, n) {
    super(t, e), this.instanceMatrix = new $t(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1;
  }
  copy(t) {
    return super.copy(t), this.instanceMatrix.copy(t.instanceMatrix), t.instanceColor !== null && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, this;
  }
  getColorAt(t, e) {
    e.fromArray(this.instanceColor.array, t * 3);
  }
  getMatrixAt(t, e) {
    e.fromArray(this.instanceMatrix.array, t * 16);
  }
  raycast(t, e) {
    const n = this.matrixWorld, i = this.count;
    if (Zn.geometry = this.geometry, Zn.material = this.material, Zn.material !== void 0)
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, Ys), js.multiplyMatrices(n, Ys), Zn.matrixWorld = js, Zn.raycast(t, Li);
        for (let a = 0, o = Li.length; a < o; a++) {
          const l = Li[a];
          l.instanceId = s, l.object = this, e.push(l);
        }
        Li.length = 0;
      }
  }
  setColorAt(t, e) {
    this.instanceColor === null && (this.instanceColor = new $t(new Float32Array(this.count * 3), 3)), e.toArray(this.instanceColor.array, t * 3);
  }
  setMatrixAt(t, e) {
    e.toArray(this.instanceMatrix.array, t * 16);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
Xi.prototype.isInstancedMesh = !0;
class Un extends Qt {
  constructor(t) {
    super(), this.type = "LineBasicMaterial", this.color = new at(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.morphTargets = !1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.morphTargets = t.morphTargets, this;
  }
}
Un.prototype.isLineBasicMaterial = !0;
const Zs = /* @__PURE__ */ new S(), Js = /* @__PURE__ */ new S(), $s = /* @__PURE__ */ new ut(), Ar = /* @__PURE__ */ new In(), Ri = /* @__PURE__ */ new Nn();
class Jr extends At {
  constructor(t = new It(), e = new Un()) {
    super(), this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t) {
    return super.copy(t), this.material = t.material, this.geometry = t.geometry, this;
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.isBufferGeometry)
      if (t.index === null) {
        const e = t.attributes.position, n = [0];
        for (let i = 1, s = e.count; i < s; i++)
          Zs.fromBufferAttribute(e, i - 1), Js.fromBufferAttribute(e, i), n[i] = n[i - 1], n[i] += Zs.distanceTo(Js);
        t.setAttribute("lineDistance", new kt(n, 1));
      } else
        console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    else t.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    return this;
  }
  raycast(t, e) {
    const n = this.geometry, i = this.matrixWorld, s = t.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ri.copy(n.boundingSphere), Ri.applyMatrix4(i), Ri.radius += s, t.ray.intersectsSphere(Ri) === !1) return;
    $s.copy(i).invert(), Ar.copy(t.ray).applyMatrix4($s);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = new S(), d = new S(), h = new S(), u = new S(), f = this.isLineSegments ? 2 : 1;
    if (n.isBufferGeometry) {
      const p = n.index, y = n.attributes.position;
      if (p !== null) {
        const g = Math.max(0, a.start), m = Math.min(p.count, a.start + a.count);
        for (let w = g, E = m - 1; w < E; w += f) {
          const b = p.getX(w), _ = p.getX(w + 1);
          if (c.fromBufferAttribute(y, b), d.fromBufferAttribute(y, _), Ar.distanceSqToSegment(c, d, u, h) > l) continue;
          u.applyMatrix4(this.matrixWorld);
          const I = t.ray.origin.distanceTo(u);
          I < t.near || I > t.far || e.push({
            distance: I,
            // What do we want? intersection point on the ray or on the segment??
            // point: raycaster.ray.at( distance ),
            point: h.clone().applyMatrix4(this.matrixWorld),
            index: w,
            face: null,
            faceIndex: null,
            object: this
          });
        }
      } else {
        const g = Math.max(0, a.start), m = Math.min(y.count, a.start + a.count);
        for (let w = g, E = m - 1; w < E; w += f) {
          if (c.fromBufferAttribute(y, w), d.fromBufferAttribute(y, w + 1), Ar.distanceSqToSegment(c, d, u, h) > l) continue;
          u.applyMatrix4(this.matrixWorld);
          const _ = t.ray.origin.distanceTo(u);
          _ < t.near || _ > t.far || e.push({
            distance: _,
            // What do we want? intersection point on the ray or on the segment??
            // point: raycaster.ray.at( distance ),
            point: h.clone().applyMatrix4(this.matrixWorld),
            index: w,
            face: null,
            faceIndex: null,
            object: this
          });
        }
      }
    } else n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
  }
  updateMorphTargets() {
    const t = this.geometry;
    if (t.isBufferGeometry) {
      const e = t.morphAttributes, n = Object.keys(e);
      if (n.length > 0) {
        const i = e[n[0]];
        if (i !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let s = 0, a = i.length; s < a; s++) {
            const o = i[s].name || String(s);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
          }
        }
      }
    } else {
      const e = t.morphTargets;
      e !== void 0 && e.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  }
}
Jr.prototype.isLine = !0;
const Qs = /* @__PURE__ */ new S(), Ks = /* @__PURE__ */ new S();
class $r extends Jr {
  constructor(t, e) {
    super(t, e), this.type = "LineSegments";
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.isBufferGeometry)
      if (t.index === null) {
        const e = t.attributes.position, n = [];
        for (let i = 0, s = e.count; i < s; i += 2)
          Qs.fromBufferAttribute(e, i), Ks.fromBufferAttribute(e, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Qs.distanceTo(Ks);
        t.setAttribute("lineDistance", new kt(n, 1));
      } else
        console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    else t.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    return this;
  }
}
$r.prototype.isLineSegments = !0;
class ja extends Jr {
  constructor(t, e) {
    super(t, e), this.type = "LineLoop";
  }
}
ja.prototype.isLineLoop = !0;
class Za extends Qt {
  constructor(t) {
    super(), this.type = "PointsMaterial", this.color = new at(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.morphTargets = t.morphTargets, this;
  }
}
Za.prototype.isPointsMaterial = !0;
const ta = /* @__PURE__ */ new ut(), Gr = /* @__PURE__ */ new In(), Ci = /* @__PURE__ */ new Nn(), Pi = /* @__PURE__ */ new S();
class ad extends At {
  constructor(t = new It(), e = new Za()) {
    super(), this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t) {
    return super.copy(t), this.material = t.material, this.geometry = t.geometry, this;
  }
  raycast(t, e) {
    const n = this.geometry, i = this.matrixWorld, s = t.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ci.copy(n.boundingSphere), Ci.applyMatrix4(i), Ci.radius += s, t.ray.intersectsSphere(Ci) === !1) return;
    ta.copy(i).invert(), Gr.copy(t.ray).applyMatrix4(ta);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o;
    if (n.isBufferGeometry) {
      const c = n.index, h = n.attributes.position;
      if (c !== null) {
        const u = Math.max(0, a.start), f = Math.min(c.count, a.start + a.count);
        for (let p = u, x = f; p < x; p++) {
          const y = c.getX(p);
          Pi.fromBufferAttribute(h, y), ea(Pi, y, l, i, t, e, this);
        }
      } else {
        const u = Math.max(0, a.start), f = Math.min(h.count, a.start + a.count);
        for (let p = u, x = f; p < x; p++)
          Pi.fromBufferAttribute(h, p), ea(Pi, p, l, i, t, e, this);
      }
    } else
      console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
  }
  updateMorphTargets() {
    const t = this.geometry;
    if (t.isBufferGeometry) {
      const e = t.morphAttributes, n = Object.keys(e);
      if (n.length > 0) {
        const i = e[n[0]];
        if (i !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let s = 0, a = i.length; s < a; s++) {
            const o = i[s].name || String(s);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
          }
        }
      }
    } else {
      const e = t.morphTargets;
      e !== void 0 && e.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  }
}
ad.prototype.isPoints = !0;
function ea(r, t, e, n, i, s, a) {
  const o = Gr.distanceSqToPoint(r);
  if (o < e) {
    const l = new S();
    Gr.closestPointToPoint(r, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: t,
      face: null,
      object: a
    });
  }
}
class od extends ne {
  constructor(t, e, n, i, s, a, o, l, c) {
    super(t, e, n, i, s, a, o, l, c), this.format = o !== void 0 ? o : 1022, this.minFilter = a !== void 0 ? a : 1006, this.magFilter = s !== void 0 ? s : 1006, this.generateMipmaps = !1;
    const d = this;
    function h() {
      d.needsUpdate = !0, t.requestVideoFrameCallback(h);
    }
    "requestVideoFrameCallback" in t && t.requestVideoFrameCallback(h);
  }
  clone() {
    return new this.constructor(this.image).copy(this);
  }
  update() {
    const t = this.image;
    "requestVideoFrameCallback" in t === !1 && t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
  }
}
od.prototype.isVideoTexture = !0;
class ld extends ne {
  constructor(t, e, n, i, s, a, o, l, c, d, h, u) {
    super(null, a, o, l, c, d, i, s, h, u), this.image = { width: e, height: n }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1;
  }
}
ld.prototype.isCompressedTexture = !0;
class cd extends ne {
  constructor(t, e, n, i, s, a, o, l, c) {
    super(t, e, n, i, s, a, o, l, c), this.needsUpdate = !0;
  }
}
cd.prototype.isCanvasTexture = !0;
class hd extends ne {
  constructor(t, e, n, i, s, a, o, l, c, d) {
    if (d = d !== void 0 ? d : 1026, d !== 1026 && d !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && d === 1026 && (n = 1012), n === void 0 && d === 1027 && (n = 1020), super(null, i, s, a, o, l, d, n, c), this.image = { width: t, height: e }, this.magFilter = o !== void 0 ? o : 1003, this.minFilter = l !== void 0 ? l : 1003, this.flipY = !1, this.generateMipmaps = !1;
  }
}
hd.prototype.isDepthTexture = !0;
const ud = {
  triangulate: function(r, t, e) {
    e = e || 2;
    const n = t && t.length, i = n ? t[0] * e : r.length;
    let s = Ja(r, 0, i, e, !0);
    const a = [];
    if (!s || s.next === s.prev) return a;
    let o, l, c, d, h, u, f;
    if (n && (s = gd(r, t, s, e)), r.length > 80 * e) {
      o = c = r[0], l = d = r[1];
      for (let p = e; p < i; p += e)
        h = r[p], u = r[p + 1], h < o && (o = h), u < l && (l = u), h > c && (c = h), u > d && (d = u);
      f = Math.max(c - o, d - l), f = f !== 0 ? 1 / f : 0;
    }
    return ri(s, a, e, o, l, f), a;
  }
};
function Ja(r, t, e, n, i) {
  let s, a;
  if (i === Ad(r, t, e, n) > 0)
    for (s = t; s < e; s += n) a = na(s, r[s], r[s + 1], a);
  else
    for (s = e - n; s >= t; s -= n) a = na(s, r[s], r[s + 1], a);
  return a && Yi(a, a.next) && (ai(a), a = a.next), a;
}
function $e(r, t) {
  if (!r) return r;
  t || (t = r);
  let e = r, n;
  do
    if (n = !1, !e.steiner && (Yi(e, e.next) || Ot(e.prev, e, e.next) === 0)) {
      if (ai(e), e = t = e.prev, e === e.next) break;
      n = !0;
    } else
      e = e.next;
  while (n || e !== t);
  return t;
}
function ri(r, t, e, n, i, s, a) {
  if (!r) return;
  !a && s && Md(r, n, i, s);
  let o = r, l, c;
  for (; r.prev !== r.next; ) {
    if (l = r.prev, c = r.next, s ? fd(r, n, i, s) : dd(r)) {
      t.push(l.i / e), t.push(r.i / e), t.push(c.i / e), ai(r), r = c.next, o = c.next;
      continue;
    }
    if (r = c, r === o) {
      a ? a === 1 ? (r = pd($e(r), t, e), ri(r, t, e, n, i, s, 2)) : a === 2 && md(r, t, e, n, i, s) : ri($e(r), t, e, n, i, s, 1);
      break;
    }
  }
}
function dd(r) {
  const t = r.prev, e = r, n = r.next;
  if (Ot(t, e, n) >= 0) return !1;
  let i = r.next.next;
  for (; i !== r.prev; ) {
    if (Rn(t.x, t.y, e.x, e.y, n.x, n.y, i.x, i.y) && Ot(i.prev, i, i.next) >= 0) return !1;
    i = i.next;
  }
  return !0;
}
function fd(r, t, e, n) {
  const i = r.prev, s = r, a = r.next;
  if (Ot(i, s, a) >= 0) return !1;
  const o = i.x < s.x ? i.x < a.x ? i.x : a.x : s.x < a.x ? s.x : a.x, l = i.y < s.y ? i.y < a.y ? i.y : a.y : s.y < a.y ? s.y : a.y, c = i.x > s.x ? i.x > a.x ? i.x : a.x : s.x > a.x ? s.x : a.x, d = i.y > s.y ? i.y > a.y ? i.y : a.y : s.y > a.y ? s.y : a.y, h = Hr(o, l, t, e, n), u = Hr(c, d, t, e, n);
  let f = r.prevZ, p = r.nextZ;
  for (; f && f.z >= h && p && p.z <= u; ) {
    if (f !== r.prev && f !== r.next && Rn(i.x, i.y, s.x, s.y, a.x, a.y, f.x, f.y) && Ot(f.prev, f, f.next) >= 0 || (f = f.prevZ, p !== r.prev && p !== r.next && Rn(i.x, i.y, s.x, s.y, a.x, a.y, p.x, p.y) && Ot(p.prev, p, p.next) >= 0)) return !1;
    p = p.nextZ;
  }
  for (; f && f.z >= h; ) {
    if (f !== r.prev && f !== r.next && Rn(i.x, i.y, s.x, s.y, a.x, a.y, f.x, f.y) && Ot(f.prev, f, f.next) >= 0) return !1;
    f = f.prevZ;
  }
  for (; p && p.z <= u; ) {
    if (p !== r.prev && p !== r.next && Rn(i.x, i.y, s.x, s.y, a.x, a.y, p.x, p.y) && Ot(p.prev, p, p.next) >= 0) return !1;
    p = p.nextZ;
  }
  return !0;
}
function pd(r, t, e) {
  let n = r;
  do {
    const i = n.prev, s = n.next.next;
    !Yi(i, s) && $a(i, n, n.next, s) && si(i, s) && si(s, i) && (t.push(i.i / e), t.push(n.i / e), t.push(s.i / e), ai(n), ai(n.next), n = r = s), n = n.next;
  } while (n !== r);
  return $e(n);
}
function md(r, t, e, n, i, s) {
  let a = r;
  do {
    let o = a.next.next;
    for (; o !== a.prev; ) {
      if (a.i !== o.i && Sd(a, o)) {
        let l = Qa(a, o);
        a = $e(a, a.next), l = $e(l, l.next), ri(a, t, e, n, i, s), ri(l, t, e, n, i, s);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== r);
}
function gd(r, t, e, n) {
  const i = [];
  let s, a, o, l, c;
  for (s = 0, a = t.length; s < a; s++)
    o = t[s] * n, l = s < a - 1 ? t[s + 1] * n : r.length, c = Ja(r, o, l, n, !1), c === c.next && (c.steiner = !0), i.push(bd(c));
  for (i.sort(xd), s = 0; s < i.length; s++)
    yd(i[s], e), e = $e(e, e.next);
  return e;
}
function xd(r, t) {
  return r.x - t.x;
}
function yd(r, t) {
  if (t = _d(r, t), t) {
    const e = Qa(t, r);
    $e(t, t.next), $e(e, e.next);
  }
}
function _d(r, t) {
  let e = t;
  const n = r.x, i = r.y;
  let s = -1 / 0, a;
  do {
    if (i <= e.y && i >= e.next.y && e.next.y !== e.y) {
      const u = e.x + (i - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
      if (u <= n && u > s) {
        if (s = u, u === n) {
          if (i === e.y) return e;
          if (i === e.next.y) return e.next;
        }
        a = e.x < e.next.x ? e : e.next;
      }
    }
    e = e.next;
  } while (e !== t);
  if (!a) return null;
  if (n === s) return a;
  const o = a, l = a.x, c = a.y;
  let d = 1 / 0, h;
  e = a;
  do
    n >= e.x && e.x >= l && n !== e.x && Rn(i < c ? n : s, i, l, c, i < c ? s : n, i, e.x, e.y) && (h = Math.abs(i - e.y) / (n - e.x), si(e, r) && (h < d || h === d && (e.x > a.x || e.x === a.x && vd(a, e))) && (a = e, d = h)), e = e.next;
  while (e !== o);
  return a;
}
function vd(r, t) {
  return Ot(r.prev, r, t.prev) < 0 && Ot(t.next, r, r.next) < 0;
}
function Md(r, t, e, n) {
  let i = r;
  do
    i.z === null && (i.z = Hr(i.x, i.y, t, e, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== r);
  i.prevZ.nextZ = null, i.prevZ = null, wd(i);
}
function wd(r) {
  let t, e, n, i, s, a, o, l, c = 1;
  do {
    for (e = r, r = null, s = null, a = 0; e; ) {
      for (a++, n = e, o = 0, t = 0; t < c && (o++, n = n.nextZ, !!n); t++)
        ;
      for (l = c; o > 0 || l > 0 && n; )
        o !== 0 && (l === 0 || !n || e.z <= n.z) ? (i = e, e = e.nextZ, o--) : (i = n, n = n.nextZ, l--), s ? s.nextZ = i : r = i, i.prevZ = s, s = i;
      e = n;
    }
    s.nextZ = null, c *= 2;
  } while (a > 1);
  return r;
}
function Hr(r, t, e, n, i) {
  return r = 32767 * (r - e) * i, t = 32767 * (t - n) * i, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, r | t << 1;
}
function bd(r) {
  let t = r, e = r;
  do
    (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next;
  while (t !== r);
  return e;
}
function Rn(r, t, e, n, i, s, a, o) {
  return (i - a) * (t - o) - (r - a) * (s - o) >= 0 && (r - a) * (n - o) - (e - a) * (t - o) >= 0 && (e - a) * (s - o) - (i - a) * (n - o) >= 0;
}
function Sd(r, t) {
  return r.next.i !== t.i && r.prev.i !== t.i && !Td(r, t) && // dones't intersect other edges
  (si(r, t) && si(t, r) && Ed(r, t) && // locally visible
  (Ot(r.prev, r, t.prev) || Ot(r, t.prev, t)) || // does not create opposite-facing sectors
  Yi(r, t) && Ot(r.prev, r, r.next) > 0 && Ot(t.prev, t, t.next) > 0);
}
function Ot(r, t, e) {
  return (t.y - r.y) * (e.x - t.x) - (t.x - r.x) * (e.y - t.y);
}
function Yi(r, t) {
  return r.x === t.x && r.y === t.y;
}
function $a(r, t, e, n) {
  const i = Fi(Ot(r, t, e)), s = Fi(Ot(r, t, n)), a = Fi(Ot(e, n, r)), o = Fi(Ot(e, n, t));
  return !!(i !== s && a !== o || i === 0 && Di(r, e, t) || s === 0 && Di(r, n, t) || a === 0 && Di(e, r, n) || o === 0 && Di(e, t, n));
}
function Di(r, t, e) {
  return t.x <= Math.max(r.x, e.x) && t.x >= Math.min(r.x, e.x) && t.y <= Math.max(r.y, e.y) && t.y >= Math.min(r.y, e.y);
}
function Fi(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0;
}
function Td(r, t) {
  let e = r;
  do {
    if (e.i !== r.i && e.next.i !== r.i && e.i !== t.i && e.next.i !== t.i && $a(e, e.next, r, t)) return !0;
    e = e.next;
  } while (e !== r);
  return !1;
}
function si(r, t) {
  return Ot(r.prev, r, r.next) < 0 ? Ot(r, t, r.next) >= 0 && Ot(r, r.prev, t) >= 0 : Ot(r, t, r.prev) < 0 || Ot(r, r.next, t) < 0;
}
function Ed(r, t) {
  let e = r, n = !1;
  const i = (r.x + t.x) / 2, s = (r.y + t.y) / 2;
  do
    e.y > s != e.next.y > s && e.next.y !== e.y && i < (e.next.x - e.x) * (s - e.y) / (e.next.y - e.y) + e.x && (n = !n), e = e.next;
  while (e !== r);
  return n;
}
function Qa(r, t) {
  const e = new kr(r.i, r.x, r.y), n = new kr(t.i, t.x, t.y), i = r.next, s = t.prev;
  return r.next = t, t.prev = r, e.next = i, i.prev = e, n.next = e, e.prev = n, s.next = n, n.prev = s, n;
}
function na(r, t, e, n) {
  const i = new kr(r, t, e);
  return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function ai(r) {
  r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ);
}
function kr(r, t, e) {
  this.i = r, this.x = t, this.y = e, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function Ad(r, t, e, n) {
  let i = 0;
  for (let s = t, a = e - n; s < e; s += n)
    i += (r[a] - r[s]) * (r[s + 1] + r[a + 1]), a = s;
  return i;
}
class Je {
  // calculate area of the contour polygon
  static area(t) {
    const e = t.length;
    let n = 0;
    for (let i = e - 1, s = 0; s < e; i = s++)
      n += t[i].x * t[s].y - t[s].x * t[i].y;
    return n * 0.5;
  }
  static isClockWise(t) {
    return Je.area(t) < 0;
  }
  static triangulateShape(t, e) {
    const n = [], i = [], s = [];
    ia(t), ra(n, t);
    let a = t.length;
    e.forEach(ia);
    for (let l = 0; l < e.length; l++)
      i.push(a), a += e[l].length, ra(n, e[l]);
    const o = ud.triangulate(n, i);
    for (let l = 0; l < o.length; l += 3)
      s.push(o.slice(l, l + 3));
    return s;
  }
}
function ia(r) {
  const t = r.length;
  t > 2 && r[t - 1].equals(r[0]) && r.pop();
}
function ra(r, t) {
  for (let e = 0; e < t.length; e++)
    r.push(t[e].x), r.push(t[e].y);
}
class ji extends It {
  constructor(t, e) {
    super(), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: t,
      options: e
    }, t = Array.isArray(t) ? t : [t];
    const n = this, i = [], s = [];
    for (let o = 0, l = t.length; o < l; o++) {
      const c = t[o];
      a(c);
    }
    this.setAttribute("position", new kt(i, 3)), this.setAttribute("uv", new kt(s, 2)), this.computeVertexNormals();
    function a(o) {
      const l = [], c = e.curveSegments !== void 0 ? e.curveSegments : 12, d = e.steps !== void 0 ? e.steps : 1;
      let h = e.depth !== void 0 ? e.depth : 100, u = e.bevelEnabled !== void 0 ? e.bevelEnabled : !0, f = e.bevelThickness !== void 0 ? e.bevelThickness : 6, p = e.bevelSize !== void 0 ? e.bevelSize : f - 2, x = e.bevelOffset !== void 0 ? e.bevelOffset : 0, y = e.bevelSegments !== void 0 ? e.bevelSegments : 3;
      const g = e.extrudePath, m = e.UVGenerator !== void 0 ? e.UVGenerator : Ld;
      e.amount !== void 0 && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), h = e.amount);
      let w, E = !1, b, _, R, I;
      g && (w = g.getSpacedPoints(d), E = !0, u = !1, b = g.computeFrenetFrames(d, !1), _ = new S(), R = new S(), I = new S()), u || (y = 0, f = 0, p = 0, x = 0);
      const B = o.extractPoints(c);
      let U = B.shape;
      const W = B.holes;
      if (!Je.isClockWise(U)) {
        U = U.reverse();
        for (let j = 0, Q = W.length; j < Q; j++) {
          const nt = W[j];
          Je.isClockWise(nt) && (W[j] = nt.reverse());
        }
      }
      const A = Je.triangulateShape(U, W), P = U;
      for (let j = 0, Q = W.length; j < Q; j++) {
        const nt = W[j];
        U = U.concat(nt);
      }
      function D(j, Q, nt) {
        return Q || console.error("THREE.ExtrudeGeometry: vec does not exist"), Q.clone().multiplyScalar(nt).add(j);
      }
      const C = U.length, k = A.length;
      function Y(j, Q, nt) {
        let lt, rt, T;
        const M = j.x - Q.x, O = j.y - Q.y, V = nt.x - j.x, st = nt.y - j.y, ot = M * M + O * O, Lt = M * st - O * V;
        if (Math.abs(Lt) > Number.EPSILON) {
          const gt = Math.sqrt(ot), L = Math.sqrt(V * V + st * st), J = Q.x - O / gt, tt = Q.y + M / gt, ht = nt.x - st / L, q = nt.y + V / L, mt = ((ht - J) * st - (q - tt) * V) / (M * st - O * V);
          lt = J + M * mt - j.x, rt = tt + O * mt - j.y;
          const Dt = lt * lt + rt * rt;
          if (Dt <= 2)
            return new Z(lt, rt);
          T = Math.sqrt(Dt / 2);
        } else {
          let gt = !1;
          M > Number.EPSILON ? V > Number.EPSILON && (gt = !0) : M < -Number.EPSILON ? V < -Number.EPSILON && (gt = !0) : Math.sign(O) === Math.sign(st) && (gt = !0), gt ? (lt = -O, rt = M, T = Math.sqrt(ot)) : (lt = M, rt = O, T = Math.sqrt(ot / 2));
        }
        return new Z(lt / T, rt / T);
      }
      const X = [];
      for (let j = 0, Q = P.length, nt = Q - 1, lt = j + 1; j < Q; j++, nt++, lt++)
        nt === Q && (nt = 0), lt === Q && (lt = 0), X[j] = Y(P[j], P[nt], P[lt]);
      const $ = [];
      let K, ct = X.concat();
      for (let j = 0, Q = W.length; j < Q; j++) {
        const nt = W[j];
        K = [];
        for (let lt = 0, rt = nt.length, T = rt - 1, M = lt + 1; lt < rt; lt++, T++, M++)
          T === rt && (T = 0), M === rt && (M = 0), K[lt] = Y(nt[lt], nt[T], nt[M]);
        $.push(K), ct = ct.concat(K);
      }
      for (let j = 0; j < y; j++) {
        const Q = j / y, nt = f * Math.cos(Q * Math.PI / 2), lt = p * Math.sin(Q * Math.PI / 2) + x;
        for (let rt = 0, T = P.length; rt < T; rt++) {
          const M = D(P[rt], X[rt], lt);
          pt(M.x, M.y, -nt);
        }
        for (let rt = 0, T = W.length; rt < T; rt++) {
          const M = W[rt];
          K = $[rt];
          for (let O = 0, V = M.length; O < V; O++) {
            const st = D(M[O], K[O], lt);
            pt(st.x, st.y, -nt);
          }
        }
      }
      const ft = p + x;
      for (let j = 0; j < C; j++) {
        const Q = u ? D(U[j], ct[j], ft) : U[j];
        E ? (R.copy(b.normals[0]).multiplyScalar(Q.x), _.copy(b.binormals[0]).multiplyScalar(Q.y), I.copy(w[0]).add(R).add(_), pt(I.x, I.y, I.z)) : pt(Q.x, Q.y, 0);
      }
      for (let j = 1; j <= d; j++)
        for (let Q = 0; Q < C; Q++) {
          const nt = u ? D(U[Q], ct[Q], ft) : U[Q];
          E ? (R.copy(b.normals[j]).multiplyScalar(nt.x), _.copy(b.binormals[j]).multiplyScalar(nt.y), I.copy(w[j]).add(R).add(_), pt(I.x, I.y, I.z)) : pt(nt.x, nt.y, h / d * j);
        }
      for (let j = y - 1; j >= 0; j--) {
        const Q = j / y, nt = f * Math.cos(Q * Math.PI / 2), lt = p * Math.sin(Q * Math.PI / 2) + x;
        for (let rt = 0, T = P.length; rt < T; rt++) {
          const M = D(P[rt], X[rt], lt);
          pt(M.x, M.y, h + nt);
        }
        for (let rt = 0, T = W.length; rt < T; rt++) {
          const M = W[rt];
          K = $[rt];
          for (let O = 0, V = M.length; O < V; O++) {
            const st = D(M[O], K[O], lt);
            E ? pt(st.x, st.y + w[d - 1].y, w[d - 1].x + nt) : pt(st.x, st.y, h + nt);
          }
        }
      }
      G(), Ct();
      function G() {
        const j = i.length / 3;
        if (u) {
          let Q = 0, nt = C * Q;
          for (let lt = 0; lt < k; lt++) {
            const rt = A[lt];
            dt(rt[2] + nt, rt[1] + nt, rt[0] + nt);
          }
          Q = d + y * 2, nt = C * Q;
          for (let lt = 0; lt < k; lt++) {
            const rt = A[lt];
            dt(rt[0] + nt, rt[1] + nt, rt[2] + nt);
          }
        } else {
          for (let Q = 0; Q < k; Q++) {
            const nt = A[Q];
            dt(nt[2], nt[1], nt[0]);
          }
          for (let Q = 0; Q < k; Q++) {
            const nt = A[Q];
            dt(nt[0] + C * d, nt[1] + C * d, nt[2] + C * d);
          }
        }
        n.addGroup(j, i.length / 3 - j, 0);
      }
      function Ct() {
        const j = i.length / 3;
        let Q = 0;
        Tt(P, Q), Q += P.length;
        for (let nt = 0, lt = W.length; nt < lt; nt++) {
          const rt = W[nt];
          Tt(rt, Q), Q += rt.length;
        }
        n.addGroup(j, i.length / 3 - j, 1);
      }
      function Tt(j, Q) {
        let nt = j.length;
        for (; --nt >= 0; ) {
          const lt = nt;
          let rt = nt - 1;
          rt < 0 && (rt = j.length - 1);
          for (let T = 0, M = d + y * 2; T < M; T++) {
            const O = C * T, V = C * (T + 1), st = Q + lt + O, ot = Q + rt + O, Lt = Q + rt + V, gt = Q + lt + V;
            St(st, ot, Lt, gt);
          }
        }
      }
      function pt(j, Q, nt) {
        l.push(j), l.push(Q), l.push(nt);
      }
      function dt(j, Q, nt) {
        Mt(j), Mt(Q), Mt(nt);
        const lt = i.length / 3, rt = m.generateTopUV(n, i, lt - 3, lt - 2, lt - 1);
        wt(rt[0]), wt(rt[1]), wt(rt[2]);
      }
      function St(j, Q, nt, lt) {
        Mt(j), Mt(Q), Mt(lt), Mt(Q), Mt(nt), Mt(lt);
        const rt = i.length / 3, T = m.generateSideWallUV(n, i, rt - 6, rt - 3, rt - 2, rt - 1);
        wt(T[0]), wt(T[1]), wt(T[3]), wt(T[1]), wt(T[2]), wt(T[3]);
      }
      function Mt(j) {
        i.push(l[j * 3 + 0]), i.push(l[j * 3 + 1]), i.push(l[j * 3 + 2]);
      }
      function wt(j) {
        s.push(j.x), s.push(j.y);
      }
    }
  }
  toJSON() {
    const t = It.prototype.toJSON.call(this), e = this.parameters.shapes, n = this.parameters.options;
    return Rd(e, n, t);
  }
}
const Ld = {
  generateTopUV: function(r, t, e, n, i) {
    const s = t[e * 3], a = t[e * 3 + 1], o = t[n * 3], l = t[n * 3 + 1], c = t[i * 3], d = t[i * 3 + 1];
    return [
      new Z(s, a),
      new Z(o, l),
      new Z(c, d)
    ];
  },
  generateSideWallUV: function(r, t, e, n, i, s) {
    const a = t[e * 3], o = t[e * 3 + 1], l = t[e * 3 + 2], c = t[n * 3], d = t[n * 3 + 1], h = t[n * 3 + 2], u = t[i * 3], f = t[i * 3 + 1], p = t[i * 3 + 2], x = t[s * 3], y = t[s * 3 + 1], g = t[s * 3 + 2];
    return Math.abs(o - d) < 0.01 ? [
      new Z(a, 1 - l),
      new Z(c, 1 - h),
      new Z(u, 1 - p),
      new Z(x, 1 - g)
    ] : [
      new Z(o, 1 - l),
      new Z(d, 1 - h),
      new Z(f, 1 - p),
      new Z(y, 1 - g)
    ];
  }
};
function Rd(r, t, e) {
  if (e.shapes = [], Array.isArray(r))
    for (let n = 0, i = r.length; n < i; n++) {
      const s = r[n];
      e.shapes.push(s.uuid);
    }
  else
    e.shapes.push(r.uuid);
  return t.extrudePath !== void 0 && (e.options.extrudePath = t.extrudePath.toJSON()), e;
}
class Cd extends It {
  constructor(t = 0.5, e = 1, n = 8, i = 1, s = 0, a = Math.PI * 2) {
    super(), this.type = "RingGeometry", this.parameters = {
      innerRadius: t,
      outerRadius: e,
      thetaSegments: n,
      phiSegments: i,
      thetaStart: s,
      thetaLength: a
    }, n = Math.max(3, n), i = Math.max(1, i);
    const o = [], l = [], c = [], d = [];
    let h = t;
    const u = (e - t) / i, f = new S(), p = new Z();
    for (let x = 0; x <= i; x++) {
      for (let y = 0; y <= n; y++) {
        const g = s + y / n * a;
        f.x = h * Math.cos(g), f.y = h * Math.sin(g), l.push(f.x, f.y, f.z), c.push(0, 0, 1), p.x = (f.x / e + 1) / 2, p.y = (f.y / e + 1) / 2, d.push(p.x, p.y);
      }
      h += u;
    }
    for (let x = 0; x < i; x++) {
      const y = x * (n + 1);
      for (let g = 0; g < n; g++) {
        const m = g + y, w = m, E = m + n + 1, b = m + n + 2, _ = m + 1;
        o.push(w, E, _), o.push(E, b, _);
      }
    }
    this.setIndex(o), this.setAttribute("position", new kt(l, 3)), this.setAttribute("normal", new kt(c, 3)), this.setAttribute("uv", new kt(d, 2));
  }
}
class Pd extends It {
  constructor(t, e = 12) {
    super(), this.type = "ShapeGeometry", this.parameters = {
      shapes: t,
      curveSegments: e
    };
    const n = [], i = [], s = [], a = [];
    let o = 0, l = 0;
    if (Array.isArray(t) === !1)
      c(t);
    else
      for (let d = 0; d < t.length; d++)
        c(t[d]), this.addGroup(o, l, d), o += l, l = 0;
    this.setIndex(n), this.setAttribute("position", new kt(i, 3)), this.setAttribute("normal", new kt(s, 3)), this.setAttribute("uv", new kt(a, 2));
    function c(d) {
      const h = i.length / 3, u = d.extractPoints(e);
      let f = u.shape;
      const p = u.holes;
      Je.isClockWise(f) === !1 && (f = f.reverse());
      for (let y = 0, g = p.length; y < g; y++) {
        const m = p[y];
        Je.isClockWise(m) === !0 && (p[y] = m.reverse());
      }
      const x = Je.triangulateShape(f, p);
      for (let y = 0, g = p.length; y < g; y++) {
        const m = p[y];
        f = f.concat(m);
      }
      for (let y = 0, g = f.length; y < g; y++) {
        const m = f[y];
        i.push(m.x, m.y, 0), s.push(0, 0, 1), a.push(m.x, m.y);
      }
      for (let y = 0, g = x.length; y < g; y++) {
        const m = x[y], w = m[0] + h, E = m[1] + h, b = m[2] + h;
        n.push(w, E, b), l += 3;
      }
    }
  }
  toJSON() {
    const t = It.prototype.toJSON.call(this), e = this.parameters.shapes;
    return Dd(e, t);
  }
}
function Dd(r, t) {
  if (t.shapes = [], Array.isArray(r))
    for (let e = 0, n = r.length; e < n; e++) {
      const i = r[e];
      t.shapes.push(i.uuid);
    }
  else
    t.shapes.push(r.uuid);
  return t;
}
class Fd extends It {
  constructor(t = 1, e = 8, n = 6, i = 0, s = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: t,
      widthSegments: e,
      heightSegments: n,
      phiStart: i,
      phiLength: s,
      thetaStart: a,
      thetaLength: o
    }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
    const l = Math.min(a + o, Math.PI);
    let c = 0;
    const d = [], h = new S(), u = new S(), f = [], p = [], x = [], y = [];
    for (let g = 0; g <= n; g++) {
      const m = [], w = g / n;
      let E = 0;
      g == 0 && a == 0 ? E = 0.5 / e : g == n && l == Math.PI && (E = -0.5 / e);
      for (let b = 0; b <= e; b++) {
        const _ = b / e;
        h.x = -t * Math.cos(i + _ * s) * Math.sin(a + w * o), h.y = t * Math.cos(a + w * o), h.z = t * Math.sin(i + _ * s) * Math.sin(a + w * o), p.push(h.x, h.y, h.z), u.copy(h).normalize(), x.push(u.x, u.y, u.z), y.push(_ + E, 1 - w), m.push(c++);
      }
      d.push(m);
    }
    for (let g = 0; g < n; g++)
      for (let m = 0; m < e; m++) {
        const w = d[g][m + 1], E = d[g][m], b = d[g + 1][m], _ = d[g + 1][m + 1];
        (g !== 0 || a > 0) && f.push(w, E, _), (g !== n - 1 || l < Math.PI) && f.push(E, b, _);
      }
    this.setIndex(f), this.setAttribute("position", new kt(p, 3)), this.setAttribute("normal", new kt(x, 3)), this.setAttribute("uv", new kt(y, 2));
  }
}
class Nd extends Qt {
  constructor(t) {
    super(), this.type = "ShadowMaterial", this.color = new at(0), this.transparent = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this;
  }
}
Nd.prototype.isShadowMaterial = !0;
class Id extends cn {
  constructor(t) {
    super(t), this.type = "RawShaderMaterial";
  }
}
Id.prototype.isRawShaderMaterial = !0;
class Ae extends Qt {
  constructor(t) {
    super(), this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new at(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new at(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.vertexTangents = !1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this.vertexTangents = t.vertexTangents, this;
  }
}
Ae.prototype.isMeshStandardMaterial = !0;
class Bd extends Ae {
  constructor(t) {
    super(), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.clearcoat = 0, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Z(1, 1), this.clearcoatNormalMap = null, this.reflectivity = 0.5, Object.defineProperty(this, "ior", {
      get: function() {
        return (1 + 0.4 * this.reflectivity) / (1 - 0.4 * this.reflectivity);
      },
      set: function(e) {
        this.reflectivity = pe(2.5 * (e - 1) / (e + 1), 0, 1);
      }
    }), this.sheen = null, this.transmission = 0, this.transmissionMap = null, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.reflectivity = t.reflectivity, t.sheen ? this.sheen = (this.sheen || new at()).copy(t.sheen) : this.sheen = null, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this;
  }
}
Bd.prototype.isMeshPhysicalMaterial = !0;
class zd extends Qt {
  constructor(t) {
    super(), this.type = "MeshPhongMaterial", this.color = new at(16777215), this.specular = new at(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new at(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this;
  }
}
zd.prototype.isMeshPhongMaterial = !0;
class Ud extends Qt {
  constructor(t) {
    super(), this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.color = new at(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new at(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.gradientMap = t.gradientMap, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this;
  }
}
Ud.prototype.isMeshToonMaterial = !0;
class Gd extends Qt {
  constructor(t) {
    super(), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this;
  }
}
Gd.prototype.isMeshNormalMaterial = !0;
class Hd extends Qt {
  constructor(t) {
    super(), this.type = "MeshLambertMaterial", this.color = new at(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new at(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this;
  }
}
Hd.prototype.isMeshLambertMaterial = !0;
class kd extends Qt {
  constructor(t) {
    super(), this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new at(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.defines = { MATCAP: "" }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this;
  }
}
kd.prototype.isMeshMatcapMaterial = !0;
class Od extends Un {
  constructor(t) {
    super(), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this;
  }
}
Od.prototype.isLineDashedMaterial = !0;
const Ht = {
  // same as Array.prototype.slice, but also works on typed arrays
  arraySlice: function(r, t, e) {
    return Ht.isTypedArray(r) ? new r.constructor(r.subarray(t, e !== void 0 ? e : r.length)) : r.slice(t, e);
  },
  // converts an array to a specific type
  convertArray: function(r, t, e) {
    return !r || // let 'undefined' and 'null' pass
    !e && r.constructor === t ? r : typeof t.BYTES_PER_ELEMENT == "number" ? new t(r) : Array.prototype.slice.call(r);
  },
  isTypedArray: function(r) {
    return ArrayBuffer.isView(r) && !(r instanceof DataView);
  },
  // returns an array by which times and values can be sorted
  getKeyframeOrder: function(r) {
    function t(i, s) {
      return r[i] - r[s];
    }
    const e = r.length, n = new Array(e);
    for (let i = 0; i !== e; ++i) n[i] = i;
    return n.sort(t), n;
  },
  // uses the array previously returned by 'getKeyframeOrder' to sort data
  sortedArray: function(r, t, e) {
    const n = r.length, i = new r.constructor(n);
    for (let s = 0, a = 0; a !== n; ++s) {
      const o = e[s] * t;
      for (let l = 0; l !== t; ++l)
        i[a++] = r[o + l];
    }
    return i;
  },
  // function for parsing AOS keyframe formats
  flattenJSON: function(r, t, e, n) {
    let i = 1, s = r[0];
    for (; s !== void 0 && s[n] === void 0; )
      s = r[i++];
    if (s === void 0) return;
    let a = s[n];
    if (a !== void 0)
      if (Array.isArray(a))
        do
          a = s[n], a !== void 0 && (t.push(s.time), e.push.apply(e, a)), s = r[i++];
        while (s !== void 0);
      else if (a.toArray !== void 0)
        do
          a = s[n], a !== void 0 && (t.push(s.time), a.toArray(e, e.length)), s = r[i++];
        while (s !== void 0);
      else
        do
          a = s[n], a !== void 0 && (t.push(s.time), e.push(a)), s = r[i++];
        while (s !== void 0);
  },
  subclip: function(r, t, e, n, i = 30) {
    const s = r.clone();
    s.name = t;
    const a = [];
    for (let l = 0; l < s.tracks.length; ++l) {
      const c = s.tracks[l], d = c.getValueSize(), h = [], u = [];
      for (let f = 0; f < c.times.length; ++f) {
        const p = c.times[f] * i;
        if (!(p < e || p >= n)) {
          h.push(c.times[f]);
          for (let x = 0; x < d; ++x)
            u.push(c.values[f * d + x]);
        }
      }
      h.length !== 0 && (c.times = Ht.convertArray(h, c.times.constructor), c.values = Ht.convertArray(u, c.values.constructor), a.push(c));
    }
    s.tracks = a;
    let o = 1 / 0;
    for (let l = 0; l < s.tracks.length; ++l)
      o > s.tracks[l].times[0] && (o = s.tracks[l].times[0]);
    for (let l = 0; l < s.tracks.length; ++l)
      s.tracks[l].shift(-1 * o);
    return s.resetDuration(), s;
  },
  makeClipAdditive: function(r, t = 0, e = r, n = 30) {
    n <= 0 && (n = 30);
    const i = e.tracks.length, s = t / n;
    for (let a = 0; a < i; ++a) {
      const o = e.tracks[a], l = o.ValueTypeName;
      if (l === "bool" || l === "string") continue;
      const c = r.tracks.find(function(g) {
        return g.name === o.name && g.ValueTypeName === l;
      });
      if (c === void 0) continue;
      let d = 0;
      const h = o.getValueSize();
      o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (d = h / 3);
      let u = 0;
      const f = c.getValueSize();
      c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (u = f / 3);
      const p = o.times.length - 1;
      let x;
      if (s <= o.times[0]) {
        const g = d, m = h - d;
        x = Ht.arraySlice(o.values, g, m);
      } else if (s >= o.times[p]) {
        const g = p * h + d, m = g + h - d;
        x = Ht.arraySlice(o.values, g, m);
      } else {
        const g = o.createInterpolant(), m = d, w = h - d;
        g.evaluate(s), x = Ht.arraySlice(g.resultBuffer, m, w);
      }
      l === "quaternion" && new le().fromArray(x).normalize().conjugate().toArray(x);
      const y = c.times.length;
      for (let g = 0; g < y; ++g) {
        const m = g * f + u;
        if (l === "quaternion")
          le.multiplyQuaternionsFlat(
            c.values,
            m,
            x,
            0,
            c.values,
            m
          );
        else {
          const w = f - u * 2;
          for (let E = 0; E < w; ++E)
            c.values[m + E] -= x[E];
        }
      }
    }
    return r.blendMode = 2501, r;
  }
};
class Qe {
  constructor(t, e, n, i) {
    this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(t) {
    const e = this.parameterPositions;
    let n = this._cachedIndex, i = e[n], s = e[n - 1];
    t: {
      e: {
        let a;
        n: {
          i: if (!(t < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (t < s) break i;
                return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, t, s);
              }
              if (n === o) break;
              if (s = i, i = e[++n], t < i)
                break e;
            }
            a = e.length;
            break n;
          }
          if (!(t >= s)) {
            const o = e[1];
            t < o && (n = 2, s = o);
            for (let l = n - 2; ; ) {
              if (s === void 0)
                return this._cachedIndex = 0, this.beforeStart_(0, t, i);
              if (n === l) break;
              if (i = s, s = e[--n - 1], t >= s)
                break e;
            }
            a = n, n = 0;
            break n;
          }
          break t;
        }
        for (; n < a; ) {
          const o = n + a >>> 1;
          t < e[o] ? a = o : n = o + 1;
        }
        if (i = e[n], s = e[n - 1], s === void 0)
          return this._cachedIndex = 0, this.beforeStart_(0, t, i);
        if (i === void 0)
          return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, s, t);
      }
      this._cachedIndex = n, this.intervalChanged_(n, s, i);
    }
    return this.interpolate_(n, s, t, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(t) {
    const e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = t * i;
    for (let a = 0; a !== i; ++a)
      e[a] = n[s + a];
    return e;
  }
  // Template methods for derived classes:
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
Qe.prototype.beforeStart_ = Qe.prototype.copySampleValue_;
Qe.prototype.afterEnd_ = Qe.prototype.copySampleValue_;
class Vd extends Qe {
  constructor(t, e, n, i) {
    super(t, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: 2400,
      endingEnd: 2400
    };
  }
  intervalChanged_(t, e, n) {
    const i = this.parameterPositions;
    let s = t - 2, a = t + 1, o = i[s], l = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case 2401:
          s = t, o = 2 * e - n;
          break;
        case 2402:
          s = i.length - 2, o = e + i[s] - i[s + 1];
          break;
        default:
          s = t, o = n;
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case 2401:
          a = t, l = 2 * n - e;
          break;
        case 2402:
          a = 1, l = n + i[1] - i[0];
          break;
        default:
          a = t - 1, l = e;
      }
    const c = (n - e) * 0.5, d = this.valueSize;
    this._weightPrev = c / (e - o), this._weightNext = c / (l - n), this._offsetPrev = s * d, this._offsetNext = a * d;
  }
  interpolate_(t, e, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = t * o, c = l - o, d = this._offsetPrev, h = this._offsetNext, u = this._weightPrev, f = this._weightNext, p = (n - e) / (i - e), x = p * p, y = x * p, g = -u * y + 2 * u * x - u * p, m = (1 + u) * y + (-1.5 - 2 * u) * x + (-0.5 + u) * p + 1, w = (-1 - f) * y + (1.5 + f) * x + 0.5 * p, E = f * y - f * x;
    for (let b = 0; b !== o; ++b)
      s[b] = g * a[d + b] + m * a[c + b] + w * a[l + b] + E * a[h + b];
    return s;
  }
}
class Ka extends Qe {
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  interpolate_(t, e, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = t * o, c = l - o, d = (n - e) / (i - e), h = 1 - d;
    for (let u = 0; u !== o; ++u)
      s[u] = a[c + u] * h + a[l + u] * d;
    return s;
  }
}
class Wd extends Qe {
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  interpolate_(t) {
    return this.copySampleValue_(t - 1);
  }
}
class Ce {
  constructor(t, e, n, i) {
    if (t === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (e === void 0 || e.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
    this.name = t, this.times = Ht.convertArray(e, this.TimeBufferType), this.values = Ht.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  static toJSON(t) {
    const e = t.constructor;
    let n;
    if (e.toJSON !== this.toJSON)
      n = e.toJSON(t);
    else {
      n = {
        name: t.name,
        times: Ht.convertArray(t.times, Array),
        values: Ht.convertArray(t.values, Array)
      };
      const i = t.getInterpolation();
      i !== t.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = t.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(t) {
    return new Wd(this.times, this.values, this.getValueSize(), t);
  }
  InterpolantFactoryMethodLinear(t) {
    return new Ka(this.times, this.values, this.getValueSize(), t);
  }
  InterpolantFactoryMethodSmooth(t) {
    return new Vd(this.times, this.values, this.getValueSize(), t);
  }
  setInterpolation(t) {
    let e;
    switch (t) {
      case 2300:
        e = this.InterpolantFactoryMethodDiscrete;
        break;
      case 2301:
        e = this.InterpolantFactoryMethodLinear;
        break;
      case 2302:
        e = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (e === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (t !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = e, this;
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
  shift(t) {
    if (t !== 0) {
      const e = this.times;
      for (let n = 0, i = e.length; n !== i; ++n)
        e[n] += t;
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(t) {
    if (t !== 1) {
      const e = this.times;
      for (let n = 0, i = e.length; n !== i; ++n)
        e[n] *= t;
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(t, e) {
    const n = this.times, i = n.length;
    let s = 0, a = i - 1;
    for (; s !== i && n[s] < t; )
      ++s;
    for (; a !== -1 && n[a] > e; )
      --a;
    if (++a, s !== 0 || a !== i) {
      s >= a && (a = Math.max(a, 1), s = a - 1);
      const o = this.getValueSize();
      this.times = Ht.arraySlice(n, s, a), this.values = Ht.arraySlice(this.values, s * o, a * o);
    }
    return this;
  }
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate() {
    let t = !0;
    const e = this.getValueSize();
    e - Math.floor(e) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
    const n = this.times, i = this.values, s = n.length;
    s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
    let a = null;
    for (let o = 0; o !== s; o++) {
      const l = n[o];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, l), t = !1;
        break;
      }
      if (a !== null && a > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, a), t = !1;
        break;
      }
      a = l;
    }
    if (i !== void 0 && Ht.isTypedArray(i))
      for (let o = 0, l = i.length; o !== l; ++o) {
        const c = i[o];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), t = !1;
          break;
        }
      }
    return t;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const t = Ht.arraySlice(this.times), e = Ht.arraySlice(this.values), n = this.getValueSize(), i = this.getInterpolation() === 2302, s = t.length - 1;
    let a = 1;
    for (let o = 1; o < s; ++o) {
      let l = !1;
      const c = t[o], d = t[o + 1];
      if (c !== d && (o !== 1 || c !== t[0]))
        if (i)
          l = !0;
        else {
          const h = o * n, u = h - n, f = h + n;
          for (let p = 0; p !== n; ++p) {
            const x = e[h + p];
            if (x !== e[u + p] || x !== e[f + p]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (o !== a) {
          t[a] = t[o];
          const h = o * n, u = a * n;
          for (let f = 0; f !== n; ++f)
            e[u + f] = e[h + f];
        }
        ++a;
      }
    }
    if (s > 0) {
      t[a] = t[s];
      for (let o = s * n, l = a * n, c = 0; c !== n; ++c)
        e[l + c] = e[o + c];
      ++a;
    }
    return a !== t.length ? (this.times = Ht.arraySlice(t, 0, a), this.values = Ht.arraySlice(e, 0, a * n)) : (this.times = t, this.values = e), this;
  }
  clone() {
    const t = Ht.arraySlice(this.times, 0), e = Ht.arraySlice(this.values, 0), n = this.constructor, i = new n(this.name, t, e);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
Ce.prototype.TimeBufferType = Float32Array;
Ce.prototype.ValueBufferType = Float32Array;
Ce.prototype.DefaultInterpolation = 2301;
class Gn extends Ce {
}
Gn.prototype.ValueTypeName = "bool";
Gn.prototype.ValueBufferType = Array;
Gn.prototype.DefaultInterpolation = 2300;
Gn.prototype.InterpolantFactoryMethodLinear = void 0;
Gn.prototype.InterpolantFactoryMethodSmooth = void 0;
class to extends Ce {
}
to.prototype.ValueTypeName = "color";
class ki extends Ce {
}
ki.prototype.ValueTypeName = "number";
class qd extends Qe {
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  interpolate_(t, e, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = (n - e) / (i - e);
    let c = t * o;
    for (let d = c + o; c !== d; c += 4)
      le.slerpFlat(s, 0, a, c - o, a, c, l);
    return s;
  }
}
class oi extends Ce {
  InterpolantFactoryMethodLinear(t) {
    return new qd(this.times, this.values, this.getValueSize(), t);
  }
}
oi.prototype.ValueTypeName = "quaternion";
oi.prototype.DefaultInterpolation = 2301;
oi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Hn extends Ce {
}
Hn.prototype.ValueTypeName = "string";
Hn.prototype.ValueBufferType = Array;
Hn.prototype.DefaultInterpolation = 2300;
Hn.prototype.InterpolantFactoryMethodLinear = void 0;
Hn.prototype.InterpolantFactoryMethodSmooth = void 0;
class Oi extends Ce {
}
Oi.prototype.ValueTypeName = "vector";
class sa {
  constructor(t, e = -1, n, i = 2500) {
    this.name = t, this.tracks = n, this.duration = e, this.blendMode = i, this.uuid = Le(), this.duration < 0 && this.resetDuration();
  }
  static parse(t) {
    const e = [], n = t.tracks, i = 1 / (t.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a)
      e.push(Yd(n[a]).scale(i));
    const s = new this(t.name, t.duration, e, t.blendMode);
    return s.uuid = t.uuid, s;
  }
  static toJSON(t) {
    const e = [], n = t.tracks, i = {
      name: t.name,
      duration: t.duration,
      tracks: e,
      uuid: t.uuid,
      blendMode: t.blendMode
    };
    for (let s = 0, a = n.length; s !== a; ++s)
      e.push(Ce.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(t, e, n, i) {
    const s = e.length, a = [];
    for (let o = 0; o < s; o++) {
      let l = [], c = [];
      l.push(
        (o + s - 1) % s,
        o,
        (o + 1) % s
      ), c.push(0, 1, 0);
      const d = Ht.getKeyframeOrder(l);
      l = Ht.sortedArray(l, 1, d), c = Ht.sortedArray(c, 1, d), !i && l[0] === 0 && (l.push(s), c.push(c[0])), a.push(
        new ki(
          ".morphTargetInfluences[" + e[o].name + "]",
          l,
          c
        ).scale(1 / n)
      );
    }
    return new this(t, -1, a);
  }
  static findByName(t, e) {
    let n = t;
    if (!Array.isArray(t)) {
      const i = t;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === e)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(t, e, n) {
    const i = {}, s = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, l = t.length; o < l; o++) {
      const c = t[o], d = c.name.match(s);
      if (d && d.length > 1) {
        const h = d[1];
        let u = i[h];
        u || (i[h] = u = []), u.push(c);
      }
    }
    const a = [];
    for (const o in i)
      a.push(this.CreateFromMorphTargetSequence(o, i[o], e, n));
    return a;
  }
  // parse the animation.hierarchy format
  static parseAnimation(t, e) {
    if (!t)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(h, u, f, p, x) {
      if (f.length !== 0) {
        const y = [], g = [];
        Ht.flattenJSON(f, y, g, p), y.length !== 0 && x.push(new h(u, y, g));
      }
    }, i = [], s = t.name || "default", a = t.fps || 30, o = t.blendMode;
    let l = t.length || -1;
    const c = t.hierarchy || [];
    for (let h = 0; h < c.length; h++) {
      const u = c[h].keys;
      if (!(!u || u.length === 0))
        if (u[0].morphTargets) {
          const f = {};
          let p;
          for (p = 0; p < u.length; p++)
            if (u[p].morphTargets)
              for (let x = 0; x < u[p].morphTargets.length; x++)
                f[u[p].morphTargets[x]] = -1;
          for (const x in f) {
            const y = [], g = [];
            for (let m = 0; m !== u[p].morphTargets.length; ++m) {
              const w = u[p];
              y.push(w.time), g.push(w.morphTarget === x ? 1 : 0);
            }
            i.push(new ki(".morphTargetInfluence[" + x + "]", y, g));
          }
          l = f.length * a;
        } else {
          const f = ".bones[" + e[h].name + "]";
          n(
            Oi,
            f + ".position",
            u,
            "pos",
            i
          ), n(
            oi,
            f + ".quaternion",
            u,
            "rot",
            i
          ), n(
            Oi,
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
    const t = this.tracks;
    let e = 0;
    for (let n = 0, i = t.length; n !== i; ++n) {
      const s = this.tracks[n];
      e = Math.max(e, s.times[s.times.length - 1]);
    }
    return this.duration = e, this;
  }
  trim() {
    for (let t = 0; t < this.tracks.length; t++)
      this.tracks[t].trim(0, this.duration);
    return this;
  }
  validate() {
    let t = !0;
    for (let e = 0; e < this.tracks.length; e++)
      t = t && this.tracks[e].validate();
    return t;
  }
  optimize() {
    for (let t = 0; t < this.tracks.length; t++)
      this.tracks[t].optimize();
    return this;
  }
  clone() {
    const t = [];
    for (let e = 0; e < this.tracks.length; e++)
      t.push(this.tracks[e].clone());
    return new this.constructor(this.name, this.duration, t, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function Xd(r) {
  switch (r.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return ki;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Oi;
    case "color":
      return to;
    case "quaternion":
      return oi;
    case "bool":
    case "boolean":
      return Gn;
    case "string":
      return Hn;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
}
function Yd(r) {
  if (r.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const t = Xd(r.type);
  if (r.times === void 0) {
    const e = [], n = [];
    Ht.flattenJSON(r.keys, e, n, "value"), r.times = e, r.values = n;
  }
  return t.parse !== void 0 ? t.parse(r) : new t(r.name, r.times, r.values, r.interpolation);
}
const Pn = {
  enabled: !1,
  files: {},
  add: function(r, t) {
    this.enabled !== !1 && (this.files[r] = t);
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
class jd {
  constructor(t, e, n) {
    const i = this;
    let s = !1, a = 0, o = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function(d) {
      o++, s === !1 && i.onStart !== void 0 && i.onStart(d, a, o), s = !0;
    }, this.itemEnd = function(d) {
      a++, i.onProgress !== void 0 && i.onProgress(d, a, o), a === o && (s = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(d) {
      i.onError !== void 0 && i.onError(d);
    }, this.resolveURL = function(d) {
      return l ? l(d) : d;
    }, this.setURLModifier = function(d) {
      return l = d, this;
    }, this.addHandler = function(d, h) {
      return c.push(d, h), this;
    }, this.removeHandler = function(d) {
      const h = c.indexOf(d);
      return h !== -1 && c.splice(h, 2), this;
    }, this.getHandler = function(d) {
      for (let h = 0, u = c.length; h < u; h += 2) {
        const f = c[h], p = c[h + 1];
        if (f.global && (f.lastIndex = 0), f.test(d))
          return p;
      }
      return null;
    };
  }
}
const Zd = new jd();
class Ke {
  constructor(t) {
    this.manager = t !== void 0 ? t : Zd, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(t, e) {
    const n = this;
    return new Promise(function(i, s) {
      n.load(t, i, e, s);
    });
  }
  parse() {
  }
  setCrossOrigin(t) {
    return this.crossOrigin = t, this;
  }
  setWithCredentials(t) {
    return this.withCredentials = t, this;
  }
  setPath(t) {
    return this.path = t, this;
  }
  setResourcePath(t) {
    return this.resourcePath = t, this;
  }
  setRequestHeader(t) {
    return this.requestHeader = t, this;
  }
}
const we = {};
class Jd extends Ke {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    t === void 0 && (t = ""), this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const s = this, a = Pn.get(t);
    if (a !== void 0)
      return s.manager.itemStart(t), setTimeout(function() {
        e && e(a), s.manager.itemEnd(t);
      }, 0), a;
    if (we[t] !== void 0) {
      we[t].push({
        onLoad: e,
        onProgress: n,
        onError: i
      });
      return;
    }
    const o = /^data:(.*?)(;base64)?,(.*)$/, l = t.match(o);
    let c;
    if (l) {
      const d = l[1], h = !!l[2];
      let u = l[3];
      u = decodeURIComponent(u), h && (u = atob(u));
      try {
        let f;
        const p = (this.responseType || "").toLowerCase();
        switch (p) {
          case "arraybuffer":
          case "blob":
            const x = new Uint8Array(u.length);
            for (let g = 0; g < u.length; g++)
              x[g] = u.charCodeAt(g);
            p === "blob" ? f = new Blob([x.buffer], { type: d }) : f = x.buffer;
            break;
          case "document":
            f = new DOMParser().parseFromString(u, d);
            break;
          case "json":
            f = JSON.parse(u);
            break;
          default:
            f = u;
            break;
        }
        setTimeout(function() {
          e && e(f), s.manager.itemEnd(t);
        }, 0);
      } catch (f) {
        setTimeout(function() {
          i && i(f), s.manager.itemError(t), s.manager.itemEnd(t);
        }, 0);
      }
    } else {
      we[t] = [], we[t].push({
        onLoad: e,
        onProgress: n,
        onError: i
      }), c = new XMLHttpRequest(), c.open("GET", t, !0), c.addEventListener("load", function(d) {
        const h = this.response, u = we[t];
        if (delete we[t], this.status === 200 || this.status === 0) {
          this.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), Pn.add(t, h);
          for (let f = 0, p = u.length; f < p; f++) {
            const x = u[f];
            x.onLoad && x.onLoad(h);
          }
          s.manager.itemEnd(t);
        } else {
          for (let f = 0, p = u.length; f < p; f++) {
            const x = u[f];
            x.onError && x.onError(d);
          }
          s.manager.itemError(t), s.manager.itemEnd(t);
        }
      }, !1), c.addEventListener("progress", function(d) {
        const h = we[t];
        for (let u = 0, f = h.length; u < f; u++) {
          const p = h[u];
          p.onProgress && p.onProgress(d);
        }
      }, !1), c.addEventListener("error", function(d) {
        const h = we[t];
        delete we[t];
        for (let u = 0, f = h.length; u < f; u++) {
          const p = h[u];
          p.onError && p.onError(d);
        }
        s.manager.itemError(t), s.manager.itemEnd(t);
      }, !1), c.addEventListener("abort", function(d) {
        const h = we[t];
        delete we[t];
        for (let u = 0, f = h.length; u < f; u++) {
          const p = h[u];
          p.onError && p.onError(d);
        }
        s.manager.itemError(t), s.manager.itemEnd(t);
      }, !1), this.responseType !== void 0 && (c.responseType = this.responseType), this.withCredentials !== void 0 && (c.withCredentials = this.withCredentials), c.overrideMimeType && c.overrideMimeType(this.mimeType !== void 0 ? this.mimeType : "text/plain");
      for (const d in this.requestHeader)
        c.setRequestHeader(d, this.requestHeader[d]);
      c.send(null);
    }
    return s.manager.itemStart(t), c;
  }
  setResponseType(t) {
    return this.responseType = t, this;
  }
  setMimeType(t) {
    return this.mimeType = t, this;
  }
}
class eo extends Ke {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const s = this, a = Pn.get(t);
    if (a !== void 0)
      return s.manager.itemStart(t), setTimeout(function() {
        e && e(a), s.manager.itemEnd(t);
      }, 0), a;
    const o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
    function l() {
      o.removeEventListener("load", l, !1), o.removeEventListener("error", c, !1), Pn.add(t, this), e && e(this), s.manager.itemEnd(t);
    }
    function c(d) {
      o.removeEventListener("load", l, !1), o.removeEventListener("error", c, !1), i && i(d), s.manager.itemError(t), s.manager.itemEnd(t);
    }
    return o.addEventListener("load", l, !1), o.addEventListener("error", c, !1), t.substr(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), s.manager.itemStart(t), o.src = t, o;
  }
}
class $d extends Ke {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const s = new Vi(), a = new eo(this.manager);
    a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
    let o = 0;
    function l(c) {
      a.load(t[c], function(d) {
        s.images[c] = d, o++, o === 6 && (s.needsUpdate = !0, e && e(s));
      }, void 0, i);
    }
    for (let c = 0; c < t.length; ++c)
      l(c);
    return s;
  }
}
class Qd extends Ke {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const s = new ne(), a = new eo(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(t, function(o) {
      s.image = o;
      const l = t.search(/\.jpe?g($|\?)/i) > 0 || t.search(/^data\:image\/jpeg/) === 0;
      s.format = l ? 1022 : 1023, s.needsUpdate = !0, e !== void 0 && e(s);
    }, n, i), s;
  }
}
class ge {
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
  getPointAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getPoint(n, e);
  }
  // Get sequence of points using getPoint( t )
  getPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPoint(n / t));
    return e;
  }
  // Get sequence of points using getPointAt( u )
  getSpacedPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPointAt(n / t));
    return e;
  }
  // Get total curve arc length
  getLength() {
    const t = this.getLengths();
    return t[t.length - 1];
  }
  // Get list of cumulative segment lengths
  getLengths(t = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const e = [];
    let n, i = this.getPoint(0), s = 0;
    e.push(0);
    for (let a = 1; a <= t; a++)
      n = this.getPoint(a / t), s += n.distanceTo(i), e.push(s), i = n;
    return this.cacheArcLengths = e, e;
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  // Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
  getUtoTmapping(t, e) {
    const n = this.getLengths();
    let i = 0;
    const s = n.length;
    let a;
    e ? a = e : a = t * n[s - 1];
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
    const d = n[i], u = n[i + 1] - d, f = (a - d) / u;
    return (i + f) / (s - 1);
  }
  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation
  getTangent(t, e) {
    let i = t - 1e-4, s = t + 1e-4;
    i < 0 && (i = 0), s > 1 && (s = 1);
    const a = this.getPoint(i), o = this.getPoint(s), l = e || (a.isVector2 ? new Z() : new S());
    return l.copy(o).sub(a).normalize(), l;
  }
  getTangentAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getTangent(n, e);
  }
  computeFrenetFrames(t, e) {
    const n = new S(), i = [], s = [], a = [], o = new S(), l = new ut();
    for (let f = 0; f <= t; f++) {
      const p = f / t;
      i[f] = this.getTangentAt(p, new S()), i[f].normalize();
    }
    s[0] = new S(), a[0] = new S();
    let c = Number.MAX_VALUE;
    const d = Math.abs(i[0].x), h = Math.abs(i[0].y), u = Math.abs(i[0].z);
    d <= c && (c = d, n.set(1, 0, 0)), h <= c && (c = h, n.set(0, 1, 0)), u <= c && n.set(0, 0, 1), o.crossVectors(i[0], n).normalize(), s[0].crossVectors(i[0], o), a[0].crossVectors(i[0], s[0]);
    for (let f = 1; f <= t; f++) {
      if (s[f] = s[f - 1].clone(), a[f] = a[f - 1].clone(), o.crossVectors(i[f - 1], i[f]), o.length() > Number.EPSILON) {
        o.normalize();
        const p = Math.acos(pe(i[f - 1].dot(i[f]), -1, 1));
        s[f].applyMatrix4(l.makeRotationAxis(o, p));
      }
      a[f].crossVectors(i[f], s[f]);
    }
    if (e === !0) {
      let f = Math.acos(pe(s[0].dot(s[t]), -1, 1));
      f /= t, i[0].dot(o.crossVectors(s[0], s[t])) > 0 && (f = -f);
      for (let p = 1; p <= t; p++)
        s[p].applyMatrix4(l.makeRotationAxis(i[p], f * p)), a[p].crossVectors(i[p], s[p]);
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
  copy(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.5,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t;
  }
  fromJSON(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
}
class Zi extends ge {
  constructor(t = 0, e = 0, n = 1, i = 1, s = 0, a = Math.PI * 2, o = !1, l = 0) {
    super(), this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = n, this.yRadius = i, this.aStartAngle = s, this.aEndAngle = a, this.aClockwise = o, this.aRotation = l;
  }
  getPoint(t, e) {
    const n = e || new Z(), i = Math.PI * 2;
    let s = this.aEndAngle - this.aStartAngle;
    const a = Math.abs(s) < Number.EPSILON;
    for (; s < 0; ) s += i;
    for (; s > i; ) s -= i;
    s < Number.EPSILON && (a ? s = 0 : s = i), this.aClockwise === !0 && !a && (s === i ? s = -i : s = s - i);
    const o = this.aStartAngle + t * s;
    let l = this.aX + this.xRadius * Math.cos(o), c = this.aY + this.yRadius * Math.sin(o);
    if (this.aRotation !== 0) {
      const d = Math.cos(this.aRotation), h = Math.sin(this.aRotation), u = l - this.aX, f = c - this.aY;
      l = u * d - f * h + this.aX, c = u * h + f * d + this.aY;
    }
    return n.set(l, c);
  }
  copy(t) {
    return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }
}
Zi.prototype.isEllipseCurve = !0;
class no extends Zi {
  constructor(t, e, n, i, s, a) {
    super(t, e, n, n, i, s, a), this.type = "ArcCurve";
  }
}
no.prototype.isArcCurve = !0;
function Qr() {
  let r = 0, t = 0, e = 0, n = 0;
  function i(s, a, o, l) {
    r = s, t = o, e = -3 * s + 3 * a - 2 * o - l, n = 2 * s - 2 * a + o + l;
  }
  return {
    initCatmullRom: function(s, a, o, l, c) {
      i(a, o, c * (o - s), c * (l - a));
    },
    initNonuniformCatmullRom: function(s, a, o, l, c, d, h) {
      let u = (a - s) / c - (o - s) / (c + d) + (o - a) / d, f = (o - a) / d - (l - a) / (d + h) + (l - o) / h;
      u *= d, f *= d, i(a, o, u, f);
    },
    calc: function(s) {
      const a = s * s, o = a * s;
      return r + t * s + e * a + n * o;
    }
  };
}
const Ni = new S(), Lr = new Qr(), Rr = new Qr(), Cr = new Qr();
class io extends ge {
  constructor(t = [], e = !1, n = "centripetal", i = 0.5) {
    super(), this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = n, this.tension = i;
  }
  getPoint(t, e = new S()) {
    const n = e, i = this.points, s = i.length, a = (s - (this.closed ? 0 : 1)) * t;
    let o = Math.floor(a), l = a - o;
    this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / s) + 1) * s : l === 0 && o === s - 1 && (o = s - 2, l = 1);
    let c, d;
    this.closed || o > 0 ? c = i[(o - 1) % s] : (Ni.subVectors(i[0], i[1]).add(i[0]), c = Ni);
    const h = i[o % s], u = i[(o + 1) % s];
    if (this.closed || o + 2 < s ? d = i[(o + 2) % s] : (Ni.subVectors(i[s - 1], i[s - 2]).add(i[s - 1]), d = Ni), this.curveType === "centripetal" || this.curveType === "chordal") {
      const f = this.curveType === "chordal" ? 0.5 : 0.25;
      let p = Math.pow(c.distanceToSquared(h), f), x = Math.pow(h.distanceToSquared(u), f), y = Math.pow(u.distanceToSquared(d), f);
      x < 1e-4 && (x = 1), p < 1e-4 && (p = x), y < 1e-4 && (y = x), Lr.initNonuniformCatmullRom(c.x, h.x, u.x, d.x, p, x, y), Rr.initNonuniformCatmullRom(c.y, h.y, u.y, d.y, p, x, y), Cr.initNonuniformCatmullRom(c.z, h.z, u.z, d.z, p, x, y);
    } else this.curveType === "catmullrom" && (Lr.initCatmullRom(c.x, h.x, u.x, d.x, this.tension), Rr.initCatmullRom(c.y, h.y, u.y, d.y, this.tension), Cr.initCatmullRom(c.z, h.z, u.z, d.z, this.tension));
    return n.set(
      Lr.calc(l),
      Rr.calc(l),
      Cr.calc(l)
    ), n;
  }
  copy(t) {
    super.copy(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(i.clone());
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      const i = this.points[e];
      t.points.push(i.toArray());
    }
    return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(new S().fromArray(i));
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }
}
io.prototype.isCatmullRomCurve3 = !0;
function aa(r, t, e, n, i) {
  const s = (n - t) * 0.5, a = (i - e) * 0.5, o = r * r, l = r * o;
  return (2 * e - 2 * n + s + a) * l + (-3 * e + 3 * n - 2 * s - a) * o + s * r + e;
}
function Kd(r, t) {
  const e = 1 - r;
  return e * e * t;
}
function tf(r, t) {
  return 2 * (1 - r) * r * t;
}
function ef(r, t) {
  return r * r * t;
}
function ei(r, t, e, n) {
  return Kd(r, t) + tf(r, e) + ef(r, n);
}
function nf(r, t) {
  const e = 1 - r;
  return e * e * e * t;
}
function rf(r, t) {
  const e = 1 - r;
  return 3 * e * e * r * t;
}
function sf(r, t) {
  return 3 * (1 - r) * r * r * t;
}
function af(r, t) {
  return r * r * r * t;
}
function ni(r, t, e, n, i) {
  return nf(r, t) + rf(r, e) + sf(r, n) + af(r, i);
}
class Kr extends ge {
  constructor(t = new Z(), e = new Z(), n = new Z(), i = new Z()) {
    super(), this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i;
  }
  getPoint(t, e = new Z()) {
    const n = e, i = this.v0, s = this.v1, a = this.v2, o = this.v3;
    return n.set(
      ni(t, i.x, s.x, a.x, o.x),
      ni(t, i.y, s.y, a.y, o.y)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
  }
}
Kr.prototype.isCubicBezierCurve = !0;
class ro extends ge {
  constructor(t = new S(), e = new S(), n = new S(), i = new S()) {
    super(), this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i;
  }
  getPoint(t, e = new S()) {
    const n = e, i = this.v0, s = this.v1, a = this.v2, o = this.v3;
    return n.set(
      ni(t, i.x, s.x, a.x, o.x),
      ni(t, i.y, s.y, a.y, o.y),
      ni(t, i.z, s.z, a.z, o.z)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
  }
}
ro.prototype.isCubicBezierCurve3 = !0;
class Ji extends ge {
  constructor(t = new Z(), e = new Z()) {
    super(), this.type = "LineCurve", this.v1 = t, this.v2 = e;
  }
  getPoint(t, e = new Z()) {
    const n = e;
    return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e) {
    const n = e || new Z();
    return n.copy(this.v2).sub(this.v1).normalize(), n;
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
Ji.prototype.isLineCurve = !0;
class of extends ge {
  constructor(t = new S(), e = new S()) {
    super(), this.type = "LineCurve3", this.isLineCurve3 = !0, this.v1 = t, this.v2 = e;
  }
  getPoint(t, e = new S()) {
    const n = e;
    return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class ts extends ge {
  constructor(t = new Z(), e = new Z(), n = new Z()) {
    super(), this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n;
  }
  getPoint(t, e = new Z()) {
    const n = e, i = this.v0, s = this.v1, a = this.v2;
    return n.set(
      ei(t, i.x, s.x, a.x),
      ei(t, i.y, s.y, a.y)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
ts.prototype.isQuadraticBezierCurve = !0;
class so extends ge {
  constructor(t = new S(), e = new S(), n = new S()) {
    super(), this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n;
  }
  getPoint(t, e = new S()) {
    const n = e, i = this.v0, s = this.v1, a = this.v2;
    return n.set(
      ei(t, i.x, s.x, a.x),
      ei(t, i.y, s.y, a.y),
      ei(t, i.z, s.z, a.z)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
so.prototype.isQuadraticBezierCurve3 = !0;
class es extends ge {
  constructor(t = []) {
    super(), this.type = "SplineCurve", this.points = t;
  }
  getPoint(t, e = new Z()) {
    const n = e, i = this.points, s = (i.length - 1) * t, a = Math.floor(s), o = s - a, l = i[a === 0 ? a : a - 1], c = i[a], d = i[a > i.length - 2 ? i.length - 1 : a + 1], h = i[a > i.length - 3 ? i.length - 1 : a + 2];
    return n.set(
      aa(o, l.x, c.x, d.x, h.x),
      aa(o, l.y, c.y, d.y, h.y)
    ), n;
  }
  copy(t) {
    super.copy(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      const i = this.points[e];
      t.points.push(i.toArray());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(new Z().fromArray(i));
    }
    return this;
  }
}
es.prototype.isSplineCurve = !0;
var lf = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: no,
  CatmullRomCurve3: io,
  CubicBezierCurve: Kr,
  CubicBezierCurve3: ro,
  EllipseCurve: Zi,
  LineCurve: Ji,
  LineCurve3: of,
  QuadraticBezierCurve: ts,
  QuadraticBezierCurve3: so,
  SplineCurve: es
});
class cf extends ge {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  add(t) {
    this.curves.push(t);
  }
  closePath() {
    const t = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
    t.equals(e) || this.curves.push(new Ji(e, t));
  }
  // To get accurate point with reference to
  // entire path distance at time t,
  // following has to be done:
  // 1. Length of each sub path have to be known
  // 2. Locate and identify type of curve
  // 3. Get t for the curve
  // 4. Return curve.getPointAt(t')
  getPoint(t) {
    const e = t * this.getLength(), n = this.getCurveLengths();
    let i = 0;
    for (; i < n.length; ) {
      if (n[i] >= e) {
        const s = n[i] - e, a = this.curves[i], o = a.getLength(), l = o === 0 ? 0 : 1 - s / o;
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
    const t = this.getCurveLengths();
    return t[t.length - 1];
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
    const t = [];
    let e = 0;
    for (let n = 0, i = this.curves.length; n < i; n++)
      e += this.curves[n].getLength(), t.push(e);
    return this.cacheLengths = t, t;
  }
  getSpacedPoints(t = 40) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPoint(n / t));
    return this.autoClose && e.push(e[0]), e;
  }
  getPoints(t = 12) {
    const e = [];
    let n;
    for (let i = 0, s = this.curves; i < s.length; i++) {
      const a = s[i], o = a && a.isEllipseCurve ? t * 2 : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? t * a.points.length : t, l = a.getPoints(o);
      for (let c = 0; c < l.length; c++) {
        const d = l[c];
        n && n.equals(d) || (e.push(d), n = d);
      }
    }
    return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
  }
  copy(t) {
    super.copy(t), this.curves = [];
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const i = t.curves[e];
      this.curves.push(i.clone());
    }
    return this.autoClose = t.autoClose, this;
  }
  toJSON() {
    const t = super.toJSON();
    t.autoClose = this.autoClose, t.curves = [];
    for (let e = 0, n = this.curves.length; e < n; e++) {
      const i = this.curves[e];
      t.curves.push(i.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.autoClose = t.autoClose, this.curves = [];
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const i = t.curves[e];
      this.curves.push(new lf[i.type]().fromJSON(i));
    }
    return this;
  }
}
class Or extends cf {
  constructor(t) {
    super(), this.type = "Path", this.currentPoint = new Z(), t && this.setFromPoints(t);
  }
  setFromPoints(t) {
    this.moveTo(t[0].x, t[0].y);
    for (let e = 1, n = t.length; e < n; e++)
      this.lineTo(t[e].x, t[e].y);
    return this;
  }
  moveTo(t, e) {
    return this.currentPoint.set(t, e), this;
  }
  lineTo(t, e) {
    const n = new Ji(this.currentPoint.clone(), new Z(t, e));
    return this.curves.push(n), this.currentPoint.set(t, e), this;
  }
  quadraticCurveTo(t, e, n, i) {
    const s = new ts(
      this.currentPoint.clone(),
      new Z(t, e),
      new Z(n, i)
    );
    return this.curves.push(s), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(t, e, n, i, s, a) {
    const o = new Kr(
      this.currentPoint.clone(),
      new Z(t, e),
      new Z(n, i),
      new Z(s, a)
    );
    return this.curves.push(o), this.currentPoint.set(s, a), this;
  }
  splineThru(t) {
    const e = [this.currentPoint.clone()].concat(t), n = new es(e);
    return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this;
  }
  arc(t, e, n, i, s, a) {
    const o = this.currentPoint.x, l = this.currentPoint.y;
    return this.absarc(
      t + o,
      e + l,
      n,
      i,
      s,
      a
    ), this;
  }
  absarc(t, e, n, i, s, a) {
    return this.absellipse(t, e, n, n, i, s, a), this;
  }
  ellipse(t, e, n, i, s, a, o, l) {
    const c = this.currentPoint.x, d = this.currentPoint.y;
    return this.absellipse(t + c, e + d, n, i, s, a, o, l), this;
  }
  absellipse(t, e, n, i, s, a, o, l) {
    const c = new Zi(t, e, n, i, s, a, o, l);
    if (this.curves.length > 0) {
      const h = c.getPoint(0);
      h.equals(this.currentPoint) || this.lineTo(h.x, h.y);
    }
    this.curves.push(c);
    const d = c.getPoint(1);
    return this.currentPoint.copy(d), this;
  }
  copy(t) {
    return super.copy(t), this.currentPoint.copy(t.currentPoint), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.currentPoint = this.currentPoint.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this;
  }
}
class ns extends Or {
  constructor(t) {
    super(t), this.uuid = Le(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(t) {
    const e = [];
    for (let n = 0, i = this.holes.length; n < i; n++)
      e[n] = this.holes[n].getPoints(t);
    return e;
  }
  // get points of shape and holes (keypoints based on segments parameter)
  extractPoints(t) {
    return {
      shape: this.getPoints(t),
      holes: this.getPointsHoles(t)
    };
  }
  copy(t) {
    super.copy(t), this.holes = [];
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const i = t.holes[e];
      this.holes.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    t.uuid = this.uuid, t.holes = [];
    for (let e = 0, n = this.holes.length; e < n; e++) {
      const i = this.holes[e];
      t.holes.push(i.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.uuid = t.uuid, this.holes = [];
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const i = t.holes[e];
      this.holes.push(new Or().fromJSON(i));
    }
    return this;
  }
}
class Re extends At {
  constructor(t, e = 1) {
    super(), this.type = "Light", this.color = new at(t), this.intensity = e;
  }
  dispose() {
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.intensity = t.intensity, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, this.groundColor !== void 0 && (e.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (e.object.distance = this.distance), this.angle !== void 0 && (e.object.angle = this.angle), this.decay !== void 0 && (e.object.decay = this.decay), this.penumbra !== void 0 && (e.object.penumbra = this.penumbra), this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()), e;
  }
}
Re.prototype.isLight = !0;
class hf extends Re {
  constructor(t, e, n) {
    super(t, n), this.type = "HemisphereLight", this.position.copy(At.DefaultUp), this.updateMatrix(), this.groundColor = new at(e);
  }
  copy(t) {
    return Re.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this;
  }
}
hf.prototype.isHemisphereLight = !0;
const oa = /* @__PURE__ */ new ut(), la = /* @__PURE__ */ new S(), ca = /* @__PURE__ */ new S();
class is {
  constructor(t) {
    this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.mapSize = new Z(512, 512), this.map = null, this.mapPass = null, this.matrix = new ut(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Wi(), this._frameExtents = new Z(1, 1), this._viewportCount = 1, this._viewports = [
      new Bt(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(t) {
    const e = this.camera, n = this.matrix;
    la.setFromMatrixPosition(t.matrixWorld), e.position.copy(la), ca.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(ca), e.updateMatrixWorld(), oa.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(oa), n.set(
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
    ), n.multiply(e.projectionMatrix), n.multiply(e.matrixWorldInverse);
  }
  getViewport(t) {
    return this._viewports[t];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(t) {
    return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const t = {};
    return this.bias !== 0 && (t.bias = this.bias), this.normalBias !== 0 && (t.normalBias = this.normalBias), this.radius !== 1 && (t.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t;
  }
}
class ao extends is {
  constructor() {
    super(new ue(50, 1, 0.5, 500)), this.focus = 1;
  }
  updateMatrices(t) {
    const e = this.camera, n = zr * 2 * t.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = t.distance || e.far;
    (n !== e.fov || i !== e.aspect || s !== e.far) && (e.fov = n, e.aspect = i, e.far = s, e.updateProjectionMatrix()), super.updateMatrices(t);
  }
  copy(t) {
    return super.copy(t), this.focus = t.focus, this;
  }
}
ao.prototype.isSpotLightShadow = !0;
class uf extends Re {
  constructor(t, e, n = 0, i = Math.PI / 3, s = 0, a = 1) {
    super(t, e), this.type = "SpotLight", this.position.copy(At.DefaultUp), this.updateMatrix(), this.target = new At(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = a, this.shadow = new ao();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(t) {
    this.intensity = t / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return super.copy(t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
  }
}
uf.prototype.isSpotLight = !0;
const ha = /* @__PURE__ */ new ut(), Jn = /* @__PURE__ */ new S(), Pr = /* @__PURE__ */ new S();
class oo extends is {
  constructor() {
    super(new ue(90, 1, 0.5, 500)), this._frameExtents = new Z(4, 2), this._viewportCount = 6, this._viewports = [
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
      new Bt(2, 1, 1, 1),
      // negative X
      new Bt(0, 1, 1, 1),
      // positive Z
      new Bt(3, 1, 1, 1),
      // negative Z
      new Bt(1, 1, 1, 1),
      // positive Y
      new Bt(3, 0, 1, 1),
      // negative Y
      new Bt(1, 0, 1, 1)
    ], this._cubeDirections = [
      new S(1, 0, 0),
      new S(-1, 0, 0),
      new S(0, 0, 1),
      new S(0, 0, -1),
      new S(0, 1, 0),
      new S(0, -1, 0)
    ], this._cubeUps = [
      new S(0, 1, 0),
      new S(0, 1, 0),
      new S(0, 1, 0),
      new S(0, 1, 0),
      new S(0, 0, 1),
      new S(0, 0, -1)
    ];
  }
  updateMatrices(t, e = 0) {
    const n = this.camera, i = this.matrix, s = t.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), Jn.setFromMatrixPosition(t.matrixWorld), n.position.copy(Jn), Pr.copy(n.position), Pr.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(Pr), n.updateMatrixWorld(), i.makeTranslation(-Jn.x, -Jn.y, -Jn.z), ha.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ha);
  }
}
oo.prototype.isPointLightShadow = !0;
class df extends Re {
  constructor(t, e, n = 0, i = 1) {
    super(t, e), this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new oo();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(t) {
    this.intensity = t / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return super.copy(t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this;
  }
}
df.prototype.isPointLight = !0;
class lo extends Yr {
  constructor(t = -1, e = 1, n = 1, i = -1, s = 0.1, a = 2e3) {
    super(), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
  }
  setViewOffset(t, e, n, i, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - t, a = n + t, o = i + e, l = i - e;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, d = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, a = s + c * this.view.width, o -= d * this.view.offsetY, l = o - d * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
lo.prototype.isOrthographicCamera = !0;
class co extends is {
  constructor() {
    super(new lo(-5, 5, 5, -5, 0.5, 500));
  }
}
co.prototype.isDirectionalLightShadow = !0;
class ho extends Re {
  constructor(t, e) {
    super(t, e), this.type = "DirectionalLight", this.position.copy(At.DefaultUp), this.updateMatrix(), this.target = new At(), this.shadow = new co();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
  }
}
ho.prototype.isDirectionalLight = !0;
class uo extends Re {
  constructor(t, e) {
    super(t, e), this.type = "AmbientLight";
  }
}
uo.prototype.isAmbientLight = !0;
class ff extends Re {
  constructor(t, e, n = 10, i = 10) {
    super(t, e), this.type = "RectAreaLight", this.width = n, this.height = i;
  }
  copy(t) {
    return super.copy(t), this.width = t.width, this.height = t.height, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.width = this.width, e.object.height = this.height, e;
  }
}
ff.prototype.isRectAreaLight = !0;
class fo {
  constructor() {
    this.coefficients = [];
    for (let t = 0; t < 9; t++)
      this.coefficients.push(new S());
  }
  set(t) {
    for (let e = 0; e < 9; e++)
      this.coefficients[e].copy(t[e]);
    return this;
  }
  zero() {
    for (let t = 0; t < 9; t++)
      this.coefficients[t].set(0, 0, 0);
    return this;
  }
  // get the radiance in the direction of the normal
  // target is a Vector3
  getAt(t, e) {
    const n = t.x, i = t.y, s = t.z, a = this.coefficients;
    return e.copy(a[0]).multiplyScalar(0.282095), e.addScaledVector(a[1], 0.488603 * i), e.addScaledVector(a[2], 0.488603 * s), e.addScaledVector(a[3], 0.488603 * n), e.addScaledVector(a[4], 1.092548 * (n * i)), e.addScaledVector(a[5], 1.092548 * (i * s)), e.addScaledVector(a[6], 0.315392 * (3 * s * s - 1)), e.addScaledVector(a[7], 1.092548 * (n * s)), e.addScaledVector(a[8], 0.546274 * (n * n - i * i)), e;
  }
  // get the irradiance (radiance convolved with cosine lobe) in the direction of the normal
  // target is a Vector3
  // https://graphics.stanford.edu/papers/envmap/envmap.pdf
  getIrradianceAt(t, e) {
    const n = t.x, i = t.y, s = t.z, a = this.coefficients;
    return e.copy(a[0]).multiplyScalar(0.886227), e.addScaledVector(a[1], 2 * 0.511664 * i), e.addScaledVector(a[2], 2 * 0.511664 * s), e.addScaledVector(a[3], 2 * 0.511664 * n), e.addScaledVector(a[4], 2 * 0.429043 * n * i), e.addScaledVector(a[5], 2 * 0.429043 * i * s), e.addScaledVector(a[6], 0.743125 * s * s - 0.247708), e.addScaledVector(a[7], 2 * 0.429043 * n * s), e.addScaledVector(a[8], 0.429043 * (n * n - i * i)), e;
  }
  add(t) {
    for (let e = 0; e < 9; e++)
      this.coefficients[e].add(t.coefficients[e]);
    return this;
  }
  addScaledSH(t, e) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].addScaledVector(t.coefficients[n], e);
    return this;
  }
  scale(t) {
    for (let e = 0; e < 9; e++)
      this.coefficients[e].multiplyScalar(t);
    return this;
  }
  lerp(t, e) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].lerp(t.coefficients[n], e);
    return this;
  }
  equals(t) {
    for (let e = 0; e < 9; e++)
      if (!this.coefficients[e].equals(t.coefficients[e]))
        return !1;
    return !0;
  }
  copy(t) {
    return this.set(t.coefficients);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  fromArray(t, e = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++)
      n[i].fromArray(t, e + i * 3);
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++)
      n[i].toArray(t, e + i * 3);
    return t;
  }
  // evaluate the basis functions
  // shBasis is an Array[ 9 ]
  static getBasisAt(t, e) {
    const n = t.x, i = t.y, s = t.z;
    e[0] = 0.282095, e[1] = 0.488603 * i, e[2] = 0.488603 * s, e[3] = 0.488603 * n, e[4] = 1.092548 * n * i, e[5] = 1.092548 * i * s, e[6] = 0.315392 * (3 * s * s - 1), e[7] = 1.092548 * n * s, e[8] = 0.546274 * (n * n - i * i);
  }
}
fo.prototype.isSphericalHarmonics3 = !0;
class rs extends Re {
  constructor(t = new fo(), e = 1) {
    super(void 0, e), this.sh = t;
  }
  copy(t) {
    return super.copy(t), this.sh.copy(t.sh), this;
  }
  fromJSON(t) {
    return this.intensity = t.intensity, this.sh.fromArray(t.sh), this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.sh = this.sh.toArray(), e;
  }
}
rs.prototype.isLightProbe = !0;
class pf {
  static decodeText(t) {
    if (typeof TextDecoder < "u")
      return new TextDecoder().decode(t);
    let e = "";
    for (let n = 0, i = t.length; n < i; n++)
      e += String.fromCharCode(t[n]);
    try {
      return decodeURIComponent(escape(e));
    } catch {
      return e;
    }
  }
  static extractUrlBase(t) {
    const e = t.lastIndexOf("/");
    return e === -1 ? "./" : t.substr(0, e + 1);
  }
}
class mf extends It {
  constructor() {
    super(), this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
  }
  copy(t) {
    return super.copy(t), this.instanceCount = t.instanceCount, this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const t = super.toJSON(this);
    return t.instanceCount = this.instanceCount, t.isInstancedBufferGeometry = !0, t;
  }
}
mf.prototype.isInstancedBufferGeometry = !0;
class gf extends $t {
  constructor(t, e, n, i) {
    typeof n == "number" && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), super(t, e, n), this.meshPerAttribute = i || 1;
  }
  copy(t) {
    return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t;
  }
}
gf.prototype.isInstancedBufferAttribute = !0;
class xf extends Ke {
  constructor(t) {
    super(t), typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(t) {
    return this.options = t, this;
  }
  load(t, e, n, i) {
    t === void 0 && (t = ""), this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const s = this, a = Pn.get(t);
    if (a !== void 0)
      return s.manager.itemStart(t), setTimeout(function() {
        e && e(a), s.manager.itemEnd(t);
      }, 0), a;
    const o = {};
    o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader, fetch(t, o).then(function(l) {
      return l.blob();
    }).then(function(l) {
      return createImageBitmap(l, Object.assign(s.options, { colorSpaceConversion: "none" }));
    }).then(function(l) {
      Pn.add(t, l), e && e(l), s.manager.itemEnd(t);
    }).catch(function(l) {
      i && i(l), s.manager.itemError(t), s.manager.itemEnd(t);
    }), s.manager.itemStart(t);
  }
}
xf.prototype.isImageBitmapLoader = !0;
let Ii;
const yf = {
  getContext: function() {
    return Ii === void 0 && (Ii = new (window.AudioContext || window.webkitAudioContext)()), Ii;
  },
  setContext: function(r) {
    Ii = r;
  }
};
class _f extends Ke {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const s = this, a = new Jd(this.manager);
    a.setResponseType("arraybuffer"), a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(t, function(o) {
      try {
        const l = o.slice(0);
        yf.getContext().decodeAudioData(l, function(d) {
          e(d);
        });
      } catch (l) {
        i ? i(l) : console.error(l), s.manager.itemError(t);
      }
    }, n, i);
  }
}
class vf extends rs {
  constructor(t, e, n = 1) {
    super(void 0, n);
    const i = new at().set(t), s = new at().set(e), a = new S(i.r, i.g, i.b), o = new S(s.r, s.g, s.b), l = Math.sqrt(Math.PI), c = l * Math.sqrt(0.75);
    this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l), this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c);
  }
}
vf.prototype.isHemisphereLightProbe = !0;
class Mf extends rs {
  constructor(t, e = 1) {
    super(void 0, e);
    const n = new at().set(t);
    this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));
  }
}
Mf.prototype.isAmbientLightProbe = !0;
class wf extends At {
  constructor(t) {
    super(), this.type = "Audio", this.listener = t, this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = [];
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(t) {
    return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this;
  }
  setMediaElementSource(t) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this;
  }
  setMediaStreamSource(t) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t), this.connect(), this;
  }
  setBuffer(t) {
    return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this;
  }
  play(t = 0) {
    if (this.isPlaying === !0) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + t;
    const e = this.context.createBufferSource();
    return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
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
      for (let t = 1, e = this.filters.length; t < e; t++)
        this.filters[t - 1].connect(this.filters[t]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else
      this.source.connect(this.getOutput());
    return this._connected = !0, this;
  }
  disconnect() {
    if (this.filters.length > 0) {
      this.source.disconnect(this.filters[0]);
      for (let t = 1, e = this.filters.length; t < e; t++)
        this.filters[t - 1].disconnect(this.filters[t]);
      this.filters[this.filters.length - 1].disconnect(this.getOutput());
    } else
      this.source.disconnect(this.getOutput());
    return this._connected = !1, this;
  }
  getFilters() {
    return this.filters;
  }
  setFilters(t) {
    return t || (t = []), this._connected === !0 ? (this.disconnect(), this.filters = t.slice(), this.connect()) : this.filters = t.slice(), this;
  }
  setDetune(t) {
    if (this.detune = t, this.source.detune !== void 0)
      return this.isPlaying === !0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this;
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(t) {
    return this.setFilters(t ? [t] : []);
  }
  setPlaybackRate(t) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.playbackRate = t, this.isPlaying === !0 && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this;
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
  setLoop(t) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.loop = t, this.isPlaying === !0 && (this.source.loop = this.loop), this;
  }
  setLoopStart(t) {
    return this.loopStart = t, this;
  }
  setLoopEnd(t) {
    return this.loopEnd = t, this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(t) {
    return this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01), this;
  }
}
class bf {
  constructor(t, e, n) {
    this.binding = t, this.valueSize = n;
    let i, s, a;
    switch (e) {
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
  accumulate(t, e) {
    const n = this.buffer, i = this.valueSize, s = t * i + i;
    let a = this.cumulativeWeight;
    if (a === 0) {
      for (let o = 0; o !== i; ++o)
        n[s + o] = n[o];
      a = e;
    } else {
      a += e;
      const o = e / a;
      this._mixBufferRegion(n, s, 0, o, i);
    }
    this.cumulativeWeight = a;
  }
  // accumulate data in the 'incoming' region into 'add'
  accumulateAdditive(t) {
    const e = this.buffer, n = this.valueSize, i = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(e, i, 0, t, n), this.cumulativeWeightAdditive += t;
  }
  // apply the state of 'accu<i>' to the binding when accus differ
  apply(t) {
    const e = this.valueSize, n = this.buffer, i = t * e + e, s = this.cumulativeWeight, a = this.cumulativeWeightAdditive, o = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, s < 1) {
      const l = e * this._origIndex;
      this._mixBufferRegion(
        n,
        i,
        l,
        1 - s,
        e
      );
    }
    a > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
    for (let l = e, c = e + e; l !== c; ++l)
      if (n[l] !== n[l + e]) {
        o.setValue(n, i);
        break;
      }
  }
  // remember the state of the bound property and copy it to both accus
  saveOriginalState() {
    const t = this.binding, e = this.buffer, n = this.valueSize, i = n * this._origIndex;
    t.getValue(e, i);
    for (let s = n, a = i; s !== a; ++s)
      e[s] = e[i + s % n];
    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
  }
  // apply the state previously taken via 'saveOriginalState' to the binding
  restoreOriginalState() {
    const t = this.valueSize * 3;
    this.binding.setValue(this.buffer, t);
  }
  _setAdditiveIdentityNumeric() {
    const t = this._addIndex * this.valueSize, e = t + this.valueSize;
    for (let n = t; n < e; n++)
      this.buffer[n] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
  }
  _setAdditiveIdentityOther() {
    const t = this._origIndex * this.valueSize, e = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++)
      this.buffer[e + n] = this.buffer[t + n];
  }
  // mix functions
  _select(t, e, n, i, s) {
    if (i >= 0.5)
      for (let a = 0; a !== s; ++a)
        t[e + a] = t[n + a];
  }
  _slerp(t, e, n, i) {
    le.slerpFlat(t, e, t, e, t, n, i);
  }
  _slerpAdditive(t, e, n, i, s) {
    const a = this._workIndex * s;
    le.multiplyQuaternionsFlat(t, a, t, e, t, n), le.slerpFlat(t, e, t, e, t, a, i);
  }
  _lerp(t, e, n, i, s) {
    const a = 1 - i;
    for (let o = 0; o !== s; ++o) {
      const l = e + o;
      t[l] = t[l] * a + t[n + o] * i;
    }
  }
  _lerpAdditive(t, e, n, i, s) {
    for (let a = 0; a !== s; ++a) {
      const o = e + a;
      t[o] = t[o] + t[n + a] * i;
    }
  }
}
const ss = "\\[\\]\\.:\\/", Sf = new RegExp("[" + ss + "]", "g"), as = "[^" + ss + "]", Tf = "[^" + ss.replace("\\.", "") + "]", Ef = /((?:WC+[\/:])*)/.source.replace("WC", as), Af = /(WCOD+)?/.source.replace("WCOD", Tf), Lf = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", as), Rf = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", as), Cf = new RegExp(
  "^" + Ef + Af + Lf + Rf + "$"
), Pf = ["material", "materials", "bones"];
class Df {
  constructor(t, e, n) {
    const i = n || Nt.parseTrackName(e);
    this._targetGroup = t, this._bindings = t.subscribe_(e, i);
  }
  getValue(t, e) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(t, e);
  }
  setValue(t, e) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)
      n[i].setValue(t, e);
  }
  bind() {
    const t = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
      t[e].bind();
  }
  unbind() {
    const t = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
      t[e].unbind();
  }
}
class Nt {
  constructor(t, e, n) {
    this.path = e, this.parsedPath = n || Nt.parseTrackName(e), this.node = Nt.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(t, e, n) {
    return t && t.isAnimationObjectGroup ? new Nt.Composite(t, e, n) : new Nt(t, e, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(t) {
    return t.replace(/\s/g, "_").replace(Sf, "");
  }
  static parseTrackName(t) {
    const e = Cf.exec(t);
    if (!e)
      throw new Error("PropertyBinding: Cannot parse trackName: " + t);
    const n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: e[2],
      objectName: e[3],
      objectIndex: e[4],
      propertyName: e[5],
      // required
      propertyIndex: e[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const s = n.nodeName.substring(i + 1);
      Pf.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
    return n;
  }
  static findNode(t, e) {
    if (!e || e === "" || e === "." || e === -1 || e === t.name || e === t.uuid)
      return t;
    if (t.skeleton) {
      const n = t.skeleton.getBoneByName(e);
      if (n !== void 0)
        return n;
    }
    if (t.children) {
      const n = function(s) {
        for (let a = 0; a < s.length; a++) {
          const o = s[a];
          if (o.name === e || o.uuid === e)
            return o;
          const l = n(o.children);
          if (l) return l;
        }
        return null;
      }, i = n(t.children);
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
  _getValue_direct(t, e) {
    t[e] = this.node[this.propertyName];
  }
  _getValue_array(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      t[e++] = n[i];
  }
  _getValue_arrayElement(t, e) {
    t[e] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(t, e) {
    this.resolvedProperty.toArray(t, e);
  }
  // Direct
  _setValue_direct(t, e) {
    this.targetObject[this.propertyName] = t[e];
  }
  _setValue_direct_setNeedsUpdate(t, e) {
    this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
    this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // EntireArray
  _setValue_array(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = t[e++];
  }
  _setValue_array_setNeedsUpdate(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = t[e++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = t[e++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // ArrayElement
  _setValue_arrayElement(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e];
  }
  _setValue_arrayElement_setNeedsUpdate(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // HasToFromArray
  _setValue_fromArray(t, e) {
    this.resolvedProperty.fromArray(t, e);
  }
  _setValue_fromArray_setNeedsUpdate(t, e) {
    this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
    this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(t, e) {
    this.bind(), this.getValue(t, e);
  }
  _setValue_unbound(t, e) {
    this.bind(), this.setValue(t, e);
  }
  // create getter / setter pair for a property in the scene graph
  bind() {
    let t = this.node;
    const e = this.parsedPath, n = e.objectName, i = e.propertyName;
    let s = e.propertyIndex;
    if (t || (t = Nt.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
      console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
      return;
    }
    if (n) {
      let c = e.objectIndex;
      switch (n) {
        case "materials":
          if (!t.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!t.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          t = t.material.materials;
          break;
        case "bones":
          if (!t.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          t = t.skeleton.bones;
          for (let d = 0; d < t.length; d++)
            if (t[d].name === c) {
              c = d;
              break;
            }
          break;
        default:
          if (t[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          t = t[n];
      }
      if (c !== void 0) {
        if (t[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
          return;
        }
        t = t[c];
      }
    }
    const a = t[i];
    if (a === void 0) {
      const c = e.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", t);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = t, t.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : t.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (s !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!t.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (t.geometry.isBufferGeometry) {
          if (!t.geometry.morphAttributes) {
            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
            return;
          }
          t.morphTargetDictionary[s] !== void 0 && (s = t.morphTargetDictionary[s]);
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
Nt.Composite = Df;
Nt.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
Nt.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
Nt.prototype.GetterByBindingType = [
  Nt.prototype._getValue_direct,
  Nt.prototype._getValue_array,
  Nt.prototype._getValue_arrayElement,
  Nt.prototype._getValue_toArray
];
Nt.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    Nt.prototype._setValue_direct,
    Nt.prototype._setValue_direct_setNeedsUpdate,
    Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    Nt.prototype._setValue_array,
    Nt.prototype._setValue_array_setNeedsUpdate,
    Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    Nt.prototype._setValue_arrayElement,
    Nt.prototype._setValue_arrayElement_setNeedsUpdate,
    Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    Nt.prototype._setValue_fromArray,
    Nt.prototype._setValue_fromArray_setNeedsUpdate,
    Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class Ff {
  constructor(t, e, n = null, i = e.blendMode) {
    this._mixer = t, this._clip = e, this._localRoot = n, this.blendMode = i;
    const s = e.tracks, a = s.length, o = new Array(a), l = {
      endingStart: 2400,
      endingEnd: 2400
    };
    for (let c = 0; c !== a; ++c) {
      const d = s[c].createInterpolant(null);
      o[c] = d, d.settings = l;
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
  startAt(t) {
    return this._startTime = t, this;
  }
  setLoop(t, e) {
    return this.loop = t, this.repetitions = e, this;
  }
  // Weight
  // set the weight stopping any scheduled fading
  // although .enabled = false yields an effective weight of zero, this
  // method does *not* change .enabled, because it would be confusing
  setEffectiveWeight(t) {
    return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading();
  }
  // return the weight considering fading and .enabled
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(t) {
    return this._scheduleFading(t, 0, 1);
  }
  fadeOut(t) {
    return this._scheduleFading(t, 1, 0);
  }
  crossFadeFrom(t, e, n) {
    if (t.fadeOut(e), this.fadeIn(e), n) {
      const i = this._clip.duration, s = t._clip.duration, a = s / i, o = i / s;
      t.warp(1, a, e), this.warp(o, 1, e);
    }
    return this;
  }
  crossFadeTo(t, e, n) {
    return t.crossFadeFrom(this, e, n);
  }
  stopFading() {
    const t = this._weightInterpolant;
    return t !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this;
  }
  // Time Scale Control
  // set the time scale stopping any scheduled warping
  // although .paused = true yields an effective time scale of zero, this
  // method does *not* change .paused, because it would be confusing
  setEffectiveTimeScale(t) {
    return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping();
  }
  // return the time scale considering warping and .paused
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(t) {
    return this.timeScale = this._clip.duration / t, this.stopWarping();
  }
  syncWith(t) {
    return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping();
  }
  halt(t) {
    return this.warp(this._effectiveTimeScale, 0, t);
  }
  warp(t, e, n) {
    const i = this._mixer, s = i.time, a = this.timeScale;
    let o = this._timeScaleInterpolant;
    o === null && (o = i._lendControlInterpolant(), this._timeScaleInterpolant = o);
    const l = o.parameterPositions, c = o.sampleValues;
    return l[0] = s, l[1] = s + n, c[0] = t / a, c[1] = e / a, this;
  }
  stopWarping() {
    const t = this._timeScaleInterpolant;
    return t !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this;
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
  _update(t, e, n, i) {
    if (!this.enabled) {
      this._updateWeight(t);
      return;
    }
    const s = this._startTime;
    if (s !== null) {
      const l = (t - s) * n;
      if (l < 0 || n === 0)
        return;
      this._startTime = null, e = n * l;
    }
    e *= this._updateTimeScale(t);
    const a = this._updateTime(e), o = this._updateWeight(t);
    if (o > 0) {
      const l = this._interpolants, c = this._propertyBindings;
      switch (this.blendMode) {
        case 2501:
          for (let d = 0, h = l.length; d !== h; ++d)
            l[d].evaluate(a), c[d].accumulateAdditive(o);
          break;
        case 2500:
        default:
          for (let d = 0, h = l.length; d !== h; ++d)
            l[d].evaluate(a), c[d].accumulate(i, o);
      }
    }
  }
  _updateWeight(t) {
    let e = 0;
    if (this.enabled) {
      e = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const i = n.evaluate(t)[0];
        e *= i, t > n.parameterPositions[1] && (this.stopFading(), i === 0 && (this.enabled = !1));
      }
    }
    return this._effectiveWeight = e, e;
  }
  _updateTimeScale(t) {
    let e = 0;
    if (!this.paused) {
      e = this.timeScale;
      const n = this._timeScaleInterpolant;
      if (n !== null) {
        const i = n.evaluate(t)[0];
        e *= i, t > n.parameterPositions[1] && (this.stopWarping(), e === 0 ? this.paused = !0 : this.timeScale = e);
      }
    }
    return this._effectiveTimeScale = e, e;
  }
  _updateTime(t) {
    const e = this._clip.duration, n = this.loop;
    let i = this.time + t, s = this._loopCount;
    const a = n === 2202;
    if (t === 0)
      return s === -1 ? i : a && (s & 1) === 1 ? e - i : i;
    if (n === 2200) {
      s === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
      t: {
        if (i >= e)
          i = e;
        else if (i < 0)
          i = 0;
        else {
          this.time = i;
          break t;
        }
        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: t < 0 ? -1 : 1
        });
      }
    } else {
      if (s === -1 && (t >= 0 ? (s = 0, this._setEndings(!0, this.repetitions === 0, a)) : this._setEndings(this.repetitions === 0, !0, a)), i >= e || i < 0) {
        const o = Math.floor(i / e);
        i -= e * o, s += Math.abs(o);
        const l = this.repetitions - s;
        if (l <= 0)
          this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = t > 0 ? e : 0, this.time = i, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: t > 0 ? 1 : -1
          });
        else {
          if (l === 1) {
            const c = t < 0;
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
        return e - i;
    }
    return i;
  }
  _setEndings(t, e, n) {
    const i = this._interpolantSettings;
    n ? (i.endingStart = 2401, i.endingEnd = 2401) : (t ? i.endingStart = this.zeroSlopeAtStart ? 2401 : 2400 : i.endingStart = 2402, e ? i.endingEnd = this.zeroSlopeAtEnd ? 2401 : 2400 : i.endingEnd = 2402);
  }
  _scheduleFading(t, e, n) {
    const i = this._mixer, s = i.time;
    let a = this._weightInterpolant;
    a === null && (a = i._lendControlInterpolant(), this._weightInterpolant = a);
    const o = a.parameterPositions, l = a.sampleValues;
    return o[0] = s, l[0] = e, o[1] = s + t, l[1] = n, this;
  }
}
class Nf extends hn {
  constructor(t) {
    super(), this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(t, e) {
    const n = t._localRoot || this._root, i = t._clip.tracks, s = i.length, a = t._propertyBindings, o = t._interpolants, l = n.uuid, c = this._bindingsByRootAndName;
    let d = c[l];
    d === void 0 && (d = {}, c[l] = d);
    for (let h = 0; h !== s; ++h) {
      const u = i[h], f = u.name;
      let p = d[f];
      if (p !== void 0)
        a[h] = p;
      else {
        if (p = a[h], p !== void 0) {
          p._cacheIndex === null && (++p.referenceCount, this._addInactiveBinding(p, l, f));
          continue;
        }
        const x = e && e._propertyBindings[h].binding.parsedPath;
        p = new bf(
          Nt.create(n, f, x),
          u.ValueTypeName,
          u.getValueSize()
        ), ++p.referenceCount, this._addInactiveBinding(p, l, f), a[h] = p;
      }
      o[h].resultBuffer = p.buffer;
    }
  }
  _activateAction(t) {
    if (!this._isActiveAction(t)) {
      if (t._cacheIndex === null) {
        const n = (t._localRoot || this._root).uuid, i = t._clip.uuid, s = this._actionsByClip[i];
        this._bindAction(
          t,
          s && s.knownActions[0]
        ), this._addInactiveAction(t, i, n);
      }
      const e = t._propertyBindings;
      for (let n = 0, i = e.length; n !== i; ++n) {
        const s = e[n];
        s.useCount++ === 0 && (this._lendBinding(s), s.saveOriginalState());
      }
      this._lendAction(t);
    }
  }
  _deactivateAction(t) {
    if (this._isActiveAction(t)) {
      const e = t._propertyBindings;
      for (let n = 0, i = e.length; n !== i; ++n) {
        const s = e[n];
        --s.useCount === 0 && (s.restoreOriginalState(), this._takeBackBinding(s));
      }
      this._takeBackAction(t);
    }
  }
  // Memory manager
  _initMemoryManager() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    const t = this;
    this.stats = {
      actions: {
        get total() {
          return t._actions.length;
        },
        get inUse() {
          return t._nActiveActions;
        }
      },
      bindings: {
        get total() {
          return t._bindings.length;
        },
        get inUse() {
          return t._nActiveBindings;
        }
      },
      controlInterpolants: {
        get total() {
          return t._controlInterpolants.length;
        },
        get inUse() {
          return t._nActiveControlInterpolants;
        }
      }
    };
  }
  // Memory management for AnimationAction objects
  _isActiveAction(t) {
    const e = t._cacheIndex;
    return e !== null && e < this._nActiveActions;
  }
  _addInactiveAction(t, e, n) {
    const i = this._actions, s = this._actionsByClip;
    let a = s[e];
    if (a === void 0)
      a = {
        knownActions: [t],
        actionByRoot: {}
      }, t._byClipCacheIndex = 0, s[e] = a;
    else {
      const o = a.knownActions;
      t._byClipCacheIndex = o.length, o.push(t);
    }
    t._cacheIndex = i.length, i.push(t), a.actionByRoot[n] = t;
  }
  _removeInactiveAction(t) {
    const e = this._actions, n = e[e.length - 1], i = t._cacheIndex;
    n._cacheIndex = i, e[i] = n, e.pop(), t._cacheIndex = null;
    const s = t._clip.uuid, a = this._actionsByClip, o = a[s], l = o.knownActions, c = l[l.length - 1], d = t._byClipCacheIndex;
    c._byClipCacheIndex = d, l[d] = c, l.pop(), t._byClipCacheIndex = null;
    const h = o.actionByRoot, u = (t._localRoot || this._root).uuid;
    delete h[u], l.length === 0 && delete a[s], this._removeInactiveBindingsForAction(t);
  }
  _removeInactiveBindingsForAction(t) {
    const e = t._propertyBindings;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const s = e[n];
      --s.referenceCount === 0 && this._removeInactiveBinding(s);
    }
  }
  _lendAction(t) {
    const e = this._actions, n = t._cacheIndex, i = this._nActiveActions++, s = e[i];
    t._cacheIndex = i, e[i] = t, s._cacheIndex = n, e[n] = s;
  }
  _takeBackAction(t) {
    const e = this._actions, n = t._cacheIndex, i = --this._nActiveActions, s = e[i];
    t._cacheIndex = i, e[i] = t, s._cacheIndex = n, e[n] = s;
  }
  // Memory management for PropertyMixer objects
  _addInactiveBinding(t, e, n) {
    const i = this._bindingsByRootAndName, s = this._bindings;
    let a = i[e];
    a === void 0 && (a = {}, i[e] = a), a[n] = t, t._cacheIndex = s.length, s.push(t);
  }
  _removeInactiveBinding(t) {
    const e = this._bindings, n = t.binding, i = n.rootNode.uuid, s = n.path, a = this._bindingsByRootAndName, o = a[i], l = e[e.length - 1], c = t._cacheIndex;
    l._cacheIndex = c, e[c] = l, e.pop(), delete o[s], Object.keys(o).length === 0 && delete a[i];
  }
  _lendBinding(t) {
    const e = this._bindings, n = t._cacheIndex, i = this._nActiveBindings++, s = e[i];
    t._cacheIndex = i, e[i] = t, s._cacheIndex = n, e[n] = s;
  }
  _takeBackBinding(t) {
    const e = this._bindings, n = t._cacheIndex, i = --this._nActiveBindings, s = e[i];
    t._cacheIndex = i, e[i] = t, s._cacheIndex = n, e[n] = s;
  }
  // Memory management of Interpolants for weight and time scale
  _lendControlInterpolant() {
    const t = this._controlInterpolants, e = this._nActiveControlInterpolants++;
    let n = t[e];
    return n === void 0 && (n = new Ka(
      new Float32Array(2),
      new Float32Array(2),
      1,
      this._controlInterpolantsResultBuffer
    ), n.__cacheIndex = e, t[e] = n), n;
  }
  _takeBackControlInterpolant(t) {
    const e = this._controlInterpolants, n = t.__cacheIndex, i = --this._nActiveControlInterpolants, s = e[i];
    t.__cacheIndex = i, e[i] = t, s.__cacheIndex = n, e[n] = s;
  }
  // return an action for a clip optionally using a custom root target
  // object (this method allocates a lot of dynamic memory in case a
  // previously unknown clip/root combination is specified)
  clipAction(t, e, n) {
    const i = e || this._root, s = i.uuid;
    let a = typeof t == "string" ? sa.findByName(i, t) : t;
    const o = a !== null ? a.uuid : t, l = this._actionsByClip[o];
    let c = null;
    if (n === void 0 && (a !== null ? n = a.blendMode : n = 2500), l !== void 0) {
      const h = l.actionByRoot[s];
      if (h !== void 0 && h.blendMode === n)
        return h;
      c = l.knownActions[0], a === null && (a = c._clip);
    }
    if (a === null) return null;
    const d = new Ff(this, a, e, n);
    return this._bindAction(d, c), this._addInactiveAction(d, o, s), d;
  }
  // get an existing action
  existingAction(t, e) {
    const n = e || this._root, i = n.uuid, s = typeof t == "string" ? sa.findByName(n, t) : t, a = s ? s.uuid : t, o = this._actionsByClip[a];
    return o !== void 0 && o.actionByRoot[i] || null;
  }
  // deactivates all previously scheduled actions
  stopAllAction() {
    const t = this._actions, e = this._nActiveActions;
    for (let n = e - 1; n >= 0; --n)
      t[n].stop();
    return this;
  }
  // advance the time and update apply the animation
  update(t) {
    t *= this.timeScale;
    const e = this._actions, n = this._nActiveActions, i = this.time += t, s = Math.sign(t), a = this._accuIndex ^= 1;
    for (let c = 0; c !== n; ++c)
      e[c]._update(i, t, s, a);
    const o = this._bindings, l = this._nActiveBindings;
    for (let c = 0; c !== l; ++c)
      o[c].apply(a);
    return this;
  }
  // Allows you to seek to a specific time in an animation.
  setTime(t) {
    this.time = 0;
    for (let e = 0; e < this._actions.length; e++)
      this._actions[e].time = 0;
    return this.update(t);
  }
  // return this mixer's root target object
  getRoot() {
    return this._root;
  }
  // free all resources specific to a particular clip
  uncacheClip(t) {
    const e = this._actions, n = t.uuid, i = this._actionsByClip, s = i[n];
    if (s !== void 0) {
      const a = s.knownActions;
      for (let o = 0, l = a.length; o !== l; ++o) {
        const c = a[o];
        this._deactivateAction(c);
        const d = c._cacheIndex, h = e[e.length - 1];
        c._cacheIndex = null, c._byClipCacheIndex = null, h._cacheIndex = d, e[d] = h, e.pop(), this._removeInactiveBindingsForAction(c);
      }
      delete i[n];
    }
  }
  // free all resources specific to a particular root target object
  uncacheRoot(t) {
    const e = t.uuid, n = this._actionsByClip;
    for (const a in n) {
      const o = n[a].actionByRoot, l = o[e];
      l !== void 0 && (this._deactivateAction(l), this._removeInactiveAction(l));
    }
    const i = this._bindingsByRootAndName, s = i[e];
    if (s !== void 0)
      for (const a in s) {
        const o = s[a];
        o.restoreOriginalState(), this._removeInactiveBinding(o);
      }
  }
  // remove a targeted clip from the cache
  uncacheAction(t, e) {
    const n = this.existingAction(t, e);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
Nf.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
class If extends un {
  constructor(t, e, n = 1) {
    super(t, e), this.meshPerAttribute = n || 1;
  }
  copy(t) {
    return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
  }
  clone(t) {
    const e = super.clone(t);
    return e.meshPerAttribute = this.meshPerAttribute, e;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.isInstancedInterleavedBuffer = !0, e.meshPerAttribute = this.meshPerAttribute, e;
  }
}
If.prototype.isInstancedInterleavedBuffer = !0;
class Bf extends At {
  constructor(t) {
    super(), this.material = t, this.render = function() {
    }, this.hasPositions = !1, this.hasNormals = !1, this.hasColors = !1, this.hasUvs = !1, this.positionArray = null, this.normalArray = null, this.colorArray = null, this.uvArray = null, this.count = 0;
  }
}
Bf.prototype.isImmediateRenderObject = !0;
const je = /* @__PURE__ */ new S(), Bi = /* @__PURE__ */ new ut(), Dr = /* @__PURE__ */ new ut();
class zf extends $r {
  constructor(t) {
    const e = po(t), n = new It(), i = [], s = [], a = new at(0, 0, 1), o = new at(0, 1, 0);
    for (let c = 0; c < e.length; c++) {
      const d = e[c];
      d.parent && d.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), s.push(a.r, a.g, a.b), s.push(o.r, o.g, o.b));
    }
    n.setAttribute("position", new kt(i, 3)), n.setAttribute("color", new kt(s, 3));
    const l = new Un({ vertexColors: !0, depthTest: !1, depthWrite: !1, toneMapped: !1, transparent: !0 });
    super(n, l), this.type = "SkeletonHelper", this.isSkeletonHelper = !0, this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1;
  }
  updateMatrixWorld(t) {
    const e = this.bones, n = this.geometry, i = n.getAttribute("position");
    Dr.copy(this.root.matrixWorld).invert();
    for (let s = 0, a = 0; s < e.length; s++) {
      const o = e[s];
      o.parent && o.parent.isBone && (Bi.multiplyMatrices(Dr, o.matrixWorld), je.setFromMatrixPosition(Bi), i.setXYZ(a, je.x, je.y, je.z), Bi.multiplyMatrices(Dr, o.parent.matrixWorld), je.setFromMatrixPosition(Bi), i.setXYZ(a + 1, je.x, je.y, je.z), a += 2);
    }
    n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(t);
  }
}
function po(r) {
  const t = [];
  r && r.isBone && t.push(r);
  for (let e = 0; e < r.children.length; e++)
    t.push.apply(t, po(r.children[e]));
  return t;
}
class Uf extends $r {
  constructor(t = 10, e = 10, n = 4473924, i = 8947848) {
    n = new at(n), i = new at(i);
    const s = e / 2, a = t / e, o = t / 2, l = [], c = [];
    for (let u = 0, f = 0, p = -o; u <= e; u++, p += a) {
      l.push(-o, 0, p, o, 0, p), l.push(p, 0, -o, p, 0, o);
      const x = u === s ? n : i;
      x.toArray(c, f), f += 3, x.toArray(c, f), f += 3, x.toArray(c, f), f += 3, x.toArray(c, f), f += 3;
    }
    const d = new It();
    d.setAttribute("position", new kt(l, 3)), d.setAttribute("color", new kt(c, 3));
    const h = new Un({ vertexColors: !0, toneMapped: !1 });
    super(d, h), this.type = "GridHelper";
  }
}
const Gf = new Float32Array(1);
new Int32Array(Gf.buffer);
const Hf = new Xr({
  side: 1,
  depthWrite: !1,
  depthTest: !1
});
new ee(new Ge(), Hf);
ge.create = function(r, t) {
  return console.log("THREE.Curve.create() has been deprecated"), r.prototype = Object.create(ge.prototype), r.prototype.constructor = r, r.prototype.getPoint = t, r;
};
Or.prototype.fromPoints = function(r) {
  return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(r);
};
Uf.prototype.setColors = function() {
  console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");
};
zf.prototype.update = function() {
  console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
};
Ke.prototype.extractUrlBase = function(r) {
  return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), pf.extractUrlBase(r);
};
Ke.Handlers = {
  add: function() {
    console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");
  },
  get: function() {
    console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");
  }
};
xe.prototype.center = function(r) {
  return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(r);
};
xe.prototype.empty = function() {
  return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty();
};
xe.prototype.isIntersectionBox = function(r) {
  return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(r);
};
xe.prototype.isIntersectionSphere = function(r) {
  return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(r);
};
xe.prototype.size = function(r) {
  return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(r);
};
Nn.prototype.empty = function() {
  return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty();
};
Wi.prototype.setFromMatrix = function(r) {
  return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(r);
};
te.prototype.flattenToArrayOffset = function(r, t) {
  return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(r, t);
};
te.prototype.multiplyVector3 = function(r) {
  return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), r.applyMatrix3(this);
};
te.prototype.multiplyVector3Array = function() {
  console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
};
te.prototype.applyToBufferAttribute = function(r) {
  return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), r.applyMatrix3(this);
};
te.prototype.applyToVector3Array = function() {
  console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
};
te.prototype.getInverse = function(r) {
  return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(r).invert();
};
ut.prototype.extractPosition = function(r) {
  return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(r);
};
ut.prototype.flattenToArrayOffset = function(r, t) {
  return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(r, t);
};
ut.prototype.getPosition = function() {
  return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), new S().setFromMatrixColumn(this, 3);
};
ut.prototype.setRotationFromQuaternion = function(r) {
  return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(r);
};
ut.prototype.multiplyToArray = function() {
  console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
};
ut.prototype.multiplyVector3 = function(r) {
  return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), r.applyMatrix4(this);
};
ut.prototype.multiplyVector4 = function(r) {
  return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), r.applyMatrix4(this);
};
ut.prototype.multiplyVector3Array = function() {
  console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
};
ut.prototype.rotateAxis = function(r) {
  console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), r.transformDirection(this);
};
ut.prototype.crossVector = function(r) {
  return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), r.applyMatrix4(this);
};
ut.prototype.translate = function() {
  console.error("THREE.Matrix4: .translate() has been removed.");
};
ut.prototype.rotateX = function() {
  console.error("THREE.Matrix4: .rotateX() has been removed.");
};
ut.prototype.rotateY = function() {
  console.error("THREE.Matrix4: .rotateY() has been removed.");
};
ut.prototype.rotateZ = function() {
  console.error("THREE.Matrix4: .rotateZ() has been removed.");
};
ut.prototype.rotateByAxis = function() {
  console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
};
ut.prototype.applyToBufferAttribute = function(r) {
  return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), r.applyMatrix4(this);
};
ut.prototype.applyToVector3Array = function() {
  console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
};
ut.prototype.makeFrustum = function(r, t, e, n, i, s) {
  return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(r, t, n, e, i, s);
};
ut.prototype.getInverse = function(r) {
  return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(r).invert();
};
Te.prototype.isIntersectionLine = function(r) {
  return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(r);
};
le.prototype.multiplyVector3 = function(r) {
  return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), r.applyQuaternion(this);
};
le.prototype.inverse = function() {
  return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert();
};
In.prototype.isIntersectionBox = function(r) {
  return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(r);
};
In.prototype.isIntersectionPlane = function(r) {
  return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(r);
};
In.prototype.isIntersectionSphere = function(r) {
  return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(r);
};
jt.prototype.area = function() {
  return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea();
};
jt.prototype.barycoordFromPoint = function(r, t) {
  return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(r, t);
};
jt.prototype.midpoint = function(r) {
  return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(r);
};
jt.prototypenormal = function(r) {
  return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(r);
};
jt.prototype.plane = function(r) {
  return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(r);
};
jt.barycoordFromPoint = function(r, t, e, n, i) {
  return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), jt.getBarycoord(r, t, e, n, i);
};
jt.normal = function(r, t, e, n) {
  return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), jt.getNormal(r, t, e, n);
};
ns.prototype.extractAllPoints = function(r) {
  return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(r);
};
ns.prototype.extrude = function(r) {
  return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new ji(this, r);
};
ns.prototype.makeGeometry = function(r) {
  return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new Pd(this, r);
};
Z.prototype.fromAttribute = function(r, t, e) {
  return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(r, t, e);
};
Z.prototype.distanceToManhattan = function(r) {
  return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(r);
};
Z.prototype.lengthManhattan = function() {
  return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
};
S.prototype.setEulerFromRotationMatrix = function() {
  console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");
};
S.prototype.setEulerFromQuaternion = function() {
  console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
};
S.prototype.getPositionFromMatrix = function(r) {
  return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(r);
};
S.prototype.getScaleFromMatrix = function(r) {
  return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(r);
};
S.prototype.getColumnFromMatrix = function(r, t) {
  return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(t, r);
};
S.prototype.applyProjection = function(r) {
  return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(r);
};
S.prototype.fromAttribute = function(r, t, e) {
  return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(r, t, e);
};
S.prototype.distanceToManhattan = function(r) {
  return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(r);
};
S.prototype.lengthManhattan = function() {
  return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
};
Bt.prototype.fromAttribute = function(r, t, e) {
  return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(r, t, e);
};
Bt.prototype.lengthManhattan = function() {
  return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
};
At.prototype.getChildByName = function(r) {
  return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(r);
};
At.prototype.renderDepth = function() {
  console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
};
At.prototype.translate = function(r, t) {
  return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, r);
};
At.prototype.getWorldRotation = function() {
  console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");
};
At.prototype.applyMatrix = function(r) {
  return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(r);
};
Object.defineProperties(At.prototype, {
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
ee.prototype.setDrawMode = function() {
  console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
};
Object.defineProperties(ee.prototype, {
  drawMode: {
    get: function() {
      return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), 0;
    },
    set: function() {
      console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
    }
  }
});
Ya.prototype.initBones = function() {
  console.error("THREE.SkinnedMesh: initBones() has been removed.");
};
ue.prototype.setLens = function(r, t) {
  console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), t !== void 0 && (this.filmGauge = t), this.setFocalLength(r);
};
Object.defineProperties(Re.prototype, {
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
Object.defineProperties($t.prototype, {
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
$t.prototype.setDynamic = function(r) {
  return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(r === !0 ? 35048 : 35044), this;
};
$t.prototype.copyIndicesArray = function() {
  console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
}, $t.prototype.setArray = function() {
  console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
};
It.prototype.addIndex = function(r) {
  console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(r);
};
It.prototype.addAttribute = function(r, t) {
  return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), !(t && t.isBufferAttribute) && !(t && t.isInterleavedBufferAttribute) ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(r, new $t(arguments[1], arguments[2]))) : r === "index" ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(t), this) : this.setAttribute(r, t);
};
It.prototype.addDrawCall = function(r, t, e) {
  e !== void 0 && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(r, t);
};
It.prototype.clearDrawCalls = function() {
  console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups();
};
It.prototype.computeOffsets = function() {
  console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
};
It.prototype.removeAttribute = function(r) {
  return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(r);
};
It.prototype.applyMatrix = function(r) {
  return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(r);
};
Object.defineProperties(It.prototype, {
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
un.prototype.setDynamic = function(r) {
  return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(r === !0 ? 35048 : 35044), this;
};
un.prototype.setArray = function() {
  console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
};
ji.prototype.getArrays = function() {
  console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.");
};
ji.prototype.addShapeList = function() {
  console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.");
};
ji.prototype.addShape = function() {
  console.error("THREE.ExtrudeGeometry: .addShape() has been removed.");
};
Zr.prototype.dispose = function() {
  console.error("THREE.Scene: .dispose() has been removed.");
};
Object.defineProperties(Qt.prototype, {
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
      return console.warn("THREE.Material: .wrapRGB has been removed."), new at();
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
Object.defineProperties(cn.prototype, {
  derivatives: {
    get: function() {
      return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives;
    },
    set: function(r) {
      console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = r;
    }
  }
});
zt.prototype.clearTarget = function(r, t, e, n) {
  console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(r), this.clear(t, e, n);
};
zt.prototype.animate = function(r) {
  console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(r);
};
zt.prototype.getCurrentRenderTarget = function() {
  return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget();
};
zt.prototype.getMaxAnisotropy = function() {
  return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy();
};
zt.prototype.getPrecision = function() {
  return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision;
};
zt.prototype.resetGLState = function() {
  return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset();
};
zt.prototype.supportsFloatTextures = function() {
  return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float");
};
zt.prototype.supportsHalfFloatTextures = function() {
  return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float");
};
zt.prototype.supportsStandardDerivatives = function() {
  return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives");
};
zt.prototype.supportsCompressedTextureS3TC = function() {
  return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc");
};
zt.prototype.supportsCompressedTexturePVRTC = function() {
  return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc");
};
zt.prototype.supportsBlendMinMax = function() {
  return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax");
};
zt.prototype.supportsVertexTextures = function() {
  return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures;
};
zt.prototype.supportsInstancedArrays = function() {
  return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays");
};
zt.prototype.enableScissorTest = function(r) {
  console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(r);
};
zt.prototype.initMaterial = function() {
  console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
};
zt.prototype.addPrePlugin = function() {
  console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
};
zt.prototype.addPostPlugin = function() {
  console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
};
zt.prototype.updateShadowMap = function() {
  console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
};
zt.prototype.setFaceCulling = function() {
  console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
};
zt.prototype.allocTextureUnit = function() {
  console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
};
zt.prototype.setTexture = function() {
  console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
};
zt.prototype.setTexture2D = function() {
  console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
};
zt.prototype.setTextureCube = function() {
  console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
};
zt.prototype.getActiveMipMapLevel = function() {
  return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel();
};
Object.defineProperties(zt.prototype, {
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
Object.defineProperties(Va.prototype, {
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
Object.defineProperties(ln.prototype, {
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
wf.prototype.load = function(r) {
  console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
  const t = this;
  return new _f().load(r, function(n) {
    t.setBuffer(n);
  }), this;
};
jr.prototype.updateCubeMap = function(r, t) {
  return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(r, t);
};
jr.prototype.clear = function(r, t, e, n) {
  return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(r, t, e, n);
};
Fn.crossOrigin = void 0;
Fn.loadTexture = function(r, t, e, n) {
  console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
  const i = new Qd();
  i.setCrossOrigin(this.crossOrigin);
  const s = i.load(r, e, void 0, n);
  return t && (s.mapping = t), s;
};
Fn.loadTextureCube = function(r, t, e, n) {
  console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
  const i = new $d();
  i.setCrossOrigin(this.crossOrigin);
  const s = i.load(r, e, void 0, n);
  return t && (s.mapping = t), s;
};
Fn.loadCompressedTexture = function() {
  console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
};
Fn.loadCompressedTextureCube = function() {
  console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
};
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: ba
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = ba);
const kf = 3, Fr = Object.freeze({}), on = /* @__PURE__ */ new Map(), Nr = /* @__PURE__ */ new Map();
function Of(r) {
  try {
    return new URL(String(r), window.location.href).toString();
  } catch {
    return String(r || "");
  }
}
function Vf() {
  try {
    for (; on.size > kf; ) {
      const r = on.keys().next().value;
      if (!r) break;
      on.delete(r);
    }
  } catch {
  }
}
async function ua({ file: r, signal: t }) {
  const e = Of(`./boards/${r}`), n = on.get(e);
  if (n && n.json)
    return on.delete(e), on.set(e, n), n.json;
  const i = Nr.get(e);
  if (i) return await i;
  const s = (async () => {
    var c, d;
    const a = await fetch(e, { signal: t });
    if (!a.ok) throw new Error(`Failed to load board: ${r}`);
    const o = String(((d = (c = a.headers) == null ? void 0 : c.get) == null ? void 0 : d.call(c, "content-type")) || "").toLowerCase();
    let l = Fr;
    if (o.includes("application/json")) {
      const h = await a.json();
      l = h && typeof h == "object" ? h : Fr;
    } else {
      const h = await a.text();
      if (h) {
        const u = JSON.parse(h);
        l = u && typeof u == "object" ? u : Fr;
      }
    }
    return on.set(e, { at: Date.now(), json: l }), Vf(), l;
  })().finally(() => Nr.delete(e));
  return Nr.set(e, s), await s;
}
function $n(r) {
  if (r)
    try {
      r.traverse((t) => {
        var e, n, i;
        try {
          (n = (e = t.geometry) == null ? void 0 : e.dispose) == null || n.call(e);
        } catch {
        }
        try {
          const s = t.material;
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
function mo(r) {
  return String(r || "").trim().toLowerCase();
}
function Vr(r, t = 1) {
  const e = Number(r);
  return Number.isFinite(e) ? String(Math.round(e * t)) : "0";
}
function Wf(r) {
  if (!Array.isArray(r) || r.length === 0) return "";
  const t = [];
  for (let e = 0; e < r.length; e++) {
    const n = mo(r[e]);
    n && t.push(n);
  }
  return t.sort(), t.join(",");
}
function Dn(r) {
  if (!Array.isArray(r) || r.length === 0) return "";
  const t = [];
  for (let e = 0; e < r.length; e++) {
    const n = r[e];
    if (Array.isArray(n)) {
      t.push(`[${Wf(n)}]`);
      continue;
    }
    if (typeof n == "number") {
      t.push(Vr(n, 1e3));
      continue;
    }
    if (typeof n == "boolean") {
      t.push(n ? "1" : "0");
      continue;
    }
    t.push(mo(n));
  }
  return t.join("|");
}
function go(r, t = 10) {
  if (!Array.isArray(r) || r.length === 0) return "";
  const e = [], n = Math.max(1, Number(t) || 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i], a = Number(s == null ? void 0 : s.x), o = Number(s == null ? void 0 : s.z);
    !Number.isFinite(a) || !Number.isFinite(o) || e.push(`${Vr(a, n)}:${Vr(o, n)}`);
  }
  return e.sort(), e.join("|");
}
const da = /* @__PURE__ */ new WeakMap(), Qn = Object.freeze({
  main: { color: 15925241, emissive: 1990999, line: 12253166 },
  island: { color: 14088174, emissive: 1590591, line: 9562328 },
  harbor: { color: 16383984, emissive: 3104596, line: 15073228 }
}), qf = Object.freeze([
  "bay",
  "harborfront",
  "harbourfront",
  "marina_bay",
  "river",
  "waterfront"
]);
function Xf(r) {
  let t = da.get(r);
  return t || (t = /* @__PURE__ */ new Map(), da.set(r, t), t);
}
function Yf(r, t) {
  const n = (Array.isArray(r == null ? void 0 : r.polygons) ? r.polygons : []).map((i) => {
    if (!Array.isArray(i) || i.length === 0) return "0";
    const s = i[0], a = i[i.length - 1];
    return Dn([
      i.length,
      Number(s == null ? void 0 : s[0]),
      Number(s == null ? void 0 : s[1]),
      Number(a == null ? void 0 : a[0]),
      Number(a == null ? void 0 : a[1])
    ]);
  }).join(",");
  return Dn([(r == null ? void 0 : r.mainPolygonIndex) ?? 0, t, n]);
}
function jf(r) {
  if (!Array.isArray(r) || r.length === 0) return !1;
  for (let t = 0; t < r.length; t++) {
    const e = String(r[t] || "").trim().toLowerCase();
    if (qf.includes(e)) return !0;
  }
  return !1;
}
function Zf(r, t, e) {
  var s, a;
  const n = [], i = Object.values(r || {});
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    if (!jf(l == null ? void 0 : l.tags)) continue;
    const c = ((s = l == null ? void 0 : l.geo) == null ? void 0 : s.coordinates) || ((a = l == null ? void 0 : l.geoOverlay) == null ? void 0 : a.coordinates);
    if (!Array.isArray(c) || c.length < 2) continue;
    const d = Number(c[0]), h = Number(c[1]);
    if (!Number.isFinite(d) || !Number.isFinite(h)) continue;
    const u = t.lonLatToWorld(d, h, e);
    n.push({ x: u.x, z: u.z });
  }
  return n;
}
function Jf(r, t, e) {
  if (!Array.isArray(r) || r.length === 0 || !Array.isArray(t) || t.length === 0)
    return [];
  const n = e * 16, i = n * n, s = /* @__PURE__ */ new Set();
  for (let o = 0; o < t.length; o++) {
    const l = t[o];
    for (let c = 0; c < r.length; c++) {
      const d = r[c], h = d.x - l.x, u = d.z - l.z;
      h * h + u * u <= i && s.add(c);
    }
  }
  const a = [];
  for (const o of s) {
    const l = r[o];
    a.push({
      x: l.x,
      z: l.z,
      y: e * 0.2,
      width: l.width * 0.92,
      height: e * 0.38,
      depth: l.depth * 0.66,
      rotationY: l.rotationY
    });
  }
  return a;
}
function $f(r, t, e) {
  const n = r.length > 0 ? r[r.length - 1] : null;
  if (!n) {
    r.push(t);
    return;
  }
  const i = t.x - n.x, s = t.z - n.z;
  i * i + s * s >= e && r.push(t);
}
function Qf({ boardDerived: r, pointsOfInterest: t, proj: e, voxelSize: n }) {
  const i = Xf(r), s = Zf(t, e, n), a = Dn([
    Yf(r, n),
    go(s, 2)
  ]), o = i.get(a);
  if (o) return o;
  const l = n * 1.1, c = l * l, d = n * 2.15, h = Number.isFinite(r == null ? void 0 : r.mainPolygonIndex) ? r.mainPolygonIndex : 0, u = [], f = [], p = [], x = Array.isArray(r == null ? void 0 : r.polygons) ? r.polygons : [];
  for (let m = 0; m < x.length; m++) {
    const w = x[m];
    if (!Array.isArray(w) || w.length < 3) continue;
    const E = m === h, b = [];
    for (let _ = 0; _ < w.length; _++) {
      const R = w[_];
      if (!Array.isArray(R) || R.length < 2) continue;
      const I = e.lonLatToWorld(Number(R[0]), Number(R[1]), n);
      $f(b, I, c);
      const B = w[(_ + 1) % w.length];
      if (!Array.isArray(B) || B.length < 2) continue;
      const U = e.lonLatToWorld(Number(B[0]), Number(B[1]), n), W = U.x - I.x, F = U.z - I.z, A = Math.hypot(W, F);
      if (!Number.isFinite(A) || A < n * 0.9) continue;
      const P = Math.atan2(F, W), D = Math.max(1, Math.floor(A / d)), C = E ? f : p;
      for (let k = 0; k < D; k++) {
        const Y = (k + 0.5) / D, X = I.x + W * Y, $ = I.z + F * Y;
        C.push({
          x: X,
          y: n * (E ? 0.28 : 0.24),
          z: $,
          width: Math.max(n * 1.05, A / D),
          height: n * (E ? 0.7 : 0.56),
          depth: n * (E ? 1.22 : 0.96),
          rotationY: P
        });
      }
    }
    b.length >= 3 && u.push({
      isMain: E,
      points: b
    });
  }
  const y = Jf(f, s, n), g = { lineLoops: u, mainTiles: f, islandTiles: p, harborTiles: y };
  return i.set(a, g), g;
}
function Ir(r, t, e) {
  if (!Array.isArray(t) || t.length === 0) return null;
  const n = new Ge(1, 1, 1), i = new Ae({
    color: e.color,
    roughness: 0.42,
    metalness: 0.08,
    emissive: e.emissive,
    emissiveIntensity: 0.22
  }), s = new Xi(n, i, t.length), a = new At();
  s.name = r, s.instanceMatrix.setUsage(35044);
  for (let o = 0; o < t.length; o++) {
    const l = t[o];
    a.position.set(l.x, l.y, l.z), a.rotation.set(0, l.rotationY, 0), a.scale.set(l.width, l.height, l.depth), a.updateMatrix(), s.setMatrixAt(o, a.matrix);
  }
  return s.count = t.length, s.instanceMatrix.needsUpdate = !0, s;
}
function Kf({ boardDerived: r, pointsOfInterest: t, proj: e, voxelSize: n }) {
  const i = new Zt();
  i.name = "coastline-layer";
  const s = Qf({ boardDerived: r, pointsOfInterest: t, proj: e, voxelSize: n }), a = Ir("coastline:main", s.mainTiles, Qn.main), o = Ir("coastline:islands", s.islandTiles, Qn.island), l = Ir("coastline:harbor", s.harborTiles, Qn.harbor);
  a && i.add(a), o && i.add(o), l && i.add(l);
  for (let c = 0; c < s.lineLoops.length; c++) {
    const d = s.lineLoops[c], h = d.isMain ? Qn.main : Qn.island, u = d.points.map((y) => new S(y.x, n * 0.58, y.z)), f = new It().setFromPoints(u), p = new Un({
      color: h.line,
      transparent: !0,
      opacity: d.isMain ? 0.72 : 0.54
    }), x = new ja(f, p);
    x.name = d.isMain ? "coastline:outline-main" : `coastline:outline-island-${c}`, i.add(x);
  }
  return i;
}
const tp = Object.freeze({
  finance: Object.freeze(["finance", "cbd", "gateway", "transport", "convention"]),
  waterfront: Object.freeze(["marina_bay", "bay", "waterfront", "river", "harborfront", "harbourfront"]),
  nightlife: Object.freeze(["nightlife", "dining", "shopping", "city"]),
  heritage: Object.freeze(["culture_heritage", "heritage", "history", "street_culture"]),
  nature: Object.freeze(["nature", "park", "wildlife", "city_in_nature", "island"])
}), fa = Object.freeze({
  finance: Object.freeze({
    densityMultiplier: 1.18,
    heightScale: 1.24,
    widthScale: 0.94,
    depthScale: 0.92,
    radiusScale: 1.02,
    minDistanceScale: 1.06,
    rotationRange: Math.PI * 0.42,
    styleOverride: "glass"
  }),
  waterfront: Object.freeze({
    densityMultiplier: 1.12,
    heightScale: 1.08,
    widthScale: 1.08,
    depthScale: 0.92,
    radiusScale: 1.18,
    minDistanceScale: 0.96,
    rotationRange: Math.PI * 0.32,
    styleOverride: "glass"
  }),
  nightlife: Object.freeze({
    densityMultiplier: 1.2,
    heightScale: 1.04,
    widthScale: 0.96,
    depthScale: 0.96,
    radiusScale: 0.94,
    minDistanceScale: 0.9,
    rotationRange: Math.PI * 0.5
  }),
  heritage: Object.freeze({
    densityMultiplier: 0.88,
    heightScale: 0.76,
    widthScale: 1.14,
    depthScale: 1.06,
    radiusScale: 0.9,
    minDistanceScale: 0.86,
    rotationRange: Math.PI * 0.22,
    styleOverride: "heritage"
  }),
  nature: Object.freeze({
    densityMultiplier: 0.8,
    heightScale: 0.66,
    widthScale: 1.22,
    depthScale: 1.14,
    radiusScale: 1.24,
    minDistanceScale: 0.84,
    rotationRange: Math.PI * 0.2,
    styleOverride: "heritage"
  }),
  mixed: Object.freeze({
    densityMultiplier: 1,
    heightScale: 1,
    widthScale: 1,
    depthScale: 1,
    radiusScale: 1,
    minDistanceScale: 1,
    rotationRange: Math.PI * 0.36
  })
});
function xo(r) {
  if (!Array.isArray(r == null ? void 0 : r.tags)) return [];
  const t = [];
  for (let e = 0; e < r.tags.length; e++) {
    const n = String(r.tags[e] || "").trim().toLowerCase();
    n && t.push(n);
  }
  return t.sort(), t;
}
function ep(r) {
  const t = xo(r), e = /* @__PURE__ */ new Map();
  for (const [s, a] of Object.entries(tp)) {
    let o = 0;
    for (let l = 0; l < t.length; l++)
      a.includes(t[l]) && (o += 1);
    o > 0 && e.set(s, o);
  }
  let n = "mixed", i = -1;
  for (const [s, a] of e.entries())
    a > i && (i = a, n = s);
  return {
    cluster: n,
    profile: fa[n] || fa.mixed
  };
}
function np(r, t) {
  var i, s, a, o, l, c;
  const e = ((i = r == null ? void 0 : r.geo) == null ? void 0 : i.coordinates) || ((s = r == null ? void 0 : r.geoOverlay) == null ? void 0 : s.coordinates), n = xo(r);
  return Dn([
    t,
    r == null ? void 0 : r.kind,
    r == null ? void 0 : r.model,
    (a = r == null ? void 0 : r.visual) == null ? void 0 : a.preset,
    (o = r == null ? void 0 : r.visual) == null ? void 0 : o.material,
    Number(((l = r == null ? void 0 : r.visual) == null ? void 0 : l.nudgeXVoxels) || 0),
    Number(((c = r == null ? void 0 : r.visual) == null ? void 0 : c.nudgeZVoxels) || 0),
    Number(e == null ? void 0 : e[0]),
    Number(e == null ? void 0 : e[1]),
    n,
    (r == null ? void 0 : r.focus) === !0
  ]);
}
const se = Object.freeze({
  trunk: 7162945,
  leaves: 3066993,
  glass: 12577279,
  stone: 15722715,
  painted: 16302737,
  matte: 9809770,
  ship: 7649791,
  plane: 16119546,
  heli: 16765286,
  car: 16742005,
  accent: 6018023
}), pa = /* @__PURE__ */ new WeakMap(), yo = Object.freeze([]), ip = Object.freeze({
  civic: { color: 14674162, emissive: 1516083 },
  glass: { color: 9169407, emissive: 1325636 },
  heritage: { color: 16302737, emissive: 3416343 }
}), rp = Object.freeze({
  airport: 1.26,
  bay: 1.08,
  cbd: 1.28,
  central: 1.16,
  city: 1.08,
  convention: 1.08,
  dining: 1.05,
  district: 1.08,
  east: 0.9,
  finance: 1.24,
  food: 0.94,
  gateway: 1.24,
  heritage: 0.86,
  island: 0.76,
  marina_bay: 1.18,
  nightlife: 1.14,
  shopping: 1.14,
  street_culture: 0.94,
  transport: 1.1,
  west: 0.92
}), ma = Object.freeze({
  civic: Object.freeze({
    widthMin: 1.3,
    widthRange: 4.2,
    depthMin: 1.2,
    depthRange: 2.8,
    heightMin: 3.8,
    heightRange: 6.1,
    radiusMin: 4.6,
    radiusRange: 10.2,
    minDistance: 3.5
  }),
  glass: Object.freeze({
    widthMin: 1.25,
    widthRange: 3.6,
    depthMin: 1.25,
    depthRange: 3.5,
    heightMin: 4.8,
    heightRange: 7.8,
    radiusMin: 4.8,
    radiusRange: 9.8,
    minDistance: 3.3
  }),
  heritage: Object.freeze({
    widthMin: 1.15,
    widthRange: 2.4,
    depthMin: 1.15,
    depthRange: 2.2,
    heightMin: 2.4,
    heightRange: 3.8,
    radiusMin: 3.9,
    radiusRange: 7.6,
    minDistance: 2.9
  })
});
function _o(r) {
  let t = pa.get(r);
  return t || (t = {
    ambientDistrictLayoutByKey: /* @__PURE__ */ new Map(),
    treeLayoutByKey: /* @__PURE__ */ new Map()
  }, pa.set(r, t), t);
}
function sp(r) {
  const t = String(r || "");
  let e = 2166136261;
  for (let n = 0; n < t.length; n++)
    e ^= t.charCodeAt(n), e = Math.imul(e, 16777619);
  return e >>> 0;
}
function vo(r) {
  let t = sp(r) || 1;
  return function() {
    return t ^= t << 13, t ^= t >>> 17, t ^= t << 5, (t >>> 0) % 1e6 / 1e6;
  };
}
function Mo(r) {
  var i, s;
  const t = ((i = r == null ? void 0 : r.geo) == null ? void 0 : i.coordinates) || ((s = r == null ? void 0 : r.geoOverlay) == null ? void 0 : s.coordinates);
  if (!Array.isArray(t) || t.length < 2) return null;
  const e = Number(t[0]), n = Number(t[1]);
  return !Number.isFinite(e) || !Number.isFinite(n) ? null : { lon: e, lat: n };
}
function ap(r, t, e) {
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n * r : r * e;
}
function zi(r, t) {
  const e = String(r || "").trim();
  if (!e) return t;
  const n = e.startsWith("#") ? e.slice(1) : e, i = Number.parseInt(n, 16);
  return Number.isFinite(i) ? i : t;
}
function re(r, t = 988960) {
  return new Ae({
    color: r,
    roughness: 0.72,
    metalness: 0.08,
    emissive: t,
    emissiveIntensity: 0.18
  });
}
function Wr(r, t, e, n) {
  if (!Array.isArray(t) || t.length === 0) return null;
  const i = new Ge(1, 1, 1), s = re(e, n), a = new Xi(i, s, t.length), o = new At();
  a.name = r, a.instanceMatrix.setUsage(35044);
  for (let l = 0; l < t.length; l++) {
    const c = t[l];
    o.position.set(Number(c.x) || 0, Number(c.y) || 0, Number(c.z) || 0), o.rotation.set(0, Number(c.rotationY) || 0, 0), o.scale.set(
      Math.max(0.2, Number(c.width) || 1),
      Math.max(0.2, Number(c.height) || 1),
      Math.max(0.2, Number(c.depth) || 1)
    ), o.updateMatrix(), a.setMatrixAt(l, o.matrix);
  }
  return a.count = t.length, a.instanceMatrix.needsUpdate = !0, a;
}
function Pt(r, t, e, n) {
  return new ee(new Ge(r, t, e), n);
}
function ga(r, t, e, n) {
  const i = new Zt(), s = Pt(r, t, e, n);
  s.position.x = -r * 0.42, s.position.y = t * 0.5;
  const a = Pt(r, t, e, n);
  return a.position.x = r * 0.42, a.position.y = t * 0.5, i.add(s, a), i;
}
function op(r, t, e) {
  const n = new Zt(), i = Pt(t, r * 2, t, e);
  i.rotation.z = Math.PI * 0.1, i.position.y = r * 0.9;
  const s = Pt(t * 1.2, t * 1.2, t * 1.2, e);
  s.position.y = r * 0.9;
  const a = Pt(t * 0.9, r * 1.5, t * 0.9, e);
  a.position.set(-r * 0.42, r * 0.38, 0), a.rotation.z = Math.PI * 0.12;
  const o = Pt(t * 0.9, r * 1.5, t * 0.9, e);
  return o.position.set(r * 0.42, r * 0.38, 0), o.rotation.z = -Math.PI * 0.12, n.add(i, s, a, o), n;
}
function lp(r, t, e) {
  const n = (r == null ? void 0 : r.visual) || {}, i = (r == null ? void 0 : r.ui) || {}, s = String(n.material || "").trim().toLowerCase(), a = String((r == null ? void 0 : r.model) || "").trim().toLowerCase(), o = String(n.preset || "").trim().toLowerCase(), l = String((r == null ? void 0 : r.label) || "").trim().toLowerCase(), c = s === "glass" ? zi(n.glassTintHex, se.glass) : s === "stone" ? se.stone : s === "painted" ? zi(i.accentHex, se.painted) : zi(i.accentHex, se.matte), d = zi(i.accentHex, se.accent), h = ap(t, n.heightVoxels, 10) * e, u = (a === "district" ? t * 8 : a === "mall" ? t * 6 : t * 4) * e, f = (a === "district" ? t * 6 : a === "park" ? t * 5 : t * 4) * e, p = re(c, s === "glass" ? 1522511 : 2103826), x = re(d, 1451315), y = new Zt();
  if (o.includes("glass_skyline") || l.includes("marina bay sands")) {
    const w = u * 0.24, E = f * 0.34;
    for (let _ = 0; _ < 3; _++) {
      const R = Pt(w, h, E, p);
      R.position.set((_ - 1) * (w * 1.55), h * 0.5, 0), y.add(R);
    }
    const b = Pt(u * 1.12, t * 1.4 * e, f * 0.5, x);
    return b.position.y = h + t * e, y.add(b), y;
  }
  if (o.includes("airport_terminal") || l.includes("changi airport")) {
    const w = Pt(u * 1.4, h * 0.55, f * 0.72, p);
    w.position.y = h * 0.28;
    const E = Pt(u * 0.16, h * 0.8, f * 0.16, x);
    return E.position.set(u * 0.38, h * 0.4, 0), y.add(w, E), y;
  }
  if (l.includes("singapore flyer"))
    return y.add(op(u * 0.42, t * 0.34 * e, x)), y;
  if (l.includes("esplanade"))
    return y.add(ga(u * 0.48, h * 0.62, f * 0.5, p)), y;
  if (o.includes("garden_glass") || o.includes("nature_dome")) {
    y.add(ga(u * 0.52, h * 0.72, f * 0.5, p));
    const w = Pt(u * 0.18, h * 0.9, f * 0.18, x);
    return w.position.y = h * 0.45, y.add(w), y;
  }
  if (o.includes("shophouse") || a === "mall") {
    const w = u * 0.22;
    for (let b = 0; b < 4; b++) {
      const _ = Pt(w, h * (0.78 + b * 0.04), f * 0.78, p);
      _.position.set((b - 1.5) * (w * 1.1), _.position.y || h * 0.4, 0), _.position.y = h * (0.39 + b * 0.02), y.add(_);
    }
    const E = Pt(u * 0.98, t * 1.15 * e, f * 0.82, re(16771751, 4866096));
    return E.position.y = h * 0.84, y.add(E), y;
  }
  if (o.includes("forest") || a === "park") {
    for (let w = 0; w < 3; w++) {
      const E = h * (0.34 + w * 0.08), b = (w - 1) * u * 0.22, _ = Pt(u * 0.14, E, f * 0.14, re(se.trunk, 2364941));
      _.position.set(b, E * 0.5, 0);
      const R = Pt(u * 0.34, u * 0.34, f * 0.34, re(se.leaves, 863259));
      R.position.set(b, E + u * 0.12, 0), y.add(_, R);
    }
    return y;
  }
  if (a === "district") {
    const w = Pt(u * 0.24, h, f * 0.24, p);
    w.position.set(-u * 0.2, h * 0.5, 0);
    const E = Pt(u * 0.2, h * 0.82, f * 0.2, x);
    E.position.set(u * 0.06, h * 0.41, f * 0.08);
    const b = Pt(u * 0.18, h * 0.66, f * 0.18, p.clone());
    return b.position.set(u * 0.28, h * 0.33, -f * 0.08), y.add(w, E, b), y;
  }
  const g = Pt(u, h, f, p);
  g.position.y = h * 0.5;
  const m = Pt(u * 0.6, t * 1.8 * e, f * 0.6, x);
  return m.position.y = h + t * e, y.add(g, m), y;
}
function cp({ pointsOfInterest: r, poiOverlay: t, proj: e, voxelSize: n }) {
  var c, d;
  const i = new Zt();
  i.name = "board-poi-overlays";
  const s = [], a = [], o = Math.max(0.45, Math.min(1.1, Number((t == null ? void 0 : t.visualScale) || 0.72))), l = Object.entries(r || {});
  for (let h = 0; h < l.length; h++) {
    const [u, f] = l[h], p = Mo(f);
    if (!p) continue;
    const x = e.lonLatToWorld(p.lon, p.lat, n), y = lp(f, n, o);
    y.name = `poi:${u}`, y.position.set(
      x.x + Number(((c = f == null ? void 0 : f.visual) == null ? void 0 : c.nudgeXVoxels) || 0) * n,
      0,
      x.z + Number(((d = f == null ? void 0 : f.visual) == null ? void 0 : d.nudgeZVoxels) || 0) * n
    ), i.add(y), s.push({ x: y.position.x, z: y.position.z }), f != null && f.focus && a.push({ x: y.position.x, z: y.position.z });
  }
  return { group: i, worldPoints: s, focusPoints: a };
}
function hp(r) {
  var n;
  if (!r || typeof r != "object") return !1;
  const t = String((r == null ? void 0 : r.model) || "").trim().toLowerCase(), e = String(((n = r == null ? void 0 : r.visual) == null ? void 0 : n.preset) || "").trim().toLowerCase();
  return !(t === "park" || e.includes("forest") || e.includes("nature"));
}
function up(r) {
  var i, s;
  const t = String((r == null ? void 0 : r.model) || "").trim().toLowerCase(), e = String(((i = r == null ? void 0 : r.visual) == null ? void 0 : i.material) || "").trim().toLowerCase(), n = String(((s = r == null ? void 0 : r.visual) == null ? void 0 : s.preset) || "").trim().toLowerCase();
  return e === "glass" || n.includes("glass") || n.includes("neon") ? "glass" : t === "district" || e === "stone" || n.includes("civic") ? "civic" : "heritage";
}
function dp(r) {
  const t = String((r == null ? void 0 : r.model) || "").trim().toLowerCase(), e = String((r == null ? void 0 : r.kind) || "").trim().toLowerCase(), n = Array.isArray(r == null ? void 0 : r.tags) ? r.tags.map((c) => String(c || "").trim().toLowerCase()).filter(Boolean) : [], i = ep(r), s = i.profile.styleOverride || up(r), a = ma[s] || ma.heritage, o = t === "district" ? 13 : t === "mall" ? 10 : e === "district" ? 9 : 6;
  let l = r != null && r.focus ? 1.18 : 1;
  t === "district" && (l *= 1.08), t === "monument" && (l *= 0.92);
  for (let c = 0; c < n.length; c++) {
    const d = rp[n[c]];
    Number.isFinite(d) && (l *= d);
  }
  return l *= i.profile.densityMultiplier, l = Math.max(0.62, Math.min(1.82, l)), {
    cluster: i.cluster,
    style: s,
    blockCount: Math.max(4, Math.min(22, Math.round(o * l))),
    radiusMin: a.radiusMin * i.profile.radiusScale * Math.max(0.88, Math.min(1.16, l)),
    radiusRange: a.radiusRange * i.profile.radiusScale * Math.max(0.82, Math.min(1.12, l)),
    widthMin: a.widthMin * i.profile.widthScale,
    widthRange: a.widthRange * i.profile.widthScale,
    depthMin: a.depthMin * i.profile.depthScale,
    depthRange: a.depthRange * i.profile.depthScale,
    heightMin: a.heightMin * i.profile.heightScale * Math.max(0.84, Math.min(1.24, l)),
    heightRange: a.heightRange * i.profile.heightScale * Math.max(0.9, Math.min(1.36, l)),
    minDistance: a.minDistance * i.profile.minDistanceScale * Math.max(0.88, Math.min(1.08, 1.1 - (l - 1) * 0.24)),
    rotationRange: i.profile.rotationRange
  };
}
function fp({ boardDerived: r, pointsOfInterest: t, proj: e, voxelSize: n }) {
  var h, u;
  const i = _o(r).ambientDistrictLayoutByKey, s = Dn([
    n,
    Object.keys(t || {}).sort().map((f) => np(t[f], f)).join("|")
  ]), a = i.get(s);
  if (a) return a;
  const o = [], l = [], c = Object.entries(t || {});
  for (let f = 0; f < c.length; f++) {
    const [p, x] = c[f];
    if (!hp(x)) continue;
    const y = Mo(x);
    if (!y) continue;
    const g = e.lonLatToWorld(y.lon, y.lat, n), m = g.x + Number(((h = x == null ? void 0 : x.visual) == null ? void 0 : h.nudgeXVoxels) || 0) * n, w = g.z + Number(((u = x == null ? void 0 : x.visual) == null ? void 0 : u.nudgeZVoxels) || 0) * n;
    o.push({ x: m, z: w });
    const E = vo(`ambient:${p}:${m}:${w}:${n}`), b = dp(x), _ = b.blockCount * 9;
    let R = 0, I = 0;
    for (; R < b.blockCount && I < _; ) {
      I++;
      const B = E() * Math.PI * 2, U = n * (b.radiusMin + E() * b.radiusRange), W = m + Math.cos(B) * U, F = w + Math.sin(B) * U;
      let A = !1;
      const P = n * b.minDistance;
      for (let $ = 0; $ < o.length; $++) {
        const K = o[$].x - W, ct = o[$].z - F;
        if (K * K + ct * ct < P * P) {
          A = !0;
          break;
        }
      }
      if (A) continue;
      const D = n * (b.widthMin + E() * b.widthRange), C = n * (b.depthMin + E() * b.depthRange), k = b.heightMin + E() * b.heightRange, Y = n * k, X = 0.82 + E() * 0.34;
      l.push({
        style: b.style,
        cluster: b.cluster,
        x: W,
        y: Y * 0.5,
        z: F,
        width: D * X,
        height: Y * (0.9 + E() * 0.2),
        depth: C * (0.86 + E() * 0.28),
        rotationY: (E() - 0.5) * b.rotationRange
      }), o.push({ x: W, z: F }), R++;
    }
  }
  const d = {
    blocks: l,
    blockedWorldPoints: o.length > 0 ? o : yo
  };
  return i.set(s, d), d;
}
function pp({ boardDerived: r, pointsOfInterest: t, proj: e, voxelSize: n }) {
  const i = new Zt();
  i.name = "board-ambient-district-overlays";
  const s = fp({ boardDerived: r, pointsOfInterest: t, proj: e, voxelSize: n });
  for (const [a, o] of Object.entries(ip)) {
    const l = s.blocks.filter((d) => d.style === a), c = Wr(`ambient:${a}`, l, o.color, o.emissive);
    c && i.add(c);
  }
  return {
    group: i,
    blockedWorldPoints: Array.isArray(s.blockedWorldPoints) ? s.blockedWorldPoints : yo
  };
}
function mp({ boardDerived: r, count: t, bounds: e, isLand: n, proj: i, voxelSize: s, blockedWorldPoints: a }) {
  const o = _o(r).treeLayoutByKey, l = Dn([t, s, go(a, 2)]), c = o.get(l);
  if (c) return c;
  const d = vo(`trees:${e.minLon}:${e.minLat}:${t}:${s}`), h = s * 6.2, u = [];
  let f = 0, p = 0;
  const x = Math.max(200, t * 30);
  for (; f < t && p < x; ) {
    p++;
    const y = e.minLon + d() * (e.maxLon - e.minLon), g = e.minLat + d() * (e.maxLat - e.minLat);
    if (!n(y, g)) continue;
    const m = i.lonLatToWorld(y, g, s);
    let w = !1;
    for (let _ = 0; _ < a.length; _++) {
      const R = a[_].x - m.x, I = a[_].z - m.z;
      if (R * R + I * I < h * h) {
        w = !0;
        break;
      }
    }
    if (w) continue;
    const E = s * (1.05 + d() * 0.65), b = s * (1.5 + d() * 1);
    u.push({
      x: m.x,
      z: m.z,
      trunkHeight: E,
      crownSize: b,
      crownOffsetY: E + b * 0.45
    }), f++;
  }
  return o.set(l, u), u;
}
function gp({ boardDerived: r, count: t, bounds: e, isLand: n, proj: i, voxelSize: s, blockedWorldPoints: a }) {
  const o = new Zt();
  o.name = "board-tree-overlays";
  const l = mp({ boardDerived: r, count: t, bounds: e, isLand: n, proj: i, voxelSize: s, blockedWorldPoints: a }), c = [], d = [];
  for (let f = 0; f < l.length; f++) {
    const p = l[f];
    c.push({
      x: p.x,
      y: p.trunkHeight * 0.5,
      z: p.z,
      width: s * 0.55,
      height: p.trunkHeight,
      depth: s * 0.55
    }), d.push({
      x: p.x,
      y: p.crownOffsetY,
      z: p.z,
      width: p.crownSize,
      height: p.crownSize,
      depth: p.crownSize
    });
  }
  const h = Wr("trees:trunks", c, se.trunk, 2364941), u = Wr("trees:canopies", d, se.leaves, 863259);
  return h && o.add(h), u && o.add(u), o;
}
function xa(r, t) {
  const e = new Zt();
  if (r === "plane") {
    const s = Pt(t * 5.4, t * 0.95, t * 1, re(se.plane, 2043197)), a = Pt(t * 1.4, t * 0.28, t * 6.2, re(se.plane, 2043197)), o = Pt(t * 1.1, t * 0.22, t * 1.8, re(se.plane, 2043197));
    return a.position.y = t * 0.1, o.position.set(-t * 2.2, t * 0.45, 0), e.add(s, a, o), e;
  }
  if (r === "heli") {
    const s = Pt(t * 2.8, t * 1.1, t * 1.4, re(se.heli, 4469519)), a = Pt(t * 3.1, t * 0.28, t * 0.28, re(se.heli, 4469519));
    a.position.x = -t * 2.1;
    const o = Pt(t * 4.6, t * 0.12, t * 0.2, re(2962486, 1118481));
    return o.position.y = t * 1, o.name = "rotor", e.add(s, a, o), e;
  }
  if (r === "ship") {
    const s = Pt(t * 5.2, t * 1.1, t * 1.9, re(se.ship, 1192269)), a = Pt(t * 2.2, t * 1, t * 1.3, re(16119546, 3358797)), o = Pt(t * 1, t * 0.8, t * 0.9, re(14673641, 3358797));
    return a.position.y = t * 0.9, a.position.x = -t * 0.45, o.position.set(-t * 1.4, t * 1.65, 0), e.add(s, a, o), e;
  }
  const n = r === "car" ? se.car : 11714243, i = Pt(t * 1.8, t * 0.7, t * 1, re(n, 1776411));
  return e.add(i), e;
}
function xp(r, t, e) {
  var l, c;
  const n = Number((c = (l = r == null ? void 0 : r.nature) == null ? void 0 : l.trees) == null ? void 0 : c.count);
  if (Number.isFinite(n) && n > 0) return Math.min(160, Math.round(n));
  const i = (t == null ? void 0 : t.bounds) || {}, s = Math.max(
    0,
    (Number(i.maxLon || 0) - Number(i.minLon || 0)) * (Number(i.maxLat || 0) - Number(i.minLat || 0))
  ), a = Object.keys(e || {}).length, o = Math.round(s * 900 + a * 0.9);
  return Math.max(36, Math.min(140, o || 72));
}
function yp({ boardElements: r, bounds: t, proj: e, voxelSize: n }) {
  const i = new Zt();
  i.name = "board-vehicle-overlays";
  const s = [], a = (r == null ? void 0 : r.transportation) || {}, o = [
    ["plane", a.plane],
    ["heli", a.heli],
    ["ship", a.ship]
  ], l = e.lonLatToWorld((t.minLon + t.maxLon) * 0.5, (t.minLat + t.maxLat) * 0.5, n), c = Math.max(n * 24, Math.min(t.maxLon - t.minLon, t.maxLat - t.minLat) * 800);
  for (let h = 0; h < o.length; h++) {
    const [u, f] = o[h];
    if (!f || typeof f != "object") continue;
    const p = Math.max(1, Math.min(6, Number((f == null ? void 0 : f.count) || (u === "plane" ? 2 : u === "ship" ? 3 : 1))));
    for (let x = 0; x < p; x++) {
      const y = xa(u, n);
      y.name = `${u}:${x}`, i.add(y);
      const g = Math.max(n * 10, Number((f == null ? void 0 : f.radius) || c * (u === "ship" ? 0.98 : u === "heli" ? 0.28 : 0.78))), m = Number((f == null ? void 0 : f.defaultSpeed) || (f == null ? void 0 : f.speed) || 35e-4), w = Number((f == null ? void 0 : f.y) ?? (u === "ship" ? -3 : n * 12)), E = x / p * Math.PI * 2;
      s.push((b) => {
        const _ = Number(b || 0) * 1e-3;
        if (u === "plane") {
          const R = E + _ * m * 8;
          y.position.set(l.x + Math.cos(R) * g, Math.max(n * 14, w * 0.78), l.z + Math.sin(R) * g * 0.64), y.rotation.y = -R;
          return;
        }
        if (u === "heli") {
          const R = E + _ * m * 4;
          y.position.set(
            l.x + Math.cos(R) * (g * 0.9),
            Math.max(n * 8, w * 0.5) + Math.sin(R * 2.6) * (n * 1.2),
            l.z + Math.sin(R * 1.4) * (g * 0.55)
          ), y.rotation.y = -R;
          const I = y.getObjectByName("rotor");
          I && (I.rotation.y = _ * 18);
          return;
        }
        if (u === "ship") {
          const R = E + _ * m * 2.4;
          y.position.set(l.x + Math.cos(R) * (g * 1.05), w, l.z + Math.sin(R) * (g * 0.88)), y.rotation.y = -R + Math.PI * 0.5;
          return;
        }
      });
    }
  }
  const d = 8;
  for (let h = 0; h < d; h++) {
    const u = xa("car", n);
    u.name = `car:${h}`, i.add(u);
    const f = h / d * Math.PI * 2;
    s.push((p) => {
      const x = Number(p || 0) * 1e-3, y = f + x * 0.032;
      u.position.set(
        l.x + Math.cos(y) * (c * 0.52),
        n * 0.45,
        l.z + Math.sin(y * 1.4) * (c * 0.22)
      ), u.rotation.y = -y;
    });
  }
  return {
    group: i,
    update(h) {
      for (let u = 0; u < s.length; u++) s[u](h);
    },
    animated: s.length > 0
  };
}
function _p({ boardElements: r, boardDerived: t, voxelSize: e, proj: n }) {
  const i = new Zt();
  i.name = "board-overlays";
  const s = (r == null ? void 0 : r.points_of_interest) || {}, a = Kf({ boardDerived: t, pointsOfInterest: s, proj: n, voxelSize: e });
  i.add(a);
  const o = (r == null ? void 0 : r.poi_overlay) || {}, l = xp(r, t, s), c = cp({ pointsOfInterest: s, poiOverlay: o, proj: n, voxelSize: e });
  i.add(c.group);
  const d = pp({
    boardDerived: t,
    pointsOfInterest: s,
    proj: n,
    voxelSize: e
  });
  i.add(d.group);
  const h = gp({
    boardDerived: t,
    count: l,
    bounds: t.bounds,
    isLand: t.polygonTester,
    proj: n,
    voxelSize: e,
    blockedWorldPoints: [
      ...c.worldPoints,
      ...d.blockedWorldPoints
    ]
  });
  i.add(h);
  const u = yp({
    boardElements: r,
    bounds: t.bounds,
    proj: n,
    voxelSize: e
  });
  return i.add(u.group), {
    group: i,
    worldPoints: c.worldPoints,
    focusPoints: c.focusPoints,
    animated: u.animated,
    update(f) {
      u.update(f);
    }
  };
}
const Kn = Object.freeze({
  coastBlendOpacity: 0.3,
  color: 8374484,
  enabled: !0,
  harborEdgeLift: 0.2,
  level: -2,
  opacity: 1
});
function Ui(r, t) {
  const e = Number(r);
  return Number.isFinite(e) ? e : t;
}
function vp(r, t) {
  const e = String(r || "").trim();
  if (!e) return t;
  const n = e.startsWith("#") ? e : `#${e}`;
  try {
    return new at(n).getHex();
  } catch {
    return t;
  }
}
function Mp(r) {
  var n;
  const t = ((n = r == null ? void 0 : r.geography) == null ? void 0 : n.water) || {}, e = t.enabled !== !1;
  return {
    coastBlendOpacity: Math.max(0.08, Math.min(0.58, Ui(t.coastBlendOpacity, Kn.coastBlendOpacity))),
    enabled: e,
    harborEdgeLift: Math.max(0, Math.min(0.6, Ui(t.harborEdgeLift, Kn.harborEdgeLift))),
    color: vp(t.color, Kn.color),
    level: Ui(t.level, Kn.level),
    opacity: Math.max(0.15, Math.min(1, Ui(t.opacity, Kn.opacity)))
  };
}
function wp({ board: r, grid: t, voxelSize: e }) {
  const n = Mp(r);
  if (!n.enabled) return null;
  const i = Math.max(t.width * 1.8, 180), s = Math.max(t.height * 1.8, 180), a = Math.max(e * 3.2, 5.5), o = new Zt();
  o.name = "water-layer";
  const l = new Ae({
    color: n.color,
    transparent: n.opacity < 0.999,
    opacity: Math.max(0.42, n.opacity * 0.72),
    roughness: 0.22,
    metalness: 0.1,
    emissive: new at(n.color).multiplyScalar(0.18),
    emissiveIntensity: 1
  }), c = new ee(new Ge(i, a, s), l);
  c.position.y = n.level - a * 0.5, o.add(c);
  const d = new Ae({
    color: new at(n.color).offsetHSL(0, 0, 0.08),
    transparent: !0,
    opacity: Math.max(0.18, n.opacity * 0.28),
    roughness: 0.08,
    metalness: 0.18,
    emissive: new at(n.color).multiplyScalar(0.28),
    emissiveIntensity: 1,
    side: 2
  }), h = new ee(new Pa(i * 0.96, s * 0.96), d);
  h.rotation.x = -Math.PI * 0.5, h.position.y = n.level + e * 0.12, o.add(h);
  const u = new Ae({
    color: new at(n.color).offsetHSL(0, 0, -0.04),
    transparent: !0,
    opacity: 0.7,
    roughness: 0.34,
    metalness: 0.1,
    emissive: new at(n.color).multiplyScalar(0.14),
    emissiveIntensity: 1
  }), f = new ee(new Ge(i * 0.985, e * 0.9, s * 0.985), u);
  f.position.y = n.level + e * 0.22, o.add(f);
  const p = new Ae({
    color: new at(n.color).offsetHSL(0, -0.04, 0.12),
    transparent: !0,
    opacity: n.coastBlendOpacity,
    roughness: 0.16,
    metalness: 0.12,
    emissive: new at(n.color).multiplyScalar(0.24),
    emissiveIntensity: 1,
    side: 2
  }), x = new ee(new Cd(i * 0.34, i * 0.5, 96), p);
  return x.rotation.x = -Math.PI * 0.5, x.position.y = n.level + e * (0.08 + n.harborEdgeLift), x.scale.z = s / i, o.add(x), o;
}
const bp = "singabldr.board.v2.json", ya = 10, Sp = 2, Tp = 520, Ep = 640, Gi = Object.freeze({
  coarse: 2475184,
  fine: 2936719
}), _a = /* @__PURE__ */ new WeakMap(), qr = Object.freeze({
  STATUS: "status:update",
  BOARD_REBUILD: "board:rebuild",
  FINE_BUILD_PREFIX: "build:fine"
}), Br = /* @__PURE__ */ new Map();
let va = "";
function me() {
  return typeof performance < "u" && performance ? performance.now() : Date.now();
}
function He(r) {
  try {
    return r();
  } catch {
    return;
  }
}
function Ap(r, t) {
  const e = String(r || "default");
  He(() => typeof window.__SINGABLDR_COALESCE == "function" ? (window.__SINGABLDR_COALESCE(e, t), !0) : !1) || Promise.resolve().then(t);
}
function Hi(r, t, e) {
  const n = String(r || "default"), s = { signature: String(t || "") };
  Br.set(n, s), Ap(n, () => {
    Br.get(n) === s && (Br.delete(n), e());
  });
}
function Ue(r, t) {
  const e = String(r || ""), n = String(t || ""), i = `${e}\0${n}`;
  i !== va && (va = i, Hi(qr.STATUS, i, () => {
    He(() => {
      const s = document.getElementById("game-title");
      s && s.textContent !== e && (s.textContent = e);
    }), He(() => {
      const s = document.getElementById("game-subtitle");
      s && s.textContent !== n && (s.textContent = n);
    });
  }));
}
function Ma() {
  const r = He(() => document.getElementById("board-select"));
  return He(() => r ? String(r.value || "").trim() : "") || bp;
}
function Lp() {
  const r = He(() => document.getElementById("board-select"));
  if (!r) return;
  let t = 0;
  r.addEventListener("change", () => {
    const e = me();
    if (!(e - t < 120)) {
      t = e;
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
function Rp(r) {
  let t = 1 / 0, e = 1 / 0, n = -1 / 0, i = -1 / 0;
  for (let s = 0; s < r.length; s++) {
    const a = r[s];
    if (!a || a.length < 2) continue;
    const o = Number(a[0]), l = Number(a[1]);
    !Number.isFinite(o) || !Number.isFinite(l) || (o < t && (t = o), o > n && (n = o), l < e && (e = l), l > i && (i = l));
  }
  return Number.isFinite(t) ? { minX: t, minY: e, maxX: n, maxY: i } : null;
}
function Cp(r, t, e) {
  let n = !1;
  for (let i = 0, s = e.length - 1; i < e.length; s = i++) {
    const a = e[i][0], o = e[i][1], l = e[s][0], c = e[s][1];
    o > t != c > t && r < (l - a) * (t - o) / (c - o + 0) + a && (n = !n);
  }
  return n;
}
function Pp(r) {
  const t = Array.isArray(r) ? r : [], e = [];
  for (const n of t) {
    if (!Array.isArray(n) || n.length < 3) continue;
    const i = Rp(n);
    i && e.push({ poly: n, bounds: i });
  }
  return function(i, s) {
    for (let a = 0; a < e.length; a++) {
      const o = e[a], l = o.bounds;
      if (!(i < l.minX || i > l.maxX || s < l.minY || s > l.maxY) && Cp(i, s, o.poly))
        return !0;
    }
    return !1;
  };
}
function Dp(r, t, e) {
  const n = r.maxLon - r.minLon, i = r.maxLat - r.minLat;
  return {
    gridToLonLat(s, a) {
      const o = r.minLon + (s + 0.5) / t * n, l = r.minLat + (a + 0.5) / e * i;
      return { lon: o, lat: l };
    },
    lonLatToWorld(s, a, o) {
      const l = (s - r.minLon) / n, c = (a - r.minLat) / i, d = (l - 0.5) * t * o, h = (c - 0.5) * e * o;
      return { x: d, z: h };
    }
  };
}
function Fp(r) {
  var l, c;
  const t = He(() => _a.get(r));
  if (t) return t;
  const e = qp(r), n = Xp(r), i = Array.isArray((l = r == null ? void 0 : r.scene) == null ? void 0 : l.polygons) ? r.scene.polygons : [], s = Number.isFinite(Number((c = r == null ? void 0 : r.scene) == null ? void 0 : c.mainPolygonIndex)) ? Math.max(0, Math.floor(Number(r.scene.mainPolygonIndex))) : 0, a = Array.isArray(r == null ? void 0 : r.features) ? r.features : [], o = {
    bounds: e,
    grid: n,
    polygons: i,
    mainPolygonIndex: s,
    features: a,
    polygonTester: Pp(i),
    buildGridCache: /* @__PURE__ */ new Map(),
    poiWorldPositionsCache: /* @__PURE__ */ new Map()
  };
  return He(() => {
    _a.set(r, o);
  }), o;
}
function Np(r, t, e) {
  const n = Number(r), i = Number(t), s = Number(e);
  return `${n}:${i}:${s}`;
}
function wo(r, t) {
  const e = Np(r.grid.width, r.grid.height, t), n = r.buildGridCache.get(e);
  if (n) return n;
  const i = Math.max(1, Math.floor(r.grid.width / t)), s = Math.max(1, Math.floor(r.grid.height / t)), a = Dp(r.bounds, i, s), o = new Float64Array(i), l = new Float64Array(s), c = new Float32Array(i), d = new Float32Array(s);
  for (let u = 0; u < i; u++)
    o[u] = r.bounds.minLon + (u + 0.5) / i * (r.bounds.maxLon - r.bounds.minLon), c[u] = (u - i / 2) * t;
  for (let u = 0; u < s; u++)
    l[u] = r.bounds.minLat + (u + 0.5) / s * (r.bounds.maxLat - r.bounds.minLat), d[u] = (u - s / 2) * t;
  const h = {
    cols: i,
    rows: s,
    max: i * s,
    proj: a,
    lonByCol: o,
    latByRow: l,
    xByCol: c,
    zByRow: d
  };
  return r.buildGridCache.set(e, h), h;
}
function Ip(r, t) {
  var a;
  const e = String(t), n = r.poiWorldPositionsCache.get(e);
  if (n) return n;
  const { proj: i } = wo(r, t), s = [];
  for (const o of r.features) {
    const l = (a = o == null ? void 0 : o.geometry) == null ? void 0 : a.coordinates;
    if (!Array.isArray(l) || l.length < 2) continue;
    const c = Number(l[0]), d = Number(l[1]);
    if (!Number.isFinite(c) || !Number.isFinite(d)) continue;
    const { x: h, z: u } = i.lonLatToWorld(c, d, t);
    s.push({ x: h, z: u });
  }
  return r.poiWorldPositionsCache.set(e, s), s;
}
function Bp() {
  const r = new zt({ antialias: !0, alpha: !0, powerPreference: "high-performance" });
  return r.setPixelRatio(Math.min(2, window.devicePixelRatio || 1)), r.setSize(window.innerWidth, window.innerHeight), r.domElement.style.position = "fixed", r.domElement.style.inset = "0", r.domElement.style.width = "100%", r.domElement.style.height = "100%", r.domElement.style.zIndex = "0", r.domElement.style.display = "block", r.domElement.style.background = "transparent", document.body.appendChild(r.domElement), r;
}
function zp() {
  const r = new ue(48, window.innerWidth / window.innerHeight, 0.1, 5e3);
  return r.position.set(420, 520, 420), r.lookAt(0, 0, 0), r;
}
function Up(r, t, e) {
  const n = Array.isArray(r) ? r.filter((p) => Number.isFinite(p == null ? void 0 : p.x) && Number.isFinite(p == null ? void 0 : p.z)) : [];
  if (!n.length)
    return {
      targetX: t.x,
      targetZ: t.z,
      distance: e
    };
  let i = 1 / 0, s = -1 / 0, a = 1 / 0, o = -1 / 0, l = 0, c = 0;
  for (let p = 0; p < n.length; p++) {
    const x = n[p];
    x.x < i && (i = x.x), x.x > s && (s = x.x), x.z < a && (a = x.z), x.z > o && (o = x.z), l += x.x, c += x.z;
  }
  const d = l / n.length, h = c / n.length, u = Math.max(1, s - i), f = Math.max(1, o - a);
  return {
    targetX: d,
    targetZ: h,
    distance: Math.max(360, Math.min(1120, Math.max(u, f) * 1.55))
  };
}
function Gp() {
  const r = new Zr();
  return r.fog = new qi(657930, 8e-4), r;
}
function Hp(r) {
  r.add(new uo(16777215, 0.55));
  const t = new ho(16777215, 0.45);
  t.position.set(300, 600, 150), r.add(t);
}
function kp(r, t, { onChange: e } = {}) {
  const n = {
    target: new S(0, 0, 0),
    distance: 760,
    yaw: -Math.PI / 4.8,
    pitch: 1,
    dragging: !1,
    dragMode: "pan",
    pointerId: null,
    lastX: 0,
    lastY: 0,
    pointers: /* @__PURE__ */ new Map(),
    pinchDistance: 0,
    pinchMidX: 0,
    pinchMidY: 0
  };
  t.style.touchAction = "none", t.addEventListener("contextmenu", (h) => h.preventDefault());
  function i() {
    const h = Math.cos(n.yaw), u = Math.sin(n.yaw), f = Math.cos(n.pitch), p = Math.sin(n.pitch), x = n.target.x + n.distance * f * h, y = n.target.z + n.distance * f * u, g = n.target.y + n.distance * p;
    r.position.set(x, g, y), r.lookAt(n.target);
    try {
      e == null || e();
    } catch {
    }
  }
  function s() {
    n.distance = Math.min(Math.max(n.distance, 180), 1700), n.pitch = Math.min(Math.max(n.pitch, 0.48), 1.38);
  }
  function a(h, u) {
    const p = 0.55 * (n.distance / 760), x = new S(Math.cos(n.yaw + Math.PI / 2), 0, Math.sin(n.yaw + Math.PI / 2)), y = new S(Math.cos(n.yaw), 0, Math.sin(n.yaw));
    n.target.addScaledVector(x, -h * p), n.target.addScaledVector(y, u * p);
  }
  function o(h, u) {
    n.yaw -= h * 85e-4, n.pitch += u * 65e-4, s();
  }
  function l(h) {
    !Number.isFinite(h) || h <= 0 || (n.distance *= h, s());
  }
  function c() {
    const h = Array.from(n.pointers.values());
    if (h.length < 2) return null;
    const u = h[0], f = h[1], p = f.x - u.x, x = f.y - u.y;
    return {
      distance: Math.hypot(p, x),
      midX: (u.x + f.x) * 0.5,
      midY: (u.y + f.y) * 0.5
    };
  }
  t.addEventListener(
    "wheel",
    (h) => {
      h.preventDefault();
      const u = Math.sign(h.deltaY);
      l(u > 0 ? 1.08 : 0.92), i();
    },
    { passive: !1 }
  ), t.addEventListener("pointerdown", (h) => {
    var u, f;
    if (n.pointers.set(h.pointerId, { x: h.clientX, y: h.clientY }), n.pointers.size >= 2) {
      const p = c();
      n.dragging = !1, n.pointerId = null, n.dragMode = "pan", n.pinchDistance = (p == null ? void 0 : p.distance) || 0, n.pinchMidX = (p == null ? void 0 : p.midX) || h.clientX, n.pinchMidY = (p == null ? void 0 : p.midY) || h.clientY, (u = t.setPointerCapture) == null || u.call(t, h.pointerId);
      return;
    }
    n.dragging = !0, n.pointerId = h.pointerId, n.dragMode = h.button === 2 || h.shiftKey || h.altKey ? "orbit" : "pan", n.lastX = h.clientX, n.lastY = h.clientY, (f = t.setPointerCapture) == null || f.call(t, h.pointerId);
  }), t.addEventListener("pointermove", (h) => {
    if (n.pointers.has(h.pointerId) && n.pointers.set(h.pointerId, { x: h.clientX, y: h.clientY }), n.pointers.size >= 2) {
      const p = c();
      if (!p) return;
      n.pinchDistance > 0 && p.distance > 0 && l(n.pinchDistance / p.distance);
      const x = p.midX - n.pinchMidX, y = p.midY - n.pinchMidY;
      n.pinchDistance = p.distance, n.pinchMidX = p.midX, n.pinchMidY = p.midY, a(x, y), i();
      return;
    }
    if (!n.dragging || n.pointerId !== h.pointerId) return;
    const u = h.clientX - n.lastX, f = h.clientY - n.lastY;
    n.lastX = h.clientX, n.lastY = h.clientY, n.dragMode === "orbit" ? o(u, f) : a(u, f), i();
  });
  function d(h) {
    n.pointers.delete(h), n.pointerId === h && (n.dragging = !1, n.pointerId = null), n.pointers.size < 2 && (n.pinchDistance = 0);
  }
  return t.addEventListener("pointerup", (h) => {
    d(h.pointerId);
  }), t.addEventListener("pointercancel", (h) => {
    d(h.pointerId);
  }), s(), i(), {
    get distance() {
      return n.distance;
    },
    setDistance(h) {
      n.distance = Number.isFinite(h) ? h : n.distance, s(), i();
    },
    setTarget(h, u, f = n.target.y) {
      n.target.x = h, n.target.z = u, n.target.y = Number.isFinite(f) ? f : n.target.y, i();
    },
    setAngles(h, u) {
      Number.isFinite(h) && (n.yaw = h), Number.isFinite(u) && (n.pitch = u), s(), i();
    }
  };
}
function Op() {
  return new Ae({
    color: Gi.coarse,
    metalness: 0.18,
    roughness: 0.55,
    emissive: 6682,
    emissiveIntensity: 0.9
  });
}
function Vp(r) {
  return r === "fine" ? Gi.fine : Gi.coarse;
}
async function wa({
  name: r,
  boardDerived: t,
  voxelSize: e,
  onProgress: n,
  signal: i
}) {
  const s = wo(t, e), a = s.cols, o = s.rows, l = s.max, c = s.proj, d = t.polygonTester, h = new Ge(e, e * 1.6, e), u = Op();
  u.color = new at(Vp(r));
  const f = new Xi(h, u, l);
  f.name = r, f.instanceMatrix.setUsage(35048), f.count = 0, f.frustumCulled = !1;
  const p = () => {
    var w, E, b;
    try {
      (E = (w = f.geometry) == null ? void 0 : w.dispose) == null || E.call(w);
    } catch {
    }
    try {
      const _ = f.material;
      Array.isArray(_) ? _.forEach((R) => {
        var I;
        return (I = R == null ? void 0 : R.dispose) == null ? void 0 : I.call(R);
      }) : (b = _ == null ? void 0 : _.dispose) == null || b.call(_);
    } catch {
    }
  }, x = new At();
  let y = 0, g = 0;
  const m = me();
  try {
    for (let w = 0; w < o; w++) {
      let E = me();
      for (let b = 0; b < a; b++) {
        if (i != null && i.aborted) throw new Error("aborted");
        const _ = s.lonByCol[b], R = s.latByRow[w];
        if (!d(_, R)) {
          g++;
          continue;
        }
        const I = s.xByCol[b], B = s.zByRow[w];
        x.position.set(I, e * 0.5, B), x.updateMatrix(), f.setMatrixAt(y, x.matrix), y++, g++, me() - E > ya && (f.count = y, f.instanceMatrix.needsUpdate = !0, n == null || n({
          phase: r,
          processed: g,
          total: l,
          visible: y,
          elapsedMs: Math.round(me() - m)
        }), await new Promise((U) => requestAnimationFrame(U)), E = me());
      }
      me() - E > ya && (f.count = y, f.instanceMatrix.needsUpdate = !0, n == null || n({
        phase: r,
        processed: g,
        total: l,
        visible: y,
        elapsedMs: Math.round(me() - m)
      }), await new Promise((b) => requestAnimationFrame(b)));
    }
    return f.count = y, f.instanceMatrix.needsUpdate = !0, n == null || n({
      phase: r,
      processed: l,
      total: l,
      visible: y,
      elapsedMs: Math.round(me() - m),
      done: !0
    }), { mesh: f, cols: a, rows: o, proj: c };
  } catch (w) {
    throw p(), w;
  }
}
function Wp(r, t) {
  const e = new Zt();
  e.name = "poi";
  const n = new Fd(t * 0.9, 16, 16), i = new Ae({ color: 16729943, emissive: 2228224, emissiveIntensity: 0.6 });
  for (const s of r || []) {
    const a = Number(s == null ? void 0 : s.x), o = Number(s == null ? void 0 : s.z);
    if (!Number.isFinite(a) || !Number.isFinite(o)) continue;
    const l = new ee(n, i);
    l.position.set(a, t * 2, o), e.add(l);
  }
  return e;
}
function qp(r) {
  var a;
  const t = (a = r == null ? void 0 : r.scene) == null ? void 0 : a.bounds, e = Number(t == null ? void 0 : t.minLon), n = Number(t == null ? void 0 : t.maxLon), i = Number(t == null ? void 0 : t.minLat), s = Number(t == null ? void 0 : t.maxLat);
  if (![e, n, i, s].every(Number.isFinite))
    throw new Error("invalid_bounds");
  return { minLon: e, maxLon: n, minLat: i, maxLat: s };
}
function Xp(r) {
  var s;
  const t = (s = r == null ? void 0 : r.scene) == null ? void 0 : s.grid, e = Number(t == null ? void 0 : t.width), n = Number(t == null ? void 0 : t.height), i = Number(t == null ? void 0 : t.voxelSize);
  if (![e, n, i].every(Number.isFinite)) throw new Error("invalid_grid");
  return { width: e, height: n, voxelSize: i };
}
function Yp() {
  try {
    return new AbortController();
  } catch {
    return null;
  }
}
async function jp() {
  Lp(), Ue("Loading…", "Fetching board data");
  const r = Bp(), t = zp(), e = Gp();
  Hp(e);
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
      if (me() - s > 180) {
        i = !1;
        return;
      }
      l();
    }, 120));
  }
  function c(F) {
    F === "continuous" && (i = !0, s = me(), l()), Hi("render", String(i), () => {
      n || (n = !0, requestAnimationFrame((A) => {
        var P;
        n = !1, I(), (P = p == null ? void 0 : p.update) == null || P.call(p, A), r.render(e, t), (i || p != null && p.animated) && c();
      }));
    });
  }
  const d = kp(t, r.domElement, {
    onChange: () => c("continuous")
  });
  let h = "coarse", u = null, f = null, p = null, x = null, y = null, g = null, m = 0, w = !1, E = "", b = 0;
  function _() {
    var F;
    o();
    try {
      (F = g == null ? void 0 : g.abort) == null || F.call(g);
    } catch {
    }
    return g = Yp(), g ? g.signal : null;
  }
  function R() {
    if (u != null && u.group) {
      try {
        e.remove(u.group);
      } catch {
      }
      $n(u.group);
    }
    if (f != null && f.group) {
      try {
        e.remove(f.group);
      } catch {
      }
      $n(f.group);
    }
    if (x) {
      try {
        e.remove(x);
      } catch {
      }
      $n(x);
    }
    if (y) {
      try {
        e.remove(y);
      } catch {
      }
      $n(y);
    }
    if (p != null && p.group) {
      try {
        e.remove(p.group);
      } catch {
      }
      $n(p.group);
    }
    u = null, f = null, p = null, x = null, y = null, h = "coarse";
  }
  function I() {
    const F = d.distance, P = (h === "fine" ? F < Ep : F < Tp) && f ? "fine" : "coarse";
    P !== h && (h = P, u != null && u.group && (u.group.visible = h === "coarse"), f != null && f.group && (f.group.visible = h === "fine"), c());
  }
  function B(F) {
    const A = F.total ? Math.round(F.processed / F.total * 100) : 0, P = `${String(F.phase || "")}|${A}|${Number(F.visible || 0)}|${!!F.done}`, D = me();
    !F.done && P === E && D - b < 120 || !F.done && D - b < 66 || (E = P, b = D, Ue("Generating Voxels…", `${F.phase} • ${A}% • visible=${F.visible ?? 0} • ${F.elapsedMs ?? 0}ms`), c());
  }
  async function U() {
    var Mt;
    const F = ++m, A = Ma();
    R();
    const P = _();
    Ue("Loading…", `Fetching board data (${A})`);
    const [D, C] = await Promise.all([
      ua({ file: A, signal: P }),
      ua({ file: "singabldr.elements.v2.json", signal: P })
    ]);
    if (F !== m) throw new Error("stale_build");
    const k = Fp(D), Y = k.bounds, X = k.grid;
    y = wp({
      board: D,
      grid: X,
      voxelSize: X.voxelSize
    }), y && e.add(y), Ue("Generating Voxels…", "coarse (fast start)");
    const $ = X.voxelSize * Sp, K = await wa({
      name: "coarse",
      boardDerived: k,
      voxelSize: $,
      onProgress: B,
      signal: P
    });
    if (F !== m) throw new Error("stale_build");
    u = { voxelSize: $, proj: K.proj, group: new Zt() }, u.group.add(K.mesh), e.add(u.group), x = Wp(Ip(k, $), $), e.add(x), p = _p({
      boardElements: C,
      boardDerived: k,
      voxelSize: $,
      proj: K.proj
    }), e.add(p.group);
    const ct = (Y.minLon + Y.maxLon) / 2, ft = (Y.minLat + Y.maxLat) / 2, G = K.proj.lonLatToWorld(ct, ft, $), Ct = Up(
      (Mt = p == null ? void 0 : p.focusPoints) != null && Mt.length ? p.focusPoints : p == null ? void 0 : p.worldPoints,
      { x: G.x, z: G.z },
      Math.max(420, Math.min(980, Math.max(X.width, X.height) * 1.15))
    ), Tt = G.x * 0.32 + Ct.targetX * 0.68, pt = G.z * 0.32 + Ct.targetZ * 0.68, dt = Math.max(420, Math.min(980, Ct.distance));
    d.setAngles(-Math.PI / 4.4, 0.98), d.setTarget(Tt, pt), d.setDistance(dt), c(), p != null && p.animated && c("continuous"), Ue("Generating Voxels…", "fine (building in background)");
    const St = X.voxelSize;
    Hi(`${qr.FINE_BUILD_PREFIX}:${A}`, String(St), async () => {
      try {
        const wt = await wa({
          name: "fine",
          boardDerived: k,
          voxelSize: St,
          onProgress: B,
          signal: P
        });
        if (F !== m) return;
        f = { voxelSize: St, proj: wt.proj, group: new Zt() }, f.group.add(wt.mesh), f.group.visible = !1, e.add(f.group), Ue((D == null ? void 0 : D.name) || "Singabldr", (D == null ? void 0 : D.subtitle) || "Geospatial Voxel World"), c();
      } catch (wt) {
        if (F !== m) return;
        Ue("Singabldr", "Fine LOD build failed; using coarse."), c(), console.warn("fine build failed", wt);
      }
    });
  }
  function W() {
    const F = Ma();
    Hi(qr.BOARD_REBUILD, F, () => {
      U().catch((A) => {
        Ue("Error", A instanceof Error ? A.message : "failed_to_rebuild");
      });
    });
  }
  try {
    await U();
  } catch (F) {
    Ue("Error", F instanceof Error ? F.message : "failed_to_init"), console.error(F), _();
  }
  He(() => {
    w || (w = !0, window.__SINGABLDR_REQUEST_BOARD_REBUILD = W);
  }), c(), window.addEventListener("resize", () => {
    r.setSize(window.innerWidth, window.innerHeight), t.aspect = window.innerWidth / window.innerHeight, t.updateProjectionMatrix(), c();
  });
}
jp();
