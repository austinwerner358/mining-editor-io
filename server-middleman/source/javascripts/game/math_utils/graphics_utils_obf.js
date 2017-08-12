(function(dataAndEvents, reporter) {
  if ("undefined" === typeof exports) {
    if ("function" == typeof define && ("object" == typeof define.amd && define.amd)) {
      reporter = {};
      define(function() {
        return reporter;
      });
    } else {
      /** @type {Window} */
      reporter = "undefined" !== typeof window ? window : dataAndEvents;
    }
  } else {
    reporter = exports;
  }
  (function(exports, dataAndEvents, MatrixArray, funx, mat2, vec2, vec3, vec4, proto, mat4, quat) {
    if (!dataAndEvents) {
      /** @type {number} */
      dataAndEvents = 1E-6;
    }
    if (!MatrixArray) {
      /** @type {Function} */
      MatrixArray = "undefined" !== typeof Float32Array ? Float32Array : Array;
    }
    if (!funx) {
      /** @type {function (): number} */
      funx = Math.random;
    }
    mat2 = {
      /**
       * @param {Function} type
       * @return {undefined}
       */
      setMatrixArrayType : function(type) {
        /** @type {Function} */
        MatrixArray = type;
      }
    };
    if (void 0 !== exports) {
      /** @type {Object} */
      exports.glMatrix = mat2;
    }
    vec2 = {
      /**
       * @return {?}
       */
      create : function() {
        var dest = new MatrixArray(2);
        return dest[0] = 0, dest[1] = 0, dest;
      },
      /**
       * @param {Array} dataAndEvents
       * @return {?}
       */
      clone : function(dataAndEvents) {
        var dest = new MatrixArray(2);
        return dest[0] = dataAndEvents[0], dest[1] = dataAndEvents[1], dest;
      },
      /**
       * @param {number} z
       * @param {number} v33
       * @return {?}
       */
      fromValues : function(z, v33) {
        var mat = new MatrixArray(2);
        return mat[0] = z, mat[1] = v33, mat;
      },
      /**
       * @param {Array} to
       * @param {Array} from
       * @return {?}
       */
      copy : function(to, from) {
        return to[0] = from[0], to[1] = from[1], to;
      },
      /**
       * @param {Array} cache
       * @param {?} value
       * @param {?} v
       * @return {?}
       */
      set : function(cache, value, v) {
        return cache[0] = value, cache[1] = v, cache;
      },
      /**
       * @param {Array} vec0
       * @param {Array} v1
       * @param {Array} v2
       * @return {?}
       */
      add : function(vec0, v1, v2) {
        return vec0[0] = v1[0] + v2[0], vec0[1] = v1[1] + v2[1], vec0;
      },
      /**
       * @param {Array} mat1
       * @param {Array} a
       * @param {Array} b
       * @return {?}
       */
      subtract : function(mat1, a, b) {
        return mat1[0] = a[0] - b[0], mat1[1] = a[1] - b[1], mat1;
      }
    };
    /** @type {function (Array, Array, Array): ?} */
    vec2.sub = vec2.subtract;
    /**
     * @param {Array} quat2
     * @param {Array} a
     * @param {Array} b
     * @return {?}
     */
    vec2.multiply = function(quat2, a, b) {
      return quat2[0] = a[0] * b[0], quat2[1] = a[1] * b[1], quat2;
    };
    /** @type {function (Array, Array, Array): ?} */
    vec2.mul = vec2.multiply;
    /**
     * @param {Array} n
     * @param {Array} vecA
     * @param {Array} vecB
     * @return {?}
     */
    vec2.divide = function(n, vecA, vecB) {
      return n[0] = vecA[0] / vecB[0], n[1] = vecA[1] / vecB[1], n;
    };
    /** @type {function (Array, Array, Array): ?} */
    vec2.div = vec2.divide;
    /**
     * @param {Array} obj
     * @param {Array} a
     * @param {Array} b
     * @return {?}
     */
    vec2.min = function(obj, a, b) {
      return obj[0] = Math.min(a[0], b[0]), obj[1] = Math.min(a[1], b[1]), obj;
    };
    /**
     * @param {Array} obj
     * @param {Array} a
     * @param {Array} b
     * @return {?}
     */
    vec2.max = function(obj, a, b) {
      return obj[0] = Math.max(a[0], b[0]), obj[1] = Math.max(a[1], b[1]), obj;
    };
    /**
     * @param {Array} out
     * @param {Array} a
     * @param {number} x
     * @return {?}
     */
    vec2.scale = function(out, a, x) {
      return out[0] = a[0] * x, out[1] = a[1] * x, out;
    };
    /**
     * @param {Array} dataAndEvents
     * @param {Array} deepDataAndEvents
     * @param {Array} mat0
     * @param {?} scalar
     * @return {?}
     */
    vec2.scaleAndAdd = function(dataAndEvents, deepDataAndEvents, mat0, scalar) {
      return dataAndEvents[0] = deepDataAndEvents[0] + mat0[0] * scalar, dataAndEvents[1] = deepDataAndEvents[1] + mat0[1] * scalar, dataAndEvents;
    };
    /**
     * @param {Array} b
     * @param {Array} a
     * @return {?}
     */
    vec2.distance = function(b, a) {
      /** @type {number} */
      var z0 = a[0] - b[0];
      /** @type {number} */
      var z1 = a[1] - b[1];
      return Math.sqrt(z0 * z0 + z1 * z1);
    };
    /** @type {function (Array, Array): ?} */
    vec2.dist = vec2.distance;
    /**
     * @param {Array} b
     * @param {Array} a
     * @return {?}
     */
    vec2.squaredDistance = function(b, a) {
      /** @type {number} */
      var z0 = a[0] - b[0];
      /** @type {number} */
      var z1 = a[1] - b[1];
      return z0 * z0 + z1 * z1;
    };
    /** @type {function (Array, Array): ?} */
    vec2.sqrDist = vec2.squaredDistance;
    /**
     * @param {number} x1
     * @return {?}
     */
    vec2.length = function(x1) {
      var x0 = x1[0];
      return x1 = x1[1], Math.sqrt(x0 * x0 + x1 * x1);
    };
    /** @type {function (number): ?} */
    vec2.len = vec2.length;
    /**
     * @param {number} z1
     * @return {?}
     */
    vec2.squaredLength = function(z1) {
      var z0 = z1[0];
      return z1 = z1[1], z0 * z0 + z1 * z1;
    };
    /** @type {function (number): ?} */
    vec2.sqrLen = vec2.squaredLength;
    /**
     * @param {Array} vec0
     * @param {Array} vec
     * @return {?}
     */
    vec2.negate = function(vec0, vec) {
      return vec0[0] = -vec[0], vec0[1] = -vec[1], vec0;
    };
    /**
     * @param {Array} a
     * @param {Array} val
     * @return {?}
     */
    vec2.normalize = function(a, val) {
      var z0 = val[0];
      var z1 = val[1];
      /** @type {number} */
      z0 = z0 * z0 + z1 * z1;
      return 0 < z0 && (z0 = 1 / Math.sqrt(z0), a[0] = val[0] * z0, a[1] = val[1] * z0), a;
    };
    /**
     * @param {Array} a
     * @param {Array} b
     * @return {?}
     */
    vec2.dot = function(a, b) {
      return a[0] * b[0] + a[1] * b[1];
    };
    /**
     * @param {Array} v
     * @param {number} a
     * @param {Array} b
     * @return {?}
     */
    vec2.cross = function(v, a, b) {
      return a = a[0] * b[1] - a[1] * b[0], v[0] = v[1] = 0, v[2] = a, v;
    };
    /**
     * @param {Array} out
     * @param {number} a
     * @param {Array} b
     * @param {number} x
     * @return {?}
     */
    vec2.lerp = function(out, a, b, x) {
      var ax = a[0];
      return a = a[1], out[0] = ax + x * (b[0] - ax), out[1] = a + x * (b[1] - a), out;
    };
    /**
     * @param {Array} max
     * @param {number} min
     * @return {?}
     */
    vec2.random = function(max, min) {
      min = min || 1;
      /** @type {number} */
      var theta2 = 2 * funx() * Math.PI;
      return max[0] = Math.cos(theta2) * min, max[1] = Math.sin(theta2) * min, max;
    };
    /**
     * @param {Array} a
     * @param {(Object|number|string)} m
     * @param {Array} dataAndEvents
     * @return {?}
     */
    vec2.transformMat2 = function(a, m, dataAndEvents) {
      var formula = m[0];
      return m = m[1], a[0] = dataAndEvents[0] * formula + dataAndEvents[2] * m, a[1] = dataAndEvents[1] * formula + dataAndEvents[3] * m, a;
    };
    /**
     * @param {Array} dataAndEvents
     * @param {(Object|number|string)} s
     * @param {Array} props
     * @return {?}
     */
    vec2.transformMat2d = function(dataAndEvents, s, props) {
      var c = s[0];
      return s = s[1], dataAndEvents[0] = props[0] * c + props[2] * s + props[4], dataAndEvents[1] = props[1] * c + props[3] * s + props[5], dataAndEvents;
    };
    /**
     * @param {Array} dataAndEvents
     * @param {(Object|number|string)} s
     * @param {Array} props
     * @return {?}
     */
    vec2.transformMat3 = function(dataAndEvents, s, props) {
      var c = s[0];
      return s = s[1], dataAndEvents[0] = props[0] * c + props[3] * s + props[6], dataAndEvents[1] = props[1] * c + props[4] * s + props[7], dataAndEvents;
    };
    /**
     * @param {Array} a
     * @param {(Object|number|string)} m
     * @param {Array} dataAndEvents
     * @return {?}
     */
    vec2.transformMat4 = function(a, m, dataAndEvents) {
      var formula = m[0];
      return m = m[1], a[0] = dataAndEvents[0] * formula + dataAndEvents[4] * m + dataAndEvents[12], a[1] = dataAndEvents[1] * formula + dataAndEvents[5] * m + dataAndEvents[13], a;
    };
    vec2.forEach = function(vec) {
      return vec = vec2.create(), function(mat, k, i, e, fn, xs) {
        if (!k) {
          /** @type {number} */
          k = 2;
        }
        if (!i) {
          /** @type {number} */
          i = 0;
        }
        e = e ? Math.min(e * k + i, mat.length) : mat.length;
        for (;i < e;i += k) {
          vec[0] = mat[i];
          vec[1] = mat[i + 1];
          fn(vec, vec, xs);
          mat[i] = vec[0];
          mat[i + 1] = vec[1];
        }
        return mat;
      };
    }();
    /**
     * @param {Array} vec
     * @return {?}
     */
    vec2.str = function(vec) {
      return "vec2(" + vec[0] + ", " + vec[1] + ")";
    };
    if (void 0 !== exports) {
      /** @type {Object} */
      exports.vec2 = vec2;
    }
    vec3 = {
      /**
       * @return {?}
       */
      create : function() {
        var dest = new MatrixArray(3);
        return dest[0] = 0, dest[1] = 0, dest[2] = 0, dest;
      },
      /**
       * @param {Array} dataAndEvents
       * @return {?}
       */
      clone : function(dataAndEvents) {
        var dest = new MatrixArray(3);
        return dest[0] = dataAndEvents[0], dest[1] = dataAndEvents[1], dest[2] = dataAndEvents[2], dest;
      },
      /**
       * @param {number} z
       * @param {number} v33
       * @param {number} v31
       * @return {?}
       */
      fromValues : function(z, v33, v31) {
        var mat = new MatrixArray(3);
        return mat[0] = z, mat[1] = v33, mat[2] = v31, mat;
      },
      /**
       * @param {Array} to
       * @param {Array} from
       * @return {?}
       */
      copy : function(to, from) {
        return to[0] = from[0], to[1] = from[1], to[2] = from[2], to;
      },
      /**
       * @param {Array} cache
       * @param {?} value
       * @param {?} v
       * @param {?} date
       * @return {?}
       */
      set : function(cache, value, v, date) {
        return cache[0] = value, cache[1] = v, cache[2] = date, cache;
      },
      /**
       * @param {Array} vec0
       * @param {Array} v1
       * @param {Array} v2
       * @return {?}
       */
      add : function(vec0, v1, v2) {
        return vec0[0] = v1[0] + v2[0], vec0[1] = v1[1] + v2[1], vec0[2] = v1[2] + v2[2], vec0;
      },
      /**
       * @param {Array} mat1
       * @param {Array} a
       * @param {Array} b
       * @return {?}
       */
      subtract : function(mat1, a, b) {
        return mat1[0] = a[0] - b[0], mat1[1] = a[1] - b[1], mat1[2] = a[2] - b[2], mat1;
      }
    };
    /** @type {function (Array, Array, Array): ?} */
    vec3.sub = vec3.subtract;
    /**
     * @param {Array} quat2
     * @param {Array} a
     * @param {Array} b
     * @return {?}
     */
    vec3.multiply = function(quat2, a, b) {
      return quat2[0] = a[0] * b[0], quat2[1] = a[1] * b[1], quat2[2] = a[2] * b[2], quat2;
    };
    /** @type {function (Array, Array, Array): ?} */
    vec3.mul = vec3.multiply;
    /**
     * @param {Array} n
     * @param {Array} vecA
     * @param {Array} vecB
     * @return {?}
     */
    vec3.divide = function(n, vecA, vecB) {
      return n[0] = vecA[0] / vecB[0], n[1] = vecA[1] / vecB[1], n[2] = vecA[2] / vecB[2], n;
    };
    /** @type {function (Array, Array, Array): ?} */
    vec3.div = vec3.divide;
    /**
     * @param {Array} obj
     * @param {Array} a
     * @param {Array} b
     * @return {?}
     */
    vec3.min = function(obj, a, b) {
      return obj[0] = Math.min(a[0], b[0]), obj[1] = Math.min(a[1], b[1]), obj[2] = Math.min(a[2], b[2]), obj;
    };
    /**
     * @param {Array} obj
     * @param {Array} a
     * @param {Array} b
     * @return {?}
     */
    vec3.max = function(obj, a, b) {
      return obj[0] = Math.max(a[0], b[0]), obj[1] = Math.max(a[1], b[1]), obj[2] = Math.max(a[2], b[2]), obj;
    };
    /**
     * @param {Array} out
     * @param {Array} a
     * @param {number} x
     * @return {?}
     */
    vec3.scale = function(out, a, x) {
      return out[0] = a[0] * x, out[1] = a[1] * x, out[2] = a[2] * x, out;
    };
    /**
     * @param {Array} dataAndEvents
     * @param {Array} deepDataAndEvents
     * @param {Array} mat0
     * @param {?} scalar
     * @return {?}
     */
    vec3.scaleAndAdd = function(dataAndEvents, deepDataAndEvents, mat0, scalar) {
      return dataAndEvents[0] = deepDataAndEvents[0] + mat0[0] * scalar, dataAndEvents[1] = deepDataAndEvents[1] + mat0[1] * scalar, dataAndEvents[2] = deepDataAndEvents[2] + mat0[2] * scalar, dataAndEvents;
    };
    /**
     * @param {Array} b
     * @param {Array} a
     * @return {?}
     */
    vec3.distance = function(b, a) {
      /** @type {number} */
      var z0 = a[0] - b[0];
      /** @type {number} */
      var z1 = a[1] - b[1];
      /** @type {number} */
      var offX = a[2] - b[2];
      return Math.sqrt(z0 * z0 + z1 * z1 + offX * offX);
    };
    /** @type {function (Array, Array): ?} */
    vec3.dist = vec3.distance;
    /**
     * @param {Array} b
     * @param {Array} a
     * @return {?}
     */
    vec3.squaredDistance = function(b, a) {
      /** @type {number} */
      var z0 = a[0] - b[0];
      /** @type {number} */
      var z1 = a[1] - b[1];
      /** @type {number} */
      var offX = a[2] - b[2];
      return z0 * z0 + z1 * z1 + offX * offX;
    };
    /** @type {function (Array, Array): ?} */
    vec3.sqrDist = vec3.squaredDistance;
    /**
     * @param {Array} v
     * @return {?}
     */
    vec3.length = function(v) {
      var x = v[0];
      var y = v[1];
      return v = v[2], Math.sqrt(x * x + y * y + v * v);
    };
    /** @type {function (Array): ?} */
    vec3.len = vec3.length;
    /**
     * @param {number} a
     * @return {?}
     */
    vec3.squaredLength = function(a) {
      var z0 = a[0];
      var z1 = a[1];
      return a = a[2], z0 * z0 + z1 * z1 + a * a;
    };
    /** @type {function (number): ?} */
    vec3.sqrLen = vec3.squaredLength;
    /**
     * @param {Array} vec0
     * @param {Array} vec
     * @return {?}
     */
    vec3.negate = function(vec0, vec) {
      return vec0[0] = -vec[0], vec0[1] = -vec[1], vec0[2] = -vec[2], vec0;
    };
    /**
     * @param {Array} a
     * @param {Array} val
     * @return {?}
     */
    vec3.normalize = function(a, val) {
      var z0 = val[0];
      var z1 = val[1];
      var y1 = val[2];
      /** @type {number} */
      z0 = z0 * z0 + z1 * z1 + y1 * y1;
      return 0 < z0 && (z0 = 1 / Math.sqrt(z0), a[0] = val[0] * z0, a[1] = val[1] * z0, a[2] = val[2] * z0), a;
    };
    /**
     * @param {Array} a
     * @param {Array} b
     * @return {?}
     */
    vec3.dot = function(a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    };
    /**
     * @param {Array} v0
     * @param {Object} b
     * @param {Array} v
     * @return {?}
     */
    vec3.cross = function(v0, b, v) {
      var b1 = b[0];
      var b2 = b[1];
      b = b[2];
      var c1 = v[0];
      var c2 = v[1];
      return v = v[2], v0[0] = b2 * v - b * c2, v0[1] = b * c1 - b1 * v, v0[2] = b1 * c2 - b2 * c1, v0;
    };
    /**
     * @param {Array} out
     * @param {number} a
     * @param {Array} b
     * @param {number} t
     * @return {?}
     */
    vec3.lerp = function(out, a, b, t) {
      var ax = a[0];
      var ay = a[1];
      return a = a[2], out[0] = ax + t * (b[0] - ax), out[1] = ay + t * (b[1] - ay), out[2] = a + t * (b[2] - a), out;
    };
    /**
     * @param {Array} min
     * @param {number} max
     * @return {?}
     */
    vec3.random = function(min, max) {
      max = max || 1;
      /** @type {number} */
      var theta2 = 2 * funx() * Math.PI;
      /** @type {number} */
      var px = 2 * funx() - 1;
      /** @type {number} */
      var td_width = Math.sqrt(1 - px * px) * max;
      return min[0] = Math.cos(theta2) * td_width, min[1] = Math.sin(theta2) * td_width, min[2] = px * max, min;
    };
    /**
     * @param {Array} a
     * @param {Array} m
     * @param {Array} mat
     * @return {?}
     */
    vec3.transformMat4 = function(a, m, mat) {
      var x = m[0];
      var y = m[1];
      return m = m[2], a[0] = mat[0] * x + mat[4] * y + mat[8] * m + mat[12], a[1] = mat[1] * x + mat[5] * y + mat[9] * m + mat[13], a[2] = mat[2] * x + mat[6] * y + mat[10] * m + mat[14], a;
    };
    /**
     * @param {Array} dataAndEvents
     * @param {Array} coords
     * @param {Array} mat
     * @return {?}
     */
    vec3.transformMat3 = function(dataAndEvents, coords, mat) {
      var x = coords[0];
      var y = coords[1];
      return coords = coords[2], dataAndEvents[0] = x * mat[0] + y * mat[3] + coords * mat[6], dataAndEvents[1] = x * mat[1] + y * mat[4] + coords * mat[7], dataAndEvents[2] = x * mat[2] + y * mat[5] + coords * mat[8], dataAndEvents;
    };
    /**
     * @param {Array} a
     * @param {Array} mat0
     * @param {number} x
     * @return {?}
     */
    vec3.transformQuat = function(a, mat0, x) {
      var a12 = mat0[0];
      var a02 = mat0[1];
      var a11 = mat0[2];
      mat0 = x[0];
      var s = x[1];
      var y = x[2];
      x = x[3];
      /** @type {number} */
      var m12 = x * a12 + s * a11 - y * a02;
      /** @type {number} */
      var acc = x * a02 + y * a12 - mat0 * a11;
      /** @type {number} */
      var m11 = x * a11 + mat0 * a02 - s * a12;
      /** @type {number} */
      a12 = -mat0 * a12 - s * a02 - y * a11;
      return a[0] = m12 * x + a12 * -mat0 + acc * -y - m11 * -s, a[1] = acc * x + a12 * -s + m11 * -mat0 - m12 * -y, a[2] = m11 * x + a12 * -y + m12 * -s - acc * -mat0, a;
    };
    vec3.forEach = function(vec) {
      return vec = vec3.create(), function(mat, k, i, e, fn, xs) {
        if (!k) {
          /** @type {number} */
          k = 3;
        }
        if (!i) {
          /** @type {number} */
          i = 0;
        }
        e = e ? Math.min(e * k + i, mat.length) : mat.length;
        for (;i < e;i += k) {
          vec[0] = mat[i];
          vec[1] = mat[i + 1];
          vec[2] = mat[i + 2];
          fn(vec, vec, xs);
          mat[i] = vec[0];
          mat[i + 1] = vec[1];
          mat[i + 2] = vec[2];
        }
        return mat;
      };
    }();
    /**
     * @param {Array} vec
     * @return {?}
     */
    vec3.str = function(vec) {
      return "vec3(" + vec[0] + ", " + vec[1] + ", " + vec[2] + ")";
    };
    if (void 0 !== exports) {
      /** @type {Object} */
      exports.vec3 = vec3;
    }
    vec4 = {
      /**
       * @return {?}
       */
      create : function() {
        var dest = new MatrixArray(4);
        return dest[0] = 0, dest[1] = 0, dest[2] = 0, dest[3] = 0, dest;
      },
      /**
       * @param {Array} dataAndEvents
       * @return {?}
       */
      clone : function(dataAndEvents) {
        var dest = new MatrixArray(4);
        return dest[0] = dataAndEvents[0], dest[1] = dataAndEvents[1], dest[2] = dataAndEvents[2], dest[3] = dataAndEvents[3], dest;
      },
      /**
       * @param {number} z
       * @param {number} v33
       * @param {number} v31
       * @param {?} x
       * @return {?}
       */
      fromValues : function(z, v33, v31, x) {
        var mat = new MatrixArray(4);
        return mat[0] = z, mat[1] = v33, mat[2] = v31, mat[3] = x, mat;
      },
      /**
       * @param {Array} to
       * @param {Array} from
       * @return {?}
       */
      copy : function(to, from) {
        return to[0] = from[0], to[1] = from[1], to[2] = from[2], to[3] = from[3], to;
      },
      /**
       * @param {Array} res
       * @param {?} key
       * @param {?} value
       * @param {?} val
       * @param {?} v
       * @return {?}
       */
      set : function(res, key, value, val, v) {
        return res[0] = key, res[1] = value, res[2] = val, res[3] = v, res;
      },
      /**
       * @param {Array} vec0
       * @param {Array} v1
       * @param {Array} v2
       * @return {?}
       */
      add : function(vec0, v1, v2) {
        return vec0[0] = v1[0] + v2[0], vec0[1] = v1[1] + v2[1], vec0[2] = v1[2] + v2[2], vec0[3] = v1[3] + v2[3], vec0;
      },
      /**
       * @param {Array} mat1
       * @param {Array} a
       * @param {Array} b
       * @return {?}
       */
      subtract : function(mat1, a, b) {
        return mat1[0] = a[0] - b[0], mat1[1] = a[1] - b[1], mat1[2] = a[2] - b[2], mat1[3] = a[3] - b[3], mat1;
      }
    };
    /** @type {function (Array, Array, Array): ?} */
    vec4.sub = vec4.subtract;
    /**
     * @param {Array} quat2
     * @param {Array} a
     * @param {Array} b
     * @return {?}
     */
    vec4.multiply = function(quat2, a, b) {
      return quat2[0] = a[0] * b[0], quat2[1] = a[1] * b[1], quat2[2] = a[2] * b[2], quat2[3] = a[3] * b[3], quat2;
    };
    /** @type {function (Array, Array, Array): ?} */
    vec4.mul = vec4.multiply;
    /**
     * @param {Array} n
     * @param {Array} vecA
     * @param {Array} vecB
     * @return {?}
     */
    vec4.divide = function(n, vecA, vecB) {
      return n[0] = vecA[0] / vecB[0], n[1] = vecA[1] / vecB[1], n[2] = vecA[2] / vecB[2], n[3] = vecA[3] / vecB[3], n;
    };
    /** @type {function (Array, Array, Array): ?} */
    vec4.div = vec4.divide;
    /**
     * @param {Array} obj
     * @param {Array} a
     * @param {Array} b
     * @return {?}
     */
    vec4.min = function(obj, a, b) {
      return obj[0] = Math.min(a[0], b[0]), obj[1] = Math.min(a[1], b[1]), obj[2] = Math.min(a[2], b[2]), obj[3] = Math.min(a[3], b[3]), obj;
    };
    /**
     * @param {Array} obj
     * @param {Array} a
     * @param {Array} b
     * @return {?}
     */
    vec4.max = function(obj, a, b) {
      return obj[0] = Math.max(a[0], b[0]), obj[1] = Math.max(a[1], b[1]), obj[2] = Math.max(a[2], b[2]), obj[3] = Math.max(a[3], b[3]), obj;
    };
    /**
     * @param {Array} out
     * @param {Array} a
     * @param {number} x
     * @return {?}
     */
    vec4.scale = function(out, a, x) {
      return out[0] = a[0] * x, out[1] = a[1] * x, out[2] = a[2] * x, out[3] = a[3] * x, out;
    };
    /**
     * @param {Array} dataAndEvents
     * @param {Array} deepDataAndEvents
     * @param {Array} mat0
     * @param {?} scalar
     * @return {?}
     */
    vec4.scaleAndAdd = function(dataAndEvents, deepDataAndEvents, mat0, scalar) {
      return dataAndEvents[0] = deepDataAndEvents[0] + mat0[0] * scalar, dataAndEvents[1] = deepDataAndEvents[1] + mat0[1] * scalar, dataAndEvents[2] = deepDataAndEvents[2] + mat0[2] * scalar, dataAndEvents[3] = deepDataAndEvents[3] + mat0[3] * scalar, dataAndEvents;
    };
    /**
     * @param {Array} b
     * @param {Array} a
     * @return {?}
     */
    vec4.distance = function(b, a) {
      /** @type {number} */
      var z0 = a[0] - b[0];
      /** @type {number} */
      var z1 = a[1] - b[1];
      /** @type {number} */
      var offX = a[2] - b[2];
      /** @type {number} */
      var dz = a[3] - b[3];
      return Math.sqrt(z0 * z0 + z1 * z1 + offX * offX + dz * dz);
    };
    /** @type {function (Array, Array): ?} */
    vec4.dist = vec4.distance;
    /**
     * @param {Array} b
     * @param {Array} a
     * @return {?}
     */
    vec4.squaredDistance = function(b, a) {
      /** @type {number} */
      var z0 = a[0] - b[0];
      /** @type {number} */
      var z1 = a[1] - b[1];
      /** @type {number} */
      var offX = a[2] - b[2];
      /** @type {number} */
      var dz = a[3] - b[3];
      return z0 * z0 + z1 * z1 + offX * offX + dz * dz;
    };
    /** @type {function (Array, Array): ?} */
    vec4.sqrDist = vec4.squaredDistance;
    /**
     * @param {Array} v
     * @return {?}
     */
    vec4.length = function(v) {
      var x = v[0];
      var y = v[1];
      var y3 = v[2];
      return v = v[3], Math.sqrt(x * x + y * y + y3 * y3 + v * v);
    };
    /** @type {function (Array): ?} */
    vec4.len = vec4.length;
    /**
     * @param {Array} q
     * @return {?}
     */
    vec4.squaredLength = function(q) {
      var z0 = q[0];
      var z1 = q[1];
      var bZ = q[2];
      return q = q[3], z0 * z0 + z1 * z1 + bZ * bZ + q * q;
    };
    /** @type {function (Array): ?} */
    vec4.sqrLen = vec4.squaredLength;
    /**
     * @param {Array} vec0
     * @param {Array} vec
     * @return {?}
     */
    vec4.negate = function(vec0, vec) {
      return vec0[0] = -vec[0], vec0[1] = -vec[1], vec0[2] = -vec[2], vec0[3] = -vec[3], vec0;
    };
    /**
     * @param {Array} a
     * @param {Array} str
     * @return {?}
     */
    vec4.normalize = function(a, str) {
      var z0 = str[0];
      var z1 = str[1];
      var value = str[2];
      var label = str[3];
      /** @type {number} */
      z0 = z0 * z0 + z1 * z1 + value * value + label * label;
      return 0 < z0 && (z0 = 1 / Math.sqrt(z0), a[0] = str[0] * z0, a[1] = str[1] * z0, a[2] = str[2] * z0, a[3] = str[3] * z0), a;
    };
    /**
     * @param {Array} a
     * @param {Array} b
     * @return {?}
     */
    vec4.dot = function(a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    };
    /**
     * @param {Array} out
     * @param {Array} a
     * @param {Array} b
     * @param {number} t
     * @return {?}
     */
    vec4.lerp = function(out, a, b, t) {
      var ay = a[0];
      var ax = a[1];
      var az = a[2];
      return a = a[3], out[0] = ay + t * (b[0] - ay), out[1] = ax + t * (b[1] - ax), out[2] = az + t * (b[2] - az), out[3] = a + t * (b[3] - a), out;
    };
    /**
     * @param {Array} out
     * @param {number} c
     * @return {?}
     */
    vec4.random = function(out, c) {
      return c = c || 1, out[0] = funx(), out[1] = funx(), out[2] = funx(), out[3] = funx(), vec4.normalize(out, out), vec4.scale(out, out, c), out;
    };
    /**
     * @param {Array} a
     * @param {Array} m
     * @param {Array} mat
     * @return {?}
     */
    vec4.transformMat4 = function(a, m, mat) {
      var x = m[0];
      var y = m[1];
      var h = m[2];
      return m = m[3], a[0] = mat[0] * x + mat[4] * y + mat[8] * h + mat[12] * m, a[1] = mat[1] * x + mat[5] * y + mat[9] * h + mat[13] * m, a[2] = mat[2] * x + mat[6] * y + mat[10] * h + mat[14] * m, a[3] = mat[3] * x + mat[7] * y + mat[11] * h + mat[15] * m, a;
    };
    /**
     * @param {Array} a
     * @param {Array} a31
     * @param {number} x
     * @return {?}
     */
    vec4.transformQuat = function(a, a31, x) {
      var y = a31[0];
      var b11 = a31[1];
      var b01 = a31[2];
      a31 = x[0];
      var s = x[1];
      var a21 = x[2];
      x = x[3];
      /** @type {number} */
      var m12 = x * y + s * b01 - a21 * b11;
      /** @type {number} */
      var p = x * b11 + a21 * y - a31 * b01;
      /** @type {number} */
      var m11 = x * b01 + a31 * b11 - s * y;
      /** @type {number} */
      y = -a31 * y - s * b11 - a21 * b01;
      return a[0] = m12 * x + y * -a31 + p * -a21 - m11 * -s, a[1] = p * x + y * -s + m11 * -a31 - m12 * -a21, a[2] = m11 * x + y * -a21 + m12 * -s - p * -a31, a;
    };
    vec4.forEach = function(vec) {
      return vec = vec4.create(), function(mat, k, i, e, fn, xs) {
        if (!k) {
          /** @type {number} */
          k = 4;
        }
        if (!i) {
          /** @type {number} */
          i = 0;
        }
        e = e ? Math.min(e * k + i, mat.length) : mat.length;
        for (;i < e;i += k) {
          vec[0] = mat[i];
          vec[1] = mat[i + 1];
          vec[2] = mat[i + 2];
          vec[3] = mat[i + 3];
          fn(vec, vec, xs);
          mat[i] = vec[0];
          mat[i + 1] = vec[1];
          mat[i + 2] = vec[2];
          mat[i + 3] = vec[3];
        }
        return mat;
      };
    }();
    /**
     * @param {Array} vec
     * @return {?}
     */
    vec4.str = function(vec) {
      return "vec4(" + vec[0] + ", " + vec[1] + ", " + vec[2] + ", " + vec[3] + ")";
    };
    if (void 0 !== exports) {
      /** @type {Object} */
      exports.vec4 = vec4;
    }
    mat2 = {
      /**
       * @return {?}
       */
      create : function() {
        var dest = new MatrixArray(4);
        return dest[0] = 1, dest[1] = 0, dest[2] = 0, dest[3] = 1, dest;
      },
      /**
       * @param {Array} dataAndEvents
       * @return {?}
       */
      clone : function(dataAndEvents) {
        var dest = new MatrixArray(4);
        return dest[0] = dataAndEvents[0], dest[1] = dataAndEvents[1], dest[2] = dataAndEvents[2], dest[3] = dataAndEvents[3], dest;
      },
      /**
       * @param {Array} to
       * @param {Array} from
       * @return {?}
       */
      copy : function(to, from) {
        return to[0] = from[0], to[1] = from[1], to[2] = from[2], to[3] = from[3], to;
      },
      /**
       * @param {Array} var_args
       * @return {?}
       */
      identity : function(var_args) {
        return var_args[0] = 1, var_args[1] = 0, var_args[2] = 0, var_args[3] = 1, var_args;
      },
      /**
       * @param {Array} out
       * @param {Array} a
       * @return {?}
       */
      transpose : function(out, a) {
        if (out === a) {
          var a12 = a[1];
          out[1] = a[2];
          out[2] = a12;
        } else {
          out[0] = a[0];
          out[1] = a[2];
          out[2] = a[1];
          out[3] = a[3];
        }
        return out;
      },
      /**
       * @param {Array} resultMat
       * @param {Array} mat0
       * @return {?}
       */
      invert : function(resultMat, mat0) {
        var a12 = mat0[0];
        var a22 = mat0[1];
        var a10 = mat0[2];
        var a21 = mat0[3];
        /** @type {number} */
        var b11 = a12 * a21 - a10 * a22;
        return b11 ? (b11 = 1 / b11, resultMat[0] = a21 * b11, resultMat[1] = -a22 * b11, resultMat[2] = -a10 * b11, resultMat[3] = a12 * b11, resultMat) : null;
      },
      /**
       * @param {Array} a
       * @param {Array} b
       * @return {?}
       */
      adjoint : function(a, b) {
        var b21 = b[0];
        return a[0] = b[3], a[1] = -b[1], a[2] = -b[2], a[3] = b21, a;
      },
      /**
       * @param {Array} mat
       * @return {?}
       */
      determinant : function(mat) {
        return mat[0] * mat[3] - mat[2] * mat[1];
      },
      /**
       * @param {Array} quat2
       * @param {Array} b
       * @param {Array} a
       * @return {?}
       */
      multiply : function(quat2, b, a) {
        var b32 = b[0];
        var b20 = b[1];
        var b22 = b[2];
        b = b[3];
        var a22 = a[0];
        var a21 = a[1];
        var a02 = a[2];
        return a = a[3], quat2[0] = b32 * a22 + b20 * a02, quat2[1] = b32 * a21 + b20 * a, quat2[2] = b22 * a22 + b * a02, quat2[3] = b22 * a21 + b * a, quat2;
      }
    };
    /** @type {function (Array, Array, Array): ?} */
    mat2.mul = mat2.multiply;
    /**
     * @param {Array} continuing
     * @param {number} a
     * @param {number} c
     * @return {?}
     */
    mat2.rotate = function(continuing, a, c) {
      var a00 = a[0];
      var a10 = a[1];
      var a12 = a[2];
      a = a[3];
      /** @type {number} */
      var s = Math.sin(c);
      return c = Math.cos(c), continuing[0] = a00 * c + a10 * s, continuing[1] = a00 * -s + a10 * c, continuing[2] = a12 * c + a * s, continuing[3] = a12 * -s + a * c, continuing;
    };
    /**
     * @param {Array} dest
     * @param {Array} a
     * @param {number} s
     * @return {?}
     */
    mat2.scale = function(dest, a, s) {
      var a22 = a[1];
      var w = a[2];
      var z = a[3];
      var len = s[0];
      return s = s[1], dest[0] = a[0] * len, dest[1] = a22 * s, dest[2] = w * len, dest[3] = z * s, dest;
    };
    /**
     * @param {Array} vec
     * @return {?}
     */
    mat2.str = function(vec) {
      return "mat2(" + vec[0] + ", " + vec[1] + ", " + vec[2] + ", " + vec[3] + ")";
    };
    if (void 0 !== exports) {
      /** @type {Object} */
      exports.mat2 = mat2;
    }
    mat2 = {
      /**
       * @return {?}
       */
      create : function() {
        var dest = new MatrixArray(6);
        return dest[0] = 1, dest[1] = 0, dest[2] = 0, dest[3] = 1, dest[4] = 0, dest[5] = 0, dest;
      },
      /**
       * @param {Array} dataAndEvents
       * @return {?}
       */
      clone : function(dataAndEvents) {
        var dest = new MatrixArray(6);
        return dest[0] = dataAndEvents[0], dest[1] = dataAndEvents[1], dest[2] = dataAndEvents[2], dest[3] = dataAndEvents[3], dest[4] = dataAndEvents[4], dest[5] = dataAndEvents[5], dest;
      },
      /**
       * @param {Array} to
       * @param {Array} from
       * @return {?}
       */
      copy : function(to, from) {
        return to[0] = from[0], to[1] = from[1], to[2] = from[2], to[3] = from[3], to[4] = from[4], to[5] = from[5], to;
      },
      /**
       * @param {Array} var_args
       * @return {?}
       */
      identity : function(var_args) {
        return var_args[0] = 1, var_args[1] = 0, var_args[2] = 0, var_args[3] = 1, var_args[4] = 0, var_args[5] = 0, var_args;
      },
      /**
       * @param {Array} resultMat
       * @param {Array} mat0
       * @return {?}
       */
      invert : function(resultMat, mat0) {
        var a21 = mat0[0];
        var a22 = mat0[1];
        var a31 = mat0[2];
        var a32 = mat0[3];
        var b04 = mat0[4];
        var b05 = mat0[5];
        /** @type {number} */
        var z = a21 * a32 - a22 * a31;
        return z ? (z = 1 / z, resultMat[0] = a32 * z, resultMat[1] = -a22 * z, resultMat[2] = -a31 * z, resultMat[3] = a21 * z, resultMat[4] = (a31 * b05 - a32 * b04) * z, resultMat[5] = (a22 * b04 - a21 * b05) * z, resultMat) : null;
      },
      /**
       * @param {Array} mat
       * @return {?}
       */
      determinant : function(mat) {
        return mat[0] * mat[3] - mat[1] * mat[2];
      },
      /**
       * @param {Array} quat2
       * @param {Array} a
       * @param {Array} b
       * @return {?}
       */
      multiply : function(quat2, a, b) {
        var a00 = a[0];
        var a01 = a[1];
        var a20 = a[2];
        var a21 = a[3];
        var a02 = a[4];
        a = a[5];
        var b00 = b[0];
        var b01 = b[1];
        var b10 = b[2];
        var b11 = b[3];
        var b21 = b[4];
        return b = b[5], quat2[0] = a00 * b00 + a01 * b10, quat2[1] = a00 * b01 + a01 * b11, quat2[2] = a20 * b00 + a21 * b10, quat2[3] = a20 * b01 + a21 * b11, quat2[4] = b00 * a02 + b10 * a + b21, quat2[5] = b01 * a02 + b11 * a + b, quat2;
      }
    };
    /** @type {function (Array, Array, Array): ?} */
    mat2.mul = mat2.multiply;
    /**
     * @param {Array} continuing
     * @param {Array} m13
     * @param {?} c
     * @return {?}
     */
    mat2.rotate = function(continuing, m13, c) {
      var _m10 = m13[0];
      var _m11 = m13[1];
      var m30 = m13[2];
      var m31 = m13[3];
      var m03 = m13[4];
      m13 = m13[5];
      /** @type {number} */
      var s = Math.sin(c);
      return c = Math.cos(c), continuing[0] = _m10 * c + _m11 * s, continuing[1] = -_m10 * s + _m11 * c, continuing[2] = m30 * c + m31 * s, continuing[3] = -m30 * s + c * m31, continuing[4] = c * m03 + s * m13, continuing[5] = c * m13 - s * m03, continuing;
    };
    /**
     * @param {Array} out
     * @param {Array} e
     * @param {number} a
     * @return {?}
     */
    mat2.scale = function(out, e, a) {
      var b = a[0];
      return a = a[1], out[0] = e[0] * b, out[1] = e[1] * a, out[2] = e[2] * b, out[3] = e[3] * a, out[4] = e[4] * b, out[5] = e[5] * a, out;
    };
    /**
     * @param {Array} aX
     * @param {Array} t
     * @param {Array} v
     * @return {?}
     */
    mat2.translate = function(aX, t, v) {
      return aX[0] = t[0], aX[1] = t[1], aX[2] = t[2], aX[3] = t[3], aX[4] = t[4] + v[0], aX[5] = t[5] + v[1], aX;
    };
    /**
     * @param {Array} vec
     * @return {?}
     */
    mat2.str = function(vec) {
      return "mat2d(" + vec[0] + ", " + vec[1] + ", " + vec[2] + ", " + vec[3] + ", " + vec[4] + ", " + vec[5] + ")";
    };
    if (void 0 !== exports) {
      /** @type {Object} */
      exports.mat2d = mat2;
    }
    proto = {
      /**
       * @return {?}
       */
      create : function() {
        var dest = new MatrixArray(9);
        return dest[0] = 1, dest[1] = 0, dest[2] = 0, dest[3] = 0, dest[4] = 1, dest[5] = 0, dest[6] = 0, dest[7] = 0, dest[8] = 1, dest;
      },
      /**
       * @param {Array} out
       * @param {Array} a
       * @return {?}
       */
      fromMat4 : function(out, a) {
        return out[0] = a[0], out[1] = a[1], out[2] = a[2], out[3] = a[4], out[4] = a[5], out[5] = a[6], out[6] = a[8], out[7] = a[9], out[8] = a[10], out;
      },
      /**
       * @param {Array} dataAndEvents
       * @return {?}
       */
      clone : function(dataAndEvents) {
        var dest = new MatrixArray(9);
        return dest[0] = dataAndEvents[0], dest[1] = dataAndEvents[1], dest[2] = dataAndEvents[2], dest[3] = dataAndEvents[3], dest[4] = dataAndEvents[4], dest[5] = dataAndEvents[5], dest[6] = dataAndEvents[6], dest[7] = dataAndEvents[7], dest[8] = dataAndEvents[8], dest;
      },
      /**
       * @param {Array} to
       * @param {Array} from
       * @return {?}
       */
      copy : function(to, from) {
        return to[0] = from[0], to[1] = from[1], to[2] = from[2], to[3] = from[3], to[4] = from[4], to[5] = from[5], to[6] = from[6], to[7] = from[7], to[8] = from[8], to;
      },
      /**
       * @param {Array} var_args
       * @return {?}
       */
      identity : function(var_args) {
        return var_args[0] = 1, var_args[1] = 0, var_args[2] = 0, var_args[3] = 0, var_args[4] = 1, var_args[5] = 0, var_args[6] = 0, var_args[7] = 0, var_args[8] = 1, var_args;
      },
      /**
       * @param {Array} out
       * @param {Array} a
       * @return {?}
       */
      transpose : function(out, a) {
        if (out === a) {
          var a12 = a[1];
          var a03 = a[2];
          var a01 = a[5];
          out[1] = a[3];
          out[2] = a[6];
          out[3] = a12;
          out[5] = a[7];
          out[6] = a03;
          out[7] = a01;
        } else {
          out[0] = a[0];
          out[1] = a[3];
          out[2] = a[6];
          out[3] = a[1];
          out[4] = a[4];
          out[5] = a[7];
          out[6] = a[2];
          out[7] = a[5];
          out[8] = a[8];
        }
        return out;
      },
      /**
       * @param {Array} resultMat
       * @param {Array} mat0
       * @return {?}
       */
      invert : function(resultMat, mat0) {
        var b11 = mat0[0];
        var a12 = mat0[1];
        var a02 = mat0[2];
        var b10 = mat0[3];
        var a11 = mat0[4];
        var a01 = mat0[5];
        var b08 = mat0[6];
        var a10 = mat0[7];
        var a00 = mat0[8];
        /** @type {number} */
        var t20 = a00 * a11 - a01 * a10;
        /** @type {number} */
        var t00 = -a00 * b10 + a01 * b08;
        /** @type {number} */
        var t10 = a10 * b10 - a11 * b08;
        /** @type {number} */
        var idet = b11 * t20 + a12 * t00 + a02 * t10;
        return idet ? (idet = 1 / idet, resultMat[0] = t20 * idet, resultMat[1] = (-a00 * a12 + a02 * a10) * idet, resultMat[2] = (a01 * a12 - a02 * a11) * idet, resultMat[3] = t00 * idet, resultMat[4] = (a00 * b11 - a02 * b08) * idet, resultMat[5] = (-a01 * b11 + a02 * b10) * idet, resultMat[6] = t10 * idet, resultMat[7] = (-a10 * b11 + a12 * b08) * idet, resultMat[8] = (a11 * b11 - a12 * b10) * idet, resultMat) : null;
      },
      /**
       * @param {Array} a
       * @param {Array} mat
       * @return {?}
       */
      adjoint : function(a, mat) {
        var m30 = mat[0];
        var m00 = mat[1];
        var m20 = mat[2];
        var m10 = mat[3];
        var m13 = mat[4];
        var m23 = mat[5];
        var m11 = mat[6];
        var m01 = mat[7];
        var m21 = mat[8];
        return a[0] = m13 * m21 - m23 * m01, a[1] = m20 * m01 - m00 * m21, a[2] = m00 * m23 - m20 * m13, a[3] = m23 * m11 - m10 * m21, a[4] = m30 * m21 - m20 * m11, a[5] = m20 * m10 - m30 * m23, a[6] = m10 * m01 - m13 * m11, a[7] = m00 * m11 - m30 * m01, a[8] = m30 * m13 - m00 * m10, a;
      },
      /**
       * @param {Array} mat
       * @return {?}
       */
      determinant : function(mat) {
        var b5 = mat[3];
        var m21 = mat[4];
        var m20 = mat[5];
        var b4 = mat[6];
        var m11 = mat[7];
        var m10 = mat[8];
        return mat[0] * (m10 * m21 - m20 * m11) + mat[1] * (-m10 * b5 + m20 * b4) + mat[2] * (m11 * b5 - m21 * b4);
      },
      /**
       * @param {Array} quat2
       * @param {Array} b
       * @param {Array} a
       * @return {?}
       */
      multiply : function(quat2, b, a) {
        var b03 = b[0];
        var b00 = b[1];
        var b01 = b[2];
        var b13 = b[3];
        var b10 = b[4];
        var b11 = b[5];
        var b22 = b[6];
        var b02 = b[7];
        b = b[8];
        var a20 = a[0];
        var a21 = a[1];
        var a23 = a[2];
        var a00 = a[3];
        var a01 = a[4];
        var a22 = a[5];
        var a30 = a[6];
        var a31 = a[7];
        return a = a[8], quat2[0] = a20 * b03 + a21 * b13 + a23 * b22, quat2[1] = a20 * b00 + a21 * b10 + a23 * b02, quat2[2] = a20 * b01 + a21 * b11 + a23 * b, quat2[3] = a00 * b03 + a01 * b13 + a22 * b22, quat2[4] = a00 * b00 + a01 * b10 + a22 * b02, quat2[5] = a00 * b01 + a01 * b11 + a22 * b, quat2[6] = a30 * b03 + a31 * b13 + a * b22, quat2[7] = a30 * b00 + a31 * b10 + a * b02, quat2[8] = a30 * b01 + a31 * b11 + a * b, quat2;
      }
    };
    /** @type {function (Array, Array, Array): ?} */
    proto.mul = proto.multiply;
    /**
     * @param {Array} x
     * @param {Array} m
     * @param {(Object|number|string)} m11
     * @return {?}
     */
    proto.translate = function(x, m, m11) {
      var r01 = m[0];
      var r00 = m[1];
      var r02 = m[2];
      var r11 = m[3];
      var r10 = m[4];
      var r12 = m[5];
      var formula = m[6];
      var value = m[7];
      m = m[8];
      var m10 = m11[0];
      return m11 = m11[1], x[0] = r01, x[1] = r00, x[2] = r02, x[3] = r11, x[4] = r10, x[5] = r12, x[6] = m10 * r01 + m11 * r11 + formula, x[7] = m10 * r00 + m11 * r10 + value, x[8] = m10 * r02 + m11 * r12 + m, x;
    };
    /**
     * @param {Array} mat
     * @param {Array} point
     * @param {?} cos
     * @return {?}
     */
    proto.rotate = function(mat, point, cos) {
      var rx = point[0];
      var y = point[1];
      var uy = point[2];
      var ry = point[3];
      var x = point[4];
      var ux = point[5];
      var c = point[6];
      var a = point[7];
      point = point[8];
      /** @type {number} */
      var sin = Math.sin(cos);
      return cos = Math.cos(cos), mat[0] = cos * rx + sin * ry, mat[1] = cos * y + sin * x, mat[2] = cos * uy + sin * ux, mat[3] = cos * ry - sin * rx, mat[4] = cos * x - sin * y, mat[5] = cos * ux - sin * uy, mat[6] = c, mat[7] = a, mat[8] = point, mat;
    };
    /**
     * @param {Array} dest
     * @param {Array} mat
     * @param {number} x
     * @return {?}
     */
    proto.scale = function(dest, mat, x) {
      var y = x[0];
      return x = x[1], dest[0] = y * mat[0], dest[1] = y * mat[1], dest[2] = y * mat[2], dest[3] = x * mat[3], dest[4] = x * mat[4], dest[5] = x * mat[5], dest[6] = mat[6], dest[7] = mat[7], dest[8] = mat[8], dest;
    };
    /**
     * @param {Array} out
     * @param {Array} a
     * @return {?}
     */
    proto.fromMat2d = function(out, a) {
      return out[0] = a[0], out[1] = a[1], out[2] = 0, out[3] = a[2], out[4] = a[3], out[5] = 0, out[6] = a[4], out[7] = a[5], out[8] = 1, out;
    };
    /**
     * @param {Array} data
     * @param {Array} q
     * @return {?}
     */
    proto.fromQuat = function(data, q) {
      var a = q[0];
      var t = q[1];
      var offset = q[2];
      var y = q[3];
      var h = a + a;
      var b = t + t;
      var i = offset + offset;
      /** @type {number} */
      var top = a * h;
      /** @type {number} */
      var v = a * b;
      /** @type {number} */
      a = a * i;
      /** @type {number} */
      var bottom = t * b;
      /** @type {number} */
      t = t * i;
      /** @type {number} */
      offset = offset * i;
      /** @type {number} */
      h = y * h;
      /** @type {number} */
      b = y * b;
      /** @type {number} */
      y = y * i;
      return data[0] = 1 - (bottom + offset), data[3] = v + y, data[6] = a - b, data[1] = v - y, data[4] = 1 - (top + offset), data[7] = t + h, data[2] = a + b, data[5] = t - h, data[8] = 1 - (top + bottom), data;
    };
    /**
     * @param {Array} a
     * @param {Array} s
     * @return {?}
     */
    proto.normalFromMat4 = function(a, s) {
      var sin = s[0];
      var cos = s[1];
      var b = s[2];
      var t = s[3];
      var d = s[4];
      var y = s[5];
      var dy = s[6];
      var dx = s[7];
      var f = s[8];
      var r = s[9];
      var h = s[10];
      var c = s[11];
      var x = s[12];
      var y1 = s[13];
      var z = s[14];
      var w = s[15];
      /** @type {number} */
      var ratio = sin * y - cos * d;
      /** @type {number} */
      var multiplier = sin * dy - b * d;
      /** @type {number} */
      var x2 = sin * dx - t * d;
      /** @type {number} */
      var saturation = cos * dy - b * y;
      /** @type {number} */
      var y2 = cos * dx - t * y;
      /** @type {number} */
      var z2 = b * dx - t * dy;
      /** @type {number} */
      var l = f * y1 - r * x;
      /** @type {number} */
      var scale = f * z - h * x;
      /** @type {number} */
      f = f * w - c * x;
      /** @type {number} */
      var i = r * z - h * y1;
      /** @type {number} */
      r = r * w - c * y1;
      /** @type {number} */
      h = h * w - c * z;
      /** @type {number} */
      c = ratio * h - multiplier * r + x2 * i + saturation * f - y2 * scale + z2 * l;
      return c ? (c = 1 / c, a[0] = (y * h - dy * r + dx * i) * c, a[1] = (dy * f - d * h - dx * scale) * c, a[2] = (d * r - y * f + dx * l) * c, a[3] = (b * r - cos * h - t * i) * c, a[4] = (sin * h - b * f + t * scale) * c, a[5] = (cos * f - sin * r - t * l) * c, a[6] = (y1 * z2 - z * y2 + w * saturation) * c, a[7] = (z * x2 - x * z2 - w * multiplier) * c, a[8] = (x * y2 - y1 * x2 + w * ratio) * c, a) : null;
    };
    /**
     * @param {Array} vec
     * @return {?}
     */
    proto.str = function(vec) {
      return "mat3(" + vec[0] + ", " + vec[1] + ", " + vec[2] + ", " + vec[3] + ", " + vec[4] + ", " + vec[5] + ", " + vec[6] + ", " + vec[7] + ", " + vec[8] + ")";
    };
    if (void 0 !== exports) {
      /** @type {Object} */
      exports.mat3 = proto;
    }
    mat4 = {
      /**
       * @return {?}
       */
      create : function() {
        var dest = new MatrixArray(16);
        return dest[0] = 1, dest[1] = 0, dest[2] = 0, dest[3] = 0, dest[4] = 0, dest[5] = 1, dest[6] = 0, dest[7] = 0, dest[8] = 0, dest[9] = 0, dest[10] = 1, dest[11] = 0, dest[12] = 0, dest[13] = 0, dest[14] = 0, dest[15] = 1, dest;
      },
      /**
       * @param {Array} dataAndEvents
       * @return {?}
       */
      clone : function(dataAndEvents) {
        var dest = new MatrixArray(16);
        return dest[0] = dataAndEvents[0], dest[1] = dataAndEvents[1], dest[2] = dataAndEvents[2], dest[3] = dataAndEvents[3], dest[4] = dataAndEvents[4], dest[5] = dataAndEvents[5], dest[6] = dataAndEvents[6], dest[7] = dataAndEvents[7], dest[8] = dataAndEvents[8], dest[9] = dataAndEvents[9], dest[10] = dataAndEvents[10], dest[11] = dataAndEvents[11], dest[12] = dataAndEvents[12], dest[13] = dataAndEvents[13], dest[14] = dataAndEvents[14], dest[15] = dataAndEvents[15], dest;
      },
      /**
       * @param {Array} to
       * @param {Array} from
       * @return {?}
       */
      copy : function(to, from) {
        return to[0] = from[0], to[1] = from[1], to[2] = from[2], to[3] = from[3], to[4] = from[4], to[5] = from[5], to[6] = from[6], to[7] = from[7], to[8] = from[8], to[9] = from[9], to[10] = from[10], to[11] = from[11], to[12] = from[12], to[13] = from[13], to[14] = from[14], to[15] = from[15], to;
      },
      /**
       * @param {Array} var_args
       * @return {?}
       */
      identity : function(var_args) {
        return var_args[0] = 1, var_args[1] = 0, var_args[2] = 0, var_args[3] = 0, var_args[4] = 0, var_args[5] = 1, var_args[6] = 0, var_args[7] = 0, var_args[8] = 0, var_args[9] = 0, var_args[10] = 1, var_args[11] = 0, var_args[12] = 0, var_args[13] = 0, var_args[14] = 0, var_args[15] = 1, var_args;
      },
      /**
       * @param {Array} resultMat
       * @param {Array} mat
       * @return {?}
       */
      transpose : function(resultMat, mat) {
        if (resultMat === mat) {
          var a10 = mat[1];
          var a20 = mat[2];
          var a21 = mat[3];
          var a30 = mat[6];
          var a31 = mat[7];
          var a32 = mat[11];
          resultMat[1] = mat[4];
          resultMat[2] = mat[8];
          resultMat[3] = mat[12];
          resultMat[4] = a10;
          resultMat[6] = mat[9];
          resultMat[7] = mat[13];
          resultMat[8] = a20;
          resultMat[9] = a30;
          resultMat[11] = mat[14];
          resultMat[12] = a21;
          resultMat[13] = a31;
          resultMat[14] = a32;
        } else {
          resultMat[0] = mat[0];
          resultMat[1] = mat[4];
          resultMat[2] = mat[8];
          resultMat[3] = mat[12];
          resultMat[4] = mat[1];
          resultMat[5] = mat[5];
          resultMat[6] = mat[9];
          resultMat[7] = mat[13];
          resultMat[8] = mat[2];
          resultMat[9] = mat[6];
          resultMat[10] = mat[10];
          resultMat[11] = mat[14];
          resultMat[12] = mat[3];
          resultMat[13] = mat[7];
          resultMat[14] = mat[11];
          resultMat[15] = mat[15];
        }
        return resultMat;
      },
      /**
       * @param {Array} resultMat
       * @param {Array} mat
       * @return {?}
       */
      invert : function(resultMat, mat) {
        var a12 = mat[0];
        var a00 = mat[1];
        var a02 = mat[2];
        var a03 = mat[3];
        var a11 = mat[4];
        var a10 = mat[5];
        var a01 = mat[6];
        var a13 = mat[7];
        var m00 = mat[8];
        var m10 = mat[9];
        var m20 = mat[10];
        var m30 = mat[11];
        var m01 = mat[12];
        var m11 = mat[13];
        var m21 = mat[14];
        var m31 = mat[15];
        /** @type {number} */
        var b0 = a12 * a10 - a00 * a11;
        /** @type {number} */
        var b1 = a12 * a01 - a02 * a11;
        /** @type {number} */
        var b2 = a12 * a13 - a03 * a11;
        /** @type {number} */
        var b3 = a00 * a01 - a02 * a10;
        /** @type {number} */
        var b4 = a00 * a13 - a03 * a10;
        /** @type {number} */
        var b5 = a02 * a13 - a03 * a01;
        /** @type {number} */
        var b06 = m00 * m11 - m10 * m01;
        /** @type {number} */
        var b09 = m00 * m21 - m20 * m01;
        /** @type {number} */
        var b10 = m00 * m31 - m30 * m01;
        /** @type {number} */
        var b07 = m10 * m21 - m20 * m11;
        /** @type {number} */
        var b08 = m10 * m31 - m30 * m11;
        /** @type {number} */
        var b11 = m20 * m31 - m30 * m21;
        /** @type {number} */
        var idet = b0 * b11 - b1 * b08 + b2 * b07 + b3 * b10 - b4 * b09 + b5 * b06;
        return idet ? (idet = 1 / idet, resultMat[0] = (a10 * b11 - a01 * b08 + a13 * b07) * idet, resultMat[1] = (a02 * b08 - a00 * b11 - a03 * b07) * idet, resultMat[2] = (m11 * b5 - m21 * b4 + m31 * b3) * idet, resultMat[3] = (m20 * b4 - m10 * b5 - m30 * b3) * idet, resultMat[4] = (a01 * b10 - a11 * b11 - a13 * b09) * idet, resultMat[5] = (a12 * b11 - a02 * b10 + a03 * b09) * idet, resultMat[6] = (m21 * b2 - m01 * b5 - m31 * b1) * idet, resultMat[7] = (m00 * b5 - m20 * b2 + m30 * b1) * idet, resultMat[8] =
        (a11 * b08 - a10 * b10 + a13 * b06) * idet, resultMat[9] = (a00 * b10 - a12 * b08 - a03 * b06) * idet, resultMat[10] = (m01 * b4 - m11 * b2 + m31 * b0) * idet, resultMat[11] = (m10 * b2 - m00 * b4 - m30 * b0) * idet, resultMat[12] = (a10 * b09 - a11 * b07 - a01 * b06) * idet, resultMat[13] = (a12 * b07 - a00 * b09 + a02 * b06) * idet, resultMat[14] = (m11 * b1 - m01 * b3 - m21 * b0) * idet, resultMat[15] = (m00 * b3 - m10 * b1 + m20 * b0) * idet, resultMat) : null;
      },
      /**
       * @param {Array} a
       * @param {Array} vertices
       * @return {?}
       */
      adjoint : function(a, vertices) {
        var z3 = vertices[0];
        var upx = vertices[1];
        var upy = vertices[2];
        var s2 = vertices[3];
        var x3 = vertices[4];
        var y1 = vertices[5];
        var t1 = vertices[6];
        var y2 = vertices[7];
        var y3 = vertices[8];
        var z0 = vertices[9];
        var z1 = vertices[10];
        var z2 = vertices[11];
        var b = vertices[12];
        var x0 = vertices[13];
        var x1 = vertices[14];
        var x2 = vertices[15];
        return a[0] = y1 * (z1 * x2 - z2 * x1) - z0 * (t1 * x2 - y2 * x1) + x0 * (t1 * z2 - y2 * z1), a[1] = -(upx * (z1 * x2 - z2 * x1) - z0 * (upy * x2 - s2 * x1) + x0 * (upy * z2 - s2 * z1)), a[2] = upx * (t1 * x2 - y2 * x1) - y1 * (upy * x2 - s2 * x1) + x0 * (upy * y2 - s2 * t1), a[3] = -(upx * (t1 * z2 - y2 * z1) - y1 * (upy * z2 - s2 * z1) + z0 * (upy * y2 - s2 * t1)), a[4] = -(x3 * (z1 * x2 - z2 * x1) - y3 * (t1 * x2 - y2 * x1) + b * (t1 * z2 - y2 * z1)), a[5] = z3 * (z1 * x2 - z2 * x1) -
        y3 * (upy * x2 - s2 * x1) + b * (upy * z2 - s2 * z1), a[6] = -(z3 * (t1 * x2 - y2 * x1) - x3 * (upy * x2 - s2 * x1) + b * (upy * y2 - s2 * t1)), a[7] = z3 * (t1 * z2 - y2 * z1) - x3 * (upy * z2 - s2 * z1) + y3 * (upy * y2 - s2 * t1), a[8] = x3 * (z0 * x2 - z2 * x0) - y3 * (y1 * x2 - y2 * x0) + b * (y1 * z2 - y2 * z0), a[9] = -(z3 * (z0 * x2 - z2 * x0) - y3 * (upx * x2 - s2 * x0) + b * (upx * z2 - s2 * z0)), a[10] = z3 * (y1 * x2 - y2 * x0) - x3 * (upx * x2 - s2 * x0) + b * (upx * y2 - s2 *
        y1), a[11] = -(z3 * (y1 * z2 - y2 * z0) - x3 * (upx * z2 - s2 * z0) + y3 * (upx * y2 - s2 * y1)), a[12] = -(x3 * (z0 * x1 - z1 * x0) - y3 * (y1 * x1 - t1 * x0) + b * (y1 * z1 - t1 * z0)), a[13] = z3 * (z0 * x1 - z1 * x0) - y3 * (upx * x1 - upy * x0) + b * (upx * z1 - upy * z0), a[14] = -(z3 * (y1 * x1 - t1 * x0) - x3 * (upx * x1 - upy * x0) + b * (upx * t1 - upy * y1)), a[15] = z3 * (y1 * z1 - t1 * z0) - x3 * (upx * z1 - upy * z0) + y3 * (upx * t1 - upy * y1), a;
      },
      /**
       * @param {Array} mat
       * @return {?}
       */
      determinant : function(mat) {
        var m02 = mat[0];
        var m22 = mat[1];
        var m32 = mat[2];
        var m12 = mat[3];
        var m03 = mat[4];
        var m23 = mat[5];
        var m33 = mat[6];
        var m13 = mat[7];
        var m00 = mat[8];
        var m30 = mat[9];
        var m10 = mat[10];
        var m20 = mat[11];
        var m01 = mat[12];
        var m31 = mat[13];
        var m11 = mat[14];
        return mat = mat[15], (m02 * m23 - m22 * m03) * (m10 * mat - m20 * m11) - (m02 * m33 - m32 * m03) * (m30 * mat - m20 * m31) + (m02 * m13 - m12 * m03) * (m30 * m11 - m10 * m31) + (m22 * m33 - m32 * m23) * (m00 * mat - m20 * m01) - (m22 * m13 - m12 * m23) * (m00 * m11 - m10 * m01) + (m32 * m13 - m12 * m33) * (m00 * m31 - m30 * m01);
      },
      /**
       * @param {Array} quat2
       * @param {Array} mat1
       * @param {Array} a
       * @return {?}
       */
      multiply : function(quat2, mat1, a) {
        var b01 = mat1[0];
        var b00 = mat1[1];
        var b02 = mat1[2];
        var b03 = mat1[3];
        var b11 = mat1[4];
        var b10 = mat1[5];
        var b12 = mat1[6];
        var b13 = mat1[7];
        var b33 = mat1[8];
        var b32 = mat1[9];
        var b31 = mat1[10];
        var b30 = mat1[11];
        var b22 = mat1[12];
        var b20 = mat1[13];
        var b21 = mat1[14];
        mat1 = mat1[15];
        var a20 = a[0];
        var a21 = a[1];
        var a03 = a[2];
        var a12 = a[3];
        return quat2[0] = a20 * b01 + a21 * b11 + a03 * b33 + a12 * b22, quat2[1] = a20 * b00 + a21 * b10 + a03 * b32 + a12 * b20, quat2[2] = a20 * b02 + a21 * b12 + a03 * b31 + a12 * b21, quat2[3] = a20 * b03 + a21 * b13 + a03 * b30 + a12 * mat1, a20 = a[4], a21 = a[5], a03 = a[6], a12 = a[7], quat2[4] = a20 * b01 + a21 * b11 + a03 * b33 + a12 * b22, quat2[5] = a20 * b00 + a21 * b10 + a03 * b32 + a12 * b20, quat2[6] = a20 * b02 + a21 * b12 + a03 * b31 + a12 * b21, quat2[7] = a20 * b03 + a21 * b13 +
        a03 * b30 + a12 * mat1, a20 = a[8], a21 = a[9], a03 = a[10], a12 = a[11], quat2[8] = a20 * b01 + a21 * b11 + a03 * b33 + a12 * b22, quat2[9] = a20 * b00 + a21 * b10 + a03 * b32 + a12 * b20, quat2[10] = a20 * b02 + a21 * b12 + a03 * b31 + a12 * b21, quat2[11] = a20 * b03 + a21 * b13 + a03 * b30 + a12 * mat1, a20 = a[12], a21 = a[13], a03 = a[14], a12 = a[15], quat2[12] = a20 * b01 + a21 * b11 + a03 * b33 + a12 * b22, quat2[13] = a20 * b00 + a21 * b10 + a03 * b32 + a12 * b20, quat2[14] = a20 *
        b02 + a21 * b12 + a03 * b31 + a12 * b21, quat2[15] = a20 * b03 + a21 * b13 + a03 * b30 + a12 * mat1, quat2;
      }
    };
    /** @type {function (Array, Array, Array): ?} */
    mat4.mul = mat4.multiply;
    /**
     * @param {Array} mat
     * @param {Array} data
     * @param {Array} s
     * @return {?}
     */
    mat4.translate = function(mat, data, s) {
      var b2 = s[0];
      var d = s[1];
      s = s[2];
      var a;
      var b;
      var a3;
      var c1;
      var y;
      var c;
      var x;
      var c2;
      var z;
      var value;
      var a01;
      var a02;
      return data === mat ? (mat[12] = data[0] * b2 + data[4] * d + data[8] * s + data[12], mat[13] = data[1] * b2 + data[5] * d + data[9] * s + data[13], mat[14] = data[2] * b2 + data[6] * d + data[10] * s + data[14], mat[15] = data[3] * b2 + data[7] * d + data[11] * s + data[15]) : (a = data[0], b = data[1], a3 = data[2], c1 = data[3], y = data[4], c = data[5], x = data[6], c2 = data[7], z = data[8], value = data[9], a01 = data[10], a02 = data[11], mat[0] = a, mat[1] = b, mat[2] = a3, mat[3] =
      c1, mat[4] = y, mat[5] = c, mat[6] = x, mat[7] = c2, mat[8] = z, mat[9] = value, mat[10] = a01, mat[11] = a02, mat[12] = a * b2 + y * d + z * s + data[12], mat[13] = b * b2 + c * d + value * s + data[13], mat[14] = a3 * b2 + x * d + a01 * s + data[14], mat[15] = c1 * b2 + c2 * d + a02 * s + data[15]), mat;
    };
    /**
     * @param {Array} out
     * @param {Array} a
     * @param {(number|string)} x
     * @return {?}
     */
    mat4.scale = function(out, a, x) {
      var len = x[0];
      var y = x[1];
      return x = x[2], out[0] = a[0] * len, out[1] = a[1] * len, out[2] = a[2] * len, out[3] = a[3] * len, out[4] = a[4] * y, out[5] = a[5] * y, out[6] = a[6] * y, out[7] = a[7] * y, out[8] = a[8] * x, out[9] = a[9] * x, out[10] = a[10] * x, out[11] = a[11] * x, out[12] = a[12], out[13] = a[13], out[14] = a[14], out[15] = a[15], out;
    };
    /**
     * @param {Array} out
     * @param {Array} a
     * @param {(number|string)} m30
     * @param {number} x
     * @return {?}
     */
    mat4.rotate = function(out, a, m30, x) {
      var r11 = x[0];
      var z = x[1];
      x = x[2];
      /** @type {number} */
      var m20 = Math.sqrt(r11 * r11 + z * z + x * x);
      var sinAngle;
      var cosAngle;
      var diffCosAngle;
      var m00;
      var m10;
      var m11;
      var m01;
      var m31;
      var m21;
      var a20;
      var a23;
      var a22;
      var a21;
      var r02;
      var r12;
      var b02;
      var r00;
      var r10;
      var b22;
      var r01;
      return Math.abs(m20) < dataAndEvents ? null : (m20 = 1 / m20, r11 *= m20, z *= m20, x *= m20, sinAngle = Math.sin(m30), cosAngle = Math.cos(m30), diffCosAngle = 1 - cosAngle, m30 = a[0], m20 = a[1], m00 = a[2], m10 = a[3], m11 = a[4], m01 = a[5], m31 = a[6], m21 = a[7], a20 = a[8], a23 = a[9], a22 = a[10], a21 = a[11], r02 = r11 * r11 * diffCosAngle + cosAngle, r12 = z * r11 * diffCosAngle + x * sinAngle, b02 = x * r11 * diffCosAngle - z * sinAngle, r00 = r11 * z * diffCosAngle - x * sinAngle,
      r10 = z * z * diffCosAngle + cosAngle, b22 = x * z * diffCosAngle + r11 * sinAngle, r01 = r11 * x * diffCosAngle + z * sinAngle, r11 = z * x * diffCosAngle - r11 * sinAngle, z = x * x * diffCosAngle + cosAngle, out[0] = m30 * r02 + m11 * r12 + a20 * b02, out[1] = m20 * r02 + m01 * r12 + a23 * b02, out[2] = m00 * r02 + m31 * r12 + a22 * b02, out[3] = m10 * r02 + m21 * r12 + a21 * b02, out[4] = m30 * r00 + m11 * r10 + a20 * b22, out[5] = m20 * r00 + m01 * r10 + a23 * b22, out[6] = m00 * r00 +
      m31 * r10 + a22 * b22, out[7] = m10 * r00 + m21 * r10 + a21 * b22, out[8] = m30 * r01 + m11 * r11 + a20 * z, out[9] = m20 * r01 + m01 * r11 + a23 * z, out[10] = m00 * r01 + m31 * r11 + a22 * z, out[11] = m10 * r01 + m21 * r11 + a21 * z, a !== out && (out[12] = a[12], out[13] = a[13], out[14] = a[14], out[15] = a[15]), out);
    };
    /**
     * @param {Array} out
     * @param {Array} a
     * @param {?} c
     * @return {?}
     */
    mat4.rotateX = function(out, a, c) {
      /** @type {number} */
      var s = Math.sin(c);
      /** @type {number} */
      c = Math.cos(c);
      var a01 = a[4];
      var a20 = a[5];
      var a00 = a[6];
      var a02 = a[7];
      var a11 = a[8];
      var a21 = a[9];
      var a10 = a[10];
      var a12 = a[11];
      return a !== out && (out[0] = a[0], out[1] = a[1], out[2] = a[2], out[3] = a[3], out[12] = a[12], out[13] = a[13], out[14] = a[14], out[15] = a[15]), out[4] = a01 * c + a11 * s, out[5] = a20 * c + a21 * s, out[6] = a00 * c + a10 * s, out[7] = a02 * c + a12 * s, out[8] = a11 * c - a01 * s, out[9] = a21 * c - a20 * s, out[10] = a10 * c - a00 * s, out[11] = a12 * c - a02 * s, out;
    };
    /**
     * @param {Array} dest
     * @param {Array} mat
     * @param {?} s
     * @return {?}
     */
    mat4.rotateY = function(dest, mat, s) {
      /** @type {number} */
      var c = Math.sin(s);
      /** @type {number} */
      s = Math.cos(s);
      var m30 = mat[0];
      var a00 = mat[1];
      var a01 = mat[2];
      var m10 = mat[3];
      var m31 = mat[8];
      var a20 = mat[9];
      var a21 = mat[10];
      var m11 = mat[11];
      return mat !== dest && (dest[4] = mat[4], dest[5] = mat[5], dest[6] = mat[6], dest[7] = mat[7], dest[12] = mat[12], dest[13] = mat[13], dest[14] = mat[14], dest[15] = mat[15]), dest[0] = m30 * s - m31 * c, dest[1] = a00 * s - a20 * c, dest[2] = a01 * s - a21 * c, dest[3] = m10 * s - m11 * c, dest[8] = m30 * c + m31 * s, dest[9] = a00 * c + a20 * s, dest[10] = a01 * c + a21 * s, dest[11] = m10 * c + m11 * s, dest;
    };
    /**
     * @param {Array} out
     * @param {Array} a
     * @param {?} c
     * @return {?}
     */
    mat4.rotateZ = function(out, a, c) {
      /** @type {number} */
      var s = Math.sin(c);
      /** @type {number} */
      c = Math.cos(c);
      var a01 = a[0];
      var a02 = a[1];
      var a00 = a[2];
      var a20 = a[3];
      var a11 = a[4];
      var a12 = a[5];
      var a10 = a[6];
      var a21 = a[7];
      return a !== out && (out[8] = a[8], out[9] = a[9], out[10] = a[10], out[11] = a[11], out[12] = a[12], out[13] = a[13], out[14] = a[14], out[15] = a[15]), out[0] = a01 * c + a11 * s, out[1] = a02 * c + a12 * s, out[2] = a00 * c + a10 * s, out[3] = a20 * c + a21 * s, out[4] = a11 * c - a01 * s, out[5] = a12 * c - a02 * s, out[6] = a10 * c - a00 * s, out[7] = a21 * c - a20 * s, out;
    };
    /**
     * @param {Array} dest
     * @param {(number|string)} a
     * @param {Array} quat
     * @return {?}
     */
    mat4.fromRotationTranslation = function(dest, a, quat) {
      var x = a[0];
      var t = a[1];
      var b = a[2];
      var w = a[3];
      var s = x + x;
      var y = t + t;
      var scale = b + b;
      /** @type {number} */
      a = x * s;
      /** @type {number} */
      var xy = x * y;
      /** @type {number} */
      x = x * scale;
      /** @type {number} */
      var i = t * y;
      /** @type {number} */
      t = t * scale;
      /** @type {number} */
      b = b * scale;
      /** @type {number} */
      s = w * s;
      /** @type {number} */
      y = w * y;
      /** @type {number} */
      w = w * scale;
      return dest[0] = 1 - (i + b), dest[1] = xy + w, dest[2] = x - y, dest[3] = 0, dest[4] = xy - w, dest[5] = 1 - (a + b), dest[6] = t + s, dest[7] = 0, dest[8] = x + y, dest[9] = t - s, dest[10] = 1 - (a + i), dest[11] = 0, dest[12] = quat[0], dest[13] = quat[1], dest[14] = quat[2], dest[15] = 1, dest;
    };
    /**
     * @param {Array} data
     * @param {Array} buffer
     * @return {?}
     */
    mat4.fromQuat = function(data, buffer) {
      var a = buffer[0];
      var t = buffer[1];
      var offset = buffer[2];
      var z1 = buffer[3];
      var y = a + a;
      var b = t + t;
      var i = offset + offset;
      /** @type {number} */
      var _ = a * y;
      /** @type {number} */
      var tmp13 = a * b;
      /** @type {number} */
      a = a * i;
      /** @type {number} */
      var h = t * b;
      /** @type {number} */
      t = t * i;
      /** @type {number} */
      offset = offset * i;
      /** @type {number} */
      y = z1 * y;
      /** @type {number} */
      b = z1 * b;
      /** @type {number} */
      z1 = z1 * i;
      return data[0] = 1 - (h + offset), data[1] = tmp13 + z1, data[2] = a - b, data[3] = 0, data[4] = tmp13 - z1, data[5] = 1 - (_ + offset), data[6] = t + y, data[7] = 0, data[8] = a + b, data[9] = t - y, data[10] = 1 - (_ + h), data[11] = 0, data[12] = 0, data[13] = 0, data[14] = 0, data[15] = 1, data;
    };
    /**
     * @param {Array} out
     * @param {number} left
     * @param {number} right
     * @param {number} bottom
     * @param {number} top
     * @param {number} near
     * @param {number} far
     * @return {?}
     */
    mat4.frustum = function(out, left, right, bottom, top, near, far) {
      /** @type {number} */
      var rl = 1 / (right - left);
      /** @type {number} */
      var tb = 1 / (top - bottom);
      /** @type {number} */
      var nf = 1 / (near - far);
      return out[0] = 2 * near * rl, out[1] = 0, out[2] = 0, out[3] = 0, out[4] = 0, out[5] = 2 * near * tb, out[6] = 0, out[7] = 0, out[8] = (right + left) * rl, out[9] = (top + bottom) * tb, out[10] = (far + near) * nf, out[11] = -1, out[12] = 0, out[13] = 0, out[14] = far * near * 2 * nf, out[15] = 0, out;
    };
    /**
     * @param {Array} out
     * @param {number} f
     * @param {number} aspect
     * @param {number} near
     * @param {number} far
     * @return {?}
     */
    mat4.perspective = function(out, f, aspect, near, far) {
      /** @type {number} */
      f = 1 / Math.tan(f / 2);
      /** @type {number} */
      var nf = 1 / (near - far);
      return out[0] = f / aspect, out[1] = 0, out[2] = 0, out[3] = 0, out[4] = 0, out[5] = f, out[6] = 0, out[7] = 0, out[8] = 0, out[9] = 0, out[10] = (far + near) * nf, out[11] = -1, out[12] = 0, out[13] = 0, out[14] = 2 * far * near * nf, out[15] = 0, out;
    };
    /**
     * @param {Array} out
     * @param {number} far
     * @param {number} near
     * @param {number} left
     * @param {number} right
     * @param {number} b
     * @param {number} r
     * @return {?}
     */
    mat4.ortho = function(out, far, near, left, right, b, r) {
      /** @type {number} */
      var nf = 1 / (far - near);
      /** @type {number} */
      var rl = 1 / (left - right);
      /** @type {number} */
      var x = 1 / (b - r);
      return out[0] = -2 * nf, out[1] = 0, out[2] = 0, out[3] = 0, out[4] = 0, out[5] = -2 * rl, out[6] = 0, out[7] = 0, out[8] = 0, out[9] = 0, out[10] = 2 * x, out[11] = 0, out[12] = (far + near) * nf, out[13] = (right + left) * rl, out[14] = (r + b) * x, out[15] = 1, out;
    };
    /**
     * @param {Array} dest
     * @param {number} eyez
     * @param {number} x2
     * @param {number} z1
     * @return {?}
     */
    mat4.lookAt = function(dest, eyez, x2, z1) {
      var y0;
      var y1;
      var y2;
      var x0;
      var x1;
      var z0;
      var z2;
      var len;
      var eyex = eyez[0];
      var eyey = eyez[1];
      return eyez = eyez[2], y2 = z1[0], x0 = z1[1], y1 = z1[2], z2 = x2[0], z1 = x2[1], y0 = x2[2], Math.abs(eyex - z2) < dataAndEvents && (Math.abs(eyey - z1) < dataAndEvents && Math.abs(eyez - y0) < dataAndEvents) ? mat4.identity(dest) : (x2 = eyex - z2, z1 = eyey - z1, z2 = eyez - y0, len = 1 / Math.sqrt(x2 * x2 + z1 * z1 + z2 * z2), x2 *= len, z1 *= len, z2 *= len, y0 = x0 * z2 - y1 * z1, y1 = y1 * x2 - y2 * z2, y2 = y2 * z1 - x0 * x2, (len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2)) ? (len =
      1 / len, y0 *= len, y1 *= len, y2 *= len) : y2 = y1 = y0 = 0, x0 = z1 * y2 - z2 * y1, x1 = z2 * y0 - x2 * y2, z0 = x2 * y1 - z1 * y0, (len = Math.sqrt(x0 * x0 + x1 * x1 + z0 * z0)) ? (len = 1 / len, x0 *= len, x1 *= len, z0 *= len) : z0 = x1 = x0 = 0, dest[0] = y0, dest[1] = x0, dest[2] = x2, dest[3] = 0, dest[4] = y1, dest[5] = x1, dest[6] = z1, dest[7] = 0, dest[8] = y2, dest[9] = z0, dest[10] = z2, dest[11] = 0, dest[12] = -(y0 * eyex + y1 * eyey + y2 * eyez), dest[13] = -(x0 * eyex + x1 *
      eyey + z0 * eyez), dest[14] = -(x2 * eyex + z1 * eyey + z2 * eyez), dest[15] = 1, dest);
    };
    /**
     * @param {Array} vec
     * @return {?}
     */
    mat4.str = function(vec) {
      return "mat4(" + vec[0] + ", " + vec[1] + ", " + vec[2] + ", " + vec[3] + ", " + vec[4] + ", " + vec[5] + ", " + vec[6] + ", " + vec[7] + ", " + vec[8] + ", " + vec[9] + ", " + vec[10] + ", " + vec[11] + ", " + vec[12] + ", " + vec[13] + ", " + vec[14] + ", " + vec[15] + ")";
    };
    if (void 0 !== exports) {
      /** @type {Object} */
      exports.mat4 = mat4;
    }
    quat = {
      /**
       * @return {?}
       */
      create : function() {
        var dest = new MatrixArray(4);
        return dest[0] = 0, dest[1] = 0, dest[2] = 0, dest[3] = 1, dest;
      }
    };
    quat.rotationTo = function(x, v1, b) {
      return x = vec3.create(), v1 = vec3.fromValues(1, 0, 0), b = vec3.fromValues(0, 1, 0), function(out, v2, v) {
        var toReturn = vec3.dot(v2, v);
        return-0.999999 > toReturn ? (vec3.cross(x, v1, v2), 1E-6 > vec3.length(x) && vec3.cross(x, b, v2), vec3.normalize(x, x), quat.setAxisAngle(out, x, Math.PI), out) : 0.999999 < toReturn ? (out[0] = 0, out[1] = 0, out[2] = 0, out[3] = 1, out) : (vec3.cross(x, v2, v), out[0] = x[0], out[1] = x[1], out[2] = x[2], out[3] = 1 + toReturn, quat.normalize(out, out));
      };
    }();
    quat.setAxes = function(up) {
      return up = proto.create(), function(out, pixels, dataAndEvents, u) {
        return up[0] = dataAndEvents[0], up[3] = dataAndEvents[1], up[6] = dataAndEvents[2], up[1] = u[0], up[4] = u[1], up[7] = u[2], up[2] = pixels[0], up[5] = pixels[1], up[8] = pixels[2], quat.normalize(out, quat.fromMat3(out, up));
      };
    }();
    /** @type {function (Array): ?} */
    quat.clone = vec4.clone;
    /** @type {function (number, number, number, ?): ?} */
    quat.fromValues = vec4.fromValues;
    /** @type {function (Array, Array): ?} */
    quat.copy = vec4.copy;
    /** @type {function (Array, ?, ?, ?, ?): ?} */
    quat.set = vec4.set;
    /**
     * @param {Array} var_args
     * @return {?}
     */
    quat.identity = function(var_args) {
      return var_args[0] = 0, var_args[1] = 0, var_args[2] = 0, var_args[3] = 1, var_args;
    };
    /**
     * @param {Array} out
     * @param {Array} axis
     * @param {number} rad
     * @return {?}
     */
    quat.setAxisAngle = function(out, axis, rad) {
      rad *= 0.5;
      /** @type {number} */
      var s = Math.sin(rad);
      return out[0] = s * axis[0], out[1] = s * axis[1], out[2] = s * axis[2], out[3] = Math.cos(rad), out;
    };
    /** @type {function (Array, Array, Array): ?} */
    quat.add = vec4.add;
    /**
     * @param {Array} quat2
     * @param {Array} b
     * @param {Array} a
     * @return {?}
     */
    quat.multiply = function(quat2, b, a) {
      var b2 = b[0];
      var b32 = b[1];
      var b02 = b[2];
      b = b[3];
      var a21 = a[0];
      var a22 = a[1];
      var a23 = a[2];
      return a = a[3], quat2[0] = b2 * a + b * a21 + b32 * a23 - b02 * a22, quat2[1] = b32 * a + b * a22 + b02 * a21 - b2 * a23, quat2[2] = b02 * a + b * a23 + b2 * a22 - b32 * a21, quat2[3] = b * a - b2 * a21 - b32 * a22 - b02 * a23, quat2;
    };
    /** @type {function (Array, Array, Array): ?} */
    quat.mul = quat.multiply;
    /** @type {function (Array, Array, number): ?} */
    quat.scale = vec4.scale;
    /**
     * @param {Array} angle
     * @param {number} a
     * @param {number} c
     * @return {?}
     */
    quat.rotateX = function(angle, a, c) {
      c *= 0.5;
      var a03 = a[0];
      var a01 = a[1];
      var a11 = a[2];
      a = a[3];
      /** @type {number} */
      var s = Math.sin(c);
      return c = Math.cos(c), angle[0] = a03 * c + a * s, angle[1] = a01 * c + a11 * s, angle[2] = a11 * c - a01 * s, angle[3] = a * c - a03 * s, angle;
    };
    /**
     * @param {Array} angle
     * @param {number} a
     * @param {number} c
     * @return {?}
     */
    quat.rotateY = function(angle, a, c) {
      c *= 0.5;
      var a11 = a[0];
      var a03 = a[1];
      var a01 = a[2];
      a = a[3];
      /** @type {number} */
      var s = Math.sin(c);
      return c = Math.cos(c), angle[0] = a11 * c - a01 * s, angle[1] = a03 * c + a * s, angle[2] = a01 * c + a11 * s, angle[3] = a * c - a03 * s, angle;
    };
    /**
     * @param {Array} angle
     * @param {number} a
     * @param {number} c
     * @return {?}
     */
    quat.rotateZ = function(angle, a, c) {
      c *= 0.5;
      var a01 = a[0];
      var a11 = a[1];
      var a03 = a[2];
      a = a[3];
      /** @type {number} */
      var s = Math.sin(c);
      return c = Math.cos(c), angle[0] = a01 * c + a11 * s, angle[1] = a11 * c - a01 * s, angle[2] = a03 * c + a * s, angle[3] = a * c - a03 * s, angle;
    };
    /**
     * @param {Array} out
     * @param {Array} a
     * @return {?}
     */
    quat.calculateW = function(out, a) {
      var a12 = a[0];
      var a01 = a[1];
      var a0 = a[2];
      return out[0] = a12, out[1] = a01, out[2] = a0, out[3] = -Math.sqrt(Math.abs(1 - a12 * a12 - a01 * a01 - a0 * a0)), out;
    };
    /** @type {function (Array, Array): ?} */
    quat.dot = vec4.dot;
    /** @type {function (Array, Array, Array, number): ?} */
    quat.lerp = vec4.lerp;
    /**
     * @param {Array} quat2
     * @param {number} a
     * @param {number} b
     * @param {number} t
     * @return {?}
     */
    quat.slerp = function(quat2, a, b, t) {
      var z = a[0];
      var s = a[1];
      var y1 = a[2];
      a = a[3];
      var y = b[0];
      var l = b[1];
      var y2 = b[2];
      b = b[3];
      var i;
      var x;
      var j;
      return x = z * y + s * l + y1 * y2 + a * b, 0 > x && (x = -x, y = -y, l = -l, y2 = -y2, b = -b), 1E-6 < 1 - x ? (i = Math.acos(x), j = Math.sin(i), x = Math.sin((1 - t) * i) / j, t = Math.sin(t * i) / j) : x = 1 - t, quat2[0] = x * z + t * y, quat2[1] = x * s + t * l, quat2[2] = x * y1 + t * y2, quat2[3] = x * a + t * b, quat2;
    };
    /**
     * @param {Array} resultMat
     * @param {Array} ctx
     * @return {?}
     */
    quat.invert = function(resultMat, ctx) {
      var z0 = ctx[0];
      var z1 = ctx[1];
      var cx = ctx[2];
      var t20 = ctx[3];
      /** @type {number} */
      var idet = z0 * z0 + z1 * z1 + cx * cx + t20 * t20;
      /** @type {number} */
      idet = idet ? 1 / idet : 0;
      return resultMat[0] = -z0 * idet, resultMat[1] = -z1 * idet, resultMat[2] = -cx * idet, resultMat[3] = t20 * idet, resultMat;
    };
    /**
     * @param {Array} out
     * @param {Array} a
     * @return {?}
     */
    quat.conjugate = function(out, a) {
      return out[0] = -a[0], out[1] = -a[1], out[2] = -a[2], out[3] = a[3], out;
    };
    /** @type {function (Array): ?} */
    quat.length = vec4.length;
    /** @type {function (Array): ?} */
    quat.len = quat.length;
    /** @type {function (Array): ?} */
    quat.squaredLength = vec4.squaredLength;
    /** @type {function (Array): ?} */
    quat.sqrLen = quat.squaredLength;
    /** @type {function (Array, Array): ?} */
    quat.normalize = vec4.normalize;
    quat.fromMat3 = function(l) {
      return l = "undefined" !== typeof Int8Array ? new Int8Array([1, 2, 0]) : [1, 2, 0], function(tasks, m) {
        var fRoot = m[0] + m[4] + m[8];
        if (0 < fRoot) {
          /** @type {number} */
          fRoot = Math.sqrt(fRoot + 1);
          /** @type {number} */
          tasks[3] = 0.5 * fRoot;
          /** @type {number} */
          fRoot = 0.5 / fRoot;
          /** @type {number} */
          tasks[0] = (m[7] - m[5]) * fRoot;
          /** @type {number} */
          tasks[1] = (m[2] - m[6]) * fRoot;
          /** @type {number} */
          tasks[2] = (m[3] - m[1]) * fRoot;
        } else {
          /** @type {number} */
          var j = 0;
          if (m[4] > m[0]) {
            /** @type {number} */
            j = 1;
          }
          if (m[8] > m[3 * j + j]) {
            /** @type {number} */
            j = 2;
          }
          var i = l[j];
          var k = l[i];
          /** @type {number} */
          fRoot = Math.sqrt(m[3 * j + j] - m[3 * i + i] - m[3 * k + k] + 1);
          /** @type {number} */
          tasks[j] = 0.5 * fRoot;
          /** @type {number} */
          fRoot = 0.5 / fRoot;
          /** @type {number} */
          tasks[3] = (m[3 * k + i] - m[3 * i + k]) * fRoot;
          /** @type {number} */
          tasks[i] = (m[3 * i + j] + m[3 * j + i]) * fRoot;
          /** @type {number} */
          tasks[k] = (m[3 * k + j] + m[3 * j + k]) * fRoot;
        }
        return tasks;
      };
    }();
    /**
     * @param {Array} vec
     * @return {?}
     */
    quat.str = function(vec) {
      return "quat(" + vec[0] + ", " + vec[1] + ", " + vec[2] + ", " + vec[3] + ")";
    };
    if (void 0 !== exports) {
      /** @type {Object} */
      exports.quat = quat;
    }
  })(reporter);
})(this);
