/**
 * @param {Array} pos
 * @param {Array} enemy
 * @param {Array} up
 * @return {undefined}
 */
function Mob(pos, enemy, up) {
  this.pos = pos || [0, 0, 0];
  /** @type {Array} */
  this.oldPos = [0, 0, 0];
  /** @type {Array} */
  this.speed = [0, 0, 0];
  /** @type {Array} */
  this.tPos = [0, 0, 0];
  this.rot = enemy || [0, 0];
  this.up = up || [0, 1, 0];
  /** @type {Array} */
  this.eyePos = [0, 0, 0];
  /** @type {number} */
  this.przesz = this.przesy = this.przesx = 0;
  /** @type {string} */
  this.name = "";
  this.lastTime = chronometer.lastTimeStart;
}
/**
 * @param {number} x
 * @param {number} y
 * @param {number} pos
 * @return {undefined}
 */
Mob.prototype.setPos = function(x, y, pos) {
  /** @type {number} */
  this.pos[0] = x;
  /** @type {number} */
  this.pos[1] = y;
  /** @type {number} */
  this.pos[2] = pos;
};
/**
 * @param {string} name
 * @return {undefined}
 */
Mob.prototype.setName = function(name) {
  /** @type {string} */
  this.name = name;
  this.nameVbo = void 0;
};
/**
 * @return {?}
 */
Mob.prototype.getEye = function() {
  return[this.pos[0] + this.eyePos[0] * Math.cos(-this.rot[0]) - this.eyePos[2] * Math.sin(-this.rot[0]), this.pos[1] + this.eyePos[1], this.pos[2] + this.eyePos[0] * Math.sin(-this.rot[0]) + this.eyePos[2] * Math.cos(-this.rot[0])];
};
/**
 * @return {?}
 */
Mob.prototype.getPos = function() {
  return this.pos;
};
/**
 * @return {?}
 */
Mob.prototype.getRot = function() {
  return this.rot;
};
/**
 * @param {Array} dataAndEvents
 * @return {undefined}
 */
Mob.prototype.setPosRotRawInt = function(dataAndEvents) {
  if (void 0 !== dataAndEvents) {
    this.oldPos[0] = this.tPos[0];
    this.oldPos[1] = this.tPos[1];
    this.oldPos[2] = this.tPos[2];
    /** @type {number} */
    this.pos[0] = dataAndEvents[0] / 100;
    /** @type {number} */
    this.pos[1] = dataAndEvents[1] / 100;
    /** @type {number} */
    this.pos[2] = dataAndEvents[2] / 100;
    this.tPos[0] = this.pos[0];
    this.tPos[1] = this.pos[1];
    this.tPos[2] = this.pos[2];
    /** @type {number} */
    this.rot[0] = dataAndEvents[3] / 100;
    /** @type {number} */
    this.rot[1] = dataAndEvents[4] / 100;
    /** @type {number} */
    var deltat = dataAndEvents[5] - this.lastTime;
    if (0 !== deltat) {
      /** @type {number} */
      this.speed[0] = 1E3 / deltat * (this.oldPos[0] - this.pos[0]) * 0.5;
      /** @type {number} */
      this.speed[1] = 1E3 / deltat * (this.oldPos[1] - this.pos[1]) * 0.5;
      /** @type {number} */
      this.speed[2] = 1E3 / deltat * (this.oldPos[2] - this.pos[2]) * 0.5;
    }
    this.lastTime = dataAndEvents[5];
  }
};
/**
 * @param {Array} status
 * @param {Array} dataAndEvents
 * @return {undefined}
 */
Mob.prototype.setPosRot = function(status, dataAndEvents) {
  if (void 0 !== status) {
    this.pos[0] = status[0];
    this.pos[1] = status[1];
    this.pos[2] = status[2];
  }
  if (void 0 !== dataAndEvents) {
    this.rot[0] = dataAndEvents[0];
    this.rot[1] = dataAndEvents[1];
    this.rot[2] = dataAndEvents[2];
  }
};
/**
 * @return {?}
 */
Mob.prototype.getTarget = function() {
  return[this.pos[0] + +this.eyePos[0] * Math.cos(-this.rot[0]) - this.eyePos[2] * Math.sin(-this.rot[0]) + Math.sin(this.rot[0]) * Math.cos(this.rot[1]), this.pos[1] + this.eyePos[1] + Math.sin(this.rot[1]), this.pos[2] + this.eyePos[0] * Math.sin(-this.rot[0]) + this.eyePos[2] * Math.cos(-this.rot[0]) + Math.cos(this.rot[0]) * Math.cos(this.rot[1])];
};
/**
 * @param {?} allBindingsAccessor
 * @return {undefined}
 */
Mob.prototype.update = function(allBindingsAccessor) {
  this.pos[0] -= this.speed[0] / allBindingsAccessor;
  this.pos[2] -= this.speed[2] / allBindingsAccessor;
};
/**
 * @return {undefined}
 */
Mob.prototype.render = function() {
  if (void 0 !== this.texture && this.texture.loaded) {
    var canvas = gluu.standardShader;
    if (gl.useProgram(canvas), mat4.identity(gluu.mvMatrix), mat4.translate(gluu.mvMatrix, gluu.mvMatrix, [this.pos[0], this.pos[1], this.pos[2]]), gl.uniformMatrix4fv(canvas.pMatrixUniform, false, gluu.pMatrix), gl.uniformMatrix4fv(canvas.mvMatrixUniform, false, gluu.mvMatrix), void 0 !== this.shape && (void 0 === this.shapeVbo ? (this.shapeVbo = gl.createBuffer(), gl.bindBuffer(gl.ARRAY_BUFFER, this.shapeVbo), gl.bufferData(gl.ARRAY_BUFFER, this.renderShape, gl.STATIC_DRAW)) : (gluu.mvPushMatrix(),
    mat4.rotateY(gluu.mvMatrix, gluu.mvMatrix, this.rot[0]), gl.uniformMatrix4fv(canvas.mvMatrixUniform, false, gluu.mvMatrix), gl.bindTexture(gl.TEXTURE_2D, this.texture), gl.bindBuffer(gl.ARRAY_BUFFER, this.shapeVbo), gl.vertexAttribPointer(canvas.vertexPositionAttribute, 3, gl.FLOAT, false, 36, 0), gl.vertexAttribPointer(canvas.textureCoordAttribute, 2, gl.FLOAT, false, 36, 12), gl.vertexAttribPointer(canvas.lightAttribute, 4, gl.FLOAT, false, 36, 20), gl.drawArrays(gl.TRIANGLES, 0, this.renderShape.length /
    9), gluu.mvPopMatrix()), true === this.drawName)) {
      if (void 0 === this.nameVbo) {
        this.nameVbo = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.nameVbo);
        gl.bufferData(gl.ARRAY_BUFFER, this.nameShape, gl.STATIC_DRAW);
        this.nameTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.nameTexture);
        /** @type {(HTMLElement|null)} */
        canvas = document.getElementById("texture512x64");
        var context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        /** @type {string} */
        context.fillStyle = "rgba(50, 50, 50, 0.6)";
        /** @type {string} */
        context.font = "60px Arial";
        var pw = context.measureText(this.name).width;
        context.fillRect(canvas.width / 2 - pw / 2 - 10, 0, pw + 20, canvas.height);
        /** @type {string} */
        context.fillStyle = "white";
        /** @type {number} */
        context.lineWidth = 3;
        context.fillText(this.name, canvas.width / 2 - pw / 2, 54);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      } else {
        gl.bindTexture(gl.TEXTURE_2D, this.nameTexture);
        gluu.mvPushMatrix();
        context = camera.getRot();
        mat4.translate(gluu.mvMatrix, gluu.mvMatrix, [0.15 * Math.sin(-this.rot[0]), 0, -0.15 * Math.cos(-this.rot[0])]);
        mat4.rotateY(gluu.mvMatrix, gluu.mvMatrix, context[0]);
        gl.uniformMatrix4fv(canvas.mvMatrixUniform, false, gluu.mvMatrix);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.nameVbo);
        gl.vertexAttribPointer(canvas.vertexPositionAttribute, 3, gl.FLOAT, false, 36, 0);
        gl.vertexAttribPointer(canvas.textureCoordAttribute, 2, gl.FLOAT, false, 36, 12);
        gl.vertexAttribPointer(canvas.lightAttribute, 4, gl.FLOAT, false, 36, 20);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        gluu.mvPopMatrix();
      }
    }
  }
};
