'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address
  }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`)
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`)
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
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

const {
  name,
  openingHours,
  categories
} = restaurant
console.log(name, openingHours, categories)

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant
console.log(restaurantName, hours, tags)

const {
  menu = [], starterMenu: starters = []
} = restaurant
console.log(menu, starters)

//nested objects
const {
  fri: {
    open: o,
    close: c
  }
} = openingHours
console.log(o, c)

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2
})

const ingredients = [prompt('Let\'s make the pasta! Ingredient 1? '), prompt('Ingredient 2? '), prompt('Ingredient 3? ')]

restaurant.orderPasta(...ingredients)