window.requestAnimFrame = do ->
  window.requestAnimationFrame or window.webkitRequestAnimationFrame or window.mozRequestAnimationFrame or window.oRequestAnimationFrame or window.msRequestAnimationFrame or (after, dataAndEvents) ->
    window.setTimeout after, 1e3 / 60
    return

chronometer.tick = ->
  if !_gameStop
    sleep(90).then () -> requestAnimFrame(chronometer.tick)
    newTime = (new Date).getTime()
    chronometer.fps = 1e3 / (newTime - (chronometer.lastTime))
    pos = camera.getPos()
    rot = camera.getRot()
    if 0 < Math.floor(newTime / 100) - Math.floor(chronometer.lastTime / 100)
      h_u_d.gameStateHtml.innerHTML = 'x: ' + pos[0].toFixed(2) + '  y: ' + pos[1].toFixed(2) + '  z: ' + pos[2].toFixed(2)
      h_u_d.gameStateHtml.innerHTML += "<br/>File: r.#{pos[0] >> 9}.#{pos[2] >> 9}.mca"
      h_u_d.gameStateHtml.innerHTML += '<br/>FPS: ' + Math.floor(chronometer.fps)
      h_u_d.gameStateHtml.innerHTML += '<br/>Block: ' + useBlock.id + '-' + useBlock.data + '  : ' + (window.block[useBlock.id][useBlock.data].name or window.block[useBlock.id].name or window.block[useBlock.id][useBlock.data].defaultTexture or '')
      h_u_d.gameStateHtml.innerHTML += '<br/>Est. Gpu Mem: ' + Math.floor(8 * chronometer.gpuMem / 1048576) + ' M'
    if undefined != players
      e = 0
      for key of players
        if undefined != players[key]
          e++
      h_u_d.gameStateHtml.innerHTML += '<br/>Players online: ' + e + 1 + ''
    chronometer.newSec = false
    if chronometer.lastTime % 1e3 > newTime % 1e3
      chronometer.newSec = true
      chronometer.sec++
    timeHasPassed = false
    if chronometer.lastTime % 100 > newTime % 100
      timeHasPassed = true
    hasBeen50ms = false
    if newTime > chronometer.last50msTime + 50
      chronometer.last50msTime = newTime
      hasBeen50ms = true
    chronometer.lastTime = newTime
    camera.updatePosition chronometer.fps
    chronometer.iLag += settings.loadSpeed
    if chronometer.iLag > settings.loadLag
      chronometer.iLag = settings.loadLag
    if settings.edit and timeHasPassed
      window.blockSelection = mcWorld.renderSelection()
    if controls.selectE
      currentBlock = window.blockSelection
      controls.selectE = false
      console.log 'y: ' + currentBlock.y + ' z: ' + currentBlock.z + ' x: ' + currentBlock.x + ' chx: ' + currentBlock.chx + ' chz: ' + currentBlock.chz + ' side: ' + currentBlock.side
      switch (controls.selectT)
        when 0
          mcWorld.updateChunkBlock currentBlock.chx, currentBlock.chz, currentBlock.x, currentBlock.y, currentBlock.z, 0, 0
        when 1
          val = 0
          z = 0
          y = 0
          worker = mcWorld.getChunkBlock(currentBlock.chx, currentBlock.chz, currentBlock.x, currentBlock.y, currentBlock.z)
          console.log worker.id + ' ' + worker.data
          replace = false
          if undefined != window.block[worker.id][worker.data & window.block[worker.id].mask]
            if undefined != window.block[worker.id][worker.data & window.block[worker.id].mask].replace
              replace = window.block[worker.id][worker.data & window.block[worker.id].mask].replace
            else
              if undefined != window.block[worker.id].replace
                replace = window.block[worker.id].replace
          if !replace
            switch currentBlock.side
              when 1
                val = -1
              when 2
                val = 1
              when 3
                z = -1
              when 4
                z = 1
              when 5
                y = -1
              when 6
                y = 1
          currentBlock.x += val
          if 15 < currentBlock.x
            currentBlock.x = 0
            currentBlock.chx++
          if 0 > currentBlock.x
            currentBlock.x = 15
            currentBlock.chx--
          currentBlock.z += z
          if 15 < currentBlock.z
            currentBlock.z = 0
            currentBlock.chz++
          if 0 > currentBlock.z
            currentBlock.z = 15
            currentBlock.chz--
          if 0 > currentBlock.y
            currentBlock.y = 0
          if 256 < currentBlock.y
            currentBlock.y = 256
          val = useBlock.id or 1
          z = useBlock.data or 0
          mcWorld.updateChunkBlock currentBlock.chx, currentBlock.chz, currentBlock.x, currentBlock.y + y, currentBlock.z, val, z
        when 2
          val = useBlock.id or 1
          z = useBlock.data or 0
          mcWorld.updateChunkBlock currentBlock.chx, currentBlock.chz, currentBlock.x, currentBlock.y, currentBlock.z, val, z
        when 3
          mcWorld.changeChunkBlockAdd currentBlock.chx, currentBlock.chz, currentBlock.x, currentBlock.y, currentBlock.z
    mcWorld.render()
    player.render()
    for key of players
      if undefined != players[key]
        players[key].update chronometer.fps
        players[key].render()
    if settings.edit
      selectBox.render window.blockSelection
      pointer.render()
    if hasBeen50ms
      mcWorld.new50msec()
    if chronometer.newSec
      settings.setHashURL pos, rot, camera.name
    if 10 == chronometer.sec
      chronometer.sec = 0
      mcWorld.deleteBuffers()
  return
