/**
 * @param {HTMLElement} e
 * @return {undefined}
 */
function keyDown(e) {
  if (lastTarget === glCanvas) {
    switch(camera.keyDown(e, chronometer.fps), e.keyCode) {
      case 81:
        if (0 === camera.upY) {
          /** @type {number} */
          camera.upY = 200;
        }
        break;
      case 90:
        useNextBlock(useBlock);
        break;
      case 88:
        usePrevBlock(useBlock);
        break;
      case 67:
        useNextBlockData(useBlock);
        break;
      case 49:
        /** @type {number} */
        selectTt = 0;
        break;
      case 50:
        /** @type {number} */
        selectTt = 1;
        break;
      case 51:
        /** @type {number} */
        selectTt = 2;
        break;
      case 52:
        /** @type {number} */
        selectTt = 3;
        break;
      case 80:
        mcWorld.save();
        break;
      case 71:
        if (!settings.allowTools) {
          break;
        }
        /** @type {(HTMLElement|null)} */
        e = document.getElementById("settings");
        if ("none" === e.style.display) {
          /** @type {string} */
          e.style.display = "block";
        } else {
          if ("block" === e.style.display) {
            /** @type {string} */
            e.style.display = "none";
          }
        }
        if (void 0 !== window.ace) {
          if (settings.edit) {
            if (null === codeEditor) {
              codeEditor = ace.edit("editor");
              codeEditor.setTheme("ace/theme/tomorrow_night");
              codeEditor.getSession().setMode("ace/mode/javascript");
              codeEditor.setValue("var pos = camera.getXYZPos();\nvar block = { id: 17, data: 0};\n\nfor(var i = -2; i < 3; i++)\n    for(var j = -2; j < 3; j++){\n    if(i > -2 && i < 2 && j > -2 && j < 2) continue;\n    useNextBlockData(block);\n    mcWorld.setBlock(pos.x+i,pos.y,pos.z+j,block.id,block.data);\n}\n\nmcWorld.updateChunks();");
            }
            /** @type {(HTMLElement|null)} */
            e = document.getElementById("tools");
            if ("none" === e.style.display) {
              /** @type {string} */
              e.style.display = "block";
            } else {
              if ("block" === e.style.display) {
                /** @type {string} */
                e.style.display = "none";
              }
            }
          }
        }
        document.exitPointerLock();
        /** @type {number} */
        camera.moveX = 0;
        /** @type {number} */
        camera.moveY = 0;
        break;
      case 72:
        if (!settings.allowTools) {
          break;
        }
        if (void 0 === window.ace) {
          break;
        }
        if (!settings.edit) {
          break;
        }
        executeJS();
        break;
      case 77:
        window.localStorage.clear();
        break;
      case 86:
        console.log(camera.name);
        if ("CameraGhost" === camera.name) {
          player.setPosRot(camera.getEye(), camera.getRot());
          camera = new CameraPlayer(player);
        } else {
          if ("CameraPlayer" === camera.name) {
            camera = new CameraGhost(camera.getEye(), camera.getRot(), [0, 1, 0]);
          }
        }
        /** @type {number} */
        camera.sensitivity = 2 * settings.sensitivity;
    }
  }
}
/**
 * @param {?} e
 * @return {undefined}
 */
function keyUp(e) {
  if (lastTarget === glCanvas) {
    camera.keyUp(e);
  }
}
/**
 * @param {Event} e
 * @return {undefined}
 */
function mouseDown(e) {
  lastTarget = e.target;
  if (lastTarget === glCanvas) {
    camera.starex = e.clientX;
    camera.starey = e.clientY;
    if (settings.edit) {
      if (camera.autoMove) {
        /** @type {boolean} */
        selectE = true;
      }
      selectT = 0 === e.button ? 0 : selectTt;
    }
    camera.mouseDown(chronometer.fps);
  }
}
/**
 * @param {?} evt
 * @return {undefined}
 */
function mouseUp(evt) {
  if (lastTarget === glCanvas) {
    camera.mouseUp(chronometer.fps);
  }
}
/**
 * @param {?} e
 * @return {undefined}
 */
function mouseMove(e) {
  if (lastTarget === glCanvas) {
    var x = e.clientX;
    e = e.clientY;
    camera.mouseMove(camera.starex - x, camera.starey - e, chronometer.fps);
    camera.starex = x;
    camera.starey = e;
  }
}
/**
 * @param {?} event
 * @return {undefined}
 */
function pointerMove(event) {
  var moveY = event.movementY || (event.mozMovementY || (event.webkitMovementY || 0));
  camera.moveX -= event.movementX || (event.mozMovementX || (event.webkitMovementX || 0));
  camera.moveY -= moveY;
}
/**
 * @param {MouseEvent} event
 * @return {undefined}
 */
function mouseWheel(event) {
  if (lastTarget === glCanvas) {
    event = window.event || event;
    if (0 > Math.max(-1, Math.min(1, event.wheelDelta || -event.detail))) {
      useNextBlock(useBlock);
    } else {
      usePrevBlock(useBlock);
    }
  }
}
/**
 * @param {Element} element
 * @return {undefined}
 */
function pointerChange(element) {
  /** @type {(HTMLElement|null)} */
  element = document.getElementById("webgl");
  if (document.pointerLockElement === element || (document.mozPointerLockElement === element || document.webkitPointerLockElement === element)) {
    window.addEventListener("mousemove", pointerMove, false);
  } else {
    element.onclick = canvasOn;
    window.removeEventListener("mousemove", pointerMove, false);
    /** @type {number} */
    camera.moveX = 0;
    /** @type {number} */
    camera.moveY = 0;
  }
}
;
