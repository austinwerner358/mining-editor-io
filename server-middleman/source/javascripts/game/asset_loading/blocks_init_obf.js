/**
 * @return {undefined}
 */
function initBlocks() {
  /** @type {*} */
  texLib = JSON.parse(Readfile.readTxt("game-data/textures.json"));
  console.log(texLib);
  /** @type {*} */
  block = JSON.parse(Readfile.readTxt("game-data/blocks.json"));
  /** @type {number} */
  block.length = 300;
  /** @type {*} */
  biomes = JSON.parse(Readfile.readTxt("game-data/biomes.json"));
  /** @type {number} */
  var i = 0;
  for (;256 > i;i++) {
    if (void 0 === biomes[i]) {
      biomes[i] = biomes[0];
    }
  }
  /** @type {*} */
  shapeLib = JSON.parse(Readfile.readTxt("game-data/shapes.json"));
  console.log(shapeLib);
  /** @type {number} */
  texLib.texF = 1 / texLib.row;
  /** @type {number} */
  var percentage = 0;
  /** @type {number} */
  var s = 0;
  /** @type {number} */
  var l = texLib.texF;
  /** @type {number} */
  var row = 0;
  /** @type {Uint8Array} */
  block.lightSource = new Uint8Array(block.length);
  /** @type {Float32Array} */
  block.lightTransmission = new Float32Array(block.length);
  /** @type {number} */
  i = 0;
  for (;i < block.length;i++) {
    if (void 0 === block[i]) {
      block[i] = {};
      /** @type {number} */
      block[i].type = 0;
    }
    if (void 0 === block[i][0]) {
      block[i][0] = {};
      /** @type {number} */
      block[i][0].type = 0;
    }
    block.lightSource[i] = block[i].lightSource || 0;
    block.lightTransmission[i] = 1 === block[i].type ? block[i].lightTransmission || 0 : block[i].lightTransmission || 1;
    var j;
    for (j in block[i]) {
      if ("mask" === j) {
        /** @type {number} */
        block[i][j] = parseInt(block[i][j], 16);
      } else {
        if (void 0 !== block[i][j].shapeName) {
          block[i][j].shape = {};
          if (void 0 === block[i][j].normal) {
            /** @type {number} */
            block[i][j].normal = 1;
          }
          var y;
          for (y in shapeLib[block[i][j].shapeName]) {
            /** @type {Array} */
            block[i][j].shape[y] = [];
            if (void 0 !== block[i][j][y]) {
              row = texLib.texture[block[i][j][y]];
              /** @type {number} */
              percentage = row % texLib.row;
              /** @type {number} */
              s = (row - percentage) / texLib.row;
            } else {
              if (void 0 !== block[i][j].defaultTexture) {
                row = texLib.texture[block[i][j].defaultTexture];
                /** @type {number} */
                percentage = row % texLib.row;
                /** @type {number} */
                s = (row - percentage) / texLib.row;
              }
            }
            /** @type {Float32Array} */
            block[i][j].shape[y] = new Float32Array(shapeLib[block[i][j].shapeName][y].length);
            var p;
            var q;
            var v;
            var theta2;
            var halfTotalAngle;
            theta2 = void 0 === block[i][j].roty ? 0 : block[i][j].roty;
            halfTotalAngle = void 0 === block[i][j].rotx ? 0 : block[i][j].rotx;
            /** @type {number} */
            var x = 0;
            for (;x < shapeLib[block[i][j].shapeName][y].length;x += 5) {
              if (0 !== theta2 || 0 !== halfTotalAngle) {
                /** @type {number} */
                p = Math.cos(halfTotalAngle) * (shapeLib[block[i][j].shapeName][y][x] - 0.5) - Math.sin(halfTotalAngle) * (shapeLib[block[i][j].shapeName][y][x + 1] - 0.5) + 0.5;
                /** @type {number} */
                q = Math.sin(halfTotalAngle) * (shapeLib[block[i][j].shapeName][y][x] - 0.5) + Math.cos(halfTotalAngle) * (shapeLib[block[i][j].shapeName][y][x + 1] - 0.5) + 0.5;
                v = shapeLib[block[i][j].shapeName][y][x + 2];
                /** @type {number} */
                row = Math.cos(theta2) * (p - 0.5) - Math.sin(theta2) * (v - 0.5) + 0.5;
                /** @type {number} */
                p = Math.sin(theta2) * (p - 0.5) + Math.cos(theta2) * (v - 0.5) + 0.5;
                /** @type {number} */
                block[i][j].shape[y][x] = row;
                /** @type {number} */
                block[i][j].shape[y][x + 1] = q;
                /** @type {number} */
                block[i][j].shape[y][x + 2] = p;
              } else {
                block[i][j].shape[y][x] = shapeLib[block[i][j].shapeName][y][x];
                block[i][j].shape[y][x + 1] = shapeLib[block[i][j].shapeName][y][x + 1];
                block[i][j].shape[y][x + 2] = shapeLib[block[i][j].shapeName][y][x + 2];
              }
              /** @type {number} */
              block[i][j].shape[y][x + 3] = l * (shapeLib[block[i][j].shapeName][y][x + 3] + percentage);
              /** @type {number} */
              block[i][j].shape[y][x + 4] = l * (shapeLib[block[i][j].shapeName][y][x + 4] + s);
            }
          }
        }
      }
    }
  }
  /** @type {number} */
  useBlock.id = 1;
  /** @type {number} */
  useBlock.data = 0;
  console.log(block);
};
