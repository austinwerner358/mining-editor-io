RegionMCA::mapRegionToNumber = (region_x, region_y) ->
  # Cantor pairing function: https://stackoverflow.com/a/13871379
  x = if region_x >= 0 then 2 * region_x else -2 * region_x - 1
  y = if region_y >= 0 then 2 * region_y else -2 * region_y - 1
  return (x + y) * (x + y + 1) / 2 + x

RegionMCA::loadRegion = (region_x, region_y) ->
  @regionList[RegionMCA::mapRegionToNumber(region_x, region_y)] = {}
  @regionList[RegionMCA::mapRegionToNumber(region_x, region_y)].loaded = -2
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
  messageDetails = "REGION r.#{region_x}.#{region_y}.mca FAILED TO LOAD > #{message}"
  console.log messageDetails
  chronometer.warnings.push(new UIMessage(messageDetails, 6000))
  @regionList[RegionMCA::mapRegionToNumber(region_x, region_y)].loaded = -1
  return

###*
# @param {worker message with Uint8Array} loadedRegionMessage
###
RegionMCA::regionLoaded = (loadedRegionMessage) ->
  region_x = loadedRegionMessage.data.x
  region_y = loadedRegionMessage.data.y
  if 1 != loadedRegionMessage.data.loaded
    @regionLoadFailure region_x, region_y, "Error with http request: #{loadedRegionMessage.data.error}"
  else
    buffer = new Uint8Array(loadedRegionMessage.data.data)
    if 1e3 > buffer.length
      @regionLoadFailure region_x, region_y, "Can not load region with data of size #{data.length}."
    else
      console.log "REGION r.#{region_x}.#{region_y}.mca LOADED"
      loadedRegion = @regionList[RegionMCA::mapRegionToNumber(region_x, region_y)]
      loadedRegion.regionBuffer = buffer
      loadedRegion.loaded = 0
      # Only the chunk data (and size/length of chunk) is loaded in this method; the header (chunk offset data and timestamps) is kept in the raw buffer.
      loadedRegion.chunkPos = []
      loadedRegion.chunkLen = []
      # There are up to 4096 chunks in a region file.
      chunk_offset = 0
      # The buffer_offset is 4 times the chunk_offset because each chunk has 4 bytes of data in the first half of the header.
      buffer_offset = 0
      while 4096 > buffer_offset
        # Retrieve the position of the first byte of the chunk by finding its offset (stored in 3 bytes with big-endian format).
        loadedRegion.chunkPos[chunk_offset] = 65536 * buffer[buffer_offset] + 256 * buffer[buffer_offset + 1] + buffer[buffer_offset + 2]
        # The fourth byte at this chunk_offset holds the length of the chunk (chunk length always less than 1MiB).
        loadedRegion.chunkLen[chunk_offset] = buffer[buffer_offset + 3]
        buffer_offset += 4
        chunk_offset++
  return

RegionMCA::requestChunk = (chunk_x, chunk_y, chunkFlag) ->
  # Input chunk coordinates (as opposed to region or player coordinates).
  chunk_index = 1e4 * chunk_x + chunk_y
  # TODO: figure out where the chunkFlag comes from.
  undefined == chunkFlag and (chunkFlag = true)
  if undefined != @chunkList[chunk_index] || !chunkFlag
    return @chunkList[chunk_index]
  # If chunk has not been established as loaded from browser storage, check if it is in local storage, and potentially load it.
  if 1 != @localChunksIndex[chunk_index]
    chunkFlag = -1
    @localChunksIndex[chunk_index] = 1
    if -1 != (local_chunk = @loadChunkFromStorage(chunk_x, chunk_y, !0))
      return @chunkList[chunk_index] = local_chunk
  region_x = Math.floor(chunk_x / 32)
  region_y = Math.floor(chunk_y / 32)
  # Check if region is undefined and if so, load region file (and set region state).
  undefined == @regionList[RegionMCA::mapRegionToNumber(region_x, region_y)] and @loadRegion(region_x, region_y)
  # Region load failed, so chunk load failed.
  if -1 == @regionList[RegionMCA::mapRegionToNumber(region_x, region_y)].loaded
    return @chunkList[chunk_index] = -1
  # Region loading and therefore chunk loading in process.
  if -2 == @regionList[RegionMCA::mapRegionToNumber(region_x, region_y)].loaded
    return -2
  if 0 == @regionList[RegionMCA::mapRegionToNumber(region_x, region_y)].loaded
    chunk_offset_x = chunk_x % 32
    0 > chunk_offset_x and (chunk_offset_x += 32)
    chunk_offset_y = chunk_y % 32
    0 > chunk_offset_y and (chunk_offset_y += 32)
    # The chunk_offset is the position (out of 4096) of the chunk in the region file.
    chunk_offset = chunk_offset_x + 32 * chunk_offset_y
    if 0 < @regionList[RegionMCA::mapRegionToNumber(region_x, region_y)].chunkPos[chunk_offset]
      # console.log('chunk #: ' + chunk_index + ' : ' + this.regionList[RegionMCA::mapRegionToNumber(region_x, region_y)].chunkPos[chunk_offset] + ' ' + this.regionList[RegionMCA::mapRegionToNumber(region_x, region_y)].chunkLen[chunk_offset]);
      @chunkCount++
      @chunkList[chunk_index] = RegionMCA.loadChunk(4096 * @regionList[RegionMCA::mapRegionToNumber(region_x, region_y)].chunkPos[chunk_offset], @regionList[RegionMCA::mapRegionToNumber(region_x, region_y)].regionBuffer, !0)
      return @chunkList[chunk_index]
    @chunkList[chunk_index] = -1
  return

RegionMCA.loadChunk = (chunk_pos, data, compressed) ->
  # The data parameter can be raw region data or a chunk from storage.
  chunk_data = {}
  new_chunk = new ChunkMCA
  chunk_data.offset = 0
  try
    if compressed
      compressed_chunk_data = new (Zlib.Inflate)(data, index: chunk_pos + 5)
      chunk_data.data = compressed_chunk_data.decompress()
    else
      chunk_data.data = data
  catch error
    console.error('Zlib failed to decompress chunk_data')
    console.error(error)
    return -1
  i = 0
  while 2e3 > i and -1 != (key_pair = NBT.nextTag(chunk_data))
    switch key_pair.name
      when 'xPos'
        new_chunk.xPos = key_pair.value
      when 'zPos'
        new_chunk.zPos = key_pair.value
      when 'HeightMap'
        new_chunk.heightMap = key_pair.data
      when 'Biomes'
        new_chunk.biomes = key_pair.data
      when 'LightPopulated'
        new_chunk.lightPopulated = key_pair.value
      when 'Sections'
        RegionMCA.readSections key_pair, new_chunk, chunk_data
        i++
        continue
    NBT.read9(key_pair, new_chunk, chunk_data) if 9 == key_pair.type
    i++
  undefined == new_chunk.heightMap and new_chunk.initHeightMap()
  new_chunk.isInit = 0
  new_chunk.isInit1 = 0
  new_chunk

RegionMCA.readSections = (sections, new_chunk, chunk_data) ->
  new_section = undefined
  key_pair = undefined
  new_section = {}
  i = 0
  while i < sections.length and -1 != (key_pair = NBT.nextTag(chunk_data))
    if 0 == key_pair.type
      undefined == new_section.add and (new_section.add = new Uint8Array(2048))
      new_chunk.section[new_section.y] = new_section
      new_section = {}
      i++
    switch key_pair.name
      when 'Y'
        new_section.y = key_pair.value
      when 'Blocks'
        new_section.blocks = key_pair.data
      when 'SkyLight'
        new_section.skyLight = key_pair.data
      when 'BlockLight'
        new_section.blockLight = key_pair.data
      when 'Add'
        new_section.add = key_pair.data
      when 'Data'
        new_section.data = key_pair.data
  return
