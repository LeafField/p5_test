import "../css/style.css";
import p5 from "p5";

const app = document.querySelector<HTMLDivElement>("#app");

const sketch = (p: p5) => {
  let sakura: Sakura[] = [];
  let Num: number = 30;

  p.setup = () => {
    p.createCanvas(600, 400);
    p.colorMode(p.HSB);
    p.stroke(200);

    for (let i = 0; i < Num; i++) {
      sakura.push(new Sakura(p));
    }
  };

  p.draw = () => {
    p.background(255);
    for (let i = 0; i < Num; i++) {
      sakura[i].update();
      sakura[i].render();
    }
  };
};

if (app) {
  new p5(sketch, app);
}

class Sakura {
  n: number = 4; // 花びらの枚数
  size: number; // 大きさ
  vecLocation: p5.Vector; // 座標

  // 色設定
  hue: number;
  saturation: number;
  brightness: number;
  alpha: number;

  // アニメーション用
  xBase: number;
  xRadius: number;
  xTheta: number;
  xaVelocity: number;
  yVelocity: number;
  ySizeTheta: number;
  ySizeAVelocity: number;
  yScale: number;

  constructor(private p: p5) {
    this.size = p.random(20, 50);

    //色設定
    this.hue = p.random(347, 353);
    this.saturation = p.random(25, 31);
    this.brightness = 100;
    this.alpha = p.random(0.6, 1);

    this.xBase = p.random(p.width);
    this.xRadius = p.random(50, 100);
    this.xTheta = p.random(360);
    this.xaVelocity = p.random(1, 2);
    this.yVelocity = this.size / 20;

    // 花びらの形を変える
    this.ySizeTheta = p.random(360);
    this.ySizeAVelocity = this.size / 20;
    this.yScale = 1;

    this.vecLocation = this.p.createVector(this.xBase, p.random(p.height));
  }

  update() {
    // 基準値 + sinθ * 半径
    this.vecLocation.x =
      this.xBase + this.xRadius * Math.sin(this.radians(this.xTheta));

    // 角速度→角度
    this.xTheta += this.xaVelocity;

    this.vecLocation.y += this.yVelocity;

    // 花びらの形を変える計算式
    this.yScale = Math.abs(Math.sin(this.radians(this.ySizeTheta)));
    this.ySizeTheta += this.ySizeAVelocity;

    if (this.vecLocation.y > this.p.height) {
      this.vecLocation.y = -this.size;
    }
  }

  render() {
    this.p.fill(this.hue, this.saturation, this.brightness, this.alpha);
    this.p.push();
    this.p.translate(this.vecLocation.x, this.vecLocation.y);
    this.p.rotate(this.radians(this.xTheta));
    this.p.beginShape();

    for (let theta = 0; theta < 360 / 4; theta++) {
      // let A = (n / Math.PI) * p.radians(theta);
      let A = (4 / Math.PI) * this.radians(theta); //θ
      let mod = Math.floor(A) % 2; // Aの絶対値を2で割った余り
      let r0 = Math.pow(-1, mod) * (A - this.p.floor(A)) + mod; //折れ線の波、-1のs乗
      let r = r0 + this.calculateH(r0) * 2;
      // 極座標から直交座標に変換
      let x = this.size * r * Math.cos(this.radians(theta));
      let y = this.size * this.yScale * r * Math.sin(this.radians(theta));
      this.p.vertex(x, y);
    }

    this.p.endShape();
    this.p.pop();
  }

  calculateH(x: number) {
    if (x < 0.8) {
      return 0;
    } else {
      return 0.8 - x;
    }
  }

  radians(theta: number) {
    return (theta * Math.PI) / 180;
  }
}
