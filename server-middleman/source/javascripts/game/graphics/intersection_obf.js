var Intersection3D = {};
Intersection3D.d = new Float32Array(3)
Intersection3D.e1 = new Float32Array(3)
Intersection3D.e2 = new Float32Array(3)
Intersection3D.h = new Float32Array(3)
Intersection3D.s = new Float32Array(3)
Intersection3D.q = new Float32Array(3)
Intersection3D.v0 = new Float32Array(3)
Intersection3D.v1 = new Float32Array(3)
Intersection3D.v2 = new Float32Array(3)
Intersection3D.p0 = new Float32Array(3)
Intersection3D.p1 = new Float32Array(3)
Intersection3D.p2 = new Float32Array(3)
Intersection3D.vector = 
function(x, a, b) {
  /** @type {number} */
  x[0] = a[0] - b[0];
  /** @type {number} */
  x[1] = a[1] - b[1];
  /** @type {number} */
  x[2] = a[2] - b[2];
};
/**
 * @param {Array} vec0
 * @param {Array} vec1
 * @return {?}
 */
Intersection3D.dot = function(vec0, vec1) {
  return vec0[0] * vec1[0] + vec0[1] * vec1[1] + vec0[2] * vec1[2];
};
/**
 * @param {Array} radius
 * @param {Array} a
 * @param {Array} b
 * @return {undefined}
 */
Intersection3D.cross = function(radius, a, b) {
  /** @type {number} */
  radius[0] = a[1] * b[2] - a[2] * b[1];
  /** @type {number} */
  radius[1] = a[2] * b[0] - a[0] * b[2];
  /** @type {number} */
  radius[2] = a[0] * b[1] - a[1] * b[0];
};
/**
 * @param {Array} source
 * @param {Array} grid
 * @param {number} j
 * @param {number} y
 * @param {Array} value
 * @return {?}
 */
Intersection3D.shapeIntersectsShape = function(source, grid, j, y, value) {
  var target = Intersection3D.v0;
  var obj = Intersection3D.v1;
  var v2 = Intersection3D.v2;
  var b = Intersection3D.p0;
  var s = Intersection3D.p1;
  var v4 = Intersection3D.p2;
  /** @type {number} */
  var str = 0;
  /** @type {number} */
  var i = 0;
  for (;i < source.length;i += 3 * j) {
    /** @type {number} */
    var x = 0;
    for (;x < grid.length;x += 3 * y) {
      target[0] = source[i];
      target[1] = source[i + 1];
      target[2] = source[i + 2];
      obj[0] = source[i + j];
      obj[1] = source[i + 1 + j];
      obj[2] = source[i + 2 + j];
      v2[0] = source[i + 2 * j];
      v2[1] = source[i + 1 + 2 * j];
      v2[2] = source[i + 2 + 2 * j];
      b[0] = grid[x] + value[0];
      b[1] = grid[x + 1] + value[1];
      b[2] = grid[x + 2] + value[2];
      s[0] = grid[x + y] + value[0];
      s[1] = grid[x + 1 + y] + value[1];
      s[2] = grid[x + 2 + y] + value[2];
      v4[0] = grid[x + 2 * y] + value[0];
      v4[1] = grid[x + 1 + 2 * y] + value[1];
      v4[2] = grid[x + 2 + 2 * y] + value[2];
      str += Intersection3D.segmentIntersectsTriangle(b, s, target, obj, v2);
      str += Intersection3D.segmentIntersectsTriangle(b, v4, target, obj, v2);
      str += Intersection3D.segmentIntersectsTriangle(s, v4, target, obj, v2);
      str += Intersection3D.segmentIntersectsTriangle(target, obj, b, s, v4);
      str += Intersection3D.segmentIntersectsTriangle(target, v2, b, s, v4);
      str += Intersection3D.segmentIntersectsTriangle(obj, v2, b, s, v4);
    }
  }
  return str;
};
/**
 * @param {number} t
 * @param {number} v
 * @param {number} b
 * @param {Array} obj
 * @param {Array} v2
 * @return {?}
 */
Intersection3D.segmentIntersectsTriangle = function(t, v, b, obj, v2) {
  return Intersection3D.d[0] = v[0] - t[0], Intersection3D.d[1] = v[1] - t[1], Intersection3D.d[2] = v[2] - t[2], Intersection3D.vector(Intersection3D.e1, obj, b), Intersection3D.vector(Intersection3D.e2, v2, b), Intersection3D.cross(Intersection3D.h, Intersection3D.d, Intersection3D.e2), v = Intersection3D.e1[0] * Intersection3D.h[0] + Intersection3D.e1[1] * Intersection3D.h[1] + Intersection3D.e1[2] * Intersection3D.h[2], -1E-5 < v && 1E-5 > v ? 0 : (v = 1 / v, Intersection3D.vector(Intersection3D.s,
  t, b), t = v * (Intersection3D.s[0] * Intersection3D.h[0] + Intersection3D.s[1] * Intersection3D.h[1] + Intersection3D.s[2] * Intersection3D.h[2]), 0 > t || 1 < t ? 0 : (Intersection3D.cross(Intersection3D.q, Intersection3D.s, Intersection3D.e1), b = v * (Intersection3D.d[0] * Intersection3D.q[0] + Intersection3D.d[1] * Intersection3D.q[1] + Intersection3D.d[2] * Intersection3D.q[2]), 0 > b || 1 < t + b ? 0 : (t = v * (Intersection3D.e2[0] * Intersection3D.q[0] + Intersection3D.e2[1] * Intersection3D.q[1] +
  Intersection3D.e2[2] * Intersection3D.q[2]), 1E-5 < t && 1 >= t ? 1 : 0)));
};
