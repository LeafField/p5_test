import "./style.css";
import p5 from "p5";

const app = document.querySelector<HTMLDivElement>("#app");

const sketch = (p: p5) => {
  let locationX: number, locationY: number;
  let velocityX: number, velocityY: number;
  let accelX: number;

  p.setup = () => {
    // p.frameRate(10);
    p.createCanvas(400, 300);
    p.colorMode(p.HSB);
    locationX = p.width / 2;
    locationY = p.height / 2;
    velocityX = 10;
    velocityY = 5;
    accelX = -1;
  };
  p.draw = () => {
    p.background("#fff");
    p.noStroke();
    p.fill(200, 100, 100, 1);
    p.ellipse(locationX, locationY, 80, 80);
    velocityX += accelX;
    locationX += velocityX;
    // locationY += velocityY;

    if (locationX === p.width) {
      locationX = 0;
    }

    if (locationX > p.width || locationX < 0) {
      velocityX = velocityX * -1;
    }
    if (locationY > p.height || locationY < 0) {
      velocityY *= -1;
    }

    console.log("位置:", locationX, "速度:", velocityX, "加速度:", accelX);
  };
};

if (app) {
  new p5(sketch, app);
}
