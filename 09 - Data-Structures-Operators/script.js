'use strict';



const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address
  }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`)
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`)
  },

};

// DESTRUCTURING ARRAYS

// receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0)
// console.log(starter, mainCourse)

// nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested
// console.log(i, j)
// const [i, , [j, k]] = nested
// console.log(i, j, k)

// default values
// const [p = 1, q = 1, r = 1] = [8, 9]
// console.log(p, q, r)

// OBJECT DESTRUCTURING

// const {
//   name,
//   openingHours,
//   categories
// } = restaurant
// console.log(name, openingHours, categories)

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags
// } = restaurant
// console.log(restaurantName, hours, tags)

// const {
//   menu = [], starterMenu: starters = []
// } = restaurant
// console.log(menu, starters)

// //nested objects
// const {
//   fri: {
//     open: o,
//     close: c
//   }
// } = openingHours
// console.log(o, c)

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2
// })

// const ingredients = [prompt('Let\'s make the pasta! Ingredient 1? '), prompt('Ingredient 2? '), prompt('Ingredient 3? ')]

// // restaurant.orderPasta(...ingredients)

// if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open)

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for(const day of days){
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0 , 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0 , 1) ?? 'Method does not exist');

// // Arrays

// const users = [{name: 'Murillo', email: 'murilloalcosta@gmail.com'}];

// console.log(users[0]?.name ?? 'User array empty');

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

const properties = Object.keys(openingHours)
console.log('properties: ', properties);

let openStr = `We are open on ${properties.length} days:`
for (const day of properties) {
  openStr += `${day}, `
}

console.log(openStr);

// Property VALUES
const values = Object.values(openingHours)
console.log(values);

// Entire Object
const entries = Object.entries(openingHours)
console.log(entries);

for (const [key, {
    open,
    close
  }] of entries) {
  console.log(`On ${key} we open at ${open}h and close ${close}h.`);
}

console.log('*~*~*~*~*~*~ Working with strings #1 *~*~*~*~*~');

const airline = 'GOL Linhas aéreas'
const plane = 'A320'

console.log(plane[0]);
console.log(plane[1]);
console.log('airplane' [2]);

console.log(airline.length);
console.log('plane'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('a'));
console.log(airline.indexOf('Linhas'));

console.log(airline.slice(4));
const newString = airline.slice(4, 10)
console.log('newString: ', newString);

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
console.log('=======practicing=======');
const checkMiddleSeat = seat => {
  // B and E are middle seats
  const lastLetter = seat.slice(-1)
  const checkMiddle = lastLetter === 'B' || lastLetter === 'E' ? 'Middle seat 😔' : 'Not a middle seat 😎'
  console.log(seat, checkMiddle)
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log('*~*~*~*~*~*~ Working with strings #2 *~*~*~*~*~');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization in name

const passenger = 'jOnAS'
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerCorrect);

const loginEmail = ' Hello@Jonas.IO  \n '
const normalizedEmail = loginEmail.toLowerCase().trim()
console.log('email: ', loginEmail);
console.log('email normalizado: ', normalizedEmail);

//replacing
const priceBRL = 'R$288,97'
const priceUS = priceBRL.replace('R', 'U').replace(',', '.')
console.log(priceUS);

const announcment = "All passengers come to boarding door 23. Boarding door 23!"

console.log(announcment.replaceAll('door', 'gate'));
console.log(announcment.replace(/door/g, 'gate'));

// Booleans


console.log('------.includes-----');
const aviao = 'Airbus A320neo'
console.log('inclui A320?', aviao.includes('A320'));
console.log('inclui Boeing?', aviao.includes('Boeing'));

console.log('------.startsWith-----');
console.log('comeca com Airb?', aviao.startsWith('Airb'));
console.log('comeca com A3?', aviao.startsWith('A3'));

if (aviao.startsWith('Airbus') && aviao.endsWith('neo')) {
  console.log('Part of the NEW Airbus family 🛫');
}

const checkBaggage = items => {
  const baggage = items.toLowerCase()
  baggage.includes('knife') || baggage.includes('gun') ? console.log('You are not allowed on board! 🤚🏾') : console.log('Welcome aboard! 👌🏾');
}

checkBaggage('I have a laptop, some Food and a pocket Knife')
checkBaggage('Socks and camera')
checkBaggage('Got some snacks and a gun for protection')

// split and join

const capitalizeName = function (name) {
  const names = name.split(' ')
  const namesCapitalized = []
  for (const word of names) {
    // namesCapitalized.push(word[0].toUpperCase() + word.slice(1)) 
    namesCapitalized.push(word.replace(word[0], word[0].toUpperCase()))
  }
  console.log(namesCapitalized.join(' '));
}

capitalizeName('jessica ann smith davis')
capitalizeName('murillo de alencar')

// padding
const message = 'Go to gate 23!'
console.log(message.padStart(25, '+'));
console.log(message.padEnd(30, '*'));


const maskCreditCard = function (number) {
  const str = number + ''
  const last = str.slice(-4);
  console.log(last.padStart(str.length, '*'));
}

maskCreditCard(4312494181254189)
maskCreditCard('421948129290')

// Repeat

const message2 = 'BAD WEATHER... All Departures Delayed... \n';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛫'.repeat(n)}`);
}

planesInLine(5)
planesInLine(8)

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0,3).toUpperCase()

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';')
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_',' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(45)
  console.log(output);
}