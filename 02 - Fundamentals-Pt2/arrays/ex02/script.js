const neighbours = ['Argentina', 'Paraguai', 'Brasil'];

neighbours.push('Utopia')
console.log(neighbours)
neighbours.pop();
console.log(neighbours)

const isCentralEuropean = neighbours.includes('Germany') ? 'Probably a central European country :D' : 'Probably not a central European country :D';
console.log(isCentralEuropean)

const indexBrazil = neighbours.indexOf('Brasil')
neighbours[indexBrazil] = 'República Federativa do Brasil'
console.log(neighbours)

