###*
# @param {number} r
# @param {number} v
# @return {undefined}
###

WorldRegion::loadRegion = (r, v) ->
  if @region[1e3 * r + v] = {}
    @region[1e3 * r + v].loaded = -2
    undefined != window.threadsCode

    ###* @type {Blob} ###

    self = new Blob([ threadsCode.loadRegionThread ], type: 'application/javascript')

    ###* @type {Worker} ###

    self = new Worker(window.URL.createObjectURL(self))
  else

    ###* @type {Worker} ###

    self = new Worker('threads/loadRegionThread.js')
  self.worldRegionThisContext = this
  self.region = @region[1e3 * r + v]

  ###*
  # @param {Uint8Array} ev
  # @return {undefined}
  ###

  self.onmessage = (ev) ->
    @worldRegionThisContext.regionLoaded ev
    return

  ###*
  # @param {?} er
  # @return {undefined}
  ###

  self.onerror = (er) ->

    ###* @type {number} ###

    @region.loaded = -1
    return

  ###* @type {string} ###

  i = @gameRoot + '/' + @worldName + '/region/r.' + r + '.' + v + '.mca'

  ###* @type {string} ###

  text = ''
  if -1 == @gameRoot.indexOf(':')

    ###* @type {string} ###

    text = document.location.href.split(/\?|#/)[0]

    ###* @type {number} ###

    idx = text.indexOf('index')
    if -1 != idx

      ###* @type {string} ###

      text = text.substring(0, idx)
  console.log text + i
  self.postMessage
    x: r
    y: v
    name: text + i
  return
