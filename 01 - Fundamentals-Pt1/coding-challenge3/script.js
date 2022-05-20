averageDolphins = (100 + 100 + 190) / 3;
averageKoalas = (100 + 100 + 189) / 3;

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log(`Dolphins wins. 🏆`)
} else if(averageKoalas > averageDolphins && averageKoalas >= 100) {
    console.log(`Koala wins. 🏆`)
} else if (averageDolphins == averageKoalas && averageDolphins >= 100) {
    console.log(`It's a draw.`)
}