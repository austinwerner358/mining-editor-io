WebGLUtils = function(create3DContext) {
  return create3DContext = function(canvas, opt_attribs) {
    /** @type {Array} */
    var names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
    /** @type {null} */
    var context = null;
    /** @type {number} */
    var ii = 0;
    for (;ii < names.length;++ii) {
      try {
        context = canvas.getContext(names[ii], opt_attribs);
      } catch (k) {
      }
      if (context) {
        break;
      }
    }
    return context;
  }, {
    /** @type {Function} */
    create3DContext : create3DContext,
    /**
     * @param {HTMLElement} canvas
     * @param {Array} opt_attribs
     * @param {string} opt_onError
     * @return {?}
     */
    setupWebGL : function(canvas, opt_attribs, opt_onError) {
      /**
       * @param {string} pre
       * @return {undefined}
       */
      function handleCreationError(pre) {
        var parent = canvas.parentNode;
        if (parent) {
          /** @type {string} */
          var str = window.WebGLRenderingContext ? 'It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>' : 'This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to upgrade your browser.</a>';
          if (pre) {
            str += "<br/><br/>Status: " + pre;
          }
          /** @type {string} */
          parent.innerHTML = '<table style="background-color: #8CE; width: 100%; height: 100%;"><tr><td align="center"><div style="display: table-cell; vertical-align: middle;"><div style="">' + str + "</div></div></td></tr></table>";
        }
      }
      return opt_onError = opt_onError || handleCreationError, canvas.addEventListener && canvas.addEventListener("webglcontextcreationerror", function(event) {
        opt_onError(event.statusMessage);
      }, false), (opt_attribs = create3DContext(canvas, opt_attribs)) || (window.WebGLRenderingContext || opt_onError("")), opt_attribs;
    }
  };
}();
/**
 * @return {undefined}
 */
function initTextures() {
  blockTexture = gl.createTexture();
  /** @type {Image} */
  var image = new Image;
  /** @type {boolean} */
  blockTexture.loaded = false;
  /**
   * @return {undefined}
   */
  image.onload = function() {
    handleTextureLoaded(image, blockTexture);
  };
  /** @type {string} */
  image.src = "images/blocks.png";
  playerTexture = gl.createTexture();
  /** @type {Image} */
  var cubeImage = new Image;
  /** @type {boolean} */
  playerTexture.loaded = false;
  /**
   * @return {undefined}
   */
  cubeImage.onload = function() {
    handleTextureLoaded(cubeImage, playerTexture);
  };
  /** @type {string} */
  cubeImage.src = "images/steve.png";
}
/**
 * @param {Image} image
 * @param {?} texture
 * @return {undefined}
 */
function handleTextureLoaded(image, texture) {
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.bindTexture(gl.TEXTURE_2D, null);
  /** @type {boolean} */
  texture.loaded = true;
}
/**
 * @return {undefined}
 */
function windowResize() {
  /** @type {(HTMLElement|null)} */
  var canvas = document.getElementById("webgl");
  /** @type {number} */
  canvas.width = window.innerWidth;
  /** @type {number} */
  canvas.height = window.innerHeight;
  /** @type {number} */
  gl.viewportWidth = canvas.width;
  /** @type {number} */
  gl.viewportHeight = canvas.height;
  camera.resetFov();
}
/**
 * @return {undefined}
 */
function canvasOn() {
  /** @type {string} */
  document.getElementById("toolsPanel").style.display = "none";
  /** @type {string} */
  document.getElementById("settingsPanel").style.display = "none";
  /** @type {(HTMLElement|null)} */
  var canvas = document.getElementById("webgl");
  /**
   * @return {undefined}
   */
  canvas.onclick = function() {
  };
  canvas.requestPointerLock = canvas.requestPointerLock || (canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock);
  canvas.requestPointerLock();
}
var ShapeLib = {
  shapes : [],
  /**
   * @param {?} key
   * @return {?}
   */
  getObj : function(key) {
    if (void 0 !== ShapeLib.shapes[key]) {
      return ShapeLib.shapes[key];
    }
    var data = Readfile.readTxt(key).split("\n");
    /** @type {Array} */
    var list = [];
    /** @type {Array} */
    var j = [];
    /** @type {Array} */
    var parts = [];
    /** @type {Array} */
    var codeSegments = [];
    /** @type {Array} */
    var context = [];
    /** @type {Array} */
    var ctx = [];
    var m;
    var tail;
    var match;
    /** @type {number} */
    var i = 0;
    for (;i < data.length;i++) {
      m = data[i].replace("  ", " ").split(" ");
      if (m[0].equalsIgnoreCase("v")) {
        list.push(m[1]);
        list.push(m[2]);
        list.push(m[3]);
      }
      if (m[0].equalsIgnoreCase("vn")) {
        j.push(m[1]);
        j.push(m[2]);
        j.push(m[3]);
      }
      if (m[0].equalsIgnoreCase("vt")) {
        parts.push(m[1]);
        parts.push(m[2]);
        parts.push(m[3]);
      }
      if (m[0].equalsIgnoreCase("f")) {
        tail = m[1].split("/");
        match = m[2].split("/");
        m = m[3].split("/");
        codeSegments.push(tail[0]);
        codeSegments.push(match[0]);
        codeSegments.push(m[0]);
        ctx.push(tail[1]);
        ctx.push(match[1]);
        ctx.push(m[1]);
        context.push(tail[2]);
        context.push(match[2]);
        context.push(m[2]);
      }
    }
    console.log(list.length + " " + parts.length);
    /** @type {Float32Array} */
    data = new Float32Array(9 * codeSegments.length);
    /** @type {number} */
    i = j = 0;
    for (;i < codeSegments.length;i++) {
      data[j++] = list[3 * codeSegments[i] + 0 - 3];
      data[j++] = list[3 * codeSegments[i] + 1 - 3];
      data[j++] = list[3 * codeSegments[i] + 2 - 3];
      data[j++] = parts[3 * ctx[i] + 0 - 3];
      /** @type {number} */
      data[j++] = 1 - parts[3 * ctx[i] + 1 - 3];
      /** @type {number} */
      data[j++] = 1500;
      /** @type {number} */
      data[j++] = 0;
      /** @type {number} */
      data[j++] = 1;
      /** @type {number} */
      data[j++] = 0;
    }
    return ShapeLib.shapes[key] = data;
  }
};
/**
 * @return {undefined}
 */
function Gluu() {
  /** @type {null} */
  this.selectionShader = this.lineShader = this.standardShader = null;
  this.mvMatrix = mat4.create();
  this.objStrMatrix = mat4.create([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  /** @type {Array} */
  this.mvMatrixStack = [];
  this.pMatrix = mat4.create();
}
/**
 * @param {HTMLCanvasElement} canvas
 * @return {undefined}
 */
Gluu.prototype.initGL = function(canvas) {
  try {
    gl = canvas.getContext("experimental-webgl", {
      antialias : false,
      alpha : false
    });
    gl.viewportWidth = canvas.width;
    gl.viewportHeight = canvas.height;
  } catch (d) {
  }
  if (!gl) {
    alert("Could not initialise WebGL");
  }
};
/**
 * @param {WebGLRenderingContext} gl
 * @param {string} str
 * @param {string} id
 * @return {?}
 */
Gluu.prototype.getShader = function(gl, str, id) {
  /** @type {XMLHttpRequest} */
  var xhr = new XMLHttpRequest;
  if (void 0 !== window.shadersCode) {
    if (str = shadersCode[id][str], void 0 === str) {
      return null;
    }
  } else {
    if (xhr.open("GET", "shaders/" + str + "." + id, false), xhr.send(null), str = xhr.responseText, !str) {
      return null;
    }
  }
  if ("fs" === id) {
    id = gl.createShader(gl.FRAGMENT_SHADER);
  } else {
    if ("vs" === id) {
      id = gl.createShader(gl.VERTEX_SHADER);
    } else {
      return null;
    }
  }
  return gl.shaderSource(id, str), gl.compileShader(id), gl.getShaderParameter(id, gl.COMPILE_STATUS) ? id : (alert(gl.getShaderInfoLog(id)), null);
};
/**
 * @return {undefined}
 */
Gluu.prototype.initLineShader = function() {
  var fragmentShader = this.getShader(gl, "line", "fs");
  var vertexShader = this.getShader(gl, "line", "vs");
  this.lineShader = gl.createProgram();
  gl.attachShader(this.lineShader, vertexShader);
  gl.attachShader(this.lineShader, fragmentShader);
  gl.linkProgram(this.lineShader);
  if (!gl.getProgramParameter(this.lineShader, gl.LINK_STATUS)) {
    alert("Could not initialise shaders");
  }
  gl.useProgram(this.lineShader);
  this.lineShader.vertexPositionAttribute = gl.getAttribLocation(this.lineShader, "aVertexPosition");
  gl.enableVertexAttribArray(this.lineShader.vertexPositionAttribute);
  this.lineShader.textureCoordAttribute = gl.getAttribLocation(this.lineShader, "aTextureCoord");
  gl.enableVertexAttribArray(this.lineShader.textureCoordAttribute);
  this.lineShader.lightAttribute = gl.getAttribLocation(this.lineShader, "lightValue");
  gl.enableVertexAttribArray(this.lineShader.lightAttribute);
  this.lineShader.pMatrixUniform = gl.getUniformLocation(this.lineShader, "uPMatrix");
  this.lineShader.mvMatrixUniform = gl.getUniformLocation(this.lineShader, "uMVMatrix");
};
/**
 * @return {undefined}
 */
Gluu.prototype.initSelectionShader = function() {
  var fragmentShader = this.getShader(gl, "selection", "fs");
  var vertexShader = this.getShader(gl, "selection", "vs");
  this.selectionShader = gl.createProgram();
  gl.attachShader(this.selectionShader, vertexShader);
  gl.attachShader(this.selectionShader, fragmentShader);
  gl.linkProgram(this.selectionShader);
  if (!gl.getProgramParameter(this.selectionShader, gl.LINK_STATUS)) {
    alert("Could not initialise shaders");
  }
  gl.useProgram(this.selectionShader);
  this.selectionShader.vertexPositionAttribute = gl.getAttribLocation(this.selectionShader, "aVertexPosition");
  gl.enableVertexAttribArray(this.selectionShader.vertexPositionAttribute);
  this.selectionShader.textureCoordAttribute = gl.getAttribLocation(this.selectionShader, "aTextureCoord");
  gl.enableVertexAttribArray(this.selectionShader.textureCoordAttribute);
  this.selectionShader.lightAttribute = gl.getAttribLocation(this.selectionShader, "lightValue");
  gl.enableVertexAttribArray(this.selectionShader.lightAttribute);
  this.selectionShader.pMatrixUniform = gl.getUniformLocation(this.selectionShader, "uPMatrix");
  this.selectionShader.mvMatrixUniform = gl.getUniformLocation(this.selectionShader, "uMVMatrix");
  this.selectionShader.msMatrixUniform = gl.getUniformLocation(this.selectionShader, "uMSMatrix");
  this.selectionShader.samplerUniform = gl.getUniformLocation(this.selectionShader, "uSampler");
};
/**
 * @param {?} a
 * @return {undefined}
 */
Gluu.prototype.initStandardShader = function(a) {
  if (void 0 !== this.standardShader) {
    gl.deleteProgram(this.standardShader);
  }
  var fragmentShader = this.getShader(gl, a, "fs");
  var vertexShader = this.getShader(gl, a, "vs");
  this.standardShader = gl.createProgram();
  gl.attachShader(this.standardShader, vertexShader);
  gl.attachShader(this.standardShader, fragmentShader);
  gl.linkProgram(this.standardShader);
  if (!gl.getProgramParameter(this.standardShader, gl.LINK_STATUS)) {
    alert("Could not initialise shaders");
  }
  settings.worldShader = a;
  gl.useProgram(this.standardShader);
  this.standardShader.vertexPositionAttribute = gl.getAttribLocation(this.standardShader, "aVertexPosition");
  gl.enableVertexAttribArray(this.standardShader.vertexPositionAttribute);
  this.standardShader.textureCoordAttribute = gl.getAttribLocation(this.standardShader, "aTextureCoord");
  gl.enableVertexAttribArray(this.standardShader.textureCoordAttribute);
  this.standardShader.lightAttribute = gl.getAttribLocation(this.standardShader, "lightValue");
  gl.enableVertexAttribArray(this.standardShader.lightAttribute);
  this.standardShader.lod = gl.getUniformLocation(this.standardShader, "lod");
  this.standardShader.sun = gl.getUniformLocation(this.standardShader, "sun");
  this.standardShader.brightness = gl.getUniformLocation(this.standardShader, "brightness");
  this.standardShader.skyColor = gl.getUniformLocation(this.standardShader, "skyColor");
  this.standardShader.pMatrixUniform = gl.getUniformLocation(this.standardShader, "uPMatrix");
  this.standardShader.mvMatrixUniform = gl.getUniformLocation(this.standardShader, "uMVMatrix");
  this.standardShader.msMatrixUniform = gl.getUniformLocation(this.standardShader, "uMSMatrix");
  this.standardShader.samplerUniform = gl.getUniformLocation(this.standardShader, "uSampler");
};
/**
 * @return {undefined}
 */
Gluu.prototype.setMatrixUniforms = function() {
  gl.uniformMatrix4fv(this.standardShader.pMatrixUniform, false, this.pMatrix);
  gl.uniformMatrix4fv(this.standardShader.mvMatrixUniform, false, this.mvMatrix);
  gl.uniformMatrix4fv(this.standardShader.msMatrixUniform, false, this.objStrMatrix);
};
/**
 * @return {undefined}
 */
Gluu.prototype.mvPushMatrix = function() {
  var copies = mat4.clone(this.mvMatrix);
  this.mvMatrixStack.push(copies);
};
/**
 * @return {undefined}
 */
Gluu.prototype.mvPopMatrix = function() {
  if (0 == this.mvMatrixStack.length) {
    throw "Invalid popMatrix!";
  }
  this.mvMatrix = this.mvMatrixStack.pop();
};
/**
 * @param {number} degrees
 * @return {?}
 */
Gluu.prototype.degToRad = function(degrees) {
  return degrees * Math.PI / 180;
};
