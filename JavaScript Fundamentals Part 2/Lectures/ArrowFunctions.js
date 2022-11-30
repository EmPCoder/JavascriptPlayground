'use strict';

//Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

//Arrow function
const calcAge3 = birthYear => 2037 - birthYear; //Same as above just arrow
const age3 = calcAge3(1995);//Setting age3 to = function calcAge3 with birthYear = 1995
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`//Can only ommit return if 1 liner function
}

console.log(yearsUntilRetirement(1995, 'Matt'));
console.log(yearsUntilRetirement(1980, 'Bob'));