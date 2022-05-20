// 1. There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

// for(voter = 1; voter <= 50; voter++){
//     console.log(`Voter number ${voter} is currently voting. 👍`)
// }

// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier
// 3. Confirm that 'percentages2' contains exactly the same values as the
// 'percentages' array that we created manually in the previous assignment,
// and reflect on how much better this solution is


// const populations = [5 , 6, 10, 1400];
// function percentageOfTheWorld1 (population) {
//     return ((population / 7900 ) * 100).toFixed(2)
// };
// const percentages2 = [];
// for(let i = 0; i < populations.length; i++){
//     const perc = percentageOfTheWorld1(populations[i])
//     percentages2.push(perc)
// };

// console.log(percentages2);


// 1. Store this array of arrays into a variable called 'listOfNeighbours'
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire
// arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
// worry if it's too difficult for you! But you can still try to figure this out anyway �

// listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']]

// for (i = 0; i < listOfNeighbours.length; i++){
//     for (b = 0; b < listOfNeighbours[i].length; b++ ) {
//         console.log(`Neighbour: ${listOfNeighbours[i][b]}`)
//     }
// }


// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
// but this time using a while loop (call the array 'percentages3')
// 2. Reflect on what solution you like better for this task: the for loop or the while
// loop?

// const populations = [5 , 6, 10, 1400];
// function percentageOfTheWorld1 (population) {
//     return ((population / 7900 ) * 100).toFixed(2)
// };
// const percentages3 = [];

// let i = 0;
// while(i < populations.length){
//     const perc = Number(percentageOfTheWorld1(populations[i]))
//     percentages3.push(perc)
//     i++
// };

// console.log(percentages3);

let dice;
while (dice !== 6) {
    dice = Math.trunc(Math.random() * 6) + 1;    
    dice === 6 ? console.log(dice, 'Loops is about do end...') : console.log(dice);
}

