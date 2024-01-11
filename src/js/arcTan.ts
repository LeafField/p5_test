import "../css/style.css";
import p5 from "p5";

const app = document.querySelector<HTMLDivElement>("#app");

const sketch = (p: p5) => {
  let eye: Eye;
  p.setup = () => {
    p.createCanvas(720, 400);
    p.noStroke();
    eye = new Eye(p, 250, 160, 120);
  };
  p.draw = () => {
    p.background(102);
    eye.update(p.mouseX, p.mouseY);
    eye.display();
  };
};

if (app) {
  new p5(sketch, app);
}

class Eye {
  angle: number;

  constructor(
    private p: p5,
    private x: number,
    private y: number,
    private size: number
  ) {
    this.angle = 0;
  }

  update(mx: number, my: number) {
    this.angle = this.p.atan2(my - this.y, mx - this.x);
  }

  display() {
    this.p.push();
    this.p.translate(this.x, this.y);
    this.p.fill(255);
    this.p.ellipse(0, 0, this.size, this.size);
    this.p.rotate(this.angle);
    this.p.fill(153, 204, 0);
    this.p.ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
    this.p.pop();
  }
}
