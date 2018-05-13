RegionMCA::loadRegion = (region_x, region_y) ->
  @regionData[1e3 * region_x + region_y] = {}
  @regionData[1e3 * region_x + region_y].loaded = -2
  fileName = "r.#{region_x}.#{region_y}.mca"
  console.log fileName
  console.log "Using local files: #{settings.local}"
  if window.settings.local
    @loadRegionFromLocal fileName, region_x, region_y
  else
    @loadRegionFromServer fileName, region_x, region_y, @workerFromCodeBlob(@threadCodeBlobUrlForServerFile, region_x, region_y)
  return

RegionMCA::workerFromCodeBlob = (blobUrl, region_x, region_y) ->
  alert('Web workers are undefined in this browser; can not load region files.') unless typeof(Worker)
  # Create new worker with url of shared Blob code (or file reference).
  worker = new Worker(blobUrl)
  # Instead of manually assigning references to the current context and relevant region, use => to give these callbacks the current context.
  worker.onmessage = (event) =>
    @regionLoaded event
    return
  worker.onerror = (event) =>
    alert('REGION LOADING WORKER ERROR')
    console.error(event)
    @regionLoadFailure(region_x, region_y, "Worker error: #{event}")
    return
  worker

RegionMCA::loadRegionFromLocal = (fileName, region_x, region_y) ->
  unless window.localFiles[fileName]
    @regionLoadFailure(region_x, region_y, 'local file not found')
    return
  # TODO: make sure the file reader is properly deallocated
  # TODO: implement file loading fail callback
  reader = new FileReader
  reader.onloadend = (event) =>
    if event.target.readyState == FileReader.DONE
      result = event.target.result
      console.log result
      data = new Uint8Array(result).buffer
      @regionLoaded({
        data:
          loaded: 1
          x: region_x
          y: region_y
          data: data
      })
    return
  console.log localFiles[fileName]
  reader.readAsArrayBuffer window.localFiles[fileName]
  return

RegionMCA::loadRegionFromServer = (fileName, region_x, region_y, worker) ->
  path = @gameRoot + '/' + @worldName + '/region/' + fileName
  baseURL = ''
  if -1 == @gameRoot.indexOf(':')
    baseURL = document.location.href.split(/\?|#/)[0]
    i = baseURL.indexOf('index')
    -1 != i and (baseURL = baseURL.substring(0, i))
  console.log baseURL + path
  worker.postMessage
    x: region_x
    y: region_y
    name: baseURL + path
  return

RegionMCA::regionLoadFailure = (region_x, region_y, message) ->
  # TODO: find more aspects that need to be handled if any
  console.log "REGION r.#{region_x}.#{region_y}.mca FAILED TO LOAD > #{message}"
  @regionData[1e3 * region_x + region_y].loaded = -1
  return

###*
# @param {worker message with Uint8Array} loadedRegionMessage
###
RegionMCA::regionLoaded = (loadedRegionMessage) ->
  region_x = loadedRegionMessage.data.x
  region_y = loadedRegionMessage.data.y
  if 1 != loadedRegionMessage.data.loaded
    @regionLoadFailure region_x, region_y, "Error with http request: #{loadedRegion.data.error}"
  else
    data = new Uint8Array(loadedRegionMessage.data.data)
    if 1e3 > data.length
      @regionLoadFailure region_x, region_y, "Can not load region with data of size #{data.length}."
    else
      loadedRegion = @regionData[1e3 * region_x + region_y]
      ###* @type {Uint8Array} ###
      loadedRegion.regionData = data
      loadedRegion.loaded = 0
      loadedRegion.chunkPos = []
      loadedRegion.chunkLen = []
      i = region_y = 0
      while 4096 > region_y
        loadedRegion.chunkPos[i] = 65536 * data[region_y] + 256 * data[region_y + 1] + data[region_y + 2]
        loadedRegion.chunkLen[i] = data[region_y + 3]
        region_y += 4
        i++
  return
