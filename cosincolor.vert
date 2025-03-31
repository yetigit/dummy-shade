attribute vec2 position;
uniform mat2 MVP;
void main() {
    vec2 pos = MVP * position;
    gl_Position = vec4(pos, 0.0, 1.0);
}
