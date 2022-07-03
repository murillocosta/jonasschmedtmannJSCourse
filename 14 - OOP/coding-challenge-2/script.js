class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    speed *= 1.6;
    this.speed = speed;
  }
}

const fusca = new Car('VW', 50);
fusca.accelerate();
fusca.brake();
console.log(fusca.speedUS);
fusca.speedUS = 100;
fusca.accelerate();

class EV extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    if (this.#charge <= 0) console.log(`Battery is over. Please re-charge it!`);
    if (this.#charge > 0) {
      this.speed += 10;
      this.#charge--;
      console.log(
        `${this.make} is going at ${this.speed}km/h, with a charge of ${
          this.#charge
        }`,
      );
    }
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    speed *= 1.6;
    this.speed = speed;
  }
}

const rivian = new EV('Rivian', 120, 23);
console.log(rivian);
