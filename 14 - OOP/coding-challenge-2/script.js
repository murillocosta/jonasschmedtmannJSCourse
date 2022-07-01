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
