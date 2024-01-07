import "./style.css";
import p5 from "p5";

const app = document.querySelector<HTMLDivElement>("#app");

const skech = (p: p5) => {
  let velocity: number = 0; //速度
  let waveHeight: number = 100; //波の高さ
  let wave: number = 1000; // 周波数
  let dx: number; // 積分

  const renderWave = () => {
    velocity += 0.02;
    p.noFill();
    p.strokeWeight(0.5);
    p.beginShape();
    Array.from({ length: p.width }).forEach((_, i) => {
      p.vertex(i, p.height / 2 + p.sin(velocity + dx * i) * waveHeight);
    });
    p.endShape();
  };

  p.setup = () => {
    p.createCanvas(800, 400);
    dx = (Math.PI * 2) / wave;
  };
  p.draw = () => {
    p.background(255);
    renderWave();
  };
};

if (app) {
  new p5(skech, app);
}
