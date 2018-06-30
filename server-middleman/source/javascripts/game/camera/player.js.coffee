class window.CameraPlayer
  constructor: ->
    @

  ###*
  # @param {Object} entity
  # @return {undefined}
  ###

  updatePos: (entity) ->
    ###* @type {string} ###
    @name = 'CameraPlayer'
    ###* @type {Object} ###
    @entity = entity
    ###* @type {number} ###
    @failing = 0
    ###* @type {Float32Array} ###
    @oldPos = new Float32Array(3)
    ###* @type {Float32Array} ###
    @tPos = new Float32Array(3)
    ###* @type {Float32Array} ###
    @nPos1 = new Float32Array(3)
    ###* @type {Float32Array} ###
    @nPos2 = new Float32Array(3)
    @tPos[0] = entity.pos[0]
    @tPos[1] = entity.pos[1]
    @tPos[2] = entity.pos[2]
    ###* @type {number} ###
    @control = @lpm = 0
    ###* @type {number} ###
    @fovy = 3.14 / 3
    ###* @type {number} ###
    @aspect = gl.viewportWidth / gl.viewportHeight
    ###* @type {number} ###
    @fovx = @fovy * @aspect
    ###* @type {number} ###
    @starey = @starex = 0
    ###* @type {boolean} ###
    @autoMove = true
    ###* @type {number} ###
    @lastTime = 0
    ###* @type {number} ###
    @sensitivity = 100
    ###* @type {boolean} ###
    @moveR = @moveL = @moveB = @moveF = false
    ###* @type {number} ###
    @upY = @moveY = @moveX = 0
    @

  resetFov: ->
    ###* @type {number} ###
    @aspect = gl.viewportWidth / gl.viewportHeight
    ###* @type {number} ###
    @fovx = @fovy * @aspect
    return

  ###*
  # @param {?} x
  # @param {?} posY
  # @param {?} deepDataAndEvents
  # @return {undefined}
  ###

  setPos: (x, posY, deepDataAndEvents) ->
    @entity.setPos x, posY, deepDataAndEvents
    return

  ###*
  # @return {?}
  ###

  getMatrix: ->
    eye = mat4.create()
    mat4.lookAt(eye, @getEye(), @getTarget(), @entity.up)
    eye

  ###*
  # @return {?}
  ###

  getRot: ->
    [
      @entity.rot[0]
      @entity.rot[1]
      @entity.rot[2]
    ]

  ###*
  # @return {?}
  ###

  getEye: ->
    @entity.getEye()

  ###*
  # @return {?}
  ###

  getPos: ->
    [
      @entity.pos[0]
      @entity.pos[1]
      @entity.pos[2]
    ]

  ###*
  # @return {?}
  ###

  getXYZPos: ->
    {
      x: Math.floor(@entity.pos[0])
      y: Math.floor(@entity.pos[1])
      z: Math.floor(@entity.pos[2])
    }

  ###*
  # @return {?}
  ###

  getTarget: ->
    @entity.getTarget()

  ###*
  # @param {?} n
  # @return {undefined}
  ###

  moveForward: (n) ->
    @tPos[2] = @entity.pos[2] + @entity.przesz / n * Math.cos(@entity.rot[0])
    @tPos[0] = @entity.pos[0] + @entity.przesz / n * Math.sin(@entity.rot[0])
    @tPos[1] = @entity.pos[1]
    return

  ###*
  # @param {?} n
  # @return {undefined}
  ###

  moveBackward: (n) ->
    ###* @type {number} ###
    @tPos[2] = @entity.pos[2] - (@entity.przesz / n * Math.cos(@entity.rot[0]))
    ###* @type {number} ###
    @tPos[0] = @entity.pos[0] - (@entity.przesz / n * Math.sin(@entity.rot[0]))
    @tPos[1] = @entity.pos[1]
    return

  ###*
  # @param {?} n
  # @return {undefined}
  ###

  moveLeft: (n) ->
    @tPos[0] = @entity.pos[0] + @entity.przesz / n * Math.cos(@entity.rot[0])
    @tPos[1] = @entity.pos[1]
    ###* @type {number} ###
    @tPos[2] = @entity.pos[2] - (@entity.przesz / n * Math.sin(@entity.rot[0]))
    return

  ###*
  # @param {?} n
  # @return {undefined}
  ###

  moveRight: (n) ->
    ###* @type {number} ###
    @tPos[0] = @entity.pos[0] - (@entity.przesz / n * Math.cos(@entity.rot[0]))
    @tPos[1] = @entity.pos[1]
    @tPos[2] = @entity.pos[2] + @entity.przesz / n * Math.sin(@entity.rot[0])
    return

  ###*
  # @param {?} evt
  # @return {undefined}
  ###

  mouseDown: (evt) ->
    ###* @type {number} ###
    @lpm = 1
    return

  ###*
  # @param {?} evt
  # @return {undefined}
  ###

  mouseUp: (evt) ->
    ###* @type {number} ###
    @lpm = 0
    return

  ###*
  # @param {number} mouseEvent
  # @param {number} keyState
  # @param {number} opt_offset
  # @return {undefined}
  ###

  mouseMove: (mouseEvent, keyState, opt_offset) ->
    if 1 == @lpm or @autoMove
      if 20 > opt_offset
        ###* @type {number} ###
        opt_offset = 20
      @patrzX mouseEvent / (3 * opt_offset)
      @patrzY keyState / (3 * opt_offset)
    return

  ###*
  # @param {number} dataAndEvents
  # @return {undefined}
  ###

  patrzX: (dataAndEvents) ->
    @entity.rot[0] += dataAndEvents
    return

  ###*
  # @param {number} dataAndEvents
  # @return {undefined}
  ###

  patrzY: (dataAndEvents) ->
    @entity.rot[1] += dataAndEvents
    if 1.57 < @entity.rot[1]
      ###* @type {number} ###
      @entity.rot[1] = 1.57
    if -1.57 > @entity.rot[1]
      ###* @type {number} ###
      @entity.rot[1] = -1.57
    return

  ###*
  # @param {number} timestep
  # @return {undefined}
  ###

  updatePosition: (timestep) ->
    if mcWorld.testCollisions()
      d = mcWorld.getNearestPosition(@entity.pos)
      if false != d
        @entity.pos[0] = d[0] + 0.5
        @entity.pos[1] = d[1] + 0.05
        @entity.pos[2] = d[2] + 0.5
        @tPos[0] = @entity.pos[0]
        @tPos[1] = @entity.pos[1]
        @tPos[2] = @entity.pos[2]
    @oldPos[0] = @entity.pos[0]
    @oldPos[1] = @entity.pos[1]
    @oldPos[2] = @entity.pos[2]
    if 20 > timestep
      ###* @type {number} ###
      timestep = 20
    if @moveF
      if 1 != @jestcontrol
        @moveForward timestep
    if @moveB
      if 1 != @jestcontrol
        @moveBackward timestep
    if @moveR
      @moveRight timestep
    if @moveL
      @moveLeft timestep
    if 0 == @upY
      @tPos[1] -= 10 / timestep
    else
      @tPos[1] += 8 / timestep
      @upY -= 1e3 / timestep
      if 0 > @upY
        ###* @type {number} ###
        @upY = 0
    @entity.pos[1] = @tPos[1]
    if mcWorld.testCollisions()
      ###* @type {number} ###
      @failing = 0
      @entity.pos[1] = @oldPos[1]
    else
      ###* @type {number} ###
      @failing = 1
    @entity.pos[2] = @tPos[2]
    if mcWorld.testCollisions()
      @entity.pos[2] = @oldPos[2]
    @entity.pos[0] = @tPos[0]
    if mcWorld.testCollisions()
      @entity.pos[0] = @oldPos[0]
    @nPos1[0] = @entity.pos[0]
    @nPos1[1] = @entity.pos[1]
    @nPos1[2] = @entity.pos[2]
    ###* @type {number} ###
    timestep = Math.abs(@nPos1[0] - (@oldPos[0])) + Math.abs(@nPos1[2] - (@oldPos[2]))
    @entity.pos[0] = @oldPos[0]
    @entity.pos[1] = @oldPos[1]
    @entity.pos[2] = @oldPos[2]
    @tPos[1] = if 0 == @failing then @oldPos[1] + 0.5 else @oldPos[1] + 0
    @entity.pos[1] = @tPos[1]
    if mcWorld.testCollisions()
      @entity.pos[1] = @oldPos[1]
    @entity.pos[2] = @tPos[2]
    if mcWorld.testCollisions()
      @entity.pos[2] = @oldPos[2]
    @entity.pos[0] = @tPos[0]
    if mcWorld.testCollisions()
      @entity.pos[0] = @oldPos[0]
    ###* @type {number} ###
    d = Math.abs(@entity.pos[0] - (@oldPos[0])) + Math.abs(@entity.pos[2] - (@oldPos[2]))
    if timestep >= d
      @entity.pos[0] = @nPos1[0]
      @entity.pos[1] = @nPos1[1]
      @entity.pos[2] = @nPos1[2]
    @patrzX @moveX / @sensitivity
    @patrzY @moveY / @sensitivity
    ###* @type {number} ###
    @moveY = @moveX = 0
    @tPos[0] = @entity.pos[0]
    @tPos[1] = @entity.pos[1]
    @tPos[2] = @entity.pos[2]
    return

  ###*
  # @param {?} evt
  # @return {undefined}
  ###

  moveUp: (evt) ->
    @tPos[1] += @przesy
    return

  ###*
  # @param {?} evt
  # @return {undefined}
  ###

  moveDown: (evt) ->
    @tPos[1] -= @przesy
    return

  ###*
  # @param {Object} e
  # @return {undefined}
  ###

  keyUp: (e) ->
    e = e.keyCode
    ###* @type {boolean} ###
    @move = false
    switch e
      when 69
        ###* @type {number} ###
        @entity.przesx = @entity.przesz = 8
      when 37, 65
        ###* @type {boolean} ###
        @moveL = false
      when 38, 87
        ###* @type {boolean} ###
        @moveF = false
      when 39, 68
        ###* @type {boolean} ###
        @moveR = false
      when 40, 83
        ###* @type {boolean} ###
        @moveB = false
    return

  ###*
  # @param {?} event
  # @param {?} code
  # @return {undefined}
  ###

  keyDown: (event, code) ->
    switch event.keyCode
      when 37, 65
        ###* @type {boolean} ###
        @moveL = true
      when 38, 87
        ###* @type {boolean} ###
        @moveF = true
      when 39, 68
        ###* @type {boolean} ###
        @moveR = true
      when 40, 83
        ###* @type {boolean} ###
        @moveB = true
      when 69
        ###* @type {number} ###
        @entity.przesx = @entity.przesz = 16
    return

window.cameraPlayer = new CameraPlayer
