'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never do this
  //   this.calcAge = function () {
  //     console.log(2022 - this.birthYear);
  //   };
};

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1980);

console.log(jonas, matilda, jack);
console.log('instanceof: ', jonas instanceof Person);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

Person.prototype.species = 'Homo sapiens';

// class expression
// const PersonCl = class {}

// class declaration

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    const date = new Date();
    const fullYear = date.getFullYear();
    return fullYear - this.birthYear;
  }

  greet() {
    console.log(`Hey, ${this.fullName}`);
  }

  get age() {
    return this.calcAge();
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there! 👋🏾');
  }
}

const jessica = new PersonCl('Jessica Davis', 1992);
console.log(jessica);
console.log('teste', jessica.age);
console.log(jessica.fullName);
jessica.calcAge();
jessica.greet();

PersonCl.hey();

// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 1150;
// console.log(account.movements);

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const mike = new Student('Mike Tyson', 1998, 'Biology');
Student.prototype.constructor = Student;

console.log(mike);
mike.calcAge();
mike.introduce();

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}.`);
  }
}

const martha = new StudentCl('Martha Jones', 2002, 'Computer Science');
console.log(martha);
martha.introduce();
