Readfile = {
  /**
   * @param {Object} data
   * @param {?} template
   * @param {number} dataAndEvents
   * @return {?}
   */
  readKuju : function(data, template, dataAndEvents) {
    /** @type {boolean} */
    var async = false;
    if (void 0 === dataAndEvents) {
      /** @type {boolean} */
      async = true;
    }
    /** @type {XMLHttpRequest} */
    var req = new XMLHttpRequest;
    req.open("GET", data.toLowerCase(), async);
    /** @type {string} */
    req.responseType = "arraybuffer";
    if (async) {
      /**
       * @param {string} data
       * @return {undefined}
       */
      req.onload = function(data) {
        /** @type {Uint8Array} */
        data = new Uint8Array(req.response);
        data = 70 === data[7] ? (new Zlib.Inflate(data, {
          index : 16
        })).decompress() : data.subarray(16, data.length - 16);
        template.load(data);
      };
    }
    try {
      req.send();
    } catch (l) {
      return-1;
    }
    return async ? void 0 : (data = new Uint8Array(req.response), 70 === data[7] ? (new Zlib.Inflate(data, {
      index : 16
    })).decompress() : new Uint8Array(data.buffer.slice(16)));
  },
  /**
   * @param {?} href
   * @param {Object} request
   * @param {?} dataAndEvents
   * @return {?}
   */
  readRAW : function(href, request, dataAndEvents) {
    /** @type {XMLHttpRequest} */
    request = new XMLHttpRequest;
    request.open("GET", href, false);
    /** @type {string} */
    request.responseType = "arraybuffer";
    try {
      request.send();
    } catch (e) {
      return-1;
    }
    return new Uint8Array(request.response);
  },
  /**
   * @param {?} hostName
   * @param {Object} req
   * @param {?} dataAndEvents
   * @return {?}
   */
  readTxt : function(hostName, req, dataAndEvents) {
    return req = new XMLHttpRequest, req.open("GET", hostName, false), req.responseType = "application/json", req.send(), req.response;
  }
};
