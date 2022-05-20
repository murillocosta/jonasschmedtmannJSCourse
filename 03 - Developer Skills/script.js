// Remember, we're gonna use strict mode in all scripts now!
'use strict';


// find max temp
// find min temp
// ampTemperature = maxtemp - mintemp

// 1.) Understanding the problem
// how to compute the max and min temp?
// what's a senseo error? and what to do?


// 2.) Breaking up into sub-problems
// - how to ignore errors?
// - find max value in temp array
// - find min value in temp array
// - subtract min from max (amplitude) and return it

const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temps1 = [-9, 28, 32];

const calcTemAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i]
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) {
            max = curTemp;
        }

        if (curTemp < min) {
            min = curTemp;
        }
    };

    const tempAmp = max - min
    console.log(` 
    Highest temperature: ${max}°C
    Lowest temperature: ${min}°C
    Temperature amplitude: ${tempAmp}°C.`)
};


// Problem 2:
// Function show now receive 2 arrays of temps

// 1) Undersanting the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays.

// 2) breaking up into sub-problems
// - How to merge two arrays?

const calcTemAmplitudeTwoArrays = function (t1, t2) {

    const temps = t1.concat(t2)
    console.log(temps)

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i]
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) {
            max = curTemp;
        }

        if (curTemp < min) {
            min = curTemp;
        }
    };



    const tempAmp = max - min
    console.log('array: ', temps);
    console.log(` 
    Highest temperature: ${max}°C
    Lowest temperature: ${min}°C
    Temperature amplitude: ${tempAmp}°C.`)
};


calcTemAmplitudeTwoArrays(temps, temps1)