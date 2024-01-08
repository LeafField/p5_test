import "../css/style.css";
import p5 from "p5";

const app = document.querySelector<HTMLDivElement>("#app");

const sketch = (p: p5) => {
  let bugA: JitterA;
  let bugB: JitterB;
  p.setup = () => {
    p.createCanvas(600, 400);
    bugA = new JitterA(p);
    bugB = new JitterB(p);
  };

  p.draw = () => {
    p.background(0);

    bugA.move();
    bugA.display();

    bugB.move();
    bugB.display();
  };

  p.mouseDragged = () => {};
};

if (app) {
  new p5(sketch, app);
}

abstract class ParentJitter {
  protected x: number;
  protected y: number;
  protected diameter: number;
  protected speed: number;

  constructor(protected readonly p: p5) {
    this.x = this.p.random(this.p.width);
    this.y = this.p.random(this.p.height);
    this.diameter = this.p.random(10, 30);
    this.speed = 1;
  }

  move() {
    this.x += this.p.random(-this.speed, this.speed);
    this.y += this.p.random(-this.speed, this.speed);
  }
}

class JitterA extends ParentJitter {
  display() {
    this.p.ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

class JitterB extends ParentJitter {
  display() {
    this.p.rect(this.x, this.y, this.diameter, this.diameter);
  }
}
