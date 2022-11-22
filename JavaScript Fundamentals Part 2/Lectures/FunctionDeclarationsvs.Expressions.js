'use strict';

//Function Declaration Cant actually call before defined in code.
function calcAge1(birthYear) {
    // const age = 2037 - birthYear; Not needed if only return a value to output
    return 2037 - birthYear;
}

const age1 = calcAge1(1995);
console.log(age1);

//Function Expression (Expression Produces Value)
// const age2 = calcAge2(1991); Wont work because isn't defined after?
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);