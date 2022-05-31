const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'
    ],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },

};

// 1.
const [players1, players2] = game.players
console.log(players1, players2);
// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// 3.
const allPlayers = [...players1, ...players2]
console.log(allPlayers);
// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
console.log(players1Final);
// 5.
const {
    odds: {
        team1,
        x: draw,
        team2
    }
} = game
console.log(team1, draw, team2);
// 6.
const printGoals = function (...names) {
    console.log(`${names.length} goals were scored.`);
}
printGoals(...game.scored)
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')

//7.
team1 < team2 && console.log('Team 1 is more likely to win.')
team1 > team2 && console.log('Team 2 is more likely to win.')

//Coding Challenge #2
console.log('~*~*~*Coding Challenge #2*~*~*~')

//1.
for (const [goalIndex, goalPlayer] of game.scored.entries()) {
    console.log(`Goal ${goalIndex +1}: ${goalPlayer}`)
}
//2.
const odds = Object.values(game.odds)
let averageOdds = 0;
for (const odd of odds) {
    averageOdds += odd    
}
averageOdds /= odds.length
console.log(averageOdds) 

//3.
for(const [team, odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
    console.log(`Odd of ${teamStr}: ${odd}`)
}
//4.
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
const scorers = {};
for(const player of game.scored){
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);