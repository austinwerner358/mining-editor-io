window.webGLStart = ->
  # #### Init Settings and WebGL ####
  window.settings.initSettings()
  # # TODO: instead of cancelling all computions, load elements that don't need world file source
  if !window.settings.ready
    return
  window.controls.initControls()
  ###* @type {(HTMLElement|null)} ###
  window.glCanvas = document.getElementById('webgl')
  window.glCanvas.width = window.innerWidth
  window.glCanvas.height = window.innerHeight
  window.onresize = windowResize
  window.glCanvas.onclick = canvasOn
  document.exitPointerLock = document.exitPointerLock or document.mozExitPointerLock or document.webkitExitPointerLock
  ###* @type {(HTMLElement|null)} ###
  h_u_d.gameStateHtml = document.getElementById('game-state')
  gluu.initGL window.glCanvas
  gluu.initStandardShader settings.worldShader
  gluu.initLineShader()
  gluu.initSelectionShader()
  gl.enable gl.CULL_FACE
  gl.enable gl.BLEND
  gl.cullFace gl.BACK
  gl.clearColor 0, 0, 0, 1
  gl.blendFunc gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA
  gl.enable gl.DEPTH_TEST
  initTextures()
  initBlocks()
  window.player = new Humanoid
  console.log settings.cameraType
  switch settings.cameraType
    when 'CameraGhost'
      window.camera = new CameraGhost(settings.pos, settings.rot, [
        0
        1
        0
      ])
    when 'CameraSpectator'
        window.camera = new CameraSpectator(settings.pos, settings.rot, [
          0
          1
          0
        ])
    when 'CameraAerial'
        window.camera = new CameraAerial(settings.pos, settings.rot, [
          0
          1
          0
        ])
    else
      window.player.setPosRot [
        settings.pos[0]
        settings.pos[1]
        settings.pos[2]
      ], [
        settings.rot[0]
        settings.rot[1]
      ]
      window.camera = new CameraPlayer(window.player)
  window.camera.sensitivity = 2 * settings.sensitivity
  i = 0
  while 4 > i
    window.punkty1[i] = {}
    window.punkty1[i].d = new Float32Array(2e6)
    window.punkty1[i].o = 0
    i++
  window.mcWorld = new World(
    server: settings.server
    gameRoot: settings.gameRoot
    worldName: settings.worldName)
  document.getElementById('tools').style.display = 'none'
  document.getElementById('setDstLvl').value = settings.distanceLevel[0]
  document.getElementById('setDstLvl_val').innerHTML = settings.distanceLevel[0]
  document.getElementById('shaderName').value = settings.worldShader
  document.getElementById('setSun').value = settings.sun
  document.getElementById('setSun_val').innerHTML = settings.sun
  document.getElementById('setBrightness').value = settings.brightness
  document.getElementById('setBrightness_val').innerHTML = settings.brightness
  document.getElementById('setSkyColor').color.fromRGB settings.skyColor[0], settings.skyColor[1], settings.skyColor[2]
  chronometer.firstTime = (new Date).getTime()
  chronometer.lastTime = (new Date).getTime()
  chronometer.tick()
  return
