import "../css/style.css";
import p5 from "p5";

const app = document.querySelector<HTMLDivElement>("#app");

const sketch = (p: p5) => {
  p.setup = () => {
    p.frameRate(10);
    p.createCanvas(400, 300);
    p.colorMode(p.HSB);
  };

  p.draw = () => {
    p.noStroke();
    p.fill(p.random(180, 200), 100, 100, 0.3);
    p.ellipse(p.random(0, p.width), p.random(0, p.height), 80, 80);
  };
};

if (app) {
  new p5(sketch, app);
}
