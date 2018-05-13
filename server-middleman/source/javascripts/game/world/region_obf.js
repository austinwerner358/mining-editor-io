/**
 * @param {string} dataAndEvents
 * @param {string} deepDataAndEvents
 * @return {undefined}
 */
function RegionMCA(dataAndEvents, deepDataAndEvents) {
  /** @type {string} */
  this.gameRoot = dataAndEvents;
  /** @type {string} */
  this.worldName = deepDataAndEvents;
  /** @type {Array} */
  this.regionData = [];
  /** @type {Array} */
  this.localIChunk = [];
  /** @type {Array} */
  this.rchunk = [];
  /** @type {number} */
  this.iChunk = 0;
  /** @type {boolean} */
  chronometer.stopGame = false;
  // TODO: potentially turn the thread code object into multiple steps and add error handling (such as setting assigning a file url instead)
  this.threadCodeBlobUrlForServerFile = window.URL.createObjectURL(new Blob([ "self.addEventListener('message', (function(e) {\
    var regionData, xhr;\
    xhr = new XMLHttpRequest;\
    xhr.open('GET', e.data.name, false);\
    xhr.responseType = 'arraybuffer';\
    xhr.send();\
    if (xhr.status === 200) {\
      regionData = new Uint8Array(xhr.response);\
    } else {\
      self.postMessage({\
        loaded: 0,\
        x: e.data.x,\
        y: e.data.y,\
        error: xhr.statusText\
      });\
      self.close();\
      return;\
    }\
    self.postMessage({\
      loaded: 1,\
      x: e.data.x,\
      y: e.data.y,\
      data: regionData.buffer\
    }, [regionData.buffer]);\
    self.close();\
  }), false);"], { type: 'application/javascript' } ));
  // NOTE: if a deconstructor is made for the RegionMCA object, move the blob object to a global context or deallocate with the following
  // window.URL.revokeObjectURL(loadFileLoadingThreadCodeUrl);
}
/**
 * @return {undefined}
 */
RegionMCA.prototype.new100msec = function() {
};
/**
 * @return {undefined}
 */
RegionMCA.prototype.new50msec = function() {
};
/**
 * @param {?} opt_connectCb
 * @param {?} disconnect
 * @return {undefined}
 */
RegionMCA.prototype.connect = function(opt_connectCb, disconnect) {
  console.log("not supported");
};
/**
 * @param {number} digit
 * @param {number} carry
 * @param {number} pos
 * @param {?} deepDataAndEvents
 * @param {number} sqlt
 * @return {?}
 */
RegionMCA.prototype.getChunkBlock = function(digit, carry, pos, deepDataAndEvents, sqlt) {
  return digit = 1E4 * digit + carry, void 0 !== this.rchunk[digit] && (-1 !== this.rchunk[digit] && -2 !== this.rchunk[digit]) ? this.rchunk[digit].getBlock(pos, deepDataAndEvents, sqlt) : {
    id : 0,
    data : 0
  };
};
/**
 * @param {Array} until
 * @return {?}
 */
RegionMCA.prototype.getNearestPosition = function(until) {
  /** @type {number} */
  var l = Math.floor(until[0] / 16);
  /** @type {number} */
  var c = Math.floor(until[2] / 16);
  /** @type {number} */
  var indexLast = 1E4 * l + c;
  return void 0 !== this.rchunk[indexLast] && (-1 !== this.rchunk[indexLast] && (-2 !== this.rchunk[indexLast] && (until[0] -= 16 * l, 0 > until[0] && (until[0] += 16), until[2] -= 16 * c, 0 > until[2] && (until[2] += 16), until = this.rchunk[indexLast].getNearestPosition(until), false !== until))) ? [16 * l + until[0], until[1], 16 * c + until[2]] : false;
};
/**
 * @param {number} pos
 * @param {?} deepDataAndEvents
 * @param {number} t
 * @return {?}
 */
RegionMCA.prototype.getBlock = function(pos, deepDataAndEvents, t) {
  /** @type {number} */
  var diff = Math.floor(pos / 16);
  /** @type {number} */
  var firstNum = Math.floor(t / 16);
  /** @type {number} */
  var blockId = 1E4 * diff + firstNum;
  return void 0 !== this.rchunk[blockId] && (-1 !== this.rchunk[blockId] && -2 !== this.rchunk[blockId]) ? (pos -= 16 * diff, 0 > pos && (pos += 16), t -= 16 * firstNum, 0 > t && (t += 16), this.rchunk[blockId].getBlock(pos, deepDataAndEvents, t)) : {
    id : 0,
    data : 0
  };
};
/**
 * @param {number} digit
 * @param {number} carry
 * @param {number} m1
 * @param {number} startAt
 * @param {number} hue
 * @param {?} deepDataAndEvents
 * @param {?} triggerRoute
 * @return {undefined}
 */
RegionMCA.prototype.updateChunkBlock = function(digit, carry, m1, startAt, hue, deepDataAndEvents, triggerRoute) {
  digit = 1E4 * digit + carry;
  if (void 0 !== this.rchunk[digit]) {
    if (-1 !== this.rchunk[digit]) {
      if (-2 !== this.rchunk[digit]) {
        this.rchunk[digit].updateBlock(m1, startAt, hue, deepDataAndEvents, triggerRoute);
      }
    }
  }
};
/**
 * @param {number} num
 * @param {number} startAt
 * @param {number} hue
 * @param {?} deepDataAndEvents
 * @param {?} triggerRoute
 * @return {undefined}
 */
RegionMCA.prototype.updateBlock = function(num, startAt, hue, deepDataAndEvents, triggerRoute) {
  /** @type {number} */
  var dataSrcLen = Math.floor(num / 16);
  /** @type {number} */
  var k = Math.floor(hue / 16);
  /** @type {number} */
  var secret = 1E4 * dataSrcLen + k;
  if (void 0 !== this.rchunk[secret]) {
    if (-1 !== this.rchunk[secret]) {
      if (-2 !== this.rchunk[secret]) {
        num -= 16 * dataSrcLen;
        if (0 > num) {
          num += 16;
        }
        hue -= 16 * k;
        if (0 > hue) {
          hue += 16;
        }
        this.rchunk[secret].updateBlock(Math.floor(num), Math.floor(startAt), Math.floor(hue), deepDataAndEvents, triggerRoute);
      }
    }
  }
};
/**
 * @param {number} t
 * @param {number} channel
 * @param {number} y
 * @param {?} deepDataAndEvents
 * @param {?} shallow
 * @return {undefined}
 */
RegionMCA.prototype.setBlock = function(t, channel, y, deepDataAndEvents, shallow) {
  /** @type {number} */
  var l = Math.floor(t / 16);
  /** @type {number} */
  var c = Math.floor(y / 16);
  /** @type {number} */
  var indexLast = 1E4 * l + c;
  if (void 0 !== this.rchunk[indexLast]) {
    if (-1 !== this.rchunk[indexLast]) {
      if (-2 !== this.rchunk[indexLast]) {
        t -= 16 * l;
        if (0 > t) {
          t += 16;
        }
        y -= 16 * c;
        if (0 > y) {
          y += 16;
        }
        this.rchunk[indexLast].setBlock(Math.floor(t), Math.floor(channel), Math.floor(y), deepDataAndEvents, shallow);
      }
    }
  }
};
/**
 * @param {number} digit
 * @param {number} carry
 * @param {?} deepDataAndEvents
 * @param {?} opt_obj2
 * @param {?} walkers
 * @return {undefined}
 */
RegionMCA.prototype.changeChunkBlockAdd = function(digit, carry, deepDataAndEvents, opt_obj2, walkers) {
  digit = 1E4 * digit + carry;
  if (void 0 !== this.rchunk[digit]) {
    if (-1 !== this.rchunk[digit]) {
      if (-2 !== this.rchunk[digit]) {
        this.rchunk[digit].changeAdd(deepDataAndEvents, opt_obj2, walkers);
      }
    }
  }
};
/**
 * @return {undefined}
 */
RegionMCA.prototype.updateChunks = function() {
  /** @type {number} */
  var startIndex = (new Date).getTime();
  /** @type {number} */
  var reply = 0;
  var i;
  for (i in this.rchunk) {
    if (void 0 !== this.rchunk[i]) {
      if (-1 !== this.rchunk[i]) {
        if (-2 !== this.rchunk[i]) {
          if (true === this.rchunk[i].needsUpdate) {
            this.rchunk[i].update();
            reply++;
          }
        }
      }
    }
  }
  /** @type {number} */
  i = (new Date).getTime();
  console.log("update chunk " + (i - startIndex) + " " + reply);
};
/**
 * @return {undefined}
 */
RegionMCA.prototype.deleteBuffers = function() {
  /** @type {number} */
  var offset = (new Date).getTime();
  /** @type {number} */
  var reply = 0;
  var id;
  for (id in this.rchunk) {
    if (void 0 !== this.rchunk[id]) {
      if (-1 !== this.rchunk[id]) {
        if (-2 !== this.rchunk[id]) {
          if (true !== this.rchunk[id].changed) {
            if (1 === this.rchunk[id].isInit || 1 === this.rchunk[id].isInit1) {
              if (this.rchunk[id].timestamp + 1E4 < offset) {
                this.rchunk[id].deleteBuffers();
                this.rchunk[id] = void 0;
                reply++;
              }
            }
          }
        }
      }
    }
  }
  /** @type {number} */
  id = (new Date).getTime();
  console.log("delete buffers " + (id - offset) + " " + reply);
};
/**
 * @return {undefined}
 */
RegionMCA.prototype.save = function() {
  var i;
  for (i in this.rchunk) {
    if (void 0 !== this.rchunk[i]) {
      if (-1 !== this.rchunk[i]) {
        if (-2 !== this.rchunk[i]) {
          if (this.rchunk[i].changed) {
            this.saveChunkToStorage(this.rchunk[i].xPos, this.rchunk[i].zPos);
            /** @type {boolean} */
            this.rchunk[i].changed = false;
          }
        }
      }
    }
  }
};
/**
 * @param {number} dataAndEvents
 * @param {number} length
 * @return {undefined}
 */
RegionMCA.prototype.saveChunkToStorage = function(dataAndEvents, length) {
  var i = 1E4 * dataAndEvents + length;
  if (void 0 !== this.rchunk[i] && (-1 !== this.rchunk[i] && -2 !== this.rchunk[i])) {
    var data = this.rchunk[i].getNBT();
    data = (new Zlib.Deflate(data)).compress();
    /** @type {Uint8Array} */
    var r = new Uint8Array(data.length + 5);
    i = data.length + 1;
    /** @type {number} */
    r[0] = i >> 24 & 255;
    /** @type {number} */
    r[1] = i >> 16 & 255;
    /** @type {number} */
    r[2] = i >> 8 & 255;
    /** @type {number} */
    r[3] = i & 255;
    /** @type {number} */
    r[4] = 2;
    /** @type {number} */
    i = 0;
    for (;i < data.length;i++) {
      r[i + 5] = data[i];
    }
    data = ab2str(r);
    window.localStorage.setItem(this.gameRoot + " " + this.worldName + " " + dataAndEvents + " " + length, data);
  }
};
/**
 * @param {number} m1
 * @param {number} ticks
 * @return {?}
 */
RegionMCA.prototype.getChunkFromStorage = function(m1, ticks) {
  /** @type {(null|string)} */
  var value = window.localStorage.getItem(this.gameRoot + " " + this.worldName + " " + m1 + " " + ticks);
  return void 0 === value || (null === value || "" === value) ? -1 : (value = new Uint8Array(str2ab(value)), RegionMCA.loadChunk(0, value, true));
};
/**
 * @param {number} m1
 * @param {number} ticks
 * @param {boolean} dataAndEvents
 * @return {?}
 */
RegionMCA.prototype.loadChunkFromStorage = function(m1, ticks, dataAndEvents) {
  var exports = this.getChunkFromStorage(m1, ticks);
  if (-1 === exports) {
    return-1;
  }
  if (dataAndEvents) {
    return exports;
  }
  this.rchunk[1E4 * m1 + ticks] = exports;
  /** @type {boolean} */
  var Case = exports = dataAndEvents = false;
  /** @type {boolean} */
  var l = false;
  var tick = this.requestChunk(m1 + 1, ticks);
  if (void 0 === tick) {
    /** @type {boolean} */
    l = true;
  }
  if (-1 === tick) {
    /** @type {boolean} */
    l = true;
  }
  if (-2 === tick) {
    /** @type {boolean} */
    l = true;
  }
  var states = this.requestChunk(m1 - 1, ticks);
  if (void 0 === states) {
    /** @type {boolean} */
    Case = true;
  }
  if (-1 === states) {
    /** @type {boolean} */
    Case = true;
  }
  if (-2 === states) {
    /** @type {boolean} */
    Case = true;
  }
  var charCodeToReplace = this.requestChunk(m1, ticks + 1);
  if (void 0 === charCodeToReplace) {
    /** @type {boolean} */
    dataAndEvents = true;
  }
  if (-1 === charCodeToReplace) {
    /** @type {boolean} */
    dataAndEvents = true;
  }
  if (-2 === charCodeToReplace) {
    /** @type {boolean} */
    dataAndEvents = true;
  }
  m1 = this.requestChunk(m1, ticks - 1);
  if (void 0 === m1) {
    /** @type {boolean} */
    exports = true;
  }
  if (-1 === m1) {
    /** @type {boolean} */
    exports = true;
  }
  if (-2 === m1) {
    /** @type {boolean} */
    exports = true;
  }
  if (!l) {
    tick.init2();
  }
  if (!Case) {
    states.init2();
  }
  if (!dataAndEvents) {
    charCodeToReplace.init2();
  }
  if (!exports) {
    m1.init2();
  }
};
/**
 * @param {Uint8Array} data
 * @return {undefined}
 */
RegionMCA.prototype.regionLoaded = function(data) {
  var t = data.data.x;
  var b = data.data.y;
  if (1 !== data.data.loaded) {
    t = this.regionData[1E3 * t + b];
    /** @type {number} */
    t.loaded = -1;
  } else {
    if (data = new Uint8Array(data.data.data), 1E3 > data.length) {
      t = this.regionData[1E3 * t + b];
      /** @type {number} */
      t.loaded = -1;
    } else {
      t = this.regionData[1E3 * t + b];
      /** @type {Uint8Array} */
      t.regionData = data;
      /** @type {number} */
      t.loaded = 0;
      /** @type {Array} */
      t.chunkPos = [];
      /** @type {Array} */
      t.chunkLen = [];
      /** @type {number} */
      var i = b = 0;
      for (;4096 > b;b += 4, i++) {
        t.chunkPos[i] = 65536 * data[b] + 256 * data[b + 1] + data[b + 2];
        t.chunkLen[i] = data[b + 3];
      }
    }
  }
};
/**
 * @param {Object} element
 * @param {?} size
 * @return {undefined}
 */
RegionMCA.prototype.loadRegionFile = function(element, size) {
  try {
    var value = Readfile.readRAW(size);
  } catch (e) {
    console.log("nie ma pliku");
    return;
  }
  element.regionData = value;
  /** @type {number} */
  element.loaded = 0;
  /** @type {Array} */
  element.chunkPos = [];
  /** @type {Array} */
  element.chunkLen = [];
  /** @type {number} */
  var i = 0;
  /** @type {number} */
  var index = 0;
  for (;4096 > i;i += 4, index++) {
    element.chunkPos[index] = 65536 * value[i] + 256 * value[i + 1] + value[i + 2];
    element.chunkLen[index] = value[i + 3];
  }
};
RegionMCA.prototype.requestChunk = function(m1, ticks, data) {
  var unlock = 1E4 * m1 + ticks;
  if (void 0 === data && (data = true), void 0 !== this.rchunk[unlock] || !data) {
    return this.rchunk[unlock];
  }
  if (1 !== this.localIChunk[unlock] && (data = -1, this.localIChunk[unlock] = 1, -1 !== (data = this.loadChunkFromStorage(m1, ticks, true)))) {
    return this.rchunk[unlock] = data;
  }
  /** @type {number} */
  data = Math.floor(m1 / 32);
  /** @type {number} */
  var attempted = Math.floor(ticks / 32);
  if (void 0 === this.regionData[1E3 * data + attempted] && this.loadRegion(data, attempted), -1 === this.regionData[1E3 * data + attempted].loaded) {
    return this.rchunk[unlock] = -1;
  }
  if (-2 === this.regionData[1E3 * data + attempted].loaded) {
    return-2;
  }
  if (0 === this.regionData[1E3 * data + attempted].loaded) {
    if (m1 %= 32, 0 > m1 && (m1 += 32), ticks %= 32, 0 > ticks && (ticks += 32), ticks = m1 + 32 * ticks, 0 < this.regionData[1E3 * data + attempted].chunkPos[ticks]) {
      return console.log("chunk " + unlock + " : " + this.regionData[1E3 * data + attempted].chunkPos[ticks] + " " + this.regionData[1E3 * data + attempted].chunkLen[ticks]), this.iChunk++, this.rchunk[unlock] = RegionMCA.loadChunk(4096 * this.regionData[1E3 * data + attempted].chunkPos[ticks], this.regionData[1E3 * data + attempted].regionData, true), this.rchunk[unlock];
    }
    /** @type {number} */
    this.rchunk[unlock] = -1;
  }
}, RegionMCA.loadChunk = function(obj, data, dataAndEvents) {
  var parent = {};
  var self = new Chunk;
  /** @type {number} */
  parent.offset = 0;
  try {
    if (dataAndEvents) {
      var inflate = new Zlib.Inflate(data, {
        index : obj + 5
      });
      parent.data = inflate.decompress();
    } else {
      /** @type {number} */
      parent.data = data;
    }
  } catch (k) {
    return console.log("fail"), -1;
  }
  /** @type {number} */
  data = 0;
  for (;2E3 > data && -1 !== (obj = NBT.nextTag(parent));data++) {
    switch(obj.name) {
      case "xPos":
        self.xPos = obj.value;
        break;
      case "zPos":
        self.zPos = obj.value;
        break;
      case "HeightMap":
        self.heightMap = obj.data;
        break;
      case "Biomes":
        self.biomes = obj.data;
        break;
      case "LightPopulated":
        self.lightPopulated = obj.value;
        break;
      case "Sections":
        RegionMCA.readSections(obj, self, parent);
        continue;
    }
    if (9 === obj.type) {
      NBT.read9(obj, self, parent);
    }
  }
  return void 0 === self.heightMap && self.initHeightMap(), self.isInit = 0, self.isInit1 = 0, self;
}, RegionMCA.readSections = function(val, data, parent) {
  var self = {};
  var obj;
  /** @type {number} */
  var j = 0;
  for (;j < val.length && -1 !== (obj = NBT.nextTag(parent));) {
    switch(0 === obj.type && (void 0 === self.add && (self.add = new Uint8Array(2048)), data.section[self.y] = self, self = {}, j++), obj.name) {
      case "Y":
        self.y = obj.value;
        break;
      case "Blocks":
        self.blocks = obj.data;
        break;
      case "SkyLight":
        self.skyLight = obj.data;
        break;
      case "BlockLight":
        self.blockLight = obj.data;
        break;
      case "Add":
        self.add = obj.data;
        break;
      case "Data":
        self.data = obj.data;
    }
  }
};
