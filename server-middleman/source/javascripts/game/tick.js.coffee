# Set the method for requesting the next frame
window.requestAnimFrame = do ->
  window.requestAnimationFrame or window.webkitRequestAnimationFrame or window.mozRequestAnimationFrame or window.oRequestAnimationFrame or window.msRequestAnimationFrame or (after, dataAndEvents) ->
    # Note that setTimeout is a last resort fallback for timing frames
    window.setTimeout after, 1e3 / 60
    return

chronometer.resetTimeFlags = ->
  chronometer.timeHasPassed = false
  chronometer.newSec = false
  chronometer.hasBeen50ms = false

chronometer.tick = ->
  if !chronometer.stopGame
    if chronometer.runawayFrames
      requestAnimFrame(chronometer.tick)
    _newTime = (new Date).getTime()
    _performanceStart = performance.now()
    # Calculate the speed of the last frame
    chronometer.fpsTime = 1e3 / (_newTime - chronometer.lastTimeStart)
    chronometer.fpsPerformance = 1e3 / (_performanceStart - chronometer.lastPerformanceStart)
    # Check if a new second has passed
    if chronometer.lastTimeStart % 1e3 > _newTime % 1e3
      chronometer.newSec = true
      chronometer.sec++
    # Check if at least a tenth of a second has passed
    if chronometer.lastTimeStart % 100 > _newTime % 100
      chronometer.timeHasPassed = true
    # Check if another 50 millesecond interval has been reached
    if _newTime > chronometer.last50msTime + 50
      chronometer.last50msTime = _newTime
      chronometer.hasBeen50ms = true
    # Update player position
    camera.updatePosition chronometer.fpsTime
    # Calculate timing for loading world data
    chronometer.iLag += settings.loadSpeed
    if chronometer.iLag > settings.loadLag
      chronometer.iLag = settings.loadLag
    # Limit how often the selection box is rendered
    if settings.edit and chronometer.timeHasPassed
      window.blockSelection = mcWorld.renderSelection()
    # Run interactions and potentially load new regions
    chronometer.interactionAndLoading()
    mcWorld.render()
    player.render()
    for key of players
      if undefined != players[key]
        players[key].update chronometer.fpsTime
        players[key].render()
    if settings.edit
      selectBox.render window.blockSelection
      pointer.render()
    if chronometer.hasBeen50ms
      mcWorld.new50msec()
    if 10 == chronometer.sec
      chronometer.sec = 0
      mcWorld.deleteBuffers()
    # Get the previous last time variables
    _lastTimeStart = chronometer.lastTimeStart
    _lastPerformanceStart = chronometer.lastPerformanceStart
    # Set last frame times as current
    chronometer.lastTimeStart = _newTime
    chronometer.lastTimeEnd = (new Date).getTime()
    chronometer.lastPerformanceStart = _performanceStart
    chronometer.lastPerformanceEnd = performance.now()
    # Calculate elapsed time
    _elapsedFramePerformance = chronometer.lastPerformanceEnd - chronometer.lastPerformanceStart
    # Show the info for this frame
    chronometer.updateVisibleInfo(_lastTimeStart, _elapsedFramePerformance)
    # If this render was fast, slow things down
    if !chronometer.runawayFrames
      if (1e3 / chronometer.fpsCap > _elapsedFramePerformance)
        sleep(1e3 / chronometer.fpsCap - _elapsedFramePerformance).then () -> requestAnimFrame(chronometer.tick)
      else
        requestAnimFrame(chronometer.tick)
  return

chronometer.interactionAndLoading = ->
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

chronometer.updateVisibleInfo = (_lastTimeStart, _elapsedFramePerformance) ->
  pos = camera.getPos()
  rot = camera.getRot()
  if chronometer.newSec
    settings.setHashURL pos, rot, camera.name
  if 0 < Math.floor(chronometer.lastTimeStart / 100) - Math.floor(_lastTimeStart / 100)
    h_u_d.gameStateHtml.innerHTML = 'x: ' + pos[0].toFixed(2) + '  y: ' + pos[1].toFixed(2) + '  z: ' + pos[2].toFixed(2)
    h_u_d.gameStateHtml.innerHTML += "<br/>File: r.#{pos[0] >> 9}.#{pos[2] >> 9}.mca"
    # TODO: optionally show detailed location
    h_u_d.gameStateHtml.innerHTML += "<br/>Chunk in region: #{(pos[0] >> 4) % 32}, #{(pos[2] >> 4) % 32}"
    h_u_d.gameStateHtml.innerHTML += "<br/>Chunk: #{pos[0] >> 4}, #{pos[2] >> 4}"
    # TODO: show coordinates in the Nether
    h_u_d.gameStateHtml.innerHTML += '<br/>FPS T: ' + Math.floor(chronometer.fpsTime)
    h_u_d.gameStateHtml.innerHTML += '<br/>FPS P: ' + Math.floor(chronometer.fpsPerformance)
    h_u_d.gameStateHtml.innerHTML += "<br/>FPS X: #{if 1e3 / chronometer.fpsCap > _elapsedFramePerformance then Math.floor(1e3 / chronometer.fpsCap - _elapsedFramePerformance) else '0'}"
    h_u_d.gameStateHtml.innerHTML += "<br/>FPS S: #{Math.floor(1e3 / _elapsedFramePerformance)}"
    h_u_d.gameStateHtml.innerHTML += "<br/>FPS Delay: #{1e3 / chronometer.fpsCap > _elapsedFramePerformance}"
    h_u_d.gameStateHtml.innerHTML += '<br/>Block: ' + useBlock.id + '-' + useBlock.data + '  : ' + (window.block[useBlock.id][useBlock.data].name or window.block[useBlock.id].name or window.block[useBlock.id][useBlock.data].defaultTexture or '')
    h_u_d.gameStateHtml.innerHTML += '<br/>Est. Gpu Mem: ' + Math.floor(8 * chronometer.gpuMem / 1048576) + ' M'
  if undefined != players
    e = 0
    for key of players
      if undefined != players[key]
        e++
    h_u_d.gameStateHtml.innerHTML += '<br/>Players online: ' + e + 1 + ''
