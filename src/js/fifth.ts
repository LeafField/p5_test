import "../css/style.css";
import p5 from "p5";

const app = document.querySelector<HTMLDivElement>("#app");

const normalize = (x: number, y: number) => {
  const magnitude = Math.sqrt(x ** 2 + y ** 2);
  return {
    x: x / magnitude,
    y: y / magnitude,
  };
};

const magnitude = (x: number, y: number) => {
  return Math.sqrt(x ** 2 + y ** 2);
};

const sketch = (p: p5) => {
  let v1: p5.Vector, v2: p5.Vector, v3: p5.Vector, v4: p5.Vector;
  let normal: p5.Vector, normal2: p5.Vector;
  let mouse: p5.Vector, origin: p5.Vector;

  p.setup = () => {
    p.createCanvas(600, 400);
    v1 = p.createVector(1, 2);
    v2 = p.createVector(3, 4);

    v2.sub(v1);
    console.log(v2);

    v3 = v2;
    v3.mult(3);
    console.log(v3);

    v4 = v3;
    v4.div(2);
    console.log(v4);

    normal = p.createVector(1, 1);
    normal.normalize();
    console.log(normal);
    console.log(normalize(1, 1));

    normal2 = p.createVector(3, 0);
    normal2.normalize();
    console.log(normal2);
    console.log(normalize(3, 0));

    console.log(normal2.mag());
    const mag = normalize(3, 0);
    console.log(magnitude(mag.x, mag.y));
  };

  p.draw = () => {
    p.background(255);

    mouse = p.createVector(p.mouseX, p.mouseY);
    origin = p.createVector(p.width / 2, p.height / 2);
    mouse.sub(origin);
    mouse.normalize();
    mouse.mult(100);
    p.translate(p.width / 2, p.height / 2);
    p.line(0, 0, mouse.x, mouse.y);
  };
};

if (app) {
  new p5(sketch, app);
}
