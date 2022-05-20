const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function(){
        this.bmi = (this.mass/this.height ** 2).toFixed(2);
        return this.bmi
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    
    calcBMI: function(){
        this.bmi = (this.mass/this.height ** 2).toFixed(2);
        return this.bmi
    }
}

mark.calcBMI()
john.calcBMI()

const statement = mark.bmi < john.bmi ? `John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi}).` : `Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi}).`;


console.log(statement)
console.log(mark.bmi)
console.log(john.bmi)

