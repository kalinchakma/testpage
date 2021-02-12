const canvas = document.getElementById("canvas");
console.dir(canvas);

const initWebGL = (canvas) => {
    let gl = null;
    let msg = "Your browser dose not support web GL " +
    "or it is not enable by default";
    try {
        gl = canvas.getContext("experimental-webgl");
    } catch (e) {
        msg = "Error creating WebGL context " + e.toString();
    }
    if (!gl) {
        alert(msg);
        throw new Error(msg);
    }
    
    return gl;
};

const initViewport = (gl, canvas) => {
    gl.viewport(0,0,canvas.width,canvas.width);
};

// create vertex data for a square to be drawn
const createSquare = gl => {
    let vertexBuffer;
    vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    let verts = [
        .5, .5, 0.0,
        -.5, .5, 0.0,
        .5, -.5, 0.0,
        -.5, -.5, 0.0 
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);
    let square = {
        buffer: vertexBuffer,
        vertSize: 3,
        nVerts: 4,
        primtype: gl.TRIANGLE_STRIP
    };
    return square;
};


let math = mat4.create();
console.log(math);

initViewport(initWebGL(canvas), canvas);
