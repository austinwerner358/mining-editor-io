WorldRegion::loadRegion = (region_x, region_y) ->
  # Destroy and init region.
  @region[1e3 * region_x + region_y] = {}
  @region[1e3 * region_x + region_y].loaded = -2
  fileName = "r.#{region_x}.#{region_y}.mca"
  if window.threadsCode
    ###* @type {Blob} ###
    self = new Blob([ threadsCode.loadRegionThread ], type: 'application/javascript')
    ###* @type {Worker} ###
    self = new Worker(window.URL.createObjectURL(self))
  else
    ###* @type {Worker} ###
    self = new Worker('threads/loadRegionThread.js')
  self.worldRegionThisContext = this
  self.region = @region[1e3 * region_x + region_y]
  ###*
  # @param {Uint8Array} ev
  ###
  self.onmessage = (ev) ->
    @worldRegionThisContext.regionLoaded ev
    return
  ###*
  # @param {?} er
  ###
  self.onerror = (er) ->
    @region.loaded = -1
    return
  path = "#{@gameRoot}/#{@worldName}/region/#{fileName}"
  urlForFile = ''
  if -1 == @gameRoot.indexOf(':')
    urlForFile = document.location.href.split(/\?|#/)[0]
    idx = urlForFile.indexOf('index')
    if -1 != idx
      urlForFile = urlForFile.substring(0, idx)
  console.log urlForFile + path
  self.postMessage
    x: region_x
    y: region_y
    name: urlForFile + path
  return
