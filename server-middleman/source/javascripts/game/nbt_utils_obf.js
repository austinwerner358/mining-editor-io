NBT = {
  /**
   * @param {Object} scope
   * @return {?}
   */
  nextTag : function(scope) {
    var data = {};
    if (data.type = scope.data[scope.offset++], void 0 === data.type) {
      return-1;
    }
    switch(data.type) {
      case 0:
        /** @type {string} */
        data.name = "";
        break;
      case 1:
        data.name = NBT.getTagName(scope, 0);
        data.value = scope.data[scope.offset++];
        break;
      case 2:
        data.name = NBT.getTagName(scope, 0);
        /** @type {number} */
        data.value = scope.data[scope.offset++] << 8 | scope.data[scope.offset++];
        break;
      case 3:
        data.name = NBT.getTagName(scope, 0);
        /** @type {number} */
        data.value = scope.data[scope.offset++] << 24 | scope.data[scope.offset++] << 16 | scope.data[scope.offset++] << 8 | scope.data[scope.offset++];
        break;
      case 4:
        data.name = NBT.getTagName(scope, 0);
        /** @type {number} */
        data.value = scope.data[scope.offset++] << 56 | scope.data[scope.offset++] << 48 | scope.data[scope.offset++] << 40 | scope.data[scope.offset++] << 32 | scope.data[scope.offset++] << 24 | scope.data[scope.offset++] << 16 | scope.data[scope.offset++] << 8 | scope.data[scope.offset++];
        break;
      case 5:
        data.name = NBT.getTagName(scope, 0);
        /** @type {number} */
        data.value = -999;
        scope.offset += 4;
        break;
      case 6:
        data.name = NBT.getTagName(scope, 0);
        /** @type {number} */
        data.value = -999;
        scope.offset += 8;
        break;
      case 7:
        data.name = NBT.getTagName(scope, 0);
        data.length = 16777216 * scope.data[scope.offset++] + 65536 * scope.data[scope.offset++] + 256 * scope.data[scope.offset++] + scope.data[scope.offset++];
        /** @type {Uint8Array} */
        data.data = new Uint8Array(data.length);
        /** @type {number} */
        var i = 0;
        for (;i < data.length;i++) {
          data.data[i] = scope.data[scope.offset++];
        }
        break;
      case 8:
        data.name = NBT.getTagName(scope, 0);
        data.value = NBT.getTagName(scope, 0);
        break;
      case 9:
        data.name = NBT.getTagName(scope, 0);
        data.tagId = scope.data[scope.offset++];
        data.length = 16777216 * scope.data[scope.offset++] + 65536 * scope.data[scope.offset++] + 256 * scope.data[scope.offset++] + scope.data[scope.offset++];
        break;
      case 10:
        data.name = NBT.getTagName(scope, 0);
        break;
      case 11:
        data.name = NBT.getTagName(scope, 0);
        data.length = 16777216 * scope.data[scope.offset++] + 65536 * scope.data[scope.offset++] + 256 * scope.data[scope.offset++] + scope.data[scope.offset++];
        /** @type {Int32Array} */
        data.data = new Int32Array(data.length);
        /** @type {number} */
        i = 0;
        for (;i < data.length;i++) {
          data.data[i] = 16777216 * scope.data[scope.offset++] + 65536 * scope.data[scope.offset++] + 256 * scope.data[scope.offset++] + scope.data[scope.offset++];
        }
      ;
    }
    return data;
  },
  /**
   * @param {Object} node
   * @return {?}
   */
  getTagName : function(node) {
    /** @type {string} */
    var tagName = "";
    var padLength = 256 * node.data[node.offset++] + node.data[node.offset++];
    /** @type {number} */
    var i = 0;
    for (;i < padLength;i++) {
      tagName += String.fromCharCode(node.data[node.offset++]);
    }
    return tagName;
  },
  /**
   * @param {Object} tokens
   * @param {Object} deepDataAndEvents
   * @param {Object} o
   * @return {undefined}
   */
  read9 : function(tokens, deepDataAndEvents, o) {
    var lhs;
    if (10 !== tokens.tagId) {
      /** @type {Array} */
      deepDataAndEvents = [0, 1, 2, 4, 8, 4, 8, 0, 0, 0, 0, 0];
      /** @type {number} */
      var x = 0;
      for (;x < tokens.length * deepDataAndEvents[tokens.tagId];x++) {
        o.offset++;
      }
    } else {
      /** @type {number} */
      x = 0;
      for (;x < tokens.length && -1 !== (lhs = NBT.nextTag(o));) {
        if (0 === lhs.type) {
          x++;
        }
        if (9 === lhs.type) {
          NBT.read9(lhs, deepDataAndEvents, o);
        }
      }
    }
  },
  /**
   * @param {Object} $el
   * @return {?}
   */
  read3RawTag : function($el) {
    return $el.data[$el.offset++] << 24 | $el.data[$el.offset++] << 16 | $el.data[$el.offset++] << 8 | $el.data[$el.offset++];
  },
  /**
   * @param {Object} $el
   * @return {undefined}
   */
  write0Tag : function($el) {
    /** @type {number} */
    $el.data[$el.offset++] = 0;
  },
  /**
   * @param {Object} me
   * @param {string} ox
   * @param {number} dataAndEvents
   * @return {undefined}
   */
  write1Tag : function(me, ox, dataAndEvents) {
    /** @type {number} */
    me.data[me.offset++] = 1;
    NBT.writeTagName(me, ox);
    /** @type {number} */
    me.data[me.offset++] = dataAndEvents & 255;
  },
  /**
   * @param {Object} me
   * @param {string} ox
   * @param {number} dataAndEvents
   * @return {undefined}
   */
  write3Tag : function(me, ox, dataAndEvents) {
    /** @type {number} */
    me.data[me.offset++] = 3;
    NBT.writeTagName(me, ox);
    /** @type {number} */
    me.data[me.offset++] = dataAndEvents >> 24 & 255;
    /** @type {number} */
    me.data[me.offset++] = dataAndEvents >> 16 & 255;
    /** @type {number} */
    me.data[me.offset++] = dataAndEvents >> 8 & 255;
    /** @type {number} */
    me.data[me.offset++] = dataAndEvents & 255;
  },
  /**
   * @param {Object} e
   * @param {string} ox
   * @param {?} isXML
   * @return {undefined}
   */
  write5Tag : function(e, ox, isXML) {
    /** @type {number} */
    e.data[e.offset++] = 5;
    NBT.writeTagName(e, ox);
    (new DataView(e.data.buffer, e.offset, 4)).setFloat32(0, isXML);
    e.offset += 4;
  },
  /**
   * @param {Object} me
   * @param {number} i
   * @param {Array} codeSegments
   * @return {undefined}
   */
  write7Tag : function(me, i, codeSegments) {
    /** @type {number} */
    me.data[me.offset++] = 7;
    NBT.writeTagName(me, i);
    /** @type {number} */
    me.data[me.offset++] = codeSegments.length >> 24 & 255;
    /** @type {number} */
    me.data[me.offset++] = codeSegments.length >> 16 & 255;
    /** @type {number} */
    me.data[me.offset++] = codeSegments.length >> 8 & 255;
    /** @type {number} */
    me.data[me.offset++] = codeSegments.length & 255;
    /** @type {number} */
    i = 0;
    for (;i < codeSegments.length;i++) {
      me.data[me.offset++] = codeSegments[i];
    }
  },
  /**
   * @param {Object} me
   * @param {string} ox
   * @param {string} appendArgs
   * @return {undefined}
   */
  write8Tag : function(me, ox, appendArgs) {
    /** @type {number} */
    me.data[me.offset++] = 8;
    NBT.writeTagName(me, ox);
    NBT.writeTagName(me, appendArgs);
  },
  /**
   * @param {Object} me
   * @param {string} ox
   * @param {number} dataAndEvents
   * @param {number} deepDataAndEvents
   * @return {undefined}
   */
  write9Tag : function(me, ox, dataAndEvents, deepDataAndEvents) {
    /** @type {number} */
    me.data[me.offset++] = 9;
    NBT.writeTagName(me, ox);
    /** @type {number} */
    me.data[me.offset++] = dataAndEvents;
    /** @type {number} */
    me.data[me.offset++] = deepDataAndEvents >> 24 & 255;
    /** @type {number} */
    me.data[me.offset++] = deepDataAndEvents >> 16 & 255;
    /** @type {number} */
    me.data[me.offset++] = deepDataAndEvents >> 8 & 255;
    /** @type {number} */
    me.data[me.offset++] = deepDataAndEvents & 255;
  },
  /**
   * @param {Object} me
   * @param {string} ox
   * @return {undefined}
   */
  write10Tag : function(me, ox) {
    /** @type {number} */
    me.data[me.offset++] = 10;
    NBT.writeTagName(me, ox);
  },
  /**
   * @param {Object} me
   * @param {number} i
   * @param {Array} codeSegments
   * @return {undefined}
   */
  write11Tag : function(me, i, codeSegments) {
    /** @type {number} */
    me.data[me.offset++] = 11;
    NBT.writeTagName(me, i);
    /** @type {number} */
    me.data[me.offset++] = codeSegments.length >> 24 & 255;
    /** @type {number} */
    me.data[me.offset++] = codeSegments.length >> 16 & 255;
    /** @type {number} */
    me.data[me.offset++] = codeSegments.length >> 8 & 255;
    /** @type {number} */
    me.data[me.offset++] = codeSegments.length & 255;
    /** @type {number} */
    i = 0;
    for (;i < codeSegments.length;i++) {
      /** @type {number} */
      me.data[me.offset++] = codeSegments[i] >> 24 & 255;
      /** @type {number} */
      me.data[me.offset++] = codeSegments[i] >> 16 & 255;
      /** @type {number} */
      me.data[me.offset++] = codeSegments[i] >> 8 & 255;
      /** @type {number} */
      me.data[me.offset++] = codeSegments[i] & 255;
    }
  },
  /**
   * @param {Object} target
   * @param {string} v
   * @return {?}
   */
  writeTagName : function(target, v) {
    var max = v.length;
    /** @type {number} */
    target.data[target.offset++] = Math.floor(max / 256);
    /** @type {number} */
    target.data[target.offset++] = max - Math.floor(max / 256);
    /** @type {number} */
    var i = 0;
    for (;i < max;i++) {
      target.data[target.offset++] = v.charCodeAt(i);
    }
    return v;
  }
};
