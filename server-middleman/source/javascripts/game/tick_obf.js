window.requestAnimFrame = function() {
  return window.requestAnimationFrame || (window.webkitRequestAnimationFrame || (window.mozRequestAnimationFrame || (window.oRequestAnimationFrame || (window.msRequestAnimationFrame || function(after, dataAndEvents) {
    window.setTimeout(after, 1E3 / 60);
  }))));
}();
/**
 * @return {undefined}
 */
function tick() {
  if (!_gameStop) {
    sleep(200).then(() => {
     requestAnimFrame(tick)
    });
    /** @type {number} */
    var now = (new Date).getTime();
    /** @type {number} */
    fps = 1E3 / (now - lastTime);
    var elements = camera.getPos();
    var imageName = camera.getRot();
    if (0 < Math.floor(now / 100) - Math.floor(lastTime / 100) && (textDiv.innerHTML = "x: " + elements[0].toFixed(2) + "  y: " + elements[1].toFixed(2) + "  z: " + elements[2].toFixed(2), textDiv.innerHTML += "<br/>FPS: " + Math.floor(fps), textDiv.innerHTML += "<br/>Block: " + useBlock.id + "-" + useBlock.data + "  : " + (block[useBlock.id][useBlock.data].name || (block[useBlock.id].name || (block[useBlock.id][useBlock.data].defaultTexture || ""))), textDiv.innerHTML += "<br/>Est. Gpu Mem: " +
    Math.floor(8 * gpuMem / 1048576) + " M", void 0 !== players)) {
      /** @type {number} */
      var e = 0;
      for (key in players) {
        if (void 0 !== players[key]) {
          e++;
        }
      }
      textDiv.innerHTML += "<br/>Players online: " + (e + 1) + "";
    }
    /** @type {boolean} */
    newSec = false;
    if (lastTime % 1E3 > now % 1E3) {
      /** @type {boolean} */
      newSec = true;
      sec++;
    }
    /** @type {boolean} */
    var y = false;
    if (lastTime % 100 > now % 100 && (y = true), e = false, now > last50msTime + 50 && (last50msTime = now, e = true), lastTime = now, camera.updatePosition(fps), iLag += settings.loadSpeed, iLag > settings.loadLag && (iLag = settings.loadLag), settings.edit && (y && (blockSelection = mcWorld.renderSelection()), selectE)) {
      switch(now = blockSelection, selectE = false, console.log("y: " + now.y + " z: " + now.z + " x: " + now.x + " chx: " + now.chx + " chz: " + now.chz + " side: " + now.side), selectT) {
        case 0:
          mcWorld.updateChunkBlock(now.chx, now.chz, now.x, now.y, now.z, 0, 0);
          break;
        case 1:
          /** @type {number} */
          var val = 0;
          /** @type {number} */
          var z = 0;
          /** @type {number} */
          y = 0;
          var worker = mcWorld.getChunkBlock(now.chx, now.chz, now.x, now.y, now.z);
          console.log(worker.id + " " + worker.data);
          /** @type {boolean} */
          var replace = false;
          if (void 0 !== block[worker.id][worker.data & block[worker.id].mask]) {
            if (void 0 !== block[worker.id][worker.data & block[worker.id].mask].replace) {
              replace = block[worker.id][worker.data & block[worker.id].mask].replace;
            } else {
              if (void 0 !== block[worker.id].replace) {
                replace = block[worker.id].replace;
              }
            }
          }
          if (!replace) {
            switch(now.side) {
              case 1:
                /** @type {number} */
                val = -1;
                break;
              case 2:
                /** @type {number} */
                val = 1;
                break;
              case 3:
                /** @type {number} */
                z = -1;
                break;
              case 4:
                /** @type {number} */
                z = 1;
                break;
              case 5:
                /** @type {number} */
                y = -1;
                break;
              case 6:
                /** @type {number} */
                y = 1;
            }
          }
          now.x += val;
          if (15 < now.x) {
            /** @type {number} */
            now.x = 0;
            now.chx++;
          }
          if (0 > now.x) {
            /** @type {number} */
            now.x = 15;
            now.chx--;
          }
          now.z += z;
          if (15 < now.z) {
            /** @type {number} */
            now.z = 0;
            now.chz++;
          }
          if (0 > now.z) {
            /** @type {number} */
            now.z = 15;
            now.chz--;
          }
          if (0 > now.y) {
            /** @type {number} */
            now.y = 0;
          }
          if (256 < now.y) {
            /** @type {number} */
            now.y = 256;
          }
          val = useBlock.id || 1;
          z = useBlock.data || 0;
          mcWorld.updateChunkBlock(now.chx, now.chz, now.x, now.y + y, now.z, val, z);
          break;
        case 2:
          val = useBlock.id || 1;
          z = useBlock.data || 0;
          mcWorld.updateChunkBlock(now.chx, now.chz, now.x, now.y, now.z, val, z);
          break;
        case 3:
          mcWorld.changeChunkBlockAdd(now.chx, now.chz, now.x, now.y, now.z);
      }
    }
    mcWorld.render();
    player.render();
    for (key in players) {
      if (void 0 !== players[key]) {
        players[key].update(fps);
        players[key].render();
      }
    }
    if (settings.edit) {
      selectBox.render(blockSelection);
      pointer.render();
    }
    if (e) {
      mcWorld.new50msec();
    }
    if (newSec) {
      settings.setHashURL(elements, imageName, camera.name);
    }
    if (10 === sec) {
      /** @type {number} */
      sec = 0;
      mcWorld.deleteBuffers();
    }
  }
}
;
