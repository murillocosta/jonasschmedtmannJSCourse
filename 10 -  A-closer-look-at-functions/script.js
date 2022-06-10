'use strict';

// const bookings = []

// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//     //ES 5
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking)
// }

// createBooking('LH123')
// createBooking('LH123', 2, 800)


// const flight = 'LH234'
// const jonas = {
//     name: 'Jonas Schemedtmann',
//     passport: 21245541512
// }

// const checkIn = function (flightNum, passenger){
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if(passenger.passport === 21245541512) {
//         alert('Checked in')
//     } else {
//         alert('Wrong passport!')
//     }
// }

// checkIn(flight, jonas)
// console.log(flight);
// console.log(jonas);

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random() * 10000000000)
// }

// newPassport(jonas)
// checkIn(flight, jonas)

// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase()
// }

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ')
//     return [first.toUpperCase(), ...others].join(' ')
// }

// // Higher-order function

// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best!', upperFirstWord)
// transformer('JavaScript is the best!', oneWord)

// const high5 = function () {
//     console.log('👋🏾');
// }

// document.body.addEventListener('click', high5)


// const greet = greeting => name => console.log(`${greeting}, ${name}.`);

// greet('Hello')('Jonas')

const lufthansa = {
    airLine: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],

    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`
        )
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    }
}

lufthansa.book(239, 'Marina Imbassahy')
lufthansa.book(635, 'Murillo de Alencar')

console.log(lufthansa);

const eurowings = {
    airLine: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book;

// does NOT work
// book(23, 'Sarah Williams')

// CALL method
console.log('---------------------------');
book.call(eurowings, 23, 'Sarah Williams')
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper')
console.log(lufthansa);

const swiss = {
    airLine: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 583, 'Mary Cooper')
console.log(swiss);

console.log('---------------------------');
// APPLY method

const flightData = [583, 'George Cooper']
book.apply(swiss, flightData)
console.log(swiss);
book.call(swiss, ...flightData)

console.log('-'.repeat(60));
// BIND method

const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthansa)
const bookLX = book.bind(swiss)

bookEW(23, 'Steve Williams')

const bookEW23 = book.bind(eurowings, 23)
bookEW23('Jonas Crazy')
bookEW23('Joacquin Cooper')

// with Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);

    this.planes++
    console.log(this.planes);
}


document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))


const addTax = (rate, value) => value + value * rate;

const addVAT = (value) => addTax(0.23, value)

console.log('recursive addVat: ',addVAT(100));
