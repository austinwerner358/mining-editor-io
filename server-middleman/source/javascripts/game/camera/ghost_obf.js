/**
 * @param {Array} dataAndEvents
 * @param {Array} deepDataAndEvents
 * @param {?} up
 * @return {undefined}
 */
function CameraGhost(dataAndEvents, deepDataAndEvents, up) {
  /** @type {string} */
  this.name = "CameraGhost";
  /** @type {Array} */
  this.pos = [dataAndEvents[0], dataAndEvents[1], dataAndEvents[2]];
  /** @type {Array} */
  this.rot = [deepDataAndEvents[0], deepDataAndEvents[1], deepDataAndEvents[2]];
  /** @type {Array} */
  this.oldPos = [0, 0, 0];
  this.up = up;
  /** @type {number} */
  this.przesz = this.przesy = this.przesx = 1;
  /** @type {number} */
  this.control = this.lpm = 0;
  /** @type {number} */
  this.fovy = 3.14 / 3;
  /** @type {number} */
  this.aspect = gl.viewportWidth / gl.viewportHeight;
  /** @type {number} */
  this.fovx = this.fovy * this.aspect;
  /** @type {number} */
  this.starey = this.starex = 0;
  /** @type {boolean} */
  this.autoMove = true;
  /** @type {number} */
  this.lastTime = 0;
  /** @type {number} */
  this.sensitivity = 100;
  /** @type {boolean} */
  this.moveR = this.moveL = this.moveB = this.moveF = false;
  /** @type {number} */
  this.moveY = this.moveX = 0;
}
CameraGhost.prototype.resetFov = function() {
  /** @type {number} */
  this.aspect = gl.viewportWidth / gl.viewportHeight;
  /** @type {number} */
  this.fovx = this.fovy * this.aspect;
}
CameraGhost.prototype.setPos = function(x, y, pos) {
  /** @type {number} */
  this.pos[0] = x;
  /** @type {number} */
  this.pos[1] = y;
  /** @type {number} */
  this.pos[2] = pos;
}
CameraGhost.prototype.getMatrix = function() {
  var eye = mat4.create();
  return mat4.lookAt(eye, this.getEye(), this.getTarget(), this.up), eye;
}
CameraGhost.prototype.getRot = function() {
  return[this.rot[0], this.rot[1], this.rot[2]];
}
CameraGhost.prototype.getTarget = function() {
  return[this.pos[0] + Math.sin(this.rot[0]) * Math.cos(this.rot[1]), this.pos[1] + 1 * Math.sin(this.rot[1]), this.pos[2] + Math.cos(this.rot[0]) * Math.cos(this.rot[1])];
}
CameraGhost.prototype.getEye = function() {
  return[this.pos[0], this.pos[1], this.pos[2]];
}
CameraGhost.prototype.getPos = function() {
  return[this.pos[0], this.pos[1], this.pos[2]];
}
CameraGhost.prototype.getXYZPos = function() {
  return{
    x : Math.floor(this.pos[0]),
    y : Math.floor(this.pos[1]),
    z : Math.floor(this.pos[2])
  };
}
CameraGhost.prototype.moveForward = function(n) {
  this.pos[2] += 30 / n * this.przesz * Math.cos(this.rot[0]) * Math.cos(this.rot[1]);
  this.pos[0] += 30 / n * this.przesz * Math.sin(this.rot[0]) * Math.cos(this.rot[1]);
  this.pos[1] += 30 / n * this.przesz * Math.sin(this.rot[1]);
}
CameraGhost.prototype.moveBackward = function(n) {
  this.pos[2] -= 30 / n * this.przesz * Math.cos(this.rot[0]) * Math.cos(this.rot[1]);
  this.pos[0] -= 30 / n * this.przesz * Math.sin(this.rot[0]) * Math.cos(this.rot[1]);
  this.pos[1] -= 30 / n * this.przesz * Math.sin(this.rot[1]);
}
CameraGhost.prototype.moveLeft = function(n) {
  this.pos[0] += 30 / n * this.przesz * Math.cos(this.rot[0]);
  this.pos[2] -= 30 / n * this.przesz * Math.sin(this.rot[0]);
}
CameraGhost.prototype.moveRight = function(n) {
  this.pos[0] -= 30 / n * this.przesz * Math.cos(this.rot[0]);
  this.pos[2] += 30 / n * this.przesz * Math.sin(this.rot[0]);
}
CameraGhost.prototype.mouseDown = function(evt) {
  /** @type {number} */
  this.lpm = 1;
}
CameraGhost.prototype.mouseUp = function(evt) {
  /** @type {number} */
  this.lpm = 0;
}
CameraGhost.prototype.mouseMove = function(mouseEvent, keyState, opt_offset) {
  if (1 === this.lpm || this.autoMove) {
    if (20 > opt_offset) {
      /** @type {number} */
      opt_offset = 20;
    }
    this.patrzX(mouseEvent / (3 * opt_offset));
    this.patrzY(keyState / (3 * opt_offset));
  }
}
CameraGhost.prototype.patrzX = function(dataAndEvents) {
  this.rot[0] += dataAndEvents;
}
CameraGhost.prototype.patrzY = function(dataAndEvents) {
  this.rot[1] += dataAndEvents;
  if (1.57 < this.rot[1]) {
    /** @type {number} */
    this.rot[1] = 1.57;
  }
  if (-1.57 > this.rot[1]) {
    /** @type {number} */
    this.rot[1] = -1.57;
  }
}
CameraGhost.prototype.updatePosition = function(timestep) {
  if (this.moveF) {
    if (1 === this.jestcontrol) {
      this.moveUp(timestep);
    } else {
      this.moveForward(timestep);
    }
  }
  if (this.moveB) {
    if (1 === this.jestcontrol) {
      this.moveDown(timestep);
    } else {
      this.moveBackward(timestep);
    }
  }
  if (this.moveR) {
    this.moveRight(timestep);
  }
  if (this.moveL) {
    this.moveLeft(timestep);
  }
  this.patrzX(this.moveX / this.sensitivity);
  this.patrzY(this.moveY / this.sensitivity);
  /** @type {number} */
  this.moveY = this.moveX = 0;
}
CameraGhost.prototype.previousPosition = function() {
  this.pos[0] = this.oldPos[0];
  this.pos[1] = this.oldPos[1];
  this.pos[2] = this.oldPos[2];
}
CameraGhost.prototype.moveUp = function(n) {
  this.pos[1] += this.przesy;
}
CameraGhost.prototype.moveDown = function(n) {
  this.pos[1] -= this.przesy;
}
CameraGhost.prototype.keyUp = function(e) {
  e = e.keyCode;
  /** @type {boolean} */
  this.move = false;
  switch(e) {
    case 81:
      /** @type {number} */
      this.jestcontrol = 0;
      break;
    case 69:
      /** @type {number} */
      this.przesx = this.przesz = 1;
      break;
    case 37:
    ;
    case 65:
      /** @type {boolean} */
      this.moveL = false;
      break;
    case 38:
    ;
    case 87:
      /** @type {boolean} */
      this.moveF = false;
      break;
    case 39:
    ;
    case 68:
      /** @type {boolean} */
      this.moveR = false;
      break;
    case 40:
    ;
    case 83:
      /** @type {boolean} */
      this.moveB = false;
  }
}
CameraGhost.prototype.keyDown = function(event, code) {
  switch(event.keyCode) {
    case 81:
      /** @type {number} */
      this.jestcontrol = 1;
      break;
    case 37:
    ;
    case 65:
      /** @type {boolean} */
      this.moveL = true;
      break;
    case 38:
    ;
    case 87:
      /** @type {boolean} */
      this.moveF = true;
      break;
    case 39:
    ;
    case 68:
      /** @type {boolean} */
      this.moveR = true;
      break;
    case 40:
    ;
    case 83:
      /** @type {boolean} */
      this.moveB = true;
      break;
    case 69:
      /** @type {number} */
      this.przesx = this.przesz = 5;
  }
};
