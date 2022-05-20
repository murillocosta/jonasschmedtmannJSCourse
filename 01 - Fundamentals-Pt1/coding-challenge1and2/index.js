// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;
if (markHigherBMI){
    console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(1)})`)
} else {
    console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's (${BMIMark.toFixed(1)})`)
}

console.log(`John's BMI: ${BMIJohn.toFixed(1)}. Mark's BMI: ${BMIMark.toFixed(1)}.`)
 