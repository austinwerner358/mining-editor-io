/**
 * @param {Array} dataAndEvents
 * @param {Array} details
 * @param {Array} up
 * @return {undefined}
 */
function Humanoid(dataAndEvents, details, up) {
  dataAndEvents = dataAndEvents || [0, 0, 0];
  details = details || [0, 0];
  /** @type {Array} */
  this.pos = [dataAndEvents[0], dataAndEvents[1], dataAndEvents[2]];
  /** @type {Array} */
  this.rot = [details[0], details[1], details[2]];
  /** @type {Array} */
  this.oldPos = [0, 0, 0];
  /** @type {Array} */
  this.speed = [0, 0, 0];
  /** @type {Array} */
  this.tPos = [0, 0, 0];
  this.up = up || [0, 1, 0];
  /** @type {Array} */
  this.eyePos = [0, 1.6, 0.15];
  /** @type {number} */
  this.przesx = 8;
  /** @type {number} */
  this.przesy = 1;
  /** @type {number} */
  this.przesz = 8;
  /** @type {boolean} */
  this.drawName = true;
  /** @type {string} */
  this.name = "";
  this.lastTime = chronometer.lastTimeStart;
  this.texture = playerTexture;
  this.renderShape = ShapeLib.getObj("game-data/steve.obj");
}
Humanoid.prototype = Mob.prototype, Humanoid.prototype.shape = new Float32Array([-0.3, 0.01, -0.3, 0, 0, -0.3, 0.01, 0.3, 0, 0, -0.3, 1.8, 0.3, 0, 0, 0.3, 1.8, -0.3, 0, 0, -0.3, 0.01, -0.3, 0, 0, -0.3, 1.8, -0.3, 0, 0, 0.3, 0.01, 0.3, 0, 0, -0.3, 0.01, -0.3, 0, 0, 0.3, 0.01, -0.3, 0, 0, 0.3, 1.8, -0.3, 0, 0, 0.3, 0.01, -0.3, 0, 0, -0.3, 0.01, -0.3, 0, 0, -0.3, 0.01, -0.3, 0, 0, -0.3, 1.8, 0.3, 0, 0, -0.3, 1.8, -0.3, 0, 0, 0.3, 0.01, 0.3, 0, 0, -0.3, 0.01, 0.3, 0, 0, -0.3, 0.01, -0.3, 0, 0, -0.3,
1.8, 0.3, 0, 0, -0.3, 0.01, 0.3, 0, 0, 0.3, 0.01, 0.3, 0, 0, 0.3, 1.8, 0.3, 0, 0, 0.3, 0.01, -0.3, 0, 0, 0.3, 1.8, -0.3, 0, 0, 0.3, 0.01, -0.3, 0, 0, 0.3, 1.8, 0.3, 0, 0, 0.3, 0.01, 0.3, 0, 0, 0.3, 1.8, 0.3, 0, 0, 0.3, 1.8, -0.3, 0, 0, -0.3, 1.8, -0.3, 0, 0, 0.3, 1.8, 0.3, 0, 0, -0.3, 1.8, -0.3, 0, 0, -0.3, 1.8, 0.3, 0, 0, 0.3, 1.8, 0.3, 0, 0, -0.3, 1.8, 0.3, 0, 0, 0.3, 0.01, 0.3, 0, 0]);
/** @type {Float32Array} */
Humanoid.prototype.nameShape = new Float32Array([-1.2, 1.9, 0, 1, 1, 1500, 0, 1, 0, -1.2, 2.2, 0, 1, 0, 1500, 0, 1, 0, 1.2, 2.2, 0, 0, 0, 1500, 0, 1, 0, 1.2, 2.2, 0, 0, 0, 1500, 0, 1, 0, 1.2, 1.9, 0, 0, 1, 1500, 0, 1, 0, -1.2, 1.9, 0, 1, 1, 1500, 0, 1, 0, -1.2, 2.2, 0, 1, 0, 1500, 0, 1, 0, -1.2, 1.9, 0, 1, 1, 1500, 0, 1, 0, 1.2, 2.2, 0, 0, 0, 1500, 0, 1, 0, 1.2, 1.9, 0, 0, 1, 1500, 0, 1, 0, 1.2, 2.2, 0, 0, 0, 1500, 0, 1, 0, -1.2, 1.9, 0, 1, 1, 1500, 0, 1, 0]);
