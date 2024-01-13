import "../css/style.css";
import p5 from "p5";

const app = document.querySelector<HTMLDivElement>("#app");

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(600, 400);
    p.stroke(200);
  };

  p.draw = () => {
    p.background(255);
    p.translate(p.width / 2, p.height / 2);
    p.rotate(p.frameCount / 100);
    p.beginShape();
    for (let angle = 0; angle < p.TWO_PI * 2; angle += 0.01) {
      let range = p.sin(angle * (5 / 2)) * 100; //極座標
      let x = p.cos(angle) * range;
      let y = p.sin(angle) * range;
      p.vertex(x, y);
    }
    p.endShape();
  };
};

if (app) {
  new p5(sketch, app);
}
