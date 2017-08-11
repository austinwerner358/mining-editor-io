Settings = ->
  b = {distanceLevel: '10-10-10', pos: '20+80+70', rot: '-5.5+0.0', skyColor: '230-248-255'}
  window.location.search.substr(1).split('&').forEach((c) ->
    b[c.split('=')[0]] = c.split('=')[1]
    return
  )
  window.location.hash.substr(1).split('&').forEach((c) ->
    b[c.split('=')[0]] = c.split('=')[1]
    return
  )
  d = JSON.parse(Readfile.readTxt('game-data/settings.json'))
  console.log(d)
  @gameRoot = d.gameroot.value
  undefined != b.gameroot and d.gameroot.url and (@gameRoot = b.gameroot)
  @worldName = d.worldname.value
  undefined != b.worldname and d.worldname.url and (@worldName = b.worldname)
  @server = undefined
  undefined != d.server and (@server = d.server.value)
  undefined != b.server and (@server = b.server)
  @distanceLevel = [
    10
    10
    10
  ]
  undefined != d.distanceLevel and @distanceLevel[0] = parseInt(d.distanceLevel.value.split('-')[0]) or @distanceLevel[0]
  @distanceLevel[1] = parseInt(d.distanceLevel.value.split('-')[1]) or @distanceLevel[1]
  @distanceLevel[2] = parseInt(d.distanceLevel.value.split('-')[2]) or @distanceLevel[2]

  undefined != b.distanceLevel and d.distanceLevel.url and @distanceLevel[0] = parseInt(b.distanceLevel.split('-')[0]) or @distanceLevel[0]
  @distanceLevel[1] = parseInt(b.distanceLevel.split('-')[1]) or @distanceLevel[1]
  @distanceLevel[2] = parseInt(b.distanceLevel.split('-')[2]) or @distanceLevel[2]

  10 > @distanceLevel[0] and (@distanceLevel[0] = 10)
  @distanceLevel[1] < @distanceLevel[0] and (@distanceLevel[1] = @distanceLevel[0])
  @distanceLevel[2] < @distanceLevel[0] and (@distanceLevel[2] = @distanceLevel[0])
  100 < @distanceLevel[0] and (@distanceLevel[0] = 100)
  100 < @distanceLevel[1] and (@distanceLevel[1] = 100)
  100 < @distanceLevel[2] and (@distanceLevel[2] = 100)
  @waterlevel = 49
  undefined != d.waterlevel and (@waterlevel = parseInt(d.waterlevel.value))
  undefined != b.waterlevel and d.waterlevel.url and (@waterlevel = parseInt(b.waterlevel))
  @sensitivity = 50
  undefined != d.mouseSensitivity and (@sensitivity = parseInt(d.mouseSensitivity.value))
  undefined != b.mouseSensitivity and d.mouseSensitivity.url and (@sensitivity = parseInt(b.mouseSensitivity))
  10 > @sensitivity and (@sensitivity = 10)
  100 < @sensitivity and (@sensitivity = 100)
  @pos = [
    0
    100
    0
  ]
  @rot = [
    0
    0
  ]
  undefined != d.pos and @pos[0] = parseFloat(d.pos.value.split('+')[0]) or @pos[0]
  @pos[1] = parseFloat(d.pos.value.split('+')[1]) or @pos[1]
  @pos[2] = parseFloat(d.pos.value.split('+')[2]) or @pos[2]

  undefined != b.pos and d.pos.url and @pos[0] = parseFloat(b.pos.split('+')[0]) or @pos[0]
  @pos[1] = parseFloat(b.pos.split('+')[1]) or @pos[1]
  @pos[2] = parseFloat(b.pos.split('+')[2]) or @pos[2]

  undefined != d.rot and @rot[0] = parseFloat(d.rot.value.split('+')[0]) or @rot[0]
  @rot[1] = parseFloat(d.rot.value.split('+')[1]) or @rot[1]

  undefined != b.rot and d.rot.url and @rot[0] = parseFloat(b.rot.split('+')[0]) or @rot[0]
  @rot[1] = parseFloat(b.rot.split('+')[1]) or @rot[1]

  @skyColor = new Float32Array([
    1
    1
    1
    1
  ])
  undefined != d.skyColor and @skyColor[0] = parseFloat(d.skyColor.value.split('-')[0]) / 255 or @skyColor[0]
  @skyColor[1] = parseFloat(d.skyColor.value.split('-')[1]) / 255 or @skyColor[1]
  @skyColor[2] = parseFloat(d.skyColor.value.split('-')[2]) / 255 or @skyColor[2]

  undefined != b.skyColor and d.skyColor.url and @skyColor[0] = parseFloat(b.skyColor.split('-')[0]) / 255 or @skyColor[0]
  @skyColor[1] = parseFloat(b.skyColor.split('-')[1]) / 255 or @skyColor[1]
  @skyColor[2] = parseFloat(b.skyColor.split('-')[2]) / 255 or @skyColor[2]

  @sun = 1
  undefined != d.sun and (@sun = parseFloat(d.sun.value) + 0.01 or @sun)
  undefined != b.sun and d.sun.url and (@sun = parseFloat(b.sun) + 0.01 or @sun)
  1 < @sun and (@sun = 1)
  @brightness = 0.3
  undefined != d.brightness and (@brightness = parseFloat(d.brightness.value) + 0.01 or @brightness)
  undefined != b.brightness and d.brightness.url and (@brightness = parseFloat(b.brightness) + 0.01 or @brightness)
  @loadLag = 3
  undefined != d.loadLag and (@loadLag = parseFloat(d.loadLag.value) or @loadLag)
  undefined != b.loadLag and d.loadLag.url and (@loadLag = parseFloat(b.loadLag) or @loadLag)
  @loadSpeed = 1
  undefined != d.loadSpeed and (@loadSpeed = parseFloat(d.loadSpeed.value) or @loadSpeed)
  undefined != b.loadSpeed and d.loadSpeed.url and (@loadSpeed = parseFloat(b.loadSpeed) or @loadSpeed)
  @worldShader = 'standard'
  undefined != d.worldShader and (@worldShader = d.worldShader.value or @worldShader)
  undefined != b.worldShader and d.worldShader.url and (@worldShader = b.worldShader or @worldShader)
  @edit = !0
  undefined != d.edit and (@edit = d.edit.value)
  undefined != d.edit and d.edit.url and 'true' == b.edit and (@edit = !0)
  'false' == b.edit and (@edit = !1)

  @lightInit = !1
  undefined != d.lightInit and (@lightInit = d.lightInit.value)
  undefined != d.lightInit and d.lightInit.url and 'true' == b.lightInit and (@lightInit = !0)
  'false' == b.lightInit and (@lightInit = !1)

  @allowTools = !0
  @cameraType = d.camera.value
  undefined != b.camera and d.camera.url and (@cameraType = b.camera)
  return

Settings::setDistanceLevel = (b) ->
  @distanceLevel = [
    b
    b
    b
  ]
  document.getElementById('setDstLvl_val').innerHTML = @distanceLevel[0]
  @getSettingsURL()
  return

Settings::setSkyColor = (b) ->
  @skyColor[0] = b[0]
  @skyColor[1] = b[1]
  @skyColor[2] = b[2]
  @getSettingsURL()
  return

Settings::setSun = (b) ->
  @sun = b
  document.getElementById('setSun_val').innerHTML = @sun
  @getSettingsURL()
  return

Settings::setBrightness = (b) ->
  @brightness = b
  document.getElementById('setBrightness_val').innerHTML = @brightness
  @getSettingsURL()
  return

Settings::getSettingsURL = ->
  # Ignore the hash portion of the url.
  urlCurrent = document.location.href.split(/#/)[0]
  # Split url into address and params.
  urlSplit = urlCurrent.split(/\?/)
  # Get array or params or empty array.
  params = if undefined == urlSplit[1] then [] else urlSplit[1].split(/&/)
  # Use the same address.
  urlUpdated = urlSplit[0] + '?'
  hasParam = {}
  # TODO: test what errors when using ->
  params.forEach (param) =>
    switch param.split(RegExp('='))[0].toLowerCase()
      when 'sun'
        hasParam.sun = !0
        urlUpdated += '&sun=' + @sun
      when 'skycolor'
        hasParam.skyColor = !0
        urlUpdated += '&skyColor=' + Math.floor(255 * @skyColor[0]) + '-' + Math.floor(255 * @skyColor[1]) + '-' + Math.floor(255 * @skyColor[2])
      when'brightness'
        hasParam.brightness = !0
        urlUpdated += '&brightness=' + @brightness
      when'worldshader'
        hasParam.worldshader = !0
        urlUpdated += '&worldShader=' + @worldShader
      when'distancelevel'
        hasParam.distancelevel = !0
        urlUpdated += '&distanceLevel=' + @distanceLevel[0]
      else
        urlUpdated += param
    return
  !0 != hasParam.sun and (urlUpdated += '&sun=' + @sun)
  !0 != hasParam.worldshader and (urlUpdated += '&worldShader=' + @worldShader)
  !0 != hasParam.brightness and (urlUpdated += '&brightness=' + @brightness)
  !0 != hasParam.distancelevel and (urlUpdated += '&distanceLevel=' + @distanceLevel[0])
  !0 != hasParam.skyColor and (urlUpdated += '&skyColor=' + Math.floor(255 * @skyColor[0]) + '-' + Math.floor(255 * @skyColor[1]) + '-' + Math.floor(255 * @skyColor[2]))
  document.getElementById('settingsURL').value = urlUpdated + window.location.hash

Settings::setHashURL = (b, d, c) ->
  window.location.hash = 'pos=' + b[0].toFixed(2) + '+' + b[1].toFixed(2) + '+' + b[2].toFixed(2) + '&rot=' + d[0].toFixed(2) + '+' + d[1].toFixed(2) + '&camera=' + c
  return


window.settings = new Settings
