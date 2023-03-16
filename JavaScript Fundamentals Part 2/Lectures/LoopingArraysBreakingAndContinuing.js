'use strict';

//Defines data structure mattArray with various data inputs, 
//Using arrays noway to assign vars?
const matt = [
    'Matt',
    'Hudock',
    2023 - 1995,
    'Web Developer',
    ['Lindsey', 'Brandon', 'Tiger'],
    true
];

//Creates empty array types
const types = [];

// console.log(matt[0]);
// console.log(matt[1]);
// ...
// console.log(matt[4]);
// matt[5] DNE

// console.log(matt.length);

//For loop that sets i as iterator starting @ 0, compares i to matt.length, 
//increments by one to print each data point in array, also logs type of each data point
for(let i = 0; i <= matt.length; i++) {
    console.log(matt[i], typeof matt[i]);

    //Says types array @ i should = matt [i], fills empty array types.
    // types[i] = typeof matt[i]
    types.push(typeof matt[i]) // Same as above.
}

console.log(types);

//Creates array years 
const years = [1991, 2007, 1969, 2020];

//Creates empty array ages
const ages = [];

// const age = function(birthYear) {
//     birthYear - age;
//     return functionAge;
// }

//For loop that sets i = 0, compares i and years.length, increments i by 1 each time ran
//Also inputs new ages values into ages array
for(let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i]);
}

console.log(ages);

// Continue and Break
//For loop that only continues of type of the data is string.
console.log('--- ONLY STRINGS ---');
for(let i = 0; i < matt.length; i++) {
    if (typeof matt[i] !== 'string') continue;

    console.log(matt[i], typeof matt[i]);
}

//For loop that breaks when a number type is found in data
console.log('--- BREAK WITH NUMBER ---');
for(let i = 0; i < matt.length; i++) {
    if (typeof matt[i] === 'number') break;

    console.log(matt[i], typeof matt[i]);
}



// types[0] = 'string';