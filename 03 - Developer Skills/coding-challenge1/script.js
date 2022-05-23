const temps1 = [17, 21, 23]
const temps2 = [12, 5, -5, 0, 4]

const printForecast = arr => {
    let string = '';
    for (i = 0; i < arr.length; i++) {
        string += ` ... ${arr[i]}C° in ${i + 1} days`
    }
    return string
}

console.log(printForecast(temps1))
console.log(printForecast(temps2))