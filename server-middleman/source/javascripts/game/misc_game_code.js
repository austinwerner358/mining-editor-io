function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
/**
 * @param {Object} d
 * @return {undefined}
 */
function useNextBlock(d) {
  if (d.id === block.length - 1) {
    /** @type {number} */
    d.id = 0;
  }
  for (;0 === block[++d.id].type;) {
    if (d.id === block.length - 1) {
      /** @type {number} */
      d.id = 0;
    }
  }
  /** @type {number} */
  d.data = -1;
  useNextBlockData(d);
}
/**
 * @param {Object} c
 * @return {undefined}
 */
function usePrevBlock(c) {
  if (1 === c.id) {
    c.id = block.length;
  }
  for (;0 === block[--c.id].type;) {
    if (0 === c.id) {
      c.id = block.length;
    }
  }
  /** @type {number} */
  c.data = -1;
  useNextBlockData(c);
}
/**
 * @param {Object} n
 * @return {undefined}
 */
function useNextBlockData(n) {
  /** @type {number} */
  var d = 0;
  for (;16 > d;d++) {
    if (void 0 !== block[n.id][++n.data] && (void 0 !== block[n.id][n.data].shapeType && !block[n.id][n.data].hidden)) {
      return;
    }
    if (16 === n.data) {
      /** @type {number} */
      n.data = -1;
    }
  }
  /** @type {number} */
  n.data = 0;
}
/**
 * @return {undefined}
 */
function executeJS() {
  eval(codeEditor.getValue());
}
var shadersCode = {
  fs : [],
  vs : []
};
/** @type {Array} */
var threadsCode = [];
/**
 * @param {string} match
 * @return {?}
 */
String.prototype.equalsIgnoreCase = function(match) {
  return this.toUpperCase() === match.toUpperCase();
};
var gl;
var gluu = new Gluu;
var glCanvas;
/** @type {boolean} */
var lastTarget = false;
/** @type {null} */
var codeEditor = null;
var biomes;
var mcWorld;
var block;
var blockTexture = {
  loaded : false
};
var playerTexture = {
  loaded : false
};
var blockSelection;
var camera;
var chronometer = {};
chronometer.timeHasPassed = false;
chronometer.hasBeen50ms = false;
chronometer.gameStopped = true;
chronometer.sec = 0;
chronometer.newSec = false;
chronometer.iLag = 0;
chronometer.firstTime = 0;
chronometer.lastTimeStart = 0;
chronometer.lastTimeEnd = 0;
chronometer.lastPerformanceStart = 0;
chronometer.lastPerformanceEnd = 0;
chronometer.last50msTime = 0;
chronometer.fpsTime = 0;
chronometer.fpsPerformance = 0;
chronometer.fpsCap = 13;
chronometer.gpuMem = 0;
chronometer.runawayFrames = false;
chronometer.warnings = [];
var controls = {};
/** @type {number} */
var click = 0;
/** @type {null} */
var h_u_d = {};
var useBlock = {};
/** @type {Array} */
var punkty1 = [];
var pointer = new Pointer;
var selectBox = new SelectionBox;
var players = void 0;
