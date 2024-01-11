import "../css/style.css";
import p5 from "p5";

const app = document.querySelector<HTMLDivElement>("#app");

const sketch = (p: p5) => {
  let range: number;
  let theta: number;
  p.setup = () => {
    p.createCanvas(600, 400);
    range = 50;
    theta = 0;
  };

  p.draw = () => {
    p.background(255);
    p.translate(p.width / 2, p.height / 2);

    let x = range * p.cos(theta);
    let y = range * p.sin(theta);
    console.log(theta, x, y);

    p.noStroke();
    p.fill(200);
    p.ellipse(x, y, 20, 20);
    p.ellipse(0, 0, 5, 5);

    theta += 0.1;
  };
};

if (app) {
  new p5(sketch, app);
}
