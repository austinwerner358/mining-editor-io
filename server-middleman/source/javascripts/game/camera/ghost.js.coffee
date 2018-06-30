class window.CameraGhost
  constructor: ->
    @

  ###*
  # @param {Array} dataAndEvents
  # @param {Array} deepDataAndEvents
  # @param {?} up
  # @return {undefined}
  ###
  updatePos: (dataAndEvents, deepDataAndEvents, up) ->
    ###* @type {string} ###
    @name = 'CameraGhost'
    ###* @type {Array} ###
    @pos = [
      dataAndEvents[0]
      dataAndEvents[1]
      dataAndEvents[2]
    ]
    ###* @type {Array} ###
    @rot = [
      deepDataAndEvents[0]
      deepDataAndEvents[1]
      deepDataAndEvents[2]
    ]
    ###* @type {Array} ###
    @oldPos = [
      0
      0
      0
    ]
    @up = up
    ###* @type {number} ###
    @przesz = @przesy = @przesx = 1
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
    @moveY = @moveX = 0
    @

  resetFov: ->
    ###* @type {number} ###
    @aspect = gl.viewportWidth / gl.viewportHeight
    ###* @type {number} ###
    @fovx = @fovy * @aspect
    return

  setPos: (x, y, pos) ->
    ###* @type {number} ###
    @pos[0] = x
    ###* @type {number} ###
    @pos[1] = y
    ###* @type {number} ###
    @pos[2] = pos
    return

  getMatrix: ->
    eye = mat4.create()
    mat4.lookAt(eye, @getEye(), @getTarget(), @up)
    eye

  getRot: ->
    [
      @rot[0]
      @rot[1]
      @rot[2]
    ]

  getTarget: ->
    [
      @pos[0] + Math.sin(@rot[0]) * Math.cos(@rot[1])
      @pos[1] + 1 * Math.sin(@rot[1])
      @pos[2] + Math.cos(@rot[0]) * Math.cos(@rot[1])
    ]

  getEye: ->
    [
      @pos[0]
      @pos[1]
      @pos[2]
    ]

  getPos: ->
    [
      @pos[0]
      @pos[1]
      @pos[2]
    ]

  getXYZPos: ->
    {
      x: Math.floor(@pos[0])
      y: Math.floor(@pos[1])
      z: Math.floor(@pos[2])
    }

  moveForward: (n) ->
    @pos[2] += 30 / n * @przesz * Math.cos(@rot[0]) * Math.cos(@rot[1])
    @pos[0] += 30 / n * @przesz * Math.sin(@rot[0]) * Math.cos(@rot[1])
    @pos[1] += 30 / n * @przesz * Math.sin(@rot[1])
    return

  moveBackward: (n) ->
    @pos[2] -= 30 / n * @przesz * Math.cos(@rot[0]) * Math.cos(@rot[1])
    @pos[0] -= 30 / n * @przesz * Math.sin(@rot[0]) * Math.cos(@rot[1])
    @pos[1] -= 30 / n * @przesz * Math.sin(@rot[1])
    return

  moveLeft: (n) ->
    @pos[0] += 30 / n * @przesz * Math.cos(@rot[0])
    @pos[2] -= 30 / n * @przesz * Math.sin(@rot[0])
    return

  moveRight: (n) ->
    @pos[0] -= 30 / n * @przesz * Math.cos(@rot[0])
    @pos[2] += 30 / n * @przesz * Math.sin(@rot[0])
    return

  mouseDown: (evt) ->
    ###* @type {number} ###
    @lpm = 1
    return

  mouseUp: (evt) ->
    ###* @type {number} ###
    @lpm = 0
    return

  mouseMove: (mouseEvent, keyState, opt_offset) ->
    if 1 == @lpm or @autoMove
      if 20 > opt_offset

        ###* @type {number} ###
        opt_offset = 20
      @patrzX mouseEvent / (3 * opt_offset)
      @patrzY keyState / (3 * opt_offset)
    return

  patrzX: (dataAndEvents) ->
    @rot[0] += dataAndEvents
    return

  patrzY: (dataAndEvents) ->
    @rot[1] += dataAndEvents
    if 1.57 < @rot[1]

      ###* @type {number} ###
      @rot[1] = 1.57
    if -1.57 > @rot[1]

      ###* @type {number} ###
      @rot[1] = -1.57
    return

  updatePosition: (timestep) ->
    if @moveF
      if 1 == @jestcontrol
        @moveUp timestep
      else
        @moveForward timestep
    if @moveB
      if 1 == @jestcontrol
        @moveDown timestep
      else
        @moveBackward timestep
    if @moveR
      @moveRight timestep
    if @moveL
      @moveLeft timestep
    @patrzX @moveX / @sensitivity
    @patrzY @moveY / @sensitivity
    ###* @type {number} ###
    @moveY = @moveX = 0
    return

  previousPosition: ->
    @pos[0] = @oldPos[0]
    @pos[1] = @oldPos[1]
    @pos[2] = @oldPos[2]
    return

  moveUp: (n) ->
    @pos[1] += @przesy
    return

  moveDown: (n) ->
    @pos[1] -= @przesy
    return

  keyUp: (e) ->
    e = e.keyCode
    ###* @type {boolean} ###
    @move = false
    switch e
      when 81

        ###* @type {number} ###
        @jestcontrol = 0
      when 69

        ###* @type {number} ###
        @przesx = @przesz = 1
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

  keyDown: (event, code) ->
    switch event.keyCode
      when 81

        ###* @type {number} ###
        @jestcontrol = 1
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
        @przesx = @przesz = 5
    return

window.cameraGhost = new CameraGhost
