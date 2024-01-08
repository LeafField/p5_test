import "../css/style.css";
import p5 from "p5";

const app = document.querySelector<HTMLDivElement>("#app");

const sketch = (p: p5) => {
  let vecLocation: p5.Vector;
  let vecVelocity: p5.Vector;
  let hue: number;

  p.setup = () => {
    // p.frameRate(5);
    p.createCanvas(600, 600);
    p.colorMode(p.HSB);
    // p.angleMode(p.DEGREES);
    vecLocation = p.createVector(p.width / 2, 40);
  };

  p.draw = () => {
    p.background("#fff");
    // console.log(p.ceil(p.abs(p.sin(p.frameCount) * 360)));
    // vecVelocity = p.createVector(3, p.sin(p.frameCount) * 5);
    vecVelocity = p.createVector(
      p.cos(p.radians(p.frameCount)) * 3,
      p.sin(p.radians(p.frameCount)) * 3
    );
    vecLocation.add(vecVelocity);
    console.log("x:", vecLocation.x, "y:", vecLocation.y);
    p.noStroke();
    hue = p.ceil(p.abs(p.sin(p.radians(p.frameCount)) * 360));
    p.fill(hue, 100, 100, 1);
    p.ellipse(vecLocation.x, vecLocation.y, 80);

    p.fill(0);
    p.ellipse(p.width / 2, p.height / 2, 10, 10);
  };
};

if (app) {
  new p5(sketch, app);
}
