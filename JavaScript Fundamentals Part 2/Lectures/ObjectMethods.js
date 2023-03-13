'use strict';

//Defining Object matt, and assigning key value pairs (properties) to each data point
const matt = {
    fName: 'Matt',
    lName: 'Hudock',
    birthYear: 1995,
    job: 'Web Developer',
    friends: ['Lindsey', 'Brandon', 'Tiger'],
    hasDriversLicense: true,

    //Needs to be an expression.
    // calcAge: function(birthYear) {
    //     return 2023 - birthYear
    // }

    calcAge: function() {
        // console.log(this);//Logs the whole object defined above.
        this.age = 2023 - this.birthYear // matt.age setting to age calc
        return this.age;
        // return 2023 - matt.birthYear Breaking DRY Principle
    },

    // driversLicenseCheck: function() {
    //     // this.hasDriversLicense = true;
    //     // return `and he has a driver's license`
    //     if (this.age >= 16){
    //         console.log(`and he has a driver's license`);
    //     }
    //     else {
    //         console.log(`and he has no driver's license`);
    //     }
    //     return;
    // },

    //If true a false no
    getSummary: function() {
        return `${this.fName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no' } driver's license`
    }
};

console.log(matt.calcAge());//Logs calcAge Function defined above.

console.log(matt.age);
console.log(matt.age);
console.log(matt.age);

// console.log(matt['calcAge'](1995));

// Defining Function outside of scope of object
// const calcAge = function (birthYear) {
//     return 2023 - birthYear;
// }

//Challenge
//"Jonas is a 46-year old teacher, and he has a/no driver's license."

// console.log(`${matt.fName} is a ${matt.age}-year old ${matt.job}, ${matt.driversLicenseCheck()}`);

console.log(matt.getSummary());

