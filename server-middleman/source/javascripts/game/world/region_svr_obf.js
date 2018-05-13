/**
 * @param {number} intensity
 * @return {undefined}
 */
function RegionSrv(intensity) {
  /** @type {Array} */
  this.chunkData = [];
  /** @type {number} */
  this.iChunk = 0;
  /** @type {boolean} */
  this.wsOpen = false;
  /** @type {Int32Array} */
  this.position = new Int32Array(6);
  this.wsMsg = {};
  /** @type {number} */
  this.wsMsg.offset = 0;
  /** @type {Uint8Array} */
  this.wsMsg.data = new Uint8Array(1E5);
  /** @type {boolean} */
  settings.allowTools = false;
  players = {};
  /** @type {number} */
  document.getElementById("servername").value = intensity;
  /** @type {string} */
  document.getElementById("loginDiv").style.display = "block";
}
/**
 * @param {string} message
 * @param {string} url
 * @return {undefined}
 */
RegionSrv.prototype.connect = function(message, url) {
  console.log(message + " " + url);
  url = url || "";
  if (20 < url.length) {
    /** @type {string} */
    document.getElementById("servermessage").innerHTML = "Nickname too long, max 20";
  } else {
    if (1 > url.length) {
      /** @type {string} */
      document.getElementById("servermessage").innerHTML = "Nickname too short, min 1";
    } else {
      /** @type {string} */
      this.nickname = url;
      player.setName(url);
      /** @type {WebSocket} */
      this.ws = new WebSocket("ws://" + message + "/ws");
      this.ws.regionSrv = this;
      /** @type {string} */
      this.ws.binaryType = "arraybuffer";
      /**
       * @return {undefined}
       */
      this.ws.onopen = function() {
        /** @type {boolean} */
        this.regionSrv.wsOpen = true;
        /** @type {number} */
        this.regionSrv.wsMsg.offset = 0;
        NBT.write8Tag(this.regionSrv.wsMsg, "Nickname", this.regionSrv.nickname);
        this.send(new Uint8Array(this.regionSrv.wsMsg.data.buffer, 0, this.regionSrv.wsMsg.offset));
      };
      /**
       * @param {number} e
       * @return {undefined}
       */
      this.ws.onmessage = function(e) {
        var self = {
          offset : 0
        };
        /** @type {Uint8Array} */
        self.data = new Uint8Array(e.data);
        var data;
        if (-1 !== (data = NBT.nextTag(self))) {
          switch(data.name) {
            case "Update":
              /** @type {number} */
              e = 0;
              for (;2 > e && -1 !== (data = NBT.nextTag(self));e++) {
                switch(data.name) {
                  case "BlockUpdate":
                    console.log("bu " + data.length);
                    var res = data.length;
                    /** @type {number} */
                    var op1 = data = 0;
                    for (;op1 < res;op1++) {
                      var node = NBT.nextTag(self).data;
                      if (!NBT.nextTag(self).value.equalsIgnoreCase(this.regionSrv.nickname)) {
                        if (4 > res) {
                          this.regionSrv.updateRawBlock(node, false);
                        } else {
                          this.regionSrv.setRawBlock(node);
                          data++;
                        }
                      }
                    }
                    if (0 < data) {
                      this.regionSrv.updateChunks();
                    }
                    break;
                  case "PlayerUpdate":
                    res = data.length;
                    /** @type {number} */
                    op1 = 0;
                    for (;op1 < res;op1++) {
                      data = NBT.nextTag(self);
                      if (!data.name.equalsIgnoreCase(this.regionSrv.nickname)) {
                        if (void 0 === players[data.name]) {
                          players[data.name] = new Humanoid;
                          players[data.name].name = data.name;
                        }
                        players[data.name].setPosRotRawInt(data.data);
                      }
                    }
                  ;
                }
              }
              break;
            case "PlayerQuit":
              console.log("delp " + data.value);
              players[data.value] = void 0;
              break;
            case "JoinGame":
              if (-1 === (data = NBT.nextTag(self))) {
                break;
              }
              switch(data.name) {
                case "setPos":
                  console.log(data.tagId + " " + data.length);
                  e = NBT.read3RawTag(self);
                  res = NBT.read3RawTag(self);
                  self = NBT.read3RawTag(self);
                  camera.setPos(e, res, self);
                  /** @type {string} */
                  document.getElementById("loginDiv").style.display = "none";
                  /** @type {string} */
                  document.getElementById("webgl").style["-webkit-filter"] = "none";
                  /** @type {string} */
                  document.getElementById("webgl").style["-moz-filter"] = "none";
                  /** @type {boolean} */
                  chronometer.stopGame = false;
                  requestAnimFrame(tick);
              }
              break;
            case "Kick":
              this.regionSrv.connectionClosed(data.value);
              break;
            case "ChunkData":
              e = NBT.nextTag(self).value;
              res = NBT.nextTag(self).value;
              console.log("dostalem chunka " + e + " " + res);
              self = this.regionSrv.loadChunk(self.offset + 13, self.data, true);
              if (void 0 !== self.xPos) {
                if (void 0 !== self.zPos) {
                  this.regionSrv.chunkData[1E4 * e + res] = self;
                }
              }
            ;
          }
        }
      };
      /**
       * @return {undefined}
       */
      this.ws.onclose = function() {
        this.regionSrv.connectionClosed("Connection closed");
      };
    }
  }
};
/**
 * @param {string} txt
 * @return {undefined}
 */
RegionSrv.prototype.connectionClosed = function(txt) {
  /** @type {boolean} */
  this.wsOpen = false;
  /** @type {string} */
  document.getElementById("loginDiv").style.display = "block";
  /** @type {string} */
  document.getElementById("servermessage").innerHTML = txt;
  /** @type {string} */
  document.getElementById("webgl").style["-webkit-filter"] = "blur(5px)";
  /** @type {string} */
  document.getElementById("webgl").style["-moz-filter"] = "blur(5px)";
  /** @type {boolean} */
  chronometer.stopGame = true;
  this.deleteBuffers(true);
  /** @type {Array} */
  this.chunkData = [];
  /** @type {Array} */
  players = [];
  document.exitPointerLock();
  /** @type {number} */
  camera.moveX = 0;
  /** @type {number} */
  camera.moveY = 0;
  console.log("WebSocket closed." + txt);
};
/**
 * @return {undefined}
 */
RegionSrv.prototype.new100msec = function() {
};
/**
 * @return {undefined}
 */
RegionSrv.prototype.new50msec = function() {
  if (this.wsOpen) {
    var b = player.getPos();
    var d = player.getRot();
    /** @type {number} */
    this.position[0] = Math.floor(100 * b[0]);
    /** @type {number} */
    this.position[1] = Math.floor(100 * b[1]);
    /** @type {number} */
    this.position[2] = Math.floor(100 * b[2]);
    /** @type {number} */
    this.position[3] = Math.floor(100 * d[0]);
    /** @type {number} */
    this.position[4] = Math.floor(100 * d[1]);
    /** @type {number} */
    this.position[5] = Math.floor(chronometer.lastTimeStart);
    /** @type {number} */
    this.wsMsg.offset = 0;
    NBT.write11Tag(this.wsMsg, "Position", this.position, 6);
    this.ws.send(new Uint8Array(this.wsMsg.data.buffer, 0, this.wsMsg.offset));
  }
};
/**
 * @param {Array} dataAndEvents
 * @return {?}
 */
RegionSrv.prototype.getNearestPosition = function(dataAndEvents) {
  /** @type {number} */
  var width4 = Math.floor(dataAndEvents[0] / 16);
  /** @type {number} */
  var c = Math.floor(dataAndEvents[2] / 16);
  /** @type {number} */
  var indexLast = 1E4 * width4 + c;
  if (void 0 !== this.chunkData[indexLast] && (-1 !== this.chunkData[indexLast] && -2 !== this.chunkData[indexLast])) {
    /** @type {number} */
    var getNearestPosition = dataAndEvents[0] - 16 * width4;
    if (0 > getNearestPosition) {
      getNearestPosition += 16;
    }
    /** @type {number} */
    var l = dataAndEvents[2] - 16 * c;
    if (0 > l && (l += 16), dataAndEvents = this.chunkData[indexLast].getNearestPosition([getNearestPosition, dataAndEvents[1], l]), false !== dataAndEvents) {
      return[16 * width4 + dataAndEvents[0], dataAndEvents[1], 16 * c + dataAndEvents[2]];
    }
  }
  return false;
};
/**
 * @param {number} digit
 * @param {number} carry
 * @param {number} pos
 * @param {?} deepDataAndEvents
 * @param {number} sqlt
 * @return {?}
 */
RegionSrv.prototype.getChunkBlock = function(digit, carry, pos, deepDataAndEvents, sqlt) {
  return digit = 1E4 * digit + carry, void 0 !== this.chunkData[digit] && (-1 !== this.chunkData[digit] && -2 !== this.chunkData[digit]) ? this.chunkData[digit].getBlock(pos, deepDataAndEvents, sqlt) : {
    id : 0,
    data : 0
  };
};
/**
 * @param {number} pos
 * @param {?} deepDataAndEvents
 * @param {number} t
 * @return {?}
 */
RegionSrv.prototype.getBlock = function(pos, deepDataAndEvents, t) {
  /** @type {number} */
  var imgWidth = Math.floor(pos / 16);
  /** @type {number} */
  var englishyPredicate = Math.floor(t / 16);
  /** @type {number} */
  var message = 1E4 * imgWidth + englishyPredicate;
  /** @type {number} */
  message = 1E4 * imgWidth + englishyPredicate;
  return void 0 !== this.chunkData[message] && (-1 !== this.chunkData[message] && -2 !== this.chunkData[message]) ? (pos -= 16 * imgWidth, 0 > pos && (pos += 16), t -= 16 * englishyPredicate, 0 > t && (t += 16), this.chunkData[message].getBlock(pos, deepDataAndEvents, t)) : {
    id : 0,
    data : 0
  };
};
/**
 * @param {number} m2
 * @param {number} idx
 * @param {number} m1
 * @param {number} startAt
 * @param {number} hue
 * @param {?} deepDataAndEvents
 * @param {?} walkers
 * @return {undefined}
 */
RegionSrv.prototype.updateChunkBlock = function(m2, idx, m1, startAt, hue, deepDataAndEvents, walkers) {
  var accessor = 1E4 * m2 + idx;
  if (void 0 !== this.chunkData[accessor]) {
    if (-1 !== this.chunkData[accessor]) {
      if (-2 !== this.chunkData[accessor]) {
        this.chunkData[accessor].updateBlock(m1, startAt, hue, deepDataAndEvents, walkers);
      }
    }
  }
  this.sendBlockData(m1 + 16 * m2, startAt, hue + 16 * idx, deepDataAndEvents, walkers);
};
/**
 * @param {Array} dataAndEvents
 * @return {undefined}
 */
RegionSrv.prototype.setRawBlock = function(dataAndEvents) {
  this.setBlock(dataAndEvents[0], dataAndEvents[1], dataAndEvents[2], dataAndEvents[3], dataAndEvents[4]);
};
/**
 * @param {Array} dataAndEvents
 * @param {boolean} isXML
 * @return {undefined}
 */
RegionSrv.prototype.updateRawBlock = function(dataAndEvents, isXML) {
  this.updateBlock(dataAndEvents[0], dataAndEvents[1], dataAndEvents[2], dataAndEvents[3], dataAndEvents[4], isXML);
};
/**
 * @param {number} num
 * @param {number} startAt
 * @param {number} hue
 * @param {?} deepDataAndEvents
 * @param {?} obj
 * @param {boolean} isXML
 * @return {undefined}
 */
RegionSrv.prototype.updateBlock = function(num, startAt, hue, deepDataAndEvents, obj, isXML) {
  if (void 0 === isXML) {
    /** @type {boolean} */
    isXML = true;
  }
  /** @type {number} */
  var t = Math.floor(num / 16);
  /** @type {number} */
  var b = Math.floor(hue / 16);
  /** @type {number} */
  var Z = 1E4 * t + b;
  if (isXML) {
    this.sendBlockData(num, startAt, hue, deepDataAndEvents, obj);
  }
  if (void 0 !== this.chunkData[Z]) {
    if (-1 !== this.chunkData[Z]) {
      if (-2 !== this.chunkData[Z]) {
        num -= 16 * t;
        if (0 > num) {
          num += 16;
        }
        hue -= 16 * b;
        if (0 > hue) {
          hue += 16;
        }
        this.chunkData[Z].updateBlock(Math.floor(num), Math.floor(startAt), Math.floor(hue), deepDataAndEvents, obj);
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
RegionSrv.prototype.setBlock = function(t, channel, y, deepDataAndEvents, shallow) {
  /** @type {number} */
  var l = Math.floor(t / 16);
  /** @type {number} */
  var c = Math.floor(y / 16);
  /** @type {number} */
  var indexLast = 1E4 * l + c;
  if (void 0 !== this.chunkData[indexLast]) {
    if (-1 !== this.chunkData[indexLast]) {
      if (-2 !== this.chunkData[indexLast]) {
        t -= 16 * l;
        if (0 > t) {
          t += 16;
        }
        y -= 16 * c;
        if (0 > y) {
          y += 16;
        }
        this.chunkData[indexLast].setBlock(Math.floor(t), Math.floor(channel), Math.floor(y), deepDataAndEvents, shallow);
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
RegionSrv.prototype.changeChunkBlockAdd = function(digit, carry, deepDataAndEvents, opt_obj2, walkers) {
  digit = 1E4 * digit + carry;
  if (void 0 !== this.chunkData[digit]) {
    if (-1 !== this.chunkData[digit]) {
      if (-2 !== this.chunkData[digit]) {
        this.chunkData[digit].changeAdd(deepDataAndEvents, opt_obj2, walkers);
      }
    }
  }
};
/**
 * @return {undefined}
 */
RegionSrv.prototype.updateChunks = function() {
  /** @type {number} */
  var startIndex = (new Date).getTime();
  /** @type {number} */
  var reply = 0;
  var i;
  for (i in this.chunkData) {
    if (void 0 !== this.chunkData[i]) {
      if (-1 !== this.chunkData[i]) {
        if (-2 !== this.chunkData[i]) {
          if (true === this.chunkData[i].needsUpdate) {
            this.chunkData[i].update();
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
 * @param {boolean} max
 * @return {undefined}
 */
RegionSrv.prototype.deleteBuffers = function(max) {
  max = max || false;
  /** @type {number} */
  var min = (new Date).getTime();
  /** @type {number} */
  var reply = 0;
  var id;
  for (id in this.chunkData) {
    if (!(void 0 === this.chunkData[id])) {
      if (!(-1 === this.chunkData[id])) {
        if (!(-2 === this.chunkData[id])) {
          if (!(true === this.chunkData[id].changed)) {
            if (!(1 !== this.chunkData[id].isInit && 1 !== this.chunkData[id].isInit1)) {
              if (!!(this.chunkData[id].timestamp + 1E4 < min || max)) {
                this.chunkData[id].deleteBuffers();
                this.chunkData[id] = void 0;
                reply++;
              }
            }
          }
        }
      }
    }
  }
  /** @type {number} */
  max = (new Date).getTime();
  console.log("delete buffers " + (max - min) + " " + reply);
};
/**
 * @return {undefined}
 */
RegionSrv.prototype.save = function() {
  console.log("not supported");
};
/**
 * @param {number} deepDataAndEvents
 * @param {number} opt_obj2
 * @param {boolean} dataAndEvents
 * @return {?}
 */
RegionSrv.prototype.requestChunk = function(deepDataAndEvents, opt_obj2, dataAndEvents) {
  var unlock = 1E4 * deepDataAndEvents + opt_obj2;
  return void 0 === dataAndEvents && (dataAndEvents = true), void 0 !== this.chunkData[unlock] || !dataAndEvents ? this.chunkData[unlock] : chronometer.stopGame ? void 0 : (this.wsMsg.offset = 0, NBT.write10Tag(this.wsMsg, "Chunk"), NBT.write3Tag(this.wsMsg, "xPos", deepDataAndEvents), NBT.write3Tag(this.wsMsg, "zPos", opt_obj2), NBT.write0Tag(this.wsMsg), this.ws.send(new Uint8Array(this.wsMsg.data.buffer, 0, this.wsMsg.offset)), this.chunkData[unlock] = -2, this.chunkData[unlock]);
};
/**
 * @param {number} string
 * @param {number} startAt
 * @param {number} hue
 * @param {?} deepDataAndEvents
 * @param {?} obj
 * @return {undefined}
 */
RegionSrv.prototype.sendBlockData = function(string, startAt, hue, deepDataAndEvents, obj) {
  /** @type {number} */
  this.wsMsg.offset = 0;
  NBT.write10Tag(this.wsMsg, "BlockData");
  NBT.write3Tag(this.wsMsg, "x", string);
  NBT.write3Tag(this.wsMsg, "y", startAt);
  NBT.write3Tag(this.wsMsg, "z", hue);
  NBT.write3Tag(this.wsMsg, "b", deepDataAndEvents);
  NBT.write3Tag(this.wsMsg, "d", obj);
  NBT.write0Tag(this.wsMsg);
  this.ws.send(new Uint8Array(this.wsMsg.data.buffer, 0, this.wsMsg.offset));
};
/**
 * @return {undefined}
 */
RegionSrv.prototype.chunkDataReceived = function() {
};
/**
 * @param {Object} obj
 * @param {number} data
 * @param {boolean} dataAndEvents
 * @return {?}
 */
RegionSrv.prototype.loadChunk = function(obj, data, dataAndEvents) {
  var parent = {};
  var self = new ChunkMCA;
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
};
/**
 * @param {string} val
 * @param {(Object|string)} data
 * @param {?} parent
 * @return {undefined}
 */
RegionSrv.prototype.readSections = function(val, data, parent) {
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
