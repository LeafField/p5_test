import "../css/style.css";
import p5 from "p5";

const app = document.querySelector<HTMLDivElement>("#app");

const sketch = (p: p5) => {
  let angle: number;
  let aVelocity: number;

  p.setup = () => {
    p.createCanvas(600, 400);
    p.colorMode(p.HSB);
    angle = 0;
    aVelocity = 0.1;
  };
  p.draw = () => {
    p.background(255);

    p.push();
    p.translate(p.width / 2, p.height / 2);
    p.rotate(angle);
    p.rectMode(p.CENTER);
    p.rect(0, 0, 30, 30);
    p.pop();

    p.push();
    p.translate(50, 50);
    p.rotate(angle);
    p.rectMode(p.CENTER);
    p.rect(0, 0, 50, 50);
    p.pop();

    angle += aVelocity;
  };
};

if (app) {
  new p5(sketch, app);
}
