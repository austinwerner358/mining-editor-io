Controls = ->
  @lastTarget = !1
  @selectE = !1
  @selectT = 0
  @selectTt = 1
  return

Controls::initControls = ->
  window.addEventListener 'keydown', ((e) => @keyDown(e)), !1
  window.addEventListener 'keyup', ((e) => @keyUp(e)), !0
  document.addEventListener 'pointerlockchange', ((e) => @pointerChange(e)), !1
  document.addEventListener 'mozpointerlockchange', ((e) => @pointerChange(e)), !1
  document.addEventListener 'webkitpointerlockchange', ((e) => @pointerChange(e)), !1
  window.addEventListener 'mousedown', ((e) => @mouseDown(e)), !0
  window.addEventListener 'mouseup', ((e) => @mouseUp(e)), !0
  window.addEventListener 'mousewheel', ((e) => @mouseWheel(e)), !1
  window.addEventListener 'DOMMouseScroll', ((e) => @mouseWheel(e)), !1
  return

window.controls = new Controls

###*
# @param {HTMLElement} e
###
Controls::keyDown = (e) ->
  if @lastTarget == window.glCanvas
    window.camera.keyDown e, chronometer.fps
    switch e.keyCode
      when keyMap.changeMovement
        if 0 == window.camera.upY
          window.camera.upY = 200
      when 90
        useNextBlock useBlock
      when 88
        usePrevBlock useBlock
      when 67
        useNextBlockData useBlock
      when 49
        @selectTt = 0
      when 50
        @selectTt = 1
      when 51
        @selectTt = 2
      when 52
        @selectTt = 3
      when keyMap.saveWorld
        mcWorld.save()
      when keyMap.useCodeEditor
        if !settings.allowTools
          break
        e = document.getElementById('settings')
        if 'none' == e.style.display
          e.style.display = 'block'
        else
          if 'block' == e.style.display
            e.style.display = 'none'
        if undefined != window.ace
          if settings.edit
            if null == window.codeEditor
              window.codeEditor = window.ace.edit('editor')
              window.codeEditor.setTheme 'ace/theme/tomorrow_night'
              window.codeEditor.getSession().setMode 'ace/mode/javascript'
              window.codeEditor.setValue 'var pos = window.camera.getXYZPos();\nvar block = { id: 17, data: 0};\n\nfor(var i = -2; i < 3; i++)\n    for(var j = -2; j < 3; j++){\n    if(i > -2 && i < 2 && j > -2 && j < 2) continue;\n    useNextBlockData(block);\n    mcWorld.setBlock(pos.x+i,pos.y,pos.z+j,block.id,block.data);\n}\n\nmcWorld.updateChunks();'
            e = document.getElementById('tools')
            if 'none' == e.style.display
              e.style.display = 'block'
            else
              if 'block' == e.style.display
                e.style.display = 'none'
        document.exitPointerLock()
        window.camera.moveX = 0
        window.camera.moveY = 0
      when 72
        if !settings.allowTools
          break
        if undefined == window.ace
          break
        if !settings.edit
          break
        executeJS()
      when 77
        window.localStorage.clear()
      when 86
        console.log window.camera.name
        if 'CameraGhost' == window.camera.name
          window.player.setPosRot window.camera.getEye(), window.camera.getRot()
          window.camera = new CameraPlayer(window.player)
        else
          if 'CameraPlayer' == window.camera.name
            window.camera = new CameraGhost(window.camera.getEye(), window.camera.getRot(), [
              0
              1
              0
            ])
        window.camera.sensitivity = 2 * settings.sensitivity
  return

###*
# @param {?} e
# @return {undefined}
###

Controls::keyUp = (e) ->
  if @lastTarget == window.glCanvas
    window.camera.keyUp e
  return

###*
# @param {Event} e
# @return {undefined}
###

Controls::mouseDown = (e) ->
  @lastTarget = e.target
  if @lastTarget == window.glCanvas
    window.camera.starex = e.clientX
    window.camera.starey = e.clientY
    if settings.edit
      if window.camera.autoMove
        @selectE = true
      @selectT = if 0 == e.button then 0 else @selectTt
    window.camera.mouseDown chronometer.fps
  return

###*
# @param {?} evt
# @return {undefined}
###

Controls::mouseUp = (evt) ->
  if @lastTarget == window.glCanvas
    window.camera.mouseUp chronometer.fps
  return

###*
# @param {?} e
# @return {undefined}
###

Controls::mouseMove = (e) ->
  if @lastTarget == window.glCanvas
    x = e.clientX
    e = e.clientY
    window.camera.mouseMove window.camera.starex - x, window.camera.starey - e, chronometer.fps
    window.camera.starex = x
    window.camera.starey = e
  return

###*
# @param {?} event
# @return {undefined}
###

Controls::pointerMove = (event) ->
  moveY = event.movementY or event.mozMovementY or event.webkitMovementY or 0
  window.camera.moveX -= event.movementX or event.mozMovementX or event.webkitMovementX or 0
  window.camera.moveY -= moveY
  return

###*
# @param {MouseEvent} event
# @return {undefined}
###

Controls::mouseWheel = (event) ->
  if @lastTarget == window.glCanvas
    event = window.event or event
    if 0 > Math.max(-1, Math.min(1, event.wheelDelta or -event.detail))
      useNextBlock useBlock
    else
      usePrevBlock useBlock
  return

###*
# @param {Element} element
# @return {undefined}
###

Controls::pointerChange = (element) ->

  ###* @type {(HTMLElement|null)} ###

  element = document.getElementById('webgl')
  if document.pointerLockElement == element or document.mozPointerLockElement == element or document.webkitPointerLockElement == element
    window.addEventListener 'mousemove', @pointerMove, false
  else
    element.onclick = canvasOn
    window.removeEventListener 'mousemove', @pointerMove, false
    window.camera.moveX = 0
    window.camera.moveY = 0
  return
