const calcAverage = (score1, score2, score3) => ((score1 + score2 + score3) / 3).toFixed(2);

const avgDolphins = calcAverage(144, 23, 71);
const avgKoalas = calcAverage(0, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas}). 🏆`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins}). 🏆`);
    } else {
        console.log('No team wins...');
    }
}

checkWinner(avgDolphins, avgKoalas);