shadersCode.fs.bloom = "precision mediump float;\
varying vec2 vTextureCoord;\
varying float aaa;\
varying vec4 sLight;\
varying vec4 color;\
varying vec3 sky;\
uniform vec4 skyColor;\
uniform sampler2D uSampler;\
void main(void) {\
  gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\
  if (gl_FragColor.a < 0.3) discard;\
  gl_FragColor *= color;\
  gl_FragColor = gl_FragColor * sLight;\
  vec4 FragColor2 = gl_FragColor + aaa * skyColor;\
  float a = 0.0;\
  if (FragColor2.r > skyColor.x) FragColor2.r = max(skyColor.x, gl_FragColor.r);\
  if (FragColor2.g > skyColor.y) FragColor2.g = max(skyColor.y, gl_FragColor.g);\
  if (FragColor2.b > skyColor.z) FragColor2.b = max(skyColor.z, gl_FragColor.b);\
  gl_FragColor = FragColor2;\
}",
shadersCode.vs.bloom = "attribute vec3 aVertexPosition;\
attribute vec4 lightValue;\
attribute vec2 aTextureCoord;\
uniform float lod;\
uniform float sun;\
uniform float brightness;\
uniform mat4 uMVMatrix;\
uniform mat4 uMSMatrix;\
uniform mat4 uPMatrix;\
varying vec2 vTextureCoord;\
varying float aaa;\
varying vec4 color;\
varying vec4 sLight;\
void main(void) {\
  gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\
  vTextureCoord = aTextureCoord;\
  aaa = sqrt((gl_Position.x) * (gl_Position.x) + (gl_Position.z) * (gl_Position.z)) / (lod * 13.5) - 0.30;\
  if (aaa < 0.0) aaa = 0.0;\
  if (aaa > 1.0) aaa = 1.0;\
  float skylight = floor(lightValue.x / 100.0);\
  float blocklight = lightValue.x - skylight * 100.0;\
  float slight = ((skylight * sun) / 15.0 + blocklight / 15.0);\
  if (slight > 1.0) slight = 1.0;\
  slight = slight * (1.0 - brightness) + brightness;\
  slight *= lightValue.z;\
  sLight = vec4(slight, slight, slight, 1.0);\
  if (lightValue.a != 0.0) {\
    float m5 = floor(lightValue.a / (256.0 * 256.0));\
    float m6 = floor((lightValue.a - m5 * 256.0 * 256.0) / (256.0));\
    float m7 = lightValue.a - m5 * 256.0 * 256.0 - m6 * 256.0;\
    color = vec4(m5 / 255.0, m6 / 255.0, m7 / 255.0, 1.0);\
  } else color = vec4(1.0, 1.0, 1.0, 1.0);\
}",
shadersCode.fs.line = "precision mediump float;\
varying vec4 color;\
void main(void) {\
  gl_FragColor = color;\
}"
shadersCode.vs.line = "attribute vec3 aVertexPosition;\
attribute vec2 aTextureCoord;\
attribute vec4 lightValue;\
uniform mat4 uMVMatrix;\
uniform mat4 uPMatrix;\
varying vec4 color;\
void main(void) {\
  gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\
  color = vec4(1.0, 1.0, 1.0, 1.0);\
  color.r = aTextureCoord.x;\
  color.g = lightValue.x;\
  color = vec4(0.0, 0.0, 0.0, 1.0);\
}",
shadersCode.fs.selection = "precision mediump float;\
varying vec2 vTextureCoord;\
varying float aaa;\
varying float slight;\
varying vec4 color;\
uniform sampler2D uSampler;\
void main(void) {\
  gl_FragColor = color;\
  gl_FragColor.a = 1.0;\
}"
shadersCode.vs.selection = "attribute vec3 aVertexPosition;\
attribute vec4 lightValue;\
attribute vec2 aTextureCoord;\
uniform mat4 uMVMatrix;\
uniform mat4 uMSMatrix;\
uniform mat4 uPMatrix;\
varying vec2 vTextureCoord;\
varying float aaa;\
varying vec4 color;\
varying float slight;\
void main(void) {\
  gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\
  vTextureCoord = aTextureCoord;\
  color = vec4(0.0, 0.0, 0.0, 1.0);\
  float yy = floor(lightValue.y / (256.0 * 256.0));\
  float zx = floor((lightValue.y - yy * 256.0 * 256.0) / (256.0));\
  float cv = lightValue.y - yy * 256.0 * 256.0 - zx * 256.0;\
  color.r = yy / 255.0;\
  color.g = zx / 255.0;\
  color.b = cv / 255.0;\
  slight = 1.0;\
}",
shadersCode.fs.standard = "precision mediump float;\
varying vec2 vTextureCoord;\
varying float aaa;\
varying vec4 sLight;\
varying vec4 color;\
varying vec3 sky;\
uniform vec4 skyColor;\
uniform sampler2D uSampler;\
void main(void) {\
  gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\
  if (gl_FragColor.a < 0.3) discard;\
  gl_FragColor *= color;\
  gl_FragColor = gl_FragColor * sLight;\
  gl_FragColor = mix(gl_FragColor, skyColor, aaa);\
}"
shadersCode.vs.standard = "attribute vec3 aVertexPosition;\
attribute vec4 lightValue;\
attribute vec2 aTextureCoord;\
uniform float lod;\
uniform float sun;\
uniform float brightness;\
uniform mat4 uMVMatrix;\
uniform mat4 uMSMatrix;\
uniform mat4 uPMatrix;\
varying vec2 vTextureCoord;\
varying float aaa;\
varying vec4 color;\
varying vec4 sLight;\
void main(void) {\
  gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\
  vTextureCoord = aTextureCoord;\
  aaa = sqrt((gl_Position.x) * (gl_Position.x) + (gl_Position.z) * (gl_Position.z)) / (lod * 13.0) - 0.25;\
  if (aaa < 0.0) aaa = 0.0;\
  if (aaa > 1.0) aaa = 1.0;\
  float skylight = floor(lightValue.x / 100.0);\
  float blocklight = lightValue.x - skylight * 100.0;\
  float slight = ((skylight * sun) / 15.0 + blocklight / 15.0);\
  if (slight > 1.0) slight = 1.0;\
  slight = slight * (1.0 - brightness) + brightness;\
  slight *= lightValue.z;\
  sLight = vec4(slight, slight, slight, 1.0);\
  if (lightValue.a != 0.0) {\
    float m5 = floor(lightValue.a / (256.0 * 256.0));\
    float m6 = floor((lightValue.a - m5 * 256.0 * 256.0) / (256.0));\
    float m7 = lightValue.a - m5 * 256.0 * 256.0 - m6 * 256.0;\
    color = vec4(m5 / 255.0, m6 / 255.0, m7 / 255.0, 1.0);\
  } else color = vec4(1.0, 1.0, 1.0, 1.0);\
}";
