'use strict';

//Defines data structure mattArray with various data inputs, 
//Using arrays noway to assign vars?
const mattArray = [
    'Matt',
    'Hudock',
    2023 - 1995,
    'Web Developer',
    ['Lindsey', 'Brandon', 'Tiger']
];

console.log(mattArray);

//Defining Object matt, and assigning key value pairs (properties) to each data point
const matt = {
    fName: 'Matt',
    lName: 'Hudock',
    age: 2023 - 1995,
    job: 'Web Developer',
    friends: ['Lindsey', 'Brandon', 'Tiger']
};

// console.log(`Hi, my name is ${fName} ${lName} I am ${age} years old, I am a ${job}, and i have the following friends ${friends}`);
console.log(matt);

/* Obj's vs. Arrays order doensn't matter when dealing with objects because you can
pull data out with the property name
Arrays = Ordered Data
Objects = Unstructured Data */