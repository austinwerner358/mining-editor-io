/**
 * @param {Object} cfg
 * @return {undefined}
 */
function WorldMCA(cfg) {
  this.worldRegionData = void 0 !== cfg.server ? new RegionSrv(cfg.server) : new RegionMCA(cfg.gameRoot, cfg.worldName);
}
/**
 * @param {?} dbname
 * @param {?} description
 * @return {undefined}
 */
WorldMCA.prototype.connect = function(dbname, description) {
  this.worldRegionData.connect(dbname, description);
};
/**
 * @param {?} deepDataAndEvents
 * @param {?} shallow
 * @param {?} emptyGet
 * @param {?} specDefinitions
 * @param {?} dataAndEvents
 * @return {?}
 */
WorldMCA.prototype.getChunkBlock = function(deepDataAndEvents, shallow, emptyGet, specDefinitions, dataAndEvents) {
  return this.worldRegionData.getChunkBlock(deepDataAndEvents, shallow, emptyGet, specDefinitions, dataAndEvents);
};
/**
 * @param {?} deepDataAndEvents
 * @param {?} shallow
 * @param {?} emptyGet
 * @return {?}
 */
WorldMCA.prototype.getBlock = function(deepDataAndEvents, shallow, emptyGet) {
  return this.worldRegionData.getBlock(deepDataAndEvents, shallow, emptyGet);
};
/**
 * @param {?} deepDataAndEvents
 * @param {?} emptyGet
 * @param {?} specDefinitions
 * @param {?} dataAndEvents
 * @param {?} traditional
 * @param {?} shallow
 * @param {?} until
 * @return {undefined}
 */
WorldMCA.prototype.updateChunkBlock = function(deepDataAndEvents, emptyGet, specDefinitions, dataAndEvents, traditional, shallow, until) {
  this.worldRegionData.updateChunkBlock(deepDataAndEvents, emptyGet, specDefinitions, dataAndEvents, traditional, shallow, until);
};
/**
 * @param {?} deepDataAndEvents
 * @param {?} shallow
 * @param {?} emptyGet
 * @param {?} specDefinitions
 * @param {?} dataAndEvents
 * @return {undefined}
 */
WorldMCA.prototype.updateBlock = function(deepDataAndEvents, shallow, emptyGet, specDefinitions, dataAndEvents) {
  this.worldRegionData.updateBlock(deepDataAndEvents, shallow, emptyGet, specDefinitions, dataAndEvents);
};
/**
 * @param {?} pos
 * @param {?} setting
 * @param {?} deepDataAndEvents
 * @param {?} shallow
 * @param {?} emptyGet
 * @return {undefined}
 */
WorldMCA.prototype.setBlock = function(pos, setting, deepDataAndEvents, shallow, emptyGet) {
  this.worldRegionData.setBlock(pos, setting, deepDataAndEvents, shallow, emptyGet);
};
/**
 * @param {?} deepDataAndEvents
 * @param {?} shallow
 * @param {?} emptyGet
 * @param {?} specDefinitions
 * @param {?} dataAndEvents
 * @return {undefined}
 */
WorldMCA.prototype.changeChunkBlockAdd = function(deepDataAndEvents, shallow, emptyGet, specDefinitions, dataAndEvents) {
  this.worldRegionData.changeChunkBlockAdd(deepDataAndEvents, shallow, emptyGet, specDefinitions, dataAndEvents);
};
/**
 * @return {undefined}
 */
WorldMCA.prototype.updateChunks = function() {
  this.worldRegionData.updateChunks();
};
/**
 * @return {undefined}
 */
WorldMCA.prototype.deleteBuffers = function() {
  this.worldRegionData.deleteBuffers();
};
/**
 * @return {undefined}
 */
WorldMCA.prototype.save = function() {
  this.worldRegionData.save();
};
/**
 * @param {number} result
 * @param {number} callback
 * @param {boolean} recurring
 * @return {?}
 */
WorldMCA.prototype.requestChunk = function(result, callback, recurring) {
  return this.worldRegionData.requestChunk(result, callback, recurring);
};
/**
 * @return {undefined}
 */
WorldMCA.prototype.new100msec = function() {
  this.worldRegionData.new100msec();
};
/**
 * @return {undefined}
 */
WorldMCA.prototype.new50msec = function() {
  this.worldRegionData.new50msec();
};
/**
 * @return {undefined}
 */
WorldMCA.prototype.render = function() {
  if (blockTexture.loaded) {
    gl.bindTexture(gl.TEXTURE_2D, blockTexture);
    var shader = gluu.standardShader;
    gl.useProgram(shader);
    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
    gl.clearColor(settings.skyColor[0], settings.skyColor[1], settings.skyColor[2], 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    mat4.perspective(gluu.pMatrix, camera.fovy, gl.viewportWidth / gl.viewportHeight, 0.1, 6E3);
    var transformMatrix = camera.getMatrix();
    mat4.identity(gluu.mvMatrix);
    mat4.multiply(gluu.pMatrix, gluu.pMatrix, transformMatrix);
    gl.uniformMatrix4fv(shader.pMatrixUniform, false, gluu.pMatrix);
    gl.uniformMatrix4fv(shader.mvMatrixUniform, false, gluu.mvMatrix);
    gl.uniform1f(shader.lod, settings.distanceLevel[1]);
    gl.uniform1f(shader.sun, settings.sun);
    gl.uniform1f(shader.brightness, settings.brightness);
    gl.uniform4fv(shader.skyColor, settings.skyColor);
    /** @type {number} */
    var z0 = 0;
    /** @type {number} */
    var z1 = 0;
    /** @type {number} */
    transformMatrix = 0;
    /** @type {Array} */
    var that = [settings.distanceLevel[0], settings.distanceLevel[1], settings.distanceLevel[2], settings.distanceLevel[2]];
    /** @type {Array} */
    var coords = [];
    /** @type {number} */
    var expectationResult = 0;
    /** @type {number} */
    var restoreScript = 0;
    var self;
    var dest = camera.getPos();
    /** @type {number} */
    var dim = 0;
    for (;4 > dim;dim++) {
      /** @type {number} */
      var x_from = Math.floor(dest[0] / 16);
      /** @type {number} */
      var y_from = Math.floor(dest[2] / 16);
      /** @type {number} */
      coords[0] = 0;
      /** @type {number} */
      coords[1] = 0;
      /** @type {number} */
      var spacePos = -1;
      for (;spacePos < that[dim] * that[dim] * 4;spacePos++) {
        if (-1 !== spacePos && (coords = spiralLoop(spacePos)), expectationResult = x_from + coords[0], restoreScript = y_from + coords[1], self = this.requestChunk(expectationResult, restoreScript, false), -1 !== self && (-2 !== self && (z0 = dest[0] - (16 * expectationResult + 8), z1 = dest[2] - (16 * restoreScript + 8), transformMatrix = Math.sqrt(z0 * z0 + z1 * z1), !(transformMatrix > 16 * that[dim])))) {
          if (64 < transformMatrix) {
            var q = camera.getTarget();
            /** @type {Array} */
            q = [dest[0] - q[0], dest[2] - q[2]];
            /** @type {Array} */
            z1 = [-z0, -z1];
            /** @type {number} */
            z0 = q[0] * z1[0] + q[1] * z1[1];
            /** @type {number} */
            var vl4 = Math.sqrt(q[0] * q[0] + q[1] * q[1]);
            /** @type {number} */
            q = Math.sqrt(z1[0] * z1[0] + z1[1] * z1[1]);
            /** @type {number} */
            z0 = z0 / (vl4 * q);
            if (0 < z0) {
              continue;
            }
            if (z0 = Math.cos(camera.fovx / 1.5) + z0, q = Math.sqrt(2 * q * q * (1 - z0)), 0 < z0 && 16 < q) {
              continue;
            }
          }
          if (void 0 === self) {
            if (1 < chronometer.iLag) {
              chronometer.iLag -= 1;
              this.worldRegionData.requestChunk(expectationResult, restoreScript);
            }
          } else {
            self.timestamp = chronometer.lastTimeStart;
            if (dest[1] >= settings.waterlevel || 160 > transformMatrix) {
              self.render(dim, shader, 0);
            }
            if (dest[1] < settings.waterlevel && 96 > transformMatrix) {
              self.render(dim, shader, 1);
            } else {
              if (80 > transformMatrix) {
                self.render(dim, shader, 1);
              }
            }
          }
        }
      }
    }
  }
};
/**
 * @return {?}
 */
WorldMCA.prototype.renderSelection = function() {
  if (blockTexture.loaded) {
    var data = gluu.selectionShader;
    gl.useProgram(data);
    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    mat4.perspective(gluu.pMatrix, camera.fovy, gl.viewportWidth / gl.viewportHeight, 0.1, 6E3);
    var m = camera.getMatrix();
    mat4.multiply(gluu.pMatrix, gluu.pMatrix, m);
    mat4.identity(gluu.mvMatrix);
    gl.uniformMatrix4fv(data.pMatrixUniform, false, gluu.pMatrix);
    gl.uniformMatrix4fv(data.mvMatrixUniform, false, gluu.mvMatrix);
    /** @type {Array} */
    var r = [];
    /** @type {number} */
    var px = 0;
    /** @type {number} */
    var restoreScript = 0;
    var res;
    m = camera.getPos();
    /** @type {number} */
    var requestedView = 0;
    for (;4 > requestedView;requestedView++) {
      /** @type {number} */
      var x = Math.floor(m[0] / 16);
      /** @type {number} */
      var pixels = Math.floor(m[2] / 16);
      /** @type {number} */
      r[0] = 0;
      /** @type {number} */
      r[1] = 0;
      /** @type {number} */
      var r2 = -1;
      for (;24 > r2;r2++) {
        if (-1 !== r2) {
          r = spiralLoop(r2);
        }
        px = x + r[0];
        restoreScript = pixels + r[1];
        res = this.requestChunk(px, restoreScript, false);
        if (-1 !== res) {
          if (-2 !== res) {
            if (void 0 === res) {
              if (1 < chronometer.iLag) {
                chronometer.iLag -= 1;
                this.worldRegionData.requestChunk(px, restoreScript);
              }
            } else {
              res.timestamp = chronometer.lastTimeStart;
              res.render(requestedView, data, 0);
              res.render(requestedView, data, 1);
            }
          }
        }
      }
    }
    return pixels = new Uint8Array(4), gl.readPixels(Math.floor(gl.viewportWidth / 2), Math.floor(gl.viewportHeight / 2), 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixels), data = {}, data.y = pixels[0], data.z = Math.floor(pixels[1] / 16), data.x = pixels[1] - 16 * data.z, x = Math.floor(pixels[2] / 10), data.side = pixels[2] - 10 * x, r = Math.floor(x / 5), px = x - 5 * r, x = Math.floor(m[0] / 16), pixels = Math.floor(m[2] / 16), m = x % 5, 0 > m && (m += 5), restoreScript = pixels % 5, 0 > restoreScript &&
    (restoreScript += 5), r -= m, px -= restoreScript, 2 < r && (r -= 5), -2 > r && (r += 5), 2 < px && (px -= 5), -2 > px && (px += 5), data.chx = x + r, data.chz = pixels + px, data.rchx = r, data.rchz = px, data;
  }
};
/**
 * @param {?} deepDataAndEvents
 * @return {?}
 */
WorldMCA.prototype.getNearestPosition = function(deepDataAndEvents) {
  return this.worldRegionData.getNearestPosition(deepDataAndEvents);
};
/**
 * @return {?}
 */
WorldMCA.prototype.testCollisions = function() {
  var clip = camera.getPos();
  /** @type {number} */
  var length = Math.floor(clip[0] / 16);
  /** @type {number} */
  var n = Math.floor(clip[2] / 16);
  var v;
  /** @type {number} */
  var right = 0;
  /** @type {number} */
  var i = length - 1;
  for (;i < length + 2;i++) {
    /** @type {number} */
    var k = n - 1;
    for (;k < n + 2;k++) {
      if (16 * i - 2 < clip[0] && (16 * i + 18 > clip[0] && (16 * k - 2 < clip[2] && 16 * k + 18 > clip[2]))) {
        if (v = this.requestChunk(i, k, false), -1 === v || (-2 === v || void 0 === v)) {
          if (i === length && k === n) {
            return true;
          }
        } else {
          if (1 !== v.isInit) {
            if (i === length && k === n) {
              return true;
            }
          } else {
            if (v = v.getBuffer([Math.floor(clip[0] - 16 * i), Math.floor(clip[1]), Math.floor(clip[2] - 16 * k)]), false !== v) {
              /** @type {number} */
              var left = 0;
              left = left + Intersection3D.shapeIntersectsShape(v, player.shape, 9, 5, clip);
              right = right + left;
            }
          }
        }
      }
    }
  }
  return 0 < right ? true : false;
};
