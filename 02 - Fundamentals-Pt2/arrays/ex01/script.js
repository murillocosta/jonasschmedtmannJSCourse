const friends = ['Murillo', 'Marina', 'Quirino']

const populations = [5 , 6, 10, 1400];

const hasFour = populations.length == 4 ? true : false;
console.log(hasFour)

function percentageOfTheWorld1 (population) {
    return ((population / 7900 ) * 100).toFixed(2)
}

const prcntgs1 = percentageOfTheWorld1(populations[0]);
const prcntgs2 = percentageOfTheWorld1(populations[1]);
const prcntgs3 = percentageOfTheWorld1(populations[2]);
const prcntgs4 = percentageOfTheWorld1(populations[3]);

const percentages = [prcntgs1, prcntgs2, prcntgs3, prcntgs4]

console.log(percentages)
