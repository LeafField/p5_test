import p5 from "p5";
import { Mover } from "./mover";

export class Attractor {
  location: p5.Vector;
  mass: number;
  G: number;
  constructor(private p: p5) {
    this.location = this.p.createVector(this.p.width / 2, this.p.height / 2);
    this.mass = 10;
    this.G = 1;
  }

  render() {
    this.p.noStroke();
    this.p.fill(100, 100, 100, 1);
    this.p.ellipse(
      this.location.x,
      this.location.y,
      this.mass * 2,
      this.mass * 2
    );
  }

  attract(mover: Mover) {
    // 万有引力の向きは引き算(sub)で計算する
    let attraction = p5.Vector.sub(this.location, mover.location);

    // 二つの物体間の距離を三平方の定理(ピタゴラスの定理)で計算する
    let distance = attraction.mag();

    distance = this.p.constrain(distance, 5, 25);

    // ベクトルの正規化
    attraction.normalize();

    // 万有引力の大きさ
    // G * m * M / r * r
    let power = (this.G * this.mass * mover.mass) / distance ** 2;
    attraction.mult(power);

    return attraction;
  }
}
