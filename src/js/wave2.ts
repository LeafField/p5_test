import "../css/style.css";
import p5 from "p5";

const app = document.querySelector<HTMLDivElement>("#app");

const skech = (p: p5) => {
  let velocity: number = 0; //速度
  let waveHeight: number = 80; //波の高さ
  let wave: number = 1200; // 周波数
  let dx: number = (Math.PI * 2) / wave; // 積分
  p.setup = () => {
    p.createCanvas(800, 400);
  };
  p.draw = () => {
    p.background(255);

    velocity += 0.2;
    // p.noFill();
    p.strokeWeight(5);
    p.fill("red");
    p.beginShape();
    Array.from({ length: p.width }).forEach((_, i) => {
      p.vertex(i, p.height / 2 + p.sin(velocity + dx * i) * waveHeight);
    });
    p.vertex(p.width, p.height);
    p.vertex(0, p.height);
    p.vertex(0, p.height / 2 + p.sin(velocity) * waveHeight);
    p.endShape();
  };
};

if (app) {
  new p5(skech, app);
}
