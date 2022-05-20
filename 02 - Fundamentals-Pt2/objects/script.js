'strict mode'

const myCountry = {
    country: 'Brazil',
    capital: 'Brasília',
    language: 'brazilian portuguese',
    population: 212.6,
    neighbours: ['Uruguai', 'Argentina', 'Paraguai', ' Colômbia', 'Peru', 'Venezuela', 'Guiana', 'Guiana Francesa', 'Suriname', 'Bolívia'],

    describe: function(){
        const statement = `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbours and a capital called ${this.capital}.`;
        return statement;
    },

    isIsland: function() {
        return this.neighbours === 0 
        }
}




console.log(myCountry.isIsland())