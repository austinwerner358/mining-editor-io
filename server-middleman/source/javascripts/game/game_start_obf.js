/**
 * @return {undefined}
 */
function webGLStart() {
  // #### Init Settings and WebGL ####
  window.settings.initSettings()
  // # TODO: instead of cancelling all computions, load elements that don't need world file source
  if (!window.settings.ready) {
    return;  
  }
  /** @type {(HTMLElement|null)} */
  glCanvas = document.getElementById("webgl");
  /** @type {number} */
  glCanvas.width = window.innerWidth;
  /** @type {number} */
  glCanvas.height = window.innerHeight;
  window.onresize = windowResize;
  window.addEventListener("keydown", keyDown, false);
  window.addEventListener("keyup", keyUp, true);
  glCanvas.onclick = canvasOn;
  document.addEventListener("pointerlockchange", pointerChange, false);
  document.addEventListener("mozpointerlockchange", pointerChange, false);
  document.addEventListener("webkitpointerlockchange", pointerChange, false);
  window.addEventListener("mousedown", mouseDown, true);
  window.addEventListener("mouseup", mouseUp, true);
  window.addEventListener("mousewheel", mouseWheel, false);
  window.addEventListener("DOMMouseScroll", mouseWheel, false);
  document.exitPointerLock = document.exitPointerLock || (document.mozExitPointerLock || document.webkitExitPointerLock);
  /** @type {(HTMLElement|null)} */
  textDiv = document.getElementById("game-state");
  gluu.initGL(glCanvas);
  gluu.initStandardShader(settings.worldShader);
  gluu.initLineShader();
  gluu.initSelectionShader();
  gl.enable(gl.CULL_FACE);
  gl.enable(gl.BLEND);
  gl.cullFace(gl.BACK);
  gl.clearColor(0, 0, 0, 1);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  gl.enable(gl.DEPTH_TEST);
  initTextures();
  initBlocks();
  player = new Humanoid;
  if ("CameraGhost" === settings.cameraType) {
    camera = new CameraGhost(settings.pos, settings.rot, [0, 1, 0]);
  } else {
    if ("Camera" === settings.cameraType) {
      camera = new Camera(settings.pos, settings.rot, [0, 1, 0]);
    } else {
      player.setPosRot([settings.pos[0], settings.pos[1], settings.pos[2]], [settings.rot[0], settings.rot[1]]);
      camera = new CameraPlayer(player);
    }
  }
  /** @type {number} */
  camera.sensitivity = 2 * settings.sensitivity;
  /** @type {number} */
  var i = 0;
  for (;4 > i;i++) {
    punkty1[i] = {};
    /** @type {Float32Array} */
    punkty1[i].d = new Float32Array(2E6);
    /** @type {number} */
    punkty1[i].o = 0;
  }
  mcWorld = new World({
    server : settings.server,
    gameRoot : settings.gameRoot,
    worldName : settings.worldName
  });
  /** @type {string} */
  document.getElementById("tools").style.display = "none";
  document.getElementById("setDstLvl").value = settings.distanceLevel[0];
  document.getElementById("setDstLvl_val").innerHTML = settings.distanceLevel[0];
  document.getElementById("shaderName").value = settings.worldShader;
  document.getElementById("setSun").value = settings.sun;
  document.getElementById("setSun_val").innerHTML = settings.sun;
  document.getElementById("setBrightness").value = settings.brightness;
  document.getElementById("setBrightness_val").innerHTML = settings.brightness;
  document.getElementById("setSkyColor").color.fromRGB(settings.skyColor[0], settings.skyColor[1], settings.skyColor[2]);
  /** @type {number} */
  firstTime = (new Date).getTime();
  /** @type {number} */
  lastTime = (new Date).getTime();
  sleep(500).then(() => {
    tick()
  });
}
;
