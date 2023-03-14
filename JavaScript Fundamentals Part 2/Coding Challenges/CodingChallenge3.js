'use strict';

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall
*/

const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 1,
    minimumFractionDigits: 1
});

//Defining Object Mark, including firstName, lastName, mass in kg, and height in meters
const mark = {
    fName: 'Mark',
    lName: 'Miller',
    mass: 78,
    height: 1.69,

    //Defining a calcBMI function that takes mass / height * height
    calcBMI: function() {
        this.bmi = formatter.format(this.mass / this.height ** 2);
        return this.bmi;
    }
}

//Defining Object John, including firstName, lastName, mass in kg, and height in meters
const john = {
    fName: 'John',
    lName: 'Smith',
    mass: 92,
    height: 1.95,

    //Defining a calcBMI function that takes mass / height * height
    calcBMI: function() {
        this.bmi = formatter.format(this.mass / this.height ** 2);
        return  this.bmi;
    }
}

//Calls calcBMI functions to be used later in the project
mark.calcBMI();
john.calcBMI();

console.log(mark.bmi);
console.log(john.bmi);

//Checking if Mark or John has higher BMI then printing to console who has higher BMI, if they are the same it says so
if (mark.bmi > john.bmi) {
    console.log(`${mark.fName} ${mark.lName}'s BMI (${mark.bmi}) is higher then ${john.fName} ${john.lName}'s BMI (${john.bmi})!`);
}
else if (john.bmi > mark.bmi) {
    console.log(`${john.fName} ${john.lName}'s BMI (${john.bmi}) is higher then ${mark.fName} ${mark.lName}'s BMI (${mark.bmi})!`);
}
else {
    console.log(`BMI's are the same.`);
}