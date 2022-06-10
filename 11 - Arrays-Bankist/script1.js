'use strict';



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES




/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE - does not mutate the original array
// console.log('~*~'.repeat(3),'SLICE','~*~'.repeat(3));
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -1));
// ////shallow copy
// console.log(arr.slice());

// // SPLICE - just like slice, but mutates the original array and the second parameter is the delete count
// console.log('~*~'.repeat(10),'SPLICE','~*~'.repeat(10));
// console.log(arr.splice(2));
// console.log(arr);


// // REVERSE - mutates the original array
// console.log('~*~'.repeat(10),'REVERSE','~*~'.repeat(10));
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f']
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// console.log('~*~'.repeat(10),'CONCAT','~*~'.repeat(10));
// const letters = arr.concat(arr2)
// console.log(letters);

// // JOIN
// console.log('~*~'.repeat(10),'JOIN','~*~'.repeat(10));
// console.log(letters.join(' - '));

// // AT
// console.log('~*~'.repeat(10),'AT','~*~'.repeat(10));
// const arr3 = [23, 11, 64]
// console.log(arr3.at(0));


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   movement > 0 ? console.log(`Movement ${i + 1}: You desposited ${movement}.`) : console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
// }

// // FOREACH
// console.log('~*~'.repeat(10), 'forEach', '~*~'.repeat(10));

// movements.forEach((movement, index, array) => {
//   movement > 0 ? console.log(`Movement ${index + 1}: You desposited ${movement}.`) : console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
// })
// // // Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`, map);
// })

// // // Set

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
// console.log(currenciesUnique);
// currenciesUnique.forEach((value, _, set) => {
//   console.log(`${value}: ${value}`, set);
// });