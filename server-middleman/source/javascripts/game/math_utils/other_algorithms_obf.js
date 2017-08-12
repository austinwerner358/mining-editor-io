/**
 * @param {Uint8Array} buf
 * @return {?}
 */
function ab2str(buf) {
  /** @type {string} */
  var optsData = "";
  var len = buf.length;
  /** @type {number} */
  var length = Math.pow(2, 10);
  var i;
  var n;
  /** @type {number} */
  i = 0;
  for (;i < len;i += length) {
    /** @type {number} */
    n = Math.min(length, len - i);
    n = buf.subarray(i, i + n);
    optsData += String.fromCharCode.apply(null, n);
  }
  return optsData;
}
/**
 * @param {string} str
 * @return {?}
 */
function str2ab(str) {
  /** @type {ArrayBuffer} */
  var buf = new ArrayBuffer(str.length);
  /** @type {Uint8Array} */
  var bufView = new Uint8Array(buf);
  /** @type {number} */
  var i = 0;
  var len = str.length;
  for (;i < len;i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}
/**
 * @param {Array} codeSegments
 * @return {?}
 */
function jenkins_hash(codeSegments) {
  /** @type {number} */
  var expected_hash = 0;
  /** @type {number} */
  var i = 0;
  for (;i < codeSegments.length;++i) {
    expected_hash += codeSegments[i];
    expected_hash += expected_hash << 10;
    expected_hash ^= expected_hash >> 6;
  }
  return expected_hash += expected_hash << 3, expected_hash ^= expected_hash >> 11, expected_hash + (expected_hash << 15) >>> 0;
}
/**
 * @param {number} i
 * @return {?}
 */
function spiralLoop(i) {
  /** @type {number} */
  var x = Math.floor((Math.sqrt(i + 1) - 1) / 2) + 1;
  /** @type {number} */
  var showEvery = 2 * x;
  /** @type {number} */
  i = (1 + i - 8 * x * (x - 1) / 2) % (8 * x);
  /** @type {Array} */
  var point = [0, 0, x];
  switch(Math.floor(i / (2 * x))) {
    case 0:
      /** @type {number} */
      point[0] = i - x;
      /** @type {number} */
      point[1] = -x;
      break;
    case 1:
      /** @type {number} */
      point[0] = x;
      /** @type {number} */
      point[1] = i % showEvery - x;
      break;
    case 2:
      /** @type {number} */
      point[0] = x - i % showEvery;
      /** @type {number} */
      point[1] = x;
      break;
    case 3:
      /** @type {number} */
      point[0] = -x;
      /** @type {number} */
      point[1] = x - i % showEvery;
  }
  return point;
}
;
