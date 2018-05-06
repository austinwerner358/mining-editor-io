window.requestAnimFrame = function() {
  return window.requestAnimationFrame || (window.webkitRequestAnimationFrame || (window.mozRequestAnimationFrame || (window.oRequestAnimationFrame || (window.msRequestAnimationFrame || function(after, dataAndEvents) {
    window.setTimeout(after, 1E3 / 60);
  }))));
}();

chronometer.tick = function() {
  if (!_gameStop) {
    sleep(200).then(() => {
     requestAnimFrame(chronometer.tick)
    });
    /** @type {number} */
    var newTime = (new Date).getTime();
    /** @type {number} */
    fps = 1E3 / (newTime - chronometer.lastTime);
    var pos = camera.getPos();
    var rot = camera.getRot();
    if (0 < Math.floor(newTime / 100) - Math.floor(chronometer.lastTime / 100)) {
      h_u_d.gameStateHtml.innerHTML = "x: " + pos[0].toFixed(2) + "  y: " + pos[1].toFixed(2) + "  z: " + pos[2].toFixed(2);
      h_u_d.gameStateHtml.innerHTML += "<br/>FPS: " + Math.floor(fps);
      h_u_d.gameStateHtml.innerHTML += "<br/>Block: " + useBlock.id + "-" + useBlock.data + "  : " + (block[useBlock.id][useBlock.data].name || (block[useBlock.id].name || (block[useBlock.id][useBlock.data].defaultTexture || "")));
      h_u_d.gameStateHtml.innerHTML += "<br/>Est. Gpu Mem: " + Math.floor(8 * chronometer.gpuMem / 1048576) + " M";
    }
    if (void 0 !== players) {
      /** @type {number} */
      var e = 0;
      for (key in players) {
        if (void 0 !== players[key]) {
          e++;
        }
      }
      h_u_d.gameStateHtml.innerHTML += "<br/>Players online: " + (e + 1) + "";
    }
    chronometer.newSec = false;
    if (chronometer.lastTime % 1E3 > newTime % 1E3) {
      chronometer.newSec = true;
      chronometer.sec++;
    }
    var timeHasPassed = false;
    if (chronometer.lastTime % 100 > newTime % 100) {
      timeHasPassed = true;
    }
    hasBeen50ms = false;
    if (newTime > chronometer.last50msTime + 50) {
      chronometer.last50msTime = newTime;
      hasBeen50ms = true;
    }
    chronometer.lastTime = newTime;
    camera.updatePosition(fps);
    chronometer.iLag += settings.loadSpeed
    if (chronometer.iLag > settings.loadLag) {
      chronometer.iLag = settings.loadLag;
    }
    if (settings.edit && timeHasPassed) {
      blockSelection = mcWorld.renderSelection();
    }
    if (selectE) {
      currentBlock = blockSelection;
      selectE = false;
      console.log("y: " + currentBlock.y + " z: " + currentBlock.z + " x: " + currentBlock.x + " chx: " + currentBlock.chx + " chz: " + currentBlock.chz + " side: " + currentBlock.side);
      switch(selectT) {
        case 0:
          mcWorld.updateChunkBlock(currentBlock.chx, currentBlock.chz, currentBlock.x, currentBlock.y, currentBlock.z, 0, 0);
          break;
        case 1:
          /** @type {number} */
          var val = 0;
          /** @type {number} */
          var z = 0;
          /** @type {number} */
          y = 0;
          var worker = mcWorld.getChunkBlock(currentBlock.chx, currentBlock.chz, currentBlock.x, currentBlock.y, currentBlock.z);
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
            switch(currentBlock.side) {
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
          currentBlock.x += val;
          if (15 < currentBlock.x) {
            /** @type {number} */
            currentBlock.x = 0;
            currentBlock.chx++;
          }
          if (0 > currentBlock.x) {
            /** @type {number} */
            currentBlock.x = 15;
            currentBlock.chx--;
          }
          currentBlock.z += z;
          if (15 < currentBlock.z) {
            /** @type {number} */
            currentBlock.z = 0;
            currentBlock.chz++;
          }
          if (0 > currentBlock.z) {
            /** @type {number} */
            currentBlock.z = 15;
            currentBlock.chz--;
          }
          if (0 > currentBlock.y) {
            /** @type {number} */
            currentBlock.y = 0;
          }
          if (256 < currentBlock.y) {
            /** @type {number} */
            currentBlock.y = 256;
          }
          val = useBlock.id || 1;
          z = useBlock.data || 0;
          mcWorld.updateChunkBlock(currentBlock.chx, currentBlock.chz, currentBlock.x, currentBlock.y + y, currentBlock.z, val, z);
          break;
        case 2:
          val = useBlock.id || 1;
          z = useBlock.data || 0;
          mcWorld.updateChunkBlock(currentBlock.chx, currentBlock.chz, currentBlock.x, currentBlock.y, currentBlock.z, val, z);
          break;
        case 3:
          mcWorld.changeChunkBlockAdd(currentBlock.chx, currentBlock.chz, currentBlock.x, currentBlock.y, currentBlock.z);
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
    if (hasBeen50ms) {
      mcWorld.new50msec();
    }
    if (chronometer.newSec) {
      settings.setHashURL(pos, rot, camera.name);
    }
    if (10 === chronometer.sec) {
      /** @type {number} */
      chronometer.sec = 0;
      mcWorld.deleteBuffers();
    }
  }
}
;
