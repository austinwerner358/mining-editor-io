/**
 * @return {undefined}
 */
function Pointer() {
}
/**
 * @return {undefined}
 */
Pointer.prototype.render = function() {
  var shaderProgram = gluu.lineShader;
  gl.useProgram(shaderProgram);
  mat4.identity(gluu.mvMatrix);
  mat4.identity(gluu.pMatrix);
  gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, gluu.pMatrix);
  gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, gluu.mvMatrix);
  if (void 0 === this.vbol) {
    this.vbol = gl.createBuffer();
    /** @type {Float32Array} */
    shaderProgram = new Float32Array([-0.03, 0, 0, 0, 0, 0.03, 0, 0, 0, 0, 0, -0.05, 0, 0, 0, 0, 0.05, 0, 0, 0]);
    this.vbol = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vbol);
    gl.bufferData(gl.ARRAY_BUFFER, shaderProgram, gl.STATIC_DRAW);
  } else {
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vbol);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 3, gl.FLOAT, false, 20, 0);
    gl.vertexAttribPointer(shaderProgram.lightAttribute, 4, gl.FLOAT, false, 20, 0);
    gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, 2, gl.FLOAT, false, 20, 12);
    gl.drawArrays(gl.LINES, 0, 4);
  }
};
/**
 * @return {undefined}
 */
function SelectionBox() {
}
/**
 * @param {Object} data
 * @return {undefined}
 */
SelectionBox.prototype.render = function(data) {
  if (void 0 !== data) {
    var shaderProgram = gluu.lineShader;
    gl.useProgram(shaderProgram);
    mat4.perspective(gluu.pMatrix, camera.fovy, gl.viewportWidth / gl.viewportHeight, 0.1, 6E3);
    var transformMatrix = camera.getMatrix();
    mat4.multiply(gluu.pMatrix, gluu.pMatrix, transformMatrix);
    mat4.identity(gluu.mvMatrix);
    mat4.translate(gluu.mvMatrix, gluu.mvMatrix, [16 * data.chx + data.x, data.y, 16 * data.chz + data.z]);
    gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, gluu.pMatrix);
    gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, gluu.mvMatrix);
    if (void 0 === this.vboBox) {
      /** @type {Float32Array} */
      data = new Float32Array([0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0]);
      this.vboBox = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.vboBox);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    } else {
      gl.bindBuffer(gl.ARRAY_BUFFER, this.vboBox);
      gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 3, gl.FLOAT, false, 20, 0);
      gl.vertexAttribPointer(shaderProgram.lightAttribute, 4, gl.FLOAT, false, 20, 0);
      gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, 2, gl.FLOAT, false, 20, 12);
      gl.drawArrays(gl.LINES, 0, 24);
    }
  }
};
