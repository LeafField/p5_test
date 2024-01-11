import p5 from "p5";

/**
 * mass = 質量、x = 横軸の座標、 y = 縦軸の座標
 */
export class Mover {
  location: p5.Vector;
  velocity: p5.Vector;
  accel: p5.Vector;
  radius: number;

  // 加速度→速度→位置
  constructor(
    private p: p5,
    readonly mass: number = 1,
    private x: number,
    private y: number
  ) {
    this.location = this.p.createVector(this.x, this.y);
    this.velocity = this.p.createVector(0, 0);
    this.accel = this.p.createVector(0, 0);
    this.radius = mass * 10;
  }

  update() {
    this.velocity.add(this.accel);
    this.location.add(this.velocity);
    this.accel.mult(0);
  }
  render() {
    this.p.noStroke();
    this.p.fill(200, 100, 100, 1);
    this.p.ellipse(this.location.x, this.location.y, this.radius, this.radius);
  }

  /**
   * 運動方程式 F(力の大きさ) = m(質量)a(速度)、
   * つまりa = F/mで速度を求められる
   */
  applyForce(force: p5.Vector) {
    let a = force.div(this.mass);
    this.accel.add(a);
  }

  checkEdges() {
    if (this.location.x > this.p.width || this.location.x < 0) {
      this.velocity.x *= -1;
    }
    if (this.location.y > this.p.height || this.location.y < 0) {
      this.velocity.y *= -1;
    }
  }

  attract(mover: Mover) {
    // 万有引力の向きは引き算(sub)で計算する
    let attraction = p5.Vector.sub(this.location, mover.location);

    // 二つの物体間の距離を三平方の定理(ピタゴラスの定理)で計算する
    let distance = attraction.mag();

    distance = this.p.constrain(distance, 5, 30);

    // ベクトルの正規化
    attraction.normalize();

    let G = 1;
    // 万有引力の大きさ
    let power = (G * this.mass * mover.mass) / distance ** 2;
    attraction.mult(power);

    return attraction;
  }
}
