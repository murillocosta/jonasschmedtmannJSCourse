'use strict';

// function logger(text){
//     console.log(text);
// }


// logger('Eu vou alcançar minhas metas.')
// logger('eu serei bem sucedido.')

// function fruitProcessor(apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(10, 5))


// function describeCountry(country, population, capital){
//     return `${country} has ${population} people and its capital city is ${capital}.`
// }

// const brazil = describeCountry('Brazil', '212.6 million', 'Brasília');
// const nordeste = describeCountry('Nordeste','53.6 million', 'Recife');
// const bahia = describeCountry('Bahia', '15.13','Salvador');

// function calcAge1(birthYear) {
//      return 2037 - birthYear;     
// }
// console.log(calcAge1(1960))

function percentageOfTheWorld1 (population) {
    return `${(population / 7900 ) * 100}% of world's population.`
}

const brasil = percentageOfTheWorld1(212.6)
const bahia = percentageOfTheWorld1(15.13)
const nordeste = percentageOfTheWorld1(53.6)

console.log(brasil)
console.log(bahia)
console.log(nordeste)

const percentageOfTheWorld2 = function(population) {
    return `${(population / 7900 ) * 100}% of world's population.`
}

const brasil2 = percentageOfTheWorld2(2120.6)
const bahia2 = percentageOfTheWorld2(150.13)
const nordeste2 = percentageOfTheWorld2(530.6)

console.log(brasil2)
console.log(bahia2)
console.log(nordeste2)


const brasil3 = percentageOfTheWorld(212.6)
const bahia3 = percentageOfTheWorld(15.13)
const nordeste3 = percentageOfTheWorld(53.6)

console.log(brasil3)
console.log(bahia3)
console.log(nordeste3)

const percentageOfTheWorld = population => (population / 7900 ) * 100
const describePopulation = (country, population) => `${country} has ${percentageOfTheWorld(population).toFixed(2)}% of the world's population.`

const brasil4 = describePopulation('Brazil', '212.6')
const nordeste4 = describePopulation('Nordeste', '53.6')
const bahia4 = describePopulation('Bahia', '15.13')


console.log(brasil4)
console.log(bahia4)
console.log(nordeste4)
