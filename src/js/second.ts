import "../css/style.css";
import p5 from "p5";

const app = document.querySelector<HTMLDivElement>("#app");

const sketch = (p: p5) => {
  let vecLocation: p5.Vector[] = [];
  let vecVelocity: p5.Vector[] = [];
  let vecAccel: p5.Vector[] = [];
  let randomColor: number[] = [];
  let randomBallSize: number[] = [];
  let num: number = 100;

  p.setup = () => {
    // p.frameRate(10);
    p.createCanvas(400, 300);
    p.colorMode(p.HSB);
    for (let i = 0; i < num; i++) {
      vecLocation[i] = p.createVector(p.width / 2, p.height / 2);
      vecVelocity[i] = p.createVector(p.random(2, 5), p.random(2, 8));
      vecAccel[i] = p.createVector(0, 0.5);
      randomColor[i] = p.random(0, 360);
      randomBallSize[i] = p.random(20, 80);
    }
  };

  p.draw = () => {
    p.background("#fff");
    for (let i = 0; i < num; i++) {
      p.noStroke();
      p.fill(randomColor[i], 100, 100, 1);
      p.ellipse(
        vecLocation[i].x,
        vecLocation[i].y,
        randomBallSize[i],
        randomBallSize[i]
      );

      vecVelocity[i].add(vecAccel[i]);
      vecLocation[i].add(vecVelocity[i]);

      if (vecLocation[i].x > p.width || vecLocation[i].x < 0) {
        vecVelocity[i].x *= -1;
      }

      if (vecLocation[i].y > p.height || vecLocation[i].y < 0) {
        vecVelocity[i].y *= -1;
      }
    }

    // console.log(
    //   "位置:",
    //   vecLocation.y,
    //   "速度:",
    //   vecVelocity.y,
    //   "加速度:",
    //   vecAccel.y
    // );
  };
};

if (app) {
  new p5(sketch, app);
}
