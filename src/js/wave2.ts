import "../css/style.css";
import p5 from "p5";

const app = document.querySelector<HTMLDivElement>("#app");

const skech = (p: p5) => {
  let theta: number = 0; //角度
  let waveHeight: number = 80; //波の高さ
  let wave: number = 1200; // 周波数の周期T
  /**
   * 角周波数はω= 2π * 周波数Fで求められます
   * F = 1/周期Tなので、2π/Tで周期によって周波数をコントロールできます
   */
  let dx: number = (Math.PI * 2) / wave; // 角周波数
  p.setup = () => {
    p.createCanvas(800, 400);
  };
  p.draw = () => {
    p.background(255);

    // p.noFill();
    p.strokeWeight(5);
    p.fill("red");
    p.beginShape();
    Array.from({ length: p.width }).forEach((_, i) => {
      p.vertex(i, p.height / 2 + p.sin(theta + dx * i) * waveHeight);
    });
    p.vertex(p.width, p.height);
    p.vertex(0, p.height);
    p.endShape(p.CLOSE);

    theta += dx * 40; // 倍数で速さ
  };
};

if (app) {
  new p5(skech, app);
}
