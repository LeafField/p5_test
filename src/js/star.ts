import "../css/style.css";
import p5 from "p5";

const app = document.querySelector<HTMLElement>("#app");

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(720, 400);
  };

  p.draw = () => {
    p.background(102);

    p.push();
    p.translate(p.width / 2, p.height / 2);
    p.stroke(4);
    p.rotate(p.frameCount / -100.0);
    star(p, 0, 0, 30, 70, 5);
    p.pop();
  };
};

if (app) {
  new p5(sketch, app);
}

function star(
  p: p5,
  x: number,
  y: number,
  radius1: number,
  radius2: number,
  npoints: number
) {
  let angle = p.TWO_PI / npoints; // 360度÷頂点五個 = 72度
  let halfAngle = angle / 2.0; // 36度
  p.beginShape();
  for (let a = 0; a < p.TWO_PI; a += angle) {
    // 極座標を直行座標に変換、x=cosθ * range、y=sinθ * range
    let sx = x + p.cos(a) * radius2;
    let sy = y + p.sin(a) * radius2;
    p.vertex(sx, sy);
    sx = x + p.cos(a + halfAngle) * radius1;
    sy = y + p.sin(a + halfAngle) * radius1;
    p.vertex(sx, sy);
  }
  p.endShape(p.CLOSE);
}
