import "../css/style.css";
import p5 from "p5";

const app = document.querySelector<HTMLDivElement>("#app");

const skech = (p: p5) => {
  let velocity: number = 0; //速度
  let waveHeight: number = 100; //波の高さ
  let wave: number = 1000; // 周波数
  let yValues: number[]; //高さの配列、1px単位で線の高さを定義する
  let dx: number; //積分

  const calcWave = () => {
    velocity += 0.01;

    let x = velocity;
    for (let i = 0; i < yValues.length; i++) {
      yValues[i] = p.sin(x) * waveHeight;
      x += dx;
    }
  };

  const renderWave = () => {
    p.noFill();
    p.strokeWeight(1);
    p.beginShape();
    for (let i = 0; i < yValues.length; i++) {
      p.vertex(i, p.height / 2 + yValues[i]);
    }
    p.endShape();
  };

  p.setup = () => {
    p.createCanvas(800, 400);
    dx = (Math.PI * 2) / wave;
    yValues = new Array(p.width);
  };
  p.draw = () => {
    p.background(255);
    calcWave();
    renderWave();
  };
};

if (app) {
  new p5(skech, app);
}
