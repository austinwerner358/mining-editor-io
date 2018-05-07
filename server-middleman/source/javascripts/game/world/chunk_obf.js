/**
 * @return {undefined}
 */
function Chunk() {
  /** @type {Array} */
  this.section = [];
  /** @type {number} */
  this.isInit1 = this.isInit = -1;
  /** @type {boolean} */
  this.changed = false;
  /** @type {Array} */
  this.ivbo = [];
  /** @type {Array} */
  this.vbo = [];
  /** @type {boolean} */
  this.needsUpdate = false;
  /** @type {number} */
  this.timestamp = (new Date).getTime();
  /** @type {number} */
  this.mxaVal = 0;
}
/** @type {Array} */
Chunk.stairsData = [];
/** @type {string} */
Chunk.stairsData["20xx2"] = "0001";
/** @type {string} */
Chunk.stairsData["21x2x"] = "0010";
/** @type {string} */
Chunk.stairsData["11x2x"] = "0010";
/** @type {string} */
Chunk.stairsData["1x13x"] = "1000";
/** @type {string} */
Chunk.stairsData["3x0x3"] = "0100";
/** @type {string} */
Chunk.stairsData["3x13x"] = "1000";
/** @type {string} */
Chunk.stairsData["00xx2"] = "0001";
/** @type {string} */
Chunk.stairsData["0x0x3"] = "0100";
/** @type {string} */
Chunk.stairsData["31xx3"] = "1110";
/** @type {string} */
Chunk.stairsData["30x3x"] = "1101";
/** @type {string} */
Chunk.stairsData["00x3x"] = "1101";
/** @type {string} */
Chunk.stairsData["0x02x"] = "0111";
/** @type {string} */
Chunk.stairsData["2x1x2"] = "1011";
/** @type {string} */
Chunk.stairsData["2x02x"] = "0111";
/** @type {string} */
Chunk.stairsData["11xx3"] = "1110";
/** @type {string} */
Chunk.stairsData["1x1x2"] = "1011";
/** @type {string} */
Chunk.stairsData["64xx6"] = "0001";
/** @type {string} */
Chunk.stairsData["65x6x"] = "0010";
/** @type {string} */
Chunk.stairsData["55x6x"] = "0010";
/** @type {string} */
Chunk.stairsData["5x57x"] = "1000";
/** @type {string} */
Chunk.stairsData["7x4x7"] = "0100";
/** @type {string} */
Chunk.stairsData["7x57x"] = "1000";
/** @type {string} */
Chunk.stairsData["44xx6"] = "0001";
/** @type {string} */
Chunk.stairsData["4x4x7"] = "0100";
/** @type {string} */
Chunk.stairsData["75xx7"] = "1110";
/** @type {string} */
Chunk.stairsData["74x7x"] = "1101";
/** @type {string} */
Chunk.stairsData["44x7x"] = "1101";
/** @type {string} */
Chunk.stairsData["4x46x"] = "0111";
/** @type {string} */
Chunk.stairsData["6x5x6"] = "1011";
/** @type {string} */
Chunk.stairsData["6x46x"] = "0111";
/** @type {string} */
Chunk.stairsData["55xx7"] = "1110";
/** @type {string} */
Chunk.stairsData["5x5x6"] = "1011";
/** @type {Float32Array} */
Chunk.cacheSlight = new Float32Array(83592);
/** @type {Float32Array} */
Chunk.cacheBlight = new Float32Array(83592);
/** @type {Float32Array} */
Chunk.cacheData = new Float32Array(83592);
/** @type {Float32Array} */
Chunk.cacheId = new Float32Array(83592);
/** @type {Float32Array} */
Chunk.cacheBlock = new Float32Array(5832);
/** @type {Uint8Array} */
Chunk.cacheHeightMap9 = new Uint8Array(2304);
/** @type {Uint8Array} */
Chunk.cacheHeightMap9hMax = new Uint8Array(2304);
/** @type {Uint8Array} */
Chunk.cacheSlight9 = new Uint8Array(594432);
/** @type {Uint8Array} */
Chunk.cacheBlight9 = new Uint8Array(594432);
/** @type {Int32Array} */
Chunk.cacheId9 = new Int32Array(594432);
/**
 * @return {undefined}
 */
Chunk.prototype.initHeightMap = function() {
  /** @type {number} */
  var i = 0;
  /** @type {Uint32Array} */
  this.heightMap = new Uint32Array(256);
  /** @type {number} */
  var f = this.mxaVal = 0;
  for (;16 > f;f++) {
    /** @type {number} */
    var y = 0;
    for (;16 > y;y++) {
      /** @type {number} */
      var count = 255;
      /** @type {number} */
      var countMinusOne = 15;
      for (;0 < count;count--, countMinusOne--) {
        if (0 === (count - 15) % 16) {
          var chunk = this.section[(count - 15) / 16];
          /** @type {number} */
          countMinusOne = 15;
          if (void 0 === chunk) {
            count -= 15;
            /** @type {number} */
            countMinusOne = 16;
            continue;
          }
        }
        if (i = 256 * countMinusOne + 16 * f + y, 0 < chunk.blocks[i] && (count > this.mxaVal && (this.mxaVal = count)), 1 !== block.lightTransmission[chunk.blocks[i]]) {
          /** @type {number} */
          this.heightMap[16 * f + y] = count + 1;
          break;
        }
      }
    }
  }
};
/**
 * @param {number} opt_attributes
 * @param {boolean} dataAndEvents
 * @return {?}
 */
Chunk.prototype.refreshLight = function(opt_attributes, dataAndEvents) {
  /** @type {number} */
  var index = 0;
  /** @type {number} */
  var b = 0;
  /** @type {number} */
  var i = 0;
  /** @type {number} */
  var k = 0;
  /** @type {number} */
  var j = 0;
  /** @type {number} */
  var c = 0;
  /** @type {number} */
  var offset = k = index = 0;
  /** @type {number} */
  var from = (new Date).getTime();
  if (dataAndEvents = dataAndEvents || false, this.initHeightMap(), !this.getCacheL9()) {
    return false;
  }
  b = block.lightSource;
  var keys = block.lightTransmission;
  /** @type {Uint8Array} */
  var data = Chunk.cacheSlight9;
  /** @type {Uint8Array} */
  var a = Chunk.cacheBlight9;
  /** @type {Int32Array} */
  var array = Chunk.cacheId9;
  /** @type {number} */
  var tag = 256;
  /** @type {number} */
  var r = index = 0;
  /** @type {number} */
  var value = 0;
  /** @type {number} */
  var to = 0;
  for (;48 > to;to++) {
    /** @type {number} */
    var size = 0;
    for (;48 > size;size++) {
      value = Chunk.cacheHeightMap9[48 * to + size];
      if (value > index) {
        index = value;
      }
      if (value < tag) {
        tag = value;
      }
      /** @type {number} */
      r = 0;
      /** @type {number} */
      var name = -1;
      for (;1 >= name;name++) {
        /** @type {number} */
        offset = -1;
        for (;1 >= offset;offset++) {
          if (!(0 > to + name)) {
            if (!(0 > size + offset)) {
              if (!(47 < to + name)) {
                if (!(47 < size + offset)) {
                  value = Chunk.cacheHeightMap9[48 * (to + name) + (size + offset)];
                  if (value > r) {
                    r = value;
                  }
                }
              }
            }
          }
        }
      }
      Chunk.cacheHeightMap9hMax[48 * to + size] = r + 1;
    }
  }
  /** @type {number} */
  to = 2;
  for (;46 > to;to++) {
    /** @type {number} */
    size = 2;
    for (;46 > size;size++) {
      value = Chunk.cacheHeightMap9hMax[48 * to + size];
      for (;value >= Chunk.cacheHeightMap9[48 * to + size];value--) {
        /** @type {number} */
        offset = 2304 * value + 48 * to + size;
        /** @type {number} */
        data[offset] = 15;
      }
      /** @type {number} */
      r = 15;
      for (;0 <= value;value--) {
        /** @type {number} */
        offset = 2304 * value + 48 * to + size;
        r *= keys[array[offset]];
        /** @type {number} */
        data[offset] = r;
        if (0 < r) {
          if (value < tag) {
            tag = value;
          }
        }
      }
    }
  }
  /** @type {number} */
  to = 0;
  for (;48 > to;to++) {
    /** @type {number} */
    value = 0;
    for (;255 > value;value++) {
      if (offset = 2304 * value + 48 * to + 1, 0 < data[offset] && value < tag) {
        /** @type {number} */
        tag = value;
        break;
      }
    }
  }
  /** @type {number} */
  to = 0;
  for (;48 > to;to++) {
    /** @type {number} */
    value = 0;
    for (;255 > value;value++) {
      if (offset = 2304 * value + 48 * to + 46, 0 < data[offset] && value < tag) {
        /** @type {number} */
        tag = value;
        break;
      }
    }
  }
  /** @type {number} */
  size = 0;
  for (;48 > size;size++) {
    /** @type {number} */
    value = 0;
    for (;255 > value;value++) {
      if (offset = 2304 * value + 48 + size, 0 < data[offset] && value < tag) {
        /** @type {number} */
        tag = value;
        break;
      }
    }
  }
  /** @type {number} */
  size = 0;
  for (;48 > size;size++) {
    /** @type {number} */
    value = 0;
    for (;255 > value;value++) {
      if (offset = 2304 * value + 2208 + size, 0 < data[offset] && value < tag) {
        /** @type {number} */
        tag = value;
        break;
      }
    }
  }
  tag--;
  if (1 > tag) {
    /** @type {number} */
    tag = 1;
  }
  if (-1 === opt_attributes) {
    /** @type {number} */
    name = 0;
    /** @type {number} */
    offset = 256;
  } else {
    /** @type {number} */
    name = opt_attributes - 16;
    if (0 > name) {
      /** @type {number} */
      name = 0;
    }
    offset = opt_attributes + 16;
    if (256 < offset) {
      /** @type {number} */
      offset = 256;
    }
  }
  /** @type {number} */
  r = 255;
  /** @type {number} */
  i = 0;
  /** @type {number} */
  to = 2;
  for (;46 > to;to++) {
    /** @type {number} */
    size = 2;
    for (;46 > size;size++) {
      /** @type {number} */
      value = name + 1;
      for (;value < offset - 1;value++) {
        /** @type {number} */
        index = 2304 * value + 48 * to + size;
        a[index] = b[array[index]];
        if (0 < a[index]) {
          if (value < r) {
            /** @type {number} */
            r = value;
          }
        }
        if (0 < a[index]) {
          if (value > i) {
            /** @type {number} */
            i = value;
          }
        }
      }
    }
  }
  if (value = false, -1 === opt_attributes) {
    /** @type {number} */
    name = r - 16;
    if (0 > name) {
      /** @type {number} */
      name = 0;
    }
    /** @type {number} */
    offset = i + 16;
    if (256 < offset) {
      /** @type {number} */
      offset = 256;
    }
    /** @type {boolean} */
    value = true;
  } else {
    /** @type {number} */
    index = 2304 * name;
    for (;index < 2304 * offset;index++) {
      if (0 < a[index]) {
        /** @type {boolean} */
        value = true;
        break;
      }
    }
  }
  if (to = (new Date).getTime(), console.log("czas L0 " + (to - from)), from = (new Date).getTime(), value) {
    /** @type {number} */
    var x = 0;
    for (;14 > x;x++) {
      /** @type {number} */
      to = 1;
      for (;47 > to;to++) {
        /** @type {number} */
        size = 1;
        for (;47 > size;size++) {
          /** @type {(number|undefined)} */
          value = name;
          for (;value < offset;value++) {
            /** @type {number} */
            index = 2304 * value + 48 * to + size;
            /** @type {number} */
            r = a[index] - 1;
            if (!(1 > r)) {
              /** @type {number} */
              b = index + 48;
              /** @type {number} */
              i = index - 48;
              /** @type {number} */
              k = index - 1;
              /** @type {number} */
              j = index + 1;
              /** @type {number} */
              c = index + 2304;
              index -= 2304;
              if (r * keys[array[index]] > a[index]) {
                /** @type {number} */
                a[index] = r * keys[array[index]];
              }
              if (r * keys[array[c]] > a[c]) {
                /** @type {number} */
                a[c] = r * keys[array[c]];
              }
              if (r * keys[array[b]] > a[b]) {
                /** @type {number} */
                a[b] = r * keys[array[b]];
              }
              if (r * keys[array[i]] > a[i]) {
                /** @type {number} */
                a[i] = r * keys[array[i]];
              }
              if (r * keys[array[k]] > a[k]) {
                /** @type {number} */
                a[k] = r * keys[array[k]];
              }
              if (r * keys[array[j]] > a[j]) {
                /** @type {number} */
                a[j] = r * keys[array[j]];
              }
            }
          }
        }
      }
    }
  }
  /** @type {number} */
  to = (new Date).getTime();
  console.log("czas L1 " + (to - from));
  /** @type {number} */
  from = (new Date).getTime();
  /** @type {number} */
  x = 0;
  for (;14 > x;x++) {
    /** @type {number} */
    to = 1;
    for (;47 > to;to++) {
      /** @type {number} */
      size = 1;
      for (;47 > size;size++) {
        value = tag;
        for (;value < Chunk.cacheHeightMap9hMax[48 * to + size];value++) {
          /** @type {number} */
          index = 2304 * value + 48 * to + size;
          /** @type {number} */
          r = data[index] - 1;
          if (!(1 > r)) {
            /** @type {number} */
            b = index + 48;
            /** @type {number} */
            i = index - 48;
            /** @type {number} */
            k = index - 1;
            /** @type {number} */
            j = index + 1;
            /** @type {number} */
            c = index + 2304;
            index -= 2304;
            if (r * keys[array[index]] > data[index]) {
              /** @type {number} */
              data[index] = r * keys[array[index]];
            }
            if (r * keys[array[c]] > data[c]) {
              /** @type {number} */
              data[c] = r * keys[array[c]];
            }
            if (r * keys[array[b]] > data[b]) {
              /** @type {number} */
              data[b] = r * keys[array[b]];
            }
            if (r * keys[array[i]] > data[i]) {
              /** @type {number} */
              data[i] = r * keys[array[i]];
            }
            if (r * keys[array[k]] > data[k]) {
              /** @type {number} */
              data[k] = r * keys[array[k]];
            }
            if (r * keys[array[j]] > data[j]) {
              /** @type {number} */
              data[j] = r * keys[array[j]];
            }
          }
        }
      }
    }
  }
  /** @type {number} */
  to = (new Date).getTime();
  console.log("czas L2 " + (to - from));
  /** @type {number} */
  from = (new Date).getTime();
  /** @type {Array} */
  keys = [];
  /** @type {number} */
  name = -1;
  for (;1 >= name;name++) {
    /** @type {number} */
    offset = -1;
    for (;1 >= offset;offset++) {
      if (keys[3 * (name + 1) + offset + 1] = mcWorld.requestChunk(this.xPos + name, this.zPos + offset), -2 === keys[3 * (name + 1) + offset + 1]) {
        return false;
      }
    }
  }
  /** @type {Array} */
  array = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  /** @type {Array} */
  index = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  /** @type {Array} */
  r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  if (dataAndEvents) {
    /** @type {Array} */
    array = [0, 1, 0, 1, 1, 1, 0, 1, 0];
  }
  /** @type {number} */
  b = 0;
  for (;2 >= b;b++) {
    /** @type {number} */
    i = 0;
    for (;2 >= i;i++) {
      if ((!dataAndEvents || (1 === b || 1 === i)) && (tag = keys[3 * b + i], void 0 !== tag && -1 !== tag)) {
        /** @type {number} */
        value = name = 0;
        for (;256 > name;name++, value++) {
          if (0 === name % 16) {
            var rs = tag.section[name / 16];
            /** @type {number} */
            value = 0;
            if (void 0 === rs) {
              name += 15;
              /** @type {number} */
              value = -1;
              continue;
            }
            if (!dataAndEvents) {
              index[name / 16] = jenkins_hash(rs.skyLight);
              r[name / 16] = jenkins_hash(rs.blockLight);
            }
          }
          /** @type {number} */
          to = 0;
          for (;16 > to;to++) {
            /** @type {number} */
            size = 0;
            for (;16 > size;size += 2) {
              /** @type {number} */
              k = (256 * value + 16 * to + size) / 2;
              /** @type {number} */
              offset = 2304 * name + 48 * (16 * i + to) + (16 * b + size);
              rs.skyLight[k] = data[offset] + (data[offset + 1] << 4);
              rs.blockLight[k] = a[offset] + (a[offset + 1] << 4);
            }
          }
        }
        if (value = 0, !dataAndEvents) {
          /** @type {number} */
          name = 0;
          for (;16 > name;name++) {
            if (void 0 !== tag.section[name]) {
              if (value = jenkins_hash(tag.section[name].skyLight), index[name] !== value) {
                /** @type {number} */
                array[3 * b + i] = 1;
                break;
              }
              if (value = jenkins_hash(tag.section[name].blockLight), r[name] !== value) {
                /** @type {number} */
                array[3 * b + i] = 1;
                break;
              }
            }
          }
        }
      }
    }
  }
  return to = (new Date).getTime(), console.log("czas L3 " + (to - from)), array;
};
/**
 * @param {number} str
 * @param {number} regex
 * @param {number} i
 * @return {?}
 */
Chunk.prototype.getBiomeColor1 = function(str, regex, i) {
  var t;
  var p;
  var tmp;
  var r;
  return r = this.cacheBiomes[18 * (regex + 0) + str + 0], t = biomes[r].colorR[i], p = biomes[r].colorG[i], tmp = biomes[r].colorB[i], r = this.cacheBiomes[18 * (regex + 0) + str + 1], t += biomes[r].colorR[i], p += biomes[r].colorG[i], tmp += biomes[r].colorB[i], r = this.cacheBiomes[18 * (regex + 1) + str + 0], t += biomes[r].colorR[i], p += biomes[r].colorG[i], tmp += biomes[r].colorB[i], r = this.cacheBiomes[18 * (regex + 1) + str + 1], t += biomes[r].colorR[i], p += biomes[r].colorG[i], tmp +=
  biomes[r].colorB[i], t = 65536 * Math.floor(t / 4) + 256 * Math.floor(p / 4) + Math.floor(tmp / 4);
};
/**
 * @param {number} str
 * @param {number} regex
 * @param {number} i
 * @return {?}
 */
Chunk.prototype.getBiomeColor2 = function(str, regex, i) {
  var t;
  var p;
  var tmp;
  var r;
  return r = this.cacheBiomes[18 * (regex + 0) + str + 2], t = biomes[r].colorR[i], p = biomes[r].colorG[i], tmp = biomes[r].colorB[i], r = this.cacheBiomes[18 * (regex + 0) + str + 1], t += biomes[r].colorR[i], p += biomes[r].colorG[i], tmp += biomes[r].colorB[i], r = this.cacheBiomes[18 * (regex + 1) + str + 2], t += biomes[r].colorR[i], p += biomes[r].colorG[i], tmp += biomes[r].colorB[i], r = this.cacheBiomes[18 * (regex + 1) + str + 1], t += biomes[r].colorR[i], p += biomes[r].colorG[i], tmp +=
  biomes[r].colorB[i], t = 65536 * Math.floor(t / 4) + 256 * Math.floor(p / 4) + Math.floor(tmp / 4);
};
/**
 * @param {number} str
 * @param {number} regex
 * @param {number} i
 * @return {?}
 */
Chunk.prototype.getBiomeColor3 = function(str, regex, i) {
  var t;
  var p;
  var tmp;
  var r;
  return r = this.cacheBiomes[18 * (regex + 2) + str + 2], t = biomes[r].colorR[i], p = biomes[r].colorG[i], tmp = biomes[r].colorB[i], r = this.cacheBiomes[18 * (regex + 2) + str + 1], t += biomes[r].colorR[i], p += biomes[r].colorG[i], tmp += biomes[r].colorB[i], r = this.cacheBiomes[18 * (regex + 1) + str + 2], t += biomes[r].colorR[i], p += biomes[r].colorG[i], tmp += biomes[r].colorB[i], r = this.cacheBiomes[18 * (regex + 1) + str + 1], t += biomes[r].colorR[i], p += biomes[r].colorG[i], tmp +=
  biomes[r].colorB[i], t = 65536 * Math.floor(t / 4) + 256 * Math.floor(p / 4) + Math.floor(tmp / 4);
};
/**
 * @param {number} str
 * @param {number} regex
 * @param {number} i
 * @return {?}
 */
Chunk.prototype.getBiomeColor4 = function(str, regex, i) {
  var t;
  var p;
  var tmp;
  var r;
  return r = this.cacheBiomes[18 * (regex + 2) + str + 0], t = biomes[r].colorR[i], p = biomes[r].colorG[i], tmp = biomes[r].colorB[i], r = this.cacheBiomes[18 * (regex + 2) + str + 1], t += biomes[r].colorR[i], p += biomes[r].colorG[i], tmp += biomes[r].colorB[i], r = this.cacheBiomes[18 * (regex + 1) + str + 0], t += biomes[r].colorR[i], p += biomes[r].colorG[i], tmp += biomes[r].colorB[i], r = this.cacheBiomes[18 * (regex + 1) + str + 1], t += biomes[r].colorR[i], p += biomes[r].colorG[i], tmp +=
  biomes[r].colorB[i], t = 65536 * Math.floor(t / 4) + 256 * Math.floor(p / 4) + Math.floor(tmp / 4);
};
/**
 * @param {number} str
 * @param {number} regex
 * @param {number} lab
 * @return {?}
 */
Chunk.prototype.getBiomeColor = function(str, regex, lab) {
  var sectionLength;
  var unsigned;
  var ticks;
  var unlock;
  return unlock = this.cacheBiomes[18 * (regex + 2) + str + 2], sectionLength = biomes[unlock].colorR[lab], unsigned = biomes[unlock].colorG[lab], ticks = biomes[unlock].colorB[lab], unlock = this.cacheBiomes[18 * (regex + 0) + str + 0], sectionLength += biomes[unlock].colorR[lab], unsigned += biomes[unlock].colorG[lab], ticks += biomes[unlock].colorB[lab], unlock = this.cacheBiomes[18 * (regex + 2) + str + 0], sectionLength += biomes[unlock].colorR[lab], unsigned += biomes[unlock].colorG[lab], ticks +=
  biomes[unlock].colorB[lab], unlock = this.cacheBiomes[18 * (regex + 0) + str + 2], sectionLength += biomes[unlock].colorR[lab], unsigned += biomes[unlock].colorG[lab], ticks += biomes[unlock].colorB[lab], unlock = this.cacheBiomes[18 * (regex + 1) + str + 2], sectionLength += biomes[unlock].colorR[lab], unsigned += biomes[unlock].colorG[lab], ticks += biomes[unlock].colorB[lab], unlock = this.cacheBiomes[18 * (regex + 1) + str + 0], sectionLength += biomes[unlock].colorR[lab], unsigned += biomes[unlock].colorG[lab],
  ticks += biomes[unlock].colorB[lab], unlock = this.cacheBiomes[18 * (regex + 2) + str + 1], sectionLength += biomes[unlock].colorR[lab], unsigned += biomes[unlock].colorG[lab], ticks += biomes[unlock].colorB[lab], unlock = this.cacheBiomes[18 * (regex + 0) + str + 1], sectionLength += biomes[unlock].colorR[lab], unsigned += biomes[unlock].colorG[lab], ticks += biomes[unlock].colorB[lab], sectionLength = 65536 * Math.floor(sectionLength / 8) + 256 * Math.floor(unsigned / 8) + Math.floor(ticks /
  8);
};
/**
 * @param {Array} match
 * @return {?}
 */
Chunk.prototype.getNearestPosition = function(match) {
  if (-1 === this.isInit || !this.getCache(0, 256)) {
    return false;
  }
  /** @type {Float32Array} */
  var items = Chunk.cacheId;
  /** @type {Array} */
  match = [Math.floor(match[0]), Math.floor(match[1]), Math.floor(match[2])];
  /** @type {number} */
  var i = 0;
  /** @type {number} */
  var j = 0;
  /** @type {Array} */
  var result = Array(9);
  /** @type {number} */
  var line = 0;
  /** @type {number} */
  var marker = -1;
  for (;2 > marker;marker++) {
    /** @type {number} */
    var separator = -1;
    for (;2 > separator;separator++) {
      line = match[1];
      /** @type {number} */
      result[3 * (marker + 1) + (separator + 1)] = 256;
      for (;256 > line;line++) {
        if (i = 324 * (line + 1) + 18 * (match[2] + 1 + marker) + (match[0] + 1 + separator), j = 324 * (line + 2) + 18 * (match[2] + 1 + marker) + (match[0] + 1 + separator), void 0 === this.section[Math.floor(line / 16)] || -1 === items[324 * (line + 2) + 19]) {
          result[3 * (marker + 1) + (separator + 1)] = line;
          break;
        }
        if (0 === block[items[i]].type && 0 === block[items[j]].type) {
          result[3 * (marker + 1) + (separator + 1)] = line;
          break;
        }
      }
    }
  }
  /** @type {Array} */
  items = [match[0], result[4], match[2]];
  /** @type {number} */
  marker = -1;
  for (;2 > marker;marker++) {
    /** @type {number} */
    separator = -1;
    for (;2 > separator;separator++) {
      if (result[3 * (marker + 1) + (separator + 1)] < items[1] - 1) {
        items[0] = match[0] + separator;
        items[1] = result[3 * (marker + 1) + (separator + 1)];
        items[2] = match[2] + marker;
      }
    }
  }
  return items;
};
/**
 * @param {number} name
 * @param {number} t
 * @param {Array} thing
 * @return {?}
 */
Chunk.prototype.getBlock = function(name, t, thing) {
  if (-1 === this.isInit) {
    return{
      id : 0,
      data : 0
    };
  }
  /** @type {number} */
  var l = Math.floor(t / 16);
  return name = 256 * (t - 16 * l) + 16 * thing + name, void 0 === this.section[l] ? {
    id : 0,
    data : 0
  } : (t = this.section[l].blocks[name], thing = 0, thing = 0 === name % 2 ? this.section[l].data[name / 2] & 15 : (this.section[l].data[name / 2 - 0.5] & 240) >> 4, {
    id : t,
    data : thing
  });
};
/**
 * @param {Object} data
 * @return {?}
 */
Chunk.prototype.getNBT = function(data) {
  data = {
    offset : 0
  };
  /** @type {Uint8Array} */
  data.data = new Uint8Array(5E5);
  NBT.write10Tag(data, "");
  NBT.write10Tag(data, "Level");
  NBT.write3Tag(data, "xPos", this.xPos);
  NBT.write3Tag(data, "zPos", this.zPos);
  NBT.write7Tag(data, "Biomes", this.biomes);
  NBT.write9Tag(data, "Sections", 10, this.section.length);
  /** @type {number} */
  var l = 0;
  for (;l < this.section.length;l++) {
    NBT.write1Tag(data, "Y", this.section[l].y);
    NBT.write7Tag(data, "Data", this.section[l].data);
    NBT.write7Tag(data, "SkyLight", this.section[l].skyLight);
    NBT.write7Tag(data, "BlockLight", this.section[l].blockLight);
    NBT.write7Tag(data, "Blocks", this.section[l].blocks);
    NBT.write0Tag(data);
  }
  return NBT.write0Tag(data), NBT.write0Tag(data), new Uint8Array(data.data.buffer, 0, data.offset);
};
/**
 * @param {number} name
 * @return {undefined}
 */
Chunk.prototype.newSection = function(name) {
  this.section[name] = {};
  /** @type {number} */
  this.section[name].y = name;
  /** @type {Uint32Array} */
  this.section[name].blocks = new Uint32Array(4096);
  /** @type {Uint32Array} */
  this.section[name].skyLight = new Uint32Array(2048);
  /** @type {number} */
  var unlock = 0;
  for (;2048 > unlock;unlock++) {
    /** @type {number} */
    this.section[name].skyLight[unlock] = 255;
  }
  /** @type {Uint32Array} */
  this.section[name].blockLight = new Uint32Array(2048);
  /** @type {Uint32Array} */
  this.section[name].data = new Uint32Array(2048);
  /** @type {Uint32Array} */
  this.section[name].add = new Uint32Array(2048);
};
/**
 * @param {number} optionsString
 * @param {number} m1
 * @param {number} dataAndEvents
 * @return {undefined}
 */
Chunk.prototype.changeAdd = function(optionsString, m1, dataAndEvents) {
  if (-1 !== this.isInit) {
    /** @type {number} */
    var klass = Math.floor(m1 / 16);
    optionsString = 256 * (m1 - 16 * klass) + 16 * dataAndEvents + optionsString;
    /** @type {number} */
    m1 = 0;
    /** @type {number} */
    dataAndEvents = optionsString % 2;
    if (void 0 === this.section[klass]) {
      this.newSection(klass);
    }
    /** @type {number} */
    m1 = 0 === dataAndEvents ? this.section[klass].add[optionsString / 2] & 15 : this.section[klass].add[optionsString / 2 - 0.5] >> 4 & 15;
    m1++;
    if (10 === m1) {
      /** @type {number} */
      m1 = 0;
    }
    if (0 === dataAndEvents) {
      /** @type {number} */
      this.section[klass].add[optionsString / 2] = (this.section[klass].add[optionsString / 2] & 240) + m1;
    } else {
      /** @type {number} */
      this.section[klass].add[optionsString / 2 - 0.5] = (this.section[klass].add[optionsString / 2 - 0.5] & 15) + (m1 << 4);
    }
    this.init2(0);
    this.init2(1);
  }
};
/**
 * @param {number} _
 * @param {number} k
 * @param {number} deepDataAndEvents
 * @param {number} i
 * @param {number} dataAndEvents
 * @return {undefined}
 */
Chunk.prototype.updateBlock = function(_, k, deepDataAndEvents, i, dataAndEvents) {
  if (-1 !== this.isInit) {
    /** @type {number} */
    var key = (new Date).getTime();
    /** @type {boolean} */
    this.changed = true;
    /** @type {number} */
    key = Math.floor(k / 16);
    var name = 256 * (k - 16 * key) + 16 * deepDataAndEvents + _;
    if (void 0 === this.section[key]) {
      this.newSection(key);
    }
    /** @type {number} */
    this.section[key].blocks[name] = i;
    /** @type {number} */
    var p = name % 2;
    if (0 === p) {
      this.section[key].data[name / 2] = (this.section[key].data[name / 2] & 240) + dataAndEvents;
      this.section[key].add[name / 2] &= 240;
    } else {
      /** @type {number} */
      this.section[key].data[name / 2 - 0.5] = (this.section[key].data[name / 2 - 0.5] & 15) + (dataAndEvents << 4);
      this.section[key].add[name / 2 - 0.5] &= 15;
    }
    /** @type {number} */
    var b = 0;
    if (0 === block[i].type || (2 === block[i].type || (3 === block[i].type || 4 === block[i].type))) {
      b = this.getSunLightValue(_, k + 1, deepDataAndEvents);
      /** @type {number} */
      var v = 0;
      /** @type {number} */
      i = -1;
      for (;1 >= i;i++) {
        /** @type {number} */
        dataAndEvents = -1;
        for (;1 >= dataAndEvents;dataAndEvents++) {
          if (!(0 !== i && 0 !== dataAndEvents)) {
            if (!(0 > _ + i)) {
              if (!(15 < _ + i)) {
                if (!(0 > deepDataAndEvents + dataAndEvents)) {
                  if (!(15 < deepDataAndEvents + dataAndEvents)) {
                    v = this.getSunLightValue(_ + i, k, deepDataAndEvents + dataAndEvents);
                    if (v - 1 > b) {
                      /** @type {number} */
                      b = v - 1;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (0 === p) {
      this.section[key].skyLight[name / 2] = (this.section[key].skyLight[name / 2] & 240) + b;
    } else {
      /** @type {number} */
      this.section[key].skyLight[name / 2 - 0.5] = (this.section[key].skyLight[name / 2 - 0.5] & 15) + (b << 4);
    }
    k = this.refreshLight(k);
    /** @type {number} */
    k[4] = 1;
    if (0 === deepDataAndEvents) {
      /** @type {number} */
      k[3] = 1;
    }
    if (15 === deepDataAndEvents) {
      /** @type {number} */
      k[5] = 1;
    }
    if (0 === _) {
      /** @type {number} */
      k[1] = 1;
    }
    if (15 === _) {
      /** @type {number} */
      k[7] = 1;
    }
    /** @type {number} */
    key = (new Date).getTime();
    /** @type {number} */
    i = -1;
    for (;1 >= i;i++) {
      /** @type {number} */
      dataAndEvents = -1;
      for (;1 >= dataAndEvents;dataAndEvents++) {
        if (0 !== k[3 * (i + 1) + dataAndEvents + 1]) {
          _ = mcWorld.requestChunk(this.xPos + i, this.zPos + dataAndEvents);
          if (void 0 !== _) {
            if (-1 !== _) {
              if (-2 !== _) {
                /** @type {boolean} */
                _.changed = true;
                _.init2(0);
                _.init2(1);
              }
            }
          }
        }
      }
    }
    /** @type {number} */
    _ = (new Date).getTime();
    console.log("czas chunk " + (_ - key));
  }
};
/**
 * @return {undefined}
 */
Chunk.prototype.update = function() {
  if (-1 !== this.isInit) {
    var a = this.refreshLight(-1);
    /** @type {number} */
    a[4] = 1;
    /** @type {number} */
    var b = (new Date).getTime();
    var self;
    /** @type {number} */
    var xPos = -1;
    for (;1 >= xPos;xPos++) {
      /** @type {number} */
      var zPos = -1;
      for (;1 >= zPos;zPos++) {
        if (0 !== a[3 * (xPos + 1) + zPos + 1]) {
          self = mcWorld.requestChunk(this.xPos + xPos, this.zPos + zPos);
          if (void 0 !== self) {
            if (-1 !== self) {
              if (-2 !== self) {
                /** @type {boolean} */
                self.changed = true;
                self.init2(0);
                self.init2(1);
              }
            }
          }
        }
      }
    }
    /** @type {boolean} */
    this.needsUpdate = false;
    /** @type {number} */
    a = (new Date).getTime();
    console.log("czas chunk " + (a - b));
  }
};
/**
 * @param {number} x
 * @param {number} y
 * @param {number} type
 * @param {number} pos
 * @param {number} value
 * @return {undefined}
 */
Chunk.prototype.setBlock = function(x, y, type, pos, value) {
  if (-1 !== this.isInit) {
    /** @type {boolean} */
    this.changed = true;
    /** @type {number} */
    var name = Math.floor(y / 16);
    var i = 256 * (y - 16 * name) + 16 * type + x;
    if (void 0 === this.section[name]) {
      this.newSection(name);
    }
    /** @type {number} */
    this.section[name].blocks[i] = pos;
    /** @type {number} */
    var value_index = i % 2;
    if (0 === value_index ? (this.section[name].data[i / 2] = (this.section[name].data[i / 2] & 240) + value, this.section[name].add[i / 2] &= 240) : (this.section[name].data[i / 2 - 0.5] = (this.section[name].data[i / 2 - 0.5] & 15) + (value << 4), this.section[name].add[i / 2 - 0.5] &= 15), value = 0, 0 === block[pos].type || (2 === block[pos].type || (3 === block[pos].type || 4 === block[pos].type))) {
      value = this.getSunLightValue(x, y + 1, type);
      /** @type {number} */
      pos = 0;
      /** @type {number} */
      var delta = -1;
      for (;1 >= delta;delta++) {
        /** @type {number} */
        var queueHooks = -1;
        for (;1 >= queueHooks;queueHooks++) {
          if (!(0 !== delta && 0 !== queueHooks)) {
            if (!(0 > x + delta)) {
              if (!(15 < x + delta)) {
                if (!(0 > type + queueHooks)) {
                  if (!(15 < type + queueHooks)) {
                    pos = this.getSunLightValue(x + delta, y, type + queueHooks);
                    if (pos - 1 > value) {
                      /** @type {number} */
                      value = pos - 1;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (0 === value_index) {
      this.section[name].skyLight[i / 2] = (this.section[name].skyLight[i / 2] & 240) + value;
    } else {
      /** @type {number} */
      this.section[name].skyLight[i / 2 - 0.5] = (this.section[name].skyLight[i / 2 - 0.5] & 15) + (value << 4);
    }
    /** @type {boolean} */
    this.needsUpdate = true;
  }
};
/**
 * @param {number} replacement
 * @param {number} y
 * @param {number} deepDataAndEvents
 * @return {?}
 */
Chunk.prototype.getSunLightValue = function(replacement, y, deepDataAndEvents) {
  /** @type {number} */
  var match = Math.floor(y / 16);
  return y -= 16 * match, void 0 === this.section[match] && this.newSection(match), replacement = 256 * y + 16 * deepDataAndEvents + replacement, 16 > match ? 0 === replacement % 2 ? this.section[match].skyLight[replacement / 2] & 15 : this.section[match].skyLight[replacement / 2 - 0.5] >> 4 & 15 : 16;
};
/**
 * @param {?} name
 * @param {?} program
 * @param {number} renderer
 * @return {undefined}
 */
Chunk.prototype.render = function(name, program, renderer) {
  if (0 !== renderer || -1 !== this.isInit) {
    if (1 !== renderer || -1 !== this.isInit1) {
      if (0 === renderer && 0 === this.isInit) {
        if (1 < chronometer.iLag) {
          chronometer.iLag -= 1;
          this.init2(0, true);
        }
      } else {
        if (1 === renderer && 0 === this.isInit1) {
          if (1 < chronometer.iLag) {
            chronometer.iLag -= 1;
            this.init2(1, true);
          }
        } else {
          gl.bindTexture(gl.TEXTURE_2D, blockTexture);
          if (void 0 !== this.vbo[renderer]) {
            if (void 0 !== this.vbo[renderer][name]) {
              gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo[renderer][name]);
              gl.vertexAttribPointer(program.vertexPositionAttribute, 3, gl.FLOAT, false, 36, 0);
              gl.vertexAttribPointer(program.textureCoordAttribute, 2, gl.FLOAT, false, 36, 12);
              gl.vertexAttribPointer(program.lightAttribute, 4, gl.FLOAT, false, 36, 20);
              gl.drawArrays(gl.TRIANGLES, 0, this.ivbo[renderer][name] / 9);
            }
          }
        }
      }
    }
  }
};
/**
 * @return {undefined}
 */
Chunk.prototype.deleteBuffers = function() {
  /** @type {number} */
  this.isInit1 = this.isInit = 0;
  if (void 0 !== this.vbo) {
    if (void 0 !== this.vbo[0]) {
      this.vbo[0].forEach(function(program) {
        gl.deleteBuffer(program);
      });
      this.ivbo[0].forEach(function(dataAndEvents) {
        chronometer.gpuMem -= dataAndEvents;
      });
    }
    if (void 0 !== this.vbo[1]) {
      this.vbo[1].forEach(function(program) {
        gl.deleteBuffer(program);
      });
      this.ivbo[1].forEach(function(dataAndEvents) {
        chronometer.gpuMem -= dataAndEvents;
      });
    }
  }
};
/**
 * @param {number} key
 * @param {number} opt_attributes
 * @return {?}
 */
Chunk.prototype.getCache = function(key, opt_attributes) {
  /** @type {number} */
  var srcIndex = 0;
  /** @type {number} */
  var i = 0;
  /** @type {number} */
  var prop = 0;
  /** @type {Float32Array} */
  this.cacheBiomes = new Float32Array(324);
  /** @type {Int32Array} */
  this.cacheHeightMap = new Int32Array(324);
  /** @type {Float32Array} */
  var values = Chunk.cacheSlight;
  /** @type {Float32Array} */
  var o = Chunk.cacheBlight;
  /** @type {Float32Array} */
  var patterns = Chunk.cacheData;
  /** @type {Float32Array} */
  var vec = Chunk.cacheId;
  /** @type {boolean} */
  var waiting = i = false;
  /** @type {boolean} */
  var s = false;
  /** @type {boolean} */
  var r = false;
  var tag = mcWorld.requestChunk(this.xPos + 1, this.zPos);
  if (void 0 === tag && (r = true), -1 === tag && (r = true), -2 === tag) {
    return false;
  }
  var $routeParams = mcWorld.requestChunk(this.xPos - 1, this.zPos);
  if (void 0 === $routeParams && (s = true), -1 === $routeParams && (s = true), -2 === $routeParams) {
    return false;
  }
  var self = mcWorld.requestChunk(this.xPos, this.zPos + 1);
  if (void 0 === self && (i = true), -1 === self && (i = true), -2 === self) {
    return false;
  }
  var doc = mcWorld.requestChunk(this.xPos, this.zPos - 1);
  if (void 0 === doc && (waiting = true), -1 === doc && (waiting = true), -2 === doc) {
    return false;
  }
  /** @type {number} */
  var b = 0;
  for (;16 > b;b++) {
    /** @type {number} */
    var capName = 0;
    for (;16 > capName;capName++) {
      /** @type {number} */
      prop = 0 + 18 * (b + 1) + (capName + 1);
      /** @type {number} */
      vec[prop] = 1;
      /** @type {number} */
      values[prop] = 0;
      /** @type {number} */
      o[prop] = 0;
      /** @type {number} */
      prop = 83268 + 18 * (b + 1) + (capName + 1);
      /** @type {number} */
      vec[prop] = 0;
      /** @type {number} */
      values[prop] = 15;
      /** @type {number} */
      o[prop] = 0;
    }
  }
  /** @type {number} */
  var initX = key - 1;
  if (0 > initX) {
    /** @type {number} */
    initX = 0;
  }
  var y = opt_attributes + 1;
  if (256 < y) {
    /** @type {number} */
    y = 256;
  }
  /** @type {number} */
  var x = initX;
  /** @type {number} */
  var t = 0;
  for (;x < y;x++, t++) {
    /** @type {number} */
    capName = 0;
    for (;18 > capName;capName++) {
      /** @type {number} */
      prop = 324 * (x + 1) + 0 + capName;
      /** @type {number} */
      vec[prop] = 1;
      /** @type {number} */
      prop = 324 * (x + 1) + 306 + capName;
      /** @type {number} */
      vec[prop] = 1;
    }
    /** @type {number} */
    b = 0;
    for (;18 > b;b++) {
      /** @type {number} */
      prop = 324 * (x + 1) + 18 * b + 0;
      /** @type {number} */
      vec[prop] = 1;
      /** @type {number} */
      prop = 324 * (x + 1) + 18 * b + 17;
      /** @type {number} */
      vec[prop] = 1;
    }
  }
  /** @type {number} */
  t = 0;
  for (;16 > t;t++) {
    /** @type {number} */
    b = 0;
    for (;16 > b;b++) {
      this.cacheBiomes[18 * (t + 1) + b + 1] = this.biomes[16 * t + b];
      this.cacheHeightMap[18 * (t + 1) + b + 1] = this.heightMap[16 * t + b];
    }
  }
  /** @type {number} */
  t = 0;
  for (;16 > t;t++) {
    this.cacheBiomes[18 * (t + 1) + 0] = this.cacheBiomes[18 * (t + 1) + 1];
    this.cacheHeightMap[18 * (t + 1) + 0] = this.cacheHeightMap[18 * (t + 1) + 1];
    this.cacheBiomes[18 * (t + 1) + 17] = this.cacheBiomes[18 * (t + 1) + 16];
    this.cacheHeightMap[18 * (t + 1) + 17] = this.cacheHeightMap[18 * (t + 1) + 16];
    this.cacheBiomes[306 + (t + 1)] = this.cacheBiomes[288 + (t + 1)];
    this.cacheHeightMap[306 + (t + 1)] = this.cacheHeightMap[288 + (t + 1)];
    this.cacheBiomes[0 + (t + 1)] = this.cacheBiomes[18 + (t + 1)];
    this.cacheHeightMap[0 + (t + 1)] = this.cacheHeightMap[18 + (t + 1)];
  }
  if (!i) {
    /** @type {number} */
    x = initX;
    /** @type {number} */
    t = 0;
    for (;x < y;x++, t++) {
      if (0 === x % 16) {
        var buffer = self.section[x / 16];
        /** @type {number} */
        t = 0;
        if (void 0 === buffer) {
          /** @type {number} */
          t = x;
          for (;t < x + 15;t++) {
            /** @type {number} */
            capName = 0;
            for (;16 > capName;capName++) {
              /** @type {number} */
              prop = 324 * (t + 1) + 306 + (capName + 1);
              /** @type {number} */
              vec[prop] = 0;
              /** @type {number} */
              values[prop] = 15;
              /** @type {number} */
              o[prop] = 0;
            }
          }
          x += 15;
          /** @type {number} */
          t = -1;
          continue;
        }
      }
      /** @type {number} */
      capName = 0;
      for (;16 > capName;capName++) {
        /** @type {number} */
        i = 256 * t + 0 + capName;
        /** @type {number} */
        prop = 324 * (x + 1) + 306 + (capName + 1);
        vec[prop] = buffer.blocks[i];
        /** @type {number} */
        srcIndex = i % 2;
        /** @type {number} */
        values[prop] = buffer.skyLight[i / 2 - srcIndex / 2] >> 4 * srcIndex & 15;
        /** @type {number} */
        o[prop] = buffer.blockLight[i / 2 - srcIndex / 2] >> 4 * srcIndex & 15;
        /** @type {number} */
        patterns[prop] = buffer.data[i / 2 - srcIndex / 2] >> 4 * srcIndex & 15 & block[buffer.blocks[i]].mask;
      }
    }
    /** @type {number} */
    t = 0;
    for (;16 > t;t++) {
      this.cacheBiomes[306 + (t + 1)] = self.biomes[0 + t];
      this.cacheHeightMap[306 + (t + 1)] = self.heightMap[0 + t];
    }
  }
  if (!waiting) {
    /** @type {number} */
    x = initX;
    /** @type {number} */
    t = 0;
    for (;x < y;x++, t++) {
      if (0 === x % 16 && (buffer = doc.section[x / 16], t = 0, void 0 === buffer)) {
        /** @type {number} */
        t = x;
        for (;t < x + 15;t++) {
          /** @type {number} */
          capName = 0;
          for (;16 > capName;capName++) {
            /** @type {number} */
            prop = 324 * (t + 1) + 0 + (capName + 1);
            /** @type {number} */
            vec[prop] = 0;
            /** @type {number} */
            values[prop] = 15;
            /** @type {number} */
            o[prop] = 0;
          }
        }
        x += 15;
        /** @type {number} */
        t = -1;
        continue;
      }
      /** @type {number} */
      capName = 0;
      for (;16 > capName;capName++) {
        /** @type {number} */
        i = 256 * t + 240 + capName;
        /** @type {number} */
        prop = 324 * (x + 1) + 0 + (capName + 1);
        vec[prop] = buffer.blocks[i];
        /** @type {number} */
        srcIndex = i % 2;
        /** @type {number} */
        values[prop] = buffer.skyLight[i / 2 - srcIndex / 2] >> 4 * srcIndex & 15;
        /** @type {number} */
        o[prop] = buffer.blockLight[i / 2 - srcIndex / 2] >> 4 * srcIndex & 15;
        /** @type {number} */
        patterns[prop] = buffer.data[i / 2 - srcIndex / 2] >> 4 * srcIndex & 15 & block[buffer.blocks[i]].mask;
      }
    }
    /** @type {number} */
    t = 0;
    for (;16 > t;t++) {
      this.cacheBiomes[0 + (t + 1)] = doc.biomes[240 + t];
      this.cacheHeightMap[0 + (t + 1)] = doc.heightMap[240 + t];
    }
  }
  if (!s) {
    /** @type {number} */
    x = initX;
    /** @type {number} */
    t = 0;
    for (;x < y;x++, t++) {
      if (0 === x % 16 && (buffer = $routeParams.section[x / 16], t = 0, void 0 === buffer)) {
        /** @type {number} */
        t = x;
        for (;t < x + 15;t++) {
          /** @type {number} */
          b = 0;
          for (;16 > b;b++) {
            /** @type {number} */
            prop = 324 * (t + 1) + 18 * (b + 1) + 0;
            /** @type {number} */
            vec[prop] = 0;
            /** @type {number} */
            values[prop] = 15;
            /** @type {number} */
            o[prop] = 0;
          }
        }
        x += 15;
        /** @type {number} */
        t = -1;
        continue;
      }
      /** @type {number} */
      b = 0;
      for (;16 > b;b++) {
        /** @type {number} */
        i = 256 * t + 16 * b + 15;
        /** @type {number} */
        prop = 324 * (x + 1) + 18 * (b + 1) + 0;
        vec[prop] = buffer.blocks[i];
        /** @type {number} */
        srcIndex = i % 2;
        /** @type {number} */
        values[prop] = buffer.skyLight[i / 2 - srcIndex / 2] >> 4 * srcIndex & 15;
        /** @type {number} */
        o[prop] = buffer.blockLight[i / 2 - srcIndex / 2] >> 4 * srcIndex & 15;
        /** @type {number} */
        patterns[prop] = buffer.data[i / 2 - srcIndex / 2] >> 4 * srcIndex & 15 & block[buffer.blocks[i]].mask;
      }
    }
    /** @type {number} */
    t = 0;
    for (;16 > t;t++) {
      this.cacheBiomes[18 * (t + 1) + 0] = $routeParams.biomes[16 * t + 15];
      this.cacheHeightMap[18 * (t + 1) + 0] = $routeParams.heightMap[16 * t + 15];
    }
  }
  if (!r) {
    /** @type {number} */
    x = initX;
    /** @type {number} */
    t = 0;
    for (;x < y;x++, t++) {
      if (0 === x % 16 && (buffer = tag.section[x / 16], t = 0, void 0 === buffer)) {
        /** @type {number} */
        t = x;
        for (;t < x + 15;t++) {
          /** @type {number} */
          b = 0;
          for (;16 > b;b++) {
            /** @type {number} */
            prop = 324 * (t + 1) + 18 * (b + 1) + 17;
            /** @type {number} */
            vec[prop] = 0;
            /** @type {number} */
            values[prop] = 15;
            /** @type {number} */
            o[prop] = 0;
          }
        }
        x += 15;
        /** @type {number} */
        t = -1;
        continue;
      }
      /** @type {number} */
      b = 0;
      for (;16 > b;b++) {
        /** @type {number} */
        i = 256 * t + 16 * b + 0;
        /** @type {number} */
        prop = 324 * (x + 1) + 18 * (b + 1) + 17;
        vec[prop] = buffer.blocks[i];
        /** @type {number} */
        srcIndex = i % 2;
        /** @type {number} */
        values[prop] = buffer.skyLight[i / 2 - srcIndex / 2] >> 4 * srcIndex & 15;
        /** @type {number} */
        o[prop] = buffer.blockLight[i / 2 - srcIndex / 2] >> 4 * srcIndex & 15;
        /** @type {number} */
        patterns[prop] = buffer.data[i / 2 - srcIndex / 2] >> 4 * srcIndex & 15 & block[buffer.blocks[i]].mask;
      }
    }
    /** @type {number} */
    t = 0;
    for (;16 > t;t++) {
      this.cacheBiomes[18 * (t + 1) + 17] = tag.biomes[16 * t + 0];
      this.cacheHeightMap[18 * (t + 1) + 17] = tag.heightMap[16 * t + 0];
    }
  }
  /** @type {number} */
  x = initX;
  /** @type {number} */
  t = 0;
  for (;x < y;x++, t++) {
    if (0 === x % 16 && (buffer = this.section[x / 16], t = 0, void 0 === buffer)) {
      /** @type {number} */
      b = 0;
      for (;16 > b;b++) {
        /** @type {number} */
        capName = 0;
        for (;16 > capName;capName++) {
          /** @type {number} */
          prop = 324 * (x + 1) + 18 * (b + 1) + (capName + 1);
          /** @type {number} */
          vec[prop] = 0;
          /** @type {number} */
          values[prop] = 15;
          /** @type {number} */
          o[prop] = 0;
          /** @type {number} */
          prop = 324 * (x + 16) + 18 * (b + 1) + (capName + 1);
          /** @type {number} */
          vec[prop] = 0;
          /** @type {number} */
          values[prop] = 15;
          /** @type {number} */
          o[prop] = 0;
        }
      }
      /** @type {number} */
      vec[324 * (x + 2) + 19] = -1;
      x += 15;
      /** @type {number} */
      t = -1;
      continue;
    }
    /** @type {number} */
    b = 0;
    for (;16 > b;b++) {
      /** @type {number} */
      capName = 0;
      for (;16 > capName;capName += 2) {
        /** @type {number} */
        i = 256 * t + 16 * b + capName;
        /** @type {number} */
        prop = 324 * (x + 1) + 18 * (b + 1) + (capName + 1);
        vec[prop] = buffer.blocks[i];
        vec[prop + 1] = buffer.blocks[i + 1];
        waiting = buffer.data[i / 2];
        /** @type {number} */
        patterns[prop] = waiting & 15 & block[buffer.blocks[i]].mask;
        /** @type {number} */
        patterns[prop + 1] = waiting >> 4 & 15 & block[buffer.blocks[i + 1]].mask;
        waiting = buffer.skyLight[i / 2];
        /** @type {number} */
        values[prop] = waiting & 15;
        /** @type {number} */
        values[prop + 1] = waiting >> 4 & 15;
        waiting = buffer.blockLight[i / 2];
        /** @type {number} */
        o[prop] = waiting & 15;
        /** @type {number} */
        o[prop + 1] = waiting >> 4 & 15;
      }
    }
  }
  /** @type {number} */
  x = initX;
  for (;x < y;x++) {
    /** @type {number} */
    values[324 * (x + 1) + 0] = Math.floor((values[324 * (x + 1) + 18] + values[324 * (x + 1) + 1]) / 2);
    /** @type {number} */
    values[324 * (x + 1) + 306] = Math.floor((values[324 * (x + 1) + 288] + values[324 * (x + 1) + 307]) / 2);
    /** @type {number} */
    values[324 * (x + 1) + 17] = Math.floor((values[324 * (x + 1) + 35] + values[324 * (x + 1) + 16]) / 2);
    /** @type {number} */
    values[324 * (x + 1) + 323] = Math.floor((values[324 * (x + 1) + 305] + values[324 * (x + 1) + 322]) / 2);
    /** @type {number} */
    o[324 * (x + 1) + 0] = Math.floor((o[324 * (x + 1) + 18] + o[324 * (x + 1) + 1]) / 2);
    /** @type {number} */
    o[324 * (x + 1) + 306] = Math.floor((o[324 * (x + 1) + 288] + o[324 * (x + 1) + 307]) / 2);
    /** @type {number} */
    o[324 * (x + 1) + 17] = Math.floor((o[324 * (x + 1) + 35] + o[324 * (x + 1) + 16]) / 2);
    /** @type {number} */
    o[324 * (x + 1) + 323] = Math.floor((o[324 * (x + 1) + 305] + o[324 * (x + 1) + 322]) / 2);
  }
  return true;
};
/**
 * @return {?}
 */
Chunk.prototype.getCacheL9 = function() {
  /** @type {number} */
  var index = 0;
  /** @type {number} */
  var key = 0;
  /** @type {Uint8Array} */
  var data = Chunk.cacheSlight9;
  /** @type {Uint8Array} */
  var cache = Chunk.cacheBlight9;
  /** @type {Int32Array} */
  var result = Chunk.cacheId9;
  /** @type {Array} */
  var opt_nodes = [];
  /** @type {number} */
  var s = -1;
  for (;1 >= s;s++) {
    /** @type {number} */
    index = -1;
    for (;1 >= index;index++) {
      if (opt_nodes[3 * (s + 1) + index + 1] = mcWorld.requestChunk(this.xPos + s, this.zPos + index), -2 === opt_nodes[3 * (s + 1) + index + 1]) {
        return false;
      }
    }
  }
  /** @type {number} */
  var f = 0;
  for (;48 > f;f++) {
    /** @type {number} */
    var x = 0;
    for (;48 > x;x++) {
      /** @type {number} */
      key = 48 * f + x;
      /** @type {number} */
      result[key] = 1;
      /** @type {number} */
      data[key] = 0;
      /** @type {number} */
      cache[key] = 0;
      /** @type {number} */
      key = 592128 + 48 * f + x;
      /** @type {number} */
      result[key] = 0;
      /** @type {number} */
      data[key] = 15;
      /** @type {number} */
      cache[key] = 0;
      /** @type {number} */
      key = 589824 + 48 * f + x;
      /** @type {number} */
      result[key] = 0;
      /** @type {number} */
      data[key] = 15;
      /** @type {number} */
      cache[key] = 0;
    }
  }
  var node;
  /** @type {number} */
  var cols = 0;
  for (;2 >= cols;cols++) {
    /** @type {number} */
    var col = 0;
    for (;2 >= col;col++) {
      if (node = opt_nodes[3 * cols + col], void 0 !== node && -1 !== node) {
        /** @type {number} */
        f = 0;
        for (;16 > f;f++) {
          /** @type {number} */
          x = 0;
          for (;16 > x;x++) {
            Chunk.cacheHeightMap9[48 * (16 * col + f) + 16 * cols + x] = node.heightMap[16 * f + x];
          }
        }
        /** @type {number} */
        var t = s = 0;
        for (;256 > s;s++, t++) {
          if (0 === s % 16) {
            var parent = node.section[s / 16];
            /** @type {number} */
            t = 0;
            if (void 0 === parent) {
              /** @type {number} */
              f = 0;
              for (;16 > f;f++) {
                /** @type {number} */
                x = 0;
                for (;16 > x;x++) {
                  /** @type {number} */
                  key = 2304 * s + 48 * (16 * col + f) + (16 * cols + x);
                  /** @type {number} */
                  result[key] = 0;
                  /** @type {number} */
                  data[key] = 0;
                  /** @type {number} */
                  cache[key] = 0;
                  /** @type {number} */
                  key = 2304 * (s + 15) + 48 * (16 * col + f) + (16 * cols + x);
                  /** @type {number} */
                  result[key] = 0;
                  /** @type {number} */
                  data[key] = 0;
                  /** @type {number} */
                  cache[key] = 0;
                }
              }
              s += 15;
              /** @type {number} */
              t = -1;
              continue;
            }
          }
          /** @type {number} */
          var byteCount = 0;
          /** @type {number} */
          f = 0;
          for (;16 > f;f++) {
            /** @type {number} */
            x = 0;
            for (;16 > x;x += 2) {
              /** @type {number} */
              index = 256 * t + 16 * f + x;
              /** @type {number} */
              key = 2304 * s + 48 * (16 * col + f) + (16 * cols + x);
              result[key] = parent.blocks[index];
              result[key + 1] = parent.blocks[index + 1];
              byteCount = parent.skyLight[index / 2];
              /** @type {number} */
              data[key] = byteCount & 15;
              /** @type {number} */
              data[key + 1] = byteCount >> 4 & 15;
              byteCount = parent.blockLight[index / 2];
              /** @type {number} */
              cache[key] = byteCount & 15;
              /** @type {number} */
              cache[key + 1] = byteCount >> 4 & 15;
            }
          }
        }
      }
    }
  }
  return true;
};
/**
 * @param {number} recurring
 * @return {?}
 */
Chunk.prototype.init2 = function(recurring) {
  if (0 === recurring) {
    var m1 = settings.waterlevel;
    /** @type {number} */
    var attributes = 256;
  } else {
    /** @type {number} */
    m1 = 0;
    attributes = settings.waterlevel;
  }
  if (0 === this.lightPopulated && settings.lightInit) {
    if (!this.refreshLight(-1, true)) {
      return false;
    }
    /** @type {number} */
    this.lightPopulated = 1;
  }
  if (!this.getCache(m1, attributes)) {
    return false;
  }
  if (0 === recurring) {
    /** @type {number} */
    this.isInit = -1;
  } else {
    /** @type {number} */
    this.isInit1 = -1;
  }
  /** @type {Float32Array} */
  var buffer = Chunk.cacheSlight;
  /** @type {Float32Array} */
  var map = Chunk.cacheBlight;
  /** @type {Float32Array} */
  var a = Chunk.cacheData;
  /** @type {Float32Array} */
  var keys = Chunk.cacheId;
  /** @type {number} */
  var target = 0;
  /** @type {number} */
  var type = 0;
  /** @type {number} */
  var part = 0;
  /** @type {number} */
  var key = 0;
  /** @type {number} */
  var o = 0;
  var t;
  var tags = window.punkty1;
  /** @type {number} */
  tags[0].o = 0;
  /** @type {number} */
  tags[1].o = 0;
  /** @type {number} */
  tags[2].o = 0;
  /** @type {number} */
  var j = tags[3].o = 0;
  /** @type {number} */
  var start = 0;
  /** @type {number} */
  var index = 0;
  /** @type {number} */
  var _i = start = 0;
  /** @type {number} */
  var k = 0;
  /** @type {number} */
  var pos = 0;
  /** @type {number} */
  var x = 0;
  var n;
  /** @type {number} */
  var value = 0;
  /** @type {number} */
  var quote = 0;
  /** @type {number} */
  var expires = 0;
  /** @type {number} */
  var current = 0;
  /** @type {number} */
  var item = 0;
  /** @type {number} */
  var id = 0;
  /** @type {number} */
  var val = 0;
  /** @type {number} */
  var count = 0;
  /** @type {number} */
  var temp = 0;
  /** @type {number} */
  var row = 0;
  /** @type {number} */
  var attr = 0;
  /** @type {number} */
  var v = 0;
  /** @type {boolean} */
  var targetSplit = false;
  /** @type {boolean} */
  var sourceSplit = false;
  /** @type {boolean} */
  var to = false;
  /** @type {boolean} */
  var from = false;
  /** @type {boolean} */
  var sy = false;
  /** @type {boolean} */
  var sx = false;
  /** @type {number} */
  var useCnvt = 0;
  /** @type {number} */
  var hasCnvt = 0;
  /** @type {number} */
  var throttling = 0;
  /** @type {number} */
  var more = 0;
  /** @type {number} */
  var getBiomeColor4 = 0;
  var f;
  var y;
  /** @type {number} */
  var ms = 0;
  /** @type {number} */
  var shift = 0;
  /** @type {number} */
  var color = 0;
  /** @type {number} */
  var rem = 0;
  /** @type {number} */
  var m = 0;
  /** @type {number} */
  var h = 0;
  if (0 !== this.mxaVal) {
    if (this.mxaVal + 1 < attributes) {
      attributes = this.mxaVal + 1;
    }
  }
  if (void 0 === this.section[Math.floor(m1 / 16)]) {
    /** @type {number} */
    m1 = 16 * Math.floor(m1 / 16) + 16;
  }
  var whole_match = m1;
  for (;whole_match < attributes;whole_match++) {
    if (0 === whole_match % 16 && -1 === keys[324 * (whole_match + 2) + 19]) {
      whole_match += 15;
    } else {
      /** @type {number} */
      var r20 = 0;
      for (;16 > r20;r20++) {
        /** @type {number} */
        var errStr = 0;
        for (;16 > errStr;errStr++) {
          if (sx = sy = from = to = sourceSplit = targetSplit = false, j = 324 * (whole_match + 1) + 18 * (r20 + 1) + (errStr + 1), type = block[keys[j]].type, 0 !== type) {
            /** @type {number} */
            start = j + 18;
            /** @type {number} */
            index = j - 18;
            /** @type {number} */
            _i = j - 1;
            /** @type {number} */
            k = j + 1;
            /** @type {number} */
            pos = j + 324;
            /** @type {number} */
            x = j - 324;
            var originalType = block[keys[pos]].type;
            var state = block[keys[x]].type;
            var tag = block[keys[_i]].type;
            var array = block[keys[k]].type;
            var search = block[keys[index]].type;
            var string = block[keys[start]].type;
            if (f = this.xPos % 5, 0 > f && (f += 5), y = this.zPos % 5, 0 > y && (y += 5), n = 65536 * (0 + whole_match) + 256 * (16 * r20 + errStr) + 10 * (5 * f + y), 1 === type || (2 === type || (4 === type || 6 === type))) {
              if (1 !== originalType) {
                expires = buffer[pos];
                temp = map[pos];
                /** @type {boolean} */
                sourceSplit = true;
              }
              if (1 !== state) {
                current = buffer[x];
                row = map[x];
                /** @type {boolean} */
                targetSplit = true;
              }
              if (1 !== search) {
                quote = buffer[index];
                count = map[index];
                /** @type {boolean} */
                sx = true;
              }
              if (1 !== string) {
                value = buffer[start];
                val = map[start];
                /** @type {boolean} */
                sy = true;
              }
              if (1 !== tag) {
                item = buffer[_i];
                attr = map[_i];
                /** @type {boolean} */
                to = true;
              }
              if (1 !== array) {
                id = buffer[k];
                v = map[k];
                /** @type {boolean} */
                from = true;
              }
            } else {
              if (300 < type) {
                if (originalType !== type) {
                  expires = buffer[pos];
                  temp = map[pos];
                  /** @type {boolean} */
                  sourceSplit = true;
                }
                if (1 !== state) {
                  if (state !== type) {
                    current = buffer[x];
                    row = map[x];
                    /** @type {boolean} */
                    targetSplit = true;
                  }
                }
                if (search !== type) {
                  quote = buffer[index];
                  count = map[index];
                  /** @type {boolean} */
                  sx = true;
                }
                if (string !== type) {
                  value = buffer[start];
                  val = map[start];
                  /** @type {boolean} */
                  sy = true;
                }
                if (tag !== type) {
                  item = buffer[_i];
                  attr = map[_i];
                  /** @type {boolean} */
                  to = true;
                }
                if (array !== type) {
                  id = buffer[k];
                  v = map[k];
                  /** @type {boolean} */
                  from = true;
                }
              } else {
                if (300 === type) {
                  if (originalType !== type || a[pos] !== a[j]) {
                    expires = buffer[pos];
                    temp = map[pos];
                    /** @type {boolean} */
                    sourceSplit = true;
                  }
                  if (1 !== state && state !== type || a[x] !== a[j]) {
                    current = buffer[x];
                    row = map[x];
                    /** @type {boolean} */
                    targetSplit = true;
                  }
                  if (search !== type || a[index] !== a[j]) {
                    quote = buffer[index];
                    count = map[index];
                    /** @type {boolean} */
                    sx = true;
                  }
                  if (string !== type || a[start] !== a[j]) {
                    value = buffer[start];
                    val = map[start];
                    /** @type {boolean} */
                    sy = true;
                  }
                  if (tag !== type || a[_i] !== a[j]) {
                    item = buffer[_i];
                    attr = map[_i];
                    /** @type {boolean} */
                    to = true;
                  }
                  if (array !== type || a[k] !== a[j]) {
                    id = buffer[k];
                    v = map[k];
                    /** @type {boolean} */
                    from = true;
                  }
                } else {
                  continue;
                }
              }
            }
            if ((to || (from || (sx || (sy || (targetSplit || sourceSplit))))) && (2 === type && (from = sx = sy = targetSplit = sourceSplit = to = to || (from || (sx || (sy || (targetSplit || sourceSplit))))), key = keys[j], part = a[j], o = void 0 === block[key][part] ? block[key][0] : block[key][part], void 0 !== o.shapeType && 0 !== o.shapeType)) {
              if (1 === o.shapeType || 11 === o.shapeType) {
                if (1 === o.shapeType) {
                  /** @type {number} */
                  ms = 1;
                  /** @type {number} */
                  shift = 2;
                  /** @type {number} */
                  color = 3;
                  /** @type {number} */
                  rem = 4;
                  /** @type {number} */
                  m = 6;
                  /** @type {number} */
                  h = 5;
                } else {
                  /** @type {number} */
                  h = m = rem = color = shift = ms = 0;
                }
                target = o.drawLevel;
                t = tags[target];
                var p = o.shape;
                var faces = p;
                /** @type {number} */
                useCnvt = 0;
                if (0 < o.useBiomeColor && (useCnvt = this.getBiomeColor(errStr, r20, o.useBiomeColor - 1)), to) {
                  if (t = 8 < item && 0 === target ? tags[target + 1] : tags[target], 0 === block.lightSource[key]) {
                    /** @type {number} */
                    var yy = Math.floor((item + buffer[_i - 18] + buffer[_i - 324 - 18] + buffer[_i - 324]) / 4);
                    /** @type {number} */
                    var diff = Math.floor((item + buffer[_i - 324] + buffer[_i - 324 + 18] + buffer[_i + 18]) / 4);
                    /** @type {number} */
                    var inputBaseSize = Math.floor((item + buffer[_i + 18] + buffer[_i + 324 + 18] + buffer[_i + 324]) / 4);
                    /** @type {number} */
                    var tmp12 = Math.floor((item + buffer[_i + 324] + buffer[_i + 324 - 18] + buffer[_i - 18]) / 4);
                    /** @type {number} */
                    var dy = Math.floor((attr + map[_i - 18] + map[_i - 324 - 18] + map[_i - 324]) / 4);
                    /** @type {number} */
                    var firstNum = Math.floor((attr + map[_i - 324] + map[_i - 324 + 18] + map[_i + 18]) / 4);
                    /** @type {number} */
                    var carry = Math.floor((attr + map[_i + 18] + map[_i + 324 + 18] + map[_i + 324]) / 4);
                    /** @type {number} */
                    var z5 = Math.floor((attr + map[_i + 324] + map[_i + 324 - 18] + map[_i - 18]) / 4);
                  } else {
                    /** @type {number} */
                    yy = diff = inputBaseSize = tmp12 = dy = firstNum = carry = z5 = 15;
                  }
                  /** @type {number} */
                  var i = 0;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.front[i];
                  t.d[t.o++] = 0 + whole_match + faces.front[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.front[i + 2];
                  t.d[t.o++] = p.front[i + 3];
                  t.d[t.o++] = p.front[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * yy + dy;
                  /** @type {number} */
                  t.d[t.o++] = n + ms;
                  /** @type {number} */
                  t.d[t.o++] = 0.8;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 5;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.front[i];
                  t.d[t.o++] = 0 + whole_match + faces.front[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.front[i + 2];
                  t.d[t.o++] = p.front[i + 3];
                  t.d[t.o++] = p.front[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * diff + firstNum;
                  /** @type {number} */
                  t.d[t.o++] = n + ms;
                  /** @type {number} */
                  t.d[t.o++] = 0.8;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 10;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.front[i];
                  t.d[t.o++] = 0 + whole_match + faces.front[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.front[i + 2];
                  t.d[t.o++] = p.front[i + 3];
                  t.d[t.o++] = p.front[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * inputBaseSize + carry;
                  /** @type {number} */
                  t.d[t.o++] = n + ms;
                  /** @type {number} */
                  t.d[t.o++] = 0.8;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 15;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.front[i];
                  t.d[t.o++] = 0 + whole_match + faces.front[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.front[i + 2];
                  t.d[t.o++] = p.front[i + 3];
                  t.d[t.o++] = p.front[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * yy + dy;
                  /** @type {number} */
                  t.d[t.o++] = n + ms;
                  /** @type {number} */
                  t.d[t.o++] = 0.8;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 20;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.front[i];
                  t.d[t.o++] = 0 + whole_match + faces.front[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.front[i + 2];
                  t.d[t.o++] = p.front[i + 3];
                  t.d[t.o++] = p.front[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * inputBaseSize + carry;
                  /** @type {number} */
                  t.d[t.o++] = n + ms;
                  /** @type {number} */
                  t.d[t.o++] = 0.8;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 25;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.front[i];
                  t.d[t.o++] = 0 + whole_match + faces.front[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.front[i + 2];
                  t.d[t.o++] = p.front[i + 3];
                  t.d[t.o++] = p.front[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * tmp12 + z5;
                  /** @type {number} */
                  t.d[t.o++] = n + ms;
                  /** @type {number} */
                  t.d[t.o++] = 0.8;
                  t.d[t.o++] = useCnvt;
                }
                if (from) {
                  if (t = 8 < id && 0 === target ? tags[target + 1] : tags[target], 0 === block.lightSource[key]) {
                    /** @type {number} */
                    var diffCosAngle = Math.floor((id + buffer[k - 18] + buffer[k - 324 - 18] + buffer[k - 324]) / 4);
                    /** @type {number} */
                    var tmp10p2 = Math.floor((id + buffer[k - 324] + buffer[k - 324 + 18] + buffer[k + 18]) / 4);
                    /** @type {number} */
                    var xx = Math.floor((id + buffer[k + 18] + buffer[k + 324 + 18] + buffer[k + 324]) / 4);
                    /** @type {number} */
                    var time = Math.floor((id + buffer[k + 324] + buffer[k + 324 - 18] + buffer[k - 18]) / 4);
                    /** @type {number} */
                    var cosAngle = Math.floor((v + map[k - 18] + map[k - 324 - 18] + map[k - 324]) / 4);
                    /** @type {number} */
                    var z5p2 = Math.floor((v + map[k - 324] + map[k - 324 + 18] + map[k + 18]) / 4);
                    /** @type {number} */
                    var dx = Math.floor((v + map[k + 18] + map[k + 324 + 18] + map[k + 324]) / 4);
                    /** @type {number} */
                    var begin = Math.floor((v + map[k + 324] + map[k + 324 - 18] + map[k - 18]) / 4);
                  } else {
                    /** @type {number} */
                    diffCosAngle = tmp10p2 = xx = time = cosAngle = z5p2 = dx = begin = 15;
                  }
                  /** @type {number} */
                  i = 0;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.back[i];
                  t.d[t.o++] = 0 + whole_match + faces.back[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.back[i + 2];
                  t.d[t.o++] = p.back[i + 3];
                  t.d[t.o++] = p.back[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * xx + dx;
                  /** @type {number} */
                  t.d[t.o++] = n + shift;
                  /** @type {number} */
                  t.d[t.o++] = 0.8;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 5;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.back[i];
                  t.d[t.o++] = 0 + whole_match + faces.back[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.back[i + 2];
                  t.d[t.o++] = p.back[i + 3];
                  t.d[t.o++] = p.back[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * diffCosAngle + cosAngle;
                  /** @type {number} */
                  t.d[t.o++] = n + shift;
                  /** @type {number} */
                  t.d[t.o++] = 0.8;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 10;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.back[i];
                  t.d[t.o++] = 0 + whole_match + faces.back[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.back[i + 2];
                  t.d[t.o++] = p.back[i + 3];
                  t.d[t.o++] = p.back[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * time + begin;
                  /** @type {number} */
                  t.d[t.o++] = n + shift;
                  /** @type {number} */
                  t.d[t.o++] = 0.8;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 15;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.back[i];
                  t.d[t.o++] = 0 + whole_match + faces.back[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.back[i + 2];
                  t.d[t.o++] = p.back[i + 3];
                  t.d[t.o++] = p.back[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * diffCosAngle + cosAngle;
                  /** @type {number} */
                  t.d[t.o++] = n + shift;
                  /** @type {number} */
                  t.d[t.o++] = 0.8;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 20;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.back[i];
                  t.d[t.o++] = 0 + whole_match + faces.back[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.back[i + 2];
                  t.d[t.o++] = p.back[i + 3];
                  t.d[t.o++] = p.back[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * xx + dx;
                  /** @type {number} */
                  t.d[t.o++] = n + shift;
                  /** @type {number} */
                  t.d[t.o++] = 0.8;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 25;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.back[i];
                  t.d[t.o++] = 0 + whole_match + faces.back[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.back[i + 2];
                  t.d[t.o++] = p.back[i + 3];
                  t.d[t.o++] = p.back[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * tmp10p2 + z5p2;
                  /** @type {number} */
                  t.d[t.o++] = n + shift;
                  /** @type {number} */
                  t.d[t.o++] = 0.8;
                  t.d[t.o++] = useCnvt;
                }
                if (sx) {
                  if (t = 8 < quote && 0 === target ? tags[target + 1] : tags[target], 0 === block.lightSource[key]) {
                    /** @type {number} */
                    var firstToken = Math.floor((quote + buffer[index - 1] + buffer[index - 324 - 1] + buffer[index - 324]) / 4);
                    /** @type {number} */
                    var cur = Math.floor((quote + buffer[index - 324] + buffer[index - 324 + 1] + buffer[index + 1]) / 4);
                    /** @type {number} */
                    var tmp = Math.floor((quote + buffer[index + 1] + buffer[index + 324 + 1] + buffer[index + 324]) / 4);
                    /** @type {number} */
                    var elem = Math.floor((quote + buffer[index + 324] + buffer[index + 324 - 1] + buffer[index - 1]) / 4);
                    /** @type {number} */
                    var initialMoveX = Math.floor((count + map[index - 1] + map[index - 324 - 1] + map[index - 324]) / 4);
                    /** @type {number} */
                    var initialMoveY = Math.floor((count + map[index - 324] + map[index - 324 + 1] + map[index + 1]) / 4);
                    /** @type {number} */
                    var moveX = Math.floor((count + map[index + 1] + map[index + 324 + 1] + map[index + 324]) / 4);
                    /** @type {number} */
                    var moveY = Math.floor((count + map[index + 324] + map[index + 324 - 1] + map[index - 1]) / 4);
                  } else {
                    /** @type {number} */
                    firstToken = cur = tmp = elem = initialMoveX = initialMoveY = moveX = moveY = 15;
                  }
                  /** @type {number} */
                  i = 0;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.right[i];
                  t.d[t.o++] = 0 + whole_match + faces.right[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.right[i + 2];
                  t.d[t.o++] = p.right[i + 3];
                  t.d[t.o++] = p.right[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * tmp + moveX;
                  /** @type {number} */
                  t.d[t.o++] = n + color;
                  /** @type {number} */
                  t.d[t.o++] = 0.55;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 5;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.right[i];
                  t.d[t.o++] = 0 + whole_match + faces.right[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.right[i + 2];
                  t.d[t.o++] = p.right[i + 3];
                  t.d[t.o++] = p.right[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * firstToken + initialMoveX;
                  /** @type {number} */
                  t.d[t.o++] = n + color;
                  /** @type {number} */
                  t.d[t.o++] = 0.55;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 10;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.right[i];
                  t.d[t.o++] = 0 + whole_match + faces.right[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.right[i + 2];
                  t.d[t.o++] = p.right[i + 3];
                  t.d[t.o++] = p.right[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * elem + moveY;
                  /** @type {number} */
                  t.d[t.o++] = n + color;
                  /** @type {number} */
                  t.d[t.o++] = 0.55;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 15;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.right[i];
                  t.d[t.o++] = 0 + whole_match + faces.right[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.right[i + 2];
                  t.d[t.o++] = p.right[i + 3];
                  t.d[t.o++] = p.right[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * tmp + moveX;
                  /** @type {number} */
                  t.d[t.o++] = n + color;
                  /** @type {number} */
                  t.d[t.o++] = 0.55;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 20;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.right[i];
                  t.d[t.o++] = 0 + whole_match + faces.right[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.right[i + 2];
                  t.d[t.o++] = p.right[i + 3];
                  t.d[t.o++] = p.right[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * cur + initialMoveY;
                  /** @type {number} */
                  t.d[t.o++] = n + color;
                  /** @type {number} */
                  t.d[t.o++] = 0.55;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 25;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.right[i];
                  t.d[t.o++] = 0 + whole_match + faces.right[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.right[i + 2];
                  t.d[t.o++] = p.right[i + 3];
                  t.d[t.o++] = p.right[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * firstToken + initialMoveX;
                  /** @type {number} */
                  t.d[t.o++] = n + color;
                  /** @type {number} */
                  t.d[t.o++] = 0.55;
                  t.d[t.o++] = useCnvt;
                }
                if (sy) {
                  if (t = 8 < value && 0 === target ? tags[target + 1] : tags[target], 0 === block.lightSource[key]) {
                    /** @type {number} */
                    var stack = Math.floor((value + buffer[start - 1] + buffer[start - 324 - 1] + buffer[start - 324]) / 4);
                    /** @type {number} */
                    var memory = Math.floor((value + buffer[start - 324] + buffer[start - 324 + 1] + buffer[start + 1]) / 4);
                    /** @type {number} */
                    var inPseudo = Math.floor((value + buffer[start + 1] + buffer[start + 324 + 1] + buffer[start + 324]) / 4);
                    /** @type {number} */
                    var inParens = Math.floor((value + buffer[start + 324] + buffer[start + 324 - 1] + buffer[start - 1]) / 4);
                    /** @type {number} */
                    var failed = Math.floor((val + map[start - 1] + map[start - 324 - 1] + map[start - 324]) / 4);
                    /** @type {number} */
                    var total = Math.floor((val + map[start - 324] + map[start - 324 + 1] + map[start + 1]) / 4);
                    /** @type {number} */
                    var failures = Math.floor((val + map[start + 1] + map[start + 324 + 1] + map[start + 324]) / 4);
                    /** @type {number} */
                    var Aa = Math.floor((val + map[start + 324] + map[start + 324 - 1] + map[start - 1]) / 4);
                  } else {
                    /** @type {number} */
                    stack = memory = inPseudo = inParens = failed = total = failures = Aa = 15;
                  }
                  /** @type {number} */
                  i = 0;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.left[i];
                  t.d[t.o++] = 0 + whole_match + faces.left[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.left[i + 2];
                  t.d[t.o++] = p.left[i + 3];
                  t.d[t.o++] = p.left[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * inParens + Aa;
                  /** @type {number} */
                  t.d[t.o++] = n + rem;
                  /** @type {number} */
                  t.d[t.o++] = 0.55;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 5;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.left[i];
                  t.d[t.o++] = 0 + whole_match + faces.left[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.left[i + 2];
                  t.d[t.o++] = p.left[i + 3];
                  t.d[t.o++] = p.left[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * stack + failed;
                  /** @type {number} */
                  t.d[t.o++] = n + rem;
                  /** @type {number} */
                  t.d[t.o++] = 0.55;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 10;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.left[i];
                  t.d[t.o++] = 0 + whole_match + faces.left[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.left[i + 2];
                  t.d[t.o++] = p.left[i + 3];
                  t.d[t.o++] = p.left[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * memory + total;
                  /** @type {number} */
                  t.d[t.o++] = n + rem;
                  /** @type {number} */
                  t.d[t.o++] = 0.55;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 15;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.left[i];
                  t.d[t.o++] = 0 + whole_match + faces.left[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.left[i + 2];
                  t.d[t.o++] = p.left[i + 3];
                  t.d[t.o++] = p.left[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * inPseudo + failures;
                  /** @type {number} */
                  t.d[t.o++] = n + rem;
                  /** @type {number} */
                  t.d[t.o++] = 0.55;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 20;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.left[i];
                  t.d[t.o++] = 0 + whole_match + faces.left[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.left[i + 2];
                  t.d[t.o++] = p.left[i + 3];
                  t.d[t.o++] = p.left[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * inParens + Aa;
                  /** @type {number} */
                  t.d[t.o++] = n + rem;
                  /** @type {number} */
                  t.d[t.o++] = 0.55;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 25;
                  t.d[t.o++] = 16 * this.xPos + errStr + faces.left[i];
                  t.d[t.o++] = 0 + whole_match + faces.left[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + faces.left[i + 2];
                  t.d[t.o++] = p.left[i + 3];
                  t.d[t.o++] = p.left[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * memory + total;
                  /** @type {number} */
                  t.d[t.o++] = n + rem;
                  /** @type {number} */
                  t.d[t.o++] = 0.55;
                  t.d[t.o++] = useCnvt;
                }
                if (targetSplit) {
                  if (t = tags[target], 0 === block.lightSource[key]) {
                    /** @type {number} */
                    var cycle = Math.floor((current + buffer[x - 1] + buffer[x - 18 - 1] + buffer[x - 18]) / 4);
                    /** @type {number} */
                    var visited = Math.floor((current + buffer[x - 18] + buffer[x - 18 + 1] + buffer[x + 1]) / 4);
                    /** @type {number} */
                    var c = Math.floor((current + buffer[x + 1] + buffer[x + 18 + 1] + buffer[x + 18]) / 4);
                    /** @type {number} */
                    var maxX = Math.floor((current + buffer[x + 18] + buffer[x + 18 - 1] + buffer[x - 1]) / 4);
                    /** @type {number} */
                    var maxY = Math.floor((row + map[x - 1] + map[x - 18 - 1] + map[x - 18]) / 4);
                    /** @type {number} */
                    var g = Math.floor((row + map[x - 18] + map[x - 18 + 1] + map[x + 1]) / 4);
                    /** @type {number} */
                    var b = Math.floor((row + map[x + 1] + map[x + 18 + 1] + map[x + 18]) / 4);
                    /** @type {number} */
                    var intercept = Math.floor((row + map[x + 18] + map[x + 18 - 1] + map[x - 1]) / 4);
                  } else {
                    /** @type {number} */
                    cycle = visited = c = maxX = maxY = g = b = intercept = 15;
                  }
                  /** @type {number} */
                  i = 0;
                  t.d[t.o++] = 16 * this.xPos + errStr + p.bottom[i];
                  t.d[t.o++] = 0 + whole_match + p.bottom[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                  t.d[t.o++] = p.bottom[i + 3];
                  t.d[t.o++] = p.bottom[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * c + b;
                  /** @type {number} */
                  t.d[t.o++] = n + h;
                  /** @type {number} */
                  t.d[t.o++] = 1;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 5;
                  t.d[t.o++] = 16 * this.xPos + errStr + p.bottom[i];
                  t.d[t.o++] = 0 + whole_match + p.bottom[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                  t.d[t.o++] = p.bottom[i + 3];
                  t.d[t.o++] = p.bottom[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * cycle + maxY;
                  /** @type {number} */
                  t.d[t.o++] = n + h;
                  /** @type {number} */
                  t.d[t.o++] = 1;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 10;
                  t.d[t.o++] = 16 * this.xPos + errStr + p.bottom[i];
                  t.d[t.o++] = 0 + whole_match + p.bottom[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                  t.d[t.o++] = p.bottom[i + 3];
                  t.d[t.o++] = p.bottom[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * visited + g;
                  /** @type {number} */
                  t.d[t.o++] = n + h;
                  /** @type {number} */
                  t.d[t.o++] = 1;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 15;
                  t.d[t.o++] = 16 * this.xPos + errStr + p.bottom[i];
                  t.d[t.o++] = 0 + whole_match + p.bottom[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                  t.d[t.o++] = p.bottom[i + 3];
                  t.d[t.o++] = p.bottom[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * c + b;
                  /** @type {number} */
                  t.d[t.o++] = n + h;
                  /** @type {number} */
                  t.d[t.o++] = 1;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 20;
                  t.d[t.o++] = 16 * this.xPos + errStr + p.bottom[i];
                  t.d[t.o++] = 0 + whole_match + p.bottom[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                  t.d[t.o++] = p.bottom[i + 3];
                  t.d[t.o++] = p.bottom[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * maxX + intercept;
                  /** @type {number} */
                  t.d[t.o++] = n + h;
                  /** @type {number} */
                  t.d[t.o++] = 1;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 25;
                  t.d[t.o++] = 16 * this.xPos + errStr + p.bottom[i];
                  t.d[t.o++] = 0 + whole_match + p.bottom[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                  t.d[t.o++] = p.bottom[i + 3];
                  t.d[t.o++] = p.bottom[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * cycle + maxY;
                  /** @type {number} */
                  t.d[t.o++] = n + h;
                  /** @type {number} */
                  t.d[t.o++] = 1;
                  t.d[t.o++] = useCnvt;
                }
                if (sourceSplit) {
                  if (t = 8 < expires && 0 === target ? tags[target + 1] : tags[target], 0 === block.lightSource[key]) {
                    /** @type {number} */
                    var enc2 = Math.floor((expires + buffer[pos - 1] + buffer[pos - 18 - 1] + buffer[pos - 18]) / 4);
                    /** @type {number} */
                    var enc3 = Math.floor((expires + buffer[pos - 18] + buffer[pos - 18 + 1] + buffer[pos + 1]) / 4);
                    /** @type {number} */
                    var enc4 = Math.floor((expires + buffer[pos + 1] + buffer[pos + 18 + 1] + buffer[pos + 18]) / 4);
                    /** @type {number} */
                    var startTime = Math.floor((expires + buffer[pos + 18] + buffer[pos + 18 - 1] + buffer[pos - 1]) / 4);
                    /** @type {number} */
                    var endTime = Math.floor((temp + map[pos - 1] + map[pos - 18 - 1] + map[pos - 18]) / 4);
                    /** @type {number} */
                    var _m = Math.floor((temp + map[pos - 18] + map[pos - 18 + 1] + map[pos + 1]) / 4);
                    /** @type {number} */
                    var _ref2 = Math.floor((temp + map[pos + 1] + map[pos + 18 + 1] + map[pos + 18]) / 4);
                    /** @type {number} */
                    var exps = Math.floor((temp + map[pos + 18] + map[pos + 18 - 1] + map[pos - 1]) / 4);
                  } else {
                    /** @type {number} */
                    enc2 = enc3 = enc4 = startTime = endTime = _m = _ref2 = exps = 15;
                  }
                  /** @type {number} */
                  i = 0;
                  t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                  t.d[t.o++] = 0 + whole_match + p.top[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                  t.d[t.o++] = p.top[i + 3];
                  t.d[t.o++] = p.top[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * enc4 + _ref2;
                  /** @type {number} */
                  t.d[t.o++] = n + m;
                  /** @type {number} */
                  t.d[t.o++] = 1;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 5;
                  t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                  t.d[t.o++] = 0 + whole_match + p.top[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                  t.d[t.o++] = p.top[i + 3];
                  t.d[t.o++] = p.top[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * enc3 + _m;
                  /** @type {number} */
                  t.d[t.o++] = n + m;
                  /** @type {number} */
                  t.d[t.o++] = 1;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 10;
                  t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                  t.d[t.o++] = 0 + whole_match + p.top[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                  t.d[t.o++] = p.top[i + 3];
                  t.d[t.o++] = p.top[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * enc2 + endTime;
                  /** @type {number} */
                  t.d[t.o++] = n + m;
                  /** @type {number} */
                  t.d[t.o++] = 1;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 15;
                  t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                  t.d[t.o++] = 0 + whole_match + p.top[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                  t.d[t.o++] = p.top[i + 3];
                  t.d[t.o++] = p.top[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * enc4 + _ref2;
                  /** @type {number} */
                  t.d[t.o++] = n + m;
                  /** @type {number} */
                  t.d[t.o++] = 1;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 20;
                  t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                  t.d[t.o++] = 0 + whole_match + p.top[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                  t.d[t.o++] = p.top[i + 3];
                  t.d[t.o++] = p.top[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * enc2 + endTime;
                  /** @type {number} */
                  t.d[t.o++] = n + m;
                  /** @type {number} */
                  t.d[t.o++] = 1;
                  t.d[t.o++] = useCnvt;
                  /** @type {number} */
                  i = 25;
                  t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                  t.d[t.o++] = 0 + whole_match + p.top[i + 1];
                  t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                  t.d[t.o++] = p.top[i + 3];
                  t.d[t.o++] = p.top[i + 4];
                  /** @type {number} */
                  t.d[t.o++] = 100 * startTime + exps;
                  /** @type {number} */
                  t.d[t.o++] = n + m;
                  /** @type {number} */
                  t.d[t.o++] = 1;
                  t.d[t.o++] = useCnvt;
                }
              } else {
                if (2 === o.shapeType) {
                  if (target = o.drawLevel, t = tags[target], p = o.shape, to) {
                    /** @type {number} */
                    i = 0;
                    for (;i < p.front.length;i += 5) {
                      t.d[t.o++] = 16 * this.xPos + errStr + p.front[i];
                      t.d[t.o++] = 0 + whole_match + p.front[i + 1];
                      t.d[t.o++] = 16 * this.zPos + r20 + p.front[i + 2];
                      t.d[t.o++] = p.front[i + 3];
                      t.d[t.o++] = p.front[i + 4];
                      t.d[t.o++] = 100 * item + attr;
                      /** @type {number} */
                      t.d[t.o++] = n + 1;
                      /** @type {number} */
                      t.d[t.o++] = 0.8;
                      /** @type {number} */
                      t.d[t.o++] = 0;
                    }
                  }
                  if (from) {
                    /** @type {number} */
                    i = 0;
                    for (;i < p.back.length;i += 5) {
                      t.d[t.o++] = 16 * this.xPos + errStr + p.back[i];
                      t.d[t.o++] = 0 + whole_match + p.back[i + 1];
                      t.d[t.o++] = 16 * this.zPos + r20 + p.back[i + 2];
                      t.d[t.o++] = p.back[i + 3];
                      t.d[t.o++] = p.back[i + 4];
                      t.d[t.o++] = 100 * id + v;
                      /** @type {number} */
                      t.d[t.o++] = n + 2;
                      /** @type {number} */
                      t.d[t.o++] = 0.8;
                      /** @type {number} */
                      t.d[t.o++] = 0;
                    }
                  }
                  if (sx) {
                    /** @type {number} */
                    i = 0;
                    for (;i < p.right.length;i += 5) {
                      t.d[t.o++] = 16 * this.xPos + errStr + p.right[i];
                      t.d[t.o++] = 0 + whole_match + p.right[i + 1];
                      t.d[t.o++] = 16 * this.zPos + r20 + p.right[i + 2];
                      t.d[t.o++] = p.right[i + 3];
                      t.d[t.o++] = p.right[i + 4];
                      t.d[t.o++] = 100 * quote + count;
                      /** @type {number} */
                      t.d[t.o++] = n + 3;
                      /** @type {number} */
                      t.d[t.o++] = 0.8;
                      /** @type {number} */
                      t.d[t.o++] = 0;
                    }
                  }
                  if (sy) {
                    /** @type {number} */
                    i = 0;
                    for (;i < p.left.length;i += 5) {
                      t.d[t.o++] = 16 * this.xPos + errStr + p.left[i];
                      t.d[t.o++] = 0 + whole_match + p.left[i + 1];
                      t.d[t.o++] = 16 * this.zPos + r20 + p.left[i + 2];
                      t.d[t.o++] = p.left[i + 3];
                      t.d[t.o++] = p.left[i + 4];
                      t.d[t.o++] = 100 * value + val;
                      /** @type {number} */
                      t.d[t.o++] = n + 4;
                      /** @type {number} */
                      t.d[t.o++] = 0.8;
                      /** @type {number} */
                      t.d[t.o++] = 0;
                    }
                  }
                } else {
                  if (3 === o.shapeType) {
                    target = o.drawLevel;
                    t = tags[target];
                    p = o.shape;
                    /** @type {number} */
                    item = Math.floor((item + id + quote + value + expires) / 5);
                    /** @type {number} */
                    attr = Math.floor((attr + v + count + val + temp) / 5);
                    /** @type {number} */
                    useCnvt = 0;
                    var oL = o.normal;
                    if (0 < o.useBiomeColor && (useCnvt = this.getBiomeColor(errStr, r20, o.useBiomeColor - 1)), to || (from || (sx || (sy || (sourceSplit || targetSplit))))) {
                      var childKey;
                      for (childKey in p) {
                        /** @type {number} */
                        i = 0;
                        for (;i < p[childKey].length;i += 5) {
                          t.d[t.o++] = 16 * this.xPos + errStr + p[childKey][i];
                          t.d[t.o++] = 0 + whole_match + p[childKey][i + 1];
                          t.d[t.o++] = 16 * this.zPos + r20 + p[childKey][i + 2];
                          t.d[t.o++] = p[childKey][i + 3];
                          t.d[t.o++] = p[childKey][i + 4];
                          /** @type {number} */
                          t.d[t.o++] = 100 * item + attr;
                          /** @type {number} */
                          t.d[t.o++] = n + 0;
                          t.d[t.o++] = oL;
                          t.d[t.o++] = useCnvt;
                        }
                      }
                    }
                  } else {
                    if (4 === o.shapeType) {
                      if (target = o.drawLevel, t = tags[target], 78 === keys[pos] && (o = block[key][1]), p = o.shape, 0 < o.useBiomeColor ? (useCnvt = this.getBiomeColor(errStr, r20, o.useBiomeColor - 1), hasCnvt = this.getBiomeColor1(errStr, r20, o.useBiomeColor - 1), throttling = this.getBiomeColor2(errStr, r20, o.useBiomeColor - 1), more = this.getBiomeColor3(errStr, r20, o.useBiomeColor - 1), getBiomeColor4 = this.getBiomeColor4(errStr, r20, o.useBiomeColor - 1)) : getBiomeColor4 = more = throttling =
                      hasCnvt = useCnvt = 0, to) {
                        if (t = 8 < item && 0 === target ? tags[target + 1] : tags[target], 4 === o.shapeType) {
                          /** @type {number} */
                          i = 0;
                          for (;i < p.front2.length;i += 5) {
                            t.d[t.o++] = 16 * this.xPos + errStr + p.front2[i];
                            t.d[t.o++] = 0 + whole_match + p.front2[i + 1];
                            t.d[t.o++] = 16 * this.zPos + r20 + p.front2[i + 2];
                            t.d[t.o++] = p.front2[i + 3];
                            t.d[t.o++] = p.front2[i + 4];
                            t.d[t.o++] = 100 * item + attr;
                            /** @type {number} */
                            t.d[t.o++] = n + 1;
                            /** @type {number} */
                            t.d[t.o++] = 0.8;
                            t.d[t.o++] = useCnvt;
                          }
                        }
                        /** @type {number} */
                        yy = Math.floor((item + buffer[_i - 18] + buffer[_i - 324 - 18] + buffer[_i - 324]) / 4);
                        /** @type {number} */
                        diff = Math.floor((item + buffer[_i - 324] + buffer[_i - 324 + 18] + buffer[_i + 18]) / 4);
                        /** @type {number} */
                        inputBaseSize = Math.floor((item + buffer[_i + 18] + buffer[_i + 324 + 18] + buffer[_i + 324]) / 4);
                        /** @type {number} */
                        tmp12 = Math.floor((item + buffer[_i + 324] + buffer[_i + 324 - 18] + buffer[_i - 18]) / 4);
                        /** @type {number} */
                        dy = Math.floor((attr + map[_i - 18] + map[_i - 324 - 18] + map[_i - 324]) / 4);
                        /** @type {number} */
                        firstNum = Math.floor((attr + map[_i - 324] + map[_i - 324 + 18] + map[_i + 18]) / 4);
                        /** @type {number} */
                        carry = Math.floor((attr + map[_i + 18] + map[_i + 324 + 18] + map[_i + 324]) / 4);
                        /** @type {number} */
                        z5 = Math.floor((attr + map[_i + 324] + map[_i + 324 - 18] + map[_i - 18]) / 4);
                        /** @type {number} */
                        i = 0;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.front[i];
                        t.d[t.o++] = 0 + whole_match + p.front[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.front[i + 2];
                        t.d[t.o++] = p.front[i + 3];
                        t.d[t.o++] = p.front[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * yy + dy;
                        /** @type {number} */
                        t.d[t.o++] = n + 1;
                        /** @type {number} */
                        t.d[t.o++] = 0.8;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 5;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.front[i];
                        t.d[t.o++] = 0 + whole_match + p.front[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.front[i + 2];
                        t.d[t.o++] = p.front[i + 3];
                        t.d[t.o++] = p.front[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * diff + firstNum;
                        /** @type {number} */
                        t.d[t.o++] = n + 1;
                        /** @type {number} */
                        t.d[t.o++] = 0.8;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 10;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.front[i];
                        t.d[t.o++] = 0 + whole_match + p.front[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.front[i + 2];
                        t.d[t.o++] = p.front[i + 3];
                        t.d[t.o++] = p.front[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * inputBaseSize + carry;
                        /** @type {number} */
                        t.d[t.o++] = n + 1;
                        /** @type {number} */
                        t.d[t.o++] = 0.8;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 15;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.front[i];
                        t.d[t.o++] = 0 + whole_match + p.front[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.front[i + 2];
                        t.d[t.o++] = p.front[i + 3];
                        t.d[t.o++] = p.front[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * yy + dy;
                        /** @type {number} */
                        t.d[t.o++] = n + 1;
                        /** @type {number} */
                        t.d[t.o++] = 0.8;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 20;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.front[i];
                        t.d[t.o++] = 0 + whole_match + p.front[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.front[i + 2];
                        t.d[t.o++] = p.front[i + 3];
                        t.d[t.o++] = p.front[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * inputBaseSize + carry;
                        /** @type {number} */
                        t.d[t.o++] = n + 1;
                        /** @type {number} */
                        t.d[t.o++] = 0.8;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 25;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.front[i];
                        t.d[t.o++] = 0 + whole_match + p.front[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.front[i + 2];
                        t.d[t.o++] = p.front[i + 3];
                        t.d[t.o++] = p.front[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * tmp12 + z5;
                        /** @type {number} */
                        t.d[t.o++] = n + 1;
                        /** @type {number} */
                        t.d[t.o++] = 0.8;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                      }
                      if (from) {
                        if (t = 8 < item && 0 === target ? tags[target + 1] : tags[target], 4 === o.shapeType) {
                          /** @type {number} */
                          i = 0;
                          for (;i < p.back2.length;i += 5) {
                            t.d[t.o++] = 16 * this.xPos + errStr + p.back2[i];
                            t.d[t.o++] = 0 + whole_match + p.back2[i + 1];
                            t.d[t.o++] = 16 * this.zPos + r20 + p.back2[i + 2];
                            t.d[t.o++] = p.back2[i + 3];
                            t.d[t.o++] = p.back2[i + 4];
                            t.d[t.o++] = 100 * id + v;
                            /** @type {number} */
                            t.d[t.o++] = n + 2;
                            /** @type {number} */
                            t.d[t.o++] = 0.8;
                            t.d[t.o++] = useCnvt;
                          }
                        }
                        /** @type {number} */
                        diffCosAngle = Math.floor((id + buffer[k - 18] + buffer[k - 324 - 18] + buffer[k - 324]) / 4);
                        /** @type {number} */
                        tmp10p2 = Math.floor((id + buffer[k - 324] + buffer[k - 324 + 18] + buffer[k + 18]) / 4);
                        /** @type {number} */
                        xx = Math.floor((id + buffer[k + 18] + buffer[k + 324 + 18] + buffer[k + 324]) / 4);
                        /** @type {number} */
                        time = Math.floor((id + buffer[k + 324] + buffer[k + 324 - 18] + buffer[k - 18]) / 4);
                        /** @type {number} */
                        cosAngle = Math.floor((v + map[k - 18] + map[k - 324 - 18] + map[k - 324]) / 4);
                        /** @type {number} */
                        z5p2 = Math.floor((v + map[k - 324] + map[k - 324 + 18] + map[k + 18]) / 4);
                        /** @type {number} */
                        dx = Math.floor((v + map[k + 18] + map[k + 324 + 18] + map[k + 324]) / 4);
                        /** @type {number} */
                        begin = Math.floor((v + map[k + 324] + map[k + 324 - 18] + map[k - 18]) / 4);
                        /** @type {number} */
                        i = 0;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.back[i];
                        t.d[t.o++] = 0 + whole_match + p.back[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.back[i + 2];
                        t.d[t.o++] = p.back[i + 3];
                        t.d[t.o++] = p.back[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * xx + dx;
                        /** @type {number} */
                        t.d[t.o++] = n + 2;
                        /** @type {number} */
                        t.d[t.o++] = 0.8;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 5;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.back[i];
                        t.d[t.o++] = 0 + whole_match + p.back[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.back[i + 2];
                        t.d[t.o++] = p.back[i + 3];
                        t.d[t.o++] = p.back[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * diffCosAngle + cosAngle;
                        /** @type {number} */
                        t.d[t.o++] = n + 2;
                        /** @type {number} */
                        t.d[t.o++] = 0.8;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 10;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.back[i];
                        t.d[t.o++] = 0 + whole_match + p.back[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.back[i + 2];
                        t.d[t.o++] = p.back[i + 3];
                        t.d[t.o++] = p.back[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * time + begin;
                        /** @type {number} */
                        t.d[t.o++] = n + 2;
                        /** @type {number} */
                        t.d[t.o++] = 0.8;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 15;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.back[i];
                        t.d[t.o++] = 0 + whole_match + p.back[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.back[i + 2];
                        t.d[t.o++] = p.back[i + 3];
                        t.d[t.o++] = p.back[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * diffCosAngle + cosAngle;
                        /** @type {number} */
                        t.d[t.o++] = n + 2;
                        /** @type {number} */
                        t.d[t.o++] = 0.8;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 20;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.back[i];
                        t.d[t.o++] = 0 + whole_match + p.back[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.back[i + 2];
                        t.d[t.o++] = p.back[i + 3];
                        t.d[t.o++] = p.back[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * xx + dx;
                        /** @type {number} */
                        t.d[t.o++] = n + 2;
                        /** @type {number} */
                        t.d[t.o++] = 0.8;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 25;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.back[i];
                        t.d[t.o++] = 0 + whole_match + p.back[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.back[i + 2];
                        t.d[t.o++] = p.back[i + 3];
                        t.d[t.o++] = p.back[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * tmp10p2 + z5p2;
                        /** @type {number} */
                        t.d[t.o++] = n + 2;
                        /** @type {number} */
                        t.d[t.o++] = 0.8;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                      }
                      if (sx) {
                        if (t = 8 < item && 0 === target ? tags[target + 1] : tags[target], 4 === o.shapeType) {
                          /** @type {number} */
                          i = 0;
                          for (;i < p.right2.length;i += 5) {
                            t.d[t.o++] = 16 * this.xPos + errStr + p.right2[i];
                            t.d[t.o++] = 0 + whole_match + p.right2[i + 1];
                            t.d[t.o++] = 16 * this.zPos + r20 + p.right2[i + 2];
                            t.d[t.o++] = p.right2[i + 3];
                            t.d[t.o++] = p.right2[i + 4];
                            t.d[t.o++] = 100 * quote + count;
                            /** @type {number} */
                            t.d[t.o++] = n + 3;
                            /** @type {number} */
                            t.d[t.o++] = 0.55;
                            t.d[t.o++] = useCnvt;
                          }
                        }
                        /** @type {number} */
                        firstToken = Math.floor((quote + buffer[index - 1] + buffer[index - 324 - 1] + buffer[index - 324]) / 4);
                        /** @type {number} */
                        cur = Math.floor((quote + buffer[index - 324] + buffer[index - 324 + 1] + buffer[index + 1]) / 4);
                        /** @type {number} */
                        tmp = Math.floor((quote + buffer[index + 1] + buffer[index + 324 + 1] + buffer[index + 324]) / 4);
                        /** @type {number} */
                        elem = Math.floor((quote + buffer[index + 324] + buffer[index + 324 - 1] + buffer[index - 1]) / 4);
                        /** @type {number} */
                        initialMoveX = Math.floor((count + map[index - 1] + map[index - 324 - 1] + map[index - 324]) / 4);
                        /** @type {number} */
                        initialMoveY = Math.floor((count + map[index - 324] + map[index - 324 + 1] + map[index + 1]) / 4);
                        /** @type {number} */
                        moveX = Math.floor((count + map[index + 1] + map[index + 324 + 1] + map[index + 324]) / 4);
                        /** @type {number} */
                        moveY = Math.floor((count + map[index + 324] + map[index + 324 - 1] + map[index - 1]) / 4);
                        /** @type {number} */
                        i = 0;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.right[i];
                        t.d[t.o++] = 0 + whole_match + p.right[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.right[i + 2];
                        t.d[t.o++] = p.right[i + 3];
                        t.d[t.o++] = p.right[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * tmp + moveX;
                        /** @type {number} */
                        t.d[t.o++] = n + 3;
                        /** @type {number} */
                        t.d[t.o++] = 0.55;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 5;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.right[i];
                        t.d[t.o++] = 0 + whole_match + p.right[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.right[i + 2];
                        t.d[t.o++] = p.right[i + 3];
                        t.d[t.o++] = p.right[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * firstToken + initialMoveX;
                        /** @type {number} */
                        t.d[t.o++] = n + 3;
                        /** @type {number} */
                        t.d[t.o++] = 0.55;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 10;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.right[i];
                        t.d[t.o++] = 0 + whole_match + p.right[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.right[i + 2];
                        t.d[t.o++] = p.right[i + 3];
                        t.d[t.o++] = p.right[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * elem + moveY;
                        /** @type {number} */
                        t.d[t.o++] = n + 3;
                        /** @type {number} */
                        t.d[t.o++] = 0.55;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 15;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.right[i];
                        t.d[t.o++] = 0 + whole_match + p.right[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.right[i + 2];
                        t.d[t.o++] = p.right[i + 3];
                        t.d[t.o++] = p.right[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * tmp + moveX;
                        /** @type {number} */
                        t.d[t.o++] = n + 3;
                        /** @type {number} */
                        t.d[t.o++] = 0.55;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 20;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.right[i];
                        t.d[t.o++] = 0 + whole_match + p.right[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.right[i + 2];
                        t.d[t.o++] = p.right[i + 3];
                        t.d[t.o++] = p.right[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * cur + initialMoveY;
                        /** @type {number} */
                        t.d[t.o++] = n + 3;
                        /** @type {number} */
                        t.d[t.o++] = 0.55;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 25;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.right[i];
                        t.d[t.o++] = 0 + whole_match + p.right[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.right[i + 2];
                        t.d[t.o++] = p.right[i + 3];
                        t.d[t.o++] = p.right[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * firstToken + initialMoveX;
                        /** @type {number} */
                        t.d[t.o++] = n + 3;
                        /** @type {number} */
                        t.d[t.o++] = 0.55;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                      }
                      if (sy) {
                        if (t = 8 < item && 0 === target ? tags[target + 1] : tags[target], 4 === o.shapeType) {
                          /** @type {number} */
                          i = 0;
                          for (;i < p.left2.length;i += 5) {
                            t.d[t.o++] = 16 * this.xPos + errStr + p.left2[i];
                            t.d[t.o++] = 0 + whole_match + p.left2[i + 1];
                            t.d[t.o++] = 16 * this.zPos + r20 + p.left2[i + 2];
                            t.d[t.o++] = p.left2[i + 3];
                            t.d[t.o++] = p.left2[i + 4];
                            t.d[t.o++] = 100 * value + val;
                            /** @type {number} */
                            t.d[t.o++] = n + 4;
                            /** @type {number} */
                            t.d[t.o++] = 0.55;
                            t.d[t.o++] = useCnvt;
                          }
                        }
                        /** @type {number} */
                        stack = Math.floor((value + buffer[start - 1] + buffer[start - 324 - 1] + buffer[start - 324]) / 4);
                        /** @type {number} */
                        memory = Math.floor((value + buffer[start - 324] + buffer[start - 324 + 1] + buffer[start + 1]) / 4);
                        /** @type {number} */
                        inPseudo = Math.floor((value + buffer[start + 1] + buffer[start + 324 + 1] + buffer[start + 324]) / 4);
                        /** @type {number} */
                        inParens = Math.floor((value + buffer[start + 324] + buffer[start + 324 - 1] + buffer[start - 1]) / 4);
                        /** @type {number} */
                        failed = Math.floor((val + map[start - 1] + map[start - 324 - 1] + map[start - 324]) / 4);
                        /** @type {number} */
                        total = Math.floor((val + map[start - 324] + map[start - 324 + 1] + map[start + 1]) / 4);
                        /** @type {number} */
                        failures = Math.floor((val + map[start + 1] + map[start + 324 + 1] + map[start + 324]) / 4);
                        /** @type {number} */
                        Aa = Math.floor((val + map[start + 324] + map[start + 324 - 1] + map[start - 1]) / 4);
                        /** @type {number} */
                        i = 0;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.left[i];
                        t.d[t.o++] = 0 + whole_match + p.left[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.left[i + 2];
                        t.d[t.o++] = p.left[i + 3];
                        t.d[t.o++] = p.left[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * inParens + Aa;
                        /** @type {number} */
                        t.d[t.o++] = n + 4;
                        /** @type {number} */
                        t.d[t.o++] = 0.55;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 5;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.left[i];
                        t.d[t.o++] = 0 + whole_match + p.left[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.left[i + 2];
                        t.d[t.o++] = p.left[i + 3];
                        t.d[t.o++] = p.left[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * stack + failed;
                        /** @type {number} */
                        t.d[t.o++] = n + 4;
                        /** @type {number} */
                        t.d[t.o++] = 0.55;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 10;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.left[i];
                        t.d[t.o++] = 0 + whole_match + p.left[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.left[i + 2];
                        t.d[t.o++] = p.left[i + 3];
                        t.d[t.o++] = p.left[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * memory + total;
                        /** @type {number} */
                        t.d[t.o++] = n + 4;
                        /** @type {number} */
                        t.d[t.o++] = 0.55;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 15;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.left[i];
                        t.d[t.o++] = 0 + whole_match + p.left[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.left[i + 2];
                        t.d[t.o++] = p.left[i + 3];
                        t.d[t.o++] = p.left[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * inPseudo + failures;
                        /** @type {number} */
                        t.d[t.o++] = n + 4;
                        /** @type {number} */
                        t.d[t.o++] = 0.55;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 20;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.left[i];
                        t.d[t.o++] = 0 + whole_match + p.left[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.left[i + 2];
                        t.d[t.o++] = p.left[i + 3];
                        t.d[t.o++] = p.left[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * inParens + Aa;
                        /** @type {number} */
                        t.d[t.o++] = n + 4;
                        /** @type {number} */
                        t.d[t.o++] = 0.55;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 25;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.left[i];
                        t.d[t.o++] = 0 + whole_match + p.left[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.left[i + 2];
                        t.d[t.o++] = p.left[i + 3];
                        t.d[t.o++] = p.left[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * memory + total;
                        /** @type {number} */
                        t.d[t.o++] = n + 4;
                        /** @type {number} */
                        t.d[t.o++] = 0.55;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                      }
                      if (targetSplit) {
                        t = tags[target];
                        /** @type {number} */
                        cycle = Math.floor((current + buffer[x - 1] + buffer[x - 18 - 1] + buffer[x - 18]) / 4);
                        /** @type {number} */
                        visited = Math.floor((current + buffer[x - 18] + buffer[x - 18 + 1] + buffer[x + 1]) / 4);
                        /** @type {number} */
                        c = Math.floor((current + buffer[x + 1] + buffer[x + 18 + 1] + buffer[x + 18]) / 4);
                        /** @type {number} */
                        maxX = Math.floor((current + buffer[x + 18] + buffer[x + 18 - 1] + buffer[x - 1]) / 4);
                        /** @type {number} */
                        maxY = Math.floor((row + map[x - 1] + map[x - 18 - 1] + map[x - 18]) / 4);
                        /** @type {number} */
                        g = Math.floor((row + map[x - 18] + map[x - 18 + 1] + map[x + 1]) / 4);
                        /** @type {number} */
                        b = Math.floor((row + map[x + 1] + map[x + 18 + 1] + map[x + 18]) / 4);
                        /** @type {number} */
                        intercept = Math.floor((row + map[x + 18] + map[x + 18 - 1] + map[x - 1]) / 4);
                        /** @type {number} */
                        i = 0;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.bottom[i];
                        t.d[t.o++] = 0 + whole_match + p.bottom[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                        t.d[t.o++] = p.bottom[i + 3];
                        t.d[t.o++] = p.bottom[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * c + b;
                        /** @type {number} */
                        t.d[t.o++] = n + 5;
                        /** @type {number} */
                        t.d[t.o++] = 1;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 5;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.bottom[i];
                        t.d[t.o++] = 0 + whole_match + p.bottom[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                        t.d[t.o++] = p.bottom[i + 3];
                        t.d[t.o++] = p.bottom[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * cycle + maxY;
                        /** @type {number} */
                        t.d[t.o++] = n + 5;
                        /** @type {number} */
                        t.d[t.o++] = 1;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 10;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.bottom[i];
                        t.d[t.o++] = 0 + whole_match + p.bottom[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                        t.d[t.o++] = p.bottom[i + 3];
                        t.d[t.o++] = p.bottom[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * visited + g;
                        /** @type {number} */
                        t.d[t.o++] = n + 5;
                        /** @type {number} */
                        t.d[t.o++] = 1;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 15;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.bottom[i];
                        t.d[t.o++] = 0 + whole_match + p.bottom[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                        t.d[t.o++] = p.bottom[i + 3];
                        t.d[t.o++] = p.bottom[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * c + b;
                        /** @type {number} */
                        t.d[t.o++] = n + 5;
                        /** @type {number} */
                        t.d[t.o++] = 1;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 20;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.bottom[i];
                        t.d[t.o++] = 0 + whole_match + p.bottom[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                        t.d[t.o++] = p.bottom[i + 3];
                        t.d[t.o++] = p.bottom[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * maxX + intercept;
                        /** @type {number} */
                        t.d[t.o++] = n + 5;
                        /** @type {number} */
                        t.d[t.o++] = 1;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                        /** @type {number} */
                        i = 25;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.bottom[i];
                        t.d[t.o++] = 0 + whole_match + p.bottom[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                        t.d[t.o++] = p.bottom[i + 3];
                        t.d[t.o++] = p.bottom[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * cycle + maxY;
                        /** @type {number} */
                        t.d[t.o++] = n + 5;
                        /** @type {number} */
                        t.d[t.o++] = 1;
                        /** @type {number} */
                        t.d[t.o++] = 0;
                      }
                      if (sourceSplit) {
                        t = 8 < expires && 0 === target ? tags[target + 1] : tags[target];
                        /** @type {number} */
                        enc2 = Math.floor((expires + buffer[pos - 1] + buffer[pos - 18 - 1] + buffer[pos - 18]) / 4);
                        /** @type {number} */
                        enc3 = Math.floor((expires + buffer[pos - 18] + buffer[pos - 18 + 1] + buffer[pos + 1]) / 4);
                        /** @type {number} */
                        enc4 = Math.floor((expires + buffer[pos + 1] + buffer[pos + 18 + 1] + buffer[pos + 18]) / 4);
                        /** @type {number} */
                        startTime = Math.floor((expires + buffer[pos + 18] + buffer[pos + 18 - 1] + buffer[pos - 1]) / 4);
                        /** @type {number} */
                        endTime = Math.floor((temp + map[pos - 1] + map[pos - 18 - 1] + map[pos - 18]) / 4);
                        /** @type {number} */
                        _m = Math.floor((temp + map[pos - 18] + map[pos - 18 + 1] + map[pos + 1]) / 4);
                        /** @type {number} */
                        _ref2 = Math.floor((temp + map[pos + 1] + map[pos + 18 + 1] + map[pos + 18]) / 4);
                        /** @type {number} */
                        exps = Math.floor((temp + map[pos + 18] + map[pos + 18 - 1] + map[pos - 1]) / 4);
                        /** @type {number} */
                        i = 0;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                        t.d[t.o++] = 0 + whole_match + p.top[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                        t.d[t.o++] = p.top[i + 3];
                        t.d[t.o++] = p.top[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * enc4 + _ref2;
                        /** @type {number} */
                        t.d[t.o++] = n + 6;
                        /** @type {number} */
                        t.d[t.o++] = 1;
                        /** @type {number} */
                        t.d[t.o++] = more;
                        /** @type {number} */
                        i = 5;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                        t.d[t.o++] = 0 + whole_match + p.top[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                        t.d[t.o++] = p.top[i + 3];
                        t.d[t.o++] = p.top[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * enc3 + _m;
                        /** @type {number} */
                        t.d[t.o++] = n + 6;
                        /** @type {number} */
                        t.d[t.o++] = 1;
                        /** @type {number} */
                        t.d[t.o++] = throttling;
                        /** @type {number} */
                        i = 10;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                        t.d[t.o++] = 0 + whole_match + p.top[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                        t.d[t.o++] = p.top[i + 3];
                        t.d[t.o++] = p.top[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * enc2 + endTime;
                        /** @type {number} */
                        t.d[t.o++] = n + 6;
                        /** @type {number} */
                        t.d[t.o++] = 1;
                        /** @type {number} */
                        t.d[t.o++] = hasCnvt;
                        /** @type {number} */
                        i = 15;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                        t.d[t.o++] = 0 + whole_match + p.top[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                        t.d[t.o++] = p.top[i + 3];
                        t.d[t.o++] = p.top[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * enc4 + _ref2;
                        /** @type {number} */
                        t.d[t.o++] = n + 6;
                        /** @type {number} */
                        t.d[t.o++] = 1;
                        /** @type {number} */
                        t.d[t.o++] = more;
                        /** @type {number} */
                        i = 20;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                        t.d[t.o++] = 0 + whole_match + p.top[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                        t.d[t.o++] = p.top[i + 3];
                        t.d[t.o++] = p.top[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * enc2 + endTime;
                        /** @type {number} */
                        t.d[t.o++] = n + 6;
                        /** @type {number} */
                        t.d[t.o++] = 1;
                        /** @type {number} */
                        t.d[t.o++] = hasCnvt;
                        /** @type {number} */
                        i = 25;
                        t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                        t.d[t.o++] = 0 + whole_match + p.top[i + 1];
                        t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                        t.d[t.o++] = p.top[i + 3];
                        t.d[t.o++] = p.top[i + 4];
                        /** @type {number} */
                        t.d[t.o++] = 100 * startTime + exps;
                        /** @type {number} */
                        t.d[t.o++] = n + 6;
                        /** @type {number} */
                        t.d[t.o++] = 1;
                        /** @type {number} */
                        t.d[t.o++] = getBiomeColor4;
                      }
                    } else {
                      if (8 === o.shapeType) {
                        target = o.drawLevel;
                        t = tags[target];
                        p = o.shape;
                        /** @type {number} */
                        useCnvt = 0;
                        if (0 < o.useBiomeColor) {
                          useCnvt = this.getBiomeColor(errStr, r20, o.useBiomeColor - 1);
                        }
                        /** @type {string} */
                        var sum = "";
                        sum = sum + a[j];
                        sum = type === string ? sum + a[start] : sum + "x";
                        sum = type === search ? sum + a[index] : sum + "x";
                        sum = type === tag ? sum + a[_i] : sum + "x";
                        sum = type === array ? sum + a[k] : sum + "x";
                        /** @type {number} */
                        var Fb = 0;
                        var body = Chunk.stairsData[sum];
                        if (void 0 !== body && (p = 3 < a[j] ? block[key][9].shape : block[key][8].shape, Fb = 1), to) {
                          t = 8 < item && 0 === target ? tags[target + 1] : tags[target];
                          /** @type {number} */
                          i = 0;
                          for (;i < p.front.length;i += 5) {
                            t.d[t.o++] = 16 * this.xPos + errStr + p.front[i];
                            t.d[t.o++] = 0 + whole_match + p.front[i + 1];
                            t.d[t.o++] = 16 * this.zPos + r20 + p.front[i + 2];
                            t.d[t.o++] = p.front[i + 3];
                            t.d[t.o++] = p.front[i + 4];
                            t.d[t.o++] = 100 * item + attr;
                            /** @type {number} */
                            t.d[t.o++] = n + 1;
                            /** @type {number} */
                            t.d[t.o++] = 0.8;
                            t.d[t.o++] = useCnvt;
                          }
                        }
                        if (from) {
                          t = 8 < id && 0 === target ? tags[target + 1] : tags[target];
                          /** @type {number} */
                          i = 0;
                          for (;i < p.back.length;i += 5) {
                            t.d[t.o++] = 16 * this.xPos + errStr + p.back[i];
                            t.d[t.o++] = 0 + whole_match + p.back[i + 1];
                            t.d[t.o++] = 16 * this.zPos + r20 + p.back[i + 2];
                            t.d[t.o++] = p.back[i + 3];
                            t.d[t.o++] = p.back[i + 4];
                            t.d[t.o++] = 100 * id + v;
                            /** @type {number} */
                            t.d[t.o++] = n + 2;
                            /** @type {number} */
                            t.d[t.o++] = 0.8;
                            t.d[t.o++] = useCnvt;
                          }
                        }
                        if (sx) {
                          t = 8 < quote && 0 === target ? tags[target + 1] : tags[target];
                          /** @type {number} */
                          i = 0;
                          for (;i < p.right.length;i += 5) {
                            t.d[t.o++] = 16 * this.xPos + errStr + p.right[i];
                            t.d[t.o++] = 0 + whole_match + p.right[i + 1];
                            t.d[t.o++] = 16 * this.zPos + r20 + p.right[i + 2];
                            t.d[t.o++] = p.right[i + 3];
                            t.d[t.o++] = p.right[i + 4];
                            t.d[t.o++] = 100 * quote + count;
                            /** @type {number} */
                            t.d[t.o++] = n + 3;
                            /** @type {number} */
                            t.d[t.o++] = 0.55;
                            t.d[t.o++] = useCnvt;
                          }
                        }
                        if (sy) {
                          t = 8 < value && 0 === target ? tags[target + 1] : tags[target];
                          /** @type {number} */
                          i = 0;
                          for (;i < p.left.length;i += 5) {
                            t.d[t.o++] = 16 * this.xPos + errStr + p.left[i];
                            t.d[t.o++] = 0 + whole_match + p.left[i + 1];
                            t.d[t.o++] = 16 * this.zPos + r20 + p.left[i + 2];
                            t.d[t.o++] = p.left[i + 3];
                            t.d[t.o++] = p.left[i + 4];
                            t.d[t.o++] = 100 * value + val;
                            /** @type {number} */
                            t.d[t.o++] = n + 4;
                            /** @type {number} */
                            t.d[t.o++] = 0.55;
                            t.d[t.o++] = useCnvt;
                          }
                        }
                        if (targetSplit) {
                          t = tags[target];
                          /** @type {number} */
                          i = 0;
                          for (;i < p.bottom.length;i += 5) {
                            t.d[t.o++] = 16 * this.xPos + errStr + p.bottom[i];
                            t.d[t.o++] = 0 + whole_match + p.bottom[i + 1];
                            t.d[t.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                            t.d[t.o++] = p.bottom[i + 3];
                            t.d[t.o++] = p.bottom[i + 4];
                            t.d[t.o++] = 100 * current + row;
                            /** @type {number} */
                            t.d[t.o++] = n + 5;
                            /** @type {number} */
                            t.d[t.o++] = 0.3;
                            t.d[t.o++] = useCnvt;
                          }
                        }
                        if (sourceSplit) {
                          t = 8 < expires && 0 === target ? tags[target + 1] : tags[target];
                          /** @type {number} */
                          i = 0;
                          for (;i < p.top.length;i += 5) {
                            t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                            t.d[t.o++] = 0 + whole_match + p.top[i + 1];
                            t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                            t.d[t.o++] = p.top[i + 3];
                            t.d[t.o++] = p.top[i + 4];
                            t.d[t.o++] = 100 * expires + temp;
                            /** @type {number} */
                            t.d[t.o++] = n + 6;
                            /** @type {number} */
                            t.d[t.o++] = 1;
                            t.d[t.o++] = useCnvt;
                          }
                        }
                        if (1 === Fb) {
                          p = block[key][10].shape;
                          /** @type {number} */
                          var lc = 0;
                          /** @type {number} */
                          var ob = 0;
                          if (3 < a[j]) {
                            /** @type {number} */
                            ob = -0.5;
                          }
                          /** @type {number} */
                          var cc = 0;
                          /** @type {number} */
                          var rvar = 0;
                          for (;4 > rvar;rvar++) {
                            if (0 !== body.charCodeAt(rvar) - 48) {
                              if (lc = rvar % 2 / 2, cc = 1 < rvar ? 0.5 : 0, to) {
                                t = 8 < item && 0 === target ? tags[target + 1] : tags[target];
                                /** @type {number} */
                                i = 0;
                                for (;i < p.front.length;i += 5) {
                                  t.d[t.o++] = lc + 16 * this.xPos + errStr + p.front[i];
                                  t.d[t.o++] = ob + 0 + whole_match + p.front[i + 1];
                                  t.d[t.o++] = cc + 16 * this.zPos + r20 + p.front[i + 2];
                                  t.d[t.o++] = p.front[i + 3];
                                  t.d[t.o++] = p.front[i + 4];
                                  t.d[t.o++] = 100 * item + attr;
                                  /** @type {number} */
                                  t.d[t.o++] = n + 1;
                                  /** @type {number} */
                                  t.d[t.o++] = 0.8;
                                  t.d[t.o++] = useCnvt;
                                }
                              }
                              if (from) {
                                t = 8 < id && 0 === target ? tags[target + 1] : tags[target];
                                /** @type {number} */
                                i = 0;
                                for (;i < p.back.length;i += 5) {
                                  t.d[t.o++] = lc + 16 * this.xPos + errStr + p.back[i];
                                  t.d[t.o++] = ob + 0 + whole_match + p.back[i + 1];
                                  t.d[t.o++] = cc + 16 * this.zPos + r20 + p.back[i + 2];
                                  t.d[t.o++] = p.back[i + 3];
                                  t.d[t.o++] = p.back[i + 4];
                                  t.d[t.o++] = 100 * id + v;
                                  /** @type {number} */
                                  t.d[t.o++] = n + 2;
                                  /** @type {number} */
                                  t.d[t.o++] = 0.8;
                                  t.d[t.o++] = useCnvt;
                                }
                              }
                              if (sx) {
                                t = 8 < quote && 0 === target ? tags[target + 1] : tags[target];
                                /** @type {number} */
                                i = 0;
                                for (;i < p.right.length;i += 5) {
                                  t.d[t.o++] = lc + 16 * this.xPos + errStr + p.right[i];
                                  t.d[t.o++] = ob + 0 + whole_match + p.right[i + 1];
                                  t.d[t.o++] = cc + 16 * this.zPos + r20 + p.right[i + 2];
                                  t.d[t.o++] = p.right[i + 3];
                                  t.d[t.o++] = p.right[i + 4];
                                  t.d[t.o++] = 100 * quote + count;
                                  /** @type {number} */
                                  t.d[t.o++] = n + 3;
                                  /** @type {number} */
                                  t.d[t.o++] = 0.55;
                                  t.d[t.o++] = useCnvt;
                                }
                              }
                              if (sy) {
                                t = 8 < value && 0 === target ? tags[target + 1] : tags[target];
                                /** @type {number} */
                                i = 0;
                                for (;i < p.left.length;i += 5) {
                                  t.d[t.o++] = lc + 16 * this.xPos + errStr + p.left[i];
                                  t.d[t.o++] = ob + 0 + whole_match + p.left[i + 1];
                                  t.d[t.o++] = cc + 16 * this.zPos + r20 + p.left[i + 2];
                                  t.d[t.o++] = p.left[i + 3];
                                  t.d[t.o++] = p.left[i + 4];
                                  t.d[t.o++] = 100 * value + val;
                                  /** @type {number} */
                                  t.d[t.o++] = n + 4;
                                  /** @type {number} */
                                  t.d[t.o++] = 0.55;
                                  t.d[t.o++] = useCnvt;
                                }
                              }
                              if (targetSplit) {
                                t = tags[target];
                                /** @type {number} */
                                i = 0;
                                for (;i < p.bottom.length;i += 5) {
                                  t.d[t.o++] = lc + 16 * this.xPos + errStr + p.bottom[i];
                                  t.d[t.o++] = ob + 0 + whole_match + p.bottom[i + 1];
                                  t.d[t.o++] = cc + 16 * this.zPos + r20 + p.bottom[i + 2];
                                  t.d[t.o++] = p.bottom[i + 3];
                                  t.d[t.o++] = p.bottom[i + 4];
                                  t.d[t.o++] = 100 * current + row;
                                  /** @type {number} */
                                  t.d[t.o++] = n + 5;
                                  /** @type {number} */
                                  t.d[t.o++] = 0.3;
                                  t.d[t.o++] = useCnvt;
                                }
                              }
                              if (sourceSplit) {
                                t = 8 < expires && 0 === target ? tags[target + 1] : tags[target];
                                /** @type {number} */
                                i = 0;
                                for (;i < p.top.length;i += 5) {
                                  t.d[t.o++] = lc + 16 * this.xPos + errStr + p.top[i];
                                  t.d[t.o++] = ob + 0 + whole_match + p.top[i + 1];
                                  t.d[t.o++] = cc + 16 * this.zPos + r20 + p.top[i + 2];
                                  t.d[t.o++] = p.top[i + 3];
                                  t.d[t.o++] = p.top[i + 4];
                                  t.d[t.o++] = 100 * expires + temp;
                                  /** @type {number} */
                                  t.d[t.o++] = n + 6;
                                  /** @type {number} */
                                  t.d[t.o++] = 1;
                                  t.d[t.o++] = useCnvt;
                                }
                              }
                            }
                          }
                        }
                      } else {
                        if (5 === o.shapeType) {
                          if (to || (from || (sx || (sy || (sourceSplit || targetSplit))))) {
                            target = o.drawLevel;
                            t = tags[target];
                            p = o.shape;
                            /** @type {number} */
                            useCnvt = 0;
                            if (0 < o.useBiomeColor) {
                              useCnvt = this.getBiomeColor(errStr, r20, o.useBiomeColor - 1);
                            }
                            t = 8 < item && 0 === target ? tags[target + 1] : tags[target];
                            /** @type {number} */
                            i = 0;
                            for (;i < p.front.length;i += 5) {
                              if (0 === i % 30) {
                                if ((60 === i || 120 === i) && (type !== string && 1 !== string)) {
                                  i += 25;
                                  continue;
                                }
                                if ((30 === i || 90 === i) && (type !== search && 1 !== search)) {
                                  i += 25;
                                  continue;
                                }
                              }
                              t.d[t.o++] = 16 * this.xPos + errStr + p.front[i];
                              t.d[t.o++] = 0 + whole_match + p.front[i + 1];
                              t.d[t.o++] = 16 * this.zPos + r20 + p.front[i + 2];
                              t.d[t.o++] = p.front[i + 3];
                              t.d[t.o++] = p.front[i + 4];
                              t.d[t.o++] = 100 * item + attr;
                              /** @type {number} */
                              t.d[t.o++] = n + 1;
                              /** @type {number} */
                              t.d[t.o++] = 0.8;
                              t.d[t.o++] = useCnvt;
                            }
                            t = 8 < id && 0 === target ? tags[target + 1] : tags[target];
                            /** @type {number} */
                            i = 0;
                            for (;i < p.back.length;i += 5) {
                              if (0 === i % 30) {
                                if ((60 === i || 120 === i) && (type !== string && 1 !== string)) {
                                  i += 25;
                                  continue;
                                }
                                if ((30 === i || 90 === i) && (type !== search && 1 !== search)) {
                                  i += 25;
                                  continue;
                                }
                              }
                              t.d[t.o++] = 16 * this.xPos + errStr + p.back[i];
                              t.d[t.o++] = 0 + whole_match + p.back[i + 1];
                              t.d[t.o++] = 16 * this.zPos + r20 + p.back[i + 2];
                              t.d[t.o++] = p.back[i + 3];
                              t.d[t.o++] = p.back[i + 4];
                              t.d[t.o++] = 100 * id + v;
                              /** @type {number} */
                              t.d[t.o++] = n + 2;
                              /** @type {number} */
                              t.d[t.o++] = 0.8;
                              t.d[t.o++] = useCnvt;
                            }
                            t = 8 < quote && 0 === target ? tags[target + 1] : tags[target];
                            /** @type {number} */
                            i = 0;
                            for (;i < p.right.length;i += 5) {
                              if (0 === i % 30) {
                                if ((30 === i || 90 === i) && (type !== tag && 1 !== tag)) {
                                  i += 25;
                                  continue;
                                }
                                if ((60 === i || 120 === i) && (type !== array && 1 !== array)) {
                                  i += 25;
                                  continue;
                                }
                              }
                              t.d[t.o++] = 16 * this.xPos + errStr + p.right[i];
                              t.d[t.o++] = 0 + whole_match + p.right[i + 1];
                              t.d[t.o++] = 16 * this.zPos + r20 + p.right[i + 2];
                              t.d[t.o++] = p.right[i + 3];
                              t.d[t.o++] = p.right[i + 4];
                              t.d[t.o++] = 100 * quote + count;
                              /** @type {number} */
                              t.d[t.o++] = n + 3;
                              /** @type {number} */
                              t.d[t.o++] = 0.55;
                              t.d[t.o++] = useCnvt;
                            }
                            t = 8 < value && 0 === target ? tags[target + 1] : tags[target];
                            /** @type {number} */
                            i = 0;
                            for (;i < p.left.length;i += 5) {
                              if (0 === i % 30) {
                                if ((30 === i || 90 === i) && (type !== tag && 1 !== tag)) {
                                  i += 25;
                                  continue;
                                }
                                if ((60 === i || 120 === i) && (type !== array && 1 !== array)) {
                                  i += 25;
                                  continue;
                                }
                              }
                              t.d[t.o++] = 16 * this.xPos + errStr + p.left[i];
                              t.d[t.o++] = 0 + whole_match + p.left[i + 1];
                              t.d[t.o++] = 16 * this.zPos + r20 + p.left[i + 2];
                              t.d[t.o++] = p.left[i + 3];
                              t.d[t.o++] = p.left[i + 4];
                              t.d[t.o++] = 100 * value + val;
                              /** @type {number} */
                              t.d[t.o++] = n + 4;
                              /** @type {number} */
                              t.d[t.o++] = 0.55;
                              t.d[t.o++] = useCnvt;
                            }
                            t = tags[target];
                            /** @type {number} */
                            i = 0;
                            for (;i < p.bottom.length;i += 5) {
                              if (0 === i % 30) {
                                if ((30 === i || 150 === i) && (type !== search && 1 !== search)) {
                                  i += 25;
                                  continue;
                                }
                                if ((60 === i || 180 === i) && (type !== string && 1 !== string)) {
                                  i += 25;
                                  continue;
                                }
                                if ((90 === i || 210 === i) && (type !== tag && 1 !== tag)) {
                                  i += 25;
                                  continue;
                                }
                                if ((120 === i || 240 === i) && (type !== array && 1 !== array)) {
                                  i += 25;
                                  continue;
                                }
                              }
                              t.d[t.o++] = 16 * this.xPos + errStr + p.bottom[i];
                              t.d[t.o++] = 0 + whole_match + p.bottom[i + 1];
                              t.d[t.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                              t.d[t.o++] = p.bottom[i + 3];
                              t.d[t.o++] = p.bottom[i + 4];
                              t.d[t.o++] = 100 * current + row;
                              /** @type {number} */
                              t.d[t.o++] = n + 5;
                              /** @type {number} */
                              t.d[t.o++] = 0.3;
                              t.d[t.o++] = useCnvt;
                            }
                            t = 8 < expires && 0 === target ? tags[target + 1] : tags[target];
                            /** @type {number} */
                            i = 0;
                            for (;i < p.top.length;i += 5) {
                              if (0 === i % 30) {
                                if ((30 === i || 150 === i) && (type !== search && 1 !== search)) {
                                  i += 25;
                                  continue;
                                }
                                if ((60 === i || 180 === i) && (type !== string && 1 !== string)) {
                                  i += 25;
                                  continue;
                                }
                                if ((90 === i || 210 === i) && (type !== tag && 1 !== tag)) {
                                  i += 25;
                                  continue;
                                }
                                if ((120 === i || 240 === i) && (type !== array && 1 !== array)) {
                                  i += 25;
                                  continue;
                                }
                              }
                              t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                              t.d[t.o++] = 0 + whole_match + p.top[i + 1];
                              t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                              t.d[t.o++] = p.top[i + 3];
                              t.d[t.o++] = p.top[i + 4];
                              t.d[t.o++] = 100 * expires + temp;
                              /** @type {number} */
                              t.d[t.o++] = n + 6;
                              /** @type {number} */
                              t.d[t.o++] = 1;
                              t.d[t.o++] = useCnvt;
                            }
                          }
                        } else {
                          if (6 === o.shapeType) {
                            if (target = o.drawLevel, t = tags[target], p = o.shape, useCnvt = 0, 0 < o.useBiomeColor && (useCnvt = this.getBiomeColor(errStr, r20, o.useBiomeColor - 1)), to || (from || (sx || (sy || (targetSplit || sourceSplit))))) {
                              if (5 === part) {
                                t = 8 < item && 0 === target ? tags[target + 1] : tags[target];
                                /** @type {number} */
                                i = 0;
                                for (;i < p.front.length;i += 5) {
                                  t.d[t.o++] = 16 * this.xPos + errStr + p.front[i];
                                  t.d[t.o++] = 0 + whole_match + p.front[i + 1];
                                  t.d[t.o++] = 16 * this.zPos + r20 + p.front[i + 2];
                                  t.d[t.o++] = p.front[i + 3];
                                  t.d[t.o++] = p.front[i + 4];
                                  t.d[t.o++] = 100 * item + attr;
                                  /** @type {number} */
                                  t.d[t.o++] = n + 1;
                                  /** @type {number} */
                                  t.d[t.o++] = 0.8;
                                  t.d[t.o++] = useCnvt;
                                }
                              }
                              if (4 === part) {
                                t = 8 < id && 0 === target ? tags[target + 1] : tags[target];
                                /** @type {number} */
                                i = 0;
                                for (;i < p.back.length;i += 5) {
                                  t.d[t.o++] = 16 * this.xPos + errStr + p.back[i];
                                  t.d[t.o++] = 0 + whole_match + p.back[i + 1];
                                  t.d[t.o++] = 16 * this.zPos + r20 + p.back[i + 2];
                                  t.d[t.o++] = p.back[i + 3];
                                  t.d[t.o++] = p.back[i + 4];
                                  t.d[t.o++] = 100 * id + v;
                                  /** @type {number} */
                                  t.d[t.o++] = n + 2;
                                  /** @type {number} */
                                  t.d[t.o++] = 0.8;
                                  t.d[t.o++] = useCnvt;
                                }
                              }
                              if (3 === part) {
                                t = 8 < quote && 0 === target ? tags[target + 1] : tags[target];
                                /** @type {number} */
                                i = 0;
                                for (;i < p.right.length;i += 5) {
                                  t.d[t.o++] = 16 * this.xPos + errStr + p.right[i];
                                  t.d[t.o++] = 0 + whole_match + p.right[i + 1];
                                  t.d[t.o++] = 16 * this.zPos + r20 + p.right[i + 2];
                                  t.d[t.o++] = p.right[i + 3];
                                  t.d[t.o++] = p.right[i + 4];
                                  t.d[t.o++] = 100 * quote + count;
                                  /** @type {number} */
                                  t.d[t.o++] = n + 3;
                                  /** @type {number} */
                                  t.d[t.o++] = 0.55;
                                  t.d[t.o++] = useCnvt;
                                }
                              }
                              if (2 === part) {
                                t = 8 < value && 0 === target ? tags[target + 1] : tags[target];
                                /** @type {number} */
                                i = 0;
                                for (;i < p.left.length;i += 5) {
                                  t.d[t.o++] = 16 * this.xPos + errStr + p.left[i];
                                  t.d[t.o++] = 0 + whole_match + p.left[i + 1];
                                  t.d[t.o++] = 16 * this.zPos + r20 + p.left[i + 2];
                                  t.d[t.o++] = p.left[i + 3];
                                  t.d[t.o++] = p.left[i + 4];
                                  t.d[t.o++] = 100 * value + val;
                                  /** @type {number} */
                                  t.d[t.o++] = n + 4;
                                  /** @type {number} */
                                  t.d[t.o++] = 0.55;
                                  t.d[t.o++] = useCnvt;
                                }
                              }
                            }
                          } else {
                            if (9 === o.shapeType) {
                              target = o.drawLevel;
                              t = tags[target];
                              p = o.shape;
                              /** @type {number} */
                              useCnvt = 0;
                              if (0 < o.useBiomeColor) {
                                useCnvt = this.getBiomeColor(errStr, r20, o.useBiomeColor - 1);
                                hasCnvt = this.getBiomeColor1(errStr, r20, o.useBiomeColor - 1);
                                throttling = this.getBiomeColor2(errStr, r20, o.useBiomeColor - 1);
                                more = this.getBiomeColor3(errStr, r20, o.useBiomeColor - 1);
                                getBiomeColor4 = this.getBiomeColor4(errStr, r20, o.useBiomeColor - 1);
                              } else {
                                /** @type {number} */
                                getBiomeColor4 = more = throttling = hasCnvt = useCnvt = 0;
                              }
                              /** @type {number} */
                              var PYTHON_KEYWORDS = 1;
                              /** @type {number} */
                              var max = 1;
                              /** @type {number} */
                              var min = 1;
                              /** @type {number} */
                              var PERL_KEYWORDS = 1;
                              if (8 !== (a[j] & 8) && originalType !== type) {
                                if (0 !== (a[j] & 7)) {
                                  /** @type {number} */
                                  var _ = a[j + 18] % 8;
                                  if (string !== type) {
                                    /** @type {number} */
                                    _ = 7;
                                  }
                                  /** @type {number} */
                                  var CancelAnimationFrame = a[j - 18] % 8;
                                  if (search !== type) {
                                    /** @type {number} */
                                    CancelAnimationFrame = 7;
                                  }
                                  /** @type {number} */
                                  var sep = a[j - 1] % 8;
                                  if (tag !== type) {
                                    /** @type {number} */
                                    sep = 7;
                                  }
                                  /** @type {number} */
                                  var CancelRequestAnimationFrame = a[j + 1] % 8;
                                  if (array !== type) {
                                    /** @type {number} */
                                    CancelRequestAnimationFrame = 7;
                                  }
                                  /** @type {number} */
                                  var code = a[j + 18 - 1] % 8;
                                  if (block[keys[j + 18 - 1]].type !== type) {
                                    /** @type {number} */
                                    code = 7;
                                  }
                                  /** @type {number} */
                                  var format = a[j - 18 - 1] % 8;
                                  if (block[keys[j - 18 - 1]].type !== type) {
                                    /** @type {number} */
                                    format = 7;
                                  }
                                  /** @type {number} */
                                  var tp = a[j + 18 + 1] % 8;
                                  if (block[keys[j + 18 + 1]].type !== type) {
                                    /** @type {number} */
                                    tp = 7;
                                  }
                                  /** @type {number} */
                                  var Eb = a[j - 18 + 1] % 8;
                                  if (block[keys[j - 18 + 1]].type !== type) {
                                    /** @type {number} */
                                    Eb = 7;
                                  }
                                  /** @type {number} */
                                  PYTHON_KEYWORDS = 0 === sep || (0 === format || 0 === CancelAnimationFrame) ? 0.875 : PYTHON_KEYWORDS - (a[j] + sep + format + CancelAnimationFrame) / 4 / 7;
                                  /** @type {number} */
                                  max = 0 === CancelAnimationFrame || (0 === Eb || 0 === CancelRequestAnimationFrame) ? 0.875 : max - (a[j] + CancelAnimationFrame + Eb + CancelRequestAnimationFrame) / 4 / 7;
                                  /** @type {number} */
                                  min = 0 === CancelRequestAnimationFrame || (0 === tp || 0 === _) ? 0.875 : min - (a[j] + CancelRequestAnimationFrame + tp + _) / 4 / 7;
                                  /** @type {number} */
                                  PERL_KEYWORDS = 0 === _ || (0 === code || 0 === sep) ? 0.875 : PERL_KEYWORDS - (a[j] + _ + code + sep) / 4 / 7;
                                  if (2.625 === PYTHON_KEYWORDS + max + min || (2.625 === max + min + PERL_KEYWORDS || (2.625 === min + PERL_KEYWORDS + PYTHON_KEYWORDS || 2.625 === PERL_KEYWORDS + PYTHON_KEYWORDS + max))) {
                                    /** @type {number} */
                                    PERL_KEYWORDS = min = max = PYTHON_KEYWORDS = 0.875;
                                  }
                                } else {
                                  /** @type {number} */
                                  PERL_KEYWORDS = min = max = PYTHON_KEYWORDS = 0.875;
                                }
                                if (block[keys[pos - 1]].type === type || (block[keys[pos - 18 - 1]].type === type || block[keys[pos - 18]].type === type)) {
                                  /** @type {number} */
                                  PYTHON_KEYWORDS = 1;
                                }
                                if (block[keys[pos - 18]].type === type || (block[keys[pos - 18 + 1]].type === type || block[keys[pos + 1]].type === type)) {
                                  /** @type {number} */
                                  max = 1;
                                }
                                if (block[keys[pos + 1]].type === type || (block[keys[pos + 18 + 1]].type === type || block[keys[pos + 18]].type === type)) {
                                  /** @type {number} */
                                  min = 1;
                                }
                                if (block[keys[pos + 18]].type === type || (block[keys[pos + 18 - 1]].type === type || block[keys[pos - 1]].type === type)) {
                                  /** @type {number} */
                                  PERL_KEYWORDS = 1;
                                }
                              }
                              if (to) {
                                if (0 === block.lightSource[key]) {
                                  /** @type {number} */
                                  yy = Math.floor((item + buffer[_i - 18] + buffer[_i - 324 - 18] + buffer[_i - 324]) / 4);
                                  /** @type {number} */
                                  diff = Math.floor((item + buffer[_i - 324] + buffer[_i - 324 + 18] + buffer[_i + 18]) / 4);
                                  /** @type {number} */
                                  inputBaseSize = Math.floor((item + buffer[_i + 18] + buffer[_i + 324 + 18] + buffer[_i + 324]) / 4);
                                  /** @type {number} */
                                  tmp12 = Math.floor((item + buffer[_i + 324] + buffer[_i + 324 - 18] + buffer[_i - 18]) / 4);
                                  /** @type {number} */
                                  dy = Math.floor((attr + map[_i - 18] + map[_i - 324 - 18] + map[_i - 324]) / 4);
                                  /** @type {number} */
                                  firstNum = Math.floor((attr + map[_i - 324] + map[_i - 324 + 18] + map[_i + 18]) / 4);
                                  /** @type {number} */
                                  carry = Math.floor((attr + map[_i + 18] + map[_i + 324 + 18] + map[_i + 324]) / 4);
                                  /** @type {number} */
                                  z5 = Math.floor((attr + map[_i + 324] + map[_i + 324 - 18] + map[_i - 18]) / 4);
                                } else {
                                  /** @type {number} */
                                  yy = diff = inputBaseSize = tmp12 = dy = firstNum = carry = z5 = 15;
                                }
                                /** @type {number} */
                                i = 0;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.front[i];
                                t.d[t.o++] = 0 + whole_match + p.front[i + 1] * PYTHON_KEYWORDS;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.front[i + 2];
                                t.d[t.o++] = p.front[i + 3];
                                t.d[t.o++] = p.front[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * yy + dy;
                                /** @type {number} */
                                t.d[t.o++] = n + 1;
                                /** @type {number} */
                                t.d[t.o++] = 0.8;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 5;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.front[i];
                                t.d[t.o++] = 0 + whole_match + p.front[i + 1] * PERL_KEYWORDS;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.front[i + 2];
                                t.d[t.o++] = p.front[i + 3];
                                t.d[t.o++] = p.front[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * diff + firstNum;
                                /** @type {number} */
                                t.d[t.o++] = n + 1;
                                /** @type {number} */
                                t.d[t.o++] = 0.8;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 10;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.front[i];
                                t.d[t.o++] = 0 + whole_match + p.front[i + 1] * PERL_KEYWORDS;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.front[i + 2];
                                t.d[t.o++] = p.front[i + 3];
                                t.d[t.o++] = p.front[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * inputBaseSize + carry;
                                /** @type {number} */
                                t.d[t.o++] = n + 1;
                                /** @type {number} */
                                t.d[t.o++] = 0.8;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 15;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.front[i];
                                t.d[t.o++] = 0 + whole_match + p.front[i + 1] * PYTHON_KEYWORDS;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.front[i + 2];
                                t.d[t.o++] = p.front[i + 3];
                                t.d[t.o++] = p.front[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * yy + dy;
                                /** @type {number} */
                                t.d[t.o++] = n + 1;
                                /** @type {number} */
                                t.d[t.o++] = 0.8;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 20;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.front[i];
                                t.d[t.o++] = 0 + whole_match + p.front[i + 1] * PERL_KEYWORDS;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.front[i + 2];
                                t.d[t.o++] = p.front[i + 3];
                                t.d[t.o++] = p.front[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * inputBaseSize + carry;
                                /** @type {number} */
                                t.d[t.o++] = n + 1;
                                /** @type {number} */
                                t.d[t.o++] = 0.8;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 25;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.front[i];
                                t.d[t.o++] = 0 + whole_match + p.front[i + 1] * PYTHON_KEYWORDS;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.front[i + 2];
                                t.d[t.o++] = p.front[i + 3];
                                t.d[t.o++] = p.front[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * tmp12 + z5;
                                /** @type {number} */
                                t.d[t.o++] = n + 1;
                                /** @type {number} */
                                t.d[t.o++] = 0.8;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                              }
                              if (from) {
                                if (0 === block.lightSource[key]) {
                                  /** @type {number} */
                                  diffCosAngle = Math.floor((id + buffer[k - 18] + buffer[k - 324 - 18] + buffer[k - 324]) / 4);
                                  /** @type {number} */
                                  tmp10p2 = Math.floor((id + buffer[k - 324] + buffer[k - 324 + 18] + buffer[k + 18]) / 4);
                                  /** @type {number} */
                                  xx = Math.floor((id + buffer[k + 18] + buffer[k + 324 + 18] + buffer[k + 324]) / 4);
                                  /** @type {number} */
                                  time = Math.floor((id + buffer[k + 324] + buffer[k + 324 - 18] + buffer[k - 18]) / 4);
                                  /** @type {number} */
                                  cosAngle = Math.floor((v + map[k - 18] + map[k - 324 - 18] + map[k - 324]) / 4);
                                  /** @type {number} */
                                  z5p2 = Math.floor((v + map[k - 324] + map[k - 324 + 18] + map[k + 18]) / 4);
                                  /** @type {number} */
                                  dx = Math.floor((v + map[k + 18] + map[k + 324 + 18] + map[k + 324]) / 4);
                                  /** @type {number} */
                                  begin = Math.floor((v + map[k + 324] + map[k + 324 - 18] + map[k - 18]) / 4);
                                } else {
                                  /** @type {number} */
                                  diffCosAngle = tmp10p2 = xx = time = cosAngle = z5p2 = dx = begin = 15;
                                }
                                /** @type {number} */
                                i = 0;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.back[i];
                                t.d[t.o++] = 0 + whole_match + p.back[i + 1] * min;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.back[i + 2];
                                t.d[t.o++] = p.back[i + 3];
                                t.d[t.o++] = p.back[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * xx + dx;
                                /** @type {number} */
                                t.d[t.o++] = n + 2;
                                /** @type {number} */
                                t.d[t.o++] = 0.8;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 5;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.back[i];
                                t.d[t.o++] = 0 + whole_match + p.back[i + 1] * max;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.back[i + 2];
                                t.d[t.o++] = p.back[i + 3];
                                t.d[t.o++] = p.back[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * diffCosAngle + cosAngle;
                                /** @type {number} */
                                t.d[t.o++] = n + 2;
                                /** @type {number} */
                                t.d[t.o++] = 0.8;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 10;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.back[i];
                                t.d[t.o++] = 0 + whole_match + p.back[i + 1] * max;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.back[i + 2];
                                t.d[t.o++] = p.back[i + 3];
                                t.d[t.o++] = p.back[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * time + begin;
                                /** @type {number} */
                                t.d[t.o++] = n + 2;
                                /** @type {number} */
                                t.d[t.o++] = 0.8;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 15;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.back[i];
                                t.d[t.o++] = 0 + whole_match + p.back[i + 1] * max;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.back[i + 2];
                                t.d[t.o++] = p.back[i + 3];
                                t.d[t.o++] = p.back[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * diffCosAngle + cosAngle;
                                /** @type {number} */
                                t.d[t.o++] = n + 2;
                                /** @type {number} */
                                t.d[t.o++] = 0.8;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 20;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.back[i];
                                t.d[t.o++] = 0 + whole_match + p.back[i + 1] * min;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.back[i + 2];
                                t.d[t.o++] = p.back[i + 3];
                                t.d[t.o++] = p.back[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * xx + dx;
                                /** @type {number} */
                                t.d[t.o++] = n + 2;
                                /** @type {number} */
                                t.d[t.o++] = 0.8;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 25;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.back[i];
                                t.d[t.o++] = 0 + whole_match + p.back[i + 1] * min;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.back[i + 2];
                                t.d[t.o++] = p.back[i + 3];
                                t.d[t.o++] = p.back[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * tmp10p2 + z5p2;
                                /** @type {number} */
                                t.d[t.o++] = n + 2;
                                /** @type {number} */
                                t.d[t.o++] = 0.8;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                              }
                              if (sx) {
                                if (0 === block.lightSource[key]) {
                                  /** @type {number} */
                                  firstToken = Math.floor((quote + buffer[index - 1] + buffer[index - 324 - 1] + buffer[index - 324]) / 4);
                                  /** @type {number} */
                                  cur = Math.floor((quote + buffer[index - 324] + buffer[index - 324 + 1] + buffer[index + 1]) / 4);
                                  /** @type {number} */
                                  tmp = Math.floor((quote + buffer[index + 1] + buffer[index + 324 + 1] + buffer[index + 324]) / 4);
                                  /** @type {number} */
                                  elem = Math.floor((quote + buffer[index + 324] + buffer[index + 324 - 1] + buffer[index - 1]) / 4);
                                  /** @type {number} */
                                  initialMoveX = Math.floor((count + map[index - 1] + map[index - 324 - 1] + map[index - 324]) / 4);
                                  /** @type {number} */
                                  initialMoveY = Math.floor((count + map[index - 324] + map[index - 324 + 1] + map[index + 1]) / 4);
                                  /** @type {number} */
                                  moveX = Math.floor((count + map[index + 1] + map[index + 324 + 1] + map[index + 324]) / 4);
                                  /** @type {number} */
                                  moveY = Math.floor((count + map[index + 324] + map[index + 324 - 1] + map[index - 1]) / 4);
                                } else {
                                  /** @type {number} */
                                  firstToken = cur = tmp = elem = initialMoveX = initialMoveY = moveX = moveY = 15;
                                }
                                /** @type {number} */
                                i = 0;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.right[i];
                                t.d[t.o++] = 0 + whole_match + p.right[i + 1] * max;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.right[i + 2];
                                t.d[t.o++] = p.right[i + 3];
                                t.d[t.o++] = p.right[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * tmp + moveX;
                                /** @type {number} */
                                t.d[t.o++] = n + 3;
                                /** @type {number} */
                                t.d[t.o++] = 0.55;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 5;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.right[i];
                                t.d[t.o++] = 0 + whole_match + p.right[i + 1] * PYTHON_KEYWORDS;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.right[i + 2];
                                t.d[t.o++] = p.right[i + 3];
                                t.d[t.o++] = p.right[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * firstToken + initialMoveX;
                                /** @type {number} */
                                t.d[t.o++] = n + 3;
                                /** @type {number} */
                                t.d[t.o++] = 0.55;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 10;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.right[i];
                                t.d[t.o++] = 0 + whole_match + p.right[i + 1] * PYTHON_KEYWORDS;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.right[i + 2];
                                t.d[t.o++] = p.right[i + 3];
                                t.d[t.o++] = p.right[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * elem + moveY;
                                /** @type {number} */
                                t.d[t.o++] = n + 3;
                                /** @type {number} */
                                t.d[t.o++] = 0.55;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 15;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.right[i];
                                t.d[t.o++] = 0 + whole_match + p.right[i + 1] * max;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.right[i + 2];
                                t.d[t.o++] = p.right[i + 3];
                                t.d[t.o++] = p.right[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * tmp + moveX;
                                /** @type {number} */
                                t.d[t.o++] = n + 3;
                                /** @type {number} */
                                t.d[t.o++] = 0.55;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 20;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.right[i];
                                t.d[t.o++] = 0 + whole_match + p.right[i + 1] * max;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.right[i + 2];
                                t.d[t.o++] = p.right[i + 3];
                                t.d[t.o++] = p.right[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * cur + initialMoveY;
                                /** @type {number} */
                                t.d[t.o++] = n + 3;
                                /** @type {number} */
                                t.d[t.o++] = 0.55;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 25;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.right[i];
                                t.d[t.o++] = 0 + whole_match + p.right[i + 1] * PYTHON_KEYWORDS;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.right[i + 2];
                                t.d[t.o++] = p.right[i + 3];
                                t.d[t.o++] = p.right[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * firstToken + initialMoveX;
                                /** @type {number} */
                                t.d[t.o++] = n + 3;
                                /** @type {number} */
                                t.d[t.o++] = 0.55;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                              }
                              if (sy) {
                                if (0 === block.lightSource[key]) {
                                  /** @type {number} */
                                  stack = Math.floor((value + buffer[start - 1] + buffer[start - 324 - 1] + buffer[start - 324]) / 4);
                                  /** @type {number} */
                                  memory = Math.floor((value + buffer[start - 324] + buffer[start - 324 + 1] + buffer[start + 1]) / 4);
                                  /** @type {number} */
                                  inPseudo = Math.floor((value + buffer[start + 1] + buffer[start + 324 + 1] + buffer[start + 324]) / 4);
                                  /** @type {number} */
                                  inParens = Math.floor((value + buffer[start + 324] + buffer[start + 324 - 1] + buffer[start - 1]) / 4);
                                  /** @type {number} */
                                  failed = Math.floor((val + map[start - 1] + map[start - 324 - 1] + map[start - 324]) / 4);
                                  /** @type {number} */
                                  total = Math.floor((val + map[start - 324] + map[start - 324 + 1] + map[start + 1]) / 4);
                                  /** @type {number} */
                                  failures = Math.floor((val + map[start + 1] + map[start + 324 + 1] + map[start + 324]) / 4);
                                  /** @type {number} */
                                  Aa = Math.floor((val + map[start + 324] + map[start + 324 - 1] + map[start - 1]) / 4);
                                } else {
                                  /** @type {number} */
                                  stack = memory = inPseudo = inParens = failed = total = failures = Aa = 15;
                                }
                                /** @type {number} */
                                i = 0;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.left[i];
                                t.d[t.o++] = 0 + whole_match + p.left[i + 1] * PERL_KEYWORDS;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.left[i + 2];
                                t.d[t.o++] = p.left[i + 3];
                                t.d[t.o++] = p.left[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * inParens + Aa;
                                /** @type {number} */
                                t.d[t.o++] = n + 4;
                                /** @type {number} */
                                t.d[t.o++] = 0.55;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 5;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.left[i];
                                t.d[t.o++] = 0 + whole_match + p.left[i + 1] * PERL_KEYWORDS;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.left[i + 2];
                                t.d[t.o++] = p.left[i + 3];
                                t.d[t.o++] = p.left[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * stack + failed;
                                /** @type {number} */
                                t.d[t.o++] = n + 4;
                                /** @type {number} */
                                t.d[t.o++] = 0.55;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 10;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.left[i];
                                t.d[t.o++] = 0 + whole_match + p.left[i + 1] * min;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.left[i + 2];
                                t.d[t.o++] = p.left[i + 3];
                                t.d[t.o++] = p.left[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * memory + total;
                                /** @type {number} */
                                t.d[t.o++] = n + 4;
                                /** @type {number} */
                                t.d[t.o++] = 0.55;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 15;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.left[i];
                                t.d[t.o++] = 0 + whole_match + p.left[i + 1] * min;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.left[i + 2];
                                t.d[t.o++] = p.left[i + 3];
                                t.d[t.o++] = p.left[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * inPseudo + failures;
                                /** @type {number} */
                                t.d[t.o++] = n + 4;
                                /** @type {number} */
                                t.d[t.o++] = 0.55;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 20;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.left[i];
                                t.d[t.o++] = 0 + whole_match + p.left[i + 1] * PERL_KEYWORDS;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.left[i + 2];
                                t.d[t.o++] = p.left[i + 3];
                                t.d[t.o++] = p.left[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * inParens + Aa;
                                /** @type {number} */
                                t.d[t.o++] = n + 4;
                                /** @type {number} */
                                t.d[t.o++] = 0.55;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 25;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.left[i];
                                t.d[t.o++] = 0 + whole_match + p.left[i + 1] * min;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.left[i + 2];
                                t.d[t.o++] = p.left[i + 3];
                                t.d[t.o++] = p.left[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * memory + total;
                                /** @type {number} */
                                t.d[t.o++] = n + 4;
                                /** @type {number} */
                                t.d[t.o++] = 0.55;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                              }
                              if (targetSplit) {
                                if (0 === block.lightSource[key]) {
                                  /** @type {number} */
                                  cycle = Math.floor((current + buffer[x - 1] + buffer[x - 18 - 1] + buffer[x - 18]) / 4);
                                  /** @type {number} */
                                  visited = Math.floor((current + buffer[x - 18] + buffer[x - 18 + 1] + buffer[x + 1]) / 4);
                                  /** @type {number} */
                                  c = Math.floor((current + buffer[x + 1] + buffer[x + 18 + 1] + buffer[x + 18]) / 4);
                                  /** @type {number} */
                                  maxX = Math.floor((current + buffer[x + 18] + buffer[x + 18 - 1] + buffer[x - 1]) / 4);
                                  /** @type {number} */
                                  maxY = Math.floor((row + map[x - 1] + map[x - 18 - 1] + map[x - 18]) / 4);
                                  /** @type {number} */
                                  g = Math.floor((row + map[x - 18] + map[x - 18 + 1] + map[x + 1]) / 4);
                                  /** @type {number} */
                                  b = Math.floor((row + map[x + 1] + map[x + 18 + 1] + map[x + 18]) / 4);
                                  /** @type {number} */
                                  intercept = Math.floor((row + map[x + 18] + map[x + 18 - 1] + map[x - 1]) / 4);
                                } else {
                                  /** @type {number} */
                                  cycle = visited = c = maxX = maxY = g = b = intercept = 15;
                                }
                                /** @type {number} */
                                i = 0;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.bottom[i];
                                t.d[t.o++] = 0 + whole_match + p.bottom[i + 1];
                                t.d[t.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                                t.d[t.o++] = p.bottom[i + 3];
                                t.d[t.o++] = p.bottom[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * c + b;
                                /** @type {number} */
                                t.d[t.o++] = n + 5;
                                /** @type {number} */
                                t.d[t.o++] = 1;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 5;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.bottom[i];
                                t.d[t.o++] = 0 + whole_match + p.bottom[i + 1];
                                t.d[t.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                                t.d[t.o++] = p.bottom[i + 3];
                                t.d[t.o++] = p.bottom[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * cycle + maxY;
                                /** @type {number} */
                                t.d[t.o++] = n + 5;
                                /** @type {number} */
                                t.d[t.o++] = 1;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 10;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.bottom[i];
                                t.d[t.o++] = 0 + whole_match + p.bottom[i + 1];
                                t.d[t.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                                t.d[t.o++] = p.bottom[i + 3];
                                t.d[t.o++] = p.bottom[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * visited + g;
                                /** @type {number} */
                                t.d[t.o++] = n + 5;
                                /** @type {number} */
                                t.d[t.o++] = 1;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 15;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.bottom[i];
                                t.d[t.o++] = 0 + whole_match + p.bottom[i + 1];
                                t.d[t.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                                t.d[t.o++] = p.bottom[i + 3];
                                t.d[t.o++] = p.bottom[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * c + b;
                                /** @type {number} */
                                t.d[t.o++] = n + 5;
                                /** @type {number} */
                                t.d[t.o++] = 1;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 20;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.bottom[i];
                                t.d[t.o++] = 0 + whole_match + p.bottom[i + 1];
                                t.d[t.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                                t.d[t.o++] = p.bottom[i + 3];
                                t.d[t.o++] = p.bottom[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * maxX + intercept;
                                /** @type {number} */
                                t.d[t.o++] = n + 5;
                                /** @type {number} */
                                t.d[t.o++] = 1;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                                /** @type {number} */
                                i = 25;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.bottom[i];
                                t.d[t.o++] = 0 + whole_match + p.bottom[i + 1];
                                t.d[t.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                                t.d[t.o++] = p.bottom[i + 3];
                                t.d[t.o++] = p.bottom[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * cycle + maxY;
                                /** @type {number} */
                                t.d[t.o++] = n + 5;
                                /** @type {number} */
                                t.d[t.o++] = 1;
                                /** @type {number} */
                                t.d[t.o++] = useCnvt;
                              }
                              if (sourceSplit) {
                                if (0 === block.lightSource[key]) {
                                  /** @type {number} */
                                  enc2 = Math.floor((expires + buffer[pos - 1] + buffer[pos - 18 - 1] + buffer[pos - 18]) / 4);
                                  /** @type {number} */
                                  enc3 = Math.floor((expires + buffer[pos - 18] + buffer[pos - 18 + 1] + buffer[pos + 1]) / 4);
                                  /** @type {number} */
                                  enc4 = Math.floor((expires + buffer[pos + 1] + buffer[pos + 18 + 1] + buffer[pos + 18]) / 4);
                                  /** @type {number} */
                                  startTime = Math.floor((expires + buffer[pos + 18] + buffer[pos + 18 - 1] + buffer[pos - 1]) / 4);
                                  /** @type {number} */
                                  endTime = Math.floor((temp + map[pos - 1] + map[pos - 18 - 1] + map[pos - 18]) / 4);
                                  /** @type {number} */
                                  _m = Math.floor((temp + map[pos - 18] + map[pos - 18 + 1] + map[pos + 1]) / 4);
                                  /** @type {number} */
                                  _ref2 = Math.floor((temp + map[pos + 1] + map[pos + 18 + 1] + map[pos + 18]) / 4);
                                  /** @type {number} */
                                  exps = Math.floor((temp + map[pos + 18] + map[pos + 18 - 1] + map[pos - 1]) / 4);
                                } else {
                                  /** @type {number} */
                                  enc2 = enc3 = enc4 = startTime = endTime = _m = _ref2 = exps = 15;
                                }
                                /** @type {number} */
                                i = 0;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                                t.d[t.o++] = 0 + whole_match + p.top[i + 1] * min;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                                t.d[t.o++] = p.top[i + 3];
                                t.d[t.o++] = p.top[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * enc4 + _ref2;
                                /** @type {number} */
                                t.d[t.o++] = n + 6;
                                /** @type {number} */
                                t.d[t.o++] = 1;
                                /** @type {number} */
                                t.d[t.o++] = more;
                                /** @type {number} */
                                i = 5;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                                t.d[t.o++] = 0 + whole_match + p.top[i + 1] * max;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                                t.d[t.o++] = p.top[i + 3];
                                t.d[t.o++] = p.top[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * enc3 + _m;
                                /** @type {number} */
                                t.d[t.o++] = n + 6;
                                /** @type {number} */
                                t.d[t.o++] = 1;
                                /** @type {number} */
                                t.d[t.o++] = throttling;
                                /** @type {number} */
                                i = 10;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                                t.d[t.o++] = 0 + whole_match + p.top[i + 1] * PYTHON_KEYWORDS;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                                t.d[t.o++] = p.top[i + 3];
                                t.d[t.o++] = p.top[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * enc2 + endTime;
                                /** @type {number} */
                                t.d[t.o++] = n + 6;
                                /** @type {number} */
                                t.d[t.o++] = 1;
                                /** @type {number} */
                                t.d[t.o++] = hasCnvt;
                                /** @type {number} */
                                i = 15;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                                t.d[t.o++] = 0 + whole_match + p.top[i + 1] * min;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                                t.d[t.o++] = p.top[i + 3];
                                t.d[t.o++] = p.top[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * enc4 + _ref2;
                                /** @type {number} */
                                t.d[t.o++] = n + 6;
                                /** @type {number} */
                                t.d[t.o++] = 1;
                                /** @type {number} */
                                t.d[t.o++] = more;
                                /** @type {number} */
                                i = 20;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                                t.d[t.o++] = 0 + whole_match + p.top[i + 1] * PYTHON_KEYWORDS;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                                t.d[t.o++] = p.top[i + 3];
                                t.d[t.o++] = p.top[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * enc2 + endTime;
                                /** @type {number} */
                                t.d[t.o++] = n + 6;
                                /** @type {number} */
                                t.d[t.o++] = 1;
                                /** @type {number} */
                                t.d[t.o++] = hasCnvt;
                                /** @type {number} */
                                i = 25;
                                t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                                t.d[t.o++] = 0 + whole_match + p.top[i + 1] * PERL_KEYWORDS;
                                t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                                t.d[t.o++] = p.top[i + 3];
                                t.d[t.o++] = p.top[i + 4];
                                /** @type {number} */
                                t.d[t.o++] = 100 * startTime + exps;
                                /** @type {number} */
                                t.d[t.o++] = n + 6;
                                /** @type {number} */
                                t.d[t.o++] = 1;
                                /** @type {number} */
                                t.d[t.o++] = getBiomeColor4;
                              }
                            } else {
                              if (10 === o.shapeType) {
                                if (target = o.drawLevel, t = tags[target], p = o.shape, useCnvt = 0, 0 < o.useBiomeColor && (useCnvt = this.getBiomeColor(errStr, r20, o.useBiomeColor - 1)), to || (from || (sx || (sy || (targetSplit || sourceSplit))))) {
                                  if (8 === (a[j] & 8)) {
                                    t = 8 < item && 0 === target ? tags[target + 1] : tags[target];
                                    /** @type {number} */
                                    i = 0;
                                    for (;i < p.front.length;i += 5) {
                                      t.d[t.o++] = 16 * this.xPos + errStr + p.front[i];
                                      t.d[t.o++] = 0 + whole_match + p.front[i + 1];
                                      t.d[t.o++] = 16 * this.zPos + r20 + p.front[i + 2];
                                      t.d[t.o++] = p.front[i + 3];
                                      t.d[t.o++] = p.front[i + 4];
                                      t.d[t.o++] = 100 * item + attr;
                                      /** @type {number} */
                                      t.d[t.o++] = n + 1;
                                      /** @type {number} */
                                      t.d[t.o++] = 0.8;
                                      t.d[t.o++] = useCnvt;
                                    }
                                  }
                                  if (2 === (a[j] & 2)) {
                                    t = 8 < id && 0 === target ? tags[target + 1] : tags[target];
                                    /** @type {number} */
                                    i = 0;
                                    for (;i < p.back.length;i += 5) {
                                      t.d[t.o++] = 16 * this.xPos + errStr + p.back[i];
                                      t.d[t.o++] = 0 + whole_match + p.back[i + 1];
                                      t.d[t.o++] = 16 * this.zPos + r20 + p.back[i + 2];
                                      t.d[t.o++] = p.back[i + 3];
                                      t.d[t.o++] = p.back[i + 4];
                                      t.d[t.o++] = 100 * id + v;
                                      /** @type {number} */
                                      t.d[t.o++] = n + 2;
                                      /** @type {number} */
                                      t.d[t.o++] = 0.8;
                                      t.d[t.o++] = useCnvt;
                                    }
                                  }
                                  if (1 === (a[j] & 1)) {
                                    t = 8 < quote && 0 === target ? tags[target + 1] : tags[target];
                                    /** @type {number} */
                                    i = 0;
                                    for (;i < p.right.length;i += 5) {
                                      t.d[t.o++] = 16 * this.xPos + errStr + p.right[i];
                                      t.d[t.o++] = 0 + whole_match + p.right[i + 1];
                                      t.d[t.o++] = 16 * this.zPos + r20 + p.right[i + 2];
                                      t.d[t.o++] = p.right[i + 3];
                                      t.d[t.o++] = p.right[i + 4];
                                      t.d[t.o++] = 100 * quote + count;
                                      /** @type {number} */
                                      t.d[t.o++] = n + 3;
                                      /** @type {number} */
                                      t.d[t.o++] = 0.55;
                                      t.d[t.o++] = useCnvt;
                                    }
                                  }
                                  if (4 === (a[j] & 4)) {
                                    t = 8 < value && 0 === target ? tags[target + 1] : tags[target];
                                    /** @type {number} */
                                    i = 0;
                                    for (;i < p.left.length;i += 5) {
                                      t.d[t.o++] = 16 * this.xPos + errStr + p.left[i];
                                      t.d[t.o++] = 0 + whole_match + p.left[i + 1];
                                      t.d[t.o++] = 16 * this.zPos + r20 + p.left[i + 2];
                                      t.d[t.o++] = p.left[i + 3];
                                      t.d[t.o++] = p.left[i + 4];
                                      t.d[t.o++] = 100 * value + val;
                                      /** @type {number} */
                                      t.d[t.o++] = n + 4;
                                      /** @type {number} */
                                      t.d[t.o++] = 0.55;
                                      t.d[t.o++] = useCnvt;
                                    }
                                  }
                                  if (1 === originalType || 0 === a[j]) {
                                    t = tags[target];
                                    /** @type {number} */
                                    i = 0;
                                    for (;i < p.bottom.length;i += 5) {
                                      t.d[t.o++] = 16 * this.xPos + errStr + p.bottom[i];
                                      t.d[t.o++] = 0 + whole_match + p.bottom[i + 1];
                                      t.d[t.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                                      t.d[t.o++] = p.bottom[i + 3];
                                      t.d[t.o++] = p.bottom[i + 4];
                                      t.d[t.o++] = 100 * current + row;
                                      /** @type {number} */
                                      t.d[t.o++] = n + 5;
                                      /** @type {number} */
                                      t.d[t.o++] = 0.3;
                                      t.d[t.o++] = useCnvt;
                                    }
                                  }
                                }
                              } else {
                                if (12 === o.shapeType) {
                                  if (target = o.drawLevel, t = tags[target], o = block[key][2], 12 !== block[keys[_i]].shapeType && (12 === block[keys[k]].shapeType && (12 === block[keys[index]].shapeType && 12 === block[keys[start]].shapeType)) ? o = block[key][7] : 12 === block[keys[_i]].shapeType && (12 === block[keys[k]].shapeType && (12 !== block[keys[index]].shapeType && 12 === block[keys[start]].shapeType)) ? o = block[key][8] : 12 === block[keys[_i]].shapeType && (12 === block[keys[k]].shapeType &&
                                  (12 === block[keys[index]].shapeType && 12 !== block[keys[start]].shapeType)) ? o = block[key][10] : 12 === block[keys[_i]].shapeType && (12 !== block[keys[k]].shapeType && (12 === block[keys[index]].shapeType && 12 === block[keys[start]].shapeType)) ? o = block[key][9] : 12 !== block[keys[_i]].shapeType && (12 === block[keys[k]].shapeType && (12 === block[keys[index]].shapeType && 12 !== block[keys[start]].shapeType)) ? o = block[key][3] : 12 !== block[keys[_i]].shapeType &&
                                  (12 === block[keys[k]].shapeType && (12 !== block[keys[index]].shapeType && 12 === block[keys[start]].shapeType)) ? o = block[key][4] : 12 === block[keys[_i]].shapeType && (12 !== block[keys[k]].shapeType && (12 === block[keys[index]].shapeType && 12 !== block[keys[start]].shapeType)) ? o = block[key][6] : 12 === block[keys[_i]].shapeType && (12 !== block[keys[k]].shapeType && (12 !== block[keys[index]].shapeType && 12 === block[keys[start]].shapeType)) ? o = block[key][5] :
                                  12 !== block[keys[_i]].shapeType && 12 !== block[keys[k]].shapeType || (12 === block[keys[index]].shapeType || 12 === block[keys[start]].shapeType) ? 12 === block[keys[_i]].shapeType || (12 === block[keys[k]].shapeType || 12 !== block[keys[index]].shapeType && 12 !== block[keys[start]].shapeType) ? 12 === block[keys[_i]].shapeType && (12 === block[keys[k]].shapeType && (12 === block[keys[index]].shapeType && (12 === block[keys[start]].shapeType && (o = block[key][2])))) :
                                  o = block[key][1] : o = block[key][0], p = o.shape, useCnvt = 65536 * Math.floor(12 * part + 75) + 256 * Math.floor(0) + Math.floor(0), sourceSplit || (sx || (sy || (targetSplit || (to || from))))) {
                                    /** @type {number} */
                                    i = 0;
                                    for (;i < p.top.length;i += 5) {
                                      t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                                      t.d[t.o++] = 0 + whole_match + p.top[i + 1];
                                      t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                                      t.d[t.o++] = p.top[i + 3];
                                      t.d[t.o++] = p.top[i + 4];
                                      t.d[t.o++] = 100 * value + val;
                                      /** @type {number} */
                                      t.d[t.o++] = n + 4;
                                      /** @type {number} */
                                      t.d[t.o++] = 0.8;
                                      /** @type {number} */
                                      t.d[t.o++] = useCnvt;
                                    }
                                  }
                                } else {
                                  if (13 === o.shapeType && (sourceSplit || (sx || (sy || (targetSplit || (to || from)))))) {
                                    target = o.drawLevel;
                                    t = tags[target];
                                    /** @type {number} */
                                    var Ab = 0;
                                    if (13 === block[keys[_i]].shapeType || 131 === keys[_i]) {
                                      o = block[key][0];
                                      p = o.shape;
                                      Ab++;
                                      /** @type {number} */
                                      i = 0;
                                      for (;i < p.top.length;i += 5) {
                                        t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                                        t.d[t.o++] = 0 + whole_match + p.top[i + 1];
                                        t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                                        t.d[t.o++] = p.top[i + 3];
                                        t.d[t.o++] = p.top[i + 4];
                                        t.d[t.o++] = 100 * value + val;
                                        /** @type {number} */
                                        t.d[t.o++] = n + 4;
                                        /** @type {number} */
                                        t.d[t.o++] = 0.8;
                                        /** @type {number} */
                                        t.d[t.o++] = 0;
                                      }
                                    }
                                    if (13 === block[keys[k]].shapeType || 131 === keys[k]) {
                                      o = block[key][1];
                                      p = o.shape;
                                      Ab++;
                                      /** @type {number} */
                                      i = 0;
                                      for (;i < p.top.length;i += 5) {
                                        t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                                        t.d[t.o++] = 0 + whole_match + p.top[i + 1];
                                        t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                                        t.d[t.o++] = p.top[i + 3];
                                        t.d[t.o++] = p.top[i + 4];
                                        t.d[t.o++] = 100 * value + val;
                                        /** @type {number} */
                                        t.d[t.o++] = n + 4;
                                        /** @type {number} */
                                        t.d[t.o++] = 0.8;
                                        /** @type {number} */
                                        t.d[t.o++] = 0;
                                      }
                                    }
                                    if (13 === block[keys[index]].shapeType || (131 === keys[index] || 1 > Ab)) {
                                      o = block[key][2];
                                      p = o.shape;
                                      /** @type {number} */
                                      i = 0;
                                      for (;i < p.top.length;i += 5) {
                                        t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                                        t.d[t.o++] = 0 + whole_match + p.top[i + 1];
                                        t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                                        t.d[t.o++] = p.top[i + 3];
                                        t.d[t.o++] = p.top[i + 4];
                                        t.d[t.o++] = 100 * value + val;
                                        /** @type {number} */
                                        t.d[t.o++] = n + 4;
                                        /** @type {number} */
                                        t.d[t.o++] = 0.8;
                                        /** @type {number} */
                                        t.d[t.o++] = 0;
                                      }
                                    }
                                    if (13 === block[keys[start]].shapeType || (131 === keys[start] || 1 > Ab)) {
                                      o = block[key][3];
                                      p = o.shape;
                                      /** @type {number} */
                                      i = 0;
                                      for (;i < p.top.length;i += 5) {
                                        t.d[t.o++] = 16 * this.xPos + errStr + p.top[i];
                                        t.d[t.o++] = 0 + whole_match + p.top[i + 1];
                                        t.d[t.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                                        t.d[t.o++] = p.top[i + 3];
                                        t.d[t.o++] = p.top[i + 4];
                                        t.d[t.o++] = 100 * value + val;
                                        /** @type {number} */
                                        t.d[t.o++] = n + 4;
                                        /** @type {number} */
                                        t.d[t.o++] = 0.8;
                                        /** @type {number} */
                                        t.d[t.o++] = 0;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (void 0 !== this.vbo && (0 === recurring && (void 0 !== this.vbo[0] && (this.vbo[0].forEach(function(program) {
    gl.deleteBuffer(program);
  }), this.ivbo[0].forEach(function(dataAndEvents) {
    chronometer.gpuMem -= dataAndEvents;
  }))), 1 === recurring && (void 0 !== this.vbo[1] && (this.vbo[1].forEach(function(program) {
    gl.deleteBuffer(program);
  }), this.ivbo[1].forEach(function(dataAndEvents) {
    chronometer.gpuMem -= dataAndEvents;
  })))), 0 === recurring) {
    /** @type {Array} */
    this.ivbo[0] = [];
    /** @type {Array} */
    this.vbo[0] = [];
    /** @type {number} */
    var name = 0;
    for (;4 > name;name++) {
      if (0 < tags[name].o) {
        /** @type {Float32Array} */
        var data = new Float32Array(tags[name].d.buffer, 0, tags[name].o);
        /** @type {number} */
        this.ivbo[0][name] = data.length;
        this.vbo[0][name] = gl.createBuffer();
        chronometer.gpuMem += data.length;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo[0][name]);
        gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
        /** @type {null} */
        data = null;
      }
    }
    /** @type {number} */
    this.isInit = 1;
  }
  if (1 === recurring) {
    /** @type {Array} */
    this.ivbo[1] = [];
    /** @type {Array} */
    this.vbo[1] = [];
    /** @type {number} */
    name = 0;
    for (;4 > name;name++) {
      if (0 < tags[name].o) {
        /** @type {Float32Array} */
        data = new Float32Array(tags[name].d.buffer, 0, tags[name].o);
        /** @type {number} */
        this.ivbo[1][name] = data.length;
        this.vbo[1][name] = gl.createBuffer();
        chronometer.gpuMem += data.length;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo[1][name]);
        gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
        /** @type {null} */
        data = null;
      }
    }
    /** @type {number} */
    this.isInit1 = 1;
  }
  return true;
};
/**
 * @param {Array} buf
 * @return {?}
 */
Chunk.prototype.getBuffer = function(buf) {
  /** @type {number} */
  var r20 = 0;
  /** @type {number} */
  var p = 0;
  /** @type {number} */
  var name = 0;
  /** @type {number} */
  var type = 0;
  /** @type {boolean} */
  var Extension = false;
  /** @type {boolean} */
  var listener = false;
  /** @type {boolean} */
  var next = false;
  /** @type {boolean} */
  var isString = false;
  /** @type {number} */
  var blockX = p = window.punkty1[0].o = 0;
  /** @type {number} */
  var index = 0;
  /** @type {number} */
  var o = 0;
  var iLine;
  var self = mcWorld.requestChunk(this.xPos + 1, this.zPos);
  if (void 0 === self && (isString = true), -1 === self && (isString = true), -2 === self) {
    return false;
  }
  var tag = mcWorld.requestChunk(this.xPos - 1, this.zPos);
  if (void 0 === tag && (next = true), -1 === tag && (next = true), -2 === tag) {
    return false;
  }
  var s = mcWorld.requestChunk(this.xPos, this.zPos + 1);
  if (void 0 === s && (Extension = true), -1 === s && (Extension = true), -2 === s) {
    return false;
  }
  var doc = mcWorld.requestChunk(this.xPos, this.zPos - 1);
  if (void 0 === doc && (listener = true), -1 === doc && (listener = true), -2 === doc) {
    return false;
  }
  /** @type {Float32Array} */
  this.cacheBiomes = new Float32Array(324);
  /** @type {number} */
  var k = r20 = Math.floor(buf[1] / 16);
  if (2 > buf[1] - 16 * r20) {
    k--;
  }
  if (0 > k) {
    /** @type {number} */
    k = 0;
  }
  /** @type {number} */
  var totalFrames = r20;
  if (13 < buf[1] - 16 * r20) {
    totalFrames++;
  }
  if (16 < totalFrames) {
    /** @type {number} */
    totalFrames = 16;
  }
  for (;k <= totalFrames;k++) {
    if (void 0 !== this.section[k]) {
      var c = this.section[k];
      var context = this.section[k - 1];
      /** @type {boolean} */
      var callback = false;
      if (void 0 === context) {
        /** @type {boolean} */
        callback = true;
      }
      var handler = this.section[k + 1];
      /** @type {boolean} */
      var handlers = false;
      if (void 0 === handler) {
        /** @type {boolean} */
        handlers = true;
      }
      /** @type {boolean} */
      var events = true;
      /** @type {boolean} */
      var elem = true;
      /** @type {boolean} */
      var r = true;
      if (iLine = true, !next) {
        var parent = tag.section[k];
        if (void 0 !== parent) {
          /** @type {boolean} */
          events = false;
        }
      }
      if (!isString) {
        var content = self.section[k];
        if (void 0 !== content) {
          /** @type {boolean} */
          elem = false;
        }
      }
      if (!listener) {
        var child = doc.section[k];
        if (void 0 !== child) {
          /** @type {boolean} */
          r = false;
        }
      }
      if (!Extension) {
        var node = s.section[k];
        if (void 0 !== node) {
          /** @type {boolean} */
          iLine = false;
        }
      }
      /** @type {number} */
      var expr = buf[0] - 3;
      if (0 > expr) {
        /** @type {number} */
        expr = 0;
      }
      var T = buf[0] + 4;
      if (16 < T) {
        /** @type {number} */
        T = 16;
      }
      /** @type {number} */
      var R = buf[2] - 3;
      if (0 > R) {
        /** @type {number} */
        R = 0;
      }
      var V = buf[2] + 4;
      if (16 < V) {
        /** @type {number} */
        V = 16;
      }
      /** @type {number} */
      var params = buf[1] - 16 * k - 3;
      if (0 > params) {
        /** @type {number} */
        params = 0;
      }
      /** @type {number} */
      var Z = buf[1] - 16 * k + 3;
      if (16 < Z) {
        /** @type {number} */
        Z = 16;
      }
      /** @type {number} */
      var fn = params;
      for (;fn < Z;fn++) {
        /** @type {number} */
        r20 = R;
        for (;r20 < V;r20++) {
          /** @type {number} */
          var old = expr;
          for (;old < T;old++) {
            /** @type {number} */
            name = 256 * fn + 16 * r20 + old;
            /** @type {number} */
            type = 324 * (fn + 1) + 18 * (r20 + 1) + (old + 1);
            Chunk.cacheBlock[type] = block[c.blocks[name]].type;
            /** @type {number} */
            p = name % 2;
            /** @type {number} */
            Chunk.cacheData[type] = 0 === p ? c.data[name / 2] & 15 & block[c.blocks[name]].mask : c.data[name / 2 - 0.5] >> 4 & 15 & block[c.blocks[name]].mask;
          }
          this.cacheBiomes[18 * (fn + 1) + r20 + 1] = this.biomes[16 * fn + r20];
        }
      }
      if (callback) {
        /** @type {number} */
        r20 = 0;
        for (;16 > r20;r20++) {
          /** @type {number} */
          old = 0;
          for (;16 > old;old++) {
            /** @type {number} */
            type = 0 + 18 * (r20 + 1) + (old + 1);
            /** @type {number} */
            Chunk.cacheBlock[type] = 0 === k ? 1 : 0;
          }
        }
      } else {
        /** @type {number} */
        r20 = 0;
        for (;16 > r20;r20++) {
          /** @type {number} */
          old = 0;
          for (;16 > old;old++) {
            /** @type {number} */
            name = 3840 + 16 * r20 + old;
            /** @type {number} */
            type = 0 + 18 * (r20 + 1) + (old + 1);
            Chunk.cacheBlock[type] = block[context.blocks[name]].type;
          }
        }
      }
      if (handlers) {
        /** @type {number} */
        r20 = 0;
        for (;16 > r20;r20++) {
          /** @type {number} */
          old = 0;
          for (;16 > old;old++) {
            /** @type {number} */
            type = 5508 + 18 * (r20 + 1) + (old + 1);
            /** @type {number} */
            Chunk.cacheBlock[type] = 15 === k ? 1 : 0;
          }
        }
      } else {
        /** @type {number} */
        r20 = 0;
        for (;16 > r20;r20++) {
          /** @type {number} */
          old = 0;
          for (;16 > old;old++) {
            /** @type {number} */
            name = 0 + 16 * r20 + old;
            /** @type {number} */
            type = 5508 + 18 * (r20 + 1) + (old + 1);
            Chunk.cacheBlock[type] = block[handler.blocks[name]].type;
          }
        }
      }
      if (iLine) {
        /** @type {number} */
        fn = 0;
        for (;16 > fn;fn++) {
          /** @type {number} */
          old = 0;
          for (;16 > old;old++) {
            /** @type {number} */
            type = 324 * (fn + 1) + 306 + (old + 1);
            /** @type {number} */
            Chunk.cacheBlock[type] = Extension ? 1 : 0;
          }
        }
      } else {
        /** @type {number} */
        fn = 0;
        for (;16 > fn;fn++) {
          /** @type {number} */
          old = 0;
          for (;16 > old;old++) {
            /** @type {number} */
            name = 256 * fn + 0 + old;
            /** @type {number} */
            type = 324 * (fn + 1) + 306 + (old + 1);
            Chunk.cacheBlock[type] = block[node.blocks[name]].type;
          }
        }
      }
      if (r) {
        /** @type {number} */
        fn = 0;
        for (;16 > fn;fn++) {
          /** @type {number} */
          old = 0;
          for (;16 > old;old++) {
            /** @type {number} */
            type = 324 * (fn + 1) + 0 + (old + 1);
            /** @type {number} */
            Chunk.cacheBlock[type] = listener ? 1 : 0;
          }
        }
      } else {
        /** @type {number} */
        fn = 0;
        for (;16 > fn;fn++) {
          /** @type {number} */
          old = 0;
          for (;16 > old;old++) {
            /** @type {number} */
            name = 256 * fn + 240 + old;
            /** @type {number} */
            type = 324 * (fn + 1) + 0 + (old + 1);
            Chunk.cacheBlock[type] = block[child.blocks[name]].type;
          }
        }
      }
      if (events) {
        /** @type {number} */
        fn = 0;
        for (;16 > fn;fn++) {
          /** @type {number} */
          r20 = 0;
          for (;16 > r20;r20++) {
            /** @type {number} */
            type = 324 * (fn + 1) + 18 * (r20 + 1) + 0;
            /** @type {number} */
            Chunk.cacheBlock[type] = next ? 1 : 0;
          }
        }
      } else {
        /** @type {number} */
        fn = 0;
        for (;16 > fn;fn++) {
          /** @type {number} */
          r20 = 0;
          for (;16 > r20;r20++) {
            /** @type {number} */
            name = 256 * fn + 16 * r20 + 15;
            /** @type {number} */
            type = 324 * (fn + 1) + 18 * (r20 + 1) + 0;
            Chunk.cacheBlock[type] = block[parent.blocks[name]].type;
          }
        }
      }
      if (elem) {
        /** @type {number} */
        fn = 0;
        for (;16 > fn;fn++) {
          /** @type {number} */
          r20 = 0;
          for (;16 > r20;r20++) {
            /** @type {number} */
            type = 324 * (fn + 1) + 18 * (r20 + 1) + 17;
            /** @type {number} */
            Chunk.cacheBlock[type] = isString ? 1 : 0;
          }
        }
      } else {
        /** @type {number} */
        fn = 0;
        for (;16 > fn;fn++) {
          /** @type {number} */
          r20 = 0;
          for (;16 > r20;r20++) {
            /** @type {number} */
            name = 256 * fn + 16 * r20 + 0;
            /** @type {number} */
            type = 324 * (fn + 1) + 18 * (r20 + 1) + 17;
            Chunk.cacheBlock[type] = block[content.blocks[name]].type;
          }
        }
      }
      /** @type {number} */
      var m = r = 0;
      /** @type {number} */
      var t = 0;
      /** @type {number} */
      var e = 0;
      /** @type {number} */
      var n = 0;
      /** @type {number} */
      var on = 0;
      /** @type {number} */
      iLine = 0;
      /** @type {number} */
      type = 16 * k;
      /** @type {boolean} */
      elem = events = handlers = handler = callback = context = false;
      /** @type {number} */
      var i = name = 0;
      /** @type {number} */
      fn = params;
      for (;fn < Z;fn++) {
        /** @type {number} */
        r20 = R;
        for (;r20 < V;r20++) {
          /** @type {number} */
          old = expr;
          for (;old < T;old++) {
            if (elem = events = handlers = handler = callback = context = false, r = 324 * (fn + 1) + 18 * (r20 + 1) + (old + 1), p = Chunk.cacheBlock[r], 0 !== p) {
              if (m = r + 18, t = r - 18, e = r - 1, n = r + 1, on = r + 324, iLine = r - 324, name = 256 * fn + 16 * r20 + old, params = this.xPos % 5, 0 > params && (params += 5), index = this.zPos % 5, 0 > index && (index += 5), params = 65536 * (type + fn) + 256 * (16 * r20 + old) + 10 * (5 * params + index), 1 === p || (2 === p || (4 === p || 6 === p))) {
                if (1 !== Chunk.cacheBlock[on]) {
                  /** @type {boolean} */
                  callback = true;
                }
                if (1 !== Chunk.cacheBlock[iLine]) {
                  /** @type {boolean} */
                  context = true;
                }
                if (1 !== Chunk.cacheBlock[t]) {
                  /** @type {boolean} */
                  elem = true;
                }
                if (1 !== Chunk.cacheBlock[m]) {
                  /** @type {boolean} */
                  events = true;
                }
                if (1 !== Chunk.cacheBlock[e]) {
                  /** @type {boolean} */
                  handler = true;
                }
                if (1 !== Chunk.cacheBlock[n]) {
                  /** @type {boolean} */
                  handlers = true;
                }
              } else {
                if (3 < p) {
                  if (1 !== Chunk.cacheBlock[on]) {
                    if (Chunk.cacheBlock[on] !== p) {
                      /** @type {boolean} */
                      callback = true;
                    }
                  }
                  if (1 !== Chunk.cacheBlock[iLine]) {
                    if (Chunk.cacheBlock[iLine] !== p) {
                      /** @type {boolean} */
                      context = true;
                    }
                  }
                  if (1 !== Chunk.cacheBlock[t]) {
                    if (Chunk.cacheBlock[t] !== p) {
                      /** @type {boolean} */
                      elem = true;
                    }
                  }
                  if (1 !== Chunk.cacheBlock[m]) {
                    if (Chunk.cacheBlock[m] !== p) {
                      /** @type {boolean} */
                      events = true;
                    }
                  }
                  if (1 !== Chunk.cacheBlock[e]) {
                    if (Chunk.cacheBlock[e] !== p) {
                      /** @type {boolean} */
                      handler = true;
                    }
                  }
                  if (1 !== Chunk.cacheBlock[n]) {
                    if (Chunk.cacheBlock[n] !== p) {
                      /** @type {boolean} */
                      handlers = true;
                    }
                  }
                } else {
                  continue;
                }
              }
              if ((handler || (handlers || (elem || (events || (context || callback))))) && (iLine = window.punkty1[0], index = c.blocks[name], p = name % 2, 0 === p ? (blockX = c.data[name / 2] & 15 & block[c.blocks[name]].mask, i = c.add[name / 2] & 15) : (blockX = c.data[name / 2 - 0.5] >> 4 & 15 & block[c.blocks[name]].mask, i = c.add[name / 2 - 0.5] >> 4 & 15), o = void 0 === block[index][blockX] ? block[index][0] : block[index][blockX], void 0 !== o.shapeType)) {
                if (1 === o.shapeType || 11 === o.shapeType) {
                  if (r = p = o.shape, name = 0, 1 === o.useBiomeColor && (name = this.getBiomeColor(old, r20, 0)), 0 < i && (r = block[200][i - 1].shape), handler) {
                    /** @type {number} */
                    i = 0;
                    for (;i < r.front.length;i += 5) {
                      iLine.d[iLine.o++] = 16 * this.xPos + old + r.front[i];
                      iLine.d[iLine.o++] = type + fn + r.front[i + 1];
                      iLine.d[iLine.o++] = 16 * this.zPos + r20 + r.front[i + 2];
                      iLine.d[iLine.o++] = p.front[i + 3];
                      iLine.d[iLine.o++] = p.front[i + 4];
                      /** @type {number} */
                      iLine.d[iLine.o++] = 0;
                      /** @type {number} */
                      iLine.d[iLine.o++] = params + 1;
                      /** @type {number} */
                      iLine.d[iLine.o++] = 0.8;
                      iLine.d[iLine.o++] = name;
                    }
                  }
                  if (handlers) {
                    /** @type {number} */
                    i = 0;
                    for (;i < r.back.length;i += 5) {
                      iLine.d[iLine.o++] = 16 * this.xPos + old + r.back[i];
                      iLine.d[iLine.o++] = type + fn + r.back[i + 1];
                      iLine.d[iLine.o++] = 16 * this.zPos + r20 + r.back[i + 2];
                      iLine.d[iLine.o++] = p.back[i + 3];
                      iLine.d[iLine.o++] = p.back[i + 4];
                      /** @type {number} */
                      iLine.d[iLine.o++] = 0;
                      /** @type {number} */
                      iLine.d[iLine.o++] = params + 2;
                      /** @type {number} */
                      iLine.d[iLine.o++] = 0.8;
                      iLine.d[iLine.o++] = name;
                    }
                  }
                  if (elem) {
                    /** @type {number} */
                    i = 0;
                    for (;i < r.right.length;i += 5) {
                      iLine.d[iLine.o++] = 16 * this.xPos + old + r.right[i];
                      iLine.d[iLine.o++] = type + fn + r.right[i + 1];
                      iLine.d[iLine.o++] = 16 * this.zPos + r20 + r.right[i + 2];
                      iLine.d[iLine.o++] = p.right[i + 3];
                      iLine.d[iLine.o++] = p.right[i + 4];
                      /** @type {number} */
                      iLine.d[iLine.o++] = 0;
                      /** @type {number} */
                      iLine.d[iLine.o++] = params + 3;
                      /** @type {number} */
                      iLine.d[iLine.o++] = 0.55;
                      iLine.d[iLine.o++] = name;
                    }
                  }
                  if (events) {
                    /** @type {number} */
                    i = 0;
                    for (;i < r.left.length;i += 5) {
                      iLine.d[iLine.o++] = 16 * this.xPos + old + r.left[i];
                      iLine.d[iLine.o++] = type + fn + r.left[i + 1];
                      iLine.d[iLine.o++] = 16 * this.zPos + r20 + r.left[i + 2];
                      iLine.d[iLine.o++] = p.left[i + 3];
                      iLine.d[iLine.o++] = p.left[i + 4];
                      /** @type {number} */
                      iLine.d[iLine.o++] = 0;
                      /** @type {number} */
                      iLine.d[iLine.o++] = params + 4;
                      /** @type {number} */
                      iLine.d[iLine.o++] = 0.55;
                      iLine.d[iLine.o++] = name;
                    }
                  }
                  if (context) {
                    /** @type {number} */
                    i = 0;
                    for (;i < r.bottom.length;i += 5) {
                      iLine.d[iLine.o++] = 16 * this.xPos + old + r.bottom[i];
                      iLine.d[iLine.o++] = type + fn + r.bottom[i + 1];
                      iLine.d[iLine.o++] = 16 * this.zPos + r20 + r.bottom[i + 2];
                      iLine.d[iLine.o++] = p.bottom[i + 3];
                      iLine.d[iLine.o++] = p.bottom[i + 4];
                      /** @type {number} */
                      iLine.d[iLine.o++] = 0;
                      /** @type {number} */
                      iLine.d[iLine.o++] = params + 5;
                      /** @type {number} */
                      iLine.d[iLine.o++] = 0.3;
                      iLine.d[iLine.o++] = name;
                    }
                  }
                  if (callback) {
                    /** @type {number} */
                    i = 0;
                    for (;i < r.top.length;i += 5) {
                      iLine.d[iLine.o++] = 16 * this.xPos + old + r.top[i];
                      iLine.d[iLine.o++] = type + fn + r.top[i + 1];
                      iLine.d[iLine.o++] = 16 * this.zPos + r20 + r.top[i + 2];
                      iLine.d[iLine.o++] = p.top[i + 3];
                      iLine.d[iLine.o++] = p.top[i + 4];
                      /** @type {number} */
                      iLine.d[iLine.o++] = 0;
                      /** @type {number} */
                      iLine.d[iLine.o++] = params + 6;
                      /** @type {number} */
                      iLine.d[iLine.o++] = 1;
                      iLine.d[iLine.o++] = name;
                    }
                  }
                } else {
                  if (2 !== o.shapeType && 3 !== o.shapeType) {
                    if (4 === o.shapeType) {
                      if (p = o.shape, name = this.getBiomeColor(old, r20, 0), handler) {
                        /** @type {number} */
                        i = 0;
                        for (;i < p.front2.length;i += 5) {
                          iLine.d[iLine.o++] = 16 * this.xPos + old + p.front2[i];
                          iLine.d[iLine.o++] = type + fn + p.front2[i + 1];
                          iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.front2[i + 2];
                          iLine.d[iLine.o++] = p.front2[i + 3];
                          iLine.d[iLine.o++] = p.front2[i + 4];
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0;
                          /** @type {number} */
                          iLine.d[iLine.o++] = params + 1;
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0.8;
                          iLine.d[iLine.o++] = name;
                        }
                        /** @type {number} */
                        i = 0;
                        for (;i < p.front.length;i += 5) {
                          iLine.d[iLine.o++] = 16 * this.xPos + old + p.front[i];
                          iLine.d[iLine.o++] = type + fn + p.front[i + 1];
                          iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.front[i + 2];
                          iLine.d[iLine.o++] = p.front[i + 3];
                          iLine.d[iLine.o++] = p.front[i + 4];
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0;
                          /** @type {number} */
                          iLine.d[iLine.o++] = params + 1;
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0.8;
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0;
                        }
                      }
                      if (handlers) {
                        /** @type {number} */
                        i = 0;
                        for (;i < p.back2.length;i += 5) {
                          iLine.d[iLine.o++] = 16 * this.xPos + old + p.back2[i];
                          iLine.d[iLine.o++] = type + fn + p.back2[i + 1];
                          iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.back2[i + 2];
                          iLine.d[iLine.o++] = p.back2[i + 3];
                          iLine.d[iLine.o++] = p.back2[i + 4];
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0;
                          /** @type {number} */
                          iLine.d[iLine.o++] = params + 2;
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0.8;
                          iLine.d[iLine.o++] = name;
                        }
                        /** @type {number} */
                        i = 0;
                        for (;i < p.back.length;i += 5) {
                          iLine.d[iLine.o++] = 16 * this.xPos + old + p.back[i];
                          iLine.d[iLine.o++] = type + fn + p.back[i + 1];
                          iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.back[i + 2];
                          iLine.d[iLine.o++] = p.back[i + 3];
                          iLine.d[iLine.o++] = p.back[i + 4];
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0;
                          /** @type {number} */
                          iLine.d[iLine.o++] = params + 2;
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0.8;
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0;
                        }
                      }
                      if (elem) {
                        /** @type {number} */
                        i = 0;
                        for (;i < p.right2.length;i += 5) {
                          iLine.d[iLine.o++] = 16 * this.xPos + old + p.right2[i];
                          iLine.d[iLine.o++] = type + fn + p.right2[i + 1];
                          iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.right2[i + 2];
                          iLine.d[iLine.o++] = p.right2[i + 3];
                          iLine.d[iLine.o++] = p.right2[i + 4];
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0;
                          /** @type {number} */
                          iLine.d[iLine.o++] = params + 3;
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0.55;
                          iLine.d[iLine.o++] = name;
                        }
                        /** @type {number} */
                        i = 0;
                        for (;i < p.right.length;i += 5) {
                          iLine.d[iLine.o++] = 16 * this.xPos + old + p.right[i];
                          iLine.d[iLine.o++] = type + fn + p.right[i + 1];
                          iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.right[i + 2];
                          iLine.d[iLine.o++] = p.right[i + 3];
                          iLine.d[iLine.o++] = p.right[i + 4];
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0;
                          /** @type {number} */
                          iLine.d[iLine.o++] = params + 3;
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0.55;
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0;
                        }
                      }
                      if (events) {
                        /** @type {number} */
                        i = 0;
                        for (;i < p.left2.length;i += 5) {
                          iLine.d[iLine.o++] = 16 * this.xPos + old + p.left2[i];
                          iLine.d[iLine.o++] = type + fn + p.left2[i + 1];
                          iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.left2[i + 2];
                          iLine.d[iLine.o++] = p.left2[i + 3];
                          iLine.d[iLine.o++] = p.left2[i + 4];
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0;
                          /** @type {number} */
                          iLine.d[iLine.o++] = params + 4;
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0.55;
                          iLine.d[iLine.o++] = name;
                        }
                        /** @type {number} */
                        i = 0;
                        for (;i < p.left.length;i += 5) {
                          iLine.d[iLine.o++] = 16 * this.xPos + old + p.left[i];
                          iLine.d[iLine.o++] = type + fn + p.left[i + 1];
                          iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.left[i + 2];
                          iLine.d[iLine.o++] = p.left[i + 3];
                          iLine.d[iLine.o++] = p.left[i + 4];
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0;
                          /** @type {number} */
                          iLine.d[iLine.o++] = params + 4;
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0.55;
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0;
                        }
                      }
                      if (context) {
                        /** @type {number} */
                        i = 0;
                        for (;i < p.bottom.length;i += 5) {
                          iLine.d[iLine.o++] = 16 * this.xPos + old + p.bottom[i];
                          iLine.d[iLine.o++] = type + fn + p.bottom[i + 1];
                          iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                          iLine.d[iLine.o++] = p.bottom[i + 3];
                          iLine.d[iLine.o++] = p.bottom[i + 4];
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0;
                          /** @type {number} */
                          iLine.d[iLine.o++] = params + 5;
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0.3;
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0;
                        }
                      }
                      if (callback) {
                        /** @type {number} */
                        i = 0;
                        for (;i < p.top.length;i += 5) {
                          iLine.d[iLine.o++] = 16 * this.xPos + old + p.top[i];
                          iLine.d[iLine.o++] = type + fn + p.top[i + 1];
                          iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                          iLine.d[iLine.o++] = p.top[i + 3];
                          iLine.d[iLine.o++] = p.top[i + 4];
                          /** @type {number} */
                          iLine.d[iLine.o++] = 0;
                          /** @type {number} */
                          iLine.d[iLine.o++] = params + 6;
                          /** @type {number} */
                          iLine.d[iLine.o++] = 1;
                          iLine.d[iLine.o++] = name;
                        }
                      }
                    } else {
                      if (8 === o.shapeType) {
                        if (p = o.shape, name = 0, 1 === o.useBiomeColor && (name = this.getBiomeColor(old, r20, 0)), on = "", on += Chunk.cacheData[r], on = Chunk.cacheBlock[r] === Chunk.cacheBlock[m] ? on + Chunk.cacheData[m] : on + "x", on = Chunk.cacheBlock[r] === Chunk.cacheBlock[t] ? on + Chunk.cacheData[t] : on + "x", on = Chunk.cacheBlock[r] === Chunk.cacheBlock[e] ? on + Chunk.cacheData[e] : on + "x", on = Chunk.cacheBlock[r] === Chunk.cacheBlock[n] ? on + Chunk.cacheData[n] : on + "x",
                        t = 0, m = Chunk.stairsData[on], void 0 !== m && (p = 3 < Chunk.cacheData[r] ? block[index][9].shape : block[index][8].shape, t = 1), handler) {
                          /** @type {number} */
                          i = 0;
                          for (;i < p.front.length;i += 5) {
                            iLine.d[iLine.o++] = 16 * this.xPos + old + p.front[i];
                            iLine.d[iLine.o++] = type + fn + p.front[i + 1];
                            iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.front[i + 2];
                            iLine.d[iLine.o++] = p.front[i + 3];
                            iLine.d[iLine.o++] = p.front[i + 4];
                            /** @type {number} */
                            iLine.d[iLine.o++] = 0;
                            /** @type {number} */
                            iLine.d[iLine.o++] = params + 1;
                            /** @type {number} */
                            iLine.d[iLine.o++] = 0.8;
                            iLine.d[iLine.o++] = name;
                          }
                        }
                        if (handlers) {
                          /** @type {number} */
                          i = 0;
                          for (;i < p.back.length;i += 5) {
                            iLine.d[iLine.o++] = 16 * this.xPos + old + p.back[i];
                            iLine.d[iLine.o++] = type + fn + p.back[i + 1];
                            iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.back[i + 2];
                            iLine.d[iLine.o++] = p.back[i + 3];
                            iLine.d[iLine.o++] = p.back[i + 4];
                            /** @type {number} */
                            iLine.d[iLine.o++] = 0;
                            /** @type {number} */
                            iLine.d[iLine.o++] = params + 2;
                            /** @type {number} */
                            iLine.d[iLine.o++] = 0.8;
                            iLine.d[iLine.o++] = name;
                          }
                        }
                        if (elem) {
                          /** @type {number} */
                          i = 0;
                          for (;i < p.right.length;i += 5) {
                            iLine.d[iLine.o++] = 16 * this.xPos + old + p.right[i];
                            iLine.d[iLine.o++] = type + fn + p.right[i + 1];
                            iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.right[i + 2];
                            iLine.d[iLine.o++] = p.right[i + 3];
                            iLine.d[iLine.o++] = p.right[i + 4];
                            /** @type {number} */
                            iLine.d[iLine.o++] = 0;
                            /** @type {number} */
                            iLine.d[iLine.o++] = params + 3;
                            /** @type {number} */
                            iLine.d[iLine.o++] = 0.55;
                            iLine.d[iLine.o++] = name;
                          }
                        }
                        if (events) {
                          /** @type {number} */
                          i = 0;
                          for (;i < p.left.length;i += 5) {
                            iLine.d[iLine.o++] = 16 * this.xPos + old + p.left[i];
                            iLine.d[iLine.o++] = type + fn + p.left[i + 1];
                            iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.left[i + 2];
                            iLine.d[iLine.o++] = p.left[i + 3];
                            iLine.d[iLine.o++] = p.left[i + 4];
                            /** @type {number} */
                            iLine.d[iLine.o++] = 0;
                            /** @type {number} */
                            iLine.d[iLine.o++] = params + 4;
                            /** @type {number} */
                            iLine.d[iLine.o++] = 0.55;
                            iLine.d[iLine.o++] = name;
                          }
                        }
                        if (context) {
                          /** @type {number} */
                          i = 0;
                          for (;i < p.bottom.length;i += 5) {
                            iLine.d[iLine.o++] = 16 * this.xPos + old + p.bottom[i];
                            iLine.d[iLine.o++] = type + fn + p.bottom[i + 1];
                            iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                            iLine.d[iLine.o++] = p.bottom[i + 3];
                            iLine.d[iLine.o++] = p.bottom[i + 4];
                            /** @type {number} */
                            iLine.d[iLine.o++] = 0;
                            /** @type {number} */
                            iLine.d[iLine.o++] = params + 5;
                            /** @type {number} */
                            iLine.d[iLine.o++] = 0.3;
                            iLine.d[iLine.o++] = name;
                          }
                        }
                        if (callback) {
                          /** @type {number} */
                          i = 0;
                          for (;i < p.top.length;i += 5) {
                            iLine.d[iLine.o++] = 16 * this.xPos + old + p.top[i];
                            iLine.d[iLine.o++] = type + fn + p.top[i + 1];
                            iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                            iLine.d[iLine.o++] = p.top[i + 3];
                            iLine.d[iLine.o++] = p.top[i + 4];
                            /** @type {number} */
                            iLine.d[iLine.o++] = 0;
                            /** @type {number} */
                            iLine.d[iLine.o++] = params + 6;
                            /** @type {number} */
                            iLine.d[iLine.o++] = 1;
                            iLine.d[iLine.o++] = name;
                          }
                        }
                        if (1 === t) {
                          p = block[index][10].shape;
                          /** @type {number} */
                          e = t = 0;
                          if (3 < Chunk.cacheData[r]) {
                            /** @type {number} */
                            e = -0.5;
                          }
                          /** @type {number} */
                          n = r = 0;
                          for (;4 > n;n++) {
                            if (0 !== m.charCodeAt(n) - 48) {
                              if (t = n % 2 / 2, r = 1 < n ? 0.5 : 0, handler) {
                                /** @type {number} */
                                i = 0;
                                for (;i < p.front.length;i += 5) {
                                  iLine.d[iLine.o++] = t + 16 * this.xPos + old + p.front[i];
                                  iLine.d[iLine.o++] = e + type + fn + p.front[i + 1];
                                  iLine.d[iLine.o++] = r + 16 * this.zPos + r20 + p.front[i + 2];
                                  iLine.d[iLine.o++] = p.front[i + 3];
                                  iLine.d[iLine.o++] = p.front[i + 4];
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = params + 1;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0.8;
                                  iLine.d[iLine.o++] = name;
                                }
                              }
                              if (handlers) {
                                /** @type {number} */
                                i = 0;
                                for (;i < p.back.length;i += 5) {
                                  iLine.d[iLine.o++] = t + 16 * this.xPos + old + p.back[i];
                                  iLine.d[iLine.o++] = e + type + fn + p.back[i + 1];
                                  iLine.d[iLine.o++] = r + 16 * this.zPos + r20 + p.back[i + 2];
                                  iLine.d[iLine.o++] = p.back[i + 3];
                                  iLine.d[iLine.o++] = p.back[i + 4];
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = params + 2;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0.8;
                                  iLine.d[iLine.o++] = name;
                                }
                              }
                              if (elem) {
                                /** @type {number} */
                                i = 0;
                                for (;i < p.right.length;i += 5) {
                                  iLine.d[iLine.o++] = t + 16 * this.xPos + old + p.right[i];
                                  iLine.d[iLine.o++] = e + type + fn + p.right[i + 1];
                                  iLine.d[iLine.o++] = r + 16 * this.zPos + r20 + p.right[i + 2];
                                  iLine.d[iLine.o++] = p.right[i + 3];
                                  iLine.d[iLine.o++] = p.right[i + 4];
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = params + 3;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0.55;
                                  iLine.d[iLine.o++] = name;
                                }
                              }
                              if (events) {
                                /** @type {number} */
                                i = 0;
                                for (;i < p.left.length;i += 5) {
                                  iLine.d[iLine.o++] = t + 16 * this.xPos + old + p.left[i];
                                  iLine.d[iLine.o++] = e + type + fn + p.left[i + 1];
                                  iLine.d[iLine.o++] = r + 16 * this.zPos + r20 + p.left[i + 2];
                                  iLine.d[iLine.o++] = p.left[i + 3];
                                  iLine.d[iLine.o++] = p.left[i + 4];
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = params + 4;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0.55;
                                  iLine.d[iLine.o++] = name;
                                }
                              }
                              if (context) {
                                /** @type {number} */
                                i = 0;
                                for (;i < p.bottom.length;i += 5) {
                                  iLine.d[iLine.o++] = t + 16 * this.xPos + old + p.bottom[i];
                                  iLine.d[iLine.o++] = e + type + fn + p.bottom[i + 1];
                                  iLine.d[iLine.o++] = r + 16 * this.zPos + r20 + p.bottom[i + 2];
                                  iLine.d[iLine.o++] = p.bottom[i + 3];
                                  iLine.d[iLine.o++] = p.bottom[i + 4];
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = params + 5;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0.3;
                                  iLine.d[iLine.o++] = name;
                                }
                              }
                              if (callback) {
                                /** @type {number} */
                                i = 0;
                                for (;i < p.top.length;i += 5) {
                                  iLine.d[iLine.o++] = t + 16 * this.xPos + old + p.top[i];
                                  iLine.d[iLine.o++] = e + type + fn + p.top[i + 1];
                                  iLine.d[iLine.o++] = r + 16 * this.zPos + r20 + p.top[i + 2];
                                  iLine.d[iLine.o++] = p.top[i + 3];
                                  iLine.d[iLine.o++] = p.top[i + 4];
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = params + 6;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 1;
                                  iLine.d[iLine.o++] = name;
                                }
                              }
                            }
                          }
                        }
                      } else {
                        if (5 === o.shapeType) {
                          if (handler || (handlers || (elem || (events || (callback || context))))) {
                            p = o.shape;
                            /** @type {number} */
                            name = 0;
                            if (1 === o.useBiomeColor) {
                              name = this.getBiomeColor(old, r20, 0);
                            }
                            /** @type {number} */
                            i = 0;
                            for (;i < p.front.length;i += 5) {
                              if (0 === i % 30) {
                                if ((60 === i || 120 === i) && (Chunk.cacheBlock[r] !== Chunk.cacheBlock[m] && 1 !== Chunk.cacheBlock[m])) {
                                  i += 25;
                                  continue;
                                }
                                if ((30 === i || 90 === i) && (Chunk.cacheBlock[r] !== Chunk.cacheBlock[t] && 1 !== Chunk.cacheBlock[t])) {
                                  i += 25;
                                  continue;
                                }
                              }
                              iLine.d[iLine.o++] = 16 * this.xPos + old + p.front[i];
                              iLine.d[iLine.o++] = type + fn + p.front[i + 1];
                              iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.front[i + 2];
                              iLine.d[iLine.o++] = p.front[i + 3];
                              iLine.d[iLine.o++] = p.front[i + 4];
                              /** @type {number} */
                              iLine.d[iLine.o++] = 0;
                              /** @type {number} */
                              iLine.d[iLine.o++] = params + 1;
                              /** @type {number} */
                              iLine.d[iLine.o++] = 0.8;
                              iLine.d[iLine.o++] = name;
                            }
                            /** @type {number} */
                            i = 0;
                            for (;i < p.back.length;i += 5) {
                              if (0 === i % 30) {
                                if ((60 === i || 120 === i) && (Chunk.cacheBlock[r] !== Chunk.cacheBlock[m] && 1 !== Chunk.cacheBlock[m])) {
                                  i += 25;
                                  continue;
                                }
                                if ((30 === i || 90 === i) && (Chunk.cacheBlock[r] !== Chunk.cacheBlock[t] && 1 !== Chunk.cacheBlock[t])) {
                                  i += 25;
                                  continue;
                                }
                              }
                              iLine.d[iLine.o++] = 16 * this.xPos + old + p.back[i];
                              iLine.d[iLine.o++] = type + fn + p.back[i + 1];
                              iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.back[i + 2];
                              iLine.d[iLine.o++] = p.back[i + 3];
                              iLine.d[iLine.o++] = p.back[i + 4];
                              /** @type {number} */
                              iLine.d[iLine.o++] = 0;
                              /** @type {number} */
                              iLine.d[iLine.o++] = params + 2;
                              /** @type {number} */
                              iLine.d[iLine.o++] = 0.8;
                              iLine.d[iLine.o++] = name;
                            }
                            /** @type {number} */
                            i = 0;
                            for (;i < p.right.length;i += 5) {
                              if (0 === i % 30) {
                                if ((30 === i || 90 === i) && (Chunk.cacheBlock[r] !== Chunk.cacheBlock[e] && 1 !== Chunk.cacheBlock[e])) {
                                  i += 25;
                                  continue;
                                }
                                if ((60 === i || 120 === i) && (Chunk.cacheBlock[r] !== Chunk.cacheBlock[n] && 1 !== Chunk.cacheBlock[n])) {
                                  i += 25;
                                  continue;
                                }
                              }
                              iLine.d[iLine.o++] = 16 * this.xPos + old + p.right[i];
                              iLine.d[iLine.o++] = type + fn + p.right[i + 1];
                              iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.right[i + 2];
                              iLine.d[iLine.o++] = p.right[i + 3];
                              iLine.d[iLine.o++] = p.right[i + 4];
                              /** @type {number} */
                              iLine.d[iLine.o++] = 0;
                              /** @type {number} */
                              iLine.d[iLine.o++] = params + 3;
                              /** @type {number} */
                              iLine.d[iLine.o++] = 0.55;
                              iLine.d[iLine.o++] = name;
                            }
                            /** @type {number} */
                            i = 0;
                            for (;i < p.left.length;i += 5) {
                              if (0 === i % 30) {
                                if ((30 === i || 90 === i) && (Chunk.cacheBlock[r] !== Chunk.cacheBlock[e] && 1 !== Chunk.cacheBlock[e])) {
                                  i += 25;
                                  continue;
                                }
                                if ((60 === i || 120 === i) && (Chunk.cacheBlock[r] !== Chunk.cacheBlock[n] && 1 !== Chunk.cacheBlock[n])) {
                                  i += 25;
                                  continue;
                                }
                              }
                              iLine.d[iLine.o++] = 16 * this.xPos + old + p.left[i];
                              iLine.d[iLine.o++] = type + fn + p.left[i + 1];
                              iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.left[i + 2];
                              iLine.d[iLine.o++] = p.left[i + 3];
                              iLine.d[iLine.o++] = p.left[i + 4];
                              /** @type {number} */
                              iLine.d[iLine.o++] = 0;
                              /** @type {number} */
                              iLine.d[iLine.o++] = params + 4;
                              /** @type {number} */
                              iLine.d[iLine.o++] = 0.55;
                              iLine.d[iLine.o++] = name;
                            }
                            /** @type {number} */
                            i = 0;
                            for (;i < p.bottom.length;i += 5) {
                              if (0 === i % 30) {
                                if ((30 === i || 150 === i) && (Chunk.cacheBlock[r] !== Chunk.cacheBlock[t] && 1 !== Chunk.cacheBlock[t])) {
                                  i += 25;
                                  continue;
                                }
                                if ((60 === i || 180 === i) && (Chunk.cacheBlock[r] !== Chunk.cacheBlock[m] && 1 !== Chunk.cacheBlock[m])) {
                                  i += 25;
                                  continue;
                                }
                                if ((90 === i || 210 === i) && (Chunk.cacheBlock[r] !== Chunk.cacheBlock[e] && 1 !== Chunk.cacheBlock[e])) {
                                  i += 25;
                                  continue;
                                }
                                if ((120 === i || 240 === i) && (Chunk.cacheBlock[r] !== Chunk.cacheBlock[n] && 1 !== Chunk.cacheBlock[n])) {
                                  i += 25;
                                  continue;
                                }
                              }
                              iLine.d[iLine.o++] = 16 * this.xPos + old + p.bottom[i];
                              iLine.d[iLine.o++] = type + fn + p.bottom[i + 1];
                              iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                              iLine.d[iLine.o++] = p.bottom[i + 3];
                              iLine.d[iLine.o++] = p.bottom[i + 4];
                              /** @type {number} */
                              iLine.d[iLine.o++] = 0;
                              /** @type {number} */
                              iLine.d[iLine.o++] = params + 5;
                              /** @type {number} */
                              iLine.d[iLine.o++] = 0.3;
                              iLine.d[iLine.o++] = name;
                            }
                            /** @type {number} */
                            i = 0;
                            for (;i < p.top.length;i += 5) {
                              if (0 === i % 30) {
                                if ((30 === i || 150 === i) && (Chunk.cacheBlock[r] !== Chunk.cacheBlock[t] && 1 !== Chunk.cacheBlock[t])) {
                                  i += 25;
                                  continue;
                                }
                                if ((60 === i || 180 === i) && (Chunk.cacheBlock[r] !== Chunk.cacheBlock[m] && 1 !== Chunk.cacheBlock[m])) {
                                  i += 25;
                                  continue;
                                }
                                if ((90 === i || 210 === i) && (Chunk.cacheBlock[r] !== Chunk.cacheBlock[e] && 1 !== Chunk.cacheBlock[e])) {
                                  i += 25;
                                  continue;
                                }
                                if ((120 === i || 240 === i) && (Chunk.cacheBlock[r] !== Chunk.cacheBlock[n] && 1 !== Chunk.cacheBlock[n])) {
                                  i += 25;
                                  continue;
                                }
                              }
                              iLine.d[iLine.o++] = 16 * this.xPos + old + p.top[i];
                              iLine.d[iLine.o++] = type + fn + p.top[i + 1];
                              iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                              iLine.d[iLine.o++] = p.top[i + 3];
                              iLine.d[iLine.o++] = p.top[i + 4];
                              /** @type {number} */
                              iLine.d[iLine.o++] = 0;
                              /** @type {number} */
                              iLine.d[iLine.o++] = params + 6;
                              /** @type {number} */
                              iLine.d[iLine.o++] = 1;
                              iLine.d[iLine.o++] = name;
                            }
                          }
                        } else {
                          if (6 === o.shapeType) {
                            if (p = o.shape, name = 0, 1 === o.useBiomeColor && (name = this.getBiomeColor(old, r20, 0)), handler || (handlers || (elem || (events || (context || callback))))) {
                              if (5 === blockX) {
                                /** @type {number} */
                                i = 0;
                                for (;i < p.front.length;i += 5) {
                                  iLine.d[iLine.o++] = 16 * this.xPos + old + p.front[i];
                                  iLine.d[iLine.o++] = type + fn + p.front[i + 1];
                                  iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.front[i + 2];
                                  iLine.d[iLine.o++] = p.front[i + 3];
                                  iLine.d[iLine.o++] = p.front[i + 4];
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = params + 1;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0.8;
                                  iLine.d[iLine.o++] = name;
                                }
                              }
                              if (4 === blockX) {
                                /** @type {number} */
                                i = 0;
                                for (;i < p.back.length;i += 5) {
                                  iLine.d[iLine.o++] = 16 * this.xPos + old + p.back[i];
                                  iLine.d[iLine.o++] = type + fn + p.back[i + 1];
                                  iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.back[i + 2];
                                  iLine.d[iLine.o++] = p.back[i + 3];
                                  iLine.d[iLine.o++] = p.back[i + 4];
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = params + 2;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0.8;
                                  iLine.d[iLine.o++] = name;
                                }
                              }
                              if (3 === blockX) {
                                /** @type {number} */
                                i = 0;
                                for (;i < p.right.length;i += 5) {
                                  iLine.d[iLine.o++] = 16 * this.xPos + old + p.right[i];
                                  iLine.d[iLine.o++] = type + fn + p.right[i + 1];
                                  iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.right[i + 2];
                                  iLine.d[iLine.o++] = p.right[i + 3];
                                  iLine.d[iLine.o++] = p.right[i + 4];
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = params + 3;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0.55;
                                  iLine.d[iLine.o++] = name;
                                }
                              }
                              if (2 === blockX) {
                                /** @type {number} */
                                i = 0;
                                for (;i < p.left.length;i += 5) {
                                  iLine.d[iLine.o++] = 16 * this.xPos + old + p.left[i];
                                  iLine.d[iLine.o++] = type + fn + p.left[i + 1];
                                  iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.left[i + 2];
                                  iLine.d[iLine.o++] = p.left[i + 3];
                                  iLine.d[iLine.o++] = p.left[i + 4];
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = params + 4;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0.55;
                                  iLine.d[iLine.o++] = name;
                                }
                              }
                            }
                          } else {
                            if (9 === o.shapeType) {
                              if (p = o.shape, name = 0, 1 === o.useBiomeColor && (name = this.getBiomeColor(old, r20, 2)), handler) {
                                /** @type {number} */
                                i = 0;
                                for (;i < p.front.length;i += 5) {
                                  iLine.d[iLine.o++] = 16 * this.xPos + old + p.front[i];
                                  iLine.d[iLine.o++] = type + fn + p.front[i + 1];
                                  iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.front[i + 2];
                                  iLine.d[iLine.o++] = p.front[i + 3];
                                  iLine.d[iLine.o++] = p.front[i + 4];
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = params + 1;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0.8;
                                  iLine.d[iLine.o++] = name;
                                }
                              }
                              if (handlers) {
                                /** @type {number} */
                                i = 0;
                                for (;i < p.back.length;i += 5) {
                                  iLine.d[iLine.o++] = 16 * this.xPos + old + p.back[i];
                                  iLine.d[iLine.o++] = type + fn + p.back[i + 1];
                                  iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.back[i + 2];
                                  iLine.d[iLine.o++] = p.back[i + 3];
                                  iLine.d[iLine.o++] = p.back[i + 4];
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = params + 2;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0.8;
                                  iLine.d[iLine.o++] = name;
                                }
                              }
                              if (elem) {
                                /** @type {number} */
                                i = 0;
                                for (;i < p.right.length;i += 5) {
                                  iLine.d[iLine.o++] = 16 * this.xPos + old + p.right[i];
                                  iLine.d[iLine.o++] = type + fn + p.right[i + 1];
                                  iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.right[i + 2];
                                  iLine.d[iLine.o++] = p.right[i + 3];
                                  iLine.d[iLine.o++] = p.right[i + 4];
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = params + 3;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0.55;
                                  iLine.d[iLine.o++] = name;
                                }
                              }
                              if (events) {
                                /** @type {number} */
                                i = 0;
                                for (;i < p.left.length;i += 5) {
                                  iLine.d[iLine.o++] = 16 * this.xPos + old + p.left[i];
                                  iLine.d[iLine.o++] = type + fn + p.left[i + 1];
                                  iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.left[i + 2];
                                  iLine.d[iLine.o++] = p.left[i + 3];
                                  iLine.d[iLine.o++] = p.left[i + 4];
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = params + 4;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0.55;
                                  iLine.d[iLine.o++] = name;
                                }
                              }
                              if (context) {
                                /** @type {number} */
                                i = 0;
                                for (;i < p.bottom.length;i += 5) {
                                  iLine.d[iLine.o++] = 16 * this.xPos + old + p.bottom[i];
                                  iLine.d[iLine.o++] = type + fn + p.bottom[i + 1];
                                  iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                                  iLine.d[iLine.o++] = p.bottom[i + 3];
                                  iLine.d[iLine.o++] = p.bottom[i + 4];
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = params + 5;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0.3;
                                  iLine.d[iLine.o++] = name;
                                }
                              }
                              if (callback) {
                                /** @type {number} */
                                i = 0;
                                for (;i < p.top.length;i += 5) {
                                  iLine.d[iLine.o++] = 16 * this.xPos + old + p.top[i];
                                  iLine.d[iLine.o++] = type + fn + p.top[i + 1];
                                  iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.top[i + 2];
                                  iLine.d[iLine.o++] = p.top[i + 3];
                                  iLine.d[iLine.o++] = p.top[i + 4];
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 0;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = params + 6;
                                  /** @type {number} */
                                  iLine.d[iLine.o++] = 1;
                                  iLine.d[iLine.o++] = name;
                                }
                              }
                            } else {
                              if (10 === o.shapeType && (p = o.shape, name = 0, 1 === o.useBiomeColor && (name = this.getBiomeColor(old, r20, 0)), handler || (handlers || (elem || (events || (context || callback)))))) {
                                if (8 === (Chunk.cacheData[r] & 8)) {
                                  /** @type {number} */
                                  i = 0;
                                  for (;i < p.front.length;i += 5) {
                                    iLine.d[iLine.o++] = 16 * this.xPos + old + p.front[i];
                                    iLine.d[iLine.o++] = type + fn + p.front[i + 1];
                                    iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.front[i + 2];
                                    iLine.d[iLine.o++] = p.front[i + 3];
                                    iLine.d[iLine.o++] = p.front[i + 4];
                                    /** @type {number} */
                                    iLine.d[iLine.o++] = 0;
                                    /** @type {number} */
                                    iLine.d[iLine.o++] = params + 1;
                                    /** @type {number} */
                                    iLine.d[iLine.o++] = 0.8;
                                    iLine.d[iLine.o++] = name;
                                  }
                                }
                                if (2 === (Chunk.cacheData[r] & 2)) {
                                  /** @type {number} */
                                  i = 0;
                                  for (;i < p.back.length;i += 5) {
                                    iLine.d[iLine.o++] = 16 * this.xPos + old + p.back[i];
                                    iLine.d[iLine.o++] = type + fn + p.back[i + 1];
                                    iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.back[i + 2];
                                    iLine.d[iLine.o++] = p.back[i + 3];
                                    iLine.d[iLine.o++] = p.back[i + 4];
                                    /** @type {number} */
                                    iLine.d[iLine.o++] = 0;
                                    /** @type {number} */
                                    iLine.d[iLine.o++] = params + 2;
                                    /** @type {number} */
                                    iLine.d[iLine.o++] = 0.8;
                                    iLine.d[iLine.o++] = name;
                                  }
                                }
                                if (1 === (Chunk.cacheData[r] & 1)) {
                                  /** @type {number} */
                                  i = 0;
                                  for (;i < p.right.length;i += 5) {
                                    iLine.d[iLine.o++] = 16 * this.xPos + old + p.right[i];
                                    iLine.d[iLine.o++] = type + fn + p.right[i + 1];
                                    iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.right[i + 2];
                                    iLine.d[iLine.o++] = p.right[i + 3];
                                    iLine.d[iLine.o++] = p.right[i + 4];
                                    /** @type {number} */
                                    iLine.d[iLine.o++] = 0;
                                    /** @type {number} */
                                    iLine.d[iLine.o++] = params + 3;
                                    /** @type {number} */
                                    iLine.d[iLine.o++] = 0.55;
                                    iLine.d[iLine.o++] = name;
                                  }
                                }
                                if (4 === (Chunk.cacheData[r] & 4)) {
                                  /** @type {number} */
                                  i = 0;
                                  for (;i < p.left.length;i += 5) {
                                    iLine.d[iLine.o++] = 16 * this.xPos + old + p.left[i];
                                    iLine.d[iLine.o++] = type + fn + p.left[i + 1];
                                    iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.left[i + 2];
                                    iLine.d[iLine.o++] = p.left[i + 3];
                                    iLine.d[iLine.o++] = p.left[i + 4];
                                    /** @type {number} */
                                    iLine.d[iLine.o++] = 0;
                                    /** @type {number} */
                                    iLine.d[iLine.o++] = params + 4;
                                    /** @type {number} */
                                    iLine.d[iLine.o++] = 0.55;
                                    iLine.d[iLine.o++] = name;
                                  }
                                }
                                if (1 === Chunk.cacheBlock[on] || 0 === Chunk.cacheData[r]) {
                                  /** @type {number} */
                                  i = 0;
                                  for (;i < p.bottom.length;i += 5) {
                                    iLine.d[iLine.o++] = 16 * this.xPos + old + p.bottom[i];
                                    iLine.d[iLine.o++] = type + fn + p.bottom[i + 1];
                                    iLine.d[iLine.o++] = 16 * this.zPos + r20 + p.bottom[i + 2];
                                    iLine.d[iLine.o++] = p.bottom[i + 3];
                                    iLine.d[iLine.o++] = p.bottom[i + 4];
                                    /** @type {number} */
                                    iLine.d[iLine.o++] = 0;
                                    /** @type {number} */
                                    iLine.d[iLine.o++] = params + 5;
                                    /** @type {number} */
                                    iLine.d[iLine.o++] = 0.3;
                                    iLine.d[iLine.o++] = name;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return 0 < window.punkty1[0].o ? new Float32Array(window.punkty1[0].d.buffer, 0, window.punkty1[0].o) : false;
};
