const Car = function (name, speed = 0) {
  this.name = name;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  return `${this.name} is going at ${this.speed}km/h`;
};

Car.prototype.brake = function () {
  this.speed -= 5;
  return `${this.name} is going at ${this.speed}km/h.`;
};

const fusca = new Car('Fusca', 0);
const uno = new Car('Uno', 0);
console.log(fusca);
console.log(fusca.accelerate());
console.log(fusca.brake());
console.log(uno);
console.log(uno.accelerate());
console.log(uno.brake());

const EV = function (name, speed, charge) {
  Car.call(this, name, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.name} going at ${this.speed} km/h, with a charge of ${this.charge}`,
  );
};

const tesla = new EV('Tesla', 80, 50);
console.log(tesla);
tesla.accelerate();

tesla.chargeBattery(90);
console.log(tesla);
