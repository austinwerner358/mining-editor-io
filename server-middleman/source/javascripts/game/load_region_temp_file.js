/** @type {string} */
threadsCode.loadRegionThread = "self.addEventListener('message', function(d) {\
  var moveX = d.data.x;\
  var moveY = d.data.y;\
  var xhr = new XMLHttpRequest;\
  xhr.open('GET', d.data.name, false);\
  xhr.responseType = 'arraybuffer';\
  try {\
    xhr.send();\
  } catch (e) {\
    self.postMessage({\
      loaded : 0,\
      x : moveX,\
      y : moveY\
    });\
    self.close();\
    return;\
  }\
  var ret = new Uint8Array(xhr.response);\
  self.postMessage({\
    loaded : 1,\
    x : moveX,\
    y : moveY,\
    data : ret.buffer\
  }, [ret.buffer]);\
  self.close();\
}, false);\
";
