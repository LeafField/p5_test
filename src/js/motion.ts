import p5 from "p5";
import "../css/style.css";
import { Mover } from "./mover";

const app = document.querySelector<HTMLDivElement>("#app");

const sketch = (p: p5) => {
  let movers: Mover[] = [];
  // let attractor: Attractor;
  p.setup = () => {
    p.colorMode(p.HSB);
    p.createCanvas(600, 400);
    // mover = new Mover(p, 1, 0, 10);

    for (let i = 0; i < 10; i++) {
      movers[i] = new Mover(
        p,
        p.random(0.5, 5),
        p.random(p.width),
        p.random(p.height)
      );
    }
    console.log(movers[0]);
    // attractor = new Attractor(p);
  };
  p.draw = () => {
    p.background(255);

    if (p.mouseIsPressed) {
      let wind = p.createVector(0.1, 0);
      movers.forEach((mover) => {
        mover.applyForce(wind);
      });
    }

    // let gravity = p.createVector(0, 0.1);
    // mover.applyForce(gravity);

    // let attraction = attractor.attract(mover);
    // mover.applyForce(attraction);
    // mover.update();
    // mover.render();
    // mover.checkEdges();

    for (let i = 0; i < movers.length; i++) {
      for (let j = 0; j < movers.length; j++) {
        if (i !== j) {
          let attraction = movers[j].attract(movers[i]);
          movers[i].applyForce(attraction);
        }
      }
      movers[i].update();
      movers[i].render();
      movers[i].checkEdges();
    }

    // attractor.render();
  };
};

if (app) {
  new p5(sketch, app);
}
