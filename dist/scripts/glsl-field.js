(function () {
  var canvas = document.getElementById('glsl-canvas');
  if (!canvas) return;

  // Skip on low-end devices
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
    canvas.style.display = 'none';
    return;
  }

  var gl = canvas.getContext('webgl', { antialias: true, alpha: false });
  if (!gl) { canvas.style.display = 'none'; return; }

  var vert = '\n    attribute vec2 a_pos;\n    void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }\n  ';

  var frag = '\n    precision highp float;\n    uniform vec2  u_res;\n    uniform float u_time;\n\n    vec2 hash2(vec2 p) {\n      p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));\n      return fract(sin(p) * 43758.5453);\n    }\n\n    float noise(vec2 p) {\n      vec2 i = floor(p);\n      vec2 f = fract(p);\n      vec2 u = f * f * (3.0 - 2.0 * f);\n      float a = dot(hash2(i + vec2(0,0)), f - vec2(0,0));\n      float b = dot(hash2(i + vec2(1,0)), f - vec2(1,0));\n      float c = dot(hash2(i + vec2(0,1)), f - vec2(0,1));\n      float d = dot(hash2(i + vec2(1,1)), f - vec2(1,1));\n      return mix(mix(a,b,u.x), mix(c,d,u.x), u.y) * 0.5 + 0.5;\n    }\n\n    float fbm(vec2 p) {\n      float v = 0.0; float a = 0.5;\n      for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.0; a *= 0.5; }\n      return v;\n    }\n\n    float gold(vec2 c, float s) {\n      return fract(tan(distance(c * (s + 1.61803398874989),\n                                vec2(s * 0.61803398874989, s * 0.41421356237))) * 43758.5453);\n    }\n\n    void main() {\n      vec2 uv = gl_FragCoord.xy / u_res.xy;\n      float aspect = u_res.x / u_res.y;\n      vec2 p = (uv - 0.5) * vec2(aspect, 1.0);\n      float t = u_time * 0.008;\n\n      vec2 q = vec2(fbm(p + vec2(0.0, 0.0) + t * 0.6),\n                    fbm(p + vec2(5.2, 1.3) + t * 0.4));\n      vec2 r = vec2(fbm(p + 4.0 * q + vec2(1.7, 9.2) + t * 0.3),\n                    fbm(p + 4.0 * q + vec2(8.3, 2.8) + t * 0.2));\n      float f = fbm(p + 4.0 * r + t * 0.15);\n\n      vec3 base = vec3(0.969, 0.961, 0.941);\n      float perturb = (f - 0.5) * 0.06;\n      vec3 shift = mix(vec3(0.96, 0.97, 1.0), vec3(1.0, 0.96, 0.88), f) * perturb;\n      vec3 col = base + shift;\n\n      float vd = length((uv - 0.5) * vec2(aspect, 1.0));\n      col *= 1.0 - smoothstep(0.4, 1.1, vd) * 0.03;\n      col += (gold(gl_FragCoord.xy, u_time) - 0.5) * 0.004;\n\n      gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);\n    }\n  ';

  function compile(type, src) {
    var s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
  }

  var prog = gl.createProgram();
  gl.attachShader(prog, compile(gl.VERTEX_SHADER, vert));
  gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, frag));
  gl.linkProgram(prog);
  gl.useProgram(prog);

  var buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
  var loc = gl.getAttribLocation(prog, 'a_pos');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  var uRes  = gl.getUniformLocation(prog, 'u_res');
  var uTime = gl.getUniformLocation(prog, 'u_time');
  var dpr   = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    canvas.width  = window.innerWidth  * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width  = window.innerWidth  + 'px';
    canvas.style.height = window.innerHeight + 'px';
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  resize();
  window.addEventListener('resize', resize);

  var last  = 0;
  var start = performance.now();

  function frame(now) {
    requestAnimationFrame(frame);
    if (now - last < 33) return; // ~30fps
    last = now;
    gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.uniform1f(uTime, (now - start) / 1000);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
  requestAnimationFrame(frame);
})();
