(function() {
  /**
   * @param {Object} component
   * @return {?}
   */
  function test(component) {
    throw component;
  }
  /**
   * @param {string} param
   * @param {Object} o
   * @return {undefined}
   */
  function run(param, o) {
    var pathConfig = param.split(".");
    var d = el;
    if (!(pathConfig[0] in d)) {
      if (!!d.execScript) {
        d.execScript("var " + pathConfig[0]);
      }
    }
    var i;
    for (;pathConfig.length && (i = pathConfig.shift());) {
      if (pathConfig.length || o === count) {
        d = d[i] ? d[i] : d[i] = {};
      } else {
        /** @type {Object} */
        d[i] = o;
      }
    }
  }
  /**
   * @param {Array} buffer
   * @param {number} value
   * @return {undefined}
   */
  function callback(buffer, value) {
    /** @type {number} */
    this.index = "number" === typeof value ? value : 0;
    /** @type {number} */
    this.i = 0;
    this.buffer = buffer instanceof (USE_TYPEDARRAY ? Uint8Array : Array) ? buffer : new (USE_TYPEDARRAY ? Uint8Array : Array)(32768);
    if (2 * this.buffer.length <= this.index) {
      test(Error("invalid index"));
    }
    if (this.buffer.length <= this.index) {
      this.f();
    }
  }
  /**
   * @param {number} i
   * @return {undefined}
   */
  function data(i) {
    this.buffer = new (USE_TYPEDARRAY ? Uint16Array : Array)(2 * i);
    /** @type {number} */
    this.length = 0;
  }
  /**
   * @param {Object} parent
   * @return {?}
   */
  function promote(parent) {
    var sz = parent.length;
    /** @type {number} */
    var result = 0;
    /** @type {number} */
    var end = Number.POSITIVE_INFINITY;
    var size;
    var buffer;
    var n;
    var fn;
    var step;
    var mediaBlockCount;
    var bulk;
    var index;
    var i;
    /** @type {number} */
    index = 0;
    for (;index < sz;++index) {
      if (parent[index] > result) {
        result = parent[index];
      }
      if (parent[index] < end) {
        end = parent[index];
      }
    }
    /** @type {number} */
    size = 1 << result;
    buffer = new (USE_TYPEDARRAY ? Uint32Array : Array)(size);
    /** @type {number} */
    n = 1;
    /** @type {number} */
    fn = 0;
    /** @type {number} */
    step = 2;
    for (;n <= result;) {
      /** @type {number} */
      index = 0;
      for (;index < sz;++index) {
        if (parent[index] === n) {
          /** @type {number} */
          mediaBlockCount = 0;
          /** @type {number} */
          bulk = fn;
          /** @type {number} */
          i = 0;
          for (;i < n;++i) {
            /** @type {number} */
            mediaBlockCount = mediaBlockCount << 1 | bulk & 1;
            bulk >>= 1;
          }
          /** @type {number} */
          i = mediaBlockCount;
          for (;i < size;i += step) {
            /** @type {number} */
            buffer[i] = n << 16 | index;
          }
          ++fn;
        }
      }
      ++n;
      fn <<= 1;
      step <<= 1;
    }
    return[buffer, result, end];
  }
  /**
   * @param {Object} input
   * @param {Object} options
   * @return {undefined}
   */
  function update(input, options) {
    /** @type {number} */
    this.h = n;
    /** @type {number} */
    this.w = 0;
    this.input = USE_TYPEDARRAY && input instanceof Array ? new Uint8Array(input) : input;
    /** @type {number} */
    this.b = 0;
    if (options) {
      if (options.lazy) {
        this.w = options.lazy;
      }
      if ("number" === typeof options.compressionType) {
        /** @type {number} */
        this.h = options.compressionType;
      }
      if (options.outputBuffer) {
        this.a = USE_TYPEDARRAY && options.outputBuffer instanceof Array ? new Uint8Array(options.outputBuffer) : options.outputBuffer;
      }
      if ("number" === typeof options.outputIndex) {
        /** @type {number} */
        this.b = options.outputIndex;
      }
    }
    if (!this.a) {
      this.a = new (USE_TYPEDARRAY ? Uint8Array : Array)(32768);
    }
  }
  /**
   * @param {number} length
   * @param {number} wanted
   * @return {undefined}
   */
  function expect(length, wanted) {
    /** @type {number} */
    this.length = length;
    /** @type {number} */
    this.G = wanted;
  }
  /**
   * @param {Object} value
   * @param {Array} str
   * @return {?}
   */
  function parse(value, str) {
    /**
     * @param {Object} obj
     * @param {number} outstandingDataSize
     * @return {undefined}
     */
    function position(obj, outstandingDataSize) {
      var i = obj.G;
      /** @type {Array} */
      var array = [];
      /** @type {number} */
      var n = 0;
      var node;
      node = nodes[obj.length];
      /** @type {number} */
      array[n++] = node & 65535;
      /** @type {number} */
      array[n++] = node >> 16 & 255;
      /** @type {number} */
      array[n++] = node >> 24;
      var fragment;
      switch(restoreScript) {
        case 1 === i:
          /** @type {Array} */
          fragment = [0, i - 1, 0];
          break;
        case 2 === i:
          /** @type {Array} */
          fragment = [1, i - 2, 0];
          break;
        case 3 === i:
          /** @type {Array} */
          fragment = [2, i - 3, 0];
          break;
        case 4 === i:
          /** @type {Array} */
          fragment = [3, i - 4, 0];
          break;
        case 6 >= i:
          /** @type {Array} */
          fragment = [4, i - 5, 1];
          break;
        case 8 >= i:
          /** @type {Array} */
          fragment = [5, i - 7, 1];
          break;
        case 12 >= i:
          /** @type {Array} */
          fragment = [6, i - 9, 2];
          break;
        case 16 >= i:
          /** @type {Array} */
          fragment = [7, i - 13, 2];
          break;
        case 24 >= i:
          /** @type {Array} */
          fragment = [8, i - 17, 3];
          break;
        case 32 >= i:
          /** @type {Array} */
          fragment = [9, i - 25, 3];
          break;
        case 48 >= i:
          /** @type {Array} */
          fragment = [10, i - 33, 4];
          break;
        case 64 >= i:
          /** @type {Array} */
          fragment = [11, i - 49, 4];
          break;
        case 96 >= i:
          /** @type {Array} */
          fragment = [12, i - 65, 5];
          break;
        case 128 >= i:
          /** @type {Array} */
          fragment = [13, i - 97, 5];
          break;
        case 192 >= i:
          /** @type {Array} */
          fragment = [14, i - 129, 6];
          break;
        case 256 >= i:
          /** @type {Array} */
          fragment = [15, i - 193, 6];
          break;
        case 384 >= i:
          /** @type {Array} */
          fragment = [16, i - 257, 7];
          break;
        case 512 >= i:
          /** @type {Array} */
          fragment = [17, i - 385, 7];
          break;
        case 768 >= i:
          /** @type {Array} */
          fragment = [18, i - 513, 8];
          break;
        case 1024 >= i:
          /** @type {Array} */
          fragment = [19, i - 769, 8];
          break;
        case 1536 >= i:
          /** @type {Array} */
          fragment = [20, i - 1025, 9];
          break;
        case 2048 >= i:
          /** @type {Array} */
          fragment = [21, i - 1537, 9];
          break;
        case 3072 >= i:
          /** @type {Array} */
          fragment = [22, i - 2049, 10];
          break;
        case 4096 >= i:
          /** @type {Array} */
          fragment = [23, i - 3073, 10];
          break;
        case 6144 >= i:
          /** @type {Array} */
          fragment = [24, i - 4097, 11];
          break;
        case 8192 >= i:
          /** @type {Array} */
          fragment = [25, i - 6145, 11];
          break;
        case 12288 >= i:
          /** @type {Array} */
          fragment = [26, i - 8193, 12];
          break;
        case 16384 >= i:
          /** @type {Array} */
          fragment = [27, i - 12289, 12];
          break;
        case 24576 >= i:
          /** @type {Array} */
          fragment = [28, i - 16385, 13];
          break;
        case 32768 >= i:
          /** @type {Array} */
          fragment = [29, i - 24577, 13];
          break;
        default:
          test("invalid distance");
      }
      /** @type {(Array|undefined)} */
      node = fragment;
      array[n++] = node[0];
      array[n++] = node[1];
      array[n++] = node[2];
      /** @type {number} */
      i = 0;
      /** @type {number} */
      n = array.length;
      for (;i < n;++i) {
        buffer[j++] = array[i];
      }
      s[array[0]]++;
      H[array[3]]++;
      /** @type {number} */
      v = obj.length + outstandingDataSize - 1;
      /** @type {null} */
      prev = null;
    }
    var i;
    var len;
    var expected;
    var len_parsed;
    var environment;
    var exceptions = {};
    var val;
    var prev;
    /** @type {(Array|Uint16Array)} */
    var buffer = USE_TYPEDARRAY ? new Uint16Array(2 * str.length) : [];
    /** @type {number} */
    var j = 0;
    /** @type {number} */
    var v = 0;
    var s = new (USE_TYPEDARRAY ? Uint32Array : Array)(286);
    var H = new (USE_TYPEDARRAY ? Uint32Array : Array)(30);
    var size = value.w;
    var c;
    if (!USE_TYPEDARRAY) {
      /** @type {number} */
      expected = 0;
      for (;285 >= expected;) {
        /** @type {number} */
        s[expected++] = 0;
      }
      /** @type {number} */
      expected = 0;
      for (;29 >= expected;) {
        /** @type {number} */
        H[expected++] = 0;
      }
    }
    /** @type {number} */
    s[256] = 1;
    /** @type {number} */
    i = 0;
    len = str.length;
    for (;i < len;++i) {
      /** @type {number} */
      expected = environment = 0;
      /** @type {number} */
      len_parsed = 3;
      for (;expected < len_parsed && i + expected !== len;++expected) {
        /** @type {number} */
        environment = environment << 8 | str[i + expected];
      }
      if (exceptions[environment] === count && (exceptions[environment] = []), expected = exceptions[environment], !(0 < v--)) {
        for (;0 < expected.length && 32768 < i - expected[0];) {
          expected.shift();
        }
        if (i + 3 >= len) {
          if (prev) {
            position(prev, -1);
          }
          /** @type {number} */
          expected = 0;
          /** @type {number} */
          len_parsed = len - i;
          for (;expected < len_parsed;++expected) {
            c = str[i + expected];
            buffer[j++] = c;
            ++s[c];
          }
          break;
        }
        if (0 < expected.length) {
          val = push(str, i, expected);
          if (prev) {
            if (prev.length < val.length) {
              c = str[i - 1];
              buffer[j++] = c;
              ++s[c];
              position(val, 0);
            } else {
              position(prev, -1);
            }
          } else {
            if (val.length < size) {
              prev = val;
            } else {
              position(val, 0);
            }
          }
        } else {
          if (prev) {
            position(prev, -1);
          } else {
            c = str[i];
            buffer[j++] = c;
            ++s[c];
          }
        }
      }
      expected.push(i);
    }
    return buffer[j++] = 256, s[256]++, value.L = s, value.K = H, USE_TYPEDARRAY ? buffer.subarray(0, j) : buffer;
  }
  /**
   * @param {Array} data
   * @param {number} row
   * @param {string} target
   * @return {?}
   */
  function push(data, row, target) {
    var source;
    var text;
    /** @type {number} */
    var from = 0;
    var i;
    var left;
    var right;
    var rows = data.length;
    /** @type {number} */
    left = 0;
    right = target.length;
    a: for (;left < right;left++) {
      if (source = target[right - left - 1], i = 3, 3 < from) {
        /** @type {number} */
        i = from;
        for (;3 < i;i--) {
          if (data[source + i - 1] !== data[row + i - 1]) {
            continue a;
          }
        }
        /** @type {number} */
        i = from;
      }
      for (;258 > i && (row + i < rows && data[source + i] === data[row + i]);) {
        ++i;
      }
      if (i > from && (text = source, from = i), 258 === i) {
        break;
      }
    }
    return new expect(from, row - text);
  }
  /**
   * @param {Array} options
   * @param {number} opt_attributes
   * @return {?}
   */
  function walk(options, opt_attributes) {
    var args = options.length;
    var path = new data(572);
    var result = new (USE_TYPEDARRAY ? Uint8Array : Array)(args);
    var p;
    var i;
    var il;
    if (!USE_TYPEDARRAY) {
      /** @type {number} */
      i = 0;
      for (;i < args;i++) {
        /** @type {number} */
        result[i] = 0;
      }
    }
    /** @type {number} */
    i = 0;
    for (;i < args;++i) {
      if (0 < options[i]) {
        path.push(i, options[i]);
      }
    }
    if (args = Array(path.length / 2), p = new (USE_TYPEDARRAY ? Uint32Array : Array)(path.length / 2), 1 === args.length) {
      return result[path.pop().index] = 1, result;
    }
    /** @type {number} */
    i = 0;
    /** @type {number} */
    il = path.length / 2;
    for (;i < il;++i) {
      args[i] = path.pop();
      p[i] = args[i].value;
    }
    path = fn(p, p.length, opt_attributes);
    /** @type {number} */
    i = 0;
    /** @type {number} */
    il = args.length;
    for (;i < il;++i) {
      result[args[i].index] = path[i];
    }
    return result;
  }
  /**
   * @param {Object} old
   * @param {number} value
   * @param {number} length
   * @return {?}
   */
  function fn(old, value, length) {
    /**
     * @param {number} i
     * @return {undefined}
     */
    function compute(i) {
      var idx = array[i][values[i]];
      if (idx === value) {
        compute(i + 1);
        compute(i + 1);
      } else {
        --buffer[idx];
      }
      ++values[i];
    }
    var result = new (USE_TYPEDARRAY ? Uint16Array : Array)(length);
    var results = new (USE_TYPEDARRAY ? Uint8Array : Array)(length);
    var buffer = new (USE_TYPEDARRAY ? Uint8Array : Array)(value);
    /** @type {Array} */
    var data = Array(length);
    /** @type {Array} */
    var array = Array(length);
    /** @type {Array} */
    var values = Array(length);
    /** @type {number} */
    var i = (1 << length) - value;
    /** @type {number} */
    var name = 1 << length - 1;
    var index;
    var x;
    /** @type {number} */
    result[length - 1] = value;
    /** @type {number} */
    index = 0;
    for (;index < length;++index) {
      if (i < name) {
        /** @type {number} */
        results[index] = 0;
      } else {
        /** @type {number} */
        results[index] = 1;
        i -= name;
      }
      i <<= 1;
      result[length - 2 - index] = (result[length - 1 - index] / 2 | 0) + value;
    }
    result[0] = results[0];
    /** @type {Array} */
    data[0] = Array(result[0]);
    /** @type {Array} */
    array[0] = Array(result[0]);
    /** @type {number} */
    index = 1;
    for (;index < length;++index) {
      if (result[index] > 2 * result[index - 1] + results[index]) {
        result[index] = 2 * result[index - 1] + results[index];
      }
      /** @type {Array} */
      data[index] = Array(result[index]);
      /** @type {Array} */
      array[index] = Array(result[index]);
    }
    /** @type {number} */
    i = 0;
    for (;i < value;++i) {
      /** @type {number} */
      buffer[i] = length;
    }
    /** @type {number} */
    name = 0;
    for (;name < result[length - 1];++name) {
      data[length - 1][name] = old[name];
      /** @type {number} */
      array[length - 1][name] = name;
    }
    /** @type {number} */
    i = 0;
    for (;i < length;++i) {
      /** @type {number} */
      values[i] = 0;
    }
    if (1 === results[length - 1]) {
      --buffer[0];
      ++values[length - 1];
    }
    /** @type {number} */
    index = length - 2;
    for (;0 <= index;--index) {
      /** @type {number} */
      length = i = 0;
      x = values[index + 1];
      /** @type {number} */
      name = 0;
      for (;name < result[index];name++) {
        length = data[index + 1][x] + data[index + 1][x + 1];
        if (length > old[i]) {
          /** @type {number} */
          data[index][name] = length;
          /** @type {number} */
          array[index][name] = value;
          x += 2;
        } else {
          data[index][name] = old[i];
          /** @type {number} */
          array[index][name] = i;
          ++i;
        }
      }
      /** @type {number} */
      values[index] = 0;
      if (1 === results[index]) {
        compute(index);
      }
    }
    return buffer;
  }
  /**
   * @param {Array} x
   * @return {?}
   */
  function c(x) {
    var _c = new (USE_TYPEDARRAY ? Uint16Array : Array)(x.length);
    /** @type {Array} */
    var safe = [];
    /** @type {Array} */
    var keys = [];
    /** @type {number} */
    var key = 0;
    var i;
    var len;
    var k;
    /** @type {number} */
    i = 0;
    len = x.length;
    for (;i < len;i++) {
      /** @type {number} */
      safe[x[i]] = (safe[x[i]] | 0) + 1;
    }
    /** @type {number} */
    i = 1;
    /** @type {number} */
    len = 16;
    for (;i <= len;i++) {
      /** @type {number} */
      keys[i] = key;
      key += safe[i] | 0;
      key <<= 1;
    }
    /** @type {number} */
    i = 0;
    len = x.length;
    for (;i < len;i++) {
      key = keys[x[i]];
      keys[x[i]] += 1;
      /** @type {number} */
      safe = _c[i] = 0;
      k = x[i];
      for (;safe < k;safe++) {
        /** @type {number} */
        _c[i] = _c[i] << 1 | key & 1;
        key >>>= 1;
      }
    }
    return _c;
  }
  /**
   * @param {Object} input
   * @param {Object} m
   * @return {undefined}
   */
  function t(input, m) {
    /** @type {Array} */
    this.l = [];
    /** @type {number} */
    this.m = 32768;
    /** @type {number} */
    this.e = this.g = this.c = this.q = 0;
    this.input = USE_TYPEDARRAY ? new Uint8Array(input) : input;
    /** @type {boolean} */
    this.s = false;
    /** @type {number} */
    this.n = fragment;
    /** @type {boolean} */
    this.B = false;
    if (m || !(m = {})) {
      if (m.index) {
        this.c = m.index;
      }
      if (m.bufferSize) {
        this.m = m.bufferSize;
      }
      if (m.bufferType) {
        this.n = m.bufferType;
      }
      if (m.resize) {
        this.B = m.resize;
      }
    }
    switch(this.n) {
      case temp:
        /** @type {number} */
        this.b = 32768;
        this.a = new (USE_TYPEDARRAY ? Uint8Array : Array)(32768 + this.m + 258);
        break;
      case fragment:
        /** @type {number} */
        this.b = 0;
        this.a = new (USE_TYPEDARRAY ? Uint8Array : Array)(this.m);
        this.f = this.J;
        this.t = this.H;
        this.o = this.I;
        break;
      default:
        test(Error("invalid inflate mode"));
    }
  }
  /**
   * @param {Object} node
   * @param {number} opt_attributes
   * @return {?}
   */
  function value(node, opt_attributes) {
    var len = node.g;
    var x = node.e;
    var input = node.input;
    var temp = node.c;
    var octet;
    for (;x < opt_attributes;) {
      octet = input[temp++];
      if (octet === count) {
        test(Error("input buffer is broken"));
      }
      len |= octet << x;
      x += 8;
    }
    return node.g = len >>> opt_attributes, node.e = x - opt_attributes, node.c = temp, len & (1 << opt_attributes) - 1;
  }
  /**
   * @param {Object} options
   * @param {Object} collection
   * @return {?}
   */
  function process(options, collection) {
    var g = options.g;
    var i = options.e;
    var str = options.input;
    var c = options.c;
    var node = collection[0];
    var padLength = collection[1];
    var current;
    for (;i < padLength;) {
      if (current = str[c++], current === count) {
        break;
      }
      g |= current << i;
      i += 8;
    }
    return str = node[g & (1 << padLength) - 1], node = str >>> 16, options.g = g >> node, options.e = i - node, options.c = c, str & 65535;
  }
  /**
   * @param {Object} obj
   * @return {undefined}
   */
  function i(obj) {
    /**
     * @param {number} count
     * @param {Object} key
     * @param {(Array|Int8Array|Uint8Array)} res
     * @return {?}
     */
    function fn(count, key, res) {
      var data;
      var item;
      var k;
      var i;
      /** @type {number} */
      i = 0;
      for (;i < count;) {
        switch(data = process(this, key), data) {
          case 16:
            k = 3 + value(this, 2);
            for (;k--;) {
              res[i++] = item;
            }
            break;
          case 17:
            k = 3 + value(this, 3);
            for (;k--;) {
              /** @type {number} */
              res[i++] = 0;
            }
            /** @type {number} */
            item = 0;
            break;
          case 18:
            k = 11 + value(this, 7);
            for (;k--;) {
              /** @type {number} */
              res[i++] = 0;
            }
            /** @type {number} */
            item = 0;
            break;
          default:
            item = res[i++] = data;
        }
      }
      return res;
    }
    var hlit = value(obj, 5) + 257;
    var hdist = value(obj, 5) + 1;
    var index = value(obj, 4) + 4;
    var parent = new (USE_TYPEDARRAY ? Uint8Array : Array)(codeSegments.length);
    var i;
    /** @type {number} */
    i = 0;
    for (;i < index;++i) {
      parent[codeSegments[i]] = value(obj, 3);
    }
    index = promote(parent);
    parent = new (USE_TYPEDARRAY ? Uint8Array : Array)(hlit);
    i = new (USE_TYPEDARRAY ? Uint8Array : Array)(hdist);
    obj.o(promote(fn.call(obj, hlit, index, parent)), promote(fn.call(obj, hdist, index, i)));
  }
  /**
   * @param {string} data
   * @return {?}
   */
  function indexOf(data) {
    if ("string" === typeof data) {
      /** @type {Array.<string>} */
      data = data.split("");
      var a;
      var b;
      /** @type {number} */
      a = 0;
      /** @type {number} */
      b = data.length;
      for (;a < b;a++) {
        /** @type {number} */
        data[a] = (data[a].charCodeAt(0) & 255) >>> 0;
      }
    }
    /** @type {number} */
    a = 1;
    /** @type {number} */
    b = 0;
    var len = data.length;
    var tlen;
    /** @type {number} */
    var j = 0;
    for (;0 < len;) {
      tlen = 1024 < len ? 1024 : len;
      len -= tlen;
      do {
        a += data[j++];
        b += a;
      } while (--tlen);
      a %= 65521;
      b %= 65521;
    }
    return(b << 16 | a) >>> 0;
  }
  /**
   * @param {Array} select
   * @param {Object} options
   * @return {undefined}
   */
  function init(select, options) {
    var c;
    var ent;
    /** @type {Array} */
    this.input = select;
    /** @type {number} */
    this.c = 0;
    if (options || !(options = {})) {
      if (options.index) {
        this.c = options.index;
      }
      if (options.verify) {
        this.M = options.verify;
      }
    }
    c = select[this.c++];
    ent = select[this.c++];
    switch(c & 15) {
      case step:
        /** @type {number} */
        this.method = step;
        break;
      default:
        test(Error("unsupported compression method"));
    }
    if (0 !== ((c << 8) + ent) % 31) {
      test(Error("invalid fcheck flag:" + ((c << 8) + ent) % 31));
    }
    if (ent & 32) {
      test(Error("fdict flag is not supported"));
    }
    this.A = new t(select, {
      index : this.c,
      bufferSize : options.bufferSize,
      bufferType : options.bufferType,
      resize : options.resize
    });
  }
  /**
   * @param {Array} once
   * @param {Object} options
   * @return {undefined}
   */
  function Sprite(once, options) {
    /** @type {Array} */
    this.input = once;
    this.a = new (USE_TYPEDARRAY ? Uint8Array : Array)(32768);
    /** @type {number} */
    this.h = x.k;
    var internalValues = {};
    var key;
    if (!(!options && (options = {}))) {
      if (!("number" !== typeof options.compressionType)) {
        /** @type {number} */
        this.h = options.compressionType;
      }
    }
    for (key in options) {
      internalValues[key] = options[key];
    }
    internalValues.outputBuffer = this.a;
    this.z = new update(this.input, internalValues);
  }
  /**
   * @param {string} path
   * @param {Object} map
   * @return {undefined}
   */
  function destroy(path, map) {
    var keys;
    var key;
    var j;
    var klen;
    if (Object.keys) {
      /** @type {Array.<string>} */
      keys = Object.keys(map);
    } else {
      for (key in keys = [], j = 0, map) {
        /** @type {string} */
        keys[j++] = key;
      }
    }
    /** @type {number} */
    j = 0;
    /** @type {number} */
    klen = keys.length;
    for (;j < klen;++j) {
      key = keys[j];
      run(path + "." + key, map[key]);
    }
  }
  var count = void 0;
  /** @type {boolean} */
  var restoreScript = true;
  var el = this;
  /** @type {boolean} */
  var USE_TYPEDARRAY = "undefined" !== typeof Uint8Array && ("undefined" !== typeof Uint16Array && "undefined" !== typeof Uint32Array);
  /**
   * @return {?}
   */
  callback.prototype.f = function() {
    var buffer = this.buffer;
    var i;
    var bufferLength = buffer.length;
    var buf = new (USE_TYPEDARRAY ? Uint8Array : Array)(bufferLength << 1);
    if (USE_TYPEDARRAY) {
      buf.set(buffer);
    } else {
      /** @type {number} */
      i = 0;
      for (;i < bufferLength;++i) {
        buf[i] = buffer[i];
      }
    }
    return this.buffer = buf;
  };
  /**
   * @param {number} desiredNonCommentArgIndex
   * @param {number} expectedNumberOfNonCommentArgs
   * @param {number} callback
   * @return {undefined}
   */
  callback.prototype.d = function(desiredNonCommentArgIndex, expectedNumberOfNonCommentArgs, callback) {
    var buffer = this.buffer;
    var i = this.index;
    var j = this.i;
    var n = buffer[i];
    if (callback && (1 < expectedNumberOfNonCommentArgs && (desiredNonCommentArgIndex = 8 < expectedNumberOfNonCommentArgs ? (tmp[desiredNonCommentArgIndex & 255] << 24 | tmp[desiredNonCommentArgIndex >>> 8 & 255] << 16 | tmp[desiredNonCommentArgIndex >>> 16 & 255] << 8 | tmp[desiredNonCommentArgIndex >>> 24 & 255]) >> 32 - expectedNumberOfNonCommentArgs : tmp[desiredNonCommentArgIndex] >> 8 - expectedNumberOfNonCommentArgs)), 8 > expectedNumberOfNonCommentArgs + j) {
      /** @type {number} */
      n = n << expectedNumberOfNonCommentArgs | desiredNonCommentArgIndex;
      j += expectedNumberOfNonCommentArgs;
    } else {
      /** @type {number} */
      callback = 0;
      for (;callback < expectedNumberOfNonCommentArgs;++callback) {
        /** @type {number} */
        n = n << 1 | desiredNonCommentArgIndex >> expectedNumberOfNonCommentArgs - callback - 1 & 1;
        if (8 === ++j) {
          /** @type {number} */
          j = 0;
          buffer[i++] = tmp[n];
          /** @type {number} */
          n = 0;
          if (i === buffer.length) {
            buffer = this.f();
          }
        }
      }
    }
    buffer[i] = n;
    this.buffer = buffer;
    this.i = j;
    this.index = i;
  };
  /**
   * @return {?}
   */
  callback.prototype.finish = function() {
    var buffer = this.buffer;
    var i = this.index;
    var token;
    return 0 < this.i && (buffer[i] <<= 8 - this.i, buffer[i] = tmp[buffer[i]], i++), USE_TYPEDARRAY ? token = buffer.subarray(0, i) : (buffer.length = i, token = buffer), token;
  };
  var obj = new (USE_TYPEDARRAY ? Uint8Array : Array)(256);
  var target;
  /** @type {number} */
  target = 0;
  for (;256 > target;++target) {
    /** @type {number} */
    var node = target;
    /** @type {number} */
    var table = node;
    /** @type {number} */
    var _i = 7;
    /** @type {number} */
    node = node >>> 1;
    for (;node;node >>>= 1) {
      table <<= 1;
      table |= node & 1;
      --_i;
    }
    /** @type {number} */
    obj[target] = (table << _i & 255) >>> 0;
  }
  var tmp = obj;
  /**
   * @param {number} keepData
   * @return {?}
   */
  data.prototype.getParent = function(keepData) {
    return 2 * ((keepData - 2) / 4 | 0);
  };
  /**
   * @param {?} result
   * @param {?} model
   * @return {?}
   */
  data.prototype.push = function(result, model) {
    var key;
    var index;
    var object = this.buffer;
    var value;
    key = this.length;
    object[this.length++] = model;
    object[this.length++] = result;
    for (;0 < key;) {
      if (index = this.getParent(key), object[key] > object[index]) {
        value = object[key];
        object[key] = object[index];
        object[index] = value;
        value = object[key + 1];
        object[key + 1] = object[index + 1];
        object[index + 1] = value;
        key = index;
      } else {
        break;
      }
    }
    return this.length;
  };
  /**
   * @return {?}
   */
  data.prototype.pop = function() {
    var data;
    var x;
    var buffer = this.buffer;
    var c;
    var i;
    var index;
    x = buffer[0];
    data = buffer[1];
    this.length -= 2;
    buffer[0] = buffer[this.length];
    buffer[1] = buffer[this.length + 1];
    /** @type {number} */
    index = 0;
    for (;;) {
      if (i = 2 * index + 2, i >= this.length) {
        break;
      }
      if (i + 2 < this.length && (buffer[i + 2] > buffer[i] && (i += 2)), buffer[i] > buffer[index]) {
        c = buffer[index];
        buffer[index] = buffer[i];
        buffer[i] = c;
        c = buffer[index + 1];
        buffer[index + 1] = buffer[i + 1];
        buffer[i + 1] = c;
      } else {
        break;
      }
      /** @type {number} */
      index = i;
    }
    return{
      index : data,
      value : x,
      length : this.length
    };
  };
  /** @type {number} */
  var n = 2;
  obj = {
    NONE : 0,
    r : 1,
    k : n,
    N : 3
  };
  /** @type {Array} */
  var q = [];
  /** @type {number} */
  target = 0;
  for (;288 > target;target++) {
    switch(restoreScript) {
      case 143 >= target:
        q.push([target + 48, 8]);
        break;
      case 255 >= target:
        q.push([target - 144 + 400, 9]);
        break;
      case 279 >= target:
        q.push([target - 256 + 0, 7]);
        break;
      case 287 >= target:
        q.push([target - 280 + 192, 8]);
        break;
      default:
        test("invalid literal: " + target);
    }
  }
  /**
   * @return {?}
   */
  update.prototype.j = function() {
    var o;
    var key;
    var i;
    var f;
    var data = this.input;
    switch(this.h) {
      case 0:
        /** @type {number} */
        i = 0;
        f = data.length;
        for (;i < f;) {
          key = USE_TYPEDARRAY ? data.subarray(i, i + 65535) : data.slice(i, i + 65535);
          i += key.length;
          /** @type {boolean} */
          var a = i === f;
          var l = count;
          var d = l = count;
          d = l = count;
          var array = this.a;
          var idx = this.b;
          if (USE_TYPEDARRAY) {
            /** @type {Uint8Array} */
            array = new Uint8Array(this.a.buffer);
            for (;array.length <= idx + key.length + 5;) {
              /** @type {Uint8Array} */
              array = new Uint8Array(array.length << 1);
            }
            array.set(this.a);
          }
          if (l = a ? 1 : 0, array[idx++] = l | 0, l = key.length, d = ~l + 65536 & 65535, array[idx++] = l & 255, array[idx++] = l >>> 8 & 255, array[idx++] = d & 255, array[idx++] = d >>> 8 & 255, USE_TYPEDARRAY) {
            array.set(key, idx);
            idx += key.length;
            array = array.subarray(0, idx);
          } else {
            /** @type {number} */
            l = 0;
            d = key.length;
            for (;l < d;++l) {
              array[idx++] = key[l];
            }
            array.length = idx;
          }
          this.b = idx;
          this.a = array;
        }
        break;
      case 1:
        i = new callback(USE_TYPEDARRAY ? new Uint8Array(this.a.buffer) : this.a, this.b);
        i.d(1, 1, restoreScript);
        i.d(1, 2, restoreScript);
        data = parse(this, data);
        /** @type {number} */
        key = 0;
        a = data.length;
        for (;key < a;key++) {
          if (f = data[key], callback.prototype.d.apply(i, q[f]), 256 < f) {
            i.d(data[++key], data[++key], restoreScript);
            i.d(data[++key], 5);
            i.d(data[++key], data[++key], restoreScript);
          } else {
            if (256 === f) {
              break;
            }
          }
        }
        this.a = i.finish();
        this.b = this.a.length;
        break;
      case n:
        f = new callback(USE_TYPEDARRAY ? new Uint8Array(this.a.buffer) : this.a, this.b);
        var font_max;
        var defaultMaxListeners;
        var k;
        /** @type {Array} */
        var r = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        var result;
        var hash;
        /** @type {Array} */
        l = Array(19);
        var j;
        array = n;
        f.d(1, 1, restoreScript);
        f.d(array, 2, restoreScript);
        data = parse(this, data);
        d = walk(this.L, 15);
        result = c(d);
        array = walk(this.K, 7);
        idx = c(array);
        /** @type {number} */
        font_max = 286;
        for (;257 < font_max && 0 === d[font_max - 1];font_max--) {
        }
        /** @type {number} */
        defaultMaxListeners = 30;
        for (;1 < defaultMaxListeners && 0 === array[defaultMaxListeners - 1];defaultMaxListeners--) {
        }
        /** @type {number} */
        var size = font_max;
        /** @type {number} */
        var m = defaultMaxListeners;
        o = new (USE_TYPEDARRAY ? Uint32Array : Array)(size + m);
        var buffer = new (USE_TYPEDARRAY ? Uint32Array : Array)(316);
        var end;
        var start;
        hash = new (USE_TYPEDARRAY ? Uint8Array : Array)(19);
        /** @type {number} */
        j = k = 0;
        for (;j < size;j++) {
          o[k++] = d[j];
        }
        /** @type {number} */
        j = 0;
        for (;j < m;j++) {
          o[k++] = array[j];
        }
        if (!USE_TYPEDARRAY) {
          /** @type {number} */
          j = 0;
          m = hash.length;
          for (;j < m;++j) {
            /** @type {number} */
            hash[j] = 0;
          }
        }
        /** @type {number} */
        j = end = 0;
        m = o.length;
        for (;j < m;j += k) {
          /** @type {number} */
          k = 1;
          for (;j + k < m && o[j + k] === o[j];++k) {
          }
          if (size = k, 0 === o[j]) {
            if (3 > size) {
              for (;0 < size--;) {
                /** @type {number} */
                buffer[end++] = 0;
                hash[0]++;
              }
            } else {
              for (;0 < size;) {
                /** @type {number} */
                start = 138 > size ? size : 138;
                if (start > size - 3) {
                  if (start < size) {
                    /** @type {number} */
                    start = size - 3;
                  }
                }
                if (10 >= start) {
                  /** @type {number} */
                  buffer[end++] = 17;
                  /** @type {number} */
                  buffer[end++] = start - 3;
                  hash[17]++;
                } else {
                  /** @type {number} */
                  buffer[end++] = 18;
                  /** @type {number} */
                  buffer[end++] = start - 11;
                  hash[18]++;
                }
                size -= start;
              }
            }
          } else {
            if (buffer[end++] = o[j], hash[o[j]]++, size--, 3 > size) {
              for (;0 < size--;) {
                buffer[end++] = o[j];
                hash[o[j]]++;
              }
            } else {
              for (;0 < size;) {
                /** @type {number} */
                start = 6 > size ? size : 6;
                if (start > size - 3) {
                  if (start < size) {
                    /** @type {number} */
                    start = size - 3;
                  }
                }
                /** @type {number} */
                buffer[end++] = 16;
                /** @type {number} */
                buffer[end++] = start - 3;
                hash[16]++;
                size -= start;
              }
            }
          }
        }
        o = USE_TYPEDARRAY ? buffer.subarray(0, end) : buffer.slice(0, end);
        hash = walk(hash, 7);
        /** @type {number} */
        j = 0;
        for (;19 > j;j++) {
          l[j] = hash[r[j]];
        }
        /** @type {number} */
        k = 19;
        for (;4 < k && 0 === l[k - 1];k--) {
        }
        r = c(hash);
        f.d(font_max - 257, 5, restoreScript);
        f.d(defaultMaxListeners - 1, 5, restoreScript);
        f.d(k - 4, 4, restoreScript);
        /** @type {number} */
        j = 0;
        for (;j < k;j++) {
          f.d(l[j], 3, restoreScript);
        }
        /** @type {number} */
        j = 0;
        l = o.length;
        for (;j < l;j++) {
          if (key = o[j], f.d(r[key], hash[key], restoreScript), 16 <= key) {
            j++;
            switch(key) {
              case 16:
                /** @type {number} */
                a = 2;
                break;
              case 17:
                /** @type {number} */
                a = 3;
                break;
              case 18:
                /** @type {number} */
                a = 7;
                break;
              default:
                test("invalid code: " + key);
            }
            f.d(o[j], a, restoreScript);
          }
        }
        /** @type {Array} */
        a = [result, d];
        /** @type {Array} */
        idx = [idx, array];
        key = a[0];
        a = a[1];
        array = idx[0];
        result = idx[1];
        /** @type {number} */
        idx = 0;
        l = data.length;
        for (;idx < l;++idx) {
          if (i = data[idx], f.d(key[i], a[i], restoreScript), 256 < i) {
            f.d(data[++idx], data[++idx], restoreScript);
            d = data[++idx];
            f.d(array[d], result[d], restoreScript);
            f.d(data[++idx], data[++idx], restoreScript);
          } else {
            if (256 === i) {
              break;
            }
          }
        }
        this.a = f.finish();
        this.b = this.a.length;
        break;
      default:
        test("invalid compression type");
    }
    return this.a;
  };
  target = function($cookies, key, camel) {
    /**
     * @param {number} keepData
     * @return {?}
     */
    function remove(keepData) {
      switch(restoreScript) {
        case 3 === keepData:
          return[257, keepData - 3, 0];
        case 4 === keepData:
          return[258, keepData - 4, 0];
        case 5 === keepData:
          return[259, keepData - 5, 0];
        case 6 === keepData:
          return[260, keepData - 6, 0];
        case 7 === keepData:
          return[261, keepData - 7, 0];
        case 8 === keepData:
          return[262, keepData - 8, 0];
        case 9 === keepData:
          return[263, keepData - 9, 0];
        case 10 === keepData:
          return[264, keepData - 10, 0];
        case 12 >= keepData:
          return[265, keepData - 11, 1];
        case 14 >= keepData:
          return[266, keepData - 13, 1];
        case 16 >= keepData:
          return[267, keepData - 15, 1];
        case 18 >= keepData:
          return[268, keepData - 17, 1];
        case 22 >= keepData:
          return[269, keepData - 19, 2];
        case 26 >= keepData:
          return[270, keepData - 23, 2];
        case 30 >= keepData:
          return[271, keepData - 27, 2];
        case 34 >= keepData:
          return[272, keepData - 31, 2];
        case 42 >= keepData:
          return[273, keepData - 35, 3];
        case 50 >= keepData:
          return[274, keepData - 43, 3];
        case 58 >= keepData:
          return[275, keepData - 51, 3];
        case 66 >= keepData:
          return[276, keepData - 59, 3];
        case 82 >= keepData:
          return[277, keepData - 67, 4];
        case 98 >= keepData:
          return[278, keepData - 83, 4];
        case 114 >= keepData:
          return[279, keepData - 99, 4];
        case 130 >= keepData:
          return[280, keepData - 115, 4];
        case 162 >= keepData:
          return[281, keepData - 131, 5];
        case 194 >= keepData:
          return[282, keepData - 163, 5];
        case 226 >= keepData:
          return[283, keepData - 195, 5];
        case 257 >= keepData:
          return[284, keepData - 227, 5];
        case 258 === keepData:
          return[285, keepData - 258, 0];
        default:
          test("invalid length: " + keepData);
      }
    }
    /** @type {Array} */
    $cookies = [];
    /** @type {number} */
    key = 3;
    for (;258 >= key;key++) {
      camel = remove(key);
      /** @type {number} */
      $cookies[key] = camel[2] << 24 | camel[1] << 16 | camel[0];
    }
    return $cookies;
  }();
  var nodes = USE_TYPEDARRAY ? new Uint32Array(target) : target;
  /** @type {number} */
  var temp = 0;
  /** @type {number} */
  var fragment = 1;
  /** @type {number} */
  target = temp;
  /** @type {number} */
  node = fragment;
  /**
   * @return {?}
   */
  t.prototype.p = function() {
    for (;!this.s;) {
      var input = value(this, 3);
      if (input & 1) {
        /** @type {boolean} */
        this.s = restoreScript;
      }
      input >>>= 1;
      switch(input) {
        case 0:
          input = this.input;
          var ip = this.c;
          var output = this.a;
          var op = this.b;
          var preCopy = count;
          var len = count;
          var l = count;
          var olength = output.length;
          preCopy = count;
          /** @type {number} */
          this.e = this.g = 0;
          preCopy = input[ip++];
          if (preCopy === count) {
            test(Error("invalid uncompressed block header: LEN (first byte)"));
          }
          len = preCopy;
          preCopy = input[ip++];
          if (preCopy === count) {
            test(Error("invalid uncompressed block header: LEN (second byte)"));
          }
          len |= preCopy << 8;
          preCopy = input[ip++];
          if (preCopy === count) {
            test(Error("invalid uncompressed block header: NLEN (first byte)"));
          }
          l = preCopy;
          preCopy = input[ip++];
          if (preCopy === count) {
            test(Error("invalid uncompressed block header: NLEN (second byte)"));
          }
          l |= preCopy << 8;
          if (len === ~l) {
            test(Error("invalid uncompressed block header: length verify"));
          }
          if (ip + len > input.length) {
            test(Error("input buffer is broken"));
          }
          switch(this.n) {
            case temp:
              for (;op + len > output.length;) {
                if (preCopy = olength - op, len -= preCopy, USE_TYPEDARRAY) {
                  output.set(input.subarray(ip, ip + preCopy), op);
                  op += preCopy;
                  ip += preCopy;
                } else {
                  for (;preCopy--;) {
                    output[op++] = input[ip++];
                  }
                }
                this.b = op;
                output = this.f();
                op = this.b;
              }
              break;
            case fragment:
              for (;op + len > output.length;) {
                output = this.f({
                  v : 2
                });
              }
              break;
            default:
              test(Error("invalid inflate mode"));
          }
          if (USE_TYPEDARRAY) {
            output.set(input.subarray(ip, ip + len), op);
            op += len;
            ip += len;
          } else {
            for (;len--;) {
              output[op++] = input[ip++];
            }
          }
          this.c = ip;
          this.b = op;
          this.a = output;
          break;
        case 1:
          this.o(memory, oldconfig);
          break;
        case 2:
          i(this);
          break;
        default:
          test(Error("unknown BTYPE: " + input));
      }
    }
    return this.t();
  };
  /** @type {Array} */
  table = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  /** @type {(Array|Uint16Array)} */
  var codeSegments = USE_TYPEDARRAY ? new Uint16Array(table) : table;
  /** @type {Array} */
  table = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258];
  /** @type {(Array|Uint16Array)} */
  var wrap = USE_TYPEDARRAY ? new Uint16Array(table) : table;
  /** @type {Array} */
  table = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0];
  /** @type {(Array|Uint8Array)} */
  var url = USE_TYPEDARRAY ? new Uint8Array(table) : table;
  /** @type {Array} */
  table = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  /** @type {(Array|Uint16Array)} */
  var buffers = USE_TYPEDARRAY ? new Uint16Array(table) : table;
  /** @type {Array} */
  table = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
  /** @type {(Array|Uint8Array)} */
  var aResult = USE_TYPEDARRAY ? new Uint8Array(table) : table;
  table = new (USE_TYPEDARRAY ? Uint8Array : Array)(288);
  var _len;
  /** @type {number} */
  _i = 0;
  _len = table.length;
  for (;_i < _len;++_i) {
    /** @type {number} */
    table[_i] = 143 >= _i ? 8 : 255 >= _i ? 9 : 279 >= _i ? 7 : 8;
  }
  var memory = promote(table);
  table = new (USE_TYPEDARRAY ? Uint8Array : Array)(30);
  /** @type {number} */
  _i = 0;
  _len = table.length;
  for (;_i < _len;++_i) {
    /** @type {number} */
    table[_i] = 5;
  }
  var oldconfig = promote(table);
  /**
   * @param {Object} options
   * @param {Object} b
   * @return {undefined}
   */
  t.prototype.o = function(options, b) {
    var results = this.a;
    var i = this.b;
    /** @type {Object} */
    this.u = options;
    /** @type {number} */
    var length = results.length - 258;
    var result;
    var buffer;
    var j;
    for (;256 !== (result = process(this, options));) {
      if (256 > result) {
        if (i >= length) {
          this.b = i;
          results = this.f();
          i = this.b;
        }
        results[i++] = result;
      } else {
        result -= 257;
        j = wrap[result];
        if (0 < url[result]) {
          j += value(this, url[result]);
        }
        result = process(this, b);
        buffer = buffers[result];
        if (0 < aResult[result]) {
          buffer += value(this, aResult[result]);
        }
        if (i >= length) {
          this.b = i;
          results = this.f();
          i = this.b;
        }
        for (;j--;) {
          results[i] = results[i++ - buffer];
        }
      }
    }
    for (;8 <= this.e;) {
      this.e -= 8;
      this.c--;
    }
    this.b = i;
  };
  /**
   * @param {Object} data
   * @param {Object} b
   * @return {undefined}
   */
  t.prototype.I = function(data, b) {
    var object = this.a;
    var i = this.b;
    /** @type {Object} */
    this.u = data;
    var length = object.length;
    var result;
    var buffer;
    var j;
    for (;256 !== (result = process(this, data));) {
      if (256 > result) {
        if (i >= length) {
          object = this.f();
          length = object.length;
        }
        object[i++] = result;
      } else {
        result -= 257;
        j = wrap[result];
        if (0 < url[result]) {
          j += value(this, url[result]);
        }
        result = process(this, b);
        buffer = buffers[result];
        if (0 < aResult[result]) {
          buffer += value(this, aResult[result]);
        }
        if (i + j > length) {
          object = this.f();
          length = object.length;
        }
        for (;j--;) {
          object[i] = object[i++ - buffer];
        }
      }
    }
    for (;8 <= this.e;) {
      this.e -= 8;
      this.c--;
    }
    this.b = i;
  };
  /**
   * @return {?}
   */
  t.prototype.f = function() {
    var result = new (USE_TYPEDARRAY ? Uint8Array : Array)(this.b - 32768);
    /** @type {number} */
    var i = this.b - 32768;
    var j;
    var n;
    var a = this.a;
    if (USE_TYPEDARRAY) {
      result.set(a.subarray(32768, result.length));
    } else {
      /** @type {number} */
      j = 0;
      n = result.length;
      for (;j < n;++j) {
        result[j] = a[j + 32768];
      }
    }
    if (this.l.push(result), this.q += result.length, USE_TYPEDARRAY) {
      a.set(a.subarray(i, i + 32768));
    } else {
      /** @type {number} */
      j = 0;
      for (;32768 > j;++j) {
        a[j] = a[i + j];
      }
    }
    return this.b = 32768, a;
  };
  /**
   * @param {Object} token
   * @return {?}
   */
  t.prototype.J = function(token) {
    var array;
    /** @type {number} */
    var value = this.input.length / this.c + 1 | 0;
    var result;
    var bufferSize;
    var fromIndex;
    var str = this.input;
    var arr = this.a;
    return token && ("number" === typeof token.v && (value = token.v), "number" === typeof token.F && (value += token.F)), 2 > value ? (result = (str.length - this.c) / this.u[2], fromIndex = result / 2 * 258 | 0, bufferSize = fromIndex < arr.length ? arr.length + fromIndex : arr.length << 1) : bufferSize = arr.length * value, USE_TYPEDARRAY ? (array = new Uint8Array(bufferSize), array.set(arr)) : array = arr, this.a = array;
  };
  /**
   * @return {?}
   */
  t.prototype.t = function() {
    /** @type {number} */
    var index = 0;
    var tmp = this.a;
    var codeSegments = this.l;
    var touchList;
    var buffer = new (USE_TYPEDARRAY ? Uint8Array : Array)(this.q + (this.b - 32768));
    var i;
    var valsLength;
    var j;
    var subLn;
    if (0 === codeSegments.length) {
      return USE_TYPEDARRAY ? this.a.subarray(32768, this.b) : this.a.slice(32768, this.b);
    }
    /** @type {number} */
    i = 0;
    valsLength = codeSegments.length;
    for (;i < valsLength;++i) {
      touchList = codeSegments[i];
      /** @type {number} */
      j = 0;
      subLn = touchList.length;
      for (;j < subLn;++j) {
        buffer[index++] = touchList[j];
      }
    }
    /** @type {number} */
    i = 32768;
    valsLength = this.b;
    for (;i < valsLength;++i) {
      buffer[index++] = tmp[i];
    }
    return this.l = [], this.buffer = buffer;
  };
  /**
   * @return {?}
   */
  t.prototype.H = function() {
    var buffer;
    var op = this.b;
    return USE_TYPEDARRAY ? this.B ? (buffer = new Uint8Array(op), buffer.set(this.a.subarray(0, op))) : buffer = this.a.subarray(0, op) : (this.a.length > op && (this.a.length = op), buffer = this.a), this.buffer = buffer;
  };
  /**
   * @return {?}
   */
  init.prototype.p = function() {
    var str = this.input;
    var pdataCur;
    var next;
    return pdataCur = this.A.p(), this.c = this.A.c, this.M && (next = (str[this.c++] << 24 | str[this.c++] << 16 | str[this.c++] << 8 | str[this.c++]) >>> 0, next !== indexOf(pdataCur) && test(Error("invalid adler-32 checksum"))), pdataCur;
  };
  /** @type {number} */
  var step = 8;
  var x = obj;
  /**
   * @return {?}
   */
  Sprite.prototype.j = function() {
    var n;
    var oR;
    var e;
    var buf;
    /** @type {number} */
    var i = 0;
    buf = this.a;
    /** @type {number} */
    n = step;
    switch(n) {
      case step:
        /** @type {number} */
        oR = Math.LOG2E * Math.log(32768) - 8;
        break;
      default:
        test(Error("invalid compression method"));
    }
    /** @type {number} */
    oR = oR << 4 | n;
    /** @type {number} */
    buf[i++] = oR;
    switch(n) {
      case step:
        switch(this.h) {
          case x.NONE:
            /** @type {number} */
            e = 0;
            break;
          case x.r:
            /** @type {number} */
            e = 1;
            break;
          case x.k:
            /** @type {number} */
            e = 2;
            break;
          default:
            test(Error("unsupported compression type"));
        }
        break;
      default:
        test(Error("invalid compression method"));
    }
    return n = e << 6 | 0, buf[i++] = n | 31 - (256 * oR + n) % 31, n = indexOf(this.input), this.z.b = i, buf = this.z.j(), i = buf.length, USE_TYPEDARRAY && (buf = new Uint8Array(buf.buffer), buf.length <= i + 4 && (this.a = new Uint8Array(buf.length + 4), this.a.set(buf), buf = this.a), buf = buf.subarray(0, i + 4)), buf[i++] = n >> 24 & 255, buf[i++] = n >> 16 & 255, buf[i++] = n >> 8 & 255, buf[i++] = n & 255, buf;
  };
  run("Zlib.Inflate", init);
  run("Zlib.Inflate.prototype.decompress", init.prototype.p);
  destroy("Zlib.Inflate.BufferType", {
    ADAPTIVE : node,
    BLOCK : target
  });
  run("Zlib.Deflate", Sprite);
  run("Zlib.Deflate.compress", function(tx, src) {
    return(new Sprite(tx, src)).j();
  });
  run("Zlib.Deflate.prototype.compress", Sprite.prototype.j);
  destroy("Zlib.Deflate.CompressionType", {
    NONE : x.NONE,
    FIXED : x.r,
    DYNAMIC : x.k
  });
}).call(this);
