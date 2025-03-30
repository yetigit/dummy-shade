precision mediump float;
uniform float t;
void main() {
    float cos_t = cos(t);
    float sin_t = sin(t);
    float r = cos_t * 0.5 + 0.5;
    float g = sin_t * 0.5 + 0.5;
    float b = cos_t * sin_t + 0.5;
    gl_FragColor = vec4(r, g, b, 1.0);
}
