function sleep(time) {
  console.log('sleeping');
  return new Promise((resolve) => setTimeout(resolve, time));
}

function ab2str(b) {
  var d = '',
    c = b.length,
    e = Math.pow(2, 10),
    f, l;
  for (f = 0; f < c; f += e) l = Math.min(e, c - f), l = b.subarray(f, f + l), d += String.fromCharCode.apply(null, l);
  return d;
}

function str2ab(b) {
  for (var d = new ArrayBuffer(b.length), c = new Uint8Array(d), e = 0, f = b.length; e < f; e++) c[e] = b.charCodeAt(e);
  return d;
}

function jenkins_hash(b) {
  for (var d = 0, c = 0; c < b.length; ++c) d += b[c], d += d << 10, d ^= d >> 6;
  return d += d << 3, d ^= d >> 11, d + (d << 15) >>> 0;
}

function spiralLoop(b) {
  var d = Math.floor((Math.sqrt(b + 1) - 1) / 2) + 1,
    c = 2 * d;
  b = (1 + b - 8 * d * (d - 1) / 2) % (8 * d);
  var e = [0, 0, d];
  switch (Math.floor(b / (2 * d))) {
    case 0:
      e[0] = b - d;
      e[1] = -d;
      break;
    case 1:
      e[0] = d;
      e[1] = b % c - d;
      break;
    case 2:
      e[0] = d - b % c;
      e[1] = d;
      break;
    case 3:
      e[0] = -d, e[1] = d - b % c;
  }
  return e;
}

function Gluu() {
  this.selectionShader = this.lineShader = this.standardShader = null, this.mvMatrix = mat4.create(), this.objStrMatrix = mat4.create([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), this.mvMatrixStack = [], this.pMatrix = mat4.create();
}

function Camera(b, d, c) {
  this.name = 'Camera', this.pos = b, this.oldPos = new Float32Array(3), this.tPos = new Float32Array(3), this.tPos[0] = this.pos[0], this.tPos[1] = this.pos[1], this.tPos[2] = this.pos[2], this.eyePos = [0, 1.65, 0], this.rot = d, this.up = c, this.przesx = 8, this.przesy = 1, this.przesz = 8, this.control = this.lpm = 0, this.fovy = 3.14 / 3, this.aspect = gl.viewportWidth / gl.viewportHeight, this.fovx = this.fovy * this.aspect, this.starey = this.starex = 0, this.autoMove = !0, this.lastTime = 0, this.sensitivity = 100, this.moveR = this.moveL = this.moveB = this.moveF = !1, this.upY = this.moveY = this.moveX = 0;
}

function CameraGod(b, d, c) {
  this.name = 'CameraGod', this.pos = [b[0], b[1], b[2]], this.rot = [d[0], d[1], d[2]], this.oldPos = [0, 0, 0], this.up = c, this.przesz = this.przesy = this.przesx = 1, this.control = this.lpm = 0, this.fovy = 3.14 / 3, this.aspect = gl.viewportWidth / gl.viewportHeight, this.fovx = this.fovy * this.aspect, this.starey = this.starex = 0, this.autoMove = !0, this.lastTime = 0, this.sensitivity = 100, this.moveR = this.moveL = this.moveB = this.moveF = !1, this.moveY = this.moveX = 0;
}

function CameraPlayer(b) {
  this.name = 'CameraPlayer', this.entity = b, this.failing = 0, this.oldPos = new Float32Array(3), this.tPos = new Float32Array(3), this.nPos1 = new Float32Array(3), this.nPos2 = new Float32Array(3), this.tPos[0] = b.pos[0], this.tPos[1] = b.pos[1], this.tPos[2] = b.pos[2], this.control = this.lpm = 0, this.fovy = 3.14 / 3, this.aspect = gl.viewportWidth / gl.viewportHeight, this.fovx = this.fovy * this.aspect, this.starey = this.starex = 0, this.autoMove = !0, this.lastTime = 0, this.sensitivity = 100, this.moveR = this.moveL = this.moveB = this.moveF = !1, this.upY = this.moveY = this.moveX = 0;
}

function RegionLib(b, d) {
  this.gameRoot = b, this.worldName = d, this.region = [], this.localIChunk = [], this.rchunk = [], this.iChunk = 0, _gameStop = !1;
}

function RegionSrv(b) {
  this.rchunk = [], this.iChunk = 0, this.wsOpen = !1, this.position = new Int32Array(6), this.wsMsg = {}, this.wsMsg.offset = 0, this.wsMsg.data = new Uint8Array(100000), settings.allowTools = !1, players = {}, document.getElementById('servername').value = b, document.getElementById('loginDiv').style.display = 'block';
}

function World(b) {
  this.worldData = void 0 !== b.server ? new RegionSrv(b.server) : new RegionLib(b.gameRoot, b.worldName);
}

function Chunk() {
  this.section = [], this.isInit1 = this.isInit = -1, this.changed = !1, this.ivbo = [], this.vbo = [], this.needsUpdate = !1, this.timestamp = new Date().getTime(), this.mxaVal = 0;
}

function Mob(b, d, c) {
  this.pos = b || [0, 0, 0], this.oldPos = [0, 0, 0], this.speed = [0, 0, 0], this.tPos = [0, 0, 0], this.rot = d || [0, 0], this.up = c || [0, 1, 0], this.eyePos = [0, 0, 0], this.przesz = this.przesy = this.przesx = 0, this.name = '', this.lastTime = lastTime;
}

function Player(b, d, c) {
  b = b || [0, 0, 0], d = d || [0, 0], this.pos = [b[0], b[1], b[2]], this.rot = [d[0], d[1], d[2]], this.oldPos = [0, 0, 0], this.speed = [0, 0, 0], this.tPos = [0, 0, 0], this.up = c || [0, 1, 0], this.eyePos = [0, 1.6, 0.15], this.przesx = 8, this.przesy = 1, this.przesz = 8, this.drawName = !0, this.name = '', this.lastTime = lastTime, this.texture = playerTexture, this.renderShape = ShapeLib.getObj('game-data/steve.obj');
}

function Pointer() {}

function SelectionBox() {}

function tick() {
  if (!_gameStop) {
    sleep(200).then(() => {
      requestAnimFrame(tick)
    });
    var b = new Date().getTime();
    fps = 1000 / (b - lastTime);
    var d = camera.getPos(),
      c = camera.getRot();
    if (0 < Math.floor(b / 100) - Math.floor(lastTime / 100) && (textDiv.innerHTML = 'x: ' + d[0].toFixed(2) + '  y: ' + d[1].toFixed(2) + '  z: ' + d[2].toFixed(2), textDiv.innerHTML += '<br/>FPS: ' + Math.floor(fps), textDiv.innerHTML += '<br/>Block: ' + useBlock.id + '-' + useBlock.data + '  : ' + (block[useBlock.id][useBlock.data].name || block[useBlock.id].name || block[useBlock.id][useBlock.data].defaultTexture || ''), textDiv.innerHTML += '<br/>Est. Gpu Mem: ' + Math.floor(8 * gpuMem / 1048576) + ' M', void 0 !== players)) {
      var e = 0;
      for (key in players) void 0 !== players[key] && e++;
      textDiv.innerHTML += '<br/>Players online: ' + (e + 1) + '';
    }
    newSec = !1, lastTime % 1000 > b % 1000 && (newSec = !0, sec++);
    var f = !1;
    if (lastTime % 100 > b % 100 && (f = !0), e = !1, b > last50msTime + 50 && (last50msTime = b, e = !0), lastTime = b, camera.updatePosition(fps), iLag += settings.loadSpeed, iLag > settings.loadLag && (iLag = settings.loadLag), settings.edit && (f && (blockSelection = mcWorld.renderSelection()), selectE)) switch (b = blockSelection, selectE = !1, console.log('y: ' + b.y + ' z: ' + b.z + ' x: ' + b.x + ' chx: ' + b.chx + ' chz: ' + b.chz + ' side: ' + b.side), selectT) {
      case 0:
        mcWorld.updateChunkBlock(b.chx, b.chz, b.x, b.y, b.z, 0, 0);
        break;
      case 1:
        var l = 0,
          k = 0,
          f = 0,
          p = mcWorld.getChunkBlock(b.chx, b.chz, b.x, b.y, b.z);
        console.log(p.id + ' ' + p.data);
        var q = !1;
        void 0 !== block[p.id][p.data & block[p.id].mask] && (void 0 !== block[p.id][p.data & block[p.id].mask].replace ? q = block[p.id][p.data & block[p.id].mask].replace : void 0 !== block[p.id].replace && (q = block[p.id].replace));
        if (!q) switch (b.side) {
          case 1:
            l = -1;
            break;
          case 2:
            l = 1;
            break;
          case 3:
            k = -1;
            break;
          case 4:
            k = 1;
            break;
          case 5:
            f = -1;
            break;
          case 6:
            f = 1;
        }
        b.x += l;
        15 < b.x && (b.x = 0, b.chx++);
        0 > b.x && (b.x = 15, b.chx--);
        b.z += k;
        15 < b.z && (b.z = 0, b.chz++);
        0 > b.z && (b.z = 15, b.chz--);
        0 > b.y && (b.y = 0);
        256 < b.y && (b.y = 256);
        l = useBlock.id || 1;
        k = useBlock.data || 0;
        mcWorld.updateChunkBlock(b.chx, b.chz, b.x, b.y + f, b.z, l, k);
        break;
      case 2:
        l = useBlock.id || 1;
        k = useBlock.data || 0;
        mcWorld.updateChunkBlock(b.chx, b.chz, b.x, b.y, b.z, l, k);
        break;
      case 3:
        mcWorld.changeChunkBlockAdd(b.chx, b.chz, b.x, b.y, b.z);
    }
    mcWorld.render(), player.render();
    for (key in players) void 0 !== players[key] && (players[key].update(fps), players[key].render());
    settings.edit && (selectBox.render(blockSelection), pointer.render()), e && mcWorld.new50msec(), newSec && settings.setHashURL(d, c, camera.name), 10 === sec && (sec = 0, mcWorld.deleteBuffers());
  }
}

function initTextures() {
  blockTexture = gl.createTexture();
  var b = new Image();
  blockTexture.loaded = !1, b.onload = function() {
    handleTextureLoaded(b, blockTexture);
  }, b.src = 'images/blocks.png', playerTexture = gl.createTexture();
  var d = new Image();
  playerTexture.loaded = !1, d.onload = function() {
    handleTextureLoaded(d, playerTexture);
  }, d.src = 'images/steve.png';
}

function handleTextureLoaded(b, d) {
  gl.bindTexture(gl.TEXTURE_2D, d), gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, b), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST), gl.bindTexture(gl.TEXTURE_2D, null), d.loaded = !0;
}

function initBlocks() {
  texLib = JSON.parse(Readfile.readTxt('game-data/textures.json')), console.log(texLib), block = JSON.parse(Readfile.readTxt('game-data/blocks.json')), block.length = 300, biomes = JSON.parse(Readfile.readTxt('game-data/biomes.json'));
  for (var b = 0; 256 > b; b++) void 0 === biomes[b] && (biomes[b] = biomes[0]);
  shapeLib = JSON.parse(Readfile.readTxt('game-data/shapes.json')), console.log(shapeLib), texLib.texF = 1 / texLib.row;
  var d = 0,
    c = 0,
    e = texLib.texF,
    f = 0;
  for (block.lightSource = new Uint8Array(block.length), block.lightTransmission = new Float32Array(block.length), b = 0; b < block.length; b++) {
    void 0 === block[b] && (block[b] = {}, block[b].type = 0), void 0 === block[b][0] && (block[b][0] = {}, block[b][0].type = 0), block.lightSource[b] = block[b].lightSource || 0, block.lightTransmission[b] = 1 === block[b].type ? block[b].lightTransmission || 0 : block[b].lightTransmission || 1;
    for (var l in block[b])
      if ('mask' === l) block[b][l] = parseInt(block[b][l], 16);
      else if (void 0 !== block[b][l].shapeName) {
      block[b][l].shape = {}, void 0 === block[b][l].normal && (block[b][l].normal = 1);
      for (var k in shapeLib[block[b][l].shapeName]) {
        block[b][l].shape[k] = [], void 0 !== block[b][l][k] ? (f = texLib.texture[block[b][l][k]], d = f % texLib.row, c = (f - d) / texLib.row) : void 0 !== block[b][l].defaultTexture && (f = texLib.texture[block[b][l].defaultTexture], d = f % texLib.row, c = (f - d) / texLib.row), block[b][l].shape[k] = new Float32Array(shapeLib[block[b][l].shapeName][k].length);
        var p, q, v, s, r;
        s = void 0 === block[b][l].roty ? 0 : block[b][l].roty, r = void 0 === block[b][l].rotx ? 0 : block[b][l].rotx;
        for (var a = 0; a < shapeLib[block[b][l].shapeName][k].length; a += 5) 0 !== s || 0 !== r ? (p = Math.cos(r) * (shapeLib[block[b][l].shapeName][k][a] - 0.5) - Math.sin(r) * (shapeLib[block[b][l].shapeName][k][a + 1] - 0.5) + 0.5, q = Math.sin(r) * (shapeLib[block[b][l].shapeName][k][a] - 0.5) + Math.cos(r) * (shapeLib[block[b][l].shapeName][k][a + 1] - 0.5) + 0.5, v = shapeLib[block[b][l].shapeName][k][a + 2], f = Math.cos(s) * (p - 0.5) - Math.sin(s) * (v - 0.5) + 0.5, p = Math.sin(s) * (p - 0.5) + Math.cos(s) * (v - 0.5) + 0.5, block[b][l].shape[k][a] = f, block[b][l].shape[k][a + 1] = q, block[b][l].shape[k][a + 2] = p) : (block[b][l].shape[k][a] = shapeLib[block[b][l].shapeName][k][a], block[b][l].shape[k][a + 1] = shapeLib[block[b][l].shapeName][k][a + 1], block[b][l].shape[k][a + 2] = shapeLib[block[b][l].shapeName][k][a + 2]), block[b][l].shape[k][a + 3] = e * (shapeLib[block[b][l].shapeName][k][a + 3] + d), block[b][l].shape[k][a + 4] = e * (shapeLib[block[b][l].shapeName][k][a + 4] + c);
      }
    }
  }
  useBlock.id = 1, useBlock.data = 0, console.log(block);
}

function useNextBlock(b) {
  for (b.id === block.length - 1 && (b.id = 0); 0 === block[++b.id].type;) b.id === block.length - 1 && (b.id = 0);
  b.data = -1, useNextBlockData(b);
}

function usePrevBlock(b) {
  for (1 === b.id && (b.id = block.length); 0 === block[--b.id].type;) 0 === b.id && (b.id = block.length);
  b.data = -1, useNextBlockData(b);
}

function useNextBlockData(b) {
  for (var d = 0; 16 > d; d++) {
    if (void 0 !== block[b.id][++b.data] && void 0 !== block[b.id][b.data].shapeType && !block[b.id][b.data].hidden) return;
    16 === b.data && (b.data = -1);
  }
  b.data = 0;
}

function keyDown(b) {
  if (lastTarget === glCanvas) switch (camera.keyDown(b, fps), b.keyCode) {
    case 81:
      0 === camera.upY && (camera.upY = 200);
      break;
    case 90:
      useNextBlock(useBlock);
      break;
    case 88:
      usePrevBlock(useBlock);
      break;
    case 67:
      useNextBlockData(useBlock);
      break;
    case 49:
      selectTt = 0;
      break;
    case 50:
      selectTt = 1;
      break;
    case 51:
      selectTt = 2;
      break;
    case 52:
      selectTt = 3;
      break;
    case 80:
      mcWorld.save();
      break;
    case 71:
      if (!settings.allowTools) break;
      b = document.getElementById('settings');
      'none' === b.style.display ? b.style.display = 'block' : 'block' === b.style.display && (b.style.display = 'none');
      void 0 !== window.ace && settings.edit && (null === codeEditor && (codeEditor = ace.edit('editor'), codeEditor.setTheme('ace/theme/tomorrow_night'), codeEditor.getSession().setMode('ace/mode/javascript'), codeEditor.setValue('var pos = camera.getXYZPos();\nvar block = { id: 17, data: 0};\n\nfor(var i = -2; i < 3; i++)\n    for(var j = -2; j < 3; j++){\n    if(i > -2 && i < 2 && j > -2 && j < 2) continue;\n    useNextBlockData(block);\n    mcWorld.setBlock(pos.x+i,pos.y,pos.z+j,block.id,block.data);\n}\n\nmcWorld.updateChunks();')), b = document.getElementById('tools'), 'none' === b.style.display ? b.style.display = 'block' : 'block' === b.style.display && (b.style.display = 'none'));
      document.exitPointerLock();
      camera.moveX = 0;
      camera.moveY = 0;
      break;
    case 72:
      if (!settings.allowTools) break;
      if (void 0 === window.ace) break;
      if (!settings.edit) break;
      executeJS();
      break;
    case 77:
      window.localStorage.clear();
      break;
    case 86:
      console.log(camera.name), 'CameraGod' === camera.name ? (player.setPosRot(camera.getEye(), camera.getRot()), camera = new CameraPlayer(player)) : 'CameraPlayer' === camera.name && (camera = new CameraGod(camera.getEye(), camera.getRot(), [0, 1, 0])), camera.sensitivity = 2 * settings.sensitivity;
  }
}

function keyUp(b) {
  lastTarget === glCanvas && camera.keyUp(b);
}

function mouseDown(b) {
  lastTarget = b.target, lastTarget === glCanvas && (camera.starex = b.clientX, camera.starey = b.clientY, settings.edit && (camera.autoMove && (selectE = !0), selectT = 0 === b.button ? 0 : selectTt), camera.mouseDown(fps));
}

function mouseUp(b) {
  lastTarget === glCanvas && camera.mouseUp(fps);
}

function mouseMove(b) {
  if (lastTarget === glCanvas) {
    var d = b.clientX;
    b = b.clientY, camera.mouseMove(camera.starex - d, camera.starey - b, fps), camera.starex = d, camera.starey = b;
  }
}

function pointerMove(b) {
  var d = b.movementY || b.mozMovementY || b.webkitMovementY || 0;
  camera.moveX -= b.movementX || b.mozMovementX || b.webkitMovementX || 0, camera.moveY -= d;
}

function mouseWheel(b) {
  lastTarget === glCanvas && (b = window.event || b, 0 > Math.max(-1, Math.min(1, b.wheelDelta || -b.detail)) ? useNextBlock(useBlock) : usePrevBlock(useBlock));
}

function pointerChange(b) {
  b = document.getElementById('webgl'), document.pointerLockElement === b || document.mozPointerLockElement === b || document.webkitPointerLockElement === b ? window.addEventListener('mousemove', pointerMove, !1) : (b.onclick = canvasOn, window.removeEventListener('mousemove', pointerMove, !1), camera.moveX = 0, camera.moveY = 0);
}

function windowResize() {
  var b = document.getElementById('webgl');
  b.width = window.innerWidth, b.height = window.innerHeight, gl.viewportWidth = b.width, gl.viewportHeight = b.height, camera.resetFov();
}

function canvasOn() {
  document.getElementById('tools').style.display = 'none', document.getElementById('settings').style.display = 'none';
  var b = document.getElementById('webgl');
  b.onclick = function() {}, b.requestPointerLock = b.requestPointerLock || b.mozRequestPointerLock || b.webkitRequestPointerLock, b.requestPointerLock();
}

function webGLStart() {
  glCanvas = document.getElementById('webgl'), glCanvas.width = window.innerWidth, glCanvas.height = window.innerHeight, window.onresize = windowResize, window.addEventListener('keydown', keyDown, !1), window.addEventListener('keyup', keyUp, !0), glCanvas.onclick = canvasOn, document.addEventListener('pointerlockchange', pointerChange, !1), document.addEventListener('mozpointerlockchange', pointerChange, !1), document.addEventListener('webkitpointerlockchange', pointerChange, !1), window.addEventListener('mousedown', mouseDown, !0), window.addEventListener('mouseup', mouseUp, !0), window.addEventListener('mousewheel', mouseWheel, !1), window.addEventListener('DOMMouseScroll', mouseWheel, !1), document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock, textDiv = document.getElementById('game-state'), gluu.initGL(glCanvas), gluu.initStandardShader(settings.worldShader), gluu.initLineShader(), gluu.initSelectionShader(), gl.enable(gl.CULL_FACE), gl.enable(gl.BLEND), gl.cullFace(gl.BACK), gl.clearColor(0, 0, 0, 1), gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA), gl.enable(gl.DEPTH_TEST), initTextures(), initBlocks(), player = new Player(), 'CameraGod' === settings.cameraType ? camera = new CameraGod(settings.pos, settings.rot, [0, 1, 0]) : 'Camera' === settings.cameraType ? camera = new Camera(settings.pos, settings.rot, [0, 1, 0]) : (player.setPosRot([settings.pos[0], settings.pos[1], settings.pos[2]], [settings.rot[0], settings.rot[1]]), camera = new CameraPlayer(player)), camera.sensitivity = 2 * settings.sensitivity;
  for (var b = 0; 4 > b; b++) punkty1[b] = {}, punkty1[b].d = new Float32Array(2000000), punkty1[b].o = 0;
  mcWorld = new World({
    server: settings.server,
    gameRoot: settings.gameRoot,
    worldName: settings.worldName
  }), document.getElementById('tools').style.display = 'none', document.getElementById('setDstLvl').value = settings.distanceLevel[0], document.getElementById('setDstLvl_val').innerHTML = settings.distanceLevel[0], document.getElementById('shaderName').value = settings.worldShader, document.getElementById('setSun').value = settings.sun, document.getElementById('setSun_val').innerHTML = settings.sun, document.getElementById('setBrightness').value = settings.brightness, document.getElementById('setBrightness_val').innerHTML = settings.brightness, document.getElementById('setSkyColor').color.fromRGB(settings.skyColor[0], settings.skyColor[1], settings.skyColor[2]), firstTime = new Date().getTime(), lastTime = new Date().getTime(), sleep(500).then(() => {
    tick()
  });
}

function executeJS() {
  eval(codeEditor.getValue());
}
var shadersCode = {
  fs: [],
  vs: []
};
shadersCode.fs.bloom = 'precision mediump float;varying vec2 vTextureCoord;varying float aaa;varying vec4 sLight;varying vec4 color;varying vec3 sky;uniform vec4 skyColor;uniform sampler2D uSampler;            void main(void) {    gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));    if(gl_FragColor.a < 0.3)       discard;        gl_FragColor *= color;    gl_FragColor = gl_FragColor*sLight;    vec4 FragColor2 = gl_FragColor + aaa*skyColor;    float a = 0.0;    if(FragColor2.r > skyColor.x )         FragColor2.r = max(skyColor.x, gl_FragColor.r);    if(FragColor2.g > skyColor.y )         FragColor2.g = max(skyColor.y, gl_FragColor.g);    if(FragColor2.b > skyColor.z )         FragColor2.b = max(skyColor.z, gl_FragColor.b);   gl_FragColor = FragColor2;}', shadersCode.vs.bloom = 'attribute vec3 aVertexPosition;attribute vec4 lightValue;attribute vec2 aTextureCoord;uniform float lod;uniform float sun;uniform float brightness;uniform mat4 uMVMatrix;uniform mat4 uMSMatrix;uniform mat4 uPMatrix;varying vec2 vTextureCoord;varying float aaa;varying vec4 color;varying vec4 sLight;void main(void) {     gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);     vTextureCoord = aTextureCoord;    aaa = sqrt((gl_Position.x)*(gl_Position.x) + (gl_Position.z)*(gl_Position.z))/(lod*13.5)-0.30;    if(aaa<0.0) aaa = 0.0;    if(aaa>1.0) aaa = 1.0;    float skylight = floor(lightValue.x/100.0);    float blocklight = lightValue.x - skylight*100.0;    float slight = ((skylight*sun)/15.0 + blocklight/15.0);    if(slight > 1.0) slight = 1.0;    slight = slight*(1.0 - brightness) + brightness;    slight *= lightValue.z;    sLight = vec4(slight,slight,slight,1.0);    if(lightValue.a != 0.0) {        float m5 = floor(lightValue.a/(256.0*256.0));        float m6 = floor((lightValue.a - m5*256.0*256.0)/(256.0));        float m7 = lightValue.a - m5*256.0*256.0 - m6*256.0;        color = vec4(m5/255.0, m6/255.0, m7/255.0, 1.0);    }    else color = vec4(1.0,1.0,1.0,1.0);}', shadersCode.fs.line = 'precision mediump float;varying vec4 color;            void main(void) {    gl_FragColor = color;}', shadersCode.vs.line = 'attribute vec3 aVertexPosition;attribute vec2 aTextureCoord;attribute vec4 lightValue;uniform mat4 uMVMatrix;uniform mat4 uPMatrix;varying vec4 color;void main(void) {    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);    color = vec4(1.0,1.0,1.0,1.0);    color.r = aTextureCoord.x;    color.g = lightValue.x;    color = vec4(0.0,0.0,0.0,1.0);}', shadersCode.fs.selection = 'precision mediump float;varying vec2 vTextureCoord;varying float aaa;varying float slight;varying vec4 color;uniform sampler2D uSampler;            void main(void) {    gl_FragColor = color;    gl_FragColor.a = 1.0;}', shadersCode.vs.selection = 'attribute vec3 aVertexPosition;attribute vec4 lightValue;attribute vec2 aTextureCoord;uniform mat4 uMVMatrix;uniform mat4 uMSMatrix;uniform mat4 uPMatrix;varying vec2 vTextureCoord;varying float aaa;varying vec4 color;varying float slight;void main(void) {     gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);     vTextureCoord = aTextureCoord;     color = vec4(0.0,0.0,0.0,1.0);     float yy = floor(lightValue.y/(256.0*256.0));     float zx = floor((lightValue.y - yy*256.0*256.0)/(256.0));     float cv = lightValue.y - yy*256.0*256.0 - zx*256.0;     color.r = yy/255.0;     color.g = zx/255.0;     color.b = cv/255.0;     slight = 1.0;}', shadersCode.fs.standard = 'precision mediump float;varying vec2 vTextureCoord;varying float aaa;varying vec4 sLight;varying vec4 color;varying vec3 sky;uniform vec4 skyColor;uniform sampler2D uSampler;            void main(void) {    gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));    if(gl_FragColor.a < 0.3)       discard;        gl_FragColor *= color;    gl_FragColor = gl_FragColor*sLight;    gl_FragColor = mix(gl_FragColor, skyColor, aaa);}', shadersCode.vs.standard = 'attribute vec3 aVertexPosition;attribute vec4 lightValue;attribute vec2 aTextureCoord;uniform float lod;uniform float sun;uniform float brightness;uniform mat4 uMVMatrix;uniform mat4 uMSMatrix;uniform mat4 uPMatrix;varying vec2 vTextureCoord;varying float aaa;varying vec4 color;varying vec4 sLight;void main(void) {     gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);     vTextureCoord = aTextureCoord;    aaa = sqrt((gl_Position.x)*(gl_Position.x) + (gl_Position.z)*(gl_Position.z))/(lod*13.0)-0.25;    if(aaa<0.0) aaa = 0.0;    if(aaa>1.0) aaa = 1.0;    float skylight = floor(lightValue.x/100.0);    float blocklight = lightValue.x - skylight*100.0;    float slight = ((skylight*sun)/15.0 + blocklight/15.0);    if(slight > 1.0) slight = 1.0;    slight = slight*(1.0 - brightness) + brightness;    slight *= lightValue.z;    sLight = vec4(slight,slight,slight,1.0);    if(lightValue.a != 0.0) {        float m5 = floor(lightValue.a/(256.0*256.0));        float m6 = floor((lightValue.a - m5*256.0*256.0)/(256.0));        float m7 = lightValue.a - m5*256.0*256.0 - m6*256.0;        color = vec4(m5/255.0, m6/255.0, m7/255.0, 1.0);    }    else color = vec4(1.0,1.0,1.0,1.0);}';
var threadsCode = [];
threadsCode.loadRegionThread = "self.addEventListener('message', function(e) {        var x = e.data.x;        var y = e.data.y;        var xhr = new XMLHttpRequest();        xhr.open('GET', e.data.name, false);        xhr.responseType = 'arraybuffer';        try{            xhr.send();        } catch(e) {            self.postMessage({loaded: 0, x: x, y: y});            self.close();            return;        }        var regionData =  new Uint8Array(xhr.response);        self.postMessage({loaded: 1, x: x, y: y, data: regionData.buffer}, [regionData.buffer]);        self.close();    }, false);", String.prototype.equalsIgnoreCase = function(b) {
    return this.toUpperCase() === b.toUpperCase();
  }, WebGLUtils = function(b) {
    return b = function(b, c) {
      for (var e = ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl'], f = null, l = 0; l < e.length; ++l) {
        try {
          f = b.getContext(e[l], c);
        } catch (k) {}
        if (f) break;
      }
      return f;
    }, {
      create3DContext: b,
      setupWebGL: function(d, c, e) {
        function f(b) {
          var c = d.parentNode;
          if (c) {
            var e = window.WebGLRenderingContext ? 'It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>' : 'This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to upgrade your browser.</a>';
            b && (e += '<br/><br/>Status: ' + b), c.innerHTML = '<table style="background-color: #8CE; width: 100%; height: 100%;"><tr><td align="center"><div style="display: table-cell; vertical-align: middle;"><div style="">' + e + '</div></div></td></tr></table>';
          }
        }
        return e = e || f, d.addEventListener && d.addEventListener('webglcontextcreationerror', function(b) {
          e(b.statusMessage);
        }, !1), (c = b(d, c)) || window.WebGLRenderingContext || e(''), c;
      }
    };
  }(), window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(b, d) {
      window.setTimeout(b, 1000 / 60);
    };
  }(),
  function(b, d) {
    'undefined' === typeof exports ? 'function' == typeof define && 'object' == typeof define.amd && define.amd ? (d = {}, define(function() {
        return d;
      })) : d = 'undefined' !== typeof window ? window : b : d = exports,
      function(b, e, d, l, k, p, q, v, s, r, a) {
        e || (e = 0.000001), d || (d = 'undefined' !== typeof Float32Array ? Float32Array : Array), l || (l = Math.random), k = {
          setMatrixArrayType: function(a) {
            d = a;
          }
        }, void 0 !== b && (b.glMatrix = k), p = {
          create: function() {
            var a = new d(2);
            return a[0] = 0, a[1] = 0, a;
          },
          clone: function(a) {
            var b = new d(2);
            return b[0] = a[0], b[1] = a[1], b;
          },
          fromValues: function(a, b) {
            var c = new d(2);
            return c[0] = a, c[1] = b, c;
          },
          copy: function(a, b) {
            return a[0] = b[0], a[1] = b[1], a;
          },
          set: function(a, b, c) {
            return a[0] = b, a[1] = c, a;
          },
          add: function(a, b, c) {
            return a[0] = b[0] + c[0], a[1] = b[1] + c[1], a;
          },
          subtract: function(a, b, c) {
            return a[0] = b[0] - c[0], a[1] = b[1] - c[1], a;
          }
        }, p.sub = p.subtract, p.multiply = function(a, b, c) {
          return a[0] = b[0] * c[0], a[1] = b[1] * c[1], a;
        }, p.mul = p.multiply, p.divide = function(a, b, c) {
          return a[0] = b[0] / c[0], a[1] = b[1] / c[1], a;
        }, p.div = p.divide, p.min = function(a, b, c) {
          return a[0] = Math.min(b[0], c[0]), a[1] = Math.min(b[1], c[1]), a;
        }, p.max = function(a, b, c) {
          return a[0] = Math.max(b[0], c[0]), a[1] = Math.max(b[1], c[1]), a;
        }, p.scale = function(a, b, c) {
          return a[0] = b[0] * c, a[1] = b[1] * c, a;
        }, p.scaleAndAdd = function(a, b, c, e) {
          return a[0] = b[0] + c[0] * e, a[1] = b[1] + c[1] * e, a;
        }, p.distance = function(a, b) {
          var c = b[0] - a[0],
            e = b[1] - a[1];
          return Math.sqrt(c * c + e * e);
        }, p.dist = p.distance, p.squaredDistance = function(a, b) {
          var c = b[0] - a[0],
            e = b[1] - a[1];
          return c * c + e * e;
        }, p.sqrDist = p.squaredDistance, p.length = function(a) {
          var b = a[0];
          return a = a[1], Math.sqrt(b * b + a * a);
        }, p.len = p.length, p.squaredLength = function(a) {
          var b = a[0];
          return a = a[1], b * b + a * a;
        }, p.sqrLen = p.squaredLength, p.negate = function(a, b) {
          return a[0] = -b[0], a[1] = -b[1], a;
        }, p.normalize = function(a, b) {
          var c = b[0],
            e = b[1],
            c = c * c + e * e;
          return 0 < c && (c = 1 / Math.sqrt(c), a[0] = b[0] * c, a[1] = b[1] * c), a;
        }, p.dot = function(a, b) {
          return a[0] * b[0] + a[1] * b[1];
        }, p.cross = function(a, b, c) {
          return b = b[0] * c[1] - b[1] * c[0], a[0] = a[1] = 0, a[2] = b, a;
        }, p.lerp = function(a, b, c, e) {
          var d = b[0];
          return b = b[1], a[0] = d + e * (c[0] - d), a[1] = b + e * (c[1] - b), a;
        }, p.random = function(a, b) {
          b = b || 1;
          var c = 2 * l() * Math.PI;
          return a[0] = Math.cos(c) * b, a[1] = Math.sin(c) * b, a;
        }, p.transformMat2 = function(a, b, c) {
          var e = b[0];
          return b = b[1], a[0] = c[0] * e + c[2] * b, a[1] = c[1] * e + c[3] * b, a;
        }, p.transformMat2d = function(a, b, c) {
          var e = b[0];
          return b = b[1], a[0] = c[0] * e + c[2] * b + c[4], a[1] = c[1] * e + c[3] * b + c[5], a;
        }, p.transformMat3 = function(a, b, c) {
          var e = b[0];
          return b = b[1], a[0] = c[0] * e + c[3] * b + c[6], a[1] = c[1] * e + c[4] * b + c[7], a;
        }, p.transformMat4 = function(a, b, c) {
          var e = b[0];
          return b = b[1], a[0] = c[0] * e + c[4] * b + c[12], a[1] = c[1] * e + c[5] * b + c[13], a;
        }, p.forEach = function(a) {
          return a = p.create(),
            function(b, c, e, d, f, k) {
              for (c || (c = 2), e || (e = 0), d = d ? Math.min(d * c + e, b.length) : b.length; e < d; e += c) a[0] = b[e], a[1] = b[e + 1], f(a, a, k), b[e] = a[0], b[e + 1] = a[1];
              return b;
            };
        }(), p.str = function(a) {
          return 'vec2(' + a[0] + ', ' + a[1] + ')';
        }, void 0 !== b && (b.vec2 = p), q = {
          create: function() {
            var a = new d(3);
            return a[0] = 0, a[1] = 0, a[2] = 0, a;
          },
          clone: function(a) {
            var b = new d(3);
            return b[0] = a[0], b[1] = a[1], b[2] = a[2], b;
          },
          fromValues: function(a, b, c) {
            var e = new d(3);
            return e[0] = a, e[1] = b, e[2] = c, e;
          },
          copy: function(a, b) {
            return a[0] = b[0], a[1] = b[1], a[2] = b[2], a;
          },
          set: function(a, b, c, e) {
            return a[0] = b, a[1] = c, a[2] = e, a;
          },
          add: function(a, b, c) {
            return a[0] = b[0] + c[0], a[1] = b[1] + c[1], a[2] = b[2] + c[2], a;
          },
          subtract: function(a, b, c) {
            return a[0] = b[0] - c[0], a[1] = b[1] - c[1], a[2] = b[2] - c[2], a;
          }
        }, q.sub = q.subtract, q.multiply = function(a, b, c) {
          return a[0] = b[0] * c[0], a[1] = b[1] * c[1], a[2] = b[2] * c[2], a;
        }, q.mul = q.multiply, q.divide = function(a, b, c) {
          return a[0] = b[0] / c[0], a[1] = b[1] / c[1], a[2] = b[2] / c[2], a;
        }, q.div = q.divide, q.min = function(a, b, c) {
          return a[0] = Math.min(b[0], c[0]), a[1] = Math.min(b[1], c[1]), a[2] = Math.min(b[2], c[2]), a;
        }, q.max = function(a, b, c) {
          return a[0] = Math.max(b[0], c[0]), a[1] = Math.max(b[1], c[1]), a[2] = Math.max(b[2], c[2]), a;
        }, q.scale = function(a, b, c) {
          return a[0] = b[0] * c, a[1] = b[1] * c, a[2] = b[2] * c, a;
        }, q.scaleAndAdd = function(a, b, c, e) {
          return a[0] = b[0] + c[0] * e, a[1] = b[1] + c[1] * e, a[2] = b[2] + c[2] * e, a;
        }, q.distance = function(a, b) {
          var c = b[0] - a[0],
            e = b[1] - a[1],
            d = b[2] - a[2];
          return Math.sqrt(c * c + e * e + d * d);
        }, q.dist = q.distance, q.squaredDistance = function(a, b) {
          var c = b[0] - a[0],
            e = b[1] - a[1],
            d = b[2] - a[2];
          return c * c + e * e + d * d;
        }, q.sqrDist = q.squaredDistance, q.length = function(a) {
          var b = a[0],
            c = a[1];
          return a = a[2], Math.sqrt(b * b + c * c + a * a);
        }, q.len = q.length, q.squaredLength = function(a) {
          var b = a[0],
            c = a[1];
          return a = a[2], b * b + c * c + a * a;
        }, q.sqrLen = q.squaredLength, q.negate = function(a, b) {
          return a[0] = -b[0], a[1] = -b[1], a[2] = -b[2], a;
        }, q.normalize = function(a, b) {
          var c = b[0],
            e = b[1],
            d = b[2],
            c = c * c + e * e + d * d;
          return 0 < c && (c = 1 / Math.sqrt(c), a[0] = b[0] * c, a[1] = b[1] * c, a[2] = b[2] * c), a;
        }, q.dot = function(a, b) {
          return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
        }, q.cross = function(a, b, c) {
          var e = b[0],
            d = b[1];
          b = b[2];
          var f = c[0],
            k = c[1];
          return c = c[2], a[0] = d * c - b * k, a[1] = b * f - e * c, a[2] = e * k - d * f, a;
        }, q.lerp = function(a, b, c, e) {
          var d = b[0],
            f = b[1];
          return b = b[2], a[0] = d + e * (c[0] - d), a[1] = f + e * (c[1] - f), a[2] = b + e * (c[2] - b), a;
        }, q.random = function(a, b) {
          b = b || 1;
          var c = 2 * l() * Math.PI,
            e = 2 * l() - 1,
            d = Math.sqrt(1 - e * e) * b;
          return a[0] = Math.cos(c) * d, a[1] = Math.sin(c) * d, a[2] = e * b, a;
        }, q.transformMat4 = function(a, b, c) {
          var e = b[0],
            d = b[1];
          return b = b[2], a[0] = c[0] * e + c[4] * d + c[8] * b + c[12], a[1] = c[1] * e + c[5] * d + c[9] * b + c[13], a[2] = c[2] * e + c[6] * d + c[10] * b + c[14], a;
        }, q.transformMat3 = function(a, b, c) {
          var e = b[0],
            d = b[1];
          return b = b[2], a[0] = e * c[0] + d * c[3] + b * c[6], a[1] = e * c[1] + d * c[4] + b * c[7], a[2] = e * c[2] + d * c[5] + b * c[8], a;
        }, q.transformQuat = function(a, b, c) {
          var e = b[0],
            d = b[1],
            f = b[2];
          b = c[0];
          var k = c[1],
            l = c[2];
          c = c[3];
          var n = c * e + k * f - l * d,
            p = c * d + l * e - b * f,
            q = c * f + b * d - k * e,
            e = -b * e - k * d - l * f;
          return a[0] = n * c + e * -b + p * -l - q * -k, a[1] = p * c + e * -k + q * -b - n * -l, a[2] = q * c + e * -l + n * -k - p * -b, a;
        }, q.forEach = function(a) {
          return a = q.create(),
            function(b, c, e, d, f, k) {
              for (c || (c = 3), e || (e = 0), d = d ? Math.min(d * c + e, b.length) : b.length; e < d; e += c) a[0] = b[e], a[1] = b[e + 1], a[2] = b[e + 2], f(a, a, k), b[e] = a[0], b[e + 1] = a[1], b[e + 2] = a[2];
              return b;
            };
        }(), q.str = function(a) {
          return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
        }, void 0 !== b && (b.vec3 = q), v = {
          create: function() {
            var a = new d(4);
            return a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 0, a;
          },
          clone: function(a) {
            var b = new d(4);
            return b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b;
          },
          fromValues: function(a, b, c, e) {
            var u = new d(4);
            return u[0] = a, u[1] = b, u[2] = c, u[3] = e, u;
          },
          copy: function(a, b) {
            return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a;
          },
          set: function(a, b, c, e, d) {
            return a[0] = b, a[1] = c, a[2] = e, a[3] = d, a;
          },
          add: function(a, b, c) {
            return a[0] = b[0] + c[0], a[1] = b[1] + c[1], a[2] = b[2] + c[2], a[3] = b[3] + c[3], a;
          },
          subtract: function(a, b, c) {
            return a[0] = b[0] - c[0], a[1] = b[1] - c[1], a[2] = b[2] - c[2], a[3] = b[3] - c[3], a;
          }
        }, v.sub = v.subtract, v.multiply = function(a, b, c) {
          return a[0] = b[0] * c[0], a[1] = b[1] * c[1], a[2] = b[2] * c[2], a[3] = b[3] * c[3], a;
        }, v.mul = v.multiply, v.divide = function(a, b, c) {
          return a[0] = b[0] / c[0], a[1] = b[1] / c[1], a[2] = b[2] / c[2], a[3] = b[3] / c[3], a;
        }, v.div = v.divide, v.min = function(a, b, c) {
          return a[0] = Math.min(b[0], c[0]), a[1] = Math.min(b[1], c[1]), a[2] = Math.min(b[2], c[2]), a[3] = Math.min(b[3], c[3]), a;
        }, v.max = function(a, b, c) {
          return a[0] = Math.max(b[0], c[0]), a[1] = Math.max(b[1], c[1]), a[2] = Math.max(b[2], c[2]), a[3] = Math.max(b[3], c[3]), a;
        }, v.scale = function(a, b, c) {
          return a[0] = b[0] * c, a[1] = b[1] * c, a[2] = b[2] * c, a[3] = b[3] * c, a;
        }, v.scaleAndAdd = function(a, b, c, e) {
          return a[0] = b[0] + c[0] * e, a[1] = b[1] + c[1] * e, a[2] = b[2] + c[2] * e, a[3] = b[3] + c[3] * e, a;
        }, v.distance = function(a, b) {
          var c = b[0] - a[0],
            e = b[1] - a[1],
            d = b[2] - a[2],
            f = b[3] - a[3];
          return Math.sqrt(c * c + e * e + d * d + f * f);
        }, v.dist = v.distance, v.squaredDistance = function(a, b) {
          var c = b[0] - a[0],
            e = b[1] - a[1],
            d = b[2] - a[2],
            f = b[3] - a[3];
          return c * c + e * e + d * d + f * f;
        }, v.sqrDist = v.squaredDistance, v.length = function(a) {
          var b = a[0],
            c = a[1],
            e = a[2];
          return a = a[3], Math.sqrt(b * b + c * c + e * e + a * a);
        }, v.len = v.length, v.squaredLength = function(a) {
          var b = a[0],
            c = a[1],
            e = a[2];
          return a = a[3], b * b + c * c + e * e + a * a;
        }, v.sqrLen = v.squaredLength, v.negate = function(a, b) {
          return a[0] = -b[0], a[1] = -b[1], a[2] = -b[2], a[3] = -b[3], a;
        }, v.normalize = function(a, b) {
          var c = b[0],
            e = b[1],
            d = b[2],
            f = b[3],
            c = c * c + e * e + d * d + f * f;
          return 0 < c && (c = 1 / Math.sqrt(c), a[0] = b[0] * c, a[1] = b[1] * c, a[2] = b[2] * c, a[3] = b[3] * c), a;
        }, v.dot = function(a, b) {
          return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
        }, v.lerp = function(a, b, c, e) {
          var d = b[0],
            f = b[1],
            k = b[2];
          return b = b[3], a[0] = d + e * (c[0] - d), a[1] = f + e * (c[1] - f), a[2] = k + e * (c[2] - k), a[3] = b + e * (c[3] - b), a;
        }, v.random = function(a, b) {
          return b = b || 1, a[0] = l(), a[1] = l(), a[2] = l(), a[3] = l(), v.normalize(a, a), v.scale(a, a, b), a;
        }, v.transformMat4 = function(a, b, c) {
          var e = b[0],
            d = b[1],
            f = b[2];
          return b = b[3], a[0] = c[0] * e + c[4] * d + c[8] * f + c[12] * b, a[1] = c[1] * e + c[5] * d + c[9] * f + c[13] * b, a[2] = c[2] * e + c[6] * d + c[10] * f + c[14] * b, a[3] = c[3] * e + c[7] * d + c[11] * f + c[15] * b, a;
        }, v.transformQuat = function(a, b, c) {
          var e = b[0],
            d = b[1],
            f = b[2];
          b = c[0];
          var k = c[1],
            l = c[2];
          c = c[3];
          var n = c * e + k * f - l * d,
            p = c * d + l * e - b * f,
            q = c * f + b * d - k * e,
            e = -b * e - k * d - l * f;
          return a[0] = n * c + e * -b + p * -l - q * -k, a[1] = p * c + e * -k + q * -b - n * -l, a[2] = q * c + e * -l + n * -k - p * -b, a;
        }, v.forEach = function(a) {
          return a = v.create(),
            function(b, c, e, d, f, k) {
              for (c || (c = 4), e || (e = 0), d = d ? Math.min(d * c + e, b.length) : b.length; e < d; e += c) a[0] = b[e], a[1] = b[e + 1], a[2] = b[e + 2], a[3] = b[e + 3], f(a, a, k), b[e] = a[0], b[e + 1] = a[1], b[e + 2] = a[2], b[e + 3] = a[3];
              return b;
            };
        }(), v.str = function(a) {
          return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
        }, void 0 !== b && (b.vec4 = v), k = {
          create: function() {
            var a = new d(4);
            return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 1, a;
          },
          clone: function(a) {
            var b = new d(4);
            return b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b;
          },
          copy: function(a, b) {
            return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a;
          },
          identity: function(a) {
            return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 1, a;
          },
          transpose: function(a, b) {
            if (a === b) {
              var c = b[1];
              a[1] = b[2], a[2] = c;
            } else a[0] = b[0], a[1] = b[2], a[2] = b[1], a[3] = b[3];
            return a;
          },
          invert: function(a, b) {
            var c = b[0],
              e = b[1],
              d = b[2],
              f = b[3],
              k = c * f - d * e;
            return k ? (k = 1 / k, a[0] = f * k, a[1] = -e * k, a[2] = -d * k, a[3] = c * k, a) : null;
          },
          adjoint: function(a, b) {
            var c = b[0];
            return a[0] = b[3], a[1] = -b[1], a[2] = -b[2], a[3] = c, a;
          },
          determinant: function(a) {
            return a[0] * a[3] - a[2] * a[1];
          },
          multiply: function(a, b, c) {
            var e = b[0],
              d = b[1],
              f = b[2];
            b = b[3];
            var k = c[0],
              l = c[1],
              n = c[2];
            return c = c[3], a[0] = e * k + d * n, a[1] = e * l + d * c, a[2] = f * k + b * n, a[3] = f * l + b * c, a;
          }
        }, k.mul = k.multiply, k.rotate = function(a, b, c) {
          var e = b[0],
            d = b[1],
            f = b[2];
          b = b[3];
          var k = Math.sin(c);
          return c = Math.cos(c), a[0] = e * c + d * k, a[1] = e * -k + d * c, a[2] = f * c + b * k, a[3] = f * -k + b * c, a;
        }, k.scale = function(a, b, c) {
          var e = b[1],
            d = b[2],
            f = b[3],
            k = c[0];
          return c = c[1], a[0] = b[0] * k, a[1] = e * c, a[2] = d * k, a[3] = f * c, a;
        }, k.str = function(a) {
          return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
        }, void 0 !== b && (b.mat2 = k), k = {
          create: function() {
            var a = new d(6);
            return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 1, a[4] = 0, a[5] = 0, a;
          },
          clone: function(a) {
            var b = new d(6);
            return b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[4] = a[4], b[5] = a[5], b;
          },
          copy: function(a, b) {
            return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a[4] = b[4], a[5] = b[5], a;
          },
          identity: function(a) {
            return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 1, a[4] = 0, a[5] = 0, a;
          },
          invert: function(a, b) {
            var c = b[0],
              e = b[1],
              d = b[2],
              f = b[3],
              k = b[4],
              l = b[5],
              n = c * f - e * d;
            return n ? (n = 1 / n, a[0] = f * n, a[1] = -e * n, a[2] = -d * n, a[3] = c * n, a[4] = (d * l - f * k) * n, a[5] = (e * k - c * l) * n, a) : null;
          },
          determinant: function(a) {
            return a[0] * a[3] - a[1] * a[2];
          },
          multiply: function(a, b, c) {
            var e = b[0],
              d = b[1],
              f = b[2],
              k = b[3],
              l = b[4];
            b = b[5];
            var n = c[0],
              p = c[1],
              q = c[2],
              r = c[3],
              v = c[4];
            return c = c[5], a[0] = e * n + d * q, a[1] = e * p + d * r, a[2] = f * n + k * q, a[3] = f * p + k * r, a[4] = n * l + q * b + v, a[5] = p * l + r * b + c, a;
          }
        }, k.mul = k.multiply, k.rotate = function(a, b, c) {
          var e = b[0],
            d = b[1],
            f = b[2],
            k = b[3],
            l = b[4];
          b = b[5];
          var n = Math.sin(c);
          return c = Math.cos(c), a[0] = e * c + d * n, a[1] = -e * n + d * c, a[2] = f * c + k * n, a[3] = -f * n + c * k, a[4] = c * l + n * b, a[5] = c * b - n * l, a;
        }, k.scale = function(a, b, c) {
          var e = c[0];
          return c = c[1], a[0] = b[0] * e, a[1] = b[1] * c, a[2] = b[2] * e, a[3] = b[3] * c, a[4] = b[4] * e, a[5] = b[5] * c, a;
        }, k.translate = function(a, b, c) {
          return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a[4] = b[4] + c[0], a[5] = b[5] + c[1], a;
        }, k.str = function(a) {
          return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ')';
        }, void 0 !== b && (b.mat2d = k), s = {
          create: function() {
            var a = new d(9);
            return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 1, a[5] = 0, a[6] = 0, a[7] = 0, a[8] = 1, a;
          },
          fromMat4: function(a, b) {
            return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[4], a[4] = b[5], a[5] = b[6], a[6] = b[8], a[7] = b[9], a[8] = b[10], a;
          },
          clone: function(a) {
            var b = new d(9);
            return b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[4] = a[4], b[5] = a[5], b[6] = a[6], b[7] = a[7], b[8] = a[8], b;
          },
          copy: function(a, b) {
            return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a[4] = b[4], a[5] = b[5], a[6] = b[6], a[7] = b[7], a[8] = b[8], a;
          },
          identity: function(a) {
            return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 1, a[5] = 0, a[6] = 0, a[7] = 0, a[8] = 1, a;
          },
          transpose: function(a, b) {
            if (a === b) {
              var c = b[1],
                e = b[2],
                d = b[5];
              a[1] = b[3], a[2] = b[6], a[3] = c, a[5] = b[7], a[6] = e, a[7] = d;
            } else a[0] = b[0], a[1] = b[3], a[2] = b[6], a[3] = b[1], a[4] = b[4], a[5] = b[7], a[6] = b[2], a[7] = b[5], a[8] = b[8];
            return a;
          },
          invert: function(a, b) {
            var c = b[0],
              e = b[1],
              d = b[2],
              f = b[3],
              k = b[4],
              l = b[5],
              n = b[6],
              p = b[7],
              q = b[8],
              r = q * k - l * p,
              v = -q * f + l * n,
              w = p * f - k * n,
              s = c * r + e * v + d * w;
            return s ? (s = 1 / s, a[0] = r * s, a[1] = (-q * e + d * p) * s, a[2] = (l * e - d * k) * s, a[3] = v * s, a[4] = (q * c - d * n) * s, a[5] = (-l * c + d * f) * s, a[6] = w * s, a[7] = (-p * c + e * n) * s, a[8] = (k * c - e * f) * s, a) : null;
          },
          adjoint: function(a, b) {
            var c = b[0],
              e = b[1],
              d = b[2],
              f = b[3],
              k = b[4],
              l = b[5],
              n = b[6],
              p = b[7],
              q = b[8];
            return a[0] = k * q - l * p, a[1] = d * p - e * q, a[2] = e * l - d * k, a[3] = l * n - f * q, a[4] = c * q - d * n, a[5] = d * f - c * l, a[6] = f * p - k * n, a[7] = e * n - c * p, a[8] = c * k - e * f, a;
          },
          determinant: function(a) {
            var b = a[3],
              c = a[4],
              e = a[5],
              d = a[6],
              f = a[7],
              k = a[8];
            return a[0] * (k * c - e * f) + a[1] * (-k * b + e * d) + a[2] * (f * b - c * d);
          },
          multiply: function(a, b, c) {
            var e = b[0],
              d = b[1],
              f = b[2],
              k = b[3],
              l = b[4],
              n = b[5],
              p = b[6],
              q = b[7];
            b = b[8];
            var r = c[0],
              s = c[1],
              w = c[2],
              v = c[3],
              L = c[4],
              N = c[5],
              O = c[6],
              Q = c[7];
            return c = c[8], a[0] = r * e + s * k + w * p, a[1] = r * d + s * l + w * q, a[2] = r * f + s * n + w * b, a[3] = v * e + L * k + N * p, a[4] = v * d + L * l + N * q, a[5] = v * f + L * n + N * b, a[6] = O * e + Q * k + c * p, a[7] = O * d + Q * l + c * q, a[8] = O * f + Q * n + c * b, a;
          }
        }, s.mul = s.multiply, s.translate = function(a, b, c) {
          var e = b[0],
            d = b[1],
            f = b[2],
            k = b[3],
            l = b[4],
            n = b[5],
            p = b[6],
            q = b[7];
          b = b[8];
          var r = c[0];
          return c = c[1], a[0] = e, a[1] = d, a[2] = f, a[3] = k, a[4] = l, a[5] = n, a[6] = r * e + c * k + p, a[7] = r * d + c * l + q, a[8] = r * f + c * n + b, a;
        }, s.rotate = function(a, b, c) {
          var e = b[0],
            d = b[1],
            f = b[2],
            k = b[3],
            l = b[4],
            n = b[5],
            p = b[6],
            q = b[7];
          b = b[8];
          var r = Math.sin(c);
          return c = Math.cos(c), a[0] = c * e + r * k, a[1] = c * d + r * l, a[2] = c * f + r * n, a[3] = c * k - r * e, a[4] = c * l - r * d, a[5] = c * n - r * f, a[6] = p, a[7] = q, a[8] = b, a;
        }, s.scale = function(a, b, c) {
          var e = c[0];
          return c = c[1], a[0] = e * b[0], a[1] = e * b[1], a[2] = e * b[2], a[3] = c * b[3], a[4] = c * b[4], a[5] = c * b[5], a[6] = b[6], a[7] = b[7], a[8] = b[8], a;
        }, s.fromMat2d = function(a, b) {
          return a[0] = b[0], a[1] = b[1], a[2] = 0, a[3] = b[2], a[4] = b[3], a[5] = 0, a[6] = b[4], a[7] = b[5], a[8] = 1, a;
        }, s.fromQuat = function(a, b) {
          var c = b[0],
            e = b[1],
            d = b[2],
            f = b[3],
            k = c + c,
            l = e + e,
            n = d + d,
            p = c * k,
            q = c * l,
            c = c * n,
            r = e * l,
            e = e * n,
            d = d * n,
            k = f * k,
            l = f * l,
            f = f * n;
          return a[0] = 1 - (r + d), a[3] = q + f, a[6] = c - l, a[1] = q - f, a[4] = 1 - (p + d), a[7] = e + k, a[2] = c + l, a[5] = e - k, a[8] = 1 - (p + r), a;
        }, s.normalFromMat4 = function(a, b) {
          var c = b[0],
            e = b[1],
            d = b[2],
            f = b[3],
            k = b[4],
            l = b[5],
            n = b[6],
            p = b[7],
            q = b[8],
            r = b[9],
            s = b[10],
            w = b[11],
            v = b[12],
            L = b[13],
            N = b[14],
            O = b[15],
            Q = c * l - e * k,
            T = c * n - d * k,
            R = c * p - f * k,
            V = e * n - d * l,
            J = e * p - f * l,
            Z = d * p - f * n,
            G = q * L - r * v,
            H = q * N - s * v,
            q = q * O - w * v,
            W = r * N - s * L,
            r = r * O - w * L,
            s = s * O - w * N,
            w = Q * s - T * r + R * W + V * q - J * H + Z * G;
          return w ? (w = 1 / w, a[0] = (l * s - n * r + p * W) * w, a[1] = (n * q - k * s - p * H) * w, a[2] = (k * r - l * q + p * G) * w, a[3] = (d * r - e * s - f * W) * w, a[4] = (c * s - d * q + f * H) * w, a[5] = (e * q - c * r - f * G) * w, a[6] = (L * Z - N * J + O * V) * w, a[7] = (N * R - v * Z - O * T) * w, a[8] = (v * J - L * R + O * Q) * w, a) : null;
        }, s.str = function(a) {
          return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
        }, void 0 !== b && (b.mat3 = s), r = {
          create: function() {
            var a = new d(16);
            return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a;
          },
          clone: function(a) {
            var b = new d(16);
            return b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[4] = a[4], b[5] = a[5], b[6] = a[6], b[7] = a[7], b[8] = a[8], b[9] = a[9], b[10] = a[10], b[11] = a[11], b[12] = a[12], b[13] = a[13], b[14] = a[14], b[15] = a[15], b;
          },
          copy: function(a, b) {
            return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a[4] = b[4], a[5] = b[5], a[6] = b[6], a[7] = b[7], a[8] = b[8], a[9] = b[9], a[10] = b[10], a[11] = b[11], a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15], a;
          },
          identity: function(a) {
            return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a;
          },
          transpose: function(a, b) {
            if (a === b) {
              var c = b[1],
                e = b[2],
                d = b[3],
                f = b[6],
                k = b[7],
                l = b[11];
              a[1] = b[4], a[2] = b[8], a[3] = b[12], a[4] = c, a[6] = b[9], a[7] = b[13], a[8] = e, a[9] = f, a[11] = b[14], a[12] = d, a[13] = k, a[14] = l;
            } else a[0] = b[0], a[1] = b[4], a[2] = b[8], a[3] = b[12], a[4] = b[1], a[5] = b[5], a[6] = b[9], a[7] = b[13], a[8] = b[2], a[9] = b[6], a[10] = b[10], a[11] = b[14], a[12] = b[3], a[13] = b[7], a[14] = b[11], a[15] = b[15];
            return a;
          },
          invert: function(a, b) {
            var c = b[0],
              e = b[1],
              d = b[2],
              f = b[3],
              k = b[4],
              l = b[5],
              n = b[6],
              p = b[7],
              q = b[8],
              r = b[9],
              s = b[10],
              w = b[11],
              v = b[12],
              L = b[13],
              N = b[14],
              O = b[15],
              Q = c * l - e * k,
              T = c * n - d * k,
              R = c * p - f * k,
              V = e * n - d * l,
              J = e * p - f * l,
              Z = d * p - f * n,
              G = q * L - r * v,
              H = q * N - s * v,
              W = q * O - w * v,
              z = r * N - s * L,
              $ = r * O - w * L,
              aa = s * O - w * N,
              X = Q * aa - T * $ + R * z + V * W - J * H + Z * G;
            return X ? (X = 1 / X, a[0] = (l * aa - n * $ + p * z) * X, a[1] = (d * $ - e * aa - f * z) * X, a[2] = (L * Z - N * J + O * V) * X, a[3] = (s * J - r * Z - w * V) * X, a[4] = (n * W - k * aa - p * H) * X, a[5] = (c * aa - d * W + f * H) * X, a[6] = (N * R - v * Z - O * T) * X, a[7] = (q * Z - s * R + w * T) * X, a[8] = (k * $ - l * W + p * G) * X, a[9] = (e * W - c * $ - f * G) * X, a[10] = (v * J - L * R + O * Q) * X, a[11] = (r * R - q * J - w * Q) * X, a[12] = (l * H - k * z - n * G) * X, a[13] = (c * z - e * H + d * G) * X, a[14] = (L * T - v * V - N * Q) * X, a[15] = (q * V - r * T + s * Q) * X, a) : null;
          },
          adjoint: function(a, b) {
            var c = b[0],
              e = b[1],
              d = b[2],
              f = b[3],
              k = b[4],
              l = b[5],
              n = b[6],
              p = b[7],
              q = b[8],
              r = b[9],
              s = b[10],
              w = b[11],
              v = b[12],
              L = b[13],
              N = b[14],
              O = b[15];
            return a[0] = l * (s * O - w * N) - r * (n * O - p * N) + L * (n * w - p * s), a[1] = -(e * (s * O - w * N) - r * (d * O - f * N) + L * (d * w - f * s)), a[2] = e * (n * O - p * N) - l * (d * O - f * N) + L * (d * p - f * n), a[3] = -(e * (n * w - p * s) - l * (d * w - f * s) + r * (d * p - f * n)), a[4] = -(k * (s * O - w * N) - q * (n * O - p * N) + v * (n * w - p * s)), a[5] = c * (s * O - w * N) - q * (d * O - f * N) + v * (d * w - f * s), a[6] = -(c * (n * O - p * N) - k * (d * O - f * N) + v * (d * p - f * n)), a[7] = c * (n * w - p * s) - k * (d * w - f * s) + q * (d * p - f * n), a[8] = k * (r * O - w * L) - q * (l * O - p * L) + v * (l * w - p * r), a[9] = -(c * (r * O - w * L) - q * (e * O - f * L) + v * (e * w - f * r)), a[10] = c * (l * O - p * L) - k * (e * O - f * L) + v * (e * p - f * l), a[11] = -(c * (l * w - p * r) - k * (e * w - f * r) + q * (e * p - f * l)), a[12] = -(k * (r * N - s * L) - q * (l * N - n * L) + v * (l * s - n * r)), a[13] = c * (r * N - s * L) - q * (e * N - d * L) + v * (e * s - d * r), a[14] = -(c * (l * N - n * L) - k * (e * N - d * L) + v * (e * n - d * l)), a[15] = c * (l * s - n * r) - k * (e * s - d * r) + q * (e * n - d * l), a;
          },
          determinant: function(a) {
            var b = a[0],
              c = a[1],
              e = a[2],
              d = a[3],
              f = a[4],
              k = a[5],
              l = a[6],
              n = a[7],
              p = a[8],
              q = a[9],
              r = a[10],
              s = a[11],
              w = a[12],
              v = a[13],
              L = a[14];
            return a = a[15], (b * k - c * f) * (r * a - s * L) - (b * l - e * f) * (q * a - s * v) + (b * n - d * f) * (q * L - r * v) + (c * l - e * k) * (p * a - s * w) - (c * n - d * k) * (p * L - r * w) + (e * n - d * l) * (p * v - q * w);
          },
          multiply: function(a, b, c) {
            var e = b[0],
              d = b[1],
              f = b[2],
              k = b[3],
              l = b[4],
              n = b[5],
              p = b[6],
              q = b[7],
              r = b[8],
              s = b[9],
              w = b[10],
              v = b[11],
              L = b[12],
              N = b[13],
              O = b[14];
            b = b[15];
            var Q = c[0],
              T = c[1],
              R = c[2],
              V = c[3];
            return a[0] = Q * e + T * l + R * r + V * L, a[1] = Q * d + T * n + R * s + V * N, a[2] = Q * f + T * p + R * w + V * O, a[3] = Q * k + T * q + R * v + V * b, Q = c[4], T = c[5], R = c[6], V = c[7], a[4] = Q * e + T * l + R * r + V * L, a[5] = Q * d + T * n + R * s + V * N, a[6] = Q * f + T * p + R * w + V * O, a[7] = Q * k + T * q + R * v + V * b, Q = c[8], T = c[9], R = c[10], V = c[11], a[8] = Q * e + T * l + R * r + V * L, a[9] = Q * d + T * n + R * s + V * N, a[10] = Q * f + T * p + R * w + V * O, a[11] = Q * k + T * q + R * v + V * b, Q = c[12], T = c[13], R = c[14], V = c[15], a[12] = Q * e + T * l + R * r + V * L, a[13] = Q * d + T * n + R * s + V * N, a[14] = Q * f + T * p + R * w + V * O, a[15] = Q * k + T * q + R * v + V * b, a;
          }
        }, r.mul = r.multiply, r.translate = function(a, b, c) {
          var e = c[0],
            d = c[1];
          c = c[2];
          var f, k, l, n, p, q, r, s, w, v, L, N;
          return b === a ? (a[12] = b[0] * e + b[4] * d + b[8] * c + b[12], a[13] = b[1] * e + b[5] * d + b[9] * c + b[13], a[14] = b[2] * e + b[6] * d + b[10] * c + b[14], a[15] = b[3] * e + b[7] * d + b[11] * c + b[15]) : (f = b[0], k = b[1], l = b[2], n = b[3], p = b[4], q = b[5], r = b[6], s = b[7], w = b[8], v = b[9], L = b[10], N = b[11], a[0] = f, a[1] = k, a[2] = l, a[3] = n, a[4] = p, a[5] = q, a[6] = r, a[7] = s, a[8] = w, a[9] = v, a[10] = L, a[11] = N, a[12] = f * e + p * d + w * c + b[12], a[13] = k * e + q * d + v * c + b[13], a[14] = l * e + r * d + L * c + b[14], a[15] = n * e + s * d + N * c + b[15]), a;
        }, r.scale = function(a, b, c) {
          var e = c[0],
            d = c[1];
          return c = c[2], a[0] = b[0] * e, a[1] = b[1] * e, a[2] = b[2] * e, a[3] = b[3] * e, a[4] = b[4] * d, a[5] = b[5] * d, a[6] = b[6] * d, a[7] = b[7] * d, a[8] = b[8] * c, a[9] = b[9] * c, a[10] = b[10] * c, a[11] = b[11] * c, a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15], a;
        }, r.rotate = function(a, b, c, d) {
          var f = d[0],
            k = d[1];
          d = d[2];
          var l = Math.sqrt(f * f + k * k + d * d),
            p, n, q, r, s, v, w, S, L, N, O, Q, T, R, V, J, Z, G, H, W;
          return Math.abs(l) < e ? null : (l = 1 / l, f *= l, k *= l, d *= l, p = Math.sin(c), n = Math.cos(c), q = 1 - n, c = b[0], l = b[1], r = b[2], s = b[3], v = b[4], w = b[5], S = b[6], L = b[7], N = b[8], O = b[9], Q = b[10], T = b[11], R = f * f * q + n, V = k * f * q + d * p, J = d * f * q - k * p, Z = f * k * q - d * p, G = k * k * q + n, H = d * k * q + f * p, W = f * d * q + k * p, f = k * d * q - f * p, k = d * d * q + n, a[0] = c * R + v * V + N * J, a[1] = l * R + w * V + O * J, a[2] = r * R + S * V + Q * J, a[3] = s * R + L * V + T * J, a[4] = c * Z + v * G + N * H, a[5] = l * Z + w * G + O * H, a[6] = r * Z + S * G + Q * H, a[7] = s * Z + L * G + T * H, a[8] = c * W + v * f + N * k, a[9] = l * W + w * f + O * k, a[10] = r * W + S * f + Q * k, a[11] = s * W + L * f + T * k, b !== a && (a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15]), a);
        }, r.rotateX = function(a, b, c) {
          var e = Math.sin(c);
          c = Math.cos(c);
          var d = b[4],
            f = b[5],
            k = b[6],
            l = b[7],
            n = b[8],
            p = b[9],
            q = b[10],
            r = b[11];
          return b !== a && (a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15]), a[4] = d * c + n * e, a[5] = f * c + p * e, a[6] = k * c + q * e, a[7] = l * c + r * e, a[8] = n * c - d * e, a[9] = p * c - f * e, a[10] = q * c - k * e, a[11] = r * c - l * e, a;
        }, r.rotateY = function(a, b, c) {
          var e = Math.sin(c);
          c = Math.cos(c);
          var d = b[0],
            f = b[1],
            k = b[2],
            l = b[3],
            n = b[8],
            p = b[9],
            q = b[10],
            r = b[11];
          return b !== a && (a[4] = b[4], a[5] = b[5], a[6] = b[6], a[7] = b[7], a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15]), a[0] = d * c - n * e, a[1] = f * c - p * e, a[2] = k * c - q * e, a[3] = l * c - r * e, a[8] = d * e + n * c, a[9] = f * e + p * c, a[10] = k * e + q * c, a[11] = l * e + r * c, a;
        }, r.rotateZ = function(a, b, c) {
          var e = Math.sin(c);
          c = Math.cos(c);
          var d = b[0],
            f = b[1],
            k = b[2],
            l = b[3],
            n = b[4],
            p = b[5],
            q = b[6],
            r = b[7];
          return b !== a && (a[8] = b[8], a[9] = b[9], a[10] = b[10], a[11] = b[11], a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15]), a[0] = d * c + n * e, a[1] = f * c + p * e, a[2] = k * c + q * e, a[3] = l * c + r * e, a[4] = n * c - d * e, a[5] = p * c - f * e, a[6] = q * c - k * e, a[7] = r * c - l * e, a;
        }, r.fromRotationTranslation = function(a, b, c) {
          var e = b[0],
            d = b[1],
            f = b[2],
            k = b[3],
            l = e + e,
            n = d + d,
            p = f + f;
          b = e * l;
          var q = e * n,
            e = e * p,
            r = d * n,
            d = d * p,
            f = f * p,
            l = k * l,
            n = k * n,
            k = k * p;
          return a[0] = 1 - (r + f), a[1] = q + k, a[2] = e - n, a[3] = 0, a[4] = q - k, a[5] = 1 - (b + f), a[6] = d + l, a[7] = 0, a[8] = e + n, a[9] = d - l, a[10] = 1 - (b + r), a[11] = 0, a[12] = c[0], a[13] = c[1], a[14] = c[2], a[15] = 1, a;
        }, r.fromQuat = function(a, b) {
          var c = b[0],
            e = b[1],
            d = b[2],
            f = b[3],
            k = c + c,
            l = e + e,
            n = d + d,
            p = c * k,
            q = c * l,
            c = c * n,
            r = e * l,
            e = e * n,
            d = d * n,
            k = f * k,
            l = f * l,
            f = f * n;
          return a[0] = 1 - (r + d), a[1] = q + f, a[2] = c - l, a[3] = 0, a[4] = q - f, a[5] = 1 - (p + d), a[6] = e + k, a[7] = 0, a[8] = c + l, a[9] = e - k, a[10] = 1 - (p + r), a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a;
        }, r.frustum = function(a, b, c, e, d, f, k) {
          var l = 1 / (c - b),
            n = 1 / (d - e),
            p = 1 / (f - k);
          return a[0] = 2 * f * l, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 2 * f * n, a[6] = 0, a[7] = 0, a[8] = (c + b) * l, a[9] = (d + e) * n, a[10] = (k + f) * p, a[11] = -1, a[12] = 0, a[13] = 0, a[14] = k * f * 2 * p, a[15] = 0, a;
        }, r.perspective = function(a, b, c, e, d) {
          b = 1 / Math.tan(b / 2);
          var f = 1 / (e - d);
          return a[0] = b / c, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = b, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = (d + e) * f, a[11] = -1, a[12] = 0, a[13] = 0, a[14] = 2 * d * e * f, a[15] = 0, a;
        }, r.ortho = function(a, b, c, e, d, f, k) {
          var l = 1 / (b - c),
            n = 1 / (e - d),
            p = 1 / (f - k);
          return a[0] = -2 * l, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = -2 * n, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 2 * p, a[11] = 0, a[12] = (b + c) * l, a[13] = (d + e) * n, a[14] = (k + f) * p, a[15] = 1, a;
        }, r.lookAt = function(a, b, c, d) {
          var f, k, l, p, n, q, s, v, U = b[0],
            w = b[1];
          return b = b[2], l = d[0], p = d[1], k = d[2], s = c[0], d = c[1], f = c[2], Math.abs(U - s) < e && Math.abs(w - d) < e && Math.abs(b - f) < e ? r.identity(a) : (c = U - s, d = w - d, s = b - f, v = 1 / Math.sqrt(c * c + d * d + s * s), c *= v, d *= v, s *= v, f = p * s - k * d, k = k * c - l * s, l = l * d - p * c, (v = Math.sqrt(f * f + k * k + l * l)) ? (v = 1 / v, f *= v, k *= v, l *= v) : l = k = f = 0, p = d * l - s * k, n = s * f - c * l, q = c * k - d * f, (v = Math.sqrt(p * p + n * n + q * q)) ? (v = 1 / v, p *= v, n *= v, q *= v) : q = n = p = 0, a[0] = f, a[1] = p, a[2] = c, a[3] = 0, a[4] = k, a[5] = n, a[6] = d, a[7] = 0, a[8] = l, a[9] = q, a[10] = s, a[11] = 0, a[12] = -(f * U + k * w + l * b), a[13] = -(p * U + n * w + q * b), a[14] = -(c * U + d * w + s * b), a[15] = 1, a);
        }, r.str = function(a) {
          return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
        }, void 0 !== b && (b.mat4 = r), a = {
          create: function() {
            var a = new d(4);
            return a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 1, a;
          }
        }, a.rotationTo = function(b, c, e) {
          return b = q.create(), c = q.fromValues(1, 0, 0), e = q.fromValues(0, 1, 0),
            function(d, f, k) {
              var l = q.dot(f, k);
              return -0.999999 > l ? (q.cross(b, c, f), 0.000001 > q.length(b) && q.cross(b, e, f), q.normalize(b, b), a.setAxisAngle(d, b, Math.PI), d) : 0.999999 < l ? (d[0] = 0, d[1] = 0, d[2] = 0, d[3] = 1, d) : (q.cross(b, f, k), d[0] = b[0], d[1] = b[1], d[2] = b[2], d[3] = 1 + l, a.normalize(d, d));
            };
        }(), a.setAxes = function(b) {
          return b = s.create(),
            function(c, e, d, f) {
              return b[0] = d[0], b[3] = d[1], b[6] = d[2], b[1] = f[0], b[4] = f[1], b[7] = f[2], b[2] = e[0], b[5] = e[1], b[8] = e[2], a.normalize(c, a.fromMat3(c, b));
            };
        }(), a.clone = v.clone, a.fromValues = v.fromValues, a.copy = v.copy, a.set = v.set, a.identity = function(a) {
          return a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 1, a;
        }, a.setAxisAngle = function(a, b, c) {
          c *= 0.5;
          var e = Math.sin(c);
          return a[0] = e * b[0], a[1] = e * b[1], a[2] = e * b[2], a[3] = Math.cos(c), a;
        }, a.add = v.add, a.multiply = function(a, b, c) {
          var e = b[0],
            d = b[1],
            f = b[2];
          b = b[3];
          var k = c[0],
            l = c[1],
            n = c[2];
          return c = c[3], a[0] = e * c + b * k + d * n - f * l, a[1] = d * c + b * l + f * k - e * n, a[2] = f * c + b * n + e * l - d * k, a[3] = b * c - e * k - d * l - f * n, a;
        }, a.mul = a.multiply, a.scale = v.scale, a.rotateX = function(a, b, c) {
          c *= 0.5;
          var e = b[0],
            d = b[1],
            f = b[2];
          b = b[3];
          var k = Math.sin(c);
          return c = Math.cos(c), a[0] = e * c + b * k, a[1] = d * c + f * k, a[2] = f * c - d * k, a[3] = b * c - e * k, a;
        }, a.rotateY = function(a, b, c) {
          c *= 0.5;
          var e = b[0],
            d = b[1],
            f = b[2];
          b = b[3];
          var k = Math.sin(c);
          return c = Math.cos(c), a[0] = e * c - f * k, a[1] = d * c + b * k, a[2] = f * c + e * k, a[3] = b * c - d * k, a;
        }, a.rotateZ = function(a, b, c) {
          c *= 0.5;
          var e = b[0],
            d = b[1],
            f = b[2];
          b = b[3];
          var k = Math.sin(c);
          return c = Math.cos(c), a[0] = e * c + d * k, a[1] = d * c - e * k, a[2] = f * c + b * k, a[3] = b * c - f * k, a;
        }, a.calculateW = function(a, b) {
          var c = b[0],
            e = b[1],
            d = b[2];
          return a[0] = c, a[1] = e, a[2] = d, a[3] = -Math.sqrt(Math.abs(1 - c * c - e * e - d * d)), a;
        }, a.dot = v.dot, a.lerp = v.lerp, a.slerp = function(a, b, c, e) {
          var d = b[0],
            f = b[1],
            k = b[2];
          b = b[3];
          var l = c[0],
            n = c[1],
            p = c[2];
          c = c[3];
          var q, r, s;
          return r = d * l + f * n + k * p + b * c, 0 > r && (r = -r, l = -l, n = -n, p = -p, c = -c), 0.000001 < 1 - r ? (q = Math.acos(r), s = Math.sin(q), r = Math.sin((1 - e) * q) / s, e = Math.sin(e * q) / s) : r = 1 - e, a[0] = r * d + e * l, a[1] = r * f + e * n, a[2] = r * k + e * p, a[3] = r * b + e * c, a;
        }, a.invert = function(a, b) {
          var c = b[0],
            e = b[1],
            d = b[2],
            f = b[3],
            k = c * c + e * e + d * d + f * f,
            k = k ? 1 / k : 0;
          return a[0] = -c * k, a[1] = -e * k, a[2] = -d * k, a[3] = f * k, a;
        }, a.conjugate = function(a, b) {
          return a[0] = -b[0], a[1] = -b[1], a[2] = -b[2], a[3] = b[3], a;
        }, a.length = v.length, a.len = a.length, a.squaredLength = v.squaredLength, a.sqrLen = a.squaredLength, a.normalize = v.normalize, a.fromMat3 = function(a) {
          return a = 'undefined' !== typeof Int8Array ? new Int8Array([1, 2, 0]) : [1, 2, 0],
            function(b, c) {
              var e = c[0] + c[4] + c[8];
              if (0 < e) e = Math.sqrt(e + 1), b[3] = 0.5 * e, e = 0.5 / e, b[0] = (c[7] - c[5]) * e, b[1] = (c[2] - c[6]) * e, b[2] = (c[3] - c[1]) * e;
              else {
                var d = 0;
                c[4] > c[0] && (d = 1), c[8] > c[3 * d + d] && (d = 2);
                var f = a[d],
                  k = a[f],
                  e = Math.sqrt(c[3 * d + d] - c[3 * f + f] - c[3 * k + k] + 1);
                b[d] = 0.5 * e, e = 0.5 / e, b[3] = (c[3 * k + f] - c[3 * f + k]) * e, b[f] = (c[3 * f + d] + c[3 * d + f]) * e, b[k] = (c[3 * k + d] + c[3 * d + k]) * e;
              }
              return b;
            };
        }(), a.str = function(a) {
          return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
        }, void 0 !== b && (b.quat = a);
      }(d);
  }(this), Gluu.prototype.initGL = function(b) {
    try {
      gl = b.getContext('experimental-webgl', {
        antialias: !1,
        alpha: !1
      }), gl.viewportWidth = b.width, gl.viewportHeight = b.height;
    } catch (d) {}
    gl || alert('Could not initialise WebGL');
  }, Gluu.prototype.getShader = function(b, d, c) {
    var e = new XMLHttpRequest();
    if (void 0 !== window.shadersCode) {
      if (d = shadersCode[c][d], void 0 === d) return null;
    } else if (e.open('GET', 'shaders/' + d + '.' + c, !1), e.send(null), d = e.responseText, !d) return null;
    if ('fs' === c) c = b.createShader(b.FRAGMENT_SHADER);
    else if ('vs' === c) c = b.createShader(b.VERTEX_SHADER);
    else return null;
    return b.shaderSource(c, d), b.compileShader(c), b.getShaderParameter(c, b.COMPILE_STATUS) ? c : (alert(b.getShaderInfoLog(c)), null);
  }, Gluu.prototype.initLineShader = function() {
    var b = this.getShader(gl, 'line', 'fs'),
      d = this.getShader(gl, 'line', 'vs');
    this.lineShader = gl.createProgram(), gl.attachShader(this.lineShader, d), gl.attachShader(this.lineShader, b), gl.linkProgram(this.lineShader), gl.getProgramParameter(this.lineShader, gl.LINK_STATUS) || alert('Could not initialise shaders'), gl.useProgram(this.lineShader), this.lineShader.vertexPositionAttribute = gl.getAttribLocation(this.lineShader, 'aVertexPosition'), gl.enableVertexAttribArray(this.lineShader.vertexPositionAttribute), this.lineShader.textureCoordAttribute = gl.getAttribLocation(this.lineShader, 'aTextureCoord'), gl.enableVertexAttribArray(this.lineShader.textureCoordAttribute), this.lineShader.lightAttribute = gl.getAttribLocation(this.lineShader, 'lightValue'), gl.enableVertexAttribArray(this.lineShader.lightAttribute), this.lineShader.pMatrixUniform = gl.getUniformLocation(this.lineShader, 'uPMatrix'), this.lineShader.mvMatrixUniform = gl.getUniformLocation(this.lineShader, 'uMVMatrix');
  }, Gluu.prototype.initSelectionShader = function() {
    var b = this.getShader(gl, 'selection', 'fs'),
      d = this.getShader(gl, 'selection', 'vs');
    this.selectionShader = gl.createProgram(), gl.attachShader(this.selectionShader, d), gl.attachShader(this.selectionShader, b), gl.linkProgram(this.selectionShader), gl.getProgramParameter(this.selectionShader, gl.LINK_STATUS) || alert('Could not initialise shaders'), gl.useProgram(this.selectionShader), this.selectionShader.vertexPositionAttribute = gl.getAttribLocation(this.selectionShader, 'aVertexPosition'), gl.enableVertexAttribArray(this.selectionShader.vertexPositionAttribute), this.selectionShader.textureCoordAttribute = gl.getAttribLocation(this.selectionShader, 'aTextureCoord'), gl.enableVertexAttribArray(this.selectionShader.textureCoordAttribute), this.selectionShader.lightAttribute = gl.getAttribLocation(this.selectionShader, 'lightValue'), gl.enableVertexAttribArray(this.selectionShader.lightAttribute), this.selectionShader.pMatrixUniform = gl.getUniformLocation(this.selectionShader, 'uPMatrix'), this.selectionShader.mvMatrixUniform = gl.getUniformLocation(this.selectionShader, 'uMVMatrix'), this.selectionShader.msMatrixUniform = gl.getUniformLocation(this.selectionShader, 'uMSMatrix'), this.selectionShader.samplerUniform = gl.getUniformLocation(this.selectionShader, 'uSampler');
  }, Gluu.prototype.initStandardShader = function(b) {
    void 0 !== this.standardShader && gl.deleteProgram(this.standardShader);
    var d = this.getShader(gl, b, 'fs'),
      c = this.getShader(gl, b, 'vs');
    this.standardShader = gl.createProgram(), gl.attachShader(this.standardShader, c), gl.attachShader(this.standardShader, d), gl.linkProgram(this.standardShader), gl.getProgramParameter(this.standardShader, gl.LINK_STATUS) || alert('Could not initialise shaders'), settings.worldShader = b, gl.useProgram(this.standardShader), this.standardShader.vertexPositionAttribute = gl.getAttribLocation(this.standardShader, 'aVertexPosition'), gl.enableVertexAttribArray(this.standardShader.vertexPositionAttribute), this.standardShader.textureCoordAttribute = gl.getAttribLocation(this.standardShader, 'aTextureCoord'), gl.enableVertexAttribArray(this.standardShader.textureCoordAttribute), this.standardShader.lightAttribute = gl.getAttribLocation(this.standardShader, 'lightValue'), gl.enableVertexAttribArray(this.standardShader.lightAttribute), this.standardShader.lod = gl.getUniformLocation(this.standardShader, 'lod'), this.standardShader.sun = gl.getUniformLocation(this.standardShader, 'sun'), this.standardShader.brightness = gl.getUniformLocation(this.standardShader, 'brightness'), this.standardShader.skyColor = gl.getUniformLocation(this.standardShader, 'skyColor'), this.standardShader.pMatrixUniform = gl.getUniformLocation(this.standardShader, 'uPMatrix'), this.standardShader.mvMatrixUniform = gl.getUniformLocation(this.standardShader, 'uMVMatrix'), this.standardShader.msMatrixUniform = gl.getUniformLocation(this.standardShader, 'uMSMatrix'), this.standardShader.samplerUniform = gl.getUniformLocation(this.standardShader, 'uSampler');
  }, Gluu.prototype.setMatrixUniforms = function() {
    gl.uniformMatrix4fv(this.standardShader.pMatrixUniform, !1, this.pMatrix), gl.uniformMatrix4fv(this.standardShader.mvMatrixUniform, !1, this.mvMatrix), gl.uniformMatrix4fv(this.standardShader.msMatrixUniform, !1, this.objStrMatrix);
  }, Gluu.prototype.mvPushMatrix = function() {
    var b = mat4.clone(this.mvMatrix);
    this.mvMatrixStack.push(b);
  }, Gluu.prototype.mvPopMatrix = function() {
    if (0 == this.mvMatrixStack.length) throw 'Invalid popMatrix!';
    this.mvMatrix = this.mvMatrixStack.pop();
  }, Gluu.prototype.degToRad = function(b) {
    return b * Math.PI / 180;
  },
  function() {
    function b(a) {
      throw a;
    }

    function d(a, b) {
      var c = a.split('.'),
        e = M;
      c[0] in e || !e.execScript || e.execScript('var ' + c[0]);
      for (var d; c.length && (d = c.shift());) c.length || b === x ? e = e[d] ? e[d] : e[d] = {} : e[d] = b;
    }

    function c(a, c) {
      this.index = 'number' === typeof c ? c : 0, this.i = 0, this.buffer = a instanceof(K ? Uint8Array : Array) ? a : new(K ? Uint8Array : Array)(32768), 2 * this.buffer.length <= this.index && b(Error('invalid index')), this.buffer.length <= this.index && this.f();
    }

    function e(a) {
      this.buffer = new(K ? Uint16Array : Array)(2 * a), this.length = 0;
    }

    function f(a) {
      var b = a.length,
        c = 0,
        e = Number.POSITIVE_INFINITY,
        d, f, k, l, m, p, n, q, r;
      for (q = 0; q < b; ++q) a[q] > c && (c = a[q]), a[q] < e && (e = a[q]);
      for (d = 1 << c, f = new(K ? Uint32Array : Array)(d), k = 1, l = 0, m = 2; k <= c;) {
        for (q = 0; q < b; ++q)
          if (a[q] === k) {
            for (p = 0, n = l, r = 0; r < k; ++r) p = p << 1 | n & 1, n >>= 1;
            for (r = p; r < d; r += m) f[r] = k << 16 | q;
            ++l;
          }++k, l <<= 1, m <<= 1;
      }
      return [f, c, e];
    }

    function l(a, b) {
      this.h = O, this.w = 0, this.input = K && a instanceof Array ? new Uint8Array(a) : a, this.b = 0, b && (b.lazy && (this.w = b.lazy), 'number' === typeof b.compressionType && (this.h = b.compressionType), b.outputBuffer && (this.a = K && b.outputBuffer instanceof Array ? new Uint8Array(b.outputBuffer) : b.outputBuffer), 'number' === typeof b.outputIndex && (this.b = b.outputIndex)), this.a || (this.a = new(K ? Uint8Array : Array)(32768));
    }

    function k(a, b) {
      this.length = a, this.G = b;
    }

    function p(a, c) {
      function e(a, c) {
        var d = a.G,
          f = [],
          h = 0,
          k;
        k = T[a.length], f[h++] = k & 65535, f[h++] = k >> 16 & 255, f[h++] = k >> 24;
        var l;
        switch (n) {
          case 1 === d:
            l = [0, d - 1, 0];
            break;
          case 2 === d:
            l = [1, d - 2, 0];
            break;
          case 3 === d:
            l = [2, d - 3, 0];
            break;
          case 4 === d:
            l = [3, d - 4, 0];
            break;
          case 6 >= d:
            l = [4, d - 5, 1];
            break;
          case 8 >= d:
            l = [5, d - 7, 1];
            break;
          case 12 >= d:
            l = [6, d - 9, 2];
            break;
          case 16 >= d:
            l = [7, d - 13, 2];
            break;
          case 24 >= d:
            l = [8, d - 17, 3];
            break;
          case 32 >= d:
            l = [9, d - 25, 3];
            break;
          case 48 >= d:
            l = [10, d - 33, 4];
            break;
          case 64 >= d:
            l = [11, d - 49, 4];
            break;
          case 96 >= d:
            l = [12, d - 65, 5];
            break;
          case 128 >= d:
            l = [13, d - 97, 5];
            break;
          case 192 >= d:
            l = [14, d - 129, 6];
            break;
          case 256 >= d:
            l = [15, d - 193, 6];
            break;
          case 384 >= d:
            l = [16, d - 257, 7];
            break;
          case 512 >= d:
            l = [17, d - 385, 7];
            break;
          case 768 >= d:
            l = [18, d - 513, 8];
            break;
          case 1024 >= d:
            l = [19, d - 769, 8];
            break;
          case 1536 >= d:
            l = [20, d - 1025, 9];
            break;
          case 2048 >= d:
            l = [21, d - 1537, 9];
            break;
          case 3072 >= d:
            l = [22, d - 2049, 10];
            break;
          case 4096 >= d:
            l = [23, d - 3073, 10];
            break;
          case 6144 >= d:
            l = [24, d - 4097, 11];
            break;
          case 8192 >= d:
            l = [25, d - 6145, 11];
            break;
          case 12288 >= d:
            l = [26, d - 8193, 12];
            break;
          case 16384 >= d:
            l = [27, d - 12289, 12];
            break;
          case 24576 >= d:
            l = [28, d - 16385, 13];
            break;
          case 32768 >= d:
            l = [29, d - 24577, 13];
            break;
          default:
            b('invalid distance');
        }
        for (k = l, f[h++] = k[0], f[h++] = k[1], f[h++] = k[2], d = 0, h = f.length; d < h; ++d) t[u++] = f[d];
        w[f[0]]++, y[f[3]]++, v = a.length + c - 1, s = null;
      }
      var d, f, k, l, m, p = {},
        r, s, t = K ? new Uint16Array(2 * c.length) : [],
        u = 0,
        v = 0,
        w = new(K ? Uint32Array : Array)(286),
        y = new(K ? Uint32Array : Array)(30),
        D = a.w,
        h;
      if (!K) {
        for (k = 0; 285 >= k;) w[k++] = 0;
        for (k = 0; 29 >= k;) y[k++] = 0;
      }
      for (w[256] = 1, d = 0, f = c.length; d < f; ++d) {
        for (k = m = 0, l = 3; k < l && d + k !== f; ++k) m = m << 8 | c[d + k];
        if (p[m] === x && (p[m] = []), k = p[m], !(0 < v--)) {
          for (; 0 < k.length && 32768 < d - k[0];) k.shift();
          if (d + 3 >= f) {
            for (s && e(s, -1), k = 0, l = f - d; k < l; ++k) h = c[d + k], t[u++] = h, ++w[h];
            break;
          }
          0 < k.length ? (r = q(c, d, k), s ? s.length < r.length ? (h = c[d - 1], t[u++] = h, ++w[h], e(r, 0)) : e(s, -1) : r.length < D ? s = r : e(r, 0)) : s ? e(s, -1) : (h = c[d], t[u++] = h, ++w[h]);
        }
        k.push(d);
      }
      return t[u++] = 256, w[256]++, a.L = w, a.K = y, K ? t.subarray(0, u) : t;
    }

    function q(a, b, c) {
      var e, d, f = 0,
        l, m, p, n = a.length;
      m = 0, p = c.length;
      a: for (; m < p; m++) {
        if (e = c[p - m - 1], l = 3, 3 < f) {
          for (l = f; 3 < l; l--)
            if (a[e + l - 1] !== a[b + l - 1]) continue a;
          l = f;
        }
        for (; 258 > l && b + l < n && a[e + l] === a[b + l];) ++l;
        if (l > f && (d = e, f = l), 258 === l) break;
      }
      return new k(f, b - d);
    }

    function v(a, b) {
      var c = a.length,
        d = new e(572),
        f = new(K ? Uint8Array : Array)(c),
        k, l, m;
      if (!K)
        for (l = 0; l < c; l++) f[l] = 0;
      for (l = 0; l < c; ++l) 0 < a[l] && d.push(l, a[l]);
      if (c = Array(d.length / 2), k = new(K ? Uint32Array : Array)(d.length / 2), 1 === c.length) return f[d.pop().index] = 1, f;
      for (l = 0, m = d.length / 2; l < m; ++l) c[l] = d.pop(), k[l] = c[l].value;
      for (d = s(k, k.length, b), l = 0, m = c.length; l < m; ++l) f[c[l].index] = d[l];
      return f;
    }

    function s(a, b, c) {
      function e(a) {
        var c = m[a][p[a]];
        c === b ? (e(a + 1), e(a + 1)) : --k[c], ++p[a];
      }
      var d = new(K ? Uint16Array : Array)(c),
        f = new(K ? Uint8Array : Array)(c),
        k = new(K ? Uint8Array : Array)(b),
        l = Array(c),
        m = Array(c),
        p = Array(c),
        n = (1 << c) - b,
        q = 1 << c - 1,
        r, s;
      for (d[c - 1] = b, r = 0; r < c; ++r) n < q ? f[r] = 0 : (f[r] = 1, n -= q), n <<= 1, d[c - 2 - r] = (d[c - 1 - r] / 2 | 0) + b;
      for (d[0] = f[0], l[0] = Array(d[0]), m[0] = Array(d[0]), r = 1; r < c; ++r) d[r] > 2 * d[r - 1] + f[r] && (d[r] = 2 * d[r - 1] + f[r]), l[r] = Array(d[r]), m[r] = Array(d[r]);
      for (n = 0; n < b; ++n) k[n] = c;
      for (q = 0; q < d[c - 1]; ++q) l[c - 1][q] = a[q], m[c - 1][q] = q;
      for (n = 0; n < c; ++n) p[n] = 0;
      for (1 === f[c - 1] && (--k[0], ++p[c - 1]), r = c - 2; 0 <= r; --r) {
        for (c = n = 0, s = p[r + 1], q = 0; q < d[r]; q++) c = l[r + 1][s] + l[r + 1][s + 1], c > a[n] ? (l[r][q] = c, m[r][q] = b, s += 2) : (l[r][q] = a[n], m[r][q] = n, ++n);
        p[r] = 0, 1 === f[r] && e(r);
      }
      return k;
    }

    function r(a) {
      var b = new(K ? Uint16Array : Array)(a.length),
        c = [],
        d = [],
        e = 0,
        f, k, l;
      for (f = 0, k = a.length; f < k; f++) c[a[f]] = (c[a[f]] | 0) + 1;
      for (f = 1, k = 16; f <= k; f++) d[f] = e, e += c[f] | 0, e <<= 1;
      for (f = 0, k = a.length; f < k; f++)
        for (e = d[a[f]], d[a[f]] += 1, c = b[f] = 0, l = a[f]; c < l; c++) b[f] = b[f] << 1 | e & 1, e >>>= 1;
      return b;
    }

    function a(a, c) {
      this.l = [], this.m = 32768, this.e = this.g = this.c = this.q = 0, this.input = K ? new Uint8Array(a) : a, this.s = !1, this.n = V, this.B = !1, (c || !(c = {})) && (c.index && (this.c = c.index), c.bufferSize && (this.m = c.bufferSize), c.bufferType && (this.n = c.bufferType), c.resize && (this.B = c.resize));
      switch (this.n) {
        case R:
          this.b = 32768;
          this.a = new(K ? Uint8Array : Array)(32768 + this.m + 258);
          break;
        case V:
          this.b = 0;
          this.a = new(K ? Uint8Array : Array)(this.m);
          this.f = this.J;
          this.t = this.H;
          this.o = this.I;
          break;
        default:
          b(Error('invalid inflate mode'));
      }
    }

    function y(a, c) {
      for (var e = a.g, d = a.e, f = a.input, k = a.c, l; d < c;) l = f[k++], l === x && b(Error('input buffer is broken')), e |= l << d, d += 8;
      return a.g = e >>> c, a.e = d - c, a.c = k, e & (1 << c) - 1;
    }

    function I(a, b) {
      for (var c = a.g, e = a.e, d = a.input, f = a.c, k = b[0], l = b[1], m; e < l;) {
        if (m = d[f++], m === x) break;
        c |= m << e, e += 8;
      }
      return d = k[c & (1 << l) - 1], k = d >>> 16, a.g = c >> k, a.e = e - k, a.c = f, d & 65535;
    }

    function E(a) {
      function b(a, c, e) {
        var d, f, k, l;
        for (l = 0; l < a;) switch (d = I(this, c), d) {
          case 16:
            for (k = 3 + y(this, 2); k--;) e[l++] = f;
            break;
          case 17:
            for (k = 3 + y(this, 3); k--;) e[l++] = 0;
            f = 0;
            break;
          case 18:
            for (k = 11 + y(this, 7); k--;) e[l++] = 0;
            f = 0;
            break;
          default:
            f = e[l++] = d;
        }
        return e;
      }
      var c = y(a, 5) + 257,
        e = y(a, 5) + 1,
        d = y(a, 4) + 4,
        k = new(K ? Uint8Array : Array)(J.length),
        l;
      for (l = 0; l < d; ++l) k[J[l]] = y(a, 3);
      d = f(k), k = new(K ? Uint8Array : Array)(c), l = new(K ? Uint8Array : Array)(e), a.o(f(b.call(a, c, d, k)), f(b.call(a, e, d, l)));
    }

    function t(a) {
      if ('string' === typeof a) {
        a = a.split('');
        var b, c;
        for (b = 0, c = a.length; b < c; b++) a[b] = (a[b].charCodeAt(0) & 255) >>> 0;
      }
      b = 1, c = 0;
      for (var e = a.length, d, f = 0; 0 < e;) {
        d = 1024 < e ? 1024 : e, e -= d;
        do b += a[f++], c += b; while (--d);
        b %= 65521, c %= 65521;
      }
      return (c << 16 | b) >>> 0;
    }

    function u(c, e) {
      var d, f;
      this.input = c, this.c = 0, (e || !(e = {})) && (e.index && (this.c = e.index), e.verify && (this.M = e.verify)), d = c[this.c++], f = c[this.c++];
      switch (d & 15) {
        case X:
          this.method = X;
          break;
        default:
          b(Error('unsupported compression method'));
      }
      0 !== ((d << 8) + f) % 31 && b(Error('invalid fcheck flag:' + ((d << 8) + f) % 31)), f & 32 && b(Error('fdict flag is not supported')), this.A = new a(c, {
        index: this.c,
        bufferSize: e.bufferSize,
        bufferType: e.bufferType,
        resize: e.resize
      });
    }

    function A(a, b) {
      this.input = a, this.a = new(K ? Uint8Array : Array)(32768), this.h = m.k;
      var c = {},
        e;
      !b && (b = {}) || 'number' !== typeof b.compressionType || (this.h = b.compressionType);
      for (e in b) c[e] = b[e];
      c.outputBuffer = this.a, this.z = new l(this.input, c);
    }

    function D(a, b) {
      var c, e, f, k;
      if (Object.keys) c = Object.keys(b);
      else
        for (e in c = [], f = 0, b) c[f++] = e;
      for (f = 0, k = c.length; f < k; ++f) e = c[f], d(a + '.' + e, b[e]);
    }
    var x = void 0,
      n = !0,
      M = this,
      K = 'undefined' !== typeof Uint8Array && 'undefined' !== typeof Uint16Array && 'undefined' !== typeof Uint32Array;
    c.prototype.f = function() {
      var a = this.buffer,
        b, c = a.length,
        e = new(K ? Uint8Array : Array)(c << 1);
      if (K) e.set(a);
      else
        for (b = 0; b < c; ++b) e[b] = a[b];
      return this.buffer = e;
    }, c.prototype.d = function(a, b, c) {
      var e = this.buffer,
        d = this.index,
        f = this.i,
        k = e[d];
      if (c && 1 < b && (a = 8 < b ? (N[a & 255] << 24 | N[a >>> 8 & 255] << 16 | N[a >>> 16 & 255] << 8 | N[a >>> 24 & 255]) >> 32 - b : N[a] >> 8 - b), 8 > b + f) k = k << b | a, f += b;
      else
        for (c = 0; c < b; ++c) k = k << 1 | a >> b - c - 1 & 1, 8 === ++f && (f = 0, e[d++] = N[k], k = 0, d === e.length && (e = this.f()));
      e[d] = k, this.buffer = e, this.i = f, this.index = d;
    }, c.prototype.finish = function() {
      var a = this.buffer,
        b = this.index,
        c;
      return 0 < this.i && (a[b] <<= 8 - this.i, a[b] = N[a[b]], b++), K ? c = a.subarray(0, b) : (a.length = b, c = a), c;
    };
    var Y = new(K ? Uint8Array : Array)(256),
      U;
    for (U = 0; 256 > U; ++U) {
      for (var w = U, S = w, L = 7, w = w >>> 1; w; w >>>= 1) S <<= 1, S |= w & 1, --L;
      Y[U] = (S << L & 255) >>> 0;
    }
    var N = Y;
    e.prototype.getParent = function(a) {
      return 2 * ((a - 2) / 4 | 0);
    }, e.prototype.push = function(a, b) {
      var c, e, d = this.buffer,
        f;
      for (c = this.length, d[this.length++] = b, d[this.length++] = a; 0 < c;)
        if (e = this.getParent(c), d[c] > d[e]) f = d[c], d[c] = d[e], d[e] = f, f = d[c + 1], d[c + 1] = d[e + 1], d[e + 1] = f, c = e;
        else break;
      return this.length;
    }, e.prototype.pop = function() {
      var a, b, c = this.buffer,
        e, d, f;
      for (b = c[0], a = c[1], this.length -= 2, c[0] = c[this.length], c[1] = c[this.length + 1], f = 0;;) {
        if (d = 2 * f + 2, d >= this.length) break;
        if (d + 2 < this.length && c[d + 2] > c[d] && (d += 2), c[d] > c[f]) e = c[f], c[f] = c[d], c[d] = e, e = c[f + 1], c[f + 1] = c[d + 1], c[d + 1] = e;
        else break;
        f = d;
      }
      return {
        index: a,
        value: b,
        length: this.length
      };
    };
    var O = 2,
      Y = {
        NONE: 0,
        r: 1,
        k: O,
        N: 3
      },
      Q = [];
    for (U = 0; 288 > U; U++) switch (n) {
      case 143 >= U:
        Q.push([U + 48, 8]);
        break;
      case 255 >= U:
        Q.push([U - 144 + 400, 9]);
        break;
      case 279 >= U:
        Q.push([U - 256 + 0, 7]);
        break;
      case 287 >= U:
        Q.push([U - 280 + 192, 8]);
        break;
      default:
        b('invalid literal: ' + U);
    }
    l.prototype.j = function() {
      var a, e, d, f, k = this.input;
      switch (this.h) {
        case 0:
          d = 0;
          for (f = k.length; d < f;) {
            e = K ? k.subarray(d, d + 65535) : k.slice(d, d + 65535), d += e.length;
            var l = d === f,
              m = x,
              q = m = x,
              q = m = x,
              s = this.a,
              t = this.b;
            if (K) {
              for (s = new Uint8Array(this.a.buffer); s.length <= t + e.length + 5;) s = new Uint8Array(s.length << 1);
              s.set(this.a);
            }
            if (m = l ? 1 : 0, s[t++] = m | 0, m = e.length, q = ~m + 65536 & 65535, s[t++] = m & 255, s[t++] = m >>> 8 & 255, s[t++] = q & 255, s[t++] = q >>> 8 & 255, K) s.set(e, t), t += e.length, s = s.subarray(0, t);
            else {
              for (m = 0, q = e.length; m < q; ++m) s[t++] = e[m];
              s.length = t;
            }
            this.b = t, this.a = s;
          }
          break;
        case 1:
          d = new c(K ? new Uint8Array(this.a.buffer) : this.a, this.b);
          d.d(1, 1, n);
          d.d(1, 2, n);
          k = p(this, k);
          e = 0;
          for (l = k.length; e < l; e++)
            if (f = k[e], c.prototype.d.apply(d, Q[f]), 256 < f) d.d(k[++e], k[++e], n), d.d(k[++e], 5), d.d(k[++e], k[++e], n);
            else if (256 === f) break;
          this.a = d.finish();
          this.b = this.a.length;
          break;
        case O:
          f = new c(K ? new Uint8Array(this.a.buffer) : this.a, this.b);
          var u, w, y, D = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
            E, A, m = Array(19),
            z, s = O;
          f.d(1, 1, n);
          f.d(s, 2, n);
          k = p(this, k);
          q = v(this.L, 15);
          E = r(q);
          s = v(this.K, 7);
          t = r(s);
          for (u = 286; 257 < u && 0 === q[u - 1]; u--);
          for (w = 30; 1 < w && 0 === s[w - 1]; w--);
          var h = u,
            H = w;
          a = new(K ? Uint32Array : Array)(h + H);
          var G = new(K ? Uint32Array : Array)(316),
            I, J;
          A = new(K ? Uint8Array : Array)(19);
          for (z = y = 0; z < h; z++) a[y++] = q[z];
          for (z = 0; z < H; z++) a[y++] = s[z];
          if (!K)
            for (z = 0, H = A.length; z < H; ++z) A[z] = 0;
          z = I = 0;
          for (H = a.length; z < H; z += y) {
            for (y = 1; z + y < H && a[z + y] === a[z]; ++y);
            if (h = y, 0 === a[z])
              if (3 > h)
                for (; 0 < h--;) G[I++] = 0, A[0]++;
              else
                for (; 0 < h;) J = 138 > h ? h : 138, J > h - 3 && J < h && (J = h - 3), 10 >= J ? (G[I++] = 17, G[I++] = J - 3, A[17]++) : (G[I++] = 18, G[I++] = J - 11, A[18]++), h -= J;
            else if (G[I++] = a[z], A[a[z]]++, h--, 3 > h)
              for (; 0 < h--;) G[I++] = a[z], A[a[z]]++;
            else
              for (; 0 < h;) J = 6 > h ? h : 6, J > h - 3 && J < h && (J = h - 3), G[I++] = 16, G[I++] = J - 3, A[16]++, h -= J;
          }
          a = K ? G.subarray(0, I) : G.slice(0, I);
          A = v(A, 7);
          for (z = 0; 19 > z; z++) m[z] = A[D[z]];
          for (y = 19; 4 < y && 0 === m[y - 1]; y--);
          D = r(A);
          f.d(u - 257, 5, n);
          f.d(w - 1, 5, n);
          f.d(y - 4, 4, n);
          for (z = 0; z < y; z++) f.d(m[z], 3, n);
          z = 0;
          for (m = a.length; z < m; z++)
            if (e = a[z], f.d(D[e], A[e], n), 16 <= e) {
              z++;
              switch (e) {
                case 16:
                  l = 2;
                  break;
                case 17:
                  l = 3;
                  break;
                case 18:
                  l = 7;
                  break;
                default:
                  b('invalid code: ' + e);
              }
              f.d(a[z], l, n);
            }
          l = [E, q];
          t = [t, s];
          e = l[0];
          l = l[1];
          s = t[0];
          E = t[1];
          t = 0;
          for (m = k.length; t < m; ++t)
            if (d = k[t], f.d(e[d], l[d], n), 256 < d) f.d(k[++t], k[++t], n), q = k[++t], f.d(s[q], E[q], n), f.d(k[++t], k[++t], n);
            else if (256 === d) break;
          this.a = f.finish();
          this.b = this.a.length;
          break;
        default:
          b('invalid compression type');
      }
      return this.a;
    }, U = function(c, e, d) {
      function a(c) {
        switch (n) {
          case 3 === c:
            return [257, c - 3, 0];
          case 4 === c:
            return [258, c - 4, 0];
          case 5 === c:
            return [259, c - 5, 0];
          case 6 === c:
            return [260, c - 6, 0];
          case 7 === c:
            return [261, c - 7, 0];
          case 8 === c:
            return [262, c - 8, 0];
          case 9 === c:
            return [263, c - 9, 0];
          case 10 === c:
            return [264, c - 10, 0];
          case 12 >= c:
            return [265, c - 11, 1];
          case 14 >= c:
            return [266, c - 13, 1];
          case 16 >= c:
            return [267, c - 15, 1];
          case 18 >= c:
            return [268, c - 17, 1];
          case 22 >= c:
            return [269, c - 19, 2];
          case 26 >= c:
            return [270, c - 23, 2];
          case 30 >= c:
            return [271, c - 27, 2];
          case 34 >= c:
            return [272, c - 31, 2];
          case 42 >= c:
            return [273, c - 35, 3];
          case 50 >= c:
            return [274, c - 43, 3];
          case 58 >= c:
            return [275, c - 51, 3];
          case 66 >= c:
            return [276, c - 59, 3];
          case 82 >= c:
            return [277, c - 67, 4];
          case 98 >= c:
            return [278, c - 83, 4];
          case 114 >= c:
            return [279, c - 99, 4];
          case 130 >= c:
            return [280, c - 115, 4];
          case 162 >= c:
            return [281, c - 131, 5];
          case 194 >= c:
            return [282, c - 163, 5];
          case 226 >= c:
            return [283, c - 195, 5];
          case 257 >= c:
            return [284, c - 227, 5];
          case 258 === c:
            return [285, c - 258, 0];
          default:
            b('invalid length: ' + c);
        }
      }
      for (c = [], e = 3; 258 >= e; e++) d = a(e), c[e] = d[2] << 24 | d[1] << 16 | d[0];
      return c;
    }();
    var T = K ? new Uint32Array(U) : U,
      R = 0,
      V = 1;
    U = R, w = V, a.prototype.p = function() {
      for (; !this.s;) {
        var a = y(this, 3);
        a & 1 && (this.s = n), a >>>= 1;
        switch (a) {
          case 0:
            var a = this.input,
              c = this.c,
              e = this.a,
              d = this.b,
              f = x,
              k = x,
              l = x,
              m = e.length,
              f = x;
            this.e = this.g = 0;
            f = a[c++];
            f === x && b(Error('invalid uncompressed block header: LEN (first byte)'));
            k = f;
            f = a[c++];
            f === x && b(Error('invalid uncompressed block header: LEN (second byte)'));
            k |= f << 8;
            f = a[c++];
            f === x && b(Error('invalid uncompressed block header: NLEN (first byte)'));
            l = f;
            f = a[c++];
            f === x && b(Error('invalid uncompressed block header: NLEN (second byte)'));
            l |= f << 8;
            k === ~l && b(Error('invalid uncompressed block header: length verify'));
            c + k > a.length && b(Error('input buffer is broken'));
            switch (this.n) {
              case R:
                for (; d + k > e.length;) {
                  if (f = m - d, k -= f, K) e.set(a.subarray(c, c + f), d), d += f, c += f;
                  else
                    for (; f--;) e[d++] = a[c++];
                  this.b = d, e = this.f(), d = this.b;
                }
                break;
              case V:
                for (; d + k > e.length;) e = this.f({
                  v: 2
                });
                break;
              default:
                b(Error('invalid inflate mode'));
            }
            if (K) e.set(a.subarray(c, c + k), d), d += k, c += k;
            else
              for (; k--;) e[d++] = a[c++];
            this.c = c;
            this.b = d;
            this.a = e;
            break;
          case 1:
            this.o($, aa);
            break;
          case 2:
            E(this);
            break;
          default:
            b(Error('unknown BTYPE: ' + a));
        }
      }
      return this.t();
    };
    var S = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      J = K ? new Uint16Array(S) : S,
      S = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
      Z = K ? new Uint16Array(S) : S,
      S = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
      G = K ? new Uint8Array(S) : S,
      S = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
      H = K ? new Uint16Array(S) : S,
      S = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
      W = K ? new Uint8Array(S) : S,
      S = new(K ? Uint8Array : Array)(288),
      z, L = 0;
    for (z = S.length; L < z; ++L) S[L] = 143 >= L ? 8 : 255 >= L ? 9 : 279 >= L ? 7 : 8;
    var $ = f(S),
      S = new(K ? Uint8Array : Array)(30),
      L = 0;
    for (z = S.length; L < z; ++L) S[L] = 5;
    var aa = f(S);
    a.prototype.o = function(a, b) {
      var c = this.a,
        e = this.b;
      this.u = a;
      for (var d = c.length - 258, f, k, l; 256 !== (f = I(this, a));)
        if (256 > f) e >= d && (this.b = e, c = this.f(), e = this.b), c[e++] = f;
        else
          for (f -= 257, l = Z[f], 0 < G[f] && (l += y(this, G[f])), f = I(this, b), k = H[f], 0 < W[f] && (k += y(this, W[f])), e >= d && (this.b = e, c = this.f(), e = this.b); l--;) c[e] = c[e++ - k];
      for (; 8 <= this.e;) this.e -= 8, this.c--;
      this.b = e;
    }, a.prototype.I = function(a, b) {
      var c = this.a,
        e = this.b;
      this.u = a;
      for (var d = c.length, f, k, l; 256 !== (f = I(this, a));)
        if (256 > f) e >= d && (c = this.f(), d = c.length), c[e++] = f;
        else
          for (f -= 257, l = Z[f], 0 < G[f] && (l += y(this, G[f])), f = I(this, b), k = H[f], 0 < W[f] && (k += y(this, W[f])), e + l > d && (c = this.f(), d = c.length); l--;) c[e] = c[e++ - k];
      for (; 8 <= this.e;) this.e -= 8, this.c--;
      this.b = e;
    }, a.prototype.f = function() {
      var a = new(K ? Uint8Array : Array)(this.b - 32768),
        b = this.b - 32768,
        c, e, d = this.a;
      if (K) a.set(d.subarray(32768, a.length));
      else
        for (c = 0, e = a.length; c < e; ++c) a[c] = d[c + 32768];
      if (this.l.push(a), this.q += a.length, K) d.set(d.subarray(b, b + 32768));
      else
        for (c = 0; 32768 > c; ++c) d[c] = d[b + c];
      return this.b = 32768, d;
    }, a.prototype.J = function(a) {
      var b, c = this.input.length / this.c + 1 | 0,
        e, d, f, k = this.input,
        l = this.a;
      return a && ('number' === typeof a.v && (c = a.v), 'number' === typeof a.F && (c += a.F)), 2 > c ? (e = (k.length - this.c) / this.u[2], f = e / 2 * 258 | 0, d = f < l.length ? l.length + f : l.length << 1) : d = l.length * c, K ? (b = new Uint8Array(d), b.set(l)) : b = l, this.a = b;
    }, a.prototype.t = function() {
      var a = 0,
        b = this.a,
        c = this.l,
        e, d = new(K ? Uint8Array : Array)(this.q + (this.b - 32768)),
        f, k, l, m;
      if (0 === c.length) return K ? this.a.subarray(32768, this.b) : this.a.slice(32768, this.b);
      for (f = 0, k = c.length; f < k; ++f)
        for (e = c[f], l = 0, m = e.length; l < m; ++l) d[a++] = e[l];
      for (f = 32768, k = this.b; f < k; ++f) d[a++] = b[f];
      return this.l = [], this.buffer = d;
    }, a.prototype.H = function() {
      var a, b = this.b;
      return K ? this.B ? (a = new Uint8Array(b), a.set(this.a.subarray(0, b))) : a = this.a.subarray(0, b) : (this.a.length > b && (this.a.length = b), a = this.a), this.buffer = a;
    }, u.prototype.p = function() {
      var a = this.input,
        c, e;
      return c = this.A.p(), this.c = this.A.c, this.M && (e = (a[this.c++] << 24 | a[this.c++] << 16 | a[this.c++] << 8 | a[this.c++]) >>> 0, e !== t(c) && b(Error('invalid adler-32 checksum'))), c;
    };
    var X = 8,
      m = Y;
    A.prototype.j = function() {
      var a, c, e, d, f = 0;
      d = this.a, a = X;
      switch (a) {
        case X:
          c = Math.LOG2E * Math.log(32768) - 8;
          break;
        default:
          b(Error('invalid compression method'));
      }
      c = c << 4 | a, d[f++] = c;
      switch (a) {
        case X:
          switch (this.h) {
            case m.NONE:
              e = 0;
              break;
            case m.r:
              e = 1;
              break;
            case m.k:
              e = 2;
              break;
            default:
              b(Error('unsupported compression type'));
          }
          break;
        default:
          b(Error('invalid compression method'));
      }
      return a = e << 6 | 0, d[f++] = a | 31 - (256 * c + a) % 31, a = t(this.input), this.z.b = f, d = this.z.j(), f = d.length, K && (d = new Uint8Array(d.buffer), d.length <= f + 4 && (this.a = new Uint8Array(d.length + 4), this.a.set(d), d = this.a), d = d.subarray(0, f + 4)), d[f++] = a >> 24 & 255, d[f++] = a >> 16 & 255, d[f++] = a >> 8 & 255, d[f++] = a & 255, d;
    }, d('Zlib.Inflate', u), d('Zlib.Inflate.prototype.decompress', u.prototype.p), D('Zlib.Inflate.BufferType', {
      ADAPTIVE: w,
      BLOCK: U
    }), d('Zlib.Deflate', A), d('Zlib.Deflate.compress', function(a, b) {
      return new A(a, b).j();
    }), d('Zlib.Deflate.prototype.compress', A.prototype.j), D('Zlib.Deflate.CompressionType', {
      NONE: m.NONE,
      FIXED: m.r,
      DYNAMIC: m.k
    });
  }.call(this), Readfile = {
    readKuju: function(b, d, c) {
      var e = !1;
      void 0 === c && (e = !0);
      var f = new XMLHttpRequest();
      f.open('GET', b.toLowerCase(), e), f.responseType = 'arraybuffer', e && (f.onload = function(b) {
        b = new Uint8Array(f.response), b = 70 === b[7] ? new Zlib.Inflate(b, {
          index: 16
        }).decompress() : b.subarray(16, b.length - 16), d.load(b);
      });
      try {
        f.send();
      } catch (l) {
        return -1;
      }
      return e ? void 0 : (b = new Uint8Array(f.response), 70 === b[7] ? new Zlib.Inflate(b, {
        index: 16
      }).decompress() : new Uint8Array(b.buffer.slice(16)));
    },
    readRAW: function(b, d, c) {
      d = new XMLHttpRequest(), d.open('GET', b, !1), d.responseType = 'arraybuffer';
      try {
        d.send();
      } catch (e) {
        return -1;
      }
      return new Uint8Array(d.response);
    },
    readTxt: function(b, d, c) {
      return d = new XMLHttpRequest(), d.open('GET', b, !1), d.responseType = 'application/json', d.send(), d.response;
    }
  }, NBT = {
    nextTag: function(b) {
      var d = {};
      if (d.type = b.data[b.offset++], void 0 === d.type) return -1;
      switch (d.type) {
        case 0:
          d.name = '';
          break;
        case 1:
          d.name = NBT.getTagName(b, 0);
          d.value = b.data[b.offset++];
          break;
        case 2:
          d.name = NBT.getTagName(b, 0);
          d.value = b.data[b.offset++] << 8 | b.data[b.offset++];
          break;
        case 3:
          d.name = NBT.getTagName(b, 0);
          d.value = b.data[b.offset++] << 24 | b.data[b.offset++] << 16 | b.data[b.offset++] << 8 | b.data[b.offset++];
          break;
        case 4:
          d.name = NBT.getTagName(b, 0);
          d.value = b.data[b.offset++] << 56 | b.data[b.offset++] << 48 | b.data[b.offset++] << 40 | b.data[b.offset++] << 32 | b.data[b.offset++] << 24 | b.data[b.offset++] << 16 | b.data[b.offset++] << 8 | b.data[b.offset++];
          break;
        case 5:
          d.name = NBT.getTagName(b, 0);
          d.value = -999;
          b.offset += 4;
          break;
        case 6:
          d.name = NBT.getTagName(b, 0);
          d.value = -999;
          b.offset += 8;
          break;
        case 7:
          d.name = NBT.getTagName(b, 0);
          d.length = 16777216 * b.data[b.offset++] + 65536 * b.data[b.offset++] + 256 * b.data[b.offset++] + b.data[b.offset++];
          d.data = new Uint8Array(d.length);
          for (var c = 0; c < d.length; c++) d.data[c] = b.data[b.offset++];
          break;
        case 8:
          d.name = NBT.getTagName(b, 0);
          d.value = NBT.getTagName(b, 0);
          break;
        case 9:
          d.name = NBT.getTagName(b, 0);
          d.tagId = b.data[b.offset++];
          d.length = 16777216 * b.data[b.offset++] + 65536 * b.data[b.offset++] + 256 * b.data[b.offset++] + b.data[b.offset++];
          break;
        case 10:
          d.name = NBT.getTagName(b, 0);
          break;
        case 11:
          for (d.name = NBT.getTagName(b, 0), d.length = 16777216 * b.data[b.offset++] + 65536 * b.data[b.offset++] + 256 * b.data[b.offset++] + b.data[b.offset++], d.data = new Int32Array(d.length), c = 0; c < d.length; c++) d.data[c] = 16777216 * b.data[b.offset++] + 65536 * b.data[b.offset++] + 256 * b.data[b.offset++] + b.data[b.offset++];
      }
      return d;
    },
    getTagName: function(b) {
      for (var d = '', c = 256 * b.data[b.offset++] + b.data[b.offset++], e = 0; e < c; e++) d += String.fromCharCode(b.data[b.offset++]);
      return d;
    },
    read9: function(b, d, c) {
      var e;
      if (10 !== b.tagId) {
        d = [0, 1, 2, 4, 8, 4, 8, 0, 0, 0, 0, 0];
        for (var f = 0; f < b.length * d[b.tagId]; f++) c.offset++;
      } else
        for (f = 0; f < b.length && -1 !== (e = NBT.nextTag(c));) 0 === e.type && f++, 9 === e.type && NBT.read9(e, d, c);
    },
    read3RawTag: function(b) {
      return b.data[b.offset++] << 24 | b.data[b.offset++] << 16 | b.data[b.offset++] << 8 | b.data[b.offset++];
    },
    write0Tag: function(b) {
      b.data[b.offset++] = 0;
    },
    write1Tag: function(b, d, c) {
      b.data[b.offset++] = 1, NBT.writeTagName(b, d), b.data[b.offset++] = c & 255;
    },
    write3Tag: function(b, d, c) {
      b.data[b.offset++] = 3, NBT.writeTagName(b, d), b.data[b.offset++] = c >> 24 & 255, b.data[b.offset++] = c >> 16 & 255, b.data[b.offset++] = c >> 8 & 255, b.data[b.offset++] = c & 255;
    },
    write5Tag: function(b, d, c) {
      b.data[b.offset++] = 5, NBT.writeTagName(b, d), new DataView(b.data.buffer, b.offset, 4).setFloat32(0, c), b.offset += 4;
    },
    write7Tag: function(b, d, c) {
      for (b.data[b.offset++] = 7, NBT.writeTagName(b, d), b.data[b.offset++] = c.length >> 24 & 255, b.data[b.offset++] = c.length >> 16 & 255, b.data[b.offset++] = c.length >> 8 & 255, b.data[b.offset++] = c.length & 255, d = 0; d < c.length; d++) b.data[b.offset++] = c[d];
    },
    write8Tag: function(b, d, c) {
      b.data[b.offset++] = 8, NBT.writeTagName(b, d), NBT.writeTagName(b, c);
    },
    write9Tag: function(b, d, c, e) {
      b.data[b.offset++] = 9, NBT.writeTagName(b, d), b.data[b.offset++] = c, b.data[b.offset++] = e >> 24 & 255, b.data[b.offset++] = e >> 16 & 255, b.data[b.offset++] = e >> 8 & 255, b.data[b.offset++] = e & 255;
    },
    write10Tag: function(b, d) {
      b.data[b.offset++] = 10, NBT.writeTagName(b, d);
    },
    write11Tag: function(b, d, c) {
      for (b.data[b.offset++] = 11, NBT.writeTagName(b, d), b.data[b.offset++] = c.length >> 24 & 255, b.data[b.offset++] = c.length >> 16 & 255, b.data[b.offset++] = c.length >> 8 & 255, b.data[b.offset++] = c.length & 255, d = 0; d < c.length; d++) b.data[b.offset++] = c[d] >> 24 & 255, b.data[b.offset++] = c[d] >> 16 & 255, b.data[b.offset++] = c[d] >> 8 & 255, b.data[b.offset++] = c[d] & 255;
    },
    writeTagName: function(b, d) {
      var c = d.length;
      b.data[b.offset++] = Math.floor(c / 256), b.data[b.offset++] = c - Math.floor(c / 256);
      for (var e = 0; e < c; e++) b.data[b.offset++] = d.charCodeAt(e);
      return d;
    }
  };
var Intersection3D = {};
Intersection3D.d = new Float32Array(3), Intersection3D.e1 = new Float32Array(3), Intersection3D.e2 = new Float32Array(3), Intersection3D.h = new Float32Array(3), Intersection3D.s = new Float32Array(3), Intersection3D.q = new Float32Array(3), Intersection3D.v0 = new Float32Array(3), Intersection3D.v1 = new Float32Array(3), Intersection3D.v2 = new Float32Array(3), Intersection3D.p0 = new Float32Array(3), Intersection3D.p1 = new Float32Array(3), Intersection3D.p2 = new Float32Array(3), Intersection3D.vector = function(b, d, c) {
  b[0] = d[0] - c[0], b[1] = d[1] - c[1], b[2] = d[2] - c[2];
}, Intersection3D.dot = function(b, d) {
  return b[0] * d[0] + b[1] * d[1] + b[2] * d[2];
}, Intersection3D.cross = function(b, d, c) {
  b[0] = d[1] * c[2] - d[2] * c[1], b[1] = d[2] * c[0] - d[0] * c[2], b[2] = d[0] * c[1] - d[1] * c[0];
}, Intersection3D.shapeIntersectsShape = function(b, d, c, e, f) {
  for (var l = Intersection3D.v0, k = Intersection3D.v1, p = Intersection3D.v2, q = Intersection3D.p0, v = Intersection3D.p1, s = Intersection3D.p2, r = 0, a = 0; a < b.length; a += 3 * c)
    for (var y = 0; y < d.length; y += 3 * e) l[0] = b[a], l[1] = b[a + 1], l[2] = b[a + 2], k[0] = b[a + c], k[1] = b[a + 1 + c], k[2] = b[a + 2 + c], p[0] = b[a + 2 * c], p[1] = b[a + 1 + 2 * c], p[2] = b[a + 2 + 2 * c], q[0] = d[y] + f[0], q[1] = d[y + 1] + f[1], q[2] = d[y + 2] + f[2], v[0] = d[y + e] + f[0], v[1] = d[y + 1 + e] + f[1], v[2] = d[y + 2 + e] + f[2], s[0] = d[y + 2 * e] + f[0], s[1] = d[y + 1 + 2 * e] + f[1], s[2] = d[y + 2 + 2 * e] + f[2], r += Intersection3D.segmentIntersectsTriangle(q, v, l, k, p), r += Intersection3D.segmentIntersectsTriangle(q, s, l, k, p), r += Intersection3D.segmentIntersectsTriangle(v, s, l, k, p), r += Intersection3D.segmentIntersectsTriangle(l, k, q, v, s), r += Intersection3D.segmentIntersectsTriangle(l, p, q, v, s), r += Intersection3D.segmentIntersectsTriangle(k, p, q, v, s);
  return r;
}, Intersection3D.segmentIntersectsTriangle = function(b, d, c, e, f) {
  return Intersection3D.d[0] = d[0] - b[0], Intersection3D.d[1] = d[1] - b[1], Intersection3D.d[2] = d[2] - b[2], Intersection3D.vector(Intersection3D.e1, e, c), Intersection3D.vector(Intersection3D.e2, f, c), Intersection3D.cross(Intersection3D.h, Intersection3D.d, Intersection3D.e2), d = Intersection3D.e1[0] * Intersection3D.h[0] + Intersection3D.e1[1] * Intersection3D.h[1] + Intersection3D.e1[2] * Intersection3D.h[2], -0.00001 < d && 0.00001 > d ? 0 : (d = 1 / d, Intersection3D.vector(Intersection3D.s, b, c), b = d * (Intersection3D.s[0] * Intersection3D.h[0] + Intersection3D.s[1] * Intersection3D.h[1] + Intersection3D.s[2] * Intersection3D.h[2]), 0 > b || 1 < b ? 0 : (Intersection3D.cross(Intersection3D.q, Intersection3D.s, Intersection3D.e1), c = d * (Intersection3D.d[0] * Intersection3D.q[0] + Intersection3D.d[1] * Intersection3D.q[1] + Intersection3D.d[2] * Intersection3D.q[2]), 0 > c || 1 < b + c ? 0 : (b = d * (Intersection3D.e2[0] * Intersection3D.q[0] + Intersection3D.e2[1] * Intersection3D.q[1] + Intersection3D.e2[2] * Intersection3D.q[2]), 0.00001 < b && 1 >= b ? 1 : 0)));
};
var ShapeLib = {
  shapes: [],
  getObj: function(b) {
    if (void 0 !== ShapeLib.shapes[b]) return ShapeLib.shapes[b];
    for (var d = Readfile.readTxt(b).split('\n'), c = [], e = [], f = [], l = [], k = [], p = [], q, v, s, r = 0; r < d.length; r++) q = d[r].replace('  ', ' ').split(' '), q[0].equalsIgnoreCase('v') && (c.push(q[1]), c.push(q[2]), c.push(q[3])), q[0].equalsIgnoreCase('vn') && (e.push(q[1]), e.push(q[2]), e.push(q[3])), q[0].equalsIgnoreCase('vt') && (f.push(q[1]), f.push(q[2]), f.push(q[3])), q[0].equalsIgnoreCase('f') && (v = q[1].split('/'), s = q[2].split('/'), q = q[3].split('/'), l.push(v[0]), l.push(s[0]), l.push(q[0]), p.push(v[1]), p.push(s[1]), p.push(q[1]), k.push(v[2]), k.push(s[2]), k.push(q[2]));
    for (console.log(c.length + ' ' + f.length), d = new Float32Array(9 * l.length), r = e = 0; r < l.length; r++) d[e++] = c[3 * l[r] + 0 - 3], d[e++] = c[3 * l[r] + 1 - 3], d[e++] = c[3 * l[r] + 2 - 3], d[e++] = f[3 * p[r] + 0 - 3], d[e++] = 1 - f[3 * p[r] + 1 - 3], d[e++] = 1500, d[e++] = 0, d[e++] = 1, d[e++] = 0;
    return ShapeLib.shapes[b] = d;
  }
};
Camera.prototype.setPos = function(b, d, c) {
  this.pos[0] = b, this.pos[1] = d, this.pos[2] = c;
}, Camera.prototype.getMatrix = function() {
  var b = mat4.create();
  return mat4.lookAt(b, this.getEye(), this.getTarget(), this.up), b;
}, Camera.prototype.getRot = function() {
  return [this.rot[0], this.rot[1], this.rot[2]];
}, Camera.prototype.getEye = function() {
  return [this.pos[0] + this.eyePos[0], this.pos[1] + this.eyePos[1], this.pos[2] + this.eyePos[2]];
}, Camera.prototype.getPos = function() {
  return [this.pos[0], this.pos[1], this.pos[2]];
}, Camera.prototype.getTarget = function() {
  return [this.pos[0] + this.eyePos[0] + Math.sin(this.rot[0]) * Math.cos(this.rot[1]), this.pos[1] + this.eyePos[1] + 1 * Math.sin(this.rot[1]), this.pos[2] + this.eyePos[2] + Math.cos(this.rot[0]) * Math.cos(this.rot[1])];
}, Camera.prototype.moveForward = function(b) {
  this.tPos[2] = this.pos[2] + this.przesz / b * Math.cos(this.rot[0]), this.tPos[0] = this.pos[0] + this.przesz / b * Math.sin(this.rot[0]), this.tPos[1] = this.pos[1];
}, Camera.prototype.moveBackward = function(b) {
  this.tPos[2] = this.pos[2] - this.przesz / b * Math.cos(this.rot[0]), this.tPos[0] = this.pos[0] - this.przesz / b * Math.sin(this.rot[0]), this.tPos[1] = this.pos[1];
}, Camera.prototype.moveLeft = function(b) {
  this.tPos[0] = this.pos[0] + this.przesz / b * Math.cos(this.rot[0]), this.tPos[1] = this.pos[1], this.tPos[2] = this.pos[2] - this.przesz / b * Math.sin(this.rot[0]);
}, Camera.prototype.moveRight = function(b) {
  this.tPos[0] = this.pos[0] - this.przesz / b * Math.cos(this.rot[0]), this.tPos[1] = this.pos[1], this.tPos[2] = this.pos[2] + this.przesz / b * Math.sin(this.rot[0]);
}, Camera.prototype.mouseDown = function(b) {
  this.lpm = 1;
}, Camera.prototype.mouseUp = function(b) {
  this.lpm = 0;
}, Camera.prototype.mouseMove = function(b, d, c) {
  (1 === this.lpm || this.autoMove) && (20 > c && (c = 20), this.patrzX(b / (3 * c)), this.patrzY(d / (3 * c)));
}, Camera.prototype.patrzX = function(b) {
  this.rot[0] += b;
}, Camera.prototype.patrzY = function(b) {
  this.rot[1] += b, 1.57 < this.rot[1] && (this.rot[1] = 1.57), -1.57 > this.rot[1] && (this.rot[1] = -1.57);
}, Camera.prototype.updatePosition = function(b) {
  this.oldPos[0] = this.pos[0], this.oldPos[1] = this.pos[1], this.oldPos[2] = this.pos[2], 20 > b && (b = 20), this.moveF && 1 !== this.jestcontrol && this.moveForward(b), this.moveB && 1 !== this.jestcontrol && this.moveBackward(b), this.moveR && this.moveRight(b), this.moveL && this.moveLeft(b), 0 === this.upY ? this.tPos[1] -= 10 / b : (this.tPos[1] += 8 / b, this.upY -= 1000 / b, 0 > this.upY && (this.upY = 0)), this.pos[1] = this.tPos[1], mcWorld.testCollisions() ? this.pos[1] = this.oldPos[1] : this.oldPos[1] = this.pos[1], this.pos[2] = this.tPos[2], mcWorld.testCollisions() ? this.pos[2] = this.oldPos[2] : this.oldPos[2] = this.pos[2], this.pos[0] = this.tPos[0], mcWorld.testCollisions() ? this.pos[0] = this.oldPos[0] : this.oldPos[0] = this.pos[0], this.patrzX(this.moveX / this.sensitivity), this.patrzY(this.moveY / this.sensitivity), this.moveY = this.moveX = 0, this.tPos[0] = this.pos[0], this.tPos[1] = this.pos[1], this.tPos[2] = this.pos[2];
}, Camera.prototype.previousPosition = function() {
  this.pos[0] = this.oldPos[0], this.pos[1] = this.oldPos[1], this.pos[2] = this.oldPos[2];
}, Camera.prototype.moveUp = function(b) {
  this.tPos[1] += this.przesy;
}, Camera.prototype.moveDown = function(b) {
  this.tPos[1] -= this.przesy;
}, Camera.prototype.keyUp = function(b) {
  b = b.keyCode, this.move = !1;
  switch (b) {
    case 69:
      this.przesx = this.przesz = 10;
      break;
    case 37:
    case 65:
      this.moveL = !1;
      break;
    case 38:
    case 87:
      this.moveF = !1;
      break;
    case 39:
    case 68:
      this.moveR = !1;
      break;
    case 40:
    case 83:
      this.moveB = !1;
  }
}, Camera.prototype.keyDown = function(b, d) {
  switch (b.keyCode) {
    case 37:
    case 65:
      this.moveL = !0;
      break;
    case 38:
    case 87:
      this.moveF = !0;
      break;
    case 39:
    case 68:
      this.moveR = !0;
      break;
    case 40:
    case 83:
      this.moveB = !0;
      break;
    case 69:
      this.przesx = this.przesz = 20;
  }
}, CameraGod.prototype.resetFov = function() {
  this.aspect = gl.viewportWidth / gl.viewportHeight, this.fovx = this.fovy * this.aspect;
}, CameraGod.prototype.setPos = function(b, d, c) {
  this.pos[0] = b, this.pos[1] = d, this.pos[2] = c;
}, CameraGod.prototype.getMatrix = function() {
  var b = mat4.create();
  return mat4.lookAt(b, this.getEye(), this.getTarget(), this.up), b;
}, CameraGod.prototype.getRot = function() {
  return [this.rot[0], this.rot[1], this.rot[2]];
}, CameraGod.prototype.getTarget = function() {
  return [this.pos[0] + Math.sin(this.rot[0]) * Math.cos(this.rot[1]), this.pos[1] + 1 * Math.sin(this.rot[1]), this.pos[2] + Math.cos(this.rot[0]) * Math.cos(this.rot[1])];
}, CameraGod.prototype.getEye = function() {
  return [this.pos[0], this.pos[1], this.pos[2]];
}, CameraGod.prototype.getPos = function() {
  return [this.pos[0], this.pos[1], this.pos[2]];
}, CameraGod.prototype.getXYZPos = function() {
  return {
    x: Math.floor(this.pos[0]),
    y: Math.floor(this.pos[1]),
    z: Math.floor(this.pos[2])
  };
}, CameraGod.prototype.moveForward = function(b) {
  this.pos[2] += 30 / b * this.przesz * Math.cos(this.rot[0]) * Math.cos(this.rot[1]), this.pos[0] += 30 / b * this.przesz * Math.sin(this.rot[0]) * Math.cos(this.rot[1]), this.pos[1] += 30 / b * this.przesz * Math.sin(this.rot[1]);
}, CameraGod.prototype.moveBackward = function(b) {
  this.pos[2] -= 30 / b * this.przesz * Math.cos(this.rot[0]) * Math.cos(this.rot[1]), this.pos[0] -= 30 / b * this.przesz * Math.sin(this.rot[0]) * Math.cos(this.rot[1]), this.pos[1] -= 30 / b * this.przesz * Math.sin(this.rot[1]);
}, CameraGod.prototype.moveLeft = function(b) {
  this.pos[0] += 30 / b * this.przesz * Math.cos(this.rot[0]), this.pos[2] -= 30 / b * this.przesz * Math.sin(this.rot[0]);
}, CameraGod.prototype.moveRight = function(b) {
  this.pos[0] -= 30 / b * this.przesz * Math.cos(this.rot[0]), this.pos[2] += 30 / b * this.przesz * Math.sin(this.rot[0]);
}, CameraGod.prototype.mouseDown = function(b) {
  this.lpm = 1;
}, CameraGod.prototype.mouseUp = function(b) {
  this.lpm = 0;
}, CameraGod.prototype.mouseMove = function(b, d, c) {
  (1 === this.lpm || this.autoMove) && (20 > c && (c = 20), this.patrzX(b / (3 * c)), this.patrzY(d / (3 * c)));
}, CameraGod.prototype.patrzX = function(b) {
  this.rot[0] += b;
}, CameraGod.prototype.patrzY = function(b) {
  this.rot[1] += b, 1.57 < this.rot[1] && (this.rot[1] = 1.57), -1.57 > this.rot[1] && (this.rot[1] = -1.57);
}, CameraGod.prototype.updatePosition = function(b) {
  this.moveF && (1 === this.jestcontrol ? this.moveUp(b) : this.moveForward(b)), this.moveB && (1 === this.jestcontrol ? this.moveDown(b) : this.moveBackward(b)), this.moveR && this.moveRight(b), this.moveL && this.moveLeft(b), this.patrzX(this.moveX / this.sensitivity), this.patrzY(this.moveY / this.sensitivity), this.moveY = this.moveX = 0;
}, CameraGod.prototype.previousPosition = function() {
  this.pos[0] = this.oldPos[0], this.pos[1] = this.oldPos[1], this.pos[2] = this.oldPos[2];
}, CameraGod.prototype.moveUp = function(b) {
  this.pos[1] += this.przesy;
}, CameraGod.prototype.moveDown = function(b) {
  this.pos[1] -= this.przesy;
}, CameraGod.prototype.keyUp = function(b) {
  b = b.keyCode, this.move = !1;
  switch (b) {
    case 81:
      this.jestcontrol = 0;
      break;
    case 69:
      this.przesx = this.przesz = 1;
      break;
    case 37:
    case 65:
      this.moveL = !1;
      break;
    case 38:
    case 87:
      this.moveF = !1;
      break;
    case 39:
    case 68:
      this.moveR = !1;
      break;
    case 40:
    case 83:
      this.moveB = !1;
  }
}, CameraGod.prototype.keyDown = function(b, d) {
  switch (b.keyCode) {
    case 81:
      this.jestcontrol = 1;
      break;
    case 37:
    case 65:
      this.moveL = !0;
      break;
    case 38:
    case 87:
      this.moveF = !0;
      break;
    case 39:
    case 68:
      this.moveR = !0;
      break;
    case 40:
    case 83:
      this.moveB = !0;
      break;
    case 69:
      this.przesx = this.przesz = 5;
  }
}, CameraPlayer.prototype.resetFov = function() {
  this.aspect = gl.viewportWidth / gl.viewportHeight, this.fovx = this.fovy * this.aspect;
}, CameraPlayer.prototype.setPos = function(b, d, c) {
  this.entity.setPos(b, d, c);
}, CameraPlayer.prototype.getMatrix = function() {
  var b = mat4.create();
  return mat4.lookAt(b, this.getEye(), this.getTarget(), this.entity.up), b;
}, CameraPlayer.prototype.getRot = function() {
  return [this.entity.rot[0], this.entity.rot[1], this.entity.rot[2]];
}, CameraPlayer.prototype.getEye = function() {
  return this.entity.getEye();
}, CameraPlayer.prototype.getPos = function() {
  return [this.entity.pos[0], this.entity.pos[1], this.entity.pos[2]];
}, CameraPlayer.prototype.getXYZPos = function() {
  return {
    x: Math.floor(this.entity.pos[0]),
    y: Math.floor(this.entity.pos[1]),
    z: Math.floor(this.entity.pos[2])
  };
}, CameraPlayer.prototype.getTarget = function() {
  return this.entity.getTarget();
}, CameraPlayer.prototype.moveForward = function(b) {
  this.tPos[2] = this.entity.pos[2] + this.entity.przesz / b * Math.cos(this.entity.rot[0]), this.tPos[0] = this.entity.pos[0] + this.entity.przesz / b * Math.sin(this.entity.rot[0]), this.tPos[1] = this.entity.pos[1];
}, CameraPlayer.prototype.moveBackward = function(b) {
  this.tPos[2] = this.entity.pos[2] - this.entity.przesz / b * Math.cos(this.entity.rot[0]), this.tPos[0] = this.entity.pos[0] - this.entity.przesz / b * Math.sin(this.entity.rot[0]), this.tPos[1] = this.entity.pos[1];
}, CameraPlayer.prototype.moveLeft = function(b) {
  this.tPos[0] = this.entity.pos[0] + this.entity.przesz / b * Math.cos(this.entity.rot[0]), this.tPos[1] = this.entity.pos[1], this.tPos[2] = this.entity.pos[2] - this.entity.przesz / b * Math.sin(this.entity.rot[0]);
}, CameraPlayer.prototype.moveRight = function(b) {
  this.tPos[0] = this.entity.pos[0] - this.entity.przesz / b * Math.cos(this.entity.rot[0]), this.tPos[1] = this.entity.pos[1], this.tPos[2] = this.entity.pos[2] + this.entity.przesz / b * Math.sin(this.entity.rot[0]);
}, CameraPlayer.prototype.mouseDown = function(b) {
  this.lpm = 1;
}, CameraPlayer.prototype.mouseUp = function(b) {
  this.lpm = 0;
}, CameraPlayer.prototype.mouseMove = function(b, d, c) {
  (1 === this.lpm || this.autoMove) && (20 > c && (c = 20), this.patrzX(b / (3 * c)), this.patrzY(d / (3 * c)));
}, CameraPlayer.prototype.patrzX = function(b) {
  this.entity.rot[0] += b;
}, CameraPlayer.prototype.patrzY = function(b) {
  this.entity.rot[1] += b, 1.57 < this.entity.rot[1] && (this.entity.rot[1] = 1.57), -1.57 > this.entity.rot[1] && (this.entity.rot[1] = -1.57);
}, CameraPlayer.prototype.updatePosition = function(b) {
  if (mcWorld.testCollisions()) {
    var d = mcWorld.getNearestPosition(this.entity.pos);
    !1 !== d && (this.entity.pos[0] = d[0] + 0.5, this.entity.pos[1] = d[1] + 0.05, this.entity.pos[2] = d[2] + 0.5, this.tPos[0] = this.entity.pos[0], this.tPos[1] = this.entity.pos[1], this.tPos[2] = this.entity.pos[2]);
  }
  this.oldPos[0] = this.entity.pos[0], this.oldPos[1] = this.entity.pos[1], this.oldPos[2] = this.entity.pos[2], 20 > b && (b = 20), this.moveF && 1 !== this.jestcontrol && this.moveForward(b), this.moveB && 1 !== this.jestcontrol && this.moveBackward(b), this.moveR && this.moveRight(b), this.moveL && this.moveLeft(b), 0 === this.upY ? this.tPos[1] -= 10 / b : (this.tPos[1] += 8 / b, this.upY -= 1000 / b, 0 > this.upY && (this.upY = 0)), this.entity.pos[1] = this.tPos[1], mcWorld.testCollisions() ? (this.failing = 0, this.entity.pos[1] = this.oldPos[1]) : this.failing = 1, this.entity.pos[2] = this.tPos[2], mcWorld.testCollisions() && (this.entity.pos[2] = this.oldPos[2]), this.entity.pos[0] = this.tPos[0], mcWorld.testCollisions() && (this.entity.pos[0] = this.oldPos[0]), this.nPos1[0] = this.entity.pos[0], this.nPos1[1] = this.entity.pos[1], this.nPos1[2] = this.entity.pos[2], b = Math.abs(this.nPos1[0] - this.oldPos[0]) + Math.abs(this.nPos1[2] - this.oldPos[2]), this.entity.pos[0] = this.oldPos[0], this.entity.pos[1] = this.oldPos[1], this.entity.pos[2] = this.oldPos[2], this.tPos[1] = 0 === this.failing ? this.oldPos[1] + 0.5 : this.oldPos[1] + 0, this.entity.pos[1] = this.tPos[1], mcWorld.testCollisions() && (this.entity.pos[1] = this.oldPos[1]), this.entity.pos[2] = this.tPos[2], mcWorld.testCollisions() && (this.entity.pos[2] = this.oldPos[2]), this.entity.pos[0] = this.tPos[0], mcWorld.testCollisions() && (this.entity.pos[0] = this.oldPos[0]), d = Math.abs(this.entity.pos[0] - this.oldPos[0]) + Math.abs(this.entity.pos[2] - this.oldPos[2]), b >= d && (this.entity.pos[0] = this.nPos1[0], this.entity.pos[1] = this.nPos1[1], this.entity.pos[2] = this.nPos1[2]), this.patrzX(this.moveX / this.sensitivity), this.patrzY(this.moveY / this.sensitivity), this.moveY = this.moveX = 0, this.tPos[0] = this.entity.pos[0], this.tPos[1] = this.entity.pos[1], this.tPos[2] = this.entity.pos[2];
}, CameraPlayer.prototype.moveUp = function(b) {
  this.tPos[1] += this.przesy;
}, CameraPlayer.prototype.moveDown = function(b) {
  this.tPos[1] -= this.przesy;
}, CameraPlayer.prototype.keyUp = function(b) {
  b = b.keyCode, this.move = !1;
  switch (b) {
    case 69:
      this.entity.przesx = this.entity.przesz = 8;
      break;
    case 37:
    case 65:
      this.moveL = !1;
      break;
    case 38:
    case 87:
      this.moveF = !1;
      break;
    case 39:
    case 68:
      this.moveR = !1;
      break;
    case 40:
    case 83:
      this.moveB = !1;
  }
}, CameraPlayer.prototype.keyDown = function(b, d) {
  switch (b.keyCode) {
    case 37:
    case 65:
      this.moveL = !0;
      break;
    case 38:
    case 87:
      this.moveF = !0;
      break;
    case 39:
    case 68:
      this.moveR = !0;
      break;
    case 40:
    case 83:
      this.moveB = !0;
      break;
    case 69:
      this.entity.przesx = this.entity.przesz = 16;
  }
}, RegionLib.prototype.new100msec = function() {}, RegionLib.prototype.new50msec = function() {}, RegionLib.prototype.connect = function(b, d) {
  console.log('not supported');
}, RegionLib.prototype.getChunkBlock = function(b, d, c, e, f) {
  return b = 10000 * b + d, void 0 !== this.rchunk[b] && -1 !== this.rchunk[b] && -2 !== this.rchunk[b] ? this.rchunk[b].getBlock(c, e, f) : {
    id: 0,
    data: 0
  };
}, RegionLib.prototype.getNearestPosition = function(b) {
  var d = Math.floor(b[0] / 16),
    c = Math.floor(b[2] / 16),
    e = 10000 * d + c;
  return void 0 !== this.rchunk[e] && -1 !== this.rchunk[e] && -2 !== this.rchunk[e] && (b[0] -= 16 * d, 0 > b[0] && (b[0] += 16), b[2] -= 16 * c, 0 > b[2] && (b[2] += 16), b = this.rchunk[e].getNearestPosition(b), !1 !== b) ? [16 * d + b[0], b[1], 16 * c + b[2]] : !1;
}, RegionLib.prototype.getBlock = function(b, d, c) {
  var e = Math.floor(b / 16),
    f = Math.floor(c / 16),
    l = 10000 * e + f;
  return void 0 !== this.rchunk[l] && -1 !== this.rchunk[l] && -2 !== this.rchunk[l] ? (b -= 16 * e, 0 > b && (b += 16), c -= 16 * f, 0 > c && (c += 16), this.rchunk[l].getBlock(b, d, c)) : {
    id: 0,
    data: 0
  };
}, RegionLib.prototype.updateChunkBlock = function(b, d, c, e, f, l, k) {
  b = 10000 * b + d, void 0 !== this.rchunk[b] && -1 !== this.rchunk[b] && -2 !== this.rchunk[b] && this.rchunk[b].updateBlock(c, e, f, l, k);
}, RegionLib.prototype.updateBlock = function(b, d, c, e, f) {
  var l = Math.floor(b / 16),
    k = Math.floor(c / 16),
    p = 10000 * l + k;
  void 0 !== this.rchunk[p] && -1 !== this.rchunk[p] && -2 !== this.rchunk[p] && (b -= 16 * l, 0 > b && (b += 16), c -= 16 * k, 0 > c && (c += 16), this.rchunk[p].updateBlock(Math.floor(b), Math.floor(d), Math.floor(c), e, f));
}, RegionLib.prototype.setBlock = function(b, d, c, e, f) {
  var l = Math.floor(b / 16),
    k = Math.floor(c / 16),
    p = 10000 * l + k;
  void 0 !== this.rchunk[p] && -1 !== this.rchunk[p] && -2 !== this.rchunk[p] && (b -= 16 * l, 0 > b && (b += 16), c -= 16 * k, 0 > c && (c += 16), this.rchunk[p].setBlock(Math.floor(b), Math.floor(d), Math.floor(c), e, f));
}, RegionLib.prototype.changeChunkBlockAdd = function(b, d, c, e, f) {
  b = 10000 * b + d, void 0 !== this.rchunk[b] && -1 !== this.rchunk[b] && -2 !== this.rchunk[b] && this.rchunk[b].changeAdd(c, e, f);
}, RegionLib.prototype.updateChunks = function() {
  var b = new Date().getTime(),
    d = 0,
    c;
  for (c in this.rchunk) void 0 !== this.rchunk[c] && -1 !== this.rchunk[c] && -2 !== this.rchunk[c] && !0 === this.rchunk[c].needsUpdate && (this.rchunk[c].update(), d++);
  c = new Date().getTime(), console.log('update chunk ' + (c - b) + ' ' + d);
}, RegionLib.prototype.deleteBuffers = function() {
  var b = new Date().getTime(),
    d = 0,
    c;
  for (c in this.rchunk) void 0 !== this.rchunk[c] && -1 !== this.rchunk[c] && -2 !== this.rchunk[c] && !0 !== this.rchunk[c].changed && (1 === this.rchunk[c].isInit || 1 === this.rchunk[c].isInit1) && this.rchunk[c].timestamp + 10000 < b && (this.rchunk[c].deleteBuffers(), this.rchunk[c] = void 0, d++);
  c = new Date().getTime(), console.log('delete buffers ' + (c - b) + ' ' + d);
}, RegionLib.prototype.save = function() {
  for (var b in this.rchunk) void 0 !== this.rchunk[b] && -1 !== this.rchunk[b] && -2 !== this.rchunk[b] && this.rchunk[b].changed && (this.saveChunkToStorage(this.rchunk[b].xPos, this.rchunk[b].zPos), this.rchunk[b].changed = !1);
}, RegionLib.prototype.saveChunkToStorage = function(b, d) {
  var c = 10000 * b + d;
  if (void 0 !== this.rchunk[c] && -1 !== this.rchunk[c] && -2 !== this.rchunk[c]) {
    var e = this.rchunk[c].getNBT(),
      e = new Zlib.Deflate(e).compress(),
      f = new Uint8Array(e.length + 5),
      c = e.length + 1;
    for (f[0] = c >> 24 & 255, f[1] = c >> 16 & 255, f[2] = c >> 8 & 255, f[3] = c & 255, f[4] = 2, c = 0; c < e.length; c++) f[c + 5] = e[c];
    e = ab2str(f), window.localStorage.setItem(this.gameRoot + ' ' + this.worldName + ' ' + b + ' ' + d, e);
  }
}, RegionLib.prototype.getChunkFromStorage = function(b, d) {
  var c = window.localStorage.getItem(this.gameRoot + ' ' + this.worldName + ' ' + b + ' ' + d);
  return void 0 === c || null === c || '' === c ? -1 : (c = new Uint8Array(str2ab(c)), RegionLib.loadChunk(0, c, !0));
}, RegionLib.prototype.loadChunkFromStorage = function(b, d, c) {
  var e = this.getChunkFromStorage(b, d);
  if (-1 === e) return -1;
  if (c) return e;
  this.rchunk[10000 * b + d] = e;
  var f = e = c = !1,
    l = !1,
    k = this.requestChunk(b + 1, d);
  void 0 === k && (l = !0), -1 === k && (l = !0), -2 === k && (l = !0);
  var p = this.requestChunk(b - 1, d);
  void 0 === p && (f = !0), -1 === p && (f = !0), -2 === p && (f = !0);
  var q = this.requestChunk(b, d + 1);
  void 0 === q && (c = !0), -1 === q && (c = !0), -2 === q && (c = !0), b = this.requestChunk(b, d - 1), void 0 === b && (e = !0), -1 === b && (e = !0), -2 === b && (e = !0), l || k.init2(), f || p.init2(), c || q.init2(), e || b.init2();
}, RegionLib.prototype.loadRegion = function(b, d) {
  if (this.region[1000 * b + d] = {}, this.region[1000 * b + d].loaded = -2, void 0 !== window.threadsCode) var c = new Blob([threadsCode.loadRegionThread], {
      type: 'application/javascript'
    }),
    c = new Worker(window.URL.createObjectURL(c));
  else c = new Worker('threads/loadRegionThread.js');
  c.regionLib = this, c.region = this.region[1000 * b + d], c.onmessage = function(b) {
    this.regionLib.regionLoaded(b);
  }, c.onerror = function(b) {
    this.region.loaded = -1;
  };
  var e = this.gameRoot + '/' + this.worldName + '/region/r.' + b + '.' + d + '.mca',
    f = '';
  if (-1 === this.gameRoot.indexOf(':')) {
    var f = document.location.href.split(/\?|#/)[0],
      l = f.indexOf('index'); - 1 !== l && (f = f.substring(0, l));
  }
  console.log(f + e), c.postMessage({
    x: b,
    y: d,
    name: f + e
  });
}, RegionLib.prototype.regionLoaded = function(b) {
  var d = b.data.x,
    c = b.data.y;
  if (1 !== b.data.loaded) d = this.region[1000 * d + c], d.loaded = -1;
  else if (b = new Uint8Array(b.data.data), 1000 > b.length) d = this.region[1000 * d + c], d.loaded = -1;
  else {
    d = this.region[1000 * d + c], d.regionData = b, d.loaded = 0, d.chunkPos = [], d.chunkLen = [];
    for (var e = c = 0; 4096 > c; c += 4, e++) d.chunkPos[e] = 65536 * b[c] + 256 * b[c + 1] + b[c + 2], d.chunkLen[e] = b[c + 3];
  }
}, RegionLib.prototype.loadRegionFile = function(b, d) {
  try {
    var c = Readfile.readRAW(d);
  } catch (e) {
    console.log('nie ma pliku');
    return;
  }
  b.regionData = c, b.loaded = 0, b.chunkPos = [], b.chunkLen = [];
  for (var f = 0, l = 0; 4096 > f; f += 4, l++) b.chunkPos[l] = 65536 * c[f] + 256 * c[f + 1] + c[f + 2], b.chunkLen[l] = c[f + 3];
}, RegionLib.prototype.requestChunk = function(b, d, c) {
  var e = 10000 * b + d;
  if (void 0 === c && (c = !0), void 0 !== this.rchunk[e] || !c) return this.rchunk[e];
  if (1 !== this.localIChunk[e] && (c = -1, this.localIChunk[e] = 1, -1 !== (c = this.loadChunkFromStorage(b, d, !0)))) return this.rchunk[e] = c;
  c = Math.floor(b / 32);
  var f = Math.floor(d / 32);
  if (void 0 === this.region[1000 * c + f] && this.loadRegion(c, f), -1 === this.region[1000 * c + f].loaded) return this.rchunk[e] = -1;
  if (-2 === this.region[1000 * c + f].loaded) return -2;
  if (0 === this.region[1000 * c + f].loaded) {
    if (b %= 32, 0 > b && (b += 32), d %= 32, 0 > d && (d += 32), d = b + 32 * d, 0 < this.region[1000 * c + f].chunkPos[d]) return console.log('chunk ' + e + ' : ' + this.region[1000 * c + f].chunkPos[d] + ' ' + this.region[1000 * c + f].chunkLen[d]), this.iChunk++, this.rchunk[e] = RegionLib.loadChunk(4096 * this.region[1000 * c + f].chunkPos[d], this.region[1000 * c + f].regionData, !0), this.rchunk[e];
    this.rchunk[e] = -1;
  }
}, RegionLib.loadChunk = function(b, d, c) {
  var e = {},
    f = new Chunk();
  e.offset = 0;
  try {
    if (c) {
      var l = new Zlib.Inflate(d, {
        index: b + 5
      });
      e.data = l.decompress();
    } else e.data = d;
  } catch (k) {
    return console.log('fail'), -1;
  }
  for (d = 0; 2000 > d && -1 !== (b = NBT.nextTag(e)); d++) {
    switch (b.name) {
      case 'xPos':
        f.xPos = b.value;
        break;
      case 'zPos':
        f.zPos = b.value;
        break;
      case 'HeightMap':
        f.heightMap = b.data;
        break;
      case 'Biomes':
        f.biomes = b.data;
        break;
      case 'LightPopulated':
        f.lightPopulated = b.value;
        break;
      case 'Sections':
        RegionLib.readSections(b, f, e);
        continue;
    }
    9 === b.type && NBT.read9(b, f, e);
  }
  return void 0 === f.heightMap && f.initHeightMap(), f.isInit = 0, f.isInit1 = 0, f;
}, RegionLib.readSections = function(b, d, c) {
  for (var e = {}, f, l = 0; l < b.length && -1 !== (f = NBT.nextTag(c));) switch (0 === f.type && (void 0 === e.add && (e.add = new Uint8Array(2048)), d.section[e.y] = e, e = {}, l++), f.name) {
    case 'Y':
      e.y = f.value;
      break;
    case 'Blocks':
      e.blocks = f.data;
      break;
    case 'SkyLight':
      e.skyLight = f.data;
      break;
    case 'BlockLight':
      e.blockLight = f.data;
      break;
    case 'Add':
      e.add = f.data;
      break;
    case 'Data':
      e.data = f.data;
  }
}, RegionSrv.prototype.connect = function(b, d) {
  console.log(b + ' ' + d), d = d || '', 20 < d.length ? document.getElementById('servermessage').innerHTML = 'Nickname too long, max 20' : 1 > d.length ? document.getElementById('servermessage').innerHTML = 'Nickname too short, min 1' : (this.nickname = d, player.setName(d), this.ws = new WebSocket('ws://' + b + '/ws'), this.ws.regionSrv = this, this.ws.binaryType = 'arraybuffer', this.ws.onopen = function() {
    this.regionSrv.wsOpen = !0, this.regionSrv.wsMsg.offset = 0, NBT.write8Tag(this.regionSrv.wsMsg, 'Nickname', this.regionSrv.nickname), this.send(new Uint8Array(this.regionSrv.wsMsg.data.buffer, 0, this.regionSrv.wsMsg.offset));
  }, this.ws.onmessage = function(b) {
    var e = {
      offset: 0
    };
    e.data = new Uint8Array(b.data);
    var d;
    if (-1 !== (d = NBT.nextTag(e))) switch (d.name) {
      case 'Update':
        for (b = 0; 2 > b && -1 !== (d = NBT.nextTag(e)); b++) switch (d.name) {
          case 'BlockUpdate':
            console.log('bu ' + d.length);
            for (var l = d.length, k = d = 0; k < l; k++) {
              var p = NBT.nextTag(e).data;
              NBT.nextTag(e).value.equalsIgnoreCase(this.regionSrv.nickname) || (4 > l ? this.regionSrv.updateRawBlock(p, !1) : (this.regionSrv.setRawBlock(p), d++));
            }
            0 < d && this.regionSrv.updateChunks();
            break;
          case 'PlayerUpdate':
            for (l = d.length, k = 0; k < l; k++) d = NBT.nextTag(e), d.name.equalsIgnoreCase(this.regionSrv.nickname) || (void 0 === players[d.name] && (players[d.name] = new Player(), players[d.name].name = d.name), players[d.name].setPosRotRawInt(d.data));
        }
        break;
      case 'PlayerQuit':
        console.log('delp ' + d.value);
        players[d.value] = void 0;
        break;
      case 'JoinGame':
        if (-1 === (d = NBT.nextTag(e))) break;
        switch (d.name) {
          case 'setPos':
            console.log(d.tagId + ' ' + d.length), b = NBT.read3RawTag(e), l = NBT.read3RawTag(e), e = NBT.read3RawTag(e), camera.setPos(b, l, e), document.getElementById('loginDiv').style.display = 'none', document.getElementById('webgl').style['-webkit-filter'] = 'none', document.getElementById('webgl').style['-moz-filter'] = 'none', _gameStop = !1, requestAnimFrame(tick);
        }
        break;
      case 'Kick':
        this.regionSrv.connectionClosed(d.value);
        break;
      case 'ChunkData':
        b = NBT.nextTag(e).value, l = NBT.nextTag(e).value, console.log('dostalem chunka ' + b + ' ' + l), e = this.regionSrv.loadChunk(e.offset + 13, e.data, !0), void 0 !== e.xPos && void 0 !== e.zPos && (this.regionSrv.rchunk[10000 * b + l] = e);
    }
  }, this.ws.onclose = function() {
    this.regionSrv.connectionClosed('Connection closed');
  });
}, RegionSrv.prototype.connectionClosed = function(b) {
  this.wsOpen = !1, document.getElementById('loginDiv').style.display = 'block', document.getElementById('servermessage').innerHTML = b, document.getElementById('webgl').style['-webkit-filter'] = 'blur(5px)', document.getElementById('webgl').style['-moz-filter'] = 'blur(5px)', _gameStop = !0, this.deleteBuffers(!0), this.rchunk = [], players = [], document.exitPointerLock(), camera.moveX = 0, camera.moveY = 0, console.log('WebSocket closed.' + b);
}, RegionSrv.prototype.new100msec = function() {}, RegionSrv.prototype.new50msec = function() {
  if (this.wsOpen) {
    var b = player.getPos(),
      d = player.getRot();
    this.position[0] = Math.floor(100 * b[0]), this.position[1] = Math.floor(100 * b[1]), this.position[2] = Math.floor(100 * b[2]), this.position[3] = Math.floor(100 * d[0]), this.position[4] = Math.floor(100 * d[1]), this.position[5] = Math.floor(lastTime), this.wsMsg.offset = 0, NBT.write11Tag(this.wsMsg, 'Position', this.position, 6), this.ws.send(new Uint8Array(this.wsMsg.data.buffer, 0, this.wsMsg.offset));
  }
}, RegionSrv.prototype.getNearestPosition = function(b) {
  var d = Math.floor(b[0] / 16),
    c = Math.floor(b[2] / 16),
    e = 10000 * d + c;
  if (void 0 !== this.rchunk[e] && -1 !== this.rchunk[e] && -2 !== this.rchunk[e]) {
    var f = b[0] - 16 * d;
    0 > f && (f += 16);
    var l = b[2] - 16 * c;
    if (0 > l && (l += 16), b = this.rchunk[e].getNearestPosition([f, b[1], l]), !1 !== b) return [16 * d + b[0], b[1], 16 * c + b[2]];
  }
  return !1;
}, RegionSrv.prototype.getChunkBlock = function(b, d, c, e, f) {
  return b = 10000 * b + d, void 0 !== this.rchunk[b] && -1 !== this.rchunk[b] && -2 !== this.rchunk[b] ? this.rchunk[b].getBlock(c, e, f) : {
    id: 0,
    data: 0
  };
}, RegionSrv.prototype.getBlock = function(b, d, c) {
  var e = Math.floor(b / 16),
    f = Math.floor(c / 16),
    l = 10000 * e + f,
    l = 10000 * e + f;
  return void 0 !== this.rchunk[l] && -1 !== this.rchunk[l] && -2 !== this.rchunk[l] ? (b -= 16 * e, 0 > b && (b += 16), c -= 16 * f, 0 > c && (c += 16), this.rchunk[l].getBlock(b, d, c)) : {
    id: 0,
    data: 0
  };
}, RegionSrv.prototype.updateChunkBlock = function(b, d, c, e, f, l, k) {
  var p = 10000 * b + d;
  void 0 !== this.rchunk[p] && -1 !== this.rchunk[p] && -2 !== this.rchunk[p] && this.rchunk[p].updateBlock(c, e, f, l, k), this.sendBlockData(c + 16 * b, e, f + 16 * d, l, k);
}, RegionSrv.prototype.setRawBlock = function(b) {
  this.setBlock(b[0], b[1], b[2], b[3], b[4]);
}, RegionSrv.prototype.updateRawBlock = function(b, d) {
  this.updateBlock(b[0], b[1], b[2], b[3], b[4], d);
}, RegionSrv.prototype.updateBlock = function(b, d, c, e, f, l) {
  void 0 === l && (l = !0);
  var k = Math.floor(b / 16),
    p = Math.floor(c / 16),
    q = 10000 * k + p;
  l && this.sendBlockData(b, d, c, e, f), void 0 !== this.rchunk[q] && -1 !== this.rchunk[q] && -2 !== this.rchunk[q] && (b -= 16 * k, 0 > b && (b += 16), c -= 16 * p, 0 > c && (c += 16), this.rchunk[q].updateBlock(Math.floor(b), Math.floor(d), Math.floor(c), e, f));
}, RegionSrv.prototype.setBlock = function(b, d, c, e, f) {
  var l = Math.floor(b / 16),
    k = Math.floor(c / 16),
    p = 10000 * l + k;
  void 0 !== this.rchunk[p] && -1 !== this.rchunk[p] && -2 !== this.rchunk[p] && (b -= 16 * l, 0 > b && (b += 16), c -= 16 * k, 0 > c && (c += 16), this.rchunk[p].setBlock(Math.floor(b), Math.floor(d), Math.floor(c), e, f));
}, RegionSrv.prototype.changeChunkBlockAdd = function(b, d, c, e, f) {
  b = 10000 * b + d, void 0 !== this.rchunk[b] && -1 !== this.rchunk[b] && -2 !== this.rchunk[b] && this.rchunk[b].changeAdd(c, e, f);
}, RegionSrv.prototype.updateChunks = function() {
  var b = new Date().getTime(),
    d = 0,
    c;
  for (c in this.rchunk) void 0 !== this.rchunk[c] && -1 !== this.rchunk[c] && -2 !== this.rchunk[c] && !0 === this.rchunk[c].needsUpdate && (this.rchunk[c].update(), d++);
  c = new Date().getTime(), console.log('update chunk ' + (c - b) + ' ' + d);
}, RegionSrv.prototype.deleteBuffers = function(b) {
  b = b || !1;
  var d = new Date().getTime(),
    c = 0,
    e;
  for (e in this.rchunk) void 0 === this.rchunk[e] || -1 === this.rchunk[e] || -2 === this.rchunk[e] || !0 === this.rchunk[e].changed || 1 !== this.rchunk[e].isInit && 1 !== this.rchunk[e].isInit1 || !(this.rchunk[e].timestamp + 10000 < d || b) || (this.rchunk[e].deleteBuffers(), this.rchunk[e] = void 0, c++);
  b = new Date().getTime(), console.log('delete buffers ' + (b - d) + ' ' + c);
}, RegionSrv.prototype.save = function() {
  console.log('not supported');
}, RegionSrv.prototype.requestChunk = function(b, d, c) {
  var e = 10000 * b + d;
  return void 0 === c && (c = !0), void 0 !== this.rchunk[e] || !c ? this.rchunk[e] : _gameStop ? void 0 : (this.wsMsg.offset = 0, NBT.write10Tag(this.wsMsg, 'Chunk'), NBT.write3Tag(this.wsMsg, 'xPos', b), NBT.write3Tag(this.wsMsg, 'zPos', d), NBT.write0Tag(this.wsMsg), this.ws.send(new Uint8Array(this.wsMsg.data.buffer, 0, this.wsMsg.offset)), this.rchunk[e] = -2, this.rchunk[e]);
}, RegionSrv.prototype.sendBlockData = function(b, d, c, e, f) {
  this.wsMsg.offset = 0, NBT.write10Tag(this.wsMsg, 'BlockData'), NBT.write3Tag(this.wsMsg, 'x', b), NBT.write3Tag(this.wsMsg, 'y', d), NBT.write3Tag(this.wsMsg, 'z', c), NBT.write3Tag(this.wsMsg, 'b', e), NBT.write3Tag(this.wsMsg, 'd', f), NBT.write0Tag(this.wsMsg), this.ws.send(new Uint8Array(this.wsMsg.data.buffer, 0, this.wsMsg.offset));
}, RegionSrv.prototype.chunkDataReceived = function() {}, RegionSrv.prototype.loadChunk = function(b, d, c) {
  var e = {},
    f = new Chunk();
  e.offset = 0;
  try {
    if (c) {
      var l = new Zlib.Inflate(d, {
        index: b + 5
      });
      e.data = l.decompress();
    } else e.data = d;
  } catch (k) {
    return console.log('fail'), -1;
  }
  for (d = 0; 2000 > d && -1 !== (b = NBT.nextTag(e)); d++) {
    switch (b.name) {
      case 'xPos':
        f.xPos = b.value;
        break;
      case 'zPos':
        f.zPos = b.value;
        break;
      case 'HeightMap':
        f.heightMap = b.data;
        break;
      case 'Biomes':
        f.biomes = b.data;
        break;
      case 'LightPopulated':
        f.lightPopulated = b.value;
        break;
      case 'Sections':
        RegionLib.readSections(b, f, e);
        continue;
    }
    9 === b.type && NBT.read9(b, f, e);
  }
  return void 0 === f.heightMap && f.initHeightMap(), f.isInit = 0, f.isInit1 = 0, f;
}, RegionSrv.prototype.readSections = function(b, d, c) {
  for (var e = {}, f, l = 0; l < b.length && -1 !== (f = NBT.nextTag(c));) switch (0 === f.type && (void 0 === e.add && (e.add = new Uint8Array(2048)), d.section[e.y] = e, e = {}, l++), f.name) {
    case 'Y':
      e.y = f.value;
      break;
    case 'Blocks':
      e.blocks = f.data;
      break;
    case 'SkyLight':
      e.skyLight = f.data;
      break;
    case 'BlockLight':
      e.blockLight = f.data;
      break;
    case 'Add':
      e.add = f.data;
      break;
    case 'Data':
      e.data = f.data;
  }
}, World.prototype.connect = function(b, d) {
  this.worldData.connect(b, d);
}, World.prototype.getChunkBlock = function(b, d, c, e, f) {
  return this.worldData.getChunkBlock(b, d, c, e, f);
}, World.prototype.getBlock = function(b, d, c) {
  return this.worldData.getBlock(b, d, c);
}, World.prototype.updateChunkBlock = function(b, d, c, e, f, l, k) {
  this.worldData.updateChunkBlock(b, d, c, e, f, l, k);
}, World.prototype.updateBlock = function(b, d, c, e, f) {
  this.worldData.updateBlock(b, d, c, e, f);
}, World.prototype.setBlock = function(b, d, c, e, f) {
  this.worldData.setBlock(b, d, c, e, f);
}, World.prototype.changeChunkBlockAdd = function(b, d, c, e, f) {
  this.worldData.changeChunkBlockAdd(b, d, c, e, f);
}, World.prototype.updateChunks = function() {
  this.worldData.updateChunks();
}, World.prototype.deleteBuffers = function() {
  this.worldData.deleteBuffers();
}, World.prototype.save = function() {
  this.worldData.save();
}, World.prototype.requestChunk = function(b, d, c) {
  return this.worldData.requestChunk(b, d, c);
}, World.prototype.new100msec = function() {
  this.worldData.new100msec();
}, World.prototype.new50msec = function() {
  this.worldData.new50msec();
}, World.prototype.render = function() {
  if (blockTexture.loaded) {
    gl.bindTexture(gl.TEXTURE_2D, blockTexture);
    var b = gluu.standardShader;
    gl.useProgram(b), gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight), gl.clearColor(settings.skyColor[0], settings.skyColor[1], settings.skyColor[2], 1), gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT), mat4.perspective(gluu.pMatrix, camera.fovy, gl.viewportWidth / gl.viewportHeight, 0.1, 6000);
    var d = camera.getMatrix();
    mat4.identity(gluu.mvMatrix), mat4.multiply(gluu.pMatrix, gluu.pMatrix, d), gl.uniformMatrix4fv(b.pMatrixUniform, !1, gluu.pMatrix), gl.uniformMatrix4fv(b.mvMatrixUniform, !1, gluu.mvMatrix), gl.uniform1f(b.lod, settings.distanceLevel[1]), gl.uniform1f(b.sun, settings.sun), gl.uniform1f(b.brightness, settings.brightness), gl.uniform4fv(b.skyColor, settings.skyColor);
    for (var c = 0, e = 0, d = 0, f = [settings.distanceLevel[0], settings.distanceLevel[1], settings.distanceLevel[2], settings.distanceLevel[2]], l = [], k = 0, p = 0, q, v = camera.getPos(), s = 0; 4 > s; s++) {
      var r = Math.floor(v[0] / 16),
        a = Math.floor(v[2] / 16);
      l[0] = 0, l[1] = 0;
      for (var y = -1; y < f[s] * f[s] * 4; y++)
        if (-1 !== y && (l = spiralLoop(y)), k = r + l[0], p = a + l[1], q = this.requestChunk(k, p, !1), -1 !== q && -2 !== q && (c = v[0] - (16 * k + 8), e = v[2] - (16 * p + 8), d = Math.sqrt(c * c + e * e), !(d > 16 * f[s]))) {
          if (64 < d) {
            var I = camera.getTarget(),
              I = [v[0] - I[0], v[2] - I[2]],
              e = [-c, -e],
              c = I[0] * e[0] + I[1] * e[1],
              E = Math.sqrt(I[0] * I[0] + I[1] * I[1]),
              I = Math.sqrt(e[0] * e[0] + e[1] * e[1]),
              c = c / (E * I);
            if (0 < c) continue;
            if (c = Math.cos(camera.fovx / 1.5) + c, I = Math.sqrt(2 * I * I * (1 - c)), 0 < c && 16 < I) continue;
          }
          void 0 === q ? 1 < iLag && (iLag -= 1, this.worldData.requestChunk(k, p)) : (q.timestamp = lastTime, (v[1] >= settings.waterlevel || 160 > d) && q.render(s, b, 0), v[1] < settings.waterlevel && 96 > d ? q.render(s, b, 1) : 80 > d && q.render(s, b, 1));
        }
    }
  }
}, World.prototype.renderSelection = function() {
  if (blockTexture.loaded) {
    var b = gluu.selectionShader;
    gl.useProgram(b), gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight), gl.clearColor(0, 0, 0, 0), gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT), mat4.perspective(gluu.pMatrix, camera.fovy, gl.viewportWidth / gl.viewportHeight, 0.1, 6000);
    var d = camera.getMatrix();
    mat4.multiply(gluu.pMatrix, gluu.pMatrix, d), mat4.identity(gluu.mvMatrix), gl.uniformMatrix4fv(b.pMatrixUniform, !1, gluu.pMatrix), gl.uniformMatrix4fv(b.mvMatrixUniform, !1, gluu.mvMatrix);
    for (var c = [], e = 0, f = 0, l, d = camera.getPos(), k = 0; 4 > k; k++) {
      var p = Math.floor(d[0] / 16),
        q = Math.floor(d[2] / 16);
      c[0] = 0, c[1] = 0;
      for (var v = -1; 24 > v; v++) - 1 !== v && (c = spiralLoop(v)), e = p + c[0], f = q + c[1], l = this.requestChunk(e, f, !1), -1 !== l && -2 !== l && (void 0 === l ? 1 < iLag && (iLag -= 1, this.worldData.requestChunk(e, f)) : (l.timestamp = lastTime, l.render(k, b, 0), l.render(k, b, 1)));
    }
    return q = new Uint8Array(4), gl.readPixels(Math.floor(gl.viewportWidth / 2), Math.floor(gl.viewportHeight / 2), 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, q), b = {}, b.y = q[0], b.z = Math.floor(q[1] / 16), b.x = q[1] - 16 * b.z, p = Math.floor(q[2] / 10), b.side = q[2] - 10 * p, c = Math.floor(p / 5), e = p - 5 * c, p = Math.floor(d[0] / 16), q = Math.floor(d[2] / 16), d = p % 5, 0 > d && (d += 5), f = q % 5, 0 > f && (f += 5), c -= d, e -= f, 2 < c && (c -= 5), -2 > c && (c += 5), 2 < e && (e -= 5), -2 > e && (e += 5), b.chx = p + c, b.chz = q + e, b.rchx = c, b.rchz = e, b;
  }
}, World.prototype.getNearestPosition = function(b) {
  return this.worldData.getNearestPosition(b);
}, World.prototype.testCollisions = function() {
  for (var b = camera.getPos(), d = Math.floor(b[0] / 16), c = Math.floor(b[2] / 16), e, f = 0, l = d - 1; l < d + 2; l++)
    for (var k = c - 1; k < c + 2; k++)
      if (16 * l - 2 < b[0] && 16 * l + 18 > b[0] && 16 * k - 2 < b[2] && 16 * k + 18 > b[2])
        if (e = this.requestChunk(l, k, !1), -1 === e || -2 === e || void 0 === e) {
          if (l === d && k === c) return !0;
        } else if (1 !== e.isInit) {
    if (l === d && k === c) return !0;
  } else if (e = e.getBuffer([Math.floor(b[0] - 16 * l), Math.floor(b[1]), Math.floor(b[2] - 16 * k)]), !1 !== e) var p = 0,
    p = p + Intersection3D.shapeIntersectsShape(e, player.shape, 9, 5, b),
    f = f + p;
  return 0 < f ? !0 : !1;
}, Chunk.stairsData = [], Chunk.stairsData['20xx2'] = '0001', Chunk.stairsData['21x2x'] = '0010', Chunk.stairsData['11x2x'] = '0010', Chunk.stairsData['1x13x'] = '1000', Chunk.stairsData['3x0x3'] = '0100', Chunk.stairsData['3x13x'] = '1000', Chunk.stairsData['00xx2'] = '0001', Chunk.stairsData['0x0x3'] = '0100', Chunk.stairsData['31xx3'] = '1110', Chunk.stairsData['30x3x'] = '1101', Chunk.stairsData['00x3x'] = '1101', Chunk.stairsData['0x02x'] = '0111', Chunk.stairsData['2x1x2'] = '1011', Chunk.stairsData['2x02x'] = '0111', Chunk.stairsData['11xx3'] = '1110', Chunk.stairsData['1x1x2'] = '1011', Chunk.stairsData['64xx6'] = '0001', Chunk.stairsData['65x6x'] = '0010', Chunk.stairsData['55x6x'] = '0010', Chunk.stairsData['5x57x'] = '1000', Chunk.stairsData['7x4x7'] = '0100', Chunk.stairsData['7x57x'] = '1000', Chunk.stairsData['44xx6'] = '0001', Chunk.stairsData['4x4x7'] = '0100', Chunk.stairsData['75xx7'] = '1110', Chunk.stairsData['74x7x'] = '1101', Chunk.stairsData['44x7x'] = '1101', Chunk.stairsData['4x46x'] = '0111', Chunk.stairsData['6x5x6'] = '1011', Chunk.stairsData['6x46x'] = '0111', Chunk.stairsData['55xx7'] = '1110', Chunk.stairsData['5x5x6'] = '1011', Chunk.cacheSlight = new Float32Array(83592), Chunk.cacheBlight = new Float32Array(83592), Chunk.cacheData = new Float32Array(83592), Chunk.cacheId = new Float32Array(83592), Chunk.cacheBlock = new Float32Array(5832), Chunk.cacheHeightMap9 = new Uint8Array(2304), Chunk.cacheHeightMap9hMax = new Uint8Array(2304), Chunk.cacheSlight9 = new Uint8Array(594432), Chunk.cacheBlight9 = new Uint8Array(594432), Chunk.cacheId9 = new Int32Array(594432), Chunk.prototype.initHeightMap = function() {
  var b = 0;
  this.heightMap = new Uint32Array(256);
  for (var d = this.mxaVal = 0; 16 > d; d++)
    for (var c = 0; 16 > c; c++)
      for (var e = 255, f = 15; 0 < e; e--, f--) {
        if (0 === (e - 15) % 16) {
          var l = this.section[(e - 15) / 16],
            f = 15;
          if (void 0 === l) {
            e -= 15, f = 16;
            continue;
          }
        }
        if (b = 256 * f + 16 * d + c, 0 < l.blocks[b] && e > this.mxaVal && (this.mxaVal = e), 1 !== block.lightTransmission[l.blocks[b]]) {
          this.heightMap[16 * d + c] = e + 1;
          break;
        }
      }
}, Chunk.prototype.refreshLight = function(b, d) {
  var c = 0,
    e = 0,
    f = 0,
    l = 0,
    k = 0,
    p = 0,
    q = l = c = 0,
    v = new Date().getTime();
  if (d = d || !1, this.initHeightMap(), !this.getCacheL9()) return !1;
  for (var e = block.lightSource, s = block.lightTransmission, r = Chunk.cacheSlight9, a = Chunk.cacheBlight9, y = Chunk.cacheId9, I = 256, E = c = 0, t = 0, u = 0; 48 > u; u++)
    for (var A = 0; 48 > A; A++) {
      t = Chunk.cacheHeightMap9[48 * u + A], t > c && (c = t), t < I && (I = t);
      for (var E = 0, D = -1; 1 >= D; D++)
        for (q = -1; 1 >= q; q++) 0 > u + D || 0 > A + q || 47 < u + D || 47 < A + q || (t = Chunk.cacheHeightMap9[48 * (u + D) + (A + q)], t > E && (E = t));
      Chunk.cacheHeightMap9hMax[48 * u + A] = E + 1;
    }
  for (u = 2; 46 > u; u++)
    for (A = 2; 46 > A; A++) {
      for (t = Chunk.cacheHeightMap9hMax[48 * u + A]; t >= Chunk.cacheHeightMap9[48 * u + A]; t--) q = 2304 * t + 48 * u + A, r[q] = 15;
      for (E = 15; 0 <= t; t--) q = 2304 * t + 48 * u + A, E *= s[y[q]], r[q] = E, 0 < E && t < I && (I = t);
    }
  for (u = 0; 48 > u; u++)
    for (t = 0; 255 > t; t++)
      if (q = 2304 * t + 48 * u + 1, 0 < r[q] && t < I) {
        I = t;
        break;
      }
  for (u = 0; 48 > u; u++)
    for (t = 0; 255 > t; t++)
      if (q = 2304 * t + 48 * u + 46, 0 < r[q] && t < I) {
        I = t;
        break;
      }
  for (A = 0; 48 > A; A++)
    for (t = 0; 255 > t; t++)
      if (q = 2304 * t + 48 + A, 0 < r[q] && t < I) {
        I = t;
        break;
      }
  for (A = 0; 48 > A; A++)
    for (t = 0; 255 > t; t++)
      if (q = 2304 * t + 2208 + A, 0 < r[q] && t < I) {
        I = t;
        break;
      }
  for (I--, 1 > I && (I = 1), -1 === b ? (D = 0, q = 256) : (D = b - 16, 0 > D && (D = 0), q = b + 16, 256 < q && (q = 256)), E = 255, f = 0, u = 2; 46 > u; u++)
    for (A = 2; 46 > A; A++)
      for (t = D + 1; t < q - 1; t++) c = 2304 * t + 48 * u + A, a[c] = e[y[c]], 0 < a[c] && t < E && (E = t), 0 < a[c] && t > f && (f = t);
  if (t = !1, -1 === b) D = E - 16, 0 > D && (D = 0), q = f + 16, 256 < q && (q = 256), t = !0;
  else
    for (c = 2304 * D; c < 2304 * q; c++)
      if (0 < a[c]) {
        t = !0;
        break;
      } if (u = new Date().getTime(), console.log('czas L0 ' + (u - v)), v = new Date().getTime(), t)
    for (var x = 0; 14 > x; x++)
      for (u = 1; 47 > u; u++)
        for (A = 1; 47 > A; A++)
          for (t = D; t < q; t++) c = 2304 * t + 48 * u + A, E = a[c] - 1, 1 > E || (e = c + 48, f = c - 48, l = c - 1, k = c + 1, p = c + 2304, c -= 2304, E * s[y[c]] > a[c] && (a[c] = E * s[y[c]]), E * s[y[p]] > a[p] && (a[p] = E * s[y[p]]), E * s[y[e]] > a[e] && (a[e] = E * s[y[e]]), E * s[y[f]] > a[f] && (a[f] = E * s[y[f]]), E * s[y[l]] > a[l] && (a[l] = E * s[y[l]]), E * s[y[k]] > a[k] && (a[k] = E * s[y[k]]));
  for (u = new Date().getTime(), console.log('czas L1 ' + (u - v)), v = new Date().getTime(), x = 0; 14 > x; x++)
    for (u = 1; 47 > u; u++)
      for (A = 1; 47 > A; A++)
        for (t = I; t < Chunk.cacheHeightMap9hMax[48 * u + A]; t++) c = 2304 * t + 48 * u + A, E = r[c] - 1, 1 > E || (e = c + 48, f = c - 48, l = c - 1, k = c + 1, p = c + 2304, c -= 2304, E * s[y[c]] > r[c] && (r[c] = E * s[y[c]]), E * s[y[p]] > r[p] && (r[p] = E * s[y[p]]), E * s[y[e]] > r[e] && (r[e] = E * s[y[e]]), E * s[y[f]] > r[f] && (r[f] = E * s[y[f]]), E * s[y[l]] > r[l] && (r[l] = E * s[y[l]]), E * s[y[k]] > r[k] && (r[k] = E * s[y[k]]));
  for (u = new Date().getTime(), console.log('czas L2 ' + (u - v)), v = new Date().getTime(), s = [], D = -1; 1 >= D; D++)
    for (q = -1; 1 >= q; q++)
      if (s[3 * (D + 1) + q + 1] = mcWorld.requestChunk(this.xPos + D, this.zPos + q), -2 === s[3 * (D + 1) + q + 1]) return !1;
  for (y = [0, 0, 0, 0, 0, 0, 0, 0, 0], c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], E = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], d && (y = [0, 1, 0, 1, 1, 1, 0, 1, 0]), e = 0; 2 >= e; e++)
    for (f = 0; 2 >= f; f++)
      if ((!d || 1 === e || 1 === f) && (I = s[3 * e + f], void 0 !== I && -1 !== I)) {
        for (t = D = 0; 256 > D; D++, t++) {
          if (0 === D % 16) {
            var n = I.section[D / 16],
              t = 0;
            if (void 0 === n) {
              D += 15, t = -1;
              continue;
            }
            d || (c[D / 16] = jenkins_hash(n.skyLight), E[D / 16] = jenkins_hash(n.blockLight));
          }
          for (u = 0; 16 > u; u++)
            for (A = 0; 16 > A; A += 2) l = (256 * t + 16 * u + A) / 2, q = 2304 * D + 48 * (16 * f + u) + (16 * e + A), n.skyLight[l] = r[q] + (r[q + 1] << 4), n.blockLight[l] = a[q] + (a[q + 1] << 4);
        }
        if (t = 0, !d)
          for (D = 0; 16 > D; D++)
            if (void 0 !== I.section[D]) {
              if (t = jenkins_hash(I.section[D].skyLight), c[D] !== t) {
                y[3 * e + f] = 1;
                break;
              }
              if (t = jenkins_hash(I.section[D].blockLight), E[D] !== t) {
                y[3 * e + f] = 1;
                break;
              }
            }
      }
  return u = new Date().getTime(), console.log('czas L3 ' + (u - v)), y;
}, Chunk.prototype.getBiomeColor1 = function(b, d, c) {
  var e, f, l, k;
  return k = this.cacheBiomes[18 * (d + 0) + b + 0], e = biomes[k].colorR[c], f = biomes[k].colorG[c], l = biomes[k].colorB[c], k = this.cacheBiomes[18 * (d + 0) + b + 1], e += biomes[k].colorR[c], f += biomes[k].colorG[c], l += biomes[k].colorB[c], k = this.cacheBiomes[18 * (d + 1) + b + 0], e += biomes[k].colorR[c], f += biomes[k].colorG[c], l += biomes[k].colorB[c], k = this.cacheBiomes[18 * (d + 1) + b + 1], e += biomes[k].colorR[c], f += biomes[k].colorG[c], l += biomes[k].colorB[c], e = 65536 * Math.floor(e / 4) + 256 * Math.floor(f / 4) + Math.floor(l / 4);
}, Chunk.prototype.getBiomeColor2 = function(b, d, c) {
  var e, f, l, k;
  return k = this.cacheBiomes[18 * (d + 0) + b + 2], e = biomes[k].colorR[c], f = biomes[k].colorG[c], l = biomes[k].colorB[c], k = this.cacheBiomes[18 * (d + 0) + b + 1], e += biomes[k].colorR[c], f += biomes[k].colorG[c], l += biomes[k].colorB[c], k = this.cacheBiomes[18 * (d + 1) + b + 2], e += biomes[k].colorR[c], f += biomes[k].colorG[c], l += biomes[k].colorB[c], k = this.cacheBiomes[18 * (d + 1) + b + 1], e += biomes[k].colorR[c], f += biomes[k].colorG[c], l += biomes[k].colorB[c], e = 65536 * Math.floor(e / 4) + 256 * Math.floor(f / 4) + Math.floor(l / 4);
}, Chunk.prototype.getBiomeColor3 = function(b, d, c) {
  var e, f, l, k;
  return k = this.cacheBiomes[18 * (d + 2) + b + 2], e = biomes[k].colorR[c], f = biomes[k].colorG[c], l = biomes[k].colorB[c], k = this.cacheBiomes[18 * (d + 2) + b + 1], e += biomes[k].colorR[c], f += biomes[k].colorG[c], l += biomes[k].colorB[c], k = this.cacheBiomes[18 * (d + 1) + b + 2], e += biomes[k].colorR[c], f += biomes[k].colorG[c], l += biomes[k].colorB[c], k = this.cacheBiomes[18 * (d + 1) + b + 1], e += biomes[k].colorR[c], f += biomes[k].colorG[c], l += biomes[k].colorB[c], e = 65536 * Math.floor(e / 4) + 256 * Math.floor(f / 4) + Math.floor(l / 4);
}, Chunk.prototype.getBiomeColor4 = function(b, d, c) {
  var e, f, l, k;
  return k = this.cacheBiomes[18 * (d + 2) + b + 0], e = biomes[k].colorR[c], f = biomes[k].colorG[c], l = biomes[k].colorB[c], k = this.cacheBiomes[18 * (d + 2) + b + 1], e += biomes[k].colorR[c], f += biomes[k].colorG[c], l += biomes[k].colorB[c], k = this.cacheBiomes[18 * (d + 1) + b + 0], e += biomes[k].colorR[c], f += biomes[k].colorG[c], l += biomes[k].colorB[c], k = this.cacheBiomes[18 * (d + 1) + b + 1], e += biomes[k].colorR[c], f += biomes[k].colorG[c], l += biomes[k].colorB[c], e = 65536 * Math.floor(e / 4) + 256 * Math.floor(f / 4) + Math.floor(l / 4);
}, Chunk.prototype.getBiomeColor = function(b, d, c) {
  var e, f, l, k;
  return k = this.cacheBiomes[18 * (d + 2) + b + 2], e = biomes[k].colorR[c], f = biomes[k].colorG[c], l = biomes[k].colorB[c], k = this.cacheBiomes[18 * (d + 0) + b + 0], e += biomes[k].colorR[c], f += biomes[k].colorG[c], l += biomes[k].colorB[c], k = this.cacheBiomes[18 * (d + 2) + b + 0], e += biomes[k].colorR[c], f += biomes[k].colorG[c], l += biomes[k].colorB[c], k = this.cacheBiomes[18 * (d + 0) + b + 2], e += biomes[k].colorR[c], f += biomes[k].colorG[c], l += biomes[k].colorB[c], k = this.cacheBiomes[18 * (d + 1) + b + 2], e += biomes[k].colorR[c], f += biomes[k].colorG[c], l += biomes[k].colorB[c], k = this.cacheBiomes[18 * (d + 1) + b + 0], e += biomes[k].colorR[c], f += biomes[k].colorG[c], l += biomes[k].colorB[c], k = this.cacheBiomes[18 * (d + 2) + b + 1], e += biomes[k].colorR[c], f += biomes[k].colorG[c], l += biomes[k].colorB[c], k = this.cacheBiomes[18 * (d + 0) + b + 1], e += biomes[k].colorR[c], f += biomes[k].colorG[c], l += biomes[k].colorB[c], e = 65536 * Math.floor(e / 8) + 256 * Math.floor(f / 8) + Math.floor(l / 8);
}, Chunk.prototype.getNearestPosition = function(b) {
  if (-1 === this.isInit || !this.getCache(0, 256)) return !1;
  var d = Chunk.cacheId;
  b = [Math.floor(b[0]), Math.floor(b[1]), Math.floor(b[2])];
  for (var c = 0, e = 0, f = Array(9), l = 0, k = -1; 2 > k; k++)
    for (var p = -1; 2 > p; p++)
      for (l = b[1], f[3 * (k + 1) + (p + 1)] = 256; 256 > l; l++) {
        if (c = 324 * (l + 1) + 18 * (b[2] + 1 + k) + (b[0] + 1 + p), e = 324 * (l + 2) + 18 * (b[2] + 1 + k) + (b[0] + 1 + p), void 0 === this.section[Math.floor(l / 16)] || -1 === d[324 * (l + 2) + 19]) {
          f[3 * (k + 1) + (p + 1)] = l;
          break;
        }
        if (0 === block[d[c]].type && 0 === block[d[e]].type) {
          f[3 * (k + 1) + (p + 1)] = l;
          break;
        }
      }
  for (d = [b[0], f[4], b[2]], k = -1; 2 > k; k++)
    for (p = -1; 2 > p; p++) f[3 * (k + 1) + (p + 1)] < d[1] - 1 && (d[0] = b[0] + p, d[1] = f[3 * (k + 1) + (p + 1)], d[2] = b[2] + k);
  return d;
}, Chunk.prototype.getBlock = function(b, d, c) {
  if (-1 === this.isInit) return {
    id: 0,
    data: 0
  };
  var e = Math.floor(d / 16);
  return b = 256 * (d - 16 * e) + 16 * c + b, void 0 === this.section[e] ? {
    id: 0,
    data: 0
  } : (d = this.section[e].blocks[b], c = 0, c = 0 === b % 2 ? this.section[e].data[b / 2] & 15 : (this.section[e].data[b / 2 - 0.5] & 240) >> 4, {
    id: d,
    data: c
  });
}, Chunk.prototype.getNBT = function(b) {
  b = {
    offset: 0
  }, b.data = new Uint8Array(500000), NBT.write10Tag(b, ''), NBT.write10Tag(b, 'Level'), NBT.write3Tag(b, 'xPos', this.xPos), NBT.write3Tag(b, 'zPos', this.zPos), NBT.write7Tag(b, 'Biomes', this.biomes), NBT.write9Tag(b, 'Sections', 10, this.section.length);
  for (var d = 0; d < this.section.length; d++) NBT.write1Tag(b, 'Y', this.section[d].y), NBT.write7Tag(b, 'Data', this.section[d].data), NBT.write7Tag(b, 'SkyLight', this.section[d].skyLight), NBT.write7Tag(b, 'BlockLight', this.section[d].blockLight), NBT.write7Tag(b, 'Blocks', this.section[d].blocks), NBT.write0Tag(b);
  return NBT.write0Tag(b), NBT.write0Tag(b), new Uint8Array(b.data.buffer, 0, b.offset);
}, Chunk.prototype.newSection = function(b) {
  this.section[b] = {}, this.section[b].y = b, this.section[b].blocks = new Uint32Array(4096), this.section[b].skyLight = new Uint32Array(2048);
  for (var d = 0; 2048 > d; d++) this.section[b].skyLight[d] = 255;
  this.section[b].blockLight = new Uint32Array(2048), this.section[b].data = new Uint32Array(2048), this.section[b].add = new Uint32Array(2048);
}, Chunk.prototype.changeAdd = function(b, d, c) {
  if (-1 !== this.isInit) {
    var e = Math.floor(d / 16);
    b = 256 * (d - 16 * e) + 16 * c + b, d = 0, c = b % 2, void 0 === this.section[e] && this.newSection(e), d = 0 === c ? this.section[e].add[b / 2] & 15 : this.section[e].add[b / 2 - 0.5] >> 4 & 15, d++, 10 === d && (d = 0), 0 === c ? this.section[e].add[b / 2] = (this.section[e].add[b / 2] & 240) + d : this.section[e].add[b / 2 - 0.5] = (this.section[e].add[b / 2 - 0.5] & 15) + (d << 4), this.init2(0), this.init2(1);
  }
}, Chunk.prototype.updateBlock = function(b, d, c, e, f) {
  if (-1 !== this.isInit) {
    var l = new Date().getTime();
    this.changed = !0;
    var l = Math.floor(d / 16),
      k = 256 * (d - 16 * l) + 16 * c + b;
    void 0 === this.section[l] && this.newSection(l), this.section[l].blocks[k] = e;
    var p = k % 2;
    0 === p ? (this.section[l].data[k / 2] = (this.section[l].data[k / 2] & 240) + f, this.section[l].add[k / 2] &= 240) : (this.section[l].data[k / 2 - 0.5] = (this.section[l].data[k / 2 - 0.5] & 15) + (f << 4), this.section[l].add[k / 2 - 0.5] &= 15);
    var q = 0;
    if (0 === block[e].type || 2 === block[e].type || 3 === block[e].type || 4 === block[e].type) {
      var q = this.getSunLightValue(b, d + 1, c),
        v = 0;
      for (e = -1; 1 >= e; e++)
        for (f = -1; 1 >= f; f++) 0 !== e && 0 !== f || 0 > b + e || 15 < b + e || 0 > c + f || 15 < c + f || (v = this.getSunLightValue(b + e, d, c + f), v - 1 > q && (q = v - 1));
    }
    for (0 === p ? this.section[l].skyLight[k / 2] = (this.section[l].skyLight[k / 2] & 240) + q : this.section[l].skyLight[k / 2 - 0.5] = (this.section[l].skyLight[k / 2 - 0.5] & 15) + (q << 4), d = this.refreshLight(d), d[4] = 1, 0 === c && (d[3] = 1), 15 === c && (d[5] = 1), 0 === b && (d[1] = 1), 15 === b && (d[7] = 1), l = new Date().getTime(), e = -1; 1 >= e; e++)
      for (f = -1; 1 >= f; f++) 0 !== d[3 * (e + 1) + f + 1] && (b = mcWorld.requestChunk(this.xPos + e, this.zPos + f), void 0 !== b && -1 !== b && -2 !== b && (b.changed = !0, b.init2(0), b.init2(1)));
    b = new Date().getTime(), console.log('czas chunk ' + (b - l));
  }
}, Chunk.prototype.update = function() {
  if (-1 !== this.isInit) {
    var b = this.refreshLight(-1);
    b[4] = 1;
    for (var d = new Date().getTime(), c, e = -1; 1 >= e; e++)
      for (var f = -1; 1 >= f; f++) 0 !== b[3 * (e + 1) + f + 1] && (c = mcWorld.requestChunk(this.xPos + e, this.zPos + f), void 0 !== c && -1 !== c && -2 !== c && (c.changed = !0, c.init2(0), c.init2(1)));
    this.needsUpdate = !1, b = new Date().getTime(), console.log('czas chunk ' + (b - d));
  }
}, Chunk.prototype.setBlock = function(b, d, c, e, f) {
  if (-1 !== this.isInit) {
    this.changed = !0;
    var l = Math.floor(d / 16),
      k = 256 * (d - 16 * l) + 16 * c + b;
    void 0 === this.section[l] && this.newSection(l), this.section[l].blocks[k] = e;
    var p = k % 2;
    if (0 === p ? (this.section[l].data[k / 2] = (this.section[l].data[k / 2] & 240) + f, this.section[l].add[k / 2] &= 240) : (this.section[l].data[k / 2 - 0.5] = (this.section[l].data[k / 2 - 0.5] & 15) + (f << 4), this.section[l].add[k / 2 - 0.5] &= 15), f = 0, 0 === block[e].type || 2 === block[e].type || 3 === block[e].type || 4 === block[e].type) {
      f = this.getSunLightValue(b, d + 1, c), e = 0;
      for (var q = -1; 1 >= q; q++)
        for (var v = -1; 1 >= v; v++) 0 !== q && 0 !== v || 0 > b + q || 15 < b + q || 0 > c + v || 15 < c + v || (e = this.getSunLightValue(b + q, d, c + v), e - 1 > f && (f = e - 1));
    }
    0 === p ? this.section[l].skyLight[k / 2] = (this.section[l].skyLight[k / 2] & 240) + f : this.section[l].skyLight[k / 2 - 0.5] = (this.section[l].skyLight[k / 2 - 0.5] & 15) + (f << 4), this.needsUpdate = !0;
  }
}, Chunk.prototype.getSunLightValue = function(b, d, c) {
  var e = Math.floor(d / 16);
  return d -= 16 * e, void 0 === this.section[e] && this.newSection(e), b = 256 * d + 16 * c + b, 16 > e ? 0 === b % 2 ? this.section[e].skyLight[b / 2] & 15 : this.section[e].skyLight[b / 2 - 0.5] >> 4 & 15 : 16;
}, Chunk.prototype.render = function(b, d, c) {
  (0 !== c || -1 !== this.isInit) && (1 !== c || -1 !== this.isInit1) && (0 === c && 0 === this.isInit ? 1 < iLag && (iLag -= 1, this.init2(0, !0)) : 1 === c && 0 === this.isInit1 ? 1 < iLag && (iLag -= 1, this.init2(1, !0)) : (gl.bindTexture(gl.TEXTURE_2D, blockTexture), void 0 !== this.vbo[c] && void 0 !== this.vbo[c][b] && (gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo[c][b]), gl.vertexAttribPointer(d.vertexPositionAttribute, 3, gl.FLOAT, !1, 36, 0), gl.vertexAttribPointer(d.textureCoordAttribute, 2, gl.FLOAT, !1, 36, 12), gl.vertexAttribPointer(d.lightAttribute, 4, gl.FLOAT, !1, 36, 20), gl.drawArrays(gl.TRIANGLES, 0, this.ivbo[c][b] / 9))));
}, Chunk.prototype.deleteBuffers = function() {
  this.isInit1 = this.isInit = 0, void 0 !== this.vbo && (void 0 !== this.vbo[0] && (this.vbo[0].forEach(function(b) {
    gl.deleteBuffer(b);
  }), this.ivbo[0].forEach(function(b) {
    gpuMem -= b;
  })), void 0 !== this.vbo[1] && (this.vbo[1].forEach(function(b) {
    gl.deleteBuffer(b);
  }), this.ivbo[1].forEach(function(b) {
    gpuMem -= b;
  })));
}, Chunk.prototype.getCache = function(b, d) {
  var c = 0,
    e = 0,
    f = 0;
  this.cacheBiomes = new Float32Array(324), this.cacheHeightMap = new Int32Array(324);
  var l = Chunk.cacheSlight,
    k = Chunk.cacheBlight,
    p = Chunk.cacheData,
    q = Chunk.cacheId,
    v = e = !1,
    s = !1,
    r = !1,
    a = mcWorld.requestChunk(this.xPos + 1, this.zPos);
  if (void 0 === a && (r = !0), -1 === a && (r = !0), -2 === a) return !1;
  var y = mcWorld.requestChunk(this.xPos - 1, this.zPos);
  if (void 0 === y && (s = !0), -1 === y && (s = !0), -2 === y) return !1;
  var I = mcWorld.requestChunk(this.xPos, this.zPos + 1);
  if (void 0 === I && (e = !0), -1 === I && (e = !0), -2 === I) return !1;
  var E = mcWorld.requestChunk(this.xPos, this.zPos - 1);
  if (void 0 === E && (v = !0), -1 === E && (v = !0), -2 === E) return !1;
  for (var t = 0; 16 > t; t++)
    for (var u = 0; 16 > u; u++) f = 0 + 18 * (t + 1) + (u + 1), q[f] = 1, l[f] = 0, k[f] = 0, f = 83268 + 18 * (t + 1) + (u + 1), q[f] = 0, l[f] = 15, k[f] = 0;
  var A = b - 1;
  0 > A && (A = 0);
  var D = d + 1;
  256 < D && (D = 256);
  for (var x = A, n = 0; x < D; x++, n++) {
    for (u = 0; 18 > u; u++) f = 324 * (x + 1) + 0 + u, q[f] = 1, f = 324 * (x + 1) + 306 + u, q[f] = 1;
    for (t = 0; 18 > t; t++) f = 324 * (x + 1) + 18 * t + 0, q[f] = 1, f = 324 * (x + 1) + 18 * t + 17, q[f] = 1;
  }
  for (n = 0; 16 > n; n++)
    for (t = 0; 16 > t; t++) this.cacheBiomes[18 * (n + 1) + t + 1] = this.biomes[16 * n + t], this.cacheHeightMap[18 * (n + 1) + t + 1] = this.heightMap[16 * n + t];
  for (n = 0; 16 > n; n++) this.cacheBiomes[18 * (n + 1) + 0] = this.cacheBiomes[18 * (n + 1) + 1], this.cacheHeightMap[18 * (n + 1) + 0] = this.cacheHeightMap[18 * (n + 1) + 1], this.cacheBiomes[18 * (n + 1) + 17] = this.cacheBiomes[18 * (n + 1) + 16], this.cacheHeightMap[18 * (n + 1) + 17] = this.cacheHeightMap[18 * (n + 1) + 16], this.cacheBiomes[306 + (n + 1)] = this.cacheBiomes[288 + (n + 1)], this.cacheHeightMap[306 + (n + 1)] = this.cacheHeightMap[288 + (n + 1)], this.cacheBiomes[0 + (n + 1)] = this.cacheBiomes[18 + (n + 1)], this.cacheHeightMap[0 + (n + 1)] = this.cacheHeightMap[18 + (n + 1)];
  if (!e) {
    for (x = A, n = 0; x < D; x++, n++) {
      if (0 === x % 16) {
        var M = I.section[x / 16],
          n = 0;
        if (void 0 === M) {
          for (n = x; n < x + 15; n++)
            for (u = 0; 16 > u; u++) f = 324 * (n + 1) + 306 + (u + 1), q[f] = 0, l[f] = 15, k[f] = 0;
          x += 15, n = -1;
          continue;
        }
      }
      for (u = 0; 16 > u; u++) e = 256 * n + 0 + u, f = 324 * (x + 1) + 306 + (u + 1), q[f] = M.blocks[e], c = e % 2, l[f] = M.skyLight[e / 2 - c / 2] >> 4 * c & 15, k[f] = M.blockLight[e / 2 - c / 2] >> 4 * c & 15, p[f] = M.data[e / 2 - c / 2] >> 4 * c & 15 & block[M.blocks[e]].mask;
    }
    for (n = 0; 16 > n; n++) this.cacheBiomes[306 + (n + 1)] = I.biomes[0 + n], this.cacheHeightMap[306 + (n + 1)] = I.heightMap[0 + n];
  }
  if (!v) {
    for (x = A, n = 0; x < D; x++, n++) {
      if (0 === x % 16 && (M = E.section[x / 16], n = 0, void 0 === M)) {
        for (n = x; n < x + 15; n++)
          for (u = 0; 16 > u; u++) f = 324 * (n + 1) + 0 + (u + 1), q[f] = 0, l[f] = 15, k[f] = 0;
        x += 15, n = -1;
        continue;
      }
      for (u = 0; 16 > u; u++) e = 256 * n + 240 + u, f = 324 * (x + 1) + 0 + (u + 1), q[f] = M.blocks[e], c = e % 2, l[f] = M.skyLight[e / 2 - c / 2] >> 4 * c & 15, k[f] = M.blockLight[e / 2 - c / 2] >> 4 * c & 15, p[f] = M.data[e / 2 - c / 2] >> 4 * c & 15 & block[M.blocks[e]].mask;
    }
    for (n = 0; 16 > n; n++) this.cacheBiomes[0 + (n + 1)] = E.biomes[240 + n], this.cacheHeightMap[0 + (n + 1)] = E.heightMap[240 + n];
  }
  if (!s) {
    for (x = A, n = 0; x < D; x++, n++) {
      if (0 === x % 16 && (M = y.section[x / 16], n = 0, void 0 === M)) {
        for (n = x; n < x + 15; n++)
          for (t = 0; 16 > t; t++) f = 324 * (n + 1) + 18 * (t + 1) + 0, q[f] = 0, l[f] = 15, k[f] = 0;
        x += 15, n = -1;
        continue;
      }
      for (t = 0; 16 > t; t++) e = 256 * n + 16 * t + 15, f = 324 * (x + 1) + 18 * (t + 1) + 0, q[f] = M.blocks[e], c = e % 2, l[f] = M.skyLight[e / 2 - c / 2] >> 4 * c & 15, k[f] = M.blockLight[e / 2 - c / 2] >> 4 * c & 15, p[f] = M.data[e / 2 - c / 2] >> 4 * c & 15 & block[M.blocks[e]].mask;
    }
    for (n = 0; 16 > n; n++) this.cacheBiomes[18 * (n + 1) + 0] = y.biomes[16 * n + 15], this.cacheHeightMap[18 * (n + 1) + 0] = y.heightMap[16 * n + 15];
  }
  if (!r) {
    for (x = A, n = 0; x < D; x++, n++) {
      if (0 === x % 16 && (M = a.section[x / 16], n = 0, void 0 === M)) {
        for (n = x; n < x + 15; n++)
          for (t = 0; 16 > t; t++) f = 324 * (n + 1) + 18 * (t + 1) + 17, q[f] = 0, l[f] = 15, k[f] = 0;
        x += 15, n = -1;
        continue;
      }
      for (t = 0; 16 > t; t++) e = 256 * n + 16 * t + 0, f = 324 * (x + 1) + 18 * (t + 1) + 17, q[f] = M.blocks[e], c = e % 2, l[f] = M.skyLight[e / 2 - c / 2] >> 4 * c & 15, k[f] = M.blockLight[e / 2 - c / 2] >> 4 * c & 15, p[f] = M.data[e / 2 - c / 2] >> 4 * c & 15 & block[M.blocks[e]].mask;
    }
    for (n = 0; 16 > n; n++) this.cacheBiomes[18 * (n + 1) + 17] = a.biomes[16 * n + 0], this.cacheHeightMap[18 * (n + 1) + 17] = a.heightMap[16 * n + 0];
  }
  for (x = A, n = 0; x < D; x++, n++) {
    if (0 === x % 16 && (M = this.section[x / 16], n = 0, void 0 === M)) {
      for (t = 0; 16 > t; t++)
        for (u = 0; 16 > u; u++) f = 324 * (x + 1) + 18 * (t + 1) + (u + 1), q[f] = 0, l[f] = 15, k[f] = 0, f = 324 * (x + 16) + 18 * (t + 1) + (u + 1), q[f] = 0, l[f] = 15, k[f] = 0;
      q[324 * (x + 2) + 19] = -1, x += 15, n = -1;
      continue;
    }
    for (t = 0; 16 > t; t++)
      for (u = 0; 16 > u; u += 2) e = 256 * n + 16 * t + u, f = 324 * (x + 1) + 18 * (t + 1) + (u + 1), q[f] = M.blocks[e], q[f + 1] = M.blocks[e + 1], v = M.data[e / 2], p[f] = v & 15 & block[M.blocks[e]].mask, p[f + 1] = v >> 4 & 15 & block[M.blocks[e + 1]].mask, v = M.skyLight[e / 2], l[f] = v & 15, l[f + 1] = v >> 4 & 15, v = M.blockLight[e / 2], k[f] = v & 15, k[f + 1] = v >> 4 & 15;
  }
  for (x = A; x < D; x++) l[324 * (x + 1) + 0] = Math.floor((l[324 * (x + 1) + 18] + l[324 * (x + 1) + 1]) / 2), l[324 * (x + 1) + 306] = Math.floor((l[324 * (x + 1) + 288] + l[324 * (x + 1) + 307]) / 2), l[324 * (x + 1) + 17] = Math.floor((l[324 * (x + 1) + 35] + l[324 * (x + 1) + 16]) / 2), l[324 * (x + 1) + 323] = Math.floor((l[324 * (x + 1) + 305] + l[324 * (x + 1) + 322]) / 2), k[324 * (x + 1) + 0] = Math.floor((k[324 * (x + 1) + 18] + k[324 * (x + 1) + 1]) / 2), k[324 * (x + 1) + 306] = Math.floor((k[324 * (x + 1) + 288] + k[324 * (x + 1) + 307]) / 2), k[324 * (x + 1) + 17] = Math.floor((k[324 * (x + 1) + 35] + k[324 * (x + 1) + 16]) / 2), k[324 * (x + 1) + 323] = Math.floor((k[324 * (x + 1) + 305] + k[324 * (x + 1) + 322]) / 2);
  return !0;
}, Chunk.prototype.getCacheL9 = function() {
  for (var b = 0, d = 0, c = Chunk.cacheSlight9, e = Chunk.cacheBlight9, f = Chunk.cacheId9, l = [], k = -1; 1 >= k; k++)
    for (b = -1; 1 >= b; b++)
      if (l[3 * (k + 1) + b + 1] = mcWorld.requestChunk(this.xPos + k, this.zPos + b), -2 === l[3 * (k + 1) + b + 1]) return !1;
  for (var p = 0; 48 > p; p++)
    for (var q = 0; 48 > q; q++) d = 48 * p + q, f[d] = 1, c[d] = 0, e[d] = 0, d = 592128 + 48 * p + q, f[d] = 0, c[d] = 15, e[d] = 0, d = 589824 + 48 * p + q, f[d] = 0, c[d] = 15, e[d] = 0;
  for (var v, s = 0; 2 >= s; s++)
    for (var r = 0; 2 >= r; r++)
      if (v = l[3 * s + r], void 0 !== v && -1 !== v) {
        for (p = 0; 16 > p; p++)
          for (q = 0; 16 > q; q++) Chunk.cacheHeightMap9[48 * (16 * r + p) + 16 * s + q] = v.heightMap[16 * p + q];
        for (var a = k = 0; 256 > k; k++, a++) {
          if (0 === k % 16) {
            var y = v.section[k / 16],
              a = 0;
            if (void 0 === y) {
              for (p = 0; 16 > p; p++)
                for (q = 0; 16 > q; q++) d = 2304 * k + 48 * (16 * r + p) + (16 * s + q), f[d] = 0, c[d] = 0, e[d] = 0, d = 2304 * (k + 15) + 48 * (16 * r + p) + (16 * s + q), f[d] = 0, c[d] = 0, e[d] = 0;
              k += 15, a = -1;
              continue;
            }
          }
          for (var I = 0, p = 0; 16 > p; p++)
            for (q = 0; 16 > q; q += 2) b = 256 * a + 16 * p + q, d = 2304 * k + 48 * (16 * r + p) + (16 * s + q), f[d] = y.blocks[b], f[d + 1] = y.blocks[b + 1], I = y.skyLight[b / 2], c[d] = I & 15, c[d + 1] = I >> 4 & 15, I = y.blockLight[b / 2], e[d] = I & 15, e[d + 1] = I >> 4 & 15;
        }
      }
  return !0;
}, Chunk.prototype.init2 = function(b) {
  if (0 === b) var d = settings.waterlevel,
    c = 256;
  else d = 0, c = settings.waterlevel;
  if (0 === this.lightPopulated && settings.lightInit) {
    if (!this.refreshLight(-1, !0)) return !1;
    this.lightPopulated = 1;
  }
  if (!this.getCache(d, c)) return !1;
  0 === b ? this.isInit = -1 : this.isInit1 = -1;
  var e = Chunk.cacheSlight,
    f = Chunk.cacheBlight,
    l = Chunk.cacheData,
    k = Chunk.cacheId,
    p = 0,
    q = 0,
    v = 0,
    s = 0,
    r = 0,
    a, y = punkty1;
  y[0].o = 0, y[1].o = 0, y[2].o = 0;
  var I = y[3].o = 0,
    E = 0,
    t = 0,
    u = E = 0,
    A = 0,
    D = 0,
    x = 0,
    n, M = 0,
    K = 0,
    Y = 0,
    U = 0,
    w = 0,
    S = 0,
    L = 0,
    N = 0,
    O = 0,
    Q = 0,
    T = 0,
    R = 0,
    V = !1,
    J = !1,
    Z = !1,
    G = !1,
    H = !1,
    W = !1,
    z = 0,
    $ = 0,
    aa = 0,
    X = 0,
    m = 0,
    rb, sb, Ka = 0,
    La = 0,
    Ma = 0,
    Na = 0,
    Oa = 0,
    Pa = 0;
  0 !== this.mxaVal && this.mxaVal + 1 < c && (c = this.mxaVal + 1), void 0 === this.section[Math.floor(d / 16)] && (d = 16 * Math.floor(d / 16) + 16);
  for (var F = d; F < c; F++)
    if (0 === F % 16 && -1 === k[324 * (F + 2) + 19]) F += 15;
    else
      for (var B = 0; 16 > B; B++)
        for (var C = 0; 16 > C; C++)
          if (W = H = G = Z = J = V = !1, I = 324 * (F + 1) + 18 * (B + 1) + (C + 1), q = block[k[I]].type, 0 !== q) {
            var E = I + 18,
              t = I - 18,
              u = I - 1,
              A = I + 1,
              D = I + 324,
              x = I - 324,
              tb = block[k[D]].type,
              ub = block[k[x]].type,
              ja = block[k[u]].type,
              ha = block[k[A]].type,
              ia = block[k[t]].type,
              ka = block[k[E]].type;
            if (rb = this.xPos % 5, 0 > rb && (rb += 5), sb = this.zPos % 5, 0 > sb && (sb += 5), n = 65536 * (0 + F) + 256 * (16 * B + C) + 10 * (5 * rb + sb), 1 === q || 2 === q || 4 === q || 6 === q) 1 !== tb && (Y = e[D], O = f[D], J = !0), 1 !== ub && (U = e[x], Q = f[x], V = !0), 1 !== ia && (K = e[t], N = f[t], W = !0), 1 !== ka && (M = e[E], L = f[E], H = !0), 1 !== ja && (w = e[u], T = f[u], Z = !0), 1 !== ha && (S = e[A], R = f[A], G = !0);
            else if (300 < q) tb !== q && (Y = e[D], O = f[D], J = !0), 1 !== ub && ub !== q && (U = e[x], Q = f[x], V = !0), ia !== q && (K = e[t], N = f[t], W = !0), ka !== q && (M = e[E], L = f[E], H = !0), ja !== q && (w = e[u], T = f[u], Z = !0), ha !== q && (S = e[A], R = f[A], G = !0);
            else if (300 === q)(tb !== q || l[D] !== l[I]) && (Y = e[D], O = f[D], J = !0), (1 !== ub && ub !== q || l[x] !== l[I]) && (U = e[x], Q = f[x], V = !0), (ia !== q || l[t] !== l[I]) && (K = e[t], N = f[t], W = !0), (ka !== q || l[E] !== l[I]) && (M = e[E], L = f[E], H = !0), (ja !== q || l[u] !== l[I]) && (w = e[u], T = f[u], Z = !0), (ha !== q || l[A] !== l[I]) && (S = e[A], R = f[A], G = !0);
            else continue;
            if ((Z || G || W || H || V || J) && (2 === q && (G = W = H = V = J = Z = Z || G || W || H || V || J), s = k[I], v = l[I], r = void 0 === block[s][v] ? block[s][0] : block[s][v], void 0 !== r.shapeType && 0 !== r.shapeType))
              if (1 === r.shapeType || 11 === r.shapeType) {
                1 === r.shapeType ? (Ka = 1, La = 2, Ma = 3, Na = 4, Oa = 6, Pa = 5) : Pa = Oa = Na = Ma = La = Ka = 0, p = r.drawLevel, a = y[p];
                var h = r.shape,
                  P = h,
                  z = 0;
                if (0 < r.useBiomeColor && (z = this.getBiomeColor(C, B, r.useBiomeColor - 1)), Z) {
                  if (a = 8 < w && 0 === p ? y[p + 1] : y[p], 0 === block.lightSource[s]) var la = Math.floor((w + e[u - 18] + e[u - 324 - 18] + e[u - 324]) / 4),
                    Qa = Math.floor((w + e[u - 324] + e[u - 324 + 18] + e[u + 18]) / 4),
                    ma = Math.floor((w + e[u + 18] + e[u + 324 + 18] + e[u + 324]) / 4),
                    Ra = Math.floor((w + e[u + 324] + e[u + 324 - 18] + e[u - 18]) / 4),
                    na = Math.floor((T + f[u - 18] + f[u - 324 - 18] + f[u - 324]) / 4),
                    Sa = Math.floor((T + f[u - 324] + f[u - 324 + 18] + f[u + 18]) / 4),
                    oa = Math.floor((T + f[u + 18] + f[u + 324 + 18] + f[u + 324]) / 4),
                    Ta = Math.floor((T + f[u + 324] + f[u + 324 - 18] + f[u - 18]) / 4);
                  else la = Qa = ma = Ra = na = Sa = oa = Ta = 15;
                  var g = 0;
                  a.d[a.o++] = 16 * this.xPos + C + P.front[g], a.d[a.o++] = 0 + F + P.front[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * la + na, a.d[a.o++] = n + Ka, a.d[a.o++] = 0.8, a.d[a.o++] = z, g = 5, a.d[a.o++] = 16 * this.xPos + C + P.front[g], a.d[a.o++] = 0 + F + P.front[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * Qa + Sa, a.d[a.o++] = n + Ka, a.d[a.o++] = 0.8, a.d[a.o++] = z, g = 10, a.d[a.o++] = 16 * this.xPos + C + P.front[g], a.d[a.o++] = 0 + F + P.front[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * ma + oa, a.d[a.o++] = n + Ka, a.d[a.o++] = 0.8, a.d[a.o++] = z, g = 15, a.d[a.o++] = 16 * this.xPos + C + P.front[g], a.d[a.o++] = 0 + F + P.front[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * la + na, a.d[a.o++] = n + Ka, a.d[a.o++] = 0.8, a.d[a.o++] = z, g = 20, a.d[a.o++] = 16 * this.xPos + C + P.front[g], a.d[a.o++] = 0 + F + P.front[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * ma + oa, a.d[a.o++] = n + Ka, a.d[a.o++] = 0.8, a.d[a.o++] = z, g = 25, a.d[a.o++] = 16 * this.xPos + C + P.front[g], a.d[a.o++] = 0 + F + P.front[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * Ra + Ta, a.d[a.o++] = n + Ka, a.d[a.o++] = 0.8, a.d[a.o++] = z;
                }
                if (G) {
                  if (a = 8 < S && 0 === p ? y[p + 1] : y[p], 0 === block.lightSource[s]) var pa = Math.floor((S + e[A - 18] + e[A - 324 - 18] + e[A - 324]) / 4),
                    Ua = Math.floor((S + e[A - 324] + e[A - 324 + 18] + e[A + 18]) / 4),
                    qa = Math.floor((S + e[A + 18] + e[A + 324 + 18] + e[A + 324]) / 4),
                    Va = Math.floor((S + e[A + 324] + e[A + 324 - 18] + e[A - 18]) / 4),
                    ra = Math.floor((R + f[A - 18] + f[A - 324 - 18] + f[A - 324]) / 4),
                    Wa = Math.floor((R + f[A - 324] + f[A - 324 + 18] + f[A + 18]) / 4),
                    sa = Math.floor((R + f[A + 18] + f[A + 324 + 18] + f[A + 324]) / 4),
                    Xa = Math.floor((R + f[A + 324] + f[A + 324 - 18] + f[A - 18]) / 4);
                  else pa = Ua = qa = Va = ra = Wa = sa = Xa = 15;
                  g = 0, a.d[a.o++] = 16 * this.xPos + C + P.back[g], a.d[a.o++] = 0 + F + P.back[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * qa + sa, a.d[a.o++] = n + La, a.d[a.o++] = 0.8, a.d[a.o++] = z, g = 5, a.d[a.o++] = 16 * this.xPos + C + P.back[g], a.d[a.o++] = 0 + F + P.back[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * pa + ra, a.d[a.o++] = n + La, a.d[a.o++] = 0.8, a.d[a.o++] = z, g = 10, a.d[a.o++] = 16 * this.xPos + C + P.back[g], a.d[a.o++] = 0 + F + P.back[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * Va + Xa, a.d[a.o++] = n + La, a.d[a.o++] = 0.8, a.d[a.o++] = z, g = 15, a.d[a.o++] = 16 * this.xPos + C + P.back[g], a.d[a.o++] = 0 + F + P.back[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * pa + ra, a.d[a.o++] = n + La, a.d[a.o++] = 0.8, a.d[a.o++] = z, g = 20, a.d[a.o++] = 16 * this.xPos + C + P.back[g], a.d[a.o++] = 0 + F + P.back[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * qa + sa, a.d[a.o++] = n + La, a.d[a.o++] = 0.8, a.d[a.o++] = z, g = 25, a.d[a.o++] = 16 * this.xPos + C + P.back[g], a.d[a.o++] = 0 + F + P.back[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * Ua + Wa, a.d[a.o++] = n + La, a.d[a.o++] = 0.8, a.d[a.o++] = z;
                }
                if (W) {
                  if (a = 8 < K && 0 === p ? y[p + 1] : y[p], 0 === block.lightSource[s]) var ta = Math.floor((K + e[t - 1] + e[t - 324 - 1] + e[t - 324]) / 4),
                    Ya = Math.floor((K + e[t - 324] + e[t - 324 + 1] + e[t + 1]) / 4),
                    ua = Math.floor((K + e[t + 1] + e[t + 324 + 1] + e[t + 324]) / 4),
                    Za = Math.floor((K + e[t + 324] + e[t + 324 - 1] + e[t - 1]) / 4),
                    va = Math.floor((N + f[t - 1] + f[t - 324 - 1] + f[t - 324]) / 4),
                    $a = Math.floor((N + f[t - 324] + f[t - 324 + 1] + f[t + 1]) / 4),
                    wa = Math.floor((N + f[t + 1] + f[t + 324 + 1] + f[t + 324]) / 4),
                    ab = Math.floor((N + f[t + 324] + f[t + 324 - 1] + f[t - 1]) / 4);
                  else ta = Ya = ua = Za = va = $a = wa = ab = 15;
                  g = 0, a.d[a.o++] = 16 * this.xPos + C + P.right[g], a.d[a.o++] = 0 + F + P.right[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * ua + wa, a.d[a.o++] = n + Ma, a.d[a.o++] = 0.55, a.d[a.o++] = z, g = 5, a.d[a.o++] = 16 * this.xPos + C + P.right[g], a.d[a.o++] = 0 + F + P.right[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * ta + va, a.d[a.o++] = n + Ma, a.d[a.o++] = 0.55, a.d[a.o++] = z, g = 10, a.d[a.o++] = 16 * this.xPos + C + P.right[g], a.d[a.o++] = 0 + F + P.right[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * Za + ab, a.d[a.o++] = n + Ma, a.d[a.o++] = 0.55, a.d[a.o++] = z, g = 15, a.d[a.o++] = 16 * this.xPos + C + P.right[g], a.d[a.o++] = 0 + F + P.right[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * ua + wa, a.d[a.o++] = n + Ma, a.d[a.o++] = 0.55, a.d[a.o++] = z, g = 20, a.d[a.o++] = 16 * this.xPos + C + P.right[g], a.d[a.o++] = 0 + F + P.right[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * Ya + $a, a.d[a.o++] = n + Ma, a.d[a.o++] = 0.55, a.d[a.o++] = z, g = 25, a.d[a.o++] = 16 * this.xPos + C + P.right[g], a.d[a.o++] = 0 + F + P.right[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * ta + va, a.d[a.o++] = n + Ma, a.d[a.o++] = 0.55, a.d[a.o++] = z;
                }
                if (H) {
                  if (a = 8 < M && 0 === p ? y[p + 1] : y[p], 0 === block.lightSource[s]) var bb = Math.floor((M + e[E - 1] + e[E - 324 - 1] + e[E - 324]) / 4),
                    xa = Math.floor((M + e[E - 324] + e[E - 324 + 1] + e[E + 1]) / 4),
                    cb = Math.floor((M + e[E + 1] + e[E + 324 + 1] + e[E + 324]) / 4),
                    ya = Math.floor((M + e[E + 324] + e[E + 324 - 1] + e[E - 1]) / 4),
                    db = Math.floor((L + f[E - 1] + f[E - 324 - 1] + f[E - 324]) / 4),
                    za = Math.floor((L + f[E - 324] + f[E - 324 + 1] + f[E + 1]) / 4),
                    eb = Math.floor((L + f[E + 1] + f[E + 324 + 1] + f[E + 324]) / 4),
                    Aa = Math.floor((L + f[E + 324] + f[E + 324 - 1] + f[E - 1]) / 4);
                  else bb = xa = cb = ya = db = za = eb = Aa = 15;
                  g = 0, a.d[a.o++] = 16 * this.xPos + C + P.left[g], a.d[a.o++] = 0 + F + P.left[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * ya + Aa, a.d[a.o++] = n + Na, a.d[a.o++] = 0.55, a.d[a.o++] = z, g = 5, a.d[a.o++] = 16 * this.xPos + C + P.left[g], a.d[a.o++] = 0 + F + P.left[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * bb + db, a.d[a.o++] = n + Na, a.d[a.o++] = 0.55, a.d[a.o++] = z, g = 10, a.d[a.o++] = 16 * this.xPos + C + P.left[g], a.d[a.o++] = 0 + F + P.left[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * xa + za, a.d[a.o++] = n + Na, a.d[a.o++] = 0.55, a.d[a.o++] = z, g = 15, a.d[a.o++] = 16 * this.xPos + C + P.left[g], a.d[a.o++] = 0 + F + P.left[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * cb + eb, a.d[a.o++] = n + Na, a.d[a.o++] = 0.55, a.d[a.o++] = z, g = 20, a.d[a.o++] = 16 * this.xPos + C + P.left[g], a.d[a.o++] = 0 + F + P.left[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * ya + Aa, a.d[a.o++] = n + Na, a.d[a.o++] = 0.55, a.d[a.o++] = z, g = 25, a.d[a.o++] = 16 * this.xPos + C + P.left[g], a.d[a.o++] = 0 + F + P.left[g + 1], a.d[a.o++] = 16 * this.zPos + B + P.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * xa + za, a.d[a.o++] = n + Na, a.d[a.o++] = 0.55, a.d[a.o++] = z;
                }
                if (V) {
                  if (a = y[p], 0 === block.lightSource[s]) var Ba = Math.floor((U + e[x - 1] + e[x - 18 - 1] + e[x - 18]) / 4),
                    fb = Math.floor((U + e[x - 18] + e[x - 18 + 1] + e[x + 1]) / 4),
                    Ca = Math.floor((U + e[x + 1] + e[x + 18 + 1] + e[x + 18]) / 4),
                    gb = Math.floor((U + e[x + 18] + e[x + 18 - 1] + e[x - 1]) / 4),
                    Da = Math.floor((Q + f[x - 1] + f[x - 18 - 1] + f[x - 18]) / 4),
                    hb = Math.floor((Q + f[x - 18] + f[x - 18 + 1] + f[x + 1]) / 4),
                    Ea = Math.floor((Q + f[x + 1] + f[x + 18 + 1] + f[x + 18]) / 4),
                    ib = Math.floor((Q + f[x + 18] + f[x + 18 - 1] + f[x - 1]) / 4);
                  else Ba = fb = Ca = gb = Da = hb = Ea = ib = 15;
                  g = 0, a.d[a.o++] = 16 * this.xPos + C + h.bottom[g], a.d[a.o++] = 0 + F + h.bottom[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.bottom[g + 2], a.d[a.o++] = h.bottom[g + 3], a.d[a.o++] = h.bottom[g + 4], a.d[a.o++] = 100 * Ca + Ea, a.d[a.o++] = n + Pa, a.d[a.o++] = 1, a.d[a.o++] = z, g = 5, a.d[a.o++] = 16 * this.xPos + C + h.bottom[g], a.d[a.o++] = 0 + F + h.bottom[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.bottom[g + 2], a.d[a.o++] = h.bottom[g + 3], a.d[a.o++] = h.bottom[g + 4], a.d[a.o++] = 100 * Ba + Da, a.d[a.o++] = n + Pa, a.d[a.o++] = 1, a.d[a.o++] = z, g = 10, a.d[a.o++] = 16 * this.xPos + C + h.bottom[g], a.d[a.o++] = 0 + F + h.bottom[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.bottom[g + 2], a.d[a.o++] = h.bottom[g + 3], a.d[a.o++] = h.bottom[g + 4], a.d[a.o++] = 100 * fb + hb, a.d[a.o++] = n + Pa, a.d[a.o++] = 1, a.d[a.o++] = z, g = 15, a.d[a.o++] = 16 * this.xPos + C + h.bottom[g], a.d[a.o++] = 0 + F + h.bottom[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.bottom[g + 2], a.d[a.o++] = h.bottom[g + 3], a.d[a.o++] = h.bottom[g + 4], a.d[a.o++] = 100 * Ca + Ea, a.d[a.o++] = n + Pa, a.d[a.o++] = 1, a.d[a.o++] = z, g = 20, a.d[a.o++] = 16 * this.xPos + C + h.bottom[g], a.d[a.o++] = 0 + F + h.bottom[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.bottom[g + 2], a.d[a.o++] = h.bottom[g + 3], a.d[a.o++] = h.bottom[g + 4], a.d[a.o++] = 100 * gb + ib, a.d[a.o++] = n + Pa, a.d[a.o++] = 1, a.d[a.o++] = z, g = 25, a.d[a.o++] = 16 * this.xPos + C + h.bottom[g], a.d[a.o++] = 0 + F + h.bottom[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.bottom[g + 2], a.d[a.o++] = h.bottom[g + 3], a.d[a.o++] = h.bottom[g + 4], a.d[a.o++] = 100 * Ba + Da, a.d[a.o++] = n + Pa, a.d[a.o++] = 1, a.d[a.o++] = z;
                }
                if (J) {
                  if (a = 8 < Y && 0 === p ? y[p + 1] : y[p], 0 === block.lightSource[s]) var Fa = Math.floor((Y + e[D - 1] + e[D - 18 - 1] + e[D - 18]) / 4),
                    jb = Math.floor((Y + e[D - 18] + e[D - 18 + 1] + e[D + 1]) / 4),
                    Ga = Math.floor((Y + e[D + 1] + e[D + 18 + 1] + e[D + 18]) / 4),
                    kb = Math.floor((Y + e[D + 18] + e[D + 18 - 1] + e[D - 1]) / 4),
                    Ha = Math.floor((O + f[D - 1] + f[D - 18 - 1] + f[D - 18]) / 4),
                    lb = Math.floor((O + f[D - 18] + f[D - 18 + 1] + f[D + 1]) / 4),
                    Ia = Math.floor((O + f[D + 1] + f[D + 18 + 1] + f[D + 18]) / 4),
                    mb = Math.floor((O + f[D + 18] + f[D + 18 - 1] + f[D - 1]) / 4);
                  else Fa = jb = Ga = kb = Ha = lb = Ia = mb = 15;
                  g = 0, a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * Ga + Ia, a.d[a.o++] = n + Oa, a.d[a.o++] = 1, a.d[a.o++] = z, g = 5, a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * jb + lb, a.d[a.o++] = n + Oa, a.d[a.o++] = 1, a.d[a.o++] = z, g = 10, a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * Fa + Ha, a.d[a.o++] = n + Oa, a.d[a.o++] = 1, a.d[a.o++] = z, g = 15, a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * Ga + Ia, a.d[a.o++] = n + Oa, a.d[a.o++] = 1, a.d[a.o++] = z, g = 20, a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * Fa + Ha, a.d[a.o++] = n + Oa, a.d[a.o++] = 1, a.d[a.o++] = z, g = 25, a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * kb + mb, a.d[a.o++] = n + Oa, a.d[a.o++] = 1, a.d[a.o++] = z;
                }
              } else if (2 === r.shapeType) {
              if (p = r.drawLevel, a = y[p], h = r.shape, Z)
                for (g = 0; g < h.front.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.front[g], a.d[a.o++] = 0 + F + h.front[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * w + T, a.d[a.o++] = n + 1, a.d[a.o++] = 0.8, a.d[a.o++] = 0;
              if (G)
                for (g = 0; g < h.back.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.back[g], a.d[a.o++] = 0 + F + h.back[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * S + R, a.d[a.o++] = n + 2, a.d[a.o++] = 0.8, a.d[a.o++] = 0;
              if (W)
                for (g = 0; g < h.right.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.right[g], a.d[a.o++] = 0 + F + h.right[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * K + N, a.d[a.o++] = n + 3, a.d[a.o++] = 0.8, a.d[a.o++] = 0;
              if (H)
                for (g = 0; g < h.left.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.left[g], a.d[a.o++] = 0 + F + h.left[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * M + L, a.d[a.o++] = n + 4, a.d[a.o++] = 0.8, a.d[a.o++] = 0;
            } else if (3 === r.shapeType) {
              p = r.drawLevel, a = y[p];
              var h = r.shape,
                w = Math.floor((w + S + K + M + Y) / 5),
                T = Math.floor((T + R + N + L + O) / 5),
                z = 0,
                Hb = r.normal;
              if (0 < r.useBiomeColor && (z = this.getBiomeColor(C, B, r.useBiomeColor - 1)), Z || G || W || H || J || V)
                for (var qb in h)
                  for (g = 0; g < h[qb].length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h[qb][g], a.d[a.o++] = 0 + F + h[qb][g + 1], a.d[a.o++] = 16 * this.zPos + B + h[qb][g + 2], a.d[a.o++] = h[qb][g + 3], a.d[a.o++] = h[qb][g + 4], a.d[a.o++] = 100 * w + T, a.d[a.o++] = n + 0, a.d[a.o++] = Hb, a.d[a.o++] = z;
            } else if (4 === r.shapeType) {
              if (p = r.drawLevel, a = y[p], 78 === k[D] && (r = block[s][1]), h = r.shape, 0 < r.useBiomeColor ? (z = this.getBiomeColor(C, B, r.useBiomeColor - 1), $ = this.getBiomeColor1(C, B, r.useBiomeColor - 1), aa = this.getBiomeColor2(C, B, r.useBiomeColor - 1), X = this.getBiomeColor3(C, B, r.useBiomeColor - 1), m = this.getBiomeColor4(C, B, r.useBiomeColor - 1)) : m = X = aa = $ = z = 0, Z) {
                if (a = 8 < w && 0 === p ? y[p + 1] : y[p], 4 === r.shapeType)
                  for (g = 0; g < h.front2.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.front2[g], a.d[a.o++] = 0 + F + h.front2[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.front2[g + 2], a.d[a.o++] = h.front2[g + 3], a.d[a.o++] = h.front2[g + 4], a.d[a.o++] = 100 * w + T, a.d[a.o++] = n + 1, a.d[a.o++] = 0.8, a.d[a.o++] = z;
                la = Math.floor((w + e[u - 18] + e[u - 324 - 18] + e[u - 324]) / 4), Qa = Math.floor((w + e[u - 324] + e[u - 324 + 18] + e[u + 18]) / 4), ma = Math.floor((w + e[u + 18] + e[u + 324 + 18] + e[u + 324]) / 4), Ra = Math.floor((w + e[u + 324] + e[u + 324 - 18] + e[u - 18]) / 4), na = Math.floor((T + f[u - 18] + f[u - 324 - 18] + f[u - 324]) / 4), Sa = Math.floor((T + f[u - 324] + f[u - 324 + 18] + f[u + 18]) / 4), oa = Math.floor((T + f[u + 18] + f[u + 324 + 18] + f[u + 324]) / 4), Ta = Math.floor((T + f[u + 324] + f[u + 324 - 18] + f[u - 18]) / 4), g = 0, a.d[a.o++] = 16 * this.xPos + C + h.front[g], a.d[a.o++] = 0 + F + h.front[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * la + na, a.d[a.o++] = n + 1, a.d[a.o++] = 0.8, a.d[a.o++] = 0, g = 5, a.d[a.o++] = 16 * this.xPos + C + h.front[g], a.d[a.o++] = 0 + F + h.front[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * Qa + Sa, a.d[a.o++] = n + 1, a.d[a.o++] = 0.8, a.d[a.o++] = 0, g = 10, a.d[a.o++] = 16 * this.xPos + C + h.front[g], a.d[a.o++] = 0 + F + h.front[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * ma + oa, a.d[a.o++] = n + 1, a.d[a.o++] = 0.8, a.d[a.o++] = 0, g = 15, a.d[a.o++] = 16 * this.xPos + C + h.front[g], a.d[a.o++] = 0 + F + h.front[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * la + na, a.d[a.o++] = n + 1, a.d[a.o++] = 0.8, a.d[a.o++] = 0, g = 20, a.d[a.o++] = 16 * this.xPos + C + h.front[g], a.d[a.o++] = 0 + F + h.front[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * ma + oa, a.d[a.o++] = n + 1, a.d[a.o++] = 0.8, a.d[a.o++] = 0, g = 25, a.d[a.o++] = 16 * this.xPos + C + h.front[g], a.d[a.o++] = 0 + F + h.front[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * Ra + Ta, a.d[a.o++] = n + 1, a.d[a.o++] = 0.8, a.d[a.o++] = 0;
              }
              if (G) {
                if (a = 8 < w && 0 === p ? y[p + 1] : y[p], 4 === r.shapeType)
                  for (g = 0; g < h.back2.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.back2[g], a.d[a.o++] = 0 + F + h.back2[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.back2[g + 2], a.d[a.o++] = h.back2[g + 3], a.d[a.o++] = h.back2[g + 4], a.d[a.o++] = 100 * S + R, a.d[a.o++] = n + 2, a.d[a.o++] = 0.8, a.d[a.o++] = z;
                pa = Math.floor((S + e[A - 18] + e[A - 324 - 18] + e[A - 324]) / 4), Ua = Math.floor((S + e[A - 324] + e[A - 324 + 18] + e[A + 18]) / 4), qa = Math.floor((S + e[A + 18] + e[A + 324 + 18] + e[A + 324]) / 4), Va = Math.floor((S + e[A + 324] + e[A + 324 - 18] + e[A - 18]) / 4), ra = Math.floor((R + f[A - 18] + f[A - 324 - 18] + f[A - 324]) / 4), Wa = Math.floor((R + f[A - 324] + f[A - 324 + 18] + f[A + 18]) / 4), sa = Math.floor((R + f[A + 18] + f[A + 324 + 18] + f[A + 324]) / 4), Xa = Math.floor((R + f[A + 324] + f[A + 324 - 18] + f[A - 18]) / 4), g = 0, a.d[a.o++] = 16 * this.xPos + C + h.back[g], a.d[a.o++] = 0 + F + h.back[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * qa + sa, a.d[a.o++] = n + 2, a.d[a.o++] = 0.8, a.d[a.o++] = 0, g = 5, a.d[a.o++] = 16 * this.xPos + C + h.back[g], a.d[a.o++] = 0 + F + h.back[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * pa + ra, a.d[a.o++] = n + 2, a.d[a.o++] = 0.8, a.d[a.o++] = 0, g = 10, a.d[a.o++] = 16 * this.xPos + C + h.back[g], a.d[a.o++] = 0 + F + h.back[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * Va + Xa, a.d[a.o++] = n + 2, a.d[a.o++] = 0.8, a.d[a.o++] = 0, g = 15, a.d[a.o++] = 16 * this.xPos + C + h.back[g], a.d[a.o++] = 0 + F + h.back[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * pa + ra, a.d[a.o++] = n + 2, a.d[a.o++] = 0.8, a.d[a.o++] = 0, g = 20, a.d[a.o++] = 16 * this.xPos + C + h.back[g], a.d[a.o++] = 0 + F + h.back[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * qa + sa, a.d[a.o++] = n + 2, a.d[a.o++] = 0.8, a.d[a.o++] = 0, g = 25, a.d[a.o++] = 16 * this.xPos + C + h.back[g], a.d[a.o++] = 0 + F + h.back[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * Ua + Wa, a.d[a.o++] = n + 2, a.d[a.o++] = 0.8, a.d[a.o++] = 0;
              }
              if (W) {
                if (a = 8 < w && 0 === p ? y[p + 1] : y[p], 4 === r.shapeType)
                  for (g = 0; g < h.right2.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.right2[g], a.d[a.o++] = 0 + F + h.right2[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.right2[g + 2], a.d[a.o++] = h.right2[g + 3], a.d[a.o++] = h.right2[g + 4], a.d[a.o++] = 100 * K + N, a.d[a.o++] = n + 3, a.d[a.o++] = 0.55, a.d[a.o++] = z;
                ta = Math.floor((K + e[t - 1] + e[t - 324 - 1] + e[t - 324]) / 4), Ya = Math.floor((K + e[t - 324] + e[t - 324 + 1] + e[t + 1]) / 4), ua = Math.floor((K + e[t + 1] + e[t + 324 + 1] + e[t + 324]) / 4), Za = Math.floor((K + e[t + 324] + e[t + 324 - 1] + e[t - 1]) / 4), va = Math.floor((N + f[t - 1] + f[t - 324 - 1] + f[t - 324]) / 4), $a = Math.floor((N + f[t - 324] + f[t - 324 + 1] + f[t + 1]) / 4), wa = Math.floor((N + f[t + 1] + f[t + 324 + 1] + f[t + 324]) / 4), ab = Math.floor((N + f[t + 324] + f[t + 324 - 1] + f[t - 1]) / 4), g = 0, a.d[a.o++] = 16 * this.xPos + C + h.right[g], a.d[a.o++] = 0 + F + h.right[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * ua + wa, a.d[a.o++] = n + 3, a.d[a.o++] = 0.55, a.d[a.o++] = 0, g = 5, a.d[a.o++] = 16 * this.xPos + C + h.right[g], a.d[a.o++] = 0 + F + h.right[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * ta + va, a.d[a.o++] = n + 3, a.d[a.o++] = 0.55, a.d[a.o++] = 0, g = 10, a.d[a.o++] = 16 * this.xPos + C + h.right[g], a.d[a.o++] = 0 + F + h.right[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * Za + ab, a.d[a.o++] = n + 3, a.d[a.o++] = 0.55, a.d[a.o++] = 0, g = 15, a.d[a.o++] = 16 * this.xPos + C + h.right[g], a.d[a.o++] = 0 + F + h.right[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * ua + wa, a.d[a.o++] = n + 3, a.d[a.o++] = 0.55, a.d[a.o++] = 0, g = 20, a.d[a.o++] = 16 * this.xPos + C + h.right[g], a.d[a.o++] = 0 + F + h.right[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * Ya + $a, a.d[a.o++] = n + 3, a.d[a.o++] = 0.55, a.d[a.o++] = 0, g = 25, a.d[a.o++] = 16 * this.xPos + C + h.right[g], a.d[a.o++] = 0 + F + h.right[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * ta + va, a.d[a.o++] = n + 3, a.d[a.o++] = 0.55, a.d[a.o++] = 0;
              }
              if (H) {
                if (a = 8 < w && 0 === p ? y[p + 1] : y[p], 4 === r.shapeType)
                  for (g = 0; g < h.left2.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.left2[g], a.d[a.o++] = 0 + F + h.left2[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.left2[g + 2], a.d[a.o++] = h.left2[g + 3], a.d[a.o++] = h.left2[g + 4], a.d[a.o++] = 100 * M + L, a.d[a.o++] = n + 4, a.d[a.o++] = 0.55, a.d[a.o++] = z;
                bb = Math.floor((M + e[E - 1] + e[E - 324 - 1] + e[E - 324]) / 4), xa = Math.floor((M + e[E - 324] + e[E - 324 + 1] + e[E + 1]) / 4), cb = Math.floor((M + e[E + 1] + e[E + 324 + 1] + e[E + 324]) / 4), ya = Math.floor((M + e[E + 324] + e[E + 324 - 1] + e[E - 1]) / 4), db = Math.floor((L + f[E - 1] + f[E - 324 - 1] + f[E - 324]) / 4), za = Math.floor((L + f[E - 324] + f[E - 324 + 1] + f[E + 1]) / 4), eb = Math.floor((L + f[E + 1] + f[E + 324 + 1] + f[E + 324]) / 4), Aa = Math.floor((L + f[E + 324] + f[E + 324 - 1] + f[E - 1]) / 4), g = 0, a.d[a.o++] = 16 * this.xPos + C + h.left[g], a.d[a.o++] = 0 + F + h.left[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * ya + Aa, a.d[a.o++] = n + 4, a.d[a.o++] = 0.55, a.d[a.o++] = 0, g = 5, a.d[a.o++] = 16 * this.xPos + C + h.left[g], a.d[a.o++] = 0 + F + h.left[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * bb + db, a.d[a.o++] = n + 4, a.d[a.o++] = 0.55, a.d[a.o++] = 0, g = 10, a.d[a.o++] = 16 * this.xPos + C + h.left[g], a.d[a.o++] = 0 + F + h.left[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * xa + za, a.d[a.o++] = n + 4, a.d[a.o++] = 0.55, a.d[a.o++] = 0, g = 15, a.d[a.o++] = 16 * this.xPos + C + h.left[g], a.d[a.o++] = 0 + F + h.left[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * cb + eb, a.d[a.o++] = n + 4, a.d[a.o++] = 0.55, a.d[a.o++] = 0, g = 20, a.d[a.o++] = 16 * this.xPos + C + h.left[g], a.d[a.o++] = 0 + F + h.left[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * ya + Aa, a.d[a.o++] = n + 4, a.d[a.o++] = 0.55, a.d[a.o++] = 0, g = 25, a.d[a.o++] = 16 * this.xPos + C + h.left[g], a.d[a.o++] = 0 + F + h.left[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * xa + za, a.d[a.o++] = n + 4, a.d[a.o++] = 0.55, a.d[a.o++] = 0;
              }
              V && (a = y[p], Ba = Math.floor((U + e[x - 1] + e[x - 18 - 1] + e[x - 18]) / 4), fb = Math.floor((U + e[x - 18] + e[x - 18 + 1] + e[x + 1]) / 4), Ca = Math.floor((U + e[x + 1] + e[x + 18 + 1] + e[x + 18]) / 4), gb = Math.floor((U + e[x + 18] + e[x + 18 - 1] + e[x - 1]) / 4), Da = Math.floor((Q + f[x - 1] + f[x - 18 - 1] + f[x - 18]) / 4), hb = Math.floor((Q + f[x - 18] + f[x - 18 + 1] + f[x + 1]) / 4), Ea = Math.floor((Q + f[x + 1] + f[x + 18 + 1] + f[x + 18]) / 4), ib = Math.floor((Q + f[x + 18] + f[x + 18 - 1] + f[x - 1]) / 4), g = 0, a.d[a.o++] = 16 * this.xPos + C + h.bottom[g], a.d[a.o++] = 0 + F + h.bottom[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.bottom[g + 2], a.d[a.o++] = h.bottom[g + 3], a.d[a.o++] = h.bottom[g + 4], a.d[a.o++] = 100 * Ca + Ea, a.d[a.o++] = n + 5, a.d[a.o++] = 1, a.d[a.o++] = 0, g = 5, a.d[a.o++] = 16 * this.xPos + C + h.bottom[g], a.d[a.o++] = 0 + F + h.bottom[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.bottom[g + 2], a.d[a.o++] = h.bottom[g + 3], a.d[a.o++] = h.bottom[g + 4], a.d[a.o++] = 100 * Ba + Da, a.d[a.o++] = n + 5, a.d[a.o++] = 1, a.d[a.o++] = 0, g = 10, a.d[a.o++] = 16 * this.xPos + C + h.bottom[g], a.d[a.o++] = 0 + F + h.bottom[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.bottom[g + 2], a.d[a.o++] = h.bottom[g + 3], a.d[a.o++] = h.bottom[g + 4], a.d[a.o++] = 100 * fb + hb, a.d[a.o++] = n + 5, a.d[a.o++] = 1, a.d[a.o++] = 0, g = 15, a.d[a.o++] = 16 * this.xPos + C + h.bottom[g], a.d[a.o++] = 0 + F + h.bottom[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.bottom[g + 2], a.d[a.o++] = h.bottom[g + 3], a.d[a.o++] = h.bottom[g + 4], a.d[a.o++] = 100 * Ca + Ea, a.d[a.o++] = n + 5, a.d[a.o++] = 1, a.d[a.o++] = 0, g = 20, a.d[a.o++] = 16 * this.xPos + C + h.bottom[g], a.d[a.o++] = 0 + F + h.bottom[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.bottom[g + 2], a.d[a.o++] = h.bottom[g + 3], a.d[a.o++] = h.bottom[g + 4], a.d[a.o++] = 100 * gb + ib, a.d[a.o++] = n + 5, a.d[a.o++] = 1, a.d[a.o++] = 0, g = 25, a.d[a.o++] = 16 * this.xPos + C + h.bottom[g], a.d[a.o++] = 0 + F + h.bottom[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.bottom[g + 2], a.d[a.o++] = h.bottom[g + 3], a.d[a.o++] = h.bottom[g + 4], a.d[a.o++] = 100 * Ba + Da, a.d[a.o++] = n + 5, a.d[a.o++] = 1, a.d[a.o++] = 0), J && (a = 8 < Y && 0 === p ? y[p + 1] : y[p], Fa = Math.floor((Y + e[D - 1] + e[D - 18 - 1] + e[D - 18]) / 4), jb = Math.floor((Y + e[D - 18] + e[D - 18 + 1] + e[D + 1]) / 4), Ga = Math.floor((Y + e[D + 1] + e[D + 18 + 1] + e[D + 18]) / 4), kb = Math.floor((Y + e[D + 18] + e[D + 18 - 1] + e[D - 1]) / 4), Ha = Math.floor((O + f[D - 1] + f[D - 18 - 1] + f[D - 18]) / 4), lb = Math.floor((O + f[D - 18] + f[D - 18 + 1] + f[D + 1]) / 4), Ia = Math.floor((O + f[D + 1] + f[D + 18 + 1] + f[D + 18]) / 4), mb = Math.floor((O + f[D + 18] + f[D + 18 - 1] + f[D - 1]) / 4), g = 0, a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * Ga + Ia, a.d[a.o++] = n + 6, a.d[a.o++] = 1, a.d[a.o++] = X, g = 5, a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * jb + lb, a.d[a.o++] = n + 6, a.d[a.o++] = 1, a.d[a.o++] = aa, g = 10, a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * Fa + Ha, a.d[a.o++] = n + 6, a.d[a.o++] = 1, a.d[a.o++] = $, g = 15, a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * Ga + Ia, a.d[a.o++] = n + 6, a.d[a.o++] = 1, a.d[a.o++] = X, g = 20, a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * Fa + Ha, a.d[a.o++] = n + 6, a.d[a.o++] = 1, a.d[a.o++] = $, g = 25, a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * kb + mb, a.d[a.o++] = n + 6, a.d[a.o++] = 1, a.d[a.o++] = m);
            } else if (8 === r.shapeType) {
              p = r.drawLevel, a = y[p], h = r.shape, z = 0, 0 < r.useBiomeColor && (z = this.getBiomeColor(C, B, r.useBiomeColor - 1));
              var ea = '',
                ea = ea + l[I],
                ea = q === ka ? ea + l[E] : ea + 'x',
                ea = q === ia ? ea + l[t] : ea + 'x',
                ea = q === ja ? ea + l[u] : ea + 'x',
                ea = q === ha ? ea + l[A] : ea + 'x',
                Fb = 0,
                Gb = Chunk.stairsData[ea];
              if (void 0 !== Gb && (h = 3 < l[I] ? block[s][9].shape : block[s][8].shape, Fb = 1), Z)
                for (a = 8 < w && 0 === p ? y[p + 1] : y[p], g = 0; g < h.front.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.front[g], a.d[a.o++] = 0 + F + h.front[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * w + T, a.d[a.o++] = n + 1, a.d[a.o++] = 0.8, a.d[a.o++] = z;
              if (G)
                for (a = 8 < S && 0 === p ? y[p + 1] : y[p], g = 0; g < h.back.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.back[g], a.d[a.o++] = 0 + F + h.back[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * S + R, a.d[a.o++] = n + 2, a.d[a.o++] = 0.8, a.d[a.o++] = z;
              if (W)
                for (a = 8 < K && 0 === p ? y[p + 1] : y[p], g = 0; g < h.right.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.right[g], a.d[a.o++] = 0 + F + h.right[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * K + N, a.d[a.o++] = n + 3, a.d[a.o++] = 0.55, a.d[a.o++] = z;
              if (H)
                for (a = 8 < M && 0 === p ? y[p + 1] : y[p], g = 0; g < h.left.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.left[g], a.d[a.o++] = 0 + F + h.left[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * M + L, a.d[a.o++] = n + 4, a.d[a.o++] = 0.55, a.d[a.o++] = z;
              if (V)
                for (a = y[p], g = 0; g < h.bottom.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.bottom[g], a.d[a.o++] = 0 + F + h.bottom[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.bottom[g + 2], a.d[a.o++] = h.bottom[g + 3], a.d[a.o++] = h.bottom[g + 4], a.d[a.o++] = 100 * U + Q, a.d[a.o++] = n + 5, a.d[a.o++] = 0.3, a.d[a.o++] = z;
              if (J)
                for (a = 8 < Y && 0 === p ? y[p + 1] : y[p], g = 0; g < h.top.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * Y + O, a.d[a.o++] = n + 6, a.d[a.o++] = 1, a.d[a.o++] = z;
              if (1 === Fb) {
                var h = block[s][10].shape,
                  nb = 0,
                  ob = 0;
                3 < l[I] && (ob = -0.5);
                for (var pb = 0, vb = 0; 4 > vb; vb++)
                  if (0 !== Gb.charCodeAt(vb) - 48) {
                    if (nb = vb % 2 / 2, pb = 1 < vb ? 0.5 : 0, Z)
                      for (a = 8 < w && 0 === p ? y[p + 1] : y[p], g = 0; g < h.front.length; g += 5) a.d[a.o++] = nb + 16 * this.xPos + C + h.front[g], a.d[a.o++] = ob + 0 + F + h.front[g + 1], a.d[a.o++] = pb + 16 * this.zPos + B + h.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * w + T, a.d[a.o++] = n + 1, a.d[a.o++] = 0.8, a.d[a.o++] = z;
                    if (G)
                      for (a = 8 < S && 0 === p ? y[p + 1] : y[p], g = 0; g < h.back.length; g += 5) a.d[a.o++] = nb + 16 * this.xPos + C + h.back[g], a.d[a.o++] = ob + 0 + F + h.back[g + 1], a.d[a.o++] = pb + 16 * this.zPos + B + h.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * S + R, a.d[a.o++] = n + 2, a.d[a.o++] = 0.8, a.d[a.o++] = z;
                    if (W)
                      for (a = 8 < K && 0 === p ? y[p + 1] : y[p], g = 0; g < h.right.length; g += 5) a.d[a.o++] = nb + 16 * this.xPos + C + h.right[g], a.d[a.o++] = ob + 0 + F + h.right[g + 1], a.d[a.o++] = pb + 16 * this.zPos + B + h.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * K + N, a.d[a.o++] = n + 3, a.d[a.o++] = 0.55, a.d[a.o++] = z;
                    if (H)
                      for (a = 8 < M && 0 === p ? y[p + 1] : y[p], g = 0; g < h.left.length; g += 5) a.d[a.o++] = nb + 16 * this.xPos + C + h.left[g], a.d[a.o++] = ob + 0 + F + h.left[g + 1], a.d[a.o++] = pb + 16 * this.zPos + B + h.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * M + L, a.d[a.o++] = n + 4, a.d[a.o++] = 0.55, a.d[a.o++] = z;
                    if (V)
                      for (a = y[p], g = 0; g < h.bottom.length; g += 5) a.d[a.o++] = nb + 16 * this.xPos + C + h.bottom[g], a.d[a.o++] = ob + 0 + F + h.bottom[g + 1], a.d[a.o++] = pb + 16 * this.zPos + B + h.bottom[g + 2], a.d[a.o++] = h.bottom[g + 3], a.d[a.o++] = h.bottom[g + 4], a.d[a.o++] = 100 * U + Q, a.d[a.o++] = n + 5, a.d[a.o++] = 0.3, a.d[a.o++] = z;
                    if (J)
                      for (a = 8 < Y && 0 === p ? y[p + 1] : y[p], g = 0; g < h.top.length; g += 5) a.d[a.o++] = nb + 16 * this.xPos + C + h.top[g], a.d[a.o++] = ob + 0 + F + h.top[g + 1], a.d[a.o++] = pb + 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * Y + O, a.d[a.o++] = n + 6, a.d[a.o++] = 1, a.d[a.o++] = z;
                  }
              }
            } else if (5 === r.shapeType) {
              if (Z || G || W || H || J || V) {
                for (p = r.drawLevel, a = y[p], h = r.shape, z = 0, 0 < r.useBiomeColor && (z = this.getBiomeColor(C, B, r.useBiomeColor - 1)), a = 8 < w && 0 === p ? y[p + 1] : y[p], g = 0; g < h.front.length; g += 5) {
                  if (0 === g % 30) {
                    if ((60 === g || 120 === g) && q !== ka && 1 !== ka) {
                      g += 25;
                      continue;
                    }
                    if ((30 === g || 90 === g) && q !== ia && 1 !== ia) {
                      g += 25;
                      continue;
                    }
                  }
                  a.d[a.o++] = 16 * this.xPos + C + h.front[g], a.d[a.o++] = 0 + F + h.front[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * w + T, a.d[a.o++] = n + 1, a.d[a.o++] = 0.8, a.d[a.o++] = z;
                }
                for (a = 8 < S && 0 === p ? y[p + 1] : y[p], g = 0; g < h.back.length; g += 5) {
                  if (0 === g % 30) {
                    if ((60 === g || 120 === g) && q !== ka && 1 !== ka) {
                      g += 25;
                      continue;
                    }
                    if ((30 === g || 90 === g) && q !== ia && 1 !== ia) {
                      g += 25;
                      continue;
                    }
                  }
                  a.d[a.o++] = 16 * this.xPos + C + h.back[g], a.d[a.o++] = 0 + F + h.back[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * S + R, a.d[a.o++] = n + 2, a.d[a.o++] = 0.8, a.d[a.o++] = z;
                }
                for (a = 8 < K && 0 === p ? y[p + 1] : y[p], g = 0; g < h.right.length; g += 5) {
                  if (0 === g % 30) {
                    if ((30 === g || 90 === g) && q !== ja && 1 !== ja) {
                      g += 25;
                      continue;
                    }
                    if ((60 === g || 120 === g) && q !== ha && 1 !== ha) {
                      g += 25;
                      continue;
                    }
                  }
                  a.d[a.o++] = 16 * this.xPos + C + h.right[g], a.d[a.o++] = 0 + F + h.right[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * K + N, a.d[a.o++] = n + 3, a.d[a.o++] = 0.55, a.d[a.o++] = z;
                }
                for (a = 8 < M && 0 === p ? y[p + 1] : y[p], g = 0; g < h.left.length; g += 5) {
                  if (0 === g % 30) {
                    if ((30 === g || 90 === g) && q !== ja && 1 !== ja) {
                      g += 25;
                      continue;
                    }
                    if ((60 === g || 120 === g) && q !== ha && 1 !== ha) {
                      g += 25;
                      continue;
                    }
                  }
                  a.d[a.o++] = 16 * this.xPos + C + h.left[g], a.d[a.o++] = 0 + F + h.left[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * M + L, a.d[a.o++] = n + 4, a.d[a.o++] = 0.55, a.d[a.o++] = z;
                }
                for (a = y[p], g = 0; g < h.bottom.length; g += 5) {
                  if (0 === g % 30) {
                    if ((30 === g || 150 === g) && q !== ia && 1 !== ia) {
                      g += 25;
                      continue;
                    }
                    if ((60 === g || 180 === g) && q !== ka && 1 !== ka) {
                      g += 25;
                      continue;
                    }
                    if ((90 === g || 210 === g) && q !== ja && 1 !== ja) {
                      g += 25;
                      continue;
                    }
                    if ((120 === g || 240 === g) && q !== ha && 1 !== ha) {
                      g += 25;
                      continue;
                    }
                  }
                  a.d[a.o++] = 16 * this.xPos + C + h.bottom[g], a.d[a.o++] = 0 + F + h.bottom[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.bottom[g + 2], a.d[a.o++] = h.bottom[g + 3], a.d[a.o++] = h.bottom[g + 4], a.d[a.o++] = 100 * U + Q, a.d[a.o++] = n + 5, a.d[a.o++] = 0.3, a.d[a.o++] = z;
                }
                for (a = 8 < Y && 0 === p ? y[p + 1] : y[p], g = 0; g < h.top.length; g += 5) {
                  if (0 === g % 30) {
                    if ((30 === g || 150 === g) && q !== ia && 1 !== ia) {
                      g += 25;
                      continue;
                    }
                    if ((60 === g || 180 === g) && q !== ka && 1 !== ka) {
                      g += 25;
                      continue;
                    }
                    if ((90 === g || 210 === g) && q !== ja && 1 !== ja) {
                      g += 25;
                      continue;
                    }
                    if ((120 === g || 240 === g) && q !== ha && 1 !== ha) {
                      g += 25;
                      continue;
                    }
                  }
                  a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * Y + O, a.d[a.o++] = n + 6, a.d[a.o++] = 1, a.d[a.o++] = z;
                }
              }
            } else if (6 === r.shapeType) {
              if (p = r.drawLevel, a = y[p], h = r.shape, z = 0, 0 < r.useBiomeColor && (z = this.getBiomeColor(C, B, r.useBiomeColor - 1)), Z || G || W || H || V || J) {
                if (5 === v)
                  for (a = 8 < w && 0 === p ? y[p + 1] : y[p], g = 0; g < h.front.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.front[g], a.d[a.o++] = 0 + F + h.front[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * w + T, a.d[a.o++] = n + 1, a.d[a.o++] = 0.8, a.d[a.o++] = z;
                if (4 === v)
                  for (a = 8 < S && 0 === p ? y[p + 1] : y[p], g = 0; g < h.back.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.back[g], a.d[a.o++] = 0 + F + h.back[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * S + R, a.d[a.o++] = n + 2, a.d[a.o++] = 0.8, a.d[a.o++] = z;
                if (3 === v)
                  for (a = 8 < K && 0 === p ? y[p + 1] : y[p], g = 0; g < h.right.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.right[g], a.d[a.o++] = 0 + F + h.right[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * K + N, a.d[a.o++] = n + 3, a.d[a.o++] = 0.55, a.d[a.o++] = z;
                if (2 === v)
                  for (a = 8 < M && 0 === p ? y[p + 1] : y[p], g = 0; g < h.left.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.left[g], a.d[a.o++] = 0 + F + h.left[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * M + L, a.d[a.o++] = n + 4, a.d[a.o++] = 0.55, a.d[a.o++] = z;
              }
            } else if (9 === r.shapeType) {
              p = r.drawLevel, a = y[p], h = r.shape, z = 0, 0 < r.useBiomeColor ? (z = this.getBiomeColor(C, B, r.useBiomeColor - 1), $ = this.getBiomeColor1(C, B, r.useBiomeColor - 1), aa = this.getBiomeColor2(C, B, r.useBiomeColor - 1), X = this.getBiomeColor3(C, B, r.useBiomeColor - 1), m = this.getBiomeColor4(C, B, r.useBiomeColor - 1)) : m = X = aa = $ = z = 0;
              var ca = 1,
                fa = 1,
                da = 1,
                ga = 1;
              if (8 !== (l[I] & 8) && tb !== q) {
                if (0 !== (l[I] & 7)) {
                  var wb = l[I + 18] % 8;
                  ka !== q && (wb = 7);
                  var xb = l[I - 18] % 8;
                  ia !== q && (xb = 7);
                  var yb = l[I - 1] % 8;
                  ja !== q && (yb = 7);
                  var zb = l[I + 1] % 8;
                  ha !== q && (zb = 7);
                  var Bb = l[I + 18 - 1] % 8;
                  block[k[I + 18 - 1]].type !== q && (Bb = 7);
                  var Cb = l[I - 18 - 1] % 8;
                  block[k[I - 18 - 1]].type !== q && (Cb = 7);
                  var Db = l[I + 18 + 1] % 8;
                  block[k[I + 18 + 1]].type !== q && (Db = 7);
                  var Eb = l[I - 18 + 1] % 8;
                  block[k[I - 18 + 1]].type !== q && (Eb = 7), ca = 0 === yb || 0 === Cb || 0 === xb ? 0.875 : ca - (l[I] + yb + Cb + xb) / 4 / 7, fa = 0 === xb || 0 === Eb || 0 === zb ? 0.875 : fa - (l[I] + xb + Eb + zb) / 4 / 7, da = 0 === zb || 0 === Db || 0 === wb ? 0.875 : da - (l[I] + zb + Db + wb) / 4 / 7, ga = 0 === wb || 0 === Bb || 0 === yb ? 0.875 : ga - (l[I] + wb + Bb + yb) / 4 / 7, (2.625 === ca + fa + da || 2.625 === fa + da + ga || 2.625 === da + ga + ca || 2.625 === ga + ca + fa) && (ga = da = fa = ca = 0.875);
                } else ga = da = fa = ca = 0.875;
                (block[k[D - 1]].type === q || block[k[D - 18 - 1]].type === q || block[k[D - 18]].type === q) && (ca = 1), (block[k[D - 18]].type === q || block[k[D - 18 + 1]].type === q || block[k[D + 1]].type === q) && (fa = 1), (block[k[D + 1]].type === q || block[k[D + 18 + 1]].type === q || block[k[D + 18]].type === q) && (da = 1), (block[k[D + 18]].type === q || block[k[D + 18 - 1]].type === q || block[k[D - 1]].type === q) && (ga = 1);
              }
              Z && (0 === block.lightSource[s] ? (la = Math.floor((w + e[u - 18] + e[u - 324 - 18] + e[u - 324]) / 4), Qa = Math.floor((w + e[u - 324] + e[u - 324 + 18] + e[u + 18]) / 4), ma = Math.floor((w + e[u + 18] + e[u + 324 + 18] + e[u + 324]) / 4), Ra = Math.floor((w + e[u + 324] + e[u + 324 - 18] + e[u - 18]) / 4), na = Math.floor((T + f[u - 18] + f[u - 324 - 18] + f[u - 324]) / 4), Sa = Math.floor((T + f[u - 324] + f[u - 324 + 18] + f[u + 18]) / 4), oa = Math.floor((T + f[u + 18] + f[u + 324 + 18] + f[u + 324]) / 4), Ta = Math.floor((T + f[u + 324] + f[u + 324 - 18] + f[u - 18]) / 4)) : la = Qa = ma = Ra = na = Sa = oa = Ta = 15, g = 0, a.d[a.o++] = 16 * this.xPos + C + h.front[g], a.d[a.o++] = 0 + F + h.front[g + 1] * ca, a.d[a.o++] = 16 * this.zPos + B + h.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * la + na, a.d[a.o++] = n + 1, a.d[a.o++] = 0.8, a.d[a.o++] = z, g = 5, a.d[a.o++] = 16 * this.xPos + C + h.front[g], a.d[a.o++] = 0 + F + h.front[g + 1] * ga, a.d[a.o++] = 16 * this.zPos + B + h.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * Qa + Sa, a.d[a.o++] = n + 1, a.d[a.o++] = 0.8, a.d[a.o++] = z, g = 10, a.d[a.o++] = 16 * this.xPos + C + h.front[g], a.d[a.o++] = 0 + F + h.front[g + 1] * ga, a.d[a.o++] = 16 * this.zPos + B + h.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * ma + oa, a.d[a.o++] = n + 1, a.d[a.o++] = 0.8, a.d[a.o++] = z, g = 15, a.d[a.o++] = 16 * this.xPos + C + h.front[g], a.d[a.o++] = 0 + F + h.front[g + 1] * ca, a.d[a.o++] = 16 * this.zPos + B + h.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * la + na, a.d[a.o++] = n + 1, a.d[a.o++] = 0.8, a.d[a.o++] = z, g = 20, a.d[a.o++] = 16 * this.xPos + C + h.front[g], a.d[a.o++] = 0 + F + h.front[g + 1] * ga, a.d[a.o++] = 16 * this.zPos + B + h.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * ma + oa, a.d[a.o++] = n + 1, a.d[a.o++] = 0.8, a.d[a.o++] = z, g = 25, a.d[a.o++] = 16 * this.xPos + C + h.front[g], a.d[a.o++] = 0 + F + h.front[g + 1] * ca, a.d[a.o++] = 16 * this.zPos + B + h.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * Ra + Ta, a.d[a.o++] = n + 1, a.d[a.o++] = 0.8, a.d[a.o++] = z), G && (0 === block.lightSource[s] ? (pa = Math.floor((S + e[A - 18] + e[A - 324 - 18] + e[A - 324]) / 4), Ua = Math.floor((S + e[A - 324] + e[A - 324 + 18] + e[A + 18]) / 4), qa = Math.floor((S + e[A + 18] + e[A + 324 + 18] + e[A + 324]) / 4), Va = Math.floor((S + e[A + 324] + e[A + 324 - 18] + e[A - 18]) / 4), ra = Math.floor((R + f[A - 18] + f[A - 324 - 18] + f[A - 324]) / 4), Wa = Math.floor((R + f[A - 324] + f[A - 324 + 18] + f[A + 18]) / 4), sa = Math.floor((R + f[A + 18] + f[A + 324 + 18] + f[A + 324]) / 4), Xa = Math.floor((R + f[A + 324] + f[A + 324 - 18] + f[A - 18]) / 4)) : pa = Ua = qa = Va = ra = Wa = sa = Xa = 15, g = 0, a.d[a.o++] = 16 * this.xPos + C + h.back[g], a.d[a.o++] = 0 + F + h.back[g + 1] * da, a.d[a.o++] = 16 * this.zPos + B + h.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * qa + sa, a.d[a.o++] = n + 2, a.d[a.o++] = 0.8, a.d[a.o++] = z, g = 5, a.d[a.o++] = 16 * this.xPos + C + h.back[g], a.d[a.o++] = 0 + F + h.back[g + 1] * fa, a.d[a.o++] = 16 * this.zPos + B + h.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * pa + ra, a.d[a.o++] = n + 2, a.d[a.o++] = 0.8, a.d[a.o++] = z, g = 10, a.d[a.o++] = 16 * this.xPos + C + h.back[g], a.d[a.o++] = 0 + F + h.back[g + 1] * fa, a.d[a.o++] = 16 * this.zPos + B + h.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * Va + Xa, a.d[a.o++] = n + 2, a.d[a.o++] = 0.8, a.d[a.o++] = z, g = 15, a.d[a.o++] = 16 * this.xPos + C + h.back[g], a.d[a.o++] = 0 + F + h.back[g + 1] * fa, a.d[a.o++] = 16 * this.zPos + B + h.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * pa + ra, a.d[a.o++] = n + 2, a.d[a.o++] = 0.8, a.d[a.o++] = z, g = 20, a.d[a.o++] = 16 * this.xPos + C + h.back[g], a.d[a.o++] = 0 + F + h.back[g + 1] * da, a.d[a.o++] = 16 * this.zPos + B + h.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * qa + sa, a.d[a.o++] = n + 2, a.d[a.o++] = 0.8, a.d[a.o++] = z, g = 25, a.d[a.o++] = 16 * this.xPos + C + h.back[g], a.d[a.o++] = 0 + F + h.back[g + 1] * da, a.d[a.o++] = 16 * this.zPos + B + h.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * Ua + Wa, a.d[a.o++] = n + 2, a.d[a.o++] = 0.8, a.d[a.o++] = z), W && (0 === block.lightSource[s] ? (ta = Math.floor((K + e[t - 1] + e[t - 324 - 1] + e[t - 324]) / 4), Ya = Math.floor((K + e[t - 324] + e[t - 324 + 1] + e[t + 1]) / 4), ua = Math.floor((K + e[t + 1] + e[t + 324 + 1] + e[t + 324]) / 4), Za = Math.floor((K + e[t + 324] + e[t + 324 - 1] + e[t - 1]) / 4), va = Math.floor((N + f[t - 1] + f[t - 324 - 1] + f[t - 324]) / 4), $a = Math.floor((N + f[t - 324] + f[t - 324 + 1] + f[t + 1]) / 4), wa = Math.floor((N + f[t + 1] + f[t + 324 + 1] + f[t + 324]) / 4), ab = Math.floor((N + f[t + 324] + f[t + 324 - 1] + f[t - 1]) / 4)) : ta = Ya = ua = Za = va = $a = wa = ab = 15, g = 0, a.d[a.o++] = 16 * this.xPos + C + h.right[g], a.d[a.o++] = 0 + F + h.right[g + 1] * fa, a.d[a.o++] = 16 * this.zPos + B + h.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * ua + wa, a.d[a.o++] = n + 3, a.d[a.o++] = 0.55, a.d[a.o++] = z, g = 5, a.d[a.o++] = 16 * this.xPos + C + h.right[g], a.d[a.o++] = 0 + F + h.right[g + 1] * ca, a.d[a.o++] = 16 * this.zPos + B + h.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * ta + va, a.d[a.o++] = n + 3, a.d[a.o++] = 0.55, a.d[a.o++] = z, g = 10, a.d[a.o++] = 16 * this.xPos + C + h.right[g], a.d[a.o++] = 0 + F + h.right[g + 1] * ca, a.d[a.o++] = 16 * this.zPos + B + h.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * Za + ab, a.d[a.o++] = n + 3, a.d[a.o++] = 0.55, a.d[a.o++] = z, g = 15, a.d[a.o++] = 16 * this.xPos + C + h.right[g], a.d[a.o++] = 0 + F + h.right[g + 1] * fa, a.d[a.o++] = 16 * this.zPos + B + h.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * ua + wa, a.d[a.o++] = n + 3, a.d[a.o++] = 0.55, a.d[a.o++] = z, g = 20, a.d[a.o++] = 16 * this.xPos + C + h.right[g], a.d[a.o++] = 0 + F + h.right[g + 1] * fa, a.d[a.o++] = 16 * this.zPos + B + h.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * Ya + $a, a.d[a.o++] = n + 3, a.d[a.o++] = 0.55, a.d[a.o++] = z, g = 25, a.d[a.o++] = 16 * this.xPos + C + h.right[g], a.d[a.o++] = 0 + F + h.right[g + 1] * ca, a.d[a.o++] = 16 * this.zPos + B + h.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * ta + va, a.d[a.o++] = n + 3, a.d[a.o++] = 0.55, a.d[a.o++] = z), H && (0 === block.lightSource[s] ? (bb = Math.floor((M + e[E - 1] + e[E - 324 - 1] + e[E - 324]) / 4), xa = Math.floor((M + e[E - 324] + e[E - 324 + 1] + e[E + 1]) / 4), cb = Math.floor((M + e[E + 1] + e[E + 324 + 1] + e[E + 324]) / 4), ya = Math.floor((M + e[E + 324] + e[E + 324 - 1] + e[E - 1]) / 4), db = Math.floor((L + f[E - 1] + f[E - 324 - 1] + f[E - 324]) / 4), za = Math.floor((L + f[E - 324] + f[E - 324 + 1] + f[E + 1]) / 4), eb = Math.floor((L + f[E + 1] + f[E + 324 + 1] + f[E + 324]) / 4), Aa = Math.floor((L + f[E + 324] + f[E + 324 - 1] + f[E - 1]) / 4)) : bb = xa = cb = ya = db = za = eb = Aa = 15, g = 0, a.d[a.o++] = 16 * this.xPos + C + h.left[g], a.d[a.o++] = 0 + F + h.left[g + 1] * ga, a.d[a.o++] = 16 * this.zPos + B + h.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * ya + Aa, a.d[a.o++] = n + 4, a.d[a.o++] = 0.55, a.d[a.o++] = z, g = 5, a.d[a.o++] = 16 * this.xPos + C + h.left[g], a.d[a.o++] = 0 + F + h.left[g + 1] * ga, a.d[a.o++] = 16 * this.zPos + B + h.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * bb + db, a.d[a.o++] = n + 4, a.d[a.o++] = 0.55, a.d[a.o++] = z, g = 10, a.d[a.o++] = 16 * this.xPos + C + h.left[g], a.d[a.o++] = 0 + F + h.left[g + 1] * da, a.d[a.o++] = 16 * this.zPos + B + h.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * xa + za, a.d[a.o++] = n + 4, a.d[a.o++] = 0.55, a.d[a.o++] = z, g = 15, a.d[a.o++] = 16 * this.xPos + C + h.left[g], a.d[a.o++] = 0 + F + h.left[g + 1] * da, a.d[a.o++] = 16 * this.zPos + B + h.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * cb + eb, a.d[a.o++] = n + 4, a.d[a.o++] = 0.55, a.d[a.o++] = z, g = 20, a.d[a.o++] = 16 * this.xPos + C + h.left[g], a.d[a.o++] = 0 + F + h.left[g + 1] * ga, a.d[a.o++] = 16 * this.zPos + B + h.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * ya + Aa, a.d[a.o++] = n + 4, a.d[a.o++] = 0.55, a.d[a.o++] = z, g = 25, a.d[a.o++] = 16 * this.xPos + C + h.left[g], a.d[a.o++] = 0 + F + h.left[g + 1] * da, a.d[a.o++] = 16 * this.zPos + B + h.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * xa + za, a.d[a.o++] = n + 4, a.d[a.o++] = 0.55, a.d[a.o++] = z), V && (0 === block.lightSource[s] ? (Ba = Math.floor((U + e[x - 1] + e[x - 18 - 1] + e[x - 18]) / 4), fb = Math.floor((U + e[x - 18] + e[x - 18 + 1] + e[x + 1]) / 4), Ca = Math.floor((U + e[x + 1] + e[x + 18 + 1] + e[x + 18]) / 4), gb = Math.floor((U + e[x + 18] + e[x + 18 - 1] + e[x - 1]) / 4), Da = Math.floor((Q + f[x - 1] + f[x - 18 - 1] + f[x - 18]) / 4), hb = Math.floor((Q + f[x - 18] + f[x - 18 + 1] + f[x + 1]) / 4), Ea = Math.floor((Q + f[x + 1] + f[x + 18 + 1] + f[x + 18]) / 4), ib = Math.floor((Q + f[x + 18] + f[x + 18 - 1] + f[x - 1]) / 4)) : Ba = fb = Ca = gb = Da = hb = Ea = ib = 15, g = 0, a.d[a.o++] = 16 * this.xPos + C + h.bottom[g], a.d[a.o++] = 0 + F + h.bottom[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.bottom[g + 2], a.d[a.o++] = h.bottom[g + 3], a.d[a.o++] = h.bottom[g + 4], a.d[a.o++] = 100 * Ca + Ea, a.d[a.o++] = n + 5, a.d[a.o++] = 1, a.d[a.o++] = z, g = 5, a.d[a.o++] = 16 * this.xPos + C + h.bottom[g], a.d[a.o++] = 0 + F + h.bottom[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.bottom[g + 2], a.d[a.o++] = h.bottom[g + 3], a.d[a.o++] = h.bottom[g + 4], a.d[a.o++] = 100 * Ba + Da, a.d[a.o++] = n + 5, a.d[a.o++] = 1, a.d[a.o++] = z, g = 10, a.d[a.o++] = 16 * this.xPos + C + h.bottom[g], a.d[a.o++] = 0 + F + h.bottom[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.bottom[g + 2], a.d[a.o++] = h.bottom[g + 3], a.d[a.o++] = h.bottom[g + 4], a.d[a.o++] = 100 * fb + hb, a.d[a.o++] = n + 5, a.d[a.o++] = 1, a.d[a.o++] = z, g = 15, a.d[a.o++] = 16 * this.xPos + C + h.bottom[g], a.d[a.o++] = 0 + F + h.bottom[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.bottom[g + 2], a.d[a.o++] = h.bottom[g + 3], a.d[a.o++] = h.bottom[g + 4], a.d[a.o++] = 100 * Ca + Ea, a.d[a.o++] = n + 5, a.d[a.o++] = 1, a.d[a.o++] = z, g = 20, a.d[a.o++] = 16 * this.xPos + C + h.bottom[g], a.d[a.o++] = 0 + F + h.bottom[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.bottom[g + 2], a.d[a.o++] = h.bottom[g + 3], a.d[a.o++] = h.bottom[g + 4], a.d[a.o++] = 100 * gb + ib, a.d[a.o++] = n + 5, a.d[a.o++] = 1, a.d[a.o++] = z, g = 25, a.d[a.o++] = 16 * this.xPos + C + h.bottom[g], a.d[a.o++] = 0 + F + h.bottom[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.bottom[g + 2], a.d[a.o++] = h.bottom[g + 3], a.d[a.o++] = h.bottom[g + 4], a.d[a.o++] = 100 * Ba + Da, a.d[a.o++] = n + 5, a.d[a.o++] = 1, a.d[a.o++] = z), J && (0 === block.lightSource[s] ? (Fa = Math.floor((Y + e[D - 1] + e[D - 18 - 1] + e[D - 18]) / 4), jb = Math.floor((Y + e[D - 18] + e[D - 18 + 1] + e[D + 1]) / 4), Ga = Math.floor((Y + e[D + 1] + e[D + 18 + 1] + e[D + 18]) / 4), kb = Math.floor((Y + e[D + 18] + e[D + 18 - 1] + e[D - 1]) / 4), Ha = Math.floor((O + f[D - 1] + f[D - 18 - 1] + f[D - 18]) / 4), lb = Math.floor((O + f[D - 18] + f[D - 18 + 1] + f[D + 1]) / 4), Ia = Math.floor((O + f[D + 1] + f[D + 18 + 1] + f[D + 18]) / 4), mb = Math.floor((O + f[D + 18] + f[D + 18 - 1] + f[D - 1]) / 4)) : Fa = jb = Ga = kb = Ha = lb = Ia = mb = 15, g = 0, a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1] * da, a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * Ga + Ia, a.d[a.o++] = n + 6, a.d[a.o++] = 1, a.d[a.o++] = X, g = 5, a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1] * fa, a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * jb + lb, a.d[a.o++] = n + 6, a.d[a.o++] = 1, a.d[a.o++] = aa, g = 10, a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1] * ca, a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * Fa + Ha, a.d[a.o++] = n + 6, a.d[a.o++] = 1, a.d[a.o++] = $, g = 15, a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1] * da, a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * Ga + Ia, a.d[a.o++] = n + 6, a.d[a.o++] = 1, a.d[a.o++] = X, g = 20, a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1] * ca, a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * Fa + Ha, a.d[a.o++] = n + 6, a.d[a.o++] = 1, a.d[a.o++] = $, g = 25, a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1] * ga, a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * kb + mb, a.d[a.o++] = n + 6, a.d[a.o++] = 1, a.d[a.o++] = m);
            } else if (10 === r.shapeType) {
              if (p = r.drawLevel, a = y[p], h = r.shape, z = 0, 0 < r.useBiomeColor && (z = this.getBiomeColor(C, B, r.useBiomeColor - 1)), Z || G || W || H || V || J) {
                if (8 === (l[I] & 8))
                  for (a = 8 < w && 0 === p ? y[p + 1] : y[p], g = 0; g < h.front.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.front[g], a.d[a.o++] = 0 + F + h.front[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.front[g + 2], a.d[a.o++] = h.front[g + 3], a.d[a.o++] = h.front[g + 4], a.d[a.o++] = 100 * w + T, a.d[a.o++] = n + 1, a.d[a.o++] = 0.8, a.d[a.o++] = z;
                if (2 === (l[I] & 2))
                  for (a = 8 < S && 0 === p ? y[p + 1] : y[p], g = 0; g < h.back.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.back[g], a.d[a.o++] = 0 + F + h.back[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.back[g + 2], a.d[a.o++] = h.back[g + 3], a.d[a.o++] = h.back[g + 4], a.d[a.o++] = 100 * S + R, a.d[a.o++] = n + 2, a.d[a.o++] = 0.8, a.d[a.o++] = z;
                if (1 === (l[I] & 1))
                  for (a = 8 < K && 0 === p ? y[p + 1] : y[p], g = 0; g < h.right.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.right[g], a.d[a.o++] = 0 + F + h.right[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.right[g + 2], a.d[a.o++] = h.right[g + 3], a.d[a.o++] = h.right[g + 4], a.d[a.o++] = 100 * K + N, a.d[a.o++] = n + 3, a.d[a.o++] = 0.55, a.d[a.o++] = z;
                if (4 === (l[I] & 4))
                  for (a = 8 < M && 0 === p ? y[p + 1] : y[p], g = 0; g < h.left.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.left[g], a.d[a.o++] = 0 + F + h.left[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.left[g + 2], a.d[a.o++] = h.left[g + 3], a.d[a.o++] = h.left[g + 4], a.d[a.o++] = 100 * M + L, a.d[a.o++] = n + 4, a.d[a.o++] = 0.55, a.d[a.o++] = z;
                if (1 === tb || 0 === l[I])
                  for (a = y[p], g = 0; g < h.bottom.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.bottom[g], a.d[a.o++] = 0 + F + h.bottom[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.bottom[g + 2], a.d[a.o++] = h.bottom[g + 3], a.d[a.o++] = h.bottom[g + 4], a.d[a.o++] = 100 * U + Q, a.d[a.o++] = n + 5, a.d[a.o++] = 0.3, a.d[a.o++] = z;
              }
            } else if (12 === r.shapeType) {
              if (p = r.drawLevel, a = y[p], r = block[s][2], 12 !== block[k[u]].shapeType && 12 === block[k[A]].shapeType && 12 === block[k[t]].shapeType && 12 === block[k[E]].shapeType ? r = block[s][7] : 12 === block[k[u]].shapeType && 12 === block[k[A]].shapeType && 12 !== block[k[t]].shapeType && 12 === block[k[E]].shapeType ? r = block[s][8] : 12 === block[k[u]].shapeType && 12 === block[k[A]].shapeType && 12 === block[k[t]].shapeType && 12 !== block[k[E]].shapeType ? r = block[s][10] : 12 === block[k[u]].shapeType && 12 !== block[k[A]].shapeType && 12 === block[k[t]].shapeType && 12 === block[k[E]].shapeType ? r = block[s][9] : 12 !== block[k[u]].shapeType && 12 === block[k[A]].shapeType && 12 === block[k[t]].shapeType && 12 !== block[k[E]].shapeType ? r = block[s][3] : 12 !== block[k[u]].shapeType && 12 === block[k[A]].shapeType && 12 !== block[k[t]].shapeType && 12 === block[k[E]].shapeType ? r = block[s][4] : 12 === block[k[u]].shapeType && 12 !== block[k[A]].shapeType && 12 === block[k[t]].shapeType && 12 !== block[k[E]].shapeType ? r = block[s][6] : 12 === block[k[u]].shapeType && 12 !== block[k[A]].shapeType && 12 !== block[k[t]].shapeType && 12 === block[k[E]].shapeType ? r = block[s][5] : 12 !== block[k[u]].shapeType && 12 !== block[k[A]].shapeType || 12 === block[k[t]].shapeType || 12 === block[k[E]].shapeType ? 12 === block[k[u]].shapeType || 12 === block[k[A]].shapeType || 12 !== block[k[t]].shapeType && 12 !== block[k[E]].shapeType ? 12 === block[k[u]].shapeType && 12 === block[k[A]].shapeType && 12 === block[k[t]].shapeType && 12 === block[k[E]].shapeType && (r = block[s][2]) : r = block[s][1] : r = block[s][0], h = r.shape, z = 65536 * Math.floor(12 * v + 75) + 256 * Math.floor(0) + Math.floor(0), J || W || H || V || Z || G)
                for (g = 0; g < h.top.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * M + L, a.d[a.o++] = n + 4, a.d[a.o++] = 0.8, a.d[a.o++] = z;
            } else if (13 === r.shapeType && (J || W || H || V || Z || G)) {
              p = r.drawLevel, a = y[p];
              var Ab = 0;
              if (13 === block[k[u]].shapeType || 131 === k[u])
                for (r = block[s][0], h = r.shape, Ab++, g = 0; g < h.top.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * M + L, a.d[a.o++] = n + 4, a.d[a.o++] = 0.8, a.d[a.o++] = 0;
              if (13 === block[k[A]].shapeType || 131 === k[A])
                for (r = block[s][1], h = r.shape, Ab++, g = 0; g < h.top.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * M + L, a.d[a.o++] = n + 4, a.d[a.o++] = 0.8, a.d[a.o++] = 0;
              if (13 === block[k[t]].shapeType || 131 === k[t] || 1 > Ab)
                for (r = block[s][2], h = r.shape, g = 0; g < h.top.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * M + L, a.d[a.o++] = n + 4, a.d[a.o++] = 0.8, a.d[a.o++] = 0;
              if (13 === block[k[E]].shapeType || 131 === k[E] || 1 > Ab)
                for (r = block[s][3], h = r.shape, g = 0; g < h.top.length; g += 5) a.d[a.o++] = 16 * this.xPos + C + h.top[g], a.d[a.o++] = 0 + F + h.top[g + 1], a.d[a.o++] = 16 * this.zPos + B + h.top[g + 2], a.d[a.o++] = h.top[g + 3], a.d[a.o++] = h.top[g + 4], a.d[a.o++] = 100 * M + L, a.d[a.o++] = n + 4, a.d[a.o++] = 0.8, a.d[a.o++] = 0;
            }
          }
  if (void 0 !== this.vbo && (0 === b && void 0 !== this.vbo[0] && (this.vbo[0].forEach(function(a) {
      gl.deleteBuffer(a);
    }), this.ivbo[0].forEach(function(a) {
      gpuMem -= a;
    })), 1 === b && void 0 !== this.vbo[1] && (this.vbo[1].forEach(function(a) {
      gl.deleteBuffer(a);
    }), this.ivbo[1].forEach(function(a) {
      gpuMem -= a;
    }))), 0 === b) {
    this.ivbo[0] = [], this.vbo[0] = [];
    for (var ba = 0; 4 > ba; ba++)
      if (0 < y[ba].o) {
        var Ja = new Float32Array(y[ba].d.buffer, 0, y[ba].o);
        this.ivbo[0][ba] = Ja.length, this.vbo[0][ba] = gl.createBuffer(), gpuMem += Ja.length, gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo[0][ba]), gl.bufferData(gl.ARRAY_BUFFER, Ja, gl.STATIC_DRAW), Ja = null;
      }
    this.isInit = 1;
  }
  if (1 === b) {
    for (this.ivbo[1] = [], this.vbo[1] = [], ba = 0; 4 > ba; ba++) 0 < y[ba].o && (Ja = new Float32Array(y[ba].d.buffer, 0, y[ba].o), this.ivbo[1][ba] = Ja.length, this.vbo[1][ba] = gl.createBuffer(), gpuMem += Ja.length, gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo[1][ba]), gl.bufferData(gl.ARRAY_BUFFER, Ja, gl.STATIC_DRAW), Ja = null);
    this.isInit1 = 1;
  }
  return !0;
}, Chunk.prototype.getBuffer = function(b) {
  var d = 0,
    c = 0,
    e = 0,
    f = 0,
    l = !1,
    k = !1,
    p = !1,
    q = !1,
    v = c = punkty1[0].o = 0,
    s = 0,
    r = 0,
    a, y = mcWorld.requestChunk(this.xPos + 1, this.zPos);
  if (void 0 === y && (q = !0), -1 === y && (q = !0), -2 === y) return !1;
  var I = mcWorld.requestChunk(this.xPos - 1, this.zPos);
  if (void 0 === I && (p = !0), -1 === I && (p = !0), -2 === I) return !1;
  var E = mcWorld.requestChunk(this.xPos, this.zPos + 1);
  if (void 0 === E && (l = !0), -1 === E && (l = !0), -2 === E) return !1;
  var t = mcWorld.requestChunk(this.xPos, this.zPos - 1);
  if (void 0 === t && (k = !0), -1 === t && (k = !0), -2 === t) return !1;
  this.cacheBiomes = new Float32Array(324);
  var u = d = Math.floor(b[1] / 16);
  2 > b[1] - 16 * d && u--, 0 > u && (u = 0);
  var A = d;
  for (13 < b[1] - 16 * d && A++, 16 < A && (A = 16); u <= A; u++)
    if (void 0 !== this.section[u]) {
      var D = this.section[u],
        x = this.section[u - 1],
        n = !1;
      void 0 === x && (n = !0);
      var M = this.section[u + 1],
        K = !1;
      void 0 === M && (K = !0);
      var Y = !0,
        U = !0,
        w = !0;
      if (a = !0, !p) {
        var S = I.section[u];
        void 0 !== S && (Y = !1);
      }
      if (!q) {
        var L = y.section[u];
        void 0 !== L && (U = !1);
      }
      if (!k) {
        var N = t.section[u];
        void 0 !== N && (w = !1);
      }
      if (!l) {
        var O = E.section[u];
        void 0 !== O && (a = !1);
      }
      var Q = b[0] - 3;
      0 > Q && (Q = 0);
      var T = b[0] + 4;
      16 < T && (T = 16);
      var R = b[2] - 3;
      0 > R && (R = 0);
      var V = b[2] + 4;
      16 < V && (V = 16);
      var J = b[1] - 16 * u - 3;
      0 > J && (J = 0);
      var Z = b[1] - 16 * u + 3;
      16 < Z && (Z = 16);
      for (var G = J; G < Z; G++)
        for (d = R; d < V; d++) {
          for (var H = Q; H < T; H++) e = 256 * G + 16 * d + H, f = 324 * (G + 1) + 18 * (d + 1) + (H + 1), Chunk.cacheBlock[f] = block[D.blocks[e]].type, c = e % 2, Chunk.cacheData[f] = 0 === c ? D.data[e / 2] & 15 & block[D.blocks[e]].mask : D.data[e / 2 - 0.5] >> 4 & 15 & block[D.blocks[e]].mask;
          this.cacheBiomes[18 * (G + 1) + d + 1] = this.biomes[16 * G + d];
        }
      if (n)
        for (d = 0; 16 > d; d++)
          for (H = 0; 16 > H; H++) f = 0 + 18 * (d + 1) + (H + 1), Chunk.cacheBlock[f] = 0 === u ? 1 : 0;
      else
        for (d = 0; 16 > d; d++)
          for (H = 0; 16 > H; H++) e = 3840 + 16 * d + H, f = 0 + 18 * (d + 1) + (H + 1), Chunk.cacheBlock[f] = block[x.blocks[e]].type;
      if (K)
        for (d = 0; 16 > d; d++)
          for (H = 0; 16 > H; H++) f = 5508 + 18 * (d + 1) + (H + 1), Chunk.cacheBlock[f] = 15 === u ? 1 : 0;
      else
        for (d = 0; 16 > d; d++)
          for (H = 0; 16 > H; H++) e = 0 + 16 * d + H, f = 5508 + 18 * (d + 1) + (H + 1), Chunk.cacheBlock[f] = block[M.blocks[e]].type;
      if (a)
        for (G = 0; 16 > G; G++)
          for (H = 0; 16 > H; H++) f = 324 * (G + 1) + 306 + (H + 1), Chunk.cacheBlock[f] = l ? 1 : 0;
      else
        for (G = 0; 16 > G; G++)
          for (H = 0; 16 > H; H++) e = 256 * G + 0 + H, f = 324 * (G + 1) + 306 + (H + 1), Chunk.cacheBlock[f] = block[O.blocks[e]].type;
      if (w)
        for (G = 0; 16 > G; G++)
          for (H = 0; 16 > H; H++) f = 324 * (G + 1) + 0 + (H + 1), Chunk.cacheBlock[f] = k ? 1 : 0;
      else
        for (G = 0; 16 > G; G++)
          for (H = 0; 16 > H; H++) e = 256 * G + 240 + H, f = 324 * (G + 1) + 0 + (H + 1), Chunk.cacheBlock[f] = block[N.blocks[e]].type;
      if (Y)
        for (G = 0; 16 > G; G++)
          for (d = 0; 16 > d; d++) f = 324 * (G + 1) + 18 * (d + 1) + 0, Chunk.cacheBlock[f] = p ? 1 : 0;
      else
        for (G = 0; 16 > G; G++)
          for (d = 0; 16 > d; d++) e = 256 * G + 16 * d + 15, f = 324 * (G + 1) + 18 * (d + 1) + 0, Chunk.cacheBlock[f] = block[S.blocks[e]].type;
      if (U)
        for (G = 0; 16 > G; G++)
          for (d = 0; 16 > d; d++) f = 324 * (G + 1) + 18 * (d + 1) + 17, Chunk.cacheBlock[f] = q ? 1 : 0;
      else
        for (G = 0; 16 > G; G++)
          for (d = 0; 16 > d; d++) e = 256 * G + 16 * d + 0, f = 324 * (G + 1) + 18 * (d + 1) + 17, Chunk.cacheBlock[f] = block[L.blocks[e]].type;
      var W = w = 0,
        z = 0,
        $ = 0,
        aa = 0,
        X = 0;
      a = 0;
      for (var f = 16 * u, U = Y = K = M = n = x = !1, m = e = 0, G = J; G < Z; G++)
        for (d = R; d < V; d++)
          for (H = Q; H < T; H++)
            if (U = Y = K = M = n = x = !1, w = 324 * (G + 1) + 18 * (d + 1) + (H + 1), c = Chunk.cacheBlock[w], 0 !== c) {
              if (W = w + 18, z = w - 18, $ = w - 1, aa = w + 1, X = w + 324, a = w - 324, e = 256 * G + 16 * d + H, J = this.xPos % 5, 0 > J && (J += 5), s = this.zPos % 5, 0 > s && (s += 5), J = 65536 * (f + G) + 256 * (16 * d + H) + 10 * (5 * J + s), 1 === c || 2 === c || 4 === c || 6 === c) 1 !== Chunk.cacheBlock[X] && (n = !0), 1 !== Chunk.cacheBlock[a] && (x = !0), 1 !== Chunk.cacheBlock[z] && (U = !0), 1 !== Chunk.cacheBlock[W] && (Y = !0), 1 !== Chunk.cacheBlock[$] && (M = !0), 1 !== Chunk.cacheBlock[aa] && (K = !0);
              else if (3 < c) 1 !== Chunk.cacheBlock[X] && Chunk.cacheBlock[X] !== c && (n = !0), 1 !== Chunk.cacheBlock[a] && Chunk.cacheBlock[a] !== c && (x = !0), 1 !== Chunk.cacheBlock[z] && Chunk.cacheBlock[z] !== c && (U = !0), 1 !== Chunk.cacheBlock[W] && Chunk.cacheBlock[W] !== c && (Y = !0), 1 !== Chunk.cacheBlock[$] && Chunk.cacheBlock[$] !== c && (M = !0), 1 !== Chunk.cacheBlock[aa] && Chunk.cacheBlock[aa] !== c && (K = !0);
              else continue;
              if ((M || K || U || Y || x || n) && (a = punkty1[0], s = D.blocks[e], c = e % 2, 0 === c ? (v = D.data[e / 2] & 15 & block[D.blocks[e]].mask, m = D.add[e / 2] & 15) : (v = D.data[e / 2 - 0.5] >> 4 & 15 & block[D.blocks[e]].mask, m = D.add[e / 2 - 0.5] >> 4 & 15), r = void 0 === block[s][v] ? block[s][0] : block[s][v], void 0 !== r.shapeType))
                if (1 === r.shapeType || 11 === r.shapeType) {
                  if (w = c = r.shape, e = 0, 1 === r.useBiomeColor && (e = this.getBiomeColor(H, d, 0)), 0 < m && (w = block[200][m - 1].shape), M)
                    for (m = 0; m < w.front.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + w.front[m], a.d[a.o++] = f + G + w.front[m + 1], a.d[a.o++] = 16 * this.zPos + d + w.front[m + 2], a.d[a.o++] = c.front[m + 3], a.d[a.o++] = c.front[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 1, a.d[a.o++] = 0.8, a.d[a.o++] = e;
                  if (K)
                    for (m = 0; m < w.back.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + w.back[m], a.d[a.o++] = f + G + w.back[m + 1], a.d[a.o++] = 16 * this.zPos + d + w.back[m + 2], a.d[a.o++] = c.back[m + 3], a.d[a.o++] = c.back[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 2, a.d[a.o++] = 0.8, a.d[a.o++] = e;
                  if (U)
                    for (m = 0; m < w.right.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + w.right[m], a.d[a.o++] = f + G + w.right[m + 1], a.d[a.o++] = 16 * this.zPos + d + w.right[m + 2], a.d[a.o++] = c.right[m + 3], a.d[a.o++] = c.right[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 3, a.d[a.o++] = 0.55, a.d[a.o++] = e;
                  if (Y)
                    for (m = 0; m < w.left.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + w.left[m], a.d[a.o++] = f + G + w.left[m + 1], a.d[a.o++] = 16 * this.zPos + d + w.left[m + 2], a.d[a.o++] = c.left[m + 3], a.d[a.o++] = c.left[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 4, a.d[a.o++] = 0.55, a.d[a.o++] = e;
                  if (x)
                    for (m = 0; m < w.bottom.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + w.bottom[m], a.d[a.o++] = f + G + w.bottom[m + 1], a.d[a.o++] = 16 * this.zPos + d + w.bottom[m + 2], a.d[a.o++] = c.bottom[m + 3], a.d[a.o++] = c.bottom[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 5, a.d[a.o++] = 0.3, a.d[a.o++] = e;
                  if (n)
                    for (m = 0; m < w.top.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + w.top[m], a.d[a.o++] = f + G + w.top[m + 1], a.d[a.o++] = 16 * this.zPos + d + w.top[m + 2], a.d[a.o++] = c.top[m + 3], a.d[a.o++] = c.top[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 6, a.d[a.o++] = 1, a.d[a.o++] = e;
                } else if (2 !== r.shapeType && 3 !== r.shapeType)
                if (4 === r.shapeType) {
                  if (c = r.shape, e = this.getBiomeColor(H, d, 0), M) {
                    for (m = 0; m < c.front2.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.front2[m], a.d[a.o++] = f + G + c.front2[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.front2[m + 2], a.d[a.o++] = c.front2[m + 3], a.d[a.o++] = c.front2[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 1, a.d[a.o++] = 0.8, a.d[a.o++] = e;
                    for (m = 0; m < c.front.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.front[m], a.d[a.o++] = f + G + c.front[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.front[m + 2], a.d[a.o++] = c.front[m + 3], a.d[a.o++] = c.front[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 1, a.d[a.o++] = 0.8, a.d[a.o++] = 0;
                  }
                  if (K) {
                    for (m = 0; m < c.back2.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.back2[m], a.d[a.o++] = f + G + c.back2[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.back2[m + 2], a.d[a.o++] = c.back2[m + 3], a.d[a.o++] = c.back2[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 2, a.d[a.o++] = 0.8, a.d[a.o++] = e;
                    for (m = 0; m < c.back.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.back[m], a.d[a.o++] = f + G + c.back[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.back[m + 2], a.d[a.o++] = c.back[m + 3], a.d[a.o++] = c.back[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 2, a.d[a.o++] = 0.8, a.d[a.o++] = 0;
                  }
                  if (U) {
                    for (m = 0; m < c.right2.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.right2[m], a.d[a.o++] = f + G + c.right2[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.right2[m + 2], a.d[a.o++] = c.right2[m + 3], a.d[a.o++] = c.right2[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 3, a.d[a.o++] = 0.55, a.d[a.o++] = e;
                    for (m = 0; m < c.right.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.right[m], a.d[a.o++] = f + G + c.right[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.right[m + 2], a.d[a.o++] = c.right[m + 3], a.d[a.o++] = c.right[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 3, a.d[a.o++] = 0.55, a.d[a.o++] = 0;
                  }
                  if (Y) {
                    for (m = 0; m < c.left2.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.left2[m], a.d[a.o++] = f + G + c.left2[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.left2[m + 2], a.d[a.o++] = c.left2[m + 3], a.d[a.o++] = c.left2[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 4, a.d[a.o++] = 0.55, a.d[a.o++] = e;
                    for (m = 0; m < c.left.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.left[m], a.d[a.o++] = f + G + c.left[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.left[m + 2], a.d[a.o++] = c.left[m + 3], a.d[a.o++] = c.left[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 4, a.d[a.o++] = 0.55, a.d[a.o++] = 0;
                  }
                  if (x)
                    for (m = 0; m < c.bottom.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.bottom[m], a.d[a.o++] = f + G + c.bottom[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.bottom[m + 2], a.d[a.o++] = c.bottom[m + 3], a.d[a.o++] = c.bottom[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 5, a.d[a.o++] = 0.3, a.d[a.o++] = 0;
                  if (n)
                    for (m = 0; m < c.top.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.top[m], a.d[a.o++] = f + G + c.top[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.top[m + 2], a.d[a.o++] = c.top[m + 3], a.d[a.o++] = c.top[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 6, a.d[a.o++] = 1, a.d[a.o++] = e;
                } else if (8 === r.shapeType) {
                if (c = r.shape, e = 0, 1 === r.useBiomeColor && (e = this.getBiomeColor(H, d, 0)), X = '', X += Chunk.cacheData[w], X = Chunk.cacheBlock[w] === Chunk.cacheBlock[W] ? X + Chunk.cacheData[W] : X + 'x', X = Chunk.cacheBlock[w] === Chunk.cacheBlock[z] ? X + Chunk.cacheData[z] : X + 'x', X = Chunk.cacheBlock[w] === Chunk.cacheBlock[$] ? X + Chunk.cacheData[$] : X + 'x', X = Chunk.cacheBlock[w] === Chunk.cacheBlock[aa] ? X + Chunk.cacheData[aa] : X + 'x', z = 0, W = Chunk.stairsData[X], void 0 !== W && (c = 3 < Chunk.cacheData[w] ? block[s][9].shape : block[s][8].shape, z = 1), M)
                  for (m = 0; m < c.front.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.front[m], a.d[a.o++] = f + G + c.front[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.front[m + 2], a.d[a.o++] = c.front[m + 3], a.d[a.o++] = c.front[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 1, a.d[a.o++] = 0.8, a.d[a.o++] = e;
                if (K)
                  for (m = 0; m < c.back.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.back[m], a.d[a.o++] = f + G + c.back[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.back[m + 2], a.d[a.o++] = c.back[m + 3], a.d[a.o++] = c.back[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 2, a.d[a.o++] = 0.8, a.d[a.o++] = e;
                if (U)
                  for (m = 0; m < c.right.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.right[m], a.d[a.o++] = f + G + c.right[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.right[m + 2], a.d[a.o++] = c.right[m + 3], a.d[a.o++] = c.right[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 3, a.d[a.o++] = 0.55, a.d[a.o++] = e;
                if (Y)
                  for (m = 0; m < c.left.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.left[m], a.d[a.o++] = f + G + c.left[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.left[m + 2], a.d[a.o++] = c.left[m + 3], a.d[a.o++] = c.left[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 4, a.d[a.o++] = 0.55, a.d[a.o++] = e;
                if (x)
                  for (m = 0; m < c.bottom.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.bottom[m], a.d[a.o++] = f + G + c.bottom[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.bottom[m + 2], a.d[a.o++] = c.bottom[m + 3], a.d[a.o++] = c.bottom[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 5, a.d[a.o++] = 0.3, a.d[a.o++] = e;
                if (n)
                  for (m = 0; m < c.top.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.top[m], a.d[a.o++] = f + G + c.top[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.top[m + 2], a.d[a.o++] = c.top[m + 3], a.d[a.o++] = c.top[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 6, a.d[a.o++] = 1, a.d[a.o++] = e;
                if (1 === z)
                  for (c = block[s][10].shape, $ = z = 0, 3 < Chunk.cacheData[w] && ($ = -0.5), aa = w = 0; 4 > aa; aa++)
                    if (0 !== W.charCodeAt(aa) - 48) {
                      if (z = aa % 2 / 2, w = 1 < aa ? 0.5 : 0, M)
                        for (m = 0; m < c.front.length; m += 5) a.d[a.o++] = z + 16 * this.xPos + H + c.front[m], a.d[a.o++] = $ + f + G + c.front[m + 1], a.d[a.o++] = w + 16 * this.zPos + d + c.front[m + 2], a.d[a.o++] = c.front[m + 3], a.d[a.o++] = c.front[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 1, a.d[a.o++] = 0.8, a.d[a.o++] = e;
                      if (K)
                        for (m = 0; m < c.back.length; m += 5) a.d[a.o++] = z + 16 * this.xPos + H + c.back[m], a.d[a.o++] = $ + f + G + c.back[m + 1], a.d[a.o++] = w + 16 * this.zPos + d + c.back[m + 2], a.d[a.o++] = c.back[m + 3], a.d[a.o++] = c.back[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 2, a.d[a.o++] = 0.8, a.d[a.o++] = e;
                      if (U)
                        for (m = 0; m < c.right.length; m += 5) a.d[a.o++] = z + 16 * this.xPos + H + c.right[m], a.d[a.o++] = $ + f + G + c.right[m + 1], a.d[a.o++] = w + 16 * this.zPos + d + c.right[m + 2], a.d[a.o++] = c.right[m + 3], a.d[a.o++] = c.right[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 3, a.d[a.o++] = 0.55, a.d[a.o++] = e;
                      if (Y)
                        for (m = 0; m < c.left.length; m += 5) a.d[a.o++] = z + 16 * this.xPos + H + c.left[m], a.d[a.o++] = $ + f + G + c.left[m + 1], a.d[a.o++] = w + 16 * this.zPos + d + c.left[m + 2], a.d[a.o++] = c.left[m + 3], a.d[a.o++] = c.left[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 4, a.d[a.o++] = 0.55, a.d[a.o++] = e;
                      if (x)
                        for (m = 0; m < c.bottom.length; m += 5) a.d[a.o++] = z + 16 * this.xPos + H + c.bottom[m], a.d[a.o++] = $ + f + G + c.bottom[m + 1], a.d[a.o++] = w + 16 * this.zPos + d + c.bottom[m + 2], a.d[a.o++] = c.bottom[m + 3], a.d[a.o++] = c.bottom[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 5, a.d[a.o++] = 0.3, a.d[a.o++] = e;
                      if (n)
                        for (m = 0; m < c.top.length; m += 5) a.d[a.o++] = z + 16 * this.xPos + H + c.top[m], a.d[a.o++] = $ + f + G + c.top[m + 1], a.d[a.o++] = w + 16 * this.zPos + d + c.top[m + 2], a.d[a.o++] = c.top[m + 3], a.d[a.o++] = c.top[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 6, a.d[a.o++] = 1, a.d[a.o++] = e;
                    }
              } else if (5 === r.shapeType) {
                if (M || K || U || Y || n || x) {
                  for (c = r.shape, e = 0, 1 === r.useBiomeColor && (e = this.getBiomeColor(H, d, 0)), m = 0; m < c.front.length; m += 5) {
                    if (0 === m % 30) {
                      if ((60 === m || 120 === m) && Chunk.cacheBlock[w] !== Chunk.cacheBlock[W] && 1 !== Chunk.cacheBlock[W]) {
                        m += 25;
                        continue;
                      }
                      if ((30 === m || 90 === m) && Chunk.cacheBlock[w] !== Chunk.cacheBlock[z] && 1 !== Chunk.cacheBlock[z]) {
                        m += 25;
                        continue;
                      }
                    }
                    a.d[a.o++] = 16 * this.xPos + H + c.front[m], a.d[a.o++] = f + G + c.front[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.front[m + 2], a.d[a.o++] = c.front[m + 3], a.d[a.o++] = c.front[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 1, a.d[a.o++] = 0.8, a.d[a.o++] = e;
                  }
                  for (m = 0; m < c.back.length; m += 5) {
                    if (0 === m % 30) {
                      if ((60 === m || 120 === m) && Chunk.cacheBlock[w] !== Chunk.cacheBlock[W] && 1 !== Chunk.cacheBlock[W]) {
                        m += 25;
                        continue;
                      }
                      if ((30 === m || 90 === m) && Chunk.cacheBlock[w] !== Chunk.cacheBlock[z] && 1 !== Chunk.cacheBlock[z]) {
                        m += 25;
                        continue;
                      }
                    }
                    a.d[a.o++] = 16 * this.xPos + H + c.back[m], a.d[a.o++] = f + G + c.back[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.back[m + 2], a.d[a.o++] = c.back[m + 3], a.d[a.o++] = c.back[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 2, a.d[a.o++] = 0.8, a.d[a.o++] = e;
                  }
                  for (m = 0; m < c.right.length; m += 5) {
                    if (0 === m % 30) {
                      if ((30 === m || 90 === m) && Chunk.cacheBlock[w] !== Chunk.cacheBlock[$] && 1 !== Chunk.cacheBlock[$]) {
                        m += 25;
                        continue;
                      }
                      if ((60 === m || 120 === m) && Chunk.cacheBlock[w] !== Chunk.cacheBlock[aa] && 1 !== Chunk.cacheBlock[aa]) {
                        m += 25;
                        continue;
                      }
                    }
                    a.d[a.o++] = 16 * this.xPos + H + c.right[m], a.d[a.o++] = f + G + c.right[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.right[m + 2], a.d[a.o++] = c.right[m + 3], a.d[a.o++] = c.right[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 3, a.d[a.o++] = 0.55, a.d[a.o++] = e;
                  }
                  for (m = 0; m < c.left.length; m += 5) {
                    if (0 === m % 30) {
                      if ((30 === m || 90 === m) && Chunk.cacheBlock[w] !== Chunk.cacheBlock[$] && 1 !== Chunk.cacheBlock[$]) {
                        m += 25;
                        continue;
                      }
                      if ((60 === m || 120 === m) && Chunk.cacheBlock[w] !== Chunk.cacheBlock[aa] && 1 !== Chunk.cacheBlock[aa]) {
                        m += 25;
                        continue;
                      }
                    }
                    a.d[a.o++] = 16 * this.xPos + H + c.left[m], a.d[a.o++] = f + G + c.left[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.left[m + 2], a.d[a.o++] = c.left[m + 3], a.d[a.o++] = c.left[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 4, a.d[a.o++] = 0.55, a.d[a.o++] = e;
                  }
                  for (m = 0; m < c.bottom.length; m += 5) {
                    if (0 === m % 30) {
                      if ((30 === m || 150 === m) && Chunk.cacheBlock[w] !== Chunk.cacheBlock[z] && 1 !== Chunk.cacheBlock[z]) {
                        m += 25;
                        continue;
                      }
                      if ((60 === m || 180 === m) && Chunk.cacheBlock[w] !== Chunk.cacheBlock[W] && 1 !== Chunk.cacheBlock[W]) {
                        m += 25;
                        continue;
                      }
                      if ((90 === m || 210 === m) && Chunk.cacheBlock[w] !== Chunk.cacheBlock[$] && 1 !== Chunk.cacheBlock[$]) {
                        m += 25;
                        continue;
                      }
                      if ((120 === m || 240 === m) && Chunk.cacheBlock[w] !== Chunk.cacheBlock[aa] && 1 !== Chunk.cacheBlock[aa]) {
                        m += 25;
                        continue;
                      }
                    }
                    a.d[a.o++] = 16 * this.xPos + H + c.bottom[m], a.d[a.o++] = f + G + c.bottom[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.bottom[m + 2], a.d[a.o++] = c.bottom[m + 3], a.d[a.o++] = c.bottom[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 5, a.d[a.o++] = 0.3, a.d[a.o++] = e;
                  }
                  for (m = 0; m < c.top.length; m += 5) {
                    if (0 === m % 30) {
                      if ((30 === m || 150 === m) && Chunk.cacheBlock[w] !== Chunk.cacheBlock[z] && 1 !== Chunk.cacheBlock[z]) {
                        m += 25;
                        continue;
                      }
                      if ((60 === m || 180 === m) && Chunk.cacheBlock[w] !== Chunk.cacheBlock[W] && 1 !== Chunk.cacheBlock[W]) {
                        m += 25;
                        continue;
                      }
                      if ((90 === m || 210 === m) && Chunk.cacheBlock[w] !== Chunk.cacheBlock[$] && 1 !== Chunk.cacheBlock[$]) {
                        m += 25;
                        continue;
                      }
                      if ((120 === m || 240 === m) && Chunk.cacheBlock[w] !== Chunk.cacheBlock[aa] && 1 !== Chunk.cacheBlock[aa]) {
                        m += 25;
                        continue;
                      }
                    }
                    a.d[a.o++] = 16 * this.xPos + H + c.top[m], a.d[a.o++] = f + G + c.top[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.top[m + 2], a.d[a.o++] = c.top[m + 3], a.d[a.o++] = c.top[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 6, a.d[a.o++] = 1, a.d[a.o++] = e;
                  }
                }
              } else if (6 === r.shapeType) {
                if (c = r.shape, e = 0, 1 === r.useBiomeColor && (e = this.getBiomeColor(H, d, 0)), M || K || U || Y || x || n) {
                  if (5 === v)
                    for (m = 0; m < c.front.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.front[m], a.d[a.o++] = f + G + c.front[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.front[m + 2], a.d[a.o++] = c.front[m + 3], a.d[a.o++] = c.front[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 1, a.d[a.o++] = 0.8, a.d[a.o++] = e;
                  if (4 === v)
                    for (m = 0; m < c.back.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.back[m], a.d[a.o++] = f + G + c.back[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.back[m + 2], a.d[a.o++] = c.back[m + 3], a.d[a.o++] = c.back[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 2, a.d[a.o++] = 0.8, a.d[a.o++] = e;
                  if (3 === v)
                    for (m = 0; m < c.right.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.right[m], a.d[a.o++] = f + G + c.right[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.right[m + 2], a.d[a.o++] = c.right[m + 3], a.d[a.o++] = c.right[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 3, a.d[a.o++] = 0.55, a.d[a.o++] = e;
                  if (2 === v)
                    for (m = 0; m < c.left.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.left[m], a.d[a.o++] = f + G + c.left[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.left[m + 2], a.d[a.o++] = c.left[m + 3], a.d[a.o++] = c.left[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 4, a.d[a.o++] = 0.55, a.d[a.o++] = e;
                }
              } else if (9 === r.shapeType) {
                if (c = r.shape, e = 0, 1 === r.useBiomeColor && (e = this.getBiomeColor(H, d, 2)), M)
                  for (m = 0; m < c.front.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.front[m], a.d[a.o++] = f + G + c.front[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.front[m + 2], a.d[a.o++] = c.front[m + 3], a.d[a.o++] = c.front[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 1, a.d[a.o++] = 0.8, a.d[a.o++] = e;
                if (K)
                  for (m = 0; m < c.back.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.back[m], a.d[a.o++] = f + G + c.back[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.back[m + 2], a.d[a.o++] = c.back[m + 3], a.d[a.o++] = c.back[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 2, a.d[a.o++] = 0.8, a.d[a.o++] = e;
                if (U)
                  for (m = 0; m < c.right.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.right[m], a.d[a.o++] = f + G + c.right[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.right[m + 2], a.d[a.o++] = c.right[m + 3], a.d[a.o++] = c.right[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 3, a.d[a.o++] = 0.55, a.d[a.o++] = e;
                if (Y)
                  for (m = 0; m < c.left.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.left[m], a.d[a.o++] = f + G + c.left[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.left[m + 2], a.d[a.o++] = c.left[m + 3], a.d[a.o++] = c.left[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 4, a.d[a.o++] = 0.55, a.d[a.o++] = e;
                if (x)
                  for (m = 0; m < c.bottom.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.bottom[m], a.d[a.o++] = f + G + c.bottom[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.bottom[m + 2], a.d[a.o++] = c.bottom[m + 3], a.d[a.o++] = c.bottom[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 5, a.d[a.o++] = 0.3, a.d[a.o++] = e;
                if (n)
                  for (m = 0; m < c.top.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.top[m], a.d[a.o++] = f + G + c.top[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.top[m + 2], a.d[a.o++] = c.top[m + 3], a.d[a.o++] = c.top[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 6, a.d[a.o++] = 1, a.d[a.o++] = e;
              } else if (10 === r.shapeType && (c = r.shape, e = 0, 1 === r.useBiomeColor && (e = this.getBiomeColor(H, d, 0)), M || K || U || Y || x || n)) {
                if (8 === (Chunk.cacheData[w] & 8))
                  for (m = 0; m < c.front.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.front[m], a.d[a.o++] = f + G + c.front[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.front[m + 2], a.d[a.o++] = c.front[m + 3], a.d[a.o++] = c.front[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 1, a.d[a.o++] = 0.8, a.d[a.o++] = e;
                if (2 === (Chunk.cacheData[w] & 2))
                  for (m = 0; m < c.back.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.back[m], a.d[a.o++] = f + G + c.back[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.back[m + 2], a.d[a.o++] = c.back[m + 3], a.d[a.o++] = c.back[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 2, a.d[a.o++] = 0.8, a.d[a.o++] = e;
                if (1 === (Chunk.cacheData[w] & 1))
                  for (m = 0; m < c.right.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.right[m], a.d[a.o++] = f + G + c.right[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.right[m + 2], a.d[a.o++] = c.right[m + 3], a.d[a.o++] = c.right[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 3, a.d[a.o++] = 0.55, a.d[a.o++] = e;
                if (4 === (Chunk.cacheData[w] & 4))
                  for (m = 0; m < c.left.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.left[m], a.d[a.o++] = f + G + c.left[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.left[m + 2], a.d[a.o++] = c.left[m + 3], a.d[a.o++] = c.left[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 4, a.d[a.o++] = 0.55, a.d[a.o++] = e;
                if (1 === Chunk.cacheBlock[X] || 0 === Chunk.cacheData[w])
                  for (m = 0; m < c.bottom.length; m += 5) a.d[a.o++] = 16 * this.xPos + H + c.bottom[m], a.d[a.o++] = f + G + c.bottom[m + 1], a.d[a.o++] = 16 * this.zPos + d + c.bottom[m + 2], a.d[a.o++] = c.bottom[m + 3], a.d[a.o++] = c.bottom[m + 4], a.d[a.o++] = 0, a.d[a.o++] = J + 5, a.d[a.o++] = 0.3, a.d[a.o++] = e;
              }
            }
    }
  return 0 < punkty1[0].o ? new Float32Array(punkty1[0].d.buffer, 0, punkty1[0].o) : !1;
}, Mob.prototype.setPos = function(b, d, c) {
  this.pos[0] = b, this.pos[1] = d, this.pos[2] = c;
}, Mob.prototype.setName = function(b) {
  this.name = b, this.nameVbo = void 0;
}, Mob.prototype.getEye = function() {
  return [this.pos[0] + this.eyePos[0] * Math.cos(-this.rot[0]) - this.eyePos[2] * Math.sin(-this.rot[0]), this.pos[1] + this.eyePos[1], this.pos[2] + this.eyePos[0] * Math.sin(-this.rot[0]) + this.eyePos[2] * Math.cos(-this.rot[0])];
}, Mob.prototype.getPos = function() {
  return this.pos;
}, Mob.prototype.getRot = function() {
  return this.rot;
}, Mob.prototype.setPosRotRawInt = function(b) {
  if (void 0 !== b) {
    this.oldPos[0] = this.tPos[0], this.oldPos[1] = this.tPos[1], this.oldPos[2] = this.tPos[2], this.pos[0] = b[0] / 100, this.pos[1] = b[1] / 100, this.pos[2] = b[2] / 100, this.tPos[0] = this.pos[0], this.tPos[1] = this.pos[1], this.tPos[2] = this.pos[2], this.rot[0] = b[3] / 100, this.rot[1] = b[4] / 100;
    var d = b[5] - this.lastTime;
    0 !== d && (this.speed[0] = 1000 / d * (this.oldPos[0] - this.pos[0]) * 0.5, this.speed[1] = 1000 / d * (this.oldPos[1] - this.pos[1]) * 0.5, this.speed[2] = 1000 / d * (this.oldPos[2] - this.pos[2]) * 0.5), this.lastTime = b[5];
  }
}, Mob.prototype.setPosRot = function(b, d) {
  void 0 !== b && (this.pos[0] = b[0], this.pos[1] = b[1], this.pos[2] = b[2]), void 0 !== d && (this.rot[0] = d[0], this.rot[1] = d[1], this.rot[2] = d[2]);
}, Mob.prototype.getTarget = function() {
  return [this.pos[0] + +this.eyePos[0] * Math.cos(-this.rot[0]) - this.eyePos[2] * Math.sin(-this.rot[0]) + Math.sin(this.rot[0]) * Math.cos(this.rot[1]), this.pos[1] + this.eyePos[1] + Math.sin(this.rot[1]), this.pos[2] + this.eyePos[0] * Math.sin(-this.rot[0]) + this.eyePos[2] * Math.cos(-this.rot[0]) + Math.cos(this.rot[0]) * Math.cos(this.rot[1])];
}, Mob.prototype.update = function(b) {
  this.pos[0] -= this.speed[0] / b, this.pos[2] -= this.speed[2] / b;
}, Mob.prototype.render = function() {
  if (void 0 !== this.texture && this.texture.loaded) {
    var b = gluu.standardShader;
    if (gl.useProgram(b), mat4.identity(gluu.mvMatrix), mat4.translate(gluu.mvMatrix, gluu.mvMatrix, [this.pos[0], this.pos[1], this.pos[2]]), gl.uniformMatrix4fv(b.pMatrixUniform, !1, gluu.pMatrix), gl.uniformMatrix4fv(b.mvMatrixUniform, !1, gluu.mvMatrix), void 0 !== this.shape && (void 0 === this.shapeVbo ? (this.shapeVbo = gl.createBuffer(), gl.bindBuffer(gl.ARRAY_BUFFER, this.shapeVbo), gl.bufferData(gl.ARRAY_BUFFER, this.renderShape, gl.STATIC_DRAW)) : (gluu.mvPushMatrix(), mat4.rotateY(gluu.mvMatrix, gluu.mvMatrix, this.rot[0]), gl.uniformMatrix4fv(b.mvMatrixUniform, !1, gluu.mvMatrix), gl.bindTexture(gl.TEXTURE_2D, this.texture), gl.bindBuffer(gl.ARRAY_BUFFER, this.shapeVbo), gl.vertexAttribPointer(b.vertexPositionAttribute, 3, gl.FLOAT, !1, 36, 0), gl.vertexAttribPointer(b.textureCoordAttribute, 2, gl.FLOAT, !1, 36, 12), gl.vertexAttribPointer(b.lightAttribute, 4, gl.FLOAT, !1, 36, 20), gl.drawArrays(gl.TRIANGLES, 0, this.renderShape.length / 9), gluu.mvPopMatrix()), !0 === this.drawName))
      if (void 0 === this.nameVbo) {
        this.nameVbo = gl.createBuffer(), gl.bindBuffer(gl.ARRAY_BUFFER, this.nameVbo), gl.bufferData(gl.ARRAY_BUFFER, this.nameShape, gl.STATIC_DRAW), this.nameTexture = gl.createTexture(), gl.bindTexture(gl.TEXTURE_2D, this.nameTexture);
        var b = document.getElementById('texture512x64'),
          d = b.getContext('2d');
        d.clearRect(0, 0, b.width, b.height), d.fillStyle = 'rgba(50, 50, 50, 0.6)', d.font = '60px Arial';
        var c = d.measureText(this.name).width;
        d.fillRect(b.width / 2 - c / 2 - 10, 0, c + 20, b.height), d.fillStyle = 'white', d.lineWidth = 3, d.fillText(this.name, b.width / 2 - c / 2, 54), gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, b), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      } else gl.bindTexture(gl.TEXTURE_2D, this.nameTexture), gluu.mvPushMatrix(), d = camera.getRot(), mat4.translate(gluu.mvMatrix, gluu.mvMatrix, [0.15 * Math.sin(-this.rot[0]), 0, -0.15 * Math.cos(-this.rot[0])]), mat4.rotateY(gluu.mvMatrix, gluu.mvMatrix, d[0]), gl.uniformMatrix4fv(b.mvMatrixUniform, !1, gluu.mvMatrix), gl.bindBuffer(gl.ARRAY_BUFFER, this.nameVbo), gl.vertexAttribPointer(b.vertexPositionAttribute, 3, gl.FLOAT, !1, 36, 0), gl.vertexAttribPointer(b.textureCoordAttribute, 2, gl.FLOAT, !1, 36, 12), gl.vertexAttribPointer(b.lightAttribute, 4, gl.FLOAT, !1, 36, 20), gl.drawArrays(gl.TRIANGLES, 0, 6), gluu.mvPopMatrix();
  }
}, Player.prototype = Mob.prototype, Player.prototype.shape = new Float32Array([-0.3, 0.01, -0.3, 0, 0, -0.3, 0.01, 0.3, 0, 0, -0.3, 1.8, 0.3, 0, 0, 0.3, 1.8, -0.3, 0, 0, -0.3, 0.01, -0.3, 0, 0, -0.3, 1.8, -0.3, 0, 0, 0.3, 0.01, 0.3, 0, 0, -0.3, 0.01, -0.3, 0, 0, 0.3, 0.01, -0.3, 0, 0, 0.3, 1.8, -0.3, 0, 0, 0.3, 0.01, -0.3, 0, 0, -0.3, 0.01, -0.3, 0, 0, -0.3, 0.01, -0.3, 0, 0, -0.3, 1.8, 0.3, 0, 0, -0.3, 1.8, -0.3, 0, 0, 0.3, 0.01, 0.3, 0, 0, -0.3, 0.01, 0.3, 0, 0, -0.3, 0.01, -0.3, 0, 0, -0.3, 1.8, 0.3, 0, 0, -0.3, 0.01, 0.3, 0, 0, 0.3, 0.01, 0.3, 0, 0, 0.3, 1.8, 0.3, 0, 0, 0.3, 0.01, -0.3, 0, 0, 0.3, 1.8, -0.3, 0, 0, 0.3, 0.01, -0.3, 0, 0, 0.3, 1.8, 0.3, 0, 0, 0.3, 0.01, 0.3, 0, 0, 0.3, 1.8, 0.3, 0, 0, 0.3, 1.8, -0.3, 0, 0, -0.3, 1.8, -0.3, 0, 0, 0.3, 1.8, 0.3, 0, 0, -0.3, 1.8, -0.3, 0, 0, -0.3, 1.8, 0.3, 0, 0, 0.3, 1.8, 0.3, 0, 0, -0.3, 1.8, 0.3, 0, 0, 0.3, 0.01, 0.3, 0, 0]), Player.prototype.nameShape = new Float32Array([-1.2, 1.9, 0, 1, 1, 1500, 0, 1, 0, -1.2, 2.2, 0, 1, 0, 1500, 0, 1, 0, 1.2, 2.2, 0, 0, 0, 1500, 0, 1, 0, 1.2, 2.2, 0, 0, 0, 1500, 0, 1, 0, 1.2, 1.9, 0, 0, 1, 1500, 0, 1, 0, -1.2, 1.9, 0, 1, 1, 1500, 0, 1, 0, -1.2, 2.2, 0, 1, 0, 1500, 0, 1, 0, -1.2, 1.9, 0, 1, 1, 1500, 0, 1, 0, 1.2, 2.2, 0, 0, 0, 1500, 0, 1, 0, 1.2, 1.9, 0, 0, 1, 1500, 0, 1, 0, 1.2, 2.2, 0, 0, 0, 1500, 0, 1, 0, -1.2, 1.9, 0, 1, 1, 1500, 0, 1, 0]), Pointer.prototype.render = function() {
  var b = gluu.lineShader;
  gl.useProgram(b), mat4.identity(gluu.mvMatrix), mat4.identity(gluu.pMatrix), gl.uniformMatrix4fv(b.pMatrixUniform, !1, gluu.pMatrix), gl.uniformMatrix4fv(b.mvMatrixUniform, !1, gluu.mvMatrix), void 0 === this.vbol ? (this.vbol = gl.createBuffer(), b = new Float32Array([-0.03, 0, 0, 0, 0, 0.03, 0, 0, 0, 0, 0, -0.05, 0, 0, 0, 0, 0.05, 0, 0, 0]), this.vbol = gl.createBuffer(), gl.bindBuffer(gl.ARRAY_BUFFER, this.vbol), gl.bufferData(gl.ARRAY_BUFFER, b, gl.STATIC_DRAW)) : (gl.bindBuffer(gl.ARRAY_BUFFER, this.vbol), gl.vertexAttribPointer(b.vertexPositionAttribute, 3, gl.FLOAT, !1, 20, 0), gl.vertexAttribPointer(b.lightAttribute, 4, gl.FLOAT, !1, 20, 0), gl.vertexAttribPointer(b.textureCoordAttribute, 2, gl.FLOAT, !1, 20, 12), gl.drawArrays(gl.LINES, 0, 4));
}, SelectionBox.prototype.render = function(b) {
  if (void 0 !== b) {
    var d = gluu.lineShader;
    gl.useProgram(d), mat4.perspective(gluu.pMatrix, camera.fovy, gl.viewportWidth / gl.viewportHeight, 0.1, 6000);
    var c = camera.getMatrix();
    mat4.multiply(gluu.pMatrix, gluu.pMatrix, c), mat4.identity(gluu.mvMatrix), mat4.translate(gluu.mvMatrix, gluu.mvMatrix, [16 * b.chx + b.x, b.y, 16 * b.chz + b.z]), gl.uniformMatrix4fv(d.pMatrixUniform, !1, gluu.pMatrix), gl.uniformMatrix4fv(d.mvMatrixUniform, !1, gluu.mvMatrix), void 0 === this.vboBox ? (b = new Float32Array([0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0]), this.vboBox = gl.createBuffer(), gl.bindBuffer(gl.ARRAY_BUFFER, this.vboBox), gl.bufferData(gl.ARRAY_BUFFER, b, gl.STATIC_DRAW)) : (gl.bindBuffer(gl.ARRAY_BUFFER, this.vboBox), gl.vertexAttribPointer(d.vertexPositionAttribute, 3, gl.FLOAT, !1, 20, 0), gl.vertexAttribPointer(d.lightAttribute, 4, gl.FLOAT, !1, 20, 0), gl.vertexAttribPointer(d.textureCoordAttribute, 2, gl.FLOAT, !1, 20, 12), gl.drawArrays(gl.LINES, 0, 24));
  }
};
var gl, gluu = new Gluu(),
  glCanvas, lastTarget = !1,
  codeEditor = null,
  biomes, mcWorld, block, blockTexture = {
    loaded: !1
  },
  playerTexture = {
    loaded: !1
  },
  blockSelection, camera, _gameStop = !0,
  gpuMem = 0,
  lastTime = 0,
  last50msTime = 0,
  firstTime = 0,
  fps = 0,
  newSec = !1,
  sec = 0,
  iLag = 0,
  click = 0,
  selectE = !1,
  selectT = 0,
  selectTt = 1,
  textDiv = null,
  useBlock = {},
  punkty1 = [],
  pointer = new Pointer(),
  selectBox = new SelectionBox(),
  players = void 0;
